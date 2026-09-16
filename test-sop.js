const assert=require('node:assert/strict');
const fs=require('node:fs');
const f=require('./flow-sim.js');
const steps=(phase,role='PF',departure='pushback')=>f.getResolvedSteps(phase,role,null,'standard-dry',departure);
const index=(s,label)=>{const i=s.findIndex(x=>x.label===label);assert(i>=0,label);return i;};
const before=(s,a,b)=>assert(index(s,a)<index(s,b),a+' before '+b);
const eng=steps('engine-start');
before(eng,'ENGINE 1 MASTER','ENGINE 1 IDLE');before(eng,'ENGINE 1 IDLE','ENGINE 2 MASTER');
const early=f.createRun('engine-start','PF');assert.equal(f.gradeInput(early,'eng_master_2','ON').grade,'out-of-order');
const pb=steps('before-start'),stationary=steps('before-start','PF','stationary');
before(pb,'FINAL LOADSHEET','BEACON');before(pb,'NW STRG DISC','BEFORE START CHECKLIST');
const release=pb.findIndex(s=>s.controls[0]==='park_brake'&&s.accept[0]==='OFF');
assert(release>index(pb,'BEFORE START CHECKLIST'));assert(pb.slice(release+1).some(s=>s.controls[0]==='park_brake'&&s.accept[0]==='ON'));
assert(!stationary.some(s=>s.label==='NW STRG DISC'||s.target.includes('OFF FOR PUSHBACK')));
before(stationary,'PARK BRAKE','BEFORE START CHECKLIST');
for(const d of ['pushback','stationary'])for(const c of f.FLOW_CONTEXTS)for(const role of ['PF','PM']){
 const r=f.createRun('before-start',role,null,c.id,d);
 while(!r.complete){const s=r.steps[r.index];for(const id of s.controls){const v=s.acceptByControl?.[id]?.[0]||s.accept[0];assert(['correct','conditional'].includes(f.gradeInput(r,id,v).grade));}}
}
const park=steps('parking');before(park,'ENGINE COOLING / POWER','ALL ENG MASTER LEVERS');before(park,'ALL ENG MASTER LEVERS','ENGINE PARAMETERS');before(park,'ENGINE PARAMETERS','WING / BEACON');
const r=f.createRun('parking','PF');while(r.steps[r.index].label!=='ALL ENG MASTER LEVERS')f.gradeStepChoice(r,r.index);
assert.equal(f.gradeInput(r,'eng_master_1','ON').grade,'incorrect');
assert.equal(f.gradeInput(r,'eng_master_1','OFF').stepComplete,false);assert.equal(f.gradeInput(r,'eng_master_2','OFF').stepComplete,true);
const secure=steps('securing');before(secure,'ADIRS POWER-OFF CHECK','EXTERNAL POWER');before(secure,'APU FLAP','BATTERIES');
assert(secure[index(secure,'APU FLAP')].acknowledgeOnly,'timing observation must not masquerade as measured elapsed time');
const cm1=steps('securing','PM');before(cm1,'SLATS / FLAPS','IR MODE SELECTORS');before(cm1,'IR MODE SELECTORS','ADIRS DATA SAVE');
for(const p of f.FLOW_PHASES)for(const role of Object.keys(p.roles))for(const s of steps(p.id,role)){
 assert(s.sourcePages.length);assert(s.sourcePages.every(n=>n>=3163&&n<=3401),p.id+' must cite SOP text');
 assert(s.sourceRef.includes('SOP'));
 const def=f.CONTROL_DEFS.find(c=>c.id===s.controls[0]);assert.equal(s.panel,def.panel,'flow focus must use actual control panel');
}
for(const phase of ['taxi','line-up','after-landing'])for(const role of ['PF','PM'])assert(steps(phase,role).at(-1).label.includes('CHECKLIST'));
const cleanup=steps('climb-acceleration','PM').find(s=>s.label==='NOSE / RWY TURN OFF');assert.deepEqual(cleanup.accept,['OFF']);assert(!cleanup.acknowledgeOnly);
const html=fs.readFileSync(__dirname+'/flows.html','utf8'),sw=fs.readFileSync(__dirname+'/sw.js','utf8');
assert(html.includes('departureButtons'));assert(html.includes('flow-sop.js?v=49'));assert(sw.includes('./flow-sop.js?v=49'));assert(sw.includes('./SOP_AUDIT.md'));
console.log('SOP regressions passed: engine-1-first, both departure branches, shutdown position grading, securing prerequisites, SOP citations and checklist boundaries.');

for(const p of f.FLOW_PHASES)for(const ss of Object.values(p.roles))for(const s of ss){
 assert(!s.controls.some(id=>/^(ground_clearance|departure_brief|sop_cabin_report|vhf_check_|hf_check_)/.test(id)),s.label);
 assert(!/ANNOUNCE|OBTAIN.*CLEARANCE|REQUEST.*DISCONNECT|ADVISE|WITH OTHER CREW|ESTABLISH COMMUNICATION|COORDINATE WITH/.test(s.target),s.label+' contains a communication prompt');
}
assert(steps('parking').some(s=>s.label==='CHOCKS'));
assert(steps('before-start','PM').some(s=>s.label==='EXTERNAL POWER INDICATION'));
assert(steps('cockpit-preparation').some(s=>s.controls.includes('rmp_cm1_tune')));
assert(f.CONTROL_DEFS.find(c=>c.id==='calls_all').photoMapped,'physical cockpit call button remains operable');
console.log('Cockpit-only practice passed: no communication steps; radio controls, chock checks and source omissions preserved.');
