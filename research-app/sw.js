// AUHD Research Index: live-first cache cleanup (v7).
const CACHE_PREFIX='auhd-research-index-';
self.addEventListener('install',event=>{event.waitUntil(self.skipWaiting())});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith(CACHE_PREFIX)).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||req.mode!=='navigate')return;
 const url=new URL(req.url);
 if(url.origin!==self.location.origin||!url.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 event.respondWith(fetch(new Request(req,{cache:'no-store'})).catch(()=>
  new Response('لا تتوفر استجابة مباشرة من الخادم. افتح الموقع عند توفر اتصال بالإنترنت.',{
   status:503,headers:{'content-type':'text/plain; charset=utf-8','cache-control':'no-store'}
  })
 ));
});