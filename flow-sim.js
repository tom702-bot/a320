(function(root){
"use strict";

const catalog=(root&&root.A320ControlCatalog)||(typeof require!=="undefined"?require("./a320-controls.js"):null);
if(!catalog) throw new Error("A320 control catalog not loaded");
const CONTROL_DEFS=catalog.CONTROL_DEFS;

const DEF_BY_ID = Object.fromEntries(CONTROL_DEFS.map(function(def){return [def.id,def];}));

function step(label,target,panel,controls,accept,options){
  return Object.assign({label:label,target:target,panel:panel,controls:Array.isArray(controls)?controls:[controls],accept:accept||["CHECK"]},options||{});
}

const ANTI_ICE_CONTROLS=["anti_ice_eng_1","anti_ice_wing","anti_ice_eng_2"];
const EXTERIOR_LIGHT_CONTROLS=["ext_strobe","beacon","ext_wing","ext_nav_logo","land_light_l","ext_nose","ext_rwy_turnoff","land_light_r"];
const EFIS_OPTION_TEMPLATES=["efis_cstr_{seat}","efis_wpt_{seat}","efis_vord_{seat}","efis_ndb_{seat}","efis_arpt_{seat}"];
const FMGS_PREP_TEMPLATES=["mcdu_{seat}_init","mcdu_{seat}_f_pln","mcdu_{seat}_rad_nav","mcdu_{seat}_perf"];

const FLOW_CONTEXTS = [
  {id:"standard-dry",label:"STANDARD · DRY",description:"No icing: engine/wing anti-ice OFF. Packs normal: both ON. Other conditional navigation, configuration and lighting decisions remain acknowledgements."},
  {id:"operator-conditions",label:"OPERATOR CONDITIONS",description:"Use the current briefing and SOP. Every AS RQRD item is recorded as a conditional acknowledgement."}
];
const CONTEXT_BY_ID=Object.fromEntries(FLOW_CONTEXTS.map(function(item){return [item.id,item];}));
const CONTEXT_RULES={
  "standard-dry":{
    "anti-ice":{target:"OFF · STANDARD DRY",accept:["OFF"]},
    "packs":{target:"ON · NORMAL PACK CONFIG",accept:["ON"]}
  }
};
const GROUND_POWER_PROFILES = {
  external:{id:"external",label:"EXT PWR",states:{elec_bat_1:"AUTO",elec_bat_2:"AUTO",elec_ext_pwr:"ON",elec_apu_gen:"AUTO",apu_master:"OFF",apu_bleed:"OFF",eng_master_1:"OFF",eng_master_2:"OFF"}},
  apu:{id:"apu",label:"APU PWR · ASSUMED AVAIL",states:{elec_bat_1:"AUTO",elec_bat_2:"AUTO",elec_ext_pwr:"OFF",elec_apu_gen:"AUTO",apu_master:"ON",apu_bleed:"ON",eng_master_1:"OFF",eng_master_2:"OFF"}}
};

const FLOW_PHASES = [
  {
    id:"cockpit-preparation",title:"Cockpit Preparation",short:"COCKPIT PREP",
    coldDark:true,
    note:"Fixed crew allocation applied: CM2/PF performs the PF and CM2 items; CM1/PM performs the CM1 items.",
    roles:{
      PF:[
        step("Overhead Panel","SCAN","overhead","scan_overhead"),
        step("Centre Instrument Panel","SCAN","flightdeck","scan_center_instrument"),
        step("Pedestal","SCAN","pedestal","scan_pedestal"),
        step("FMGS preparation","COMPLETE","pedestal",FMGS_PREP_TEMPLATES),
        step("Glareshield","SCAN","flightdeck","scan_glareshield_cm2"),
        step("Lateral consoles and CM2 panel","SCAN","checks","scan_lateral_cm2")
      ],
      PM:[
        step("Glareshield","SCAN","flightdeck","scan_glareshield_cm1"),
        step("Lateral consoles and CM1 panel","SCAN","checks","scan_lateral_cm1")
      ]
    }
  },
  {
    id:"before-start",title:"Before Start",short:"BEFORE START",
    initial:{beacon:"OFF",park_brake:"OFF",atc_mode:"STBY",doors_slides:"ARMED",eng_master_1:"OFF",eng_master_2:"OFF",elec_bat_1:"AUTO",elec_bat_2:"AUTO",elec_ext_pwr:"ON",elec_gen_1:"AUTO",elec_gen_2:"AUTO",elec_apu_gen:"AUTO",apu_master:"OFF",apu_bleed:"OFF"},
    roles:{
      PF:[
        step("BEACON sw","ON","overhead","beacon",["ON"]),
        step("WINDOWS","CHECK CLOSED","checks","windows_{seat}",["CLOSED"]),
        step("DOORS / SLIDES","CHECK CLOSED / ARMED","checks","doors_slides",["ARMED"]),
        step("THRUST LEVERS","IDLE","pedestal",["thrust_lever_1","thrust_lever_2"],["IDLE"]),
        step("PARK BRK handle","ON","pedestal","park_brake",["ON"])
      ],
      PM:[
        step("ATC","SET FOR OPERATIONS","pedestal","atc_mode",["AUTO","ON"]),
        step("WINDOWS","CHECK CLOSED","checks","windows_{seat}",["CLOSED"]),
        step("DOORS / SLIDES","CHECK CLOSED / ARMED","checks","doors_slides",["ARMED"])
      ]
    }
  },
  {
    id:"after-start",title:"After Start",short:"AFTER START",
    initial:{eng_mode:"IGN/START",apu_bleed:"ON",apu_master:"ON",spoilers:"DISARMED",flaps:"0",eng_master_1:"ON",eng_master_2:"ON",elec_ext_pwr:"OFF",elec_gen_1:"AUTO",elec_gen_2:"AUTO",elec_apu_gen:"AUTO"},
    roles:{
      PF:[
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("APU BLEED pb-sw","OFF","overhead","apu_bleed",["OFF"]),
        step("ANTI ICE","AS RQRD","overhead",ANTI_ICE_CONTROLS,null,{any:true,completeAny:true,conditional:true,contextRule:"anti-ice"}),
        step("APU MASTER SW","OFF","overhead","apu_master",["OFF"]),
        step("ECAM STATUS","CHECK","flightdeck","ecam_status"),
        step("NW STRG DISC MEMO","CHECK NOT DISPLAYED","flightdeck","nw_strg_memo")
      ],
      PM:[
        step("GND SPLRS","ARM","pedestal","spoilers",["ARMED"]),
        step("RUD","CHECK NEUTRAL","pedestal","rudder_neutral"),
        step("FLAPS","SET","pedestal","flaps",["1+F","2","3"],{conditional:true,contextRule:"takeoff-flaps"}),
        step("PITCH TRIM","SET","pedestal","pitch_trim"),
        step("ECAM STATUS","CHECK","flightdeck","ecam_status")
      ]
    }
  },
  {
    id:"taxi",title:"Taxi",short:"TAXI",
    initial:{auto_brake_max:"OFF",wx_radar_system:"OFF",wx_pws:"OFF",eng_mode:"NORM",terr_cm1:"OFF",terr_cm2:"OFF"},
    roles:{
      PF:[
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true,conditional:true})
      ],
      PM:[
        step("AUTO BRK MAX","ON","flightdeck","auto_brake_max",["ON"]),
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true,conditional:true}),
        step("SQUAWK","CONFIRM / SET","pedestal","squawk"),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true,conditional:true}),
        step("RADAR / PWS","ON / AUTO","pedestal",["wx_radar_system","wx_pws"],null,{acceptByControl:{wx_radar_system:["1","2"],wx_pws:["AUTO"]}}),
        step("T.O CONFIG pb","TEST","pedestal","to_config"),
        step("T.O MEMO","CHECK NO BLUE","flightdeck","to_memo")
      ]
    }
  },
  {
    id:"line-up",title:"Line-up",short:"LINE-UP",
    initial:{tcas_mode:"STBY",ext_strobe:"AUTO",beacon:"ON",ext_wing:"OFF",ext_nav_logo:"2",land_light_l:"OFF",ext_nose:"OFF",ext_rwy_turnoff:"OFF",land_light_r:"OFF",pack_1:"ON",pack_2:"ON"},
    roles:{
      PF:[
        step("TAKEOFF RUNWAY","CONFIRM","checks","takeoff_runway"),
        step("APPROACH PATH","CLEAR OF TRAFFIC","checks","approach_path"),
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true,contextRule:"exterior-lights"})
      ],
      PM:[
        step("TCAS mode selector","TA ONLY or TA/RA","pedestal","tcas_mode",["TA","TA/RA"]),
        step("TAKEOFF RUNWAY","CONFIRM","checks","takeoff_runway"),
        step("APPROACH PATH","CLEAR OF TRAFFIC","checks","approach_path"),
        step("PACKS 1 AND 2","AS RQRD","overhead",["pack_1","pack_2"],null,{any:true,conditional:true,contextRule:"packs"}),
        step("CABIN CREW","ADVISE","overhead","calls_all")
      ]
    }
  },
  {
    id:"climb-acceleration",title:"Climb / Acceleration",short:"CLIMB-ACCEL",
    note:"The supplied flow card assigns this flow to PM only.",
    initial:{flaps:"1+F",spoilers:"ARMED",ext_strobe:"ON",beacon:"ON",ext_wing:"ON",ext_nav_logo:"2",land_light_l:"ON",ext_nose:"T.O",ext_rwy_turnoff:"ON",land_light_r:"ON"},
    roles:{
      PM:[
        step("FLAPS ZERO","SELECT","pedestal","flaps",["0"]),
        step("GND SPLRS","DISARM","pedestal","spoilers",["DISARMED"]),
        step("L/G","CHECK UP","flightdeck","gear_check"),
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true,contextRule:"exterior-lights"})
      ]
    }
  },
  {
    id:"ten-thousand-climb",title:"10,000 ft - Climb",short:"10,000 CLIMB",
    initial:{land_light_l:"ON",land_light_r:"ON",seat_belts:"ON",efis_cstr_cm1:"OFF",efis_cstr_cm2:"OFF"},
    roles:{
      PF:[
        step("EFIS OPTIONS","AS RQRD","flightdeck",EFIS_OPTION_TEMPLATES,null,{any:true,completeAny:true,conditional:true})
      ],
      PM:[
        step("LAND L + R switches","OFF","overhead",["land_light_l","land_light_r"],["OFF"]),
        step("SEAT BELT sw","AS RQRD","overhead","seat_belts",null,{any:true,conditional:true}),
        step("EFIS OPTIONS","AS RQRD","flightdeck",EFIS_OPTION_TEMPLATES,null,{any:true,completeAny:true,conditional:true}),
        step("ECAM MEMO","REVIEW","flightdeck","ecam_memo"),
        step("NAVAIDS / SEC-PLAN / OPT FL / REC MAX FL","CHECK","pedestal",["mcdu_{seat}_rad_nav","mcdu_{seat}_sec_f_pln","mcdu_{seat}_prog"])
      ]
    }
  },
  {
    id:"ten-thousand-descent",title:"10,000 ft - Descent",short:"10,000 DESCENT",
    initial:{land_light_l:"OFF",land_light_r:"OFF",seat_belts:"OFF",ls_cm1:"OFF",ls_cm2:"OFF",efis_cstr_cm1:"OFF",efis_cstr_cm2:"OFF"},
    roles:{
      PF:[
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true,conditional:true}),
        step("EFIS option pb","CSTR","flightdeck","efis_cstr_{seat}",["ON"]),
        step("NAVAIDS / NAV ACCURACY","AS RQRD / MONITOR","pedestal",["mcdu_{seat}_rad_nav","mcdu_{seat}_prog"],null,{conditional:true})
      ],
      PM:[
        step("LAND L + R switches","ON","overhead",["land_light_l","land_light_r"],["ON"]),
        step("SEAT BELTS","ON","overhead","seat_belts",["ON"]),
        step("EFIS option pb","CSTR","flightdeck","efis_cstr_{seat}",["ON"]),
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true,conditional:true}),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true,conditional:true})
      ]
    }
  },
  {
    id:"after-landing",title:"After Landing",short:"AFTER LANDING",
    initial:{spoilers:"ARMED",ext_strobe:"ON",beacon:"ON",ext_wing:"ON",ext_nav_logo:"2",land_light_l:"ON",ext_nose:"T.O",ext_rwy_turnoff:"ON",land_light_r:"ON",wx_radar_system:"1",wx_pws:"AUTO",eng_mode:"IGN/START",flaps:"1+F",tcas_mode:"TA/RA",apu_master:"OFF"},
    roles:{
      PF:[
        step("GND SPLRS","DISARM","pedestal","spoilers",["DISARMED"]),
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true,contextRule:"exterior-lights"})
      ],
      PM:[
        step("RADAR / PWS","OFF","pedestal",["wx_radar_system","wx_pws"],["OFF"]),
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("FLAPS","RETRACT","pedestal","flaps",["0"]),
        step("TCAS / ATC","STBY / AS RQRD","pedestal","tcas_mode",null,{any:true,conditional:true}),
        step("APU","AS RQRD","overhead","apu_master",null,{any:true,conditional:true}),
        step("ANTI ICE","AS RQRD","overhead",ANTI_ICE_CONTROLS,null,{any:true,completeAny:true,conditional:true,contextRule:"anti-ice"})
      ]
    }
  },
  {
    id:"parking",title:"Parking",short:"PARKING",
    initial:{park_brake:"OFF",yellow_pump:"ON",eng_master_1:"ON",eng_master_2:"ON",ext_strobe:"AUTO",beacon:"ON",ext_wing:"ON",ext_nav_logo:"2",land_light_l:"OFF",ext_nose:"TAXI",ext_rwy_turnoff:"ON",land_light_r:"OFF",doors_slides:"ARMED",seat_belts:"ON",anti_ice_eng_1:"ON",anti_ice_wing:"ON",anti_ice_eng_2:"ON",apu_bleed:"ON",atc_mode:"AUTO"},
    roles:{
      PF:[
        step("ACCU PRESS","CHECK","flightdeck","accu_press"),
        step("PARK BRAKE handle","ON","pedestal","park_brake",["ON"]),
        step("YELLOW ELEC PUMP","OFF","overhead","yellow_pump",["OFF"]),
        step("ALL ENG MASTER LEVERS","OFF","pedestal",["eng_master_1","eng_master_2"],["OFF"]),
        step("EXTERIOR LIGHTS","OFF","overhead",EXTERIOR_LIGHT_CONTROLS,null,{acceptByControl:{ext_strobe:["OFF"],beacon:["OFF"],ext_wing:["OFF"],ext_nav_logo:["OFF"],land_light_l:["OFF","RETRACT"],ext_nose:["OFF"],ext_rwy_turnoff:["OFF"],land_light_r:["OFF","RETRACT"]}}),
        step("SLIDES","CHECK DISARMED","checks","doors_slides",["DISARMED"]),
        step("SEAT BELTS sw","OFF","overhead","seat_belts",["OFF"])
      ],
      PM:[
        step("ANTI ICE","OFF","overhead",ANTI_ICE_CONTROLS,["OFF"]),
        step("APU BLEED pb-sw","AS RQRD","overhead","apu_bleed",null,{any:true,conditional:true}),
        step("FUEL PUMPS","OFF","overhead",["fuel_pump_l1","fuel_pump_l2","fuel_pump_ctr1","fuel_pump_ctr2","fuel_pump_r1","fuel_pump_r2"],["OFF"]),
        step("ATC","STBY","pedestal","atc_mode",["STBY"]),
        step("IRS PERFORMANCE","CHECK","pedestal","mcdu_{seat}_data"),
        step("FUEL QUANTITY","CHECK","flightdeck","fuel_quantity")
      ]
    }
  }
];

