// Run after generate-voice-audio.mjs. FFmpeg must already be installed locally.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url)),folder=path.join(root,'assets/voice');
const ffmpeg=process.argv[2]||'ffmpeg',bank=JSON.parse(fs.readFileSync(path.join(folder,'manifest.json'))),clips={};
const entries=Object.entries(bank.clips),rate=24000,gap=Buffer.alloc(rate*2*0.25);
if(entries.some(([,file])=>typeof file!=='string'))throw Error('Already packed. Regenerate the individual clips first.');
for(const [,file] of entries){const full=path.resolve(root,file);if(!full.startsWith(path.resolve(folder)+path.sep)||!/^\w{24}\.mp3$/.test(path.basename(full)))throw Error('Unexpected source path');}
for(let i=0;i<entries.length;i+=10){let offset=0;const buffers=[],group=entries.slice(i,i+10),file='assets/voice/pack-'+String(i/10).padStart(2,'0')+'.mp3';
 for(const [text,source] of group){const raw=execFileSync(ffmpeg,['-v','error','-i',path.join(root,source),'-f','s16le','-ac','1','-ar',String(rate),'pipe:1'],{maxBuffer:10*1024*1024,windowsHide:true});clips[text]={file,start:offset,duration:raw.length/(rate*2)};offset+=(raw.length+gap.length)/(rate*2);buffers.push(raw,gap);}
 execFileSync(ffmpeg,['-v','error','-y','-f','s16le','-ar',String(rate),'-ac','1','-i','pipe:0','-codec:a','libmp3lame','-b:a','64k',path.join(root,file)],{input:Buffer.concat(buffers),windowsHide:true});
}
bank.clips=clips;bank.packVersion=1;fs.writeFileSync(path.join(folder,'manifest.json'),JSON.stringify(bank,null,2)+'\n');
// Source clips are removed only after every pack and the manifest are complete.
for(const file of new Set(entries.map(([,file])=>file)))fs.unlinkSync(path.resolve(root,file));
console.log('Packed '+entries.length+' voice entries.');

