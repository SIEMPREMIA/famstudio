// ===== Fam Studio · arranque, acceso con código y cifrado =====
// Este archivo es público. No contiene códigos ni contenido: todo el contenido
// va en data.enc (AES-GCM) y se trata siempre como JSON, nunca como código.
"use strict";
const FS={};
let DB=null;
(function(){
  const PBK_MIN=600000,PBK_MAX=5000000;
  const te=new TextEncoder(),td=new TextDecoder();
  const el=id=>document.getElementById(id);
  // --- anti-encuadre: la app no se muestra dentro de un iframe ---
  let framed=false;try{framed=window.top!==window.self}catch(e){framed=true}
  if(framed){
    document.body.textContent="";
    const p=document.createElement("p");p.style.cssText="padding:32px 20px;font:18px/1.5 sans-serif;text-align:center";
    p.textContent="Abre Fam Studio desde su enlace.";document.body.appendChild(p);
    return;
  }
  // --- utilidades ---
  const b64=u=>{u=new Uint8Array(u);let s="";for(let i=0;i<u.length;i+=32768)s+=String.fromCharCode.apply(null,u.subarray(i,i+32768));return btoa(s)};
  const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
  const lg=k=>{try{const x=localStorage.getItem(k);return x?JSON.parse(x):null}catch(e){return null}};
  const lset=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
  const lrm=k=>{try{localStorage.removeItem(k)}catch(e){}};
  // normalización de códigos: trim + minúsculas + NFC
  const norm=c=>String(c==null?"":c).trim().toLowerCase().normalize("NFC");
  const rnd=n=>b64(crypto.getRandomValues(new Uint8Array(n)));
  const okIter=n=>Number.isInteger(n)&&n>=PBK_MIN&&n<=PBK_MAX;
  // --- criptografía ---
  // Clave AES-GCM 256 derivada con PBKDF2-SHA256. SIEMPRE no extraíble.
  async function deriveKey(code,salt,iter){
    if(!okIter(iter))throw new Error("version");
    const base=await crypto.subtle.importKey("raw",te.encode(norm(code)),"PBKDF2",false,["deriveKey"]);
    return crypto.subtle.deriveKey({name:"PBKDF2",salt:unb64(salt),iterations:iter,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
  }
  async function decryptWith(key,txt){
    const raw=unb64(txt.trim());
    const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:raw.slice(0,12)},key,raw.slice(12));
    return JSON.parse(td.decode(pt)); // solo datos: JSON puro
  }
  async function encryptWith(key,obj){
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,te.encode(JSON.stringify(obj)));
    const out=new Uint8Array(12+ct.byteLength);out.set(iv);out.set(new Uint8Array(ct),12);return b64(out);
  }
  // hash de administración: PBKDF2-SHA256(código normalizado, sal, iteraciones) en base64
  async function adminHash(code,salt,iter){
    const base=await crypto.subtle.importKey("raw",te.encode(norm(code)),"PBKDF2",false,["deriveBits"]);
    return b64(await crypto.subtle.deriveBits({name:"PBKDF2",salt:unb64(salt),iterations:iter,hash:"SHA-256"},base,256));
  }
  // comparación sin atajos (recorre siempre la longitud máxima)
  function sameStr(a,b){
    a=String(a);b=String(b);let d=a.length^b.length;const n=Math.max(a.length,b.length);
    for(let i=0;i<n;i++)d|=(a.charCodeAt(i)||0)^(b.charCodeAt(i)||0);
    return d===0;
  }
  // --- IndexedDB: guarda la CryptoKey no extraíble y la sal a la que pertenece ---
  const IDB={
    open(){return new Promise((ok,ko)=>{try{const r=indexedDB.open("famstudio",1);r.onupgradeneeded=()=>r.result.createObjectStore("k");r.onsuccess=()=>ok(r.result);r.onerror=()=>ko(r.error);r.onblocked=()=>ko(new Error("idb"))}catch(e){ko(e)}})},
    async run(mode,fn){
      let db;try{db=await this.open()}catch(e){return null}
      return new Promise(ok=>{try{const tx=db.transaction("k",mode),rq=fn(tx.objectStore("k"));tx.oncomplete=()=>{db.close();ok(rq&&"result" in rq?rq.result:true)};tx.onerror=tx.onabort=()=>{db.close();ok(null)}}catch(e){try{db.close()}catch(_){}ok(null)}});
    },
    get(){return this.run("readonly",s=>s.get("key"))},
    put(key,salt){return this.run("readwrite",s=>s.put({key,salt},"key"))},
    del(){return this.run("readwrite",s=>s.delete("key"))}
  };
  // --- pantallas ---
  function showLock(msg){el("splash").hidden=true;el("lock").hidden=false;el("lk_msg").textContent=msg||"";setTimeout(()=>{try{el("lk_code").focus()}catch(e){}},50)}
  function fail(msg){
    const s=el("splash");s.textContent="";
    const p=document.createElement("p");p.className="lk_t";p.textContent=msg;
    const b=document.createElement("button");b.className="btn";b.textContent="Reintentar";b.addEventListener("click",()=>location.reload());
    s.appendChild(p);s.appendChild(b);
  }
  async function getVer(){
    try{const r=await fetch("version.json?t="+Date.now(),{cache:"no-store"});if(r.ok){const v=await r.json();if(v&&typeof v.v==="string"&&typeof v.salt==="string"&&okIter(v.iter)){lset("fs_ver",v);return v}}}catch(e){}
    const v=lg("fs_ver");return v&&okIter(v.iter)?v:null;
  }
  async function getData(ver){const r=await fetch("data.enc?v="+encodeURIComponent(ver.v));if(!r.ok)throw new Error("data");return r.text()}
  function loadScript(src){return new Promise((ok,ko)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=()=>ko(new Error("app"));document.body.appendChild(s)})}
  async function launch(ver,data){
    if(!data||typeof data!=="object"||!data.content||typeof data.content!=="object")throw new Error("datos");
    FS.ver=ver;FS.bundle=data;DB=data.content;
    await loadScript("app.js?v="+encodeURIComponent(ver.v));
    const prev=lg("fs_seen_v");lset("fs_seen_v",ver.v);
    el("splash").hidden=true;el("lock").hidden=true;el("app").hidden=false;
    if(prev&&prev!==ver.v&&window.toast)setTimeout(()=>toast("Fam Studio se ha actualizado"),400);
  }
  async function boot(){
    lrm("fs_code"); // versiones antiguas guardaban el código en claro
    if("serviceWorker" in navigator){try{navigator.serviceWorker.register("sw.js")}catch(e){}}
    if(!window.crypto||!crypto.subtle){fail("Tu navegador no es compatible. Abre el enlace con Safari o Chrome.");return}
    const ver=await getVer();
    if(!ver){fail("Necesitas conexión a internet la primera vez que abres Fam Studio.");return}
    let txt;try{txt=await getData(ver)}catch(e){fail("No se ha podido cargar Fam Studio. Comprueba tu conexión.");return}
    FS.ver=ver;FS.dataTxt=txt;
    const st=await IDB.get();
    if(st&&st.key&&st.salt===ver.salt){
      try{const data=await decryptWith(st.key,txt);await launch(ver,data);return}
      catch(e){await IDB.del();showLock("El código del equipo ha cambiado. Escribe el código nuevo.");return}
    }
    if(st){await IDB.del();showLock("El código del equipo ha cambiado. Escribe el código nuevo.");return}
    showLock("");
  }
  async function tryCode(){
    const c=el("lk_code").value;if(!norm(c)){el("lk_msg").textContent="Escribe el código.";return}
    el("lk_btn").disabled=true;el("lk_msg").textContent="Comprobando…";
    let key,data;
    try{key=await deriveKey(c,FS.ver.salt,FS.ver.iter);data=await decryptWith(key,FS.dataTxt)}
    catch(e){el("lk_msg").textContent="Ese código no es correcto. Revísalo o pídeselo a quien te invitó.";el("lk_btn").disabled=false;return}
    el("lk_code").value="";
    await IDB.put(key,FS.ver.salt); // si IndexedDB no está disponible, se pedirá el código en cada arranque
    try{await launch(FS.ver,data)}
    catch(e){console.error("Fam Studio: no se pudo abrir",e);el("lk_msg").textContent="No se ha podido abrir Fam Studio. Recarga la página."}
    el("lk_btn").disabled=false;
  }
  // --- administración ---
  FS.norm=norm;
  FS.checkAdmin=async c=>{
    const b=FS.bundle;if(!b||!b.adminSalt||!b.adminHash||!okIter(b.adminIter))return false;
    return sameStr(await adminHash(c,b.adminSalt,b.adminIter),b.adminHash);
  };
  // Prepara data.enc + version.json nuevos.
  //  - team:    código nuevo del equipo (opcional)
  //  - current: código actual del equipo; obligatorio si no hay código nuevo.
  //             Se comprueba descifrando el paquete publicado antes de re-cifrar.
  //  - admin:   código de administración nuevo (opcional)
  //  - content: contenido modificado por la administración (opcional, objeto JSON); sustituye al contenido del paquete
  FS.rekey=async({team,current,admin,content})=>{
    if(!FS.bundle||!FS.dataTxt||!FS.ver)throw new Error("Sesión no válida. Vuelve a abrir la app.");
    let code=team;
    if(!norm(code)&&!norm(current))throw new Error("Escribe el código del equipo actual.");
    if(norm(current)){ // el código actual se comprueba descifrando el paquete publicado
      try{await decryptWith(await deriveKey(current,FS.ver.salt,FS.ver.iter),FS.dataTxt)}
      catch(e){throw new Error("El código del equipo actual no es correcto.")}
      if(!norm(code))code=current;
    }
    if(content!==undefined&&(!content||typeof content!=="object"||Array.isArray(content)))throw new Error("El contenido no es válido.");
    const b=JSON.parse(JSON.stringify(Object.assign({},FS.bundle,{content:content||FS.bundle.content})));
    if(norm(admin)){b.adminSalt=rnd(16);b.adminIter=PBK_MIN;b.adminHash=await adminHash(admin,b.adminSalt,b.adminIter)}
    b.meta=Object.assign({},b.meta,{built:new Date().toISOString().slice(0,19)});
    const d=new Date(),p=n=>String(n).padStart(2,"0");
    // la sal solo cambia con un código de equipo nuevo: así la clave guardada en cada móvil sigue valiendo
    const ver={v:d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+p(d.getHours())+p(d.getMinutes())+p(d.getSeconds()),salt:norm(team)?rnd(16):FS.ver.salt,iter:PBK_MIN};
    const txt=await encryptWith(await deriveKey(code,ver.salt,ver.iter),b);
    FS.out={data:txt,ver:JSON.stringify(ver)};FS.download("data");setTimeout(()=>FS.download("ver"),600);
  };
  FS.download=f=>{if(!FS.out)return;const isData=f==="data";const blob=new Blob([isData?FS.out.data:FS.out.ver],{type:isData?"application/octet-stream":"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=isData?"data.enc":"version.json";document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)};
  function start(){
    el("lk_btn").addEventListener("click",tryCode);
    el("lk_code").addEventListener("keydown",e=>{if(e.key==="Enter")tryCode()});
    boot();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
