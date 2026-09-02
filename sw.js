const CACHE = 'a320-trainer-v32';
const ASSETS = ['./','./index.html','./manifest.webmanifest',
  './self-study-quizzes.js',
  './electrical.html','./electrical-sim.js','./hydraulic.html','./hydraulic-sim.js','./engine.html','./engine-sim.js','./engine-3d.js','./flows.html','./a320-controls.js?v=31','./flow-sim.js?v=31','./a32nx-overhead.webp','./a32nx-main.webp','./a32nx-pedestal.webp',
  './icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install', function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);})
    .then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){return k!==CACHE;})
      .map(function(k){return caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch', function(e){
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      return hit || fetch(e.request).then(function(res){
        var copy=res.clone();
        caches.open(CACHE).then(function(c){c.put(e.request,copy);}).catch(function(){});
        return res;
      }).catch(function(){return caches.match('./index.html');});
    })
  );
});

