(function(root){
  'use strict';
  // CSS perspective keeps the real DOM controls accessible on the panel surfaces.
  const PANELS={
    flightdeck:{x:0,y:120,z:-1100,rx:0,w:1900,h:585},
    overhead:{x:0,y:-640,z:-700,rx:-58,w:1080,h:796},
    aft:{x:0,y:-1270,z:-1080,rx:-58,w:1080,h:796},
    pedestal:{x:0,y:780,z:-720,rx:58,w:710,h:865},
    checks:{x:0,y:0,z:-800,w:820,h:650}
  };
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function create(options){
    const host=document.getElementById('virtualCockpit');
    const viewport=document.getElementById('cockpitViewport');
    const world=document.getElementById('cockpitWorld');
    const panels=Array.from(document.querySelectorAll('.panel-view'));
    const home=panels[0].parentElement;
    let enabled=false,pitch=0,yaw=0,zoom=1,seat='CM2',seatX=250,frame=0;
    let activePanel='flightdeck',drag=null,suppressClick=false,pointers=new Map(),pinch=null;
    const lookReadout=document.getElementById('lookReadout');
    const repaint=()=>{
      frame=0;
      if(!enabled)return;
      const focal=Math.max(240,Math.min(viewport.clientWidth*.82,viewport.clientHeight*1.12))*zoom;
      viewport.style.perspective=focal+'px';
      world.style.transform='translateZ('+focal+'px) rotateX('+pitch+'deg) rotateY('+yaw+'deg) translateX('+(-seatX)+'px)';
      lookReadout.textContent=(pitch>12?'LOOKING UP':pitch< -12?'LOOKING DOWN':'LOOKING FORWARD')+' · '+Math.round(zoom*100)+'%';
      document.getElementById('zoomLevel').textContent=Math.round(zoom*100)+'%';
    };
    const render=()=>{if(!frame)frame=requestAnimationFrame(repaint);};
    function focus(panel){
      const tray=document.querySelector('[data-panel=checks].panel-view');if(enabled){tray.hidden=panel!=='checks';if(panel==='checks'){document.querySelectorAll('[data-look]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.look===panel)));return;}}
      const p=PANELS[panel]||PANELS.flightdeck;activePanel=panel;
      const dx=p.x-seatX;
      yaw=Math.atan2(dx,-p.z)*180/Math.PI;
      pitch=-Math.atan2(p.y,Math.hypot(dx,p.z))*180/Math.PI;
      zoom=panel==='pedestal'?.95:panel==='overhead'?.78:panel==='flightdeck'?.84:.75;
      document.querySelectorAll('[data-look]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.look===panel)));
      render();
    }
    function setEnabled(value,currentSeat){
      enabled=value;seat=currentSeat||seat;seatX=seat==='CM1'?-250:250;
      host.hidden=!value;
      document.getElementById('detailedPractice').classList.toggle('virtual-active',value);
      panels.forEach(panel=>{
        if(value){
          const p=PANELS[panel.dataset.panel];
          if(panel.dataset.panel==='checks'){host.appendChild(panel);panel.classList.add('floating-checks');panel.hidden=true;return;}
          world.appendChild(panel);panel.hidden=false;
          panel.style.setProperty('--surface-width',p.w+'px');
          panel.style.setProperty('--surface-height',p.h+'px');
          panel.style.transform='translate3d('+p.x+'px,'+p.y+'px,'+p.z+'px) rotateX('+(p.rx||0)+'deg) rotateY('+(p.ry||0)+'deg) translate(-50%,-50%)';
        }else{home.appendChild(panel);panel.classList.remove('floating-checks');panel.style.transform='';}
      });
      document.getElementById('seatReadout').textContent=seat==='CM1'?'CM1 · LEFT SEAT':'CM2 · RIGHT SEAT';
      if(value)focus('flightdeck');
      document.getElementById('controlDock').hidden=true;
    }
    function locate(id,highlight=true){
      const def=options.controls.find(c=>c.id===id);if(!enabled||!def)return;
      focus(def.panel);
      if(def.panel==='checks'){const c=document.querySelector('.cockpit-control[data-control="'+id+'"]');c.classList.add('located');c.scrollIntoView({block:'nearest'});setTimeout(()=>c.classList.remove('located'),4000);return;}
      const p=PANELS[def.panel],rx=(p.rx||0)*Math.PI/180,ry=(p.ry||0)*Math.PI/180;
      const x=(def.x+def.w/2-50)*p.w/100,y=(def.y+def.h/2-50)*p.h/100;
      const wx=p.x+x*Math.cos(ry)+y*Math.sin(rx)*Math.sin(ry)-seatX;
      const wy=p.y+y*Math.cos(rx),wz=p.z-x*Math.sin(ry)+y*Math.sin(rx)*Math.cos(ry);
      yaw=Math.atan2(wx,-wz)*180/Math.PI;pitch=-Math.atan2(wy,Math.hypot(wx,wz))*180/Math.PI;
      const focal=Math.max(240,Math.min(viewport.clientWidth*.82,viewport.clientHeight*1.12));
      const distanceToControl=Math.hypot(wx,wy,wz);
      const target=viewport.clientWidth<650?34:26;
      const dimension=Math.min(def.w*p.w/100,def.h*p.h/100);
      zoom=clamp(target*distanceToControl/(Math.max(8,dimension)*focal),viewport.clientWidth<650?3.2:1.7,12);render();
      const control=document.querySelector('[data-control="'+id+'"]');
      if(highlight)control.classList.add('located');
      setTimeout(()=>control.classList.remove('located'),5000);
    }
    const distance=()=>{const p=[...pointers.values()];return Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);};
    viewport.addEventListener('pointerdown',e=>{
      document.getElementById('controlDock').hidden=true;
      if(e.button!==0)return;
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pointers.size===2){pinch={distance:distance(),zoom};drag=null;suppressClick=true;}
      else{drag={id:e.pointerId,x:e.clientX,y:e.clientY,pitch,yaw,moved:false};suppressClick=false;}
    });
    viewport.addEventListener('pointermove',e=>{
      if(!pointers.has(e.pointerId))return;
      pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
      if(pinch&&pointers.size===2){zoom=clamp(pinch.zoom*distance()/pinch.distance,.65,12);render();return;}
      if(!drag||drag.id!==e.pointerId)return;
      const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
      if(Math.hypot(dx,dy)>7){drag.moved=true;suppressClick=true;viewport.classList.add('dragging');viewport.setPointerCapture(e.pointerId);}
      if(drag.moved){yaw=clamp(drag.yaw+dx*.09/zoom,-74,74);pitch=clamp(drag.pitch-dy*.09/zoom,-68,66);render();}
    });
    const end=e=>{pointers.delete(e.pointerId);if(pointers.size<2)pinch=null;drag=null;viewport.classList.remove('dragging');};
    viewport.addEventListener('pointerup',end);viewport.addEventListener('pointercancel',end);
    viewport.addEventListener('lostpointercapture',()=>{drag=null;});
    viewport.addEventListener('click',e=>{if(suppressClick){e.preventDefault();e.stopImmediatePropagation();suppressClick=false;}},true);
    viewport.addEventListener('wheel',e=>{e.preventDefault();zoom=clamp(zoom*Math.exp(-e.deltaY*.001),.65,12);render();},{passive:false});
    viewport.addEventListener('keydown',e=>{
      if(e.target!==viewport)return;
      const keys=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','+','=','-','0'];if(!keys.includes(e.key))return;
      e.preventDefault();
      if(e.key==='ArrowUp')pitch=clamp(pitch+5,-68,66);
      if(e.key==='ArrowDown')pitch=clamp(pitch-5,-68,66);
      if(e.key==='ArrowLeft')yaw=clamp(yaw+5,-74,74);
      if(e.key==='ArrowRight')yaw=clamp(yaw-5,-74,74);
      if(e.key==='+'||e.key==='=')zoom=clamp(zoom+.15,.65,12);
      if(e.key==='-')zoom=clamp(zoom-.15,.65,12);
      if(e.key==='0')focus('flightdeck');
      render();
    });
    document.querySelectorAll('[data-look]').forEach(b=>b.onclick=()=>focus(b.dataset.look));
    document.getElementById('zoomIn').onclick=()=>{zoom=clamp(zoom+.2,.65,12);render();};
    document.getElementById('zoomOut').onclick=()=>{zoom=clamp(zoom-.2,.65,12);render();};
    document.getElementById('resetLook').onclick=()=>focus('flightdeck');
    document.getElementById('labelsToggle').onclick=function(){const value=this.getAttribute('aria-pressed')!=='true';this.setAttribute('aria-pressed',String(value));host.classList.toggle('show-labels',value);};
    document.getElementById('cockpitFullscreen').onclick=async()=>{
      try{if(document.fullscreenElement)await document.exitFullscreen();else await document.getElementById('trainer').requestFullscreen();}catch(e){document.getElementById('cockpitHelp').textContent='Fullscreen is unavailable in this browser. Use landscape for a larger view.';}
    };
    // Keyboard navigation to a control brings its panel into view without grading it.
    world.addEventListener('focusin',e=>{const c=e.target.closest('[data-control]');if(c&&e.target.matches(':focus-visible'))locate(c.dataset.control,false);});
    const observer=new ResizeObserver(render);observer.observe(viewport);
    return {setEnabled,focus,locate,getView:()=>({pitch,yaw,zoom,seat,enabled})};
  }
  root.A320CockpitView={create,PANELS};
})(typeof window!=='undefined'?window:globalThis);
