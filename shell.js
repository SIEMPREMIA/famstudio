"use strict";
/* fflate 0.8.2 (solo gunzipSync, empaquetado con esbuild). Descompresor de reserva para navegadores sin DecompressionStream.
   https://github.com/101arrowz/fflate

MIT License

Copyright (c) 2023 Arjun Barrett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(()=>{var f=Uint8Array,S=Uint16Array,gr=Int32Array,tr=new f([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),er=new f([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),yr=new f([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ir=function(r,n){for(var t=new S(31),a=0;a<31;++a)t[a]=n+=1<<r[a-1];for(var i=new gr(t[30]),a=1;a<30;++a)for(var c=t[a];c<t[a+1];++c)i[c]=c-t[a]<<5|a;return{b:t,r:i}},ar=ir(tr,2),or=ar.b,wr=ar.r;or[28]=258,wr[258]=28;var sr=ir(er,0),mr=sr.b,Zr=sr.r,Y=new S(32768);for(o=0;o<32768;++o)g=(o&43690)>>1|(o&21845)<<1,g=(g&52428)>>2|(g&13107)<<2,g=(g&61680)>>4|(g&3855)<<4,Y[o]=((g&65280)>>8|(g&255)<<8)>>1;var g,o,I=function(r,n,t){for(var a=r.length,i=0,c=new S(n);i<a;++i)r[i]&&++c[r[i]-1];var y=new S(n);for(i=1;i<n;++i)y[i]=y[i-1]+c[i-1]<<1;var p;if(t){p=new S(1<<n);var z=15-n;for(i=0;i<a;++i)if(r[i])for(var U=i<<4|r[i],w=n-r[i],e=y[r[i]-1]++<<w,s=e|(1<<w)-1;e<=s;++e)p[Y[e]>>z]=U}else for(p=new S(a),i=0;i<a;++i)r[i]&&(p[i]=Y[y[r[i]-1]++]>>15-r[i]);return p},Z=new f(288);for(o=0;o<144;++o)Z[o]=8;var o;for(o=144;o<256;++o)Z[o]=9;var o;for(o=256;o<280;++o)Z[o]=7;var o;for(o=280;o<288;++o)Z[o]=8;var o,fr=new f(32);for(o=0;o<32;++o)fr[o]=5;var o;var xr=I(Z,9,1);var zr=I(fr,5,1),k=function(r){for(var n=r[0],t=1;t<r.length;++t)r[t]>n&&(n=r[t]);return n},u=function(r,n,t){var a=n/8|0;return(r[a]|r[a+1]<<8)>>(n&7)&t},W=function(r,n){var t=n/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(n&7)},Ar=function(r){return(r+7)/8|0},Mr=function(r,n,t){return(n==null||n<0)&&(n=0),(t==null||t>r.length)&&(t=r.length),new f(r.subarray(n,t))};var Sr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],l=function(r,n,t){var a=new Error(n||Sr[r]);if(a.code=r,Error.captureStackTrace&&Error.captureStackTrace(a,l),!t)throw a;return a},Ur=function(r,n,t,a){var i=r.length,c=a?a.length:0;if(!i||n.f&&!n.l)return t||new f(0);var y=!t,p=y||n.i!=2,z=n.i;y&&(t=new f(i*3));var U=function(_){var rr=t.length;if(_>rr){var nr=new f(Math.max(rr*2,_));nr.set(t),t=nr}},w=n.f||0,e=n.p||0,s=n.b||0,x=n.l,B=n.d,F=n.m,D=n.n,G=i*8;do{if(!x){w=u(r,e,1);var O=u(r,e+1,3);if(e+=3,O)if(O==1)x=xr,B=zr,F=9,D=5;else if(O==2){var P=u(r,e,31)+257,j=u(r,e+10,15)+4,J=P+u(r,e+5,31)+1;e+=14;for(var T=new f(J),$=new f(19),h=0;h<j;++h)$[yr[h]]=u(r,e+h*3,7);e+=j*3;for(var K=k($),ur=(1<<K)-1,lr=I($,K,1),h=0;h<J;){var Q=lr[u(r,e,ur)];e+=Q&15;var v=Q>>4;if(v<16)T[h++]=v;else{var A=0,E=0;for(v==16?(E=3+u(r,e,3),e+=2,A=T[h-1]):v==17?(E=3+u(r,e,7),e+=3):v==18&&(E=11+u(r,e,127),e+=7);E--;)T[h++]=A}}var V=T.subarray(0,P),m=T.subarray(P);F=k(V),D=k(m),x=I(V,F,1),B=I(m,D,1)}else l(1);else{var v=Ar(e)+4,q=r[v-4]|r[v-3]<<8,L=v+q;if(L>i){z&&l(0);break}p&&U(s+q),t.set(r.subarray(v,L),s),n.b=s+=q,n.p=e=L*8,n.f=w;continue}if(e>G){z&&l(0);break}}p&&U(s+131072);for(var vr=(1<<F)-1,cr=(1<<D)-1,H=e;;H=e){var A=x[W(r,e)&vr],M=A>>4;if(e+=A&15,e>G){z&&l(0);break}if(A||l(2),M<256)t[s++]=M;else if(M==256){H=e,x=null;break}else{var X=M-254;if(M>264){var h=M-257,C=tr[h];X=u(r,e,(1<<C)-1)+or[h],e+=C}var N=B[W(r,e)&cr],R=N>>4;N||l(3),e+=N&15;var m=mr[R];if(R>3){var C=er[R];m+=W(r,e)&(1<<C)-1,e+=C}if(e>G){z&&l(0);break}p&&U(s+131072);var d=s+X;if(s<m){var b=c-m,pr=Math.min(m,d);for(b+s<0&&l(3);s<pr;++s)t[s]=a[b+s]}for(;s<d;++s)t[s]=t[s-m]}}n.l=x,n.p=H,n.b=s,n.f=w,x&&(w=1,n.m=F,n.d=B,n.n=D)}while(!w);return s!=t.length&&y?Mr(t,0,s):t.subarray(0,s)};var Fr=new f(0);var Dr=function(r){(r[0]!=31||r[1]!=139||r[2]!=8)&&l(6,"invalid gzip data");var n=r[3],t=10;n&4&&(t+=(r[10]|r[11]<<8)+2);for(var a=(n>>3&1)+(n>>4&1);a>0;a-=!r[t++]);return t+(n&2)},Tr=function(r){var n=r.length;return(r[n-4]|r[n-3]<<8|r[n-2]<<16|r[n-1]<<24)>>>0};function hr(r,n){var t=Dr(r);return t+8>r.length&&l(6,"invalid gzip data"),Ur(r.subarray(t,-8),{i:2},n&&n.out||new f(Tr(r)),n&&n.dictionary)}var Cr=typeof TextDecoder!="undefined"&&new TextDecoder,Ir=0;try{Cr.decode(Fr,{stream:!0}),Ir=1}catch(r){}self.fsGunzip=hr;})();

// ===== Fam Studio · arranque, acceso con código y cifrado =====
// Este archivo es público. No contiene códigos ni contenido: todo el contenido
// va en data.enc (AES-GCM) y se trata siempre como JSON, nunca como código.
"use strict";
const FS={};
let DB=null;
// aviso de instalación de Android/Chrome: llega pronto, antes de que se descifre la app; se guarda para el botón «Instalar Fam Studio» (tutorial.js)
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();window.__bip=e;try{window.dispatchEvent(new Event("fs-bip"))}catch(x){}});
window.addEventListener("appinstalled",()=>{window.__bip=null;try{localStorage.setItem("fs_inst_ok","1")}catch(x){}});
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
  const SELF=document.currentScript&&document.currentScript.src||"";
  const CACHE="fs-cache-3"; // el mismo nombre que en sw.js
  FS.CACHE=CACHE;
  // --- gzip: DecompressionStream si existe; si no, el descompresor de reserva (gunzip.js, dentro de este mismo archivo) ---
  async function gunzip(u8){
    if(typeof DecompressionStream==="function"){
      try{return new Uint8Array(await new Response(new Blob([u8]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer())}
      catch(e){/* cae al descompresor de reserva */}
    }
    if(typeof self.fsGunzip==="function")return self.fsGunzip(u8);
    throw new Error("gzip");
  }
  async function gzip(u8){
    if(typeof CompressionStream!=="function")throw new Error("Este navegador no puede preparar los archivos. Usa una versión reciente de Chrome o Safari.");
    return new Uint8Array(await new Response(new Blob([u8]).stream().pipeThrough(new CompressionStream("gzip"))).arrayBuffer());
  }
  // --- criptografía ---
  // Clave AES-GCM 256 derivada con PBKDF2-SHA256. SIEMPRE no extraíble.
  async function deriveKey(code,salt,iter){
    if(!okIter(iter))throw new Error("version");
    const base=await crypto.subtle.importKey("raw",te.encode(norm(code)),"PBKDF2",false,["deriveKey"]);
    return crypto.subtle.deriveKey({name:"PBKDF2",salt:unb64(salt),iterations:iter,hash:"SHA-256"},base,{name:"AES-GCM",length:256},false,["encrypt","decrypt"]);
  }
  // archivo .enc = IV (12 bytes) + AES-GCM( gzip( JSON ) ), en binario
  async function decryptWith(key,buf){
    const u=buf instanceof Uint8Array?buf:new Uint8Array(buf);
    const pt=await crypto.subtle.decrypt({name:"AES-GCM",iv:u.subarray(0,12)},key,u.subarray(12));
    return JSON.parse(td.decode(await gunzip(new Uint8Array(pt)))); // solo datos: JSON puro
  }
  async function encryptWith(key,obj){
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const ct=await crypto.subtle.encrypt({name:"AES-GCM",iv},key,await gzip(te.encode(JSON.stringify(obj))));
    const out=new Uint8Array(12+ct.byteLength);out.set(iv);out.set(new Uint8Array(ct),12);return out;
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
  // --- descarga en segundo plano ---
  // La pantalla del código se pinta sin esperar. version.json y data.enc se piden en cuanto se abre la página.
  // Los archivos .enc se guardan en la caché del service worker (la misma que lee sw.js), ligados a ?v=<versión>.
  let verP=null,dataP=null,ocupado=false;
  FS.got=0;FS.total=0;FS.listo=false;FS.espera=false;
  function txtEspera(){const p=FS.total>0&&FS.got<=FS.total?" "+Math.min(99,Math.floor(FS.got/FS.total*100))+" %":"";return "Preparando tu contenido…"+p}
  function pintaEspera(){
    if(!FS.espera)return;
    const t=txtEspera();
    if(!el("lock").hidden)el("lk_msg").textContent=t;else{const s=el("sp_msg");if(s)s.textContent=t;const b=el("sp_bar");if(b){b.classList.toggle("ind",!(FS.total>0));if(FS.total>0)b.style.setProperty("--p",Math.max(.04,Math.min(1,FS.got/FS.total)).toFixed(3))}}
  }
  async function getVer(){
    const ant=lg("fs_ver"),tieneAnt=!!(ant&&okIter(ant.iter));
    const ac=typeof AbortController==="function"?new AbortController():null;
    const tm=ac?setTimeout(()=>ac.abort(),tieneAnt?3000:25000):0; // con cobertura mala se usa lo guardado
    try{
      const r=await fetch("version.json?t="+Date.now(),{cache:"no-store",signal:ac?ac.signal:undefined});
      if(r.ok){const v=await r.json();if(v&&typeof v.v==="string"&&typeof v.salt==="string"&&okIter(v.iter)){lset("fs_ver",v);return v}}
    }catch(e){}finally{clearTimeout(tm)}
    return tieneAnt?ant:null;
  }
  async function enCache(name,v){try{return !!(await (await caches.open(CACHE)).match(name+"?v="+encodeURIComponent(v)))}catch(e){return false}}
  async function guardar(url,u8){
    try{
      const c=await caches.open(CACHE);
      await c.put(url,new Response(u8,{headers:{"content-type":"application/octet-stream","content-length":String(u8.length)}}));
      const u=new URL(url,location.href);
      for(const k of await c.keys()){const ku=new URL(k.url);if(ku.pathname===u.pathname&&ku.search!==u.search)c.delete(k)} // borra la versión vieja
    }catch(e){}
  }
  // Descarga un .enc como bytes (con progreso). Primero mira la caché; si no está, lo baja y lo guarda.
  async function getBin(name,v,onp){
    const url=name+"?v="+encodeURIComponent(v);
    let r=null;
    try{r=await (await caches.open(CACHE)).match(url)}catch(e){}
    const deCache=!!r;
    if(!r){r=await fetch(url);if(!r.ok)throw new Error("data")}
    const total=+r.headers.get("content-length")||0;
    let out;
    if(r.body&&r.body.getReader){
      const rd=r.body.getReader(),parts=[];let got=0;
      for(;;){const x=await rd.read();if(x.done)break;parts.push(x.value);got+=x.value.length;if(onp)onp(got,total)}
      out=new Uint8Array(got);let o=0;for(const p of parts){out.set(p,o);o+=p.length}
    }else out=new Uint8Array(await r.arrayBuffer());
    if(!out.length)throw new Error("data");
    if(!deCache)await guardar(url,out);
    return out;
  }
  function iniciarCarga(){
    if(dataP)return dataP;
    FS.got=0;FS.total=0;FS.listo=false;
    verP=getVer();
    dataP=verP.then(async ver=>{
      if(!ver)throw new Error("ver");
      // una página vieja (index.html de la versión anterior) con una versión nueva en el servidor: se recarga una vez para no mezclar archivos de dos versiones
      let sv="";try{sv=new URL(SELF,location.href).searchParams.get("v")||""}catch(e){}
      if(sv&&sv!==ver.v){
        let ya="";try{ya=sessionStorage.getItem("fs_rl")||""}catch(e){}
        if(ya!==ver.v){try{sessionStorage.setItem("fs_rl",ver.v)}catch(e){}location.reload();return new Promise(()=>{})}
      }
      // precarga app.js mientras baja el contenido: así no se pide dos veces ni se espera al final
      const pre=()=>{try{const l=document.createElement("link");l.rel="prefetch";l.as="script";l.href="app.js?v="+encodeURIComponent(ver.v);document.head.appendChild(l)}catch(e){}};
      if(document.readyState==="complete")pre();else window.addEventListener("load",pre,{once:true}); // sin retrasar el evento load
      const buf=await getBin("data.enc",ver.v,(g,t)=>{FS.got=g;FS.total=t;pintaEspera()});
      FS.listo=true;return {ver,buf};
    });
    dataP.catch(()=>{dataP=null;verP=null});
    return dataP;
  }
  const msgCarga=e=>e&&e.message==="ver"?"Necesitas conexión a internet la primera vez que abres Fam Studio.":"No se ha podido cargar Fam Studio. Comprueba tu conexión y pulsa Entrar otra vez.";
  // --- imágenes: llegan en img.enc, después de que la app ya se puede usar ---
  function ponerImgs(map,donde){
    const M=new Map(Object.entries(map));
    const walk=o=>{
      if(Array.isArray(o)){for(let i=0;i<o.length;i++){const x=o[i];if(typeof x==="string"){if(M.has(x))o[i]=M.get(x)}else if(x&&typeof x==="object")walk(x)}}
      else if(o&&typeof o==="object"){for(const k in o){const x=o[k];if(typeof x==="string"){if(M.has(x))o[k]=M.get(x)}else if(x&&typeof x==="object")walk(x)}}
    };
    (donde||Object.keys(DB)).forEach(k=>{if(DB[k])walk(DB[k])});
  }
  async function cargaImgs(ver,key,meta){
    const o=await decryptWith(key,await getBin("img.enc",ver.v));
    if(!o||typeof o.imgs!=="object")throw new Error("imgs");
    ponerImgs(o.imgs,Array.isArray(meta.imgIn)?meta.imgIn:null);
    FS.imgsOk=true;
  }
  function recargaImgs(){try{if(typeof render==="function"&&typeof S!=="undefined"&&/^(negocio|equipo|eq_)/.test(S.tab))render(true)}catch(e){}}
  function loadScript(src){return new Promise((ok,ko)=>{const s=document.createElement("script");s.src=src;s.onload=ok;s.onerror=()=>ko(new Error("app"));document.body.appendChild(s)})}
  // Guarda lo que hace falta para abrir sin red (la página, el shell y la app). Se hace al terminar de arrancar:
  // en la primera visita el service worker todavía no controlaba la página y no habría guardado nada.
  async function guardaShell(ver){
    try{
      const c=await caches.open(CACHE);
      for(const u of [location.origin+location.pathname,SELF,"app.js?v="+encodeURIComponent(ver.v),"manifest.webmanifest","icon-192.png","apple-touch-icon.png"]){
        if(!u)continue;
        try{if(!(await c.match(u)))await c.add(u)}catch(e){}
      }
      // fuera todo lo guardado de otra versión (paquetes de fotos, portadas, datos…)
      for(const k of await c.keys()){const ku=new URL(k.url);if(ku.searchParams.has("v")&&ku.searchParams.get("v")!==ver.v)await c.delete(k)}
    }catch(e){}
  }
  async function launch(ver,data,key){
    if(!data||typeof data!=="object"||!data.content||typeof data.content!=="object")throw new Error("datos");
    FS.ver=ver;FS.bundle=data;DB=data.content;
    // paquetes cifrados que se bajan solo cuando hacen falta (p. ej. prod.enc: imágenes de producto). Se descargan y descifran una vez.
    const sueltos={};
    FS.loadEnc=name=>sueltos[name]||(sueltos[name]=getBin(name,ver.v).then(b=>decryptWith(key,b)).catch(e=>{delete sueltos[name];throw e}));
    const meta=data.meta||{},nImg=+meta.imgs||0;
    FS.imgsOk=!nImg;
    // si las imágenes ya están en el móvil se esperan (es rápido); si no, se bajan después de abrir la app
    const lista=nImg&&await enCache("img.enc",ver.v);
    if(lista){FS.imgP=cargaImgs(ver,key,meta);FS.imgP.catch(()=>{});await FS.imgP.catch(()=>{})}
    await loadScript("app.js?v="+encodeURIComponent(ver.v));
    const prev=lg("fs_seen_v");lset("fs_seen_v",ver.v);
    el("splash").hidden=true;el("lock").hidden=true;el("app").hidden=false;
    if(prev&&prev!==ver.v&&window.toast)setTimeout(()=>toast("Fam Studio se ha actualizado"),400);
    if(nImg&&!lista){FS.imgP=cargaImgs(ver,key,meta);FS.imgP.then(recargaImgs,()=>{})}
    setTimeout(()=>guardaShell(ver),1500);
  }
  async function boot(){
    lrm("fs_code"); // versiones antiguas guardaban el código en claro
    if("serviceWorker" in navigator){try{navigator.serviceWorker.register("sw.js").catch(()=>{})}catch(e){}}
    if(!window.crypto||!crypto.subtle){fail("Tu navegador no es compatible. Abre el enlace con Safari o Chrome.");return}
    iniciarCarga(); // empieza ya, en segundo plano
    const st=await IDB.get();
    if(!(st&&st.key)){showLock(st?"El código del equipo ha cambiado. Escribe el código nuevo.":"");if(st)await IDB.del();return}
    // ya entró otras veces: abre sin pedir el código
    FS.espera=true;
    let r;try{r=await dataP}catch(e){FS.espera=false;fail(msgCarga(e).replace(" y pulsa Entrar otra vez.","."));return}
    FS.espera=false;
    let data=null;
    if(st.salt===r.ver.salt){try{data=await decryptWith(st.key,r.buf)}catch(e){data=null}}
    if(!data){await IDB.del();showLock("El código del equipo ha cambiado. Escribe el código nuevo.");return}
    FS.ver=r.ver;FS.dataBuf=r.buf;
    try{await launch(r.ver,data,st.key)}catch(e){console.error("Fam Studio: no se pudo abrir",e);fail("No se ha podido abrir Fam Studio. Recarga la página.")}
  }
  async function tryCode(){
    if(ocupado)return;
    const c=el("lk_code").value;if(!norm(c)){el("lk_msg").textContent="Escribe el código.";return}
    ocupado=true;el("lk_btn").disabled=true;
    FS.espera=!FS.listo;el("lk_msg").textContent=FS.listo?"Comprobando…":txtEspera();
    let key,data,r;
    try{
      iniciarCarga(); // si la descarga había fallado, se vuelve a intentar
      const keyP=verP.then(v=>deriveKey(c,v.salt,v.iter)); // la clave se calcula mientras baja el contenido
      keyP.catch(()=>{});
      try{r=await dataP}catch(e){FS.espera=false;el("lk_msg").textContent=msgCarga(e);el("lk_btn").disabled=false;ocupado=false;return}
      FS.espera=false;el("lk_msg").textContent="Comprobando…";
      key=await keyP;data=await decryptWith(key,r.buf);
    }catch(e){
      FS.espera=false;
      el("lk_msg").textContent="Ese código no es correcto. Revísalo o pídeselo a quien te invitó.";el("lk_btn").disabled=false;ocupado=false;return;
    }
    el("lk_code").value="";
    FS.ver=r.ver;FS.dataBuf=r.buf;
    await IDB.put(key,r.ver.salt); // si IndexedDB no está disponible, se pedirá el código en cada arranque
    try{await launch(r.ver,data,key)}
    catch(e){console.error("Fam Studio: no se pudo abrir",e);el("lk_msg").textContent="No se ha podido abrir Fam Studio. Recarga la página."}
    el("lk_btn").disabled=false;ocupado=false;
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
    if(!FS.bundle||!FS.dataBuf||!FS.ver)throw new Error("Sesión no válida. Vuelve a abrir la app.");
    let code=team;
    if(!norm(code)&&!norm(current))throw new Error("Escribe el código del equipo actual.");
    if(norm(current)){ // el código actual se comprueba descifrando el paquete publicado
      try{await decryptWith(await deriveKey(current,FS.ver.salt,FS.ver.iter),FS.dataBuf)}
      catch(e){throw new Error("El código del equipo actual no es correcto.")}
      if(!norm(code))code=current;
    }
    if(content!==undefined&&(!content||typeof content!=="object"||Array.isArray(content)))throw new Error("El contenido no es válido.");
    // las imágenes tienen que estar ya puestas en el contenido: el archivo nuevo las lleva dentro (sin img.enc)
    if(!FS.imgsOk){try{await FS.imgP}catch(e){}if(!FS.imgsOk)throw new Error("Las imágenes todavía se están descargando. Espera un momento y vuelve a intentarlo.")}
    const b=JSON.parse(JSON.stringify(Object.assign({},FS.bundle,{content:content||FS.bundle.content})));
    b.meta=Object.assign({},b.meta);delete b.meta.imgs;delete b.meta.imgIn;
    if(norm(admin)){b.adminSalt=rnd(16);b.adminIter=PBK_MIN;b.adminHash=await adminHash(admin,b.adminSalt,b.adminIter)}
    b.meta=Object.assign({},b.meta,{built:new Date().toISOString().slice(0,19)});
    const d=new Date(),p=n=>String(n).padStart(2,"0");
    // la sal solo cambia con un código de equipo nuevo: así la clave guardada en cada móvil sigue valiendo
    const ver={v:d.getFullYear()+p(d.getMonth()+1)+p(d.getDate())+p(d.getHours())+p(d.getMinutes())+p(d.getSeconds()),salt:norm(team)?rnd(16):FS.ver.salt,iter:PBK_MIN};
    const nk=await deriveKey(code,ver.salt,ver.iter);
    const txt=await encryptWith(nk,b);
    // con un código de equipo nuevo cambia la clave: las imágenes de producto (prod.enc) se vuelven a cifrar con ella
    let prod=null;
    if(norm(team)&&b.content&&b.content.fotos&&b.content.fotos.prod&&b.content.fotos.prod.length){
      try{prod=await encryptWith(nk,await FS.loadEnc("prod.enc"))}catch(e){throw new Error("No se han podido preparar las imágenes de producto. Comprueba la conexión y vuelve a intentarlo.")}
    }
    FS.out={data:txt,ver:JSON.stringify(ver),prod};FS.download("data");setTimeout(()=>FS.download("ver"),600);if(prod)setTimeout(()=>FS.download("prod"),1200);
  };
  FS.download=f=>{if(!FS.out)return;const bin=f==="data"||f==="prod";if(f==="prod"&&!FS.out.prod)return;const blob=new Blob([f==="data"?FS.out.data:f==="prod"?FS.out.prod:FS.out.ver],{type:bin?"application/octet-stream":"application/json"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=f==="data"?"data.enc":f==="prod"?"prod.enc":"version.json";document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1500)};
  function start(){
    el("lk_btn").addEventListener("click",tryCode);
    el("lk_code").addEventListener("keydown",e=>{if(e.key==="Enter")tryCode()});
    window.addEventListener("online",()=>{if(!dataP&&!FS.bundle)iniciarCarga()});
    boot();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
})();
