'use strict';
const FullFlight = (() => {
  let env,data,phase,index=0,mode='read',revealed=true;
  const gateChecks=new Set(), $=id=>document.getElementById(id);
  const state=()=>env.state(), lessons=()=>StudyFlow.lessons(phase), step=()=>lessons()[index];
  function init(context,metadata){
    env=context;data=metadata;gateChecks.clear();
    const stamp=JSON.stringify([data.sourceSet,data.studyRevision]);
    if(state().sourceSet!==stamp)Object.assign(state(),{sourceSet:stamp,read:{},practice:{},last:null});
    if(!['CM1','CM2'].includes(state().pfSeat))state().pfSeat='CM1';
    for(const key of ['read','practice'])if(!state()[key]||typeof state()[key]!=='object')state()[key]={};
    FlightQuiz.init(env,data,(pid,sid,ref)=>{if(ref){const parent=ref==='21.26.2'?'21.26':ref;let blocks=data.studySections[parent].blocks;if(ref==='21.26.2')blocks=blocks.slice(blocks.findIndex(b=>b.kind==='heading'&&b.text.startsWith('21.26.2 ')));return blocks.map(block).join('');}const p=data.phases.find(p=>p.id===pid),s=p.steps.find(s=>s.id===sid);return StudyFlow.sequence(p,s).map(block).join('');});
  }
  function route(parts=[]){
    if(parts[1]==='quiz')return FlightQuiz.open();
    phase=data.phases.find(p=>p.id===parts[1])||data.phases[0];
    let id=parts[2];const original=phase.steps.find(s=>s.id===id);
    if(original?.kind==='company')id=original.study.target;
    index=Math.max(0,lessons().findIndex(s=>s.id===id));render();
  }
  function count(p){return StudyFlow.lessons(p).filter(s=>state()[mode][s.id]===(mode==='read'?true:'recalled')).length;}
  function gateComplete(){return data.phases.flatMap(p=>p.steps).find(s=>s.kind==='checkpoint').checks.every(c=>gateChecks.has(c.id));}
  function sourceButtons(s){return (s.pages||[]).map(p=>env.pageButton(s.manual,p,s.manual+' p. '+p)).join('');}
  function section(ref){
    const x=data.studySections[ref];
    return `<section class="sop-source"><h4>${env.esc(ref+' · '+x.title)}</h4>${x.blocks.map(block).join('')}</section>`;
  }
  function crewBadge(crew){
    const r=StudyFlow.crewRole(crew,state().pfSeat);
    return `<span class="crew-label crew-${r.tone}" title="${env.esc(r.basis)}"><strong class="study-role">${env.esc(r.label)}</strong><small>${env.esc(r.detail)}</small></span>`;
  }
  function highlights(study){
    return study.highlights.map((t,i)=>`<li class="crew-guidance">${crewBadge(study.crew?.[i])}<span>${env.esc(t)}</span></li>`).join('');
  }
  function company(c){
    const s=data.phases.flatMap(p=>p.steps).find(s=>s.id===c.sourceStep);
    return `<aside class="study-sop" data-sop="${env.esc(c.id)}"><span class="study-label">Company SOP · ${env.esc(c.sections.join(' / '))}</span><h3>${env.esc(c.title)}</h3><ul>${highlights(c)}</ul><details><summary>Read the full SOP here</summary>${c.sections.map(section).join('')}${s?`<div class="source-row">${sourceButtons(s)}</div>`:''}</details></aside>`;
  }
  function block(b){
    const e=env.esc;
    if(b.kind==='company')return company(b);
    if(b.kind==='figure')return `<figure class="study-figure"><img src="${e(b.src)}" alt="${e(b.caption)}" loading="lazy"><figcaption>${e(b.caption)}</figcaption></figure>`;
    if(b.kind==='action')return `<div class="study-action">${crewBadge(b.crew||{role:b.role})}<div class="study-action-body"><div class="study-action-main"><strong>${e(b.label)}</strong><span class="study-target">${e(b.target)}</span></div><div class="study-action-meta">${b.transit?'<span title="Starred in the FCOM transit procedure">★ Transit</span>':''}${b.applicability&&b.applicability!=='ALL'?`<span>${e(b.applicability)}</span>`:''}${b.crew?.type==='unassigned'?`<span class="crew-unallocated-note">${e(b.crew.basis)}</span>`:''}</div></div></div>`;
    if(b.kind==='heading')return `<h3 class="study-heading">${e(b.text)}</h3>`;
    if(b.kind==='applicability')return `<p class="study-applicability">Applies to: ${e(b.text)}</p>`;
    if(b.kind==='bullet')return `<p class="study-bullet">• ${e(b.text)}</p>`;
    return `<p class="study-${e(b.kind)}">${e(b.text)}</p>`;
  }
  function checkpoint(s){
    return `<p class="study-condition">Complete these five verbal checks before the Cockpit Preparation Checklist.</p><p class="hint">Ticks record this study session. They are not aircraft checklist completion.</p>${s.checks.map((c,i)=>`<article class="study-check"><h3>${i+1}. ${env.esc(c.title)}</h3><ul>${highlights(c.study)}</ul><details><summary>Read the full check here</summary>${c.study.sections.map(section).join('')}</details><label class="study-tick"><input type="checkbox" data-gate-check="${c.id}" ${gateChecks.has(c.id)?'checked':''}> I have rehearsed this check</label></article>`).join('')}`;
  }
  function render(){
    const {esc,header}=env,s=step(),list=lessons();revealed=mode==='read';
    state().last={phase:phase.id,step:s.id};env.persist();
    history.replaceState(null,'','#flight/'+phase.id+'/'+s.id);
    $('workspace').innerHTML=header('FCOM actions + company SOPs','Full flight study','Work through the normal procedures in flight order. Company SOPs sit beside the actions they qualify.')+`
      <div class="flight-toolbar"><div class="tabs" aria-label="Study mode"><button id="flightRead" aria-pressed="${mode==='read'}">Guided study</button><button id="flightPractice" aria-pressed="${mode==='practice'}">Practise recall</button><button id="flightQuiz">Multiple-choice quiz</button></div><button id="flightCheckpointLink">Five preparation checks</button></div>
      <div class="crew-allocation"><label>PF seat for this study session<select id="flightPfSeat"><option value="CM1" ${state().pfSeat==='CM1'?'selected':''}>PF: left seat (CM1) · PM: right seat (CM2)</option><option value="CM2" ${state().pfSeat==='CM2'?'selected':''}>PF: right seat (CM2) · PM: left seat (CM1)</option></select></label><p>PF = pilot flying · PM = pilot monitoring. Seat-based duties follow the selection above and retain their source CM1/CM2 label. Shared SOP guidance applies to both pilots; individual duties in the text still apply. Change this study allocation when rehearsing a control transfer; procedure-specific seat restrictions still apply.</p></div>
      <div class="flight-layout study-layout"><aside class="flight-navigation"><label>Flight phase<select id="flightPhase">${data.phases.map((p,i)=>`<option value="${p.id}" ${p===phase?'selected':''}>${i+1}. ${esc(p.title)}</option>`).join('')}</select></label><p class="study-goal">${esc(phase.studyGoal)}</p><label>Find a step in this phase<input type="search" id="flightFind" placeholder="Action or SOP…"></label><p class="hint">${index+1} / ${list.length} steps · ${count(phase)} ${mode==='read'?'studied':'self-rated recalled'}</p><progress max="${list.length}" value="${count(phase)}" aria-label="Phase study progress"></progress><nav class="flight-step-list" aria-label="Study steps">${list.map((x,i)=>`<button data-flight-step="${i}" ${i===index?'aria-current="step"':''}><span class="study-nav-number">${i+1}</span><span>${esc(x.title)}${StudyFlow.cards(phase,x).length?'<small>Company SOP included</small>':''}</span>${state()[mode][x.id]===(mode==='read'?true:'recalled')?'<span aria-label="Completed">✓</span>':''}</button>`).join('')}</nav><p class="hint">Study and recall progress are saved separately on this device.</p><button id="flightReset">Reset recall for this phase</button></aside>
      <section class="flight-study panel"><div class="flight-step-heading"><span class="study-label">${s.kind==='checkpoint'?'Before the checklist':s.study.actionCount+' FCOM actions'}</span><span class="hint">${esc(phase.title)}</span></div><h2 id="flightTitle" tabindex="-1">${esc(s.title)}</h2>
      ${s.requires&&!gateComplete()?'<p class="notice">Rehearse all five preparation checks before marking this checklist complete. <button id="returnToGate">Go to the five checks</button></p>':''}
      ${mode==='practice'?'<div class="flight-recall"><p>Recall the actions, crew roles, conditions and company requirements. Then reveal the integrated procedure and compare.</p><label>Your recall notes<textarea rows="3" placeholder="Optional notes for this attempt; not saved."></textarea></label><button class="primary" id="flightReveal">Reveal actions + SOPs</button></div>':''}
      <div id="flightContent" ${revealed?'':'hidden'}>${s.kind==='checkpoint'?checkpoint(s):StudyFlow.sequence(phase,s).map(block).join('')}</div>
      <div class="flight-rating actions" id="flightRating" ${revealed?'':'hidden'}>${mode==='read'?'<button class="primary" id="flightMark">Studied · next step →</button>':'<button id="flightAgain">Needs more practice</button><button id="flightRecalled" class="primary">Recalled it</button>'}</div><p class="hint" id="flightStatus" role="status"></p>
      <div class="flight-bottom actions"><button id="flightPrevious" ${index===0&&phase===data.phases[0]?'disabled':''}>← Previous</button><button id="flightNext">${index===list.length-1?'Next phase →':'Next step →'}</button></div>
      <details class="study-reference"><summary>Original source pages and study notes</summary><p class="hint">FCOM action wording and original role assignments are retained. PF/PM labels for CM1/CM2 follow the selected study allocation. Roles taken from the general task-sharing instructions are identified; unallocated source items are flagged rather than guessed. Company highlights are study summaries; the full SOP text expands beside them. Aircraft variants and conditional branches must be read with their headings. ★ identifies a starred transit item.</p><p class="hint">FCOM: 1 May 2026 · FAM: revision 30.4, 15 June 2026. All study text and diagrams are included. Original PDF links below use your optional local manual library.</p><div class="source-row">${sourceButtons(s)}</div></details>
      </section></div>`;
    $('flightRead').onclick=()=>{mode='read';render();};$('flightPractice').onclick=()=>{mode='practice';render();};
    $('flightQuiz').onclick=()=>FlightQuiz.open();
    $('flightPfSeat').onchange=e=>{state().pfSeat=e.target.value;env.persist();render();};
    $('flightPhase').onchange=e=>{phase=data.phases.find(p=>p.id===e.target.value);index=0;render();};
    document.querySelectorAll('[data-flight-step]').forEach(b=>b.onclick=()=>{index=+b.dataset.flightStep;render();});
    $('flightFind').oninput=e=>{const term=e.target.value.toLowerCase();document.querySelectorAll('[data-flight-step]').forEach(b=>{const x=list[+b.dataset.flightStep];b.hidden=!JSON.stringify([x.title,x.study,StudyFlow.cards(phase,x)]).toLowerCase().includes(term);});};
    $('flightCheckpointLink').onclick=()=>{phase=data.phases.find(p=>p.id==='cockpit-preparation');index=lessons().findIndex(s=>s.kind==='checkpoint');render();};
    if($('returnToGate'))$('returnToGate').onclick=()=>$('flightCheckpointLink').click();
    if($('flightReveal'))$('flightReveal').onclick=()=>{revealed=true;$('flightContent').hidden=false;$('flightReveal').disabled=true;updateRating();};
    document.querySelectorAll('[data-gate-check]').forEach(box=>box.onchange=()=>{box.checked?gateChecks.add(box.dataset.gateCheck):gateChecks.delete(box.dataset.gateCheck);updateRating();});
    if(mode==='read')$('flightMark').onclick=()=>rate(true);else{$('flightAgain').onclick=()=>rate(false);$('flightRecalled').onclick=()=>rate(true);}
    $('flightPrevious').onclick=()=>move(-1);$('flightNext').onclick=()=>move(1);
    $('flightReset').onclick=()=>{if(confirm('Reset recall ratings for this phase?')){for(const x of list)delete state().practice[x.id];if(phase.id==='cockpit-preparation')gateChecks.clear();env.persist();render();}};
    updateRating();
    const nav=document.querySelector('.flight-step-list'),current=nav.querySelector('[aria-current]');if(current)nav.scrollTop=current.offsetTop-nav.offsetTop-50;
  }
  function updateRating(){
    const s=step(),needsGate=(s.requires||s.kind==='checkpoint')&&!gateComplete();
    $('flightRating').hidden=!revealed;
    for(const id of ['flightMark','flightRecalled'])if($(id))$(id).disabled=needsGate;
    $('flightStatus').textContent=needsGate?`${gateChecks.size} / 5 preparation checks rehearsed this session.`:revealed?(mode==='read'?'Mark studied when you have reviewed the actions and SOPs.':'Compare your recall with the procedure. This rating is a self-assessment.'):'Recall first, then reveal the procedure.';
  }
  function rate(ok){
    if(!revealed||ok&&(step().requires||step().kind==='checkpoint')&&!gateComplete())return;
    state()[mode][step().id]=mode==='read'?true:ok?'recalled':'again';env.persist();move(1);
  }
  function move(direction){
    if(direction>0&&step().kind==='checkpoint'&&!gateComplete()){env.toast('Rehearse the five checks before the preparation checklist.');return;}
    const next=index+direction;
    if(next<0||next>=lessons().length){const p=data.phases.indexOf(phase)+direction;if(p<0)return;if(p>=data.phases.length){env.toast('You have reached the end of securing. Unstudied steps remain unmarked.');return;}phase=data.phases[p];index=direction>0?0:lessons().length-1;}else index=next;
    render();$('flightTitle').focus();$('flightTitle').scrollIntoView({block:'start'});
  }
  // PDF availability does not reset the lesson, recall notes or open SOP explanations.
  return {init,render:route,onManualChange(){},dispose(){}};
})();
