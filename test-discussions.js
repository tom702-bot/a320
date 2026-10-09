'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const read=file=>fs.readFileSync(path.join(__dirname,file),'utf8');
const data=JSON.parse(read('data/discussions.json'));
const manuals=JSON.parse(read('data/manuals.json'));
const items=data.items,practice=items.filter(i=>i.aircraft==='A321P2F');
assert.equal(items.length,74,'Every photographed row must remain represented');
assert.equal(practice.length,71,'Exclude only the three explicitly A330-only rows');
assert.equal(new Set(items.map(i=>i.id)).size,74);
assert.deepEqual(Object.fromEntries(['Stage 1','Pre-flight','Taxi & take-off','Climb','Cruise','Descent','Approach & landing','Post-flight'].map(phase=>[phase,items.filter(i=>i.phase===phase).length])),
  {'Stage 1':14,'Pre-flight':8,'Taxi & take-off':8,Climb:4,Cruise:15,Descent:9,'Approach & landing':15,'Post-flight':1});
assert.deepEqual(items.filter(i=>i.aircraft==='A330 only').map(i=>i.id),['flight-deck-door-a330','smoke-curtain-a330','csff-a330']);
for(const item of items){
  assert(data.source.photos.includes(item.photo),item.id);
  assert([1,2].includes(item.stage));assert(item.title&&item.scenario);
  assert(!('answer' in item),'Unverified discussion prompts must not acquire a scored answer');
  if(item.aircraft==='A330 only'){assert.equal(item.references.length,0);continue;}
  assert(item.checkpoints.length>=2,item.id+' needs useful practice prompts');
  assert(item.references.length||item.requiredSources.length,item.id+' has no reading/verification route');
  for(const r of item.references){
    const m=manuals[r.manual];assert(m,item.id);
    assert.equal(r.sourceHash,m.sha256,item.id+' source edition');
    assert(m.outline.some(o=>o.page===r.page&&o.end===r.end&&o.title===r.title&&o.path===r.path),item.id+' section link');
    assert(!/Preliminary Pages|Table of Contents|Summary of Highlights/.test(r.title),item.id+' needs a substantive section');
  }
  for(const link of item.related)assert(['flows','limitations','normal','abnormal','systems'].includes(link));
}
// Photo sub-bullets that are easy to lose when grouping topics.
for(const [id,subtopics] of Object.entries({
  'efb-backup':['Policy','Jeppesen Trip Kit'],
  'supplementary-starts':['Manual engine start','Crossbleed start'],
  'aircraft-documents':['Aircraft Documents Folder','Technical Logbook','Fuel Documentation','Load Documentation (LIR)'],
  loadsheet:['Trapped fuel (loadsheet requirements)','LMCs'],
  'takeoff-initial-climb':['Noise abatement','Crosswind techniques and limitations','Tailwind technique','Windshear','Terrain considerations'],
  'fuel-policy':['Pre-flight requirements','In-flight requirements','DPA'],
  'company-communications':['VHF','HF','CPDLC','SATCOM','MEDLINK'],
  edto:['Flight planning','CPE','Critical system failures and weather deterioration scenarios'],
  postflight:['Aircraft Technical Log entries','EFF+ Nav Log','Flight Time Record','ACARS','Delay Report','Comply365 Flight Crew form requirements','INTELEX','MDCD considerations']
}))assert.deepEqual(items.find(i=>i.id===id).subtopics,subtopics,id+' photo subtopics');
const source=read('discussions.js');
assert(!/\bfetch\s*\(|XMLHttpRequest|sendBeacon|WebSocket/.test(source),'Discussion notes must remain local');
assert(!/recordQuestion\s*\(/.test(source),'Discussion self-ratings must not award scored quiz mastery');
for(const file of ['index.html','A321P2F_Trainer.html','A321P2F_Checkride_Trainer.html'])assert(read(file).includes('discussions.js?v=66'));
assert(read('sw.js').includes('./data/discussions.json'));
assert(read('sw.js').includes('./discussions.js?v=66'));
console.log('Passed: 74 photo rows, 71 practice topics, all phase totals, retained subtopics, source-index/hash matches, A330 exclusions and private self-assessment.');
