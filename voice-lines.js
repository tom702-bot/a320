'use strict';
(function(root){
 const labels=['Alpha','Bravo','Charlie','Delta'];
 const phrases={answer:'Say your answer in short form, or say Alpha, Bravo, Charlie, or Delta. You will confirm before it is scored.',confirm:'Say confirm, or try again.',retry:'Try again. Say an option or your answer in short form.',unknown:'I could not match that to one answer. Include all values and units, or say Alpha, Bravo, Charlie, or Delta.',next:'Say next, repeat, or pause.',correct:'Correct.',review:'Review this limitation.'};
 function question(q){return q.question+(q.variant?' Variant note: '+q.variant+'.':'');}
 function feedback(q){return 'The correct answer is '+q.options[q.answer]+'. '+q.explanation;}
 function all(questions){const texts=new Set(Object.values(phrases));for(const label of labels){texts.add('Option '+label+'.');texts.add('I heard option '+label+'.');}for(const q of questions){texts.add(question({...q,variant:q.applicability[0]==='ALL'?'':'This ventilation table applies to '+q.applicability.join(', ')}));q.options.forEach(t=>texts.add(t));texts.add(feedback(q));}return [...texts];}
 const api={labels,phrases,question,feedback,all};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.VoiceLines=api;
})(typeof window!=='undefined'?window:globalThis);
