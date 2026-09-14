'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const core=require('./trainer-core.js');
const context={window:{}};
for(const file of ['systems-exam-questions.js','question-bank-questions.js','communications-fcom-questions.js','communications-option-quality.js']){
  vm.runInNewContext(fs.readFileSync(__dirname+'/'+file,'utf8'),context);
}
const combined=context.window.SYSTEMS_EXAM_QUESTIONS;
const workbook=combined.filter(core.isSuppliedQuestionBank);
const active=combined.filter(core.isCommunicationsQuestion);
const categories=['Communications'];
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
const draw=(cats,size,history)=>core.selectSystemDeck(active,cats,size,history,shuffle);
const expected=Array.from(core.WORKBOOK_COMMUNICATION_QUESTION_IDS).concat(Array.from(core.FCOM_COMMUNICATION_QUESTION_IDS));
assert.deepEqual(Array.from(active,q=>q.verification.id),expected);
assert.deepEqual(Array.from(core.COMMUNICATIONS_QUESTION_IDS),expected);
assert.equal(workbook.filter(core.isCommunicationsQuestion).length,19,'the 19 Communications workbook rows remain active');
assert.equal(workbook.filter(q=>!core.isCommunicationsQuestion(q)).length,279,'all 279 other workbook rows are inactive');
assert.equal(active.filter(core.isFcomCommunicationsQuestion).length,51,'all 51 FCOM expansion questions are active');
assert(core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB158')),'CVR activation remains in Communications');
assert(!core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB159')),'DFDR storage is excluded from Communications');
assert(core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB160')),'CVR test remains in Communications');

let history={},seen=new Set(),firstIds;
const first=draw(categories,10,history);
assert.equal(first.questions.length,10);
assert.equal(new Set(ids(first)).size,10,'a run contains no repeated question');
first.questions.forEach(q=>{assert(core.isCommunicationsQuestion(q));seen.add(q.verification.id);});
firstIds=ids(first);
history=JSON.parse(JSON.stringify(first.history));
for(let run=2;run<=7;run++){
  const next=draw(categories,10,history);
  assert.equal(next.questions.length,10);
  assert.equal(new Set(ids(next)).size,10);
  assert.equal(ids(next).filter(id=>seen.has(id)).length,0,'fresh questions are exhausted before any repeat');
  ids(next).forEach(id=>seen.add(id));
  history=JSON.parse(JSON.stringify(next.history));
}
assert.equal(seen.size,70,'all active Communications questions become reachable in seven ten-question runs');
const eighth=draw(categories,10,history);
assert.deepEqual(new Set(ids(eighth)),new Set(firstIds),'the eighth run returns to the oldest ten-question selection');

const noSubjects=draw([],10,eighth.history);
assert.equal(noSubjects.questions.length,0);
assert.deepEqual(noSubjects.history,eighth.history,'an empty selection does not consume questions');
const wrongSubject=draw(['Electrical'],10,eighth.history);
assert.equal(wrongSubject.questions.length,0,'other subjects cannot enter Systems Exam Prep');

const all=draw(categories,0,{}),allAgain=draw(categories,0,all.history);
assert.equal(all.questions.length,70);
assert.equal(new Set(ids(all)).size,70);
assert.notDeepEqual(ids(all),ids(allAgain),'All reshuffles the full bank');
const large=draw(categories,1000,{});
assert.equal(large.questions.length,70);
for(const corrupt of [null,[],false,42,'bad',{QB001:'99',QB002:-1,QB003:Infinity,stale:999}]){
  const result=draw(categories,10,corrupt);
  assert.equal(result.questions.length,10);
  assert.equal(Object.keys(result.history).length,70,'history contains only active Communications IDs');
  assert(Object.values(result.history).every(Number.isSafeInteger));
}
const forged={...workbook[0],verification:{...workbook[0].verification,sourceHash:'different-workbook'}};
assert.equal(core.selectSystemDeck([combined[0],forged],categories,30,{},shuffle).questions.length,0,'missing or wrong workbook provenance fails closed');
const fcom=active.find(core.isFcomCommunicationsQuestion);
const forgedSupplement={...fcom,verification:{...fcom.verification,supplementHash:'different-supplement'}};
assert.equal(core.selectSystemDeck([forgedSupplement],categories,30,{},shuffle).questions.length,0,'wrong supplement provenance fails closed');
assert.equal(JSON.stringify(combined),original,'selection never changes questions, answers, references or images');
console.log('Systems rotation passed: exact 70-question Communications allowlist, FCOM chapter boundary, fresh runs, persisted history and shuffled full-bank runs.');
