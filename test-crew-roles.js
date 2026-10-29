'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),flow=require('./continuous-flight.js');
const data=require('./flight-study-data.js');
const rows=data.phases.flatMap(p=>p.steps.flatMap(s=>(s.study?.blocks||[]).filter(b=>b.kind==='action')));
assert.equal(rows.length,947);
assert.deepEqual(rows.reduce((o,b)=>(o[b.crew.type]++,o),{source:0,context:0,unassigned:0}),{source:803,context:142,unassigned:2});
for(const b of rows){
 assert(b.crew?.role&&b.crew.basis,'Every action needs a visible, traceable responsibility');
 if(b.role)assert.equal(b.crew.role,b.role,'Printed role must remain authoritative');
 for(const seat of ['CM1','CM2']){
  const r=flow.crewRole(b.crew,seat);assert(r.label&&r.detail);
  if(['CM1','CM2'].includes(b.role)){assert.equal(r.label,b.role===seat?'PF':'PM');assert(r.detail.includes(b.role));}
  if(['PF','PM'].includes(b.role))assert.equal(r.label,b.role,'Seat selection must not change printed PF/PM duties');
 }
}
const walk=data.phases.find(p=>p.id==='exterior-walkaround').steps.flatMap(s=>s.study.blocks||[]).filter(b=>b.kind==='action');
assert.equal(walk.length,138);assert(walk.every(b=>b.crew.role==='PM'&&b.crew.basis.includes('3645')));
const unknown=rows.filter(b=>b.crew.role==='UNASSIGNED');
assert.deepEqual(unknown.map(b=>b.label),['MONUMENT HOT CUP and SLIDING TRAY','MONUMENT DOORS']);
assert(unknown.every(b=>flow.crewRole(b.crew).detail==='Allocation not specified'));
let cues=0;
for(const p of data.phases)for(const s of p.steps){
 const studies=[...(s.kind==='company'?[s.study]:[]),...(s.study.insertions||[]),...(s.checks||[]).map(c=>c.study)];
 for(const c of studies){assert.equal(c.crew.length,c.highlights.length);for(const crew of c.crew){assert.notEqual(flow.crewRole(crew).tone,'unassigned');assert(crew.note);cues++;}}
}
assert.equal(flow.crewRole({role:'PIC'}).label,'PIC · PF or PM');
for(const role of ['BOTH','PF-PM','CM1-CM2'])assert.equal(flow.crewRole({role}).label,'PF + PM');
const gate=data.phases.flatMap(p=>p.steps).find(s=>s.kind==='checkpoint');
assert.equal(gate.checks.find(c=>c.id==='data').study.crew[0].role,'PM');
const code=fs.readFileSync(__dirname+'/full-flight.js','utf8');
assert(code.includes('id="flightPfSeat"'));assert(code.includes('crewBadge(b.crew'));
console.log(`Crew roles: 947 action labels, ${cues} SOP/check cues, both PF seat allocations and 2 explicit source gaps verified.`);
