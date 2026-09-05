'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const core=require('./trainer-core.js');
const read=f=>fs.readFileSync(path.join(__dirname,f),'utf8');
const html=read('index.html');
function fn(name){
  const start=html.indexOf('function '+name+'(');
  assert(start>=0,'Function exists: '+name);
  const line=html.slice(start,html.indexOf('\n',start));
  if(line.endsWith('}'))return line;
  const end=html.indexOf('\n}',start)+2;
  return html.slice(start,end);
}
function element(){return {style:{},children:[],appendChild(child){this.children.push(child);}};}
function context(extra={}){
  const elements={};
  return Object.assign({elements,$:id=>elements[id]??=element(),document:{createElement:element},TrainerCore:core,show(){},queue:[],missed:[],currentQuizKind:'systems',currentFeedbackMode:'exam'},extra);
}
function score(correct,missed,expected){
  const c=context({cor:correct,miss:missed,queue:Array(expected).fill({})});
  vm.runInNewContext(fn('finishMcq')+'\nfinishMcq();',c);
  return c.elements;
}
for(const [right,wrong,size] of [[0,0,30],[1,0,30],[23,0,30]]){
  const r=score(right,wrong,size);
  assert.match(r.rVerdict.textContent,/Incomplete/);
  assert.doesNotMatch(r.rVerdict.textContent,/^Pass/);
  assert.equal(r.rScore.textContent,right+' / '+size);
}
assert.match(score(24,6,30).rVerdict.textContent,/^Pass/);
assert.match(score(23,7,30).rVerdict.textContent,/^Not yet/);
assert.equal(score(79,20,99).rScore.textContent,'79.8%');
assert.match(score(79,20,99).rVerdict.textContent,/^Not yet/,'rounded 80% cannot pass below the threshold');
assert.equal(core.examResult(0,0,0).pass,false);

const bankContext={window:{}};
vm.runInNewContext(read('systems-exam-questions.js'),bankContext);
const systems=bankContext.window.SYSTEMS_EXAM_QUESTIONS;
const q193=systems.find(q=>q.n===193);
assert.equal(core.hasDependentOptions(q193),false);
let marked;
const r=context({queue:[q193],qi:0,cor:0,miss:0,streak:0,shuffle:a=>a.reverse(),answer:(button,index)=>{marked=index;}});
vm.runInNewContext(fn('renderQ')+'\nrenderQ();',r);
const correctButton=r.elements.qOpts.children.find(b=>b.innerHTML.includes(q193.o[q193.a]));
assert(correctButton,'shuffled question retains its explicit correct answer');
correctButton.onclick();assert.equal(marked,q193.a);
const legacy={q:'Legacy dependent choices',o:['First statement','Second statement','As in B; plus a condition','None of the above.'],a:2};
assert.deepEqual(core.optionOrder(legacy,a=>a.reverse()).map(x=>x.i),[0,1,2,3]);
assert.deepEqual(core.optionOrder({o:['One','Two','Three','Four']},a=>a.reverse()).map(x=>x.i),[3,2,1,0]);
for(const q of systems)assert.equal(core.hasDependentOptions(q),false,'dependent choice in Q'+q.n);
assert.match(core.sourceStatus({scope:'limitations'}).label,/PENDING/);
assert.match(core.sourceStatus({review:'fcom-checked'}).label,/PENDING/,'legacy label alone cannot confer verification');
assert.doesNotMatch(read('systems-exam-questions.js'),/FCOM cross-check retained the guide answer/);
assert.doesNotMatch(html,/reconciled to the current Ansett A320 IAE FCOM/);
assert.match(core.sourceStatus({evidence:'oilContinuous'}).label,/FOR ENGINEERING USE ONLY/);
assert.match(core.sourceReference('oilContinuous'),/20-IMHT.*13 AUG 2018.*3737/);

const normLine=html.split('\n').find(s=>s.startsWith('const normQuestion='));
const statsContext={};
vm.runInNewContext(normLine+'\n'+fn('statKey')+'\nthis.key=statKey;',statsContext);
const previous={q:'IAE V2500 maximum N1?',scope:'limitations'};
assert.notEqual(statsContext.key(previous),statsContext.key({...previous,revision:'iae-20260905'}));
assert.equal(statsContext.key({q:'Unchanged question?',scope:'systems'}),'systems:unchanged question');

