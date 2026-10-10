'use strict';
require('./test-discussions.js');
require('./test-line-quiz.js');
const fs=require('fs'),path=require('path'),assert=require('node:assert/strict'),crypto=require('crypto'),vm=require('vm');
const read=f=>fs.readFileSync(path.join(__dirname,f),'utf8'),json=f=>JSON.parse(read(f));
const manuals=json('data/manuals.json'),questions=json('data/questions.json'),drills=json('data/drills.json'),patterns=json('data/patterns.json');
assert.equal(manuals.FCOM.revision,'1 May 2026');assert.equal(manuals.QRH.revision,'1 May 2026');assert.equal(manuals.FCTM.revision,'25 September 2026');
assert.equal(questions.length,92);assert.equal(new Set(questions.map(q=>q.id)).size,questions.length);assert.equal(new Set(questions.map(q=>q.question.toLowerCase())).size,questions.length);
for(const [id,m]of Object.entries(manuals)){
 assert.equal(m.id,id);assert.equal(m.file,undefined);assert.equal(m.sha256.length,64);assert(m.size>1000000);assert(m.pages>300);
 m.outline.forEach(x=>{assert(x.title);assert(x.page>=1&&x.page<=m.pages);assert(x.end>=x.page&&x.end<=m.pages);});
}
for(const q of questions){assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);assert(q.answer>=0&&q.answer<4);assert(q.explanation);assert(q.ref.startsWith('LIM-'));assert.equal(q.sourceHash,manuals.FCOM.sha256);assert(q.pages.every(p=>p>=4093&&p<=4242));assert(q.applicability.length);}
assert.equal(drills.length,8);assert.equal(patterns.length,11);
for(const d of drills){assert(d.scope);assert(d.steps.length);d.steps.forEach(s=>{assert(s.label&&s.target&&s.role);assert(s.page>=3615&&s.page<=3808);assert((s.pages||[s.page]).every(p=>p>=3615&&p<=3808));});}
patterns.forEach(p=>{assert(p.page>=3615&&p.page<=3808);assert.equal(p.image,undefined);});
assert.equal(read('index.html'),read('A321P2F_Trainer.html'));assert.equal(read('index.html'),read('A321P2F_Checkride_Trainer.html'));
const oldBrand=new RegExp(['An'+'sett','A'+'320'].join('|'),'i');
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(e.name==='.git'||e.name==='vendor')continue;const f=path.join(dir,e.name);assert(!oldBrand.test(e.name),'Old branding in filename '+e.name);assert(!/\.pdf$|^(?:fcom|fctm|qrh)-pages\.json$|^fcom-\d+\.png$/i.test(e.name),'Private source material in publication folder: '+e.name);if(e.isDirectory())walk(f);else if(/\.(js|mjs|css|html|md|webmanifest|json)$/.test(f)){
 const rel=path.relative(__dirname,f).replaceAll('\\','/'),text=fs.readFileSync(f,'utf8');
 assert(!oldBrand.test(text),'Old branding in '+rel);
 if(f.endsWith('.js'))new vm.Script(text,{filename:rel});
 if(f.endsWith('.html')){for(const match of text.matchAll(/(?:src|href)="([^"#]+)"/g)){const url=match[1];if(/^(?:https?:|data:|mailto:)/.test(url))continue;const local=url.split(/[?#]/)[0];assert(fs.existsSync(path.resolve(path.dirname(f),local)),'Missing asset '+rel+' -> '+local);}}
}}}
walk(__dirname);
assert(read('engine.html').includes('Takeoff/go-around: 650 &deg;C'));
assert(read('engine.html').includes('ISA +42 &deg;C'));
assert(read('engine.html').includes('Minimum 11 qt'));
assert(read('engine.html').includes('4 minutes continuous cranking'));
assert.equal(Object.values(manuals).reduce((n,m)=>n+m.pages,0),5226);
const app=read('trainer.js'),scenarioContext={};vm.createContext(scenarioContext);vm.runInContext(app.slice(app.indexOf('const scenarios='),app.indexOf('function abnormal(')).replace('const scenarios=','this.scenarios='),scenarioContext);
const scenarios=scenarioContext.scenarios;
for(const [, , refs]of scenarios)for(const [doc,page]of refs){assert(manuals[doc]);assert(page>=1&&page<=manuals[doc].pages);}
for(const [title,doc,page,heading]of [['Main deck smoke','FCOM',3507,'[QRH] SMOKE MD SMOKE'],['Unreliable speed','FCOM',3377,'[MEM] Unreliable Speed Indication'],['Electrical emergency configuration','FCOM',2907,'ELEC EMER CONFIG'],['Hydraulic system losses','FCOM',3261,'HYD B+Y SYS LO PR'],['Hydraulic system losses','FCOM',3273,'HYD G+B SYS LO PR'],['Hydraulic system losses','FCOM',3285,'HYD G+Y SYS LO PR']]){
 assert(scenarios.find(s=>s[0]===title)[2].some(r=>r[0]===doc&&r[1]===page),title+' exact procedure link');
 assert(manuals[doc].outline.some(x=>x.page===page&&x.title===heading),'Procedure heading '+heading);
}
assert(fs.existsSync(path.join(__dirname,'vendor/pdfjs/LICENSE')));
assert(fs.statSync(path.join(__dirname,'vendor/pdfjs/wasm/openjpeg.wasm')).size>100000,'JPEG 2000 decoder required for flow images');
const swContext={self:{addEventListener(){}}};vm.createContext(swContext);vm.runInContext(read('sw.js')+'\nthis.precache=ASSETS;',swContext);
for(const asset of swContext.precache)assert(fs.existsSync(path.join(__dirname,asset.split('?')[0])),'Missing offline asset '+asset);
assert(swContext.precache.includes('./vendor/pdfjs/wasm/openjpeg.wasm'),'Image decoder must work offline');
const privateReader=read('private-manuals.mjs');
assert(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket/.test(privateReader),'Private reader must have no upload/network calls');
assert(privateReader.includes("crypto.subtle.digest('SHA-256'"));
console.log('Validated: no private PDFs, page text or source images; 3 source fingerprints; 92 questions; 8 drills; 11 local patterns; page bounds, local links, branding, systems and syntax.');
