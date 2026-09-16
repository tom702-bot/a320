(function(root){
'use strict';
function expand(phases){
 const by=Object.fromEntries(phases.map(p=>[p.id,p]));
 function a(label,target,panel,controls,accept,page,options){return Object.assign({label,target,panel,controls:Array.isArray(controls)?controls:[controls],accept:accept||['CHECK'],sourcePages:[page],sourceRef:'Ansett supplied FCOM · PDF p.'+page},options||{});}
 function conditional(label,target,panel,controls,page){return a(label,target,panel,controls,null,page,{conditional:true});}
 const prep=by['cockpit-preparation'];
 prep.coldDark=false;
 prep.initial={apu_master:'OFF',apu_bleed:'OFF',elec_ext_pwr:'ON',elec_bat_1:'AUTO',elec_bat_2:'AUTO',eng_master_1:'OFF',eng_master_2:'OFF',eng_mode:'NORM',park_brake:'ON',beacon:'OFF',rcdr_gnd_ctl:'OFF',ext_nav_logo:'1'};
 prep.note='Detailed cockpit-preparation scan. Start after preliminary cockpit preparation, with external power available and connected. The PF prepares overhead, centre panel and pedestal while PM completes the walkaround, then both perform their own-side checks. Flight-specific entries and observed indications remain explicit self-checks.';
 const ownSide=[
  conditional('BAROMETRIC REFERENCE','SET QNH / CROSSCHECK BRIEFED VALUE','flightdeck',['baro_{seat}','baro_value_{seat}'],3215),
  a('FD','CHECK ON','flightdeck','fd_{seat}',['ON'],3215),
  conditional('LS','AS REQUIRED FOR DEPARTURE','flightdeck','ls_{seat}',3215),
  conditional('ND MODE / RANGE','SET FOR DEPARTURE','flightdeck',['efis_mode_{seat}','efis_range_{seat}'],3215),
  conditional('ADF / VOR POINTERS','AS REQUIRED','flightdeck',['efis_vor1_{seat}','efis_vor2_{seat}'],3215)
 ];
 const lateral=[
  conditional('GROUND PERSONNEL','INFORM BEFORE OXYGEN MASK TEST','checks','ground_clearance',3216),
  a('OXYGEN MASK','TEST','checks','oxygen_mask_{seat}',null,3216),
  a('DOOR / OXY PAGE','SELECT','pedestal','ecam_door',null,3216),
  conditional('REGUL LO PR','CHECK NOT DISPLAYED AFTER ALL MASK TESTS','flightdeck','regul_lo_pr',3216),
  conditional('PFD / ND BRIGHTNESS','SET; ND OUTER RING MAX','flightdeck','brightness_{seat}',3217),
  conditional('LOUDSPEAKER','SET AROUND 1 O\'CLOCK','checks','speaker_{seat}',3217),
  conditional('PFD','CHECK FMA, TARGET ALT, AIRSPEED, ATTITUDE, BARO AND VSI','flightdeck','pfd_check_{seat}',3217),
  conditional('ND','CHECK HEADING, WAYPOINT AND NAVAIDS','flightdeck','nd_check_{seat}',3217)
 ];
 prep.roles.PF=[
  conditional('OVERHEAD ANNUNCIATIONS','CHECK WHITE LIGHTS OFF EXCEPT MAINTENANCE / OPERATOR EXCEPTIONS; ONLY GEN FAULT AMBER','overhead','overhead_lights',3197),
  a('RCDR GND CTL','ON','overhead','rcdr_gnd_ctl',['ON'],3197),
  a('PARK BRAKE','CHECK ON FOR CVR TEST','pedestal','park_brake',['ON'],3197),
  a('LOUDSPEAKERS','OFF BOTH SIDES FOR CVR TEST','checks',['speaker_cm1','speaker_cm2'],['OFF'],3197),
  a('ACP INT / RAD','INT BOTH ACPs','pedestal',['acp_int_rad_cm1','acp_int_rad_cm2'],['INT'],3197),
  a('INTERPHONE RECEPTION','RELEASE / MINIMUM VOLUME','pedestal',['acp_int_vol_cm1','acp_int_vol_cm2'],['RELEASE MIN'],3197),
  a('CVR TEST','PRESS AND MAINTAIN; CHECK AUDIO TEST SIGNAL','overhead','cvr_test',null,3197),
  conditional('EVAC','CAPT / CAPT & PURS PER COMPANY POLICY','overhead','evac_capt',3198),
  a('STROBE','AUTO','overhead','ext_strobe',['AUTO'],3198),
  a('BEACON','OFF','overhead','beacon',['OFF'],3198),
  conditional('NAV & LOGO','1 AS REQUIRED; 2 ONLY IF 1 FAILS','overhead','ext_nav_logo',3198),
  conditional('REMAINING EXTERIOR LIGHTS','AS REQUIRED','overhead',['ext_wing','land_light_l','land_light_r','ext_nose','ext_rwy_turnoff'],3198),
  conditional('SEAT BELTS','ON WHEN REFUELLING COMPLETE','overhead','seat_belts',3198),
  a('EMER EXIT LIGHTS','ARM','overhead','emer_exit_lt',['ARM'],3198),
  conditional('OTHER SIGNS','AS REQUIRED','overhead','no_smoking',3198),
  a('PROBE / WINDOW HEAT','AUTO','overhead','probe_window_heat',['AUTO'],3199),
  a('LANDING ELEVATION','AUTO','overhead','ldg_elev',['AUTO'],3199),
  conditional('PACK FLOW','AS REQUIRED FOR OCCUPANTS / CONDITIONS / INSTALLED STANDARD','overhead','pack_flow',3199),
  a('ECAM ELEC','SELECT ELEC PAGE','pedestal','ecam_elec',null,3200),
  a('BAT 1 / BAT 2','OFF','overhead',['elec_bat_1','elec_bat_2'],['OFF'],3200),
  a('BAT 1 / BAT 2','AUTO','overhead',['elec_bat_1','elec_bat_2'],['AUTO'],3200),
  conditional('BATTERY CHARGING','AFTER 10 S: EACH CURRENT BELOW 60 A AND DECREASING; OTHERWISE WAIT / RECHECK','flightdeck','battery_charge',3200),
  conditional('FUEL CENTRE MODE','AUTO OR APPLICABLE LOW-CENTRE-FUEL PROCEDURE; VERIFY INSTALLED STANDARD','overhead','fuel_mode_sel',3200),
  a('ENGINE FIRE PUSHBUTTONS','CHECK IN AND GUARDED','overhead',['eng_1_fire','eng_2_fire'],['IN'],3201),
  conditional('AGENT LIGHTS','CHECK OFF','overhead',['eng_1_agents','eng_2_agents'],3201),
  a('ENG 1 FIRE TEST','PRESS AND MAINTAIN; CHECK WARNINGS / LIGHTS','overhead','eng_1_fire_test',null,3201),
  a('ENG 2 FIRE TEST','PRESS AND MAINTAIN; CHECK WARNINGS / LIGHTS','overhead','eng_2_fire_test',null,3201),
  a('AUDIO SWITCHING','NORM','overhead','audio_switch',['NORM'],3201),
  conditional('CARGO TEMPERATURE','AS REQUIRED IF FITTED','overhead','cargo_temp',3201),
  a('THIRD OCCUPANT PA','RECEPT; VOLUME AT LEAST MEDIUM','overhead','third_pa',['RECEPT'],3202),
  conditional('MAINTENANCE PANEL','CHECK LIGHTS','overhead','maint_lights',3202),
  conditional('STANDBY INSTRUMENTS / ISIS','CHECK READINGS, SETTINGS, ATTITUDE AND FLAGS PER FIT','flightdeck','standby_check',3202),
  conditional('CLOCK','CHECK / SET UTC AND DATE','flightdeck','clock_check',3203),
  a('A/SKID & N/W STRG','ON','flightdeck','askid_nw',['ON'],3203),
  a('RMP 1 / RMP 2','CHECK ON','pedestal',['rmp_cm1_power','rmp_cm2_power'],['ON'],3203),
  conditional('RMP NAV / SEL LIGHTS','CHECK OFF','pedestal',['rmp_cm1_lights','rmp_cm2_lights'],3203),
  conditional('COM FREQUENCIES','TUNE BRIEFED FREQUENCIES','pedestal',['rmp_cm1_tune','rmp_cm2_tune'],3203),
  conditional('ACP INTERPHONE','PRESS OUT / VOLUME CHECK FOR GROUND CONTACT','pedestal','acp_int_vol_{seat}',3204),
  conditional('VHF','CHECK TRANSMISSION / RECEPTION','pedestal','vhf_check_{seat}',3204),
  conditional('HF','CHECK IF REQUIRED; NO HF TRANSMISSION DURING REFUELLING','pedestal','hf_check_{seat}',3204),
  conditional('COCKPIT DOOR TEST','FUNCTION / MECHANICAL OVERRIDE CHECK AS REQUIRED','checks','door_test',3204),
  a('COCKPIT DOOR','NORM','pedestal','cockpit_door',['NORM'],3204),
  a('SWITCHING PANEL','ALL SELECTORS NORM','pedestal',['switch_att_hdg','switch_air_data','switch_dmc','switch_ecam'],['NORM'],3204),
  a('THRUST LEVERS','IDLE','pedestal',['thrust_lever_1','thrust_lever_2'],['IDLE'],3205),
  a('ENGINE MASTERS','OFF','pedestal',['eng_master_1','eng_master_2'],['OFF'],3205),
  a('ENGINE MODE','NORM','pedestal','eng_mode',['NORM'],3205),
  conditional('ACCU PRESS','CHECK GREEN BAND','flightdeck','accu_press',3205),
  conditional('PARK BRAKE','CHECK ON; APPLY HOT-BRAKE / CHOCK EXCEPTION WHEN REQUIRED','pedestal','park_brake',3205),
  conditional('BRAKE PRESSURE','CHECK NORMAL INDICATIONS','flightdeck','brake_pressure',3205),
  a('GRAVITY GEAR EXTENSION','CHECK STOWED','pedestal','gravity_gear',['STOWED'],3205),
  a('ATC','STBY','pedestal','atc_mode',['STBY'],3205),
  a('TCAS','STBY','pedestal','tcas_mode',['STBY'],3205),
  a('ALTITUDE REPORTING','ON','pedestal','atc_alt_rptg',['ON'],3205),
  conditional('ATC SYSTEM','SELECT PER AP / RVSM REQUIREMENTS','pedestal','atc_xpdr',3205),
  a('ATC MESSAGES','ERASE PREVIOUS FLIGHT MESSAGES','pedestal','msg_erase_{seat}',null,3206),
  conditional('ADS','CHECK ARMED IF INSTALLED','pedestal','ads_{seat}',3206),
  a('FMS DATA','OPEN STATUS FOR AIRCRAFT / ENGINE TYPE AND DATABASE CHECK','pedestal','mcdu_{seat}_data',null,3207),
  a('FMS INIT','OPEN / ENTER BRIEFED INITIALISATION','pedestal','mcdu_{seat}_init',null,3209),
  a('FMS FLIGHT PLAN','OPEN / PREPARE BRIEFED ROUTE','pedestal','mcdu_{seat}_f_pln',null,3210),
  a('FMS SECONDARY PLAN','OPEN / PREPARE AS APPROPRIATE','pedestal','mcdu_{seat}_sec_f_pln',null,3211),
  a('FMS RADIO NAV','OPEN / CHECK REQUIRED NAVAIDS','pedestal','mcdu_{seat}_rad_nav',null,3211),
  a('FMS PERFORMANCE','OPEN / ENTER TAKEOFF PERFORMANCE','pedestal','mcdu_{seat}_perf',null,3212),
  conditional('FMS PREPARATION','REVIEW ALL DATA AGAINST BRIEFING; PAGE SELECTION ALONE DOES NOT VERIFY ENTRIES','pedestal','fmgs_complete_{seat}',3214),
  ...ownSide,
  a('FCU SPEED','DASHED / MANAGED','flightdeck','fcu_spd',['MANAGED'],3216),
  a('FLYING REFERENCE','HDG-V/S','flightdeck','fcu_reference',['HDG-V/S'],3216),
  conditional('FCU ALTITUDE','INITIAL EXPECTED CLEARANCE ALTITUDE','flightdeck','fcu_alt_value',3216),
  ...lateral,
  a('ECAM PRESS','SELECT','pedestal','ecam_press',null,3218),
  conditional('LDG ELEV INDICATION','CHECK AUTO','flightdeck','ldg_elev_check',3218),
  a('ECAM STATUS','SELECT STS','pedestal','ecam_sts',null,3218),
  conditional('STATUS','CHECK COMPATIBLE WITH MEL','flightdeck','ecam_status',3218),
  conditional('FUEL ON BOARD','CHECK PLAN / BALANCE / UPLIFT CONSISTENCY','flightdeck','fuel_quantity',3218),
  conditional('DEPARTURE BRIEFING','PERFORM WITH OTHER CREW MEMBER','checks','departure_brief',3416),
  conditional('COCKPIT PREPARATION CHECKLIST','COMPLETE WITH OTHER CREW MEMBER','checks','prep_checklist',3416)
 ];
 prep.roles.PM=[
  conditional('FMS PREPARATION','CROSSCHECK PF DATA AGAINST PLAN / EFB','pedestal','fmgs_check_{seat}',3214),
  conditional('GREEN DOT','COMPARE EFB / MCDU','pedestal','green_dot_{seat}',3214),
  ...ownSide,...lateral,
  conditional('IRS ALIGNMENT','CHECK NAV, POSITION DIFFERENCE AND AIRPORT CONSISTENCY','pedestal','irs_align_{seat}',3218),
  conditional('FUEL ON BOARD','CHECK PLAN / BALANCE / UPLIFT CONSISTENCY','flightdeck','fuel_quantity',3218),
  conditional('DEPARTURE BRIEFING','PERFORM WITH OTHER CREW MEMBER','checks','departure_brief',3416),
  conditional('COCKPIT PREPARATION CHECKLIST','COMPLETE WITH OTHER CREW MEMBER','checks','prep_checklist',3416)
 ];
 // Separate cabin-door closure from slide arming; one state cannot establish both.
 ['PF','PM'].forEach(role=>{const arr=by['before-start'].roles[role];const i=arr.findIndex(s=>s.controls.includes('doors_slides'));arr.splice(i,0,a('CABIN DOORS','CHECK CLOSED','checks','cabin_doors',['CLOSED'],3417));});
 phases.splice(phases.findIndex(p=>p.id==='after-start'),0,{
  id:'engine-start',title:'Engine Start',short:'ENGINE START',note:'Start clearance and required pneumatic / electrical sources must be established. Engine response and idle parameters require observation; this is the PF control sequence, not a dynamic engine-start simulation.',
  initial:{eng_master_1:'OFF',eng_master_2:'OFF',eng_mode:'NORM',thrust_lever_1:'IDLE',thrust_lever_2:'IDLE',apu_master:'ON',apu_bleed:'ON',elec_ext_pwr:'OFF',elec_apu_gen:'AUTO'},
  roles:{PF:[a('THRUST LEVERS','IDLE','pedestal',['thrust_lever_1','thrust_lever_2'],['IDLE'],3417),a('ENGINE MODE','IGN/START','pedestal','eng_mode',['IGN/START'],3417),conditional('ENGINE 2 START','ANNOUNCE / CONFIRM START CLEARANCE','checks','ground_clearance',3417),a('ENGINE 2 MASTER','ON','pedestal','eng_master_2',['ON'],3417),conditional('ENGINE 2 IDLE','CHECK ACTUAL IDLE PARAMETERS','flightdeck','engine_idle',3417),conditional('ENGINE 1 START','ANNOUNCE REPEATED START SEQUENCE','checks','ground_clearance',3417),a('ENGINE 1 MASTER','ON','pedestal','eng_master_1',['ON'],3417),conditional('ENGINE 1 IDLE','CHECK ACTUAL IDLE PARAMETERS','flightdeck','engine_idle',3417)]}
 });
 phases.splice(phases.findIndex(p=>p.id==='ten-thousand-climb'),0,{
  id:'after-takeoff',title:'After Takeoff',short:'AFTER TAKEOFF',note:'Apply the APU actions only if APU air conditioning was used for takeoff. TCAS TA/RA restoration applies if takeoff used TA ONLY.',
  roles:{PM:[conditional('APU BLEED','OFF IF APU SUPPLIED AIR CONDITIONING DURING TAKEOFF','overhead','apu_bleed',3421),conditional('APU MASTER','OFF IF APU SUPPLIED AIR CONDITIONING DURING TAKEOFF','overhead','apu_master',3421),conditional('ENGINE MODE','AS REQUIRED','pedestal','eng_mode',3421),conditional('TCAS','TA/RA IF TAKEOFF USED TA ONLY','pedestal','tcas_mode',3421),conditional('ANTI ICE','AS REQUIRED','overhead',['anti_ice_eng_1','anti_ice_wing','anti_ice_eng_2'],3421)]}
 });
 phases.push({id:'securing',title:'Securing the Aircraft',short:'SECURING',note:'Source assigns these duties by crew station: CM1 (this training allocation PM), CM2 (PF). Power disconnection follows the applicable ground-service plan.',
 roles:{PM:[conditional('PARK BRAKE','ON SUBJECT TO PARKING CONDITIONS','pedestal','park_brake',3432),a('IR MODE SELECTORS','OFF','overhead',['adirs_ir_1','adirs_ir_2','adirs_ir_3'],['OFF'],3432),a('CM1 WINDOW','CHECK CLOSED','checks','windows_cm1',['CLOSED'],3432),conditional('SECURING CHECKLIST','COMPLETE WITH OTHER CREW MEMBER','checks','securing_checklist',3432),conditional('EFB','CLOSE APPLICATIONS THEN SWITCH OFF ALL EFBs','checks','efb_close_{seat}',3432)],
 PF:[a('OXYGEN CREW SUPPLY','OFF','overhead','oxygen_crew',['OFF'],3432),a('EXTERIOR LIGHTS','OFF / LANDING LIGHTS RETRACT','overhead',['ext_strobe','beacon','ext_wing','ext_nav_logo','land_light_l','land_light_r','ext_nose','ext_rwy_turnoff'],null,3432,{acceptByControl:{ext_strobe:['OFF'],beacon:['OFF'],ext_wing:['OFF'],ext_nav_logo:['OFF'],land_light_l:['RETRACT'],land_light_r:['RETRACT'],ext_nose:['OFF'],ext_rwy_turnoff:['OFF']}}),conditional('MAINTENANCE BUS','AS REQUIRED','overhead','maintenance_bus',3432),a('APU BLEED','OFF','overhead','apu_bleed',['OFF'],3432),conditional('EXTERNAL POWER','AS REQUIRED','overhead','elec_ext_pwr',3432),a('APU MASTER','OFF','overhead','apu_master',['OFF'],3432),a('EMERGENCY EXIT LIGHTS','OFF','overhead','emer_exit_lt',['OFF'],3432),a('SIGNS','OFF','overhead',['seat_belts','no_smoking'],['OFF'],3432),a('BATTERIES','OFF','overhead',['elec_bat_1','elec_bat_2'],['OFF'],3432),a('CM2 WINDOW','CHECK CLOSED','checks','windows_cm2',['CLOSED'],3432),conditional('SECURING CHECKLIST','COMPLETE WITH OTHER CREW MEMBER','checks','securing_checklist',3432),conditional('EFB','CLOSE APPLICATIONS THEN SWITCH OFF ALL EFBs','checks','efb_close_{seat}',3432)]}});

 // Expand the previous scan subsets with the surrounding tasksharing actions.
 const checklist=(label,page)=>conditional(label,'COMPLETE WITH OTHER CREW MEMBER','checks','prep_checklist',page);
 by['before-start'].roles.PM.unshift(conditional('GROUND SERVICES','AIR CONDITIONING UNITS DISCONNECTED; CHECK EXT PWR AVAIL AND REQUEST DISCONNECTION AS APPLICABLE','checks','ground_services',3417),conditional('PUSHBACK / START CLEARANCE','OBTAIN','checks','ground_clearance',3417));
 const bs=by['before-start'].roles.PF;bs.splice(bs.length-1,0,conditional('ACCU PRESS','CHECK','flightdeck','accu_press',3417),conditional('NW STRG DISC','IF PUSHBACK REQUIRED: CHECK DISPLAYED','flightdeck','nw_strg_memo',3417));
 ['PF','PM'].forEach(role=>by['before-start'].roles[role].push(checklist('BEFORE START CHECKLIST',3417)));
 by['after-start'].roles.PF.push(conditional('CLEAR TO DISCONNECT','ANNOUNCE TO GROUND CREW','checks','ground_clearance',3418));
 const as=by['after-start'].roles.PM;as.splice(1,0,a('RUDDER TRIM RESET','OPERATE RESET','pedestal','rudder_reset',null,3239));const trim=as.findIndex(s=>s.controls.includes('pitch_trim'));as[trim]=conditional('PITCH TRIM','SET BRIEFED TAKEOFF VALUE','pedestal','pitch_trim_value',3239);
 ['PF','PM'].forEach(role=>by['after-start'].roles[role].push(checklist('AFTER START CHECKLIST',3418)));
 by.taxi.roles.PF.unshift(conditional('EXTERIOR LIGHTS','SET FOR TAXI CONDITIONS','overhead',['ext_nose','ext_rwy_turnoff'],3418),a('PARK BRAKE','OFF ON TAXI CLEARANCE','pedestal','park_brake',['OFF'],3418),conditional('BRAKES','CHECK RESPONSE','flightdeck','brakes_check',3418),conditional('FLIGHT CONTROLS','PERFORM FULL CONTROL CHECK','flightdeck','flight_controls_check',3418),conditional('PFD / ND','CHECK','flightdeck',['pfd_check_{seat}','nd_check_{seat}'],3418),conditional('DEPARTURE BRIEFING','CONFIRM','checks','departure_brief',3418));
 by.taxi.roles.PM.unshift(conditional('TAXI CLEARANCE','OBTAIN','checks','ground_clearance',3418),conditional('BRAKE FAN','AS REQUIRED','flightdeck','brake_fan',3418),conditional('FLIGHT CONTROLS','CHECK','flightdeck','flight_controls_check',3418),conditional('ATC CLEARANCE','CONFIRM','checks','ground_clearance',3418),conditional('FMS FLIGHT PLAN / SPEED','CHECK','pedestal','fmgs_check_{seat}',3418),conditional('FCU ALTITUDE / HEADING','SET PER CLEARANCE','flightdeck',['fcu_alt_value','fcu_hdg_value'],3418),a('BOTH FLIGHT DIRECTORS','CHECK ON','flightdeck',['fd_cm1','fd_cm2'],['ON'],3418),conditional('PFD / ND','CHECK','flightdeck',['pfd_check_{seat}','nd_check_{seat}'],3418),conditional('DEPARTURE BRIEFING','CONFIRM','checks','departure_brief',3418));
 const landing=by['after-landing'].roles.PF;landing.splice(1,1,a('EXTERIOR LIGHTS','AFTER VACATING: LAND RETRACT, STROBE AUTO, NOSE TAXI','overhead',['land_light_l','land_light_r','ext_strobe','ext_nose'],null,3381,{acceptByControl:{land_light_l:['RETRACT'],land_light_r:['RETRACT'],ext_strobe:['AUTO'],ext_nose:['TAXI']}}),conditional('OTHER EXTERIOR LIGHTS','AS REQUIRED; SET STROBE ON FOR RUNWAY CROSSING','overhead',['ext_wing','ext_nav_logo','ext_rwy_turnoff','beacon'],3381));
 const park=by.parking.roles.PF;const stop=park.findIndex(s=>s.controls.includes('eng_master_1'));park.splice(stop,0,conditional('ENGINE COOLING / POWER','VERIFY REQUIRED COOLING; CONFIRM EXT PWR ON OR APU AVAIL','checks','engine_cooling',3432));
 const light=park.findIndex(s=>s.label==='EXTERIOR LIGHTS');park.splice(light,1,a('WING / BEACON','OFF AFTER ENGINE PARAMETERS CHECK','overhead',['ext_wing','beacon'],['OFF'],3432),conditional('OTHER EXTERIOR LIGHTS','AS REQUIRED','overhead',['ext_strobe','ext_nav_logo','land_light_l','land_light_r','ext_nose','ext_rwy_turnoff'],3432));
 park.push(conditional('GROUND CONTACT','ESTABLISH','checks','ground_clearance',3432),conditional('PARK BRAKE','AS REQUIRED FOR GROUND HANDLING','pedestal','park_brake',3432),checklist('PARKING CHECKLIST',3432));
 by.parking.roles.PM.push(conditional('BRAKE FAN','AS REQUIRED','flightdeck','brake_fan',3432),checklist('PARKING CHECKLIST',3432));
 phases.forEach(phase=>Object.values(phase.roles).forEach(steps=>steps.forEach(s=>{if(s.contextRule==='anti-ice')delete s.completeAny;})));
 phases.forEach(phase=>Object.values(phase.roles).forEach(steps=>steps.forEach(s=>{if(!s.sourcePages)s.sourcePages=phase.sourcePages||[];})));
 return phases;
}
const api={expand};if(typeof module!=='undefined'&&module.exports)module.exports=api;if(root)root.A320FlowProcedures=api;
})(typeof window!=='undefined'?window:globalThis);
