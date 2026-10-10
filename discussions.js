'use strict';
// Source-linked multiple choice. Legacy written notes remain local and unscored.
const DiscussionStudy = (() => {
  let env,data,bank=[],run=null;
  const filters={stage:'all',phase:'all',show:'quiz',search:'',mode:'learn',length:'10'};
  const $=id=>document.getElementById(id),safe=value=>env.esc(value);
  const applicable=item=>item.aircraft==='A321P2F';
  const topicQuestions=item=>bank.filter(q=>q.topics.includes(item.id));
  const progress=()=>env.quizState().questions;
  const stateLabel={reading:'Reading only',new:'Not started',started:'In progress',weak:'Needs practice',recalled:'Recalled twice'};
  const status=item=>LineQuizCore.topicStatus(topicQuestions(item),progress());
  const topics=()=>data.items.filter(applicable);
  function stats() {
    const available=topics().filter(t=>topicQuestions(t).length);
    return {total:topics().length,questions:bank.length,quizTopics:available.length,reading:topics().length-available.length,recalled:bank.filter(q=>(progress()[q.id]?.streak||0)>=2).length,weak:bank.filter(q=>progress()[q.id]?.weak).length};
  }
  function matches(item) {
    const q=filters.search.trim().toLowerCase(),count=topicQuestions(item).length,s=status(item);
    return applicable(item)&&(filters.stage==='all'||item.stage===Number(filters.stage))&&(filters.phase==='all'||item.phase===filters.phase)&&(filters.show==='all'||(filters.show==='quiz'&&count>0)||(filters.show==='reading'&&!count)||s===filters.show)&&(!q||[item.title,...item.subtopics].join(' ').toLowerCase().includes(q));
  }
  function selectedQuestions(weak=false) {return LineQuizCore.select(bank,topics().filter(matches).map(t=>t.id),progress(),weak);}
  function scope(item) {return item.subtopics.length?`<div class="discussion-scope"><h3>Checklist coverage</h3><ul>${item.subtopics.map(t=>`<li>${safe(t)}</li>`).join('')}</ul></div>`:'';}
  function sourcePanel(item) {
    return `<section class="discussion-sources"><h3>Read the source</h3>${item.references.length?`<p class="hint">Open the relevant section in your private PDF. Check the complete procedure, conditions and page effectivity.</p><div class="discussion-references">${item.references.map(r=>`<div>${env.pageButton(r.manual,r.page,`${r.manual} · ${r.title}`)}<small>PDF ${r.page===r.end?'p. '+r.page:'pp. '+r.page+'–'+r.end}</small></div>`).join('')}</div>`:'<p class="muted">This topic needs a company or operational reference outside the three-manual library.</p>'}${item.requiredSources.length?`<div class="discussion-gap"><strong>Additional reference for the full topic</strong><ul>${item.requiredSources.map(s=>`<li>${safe(s)}</li>`).join('')}</ul><p>Any quiz questions on this topic cover only the sourced material identified in each answer. They do not test the unavailable company requirements.</p></div>`:''}${item.related.length?`<div class="actions discussion-related">${item.related.map(key=>`<a class="button" href="#${key}">${safe({limitations:'Open limitations practice',flows:'Open flow practice',abnormal:'Read abnormal procedures',normal:'Read normal procedures',systems:'Explore systems'}[key])}</a>`).join('')}</div>`:''}</section>`;
  }
  function answerSource(q) {return `<div class="source"><p>${safe(q.ref)}</p><div class="source-row">${q.pages.map(p=>env.pageButton(q.manual,p)).join('')}</div></div>`;}
  function render(parts=[]) {
    run=null;const item=parts[1]==='topic'?data.items.find(t=>t.id===parts[2]):null;
    if(item&&applicable(item))return detail(item);
    if(parts[1]==='quick')return start(bank,'learn',10);
    list();
  }
  function list() {
    const s=stats(),phases=[...new Set(topics().map(t=>t.phase))];
    $('workspace').innerHTML=env.header('EFA340 · Stage 1 & Stage 2','Line training quiz','Choose an answer. Get a score, a clear explanation and the source page.')+`
      <section class="discussion-overview" aria-label="Quiz progress"><div><strong>${s.questions}</strong><span>Multiple-choice questions</span></div><div><strong>${s.recalled}</strong><span>Recalled twice</span></div><div><strong>${s.weak}</strong><span>To revisit</span></div><p>Questions cover selected material in ${s.quizTopics} checklist topics. All ${s.total} applicable topics remain available to read.</p></section>
      <section class="panel discussion-toolbar"><div class="filters"><label>Find a topic<input id="discussionSearch" type="search" placeholder="Cargo door, crosswind, parking…" value="${safe(filters.search)}"></label>
        <label>Stage<select id="discussionStage" aria-label="Stage"><option value="all">Both stages</option><option value="1">Stage 1</option><option value="2">Stage 2</option></select></label>
        <label>Phase<select id="discussionPhase" aria-label="Phase"><option value="all">All phases</option>${phases.map(p=>`<option>${safe(p)}</option>`).join('')}</select></label>
        <label>Show<select id="discussionStatus" aria-label="Show"><option value="quiz">Quiz topics</option><option value="all">All checklist topics</option><option value="weak">Needs practice</option><option value="new">Not started</option><option value="recalled">Recalled twice</option><option value="reading">Reading only</option></select></label></div>
      <div class="line-quiz-settings"><label>Mode<select id="discussionMode" aria-label="Mode"><option value="learn">Learn · instant feedback</option><option value="exam">Exam · results at the end</option></select></label><label>Questions<select id="discussionLength" aria-label="Questions"><option value="5">5 questions</option><option value="10">10 questions</option><option value="25">25 questions</option><option value="0">All available</option></select></label><div class="actions"><button id="discussionStart" class="primary">Start quiz</button><button id="discussionWeak">Review missed questions</button></div></div>
      <div class="discussion-launch"><p id="discussionCount" class="hint" role="status"></p><button id="discussionClear">Clear filters</button></div></section>
      <p class="discussion-instructions">Answer questions, review explanations and retry anything you missed. “Recalled twice” means two consecutive correct answers to a question; it is personal study progress.</p>
      <div id="discussionList"></div>
      <details class="panel discussion-exclusions"><summary>3 A330-only rows · outside this quiz</summary>${data.items.filter(t=>!applicable(t)).map(t=>`<article><h3>${safe(t.title)}</h3><p>${safe(t.scenario)}</p></article>`).join('')}</details>
      <details class="discussion-provenance"><summary>Question and checklist coverage</summary><p>All 74 visible rows and their bullet points from EFA340 V5, April 2025, remain represented. ${s.reading} applicable topics currently have reading links only: a supported multiple-choice answer key is not available for them.</p><p>The quiz uses the existing source-reviewed limitations bank and questions adapted from the source-linked flow drills. Full topic coverage may still require the current company references listed on each topic.</p><p>Quiz results do not sign off the official training record. Earlier written notes remain on this device and are accessible from the topic reading view.</p></details>`;
    for(const [id,key]of [['discussionStage','stage'],['discussionPhase','phase'],['discussionStatus','show'],['discussionMode','mode'],['discussionLength','length']])$(id).value=filters[key];
    const refresh=()=>{
      filters.search=$('discussionSearch').value;filters.stage=$('discussionStage').value;filters.phase=$('discussionPhase').value;filters.show=$('discussionStatus').value;
      const pool=topics().filter(matches),qs=selectedQuestions(),weak=selectedQuestions(true);
      $('discussionCount').textContent=`${qs.length} questions · ${pool.length} topics in this selection`;
      $('discussionStart').disabled=!qs.length;$('discussionWeak').disabled=!weak.length;
      $('discussionList').innerHTML=pool.length?phases.map(phase=>{
        const group=pool.filter(t=>t.phase===phase);if(!group.length)return '';
        return `<section class="discussion-group"><h2>${safe(phase)} <span>${group.length}</span></h2><div class="discussion-grid">${group.map(t=>{
          const count=topicQuestions(t).length,s=status(t);
          return `<article class="discussion-card"><div class="discussion-card-meta"><span>Stage ${t.stage}</span><span class="discussion-status ${s}">${stateLabel[s]}</span></div><h3>${safe(t.title)}</h3>${t.subtopics.length?`<p class="discussion-card-topics">${t.subtopics.map(safe).join(' · ')}</p>`:''}<p class="hint">${count?`${count} questions · selected material`:'Reading only · no graded answer key'}</p><div class="actions">${count?`<button class="primary" data-discussion-practice="${t.id}">Quiz this topic</button>`:''}<a class="button" href="#discussions/topic/${t.id}">Read topic</a></div></article>`;
        }).join('')}</div></section>`;
      }).join(''):'<div class="panel"><h2>No matching topics</h2><p>Try a shorter search or choose All checklist topics.</p></div>';
      document.querySelectorAll('[data-discussion-practice]').forEach(b=>{b.onclick=()=>start(topicQuestions(data.items.find(t=>t.id===b.dataset.discussionPractice)),filters.mode,Number(filters.length));});
    };
    $('discussionSearch').oninput=refresh;for(const id of ['discussionStage','discussionPhase','discussionStatus'])$(id).onchange=refresh;
    $('discussionMode').onchange=()=>{filters.mode=$('discussionMode').value;};$('discussionLength').onchange=()=>{filters.length=$('discussionLength').value;};
    $('discussionClear').onclick=()=>{Object.assign(filters,{stage:'all',phase:'all',show:'quiz',search:''});list();};
    $('discussionStart').onclick=()=>start(selectedQuestions(),filters.mode,Number(filters.length));
    $('discussionWeak').onclick=()=>start(selectedQuestions(true),filters.mode,Number(filters.length));refresh();
  }
  function detail(item) {
    const qs=topicQuestions(item),oldNotes=env.state()[item.id]?.notes;
    $('workspace').innerHTML=`<div class="discussion-detail"><a class="desk-text-link" href="#discussions">← Quiz and topics</a>${env.header('Stage '+item.stage+' · '+item.phase,item.title,qs.length?`${qs.length} multiple-choice questions cover selected material in this topic.`:'Reading topic · a supported graded answer key is not yet available.')}<section class="panel">${qs.length?'<button id="discussionSingle" class="primary">Quiz this topic</button>':'<p class="notice">This topic remains available for reading. It is excluded from scored quizzes until an answer key can be supported by the applicable source.</p>'}${scope(item)}${sourcePanel(item)}<details class="line-reading-guide"><summary>What to look for when reading</summary><ul class="discussion-checkpoints">${item.checkpoints.map(c=>`<li>${safe(c)}</li>`).join('')}</ul></details>${oldNotes?`<details class="line-reading-guide"><summary>Your earlier notes</summary><p class="legacy-notes">${safe(oldNotes)}</p><p class="hint">Preserved from the earlier study mode. These notes do not affect quiz scores.</p></details>`:''}<p class="hint">Checklist: ${safe(item.photo)} · EFA340 V5, April 2025.</p></section></div>`;
    if(qs.length)$('discussionSingle').onclick=()=>start(qs,filters.mode,Number(filters.length));
  }
  function start(pool,mode='learn',length=10) {if(!pool.length)return;let selected=env.shuffle(pool);if(length)selected=selected.slice(0,length);run=LineQuizCore.create(selected,mode);question();}
  function question() {
    const r=run,q=r.pool[r.index],labels=q.topics.filter(id=>id!=='limitations-review').map(id=>data.items.find(t=>t.id===id)?.title).filter(Boolean);
    $('workspace').innerHTML=`<div class="questions">${env.header('EFA340 · '+(r.mode==='exam'?'Exam':'Learn'),'Line training quiz',r.mode==='exam'?'Answers and explanations appear after you complete the exam.':'Select one answer for immediate feedback.')}<section class="panel"><div class="quiz-progress"><progress max="${r.pool.length}" value="${r.index}" aria-label="Quiz progress"></progress><span>${r.index+1} / ${r.pool.length}</span></div><p class="line-question-topic">${safe(labels[0]||q.category||'Limitations review')}</p><h2 id="lineQuestion" class="question-title" tabindex="-1">${safe(q.question)}</h2>${!q.applicability.includes('ALL')?`<p class="notice variant-note"><strong>Applicability:</strong> ${safe(q.applicability.join(', '))}. Use the specified equipment/table.</p>`:''}<div class="answers" id="lineAnswers">${env.shuffle(q.options.map((text,index)=>({text,index}))).map(({text,index},i)=>`<button class="answer" data-line-answer="${index}"><span class="answer-label">${String.fromCharCode(65+i)}</span><span>${safe(text)}</span></button>`).join('')}</div><div id="lineFeedback" role="status"></div><div class="actions line-quiz-actions"><button id="lineNext" class="primary" hidden>${r.index+1===r.pool.length?'View results':'Next question'}</button><button id="lineEnd">End quiz</button></div></section></div>`;
    $('lineQuestion').focus();window.scrollTo(0,0);
    $('lineAnswers').onclick=e=>{const b=e.target.closest('[data-line-answer]');if(!b||b.disabled)return;choose(Number(b.dataset.lineAnswer));};
    $('lineNext').onclick=()=>{if(r.answers.length!==r.index+1)return;r.index++;if(r.index===r.pool.length)finish();else question();};
    $('lineEnd').onclick=()=>{if(r.mode==='exam'&&r.answers.length<r.pool.length&&!confirm('End this incomplete exam? No exam score or question progress will be saved.'))return;finish(true);};
  }
  function choose(index) {
    const r=run;if(!LineQuizCore.answer(r,index))return;const q=r.pool[r.index],correct=index===q.answer;
    document.querySelectorAll('[data-line-answer]').forEach(b=>{b.disabled=true;if(Number(b.dataset.lineAnswer)===index)b.classList.add('chosen');if(r.mode==='learn'){if(Number(b.dataset.lineAnswer)===q.answer)b.classList.add('correct');else if(Number(b.dataset.lineAnswer)===index)b.classList.add('incorrect');}});
    if(r.mode==='learn'){LineQuizCore.record(progress(),q,index);env.persist();$('lineFeedback').innerHTML=`<div class="feedback ${correct?'line-correct':'line-incorrect'}"><strong>${correct?'Correct':'Not quite'}.</strong><p><strong>Answer: ${safe(q.options[q.answer])}</strong></p><p>${safe(q.explanation)}</p>${answerSource(q)}</div>`;}else $('lineFeedback').textContent='Answer recorded. Feedback follows the completed exam.';
    $('lineNext').hidden=false;$('lineNext').focus();
  }
  function finish(early=false) {
    const r=run;if(!r)return;const result=LineQuizCore.score(r),cancelled=r.mode==='exam'&&!result.complete;
    if(r.mode==='exam'&&!cancelled){if(!LineQuizCore.commitExam(r,progress()))return;env.persist();}
    if(result.complete){env.quizState().lastResult={...result,mode:r.mode,date:new Date().toISOString()};env.persist();}
    const missed=cancelled?[]:r.pool.filter((q,i)=>i<r.answers.length&&r.answers[i]!==q.answer),reviewed=cancelled?[]:r.pool.slice(0,r.answers.length);
    $('workspace').innerHTML=`<div class="questions">${env.header('EFA340 · '+(r.mode==='exam'?'Exam':'Learn'),cancelled?'Exam ended':result.complete?'Quiz complete':'Practice ended',cancelled?'The exam was incomplete. No exam score or question progress was saved.':result.complete?'Review your answers and revisit the source for anything you missed.':'Answered questions are saved. Unanswered questions were not scored.')}<section class="panel">${cancelled?`<p>${result.answered} of ${result.total} questions answered.</p>`:result.answered?`<div class="result-score">${result.correct} / ${result.answered}</div><p>${result.percent}% correct${result.complete?'':' on answered questions · '+result.answered+' of '+result.total+' completed'}</p>`:'<p>No questions answered. No progress was recorded.</p>'}<div class="actions"><button id="lineReturn" class="primary">Choose another quiz</button>${missed.length?`<button id="lineRetry">Retry ${missed.length} missed question${missed.length===1?'':'s'}</button>`:''}<a class="button" href="#home">Study desk</a></div>${reviewed.length?`<details class="line-results" open><summary>Answers and explanations</summary>${reviewed.map((q,i)=>`<article class="review-row"><span class="tag">${r.answers[i]===q.answer?'Correct':'Needs practice'}</span><h3>${safe(q.question)}</h3><p>Your answer: ${safe(q.options[r.answers[i]])}</p><p><strong>Correct answer: ${safe(q.options[q.answer])}</strong></p><p>${safe(q.explanation)}</p>${answerSource(q)}</article>`).join('')}</details>`:''}</section></div>`;
    run=null;window.scrollTo(0,0);$('lineReturn').onclick=()=>{if(location.hash!=='#discussions')location.hash='#discussions';else list();};if(missed.length)$('lineRetry').onclick=()=>start(missed,'learn',0);
  }
  return {init(context,payload,quizContent,limitations){env=context;data=payload;bank=LineQuizCore.bank(limitations,quizContent);},render,stats};
})();
