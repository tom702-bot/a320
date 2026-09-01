(function(root){
"use strict";

const CONTROL_DEFS = [
  {id:"scan_overhead",mount:"oh-scan",label:"OVERHEAD PANEL",kind:"check",face:"SCAN COMPLETE"},
  {id:"fuel_pump_l1",mount:"oh-fuel",label:"L TK 1",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"fuel_pump_l2",mount:"oh-fuel",label:"L TK 2",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"fuel_pump_ctr1",mount:"oh-fuel",label:"CTR TK 1",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"fuel_pump_ctr2",mount:"oh-fuel",label:"CTR TK 2",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"fuel_pump_r1",mount:"oh-fuel",label:"R TK 1",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"fuel_pump_r2",mount:"oh-fuel",label:"R TK 2",kind:"pb",states:["OFF","ON"],initial:"ON",compact:true},
  {id:"yellow_pump",mount:"oh-hyd",label:"Y ELEC PUMP",kind:"pb",states:["OFF","ON"],initial:"ON"},
  {id:"pack_1",mount:"oh-air",label:"PACK 1",kind:"pb",states:["OFF","ON"],initial:"ON"},
  {id:"pack_2",mount:"oh-air",label:"PACK 2",kind:"pb",states:["OFF","ON"],initial:"ON"},
  {id:"apu_bleed",mount:"oh-air",label:"APU BLEED",kind:"pb",states:["OFF","ON"],initial:"ON"},
  {id:"anti_ice",mount:"oh-ice",label:"ANTI ICE PANEL",kind:"selector",states:["OFF","ON"],initial:"OFF"},
  {id:"beacon",mount:"oh-lights",label:"BEACON",kind:"selector",states:["OFF","ON"],initial:"OFF"},
  {id:"land_lights",mount:"oh-lights",label:"LAND L/R",kind:"selector",states:["OFF","ON"],initial:"OFF"},
  {id:"exterior_lights",mount:"oh-lights",label:"EXTERIOR LIGHTS",kind:"selector",states:["SET","OFF"],initial:"OFF",wide:true},
  {id:"seat_belts",mount:"oh-signs",label:"SEAT BELTS",kind:"selector",states:["OFF","ON"],initial:"ON"},
  {id:"cabin_crew",mount:"oh-signs",label:"CABIN CREW",kind:"check",face:"ADVISE"},
  {id:"apu_master",mount:"oh-apu",label:"APU MASTER SW",kind:"pb",states:["OFF","ON"],initial:"ON"},

  {id:"terr_cm1",mount:"glare-cm1",label:"TERR ON ND",kind:"pb",states:["OFF","ON"],initial:"OFF"},
  {id:"ls_cm1",mount:"glare-cm1",label:"LS",kind:"pb",states:["OFF","ON"],initial:"OFF",compact:true},
  {id:"efis_options_cm1",mount:"glare-cm1",label:"EFIS OPTIONS",kind:"selector",states:["CLR","CSTR","WPT","VOR.D","NDB","ARPT"],initial:"CLR",wide:true},
  {id:"scan_glareshield_cm1",mount:"glare-cm1",label:"CM1 GLARESHIELD",kind:"check",face:"SCAN COMPLETE",wide:true},
  {id:"terr_cm2",mount:"glare-cm2",label:"TERR ON ND",kind:"pb",states:["OFF","ON"],initial:"OFF"},
  {id:"ls_cm2",mount:"glare-cm2",label:"LS",kind:"pb",states:["OFF","ON"],initial:"OFF",compact:true},
  {id:"efis_options_cm2",mount:"glare-cm2",label:"EFIS OPTIONS",kind:"selector",states:["CLR","CSTR","WPT","VOR.D","NDB","ARPT"],initial:"CLR",wide:true},
  {id:"scan_glareshield_cm2",mount:"glare-cm2",label:"CM2 GLARESHIELD",kind:"check",face:"SCAN COMPLETE",wide:true},

  {id:"scan_center_instrument",mount:"main-center",label:"CENTRE INSTRUMENT PANEL",kind:"check",face:"SCAN COMPLETE",wide:true},
  {id:"ecam_status",mount:"main-center",label:"ECAM STATUS",kind:"check",face:"CHECK"},
  {id:"nw_strg_memo",mount:"main-center",label:"NW STRG DISC MEMO",kind:"check",face:"NOT DISPLAYED",wide:true},
  {id:"ecam_memo",mount:"main-center",label:"ECAM MEMO",kind:"check",face:"REVIEW"},
  {id:"to_memo",mount:"main-center",label:"T.O MEMO",kind:"check",face:"NO BLUE"},
  {id:"to_config",mount:"main-center",label:"T.O CONFIG",kind:"check",face:"TEST"},
  {id:"fuel_quantity",mount:"main-center",label:"FUEL QUANTITY",kind:"check",face:"CHECK"},
  {id:"auto_brake_max",mount:"main-gear",label:"AUTO BRK MAX",kind:"pb",states:["OFF","ON"],initial:"OFF"},
  {id:"gear_check",mount:"main-gear",label:"L/G INDICATION",kind:"check",face:"CHECK UP"},
  {id:"accu_press",mount:"main-gear",label:"ACCU PRESS",kind:"check",face:"CHECK"},

  {id:"fmgs_prepare",mount:"ped-mcdu",label:"FMGS PREPARATION",kind:"check",face:"COMPLETE",wide:true},
  {id:"navaids_climb",mount:"ped-mcdu",label:"NAVAIDS / SEC-PLAN / OPT FL / REC MAX FL",kind:"check",face:"CHECK",wide:true},
  {id:"navaids_descent",mount:"ped-mcdu",label:"NAVAIDS / NAV ACCURACY",kind:"check",face:"MONITOR",wide:true},
  {id:"irs_performance",mount:"ped-mcdu",label:"IRS PERFORMANCE",kind:"check",face:"CHECK",wide:true},
  {id:"atc_operational",mount:"ped-atc",label:"ATC",kind:"check",face:"SET FOR OPS"},
  {id:"squawk",mount:"ped-atc",label:"SQUAWK",kind:"check",face:"CONFIRM / SET"},
  {id:"tcas_atc",mount:"ped-atc",label:"TCAS / ATC",kind:"selector",states:["STBY","TA","TA/RA"],initial:"STBY",wide:true},
  {id:"radar_pws",mount:"ped-atc",label:"RADAR / PWS",kind:"selector",states:["OFF","AUTO"],initial:"OFF"},
  {id:"scan_pedestal",mount:"ped-throttle",label:"PEDESTAL",kind:"check",face:"SCAN COMPLETE",wide:true},
  {id:"spoilers",mount:"ped-throttle",label:"GND SPLRS",kind:"lever",states:["DISARMED","ARMED"],initial:"DISARMED"},
  {id:"thrust_levers",mount:"ped-throttle",label:"THRUST LEVERS",kind:"lever",states:["IDLE","CL","FLX/MCT","TOGA"],initial:"IDLE",wide:true},
  {id:"flaps",mount:"ped-throttle",label:"FLAPS",kind:"lever",states:["0","1+F","2","3","FULL"],initial:"0",wide:true},
  {id:"pitch_trim",mount:"ped-throttle",label:"PITCH TRIM",kind:"check",face:"SET"},
  {id:"rudder_neutral",mount:"ped-throttle",label:"RUDDER",kind:"check",face:"CHECK NEUTRAL"},
  {id:"eng_mode",mount:"ped-engine",label:"ENG MODE",kind:"selector",states:["CRANK","NORM","IGN/START"],initial:"NORM",wide:true},
  {id:"eng_master_1",mount:"ped-engine",label:"ENG 1 MASTER",kind:"lever",states:["OFF","ON"],initial:"ON"},
  {id:"eng_master_2",mount:"ped-engine",label:"ENG 2 MASTER",kind:"lever",states:["OFF","ON"],initial:"ON"},
  {id:"park_brake",mount:"ped-engine",label:"PARK BRK",kind:"selector",states:["OFF","ON"],initial:"OFF"},

  {id:"windows_cm1",mount:"checks-left",label:"CM1 WINDOW",kind:"selector",states:["OPEN","CLOSED"],initial:"CLOSED"},
  {id:"windows_cm2",mount:"checks-right",label:"CM2 WINDOW",kind:"selector",states:["OPEN","CLOSED"],initial:"CLOSED"},
  {id:"scan_lateral_cm1",mount:"checks-left",label:"CM1 LATERAL CONSOLE / PANEL",kind:"check",face:"SCAN COMPLETE",wide:true},
  {id:"scan_lateral_cm2",mount:"checks-right",label:"CM2 LATERAL CONSOLE / PANEL",kind:"check",face:"SCAN COMPLETE",wide:true},
  {id:"doors_slides",mount:"checks-center",label:"DOORS / SLIDES",kind:"selector",states:["ARMED","DISARMED"],initial:"ARMED",wide:true},
  {id:"takeoff_runway",mount:"checks-view",label:"TAKEOFF RUNWAY",kind:"check",face:"CONFIRM"},
  {id:"approach_path",mount:"checks-view",label:"APPROACH PATH",kind:"check",face:"CLEAR OF TRAFFIC",wide:true}
];

const DEF_BY_ID = Object.fromEntries(CONTROL_DEFS.map(function(def){return [def.id,def];}));

function step(label,target,panel,controls,accept,options){
  return Object.assign({label:label,target:target,panel:panel,controls:Array.isArray(controls)?controls:[controls],accept:accept||["CHECK"]},options||{});
}

const FLOW_PHASES = [
  {
    id:"cockpit-preparation",title:"Cockpit Preparation",short:"COCKPIT PREP",
    note:"This card uses PF / CM1 / CM2 labels rather than PF / PM. The trainer retains that allocation exactly.",
    roles:{
      PF:[
        step("Overhead Panel","SCAN","overhead","scan_overhead"),
        step("Centre Instrument Panel","SCAN","flightdeck","scan_center_instrument"),
        step("Pedestal","SCAN","pedestal","scan_pedestal"),
        step("FMGS preparation","COMPLETE","pedestal","fmgs_prepare")
      ],
      CM1:[
        step("Glareshield","SCAN","flightdeck","scan_glareshield_cm1"),
        step("Lateral consoles and CM1 panel","SCAN","checks","scan_lateral_cm1")
      ],
      CM2:[
        step("Glareshield","SCAN","flightdeck","scan_glareshield_cm2"),
        step("Lateral consoles and CM2 panel","SCAN","checks","scan_lateral_cm2")
      ]
    }
  },
  {
    id:"before-start",title:"Before Start",short:"BEFORE START",
    initial:{beacon:"OFF",park_brake:"OFF",tcas_atc:"STBY",doors_slides:"ARMED"},
    roles:{
      PF:[
        step("BEACON sw","ON","overhead","beacon",["ON"]),
        step("WINDOWS","CHECK CLOSED","checks","windows_{seat}",["CLOSED"]),
        step("DOORS / SLIDES","CHECK CLOSED / ARMED","checks","doors_slides",["ARMED"]),
        step("THRUST LEVERS","IDLE","pedestal","thrust_levers",["IDLE"]),
        step("PARK BRK handle","ON","pedestal","park_brake",["ON"])
      ],
      PM:[
        step("ATC","SET FOR OPERATIONS","pedestal","atc_operational"),
        step("WINDOWS","CHECK CLOSED","checks","windows_{seat}",["CLOSED"]),
        step("DOORS / SLIDES","CHECK CLOSED / ARMED","checks","doors_slides",["ARMED"])
      ]
    }
  },
  {
    id:"after-start",title:"After Start",short:"AFTER START",
    initial:{eng_mode:"IGN/START",apu_bleed:"ON",apu_master:"ON",spoilers:"DISARMED",flaps:"0"},
    roles:{
      PF:[
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("APU BLEED pb-sw","OFF","overhead","apu_bleed",["OFF"]),
        step("ANTI ICE","AS RQRD","overhead","anti_ice",null,{any:true}),
        step("APU MASTER SW","OFF","overhead","apu_master",["OFF"]),
        step("ECAM STATUS","CHECK","flightdeck","ecam_status"),
        step("NW STRG DISC MEMO","CHECK NOT DISPLAYED","flightdeck","nw_strg_memo")
      ],
      PM:[
        step("GND SPLRS","ARM","pedestal","spoilers",["ARMED"]),
        step("RUD","CHECK NEUTRAL","pedestal","rudder_neutral"),
        step("FLAPS","SET","pedestal","flaps",["1+F","2","3"],{conditional:true}),
        step("PITCH TRIM","SET","pedestal","pitch_trim"),
        step("ECAM STATUS","CHECK","flightdeck","ecam_status")
      ]
    }
  },
  {
    id:"taxi",title:"Taxi",short:"TAXI",
    initial:{auto_brake_max:"OFF",radar_pws:"OFF",eng_mode:"NORM",terr_cm1:"OFF",terr_cm2:"OFF"},
    roles:{
      PF:[
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true})
      ],
      PM:[
        step("AUTO BRK MAX","ON","flightdeck","auto_brake_max",["ON"]),
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true}),
        step("SQUAWK","CONFIRM / SET","pedestal","squawk"),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true}),
        step("RADAR / PWS","ON / AUTO","pedestal","radar_pws",["AUTO"]),
        step("T.O CONFIG pb","TEST","flightdeck","to_config"),
        step("T.O MEMO","CHECK NO BLUE","flightdeck","to_memo")
      ]
    }
  },
  {
    id:"line-up",title:"Line-up",short:"LINE-UP",
    initial:{tcas_atc:"STBY",exterior_lights:"OFF",pack_1:"ON",pack_2:"ON"},
    roles:{
      PF:[
        step("TAKEOFF RUNWAY","CONFIRM","checks","takeoff_runway"),
        step("APPROACH PATH","CLEAR OF TRAFFIC","checks","approach_path"),
        step("EXTERIOR LIGHTS","SET","overhead","exterior_lights",["SET"],{conditional:true})
      ],
      PM:[
        step("TCAS mode selector","TA ONLY or TA/RA","pedestal","tcas_atc",["TA","TA/RA"]),
        step("TAKEOFF RUNWAY","CONFIRM","checks","takeoff_runway"),
        step("APPROACH PATH","CLEAR OF TRAFFIC","checks","approach_path"),
        step("PACKS 1 AND 2","AS RQRD","overhead",["pack_1","pack_2"],null,{any:true}),
        step("CABIN CREW","ADVISE","overhead","cabin_crew")
      ]
    }
  },
  {
    id:"climb-acceleration",title:"Climb / Acceleration",short:"CLIMB-ACCEL",
    note:"The supplied flow card assigns this flow to PM only.",
    initial:{flaps:"1+F",spoilers:"ARMED",exterior_lights:"SET"},
    roles:{
      PM:[
        step("FLAPS ZERO","SELECT","pedestal","flaps",["0"]),
        step("GND SPLRS","DISARM","pedestal","spoilers",["DISARMED"]),
        step("L/G","CHECK UP","flightdeck","gear_check"),
        step("EXTERIOR LIGHTS","SET","overhead","exterior_lights",["SET"],{conditional:true})
      ]
    }
  },
  {
    id:"ten-thousand-climb",title:"10,000 ft - Climb",short:"10,000 CLIMB",
    initial:{land_lights:"ON",seat_belts:"ON",efis_options_cm1:"CLR",efis_options_cm2:"CLR"},
    roles:{
      PF:[
        step("EFIS OPTIONS","AS RQRD","flightdeck","efis_options_{seat}",null,{any:true})
      ],
      PM:[
        step("LAND sw","OFF","overhead","land_lights",["OFF"]),
        step("SEAT BELT sw","AS RQRD","overhead","seat_belts",null,{any:true}),
        step("EFIS OPTIONS","AS RQRD","flightdeck","efis_options_{seat}",null,{any:true}),
        step("ECAM MEMO","REVIEW","flightdeck","ecam_memo"),
        step("NAVAIDS / SEC-PLAN / OPT FL / REC MAX FL","CHECK","pedestal","navaids_climb")
      ]
    }
  },
  {
    id:"ten-thousand-descent",title:"10,000 ft - Descent",short:"10,000 DESCENT",
    initial:{land_lights:"OFF",seat_belts:"OFF",ls_cm1:"OFF",ls_cm2:"OFF",efis_options_cm1:"CLR",efis_options_cm2:"CLR"},
    roles:{
      PF:[
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true}),
        step("EFIS option pb","CSTR","flightdeck","efis_options_{seat}",["CSTR"]),
        step("NAVAIDS / NAV ACCURACY","AS RQRD / MONITOR","pedestal","navaids_descent")
      ],
      PM:[
        step("LAND sw","ON","overhead","land_lights",["ON"]),
        step("SEAT BELTS","ON","overhead","seat_belts",["ON"]),
        step("EFIS option pb","CSTR","flightdeck","efis_options_{seat}",["CSTR"]),
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true}),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true})
      ]
    }
  },
  {
    id:"after-landing",title:"After Landing",short:"AFTER LANDING",
    initial:{spoilers:"ARMED",exterior_lights:"SET",radar_pws:"AUTO",eng_mode:"IGN/START",flaps:"1+F",tcas_atc:"TA/RA",apu_master:"OFF"},
    roles:{
      PF:[
        step("GND SPLRS","DISARM","pedestal","spoilers",["DISARMED"]),
        step("EXTERIOR LIGHTS","SET","overhead","exterior_lights",["SET"],{conditional:true})
      ],
      PM:[
        step("RADAR / PWS","OFF","pedestal","radar_pws",["OFF"]),
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("FLAPS","RETRACT","pedestal","flaps",["0"]),
        step("TCAS / ATC","STBY / AS RQRD","pedestal","tcas_atc",null,{any:true}),
        step("APU","AS RQRD","overhead","apu_master",null,{any:true}),
        step("ANTI ICE","AS RQRD","overhead","anti_ice",null,{any:true})
      ]
    }
  },
  {
    id:"parking",title:"Parking",short:"PARKING",
    initial:{park_brake:"OFF",yellow_pump:"ON",eng_master_1:"ON",eng_master_2:"ON",exterior_lights:"SET",doors_slides:"ARMED",seat_belts:"ON",anti_ice:"ON",apu_bleed:"ON",tcas_atc:"TA/RA"},
    roles:{
      PF:[
        step("ACCU PRESS","CHECK","flightdeck","accu_press"),
        step("PARK BRAKE handle","ON","pedestal","park_brake",["ON"]),
        step("YELLOW ELEC PUMP","OFF","overhead","yellow_pump",["OFF"]),
        step("ALL ENG MASTER LEVERS","OFF","pedestal",["eng_master_1","eng_master_2"],["OFF"]),
        step("EXTERIOR LIGHTS","OFF","overhead","exterior_lights",["OFF"]),
        step("SLIDES","CHECK DISARMED","checks","doors_slides",["DISARMED"]),
        step("SEAT BELTS sw","OFF","overhead","seat_belts",["OFF"])
      ],
      PM:[
        step("ANTI ICE","OFF","overhead","anti_ice",["OFF"]),
        step("APU BLEED pb-sw","AS RQRD","overhead","apu_bleed",null,{any:true}),
        step("FUEL PUMPS","OFF","overhead",["fuel_pump_l1","fuel_pump_l2","fuel_pump_ctr1","fuel_pump_ctr2","fuel_pump_r1","fuel_pump_r2"],["OFF"]),
        step("ATC","STBY","pedestal","tcas_atc",["STBY"]),
        step("IRS PERFORMANCE","CHECK","pedestal","irs_performance"),
        step("FUEL QUANTITY","CHECK","flightdeck","fuel_quantity")
      ]
    }
  }
];

