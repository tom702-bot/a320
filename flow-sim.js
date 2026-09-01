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
    initial:{beacon:"OFF",park_brake:"OFF",atc_mode:"STBY",doors_slides:"ARMED"},
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
    initial:{eng_mode:"IGN/START",apu_bleed:"ON",apu_master:"ON",spoilers:"DISARMED",flaps:"0"},
    roles:{
      PF:[
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("APU BLEED pb-sw","OFF","overhead","apu_bleed",["OFF"]),
        step("ANTI ICE","AS RQRD","overhead",ANTI_ICE_CONTROLS,null,{any:true,completeAny:true}),
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
    initial:{auto_brake_max:"OFF",wx_radar_system:"OFF",wx_pws:"OFF",eng_mode:"NORM",terr_cm1:"OFF",terr_cm2:"OFF"},
    roles:{
      PF:[
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true})
      ],
      PM:[
        step("AUTO BRK MAX","ON","flightdeck","auto_brake_max",["ON"]),
        step("TERR ON ND","AS RQRD","flightdeck","terr_{seat}",null,{any:true}),
        step("SQUAWK","CONFIRM / SET","pedestal","squawk"),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true}),
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
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true})
      ],
      PM:[
        step("TCAS mode selector","TA ONLY or TA/RA","pedestal","tcas_mode",["TA","TA/RA"]),
        step("TAKEOFF RUNWAY","CONFIRM","checks","takeoff_runway"),
        step("APPROACH PATH","CLEAR OF TRAFFIC","checks","approach_path"),
        step("PACKS 1 AND 2","AS RQRD","overhead",["pack_1","pack_2"],null,{any:true}),
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
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true})
      ]
    }
  },
  {
    id:"ten-thousand-climb",title:"10,000 ft - Climb",short:"10,000 CLIMB",
    initial:{land_light_l:"ON",land_light_r:"ON",seat_belts:"ON",efis_cstr_cm1:"OFF",efis_cstr_cm2:"OFF"},
    roles:{
      PF:[
        step("EFIS OPTIONS","AS RQRD","flightdeck",EFIS_OPTION_TEMPLATES,null,{any:true,completeAny:true})
      ],
      PM:[
        step("LAND L + R switches","OFF","overhead",["land_light_l","land_light_r"],["OFF"]),
        step("SEAT BELT sw","AS RQRD","overhead","seat_belts",null,{any:true}),
        step("EFIS OPTIONS","AS RQRD","flightdeck",EFIS_OPTION_TEMPLATES,null,{any:true,completeAny:true}),
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
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true}),
        step("EFIS option pb","CSTR","flightdeck","efis_cstr_{seat}",["ON"]),
        step("NAVAIDS / NAV ACCURACY","AS RQRD / MONITOR","pedestal",["mcdu_{seat}_rad_nav","mcdu_{seat}_prog"])
      ],
      PM:[
        step("LAND L + R switches","ON","overhead",["land_light_l","land_light_r"],["ON"]),
        step("SEAT BELTS","ON","overhead","seat_belts",["ON"]),
        step("EFIS option pb","CSTR","flightdeck","efis_cstr_{seat}",["ON"]),
        step("ILS / LS pb","AS RQRD","flightdeck","ls_{seat}",null,{any:true}),
        step("ENG MODE selector","AS RQRD","pedestal","eng_mode",null,{any:true})
      ]
    }
  },
  {
    id:"after-landing",title:"After Landing",short:"AFTER LANDING",
    initial:{spoilers:"ARMED",ext_strobe:"ON",beacon:"ON",ext_wing:"ON",ext_nav_logo:"2",land_light_l:"ON",ext_nose:"T.O",ext_rwy_turnoff:"ON",land_light_r:"ON",wx_radar_system:"1",wx_pws:"AUTO",eng_mode:"IGN/START",flaps:"1+F",tcas_mode:"TA/RA",apu_master:"OFF"},
    roles:{
      PF:[
        step("GND SPLRS","DISARM","pedestal","spoilers",["DISARMED"]),
        step("EXTERIOR LIGHTS","SET","overhead",EXTERIOR_LIGHT_CONTROLS,null,{any:true,conditional:true})
      ],
      PM:[
        step("RADAR / PWS","OFF","pedestal",["wx_radar_system","wx_pws"],["OFF"]),
        step("ENG MODE selector","NORM","pedestal","eng_mode",["NORM"]),
        step("FLAPS","RETRACT","pedestal","flaps",["0"]),
        step("TCAS / ATC","STBY / AS RQRD","pedestal","tcas_mode",null,{any:true}),
        step("APU","AS RQRD","overhead","apu_master",null,{any:true}),
        step("ANTI ICE","AS RQRD","overhead",ANTI_ICE_CONTROLS,null,{any:true,completeAny:true})
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
        step("APU BLEED pb-sw","AS RQRD","overhead","apu_bleed",null,{any:true}),
        step("FUEL PUMPS","OFF","overhead",["fuel_pump_l1","fuel_pump_l2","fuel_pump_ctr1","fuel_pump_ctr2","fuel_pump_r1","fuel_pump_r2"],["OFF"]),
        step("ATC","STBY","pedestal","atc_mode",["STBY"]),
        step("IRS PERFORMANCE","CHECK","pedestal","mcdu_{seat}_data"),
        step("FUEL QUANTITY","CHECK","flightdeck","fuel_quantity")
      ]
    }
  }
];

