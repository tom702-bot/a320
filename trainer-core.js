(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  else root.TrainerCore=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  // Transcribed from the explicit IAE inserts, not the compilation's cover effectivity.
  const SOURCE={
    file:'PDFA320_FCOM_AATIAECUSTOM20260521.pdf',
    sha256:'7978fb0645d256b8affd4e76b751b5e0fff7e9b56a8bfb1bb168a46a163b6b06',
    aircraft:'Ansett A320 IAE V2500-A5',effectivity:'20-IMHT',revision:'13 AUG 2018',
    restriction:'FOR ENGINEERING USE ONLY',checked:'2026-09-05',
    sectionDividerPdfPage:3733
  };
  const fact=(answer,page,manualPage,ident,section='LIM-ENG')=>({answer,pdfPage:page,manualPage,ident,section});
  const EVIDENCE={
    n1:fact('100%',3737,'1/4','LIM-ENG-00020355.0003001'),
    n2:fact('100%',3737,'1/4','LIM-ENG-00020355.0003001'),
    oilContinuous:fact('155 °C',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilTransient:fact('165 °C for 15 min',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilStart:fact('-40 °C',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilTakeoff:fact('50 °C',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilIdle:fact('-10 °C',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilQuantity:fact('PRO-NOR-SOP-04 Before Walkaround - ECAM Pages',3737,'1/4','LIM-ENG-00020354.0010001'),
    oilPressure:fact('60 PSI',3737,'1/4','LIM-ENG-00020354.0010001'),
    starterPause:fact('15 seconds',3738,'2/4','LIM-ENG-00020356.0002001'),
    starterCooling:fact('30 minutes after three failed cycles or five minutes of continuous cranking',3738,'2/4','LIM-ENG-00020356.0002001'),
    starterCycle:fact('One attempt',3738,'2/4','LIM-ENG-00020356.0002001'),
    starterN2:fact('10% N2 on ground; 18% N2 in flight',3738,'2/4','LIM-ENG-00020356.0002001'),
    starterManual:fact('2 minutes',3738,'2/4','LIM-ENG-00020356.0002001'),
    starterCrank:fact('5 minutes',3738,'2/4','LIM-ENG-00020356.0002001'),
    reverseFlight:fact('Prohibited',3738,'2/4','LIM-ENG-00020357.0001001'),
    reverseBacking:fact('Not permitted',3738,'2/4','LIM-ENG-00020357.0001001'),
    reverseSpeed:fact('70 kt',3738,'2/4','LIM-ENG-00020357.0001001'),
    reverseIdle:fact('Idle reverse',3738,'2/4','LIM-ENG-00020357.0001001'),
    flexDerate:fact('Not permitted',3739,'3/4','LIM-ENG-10-00020359.0001001'),
    flexMax:fact('ISA +55 °C',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    flexTref:fact('TREF',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    flexOat:fact('TFLEX must be at least OAT',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    flexContaminated:fact('Not permitted',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    flexPerformance:fact('All takeoff-weight performance requirements must be met at TFLEX thrust',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    flexInoperative:fact('It must be applied to the performance calculation',3738,'2/4','LIM-ENG-10-00020358.0004001'),
    derateToga:fact('Prohibited unless an abnormal or emergency procedure requests it',3738,'2/4','LIM-ENG-10-00020359.0001001'),
    derateRunway:fact('Dry, wet or contaminated',3739,'3/4','LIM-ENG-10-00020359.0001001'),
    n1Conditions:fact('Ambient conditions and engine-bleed configuration',3737,'1/4','LIM-ENG-00020355.0003001'),
    egtTakeoff:fact('635 °C',3737,'1/4','LIM-ENG-00019960.0017001'),
    egtMct:fact('610 °C',3737,'1/4','LIM-ENG-00019960.0017001'),
    egtStart:fact('635 °C',3737,'1/4','LIM-ENG-00019960.0017001'),
    takeoffAeo:fact('5 minutes',3737,'1/4','LIM-ENG-00019960.0017001'),
    takeoffOei:fact('10 minutes',3737,'1/4','LIM-ENG-00019960.0017001'),
    startCrosswind:fact('35 kt',3739,'3/4','LIM-ENG-00020360.0001001'),
    reverserHydraulics:fact('Engine 1: green; engine 2: yellow hydraulics',2293,'2/4','DSC-70-70-00020918.0004001','DSC-70-70'),
    fadecChannel:fact('The standby channel automatically takes control',2264,'1/6','DSC-70-20-00020869.0001001','DSC-70-20'),
    manualStart:fact('The FADEC closes the start valve at 43% N2',2308,'5/6','DSC-70-80-40-00020937.0002001','DSC-70-80-40'),
    dryCrank:fact('ENG MODE to CRANK, MAN START ON, ENG MASTER OFF',2309,'6/6','DSC-70-80-40-00020938.0001001','DSC-70-80-40'),
    inflightStart:fact('FADEC decides whether windmilling speed is sufficient or starter assistance is needed',2305,'2/6','DSC-70-80-40-10-00020935.0001001','DSC-70-80-40')
  };
  function sourceReference(key){
    const e=EVIDENCE[key];
    if(!e)return '';
    return 'FCOM '+e.section+' p.'+e.manualPage+' · IAE insert, A/C '+SOURCE.effectivity+
      ' · '+SOURCE.revision+' · PDF p.'+e.pdfPage+' · '+SOURCE.restriction;
  }
  function sourceStatus(q){
    if(isVerified(q))return {className:'engineering',label:'FCOM SOURCE CHECKED · '+q.verification.id+' · '+(q.evidence?'FOR ENGINEERING USE ONLY':'TRAINING SOURCE; MATCH AIRCRAFT OPTIONS')};
    if(q.verification?.status==='withheld')return {className:'engineering',label:'WITHHELD · NOT ELIGIBLE FOR GRADING'};
    if(q.evidence&&EVIDENCE[q.evidence])return {className:'engineering',label:'IAE TRAINING SOURCE CHECKED · '+SOURCE.restriction};
    if(q.review==='mel-check')return {className:'engineering',label:'VERIFY AGAINST THE CURRENT OPERATOR MEL'};
    return {className:'engineering',label:'SOURCE REFERENCE RETAINED · APPLICABILITY CHECK PENDING'};
  }
  function isVerified(q){
    const v=q&&q.verification;
    return Boolean(v&&['checked','corrected'].includes(v.status)&&v.id&&v.pdfPages?.length&&v.sourceHash===SOURCE.sha256);
  }
  // Ignore optional, matching units only. Never discard arbitrary words or wrong units.
  function normalizeFill(value,unit){
    let s=String(value??'').toLowerCase().trim().replace(/[−–]/g,'-');
    if(!s)return null;
    if((s.match(/\d[\d,]*/g)||[]).some(n=>n.includes(',')&&!/^\d{1,3}(?:,\d{3})+$/.test(n)))return null;
    s=s.replace(/,/g,'').replace(/(\d)(?=[a-z°%])/g,'$1 ').replace(/\s+/g,' ');
    const u=String(unit||'').toLowerCase();
    let units;
    if(u.includes('mach')){units=/\bmach\b|m(?=\s*[+-]?(?:\d|\.\d))/g;}
    else if(u.includes('kt'))units=/\b(?:kt|kts|knots|knot)(?:\s+gs)?\b/g;
    else if(u.includes('ft'))units=/\b(?:ft|feet|foot)(?:\s+agl)?\b/g;
    else if(u.includes('psi'))units=/\bpsi\b/g;
    else if(u.includes('°c'))units=/°\s*c|\bcelsius\b/g;
    else if(u.includes('°'))units=/°|\bdegrees?\b/g;
    else if(u.includes('min'))units=/\b(?:min|mins|minute|minutes)\b/g;
    else if(u==='h')units=/\b(?:h|hr|hrs|hour|hours)\b/g;
    else if(u==='s')units=/\b(?:s|sec|secs|second|seconds)\b/g;
    else if(u.includes('attempt'))units=/\battempts?\b/g;
    else if(u.includes('kg'))units=/\bkg\b/g;
    else if(u.includes('nm'))units=/\bnm\b/g;
    else if(u.includes('mm'))units=/\bmm\b/g;
    else if(u.startsWith('m'))units=/\bm(?:\s+agl)?\b/g;
    else if(u.includes('%'))units=/%/g;
    else if(u.includes('g'))units=/\bg\b/g;
    if(units)s=s.replace(units,'');
    s=s.replace(/^within\s+/,'').replace(/\bto\b/g,':').replace(/\s+/g,'');
    if(!/^[±+-]?\d*\.?\d+(?::[+-]?\d*\.?\d+)?$/.test(s))return null;
    return s.split(':').map(n=>(n.startsWith('±')?'±':'')+Number(n.replace('±',''))).join(':');
  }
  function hasDependentOptions(q){
    return q.o.some(s=>/\b(?:as in|either|both|option|answer|statement)\s+[A-E]\b|\b[A-E]\s+(?:and|or)\s+[A-E]\b|\b(?:all|none|any)\s+of\s+(?:the\s+)?above\b/i.test(s));
  }
  function optionOrder(q,shuffle){
    const items=q.o.map((t,i)=>({t,i}));
    return hasDependentOptions(q)?items:shuffle(items);
  }
  function examResult(correct,missed,expected){
    const answered=correct+missed;
    const complete=expected>0&&answered===expected;
    const percent=answered?correct/answered*100:0;
    return {answered,expected,complete,percent,displayPercent:Math.round(percent*10)/10,pass:complete&&correct*100>=expected*80};
  }
  return {SOURCE,EVIDENCE,sourceReference,sourceStatus,isVerified,normalizeFill,hasDependentOptions,optionOrder,examResult};
});
