'use strict';
const FlightQuizCore=(()=>{
 function shuffle(values,random=Math.random){const out=[...values];for(let i=out.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
 function pool(bank,filter,marks={}){return bank.filter(q=>(filter.phase==='all'||q.phase===filter.phase)&&(filter.kind==='all'||q.kind===filter.kind)&&(!filter.missed||marks[q.id]?.lastCorrect===false));}
 function prepare(q,pfSeat,random=Math.random){
  let values=q.choices,correct=q.correct;
  if(q.kind==='role'){
   const role=StudyFlow.crewRole(q.role,pfSeat).label;
   values=['PF','PM','PF + PM','Not assigned in this source entry'];correct=values.indexOf(role);if(correct<0)throw Error('Unsupported quiz role: '+role);
  }
  return {...q,options:shuffle(values.map((text,i)=>({text,correct:i===correct})),random)};
 }
 function start(bank,filter,pfSeat='CM1',marks={},random=Math.random){
  const selected=pool(bank,filter,marks);const n=Math.min(selected.length,Math.max(1,Number(filter.count)||10));
  // Round-robin categories for a mixed quiz, so one topic cannot crowd out the others.
  const groups=shuffle(['sop','procedure','role'],random).map(k=>shuffle(selected.filter(q=>q.kind===k),random));const picked=[];
  while(picked.length<n&&groups.some(g=>g.length))for(const g of groups){if(g.length&&picked.length<n)picked.push(g.pop());}
  return {items:shuffle(picked,random).map(q=>prepare(q,pfSeat,random)),answers:[],index:0,pfSeat,filter:{...filter},finished:false};
 }
 function answer(run,selected){
  const q=run.items[run.index];if(!q||run.finished||run.answers.length!==run.index)return null;
  if(selected!==null&&(!Number.isInteger(selected)||selected<0||selected>=q.options.length))return null;
  const a={id:q.id,selected,correct:selected!==null&&q.options[selected].correct};run.answers.push(a);return a;
 }
 function advance(run){if(run.finished||run.answers.length!==run.index+1)return false;if(run.index+1<run.items.length)run.index++;else run.finished=true;return true;}
 function complete(run){return !!run&&run.finished&&run.items.length>0&&run.answers.length===run.items.length;}
 function result(run){if(!complete(run))return null;const correct=run.answers.filter(a=>a.correct).length;return {correct,total:run.items.length,percent:Math.round(100*correct/run.items.length),missed:run.answers.filter(a=>!a.correct).map(a=>a.id)};}
 function record(marks,a){const old=marks[a.id]||{attempts:0,correct:0};marks[a.id]={attempts:old.attempts+1,correct:old.correct+(a.correct?1:0),lastCorrect:a.correct};}
 return {shuffle,pool,prepare,start,answer,advance,complete,result,record};
})();
if(typeof module!=='undefined')module.exports=FlightQuizCore;
