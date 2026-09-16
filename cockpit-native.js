(function(root){
'use strict';
function make(tag,cls,text){const e=document.createElement(tag);e.className=cls||'';if(text)e.textContent=text;return e;}
function mount(){
 const panels={};document.querySelectorAll('.panel-view').forEach(p=>panels[p.dataset.panel]=p);
 Object.entries(panels).forEach(([name,p])=>{
  p.classList.add('photo-cockpit-panel');const crop=p.querySelector('.photo-crop'),img=crop.querySelector('img');
  if(name==='checks'){img.hidden=true;crop.classList.add('crew-check-tray');const h=make('h3','tray-title','CREW, OBSERVATIONS & FLIGHT DATA');const note=make('p','tray-note','Confirm checks and data here. Cockpit switches are operated on the FlyByWire panels.');crop.prepend(note);crop.prepend(h);return;}
  const a=root.A320PhotoLayout.atlas[name];img.hidden=false;img.src='fbw-cockpit.png';img.alt='FlyByWire A320 '+name+' cockpit reference';
  Object.assign(img.style,{width:1426/a.w*100+'%',height:2744/a.h*100+'%',left:-a.x/a.w*100+'%',top:-a.y/a.h*100+'%',maxWidth:'none',objectFit:'fill'});
  crop.style.aspectRatio=a.w+'/'+a.h;
 });
 function display(panel,cls,x,y,w,h,html){const a=root.A320PhotoLayout.atlas[panel],e=make('div','photo-display '+cls);Object.assign(e.style,{left:x/a.w*100+'%',top:y/a.h*100+'%',width:w/a.w*100+'%',height:h/a.h*100+'%'});e.innerHTML=html;panels[panel].querySelector('.photo-crop').append(e);return e;}
 ['cm1','cm2'].forEach((seat,i)=>{
  display('pedestal','mcdu-display mcdu-'+seat,145+i*440,44,129,100,'<b>INIT</b><div class="mcdu-lines"></div><div class="scratchpad"></div>');
  display('pedestal','rmp-display rmp-'+seat,141+i*440,302,53,14,'<b>118.000</b>');
  display('pedestal','rmp-display rmp-standby-'+seat,226+i*440,302,48,14,'<span>121.500</span>');
 });
 display('pedestal','atc-display',658,572,47,17,'2000');
 display('flightdeck','fcu-numbers',610,25,210,22,'<span class="spd">---</span><span class="hdg">---</span><span class="alt">05000</span><span>-----</span>');
 display('flightdeck','ecam-lower',655,305,132,117,'<b class="ecam-page">DOOR / OXY</b><div class="ecam-content"></div>');
 return {panels};
}
function paint(model,states){
 const text=(s,t)=>document.querySelectorAll(s).forEach(e=>e.textContent=t);
 const show=(s,b)=>document.querySelectorAll(s).forEach(e=>e.classList.toggle('live-display',b));
 ['cm1','cm2'].forEach(seat=>{
  const m=model.mcdu[seat],r=model.radios[seat];text('.mcdu-'+seat+'>b',m.page);
  const fields=Object.entries(m.fields).filter(([k])=>k.startsWith(m.page+':')).slice(0,12);text('.mcdu-'+seat+' .mcdu-lines',fields.length?fields.map(([k,v])=>k.split(':')[1].toUpperCase()+' '+v).join('\n'):'FLIGHT DATA\n\nENTER VIA SCRATCHPAD\nLSK TO STORE');text('.mcdu-'+seat+' .scratchpad',m.scratch||'[                       ]');
  show('.mcdu-'+seat,model.log.some(e=>e.id.startsWith('mcdu_'+seat)));
  text('.rmp-'+seat+' b',r.active);text('.rmp-standby-'+seat+' span',r.standby);show('.rmp-'+seat+',.rmp-standby-'+seat,model.log.some(e=>e.id.startsWith('rmp_'+seat)));
 });
 text('.atc-display',model.atcEntry||model.atcCode);show('.atc-display',model.log.some(e=>e.id.startsWith('atc_code_')));
 text('.fcu-numbers .spd',states.fcu_spd==='MANAGED'?'---':states.fcu_spd_value||'250');text('.fcu-numbers .hdg',states.fcu_hdg==='MANAGED'?'---':(states.fcu_hdg_value||'000').padStart(3,'0'));text('.fcu-numbers .alt',(states.fcu_alt_value||'5000').padStart(5,'0'));show('.fcu-numbers',model.log.some(e=>e.id.startsWith('fcu_')));
 text('.ecam-page',model.ecamPage);const content={ELEC:'BAT 1 '+states.elec_bat_1+'\nBAT 2 '+states.elec_bat_2+'\nEXT PWR '+states.elec_ext_pwr,DOOR:'CABIN '+states.cabin_doors+'\nSLIDES '+states.doors_slides,PRESS:'LDG ELEV '+states.ldg_elev,WHEEL:'PARK BRK '+states.park_brake};text('.ecam-content',content[model.ecamPage]||'CONTROL PRACTICE\nVERIFY INDICATIONS');show('.ecam-lower',model.log.some(e=>e.id.startsWith('ecam_')||e.id==='to_config'));
 document.getElementById('cockpitWorld').classList.toggle('test-active',!!model.test);
}
root.A320CockpitNative={mount,paint};
})(window);
