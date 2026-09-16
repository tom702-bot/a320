#!/usr/bin/env node
"use strict";

const fs=require("fs");
const path=require("path");
const vm=require("vm");
const core=require('./trainer-core.js');
const root=__dirname;
const errors=[];
const checks=[];

function read(file){return fs.readFileSync(path.join(root,file),"utf8");}
function ok(condition,message){if(condition)checks.push(message);else errors.push(message);}
function normalize(text){return String(text||"").replace(/−/g,"-").toLowerCase().replace(/[^a-z0-9+\-]+/g," ").replace(/\s+/g," ").trim();}
function unique(items){return new Set(items).size===items.length;}
function parseInlineScripts(file){
  const html=read(file);
  [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach((match,index)=>{
    try{new vm.Script(match[1],{filename:file+":inline-"+(index+1)});}catch(error){errors.push(error.message);}
  });
}
function readLimitations(){
  const html=read("index.html");
  const start=html.indexOf("const BANK = [");
  const end=html.indexOf("\n];",start)+3;
  if(start<0||end<3)throw new Error("Could not locate limitations BANK");
  const context={};vm.createContext(context);
  vm.runInContext(html.slice(start,end).replace("const BANK","BANK"),context);
  return context.BANK;
}
function validateQuestions(name,questions,referencePattern){
  ok(unique(questions.map(item=>normalize(item.q))),name+" question text is unique");
  questions.forEach((item,index)=>{
    const label=name+" item "+(index+1);
    if(typeof item.q!=="string"||!item.q.trim())errors.push(label+" has no question");
    if(!Array.isArray(item.o)||item.o.length!==4)errors.push(label+" must have four options");
    else if(!unique(item.o.map(normalize)))errors.push(label+" has duplicate options: "+item.q);
    if(!Number.isInteger(item.a)||item.a<0||item.a>=item.o.length)errors.push(label+" has an invalid answer index");
    if(typeof item.w!=="string"||!item.w.trim())errors.push(label+" has no explanation");
    const reference=(item.ref||"")+" "+(item.w||"");
    if(referencePattern&&!referencePattern.test(reference))errors.push(label+" has no expected source reference: "+item.q);
  });
}

const required=["flow-sop.js","cockpit-photo-layout.js","fbw-cockpit.png","cockpit-native.js","cockpit-native.css","cockpit-systems.js","flow-procedures.js","cockpit-view.css","cockpit-view.js","flow-evidence.js","index.html","A320_Checkride_Trainer.html","trainer-core.js","flows.html","flow-sim.js","a320-controls.js","systems-exam-questions.js","question-bank-questions.js","communications-fcom-questions.js","communications-option-quality.js","communications-fcom-audit.json","electrical.html","electrical-sim.js","hydraulic.html","hydraulic-sim.js","engine.html","engine-sim.js","engine-3d.js","integration.html","manifest.webmanifest","sw.js"];
required.forEach(file=>ok(fs.existsSync(path.join(root,file)),file+" exists"));
const allNames=fs.readdirSync(root);
const legacyNamePattern=new RegExp("A3"+"21|P2"+"F","i");
ok(!allNames.some(name=>legacyNamePattern.test(name)),"legacy out-of-scope aircraft filenames are absent");

parseInlineScripts("index.html");
parseInlineScripts("flows.html");
parseInlineScripts("integration.html");
["flow-sop.js","cockpit-photo-layout.js","cockpit-native.js","cockpit-systems.js","flow-procedures.js","cockpit-view.js","flow-evidence.js","trainer-core.js","systems-exam-questions.js","question-bank-questions.js","communications-fcom-questions.js","communications-option-quality.js","a320-controls.js","flow-sim.js","electrical-sim.js","hydraulic-sim.js","engine-sim.js","engine-3d.js","sw.js"].forEach(file=>{
  try{new vm.Script(read(file),{filename:file});}catch(error){errors.push(error.message);}
});

const limitations=readLimitations();
ok(limitations.length===259,"limitations bank has 259 questions");
validateQuestions("Limitations",limitations,/FCOM LIM-/);

global.window={};
delete require.cache[require.resolve("./systems-exam-questions.js")];
delete require.cache[require.resolve("./question-bank-questions.js")];
delete require.cache[require.resolve("./communications-fcom-questions.js")];
delete require.cache[require.resolve("./communications-option-quality.js")];
require("./systems-exam-questions.js");
require("./question-bank-questions.js");
require("./communications-fcom-questions.js");
require("./communications-option-quality.js");
const systems=window.SYSTEMS_EXAM_QUESTIONS;
const topics=window.SYSTEMS_EXAM_TOPICS;
const guideSystems=systems.filter(item=>item.source==="A320 Student Study Questions");
const questionBank=systems.filter(item=>item.source==="Question Bank.xlsx · Question Bank");
const fcomCommunications=systems.filter(core.isFcomCommunicationsQuestion);
ok(systems.length===664,"systems bank has 315 guide, 298 workbook and 51 FCOM Communications questions");
ok(guideSystems.length===315,"systems bank retains all 315 supplied guide questions");
ok(questionBank.length===298,"systems bank includes all 298 Question Bank.xlsx rows");
ok(fcomCommunications.length===51,"systems bank includes 51 FCOM-checked Communications additions");
ok(topics.length===19&&topics.includes("Limitations")&&topics.includes("MEL"),"archived guide topic list has 19 subjects including Limitations and MEL");
ok(new Set(guideSystems.map(item=>item.c)).size===19,"systems guide bank has 19 source subjects");
validateQuestions("Systems",systems,/FCOM|current operator MEL|Question Bank\.xlsx/i);
const expectedGuideNumbers=[];
for(let number=1;number<=310;number++)expectedGuideNumbers.push(number);
for(let number=318;number<=322;number++)expectedGuideNumbers.push(number);
ok(JSON.stringify(guideSystems.map(item=>item.n))===JSON.stringify(expectedGuideNumbers),"systems bank preserves supplied guide numbering and the source gap at 311-317");
ok(JSON.stringify(questionBank.map(item=>item.n))===JSON.stringify(Array.from({length:298},(_,index)=>index+1)),"workbook questions preserve rows 1-298");
ok(systems.every(item=>Number.isInteger(item.p)&&item.p>0),"every systems item retains its source page or row");
ok(guideSystems.every(item=>/Guide Q\d+, PDF p\.\d+/.test(item.ref||"")),"every guide reference identifies its question and PDF page");
ok(questionBank.every(item=>/Question Bank Q\d+, sheet row \d+/.test(item.ref||"")),"every workbook reference identifies its question and sheet row");
ok(questionBank.every(item=>item.verification.status==="supplied"&&item.review==="question-bank-supplied"),"all workbook answer keys are accepted as supplied without an FCOM claim");
const communicationsAudit=JSON.parse(read("communications-fcom-audit.json"));
ok(communicationsAudit.fcom.sha256===core.SOURCE.sha256,"Communications audit identifies the trainer FCOM");
ok(communicationsAudit.supplement.sha256===core.COMMUNICATIONS_SUPPLEMENT_SOURCE.sha256,"Communications audit identifies the supplied Doc1 supplement");
ok(communicationsAudit.scope.added===51&&communicationsAudit.scope.activeTotal===70,"Communications audit records the expansion counts");
ok(JSON.stringify(Object.keys(communicationsAudit.items))===JSON.stringify(core.FCOM_COMMUNICATION_QUESTION_IDS),"Communications audit covers every new question in order");
fcomCommunications.forEach(item=>{
  const record=communicationsAudit.items[item.verification.id];
  ok(Boolean(record),"Communications audit includes "+item.verification.id);
  if(!record)return;
  ok(record.question===item.q&&record.answer===item.o[item.a]&&record.explanation===item.w,"Communications audit content matches "+item.verification.id);
  ok(JSON.stringify(record.pdfPages)===JSON.stringify(item.verification.pdfPages)&&JSON.stringify(record.supplementPages)===JSON.stringify(item.verification.supplementPages),"Communications evidence pages match "+item.verification.id);
});
const activeCommunications=questionBank.filter(core.isCommunicationsQuestion);
const activeSystems=systems.filter(core.isCommunicationsQuestion);
ok(activeCommunications.length===19,"Systems Exam Prep retains 19 active Communications workbook questions");
ok(activeSystems.length===70,"Systems Exam Prep has exactly 70 active Communications questions");
ok(JSON.stringify(activeSystems.map(item=>item.verification.id))===JSON.stringify(core.COMMUNICATIONS_QUESTION_IDS),"active Communications IDs match the explicit FCOM-section allowlist");
ok(!activeCommunications.some(item=>item.verification.id==='QB159'),"DFDR storage remains outside Communications practice");
ok(questionBank.filter(item=>item.image).length===15,"all 15 workbook illustrations are attached");
questionBank.filter(item=>item.image).forEach(item=>ok(fs.existsSync(path.join(root,item.image)),item.image+" exists"));
ok(systems.every(item=>["fcom-source-checked","withheld","question-bank-supplied"].includes(item.review)),"every systems item has a completed source status");
ok(guideSystems.filter(item=>item.c==="MEL").every(item=>item.review==="withheld"),"guide MEL items are withheld without an operator MEL");

const controls=require("./a320-controls.js").CONTROL_DEFS;
const flows=require("./flow-sim.js");
ok(controls.length===480,"cockpit catalog has 480 controls");
ok(flows.FLOW_PHASES.length===13,"flow trainer has 13 phases");
const controlIds=new Set(controls.map(item=>item.id));
controls.forEach(item=>{
  if(item.x<0||item.y<0||item.w<=0||item.h<=0||item.x+item.w>100.001||item.y+item.h>100.001)errors.push("Control outside panel bounds: "+item.id);
});
for(let i=0;i<controls.length;i++)for(let j=i+1;j<controls.length;j++){
  const a=controls[i],b=controls[j];if(a.panel!==b.panel||a.zone||b.zone)continue;
  const overlapX=Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x);
  const overlapY=Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y);
  if(overlapX>.01&&overlapY>.01)errors.push("Cockpit hit boxes overlap: "+a.id+" / "+b.id);
}
flows.FLOW_PHASES.forEach(phase=>Object.keys(phase.roles).forEach(role=>{
  const run=flows.createRun(phase.id,role,null,"standard-dry");
  run.steps.forEach(step=>step.controls.forEach(id=>{if(!controlIds.has(id))errors.push("Unknown flow control "+id+" in "+phase.id+" "+role);}));
  if(run.steps.length>1){const future=flows.gradeStepChoice(run,1);if(future.grade!=="out-of-order")errors.push("Future flow step not graded out of order: "+phase.id+" "+role);}
  const clean=flows.createRun(phase.id,role,null,"standard-dry");
  clean.steps.forEach((step,index)=>{const result=flows.gradeStepChoice(clean,index);if(result.grade!=="correct"&&result.grade!=="conditional")errors.push("Clean flow did not accept step: "+phase.id+" "+role+" "+index);});
  if(!clean.complete)errors.push("Clean flow did not complete: "+phase.id+" "+role);
}));
const prepared=flows.getInitialControlState("cockpit-preparation");
ok(prepared.elec_ext_pwr==="ON"&&prepared.eng_master_1==="OFF"&&prepared.eng_master_2==="OFF"&&prepared.park_brake==="ON","Cockpit preparation begins after preliminary power-up with engines off and parking brake on");
const ext=flows.getInitialControlState("before-start","external");
const apu=flows.getInitialControlState("before-start","apu");
ok(ext.elec_ext_pwr==="ON"&&ext.eng_master_1==="OFF"&&ext.eng_master_2==="OFF","Before Start external-power profile is valid");
ok(apu.elec_ext_pwr==="OFF"&&apu.apu_master==="ON"&&apu.apu_bleed==="ON","Before Start APU-power profile is valid");
const dryAntiIce=flows.getResolvedSteps("after-start","PF",null,"standard-dry").find(step=>step.contextRule==="anti-ice");
const conditionalAntiIce=flows.getResolvedSteps("after-start","PF",null,"operator-conditions").find(step=>step.contextRule==="anti-ice");
ok(dryAntiIce&&dryAntiIce.scenarioBound&&!dryAntiIce.acknowledgeOnly&&dryAntiIce.accept[0]==="OFF","standard-dry context grades anti-ice OFF");
ok(conditionalAntiIce&&conditionalAntiIce.acknowledgeOnly,"operator-conditions context keeps anti-ice conditional");
const flowHtml=read("flows.html");
["sessionButtons","contextButtons","powerButtons","conditionalValue","continueFlow"].forEach(id=>ok(flowHtml.includes('id="'+id+'"'),"flow UI exposes "+id));

