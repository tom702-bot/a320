'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const core=require('./trainer-core.js');
const context={window:{}};
for(const file of ['systems-exam-questions.js','question-bank-questions.js']){
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
const expected=['QB152','QB153','QB154','QB155','QB156','QB157','QB158','QB160','QB161','QB162','QB163','QB164','QB165','QB166','QB167','QB168','QB169','QB170','QB171'];
assert.deepEqual(Array.from(active,q=>q.verification.id),expected);
assert.deepEqual(Array.from(core.COMMUNICATIONS_QUESTION_IDS),expected);
assert.equal(workbook.length-active.length,279,'all 279 other workbook rows are inactive');
assert(core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB158')),'CVR activation remains in Communications');
assert(!core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB159')),'DFDR storage is excluded from Communications');
assert(core.isCommunicationsQuestion(workbook.find(q=>q.verification.id==='QB160')),'CVR test remains in Communications');

let history={},seen=new Set();
const first=draw(categories,10,history);
assert.equal(first.questions.length,10);
assert.equal(new Set(ids(first)).size,10,'a run contains no repeated question');
first.questions.forEach(q=>{assert(core.isCommunicationsQuestion(q));seen.add(q.verification.id);});
history=JSON.parse(JSON.stringify(first.history));
const second=draw(categories,10,history);
assert.equal(second.questions.length,10);
assert.equal(new Set(ids(second)).size,10);
const repeats=ids(second).filter(id=>seen.has(id));
assert.equal(repeats.length,1,'the final nine fresh questions are used before one repeat');
repeats.forEach(id=>assert(ids(first).includes(id),'the repeat comes from the oldest quiz'));
ids(second).forEach(id=>seen.add(id));
assert.equal(seen.size,19,'all active Communications rows become reachable');

const noSubjects=draw([],10,second.history);
assert.equal(noSubjects.questions.length,0);
assert.deepEqual(noSubjects.history,second.history,'an empty selection does not consume questions');
const wrongSubject=draw(['Electrical'],10,second.history);
assert.equal(wrongSubject.questions.length,0,'other subjects cannot enter Systems Exam Prep');

const all=draw(categories,0,{}),allAgain=draw(categories,0,all.history);
assert.equal(all.questions.length,19);
assert.equal(new Set(ids(all)).size,19);
assert.notDeepEqual(ids(all),ids(allAgain),'All reshuffles the full bank');
const large=draw(categories,1000,{});
assert.equal(large.questions.length,19);
for(const corrupt of [null,[],false,42,'bad',{QB001:'99',QB002:-1,QB003:Infinity,stale:999}]){
  const result=draw(categories,10,corrupt);
  assert.equal(result.questions.length,10);
  assert.equal(Object.keys(result.history).length,19,'history contains only active Communications IDs');
  assert(Object.values(result.history).every(Number.isSafeInteger));
}
const forged={...workbook[0],verification:{...workbook[0].verification,sourceHash:'different-workbook'}};
assert.equal(core.selectSystemDeck([combined[0],forged],categories,30,{},shuffle).questions.length,0,'missing or wrong workbook provenance fails closed');
assert.equal(JSON.stringify(combined),original,'selection never changes questions, answers, references or images');
console.log('Systems rotation passed: exact 19-question Communications allowlist, FCOM chapter boundary, fresh runs, persisted history and shuffled full-bank runs.');
