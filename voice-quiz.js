'use strict';
// Displayed choices are mapped to their original answer indices by the caller.
// Speech never supplies an answer key and ambiguous phrases are never scored.
(function(root){
 const names=['Alpha','Bravo','Charlie','Delta'];
 function normalize(text){return String(text).toLowerCase().normalize('NFKC').replace(/[.,!?;:]/g,' ').replace(/\s+/g,' ').trim();}
 function matchAnswer(text,choices){
  const raw=normalize(text),phrase=raw.replace(/^(?:i (?:choose|select|pick)|my answer is|the answer is|answer|option|choice)\s+/,'').replace(/^(?:option|choice)\s+/,'');
  const aliases=[['a','ay','alpha','alfa','one','1'],['b','bee','bravo','two','2'],['c','see','charlie','three','3'],['d','dee','delta','four','4']];
  const candidates=new Set();
  choices.forEach((choice,i)=>{if(aliases[i]?.includes(phrase)||raw===normalize(choice.text))candidates.add(i);});
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
  say(config.question+variant+' '+config.choices.map((x,i)=>'Option '+names[i]+'. '+x.text+'.').join(' ')+' Say Alpha, Bravo, Charlie, Delta, or the full answer. You will confirm before it is scored.',listen);
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
  if(choice===null){say('I could not match that to one answer. Say Alpha, Bravo, Charlie, or Delta.',listen);return;}
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
  panel.innerHTML='<div class="voice-heading"><span class="tag">Voice quiz</span><strong>Listen. Answer. Confirm.</strong></div><div class="actions"><button id="voiceToggle" class="primary" aria-pressed="false">Start voice</button><button id="voiceRepeat">Repeat question</button><button id="voiceListen">Answer by voice</button></div><p id="voiceStatus" role="status" aria-live="polite">Start voice to hear the question and choices. Allow microphone access when asked.</p><p id="voiceHeard" class="voice-heard" aria-live="polite"></p><details class="voice-help"><summary>Voice controls & privacy</summary><p>Say Alpha, Bravo, Charlie, Delta, option one–four, or the exact answer. Say “confirm” to submit or “try again” to change it. After feedback, say “next.” Say “repeat” or “pause” at any time while listening. You can also tap an answer.</p><p>Speech uses your browser’s speech service and may send audio online for recognition. This trainer does not store recordings or transcripts. Your manuals stay on this device. Microphone support varies by browser; regular answer buttons always work.</p></details>';
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
