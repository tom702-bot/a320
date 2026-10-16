// Run locally only. The key stays in the ignored .env.local file.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const {all}=require('../voice-lines.js'),{speechText}=require('../voice-quiz.js');
const questions=JSON.parse(await fs.readFile(path.join(root,'data/questions.json'),'utf8'));
const model='gpt-4o-mini-tts',voice='marin';
const instructions='Read exactly the supplied text, without additions. Use a calm, clear Australian English voice for a pilot study quiz. Carefully pronounce every number, decimal, sign, unit and range. Use a measured conversational pace.';
const texts=all(questions),folder=path.join(root,'assets/voice');await fs.mkdir(folder,{recursive:true});
const entries=texts.map(text=>{const spoken=speechText(text),id=createHash('sha256').update(JSON.stringify({model,voice,instructions,spoken})).digest('hex').slice(0,24);return {text,spoken,file:'assets/voice/'+id+'.mp3'};});
console.log(JSON.stringify({clips:entries.length,characters:entries.reduce((n,e)=>n+e.spoken.length,0)}));
if(process.argv.includes('--plan'))process.exit(0);
const env=await fs.readFile(path.join(root,'.env.local'),'utf8'),key=env.match(/^OPENAI_API_KEY\s*=\s*["']?(sk-[A-Za-z0-9_-]+)/m)?.[1];if(!key)throw new Error('No local API key configured.');
let done=0;const pending=[...entries],failures=[];
async function generate(entry){const target=path.join(root,entry.file);if(await fs.stat(target).then(s=>s.size>500).catch(()=>false))return;
 const r=await fetch('https://api.openai.com/v1/audio/speech',{method:'POST',headers:{Authorization:'Bearer '+key,'Content-Type':'application/json'},body:JSON.stringify({model,voice,input:entry.spoken,instructions,response_format:'mp3'}),signal:AbortSignal.timeout(90000)});
 if(!r.ok){const err=await r.json().catch(()=>({}));throw new Error('Speech API '+r.status+' ('+(err.error?.code||'request_failed')+')');}
 const bytes=Buffer.from(await r.arrayBuffer());if(bytes.length<500)throw new Error('Empty audio returned');await fs.writeFile(target,bytes);
}
async function worker(){while(pending.length){const entry=pending.shift();try{await generate(entry);done++;if(done%20===0)console.log('Audio clips ready: '+done+'/'+entries.length);}catch(e){failures.push(String(e.message));pending.length=0;}}}
await Promise.all([worker(),worker(),worker()]);
if(failures.length){console.log(JSON.stringify({failed:failures,completed:done}));process.exit(1);}
const clips=Object.fromEntries(entries.map(({text,file})=>[text,file]));
await fs.writeFile(path.join(folder,'manifest.json'),JSON.stringify({version:1,model,voice,aiGenerated:true,clips},null,2)+'\n');
console.log(JSON.stringify({completed:entries.length,bytes:(await Promise.all(entries.map(e=>fs.stat(path.join(root,e.file))))).reduce((n,s)=>n+s.size,0)}));
