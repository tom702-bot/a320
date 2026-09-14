'use strict';

const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const core=require('./trainer-core.js');
const context={window:{}};

for(const file of ['systems-exam-questions.js','question-bank-questions.js','communications-fcom-questions.js']){
  vm.runInNewContext(fs.readFileSync(__dirname+'/'+file,'utf8'),context,{filename:file});
}

const expected=Array.from(core.COMMUNICATIONS_QUESTION_IDS);
const expectedSet=new Set(expected);
const sourceQuestions=context.window.SYSTEMS_EXAM_QUESTIONS.filter(q=>expectedSet.has(q.verification?.id));
const sourceById=new Map(sourceQuestions.map(q=>[q.verification.id,{
  options:Array.from(q.o),
  answerIndex:q.a,
  answer:q.o[q.a]
}]));

vm.runInNewContext(fs.readFileSync(__dirname+'/communications-option-quality.js','utf8'),context,{filename:'communications-option-quality.js'});

const quality=context.window.COMMUNICATIONS_OPTION_QUALITY;
const active=context.window.SYSTEMS_EXAM_QUESTIONS.filter(core.isCommunicationsQuestion);
assert.deepEqual(Array.from(quality.ids),expected,'quality review covers the exact active Communications allowlist');
assert.equal(active.length,70);
assert.equal(quality.criteria.length,5);
assert.equal(new Set(quality.ids).size,70);

const normalize=value=>String(value).toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
const wordCount=value=>normalize(value).split(/\s+/).filter(Boolean).length;

for(const q of active){
  const id=q.verification.id;
  const source=sourceById.get(id);
  assert(source,'source snapshot exists for '+id);
  assert.deepEqual(Array.from(q.sourceOptions),source.options,'original source choices retained for '+id);
  assert.equal(q.sourceAnswerIndex,source.answerIndex,'original source answer index retained for '+id);
  assert.equal(q.o[q.a],source.answer,'source-backed correct answer preserved for '+id);
  assert.equal(q.a,0,'curated correct option has a stable internal index for '+id);
  assert.equal(q.distractorReview.status,'curated');
  assert.equal(q.distractorReview.revision,quality.revision);
  assert(Object.isFrozen(q.o));
  assert(Object.isFrozen(q.sourceOptions));
  assert.equal(q.o.length,4);
  assert.equal(new Set(q.o.map(normalize)).size,4,'four distinct displayed choices for '+id);
  assert.equal(core.hasDependentOptions(q),false,'displayed choices do not depend on option letters for '+id);

  // A common giveaway is that the correct answer is the only longest or shortest choice.
  // Each curated set ties or brackets its correct answer by word count.
  const lengths=q.o.map(wordCount),correctLength=lengths[q.a];
  const longest=Math.max(...lengths),shortest=Math.min(...lengths);
  assert(!(correctLength===longest&&lengths.filter(length=>length===longest).length===1),'correct answer is uniquely longest for '+id);
  assert(!(correctLength===shortest&&lengths.filter(length=>length===shortest).length===1),'correct answer is uniquely shortest for '+id);

  // The renderer may place the correct choice in every displayed position.
  const positions=new Set();
  for(let shift=0;shift<4;shift++){
    const order=core.optionOrder(q,items=>items.slice(shift).concat(items.slice(0,shift)));
    positions.add(order.findIndex(item=>item.i===q.a));
  }
  assert.deepEqual(Array.from(positions).sort(),[0,1,2,3],'correct answer can occupy every displayed position for '+id);
}

// Regression guard for the imported rows that previously contained unrelated
// fragments copied from neighbouring workbook questions.
const obsolete={
  QB158:['Left side of Overhead Panel','Overhead Panel','Forward, Left Overhead Panel'],
  QB160:['first engine is started','25','Pick up the handset.'],
  QB164:['To select a comm. or nav. radio to control and to select its frequency.','To select which radio is used for transmission and to receive from any number of radios.','60 seconds or a RESET button is pressed on an ACP'],
  QB165:['Forward, Left Overhead Panel','Overhead Panel','first engine is started'],
  QB166:['No, the FMGS normally tunes the navigation radios.','60 seconds or a RESET button is pressed on an ACP','Forward, Left Overhead Panel'],
  QB169:['Pick up the handset and press the PTT button.','60 seconds or a RESET button is pressed on an ACP','To select a comm. or nav. radio to control and to select its frequency.'],
  QB171:['To select which radio is used for transmission and to receive from any number of radios.','To select a comm. or nav. radio to control and to select its frequency.','Allows the Service Interphone to operate when the aircraft is on jacks.']
};
for(const [id,oldDistractors] of Object.entries(obsolete)){
  const displayed=active.find(q=>q.verification.id===id).o.map(normalize);
  oldDistractors.forEach(option=>assert(!displayed.includes(normalize(option)),'unrelated workbook distractor removed from '+id));
}

console.log('Communications option checks passed: 70 curated sets, 210 relevant distractors, preserved correct answers, no unique answer-length cue, and shuffled display positions.');
