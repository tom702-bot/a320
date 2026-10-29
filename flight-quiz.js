'use strict';
const FlightQuiz=(()=>{
 let env,data,renderSource,run=null;
 const $=id=>document.getElementById(id),e=x=>env.esc(x),saved=()=>env.state().quiz;
 const labels={sop:'Company SOPs',procedure:'FCOM procedures',role:'Crew duties'};
 function init(context,metadata,review){
  env=context;if(FAMQuizData.sourceHash!==metadata.sourceSet.FAM)throw Error('FAM quiz source does not match the supplied manual.');data={...metadata,quiz:FAMQuizData};renderSource=review;
  const sourceStamp=JSON.stringify(data.sourceSet);
  if(!saved()||saved().revision!==data.quiz.revision||saved().sourceStamp!==sourceStamp)env.state().quiz={revision:data.quiz.revision,sourceStamp,marks:{},prefs:{phase:'all',kind:'all',section:'all',count:10,missed:false},lastResult:null};
  saved().marks||={};saved().prefs||={phase:'all',kind:'all',section:'all',count:10,missed:false};run=null;
 }
 function open(){history.replaceState(null,'','#flight/quiz');if(run){env.state().pfSeat=run.pfSeat;env.persist();renderQuestion();}else setup();}
 function header(description){return env.header('FAM 21.26.2 + 21.27','SOP quiz',description)+`<div class="quiz-nav"><button id="quizStudy">← Back to guided study</button></div>`;}
 function studyButton(){ $('quizStudy').onclick=()=>{const last=env.state().last;FullFlight.render(['flight',last?.phase,last?.step]);}; }
 function setup(){
  const f=saved().prefs,missed=Object.values(saved().marks).filter(x=>x.lastCorrect===false).length,last=saved().lastResult;
  $('workspace').innerHTML=header('Practise only FAM 21.26.2 and 21.27, including subsections 21.27.1–21.27.6. Choose a section, then review the explanation after each answer.')+`
  <section class="panel quiz-setup"><div class="quiz-facts"><span><strong>${data.quiz.questions.length}</strong> sourced questions</span><span><strong>${data.quiz.scope.length}</strong> selected FAM sections</span><span><strong>${missed}</strong> questions to revisit</span></div>
  <div class="quiz-filters"><label>FAM section<select id="quizSection"><option value="all">Both selected sections</option>${[['21.26.2','Loadsheet, performance and data entry'],['21.27','All briefing and check subsections'],['21.27.1','Departure briefing'],['21.27.2','Aircraft serviceability'],['21.27.3','Fuel check'],['21.27.4','Flight plan checks'],['21.27.5','Data confirmation and data check'],['21.27.6','Arrival briefing']].map(([k,v])=>`<option value="${k}" ${f.section===k?'selected':''}>${k} · ${v}</option>`).join('')}</select></label>
  <label>Questions per quiz<select id="quizCount">${[10,20,50].map(n=>`<option value="${n}" ${+f.count===n?'selected':''}>${n===50?'All available questions':n+' questions'}</option>`).join('')}</select></label></div>
  <label class="quiz-review-toggle"><input type="checkbox" id="quizMissed" ${f.missed?'checked':''}> Practise missed questions only</label><p id="quizPool" class="hint" role="status"></p>
  <button id="quizStart" class="primary">Start quiz</button><p class="hint">Questions and choices are shuffled. Answers use the supplied FAM revision 30.4 (15 June 2026). Scores are practice results, not a qualification.</p>
  ${last?`<p class="quiz-last">Last completed quiz: <strong>${last.correct} / ${last.total} (${last.percent}%)</strong></p>`:''}${Object.keys(saved().marks).length?'<details class="quiz-reset"><summary>Clear quiz results</summary><p>Clear saved quiz answers and scores on this device? Guided study progress is kept.</p><button id="quizClear">Clear my quiz results</button></details>':''}</section>`;
  studyButton();
  if($('quizClear'))$('quizClear').onclick=()=>{saved().marks={};saved().lastResult=null;saved().prefs.missed=false;env.persist();setup();};
  for(const id of ['quizSection','quizCount','quizMissed'])$(id).onchange=updateSetup;
  $('quizStart').onclick=()=>{updateSetup();run=FlightQuizCore.start(data.quiz.questions,saved().prefs,env.state().pfSeat,saved().marks);if(run.items.length)renderQuestion();else run=null;};updateSetup();
 }
 function updateSetup(){
  saved().prefs={phase:'all',kind:'all',section:$('quizSection').value,count:+$('quizCount').value,missed:$('quizMissed').checked};
  const n=FlightQuizCore.pool(data.quiz.questions,saved().prefs,saved().marks).length;
  $('quizPool').textContent=n?`${n} matching questions · this quiz will use ${Math.min(n,saved().prefs.count)}.`:'No questions match these choices. Choose another section or turn off missed-only practice.';$('quizStart').disabled=!n;env.persist();
 }
 function source(q){return `<div class="quiz-refs">${q.refs.map(r=>`<span class="tag">${e(r)}</span>`).join('')}</div><details class="quiz-source"><summary>Read this FAM section here</summary>${renderSource(q.phase,q.lesson,q.section)}</details>`;}
 function roleNote(q){
  const crew=q.role||q.answerCrew;if(!crew)return '';
  const r=StudyFlow.crewRole(crew,run.pfSeat);return `<p><strong>${e(r.label)}</strong> · ${e(r.detail)}${crew.type==='context'?`<br>${e(crew.basis)}`:''}</p>`;
 }
 function renderQuestion(){
  history.replaceState(null,'','#flight/quiz');if(FlightQuizCore.complete(run))return results();
  const q=run.items[run.index],a=run.answers[run.index],phase=data.phases.find(p=>p.id===q.phase);
  const correct=q.options.find(o=>o.correct);
  $('workspace').innerHTML=header('Recall the procedure first, then choose the best answer.')+`<section class="panel quiz-question"><div class="quiz-question-top"><span class="study-label">${labels[q.kind]}</span><span>Question ${run.index+1} of ${run.items.length}</span></div><progress max="${run.items.length}" value="${run.answers.length}" aria-label="Quiz progress"></progress><p class="hint">${e(q.section)} · ${e(phase.title)}</p>
  <h2 id="quizPrompt" tabindex="-1">${e(q.prompt)}</h2><div class="quiz-choices" role="group" aria-label="Answer choices">${q.options.map((o,i)=>`<button class="quiz-choice ${a?(o.correct?'quiz-correct':a.selected===i?'quiz-incorrect':''):''}" data-quiz-choice="${i}" ${a?'disabled':''}><span class="quiz-letter">${String.fromCharCode(65+i)}</span><span>${e(o.text)}</span>${a&&o.correct?'<strong>Correct answer</strong>':a&&a.selected===i?'<strong>Your answer</strong>':''}</button>`).join('')}</div>
  ${a?`<div class="quiz-feedback ${a.correct?'is-correct':'is-incorrect'}" role="status"><h3>${a.correct?'Correct':a.selected===null?'Review this answer':'Not quite'}</h3><p><strong>Answer:</strong> ${e(correct.text)}</p><p>${e(q.explanation)}</p>${roleNote(q)}</div>${source(q)}<button class="primary" id="quizNext">${run.index===run.items.length-1?'See results':'Next question →'}</button>`:'<button id="quizUnsure">Not sure · show answer</button>'}
  <div class="quiz-bottom"><button id="quizSetup">Back to quiz setup</button><span class="hint">${run.answers.length} / ${run.items.length} answered</span></div></section>`;
  studyButton();$('quizSetup').onclick=()=>{run=null;setup();};
  document.querySelectorAll('[data-quiz-choice]').forEach(b=>b.onclick=()=>answer(+b.dataset.quizChoice));
  if($('quizUnsure'))$('quizUnsure').onclick=()=>answer(null);
  if($('quizNext'))$('quizNext').onclick=()=>{if(FlightQuizCore.advance(run)){if(FlightQuizCore.complete(run)){saved().lastResult=FlightQuizCore.result(run);env.persist();}renderQuestion();$('quizPrompt')?.focus();}};
 }
 function answer(value){const a=FlightQuizCore.answer(run,value);if(!a)return;FlightQuizCore.record(saved().marks,a);env.persist();renderQuestion();}
 function results(){
  const r=FlightQuizCore.result(run);if(!r)return;
  const missed=run.items.filter(q=>r.missed.includes(q.id));
  $('workspace').innerHTML=header('Review your missed answers, then practise them again or start a new quiz from the selected FAM sections.')+`<section class="panel quiz-results"><h2>Quiz complete</h2><p class="quiz-score">${r.correct} <span>/ ${r.total}</span></p><p>${r.percent}% correct · ${missed.length} to revisit</p><div class="actions">${missed.length?'<button class="primary" id="quizRetry">Retry these missed questions</button>':''}<button id="quizNew">New quiz</button></div>${missed.length?'<h3>Missed questions</h3>':'<p>All answers correct in this quiz.</p>'}${missed.map((q,i)=>`<article class="quiz-missed"><h4>${i+1}. ${e(q.prompt)}</h4><p><strong>Correct answer:</strong> ${e(q.options.find(o=>o.correct).text)}</p><p>${e(q.explanation)}</p>${source(q)}</article>`).join('')}</section>`;
  studyButton();$('quizNew').onclick=()=>{run=null;setup();};if($('quizRetry'))$('quizRetry').onclick=()=>{run=FlightQuizCore.start(data.quiz.questions.filter(q=>r.missed.includes(q.id)),{phase:'all',kind:'all',count:missed.length,missed:false},run.pfSeat,saved().marks);renderQuestion();};
 }
 return {init,open};
})();
