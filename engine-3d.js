(function(){
  'use strict';

  const canvas=document.getElementById('engine3d');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  const partsEl=document.getElementById('modelParts');
  const nameEl=document.getElementById('modelPartName');
  const purposeEl=document.getElementById('modelPartPurpose');
  const operationEl=document.getElementById('modelPartOperation');
  const statusEl=document.getElementById('model3dStatus');
  const systemLink=document.getElementById('modelSystemLink');
  const cutawayButton=document.getElementById('cutawayToggle');
  const flowButton=document.getElementById('flowToggle');
  const flowKey=document.getElementById('modelFlowKey');
  const factsEl=document.getElementById('modelPartFacts');
  const resetButton=document.getElementById('modelReset');

  const TAU=Math.PI*2;
  const PARTS={
    nacelle:{label:'NACELLE & CASES',short:'NACELLE',system:'architecture',center:[-1.0,1.8,0],
      purpose:'The nacelle forms the aerodynamic outer body while internal cases support and contain the fan, compressors, combustor and turbines.',
      operation:'CUTAWAY removes a section of the cases to expose the gas path. The cases shown are a simplified study representation, not a maintenance model.',facts:['BYPASS DUCT','ENGINE CASES','PART 1 · SLIDE 55']},
    intake:{label:'INLET LIP & DIFFUSING INTAKE',short:'INLET',system:'architecture',center:[-4.48,1.45,.45],
      purpose:'The intake captures and decelerates ambient air before it reaches the fan, helping deliver smooth subsonic flow to the compressor.',
      operation:'Inlet distortion, turbulence, icing or foreign-object damage can reduce compressor stability margin. P2 is sensed in the inlet region for EPR control.',facts:['CAPTURE + DIFFUSE','P2 SENSING','PART 1 · SLIDE 22']},
    fan:{label:'FAN & LP ROTOR',short:'FAN / N1',system:'architecture',center:[-3.7,.85,.55],
      purpose:'The fan and low-pressure compressor are driven by the five-stage LP turbine through the LP shaft. Fan speed is displayed as N1.',
      operation:'Most fan air bypasses the core and produces most of the thrust. Maximum N1 in the supplied IAE FCOM training insert is 100% (LIM-ENG p.1/4, A/C 20-IMHT, 13 AUG 2018; FOR ENGINEERING USE ONLY).',facts:['LP SPOOL','N1 % RPM','HIGH BYPASS']},
    lpc:{label:'LOW-PRESSURE COMPRESSOR',short:'LP COMP',system:'architecture',center:[-2.35,.65,.38],
      purpose:'The LP compressor includes the fan and four compressor stages before the airflow divides into bypass and core streams.',
      operation:'The 2.5 bleed valve improves stall margin during starting, low power and transients. Its fail-safe position is open.',facts:['FAN + 4 STAGES','LP SHAFT','PART 1 · SLIDE 57']},
    stability:{label:'VARIABLE STATORS & STABILITY BLEEDS',short:'VSV / BLEEDS',system:'stability',center:[-1.45,1.12,.48],
      purpose:'Variable stator vanes match compressor airflow to rotor speed while the 2.5, 7th and 10th-stage bleed valves unload compressor stages when extra stall margin is required.',
      operation:'FADEC schedules these devices during starting, low power and transients. The three bleed valves fail open; open bleeds preserve stability with a performance cost.',facts:['2.5 / 7 / 10 BLEEDS','VSV SCHEDULE','FAIL-SAFE OPEN']},
    hpc:{label:'HIGH-PRESSURE COMPRESSOR',short:'HP COMP',system:'architecture',center:[-.45,.55,.35],
      purpose:'Ten HP-compressor stages raise core-air pressure before combustion. The HP compressor is connected to the two-stage HP turbine.',
      operation:'FADEC schedules variable stator vanes and bleed valves for stability. The HP-rotor speed is N2; the supplied maximum is 100%.',facts:['10 STAGES','HP SPOOL','N2 % RPM']},
    diffuser:{label:'COMPRESSOR DIFFUSER',short:'DIFFUSER',system:'architecture',center:[.72,.68,.42],
      purpose:'A divergent diffuser reduces compressor-discharge velocity and raises static pressure before the air enters the combustion chamber.',
      operation:'The presentations describe compressor-discharge air slowing from roughly 500 ft/s toward the much lower flame-zone velocity needed for stable combustion.',facts:['DIVERGENT DUCT','VELOCITY ↓','PRESSURE ↑']},
    combustor:{label:'ANNULAR COMBUSTION CHAMBER',short:'COMBUSTOR',system:'air',center:[1.25,.42,.42],
      purpose:'Fuel from 20 injectors mixes with HP-compressor air and burns in the annular chamber. Two igniters provide ignition.',
      operation:'The primary zone anchors the flame; dilution air produces a more uniform turbine-inlet temperature. Use the current ECAM and FCOM for start limits.',facts:['ANNULAR','PRIMARY + DILUTION','PART 1 · SLIDES 34-41']},
    injectors:{label:'20 FUEL INJECTORS',short:'20 INJECTORS',system:'fuel',center:[1.00,.72,.45],
      purpose:'Twenty injectors atomise metered high-pressure fuel around the annular combustor for even delivery to the flame zone.',
      operation:'Fuel flow is measured upstream and commanded by FADEC through the FMU. Loss of delivery prevents light-up or interrupts established combustion.',facts:['20 NOZZLES','FMU METERED','ANNULAR DELIVERY']},
    igniters:{label:'TWO IGNITER PLUGS',short:'2 IGNITERS',system:'air',center:[1.35,1.00,.70],
      purpose:'Two independent igniters provide the electrical energy that lights the fuel-air mixture during start and when commanded in flight.',
      operation:'Automatic start normally uses one igniter; manual start uses both. FADEC removes normal start ignition above 43% N2.',facts:['IGNITER A + B','AUTO: ONE','MANUAL: BOTH']},
    ngv:{label:'TURBINE NOZZLE GUIDE VANES',short:'TURBINE NGV',system:'architecture',center:[2.02,.64,.45],
      purpose:'Stationary nozzle guide vanes accelerate and turn the hot gas so it strikes each turbine rotor at the required angle.',
      operation:'An NGV and following turbine wheel form a turbine stage. The vanes convert pressure energy into directed kinetic energy before the rotor.',facts:['STATOR ROW','PRESSURE → VELOCITY','PART 1 · SLIDE 45']},
    hpt:{label:'HIGH-PRESSURE TURBINE',short:'HP TURB',system:'architecture',center:[2.25,.55,.38],
      purpose:'Two HP-turbine stages extract combustion-gas energy to drive the HP compressor and accessory gearbox path.',
      operation:'FADEC monitors N2 and protects against overspeed by controlling fuel flow through the FMU.',facts:['2 STAGES','DRIVES HP SPOOL','HOT SECTION']},
    cooling:{label:'TURBINE BLADE COOLING',short:'TURB COOLING',system:'air',center:[2.42,.92,.55],
      purpose:'Relatively cool compressor bleed air passes through turbine vanes and blades, then exits through small film-cooling holes.',
      operation:'Cooling lets hot-section hardware survive gas temperatures above its uncooled material limit. FADEC also schedules turbine-clearance control.',facts:['COMPRESSOR BLEED','FILM COOLING','CLEARANCE CONTROL']},
    lpt:{label:'LOW-PRESSURE TURBINE',short:'LP TURB',system:'architecture',center:[3.35,.7,.4],
      purpose:'Five LP-turbine stages extract the remaining core-gas energy to drive the fan and LP compressor.',
      operation:'P5 at the LP-turbine exhaust is used with inlet pressure P2 for normal EPR thrust control.',facts:['5 STAGES','DRIVES LP SPOOL','P5 DOWNSTREAM']},
    shafts:{label:'CONCENTRIC SHAFTS',short:'SHAFTS',system:'architecture',center:[.3,.05,.25],
      purpose:'Concentric LP and HP shafts allow the fan/LP spool and HP spool to rotate at their own speeds.',
      operation:'Splitting the compressor into independently rotating spools helps match rear-compressor speed to airflow and improves stall margin.',facts:['TWIN SPOOL','N1 + N2','PART 2 · SLIDE 17']},
    bearings:{label:'SHAFT BEARINGS & SUMPS',short:'BEARINGS',system:'oil',center:[-.08,.18,.12],
      purpose:'Bearings support the concentric rotors while oil jets lubricate and cool the bearing compartments; seals contain the oil and air systems.',
      operation:'The pressure system feeds the bearings and scavenge elements return used oil to the tank. Binding bearings can contribute to a hung start.',facts:['PRESSURE FEED','SCAVENGE RETURN','VIBRATION SOURCE']},
    gearbox:{label:'ACCESSORY GEARBOX',short:'GEARBOX',system:'architecture',center:[-.7,-1.3,.35],
      purpose:'The HP-shaft-driven gearbox operates the oil feed pump, main fuel pump, hydraulic pump, generator and FADEC alternator, and interfaces with the starter.',
      operation:'Engine 1 drives the green hydraulic pump and Engine 2 the yellow hydraulic pump. Each engine-driven generator is a primary electrical source.',facts:['HP SHAFT DRIVE','MULTIPLE ACCESSORIES','PART 1 · SLIDE 58']},
    accessories:{label:'GEARBOX-DRIVEN ACCESSORIES',short:'ACCESSORIES',system:'architecture',center:[-.45,-1.72,.48],
      purpose:'Separate accessory pads drive the oil feed pump, main fuel pump, hydraulic pump, electrical generator and FADEC magnetic alternator.',
      operation:'Each accessory uses HP-spool mechanical power through the gearbox. A failed accessory affects its own fuel, oil, hydraulic, electrical or FADEC supply path.',facts:['OIL PUMP','FUEL PUMP','HYD + GEN + ALT']},
    starter:{label:'AIR-TURBINE STARTER & CLUTCH',short:'STARTER',system:'air',center:[-1.30,-1.75,.54],
      purpose:'Pneumatic air accelerates a small turbine; reduction gearing and a clutch transmit high-torque rotation through the gearbox to the HP spool.',
      operation:'The clutch disengages when the engine becomes self-sustaining. Failure to disengage can overspeed and damage the starter.',facts:['PNEUMATIC','REDUCTION GEAR','CLUTCH']},
    fadec:{label:'FADEC / EEC',short:'FADEC',system:'fadec',center:[-2.55,-1.55,.65],
      purpose:'The two-channel Full Authority Digital Engine Control manages thrust, fuel, air, starting, indications, protection and thrust-reverser control.',
      operation:'One channel is active and one standby. A single channel can control the complete engine; the other automatically takes over after a channel failure.',facts:['CHANNEL A + B','EPR NORMAL','N1 REVERSION']},
    sensors:{label:'ENGINE SENSORS & EGT HARNESS',short:'SENSORS',system:'instrumentation',center:[3.95,.98,.62],
      purpose:'Pressure, speed, temperature, fuel-flow, oil and vibration sensors convert engine condition into electrical signals for FADEC, the EIU and ECAM.',
      operation:'The EGT thermocouples are arranged around the jet-pipe region. N1/N2 speed pickups and vibration sensors monitor both spools and the turbine region.',facts:['P2 / P5','N1 / N2 / EGT','VIB + OIL + FF']},
    reverser:{label:'TRANSLATING SLEEVE & CASCADES',short:'REVERSER',system:'reverser',center:[2.95,1.50,.48],
      purpose:'The translating sleeve exposes cascades and positions blocker doors so fan bypass air is redirected forward during ground reverse.',
      operation:'FADEC monitors sleeve position and lock feedback and protects against inadvertent deployment or stowage by reducing thrust toward idle.',facts:['BYPASS FLOW ONLY','HYDRAULIC ACTUATION','GROUND USE']},
    exhaust:{label:'EXHAUST & P5',short:'EXHAUST',system:'fadec',center:[4.45,.35,.25],
      purpose:'Core gas leaves the LP turbine through the exhaust. P5 is the LP-turbine exhaust pressure used in EPR = P5 / P2.',
      operation:'Exhaust struts support the rear bearing area and straighten gas flow toward the nozzle. Loss of valid P2 and/or P5 causes rated N1 reversion.',facts:['P5 SENSING','FLOW STRAIGHTENING','EPR = P5 / P2']}
  };

  let faces=[];
  let selected='fan';
  let cutaway=true;
  let airflow=true;
  let yaw=-0.20;
  let pitch=-0.08;
  let zoom=1;
  let width=900;
  let height=510;
  let renderedFaces=[];
  let renderPending=false;
  const pointers=new Map();
  let dragDistance=0;
  let pinchDistance=0;

  function clamp(value,min,max){return Math.max(min,Math.min(max,value))}
  function vertex(x,y,z){return [x,y,z]}
  function polar(x,r,a){return [x,r*Math.cos(a),r*Math.sin(a)]}

  function addFace(verts,color,component,opacity=1,stroke='',pickable=true){
    faces.push({verts,color,component,opacity,stroke,pickable});
  }

  function addCylinder(component,x1,x2,r1,r2,color,options={}){
    const segments=options.segments||28;
    const start=options.start===undefined?0:options.start;
    const end=options.end===undefined?TAU:options.end;
    const span=end-start;
    for(let i=0;i<segments;i++){
      const a=start+span*i/segments,b=start+span*(i+1)/segments;
      addFace([polar(x1,r1,a),polar(x2,r2,a),polar(x2,r2,b),polar(x1,r1,b)],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'',options.pickable!==false);
    }
    if(options.caps){
      const c1=vertex(x1,0,0),c2=vertex(x2,0,0);
      for(let i=0;i<segments;i++){
        const a=start+span*i/segments,b=start+span*(i+1)/segments;
        addFace([c1,polar(x1,r1,b),polar(x1,r1,a)],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'',options.pickable!==false);
        addFace([c2,polar(x2,r2,a),polar(x2,r2,b)],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'',options.pickable!==false);
      }
    }
  }

  function addShell(component,profile,thickness,color,options={}){
    const segments=options.segments||30;
    const start=options.start===undefined?0:options.start;
    const end=options.end===undefined?TAU:options.end;
    const span=end-start;
    const opacity=options.opacity===undefined?1:options.opacity;
    for(let p=0;p<profile.length-1;p++){
      const a0=profile[p],a1=profile[p+1];
      for(let i=0;i<segments;i++){
        const a=start+span*i/segments,b=start+span*(i+1)/segments;
        addFace([polar(a0[0],a0[1],a),polar(a1[0],a1[1],a),polar(a1[0],a1[1],b),polar(a0[0],a0[1],b)],color,component,opacity,options.stroke||'#5d6b63');
        addFace([polar(a0[0],Math.max(.02,a0[1]-thickness),b),polar(a1[0],Math.max(.02,a1[1]-thickness),b),polar(a1[0],Math.max(.02,a1[1]-thickness),a),polar(a0[0],Math.max(.02,a0[1]-thickness),a)],options.innerColor||'#303a34',component,opacity,'');
      }
      if(span<TAU-.01){
        addFace([polar(a0[0],a0[1],start),polar(a1[0],a1[1],start),polar(a1[0],a1[1]-thickness,start),polar(a0[0],a0[1]-thickness,start)],options.edgeColor||'#c5ccc8',component,opacity,'#e8ede9');
        addFace([polar(a0[0],a0[1]-thickness,end),polar(a1[0],a1[1]-thickness,end),polar(a1[0],a1[1],end),polar(a0[0],a0[1],end)],options.edgeColor||'#c5ccc8',component,opacity,'#e8ede9');
      }
    }
  }

  function addRing(component,x,rInner,rOuter,widthValue,color,options={}){
    const segments=options.segments||28;
    const start=options.start===undefined?0:options.start;
    const end=options.end===undefined?TAU:options.end;
    const span=end-start;
    const x1=x-widthValue/2,x2=x+widthValue/2;
    for(let i=0;i<segments;i++){
      const a=start+span*i/segments,b=start+span*(i+1)/segments;
      addFace([polar(x1,rOuter,a),polar(x2,rOuter,a),polar(x2,rOuter,b),polar(x1,rOuter,b)],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'');
      addFace([polar(x1,rInner,b),polar(x2,rInner,b),polar(x2,rInner,a),polar(x1,rInner,a)],options.innerColor||color,component,options.opacity===undefined?1:options.opacity,'');
      addFace([polar(x2,rInner,a),polar(x2,rInner,b),polar(x2,rOuter,b),polar(x2,rOuter,a)],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'');
    }
  }

  function addBlades(component,x,rInner,rOuter,count,color,options={}){
    const chord=options.chord||.26;
    const sweep=options.sweep||0;
    const twist=options.twist||.10;
    const thickness=options.thickness||.035;
    for(let i=0;i<count;i++){
      const a=TAU*i/count+(options.offset||0);
      const innerA=a-thickness;
      const outerA=a+twist-thickness*.55;
      const v1=polar(x-chord/2,rInner,innerA);
      const v2=polar(x+chord/2,rInner,a+thickness);
      const v3=polar(x+chord/2+sweep,rOuter,outerA+thickness);
      const v4=polar(x-chord/2+sweep,rOuter,outerA-thickness);
      addFace([v1,v2,v3,v4],color,component,options.opacity===undefined?1:options.opacity,options.stroke||'#111814');
      const back=[vertex(v1[0]-.025,v1[1],v1[2]),vertex(v4[0]-.025,v4[1],v4[2]),vertex(v3[0]-.025,v3[1],v3[2]),vertex(v2[0]-.025,v2[1],v2[2])];
      addFace(back,options.backColor||'#4f5954',component,options.opacity===undefined?1:options.opacity,'');
    }
  }

  function addBox(component,cx,cy,cz,sx,sy,sz,color,options={}){
    const x0=cx-sx/2,x1=cx+sx/2,y0=cy-sy/2,y1=cy+sy/2,z0=cz-sz/2,z1=cz+sz/2;
    const v={a:[x0,y0,z0],b:[x1,y0,z0],c:[x1,y1,z0],d:[x0,y1,z0],e:[x0,y0,z1],f:[x1,y0,z1],g:[x1,y1,z1],h:[x0,y1,z1]};
    [[v.a,v.b,v.c,v.d],[v.e,v.h,v.g,v.f],[v.a,v.e,v.f,v.b],[v.d,v.c,v.g,v.h],[v.b,v.f,v.g,v.c],[v.a,v.d,v.h,v.e]].forEach(faceVerts=>addFace(faceVerts,color,component,options.opacity===undefined?1:options.opacity,options.stroke||'#aab3ae'));
  }

  function buildModel(){
    faces=[];
    const shellStart=cutaway?2.28:0;
    const shellEnd=cutaway?6.18:TAU;
    const shellSegments=cutaway?24:32;

    addCylinder('shafts',-3.95,4.55,.17,.15,'#89938e',{segments:24,caps:true,stroke:'#c9cfcc'});
    addCylinder('shafts',-1.55,2.62,.31,.27,'#535e58',{segments:24,caps:true,stroke:'#a9b2ad'});
    [-3.28,-1.62,2.62,4.02].forEach((x,index)=>addRing('bearings',x,.14,index===1||index===2?.42:.31,.16,'#8b9b92',{innerColor:'#303a35',stroke:'#d3ddd6'}));

    addShell('intake',[[-4.78,2.30],[-4.50,2.60],[-4.18,2.58]],.16,'#8b9690',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#26312b',edgeColor:'#edf1ee',stroke:'#d6ddd9'});
    addRing('intake',-4.48,2.31,2.62,.12,'#8d9892',{stroke:'#e5ebe7'});

    addCylinder('fan',-4.75,-3.87,.02,.55,'#cbd2ce',{segments:30,caps:true,stroke:'#f2f5f3'});
    addCylinder('fan',-3.90,-3.48,.56,.58,'#68736d',{segments:28,caps:true,stroke:'#c9d0cc'});
    addBlades('fan',-3.66,.56,2.28,24,'#b8c0bc',{chord:.55,sweep:.24,twist:.18,thickness:.045,backColor:'#616b66'});
    addRing('fan',-3.48,.55,2.32,.10,'#59645e',{stroke:'#c9cfcc'});

    const lpcRows=[-2.95,-2.62,-2.30,-1.98];
    lpcRows.forEach((x,index)=>{
      const outer=1.42-index*.08;
      addBlades('lpc',x,.50,outer,20,'#8f9994',{chord:.25,sweep:.07,twist:index%2?.08:-.06,thickness:.045,offset:index*.08});
      addRing('lpc',x+.13,.47,outer+.04,.06,index%2?'#545f59':'#737e78');
    });

    for(let i=0;i<10;i++){
      const x=-1.48+i*.23;
      const outer=1.12-i*.035;
      const inner=.38+i*.018;
      addBlades('hpc',x,inner,outer,18,'#aeb6b2',{chord:.16,sweep:.025,twist:i%2?.10:-.08,thickness:.05,offset:i*.09,backColor:'#5d6762'});
      if(i%2===1)addRing('hpc',x+.08,inner-.03,outer+.035,.045,'#525d57');
    }

    addBlades('stability',-1.54,.35,1.12,18,'#5a9e83',{chord:.10,twist:-.14,thickness:.045,stroke:'#8fe0b7'});
    addRing('stability',-1.67,.90,1.22,.12,'#426c58',{stroke:'#76c99d'});
    addBox('stability',-2.10,1.38,.46,.34,.22,.28,'#376f55',{stroke:'#66d08e'});
    addBox('stability',-.48,1.23,.48,.34,.20,.26,'#376f55',{stroke:'#66d08e'});
    addBox('stability',.25,1.10,.45,.30,.18,.24,'#376f55',{stroke:'#66d08e'});

    addShell('diffuser',[[.66,1.02],[.92,.90],[1.08,.86]],.14,'#68766e',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#2f3c35',edgeColor:'#bac8bf',stroke:'#9fada4'});

    addShell('combustor',[[.92,.90],[1.25,.98],[1.92,.83]],.25,'#9a7040',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#4b2c1a',edgeColor:'#d5b078',stroke:'#d2b080'});
    addCylinder('combustor',1.05,1.83,.53,.47,'#ff9c42',{segments:26,start:2.35,end:6.12,opacity:.42,stroke:'#ffcf7a',pickable:false});
    for(let i=0;i<20;i++){
      const a=TAU*i/20;
      const y=.73*Math.cos(a),z=.73*Math.sin(a);
      addBox('injectors',.98,y,z,.18,.10,.10,'#b48952',{stroke:'#e0c292'});
    }
    addBox('igniters',1.30,.82,.80,.26,.14,.18,'#d9d7bd',{stroke:'#fff7c7'});
    addBox('igniters',1.48,-.04,.95,.26,.14,.18,'#d9d7bd',{stroke:'#fff7c7'});

    addBlades('ngv',1.96,.33,.92,22,'#c4aa75',{chord:.13,sweep:-.02,twist:.16,thickness:.052,stroke:'#f1d59a'});
    addRing('ngv',2.00,.30,.96,.055,'#695f4f',{stroke:'#cdbb92'});

    [2.13,2.46].forEach((x,index)=>{
      addBlades('hpt',x,.31,.91,18,index?'#81796d':'#a69c8d',{chord:.20,sweep:-.04,twist:index?.14:-.10,thickness:.06,offset:index*.13,stroke:'#d4c6ad'});
      addRing('hpt',x+.10,.28,.96,.055,'#4b504c');
    });
    addRing('cooling',2.18,.88,1.01,.07,'#3c7180',{stroke:'#62d7f0'});
    addRing('cooling',2.50,.90,1.03,.07,'#3c7180',{stroke:'#62d7f0'});

    for(let i=0;i<5;i++){
      const x=2.72+i*.34;
      const outer=.94+i*.055;
      addBlades('lpt',x,.24,outer,18,i%2?'#737a76':'#929a96',{chord:.23,sweep:-.03,twist:i%2?.14:-.10,thickness:.055,offset:i*.14,stroke:'#c6ceca'});
      addRing('lpt',x+.12,.21,outer+.04,.055,'#464f4a');
    }

    addShell('exhaust',[[4.05,1.13],[4.48,1.02],[4.88,.77]],.12,'#6e7873',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#272e2a',edgeColor:'#bcc5c0',stroke:'#aeb8b2'});
    addRing('exhaust',4.77,.52,.78,.10,'#414a45',{stroke:'#bbc4bf'});
    addRing('sensors',4.10,.97,1.17,.075,'#315b64',{stroke:'#45d7ec'});
    addBox('sensors',-3.35,.66,.76,.20,.15,.16,'#183e46',{stroke:'#45d7ec'});
    addBox('sensors',-.72,.51,.67,.20,.15,.16,'#183e46',{stroke:'#45d7ec'});

    addShell('nacelle',[[-4.48,2.58],[-3.98,2.66],[-3.15,2.48],[-2.20,2.30],[-1.10,2.20],[.40,2.08],[1.85,1.92],[3.30,1.63],[4.18,1.36]],.13,'#77827c',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#26302a',edgeColor:'#d9dfdb',stroke:'#aeb9b2'});
    addShell('nacelle',[[-3.35,1.55],[-2.20,1.43],[-1.05,1.24],[.30,1.12],[1.85,1.03],[3.25,1.14],[4.12,1.17]],.09,'#4f5a54',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#202722',edgeColor:'#aeb8b2',stroke:'#77827c'});
    addShell('reverser',[[1.82,1.93],[2.35,1.82],[3.28,1.64]],.08,'#4f685b',{start:shellStart,end:shellEnd,segments:shellSegments,innerColor:'#24312a',edgeColor:'#89aa96',stroke:'#75a087'});
    [2.04,2.26,2.48,2.70,2.92].forEach(x=>addRing('reverser',x,1.66,1.84,.05,'#385947',{start:shellStart,end:shellEnd,stroke:'#6db589'}));

    addBox('gearbox',-.72,-1.34,.18,1.38,.72,.70,'#58625d',{stroke:'#b2bbb6'});
    addCylinder('gearbox',-1.35,-.12,.22,.22,'#747e79',{segments:18,caps:true,stroke:'#bdc5c1'});
    addBox('accessories',-.25,-1.72,.15,.48,.42,.48,'#404a45',{stroke:'#919b95'});
    addBox('accessories',.32,-1.54,.14,.42,.36,.42,'#46514b',{stroke:'#919b95'});
    addBox('accessories',-.72,-1.88,.18,.44,.34,.42,'#46514b',{stroke:'#919b95'});
    addBox('starter',-1.27,-1.74,.20,.50,.40,.46,'#48524d',{stroke:'#b8c2bc'});
    addCylinder('starter',-1.66,-1.13,.18,.18,'#5d6962',{segments:18,caps:true,stroke:'#c6d0ca'});
    addBox('fadec',-2.52,-1.64,.78,1.20,.56,.25,'#313a35',{stroke:'#62c879'});
    addBox('fadec',-2.52,-1.64,.93,.86,.28,.08,'#14291b',{stroke:'#42e56c'});
  }

  function rotatePoint(point){
    const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
    const x=point[0]*cy+point[2]*sy;
    const z1=-point[0]*sy+point[2]*cy;
    const y=point[1]*cp-z1*sp;
    const z=point[1]*sp+z1*cp;
    return [x,y,z];
  }

  function projectPoint(point){
    const rotated=rotatePoint(point);
    const camera=14;
    const focal=Math.min(width,height)*1.42*zoom;
    const depth=Math.max(3,camera-rotated[2]);
    return {x:width*.50+rotated[0]*focal/depth,y:height*.52-rotated[1]*focal/depth,z:rotated[2],world:rotated};
  }

  function cross(a,b,c){
    const u=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],v=[c[0]-a[0],c[1]-a[1],c[2]-a[2]];
    return [u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
  }

  function normalise(v){const length=Math.hypot(v[0],v[1],v[2])||1;return [v[0]/length,v[1]/length,v[2]/length]}
  function parseHex(hex){const value=hex.replace('#','');return [parseInt(value.slice(0,2),16),parseInt(value.slice(2,4),16),parseInt(value.slice(4,6),16)]}
  function rgbString(rgb,alpha=1){return 'rgba('+rgb.map(v=>Math.round(clamp(v,0,255))).join(',')+','+alpha+')'}
  function mix(a,b,amount){return a.map((value,index)=>value*(1-amount)+b[index]*amount)}

  function pointInPolygon(x,y,points){
    let inside=false;
    for(let i=0,j=points.length-1;i<points.length;j=i++){
      const xi=points[i].x,yi=points[i].y,xj=points[j].x,yj=points[j].y;
      const hit=((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi||1e-6)+xi);
      if(hit)inside=!inside;
    }
    return inside;
  }

  function resize(){
    const rect=canvas.getBoundingClientRect();
    width=Math.max(320,Math.round(rect.width||760));
    height=Math.max(280,Math.round(rect.height||width*.5625));
    const dpr=Math.min(1.6,window.devicePixelRatio||1);
    const pixelWidth=Math.round(width*dpr),pixelHeight=Math.round(height*dpr);
    if(canvas.width!==pixelWidth||canvas.height!==pixelHeight){canvas.width=pixelWidth;canvas.height=pixelHeight}
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }

  function drawBackground(){
    const glow=ctx.createRadialGradient(width*.52,height*.43,10,width*.52,height*.43,width*.58);
    glow.addColorStop(0,'#17241c');glow.addColorStop(.44,'#080e0a');glow.addColorStop(1,'#000000');
    ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    ctx.strokeStyle='rgba(66,229,108,.06)';ctx.lineWidth=1;
    for(let x=0;x<width;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,height);ctx.stroke()}
    for(let y=0;y<height;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(width,y);ctx.stroke()}
  }

  function drawFlowPath(points,color,label){
    const projected=points.map(projectPoint);
    ctx.save();ctx.strokeStyle=color;ctx.fillStyle=color;ctx.lineWidth=2.2;ctx.setLineDash([8,6]);ctx.globalAlpha=.88;
    ctx.beginPath();ctx.moveTo(projected[0].x,projected[0].y);for(let i=1;i<projected.length;i++)ctx.lineTo(projected[i].x,projected[i].y);ctx.stroke();ctx.setLineDash([]);
    const last=projected[projected.length-1],before=projected[projected.length-2];const angle=Math.atan2(last.y-before.y,last.x-before.x);
    ctx.beginPath();ctx.moveTo(last.x,last.y);ctx.lineTo(last.x-10*Math.cos(angle-.45),last.y-10*Math.sin(angle-.45));ctx.lineTo(last.x-10*Math.cos(angle+.45),last.y-10*Math.sin(angle+.45));ctx.closePath();ctx.fill();
    const middle=projected[Math.floor(projected.length/2)];ctx.font='9px ui-monospace, Menlo, Consolas, monospace';ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText(label,middle.x,middle.y-5);ctx.restore();
  }

  function drawFlowOverlay(){
    if(!airflow)return;
    drawFlowPath([[-4.72,1.38,.38],[-3.72,1.62,.42],[-2.10,1.53,.43],[-.30,1.42,.42],[1.55,1.30,.38],[3.15,1.10,.30],[4.36,.84,.22]],'#45d7ec','BYPASS AIR');
    drawFlowPath([[-4.72,.34,.50],[-3.55,.35,.50],[-2.20,.34,.48],[-.70,.32,.46],[.80,.31,.44],[1.08,.31,.42]],'#42e56c','CORE AIR');
    drawFlowPath([[1.18,.31,.42],[1.72,.31,.40],[2.45,.32,.38],[3.35,.31,.34],[4.25,.29,.28],[4.78,.25,.20]],'#ffb327','HOT GAS');
  }

  function drawCallout(){
    const part=PARTS[selected];if(!part)return;
    const point=projectPoint(part.center);
    const boxRight=point.x<width*.62;
    const endX=boxRight?Math.min(width-150,point.x+92):Math.max(150,point.x-92);
    const endY=Math.max(64,point.y-48);
    ctx.strokeStyle='#45d7ec';ctx.fillStyle='#45d7ec';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.arc(point.x,point.y,5,0,TAU);ctx.stroke();
    ctx.beginPath();ctx.moveTo(point.x,point.y);ctx.lineTo(endX,endY);ctx.lineTo(endX+(boxRight?42:-42),endY);ctx.stroke();
    ctx.font='11px ui-monospace, Menlo, Consolas, monospace';ctx.textAlign=boxRight?'left':'right';ctx.textBaseline='bottom';
    ctx.fillText(part.short,endX+(boxRight?4:-4),endY-4);
  }

  function render(){
    if(!ctx)return;
    resize();drawBackground();renderedFaces=[];
    const light=normalise([-.25,.72,.82]);
    const transformed=faces.map(item=>{
      const projected=item.verts.map(projectPoint);
      const world=projected.map(p=>p.world);
      const depth=projected.reduce((sum,p)=>sum+p.z,0)/projected.length;
      const n=normalise(cross(world[0],world[1],world[2]));
      const lightValue=.24+.76*Math.abs(n[0]*light[0]+n[1]*light[1]+n[2]*light[2]);
      return {item,projected,depth,lightValue};
    }).sort((a,b)=>a.depth-b.depth);

    transformed.forEach(entry=>{
      const {item,projected,lightValue}=entry;
      const base=parseHex(item.color);
      const selectedTint=item.component===selected?mix(base,parseHex('#45d7ec'),.46):base;
      const lit=selectedTint.map(value=>value*lightValue+10);
      ctx.beginPath();ctx.moveTo(projected[0].x,projected[0].y);
      for(let i=1;i<projected.length;i++)ctx.lineTo(projected[i].x,projected[i].y);
      ctx.closePath();ctx.fillStyle=rgbString(lit,item.opacity);ctx.fill();
      if(item.stroke||item.component===selected){
        const strokeBase=item.component===selected?parseHex('#7cecff'):parseHex(item.stroke||'#111814');
        ctx.strokeStyle=rgbString(strokeBase,Math.min(1,item.opacity+.18));ctx.lineWidth=item.component===selected?1.25:.55;ctx.stroke();
      }
      if(item.pickable&&item.component)renderedFaces.push({points:projected,component:item.component,depth:entry.depth});
    });
    drawFlowOverlay();drawCallout();
  }

  function scheduleRender(){
    if(renderPending)return;
    renderPending=true;
    const run=()=>{renderPending=false;render()};
    if(window.requestAnimationFrame)window.requestAnimationFrame(run);else run();
  }

  function renderPartButtons(){
    partsEl.replaceChildren();
    Object.entries(PARTS).forEach(([id,part])=>{
      const button=document.createElement('button');button.type='button';button.className='model-part';button.dataset.modelPart=id;
      button.setAttribute('aria-pressed',String(id===selected));button.textContent=part.short;button.addEventListener('click',()=>selectPart(id));partsEl.appendChild(button);
    });
  }

  function selectPart(id){
    if(!PARTS[id])return;
    selected=id;const part=PARTS[id];
    nameEl.textContent=part.label;purposeEl.textContent=part.purpose;operationEl.textContent=part.operation;statusEl.textContent=part.short;
    if(factsEl){factsEl.replaceChildren();(part.facts||[]).forEach(fact=>{const chip=document.createElement('span');chip.textContent=fact;factsEl.appendChild(chip)})}
    systemLink.dataset.system=part.system;systemLink.textContent='OPEN '+part.system.toUpperCase()+' SYSTEM VIEW';
    renderPartButtons();render();
  }

  function resetView(){yaw=-.20;pitch=-.08;zoom=1;render()}

  function pick(clientX,clientY){
    const rect=canvas.getBoundingClientRect();const x=clientX-rect.left,y=clientY-rect.top;
    for(let i=renderedFaces.length-1;i>=0;i--){
      const face=renderedFaces[i];if(pointInPolygon(x,y,face.points)){selectPart(face.component);return}
    }
    let nearest='',distance=58;
    Object.entries(PARTS).forEach(([id,part])=>{const point=projectPoint(part.center),d=Math.hypot(point.x-x,point.y-y);if(d<distance){distance=d;nearest=id}});
    if(nearest)selectPart(nearest);
  }

  function pointerDown(event){
    canvas.setPointerCapture&&canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId,{x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY});
    dragDistance=0;canvas.classList.add('dragging');
    if(pointers.size===2){const values=[...pointers.values()];pinchDistance=Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y)}
  }

  function pointerMove(event){
    const point=pointers.get(event.pointerId);if(!point)return;
    const oldX=point.x,oldY=point.y;point.x=event.clientX;point.y=event.clientY;
    if(pointers.size===1){
      const dx=point.x-oldX,dy=point.y-oldY;dragDistance+=Math.hypot(dx,dy);yaw+=dx*.008;pitch=clamp(pitch+dy*.007,-.65,.55);scheduleRender();
    }else if(pointers.size===2){
      const values=[...pointers.values()];const next=Math.hypot(values[0].x-values[1].x,values[0].y-values[1].y);
      if(pinchDistance>0)zoom=clamp(zoom*(next/pinchDistance),.72,1.65);pinchDistance=next;dragDistance+=2;scheduleRender();
    }
  }

  function pointerUp(event){
    const point=pointers.get(event.pointerId);pointers.delete(event.pointerId);
    if(!pointers.size){canvas.classList.remove('dragging');pinchDistance=0;if(point&&dragDistance<7)pick(event.clientX,event.clientY)}
  }

  canvas.addEventListener('pointerdown',pointerDown);
  canvas.addEventListener('pointermove',pointerMove);
  canvas.addEventListener('pointerup',pointerUp);
  canvas.addEventListener('pointercancel',pointerUp);
  canvas.addEventListener('wheel',event=>{event.preventDefault();zoom=clamp(zoom*Math.exp(-event.deltaY*.0012),.72,1.65);scheduleRender()},{passive:false});
  cutawayButton.addEventListener('click',()=>{cutaway=!cutaway;cutawayButton.setAttribute('aria-pressed',String(cutaway));cutawayButton.textContent=cutaway?'CUTAWAY':'COMPLETE';buildModel();render()});
  if(flowButton)flowButton.addEventListener('click',()=>{airflow=!airflow;flowButton.setAttribute('aria-pressed',String(airflow));flowButton.textContent=airflow?'AIRFLOW':'AIRFLOW OFF';if(flowKey)flowKey.hidden=!airflow;render()});
  resetButton.addEventListener('click',resetView);
  systemLink.addEventListener('click',()=>{
    const system=PARTS[selected].system;
    if(window.V2500Trainer&&window.V2500Trainer.selectSystem)window.V2500Trainer.selectSystem(system);
    const target=document.getElementById('systemTabs');if(target&&target.scrollIntoView)target.scrollIntoView({behavior:'smooth',block:'start'});
  });
  if('ResizeObserver' in window)new ResizeObserver(scheduleRender).observe(canvas);else window.addEventListener('resize',scheduleRender);

  window.V25003D={selectPart,getState:()=>({part:selected,cutaway,airflow,yaw,pitch,zoom}),setCutaway:value=>{cutaway=!!value;cutawayButton.setAttribute('aria-pressed',String(cutaway));buildModel();render()},setAirflow:value=>{airflow=!!value;if(flowButton){flowButton.setAttribute('aria-pressed',String(airflow));flowButton.textContent=airflow?'AIRFLOW':'AIRFLOW OFF'}if(flowKey)flowKey.hidden=!airflow;render()},reset:resetView,getParts:()=>Object.keys(PARTS)};
  buildModel();selectPart('fan');
})();

