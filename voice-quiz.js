'use strict';
// Displayed choices are mapped to their original answer indices by the caller.
// Speech never supplies an answer key and ambiguous phrases are never scored.
(function(root){
 const names=['Alpha','Bravo','Charlie','Delta'];
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
 function speechText(text){return String(text).replace(/\bA321P2F\b/g,'A three twenty one P two F').replace(/°\s*C\b/g,' degrees Celsius').replace(/°/g,' degrees').replace(/≤/g,' less than or equal to ').replace(/≥/g,' greater than or equal to ').replace(/(\d)\s*[-–—]\s*(?=\d)/g,'$1 to ').replace(/[−-](?=\d)/g,'minus ').replace(/\+(?=\d)/g,'plus ').replace(/\bkt\b/gi,'knots').replace(/\bkg\b/gi,'kilograms');}
 const api={matchAnswer,normalize,speechText};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 if(!root.document)return;
 let config=null,enabled=false,pending=null,answered=false,feedbackText='',generation=0,recognition=null,timer=null,speaking=false,listening=false;
 const synth=root.speechSynthesis,Recognition=root.SpeechRecognition||root.webkitSpeechRecognition;
 const byId=id=>root.document.getElementById(id);
 function status(text){const el=byId('voiceStatus');if(el)el.textContent=text;}
 function controls(){
  const b=byId('voiceToggle');if(b){b.textContent=enabled?'Pause voice':config?.started?'Resume voice':'Start voice';b.setAttribute('aria-pressed',String(enabled));b.disabled=!synth||!root.SpeechSynthesisUtterance;}
  const mic=byId('voiceListen');if(mic){mic.disabled=!Recognition;mic.textContent=listening?'Stop listening':pending!==null?'Confirm by voice':answered?'Voice commands':'Answer by voice';}
  const repeat=byId('voiceRepeat');if(repeat){repeat.textContent=answered?'Repeat feedback':'Repeat question';repeat.disabled=!synth||!root.SpeechSynthesisUtterance;}
 }
 function stop(){
  generation++;clearTimeout(timer);timer=null;
  if(recognition){const old=recognition;recognition=null;old.onresult=old.onend=old.onerror=old.onstart=null;try{old.abort();}catch{}}
  if(speaking&&synth)synth.cancel();speaking=false;listening=false;controls();
 }
 function pause(message='Voice paused. Resume when you are ready.'){enabled=false;stop();status(message);controls();}
 function reset(){pause();config=null;pending=null;answered=false;feedbackText='';}
 function say(text,after){
  stop();if(!config)return;
  if(!synth||!root.SpeechSynthesisUtterance){status('Read-aloud is unavailable in this browser. You can still use the answer buttons.');return;}
  const token=generation,utterance=new root.SpeechSynthesisUtterance(speechText(text));
  utterance.lang='en-AU';utterance.rate=0.95;
  const voices=synth.getVoices();utterance.voice=voices.find(v=>v.lang==='en-AU')||voices.find(v=>v.lang.startsWith('en-'))||null;
  speaking=true;controls();status('Reading aloud…');
  utterance.onend=()=>{if(token!==generation||!config)return;clearTimeout(timer);speaking=false;controls();if(enabled&&after)after();else status('Ready. Use Answer by voice or choose on screen.');};
  utterance.onerror=()=>{if(token!==generation)return;pause('Audio could not play. Try Repeat question or use the answer buttons.');};
  timer=setTimeout(()=>{if(token===generation)pause('Audio stopped responding. Try again or use the answer buttons.');},90000);
  try{synth.speak(utterance);}catch{pause('Audio could not start. Try again or use the answer buttons.');}
 }
 function prompt(){if(!config)return;pending=null;byId('voiceHeard').textContent='';
  if(answered){say(feedbackText+' Say next, repeat, or pause.',listen);return;}
  const variant=config.variant?' Variant note: '+config.variant+'.':'';
  say(config.question+variant+' '+config.choices.map((x,i)=>'Option '+names[i]+'. '+x.text+'.').join(' ')+' Say your answer in short form, or say Alpha, Bravo, Charlie, or Delta. You will confirm before it is scored.',listen);
 }
 function handle(text){
  if(!config)return;const phrase=normalize(text);byId('voiceHeard').textContent='Heard: “'+text+'”';
  if(['pause','stop','stop listening','pause voice'].includes(phrase)){pause();return;}
  if(['repeat','repeat question','repeat feedback'].includes(phrase)){prompt();return;}
  if(answered){if(['next','next question','continue','view results'].includes(phrase)){config.next();return;}say('Say next to continue, repeat to hear the feedback, or pause.',listen);return;}
  if(pending!==null){
   if(['confirm','yes','yes confirm','submit','submit answer'].includes(phrase)){const choice=config.choices[pending];pending=null;stop();config.submit(choice.index);return;}
   if(['no','try again','change answer','cancel'].includes(phrase)){pending=null;say('Try again. Say an option or the full answer.',listen);return;}
   say('Say confirm to submit option '+names[pending]+', or try again to change it.',listen);return;
  }
  const choice=matchAnswer(text,config.choices);
  if(choice===null){say('I could not match that to one answer. Include all values and units, or say Alpha, Bravo, Charlie, or Delta.',listen);return;}
  pending=choice;say('I heard option '+names[choice]+'. '+config.choices[choice].text+'. Say confirm, or try again.',listen);
 }
 function listen(){
  stop();if(!config)return;
  if(!Recognition){status('Voice answers are unavailable in this browser. Try a supported browser such as Chrome, or choose an answer on screen.');return;}
  enabled=true;config.started=true;
  const token=generation;let heard=false,failed=false;
  try{
   const rec=new Recognition();recognition=rec;rec.lang='en-AU';rec.continuous=false;rec.interimResults=true;rec.maxAlternatives=1;
   rec.onstart=()=>{if(token!==generation)return;listening=true;controls();status(pending!==null?'Listening — say confirm or try again.':answered?'Listening — say next, repeat, or pause.':'Listening — say your answer.');};
   rec.onresult=event=>{
    if(token!==generation||!config)return;
    let final='',interim='';for(let i=event.resultIndex;i<event.results.length;i++){const result=event.results[i];if(result.isFinal)final+=result[0].transcript+' ';else interim+=result[0].transcript;}
    if(interim)byId('voiceHeard').textContent='Hearing: '+interim;
    if(final.trim()&&!heard){heard=true;stop();handle(final.trim());}
   };
   rec.onerror=event=>{if(token!==generation)return;failed=true;const errors={'not-allowed':'Microphone access was denied. Allow it in your browser’s site settings, then try again.','service-not-allowed':'This browser cannot use speech recognition. Try another supported browser or use the answer buttons.','audio-capture':'No microphone was found. Check your microphone and try again.','network':'The speech service could not connect. Check your connection or use the answer buttons.','no-speech':'No answer was heard. Tap Answer by voice to try again.','language-not-supported':'Australian English recognition is unavailable. Try another supported browser or use the answer buttons.'};pause(errors[event.error]||'Voice recognition stopped. Try again or use the answer buttons.');};
   rec.onend=()=>{if(token!==generation)return;recognition=null;listening=false;clearTimeout(timer);controls();if(!heard&&!failed)status('No answer was heard. Tap the microphone button to try again.');};
   timer=setTimeout(()=>{if(token===generation)pause('Listening timed out. Tap the microphone button to try again.');},20000);
   controls();status('Starting microphone…');rec.start();
  }catch{pause('The microphone could not start. Tap Answer by voice to try again, or choose on screen.');}
 }
 function feedback(text){if(!config)return;stop();answered=true;pending=null;feedbackText=text;controls();if(enabled)say(text+' Say next, repeat, or pause.',listen);else status('Answer recorded. You can resume voice for feedback.');}
 function mount(options){
  stop();config={...options,started:enabled};pending=null;answered=false;feedbackText='';
  const panel=byId('voicePanel');if(!panel)return;
  panel.innerHTML='<div class="voice-heading"><span class="tag">Voice quiz</span><strong>Listen. Answer. Confirm.</strong></div><div class="actions"><button id="voiceToggle" class="primary" aria-pressed="false">Start voice</button><button id="voiceRepeat">Repeat question</button><button id="voiceListen">Answer by voice</button></div><p id="voiceStatus" role="status" aria-live="polite">Start voice to hear the question and choices. Allow microphone access when asked.</p><p id="voiceHeard" class="voice-heard" aria-live="polite"></p><details class="voice-help"><summary>Voice controls & privacy</summary><p>Say a short answer, such as “45 metres and 30 metres” for “45 m / 30 m.” Spoken numbers and unit abbreviations are accepted. Units may be omitted when the values match just one choice. You can also say Alpha, Bravo, Charlie, Delta, or option one–four. Bare numbers are treated as answer values. Say “confirm” to submit or “try again” to change it. After feedback, say “next.” Say “repeat” or “pause” at any time while listening. You can also tap an answer.</p><p>Speech uses your browser’s speech service and may send audio online for recognition. This trainer does not store recordings or transcripts. Your manuals stay on this device. Microphone support varies by browser; regular answer buttons always work.</p></details>';
  byId('voiceToggle').onclick=()=>{if(enabled){pause();return;}enabled=true;config.started=true;prompt();controls();};
  byId('voiceRepeat').onclick=prompt;
  byId('voiceListen').onclick=()=>{if(listening){pause();return;}listen();};
  controls();
  if(!Recognition)status('Voice answers are unavailable in this browser. Read-aloud and answer buttons are still available.');
  if(!synth||!root.SpeechSynthesisUtterance)status('Read-aloud is unavailable in this browser. The answer buttons still work.');
  if(enabled)prompt();
 }
 root.document.addEventListener('visibilitychange',()=>{if(root.document.hidden&&config)pause('Voice paused while this page is in the background.');});
 root.addEventListener('pagehide',reset);
 root.VoiceQuiz={...api,mount,feedback,pause,reset};
})(typeof window!=='undefined'?window:globalThis);
