const RULES=[
 // alto
 {n:"a",re:/trabaj\w*\s+desde\s+casa|desde\s+(el\s+)?sofa|desde\s+el\s+movil/,t:"Ingresos / trabajo desde casa",alt:"compatibilizar un proyecto con tu día a día",l:"alto"},
 {n:"a",re:/\bgana(r|s|ndo|mos|d)?\b\s+(dinero|pasta|euros|un\s+sueldo|plata)|dinero\s+extra|dinero\s+facil|sueldo\s+extra|\bingresos?\b|\bsueldo\b|\bcobrar\b|\bfacturar\b|\bfacturacion\b/,t:"Promesas de dinero o ingresos",alt:"no hables de dinero: habla de proyecto, formación y comunidad",l:"alto"},
 {n:"a",re:/libertad\s+(financiera|economica)|independencia\s+(financiera|economica)|renta\s+pasiva|ingresos?\s+pasivos?/,t:"Libertad financiera / ingresos pasivos",alt:"flexibilidad de horarios, proyecto propio, comunidad",l:"alto"},
 {n:"a",re:/(se|s[eé])\s+tu\s+propi[oa]\s+jef[ea]|tu\s+propio\s+jefe|sin\s+jefe/,t:"«Sé tu propio jefe»",alt:"un proyecto a tu ritmo",l:"alto"},
 {n:"a",re:/(deja|dejar|renuncia\w*|abandona\w*)\s+(a\s+)?(tu|mi)\s+(trabajo|empleo)/,t:"Dejar el trabajo",alt:"compaginar un proyecto con tu vida",l:"alto"},
 {n:"a",re:/sin\s+(esfuerzo|invertir|inversion|riesgo|experiencia\s+ni|horarios\s+ni)|garantizad[oa]s?|garantizamos|resultados?\s+(asegurad|garantizad)|100\s*%\s*(seguro|efectiv)/,t:"Garantías o «sin esfuerzo»",alt:"cada persona es distinta; cuéntalo sin prometer resultados",l:"alto"},
 {n:"a",re:/perdida\s+de\s+peso|perd(er|ido|iendo|i)\s+(\d+\s*)?(kilos|kg|peso)|bajar\s+de\s+peso|adelgaz\w*|\bkilos?\b|\bkgs?\b|quemagrasas?|quemar\s+(la\s+)?grasa|\bmichelin\b|\bflacidez\b|\bgrasa\b|reducir\s+(tallas?|medidas)|bajar\s+(\d+\s+)?tallas?/,t:"Pérdida de peso / cuerpo",alt:"hábitos, rutina, bienestar, cómo te sientes",l:"alto"},
 {n:"a",re:/antes\s*(y|\/)\s*despu[eé]s|transformacion\s+(fisica|corporal)|resultados?\s+en\s+\d+\s+(dias|semanas)|en\s+\d+\s+(dias|semanas)\s+(veras|notaras|conseguiras)/,t:"Antes/después o resultados en X tiempo",alt:"cuenta tu rutina, no un resultado",l:"alto"},
 {n:"a",re:/\bcura(r|s|n)?\b|\bsana(r)?\b\s+(tu|la|el)|previene|\btrata(r)?\s+(la|el|tu)|\bdiabetes\b|\bcolesterol\b|\bansiedad\b|\bdepresi\w+|\bcancer\b|\btiroides\b|\binsomnio\b|\bhipertension\b|\bhormonal(es)?\b|\binflamaci\w+/,t:"Alegaciones de salud o enfermedad",alt:"habla de hábitos y bienestar, nunca de enfermedades",l:"alto"},
 {n:"a",re:/\bgord[oa]s?\b|\bobes[oa]s?\b|sobrepeso|\bflac[oa]\b|tienes\s+(barriga|complejos?)|asquerosa|\bfea\b/,t:"Atributos personales / cuerpo (Meta los prohíbe)",alt:"habla de lo que se hace, no de cómo es la persona",l:"alto"},
 {n:"a",re:/\bcomisi\w+|\bbonos?\b|\bbonus\b|capturas?\s+de\s+(pagos?|ingresos?|cobros?)|\brango\b|\bdiamante\b|\bnivel\s+de\s+ingresos/,t:"Comisiones, bonus, rangos o capturas de pago",alt:"no muestres ni menciones remuneración; habla de formación y comunidad",l:"alto"},
 {n:"a",re:/hazte\s+(rica|millonari\w*)|\bmillonari\w*/,t:"Hacerse rico",alt:"evita cualquier mensaje de riqueza",l:"alto"},
 // medio
 {n:"m",re:/\bmilagro\w*|formula\s+secreta|truco\s+(increible|brutal|definitivo)|\bel\s+secreto\b|locura|increible\b/,t:"Clickbait / sensacionalismo",alt:"algo concreto y real: «mi rutina de 3 pasos»",l:"medio"},
 {n:"m",re:/\bdietas?\b|\bdetox\b|depurar|desintoxic\w*|\bsin\s+dieta/,t:"Dieta / detox",alt:"plan de comidas, rutina, hábitos",l:"medio"},
 {n:"m",re:/ultima\s+oportunidad|\balerta\b|\burgente\b|solo\s+hoy|plazas?\s+limitadas?|ultimas\s+plazas|date\s+prisa|no\s+te\s+lo\s+pierdas|corre\b|se\s+acaba\s+el\s+tiempo/,t:"Urgencia alarmista",alt:"da una fecha real y tranquila: «hasta el día X»",l:"medio"},
 {n:"m",re:/multinivel|piramidal|network\s+marketing|\bmlm\b|negocio\s+(de\s+)?red|oportunidad\s+(de\s+)?negocio|oportunidad\s+unica/,t:"Términos del modelo de negocio que activan revisiones",alt:"«proyecto con Farmasi», «venta directa», «comunidad»",l:"medio"},
 {n:"m",re:/lujo|coche\s+de\s+(lujo|empresa)|viajes?\s+pagados?|vacaciones\s+pagadas|casa\s+de\s+lujo|vida\s+de\s+lujo/,t:"Estilo de vida de lujo como «prueba»",alt:"muestra tu rutina real, no lujo",l:"medio"},
 {n:"m",re:/\b\d[\d.,]*\s?(€|euros?|k\b|mil\s+euros)/,t:"Cifras de dinero (solo precios de producto, nunca ingresos)",alt:"quita la cifra o confirma que es el precio de un producto",l:"medio"},
 {n:"m",re:/\b(sin\s+complejos?)\b|\bcomplejos?\b/,t:"Posible referencia a complejos corporales",alt:"«cómoda», «a gusto»",l:"medio"},
 {n:"m",re:/\bpierde\s+(la\s+)?(barriga|panza)|\bbarriga\b/,t:"Parte del cuerpo como problema",alt:"habla de hábitos, no de partes del cuerpo",l:"medio"}
];
// ===== utilidades =====
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const lc=s=>s?s.charAt(0).toLowerCase()+s.slice(1):s, cap=s=>s?s.charAt(0).toUpperCase()+s.slice(1):s;
const noDot=s=>String(s).replace(/[.\s]+$/,"");
function mulberry(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function hash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
let R=Math.random;
const pick=a=>a[Math.floor(R()*a.length)];
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(R()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function ls(k,v){try{if(v===undefined){const x=localStorage.getItem(k);return x?JSON.parse(x):null}localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
const norm=t=>t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const fmtFecha=f=>{if(!f)return"";const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(f);if(!m)return f;const M=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];return (+m[3])+" de "+M[+m[2]-1]};

// ===== mapas derivados de DB (el contenido llega descifrado como JSON) =====
const SIT={},PROD={},GUIA={},GUIA_SIT={},GUIA_KW={};
DB.sits.forEach(s=>{SIT[s.id]=s});
DB.products.forEach(p=>{PROD[p.id]=p});
DB.guias.forEach(g=>{
  GUIA[g.id]=g;
  (g.situaciones||[]).forEach(id=>{(GUIA_SIT[id]=GUIA_SIT[id]||[]).push(g)});
  (g.kw||[]).forEach(k=>{const key=g.via+"|"+k;if(!GUIA_KW[key])GUIA_KW[key]=g});
});
const viaOf=obj=>{const o=DB.OBJS&&DB.OBJS[obj];return o&&o.via==="proyecto"?"proyecto":"clientas"};
// objetivo por defecto de cada vía (el de captación) y lista de objetivos de una vía
const objDefault=via=>via==="proyecto"?"equipo":"valor";
const objsVia=via=>Object.keys(DB.OBJS).filter(k=>viaOf(k)===via);
const sitsVia=via=>DB.sits.filter(s=>s.via===via);
const gruposVia=via=>sitsVia(via).map(s=>s.grupo).filter((g,i,a)=>a.indexOf(g)===i);
const guiaOf=s=>(GUIA_SIT[s.id]||[])[0]||null;
// Recurso en las frases: si el título no empieza por artículo, se envuelve como «mi guía «título»»
function recursoTxt(g,s){
  const t=g?g.titulo:(s?s.recurso:"");
  return /^(mi|mis|el|la|los|las|un|una)\s/i.test(t)?lc(t).replace(/\s*:\s*(.+)$/,"  ($1)").replace(/ {2,}/g," "):"mi guía «"+t+"»";
}
// Palabras clave: las 3 de la situación + 2 de su guía (+ las propias de reto y novedad)
function kwOptions(obj,sitId){
  const s=SIT[sitId];if(!s)return [];
  const g=guiaOf(s),own=s.palabras_clave||[];
  const all=[].concat(own,g?(g.kw||[]).filter(k=>own.indexOf(k)<0).slice(0,2):[],(obj==="reto"||obj==="oferta")?(DB.KWS_OBJ[obj]||[]):[]);
  return all.filter((k,i)=>all.indexOf(k)===i);
}
const NIVEL_TXT=["Nivel 0 · todavía no sabe que le pasa","Nivel 1 · lo sabe, pero no conoce la solución","Nivel 2 · busca solución y compara"];

// ===== utilidades de seguridad para la administración =====
// Solo se aceptan enlaces https:// cuyo dominio esté en esta lista (la misma que valida el build para content/equipo.json)
// o del propio origen. Sin usuario, contraseña ni puerto.
const LINK_HOSTS=["youtube.com","www.youtube.com","m.youtube.com","youtu.be","t.me","chat.whatsapp.com","whatsapp.com","el-despertador-farmasi.mixlr.com","boards.com","academia-farmasi-espana.teachable.com","farmasi.com","www.farmasi.com","linktr.ee","www.facebook.com","open.spotify.com","catalog.farmasius.com","viewer.ipaper.io","catalog.farmasi.pl","drive.google.com","www.canva.com"];
function linkOk(u){
  try{
    const x=new URL(String(u).trim());
    if(x.protocol!=="https:"||x.username||x.password||x.port)return null;
    return LINK_HOSTS.indexOf(x.hostname.toLowerCase())>=0?x.href:null;
  }catch(e){}
  return null;
}
function safeUrl(u){
  const k=linkOk(u);if(k)return k;
  try{const x=new URL(String(u).trim(),location.href);if(x.protocol==="https:"&&x.origin===location.origin&&!x.username&&!x.password)return x.href}catch(e){}
  return null;
}
// Las imágenes se re-codifican con canvas (se pierden los metadatos): JPEG, máx. 1600 px y 400 KB.
async function reencodeImage(file){
  const bmp=await createImageBitmap(file);
  const k=Math.min(1,1600/Math.max(bmp.width,bmp.height));
  const cv=document.createElement("canvas");cv.width=Math.max(1,Math.round(bmp.width*k));cv.height=Math.max(1,Math.round(bmp.height*k));
  const cx=cv.getContext("2d");cx.fillStyle="#fff";cx.fillRect(0,0,cv.width,cv.height);cx.drawImage(bmp,0,0,cv.width,cv.height);
  for(let q=.9;q>=.4;q-=.1){
    const blob=await new Promise(ok=>cv.toBlob(ok,"image/jpeg",q));
    if(blob&&blob.size<=400*1024)return blob;
  }
  throw new Error("La imagen es demasiado pesada.");
}
const pdfOk=f=>!!f&&f.type==="application/pdf"&&f.size<=3*1024*1024;

// ===== anti-repetición: últimos 30 ganchos, CTA y frases usados =====
const HIST_KEY="fs_recent",HIST_MAX=30;
function histSets(){const h=ls(HIST_KEY)||{};return {g:new Set(h.g||[]),c:new Set(h.c||[]),f:new Set(h.f||[])}}
function histCommit(used){
  if(!used)return;
  const h=ls(HIST_KEY)||{},o={};
  ["g","c","f"].forEach(k=>{o[k]=(h[k]||[]).concat(used[k]||[]).filter((x,i,a)=>a.lastIndexOf(x)===i).slice(-HIST_MAX)});
  ls(HIST_KEY,o);
}

// ===== revisor Meta =====
function scanMeta(text){
  const n=norm(text),hits=[];
  RULES.forEach(r=>{const re=new RegExp(r.re.source,"g");let m;while((m=re.exec(n))){if(!m[0].trim()){re.lastIndex++;continue}
    // «piel grasa», «raíz grasa» o «sensación grasa» describen cosmética, no el cuerpo
    if(m[0]==="grasa"&&/(piel|pieles|raiz|sensacion|pelo|cabello|textura|cutis|tez|mixta|seca)\b[^.]{0,14}$/.test(n.slice(Math.max(0,m.index-28),m.index)))continue;
    hits.push({i:m.index,len:m[0].length,w:text.substr(m.index,m[0].length),t:r.t,alt:r.alt,l:r.l})}});
  return hits.sort((a,b)=>a.i-b.i);
}
// ctx (opcional): {deseo,dolor,recurso} de la secuencia, para reconocer el beneficio y la promesa concreta
function ctaCheck(t,ctx){
  const n=norm(t),r={ben:false,pro:false,acc:false,avisos:[]};
  const has=x=>x&&n.includes(norm(String(x)).slice(0,18));
  // beneficio: lo que consigue la persona (su resultado o su alivio)
  r.ben=/^si (tienes|echas|te frena|te preguntas|alguna vez|nunca|llevas|has|lo tuyo)|si quieres|quieres|te apetece|apetece|para (que|poder|tener|sentirte|llegar|salir|cuidar|ahorrar|no |dejar|aprovechar|acertar|ir |abrir|disfrazarte)|puedas|poder |consigue|ahorra|evita|dejar de|deje de|no hace falta|sin (prisas|agobios|complicaciones|perder|miedo|liarte|complicarte|presion|compromiso)|tener |sentirte|llegar a|salir de casa|a gusto|tranquil/.test(n)||!!(ctx&&(has(ctx.deseo)||has(ctx.dolor)));
  // promesa concreta: qué recurso recibe (palabra de recurso, o «te mando/paso/envío/dejo» + algo con tres palabras o más)
  r.pro=/guia|rutina|lista|paso a paso|plantilla|audio|catalogo|checklist|calendario|muestra|seleccion|ideas|reto|novedades|mini guia|video|chuleta|mapa|apuntes|receta|tabla|esquema|resumen|truco|cuaderno|agenda|ficha|pdf/.test(n)||/\bte (mando|paso|envio|dejo|preparo|comparto|enseno|explico)\s+(?!info\b|informacion\b|mas\b|todo\b)\w+(\s+\w+){2,}/.test(n)||!!(ctx&&ctx.recurso&&n.includes(norm(ctx.recurso)));
  // acción: comentar / responder / escribir / dejar la palabra, con una palabra clave en mayúsculas
  r.acc=/\b(coment\w*|escrib\w+|respond\w+|contest\w+|dime|dices|dejame|dejanos|mandame|enviame)\b/.test(n)&&/(^|[^A-Za-zÁÉÍÓÚÑáéíóúñ0-9])[A-ZÁÉÍÓÚÑ0-9]{3,}(?![A-Za-zÁÉÍÓÚÑáéíóúñ0-9])/.test(t.replace(/¿|\?/g,""));
  if(/https?:|www\.|\.com|enlace|link/.test(n))r.avisos.push("Nada de enlaces en la story: usa «comenta la palabra X».");
  if(/si quieres empezar a\b/.test(n))r.avisos.push("Evita «si quieres empezar a…»: atrae a quien no va a comprar. Habla del resultado que busca.");
  DB.CTA_FLOJOS.forEach(([p0,m])=>{
    const p=norm(p0);
    if(!n.includes(p)||p==="si quieres empezar a")return;
    // «escríbeme» o «te cuento cómo» solo son flojos si no llevan palabra clave y recurso concreto
    if(r.acc&&r.pro&&["escribeme","te cuento como","para mas info","preguntame"].includes(p))return;
    r.avisos.push("«"+p0+"» es flojo. "+m+".");
  });
  let nv=n; // la venta directa se mira en lo que escribe la persona, no en el dolor de la situación
  if(ctx)[ctx.dolor,ctx.deseo].forEach(x=>{if(x)nv=nv.split(norm(lc(noDot(String(x))))).join(" ")});
  nv=nv.replace(/\b(sin|no|ni)\s+(tener que\s+)?(volver a\s+)?compra\w*/g," ");
  if(/compra|comprar|pide ya|pedido ya|oferta ya/.test(nv))r.avisos.push("Evita la venta directa en el CTA: ofrece primero un recurso.");
  r.ok=r.ben&&r.pro&&r.acc&&!r.avisos.length;
  return r;
}

// ===== definición de roles =====
// pref: formatos preferidos por nivel [empiezo, me suelto, pro]
const ROLES={
 apertura:{n:"Apertura visual",pref:["B","B","BA"],dur:"5 a 7 s",pal:"Primera semana",zona:"Texto corto arriba. Nada que venda."},
 gancho:{n:"Gancho",pref:["C","CB","CA"],dur:"7 a 12 s",pal:"Retención",zona:"Arriba, grande. El gancho nunca va abajo."},
 paso:{n:"Paso del tutorial",pref:["D","DC","DA"],dur:"8 a 12 s",pal:"Retención",zona:"Número de paso arriba; el gesto, en el centro."},
 uso:{n:"Cómo lo uso",pref:["D","DB","DA"],dur:"8 a 12 s",pal:"Retención",zona:"Texto arriba; el producto, en el centro."},
 opinion:{n:"Mi opinión sincera",pref:["C","CA","A"],dur:"10 a 15 s",pal:"Retención",zona:"Título arriba; tu cara, libre."},
 cierre:{n:"Cierre",pref:["B","BC","BA"],dur:"5 a 8 s",pal:"Retención",zona:"Una frase corta arriba."},
 prueba:{n:"Prueba social",pref:["C","C","CD"],dur:"7 a 10 s",pal:"Retención",zona:"Título arriba; la captura, debajo del texto."},
 cta:{n:"CTA (llamada a la acción)",pref:["C","CA","CA"],dur:"10 a 15 s",pal:"Respuestas",zona:"Arriba el beneficio; la palabra clave, la más grande."},
 pregunta:{n:"Pregunta a tu audiencia",pref:["C","C","CA"],dur:"5 a 8 s",pal:"Respuestas",zona:"Pregunta arriba; el sticker, en el centro."},
 contexto:{n:"De dónde partía",pref:["C","CB","CA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; el detalle, debajo."},
 testimonio:{n:"Testimonio",pref:["C","CD","CD"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; la captura, debajo."},
 aprendizaje:{n:"Lo que te llevas",pref:["C","CA","AC"],dur:"8 a 12 s",pal:"Retención",zona:"Una idea clara arriba."},
 hizo:{n:"Qué hizo",pref:["C","CD","DA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; el gesto, en el centro."},
 objecion:{n:"La objeción",pref:["C","CA","CA"],dur:"7 a 10 s",pal:"Retención",zona:"La frase entre comillas, arriba y grande."},
 yo:{n:"Tu historia con ello",pref:["C","CA","A"],dur:"10 a 15 s",pal:"Retención",zona:"Título arriba; tu cara, libre."},
 reencuadre:{n:"Verlo de otra forma",pref:["C","CD","DA"],dur:"8 a 12 s",pal:"Retención",zona:"La idea nueva arriba."},
 creencia:{n:"Lo que crees ahora",pref:["B","BC","AB"],dur:"7 a 10 s",pal:"Retención",zona:"Una frase corta arriba."},
 dato:{n:"Tu trayectoria",pref:["C","CB","CA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; tres datos debajo."},
 reflexion:{n:"Reflexión",pref:["B","BA","BA"],dur:"7 a 12 s",pal:"Retención",zona:"Texto corto arriba."},
 reflexion2:{n:"La conexión con tu clienta",pref:["C","CA","CA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; la idea, debajo."},
 equipo_dia:{n:"Tu día con el proyecto",pref:["B","BC","AB"],dur:"8 a 12 s",pal:"Retención",zona:"Texto arriba; la escena, libre."},
 equipo_apoyo:{n:"El equipo que te acompaña",pref:["C","CB","CA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; los valores, debajo."},
 equipo_dudas:{n:"Una duda habitual",pref:["C","CA","CA"],dur:"8 a 12 s",pal:"Retención",zona:"La duda arriba y la respuesta debajo."},
 reglas:{n:"Reglas del reto",pref:["C","CD","DC"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; las reglas, debajo."},
 calendario:{n:"El calendario del reto",pref:["C","CD","DC"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; los días, debajo."},
 novedad:{n:"La novedad",pref:["B","BD","BA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; el producto, en el centro."},
 para_quien:{n:"Para quién es",pref:["C","CA","CA"],dur:"8 a 12 s",pal:"Retención",zona:"Título arriba; la lista, debajo."}
};

// ===== frases del banco (DB.frases) adecuadas a cada vía =====
const RE_EQ=/equipo|proyecto|formaci|zoom|grupo|primera semana|dudando/i;
const RE_PROY_Q=/aprender|algo propio|apuntado|animarías|frena|grabarte|organizar tu semana|móvil por la noche|solo tuyo|es solo tuyo|acompañe/i;
const Q_GAMA={maq:/labial|base |máscara|pestañas|maquill/i,perfume:/perfume|regalar|regalen|regalarían/i,piel:/piel|desmaquill|crema|espejo/i,cabello:/pelo|coleta/i,nutri:/batido|café|té /i};
const Q_ANY=new RegExp(Object.values(Q_GAMA).map(r=>r.source).join("|"),"i");
function frasesPara(clave,via,s){
  const L=DB.frases[clave]||[];
  let out;
  if(clave==="pruebas"){
    out=via==="proyecto"?L.filter(x=>RE_EQ.test(x)&&!/clienta|rutina|labial|producto/i.test(x)):L.filter(x=>!RE_EQ.test(x));
  }else if(clave==="preguntas"){
    if(via==="proyecto")out=L.filter(x=>RE_PROY_Q.test(x)||!Q_ANY.test(x));
    else{
      const gs=(s.gamas||[]).filter(g=>Q_GAMA[g]);
      out=L.filter(x=>!RE_PROY_Q.test(x)&&(!Q_ANY.test(x)||gs.some(g=>Q_GAMA[g].test(x))));
    }
  }else if(clave==="lifestyle"&&via==="proyecto"){
    out=L.filter(x=>RE_EQ.test(x)||/mensajes|clientas?|chicas?/i.test(x));
  }else out=L;
  return out.length?out:L;
}

// ===== construcción de cada story =====
function body(role,c){
  const s=c.s,p=c.p,T=DB.TONOS[c.tono],ab=pick(T.ab);
  const tips=c.tips,pn=c.pn;
  const o=(t,g,d,st)=>({t,g,d,st:st||"Ninguno"});
  switch(role){
  case "apertura":return o("Hoy: "+s.nombre,s.escena+" Sin hablar o con una frase corta.","Si hablas, una frase como esta: «"+noDot(c.F("aperturas"))+"». No vendas nada.");
  case "gancho":return o(c.hook,"Foto o vídeo de la escena. "+s.escena+" Si te sientes cómoda, di el gancho a cámara.",ab+" "+lc(noDot(s.dolor))+". Hoy te cuento cómo "+lc(noDot(s.deseo))+".");
  case "paso":{const k=c.pasos++;return o("Paso "+(k+1)+"\n"+tips[k%tips.length],"Primer plano del gesto: "+p.prueba+".",tips[k%tips.length]+". Explícalo en una frase, como si se lo contaras a una amiga.");}
  case "uso":return o("Así lo uso yo\n"+pn,"Producto en uso: "+pn+". "+cap(p.prueba)+".","Te cuento "+p.uso+", con "+pn+". Lo justo, sin leer una ficha.");
  case "opinion":return o("Lo que opino de verdad","Hablando a cámara, sin guion perfecto.","Qué es lo que más te gusta de "+(pn||"lo que usas")+" y para quién crees que NO es. Decir lo que no encaja da confianza.");
  case "cierre":return o("Eso es todo por hoy","Foto tranquila de tu entorno.","Una frase de cierre sin pedir nada, por ejemplo: «"+noDot(c.F("cierres"))+"».");
  case "prueba":return o(c.via==="proyecto"?"Lo que cuenta alguien del equipo":"Esto me escribió una clienta","Captura del mensaje, con permiso por escrito y sin datos personales. Si aún no tienes, cuenta tu propia experiencia.","Para presentarlo: «"+noDot(c.F("pruebas"))+"». Léelo en voz alta o déjalo sin hablar, con música suave. Nada de cifras ni de resultados de cuerpo.");
  case "pregunta":return o("¿Te pasa también?\n"+noDot(s.dolor),"Foto sencilla de apoyo, sin cara si no quieres.","Haz la pregunta y espera: tu audiencia contesta. Si prefieres otra, esta funciona: «"+noDot(c.F("preguntas"))+"».","Encuesta Sí/No o caja de preguntas");
  case "cta":return o(c.ctaT,"Foto o fondo liso de tu paleta. Lo importante es el texto.",c.ctaD,"Caja de preguntas con la palabra «"+c.kw+"». Sin enlace.");
  case "contexto":return o("De dónde partía ella","Foto de apoyo; la clienta no tiene por qué aparecer.","Cuenta en dos frases la situación de partida: "+lc(noDot(s.dolor))+".");
  case "testimonio":return o("Lo que me dijo","Captura o audio de la clienta, con su permiso por escrito.","Sus palabras, sin adornar y sin resultados de cuerpo ni cifras.");
  case "aprendizaje":return o("Lo que me llevo","Tú a cámara o una foto tranquila.","Una idea que sirva a quien te ve, hoy mismo: "+lc(tips[tips.length-1])+".");
  case "hizo":{const k=c.pasos++;return o("Qué hizo ella","Foto del gesto, sin cara si no quiere.",tips[k%tips.length]+". Un gesto pequeño, repetido.");}
  case "objecion":return o(c.ob.o,"Foto de apoyo o tú a cámara.","Di la duda tal como te la dicen: "+c.ob.o+".");
  case "yo":return o("A mí me pasó","Tú a cámara, en un sitio cómodo.",c.ob.story+" Cuenta cuándo pensaste lo mismo y qué cambió. Con humildad: no eres perfecta.");
  case "reencuadre":return o("Mirado de otra forma","Foto o vídeo del gesto sencillo.",c.ob.r[0]+(c.ob.r[1]?" Otra forma de decirlo: "+c.ob.r[1]:""));
  case "creencia":return o("Lo que pienso ahora","Un plano tranquilo de tu día.","Cierra con tu convicción en una frase. Sin promesas.");
  case "dato":return o("Tres datos sobre mí","Foto tuya o de tu mesa de trabajo.","Cuándo empezaste, qué has aprendido, con quién te formas. Sin cifras de dinero.");
  case "reflexion":return o("Hoy pensaba en «"+s.nombre+"»","Un momento real de tu día. "+s.escena,"Una frase sobre lo que sientes o piensas, con intención. Por ejemplo: «"+noDot(c.F("lifestyle"))+"».");
  case "reflexion2":return o("Y esto lo conecto con tu día","Foto o vídeo corto.","Une lo que has contado con lo que le pasa a tu clienta: "+lc(noDot(s.dolor))+".");
  case "equipo_dia":return o("Mi semana con el proyecto","Tu agenda o tu mesa en un día normal.","Cuenta cómo lo encajas: "+lc(tips[0])+". Por ejemplo: «"+noDot(c.F("lifestyle"))+"». Sin cifras ni dinero.");
  case "equipo_apoyo":return o("Familia · Respeto · Juntos","Foto con tu equipo (con su permiso) o con los valores en texto.","Lo que más valoras de estar acompañada: "+lc(tips[2%tips.length])+"."+(s.dato_equipo?" "+s.dato_equipo:""));
  case "equipo_dudas":return o(c.ob.o,"Foto de apoyo o tú a cámara.",c.ob.r[0]);
  case "reglas":return o("Reglas del reto","Fondo liso de tu paleta.","Un gesto al día: "+lc(c.habs[0])+". Sin pesar nada, sin prisas ni prohibiciones.");
  case "calendario":return o("El reto en "+c.dias+" días\n"+c.habs.slice(0,3).map((h,i)=>"Día "+(i+1)+": "+h).join("\n")+(c.dias>3?"\n…":""),"Fondo liso con la lista. Una foto tuya aparte.","Cuenta que cada día es un gesto pequeño y que lo harás tú también.");
  case "novedad":return o("La novedad del mes\n"+pn,"El producto recién abierto, bien iluminado: "+pn+".",c.gama==="nutri"?"Qué es, a qué sabe y cómo lo preparas tú. Sin exagerar.":"Qué es, para qué lo usas tú y cómo lo aplicas. Sin exagerar.");
  case "para_quien":return o("Para quién es","Foto de apoyo o tú a cámara.","Dilo con claridad, para quien se reconoce en esto: «"+noDot(s.dolor)+"». "+(c.fecha?"Está disponible hasta el "+fmtFecha(c.fecha)+".":"Si hay fecha límite, ponla real: «hasta el día X». Si no la hay, no la inventes."));
  }
  return o(cap(role),"","");
}

// Repasa un texto ya montado con plantillas: palabras de enlace repetidas («cuando cuando», «con con»),
// «puedas poder» y «para ti para que». No cambia nada más.
function limpia(s){
  // \b no entiende las tildes («día a día»), así que los límites de palabra se hacen con \p{L}
  return String(s)
    .replace(/(^|[^\p{L}\d])(cuando|si|que|como|porque|y|o|para|con|de|en|a|por|sin|sobre|del|al|el|la|los|las|un|una|mi|tu|su) \2(?![\p{L}\d])/giu,"$1$2")
    .replace(/(^|[^\p{L}\d])(puedas|puedes|puedan|pueda|poder) poder(?![\p{L}\d])/giu,"$1$2")
    .replace(/(^|[^\p{L}\d])(para ti|para mí) para(?![\p{L}\d])/gu,"$1$2, para")
    .replace(/:(\s[^.!?:«»]*?):(?=\s)/g,",$1:") // dos veces «:» en la misma frase: el primero pasa a coma
    .replace(/ {2,}/g," ");
}

// ===== CTA: plantillas de DB.ctas (según vía) con {deseo} {dolor} {KW} {recurso} =====
function fillCta(tpl,v){
  return limpia(tpl.replace(/\{(deseo|dolor|KW|recurso)\}/g,(m,k,off,str)=>{
    let x=v[k];
    if(k!=="KW"&&(off===0||/[\n.!?¿¡]\s*$/.test(str.slice(0,off))))x=cap(x);
    return x;
  }));
}
function makeCta(c,av,used){
  const s=c.s,kw=c.kw,o=c.obj;
  if(o==="reto"){
    const t="Si quieres sumar un gesto sencillo cada día\nRespóndeme "+kw;
    return {t,d:"Si quieres sumar un gesto sencillo cada día durante "+c.dias+" días, respóndeme "+kw+" y te apunto al reto con el primer gesto."};
  }
  if(o==="oferta"){
    const t="Si quieres ver las novedades sin perder tiempo\nRespóndeme "+kw;
    return {t,d:"Si quieres ver las novedades del mes sin perder tiempo, respóndeme "+kw+" y te envío la lista con lo que más me ha gustado"+(c.fecha?", válida hasta el "+fmtFecha(c.fecha):"")+"."};
  }
  const tpl=pickAv(DB.ctas[c.via],av,x=>x.pantalla,"c",used);
  const v={deseo:lc(noDot(s.deseo)),dolor:lc(noDot(s.dolor)),KW:kw,recurso:c.rec};
  return {t:fillCta(tpl.pantalla,v),d:fillCta(tpl.decir,v)};
}
// elige un elemento evitando los ya usados recientemente (si no queda ninguno, repite)
function pickAv(list,av,key,bucket,used){
  key=key||(x=>x);
  let c=list.filter(x=>!av[bucket].has(key(x)));
  if(!c.length)c=list;
  const x=pick(c),k=key(x);
  av[bucket].add(k);used[bucket].push(k);
  return x;
}

// ===== producto real de la situación =====
const PROD_EXCL=new Set(["l-carnitina-shot","l-carnitina-liquida","nutrishake","preworkout","creatina"]); // nunca se nombran
function pickProduct(s,prod){
  if(s.via!=="clientas")return null;
  const ok=p=>p&&!PROD_EXCL.has(p.id);
  let pool=(s.productos||[]).map(id=>PROD[id]).filter(ok);
  if(prod&&prod!=="auto"){
    const g=pool.filter(p=>p.gama===prod);
    pool=g.length?g:DB.products.filter(p=>ok(p)&&p.gama===prod);
  }
  if(!pool.length)pool=DB.products.filter(ok);
  return pick(pool);
}

// ===== generador de una secuencia =====
// f: {obj,sit,prod,tono,nivel,len,kw,fecha,dias,nonce}. av: conjuntos a evitar {g,c,f} (opcional).
function genSeq(f,av){
  av=av||{g:new Set(),c:new Set(),f:new Set()};
  av={g:new Set(av.g),c:new Set(av.c),f:new Set(av.f)};
  const used={g:[],c:[],f:[]};
  const O=DB.OBJS[f.obj],via=viaOf(f.obj);
  let s=SIT[f.sit];
  if(!s||s.via!==via){const L=sitsVia(via);s=L[hash([f.obj,f.sit,f.nonce].join("|"))%L.length]}
  const seed=hash([f.obj,s.id,f.prod,f.tono,f.nivel,f.len,f.kw,f.fecha,f.dias,f.nonce].join("|"));
  R=mulberry(seed);
  const pr=pickProduct(s,f.prod);
  const gama=via==="proyecto"?"equipo":((!f.prod||f.prod==="auto")&&(s.gamas||[]).length===1&&s.gamas[0]==="cat"?"cat":pr.gama);
  const G=DB.gamas[gama];
  const nutri=gama==="nutri"||(s.gamas||[]).indexOf("nutri")>=0||s.grupo==="Nutrición y bienestar";
  const kw=f.kw||kwOptions(f.obj,s.id)[0];
  const guia=GUIA_KW[via+"|"+kw]||guiaOf(s);
  const roles=(O.seq[f.len]||O.seq[5]).slice();
  const ctx={s,via,p:G,gama,nutri,prod:pr,pn:pr?pr.nombre_corto:"",tono:f.tono,obj:f.obj,kw,fecha:f.fecha,dias:+f.dias||7,pasos:0,tips:shuffle(G.tips),
    guia,rec:recursoTxt(guia,s),habs:shuffle(DB.HABITOS).slice(0,+f.dias||7)};
  ctx.hook=pickAv(s.ganchos,av,x=>x.t,"g",used).t;
  ctx.ob=pick(DB.objeciones[via]);
  // las frases del banco se eligen solo cuando un rol las necesita (y se recuerdan para no repetirlas)
  const memo={};
  ctx.F=clave=>memo[clave]||(memo[clave]=pickAv(frasesPara(clave,via,s),av,null,"f",used));
  if(O.cta){const k=makeCta(ctx,av,used);ctx.ctaT=k.t;ctx.ctaD=k.d}
  const lvl={empiezo:0,suelto:1,pro:2}[f.nivel]||0;
  const out=[];let prev="",aRun=0;
  roles.forEach((r,i)=>{
    const D=ROLES[r],b=body(r,ctx);
    let opts=D.pref[lvl].split("");
    if(i===0)opts=opts.filter(x=>x!=="A");
    if(!opts.length)opts=["B"];
    let cand=opts.filter(x=>x!==prev);
    if(!cand.length)cand=(lvl===0?["B","C"]:lvl===1?["B","C","D"]:["A","B","C","D"]).filter(x=>x!==prev&&(i||x!=="A"));
    if(aRun>=2&&cand.some(x=>x!=="A"))cand=cand.filter(x=>x!=="A");
    const fm=cand[Math.floor(R()*Math.min(cand.length,2))]||cand[0];
    aRun=fm==="A"?aRun+1:0;prev=fm;
    out.push({rol:r,rolN:D.n,fmt:fm,t:b.t,g:b.g,d:b.d,st:b.st,dur:D.dur,pal:D.pal,zona:D.zona});
  });
  out[0].pal="Primera semana";
  if(!out.some(x=>x.pal==="Respuestas")){const L=out[out.length-1];L.pal="Respuestas";L.d+=" Termina invitando a que te cuenten su experiencia por mensaje.";L.st=L.st==="Ninguno"?"Caja de preguntas (opcional)":L.st}
  return {f:Object.assign({},f),via,obj:O,sit:s,prod:pr,gama,nutri,aviso:nutri?DB.gamas.nutri.aviso:"",guia,ctx,stories:out,hook:ctx.hook,kw,used};
}

// ===== revisión de calidad del curso (sobre una secuencia generada) =====
function checkSeq(res){
  const st=res.stories,O=res.obj,ch=[];
  const add=(ok,t,h)=>ch.push({ok,t,h:h||""});
  add(["B","C"].includes(st[0].fmt)&&st[0].rol!=="cta","La primera story es visual y no vende","La primera story siempre es visual o de lifestyle; nunca vende.");
  let rep=false;for(let i=1;i<st.length;i++)if(st[i].fmt===st[i-1].fmt&&st[i].fmt!=="D")rep=true;
  add(!rep,"No se repite el mismo formato dos veces seguidas","Mezcla A, B, C y D para que la gente no se aburra.");
  let mx=0,run=0;st.forEach(x=>{run=x.rol==="paso"?run+1:0;mx=Math.max(mx,run)});
  add(mx<=3,"El tutorial no pasa de 3 stories seguidas","Más de 3 pasos seguidos y se pierde la gente.");
  const pals=new Set(st.map(x=>x.pal));
  ["Retención","Respuestas","Primera semana"].forEach(pl=>add(pals.has(pl),"Palanca: "+pl.toLowerCase()+" cubierta","Cada secuencia debería trabajar las tres palancas."));
  add(st.length>=3&&st.length<=8,"Longitud entre 3 y 8 stories","Entre 3 y 8. Con 3 tienes la versión mínima; con 4 a 5 es lo más completo para empezar.");
  let a2=0;st.forEach((x,i)=>{if(x.fmt==="A"&&i&&st[i-1].fmt==="A"&&i>1&&st[i-2].fmt==="A")a2++});
  add(a2===0,"No hay tres vídeos a cámara seguidos","Máximo dos vídeos a cámara seguidos.");
  if(O.cta){const r=ctaCheck(res.ctx.ctaD,{deseo:res.sit.deseo,dolor:res.sit.dolor,recurso:res.ctx.rec});add(r.ok,"El CTA tiene beneficio, promesa concreta y acción","Beneficio tangible + promesa concreta del recurso + acción específica (la palabra clave).");add(st[st.length-1].rol==="cta","El CTA va al final, no al principio","El CTA cierra la secuencia.")}
  else add(!st.some(x=>x.rol==="cta"),"Esta secuencia no lleva CTA, como indica el curso","Demostrar, romper objeción y conectar no llevan CTA.");
  const txt=st.map(x=>x.t+" "+x.d).join(" ");
  add(scanMeta(txt).filter(h=>h.l==="alto").length===0,"Sin frases de riesgo para las políticas de Meta","Revisa en la pestaña Revisor.");
  return ch;
}

function scriptText(res){
  const O=res.obj;
  let o="SECUENCIA: "+O.n+"\nSituación: "+res.sit.nombre+"\nTipo: "+O.tipo+" · "+res.stories.length+" stories\n"+(O.cta?"Palabra clave: "+res.kw+" · Recurso: "+res.ctx.rec+"\n":"")+"\n";
  res.stories.forEach((x,i)=>{o+="STORY "+(i+1)+" · "+x.rolN+" · Formato "+x.fmt+" · "+x.dur+"\nEn pantalla: "+x.t.replace(/\n/g," / ")+"\nGrabar: "+x.g+"\nDecir: "+x.d+"\nDónde: "+x.zona+(x.st!=="Ninguno"?"\nSticker: "+x.st:"")+"\n\n"});
  if(res.aviso)o+="AVISO: "+res.aviso+"\n";
  return o.trim();
}

// ===== estado =====
const PERF=ls("ft_perfil")||{};
const SIT0={clientas:sitsVia("clientas")[0].id,proyecto:sitsVia("proyecto")[0].id}; // situación por defecto de cada vía
const S={tab:"home",res:null,
 f:{via:"clientas",obj:"valor",sit:SIT0.clientas,prod:"auto",tono:PERF.tono||"cercano",nivel:PERF.nivel||"empiezo",len:5,kw:"",fecha:"",dias:7,nonce:0},
 svia:"clientas",gtab:{},gx:"",gq:""};

function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("on"),1800)}
async function copy(t){try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement("textarea");a.value=t;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(_){}a.remove()}toast("Copiado")}
const sel=(id,opts,val)=>'<select id="'+id+'">'+opts.map(o=>'<option value="'+esc(o[0])+'"'+(String(o[0])===String(val)?" selected":"")+'>'+esc(o[1])+'</option>').join("")+'</select>';
function sitSelect(id,val,via){via=via||"clientas";return '<select id="'+id+'">'+gruposVia(via).map(g=>'<optgroup label="'+esc(g)+'">'+sitsVia(via).filter(s=>s.grupo===g).map(s=>'<option value="'+esc(s.id)+'"'+(s.id===val?" selected":"")+'>'+esc(s.nombre)+'</option>').join("")+'</optgroup>').join("")+'</select>'}
const defLen=n=>({empiezo:3,suelto:4,pro:5}[n]||4);

// ===== mock móvil =====
function mock(x,kw){
  const big=x.rol==="cta";
  const lines=x.t.split("\n");
  const media={A:"Tú a cámara",B:"Foto o vídeo",C:"Captura o foto",D:"Gesto o paso"}[x.fmt];
  return '<div class="phone"><div class="pgrid"><i></i><i></i></div><div class="ptxt"><b>'+esc(lines[0])+'</b>'+(lines[1]?'<span>'+esc(lines.slice(1).join(" · "))+'</span>':'')+'</div><div class="pmed">'+media+'</div>'+(big?'<div class="pkw">'+esc(kw)+'</div>':'')+'</div>';
}

// ===== tarjeta de story =====
function storyHtml(x,i,kw){
  return '<article class="story"><div class="sn"><b>'+(i+1)+'</b><small>'+esc(x.dur)+'</small></div><div class="sb"><header><h4>'+esc(x.rolN)+'</h4><span class="tag f'+x.fmt+'" title="'+esc(DB.FMT[x.fmt].que)+'">Formato '+x.fmt+'</span><span class="tag pal">'+esc(x.pal)+'</span></header>'
  +'<dl><dt>En pantalla</dt><dd class="scr">'+esc(x.t).replace(/\n/g,"<br>")+'</dd><dt>Qué grabar</dt><dd>'+esc(x.g)+'</dd><dt>Qué decir</dt><dd>'+esc(x.d)+'</dd><dt>Dónde ponerlo</dt><dd>'+esc(x.zona)+'</dd>'+(x.st!=="Ninguno"?'<dt>Sticker</dt><dd>'+esc(x.st)+'</dd>':'')+'</dl>'
  +'<div class="fh">'+esc(DB.FMT[x.fmt].n)+': '+esc(noDot(DB.FMT[x.fmt].que.split(". ")[0]))+'.</div>'
  +'<button class="mini" data-copy="'+esc(x.t.replace(/\n/g," / "))+'">Copiar texto de pantalla</button></div>'+mock(x,kw)+'</article>';
}
function seqHtml(res,opts){
  opts=opts||{};
  const ch=checkSeq(res),bad=ch.filter(c=>!c.ok).length;
  let h='';
  if(!opts.noHead)h+='<div class="seqhead"><div><h3>'+esc(res.obj.n)+'</h3><p>'+esc(res.sit.nombre)+' · '+res.stories.length+' stories · '+esc(res.obj.tipo)+'</p></div><div class="acts"><button class="btn" data-act="copyseq">Copiar guion</button><button class="btn ghost" data-act="saveseq">Guardar</button><button class="btn ghost" data-act="regen">Otra versión</button></div></div>';
  h+='<details class="chk"'+(bad?" open":"")+'><summary>Revisión con el método del curso: <b>'+(ch.length-bad)+' de '+ch.length+'</b>'+(bad?' · hay '+bad+' a revisar':' · todo en orden')+'</summary><ul>'+ch.map(c=>'<li class="'+(c.ok?"ok":"no")+'"><b>'+(c.ok?"Bien":"Revisar")+'</b> '+esc(c.t)+(c.ok?'':'<small>'+esc(c.h)+'</small>'+(c.t.indexOf("Sin frases de riesgo")===0?'<button class="linkb" data-tab="normas">Ver lo que no se dice</button>':''))+'</li>').join("")+'</ul></details>';
  h+=res.stories.map((x,i)=>storyHtml(x,i,res.kw)).join("");
  if(res.aviso)h+='<p class="aviso"><b>Aviso:</b> '+esc(res.aviso)+'</p>';
  h+='<p class="note">Publica entre las 11:00 y las 14:00. Si publicas varias secuencias, que no haya dos CTA el mismo día.</p>';
  return h;
}


// ===== pestaña CÓMO SE USA (ayuda) =====
function viewAyuda(){
  const lv=S.f.nivel;
  const D=(t,b,o)=>'<details class="panel gd"'+(o?" open":"")+'><summary>'+t+'</summary><div class="gb2">'+b+'</div></details>';
  const L=(t,d)=>'<dt>'+t+'</dt><dd>'+d+'</dd>';
  let h='<section class="panel hero"><h2>Bienvenida</h2><p class="lead">Fam Studio te prepara lo que vas a publicar en Instagram: qué poner en pantalla, qué grabar y qué decir. No necesitas saber de redes. Si algo no lo entiendes, pasa a la siguiente parte y vuelve cuando quieras.</p>'
  +'<fieldset><legend>Cuéntanos tu nivel</legend><div class="radios">'+[["empiezo","Empiezo hoy","Nunca he publicado stories o casi nada."],["suelto","Me suelto","Publico de vez en cuando y me atrevo a hablar a cámara."],["pro","Ya publico a diario","Tengo rutina y busco ordenar mi contenido."]].map(r=>'<label class="rad"><input type="radio" name="i_nivel" value="'+r[0]+'"'+(lv===r[0]?" checked":"")+'><span><b>'+r[1]+'</b><small>'+r[2]+'</small></span></label>').join("")+'</div></fieldset>'
  +'<div class="acts"><button class="btn big" data-go="crear">Crear mi primera secuencia</button><button class="btn ghost" data-go="semana">Preparar mi semana</button></div>'
  +'<p class="note" id="i_msg">'+({empiezo:"Te saldrán secuencias de 3 stories y reels sin cara, con fotos y texto.",suelto:"Te saldrán secuencias de 4 stories y reels con algo de voz, mezclando fotos, texto y algún vídeo corto.",pro:"Te saldrán secuencias de 5 stories y reels de todos los tipos, con más variedad de formatos."}[lv])+'</p></section>';
  h+=D("Lo básico en un minuto",'<dl class="gl">'
   +L("Story","Una foto o un vídeo corto que se ve 24 horas en Instagram. Varias seguidas forman una secuencia.")
   +L("Reel","Un vídeo corto que Instagram enseña también a gente que todavía no te sigue. Sirve para que te descubran.")
   +L("Palabra clave","Una palabra que la persona escribe en un comentario o te responde, por ejemplo NOCHE. Es la forma de pedirte algo sin enlaces.")
   +L("Recurso","Lo que le mandas por mensaje privado cuando escribe la palabra: una guía, una lista, un audio. Está en la sección Recursos.")
   +L("Llamada a la acción","La frase del final que le dice qué hacer: «comenta la palabra NOCHE y te mando mi guía».")+'</dl>'
   +'<p class="note">El camino completo: publicas un reel o unas stories, alguien escribe la palabra, le mandas el recurso por privado, la conversación pasa a WhatsApp y ahí le aconsejas o le propones el siguiente paso.</p>',true);
  h+=D("La barra de abajo: dónde está cada cosa",'<dl class="gl">'
   +L("Inicio","La pantalla de «¿Qué quieres hoy?». Desde ahí llegas a lo más habitual con un solo toque.")
   +L("Crear","Aquí preparas una publicación suelta. Arriba eliges entre <b>Stories</b> y <b>Reels</b>.")
   +L("Semana","Un plan para toda la semana con reels y stories. Sale con un solo tema y ya lo tienes ordenado por días.")
   +L("Recursos","Las guías y las tarjetas que mandas por privado, las respuestas a dudas y los mensajes para cada momento de una conversación.")
   +L("Más","Todo lo demás: Situaciones, Ganchos, Formatos, Cuadrícula, Revisor, Mi negocio, Mi perfil de Instagram, Mis números, Mi cuenta, Instalar y Administración.")+'</dl>'
   +'<p class="note">La opción en la que estás aparece marcada en la barra. Si te pierdes, toca Inicio.</p>');
  h+=D("Si estás empezando: tu primera publicación en 4 pasos",'<ol class="steps"><li><b>Ve a Inicio y toca «Stories que venden».</b> Se abre Crear con una situación del día a día ya elegida. Si no te suena, cámbiala por otra que te pase de verdad.</li><li><b>Pulsa «Generar secuencia».</b> Te sale la secuencia completa, story por story. Si no te convence, pulsa «Otra versión» las veces que quieras.</li><li><b>Graba lo que dice «Qué grabar».</b> Escribe en pantalla lo que dice «En pantalla» y usa «Qué decir» como guía, con tus palabras y sin leerlo. Cada story dura de 7 a 15 segundos.</li><li><b>Publícala entre las 11:00 y las 14:00.</b> Si alguien escribe tu palabra clave, abre Recursos, busca la guía y copia el mensaje de entrega.</li></ol><p class="note">Es mejor publicar poco y todas las semanas que mucho un día y nada después.</p>',true);
  h+=D("Crear: stories y reels",'<p><b>Stories.</b> Eliges para quién son (clientas o proyecto), qué quieres conseguir, una situación y cuántas stories quieres. Cada una trae <b>En pantalla</b> (el texto), <b>Qué grabar</b>, <b>Qué decir</b>, <b>Dónde ponerlo</b> y a veces un <b>Sticker</b>. El resumen «Revisión» te dice si la secuencia está bien montada.</p>'
   +'<p><b>Reels.</b> Hay dos caminos. <b>Reels listos</b>: reels ya escritos. Los filtras según para quién son, si buscas crecer o captar, la gama de producto y lo que te cuesta grabarlos (sin cara, con soltura o a cámara). <b>Crear mi reel</b>: eliges situación y formato, y te monta gancho, planos, texto en pantalla, cierre y descripción.</p>'
   +'<p><b>Crecer</b> es que te descubra gente nueva y termina invitando a seguirte. <b>Captar</b> termina con una palabra clave y un recurso que mandas por privado.</p>'
   +'<p>En cada reel o secuencia puedes copiar el guion, copiar la descripción o guardarlo en Mi cuenta.</p>');
  h+=D("Cómo leer cada story",'<dl class="gl">'+L("En pantalla","El texto que escribes encima de la foto o del vídeo.")+L("Qué grabar","La foto o el vídeo que necesitas hacer.")+L("Qué decir","Lo que cuentas con tu voz. Con tus palabras, sin leerlo.")+L("Dónde ponerlo","En qué parte de la pantalla va el texto. Mira Cuadrícula, en Más.")+L("Sticker","Un añadido de Instagram, como una caja de preguntas o una encuesta.")+L("Formato A, B, C o D","La forma de hacer la story. A es con tu cara, B es una foto o vídeo bonito sin cara, C es una foto con texto o una captura y D enseña un paso. Si dudas, mira Formatos, en Más.")+L("Retención, Respuestas, Primera semana","Para qué sirve esa story: que la gente la vea entera, que te conteste o que una persona nueva te conozca.")+'</dl>');
  h+=D("Semana: todo el plan ya hecho",'<ol class="steps"><li><b>Elige para quién es</b> (clientas o proyecto), el <b>plan</b> y el <b>tema de la semana</b>. Todo gira en torno a un solo problema de tu clienta, contado de formas distintas.</li><li><b>Pulsa «Preparar la semana».</b> Sale un calendario con los días que toca publicar.</li><li><b>Abre cada día</b> y encontrarás sus reels y sus secuencias de stories, con su guion completo. Cada pieza tiene «Otra versión», «Copiar» y «Guardar».</li><li><b>«Copiar toda la semana»</b> te lo lleva todo a una nota para tenerlo a mano.</li></ol>'
   +'<dl class="gl">'+L("Plan Inicio","1 reel y 3 secuencias de stories. Para empezar sin agobio.")+L("Plan Estándar","2 reels y 4 secuencias de stories. El ritmo cómodo.")+L("Plan Completo","3 reels y 6 secuencias de stories. Para quien ya publica a diario.")+'</dl>'
   +'<p class="note">Reglas de la semana: los reels se publican por la mañana y las stories entre las 11:00 y las 14:00. El sábado se descansa. Como máximo dos llamadas a la acción en las stories de la semana, y nunca dos el mismo día (cuenta también el reel de captar).</p>');
  h+=D("Recursos: lo que mandas por privado",'<p>Cuando alguien escribe tu palabra clave, entra aquí. En <b>Guías</b> elige la que corresponde (se ordenan para clientas y para el proyecto). Dentro de cada guía vas paso a paso:</p><ol class="steps"><li><b>Mensaje de entrega:</b> lo primero que mandas, con la guía.</li><li><b>El material:</b> el texto para pegar en el chat y una <b>tarjeta</b> con imagen para compartir o descargar.</li><li><b>Seguimiento a los 2 o 3 días</b>, por si no ha contestado.</li><li><b>Pasar a WhatsApp</b>, con tu teléfono ya puesto si lo guardaste en Mi cuenta.</li><li><b>Siguiente paso:</b> en clientas, recomendarle algo concreto sin presión; en proyecto, proponerle un Zoom corto o el vídeo de menos de 10 minutos.</li></ol>'
   +'<p>Además tienes <b>Respuestas a dudas</b> (qué decir cuando dicen «es caro» o «no tengo tiempo») y <b>Mensajes del día a día</b> (dar las gracias, reactivar a alguien, responder a «me lo pienso»). Cada mensaje tiene su botón para copiar.</p>');
  h+=D("Más: el resto de herramientas",'<dl class="gl">'
   +L("Situaciones","Ideas de qué contar: la escena, el problema de tu clienta y ocho ganchos ya escritos.")
   +L("Ganchos","Doce formas de empezar para que no pasen de largo. Escribe tu tema y te las rellena.")
   +L("Formatos","Qué es cada tipo de story y cómo se graba.")
   +L("Cuadrícula","Dónde colocar el texto y la palabra clave en la pantalla.")
   +L("Revisor","Pega un texto y te avisa de frases que Instagram penaliza y de llamadas a la acción flojas.")
   +L("Mi negocio","Resumen sencillo del plan de Farmasi, solo para el equipo.")
   +L("Mi perfil de Instagram","Bios, nombres, destacadas y publicaciones fijadas para que tu perfil convenza en cinco segundos.")
   +L("Mis números","Escribes tus seguidores y visualizaciones y te dice qué mejorar primero. Guarda un historial en tu móvil.")
   +L("Mi cuenta","Tu nombre, usuario de Instagram, teléfono, nivel y tus guiones guardados.")
   +L("Instalar en el móvil","Cómo tener Fam Studio como una app, con su icono.")
   +L("Administración","Solo para quien administra el equipo: cambiar códigos y añadir recursos propios.")+'</dl>');
  h+=D("Si ya publicas a diario",'<ul><li>En <b>Semana</b> usa el plan Completo y el tema de la semana como hilo. Cambia el tema cada lunes.</li><li>Pon el nivel «Ya publico a diario» para que mezcle los cuatro formatos y los reels con cara.</li><li>En <b>Crear · Reels</b> alterna reels de crecer (que te descubran) con uno de captar a la semana.</li><li>Usa <b>Ganchos</b> para no repetir siempre el mismo arranque y <b>Formatos</b> para variar la forma de grabar.</li><li>Pasa tus propias llamadas a la acción por <b>Revisor</b> → «Revisar un CTA»: comprueba que hay beneficio, promesa y acción.</li><li>Mide cada semana en <b>Mis números</b>: alcance, respuestas y paso a WhatsApp. Te dice qué parte mejorar primero.</li><li>Si tu equipo comparte material propio, lo verás en <b>Recursos</b> con la etiqueta «Del equipo».</li></ul>');
  h+=D("La palabra clave y la llamada a la acción",'<p>En vez de un enlace, le pides a la persona que comente o te responda una palabra, por ejemplo RUTINA, y le mandas algo útil por privado. Las palabras que te sugerimos cambian según la situación. Puedes tocar una o escribir la tuya, siempre una sola palabra.</p><p>Una buena llamada a la acción dice tres cosas: qué consigue la persona, qué recibe y qué tiene que hacer.</p>');
  h+=D("Tenerla como una app en el móvil",'<p><b>iPhone:</b> abre el enlace en Safari, toca el botón de compartir y elige «Añadir a pantalla de inicio».</p><p><b>Android:</b> abre el enlace en Chrome, toca los tres puntos y elige «Añadir a pantalla de inicio» o «Instalar app».</p><p>Hay una guía con dibujos en Más → Instalar en el móvil. Tus guiones, tus números y tu perfil se quedan solo en tu móvil.</p>');
  h+=D("Cuatro reglas que no te saltes",'<ul><li>Nada de dinero, ingresos ni comisiones.</li><li>Nada de peso, antes y después de cuerpo ni promesas de salud.</li><li>Una oferta solo con fecha límite real.</li><li>El caso de una clienta, solo con su permiso por escrito.</li></ul><p class="note">Si dudas de un texto, pégalo en el Revisor (Más).</p>');
  return h;
}

// ===== pestaña CREAR =====
function viewCrear(){
  const f=S.f,O=DB.OBJS[f.obj];
  const kws=kwOptions(f.obj,f.sit),via=viaOf(f.obj),proy=via==="proyecto";
  const needsDate=f.obj==="oferta",needsDias=f.obj==="reto";
  let h='<section class="panel"><h2>Crear una secuencia de stories</h2><p class="lead">Elige qué quieres conseguir y qué te pasa hoy en tu día a día con Farmasi. La herramienta te da la secuencia completa, lista para grabar.</p>'
  +'<fieldset><legend>Para quién son las stories</legend><div class="chips vias">'+[["clientas","Para clientas"],["proyecto","Para el proyecto"]].map(v=>'<button type="button" class="chip'+(via===v[0]?" on":"")+'" data-via="'+v[0]+'" aria-pressed="'+(via===v[0])+'">'+v[1]+'</button>').join("")+'</div><small class="mut">'+(proy?"Para invitar a conocer el proyecto Fam Team: situaciones de quien aún no ha dado el paso.":"Para conseguir clientas: situaciones del día a día con los productos.")+'</small></fieldset>'
  +'<div class="grid2"><label>Qué quieres conseguir'+sel("f_obj",objsVia(via).map(k=>[k,DB.OBJS[k].n]),f.obj)+'</label>'
  +'<label>Situación de tu día a día'+sitSelect("f_sit",f.sit,via)+'</label></div>'
  +'<div class="info"><b>'+esc(O.corto)+'.</b> '+esc(O.que)+' <span class="mut">Cuándo: '+esc(O.cuando)+'</span></div>';
  h+='<div class="grid3">'+(proy?'':'<label>Producto'+sel("f_prod",[["auto","Según la situación"]].concat(["piel","maq","cabello","perfume","nutri","cuidado"].map(k=>[k,DB.gamas[k].n])),f.prod)+'</label>')
  +'<label>Tono'+sel("f_tono",Object.keys(DB.TONOS).map(k=>[k,DB.TONOS[k].n]),f.tono)+'</label>'
  +'<label>Número de stories'+sel("f_len",[3,4,5,6,7,8].map(n=>[n,n+(n===defLen(f.nivel)?" (recomendado)":n===3?" (versión corta)":"")]),f.len)+'</label></div>';
  h+='<fieldset><legend>Tu nivel</legend><div class="radios">'+[["empiezo","Empiezo hoy","Sin experiencia: fotos y texto, casi sin hablar."],["suelto","Me suelto","Ya publicas algo y te atreves a hablar a cámara."],["pro","Ya publico a diario","Mezclas vídeo, tutorial y prueba."]].map(r=>'<label class="rad"><input type="radio" name="f_nivel" value="'+r[0]+'"'+(f.nivel===r[0]?" checked":"")+'><span><b>'+r[1]+'</b><small>'+r[2]+'</small></span></label>').join("")+'</div></fieldset>';
  if(O.cta)h+='<div class="grid2"><label>Palabra clave del CTA<input id="f_kw" value="'+esc(f.kw)+'" placeholder="'+esc(kws[0])+'"><span class="kws">'+kws.map(k=>'<button type="button" class="chip'+(f.kw===k?" on":"")+'" data-kw="'+esc(k)+'">'+esc(k)+'</button>').join("")+'</span><small class="mut">Toca una sugerencia o escribe la tuya: una sola palabra en mayúsculas. Nunca pongas un enlace.</small></label>'
  +(needsDias?'<label>Duración del reto'+sel("f_dias",[3,5,7,10].map(n=>[n,n+" días"]),f.dias)+'</label>':'')
  +(needsDate?'<label>Fecha límite real<input type="date" id="f_fecha" value="'+esc(f.fecha)+'"><small class="mut">Solo si es verdadera. No inventes urgencia.</small></label>':'')+'</div>';
  h+='<div class="acts"><button class="btn big" data-act="gen">Generar secuencia</button></div></section>';
  if(S.res)h+='<section class="panel out" id="out">'+seqHtml(S.res)+'</section>';
  else h+='<section class="panel empty"><h3>Empieza aquí</h3><p>Si nunca has publicado stories: elige «Enseñar y captar», una situación que te suene y el nivel «Empiezo hoy». Te saldrá una secuencia de 3 stories con fotos y texto, sin necesidad de salir en cámara.</p></section>';
  return h;
}
// cambia entre «Para clientas» y «Para el proyecto»: ajusta objetivo y situación a la vía
function setVia(v){
  const f=S.f;
  if(viaOf(f.obj)!==v)f.obj=objDefault(v);
  f.via=v;
  if(!SIT[f.sit]||SIT[f.sit].via!==v)f.sit=SIT0[v];
  f.kw="";S.res=null;
}
function readCrear(){
  const f=S.f,g=id=>{const e=$("#"+id);return e?e.value:null};
  if(g("f_obj"))f.obj=g("f_obj");f.via=viaOf(f.obj);if(g("f_sit"))f.sit=g("f_sit");if(g("f_prod"))f.prod=g("f_prod");if(g("f_tono"))f.tono=g("f_tono");
  if(g("f_len"))f.len=+g("f_len");if(g("f_kw")!==null)f.kw=norm(g("f_kw")).toUpperCase().replace(/[^A-Z0-9]/g,"");if(g("f_fecha")!==null)f.fecha=g("f_fecha");if(g("f_dias"))f.dias=+g("f_dias");
  const n=document.querySelector('input[name=f_nivel]:checked');if(n)f.nivel=n.value;
}

// ===== pestaña SITUACIONES =====
const hookList=s=>'<ul class="hooks">'+s.ganchos.map(g=>'<li><span class="tag">'+esc(cap(g.tipo))+'</span> '+esc(g.t)+' <button class="mini" data-copy="'+esc(g.t)+'">Copiar</button></li>').join("")+'</ul>';
function sitCard(s){
  const g=guiaOf(s);
  return '<section class="panel sit"><h3>'+esc(s.nombre)+'</h3>'
  +'<p class="mut">'+esc(NIVEL_TXT[s.nivel]||"")+(s.temporada&&s.temporada!=="todo el año"?' · Temporada: '+esc(s.temporada):'')+'</p>'
  +'<dl><dt>La escena</dt><dd>'+esc(s.escena)+'</dd><dt>El dolor</dt><dd>'+esc(s.dolor)+'</dd><dt>Lo que desea</dt><dd>'+esc(s.deseo)+'</dd>'
  +'<dt>Ganchos</dt><dd>'+hookList(s)+'</dd>'
  +'<dt>Palabras clave</dt><dd>'+s.palabras_clave.map(k=>'<span class="tag">'+esc(k)+'</span>').join(" ")+'</dd>'
  +'<dt>Recurso que se envía</dt><dd>'+esc(g?g.titulo:s.recurso)+(g&&g.para?'<small class="mut"> '+esc(g.para)+'</small>':'')+'</dd>'
  +(s.dato_equipo?'<dt>Dato del equipo</dt><dd>'+esc(s.dato_equipo)+'</dd>':'')
  +'</dl><button class="btn" data-use="'+esc(s.id)+'">Crear stories con esta situación</button></section>';
}
function viewSituaciones(){
  const via=S.svia,grupos=gruposVia(via),g=grupos.indexOf(S.gtab[via])>=0?S.gtab[via]:grupos[0];
  let h='<section class="panel"><h2>Situaciones</h2><p class="lead">Si no sabes qué contar, empieza por aquí: elige una situación que te pase de verdad. Cada una trae la escena, lo que le duele y lo que desea tu clienta, ocho ganchos ya escritos y el recurso que puedes enviar.</p>'
  +'<div class="chips vias">'+[["clientas","Clientas"],["proyecto","Proyecto"]].map(v=>'<button class="chip'+(via===v[0]?" on":"")+'" data-svia="'+v[0]+'" aria-pressed="'+(via===v[0])+'">'+v[1]+'</button>').join("")+'</div>'
  +'<div class="chips">'+grupos.map(x=>'<button class="chip'+(g===x?" on":"")+'" data-grp="'+esc(x)+'">'+esc(x)+'</button>').join("")+'</div></section>';
  h+=sitsVia(via).filter(s=>s.grupo===g).map(sitCard).join("");
  return h;
}

// ===== pestaña GANCHOS =====
function viewGanchos(){
  let h='<section class="panel"><h2>Ganchos</h2><p class="lead">El gancho es lo primero que se lee: decide si la gente sigue o pasa. Escribe de qué vas a hablar y verás las 12 formas de arrancar que enseña el curso.</p>'
  +'<label>De qué vas a hablar<input id="g_x" value="'+esc(S.gx)+'" placeholder="por ejemplo: tu rutina de noche"></label></section>';
  const x=S.gx||"tu tema";
  h+='<div class="cards">'+DB.GANCHOS.map(g=>'<section class="panel"><h3>'+esc(g.n)+'</h3><p class="mut">'+esc(g.que)+'</p><ul>'+g.t.map(t=>{const r=t.replace(/\{x\}/g,x);return '<li>'+esc(r)+' <button class="mini" data-copy="'+esc(r)+'">Copiar</button></li>'}).join("")+'</ul></section>').join("")+'</div>';
  h+='<section class="panel"><h3>Ganchos de cada situación</h3><p class="lead">Busca una situación (por ejemplo «noche», «regalo» o «tiempo») y copia sus ocho ganchos ya escritos.</p>'
  +'<label>Buscar una situación<input id="g_q" value="'+esc(S.gq)+'" placeholder="por ejemplo: piel seca, regalo, tiempo" autocomplete="off"></label><div id="g_res">'+ganchosBusca(S.gq)+'</div></section>';
  return h;
}
function ganchosBusca(q){
  const t=norm(String(q||"").trim());
  if(t.length<2)return '<p class="mut">Escribe al menos dos letras.</p>';
  const ws=t.split(/\s+/);
  const L=DB.sits.filter(s=>{const hay=norm([s.nombre,s.grupo,s.dolor,s.deseo,s.escena,(s.palabras_clave||[]).join(" ")].join(" "));return ws.every(w=>hay.includes(w))});
  if(!L.length)return '<p class="mut">No hay ninguna situación con esa palabra. Prueba con otra más corta.</p>';
  return '<p class="mut">'+L.length+(L.length===1?' situación':' situaciones')+(L.length>8?' (te enseño las 8 primeras)':'')+'</p>'+L.slice(0,8).map(s=>'<div class="hsit"><h4>'+esc(s.nombre)+' <span class="mut">· '+(s.via==="proyecto"?"Proyecto":"Clientas")+' · '+esc(s.grupo)+'</span></h4>'+hookList(s)+'</div>').join("");
}

// ===== pestaña FORMATOS =====
function viewFormatos(){
  let h='<section class="panel"><h2>Formatos de story</h2><p class="lead">Un formato es la forma en que presentas cada story. No todas tienen que ser vídeos hablando: puedes hacer secuencias completas solo con fotos y texto. Mezcla formatos y no repitas el mismo dos veces seguidas.</p></section>';
  h+=Object.keys(DB.FMT).map(k=>{const m=DB.FMT[k];return '<section class="panel fmt"><div class="fhd"><span class="tag f'+k+'">Formato '+k+'</span><h3>'+esc(m.n.slice(4))+'</h3><span class="mut">'+esc(m.nivel)+'</span></div><dl><dt>Qué es</dt><dd>'+esc(m.que)+'</dd><dt>Para qué sirve</dt><dd>'+esc(m.para)+'</dd><dt>Cómo se hace</dt><dd>'+esc(m.como)+'</dd><dt>Ejemplo</dt><dd>'+esc(m.ej)+'</dd></dl><p class="tipp">'+esc(m.pista)+'</p></section>'}).join("");
  h+='<section class="panel"><h3>Cuatro acciones que suben tus visualizaciones</h3><ol><li><b>Primera story visual.</b> Una foto o un clip de tu día, que no venda. Es lo que ve quien llega por primera vez.</li><li><b>Provoca respuestas.</b> Que te contesten por mensaje vale más que una encuesta.</li><li><b>Crea curiosidad.</b> Anuncia algo que vas a contar al final de la secuencia.</li><li><b>Enseña el detrás de cámaras.</b> Un día contado en vídeo humaniza más que cualquier plantilla.</li></ol><p class="note">Si tienes poco que enseñar, usa texto sobre fondo liso, foto con texto o una infografía sencilla: los cuatro caben en la paleta Fam Team.</p></section>';
  return h;
}

// ===== pestaña CUADRÍCULA =====
function viewCuadricula(){
  const z=S.gz||"gancho";
  const M={
   gancho:{t:"GANCHO\nen letra grande",e:"Explicación corta debajo",m:"Foto o vídeo",b:"",kw:""},
   prueba:{t:"TÍTULO\nqué vas a ver",e:"",m:"Captura o prueba",b:"Contexto, solo si es esencial",kw:""},
   cta:{t:"BENEFICIO\nlo que consigues",e:"Qué recibes",m:"Fondo liso",b:"",kw:"PALABRA"}
  }[z];
  let h='<section class="panel"><h2>Cuadrícula de la story</h2><p class="lead">Es la plantilla mental para colocar textos y CTA. Divide la pantalla en 4 cuadrantes y recuerda: se lee de izquierda a derecha y de arriba abajo, así que lo importante va arriba.</p>'
  +'<div class="chips">'+[["gancho","Plantilla de gancho"],["prueba","Plantilla de prueba"],["cta","Plantilla de CTA"]].map(c=>'<button class="chip'+(z===c[0]?" on":"")+'" data-gz="'+c[0]+'">'+c[1]+'</button>').join("")+'</div>'
  +'<div class="gridwrap"><div class="gphone"><div class="q q1"><i>1</i></div><div class="q q2"><i>2</i></div><div class="q q3"><i>3</i></div><div class="q q4"><i>4</i></div>'
  +'<div class="gm top"></div><div class="gm bot"></div>'
  +'<div class="gt"><b>'+esc(M.t).replace(/\n/g,"<br>")+'</b>'+(M.e?'<span>'+esc(M.e)+'</span>':'')+'</div><div class="gmed">'+esc(M.m)+'</div>'+(M.kw?'<div class="gkw">'+M.kw+'</div>':'')+(M.b?'<div class="gb">'+esc(M.b)+'</div>':'')+'</div>'
  +'<div class="gtxt"><h3>Cómo se usa</h3><ul><li><b>Arriba:</b> el gancho, grande, y debajo una explicación corta. Nunca pongas el gancho abajo.</li><li><b>En medio:</b> la prueba gráfica (captura, foto o vídeo). Nunca por encima del texto.</li><li><b>Abajo:</b> contexto, solo si es esencial.</li><li><b>CTA:</b> el beneficio arriba y la palabra clave en letra mucho más grande que el resto.</li><li><b>Aire:</b> no saturar. Un mensaje por story.</li><li><b>Márgenes:</b> nada pegado a los bordes y no tapes tu cara.</li><li><b>Alineación:</b> centrada. Nunca justificada. Izquierda o derecha solo en el medio y a veces; nunca en el gancho ni en el CTA.</li></ul></div></div></section>';
  h+='<section class="panel"><h3>Texto y color</h3><ul><li><b>Máximo 2 tipografías</b> de las que trae Instagram: una principal (70%) y una secundaria (30%).</li><li><b>Contraste:</b> el texto debe leerse al primer vistazo sobre la foto.</li><li><b>Truco de la sombra:</b> duplica la palabra clave, pon una copia detrás en otro color y desplázala un poco.</li><li><b>Colores:</b> usa la paleta de marca (marrón y crema). Evita amarillo, naranja, morado y verde chillones.</li><li><b>Solo la palabra clave</b> va grande; el resto, en tamaño normal.</li><li><b>No pongas subtítulos</b> ni el sticker de enlace: usa «comenta la palabra X».</li></ul></section>';
  h+='<section class="panel"><h3>Medidas</h3><p class="mut">El curso no da medidas en píxeles. Lo siguiente es una recomendación general de Instagram, no del curso:</p><ul><li>Formato vertical 9:16 (1080 × 1920 px).</li><li>Deja libres unos 250 px arriba y abajo, donde Instagram pone su propia interfaz.</li><li>Mantén los textos importantes dentro del 80% central de la pantalla.</li></ul></section>';
  return h;
}

// ===== pestaña REVISOR =====
function viewRevisor(){
  const t=S.rv||"",m=S.rtab||"meta";
  let h='<section class="panel"><h2>Revisor de textos</h2><p class="lead">Pega aquí el texto de tus stories antes de publicarlas. Se revisan dos cosas: las normas de Meta, que penalizan ciertas frases en negocios de venta directa, y la calidad del texto según el curso.</p><textarea id="rv_t" rows="7" placeholder="Pega tu guion o tu CTA">'+esc(t)+'</textarea><div class="chips"><button class="chip'+(m==="meta"?" on":"")+'" data-rt="meta">Políticas de Meta</button><button class="chip'+(m==="cur"?" on":"")+'" data-rt="cur">Calidad del curso</button><button class="chip'+(m==="cta"?" on":"")+'" data-rt="cta">Revisar un CTA</button></div></section>';
  h+='<section class="panel" id="rv_out">'+revOut(t,m)+'</section>';
  return h;
}
function revOut(t,m){
  if(!t.trim())return '<p class="mut">Pega un texto para revisarlo.</p>';
  if(m==="meta"){
    const hits=scanMeta(t);if(!hits.length)return '<p class="okb"><b>Sin avisos.</b> No he encontrado frases de riesgo. Aun así, lee el texto una vez más con calma.</p>';
    let o="",pos=0;hits.forEach(h=>{if(h.i<pos)return;o+=esc(t.slice(pos,h.i))+'<mark class="'+h.l+'">'+esc(t.substr(h.i,h.len))+'</mark>';pos=h.i+h.len});o+=esc(t.slice(pos));
    const uniq={};hits.forEach(h=>{uniq[h.t]=h});
    return '<div class="rtxt">'+o.replace(/\n/g,"<br>")+'</div><ul class="hits">'+Object.values(uniq).map(h=>'<li><b>'+esc(h.t)+'</b> <span class="lv '+h.l+'">'+(h.l==="alto"?"Riesgo alto":"Riesgo medio")+'</span><br><small>Prueba con: '+esc(h.alt)+'</small></li>').join("")+'</ul><p class="note"><button class="linkb" data-tab="normas">Ver lo que no se dice</button></p>';
  }
  if(m==="cta"){
    const r=ctaCheck(t);
    return '<ul class="ctal"><li class="'+(r.ben?"ok":"no")+'"><b>Beneficio</b> '+(r.ben?"Hay un beneficio claro.":"Falta: di qué consigue la persona (su resultado o su alivio).")+'</li><li class="'+(r.pro?"ok":"no")+'"><b>Promesa</b> '+(r.pro?"Dices qué recibe.":"Falta: di exactamente qué recurso va a recibir (guía, lista, audio…).")+'</li><li class="'+(r.acc?"ok":"no")+'"><b>Acción</b> '+(r.acc?"Hay una acción y una palabra clave.":"Falta: «comenta la palabra X» con la palabra en mayúsculas.")+'</li></ul>'+(r.avisos.length?'<ul class="hits">'+r.avisos.map(a=>'<li>'+esc(a)+'</li>').join("")+'</ul>':'');
  }
  const ch=[],words=t.trim().split(/\s+/).length;
  ch.push([words<=25,"Longitud","Entre 15 y 25 palabras por story. Tu texto tiene "+words+"."]);
  ch.push([!/https?:|www\.|enlace|link/i.test(t),"Sin enlaces","Usa «comenta la palabra X» en vez de enlaces."]);
  ch.push([!/dale like|si quieres empezar a|te paso un loom/i.test(t),"Sin CTA flojos","Evita «dale like» o «si quieres empezar a…»."]);
  ch.push([!/solo hoy|ultima hora|ultimas plazas|corre\b|urgente/i.test(norm(t)),"Sin urgencia falsa","Si hay fecha límite, que sea real."]);
  ch.push([!/subtitul/i.test(t),"Sin subtítulos","El curso recomienda no usar subtítulos automáticos."]);
  return '<ul class="ctal">'+ch.map(c=>'<li class="'+(c[0]?"ok":"no")+'"><b>'+c[1]+'</b> '+(c[0]?"Correcto.":esc(c[2]))+'</li>').join("")+'</ul>';
}

// ===== pestaña GUÍA DEL MÉTODO =====
function viewGuia(){
  const D=(t,b)=>'<details class="panel gd"><summary>'+t+'</summary><div class="gb2">'+b+'</div></details>';
  const tipos=via=>"<ul>"+objsVia(via).map(k=>'<li><b>'+esc(DB.OBJS[k].corto)+' ('+esc(DB.OBJS[k].tipo.toLowerCase())+').</b> '+esc(DB.OBJS[k].que)+'</li>').join("")+"</ul>";
  let h='<section class="panel"><h2>Guía del método</h2><p class="lead">Lo esencial para publicar con cabeza, explicado sin palabras raras. Si empiezas, lee las cuatro primeras.</p></section>';
  h+=D("Reels atraen, stories convierten","<p>Los <b>reels</b> hacen que te descubra gente nueva. Las <b>stories</b> hacen que quien ya te sigue confíe en ti y te escriba. Los <b>recursos</b> son lo que mandas por mensaje privado cuando alguien te lo pide.</p><p>Por eso cada pieza tiene un objetivo: un reel para <b>crecer</b> (que te descubran), un reel para <b>captar</b> (que te escriban con una palabra clave) y secuencias de stories que ayudan, enseñan o cuentan tu día.</p>");
  h+=D("El camino completo: del comentario a WhatsApp","<ol><li><b>Publicas</b> un reel o unas stories que hablan de un problema concreto de tu clienta.</li><li><b>Alguien escribe</b> tu palabra clave (en un comentario o respondiendo a la story).</li><li><b>Le mandas el recurso</b> por mensaje privado de Instagram: la guía y, si quieres, la tarjeta.</li><li><b>Seguimiento</b> a los 2 o 3 días, sin presión, si no ha contestado.</li><li><b>Pasas a WhatsApp</b> cuando ya hay confianza. Con una clienta: un consejo según lo que necesita y, si quiere, su pedido. Con alguien interesado en el proyecto: información básica y un Zoom corto de lunes a viernes entre las 9:00 y las 21:00. Si no quiere Zoom, un vídeo de menos de 10 minutos.</li></ol><p class=\"note\">Todo esto está en Recursos, mensaje a mensaje.</p>");
  h+=D("Las 5 preguntas antes de grabar","<ol><li>¿A quién me dirijo? A tu clienta ideal, no a todo el mundo.</li><li>¿Qué problema cuento? Uno solo por reel o secuencia.</li><li>¿Qué le aporto? Algo que pueda aplicar hoy.</li><li>¿Se nota que sé del tema? Cuenta lo que haces tú, con detalles reales.</li><li>¿Qué punto de partida tiene? ¿Sabe que tiene el problema? ¿Conoce la solución? ¿Ya está comparando?</li></ol>");
  h+=D("Estructura de una secuencia de stories","<p>Una secuencia no es una story suelta: son de 3 a 8 stories con un hilo (3 es la versión corta, perfecta para empezar). El orden más seguro es: <b>gancho</b> (el problema y lo que se desea), <b>tutorial</b> (máximo 3 stories), <b>prueba social</b> y <b>llamada a la acción</b> con palabra clave, nunca con enlace. Cada story dura entre 7 y 15 segundos. Máximo dos vídeos a cámara seguidos.</p>");
  h+=D("Tipos de secuencia para clientas",tipos("clientas"));
  h+=D("Tipos de secuencia para el proyecto","<p>Cuentan cómo encaja el proyecto con Fam Team en una vida real. Nunca se habla de dinero. Solo una de ellas pide algo al final.</p>"+tipos("proyecto"));
  h+=D("Un buen reel: lo que tiene que cumplir","<ul><li><b>Gancho de 3 segundos:</b> lo primero que se lee o se oye. Tiene que despertar curiosidad y que la persona piense «esa soy yo».</li><li><b>Una sola idea.</b> Se entiende en menos de 5 segundos de leer la pantalla.</li><li><b>Cuenta lo tuyo:</b> detalles de verdad (una hora, un sitio, un objeto) valen más que frases bonitas.</li><li><b>Cierre:</b> si es para crecer, invita a seguirte; si es para captar, termina con la palabra clave y lo que recibe.</li><li><b>Formatos sin cara</b> para empezar: manos, objetos, texto en pantalla. La cara llega cuando te sientas cómoda.</li></ul>");
  h+=D("Las tres palancas de las stories","<ul><li><b>Retención:</b> que la gente vea tus stories hasta el final. Lo consigues con gancho, hilo y curiosidad.</li><li><b>Respuestas:</b> que te contesten por mensaje. Una respuesta vale más que una encuesta.</li><li><b>Primera semana:</b> los nuevos seguidores tienen siete días en los que ven más tus stories. Aprovecha con una primera story visual y cercana.</li></ul><p>Una cuenta normal ve sus stories entre el 5 % y el 10 % de sus seguidores. Si tu secuencia es buena, ese número sube. Compruébalo en Mis números.</p>");
  h+=D("La llamada a la acción que funciona","<p>Fórmula: <b>beneficio</b> (lo que la persona consigue) + <b>promesa concreta</b> del recurso + <b>acción específica</b> (una palabra clave).</p><p>Ejemplo flojo: «te paso una guía». Ejemplo bueno: «si quieres tener una rutina de cinco minutos que sí hagas cada noche, comenta la palabra RUTINA y te envío mi mini guía».</p><p>Las palabras concretas funcionan mejor que las genéricas: NOCHE, REGALOS o PAUSA mejor que INFO.</p>");
  h+=D("La semana en espiral","<p>Durante una semana repites <b>el mismo problema</b> de tu clienta, contado de formas distintas: un reel que la encuentra, stories que la acompañan y una llamada a la acción. Así te recuerdan y confían.</p><ul><li>Reels por la mañana y stories entre las 11:00 y las 14:00.</li><li>El sábado se descansa.</li><li>Como máximo 2 llamadas a la acción en las stories de la semana, y nunca dos el mismo día. El reel de captar también cuenta.</li><li>Una venta directa por semana como mucho.</li><li>Tres planes: Inicio (1 reel y 3 secuencias), Estándar (2 reels y 4 secuencias) y Completo (3 reels y 6 secuencias).</li></ul><p>Empieza con el plan Inicio. Cuando lo hagas con comodidad, sube al Estándar. Planifica, graba el lunes y publica a lo largo de la semana.</p>");
  h+=D("Frases que Instagram penaliza","<ul><li>Nada de dinero, ingresos, comisiones ni capturas de pagos.</li><li>Nada de pérdida de peso, antes y después de cuerpo ni promesas de salud.</li><li>Con nutrición, solo sabor, preparación y rutina. Nunca un efecto en el cuerpo.</li><li>Urgencia solo si es real, con fecha verdadera.</li><li>El caso de una clienta, solo con su permiso por escrito.</li><li>Sin números ni comparaciones de cuerpo.</li></ul><p class=\"note\">El Revisor (Más) marca estas frases en tus textos y te propone cómo decirlo.</p>");
  h+=D("Glosario para empezar","<dl class='gl'>"+[["Story","Foto o vídeo que dura 24 horas en Instagram."],["Reel","Vídeo corto que Instagram enseña también a gente que no te sigue."],["Secuencia","Varias stories seguidas que cuentan una sola idea."],["Gancho","La primera frase o imagen: lo que hace que no pasen de largo."],["Llamada a la acción","Lo que le pides hacer a quien te ve, por ejemplo «comenta la palabra NOCHE»."],["Palabra clave","Una palabra que la persona comenta o responde para recibir el recurso."],["Recurso","Lo que mandas a cambio de la palabra clave: una guía, una lista, un audio."],["Hilo","El tema común que une tus publicaciones de la semana."],["Retención","Cuánta gente sigue viendo tu secuencia hasta el final."],["Prueba social","Mensajes o experiencias de otras personas que demuestran que lo que cuentas es real."],["POV","Vídeo en primera persona, como si la persona viera lo que tú ves."],["Detrás de cámaras","Mostrar cómo es tu día o cómo preparas algo, sin guion."],["Lifestyle","Contenido de tu vida diaria con una intención detrás."],["Objeción","Una duda que impide comprar o apuntarse: «es caro», «no tengo tiempo»."],["Cliente ideal","La persona a la que quieres ayudar. Para quien hablas."]].map(g=>'<dt>'+g[0]+'</dt><dd>'+g[1]+'</dd>').join("")+"</dl>");
  return h;
}

// ===== pestaña PERFIL =====
function viewPerfil(){
  const P=ls("ft_perfil")||{},G=ls("ft_guiones")||[];
  let h='<section class="panel"><h2>Tu perfil</h2><div class="grid3"><label>Tu nombre<input id="p_nombre" value="'+esc(P.nombre||"")+'"></label><label>Tu usuario de Instagram<input id="p_user" value="'+esc(P.user||"")+'" placeholder="@tuusuario" autocapitalize="none" autocomplete="off"><small>Sale al pie de tus tarjetas.</small></label><label>Tu teléfono para WhatsApp (opcional)<input id="p_tel" type="tel" inputmode="tel" value="'+esc(P.tel||"")+'" placeholder="612 345 678" autocomplete="off"><small>Se pone solo en los mensajes de Recursos. Se queda en este dispositivo.</small></label><label>Tu nivel'+sel("p_nivel",[["empiezo","Empiezo hoy"],["suelto","Me suelto"],["pro","Ya publico a diario"]],P.nivel||S.f.nivel)+'</label><label>Tono habitual'+sel("p_tono",Object.keys(DB.TONOS).map(k=>[k,DB.TONOS[k].n]),P.tono||S.f.tono)+'</label></div><div class="acts"><button class="btn" data-act="psave">Guardar perfil</button></div><p class="note">Todo se guarda solo en este navegador y no se envía a ninguna parte.</p></section>';
  h+='<section class="panel"><h3>Mis guiones guardados</h3>'+(G.length?G.map((g,i)=>'<details class="gd2"><summary><b>'+esc(g.titulo)+'</b> <small>'+esc(g.fecha)+'</small></summary><pre>'+esc(g.texto)+'</pre><button class="mini" data-gcopy="'+i+'">Copiar</button> <button class="mini" data-gdel="'+i+'">Quitar</button></details>').join(""):'<p class="mut">Todavía no has guardado ninguno. Genera una secuencia y pulsa «Guardar».</p>')+'</section>';
  return h;
}

// ===== render y eventos =====
const VIEWS={ayuda:viewAyuda,crear:viewCrear,situaciones:viewSituaciones,ganchos:viewGanchos,formatos:viewFormatos,cuadricula:viewCuadricula,revisor:viewRevisor,guia:viewGuia,perfil:viewPerfil};
function saveSeq(res){
  const G=ls("ft_guiones")||[];G.unshift({titulo:res.obj.corto+" · "+res.sit.nombre,fecha:new Date().toLocaleDateString("es-ES"),texto:scriptText(res)});
  ls("ft_guiones",G.slice(0,40));toast("Guardado en tu perfil");
}
document.addEventListener("click",e=>{
  const t=e.target.closest("button,[data-tab]");if(!t)return;
  const d=t.dataset;
  if(d.tab||d.go){go(d.tab||d.go);return}
  if(d.copy){copy(d.copy);return}
  if(d.grp){S.gtab[S.svia]=d.grp;render(true);return}
  if(d.svia){S.svia=d.svia;render();return}
  if(d.via){readCrear();setVia(d.via);render(true);return}
  if(d.gz){S.gz=d.gz;render(true);return}
  if(d.rt){S.rtab=d.rt;const x=$("#rv_t");S.rv=x?x.value:S.rv;render(true);return}
  if(d.kw){readCrear();S.f.kw=d.kw;render(true);return}
  if(d.use){readCrear();const u=SIT[d.use];if(u){setVia(u.via);S.f.sit=u.id}S.res=null;go("crear");return}
  if(d.gcopy){copy((ls("ft_guiones")||[])[+d.gcopy].texto);return}
  if(d.gdel){const G=ls("ft_guiones")||[];G.splice(+d.gdel,1);ls("ft_guiones",G);render(true);return}
  switch(d.act){
   case "gen":readCrear();S.f.nonce=0;S.res=genSeq(S.f,histSets());histCommit(S.res.used);render();setTimeout(()=>{const o=$("#out");if(o)o.scrollIntoView({behavior:"smooth",block:"start"})},50);break;
   case "regen":S.f.nonce++;S.res=genSeq(S.f,histSets());histCommit(S.res.used);render(true);break;
   case "copyseq":copy(scriptText(S.res));break;
   case "saveseq":saveSeq(S.res);break;
   case "psave":{const p={nombre:$("#p_nombre").value,user:$("#p_user").value,tel:$("#p_tel").value.trim(),nivel:$("#p_nivel").value,tono:$("#p_tono").value};ls("ft_perfil",p);S.f.nivel=p.nivel;S.f.tono=p.tono;S.f.len=defLen(p.nivel);toast("Perfil guardado");break}
  }
});
document.addEventListener("change",e=>{
  const id=e.target.id||"";
  if(id==="f_obj"){readCrear();setVia(viaOf(S.f.obj));render(true)}
  else if(id==="f_sit"||id==="f_prod"){readCrear();S.f.kw="";render(true)}
  else if(id==="f_tono"||id==="f_len"||id==="f_kw"||id==="f_fecha"||id==="f_dias"){readCrear()}
  else if(e.target.name==="i_nivel"){S.f.nivel=e.target.value;S.f.len=defLen(S.f.nivel);const p=ls("ft_perfil")||{};p.nivel=S.f.nivel;ls("ft_perfil",p);render(true)}
  else if(e.target.name==="f_nivel"){readCrear();S.f.len=defLen(S.f.nivel);render(true)}
});
document.addEventListener("input",e=>{
  if(e.target.id==="g_x"){S.gx=e.target.value;const p=e.target.selectionStart;render(true);const n=$("#g_x");n.focus();n.setSelectionRange(p,p)}
  else if(e.target.id==="g_q"){S.gq=e.target.value;$("#g_res").innerHTML=ganchosBusca(S.gq)}
  else if(e.target.id==="rv_t"){S.rv=e.target.value;$("#rv_out").innerHTML=revOut(S.rv,S.rtab||"meta")}
});
S.f.len=defLen(S.f.nivel);

// ===== Fam Studio · Reels: «Reels listos» y «Crear mi reel» =====
// Todo el texto dinámico pasa por esc(). El contenido (DB) se trata siempre como datos.
const RL=(function(){
const DIF={sin_cara:"Sin cara",media:"Con soltura",con_cara:"A cámara"},DIF_ORD=["sin_cara","media","con_cara"];
const SEEN_KEY="fs_reels_vistos",SEEN_MAX=30;
const FM={},USAP={};
DB.formatos.forEach(f=>{FM[f.id]=f;USAP[f.id]=/\{producto\}/.test(f.pantalla+" "+f.planos.map(p=>p.ve+" "+p.dice).join(" "))});
const LIB=[].concat(DB.reels.crecer,DB.reels.captar);
const LIBID={};LIB.forEach(r=>{LIBID[r.id]=r});
// tipos de gancho y emociones que, en los reels ya escritos, acompañan a cada formato (sirve para elegir ganchos compatibles)
const FT={},EM={};
LIB.forEach(r=>{(FT[r.formato]=FT[r.formato]||{})[r.gancho_tipo]=1;const m=EM[r.gancho_tipo]=EM[r.gancho_tipo]||{};m[r.emocion]=(m[r.emocion]||0)+1});
const emoTop=t=>Object.keys(EM[t]||{}).sort((a,b)=>EM[t][b]-EM[t][a]).slice(0,3);
const compat=(s,fm)=>{const t=FT[fm.id]||{};return s.ganchos.filter(g=>t[g.tipo])};
// gamas del filtro
const GAMAS=["Piel","Maquillaje","Cabello","Fragancias","Nutrición","Cuidado personal","Día a día"];
const GAMA_LAB={piel:"Piel",maq:"Maquillaje",cabello:"Cabello",perfume:"Fragancias",nutri:"Nutrición",cuidado:"Cuidado personal"};
const GRUPO_GAMA={"Piel":"Piel","Maquillaje":"Maquillaje","Cabello":"Cabello","Fragancias y regalos":"Fragancias","Nutrición y bienestar":"Nutrición"};
function gamaDe(r){
  if(r.via==="proyecto")return "";
  if(r.grupo&&GAMAS.indexOf(r.grupo)>=0)return r.grupo;
  const g=(r.gamas||[])[0];if(g&&GAMA_LAB[g])return GAMA_LAB[g];
  const s=SIT[r.situacion];if(s&&GRUPO_GAMA[s.grupo])return GRUPO_GAMA[s.grupo];
  return "Día a día";
}
const CAT_TXT={piel:"mi crema",maq:"mi maquillaje",cabello:"mi producto para el pelo",perfume:"mi perfume",nutri:"mi té",cuidado:"mi gel",cat:"mi catálogo"};
const PROPIOS=/^(Halloween|Black|Stories|Navidad|Zoom|Instagram|WhatsApp|Farmasi|Fam)\b/;
const temaDe=s=>{const t=s.nombre.replace(/[¿?¡!]/g,"").replace(/\s*:\s*/g,", ").replace(/\s+/g," ").trim();return PROPIOS.test(t)?t:lc(t)};
const nl2br=t=>esc(t).replace(/\n/g,"<br>");
const AVISO_NUTRI=(DB.gamas&&DB.gamas.nutri&&DB.gamas.nutri.aviso)||"";

// ----- recurso asociado a un reel ya escrito -----
const GBT={};DB.guias.forEach(g=>{GBT[norm(g.titulo)]=g});
function guiaDeReel(r){
  if(r.objetivo!=="captar")return null;
  return GBT[norm(r.recurso||"")]||GUIA_KW[r.via+"|"+r.kw]||(SIT[r.situacion]?guiaOf(SIT[r.situacion]):null)||null;
}

// ----- ficha unificada (la misma para «listos» y para «crear») -----
function fichaLib(r){
  const fm=FM[r.formato],s=SIT[r.situacion],guia=guiaDeReel(r);
  const nutri=!!r.aviso||(r.gamas||[]).indexOf("nutri")>=0;
  return {lib:true,id:r.id,via:r.via,obj:r.objetivo,idea:r.idea,fm,dolor:r.dolor,gancho:r.gancho,tipo:r.gancho_tipo,pantalla:r.pantalla,planos:r.planos,
    emocion:r.emocion,cierre:r.cierre,kw:r.kw||"",recT:r.recurso||"",guia,caption:r.caption,aviso:r.aviso||(nutri?AVISO_NUTRI:""),
    dif:fm.dificultad,dur:fm.duracion,consejo:fm.consejo,gama:gamaDe(r),sitN:s?s.nombre:"",prod:""};
}
function guionTxt(F){
  let o="REEL: "+F.idea+"\nPara: "+(F.via==="proyecto"?"el proyecto":"clientas")+" · Objetivo: "+(F.obj==="captar"?"captar":"crecer")+"\nFormato: "+F.fm.nombre+" · "+F.dur+" · "+DIF[F.dif]+"\n\n";
  o+="GANCHO (3 primeros segundos"+(F.mudo?", en texto sin voz":"")+"): "+F.gancho+"\nTEXTO EN PANTALLA: "+F.pantalla+"\n\nPLANOS\n";
  F.planos.forEach(p=>{o+=p.seg+" s · Se ve: "+p.ve+" · Se dice: "+p.dice+"\n"});
  o+="\nEMOCIÓN: "+F.emocion+"\nCIERRE: "+F.cierre+"\n";
  if(F.kw)o+="PALABRA CLAVE: "+F.kw+"\n"+(F.recT?"RECURSO QUE ENVÍAS: "+F.recT+"\n":"");
  if(F.prod)o+="PRODUCTO: "+F.prod+"\n";
  o+="\nCAPTION:\n"+F.caption+"\n";
  if(F.aviso)o+="\nAVISO: "+F.aviso+"\n";
  o+="\nCONSEJO PARA GRABARLO: "+F.consejo;
  return o.trim();
}

// ===== registro de fichas (para los botones) =====
const REG={};
function planosHtml(P){
  return '<table class="ptab"><thead><tr><th>Segundos</th><th>Qué se ve</th><th>Qué se dice</th></tr></thead><tbody>'
  +P.map(p=>'<tr><td class="ps"><b>'+esc(p.seg)+'</b> s</td><td data-l="Se ve">'+esc(p.ve)+'</td><td data-l="Se dice">'+esc(p.dice)+'</td></tr>').join("")+'</tbody></table>';
}
// o.extra: html de botones adicionales; o.nested: true si va dentro de otro panel
function fichaHtml(F,key,o){
  o=o||{};REG[key]=F;
  const k=esc(key);
  let h='<article class="rl-ficha'+(o.nested?" rl-nested":"")+'">';
  h+='<div class="rl-tags"><span class="tag">'+(F.obj==="captar"?"Captar":"Crecer")+'</span><span class="tag">'+(F.via==="proyecto"?"Proyecto":"Clientas")+'</span><span class="tag">'+esc(DIF[F.dif])+'</span><span class="tag pal">'+esc(F.dur)+'</span>'+(F.gama?'<span class="tag pal">'+esc(F.gama)+'</span>':'')+'</div>';
  h+='<h3 class="rl-idea">'+esc(F.idea)+'</h3>';
  if(F.dolor)h+='<p class="mut rl-dolor">Le pasa a quien te ve: '+esc(F.dolor)+'</p>';
  h+='<div class="rl-gan"><small>Gancho · '+esc(cap(F.tipo))+(F.mudo?' · escríbelo en pantalla, sin voz':'')+'</small><p>'+esc(F.gancho)+'</p><button class="mini" data-copy="'+esc(F.gancho)+'">Copiar gancho</button></div>';
  h+='<div class="rl-pan"><small>Texto en pantalla</small><p>'+esc(F.pantalla)+'</p></div>';
  h+='<h4 class="rl-h">Planos · '+esc(F.fm.nombre)+'</h4>'+planosHtml(F.planos);
  h+='<dl class="rl-dl"><dt>Emoción</dt><dd>'+esc(cap(F.emocion))+'</dd>';
  h+='<dt>'+(F.obj==="captar"?"Cierre con llamada a la acción":"Cierre")+'</dt><dd>'+esc(F.cierre)+'</dd>';
  if(F.kw)h+='<dt>Palabra clave</dt><dd><span class="rl-kw">'+esc(F.kw)+'</span></dd>';
  if(F.kw&&F.recT){
    h+='<dt>Recurso que envías</dt><dd>'+esc(F.recT)+(F.guia&&norm(F.guia.titulo)!==norm(F.recT)?'<small class="mut">En Recursos: «'+esc(F.guia.titulo)+'»</small>':'')+'</dd>';
  }
  if(F.prod)h+='<dt>Producto</dt><dd>'+esc(F.prod)+'</dd>';
  h+='<dt>Caption</dt><dd class="rl-cap">'+nl2br(F.caption)+'</dd>';
  h+='<dt>Consejo para grabarlo</dt><dd>'+esc(F.consejo)+'</dd></dl>';
  if(F.aviso)h+='<p class="aviso"><b>Aviso:</b> '+esc(F.aviso)+'</p>';
  h+='<div class="rl-acts"><button class="btn" data-act="rcopy" data-k="'+k+'">Copiar guion completo</button><button class="btn ghost" data-act="rcaption" data-k="'+k+'">Copiar caption</button><button class="btn ghost" data-act="rsave" data-k="'+k+'">Guardar</button>';
  if(F.obj==="captar")h+='<button class="btn ghost" data-act="rrec" data-k="'+k+'">Ver el recurso que envías</button>';
  h+=(o.extra||"")+'</div>';
  return h+'</article>';
}
function guardar(F){
  const G=ls("ft_guiones")||[];
  G.unshift({titulo:"Reel · "+F.idea,fecha:new Date().toLocaleDateString("es-ES"),texto:guionTxt(F)});
  ls("ft_guiones",G.slice(0,40));toast("Guardado en tu perfil");
}
function verRecurso(F){
  const g=F&&F.guia;
  if(g&&typeof VIEWS.guia_det==="function"){S.guia=g.id;go("guia_det")}
  else go("recursos");
}

// ===== generador de «Crear mi reel» =====
function fillT(tpl,v){
  return limpia(String(tpl).replace(/\{(tema|producto|dolor)\}/g,(m,k,off,str)=>{
    let x=v[k];
    const before=str.slice(0,off).replace(/[«“"'¿¡\s]+$/,"");
    if(!before||/[.!?]$/.test(before))x=cap(x);
    return x;
  }));
}
const TEMA_GRUPO={"Piel":"cuidado de la piel","Maquillaje":"maquillaje","Cabello":"cuidado del pelo","Día a día":"tu día a día","Fechas y ocasiones":"cada ocasión especial",
  "Fragancias y regalos":"perfumes y regalos","Nutrición y bienestar":"rutinas y recetas sencillas","Catálogo y pedidos":"el catálogo y tus pedidos",
  "Dudas y miedos":"dudas de quien empieza","Aprender redes":"cómo aprender redes sin agobios","Tiempo para mí":"cómo sacar tiempo para ti",
  "Mi día con el proyecto":"mi día a día con el proyecto","Algo propio":"cómo empezar algo propio","Acompañada":"cómo sentirte acompañada"};
const CIERRES_CRECER=["Sígueme para más ideas sobre {t}.","Si te ha servido, sígueme: subo más ideas sobre {t}.","Guárdalo y sígueme para más ideas sobre {t}.","Sígueme y te sigo contando ideas sobre {t}.","Para más ideas sobre {t}, sígueme y no te pierdas el próximo."];
// captions: tres líneas a partir del dolor (d, D) y del deseo (e). En captar la última línea la sustituye la palabra clave.
const CAPS={
 clientas:[
  ["{D}. Me pasaba hasta que lo simplifiqué.","Si quieres {e}, mira el vídeo con calma.","¿Tú cómo lo llevas?"],
  ["Si {d}, este vídeo es para ti.","No hace falta complicarse para {e}.","Guárdalo para cuando lo necesites."],
  ["{D}, ¿a que sí?","Yo también quiero {y}, así que lo cuento tal cual, sin postureo.","Cuéntame en comentarios cómo lo haces tú."],
  ["A veces {d}, y no pasa nada.","Un ratito y un gesto pequeño ayudan a {e}.","¿Lo pruebas esta semana?"],
  ["Pensando en ti, que {d}.","Solo quiero que puedas {e}.","¿Me cuentas cómo lo haces tú?"],
  ["{D}.","Lo sé porque me ha pasado a mí también.","Aquí va lo que a mí me funciona para {y}."],
  ["Si {d}, no eres la única.","Esto es lo que hago yo para {y}.","¿Cuál es tu truco?"]],
 proyecto:[
  ["Si {d}, no estás sola.","Yo también empecé con mis dudas, y hoy te cuento cómo lo llevo.","¿Qué es lo que más te frena a ti?"],
  ["{D}. Te lo digo sin presión.","Si quieres {e}, mira el vídeo con calma.","Puedes escribirme cuando quieras."],
  ["A veces {d}, y es normal.","Estoy aprendiendo despacio, en equipo y sin prisas, para {y}.","¿Te pasa también?"],
  ["Si {d}, este vídeo es para ti.","Nada de agobios: un paso pequeño cada día para {e}.","Cuéntame qué piensas."],
  ["{D}.","A mí me pasaba, y por eso lo cuento tal cual.","¿Te animas a decirme qué te preocupa?"]]
};
// el deseo escrito para «tú» pasado a primera persona («cuidarte» → «cuidarme», «tu rutina» → «mi rutina»)
function aYo(e){
  const P="(^|[^\\p{L}\\d])",Q="(?![\\p{L}\\d])";
  const M={tu:"mi",tus:"mis",ti:"mí",tú:"yo",te:"me",contigo:"conmigo",tuyo:"mío",tuya:"mía",tuyos:"míos",tuyas:"mías"};
  const NOUN=/^(parte|arte|fuerte|suerte|muerte|aparte|reparte|departe|puerte|carte)$/i; // «parte» no es «parar+te»
  let x=String(e).replace(new RegExp(P+"(\\p{L}+)(ar|er|ir)te"+Q,"giu"),(m,a,b,c)=>NOUN.test(b+c+"te")?m:a+b+c+"me");
  x=x.replace(new RegExp(P+"(tuyos|tuyas|tuyo|tuya|contigo|tus|tu|ti|tú|te)"+Q,"giu"),(m,a,w)=>a+(M[w.toLowerCase()]||w));
  return x;
}
function fillCap(tpl,s){
  const e=lc(noDot(s.deseo)),v={D:cap(noDot(s.dolor)),d:lc(noDot(s.dolor)),e,y:aYo(e)};
  return limpia(tpl.replace(/\{(D|d|e|y)\}/g,(m,k)=>v[k]));
}
function elegirFormato(via,obj,s,prod,avoid,nivel){
  let c=DB.formatos.filter(x=>x.via.indexOf(via)>=0&&(x.objetivo==="ambos"||x.objetivo===obj));
  const sub=(fn)=>{const a=c.filter(fn);if(a.length)c=a};
  if(via!=="clientas")sub(x=>!USAP[x.id]);
  if(avoid)sub(x=>!avoid.has(x.id));
  const ok={empiezo:["sin_cara"],suelto:["sin_cara","media"]}[nivel];
  if(ok)sub(x=>ok.indexOf(x.dificultad)>=0);
  if(prod)sub(x=>USAP[x.id]);
  sub(x=>compat(s,x).length>0);
  return pick(c);
}
// f: {via,obj:"crecer"|"captar",sit,fmt:"auto"|id,prod:"auto"|id,kw,nonce,nivel}. av: conjuntos a evitar {g,c,f}. o.avoidFmt: Set de formatos ya usados.
function genReel(f,av,o){
  o=o||{};
  av=av||histSets();av={g:new Set(av.g),c:new Set(av.c),f:new Set(av.f)};
  const used={g:[],c:[],f:[]};
  let s=SIT[f.sit];
  const via0=f.via||(s&&s.via)||"clientas";
  if(!s||s.via!==via0){const L=sitsVia(via0);s=L[hash(["rs",f.sit,f.nonce].join("|"))%L.length]}
  const via=s.via,obj=f.obj==="captar"?"captar":"crecer";
  R=mulberry(hash(["reel",via,s.id,obj,f.fmt,f.prod,f.kw||"",f.nonce|0].join("|")));
  const okP=p=>p&&!PROD_EXCL.has(p.id);
  let prod=null;
  if(via==="clientas"&&f.prod&&f.prod!=="auto"&&okP(PROD[f.prod]))prod=PROD[f.prod];
  let fm=(f.fmt&&f.fmt!=="auto")?FM[f.fmt]:null;
  if(fm&&fm.via.indexOf(via)<0)fm=null;
  if(!fm)fm=elegirFormato(via,obj,s,prod,o.avoidFmt,f.nivel||S.f.nivel);
  // producto: solo si el formato lo pide (o la persona lo ha elegido)
  let prodT="";
  if(USAP[fm.id]){
    if(via==="proyecto")prodT="mi cuaderno";
    else{
      if(!prod){const pool=(s.productos||[]).map(id=>PROD[id]).filter(okP);if(pool.length)prod=pick(pool)}
      prodT=prod?prod.nombre_corto:(CAT_TXT[(s.gamas||[])[0]]||"mi producto favorito");
    }
  }else if(!prod&&via==="clientas"){/* sin producto */}
  // gancho: de la situación, de un tipo compatible con el formato si lo hay
  const comp=compat(s,fm),gh=pickAv(comp.length?comp:s.ganchos,av,x=>x.t,"g",used);
  const v={tema:temaDe(s),producto:prodT,dolor:lc(noDot(s.dolor))};
  const planos=fm.planos.map(p=>({seg:p.seg,ve:fillT(p.ve,v),dice:fillT(p.dice,v)}));
  const d0=planos[0].dice;
  const mudo=/^(sin voz|solo sonido|texto\b)/i.test(d0); // formato sin voz: el gancho va como texto en pantalla
  if(!mudo)planos[0].dice=(/[.!?…]$|[.!?…]["»]$/.test(gh.t)?gh.t:gh.t+".")+" "+d0;
  const pantalla=fillT(fm.pantalla,v);
  // cierre
  let kw="",guia=null,recT="",cierre;
  if(obj==="captar"){
    kw=f.kw||pick(s.palabras_clave);
    guia=GUIA_KW[via+"|"+kw]||guiaOf(s);
    recT=guia?guia.titulo:s.recurso;
    const tpl=pickAv(DB.ctas.reel,av,x=>x.decir,"c",used);
    cierre=fillCta(tpl.decir,{deseo:lc(noDot(s.deseo)),dolor:lc(noDot(s.dolor)),KW:kw,recurso:recursoTxt(guia,s)});
  }else{
    cierre=pick(CIERRES_CRECER).replace("{t}",TEMA_GRUPO[s.grupo]||lc(s.grupo));
  }
  // caption
  const ct=pick(CAPS[via]).slice();
  if(obj==="captar")ct[2]="Comenta "+kw+" y te mando "+recursoTxt(guia,s)+" por privado.";
  const caption=ct.map(l=>fillCap(l,s)).join("\n");
  const nutri=(s.gamas||[]).indexOf("nutri")>=0||s.grupo==="Nutrición y bienestar"||(prod&&prod.gama==="nutri");
  return {gen:true,mudo,id:"gen",via,obj,idea:cap(s.nombre),fm,dolor:s.dolor,gancho:gh.t,tipo:gh.tipo,pantalla,planos,emocion:pick(emoTop(gh.tipo).concat(["cercanía"]).slice(0,3)),
    cierre,kw,recT,guia,caption,aviso:nutri?AVISO_NUTRI:"",dif:fm.dificultad,dur:fm.duracion,consejo:fm.consejo,gama:"",sitN:s.nombre,
    prod:prod?prod.nombre:"",sit:s,used,f:Object.assign({},f)};
}

// ===== estado =====
S.cmode=S.cmode||"stories";
S.rl={tab:"listos",lf:{via:"",obj:"",gama:"",dif:""},cur:null,cf:{via:"clientas",obj:"crecer",sit:"",fmt:"auto",prod:"auto",nonce:0},res:null};

// ===== biblioteca =====
const filtrados=()=>{const f=S.rl.lf;return LIB.filter(r=>(!f.via||r.via===f.via)&&(!f.obj||r.objetivo===f.obj)&&(!f.gama||gamaDe(r)===f.gama)&&(!f.dif||FM[r.formato].dificultad===f.dif))};
function marcarVisto(id){
  const v=(ls(SEEN_KEY)||[]).filter(x=>x!==id);v.push(id);
  ls(SEEN_KEY,v.slice(-SEEN_MAX));
}
// «Otro reel»: al azar dentro del filtro, sin repetir los últimos 30 vistos
function otro(){
  const L=filtrados();
  if(!L.length){S.rl.cur=null;return null}
  const seen=ls(SEEN_KEY)||[];
  let pool=L.filter(r=>seen.indexOf(r.id)<0&&r.id!==S.rl.cur);
  if(!pool.length){
    const ord=L.filter(r=>r.id!==S.rl.cur).sort((a,b)=>seen.indexOf(a.id)-seen.indexOf(b.id));
    pool=ord.slice(0,Math.max(1,Math.ceil(ord.length/3)));
    if(!pool.length)pool=L;
  }
  const r=pool[Math.floor(Math.random()*pool.length)];
  S.rl.cur=r.id;marcarVisto(r.id);
  return r;
}
const chip=(k,v,lab,on)=>'<button type="button" class="chip'+(on?" on":"")+'" data-rf="'+k+':'+esc(v)+'" aria-pressed="'+(!!on)+'">'+esc(lab)+'</button>';
const row=(t,c)=>'<p class="rl-fl">'+t+'</p><div class="chips">'+c+'</div>';
function listosHtml(){
  const lf=S.rl.lf,L=filtrados();
  if(L.length&&!(S.rl.cur&&L.some(r=>r.id===S.rl.cur)))otro();
  let h='<section class="panel rl-fil"><h3>Elige qué reel buscas</h3>';
  h+=row("Para quién",[["","Todos"],["clientas","Clientas"],["proyecto","El proyecto"]].map(x=>chip("lv",x[0],x[1],lf.via===x[0])).join(""));
  h+=row("Qué quieres conseguir",[["","Todos"],["crecer","Crecer"],["captar","Captar"]].map(x=>chip("lo",x[0],x[1],lf.obj===x[0])).join(""))
   +'<p class="mut rl-help">Crecer es que te descubra gente nueva. Captar es que te escriban con una palabra clave.</p>';
  if(lf.via!=="proyecto")h+=row("Gama",[["","Todas"]].concat(GAMAS.map(g=>[g,g])).map(x=>chip("lg",x[0],x[1],lf.gama===x[0])).join(""));
  h+=row("Cómo lo grabas",[["","Todos"],["sin_cara","Sin cara"],["media","Con soltura"],["con_cara","A cámara"]].map(x=>chip("ld",x[0],x[1],lf.dif===x[0])).join(""));
  h+='<p class="rl-count"><b>'+L.length+'</b> '+(L.length===1?'reel':'reels')+' con estos filtros</p>';
  h+='<div class="acts"><button class="btn big" data-act="rl-otro"'+(L.length?'':' disabled')+'>Otro reel</button></div></section>';
  if(!L.length)return h+'<section class="panel"><p>No hay reels con esta mezcla. Quita algún filtro y vuelve a probar.</p></section>';
  const r=LIBID[S.rl.cur],F=fichaLib(r);
  h+='<section class="panel" id="rl-top">'+fichaHtml(F,"l-"+r.id,{extra:'<button class="btn" data-act="rl-otro">Otro reel</button>'})+'</section>';
  h+='<details class="panel rl-list"><summary>Ver los '+L.length+' reels de esta lista</summary><ul class="rl-lst">'+L.map(x=>'<li><button class="rl-li" data-act="rl-ver" data-id="'+esc(x.id)+'"><b>'+esc(x.idea)+'</b><small>'+(x.objetivo==="captar"?"Captar":"Crecer")+' · '+(x.via==="proyecto"?"Proyecto":esc(gamaDe(x)))+' · '+esc(DIF[FM[x.formato].dificultad])+'</small></button></li>').join("")+'</ul></details>';
  return h;
}

// ===== crear mi reel =====
function crearHtml(){
  const c=S.rl.cf;
  if(!SIT[c.sit]||SIT[c.sit].via!==c.via)c.sit=sitSugerida(c.via).id;
  const s=SIT[c.sit],proy=c.via==="proyecto";
  const FL=DB.formatos.filter(f=>f.via.indexOf(c.via)>=0&&(f.objetivo==="ambos"||f.objetivo===c.obj));
  if(c.fmt!=="auto"&&!FL.some(f=>f.id===c.fmt))c.fmt="auto";
  const fsel='<select id="rc_fmt"><option value="auto"'+(c.fmt==="auto"?" selected":"")+'>Elígelo tú</option>'+DIF_ORD.map(d=>{const g=FL.filter(f=>f.dificultad===d);return g.length?'<optgroup label="'+esc(DIF[d])+'">'+g.map(f=>'<option value="'+esc(f.id)+'"'+(c.fmt===f.id?" selected":"")+'>'+esc(f.nombre)+' · '+esc(f.duracion)+'</option>').join("")+'</optgroup>':""}).join("")+'</select>';
  const PL=(s.productos||[]).map(id=>PROD[id]).filter(p=>p&&!PROD_EXCL.has(p.id));
  if(c.prod!=="auto"&&!PL.some(p=>p.id===c.prod))c.prod="auto";
  let h='<section class="panel"><h3>Monta tu reel</h3><p class="lead">Elige de qué quieres hablar y te preparo el reel entero: gancho, planos, texto en pantalla, cierre y caption.</p>';
  h+=row("Para quién",[["clientas","Para clientas"],["proyecto","Para el proyecto"]].map(x=>chip("cv",x[0],x[1],c.via===x[0])).join(""));
  h+=row("Qué quieres conseguir",[["crecer","Crecer"],["captar","Captar"]].map(x=>chip("co",x[0],x[1],c.obj===x[0])).join(""))
   +'<p class="mut rl-help">'+(c.obj==="captar"?"Termina con una palabra clave y un recurso que envías por privado.":"Termina invitando a seguirte. Es para que te descubra gente nueva.")+'</p>';
  h+='<div class="rl-form"><label>Situación de tu día a día'+sitSelect("rc_sit",c.sit,c.via)+'</label>';
  h+='<label>Formato'+fsel+'</label>';
  if(!proy&&PL.length)h+='<label>Producto (si quieres)'+sel("rc_prod",[["auto","Según la situación"]].concat(PL.map(p=>[p.id,p.nombre_corto])),c.prod)+'</label>';
  h+='</div><div class="acts"><button class="btn big" data-act="rc-gen">Montar mi reel</button></div></section>';
  if(S.rl.res)h+='<section class="panel" id="rl-top">'+fichaHtml(S.rl.res,"c-gen",{extra:'<button class="btn" data-act="rc-otra">Otra versión</button>'})+'</section>';
  else h+='<section class="panel empty"><h3>Empieza aquí</h3><p>Elige una situación, deja el formato en «Elígelo tú» y pulsa «Montar mi reel». Si estás empezando, te saldrán formatos sin cara.</p></section>';
  return h;
}
function viewReels(){
  const t=S.rl.tab;
  return '<section class="panel"><h2>Reels</h2><p class="lead">Un reel hace que te descubra gente nueva. Elige uno ya escrito o monta el tuyo.</p><div class="chips rl-tabs">'+chip("rt",  "listos","Reels listos",t==="listos")+chip("rt","crear","Crear mi reel",t==="crear")+'</div></section>'+(t==="crear"?crearHtml():listosHtml());
}
const segHtml=()=>'<div class="chips rl-seg" role="group" aria-label="Qué quieres crear"><button type="button" class="chip'+(S.cmode!=="reels"?" on":"")+'" data-cm="stories" aria-pressed="'+(S.cmode!=="reels")+'">Stories</button><button type="button" class="chip'+(S.cmode==="reels"?" on":"")+'" data-cm="reels" aria-pressed="'+(S.cmode==="reels")+'">Reels</button></div>';

// «Crear» muestra un selector Stories / Reels; las stories siguen siendo la pantalla de siempre
const baseCrear=VIEWS.crear;
VIEWS.crear=function(){return segHtml()+(S.cmode==="reels"?viewReels():baseCrear())};
VIEWS.reels=function(){S.cmode="reels";return segHtml()+viewReels()};

// ===== eventos =====
const arriba=()=>setTimeout(()=>{const o=$("#rl-top");if(o)o.scrollIntoView({behavior:"smooth",block:"start"})},40);
function setCf(k,v){
  const c=S.rl.cf;
  if(k==="cv"){c.via=v==="proyecto"?"proyecto":"clientas";c.sit=sitSugerida(c.via).id;c.prod="auto";c.fmt="auto"}
  else if(k==="co")c.obj=v==="captar"?"captar":"crecer";
  S.rl.res=null;
}
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  const to=d.tab||d.go;
  if(to&&to!=="crear"){S.cmode="stories";return}
  if(d.cm){S.cmode=d.cm==="reels"?"reels":"stories";render(true);return}
  if(d.rf){
    const i=d.rf.indexOf(":"),k=d.rf.slice(0,i),v=d.rf.slice(i+1),lf=S.rl.lf;
    if(k==="rt")S.rl.tab=v==="crear"?"crear":"listos";
    else if(k==="lv"){lf.via=v;if(v==="proyecto")lf.gama="";S.rl.cur=null}
    else if(k==="lo"){lf.obj=v;S.rl.cur=null}
    else if(k==="lg"){lf.gama=v;S.rl.cur=null}
    else if(k==="ld"){lf.dif=v;S.rl.cur=null}
    else setCf(k,v);
    render(true);return;
  }
  switch(d.act){
   case "pre":S.cmode="stories";break; // «Stories que venden» de Inicio: la lógica de nav.js continúa después
   case "reel":{const p=String(d.p||"").split("|");S.rl.tab="listos";S.rl.lf={via:p[0]==="proyecto"?"proyecto":"clientas",obj:p[1]==="captar"?"captar":"crecer",gama:"",dif:""};S.rl.cur=null;S.cmode="reels";go("crear");break}
   case "rl-otro":otro();render(true);arriba();break;
   case "rl-ver":{if(LIBID[d.id]){S.rl.cur=d.id;marcarVisto(d.id);render(true);arriba()}break}
   case "rc-gen":S.rl.cf.nonce=0;S.rl.res=genReel(S.rl.cf,histSets());histCommit(S.rl.res.used);render(true);arriba();break;
   case "rc-otra":S.rl.cf.nonce++;S.rl.res=genReel(S.rl.cf,histSets());histCommit(S.rl.res.used);render(true);arriba();break;
   case "rcopy":if(REG[d.k])copy(guionTxt(REG[d.k]));break;
   case "rcaption":if(REG[d.k])copy(REG[d.k].caption);break;
   case "rsave":if(REG[d.k])guardar(REG[d.k]);break;
   case "rrec":verRecurso(REG[d.k]);break;
  }
});
document.addEventListener("change",e=>{
  const id=e.target.id||"",c=S.rl.cf;
  if(id==="rc_sit"){c.sit=e.target.value;c.prod="auto";S.rl.res=null;render(true)}
  else if(id==="rc_fmt"){c.fmt=e.target.value;S.rl.res=null;render(true)}
  else if(id==="rc_prod"){c.prod=e.target.value;S.rl.res=null;render(true)}
});

return {genReel,fichaHtml,fichaLib,guionTxt,guardar,filtrados,LIB,FM,DIF,GAMAS,gamaDe,guiaDeReel,viewReels,REG,AVISO_NUTRI,verRecurso};
})();

// ===== Fam Studio · Semana en espiral =====
// Un mismo dolor (una situación) repetido durante la semana: reels por la mañana y stories de 11:00 a 14:00.
const SEM=(function(){
const DAYS=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
// [día, tipo, objetivo]. Sábado siempre descansa. Los reels se listan antes que las stories del mismo día.
const PLANES={
 inicio:{n:"Inicio",r:"1 reel + 3 secuencias de stories",p:[[0,"seq","valor"],[1,"seq","producto"],[2,"reel","crecer"],[6,"seq","lifestyle"]]},
 estandar:{n:"Estándar",r:"2 reels + 4 secuencias de stories",p:[[0,"seq","valor"],[1,"seq","producto"],[2,"reel","crecer"],[3,"seq","objecion"],[4,"reel","captar"],[6,"seq","lifestyle"]]},
 completo:{n:"Completo",r:"3 reels + 6 secuencias de stories",p:[[0,"reel","crecer"],[0,"seq","valor"],[1,"seq","producto"],[2,"seq","valor"],[3,"reel","crecer"],[3,"seq","objecion"],[4,"reel","captar"],[4,"seq","caso"],[6,"seq","lifestyle"]]}
};
// Stories del proyecto: cada tipo de secuencia de la semana tiene su objetivo propio en DB.OBJS (vía proyecto).
// «equipo» es el único con CTA; los demás cuentan, enseñan o conectan sin pedir nada.
const PMAP={valor:"equipo",producto:"p_dia",objecion:"p_dudas",lifestyle:"p_life",caso:"p_apoyo"};

function genSeqP(via,tipoObj,f,av){
  const obj=via==="proyecto"?(PMAP[tipoObj]||"equipo"):tipoObj;
  return genSeq(Object.assign({obj},f),av);
}

// w: {via,plan,sit,nonce,bumps}. Devuelve la semana completa (puro: sin tocar el estado de la pantalla).
function build(w){
  const pl=PLANES[w.plan]||PLANES.estandar;
  let s=SIT[w.sit];
  const via=(s&&s.via)||w.via||"clientas";
  if(!s||s.via!==via)s=sitSugerida(via);
  const kw=kwOptions(via==="proyecto"?"equipo":"valor",s.id)[0];
  const guia=GUIA_KW[via+"|"+kw]||guiaOf(s);
  const av={g:new Set(),c:new Set(),f:new Set()};
  const fmtUsed=new Set(),lvl=w.nivel||S.f.nivel,bumps=w.bumps||{};
  const days=DAYS.map(d=>({dia:d,items:[]}));
  const items={};
  pl.p.forEach((p,i)=>{
    const [di,tipo,obj]=p,key="w"+di+"-"+i,nonce=(w.nonce|0)*100+i*7+(bumps[key]|0);
    let it;
    if(tipo==="reel"){
      const F=RL.genReel({via,obj,sit:s.id,fmt:"auto",prod:"auto",kw:obj==="captar"?kw:"",nonce,nivel:lvl},av,{avoidFmt:fmtUsed});
      fmtUsed.add(F.fm.id);
      it={key,tipo,obj,hora:"Por la mañana",F,cta:obj==="captar",titulo:"Reel · "+(obj==="captar"?"captar":"crecer")};
      ["g","c","f"].forEach(c=>F.used[c].forEach(x=>av[c].add(x)));
    }else{
      const res=genSeqP(via,obj,{sit:s.id,prod:"auto",tono:S.f.tono,nivel:lvl,len:defLen(lvl),kw:kw,fecha:"",dias:7,nonce},av);
      it={key,tipo,obj,hora:"De 11:00 a 14:00",res,cta:!!res.obj.cta,titulo:"Stories · "+res.obj.corto};
      ["g","c","f"].forEach(c=>res.used[c].forEach(x=>av[c].add(x)));
    }
    it.dia=di;items[key]=it;days[di].items.push(it);
  });
  const sem={w:Object.assign({},w,{sit:s.id,via}),plan:pl,s,via,kw,guia,rec:recursoTxt(guia,s),days,items};
  sem.checks=check(sem);
  return sem;
}
function check(sem){
  const ch=[],add=(ok,t,h)=>ch.push({ok,t,h:h||""});
  const all=Object.values(sem.items),seqs=all.filter(i=>i.tipo==="seq"),reels=all.filter(i=>i.tipo==="reel");
  const ctaSt=seqs.filter(i=>i.cta).length;
  add(ctaSt<=2,"Máximo 2 CTA de stories en la semana ("+ctaSt+")","Más CTA cansan a quien te sigue.");
  add(sem.days.every(d=>d.items.filter(i=>i.cta).length<=1),"Nunca dos CTA el mismo día","Cuenta también el reel de captar.");
  add(sem.days[5].items.length===0,"El sábado se descansa");
  add(sem.days.every(d=>{let seq=false;return d.items.every(i=>{if(i.tipo==="reel"&&seq)return false;if(i.tipo==="seq")seq=true;return true})}),"Reels por la mañana y stories de 11:00 a 14:00");
  add(all.every(i=>(i.tipo==="reel"?i.F.sit.id:i.res.sit.id)===sem.s.id),"Todo gira en torno al mismo dolor","Es la espiral: repites un solo dolor de formas distintas.");
  add(seqs.length===sem.plan.p.filter(p=>p[1]==="seq").length&&reels.length===sem.plan.p.filter(p=>p[1]==="reel").length,"El plan "+sem.plan.n+" lleva "+reels.length+" "+(reels.length===1?"reel":"reels")+" y "+seqs.length+" secuencias");
  return ch;
}
function itemText(it){
  if(it.tipo==="reel")return "REEL (por la mañana)\n"+RL.guionTxt(it.F);
  return "STORIES (de 11:00 a 14:00)\n"+scriptText(it.res);
}
function textoSemana(sem){
  let o="SEMANA EN ESPIRAL · Plan "+sem.plan.n+" · "+(sem.via==="proyecto"?"Para el proyecto":"Para clientas")+"\nTema de la semana: "+sem.s.nombre+"\nEl dolor: "+sem.s.dolor+"\nLo que busca: "+sem.s.deseo+"\nPalabra clave de la semana: "+sem.kw+" · Recurso: "+sem.rec+"\n\n";
  sem.days.forEach(d=>{
    o+="=== "+d.dia.toUpperCase()+" ===\n";
    if(!d.items.length)o+=(d.dia==="Sábado"?"Descanso.":"Hoy no toca publicar.")+"\n";
    d.items.forEach(it=>{o+=itemText(it)+"\n\n"});
    o+="\n";
  });
  return o.trim();
}

// ===== pantalla =====
S.sw={via:"clientas",plan:"estandar",sit:"",nonce:0,bumps:{},cur:null};
const chip=(k,v,lab,on)=>'<button type="button" class="chip'+(on?" on":"")+'" data-swf="'+k+':'+esc(v)+'" aria-pressed="'+(!!on)+'">'+esc(lab)+'</button>';
function seqItemHtml(it){
  return seqHtml(it.res,{noHead:true})+'<div class="rl-acts"><button class="btn" data-act="sw-copy" data-k="'+esc(it.key)+'">Copiar guion</button><button class="btn ghost" data-act="sw-save" data-k="'+esc(it.key)+'">Guardar</button><button class="btn ghost" data-act="sw-otra" data-k="'+esc(it.key)+'">Otra versión</button></div>';
}
function itemHtml(it){
  const k=esc(it.key);
  let resumen,cuerpo;
  if(it.tipo==="reel"){
    resumen=esc(it.F.gancho);
    cuerpo=RL.fichaHtml(it.F,"sw-"+it.key,{nested:true,extra:'<button class="btn ghost" data-act="sw-otra" data-k="'+k+'">Otra versión</button>'});
  }else{
    resumen=esc(it.res.stories.length)+' stories · '+esc(it.res.hook);
    cuerpo=seqItemHtml(it);
  }
  return '<details class="sw-wit"><summary><span class="sw-wh"><b>'+esc(it.titulo)+'</b>'+(it.cta?'<span class="tag cta">CTA</span>':'')+'<small>'+esc(it.hora)+'</small></span><span class="sw-wr">'+resumen+'</span></summary><div class="sw-wbody">'+cuerpo+'</div></details>';
}
function viewSemana(){
  const w=S.sw;
  if(!SIT[w.sit]||SIT[w.sit].via!==w.via)w.sit=sitSugerida(w.via).id;
  const sem=build(w);w.cur=sem;
  let h='<section class="panel"><h2>Tu semana en espiral</h2><p class="lead">Durante la semana repites el mismo dolor de tu clienta de formas distintas: un reel que la encuentra, stories que la acompañan y una llamada a la acción. Así te recuerdan.</p>'
  +'<p class="rl-fl">Para quién</p><div class="chips">'+[["clientas","Clientas"],["proyecto","El proyecto"]].map(x=>chip("via",x[0],x[1],w.via===x[0])).join("")+'</div>'
  +'<div class="rl-form"><label>Plan'+sel("sw_plan",Object.keys(PLANES).map(k=>[k,PLANES[k].n+" · "+PLANES[k].r]),w.plan)+'</label><label>Tema de la semana'+sitSelect("sw_sit",w.sit,w.via)+'</label></div>'
  +'<div class="acts"><button class="btn big" data-act="sw-gen">Preparar la semana</button><button class="btn ghost" data-act="sw-copyall">Copiar toda la semana</button></div></section>';
  h+='<section class="panel"><h3>El dolor de esta semana</h3><dl class="rl-dl"><dt>Situación</dt><dd>'+esc(sem.s.nombre)+'</dd><dt>El dolor</dt><dd>'+esc(sem.s.dolor)+'</dd><dt>Lo que busca</dt><dd>'+esc(sem.s.deseo)+'</dd><dt>Palabra clave de la semana</dt><dd><span class="rl-kw">'+esc(sem.kw)+'</span></dd><dt>Recurso que envías</dt><dd>'+esc(sem.guia?sem.guia.titulo:sem.s.recurso)+'</dd></dl></section>';
  h+='<section class="panel"><h3>Calendario</h3><div class="cal">'+sem.days.map(d=>{
    const r=d.items.filter(i=>i.tipo==="reel").length,q=d.items.filter(i=>i.tipo==="seq").length,c=d.items.some(i=>i.cta);
    const t=d.items.length?[r?"Reel":"",q?"Stories":""].filter(Boolean).join(" + "):(d.dia==="Sábado"?"Descanso":"Libre");
    return '<div class="day'+(d.items.length?"":" off")+'"><b>'+d.dia.slice(0,3)+'</b><span>'+esc(t)+'</span>'+(c?'<em class="sw-dcta">CTA</em>':'')+'</div>';
  }).join("")+'</div>'
  +'<details class="chk"><summary>Reglas de la semana: <b>'+sem.checks.filter(c=>c.ok).length+' de '+sem.checks.length+'</b>'+(sem.checks.every(c=>c.ok)?' · todo en orden':' · hay algo que revisar')+'</summary><ul>'+sem.checks.map(c=>'<li class="'+(c.ok?"ok":"no")+'"><b>'+(c.ok?"Bien":"Revisar")+'</b> '+esc(c.t)+(c.ok||!c.h?'':'<small>'+esc(c.h)+'</small>')+'</li>').join("")+'</ul></details>'
  +'<p class="note">Los reels se publican por la mañana y las stories entre las 11:00 y las 14:00. El sábado se descansa. Pasa cada texto por el Revisor antes de publicar si lo has cambiado.</p></section>';
  let abierto=false;
  sem.days.forEach(d=>{
    if(!d.items.length)return;
    const nr=d.items.filter(i=>i.tipo==="reel").length,nq=d.items.length-nr;
    h+='<details class="panel dayp"'+(abierto?"":" open")+'><summary><b>'+esc(d.dia)+'</b> · '+[nr?(nr+(nr===1?" reel":" reels")):"",nq?(nq+(nq===1?" secuencia":" secuencias")):""].filter(Boolean).join(" + ")+'</summary>'+d.items.map(itemHtml).join("")+'</details>';
    abierto=true;
  });
  return h;
}
VIEWS.semana=viewSemana;

document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset,w=S.sw;
  if(d.swf){
    const i=d.swf.indexOf(":"),k=d.swf.slice(0,i),v=d.swf.slice(i+1);
    if(k==="via"&&(v==="clientas"||v==="proyecto")){w.via=v;w.sit=sitSugerida(v).id;w.bumps={}}
    render(true);return;
  }
  const it=d.k&&w.cur?w.cur.items[d.k]:null;
  switch(d.act){
   case "sw-gen":w.nonce+=1;w.bumps={};render(true);break;
   case "sw-otra":if(it){w.bumps[it.key]=(w.bumps[it.key]|0)+1;render(true)}break;
   case "sw-copy":if(it)copy(scriptText(it.res));break;
   case "sw-save":if(it)saveSeq(it.res);break;
   case "sw-copyall":if(w.cur)copy(textoSemana(w.cur));break;
  }
});
document.addEventListener("change",e=>{
  const id=e.target.id||"",w=S.sw;
  if(id==="sw_plan"){w.plan=e.target.value;w.bumps={};render(true)}
  else if(id==="sw_sit"){w.sit=e.target.value;w.bumps={};render(true)}
});

return {build,check,textoSemana,PLANES,DAYS,viewSemana,genSeqP};
})();

// ===== Fam Studio · Recursos: guías, tarjetas, dudas, mensajes del día a día y recursos del equipo =====
// Todo el contenido llega como datos (DB). Cada texto dinámico pasa por esc(). Los adjuntos de la
// administración se validan al guardar y otra vez al mostrarlos (cleanRec / ytUrl).

const RCS={sec:"guias",via:"clientas",q:"",bg:"crema",blob:null};
const RCA={edit:null,pImg:null,pPdf:null,delId:null,pub:"",busy:false}; // estado de la administración de recursos

// ----- utilidades comunes (las usan también negocio.js, perfil_ig.js y numeros.js) -----
const rcCopy=(txt,label)=>'<button class="mini" data-rc="'+esc(txt)+'">'+(label||"Copiar")+'</button>';
function telFmt(t){
  t=String(t||"").trim();let d=t.replace(/\D/g,"");
  if(d.length<6)return "";
  if(d.length===11&&d.slice(0,2)==="34")d=d.slice(2);
  return d.length===9?d.replace(/(\d{3})(\d{3})(\d{3})/,"$1 $2 $3"):t.slice(0,25);
}
const miTel=()=>telFmt((ls("ft_perfil")||{}).tel);
const subTel=txt=>{const t=miTel();return t?String(txt).replace(/6XX XXX XXX/g,t):String(txt)};
function miUsuario(){
  let h=String((ls("ft_perfil")||{}).user||"").replace(/[^A-Za-z0-9._@]/g,"").replace(/@/g,"").slice(0,30);
  return h?"@"+h:"";
}
function rcMsg(txt,n,label){
  return '<div class="rmsg"><div class="rmh"><span class="rver">'+esc(label||"Versión "+n)+'</span>'+rcCopy(txt)+'</div><p>'+esc(txt)+'</p></div>';
}
// enlace https de un dominio de la lista del equipo (LINK_HOSTS: YouTube, Telegram, WhatsApp, Canva, Drive...); devuelve la URL normalizada o null
function ytUrl(u){return linkOk(u)}
const isNutri=g=>(g.productos||[]).some(id=>PROD[id]&&PROD[id].gama==="nutri");
const REC_AVISO_NUTRI=()=>String((DB.gamas&&DB.gamas.nutri&&DB.gamas.nutri.aviso)||"");

// ----- recursos propios del equipo (administración): validación estricta -----
const REC_MAX_IMG=620000, REC_MAX_PDF=4200000;
function cleanRec(r){
  if(!r||typeof r!=="object"||Array.isArray(r))return null;
  const s=(x,n)=>typeof x==="string"?x.slice(0,n):"";
  const arr=(x,n,m)=>Array.isArray(x)?x.filter(y=>typeof y==="string"&&y.trim()).map(y=>y.slice(0,n)).slice(0,m):[];
  const id=s(r.id,40);if(!/^[A-Za-z0-9_-]{3,40}$/.test(id))return null;
  const titulo=s(r.titulo,120).trim();if(!titulo)return null;
  let adj=null;const a=r.adjunto;
  if(a&&typeof a==="object"){
    if(a.tipo==="img"&&typeof a.data==="string"&&a.data.length<=REC_MAX_IMG&&/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/.test(a.data))adj={tipo:"img",data:a.data};
    else if(a.tipo==="pdf"&&typeof a.data==="string"&&a.data.length<=REC_MAX_PDF&&/^[A-Za-z0-9+\/]+=*$/.test(a.data))adj={tipo:"pdf",data:a.data,nombre:s(a.nombre,80).replace(/[^\w .\-áéíóúñÁÉÍÓÚÑ]/g,"")};
    else if(a.tipo==="video"){const u=ytUrl(a.url);if(u)adj={tipo:"video",url:u}}
  }
  return {id,via:r.via==="proyecto"?"proyecto":"clientas",titulo,kw:arr(r.kw,30,8),para:s(r.para,300).trim(),texto:s(r.texto,6000),
    entrega:arr(r.entrega,1500,2),seguimiento:arr(r.seguimiento,1500,2),adjunto:adj,creado:s(r.creado,30)};
}
const teamRecs=()=>(Array.isArray(DB.recursos_equipo)?DB.recursos_equipo:[]).map(cleanRec).filter(Boolean);
const TIPO_TAG={texto:"Texto",img:"Imagen",pdf:"PDF",video:"Vídeo"};
const recTipo=r=>r.adjunto?r.adjunto.tipo:"texto";
const rcFind=id=>teamRecs().find(r=>r.id===id)||null;

// ----- LISTA -----
function viewRecursos(){
  const sec=RCS.sec,chip=(attr,val,cur,txt)=>'<button class="chip'+(cur===val?" on":"")+'" '+attr+'="'+val+'">'+txt+'</button>';
  let h='<section class="panel"><h2>Recursos para enviar</h2><p class="lead">Lo que mandas cuando alguien comenta tu palabra clave: la guía, los mensajes para cada momento y la tarjeta para compartir.</p>'
   +'<div class="chips">'+chip("data-rsec","guias",sec,"Guías")+chip("data-rsec","dudas",sec,"Respuestas a dudas")+chip("data-rsec","dia",sec,"Mensajes del día a día")+'</div>';
  if(sec!=="dia")h+='<div class="chips rvias">'+chip("data-rvia","clientas",RCS.via,"Clientas")+chip("data-rvia","proyecto",RCS.via,"Proyecto")+'</div>';
  h+='<label>Buscar<input id="rc_q" type="search" autocomplete="off" value="'+esc(RCS.q)+'" placeholder="'+(sec==="guias"?"Por título o palabra clave":"Escribe una palabra")+'"></label></section>';
  h+='<div id="rc_list">'+listaHtml()+'</div>';
  return h;
}
function listaHtml(){
  const q=norm(RCS.q.trim());
  if(RCS.sec==="dudas")return dudasHtml(q);
  if(RCS.sec==="dia")return diaHtml(q);
  const hit=(...t)=>!q||norm(t.join(" ")).includes(q);
  const eq=teamRecs().filter(r=>r.via===RCS.via&&hit(r.titulo,r.kw.join(" "),r.para));
  const gs=DB.guias.filter(g=>g.via===RCS.via&&hit(g.titulo,(g.kw||[]).join(" "),g.para));
  const item=(id,tag,titulo,kw,para,cls)=>'<button class="ritem'+(cls||"")+'" data-rg="'+esc(id)+'"><span class="rtag">'+esc(tag)+'</span><b>'+esc(titulo)+'</b>'+(kw?'<span class="rkw">Palabra clave: '+esc(kw)+'</span>':'')+(para?'<small>'+esc(para)+'</small>':'')+'</button>';
  let h='<section class="panel rlist"><p class="mut rcount">'+(eq.length+gs.length)+(eq.length+gs.length===1?" recurso":" recursos")+' para '+(RCS.via==="clientas"?"clientas":"el proyecto")+'</p>';
  h+=eq.map(r=>item(r.id,"Del equipo · "+TIPO_TAG[recTipo(r)],r.titulo,r.kw[0],r.para," eq")).join("");
  h+=gs.map(g=>item(g.id,"Guía + tarjeta",g.titulo,(g.kw||[])[0],g.para)).join("");
  if(!eq.length&&!gs.length)h+='<p class="mut">No hay nada con esa palabra. Prueba con otra.</p>';
  return h+'</section>';
}
function dudasHtml(q){
  const L=(DB.objeciones[RCS.via]||[]).filter(o=>!q||norm(o.o+" "+o.r.join(" ")).includes(q));
  let h='<section class="panel"><p class="mut rcount">'+L.length+' dudas habituales de '+(RCS.via==="clientas"?"clientas":"quien se plantea el proyecto")+'. Abre una y copia la respuesta que más se parezca a ti.</p>';
  h+=L.map(o=>'<details class="rdet"><summary>'+esc(o.o)+'</summary><div class="rdb">'+o.r.map((t,i)=>rcMsg(t,i+1,"Respuesta "+(i+1))).join("")+(o.story?'<p class="note">Si lo cuentas en una story: «'+esc(o.story)+'»</p>':'')+'</div></details>').join("");
  if(!L.length)h+='<p class="mut">No hay nada con esa palabra. Prueba con otra.</p>';
  return h+'</section>';
}
const CONV_TXT={reaccion_emoji:"Te responde con un emoji a una story",respuesta_encuesta:"Contesta a tu encuesta o caja de preguntas",le_gusto_producto:"Le ha gustado un producto",reactivar:"Reactivar a alguien que dejó de escribir",postventa:"Después de un pedido",pregunta_precio:"Te pregunta el precio",me_lo_pienso:"Te dice «me lo pienso»",curiosidad_proyecto:"Tiene curiosidad por el proyecto",tras_zoom:"Después de un Zoom",no_al_proyecto:"Te dice que no al proyecto",agradecer:"Dar las gracias",permiso_testimonio:"Pedir permiso para compartir su opinión"};
function diaHtml(q){
  const C=(DB.frases&&DB.frases.conversacion)||{};
  const keys=Object.keys(C).filter(k=>!q||norm((CONV_TXT[k]||k)+" "+C[k].join(" ")).includes(q));
  let h='<section class="panel"><p class="mut rcount">'+keys.length+' situaciones, cada una con 4 versiones. Cambia lo que no suene a ti.</p>';
  h+=keys.map(k=>'<details class="rdet"><summary>'+esc(CONV_TXT[k]||k.replace(/_/g," "))+'</summary><div class="rdb">'+C[k].map((t,i)=>rcMsg(t,i+1)).join("")+'</div></details>').join("");
  if(!keys.length)h+='<p class="mut">No hay nada con esa palabra. Prueba con otra.</p>';
  return h+'</section>';
}

// ----- FICHA -----
function rcStep(n,titulo,sub,body){
  return '<section class="panel rstep"><div class="rsh"><span class="num">'+n+'</span><div><h3>'+esc(titulo)+'</h3>'+(sub?'<p class="mut">'+sub+'</p>':'')+'</div></div>'+body+'</section>';
}
function rcCanShare(){
  try{if(!navigator.canShare||!navigator.share)return false;return navigator.canShare({files:[new File(["x"],"a.png",{type:"image/png"})]})}catch(e){return false}
}
function viewGuiaDet(){
  const g=GUIA[S.guia];
  if(!g){const r=rcFind(S.guia);return r?viewRecEquipo(r):'<section class="panel"><h2>No encuentro ese recurso</h2><p class="lead">Vuelve a la lista y elige otro.</p></section>'}
  const kit=g.kit||{},proy=g.via==="proyecto";
  let h='<section class="panel rhead"><span class="rtag">'+(proy?"Proyecto":"Clientas")+'</span><h2>'+esc(g.titulo)+'</h2><p class="lead">'+esc(g.para||"")+'</p><div class="kws">'+(g.kw||[]).map(k=>'<span class="chip on rkwc">'+esc(k)+'</span>').join("")+'</div><p class="note">Estas palabras activan este recurso. Elige la que hayas pedido en tu reel o story.</p></section>';
  if(isNutri(g))h+='<div class="aviso">'+esc(REC_AVISO_NUTRI())+'</div>';
  h+=rcStep(1,"Mensaje de entrega","Lo primero que envías por mensaje privado de Instagram, con la guía.",(kit.entrega||[]).map((t,i)=>rcMsg(t,i+1)).join(""));
  const lineas=String(g.texto||"").split("\n").map(l=>l.trim()?esc(l):"<br>").join("<br>").replace(/(<br>){3,}/g,"<br><br>");
  h+=rcStep(2,"El material","La guía para pegar en el chat y la tarjeta para compartir como imagen.",
    '<div class="rtext"><div class="rmh"><span class="rver">Texto de la guía</span>'+rcCopy(g.texto||"")+'</div><div class="rbody">'+lineas+'</div></div>'
    +'<h4 class="rsub">Tarjeta</h4><div class="rcard"><canvas id="rc_cv" class="rcv" width="1080" height="1350" role="img" aria-label="Vista previa de la tarjeta"></canvas></div>'
    +'<div class="chips"><button class="chip'+(RCS.bg==="crema"?" on":"")+'" data-rbg="crema">Fondo crema</button><button class="chip'+(RCS.bg==="marron"?" on":"")+'" data-rbg="marron">Fondo marrón</button></div>'
    +'<div class="acts">'+(rcCanShare()?'<button class="btn" data-rshare="1">Compartir imagen</button><button class="btn ghost" data-rdl="1">Descargar imagen</button>':'<button class="btn" data-rdl="1">Descargar imagen</button>')+'</div>'
    +(miUsuario()?'':'<p class="note">Si guardas tu usuario de Instagram en «Mi cuenta», saldrá al pie de la tarjeta.</p>'));
  h+=rcStep(3,"Seguimiento a los 2-3 días","Si no te ha contestado, un recordatorio sin presión.",(kit.seguimiento||[]).map((t,i)=>rcMsg(t,i+1)).join(""));
  const tel=miTel();
  h+=rcStep(4,"Pasar a WhatsApp","Cuando ya hay confianza, llévala a una conversación más cómoda.",
    '<p class="tipp">'+(tel?'He puesto tu teléfono ('+esc(tel)+') en los mensajes. Puedes cambiarlo en <button class="linkb" data-tab="perfil">Mi cuenta</button>.':'Cambia <b>6XX XXX XXX</b> por tu número antes de enviar. Si lo guardas en <button class="linkb" data-tab="perfil">Mi cuenta</button>, se pondrá solo.')+'</p>'
    +(kit.whatsapp||[]).map((t,i)=>rcMsg(subTel(t),i+1)).join(""));
  if(proy){
    h+=rcStep(5,"Siguiente paso","Propón un Zoom corto, de lunes a viernes entre las 9:00 y las 21:00.",(kit.siguiente||[]).map((t,i)=>rcMsg(t,i+1)).join("")
      +((kit.alternativa||[]).length?'<h4 class="rsub">Si no quiere Zoom</h4><p class="mut">Ofrécele el vídeo de YouTube de menos de 10 minutos.</p>'+kit.alternativa.map((t,i)=>rcMsg(t,i+1)).join(""):''));
  }else{
    h+=rcStep(5,"Siguiente paso","Una recomendación concreta, sin presión.",(kit.siguiente||[]).map((t,i)=>rcMsg(t,i+1)).join(""));
  }
  setTimeout(()=>pintaTarjeta(g),0);
  return h;
}
function viewRecEquipo(r){
  const t=recTipo(r),a=r.adjunto;
  let n=0,h='<section class="panel rhead"><span class="rtag">Del equipo · '+TIPO_TAG[t]+'</span><h2>'+esc(r.titulo)+'</h2>'+(r.para?'<p class="lead">'+esc(r.para)+'</p>':'')+'<div class="kws">'+r.kw.map(k=>'<span class="chip on rkwc">'+esc(k)+'</span>').join("")+'</div></section>';
  if(r.entrega.length)h+=rcStep(++n,"Mensaje de entrega","",r.entrega.map((x,i)=>rcMsg(x,i+1)).join(""));
  let mat="";
  if(r.texto)mat+='<div class="rtext"><div class="rmh"><span class="rver">Texto</span>'+rcCopy(r.texto)+'</div><div class="rbody">'+r.texto.split("\n").map(l=>l.trim()?esc(l):"").join("<br>")+'</div></div>';
  if(a&&a.tipo==="img")mat+='<img class="rimg" alt="'+esc(r.titulo)+'" src="'+esc(a.data)+'"><p class="note">Mantén pulsada la imagen para guardarla o compartirla.</p>';
  if(a&&a.tipo==="pdf")mat+='<div class="acts"><button class="btn" data-rpdf="'+esc(r.id)+'">Abrir el PDF</button></div>';
  if(a&&a.tipo==="video")mat+='<div class="acts"><a class="btn" href="'+esc(a.url)+'" target="_blank" rel="noopener noreferrer">Abrir el enlace</a></div><p class="note">Se abre en otra pestaña.</p>';
  if(mat)h+=rcStep(++n,"El material","",mat);
  if(r.seguimiento.length)h+=rcStep(++n,"Seguimiento a los 2-3 días","",r.seguimiento.map((x,i)=>rcMsg(x,i+1)).join(""));
  return h;
}
function abrirPdf(r){
  const a=r&&r.adjunto;if(!a||a.tipo!=="pdf")return;
  try{
    const bin=atob(a.data),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);
    if(String.fromCharCode(u[0],u[1],u[2],u[3],u[4])!=="%PDF-"){toast("Ese archivo no es un PDF");return}
    const url=URL.createObjectURL(new Blob([u],{type:"application/pdf"}));
    const l=document.createElement("a");l.href=url;l.target="_blank";l.rel="noopener noreferrer";l.download=(a.nombre||r.titulo||"recurso").replace(/\.pdf$/i,"")+".pdf";
    document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);
  }catch(e){toast("No se pudo abrir el PDF")}
}

// ----- TARJETA (canvas 1080 x 1350) -----
const CARD_W=1080,CARD_H=1350,CARD_MX=96;
const CARD_COL={crema:{bg:"#EBDDC5",tx:"#614a3e",sub:"#7a665b",band:"#614a3e",bandtx:"#EBDDC5",acc:"#614a3e"},marron:{bg:"#614a3e",tx:"#EBDDC5",sub:"#d9c7a8",band:"#EBDDC5",bandtx:"#614a3e",acc:"#EBDDC5"}};
const FONT_T="AntonFT, Impact, sans-serif",FONT_S='-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const logoCache={};
function logoTinted(color){
  if(logoCache[color])return logoCache[color];
  const im=document.querySelector("header.top img");
  if(!im||!im.naturalWidth)return null;
  const c=document.createElement("canvas");c.width=im.naturalWidth;c.height=im.naturalHeight;
  const x=c.getContext("2d");x.drawImage(im,0,0);x.globalCompositeOperation="source-in";x.fillStyle=color;x.fillRect(0,0,c.width,c.height);
  return (logoCache[color]=c);
}
function rcWrap(ctx,text,maxW){
  const lines=[];let cur="";
  String(text).split(/\s+/).filter(Boolean).forEach(w=>{
    let parts=[w];
    if(ctx.measureText(w).width>maxW){parts=[];let c="";for(const ch of w){if(c&&ctx.measureText(c+ch).width>maxW){parts.push(c);c=ch}else c+=ch}if(c)parts.push(c)}
    parts.forEach((p,i)=>{
      if(i>0){lines.push(cur);cur=p;return}
      const t=cur?cur+" "+p:p;
      if(cur&&ctx.measureText(t).width>maxW){lines.push(cur);cur=p}else cur=t;
    });
  });
  if(cur)lines.push(cur);
  return lines;
}
// Calcula la maqueta con un factor de reducción k y devuelve alturas y líneas
function cardLayout(ctx,t,k){
  const W=CARD_W-2*CARD_MX,out={k};
  // título: el tamaño más grande que cabe en 3 líneas (si no, en las que haga falta)
  let ts=Math.round(124*k),lines;
  for(;;){ctx.font=ts+"px "+FONT_T;lines=rcWrap(ctx,String(t.titulo||"").toUpperCase(),W);if((lines.length<=3&&lines.every(l=>ctx.measureText(l).width<=W))||ts<=40)break;ts-=4}
  out.ts=ts;out.tl=lines;out.th=lines.length*ts*1.1;
  const ss=Math.round(40*k);ctx.font="italic "+ss+"px "+FONT_S;
  out.ss=ss;out.sl=rcWrap(ctx,t.sub||"",W).slice(0,3);out.sh=out.sl.length*ss*1.35;
  const ps=Math.round(43*k),ind=48;ctx.font=ps+"px "+FONT_S;
  out.ps=ps;out.pl=(t.puntos||[]).map(p=>rcWrap(ctx,p,W-ind));
  out.pgap=Math.round(26*k);
  out.ph=out.pl.reduce((a,l)=>a+l.length*ps*1.3,0)+Math.max(0,out.pl.length-1)*out.pgap;
  const cs=Math.round(46*k);ctx.font=cs+"px "+FONT_T;
  out.cs=cs;out.cl=t.cierre?rcWrap(ctx,String(t.cierre).toUpperCase(),W-2*40).slice(0,3):[];
  out.ch=out.cl.length?out.cl.length*cs*1.2+2*30:0;
  return out;
}
const CARD_TOP=250,CARD_BOTTOM=1160;
function cardFit(ctx,t){
  let k=1,L;
  for(;k>=.5;k-=.04){
    L=cardLayout(ctx,t,k);
    const total=L.th+30+L.sh+34+L.ph+(L.ch?40+L.ch:0);
    if(total<=CARD_BOTTOM-CARD_TOP){L.total=total;return L}
  }
  L.total=L.th+30+L.sh+34+L.ph+(L.ch?40+L.ch:0);return L;
}
async function dibujaTarjeta(cv,t,bg){
  try{if(document.fonts){await document.fonts.load("100px AntonFT");await document.fonts.ready}}catch(e){}
  const C=CARD_COL[bg]||CARD_COL.crema,ctx=cv.getContext("2d");
  cv.width=CARD_W;cv.height=CARD_H;
  ctx.fillStyle=C.bg;ctx.fillRect(0,0,CARD_W,CARD_H);
  ctx.textBaseline="alphabetic";
  const L=cardFit(ctx,t);
  // logotipo
  const lg=logoTinted(C.tx);
  if(lg){const hh=96,ww=Math.round(hh*lg.width/lg.height);ctx.drawImage(lg,CARD_MX,72,ww,hh)}
  let y=CARD_TOP;
  // título
  ctx.fillStyle=C.tx;ctx.font=L.ts+"px "+FONT_T;
  L.tl.forEach((l,i)=>{ctx.fillText(l,CARD_MX,y+L.ts*.92+i*L.ts*1.1)});
  y+=L.th+30;
  // subtítulo
  ctx.fillStyle=C.sub;ctx.font="italic "+L.ss+"px "+FONT_S;
  L.sl.forEach((l,i)=>{ctx.fillText(l,CARD_MX,y+L.ss*.95+i*L.ss*1.35)});
  y+=L.sh+10;
  ctx.fillStyle=C.acc;ctx.fillRect(CARD_MX,y,120,6);y+=24;
  // puntos
  ctx.font=L.ps+"px "+FONT_S;
  L.pl.forEach(lines=>{
    ctx.fillStyle=C.acc;const b=Math.round(L.ps*.3);ctx.fillRect(CARD_MX,y+L.ps*.55-b/2,b,b);
    ctx.fillStyle=C.tx;
    lines.forEach((l,i)=>{ctx.fillText(l,CARD_MX+48,y+L.ps*.95+i*L.ps*1.3)});
    y+=lines.length*L.ps*1.3+L.pgap;
  });
  L.ptsEnd=y-L.pgap;L.bandTop=L.cl.length?CARD_BOTTOM-L.ch:CARD_BOTTOM;
  // cierre en banda
  if(L.cl.length){
    const by=CARD_BOTTOM-L.ch;
    ctx.fillStyle=C.band;ctx.fillRect(CARD_MX,by,CARD_W-2*CARD_MX,L.ch);
    ctx.fillStyle=C.bandtx;ctx.font=L.cs+"px "+FONT_T;ctx.textAlign="center";
    L.cl.forEach((l,i)=>{ctx.fillText(l,CARD_W/2,by+30+L.cs*.95+i*L.cs*1.2)});
    ctx.textAlign="left";
  }
  // pie: usuario de Instagram y marca
  ctx.fillStyle=C.tx;ctx.fillRect(CARD_MX,1214,CARD_W-2*CARD_MX,2);
  const u=miUsuario();
  ctx.font="34px "+FONT_T;const mw=ctx.measureText("FAM TEAM").width;
  ctx.fillText("FAM TEAM",CARD_W-CARD_MX-mw,1282);
  if(u){let fs=36;const maxW=CARD_W-2*CARD_MX-mw-40;ctx.font="600 "+fs+"px "+FONT_S;while(fs>20&&ctx.measureText(u).width>maxW){fs-=2;ctx.font="600 "+fs+"px "+FONT_S}ctx.fillText(u,CARD_MX,1282)}
  L.usuario=u;
  return L;
}
async function pintaTarjeta(g){
  const cv=document.getElementById("rc_cv");if(!cv)return;
  RCS.blob=null;
  try{
    await dibujaTarjeta(cv,g.tarjeta||{},RCS.bg);
    cv.toBlob(b=>{if(document.getElementById("rc_cv")===cv)RCS.blob=b},"image/png");
  }catch(e){console.error("tarjeta",e)}
}
function nombreArchivo(){return "tarjeta-"+String(S.guia||"fam").replace(/[^\w-]/g,"").slice(0,40)+".png"}
async function tarjetaBlob(){
  if(RCS.blob)return RCS.blob;
  const cv=document.getElementById("rc_cv");
  return cv?await new Promise(ok=>cv.toBlob(ok,"image/png")):null;
}
async function compartirTarjeta(){
  const b=await tarjetaBlob();if(!b){toast("La tarjeta no está lista");return}
  const f=new File([b],nombreArchivo(),{type:"image/png"});
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:(GUIA[S.guia]||{}).titulo||"Fam Team"});return}}
  catch(e){if(e&&e.name==="AbortError")return}
  descargarTarjeta();
}
async function descargarTarjeta(){
  const b=await tarjetaBlob();if(!b){toast("La tarjeta no está lista");return}
  const url=URL.createObjectURL(b),a=document.createElement("a");a.href=url;a.download=nombreArchivo();document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
  toast("Imagen descargada");
}

// ----- ADMINISTRACIÓN: recursos del equipo -----
function pesoPaqueteMB(){try{return JSON.stringify(DB).length*4/3/1048576}catch(e){return 0}}
function adminRecursosHtml(){
  const L=teamRecs(),mb=pesoPaqueteMB();
  let h='<section class="panel"><h3>Recursos del equipo</h3><p>Crea guías, imágenes, PDF o vídeos propios. Aparecen en Recursos junto a las demás. Los cambios no llegan al equipo hasta que los publiques abajo.</p>';
  h+='<p class="'+(mb>8?"aviso":"note")+'">Peso estimado del paquete: <b>'+mb.toFixed(1).replace(".",",")+' MB</b>.'+(mb>8?' Pasa de 8 MB: la app tardará en abrir en móviles con poca cobertura. Quita algún PDF o imagen pesados.':'')+'</p>';
  h+=L.length?'<ul class="ralist">'+L.map(r=>'<li><div><b>'+esc(r.titulo)+'</b><small>'+(r.via==="clientas"?"Clientas":"Proyecto")+' · '+TIPO_TAG[recTipo(r)]+'</small></div><div class="acts">'
     +(RCA.delId===r.id?'<button class="mini" data-ra="delok" data-id="'+esc(r.id)+'">Sí, borrar</button><button class="mini" data-ra="delno">No</button>':'<button class="mini" data-ra="edit" data-id="'+esc(r.id)+'">Editar</button><button class="mini" data-ra="del" data-id="'+esc(r.id)+'">Borrar</button>')+'</div></li>').join("")+'</ul>':'<p class="mut">Todavía no hay recursos propios.</p>';
  if(RCA.edit===null)h+='<div class="acts"><button class="btn" data-ra="new">Nuevo recurso</button></div>';
  else h+=adminFormHtml();
  h+='</section>';
  h+='<section class="panel"><h3>Publicar los recursos</h3><p>Prepara los archivos con el código del equipo actual y súbelos a GitHub como siempre. El equipo no tendrá que escribir el código otra vez.</p><label>Código actual del equipo<input id="ra_cur" autocomplete="off" autocapitalize="none" spellcheck="false"></label><div class="acts"><button class="btn" data-ra="pub">Preparar archivos</button></div><p class="err" id="ra_perr" role="status"></p><div id="ra_pout">'+RCA.pub+'</div></section>';
  return h;
}
function adminFormHtml(){
  const nuevo=RCA.edit==="new",r=nuevo?null:rcFind(RCA.edit);
  if(!nuevo&&!r){RCA.edit=null;return ""}
  const v=r||{via:"clientas",titulo:"",kw:[],para:"",texto:"",entrega:[],seguimiento:[],adjunto:null};
  const a=v.adjunto,ta=(id,lab,val,rows,max)=>'<label>'+lab+'<textarea id="'+id+'" rows="'+rows+'" maxlength="'+max+'">'+esc(val||"")+'</textarea></label>';
  const rd=(val,txt,on)=>'<label class="rad"><input type="radio" name="ra_adj" value="'+val+'"'+(on?" checked":"")+'><span>'+txt+'</span></label>';
  const cur=a?"keep":"none";
  return '<div class="raform" id="ra_form"><h4>'+(nuevo?"Nuevo recurso":"Editar recurso")+'</h4>'
   +'<label>Título<input id="ra_t" maxlength="120" value="'+esc(v.titulo)+'"></label>'
   +'<label>Para quién es<select id="ra_via"><option value="clientas"'+(v.via==="clientas"?" selected":"")+'>Clientas</option><option value="proyecto"'+(v.via==="proyecto"?" selected":"")+'>Proyecto</option></select></label>'
   +'<label>Palabras clave<input id="ra_kw" maxlength="200" value="'+esc(v.kw.join(", "))+'" placeholder="NOCHE, RUTINA"><small>Separadas por comas, máximo 8.</small></label>'
   +'<label>Para quién (una frase)<input id="ra_para" maxlength="300" value="'+esc(v.para)+'"></label>'
   +ta("ra_txt","Texto del recurso",v.texto,7,6000)
   +ta("ra_e1","Mensaje de entrega, versión 1",v.entrega[0],3,1500)+ta("ra_e2","Mensaje de entrega, versión 2 (opcional)",v.entrega[1],3,1500)
   +ta("ra_s1","Seguimiento, versión 1",v.seguimiento[0],3,1500)+ta("ra_s2","Seguimiento, versión 2 (opcional)",v.seguimiento[1],3,1500)
   +'<fieldset><legend>Adjunto</legend><div class="radios ra_radios">'
   +(a?rd("keep","Mantener el actual ("+TIPO_TAG[a.tipo]+")",cur==="keep"):"")+rd("none","Sin adjunto",cur==="none")+rd("img","Imagen",false)+rd("pdf","PDF",false)+rd("video","Enlace (YouTube, Canva, Drive...)",false)+'</div>'
   +'<div class="raadj" id="ra_a_img" hidden><label>Imagen (se reduce y se limpia sola, máx. 400 KB)<input id="ra_img" type="file" accept="image/*"></label></div>'
   +'<div class="raadj" id="ra_a_pdf" hidden><label>PDF (máximo 3 MB)<input id="ra_pdf" type="file" accept="application/pdf"></label></div>'
   +'<div class="raadj" id="ra_a_video" hidden><label>Enlace del vídeo o material<input id="ra_yt" type="url" inputmode="url" autocomplete="off" placeholder="https://youtu.be/..." value="'+esc(a&&a.tipo==="video"?a.url:"")+'"><small>Solo enlaces https de sitios del equipo: YouTube, Telegram, WhatsApp, Canva, Google Drive, Farmasi...</small></label></div>'
   +'<p class="note" id="ra_finfo"></p></fieldset>'
   +'<div class="acts"><button class="btn" data-ra="save">Guardar recurso</button><button class="btn ghost" data-ra="cancel">Cancelar</button></div><p class="err" id="ra_err" role="status"></p></div>';
}
const rcB64=u8=>{let s="";for(let i=0;i<u8.length;i+=32768)s+=String.fromCharCode.apply(null,u8.subarray(i,i+32768));return btoa(s)};
const rcReadUrl=blob=>new Promise((ok,ko)=>{const f=new FileReader();f.onload=()=>ok(f.result);f.onerror=()=>ko(f.error);f.readAsDataURL(blob)});
function raErr(m){const e=document.getElementById("ra_err");if(e)e.textContent=m||""}
function raInfo(m){const e=document.getElementById("ra_finfo");if(e)e.textContent=m||""}
async function raFile(inp){
  const f=inp.files&&inp.files[0];if(!f)return;
  raErr("");
  if(inp.id==="ra_img"){
    RCA.pImg=null;raInfo("Preparando la imagen…");
    try{const blob=await reencodeImage(f),url=await rcReadUrl(blob);
      if(!/^data:image\/jpeg;base64,/.test(url))throw new Error("formato");
      RCA.pImg=url;raInfo("Imagen lista ("+Math.round(blob.size/1024)+" KB).")}
    catch(e){inp.value="";raInfo("");raErr(e&&e.message==="La imagen es demasiado pesada."?e.message:"No he podido leer esa imagen. Prueba con otra (JPG o PNG).")}
  }else if(inp.id==="ra_pdf"){
    RCA.pPdf=null;
    if(!pdfOk(f)){inp.value="";raInfo("");raErr("Tiene que ser un PDF de 3 MB como máximo.");return}
    try{const u=new Uint8Array(await f.arrayBuffer());
      if(String.fromCharCode(u[0],u[1],u[2],u[3],u[4])!=="%PDF-"){inp.value="";raErr("Ese archivo no es un PDF válido.");return}
      RCA.pPdf={data:rcB64(u),nombre:f.name.replace(/[^\w .\-áéíóúñÁÉÍÓÚÑ]/g,"").slice(0,80)};raInfo("PDF listo ("+Math.round(f.size/1024)+" KB).")}
    catch(e){inp.value="";raErr("No he podido leer ese PDF.")}
  }
}
function raTipoVisible(){
  const v=(document.querySelector('input[name="ra_adj"]:checked')||{}).value;
  ["img","pdf","video"].forEach(t=>{const e=document.getElementById("ra_a_"+t);if(e)e.hidden=v!==t});
}
function raGuardar(){
  const g=id=>(document.getElementById(id)||{value:""}).value;
  const titulo=g("ra_t").trim();
  if(!titulo){raErr("Pon un título.");return}
  const kw=g("ra_kw").split(",").map(x=>x.trim().toUpperCase()).filter(Boolean).slice(0,8);
  const entrega=[g("ra_e1"),g("ra_e2")].map(x=>x.trim()).filter(Boolean),seg=[g("ra_s1"),g("ra_s2")].map(x=>x.trim()).filter(Boolean);
  const texto=g("ra_txt").trim();
  const modo=(document.querySelector('input[name="ra_adj"]:checked')||{}).value||"none";
  const prev=RCA.edit==="new"?null:rcFind(RCA.edit);
  let adj=null;
  if(modo==="keep")adj=prev?prev.adjunto:null;
  else if(modo==="img"){if(!RCA.pImg){raErr("Elige una imagen.");return}adj={tipo:"img",data:RCA.pImg}}
  else if(modo==="pdf"){if(!RCA.pPdf){raErr("Elige un PDF.");return}adj={tipo:"pdf",data:RCA.pPdf.data,nombre:RCA.pPdf.nombre}}
  else if(modo==="video"){const u=ytUrl(g("ra_yt"));if(!u){raErr("Ese enlace no vale. Tiene que ser https y de un sitio del equipo (YouTube, Telegram, WhatsApp, Canva, Google Drive, Farmasi...).");return}adj={tipo:"video",url:u}}
  if(!texto&&!adj&&!entrega.length&&!seg.length){raErr("Añade un texto, un mensaje o un adjunto.");return}
  const rec=cleanRec({id:prev?prev.id:"eq-"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),via:g("ra_via"),titulo,kw,para:g("ra_para").trim(),texto,entrega,seguimiento:seg,adjunto:adj,creado:prev?prev.creado:new Date().toISOString().slice(0,10)});
  if(!rec){raErr("No se ha podido guardar. Revisa los campos.");return}
  const L=teamRecs();const i=L.findIndex(x=>x.id===rec.id);
  if(i>=0)L[i]=rec;else L.push(rec);
  DB.recursos_equipo=L;
  RCA.edit=null;RCA.pImg=null;RCA.pPdf=null;RCA.pub="";
  toast("Recurso guardado");render(true);
}
async function raPublicar(){
  const cur=document.getElementById("ra_cur").value,er=document.getElementById("ra_perr");
  if(!FS.norm(cur)){er.textContent="Escribe el código del equipo actual.";return}
  er.textContent="Preparando…";
  try{
    const content=Object.assign({},DB,{recursos_equipo:teamRecs()});
    await FS.rekey({current:cur,content});
    RCA.pub='<div class="okbox"><b>Archivos preparados y descargados.</b><ol><li>Busca en tu carpeta de descargas <code>data.enc</code> y <code>version.json</code>.</li><li>En GitHub, dentro de tu repositorio, pulsa <b>Add file → Upload files</b>, arrastra los dos y pulsa <b>Commit changes</b>.</li><li>En unos minutos el equipo verá los recursos al abrir la app. No tendrán que escribir el código otra vez.</li></ol><p class="note">Si la descarga no empezó, toca los botones:</p><div class="acts"><button class="mini" data-act="dl" data-f="data">Descargar data.enc</button><button class="mini" data-act="dl" data-f="ver">Descargar version.json</button></div></div>';
    er.textContent="";document.getElementById("ra_pout").innerHTML=RCA.pub;
  }catch(e){er.textContent="No se pudo preparar: "+(e&&e.message||"error")}
}

// ----- eventos -----
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.rc!==undefined){copy(d.rc);return}
  if(d.rsec){RCS.sec=d.rsec;RCS.q="";render(true);return}
  if(d.rvia){RCS.via=d.rvia;render(true);return}
  if(d.rg){S.guia=d.rg;go("guia_det");return}
  if(d.rbg){RCS.bg=d.rbg;render(true);return}
  if(d.rshare){compartirTarjeta();return}
  if(d.rdl){descargarTarjeta();return}
  if(d.rpdf){abrirPdf(rcFind(d.rpdf));return}
  switch(d.ra){
   case "new":RCA.edit="new";RCA.pImg=RCA.pPdf=null;render(true);break;
   case "edit":RCA.edit=d.id;RCA.pImg=RCA.pPdf=null;RCA.delId=null;render(true);break;
   case "cancel":RCA.edit=null;render(true);break;
   case "del":RCA.delId=d.id;render(true);break;
   case "delno":RCA.delId=null;render(true);break;
   case "delok":DB.recursos_equipo=teamRecs().filter(r=>r.id!==d.id);RCA.delId=null;RCA.pub="";toast("Recurso borrado");render(true);break;
   case "save":raGuardar();break;
   case "pub":raPublicar();break;
  }
});
document.addEventListener("change",e=>{
  const el=e.target;
  if(el.name==="ra_adj")raTipoVisible();
  else if(el.id==="ra_img"||el.id==="ra_pdf")raFile(el);
});
document.addEventListener("input",e=>{
  if(e.target.id==="rc_q"){RCS.q=e.target.value;const l=document.getElementById("rc_list");if(l)l.innerHTML=listaHtml()}
});

// ===== Fam Studio · Mi negocio (solo para el equipo) =====
const NEG_IMG=/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/;
function viewNegocio(){
  const N=DB.negocio||{secciones:[],glosario:[]};
  let h='<section class="panel"><span class="rbadge">Solo para el equipo · No compartir en redes</span><h2>Mi negocio</h2><p class="lead">'+esc(N.intro||"")+'</p><p class="note">Abre cada apartado para leer el resumen. Toca una imagen para verla grande: con dos dedos puedes ampliarla.</p></section>';
  h+=(N.secciones||[]).map((s,i)=>'<details class="rdet rneg"><summary>'+esc(s.titulo)+'</summary><div class="rdb">'
    +'<ul class="rres">'+(s.resumen||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>'
    +((s.img||[]).length?'<div class="rimgs">'+s.img.filter(u=>typeof u==="string"&&NEG_IMG.test(u)).map((u,j)=>'<button class="rthumb" data-nimg="'+i+'-'+j+'" aria-label="Ver imagen '+(j+1)+' de '+esc(s.titulo)+'"><img alt="'+esc(s.titulo)+', imagen '+(j+1)+'" src="'+esc(u)+'"></button>').join("")+'</div>':'')
    +'</div></details>').join("");
  h+='<section class="panel"><h3>Glosario</h3><label>Buscar un término<input id="rn_q" type="search" autocomplete="off" placeholder="Escribe una palabra"></label><dl class="gl" id="rn_gl">'+glosarioHtml("")+'</dl></section>';
  return h;
}
function glosarioHtml(q){
  q=norm(q.trim());
  const L=((DB.negocio&&DB.negocio.glosario)||[]).filter(x=>!q||norm(x.t+" "+x.d).includes(q));
  return L.length?L.map(x=>'<dt>'+esc(x.t)+'</dt><dd>'+esc(x.d)+'</dd>').join(""):'<p class="mut">No encuentro ese término.</p>';
}
// visor sencillo: la imagen a pantalla completa con scroll; el pellizco lo hace el navegador
function abreVisor(src,alt){
  if(!NEG_IMG.test(src))return;
  cierraVisor();
  const v=document.createElement("div");v.id="rviewer";v.className="rviewer";v.setAttribute("role","dialog");v.setAttribute("aria-label","Imagen ampliada");
  const b=document.createElement("button");b.className="btn rvclose";b.textContent="Cerrar";b.type="button";
  const sc=document.createElement("div");sc.className="rvscroll";
  const im=document.createElement("img");im.alt=alt||"";im.src=src;
  sc.appendChild(im);v.appendChild(b);v.appendChild(sc);document.body.appendChild(v);
  document.body.classList.add("rvopen");b.focus();
}
function cierraVisor(){const v=document.getElementById("rviewer");if(v)v.remove();document.body.classList.remove("rvopen")}
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;
  if(t.classList.contains("rvclose")){cierraVisor();return}
  if(t.dataset.nimg){
    const [i,j]=t.dataset.nimg.split("-").map(Number),s=DB.negocio.secciones[i];
    const u=s&&s.img.filter(x=>typeof x==="string"&&NEG_IMG.test(x))[j];
    if(u)abreVisor(u,s.titulo);
  }
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")cierraVisor()});
document.addEventListener("input",e=>{if(e.target.id==="rn_q"){const g=document.getElementById("rn_gl");if(g)g.innerHTML=glosarioHtml(e.target.value)}});

// ===== Fam Studio · Mi perfil de Instagram =====
const PIG={perfil:"",kw:""};
const IG_MAX=150; // límite de caracteres de la bio de Instagram
function pigBios(){
  const B=(DB.perfil&&DB.perfil.bios)||[];
  const perfiles=B.map(b=>b.perfil).filter((p,i,a)=>a.indexOf(p)===i);
  if(!PIG.perfil||perfiles.indexOf(PIG.perfil)<0)PIG.perfil=perfiles[0]||"";
  return {perfiles,list:B.filter(b=>b.perfil===PIG.perfil)};
}
// sustituye la palabra clave del banco por la que escribe la persona
function pigBioTxt(b){
  const k=PIG.kw.trim().toUpperCase().replace(/[^A-ZÁÉÍÓÚÑ0-9]/g,"").slice(0,20);
  const lines=(b.lineas||[]).map(l=>k&&b.kw?l.split(b.kw).join(k):l);
  return lines.join("\n");
}
function pigBiosHtml(){
  const {list}=pigBios();
  return list.map((b,i)=>{
    const t=pigBioTxt(b),n=t.length,over=n>IG_MAX;
    return '<div class="rmsg"><div class="rmh"><span class="rver">Bio '+(i+1)+'</span>'+rcCopy(t)+'</div><p>'+esc(t)+'</p><small class="rcnt'+(over?" over":"")+'">'+n+' de '+IG_MAX+' caracteres'+(over?'. Se pasa: acórtala un poco.':'')+'</small></div>';
  }).join("");
}
function viewPerfilIG(){
  const P=DB.perfil||{},{perfiles}=pigBios();
  const det=(t,body,open)=>'<details class="rdet"'+(open?" open":"")+'><summary>'+t+'</summary><div class="rdb">'+body+'</div></details>';
  let h='<section class="panel"><h2>Mi perfil de Instagram</h2><p class="lead">Tu perfil es lo primero que ve quien llega por un reel. Tiene que contestar en cinco segundos a tres preguntas: quién eres, por qué fiarse y qué hacer ahora.</p>'
   +'<h4 class="rsub">El método de la bio en 3 líneas</h4><ol class="rsteps3"><li><b>Quién eres.</b> A quién ayudas y cómo, sin currículum.</li><li><b>Prueba.</b> Una experiencia real tuya, sin cifras ni promesas.</li><li><b>Invitación.</b> «Escríbeme PALABRA y te paso…» con la palabra clave de tu recurso.</li></ol></section>';
  h+='<section class="panel"><h3>Tus bios</h3><label>Tu perfil'+sel("pig_p",perfiles.map(p=>[p,cap(p)]),PIG.perfil)+'</label><label>Tu palabra clave (opcional)<input id="pig_kw" maxlength="20" autocomplete="off" autocapitalize="characters" value="'+esc(PIG.kw)+'" placeholder="Por ejemplo, NOCHE"><small>Cambia la palabra clave de todas las bios por la tuya. Usa la de un recurso que tengas.</small></label><div id="pig_bios">'+pigBiosHtml()+'</div></section>';
  h+=det("Nombres de perfil ("+(P.nombres||[]).length+")",'<p class="mut">El nombre es lo que busca Instagram: pon tu nombre y lo que haces.</p>'+(P.nombres||[]).map((n,i)=>rcMsg(n,i+1,"Nombre "+(i+1))).join(""));
  h+=det("Foto de perfil",'<ul class="rres">'+(P.foto||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>');
  h+=det("Destacadas ("+(P.destacadas||[]).length+")",(P.destacadas||[]).map(d=>'<div class="rmsg"><b>'+esc(d.nombre)+'</b><p>'+esc(d.que_meter)+'</p><small class="rcnt">Portada: '+esc(d.portada)+'</small></div>').join(""));
  h+=det("Publicaciones fijadas ("+(P.fijados||[]).length+")",(P.fijados||[]).map(d=>'<div class="rmsg"><b>'+esc(d.que)+'</b><p>'+esc(d.por_que)+'</p></div>').join(""));
  h+=det("Errores comunes ("+(P.errores||[]).length+")",(P.errores||[]).map(d=>'<div class="rmsg"><p class="rerr">'+esc(d.error)+'</p><p><b>Mejor así:</b> '+esc(d.arreglo)+'</p></div>').join(""));
  h+=det("3 perfiles completos de ejemplo",(P.ejemplos||[]).map(x=>'<div class="rmsg rejem"><div class="rmh"><b>'+esc(x.nombre)+'</b>'+rcCopy((x.bio||[]).join("\n"),"Copiar bio")+'</div><p class="rver">Bio</p><p>'+(x.bio||[]).map(esc).join("<br>")+'</p><p class="rver">Destacadas</p><p>'+(x.destacadas||[]).map(esc).join(" · ")+'</p><p class="rver">Fijadas</p><ul class="rres">'+(x.fijados||[]).map(f=>'<li>'+esc(f)+'</li>').join("")+'</ul></div>').join(""));
  return h;
}
document.addEventListener("change",e=>{if(e.target.id==="pig_p"){PIG.perfil=e.target.value;const b=document.getElementById("pig_bios");if(b)b.innerHTML=pigBiosHtml()}});
document.addEventListener("input",e=>{if(e.target.id==="pig_kw"){PIG.kw=e.target.value;const b=document.getElementById("pig_bios");if(b)b.innerHTML=pigBiosHtml()}});

// ===== Fam Studio · Mis números: diagnóstico de tus stories según el curso =====
const NUM_KEY="fs_numeros";
const numPct=(a,b)=>b>0?a/b*100:null;
const numFmt=x=>x==null?"–":x.toFixed(1).replace(".",",")+" %";
const numInt=v=>{const n=parseInt(String(v==null?"":v).replace(/\D/g,""),10);return isFinite(n)?n:null};
function numHist(){const h=ls(NUM_KEY);return Array.isArray(h)?h.filter(x=>x&&typeof x==="object"):[]}
function numLee(){
  const g=id=>numInt((document.getElementById(id)||{}).value);
  return {s:g("rn_s"),v:g("rn_v"),r:g("rn_r"),w:g("rn_w")};
}
// devuelve [{k:"ok"|"mejora"|"aviso", t, d, tips[]}]
function numDiag(x){
  const out=[];
  if(x.s==null||x.s<=0||x.v==null){return {falta:"Rellena tus seguidores y las visualizaciones medias de tus stories para ver el diagnóstico.",items:out}}
  const a=numPct(x.v,x.s);
  if(a<5)out.push({k:"mejora",t:"Alcance: "+numFmt(a),d:"Lo normal es que tus stories las vea entre un 5 y un 10 % de tus seguidores. Estás por debajo.",tips:["Publica stories con más frecuencia: cada día que subes, tus seguidoras se acostumbran a verte.","Cuida la primera story: que sea visual y con un gancho claro, para que no pasen de largo.","Fíjate en cuáles se ven más y repite ese tipo de tema."]});
  else if(a<=10)out.push({k:"ok",t:"Alcance: "+numFmt(a),d:"Está dentro de lo normal (5 a 10 % de tus seguidores). Buen punto de partida."});
  else out.push({k:"ok",t:"Alcance: "+numFmt(a),d:"Por encima de lo normal (5 a 10 %). Tus seguidoras te ven. Aprovéchalo con una buena llamada a la acción."});
  if(x.r==null){return {items:out,falta:"Añade las respuestas a tu última llamada a la acción para completar el diagnóstico."}}
  if(x.v>0&&x.r>x.v){return {items:out,falta:"Las respuestas no pueden ser más que las visualizaciones. Revisa los números."}}
  const t=numPct(x.r,x.v);
  if(x.v<=0)return {items:out,falta:"Con cero visualizaciones no puedo calcular las respuestas."};
  if(t<4.5)out.push({k:"mejora",t:"Respuestas a tu CTA: "+numFmt(t),d:"Lo habitual es que conteste un 5 % (entre un 4,5 y un 5 %) de quienes ven tu story. Falla la parte alta: la gente ve, pero no se anima a escribirte.",tips:["Pon más llamadas a la acción: una al final de cada secuencia, con palabra clave.","Cuida la estructura: dolor, solución, llamada a la acción y recurso. Nunca venta directa.","Toca mejor el dolor: cuenta la situación concreta de tu clienta antes de ofrecerle el recurso.","Que el recurso sea concreto: dile qué recibe exactamente si te escribe la palabra."]});
  else out.push({k:"ok",t:"Respuestas a tu CTA: "+numFmt(t),d:t>5?"Por encima del 5 % del curso. Muy buena llamada a la acción.":"Dentro de lo esperado (alrededor del 5 %). Tu llamada a la acción funciona."});
  if(x.w==null)return {items:out,falta:"Añade cuántas conversaciones pasaron a WhatsApp para ver la última parte."};
  if(x.w>x.r)return {items:out,falta:"No pueden pasar a WhatsApp más conversaciones que respuestas. Revisa los números."};
  if(x.r===0){out.push({k:"aviso",t:"Paso a WhatsApp",d:"Todavía no tienes respuestas, así que no hay conversaciones que pasar a WhatsApp. Empieza por la parte de arriba."});return {items:out}}
  const w=numPct(x.w,x.r);
  if(w<50)out.push({k:"mejora",t:"Paso a WhatsApp: "+numFmt(w),d:"Te responden, pero menos de la mitad pasa a WhatsApp. El fallo está en la conversación, no en la story.",tips:["Mejora el mensaje de entrega: que sea cercano, con una pregunta sencilla al final.","No dejes pasar el seguimiento a los 2-3 días: muchas personas solo necesitan un recordatorio.","Propón el paso a WhatsApp con una razón concreta (te mando un audio, una foto) y tu número."],link:true});
  else out.push({k:"ok",t:"Paso a WhatsApp: "+numFmt(w),d:"Más de la mitad de las que te responden pasan a WhatsApp. Tus mensajes funcionan."});
  return {items:out};
}
function numDiagHtml(x){
  const r=numDiag(x);
  let h=r.items.map(i=>'<div class="rdiag '+i.k+'"><b>'+esc(i.t)+'</b><p>'+esc(i.d)+'</p>'+(i.tips?'<ul class="rres">'+i.tips.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul>':'')+(i.link?'<p><button class="linkb" data-tab="recursos">Ver los mensajes de Recursos</button></p>':'')+'</div>').join("");
  if(r.falta)h+='<p class="note">'+esc(r.falta)+'</p>';
  return h||'<p class="note">'+esc(r.falta||"")+'</p>';
}
function numHistHtml(){
  const H=numHist();
  if(!H.length)return '<p class="mut">Todavía no has guardado ninguna medición. Rellena los números y pulsa «Guardar en mi historial».</p>';
  const rows=H.slice().reverse(); // más reciente primero
  const dlt=(a,b)=>a==null||b==null?"":' <small>('+((a-b)>=0?"+":"−")+Math.abs(a-b).toFixed(1).replace(".",",")+')</small>';
  return '<div class="rtabw"><table class="rtab"><thead><tr><th>Fecha</th><th>Segui&shy;dores</th><th>Vistas</th><th>Respu.</th><th>WA</th><th></th></tr></thead><tbody>'
   +rows.map((x,i)=>{const ant=rows[i+1],pa=numPct(x.v,x.s),pr=numPct(x.r,x.v),pa0=ant?numPct(ant.v,ant.s):null,pr0=ant?numPct(ant.r,ant.v):null;
    return '<tr><td>'+esc(x.f||"")+'</td><td>'+esc(x.s)+'</td><td>'+esc(x.v)+'<br>'+numFmt(pa)+dlt(pa,pa0)+'</td><td>'+esc(x.r)+'<br>'+numFmt(pr)+dlt(pr,pr0)+'</td><td>'+esc(x.w)+'</td><td><button class="mini" data-nq="'+(H.length-1-i)+'">Quitar</button></td></tr>'}).join("")
   +'</tbody></table></div><p class="note">Entre paréntesis, lo que ha subido o bajado frente a la medición anterior.</p>';
}
function viewNumeros(){
  const f=(id,lab,help)=>'<label>'+lab+'<input id="'+id+'" type="text" inputmode="numeric" pattern="[0-9]*" autocomplete="off" placeholder="0"><small>'+help+'</small></label>';
  return '<section class="panel"><h2>Mis números</h2><p class="lead">Mide cada semana cómo van tus stories y te digo qué mejorar primero. Los números se guardan solo en este dispositivo.</p>'
   +'<div class="grid2">'+f("rn_s","Seguidores","Los que tienes hoy en Instagram.")+f("rn_v","Visualizaciones medias de tus stories","La media de tus últimas stories.")+f("rn_r","Respuestas a tu última CTA","Personas que te escribieron la palabra clave.")+f("rn_w","Conversaciones que pasaron a WhatsApp","De esas personas, cuántas pasaron a WhatsApp.")+'</div>'
   +'<div class="acts"><button class="btn" data-nsave="1">Guardar en mi historial</button></div><p class="err" id="rn_err" role="status"></p></section>'
   +'<section class="panel"><h3>Diagnóstico</h3><div id="rn_out">'+numDiagHtml({s:null,v:null,r:null,w:null})+'</div></section>'
   +'<section class="panel"><h3>Mi historial</h3><div id="rn_hist">'+numHistHtml()+'</div></section>';
}
document.addEventListener("input",e=>{
  if(/^rn_[svrw]$/.test(e.target.id)){const o=document.getElementById("rn_out");if(o)o.innerHTML=numDiagHtml(numLee())}
});
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;
  if(t.dataset.nsave){
    const x=numLee(),er=document.getElementById("rn_err");
    if(x.s==null||x.v==null||x.r==null||x.w==null||x.s<=0){er.textContent="Rellena los cuatro números (los seguidores no pueden ser cero).";return}
    if(x.r>x.v||x.w>x.r){er.textContent="Revisa los números: las respuestas no pueden superar las visualizaciones ni las conversaciones a las respuestas.";return}
    er.textContent="";
    const d=new Date(),p=n=>String(n).padStart(2,"0"),f=p(d.getDate())+"/"+p(d.getMonth()+1)+"/"+d.getFullYear();
    const H=numHist().filter(h=>h.f!==f);H.push({f,s:x.s,v:x.v,r:x.r,w:x.w});
    ls(NUM_KEY,H.slice(-60));
    document.getElementById("rn_hist").innerHTML=numHistHtml();toast("Guardado en tu historial");
  }else if(t.dataset.nq!==undefined){
    const H=numHist();H.splice(+t.dataset.nq,1);ls(NUM_KEY,H);document.getElementById("rn_hist").innerHTML=numHistHtml();
  }
});

// ===== Fam Studio · sección TikTok =====
// Todo el contenido viene de DB.tiktok (JSON descifrado). Aquí solo hay lógica y plantillas de pantalla.
// Reglas: todo texto dinámico pasa por esc() antes de innerHTML; lo que escribe la usuaria solo entra por textContent/value.
const TT_REC_KEY="ft_tt_recent",TT_REC_MAX=30;
const redGet=()=>ls("ft_red")==="tiktok"?"tiktok":"instagram";
const redSet=v=>ls("ft_red",v==="tiktok"?"tiktok":"instagram");
const ttHigh=t=>scanMeta(String(t)).some(h=>h.l==="alto");
const ttClean=t=>String(t).trim().length>0&&!/[{}]|undefined|\bnull\b|NaN/.test(String(t));
const ttCapIni=s=>String(s).replace(/^([¿¡«"“\s]*)(\p{L})/u,(m,a,b)=>a+b.toUpperCase());
const ttVia=v=>v==="clientas"?"clientas":"proyecto";
const ttFmt=id=>(DB.tiktok.formatos||[]).filter(f=>f.id===id)[0]||null;
const ttIsNutri=s=>!!s&&((s.gamas||[]).indexOf("nutri")>=0||s.grupo==="Nutrición y bienestar");
const TT_NOTA_PROD="Vídeo de producto: al publicar, activa «Revelar contenido comercial».";

S.tt={ivia:"proyecto",idea:{proyecto:null,clientas:null},n:{proyecto:0,clientas:0},
  st:{n:3,via:"proyecto",sit:{},nonce:0,cur:null},
  pl:{f:"todas",open:null,vals:{},q:{},kw:{}},
  bl:{via:"todas",fmt:"todos",q:"",lim:20}};

// ---------- anti-repetición: últimos 30 textos generados ----------
const ttRecent=()=>{const h=ls(TT_REC_KEY);return Array.isArray(h)?h.filter(x=>typeof x==="string"):[]};
function ttRemember(txt){ls(TT_REC_KEY,ttRecent().concat([txt]).filter((x,i,a)=>a.lastIndexOf(x)===i).slice(-TT_REC_MAX))}

// ---------- barra INSTAGRAM | TIKTOK ----------
function redSeg(){
  const r=redGet();
  return '<div class="tt-plat" role="group" aria-label="Red social">'+[["instagram","Instagram"],["tiktok","TikTok"]].map(x=>'<button type="button" class="'+(r===x[0]?"on":"")+'" data-red="'+x[0]+'" aria-pressed="'+(r===x[0])+'">'+x[1]+'</button>').join("")+'</div>';
}

// ---------- INICIO en modo TikTok ----------
function viewHomeTT(nombre){
  const B=(t,sub,tab,main)=>'<button class="hb'+(main?" main":"")+'" data-tab="'+tab+'"><b>'+t+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</button>';
  return '<section class="hero2"><p class="hi">'+(nombre?"Hola, "+esc(nombre):"Hola")+'</p><h2>¿Qué subes hoy?</h2></section>'
  +'<section class="panel hblk tt-menu">'
  +B("Idea del día","Texto, qué grabar y la pregunta final","tt_idea",true)
  +B("Stories para TikTok","2 o 3 stories que piden la palabra clave","tt_stories")
  +B("Plantillas que funcionan","Rellenas los huecos y listo","tt_plantillas")
  +B("Mi historia en 60 segundos","El vídeo que fijas arriba del perfil","tt_historia")
  +B("Responder comentarios","«Información», «¿es fiable?» y más","tt_respuestas")
  +B("Mi bio de TikTok","3 líneas que llevan a tu WhatsApp","tt_bio")
  +B("Mi semana en TikTok","2 vídeos al día: mañana y tarde","tt_semana")
  +B("Ideas escritas","Un banco de "+DB.tiktok.ideas.length+" ideas para elegir","tt_banco")
  +B("Lo que no se dice","Qué evitar en Meta y TikTok, y cómo decirlo mejor","normas")
  +'</section>';
}

// ---------- GENERADOR DE IDEAS ----------
function ttToma(fmtId,via){
  const L=DB.tiktok.tomas||[],f=L.filter(t=>(t.formatos||[]).indexOf(fmtId)>=0);
  const ok=f.filter(t=>t.via==="ambos"||t.via===via);
  const c=ok.length?ok:(f.length?f:L);
  return c.length?pick(c):null;
}
function ttCopyTxt(x){return x.pantalla+"\n\n"+x.pregunta+"\n\n"+x.descripcion}
// Devuelve la idea para (via, nonce). Determinista por semilla; evita las 30 últimas y nunca devuelve un texto de riesgo alto.
function ttGenIdea(via,nonce){
  const T=DB.tiktok,hist=new Set(ttRecent());
  const plants=T.plantillas.filter(p=>p.via===via||p.via==="ambos");
  const hand=T.ideas.filter(i=>i.via===via);
  const sits=sitsVia(via);
  for(let att=0;att<80;att++){
    R=mulberry(hash(["ttidea",via,nonce,att].join("|")));
    const first=nonce===0&&att===0;
    let x=null;
    if(!first&&hand.length&&R()<1/3){
      const i=pick(hand),f=ttFmt(i.formato);
      x={via,kind:"idea",id:i.id,pantalla:i.pantalla,grabar:i.grabar,descripcion:i.descripcion,pregunta:i.cta,kw:i.kw,fmt:f,aviso:i.aviso||""};
    }else{
      const s=first?sitSugerida(via):pick(sits),p=pick(plants);
      if(!s||!p)continue;
      const kw=(s.palabras_clave||[])[0]||"";
      const fill=t=>String(t).replace(/\{deseo\}/g,lc(noDot(s.deseo))).replace(/\{dolor\}/g,s.dolor).replace(/\{KW\}/g,kw);
      const f=ttFmt(p.formato),tm=ttToma(p.formato,via);
      if(!tm||!kw)continue;
      x={via,kind:"gen",id:p.id+"|"+s.id,pantalla:ttCapIni(fill(pick(p.gen))),grabar:tm.texto,descripcion:s.nombre,pregunta:fill(pick(p.preguntas)),kw,fmt:f,
        aviso:via==="clientas"&&ttIsNutri(s)?String((DB.gamas.nutri||{}).aviso||""):""};
    }
    const all=[x.pantalla,x.grabar,x.descripcion,x.pregunta].join("\n");
    if(!ttClean(all)||ttHigh(all))continue;       // nunca se enseña un texto de riesgo alto
    if(att<50&&hist.has(x.pantalla))continue;     // y se evitan los vistos hace poco
    return x;
  }
  return null;
}
function ttNewIdea(via){
  const x=ttGenIdea(via,S.tt.n[via]);
  S.tt.idea[via]=x;if(x)ttRemember(x.pantalla);
}
function viewTTIdea(){
  const t=S.tt,via=ttVia(t.ivia);
  if(!t.idea[via])ttNewIdea(via);
  const x=t.idea[via];
  let h='<section class="panel"><h2>Idea del día</h2><div class="tt-seg" role="group" aria-label="Para quién">'+[["proyecto","Proyecto"],["clientas","Clientas"]].map(v=>'<button type="button" class="'+(via===v[0]?"on":"")+'" data-tt="ivia" data-v="'+v[0]+'" aria-pressed="'+(via===v[0])+'">'+v[1]+'</button>').join("")+'</div>';
  if(!x)return h+'<p class="mut">No he encontrado una idea que cumpla las normas. Pulsa «Otra versión».</p><div class="tt-btns"><button class="btn" data-tt="iotra">Otra versión</button></div></section>';
  const all=[x.pantalla,x.grabar,x.descripcion,x.pregunta].join("\n");
  const f=x.fmt;
  h+='<div class="tt-clip" aria-label="Así se vería el texto sobre el vídeo"><span class="tt-dur">'+(f?esc(f.nombre+" · "+f.duracion):"Vídeo")+'</span><p>'+esc(x.pantalla)+'</p><div class="tt-side"><i></i><i></i><i></i></div></div>'
  +'<div class="tt-card"><div class="tt-lbl">Qué grabar</div><p class="tt-val">'+esc(x.grabar)+'</p>'
  +'<div class="tt-lbl">Descripción</div><p class="tt-val">'+esc(x.descripcion)+'</p>'
  +'<div class="tt-lbl">Pregunta final</div><p class="tt-val">'+esc(x.pregunta)+'</p>'
  +'<div class="tt-lbl">Palabra clave</div><span class="tt-kw">'+esc(x.kw)+'</span>';
  if(via==="clientas")h+='<div class="tt-note">'+esc(TT_NOTA_PROD)+'</div>';
  if(x.aviso)h+='<div class="aviso tt-aviso"><b>Aviso:</b> '+esc(x.aviso)+'</div>';
  if(!ttHigh(all))h+='<span class="tt-ok">Revisado: cumple las normas de TikTok y Meta</span>';
  h+='</div>';
  if(f)h+='<details class="tt-det"><summary>Cómo se hace este formato</summary><p>'+esc(f.como)+'</p><p><b>Consejo:</b> '+esc(f.consejo)+'</p></details>';
  h+='<div class="tt-btns"><button class="btn ghost" data-tt="icopy">Copiar texto</button><button class="btn" data-tt="iotra">Otra versión</button></div>'
  +'<p class="note"><button class="linkb" data-tab="normas">Ver lo que no se dice</button></p></section>';
  return h;
}

// ---------- STORIES PARA TIKTOK ----------
function ttGenStories(via,sitId,n,nonce){
  const T=DB.tiktok,s=SIT[sitId],info=s&&T.stories.sit[s.id];
  if(!s||!info)return null;
  const h=ls(HIST_KEY)||{};
  const kw=(s.palabras_clave||[])[0]||"",rec=recursoTxt(guiaOf(s),s);
  for(let att=0;att<40;att++){
    R=mulberry(hash(["ttst",via,s.id,n,nonce,att].join("|")));
    const av={g:new Set(h.g||[]),c:new Set(h.c||[]),f:new Set()},used={g:[],c:[],f:[]};
    let gl=s.ganchos;
    if(n===2){const ok=gl.filter(g=>(g.t+" "+info.historia).length<=230);if(!ok.length)continue;gl=ok}
    const gancho=pickAv(gl,av,x=>x.t,"g",used).t;
    const cierre=String(pickAv(T.stories.cierres,av,null,"c",used)).replace(/\{beneficio\}/g,info.beneficio).replace(/\{KW\}/g,kw).replace(/\{recurso\}/g,rec);
    const cards=n===3?[["1 · Gancho",gancho],["2 · Tu historia",info.historia],["3 · Llamada final",cierre]]
                     :[["1 · Gancho e historia",gancho+" "+info.historia],["2 · Llamada final",cierre]];
    const all=cards.map(c=>c[1]).join("\n");
    if(!ttClean(all)||ttHigh(all))continue;
    return {via,sit:s,n,kw,cards,used,aviso:via==="clientas"&&ttIsNutri(s)?String((DB.gamas.nutri||{}).aviso||""):""};
  }
  return null;
}
function ttStoriesCur(){
  const st=S.tt.st,via=ttVia(st.via);
  if(!st.sit[via]||!SIT[st.sit[via]]||SIT[st.sit[via]].via!==via)st.sit[via]=sitSugerida(via).id;
  if(st.cur===null||st.cur===undefined){
    st.cur=ttGenStories(via,st.sit[via],st.n===2?2:3,st.nonce)||false;
    if(st.cur)histCommit(st.cur.used);
  }
  return st.cur;
}
const ttStoriesTxt=r=>r.cards.map((c,i)=>"Story "+(i+1)+" · "+c[0].replace(/^\d+ · /,"")+"\n"+c[1]).join("\n\n");
function viewTTStories(){
  const st=S.tt.st,via=ttVia(st.via),r=ttStoriesCur(),sid=st.sit[via];
  let h='<section class="panel"><h2>Stories para TikTok</h2>'
  +'<div class="tt-seg" role="group" aria-label="Número de stories">'+[2,3].map(k=>'<button type="button" class="'+(st.n===k?"on":"")+'" data-tt="stn" data-v="'+k+'" aria-pressed="'+(st.n===k)+'">'+k+' stories</button>').join("")+'</div>'
  +'<div class="tt-seg" role="group" aria-label="Para quién">'+[["proyecto","Proyecto"],["clientas","Clientas"]].map(v=>'<button type="button" class="'+(via===v[0]?"on":"")+'" data-tt="stvia" data-v="'+v[0]+'" aria-pressed="'+(via===v[0])+'">'+v[1]+'</button>').join("")+'</div>'
  +'<label>Situación de tu día a día'+sitSelect("tt_sit",sid,via)+'</label>'
  +'<p class="tt-sitdolor"><b>'+esc(SIT[sid].nombre)+'</b>: '+esc(SIT[sid].dolor)+'</p>';
  if(!r)return h+'<p class="mut">No he podido montar la secuencia con esta situación. Prueba con otra o pulsa «Otra secuencia».</p><div class="tt-btns"><button class="btn" data-tt="stotra">Otra secuencia</button></div></section>';
  h+='<div class="tt-stories" role="region" aria-label="Tus stories: desliza hacia los lados para verlas" tabindex="0">'
  +r.cards.map(c=>'<div class="tt-st'+(r.n===2?" w2":"")+'"><span class="tt-stn">'+esc(c[0])+'</span><p>'+esc(c[1])+'</p></div>').join("")+'</div>';
  if(r.aviso)h+='<div class="aviso tt-aviso"><b>Aviso:</b> '+esc(r.aviso)+'</div>';
  h+='<div class="tt-note"><b>La llamada final siempre lleva tres cosas:</b> qué consigue, qué le mandas y la palabra clave. '+esc(DB.tiktok.stories.nota_tt)+'</div>'
  +'<p class="tt-small">'+esc(DB.tiktok.stories.nota_ig)+'</p>'
  +'<div class="tt-btns"><button class="btn ghost" data-tt="stcopy">Copiar</button><button class="btn" data-tt="stotra">Otra secuencia</button></div>'
  +'<p class="note"><button class="linkb" data-tab="normas">Ver lo que no se dice</button></p></section>';
  return h;
}

// ---------- PLANTILLAS ----------
const ttPlan=id=>DB.tiktok.plantillas.filter(p=>p.id===id)[0]||null;
function ttPlKw(p){
  const k=S.tt.pl.kw;
  if(k[p.id]==null)k[p.id]=((sitSugerida(p.via==="clientas"?"clientas":"proyecto").palabras_clave||[])[0])||"PALABRA";
  return k[p.id];
}
function ttPlText(p){
  const v=S.tt.pl.vals[p.id]||{};
  const main=p.molde.replace(/\{(\w+)\}/g,(m,k)=>{
    const hq=p.huecos.filter(x=>x.k===k)[0];
    const x=String(Object.prototype.hasOwnProperty.call(v,k)?v[k]:(hq?hq.ejemplo:"")).trim();
    return x||"["+(hq?lc(hq.label):k)+"]";
  });
  const qi=S.tt.pl.q[p.id]||0;
  const cierre=String(p.preguntas[qi%p.preguntas.length]).replace(/\{KW\}/g,ttPlKw(p)||"PALABRA");
  return {main,cierre,full:main+"\n\n"+cierre};
}
const ttViaTxt=v=>v==="proyecto"?"Proyecto":v==="clientas"?"Clientas":"Proyecto y clientas";
function viewTTPlantillas(){
  const pl=S.tt.pl,p=pl.open&&ttPlan(pl.open);
  if(p)return viewTTPlantilla(p);
  const L=DB.tiktok.plantillas.filter(x=>pl.f==="todas"||x.via===pl.f||x.via==="ambos");
  let h='<section class="panel"><h2>Plantillas que funcionan</h2><p class="lead">Frases que se repiten en las cuentas que mejor funcionan. Eliges una, rellenas los huecos y ya tienes el texto para ponerlo encima del vídeo.</p>'
  +'<div class="tt-seg" role="group" aria-label="Filtrar">'+[["todas","Todas"],["proyecto","Proyecto"],["clientas","Clientas"]].map(v=>'<button type="button" class="'+(pl.f===v[0]?"on":"")+'" data-tt="plf" data-v="'+v[0]+'" aria-pressed="'+(pl.f===v[0])+'">'+v[1]+'</button>').join("")+'</div>'
  +'<p class="mut">'+L.length+' plantillas</p>';
  h+=L.map(x=>{const f=ttFmt(x.formato);return '<button class="ml tt-pli" data-tt="plopen" data-id="'+esc(x.id)+'"><b>'+esc(x.nombre)+'</b><small>'+ttViaTxt(x.via)+(f?" · "+esc(f.nombre):"")+'</small></button>'}).join("");
  return h+'</section>';
}
function viewTTPlantilla(p){
  const pl=S.tt.pl;
  if(!pl.vals[p.id]){const o={};p.huecos.forEach(x=>{o[x.k]=x.ejemplo});pl.vals[p.id]=o}
  const r=ttPlText(p),f=ttFmt(p.formato),qi=(pl.q[p.id]||0)%p.preguntas.length;
  let h='<section class="panel"><button class="linkb" data-tt="plback">‹ Todas las plantillas</button><h3 class="tt-ph">'+esc(p.nombre)+'</h3>'
  +'<p class="mut">'+ttViaTxt(p.via)+(f?' · '+esc(f.nombre)+' · '+esc(f.duracion):'')+'</p>'
  +'<div class="tt-pf">'+p.huecos.map(x=>'<label>'+esc(x.label)+'<input type="text" data-ttk="'+esc(x.k)+'" value="'+esc(Object.prototype.hasOwnProperty.call(pl.vals[p.id],x.k)?pl.vals[p.id][x.k]:x.ejemplo)+'" maxlength="140" autocomplete="off"></label>').join("")
  +'<label>Palabra clave<input type="text" data-ttk="__kw" value="'+esc(ttPlKw(p))+'" maxlength="20" autocomplete="off" autocapitalize="characters"><small>Una sola palabra en mayúsculas. Nunca pongas un enlace.</small></label></div>'
  +'<div class="tt-lbl">Texto para el vídeo</div><div class="tt-res" id="tt_out"></div>'
  +'<div class="tt-lbl">Pregunta final</div><div class="tt-chips">'+p.preguntas.map((q,i)=>'<button type="button" class="chip'+(i===qi?" on":"")+'" data-tt="plq" data-i="'+i+'" aria-pressed="'+(i===qi)+'">Opción '+(i+1)+'</button>').join("")+'</div>'
  +'<p class="tt-val" id="tt_cierre"></p>'
  +'<div class="aviso tt-aviso" id="tt_warn" hidden><b>Ojo:</b> este texto tiene frases que Meta o TikTok penalizan. <button class="linkb" data-tab="normas">Ver lo que no se dice</button></div>'
  +'<div class="tt-btns"><button class="btn ghost" data-tt="plnext">Otra plantilla</button><button class="btn" data-tt="plcopy">Copiar</button></div>'
  +'<details class="tt-det"><summary>Ver ejemplos</summary>'+p.ejemplos.map(e=>'<div class="tt-ej"><p>'+esc(e)+'</p><button class="mini" data-copy="'+esc(e)+'">Copiar</button></div>').join("")+'</details></section>';
  setTimeout(ttPlRefresh,0);
  return h;
}
// Actualiza el resultado en vivo SIN volver a pintar la pantalla (así no se pierde el cursor). Solo textContent.
function ttPlRefresh(){
  const p=S.tt.pl.open&&ttPlan(S.tt.pl.open),o=$("#tt_out");
  if(!p||!o)return;
  const r=ttPlText(p);
  o.textContent=r.main;$("#tt_cierre").textContent=r.cierre;
  const w=$("#tt_warn");if(w)w.hidden=!ttHigh(r.full);
}

// ---------- IDEAS ESCRITAS (banco de 300) ----------
let TT_SAFE=null;
const ttSafeIdeas=()=>TT_SAFE||(TT_SAFE=DB.tiktok.ideas.filter(i=>!ttHigh([i.pantalla,i.grabar,i.descripcion,i.cta].join("\n"))));
function ttBancoFilter(){
  const b=S.tt.bl,q=norm(String(b.q||"").trim()),ws=q?q.split(/\s+/):[];
  return ttSafeIdeas().filter(i=>(b.via==="todas"||i.via===b.via)&&(b.fmt==="todos"||i.formato===b.fmt)
    &&(!ws.length||ws.every(w=>norm([i.pantalla,i.grabar,i.descripcion,i.cta,i.kw].join(" ")).includes(w))));
}
function ttBancoCard(i){
  const f=ttFmt(i.formato);
  return '<article class="panel tt-bi"><div class="tt-tags"><span class="tag">'+(i.via==="proyecto"?"Proyecto":"Clientas")+'</span>'+(f?'<span class="tag pal">'+esc(f.nombre)+'</span>':'')+'</div>'
  +'<p class="tt-pant">'+esc(i.pantalla)+'</p>'
  +'<div class="tt-lbl">Qué grabar</div><p class="tt-val">'+esc(i.grabar)+'</p>'
  +'<div class="tt-lbl">Pregunta final</div><p class="tt-val">'+esc(i.cta)+'</p>'
  +'<div class="tt-lbl">Palabra clave</div><span class="tt-kw">'+esc(i.kw)+'</span>'
  +(i.via==="clientas"?'<div class="tt-note">'+esc(TT_NOTA_PROD)+'</div>':'')
  +(i.aviso?'<div class="aviso tt-aviso"><b>Aviso:</b> '+esc(i.aviso)+'</div>':'')
  +'<div class="tt-btns"><button class="btn ghost" data-tt="blcopy" data-id="'+esc(i.id)+'">Copiar</button></div></article>';
}
function ttBancoList(){
  const b=S.tt.bl,L=ttBancoFilter(),show=L.slice(0,b.lim);
  if(!L.length)return '<p class="mut">No hay ideas con esos filtros. Prueba con otra palabra.</p>';
  return '<p class="mut tt-count">'+L.length+(L.length===1?" idea":" ideas")+'</p>'+show.map(ttBancoCard).join("")
   +(L.length>show.length?'<div class="tt-btns"><button class="btn ghost" data-tt="blmore">Ver más ('+(L.length-show.length)+' más)</button></div>':'');
}
function viewTTBanco(){
  const b=S.tt.bl;
  return '<section class="panel"><h2>Ideas escritas</h2><p class="lead">Ideas redactadas una a una. Filtra por proyecto o clientas, por formato, o busca una palabra.</p>'
  +'<div class="tt-seg" role="group" aria-label="Para quién">'+[["todas","Todas"],["proyecto","Proyecto"],["clientas","Clientas"]].map(v=>'<button type="button" class="'+(b.via===v[0]?"on":"")+'" data-tt="blv" data-v="'+v[0]+'" aria-pressed="'+(b.via===v[0])+'">'+v[1]+'</button>').join("")+'</div>'
  +'<div class="chips tt-fchips">'+[["todos","Todos los formatos"]].concat(DB.tiktok.formatos.map(f=>[f.id,f.nombre])).map(v=>'<button type="button" class="chip'+(b.fmt===v[0]?" on":"")+'" data-tt="blf" data-v="'+esc(v[0])+'" aria-pressed="'+(b.fmt===v[0])+'">'+esc(v[1])+'</button>').join("")+'</div>'
  +'<label>Buscar<input type="search" id="tt_bq" value="'+esc(b.q)+'" placeholder="por ejemplo: café, coche, noche" autocomplete="off"></label></section>'
  +'<div id="tt_bl">'+ttBancoList()+'</div>';
}

// ---------- MI HISTORIA EN 60 SEGUNDOS ----------
function viewTTHistoria(){
  const H=DB.tiktok.historia;
  let h='<section class="panel"><h2>Mi historia en 60 segundos</h2><p class="lead">El vídeo que fijas arriba de tu perfil. Cuatro pasos, uno por frase o dos. Duración: '+esc(H.duracion)+'.</p></section>';
  h+=H.pasos.map((p,i)=>'<section class="panel tt-paso"><div class="tt-num">'+(i+1)+'</div><div><h3>'+esc(p.titulo)+'</h3><div class="tt-lbl">Qué contar</div><p class="tt-val">'+esc(p.que_contar)+'</p><div class="tt-lbl">Ejemplo</div><p class="tt-ejem">'+esc(p.ejemplo)+'</p><button class="mini" data-copy="'+esc(p.ejemplo)+'">Copiar ejemplo</button></div></section>').join("");
  h+='<section class="panel"><h3>Consejos para grabarlo</h3><ul>'+H.consejos.map(c=>'<li>'+esc(c)+'</li>').join("")+'</ul></section>';
  return h;
}

// ---------- RESPONDER COMENTARIOS ----------
function viewTTRespuestas(){
  const R0=DB.tiktok.respuestas,S0=[["informacion","Cuando te piden información"],["es_fiable","Cuando preguntan si es fiable"],["precio_producto","Cuando preguntan por el precio o el producto"],["video_respuesta","Para responder con un vídeo"]];
  let h='<section class="panel"><h2>Responder comentarios</h2><p class="lead">Respuestas cortas y tranquilas para los comentarios más habituales. Cámbialas un poco para que suenen a ti.</p></section>';
  S0.forEach(s=>{
    const L=R0[s[0]]||[];if(!L.length)return;
    h+='<section class="panel"><h3>'+esc(s[1])+'</h3>'+L.map(t=>'<div class="tt-ej"><p>'+esc(t)+'</p><button class="mini" data-copy="'+esc(t)+'">Copiar</button></div>').join("")+'</section>';
  });
  return h;
}

// ---------- MI BIO DE TIKTOK ----------
function viewTTBio(){
  let h='<section class="panel"><h2>Mi bio de TikTok</h2><p class="lead">Tres líneas que dicen quién eres, qué cuentas y adónde ir. Elige la que más se parezca a ti y cambia lo que haga falta.</p></section>';
  h+=DB.tiktok.bios.map((b,i)=>'<section class="panel tt-bio"><h4>'+esc(b.perfil)+'</h4><p class="tt-bl">'+b.lineas.map(esc).join("<br>")+'</p><p class="mut">Te lleva a: '+esc(b.destino)+'</p><button class="mini" data-tt="biocopy" data-i="'+i+'">Copiar</button></section>').join("");
  return h;
}

// ---------- MI SEMANA EN TIKTOK ----------
function viewTTSemana(){
  const W=DB.tiktok.semana;
  let h='<section class="panel"><h2>Mi semana en TikTok</h2><p class="lead">2 vídeos al día: mañana y tarde.</p><div class="tt-note"><b>Regla:</b> '+esc(W.regla)+'</div><div class="tt-note"><b>Truco:</b> '+esc(W.truco)+'</div></section>';
  h+=W.dias.map(d=>'<section class="panel tt-dia"><h3>'+esc(d.dia)+'</h3><div class="tt-fila"><span class="tt-mt">Mañana</span><span>'+esc(d.manana)+'</span></div><div class="tt-fila"><span class="tt-mt">Tarde</span><span>'+esc(d.tarde)+'</span></div></section>').join("");
  return h;
}

// ---------- LO QUE NO SE DICE ----------
const TT_RED={ambas:"Meta y TikTok",meta:"Solo Meta",tiktok:"Solo TikTok"};
function viewNormas(){
  let h='<section class="panel"><h2>Lo que no se dice</h2><p class="lead">Lo que Meta y TikTok penalizan en negocios de venta directa, y cómo decirlo mejor. Si se cuela alguna frase en tus textos, el Revisor te avisa.</p></section>';
  h+=DB.tiktok.normas.map(g=>'<section class="tt-rl'+(g.red==="tiktok"?" tk":"")+'"><div class="tt-rlh"><b>'+esc(g.grupo)+'</b><span class="tt-red">'+esc(TT_RED[g.red]||"")+'</span></div>'
    +g.no.map(t=>'<p class="no">'+esc(t)+'</p>').join("")+g.mejor.map(t=>'<p class="si">'+esc(t)+'</p>').join("")+'</section>').join("");
  h+='<p class="note"><button class="linkb" data-tab="revisor">Pasar un texto por el Revisor</button></p>';
  return h;
}

Object.assign(VIEWS,{tt_idea:viewTTIdea,tt_stories:viewTTStories,tt_plantillas:viewTTPlantillas,tt_banco:viewTTBanco,tt_historia:viewTTHistoria,tt_respuestas:viewTTRespuestas,tt_bio:viewTTBio,tt_semana:viewTTSemana,normas:viewNormas});

// ---------- eventos ----------
function ttStReset(){S.tt.st.nonce=0;S.tt.st.cur=null}
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.red){redSet(d.red);render();return}
  const a=d.tt;if(!a)return;
  const T=S.tt;
  switch(a){
   case "ivia":T.ivia=ttVia(d.v);render(true);break;
   case "iotra":{const v=ttVia(T.ivia);T.n[v]++;ttNewIdea(v);render(true);break}
   case "icopy":{const x=T.idea[ttVia(T.ivia)];if(x)copy(ttCopyTxt(x));break}
   case "stn":T.st.n=+d.v===2?2:3;ttStReset();render(true);break;
   case "stvia":T.st.via=ttVia(d.v);ttStReset();render(true);break;
   case "stotra":T.st.nonce++;T.st.cur=null;render(true);break;
   case "stcopy":{const r=ttStoriesCur();if(r)copy(ttStoriesTxt(r));break}
   case "plf":T.pl.f=["proyecto","clientas"].indexOf(d.v)>=0?d.v:"todas";render(true);break;
   case "plopen":if(ttPlan(d.id)){T.pl.open=d.id;render()}break;
   case "plback":T.pl.open=null;render();break;
   case "plq":{const p=ttPlan(T.pl.open);if(p){T.pl.q[p.id]=(+d.i||0)%p.preguntas.length;render(true)}break}
   case "plnext":{const L=DB.tiktok.plantillas.filter(x=>T.pl.f==="todas"||x.via===T.pl.f||x.via==="ambos"),i=L.findIndex(x=>x.id===T.pl.open);if(L.length){T.pl.open=L[(i+1)%L.length].id;render()}break}
   case "plcopy":{const p=ttPlan(T.pl.open);if(p)copy(ttPlText(p).full);break}
   case "blv":T.bl.via=["proyecto","clientas"].indexOf(d.v)>=0?d.v:"todas";T.bl.lim=20;render(true);break;
   case "blf":T.bl.fmt=ttFmt(d.v)?d.v:"todos";T.bl.lim=20;render(true);break;
   case "blmore":T.bl.lim+=20;render(true);break;
   case "blcopy":{const i=DB.tiktok.ideas.filter(x=>x.id===d.id)[0];if(i)copy(i.pantalla+"\n\n"+i.cta+"\n\n"+i.descripcion);break}
   case "biocopy":{const b=DB.tiktok.bios[+d.i];if(b)copy(b.lineas.join("\n"));break}
  }
});
document.addEventListener("input",e=>{
  const el=e.target;
  if(el.id==="tt_bq"){S.tt.bl.q=el.value;S.tt.bl.lim=20;$("#tt_bl").innerHTML=ttBancoList();return}
  const k=el.dataset&&el.dataset.ttk;
  if(k&&S.tt.pl.open){
    const p=ttPlan(S.tt.pl.open);if(!p)return;
    if(k==="__kw"){S.tt.pl.kw[p.id]=norm(el.value).toUpperCase().replace(/[^A-Z0-9]/g,"")}
    else if(p.huecos.some(x=>x.k===k)){(S.tt.pl.vals[p.id]=S.tt.pl.vals[p.id]||{})[k]=el.value}
    ttPlRefresh();
  }
});
document.addEventListener("change",e=>{
  if(e.target.id==="tt_sit"){const st=S.tt.st;if(SIT[e.target.value]){st.sit[ttVia(st.via)]=e.target.value;ttStReset();render(true)}}
});

// ===== Fam Studio · sección Equipo (solo para el equipo) =====
// Contenido: DB.equipo (JSON descifrado). Todo texto dinámico pasa por esc(); los enlaces se comprueban otra vez aquí
// (https + dominio de la lista LINK_HOSTS de core.js) aunque el build ya los haya validado.
const EQ_IMG=/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/;
const EQ_KEY="ft_eq_sem";
const EQ_CARDS=[
  ["eq_semana","Mi primera semana","primera_semana"],
  ["eq_calendario","Calendario del equipo","calendario"],
  ["eq_formaciones","Formaciones","formaciones"],
  ["eq_guias","Guías y plantillas","guias"],
  ["eq_herramientas","Herramientas y canales","herramientas"],
  ["eq_paises","Países y kits","paises"],
  ["eq_terminos","Términos","terminos"],
  ["eq_presentar","Cómo presentar","presentar"],
  ["eq_ventas","Vender y recomendar","ventas"],
  ["eq_normas","Normas y organización","normas"]
];
const EQ_SUB={
  eq_calendario:"Formaciones de lunes a viernes, a las 20:00",
  eq_formaciones:"Importantes, redes, productos y mentalidad",
  eq_guias:"Acciones básicas, plantillas y flyers",
  eq_herramientas:"Canales, academia, app, tu web y catálogo",
  eq_paises:"Canales oficiales y kits de inicio",
  eq_terminos:"PV, GV, línea activa y más",
  eq_presentar:"7 tips para tu Zoom, cierres y tu vídeo",
  eq_ventas:"Tips, cómo cobrar y mensajes",
  eq_normas:"Convivencia, organización y trabajo desde casa"
};
const EQ=()=>DB.equipo||{};
const eqSec=k=>EQ()[k]||{};
const eqImgOk=u=>typeof u==="string"&&EQ_IMG.test(u)?u:"";
function eqType(u){
  let h="";try{h=new URL(u).hostname.toLowerCase()}catch(e){}
  if(h==="youtu.be"||h==="youtube.com"||h.endsWith(".youtube.com"))return "YouTube";
  if(h==="t.me")return "Telegram";
  if(h==="chat.whatsapp.com"||h==="whatsapp.com")return "WhatsApp";
  if(h.endsWith(".mixlr.com"))return "Audio (Mixlr)";
  if(h==="boards.com")return "Boards";
  if(h.endsWith(".teachable.com"))return "Academia";
  if(h==="www.canva.com")return "Canva";
  if(h==="drive.google.com")return "Drive";
  if(h==="open.spotify.com")return "Spotify";
  if(h==="www.facebook.com")return "Facebook";
  if(h==="catalog.farmasius.com"||h==="viewer.ipaper.io"||h==="catalog.farmasi.pl")return "Guía";
  return "Web";
}
function eqLink(k){
  if(!k||typeof k.l!=="string")return "";
  const u=linkOk(k.u);if(!u)return "";
  const t=eqType(u);
  return '<a class="eql" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer" aria-label="'+esc(k.l+", "+t+". Se abre en una pestaña nueva")+'"><span class="eqlt"><b>'+esc(k.l)+'</b><small>'+esc(t)+'</small></span><span class="eqlo">Abrir</span></a>';
}
const eqLinks=a=>Array.isArray(a)&&a.length?'<div class="eqls">'+a.map(eqLink).join("")+'</div>':"";
const eqP=t=>'<p class="eqp">'+esc(t)+'</p>';
function eqHead(sec,title,sub){
  const im=eqImgOk(sec&&sec.img);
  return '<section class="eqh">'+(im?'<img alt="" src="'+esc(im)+'">':'')+'<div class="eqht"><h2>'+esc(title)+'</h2>'+(sub?'<p>'+esc(sub)+'</p>':'')+'</div></section>';
}
const eqPanel=(t,body,cls)=>'<section class="panel'+(cls?" "+cls:"")+'">'+(t?'<h3>'+esc(t)+'</h3>':'')+body+'</section>';
const eqNum=(a,f)=>'<ol class="eqnum">'+a.map(f).join("")+'</ol>';
function eqShot(s,key){
  const im=s&&eqImgOk(s.img);if(!im)return "";
  return '<figure class="eqfig"><button type="button" class="rthumb eqshot" data-eqimg="'+esc(key)+'" aria-label="Ver la imagen más grande"><img alt="'+esc(s.alt||"")+'" src="'+esc(im)+'"></button><figcaption>'+esc(s.cap||"")+'</figcaption></figure>';
}
function eqShotByKey(k){
  const E=EQ();
  return k==="linkweb"?(E.herramientas||{}).linkweb&&E.herramientas.linkweb.shot:k==="pv"?(E.terminos||{}).pv&&E.terminos.pv.shot:null;
}

// ----- progreso de la primera semana (localStorage con try/catch dentro de ls) -----
const eqProg=()=>{const p=ls(EQ_KEY);return p&&typeof p==="object"&&!Array.isArray(p)?p:{}};
const eqDays=()=>Array.isArray(eqSec("primera_semana").dias)?eqSec("primera_semana").dias:[];
function eqDayStat(d,p){
  const n=(d.tareas||[]).length;let c=0;
  for(let i=0;i<n;i++)if(p["d"+d.n+"-"+i]===1)c++;
  return {c,n,ok:n>0&&c===n};
}
function eqSemStat(){
  const p=eqProg(),D=eqDays();let days=0,c=0,n=0;
  D.forEach(d=>{const s=eqDayStat(d,p);c+=s.c;n+=s.n;if(s.ok)days++});
  return {days,total:D.length,c,n};
}
S.eqOpen={};

// ----- inicio de Equipo -----
function eqHoy(){
  const C=eqSec("calendario"),dow=new Date().getDay();
  const d=(C.dias||[]).filter(x=>x.n===dow)[0];
  return d?{d,txt:d.d+": "+d.titulo+", a las 20:00 h"}:null;
}
function viewEquipo(){
  const B=EQ().bienvenida||{},st=eqSemStat(),hoy=eqHoy();
  const im=eqImgOk(B.img);
  let h='<section class="eqhero">'+(im?'<img alt="" src="'+esc(im)+'">':'')+'<div class="eqht"><span class="rbadge">Solo para el equipo</span><h2>Fam Team</h2><p>'+esc(B.lema||"")+'</p></div></section>';
  h+='<section class="panel">'+(B.texto||[]).map(eqP).join("")+'</section>';
  h+='<div class="eqcards">'+EQ_CARDS.map(c=>{
    const sec=eqSec(c[2]),ci=eqImgOk(sec.img);
    let sub=EQ_SUB[c[0]]||"";
    if(c[0]==="eq_semana")sub=st.days+" de "+st.total+" días completados";
    if(c[0]==="eq_calendario"&&hoy)sub="Hoy, "+hoy.txt;
    if(c[0]==="eq_calendario"&&!hoy)sub="Hoy no hay formación en directo";
    return '<button type="button" class="eqc'+(c[0]==="eq_calendario"&&hoy?" hoy":"")+'" data-tab="'+c[0]+'">'+(ci?'<img alt="" src="'+esc(ci)+'">':'')+'<span class="eqcs"><b>'+esc(c[1])+'</b><small>'+esc(sub)+'</small></span></button>';
  }).join("")+'<button type="button" class="eqc plain" data-tab="negocio" data-from="equipo"><span class="eqcs"><b>Mi negocio</b><small>El plan de compensación explicado</small></span></button></div>';
  return h;
}

// ----- Mi primera semana -----
function viewEqSemana(){
  const S1=eqSec("primera_semana"),D=eqDays(),p=eqProg(),st=eqSemStat();
  const pct=st.n?Math.round(st.c*100/st.n):0;
  let h=eqHead(S1,S1.titulo||"Mi primera semana");
  h+='<section class="panel"><p class="lead">'+esc(S1.intro||"")+'</p><p class="eqprog"><b>'+st.days+' de '+st.total+'</b> días completados · '+st.c+' de '+st.n+' tareas</p><div class="eqbar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct+'" aria-label="Progreso de la primera semana"><i class="eqbari" style="width:'+pct+'%"></i></div>'
    +(st.days===st.total&&st.total?'<p class="eqwin">'+esc(S1.cierre||"")+'</p>':'')+'</section>';
  const firstOpen=D.filter(d=>!eqDayStat(d,p).ok)[0];
  h+=D.map(d=>{
    const s=eqDayStat(d,p);
    const open=S.eqOpen[d.n]!==undefined?S.eqOpen[d.n]:(firstOpen&&firstOpen.n===d.n);
    return '<details class="rdet eqday'+(s.ok?" done":"")+'" data-eqd="'+d.n+'"'+(open?" open":"")+'><summary><span class="eqdn">'+d.n+'</span><span class="eqdt">'+esc(d.titulo)+'</span><span class="eqdc">'+s.c+'/'+s.n+'</span></summary><div class="rdb">'
      +(d.tareas||[]).map((t,i)=>{
        const id="d"+d.n+"-"+i,ck=p[id]===1;
        const lk=(t.links||[]).concat(t.link?[t.link]:[]);
        return '<div class="eqtask"><label class="eqcb"><input type="checkbox" data-eqc="'+id+'"'+(ck?" checked":"")+'><span>'+esc(t.t)+'</span></label>'+eqLinks(lk)+(t.go&&VIEWS[t.go]?'<button type="button" class="linkb" data-tab="'+esc(t.go)+'">'+(t.go==="eq_calendario"?"Ver el calendario":"Ver herramientas y canales")+'</button>':'')+'</div>';
      }).join("")
      +((d.ejemplos||[]).length?'<h4 class="rsub">Ejemplos y mensajes</h4>'+d.ejemplos.map(e=>rcMsg(e.txt,0,e.titulo)).join(""):"")
      +'</div></details>';
  }).join("");
  h+='<section class="panel"><h3>Tu plantilla de Fam Team</h3><p>'+esc((S1.plantilla||{}).t||"")+'</p>'+eqLinks([(S1.plantilla||{}).link])+'</section>';
  if(S1.doc)h+='<section class="panel"><h3>Documento original</h3>'+eqLinks([S1.doc])+'</section>';
  h+='<p class="note center"><button type="button" class="linkb" data-eqreset="1">Borrar mi progreso</button></p>';
  return h;
}

// ----- Calendario -----
function viewEqCalendario(){
  const C=eqSec("calendario"),dow=new Date().getDay();
  let h=eqHead(C,C.titulo||"Calendario del equipo",C.intro);
  h+=(C.dias||[]).map(d=>{
    const hoy=d.n===dow;
    return '<section class="panel eqdia'+(hoy?" hoy":"")+'"><div class="eqdh"><div><span class="eqdd">'+esc(d.d)+'</span><h3>'+esc(d.titulo)+'</h3></div>'+(hoy?'<span class="eqhoy">Hoy</span>':'')+'</div><p class="eqhora">20:00 h (España)</p>'
      +((d.temas||[]).length?'<ul class="eqtemas">'+d.temas.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul>':'')+eqP(d.nota||"")+'</section>';
  }).join("");
  h+='<section class="panel eqavisos"><ul>'+(C.avisos||[]).map(a=>'<li>'+esc(a)+'</li>').join("")+'</ul>'+eqLinks(C.links)+'</section>';
  return h;
}

// ----- Formaciones -----
function viewEqFormaciones(){
  const F=eqSec("formaciones");
  return eqHead(F,F.titulo||"Formaciones",F.intro)+(F.grupos||[]).map(g=>eqPanel(g.t,eqLinks(g.items)+(g.nota?'<p class="note">'+esc(g.nota)+'</p>':'')+(/plan de compensaci/i.test(g.t)?'<button type="button" class="linkb" data-tab="negocio" data-from="equipo">Abrir «Mi negocio»</button>':''))).join("");
}

// ----- Guías y plantillas -----
function viewEqGuias(){
  const G=eqSec("guias");
  let h=eqHead(G,G.titulo||"Guías y plantillas",G.intro);
  h+=eqPanel("Acciones básicas que dan resultados",'<ul class="equl">'+(G.plantillas||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul><p class="note">'+esc(G.plantillas_nota||"")+'</p>');
  if(G.guia7)h+=eqPanel(G.guia7.t,eqP(G.guia7.d)+eqLinks([G.guia7.link])+'<button type="button" class="linkb" data-tab="eq_semana">Ir a «Mi primera semana»</button>');
  h+=eqPanel("Flyers para editar",eqLinks(G.flyers)+'<p class="note">'+esc(G.flyers_nota||"")+'</p>');
  return h;
}

// ----- Herramientas y canales -----
function viewEqHerramientas(){
  const H=eqSec("herramientas");
  let h=eqHead(H,H.titulo||"Herramientas y canales",H.intro);
  h+=(H.grupos||[]).map(g=>eqPanel(g.t,eqLinks(g.items))).join("");
  if(H.academia)h+=eqPanel(H.academia.t,eqP(H.academia.d)+eqNum(H.academia.pasos||[],x=>'<li>'+esc(x)+'</li>')+eqLinks([H.academia.link]));
  if(H.app)h+=eqPanel(H.app.t,eqP(H.app.d)+eqNum(H.app.pasos||[],x=>'<li>'+esc(x)+'</li>'));
  if(H.mixlr)h+=eqPanel(H.mixlr.t,eqP(H.mixlr.d));
  if(H.web)h+=eqPanel(H.web.t,eqNum(H.web.pasos||[],x=>'<li>'+esc(x)+'</li>')+eqLinks([H.web.link]));
  if(H.linkweb){
    const L=H.linkweb;
    h+=eqPanel(L.t,eqP(L.d)+'<ul class="eqcol">'+(L.colores||[]).map(c=>'<li><span class="eqdot" style="background:'+(/^#[0-9a-f]{6}$/i.test(c.hex)?c.hex:"#999")+'"></span><div><b>'+esc(c.c.charAt(0).toUpperCase()+c.c.slice(1))+' · '+esc(c.t)+'</b><small>'+esc(c.d)+'</small></div></li>').join("")+'</ul>'+eqShot(L.shot,"linkweb"));
  }
  if(H.catalogo)h+=eqPanel(H.catalogo.t,eqP(H.catalogo.d));
  return h;
}

// ----- Países y kits -----
function viewEqPaises(){
  const P=eqSec("paises");
  let h=eqHead(P,P.titulo||"Países y kits",P.intro);
  h+=eqPanel("Canales oficiales",(P.canales||[]).map(c=>'<div class="eqpais"><h4>'+esc(c.p)+'</h4>'+(c.link?eqLinks([c.link]):'<p class="mut">Sin enlace en la guía.</p>')+'</div>').join(""));
  h+='<section class="aviso eqaviso"><b>'+esc(P.aviso||"")+'</b></section>';
  h+=eqPanel("Kits de inicio por país",eqLinks(P.kits));
  return h;
}

// ----- Términos -----
function viewEqTerminos(){
  const T=eqSec("terminos"),dl=a=>'<dl class="gl">'+(a||[]).map(x=>'<dt>'+esc(x.t)+'</dt><dd>'+esc(x.d)+'</dd>').join("")+'</dl>';
  let h=eqHead(T,T.titulo||"Términos",T.intro);
  h+=eqPanel("Volumen y líneas",dl(T.bloque1)+'<div class="eqnota"><b>'+esc(T.aviso||"")+'</b></div>'
    +'<h4 class="rsub">Colores de línea</h4><ul class="eqcolores">'+(T.colores||[]).map(c=>'<li><span class="eqdot" style="background:'+(/^#[0-9a-f]{6}$/i.test(c.hex)?c.hex:"#999")+'"></span>'+esc(c.t)+'</li>').join("")+'</ul><p class="note">'+esc(T.colores_nota||"")+'</p>');
  h+=eqPanel("Tus cifras",dl(T.bloque2));
  if(T.pv)h+=eqPanel(T.pv.t,eqP(T.pv.d)+eqShot(T.pv.shot,"pv"));
  h+='<p class="note center"><button type="button" class="linkb" data-tab="negocio" data-from="equipo">Más términos en el glosario de «Mi negocio»</button></p>';
  return h;
}

// ----- Cómo presentar -----
function viewEqPresentar(){
  const P=eqSec("presentar");
  let h=eqHead(P,P.titulo||"Cómo presentar Farmasi");
  h+=eqPanel("Presenta de forma fácil y sencilla",eqLinks(P.links));
  h+=eqPanel(P.tips_t,'<ol class="eqtips">'+(P.tips||[]).map((t,i)=>'<li><span class="eqtn">'+String(i+1).padStart(2,"0")+'</span><div><b>'+esc(t.t)+'</b><small>'+esc(t.d)+'</small></div></li>').join("")+'</ol>');
  if(P.video)h+=eqPanel(P.video.t,eqP(P.video.d)+eqLinks([P.video.link]));
  return h;
}

// ----- Vender y recomendar -----
function viewEqVentas(){
  const V=eqSec("ventas");
  let h=eqHead(V,V.titulo||"Vender y recomendar");
  h+=eqPanel("Tips de ventas",eqNum(V.tips||[],x=>'<li>'+esc(x)+'</li>')+eqLinks([V.zoom]));
  h+=eqPanel("Cómo cobrar",(V.cobrar||[]).map(c=>'<div class="eqcobro"><h4>'+esc(c.t)+'</h4>'+eqP(c.d)+'</div>').join(""));
  h+=eqPanel("Lo que no debes hacer",'<ul class="eqno">'+(V.no_hacer||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>');
  h+=eqPanel("Ejemplos de mensajes",(V.mensajes||[]).map(m=>rcMsg(m.txt,0,m.t)).join(""));
  return h;
}

// ----- Normas y organización -----
function viewEqNormas(){
  const N=eqSec("normas");
  let h=eqHead(N,N.titulo||"Normas y organización");
  h+=eqPanel("Normas y reglas del equipo",eqNum(N.normas||[],x=>'<li>'+esc(x)+'</li>')+'<div class="eqnota">'+esc(N.union||"")+'</div>'+eqLinks([N.mas_detalle]));
  h+=eqPanel(N.org_t||"Organización",'<div class="eqorg">'+(N.org||[]).map(o=>'<div><b>'+esc(o.t)+'</b><small>'+esc(o.d)+'</small></div>').join("")+'</div>');
  h+=eqPanel(N.casa_t,'<ol class="eqtips">'+(N.casa||[]).map((t,i)=>'<li><span class="eqtn">'+(i+1)+'</span><div><b>'+esc(t.t)+'</b><small>'+esc(t.d)+'</small></div></li>').join("")+'</ol>');
  return h;
}

// ----- eventos -----
// (fase de captura) recuerda desde dónde se abre «Mi negocio» para que «‹ Equipo» vuelva bien
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-tab]");if(!t)return;
  if(t.dataset.tab==="negocio")S.negFrom=t.dataset.from==="equipo"?"equipo":"";
},true);
document.addEventListener("toggle",e=>{
  const t=e.target;if(t&&t.dataset&&t.dataset.eqd)S.eqOpen[t.dataset.eqd]=t.open;
},true);
document.addEventListener("change",e=>{
  const t=e.target;if(!t||!t.dataset||!t.dataset.eqc||!/^d[1-9]-\d{1,2}$/.test(t.dataset.eqc))return;
  const p=eqProg();if(t.checked)p[t.dataset.eqc]=1;else delete p[t.dataset.eqc];
  ls(EQ_KEY,p);render(true);
});
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;
  if(t.dataset.eqreset){if(window.confirm("¿Borrar todo tu progreso de la primera semana?")){ls(EQ_KEY,{});S.eqOpen={};render(true)}return}
  if(t.dataset.eqimg){const s=eqShotByKey(t.dataset.eqimg),u=s&&eqImgOk(s.img);if(u)abreVisor(u,s.alt||"")}
});
Object.assign(VIEWS,{equipo:viewEquipo,eq_semana:viewEqSemana,eq_calendario:viewEqCalendario,eq_formaciones:viewEqFormaciones,eq_guias:viewEqGuias,eq_herramientas:viewEqHerramientas,eq_paises:viewEqPaises,eq_terminos:viewEqTerminos,eq_presentar:viewEqPresentar,eq_ventas:viewEqVentas,eq_normas:viewEqNormas});

// ===== Fam Studio · navegación, inicio, instalación y administración =====
const NAV=[["home","Inicio"],["crear","Crear"],["semana","Semana"],["recursos","Recursos"],["equipo","Equipo"],["mas","Más"]];
const PARENT={situaciones:"mas",ganchos:"mas",formatos:"mas",cuadricula:"mas",revisor:"mas",guia:"mas",ayuda:"mas",perfil:"mas",instalar:"mas",admin:"mas",negocio:"mas",perfil_ig:"mas",numeros:"mas",guia_det:"recursos",pronto:"home",tt_idea:"home",tt_stories:"home",tt_plantillas:"home",tt_banco:"home",tt_historia:"home",tt_respuestas:"home",tt_bio:"home",tt_semana:"home",normas:"mas",eq_semana:"equipo",eq_calendario:"equipo",eq_formaciones:"equipo",eq_guias:"equipo",eq_herramientas:"equipo",eq_paises:"equipo",eq_terminos:"equipo",eq_presentar:"equipo",eq_ventas:"equipo",eq_normas:"equipo"};
const parentOf=t=>(t==="negocio"&&S.negFrom==="equipo")?"equipo":PARENT[t];
const TITLES={situaciones:"Situaciones",ganchos:"Ganchos",formatos:"Formatos",cuadricula:"Cuadrícula",revisor:"Revisor",guia:"Guía del método",ayuda:"Cómo se usa",perfil:"Mi cuenta",instalar:"Instalar en el móvil",admin:"Administración",negocio:"Mi negocio",perfil_ig:"Mi perfil de Instagram",numeros:"Mis números",guia_det:"Recurso",pronto:"Próximamente",tt_idea:"Idea del día",tt_stories:"Stories para TikTok",tt_plantillas:"Plantillas",tt_banco:"Ideas escritas",tt_historia:"Mi historia en 60 segundos",tt_respuestas:"Responder comentarios",tt_bio:"Mi bio de TikTok",tt_semana:"Mi semana en TikTok",normas:"Lo que no se dice",equipo:"Equipo",eq_semana:"Mi primera semana",eq_calendario:"Calendario del equipo",eq_formaciones:"Formaciones",eq_guias:"Guías y plantillas",eq_herramientas:"Herramientas y canales",eq_paises:"Países y kits",eq_terminos:"Términos",eq_presentar:"Cómo presentar",eq_ventas:"Vender y recomendar",eq_normas:"Normas y organización"};
const isStandalone=()=>{try{return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true}catch(e){return false}};
const platform=()=>{const u=navigator.userAgent||"";if(/iPhone|iPad|iPod/i.test(u)||(/Macintosh/.test(u)&&"ontouchend" in document))return "ios";if(/Android/i.test(u))return "android";return "otro"};

function go(tab,keep){S.tab=tab;render(keep)}
function render(keep){
  const y=window.scrollY,par=parentOf(S.tab),cur=par||S.tab;
  $("#bnav").innerHTML=NAV.map(t=>'<button class="bn'+(cur===t[0]?" on":"")+'" data-tab="'+t[0]+'">'+t[1]+'</button>').join("");
  const v=VIEWS[S.tab]||viewHome;
  const back=par?'<button class="back" data-tab="'+par+'">‹ '+(par==="mas"?"Más":par==="recursos"?"Recursos":par==="equipo"?"Equipo":"Inicio")+'</button>':"";
  try{$("#main").innerHTML=back+v()}catch(err){$("#main").innerHTML='<section class="panel"><h3>Algo ha fallado</h3><p>'+esc(err&&err.message)+'</p></section>'}
  if(keep)window.scrollTo(0,y);else window.scrollTo(0,0);
}

// ----- INICIO -----
const instHtml=()=>(!isStandalone()&&!ls("fs_inst_ok"))?'<section class="panel inst"><div><b>Instala Fam Studio en tu móvil</b><small>Se abre como una app, con su icono. Tardas 30 segundos.</small></div><div class="acts"><button class="btn" data-tab="instalar">Ver cómo</button><button class="mini" data-act="instok">Ya la tengo</button></div></section>':"";
function viewHome(){
  const P=ls("ft_perfil")||{},nombre=(P.nombre||"").trim().split(" ")[0];
  const B=(t,sub,attrs,main)=>'<button class="hb'+(main?" main":"")+'" '+attrs+'><b>'+t+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</button>';
  if(redGet()==="tiktok")return redSeg()+viewHomeTT(nombre)+instHtml();
  let h=redSeg()+'<section class="hero2"><p class="hi">'+(nombre?"Hola, "+esc(nombre):"Hola")+'</p><h2>¿Qué quieres hoy?</h2></section>';
  h+=instHtml();
  h+='<section class="panel hblk"><h3>Conseguir clientas</h3>'+B("Stories que venden","Una secuencia con palabra clave para que te escriban",'data-act="pre" data-p="clientas"',true)+B("Reel para que te descubran","Gente nueva que todavía no te conoce",'data-act="reel" data-p="clientas|crecer"')+B("Reel para captar","Con palabra clave y recurso",'data-act="reel" data-p="clientas|captar"')+B("Recursos para enviar","Guías, tarjetas y mensajes",'data-tab="recursos"')+'</section>';
  h+='<section class="panel hblk"><h3>Atraer gente al proyecto</h3>'+B("Stories del proyecto","Cuenta cómo lo encajas en tu día",'data-act="pre" data-p="proyecto"',true)+B("Reel del proyecto","Para que te encuentre quien busca algo propio",'data-act="reel" data-p="proyecto|crecer"')+'</section>';
  h+='<section class="panel hblk"><h3>Organizarme</h3>'+B("Preparar mi semana","Un tema, varias secuencias, sin pensar cada día",'data-tab="semana"')+B("Ideas de qué contar","Situaciones reales del día a día",'data-tab="situaciones"')+'</section>';
  h+='<p class="note center"><button class="linkb" data-tab="ayuda">¿Primera vez? Mira cómo se usa</button></p>';
  return h;
}
function viewPronto(){return '<section class="panel"><h2>'+esc(S.pronto||"Próximamente")+'</h2><p class="lead">Esta parte de Fam Studio está en construcción y llega en la próxima actualización.</p><p>Mientras tanto, puedes preparar tus stories desde Crear.</p><div class="acts"><button class="btn" data-tab="crear">Ir a Crear</button></div></section>'}
function viewMas(){
  const L=(id,t,s)=>'<button class="ml" data-tab="'+id+'"><b>'+t+'</b><small>'+s+'</small></button>';
  return '<section class="panel"><h2>Más</h2><h4 class="mg">Herramientas</h4>'+L("situaciones","Situaciones","Ideas reales de qué contar")+L("ganchos","Ganchos","12 formas de empezar")+L("formatos","Formatos","Qué es cada tipo de story")+L("cuadricula","Cuadrícula","Dónde colocar texto y palabra clave")+L("revisor","Revisor","Revisa tus textos antes de publicar")+L("normas","Lo que no se dice","Qué evitar en Meta y TikTok, y cómo decirlo mejor")
  +'<h4 class="mg">Aprende</h4>'+L("ayuda","Cómo se usa Fam Studio","Tutorial paso a paso")+L("guia","Guía del método","Stories, reels, CTA y plan semanal")
  +'<h4 class="mg">Tu negocio</h4>'+L("negocio","Mi negocio","El plan de Farmasi explicado")+L("perfil_ig","Mi perfil de Instagram","Bio, destacadas y publicaciones fijadas")+L("numeros","Mis números","Cómo van tus stories y qué mejorar")
  +'<h4 class="mg">Tu cuenta</h4>'+L("perfil","Mi cuenta","Tu nombre, tu nivel y tus guiones guardados")+L("instalar","Instalar en el móvil","Tenerla como una app")+L("admin","Administración","Solo para la administradora del equipo")+'</section>';
}

// ----- INSTALAR -----
const ICO_SHARE='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const ICO_DOTS='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.8" fill="currentColor"/></svg>';
const ICO_ADD='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
function viewInstalar(){
  const p=S.plat||platform();
  if(isStandalone())return '<section class="panel"><h2>Ya la tienes instalada</h2><p class="lead">Estás usando Fam Studio como app. Ábrela siempre desde su icono.</p></section>';
  const ios='<ol class="isteps"><li><span class="num">1</span><div><b>Ábrela en Safari</b><small>Si la abriste desde WhatsApp o Instagram, toca los tres puntos o el icono de la brújula y elige «Abrir en Safari».</small></div></li><li><span class="num">2</span><div><b>Toca el botón de compartir</b><small>Es este icono '+ICO_SHARE+', abajo en el centro de la pantalla (en iPad, arriba).</small></div></li><li><span class="num">3</span><div><b>Baja y toca «Añadir a pantalla de inicio»</b><small>Tiene este icono '+ICO_ADD+'. Si no lo ves, desliza la lista hacia arriba.</small></div></li><li><span class="num">4</span><div><b>Toca «Añadir»</b><small>Arriba a la derecha. Ya tienes Fam Studio en tu pantalla, con su icono.</small></div></li></ol>';
  const and='<ol class="isteps"><li><span class="num">1</span><div><b>Ábrela en Chrome</b><small>Si la abriste desde WhatsApp o Instagram, toca los tres puntos y elige «Abrir en Chrome».</small></div></li><li><span class="num">2</span><div><b>Toca los tres puntos</b><small>Es este icono '+ICO_DOTS+', arriba a la derecha.</small></div></li><li><span class="num">3</span><div><b>Toca «Instalar app» o «Añadir a pantalla de inicio»</b><small>Depende del móvil, sale uno de los dos.</small></div></li><li><span class="num">4</span><div><b>Toca «Instalar» o «Añadir»</b><small>Ya tienes Fam Studio en tu pantalla, con su icono.</small></div></li></ol>';
  return '<section class="panel"><h2>Instálala en 30 segundos</h2><p class="lead">Así se abre como una app, a pantalla completa y con el icono de Fam Team.</p><div class="chips"><button class="chip'+(p==="ios"?" on":"")+'" data-plat="ios">iPhone</button><button class="chip'+(p!=="ios"?" on":"")+'" data-plat="android">Android</button></div>'+(p==="ios"?ios:and)+'<div class="acts"><button class="btn" data-act="instok">Ya la tengo instalada</button></div></section>';
}

// ----- MI CUENTA (reutiliza perfil) -----
// viewPerfil ya existe en ui.js

// ----- ADMINISTRACIÓN -----
function viewAdmin(){
  if(!S.adminOk)return '<section class="panel"><h2>Administración</h2><p class="lead">Solo para quien administra el equipo. Introduce tu código de administración.</p><label>Código de administración<input id="ad_code" type="password" autocomplete="off"></label><div class="acts"><button class="btn" data-act="adlogin">Entrar</button></div><p class="err" id="ad_err" role="status"></p></section>';
  const V=FS.ver||{};
  return '<section class="panel"><h2>Administración</h2><p class="lead">Versión publicada: '+esc(V.v||"—")+'</p></section>'
  +'<section class="panel"><h3>Cambiar el código del equipo</h3><p>Úsalo para dejar fuera a quien ya no está activa. Cuando subas los archivos nuevos, todo el equipo tendrá que escribir el código nuevo la próxima vez que abra la app.</p><label>Código nuevo del equipo<input id="ad_new" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="Mínimo 14 caracteres"><small>Mejor cuatro palabras y tres cifras unidas con guiones.</small></label><div class="acts"><button class="btn" data-act="adcode">Preparar archivos</button></div><p class="err" id="ad_err2" role="status"></p><div id="ad_out"></div></section>'
  +'<section class="panel"><h3>Cambiar tu código de administración</h3><p>Para preparar los archivos hace falta el código actual del equipo: lo compruebo antes de nada.</p><label>Código actual del equipo<input id="ad_cur" autocomplete="off" autocapitalize="none" spellcheck="false"></label><label>Nuevo código de administración<input id="ad_newadm" type="password" autocomplete="off" placeholder="Mínimo 16 caracteres"></label><div class="acts"><button class="btn ghost" data-act="adadm">Preparar archivos</button></div><p class="err" id="ad_err3" role="status"></p><div id="ad_out2"></div></section>'+(typeof adminRecursosHtml==="function"?adminRecursosHtml():"");
}
function adminFilesHtml(code){
  return '<div class="okbox"><b>Archivos preparados y descargados.</b><ol><li>Busca en tu carpeta de descargas <code>data.enc</code> y <code>version.json</code>.</li><li>En GitHub, dentro de tu repositorio, pulsa <b>Add file → Upload files</b>, arrastra los dos y pulsa <b>Commit changes</b>.</li><li>En unos minutos la app pedirá el código del equipo'+(code?' nuevo: <b>'+esc(code)+'</b>':' a quien lo necesite')+'.</li></ol><p class="note">Si la descarga no empezó, toca los botones:</p><div class="acts"><button class="mini" data-act="dl" data-f="data">Descargar data.enc</button><button class="mini" data-act="dl" data-f="ver">Descargar version.json</button></div></div>';
}
// Home: situación adecuada para hoy (de temporada si la hay; si no, una de nivel 0 que va rotando)
const TEMP_MESES={"navidad":[12],"invierno":[12,1,2],"san valentin":[2],"primavera":[3,4,5],"dia de la madre":[4,5],"bodas":[5,6,7,8,9],"verano":[6,7,8],"rebajas":[1,7],"vuelta al cole":[9],"otono":[9,10,11],"black friday":[11]};
function sitSugerida(via,fecha){
  fecha=fecha||new Date();
  const mes=fecha.getMonth()+1,dia=Math.floor((fecha-new Date(fecha.getFullYear(),0,0))/864e5);
  const L=sitsVia(via).filter(s=>s.nivel===0);
  const T=L.filter(s=>s.temporada&&(TEMP_MESES[s.temporada]||[]).indexOf(mes)>=0);
  const P=T.length?T:L.filter(s=>!s.temporada||s.temporada==="todo el año");
  const Q=P.length?P:L;
  return Q[dia%Q.length]||sitsVia(via)[0];
}
function preseleccion(via){
  const f=S.f;
  f.via=via;f.obj=objDefault(via);f.sit=sitSugerida(via).id;f.kw="";f.prod="auto";S.res=null;
}

// ----- eventos propios -----
document.addEventListener("click",async e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.plat){S.plat=d.plat;render(true);return}
  switch(d.act){
   case "instok":ls("fs_inst_ok",1);toast("Perfecto");go("home");break;
   case "pre":preseleccion(d.p==="proyecto"?"proyecto":"clientas");go("crear");break;
   case "pronto":S.pronto=d.p;go("pronto");break;
   case "adlogin":{const c=$("#ad_code").value;$("#ad_err").textContent="Comprobando…";let ok=false;try{ok=await FS.checkAdmin(c)}catch(err){}if(ok){S.adminOk=true;render()}else $("#ad_err").textContent="Código incorrecto.";break}
   case "adcode":{const c=FS.norm($("#ad_new").value);if(c.length<14){$("#ad_err2").textContent="Pon al menos 14 caracteres.";return}$("#ad_err2").textContent="Preparando…";try{await FS.rekey({team:c});$("#ad_err2").textContent="";$("#ad_out").innerHTML=adminFilesHtml(c)}catch(err){$("#ad_err2").textContent="No se pudo preparar: "+err.message}break}
   case "adadm":{const cur=$("#ad_cur").value,c=FS.norm($("#ad_newadm").value);if(!FS.norm(cur)){$("#ad_err3").textContent="Escribe el código actual del equipo.";return}if(c.length<16){$("#ad_err3").textContent="Pon al menos 16 caracteres.";return}$("#ad_err3").textContent="Preparando…";try{await FS.rekey({current:cur,admin:c});$("#ad_err3").textContent="";$("#ad_out2").innerHTML=adminFilesHtml(null)}catch(err){$("#ad_err3").textContent="No se pudo preparar: "+err.message}break}
   case "dl":FS.download(d.f);break;
  }
});
Object.assign(VIEWS,{home:viewHome,recursos:viewRecursos,pronto:viewPronto,negocio:viewNegocio,perfil_ig:viewPerfilIG,numeros:viewNumeros,guia_det:viewGuiaDet,mas:viewMas,instalar:viewInstalar,admin:viewAdmin});
render();
