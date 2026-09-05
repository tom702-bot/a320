#!/usr/bin/env node
"use strict";

const fs=require("fs");
const path=require("path");
const vm=require("vm");
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

const required=["index.html","A320_Checkride_Trainer.html","trainer-core.js","flows.html","flow-sim.js","a320-controls.js","systems-exam-questions.js","electrical.html","electrical-sim.js","hydraulic.html","hydraulic-sim.js","engine.html","engine-sim.js","engine-3d.js","integration.html","manifest.webmanifest","sw.js"];
required.forEach(file=>ok(fs.existsSync(path.join(root,file)),file+" exists"));
const allNames=fs.readdirSync(root);
const legacyNamePattern=new RegExp("A3"+"21|P2"+"F","i");
ok(!allNames.some(name=>legacyNamePattern.test(name)),"legacy out-of-scope aircraft filenames are absent");

parseInlineScripts("index.html");
parseInlineScripts("flows.html");
parseInlineScripts("integration.html");
["trainer-core.js","systems-exam-questions.js","a320-controls.js","flow-sim.js","electrical-sim.js","hydraulic-sim.js","engine-sim.js","engine-3d.js","sw.js"].forEach(file=>{
  try{new vm.Script(read(file),{filename:file});}catch(error){errors.push(error.message);}
});

const limitations=readLimitations();
ok(limitations.length===259,"limitations bank has 259 questions");
validateQuestions("Limitations",limitations,/FCOM LIM-/);

global.window={};
delete require.cache[require.resolve("./systems-exam-questions.js")];
require("./systems-exam-questions.js");
const systems=window.SYSTEMS_EXAM_QUESTIONS;
const topics=window.SYSTEMS_EXAM_TOPICS;
ok(systems.length===315,"systems bank has all 315 supplied guide questions");
ok(topics.length===19&&topics.includes("Limitations")&&topics.includes("MEL"),"systems selector has 19 subjects including Limitations and MEL");
ok(new Set(systems.map(item=>item.c)).size===19,"systems source bank has 19 guide subjects");
validateQuestions("Systems",systems,/FCOM|current operator MEL/i);
const expectedGuideNumbers=[];
for(let number=1;number<=310;number++)expectedGuideNumbers.push(number);
for(let number=318;number<=322;number++)expectedGuideNumbers.push(number);
ok(JSON.stringify(systems.map(item=>item.n))===JSON.stringify(expectedGuideNumbers),"systems bank preserves supplied guide numbering and the source gap at 311-317");
ok(systems.every(item=>Number.isInteger(item.p)&&item.p>0),"every systems item retains its source PDF page");
ok(systems.every(item=>/Guide Q\d+, PDF p\.\d+/.test(item.ref||"")),"every systems reference identifies its guide question and PDF page");
ok(systems.every(item=>["source-pending","iae-training-checked","mel-check"].includes(item.review)),"every systems item has an explicit, honest source status");
ok(systems.filter(item=>item.review==="mel-check").length===2,"the two MEL items are marked for current-operator verification");

const controls=require("./a320-controls.js").CONTROL_DEFS;
const flows=require("./flow-sim.js");
ok(controls.length===344,"cockpit catalog has 344 controls");
ok(flows.FLOW_PHASES.length===10,"flow trainer has 10 phases");
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
const cold=flows.getInitialControlState("cockpit-preparation");
controls.filter(item=>Array.isArray(item.states)).forEach(item=>{
  const expected=item.cold||item.states[0];if(cold[item.id]!==expected)errors.push("Cold-and-dark mismatch for "+item.id);
});
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
ok(sw.includes("a320-trainer-v37"),"offline cache is version 37");
ok(sw.includes("./integration.html")&&sw.includes("./flow-sim.js?v=37"),"offline cache includes upgraded modules");

const served=required.filter(file=>/\.(?:html|js|webmanifest)$/.test(file));
const forbidden=new RegExp("\\bA3"+"21\\b|P2"+"F|CF"+"M(?:56)?|PW"+"1100|LE"+"AP-?1A|Pra"+"tt\\s*(?:&|and)?\\s*Whitney","i");
served.forEach(file=>{const hit=read(file).match(forbidden);if(hit)errors.push("Out-of-scope variant token in "+file+": "+hit[0]);});
ok(/Ansett A320 IAE V2500-A5 only/i.test(read("engine.html")),"engine explorer states strict Ansett A320 IAE scope");
ok(/A\/C 20-IMHT, 13 AUG 2018/.test(read("engine.html"))&&/FOR ENGINEERING USE ONLY/.test(read("engine.html")),"engine explorer preserves the actual IAE source identity and restriction");
const core=require('./trainer-core.js');
const engineQuestions=limitations.filter(q=>/FCOM LIM-ENG/.test((q.ref||'')+' '+q.w));
ok(engineQuestions.length===35,"all 35 IAE limitation items have individual evidence records");
engineQuestions.forEach(q=>{
  const evidence=core.EVIDENCE[q.evidence];
  if(!evidence||normalize(q.o[q.a])!==normalize(evidence.answer))errors.push('IAE answer differs from reviewed source record: '+q.q);
  if(!q.ref.includes(core.SOURCE.restriction)||!q.ref.includes('PDF p.'+evidence?.pdfPage))errors.push('Missing source restriction or page: '+q.q);
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
console.log("Trainer validation passed: "+checks.length+" structural/source-record checks, 259 limitations, 315 systems, 10 flow phases, 344 cockpit controls. This is not operational certification.");
require('./test-trainer.js');
