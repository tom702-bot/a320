'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const read=f=>fs.readFileSync(__dirname+'/'+f,'utf8');
const source=read('trainer.js'),worker=read('sw.js'),scope='https://example.test/trainer/';
const handlers={},cached=new Map(),network=[],installed=new Map();
const metadata=JSON.parse(read('data/manuals.json'));
const oldMetadata={...metadata};delete oldMetadata.FAM;
cached.set(scope+'data/manuals.json',JSON.stringify(oldMetadata));
cached.set(scope+'private-manuals.mjs','old reader without current crop support');
const absolute=value=>new URL(typeof value==='string'?value:value.url,scope).href;
const response=body=>new Response(body,{headers:{'Content-Type':'application/json'}});
const sw={URL,Response,self:{registration:{scope},skipWaiting:async()=>{},addEventListener:(name,fn)=>handlers[name]=fn},
 caches:{open:async()=>({match:async request=>{const body=cached.get(absolute(request));return body===undefined?undefined:response(body);},addAll:async assets=>{for(const asset of assets){const url=new URL(asset,scope);installed.set(url.href,read(decodeURIComponent(url.pathname.slice('/trainer/'.length))||'index.html'));}}})},
 fetch:async request=>{network.push(absolute(request));const url=new URL(absolute(request));return response(read(decodeURIComponent(url.pathname.slice('/trainer/'.length))||'index.html'));}};
vm.createContext(sw);vm.runInContext(worker+'\nthis.assets=ASSETS;',sw);
const request=async path=>{let result;handlers.fetch({request:{url:absolute(path),method:'GET',mode:'cors'},respondWith:p=>result=p});return result;};
(async()=>{
 // Reproduce a returning browser: the prior cache contains an index with no FAM.
 assert.equal((await (await request('data/manuals.json')).json()).FAM,undefined);
 const dataCall=source.match(/loadJson\(('data\/'.*?)\)/)[1];
 const manualUrl=vm.runInNewContext(dataCall,{f:'manuals'});
 const readerUrl=source.match(/import\('([^']*private-manuals\.mjs[^']*)'\)/)[1];
 const current=await (await request(manualUrl)).json();
 assert.equal(current.FAM.sha256,metadata.FAM.sha256,'Upgrade must bypass the stale manual index');
 assert.equal(await (await request(readerUrl)).text(),read('private-manuals.mjs'),'Upgrade must bypass the old reader module');
 assert(network.includes(absolute(manualUrl)));assert(network.includes(absolute(readerUrl)));
 // The same versioned resources must also be in the installed shell for offline reloads.
 let installing;handlers.install({waitUntil:p=>installing=p});await installing;
 for(const name of ['manuals','questions','patterns','drills','discussions','line-quiz','full-flight']){
  const url=vm.runInNewContext(dataCall,{f:name});
  assert(installed.has(absolute(url)),'Missing offline startup data '+url);
 }
 assert(installed.has(absolute(readerUrl)),'Missing offline reader module');
 for(const file of ['index.html','A321P2F_Trainer.html','A321P2F_Checkride_Trainer.html','app.html']){
  const script=read(file).match(/src="(trainer\.js[^\"]*)"/)[1];
  assert.equal(new URL(script,scope).search,new URL(manualUrl,scope).search,'Entry script and data must share the release version');
  assert(installed.has(absolute(script)),'Entry script must match the offline shell');
 }
 console.log('Passed: returning-browser upgrade bypasses old manual index and reader; current startup resources remain available offline.');
})().catch(error=>{console.error(error);process.exitCode=1;});
