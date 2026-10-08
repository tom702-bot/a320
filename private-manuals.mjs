import * as pdfjs from './vendor/pdfjs/pdf.min.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('./vendor/pdfjs/pdf.worker.min.mjs', import.meta.url).href;

// Manual bytes and extracted page text never leave this browser.
const loaded = new Map(), indexing = new Map();
let metadata, database, restorePromise;
const openDB = () => database ||= new Promise((resolve, reject) => {
  const request = indexedDB.open('qantas-a321p2f-private-manuals', 1);
  request.onupgradeneeded = () => request.result.createObjectStore('manuals', { keyPath: 'id' });
  request.onsuccess = () => resolve(request.result);
  request.onerror = () => reject(request.error);
});
async function dbAction(mode, action) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('manuals', mode);
    const request = action(tx.objectStore('manuals'));
    tx.oncomplete = () => resolve(request?.result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error || Error('Local storage was interrupted.'));
  });
}
const changed = () => window.dispatchEvent(new Event('manuals-changed'));
export function init(manuals) {
  metadata = manuals;
  return restorePromise ||= (async () => {
    try {
      const records = await dbAction('readonly', store => store.getAll());
      for (const record of records) {
        if (record.hash === metadata[record.id]?.sha256 && record.blob instanceof Blob) {
          loaded.set(record.id, { ...record, remembered: true });
        }
      }
    } catch { /* Session-only loading works when persistent storage is unavailable. */ }
    changed();
  })();
}
export function status(id) {
  const value = loaded.get(id);
  return value ? { ready: true, remembered: value.remembered } : { ready: false };
}
export async function load(id, file, remember) {
  const m = metadata[id];
  if (!file || file.size !== m.size) throw Error('Choose the supplied A321P2F ' + id + ' PDF, effective ' + m.revision + '. This file does not match that edition.');
  const buffer = await file.arrayBuffer();
  const hash = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', buffer)), b => b.toString(16).padStart(2, '0')).join('');
  if (hash !== m.sha256) throw Error('This file does not match the supplied ' + id + ' edition. Source links and study answers are tied to ' + m.revision + '.');
  await forget(id);
  const record = { id, hash, blob: file, remembered: false };
  loaded.set(id, record);
  let message = id + ' ready for this visit. Nothing was uploaded.';
  if (remember) {
    try {
      await dbAction('readwrite', store => store.put({ id, hash, blob: file }));
      record.remembered = true;
      message = id + ' saved privately in this browser for offline use.';
    } catch { message = id + ' ready for this visit. Browser storage could not save it; load it again next time.'; }
  }
  changed();
  return message;
}
export async function forget(id) {
  const record = loaded.get(id);
  try { await dbAction('readwrite', store => store.delete(id)); }
  catch {
    if (record?.remembered) throw Error('The saved copy could not be removed. Clear this site’s browser data to remove it, or retry when local storage is available.');
  }
  loaded.delete(id);
  indexing.delete(id);
  if (record?.url) URL.revokeObjectURL(record.url);
  if (record?.pdf) { try { await (await record.pdf).destroy(); } catch {} }
  changed();
}
function requireManual(id) {
  const record = loaded.get(id);
  if (!record) throw Error('Load your ' + id + ' PDF in the manual library first.');
  return record;
}
async function documentFor(id) {
  const record = requireManual(id);
  return record.pdf ||= record.blob.arrayBuffer().then(buffer => pdfjs.getDocument({
    data: new Uint8Array(buffer), useSystemFonts: false, isEvalSupported: false,
    standardFontDataUrl: new URL('./vendor/pdfjs/standard_fonts/', import.meta.url).href,
    wasmUrl: new URL('./vendor/pdfjs/wasm/', import.meta.url).href,
    // No remote URL, font service, analytics or upload endpoint is used.
  }).promise);
}
export function originalURL(id) {
  const record = requireManual(id);
  return record.url ||= URL.createObjectURL(record.blob);
}
export async function render(id, number, container) {
  const pdf = await documentFor(id), page = await pdf.getPage(number);
  if (!container.isConnected) return;
  const natural = page.getViewport({ scale: 1 });
  const width = Math.max(280, Math.min(1350, container.clientWidth || 900));
  const scale = width / natural.width;
  const viewport = page.getViewport({ scale });
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-label', id + ' original PDF page ' + number);
  canvas.setAttribute('role', 'img');
  canvas.width = Math.floor(viewport.width * ratio);
  canvas.height = Math.floor(viewport.height * ratio);
  canvas.style.width = '100%'; canvas.style.height = 'auto';
  const context = canvas.getContext('2d');
  await page.render({ canvasContext: context, viewport, transform: ratio === 1 ? null : [ratio, 0, 0, ratio, 0, 0] }).promise;
  if (container.isConnected) container.replaceChildren(canvas);
  page.cleanup();
}
async function extract(pdf, number) {
  const page = await pdf.getPage(number), content = await page.getTextContent();
  let text = '', lastY;
  for (const item of content.items) {
    if (!('str' in item)) continue;
    const y = item.transform[5];
    if (lastY !== undefined && Math.abs(y - lastY) > 3 && !text.endsWith('\n')) text += '\n';
    text += item.str + (item.hasEOL ? '\n' : ' ');
    lastY = y;
  }
  page.cleanup();
  return { page: number, text: text.trim() };
}
export async function pageText(id, number) {
  const record = requireManual(id);
  if (record.pages) return record.pages[number - 1].text;
  return (await extract(await documentFor(id), number)).text;
}
export async function pages(id, onProgress = () => {}, cancelled = () => false) {
  const record = requireManual(id);
  if (record.pages) return record.pages;
  // A new search can cancel indexing cleanly; completed pages remain in memory.
  while (indexing.has(id)) {
    await indexing.get(id).catch(() => {});
    if (cancelled() || loaded.get(id) !== record) throw Error('Search cancelled.');
  }
  if (record.pages) return record.pages;
  const work = (async () => {
    const pdf = await documentFor(id);
    const result = record.partial ||= [];
    for (let n = result.length + 1; n <= pdf.numPages; n++) {
      if (cancelled() || loaded.get(id) !== record) throw Error('Search cancelled.');
      result.push(await extract(pdf, n));
      if (n % 20 === 0 || n === pdf.numPages) {
        onProgress(n, pdf.numPages);
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
    record.pages = result;
    return result;
  })();
  indexing.set(id, work);
  try { return await work; } finally { if (indexing.get(id) === work) indexing.delete(id); }
}
