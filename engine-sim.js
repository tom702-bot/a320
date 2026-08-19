(function(){
  'use strict';

  const canvas=document.getElementById('engineDisplay');
  const ctx=canvas.getContext('2d');
  const scenarioButtons=[...document.querySelectorAll('[data-scenario]')];
  const modeButtons=[...document.querySelectorAll('[data-mode]')];
  const masterButtons=[...document.querySelectorAll('[data-master]')];
  const manualButton=document.getElementById('manualStart');
  const stepButton=document.getElementById('stepButton');
  const autoButton=document.getElementById('autoButton');
  const resetButton=document.getElementById('resetButton');
  const componentGrid=document.getElementById('componentGrid');
  const sequenceItems=[...document.querySelectorAll('[data-seq]')];
  const explainBox=document.getElementById('explainBox');
  const eventTitle=document.getElementById('eventTitle');
  const eventText=document.getElementById('eventText');
  const impactList=document.getElementById('impactList');

  const C={bg:'#000000',green:'#42ff48',amber:'#ffb327',cyan:'#48d9ed',white:'#f3f5f3',grey:'#aeb8b1',dim:'#233028',red:'#ff5757'};
  const componentMeta={
    fadecA:{label:'FADEC CHANNEL A',on:'AVAILABLE',off:'ISOLATED',text:'One FADEC channel is normally active while the other remains in standby. Either channel can control both igniters.'},
    fadecB:{label:'FADEC CHANNEL B',on:'AVAILABLE',off:'ISOLATED',text:'If one FADEC channel is isolated, the other automatically provides the redundant control path.'},
    air:{label:'START AIR',on:'AVAILABLE',off:'ISOLATED',text:'Pneumatic pressure is required to operate the air-turbine starter through the start valve.'},
    startValve:{label:'START VALVE',on:'AVAILABLE',off:'ISOLATED',text:'The start valve admits pneumatic air to the starter when commanded by FADEC or MAN START.'},
    igniterA:{label:'IGNITER A',on:'AVAILABLE',off:'ISOLATED',text:'Automatic starts use one igniter and alternate the selected igniter or channel on successive attempts.'},
    igniterB:{label:'IGNITER B',on:'AVAILABLE',off:'ISOLATED',text:'A manual start commands both available igniters; an automatic start can continue with either available igniter.'},
    hpFuel:{label:'HP FUEL VALVE',on:'AVAILABLE',off:'ISOLATED',text:'The HP fuel valve admits metered fuel for light-up after the N2 and control conditions are satisfied.'},
    oil:{label:'OIL SYSTEM',on:'AVAILABLE',off:'ISOLATED',text:'Oil pressure rises with engine rotation. The supplied IAE appendix lists 60 PSI as the minimum oil pressure.'}
  };

  const allAvailable={fadecA:true,fadecB:true,air:true,startValve:true,igniterA:true,igniterB:true,hpFuel:true,oil:true};
  let components={...allAvailable};
  let scenario='normal';
  let selectedComponent='';
  let mode='norm';
  let master=false;
  let manualStart=false;
  let progress=0;
  let running=false;
  let fault='';
  let abortStage=0;
  let autoTimer=null;
  let attempt=1;
  let packsClosed=false;
  let startValveOpen=false;
  let lpFuelOpen=false;
  let hpFuelOpen=false;
  let ignition='';
  let dryCrank=false;
  let values={n1:0,n2:0,egt:22,ff:0,epr:1.000,oilP:0,oilT:22,vib:0,fuelUsed:0,bleed:0};
  let W=560,H=535,scale=1;

  function fadecAvailable(){return components.fadecA||components.fadecB}
  function availableIgniters(){return [components.igniterA?'A':'',components.igniterB?'B':''].filter(Boolean)}
  function activeIgnition(){
    const avail=availableIgniters();
    if(manualStart)return avail.join('');
    if(!avail.length)return '';
    return avail[(attempt-1)%avail.length]||avail[0];
  }
  function isStarting(){return master&&!running&&(progress>1||mode==='start')}

  function setEvent(heading,body,items=[],isFault=false){
    eventTitle.textContent=heading;eventText.textContent=body;
    impactList.replaceChildren();
    items.forEach(item=>{const li=document.createElement('li');li.textContent=item;impactList.appendChild(li)});
    explainBox.classList.toggle('fault',isFault);
  }

  function updateSequence(){
    sequenceItems.forEach((item,index)=>{
      item.classList.toggle('done',index<progress);
      item.classList.toggle('active',!fault&&index===progress&&progress<7);
      item.classList.toggle('fault',!!fault&&index===Math.min(progress,6));
    });
  }

  function componentStatus(key){return components[key]?componentMeta[key].on:componentMeta[key].off}
  function updateControls(){
    scenarioButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.scenario===scenario)));
    modeButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.mode===mode)));
    masterButtons.forEach(button=>button.setAttribute('aria-pressed',String((button.dataset.master==='on')===master)));
    manualButton.setAttribute('aria-pressed',String(manualStart));
    document.querySelectorAll('[data-component]').forEach(button=>{
      const key=button.dataset.component;
      button.setAttribute('aria-pressed',String(components[key]));
      button.setAttribute('aria-label',componentMeta[key].label+', '+componentStatus(key)+'. Tap to change.');
      button.querySelector('span').textContent=componentStatus(key);
      button.classList.toggle('is-selected',key===selectedComponent);
    });
    autoButton.textContent=autoTimer?'STOP AUTO':'AUTO RUN';
    stepButton.disabled=!!autoTimer;
    updateSequence();
  }

  function renderComponents(){
    Object.entries(componentMeta).forEach(([key,meta])=>{
      const button=document.createElement('button');button.type='button';button.className='component';button.dataset.component=key;
      button.innerHTML='<strong></strong><span></span>';button.querySelector('strong').textContent=meta.label;
      button.addEventListener('click',()=>toggleComponent(key));componentGrid.appendChild(button);
    });
  }

  function stopAuto(){
    if(autoTimer){clearInterval(autoTimer);autoTimer=null;updateControls()}
  }

  function resetEngine(resetScenario=true){
    stopAuto();
    if(resetScenario)scenario='normal';
    components={...allAvailable};selectedComponent='';mode='norm';master=false;manualStart=false;progress=0;running=false;fault='';abortStage=0;attempt=1;
    packsClosed=false;startValveOpen=false;lpFuelOpen=false;hpFuelOpen=false;ignition='';dryCrank=false;
    values={n1:0,n2:0,egt:22,ff:0,epr:1.000,oilP:0,oilT:22,vib:0,fuelUsed:0,bleed:0};
    setEvent('READY FOR ENGINE START','Select IGN/START, then move ENG 2 MASTER to ON. Use NEXT STEP to study each action or AUTO RUN for a continuous demonstration.',[
      'The selected fault scenario changes what FADEC encounters during the start.',
      'Component isolations override the selected scenario.'
    ]);
    updateControls();draw();
  }

  function chooseScenario(name){
    resetEngine(false);scenario=name;
    const descriptions={
      normal:['NORMAL START SELECTED','FADEC will control a normal automatic start and stabilise the engine at idle.'],
      hot:['HOT START INJECTION SELECTED','EGT will exceed the 635 °C engineering limit during light-up. In automatic mode FADEC will abort below 50% N2 and command a dry crank.'],
      hung:['HUNG START INJECTION SELECTED','The engine will light but N2 will stop accelerating. In automatic mode FADEC will abort and command a dry crank.'],
      nolight:['NO LIGHT-UP INJECTION SELECTED','Starter rotation, ignition and fuel commands will occur, but combustion and EGT rise will not develop.']
    };
    setEvent(descriptions[name][0],descriptions[name][1],['Set ENG MODE to IGN/START and ENG MASTER to ON to begin.'],name!=='normal');
    updateControls();draw();
  }

  function toggleComponent(key){
    stopAuto();components[key]=!components[key];selectedComponent=key;
    const meta=componentMeta[key];
    const items=[];
    if((key==='fadecA'||key==='fadecB')&&!fadecAvailable())items.push('Both FADEC channels are now unavailable: automatic start control is lost.');
    else if((key==='fadecA'||key==='fadecB')&&fadecAvailable())items.push('At least one FADEC channel remains available to control the start.');
    if((key==='igniterA'||key==='igniterB')&&!availableIgniters().length)items.push('No ignition circuit remains available; the next start will produce no light-up.');
    if(key==='air'||key==='startValve')items.push(components[key]?'Starter rotation can be commanded.':'The starter cannot receive pneumatic power through the normal path.');
    if(key==='hpFuel')items.push(components[key]?'Fuel can be admitted after the start conditions are met.':'The engine can motor but cannot light because HP fuel is blocked.');
    if(key==='oil'&&running)values.oilP=components.oil?85:0;
    setEvent(meta.label+' — '+componentStatus(key),meta.text,items.length?items:['No immediate indication changes until the component is demanded.'],!components[key]);
    updateControls();draw();
  }

  function selectMode(next,silent=false){
    stopAuto();mode=next;
    if(running){
      if(next==='start')ignition=availableIgniters().join('');
      else ignition='';
      if(!silent)setEvent('ENG MODE — '+(next==='start'?'IGN/START':next.toUpperCase()),next==='start'?'Continuous ignition is selected on the running engine.':'The engine remains running; ignition returns to its normal automatic logic.',[]);
    }else if(next==='start'){
      progress=Math.max(progress,1);packsClosed=true;
      if(!silent)setEvent('IGN/START SELECTED','The ENG system page is called and both pack valves close. If ENG MASTER is not selected ON within approximately 30 seconds, the pack valves reopen.',[
        'Engine parameters are now available for start monitoring.',
        'Move ENG 2 MASTER to ON for an automatic start, or select MAN START for a manual sequence.'
      ]);
    }else if(next==='crank'){
      progress=0;packsClosed=false;
      if(!silent)setEvent('CRANK SELECTED','With ENG MASTER OFF, select MAN START to motor the engine without ignition or fuel.',[]);
    }else{
      if(!master){progress=0;packsClosed=false}
      if(!silent)setEvent('NORM SELECTED','The start selector is in its normal operating position.',[]);
    }
    updateControls();draw();
  }

  function selectMaster(on,silent=false){
    stopAuto();const wasStarting=isStarting();master=on;
    if(!on){
      lpFuelOpen=false;hpFuelOpen=false;ignition='';startValveOpen=false;dryCrank=false;
      if(wasStarting||fault){values.ff=0;values.epr=1;fault='';abortStage=0;progress=mode==='start'?1:0}
      if(running){running=false;values.ff=0;values.epr=1;values.oilP=0;values.bleed=0;values.n1=Math.min(values.n1,15);values.n2=Math.min(values.n2,30)}
      if(!silent)setEvent('ENG 2 MASTER — OFF','Close commands are sent directly to the LP and HP fuel valves and both FADEC channels reset.',[
        'Fuel flow stops.',
        'Ignition and the start valve are no longer commanded.'
      ]);
    }else{
      lpFuelOpen=true;
      if(mode==='start'){
        progress=Math.max(progress,2);packsClosed=true;startValveOpen=components.air&&components.startValve&&fadecAvailable();
        if(!silent)setEvent(manualStart?'MANUAL START INITIATED':'AUTOMATIC START INITIATED','The LP fuel valve is open. FADEC commands the start valve and begins monitoring N2.',[
          startValveOpen?'Pneumatic air is driving the starter.':'The start valve cannot produce starter rotation with the present component isolations.',
          manualStart?'FADEC monitors the start but the crew must interrupt an abnormal start.':'FADEC has authority to abort an abnormal ground start below 50% N2.'
        ],!startValveOpen);
      }else{
        if(!silent)setEvent('ENG 2 MASTER — ON','The LP fuel valve opens, but an automatic start requires ENG MODE at IGN/START.',[
          'Select IGN/START to establish the automatic start sequence.'
        ]);
      }
    }
    updateControls();draw();
  }

  function toggleManual(){
    stopAuto();manualStart=!manualStart;
    if(manualStart&&mode==='crank'&&!master){
      startValveOpen=components.air&&components.startValve;dryCrank=true;packsClosed=true;
      setEvent('DRY CRANK SELECTED','MAN START opens the start valve with ENG MODE at CRANK and ENG MASTER OFF. No fuel or ignition is commanded.',[
        startValveOpen?'Pneumatic air is available to motor the engine.':'The start valve or pneumatic source is isolated.',
        'Use NEXT STEP to increase or decrease simulated N2.'
      ]);
    }else{
      setEvent('MAN START — '+(manualStart?'ON':'OFF'),manualStart?'The guarded MAN START pushbutton is selected. In IGN/START, both available igniters will be commanded when ENG MASTER is ON.':'The manual start or dry-crank command is removed.',[
        manualStart?'FADEC monitoring remains available, but it will not automatically abort a manual start.':'A normal automatic start remains available with MAN START off.'
      ]);
    }
    updateControls();draw();
  }

  function effectiveFault(){
    if(!fadecAvailable())return 'FADEC CONTROL LOST';
    if(!components.air||!components.startValve)return 'HUNG START';
    if(!components.hpFuel||!availableIgniters().length)return 'NO LIGHT UP';
    if(scenario==='hot')return 'HOT START';
    if(scenario==='hung')return 'HUNG START';
    if(scenario==='nolight')return 'NO LIGHT UP';
    return '';
  }

  function triggerFault(name){
    fault=name;
    if(manualStart){
      stopAuto();
      setEvent('MANUAL START — '+name,name+' has been detected, but FADEC does not have authority to abort a manual start.',[
        'ECAM displays ENG 2 START FAULT.',
        'Crew intervention is required: move ENG 2 MASTER to OFF to interrupt the sequence.'
      ],true);
      updateControls();draw();return;
    }
    hpFuelOpen=false;values.ff=0;ignition='';startValveOpen=false;abortStage=1;
    setEvent('FADEC AUTO ABORT — '+name,'During the automatic ground start below 50% N2, FADEC detected '+name.toLowerCase()+' and initiated the abort sequence.',[
      'HP fuel valve closed, start valve closed and ignition stopped.',
      'The next step commands the automatic dry crank to clear fuel vapour.'
    ],true);
    updateControls();draw();
  }

  function stepAbort(){
    if(abortStage===1){
      abortStage=2;dryCrank=true;startValveOpen=components.air&&components.startValve;values.n2=startValveOpen?25:Math.max(values.n2,0);values.n1=startValveOpen?5:values.n1;values.egt=Math.max(80,values.egt-180);values.oilP=components.oil&&startValveOpen?25:0;
      setEvent('AUTOMATIC DRY CRANK','FADEC reopens the start-air path and motors the engine at its maximum motoring speed for approximately 30 seconds.',[
        'Fuel and ignition remain off.',
        'Airflow clears residual fuel vapour and EGT decreases.'
      ],true);
    }else{
      abortStage=3;dryCrank=false;startValveOpen=false;values.n2=0;values.n1=0;values.egt=45;values.oilP=0;
      setEvent('ABORT SEQUENCE COMPLETE','The dry crank is complete. The start valve is closed and the engine remains shut down.',[
        'Move ENG 2 MASTER to OFF, reset the trainer and investigate the cause before another attempt.',
        'The supplied limitation requires 15 seconds between successive ground-start cycles.'
      ],true);
      stopAuto();
    }
    updateControls();draw();
  }

  function stepCrank(){
    if(!manualStart||master){
      setEvent('CRANK NOT CONFIGURED','For a dry crank, select ENG MODE CRANK, ENG MASTER OFF and MAN START ON.',[],true);return;
    }
    startValveOpen=components.air&&components.startValve;dryCrank=startValveOpen;packsClosed=startValveOpen;
    if(!startValveOpen){values.n2=0;setEvent('NO STARTER ROTATION','The pneumatic source or start valve is isolated, so the engine cannot be motored.',[],true)}
    else if(values.n2<20){values.n2=Math.min(20,values.n2+10);values.n1=Math.min(4,values.n1+2);values.oilP=components.oil?20:0;setEvent('DRY CRANK — N2 '+values.n2+'%','The starter is motoring the engine without ignition or fuel.',[
      'Use MAN START OFF to stop the crank.',
      'The engineering limitation lists a maximum crank cycle of 5 minutes.'
    ])}
    else{manualStart=false;startValveOpen=false;dryCrank=false;values.n2=0;values.n1=0;values.oilP=0;setEvent('DRY CRANK STOPPED','MAN START is released and the start valve closes.',[])}
    updateControls();draw();
  }

  function nextStep(){
    if(mode==='crank'){stepCrank();return}
    if(fault&&abortStage){stepAbort();return}
    if(fault&&manualStart){
      setEvent('CREW ACTION REQUIRED','The abnormal manual start continues to require crew intervention. Move ENG 2 MASTER to OFF.',[],true);return;
    }
    if(mode!=='start'){
      setEvent('SELECT IGN/START','Set ENG MODE to IGN/START before beginning an automatic or manual start.',[],true);return;
    }
    if(!master){
      setEvent('SELECT ENG 2 MASTER ON','IGN/START has configured the displays and closed the packs. Move ENG 2 MASTER to ON to command the start.',[],true);return;
    }

    if(progress<=2){
      progress=3;startValveOpen=components.air&&components.startValve&&fadecAvailable();
      if(startValveOpen){values.n2=8;values.n1=1;values.oilP=components.oil?12:0;setEvent('STARTER MOTORING','The start valve is open and pneumatic air drives the starter. N2 begins to rise.',[
        'LP fuel valve is open.',
        'HP fuel and ignition remain off during initial motoring.'
      ])}
      else{values.n2=0;triggerFault(effectiveFault()||'HUNG START');return}
    }else if(progress===3){
      progress=4;values.n2=15;values.n1=3;values.oilP=components.oil?25:0;
      ignition=activeIgnition();hpFuelOpen=components.hpFuel&&fadecAvailable();values.ff=hpFuelOpen?220:0;
      setEvent('IGNITION AND HP FUEL','N2 is within the 10-16% start band. FADEC commands HP fuel and '+(ignition?'igniter '+ignition:'no available igniter')+'.',[
        hpFuelOpen?'HP fuel valve is open.':'HP fuel valve is isolated.',
        ignition?'IGN '+ignition+' is displayed on the ENG page.':'Both ignition circuits are unavailable.'
      ],!hpFuelOpen||!ignition);
    }else if(progress===4){
      progress=5;const injected=effectiveFault();
      if(injected==='NO LIGHT UP'||injected==='FADEC CONTROL LOST'){
        values.n2=22;values.n1=3;values.egt=25;triggerFault(injected);return;
      }
      if(injected==='HOT START'){
        values.n2=26;values.n1=7;values.egt=650;values.epr=1.035;values.ff=360;triggerFault(injected);return;
      }
      values.n2=28;values.n1=8;values.egt=420;values.epr=1.055;values.ff=300;values.oilP=components.oil?45:0;
      setEvent('LIGHT-UP CONFIRMED','Combustion is established: EGT, N1 and oil pressure increase while N2 continues to accelerate.',[
        'FADEC continues to monitor EGT and acceleration.',
        scenario==='hung'?'The selected hung-start fault will prevent further N2 acceleration at the next step.':'Start parameters remain within the provisional training limits.'
      ]);
    }else if(progress===5){
      const injected=effectiveFault();
      if(injected==='HUNG START'){values.n2=28;values.n1=9;values.egt=510;values.ff=320;triggerFault(injected);return}
      progress=6;values.n2=44;values.n1=16;values.egt=470;values.epr=1.075;values.ff=310;values.oilP=components.oil?70:0;values.bleed=25;
      startValveOpen=false;ignition='';
      setEvent('43% N2 CUTOUT','N2 has passed 43%. FADEC closes the start valve and stops ignition while the engine continues accelerating.',[
        'HP fuel remains open.',
        'Pack valves can reopen if another engine start is not initiated within approximately 30 seconds.'
      ]);
    }else if(progress===6){
      progress=7;running=true;packsClosed=false;startValveOpen=false;ignition='';values={...values,n1:23,n2:60,egt:440,ff:310,epr:1.020,oilP:components.oil?85:0,oilT:55,vib:.8,fuelUsed:2,bleed:34};
      setEvent('ENGINE 2 AVAILABLE','The engine has stabilised at or above idle. AVAIL is displayed and the automatic start is complete.',[
        'Return ENG MODE to NORM after the start.',
        components.oil?'Oil pressure is above the 60 PSI engineering minimum.':'The oil system is isolated: oil pressure remains unavailable.'
      ],!components.oil);
      stopAuto();
    }else{
      setEvent('ENGINE AT IDLE','The start sequence is complete. Select NORM or reset the trainer for another scenario.',[]);
    }
    updateControls();draw();
  }

  function toggleAuto(){
    if(autoTimer){stopAuto();setEvent('AUTO RUN PAUSED','Use NEXT STEP to continue manually or AUTO RUN to resume.',[]);return}
    if(mode!=='start')selectMode('start',true);
    if(!master)selectMaster(true,true);
    autoTimer=setInterval(()=>{
      if(fault&&manualStart){stopAuto();return}
      if(running||abortStage===3){stopAuto();return}
      nextStep();
    },950);
    setEvent('AUTO RUN ACTIVE','The simulator will advance through each FADEC-controlled stage. Select STOP AUTO to pause.',[]);
    updateControls();draw();
  }

  function font(px){return Math.max(10,Math.round(px*scale))+'px ui-monospace,"SF Mono",Menlo,Consolas,monospace'}
  function line(x1,y1,x2,y2,color,width=1,dash=[]){ctx.save();ctx.strokeStyle=color;ctx.lineWidth=width;ctx.setLineDash(dash);ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();ctx.restore()}
  function label(str,x,y,color=C.white,size=13,align='center'){
    ctx.save();ctx.fillStyle=color;ctx.font=font(size);ctx.textAlign=align;ctx.textBaseline='middle';ctx.fillText(str,x,y);ctx.restore();
  }
  function gauge(x,y,r,value,min,max,name,digits=1,redAt=null){
    const start=Math.PI*.78,end=Math.PI*2.22,span=end-start;
    ctx.save();ctx.lineWidth=Math.max(2,r*.06);ctx.strokeStyle=C.grey;ctx.beginPath();ctx.arc(x,y,r,start,end);ctx.stroke();
    const ratio=Math.max(0,Math.min(1,(value-min)/(max-min)));ctx.strokeStyle=redAt!==null&&value>redAt?C.red:C.green;ctx.lineWidth=Math.max(2,r*.075);ctx.beginPath();ctx.arc(x,y,r,start,start+span*ratio);ctx.stroke();
    const a=start+span*ratio;ctx.strokeStyle=redAt!==null&&value>redAt?C.red:C.white;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+Math.cos(a)*r*.82,y+Math.sin(a)*r*.82);ctx.stroke();ctx.restore();
    label(name,x,y-r*.22,C.white,12);label(value.toFixed(digits),x,y+r*.25,redAt!==null&&value>redAt?C.red:C.green,14);
  }
  function valuePair(name,v1,v2,y,color2=C.green,unit=''){
    label(String(v1),W*.25,y,C.green,13);label(name,W*.50,y,C.white,11);label(String(v2),W*.75,y,color2,13);
    if(unit)label(unit,W*.53,y+11,C.cyan,9,'left');
  }
  function box(x,y,w,h,name,value,color=C.green){
    ctx.save();ctx.strokeStyle=C.grey;ctx.lineWidth=1;ctx.strokeRect(x-w/2,y-h/2,w,h);ctx.restore();label(name,x,y-h*.28,C.white,10);label(value,x,y+h*.18,color,11);
  }

  function draw(){
    W=Math.max(300,canvas.clientWidth||560);H=Math.round(W*.96);scale=Math.max(.80,Math.min(1.12,W/560));
    const dpr=Math.min(2,window.devicePixelRatio||1);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);canvas.style.height=H+'px';ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle=C.bg;ctx.fillRect(0,0,W,H);

    const eng1={epr:1.020,egt:440,n1:23,n2:60,ff:310};
    const e2color=fault?C.red:running?C.green:isStarting()?C.green:C.grey;
    label('ENGINE / WARNING DISPLAY',W*.50,H*.035,C.white,12);line(W*.08,H*.06,W*.92,H*.06,C.grey,1);
    const limitMode=running?'CL':isStarting()?'START':'---';label(limitMode,W*.47,H*.095,running?C.green:C.white,13,'right');label(running?'1.600':'---',W*.53,H*.095,C.cyan,13,'left');
    gauge(W*.25,H*.215,W*.105,eng1.epr,1,1.8,'EPR',3,1.8);gauge(W*.75,H*.215,W*.105,values.epr,1,1.8,'EPR',3,1.8);
    if(running)label('AVAIL',W*.75,H*.31,C.green,11);else if(fault)label('START FAULT',W*.75,H*.31,C.red,11);else if(isStarting())label('IGN '+(ignition||'--'),W*.75,H*.31,ignition?C.green:C.amber,11);else label('ENG 2',W*.75,H*.31,C.grey,11);
    valuePair('EGT',Math.round(eng1.egt),Math.round(values.egt),H*.365,values.egt>635?C.red:e2color,'°C');
    valuePair('N1',eng1.n1.toFixed(1),values.n1.toFixed(1),H*.415,values.n1>100?C.red:e2color,'%');
    valuePair('N2',eng1.n2.toFixed(1),values.n2.toFixed(1),H*.465,values.n2>100?C.red:e2color,'%');
    valuePair('FF',eng1.ff,Math.round(values.ff),H*.515,e2color,'KG/H');
    line(W*.06,H*.56,W*.94,H*.56,C.grey,1);
    label('ENG SD — START CONFIGURATION',W*.50,H*.59,C.white,11);

    const valveColor=startValveOpen?C.green:components.startValve?C.grey:C.amber;
    const fuelColor=hpFuelOpen?C.green:components.hpFuel?C.grey:C.amber;
    const fadecText=!fadecAvailable()?'FAULT':components.fadecA&&components.fadecB?'A / B':'SINGLE';
    box(W*.16,H*.68,W*.23,H*.10,'START VALVE',startValveOpen?'OPEN':'CLOSED',valveColor);
    box(W*.43,H*.68,W*.23,H*.10,'HP FUEL',hpFuelOpen?'OPEN':'CLOSED',fuelColor);
    box(W*.70,H*.68,W*.23,H*.10,'FADEC',fadecText,!fadecAvailable()?C.red:components.fadecA&&components.fadecB?C.green:C.amber);
    box(W*.88,H*.68,W*.14,H*.10,'PACKS',packsClosed?'CLOSED':'OPEN',packsClosed?C.cyan:C.green);
    box(W*.16,H*.81,W*.23,H*.10,'IGNITION',ignition||'OFF',ignition?C.green:availableIgniters().length?C.grey:C.amber);
    box(W*.43,H*.81,W*.23,H*.10,'OIL PRESS',Math.round(values.oilP)+' PSI',values.oilP&&values.oilP<60?C.amber:components.oil?C.green:C.red);
    box(W*.70,H*.81,W*.23,H*.10,'BLEED PRESS',Math.round(values.bleed)+' PSI',values.bleed?C.green:C.grey);
    box(W*.88,H*.81,W*.14,H*.10,'MODE',mode==='start'?'IGN':mode.toUpperCase(),mode==='norm'?C.green:C.cyan);
    line(W*.06,H*.89,W*.94,H*.89,C.grey,1);
    label(dryCrank?'DRY CRANK':manualStart?'MANUAL START':fault?'ECAM: ENG 2 START FAULT':running?'ENGINE 2 AVAILABLE':'PROVISIONAL IAE TRAINING MODEL',W*.50,H*.925,fault?C.red:dryCrank?C.cyan:running?C.green:C.amber,11);
    label('VALUES DURING SEQUENCE ARE REPRESENTATIVE; LIMIT MARKERS FOLLOW SUPPLIED APPENDIX',W*.50,H*.965,C.grey,8);
    canvas.setAttribute('aria-label','IAE V2500 engine training display. Engine 2 N2 '+values.n2.toFixed(0)+' percent, EGT '+Math.round(values.egt)+' degrees Celsius. '+(fault?'Start fault '+fault+'.':running?'Engine available.':'Engine start in progress or stopped.'));
  }

  scenarioButtons.forEach(button=>button.addEventListener('click',()=>chooseScenario(button.dataset.scenario)));
  modeButtons.forEach(button=>button.addEventListener('click',()=>selectMode(button.dataset.mode)));
  masterButtons.forEach(button=>button.addEventListener('click',()=>selectMaster(button.dataset.master==='on')));
  manualButton.addEventListener('click',toggleManual);stepButton.addEventListener('click',nextStep);autoButton.addEventListener('click',toggleAuto);resetButton.addEventListener('click',()=>resetEngine(true));
  if('ResizeObserver' in window)new ResizeObserver(draw).observe(canvas.parentElement);else window.addEventListener('resize',draw);
  renderComponents();resetEngine(true);
})();

