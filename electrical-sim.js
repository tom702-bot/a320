(function(){
  'use strict';

  const canvas=document.getElementById('synoptic');
  const ctx=canvas.getContext('2d');
  const presetButtons=[...document.querySelectorAll('[data-mode]')];
  const title=document.getElementById('modeTitle');
  const text=document.getElementById('modeText');
  const impactList=document.getElementById('impactList');
  const sourceControls=document.getElementById('sourceControls');
  const systemControls=document.getElementById('systemControls');
  const C={bg:'#000000',green:'#42ff48',amber:'#ffb327',cyan:'#48d9ed',white:'#f3f5f3',grey:'#aeb8b1',dim:'#233028'};

  const components={
    gen1:{label:'GEN 1',group:'source',on:'ON',off:'OFF',offText:'GEN 1 was selected OFF. Its generator-line contactor opened, removing the normal source from AC BUS 1.',onText:'GEN 1 was selected ON. It can connect to AC BUS 1 through its generator-line contactor.'},
    gen2:{label:'GEN 2',group:'source',on:'ON',off:'OFF',offText:'GEN 2 was selected OFF. Its generator-line contactor opened, removing the normal source from AC BUS 2.',onText:'GEN 2 was selected ON. It can connect to AC BUS 2 through its generator-line contactor.'},
    apu:{label:'APU GEN',group:'source',on:'ON',off:'OFF',offText:'The APU generator was selected OFF and is no longer available to the AC bus-tie network.',onText:'The APU generator was selected ON. It will supply an unpowered main AC bus through the bus-tie network.'},
    ext:{label:'EXT PWR',group:'source',on:'ON',off:'OFF',offText:'External power was disconnected from the AC bus-tie network.',onText:'External power was connected. It has priority over the APU generator when an external source is needed in this training model.'},
    emer:{label:'EMER GEN',group:'source',on:'AVAILABLE',off:'ISOLATED',offText:'The emergency generator was isolated. It cannot recover AC ESS after loss of both main AC buses.',onText:'The emergency generator was made available. With both main AC buses lost, it supplies AC ESS and allows the ESS TR to support DC ESS.'},
    bat1:{label:'BAT 1',group:'source',on:'AVAILABLE',off:'UNAVAILABLE',offText:'BAT 1 was made unavailable. HOT BUS 1 lost its direct battery source and the static inverter cannot use BAT 1.',onText:'BAT 1 was made available. HOT BUS 1 is directly powered, and BAT 1 can support the DC BAT BUS or static inverter when required.'},
    bat2:{label:'BAT 2',group:'source',on:'AVAILABLE',off:'UNAVAILABLE',offText:'BAT 2 was made unavailable. HOT BUS 2 lost its direct battery source.',onText:'BAT 2 was made available. HOT BUS 2 is directly powered and BAT 2 can support the DC BAT BUS through its contactor.'},
    tr1:{label:'TR 1',group:'system',on:'IN SERVICE',off:'ISOLATED',offText:'TR 1 was isolated. AC BUS 1 can no longer be converted into power for DC BUS 1.',onText:'TR 1 was returned to service. When AC BUS 1 is powered, it supplies DC BUS 1 with 28 V DC.'},
    tr2:{label:'TR 2',group:'system',on:'IN SERVICE',off:'ISOLATED',offText:'TR 2 was isolated. AC BUS 2 can no longer be converted into power for DC BUS 2.',onText:'TR 2 was returned to service. When AC BUS 2 is powered, it supplies DC BUS 2 with 28 V DC.'},
    essTr:{label:'ESS TR',group:'system',on:'IN SERVICE',off:'ISOLATED',offText:'The ESS TR was isolated. AC ESS can no longer be converted into an alternate supply for DC ESS.',onText:'The ESS TR was returned to service. It supports DC ESS from AC ESS when the normal DC feed is lost.'},
    statInv:{label:'STAT INV',group:'system',on:'IN SERVICE',off:'ISOLATED',offText:'The static inverter was isolated. BAT 1 cannot be converted into battery-supplied essential AC.',onText:'The static inverter was returned to service. It can convert BAT 1 DC power into essential AC when no AC generator source is available.'},
    busTie:{label:'BUS TIE',group:'system',on:'AUTO',off:'OFF',offText:'Both AC bus-tie contactors were selected OFF. Automatic transfer between the main AC buses and APU or external supply is blocked.',onText:'The AC bus-tie contactors were returned to AUTO. They close only when needed to recover an unpowered main AC bus.'},
    dcTie:{label:'DC TIE',group:'system',on:'AUTO',off:'OFF',offText:'Both DC-tie contactors were selected OFF. DC BUS 1 and DC BUS 2 can no longer feed the DC BAT BUS.',onText:'The DC-tie contactors were returned to AUTO, allowing an available main DC bus to feed the DC BAT BUS.'},
    acEssFeed:{label:'AC ESS FEED',group:'system',on:'AUTO',off:'OFF',offText:'The normal and alternate AC ESS feed path was isolated. AC ESS now depends on the emergency generator or static inverter.',onText:'AC ESS FEED was returned to AUTO. AC BUS 1 is preferred, with AC BUS 2 used as the alternate main-bus source.'},
    batCont1:{label:'BAT 1 CONT',group:'system',on:'AUTO',off:'OFF',offText:'The BAT 1 contactor opened. BAT 1 is isolated from the DC BAT BUS, but HOT BUS 1 remains directly battery-fed.',onText:'The BAT 1 contactor was returned to AUTO, allowing BAT 1 to connect to the DC BAT BUS when required.'},
    batCont2:{label:'BAT 2 CONT',group:'system',on:'AUTO',off:'FAILED / OPEN',offText:'The BAT 2 contactor opened. BAT 2 is isolated from the DC BAT BUS, but HOT BUS 2 remains directly battery-fed.',onText:'The BAT 2 contactor was returned to AUTO, allowing BAT 2 to connect to the DC BAT BUS when required.'},
    acBus1:{label:'AC BUS 1',group:'system',on:'HEALTHY',off:'FAILED',offText:'AC BUS 1 failed. GEN 1 cannot feed it and AC ESS automatically seeks the AC BUS 2 alternate path.',onText:'AC BUS 1 was restored and can again accept its normal or transferred source.'},
    acBus2:{label:'AC BUS 2',group:'system',on:'HEALTHY',off:'FAILED',offText:'AC BUS 2 failed. GEN 2 cannot feed it; the remaining AC network continues independently.',onText:'AC BUS 2 was restored and can again accept its normal or transferred source.'},
    acEssBus:{label:'AC ESS BUS',group:'system',on:'HEALTHY',off:'FAILED',offText:'The AC ESS BUS failed. Its normal, alternate, emergency-generator and static-inverter feeds cannot restore the bus itself.',onText:'The AC ESS BUS was restored and can accept the highest-priority available feed.'},
    acEssShedBus:{label:'AC ESS SHED',group:'system',on:'HEALTHY',off:'FAILED',offText:'The AC ESS SHED BUS failed, removing its lower-priority essential loads.',onText:'The AC ESS SHED BUS was restored; it is powered whenever AC ESS and a main AC bus are available.'},
    dcBus1:{label:'DC BUS 1',group:'system',on:'HEALTHY',off:'FAILED',offText:'DC BUS 1 failed. TR 1 may be energised but cannot power that distribution bus.',onText:'DC BUS 1 was restored and can again receive TR 1 output.'},
    dcBus2:{label:'DC BUS 2',group:'system',on:'HEALTHY',off:'FAILED',offText:'DC BUS 2 failed. TR 2 may be energised but cannot power that distribution bus.',onText:'DC BUS 2 was restored and can again receive TR 2 output.'},
    dcBatBus:{label:'DC BAT BUS',group:'system',on:'HEALTHY',off:'FAILED',offText:'The DC BAT BUS failed, interrupting normal DC-tie and battery-contactor distribution to DC ESS.',onText:'The DC BAT BUS was restored and can again accept a main DC or battery feed.'},
    dcEssBus:{label:'DC ESS BUS',group:'system',on:'HEALTHY',off:'FAILED',offText:'The DC ESS BUS failed. Normal DC, ESS TR and battery paths cannot restore the bus itself.',onText:'The DC ESS BUS was restored and can accept the available essential DC feed.'},
    dcEssShedBus:{label:'DC ESS SHED',group:'system',on:'HEALTHY',off:'FAILED',offText:'The DC ESS SHED BUS failed, removing its lower-priority essential loads.',onText:'The DC ESS SHED BUS was restored; it remains automatically shed in reduced-power configurations.'},
    hotBus1:{label:'HOT BUS 1',group:'system',on:'HEALTHY',off:'FAILED',offText:'HOT BUS 1 failed despite BAT 1 availability.',onText:'HOT BUS 1 was restored to its direct BAT 1 supply.'},
    hotBus2:{label:'HOT BUS 2',group:'system',on:'HEALTHY',off:'FAILED',offText:'HOT BUS 2 failed despite BAT 2 availability.',onText:'HOT BUS 2 was restored to its direct BAT 2 supply.'}
  };

  const normalState={gen1:true,gen2:true,apu:false,ext:false,emer:true,bat1:true,bat2:true,tr1:true,tr2:true,essTr:true,statInv:true,busTie:true,dcTie:true,acEssFeed:true,batCont1:true,batCont2:true,acBus1:true,acBus2:true,acEssBus:true,acEssShedBus:true,dcBus1:true,dcBus2:true,dcBatBus:true,dcEssBus:true,dcEssShedBus:true,hotBus1:true,hotBus2:true};
  const presets={
    normal:{title:'NORMAL CONFIGURATION RESET',text:'GEN 1 supplies AC BUS 1 and GEN 2 supplies AC BUS 2. All automatic contactors and conversion components are available.',changes:{}},
    onegen:{title:'ONE GENERATOR AVAILABLE',text:'GEN 2 is removed. The automatic bus-tie network lets GEN 1 supply both main AC buses.',changes:{gen2:false}},
    apu:{title:'APU SUPPLY',text:'Both engine generators are removed and the APU generator supplies the main AC network through the automatic bus ties.',changes:{gen1:false,gen2:false,apu:true}},
    emergency:{title:'EMERGENCY GENERATOR CONFIGURATION',text:'Both main AC buses are lost. The emergency generator supplies AC ESS and the ESS TR supports DC ESS; shed buses are not powered.',changes:{gen1:false,gen2:false,apu:false,ext:false}},
    battery:{title:'BATTERY-ONLY CONFIGURATION',text:'All AC generators are unavailable. BAT 1 supports AC ESS through the static inverter and the batteries support the reduced DC essential network.',changes:{gen1:false,gen2:false,apu:false,ext:false,emer:false}}
  };

  let state={...normalState};
  let selectedKey='';
  let activePreset='normal';
  let hitRegions=[];
  let scale=1,W=500,H=600;

  function evaluate(st){
    let ac1=false,ac2=false,ac1Source='',ac2Source='',tieClosed=false;
    if(st.gen1){ac1=true;ac1Source='GEN 1'}
    if(st.gen2){ac2=true;ac2Source='GEN 2'}

    const commonSource=st.ext?'EXT PWR':st.apu?'APU GEN':'';
    if(st.busTie&&commonSource){
      if(!ac1){ac1=true;ac1Source=commonSource;tieClosed=true}
      if(!ac2){ac2=true;ac2Source=commonSource;tieClosed=true}
    }
    if(st.busTie&&!commonSource){
      if(ac1&&!ac2){ac2=true;ac2Source=ac1Source+' VIA BUS TIE';tieClosed=true}
      else if(ac2&&!ac1){ac1=true;ac1Source=ac2Source+' VIA BUS TIE';tieClosed=true}
    }
    ac1=ac1&&st.acBus1!==false;if(!ac1)ac1Source='';
    ac2=ac2&&st.acBus2!==false;if(!ac2)ac2Source='';

    let acEss=false,acEssSource='';
    if(st.acEssFeed&&ac1){acEss=true;acEssSource='AC BUS 1'}
    else if(st.acEssFeed&&ac2){acEss=true;acEssSource='AC BUS 2 ALT FEED'}
    else if(st.emer){acEss=true;acEssSource='EMER GEN'}
    else if(st.statInv&&st.bat1){acEss=true;acEssSource='BAT 1 VIA STAT INV'}
    acEss=acEss&&st.acEssBus!==false;if(!acEss)acEssSource='';

    const tr1Active=st.tr1&&ac1;
    const tr2Active=st.tr2&&ac2;
    const dc1=tr1Active&&st.dcBus1!==false;
    const dc2=tr2Active&&st.dcBus2!==false;
    const normalDcFeed=st.dcTie&&(dc1||dc2);
    const batteryDcFeed=(st.batCont1&&st.bat1)||(st.batCont2&&st.bat2);
    const dcBat=(normalDcFeed||batteryDcFeed)&&st.dcBatBus!==false;
    let dcBatSource='';
    if(st.dcTie&&dc1)dcBatSource='DC BUS 1';
    else if(st.dcTie&&dc2)dcBatSource='DC BUS 2';
    else if(st.batCont1&&st.bat1)dcBatSource='BAT 1';
    else if(st.batCont2&&st.bat2)dcBatSource='BAT 2';

    const essTrActive=st.essTr&&acEss&&!normalDcFeed&&acEssSource.indexOf('STAT INV')<0;
    let dcEss=false,dcEssSource='';
    if(normalDcFeed){dcEss=true;dcEssSource='DC BAT BUS'}
    else if(essTrActive){dcEss=true;dcEssSource='ESS TR'}
    else if(dcBat){dcEss=true;dcEssSource='DC BAT BUS / BATTERY'}
    dcEss=dcEss&&st.dcEssBus!==false;if(!dcEss)dcEssSource='';

    const mainAcAvailable=ac1||ac2;
    const acEssShed=acEss&&mainAcAvailable&&st.acEssShedBus!==false;
    const dcEssShed=dcEss&&mainAcAvailable&&st.dcEssShedBus!==false;
    return{
      ac1,ac2,acEss,acEssShed,dc1,dc2,dcBat,dcEss,dcEssShed,hot1:st.bat1&&st.hotBus1!==false,hot2:st.bat2&&st.hotBus2!==false,
      ac1Source,ac2Source,acEssSource,dcBatSource,dcEssSource,tr1Active,tr2Active,essTrActive,
      tieClosed,mainAcAvailable,
      gen1Line:st.gen1&&ac1Source==='GEN 1',gen2Line:st.gen2&&ac2Source==='GEN 2',
      batCont1Closed:st.batCont1&&st.bat1,batCont2Closed:st.batCont2&&st.bat2,
      dcTie1Closed:st.dcTie&&dc1,dcTie2Closed:st.dcTie&&dc2,
      acEssFeedClosed:st.acEssFeed&&mainAcAvailable,
      staticInvActive:acEssSource.indexOf('STAT INV')>=0,emerActive:acEssSource==='EMER GEN',
      apuActive:ac1Source.indexOf('APU')>=0||ac2Source.indexOf('APU')>=0,
      extActive:ac1Source.indexOf('EXT')>=0||ac2Source.indexOf('EXT')>=0
    };
  }

  const busFields=[
    ['ac1','AC BUS 1','ac1Source'],['ac2','AC BUS 2','ac2Source'],['acEss','AC ESS BUS','acEssSource'],
    ['acEssShed','AC ESS SHED',''],['dc1','DC BUS 1',''],['dc2','DC BUS 2',''],
    ['dcBat','DC BAT BUS','dcBatSource'],['dcEss','DC ESS BUS','dcEssSource'],['dcEssShed','DC ESS SHED',''],
    ['hot1','HOT BUS 1',''],['hot2','HOT BUS 2','']
  ];

  function systemSummary(s){
    if(!s.acEss&&!s.dcEss)return 'Essential AC and DC power are both lost in this configuration.';
    if(!s.ac1&&!s.ac2&&s.acEss&&s.dcEss)return 'Only the essential network remains powered; both shed buses are isolated.';
    if(s.ac1&&s.ac2&&s.dc1&&s.dc2&&s.acEssShed&&s.dcEssShed)return 'All normal AC and DC buses are powered.';
    const unavailable=[];
    [['ac1','AC 1'],['ac2','AC 2'],['dc1','DC 1'],['dc2','DC 2'],['acEss','AC ESS'],['dcEss','DC ESS']].forEach(([key,name])=>{if(!s[key])unavailable.push(name)});
    return unavailable.length?'Currently unpowered: '+unavailable.join(', ')+'.':'The essential network remains powered, with some loads shed.';
  }

  function impact(before,after){
    const lost=[],restored=[],rerouted=[];
    busFields.forEach(([field,name,sourceField])=>{
      if(before[field]&&!after[field])lost.push(name);
      if(!before[field]&&after[field])restored.push(name);
      if(sourceField&&before[field]&&after[field]&&before[sourceField]!==after[sourceField])rerouted.push(name+' is now supplied by '+after[sourceField]+'.');
    });
    const items=[];
    if(lost.length)items.push('Power lost: '+lost.join(', ')+'.');
    if(restored.length)items.push('Power restored: '+restored.join(', ')+'.');
    items.push(...rerouted.slice(0,3));
    if(!lost.length&&!restored.length&&!rerouted.length)items.push('No bus supply changed because another available path is carrying the electrical load.');
    items.push(systemSummary(after));
    return items;
  }

  function setExplanation(heading,body,items){
    title.textContent=heading;
    text.textContent=body;
    impactList.replaceChildren();
    items.forEach(item=>{const li=document.createElement('li');li.textContent=item;impactList.appendChild(li)});
  }

  function componentStatus(key){
    const meta=components[key];
    return state[key]?meta.on:meta.off;
  }

  function renderControls(){
    Object.entries(components).forEach(([key,meta])=>{
      const button=document.createElement('button');
      button.type='button';button.className='component';button.dataset.component=key;
      button.innerHTML='<strong></strong><span></span>';
      button.querySelector('strong').textContent=meta.label;
      button.addEventListener('click',()=>toggleComponent(key));
      (meta.group==='source'?sourceControls:systemControls).appendChild(button);
    });
    updateControls();
  }

  function updateControls(){
    document.querySelectorAll('[data-component]').forEach(button=>{
      const key=button.dataset.component;
      button.setAttribute('aria-pressed',String(state[key]));
      button.setAttribute('aria-label',components[key].label+', '+componentStatus(key)+'. Tap to fail or restore.');
      button.querySelector('span').textContent=componentStatus(key);
      button.classList.toggle('is-selected',selectedKey===key);
    });
    presetButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===activePreset)));
  }

  function toggleComponent(key){
    const before=evaluate(state);
    state[key]=!state[key];
    selectedKey=key;activePreset='';
    const after=evaluate(state);
    const meta=components[key];
    setExplanation(meta.label+' — '+componentStatus(key),state[key]?meta.onText:meta.offText,impact(before,after));
    updateControls();draw();
  }

  function loadPreset(name){
    const preset=presets[name];
    state={...normalState,...preset.changes};selectedKey='';activePreset=name;
    const result=evaluate(state);
    const items=[systemSummary(result)];
    if(name==='normal')items.push('Tap a component to isolate it and observe the automatic reconfiguration.');
    else if(!result.acEssShed||!result.dcEssShed)items.push('AC ESS SHED and DC ESS SHED are not powered in this reduced configuration.');
    setExplanation(preset.title,preset.text,items);
    updateControls();draw();
  }

  function font(px){return Math.max(10,Math.round(px*scale))+'px ui-monospace,"SF Mono",Menlo,Consolas,monospace'}
  function pathBox(x,y,w,h){ctx.beginPath();ctx.rect(x-w/2,y-h/2,w,h)}
  function line(x1,y1,x2,y2,color,width=1.5,dash=[]){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);if(color===C.green){ctx.shadowColor=C.green;ctx.shadowBlur=6}ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore()}
  function wire(x1,y1,x2,y2,on){line(x1,y1,x2,y2,on?C.green:C.dim,on?2.6:1,on?[]:[4,5])}
  function label(str,x,y,color=C.white,size=14,align='center'){
    ctx.save();ctx.fillStyle=color;ctx.font=font(size);ctx.textAlign=align;ctx.textBaseline='middle';ctx.fillText(str,x,y);ctx.restore();
  }
  function addHit(key,x,y,w,h){if(key)hitRegions.push({key,x:x-w/2,y:y-h/2,w,h})}
  function selectedOutline(key,x,y,w,h){if(selectedKey===key){ctx.save();ctx.strokeStyle=C.cyan;ctx.lineWidth=2;ctx.strokeRect(x-w/2-3,y-h/2-3,w+6,h+6);ctx.restore()}}
  function equipmentBox(x,y,w,h,name,values,powerState='on',key=''){
    const valueColor=powerState==='on'?C.green:powerState==='active'?C.green:powerState==='available'?C.cyan:powerState==='isolated'?C.amber:C.grey;
    ctx.save();const g=ctx.createLinearGradient(x,y-h/2,x,y+h/2);g.addColorStop(0,'#243029');g.addColorStop(.25,'#0b110d');g.addColorStop(1,'#050805');ctx.fillStyle=g;pathBox(x,y,w,h);ctx.fill();ctx.strokeStyle=powerState==='isolated'?C.amber:powerState==='on'||powerState==='active'?C.green:C.grey;ctx.lineWidth=1.5;if(powerState==='on'||powerState==='active'){ctx.shadowColor=C.green;ctx.shadowBlur=7}ctx.stroke();ctx.strokeStyle='rgba(255,255,255,.24)';ctx.beginPath();ctx.moveTo(x-w/2+2,y-h/2+2);ctx.lineTo(x+w/2-2,y-h/2+2);ctx.stroke();ctx.restore();
    label(name,x,y-h*.31,powerState==='isolated'?C.amber:C.white,14);
    if(values&&values.length){
      const gap=Math.max(11,h*.22);const start=y-h*.02-(values.length-1)*gap/2;
      values.forEach((v,i)=>label(v,x,start+i*gap,valueColor,13));
    }
    addHit(key,x,y,w,h);selectedOutline(key,x,y,w,h);
  }
  function busBox(x,y,w,name,on,size=14,key=''){
    ctx.save();const g=ctx.createLinearGradient(x,y-13,x,y+13);g.addColorStop(0,'#26332b');g.addColorStop(.5,'#060906');g.addColorStop(1,'#111812');ctx.fillStyle=g;pathBox(x,y,w,25);ctx.fill();ctx.strokeStyle=on?C.green:C.amber;ctx.lineWidth=1.5;if(on){ctx.shadowColor=C.green;ctx.shadowBlur=6}ctx.stroke();ctx.restore();
    label(name,x,y,on?C.green:C.amber,size);
    addHit(key,x,y,w,25);selectedOutline(key,x,y,w,25);
  }
  function contactor(x,y,closed,enabled,key='',caption='',side='right'){
    const color=!enabled?C.amber:closed?C.green:C.grey;
    ctx.save();ctx.strokeStyle=color;ctx.lineWidth=1.1;ctx.beginPath();
    ctx.moveTo(x-5,y-6);ctx.lineTo(x,y-1);ctx.lineTo(x+5,y-6);ctx.moveTo(x-5,y+6);ctx.lineTo(x,y+1);ctx.lineTo(x+5,y+6);ctx.stroke();ctx.restore();
    if(caption)label(caption,x+(side==='right'?9:-9),y,color,9,side==='right'?'left':'right');
    addHit(key,x,y,36,30);selectedOutline(key,x,y,30,24);
  }
  function arrowTriangle(x,y,on){
    ctx.save();ctx.strokeStyle=on?C.green:C.grey;ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(x-8,y-5);ctx.lineTo(x+8,y-5);ctx.lineTo(x,y+6);ctx.closePath();ctx.stroke();ctx.restore();
  }
  function drawFooter(y){
    line(10,y,W-10,y,C.grey,1.2);line(W*.34,y,W*.34,H-6,C.grey,1.1);line(W*.66,y,W*.66,H-6,C.grey,1.1);
    const now=new Date();const hh=String(now.getUTCHours()).padStart(2,'0');const mm=String(now.getUTCMinutes()).padStart(2,'0');
    label('TAT',W*.07,y+(H-y)*.30,C.grey,12,'left');label('+15',W*.20,y+(H-y)*.30,C.green,13);label('°C',W*.30,y+(H-y)*.30,C.cyan,12);
    label('SAT',W*.07,y+(H-y)*.68,C.grey,12,'left');label('+15',W*.20,y+(H-y)*.68,C.green,13);label('°C',W*.30,y+(H-y)*.68,C.cyan,12);
    label(hh+' H '+mm,W*.50,y+(H-y)*.58,C.green,14);label('GW',W*.69,y+(H-y)*.34,C.grey,12,'left');label('----- KG',W*.83,y+(H-y)*.34,C.green,12);label('TRAINING',W*.83,y+(H-y)*.72,C.cyan,11);
  }

  function draw(){
    W=Math.max(300,canvas.clientWidth||520);H=Math.round(W*1.20);scale=Math.max(.82,Math.min(1.12,W/500));hitRegions=[];
    const dpr=Math.min(2,window.devicePixelRatio||1);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);canvas.style.height=H+'px';
    ctx.setTransform(dpr,0,0,dpr,0,0);ctx.fillStyle=C.bg;ctx.fillRect(0,0,W,H);
    const s=evaluate(state);
    const xL=W*.13,xC=W*.50,xR=W*.87,xB1=W*.30,xB2=W*.70,xInv=W*.34,xEss=W*.54,xEmer=W*.75;
    const titleY=H*.035,dcBatY=H*.085,batY=H*.18,hotY=H*.28,dcY=H*.36,dcEssY=H*.40,midY=H*.50,acY=H*.61,genY=H*.78,footerY=H*.92;
    const sideW=Math.min(105,W*.20),centerW=Math.min(100,W*.18),shedW=Math.min(112,W*.22),hotW=Math.min(100,W*.19),batW=Math.min(78,W*.16),genW=Math.min(100,W*.19);
    const batH=Math.min(60,H*.12),trH=Math.min(72,H*.14),genH=Math.min(95,H*.16),dc1Right=xL+sideW/2,dc2Left=xR-sideW/2;

    label('ELEC',W*.045,titleY,C.white,16,'left');line(W*.045,titleY+9,W*.14,titleY+9,C.cyan,1.6);

    wire(xB1,dcBatY+13,xB1,batY-batH/2,s.batCont1Closed);wire(xB2,dcBatY+13,xB2,batY-batH/2,s.batCont2Closed);
    contactor(xB1,(dcBatY+batY-batH/2)/2,s.batCont1Closed,state.batCont1,'batCont1','BAT CONT','left');
    contactor(xB2,(dcBatY+batY-batH/2)/2,s.batCont2Closed,state.batCont2,'batCont2','BAT CONT','right');
    wire(xB1,batY+batH/2,xB1,hotY-13,s.hot1);wire(xB2,batY+batH/2,xB2,hotY-13,s.hot2);
    wire(xB1+hotW/2,hotY,xC,hotY,s.batCont1Closed);wire(xC,hotY,xB2-hotW/2,hotY,s.batCont2Closed);
    wire(dc1Right,dcY,xC,dcY,s.dcTie1Closed);wire(xC,dcY,dc2Left,dcY,s.dcTie2Closed);
    contactor((dc1Right+xC)/2,dcY,s.dcTie1Closed,state.dcTie,'dcTie','DC TIE','left');
    contactor((xC+dc2Left)/2,dcY,s.dcTie2Closed,state.dcTie,'dcTie','DC TIE','right');
    wire(xC,dcY+13,xC,dcEssY-13,s.dcEss&&s.dcEssSource.indexOf('DC BAT')>=0);
    wire(xL,dcY+13,xL,midY-trH/2,s.tr1Active);wire(xR,dcY+13,xR,midY-trH/2,s.tr2Active);
    wire(xL,midY+trH/2,xL,acY-13,s.tr1Active);wire(xR,midY+trH/2,xR,acY-13,s.tr2Active);
    wire(xL,acY+13,xL,genY-genH/2,s.gen1Line);wire(xR,acY+13,xR,genY-genH/2,s.gen2Line);
    contactor(xL,(acY+13+genY-genH/2)/2,s.gen1Line,state.gen1,'gen1','GEN LINE','right');
    contactor(xR,(acY+13+genY-genH/2)/2,s.gen2Line,state.gen2,'gen2','GEN LINE','left');

    const tieY=acY+25;
    wire(xL,tieY,xR,tieY,s.tieClosed);wire(xL,acY+13,xL,tieY,s.tieClosed);wire(xR,acY+13,xR,tieY,s.tieClosed);
    contactor(xL+(xC-xL)*.45,tieY,s.tieClosed,state.busTie,'busTie','BUS TIE','left');
    contactor(xR-(xR-xC)*.45,tieY,s.tieClosed,state.busTie,'busTie','BUS TIE','right');
    wire(xC,genY-genH*.44,xC,tieY,s.apuActive);wire(W*.68,genY-genH*.36,W*.68,tieY,s.extActive);

    const acEssFrom1=s.acEss&&s.acEssSource==='AC BUS 1';
    const acEssFrom2=s.acEss&&s.acEssSource.indexOf('AC BUS 2')===0;
    wire(xL+sideW/2,acY,xC-centerW/2,acY,acEssFrom1);wire(xC+centerW/2,acY,xR-sideW/2,acY,acEssFrom2);
    contactor(xC,acY-20,s.acEssFeedClosed,state.acEssFeed,'acEssFeed','AC ESS FEED','right');
    if(s.essTrActive){wire(xEss,midY+12,xC,dcEssY+13,true)}
    if(s.emerActive){wire(xEmer,midY+20,xC+centerW/2,acY,true)}
    if(s.staticInvActive){wire(xB1+hotW/2,hotY,xInv,midY-20,true);wire(xInv,midY+20,xC-centerW/2,acY,true)}

    const dcShedX=W*.71,dcShedY=dcEssY+Math.max(18,H*.035),acShedX=W*.27,acShedY=acY+31;
    wire(xC+centerW/2,dcEssY,xC+centerW/2,dcShedY,s.dcEssShed);wire(xC+centerW/2,dcShedY,dcShedX-shedW/2,dcShedY,s.dcEssShed);
    wire(xC-centerW/2,acY,xC-centerW/2,acShedY,s.acEssShed);wire(xC-centerW/2,acShedY,acShedX+shedW/2,acShedY,s.acEssShed);

    busBox(xC,dcBatY,Math.min(300,W*.60),'DC BAT BUS',s.dcBat,13,'dcBatBus');
    equipmentBox(xB1,batY,batW,batH,'BAT 1',state.bat1?['29 V','1 A']:['OFF'],state.bat1?'on':'isolated','bat1');
    equipmentBox(xB2,batY,batW,batH,'BAT 2',state.bat2?['29 V','1 A']:['OFF'],state.bat2?'on':'isolated','bat2');
    busBox(xB1,hotY,hotW,'HOT BUS 1',s.hot1,11,'hotBus1');busBox(xB2,hotY,hotW,'HOT BUS 2',s.hot2,11,'hotBus2');
    busBox(xL,dcY,sideW,'DC BUS 1',s.dc1,12,'dcBus1');busBox(xR,dcY,sideW,'DC BUS 2',s.dc2,12,'dcBus2');busBox(xC,dcEssY,centerW,'DC ESS BUS',s.dcEss,11,'dcEssBus');busBox(dcShedX,dcShedY,shedW,'DC ESS SHED',s.dcEssShed,10,'dcEssShedBus');
    equipmentBox(xL,midY,sideW,trH,'TR 1',!state.tr1?['ISOLATED']:s.tr1Active?['28 V','68 A']:['0 V','0 A'],!state.tr1?'isolated':s.tr1Active?'on':'off','tr1');
    equipmentBox(xR,midY,sideW,trH,'TR 2',!state.tr2?['ISOLATED']:s.tr2Active?['28 V','68 A']:['0 V','0 A'],!state.tr2?'isolated':s.tr2Active?'on':'off','tr2');
    equipmentBox(xInv,midY,Math.min(74,W*.14),45,'STAT INV',[!state.statInv?'ISOLATED':s.staticInvActive?'ACTIVE':'READY'],!state.statInv?'isolated':s.staticInvActive?'active':'available','statInv');
    equipmentBox(xEss,midY,Math.min(68,W*.13),45,'ESS TR',[!state.essTr?'ISOLATED':s.essTrActive?'ACTIVE':'READY'],!state.essTr?'isolated':s.essTrActive?'active':'available','essTr');
    equipmentBox(xEmer,midY,Math.min(82,W*.15),48,'EMER GEN',[!state.emer?'ISOLATED':s.emerActive?'ACTIVE':'READY'],!state.emer?'isolated':s.emerActive?'active':'available','emer');
    busBox(xL,acY,sideW,'AC BUS 1',s.ac1,12,'acBus1');busBox(xC,acY,centerW,'AC ESS BUS',s.acEss,11,'acEssBus');busBox(xR,acY,sideW,'AC BUS 2',s.ac2,12,'acBus2');busBox(acShedX,acShedY,shedW,'AC ESS SHED',s.acEssShed,10,'acEssShedBus');

    const g1vals=state.gen1?(s.gen1Line?['32 %','115 V','400 HZ']:['AVAILABLE']):['OFF'];
    const g2vals=state.gen2?(s.gen2Line?['24 %','115 V','400 HZ']:['AVAILABLE']):['OFF'];
    equipmentBox(xL,genY,genW,genH,'GEN 1',g1vals,state.gen1?'on':'isolated','gen1');
    equipmentBox(xR,genY,genW,genH,'GEN 2',g2vals,state.gen2?'on':'isolated','gen2');
    label('IDG1',xL-genW*.45,genY+genH*.66,C.white,11,'left');label(state.gen1?'105 °C':'--- °C',xL+genW*.28,genY+genH*.66,state.gen1?C.green:C.amber,11);
    label('IDG2',xR+genW*.45,genY+genH*.66,C.white,11,'right');label(state.gen2?'105 °C':'--- °C',xR-genW*.28,genY+genH*.66,state.gen2?C.green:C.amber,11);
    equipmentBox(xC,genY,Math.min(84,W*.15),genH*.72,'APU GEN',!state.apu?['OFF']:s.apuActive?['115 V','400 HZ']:['AVAILABLE'],state.apu?(s.apuActive?'on':'available'):'isolated','apu');
    equipmentBox(W*.68,genY,Math.min(84,W*.15),genH*.72,'EXT PWR',!state.ext?['OFF']:s.extActive?['115 V','400 HZ']:['AVAILABLE'],state.ext?(s.extActive?'on':'available'):'isolated','ext');
    if(s.emerActive){label('RAT',xEmer,midY+35,C.green,10);arrowTriangle(xEmer,midY+47,true)}
    drawFooter(footerY);
    canvas.setAttribute('aria-label','Interactive A320 ELEC training synoptic. '+systemSummary(s));
  }

  canvas.addEventListener('click',event=>{
    const rect=canvas.getBoundingClientRect();
    const x=(event.clientX-rect.left)*W/rect.width;
    const y=(event.clientY-rect.top)*H/rect.height;
    const hit=[...hitRegions].reverse().find(region=>x>=region.x&&x<=region.x+region.w&&y>=region.y&&y<=region.y+region.h);
    if(hit)toggleComponent(hit.key);
  });
  canvas.addEventListener('mousemove',event=>{
    const rect=canvas.getBoundingClientRect();const x=(event.clientX-rect.left)*W/rect.width;const y=(event.clientY-rect.top)*H/rect.height;
    canvas.style.cursor=hitRegions.some(region=>x>=region.x&&x<=region.x+region.w&&y>=region.y&&y<=region.y+region.h)?'pointer':'default';
  });
  presetButtons.forEach(button=>button.addEventListener('click',()=>loadPreset(button.dataset.mode)));
  if('ResizeObserver' in window)new ResizeObserver(draw).observe(canvas.parentElement);else window.addEventListener('resize',draw);
  window.A320ElectricalTrainer={loadPreset,toggleComponent,restoreAll:()=>loadPreset('normal'),getState:()=>({preset:activePreset,components:{...state},network:evaluate(state)}),getComponents:()=>Object.keys(components)};
  renderControls();loadPreset('normal');
})();

