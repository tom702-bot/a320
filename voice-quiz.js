'use strict';
// Displayed choices are mapped to their original answer indices by the caller.
// Speech never supplies an answer key and ambiguous phrases are never scored.
(function(root){
 function normalize(text){return String(text).toLowerCase().normalize('NFKC').replace(/[.,!?;:]/g,' ').replace(/\s+/g,' ').trim();}
 const numberWords={zero:0,oh:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,thirteen:13,fourteen:14,fifteen:15,sixteen:16,seventeen:17,eighteen:18,nineteen:19,twenty:20,thirty:30,forty:40,fifty:50,sixty:60,seventy:70,eighty:80,ninety:90};
 function smallNumber(words){
  if(!words.length)return 0;
  const hundred=words.indexOf('hundred');let base=0;
  if(hundred>=0){if(hundred>1||(hundred===1&&!(numberWords[words[0]]>0&&numberWords[words[0]]<10)))return null;base=100*(hundred===0?1:numberWords[words[0]]);words=words.slice(hundred+1);}
  if(!words.length)return base;
  if(words.length===1&&Object.hasOwn(numberWords,words[0]))return base+numberWords[words[0]];
  if(words.length===2&&numberWords[words[0]]>=20&&numberWords[words[1]]>0&&numberWords[words[1]]<10)return base+numberWords[words[0]]+numberWords[words[1]];
  return null;
 }
 function spokenNumbers(text){
  const tokens=text.split(/\s+/),out=[];
  for(let i=0;i<tokens.length;){
   const start=i,words=[];
   while(i<tokens.length){
    const t=tokens[i];
    if(Object.hasOwn(numberWords,t)||t==='hundred'||t==='thousand'){words.push(t);i++;}
    else if(t==='and'&&['hundred','thousand'].includes(words.at(-1))&&Object.hasOwn(numberWords,tokens[i+1]))i++;
    else break;
   }
   let value=null;
   if(words.length){
    if(words.length>1&&words.every(w=>numberWords[w]<10))value=words.map(w=>numberWords[w]).join('');
    else {const scale=words.indexOf('thousand'),high=scale<0?0:smallNumber(words.slice(0,scale)),low=smallNumber(words.slice(scale+1));if(high===null||low===null){out.push(...words);continue;}value=String((scale<0?0:(high||1)*1000)+low);}
   }else if(/^\d+(?:\.\d+)?$/.test(tokens[i]||'')){value=tokens[i++];}
   if(tokens[i]==='point'||tokens[i]==='decimal'){
    let j=i+1,digits='';while(j<tokens.length){const word=tokens[j];if(Object.hasOwn(numberWords,word)&&numberWords[word]<10)digits+=numberWords[word];else if(/^\d+$/.test(word))digits+=word;else break;j++;}
    if(digits){value=(value??'0')+'.'+digits;i=j;}
   }
   if(value!==null)out.push(value);else{out.push(tokens[start]);i=start+1;}
  }
  return out.join(' ');
 }
 const unitAliases={m:'m',meter:'m',meters:'m',metre:'m',metres:'m',mm:'mm',millimeter:'mm',millimeters:'mm',millimetre:'mm',millimetres:'mm',kt:'kt',kts:'kt',knot:'kt',knots:'kt',kg:'kg',kilogram:'kg',kilograms:'kg',kilo:'kg',kilos:'kg',ft:'ft',foot:'ft',feet:'ft',min:'min',mins:'min',minute:'min',minutes:'min',s:'s',sec:'s',secs:'s',second:'s',seconds:'s',h:'h',hr:'h',hrs:'h',hour:'h',hours:'h',qt:'qt',quart:'qt',quarts:'qt',psi:'psi',g:'g',gs:'g',mach:'mach',percent:'percent',degc:'degc',deg:'deg'};
 function canonical(text){
  let s=String(text).toLowerCase().normalize('NFKC').trim()
   .replace(/^(?:i (?:choose|select|pick)|my answer is|the answer is|it is|it's|answer)\s+/,'')
   .replace(/(?<=\d),(?=\d{3}(?:\D|$))/g,'')
   .replace(/([a-z])-([a-z])/g,'$1 $2').replace(/−/g,'-')
   .replace(/plus (?:or )?minus/g,'±').replace(/\bminus\b/g,'-').replace(/\bplus\b/g,'+')
   .replace(/\b(?:degrees?\s*(?:celsius|centigrade|c)|celsius|centigrade)\b|°\s*c\b/g,' degc ')
   .replace(/\bdegrees?\b|°/g,' deg ').replace(/%|\bper cent\b/g,' percent ')
   .replace(/\bpounds? per square inch\b/g,' psi ')
   .replace(/\bm\s*(?=0?\.\d)/g,'mach ')
   .replace(/([0-9])([a-z])/g,'$1 $2').replace(/\b(and|slash)\b|[&,/]/g,' / ')
   .replace(/[!?;:()]/g,' ').replace(/\.(?=\s|$)/g,' ')
   .replace(/\s+/g,' ').trim();
  // Restore English number conjunctions before interpreting list separators.
  s=s.replace(/\b(hundred|thousand) \/ (?=(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)\b)/g,'$1 and ');
  s=spokenNumbers(s).replace(/\bmach\s+(\d*\.?\d+)\b/g,'$1 mach').replace(/\b(\d+(?:\.\d+)?)\s*c\b/g,'$1 degc');
  return s.split(/\s+/).map(t=>unitAliases[t]||t).join(' ').replace(/([+\-±])\s+(?=\d)/g,'$1').replace(/\b0+(?=\d)/g,'');
 }
 function quantities(text){
  const tokens=text.match(/[+\-±]?(?:\d+(?:\.\d+)?|\.\d+)|[a-z]+|\S/g)||[],out=[];
  for(let i=0;i<tokens.length;){
   const number=tokens[i++];if(!/^[+\-±]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(number))return null;
   const sign=number[0]==='±'?'±':number[0]==='-'?'-':'',value=Number(number.replace(/^[+\-±]/,''));
   let unit=null;if(Object.hasOwn(unitAliases,tokens[i]))unit=unitAliases[tokens[i++]];
   let separator=null;if(i<tokens.length){separator=tokens[i++];if(!['/','to'].includes(separator))return null;if(i===tokens.length)return null;}
   out.push({value,sign,unit,separator});
  }
  return out.length?out:null;
 }
 function sameQuantities(answer,option){return answer&&option&&answer.length===option.length&&answer.every((q,i)=>q.value===option[i].value&&q.sign===option[i].sign&&(!q.unit||q.unit===option[i].unit)&&q.separator===option[i].separator);}
 function matchAnswer(text,choices){
  const raw=normalize(text),phrase=raw.replace(/^(?:i (?:choose|select|pick)|my answer is|the answer is|answer|option|choice)\s+/,'').replace(/^(?:option|choice)\s+/,'');
  const aliases=[['a','ay','alpha','alfa','one','1'],['b','bee','bravo','two','2'],['c','see','charlie','three','3'],['d','dee','delta','four','4']];
  const explicit=String(text).trim().match(/^(?:(?:i (?:choose|select|pick)|my answer is|the answer is)\s+)?(?:option|choice)\s+(alpha|alfa|bravo|charlie|delta|one|two|three|four|[abcd1-4])\b[\s,.:;-]*(.*)$/i);
  if(explicit){const i=aliases.findIndex(a=>a.includes(explicit[1].toLowerCase()));if(!choices[i])return null;if(!explicit[2].trim())return i;const body=matchAnswer(explicit[2],choices);return body===i?i:null;}
  const answer=canonical(text),optionTexts=choices.map(c=>canonical(c.text)),numeric=quantities(answer);
  let numericTexts=optionTexts;
  if(numericTexts.every(t=>t.startsWith('up to ')))numericTexts=numericTexts.map(t=>t.slice(6));
  if(numericTexts.every(t=>t.endsWith(' or more')))numericTexts=numericTexts.map(t=>t.slice(0,-8));
  const candidates=new Set();
  choices.forEach((choice,i)=>{if(answer===optionTexts[i]||sameQuantities(numeric,quantities(numericTexts[i])))candidates.add(i);});
  // A bare number is an answer value when it matches the choices; say "option two" to select a position.
  if(!numeric)choices.forEach((choice,i)=>{if(aliases[i]?.includes(phrase))candidates.add(i);});
  return candidates.size===1?[...candidates][0]:null;
 }
 function speechText(text){return String(text).replace(/\bA321P2F\b/g,'A three twenty one P two F').replace(/°\s*C\b/g,' degrees Celsius').replace(/°/g,' degrees').replace(/≤/g,' less than or equal to ').replace(/≥/g,' greater than or equal to ').replace(/(\d)\s*[-–—]\s*(?=\d)/g,'$1 to ').replace(/[−-](?=\d)/g,'minus ').replace(/\+(?=\d)/g,'plus ').replace(/\bkt\b/gi,'knots').replace(/\bkg\b/gi,'kilograms').replace(/\bmm\b/g,'millimetres').replace(/\bm\b/g,'metres').replace(/\bft\b/g,'feet').replace(/\bqt\b/g,'quarts').replace(/\bM(?=0?\.\d)/g,'Mach ').replace(/\s*\/\s*/g,' and ');}
 function validateInterpretation(text,choices,index){
  if(!Number.isInteger(index)||index<0||index>=choices.length)return null;
  if(/\b(?:maybe|perhaps|either|ignore|instruction|option|choice|alpha|bravo|charlie|delta)\b/i.test(text))return null;
  const input=canonical(text),option=canonical(choices[index].text),numbers=s=>s.match(/[+\-±]?(?:\d+(?:\.\d+)?|\.\d+)/g)?.map(n=>n.replace(/^\+/,''))||[];
  const a=numbers(input),b=numbers(option);
  if(a.length||b.length){
   if(JSON.stringify(a)!==JSON.stringify(b)||/\b(?:not|no|or|less|more|under|over|below|above|least|most)\b/.test(input))return null;
   const units=input.split(/\s+/).filter(t=>Object.hasOwn(unitAliases,t));
   if(units.some(t=>!option.split(/\s+/).includes(t)))return null;
   if(/\b(?:to|between)\b/.test(input)!==/\bto\b/.test(option))return null;
  }
  return index;
 }
 const api={matchAnswer,normalize,speechText,validateInterpretation};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 if(!root.document)return;
 const lines=root.VoiceLines,{labels:names,phrases}=lines;
 const synth=root.speechSynthesis;
 let config=null,enabled=false,pending=null,answered=false,feedbackParts=[],generation=0,timer=null,speaking=false,listening=false,processing=false,audio=null,audioContext=null,local=null,localPromise=null,manifestPromise=null,flexible=false,preparing=false;
 const audioBuffers=new Map();
 const byId=id=>root.document.getElementById(id);
 const localModule=()=>localPromise??=import('./local-voice.mjs?v=72').then(m=>local=m).catch(e=>{localPromise=null;throw e;});
 const manifest=()=>manifestPromise??=root.fetch('./assets/voice/manifest.json?v=72').then(r=>{if(!r.ok)throw Error('Audio files are unavailable.');return r.json();}).catch(e=>{manifestPromise=null;throw e;});
 function status(text){const el=byId('voiceStatus');if(el)el.textContent=text;}
 function controls(){
  const b=byId('voiceToggle');if(b){b.textContent=enabled?'Pause voice':config?.started?'Resume voice':'Start voice';b.setAttribute('aria-pressed',String(enabled));b.disabled=preparing;}
  const mic=byId('voiceListen');if(mic){mic.disabled=processing||preparing;mic.textContent=listening?'Finish answer':pending!==null?'Confirm by voice':answered?'Voice commands':'Answer by voice';}
  const repeat=byId('voiceRepeat');if(repeat){repeat.textContent=answered?'Repeat feedback':'Repeat question';repeat.disabled=preparing;}
  const confirm=byId('voiceConfirm');if(confirm)confirm.hidden=pending===null;
  const retry=byId('voiceRetry');if(retry)retry.hidden=pending===null;
  const prep=byId('voicePrepare');if(prep){prep.textContent=local?.ready()?'Speech model ready':'Prepare local speech';prep.disabled=preparing||!!local?.ready();}
 }
 function stop(){
  generation++;clearTimeout(timer);timer=null;local?.cancel();
  if(audio){audio.onended=audio.onerror=null;if(audio.stop){try{audio.stop();}catch{}audio.disconnect();}else{audio.pause();audio.removeAttribute('src');audio.load();}audio=null;}
  if(speaking&&synth)synth.cancel();speaking=false;listening=false;processing=false;controls();
 }
 function pause(message='Voice paused. Resume when you are ready.'){enabled=false;stop();status(message);controls();}
 function reset(){pause();config=null;pending=null;answered=false;feedbackParts=[];}
 function deviceSpeech(text,token){return new Promise((resolve,reject)=>{
  const voices=synth?.getVoices().filter(v=>v.localService&&v.lang.startsWith('en'))||[];
  if(!voices.length||!root.SpeechSynthesisUtterance){reject(Error('Saved voice audio could not play. Check your connection and try again.'));return;}
  const utterance=new root.SpeechSynthesisUtterance(speechText(text));utterance.lang='en-AU';utterance.rate=0.95;utterance.voice=voices.find(v=>v.lang==='en-AU')||voices[0];utterance.onend=resolve;utterance.onerror=()=>reject(Error('Audio stopped. Try again.'));if(token===generation)synth.speak(utterance);
 });}
 async function playPart(text,token,bank){
  const clip=bank?.clips?.[text];if(clip&&typeof clip==='object'&&audioContext){
   let buffer=audioBuffers.get(clip.file);if(!buffer){const r=await root.fetch(clip.file);if(!r.ok)throw Error('Saved voice audio is unavailable.');buffer=await audioContext.decodeAudioData(await r.arrayBuffer());if(audioBuffers.size>=2)audioBuffers.delete(audioBuffers.keys().next().value);audioBuffers.set(clip.file,buffer);}
   if(token!==generation)return;
   await new Promise(resolve=>{audio=audioContext.createBufferSource();audio.buffer=buffer;audio.connect(audioContext.destination);audio.onended=resolve;audio.start(0,clip.start,clip.duration);});return;
  }
  const file=typeof clip==='string'?clip:null;if(!file||!root.Audio){await deviceSpeech(text,token);return;}
  await new Promise((resolve,reject)=>{if(token!==generation){resolve();return;}audio=new root.Audio(file);audio.onended=resolve;audio.onerror=()=>reject(Error('Saved voice audio could not play. Check your connection and try again.'));audio.play().catch(()=>reject(Error('Tap Repeat question to allow audio playback.')));});
 }
 async function say(parts,after){
  stop();if(!config)return;parts=Array.isArray(parts)?parts:[parts];const token=generation;speaking=true;controls();status('Reading aloud with an AI-generated voice…');
  timer=setTimeout(()=>{if(token===generation)pause('Audio stopped responding. Try again or use the answer buttons.');},120000);
  try{const Context=root.AudioContext||root.webkitAudioContext;if(Context){audioContext??=new Context();await audioContext.resume();}const bank=await manifest().catch(()=>null);if(token!==generation)return;for(const text of parts){await playPart(text,token,bank);if(token!==generation)return;}clearTimeout(timer);speaking=false;controls();if(enabled&&after)after();else status('Ready. Use Answer by voice or choose on screen.');}catch(e){if(token===generation)pause(e.message);}
 }
 function prompt(){if(!config)return;pending=null;byId('voiceHeard').textContent='';
  if(answered){say([...feedbackParts,phrases.next],listen);return;}
  say([lines.question(config),...config.choices.flatMap((x,i)=>['Option '+names[i]+'.',x.text]),phrases.answer],listen);
 }
 function submit(){if(!config||pending===null)return;const choice=config.choices[pending];pending=null;stop();config.submit(choice.index);}
 async function handle(text){
  if(!config)return;const phrase=normalize(text);byId('voiceHeard').textContent='Heard: “'+text+'”';
  if(['pause','stop','stop listening','pause voice'].includes(phrase)){pause();return;}
  if(['repeat','repeat question','repeat feedback'].includes(phrase)){prompt();return;}
  if(answered){if(['next','next question','continue','view results'].includes(phrase)){config.next();return;}say(phrases.next,listen);return;}
  if(pending!==null){
   if(['confirm','yes','yes confirm','submit','submit answer'].includes(phrase)){submit();return;}
   if(['no','try again','change answer','cancel'].includes(phrase)){pending=null;say(phrases.retry,listen);return;}
   say(phrases.confirm,listen);return;
  }
  let choice=matchAnswer(text,config.choices);
  if(choice===null&&flexible&&local?.flexibleReady()){
   const token=generation;processing=true;controls();status('Interpreting your wording on this device…');
   try{choice=validateInterpretation(text,config.choices,await local.interpret(text,config.choices));}catch{choice=null;}
   if(token!==generation||!config)return;processing=false;
  }
  if(choice===null){say(phrases.unknown,listen);return;}
  pending=choice;byId('voiceHeard').textContent='Heard: “'+text+'” → Option '+names[choice]+': '+config.choices[choice].text;
  say(['I heard option '+names[choice]+'.',config.choices[choice].text,phrases.confirm],listen);
 }
 async function prepareSpeech(){
  pause();preparing=true;controls();status('Preparing local speech tools…');const token=generation;
  try{const m=await localModule();await m.prepare(p=>{if(token===generation)status('Downloading local speech tools: '+p.progress+'%');});if(token===generation)status('Local speech is ready. Start voice when you are ready.');}catch(e){if(token===generation)status(e.message);}finally{preparing=false;controls();}
 }
 async function listen(){
  stop();if(!config)return;enabled=true;config.started=true;const token=generation;processing=true;controls();status('Preparing the microphone…');
  try{const m=await localModule();if(token!==generation)return;
   if(!m.ready()){processing=false;pause('Prepare local speech first. This downloads about 65 MB once; your recordings stay on this device.');return;}
   await m.listen({onState:text=>{if(token!==generation)return;listening=text.startsWith('Listening');processing=!listening;controls();status(text);},onText:text=>{if(token!==generation||!config)return;stop();if(!text){status('No answer was heard. Try again.');return;}handle(text);},onError:e=>{if(token===generation)pause(e.message);}});
  }catch(e){if(token===generation)pause(e.message||'Local voice could not start.');}
 }
 function feedback(parts){if(!config)return;stop();answered=true;pending=null;feedbackParts=Array.isArray(parts)?parts:[parts];controls();if(enabled)say([...feedbackParts,phrases.next],listen);else status('Answer recorded. You can resume voice for feedback.');}
 function mount(options){
  stop();config={...options,started:enabled};pending=null;answered=false;feedbackParts=[];
  const panel=byId('voicePanel');if(!panel)return;
  panel.innerHTML='<div class="voice-heading"><span class="tag">On-device voice quiz</span><strong>Listen. Answer. Confirm.</strong></div><div class="actions"><button id="voiceToggle" class="primary" aria-pressed="false">Start voice</button><button id="voiceRepeat">Repeat question</button><button id="voiceListen">Answer by voice</button><button id="voiceConfirm" hidden>Confirm answer</button><button id="voiceRetry" hidden>Try again</button></div><p id="voiceStatus" role="status" aria-live="polite">The questions use a saved, AI-generated OpenAI voice. Prepare local speech to answer by microphone.</p><p id="voiceHeard" class="voice-heard" aria-live="polite"></p><div class="voice-setup"><button id="voicePrepare">Prepare local speech</button><span>About 65 MB on first use. Wi-Fi recommended.</span></div><details class="voice-help"><summary>Flexible wording & privacy</summary><p>Say a short answer, such as “45 metres and 30 metres” for “45 m / 30 m.” Spoken numbers and unit abbreviations are accepted. Units may be omitted when the values match just one choice. You can also say Alpha, Bravo, Charlie, Delta, or option one–four. Say “confirm” to submit or “try again” to change it. After feedback, say “next.” Say “repeat” or “pause” while listening. You can always use the buttons.</p><p><button id="voiceFlexible">Enable flexible wording</button> Optional local AI for paraphrased answers. Downloads several hundred MB and needs a compatible device. Short numeric answers already work without this download.</p><p id="voiceFlexibleStatus" role="status"></p><p>Audio recordings and answer interpretation stay on this device. Speech and language models download from Hugging Face, and their software loads from jsDelivr; files are cached when your browser permits. Saved question audio is hosted with this trainer. No OpenAI key or live AI service is used during a quiz. Your manuals stay private. Local models can mishear or misinterpret answers: check the displayed option before confirming.</p></details>';
  byId('voiceToggle').onclick=()=>{if(enabled){pause();return;}enabled=true;config.started=true;prompt();controls();};
  byId('voiceRepeat').onclick=prompt;byId('voicePrepare').onclick=prepareSpeech;
  byId('voiceListen').onclick=()=>{if(listening){local?.finish();return;}listen();};
  byId('voiceConfirm').onclick=submit;byId('voiceRetry').onclick=()=>{pending=null;say(phrases.retry,listen);};
  byId('voiceFlexible').onclick=async()=>{const b=byId('voiceFlexible'),s=byId('voiceFlexibleStatus');if(flexible){flexible=false;b.textContent='Enable flexible wording';s.textContent='Flexible wording disabled.';return;}b.disabled=true;try{const m=await localModule();await m.prepareAnswers(p=>s.textContent='Loading local language model: '+p.progress+'%');flexible=true;b.textContent='Disable flexible wording';s.textContent='Flexible wording is ready on this device.';}catch(e){s.textContent=e.message;}finally{b.disabled=false;}};
  if(flexible){byId('voiceFlexible').textContent='Disable flexible wording';byId('voiceFlexibleStatus').textContent='Flexible wording is ready on this device.';}
  manifest().catch(()=>{});controls();if(enabled)prompt();
 }
 root.document.addEventListener('visibilitychange',()=>{if(root.document.hidden&&config)pause('Voice paused while this page is in the background.');});
 root.addEventListener('pagehide',reset);
 root.VoiceQuiz={...api,mount,feedback,pause,reset};
})(typeof window!=='undefined'?window:globalThis);
