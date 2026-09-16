const CACHE = 'a320-trainer-v47';
const ASSETS = ['./','./index.html','./manifest.webmanifest',
  './trainer-core.js','./systems-exam-questions.js','./question-bank-questions.js','./communications-fcom-questions.js','./communications-option-quality.js',
  './electrical.html','./electrical-sim.js','./hydraulic.html','./hydraulic-sim.js','./engine.html','./engine-sim.js','./engine-3d.js','./cockpit-view.css?v=47','./cockpit-view.js?v=47','./flow-evidence.js?v=47','./cockpit-native.css?v=47','./cockpit-native.js?v=47','./cockpit-systems.js?v=47','./flow-procedures.js?v=47','./cockpit-photo-layout.js?v=47','./fbw-cockpit.png','./flows.html','./integration.html','./verification-audit.json','./communications-fcom-audit.json','./a320-controls.js?v=47','./flow-sim.js?v=47','./a32nx-overhead.webp','./a32nx-main.webp','./a32nx-pedestal.webp',
  './assets/question-bank/q002.png','./assets/question-bank/q004.png','./assets/question-bank/q005.png','./assets/question-bank/q006.png','./assets/question-bank/q007.png','./assets/question-bank/q008.png','./assets/question-bank/q018.png','./assets/question-bank/q071.png','./assets/question-bank/q094.png','./assets/question-bank/q126.png','./assets/question-bank/q188.png','./assets/question-bank/q189.png','./assets/question-bank/q191.png','./assets/question-bank/q266.png','./assets/question-bank/q268.png',
  './icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);})
    .then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k.startsWith('a320-trainer-')&&k!==CACHE;})
      .map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  const scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  e.respondWith(
    caches.open(CACHE).then(function(cache){
      return cache.match(e.request).then(function(hit){
        return hit || fetch(e.request).then(function(res){
          if(res.ok)e.waitUntil(cache.put(e.request,res.clone()).catch(function(){}));
          return res;
        }).catch(function(){
          if(e.request.mode==='navigate')return cache.match('./index.html').then(function(page){return page||Response.error();});
          return Response.error();
        });
      });
    })
  );
});
