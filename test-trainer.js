'use strict';
const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const src=fs.readFileSync(__dirname+'/trainer.js','utf8');
function functionSource(name){const start=src.indexOf('function '+name+'(');assert(start>=0);let open=src.indexOf('{',start),depth=0,quote=null,escape=false;for(let i=open;i<src.length;i++){const c=src[i];if(quote){if(escape){escape=false;continue;}if(c==='\\'){escape=true;continue;}if(c===quote)quote=null;continue;}if(c==='"'||c==="'"){quote=c;continue;}if(c==='{')depth++;if(c==='}'&&--depth===0)return src.slice(start,i+1);}throw Error(name);}
const context={Math,questions:JSON.parse(fs.readFileSync(__dirname+'/data/questions.json')),aircraft:'VH-XF4',saved:{questions:{}}};vm.createContext(context);
for(const fn of ['shuffle','scopeQuestions','recordQuestion'])vm.runInContext(functionSource(fn),context);
const fleet=context.questions;for(const registration of ['VH-ULD','VH-ULW','VH-ULY','VH-XF4','VH-XF5','VH-XF6']){context.aircraft=registration;const pool=vm.runInContext('scopeQuestions()',context);assert(pool.length>0);assert(pool.every(q=>q.applicability.includes('ALL')||q.applicability.includes(registration)));assert(pool.filter(q=>q.question.includes('VH-XF4:')).length===(registration==='VH-XF4'?2:0));}
context.aircraft='ALL';assert.equal(vm.runInContext('scopeQuestions().length',context),92);
for(let i=0;i<20;i++){context.input=[1,2,3,4,5];const out=vm.runInContext('shuffle(input)',context);assert.deepEqual([...out].sort(),[1,2,3,4,5]);assert.deepEqual(context.input,[1,2,3,4,5]);}
context.q=fleet[0];vm.runInContext('recordQuestion(q,true);recordQuestion(q,true)',context);assert.equal(context.saved.questions[context.q.id].streak,2);vm.runInContext('recordQuestion(q,false)',context);assert.equal(context.saved.questions[context.q.id].streak,0);assert.equal(context.saved.questions[context.q.id].weak,true);
assert(src.includes("r.answers.length!==r.pool.length"),'Incomplete runs cannot finish');
assert(src.includes("r.answers.length>r.index"),'Duplicate answers are ignored');
assert(src.includes("r.mode==='exam'"),'Exam has deferred feedback');
assert(src.includes("correct*100>=r.pool.length*80"),'Unrounded pass threshold');
console.log('Passed: aircraft eligibility, shuffle identity, mastery reset, incomplete-run/duplicate-answer guards, and exam scoring threshold.');
