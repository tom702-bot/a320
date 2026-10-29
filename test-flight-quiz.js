'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const data=require('./flight-study-data.js');
const flow=require('./continuous-flight.js'),ctx={StudyFlow:flow};vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/flight-quiz-core.js','utf8')+'\nthis.core=FlightQuizCore;',ctx);const c=ctx.core,bank=require('./fam-quiz-data.js').questions;
assert.equal(bank.length,34);assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
assert.equal(new Set(bank.map(q=>q.section)).size,7);
for(const q of bank){
 const phase=data.phases.find(p=>p.id===q.phase),lesson=phase.steps.find(s=>s.id===q.lesson);assert(lesson);
 assert(q.prompt&&q.explanation&&q.refs.length);
 if(q.kind!=='role'){assert.equal(q.choices.length,4);assert.equal(new Set(q.choices).size,4);assert(q.correct>=0&&q.correct<4);}
 if(q.kind==='role')assert.notEqual(q.role.type,'unassigned');
 for(const seat of ['CM1','CM2']){
  const p=c.prepare(q,seat);assert.equal(p.options.filter(x=>x.correct).length,1);assert.equal(new Set(p.options.map(x=>x.text)).size,4);
  if(q.kind==='role')assert.equal(p.options.find(x=>x.correct).text,flow.crewRole(q.role,seat).label);
 }
}
for(const p of data.phases.filter(p=>bank.some(q=>q.phase===p.id))){const items=c.pool(bank,{phase:p.id,kind:'all'});assert(items.length>=2);assert(items.every(q=>q.phase===p.id));}
assert.equal(c.pool(bank,{phase:'all',kind:'all',missed:true},{}).length,0);
for(let i=0;i<30;i++){
 const run=c.start(bank,{phase:'all',kind:'all',count:20},i%2?'CM1':'CM2');assert.equal(run.items.length,20);assert.equal(new Set(run.items.map(q=>q.id)).size,20);assert.equal(new Set(run.items.map(q=>q.kind)).size,1);
 assert.equal(c.result(run),null);assert.equal(c.advance(run),false);assert.equal(c.answer(run,9),null);
 const marks={};let expected=0;
 while(!run.finished){const q=run.items[run.index];const correct=run.index%3!==0;const chosen=correct?q.options.findIndex(x=>x.correct):null;const a=c.answer(run,chosen);assert(a);expected+=+correct;c.record(marks,a);assert.equal(c.answer(run,chosen),null,'Double submissions must not count');assert.equal(c.result(run),null,'No premature completion');assert(c.advance(run));}
 const result=c.result(run);assert.equal(result.correct,expected);assert.equal(result.total,20);assert.equal(c.answer(run,0),null);assert.equal(c.advance(run),false);
 const missed=c.pool(bank,{phase:'all',kind:'all',missed:true},marks);assert.equal(missed.length,result.missed.length);assert(missed.every(q=>result.missed.includes(q.id)));
 const retry=c.start(missed,{phase:'all',kind:'all',count:50},run.pfSeat,marks);assert.equal(retry.items.length,missed.length);
 const a=c.answer(retry,retry.items[0].options.findIndex(x=>x.correct));c.record(marks,a);assert(!c.pool(bank,{phase:'all',kind:'all',missed:true},marks).some(q=>q.id===a.id));
}
const empty=c.start(bank,{phase:'absent',kind:'all',count:10});assert.equal(empty.items.length,0);assert.equal(c.result(empty),null);
for(const name of ['flight-quiz.js','flight-quiz-core.js','full-flight.js'])new vm.Script(fs.readFileSync(__dirname+'/'+name,'utf8'));
console.log('Quiz verified: 34 unique questions restricted to FAM 21.26.2 and 21.27, shuffled choices, random mixed-section runs, missed-only retry, duplicate-answer guards and complete-run-only scores.');

const focus=require('./fam-quiz-data.js');assert.equal(focus.sourceHash,data.sourceSet.FAM);assert.equal(focus.revision,2);
for(const q of bank){
 assert(q.kind==='sop');assert(q.section==='21.26.2'||/^21\.27(?:\.|$)/.test(q.section));assert.equal(q.sourceHash,focus.sourceHash);
 let blocks=data.studySections[q.section==='21.26.2'?'21.26':q.section].blocks;
 if(q.section==='21.26.2')blocks=blocks.slice(blocks.findIndex(b=>b.text?.startsWith('21.26.2 ')));
 assert(blocks.some(b=>b.page===q.sourcePage&&b.text===q.evidence),'Exact source evidence for '+q.id);
 assert.deepEqual(q.refs,['FAM '+q.section,'FAM PDF p. '+q.sourcePage]);
}
for(const section of ['21.26.2','21.27',...new Set(bank.map(q=>q.section))]){
 const filtered=c.pool(bank,{phase:'all',kind:'all',section});assert(filtered.length);assert(filtered.every(q=>q.section===section||q.section.startsWith(section+'.')));
 for(let i=0;i<10;i++){const run=c.start(bank,{phase:'all',kind:'all',section,count:50});assert.equal(run.items.length,filtered.length);assert(run.items.every(q=>filtered.some(x=>x.id===q.id)));}
}
assert.equal(c.pool(bank,{phase:'all',kind:'all',section:'21.26.1'}).length,0);
assert(readUI().includes('data={...metadata,quiz:FAMQuizData}'));
function readUI(){return fs.readFileSync(__dirname+'/flight-quiz.js','utf8');}
console.log('FAM scope verified: both sections and all six 21.27 subsections; exact evidence/page/hash; unrelated topics excluded in every filter.');
