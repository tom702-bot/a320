'use strict';
// Checklist prompts are self-assessed against original sources, never scored as operational answers.
const DiscussionStudy = (() => {
  let env, data, run = null;
  const filters = {stage:'all', phase:'all', status:'all', search:''};
  const $ = id => document.getElementById(id);
  const safe = value => env.esc(value);
  const applicable = item => item.aircraft === 'A321P2F';
  const progress = item => env.state()[item.id] || {};
  const statuses = {new:'Not started', reading:'Reading', review:'Needs practice', checked:'Self-checked'};
  function stateLabel(item) { return statuses[progress(item).status] || statuses.new; }
  function update(item, patch) {
    env.state()[item.id] = {...progress(item), ...patch, updated:new Date().toISOString()};
    env.persist();
  }
  function matches(item) {
    const q = filters.search.trim().toLowerCase();
    const p = progress(item);
    return applicable(item) &&
      (filters.stage === 'all' || item.stage === Number(filters.stage)) &&
      (filters.phase === 'all' || item.phase === filters.phase) &&
      (filters.status === 'all' || (filters.status === 'sources' ? item.requiredSources.length > 0 : (p.status || 'new') === filters.status)) &&
      (!q || [item.title,item.scenario,...item.subtopics,...item.checkpoints,...item.requiredSources].join(' ').toLowerCase().includes(q));
  }
  function stats() {
    const pool = data.items.filter(applicable);
    return {total:pool.length, checked:pool.filter(i => progress(i).status === 'checked').length,
      review:pool.filter(i => progress(i).status === 'review').length,
      sources:pool.filter(i => i.requiredSources.length).length};
  }
  function sourcePanel(item) {
    return `<section class="discussion-sources"><h3>Read and check your answer</h3>
      ${item.references.length ? `<p class="hint">Open the relevant section in your private PDF. These links are reading starting points; check the full procedure, conditions and page effectivity.</p><div class="discussion-references">${item.references.map(r =>
        `<div>${env.pageButton(r.manual,r.page,`${r.manual} · ${r.title}`)}<small>PDF ${r.page === r.end ? 'p. '+r.page : 'pp. '+r.page+'–'+r.end}</small></div>`).join('')}</div>` :
        '<p class="muted">This topic needs a company or operational reference that is not included in the three-manual library.</p>'}
      ${item.requiredSources.length ? `<div class="discussion-gap"><strong>Also check the current reference</strong><ul>${item.requiredSources.map(s=>`<li>${safe(s)}</li>`).join('')}</ul><p>The trainer does not provide an answer key for these requirements. Consult the current document or your trainer.</p></div>` : ''}
      ${item.related.length ? `<div class="actions discussion-related">${item.related.map(key=>`<a class="button" href="#${key}">${safe({limitations:'Open limitations quiz',flows:'Open flow practice',abnormal:'Open abnormal procedures',normal:'Open normal procedures',systems:'Explore systems'}[key])}</a>`).join('')}</div>` : ''}
    </section>`;
  }
  function scope(item) {
    return item.subtopics.length ? `<div class="discussion-scope"><h3>Checklist coverage</h3><ul>${item.subtopics.map(t=>`<li>${safe(t)}</li>`).join('')}</ul></div>` : '';
  }
  function checkpoints(item) {
    return `<h3>Discussion checkpoints</h3><p class="hint">Use these prompts to check the breadth of your answer. They are not a model answer or an action sequence.</p><ol class="discussion-checkpoints">${item.checkpoints.map(c=>`<li>${safe(c)}</li>`).join('')}</ol>`;
  }
  function noteEditor(item) {
    return `<label class="discussion-note-label" for="discussionNotes">Your answer / study notes</label><textarea id="discussionNotes" rows="6" maxlength="20000" placeholder="Answer in your own words. After reading, add corrections and any questions for your trainer.">${safe(progress(item).notes || '')}</textarea><p class="hint" id="discussionSaveStatus" role="status">Saved only in this browser. Nothing is uploaded.</p>`;
  }
  function bindNotes(item) {
    $('discussionNotes').oninput = () => {
      update(item,{notes:$('discussionNotes').value});
      $('discussionSaveStatus').textContent = 'Notes saved on this device.';
    };
  }
  function rateControls(item) {
    return `<div class="discussion-rating"><label class="discussion-confirm"><input id="discussionCompared" type="checkbox"> I compared my answer with the applicable manual${item.requiredSources.length ? ' and the additional current references listed above' : ''}.</label><div class="actions"><button data-discussion-rate="review">Needs more practice</button><button data-discussion-rate="checked" class="primary" disabled>Self-checked</button></div><p class="hint">Personal study progress only. This does not sign off the EFA training record or award quiz mastery.</p><p class="hint" id="discussionRatingStatus" role="status">${safe(stateLabel(item))}</p></div>`;
  }
  function bindRating(item, after) {
    const checked = document.querySelector('[data-discussion-rate="checked"]');
    $('discussionCompared').onchange = () => { checked.disabled = !$('discussionCompared').checked; };
    document.querySelectorAll('[data-discussion-rate]').forEach(b => {
      b.onclick = () => {
        const status = b.dataset.discussionRate;
        if (status === 'checked' && !$('discussionCompared').checked) return;
        update(item,{status});
        $('discussionRatingStatus').textContent = stateLabel(item)+' · saved on this device';
        if (after) {
          document.querySelectorAll('[data-discussion-rate]').forEach(x => { x.disabled=true; });
          $('discussionCompared').disabled=true;
          after(status);
        }
      };
    });
  }
  function render(parts=[]) {
    run = null;
    const id = parts[1] === 'topic' ? parts[2] : null;
    const item = data.items.find(i => i.id === id);
    if (item && applicable(item)) return detail(item);
    if (parts[1] === 'quick') return start(env.shuffle(data.items.filter(applicable)).slice(0,5));
    list();
  }
  function list() {
    const s = stats();
    const phases = [...new Set(data.items.filter(applicable).map(i=>i.phase))];
    $('workspace').innerHTML = env.header('EFA340 · Stage 1 & Stage 2','Line training discussions','Read the source, rehearse an answer and keep track of what needs more practice.') + `
      <section class="discussion-overview" aria-label="Discussion coverage">
        <div><strong>${s.total}</strong><span>A321P2F topics</span></div><div><strong>${s.checked}</strong><span>Self-checked</span></div><div><strong>${s.review}</strong><span>Need practice</span></div>
        <p>Every visible row and bullet point from your five checklist photos is included. Three A330-only rows are listed separately below.</p>
      </section>
      <div class="discussion-toolbar panel"><div class="filters"><label>Find a discussion<input id="discussionSearch" type="search" placeholder="CTWO+, cargo door, DPA, post-flight…" value="${safe(filters.search)}"></label>
        <label>Stage<select id="discussionStage" aria-label="Stage"><option value="all">Both stages</option><option value="1">Stage 1</option><option value="2">Stage 2</option></select></label>
        <label>Phase<select id="discussionPhase" aria-label="Phase"><option value="all">All phases</option>${phases.map(p=>`<option>${safe(p)}</option>`).join('')}</select></label>
        <label>Show<select id="discussionStatus" aria-label="Show"><option value="all">All topics</option><option value="new">Not started</option><option value="reading">Reading</option><option value="review">Needs practice</option><option value="checked">Self-checked</option><option value="sources">Additional reference needed</option></select></label></div>
        <div class="discussion-launch"><p id="discussionCount" class="hint" role="status"></p><div class="actions"><button id="discussionClear">Clear filters</button><button id="discussionQuick" class="primary">Practise 5 topics</button><button id="discussionAll">Practise this selection</button></div></div>
      </div><p class="discussion-instructions">Oral practice is self-assessed: answer from memory, reveal the checkpoints, then compare with the original source. Company policy and current operational references are flagged where needed.</p>
      <div id="discussionList"></div>
      <details class="panel discussion-exclusions"><summary>3 A330-only rows · outside A321P2F practice</summary>${data.items.filter(i=>!applicable(i)).map(i=>`<article><h3>${safe(i.title)}</h3><p>${safe(i.scenario)}</p><p class="hint">Stage ${i.stage} · ${safe(i.photo)} · Not counted in your progress.</p></article>`).join('')}</details>
      <details class="discussion-provenance"><summary>Checklist and source coverage</summary><p>${safe(data.source.title)} · ${safe(data.source.revision)}.</p><p>${safe(data.source.scope)}</p><p>${safe(data.source.note)}</p><p>${s.sources} topics need an additional company, local or current operational reference. Their prompts are available for practice; those requirements are not represented as source-verified answers.</p><p>Your self-checks do not replace the candidate/trainer initials required by the official training record.</p></details>`;
    $('discussionStage').value=filters.stage; $('discussionPhase').value=filters.phase; $('discussionStatus').value=filters.status;
    const refresh = () => {
      filters.stage=$('discussionStage').value;filters.phase=$('discussionPhase').value;filters.status=$('discussionStatus').value;filters.search=$('discussionSearch').value;
      const pool=data.items.filter(matches);
      $('discussionCount').textContent=pool.length+' topics in this selection';
      $('discussionQuick').disabled=!pool.length;$('discussionAll').disabled=!pool.length;
      $('discussionList').innerHTML=pool.length ? phases.map(phase=> {
        const group=pool.filter(i=>i.phase===phase); if(!group.length)return '';
        return `<section class="discussion-group"><h2>${safe(phase)} <span>${group.length}</span></h2><div class="discussion-grid">${group.map(i=>`<article class="discussion-card"><div class="discussion-card-meta"><span>Stage ${i.stage}</span><span class="discussion-status ${safe(progress(i).status||'new')}">${safe(stateLabel(i))}</span></div><h3>${safe(i.title)}</h3>${i.subtopics.length?`<p class="discussion-card-topics">${i.subtopics.map(safe).join(' · ')}</p>`:''}<p class="hint">${i.references.length?'Manual reading linked':'Company reference needed'}${i.references.length&&i.requiredSources.length?' · Additional reference needed':''}</p><div class="actions"><a class="button" href="#discussions/topic/${i.id}">Read & study</a><button class="primary" data-discussion-practice="${i.id}">Practise</button></div></article>`).join('')}</div></section>`;
      }).join('') : '<div class="panel"><h2>No matching topics</h2><p>Try a shorter search or clear the filters.</p></div>';
      document.querySelectorAll('[data-discussion-practice]').forEach(b=>{b.onclick=()=>start([data.items.find(i=>i.id===b.dataset.discussionPractice)]);});
    };
    $('discussionSearch').oninput=refresh;
    for(const id of ['discussionStage','discussionPhase','discussionStatus'])$(id).onchange=refresh;
    $('discussionClear').onclick=()=>{Object.assign(filters,{stage:'all',phase:'all',status:'all',search:''});list();};
    $('discussionQuick').onclick=()=>start(env.shuffle(data.items.filter(matches)).slice(0,5));
    $('discussionAll').onclick=()=>start(env.shuffle(data.items.filter(matches)));
    refresh();
  }
  function detail(item) {
    $('workspace').innerHTML=`<div class="discussion-detail"><a class="desk-text-link" href="#discussions">← All discussions</a>${env.header('Stage '+item.stage+' · '+item.phase,item.title,'Study the topic using the original sources, then rehearse it without looking.')}
      <section class="panel"><div class="discussion-scenario"><span class="eyebrow">Try this scenario</span><p>${safe(item.scenario)}</p><button id="discussionSingle" class="primary">Practise this topic</button></div>${scope(item)}${checkpoints(item)}${sourcePanel(item)}${noteEditor(item)}<div class="actions discussion-related"><button id="discussionRead">Mark as reading</button></div>${rateControls(item)}<p class="hint">Checklist: ${safe(item.photo)} · EFA340 V5, April 2025.</p></section></div>`;
    bindNotes(item);bindRating(item);
    $('discussionSingle').onclick=()=>start([item]);
    $('discussionRead').onclick=()=>{update(item,{status:'reading'});$('discussionRatingStatus').textContent='Reading · saved on this device';};
  }
  function start(pool) {
    pool=pool.filter(applicable);if(!pool.length)return;
    run={pool,index:0,results:[],revealed:false};question();
  }
  function question() {
    const r=run,item=r.pool[r.index];r.revealed=false;
    $('workspace').innerHTML=`<div class="discussion-detail">${env.header('Oral practice · Stage '+item.stage,item.title,'Answer aloud or type your response, then check it against the applicable sources.')}
      <section class="panel"><div class="quiz-progress"><progress max="${r.pool.length}" value="${r.index}" aria-label="Discussion practice progress"></progress><span>${r.index+1} / ${r.pool.length}</span></div><h2 id="discussionPrompt" class="discussion-prompt" tabindex="-1">${safe(item.scenario)}</h2>${scope(item)}${noteEditor(item)}
      <div class="actions discussion-related"><button id="discussionReveal" class="primary">Show checkpoints & reading</button><button id="discussionEnd">End practice</button></div><div id="discussionReview" hidden></div><div class="actions discussion-related"><button id="discussionNext" class="primary" hidden>${r.index+1===r.pool.length?'Finish practice':'Next topic'}</button></div></section></div>`;
    bindNotes(item);$('discussionPrompt').focus();window.scrollTo(0,0);
    $('discussionReveal').onclick=()=>{
      if(r.revealed)return;r.revealed=true;$('discussionReveal').hidden=true;
      $('discussionReview').hidden=false;$('discussionReview').innerHTML=checkpoints(item)+sourcePanel(item)+rateControls(item);
      bindRating(item,status=>{r.results.push({id:item.id,status});$('discussionNext').hidden=false;$('discussionNext').focus();});
    };
    $('discussionNext').onclick=()=>{if(r.results.length!==r.index+1)return;r.index++;if(r.index===r.pool.length)finish(false);else question();};
    $('discussionEnd').onclick=()=>finish(true);
  }
  function finish(early) {
    const r=run;if(!r)return;
    const checked=r.results.filter(x=>x.status==='checked').length;
    $('workspace').innerHTML=`<div class="discussion-detail">${env.header('Oral practice',early?'Practice paused':'Practice complete','Your notes and individual self-ratings are saved on this device. No quiz score or training sign-off has been awarded.')}<section class="panel"><div class="result-score">${r.results.length} / ${r.pool.length}</div><p>Topics reviewed · ${checked} self-checked · ${r.results.length-checked} need more practice</p>${early?'<p class="hint">Unreviewed topics keep their previous status.</p>':''}<div class="actions"><button id="discussionReturn" class="primary">Back to discussions</button><button id="discussionWeak">Review topics needing practice</button></div></section></div>`;
    run=null;window.scrollTo(0,0);
    $('discussionReturn').onclick=()=>{if(location.hash!=='#discussions')location.hash='#discussions';else list();};
    $('discussionWeak').onclick=()=>{Object.assign(filters,{stage:'all',phase:'all',status:'review',search:''});if(location.hash!=='#discussions')location.hash='#discussions';else list();};
  }
  return {init(context,payload){env=context;data=payload;},render,stats};
})();
