(function(root){
'use strict';
// Pixel rectangles measured against FlyByWire's original 1426 × 2744 cockpit atlas.
const atlas={overhead:{x:285,y:631,w:856,h:631},flightdeck:{x:0,y:1262,w:1426,h:439},pedestal:{x:285,y:1701,w:856,h:1043},aft:{x:285,y:0,w:856,h:631}};
function apply(controls){
 const by=Object.fromEntries(controls.map(c=>[c.id,c]));
 const mapped=new Set();
 function box(panel,id,cx,cy,w=24,h=24){const c=by[id];if(!c)throw Error('Unknown photo control '+id);const p=atlas[panel];Object.assign(c,{panel,x:(cx-w/2)/p.w*100,y:(cy-h/2)/p.h*100,w:w/p.w*100,h:h/p.h*100,photoMapped:true,extension:false,zone:false});mapped.add(id);}
 function oh(id,x,y,w=26,h=26){box('overhead',id,x,y,w,h);}
 const overhead={
 adirs_adr_1:[73,179],adirs_adr_2:[124,179],adirs_adr_3:[176,179],adirs_ir_1:[71,150,32,32],adirs_ir_2:[124,151,30,30],adirs_ir_3:[176,151,30,30],
 flt_ctl_elac_1:[77,259],flt_ctl_sec_1:[145,259],flt_ctl_fac_1:[178,259],flt_ctl_elac_2:[688,308],flt_ctl_sec_2:[750,308],flt_ctl_sec_3:[716,308],flt_ctl_fac_2:[783,308],
 eng_1_fire:[307,120,68,35],apu_fire:[429,111,63,32],eng_2_fire:[549,121,68,35],
 hyd_eng_1_pump:[306,198],hyd_rat_man_on:[366,199],hyd_blue_elec_pump:[430,198],hyd_ptu:[495,182],hyd_eng_2_pump:[555,198],yellow_pump:[600,182],
 fuel_pump_l1:[298,256,20,23],fuel_pump_l2:[322,256,20,23],fuel_pump_ctr1:[395,256],fuel_mode_sel:[428,230,20,18],fuel_pump_ctr2:[466,256],fuel_pump_r1:[549,256,20,23],fuel_pump_r2:[573,256,20,23],fuel_x_feed:[429,250,19,19],
 elec_commercial:[264,300,23,20],elec_galley_cab:[264,322,23,20],elec_gen_1:[307,355],elec_apu_gen:[377,355],elec_ext_pwr:[430,344],elec_gen_2:[554,355],elec_bat_1:[405,299,19,24],elec_bat_2:[426,299,19,24],elec_ac_ess_feed:[515,309],elec_bus_tie:[480,355],
 pack_flow:[269,403,33,33],temp_cockpit:[366,403,33,33],temp_fwd:[426,403,33,33],temp_aft:[493,403,33,33],air_hot_air:[585,403],pack_1:[261,434],ram_air:[375,434],eng_1_bleed:[307,460],apu_bleed:[373,460],x_bleed:[493,462,33,33],eng_2_bleed:[429,460],pack_2:[600,434],
 anti_ice_wing:[253,506],anti_ice_eng_1:[333,506],anti_ice_eng_2:[374,506],probe_window_heat:[430,506],cabin_press_mode:[518,507],ldg_elev:[563,510,35,35],cabin_vspeed:[483,507],ditching:[601,507],
 ext_strobe:[249,550,24,28],beacon:[289,550,24,28],ext_wing:[331,550,24,28],ext_nav_logo:[377,550,24,28],land_light_l:[296,586,20,28],land_light_r:[337,586,20,28],ext_nose:[377,586,24,28],ext_rwy_turnoff:[253,586,24,28],apu_master:[430,555],apu_start:[430,587],
 emer_exit_lt:[554,584],no_smoking:[512,587],seat_belts:[475,587],calls_mech:[70,507],calls_all:[128,507],calls_att:[158,507],calls_purs:[96,507],
 rcdr_gnd_ctl:[105,428],cvr_test:[183,426],evac_capt:[186,301],evac_command:[105,300],evac_horn:[146,302],ann_lt:[598,549],oxygen_crew:[182,469],
 eng_1_fire_test:[258,132,18,18],eng_2_fire_test:[610,132,18,18],eng_1_agent_1:[247,107,22,22],eng_1_agent_2:[365,107,22,22],eng_2_agent_1:[494,107,22,22],eng_2_agent_2:[613,107,22,22],apu_fire_test:[405,139,18,18],apu_agent:[452,139,20,20],
 wiper_cm1:[170,551,38,40],wiper_cm2:[697,558,38,40],dome:[554,550],vent_blower:[671,464],vent_extract:[709,464],gpws_terrain:[62,394],gpws_sys:[94,394],gpws_gs_mode:[124,394],gpws_flap_mode:[157,394],gpws_ldg_flap3:[189,394],third_pa:[739,40,18,18]
 };
 Object.entries(overhead).forEach(([id,p])=>oh(id,...p));
 box('aft','audio_switch',567,566,45,42);box('aft','maintenance_bus',763,51,28,32);
 // Main-panel coordinates below use the previous central crop, offset into the full-width artwork.
 function main(id,x,y,w=24,h=24){box('flightdeck',id,x+285,y,w,h);}
 const mainItems={
 fcu_spd:[340,69,30,29],fcu_hdg:[382,70,29,29],fcu_alt:[470,69,29,29],fcu_vs:[519,69,29,29],fcu_spd_value:[340,34,30,17],fcu_hdg_value:[382,34,32,17],fcu_alt_value:[474,34,48,17],fcu_reference:[432,52,18,16],fcu_ap1:[417,72,17,17],fcu_ap2:[439,72,17,17],fcu_athr:[428,96,19,14],fcu_loc:[383,97,18,14],fcu_exped:[470,97,18,14],fcu_appr:[519,97,18,14],
 fd_cm1:[214,96,18,14],ls_cm1:[195,96,18,14],efis_mode_cm1:[230,69,36,32],efis_range_cm1:[279,69,36,32],baro_cm1:[186,74,25,22],baro_value_cm1:[186,47,32,20],efis_vor1_cm1:[233,93,13,15],efis_vor2_cm1:[281,93,16,15],
 fd_cm2:[656,96,16,14],ls_cm2:[675,96,16,14],efis_mode_cm2:[575,69,36,32],efis_range_cm2:[624,69,36,32],baro_cm2:[668,74,25,22],baro_value_cm2:[668,47,32,20],efis_vor1_cm2:[574,94,16,15],efis_vor2_cm2:[625,94,16,15],
 auto_brake_lo:[546,165,13,17],auto_brake_med:[561,165,13,17],auto_brake_max:[577,165,16,17],brake_fan:[606,165,20,20],askid_nw:[606,193,24,25],gear_lever:[547,327,27,55],terr_cm1:[232,320,22,22],terr_cm2:[628,320,22,22],
 master_warning_cm1:[38,65,24,17],master_caution_cm1:[38,92,24,17],master_warning_cm2:[829,65,24,17],master_caution_cm2:[829,92,24,17],brightness_cm1:[-67,192,18,18],brightness_cm2:[922,192,18,18]
 };
 Object.entries(mainItems).forEach(([id,p])=>main(id,...p));
 ['cstr','wpt','vord','ndb','arpt'].forEach((key,i)=>{main('efis_'+key+'_cm1',216+i*17,43,15,13);main('efis_'+key+'_cm2',559+i*18,43,15,13);});
 function ped(id,x,y,w=22,h=22){box('pedestal',id,x,y,w,h);}
 // Every MCDU key is aligned to the original key, including the complete six-row line-select set.
 ['cm1','cm2'].forEach((seat,side)=>{
  const dx=side?440:0;
  for(let i=0;i<6;i++){ped('mcdu_'+seat+'_lsk_l'+(i+1),131+dx,60+i*14,15,10);ped('mcdu_'+seat+'_lsk_r'+(i+1),289+dx,60+i*14,15,10);}
  const fn=['dir','prog','perf','init','data','f_pln','rad_nav','fuel_pred','sec_f_pln','atc_comm','mcdu_menu','airport'];
  const positions=[[150,156],[170,156],[191,156],[212,156],[234,156],[150,171],[170,171],[191,171],[212,171],[234,171],[255,171],[149,184]];
  fn.forEach((k,i)=>ped('mcdu_'+seat+'_'+k,positions[i][0]+dx,positions[i][1],18,11));
  [['left',150,199],['right',171,199],['up',171,185],['down',171,213]].forEach(([k,x,y])=>ped('mcdu_'+seat+'_arrow_'+k,x+dx,y,18,11));
  ['1','2','3','4','5','6','7','8','9','dot','0','plus_minus'].forEach((k,i)=>ped('mcdu_'+seat+'_key_'+k,150+dx+i%3*17,230+Math.floor(i/3)*15,13,12));
  'abcdefghijklmnopqrstuvwxyz'.split('').concat(['slash','sp','ovfy','clr']).forEach((k,i)=>ped('mcdu_'+seat+'_key_'+k,201+dx+i%5*17.3,193+Math.floor(i/5)*16,14,12));
  const rmpKeys={vhf_1:[146,334],vhf_2:[167,334],vhf_3:[188,334],hf_1:[146,355],hf_2:[188,355],am:[209,355],nav:[146,380],vor:[167,380],ils:[188,380],mls:[209,380],adf:[230,380],bfo:[251,380]};
  Object.entries(rmpKeys).forEach(([k,[x,y]])=>ped('rmp_'+seat+'_'+k,x+dx,y,17,13));
  ped('rmp_'+seat+'_power',274+dx,374,17,24);ped('rmp_'+seat+'_transfer',208+dx,310,18,13);ped('rmp_'+seat+'_tune',240+dx,348,34,31);
  ['vhf1','vhf2','vhf3','hf1','hf2','int','pa'].forEach((k,i)=>{const coords=[[147,406],[166,406],[186,406],[206,406],[226,406],[248,406],[251,455]];ped('acp_'+seat+'_'+k,coords[i][0]+dx,coords[i][1],15,13);});
  ped('acp_int_rad_'+seat,155+dx,456,17,20);ped('acp_int_vol_'+seat,272+dx,431,17,17);
 });
 const pedestal={switch_att_hdg:[350,77,32,37],switch_air_data:[402,77,32,37],switch_dmc:[454,77,32,37],switch_ecam:[507,77,32,37],to_config:[398,115,20,15],
 spoilers:[333,689,35,90],flaps:[527,689,42,90],thrust_lever_1:[396,409,42,170],thrust_lever_2:[463,409,42,170],pitch_trim_value:[345,420,24,157],
 eng_master_1:[401,580,26,34],eng_master_2:[460,580,26,34],eng_mode:[430,617,32,31],
 wx_radar_system:[167,569,19,16],wx_radar_gain:[161,592,25,25],wx_radar_mode:[207,592,24,25],wx_radar_tilt:[259,598,26,34],wx_pws:[156,619,22,19],
 atc_mode:[587,578,25,23],atc_xpdr:[586,599,21,18],atc_alt_rptg:[586,618,21,18],tcas_mode:[671,619,20,20],atc_ident:[672,600,18,13],rudder_trim:[452,737,40,44],rudder_reset:[406,749,20,20],park_brake:[453,843,51,54],cockpit_door:[246,793,31,37],gravity_gear:[428,990,45,65]
 };
 Object.entries(pedestal).forEach(([id,p])=>ped(id,...p));
 ['eng','bleed','press','elec','hyd','fuel','apu','cond','door','wheel','fctl','all'].forEach((k,i)=>ped('ecam_'+k,371+i%6*25.5,139+Math.floor(i/6)*17,20,12));
 [['clr_l',371],['sts',448],['rcl',474],['clr_r',500]].forEach(([k,x])=>ped('ecam_'+k,x,174,20,12));
 ['1','2','3','4','5','6','7','0','clr'].forEach((k,i)=>ped('atc_code_'+k,610+i%3*20,581+Math.floor(i/3)*18,17,14));
 // Observation/data acknowledgements live in a separate tray, never on imaginary cockpit switches.
 const rowHeight=96/Math.ceil(controls.filter(c=>!mapped.has(c.id)).length/4);
 let n=0;controls.forEach(c=>{if(mapped.has(c.id))return;c.panel='checks';c.photoMapped=false;c.observation=true;c.extension=false;c.zone=false;c.x=2+n%4*24.5;c.y=2+Math.floor(n/4)*rowHeight;c.w=23;c.h=rowHeight-.6;n++;});
 return controls;
}
const api={atlas,apply};if(typeof module!=='undefined'&&module.exports)module.exports=api;if(root)root.A320PhotoLayout=api;
})(typeof window!=='undefined'?window:globalThis);
