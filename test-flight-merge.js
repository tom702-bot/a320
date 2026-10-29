
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const read=f=>fs.readFileSync(__dirname+'/'+f,'utf8'),data=require('./flight-study-data.js'),app=read('trainer.js');
const stamp=JSON.stringify([data.sourceSet,data.studyRevision]);
const migration=app.slice(app.indexOf('function migrateFlightStudy('));
const previous={sourceSet:stamp,read:{'fcom-3621':true},practice:{},quiz:{marks:{sample:{lastCorrect:true}}}};
function check(fullFlight,prior){const ctx={saved:{fullFlight,questions:{keep:true}},localStorage:{getItem:()=>prior},persist:()=>{}};vm.createContext(ctx);vm.runInContext(migration+';this.migrate=migrateFlightStudy;',ctx);ctx.migrate(data);return ctx.saved;}
const imported=check({},JSON.stringify(previous));assert.deepEqual(JSON.parse(JSON.stringify(imported.fullFlight)),previous);assert.deepEqual(imported.questions,{keep:true});
const current={sourceSet:stamp,read:{newer:true}};assert.equal(check(current,JSON.stringify(previous)).fullFlight,current);
const empty={};assert.equal(check(empty,JSON.stringify({...previous,sourceSet:'old'})).fullFlight,empty);assert.equal(check(empty,'bad json').fullFlight,empty);
const html=read('index.html');const scripts=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1].split('?')[0]);
for(const [first,next]of [['flight-study-data.js','trainer.js'],['continuous-flight.js','full-flight.js'],['flight-quiz-core.js','flight-quiz.js'],['flight-quiz.js','full-flight.js'],['full-flight.js','trainer.js']])assert(scripts.indexOf(first)>=0&&scripts.indexOf(first)<scripts.indexOf(next));
for(const route of ['home','flight','flight/quiz','normal','abnormal','limitations','flows','discussions','manuals'])assert(html.includes('href="#'+route+'"'));
assert(!app.includes("'line-quiz','full-flight'"));assert(app.includes('const flight=flightStudyData;'));
assert(!read('full-flight.js').includes("pageButton('FLIGHT'"));assert(read('full-flight.js').includes('env.pageButton(s.manual,p'));
console.log('Unified trainer: all sections linked, script load order, embedded data, optional original-page links and same-revision progress import verified.');
