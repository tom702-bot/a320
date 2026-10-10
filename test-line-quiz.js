'use strict';
const assert=require('node:assert/strict');
const core=require('./line-quiz-core.js'),limitations=require('./data/questions.json'),content=require('./data/line-quiz.json');
const topics=require('./data/discussions.json').items,drills=require('./data/drills.json'),manuals=require('./data/manuals.json');
const bank=core.bank(limitations,content),applicable=topics.filter(t=>t.aircraft==='A321P2F');
assert.equal(bank.length,123);assert.equal(content.questions.length,31);
assert.equal(new Set(bank.map(q=>q.id)).size,123);
assert.equal(new Set(bank.map(q=>q.question)).size,123);
assert.equal(new Set(bank.flatMap(q=>q.topics)).size,29);
assert.equal(applicable.filter(t=>!bank.some(q=>q.topics.includes(t.id))).length,42);
assert.deepEqual(Object.keys(content.limitationsTopics).sort(),limitations.map(q=>q.id).sort());
for(const q of limitations){const reused=bank.find(x=>x.id===q.id),{topics:ids,...original}=reused;assert.deepEqual(original,q,'Existing source-reviewed content must be reused unchanged');assert(ids.length);}
for(const q of bank){
  assert(q.question&&q.explanation&&q.ref,q.id);assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);
  assert(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,q.id);assert(q.pages.length&&q.applicability.length,q.id);
  assert(q.topics.every(id=>applicable.some(t=>t.id===id)),q.id+' must not quiz A330-only or unknown topics');
  assert.equal(q.sourceHash,manuals[q.manual].sha256,q.id+' edition');
}
for(const q of content.questions){
  assert.equal(q.evidence.kind,'drill');const d=drills.find(d=>d.id===q.evidence.id);assert(d,q.id+' drill provenance');
  assert(q.evidence.steps.length,q.id);assert(q.evidence.steps.every(i=>Number.isInteger(i)&&d.steps[i]),q.id+' step provenance');
  const pages=new Set(q.evidence.steps.flatMap(i=>d.steps[i].pages||[d.steps[i].page]));
  assert(q.pages.every(p=>pages.has(p)),q.id+' source pages must come from the cited steps');
  if(q.evidence.includesScope)assert(d.scope);
}
// Overlapping topic assignments must not produce duplicate questions in a run.
const selected=core.select(bank,applicable.map(t=>t.id),{});assert.equal(selected.length,123);
assert.equal(core.select(bank,topics.filter(t=>t.aircraft==='A330 only').map(t=>t.id),{}).length,0);
const q=bank[0],q2=bank[1],wrong=(q.answer+1)%4,progress={};
// Answer IDs survive display reordering, and repeated input cannot earn extra credit.
const display=q.options.map((text,index)=>({text,index})).reverse(),run=core.create([q,q2]);
assert(core.answer(run,display.find(o=>o.text===q.options[q.answer]).index));
assert(!core.answer(run,q.answer));assert.equal(run.answers.length,1);
core.record(progress,q,run.answers[0]);assert.equal(progress[q.id].streak,1);
assert.deepEqual(core.score(run),{answered:1,correct:1,total:2,complete:false,percent:100});
run.index=1;assert(!core.answer(run,-1));assert(!core.answer(run,4));assert(!core.answer(run,0.5));
assert(core.answer(run,q2.answer));assert(core.score(run).complete);
core.record(progress,q,wrong);assert.equal(progress[q.id].streak,0);assert(progress[q.id].weak);
assert.equal(core.topicStatus([q],progress),'weak');
assert.deepEqual(core.select(bank,q.topics,progress,true).map(q=>q.id),[q.id]);
core.record(progress,q,q.answer);assert(!progress[q.id].weak);assert.equal(core.topicStatus([q],progress),'started');
core.record(progress,q,q.answer);assert.equal(core.topicStatus([q],progress),'recalled');
assert.equal(core.topicStatus([],progress),'reading');assert.equal(core.topicStatus([q],{}),'new');
// An incomplete exam changes no progress, including after navigation/abandonment.
const exam=core.create([q,q2],'exam'),examProgress={};core.answer(exam,q.answer);
assert(!core.commitExam(exam,examProgress));assert.deepEqual(examProgress,{});
exam.index=1;core.answer(exam,(q2.answer+1)%4);assert(core.commitExam(exam,examProgress));
assert.equal(core.score(exam).percent,50);assert.equal(examProgress[q.id].seen,1);assert(examProgress[q2.id].weak);
assert(!core.commitExam(exam,examProgress));assert.equal(examProgress[q.id].seen,1);assert(!core.answer(exam,q2.answer));
assert(!core.commitExam(core.create([],'exam'),{}));assert(!core.commitExam(run,{}));
assert.equal(core.score(core.create([q])).percent,null);
console.log('Passed: 123 sourced questions, 29 selected topic mappings, 42 reading-only topics, drill provenance, stable answers, missed review, streaks and complete-exam-only scoring.');