const PHASE_BY_ID = Object.fromEntries(FLOW_PHASES.map(function(phase){return [phase.id,phase];}));

function seatSuffix(seat){return String(seat||"CM1").toLowerCase();}
function resolveControlId(id,seat){return id.replace("{seat}",seatSuffix(seat));}
function resolveStep(source,seat){
  return Object.assign({},source,{controls:source.controls.map(function(id){return resolveControlId(id,seat);})});
}
function getResolvedSteps(phaseId,role,seat){
  const phase=PHASE_BY_ID[phaseId];
  if(!phase||!phase.roles[role]) return [];
  return phase.roles[role].map(function(item){return resolveStep(item,seat);});
}
function accepts(stepDef,value){
  if(stepDef.any) return true;
  return (stepDef.accept||["CHECK"]).indexOf(value)!==-1;
}
function createRun(phaseId,role,seat){
  const steps=getResolvedSteps(phaseId,role,seat);
  if(!steps.length) throw new Error("No flow actions for this phase and role");
  return {phaseId:phaseId,role:role,seat:seat||"CM1",steps:steps,index:0,doneControls:new Set(),correct:0,incorrect:0,outOfOrder:0,hints:0,reveals:0,history:[],complete:false};
}
function findStepWithControl(run,controlId,start,end){
  for(let i=start;i<end;i++) if(run.steps[i].controls.indexOf(controlId)!==-1) return i;
  return -1;
}
function gradeInput(run,controlId,value){
  if(run.complete){
    return {grade:"incorrect",message:"Flow already complete.",stepComplete:false,flowComplete:true};
  }
  const current=run.steps[run.index];
  let grade="incorrect",message="Control is not part of the selected role flow.",stepComplete=false;
  if(current.controls.indexOf(controlId)!==-1){
    if(run.doneControls.has(controlId)){
      grade="out-of-order"; message="That part of the current action is already complete.";
    }else if(accepts(current,value)){
      grade="correct"; run.doneControls.add(controlId); run.correct++;
      if(run.doneControls.size===current.controls.length){
        stepComplete=true; run.index++; run.doneControls=new Set();
        if(run.index>=run.steps.length) run.complete=true;
      }
      message=stepComplete?"Correct - action complete.":"Correct - continue the grouped action.";
    }else{
      grade="incorrect"; message="Correct control, incorrect position.";
    }
  }else{
    const future=findStepWithControl(run,controlId,run.index+1,run.steps.length);
    const past=findStepWithControl(run,controlId,0,run.index);
    if(future!==-1){grade="out-of-order";message="This control belongs later in the flow.";}
    else if(past!==-1){grade="out-of-order";message="This action has already been completed.";}
  }
  if(grade==="incorrect") run.incorrect++;
  if(grade==="out-of-order") run.outOfOrder++;
  const event={grade:grade,controlId:controlId,value:value,stepIndex:run.index,message:message,stepComplete:stepComplete,flowComplete:run.complete};
  run.history.push(event);
  return event;
}

