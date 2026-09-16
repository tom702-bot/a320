(function(root){
'use strict';
function create(){
  return {ecamPage:'DOOR',test:null,momentary:{},atcCode:'2000',atcEntry:'',radios:{cm1:{channel:'VHF 1',active:'118.000',standby:'121.500'},cm2:{channel:'VHF 2',active:'121.500',standby:'118.000'}},mcdu:{cm1:{page:'INIT',scratch:'',fields:{}},cm2:{page:'INIT',scratch:'',fields:{}}},values:{},log:[]};
}
function operate(model,def,value){
  model.log.push({id:def.id,value});if(model.log.length>200)model.log.shift();
  const id=def.id;
  if(def.states)model.values[id]=value;
  else model.momentary[id]=(model.momentary[id]||0)+1;
  if(/^ecam_(eng|bleed|press|elec|hyd|fuel|apu|cond|door|wheel|fctl|sts|all)$/.test(id))model.ecamPage=id.slice(5).toUpperCase();
  if(id==='ecam_all'){const pages=['ENG','BLEED','PRESS','ELEC','HYD','FUEL','APU','COND','DOOR','WHEEL','FCTL','STS'];model.ecamPage=pages[(model.momentary.ecam_all-1)%pages.length];}
  if(id==='ecam_clr_l'||id==='ecam_clr_r')model.test=null;
  if(id==='to_config')model.ecamPage='T.O CONFIG';
  if(/^(eng_[12]_fire_test|apu_fire_test|cvr_test|annunciator_test)$/.test(id))model.test=id;
  const mc=id.match(/^mcdu_(cm[12])_(.+)$/);
  if(mc){
    const m=model.mcdu[mc[1]],key=mc[2];
    if(key.startsWith('key_')){
      const k=key.slice(4),special={dot:'.',slash:'/',sp:' ',plus_minus:'-',ovfy:'Δ'};
      if(k==='clr')m.scratch=m.scratch.slice(0,-1);
      else if(m.scratch.length<24)m.scratch+=(special[k]??k.toUpperCase());
    }else if(key.startsWith('lsk_')){
      const field=m.page+':'+key.slice(4);
      if(m.scratch){m.fields[field]=m.scratch;m.scratch='';}else m.scratch=m.fields[field]||'';
    }else if(key.startsWith('arrow_'))m.page=m.page.split(' · ')[0]+' · '+key.slice(6).toUpperCase();
    else{m.page=key.replaceAll('_',' ').toUpperCase();m.scratch='';}
  }
  const radio=id.match(/^rmp_(cm[12])_(.+)$/);
  if(radio){const r=model.radios[radio[1]],key=radio[2];if(key==='transfer'){[r.active,r.standby]=[r.standby,r.active];}else if(key==='tune')r.standby=value;else if(!['power','frequency'].includes(key))r.channel=key.replaceAll('_',' ').toUpperCase();}
  if(id.startsWith('atc_code_')){const key=id.slice(9);if(key==='clr')model.atcEntry=model.atcEntry.slice(0,-1);else if(/^[0-7]$/.test(key)){if(model.atcEntry.length===4)model.atcEntry='';model.atcEntry+=key;if(model.atcEntry.length===4)model.atcCode=model.atcEntry;}}
  if(id==='rudder_reset')model.values.rudder_trim='NEUTRAL';
  return model;
}
const api={create,operate};if(typeof module!=='undefined'&&module.exports)module.exports=api;if(root)root.A320CockpitSystems=api;
})(typeof window!=='undefined'?window:globalThis);
