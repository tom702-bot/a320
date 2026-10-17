'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const read=f=>fs.readFileSync(__dirname+'/'+f,'utf8');
const source=read('trainer.js'),nodes=new Map(),redirects=[];
const node=id=>{if(!nodes.has(id))nodes.set(id,{innerHTML:'',textContent:'',value:'',open:false,hidden:true,focus(){},close(){this.open=false;}});return nodes.get(id);};
const context={
 document:{getElementById:node,querySelectorAll:()=>[]},
 localStorage:{getItem:()=>null,setItem(){}},
 location:{hash:'#limitations',replace:url=>redirects.push(url)},
 window:{scrollTo(){}},confirm:()=>true,
 setTimeout:()=>0,clearTimeout(){},
 DiscussionStudy:{stats:()=>({questions:123,recalled:0})},
 bank:JSON.parse(read('data/questions.json')),sourceManuals:JSON.parse(read('data/manuals.json')),
};
vm.createContext(context);
vm.runInContext(source.slice(0,source.indexOf("document.addEventListener('click'")),context);
vm.runInContext('manuals=sourceManuals;questions=bank;patterns=[];drills=[];privateManuals={status:()=>({ready:false})};',context);
const run=s=>vm.runInContext(s,context),url=run('VOICE_COACH_URL');
node('quizSubject').value='ALL';node('quizMode').value='learn';node('quizLength').value='10';
run('route()');
assert(node('workspace').innerHTML.includes('href="'+url+'"'));
assert(!node('workspace').innerHTML.includes('value="voice"'));
assert(!node('workspace').innerHTML.includes('Start voice quiz'));
run('home()');assert(node('workspace').innerHTML.includes('href="'+url+'"'));

// Old bookmarks must leave the retired route without starting a scored quiz.
context.location.hash='#limitations/voice';
const progress=run('JSON.stringify(saved)');run('route()');
assert.deepEqual(redirects,[url]);assert.equal(run('activeRun'),null);assert.equal(run('JSON.stringify(saved)'),progress);

// Learn, completed/incomplete exams and flashcards work with no old voice globals.
context.location.hash='#limitations/quick';run('route()');
assert.equal(run('activeRun.pool.length'),10);
run('chooseAnswer(activeRun.pool[0].answer)');
assert.equal(run('saved.questions[activeRun.pool[0].id].streak'),1);
run('chooseAnswer(activeRun.pool[0].answer)');assert.equal(run('activeRun.answers.length'),1);
node('quizMode').value='exam';node('quizLength').value='2';
run('saved.questions={};startQuiz(false);chooseAnswer(activeRun.pool[0].answer);finishQuiz()');
assert.equal(run('Object.keys(saved.questions).length'),0);assert(run('activeRun!==null'));
node('nextQuestion').onclick();run('chooseAnswer(activeRun.pool[1].answer)');node('nextQuestion').onclick();
assert.equal(run('activeRun'),null);assert.equal(run('Object.keys(saved.questions).length'),2);
node('quizMode').value='flash';
run('saved.questions={};startQuiz(false);revealFlash(activeRun.pool[0])');node('flashKnown').onclick();
assert.equal(run('Object.keys(saved.questions).length'),0);assert.equal(run('activeRun.answers[0]'),true);
assert(!/VoiceQuiz|VoiceLines/.test(source));
for(const file of ['index.html','A321P2F_Trainer.html','A321P2F_Checkride_Trainer.html']){
 const html=read(file);assert(html.includes('href="'+url+'"'));assert(!/voice-(?:lines|quiz)\.js/.test(html));
}

// Updating an installed trainer clears its retired audio shell, preserving other sites.
(async()=>{
 const handlers={},removed=[],scope='https://example.test/trainer/';
 const oldCache='qantas-a321p2f-private-shell-v73';
 const sw={URL,Response,self:{registration:{scope},clients:{claim:async()=>{}},addEventListener:(name,fn)=>handlers[name]=fn},
  caches:{keys:async()=>[oldCache,'unrelated-app'],open:async name=>({keys:async()=>[{url:name===oldCache?scope+'assets/voice/manifest.json':'https://example.test/other/app.js'}]}),delete:async name=>removed.push(name)}};
 vm.createContext(sw);vm.runInContext(read('sw.js')+'\nthis.assets=ASSETS;',sw);
 assert(sw.assets.every(x=>!/voice|speech-worker|answer-worker/.test(x)));
 let activated;handlers.activate({waitUntil:p=>activated=p});await activated;
 assert.deepEqual(removed,[oldCache]);
 console.log('Passed: live-coach links and old bookmarks; Learn/Exam/Flashcards without retired voice code; old audio-cache retirement.');
})().catch(error=>{console.error(error);process.exitCode=1;});
