// Fam Studio · service worker
// Solo cachea peticiones GET del propio origen. Nunca toca version.json.
// Lo que lleva ?v= (shell.js, app.js, data.enc, img.enc, prod.enc) es inmutable y se sirve de la caché: la primera vez se guarda
// (la página también lo guarda al terminar de descargarlo, porque en la primera visita este worker aún no controla la página)
// y al llegar una versión nueva se borra la anterior. Las fotos (f/<n>.bin, pedidas por rango) NO pasan por aquí: el worker no toca ni guarda esas
// respuestas (206 no se puede guardar y Safari se queja si se reescriben); la página las guarda foto a foto en esta misma caché (src/fotos.js). La página y los iconos van primero a la red, con un tiempo máximo:
// si la red no contesta (cobertura mala o sin conexión) se usa lo guardado.
const C="fs-cache-3";
const ESPERA=4000;
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil((async()=>{
  for(const k of await caches.keys())if(k!==C)await caches.delete(k); // purga versiones antiguas
  // y, dentro de la caché actual, lo guardado de una versión vieja (las fotos que ya no se vuelven a abrir)
  try{
    const r=await fetch("version.json?t="+Date.now(),{cache:"no-store"}),j=r.ok?await r.json():null;
    if(j&&typeof j.v==="string"){const c=await caches.open(C);for(const k of await c.keys()){const ku=new URL(k.url);if(ku.searchParams.has("v")&&ku.searchParams.get("v")!==j.v)await c.delete(k)}}
  }catch(err){}
  await self.clients.claim();
})()));
async function redPrimero(e,req,key){
  const c=await caches.open(C);
  // la página se pide siempre revalidando: sin esto, con la caché normal del navegador (GitHub Pages da 10 minutos) podría llegar un index.html viejo que pide el shell.js de la versión anterior
  const red=(req.mode==="navigate"?fetch(req.url,{cache:"no-cache"}):fetch(req)).then(r=>{if(r.ok)e.waitUntil(c.put(key,r.clone()));return r});
  red.catch(()=>{});
  const tope=new Promise(ok=>setTimeout(()=>ok(null),ESPERA));
  const r=await Promise.race([red.catch(()=>null),tope]);
  if(r)return r;
  const hit=await c.match(key);
  if(hit)return hit;
  return red; // sin copia guardada: se espera a la red
}
async function cachePrimero(e,req,u){
  const c=await caches.open(C);
  const hit=await c.match(req);if(hit)return hit;
  const r=await fetch(req);
  if(r.ok){
    // se devuelve ya (la página va leyendo y enseña el progreso) y se guarda por detrás
    const copia=r.clone();
    e.waitUntil((async()=>{
      await c.put(req,copia);
      for(const k of await c.keys()){const ku=new URL(k.url);if(ku.pathname===u.pathname&&ku.search!==u.search)await c.delete(k)}
    })());
  }
  return r;
}
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET")return;
  const u=new URL(req.url);
  if(u.origin!==location.origin)return;
  if(u.pathname.endsWith("/version.json"))return;
  if(req.headers.has("range")||/\/f\/\d+\.bin$/.test(u.pathname))return;   // peticiones de rango y archivos de fotos: directas a la red
  if(req.mode==="navigate"||!u.searchParams.has("v")){
    e.respondWith(redPrimero(e,req,req.mode==="navigate"?u.origin+u.pathname:req));
    return;
  }
  e.respondWith(cachePrimero(e,req,u));
});
