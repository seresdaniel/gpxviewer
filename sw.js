const CACHE='gpx-viewer-v2.3';
const CORE=['./','./index.html','./css/style.css','./js/app.js','./manifest.webmanifest'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))])));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  // Never cache/intercept third-party map/CDN traffic. Let the browser/provider handle it.
  if(u.origin!==self.location.origin)return;
  e.respondWith(fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp}).catch(()=>caches.match(e.request)));
});
