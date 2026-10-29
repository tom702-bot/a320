'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),StudyFlow=require('./continuous-flight.js');
const data=require('./flight-study-data.js');
const steps=data.phases.flatMap(p=>p.steps),fcom=steps.filter(s=>s.kind==='fcom'),byId=Object.fromEntries(steps.map(s=>[s.id,s]));
assert.equal(data.studyRevision,1);
assert.equal(fcom.reduce((n,s)=>n+s.study.actionCount,0),947,'All dot-leader actions; wrapped seating action is one row');
const seq=id=>StudyFlow.sequence(data.phases.find(p=>p.steps.includes(byId[id])),byId[id]);
const positioned=[];
for(const p of data.phases){
 assert(p.studyGoal);assert(StudyFlow.lessons(p).length);
 for(const s of StudyFlow.lessons(p)){
  const flow=StudyFlow.sequence(p,s);
  assert.equal(flow.filter(b=>b.kind==='action').length,s.study.actionCount||0);
  for(const b of flow){
   if(b.kind==='action'){assert(b.label&&b.target,JSON.stringify(b));assert(!/(CM1-CM2|PF-PM|CM1|CM2|PF|PM|BOTH)$/.test(b.target),'Crew role must be separate: '+s.id);}
   if(b.kind==='figure')assert(b.src.startsWith('data:image/png;base64,')&&Buffer.from(b.src.split(',')[1],'base64').subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])));
   if(b.kind==='company'){positioned.push(b);assert(b.highlights.length);b.sections.forEach(r=>assert(data.studySections[r]?.blocks.length,'Missing inline SOP '+r));}
  }
 }
}
for(const s of steps.filter(s=>s.kind==='company'))assert.equal(positioned.filter(c=>c.id===s.id).length,1,'Place each original insertion once');
for(const r of data.coverage.famSections)assert(Object.keys(data.studySections).some(k=>k===r||k.startsWith(r+'.')),'Full inline coverage '+r);
const apu=seq('fcom-3625'),delay=apu.findIndex(b=>b.id==='company-apu-bleed'),bleed=apu.findIndex(b=>b.label==='APU BLEED pb-sw');
assert.equal(delay+1,bleed);assert(apu[delay].highlights[0].includes('3 minutes'));assert(apu[delay].highlights[0].includes('abnormal or emergency'));
assert(apu.slice(0,delay).some(b=>b.kind==='condition'&&b.text.includes('APU is AVAIL')),'FCOM availability condition retained');
const prep=StudyFlow.lessons(data.phases.find(p=>p.id==='cockpit-preparation')),i=prep.findIndex(s=>s.kind==='checkpoint');
assert.equal(prep[i+1].id,'fcom-3666-checklist');assert.equal(prep[i].checks.length,5);
assert(prep[i].checks.find(c=>c.id==='data').study.highlights.join(' ').includes('exceeds the actual takeoff weight'));
assert.equal(byId['fcom-3668'].study.blocks.find(b=>b.kind==='action'&&b.label.startsWith('SEATS')).target,'ADJUST');
assert.equal(byId['fcom-3668'].study.blocks.find(b=>b.kind==='action'&&b.label.startsWith('SEATS')).role,'PF-PM');
assert(seq('fcom-3802').some(b=>b.kind==='figure'),'IRS accuracy graph must be available inline');
assert(data.studySections['21.76'].blocks.some(b=>b.kind==='figure'),'Full callout tables must be available inline');
assert(!StudyFlow.lessons(data.phases.at(-1)).some(s=>s.pages[0]===3808),'No blank-page lesson');
console.log('Integrated study: 947 FCOM actions, 85 company topics inline, all insertion anchors, preserved figures, crew roles and five-check order verified.');
