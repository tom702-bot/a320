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
assert(flow.getResolvedSteps('cockpit-preparation','PF').every(s=>s.acknowledgeOnly));
const incorrect=flow.createRun('after-start','PF');
assert.equal(flow.gradeInput(incorrect,'eng_mode','IGN/START').grade,'incorrect');
assert.equal(incorrect.index,0);
assert.equal(flow.gradeInput(incorrect,'apu_bleed','OFF').grade,'out-of-order');
assert.equal(incorrect.index,0);
const html=fs.readFileSync(__dirname+'/flows.html','utf8');
const sw=fs.readFileSync(__dirname+'/sw.js','utf8');
for(const name of ['cockpit-view.js?v=45','cockpit-view.css?v=45','flow-evidence.js?v=45'])assert(html.includes(name)&&sw.includes(name),name+' offline inclusion');
console.log(`Cockpit checks passed: ${runs} complete role/context runs, ${inputs} control actions, source coverage, corrected EFIS roles/order and cold scan self-checks.`);
