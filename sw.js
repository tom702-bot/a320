const CACHE='qantas-a321p2f-private-shell-v67';
const ASSETS=['./','./index.html','./A321P2F_Trainer.html','./A321P2F_Checkride_Trainer.html','./trainer.css?v=67','./trainer.js?v=67','./private-manuals.mjs','./vendor/pdfjs/pdf.min.mjs','./vendor/pdfjs/pdf.worker.min.mjs','./manifest.webmanifest','./favicon.svg','./icon-180.png','./icon-192.png','./icon-512.png','./engine.html','./engine-sim.js','./engine-3d.js','./electrical.html','./electrical-sim.js','./hydraulic.html','./hydraulic-sim.js','./integration.html','./data/manuals.json','./data/questions.json','./data/patterns.json','./data/drills.json','./data/discussions.json','./data/line-quiz.json','./line-quiz-core.js?v=67','./discussions.js?v=67'];
ASSETS.push(...["./vendor/pdfjs/wasm/jbig2.wasm", "./vendor/pdfjs/wasm/openjpeg.wasm", "./vendor/pdfjs/wasm/openjpeg_nowasm_fallback.js", "./vendor/pdfjs/wasm/qcms_bg.wasm", "./vendor/pdfjs/standard_fonts/FoxitDingbats.pfb", "./vendor/pdfjs/standard_fonts/FoxitFixed.pfb", "./vendor/pdfjs/standard_fonts/FoxitFixedBold.pfb", "./vendor/pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb", "./vendor/pdfjs/standard_fonts/FoxitFixedItalic.pfb", "./vendor/pdfjs/standard_fonts/FoxitSerif.pfb", "./vendor/pdfjs/standard_fonts/FoxitSerifBold.pfb", "./vendor/pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb", "./vendor/pdfjs/standard_fonts/FoxitSerifItalic.pfb", "./vendor/pdfjs/standard_fonts/FoxitSymbol.pfb", "./vendor/pdfjs/standard_fonts/LiberationSans-Bold.ttf", "./vendor/pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf", "./vendor/pdfjs/standard_fonts/LiberationSans-Italic.ttf", "./vendor/pdfjs/standard_fonts/LiberationSans-Regular.ttf"]);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const scope=new URL(self.registration.scope);
 for(const name of await caches.keys()){
  if(name===CACHE)continue;
  const cache=await caches.open(name),requests=await cache.keys();
  // Clear only superseded caches belonging entirely to this site's path.
  if(requests.length&&requests.every(request=>{const u=new URL(request.url);return u.origin===scope.origin&&u.pathname.startsWith(scope.pathname);}))await caches.delete(name);
 }
 await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url),scope=new URL(self.registration.scope);
 if(event.request.method!=='GET'||url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  if(event.request.mode==='navigate'){
   try{return await fetch(event.request);}catch{return await cache.match(event.request,{ignoreSearch:true})||await cache.match('./index.html')||Response.error();}
  }
  return await cache.match(event.request)||fetch(event.request);
 })());
});
