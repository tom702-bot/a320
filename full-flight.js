'use strict';
// Navigation metadata only. All exact procedure wording is rendered from private local PDFs.
const FullFlight = (() => {
  let env, data, phase, stepIndex = 0, mode = 'read', generation = 0, revealed = false;
  let viewedPages = new Set(), activeSource = null;
  const $ = id => document.getElementById(id);
  const step = () => phase.steps[stepIndex];
  const state = () => env.state();
  const sourceReady = s => env.reader.status(s.manual).ready;
  const stamp = () => JSON.stringify(data.sourceSet);
  function init(context, metadata) {
    env = context; data = metadata;
    clearGate();
    if (state().sourceSet !== stamp()) {
      Object.assign(state(), {sourceSet: stamp(), read: {}, practice: {}, last: null});
    }
    for (const key of ['read', 'practice']) if (!state()[key] || typeof state()[key] !== 'object') state()[key] = {};
  }
  function count(p, kind = mode) {
    const marks = state()[kind === 'read' ? 'read' : 'practice'];
    return p.steps.filter(s => marks[s.id] === (kind === 'read' ? true : 'recalled')).length;
  }
  function route(parts = []) {
    const requested = parts[1] || state().last?.phase || data.defaultPhase;
    phase = data.phases.find(p => p.id === requested) || data.phases.find(p => p.id === data.defaultPhase);
    const requestedStep = parts[2] || (state().last?.phase === phase.id ? state().last.step : null);
    const found = phase.steps.findIndex(s => s.id === requestedStep);
    stepIndex = found >= 0 ? found : 0;
    render();
  }
  function remember() {
    state().last = {phase: phase.id, step: step().id}; env.persist();
    // Replace within this route so page navigation does not reset rehearsal state.
    history.replaceState(null, '', '#flight/' + phase.id + '/' + step().id);
  }
  function render() {
    generation++; revealed = mode === 'read'; viewedPages = new Set(); activeSource = null; remember();
    const {esc, header} = env, s = step();
    $('workspace').innerHTML = header('FCOM + FAM · In flight order', 'Full flight procedures',
      'Read the original procedures with the company SOPs at the relevant point. Practise by recalling each part, then revealing its source.',
      '<a class="button" href="#manuals">Your manuals</a>' + env.pageButton('QRH', 329, 'Normal checklist')) + `
      <div class="flight-toolbar">
        <div class="tabs" aria-label="Study mode"><button id="flightRead" aria-pressed="${mode === 'read'}">Read procedures</button><button id="flightPractice" aria-pressed="${mode === 'practice'}">Practise recall</button></div>
        <button id="flightCheckpointLink">Preparation checkpoint</button>
        <button id="flightReferenceLink">All Section 21 topics</button>
      </div>
      <p class="flight-sources hint">FCOM: 1 May 2026 · FAM: revision 30.4, 15 June 2026. Original crew roles, equipment branches and conditions stay visible. In the FAM, follow the A321 or common provisions; A330-only 21.46 is outside this sequence.</p>
      <div class="flight-layout">
        <aside class="flight-navigation" aria-label="Flight phases">
          <label>Flight phase<select id="flightPhase">${data.phases.map(p => `<option value="${p.id}" ${p === phase ? 'selected' : ''}>${esc(p.title)} (${count(p)}/${p.steps.length})</option>`).join('')}</select></label>
          <p class="hint flight-position">${stepIndex + 1} / ${phase.steps.length} in this phase · ${count(phase)} ${mode === 'read' ? 'read' : 'self-rated recalled'}</p>
          <progress max="${phase.steps.length}" value="${count(phase)}" aria-label="Phase study progress"></progress>
          <nav class="flight-step-list" aria-label="Steps in this phase">${phase.steps.map((x, i) => `<button data-flight-step="${i}" ${i === stepIndex ? 'aria-current="step"' : ''}><span class="flight-kind ${x.kind}">${x.kind === 'fcom' ? 'FCOM' : x.kind === 'checkpoint' ? 'CHECK' : 'FAM'}</span><span>${esc(x.title)}</span>${state()[mode === 'read' ? 'read' : 'practice'][x.id] ? '<span aria-label="Previously reviewed">✓</span>' : ''}</button>`).join('')}</nav>
          <p class="hint">Read marks and recall ratings are separate and saved on this device.</p>
          <button id="flightReset">Reset this phase’s practice</button>
        </aside>
        <section class="flight-study panel" aria-labelledby="flightTitle">
          <div class="flight-step-heading"><span class="flight-kind ${s.kind}">${s.kind === 'fcom' ? 'FCOM procedure' : s.kind === 'checkpoint' ? 'Study checkpoint' : 'Company SOP'}</span><span class="hint">${esc(phase.title)}</span></div>
          <h2 id="flightTitle" tabindex="-1">${esc(s.title)}</h2>
          ${s.note ? `<p class="notice">${esc(s.note)}</p>` : ''}
          <div id="flightGate"></div>
          ${mode === 'practice' ? `<div class="flight-recall"><p>Recall the actions, crew roles, callouts and applicable conditions for this part. Then compare with the original source.</p><label>Your recall notes<textarea id="flightRecallNotes" rows="3" placeholder="Optional notes for this attempt. These are not saved or uploaded."></textarea></label><button class="primary" id="flightReveal">Reveal exact procedure</button></div>` : ''}
          <div id="flightContent" ${mode === 'practice' ? 'hidden' : ''}></div>
          <div class="flight-rating actions" id="flightRating" hidden>${mode === 'read' ? '<button id="flightMark" class="primary">Mark read & continue</button>' : '<button id="flightAgain">Needs more practice</button><button id="flightRecalled" class="primary">Recalled it</button>'}</div>
          <p id="flightStatus" class="hint" role="status"></p>
          <div class="flight-bottom actions"><button id="flightPrevious" ${stepIndex === 0 && data.phases.indexOf(phase) === 0 ? 'disabled' : ''}>← Previous</button><span class="hint">${s.manual} · ${esc(s.ref)}</span><button id="flightNext">${stepIndex === phase.steps.length - 1 ? 'Next phase →' : 'Next →'}</button></div>
        </section>
      </div>
      <details class="panel flight-reference" id="flightReference"><summary>Section 21 reference and placement</summary><p class="hint">These links open the exact FAM pages. General policies continue to apply throughout the flight. Phase placement is a study aid; source conditions determine when an action applies.</p><div class="flight-reference-list">${data.reference.map(x => `<div><strong>${esc(x.ref)} · ${esc(x.title)}</strong><span class="hint">${x.ref === '21.46' ? 'A330 only — reference only' : [...new Set(data.phases.filter(p => p.steps.some(s => s.sections?.some(r => r === x.ref || r.startsWith(x.ref + '.')))).map(p => p.title))].join(' · ')}</span>${env.pageButton('FAM', x.page, 'Read FAM')}</div>`).join('')}</div></details>`;
    $('flightRead').onclick = () => {mode = 'read'; render();};
    $('flightPractice').onclick = () => {mode = 'practice'; render();};
    $('flightPhase').onchange = e => {phase = data.phases.find(p => p.id === e.target.value); stepIndex = 0; render();};
    document.querySelectorAll('[data-flight-step]').forEach(b => b.onclick = () => {stepIndex = +b.dataset.flightStep; render();});
    const list = document.querySelector('.flight-step-list'), selected = list.querySelector('[aria-current="step"]');
    if (selected) list.scrollTop = selected.offsetTop - list.offsetTop - 60;
    $('flightCheckpointLink').onclick = () => {phase = data.phases.find(p => p.id === 'cockpit-preparation'); stepIndex = phase.steps.findIndex(s => s.id === 'preparation-checkpoint'); render();};
    $('flightReferenceLink').onclick = () => {$('flightReference').open = true; $('flightReference').scrollIntoView({behavior: 'smooth'});};
    $('flightPrevious').onclick = () => move(-1);
    $('flightNext').onclick = () => move(1);
    $('flightReset').onclick = () => {
      if (confirm('Clear this phase’s recall ratings and rehearsal checks? Read marks and PDFs will stay.')) {
        for (const s of phase.steps) delete state().practice[s.id];
        if (phase.id === 'cockpit-preparation') clearGate();
        env.persist(); render();
      }
    };
    if ($('flightReveal')) $('flightReveal').onclick = () => {
      revealed = true; $('flightContent').hidden = false; $('flightReveal').disabled = true; showContent();
    };
    if (mode === 'read') $('flightMark').onclick = () => rate(true);
    else { $('flightAgain').onclick = () => rate(false); $('flightRecalled').onclick = () => rate(true); }
    if (revealed) showContent();
    if (s.requires && mode === 'practice' && !gateComplete()) {
      $('flightGate').innerHTML = '<p class="notice">First rehearse all five pre-checklist checks. <button id="returnToGate">Go to the preparation checkpoint</button></p>';
      $('returnToGate').onclick = () => $('flightCheckpointLink').click();
      if ($('flightReveal')) $('flightReveal').disabled = true;
    }
  }
  // Rehearsal checks are deliberately session-only: yesterday’s practice cannot satisfy today’s checkpoint.
  const gateChecks = new Set();
  function clearGate() { gateChecks.clear(); }
  function gateComplete() { return data.phases.flatMap(p => p.steps).find(s => s.kind === 'checkpoint').checks.every(c => gateChecks.has(c.id)); }
  function showContent() {
    const s = step(), {esc} = env;
    const content = $('flightContent'); if (!content) return;
    if (s.kind === 'checkpoint') {
      content.innerHTML = `<p>Review or recall each check before proceeding to the Cockpit Preparation Checklist.</p><div class="flight-checks">${s.checks.map(c => `<div><label><input type="checkbox" data-gate-check="${c.id}" ${gateChecks.has(c.id) ? 'checked' : ''} disabled> ${esc(c.title)}</label><button data-check-source="${c.id}">Read ${c.refs.map(r => 'FAM ' + r).join(' / ')}</button></div>`).join('')}</div><p class="hint">Open each source and view all its pages to enable its rehearsal tick. FAM 21.27.1 lists the five checks; their position here follows your requested study order.</p><div id="flightSource"></div>`;
      content.querySelectorAll('[data-check-source]').forEach(b => b.onclick = () => {
        const c = s.checks.find(c => c.id === b.dataset.checkSource);
        showSource({manual: 'FAM', pages: c.pages, ref: c.refs.map(r => 'FAM ' + r).join(', ')}, c.id);
      });
      content.querySelectorAll('[data-gate-check]').forEach(box => box.onchange = () => {
        box.checked ? gateChecks.add(box.dataset.gateCheck) : gateChecks.delete(box.dataset.gateCheck);
        updateRating();
      });
      showSource(s);
    } else {
      content.innerHTML = '<div id="flightSource"></div>';
      showSource(s);
    }
  }
  async function showSource(s, checkId = null, pageIndex = 0) {
    activeSource = {s, checkId, pageIndex};
    const gen = ++generation, container = $('flightSource'), page = s.pages[pageIndex], {esc} = env;
    if (!container) return;
    container.innerHTML = `<div class="flight-source-tools"><strong>${s.manual} · PDF page ${page}${s.manual === 'FAM' ? ' / printed ' + (page - 4) : ''}</strong><span class="hint">${esc(s.ref)} · ${env.manuals[s.manual].revision}</span><div class="actions">${s.pages.map((p,i) => `<button data-flight-page="${i}" aria-pressed="${i === pageIndex}">${p}</button>`).join('')}${env.pageButton(s.manual,page,'Open full page')}${s.crop ? '<span class="hint">Exact portion of the original page</span>' : ''}</div></div><div id="flightSourceBody" class="flight-pdf"></div>`;
    container.querySelectorAll('[data-flight-page]').forEach(b => b.onclick = () => showSource(s, checkId, +b.dataset.flightPage));
    const body = $('flightSourceBody');
    if (!sourceReady(s)) { body.innerHTML = env.localLoader(s.manual); updateRating(); return; }
    body.innerHTML = '<p class="loading">Opening your local source…</p>';
    try {
      await env.reader.render(s.manual, page, body, s.crop ? {crop: s.crop} : undefined);
      if (gen !== generation || !body.isConnected) return;
      viewedPages.add((checkId || step().id) + ':' + page);
      if (checkId && s.pages.every(p => viewedPages.has(checkId + ':' + p))) {
        const check = document.querySelector(`[data-gate-check="${checkId}"]`);
        if (check) check.disabled = false;
      }
      updateRating();
    } catch (err) { if (gen === generation && body.isConnected) {body.innerHTML = '<p class="error">' + esc(err.message) + '</p>'; updateRating();} }
  }
  function updateRating() {
    if (!$('flightRating')) return;
    const s = step();
    const ready = revealed && sourceReady(s) && (s.kind === 'checkpoint' ? gateComplete() : s.pages.every(p => viewedPages.has(s.id + ':' + p))) && (!s.requires || mode === 'read' || gateComplete());
    $('flightRating').hidden = !ready;
    if (s.kind === 'checkpoint') $('flightStatus').textContent = gateComplete() ? 'All five checks rehearsed. You can continue to the checklist.' : `${gateChecks.size} / 5 checks rehearsed.`;
    else $('flightStatus').textContent = ready ? (mode === 'read' ? 'Mark this part read when you have finished.' : 'Compare your recall with the source. Your rating is a self-assessment.') : (revealed ? 'View all source pages before marking this part.' : 'Recall first, then reveal the source.');
  }
  function rate(recalled) {
    if (!$('flightRating') || $('flightRating').hidden) return;
    if (mode === 'read') state().read[step().id] = true;
    else state().practice[step().id] = recalled ? 'recalled' : 'again';
    env.persist(); move(1);
  }
  function move(direction) {
    if (direction > 0 && mode === 'practice' && ((step().kind === 'checkpoint' || step().requires) && !gateComplete())) {
      env.toast('Rehearse all five pre-checklist checks first.'); return;
    }
    const next = stepIndex + direction;
    if (next < 0 || next >= phase.steps.length) {
      const p = data.phases.indexOf(phase) + direction;
      if (p < 0) return;
      if (p >= data.phases.length) {
        env.toast('You have reached the end of securing. Unreviewed parts remain unmarked.'); return;
      }
      phase = data.phases[p]; stepIndex = direction > 0 ? 0 : phase.steps.length - 1;
    } else stepIndex = next;
    render(); $('flightTitle').focus();
  }
  function onManualChange() {
    if (location.hash.split('/')[0] !== '#flight' || !activeSource) return;
    const {s, checkId, pageIndex} = activeSource;
    showSource(s, checkId, pageIndex);
  }
  function dispose() {generation++; activeSource = null;}
  return {init, render: route, onManualChange, dispose};
})();
