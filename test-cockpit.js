const assert=require('node:assert/strict');
const fs=require('node:fs');
const flow=require('./flow-sim.js');
const evidence=require('./flow-evidence.js');
let runs=0,inputs=0;
for(const context of flow.FLOW_CONTEXTS){
 for(const phase of flow.FLOW_PHASES){
  assert(evidence.phases[phase.id]?.reference&&evidence.phases[phase.id]?.note);
  for(const role of Object.keys(phase.roles)){
   const run=flow.createRun(phase.id,role,null,context.id);
   for(const step of run.steps){
    for(const id of step.completeAny?step.controls.slice(0,1):step.controls){
     const def=flow.CONTROL_DEFS.find(c=>c.id===id);
     const value=step.acknowledgeOnly?(def.states?.[0]||'CHECK'):(step.acceptByControl?.[id]?.[0]||step.accept[0]);
     const result=flow.gradeInput(run,id,value);
     assert(['correct','conditional'].includes(result.grade),`${phase.id} ${role} ${id}: ${result.message}`);inputs++;
    }
   }
   assert(run.complete);assert.equal(run.incorrect,0);assert.equal(run.outOfOrder,0);runs++;
  }
 }
}
const pf=flow.getResolvedSteps('ten-thousand-climb','PF');
const pm=flow.getResolvedSteps('ten-thousand-climb','PM');
assert.deepEqual(pf[0].controls,['efis_cstr_cm2']);
assert.deepEqual(pm.find(s=>s.label==='EFIS OPTIONS').controls,['efis_arpt_cm1']);
assert.equal(flow.getResolvedSteps('ten-thousand-descent','PF')[0].label,'EFIS option pb');
const prep=flow.getResolvedSteps('cockpit-preparation','PF');
assert(prep.length>=86);assert(prep.some(s=>s.controls.includes('elec_bat_1')&&s.accept.includes('OFF')));assert(prep.some(s=>s.controls.includes('elec_bat_1')&&s.accept.includes('AUTO')));
assert(prep.every(s=>s.sourcePages.length));assert(!prep.some(s=>s.controls.some(id=>id.startsWith('scan_'))));
const incorrect=flow.createRun('after-start','PF');
assert.equal(flow.gradeInput(incorrect,'eng_mode','IGN/START').grade,'incorrect');
assert.equal(incorrect.index,0);
assert.equal(flow.gradeInput(incorrect,'apu_bleed','OFF').grade,'out-of-order');
assert.equal(incorrect.index,0);
const html=fs.readFileSync(__dirname+'/flows.html','utf8');
const sw=fs.readFileSync(__dirname+'/sw.js','utf8');
for(const name of ['cockpit-native.js?v=48','cockpit-native.css?v=48','cockpit-systems.js?v=48','flow-procedures.js?v=48','cockpit-view.js?v=48','cockpit-view.css?v=48','flow-evidence.js?v=48'])assert(html.includes(name)&&sw.includes(name),name+' offline inclusion');
console.log(`Cockpit checks passed: ${runs} complete role/context runs, ${inputs} control actions, source coverage, corrected EFIS roles/order and individual preparation controls.`);
const systems=require('./cockpit-systems.js');
const model=systems.create();
for(const def of flow.CONTROL_DEFS){systems.operate(model,def,def.states?.[0]||'CHECK');assert.equal(model.log.at(-1).id,def.id);if(def.states)assert.equal(model.values[def.id],def.states[0]);else assert(model.momentary[def.id]>0);}
const avionics=systems.create(),operate=(id,value='CHECK')=>systems.operate(avionics,flow.CONTROL_DEFS.find(c=>c.id===id),value);
operate('mcdu_cm2_init');for(const key of ['a','b','1','2','3'])operate('mcdu_cm2_key_'+key);operate('mcdu_cm2_lsk_l1');assert.equal(avionics.mcdu.cm2.fields['INIT:l1'],'AB123');assert.equal(avionics.mcdu.cm2.scratch,'');
operate('rmp_cm2_tune','123.450');operate('rmp_cm2_transfer');assert.equal(avionics.radios.cm2.active,'123.450');
for(const key of ['1','2','3','4'])operate('atc_code_'+key);assert.equal(avionics.atcCode,'1234');operate('ecam_elec');assert.equal(avionics.ecamPage,'ELEC');
const antiIceRun=flow.createRun('after-start','PF');while(antiIceRun.steps[antiIceRun.index].contextRule!=='anti-ice')flow.gradeStepChoice(antiIceRun,antiIceRun.index);const aiIndex=antiIceRun.index;flow.gradeInput(antiIceRun,'anti_ice_eng_1','OFF');assert.equal(antiIceRun.index,aiIndex,'all anti-ice controls must be operated');
console.log('Cockpit systems passed: every catalog control responds, MCDU entries, radios, ATC, ECAM and grouped anti-ice.');

assert.equal(flow.CONTROL_DEFS.filter(c=>c.photoMapped).length,400);assert(flow.CONTROL_DEFS.filter(c=>!c.photoMapped).every(c=>c.panel==='checks'));assert(html.includes('cockpit-photo-layout.js?v=48')&&sw.includes('cockpit-photo-layout.js?v=48'));assert(sw.includes('./fbw-cockpit.png'));
