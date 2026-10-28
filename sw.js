// Fam Studio · service worker
// Solo cachea peticiones GET del propio origen. Nunca toca version.json.
// Lo que lleva ?v= (shell.js, app.js, data.enc) es inmutable y se sirve de caché;
// el resto (la página y los iconos) va primero a la red y usa la caché solo sin conexión.
const C="fs-cache-2";
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==C)await caches.delete(k); // purga versiones antiguas
  await self.clients.claim();
})()));
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const u=new URL(req.url);
  if(u.origin!==location.origin)return;
  if(u.pathname.endsWith("/version.json"))return;
  if(req.mode==="navigate"||!u.searchParams.has("v")){
    const key=req.mode==="navigate"?u.origin+u.pathname:req;
    e.respondWith(caches.open(C).then(async c=>{
      try{const r=await fetch(req);if(r.ok)c.put(key,r.clone());return r}
      catch(err){const hit=await c.match(key);if(hit)return hit;throw err}
    }));
    return;
  }
  e.respondWith(caches.open(C).then(async c=>{
    const hit=await c.match(req);if(hit)return hit;
    const r=await fetch(req);
    if(r.ok){
      await c.put(req,r.clone());
      for(const k of await c.keys()){const ku=new URL(k.url);if(ku.pathname===u.pathname&&ku.search!==u.search)c.delete(k)}
    }
    return r;
  }));
});
