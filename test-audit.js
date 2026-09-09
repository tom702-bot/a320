'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const core=require('./trainer-core.js'),audit=require('./verification-audit.json');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
function array(name){const start=html.indexOf('const '+name+' = ['),end=html.indexOf('\n];',start)+3,ctx={};vm.runInNewContext(html.slice(start,end).replace('const '+name,name),ctx);return ctx[name];}
const lim=array('BANK'),memory=array('MEM'),fill=array('FILL_SECTIONS');
const ctx={window:{}};
vm.runInNewContext(fs.readFileSync(__dirname+'/systems-exam-questions.js','utf8'),ctx);
vm.runInNewContext(fs.readFileSync(__dirname+'/question-bank-questions.js','utf8'),ctx);
const sys=ctx.window.SYSTEMS_EXAM_QUESTIONS;
const questionBank=sys.filter(q=>q.verification.id.startsWith('QB'));
assert.equal(Object.keys(audit.items).length,1021);
assert.equal(lim.filter(core.isVerified).length,200);
assert.equal(sys.filter(core.isVerified).length,594);
assert.equal(new Set(sys.filter(core.isVerified).map(q=>q.c)).size,18);
assert.equal(Object.values(audit.items).filter(a=>a.status==='withheld').length,98);
assert.equal(questionBank.length,298);
assert.equal(questionBank.filter(core.isVerified).length,298);
assert.equal(questionBank.filter(q=>q.verification.status==='supplied').length,298);
assert.equal(questionBank.filter(q=>q.image).length,15);
assert.equal(Object.values(audit.items).filter(a=>a.markedConflict).length,0);
assert.deepEqual(audit.questionBankReview,{sourceFile:'Question Bank.xlsx',sheet:'Question Bank',reviewed:'not performed at user request',rows:298,eligible:298,withheld:0,markedConflicts:0,revision:'question-bank-supplied-20260909',scope:'Systems Exam Prep; answers accepted as supplied by the user; no FCOM correctness or simulator-option-fit claim.'});
const followUp=Object.entries(audit.items).filter(([id,a])=>a.followUp);
assert.equal(followUp.length,102,'all previously withheld records must have a follow-up');
assert.equal(new Set(audit.followUpReview.reviewedIds).size,102);
assert.deepEqual(followUp.filter(([id,a])=>a.followUp.disposition==='restored').map(([id])=>id).sort(),['L133','S116','S128','S145']);
assert.equal(followUp.filter(([id,a])=>a.followUp.disposition==='withheld-applicability').length,84);
assert.equal(followUp.filter(([id,a])=>a.followUp.disposition==='withheld-source-conflict-or-gap').length,14);
for(const[id,a]of followUp){
 assert.equal(a.followUp.sourceHash,core.SOURCE.sha256);
 assert(a.followUp.pdfPages.length);for(const p of a.followUp.pdfPages)assert(audit.pages[p]);
 if(a.followUp.disposition!=='restored'){
  assert.equal(a.status,'withheld','matching a source value must not silently clear applicability');
  assert(a.followUp.requiredEvidence);assert.equal(core.isVerified({verification:{id,status:a.status,pdfPages:a.pdfPages,sourceHash:core.SOURCE.sha256}}),false);
 }
}
assert.deepEqual(audit.items['F16.01.01'].pdfPages,[3730]);
assert.deepEqual(audit.items['F17.01.01'].pdfPages,[3788,3794]);
const restoredSystem=n=>sys.find(q=>q.n===n);
assert(restoredSystem(116).o[restoredSystem(116).a].includes('or two Air Conditioning System Controllers'));
assert.equal(restoredSystem(128).o[restoredSystem(128).a],'APU bleed air must not be used to supply wing anti-ice');
assert(restoredSystem(145).q.includes('AUTO'));
assert.equal(restoredSystem(145).o[restoredSystem(145).a],'Centre tank above 250 kg and either wing tank below 5,000 kg');
assert.equal(core.isVerified({evidence:'n1'}),false,'legacy engine reference alone cannot confer quiz eligibility');
assert.equal(core.isVerified({verification:{id:'x',status:'checked',pdfPages:[],sourceHash:core.SOURCE.sha256}}),false);
for(const q of [...lim,...sys]){
 const id=q.verification.id,a=audit.items[id];assert(a);
 assert.equal(q.verification.status,a.status);assert.equal(q.q,a.result.q);assert.equal(q.o[q.a],a.result.answer);
 assert.deepEqual(Array.from(q.o),a.result.o);assert.equal(q.w,a.result.explanation);
 if(core.isVerified(q)){
  if(!id.startsWith('QB')){assert(a.pdfPages.length);for(const p of a.pdfPages)assert(audit.pages[p]);}
  const expectedRevision=id.startsWith('QB')?'question-bank-supplied-20260909':a.followUp?.disposition==='restored'?'fcom-followup-20260906':'fcom-audit-20260905';
  assert.equal(q.revision,expectedRevision);
 }
}
const cells=fill.flatMap(s=>s.rows.flatMap(r=>r[1]));assert.equal(cells.length,121);
for(const [sub,answer,aliases,unit,evidence]of cells){assert(core.isVerified({verification:evidence}));assert.notEqual(core.normalizeFill(answer,unit),null,'invalid fill key '+answer);assert(audit.items[evidence.id]);}
for(const [value,unit,expected]of [['0350 kt','kt','350'],['350kt','kt','350'],['39,800 ft','ft','39800'],['M.82','Mach','0.82'],['-1g to +2.50g','±g','-1:2.5'],['±2%','%','±2'],['2 hours','h','2']])assert.equal(core.normalizeFill(value,unit),expected);
for(const [value,unit]of [['350 kg','kt'],['3,50 kt','kt'],['350 nonsense','kt'],['','kt'],['1ggg','±g'],['2 minutes','h']])assert.equal(core.normalizeFill(value,unit),null);
assert.notEqual(core.normalizeFill('2%','%'),core.normalizeFill('±2%','%'));
assert.notEqual(core.normalizeFill('1 to 2.5g','±g'),core.normalizeFill('-1 to 2.5g','±g'));
assert.equal(memory.length,8);memory.forEach(m=>assert(core.isVerified(m)));
assert.equal(memory[1].steps.length,5,'emergency descent boxed memory actions kept separate');assert(memory[1].followUp.length);
assert(memory[7].steps.some(s=>s.join(' ').includes('FULL BACKSTICK')));
assert(!memory[7].steps.some(s=>s.join(' ').includes('SRS')));
assert(memory[6].name.includes('Not Available'),'TCAS manual branch must be scoped explicitly');
const flows=require('./flow-sim.js');
assert.equal(flows.getResolvedSteps('before-start','PF').find(s=>s.label==='PARK BRK handle').acknowledgeOnly,true);
assert.equal(flows.getResolvedSteps('after-start','PF').find(s=>s.label==='APU MASTER SW').acknowledgeOnly,true);
assert.equal(flows.getResolvedSteps('after-landing','PM').find(s=>s.label==='FLAPS').acknowledgeOnly,true);
assert.equal(flows.getResolvedSteps('ten-thousand-climb','PM')[0].accept[0],'RETRACT');
assert.equal(flows.getResolvedSteps('line-up','PM')[0].accept[0],'TA/RA');
// Test the actual network evaluator against the source's normal, TR-loss and emergency cases.
const elec=fs.readFileSync(__dirname+'/electrical-sim.js','utf8');const start=elec.indexOf('  function evaluate(st){'),end=elec.indexOf('\n  const busFields=',start);const model={};vm.runInNewContext(elec.slice(start,end)+';this.evaluate=evaluate;',model);
const stateText=elec.match(/const normalState=(\{[^\n]+\});/)[1],st=vm.runInNewContext('('+stateText+')');
let s=model.evaluate(st);assert(s.dc1&&s.dc2&&s.dcEss&&s.dcBat);assert.equal(s.dcEssSource,'DC BAT BUS');assert(!s.batCont1Closed&&!s.batCont2Closed);
for(const failed of ['tr1','tr2']){s=model.evaluate({...st,[failed]:false});assert(s.dc1&&s.dc2&&s.dcBat);assert.equal(s.dcEssSource,'ESS TR');}
s=model.evaluate({...st,tr1:false,tr2:false});assert(!s.dc1&&!s.dc2&&!s.dcBat&&s.dcEss);assert.equal(s.dcEssSource,'ESS TR');
s=model.evaluate({...st,gen1:false,gen2:false});assert.equal(s.acEssSource,'EMER GEN');assert(s.acEssShed&&s.dcEssShed);assert(!s.dcBat);
s=model.evaluate({...st,gen1:false,gen2:false,emer:false});assert.equal(s.dcEssSource,'BAT 2 DIRECT');assert(s.staticInvActive);assert(!s.dcBat&&!s.acEssShed&&!s.dcEssShed);
s=model.evaluate({...st,gen1:false,gen2:false,emer:false,bat1:false});assert(!s.acEss&&s.dcEss);
s=model.evaluate({...st,gen1:false,gen2:false,emer:false,bat2:false});assert(s.acEss&&!s.dcEss);
s=model.evaluate({...st,acBus1:false});assert(!s.acEss,'do not assume optional automatic AC ESS switching');assert(s.dc1&&s.dc2);
s=model.evaluate({...st,acBus1:false,acEssAlt:true});assert.equal(s.acEssSource,'AC BUS 2 ALT FEED');
s=model.evaluate({...st,dcBatBus:false});assert(!s.dcBat);
const engine=fs.readFileSync(__dirname+'/engine-sim.js','utf8'),ec={};
vm.runInNewContext(engine.slice(engine.indexOf('  const component='),engine.indexOf("  let activeSystem='architecture';"))+';this.systems=systems;',ec);
assert.equal(Object.keys(ec.systems).length,8);
for(const system of Object.values(ec.systems)){assert(system.sourcePages);for(const n of system.nodes)assert(n.detail.ref);}
assert(ec.systems.instrumentation.nodes.find(n=>n.id==='upper').detail.normal.includes('fuel flow'));
assert(ec.systems.instrumentation.nodes.find(n=>n.id==='lower').detail.normal.includes('fuel USED'));
assert.equal(ec.systems.oil.edges.find(e=>e.id==='ind2').from,'scavfilter');
console.log('Audit checks passed: 1,021 source records, 298 workbook rows, fail-closed eligibility, unit-aware fill keys, memory branches, flow conditions and electrical source cases.');