assert(!fs.existsSync(path.join(__dirname,'self-study-quizzes.js')),'removed course bank is absent');
assert.doesNotMatch(html,/modeStudy|studyQuiz|SELF_STUDY|self-study-quizzes/);
assert.doesNotMatch(read('sw.js'),/self-study-quizzes/);
// Run startup with only declared element IDs, catching handlers left attached to removed screens.
const declaredIds=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
const nodes=new Map();
function startupElement(){return {style:{},children:[],classList:{add(){},remove(){},toggle(){},contains(){return false;}},setAttribute(){},querySelectorAll(){return [];},appendChild(child){this.children.push(child);}};}
const startup={TrainerCore:core,window:{SYSTEMS_EXAM_QUESTIONS:systems,SYSTEMS_EXAM_TOPICS:bankContext.window.SYSTEMS_EXAM_TOPICS,scrollTo(){},addEventListener(){}},navigator:{},localStorage:{getItem(){return null;},setItem(){},removeItem(){}},document:{getElementById(id){if(!declaredIds.has(id))return null;if(!nodes.has(id))nodes.set(id,startupElement());return nodes.get(id);},createElement:startupElement,addEventListener(){}}};
for(const script of html.matchAll(/<script>([\s\S]*?)<\/script>/g))vm.runInNewContext(script[1],startup);
assert.match(nodes.get('progPanel').innerHTML,/Systems/,'remaining progress panel initializes');

async function offlineTests(){
  const base='https://trainer.invalid/a320/';
  const key=req=>new URL(typeof req==='string'?req:req.url,base).href;
  const stores=new Map();
  const responseFor=url=>{
    const parsed=new URL(url,base);
    const relative=parsed.pathname.slice('/a320/'.length)||'index.html';
    const file=path.join(__dirname,relative);
    if(!fs.existsSync(file))return new Response('Not found',{status:404});
    return new Response(fs.readFileSync(file),{headers:{'Content-Type':relative.endsWith('.js')?'text/javascript':relative.endsWith('.html')?'text/html':'application/octet-stream'}});
  };
  const caches={
    async open(name){
      if(!stores.has(name))stores.set(name,new Map());
      const data=stores.get(name);
      return {
        async match(req){return data.get(key(req))?.clone();},
        async put(req,res){data.set(key(req),res.clone());},
        async addAll(urls){for(const url of urls){const res=responseFor(url);assert(res.ok,'precache asset exists: '+url);data.set(key(url),res);}}
      };
    },
    async keys(){return [...stores.keys()];},
    async delete(name){return stores.delete(name);}
  };
  const oldCache=await caches.open('a320-trainer-v35');
  await oldCache.put('self-study-quizzes.js',new Response('old course bank'));
  await caches.open('unrelated-app');
  const handlers={};let online=true;
  const ctx={URL,Response,caches,fetch:async req=>{if(!online)throw Error('offline');return responseFor(key(req));},self:{registration:{scope:base},addEventListener:(type,handler)=>handlers[type]=handler,skipWaiting:async()=>{},clients:{claim:async()=>{}}}};
  vm.runInNewContext(read('sw.js'),ctx);
  async function event(type,request){
    const promises=[];let response;
    handlers[type]({request,waitUntil:p=>promises.push(p),respondWith:p=>response=p});
    const result=await response;await Promise.all(promises);return result;
  }
  const request=(url,mode='cors')=>({method:'GET',url:new URL(url,base).href,mode});
  await event('install');await event('activate');online=false;
  assert(!stores.has('a320-trainer-v35'));assert(stores.has('unrelated-app'));
  assert.equal((await event('fetch',request('self-study-quizzes.js'))).type,'error','removed bank cannot load from the previous offline cache');
  const flows=await event('fetch',request('flows.html','navigate'));
  assert.match(await flows.text(),/flow-sim\.js\?v=38/);
  for(const file of ['index.html','flows.html','engine.html','electrical.html','hydraulic.html','integration.html']){
    for(const match of read(file).matchAll(/<script src="([^"]+)"/g)){
      const response=await event('fetch',request(match[1]));
      assert.equal(response.status,200,'fresh offline script available: '+match[1]);
      assert.match(response.headers.get('Content-Type'),/javascript/);
      assert.doesNotMatch(await response.text(),/^\s*<!doctype html/i);
    }
  }
  const missing=await event('fetch',request('missing.js'));
  assert.equal(missing.type,'error','missing scripts never receive index.html');
  const nav=await event('fetch',request('unknown-page','navigate'));
  assert.match(await nav.text(),/Systems Exam Prep/);
  online=true;
  assert.equal((await event('fetch',request('missing.js'))).status,404);
  assert.equal(await (await caches.open('a320-trainer-v38')).match('missing.js'),undefined,'404 responses are not cached');
  assert.equal(await event('fetch',{method:'GET',url:'https://other.invalid/a320/file.js'}),undefined);
  assert.equal(await event('fetch',{method:'GET',url:'https://trainer.invalid/another/file.js'}),undefined);
}
offlineTests().then(()=>console.log('Regression checks passed: complete-exam scoring, shuffled answer semantics, honest source labels, revised-answer progress, and fresh offline scripts.')).catch(error=>{console.error(error);process.exitCode=1;});
