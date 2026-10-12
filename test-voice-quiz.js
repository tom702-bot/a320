'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {matchAnswer,speechText}=require('./voice-quiz.js');
const choices=[{text:'A sample limitation',index:2},{text:'Another limitation',index:0},{text:'A third limitation',index:3},{text:'The final limitation',index:1}];
for(const [text,expected] of [['Alpha',0],['ALFA.',0],['option one',0],['my answer is Bravo',1],['option two',1],['I choose option C',2],['Charlie',2],['choice four',3],['Delta',3],['Another limitation',1]])assert.equal(matchAnswer(text,choices),expected,text);
for(const text of ['Alpha or Bravo','not Bravo','maybe Charlie','15','unknown','yes','two hundred','alpha bravo'])assert.equal(matchAnswer(text,choices),null,text);
assert.equal(matchAnswer('identical',[{text:'identical'},{text:'identical'}]),null,'Ambiguous answers must not be guessed');
assert.equal(choices[matchAnswer('Bravo',choices)].index,0,'Use displayed order to select the stable answer index');
assert.equal(speechText('−1 g to +2.5 g; -15°C; 10–20 kt'),'minus 1 g to plus 2.5 g; minus 15 degrees Celsius; 10 to 20 knots','Read signs, temperatures and ranges explicitly');
assert.equal(speechText('10-20 kt'),'10 to 20 knots');
const widths=[{text:'60 m / 30 m',index:2},{text:'45 m / 23 m',index:1},{text:'30 m / 23 m',index:3},{text:'45 m / 30 m',index:0}];
for(const answer of ['45m and 30m','45 m & 30 m','45 metres and 30 metres','forty-five meters and thirty meters','forty five and thirty','45 and 30','45 / 30','45, 30','four five metres and three zero metres','my answer is 45m and 30m','option delta, 45m / 30m'])assert.equal(matchAnswer(answer,widths),3,answer);
for(const answer of ['45 m','30m and 45m','45 feet and 30 feet','minus 45 and 30','45 to 30','45m and 30m or 23m','not 45m and 30m','option alpha, 45m and 30m'])assert.equal(matchAnswer(answer,widths),null,answer);
const questions=require('./data/questions.json'),from=id=>questions.find(q=>q.id===id).options.map((text,index)=>({text,index}));
for(const q of questions)for(let index=0;index<q.options.length;index++){assert.equal(matchAnswer(q.options[index],from(q.id)),index,q.id+' exact: '+q.options[index]);assert.equal(matchAnswer(speechText(q.options[index]),from(q.id)),index,q.id+' spoken: '+q.options[index]);}
for(const [id,answer,expected] of [
 ['QF-005','thirty eight',0],['QF-019','two hundred and thirty five knots',0],['QF-019','two three five',0],
 ['QF-070','forty thirty knots',null],['QF-005','twenty eighteen knots',null],
 ['QF-024','three hundred and fifty knots and mach point eight two',0],['QF-024','350 and 0.82',0],['QF-024','350 and 0.8',2],
 ['QF-032','ninety three thousand kilos',0],['QF-033','seventy seven thousand eight hundred kilograms',0],
 ['QF-038','minus one psi',0],['QF-038','1 psi',null],['QF-038','one',null],
 ['QF-001','minus one g to plus two point five g',0],['QF-003','plus or minus two percent',0],
 ['QF-039','eight point six',0],['QF-039','86',null],['QF-045','one thousand and ninety degrees Celsius',0],
 ['QF-040','two hours',0],['QF-065','15 seconds',0],['QF-065','15 minutes',null],
 ['QF-063','11',null],['QF-072','42',null],['QF-074','35 knots',0],['QF-076','three',0],['QF-076','option three',2],
 ['QF-089','5 millimetres',0],['QF-092','plus or minus eighty five degrees',0]
])assert.equal(matchAnswer(answer,from(id)),expected,id+': '+answer);
assert.equal(matchAnswer('45 and 30',[{text:'45 m / 30 m'},{text:'45 ft / 30 ft'}]),null,'Omitted units cannot distinguish two matching choices');
assert.equal(matchAnswer('45 metres and 30 metres',[{text:'45 m / 30 m'},{text:'45 ft / 30 ft'}]),0);
// Exercise the actual recognition -> confirmation -> stable answer-index path with mocked browser services.
const nodes=new Map(),node=id=>{if(!nodes.has(id))nodes.set(id,{textContent:'',innerHTML:'',setAttribute(){}});return nodes.get(id);};
let utterance,recognition,submitted=[];
const context={console,setTimeout:()=>1,clearTimeout(){},document:{getElementById:node,addEventListener(){}},addEventListener(){},speechSynthesis:{getVoices:()=>[],speak:u=>{utterance=u;},cancel(){}},SpeechSynthesisUtterance:class{constructor(text){this.text=text;}},SpeechRecognition:class{start(){recognition=this;this.onstart?.();}abort(){}}};context.window=context;vm.createContext(context);vm.runInContext(fs.readFileSync(__dirname+'/voice-quiz.js','utf8'),context);
context.VoiceQuiz.mount({question:'Runway widths?',choices:widths,submit:i=>submitted.push(i),next(){}});node('voiceToggle').onclick();utterance.onend();
function say(text){const result=[{transcript:text}];result.isFinal=true;recognition.onresult({resultIndex:0,results:[result]});}
say('45m and 30m');assert.match(utterance.text,/I heard option Delta/);assert.deepEqual(submitted,[],'Shorthand waits for confirmation');utterance.onend();say('confirm');assert.deepEqual(submitted,[0],'Displayed D submits the original index 0');
console.log('Passed: shorthand quantities, spoken numbers, unit aliases, ordered pairs, signs/decimals, ambiguity guards, all 368 existing choices and confirmation-to-score mapping.');
