// Model files are downloaded once; microphone samples are processed in this worker.
import {pipeline,env} from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1/dist/transformers.min.js';
env.allowLocalModels=false;
env.backends.onnx.wasm.numThreads=1;
let modelPromise;
function model(id){return modelPromise??=pipeline('automatic-speech-recognition','onnx-community/whisper-tiny.en',{revision:'2575352d61be1bf7225cf8f8b268a4678025fc58',device:'wasm',dtype:'q8',progress_callback:p=>{if(p.status==='progress')self.postMessage({id,progress:Math.round(p.progress),file:p.file});}}).catch(e=>{modelPromise=null;throw e;});}
async function handle({data}){const {id,type,audio}=data;try{const transcriber=await model(id);if(type==='prepare'){self.postMessage({id,result:true});return;}if(type!=='transcribe'||!(audio instanceof Float32Array)||audio.length>16_000*20)throw Error('Invalid audio');const result=await transcriber(audio,{return_timestamps:false,max_new_tokens:96});self.postMessage({id,result:result.text.trim()});}catch{self.postMessage({id,error:'The local speech model could not run. Check the connection for its first download, then retry.'});}};

let queue=Promise.resolve();self.onmessage=event=>{queue=queue.then(()=>handle(event));};
