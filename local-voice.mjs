class ModelWorker{
 constructor(file){this.file=file;this.next=0;this.jobs=new Map();}
 request(type,payload={},progress=()=>{}){if(!this.worker){this.worker=new Worker(new URL(this.file,import.meta.url),{type:'module'});this.worker.onmessage=({data})=>{const job=this.jobs.get(data.id);if(!job)return;if('progress'in data){job.progress(data);return;}clearTimeout(job.timer);this.jobs.delete(data.id);data.error?job.reject(Error(data.error)):job.resolve(data.result);};this.worker.onerror=()=>this.reset('The local AI tools could not load. Check your connection and try again.');}
  const id=++this.next;return new Promise((resolve,reject)=>{const timer=setTimeout(()=>this.reset('The local AI tools timed out. Try again, or use the answer buttons.'),type==='prepare'?300000:90000);this.jobs.set(id,{resolve,reject,progress,timer});this.worker.postMessage({id,type,...payload});});}
 reset(message){this.worker?.terminate();this.worker=null;for(const j of this.jobs.values()){clearTimeout(j.timer);j.reject(Error(message));}this.jobs.clear();}
}
const speech=new ModelWorker('./local-speech-worker.mjs'),answers=new ModelWorker('./local-answer-worker.mjs?v=72');
let prepared=false,answerPrepared=false,recording=null;
const AudioContextClass=globalThis.AudioContext||globalThis.webkitAudioContext;
export const supported=()=>!!(globalThis.Worker&&globalThis.MediaRecorder&&navigator.mediaDevices?.getUserMedia&&AudioContextClass);
export const ready=()=>prepared;
export const flexibleReady=()=>answerPrepared;
export async function prepare(progress){if(!supported())throw Error('Local microphone recognition is unavailable in this browser. Use the answer buttons.');await speech.request('prepare',{},progress);prepared=true;}
export async function prepareAnswers(progress){if(!navigator.gpu)throw Error('Flexible wording needs WebGPU. Short answers and option letters still work on this device.');await answers.request('prepare',{},progress);answerPrepared=true;}
export async function interpret(text,choices){if(!answerPrepared)return null;return answers.request('match',{text,choices:choices.map(c=>c.text)});}
export async function transcribeSamples(samples){return speech.request('transcribe',{audio:samples});}
export async function decodeAudio(bytes){const context=new AudioContextClass();try{const decoded=await context.decodeAudioData(bytes);const offline=new OfflineAudioContext(1,Math.ceil(decoded.duration*16000),16000),source=offline.createBufferSource();source.buffer=decoded;source.connect(offline.destination);source.start();return (await offline.startRendering()).getChannelData(0);}finally{await context.close();}}
export function cancel(){if(recording){recording.cancelled=true;recording.finish();}}
export async function listen({onState=()=>{},onText=()=>{},onError=()=>{}}={}){
 cancel();const run={cancelled:false,finish:()=>{}};recording=run;
 let stream,context,recorder,interval,timeout;const chunks=[];
 const release=()=>{clearInterval(interval);clearTimeout(timeout);stream?.getTracks().forEach(t=>t.stop());if(context&&context.state!=='closed')context.close().catch(()=>{});if(recording===run)recording=null;};
 run.finish=()=>{if(recorder?.state==='recording')recorder.stop();release();};
 try{if(!prepared)await prepare(p=>onState('Loading speech model: '+p.progress+'%'));if(run.cancelled)return;
  stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:true,noiseSuppression:true,autoGainControl:true},video:false});
  if(run.cancelled){release();return;}context=new AudioContextClass();await context.resume();if(run.cancelled){release();return;}
  const analyser=context.createAnalyser();analyser.fftSize=1024;context.createMediaStreamSource(stream).connect(analyser);
  const mime=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(t=>MediaRecorder.isTypeSupported(t));recorder=new MediaRecorder(stream,mime?{mimeType:mime}:{});
  recorder.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
  recorder.onerror=()=>{run.cancelled=true;run.finish();onError(Error('Microphone recording failed. Please try again.'));};
  recorder.onstop=async()=>{release();if(run.cancelled)return;try{onState('Understanding your answer on this device…');const samples=await decodeAudio(await new Blob(chunks,{type:recorder.mimeType}).arrayBuffer());if(run.cancelled)return;const text=await transcribeSamples(samples);if(!run.cancelled)onText(text);}catch(e){if(!run.cancelled)onError(e);}};
  recorder.start();onState('Listening — speak, then pause. Tap Finish answer when ready.');
  const started=performance.now(),samples=new Float32Array(analyser.fftSize);let heard=false,lastSound=started;
  interval=setInterval(()=>{analyser.getFloatTimeDomainData(samples);const rms=Math.sqrt(samples.reduce((n,v)=>n+v*v,0)/samples.length),now=performance.now();if(rms>0.018){heard=true;lastSound=now;}if(heard&&now-lastSound>1400&&now-started>1000)run.finish();},100);
  timeout=setTimeout(()=>{if(!heard){run.cancelled=true;run.finish();onError(Error('No answer was heard. Try again or use the answer buttons.'));}else run.finish();},15000);
 }catch(e){release();if(!run.cancelled)onError(Error(e.name==='NotAllowedError'?'Microphone access was denied. Allow it in your browser’s site settings and try again.':e.message||'The microphone could not start.'));}
 return run;
}
export function finish(){recording?.finish();}
