const CACHE = 'a320-trainer-v54';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./type-ratings.html','./type-ratings.js?v=54','./assets/type-ratings/casr-handout.jpeg',
  './trainer-core.js',
  './electrical.html','./electrical-sim.js','./hydraulic.html','./hydraulic-sim.js','./engine.html','./engine-sim.js','./engine-3d.js','./cockpit-view.css?v=49','./cockpit-view.js?v=49','./flow-evidence.js?v=49','./cockpit-native.css?v=49','./cockpit-native.js?v=49','./cockpit-systems.js?v=49','./flow-sop.js?v=49',
  './SOP_AUDIT.md',
  './flow-procedures.js?v=49','./cockpit-photo-layout.js?v=49','./fbw-cockpit.png','./flows.html','./integration.html','./verification-audit.json','./a320-controls.js?v=49','./flow-sim.js?v=49','./a32nx-overhead.webp','./a32nx-main.webp','./a32nx-pedestal.webp',
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
