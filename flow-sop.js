(function(root){
'use strict';
// SOP text takes precedence over the older tasksharing summary in this compilation.
function apply(phases){
 const by=Object.fromEntries(phases.map(p=>[p.id,p]));
 const action=(label,target,controls,accept,page,extra)=>Object.assign({label,target,panel:'checks',controls:[].concat(controls),accept:accept||['CHECK'],sourcePages:[page]},extra||{});
 const check=(label,target,control,page,extra)=>action(label,target,control,null,page,Object.assign({conditional:true},extra));
 const checklist=(name,page)=>check(name+' CHECKLIST','COMPLETE WITH OTHER CREW MEMBER','prep_checklist',page);
 const branch=(step,departure)=>Object.assign(step,{departure});
 const pages={
  'cockpit-preparation':[3195,3196,3197,3198,3199,3200,3201,3202,3203,3204,3205,3206,3207,3208,3209,3210,3211,3212,3213,3214,3215,3216,3217,3218,3219],
  'before-start':[3221,3222,3223,3224,3225,3226], 'engine-start':[3230,3231,3232],
  'after-start':[3237,3239,3240,3241,3242],taxi:[3249,3250,3251,3252,3253,3254],
  'line-up':[3269,3270,3271,3272], 'climb-acceleration':[3278,3280,3281,3282],
  'after-takeoff':[3283], 'ten-thousand-climb':[3289,3290], 'ten-thousand-descent':[3311,3313],
  'after-landing':[3381,3382,3383,3384,3385,3386],parking:[3390,3391,3392,3393,3394,3395,3396,3397],securing:[3399,3400,3401]
 };
 const insertBefore=(steps,label,newSteps)=>{const i=steps.findIndex(s=>s.label===label);if(i<0)throw Error('SOP insertion missing '+label);steps.splice(i,0,...newSteps);};
 const prep=by['cockpit-preparation'];
 prep.roles.PM.unshift(check('EXTERIOR WALKAROUND','COMPLETED UNDER SOP-05 BEFORE FMS CROSSCHECK','sop_prerequisites',3195));
 for(const role of ['PF','PM']){
  prep.roles[role].unshift(check('PRELIMINARY PREPARATION','SOP-02 TO SOP-05 SAFETY, POWER, ADIRS, ACCEPTANCE AND PERFORMANCE PREPARATION COMPLETED','sop_prerequisites',3195));
  const steps=prep.roles[role];
  steps.find(s=>s.label==='DEPARTURE BRIEFING').sourcePages=[3219];
  steps.find(s=>s.label==='COCKPIT PREPARATION CHECKLIST').sourcePages=[3219];
  insertBefore(steps,'COCKPIT PREPARATION CHECKLIST',[check('MAINTENANCE PC / PRINTER','IF FITTED: STOWED, MANUAL SWITCH LIGHT OFF','ground_services',3219)]);
 }
 insertBefore(prep.roles.PF,'FMS DATA',[check('FMS POWER-UP TESTS','ALLOW 3 MIN FOR TESTS; WAIT FOR PLEASE WAIT TO CLEAR BEFORE PRESSING MCDU KEYS','sop_timing',3206)]);
 insertBefore(prep.roles.PF,'FMS INIT',[
  check('AIRCRAFT / ENGINE / DATABASE','VERIFY TYPE, VALID DATABASE AND STORED DATA','fmgs_complete_{seat}',3207),
  check('IDLE / PERF FACTOR','CHECK APPLICABLE FACTORS','fmgs_complete_{seat}',3208),
  check('NAVAID DESELECTION','DESELECT UNRELIABLE NAVAIDS PER NOTAMS','fmgs_complete_{seat}',3208)
 ]);
 insertBefore(prep.roles.PF,'FMS FLIGHT PLAN',[check('IRS POSITION INITIALIZATION','CONFIRM OR INSERT COORDINATES AS APPROPRIATE TO INSTALLED SYSTEM','irs_align_{seat}',3210)]);
 insertBefore(prep.roles.PF,'FMS PERFORMANCE',[
  action('FMS INIT B','OPEN INIT FOR WEIGHT / FUEL ENTRIES','mcdu_{seat}_init',null,3211),
  check('ZFW / ZFWCG / BLOCK FUEL','INSERT AFTER OTHER ROUTE ENTRIES; CHECK WEIGHT AND FUEL DATA','fmgs_complete_{seat}',3211)
 ]);
 insertBefore(prep.roles.PF,'FMS PREPARATION',[
  check('TAKEOFF DATA','CHECK SHIFT AS REQUIRED, V1 / VR / V2, THRUST DATA, THR RED / ACC / EO ACC AND FLAPS / THS','fmgs_complete_{seat}',3212),
  check('SPEED PRESELECTION','CLIMB / CRUISE / DESCENT AS REQUIRED','fmgs_complete_{seat}',3212),
  check('DESTINATION QNH PRE-ENTRY','IF APPLICABLE TO AIRCRAFT: INSERT QNH IN PERF APPR','fmgs_complete_{seat}',3213)
 ]);
 // Before clearance and at clearance are deliberately separate blocks.
 const bs=by['before-start'];bs.initial.park_brake='ON';
 bs.note='SOP-07: complete the pre-clearance checks, then obtain ATC and ground clearance. Choose pushback or stationary start. Conventional/towbarless pushback is represented; powerpush and single-engine taxi require their separate procedures.';
 const load=role=>[
  check('FINAL LOADSHEET','CHECK FLIGHT, AIRCRAFT, WEIGHTS, INDEX, FUEL AND CONFIGURATION','sop_loadsheet',3221),
  check('ZFW / ZFWCG',role==='PF'?'CHECK / REVISE FMS DATA':'CROSSCHECK FMS DATA AND TAKEOFF CG LIMITS','fmgs_complete_{seat}',3221),
  check('FUEL ON BOARD','CHECK ECAM / FUEL PAGE AGAINST FLIGHT PLAN AND LOADSHEET','fuel_quantity',3221),
  check('CHANGED TAKEOFF CONDITIONS','IF CHANGED: INDEPENDENTLY RECOMPUTE PERFORMANCE; '+(role==='PF'?'REVISE FMS TAKEOFF DATA':'CROSSCHECK REVISED DATA AGAINST EFB'),'fmgs_check_{seat}',3221),
  ...(role==='PM'?[check('GREEN DOT','IF PERFORMANCE RECOMPUTED: COMPARE EFB / MCDU','green_dot_{seat}',3222)]:[]),
  check('SEATING / RESTRAINTS','ADJUST SEAT, BELTS, HARNESS, PEDALS AND ARMRESTS','sop_prerequisites',3222),
  action('MCDU PAGE',role==='PF'?'SELECT PERF TAKEOFF':'SELECT F-PLN',role==='PF'?'mcdu_{seat}_perf':'mcdu_{seat}_f_pln',null,3222)
 ];
 const doors=()=>[
  action('WINDOW','CHECK CLOSED / LOCKED; RED INDICATOR VISIBLE','windows_{seat}',['CLOSED'],3224),
  action('CABIN DOORS','CHECK CLOSED ON ECAM','cabin_doors',['CLOSED'],3224),
  check('COCKPIT DOOR','CHECK CLOSED / LOCKED AS REQUIRED BY AUTHORITY','door_test',3224),
  action('SLIDES','CHECK ARMED ON ECAM','doors_slides',['ARMED'],3224)
 ];
 bs.roles.PF=[...load('PF'),check('START / PUSHBACK CLEARANCE','ATC AND GROUND CREW CLEARANCE CONFIRMED BEFORE BEACON ON','ground_clearance',3223),
  action('BEACON','ON','beacon',['ON'],3224),...doors(),action('THRUST LEVERS','IDLE',['thrust_lever_1','thrust_lever_2'],['IDLE'],3224),
  check('ACCU PRESS','GREEN BAND; OBTAIN GROUND CLEARANCE BEFORE USING YELLOW PUMP IF RECHARGE NEEDED','accu_press',3225),
  branch(action('PARK BRAKE','ON — NO PUSHBACK','park_brake',['ON'],3225),'stationary'),
  branch(check('BRAKE PRESSURE','CHECK NORMAL INDICATIONS','brake_pressure',3225),'stationary'),
  branch(check('NW STRG DISC','CHECK DISPLAYED; TOW PIN CONFIRMED. DO NOT START DURING PUSHBACK IF MEMO ABSENT','nw_strg_memo',3225),'pushback'),
  checklist('BEFORE START',3225),
  branch(action('PARK BRAKE','OFF FOR PUSHBACK AFTER CHECKLIST','park_brake',['OFF'],3226),'pushback'),
  branch(check('PUSHBACK COMPLETED','CONFIRM COMPLETED BEFORE APPLYING PARKING BRAKE; NO BRAKING DURING PUSHBACK EXCEPT EMERGENCY','ground_clearance',3226),'pushback'),
  branch(action('PARK BRAKE','ON WHEN PUSHBACK COMPLETED','park_brake',['ON'],3226),'pushback'),
  branch(check('BRAKE PRESSURE','CHECK NORMAL; REQUEST TOWBAR DISCONNECTION','brake_pressure',3226),'pushback')
 ];
 bs.roles.PM=[...load('PM'),check('AIR CONDITIONING UNITS','CHECK DISCONNECTED','ground_services',3222),
  check('EXTERNAL POWER TRANSFER','ESTABLISH SUITABLE ALTERNATE ELECTRICAL SUPPLY BEFORE DESELECTING EXTERNAL POWER','sop_prerequisites',3222),
  action('EXTERNAL POWER','DESELECT — VERIFY AVAIL BEFORE REQUESTING DISCONNECTION','elec_ext_pwr',['OFF'],3222),
  check('EXTERNAL POWER DISCONNECTION','CHECK AVAIL, THEN REQUEST DISCONNECTION; NEVER REQUEST WITH ON LIGHT','ground_services',3222),
  check('PUSHBACK / START CLEARANCE','OBTAIN ATC AND GROUND CREW CLEARANCE','ground_clearance',3223),
  check('ATC','SET FOR OPERATION PER AIRPORT REQUIREMENTS','atc_mode',3224),...doors(),checklist('BEFORE START',3225)
 ];
 const eng=by['engine-start'];
 eng.note='Two-engine taxi departure: SOP-08 specifies engine 1 then engine 2. This supersedes the older engine-2-first tasksharing table. IAE effectivity: PDF pp.3230–3232. Engine indications are observed self-checks; this is not an automatic-start simulation.';
 eng.roles.PF=[check('START PREREQUISITES','CLEARANCE, GROUND SAFETY AND PNEUMATIC / ELECTRICAL SOURCES ESTABLISHED','sop_prerequisites',3230),
  action('THRUST LEVERS','IDLE',['thrust_lever_1','thrust_lever_2'],['IDLE'],3230),action('ENGINE MODE','IGN/START','eng_mode',['IGN/START'],3230)];
 for(const n of [1,2])eng.roles.PF.push(
  check('ENGINE '+n+' START','ANNOUNCE','ground_clearance',n===1?3230:3232),
  check('ENGINE '+n+' DISPLAY READY','AMBER CROSSES EXCEPT N1 / N2 AND MESSAGES CLEARED ON ENGINE DISPLAYS','sop_engine_monitor',3232),
  action('ENGINE '+n+' MASTER','ON','eng_master_'+n,['ON'],3232),
  check('ENGINE '+n+' START MONITOR','OBSERVE N2, START VALVE, BLEED / OIL PRESSURE, IGNITION, FUEL FLOW, EGT AND N1 PER IAE SOP-08','sop_engine_monitor',3232),
  check('ENGINE '+n+' IDLE','CHECK APPLICABLE IDLE PARAMETERS / AVAIL BEFORE CONTINUING','engine_idle',3232)
 );
 const aft=by['after-start'];
 aft.note='Both engines started. IAE warm-up: after shutdown longer than 2 h, operate at idle or near idle for at least 5 min before high power. Takeoff configuration and icing exceptions require the briefing.';
 aft.roles.PF[0].sourcePages=[3239];
 aft.roles.PF.find(s=>s.label==='ECAM STATUS').target='CROSSCHECK NO STS REMINDER; IF PRESENT REVIEW STATUS';
 aft.roles.PM.find(s=>s.label==='ECAM STATUS').target='CHECK NO STS REMINDER; IF PRESENT SELECT STATUS';
 const fl=aft.roles.PM.findIndex(s=>s.label==='FLAPS');
 aft.roles.PM.splice(fl+1,0,check('FLAP POSITION','CHECK ECAM AGAINST SELECTED TAKEOFF CONFIGURATION; ICING DELAY EXCEPTION APPLIES','sop_flap_position',3241));
 for(const role of ['PF','PM'])aft.roles[role].at(-1).sourcePages=[3242];
 const taxi=by.taxi;
 taxi.roles.PF=taxi.roles.PF.filter(s=>s.label!=='DEPARTURE BRIEFING');
 taxi.roles.PM=taxi.roles.PM.filter(s=>!['DEPARTURE BRIEFING','FMS FLIGHT PLAN / SPEED'].includes(s.label));
 taxi.roles.PF[0]=action('TAXI LIGHTS','NOSE TAXI / RWY TURN OFF ON',['ext_nose','ext_rwy_turnoff'],null,3249,{acceptByControl:{ext_nose:['TAXI'],ext_rwy_turnoff:['ON']}});
 taxi.roles.PF.splice(2,0,check('BRAKE PRESSURE','CHECK ZERO AFTER PARKING BRAKE RELEASE','brake_pressure',3249));
 taxi.roles.PM.splice(2,0,check('BRAKE PRESSURE','CHECK ZERO DURING BRAKE CHECK — IAE EFFECTIVITY MSN 01204–02290','brake_pressure',3249));
 const sq=taxi.roles.PM.findIndex(s=>s.label==='SQUAWK');
 taxi.roles.PM[sq]=check('ATC CODE / MODE','CONFIRM / SET FOR TAKEOFF',['squawk','atc_mode'],3252);
 taxi.roles.PM.find(s=>s.label==='T.O CONFIG pb').target='TEST; OBSERVE T.O CONFIG NORMAL ON EWD';
 for(const role of ['PF','PM'])taxi.roles[role].push(check('CABIN REPORT','RECEIVE CABIN READY INDICATION OR PURSER REPORT','sop_cabin_report',3254),checklist('TAXI',3254));
 taxi.note='Both engines taxi. Flight-control check may be completed at a convenient stage before or during taxi. STROBE ON when crossing a runway. If departure changes, apply SOP-10B separately.';
 const line=by['line-up'];
 line.roles.PM.unshift(check('BRAKE FANS','IF ON: APPLY AIRCRAFT-SPECIFIC TEMPERATURE LIMIT / DELAY TAKEOFF AS REQUIRED, THEN OFF','brake_fan',3270),check('LINE-UP CLEARANCE','OBTAIN','ground_clearance',3270));
 line.roles.PF[line.roles.PF.length-1]=action('STROBE','ON TO ENTER OR CROSS RUNWAY','ext_strobe',['ON'],3271);
 for(const role of ['PF','PM']){
  const stow=check('SLIDING TABLE / EFB','STOW TABLE AND UNMOUNTED EFB; TRANSMITTING MODE PER OPERATOR POLICY','sop_prerequisites',3272);
  if(role==='PM')insertBefore(line.roles.PM,'CABIN CREW',[stow]);else line.roles.PF.push(stow);
  line.roles[role].push(checklist('LINE-UP',3272));
 }
 line.note='SOP-11 before takeoff. STROBE ON at runway entry. NOSE T.O, RWY TURN OFF ON and LAND ON belong to SOP-12 at takeoff clearance, outside this line-up flow. Packs / APU bleed must match performance; APU bleed is not authorized with wing anti-ice.';
 const accel=by['climb-acceleration'];
 accel.title='S-speed Cleanup';accel.short='S-SPEED CLEANUP';
 accel.note='SOP-12 subset beginning at S speed on PF order for FLAPS 0. F-speed FLAPS 1, takeoff, gear retraction, thrust reduction and pack restoration are preceding actions outside this subset.';
 accel.roles.PM.splice(3,1,action('NOSE / RWY TURN OFF','OFF',['ext_nose','ext_rwy_turnoff'],['OFF'],3282),check('OTHER EXTERIOR LIGHTS','AS REQUIRED; LAND MAY REMAIN ON PER POLICY',['ext_strobe','beacon','ext_wing','ext_nav_logo','land_light_l','land_light_r'],3282));
 const ato=by['after-takeoff'];ato.roles.PM.forEach(s=>s.sourcePages=[3283]);
 ato.roles.PM.find(s=>s.label==='ENGINE MODE').target='IGN/START IN SEVERE TURBULENCE OR HEAVY RAIN; OTHERWISE AS REQUIRED';
 ato.roles.PM.find(s=>s.label==='ANTI ICE').target='ENG AS REQUIRED IN ICING EXCEPT CLIMB / CRUISE SAT BELOW -40 C; WING AS REQUIRED / ON WITH EVIDENCE OF ICE';
 const climb=by['ten-thousand-climb'];
 climb.roles.PM.splice(-1,1,check('NAVAIDS','CLEAR MANUALLY TUNED VORS','mcdu_{seat}_rad_nav',3290),check('SECONDARY FLIGHT PLAN','AS REQUIRED; RECOPY ACTIVE PLAN IF IMMEDIATE RETURN PLAN USED','mcdu_{seat}_sec_f_pln',3290),check('OPT FL / REC MAX FL','CHECK ON PROG PAGE','mcdu_{seat}_prog',3290));
 const descent=by['ten-thousand-descent'];
 descent.roles.PF.splice(-1,1,check('NAVAIDS','TUNE / IDENTIFY APPROPRIATE NAVAIDS; MANUALLY SELECT REFERENCE FOR NDB APPROACH','mcdu_{seat}_rad_nav',3311),check('NAVIGATION ACCURACY','IF GPS PRIMARY LOST: MONITOR REQUIRED ACCURACY ON PROG PAGE','mcdu_{seat}_prog',3313));
 descent.roles.PM.at(-1).target='IGN/START FOR STANDING WATER OR EXPECTED HEAVY RAIN / SEVERE TURBULENCE IN APPROACH OR GO-AROUND';
 descent.roles.PF.push(check('APPROACH-SPECIFIC NAVIGATION','FOR FINAL APP / FPA: CHECK NAV ACCURACY; FOR RNAV CHECK GPS PRIMARY; APPLY APPROACH-SPECIFIC BARO CROSSCHECK','fmgs_check_{seat}',3341,{sourcePages:[3341,3352,3353]}));
 for(const role of ['PF','PM'])descent.roles[role].push(checklist('APPROACH',3313));
 descent.note='10,000 ft AAL portion of SOP-17. Descent preparation, descent initiation/monitoring and transition-level altimeter setting are separate preceding procedures. Landing-light selection follows airline policy / regulatory recommendation.';
 const landing=by['after-landing'];
 const ai=landing.roles.PM.find(s=>s.label==='ANTI ICE');ai.controls=['anti_ice_eng_1','anti_ice_eng_2'];ai.sourcePages=[3384];
 landing.roles.PM.push(check('BRAKE TEMPERATURE','MONITOR WHEEL PAGE FOR DISCREPANCIES / HIGH TEMPERATURE; APPLY AIRCRAFT-SPECIFIC MAINTENANCE CRITERIA','sop_brake_temp',3385),check('BRAKE FANS','AS REQUIRED; APPLY AIRCRAFT-SPECIFIC TIMING / TEMPERATURE CRITERIA','brake_fan',3386));
 for(const role of ['PF','PM'])landing.roles[role].push(checklist('AFTER LANDING',3386));
 const park=by.parking;
 park.roles.PF.splice(2,0,check('BRAKE PRESSURE','KEEP PEDALS PRESSED UNTIL BOTH NEEDLES ABOVE GREEN AREA; VERIFY PRESSURE','brake_pressure',3390));
 park.roles.PF.find(s=>s.label==='ENGINE COOLING / POWER').target='AT LEAST 3 MIN AT / NEAR IDLE SINCE HIGH THRUST; CHECK APU AVAIL OR EXT PWR AVAIL THEN SELECT EXT PWR ON';
 const stop=park.roles.PF.findIndex(s=>s.label==='ALL ENG MASTER LEVERS');
 park.roles.PF[stop]=action('ALL ENG MASTER LEVERS','OFF AFTER COOLING / POWER PREREQUISITES',['eng_master_1','eng_master_2'],['OFF'],3391);
 park.roles.PF.splice(stop+1,0,check('ENGINE PARAMETERS','CHECK DECREASING; WAIT UNTIL ALL ENGINES SPOOLED DOWN BEFORE BEACON OFF','sop_engine_monitor',3392));
 park.roles.PF.find(s=>s.label==='GROUND CONTACT').target='ESTABLISH COMMUNICATION; CHECK CHOCKS IN PLACE';
 park.roles.PM.find(s=>s.label==='APU BLEED pb-sw').target='IF APU USED: ON IMMEDIATELY BEFORE ENGINE SHUTDOWN';
 park.roles.PM.find(s=>s.label==='FUEL PUMPS / CTR TRANSFER CONTROLS').conditional=false;
 park.roles.PM.find(s=>s.label==='FUEL PUMPS / CTR TRANSFER CONTROLS').accept=['OFF'];
 park.roles.PM.find(s=>s.label==='IRS PERFORMANCE').conditional=true;
 park.roles.PM.find(s=>s.label==='IRS PERFORMANCE').target='CHECK POSITION MONITOR DEVIATION AGAINST SOP-22 TABLE FOR ACCUMULATED BLOCK TIME';
 park.roles.PM.find(s=>s.label==='FUEL QUANTITY').target='CHECK FOB + FUEL USED AGAINST DEPARTURE FOB; UNUSUAL DISCREPANCY REQUIRES MAINTENANCE';
 park.roles.PM.push(action('ECAM STATUS','SELECT FOR LOGBOOK — CM1','ecam_sts',null,3397),check('LOGBOOK','COMPLETE ACCORDING TO STATUS PAGE — CM1','sop_logbook',3397));
 for(const role of ['PF','PM'])park.roles[role].push(check('EFB','TRANSMITTING MODE AS REQUIRED; CLOSE FLIGHT','efb_close_{seat}',3397),check('DISPLAY UNITS','DIM EFIS, ECAM AND MCDU','brightness_{seat}',3397));
 const sec=by.securing;
 sec.note='SOP-23 crew-station duties: CM1/PM and CM2/PF in this training allocation. Last passenger has left; secure per company policy. Apply relevant adverse-weather supplementary procedures first. Timing and colleague actions are explicit self-checks.';
 sec.roles.PM[0]=action('PARK BRAKE','CHECK ON','park_brake',['ON'],3399);
 sec.roles.PM.splice(1,0,check('SLATS / FLAPS','ENSURE RETRACTED BEFORE ALL ADIRS OFF; AFTER ICING / SLUSH / SNOW FIRST CONFIRM GROUND CLEARANCE AFTER ENGINE SHUTDOWN','sop_flap_position',3383));
 sec.roles.PM.splice(3,0,check('ADIRS DATA SAVE','WAIT AT LEAST 10 S AFTER ALL IR OFF BEFORE ELECTRICAL SUPPLY OFF; COORDINATE WITH CM2','sop_timing',3399));
 insertBefore(sec.roles.PF,'EXTERNAL POWER',[check('ADIRS POWER-OFF COORDINATION','CONFIRM CM1 SET ALL IR OFF AND AT LEAST 10 S ELAPSED BEFORE REMOVING ELECTRICAL SUPPLY','sop_timing',3399)]);
 insertBefore(sec.roles.PF,'BATTERIES',[check('APU FLAP','CONFIRM FULLY CLOSED — ABOUT 2 MIN AFTER APU AVAIL GOES OUT — BEFORE BATTERIES OFF','sop_timing',3400)]);
 for(const role of ['PF','PM'])sec.roles[role].unshift(check('SECURING PREREQUISITES','LAST PASSENGER HAS LEFT; SECURING INTENDED; RELEVANT ADVERSE-WEATHER PROCEDURES CONSIDERED','sop_prerequisites',3399));
 // Replace inherited tasksharing citations with SOP pages. Unmapped legacy items get
 // the reviewed chapter range, never a false single-page assertion.
 const legacyPages={
  'after-start':{'ENG MODE selector':3239,'APU BLEED pb-sw':3239,'ANTI ICE':3239,'APU MASTER SW':3240,'ECAM STATUS':3241,'NW STRG DISC MEMO':3241,'CLEAR TO DISCONNECT':3241,'GND SPLRS':3240,'RUDDER TRIM RESET':3240,'RUD TRIM':3240,'FLAPS':3241,'PITCH TRIM':3241},
  taxi:{'TAXI CLEARANCE':3249,'BRAKE FAN':3249,'PARK BRAKE':3249,'BRAKES':3249,'FLIGHT CONTROLS':3250,'ATC CLEARANCE':3250,'FCU ALTITUDE / HEADING':3250,'BOTH FLIGHT DIRECTORS':3250,'PFD / ND':3250,'AUTO BRK MAX':3251,'TERR ON ND':3252,'ENG MODE selector':3252,'RADAR / PWS':3253,'T.O CONFIG pb':3254,'T.O MEMO':3254},
  'line-up':{'TCAS mode selector':3270,'TAKEOFF RUNWAY':3270,'APPROACH PATH':3271,'PACKS 1 AND 2':3271,'CABIN CREW':3272},
  'climb-acceleration':{'FLAPS ZERO':3280,'GND SPLRS':3280,'L/G':3282},
  'ten-thousand-climb':{'EFIS OPTIONS':3289,'LAND L + R switches':3289,'SEAT BELT sw':3289,'ECAM MEMO':3290},
  'ten-thousand-descent':{'EFIS option pb':3311,'LAND L + R switches':3311,'SEAT BELTS':3311,'ILS / LS pb':3311,'ENG MODE selector':3313},
  'after-landing':{'GND SPLRS':3381,'EXTERIOR LIGHTS':3382,'OTHER EXTERIOR LIGHTS':3382,'RADAR / PWS':3382,'ENG MODE selector':3382,'FLAPS':3382,'TCAS / ATC':3383,'APU':3383},
  parking:{'ACCU PRESS':3390,'PARK BRAKE handle':3390,'YELLOW ELEC PUMP':3391,'ENGINE COOLING / POWER':3391,'WING / BEACON':3393,'OTHER EXTERIOR LIGHTS':3393,'SLIDES':3394,'SEAT BELTS sw':3394,'GROUND CONTACT':3395,'PARK BRAKE':3396,'PARKING CHECKLIST':3397,'ANTI ICE':3390,'APU BLEED pb-sw':3391,'FUEL PUMPS / CTR TRANSFER CONTROLS':3393,'ATC':3394,'IRS PERFORMANCE':3394,'FUEL QUANTITY':3396,'BRAKE FAN':3397},
  securing:{'IR MODE SELECTORS':3399,'OXYGEN CREW SUPPLY':3399,'EXTERIOR LIGHTS':3400,'MAINTENANCE BUS':3400,'APU BLEED':3400,'EXTERNAL POWER':3400,'APU MASTER':3400,'EMERGENCY EXIT LIGHTS':3400,'SIGNS':3400,'BATTERIES':3400,'CM1 WINDOW':3401,'CM2 WINDOW':3401,'SECURING CHECKLIST':3401,'EFB':3401}
 };
 const catalog=(root&&root.A320ControlCatalog)||(typeof require!=='undefined'?require('./a320-controls.js'):null);
 for(const p of phases){
  p.sopPages=pages[p.id];
  for(const steps of Object.values(p.roles))for(const s of steps){
   const page=legacyPages[p.id]?.[s.label];
   if(page)s.sourcePages=[page];
   if(!s.sourcePages?.length||s.sourcePages.some(n=>n>=3412))s.sourcePages=pages[p.id];
   const def=catalog.CONTROL_DEFS.find(c=>c.id===s.controls[0].replace('{seat}','cm2'));
   if(def)s.panel=def.panel;
   s.sourceRef='Ansett FCOM SOP · PDF pp. '+s.sourcePages.join(', ');
  }
 }
 return phases;
}
const api={apply};if(typeof module!=='undefined'&&module.exports)module.exports=api;if(root)root.A320SopAudit=api;
})(typeof window!=='undefined'?window:globalThis);
