'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {questions,source,buildDeck,resultFor}=require('./type-ratings.js');
const read=file=>fs.readFileSync(path.join(__dirname,file),'utf8');
assert.equal(questions.length,20);
assert.equal(new Set(questions.map(q=>q.id)).size,20);
assert.equal(new Set(questions.map(q=>q.q.toLowerCase())).size,20);
questions.forEach(q=>{
  assert.equal(q.o.length,4);assert.equal(new Set(q.o).size,4);
  assert(Number.isInteger(q.a)&&q.a>=0&&q.a<4);
  assert(q.q&&q.w&&/^61\.(770|775|800)/.test(q.ref));
});
for(const count of [8,20])for(const random of [()=>0,()=>0.999,Math.random]){
  const deck=buildDeck(count,random);assert.equal(deck.length,count);
  assert.equal(new Set(deck.map(q=>q.id)).size,count);
  deck.forEach(q=>{
    assert.equal(q.choices.length,4);assert.equal(new Set(q.choices.map(c=>c.index)).size,4);
    assert.equal(q.choices.find(c=>c.index===q.a).text,q.o[q.a]);
  });
}
const deck=buildDeck(20,()=>0.5);
assert.equal(resultFor(deck,{}).passed,false);
let answers=Object.fromEntries(deck.map(q=>[q.id,q.a]));
assert.equal(resultFor(deck,answers).correct,20);
assert.equal(resultFor(deck,answers).passed,true);
delete answers[deck[0].id];assert.equal(resultFor(deck,answers).complete,false);
assert.equal(resultFor(deck,answers).passed,false);
answers=Object.fromEntries(deck.map((q,i)=>[q.id,i<16?q.a:(q.a+1)%4]));
assert.equal(resultFor(deck,answers).passed,true);
answers[deck[15].id]=(deck[15].a+1)%4;
assert.equal(resultFor(deck,answers).passed,false);
assert.equal(resultFor([],{}).passed,false);
assert.match(questions.find(q=>q.id==='TR12').o[3],/valid AND.*three months/);
assert.match(questions.find(q=>q.id==='TR14').o[1],/aircraft of the type/);
assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(__dirname,source.handout))).digest('hex'),source.handoutSha256);
for(const file of ['type-ratings.html','type-ratings.js',source.handout])assert(read('sw.js').includes('./'+file));
assert(read('index.html').includes('href="type-ratings.html"'));
assert.match(read('type-ratings.html'),/effective period ending 28 September 2026/);
assert.equal(source.checked,'2026-10-01');
assert.equal(source.reviewCreditFrom,'2026-06-30');
assert.match(questions.find(q=>q.id==='TR15').q,/1 July 2026/);
assert.match(questions.find(q=>q.id==='TR15').w,/on or after 30 June 2026/);
assert.match(questions.find(q=>q.id==='TR17').o[0],/that type rating/);
assert.equal(questions.find(q=>q.id==='TR18').o[1],'30 September 2028');
assert.equal(questions.find(q=>q.id==='TR19').o[2],'31 August 2028');
assert.equal(questions.find(q=>q.id==='TR20').sourceUrl,source.amendmentUrl);
assert.match(read('type-ratings.html'),/on or after 30 June 2026/);
assert.match(read('type-ratings.html'),/value="20">All 20/);
// Exercise the actual UI handlers with only IDs declared by the module's HTML.
const vm=require('node:vm');
function element(){const classes=new Set();return {children:[],hidden:false,textContent:'',value:'',classList:{add:c=>classes.add(c),contains:c=>classes.has(c)},appendChild(c){this.children.push(c);},append(...c){this.children.push(...c);},replaceChildren(...c){this.children=c;},focus(){}};}
const ids=[...read('type-ratings.html').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
const nodes=Object.fromEntries(ids.map(id=>[id,element()]));
const ctx={window:{},navigator:{},document:{getElementById:id=>nodes[id]||null,createElement:element}};
vm.runInNewContext(read('type-ratings.js'),ctx);
for(const [mode,count,correct] of [['learn',20,true],['exam',8,false]]){
  nodes.feedbackMode.value=mode;nodes.runLength.value=String(count);nodes.begin.onclick();
  for(let i=0;i<count;i++){
    const q=questions.find(q=>q.q===nodes.question.textContent);assert(q);
    const button=nodes.choices.children.find(b=>b.textContent===q.o[correct?q.a:(q.a+1)%4]);
    const before=nodes.question.textContent;nodes.next.onclick();assert.equal(nodes.question.textContent,before,'cannot skip an unanswered question');
    button.onclick();button.onclick(); // Duplicate events must not change the score.
    assert(nodes.choices.children.every(b=>b.disabled));
    if(mode==='exam'){
      assert.match(nodes.feedback.textContent,/Feedback will appear after the last/);
      assert(nodes.choices.children.every(b=>!b.classList.contains('correct')&&!b.classList.contains('incorrect')));
    }else assert.match(nodes.feedback.textContent,/^Correct\./);
    nodes.next.onclick();
  }
  assert.equal(nodes.score.textContent,correct?'20 / 20 — Pass':'0 / 8 — Keep practising');
  assert.equal(nodes.answerReview.children.length,count);
  if(mode==='learn'){
    const amended=nodes.answerReview.children.find(card=>card.children[0].textContent.includes(questions.find(q=>q.id==='TR20').q));
    assert.equal(amended.children[4].href,source.amendmentUrl,'commencement answer links to the amending instrument');
  }
  nodes.again.onclick();assert.equal(nodes.quiz.hidden,false);
  nodes.exitQuiz.onclick();assert.equal(nodes.notes.hidden,false);assert.equal(nodes.setup.hidden,false);
}
console.log('Pilot Type Ratings passed: 20 sourced questions, shuffled answer identity, incomplete-run and 80% scoring, preserved handout and offline assets.');