const PHASE_BY_ID = Object.fromEntries(FLOW_PHASES.map(function(phase){return [phase.id,phase];}));

function getInitialControlState(phaseId,powerProfile){
  const phase=PHASE_BY_ID[phaseId];
  if(!phase) return {};
  const state={};
  CONTROL_DEFS.forEach(function(def){if(def.states)state[def.id]=phase.coldDark?(def.cold||def.states[0]):(def.initial||def.states[0]);});
  Object.assign(state,phase.initial||{});
  if(phase.id==="before-start"&&GROUND_POWER_PROFILES[powerProfile||"external"]){
    Object.assign(state,GROUND_POWER_PROFILES[powerProfile||"external"].states);
  }
  return state;
}

function seatForRole(role){return role==="PF"?"CM2":"CM1";}
function seatSuffix(seat){return String(seat||"CM1").toLowerCase();}
function resolveControlId(id,seat){return id.replace("{seat}",seatSuffix(seat));}
function resolveStep(source,seat,contextId){
  const resolved=Object.assign({},source,{controls:source.controls.map(function(id){return resolveControlId(id,seat);})});
  if(resolved.conditional){
    resolved.contextId=contextId||"standard-dry";
    const rule=resolved.contextRule&&CONTEXT_RULES[resolved.contextId]&&CONTEXT_RULES[resolved.contextId][resolved.contextRule];
    if(rule){
      resolved.target=rule.target;resolved.accept=rule.accept;resolved.any=false;resolved.completeAny=false;resolved.scenarioBound=true;resolved.acknowledgeOnly=false;
    }else resolved.acknowledgeOnly=true;
  }
  return resolved;
}
function getResolvedSteps(phaseId,role,seat,contextId){
  const phase=PHASE_BY_ID[phaseId];
  if(!phase||!phase.roles[role]) return [];
  return phase.roles[role].map(function(item){return resolveStep(item,seatForRole(role),contextId);});
}
function accepts(stepDef,value,controlId){
  if(stepDef.any) return true;
  if(stepDef.acceptByControl&&stepDef.acceptByControl[controlId]) return stepDef.acceptByControl[controlId].indexOf(value)!==-1;
  return (stepDef.accept||["CHECK"]).indexOf(value)!==-1;
}
function createRun(phaseId,role,seat,contextId){
  const fixedSeat=seatForRole(role);
  const steps=getResolvedSteps(phaseId,role,fixedSeat,contextId);
  if(!steps.length) throw new Error("No flow actions for this phase and role");
  return {phaseId:phaseId,role:role,seat:fixedSeat,contextId:contextId||"standard-dry",steps:steps,index:0,doneControls:new Set(),correct:0,conditional:0,incorrect:0,outOfOrder:0,hints:0,reveals:0,history:[],complete:false};
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
    }else if(current.acknowledgeOnly){
      grade="conditional";run.doneControls.add(controlId);
      if(run.doneControls.size===(current.completeAny?1:current.controls.length)){
        stepComplete=true;run.conditional++;run.index++;run.doneControls=new Set();
        if(run.index>=run.steps.length)run.complete=true;
      }
      message=stepComplete?"Conditional action acknowledged - verify the selected position against the briefing and current SOP.":"Conditional group acknowledged - continue the scan.";
    }else if(accepts(current,value,controlId)){
      grade="correct"; run.doneControls.add(controlId); run.correct++;
      if(run.doneControls.size===(current.completeAny?1:current.controls.length)){
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

function gradeStepChoice(run,choiceIndex){
  if(run.complete){
    return {grade:"incorrect",message:"Flow already complete.",stepComplete:false,flowComplete:true,choiceIndex:choiceIndex};
  }
  const expectedIndex=run.index;
  let grade="incorrect",message="That item is not part of the selected role flow.",stepComplete=false;
  if(Number.isInteger(choiceIndex)&&choiceIndex>=0&&choiceIndex<run.steps.length){
    if(choiceIndex===expectedIndex){
      if(run.steps[choiceIndex].acknowledgeOnly){grade="conditional";message="Conditional action acknowledged - verify against the briefing and current SOP.";run.conditional++;}
      else{grade="correct";message="Correct - action complete.";run.correct++;}
      stepComplete=true;run.index++;run.doneControls=new Set();
      if(run.index>=run.steps.length) run.complete=true;
    }else if(choiceIndex>expectedIndex){
      grade="out-of-order";message="That item belongs later in the flow.";
    }else{
      grade="out-of-order";message="That item has already been completed.";
    }
  }
  if(grade==="incorrect") run.incorrect++;
  if(grade==="out-of-order") run.outOfOrder++;
  const event={grade:grade,choiceIndex:choiceIndex,stepIndex:run.index,message:message,stepComplete:stepComplete,flowComplete:run.complete};
  run.history.push(event);
  return event;
}

function expectedInputs(run){return run.steps.reduce(function(sum,item){return sum+(item.completeAny?1:item.controls.length);},0);}

function initBrowser(){
  const $=function(id){return document.getElementById(id);};
  if(!$('phaseGrid')) return;
  let selectedPhase=FLOW_PHASES[0].id;
  let selectedRole="PF";
  let selectedMode="assessment";
  let selectedView="diagram";
  let selectedSession="single";
  let selectedContext="standard-dry";
  let selectedPower="external";
  let activeRun=null;
  let revealed=false;
  let cockpitRendered=false;
  let sequencePhases=[];
  let sequenceIndex=0;
  let sequenceResults=[];
  let phaseStartState={};
  const controlState={};
  const BEST_KEY="a320flows_v2";
  const LEGACY_BEST_KEY="a320flows_v1";

  function loadBest(){
    try{
      const current=JSON.parse(localStorage.getItem(BEST_KEY));if(current)return current;
      const legacy=JSON.parse(localStorage.getItem(LEGACY_BEST_KEY))||{};
      const migrated={};Object.keys(legacy).forEach(function(key){migrated[key]={score:Number(legacy[key])||0,mastered:false,legacy:true};});
      return migrated;
    }catch(e){return {};}
  }
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
  }
  function renderBrief(){
    const phase=PHASE_BY_ID[selectedPhase];
    const actions=phase.roles[selectedRole]||[];
    const remaining=FLOW_PHASES.slice(FLOW_PHASES.indexOf(phase)).filter(function(item){return item.roles[selectedRole];}).length;
    const sessionText=selectedSession==="sequence"?' · '+remaining+' phases from here':' · single phase';
    const context=CONTEXT_BY_ID[selectedContext]||FLOW_CONTEXTS[0];
    $("phaseBrief").innerHTML='<strong>'+phase.title+' · '+selectedRole+' / '+seatForRole(selectedRole)+'</strong><span>'+actions.length+' source actions'+sessionText+(phase.note?' · '+phase.note:'')+'</span><span class="brief-context">'+context.description+(phase.id==="before-start"?' Ground power: '+GROUND_POWER_PROFILES[selectedPower].label+'.':'')+'</span>';
  }
  function wireSegments(id,onChange){
    $(id).querySelectorAll("button").forEach(function(b){b.onclick=function(){onChange(b.dataset.value);$(id).querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",String(x===b));});};});
  }

  function renderControl(def){
    const wrap=document.createElement("div");
    wrap.className="cockpit-control kind-"+def.kind+(def.zone?" check-zone":"");
    wrap.dataset.control=def.id;
    wrap.style.left=def.x+"%";wrap.style.top=def.y+"%";wrap.style.width=def.w+"%";wrap.style.height=def.h+"%";
    const trigger=button(def.short||def.label,"hotspot-trigger");
    trigger.setAttribute("aria-label",def.label+(def.kind==="check"?" check":" control"));
    trigger.title=def.label;
    wrap.appendChild(trigger);
    if(def.kind==="check"||def.kind==="momentary"){
      trigger.onclick=function(){wrap.classList.add("pressed");setTimeout(function(){wrap.classList.remove("pressed");},180);interact(def.id,"CHECK",wrap);};
    }else if(def.kind==="pb"){
      trigger.onclick=function(){
        const current=activeRun&&!activeRun.complete?activeRun.steps[activeRun.index]:null;
        if(current&&current.scenarioBound&&current.controls.indexOf(def.id)!==-1&&accepts(current,controlState[def.id],def.id)){
          interact(def.id,controlState[def.id],wrap);return;
        }
        const next=controlState[def.id]===def.states[0]?def.states[1]:def.states[0];
        setState(def.id,next);interact(def.id,next,wrap);
      };
    }else{
      trigger.onclick=function(){openControlDock(def,wrap);};
    }
    if(def.states){const state=document.createElement("span");state.className="state-readout";state.dataset.stateFor=def.id;wrap.appendChild(state);}
    return wrap;
  }
  function openControlDock(def,wrap){
    const dock=$("controlDock");dock.hidden=false;dock.innerHTML='<div><span>'+def.panel.toUpperCase()+' · SELECT POSITION</span><strong>'+def.label+'</strong></div>';
    const choices=document.createElement("div");choices.className="dock-choices";
    def.states.forEach(function(state){const b=button(state,"position");b.setAttribute("aria-pressed",String(controlState[def.id]===state));b.onclick=function(){setState(def.id,state);interact(def.id,state,wrap);dock.hidden=true;};choices.appendChild(b);});
    dock.appendChild(choices);dock.scrollIntoView({behavior:"smooth",block:"nearest"});
  }
  function renderCockpit(){
    if(cockpitRendered)return;
    CONTROL_DEFS.forEach(function(def){const layer=document.querySelector('.control-layer[data-layer="'+def.panel+'"]');if(layer)layer.appendChild(renderControl(def));});
    cockpitRendered=true;
    resetControlStates();
  }
  function markRelevantControls(){
    if(!activeRun)return;
    const relevant=new Set(activeRun.steps.reduce(function(all,item){return all.concat(item.controls);},[]));
    document.querySelectorAll(".cockpit-control[data-control]").forEach(function(el){el.classList.toggle("flow-relevant",relevant.has(el.dataset.control));});
    if($("trainer"))$("trainer").dataset.practiceView=selectedView;
  }
  function setState(id,value){
    controlState[id]=value;
    const def=DEF_BY_ID[id];if(!def)return;
    const wrap=document.querySelector('.cockpit-control[data-control="'+id+'"]');if(!wrap)return;
    wrap.dataset.state=value;
    const readout=wrap.querySelector('[data-state-for="'+id+'"]');if(readout){readout.textContent=value;readout.classList.toggle("on",value!==def.states[0]);}
    wrap.classList.toggle("is-on",value!==def.states[0]);
    refreshPowerState();
  }
  function resetControlStates(){CONTROL_DEFS.forEach(function(def){if(def.states)setState(def.id,def.initial||def.states[0]);});}
  function applyInitial(phase,preserve){
    const state=preserve?Object.assign({},phase.initial||{}):getInitialControlState(phase.id,selectedPower);
    if(preserve&&phase.id==="before-start")Object.assign(state,GROUND_POWER_PROFILES[selectedPower].states);
    Object.keys(state).forEach(function(id){setState(id,state[id]);});refreshPowerState();
  }
  function refreshPowerState(){
    let label="COLD & DARK · ALL POWER OFF",powered=false;
    if(controlState.elec_ext_pwr==="ON"){powered=true;label="POWERED · EXT PWR";}
    else if(controlState.eng_master_1==="ON"||controlState.eng_master_2==="ON"){powered=true;label="POWERED · ENGINE GENERATOR CONFIG";}
    else if(controlState.apu_master==="ON"&&controlState.elec_apu_gen!=="OFF"){powered=true;label="POWERED · APU ASSUMED AVAILABLE";}
    else if(controlState.elec_bat_1!=="OFF"||controlState.elec_bat_2!=="OFF"){powered=true;label="BATTERY POWER ONLY";}
    if($("trainer"))$("trainer").dataset.power=powered?"on":"off";
    if($("powerState")){$("powerState").className="power-state "+(powered?"powered":"cold-dark");$("powerState").textContent=label;}
  }
  function applyStepEffect(item){
    if(!item||item.acknowledgeOnly)return;
    item.controls.forEach(function(id){
      let accepted=item.acceptByControl&&item.acceptByControl[id]?item.acceptByControl[id]:item.accept;
      if(Array.isArray(accepted)&&accepted.length===1&&DEF_BY_ID[id]&&DEF_BY_ID[id].states)setState(id,accepted[0]);
    });
  }
  function crewLoopText(){
    return selectedRole==="PM"?"CM2 / PF CUE → CM1 / PM ACTION → CM1 CONFIRMS":"CM2 / PF ACTION → CM1 / PM MONITORS";
  }

  function clearControlGrades(){document.querySelectorAll(".cockpit-control[data-grade]").forEach(function(el){delete el.dataset.grade;});}
  function clearMapGrades(){document.querySelectorAll(".flow-item[data-grade]").forEach(function(el){delete el.dataset.grade;});}
  function stepAnchor(item){
    const defs=item.controls.map(function(id){return DEF_BY_ID[id];}).filter(Boolean);
    if(!defs.length)return 50000;
    const x=defs.reduce(function(sum,def){return sum+def.x+def.w/2;},0)/defs.length;
    const y=defs.reduce(function(sum,def){return sum+def.y+def.h/2;},0)/defs.length;
    return Math.round(y*1000+x);
  }
  function redrawFlowPath(){
    const shell=$("flowMapShell"),svg=$("flowMapPath");if(!shell||!svg||shell.hidden)return;
    const shellRect=shell.getBoundingClientRect();
    const done=Array.from(shell.querySelectorAll(".flow-item.done")).sort(function(a,b){return Number(a.dataset.stepIndex)-Number(b.dataset.stepIndex);});
    svg.innerHTML="";svg.setAttribute("viewBox","0 0 "+shellRect.width+" "+shellRect.height);
    if(done.length<2)return;
    const points=done.map(function(item){const rect=item.getBoundingClientRect();return (rect.left-shellRect.left+rect.width/2)+","+(rect.top-shellRect.top+rect.height/2);}).join(" ");
    const line=document.createElementNS("http://www.w3.org/2000/svg","polyline");line.setAttribute("points",points);svg.appendChild(line);
  }
  function syncFlowMap(){
    if(!activeRun||selectedView!=="diagram")return;
    document.querySelectorAll(".flow-item[data-step-index]").forEach(function(item){
      const index=Number(item.dataset.stepIndex),done=index<activeRun.index;
      item.classList.toggle("done",done);
      item.classList.toggle("current",selectedMode==="guided"&&index===activeRun.index&&!activeRun.complete);
      const order=item.querySelector(".flow-order");if(order)order.textContent=done||selectedMode==="guided"?String(index+1):"";
    });
    requestAnimationFrame(redrawFlowPath);
  }
  function renderFlowMap(){
    const shell=$("flowMapShell");shell.dataset.role=selectedRole;
    $("diagramRole").textContent=selectedRole+" · "+seatForRole(selectedRole)+" FLOW MAP";
    const grouped={overhead:[],flightdeck:[],pedestal:[],checks:[]};
    activeRun.steps.forEach(function(item,index){grouped[item.panel].push({item:item,index:index,anchor:stepAnchor(item)});});
    document.querySelectorAll("[data-flow-zone]").forEach(function(zone){
      const panel=zone.dataset.flowZone,host=zone.querySelector(".flow-zone-items"),items=(grouped[panel]||[]).sort(function(a,b){return a.anchor-b.anchor;});
      host.innerHTML="";zone.classList.toggle("empty",items.length===0);
      if(!items.length){const empty=document.createElement("span");empty.className="flow-zone-empty";empty.textContent="NO "+selectedRole+" ACTION";host.appendChild(empty);return;}
      items.forEach(function(entry){
        const b=button("","flow-item");b.dataset.stepIndex=entry.index;b.dataset.role=selectedRole;
        if(entry.item.acknowledgeOnly)b.classList.add("conditional-item");
        b.setAttribute("aria-label",entry.item.label+" - "+entry.item.target);
        b.innerHTML='<span class="flow-order"></span><strong>'+entry.item.label+'</strong><em>'+entry.item.target+(entry.item.acknowledgeOnly?' · CONDITIONAL':'')+'</em>';
        b.onclick=function(){interactFlowStep(entry.index,b);};host.appendChild(b);
      });
    });
    syncFlowMap();
  }
  function interactFlowStep(index,itemButton){
    if(!activeRun)return;
    clearMapGrades();
    const selected=activeRun.steps[index],result=gradeStepChoice(activeRun,index);itemButton.dataset.grade=result.grade;
    if(result.stepComplete)applyStepEffect(selected);
    const title=result.grade==="correct"?"CORRECT":result.grade==="conditional"?"CONDITIONAL ITEM":result.grade==="out-of-order"?"OUT OF ORDER":"INCORRECT";
    showFeedback(result.grade,title,selected.label+" · "+selected.target+" - "+result.message);
    updateRunUI();
    if(result.flowComplete)finishRun();
  }
  function interact(id,value,wrap){
    if(!activeRun)return;
    clearControlGrades();
    const result=gradeInput(activeRun,id,value);wrap.dataset.grade=result.grade;
    const def=DEF_BY_ID[id];
    const title=result.grade==="correct"?"CORRECT":result.grade==="conditional"?"CONDITIONAL ITEM":result.grade==="out-of-order"?"OUT OF ORDER":"INCORRECT";
    const detail=(def?def.label:id)+(value&&value!=="CHECK"?" · "+value:"");
    showFeedback(result.grade,title,detail+" - "+result.message);
    updateRunUI();
    if(result.stepComplete&&!result.flowComplete&&selectedView==="focus")selectPanel(activeRun.steps[activeRun.index].panel);
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
      cue.innerHTML='<span class="cue-kicker">'+(current.acknowledgeOnly?'CONDITIONAL · ':'NEXT · ')+current.panel.toUpperCase()+'</span><strong>'+current.label+'</strong><span>'+current.target+'<small>'+crewLoopText()+'</small></span>';
    }else{
      cue.innerHTML='<span class="cue-kicker">ASSESSMENT MODE</span><strong>RECALL ACTION '+(activeRun.index+1)+' OF '+activeRun.steps.length+'</strong><span>'+(selectedView==="diagram"?"Tap the next flow item.":"Use HINT only if needed.")+'<small>'+crewLoopText()+'</small></span>';
    }
  }
  function updateRunUI(){
    if(!activeRun)return;
    $("stepValue").textContent=Math.min(activeRun.index+1,activeRun.steps.length)+"/"+activeRun.steps.length;
    $("correctValue").textContent=activeRun.correct;
    if($("conditionalValue"))$("conditionalValue").textContent=activeRun.conditional;
    $("incorrectValue").textContent=activeRun.incorrect;
    $("orderValue").textContent=activeRun.outOfOrder;
    $("runProgress").style.width=Math.round(activeRun.index/activeRun.steps.length*100)+"%";
    renderCue();renderFlowList();syncFlowMap();
  }
  function renderFlowList(){
    const host=$("flowList");host.innerHTML="";
    if(!activeRun)return;
    activeRun.steps.forEach(function(item,index){
      const row=document.createElement("div");row.className="flow-row "+(index<activeRun.index?"done":index===activeRun.index?"current":"pending");
      row.innerHTML='<span>'+(index+1)+'</span><b>'+item.label+(item.acknowledgeOnly?' <small>CONDITIONAL</small>':'')+'</b><em>'+item.target+'</em>';host.appendChild(row);
    });
  }
  function selectPanel(name){
    document.querySelectorAll(".panel-tab").forEach(function(b){b.setAttribute("aria-pressed",String(b.dataset.panel===name));});
    document.querySelectorAll(".panel-view").forEach(function(view){view.hidden=view.dataset.panel!==name;});
    $("controlDock").hidden=true;
  }
  function viewLabel(){return selectedView==="diagram"?"FLOW MAP":selectedView==="focus"?"FOCUSED PANEL":"FULL PANEL";}
  function restorePhaseStart(){Object.keys(phaseStartState).forEach(function(id){setState(id,phaseStartState[id]);});}
  function startRun(options){
    options=options||{};
    activeRun=createRun(selectedPhase,selectedRole,null,selectedContext);revealed=selectedMode==="guided";
    activeRun.practiceView=selectedView;
    activeRun.sessionMode=selectedSession;
    if(selectedView!=="diagram")renderCockpit();
    if(options.restore)restorePhaseStart();
    else{applyInitial(PHASE_BY_ID[selectedPhase],Boolean(options.preserve));phaseStartState=Object.assign({},controlState);}
    clearControlGrades();clearMapGrades();markRelevantControls();
    $("setup").hidden=true;$("trainer").hidden=false;$("completion").hidden=true;
    if($("continueFlow"))$("continueFlow").hidden=true;
    $("diagramPractice").hidden=selectedView!=="diagram";$("detailedPractice").hidden=selectedView==="diagram";
    $("runTitle").textContent=PHASE_BY_ID[selectedPhase].title.toUpperCase();
    $("runMeta").textContent=selectedRole+" · "+seatForRole(selectedRole)+" · "+selectedMode.toUpperCase()+" · "+viewLabel()+(selectedSession==="sequence"?" · PHASE "+(sequenceIndex+1)+"/"+sequencePhases.length:"");
    $("flowDrawer").open=selectedMode==="guided";
    showFeedback("neutral","FLOW ARMED",activeRun.steps.length+" actions loaded. "+(selectedView==="diagram"?"Tap the flow items in order.":"Operate the cockpit controls in order.")+(PHASE_BY_ID[selectedPhase].coldDark?" Aircraft state: cold and dark.":"")+" Conditional items are acknowledged separately from scored actions.");
    if(selectedView==="diagram")renderFlowMap();else selectPanel(activeRun.steps[0].panel);
    updateRunUI();window.scrollTo({top:0,behavior:"instant"});
  }
  function beginSession(){
    sequenceResults=[];sequenceIndex=0;
    if(selectedSession==="sequence"){
      const start=FLOW_PHASES.findIndex(function(item){return item.id===selectedPhase;});
      sequencePhases=FLOW_PHASES.slice(Math.max(0,start)).filter(function(item){return item.roles[selectedRole];});
      if(!sequencePhases.length)return;
      selectedPhase=sequencePhases[0].id;
    }else sequencePhases=[PHASE_BY_ID[selectedPhase]];
    startRun({preserve:false});
  }
  function accuracy(run){const attempts=run.correct+run.incorrect+run.outOfOrder;return attempts?Math.round(run.correct/attempts*100):null;}
  function finishRun(){
    const pct=accuracy(activeRun);$("completion").hidden=false;
    const scored=pct!==null;
    const mastered=scored&&selectedMode==="assessment"&&pct===100&&activeRun.incorrect===0&&activeRun.outOfOrder===0&&activeRun.hints===0&&activeRun.reveals===0;
    $("completionScore").textContent=scored?pct+"% · "+(mastered?"MASTERED":selectedMode==="guided"?"GUIDED":"ASSISTED"):"NOT SCORED · CONDITIONAL";
    $("completion").classList.toggle("assisted",!mastered);
    $("completionText").textContent=activeRun.correct+" scored "+(activeRun.practiceView==="diagram"?"flow items":"control inputs")+" · "+activeRun.conditional+" conditional · "+activeRun.incorrect+" incorrect · "+activeRun.outOfOrder+" out of order · "+activeRun.hints+" hints · "+activeRun.reveals+" full reveals";
    const key=activeRun.phaseId+":"+activeRun.role+":"+activeRun.seat+":"+activeRun.practiceView+":"+activeRun.contextId;const best=loadBest();
    const previous=best[key]||{};if(scored&&(!previous.score||pct>previous.score||(pct===previous.score&&mastered&&!previous.mastered))){best[key]={score:pct,mastered:mastered,hints:activeRun.hints,reveals:activeRun.reveals,date:new Date().toISOString()};saveBest(best);}
    const resultRecord={phaseId:activeRun.phaseId,score:pct,mastered:mastered};
    if(selectedSession==="sequence")sequenceResults[sequenceIndex]=resultRecord;else sequenceResults=[resultRecord];
    const hasNext=selectedSession==="sequence"&&sequenceIndex+1<sequencePhases.length;
    if($("continueFlow")){$("continueFlow").hidden=!hasNext;if(hasNext)$("continueFlow").textContent="CONTINUE TO "+sequencePhases[sequenceIndex+1].short+" →";}
    const cleanCount=sequenceResults.filter(function(item){return item.mastered;}).length;
    const status=!scored?"CONDITIONAL FLOW COMPLETE":mastered?"UNASSISTED FLOW COMPLETE":"ASSISTED FLOW COMPLETE";
    showFeedback(mastered?"correct":"conditional",status,PHASE_BY_ID[activeRun.phaseId].title+" · "+activeRun.role+" complete."+(selectedSession==="sequence"?" Sequence mastery: "+cleanCount+"/"+sequenceResults.length+" phases.":""));
    $("runProgress").style.width="100%";$("completion").scrollIntoView({behavior:"smooth",block:"center"});
  }
  function continueSequence(){
    if(sequenceIndex+1>=sequencePhases.length)return;
    sequenceIndex++;selectedPhase=sequencePhases[sequenceIndex].id;startRun({preserve:true});
  }
  function backToSetup(){
    activeRun=null;sequencePhases=[];sequenceResults=[];$("trainer").hidden=true;$("setup").hidden=false;renderPhases();renderRoles();renderBrief();window.scrollTo({top:0,behavior:"instant"});
  }

  renderPhases();renderRoles();renderBrief();
  wireSegments("modeButtons",function(value){selectedMode=value;renderBrief();});
  wireSegments("viewButtons",function(value){selectedView=value;renderBrief();});
  wireSegments("sessionButtons",function(value){selectedSession=value;renderBrief();});
  wireSegments("contextButtons",function(value){selectedContext=value;renderBrief();});
  wireSegments("powerButtons",function(value){selectedPower=value;renderBrief();});
  $("beginFlow").onclick=beginSession;
  $("changeFlow").onclick=backToSetup;
  $("resetFlow").onclick=function(){startRun({restore:true});};
  $("retryFlow").onclick=function(){startRun({restore:true});};
  $("chooseFlow").onclick=backToSetup;
  if($("continueFlow"))$("continueFlow").onclick=continueSequence;
  $("hintButton").onclick=function(){if(activeRun&&!activeRun.complete){activeRun.hints++;revealed=true;renderCue();const item=document.querySelector('.flow-item[data-step-index="'+activeRun.index+'"]');if(item)item.classList.add("hinted");setTimeout(function(){if(item)item.classList.remove("hinted");if(selectedMode==="assessment"){revealed=false;renderCue();}},5000);}};
  $("revealButton").onclick=function(){if(activeRun&&!$("flowDrawer").open){activeRun.reveals++;$("flowDrawer").open=true;renderCue();}};
  document.querySelectorAll(".panel-tab").forEach(function(b){b.onclick=function(){selectPanel(b.dataset.panel);};});
  window.addEventListener("resize",function(){if(activeRun&&selectedView==="diagram")redrawFlowPath();});
  selectPanel("overhead");
}

const api={FLOW_PHASES:FLOW_PHASES,FLOW_CONTEXTS:FLOW_CONTEXTS,CONTEXT_RULES:CONTEXT_RULES,GROUND_POWER_PROFILES:GROUND_POWER_PROFILES,CONTROL_DEFS:CONTROL_DEFS,createRun:createRun,gradeInput:gradeInput,gradeStepChoice:gradeStepChoice,getResolvedSteps:getResolvedSteps,expectedInputs:expectedInputs,seatForRole:seatForRole,getInitialControlState:getInitialControlState};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
if(root) root.A320FlowTrainer=api;
if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initBrowser);else initBrowser();}

})(typeof window!=="undefined"?window:globalThis);