const engineSource=read("engine-sim.js");
const systemMatches=[...engineSource.matchAll(/^    ([a-z][a-z0-9]*):\{\n      tab:/gm)];
const systemIds=systemMatches.map(match=>match[1]);
ok(systemIds.length===8,"engine explorer has eight systems");
systemMatches.forEach((match,index)=>{
  const slice=engineSource.slice(match.index,systemMatches[index+1]?systemMatches[index+1].index:engineSource.indexOf("  let activeSystem"));
  if(!/\bmode\('/.test(slice))errors.push("Engine system has no operating mode: "+match[1]);
});
const partBlock=read("engine-3d.js").match(/const PARTS=\{([\s\S]*?)\n  \};/);
const partMatches=partBlock?[...partBlock[1].matchAll(/^    ([a-z][a-z0-9]*):\{[^\n]*system:'([^']+)'/gm)]:[];
ok(partMatches.length===23,"engine cutaway has 23 selectable parts");
partMatches.forEach(match=>{if(!systemIds.includes(match[2]))errors.push("Engine cutaway part "+match[1]+" links to unknown system "+match[2]);});

const integration=read("integration.html");
["eng1","eng2","dual"].forEach(id=>ok(integration.includes('data-scenario="'+id+'"'),"integration lab includes "+id+" scenario"));
ok(/scenario/.test(read("electrical-sim.js"))&&/scenario/.test(read("hydraulic-sim.js"))&&/scenario/.test(read("engine-sim.js")),"all three system trainers accept linked scenario presets");

const manifest=JSON.parse(read("manifest.webmanifest"));
ok(manifest.orientation==="any","installed app supports portrait and landscape");
const sw=read("sw.js");
ok(sw.includes("a320-trainer-v48"),"offline cache is version 47");
ok(sw.includes("./integration.html")&&sw.includes("./flow-sim.js?v=48")&&sw.includes("./question-bank-questions.js")&&sw.includes("./communications-fcom-questions.js")&&sw.includes("./communications-option-quality.js")&&sw.includes("./communications-fcom-audit.json"),"offline cache includes upgraded modules, both Communications sources and the curated option layer");

const served=required.filter(file=>/\.(?:html|js|webmanifest)$/.test(file));
const forbidden=new RegExp("\\bA3"+"21\\b|P2"+"F|CF"+"M(?:56)?|PW"+"1100|LE"+"AP-?1A|Pra"+"tt\\s*(?:&|and)?\\s*Whitney","i");
served.forEach(file=>{const hit=read(file).match(forbidden);if(hit)errors.push("Out-of-scope variant token in "+file+": "+hit[0]);});
ok(/Ansett A320 IAE V2500-A5 only/i.test(read("engine.html")),"engine explorer states strict Ansett A320 IAE scope");
ok(/A\/C 20-IMHT, 13 AUG 2018/.test(read("engine.html"))&&/FOR ENGINEERING USE ONLY/.test(read("engine.html")),"engine explorer preserves the actual IAE source identity and restriction");
const engineQuestions=limitations.filter(q=>/FCOM LIM-ENG/.test((q.ref||'')+' '+q.w));
ok(engineQuestions.length===35,"all 35 IAE limitation items have individual evidence records");
engineQuestions.forEach(q=>{
  const evidence=core.EVIDENCE[q.evidence];
  if(!evidence||normalize(q.o[q.a])!==normalize(evidence.answer))errors.push('IAE answer differs from reviewed source record: '+q.q);
  if(!q.ref.includes(core.SOURCE.restriction)||!q.verification.pdfPages.includes(evidence?.pdfPage))errors.push('Missing source restriction or page: '+q.q);
});
ok(systems.filter(q=>q.review==='iae-training-checked').every(q=>core.EVIDENCE[q.evidence]&&q.ref.includes(core.SOURCE.restriction)),"checked systems items retain evidence and source restrictions");
ok(systems.every(q=>!core.hasDependentOptions(q)),"systems choices are independent of displayed letter order");

function correctAnswerContaining(questions,questionPattern,answerPattern,label){
  const item=questions.find(entry=>questionPattern.test(entry.q));
  ok(Boolean(item)&&answerPattern.test(item.o[item.a]),label);
}
correctAnswerContaining(limitations,/maximum N1/i,/100%/,"limitations match the IAE N1 source page");
correctAnswerContaining(limitations,/maximum N2/i,/100%/,"limitations match the IAE N2 source page");
correctAnswerContaining(limitations,/maximum continuous oil temperature/i,/155/,"limitations match the IAE oil source page");
correctAnswerContaining(limitations,/minimum pause between successive ground cycles/i,/15 seconds/,"limitations match the IAE starter source page");
correctAnswerContaining(limitations,/maximum assumed-temperature value/i,/ISA \+55/,"limitations match the IAE TMAXFLEX source page");
correctAnswerContaining(systems,/basic FM navigation mode/i,/GPS\/INERTIAL/,"systems bank revises the basic FM navigation mode");

if(fs.existsSync(path.join(root,"A320_Checkride_Trainer.html"))){
  ok(read("index.html")===read("A320_Checkride_Trainer.html"),"main HTML twin is byte-for-byte identical");
}

if(errors.length){
  console.error("Trainer validation failed ("+errors.length+"):");
  errors.forEach(message=>console.error(" - "+message));
  process.exit(1);
}
console.log("Trainer validation passed: "+checks.length+" structural/source-record checks, 259 limitations, 664 systems, 13 flow phases, 480 cockpit controls. This is not operational certification.");
require('./test-trainer.js');
require('./test-audit.js');
require('./test-system-rotation.js');
require('./test-communications-options.js');

require('./test-cockpit.js');

require('./test-sop.js');
