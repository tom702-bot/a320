'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const core=require('./trainer-core.js');
const context={window:{}};
for(const file of ['systems-exam-questions.js','question-bank-questions.js']){
  vm.runInNewContext(fs.readFileSync(__dirname+'/'+file,'utf8'),context);
}
const combined=context.window.SYSTEMS_EXAM_QUESTIONS;
const workbook=combined.filter(core.isSuppliedQuestionBank);
const categories=[...new Set(workbook.map(q=>q.c))];
const original=JSON.stringify(combined);
let seed=41;
function shuffle(items){
  const result=items.slice();
  for(let i=result.length-1;i>0;i--){
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    const j=Math.floor(seed/4294967296*(i+1));
    [result[i],result[j]]=[result[j],result[i]];
  }
  return result;
}
const ids=draw=>draw.questions.map(q=>q.verification.id);
const draw=(cats,size,history)=>core.selectSystemDeck(combined,cats,size,history,shuffle);
let history={},seen=new Set(),first;
for(let run=0;run<9;run++){
  const result=draw(categories,30,history);
  assert.equal(result.questions.length,30);
  assert.equal(new Set(ids(result)).size,30,'a run contains no repeated question');
  result.questions.forEach(q=>{
    assert(core.isSuppliedQuestionBank(q),'guide questions never enter a systems quiz');
    assert(!seen.has(q.verification.id),'fresh workbook questions precede repeats across runs');
    seen.add(q.verification.id);
  });
  if(run===0){
    first=new Set(ids(result));
    for(const c of categories)assert.equal(result.questions.filter(q=>q.c===c).length,2,'fresh subjects are balanced');
  }
  // Simulate the JSON round trip used across reloads.
  history=JSON.parse(JSON.stringify(result.history));
}
const boundary=draw(categories,30,history);
const repeats=ids(boundary).filter(id=>seen.has(id));
assert.equal(repeats.length,2,'last 28 undrawn questions are used before two repeats');
repeats.forEach(id=>assert(first.has(id),'only the oldest quiz is repeated at the cycle boundary'));
ids(boundary).forEach(id=>seen.add(id));
assert.equal(seen.size,298,'all workbook rows become reachable');
assert.equal(new Set(ids(boundary)).size,30);

const small=draw(['Hydraulics'],60,{});
assert.equal(small.questions.length,6,'small subjects do not duplicate questions to fill a run');
assert(small.questions.every(q=>q.c==='Hydraulics'));
const switched=draw(categories,30,small.history);
assert(switched.questions.every(q=>q.c!=='Hydraulics'),'changing subject filters retains prior draw history');
const noSubjects=draw([],30,switched.history);
assert.equal(noSubjects.questions.length,0);
assert.deepEqual(noSubjects.history,switched.history,'an empty selection does not consume questions');

const all=draw(categories,0,{}),allAgain=draw(categories,0,all.history);
assert.equal(all.questions.length,298);
assert.equal(new Set(ids(all)).size,298);
assert.notDeepEqual(ids(all),ids(allAgain),'All reshuffles the full bank');
const large=draw(categories,1000,{});
assert.equal(large.questions.length,298);
for(const corrupt of [null,[],false,42,'bad',{QB001:'99',QB002:-1,QB003:Infinity,stale:999}]){
  const result=draw(categories,30,corrupt);
  assert.equal(result.questions.length,30);
  assert.equal(Object.keys(result.history).length,298,'history contains only current workbook IDs');
  assert(Object.values(result.history).every(Number.isSafeInteger));
}
const forged={...workbook[0],verification:{...workbook[0].verification,sourceHash:'different-workbook'}};
assert.equal(core.selectSystemDeck([combined[0],forged],categories,30,{},shuffle).questions.length,0,'missing or wrong workbook provenance fails closed');
assert.equal(JSON.stringify(combined),original,'selection never changes questions, answers, references or images');
console.log('Systems rotation passed: workbook-only selection, 298-row coverage, fresh runs, persisted history, subject filters, cycle boundaries and shuffled full-bank runs.');
