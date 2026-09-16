(function(root){
'use strict';
const make=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls||'';if(text)e.textContent=text;return e;};
function screen(layer,cls,x,y,w,h){const e=make('div','native-display '+cls);Object.assign(e.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'});layer.prepend(e);return e;}
function mount(){
 const panels={};document.querySelectorAll('.panel-view').forEach(p=>panels[p.dataset.panel]=p);
 Object.values(panels).forEach(p=>{p.classList.add('native-panel');p.querySelector('.photo-crop img').hidden=true;});
 const main=panels.flightdeck.querySelector('.photo-crop');
 ['cm1','cm2'].forEach((seat,i)=>{
   screen(main,'pfd pfd-'+seat,i?83:2,20.5,13,27).innerHTML='<div class="fma">FD <b>1</b> · HDG-V/S</div><div class="attitude"><i></i><span>＋</span></div><div class="pfd-foot">QNH <span class="qnh">1013</span></div>';
   screen(main,'nd nd-'+seat,i?68:17,20.5,13,27).innerHTML='<div class="nd-heading">000</div><div class="compass"><span>N</span></div><div class="nd-mode">ARC · 40 NM</div>';
 });
 screen(main,'ecam-upper',42,21,16,16).innerHTML='<b>ENGINE / WARNING</b><div class="engine-lines">ENG 1 OFF　 ENG 2 OFF</div><div class="memo-lines">PARK BRK</div>';
 screen(main,'ecam-lower',42,39,16,18).innerHTML='<b class="ecam-page">DOOR / OXY</b><div class="ecam-content">DOOR / OXY</div>';
 screen(main,'fcu-numbers',37,1.2,32,4.6).innerHTML='<span class="spd">---</span><span class="hdg">---</span><span class="alt">05000</span><span>-----</span>';
 screen(main,'standby',33,24,7,14).innerHTML='<div class="standby-attitude">＋</div><small>STBY</small>';
 const ped=panels.pedestal.querySelector('.photo-crop');
 ['cm1','cm2'].forEach((seat,i)=>{
  screen(ped,'mcdu-display mcdu-'+seat,i?69.5:17.1,2.6,14.7,8.2).innerHTML='<b>INIT</b><div class="mcdu-lines"></div><div class="scratchpad">[　　　　　　　　　]</div>';
  screen(ped,'rmp-display rmp-'+seat,i?68:3,20,24,2.5).innerHTML='<b>118.000</b><span>121.500</span>';
 });
 screen(ped,'atc-display',85,39,12,2.5).textContent='2000';
 screen(ped,'trim-display',44,47,16,2.5).textContent='RUD TRIM 0.0';
 // Labels define the physical panel areas; every rendered control comes from the catalog.
 const groups={overhead:[['ADIRS',1,1,22,21],['FIRE',25,1,50,12],['HYDRAULIC',25,16,50,8],['FUEL',25,24,50,6],['ELECTRICAL',24,29,52,11],['AIR CONDITIONING',25,40,51,11],['ANTI ICE / PRESS',25,51,51,7],['EXTERIOR LIGHTS / APU',25,58,52,8],['FLIGHT CONTROL',1,25,22,10],['CALLS',1,50,22,7],['SIGNS',78,54,20,10]],flightdeck:[['CAPTAIN EFIS',12,1,25,14],['FLIGHT CONTROL UNIT',36,1,35,14],['FIRST OFFICER EFIS',70,1,20,14]],pedestal:[['SWITCHING',37,1,28,6],['ECAM',37,7,29,10],['ENGINES',39,41,25,6],['ATC / TCAS',74,40,24,10],['WEATHER RADAR',3,41,22,10]],checks:[]};
 for(const [name,items] of Object.entries(groups)){const crop=panels[name].querySelector('.photo-crop');items.forEach(([label,x,y,w,h])=>{const e=make('div','native-group');Object.assign(e.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'});e.append(make('span','',label));crop.prepend(e);});}
 document.querySelectorAll('.cockpit-control').forEach(w=>{
  const b=w.querySelector('.hotspot-trigger');b.append(make('i','hardware'));
  if(w.classList.contains('kind-momentary'))b.classList.add('instant-key');
 });
 const world=document.getElementById('cockpitWorld');
 const wind=make('div','cockpit-windscreen');wind.innerHTML='<div class="window-left"></div><div class="window-front"><i class="runway-view"></i></div><div class="window-right"></div>';world.prepend(wind);
 const floor=make('div','cockpit-floor');world.prepend(floor);
 const shell=make('div','cockpit-shell');world.prepend(shell);
 return {panels};
}
function paint(model,states){
 const powered=states.elec_ext_pwr==='ON'||states.apu_master==='ON'||states.eng_master_1==='ON'||states.eng_master_2==='ON'||states.elec_bat_1==='AUTO'||states.elec_bat_2==='AUTO';
 document.getElementById('cockpitWorld').classList.toggle('displays-off',!powered);
 const text=(selector,value)=>document.querySelectorAll(selector).forEach(e=>e.textContent=value);
 text('.fcu-numbers .spd',states.fcu_spd==='MANAGED'?'---':states.fcu_spd_value||'250');
 text('.fcu-numbers .hdg',states.fcu_hdg==='MANAGED'?'---':states.fcu_hdg_value||'000');
 text('.fcu-numbers .alt',(states.fcu_alt_value||'5000').padStart(5,'0'));
 ['cm1','cm2'].forEach(seat=>{
  text('.pfd-'+seat+' .qnh',states['baro_'+seat]==='STD'?'STD':states['baro_value_'+seat]||'1013');
  text('.pfd-'+seat+' .fma',(states['fd_'+seat]==='ON'?'FD ON':'FD OFF')+' · '+(states.fcu_reference||'HDG-V/S'));
  text('.nd-'+seat+' .nd-mode',(states['efis_mode_'+seat]||'ARC')+' · '+(states['efis_range_'+seat]||'40')+' NM');
  const m=model.mcdu[seat],r=model.radios[seat];text('.mcdu-'+seat+'>b',m.page);
  text('.mcdu-'+seat+' .scratchpad',m.scratch||'[　　　　　　　　　]');
  const fields=Object.entries(m.fields).filter(([k])=>k.startsWith(m.page+':')).slice(0,12);
  text('.mcdu-'+seat+' .mcdu-lines',fields.length?fields.map(([k,v])=>k.split(':')[1].toUpperCase()+' '+v).join('\n'):'FLIGHT DATA\nENTER VIA SCRATCHPAD\nLSK TO STORE');
  text('.rmp-'+seat+' b',r.active);text('.rmp-'+seat+' span',r.standby);
 });
 text('.atc-display',model.atcEntry||model.atcCode);
 text('.trim-display','RUD '+(states.rudder_trim||'NEUTRAL')+' · PITCH '+(states.pitch_trim_value||'0.0'));
 text('.ecam-lower .ecam-page',model.ecamPage);
 const pages={ELEC:'BAT 1 '+(states.elec_bat_1||'OFF')+'\nBAT 2 '+(states.elec_bat_2||'OFF')+'\nEXT PWR '+(states.elec_ext_pwr||'OFF'),DOOR:'CABIN '+(states.cabin_doors||'CLOSED')+'\nSLIDES '+(states.doors_slides||'DISARMED'),PRESS:'LDG ELEV '+(states.ldg_elev||'AUTO'),FUEL:'FUEL SYSTEM\nVERIFY PLAN / UPLIFT',STS:'STATUS\nREVIEW AGAINST MEL',WHEEL:'PARK BRK '+(states.park_brake||'OFF')+'\nAUTO BRK '+(states.auto_brake_max==='ON'?'MAX':'OFF'),'T.O CONFIG':'CONFIG TEST SELECTED\nVERIFY ECAM INDICATIONS'};
 text('.ecam-lower .ecam-content',pages[model.ecamPage]||model.ecamPage+' PAGE\nCONTROL PRACTICE');
 text('.engine-lines','ENG 1 '+(states.eng_master_1||'OFF')+'　ENG 2 '+(states.eng_master_2||'OFF'));
 text('.memo-lines',model.test?model.test.replaceAll('_',' ').toUpperCase():(states.park_brake==='ON'?'PARK BRK\n':'')+'FLAPS '+(states.flaps||'0'));
 document.getElementById('cockpitWorld').classList.toggle('test-active',!!model.test);
}
root.A320CockpitNative={mount,paint};
})(window);
