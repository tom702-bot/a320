(function(root,factory){
  const catalog=factory();
  if(typeof module!=="undefined"&&module.exports) module.exports=catalog;
  if(root) root.A320ControlCatalog=catalog;
})(typeof window!=="undefined"?window:globalThis,function(){
"use strict";

const controls=[];
function add(id,panel,label,short,kind,states,initial,cold,x,y,w,h,extra){
  controls.push(Object.assign({id:id,panel:panel,label:label,short:short||label,kind:kind,states:states||null,initial:initial,cold:cold,x:x,y:y,w:w,h:h},extra||{}));
}
function pb(id,panel,label,short,x,y,w,h,initial,cold){add(id,panel,label,short,"pb",["OFF","ON"],initial||"OFF",cold||"OFF",x,y,w,h);}
function autoPb(id,panel,label,short,x,y,w,h,initial){add(id,panel,label,short,"pb",["OFF","AUTO"],initial||"AUTO","OFF",x,y,w,h);}
function sel(id,panel,label,short,states,initial,cold,x,y,w,h){add(id,panel,label,short,"selector",states,initial,cold,x,y,w,h);}
function lever(id,panel,label,short,states,initial,cold,x,y,w,h){add(id,panel,label,short,"lever",states,initial,cold,x,y,w,h);}
function check(id,panel,label,short,x,y,w,h,face,extra){add(id,panel,label,short,"check",null,null,null,x,y,w,h,Object.assign({face:face||"CHECK"},extra||{}));}
function momentary(id,panel,label,short,x,y,w,h){add(id,panel,label,short,"momentary",null,null,null,x,y,w,h);}

// OVERHEAD FORWARD — coordinates are percentages of the FlyByWire forward-overhead crop.
check("scan_overhead","overhead","OVERHEAD PANEL — SCAN COMPLETE","SCAN",1.4,1.5,8.8,5.2,"SCAN COMPLETE",{zone:true});
pb("adirs_adr_1","overhead","ADIRS — ADR 1","ADR 1",6.0,12.0,4.6,5.8,"ON","OFF");
pb("adirs_adr_2","overhead","ADIRS — ADR 2","ADR 2",12.1,12.0,4.6,5.8,"ON","OFF");
pb("adirs_adr_3","overhead","ADIRS — ADR 3","ADR 3",18.2,12.0,4.6,5.8,"ON","OFF");
sel("adirs_ir_1","overhead","ADIRS — IR 1 MODE","IR 1",["OFF","NAV","ATT"],"NAV","OFF",5.6,21.0,5.3,7.2);
sel("adirs_ir_2","overhead","ADIRS — IR 2 MODE","IR 2",["OFF","NAV","ATT"],"NAV","OFF",11.7,21.0,5.3,7.2);
sel("adirs_ir_3","overhead","ADIRS — IR 3 MODE","IR 3",["OFF","NAV","ATT"],"NAV","OFF",17.8,21.0,5.3,7.2);

pb("flt_ctl_elac_1","overhead","FLT CTL — ELAC 1","ELAC 1",5.3,39.1,4.6,5.3,"ON","OFF");
pb("flt_ctl_sec_1","overhead","FLT CTL — SEC 1","SEC 1",11.2,39.1,4.6,5.3,"ON","OFF");
pb("flt_ctl_fac_1","overhead","FLT CTL — FAC 1","FAC 1",17.1,39.1,4.6,5.3,"ON","OFF");
pb("flt_ctl_elac_2","overhead","FLT CTL — ELAC 2","ELAC 2",78.1,43.0,4.6,5.3,"ON","OFF");
pb("flt_ctl_sec_2","overhead","FLT CTL — SEC 2","SEC 2",84.0,43.0,4.6,5.3,"ON","OFF");
pb("flt_ctl_fac_2","overhead","FLT CTL — FAC 2","FAC 2",89.9,43.0,4.6,5.3,"ON","OFF");

sel("eng_1_fire","overhead","FIRE — ENG 1 FIRE","ENG 1 FIRE",["IN","PULLED"],"IN","IN",32.0,10.4,8.4,6.6);
sel("apu_fire","overhead","FIRE — APU FIRE","APU FIRE",["IN","PULLED"],"IN","IN",47.4,10.4,8.4,6.6);
sel("eng_2_fire","overhead","FIRE — ENG 2 FIRE","ENG 2 FIRE",["IN","PULLED"],"IN","IN",62.8,10.4,8.4,6.6);

autoPb("hyd_eng_1_pump","overhead","HYD — ENG 1 PUMP","ENG 1 PUMP",32.0,27.9,5.0,5.3,"AUTO");
momentary("hyd_rat_man_on","overhead","HYD — RAT MAN ON","RAT MAN",39.0,27.9,5.0,5.3);
autoPb("hyd_blue_elec_pump","overhead","HYD — BLUE ELEC PUMP","BLUE PUMP",46.0,27.9,5.0,5.3,"AUTO");
autoPb("hyd_ptu","overhead","HYD — PTU","PTU",53.0,27.9,5.0,5.3,"AUTO");
autoPb("hyd_eng_2_pump","overhead","HYD — ENG 2 PUMP","ENG 2 PUMP",60.0,27.9,5.0,5.3,"AUTO");
pb("yellow_pump","overhead","HYD — YELLOW ELEC PUMP","Y ELEC PUMP",67.0,27.9,5.0,5.3,"OFF","OFF");

pb("fuel_pump_l1","overhead","FUEL — LEFT TANK PUMP 1","L TK 1",27.2,36.1,4.6,5.2,"ON","OFF");
pb("fuel_pump_l2","overhead","FUEL — LEFT TANK PUMP 2","L TK 2",32.4,36.1,4.6,5.2,"ON","OFF");
pb("fuel_pump_ctr1","overhead","FUEL — CENTER TANK PUMP 1","CTR TK 1",41.1,36.1,4.6,5.2,"ON","OFF");
sel("fuel_mode_sel","overhead","FUEL — MODE SELECTOR","MODE SEL",["MAN","AUTO"],"AUTO","MAN",46.3,36.1,4.6,5.2);
pb("fuel_pump_ctr2","overhead","FUEL — CENTER TANK PUMP 2","CTR TK 2",51.5,36.1,4.6,5.2,"ON","OFF");
pb("fuel_pump_r1","overhead","FUEL — RIGHT TANK PUMP 1","R TK 1",60.2,36.1,4.6,5.2,"ON","OFF");
pb("fuel_pump_r2","overhead","FUEL — RIGHT TANK PUMP 2","R TK 2",65.4,36.1,4.6,5.2,"ON","OFF");
pb("fuel_x_feed","overhead","FUEL — X FEED","X FEED",46.3,33.3,4.6,2.6,"OFF","OFF");

pb("elec_commercial","overhead","ELEC — COMMERCIAL","COMMERCIAL",24.9,45.5,5.2,5.2,"ON","OFF");
pb("elec_galley_cab","overhead","ELEC — GALY & CAB","GALY/CAB",24.9,51.2,5.2,5.2,"ON","OFF");
autoPb("elec_gen_1","overhead","ELEC — GEN 1","GEN 1",32.6,52.1,4.8,5.2,"AUTO");
autoPb("elec_apu_gen","overhead","ELEC — APU GEN","APU GEN",43.9,52.1,4.8,5.2,"AUTO");
pb("elec_ext_pwr","overhead","ELEC — EXT PWR","EXT PWR",55.2,52.1,4.8,5.2,"OFF","OFF");
autoPb("elec_gen_2","overhead","ELEC — GEN 2","GEN 2",66.5,52.1,4.8,5.2,"AUTO");
autoPb("elec_bat_1","overhead","ELEC — BAT 1","BAT 1",43.1,44.3,4.8,5.2,"AUTO");
autoPb("elec_bat_2","overhead","ELEC — BAT 2","BAT 2",49.0,44.3,4.8,5.2,"AUTO");
autoPb("elec_ac_ess_feed","overhead","ELEC — AC ESS FEED","AC ESS FEED",57.4,45.6,5.1,5.2,"AUTO");
autoPb("elec_bus_tie","overhead","ELEC — BUS TIE","BUS TIE",48.8,56.0,4.8,3.0,"AUTO");

sel("pack_flow","overhead","AIR COND — PACK FLOW","PACK FLOW",["LO","NORM","HI"],"NORM","LO",29.5,59.2,5.8,6.2);
sel("temp_cockpit","overhead","AIR COND — COCKPIT TEMPERATURE","CKPT TEMP",["COLD","NORM","HOT"],"NORM","COLD",41.3,59.2,5.8,6.2);
sel("temp_fwd","overhead","AIR COND — FORWARD CABIN TEMPERATURE","FWD TEMP",["COLD","NORM","HOT"],"NORM","COLD",49.0,59.2,5.8,6.2);
sel("temp_aft","overhead","AIR COND — AFT CABIN TEMPERATURE","AFT TEMP",["COLD","NORM","HOT"],"NORM","COLD",56.7,59.2,5.8,6.2);
autoPb("air_hot_air","overhead","AIR COND — HOT AIR","HOT AIR",67.3,59.2,4.8,5.2,"AUTO");
pb("pack_1","overhead","AIR COND — PACK 1","PACK 1",27.6,68.3,4.8,5.2,"ON","OFF");
momentary("ram_air","overhead","AIR COND — RAM AIR","RAM AIR",37.3,68.3,4.8,5.2);
autoPb("eng_1_bleed","overhead","AIR COND — ENG 1 BLEED","ENG 1 BLEED",45.0,68.3,4.8,5.2,"AUTO");
pb("apu_bleed","overhead","AIR COND — APU BLEED","APU BLEED",52.3,68.3,4.8,5.2,"ON","OFF");
sel("x_bleed","overhead","AIR COND — X BLEED","X BLEED",["SHUT","AUTO","OPEN"],"AUTO","SHUT",59.5,68.3,5.2,6.2);
autoPb("eng_2_bleed","overhead","AIR COND — ENG 2 BLEED","ENG 2 BLEED",67.2,68.3,4.8,5.2,"AUTO");
pb("pack_2","overhead","AIR COND — PACK 2","PACK 2",72.7,68.3,4.8,5.2,"ON","OFF");

pb("anti_ice_wing","overhead","ANTI ICE — WING","WING A-ICE",28.8,77.3,5.0,5.3,"OFF","OFF");
pb("anti_ice_eng_1","overhead","ANTI ICE — ENG 1","ENG 1 A-ICE",42.6,77.3,5.0,5.3,"OFF","OFF");
pb("anti_ice_eng_2","overhead","ANTI ICE — ENG 2","ENG 2 A-ICE",50.0,77.3,5.0,5.3,"OFF","OFF");
autoPb("probe_window_heat","overhead","PROBE/WINDOW HEAT","PROBE/WIN",60.5,77.3,5.0,5.3,"AUTO");
sel("cabin_press_mode","overhead","CABIN PRESS — MODE SEL","MODE SEL",["MAN","AUTO"],"AUTO","MAN",68.3,77.3,5.0,5.3);

sel("ext_strobe","overhead","EXT LT — STROBE","STROBE",["OFF","AUTO","ON"],"AUTO","OFF",28.1,88.3,4.8,7.1);
sel("beacon","overhead","EXT LT — BEACON","BEACON",["OFF","ON"],"OFF","OFF",33.6,88.3,4.8,7.1);
sel("ext_wing","overhead","EXT LT — WING","WING LT",["OFF","ON"],"OFF","OFF",39.1,88.3,4.8,7.1);
sel("ext_nav_logo","overhead","EXT LT — NAV & LOGO","NAV/LOGO",["OFF","1","2"],"2","OFF",44.6,88.3,4.8,7.1);
sel("land_light_l","overhead","EXT LT — LAND L","LAND L",["RETRACT","OFF","ON"],"OFF","RETRACT",56.2,88.3,4.8,7.1);
sel("ext_nose","overhead","EXT LT — NOSE","NOSE",["OFF","TAXI","T.O"],"OFF","OFF",61.7,88.3,4.8,7.1);
sel("ext_rwy_turnoff","overhead","EXT LT — RWY TURN OFF","RWY TURN",["OFF","ON"],"OFF","OFF",67.2,88.3,4.8,7.1);
sel("land_light_r","overhead","EXT LT — LAND R","LAND R",["RETRACT","OFF","ON"],"OFF","RETRACT",72.7,88.3,4.8,7.1);

pb("apu_master","overhead","APU — MASTER SW","APU MASTER",50.6,83.0,4.8,5.0,"OFF","OFF");
momentary("apu_start","overhead","APU — START","APU START",50.6,94.3,4.8,4.8);
sel("emer_exit_lt","overhead","SIGNS — EMER EXIT LT","EMER EXIT",["OFF","ARM","ON"],"ARM","OFF",78.2,85.0,5.0,6.2);
sel("no_smoking","overhead","SIGNS — NO SMOKING","NO SMOKING",["OFF","AUTO","ON"],"AUTO","OFF",84.2,85.0,5.0,6.2);
sel("seat_belts","overhead","SIGNS — SEAT BELTS","SEAT BELTS",["OFF","ON"],"ON","OFF",90.2,85.0,5.0,6.2);
momentary("calls_mech","overhead","CALLS — MECH","MECH",4.0,77.9,4.1,5.0);
momentary("calls_all","overhead","CALLS — ALL","ALL",8.6,77.9,4.1,5.0);
momentary("calls_att","overhead","CALLS — ATT","ATT",13.2,77.9,4.1,5.0);
momentary("calls_purs","overhead","CALLS — PURS","PURS",17.8,77.9,4.1,5.0);

// GLARESHIELD AND MAIN INSTRUMENT PANEL.
check("scan_glareshield_cm1","flightdeck","CM1 GLARESHIELD — SCAN COMPLETE","CM1 SCAN",1.2,1.6,9.8,5.2,"SCAN COMPLETE",{zone:true});
check("scan_glareshield_cm2","flightdeck","CM2 GLARESHIELD — SCAN COMPLETE","CM2 SCAN",89.0,1.6,9.8,5.2,"SCAN COMPLETE",{zone:true});
check("scan_center_instrument","flightdeck","CENTRE INSTRUMENT PANEL — SCAN COMPLETE","CENTRE SCAN",43.0,25.0,14.0,5.5,"SCAN COMPLETE",{zone:true});

pb("efis_cstr_cm1","flightdeck","CM1 EFIS — CSTR","CSTR",18.2,4.0,3.6,4.8,"OFF","OFF");
pb("efis_wpt_cm1","flightdeck","CM1 EFIS — WPT","WPT",22.2,4.0,3.6,4.8,"OFF","OFF");
pb("efis_vord_cm1","flightdeck","CM1 EFIS — VOR.D","VOR.D",26.2,4.0,3.6,4.8,"OFF","OFF");
pb("efis_ndb_cm1","flightdeck","CM1 EFIS — NDB","NDB",30.2,4.0,3.6,4.8,"OFF","OFF");
pb("efis_arpt_cm1","flightdeck","CM1 EFIS — ARPT","ARPT",34.2,4.0,3.6,4.8,"OFF","OFF");
pb("fd_cm1","flightdeck","CM1 EFIS — FD","FD",19.0,15.0,3.8,4.8,"ON","OFF");
pb("ls_cm1","flightdeck","CM1 EFIS — LS","LS",23.2,15.0,3.8,4.8,"OFF","OFF");
sel("efis_mode_cm1","flightdeck","CM1 EFIS — MODE","MODE",["ROSE ILS","ROSE VOR","ROSE NAV","ARC","PLAN"],"ARC","ROSE NAV",25.4,9.0,5.2,5.5);
sel("efis_range_cm1","flightdeck","CM1 EFIS — RANGE","RANGE",["10","20","40","80","160","320"],"40","10",31.0,9.0,5.2,5.5);
sel("baro_cm1","flightdeck","CM1 EFIS — BARO","BARO",["QNH","STD"],"QNH","QNH",14.2,9.0,4.8,6.0);

pb("efis_cstr_cm2","flightdeck","CM2 EFIS — CSTR","CSTR",70.0,4.0,3.2,4.8,"OFF","OFF");
pb("efis_wpt_cm2","flightdeck","CM2 EFIS — WPT","WPT",73.6,4.0,3.2,4.8,"OFF","OFF");
pb("efis_vord_cm2","flightdeck","CM2 EFIS — VOR.D","VOR.D",77.2,4.0,3.2,4.8,"OFF","OFF");
pb("efis_ndb_cm2","flightdeck","CM2 EFIS — NDB","NDB",80.8,4.0,3.2,4.8,"OFF","OFF");
pb("efis_arpt_cm2","flightdeck","CM2 EFIS — ARPT","ARPT",84.4,4.0,3.2,4.8,"OFF","OFF");
pb("fd_cm2","flightdeck","CM2 EFIS — FD","FD",82.0,15.0,3.8,4.8,"ON","OFF");
pb("ls_cm2","flightdeck","CM2 EFIS — LS","LS",86.2,15.0,3.8,4.8,"OFF","OFF");
sel("efis_mode_cm2","flightdeck","CM2 EFIS — MODE","MODE",["ROSE ILS","ROSE VOR","ROSE NAV","ARC","PLAN"],"ARC","ROSE NAV",73.2,9.0,5.2,5.5);
sel("efis_range_cm2","flightdeck","CM2 EFIS — RANGE","RANGE",["10","20","40","80","160","320"],"40","10",78.8,9.0,5.2,5.5);
sel("baro_cm2","flightdeck","CM2 EFIS — BARO","BARO",["QNH","STD"],"QNH","QNH",85.0,9.0,4.8,6.0);

sel("fcu_spd","flightdeck","FCU — SPD/MACH","SPD/MACH",["MANAGED","SELECTED"],"MANAGED","MANAGED",37.1,9.0,4.6,7.5);
sel("fcu_hdg","flightdeck","FCU — HDG/TRK","HDG/TRK",["MANAGED","SELECTED"],"MANAGED","MANAGED",45.3,9.0,4.6,7.5);
sel("fcu_alt","flightdeck","FCU — ALT","ALT",["MANAGED","SELECTED"],"MANAGED","MANAGED",56.4,9.0,4.6,7.5);
sel("fcu_vs","flightdeck","FCU — V/S FPA","V/S FPA",["V/S","FPA"],"V/S","V/S",64.4,9.0,4.6,7.5);
pb("fcu_ap1","flightdeck","FCU — AP 1","AP 1",45.0,17.2,3.8,4.4,"OFF","OFF");
pb("fcu_ap2","flightdeck","FCU — AP 2","AP 2",49.2,17.2,3.8,4.4,"OFF","OFF");
pb("fcu_athr","flightdeck","FCU — A/THR","A/THR",50.1,11.5,3.8,4.4,"OFF","OFF");
pb("fcu_loc","flightdeck","FCU — LOC","LOC",36.0,17.2,3.8,4.4,"OFF","OFF");
momentary("fcu_exped","flightdeck","FCU — EXPED","EXPED",58.2,17.2,3.8,4.4);
pb("fcu_appr","flightdeck","FCU — APPR","APPR",67.0,17.2,3.8,4.4,"OFF","OFF");

pb("terr_cm1","flightdeck","CM1 — TERR ON ND","TERR ND",25.5,53.5,4.8,6.0,"OFF","OFF");
pb("terr_cm2","flightdeck","CM2 — TERR ON ND","TERR ND",79.0,53.5,4.8,6.0,"OFF","OFF");
check("ecam_memo","flightdeck","UPPER ECAM — MEMO REVIEW","ECAM MEMO",43.3,34.0,13.4,12.0,"REVIEW",{zone:true});
check("to_memo","flightdeck","UPPER ECAM — T.O MEMO NO BLUE","T.O MEMO",43.3,47.0,13.4,8.0,"NO BLUE",{zone:true});
check("ecam_status","flightdeck","LOWER ECAM — STATUS CHECK","ECAM STATUS",43.3,61.0,13.4,10.0,"CHECK",{zone:true});
check("nw_strg_memo","flightdeck","ECAM MEMO — NW STRG DISC NOT DISPLAYED","NW STRG",43.3,72.0,13.4,8.0,"NOT DISPLAYED",{zone:true});
check("fuel_quantity","flightdeck","UPPER ECAM — FUEL QUANTITY CHECK","FUEL QTY",43.3,81.0,13.4,7.0,"CHECK",{zone:true});
pb("auto_brake_lo","flightdeck","AUTO BRK — LO","A/BRK LO",62.1,34.3,4.2,5.0,"OFF","OFF");
pb("auto_brake_med","flightdeck","AUTO BRK — MED","A/BRK MED",66.7,34.3,4.2,5.0,"OFF","OFF");
pb("auto_brake_max","flightdeck","AUTO BRK — MAX","A/BRK MAX",71.3,34.3,4.2,5.0,"OFF","OFF");
check("gear_check","flightdeck","LANDING GEAR — CHECK UP","L/G UP",64.0,55.0,6.5,9.0,"CHECK UP",{zone:true});
check("accu_press","flightdeck","BRAKE ACCUMULATOR PRESSURE — CHECK","ACCU PRESS",71.4,55.0,7.0,9.0,"CHECK",{zone:true});

// CENTRE PEDESTAL.
// MCDU function keys and line-select keys are individually operable.
const mcduFunctions=["DIR","PROG","PERF","INIT","DATA","F-PLN","RAD NAV","FUEL PRED","SEC F-PLN","ATC COMM","MCDU MENU","AIRPORT"];
function addMcdu(side,x0){
  const suffix=side.toLowerCase();
  for(let i=0;i<6;i++){
    momentary("mcdu_"+suffix+"_lsk_l"+(i+1),"pedestal",side+" MCDU — LSK L"+(i+1),"L"+(i+1),x0,4.7+i*2.75,2.2,2.3);
    momentary("mcdu_"+suffix+"_lsk_r"+(i+1),"pedestal",side+" MCDU — LSK R"+(i+1),"R"+(i+1),x0+18.1,4.7+i*2.75,2.2,2.3);
  }
  mcduFunctions.forEach(function(label,i){
    const row=Math.floor(i/6),col=i%6;
    momentary("mcdu_"+suffix+"_"+label.toLowerCase().replace(/[^a-z0-9]+/g,"_"),"pedestal",side+" MCDU — "+label,label,x0+2.5+col*2.55,16.6+row*2.0,2.3,1.7);
  });
  [["LEFT","←",x0+0.8,20.8],["RIGHT","→",x0+3.2,20.8],["UP","↑",x0+0.8,22.5],["DOWN","↓",x0+3.2,22.5]].forEach(function(k){momentary("mcdu_"+suffix+"_arrow_"+k[0].toLowerCase(),"pedestal",side+" MCDU — ARROW "+k[0],k[1],k[2],k[3],2.0,1.5);});
  const digits=["1","2","3","4","5","6","7","8","9",".","0","+/-"];
  digits.forEach(function(label,i){const row=Math.floor(i/3),col=i%3;momentary("mcdu_"+suffix+"_key_"+label.replace(/[^0-9]+/g,function(){return label==="."?"dot":"plus_minus";}),"pedestal",side+" MCDU — KEY "+label,label,x0+0.6+col*1.75,24.3+row*1.75,1.5,1.45);});
  const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").concat(["/","SP","OVFY","CLR"]);
  alpha.forEach(function(label,i){const row=Math.floor(i/5),col=i%5;momentary("mcdu_"+suffix+"_key_"+label.toLowerCase().replace(/[^a-z]+/g,function(){return label==="/"?"slash":label.toLowerCase();}),"pedestal",side+" MCDU — KEY "+label,label,x0+6.3+col*2.35,21.1+row*1.62,2.0,1.38);});
}
addMcdu("CM1",14.2);addMcdu("CM2",66.6);

sel("switch_att_hdg","pedestal","SWITCHING — ATT HDG","ATT HDG",["CAPT","NORM","F/O 3"],"NORM","NORM",38.0,3.5,4.4,6.0);
sel("switch_air_data","pedestal","SWITCHING — AIR DATA","AIR DATA",["CAPT 3","NORM","F/O 3"],"NORM","NORM",43.2,3.5,4.4,6.0);
sel("switch_dmc","pedestal","SWITCHING — EIS DMC","EIS DMC",["CAPT 3","NORM","F/O 3"],"NORM","NORM",48.4,3.5,4.4,6.0);
sel("switch_ecam","pedestal","SWITCHING — ECAM/ND XFR","ECAM XFR",["CAPT","NORM","F/O"],"NORM","NORM",53.6,3.5,4.4,6.0);

const ecamButtons=[
  ["eng","ENG",38.1,12.5],["bleed","BLEED",43.0,12.5],["press","PRESS",47.9,12.5],["elec","ELEC",52.8,12.5],["hyd","HYD",57.7,12.5],["fuel","FUEL",62.6,12.5],
  ["apu","APU",38.1,16.1],["cond","COND",43.0,16.1],["door","DOOR",47.9,16.1],["wheel","WHEEL",52.8,16.1],["fctl","F/CTL",57.7,16.1],["all","ALL",62.6,16.1],
  ["clr_l","CLR",38.1,19.7],["sts","STS",47.9,19.7],["rcl","RCL",52.8,19.7],["clr_r","CLR",62.6,19.7]
];
ecamButtons.forEach(function(v){momentary("ecam_"+v[0],"pedestal","ECAM CONTROL — "+v[1],v[1],v[2],v[3],3.9,3.0);});
momentary("to_config","pedestal","ECAM CONTROL — T.O CONFIG","T.O CONFIG",45.2,9.8,4.8,2.4);

// RMP controls used for frequency and radio setup.
[["cm1",3.0],["cm2",67.4]].forEach(function(spec){
  const s=spec[0],x=spec[1],prefix=s.toUpperCase()+" RMP — ";
  ["VHF 1","VHF 2","VHF 3","HF 1","HF 2","AM","NAV","VOR","ILS","MLS","ADF","BFO"].forEach(function(label,i){
    const row=Math.floor(i/6),col=i%6;
    momentary("rmp_"+s+"_"+label.toLowerCase().replace(/[^a-z0-9]+/g,"_"),"pedestal",prefix+label,label,x+col*4.2,34.2+row*4.1,3.7,3.3);
  });
});

lever("spoilers","pedestal","SPEED BRAKE / GROUND SPOILERS","SPEED BRK",["DISARMED","ARMED","1/4","1/2","3/4","FULL"],"DISARMED","DISARMED",22.0,74.3,7.0,13.0);
lever("thrust_lever_1","pedestal","THRUST LEVER 1","THR 1",["REV","IDLE","CL","FLX/MCT","TOGA"],"IDLE","IDLE",42.2,35.2,5.5,19.0);
lever("thrust_lever_2","pedestal","THRUST LEVER 2","THR 2",["REV","IDLE","CL","FLX/MCT","TOGA"],"IDLE","IDLE",52.3,35.2,5.5,19.0);
lever("flaps","pedestal","FLAPS LEVER","FLAPS",["0","1+F","2","3","FULL"],"0","0",68.2,74.3,7.0,13.0);
check("pitch_trim","pedestal","PITCH TRIM — SET","PITCH TRIM",46.8,55.0,6.4,5.0,"SET",{zone:true});
check("scan_pedestal","pedestal","CENTRE PEDESTAL — SCAN COMPLETE","PED SCAN",44.0,27.0,12.0,5.0,"SCAN COMPLETE",{zone:true});

sel("eng_master_1","pedestal","ENG — MASTER 1","ENG 1",["OFF","ON"],"ON","OFF",43.0,62.0,5.0,7.0);
sel("eng_mode","pedestal","ENG — MODE SELECTOR","ENG MODE",["CRANK","NORM","IGN/START"],"NORM","CRANK",48.5,62.0,5.0,7.0);
sel("eng_master_2","pedestal","ENG — MASTER 2","ENG 2",["OFF","ON"],"ON","OFF",54.0,62.0,5.0,7.0);

sel("wx_radar_system","pedestal","WX RADAR — SYSTEM","WXR SYS",["OFF","1","2"],"OFF","OFF",5.0,63.0,5.0,5.5);
sel("wx_radar_gain","pedestal","WX RADAR — GAIN","GAIN",["MIN","CAL","MAX"],"CAL","MIN",10.8,63.0,5.0,5.5);
sel("wx_radar_mode","pedestal","WX RADAR — MODE","WXR MODE",["WX","WX+T","MAP"],"WX","WX",16.6,63.0,5.0,5.5);
sel("wx_radar_tilt","pedestal","WX RADAR — TILT","TILT",["DOWN","0","UP"],"0","0",10.8,69.1,5.0,5.5);
sel("wx_pws","pedestal","WX RADAR — PRED W/S","PRED W/S",["OFF","AUTO"],"OFF","OFF",16.6,69.1,5.0,5.5);

sel("atc_mode","pedestal","ATC — MODE","ATC MODE",["STBY","AUTO","ON"],"STBY","STBY",75.4,62.5,3.5,3.6);
sel("atc_xpdr","pedestal","ATC — XPDR","XPDR",["1","2"],"1","1",75.4,66.5,3.5,3.6);
sel("atc_alt_rptg","pedestal","ATC — ALT RPTG","ALT RPTG",["OFF","ON"],"ON","OFF",75.4,70.5,3.5,3.6);
sel("tcas_mode","pedestal","TCAS — MODE","TCAS",["STBY","TA","TA/RA"],"STBY","STBY",79.3,70.5,3.5,3.6);
const atcCodeKeys=["1","2","3","4","5","6","7","0","CLR"];
atcCodeKeys.forEach(function(label,i){const row=Math.floor(i/3),col=i%3;momentary("atc_code_"+label.toLowerCase(),"pedestal","ATC — CODE "+label,label,79.3+col*3.0,62.5+row*2.6,2.5,2.2);});
check("squawk","pedestal","ATC — CODE DISPLAY CONFIRM / SET","SQUAWK",88.5,62.5,7.0,3.6,"CONFIRM / SET",{zone:true});
momentary("atc_ident","pedestal","ATC — IDENT","IDENT",88.5,66.5,3.5,3.6);

sel("rudder_trim","pedestal","RUD TRIM","RUD TRIM",["NOSE L","NEUTRAL","NOSE R"],"NEUTRAL","NEUTRAL",46.0,78.0,8.0,8.0);
check("rudder_neutral","pedestal","RUD TRIM — CHECK NEUTRAL","RUD NEUTRAL",54.5,78.0,8.0,8.0,"CHECK NEUTRAL",{zone:true});
sel("park_brake","pedestal","PARKING BRK","PARK BRK",["OFF","ON"],"OFF","ON",47.0,88.0,8.0,8.0);
sel("cockpit_door","pedestal","COCKPIT DOOR","CKPT DOOR",["UNLOCK","NORM","LOCK"],"NORM","NORM",23.0,88.0,10.0,7.0);

// WINDOWS / EXTERNAL CHECKS — non-panel flow actions use separate, non-overlapping check tiles.
sel("windows_cm1","checks","CM1 WINDOW","CM1 WINDOW",["OPEN","CLOSED"],"CLOSED","CLOSED",4.0,12.0,20.0,11.0);
check("scan_lateral_cm1","checks","CM1 LATERAL CONSOLE / PANEL — SCAN COMPLETE","CM1 LATERAL",4.0,64.0,20.0,11.0,"SCAN COMPLETE",{zone:true});
sel("windows_cm2","checks","CM2 WINDOW","CM2 WINDOW",["OPEN","CLOSED"],"CLOSED","CLOSED",76.0,12.0,20.0,11.0);
check("scan_lateral_cm2","checks","CM2 LATERAL CONSOLE / PANEL — SCAN COMPLETE","CM2 LATERAL",76.0,64.0,20.0,11.0,"SCAN COMPLETE",{zone:true});
sel("doors_slides","checks","CABIN DOORS / SLIDES","DOORS/SLIDES",["DISARMED","ARMED"],"ARMED","DISARMED",40.0,64.0,20.0,11.0);
check("takeoff_runway","checks","TAKEOFF RUNWAY — CONFIRM","RUNWAY",28.0,12.0,20.0,11.0,"CONFIRM",{zone:true});
check("approach_path","checks","APPROACH PATH — CLEAR OF TRAFFIC","APP PATH",52.0,12.0,20.0,11.0,"CLEAR OF TRAFFIC",{zone:true});

return {CONTROL_DEFS:controls};
});