const PHASE_BY_ID = Object.fromEntries(FLOW_PHASES.map(function(phase){return [phase.id,phase];}));

function getInitialControlState(phaseId){
  const phase=PHASE_BY_ID[phaseId];
  if(!phase) return {};
  const state={};
  CONTROL_DEFS.forEach(function(def){if(def.states)state[def.id]=phase.coldDark?(def.cold||def.states[0]):(def.initial||def.states[0]);});
  return Object.assign(state,phase.initial||{});
}

function seatForRole(role){return role==="PF"?"CM2":"CM1";}
function seatSuffix(seat){return String(seat||"CM1").toLowerCase();}
function resolveControlId(id,seat){return id.replace("{seat}",seatSuffix(seat));}
function resolveStep(source,seat){
  return Object.assign({},source,{controls:source.controls.map(function(id){return resolveControlId(id,seat);})});
}
function getResolvedSteps(phaseId,role,seat){
  const phase=PHASE_BY_ID[phaseId];
  if(!phase||!phase.roles[role]) return [];
  return phase.roles[role].map(function(item){return resolveStep(item,seatForRole(role));});
}
function accepts(stepDef,value,controlId){
  if(stepDef.any) return true;
  if(stepDef.acceptByControl&&stepDef.acceptByControl[controlId]) return stepDef.acceptByControl[controlId].indexOf(value)!==-1;
  return (stepDef.accept||["CHECK"]).indexOf(value)!==-1;
}
function createRun(phaseId,role,seat){
  const fixedSeat=seatForRole(role);
  const steps=getResolvedSteps(phaseId,role,fixedSeat);
  if(!steps.length) throw new Error("No flow actions for this phase and role");
  return {phaseId:phaseId,role:role,seat:fixedSeat,steps:steps,index:0,doneControls:new Set(),correct:0,incorrect:0,outOfOrder:0,hints:0,reveals:0,history:[],complete:false};
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

function expectedInputs(run){return run.steps.reduce(function(sum,item){return sum+(item.completeAny?1:item.controls.length);},0);}

function initBrowser(){
  const $=function(id){return document.getElementById(id);};
  if(!$('phaseGrid')) return;
  let selectedPhase=FLOW_PHASES[0].id;
  let selectedRole="PF";
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
  }
  function renderBrief(){
    const phase=PHASE_BY_ID[selectedPhase];
    const actions=phase.roles[selectedRole]||[];
    $("phaseBrief").innerHTML='<strong>'+phase.title+' · '+selectedRole+' / '+seatForRole(selectedRole)+'</strong><span>'+actions.length+' source actions'+(phase.note?' · '+phase.note:'')+'</span>';
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
    CONTROL_DEFS.forEach(function(def){const layer=document.querySelector('.control-layer[data-layer="'+def.panel+'"]');if(layer)layer.appendChild(renderControl(def));});
    resetControlStates();
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
  function applyInitial(phase){const state=getInitialControlState(phase.id);Object.keys(state).forEach(function(id){setState(id,state[id]);});refreshPowerState();}
  function refreshPowerState(){
    const powerIds=["elec_bat_1","elec_bat_2","elec_ext_pwr","elec_apu_gen","elec_gen_1","elec_gen_2"];
    const powered=powerIds.some(function(id){return controlState[id]&&controlState[id]!=="OFF";});
    if($("trainer"))$("trainer").dataset.power=powered?"on":"off";
    if($("powerState")){$("powerState").className="power-state "+(powered?"powered":"cold-dark");$("powerState").textContent=powered?"AIRCRAFT POWERED":"COLD & DARK · ALL POWER OFF";}
  }

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
    $("controlDock").hidden=true;
  }
  function startRun(){
    activeRun=createRun(selectedPhase,selectedRole);revealed=selectedMode==="guided";
    applyInitial(PHASE_BY_ID[selectedPhase]);clearControlGrades();
    $("setup").hidden=true;$("trainer").hidden=false;$("completion").hidden=true;
    $("runTitle").textContent=PHASE_BY_ID[selectedPhase].title.toUpperCase();
    $("runMeta").textContent=selectedRole+" · "+seatForRole(selectedRole)+" · "+selectedMode.toUpperCase();
    $("flowDrawer").open=selectedMode==="guided";
    showFeedback("neutral","FLOW ARMED",activeRun.steps.length+" actions loaded from the supplied flow card."+(PHASE_BY_ID[selectedPhase].coldDark?" Aircraft state: cold and dark.":""));
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

const api={FLOW_PHASES:FLOW_PHASES,CONTROL_DEFS:CONTROL_DEFS,createRun:createRun,gradeInput:gradeInput,getResolvedSteps:getResolvedSteps,expectedInputs:expectedInputs,seatForRole:seatForRole,getInitialControlState:getInitialControlState};
if(typeof module!=="undefined"&&module.exports) module.exports=api;
if(root) root.A320FlowTrainer=api;
if(typeof document!=="undefined"){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initBrowser);else initBrowser();}

})(typeof window!=="undefined"?window:globalThis);
