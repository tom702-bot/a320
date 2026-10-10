'use strict';
// Stable answer indices, one answer per question, complete exams only.
const LineQuizCore = (() => {
  function bank(limitations, content) {return [...limitations.filter(q=>content.limitationsTopics[q.id]?.length).map(q=>({...q,topics:content.limitationsTopics[q.id]})),...content.questions];}
  function select(bank,topicIds,progress,weak=false) {const selected=new Set(topicIds);return bank.filter(q=>q.topics.some(id=>selected.has(id))&&(!weak||progress[q.id]?.weak));}
  function topicStatus(questions,progress) {
    if(!questions.length)return 'reading';
    if(questions.some(q=>progress[q.id]?.weak))return 'weak';
    if(questions.every(q=>(progress[q.id]?.streak||0)>=2))return 'recalled';
    if(questions.some(q=>progress[q.id]?.seen))return 'started';
    return 'new';
  }
  function create(pool,mode='learn') {return {pool:[...pool],mode,index:0,answers:[],committed:false};}
  function answer(run,index) {
    if(!run||run.committed||run.index>=run.pool.length||run.answers.length!==run.index)return false;
    if(!Number.isInteger(index)||index<0||index>=run.pool[run.index].options.length)return false;
    run.answers.push(index);return true;
  }
  function record(progress,q,index) {const old=progress[q.id]||{},correct=index===q.answer;progress[q.id]={seen:(old.seen||0)+1,correct:(old.correct||0)+(correct?1:0),streak:correct?(old.streak||0)+1:0,weak:!correct};}
  function score(run) {const answered=run.answers.length,correct=run.answers.reduce((n,a,i)=>n+Number(a===run.pool[i].answer),0);return {answered,correct,total:run.pool.length,complete:answered===run.pool.length,percent:answered?Math.round(correct/answered*100):null};}
  function commitExam(run,progress) {
    if(!run||run.mode!=='exam'||run.committed||!score(run).complete||!run.pool.length)return false;
    run.pool.forEach((q,i)=>record(progress,q,run.answers[i]));run.committed=true;return true;
  }
  return {bank,select,topicStatus,create,answer,record,score,commitExam};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=LineQuizCore;