function expectedInputs(run){return run.steps.reduce(function(sum,item){return sum+item.controls.length;},0);}

function initBrowser(){
  const $=function(id){return document.getElementById(id);};
  if(!$('phaseGrid')) return;
  let selectedPhase=FLOW_PHASES[1].id;
  let selectedRole="PF";
  let selectedSeat="CM1";
  let selectedMode="assessment";
  let activeRun=null;
  let revealed=false;
  const controlState={};
  const BEST_KEY="a320flows_v1";

  function loadBest(){try{return JSON.parse(localStorage.getItem(BEST_KEY))||{};}catch(e){return {};}}
  function saveBest(data){try{localStorage.setItem(BEST_KEY,JSON.stringify(data));}catch(e){}}

  function button(label,className){const el=document.createElement("button");el.type="button";el.textContent=label;el.className=className||"";return el;}

  function renderPhases(){
    const host=$("phaseGrid");host.innerHTML="";
    FLOW_PHASES.forEach(function(phase,index){
      const b=button("","phase-card");
      b.dataset.phase=phase.id;b.setAttribute("aria-pressed",String(phase.id===selectedPhase));
      const roleLine=Object.keys(phase.roles).map(function(role){return role+" "+phase.roles[role].length;}).join(" / ");
      b.innerHTML='<span class="phase-num">'+String(index+1).padStart(2,"0")+'</span><strong>'+phase.short+'</strong><span>'+roleLine+'</span>';
      b.onclick=function(){selectedPhase=phase.id;const roles=Object.keys(phase.roles);if(roles.indexOf(selectedRole)===-1)selectedRole=roles[0];renderPhases();renderRoles();renderBrief();};
      host.appendChild(b);
    });
  }
  function renderRoles(){
    const host=$("roleButtons");host.innerHTML="";
    const phase=PHASE_BY_ID[selectedPhase];
    Object.keys(phase.roles).forEach(function(role){
      const b=button(role+" · "+phase.roles[role].length+" actions","segment");
      b.setAttribute("aria-pressed",String(role===selectedRole));
      b.onclick=function(){selectedRole=role;renderRoles();renderBrief();};host.appendChild(b);
    });
    $("seatSelect").hidden=(selectedRole==="CM1"||selectedRole==="CM2");
  }
  function renderBrief(){
    const phase=PHASE_BY_ID[selectedPhase];
    const actions=phase.roles[selectedRole]||[];
    $("phaseBrief").innerHTML='<strong>'+phase.title+' · '+selectedRole+'</strong><span>'+actions.length+' source actions'+(phase.note?' · '+phase.note:'')+'</span>';
  }
  function wireSegments(id,onChange){
    $(id).querySelectorAll("button").forEach(function(b){b.onclick=function(){onChange(b.dataset.value);$(id).querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});};});
  }

  function renderControl(def){
    const wrap=document.createElement("div");
    wrap.className="cockpit-control kind-"+def.kind+(def.compact?" compact":"")+(def.wide?" wide":"");
    wrap.dataset.control=def.id;
    const lab=document.createElement("div");lab.className="control-label";lab.textContent=def.label;wrap.appendChild(lab);
    if(def.kind==="check"){
      const b=button(def.face||"CHECK","check-face");
      b.setAttribute("aria-label",def.label+" - "+(def.face||"check"));
      b.onclick=function(){interact(def.id,"CHECK",wrap);};wrap.appendChild(b);
    }else if(def.kind==="pb"){
      const b=button(def.label,"pb-face");
      b.setAttribute("aria-label",def.label+" pushbutton");
      b.onclick=function(){
        const next=controlState[def.id]===def.states[0]?def.states[1]:def.states[0];
        setState(def.id,next);interact(def.id,next,wrap);
      };
      const state=button("","state-readout");state.dataset.stateFor=def.id;state.setAttribute("aria-label","Confirm "+def.label+" current position");
      state.onclick=function(){interact(def.id,controlState[def.id],wrap);};wrap.appendChild(b);wrap.appendChild(state);
    }else{
      const gate=document.createElement("div");gate.className=def.kind==="lever"?"lever-gate":"selector-gate";
      def.states.forEach(function(state){
        const b=button(state,"position");b.dataset.value=state;b.setAttribute("aria-label",def.label+" "+state);
        b.onclick=function(){setState(def.id,state);interact(def.id,state,wrap);};gate.appendChild(b);
      });wrap.appendChild(gate);
    }
    return wrap;
  }
  function renderCockpit(){
    CONTROL_DEFS.forEach(function(def){const mount=$(def.mount);if(mount)mount.appendChild(renderControl(def));});
    resetControlStates();
  }
  function setState(id,value){
    controlState[id]=value;
    const def=DEF_BY_ID[id];if(!def)return;
    const wrap=document.querySelector('.cockpit-control[data-control="'+id+'"]');if(!wrap)return;
    wrap.dataset.state=value;
    wrap.querySelectorAll(".position").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.value===value));});
    const readout=wrap.querySelector('[data-state-for="'+id+'"]');if(readout){readout.textContent=value;readout.classList.toggle("on",value!==def.states[0]);}
    const face=wrap.querySelector(".pb-face");if(face)face.classList.toggle("on",value!==def.states[0]);
  }
  function resetControlStates(){CONTROL_DEFS.forEach(function(def){if(def.states)setState(def.id,def.initial||def.states[0]);});}
  function applyInitial(phase){resetControlStates();Object.keys(phase.initial||{}).forEach(function(id){setState(id,phase.initial[id]);});}

  function clearControlGrades(){document.querySelectorAll(".cockpit-control[data-grade]").forEach(function(el){delete el.dataset.grade;});}
  function interact(id,value,wrap){
    if(!activeRun)return;
    clearControlGrades();
    const result=gradeInput(activeRun,id,value);wrap.dataset.grade=result.grade;
    const def=DEF_BY_ID[id];
    const title=result.grade==="correct"?"CORRECT":result.grade==="out-of-order"?"OUT OF ORDER":"INCORRECT";
    const detail=(def?def.label:id)+(value&&value!=="CHECK"?" · "+value:"");
    showFeedback(result.grade,title,detail+" - "+result.message);
    updateRunUI();
    if(result.flowComplete)finishRun();
  }
  function showFeedback(grade,title,text){
    const box=$("feedback");box.className="feedback "+grade;box.innerHTML='<strong>'+title+'</strong><span>'+text+'</span>';
  }
  function renderCue(){
    const cue=$("nextCue");
    if(!activeRun||activeRun.complete){cue.innerHTML='<span class="cue-kicker">FLOW STATUS</span><strong>COMPLETE</strong>';return;}
    const current=activeRun.steps[activeRun.index];
    if(selectedMode==="guided"||revealed){
      cue.innerHTML='<span class="cue-kicker">NEXT · '+current.panel.toUpperCase()+'</span><strong>'+current.label+'</strong><span>'+current.target+'</span>';
    }else{
      cue.innerHTML='<span class="cue-kicker">ASSESSMENT MODE</span><strong>RECALL ACTION '+(activeRun.index+1)+' OF '+activeRun.steps.length+'</strong><span>Use HINT only if needed.</span>';
    }
  }
  function updateRunUI(){
    if(!activeRun)return;
    $("stepValue").textContent=Math.min(activeRun.index+1,activeRun.steps.length)+"/"+activeRun.steps.length;
    $("correctValue").textContent=activeRun.correct;
    $("incorrectValue").textContent=activeRun.incorrect;
    $("orderValue").textContent=activeRun.outOfOrder;
    $("runProgress").style.width=Math.round(activeRun.index/activeRun.steps.length*100)+"%";
    renderCue();renderFlowList();
  }
  function renderFlowList(){
    const host=$("flowList");host.innerHTML="";
    if(!activeRun)return;
    activeRun.steps.forEach(function(item,index){
      const row=document.createElement("div");row.className="flow-row "+(index<activeRun.index?"done":index===activeRun.index?"current":"pending");
      row.innerHTML='<span>'+(index+1)+'</span><b>'+item.label+'</b><em>'+item.target+'</em>';host.appendChild(row);
    });
  }
  function selectPanel(name){
    document.querySelectorAll(".panel-tab").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.panel===name));});
    document.querySelectorAll(".panel-view").forEach(function(view){view.hidden=view.dataset.panel!==name;});
  }
  function startRun(){
    activeRun=createRun(selectedPhase,selectedRole,selectedSeat);revealed=selectedMode==="guided";
    applyInitial(PHASE_BY_ID[selectedPhase]);clearControlGrades();
    $("setup").hidden=true;$("trainer").hidden=false;$("completion").hidden=true;
    $("runTitle").textContent=PHASE_BY_ID[selectedPhase].title.toUpperCase();
    $("runMeta").textContent=selectedRole+" · "+((selectedRole==="CM1"||selectedRole==="CM2")?selectedRole:selectedSeat)+" · "+selectedMode.toUpperCase();
    $("flowDrawer").open=selectedMode==="guided";
    showFeedback("neutral","FLOW ARMED",activeRun.steps.length+" actions loaded from the supplied flow card.");
    selectPanel(activeRun.steps[0].panel);updateRunUI();window.scrollTo({top:0,behavior:"instant"});
  }
  function accuracy(run){const attempts=run.correct+run.incorrect+run.outOfOrder;return attempts?Math.round(run.correct/attempts*100):0;}
  function finishRun(){
    const pct=accuracy(activeRun);$("completion").hidden=false;
    $("completionScore").textContent=pct+"%";
    $("completionText").textContent=activeRun.correct+" correct control inputs · "+activeRun.incorrect+" incorrect · "+activeRun.outOfOrder+" out of order"+(activeRun.hints?" · "+activeRun.hints+" hints":"");
    const key=activeRun.phaseId+":"+activeRun.role+":"+activeRun.seat;const best=loadBest();
    if(!best[key]||pct>best[key]){best[key]=pct;saveBest(best);}
    showFeedback("correct","FLOW COMPLETE",PHASE_BY_ID[activeRun.phaseId].title+" · "+activeRun.role+" complete.");
    $("runProgress").style.width="100%";$("completion").scrollIntoView({behavior:"smooth",block:"center"});
  }
  function backToSetup(){
    activeRun=null;$("trainer").hidden=true;$("setup").hidden=false;renderBrief();window.scrollTo({top:0,behavior:"instant"});
  }

  renderPhases();renderRoles();renderBrief();renderCockpit();
  wireSegments("seatButtons",function(value){selectedSeat=value;});
  wireSegments("modeButtons",function(value){selectedMode=value;});
  $("beginFlow").onclick=startRun;
  $("changeFlow").onclick=backToSetup;
  $("resetFlow").onclick=startRun;
  $("retryFlow").onclick=startRun;
  $("chooseFlow").onclick=backToSetup;
  $("hintButton").onclick=function(){if(activeRun&&!activeRun.complete){activeRun.hints++;revealed=true;renderCue();setTimeout(function(){if(selectedMode==="assessment"){revealed=false;renderCue();}},5000);}};
  $("revealButton").onclick=function(){if(activeRun){activeRun.reveals++;$("flowDrawer").open=true;}};
  document.querySelectorAll(".panel-tab").forEach(function(b){b.onclick=function(){selectPanel(b.dataset.panel);};});
  selectPanel("overhead");
}

const api={FLOW_PHASES:FLOW_PHASES,CONTROL_DEFS:CONTROL_DEFS,createRun:createRun,gradeInput:gradeInput,getResolvedSteps:getResolvedSteps,expectedInputs:expectedInputs};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
if(root) root.A320FlowTrainer=api;
if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initBrowser);else initBrowser();}

})(typeof window!=="undefined"?window:globalThis);
