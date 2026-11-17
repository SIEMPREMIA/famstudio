const RULES=[
 // alto
 {n:"a",re:/(trabaj\w*\s+desde\s+casa|\bdesde\s+casa)\W+(\w+\W+){0,6}(dinero|ingresos?|gana\w*|sueldo|extra|oportunidad|negocio|proyecto|equipo|vend\w+|emprend\w*|libertad|jefe|horarios?)\b|(dinero|ingresos?|gana\w*|sueldo|oportunidad|negocio|proyecto|equipo|vend\w+|emprend\w*|libertad)\W+(\w+\W+){0,6}trabaj\w*\s+desde\s+casa|\btrabaj(a|ar|ando|o)\s+desde\s+casa\s+(y\s+)?(gana|cobra|vende)\w*|(trabaj|gan|cobr|factur|vend|ingres)\w*(\s+\w+){0,3}\s+desde\s+(el\s+)?(sofa|movil)/,t:"Ingresos / trabajo desde casa",alt:"compatibilizar un proyecto con tu día a día",l:"alto"},
 {n:"a",re:/\bgana(r|s|ndo|mos|d)?\b\s+(dinero|pasta|euros|un\s+sueldo|plata)|dinero\s+extra|dinero\s+facil|sueldo\s+extra|\bingresos?\b|\bsueldo\b|\b(vas\s+a|voy\s+a|podras|puedes|poder|empieza(s)?\s+a|para)\s+cobrar\b|\bcobrar\s+(un|mas|mucho|dinero|por\s+(recomendar|vender|invitar)|comisi\w*)|\bfacturar\s+(mas|mucho|miles|\d|dinero|euros|al\s+(mes|ano)|cada)|\bfacturacion\b/,t:"Promesas de dinero o ingresos",alt:"no hables de dinero: habla de proyecto, formación y comunidad",l:"alto"},
 {n:"a",re:/libertad\s+(financiera|economica)|independencia\s+(financiera|economica)|renta\s+pasiva|ingresos?\s+pasivos?/,t:"Libertad financiera / ingresos pasivos",alt:"flexibilidad de horarios, proyecto propio, comunidad",l:"alto"},
 {n:"a",re:/(se|s[eé])\s+tu\s+propi[oa]\s+jef[ea]|tu\s+propio\s+jefe|sin\s+jefe/,t:"«Sé tu propio jefe»",alt:"un proyecto a tu ritmo",l:"alto"},
 {n:"a",re:/\bdeja\s+(tu|el)\s+(trabajo|empleo)\b(?!\s+en\s+la\s+puerta)|\b(renuncia|abandona)\w*\s+(a\s+)?(tu|el)\s+(trabajo|empleo)|\b(puedes|podras|permite\w*|para\s+poder)\s+dejar\s+(tu|el)\s+(trabajo|empleo)\b(?!\s+en\s+la\s+puerta)|\bdeje\s+(mi|el)\s+(trabajo|empleo)|\bdejar\s+(tu|el)\s+(trabajo|empleo)\s+(y|para\s+(vivir|dedicarte))/,t:"Dejar el trabajo",alt:"compaginar un proyecto con tu vida",l:"alto"},
 {n:"a",re:/sin\s+(invertir|inversion|riesgo)|sin\s+experiencia\s+ni\s+(inversion|conocimientos|estudios|horarios|esfuerzo|capital|riesgo)|sin\s+horarios\s+ni\s+(jefes?|obligaciones|compromisos)|(resultados?|dinero|ingresos?|ventas|vender|ganar|proyecto|negocio|piel|peso|kilos)\W+(\w+\W+){0,4}sin\s+esfuerzo|sin\s+esfuerzo\W+(\w+\W+){0,4}(resultados?|dinero|ventas|ingresos?|kilos)|garantizad[oa]s?|garantizamos|resultados?\s+(asegurad|garantizad)|100\s*%\s*(seguro|efectiv)/,t:"Garantías o «sin esfuerzo»",alt:"cada persona es distinta; cuéntalo sin prometer resultados",l:"alto"},
 {n:"a",re:/perdida\s+de\s+peso|perd(er|ido|iendo|i)\s+(\d+\s*)?(kilos|kg|peso)|bajar\s+de\s+peso|adelgaz\w*|\bkilos?\b|\bkgs?\b|quemagrasas?|quemar\s+(la\s+)?grasa|\bmichelin\b|\bflacidez\b|\bgrasa\s+(corporal|abdominal|localizada|acumulada)|\b(perder|pierde|eliminar|elimina|reducir|reduce|quitar|quita|deshacerte\s+de|adios\s+a)\s+(la\s+|tu\s+)?grasa|\bgrasa\s+de\s+(la\s+)?(barriga|cintura|tripa)|reducir\s+(tallas?|medidas)|bajar\s+(\d+\s+)?tallas?/,t:"Pérdida de peso / cuerpo",alt:"hábitos, rutina, bienestar, cómo te sientes",l:"alto"},
 {n:"a",re:/antes\s*(y|\/)\s*despu[eé]s(?!\s+de\s+(la|el|los|las|usar|aplicar|maquill\w*|peinar\w*|plancha\w*|secar\w*|ducha|banar\w*|dormir|comer|cenar|desayunar|entrenar))|transformacion\s+(fisica|corporal)|resultados?\s+en\s+\d+\s+(dias|semanas)|en\s+\d+\s+(dias|semanas)\s+(veras|notaras|conseguiras)/,t:"Antes/después o resultados en X tiempo",alt:"cuenta tu rutina, no un resultado",l:"alto"},
 {n:"a",re:/\bcura(r|s|n)?\b|\bsana(r)?\b\s+(tu|la|el)|previene|\btrata(r)?\s+(la|el|tu)|\bdiabetes\b|\bcolesterol\b|(contra|calmar?|quitar?|aliviar?|reducir?|combatir?|tratar?|curar?)\w*\s+(la\s+|tu\s+|mi\s+)?ansiedad|\bansiedad\s+(y|o)\s+(depresion|estres|insomnio)|\bsufr\w+\s+(de\s+)?ansiedad|\bdepresi\w+|\bcancer\b|\btiroides\b|\binsomnio\b|\bhipertension\b|\bhormonal(es)?\b|\binflamaci\w+/,t:"Alegaciones de salud o enfermedad",alt:"habla de hábitos y bienestar, nunca de enfermedades",l:"alto"},
 {n:"a",re:/\b(eres|soy|estas|estoy|estes|estar|ser|te\s+ves|me\s+veo|te\s+sientes|me\s+siento|pareces|parezco)\s+(muy\s+|tan\s+|un\s+poco\s+|mas\s+)?(gord[oa]s?|flac[oa]s?|fe[oa]s?)\b|\bobes[oa]s?\b|sobrepeso|tienes\s+(barriga|complejos?)|asquerosa/,t:"Atributos personales / cuerpo (Meta los prohíbe)",alt:"habla de lo que se hace, no de cómo es la persona",l:"alto"},
 {n:"a",re:/\bcomisi\w+|\bbonos?\b|\bbonus\b|capturas?\s+de\s+(pagos?|ingresos?|cobros?)|\b(tu|subir\s+de|alcanzar|nuevo|mi)\s+rango\b|\brangos?\s+(de\s+)?(director|diamante|oro|plata|bronce|esmeralda|platino|vicepresidente|presidente)|\bdiamante\b|\bnivel\s+de\s+ingresos/,t:"Comisiones, bonus, rangos o capturas de pago",alt:"no muestres ni menciones remuneración; habla de formación y comunidad",l:"alto"},
 {n:"a",re:/hazte\s+(rica|millonari\w*)|\bmillonari\w*/,t:"Hacerse rico",alt:"evita cualquier mensaje de riqueza",l:"alto"},
 // medio
 {n:"m",re:/\bmilagro\w*|formula\s+secreta|truco\s+(increible|brutal|definitivo)|\bel\s+secreto\b|locura|increible\b/,t:"Clickbait / sensacionalismo",alt:"algo concreto y real: «mi rutina de 3 pasos»",l:"medio"},
 {n:"m",re:/trabaj\w*\s+desde\s+casa/,t:"Trabajo desde casa",alt:"cuenta tu día a día; si hablas de un proyecto, sin presentarlo como una forma de trabajar",l:"medio"},
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
function hash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function ls(k,v){try{if(v===undefined){const x=localStorage.getItem(k);return x?JSON.parse(x):null}localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}
const norm=t=>t.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");

// ===== mapas derivados de DB (el contenido llega descifrado como JSON) =====
const PROD={},GUIA={};
DB.products.forEach(p=>{PROD[p.id]=p});
DB.guias.forEach(g=>{GUIA[g.id]=g});
// C21: tres guías se fusionaron con otra. Lo que la usuaria guardó en su móvil con el id viejo (contactos, copias de seguridad)
// sigue abriendo la guía nueva: GUIA[id viejo] la devuelve (sin salir al listar) y guiaId() cambia el id donde se guarda o se compara.
const GUIA_ALIAS={"la-rutina-minima":"rutina-noche-tres-pasos","cinco-preguntas-antes-de-empezar":"preguntas-que-dan-apuro","mi-martes-real":"tu-semana-con-tu-nombre"};
const guiaId=id=>Object.prototype.hasOwnProperty.call(GUIA_ALIAS,id)?GUIA_ALIAS[id]:id;
Object.keys(GUIA_ALIAS).forEach(v=>{if(GUIA[GUIA_ALIAS[v]]&&!GUIA[v])Object.defineProperty(GUIA,v,{value:GUIA[GUIA_ALIAS[v]],enumerable:false})});

// ===== utilidades de seguridad para la administración =====
// Solo se aceptan enlaces https:// cuyo dominio esté en esta lista (la misma que valida el build para content/equipo.json)
// o del propio origen. Sin usuario, contraseña ni puerto.
const LINK_HOSTS=["youtube.com","www.youtube.com","m.youtube.com","youtu.be","t.me","chat.whatsapp.com","whatsapp.com","el-despertador-farmasi.mixlr.com","boards.com","academia-farmasi-espana.teachable.com","farmasi.com","www.farmasi.com","linktr.ee","www.facebook.com","open.spotify.com","catalog.farmasius.com","viewer.ipaper.io","catalog.farmasi.pl","drive.google.com","www.canva.com","libertyexpress.com","www.cpxbox.es","casillainternacional.com","www.casilleroenmiamicr.com","www.sandovaldocuments.com","www.deblex.com.ec","tlcargo.net","s2.stephytrackingonline.com","solboxus.com","www.tiktok.com","newsroom.tiktok.com","support.tiktok.com","ads.tiktok.com"];
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
  throw new Error("La imagen es demasiado grande.");
}
const pdfOk=f=>!!f&&f.type==="application/pdf"&&f.size<=3*1024*1024;

// ===== PALABRA CLAVE PROPIA («Escribe la tuya») =====
// Una sola palabra, mayúsculas, solo letras (con Ñ y tildes), máximo 15. Lo que se escribe solo entra por value/textContent o por esc().
const KW_MAX=15;
const kwClean=v=>String(v==null?"":v).normalize("NFC").toUpperCase().replace(/[^\p{Script=Latin}]/gu,"").slice(0,KW_MAX);
const KW_GENERICAS=["info","informacion","mas","quiero","si","yo","ok","precio","link"];
const KW_RIESGO=["dinero","ganar","extra","sueldo","negocio","trabajo","casa","adelgazar","kilos","dieta","detox","gratis","oferta","descuento"];
const KW_EJ_GENERICA="Es muy genérica: elige una palabra concreta que diga lo que van a recibir (NOCHE, REGALOS, ZOOM…).";
// build(k) -> lista de textos (CTA, cierre, pantalla…) tal como saldrían con la palabra k. Avisa, nunca bloquea.
function kwIssues(kw,build){
  const out=[];if(!kw)return out;
  const n=norm(kw),mot=[];
  const base=new Set(scanMeta(build("NOCHE").join("\n")).map(h=>h.t)); // lo que ya dice la plantilla sin la palabra no se le achaca a ella
  scanMeta(kw).concat(scanMeta(build(kw).join("\n")).filter(h=>!base.has(h.t))).forEach(h=>{if(mot.indexOf(h.t)<0)mot.push(h.t)});
  if(mot.length)out.push({k:"meta",mot});
  else if(KW_RIESGO.some(w=>n===w||(w.length>=6&&n.indexOf(w)===0)))out.push({k:"riesgo"});
  if(KW_GENERICAS.indexOf(n)>=0)out.push({k:"generica"});
  return out;
}
function kwWarnHtml(iss,plat){
  if(!iss||!iss.length)return "";
  const red=plat==="tiktok"?"TikTok":"Meta";
  let h="",link=false;
  iss.forEach(i=>{
    if(i.k==="meta"){link=true;h+='<p class="kwm kwm-no"><b>Ojo.</b> '+esc("Esta palabra puede saltarse las normas de "+red+": "+i.mot.join("; ")+". Prueba con otra.")+'</p>'}
    else if(i.k==="riesgo"){link=true;h+='<p class="kwm kwm-no"><b>Riesgo.</b> '+esc("Es una palabra de riesgo: suele relacionarse con dinero, cuerpo o promesas y puede hacer que revisen tu publicación. Prueba con otra.")+'</p>'}
    else if(i.k==="generica")h+='<p class="kwm"><b>Consejo.</b> '+esc(KW_EJ_GENERICA)+'</p>';
  });
  if(link)h+='<button type="button" class="linkb" data-tab="normas">Ver lo que no se dice</button>';
  return h;
}
// Caja «chips + Escribe la tuya». tool identifica la herramienta; chips: lista de palabras; cur: palabra activa; own: texto propio actual.
function kwBoxHtml(tool,label,chips,cur,own,warn,ph){
  const t=esc(tool);
  return '<div class="kwbox"><div class="kwlbl">'+esc(label)+'</div><div class="kws">'+chips.map(k=>'<button type="button" class="chip'+(cur===k?" on":"")+'" data-kwt="'+t+'" data-kwv="'+esc(k)+'" aria-pressed="'+(cur===k)+'">'+esc(k)+'</button>').join("")+'</div>'
  +'<label class="kwown">Escribe la tuya<input type="text" class="kwin" data-kwt="'+t+'" value="'+esc(own||"")+'" placeholder="'+esc(ph||"Por ejemplo: NOCHE")+'" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-describedby="kwh_'+t+'"></label>'
  +'<small class="mut" id="kwh_'+t+'">Una sola palabra, sin espacios ni símbolos. Nunca pongas un enlace. Si es una de las sugeridas, tócala.</small>'
  +'<div class="kwwarn" id="kwwarn_'+t+'" role="status" aria-live="polite">'+(warn||"")+'</div></div>';
}
const KWT={}; // herramienta -> función(kw, esPropia) que guarda la palabra y repinta lo que depende de ella
function kwSyncChips(box,kw){
  if(!box)return;
  box.querySelectorAll("button[data-kwt]").forEach(b=>{const on=b.dataset.kwv===kw;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false")});
}
function kwShowWarn(tool,iss,plat){const w=document.getElementById("kwwarn_"+tool);if(w)w.innerHTML=kwWarnHtml(iss,plat)}
// sustituye una palabra clave por otra en un texto ya montado (solo palabra completa)
function kwSwap(text,from,to){
  if(!from||from===to)return String(text);
  const re=new RegExp("(?<![\\p{L}])"+from.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"(?![\\p{L}])","gu");
  return String(text).replace(re,()=>to);
}
document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button[data-kwt]");if(!b)return;
  const f=KWT[b.dataset.kwt];if(!f)return;
  const box=b.closest(".kwbox"),inp=box&&box.querySelector(".kwin");
  if(inp)inp.value=""; // tocar una sugerencia borra la palabra propia
  kwSyncChips(box,b.dataset.kwv);
  f(b.dataset.kwv,false);
});
document.addEventListener("input",e=>{
  const el=e.target;if(!el||!el.classList||!el.classList.contains("kwin"))return;
  const f=KWT[el.dataset.kwt];if(!f)return;
  const v=kwClean(el.value);if(el.value!==v)el.value=v;
  kwSyncChips(el.closest(".kwbox"),v);
  f(v,true);
});

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
  if(/compra|comprar|pide ya|pedido ya|oferta ya/.test(nv))r.avisos.push("Evita la venta directa en la llamada a la acción: ofrece primero un recurso.");
  r.ok=r.ben&&r.pro&&r.acc&&!r.avisos.length;
  return r;
}

// ===== enlace del vídeo del equipo y copia de seguridad (todo se queda en el móvil) =====
const VIDEO_KEY="ft_video",VIDEO_HOSTS=["youtube.com","www.youtube.com","youtu.be"];
function videoOk(s){
  s=String(s==null?"":s).trim();
  if(!/^https:\/\/[^\s<>"'`\\]{4,280}$/.test(s))return null;
  try{const u=new URL(s);if(u.protocol!=="https:"||u.username||u.password||u.port||VIDEO_HOSTS.indexOf(u.hostname)<0)return null}catch(e){return null}
  return s;
}
const miVideo=()=>{const v=ls(VIDEO_KEY);return typeof v==="string"?videoOk(v):null};
// claves propias de la app (fs_ y ft_); estas se quedan fuera de la copia: datos de versión, restos de acceso, apuntes del propio aviso y la tarjeta de instalar (otro móvil, otra instalación)
const BK_PRE=/^(fs|ft)_[A-Za-z0-9_]{1,60}$/,BK_FUERA=["fs_ver","fs_seen_v","fs_code","fs_ini","fs_copia","fs_inst_ok"];
const BK_MAX_VAL=2000000,BK_MAX_TOT=4000000,BK_MAX_N=200;
const bkClave=k=>BK_PRE.test(k)&&BK_FUERA.indexOf(k)<0&&!/(code|clave|key|pass|token|sesion|session)/i.test(k);
function bkClavesAct(){const r=[];try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(bkClave(k))r.push(k)}}catch(e){}return r.sort()}
function bkHacer(){
  const c={};bkClavesAct().forEach(k=>{try{const v=localStorage.getItem(k);if(typeof v==="string")c[k]=v}catch(e){}});
  return {app:"fam-studio",formato:1,version:String((ls("fs_ver")||{}).v||""),fecha:new Date().toISOString(),claves:c};
}
// comprueba una copia; devuelve {ok:true,claves,fecha,resumen} o {ok:false,msg}
function bkCheck(txt){
  const mal=m=>({ok:false,msg:m});
  let o;try{o=JSON.parse(txt)}catch(e){return mal("Ese archivo no es una copia de Fam Studio.")}
  if(!o||typeof o!=="object"||Array.isArray(o)||o.app!=="fam-studio"||o.formato!==1||!o.claves||typeof o.claves!=="object"||Array.isArray(o.claves))return mal("Ese archivo no es una copia de Fam Studio.");
  const ks=Object.keys(o.claves);let tot=0;
  if(!ks.length||ks.length>BK_MAX_N)return mal("La copia está vacía o no es válida.");
  for(const k of ks){
    const v=o.claves[k];
    if(!bkClave(k))return mal("La copia lleva datos que no son de Fam Studio y no se ha recuperado.");
    if(typeof v!=="string"||v.length>BK_MAX_VAL)return mal("La copia no es válida: hay datos que no se pueden leer.");
    tot+=v.length;try{JSON.parse(v)}catch(e){return mal("La copia no es válida: hay datos que no se pueden leer.")}
  }
  if(tot>BK_MAX_TOT)return mal("La copia es demasiado grande para ser de Fam Studio.");
  if(o.claves[VIDEO_KEY]!==undefined&&!videoOk(JSON.parse(o.claves[VIDEO_KEY])))return mal("La copia lleva un enlace de vídeo que no es de YouTube.");
  const f=new Date(o.fecha);if(isNaN(f))return mal("La copia no tiene una fecha válida.");
  const it=[],has=x=>o.claves[x]!==undefined,usados={};
  const add=(t,...c)=>{if(c.some(has)){it.push(t);c.forEach(x=>usados[x]=1)}};
  add("tu semana","fs_plan_v1");add("tu bio","fs_bio_r","fs_bio_ok");add("tus guiones","ft_guiones");add("tus contactos","fs_contactos");add("lo que te funciona","fs_funciona","fs_fx_cfg");add("tu perfil","ft_perfil");add("tus Beauty Party","fs_bp");add("tu enlace de vídeo",VIDEO_KEY);
  const n=ks.filter(k=>!usados[k]).length;if(n)it.push(n+(n===1?" ajuste":" ajustes"));
  const fin=it.length>1?it.slice(0,-1).join(", ")+" y "+it[it.length-1]:it[0];
  return {ok:true,claves:o.claves,fecha:f,resumen:"Copia del "+f.toLocaleDateString("es-ES",{day:"numeric",month:"long"})+": "+fin};
}
// sustituye lo que hay por la copia; si algo falla, deja las cosas como estaban
function bkAplicar(claves){
  const antes={};bkClavesAct().forEach(k=>{antes[k]=localStorage.getItem(k)});
  try{Object.keys(antes).forEach(k=>localStorage.removeItem(k));Object.keys(claves).forEach(k=>localStorage.setItem(k,claves[k]));return true}
  catch(e){try{bkClavesAct().forEach(k=>localStorage.removeItem(k));Object.keys(antes).forEach(k=>localStorage.setItem(k,antes[k]))}catch(_){}return false}
}
const DIA30=30*864e5;
function bkToca(){
  const c=ls("fs_copia")||{},ini=+ls("fs_ini")||0,ya=Date.now();
  if(c.ult||!ini||ya-ini<DIA30)return false;
  return !(c.no&&ya-c.no<DIA30);
}

// ===== Fam Studio · lo visual (C4): ilustraciones, bienvenida, estados vacíos y movimiento =====
// Todo el dibujo es SVG en línea, de un solo estilo (trazo marrón fino, rellenos crema y un tono cálido), armado con
// piezas que se reutilizan entre dibujos. Los colores van en css_visual.css (clases s, f1, f2, f3, d).
const VIS=(function(){
  const g=(x,y,r,s)=>'<g transform="translate('+x+' '+y+')'+(r?' rotate('+r+')':'')+(s&&s!==1?' scale('+s+')':'')+'">';
 const E='</g>';
 // ---------- piezas (cada una se dibuja desde su esquina superior izquierda, salvo que se diga otra cosa) ----------
 const P={
  // móvil 44 x 80
  phone:(x,y,r,s,inner)=>g(x,y,r,s)+'<rect class="s f3" width="44" height="80" rx="9"/><rect class="s f1" x="5" y="10" width="34" height="58" rx="3"/><path class="s" d="M18 5h8M17 74h10"/>'+(inner||'')+E,
  // trípode: parte de la pinza (0,0) y baja 56
  tripod:(x,y)=>g(x,y)+'<rect class="s f2" x="-9" y="0" width="18" height="8" rx="3"/><path class="s" d="M0 8v14M0 22L-24 56M0 22v36M0 22L24 56"/>'+E,
  // taza 30 x 26 con vapor
  cup:(x,y,r,s)=>g(x,y,r,s)+'<path class="s" d="M5-9c-3-3 3-5 0-9M13-9c-3-3 3-5 0-9"/><path class="s f3" d="M0 0h26v10a13 13 0 0 1-26 0z"/><path class="s" d="M26 4h2.5a5 5 0 0 1 0 11H24"/><path class="s f2" d="M3 3h20v3H3z"/>'+E,
  // libreta cerrada 50 x 66 con goma
  book:(x,y,r,s)=>g(x,y,r,s)+'<rect class="s f2" width="50" height="66" rx="5"/><path class="s" d="M9 0v66"/><rect class="s f1" x="19" y="14" width="22" height="16" rx="2"/><path class="s" d="M19 40h22M19 47h14"/><path class="s f3" d="M38 66v-9l4 3 4-3v9"/>'+E,
  // hoja con líneas 52 x 66
  sheet:(x,y,r,s,ticks)=>g(x,y,r,s)+'<path class="s f3" d="M0 4a4 4 0 0 1 4-4h34l14 14v48a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4z"/><path class="s f1" d="M38 0v10a4 4 0 0 0 4 4h10"/>'+(ticks?'<path class="s" d="M12 26l3 3 5-6M26 27h18M12 40l3 3 5-6M26 41h18M12 54l3 3 5-6M26 55h12"/>':'<path class="s" d="M10 28h32M10 38h32M10 48h20"/>')+E,
  // lápiz: horizontal, de la goma (0,0) a la punta (46,0)
  pencil:(x,y,r,s)=>g(x,y,r,s)+'<path class="s f2" d="M0 -4h6v8H0a3 3 0 0 1 0-8z"/><path class="s f1" d="M6 -4h28v8H6z"/><path class="s f3" d="M34 -4l12 4-12 4z"/><path class="s" d="M43 -1.4l3 1.4-3 1.4"/>'+E,
  // neceser 58 x 38
  bag:(x,y,r,s)=>g(x,y,r,s)+'<rect class="s f2" x="11" y="-14" width="10" height="26" rx="2"/><path class="s f3" d="M11-14a5 5.5 0 0 1 10 0z"/><path class="s" d="M11-3h10"/><rect class="s f3" x="31" y="-3" width="18" height="16" rx="3"/><rect class="s f1" x="29" y="-8" width="22" height="6" rx="2"/><path class="s f2" d="M2 40a2 2 0 0 1-2-2V28C0 16 12 9 29 9s29 7 29 19v10a2 2 0 0 1-2 2z"/><path class="s d" d="M5 24C11 17 20 14 29 14s18 3 24 10"/><circle class="s f3" cx="49" cy="21" r="2.6"/>'+E,
  // maceta con planta, base en (0,0) centrada; sube 56
  plant:(x,y,r,s)=>g(x,y,r,s)+'<path class="s" d="M0-14V-38"/><path class="s f1" d="M0-26c-14 0-18-10-16-18 10 0 17 6 16 18z"/><path class="s f2" d="M0-34c12 0 17-9 15-17-10 0-16 6-15 17z"/><path class="s f2" d="M-15-14h30l-3 14h-24z"/>'+E,
  // candado 26 x 30
  lock:(x,y,r,s)=>g(x,y,r,s)+'<path class="s" d="M5 12V8a8 8 0 0 1 16 0v4"/><rect class="s f2" y="12" width="26" height="18" rx="4"/><circle class="n d1" cx="13" cy="19.5" r="2.4"/><path class="s" d="M13 21v4"/>'+E,
  // calendario 76 x 70
  cal:(x,y,r,s,on)=>{let c='';for(let i=0;i<7;i++){const cx=8+(i%4)*17,cy=30+Math.floor(i/4)*17;c+='<rect class="'+(on===i?'s f2':'s f1')+'" x="'+cx+'" y="'+cy+'" width="13" height="13" rx="3"'+(on===i?'':' stroke-dasharray="2.4 3"')+'/>'}return g(x,y,r,s)+'<rect class="s f3" width="76" height="70" rx="7"/><path class="s f2" d="M0 12v-5a7 7 0 0 1 7-7h62a7 7 0 0 1 7 7v5z"/><path class="s" d="M20-5v10M56-5v10"/>'+c+E},
  // lupa: aro en (0,0) de radio 15, mango hacia abajo-derecha
  lens:(x,y,r,s)=>g(x,y,r,s)+'<circle class="s f3" r="15"/><path class="s" d="M-7-4a8 8 0 0 1 8-6"/><path class="s th" d="M11 11l20 20"/><path class="s th2" d="M11 11l20 20"/>'+E,
  // barras: cuatro columnas de 70 de ancho
  bars:(x,y)=>g(x,y)+'<path class="s" d="M-4 60h78"/><rect class="s f2" x="4" y="26" width="14" height="34" rx="3"/><rect class="s f1" x="24" y="14" width="14" height="46" rx="3" stroke-dasharray="3 3.4"/><rect class="s f1" x="44" y="34" width="14" height="26" rx="3" stroke-dasharray="3 3.4"/>'+E,
  // camino: de (x1,y1) a (x2,y2) con control (cx,cy)
  road:(x1,y1,cx,cy,x2,y2)=>{const d='M'+x1+' '+y1+'Q'+cx+' '+cy+' '+x2+' '+y2;return '<path class="rd0" d="'+d+'"/><path class="rd1" d="'+d+'"/><path class="rd2" d="'+d+'"/>'},
  // sombra en el suelo
  floor:(cx,cy,rx)=>'<ellipse class="n f1" cx="'+cx+'" cy="'+cy+'" rx="'+rx+'" ry="4"/>',
  // plano de guion 28 x 22
  frame:(x,y,n)=>g(x,y)+'<rect class="s f3" width="28" height="22" rx="3"/>'+(n===1?'<circle class="s f2" cx="14" cy="11" r="5"/>':n===2?'<path class="s f2" d="M5 17l6-8 5 5 3-3 5 6z"/>':'<path class="s" d="M6 8h16M6 14h10"/>')+E
 };
 const svg=(vb,inner,lbl)=>'<svg class="il" viewBox="'+vb+'" '+(lbl?'role="img" aria-label="'+lbl+'"':'aria-hidden="true"')+' focusable="false">'+inner+'</svg>';
 // ---------- dibujos ----------
 const D={
  guion:()=>svg('0 0 200 150',P.floor(96,141,66)+P.frame(8,22,1)+P.frame(8,52,2)+P.frame(8,82,3)
   +'<path class="s d" d="M40 33h6M40 63h6M40 93h6"/>'
   +P.tripod(78,92)+P.phone(56,12,0,1,'<path class="s f2" d="M17 26l12 7-12 7z"/>')
   +P.book(120,28,5)+P.cup(152,124,-4)),
  caminos:()=>svg('0 0 200 150',P.floor(100,141,40)
   +P.road(100,136,100,92,52,64)+P.road(100,136,100,92,148,64)
   +'<circle class="s f2" cx="100" cy="138" r="7"/>'
   +P.bag(16,28,-4)+P.plant(158,66)),
  movil:()=>svg('0 0 200 150',P.floor(100,141,50)
   +P.phone(70,8,0,1.4,'')
   +P.lock(86,56,0,1.25)
   +P.cup(20,106,-6)+P.book(150,76,6,.8)),
  semana:()=>svg('0 0 200 150',P.floor(100,141,54)+P.cal(46,24,-2,1.35,2)+P.pencil(132,112,-30)),
  contactos:()=>svg('0 0 200 150',P.floor(100,141,56)
   +'<path class="s f3" d="M100 38c-14-8-34-8-52-2v78c18-6 38-6 52 2z"/><path class="s f1" d="M100 38c14-8 34-8 52-2v78c-18-6-38-6-52 2z"/>'
   +'<path class="s" d="M100 38v78M60 56h28M60 68h28M60 80h20M112 56h28M112 68h28M112 80h18"/>'
   +'<path class="s f2" d="M132 112v22l6-5 6 5v-22z"/>'+P.pencil(150,36,32)),
  funciona:()=>svg('28 26 150 122',P.floor(100,141,56)+P.bars(50,34)+P.plant(150,128,0,.9)),
  busca:()=>svg('0 0 200 150',P.floor(100,141,52)+P.sheet(50,26,-4,1.25)+P.lens(128,86,0,1.15)),
  cab:()=>svg('0 0 110 80',P.floor(55,74,40)+P.book(8,12,-4,.82)+P.cup(70,46,4,.9)+P.sheet(58,8,6,.55))
 };
 // ---------- estados vacíos: dibujo pequeño + frase + botón ----------
 // d: nombre del dibujo; t: frase (ya con esc); b: botón (etiqueta ya con esc) con sus atributos data
 const vacio=(d,t,b)=>'<div class="vacio"><div class="il-s">'+D[d]()+'</div>'+(t?'<p class="vacio-t">'+t+'</p>':'')+(b||'')+'</div>';
 // búsqueda sin resultado: «Borrar la búsqueda» vacía el campo y vuelve a lanzar la búsqueda
 const sinRes=(t,campo)=>vacio("busca",t,'<button type="button" class="btn ghost" data-vis="limpia" data-campo="'+campo+'">Borrar la búsqueda</button>');
 const reducido=()=>{try{return window.matchMedia("(prefers-reduced-motion: reduce)").matches}catch(e){return false}};
 // ---------- movimiento: la entrada de cada pantalla se repite solo al cambiar de pantalla ----------
 function entra(){
  if(reducido())return;
  const m=document.getElementById("main");if(!m)return;
  m.classList.remove("vis-in");void m.offsetWidth;m.classList.add("vis-in");
 }
 document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button[data-vis]");if(!b)return;
  if(b.dataset.vis==="limpia"){const i=document.getElementById(b.dataset.campo);if(i){i.value="";i.dispatchEvent(new Event("input",{bubbles:true}));try{i.focus()}catch(x){}}}
 });
 // la bienvenida de tres pantallas se sustituyó por el tutorial (tutorial.js); estos nombres siguen llevando a él
 return {D,P,vacio,sinRes,pendiente:()=>TUT.pendiente(),abre:()=>TUT.abre(),cierra:()=>TUT.cierra(),entra,reducido};
})();

// ===== Fam Studio · motor de escenas (C10) =====
// Una escena es la maqueta de una pantalla de la app (HTML y CSS propios, a escala, con textos de ejemplo) más una lista de pasos:
//   pg:'id'            pasa a otra maqueta           rot:'1|Texto'   rótulo corto abajo (el número es opcional)
//   cam:['nombre',2]   acerca la cámara a un elemento (cam:0 la devuelve)   hi:'nombre'  lo resalta (hi:0 quita el resaltado)
//   tap:'nombre'       un dedo viaja hasta él y toca; al tocar se aplica c:'nombre|+clase -clase;otro|+clase'
//   ty:['nombre','texto']   el texto se escribe solo      c:…   cambia clases sin dedo (g:ms las escalona)      w:ms   pausa tras el paso
// Los nombres son data-e="…" dentro de la propia escena. Todo es CSS salvo el reloj de pasos, que vive aquí.
// Con movimiento reducido no hay reloj: se ven pasos fijos numerados (cada uno aplica de golpe los pasos hasta justo antes del rótulo siguiente, para que el dibujo salga completo).
// Los dibujos y textos son de este archivo (código propio); nada de lo que se descifra llega aquí.
const ESC=(function(){
const W=300,H=410,NV=30,BZ=8;
const q=(r,s)=>r.querySelector(s),qa=(r,s)=>[...r.querySelectorAll(s)];
const sel=s=>/^[.#\[]/.test(s)?s:'[data-e~="'+s+'"]';
const px=n=>Math.round(n*10)/10+'px';
const HD='<div class="m-hd"><i class="logo m-lg"></i><div><b>FAM STUDIO</b><small>FAM TEAM</small></div></div>';
const PC=x=>'<div class="m-pc">'+x+'</div>';
const P=(x,e,c)=>'<div class="m-p'+(c?' '+c:'')+'"'+(e?' data-e="'+e+'"':'')+'>'+x+'</div>';
const N=(k,t)=>'<h5 class="m-h"><i class="m-n">'+k+'</i>'+t+'</h5>';
const B=(t,e,c)=>'<div class="m-b'+(c?' '+c:'')+'"'+(e?' data-e="'+e+'"':'')+'>'+t+'</div>';
const OP=(t,s,e,c)=>'<div class="m-op'+(c?' '+c:'')+'"'+(e?' data-e="'+e+'"':'')+'><b>'+t+'</b><small>'+s+'</small></div>';
const CH=(t,e,c)=>'<span class="m-ch'+(c?' '+c:'')+'"'+(e?' data-e="'+e+'"':'')+'>'+t+'</span>';
const TT=t=>'<b class="m-t">'+t+'</b>';
const IN=(ph,e)=>'<div class="m-in"'+(e?' data-e="'+e+'"':'')+'><span class="m-tx"></span><span class="m-ph">'+ph+'</span></div>';
const TABS=(on)=>'<div class="m-tb">'+['Stories','Reel','TikTok'].map(x=>'<b class="m-pl'+(x===on?' on':'')+'">'+x+'</b>').join('')+'</div>';
const CK='<svg class="m-ck" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5"/><path d="M7 12.5l3.5 3.5 6.5-7.5"/></svg>';
const IC={
share:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5M8 10H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2"/></svg>',
add:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>',
dots:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle class="fl" cx="12" cy="5" r="1.9"/><circle class="fl" cx="12" cy="12" r="1.9"/><circle class="fl" cx="12" cy="19" r="1.9"/></svg>',
bk:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>',
fw:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>',
book:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5C7 4 10 4 12 6c2-2 5-2 8-.5V19c-3-1.5-6-1.5-8 .5-2-2-5-2-8-.5z"/><path d="M12 6v13.5"/></svg>',
tabs:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="8" width="12" height="12" rx="2.5"/><path d="M8 5h10a2 2 0 0 1 2 2v10"/></svg>'
};
const ICON=n=>'<img class="m-ic" src="icon-192.png" alt="" width="'+n+'" height="'+n+'">';
const NAVT=[["home","Inicio"],["crear","Crear"],["semana","Semana"],["recursos","Recursos"],["equipo","Equipo"],["mas","Más"]];
const WORD=(w)=>'<div class="m-wd">Tu palabra: '+TT(w)+'<u>Cambiar</u></div>';
const CARD=(i,k,t,e)=>P('<h5 class="m-k"><i>'+i+'</i>'+k+'</h5><p class="m-q">'+t+'</p>',e,'m-ap');
const BAR=(t,w,e)=>'<div class="m-bar"><span>'+t+'</span><div><i class="'+w+'" data-e="'+e+'"></i></div></div>';
const REC=(w,tit,lista)=>HD+PC(
P(TT('¿TE HAN ESCRITO UNA PALABRA?')+'<p class="m-s">Escríbela y te sale lo que tienes que mandar, ya sea una guía o la de una situación.</p>'+IN('Por ejemplo: NOCHE','pal'),'','m-fi')
+P('<h5 class="m-k"><span class="m-tg">GUÍA</span></h5><p class="m-q">'+tit+'</p><p class="m-s">Mensaje, mini guía, tarjeta y seguimiento.</p><div class="m-r2">'+B('Copiar mensaje y guía','cop')+B('Ver la guía','','g')+'</div><span class="m-ts" data-e="ts">Mensaje y guía copiados</span>','res','m-ap')
+P('<b class="m-bt">Mis contactos</b><small class="m-s">A quién le mandaste tu guía y cuándo volver a escribirle</small>')
+(lista?P(TT('RECURSOS PARA ENVIAR')+'<div class="m-chs">'+CH('Guías','c1','on')+CH('Qué contestar','c2')+CH('Mensajes del día a día','c3')+'</div>'
+'<div class="m-ls" data-e="ls"><div class="m-lr s1 on"><b>Una noche para ti</b><small>NOCHE · Clientas</small></div><div class="m-lr s1 on"><b>Mi lista de regalos con calma</b><small>NAVIDAD · Clientas</small></div>'
+'<div class="m-lr s2"><b>«Es caro»</b><small>Qué decir cuando te lo dicen</small></div><div class="m-lr s2"><b>«No tengo tiempo»</b><small>Una respuesta corta y amable</small></div>'
+'<div class="m-lr s3"><b>Dar las gracias</b><small>Cuando te compra o te escucha</small></div><div class="m-lr s3"><b>Reactivar a alguien</b><small>Si hace tiempo que no hablas</small></div></div>'):'')
);
const SCR={
crear:()=>HD+PC(TABS('Stories')
+P(N(1,'¿Para quién creas hoy?')+'<div class="m-g2">'+'<div class="m-cd" data-e="cli"><b class="m-t">CLIENTAS</b><small>Vender y recomendar productos</small></div><div class="m-cd" data-e="pro"><b class="m-t">PROYECTO</b><small>Sumar gente al equipo</small></div></div>','p1')
+P(N(2,'Hoy quiero…')+'<p class="m-s">Cada opción cambia el gancho, las stories y el final.</p>'+OP('Llegar a gente nueva','Para quien todavía no te sigue. Terminas pidiendo que te sigan.')+OP('Contar algo mío','Para quien ya te sigue. Cuentas cómo lo hacías y cómo lo haces ahora.')+OP('Recibir mensajes','Das un consejo y regalas tu guía a quien te escriba la palabra.','rec'),'p2')
+P(N(3,'¿De qué hablas hoy?')+'<p class="m-s">Tienes <b>364 situaciones</b> para clientas.</p>'+IN('Busca: noche, café, regalo…')+OP('Hago la lista de regalos con calma','Navidad · Regalos','sit')+OP('Mi café de media mañana','Rutina · Pausa'),'p3')
+B('VER MI GUION','ver')),
res:()=>HD+PC('<p class="m-bk">‹ Cambiar las respuestas</p>'+TABS('Stories')
+'<div class="m-bn">'+TT('3 STORIES · CLIENTAS')+'<small>Recibir mensajes · Hago la lista de regalos con calma</small></div>'+WORD('NAVIDAD')
+CARD(1,'ENGANCHA','¿Ya tienes cinco nombres para tus regalos de Navidad?','r1')
+CARD(2,'CUENTA','Cada año me pilla sin ideas. Este año empiezo ya, con una lista corta.','r2')
+CARD(3,'CIERRA','Comenta NAVIDAD y te mando mi lista.','r3')),
uno:()=>HD+PC('<div class="m-top"><span>‹ Salir</span><b>Story <i data-e="nn">1</i> de 3</b></div><div class="m-pr"><i class="on"></i><i data-e="pr2"></i><i></i></div>'+WORD('NAVIDAD')
+'<p class="m-kk">ESTA STORY SIRVE PARA</p>'+TT('QUE NO PASEN DE LARGO').replace('m-t','m-t m-big')
+'<div class="m-gr"><div class="m-ph2" data-e="foto"><span class="m-fe">Foto de ejemplo</span><span class="m-lb">¿Ya tienes cinco nombres para tus regalos de Navidad?</span><span class="m-bu b1"></span><span class="m-bu b2"></span><span class="m-bu b3">REGALO</span><span class="m-kb"><i></i><i></i><i></i></span></div>'
+'<div class="m-pl2" data-e="plano"><p class="m-kk">EL PLANO</p><b>De frente y sin moverte</b><small>Graba la pantalla de cerca, con el móvil firme. Tapa los nombres y las fotos.</small><span class="m-sb">No hace falta hablar</span></div></div>'
+P('<span class="m-n">1</span><div><p class="m-kk">GRABA</p><p class="m-q">El móvil con una nota abierta y unos nombres escritos.</p></div>','st1','m-st')
+P('<span class="m-n">2</span><div><p class="m-kk">ESCRIBE</p><p class="m-q"><b>¿Ya tienes cinco nombres para tus regalos de Navidad?</b></p></div>','st2','m-st')
+P('<span class="m-n">3</span><div><p class="m-kk">DI</p><p class="m-q">Solo el texto: no hace falta que hables.</p></div>','st3','m-st')
+'<div class="m-sg"><span class="m-b g">ANTERIOR</span><b>1 de 3</b>'+B('SIGUIENTE','sig')+'</div>'),
dm:()=>'<div class="m-dm"><div class="m-dh"><span class="m-ib">'+IC.bk+'</span><i class="m-av">A</i><b>Ana</b></div><div class="m-dc"><span class="m-bb m-ap" data-e="bub">NAVIDAD</span><span class="m-ty m-ap" data-e="ty"><i></i><i></i><i></i></span></div></div>',
rec:()=>REC('NAVIDAD','Mi lista de regalos con calma',0),
rec2:()=>REC('NOCHE','Una noche para ti',1),
mg:()=>HD+PC(TT('TU MINI GUÍA')+'<p class="m-s">Se manda en páginas, como una presentación.</p><div class="m-vw"><div class="m-trk" data-e="trk">'
+'<div class="m-mp c"><small>MINI GUÍA</small><b class="m-t">MI LISTA DE REGALOS CON CALMA</b><span>Fam Team</span></div>'
+'<div class="m-mp"><i class="m-n">1</i><b class="m-t">APUNTA CINCO NOMBRES</b><span>Los que seguro vas a regalar.</span></div>'
+'<div class="m-mp"><i class="m-n">2</i><b class="m-t">UNA IDEA PARA CADA UNO</b><span>Una línea al lado de cada nombre.</span></div>'
+'<div class="m-mp d"><i class="m-n">3</i><b class="m-t">EMPIEZA POR LO CLARO</b><span>Lo difícil, al final y sin prisa.</span></div></div></div>'
+'<div class="m-dts" data-e="dts"><i class="on"></i><i></i><i></i><i></i></div>'+B('Descargar las páginas','','g')),
sem:()=>HD+PC(P('<h5 class="m-t m-c">SEMANA</h5><p class="m-c m-ew">ESTA SEMANA</p><p class="m-c m-s">del 9 nov al 15 nov</p><div class="m-dys" data-e="dys">'
+['L 9','M 10','X 11','J 12','V 13','S 14','D 15'].map((d,i)=>'<div class="m-dy'+(i===5?' hoy':'')+'"><b>'+d.split(' ')[0]+'</b><span>'+d.split(' ')[1]+'</span><i class="m-ev '+['c','p','c','','c','p',''][i]+'" data-e="ev'+i+'"></i></div>').join('')
+'</div><p class="m-lg2"><i class="c"></i>Clientas <i class="p"></i>Proyecto</p>'+B('CREAR MI SEMANA RÁPIDA','rap'))
+'<div class="m-g2"><span class="m-b g sm" data-e="bf">Lo que te funciona</span><span class="m-b g sm">Mis números</span></div>'),
obj:()=>HD+PC(P('<p class="m-k2">TU SEMANA</p><div class="m-dt" data-e="dt"><i class="on"></i><i class="on"></i><i data-e="d3"></i></div>'
+'<p class="m-hdt"><span class="m-v1" data-e="v1">Llevas 2 de 3 publicaciones esta semana</span><span class="m-v2" data-e="v2">'+CK+'Objetivo cumplido: 3 publicaciones esta semana</span></p>'
+'<p class="m-s m-fr" data-e="fr">Tres a la semana ya se nota. Sigue así.</p>'
+'<div class="m-ob"><span>Tu objetivo, a la semana</span><span class="m-pm"><b>−</b><b class="m-nu">3</b><b>+</b></span></div>'+B('Ver mi semana','','g'),'ob','m-o0')),
fun:()=>HD+PC(P('<p class="m-k2">LO QUE TE FUNCIONA</p><p class="m-hdt">6 publicaciones apuntadas</p>','')
+P(TT('SEGÚN PARA QUÉ PUBLICAS')+'<p class="m-s m-fr">Cuando publicas para «Recibir mensajes» te escriben más que con «Contar algo mío».</p>'
+BAR('Recibir mensajes','w9','b1')+BAR('Llegar a gente nueva','w6','b2')+BAR('Contar algo mío','w4','b3'),'fb')),
preg:()=>HD+PC(P(TT('¿CUÁNTAS PERSONAS TE ESCRIBIERON?')+'<p class="m-s">Publicaste «Mi lista de regalos» ayer. Apúntalo en dos toques.</p><div class="m-chs">'
+CH('Ninguna')+CH('1 o 2')+CH('3 a 5','q3')+CH('Más de 5')+CH('No lo sé')+'</div>','pq')+P('<p class="m-k2">LO QUE TE FUNCIONA</p><p class="m-hdt">5 publicaciones apuntadas</p><p class="m-s">Con seis apuntadas te digo qué te trae más mensajes.</p>')),
ap:()=>HD+PC(P(TT('¿A QUIÉN SE LA MANDAS?')+'<p class="m-s">Escribe solo un nombre o un alias. Nada de teléfonos.</p>'+IN('Un nombre o un alias','nm')+B('Apuntar','apu'),'cn','m-fi')),
ls:()=>HD+PC(P(TT('MIS CONTACTOS')+'<p class="m-s">A quién le mandaste tu guía y cuándo volver a escribirle.</p>')
+P('<div class="m-ct"><i class="m-av">M</i><div><b>Marta</b><small>Mi lista de regalos con calma</small></div><span class="m-tg" data-e="est">Guía enviada</span></div>','mt','m-ap')
+P('<div class="m-ct"><i class="m-av">L</i><div><b>Lucía</b><small>Una noche para ti</small></div><span class="m-tg ok">Es clienta</span></div>')
+P('<div class="m-ct"><i class="m-av">S</i><div><b>Sofía</b><small>Primeros pasos</small></div><span class="m-tg">Le interesa el proyecto</span></div>')),
hoy:()=>HD+PC(P('<p class="m-k2">HOY TE TOCA</p><p class="m-hdt" data-e="hh">Escríbele a Marta</p><p class="m-s">Le mandaste la guía hace 2 días.</p><div class="m-msg">Hola Marta, ¿pudiste ver la guía que te mandé? Si te surge alguna duda, dime.</div><div class="m-r2">'+B('Copiar mensaje','')+B('Hecho','hec','g')+'</div>','hoy')),
bio:()=>HD+PC(P(TT('TU BIO DE INSTAGRAM')+'<p class="m-s">Tu bio es lo primero que lee quien llega por un reel. Dice quién eres, de qué hablas y qué hacer ahora.</p>')
+P(TT('PREGUNTAS PARA TU BIO')+'<p class="m-s">Contesta con calma. Al final te preparo seis bios para que elijas.</p>'+N(1,'¿PARA QUIÉN PUBLICAS?').replace('m-h','m-h m-an')+'<div class="m-chs">'+CH('Para clientas','b1')+CH('Para mi proyecto')+CH('Para las dos cosas')+'</div>'
+N(2,'¿DE QUÉ HABLAS?').replace('m-h','m-h m-an')+'<div class="m-chs">'+CH('Maquillaje rápido','b2')+CH('Cuidado de la piel')+CH('Rutinas con prisa')+'</div>','bq')),
bios:()=>HD+PC(P(TT('ELIGE TU BIO')+'<p class="m-s">Seis bios hechas con tus respuestas. Toca la que más se parezca a ti.</p>','')
+'<div class="m-bs"><div class="m-bi m-ap" data-e="o1">Maquillaje rápido para ir con prisa.<br>Rutinas fáciles, desde Sevilla.<br>Escríbeme RUTINA y te mando mi guía.</div>'
+'<div class="m-bi m-ap" data-e="o2">Madre de dos y con el tiempo justo.<br>Maquillaje rápido para ir con prisa. Desde Sevilla.<br>Escríbeme RUTINA y te mando mi guía.</div>'
+'<div class="m-bi m-ap" data-e="o3">¿Sin tiempo para maquillarte?<br>Te enseño looks de cinco minutos.<br>Comenta RUTINA y te mando mi guía.</div></div>'
+P('<p class="m-k2">TU BIO ESTÁ LISTA</p><div class="m-cnt"><b data-e="cn">142</b> / 150</div><div class="m-bar2"><i data-e="bcn"></i></div>'+B('Copiar mi bio','cb'),'ok','m-ap')),
web:()=>'<div class="m-wb"><div class="m-wh">'+HD+'</div>'+PC(P(TT('AQUÍ TIENES QUÉ PUBLICAR CADA DÍA')+'<p class="m-s">Eliges para quién, qué quieres hoy y de qué hablas.</p>')+P('<p class="m-s">Tu guion, hecho.</p>'))+'</div>'
+'<div class="m-sf"><div class="m-url">famstudio</div><div class="m-ico"><span>'+IC.bk+'</span><span>'+IC.fw+'</span><span data-e="sh">'+IC.share+'</span><span>'+IC.book+'</span><span>'+IC.tabs+'</span></div></div>'
+'<div class="m-dim" data-e="dim"></div><div class="m-sh" data-e="sheet"><i class="m-gp"></i><div class="m-sht">'+ICON(40)+'<div><b>Fam Studio</b><small>famstudio · Opciones &gt;</small></div></div><div class="m-sha"><div class="m-shl" data-e="shl">'
+['Copiar','Añadir a marcadores','Añadir a favoritos','Buscar en la página','Añadir a pantalla de inicio','Marcar','Imprimir'].map((t,i)=>'<div class="m-sr'+(i===4?'" data-e="ah':'')+'"><span>'+t+'</span>'+(i===4?IC.add:'<i></i>')+'</div>').join('')+'</div></div></div>',
anad:()=>'<div class="m-ad"><div class="m-adh"><span>Cancelar</span><b>Añadir a pantalla de inicio</b><span class="m-az" data-e="aa">Añadir</span></div><div class="m-adb">'+ICON(60)+'<div><b>Fam Studio</b><small>famstudio</small></div></div><p class="m-s">Se añadirá un icono a tu pantalla de inicio para que puedas abrir este sitio rápidamente.</p></div>',
inicio:()=>'<div class="m-hs"><div class="m-gi">'+'<i></i>'.repeat(11)+'<span class="m-fs" data-e="fs">'+ICON(54)+'<small>Fam Studio</small></span></div></div>',
aweb:()=>'<div class="m-cb"><div class="m-cu"><div class="m-url">famstudio</div><span class="m-ib">'+IC.tabs+'</span><span class="m-ib m-dd" data-e="dd">'+IC.dots+'</span></div></div>'
+'<div class="m-wb">'+HD+PC(P(TT('AQUÍ TIENES QUÉ PUBLICAR CADA DÍA')+'<p class="m-s">Eliges para quién, qué quieres hoy y de qué hablas.</p>')+P('<p class="m-s">Tu guion, hecho.</p>'))+'</div>'
+'<div class="m-mn" data-e="menu">'+['Nueva pestaña','Nueva pestaña de incógnito','Historial','Descargas','Marcadores','Instalar aplicación','Compartir…','Buscar en la página'].map((t,i)=>'<div class="m-mr'+(i===5?'" data-e="ins':'')+'">'+t+'</div>').join('')+'</div>'
+'<div class="m-dim" data-e="dim"></div><div class="m-dg" data-e="dlg"><b>¿Instalar aplicación?</b><div class="m-dgb">'+ICON(36)+'<div><b>Fam Studio</b><small>famstudio</small></div></div><div class="m-dga"><span>Cancelar</span><span class="m-dgi" data-e="idg">Instalar</span></div></div>',
caminos:()=>{const R=(d,e)=>'<g class="m-rd" data-e="'+e+'"><path class="rd0" pathLength="1" d="'+d+'"/><path class="rd1" pathLength="1" d="'+d+'"/><path class="rd2" d="'+d+'"/></g>';
return '<div class="m-cm"><i class="m-blob"></i><svg class="il m-sv" viewBox="0 0 300 410" aria-hidden="true">'+VIS.P.floor(150,383,64)+R('M150 352C150 304 146 250 94 186','rl')+R('M150 352C150 304 154 250 206 186','rr')+'<g class="m-sp"><circle class="s f2" cx="150" cy="356" r="22"/><circle class="n f3" cx="150" cy="356" r="16.5"/><text class="m-ft" x="150" y="363" text-anchor="middle">FT</text></g></svg>'
+'<div class="m-dst d1" data-e="dl"><svg class="il" viewBox="-6 -20 70 62" aria-hidden="true">'+VIS.P.bag(0,0,0,1)+'</svg>'+TT('CLIENTAS')+'<small>Vender y recomendar productos</small></div>'
+'<div class="m-dst d2" data-e="dr"><svg class="il" viewBox="-22 -58 44 62" aria-hidden="true">'+VIS.P.plant(0,0,0,1)+'</svg>'+TT('PROYECTO')+'<small>Sumar gente al equipo</small></div>'
+'<span class="m-nm" data-e="nm">No se mezclan</span></div>'},
movil:()=>'<div class="m-cm"><i class="m-blob"></i><svg class="il m-sv" viewBox="0 0 300 410" aria-hidden="true">'+VIS.P.floor(150,388,70)+VIS.P.phone(94,92,0,2.6,'')
+'<g class="m-ls2"><rect class="n f1" x="114" y="122" width="72" height="9" rx="4.5" data-e="l1"/><rect class="n f1" x="114" y="140" width="52" height="9" rx="4.5" data-e="l2"/><rect class="n f1" x="114" y="158" width="64" height="9" rx="4.5" data-e="l3"/><rect class="n f1" x="114" y="176" width="44" height="9" rx="4.5" data-e="l4"/></g>'
+'<g class="m-lk" data-e="lk"><circle class="m-rg" cx="150" cy="232" r="30"/><path class="s m-sh2" d="M139 226v-6a11 11 0 0 1 22 0v6"/><rect class="s f2" x="132" y="226" width="36" height="26" rx="5"/><circle class="n d1" cx="150" cy="237" r="3.3"/><path class="s" d="M150 240v6"/></g></svg>'
+'<span class="m-cp c1" data-e="k1">Tu semana</span><span class="m-cp c2" data-e="k2">Tus contactos</span><span class="m-cp c3" data-e="k3">Tu bio</span><span class="m-cp c4" data-e="k4">Tus números</span></div>'
};
const SC={
caminos:{dv:'no',pan:[['caminos','']],P:[
{rot:'Dos caminos, uno para cada cosa',w:700},
{c:'rl rr|+in',w:1100},
{cam:['dl',1.35,.55],c:'dl|+in',rot:'1|Clientas: recomendar productos',w:2000},
{cam:['dr',1.35,.55],c:'dr|+in',rot:'2|Proyecto: sumar gente al equipo',w:2000},
{cam:0,c:'nm|+in',rot:'Cada uno por su camino, sin mezclar',w:2400}]},
crear:{dv:'',pan:[['crear','crear'],['res','crear']],P:[
{w:1000},
{rot:'1|Elige para quién creas',cam:['p1',1.45],w:900},
{tap:'cli',c:'cli|+on',w:500},
{rot:'2|Elige «Hoy quiero…»',cam:['p2',1.35],w:900},
{tap:'rec',c:'rec|+on',w:500},
{rot:'3|Elige de qué hablas',cam:['p3',1.35],w:900},
{tap:'sit',c:'sit|+on',w:500},
{rot:'Y toca «Ver mi guion»',cam:['ver',1.7,.55],w:700},
{tap:'ver',c:'ver|+dn',w:300},
{pg:1,cam:0,w:500},
{c:'r1 r2 r3|+in',g:520,rot:'Ya tienes el guion, hecho',w:2400}]},
uno:{dv:'',pan:[['uno','crear']],P:[
{w:1000},
{rot:'1|La foto te enseña cómo se ve',cam:['foto',1.7,.42],hi:'foto',w:2000},
{rot:'2|«El plano»: cómo poner el móvil',cam:['plano',1.9,.4],hi:'plano',w:2200},
{rot:'3|Graba lo que ves…',cam:['st1',1.45,.4],hi:'st1',w:1700},
{rot:'4|…escribe el texto en pantalla…',cam:['st2',1.45,.4],hi:'st2',w:1700},
{rot:'5|…y di lo que cuentas',cam:['st3',1.45,.4],hi:'st3',w:1700},
{hi:0,rot:'Luego, a la siguiente story',cam:['sig',1.7,.55],w:500},
{tap:'sig',c:'sig|+dn;pr2|+on;nn|=2',w:1600}]},
mandas:{dv:'',pan:[['dm','-'],['rec','recursos'],['mg','recursos']],P:[
{rot:'Te escriben la palabra',w:500},
{c:'bub|+in',w:900},{c:'ty|+in',w:900},
{pg:1,rot:'1|Escríbela en Recursos',cam:['pal',1.5,.35],w:500},
{ty:['pal','NAVIDAD'],w:500},
{c:'res|+in',rot:'2|Sale la guía: copia el mensaje',cam:['res',1.4,.4],w:1100},
{tap:'cop',c:'cop|+dn;ts|+in',w:1400},
{pg:2,cam:0,rot:'3|Y le mandas la mini guía',w:1300},
{c:'trk|--x=-200px;dts|+f1',w:1100},{c:'trk|--x=-400px;dts|+f2',w:1100},{c:'trk|--x=-600px;dts|+f3',w:1900}]},
semana:{dv:'',pan:[['sem','semana'],['obj','home'],['fun','semana']],P:[
{w:1000},
{rot:'1|Crea tu semana rápida',cam:['rap',1.5,.5],w:700},
{tap:'rap',c:'rap|+dn',w:300},
{cam:0,c:'ev0 ev1 ev2 ev4 ev5|+f',g:230,rot:'2|La app la reparte por días',w:1700},
{pg:1,rot:'3|Marca lo que publicas y tu objetivo se llena',cam:['dt',1.5,.3],w:600},
{c:'d3|+on',w:1000},{c:'ob|+cum',cam:['ob',1.2,.4],w:2200},
{pg:2,cam:0,rot:'4|«Lo que te funciona» te dice qué te trae más mensajes',w:500},
{c:'b1 b2 b3|+in',g:260,cam:['fb',1.3,.4],w:2400}]},
funciona:{dv:'',pan:[['preg','home'],['fun','semana']],P:[
{w:1000},
{rot:'1|Al día siguiente te pregunta cuántas te escribieron',cam:['pq',1.35,.38],w:1200},
{tap:'q3',c:'q3|+on',w:900},
{pg:1,cam:0,rot:'2|Con seis apuntadas, te dice qué te trae más mensajes',w:700},
{c:'b1 b2 b3|+in',g:260,cam:['fb',1.3,.4],w:2600}]},
contactos:{dv:'',pan:[['ap','recursos'],['ls','recursos'],['hoy','home']],P:[
{w:1000},
{rot:'1|Apunta a quién se la mandas',cam:['cn',1.35,.4],w:800},
{ty:['nm','Marta'],w:400},{tap:'apu',c:'apu|+dn',w:400},
{pg:1,cam:0,w:300},{c:'mt|+in',rot:'2|Cada contacto tiene su estado',cam:['mt',1.5,.4],hi:'est',w:2300},
{pg:2,hi:0,cam:0,rot:'3|A los 2 días, te avisa para escribirle',w:900},
{cam:['hoy',1.3,.4],w:900},{tap:'hec',c:'hec|+on;hoy|+hecho',w:2000}]},
bio:{dv:'',pan:[['bio','home'],['bios','home']],P:[
{w:1000},
{rot:'1|Contesta unas preguntas cortas',cam:['bq',1.3,.55],w:900},
{tap:'b1',c:'b1|+on',w:500},{tap:'b2',c:'b2|+on',w:600},
{pg:1,cam:0,rot:'2|Te prepara seis bios para elegir',w:500},
{c:'o1 o2 o3|+in',g:300,w:900},
{tap:'o2',c:'o2|+on',rot:'3|Toca la que más se parezca a ti',w:700},
{c:'ok|+in',cam:['ok',1.4,.45],rot:'4|Copia tu bio y pégala en tu perfil',w:900},
{c:'bcn|+f',w:900},{tap:'cb',c:'cb|+dn',w:1900}]},
recursos:{dv:'',pan:[['rec2','recursos']],P:[
{w:1000},
{rot:'1|Escribe la palabra que te han mandado',cam:['pal',1.5,.35],w:600},
{ty:['pal','NOCHE'],w:400},
{c:'res|+in',cam:['res',1.3,.4],w:1500},
{cam:['c1',1.25,.3],rot:'2|O elige una lista: guías…',w:900},
{tap:'c2',c:'c1|-on;c2|+on;ls|+l2',rot:'…qué contestar cuando te dicen…',w:1300},
{tap:'c3',c:'c2|-on;c3|+on;ls|-l2 +l3',rot:'…o mensajes del día a día',w:2000}]},
movil:{dv:'no',pan:[['movil','']],P:[
{rot:'Todo lo que apuntas…',w:500},
{w:500},{c:'k1|+out',w:800},{c:'l1|+in;k2|+out',w:800},{c:'l2|+in;k3|+out',w:800},{c:'l3|+in;k4|+out',w:800},{c:'l4|+in',w:400},
{c:'lk|+in',rot:'…se guarda aquí, en tu móvil',cam:['lk',1.9,.42],w:1900},{cam:0,w:300},
{rot:'Sin cuentas: nadie más lo ve',w:2600}]},
ios:{dv:'ios',pan:[['web',''],['anad',''],['inicio','']],P:[
{w:1000},
{rot:'1|Toca el botón de compartir',cam:['sh',1.9,.75],hi:'sh',w:1300},
{tap:'sh',c:'dim|+in;sheet|+up',cam:0,hi:0,w:1100},
{rot:'2|Baja por la lista',cam:['sheet',1.2,.55],c:'shl|--y=-84px',w:1600},
{rot:'3|Toca «Añadir a pantalla de inicio»',hi:'ah',w:900},
{tap:'ah',w:300},
{pg:1,rot:'4|Toca «Añadir»',cam:['aa',1.8,.2],hi:'aa',w:900},
{tap:'aa',w:300},
{pg:2,cam:0,hi:0,fi:0,c:'fs|+in',rot:'Ya la tienes en tu pantalla',w:2800}]},
android:{dv:'and',pan:[['aweb',''],['inicio','']],P:[
{w:1000},
{rot:'1|Toca los tres puntos',cam:['dd',2.0,.2],hi:'dd',w:1300},
{tap:'dd',c:'menu|+in',cam:0,hi:0,w:900},
{rot:'2|Elige «Instalar aplicación»',hi:'ins',cam:['menu',1.3,.4],w:1000},
{tap:'ins',c:'menu|-in;dim|+in;dlg|+in',cam:0,hi:0,w:600},
{rot:'3|Toca «Instalar»',hi:'idg',w:1000},
{tap:'idg',c:'dlg|-in;dim|-in',hi:0,w:400},
{pg:1,fi:0,c:'fs|+in',rot:'Ya la tienes en tu pantalla',w:2800}]}
};
const NOMBRES={caminos:'los dos caminos',crear:'Crear',uno:'Ver una a una',mandas:'lo que mandas',semana:'Semana',funciona:'Lo que te funciona',contactos:'Mis contactos',bio:'Tu bio',recursos:'Recursos',movil:'tu móvil',ios:'instalar en iPhone',android:'instalar en Android'};
const reducido=()=>VIS.reducido();
const wait=(S,ms)=>{if(S.ni)return Promise.resolve();const g=S.gen;return new Promise(ok=>setTimeout(()=>{if(g!==S.gen||S.dead)return;if(S.pz)S.hold.push(ok);else ok()},ms))};
const centro=el=>{
if(!el.offsetParent&&el.getBBox){const b=el.getBBox();return [b.x+b.width/2,b.y+b.height/2,b.width,b.height]}
let x=0,y=0,e=el;while(e&&!(e.classList&&e.classList.contains('m-pg'))){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent}return [x+el.offsetWidth/2,y+el.offsetHeight/2,el.offsetWidth,el.offsetHeight]};
function camara(S,c,ni){
const {tw,th,fw,fh,k0,off}=S;let s=k0,tx=(fw-tw*s)/2,ty=(fh-66-th*s)/2+fh*.03,sy=c===0||!c?0:(S.sy||0);
S.cur=c;
const el=c&&q(S.cam,sel(c[0]));
if(el){
const vh=H-S.nvh,[cx,cy,ew]=centro(el),ph=S.pg?S.pg.offsetHeight:H;
sy=Math.max(0,Math.min(ph-vh,cy-vh*.5));
const x=off+cx,y=off+cy-sy,fy=c[2]==null?.4:c[2];
for(let z=Math.min(c[1]||1.5,1.5*fw/(tw*k0));z>=1;z-=.04){
s=k0*z;tx=fw/2-x*s;ty=fh*fy-y*s;
if(off){tx=tw*s>=fw?Math.min(0,Math.max(fw-tw*s,tx)):(fw-tw*s)/2;
ty=th*s>=fh-76?Math.min(fh*.05,Math.max(fh-66-th*s,ty)):(fh-66-th*s)/2+fh*.03}
const l=tx+(x-ew/2)*s;if(l>=10&&l+ew*s<=fw-10)break;
}
}
S.sy=sy;
if(ni)S.sc.style.transition='none';
S.sc.style.setProperty('--z',s);S.sc.style.transform='translate('+px(tx)+','+px(ty)+') scale('+s+')';
S.cam.style.setProperty('--sy',px(sy));
if(ni){void S.sc.offsetWidth;S.sc.style.transition=''}
}
function pasa(S,i,ni){
const pgs=qa(S.cam,'.m-pg'),n=pgs[i];if(!n||n===S.pg)return;
pgs.forEach(p=>{if(p.classList.contains('on')){p.classList.remove('on');if(!ni){p.classList.add('out');setTimeout(()=>p.classList.remove('out'),420)}}});
n.classList.add('on');S.pg=n;
const t=n.dataset.tab;qa(S.sc,'.esc-nv b').forEach(b=>b.classList.toggle('on',!!t&&b.dataset.t===t));const nv=q(S.sc,'.esc-nv');if(nv)nv.classList.toggle('off',t==='-');S.scr.classList.toggle('x',t==='-');
S.cam.style.transition='none';S.cam.style.setProperty('--sy','0px');S.sy=0;void S.cam.offsetWidth;S.cam.style.transition=''; // la pantalla nueva empieza arriba
}
function rotulo(S,t){
const r=S.rot;if(!t){r.className='esc-rot';return}
const m=/^(\d+)\|(.*)$/.exec(t);r.innerHTML=(m?'<i>'+m[1]+'</i>':'')+'<span></span>';q(r,'span').textContent=m?m[2]:t;
r.className='esc-rot on';void r.offsetWidth;r.classList.add('sw');
}
function clases(S,c,g,ni){
c.split(';').forEach(par=>{
const [ss,op]=par.split('|');let k=0;
ss.split(' ').forEach(n=>qa(S.cam,sel(n)).forEach(e=>{
const f=()=>op.split(' ').forEach(o=>{
if(o.slice(0,2)==='--'){const [a,b]=o.split('=');e.style.setProperty(a,b)}
else if(o[0]==='+')e.classList.add(o.slice(1));else if(o[0]==='-')e.classList.remove(o.slice(1));
else if(o[0]==='=')e.textContent=o.slice(1);
});
if(g&&!ni)setTimeout(()=>{if(!S.dead)f()},k++*g);else f();
}));
});
}
async function paso(S,p){
const ni=S.ni;
if(p.pg!=null){pasa(S,p.pg,ni);if(p.cam===undefined)camara(S,0,false)}
if(p.rot!==undefined)rotulo(S,p.rot);
if(p.cam!==undefined)camara(S,p.cam,false);
if((p.fi===0||(p.pg!=null&&!p.tap))&&S.fi)S.fi.classList.remove('on');
if(p.hi!==undefined){qa(S.cam,'.e-hi').forEach(e=>e.classList.remove('e-hi'));if(p.hi)[].concat(p.hi).forEach(n=>qa(S.cam,sel(n)).forEach(e=>e.classList.add('e-hi')))}
if(p.ty){const e=q(S.cam,sel(p.ty[0])),t=q(e,'.m-tx');e.classList.add('ty');
if(ni)t.textContent=p.ty[1];else for(let i=1;i<=p.ty[1].length;i++){t.textContent=p.ty[1].slice(0,i);await wait(S,70)}}
const e=p.tap&&!ni&&q(S.cam,sel(p.tap));
if(e){
const f=S.fi,[x0,y0,w0,h0]=centro(e),x=x0+Math.min(w0*.22,40),y=y0+Math.min(h0*.12,10);
if(!f.classList.contains('on')){f.style.transition='none';f.style.transform='translate('+px(x+60)+','+px(y+110)+')';void f.offsetWidth;f.style.transition='';f.classList.add('on')}
f.style.transform='translate('+px(x)+','+px(y)+')';
await wait(S,950);f.classList.add('dn');await wait(S,170);
if(p.c)clases(S,p.c,p.g,ni);
await wait(S,260);f.classList.remove('dn');
}else if(p.c)clases(S,p.c,p.g,ni);
await wait(S,p.w==null?600:p.w);
}
function monta(S){
const d=SC[S.id];
S.cam.innerHTML=d.pan.map((x,i)=>'<section class="m-pg" data-tab="'+x[1]+'">'+SCR[x[0]]()+'</section>').join('')
+'<i class="esc-fi"><b class="tp"></b><svg class="fg" viewBox="0 0 24 48" aria-hidden="true"><path d="M2 12a10 10 0 0 1 20 0v20c0 8-4 14-10 14S2 40 2 32z"/><path class="nl" d="M7 9a5 5 0 0 1 10 0"/></svg></i>';
S.fi=q(S.cam,'.esc-fi');S.pg=null;S.pz=0;S.hold=[];
pasa(S,0,true);rotulo(S,'');S.sy=0;camara(S,0,true);
S.ar.classList.remove('rs');S.host.classList.remove('pz');
}
function arranca(S){
S.run=true;S.gen++;
(async()=>{for(;;){monta(S);S.dv.classList.remove('ent');void S.dv.offsetWidth;S.dv.classList.add('ent');await wait(S,700);
for(const p of S.P)await paso(S,p);await wait(S,2200);S.ar.classList.add('rs');await wait(S,450)}})();
}
function detiene(S){S.run=false;S.gen++;monta(S)}
function fijo(S,k){
S.gen++;S.ni=true;S.host.classList.add('esc-ni');monta(S);
(async()=>{const fin=k+1<S.fr.length?S.fr[k+1]-1:S.P.length-1; // el paso fijo enseña el dibujo ya montado: los pasos de su rótulo y los que lo completan, hasta el rótulo siguiente
for(let i=0;i<=Math.max(fin,S.fr[k]);i++)await paso(S,S.P[i]);
void S.cam.offsetWidth;S.host.classList.remove('esc-ni');S.ni=false;
qa(S.host,'.esc-nn button').forEach((b,j)=>{b.classList.toggle('on',j===k);b.setAttribute('aria-pressed',j===k)})})();
}
function pausa(S){
if(!S.run)return;
S.pz=!S.pz;S.host.classList.toggle('pz',!!S.pz);S.host.setAttribute('aria-pressed',!!S.pz);
if(!S.pz)S.hold.splice(0).forEach(f=>f());
}
const LIVE=new Set();
function montar(host,id,opt){
const d=SC[id];if(!d||host.__e)return;
opt=opt||{};const red=reducido();
const S={id,host,P:d.P,gen:0,dead:false,pz:0,hold:[],ni:false,run:false,fit:!!opt.fit,sy:0};
S.fr=d.P.map((p,i)=>p.rot?i:-1).filter(i=>i>=0);
const caps=d.P.filter(p=>p.rot).map(p=>p.rot.replace(/^\d+\|/,''));
const dv=d.dv,app=dv==='',marco=dv!=='no';S.nvh=app?NV:0;
host.classList.add('esc-host','m');host.__e=S;
host.innerHTML='<div class="esc-ar"><div class="esc-sc"><div class="esc-dv dv-'+(dv||'app')+'"><div class="esc-scr"><div class="esc-cam"></div>'+(marco?'<i class="esc-top"></i>':'')
+(app?'<div class="esc-nv" aria-hidden="true">'+NAVT.map(x=>'<b data-t="'+x[0]+'">'+x[1]+'</b>').join('')+'</div>':'')
+'</div></div></div><div class="esc-rot" aria-hidden="true"></div><span class="esc-pb" aria-hidden="true">En pausa</span></div>'
+(red?'<div class="esc-nn" role="group" aria-label="Pasos">'+S.fr.map((_,i)=>'<button type="button" aria-pressed="false" aria-label="Paso '+(i+1)+': '+caps[i]+'">'+(i+1)+'</button>').join('')+'</div>':'');
S.ar=q(host,'.esc-ar');S.sc=q(host,'.esc-sc');S.scr=q(host,'.esc-scr');S.dv=q(host,'.esc-dv');S.cam=q(host,'.esc-cam');S.rot=q(host,'.esc-rot');
host.classList.toggle('fit',S.fit);host.classList.toggle('red',red);
host.setAttribute('role',red?'group':'button');
host.setAttribute('aria-label',(red?'Pasos de ':'Animación de ')+NOMBRES[id]+'. '+caps.join('. ')+'.'+(red?'':' Toca para pausar o seguir.'));
if(!red){host.tabIndex=0;host.setAttribute('aria-pressed','false')}
S.off=marco?BZ:0;S.tw=W+S.off*2;S.th=H+S.off*2;
S.mide=()=>{
const w=host.clientWidth;if(!w)return;
const fh=S.fit?S.ar.clientHeight:Math.round(w*1.3);if(!S.fit)S.ar.style.height=px(fh);if(!fh)return;
S.fw=w;S.fh=fh;S.k0=Math.min(w*(marco?.86:.96)/S.tw,fh*.8/S.th,1.5);
S.sc.style.width=px(S.tw);S.sc.style.height=px(S.th);
if(S.pg||S.run||S.sy!=null)camara(S,S.cur||0,true);
};
S.mide();
if(window.ResizeObserver){S.ro=new ResizeObserver(()=>{if(!host.isConnected)destruir(host);else S.mide()});S.ro.observe(host)}
host.addEventListener('click',host.__c=e=>{if(!e.target.closest('.esc-nn'))pausa(S)});
host.addEventListener('keydown',host.__k=e=>{if(e.target===host&&(e.key===' '||e.key==='Enter')){e.preventDefault();pausa(S)}});
qa(host,'.esc-nn button').forEach((b,i)=>b.addEventListener('click',()=>fijo(S,i)));
LIVE.add(S);
if(red)fijo(S,0);else if(opt.play===false)monta(S);else arranca(S);
return S;
}
function juega(host,v){const S=host.__e;if(!S||S.ni||reducido())return;if(v&&!S.run)arranca(S);else if(!v&&S.run)detiene(S)}
function destruir(host){
const S=host.__e;if(!S)return;S.dead=true;S.gen++;if(S.ro)S.ro.disconnect();LIVE.delete(S);
host.removeEventListener('click',host.__c);host.removeEventListener('keydown',host.__k);
delete host.__e;delete host.__c;delete host.__k;
}
function limpia(host){destruir(host);host.innerHTML='';host.className='esc-host';['role','aria-label','tabindex','aria-pressed'].forEach(a=>host.removeAttribute(a))}
function scan(root){
LIVE.forEach(S=>{if(!S.host.isConnected)destruir(S.host)});
qa(root||document,'.esc-host[data-esc]').forEach(h=>{if(h.__e||h.closest('details:not([open])'))return;montar(h,h.dataset.esc,{fit:h.classList.contains('fit')})});
}
document.addEventListener('toggle',e=>{
const d=e.target;if(!d||d.tagName!=='DETAILS')return;
if(d.open)scan(d);else qa(d,'.esc-host').forEach(limpia);
},true);
return {montar,scan,destruir,juega,limpia,SC};
})();

// ===== Fam Studio · tutorial de la primera vez e instalación según el móvil (C10) =====
// Seis pantallas a toda pantalla con una escena animada cada una (escenas.js), «Saltar» siempre visible, puntos y «Siguiente».
// Después, el paso de instalar según dónde esté abierta la app. Clave fs_tut: sale una sola vez (también a quien vio la bienvenida antigua, fs_bien).
// «Más › Ver el tutorial otra vez» lo reabre sin tocar nada. La app instalada (standalone) no enseña el paso de instalar.
const TUT=(function(){
const KEY="fs_tut",OK="fs_inst_ok";
const PAG=[
{e:"caminos",t:"Aquí tienes qué publicar cada día",x:"Dos caminos que no se mezclan: Clientas y Proyecto."},
{e:"crear",t:"Tres preguntas y tienes el guion",x:"Eliges para quién, qué quieres hoy y de qué hablas. Y sale tu guion."},
{e:"uno",t:"Grábalo sin pensar",x:"Una story por pantalla: qué grabas, qué escribes y qué dices."},
{e:"mandas",t:"Cuando te escriben, ya sabes qué mandar",x:"Te escriben una palabra y tú mandas el mensaje y la mini guía."},
{e:"semana",t:"Tu semana, organizada",x:"Tu objetivo se llena y «Lo que te funciona» te dice qué repetir."},
{e:"movil",t:"Todo se queda en tu móvil",x:"Sin cuentas: nadie ve lo que apuntas."}
];
function plat(){
try{if(typeof isStandalone==="function"&&isStandalone())return "inst"}catch(e){}
const u=navigator.userAgent||"";
if(/iPhone|iPad|iPod/i.test(u)||(/Macintosh/.test(u)&&(navigator.maxTouchPoints||0)>1)){
return (/CriOS|FxiOS|EdgiOS|OPiOS|OPT\/|GSA\/|DuckDuckGo|Instagram|FBAN|FBAV|MicroMessenger|TikTok|musical_ly|Line\//i.test(u)||!/Safari\//.test(u))?"ios-otro":"ios";
}
if(/Android/i.test(u))return "android";
return "pc";
}
const bip=()=>window.__bip||null;
let bv=null,previo=null,rev=false,ins=false;
const pendiente=()=>!ls(KEY);
const hayInstalar=()=>plat()!=="inst"&&(!rev||!ls(OK));
const hosts=()=>bv?[...bv.querySelectorAll(".bv-p .esc-host")]:[];
function html(){
return '<div class="bv-top"><span class="tt-n" id="tt_n" aria-hidden="true">1 / '+PAG.length+'</span><button type="button" class="bv-saltar" data-vis="saltar">Saltar</button></div>'
+'<div class="bv-pasa" id="bv_pasa" tabindex="-1">'+PAG.map((p,i)=>'<section class="bv-p'+(i?'':' on')+'" aria-label="'+(i+1)+' de '+PAG.length+'"><h2>'+esc(p.t)+'</h2><p>'+esc(p.x)+'</p><div class="esc-host fit" data-esc="'+p.e+'"></div></section>').join("")+'</div>'
+'<div class="bv-pie"><div class="bv-pts" aria-hidden="true">'+PAG.map((p,i)=>'<i'+(i?'':' class="on"')+'></i>').join("")+'</div><button type="button" class="btn big bv-sig" data-vis="sig">Siguiente</button></div>';
}
function abre(revisa){
if(bv)return;
rev=!!revisa;ins=false;previo=document.activeElement;
bv=document.createElement("div");bv.id="bv";bv.setAttribute("role","dialog");bv.setAttribute("aria-modal","true");bv.setAttribute("aria-label","Tutorial de Fam Studio");
bv.innerHTML=html();document.body.appendChild(bv);document.documentElement.classList.add("bv-on");
const pasa=bv.querySelector("#bv_pasa");
pasa.addEventListener("scroll",()=>{clearTimeout(pasa.h);pasa.h=setTimeout(marca,40)},{passive:true});
monta(0);
try{bv.setAttribute("tabindex","-1");bv.focus({preventScroll:true})}catch(e){}
}
const idx=()=>{const p=bv&&bv.querySelector("#bv_pasa");return p?Math.round(p.scrollLeft/Math.max(1,p.clientWidth)):0};
function monta(i){
hosts().forEach((h,j)=>{
if(Math.abs(j-i)<=1){if(!h.__e)ESC.montar(h,h.dataset.esc,{fit:true,play:j===i});else ESC.juega(h,j===i)}
else if(h.__e)ESC.limpia(h);
});
}
function marca(){
if(!bv||ins)return;const i=idx();
bv.querySelectorAll(".bv-pts i").forEach((x,k)=>x.classList.toggle("on",k===i));
bv.querySelectorAll(".bv-p").forEach((x,k)=>x.classList.toggle("on",k===i));
const n=bv.querySelector("#tt_n");if(n)n.textContent=(i+1)+" / "+PAG.length;
const b=bv.querySelector(".bv-sig");b.textContent=i>=PAG.length-1&&!hayInstalar()?"Empezar":"Siguiente";
monta(i);
}
function sig(){
const p=bv.querySelector("#bv_pasa"),i=idx();
if(i>=PAG.length-1){despues();return}
p.scrollTo({left:(i+1)*p.clientWidth,behavior:VIS.reducido()?"auto":"smooth"});if(VIS.reducido())marca();
}
function despues(){if(hayInstalar())instala();else cierra()}
function insHtml(p){
const b=bip(),av=p==="ios-otro"?'<p class="tt-av">Estás en un navegador que no es Safari. Si no te sale «Añadir a pantalla de inicio», abre este mismo enlace en Safari.</p>':"";
const btn=(c,t,a)=>'<button type="button" class="'+c+'" '+a+'>'+t+'</button>';
const ya=btn("btn big","Ya la tengo",'data-vis="fin" data-ya="1"')+btn("btn ghost","Ahora no",'data-vis="fin"');
if(p==="pc")return '<div class="tt-ins"><h2>Mejor en el móvil</h2><p>Fam Studio está pensada para el móvil: ábrela allí con este mismo enlace.</p></div><div class="tt-bt">'+btn("btn big","Seguir",'data-vis="fin"')+'</div>';
if(p==="android"&&b)return '<div class="tt-ins"><h2>Instálala como una app</h2><p>Se abre con su icono y a pantalla completa, sin buscarla en el navegador.</p><div class="esc-host fit" data-esc="android"></div></div><div class="tt-bt">'+btn("btn big","Instalar Fam Studio",'data-ins="go"')+btn("btn ghost","Ya la tengo",'data-vis="fin" data-ya="1"')+btn("btn ghost","Ahora no",'data-vis="fin"')+'</div>';
const a=p==="android";
return '<div class="tt-ins"><h2>'+(a?"Instálala en tu móvil":"Déjala en tu pantalla de inicio")+'</h2><p>'+(a?"Así se abre con su icono, como cualquier app. Son tres toques.":"Cuatro toques y la tienes con su icono, como cualquier app.")+'</p>'+av+'<div class="esc-host fit" data-esc="'+(a?"android":"ios")+'"></div></div><div class="tt-bt">'+ya+'</div>';
}
function instala(){
if(!bv)return;
ins=true;const p=plat();
bv.setAttribute("aria-label","Instalar Fam Studio");
hosts().forEach(h=>ESC.limpia(h));
bv.innerHTML=insHtml(p);
const h=bv.querySelector(".esc-host[data-esc]");
if(h)ESC.montar(h,h.dataset.esc,{fit:true});
try{bv.focus({preventScroll:true})}catch(e){}
}
function cierra(){
if(!bv)return;
const primera=!ls(KEY);
ls(KEY,1);if(!ls("fs_ini"))ls("fs_ini",Date.now());
bv.querySelectorAll(".esc-host").forEach(h=>ESC.destruir(h));
const x=bv;bv=null;ins=false;document.documentElement.classList.remove("bv-on");
if(VIS.reducido()){x.remove()}else{x.classList.add("bv-out");setTimeout(()=>x.remove(),220)}
try{if(previo&&previo.focus&&document.contains(previo))previo.focus({preventScroll:true})}catch(e){}
if(primera&&typeof S!=="undefined"&&S.tab!=="home"&&typeof go==="function")go("home");else if(typeof render==="function")render(true);
}
function lanza(){
const e=bip();if(!e||typeof e.prompt!=="function")return;
try{
e.prompt();
Promise.resolve(e.userChoice).then(r=>{
window.__bip=null;
if(r&&r.outcome==="accepted"){ls(OK,1);if(typeof toast==="function")toast("Fam Studio instalada");if(bv)cierra();else if(typeof render==="function")render(true)}
else if(bv&&ins)instala();else if(typeof render==="function")render(true);
}).catch(()=>{});
}catch(x){}
}
window.addEventListener("fs-bip",()=>{if(bv&&ins&&plat()==="android")instala();else if(!bv&&typeof S!=="undefined"&&S.tab==="instalar"&&typeof render==="function")render(true)});
document.addEventListener("click",e=>{
const b=e.target.closest&&e.target.closest("button");if(!b)return;
if(b.dataset.ins==="go"){lanza();return}
switch(b.dataset.vis){
case "saltar":despues();break;
case "sig":sig();break;
case "fin":if(b.dataset.ya)ls(OK,1);cierra();break;
case "bienv":abre(true);break;
}
});
document.addEventListener("keydown",e=>{
if(!bv)return;
if(e.key==="Escape")cierra();
else if(e.key==="ArrowRight"&&!ins)sig();
else if(e.key==="Tab"){const f=[...bv.querySelectorAll("button,.esc-host[tabindex]")];if(!f.length)return;const i=f.indexOf(document.activeElement);if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus()}}
});
return {plat,pendiente,abre,cierra,bip,PAG};
})();

// ===== estado =====
const PERF=ls("ft_perfil")||{};
const S={tab:"home",f:{nivel:PERF.nivel||"empiezo"}};

function toast(m){const t=$("#toast");t.textContent=m;t.classList.add("on");clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove("on"),1800)}
async function copy(t){try{await navigator.clipboard.writeText(t)}catch(e){const a=document.createElement("textarea");a.value=t;document.body.appendChild(a);a.select();try{document.execCommand("copy")}catch(_){}a.remove()}toast("Copiado")}
const sel=(id,opts,val)=>'<select id="'+id+'">'+opts.map(o=>'<option value="'+esc(o[0])+'"'+(String(o[0])===String(val)?" selected":"")+'>'+esc(o[1])+'</option>').join("")+'</select>';
const NIVELES=[["empiezo","Empiezo hoy","Nunca he publicado stories o casi nada."],["suelto","Me suelto","Publico de vez en cuando y me atrevo a hablar a cámara."],["pro","Ya publico a diario","Tengo rutina y busco ordenar mi contenido."]];
const NIVEL_N={empiezo:"Empiezo hoy",suelto:"Me suelto",pro:"Ya publico a diario"};
const defLen=n=>({empiezo:3,suelto:4,pro:5}[n]||4);

// ===== pestaña CÓMO SE USA (ayuda) =====
function viewAyuda(){
  const lv=S.f.nivel;
  const D=(t,b,o)=>'<details class="panel gd"'+(o?" open":"")+'><summary>'+t+'</summary><div class="gb2">'+b+'</div></details>';
  const L=(t,d)=>'<dt>'+t+'</dt><dd>'+d+'</dd>';
  const E=id=>'<div class="esc-host" data-esc="'+id+'"></div>'; // minitutorial animado: se monta al abrir el apartado (escenas.js)
  let h='<section class="panel hero"><h2>Bienvenida</h2><p class="lead">Fam Studio te prepara lo que vas a publicar en Instagram: qué poner en pantalla, qué grabar y qué decir. No necesitas saber de redes. Si algo no lo entiendes, pasa a la siguiente parte y vuelve cuando quieras.</p>'
  +'<p class="note" id="i_msg"><b>Tu nivel: '+esc(NIVEL_N[lv]||NIVEL_N.suelto)+'.</b> Crear te propone '+defLen(lv)+' stories por secuencia.</p><p><button type="button" class="linkb" data-tab="perfil">Cambiar mi nivel en Mi cuenta</button></p>'
  +'<div class="acts"><button class="btn big" data-go="crear">Crear mi primera publicación</button><button class="btn ghost" data-go="semana">Preparar mi semana</button></div>'
  +'</section>';
  h+='<section class="panel"><h3>Tu primera semana</h3><p class="mut">Cinco pasos para empezar sin perderte: tu bio, tus primeras stories, tu primer reel, tu semana y tu primer contacto.</p><button type="button" class="btn ghost" data-act="semver">Ver Tu primera semana</button></section>';
  const G=(tab,t,a)=>'<p class="ay-go"><button type="button" class="btn ghost" '+(a?(a.slice(0,4)==="vis:"?'data-vis="'+a.slice(4)+'"':'data-act="'+a+'"'):'data-tab="'+tab+'"')+'>'+t+'</button></p>';
  h+=D("Qué es Fam Studio y para quién",'<p>Fam Studio es la app del equipo Fam Team para quien reparte Farmasi y no sabe nada de redes. Te dice qué publicar en Instagram y en TikTok: qué grabar, qué escribir en pantalla y qué decir. Y cuando alguien te escribe, te da lo que le mandas: el mensaje, la mini guía y el seguimiento.</p><p>No hay cuentas ni contraseñas personales: entras con el código del equipo y todo lo que apuntas se queda en tu móvil.</p>'+G("","Ver el tutorial otra vez","vis:bienv"),true);
  h+=D("Tu primer día",'<ol class="steps"><li><b>El tutorial.</b> Son seis pantallas animadas la primera vez que abres la app: qué publicar, cómo sale tu guion, cómo se graba, qué mandas cuando te escriben, tu semana y que todo se queda en tu móvil. Puedes verlo otra vez con el botón de arriba o desde Más.</li><li><b>Tu primera semana.</b> En Inicio verás cinco pasos para empezar sin perderte: tu bio, tus primeras stories, tu primer reel, tu semana y tu primer contacto. Se marcan solos cuando los haces, o con el círculo. Si no la ves, pulsa «Ver Tu primera semana» (arriba). Cuando ya no la quieras, toca «Ya sé por dónde voy».</li><li><b>Tu bio.</b> En Inicio, en «Tu perfil», tocas «Tu bio» y contestas unas preguntas cortas (la de tu zona es opcional) y te preparo seis bios de Instagram de 150 caracteres como máximo. Eliges una y tocas «Esta es la mía».</li><li><b>Y para completar tu perfil.</b> En la misma pantalla tienes la bio de TikTok, la publicación de presentación, las destacadas y «Revisar mi bio» por si ya tienes una.</li></ol><p class="note">No la confundas con «Tus primeros siete días en el equipo», que está en Equipo y es la lista de tareas de tus siete primeros días repartiendo Farmasi.</p>'+G("perfil_ig","Ir a Tu bio"));
  h+=D("Tu bio",E("bio")+'<p>Tu bio es lo primero que lee quien llega a tu perfil: quién eres, de qué hablas y qué hacer ahora, en 150 caracteres. Está en Inicio, en «Tu perfil».</p><ol class="steps"><li><b>Contesta unas preguntas cortas.</b> Para quién publicas, de qué hablas y, si quieres, de qué zona eres (tu provincia o tu isla, que eliges de una lista).</li><li><b>Elige entre seis.</b> Te preparo seis bios con tus respuestas. Tocas la que más se parezca a ti y te dice cuántos caracteres lleva.</li><li><b>Mírala en tu perfil.</b> Cada bio sale dentro de una maqueta de perfil, como la verá quien llegue. Pasas de una a otra con las flechas o deslizando, y arriba eliges «Sin emojis» o «Con emojis» (se ve al momento y se acuerda de lo que elijas).</li><li><b>Cópiala y pégala</b> en tu perfil de Instagram: «Copiar» te da justo la que estás viendo. Con «Guardar imagen» te llevas la maqueta como foto para mandarla. Si ya tienes una bio, «Revisar mi bio» te dice qué está bien y qué se puede mejorar.</li></ol>'+G("perfil_ig","Ir a Tu bio"));
  h+=D("Crear una publicación",E("crear")+'<ol class="steps"><li><b>Elige qué creas:</b> Stories, Reel o TikTok, en los botones de arriba. El interruptor Instagram | TikTok es el mismo que el de Inicio: si eliges TikTok, Crear te abre en TikTok.</li><li><b>«¿Para quién creas hoy?»</b> Clientas (vender y recomendar productos) o Proyecto (sumar gente al equipo).</li><li><b>«Hoy quiero…»</b> Llegar a gente nueva, contar algo mío o recibir mensajes. Con clientas puedes también enseñar un producto o invitar al reto o al taller del martes; con el proyecto, invitar a una formación. Cada opción cambia el gancho, las stories y el final. Si una propuesta no tiene situaciones en esta época, sale con «Ahora no hay situaciones para esto» y el mes en que vuelven.</li><li><b>«¿De qué hablas hoy?»</b> Eliges una situación: en «Para hoy» salen cuatro de temas distintos (mañana, otras); o tocas un tema, o buscas una palabra (noche, café, regalo…).</li><li><b>Toca «Ver mi guion».</b> Te sale todo hecho. Si no te convence un gancho o un cierre, pulsa «Otro gancho» u «Otro cierre».</li><li><b>Cuando acabes:</b> «Copiar todo», «Añadir a mi semana» (eliges la semana, el día y el momento) o «Guardar en mi cuenta».</li></ol><p><b>Herramientas.</b> El botón «Herramientas», arriba a la derecha, abre las que te ayudan a crear: Situaciones, Ganchos, Cuadrícula, Revisor y Lo que no se dice.</p><p class="note">La palabra clave que te sugerimos cambia según la situación. Puedes tocar «Cambiar» y elegir otra o escribir la tuya, siempre una sola palabra, y la app te avisa si se salta las normas de Instagram.</p>'+G("crear","Ir a Crear"));
  h+=D("Grabar: reel, stories y modo de grabación",E("uno")+'<p><b>Reel.</b> Eliges entre tres maneras:</p><ul><li><b>De una frase:</b> un solo plano y una frase escrita arriba. Es la más fácil y no hace falta hablar.</li><li><b>Por planos:</b> varios planos seguidos, cada uno con su texto.</li><li><b>Serie de 3 días:</b> tres reels, uno por día, cada parte con su foto de ejemplo. Solo sale en las situaciones que la tienen.</li></ul><p><b>Stories.</b> Una secuencia de 2 a 8 (te recomendamos 3); el número lo cambias arriba del resultado. Pulsa <b>«Ver una a una»</b> y pasas al modo de grabación: una story por pantalla, con «Esta story sirve para», una foto de ejemplo, <b>«El plano»</b> (cómo colocar el móvil) y tres pasos: Graba, Escribe y Di. Con «Siguiente» y «Anterior» avanzas y retrocedes; «Salir» vuelve a la lista. Si la story pide palabra clave, «Cambiar la palabra» la cambia sin salir.</p><p><b>Stories para TikTok.</b> Desde el Inicio de TikTok son las mismas stories con los textos de TikTok: la palabra se escribe en grande y te contestan en los comentarios, sin pegatinas. «Verlas para Instagram» las pasa a Instagram.</p><p><b>TikTok.</b> Un vídeo de unos 7 segundos con un solo plano, el texto arriba y la palabra clave abajo.</p><p class="note">Las fotos de ejemplo son de bancos de imágenes libres, para que te hagas una idea del plano. No son tuyas: graba la tuya. En un mismo guion no se repite ninguna, y si una foto no carga, ves solo el texto de esa pieza.</p>'+G("crear","Ir a Crear"));
  h+=D("Cuando alguien te escribe la palabra",E("mandas")+'<ol class="steps"><li><b>Busca lo que mandas.</b> Debajo de cada guion, en Crear, tienes «Lo que mandas cuando te escriban» (si el final no pide palabra, se llama «Si alguien te escribe por esto»). También puedes ir a Recursos y escribir la palabra en «¿Te han escrito una palabra?»: te sale la guía y la situación que la usan, y si no está, las palabras más parecidas.</li><li><b>El mensaje con la guía.</b> Es lo primero que envías por privado: «Copiar mensaje» (o «Copiar mensaje y guía» si la situación no trae mini guía).</li><li><b>La guía.</b> Casi siempre es una mini guía: páginas que guardas con «Guardar PDF» o «Guardar esta página», o mandas con «Compartir guía» si tu móvil lo permite. Además tienes una versión corta en una sola imagen («Guardar imagen») y el texto para copiar, por si prefieres mandarlo escrito.</li><li><b>El seguimiento.</b> A los 2 o 3 días, si no ha contestado, un recordatorio sin presión: «Copiar seguimiento».</li><li><b>WhatsApp.</b> Cuando ya hay confianza, pásala a WhatsApp con un mensaje corto. Si guardas tu teléfono en Mi cuenta, se pone solo en los mensajes de Recursos.</li></ol>'+G("recursos","Ir a Recursos"));
  h+=D("Semana",E("semana")+'<ol class="steps"><li><b>«Crear mi semana rápida».</b> Eliges cuántos reels (se publican por la mañana), cuántas secuencias de stories y cuántos TikTok al día, cuántos de ellos para el proyecto y cuántos para clientas, si el tema es el mismo toda la semana o distinto cada vez, y tu día de descanso. Con «Preparar mi semana» la app lo reparte por días.</li><li><b>Cámbialo todo.</b> En cada publicación puedes marcarla como publicada con el círculo, moverla a otro día, quitarla («Quitar») o abrirla con «Editar en Crear». Con «+ Añadir a este día» pones lo que quieras.</li><li><b>Desde Crear</b> también la añades: al final del guion, «Añadir a mi semana».</li><li><b>La semana que viene</b> se ve con las flechas de arriba, y con «Copiar mi semana» te la mandas por WhatsApp.</li></ol><p><b>El aviso en el calendario.</b> Cuando tienes publicaciones puestas, arriba aparece «Añadir a mi calendario»: se descarga un archivo que se abre con el calendario de tu móvil y te avisa un cuarto de hora antes de cada publicación de esta semana y de la siguiente. Si cambias algo en Semana, vuelve a pulsarlo.</p>'+G("semana","Ir a Semana"));
  h+=D("Mis contactos",E("contactos")+'<p>Cuando copias un mensaje con la guía, la app te pregunta «¿A quién se la mandas?». Escribe solo un nombre o un alias (nada de teléfonos) y toca «Apuntar»; se guarda en tu móvil.</p><ul><li>A partir de los 2 días, en Inicio te aparece «Escríbele a…» con el mensaje de seguimiento ya preparado. Lo copias, le escribes y tocas «Hecho».</li><li>En Mis contactos cada persona tiene su estado: «Guía enviada», «Le escribí otra vez» y, después, «Es clienta», «Le interesa el proyecto» o «Ahora no».</li><li>Mis contactos está en Recursos, justo debajo de «¿Te han escrito una palabra?».</li><li>Si le has contestado a una pega («Qué contestar cuando te dicen…»), también puedes apuntarlo: queda como «Pega contestada» y no te avisa para escribirle de nuevo. En la ficha de cada contacto, «Me ha puesto una pega» te lleva a esa pantalla.</li><li>Puedes añadir a alguien a mano, ponerle una nota corta o borrarlo.</li><li>Si le dices «Ahora no» tres veces seguidas a la pregunta «¿A quién se la mandas?», deja de preguntarte. Lo reactivas en Mis contactos con «Volver a preguntarme».</li></ul>'+G("contactos","Ir a Mis contactos"));
  h+=D("Lo que te funciona",E("funciona")+'<p>Está en Semana, al final, en «¿Cómo voy?», junto a Mis números. Lo apuntas tú, en dos toques. Cuando marcas una publicación como publicada en Semana, al día siguiente Inicio te pregunta «¿Cuántas personas te escribieron?»: Ninguna, 1 o 2, 3 a 5, Más de 5 o No lo sé.</p><p>Cuando tienes seis publicaciones apuntadas, la app compara lo que has publicado al menos dos veces y te dice qué te trae más mensajes: según para qué publicas, el formato, tus mejores ganchos y tus mejores temas. Solo cuenta lo que tú apuntas y se guarda en tu móvil. En Inicio también puedes fijar cuántas publicaciones quieres hacer cada semana.</p>'+G("funciona","Ir a Lo que te funciona"));
  h+=D("Recursos",E("recursos")+'<p>Es donde está todo lo que mandas por privado. Arriba escribes la palabra en «¿Te han escrito una palabra?» y, debajo, eliges entre tres listas y una pantalla propia:</p><ul><li><b>Guías:</b> con su mensaje, su guía, su tarjeta y su seguimiento. Eliges Clientas o Proyecto y, debajo, un tema (Piel, Maquillaje, Nutrición, Dudas antes de empezar…) o «Todas». Las buscas por título, palabra, tema o para quién es; al buscar se miran todos los temas.</li><li><b>Mini guías de situaciones:</b> cada situación de Crear trae su mini guía, y aquí están todas, ordenadas por grupos que se abren al tocarlos. Abres una, copias el mensaje, guardas o compartes el PDF, o pulsas «Abrir esta situación en Crear».</li><li><b>Mensajes del día a día:</b> dar las gracias, reactivar a alguien, responder a «me lo pienso»…</li><li><b>Qué contestar cuando te dicen…:</b> alguien te pone una pega («es caro», «no tengo tiempo», «me da vergüenza salir en redes»). Eliges Clientas o Proyecto, escribes lo que te ha dicho o buscas por temas, y abres la pega: tienes tres respuestas para copiar, lo que no conviene decir, el siguiente paso y otras parecidas. También entras desde Inicio y desde cada contacto de Mis contactos («Me ha puesto una pega»).</li></ul><p>Debajo del buscador tienes también <b>Mis contactos</b>.</p><p>Cada mensaje tiene su botón para copiarlo. Lo que prepara tu equipo sale con la etiqueta «Del equipo».</p>'+G("recursos","Ir a Recursos"));
  h+=D("Qué contestar cuando te dicen…",'<p>Cuando alguien te pone una pega («es caro», «no tengo tiempo», «me da vergüenza salir en redes»), aquí tienes qué responder. Está en Recursos, y también en Inicio (abajo del todo) y en cada contacto de Mis contactos («Me ha puesto una pega»).</p><ol class="steps"><li><b>Elige el camino:</b> Clientas o Proyecto. La app recuerda el último que usaste.</li><li><b>Escribe lo que te ha dicho</b> en el buscador, aunque sea con otras palabras o con alguna falta: te sale lo más parecido. O abre un tema y elige la pega de la lista.</li><li><b>Lee lo que hay detrás</b> y elige una de las tres respuestas (corta, con mi ejemplo o con una pregunta). «Copiar respuesta» la copia entera: cámbiale las palabras para que suene a ti.</li><li><b>Mira «No digas»</b> y «Si cae bien, el siguiente paso».</li><li><b>Apúntalo:</b> «Apuntar a quién se lo he contestado» lo guarda en Mis contactos con la pega que era, sin teléfonos. Abajo tienes otras pegas parecidas.</li></ol><p class="note">Son mensajes para contestar a quien ya te ha escrito.</p>'+G("objeciones","Ir a Qué contestar cuando te dicen…"));
  h+=D("Equipo",'<p>Es solo para el equipo. Dentro tienes:</p><ul><li><b>Tus primeros siete días en el equipo:</b> la lista de tareas de tus siete primeros días repartiendo Farmasi, con casillas para marcar.</li><li><b>Calendario del equipo</b> (las formaciones de lunes a viernes a las 20:00, hora de España), <b>Formaciones</b>, <b>Guías y plantillas</b>, <b>Herramientas y canales</b>, <b>Países y kits</b>, <b>Términos</b>, <b>Cómo presentar</b>, <b>Vender y recomendar</b> y <b>Normas y organización</b>.</li><li><b>Mi proyecto</b> y <b>Mi Beauty Party</b>, que tienen su propio apartado más abajo.</li><li>Más herramientas: Prospectar, Reto 21 días, Morning Glow y Complementos y embarazo.</li></ul>'+G("equipo","Ir a Equipo"));
  h+=D("TikTok LIVE",'<p>Un directo sirve para que te conozcan de verdad: te ven, te oyen y te preguntan en el momento. Está en el Inicio de TikTok, en «Directos» (cambia el interruptor Instagram | TikTok de arriba).</p><ol class="steps"><li><b>Elige para qué es:</b> «Directo para clientas» o «Directo para el proyecto». Debajo ves el objetivo y qué pides al final.</li><li><b>Abre un guion.</b> Cada uno dice qué necesitas, cuánto dura y, minuto a minuto, lo que haces y lo que dices. «Copiar lo que dices» copia solo esa parte.</li><li><b>Pulsa «Seguirlo en directo»</b> y lo lees a pantalla grande, bloque a bloque, con un reloj: «Empiezo» lo arranca, «Siguiente» y «Anterior» cambian de bloque y «Salir» te devuelve al guion.</li><li><b>Antes y después:</b> los plegables de abajo traen qué comprobar antes de darle a emitir, los requisitos de TikTok, qué hacer si pasa algo, lo que no se dice en un directo y una lista para marcar al terminar.</li></ol>'+G("tt_live","Ir a TikTok LIVE"));
  h+=D("Mi Beauty Party",'<p>Una Beauty Party es un rato con amigas en el que se prueban productos. Está en Equipo. Con «Preparar la mía» contestas cinco preguntas cortas: cuándo, dónde y cuántas sois, cuánto tiempo, qué tipo de tarde y qué productos tienes a mano.</p><ol class="steps"><li><b>La tarde:</b> te sale por orden y con los minutos justos, solo con paradas de tus productos, con lo que haces y lo que dices en cada una.</li><li><b>Tareas, Material e Invitaciones:</b> casillas para ir marcando lo que haces antes y durante, lo que tienes que tener a mano y los mensajes para invitar y recordar.</li><li><b>Después y Guía en PDF:</b> mensajes de después para cada tipo de invitada y tu guía de la tarde en varias páginas, para guardar o mandar.</li><li><b>«Seguirla en directo»</b> la lee a pantalla grande minuto a minuto. Con «Cambiar mis respuestas» la ajustas y con «Empezar otra» guardas varias.</li></ol><p class="note">Las tareas llevan fechas reales si pones el día, y «Añadir a mi calendario» las pasa al calendario del móvil.</p>'+G("eq_beauty","Ir a Mi Beauty Party"));
  h+=D("Mi proyecto",'<p>Es el plan del equipo explicado con cifras, tablas y ejemplos. Está en Equipo y es información interna para entenderlo tú: no es para publicarla ni para mandarla tal cual.</p><ul><li>Arriba tienes un índice para ir directa a cada parte.</li><li>Las cifras llevan siempre su unidad y las tablas se pueden deslizar de lado.</li><li>Al final hay un glosario con las palabras que no entiendas.</li></ul>'+G("negocio","Ir a Mi proyecto"));
  h+=D("Copia de seguridad: por qué todo vive en tu móvil",'<p>Fam Studio no tiene cuentas ni guarda nada tuyo fuera de tu móvil: tu semana, tu bio, tus contactos, lo que te funciona, tus guiones guardados, tu perfil y tu enlace de vídeo se quedan aquí. Nadie más los ve.</p><p>La otra cara es que, si cambias de móvil, borras los datos del navegador o desinstalas la app, se pierden. Por eso existe la copia de seguridad:</p><ol class="steps"><li>Ve a Más › Mi cuenta › Copia de seguridad.</li><li>Pulsa «Guardar una copia» y envíatela por correo o WhatsApp.</li><li>En el móvil nuevo, abre Fam Studio y pulsa «Recuperar una copia» con ese archivo. Sustituye lo que haya en ese móvil.</li></ol><p class="note">En iPhone, la app instalada guarda sus datos aparte de Safari: haz antes la copia y recupérala dentro de la app. Inicio te recuerda guardar una copia de vez en cuando.</p>'+G("","Ir a la copia de seguridad","bkgo"));
  h+=D("Tenerla como una app en el móvil",E(TUT.plat().indexOf("ios")===0?"ios":"android")+'<p><b>iPhone (Safari):</b> toca el botón de compartir (el cuadrado con la flecha hacia arriba) y busca «Añadir a pantalla de inicio».</p><p><b>Android (Chrome):</b> toca los tres puntos de arriba y busca «Instalar aplicación» o «Añadir a la pantalla de inicio».</p><p>Tienes los pasos completos, con los iconos, en Más › Instalar en el móvil.</p>'+G("instalar","Ver cómo instalarla"));
  h+=D("La barra de abajo: dónde está cada cosa",'<dl class="gl">'
   +L("Inicio","¿Qué hago hoy? «Hoy te toca»: tu primera semana, la idea de hoy, a quién escribir y, en «Tu perfil», tu bio y tu publicación de presentación. Con TikTok elegido, el Inicio sigue este orden: qué publico hoy, «Tu perfil de TikTok» (Mi bio y Mi historia en 60 segundos), «Directos» (<b>TikTok LIVE</b>: elige si el directo es para clientas o para el proyecto, mira el objetivo, abre un guion y pulsa «Seguirlo en directo» para leerlo minuto a minuto con un reloj) y «Comentarios» (Responder comentarios).")
   +L("Crear","¿Qué publico? Aquí preparas una publicación: <b>Stories</b>, <b>Reel</b> o <b>TikTok</b>, y con «Herramientas» tienes Situaciones, Ganchos, Cuadrícula, Revisor y Lo que no se dice.")
   +L("Semana","¿Cómo voy? Tu calendario: qué publicar cada día, editable y guardado en tu móvil, con Lo que te funciona y Mis números.")
   +L("Recursos","¿Qué contesto? Las guías por tema, las mini guías de las situaciones, qué contestar cuando te ponen una pega, los mensajes que mandas por privado y Mis contactos.")
   +L("Equipo","¿Qué pasa en el equipo? Lo que es solo para el equipo.")
   +L("Más","La app en sí: Cómo se usa, el tutorial, Instalar en el móvil, Guía del método, Mi cuenta y Administración.")+'</dl>'
   +'<p class="note">La opción en la que estás aparece marcada en la barra. Si te pierdes, toca Inicio.</p>');
  h+=D("Crear › Herramientas, Mis números y Mi cuenta",'<dl class="gl">'
   +L("Situaciones (Crear › Herramientas)","Todas las situaciones, con su palabra clave y lo que mandas. Desde cada una puedes crear directamente.")
   +L("Ganchos (Crear › Herramientas)","Miles de ganchos escritos para cada situación. Escribe de qué vas a hablar y te salen los que encajan.")
   +L("Cuadrícula (Crear › Herramientas)","Dónde colocar el texto y la palabra clave en la pantalla.")
   +L("Revisor (Crear › Herramientas)","Pega un texto y te avisa de frases que Instagram penaliza y de llamadas a la acción flojas.")
   +L("Lo que no se dice (Crear › Herramientas)","Lo que Meta y TikTok penalizan en proyectos de venta directa, y cómo decirlo mejor.")
   +L("Mis números (Semana)","Escribes tus seguidores y visualizaciones y te dice qué mejorar primero. Guarda un historial en tu móvil.")
   +L("Mi cuenta","Tu nombre, usuario de Instagram, teléfono, nivel, el vídeo de tu equipo, tus guiones guardados y la copia de seguridad.")
   +L("Administración","Solo para quien administra el equipo: cambiar códigos y añadir recursos propios.")+'</dl>');
  h+=D("Si ya publicas a diario",'<ul><li>En <b>Semana</b> cambia el tema cada lunes y sigue el plan de cada día.</li><li>En <b>Crear</b> alterna «Llegar a gente nueva» con «Recibir mensajes»: uno para que te descubran y otro para que te pidan la guía.</li><li>Sube dos TikTok al día, separados al menos 4 horas.</li><li>Usa <b>Ganchos</b> para no repetir siempre el mismo arranque.</li><li>Pasa tus propias llamadas a la acción por <b>Revisor</b> › «Revisar una llamada a la acción»: comprueba que hay beneficio, promesa y acción.</li><li>Mide cada semana en <b>Mis números</b>: seguidores, visualizaciones, respuestas y paso a WhatsApp. Te dice qué parte mejorar primero.</li><li>Si tu equipo comparte material propio, lo verás en <b>Recursos</b> con la etiqueta «Del equipo».</li></ul>');
  h+=D("La palabra clave y el glosario",'<p>En vez de un enlace, le pides a la persona que comente o te responda una palabra, por ejemplo RUTINA, y le mandas algo útil por privado. Una buena llamada a la acción dice tres cosas: qué consigue la persona, qué recibe y qué tiene que hacer.</p><dl class="gl">'
   +L("Story","Una foto o un vídeo corto que se ve 24 horas en Instagram. Varias seguidas forman una secuencia.")
   +L("Reel","Un vídeo corto que Instagram enseña también a gente que todavía no te sigue. Sirve para que te descubran.")
   +L("Palabra clave","Una palabra que la persona escribe en un comentario o te responde, por ejemplo NOCHE. Es la forma de pedirte algo sin enlaces.")
   +L("Recurso","Lo que le mandas por mensaje privado cuando escribe la palabra: una guía, una lista, un audio. Está en la sección Recursos.")
   +L("Llamada a la acción","La frase del final que le dice qué hacer: «comenta la palabra NOCHE y te mando mi guía».")+'</dl>'
   +'<p class="note">El camino completo: publicas un reel o unas stories, alguien escribe la palabra, le mandas el recurso por privado, la conversación pasa a WhatsApp y ahí le aconsejas o le propones el siguiente paso.</p>');
  h+=D("Cuatro reglas que no te saltes",'<ul><li>Nada de dinero, ingresos ni comisiones.</li><li>Nada de peso, antes y después de cuerpo ni promesas de salud.</li><li>Una oferta solo con fecha límite real.</li><li>El caso de una clienta, solo con su permiso por escrito.</li></ul><p class="note">Si dudas de un texto, pégalo en el Revisor (Crear › Herramientas).</p>');
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
  let h='<section class="panel"><h2>Cuadrícula de la story</h2><p class="lead">Es la plantilla mental para colocar textos y la llamada a la acción. Divide la pantalla en 4 cuadrantes y recuerda: se lee de izquierda a derecha y de arriba abajo, así que lo importante va arriba.</p>'
  +'<div class="chips">'+[["gancho","Plantilla de gancho"],["prueba","Plantilla de prueba"],["cta","Plantilla de llamada a la acción"]].map(c=>'<button class="chip'+(z===c[0]?" on":"")+'" data-gz="'+c[0]+'">'+c[1]+'</button>').join("")+'</div>'
  +'<div class="gridwrap"><div class="gphone"><div class="q q1"><i>1</i></div><div class="q q2"><i>2</i></div><div class="q q3"><i>3</i></div><div class="q q4"><i>4</i></div>'
  +'<div class="gm top"></div><div class="gm bot"></div>'
  +'<div class="gt"><b>'+esc(M.t).replace(/\n/g,"<br>")+'</b>'+(M.e?'<span>'+esc(M.e)+'</span>':'')+'</div><div class="gmed">'+esc(M.m)+'</div>'+(M.kw?'<div class="gkw">'+M.kw+'</div>':'')+(M.b?'<div class="gb">'+esc(M.b)+'</div>':'')+'</div>'
  +'<div class="gtxt"><h3>Cómo se usa</h3><ul><li><b>Arriba:</b> el gancho, grande, y debajo una explicación corta. Nunca pongas el gancho abajo.</li><li><b>En medio:</b> la prueba gráfica (captura, foto o vídeo). Nunca por encima del texto.</li><li><b>Abajo:</b> contexto, solo si es esencial.</li><li><b>Llamada a la acción:</b> el beneficio arriba y la palabra clave en letra mucho más grande que el resto.</li><li><b>Aire:</b> no saturar. Un mensaje por story.</li><li><b>Márgenes:</b> nada pegado a los bordes y no tapes tu cara.</li><li><b>Alineación:</b> centrada. Nunca justificada. Izquierda o derecha solo en el medio y a veces; nunca en el gancho ni en la llamada a la acción.</li></ul></div></div></section>';
  h+='<section class="panel"><h3>Texto y color</h3><ul><li><b>Máximo 2 tipografías</b> de las que trae Instagram: una principal (70%) y una secundaria (30%).</li><li><b>Contraste:</b> el texto debe leerse al primer vistazo sobre la foto.</li><li><b>Truco de la sombra:</b> duplica la palabra clave, pon una copia detrás en otro color y desplázala un poco.</li><li><b>Colores:</b> usa la paleta de marca (marrón y crema). Evita amarillo, naranja, morado y verde chillones.</li><li><b>Solo la palabra clave</b> va grande; el resto, en tamaño normal.</li><li><b>No pongas subtítulos</b> ni el sticker de enlace: usa «comenta la palabra X».</li></ul></section>';
  h+='<section class="panel"><h3>Medidas</h3><p class="mut">Estas medidas son una recomendación general de Instagram:</p><ul><li>Formato vertical 9:16 (1080 × 1920 px).</li><li>Deja libres unos 250 px arriba y abajo, donde Instagram pone su propia interfaz.</li><li>Mantén los textos importantes dentro del 80% central de la pantalla.</li></ul></section>';
  return h;
}

// ===== pestaña REVISOR =====
function viewRevisor(){
  const t=S.rv||"",m=S.rtab||"meta";
  let h='<section class="panel"><h2>Revisor de textos</h2><p class="lead">Pega aquí el texto de tus stories antes de publicarlas. Se revisan dos cosas: las normas de Meta, que penalizan ciertas frases en proyectos de venta directa, y la calidad del texto.</p><textarea id="rv_t" rows="7" placeholder="Pega tu guion o tu CTA">'+esc(t)+'</textarea><div class="chips"><button class="chip'+(m==="meta"?" on":"")+'" data-rt="meta">Políticas de Meta</button><button class="chip'+(m==="cur"?" on":"")+'" data-rt="cur">Calidad del texto</button><button class="chip'+(m==="cta"?" on":"")+'" data-rt="cta">Revisar una llamada a la acción</button></div></section>';
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
  ch.push([words<=25,"Longitud","Mejor que no pase de 25 palabras por story. Tu texto tiene "+words+"."]);
  ch.push([!/https?:|www\.|enlace|link/i.test(t),"Sin enlaces","Usa «comenta la palabra X» en vez de enlaces."]);
  ch.push([!/dale like|si quieres empezar a|te paso un loom/i.test(t),"Sin llamadas a la acción flojas","Evita «dale like» o «si quieres empezar a…»."]);
  ch.push([!/solo hoy|ultima hora|ultimas plazas|corre\b|urgente/i.test(norm(t)),"Sin urgencia falsa","Si hay fecha límite, que sea real."]);
  ch.push([!/subtitul/.test(norm(t)),"Sin subtítulos","Mejor no usar subtítulos automáticos."]);
  return '<ul class="ctal">'+ch.map(c=>'<li class="'+(c[0]?"ok":"no")+'"><b>'+c[1]+'</b> '+(c[0]?"Correcto.":esc(c[2]))+'</li>').join("")+'</ul>';
}

// ===== pestaña GUÍA DEL MÉTODO =====
function viewGuia(){
  const D=(t,b)=>'<details class="panel gd"><summary>'+t+'</summary><div class="gb2">'+b+'</div></details>';
  let h='<section class="panel"><h2>Guía del método</h2><p class="lead">Lo esencial para publicar con cabeza, explicado sin palabras raras. Si empiezas, lee las cuatro primeras.</p></section>';
  h+=D("Los reels te descubren, las stories te traen mensajes","<p>Los <b>reels</b> y los <b>TikTok</b> hacen que te descubra gente nueva. Las <b>stories</b> hacen que quien ya te sigue confíe en ti y te escriba. Lo que mandas por privado cuando alguien te escribe la palabra es la <b>guía</b> de cada situación.</p><p>Por eso en Crear contestas siempre «Hoy quiero…»: llegar a gente nueva, contar algo mío, recibir mensajes, enseñar un producto o invitar (al reto, al taller del martes o a una formación).</p>");
  h+=D("El camino completo: del comentario a WhatsApp","<ol><li><b>Publicas</b> un reel o unas stories que hablan de un problema concreto de tu clienta.</li><li><b>Alguien escribe</b> tu palabra clave (en un comentario o respondiendo a la story).</li><li><b>Le mandas el recurso</b> por mensaje privado de Instagram: la guía y, si quieres, la tarjeta.</li><li><b>Seguimiento</b> a los 2 o 3 días, sin presión, si no ha contestado.</li><li><b>Pasas a WhatsApp</b> cuando ya hay confianza. Con una clienta: un consejo según lo que necesita y, si quiere, su pedido. Con alguien interesado en el proyecto: información básica y un Zoom corto a solas. Si no quiere Zoom, un vídeo corto.</li></ol><p class=\"note\">Todo esto está en Recursos, mensaje a mensaje.</p>");
  h+=D("Las 5 preguntas antes de grabar","<ol><li>¿A quién me dirijo? A tu clienta ideal, no a todo el mundo.</li><li>¿Qué problema cuento? Uno solo por reel o secuencia.</li><li>¿Qué le aporto? Algo que pueda aplicar hoy.</li><li>¿Se nota que sé del tema? Cuenta lo que haces tú, con detalles reales.</li><li>¿Qué punto de partida tiene? ¿Sabe que tiene el problema? ¿Conoce la solución? ¿Ya está comparando?</li></ol>");
  h+=D("Estructura de una secuencia de stories","<p>Una secuencia son de 2 a 8 stories con un solo hilo. Con 3 tienes la versión corta, perfecta para empezar. La primera es el <b>gancho</b> y la última, el <b>cierre</b>. Entre las dos va lo que cuentas: <b>cómo lo hacías antes</b>, <b>cómo lo haces ahora</b> y hasta <b>tres consejos</b>; cuantas más stories, más cosas entran. Si eliges «Contar algo mío», terminas con una <b>encuesta</b> (hasta 7 stories). Cada story se entiende sola. Para verlas de una en una y grabarlas, usa «Ver una a una» en Crear.</p><p>Cada story dura entre 7 y 15 segundos. Máximo dos vídeos a cámara seguidos. Nunca pongas enlaces: pide la palabra clave.</p>");
  h+=D("«Hoy quiero…»: cada opción cambia el guion",'<ul><li><b>Llegar a gente nueva.</b> Para gente que todavía no te sigue. El gancho nombra algo que le pasa a casi todo el mundo y terminas con «sígueme». Sin palabra clave.</li><li><b>Contar algo mío.</b> Cuentas cómo lo hacías antes y cómo lo haces ahora, y terminas con una encuesta.</li><li><b>Recibir mensajes.</b> Das un consejo y terminas con la palabra clave y lo que le mandas.</li><li><b>Enseñar un producto.</b> Cómo lo usas tú, con la palabra clave al final.</li><li><b>Invitar al reto, al taller o a una formación.</b> Con los días y la hora reales y la palabra clave para mandarle cómo entrar.</li></ul><p>En el proyecto nunca se habla de dinero ni se promete nada.</p>');
  h+=D("Un buen reel: lo que tiene que cumplir","<ul><li><b>Gancho de 3 segundos:</b> lo primero que se lee o se oye. Tiene que despertar curiosidad y que la persona piense «esa soy yo».</li><li><b>Una sola idea.</b> Se entiende en menos de 5 segundos de leer la pantalla.</li><li><b>Cuenta lo tuyo:</b> detalles de verdad (una hora, un sitio, un objeto) valen más que frases bonitas.</li><li><b>Cierre:</b> si buscas que te conozcan, invita a seguirte; si buscas que te escriban, termina con la palabra clave y lo que recibe.</li><li><b>Formatos sin cara</b> para empezar: manos, objetos, texto en pantalla. La cara llega cuando te sientas cómoda.</li></ul>");
  h+=D("Las tres palancas de las stories","<ul><li><b>Retención:</b> que la gente vea tus stories hasta el final. Lo consigues con gancho, hilo y curiosidad.</li><li><b>Respuestas:</b> que te contesten por mensaje. Una respuesta vale más que una encuesta.</li><li><b>Primera semana:</b> los nuevos seguidores tienen siete días en los que ven más tus stories. Aprovecha con una primera story visual y cercana.</li></ul><p>Una cuenta normal ve sus stories entre el 5 % y el 10 % de sus seguidores. Si tu secuencia es buena, ese número sube. Compruébalo en Mis números.</p>");
  h+=D("La llamada a la acción que funciona","<p>Fórmula: <b>beneficio</b> (lo que la persona consigue) + <b>promesa concreta</b> del recurso + <b>acción específica</b> (una palabra clave).</p><p>Ejemplo flojo: «te paso una guía». Ejemplo bueno: «si quieres tener una rutina de cinco minutos que sí hagas cada noche, comenta la palabra RUTINA y te envío mi mini guía».</p><p>Las palabras concretas funcionan mejor que las genéricas: NOCHE, REGALOS o PAUSA mejor que INFO.</p>");
  h+=D("La semana en espiral","<p>Durante una semana repites <b>el mismo tema</b>, contado de formas distintas: un reel que te descubre, stories que acompañan, un TikTok y una llamada a la acción. Así te recuerdan y te escriben. En <b>Semana</b>, al crear tu semana rápida, elige «Un tema toda la semana».</p><ul><li>Reels por la mañana y stories entre las 11:00 y las 14:00.</li><li>Un día de descanso.</li><li>Como mucho dos días con palabra clave en stories.</li><li>En TikTok, dos vídeos al día separados al menos 4 horas.</li></ul>");
  h+=D("Frases que Instagram penaliza","<ul><li>Nada de dinero, ingresos, comisiones ni capturas de pagos.</li><li>Nada de pérdida de peso, antes y después de cuerpo ni promesas de salud.</li><li>Con nutrición, solo sabor, preparación y rutina. Nunca un efecto en el cuerpo.</li><li>Urgencia solo si es real, con fecha verdadera.</li><li>El caso de una clienta, solo con su permiso por escrito.</li><li>Sin números ni comparaciones de cuerpo.</li></ul><p class=\"note\">El Revisor (Crear › Herramientas) marca estas frases en tus textos y te propone cómo decirlo.</p>");
  h+=D("Glosario para empezar","<dl class='gl'>"+[["Story","Foto o vídeo que dura 24 horas en Instagram."],["Reel","Vídeo corto que Instagram enseña también a gente que no te sigue."],["Secuencia","Varias stories seguidas que cuentan una sola idea."],["Gancho","La primera frase o imagen: lo que hace que no pasen de largo."],["Llamada a la acción","Lo que le pides hacer a quien te ve, por ejemplo «comenta la palabra NOCHE»."],["Palabra clave","Una palabra que la persona comenta o responde para recibir el recurso."],["Recurso","Lo que mandas a cambio de la palabra clave: una guía, una lista, un audio."],["Hilo","El tema común que une tus publicaciones de la semana."],["Retención","Cuánta gente sigue viendo tu secuencia hasta el final."],["Prueba social","Mensajes o experiencias de otras personas que demuestran que lo que cuentas es real."],["POV","Vídeo en primera persona, como si la persona viera lo que tú ves."],["Detrás de cámaras","Mostrar cómo es tu día o cómo preparas algo, sin guion."],["Lifestyle","Contenido de tu vida diaria con una intención detrás."],["Objeción","Una duda que impide comprar o apuntarse: «es caro», «no tengo tiempo»."],["Cliente ideal","La persona a la que quieres ayudar. Para quien hablas."]].map(g=>'<dt>'+g[0]+'</dt><dd>'+g[1]+'</dd>').join("")+"</dl>");
  return h;
}

// ===== pestaña PERFIL =====
function viewPerfil(){
  const P=ls("ft_perfil")||{},G=ls("ft_guiones")||[];
  let h='<section class="panel"><h2>Tu perfil</h2><div class="grid3"><label>Tu nombre<input id="p_nombre" value="'+esc(P.nombre||"")+'"></label><label>Tu usuario de Instagram<input id="p_user" value="'+esc(P.user||"")+'" placeholder="@tuusuario" autocapitalize="none" autocomplete="off"><small>Sale al pie de tus tarjetas.</small></label><label>Tu teléfono para WhatsApp (opcional)<input id="p_tel" type="tel" inputmode="tel" value="'+esc(P.tel||"")+'" placeholder="612 345 678" autocomplete="off"><small>Se pone solo en los mensajes de Recursos. Se queda en este móvil.</small></label></div><div class="acts"><button class="btn" data-act="psave">Guardar perfil</button></div><p class="note">Todo se guarda solo en este móvil y no se envía a ninguna parte.</p></section>';
  h+='<section class="panel" id="nivel"><h3>Tu nivel</h3><p class="mut">Crear te propone 3, 4 o 5 stories por secuencia según tu nivel, y puedes cambiarlo cuando quieras.</p><div class="radios">'+NIVELES.map(r=>'<label class="rad"><input type="radio" name="i_nivel" value="'+r[0]+'"'+(S.f.nivel===r[0]?" checked":"")+'><span><b>'+r[1]+'</b><small>'+r[2]+' ('+defLen(r[0])+' stories)</small></span></label>').join("")+'</div></section>';
  const V=miVideo(),B=S.bk||{};
  h+='<section class="panel"><h3>El vídeo corto de tu equipo</h3><label>Su enlace<input id="p_video" type="url" inputmode="url" value="'+esc(V||"")+'" placeholder="https://youtu.be/..." autocapitalize="none" autocomplete="off" spellcheck="false"><small>Pídeselo a tu patrocinadora. Lo usaremos en los mensajes donde se ofrece un vídeo en vez de un Zoom.</small></label><div class="acts"><button class="btn" data-act="vsave">Guardar enlace</button></div><p class="'+(B.vok?"okm":"err")+'" id="p_verr" role="status">'+esc(B.vmsg||"")+'</p><p class="note">Solo se aceptan enlaces de YouTube que empiecen por https://. Se guarda solo en tu móvil.</p></section>';
  h+='<section class="panel" id="bk"><h3>Copia de seguridad</h3><p>Tu semana y tus ajustes se guardan solo en este móvil. Guarda una copia de vez en cuando y envíatela por correo o WhatsApp.</p><div class="acts"><button class="btn" data-act="bksave">Guardar una copia</button><button class="btn sec" data-act="bkpick">Recuperar una copia</button></div><input type="file" id="bk_file" accept="application/json,.json" hidden>'
   +(B.pend?'<div class="tipp" role="alert"><b>'+esc(B.pend.resumen)+'</b><br>Si sigues, se sustituye lo que tienes ahora en este móvil por lo de la copia.<div class="acts"><button class="btn" data-act="bkyes">Sí, sustituir</button><button class="mini" data-act="bkno2">Cancelar</button></div></div>':'')
   +'<p class="'+(B.ok?"okm":"err")+'" id="bk_msg" role="status">'+esc(B.msg||"")+'</p></section>';
  h+='<section class="panel"><h3>Mis guiones guardados</h3>'+(G.length?G.map((g,i)=>'<details class="gd2"><summary><b>'+esc(g.titulo)+'</b> <small>'+esc(g.fecha)+'</small></summary><pre>'+esc(g.texto)+'</pre><button class="mini" data-gcopy="'+i+'">Copiar</button> <button class="mini" data-gdel="'+i+'">Quitar</button></details>').join(""):'<p class="mut">Todavía no has guardado ninguno. En Crear, al final de tu guion, pulsa «Guardar en mi cuenta».</p>')+'</section>';
  return h;
}

// ===== render y eventos =====
const VIEWS={ayuda:viewAyuda,cuadricula:viewCuadricula,revisor:viewRevisor,guia:viewGuia,perfil:viewPerfil};
document.addEventListener("click",e=>{
  const t=e.target.closest("button,[data-tab]");if(!t)return;
  const d=t.dataset;
  if(d.back&&t.classList.contains("back")){goBack();return}
  if(d.tab||d.go){S.anc=d.anc||"";go(d.tab||d.go);return}
  if(d.copy){copy(d.copy);return}
  if(d.gz){S.gz=d.gz;render(true);return}
  if(d.rt){S.rtab=d.rt;const x=$("#rv_t");S.rv=x?x.value:S.rv;render(true);return}
  if(d.gcopy){copy((ls("ft_guiones")||[])[+d.gcopy].texto);return}
  if(d.gdel){const G=ls("ft_guiones")||[];G.splice(+d.gdel,1);ls("ft_guiones",G);render(true);return}
  switch(d.act){
   case "vsave":{const raw=($("#p_video").value||"").trim();S.bk=S.bk||{};
    if(!raw){ls(VIDEO_KEY,null);try{localStorage.removeItem(VIDEO_KEY)}catch(_){}S.bk.vok=1;S.bk.vmsg="Enlace quitado.";render(true);break}
    const v=videoOk(raw);if(!v){S.bk.vok=0;S.bk.vmsg="Ese enlace no vale. Tiene que empezar por https:// y ser de youtube.com o youtu.be.";render(true);const i=$("#p_video");if(i){i.value=raw;i.focus()}break}
    ls(VIDEO_KEY,v);S.bk.vok=1;S.bk.vmsg="Enlace guardado.";render(true);toast("Enlace guardado");break}
   case "bksave":{const c=bkHacer(),n=new Date(),p2=x=>String(x).padStart(2,"0");
    const nom="fam-studio-copia-"+n.getFullYear()+"-"+p2(n.getMonth()+1)+"-"+p2(n.getDate())+".json";
    try{const u=URL.createObjectURL(new Blob([JSON.stringify(c)],{type:"application/json"})),a=document.createElement("a");a.href=u;a.download=nom;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000)}catch(_){S.bk={msg:"No he podido preparar la copia en este navegador."};render(true);break}
    ls("fs_copia",Object.assign(ls("fs_copia")||{},{ult:Date.now()}));S.bk={ok:1,msg:"Copia guardada: "+nom+". Envíatela por correo o WhatsApp."};render(true);break}
   case "bkpick":{const f=$("#bk_file");if(f){f.value="";f.click()}break}
   case "bkno2":S.bk={};render(true);break;
   case "bkyes":{const P=S.bk&&S.bk.pend;if(!P)break;
    if(!bkAplicar(P.claves)){S.bk={msg:"No he podido recuperar la copia (¿sin espacio en el móvil?). No se ha cambiado nada."};render(true);break}
    ls("fs_copia",Object.assign(ls("fs_copia")||{},{ult:Date.now()}));try{sessionStorage.setItem("fs_bk_ok","1")}catch(_){}
    S.bk={};location.reload();break}
   case "bkgo":{go("perfil");const b=$("#bk");if(b)b.scrollIntoView();break}
   case "bkno":{ls("fs_copia",Object.assign(ls("fs_copia")||{},{no:Date.now()}));render(true);break}
   case "psave":{const p={nombre:$("#p_nombre").value,user:$("#p_user").value,tel:$("#p_tel").value.trim(),nivel:S.f.nivel,tono:(ls("ft_perfil")||{}).tono};ls("ft_perfil",p);if(S.c2)S.c2.n=defLen(p.nivel);S.f.nivel=p.nivel;toast("Perfil guardado");break}
  }
});
document.addEventListener("change",async e=>{
  if(e.target.id==="bk_file"){const f=e.target.files&&e.target.files[0];if(!f)return;
   let r;if(f.size>5000000)r={ok:false,msg:"Ese archivo es demasiado grande para ser una copia de Fam Studio."};
   else{let t="";try{t=await f.text()}catch(_){}r=bkCheck(t)}
   S.bk=r.ok?{pend:r}:{msg:r.msg};render(true);const b=$("#bk");if(b)b.scrollIntoView({block:"center"});return}
  if(e.target.name==="i_nivel"){S.f.nivel=e.target.value;if(S.c2)S.c2.n=defLen(S.f.nivel);const p=ls("ft_perfil")||{};p.nivel=S.f.nivel;ls("ft_perfil",p);render(true)}
});
document.addEventListener("input",e=>{
  if(e.target.id==="rv_t"){S.rv=e.target.value;$("#rv_out").innerHTML=revOut(S.rv,S.rtab||"meta")}
});

// ===== Fam Studio · Recursos: guías, tarjetas, mensajes del día a día y recursos del equipo =====
// Todo el contenido llega como datos (DB). Cada texto dinámico pasa por esc(). Los adjuntos de la
// administración se validan al guardar y otra vez al mostrarlos (cleanRec / ytUrl).

const RCS={sec:"guias",via:"clientas",q:"",tema:{clientas:"",proyecto:""},mo:{}}; // sec: guias | minis | dia («Qué contestar cuando te dicen…» es su propia pantalla: objeciones.js)
const RCA={edit:null,pImg:null,pPdf:null,delId:null,pub:"",busy:false}; // estado de la administración de recursos

// ----- utilidades comunes (las usan también negocio.js, perfil_ig.js y numeros.js) -----
const rcCopy=(txt,label,ct)=>'<button class="mini" data-rc="'+esc(txt)+'"'+(ct?' data-ct="'+esc(ct)+'"':'')+'>'+(label||"Copiar")+'</button>';
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
// enlace del vídeo corto del equipo (lo guarda cada una en Mi cuenta)
function rcVideo(){
  const v=miVideo();
  return '<h4 class="rsub">Con el vídeo de tu equipo</h4>'+(v?rcMsg("Si prefieres verlo a tu ritmo, te paso un vídeo corto: "+v,1,"Con tu enlace")
   :'<p class="tipp">Añade el enlace del vídeo de tu equipo en Mi cuenta.</p><div class="acts"><button class="mini" data-tab="perfil">Ir a Mi cuenta</button></div>');
}
function rcMsg(txt,n,label,ct){
  return '<div class="rmsg"><div class="rmh"><span class="rver">'+esc(label||"Versión "+n)+'</span>'+rcCopy(txt,"",ct)+'</div><p>'+esc(txt)+'</p></div>';
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
// RCS.sec: guias | minis (las mini guías de las situaciones de Crear) | dia. RCS.tema: el tema elegido en cada camino («» = Todas).
// RCS.mo: grupos de mini guías abiertos (se pintan al abrirlos: son 781 situaciones y no se pintan de golpe).
const RC_LEAD="Lo que mandas cuando alguien comenta tu palabra clave: la guía, los mensajes para cada momento y la tarjeta para compartir.";
const RC_LEAD_MINIS="Cada situación de Crear trae su mini guía. Aquí las tienes todas, por si quieres mandar una sin pasar por Crear.";
const RC_MAX_BUSCA=8; // mini guías que salen debajo de las guías al buscar; el resto, con «Ver todas»
const rcVia=v=>v==="clientas"?"clientas":"el proyecto";
const rcNum=(n,u,p)=>n+" "+(n===1?u:p);
// temas de un camino, en el orden de content/guias_temas.json, con cuántas guías tiene cada uno (un tema que no esté en la lista sale al final)
function rcTemas(via){
  const n={};DB.guias.forEach(g=>{if(g.via===via)n[g.tema]=(n[g.tema]||0)+1});
  const o=((DB.guias_temas)||[]).filter(t=>n[t]);Object.keys(n).forEach(t=>{if(o.indexOf(t)<0)o.push(t)});
  return o.map(t=>[t,n[t]]);
}
const rcTemaVale=(via,t)=>!t||rcTemas(via).some(x=>x[0]===t);
// situaciones de un camino agrupadas como en el banco de Crear: [[grupo, [situaciones]]]
function rcGrupos(via){
  const idx={},L=[];
  C2.PKS.forEach(s=>{if(s.via!==via)return;if(idx[s.grupo]===undefined){idx[s.grupo]=L.length;L.push([s.grupo,[]])}L[idx[s.grupo]][1].push(s)});
  return L;
}
const rcSitHit=(s,q)=>!q||norm([s.nombre,(s.kw||[]).join(" "),s.recurso,s.grupo].join(" ")).includes(q);
const rcSitItem=s=>'<button type="button" class="ritem rsit" data-rsm="'+esc(s.id)+'"><b>'+esc(s.nombre)+'</b><span class="rkw">Palabra: '+esc((s.kw||[])[0]||"")+'</span><small>Mandas: '+esc(s.recurso||"")+'</small></button>';
function viewRecursos(){
  const sec=RCS.sec,chip=(attr,val,cur,txt)=>'<button class="chip'+(cur===val?" on":"")+'" '+attr+'="'+val+'">'+txt+'</button>';
  let h='<section class="panel"><h2>Recursos para enviar</h2><p class="lead">'+(sec==="minis"?RC_LEAD_MINIS:RC_LEAD)+'</p>'
   +'<div class="chips">'+chip("data-rsec","guias",sec,"Guías")+chip("data-rsec","minis",sec,"Mini guías de situaciones")+chip("data-act","qcir","","Qué contestar cuando te dicen…")+chip("data-rsec","dia",sec,"Mensajes del día a día")+'</div>';
  if(sec!=="dia")h+='<div class="chips rvias">'+chip("data-rvia","clientas",RCS.via,"Clientas")+chip("data-rvia","proyecto",RCS.via,"Proyecto")+'</div>';
  if(sec==="guias"){
    const via=RCS.via,tm=RCS.tema[via]||"",T=rcTemas(via),tot=T.reduce((a,x)=>a+x[1],0);
    h+='<div class="rtemas'+(RCS.q.trim()?" off":"")+'" id="rc_temas" role="group" aria-label="Temas">'
     +'<button type="button" class="chip'+(!tm?" on":"")+'" data-rtema="" aria-pressed="'+(!tm)+'">Todas <span class="rn">'+tot+'</span></button>'
     +T.map(x=>'<button type="button" class="chip'+(tm===x[0]?" on":"")+'" data-rtema="'+esc(x[0])+'" aria-pressed="'+(tm===x[0])+'">'+esc(x[0])+' <span class="rn">'+x[1]+'</span></button>').join("")+'</div>';
  }
  h+='<label>Buscar<input id="rc_q" type="search" autocomplete="off" value="'+esc(RCS.q)+'" placeholder="'+(sec==="guias"?"Por título, palabra, tema o para quién":sec==="minis"?"Por situación o por palabra":"Escribe una palabra")+'"></label></section>';
  h+='<div id="rc_list">'+listaHtml()+'</div>';
  return h;
}
function listaHtml(){
  const q=norm(RCS.q.trim());
  if(RCS.sec==="dia")return diaHtml(q);
  if(RCS.sec==="minis")return minisHtml(q);
  return guiasHtml(q);
}
function guiasHtml(q){
  const via=RCS.via,tema=q?"":(RCS.tema[via]||""),hit=(...t)=>norm(t.join(" ")).includes(q);
  const item=(id,tag,titulo,kw,para,cls)=>'<button class="ritem'+(cls||"")+'" data-rg="'+esc(id)+'"><span class="rtag">'+esc(tag)+'</span><b>'+esc(titulo)+'</b>'+(kw?'<span class="rkw">Palabra: '+esc(kw)+'</span>':'')+(para?'<small>'+esc(para)+'</small>':'')+'</button>';
  const gItem=g=>item(g.id,g.amp?"Mini guía":"Guía + tarjeta",g.titulo,(g.kw||[])[0],g.para);
  const orden=rcTemas(via).map(x=>x[0]);
  // con texto en el buscador se ignora el tema y se busca en todas las del camino
  const eq=tema?[]:teamRecs().filter(r=>r.via===via&&(!q||hit(r.titulo,r.kw.join(" "),r.para)));
  const gs=DB.guias.filter(g=>g.via===via&&(q?hit(g.titulo,(g.kw||[]).join(" "),g.para,g.tema):(!tema||g.tema===tema)));
  const eqItem=r=>item(r.id,"Del equipo · "+TIPO_TAG[recTipo(r)],r.titulo,r.kw[0],r.para," eq");
  let h='<section class="panel rlist"><p class="mut rcount">'+rcNum(gs.length,"guía","guías")+(tema?' de «'+esc(tema)+'»':'')+' para '+rcVia(via)+(q?' con «'+esc(RCS.q.trim())+'»':'')+(eq.length?' y '+rcNum(eq.length,"recurso","recursos")+' del equipo':'')+'</p>';
  h+=eq.map(eqItem).join("");
  if(q){
    // buscando: las guías por el orden de los temas, y debajo (con su título) las mini guías de situaciones que coinciden
    const gq=gs.slice().sort((a,b)=>orden.indexOf(a.tema)-orden.indexOf(b.tema));
    h+=(gq.length?'<h3 class="rtema">Guías <span class="rn">'+gq.length+'</span></h3>'+gq.map(gItem).join(""):"");
    const S2=C2.PKS.filter(s=>s.via===via&&rcSitHit(s,q));
    if(S2.length){
      h+='<h3 class="rtema">Mini guías de situaciones <span class="rn">'+S2.length+'</span></h3>'+S2.slice(0,RC_MAX_BUSCA).map(rcSitItem).join("");
      if(S2.length>RC_MAX_BUSCA)h+='<div class="acts"><button type="button" class="btn ghost" data-rsec="minis" data-rkeepq="1">Ver las '+S2.length+' mini guías</button></div>';
    }
    if(!gs.length&&!eq.length&&!S2.length)h+=VIS.sinRes('No hay nada con esa palabra. Prueba con otra.',"rc_q");
  }else if(tema){
    h+=gs.map(gItem).join("");
  }else{
    // «Todas»: agrupadas bajo el título de cada tema
    orden.forEach(t=>{const L=gs.filter(g=>g.tema===t);if(L.length)h+='<h3 class="rtema">'+esc(t)+' <span class="rn">'+L.length+'</span></h3>'+L.map(gItem).join("")});
    if(!gs.length&&!eq.length)h+=VIS.sinRes('Todavía no hay guías en este camino.',"rc_q");
  }
  return h+'</section>';
}
// grupos de situaciones de un camino que tienen algo con esa búsqueda: [[grupo, situaciones que coinciden]]
const rcGruposQ=q=>rcGrupos(RCS.via).map(([g,L])=>[g,L.filter(s=>rcSitHit(s,q))]).filter(x=>x[1].length);
const rcMoKey=g=>RCS.via+"|"+g;
function minisHtml(q){
  const G=rcGruposQ(q),tot=G.reduce((a,x)=>a+x[1].length,0),auto=!!q&&tot<=30; // con pocas coincidencias salen ya abiertos
  let h='<section class="panel rlist"><p class="mut rcount">'+rcNum(tot,"mini guía","mini guías")+' de situaciones para '+rcVia(RCS.via)+(q?' con «'+esc(RCS.q.trim())+'»':'')+'</p>';
  h+=G.map(([g,L])=>{const ab=auto||!!RCS.mo[rcMoKey(g)];
    return '<details class="rdet rgrp" data-rgrp="'+esc(g)+'"'+(ab?" open":"")+'><summary><span>'+esc(g)+' <span class="rn">'+L.length+'</span></span></summary><div class="rdb">'+(ab?L.map(rcSitItem).join(""):"")+'</div></details>'}).join("");
  if(!G.length)h+=VIS.sinRes('No hay ninguna situación con esa palabra. Prueba con otra.',"rc_q");
  return h+'</section>';
}
// un grupo se abre: solo entonces se pintan sus situaciones
document.addEventListener("toggle",e=>{
  const d=e.target;if(!d||!d.classList||!d.classList.contains("rgrp"))return;
  const g=d.dataset.rgrp;if(d.open)RCS.mo[rcMoKey(g)]=1;else delete RCS.mo[rcMoKey(g)];
  const b=d.querySelector(".rdb");
  if(d.open&&b&&!b.firstChild){const q=norm(RCS.q.trim()),x=rcGrupos(RCS.via).find(y=>y[0]===g);if(x)b.innerHTML=x[1].filter(s=>rcSitHit(s,q)).map(rcSitItem).join("")}
},true);
const CONV_TXT={reaccion_emoji:"Te responde con un emoji a una story",respuesta_encuesta:"Contesta a tu encuesta o caja de preguntas",le_gusto_producto:"Le ha gustado un producto",reactivar:"Reactivar a alguien que dejó de escribir",postventa:"Después de un pedido",pregunta_precio:"Te pregunta el precio",me_lo_pienso:"Te dice «me lo pienso»",curiosidad_proyecto:"Tiene curiosidad por el proyecto",tras_zoom:"Después de un Zoom",no_al_proyecto:"Te dice que no al proyecto",agradecer:"Dar las gracias",permiso_testimonio:"Pedir permiso para compartir su opinión"};
function diaHtml(q){
  const C=(DB.frases&&DB.frases.conversacion)||{};
  const keys=Object.keys(C).filter(k=>!q||norm((CONV_TXT[k]||k)+" "+C[k].join(" ")).includes(q));
  let h='<section class="panel"><p class="mut rcount">'+keys.length+' situaciones, cada una con 4 versiones. Cambia lo que no suene a ti.</p>';
  h+=keys.map(k=>'<details class="rdet"><summary>'+esc(CONV_TXT[k]||k.replace(/_/g," "))+'</summary><div class="rdb">'+C[k].map((t,i)=>rcMsg(t,i+1)).join("")+'</div></details>').join("");
  if(!keys.length)h+=VIS.sinRes('No hay nada con esa palabra. Prueba con otra.',"rc_q");
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
  let h='<section class="panel rhead"><span class="rtag">'+(proy?"Proyecto":"Clientas")+'</span><h2>'+esc(g.titulo)+'</h2><p class="lead">'+esc(g.para||"")+'</p><div class="kws">'+(g.kw||[]).map(k=>'<span class="chip on rkwc">'+esc(k)+'</span>').join("")+'</div><p class="note">Esta es la palabra de la guía. Si en tu publicación pediste otra, mándala igual: lo que cuenta es la guía.</p></section>';
  if(isNutri(g))h+='<div class="aviso">'+esc(REC_AVISO_NUTRI())+'</div>';
  h+=rcStep(1,"Mensaje de entrega","Lo primero que envías por mensaje privado de Instagram, con la guía.",(kit.entrega||[]).map((t,i)=>rcMsg(t,i+1,"","g:"+g.id)).join(""));
  const lineas=String(g.texto||"").split("\n").map(l=>l.trim()?esc(l):"<br>").join("<br>").replace(/(<br>){3,}/g,"<br><br>");
  h+=rcStep(2,"El material",g.amp?"La mini guía para compartir o guardar como PDF y el texto para pegar en el chat.":"La guía para pegar en el chat y la tarjeta para compartir como imagen.",
    '<div class="rtext"><div class="rmh"><span class="rver">Texto de la guía</span>'+rcCopy(g.texto||"","","g:"+g.id)+'</div><div class="rbody">'+lineas+'</div></div>'
    +'<h4 class="rsub">'+(g.amp?"Mini guía":"Tarjeta")+'</h4>'+(typeof mgBloque==="function"?mgBloque(g):tjBloque("rec:"+g.id)));
  h+=rcStep(3,"Seguimiento a los 2-3 días","Si no te ha contestado, un recordatorio sin presión.",(kit.seguimiento||[]).map((t,i)=>rcMsg(t,i+1)).join(""));
  const tel=miTel();
  h+=rcStep(4,"Pasar a WhatsApp","Cuando ya hay confianza, llévala a una conversación más cómoda.",
    '<p class="tipp">'+(tel?'He puesto tu teléfono ('+esc(tel)+') en los mensajes. Puedes cambiarlo en <button class="linkb" data-tab="perfil">Mi cuenta</button>.':'Cambia <b>6XX XXX XXX</b> por tu número antes de enviar. Si lo guardas en <button class="linkb" data-tab="perfil">Mi cuenta</button>, se pondrá solo.')+'</p>'
    +(kit.whatsapp||[]).map((t,i)=>rcMsg(subTel(t),i+1)).join(""));
  if(proy){
    h+=rcStep(5,"Siguiente paso","Propón un Zoom a solas, de no más de 25 minutos.",(kit.siguiente||[]).map((t,i)=>rcMsg(t,i+1)).join("")
      +((kit.alternativa||[]).length?'<h4 class="rsub">Si no quiere Zoom</h4><p class="mut">Ofrécele un vídeo corto.</p>'+kit.alternativa.map((t,i)=>rcMsg(t,i+1)).join("")+rcVideo():''));
  }else{
    h+=rcStep(5,"Siguiente paso","Una recomendación concreta, sin presión.",(kit.siguiente||[]).map((t,i)=>rcMsg(t,i+1)).join(""));
  }
  return h;
}
// ----- FICHA de una mini guía de situación (la misma que ofrece Crear, para mandarla sin pasar por Crear) -----
function viewSitMini(){
  const s=C2.PK[S.rsm];
  if(!s)return '<section class="panel"><h2>No encuentro esa situación</h2><p class="lead">Vuelve a la lista y elige otra.</p></section>';
  const G=s.pk.guia,mg=mgSit(s),mini=!!(mg&&mgOk(mg));
  let h='<section class="panel rhead"><span class="rtag">Mini guía · '+(s.via==="proyecto"?"Proyecto":"Clientas")+'</span><h2>'+esc(s.nombre)+'</h2><p class="lead">Mandas: '+esc(s.recurso||s.pk.recurso_corto||"")+'</p>'
   +'<div class="kws">'+(s.kw||[]).slice(0,1).map(k=>'<span class="chip on rkwc">'+esc(k)+'</span>').join("")+'</div>'
   +'<p class="note">Situación del grupo «'+esc(s.grupo)+'».</p><div class="acts"><button type="button" class="btn" data-rscrear="'+esc(s.id)+'">Abrir esta situación en Crear</button></div></section>';
  h+=rcStep(1,"Mensaje de entrega","Lo primero que envías por mensaje privado de Instagram, con la guía.",rcMsg(G.entrega,1,"","pk:"+s.id));
  h+=rcStep(2,"El material",mini?"La mini guía para compartir o guardar como PDF y el texto para pegar en el chat.":"La guía para pegar en el chat y la tarjeta para compartir como imagen.",
    (mini?mgBloque(mg):tjBloque("pk:"+s.id))
    +'<details class="c2dd rdet"><summary><b>O solo el texto, por si prefieres mandarlo escrito</b></summary><div class="rtext"><div class="rmh"><span class="rver">Texto de la guía</span>'+rcCopy(G.texto||"","","pk:"+s.id)+'</div><div class="rbody">'+String(G.texto||"").split("\n").map(l=>l.trim()?esc(l):"<br>").join("<br>").replace(/(<br>){3,}/g,"<br><br>")+'</div></div></details>');
  h+=rcStep(3,"Seguimiento a los 2-3 días","Si no te ha contestado, un recordatorio sin presión.",rcMsg(G.seguimiento,1));
  return h+'<section class="panel"><div class="acts"><button type="button" class="btn ghost" data-rscrear="'+esc(s.id)+'">Abrir esta situación en Crear</button></div></section>';
}
VIEWS.sit_mini=viewSitMini;
function viewRecEquipo(r){
  const t=recTipo(r),a=r.adjunto;
  let n=0,h='<section class="panel rhead"><span class="rtag">Del equipo · '+TIPO_TAG[t]+'</span><h2>'+esc(r.titulo)+'</h2>'+(r.para?'<p class="lead">'+esc(r.para)+'</p>':'')+'<div class="kws">'+r.kw.map(k=>'<span class="chip on rkwc">'+esc(k)+'</span>').join("")+'</div></section>';
  if(r.entrega.length)h+=rcStep(++n,"Mensaje de entrega","",r.entrega.map((x,i)=>rcMsg(x,i+1,"","e:"+r.id)).join(""));
  let mat="";
  if(r.texto)mat+='<div class="rtext"><div class="rmh"><span class="rver">Texto</span>'+rcCopy(r.texto,"","e:"+r.id)+'</div><div class="rbody">'+r.texto.split("\n").map(l=>l.trim()?esc(l):"").join("<br>")+'</div></div>';
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

// ----- TARJETA (canvas 1080 x 1350) · una sola función de dibujo para las guías de Recursos y las situaciones de Crear -----
// Todo texto se mide antes de dibujarlo: el título baja hasta caber en dos líneas, los puntos se parten en dos líneas como
// mucho y, si no caben, bajan todos por igual (nunca de 38 px). tjDibuja devuelve la medida; recortado=true si algo no cabe.
const TJ_W=1080,TJ_H=1350,TJ_MX=96,TJ_PMIN=38,TJ_BOT=1236;
const TJ_FT="AntonFT, Impact, sans-serif",TJ_FS='-apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
const TJ_EST={
 crema:{n:"Crema",bg:"#F3EADA",tx:"#3a2c25",sub:"#7a665b",ac:"#614a3e",circ:"#EBDDC5",circTx:"#4a372d",circLn:"",rule:"rgba(97,74,62,.30)",band:"#614a3e",bandTx:"#EBDDC5",bandLb:"#d9c7a8",foot:"#7a665b",marco:false},
 marron:{n:"Marrón",bg:"#614a3e",tx:"#F6EFE2",sub:"#d9c7a8",ac:"#EBDDC5",circ:"",circTx:"#EBDDC5",circLn:"#EBDDC5",rule:"rgba(235,221,197,.32)",band:"#3b2b23",bandTx:"#EBDDC5",bandLb:"#c9b592",foot:"#d9c7a8",marco:false},
 papel:{n:"Papel",bg:"#FBF7EE",tx:"#3a2c25",sub:"#7a665b",ac:"#614a3e",circ:"",circTx:"#4a372d",circLn:"#614a3e",rule:"rgba(97,74,62,.30)",band:"#614a3e",bandTx:"#EBDDC5",bandLb:"#d9c7a8",foot:"#7a665b",marco:true}};
// parte el texto en líneas que caben en maxW; over=true si alguna palabra sola no cabe
function tjWrap(ctx,text,maxW){
  const lines=[];let cur="";
  String(text).split(/\s+/).filter(Boolean).forEach(w=>{
    const t=cur?cur+" "+w:w;
    if(cur&&ctx.measureText(t).width>maxW){lines.push(cur);cur=w}else cur=t;
  });
  if(cur)lines.push(cur);
  return {l:lines,over:lines.some(x=>ctx.measureText(x).width>maxW)};
}
// reparte en dos líneas lo más igualadas posible (mejor que una larga y una palabra suelta)
function tjBal(ctx,text,maxW){
  const w=String(text).split(/\s+/).filter(Boolean);let best=null,bw=1e9;
  for(let i=1;i<w.length;i++){
    const a=w.slice(0,i).join(" "),b=w.slice(i).join(" "),m=Math.max(ctx.measureText(a).width,ctx.measureText(b).width);
    if(m<=maxW&&m<bw){bw=m;best=[a,b]}
  }
  return best;
}
function tjEsp(ctx,txt,x,y,sp){ // letras espaciadas, a mano (ctx.letterSpacing no está en todos los móviles)
  let cx=x;[...txt].forEach(c=>{ctx.fillText(c,cx,y);cx+=ctx.measureText(c).width+sp});return cx-sp-x;
}
function tjTitulo(ctx,txt,W,cap){
  const T=String(txt||"").toUpperCase().replace(/\s+/g," ").trim();
  for(let ts=cap;ts>=56;ts-=2){
    ctx.font=ts+"px "+TJ_FT;const r=tjWrap(ctx,T,W);
    if(!r.over&&r.l.length<=2){return {ts,l:r.l.length===2?(tjBal(ctx,T,W)||r.l):r.l,ok:true}}
  }
  ctx.font="56px "+TJ_FT;return {ts:56,l:tjWrap(ctx,T,W).l.slice(0,2),ok:false};
}
// calcula toda la maqueta (sin dibujar): alturas, líneas y tamaños
function tjMaqueta(ctx,t,via){
  const W=TJ_W-2*TJ_MX,pts=(t.puntos||[]).map(p=>String(p||"").trim()).filter(Boolean).slice(0,5),n=pts.length,M={ok:true,motivos:[]};
  // banda del cierre
  const cierre=String(t.cierre||"").toUpperCase().replace(/\s+/g," ").trim(),BP=44;
  let cs=44,cl=[];
  for(;cs>=30;cs-=2){ctx.font=cs+"px "+TJ_FT;const r=tjWrap(ctx,cierre,W-2*BP);cl=r.l;if(!r.over&&cl.length<=2)break}
  ctx.font=cs+"px "+TJ_FT;{const r=tjWrap(ctx,cierre,W-2*BP);if(r.over||r.l.length>2){M.ok=false;M.motivos.push("cierre")}cl=r.l.slice(0,2);if(!r.over&&r.l.length===2){const b=tjBal(ctx,cierre,W-2*BP);if(b)cl=b}}
  M.cs=cs;M.cl=cl;
  M.lbl=via==="proyecto"?"RECUERDA":"TRUCO";
  M.bandH=cl.length?BP*.85+22+16+cl.length*cs*1.12+BP*.9:0;
  M.bandTop=TJ_BOT-M.bandH;
  const ps0=n<=3?46:n===4?44:42;M.ps0=ps0;
  let fit=null;
  const C3=[120,108,96],C5=[120,108,96,84,72];
  // pasadas de más a menos cómoda: primero se encoge un poco el título, luego la letra de los puntos (nunca de 38), luego el aire
  for(const [psMin,minPad,caps] of [[42,18,C3],[TJ_PMIN,18,C3],[TJ_PMIN,12,C5],[TJ_PMIN,8,C5]]){
  for(const cap of caps){
    const tt=tjTitulo(ctx,t.titulo,W,cap);
    const tlh=tt.ts*1.04,titTop=180,titH=tt.l.length*tlh;
    let ss=34,sl;
    for(;ss>=28;ss-=2){ctx.font=ss+"px "+TJ_FS;sl=tjWrap(ctx,t.sub||"",W);if(!sl.over&&sl.l.length<=2)break}
    ctx.font=ss+"px "+TJ_FS;sl=tjWrap(ctx,t.sub||"",W);
    const subOk=!sl.over&&sl.l.length<=2,subH=sl.l.slice(0,2).length*ss*1.38;
    const ptsTop=titTop+titH+(subH?20+subH:0)+44,area=M.bandTop-(cl.length?44:0)-ptsTop;
    for(let ps=ps0;ps>=Math.min(psMin,ps0);ps--){
      for(const lhf of [1.3,1.2,1.14]){
        ctx.font=ps+"px "+TJ_FS;
        const d=Math.round(ps*1.5),gap=28,Wt=W-d-gap,wr=pts.map(p=>{const r=tjWrap(ctx,p,Wt);if(!r.over&&r.l.length===2){const b=tjBal(ctx,p,Wt);if(b)r.l=b}return r});
        if(wr.some(r=>r.over||r.l.length>2))continue;
        const lh=ps*lhf,rh=wr.map(r=>Math.max(d,r.l.length*lh)),sum=rh.reduce((a,b)=>a+b,0);
        const pad=n>1?Math.min(40,Math.floor((area-sum)/(2*(n-1)))):40;
        if(pad<minPad&&n>1)continue;
        if(n===1&&sum>area)continue;
        const total=sum+(n-1)*2*Math.max(pad,0);
        fit={cap,tt,tlh,titTop,titH,ss,sl:sl.l.slice(0,2),subOk,subH,ptsTop,area,ps,lh,d,gap,Wt,wr,rh,pad:Math.max(pad,8),total,lhf};
        break;
      }
      if(fit)break;
    }
    if(fit)break;
    M.last={cap,tt,tlh,titTop,titH,ss,sl:sl.l.slice(0,2),subOk,subH,ptsTop,area};
  }
  if(fit)break;
  }
  if(!fit){ // no cabe ni al mínimo: se dibuja lo que se pueda y se avisa
    const L=M.last,ps=TJ_PMIN,d=Math.round(ps*1.5),gap=28,Wt=W-d-gap;ctx.font=ps+"px "+TJ_FS;
    const wr=pts.map(p=>{const r=tjWrap(ctx,p,Wt);return {l:r.l.slice(0,2),over:r.over}});
    const lh=ps*1.14,rh=wr.map(r=>Math.max(d,r.l.length*lh)),sum=rh.reduce((a,b)=>a+b,0);
    fit=Object.assign({cap:72,ps,lh,d,gap,Wt,wr,rh,pad:8,total:sum+(n-1)*16,lhf:1.14},L);M.ok=false;M.motivos.push("puntos");
  }
  if(!fit.tt.ok){M.ok=false;M.motivos.push("titulo")}
  if(!fit.subOk){M.ok=false;M.motivos.push("sub")}
  if(n<1){M.ok=false;M.motivos.push("sin puntos")}
  if(fit.total>fit.area+0.5){M.ok=false;if(M.motivos.indexOf("puntos")<0)M.motivos.push("puntos")}
  M.F=fit;return M;
}
function tjPinta(cv,t,o){
  o=o||{};const E=TJ_EST[o.estilo]||TJ_EST.crema,ctx=cv.getContext("2d"),W=TJ_W-2*TJ_MX,X=TJ_MX;
  cv.width=TJ_W;cv.height=TJ_H;ctx.textBaseline="alphabetic";ctx.textAlign="left";
  const M=tjMaqueta(ctx,t,o.via),F=M.F;
  ctx.fillStyle=E.bg;ctx.fillRect(0,0,TJ_W,TJ_H);
  if(E.marco){ // Papel: borde fino y esquinas marcadas
    const i=44,l=64;ctx.strokeStyle=E.ac;ctx.lineWidth=2;ctx.strokeRect(i,i,TJ_W-2*i,TJ_H-2*i);
    ctx.lineWidth=8;ctx.lineCap="butt";
    [[i,i,1,1],[TJ_W-i,i,-1,1],[i,TJ_H-i,1,-1],[TJ_W-i,TJ_H-i,-1,-1]].forEach(c=>{ctx.beginPath();ctx.moveTo(c[0],c[1]+c[3]*l);ctx.lineTo(c[0],c[1]);ctx.lineTo(c[0]+c[2]*l,c[1]);ctx.stroke()});
  }
  // etiqueta y línea fina
  ctx.fillStyle=E.ac;ctx.font="700 24px "+TJ_FS;tjEsp(ctx,o.via==="proyecto"?"IDEAS":"GUÍA",X,112,7);
  ctx.fillStyle=E.rule;ctx.fillRect(X,134,W,2);ctx.fillStyle=E.ac;ctx.fillRect(X,132,72,6);
  // título
  ctx.fillStyle=E.tx;ctx.font=F.tt.ts+"px "+TJ_FT;
  F.tt.l.forEach((l,i)=>ctx.fillText(l,X,F.titTop+i*F.tlh+F.tt.ts*.9));
  // subtítulo
  ctx.fillStyle=E.sub;ctx.font=F.ss+"px "+TJ_FS;
  F.sl.forEach((l,i)=>ctx.fillText(l,X,F.titTop+F.titH+20+i*F.ss*1.38+F.ss*1.0));
  // puntos
  const spare=Math.max(0,F.area-F.total);let y=F.ptsTop+spare/2;
  F.wr.forEach((r,i)=>{
    const rh=F.rh[i],cy=y+rh/2,cx=X+F.d/2,rad=F.d/2;
    ctx.beginPath();ctx.arc(cx,cy,rad-1.5,0,Math.PI*2);
    if(E.circ){ctx.fillStyle=E.circ;ctx.fill()}
    if(E.circLn){ctx.strokeStyle=E.circLn;ctx.lineWidth=3;ctx.stroke()}
    const nf=Math.round(F.d*.52);ctx.font=nf+"px "+TJ_FT;ctx.fillStyle=E.circTx;
    const num=String(i+1),m=ctx.measureText(num),asc=m.actualBoundingBoxAscent||nf*.72;
    ctx.fillText(num,cx-m.width/2,cy+asc/2);
    ctx.fillStyle=E.tx;ctx.font=F.ps+"px "+TJ_FS;
    const th=r.l.length*F.lh,ty=cy-th/2;
    r.l.forEach((l,k)=>ctx.fillText(l,X+F.d+F.gap,ty+k*F.lh+(F.lh-F.ps)/2+F.ps*.8));
    y+=rh;
    if(i<F.wr.length-1){ctx.fillStyle=E.rule;ctx.fillRect(X,y+F.pad-1,W,2);y+=2*F.pad}
  });
  M.ptsFin=y;
  // banda del cierre
  if(M.cl.length){
    ctx.fillStyle=E.band;ctx.fillRect(X,M.bandTop,W,M.bandH);
    const bx=X+44,by=M.bandTop+44*.85;
    ctx.fillStyle=E.bandLb;ctx.font="700 22px "+TJ_FS;tjEsp(ctx,M.lbl,bx,by+18,6);
    ctx.fillStyle=E.bandTx;ctx.font=M.cs+"px "+TJ_FT;
    M.cl.forEach((l,i)=>ctx.fillText(l,bx,by+22+16+i*M.cs*1.12+M.cs*.86));
  }
  // pie: usuario de Instagram (si lo hay)
  const u=o.user||"";M.usuario=u;
  if(u){let fs=30;ctx.font="600 "+fs+"px "+TJ_FS;while(fs>22&&ctx.measureText(u).width>W){fs--;ctx.font="600 "+fs+"px "+TJ_FS}
    ctx.fillStyle=E.foot;ctx.fillText(u,X,TJ_BOT+64)}
  M.recortado=!M.ok;M.ts=F.tt.ts;M.ps=F.ps;M.cap=F.cap;M.pad=F.pad;
  M.reducido=F.ps<M.ps0||F.cap<120||M.cs<44;
  M.w=cv.width;M.h=cv.height;
  return M;
}
async function tjDibuja(cv,t,o){
  try{if(document.fonts){await document.fonts.load("100px AntonFT");await document.fonts.ready}}catch(e){}
  return tjPinta(cv,t,o);
}
// ----- tarjeta en pantalla: vista previa, estilo, compartir / guardar y usuario -----
const TJ={est:null,io:null,t:0};
function tjEstilo(){if(!TJ.est){const e=ls("fs_tj_estilo");TJ.est=TJ_EST[e]?e:"crema"}return TJ.est}
function tjDatos(key){
  const i=String(key).indexOf(":"),k=String(key).slice(0,i),id=String(key).slice(i+1);
  if(k==="rec"){const g=GUIA[id];return g&&g.tarjeta?{t:g.tarjeta,via:g.via}:null}
  if(k==="pk"){const s=typeof C2!=="undefined"&&C2.PK[id];return s&&s.pk&&s.pk.tarjeta?{t:s.pk.tarjeta,via:s.via}:null}
  return null;
}
function tjBloque(key,sinUser){
  const D=tjDatos(key);if(!D)return "";
  const est=tjEstilo(),share=rcCanShare(),u=miUsuario().slice(1);
  return '<div class="tjb">'
   +'<div class="tjw"><canvas class="tjc" width="1080" height="1350" data-tjk="'+esc(key)+'" role="img" aria-label="Vista previa de la tarjeta: '+esc(D.t.titulo)+'"></canvas></div>'
   +'<div class="tjst" role="group" aria-label="Estilo de la tarjeta">'+Object.keys(TJ_EST).map(k=>'<button type="button" class="chip'+(k===est?" on":"")+'" data-tjs="'+k+'" aria-pressed="'+(k===est)+'">'+TJ_EST[k].n+'</button>').join("")+'</div>'
   +'<div class="acts">'+(share?'<button type="button" class="btn" data-tjshare="1">Compartir</button>':'')+'<button type="button" class="btn'+(share?" ghost":"")+'" data-tjdl="1">Guardar imagen</button></div>'
   +(sinUser?'':'<label class="tju">Tu usuario de Instagram<span class="tjin"><b aria-hidden="true">@</b><input class="tjuser" type="text" value="'+esc(u)+'" maxlength="30" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="text" placeholder="tuusuario"></span></label>'+'<p class="note tjnote">Opcional. Sale al pie de todas tus tarjetas y se guarda solo en este móvil.</p>')+'</div>';
}
async function tjPintaCv(cv){
  const D=tjDatos(cv.dataset.tjk);if(!D)return;
  const id=cv._tj=(cv._tj||0)+1;
  try{
    const m=await tjDibuja(cv,D.t,{estilo:tjEstilo(),via:D.via,user:miUsuario()});
    if(cv._tj!==id)return;
    cv.dataset.tjd="1";cv._med=m;cv._blob=null;
    cv.toBlob(b=>{if(cv._tj===id)cv._blob=b},"image/png");
  }catch(e){console.error("tarjeta",e)}
}
// solo se dibuja cuando el bloque se abre o entra en pantalla (los de un desplegable cerrado no cuentan como visibles)
function tjScan(){
  if(typeof mgScan==="function")mgScan();
  document.querySelectorAll("canvas.tjc:not([data-tjo])").forEach(cv=>{
    cv.dataset.tjo="1";
    if(!("IntersectionObserver" in window)){tjPintaCv(cv);return}
    if(!TJ.io)TJ.io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){TJ.io.unobserve(e.target);tjPintaCv(e.target)}}),{rootMargin:"300px"});
    TJ.io.observe(cv);
  });
}
const tjRedibuja=()=>{document.querySelectorAll("canvas.tjc[data-tjd]").forEach(tjPintaCv);if(typeof mgRedibuja==="function")mgRedibuja()};
function tjNombre(cv){
  const D=tjDatos(cv.dataset.tjk),s=String(D?D.t.titulo:"fam").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,50);
  return "tarjeta-"+(s||"fam")+".png";
}
async function tjBlob(cv){
  if(!cv.dataset.tjd)await tjPintaCv(cv);
  return cv._blob||await new Promise(ok=>cv.toBlob(ok,"image/png"));
}
async function tjGuardar(cv){
  const b=await tjBlob(cv);if(!b){toast("La tarjeta no está lista");return}
  const url=URL.createObjectURL(b),a=document.createElement("a");a.href=url;a.download=tjNombre(cv);document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
  toast("Imagen guardada");
}
async function tjCompartir(cv){
  const b=await tjBlob(cv);if(!b){toast("La tarjeta no está lista");return}
  const f=new File([b],tjNombre(cv),{type:"image/png"});
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f]});return}}
  catch(e){if(e&&e.name==="AbortError")return}
  tjGuardar(cv);
}
function tjUsuario(el){
  let v=el.value.replace(/@/g,"").replace(/[^A-Za-z0-9._]/g,"").slice(0,30);
  if(v!==el.value)el.value=v;
  const P=ls("ft_perfil")||{};P.user=v;ls("ft_perfil",P);
  document.querySelectorAll(".tjuser").forEach(x=>{if(x!==el)x.value=v});
  clearTimeout(TJ.t);TJ.t=setTimeout(tjRedibuja,250);
}
function tjClick(t){
  const d=t.dataset,cv=()=>{const b=t.closest(".tjb");return b&&b.querySelector("canvas.tjc")};
  if(d.tjs&&TJ_EST[d.tjs]){TJ.est=d.tjs;ls("fs_tj_estilo",d.tjs);document.querySelectorAll("[data-tjs]").forEach(b=>{const on=b.dataset.tjs===d.tjs;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on)});tjRedibuja();return true}
  if(d.tjshare){const c=cv();if(c)tjCompartir(c);return true}
  if(d.tjdl){const c=cv();if(c)tjGuardar(c);return true}
  return false;
}

// ----- ADMINISTRACIÓN: recursos del equipo -----
function pesoPaqueteMB(){try{return JSON.stringify(DB).length*4/3/1048576}catch(e){return 0}}
function adminRecursosHtml(){
  const L=teamRecs(),mb=pesoPaqueteMB();
  let h='<section class="panel"><h3>Recursos del equipo</h3><p>Crea guías, imágenes, PDF o vídeos propios. Aparecen en Recursos junto a las demás. Los cambios no llegan al equipo hasta que los publiques abajo.</p>';
  h+='<p class="'+(mb>8?"aviso":"note")+'">Tamaño estimado del paquete: <b>'+mb.toFixed(1).replace(".",",")+' MB</b>.'+(mb>8?' Pasa de 8 MB: la app tardará en abrir en móviles con poca cobertura. Quita algún PDF o alguna imagen grande.':'')+'</p>';
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
    catch(e){inp.value="";raInfo("");raErr(e&&e.message==="La imagen es demasiado grande."?e.message:"No he podido leer esa imagen. Prueba con otra (JPG o PNG).")}
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
  if(d.rsec){RCS.sec=d.rsec;if(!d.rkeepq)RCS.q="";render(true);if(d.rkeepq)window.scrollTo(0,0);return}
  if(d.rvia){RCS.via=d.rvia;render(true);return}
  if(d.rtema!==undefined){RCS.tema[RCS.via]=d.rtema;RCS.q="";render(true);return} // elegir un tema deja el buscador en blanco
  if(d.rg){S.guia=guiaId(d.rg);go("guia_det");return}
  if(d.rsm){S.rsm=d.rsm;go("sit_mini");return}
  if(d.rscrear){const s=C2.PK[d.rscrear];if(s)C2.abrir(C2.st().t,s.via,C2.vale(s,C2.st().o)?C2.st().o:(s.objetivos.indexOf("escriban")>=0?"escriban":s.objetivos[0]),s.id);return}
  if(tjClick(t))return;
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
  if(e.target.classList&&e.target.classList.contains("tjuser")){tjUsuario(e.target);return}
  if(e.target.id==="rc_q"){RCS.q=e.target.value;const l=document.getElementById("rc_list");if(l)l.innerHTML=listaHtml();const tm=document.getElementById("rc_temas");if(tm)tm.classList.toggle("off",!!RCS.q.trim())}
});

// ===== Fam Studio · Mini guía: la guía de Recursos maquetada como una pequeña revista (canvas 1080 x 1350 por página) =====
// Todo texto se mide antes de dibujarlo. mgMaqueta() calcula las páginas (sin dibujar) y devuelve un informe; mgPinta() dibuja una.
// Si un texto no cabe, baja de tamaño por pasos hasta un mínimo (texto corrido 32 px, títulos de página 64 px); si aun así
// no cabe, los pasos se reparten en una página más. La vista previa es un carrusel que solo dibuja la página visible y las vecinas.
// El PDF se genera aquí mismo (cada página es un JPEG incrustado), sin librerías.
const MG_W=1080,MG_H=1350,MG_X=96,MG_CW=MG_W-2*MG_X,MG_TOP=168,MG_BOT=1140,MG_RULE=1180,MG_BASE=1244;
const MG_PMAX=62; // letra más grande del texto de un paso (la página se llena cuando hay pocos pasos)
const MG_CMIN=32,MG_TMIN=64; // mínimos: texto corrido y títulos de página
const MG_ENM_FH=540,MG_ENM_ESC=1.8,MG_ENM_ANCHO=900; // portada enmarcada: foto mínima de alto, ampliación máxima de la foto y ancho desde el que la foto va a sangre
const MG_EST={
 crema:{n:"Crema",bg:"#F3EADA",tx:"#3a2c25",sub:"#7a665b",ac:"#614a3e",box:"#E7D8BC",rule:"rgba(97,74,62,.28)",quote:"rgba(97,74,62,.10)",numFill:"#EBDDC5",numLn:"",numTx:"#4a372d",
  band:"#614a3e",bandTx:"#F6EFE2",bandLb:"#d9c7a8",sheet:"#FBF6EC",sheetLn:"rgba(97,74,62,.22)",marco:false,
  inv:{bg:"#614a3e",tx:"#F6EFE2",sub:"#d9c7a8",ac:"#EBDDC5",rule:"rgba(235,221,197,.32)",ring:"rgba(235,221,197,.16)"}},
 marron:{n:"Marrón",bg:"#614a3e",tx:"#F6EFE2",sub:"#d9c7a8",ac:"#EBDDC5",box:"#4c382e",rule:"rgba(235,221,197,.30)",quote:"rgba(235,221,197,.09)",numFill:"",numLn:"#EBDDC5",numTx:"#EBDDC5",
  band:"#EBDDC5",bandTx:"#3a2c25",bandLb:"#614a3e",sheet:"#6c5446",sheetLn:"rgba(235,221,197,.28)",marco:false,
  inv:{bg:"#F3EADA",tx:"#3a2c25",sub:"#7a665b",ac:"#614a3e",rule:"rgba(97,74,62,.28)",ring:"rgba(97,74,62,.12)"}},
 papel:{n:"Papel",bg:"#FBF7EE",tx:"#3a2c25",sub:"#7a665b",ac:"#614a3e",box:"#F0E6D2",rule:"rgba(97,74,62,.28)",quote:"rgba(97,74,62,.08)",numFill:"",numLn:"#614a3e",numTx:"#4a372d",
  band:"#614a3e",bandTx:"#F6EFE2",bandLb:"#d9c7a8",sheet:"#FFFFFF",sheetLn:"rgba(97,74,62,.22)",marco:true,
  inv:{bg:"#614a3e",tx:"#F6EFE2",sub:"#d9c7a8",ac:"#EBDDC5",rule:"rgba(235,221,197,.32)",ring:"rgba(235,221,197,.16)"}}};
const MG_ETQ={gancho:"PARA EMPEZAR",pasos:"PASO A PASO",errores:"ERRORES",lista:"TU CHULETA",extra:"UN EXTRA",cierre:"SIGUE POR AQUÍ"};
const MG_SEC={portada:"Portada",gancho:"Para empezar",pasos:"Paso a paso",errores:"Errores típicos",lista:"Tu chuleta",extra:"Un extra",cierre:"Siguiente paso"};
const mgF=(s,w)=>(w||400)+" "+s+"px "+TJ_FS,mgA=s=>s+"px "+TJ_FT;
const mgRango=(a,b,p)=>{const r=[];for(let x=a;x>=b;x-=p)r.push(x);return r};
let MG_CAP=.73;
async function mgListo(){
  try{if(document.fonts){await document.fonts.load("100px AntonFT");await document.fonts.ready}}catch(e){}
  try{const c=document.createElement("canvas").getContext("2d");c.font="200px "+TJ_FT;const a=c.measureText("H").actualBoundingBoxAscent;if(a>40&&a<200)MG_CAP=a/200}catch(e){}
}
// reparte en líneas parejas (sin una palabra suelta al final): la anchura más estrecha que mantiene el mismo número de líneas
function mgWrapBal(ctx,text,w){
  const r=tjWrap(ctx,text,w);if(r.over||r.l.length<2)return r;
  let lo=w*.45,hi=w,best=r;
  for(let i=0;i<14;i++){const m=(lo+hi)/2,q=tjWrap(ctx,text,m);if(!q.over&&q.l.length<=r.l.length){best=q;hi=m}else lo=m}
  return best;
}
// líneas con anchura distinta según la línea (el texto de un paso rodea la imagen del producto)
function mgWrapVar(ctx,text,wf){
  const ws=String(text).split(/\s+/).filter(Boolean),l=[];let cur="",over=false;
  const cierra=()=>{if(ctx.measureText(cur).width>wf(l.length)+.5)over=true;l.push(cur)};
  ws.forEach(w=>{const t=cur?cur+" "+w:w;if(cur&&ctx.measureText(t).width>wf(l.length)){cierra();cur=w}else cur=t});
  if(cur)cierra();
  return {l,over};
}
function mgFitSans(ctx,text,sizes,w,maxL,wt,bal){
  let r;
  for(const s of sizes){ctx.font=mgF(s,wt);r=bal?mgWrapBal(ctx,text,w):tjWrap(ctx,text,w);if(!r.over&&(!maxL||r.l.length<=maxL))return {s,l:r.l,ok:true}}
  const s=sizes[sizes.length-1];ctx.font=mgF(s,wt);r=bal?mgWrapBal(ctx,text,w):tjWrap(ctx,text,w);
  return {s,l:maxL?r.l.slice(0,maxL):r.l,ok:false};
}
function mgFitTit(ctx,text,sizes,w,maxL){
  const T=String(text||"").toUpperCase().replace(/\s+/g," ").trim();let r;
  for(const s of sizes){ctx.font=mgA(s);r=mgWrapBal(ctx,T,w);if(!r.over&&r.l.length<=maxL)return {s,l:r.l,ok:true}}
  const s=sizes[sizes.length-1];ctx.font=mgA(s);r=mgWrapBal(ctx,T,w);
  return {s,l:r.l.slice(0,maxL),ok:false};
}
const mgTitH=(n,s,k)=>n?(n-1)*Math.round(s*(k||1.06))+Math.round(MG_CAP*s):0;
// ---------- el paso: número, título, texto, truco y producto ----------
function mgPasoBloque(ctx,p,bs,hayProd){
  // todo en proporción a bs (texto 32-44): título 42-56, truco 30-38, círculo del número y del producto a escala
  const nd=Math.round(bs*1.9),gap=Math.round(bs*.7),tw=MG_CW-nd-gap,ts0=Math.round(42+(bs-32)*14/12),lh=Math.round(bs*1.38),nf=Math.round(nd*.6);
  const pd=Math.round(bs*3.6),pc=hayProd?{d:pd,w:Math.round(pd*1.39),g:24}:null,narrow=pc?tw-pc.w-pc.g:tw;
  // el título crece con el texto, pero si así no cabe en dos líneas baja (hasta 42) para que el texto pueda seguir grande y la página no quede vacía
  let ts=ts0,T=null;
  for(;ts>=42;ts--){ctx.font=mgF(ts,700);T=tjWrap(ctx,p.titulo,narrow);if(!T.over&&T.l.length<=2)break}
  if(!T||T.over||T.l.length>2)return null;
  const tl=Math.round(ts*1.2);
  const titH=T.l.length*tl,titTop=Math.max(0,Math.round((nd-titH)/2));
  let capL=[],prodH=0;
  if(pc){ // nombre corto del producto: letra pequeña, baja hasta que cabe en la columna
    let c=null;for(let cs=Math.round(bs*.55);cs>=16;cs--){ctx.font=mgF(cs,600);c=mgWrapBal(ctx,p.pnom,pc.w);if(!c.over&&c.l.length<=3){pc.cs=cs;break}}
    if(!pc.cs)return null;
    capL=c.l;prodH=pc.d+12+capL.length*Math.round(pc.cs*1.25)}
  const txTop=titTop+titH+12;
  ctx.font=mgF(bs);
  const X=mgWrapVar(ctx,p.texto,i=>pc&&txTop+i*lh<prodH?narrow:tw);
  if(X.over)return null;
  let y=txTop+X.l.length*lh,tru=null;
  if(p.truco){
    const ks=Math.round(30+(bs-32)*8/12),kl=Math.round(ks*1.36),pad=Math.round(ks*.72),lab=Math.round(ks*.64);ctx.font=mgF(ks);
    const K=tjWrap(ctx,p.truco,tw-2*pad);if(K.over)return null;
    const top=Math.max(y,prodH)+20,h=pad+lab+10+K.l.length*kl+pad-4;
    tru={top,h,l:K.l,ks,kl,pad,lab};y=top+h;
  }
  return {nd,nf,gap,tw,narrow,ts,tl,lh,bs,pc,titL:T.l,titTop,txTop,txL:X.l,capL,prodH,tru,h:Math.max(nd,y,prodH),p};
}
// bloques de una página de pasos con un tamaño de letra; null si no caben
function mgPagPasos(ctx,g,bs){
  const avail=MG_BOT-MG_TOP,bl=[];
  for(const p of g){const b=mgPasoBloque(ctx,p,bs,p.prodOk);if(!b)return null;bl.push(b)}
  const sum=bl.reduce((a,b)=>a+b.h,0);
  if(sum+(g.length-1)*44>avail)return null;
  return {bl,sum,bs};
}
// ajuste a la página: la letra más grande (hasta 44) con la que caben los pasos de esa página
function mgAjustaPag(ctx,g){
  for(let bs=MG_PMAX;bs>=MG_CMIN;bs--){const o=mgPagPasos(ctx,g,bs);if(o)return o}
  return null;
}
function mgAgrupa(n,pags){ // reparto parejo, las primeras páginas con uno más
  const r=[],b=Math.floor(n/pags),m=n%pags;let i=0;
  for(let k=0;k<pags;k++){const c=b+(k<m?1:0);r.push([i,i+c]);i+=c}
  return r;
}
// ---------- maqueta completa ----------
function mgMaqueta(ctx,amp,opt){
  opt=opt||{};
  const inf={pags:0,recortado:false,motivos:[],reducido:false,reducidas:[],minCuerpo:99,minTitulo:999,minTruco:99,pasosPorPagina:[],tam:[]};
  const bad=(m)=>{inf.recortado=true;if(inf.motivos.indexOf(m)<0)inf.motivos.push(m)};
  const regT=(s,ok,ini,m)=>{inf.minTitulo=Math.min(inf.minTitulo,s);if(!ok||s<MG_TMIN)bad(m);if(s<ini){inf.reducido=true;inf.reducidas.push(m)}};
  const regC=(s,ok,ini,m)=>{inf.minCuerpo=Math.min(inf.minCuerpo,s);if(!ok||s<MG_CMIN)bad(m);if(s<ini){inf.reducido=true;inf.reducidas.push(m)}};
  const P=[],W=MG_CW,A=amp,pn=A.pasos||[];
  // 1. portada
  {
    const pt=A.portada||{};ctx.font=mgF(26,700);
    let ps=26,ant=String(pt.antetitulo||"").toUpperCase().trim();
    const aw=s=>{ctx.font=mgF(s,700);return [...ant].reduce((a,c)=>a+ctx.measureText(c).width+6,0)-6};
    while(ps>20&&aw(ps)>W-72)ps--;
    const T=mgFitTit(ctx,pt.titulo,mgRango(148,MG_TMIN,4),W,3);regT(T.s,T.ok,120,"portada");
    const S=mgFitSans(ctx,pt.sub||"",mgRango(40,MG_CMIN,2),W,3,400,true);regC(S.s,S.ok,36,"portada sub");
    const slh=Math.round(S.s*1.4),pillH=ps+36,tH=mgTitH(T.l.length,T.s,1.03),sH=S.l.length*slh;
    const total=(ant?pillH+44:0)+tH+36+sH,bottom=MG_H-124,top=bottom-total;
    if(top<420)bad("portada alta");
    // variante «foto enmarcada» (foto de menos de 900 px de ancho): foto en marco arriba; antetítulo, título y subtítulo centrados debajo.
    // El título baja de tamaño hasta que la foto conserva al menos 540 px de alto.
    let enm=null;
    for(const ts of mgRango(148,MG_TMIN,4)){
      const T2=mgFitTit(ctx,pt.titulo,[ts],W,3);if(!T2.ok)continue;
      const tH2=mgTitH(T2.l.length,ts,1.03),aH=ant?pillH+36:0,tot=aH+tH2+30+sH;
      if(MG_H-124-96-52-tot>=MG_ENM_FH){enm={T:T2,tH:tH2,aH,tot};break}
    }
    if(!enm){const T2=mgFitTit(ctx,pt.titulo,[MG_TMIN],W,3),tH2=mgTitH(T2.l.length,MG_TMIN,1.03),aH=ant?pillH+36:0;enm={T:T2,tH:tH2,aH,tot:aH+tH2+30+sH};if(!T2.ok)bad("portada enmarcada")}
    P.push({t:"portada",ant,ps,aw:aw(ps),pillH,T,S,slh,tH,top,enm,tam:{titulo:T.s,cuerpo:S.s}});
  }
  // 2. gancho
  {
    const g=A.gancho||{},stripT=MG_BOT-96,y0=MG_TOP+150,avail=stripT-60-y0;let best=null;
    for(const tmin of [40,MG_CMIN]){ // el texto corrido, a 40 px como mínimo cuando cabe
      for(const fs of mgRango(124,MG_TMIN,4)){
        const F=mgFitTit(ctx,g.frase,[fs],W,4);if(!F.ok)continue;
        const fH=mgTitH(F.l.length,fs,1.07);
        for(const ts of mgRango(46,tmin,2)){
          const X=mgFitSans(ctx,g.texto||"",[ts],W,0,400,false);if(!X.ok)continue;
          const h=fH+48+X.l.length*Math.round(ts*1.42);
          if(h<=avail){best={F,X,fs,ts,h,fH};break}
        }
        if(best)break;
      }
      if(best)break;
    }
    if(!best){const F=mgFitTit(ctx,g.frase,[MG_TMIN],W,4),X=mgFitSans(ctx,g.texto||"",[MG_CMIN],W,0,400,false);best={F,X,fs:MG_TMIN,ts:MG_CMIN,fH:mgTitH(F.l.length,MG_TMIN,1.07),h:0};best.h=best.fH+48+X.l.length*Math.round(MG_CMIN*1.42);bad("gancho")}
    regT(best.fs,best.F.ok,88,"gancho frase");regC(best.ts,best.X.ok,36,"gancho texto");
    const n=pn.length,strip=n+(n===1?" paso":" pasos")+" · 3 errores típicos · tu chuleta para guardar";
    let ss=30;ctx.font=mgF(ss,700);while(ss>24&&ctx.measureText(strip).width>W-56){ss--;ctx.font=mgF(ss,700)}
    const wide=ctx.measureText(strip).width>W-56;
    P.push({t:"gancho",F:best.F,X:best.X,fs:best.fs,ts:best.ts,fH:best.fH,xlh:Math.round(best.ts*1.42),top:y0+Math.max(0,Math.round((avail-best.h)/2)),strip,ss,stripT,wide,tam:{titulo:best.fs,cuerpo:best.ts}});
  }
  // 3. pasos
  {
    const pasos=pn.map((p,i)=>({titulo:String(p.titulo||""),texto:String(p.texto||""),truco:String(p.truco||"").trim(),prod:p.producto||"",pnom:"",prodOk:false,num:i+1}));
    pasos.forEach(p=>{
      const pr=p.prod&&typeof PROD!=="undefined"?PROD[p.prod]:null;
      if(pr&&typeof FOTOS!=="undefined"&&FOTOS.tiene(p.prod)){const nm=String(pr.nombre_corto||pr.nombre||"");p.pnom=nm.charAt(0).toUpperCase()+nm.slice(1);p.prodOk=true}
    });
    // reparto en páginas de uno a tres pasos: las menos páginas posibles y, entre esas, la que deja todas más llenas
    // (así no queda una página con un solo paso y medio vacía cuando se puede repartir mejor)
    const n=pasos.length,av=MG_BOT-MG_TOP,memo={};
    const aj=(i,j)=>{const k=i+"-"+j;if(!(k in memo))memo[k]=mgAjustaPag(ctx,pasos.slice(i,j));return memo[k]};
    let mejor=null;
    const rec=(i,acc,mn)=>{
      if(mejor&&acc.length>mejor.p)return;
      if(i===n){if(!mejor||acc.length<mejor.p||(acc.length===mejor.p&&mn>mejor.m))mejor={p:acc.length,m:mn,rg:acc};return}
      for(let c=Math.min(3,n-i);c>=1;c--){const o=aj(i,i+c);if(!o)continue;rec(i+c,acc.concat([[i,i+c]]),Math.min(mn,(o.sum+(c-1)*44)/av))}
    };
    rec(0,[],1);
    let grupos=mejor?mejor.rg.map(r=>pasos.slice(r[0],r[1])):null;
    if(!grupos){ // reparto a medida: cada página lleva los pasos seguidos que quepan (hasta tres) con la letra mínima
      grupos=[];let i=0;
      while(i<n){let k=Math.min(3,n-i);while(k>1&&!mgPagPasos(ctx,pasos.slice(i,i+k),MG_CMIN))k--;grupos.push(pasos.slice(i,i+k));i+=k}
    }
    const pgs=grupos.map(g=>{
      let o=mgAjustaPag(ctx,g);
      if(!o){ // ni al mínimo cabe: se quita el truco y el producto, y se avisa
        bad("pasos");
        const bl=g.map(p=>mgPasoBloque(ctx,Object.assign({},p,{truco:""}),MG_CMIN,false)||mgPasoBloque(ctx,Object.assign({},p,{truco:"",texto:p.texto.slice(0,200)}),MG_CMIN,false)||{h:0,nd:0,nf:0,gap:0,tw:MG_CW,ts:MG_CMIN,tl:0,lh:0,bs:MG_CMIN,pc:null,titL:[],txL:[],capL:[],tru:null,titTop:0,txTop:0,prodH:0,p});
        o={bl,sum:bl.reduce((a,b)=>a+b.h,0),bs:MG_CMIN};
      }
      return o;
    });
    pgs.forEach(pg=>{regC(pg.bs,true,36,"pasos");pg.bl.forEach(b=>{if(b.tru)inf.minTruco=Math.min(inf.minTruco,b.tru.ks)})});
    inf.bsPasos=pgs.map(pg=>pg.bs);
    pgs.forEach((pg,i)=>{
      // el aire sobrante se reparte: arriba y abajo una parte, entre bloques dos (con la raya en medio); un solo paso queda centrado
      const avail=MG_BOT-MG_TOP,k=pg.bl.length,free=Math.max(0,avail-pg.sum-(k-1)*44),unit=free/(2*k);
      P.push({t:"pasos",bl:pg.bl,sepPad:22+unit,top:MG_TOP+unit,sub:i+1,subN:pgs.length,tam:{titulo:pg.bl[0].ts,cuerpo:pg.bs}});
      inf.pasosPorPagina.push(k);
    });
  }
  // 4. errores (ajuste a la página: la letra más grande con la que caben, y el aire repartido)
  {
    const er=(A.errores||[]).slice(0,3),Tt=mgFitTit(ctx,"LO QUE CASI TODAS HACEMOS MAL",mgRango(112,MG_TMIN,4),W,2);regT(Tt.s,Tt.ok,88,"errores titulo");
    const tH=mgTitH(Tt.l.length,Tt.s,1.06),avail=MG_BOT-(MG_TOP+tH+56);let sel=null;
    for(let ms=46;ms>=MG_CMIN;ms--){
      const bs=ms+2,ic=Math.round(ms*1.5),rows=[];let ok=true,sum=0;
      for(const e of er){
        const M=mgFitSans(ctx,e.mal||"",[ms],W-ic,0,400,true),B=mgFitSans(ctx,e.bien||"",[bs],W-ic,0,700,true);
        if(!M.ok||!B.ok){ok=false;break}
        const mh=M.l.length*Math.round(ms*1.36),bh=B.l.length*Math.round(bs*1.34),h=mh+18+bh;rows.push({M,B,mh,bh,h});sum+=h;
      }
      if(ok&&sum+(er.length-1)*60<=avail){sel={ms,bs,ic,rows,sum};break}
    }
    if(!sel){bad("errores");const ms=MG_CMIN,bs=ms+2,ic=Math.round(ms*1.5),rows=er.map(e=>{const M=mgFitSans(ctx,e.mal||"",[ms],W-ic,0,400,true),B=mgFitSans(ctx,e.bien||"",[bs],W-ic,0,700,true),mh=M.l.length*Math.round(ms*1.36),bh=B.l.length*Math.round(bs*1.34);return {M,B,mh,bh,h:mh+18+bh}});sel={ms,bs,ic,rows,sum:rows.reduce((a,r)=>a+r.h,0)}}
    regC(sel.ms,true,36,"errores");inf.msErrores=sel.ms;
    const k=sel.rows.length,free=Math.max(0,avail-sel.sum-(k-1)*60),unit=k?free/(2*k):0;
    P.push({t:"errores",T:Tt,tH,rows:sel.rows,ms:sel.ms,bs:sel.bs,ic:sel.ic,gap:60+2*unit,off:unit,top:MG_TOP,tam:{titulo:Tt.s,cuerpo:sel.ms}});
  }
  // 5. lista
  {
    const li=A.lista||{},items=(li.items||[]).slice(0,6),pad=44,iw=W-2*pad-76;let sel=null;
    for(const ts of mgRango(86,MG_TMIN,4)){
      const T=mgFitTit(ctx,li.titulo,[ts],W-2*pad,2);if(!T.ok)continue;
      const tH=mgTitH(T.l.length,ts,1.06),avail=MG_BOT-52-(MG_TOP+30+tH+36)-40;
      for(const is of mgRango(50,MG_CMIN,2)){
        const rows=items.map(t=>mgFitSans(ctx,t,[is],iw,0,500,false));if(rows.some(r=>!r.ok))continue;
        const lh=Math.round(is*1.32),hs=rows.map(r=>r.l.length*lh+34),sum=hs.reduce((a,b)=>a+b,0);
        if(sum<=avail){sel={T,ts,tH,is,rows,lh,hs,sum,avail};break}
      }
      if(sel)break;
    }
    if(!sel){bad("lista");const T=mgFitTit(ctx,li.titulo,[MG_TMIN],W-2*pad,2),is=MG_CMIN,rows=items.map(t=>mgFitSans(ctx,t,[is],iw,0,500,false)),lh=Math.round(is*1.32),hs=rows.map(r=>r.l.length*lh+34);sel={T,ts:MG_TMIN,tH:mgTitH(T.l.length,MG_TMIN,1.06),is,rows,lh,hs,sum:hs.reduce((a,b)=>a+b,0),avail:0}}
    regT(sel.ts,sel.T.ok,80,"lista titulo");regC(sel.is,true,36,"lista items");
    const extra=Math.max(0,sel.avail-sel.sum),k=items.length,more=k?Math.min(60,Math.floor(extra/k)):0;
    P.push({t:"lista",pad,iw,more,items:sel,tam:{titulo:sel.ts,cuerpo:sel.is}});
  }
  // 6. extra
  {
    const x=A.extra||{},avail=MG_BOT-MG_TOP-150;let best=null;
    for(const bmin of [40,MG_CMIN]){
      for(const ts of mgRango(150,MG_TMIN,4)){
        const T=mgFitTit(ctx,x.titulo,[ts],W,3);if(!T.ok)continue;
        const tH=mgTitH(T.l.length,ts,1.06);
        for(const bs of mgRango(72,bmin,2)){
          const X=mgFitSans(ctx,x.texto||"",[bs],W,0,400,false);if(!X.ok)continue;
          const h=tH+52+X.l.length*Math.round(bs*1.46);
          if(h<=avail){best={T,X,ts,bs,tH,h};break}
        }
        if(best)break;
      }
      if(best)break;
    }
    if(!best){bad("extra");const T=mgFitTit(ctx,x.titulo,[MG_TMIN],W,3),X=mgFitSans(ctx,x.texto||"",[MG_CMIN],W,0,400,false);best={T,X,ts:MG_TMIN,bs:MG_CMIN,tH:mgTitH(T.l.length,MG_TMIN,1.06),h:0};best.h=best.tH+52+X.l.length*Math.round(MG_CMIN*1.46)}
    regT(best.ts,best.T.ok,88,"extra titulo");regC(best.bs,best.X.ok,36,"extra texto");
    P.push({t:"extra",T:best.T,X:best.X,ts:best.ts,bs:best.bs,tH:best.tH,xlh:Math.round(best.bs*1.46),top:MG_TOP+Math.max(110,Math.round((avail+150-best.h)/2)),tam:{titulo:best.ts,cuerpo:best.bs}});
  }
  // 7. cierre
  {
    const c=A.cierre||{},bp=48;
    const Pd=mgFitTit(ctx,c.pide,mgRango(68,56,4),W-2*bp,4);if(!Pd.ok)bad("cierre pide");
    const pH=mgTitH(Pd.l.length,Pd.s,1.06),bandH=bp+22+22+pH+bp-6;
    let best=null;const gm=56,uslot=86,avail=MG_BOT-MG_TOP-bandH-gm-uslot-40; // sitio para frase+texto con la banda y la línea del usuario
    for(const tmin of [40,MG_CMIN]){
      for(const fs of mgRango(116,MG_TMIN,4)){
        const F=mgFitTit(ctx,c.frase,[fs],W,4);if(!F.ok)continue;
        const fH=mgTitH(F.l.length,fs,1.07);
        for(const ts of mgRango(54,tmin,2)){
          const X=mgFitSans(ctx,c.texto||"",[ts],W,0,400,false);if(!X.ok)continue;
          const h=fH+44+X.l.length*Math.round(ts*1.42);
          if(h<=avail){best={F,X,fs,ts,fH,h};break}
        }
        if(best)break;
      }
      if(best)break;
    }
    if(!best){bad("cierre");const F=mgFitTit(ctx,c.frase,[MG_TMIN],W,4),X=mgFitSans(ctx,c.texto||"",[MG_CMIN],W,0,400,false);best={F,X,fs:MG_TMIN,ts:MG_CMIN,fH:mgTitH(F.l.length,MG_TMIN,1.07),h:0};best.h=best.fH+44+X.l.length*Math.round(MG_CMIN*1.42)}
    regT(best.fs,best.F.ok,88,"cierre frase");regC(best.ts,best.X.ok,36,"cierre texto");inf.minPide=Pd.s;
    P.push({t:"cierre",F:best.F,X:best.X,fs:best.fs,ts:best.ts,fH:best.fH,xlh:Math.round(best.ts*1.42),Pd,pH,bp,bandH,gm,uslot,h:best.h,tam:{titulo:best.fs,cuerpo:best.ts,pide:Pd.s}});
  }
  // ocupación de cada página: parte del área útil (MG_TOP..MG_BOT) que llevan los bloques de contenido (la portada va a toda página)
  const AR=MG_BOT-MG_TOP;
  inf.uso=P.map(p=>{
    let u=0;
    if(p.t==="gancho")u=p.fH+48+p.X.l.length*p.xlh+98;
    else if(p.t==="pasos")u=p.bl.reduce((a,b)=>a+b.h,0)+(p.bl.length-1)*44;
    else if(p.t==="errores")u=p.tH+56+p.rows.reduce((a,r)=>a+r.h,0)+(p.rows.length-1)*60;
    else if(p.t==="lista")u=p.items.tH+36+p.items.sum+p.items.rows.length*p.more+60;
    else if(p.t==="extra")u=p.tH+52+p.X.l.length*p.xlh;
    else if(p.t==="cierre")u=p.h+p.gm+p.bandH;
    else return 1;
    return Math.round(u/AR*100)/100;
  });
  inf.pags=P.length;inf.tam=P.map((p,i)=>Object.assign({p:i+1,t:p.t},p.tam));
  if(inf.minCuerpo===99)inf.minCuerpo=0;
  return {pags:P,informe:inf};
}
// ---------- dibujo ----------
function mgEstilo(nombre,inv){const b=MG_EST[nombre]||MG_EST.crema;return inv?Object.assign({},b,b.inv):b}
function mgAnton(ctx,lines,x,top,s,pitch,col,al){
  ctx.font=mgA(s);ctx.fillStyle=col;ctx.textAlign=al||"left";
  lines.forEach((l,i)=>ctx.fillText(l,x,top+Math.round(MG_CAP*s)+i*Math.round(s*pitch)));ctx.textAlign="left";
}
function mgTxt(ctx,lines,x,top,s,lh,col,wt){
  ctx.font=mgF(s,wt);ctx.fillStyle=col;
  lines.forEach((l,i)=>ctx.fillText(l,x,top+i*lh+(lh-s)/2+s*.8));
}
function mgImgCubre(ctx,im,x,y,w,h){
  const r=Math.max(w/im.width,h/im.height),dw=im.width*r,dh=im.height*r;
  ctx.drawImage(im,x+(w-dw)/2,y+(h-dh)/2,dw,dh);
}
function mgAspa(ctx,cx,cy,r,col,lw){
  ctx.strokeStyle=col;ctx.lineWidth=lw;ctx.lineCap="round";ctx.beginPath();
  ctx.moveTo(cx-r,cy-r);ctx.lineTo(cx+r,cy+r);ctx.moveTo(cx+r,cy-r);ctx.lineTo(cx-r,cy+r);ctx.stroke();
}
function mgCheck(ctx,cx,cy,d,fill,col){
  ctx.beginPath();ctx.arc(cx,cy,d/2,0,Math.PI*2);ctx.fillStyle=fill;ctx.fill();
  ctx.strokeStyle=col;ctx.lineWidth=5;ctx.lineCap="round";ctx.lineJoin="round";ctx.beginPath();
  ctx.moveTo(cx-d*.21,cy+d*.01);ctx.lineTo(cx-d*.05,cy+d*.17);ctx.lineTo(cx+d*.23,cy-d*.15);ctx.stroke();
}
function mgPie(ctx,E,i,n,user,sinUser){
  ctx.fillStyle=E.rule;ctx.fillRect(MG_X,MG_RULE,MG_CW,2);
  ctx.textAlign="right";ctx.fillStyle=E.sub;ctx.font=mgF(28,700);ctx.fillText((i+1)+" / "+n,MG_X+MG_CW,MG_BASE);ctx.textAlign="left";
  if(user&&!sinUser){let fs=30;ctx.font=mgF(fs,600);while(fs>22&&ctx.measureText(user).width>MG_CW-220){fs--;ctx.font=mgF(fs,600)}ctx.fillStyle=E.sub;ctx.fillText(user,MG_X,MG_BASE)}
}
function mgCab(ctx,E,etq){
  ctx.fillStyle=E.ac;ctx.font=mgF(24,700);tjEsp(ctx,etq,MG_X,118,7);
  ctx.fillRect(MG_X,138,56,4);
}
function mgFondo(ctx,E){
  ctx.fillStyle=E.bg;ctx.fillRect(0,0,MG_W,MG_H);
  if(E.marco){ctx.strokeStyle=E.ac;ctx.globalAlpha=.55;ctx.lineWidth=2;ctx.strokeRect(44,44,MG_W-88,MG_H-88);ctx.globalAlpha=1}
}
const mgRR=(ctx,x,y,w,h,r)=>{ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()};
// dibuja la página i. o = {estilo, user, assets:{foto,prod:{id:Image}}}
function mgPinta(cv,lay,i,o){
  o=o||{};const pg=lay.pags[i],n=lay.pags.length,ctx=cv.getContext("2d"),as=o.assets||{},u0=String(o.user||"").trim().replace(/^@+/,"").trim(),user=u0?"@"+u0:"";
  cv.width=MG_W;cv.height=MG_H;ctx.textBaseline="alphabetic";ctx.textAlign="left";ctx.lineJoin="round";
  const inv=pg.t==="extra",E=mgEstilo(o.estilo,inv),X=MG_X,W=MG_CW;
  if(pg.t==="portada"){mgPortada(ctx,pg,as,E);return}
  if(pg.t==="bp"){bpPinta(ctx,pg,E,as,i,n,user);return}
  mgFondo(ctx,E);
  mgCab(ctx,E,MG_ETQ[pg.t]+(pg.t==="pasos"&&pg.subN>1?"  "+pg.sub+"/"+pg.subN:""));
  if(pg.t==="gancho"){
    ctx.font=mgA(760);ctx.fillStyle=E.quote;ctx.fillText("“",X-34,MG_TOP+Math.round(MG_CAP*760)-40);
    mgAnton(ctx,pg.F.l,X,pg.top,pg.fs,1.07,E.tx);
    mgTxt(ctx,pg.X.l,X,pg.top+pg.fH+48,pg.ts,pg.xlh,E.tx);
    const sy=pg.stripT;ctx.fillStyle=E.rule;ctx.fillRect(X,sy,W,2);
    ctx.fillStyle=E.box;ctx.fillRect(X,sy+2,W,94);
    ctx.fillStyle=E.ac;ctx.font=mgF(pg.ss,700);ctx.textBaseline="middle";ctx.fillText(pg.strip,X+28,sy+2+47);ctx.textBaseline="alphabetic";
  }else if(pg.t==="pasos"){
    let y=pg.top;
    pg.bl.forEach((b,k)=>{
      const cx=X+b.nd/2,cy=y+b.nd/2,tx=X+b.nd+b.gap;
      ctx.beginPath();ctx.arc(cx,cy,b.nd/2-1.5,0,Math.PI*2);
      if(E.numFill){ctx.fillStyle=E.numFill;ctx.fill()}
      if(E.numLn){ctx.strokeStyle=E.numLn;ctx.lineWidth=3;ctx.stroke()}
      ctx.font=mgA(b.nf);ctx.fillStyle=E.numTx;const nm=String(b.p.num),mw=ctx.measureText(nm).width;ctx.fillText(nm,cx-mw/2,cy+Math.round(MG_CAP*b.nf)/2);
      mgTxt(ctx,b.titL,tx,y+b.titTop,b.ts,b.tl,E.tx,700);
      mgTxt(ctx,b.txL,tx,y+b.txTop,b.bs,b.lh,E.tx);
      if(b.pc){
        const pcx=X+W-b.pc.w/2,pcy=y+b.pc.d/2,r=b.pc.d/2,im=(as.prod||{})[b.p.prod];
        ctx.beginPath();ctx.arc(pcx,pcy,r,0,Math.PI*2);ctx.fillStyle="#FFFFFF";ctx.fill();ctx.strokeStyle=E.rule;ctx.lineWidth=2;ctx.stroke();
        if(im){ctx.save();ctx.beginPath();ctx.arc(pcx,pcy,r-2,0,Math.PI*2);ctx.clip();const q=r*1.72,sc=Math.min(q/im.width,q/im.height);ctx.drawImage(im,pcx-im.width*sc/2,pcy-im.height*sc/2,im.width*sc,im.height*sc);ctx.restore()}
        ctx.textAlign="center";mgTxt(ctx,b.capL,pcx,y+b.pc.d+12,b.pc.cs,Math.round(b.pc.cs*1.25),E.sub,600);ctx.textAlign="left";
      }
      if(b.tru){
        const t=b.tru;mgRR(ctx,tx,y+t.top,b.tw,t.h,10);ctx.fillStyle=E.box;ctx.fill();
        ctx.fillStyle=E.ac;ctx.font=mgF(t.lab,700);tjEsp(ctx,"TRUCO",tx+t.pad,y+t.top+t.pad+Math.round(t.lab*.8),5);
        mgTxt(ctx,t.l,tx+t.pad,y+t.top+t.pad+t.lab+6,t.ks,t.kl,E.tx);
      }
      y+=b.h;
      if(k<pg.bl.length-1){y+=pg.sepPad;ctx.fillStyle=E.rule;ctx.fillRect(X,y-1,W,2);y+=pg.sepPad}
    });
  }else if(pg.t==="errores"){
    mgAnton(ctx,pg.T.l,X,pg.top,pg.T.s,1.06,E.tx);
    let y=pg.top+pg.tH+56+pg.off;
    pg.rows.forEach((r,k)=>{
      const tx=X+pg.ic,ar=Math.round(pg.ms*.27);
      mgAspa(ctx,X+pg.ic*.28,y+Math.round(pg.ms*1.36)/2,ar,E.sub,5);
      mgTxt(ctx,r.M.l,tx,y,pg.ms,Math.round(pg.ms*1.36),E.sub);
      const by=y+r.mh+18;
      mgCheck(ctx,X+pg.ic*.34,by+Math.round(pg.bs*1.34)/2,Math.round(pg.ms*.95),E.ac,E.bg);
      mgTxt(ctx,r.B.l,tx,by,pg.bs,Math.round(pg.bs*1.34),E.tx,700);
      y+=r.h;
      if(k<pg.rows.length-1){ctx.fillStyle=E.rule;ctx.fillRect(X,y+pg.gap/2-1,W,2);y+=pg.gap}
    });
  }else if(pg.t==="lista"){
    const sx=X-12,sy=MG_TOP+4,sw=W+24,sh=MG_BOT-sy-6;
    mgRR(ctx,sx,sy,sw,sh,14);ctx.fillStyle=E.sheet;ctx.fill();ctx.strokeStyle=E.sheetLn;ctx.lineWidth=2;ctx.stroke();
    const ix=X+pg.pad-12,L=pg.items;let y=sy+34;
    mgAnton(ctx,L.T.l,ix,y,L.ts,1.06,E.tx);y+=L.tH+36;
    L.rows.forEach((r,k)=>{
      const h=L.hs[k]+pg.more,top=y+(h-L.hs[k])/2,bh=r.l.length*L.lh;
      const cy=top+L.lh/2;
      mgRR(ctx,ix,cy-20,40,40,9);ctx.strokeStyle=E.ac;ctx.lineWidth=3.5;ctx.stroke();
      mgTxt(ctx,r.l,ix+76,top,L.is,L.lh,E.tx,500);
      const ly=top+bh+14;ctx.save();ctx.strokeStyle=E.sub;ctx.globalAlpha=.7;ctx.lineWidth=3;ctx.lineCap="round";ctx.setLineDash([.1,12]);ctx.beginPath();ctx.moveTo(ix,ly);ctx.lineTo(sx+sw-pg.pad+12,ly);ctx.stroke();ctx.restore();
      y+=h;
    });
    ctx.fillStyle=E.sub;ctx.font=mgF(26,600);ctx.fillText("Hazle captura y déjala a mano",ix,sy+sh-30);
  }else if(pg.t==="extra"){
    ctx.strokeStyle=E.ring;ctx.lineWidth=2;[[MG_W-40,250,300],[MG_W-40,250,200]].forEach(c=>{ctx.beginPath();ctx.arc(c[0],c[1],c[2],0,Math.PI*2);ctx.stroke()});
    mgAnton(ctx,pg.T.l,X,pg.top,pg.ts,1.06,E.tx);
    ctx.fillStyle=E.ac;ctx.fillRect(X,pg.top+pg.tH+22,72,6);
    mgTxt(ctx,pg.X.l,X,pg.top+pg.tH+52,pg.bs,pg.xlh,E.tx);
  }else if(pg.t==="cierre"){
    // el conjunto frase + texto + banda (+ usuario) va centrado en vertical; el aire sobrante también separa el texto de la banda
    const us=user?pg.uslot:0,fixed=pg.h+pg.gm+pg.bandH+us,free=Math.max(0,MG_BOT-MG_TOP-fixed),mid=pg.gm+Math.round(free*.12),tot=pg.h+mid+pg.bandH+us,ty=MG_TOP+Math.max(0,Math.round((MG_BOT-MG_TOP-tot)/2)),bt=ty+pg.h+mid,bandBot=bt+pg.bandH;
    mgAnton(ctx,pg.F.l,X,ty,pg.fs,1.07,E.tx);
    mgTxt(ctx,pg.X.l,X,ty+pg.fH+44,pg.ts,pg.xlh,E.tx);
    ctx.fillStyle=E.band;ctx.fillRect(X,bt,W,pg.bandH);
    ctx.fillStyle=E.bandLb;ctx.font=mgF(22,700);tjEsp(ctx,"CONTÉSTAME",X+pg.bp,bt+pg.bp+16,6);
    mgAnton(ctx,pg.Pd.l,X+pg.bp,bt+pg.bp+22+22-6,pg.Pd.s,1.06,E.bandTx);
    if(user){let fs=44;ctx.font=mgF(fs,700);while(fs>26&&ctx.measureText(user).width>W){fs--;ctx.font=mgF(fs,700)}
      ctx.fillStyle=E.ac;ctx.fillText(user,X,bandBot+30+fs*.8);}
  }
  mgPie(ctx,E,i,n,user,pg.t==="cierre");
}
// foto enmarcada: fondo de la marca según el estilo, foto en un marco redondeado (ampliada como mucho 1,8 veces) y los textos debajo, centrados
function mgPortadaEnm(ctx,pg,im,E){
  const W=MG_CW,C=MG_W/2,e=pg.enm,iw=im.naturalWidth||im.width,ih=im.naturalHeight||im.height;
  mgFondo(ctx,E);
  const fw=Math.round(Math.min(W,iw*MG_ENM_ESC)),room=MG_H-124-96-52-e.tot,fh=Math.round(Math.max(360,Math.min(room,820,ih*MG_ENM_ESC)));
  const grp=fh+52+e.tot,top=96+Math.max(0,Math.round((MG_H-124-96-grp)/2)),fx=Math.round(C-fw/2),off=fw>780?0:22;
  if(off){ctx.save();mgRR(ctx,fx+off,top+off,fw,fh,36);ctx.strokeStyle=E.ac;ctx.globalAlpha=.55;ctx.lineWidth=3;ctx.stroke();ctx.restore()}
  ctx.save();mgRR(ctx,fx,top,fw,fh,36);ctx.clip();
  const r=Math.max(fw/iw,fh/ih),dw=iw*r,dh=ih*r;ctx.drawImage(im,fx+(fw-dw)/2,top-(dh-fh)*.36,dw,dh); // se recorta más por abajo que por arriba (las caras suelen quedar arriba)
  ctx.fillStyle="rgba(97,74,62,.10)";ctx.fillRect(fx,top,fw,fh);ctx.restore();
  ctx.save();mgRR(ctx,fx,top,fw,fh,36);ctx.strokeStyle=E.rule;ctx.lineWidth=2;ctx.stroke();ctx.restore();
  let y=top+fh+52;
  if(pg.ant){
    const pw=pg.aw+56,px=Math.round(C-pw/2);ctx.fillStyle=E.band;mgRR(ctx,px,y,pw,pg.pillH,pg.pillH/2);ctx.fill();
    ctx.fillStyle=E.bandTx;ctx.font=mgF(pg.ps,700);ctx.textBaseline="alphabetic";tjEsp(ctx,pg.ant,px+28,y+pg.pillH/2+pg.ps*.35,6);y+=pg.pillH+36;
  }
  mgAnton(ctx,e.T.l,C,y,e.T.s,1.03,E.tx,"center");y+=e.tH+30;
  ctx.textAlign="center";mgTxt(ctx,pg.S.l,C,y,pg.S.s,pg.slh,E.tx);ctx.textAlign="left";
}
function mgPortada(ctx,pg,as,E){
  if(as.foto&&(as.foto.naturalWidth||as.foto.width)<MG_ENM_ANCHO){mgPortadaEnm(ctx,pg,as.foto,E||MG_EST.crema);return}
  const X=MG_X,W=MG_CW;
  ctx.fillStyle="#614a3e";ctx.fillRect(0,0,MG_W,MG_H);
  if(as.foto){mgImgCubre(ctx,as.foto,0,0,MG_W,MG_H)}
  else{ // sin foto: forma geométrica crema grande
    ctx.fillStyle="#EBDDC5";ctx.beginPath();ctx.arc(MG_W-110,430,430,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#614a3e";ctx.beginPath();ctx.arc(MG_W-110,430,300,0,Math.PI*2);ctx.fill();
    ctx.fillStyle="#EBDDC5";ctx.beginPath();ctx.arc(MG_W-110,430,170,0,Math.PI*2);ctx.fill();
  }
  if(as.foto){ctx.fillStyle="rgba(97,74,62,.2)";ctx.fillRect(0,0,MG_W,MG_H)} // velo general suave: unifica la foto con la marca
  let g=ctx.createLinearGradient(0,0,0,MG_H); // degradado marrón: del 35 % de la altura hasta abajo, casi opaco en el tercio inferior
  g.addColorStop(0,"rgba(58,40,31,0)");g.addColorStop(.35,"rgba(58,40,31,0)");g.addColorStop(.52,"rgba(58,40,31,.55)");g.addColorStop(.67,"rgba(58,40,31,.9)");g.addColorStop(.8,"rgba(52,36,28,.96)");g.addColorStop(1,"rgba(48,33,26,.98)");
  ctx.fillStyle=g;ctx.fillRect(0,0,MG_W,MG_H);
  let y=pg.top;
  if(pg.ant){
    const pw=pg.aw+56;ctx.fillStyle="#EBDDC5";mgRR(ctx,X,y,pw,pg.pillH,pg.pillH/2);ctx.fill();
    ctx.fillStyle="#4a372d";ctx.font=mgF(pg.ps,700);tjEsp(ctx,pg.ant,X+28,y+pg.pillH/2+pg.ps*.35,6);y+=pg.pillH+44;
  }
  mgAnton(ctx,pg.T.l,X,y,pg.T.s,1.03,"#F3EADA");y+=pg.tH+36;
  mgTxt(ctx,pg.S.l,X,y,pg.S.s,pg.slh,"rgba(246,239,226,.92)");
}

// ---------- imágenes de la guía: foto de portada y productos ----------
const MG={lay:{},as:{},pdf:{},blk:[],io:null};
const mgImg=src=>new Promise(ok=>{if(!src){ok(null);return}const im=new Image();im.onload=()=>ok(im);im.onerror=()=>ok(null);im.src=src});
async function mgLayout(g){
  if(MG.lay[g.id])return MG.lay[g.id];
  await mgListo();
  const cv=document.createElement("canvas"),ctx=cv.getContext("2d");
  const L=g.bp?bpMaqueta(ctx,g):mgMaqueta(ctx,g.amp,{});
  MG.lay[g.id]=L;return L;
}
function mgAssets(g){
  if(MG.as[g.id])return MG.as[g.id];
  if(g.bp){const r=bpAssets(g);MG.as[g.id]=r;return r}
  const A=g.amp,tipo=(A.portada||{}).foto,cats=(DB.fotos&&DB.fotos.cats)||{};
  // la foto de su tipo la elige el reparto de FOTOS (la misma que enseña la lista de la situación: sin repetir y siempre la misma)
  const ft=typeof FOTOS!=="undefined"?FOTOS.foto(g.sit?String(g.id).slice(3):"pg:"+g.id,"pg"):null;
  const deTipo=()=>ft&&cats[ft.tipo]?FOTOS.imagen(ft.tipo,ft.i).then(mgImg,()=>null):Promise.resolve(null);
  // portada propia (1080x1350) si la guía la tiene; si no se baja o falla, la foto del tipo de plano; si tampoco, sin foto
  const propia=typeof FOTOS!=="undefined"&&FOTOS.tienePortada(g.id),grande=im=>!!im&&(im.naturalWidth||im.width)>=MG_ENM_ANCHO;
  const fp=propia?FOTOS.portada(g.id).then(mgImg).then(im=>im||deTipo()):deTipo();
  const ids=[...new Set((A.pasos||[]).map(p=>p.producto).filter(id=>id&&typeof FOTOS!=="undefined"&&FOTOS.tiene(id)))];
  const pp=Promise.all(ids.map(id=>FOTOS.prodSrc(id).then(mgImg))).then(L=>{const m={};ids.forEach((id,i)=>{if(L[i])m[id]=L[i]});return m});
  const to=new Promise(ok=>setTimeout(()=>ok("t"),9000));
  const p=Promise.all([fp,pp]).then(([foto,prod])=>({foto,prod,tipo:tipo||"",pedidos:ids.length}));
  const r=Promise.race([p,to]).then(v=>{if(v==="t"){delete MG.as[g.id];return {foto:null,prod:{},tipo:tipo||"",pedidos:ids.length,tarde:true}}if(!v.foto&&tipo||propia&&!grande(v.foto)||Object.keys(v.prod).length<ids.length)setTimeout(()=>{if(MG.as[g.id]===r)delete MG.as[g.id]},20000);return v});
  MG.as[g.id]=r;return r;
}
async function mgDibuja(cv,g,i,o){
  o=o||{};const L=await mgLayout(g),as=o.assets||await mgAssets(g);
  mgPinta(cv,L,i,{estilo:o.estilo||tjEstilo(),user:o.user!=null?o.user:miUsuario(),assets:as});
  return L;
}
// ---------- PDF mínimo: una imagen JPEG por página ----------
function mgPdfBuild(jpgs,w,h,titulo){
  const enc=new TextEncoder(),parts=[],offs=[];let len=0;
  const put=b=>{const u=typeof b==="string"?enc.encode(b):b;parts.push(u);len+=u.length};
  const pw=Math.round(w/2),ph=Math.round(h/2),n=jpgs.length;
  put(new Uint8Array([37,80,68,70,45,49,46,52,10,37,226,227,207,211,10]));
  const obj=(k,fn)=>{offs[k]=len;put(k+" 0 obj\n");fn();put("\nendobj\n")};
  const t=String(titulo||"Guía").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^\x20-\x7e]/g,"").replace(/[()\\]/g,"").slice(0,120);
  obj(1,()=>put("<< /Type /Catalog /Pages 2 0 R >>"));
  obj(2,()=>put("<< /Type /Pages /Count "+n+" /Kids ["+jpgs.map((_,i)=>(4+3*i)+" 0 R").join(" ")+"] >>"));
  obj(3,()=>put("<< /Title ("+t+") /Producer (Fam Studio) >>"));
  jpgs.forEach((j,i)=>{
    const pg=4+3*i,ct=pg+1,im=pg+2,cs="q "+pw+" 0 0 "+ph+" 0 0 cm /Im0 Do Q";
    obj(pg,()=>put("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 "+pw+" "+ph+"] /Resources << /XObject << /Im0 "+im+" 0 R >> >> /Contents "+ct+" 0 R >>"));
    obj(ct,()=>{put("<< /Length "+cs.length+" >>\nstream\n"+cs+"\nendstream")});
    obj(im,()=>{put("<< /Type /XObject /Subtype /Image /Width "+w+" /Height "+h+" /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length "+j.length+" >>\nstream\n");put(j);put("\nendstream")});
  });
  const total=4+3*n,xr=len;let x="xref\n0 "+total+"\n0000000000 65535 f \n";
  for(let k=1;k<total;k++)x+=String(offs[k]).padStart(10,"0")+" 00000 n \n";
  put(x+"trailer\n<< /Size "+total+" /Root 1 0 R /Info 3 0 R >>\nstartxref\n"+xr+"\n%%EOF\n");
  return new Blob(parts,{type:"application/pdf"});
}
const mgSlug=t=>String(t||"guia").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,50)||"guia";
const mgTit=g=>String((g.amp&&g.amp.portada&&g.amp.portada.titulo)||g.titulo||"Guía");
const mgNombre=g=>"guia-"+mgSlug(mgTit(g))+".pdf";
const mgKey=()=>tjEstilo()+"|"+miUsuario();
async function mgPdf(g){
  const k=mgKey(),c=MG.pdf[g.id];if(c&&c.k===k)return c.b;
  const L=await mgLayout(g),as=await mgAssets(g),cv=document.createElement("canvas"),J=[];
  for(let i=0;i<L.pags.length;i++){
    mgPinta(cv,L,i,{estilo:tjEstilo(),user:miUsuario(),assets:as});
    const b=await new Promise(ok=>cv.toBlob(ok,"image/jpeg",.9));
    if(!b||b.type!=="image/jpeg")throw new Error("jpeg");
    J.push(new Uint8Array(await b.arrayBuffer()));
  }
  const b=mgPdfBuild(J,MG_W,MG_H,mgTit(g));MG.pdf[g.id]={k,b};return b;
}
function mgCanShare(){
  try{if(!navigator.canShare||!navigator.share)return false;return navigator.canShare({files:[new File(["x"],"a.pdf",{type:"application/pdf"})]})}catch(e){return false}
}
function mgDescarga(b,name){
  const url=URL.createObjectURL(b),a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),4000);
}
// ---------- bloque en pantalla ----------
// ¿está completa la mini guía? (portada, gancho, pasos, errores, chuleta, extra y cierre, con sus textos)
const mgT=x=>typeof x==="string"&&x.trim().length>0;
function mgValido(A){
  try{
    if(!A||typeof A!=="object")return false;
    const pt=A.portada,gn=A.gancho,li=A.lista,ex=A.extra,ci=A.cierre;
    return !!(pt&&mgT(pt.titulo)&&gn&&mgT(gn.frase)&&mgT(gn.texto)
      &&Array.isArray(A.pasos)&&A.pasos.length>=1&&A.pasos.length<=8&&A.pasos.every(p=>p&&mgT(p.titulo)&&mgT(p.texto))
      &&Array.isArray(A.errores)&&A.errores.length>=1&&A.errores.every(e=>e&&mgT(e.mal)&&mgT(e.bien))
      &&li&&mgT(li.titulo)&&Array.isArray(li.items)&&li.items.length>=1&&li.items.every(mgT)
      &&ex&&mgT(ex.titulo)&&mgT(ex.texto)&&ci&&mgT(ci.frase)&&mgT(ci.texto)&&mgT(ci.pide));
  }catch(e){return false}
}
const mgOk=g=>!!(g&&(g.bp||mgValido(g.amp)));
// una situación de «Crear» como si fuera una guía: {id:"pk:<id>", titulo, amp}
const MG_SIT={};
function mgSit(s){
  if(!s||!s.pk)return null;
  let o=MG_SIT[s.id];
  if(!o||o.amp!==s.pk.amp){o=MG_SIT[s.id]={id:"pk:"+s.id,titulo:(s.pk.amp&&s.pk.amp.portada&&s.pk.amp.portada.titulo)||s.pk.recurso_corto||"Guía",amp:s.pk.amp,via:s.via,sit:true}}
  return o;
}
const mgGet=id=>String(id).slice(0,3)==="bp:"?(typeof BPX!=="undefined"?BPX.guiaDe(id):null):String(id).slice(0,3)==="pk:"?mgSit(typeof C2!=="undefined"?C2.PK[String(id).slice(3)]:null):GUIA[id];
function mgBloque(g){
  if(!mgOk(g))return g&&g.sit?"":tjBloque("rec:"+g.id);
  const est=tjEstilo(),share=mgCanShare(),u=miUsuario().slice(1);
  return '<div class="tjb mgb" data-mg="'+esc(g.id)+'">'
   +'<div class="mgcar"><div class="mgs" tabindex="0" role="group" aria-label="Páginas de la mini guía: '+esc(mgTit(g))+'"><div class="mgp mgsk"><div class="mgph">Preparando la guía…</div></div></div>'
   +'<div class="mgnav"><button type="button" class="mgarr" data-mgnav="-1" aria-label="Página anterior">‹</button><div class="mgmid"><div class="mgdots" aria-hidden="true"></div><span class="mgct" aria-live="polite"></span></div><button type="button" class="mgarr" data-mgnav="1" aria-label="Página siguiente">›</button></div></div>'
   +'<div class="tjst" role="group" aria-label="Estilo de la guía">'+Object.keys(MG_EST).map(k=>'<button type="button" class="chip'+(k===est?" on":"")+'" data-tjs="'+k+'" aria-pressed="'+(k===est)+'">'+MG_EST[k].n+'</button>').join("")+'</div>'
   +'<div class="acts">'+(share?'<button type="button" class="btn" data-mgshare="1">Compartir guía</button>':'')+'<button type="button" class="btn'+(share?" ghost":"")+'" data-mgpdf="1">Guardar PDF</button><button type="button" class="btn ghost" data-mgpng="1">Guardar esta página</button></div>'
   +'<label class="tju">Tu usuario de Instagram<span class="tjin"><b aria-hidden="true">@</b><input class="tjuser" type="text" value="'+esc(u)+'" maxlength="30" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" inputmode="text" placeholder="tuusuario"></span></label>'
   +'<p class="note tjnote">Opcional. Sale al pie de todas las páginas y se guarda solo en este móvil.</p></div>';
}
async function mgMonta(b){
  if(b._mg)return;
  const g=mgGet(b.dataset.mg);if(!g)return;
  b._mg={g,cur:0};
  let L;try{L=await mgLayout(g)}catch(e){console.error("mini guía",e);b._mg=null;return}
  if(!b.isConnected)return;
  const s=b.querySelector(".mgs"),n=L.pags.length;
  s.innerHTML=L.pags.map((p,i)=>'<div class="mgp" data-i="'+i+'"><canvas class="mgc" width="1080" height="1350" role="img" aria-label="Página '+(i+1)+' de '+n+': '+esc(MG_SEC[p.t]||p.sec||"")+'"></canvas></div>').join("");
  b.querySelector(".mgdots").innerHTML=L.pags.map(()=>'<span class="mgd"></span>').join("");
  b._mg.n=n;b._mg.L=L;
  s.addEventListener("scroll",()=>{if(b._mg.raf)return;b._mg.raf=requestAnimationFrame(()=>{b._mg.raf=0;mgVista(b)})},{passive:true});
  mgVista(b,true);
}
function mgActual(b){
  const s=b.querySelector(".mgs"),P=s.querySelectorAll(".mgp");if(!P.length)return 0;
  const c=s.scrollLeft+s.clientWidth/2;let best=0,bd=1e9;
  P.forEach((p,i)=>{const d=Math.abs(p.offsetLeft+p.offsetWidth/2-c);if(d<bd){bd=d;best=i}});
  return best;
}
function mgVista(b,force){
  const m=b._mg;if(!m||!m.n)return;
  const i=mgActual(b);
  if(i!==m.cur||force){
    m.cur=i;
    b.querySelectorAll(".mgd").forEach((d,k)=>d.classList.toggle("on",k===i));
    const ct=b.querySelector(".mgct");ct.textContent=(i+1)+" de "+m.n;
  }
  for(let k=Math.max(0,i-1);k<=Math.min(m.n-1,i+1);k++)mgPagina(b,k);
}
const mgBlob=cv=>new Promise(ok=>cv.toBlob(ok,"image/png"));
function mgPagina(b,i){
  const m=b._mg,cv=b.querySelectorAll("canvas.mgc")[i];if(!cv)return;
  const k=mgKey();if(cv.dataset.mgd===k||cv._mgp===k)return;
  cv._mgp=k;
  mgDibuja(cv,m.g,i).then(()=>{if(cv._mgp===k){cv.dataset.mgd=k;cv._mgp=null;cv._med={estilo:tjEstilo(),i}}else cv._mgp=null},e=>{cv._mgp=null;console.error("página",e)});
}
function mgScan(){
  document.querySelectorAll(".mgb:not([data-mgo])").forEach(b=>{
    b.dataset.mgo="1";
    if(!("IntersectionObserver" in window)){mgMonta(b);return}
    if(!MG.io)MG.io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){MG.io.unobserve(e.target);mgMonta(e.target)}}),{rootMargin:"300px"});
    MG.io.observe(b);
  });
}
function mgRedibuja(){
  document.querySelectorAll(".mgb").forEach(b=>{
    if(!b._mg||!b._mg.n){return}
    b.querySelectorAll("canvas.mgc").forEach(cv=>{delete cv.dataset.mgd;cv._mgp=null});
    mgVista(b,true);
  });
}
function mgIr(b,i){
  const s=b.querySelector(".mgs"),p=s.querySelectorAll(".mgp")[i];if(!p)return;
  try{s.scrollTo({left:p.offsetLeft-(s.clientWidth-p.offsetWidth)/2,behavior:"smooth"})}catch(e){s.scrollLeft=p.offsetLeft-(s.clientWidth-p.offsetWidth)/2}
}
async function mgPaginaPng(b){
  const m=b._mg;if(!m||!m.n){toast("La guía no está lista");return}
  const i=mgActual(b),cv=document.createElement("canvas");
  await mgDibuja(cv,m.g,i);
  const bl=await mgBlob(cv);if(!bl){toast("No se pudo guardar la página");return}
  mgDescarga(bl,"guia-"+mgSlug(mgTit(m.g))+"-"+(i+1)+".png");toast("Página guardada");
}
async function mgGuardaPdf(b){
  const g=b._mg&&b._mg.g;if(!g){toast("Un momento: se está preparando la guía");return}
  toast("Preparando el PDF…");
  try{const pdf=await mgPdf(g);mgDescarga(pdf,mgNombre(g));toast("PDF guardado")}catch(e){console.error(e);toast("No se pudo crear el PDF")}
}
async function mgCompartePdf(b){
  const g=b._mg&&b._mg.g;if(!g){toast("Un momento: se está preparando la guía");return}
  const listo=MG.pdf[g.id]&&MG.pdf[g.id].k===mgKey();
  let pdf;
  try{if(!listo)toast("Preparando el PDF…");pdf=await mgPdf(g)}catch(e){console.error(e);toast("No se pudo crear el PDF");return}
  const f=new File([pdf],mgNombre(g),{type:"application/pdf"});
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],title:mgTit(g)});return}}
  catch(e){
    if(e&&e.name==="AbortError")return;
    if(e&&e.name==="NotAllowedError"&&!listo){toast("PDF listo. Toca otra vez para compartir");return}
  }
  mgDescarga(pdf,mgNombre(g));toast("PDF guardado");
}
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset,b=t.closest(".mgb");if(!b)return;
  if(d.mgnav){const m=b._mg;if(m&&m.n)mgIr(b,(mgActual(b)+(+d.mgnav)+m.n)%m.n);else toast("Un momento: se está preparando la guía");return}
  if(d.mgpng){mgPaginaPng(b);return}
  if(d.mgpdf){mgGuardaPdf(b);return}
  if(d.mgshare){mgCompartePdf(b);return}
});

// ===== Fam Studio · Mi proyecto (el plan de compensación, solo para el equipo) =====
// Contenido: DB.negocio (content/negocio.json). Cada sección trae sus datos ya ordenados (claves, tablas, escalera, ejemplos, fichas)
// y aquí solo se pintan: ningún valor se calcula ni se redondea. El original en texto seguido está en content/_antes/negocio.json.
const NEG_IMG=/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/;
const ngCap=s=>String(s||"").charAt(0).toUpperCase()+String(s||"").slice(1);
const ngLista=a=>(a&&a.length)?'<ul class="rres">'+a.map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>':'';
const ngClaves=a=>(a&&a.length)?'<div class="ng-cl">'+a.map(c=>'<div class="ng-c"><b class="ng-n">'+esc(c.n)+'</b><p>'+esc(c.t)+'</p></div>').join("")+'</div>':'';
// tabla de dos columnas que se lee en el móvil sin desplazarse de lado
function ngTabla(t){
  if(!t||!t.filas)return '';
  return '<table class="ng-t'+(t.grande?' ng-tg':'')+'"><thead><tr>'+t.cols.map(c=>'<th scope="col">'+esc(c)+'</th>').join("")+'</tr></thead><tbody>'
    +t.filas.map(f=>'<tr>'+f.map((c,i)=>i?'<td class="ng-v">'+esc(c)+'</td>':'<th scope="row">'+esc(c)+'</th>').join("")+'</tr>').join("")+'</tbody></table>';
}
// niveles de bono: una escalera de nueve peldaños; de arriba abajo, del nivel más alto al más bajo
function ngNiveles(a){
  if(!a||!a.length)return '';
  return '<ol class="ng-nv" aria-label="Niveles de bono según tu VG">'+a.map((x,i)=>({x:x,i:i})).reverse().map(o=>'<li class="ng-w'+o.i+'"><span class="ng-pc">'+esc(o.x[0])+'</span><span class="ng-bar" aria-hidden="true"><i></i></span><span class="ng-vg">'+esc(o.x[1])+'</span></li>').join("")+'</ol>';
}
function ngEjemplo(e){
  if(!e)return '';
  return '<div class="ng-ej"><b class="ng-ejt">'+esc(e.t)+'</b>'
    +(e.cifras?'<div class="ng-eq">'+e.cifras.map(l=>'<div><small>'+esc(l[0])+'</small><b>'+esc(l[1])+'</b></div>').join("")+'</div>':'')
    +(e.txt?'<p>'+esc(ngCap(e.txt))+'</p>':'')
    +(e.res?'<div class="ng-res"><small>Resultado</small><b>'+esc(e.res)+'</b></div>':'')
    +(e.nota?'<p class="ng-ejn">'+esc(e.nota)+'</p>':'')+'</div>';
}
function ngFichas(a){
  if(!a||!a.length)return '';
  return '<div class="ng-fi">'+a.map(f=>'<div class="ng-f">'+(f.n?'<b class="ng-n">'+esc(f.n)+'</b>':'')+(f.d?'<b class="ng-ft">'+esc(f.t)+'</b><span>'+esc(f.d)+'</span>':'<p>'+esc(f.t)+'</p>')+'</div>').join("")+'</div>';
}
function ngPasos(a){
  if(!a||!a.length)return '';
  return '<ol class="ng-ps">'+a.map(p=>'<li><small>'+esc(p[0])+'</small><b>'+esc(p[1])+'</b></li>').join("")+'</ol>';
}
// lo que da cada título, sacado de las tablas de los bonos (nada se repite en el JSON)
function ngDa(N){
  const sub=s=>String(s).replace(/^Director\s+/,"");
  const g=(id,k)=>{const s=(N.secciones||[]).find(x=>x.id===id);return s&&s[k]?s[k]:null};
  const ef=g("bono-efectivo","tabla"),co=g("bono-coche","tabla"),ex=g("experiencias","fichas"),M={};
  const put=(t,x)=>{const k=sub(t);(M[k]=M[k]||[]).push(x)};
  if(ef)ef.filas.forEach(f=>{if(f[0]!=="Director")put(f[0],"Pago único "+f[1])});
  if(co)co.filas.forEach(f=>put(f[0],"Coche "+f[1]+" al mes"));
  if(ex)ex.forEach(f=>put(f.t,f.d));
  return M;
}
function ngEscalera(s,N){
  if(!s.escalera)return '';
  const M=ngDa(N);
  return '<h4 class="ng-h">'+esc(s.escalera_t||"")+'</h4><ol class="ng-esc">'+s.escalera.slice().reverse().map(r=>{
    const da=M[r.t]||[];
    return '<li><div class="ng-et"><b>'+esc(r.t)+'</b></div><div class="ng-eb">'
      +'<div class="ng-pd"><small>Pide</small>'+(r.pide.length?r.pide.map(x=>'<span class="ng-pill">'+esc(x)+'</span>').join(""):'<span class="ng-sin">Mira la tabla del folleto</span>')+'</div>'
      +(da.length?'<div class="ng-pd"><small>Da</small>'+da.map(x=>'<span class="ng-pill ng-gv">'+esc(x)+'</span>').join("")+'</div>':'')
      +'</div></li>';
  }).join("")+'</ol>'+(s.escalera_nota?'<p class="note">'+esc(s.escalera_nota)+'</p>':'');
}
function ngSeccion(s,i,N){
  let h='<section class="panel ng-s" id="ng_'+esc(s.id)+'"><h3>'+esc(s.titulo)+'</h3>';
  h+=ngClaves(s.claves);
  h+=ngLista(s.resumen);
  if(s.chips)h+='<p class="ng-lead">'+esc(s.chips_t||"")+'</p><div class="ng-ch">'+s.chips.map(c=>'<button type="button" class="chip" data-ng="'+esc(c[1])+'">'+esc(c[0])+'</button>').join("")+'</div>';
  h+=ngPasos(s.pasos);
  h+=ngLista(s.resumen2);
  h+=ngNiveles(s.niveles);
  h+=ngEjemplo(s.ejemplo);
  h+=ngTabla(s.tabla);
  h+=ngLista(s.resumen3);
  h+=ngFichas(s.fichas);
  h+=ngLista(s.resumen4);
  h+=ngEscalera(s,N);
  const im=(s.img||[]).filter(u=>typeof u==="string"&&NEG_IMG.test(u));
  if(im.length)h+='<details class="ng-fol"><summary>Ver la página del folleto</summary><div class="rimgs">'+im.map((u,j)=>'<button type="button" class="rthumb" data-nimg="'+i+'-'+j+'" aria-label="Ampliar la página del folleto: '+esc(s.titulo)+'"><img alt="Folleto: '+esc(s.titulo)+'" src="'+esc(u)+'"></button>').join("")+'</div><p class="note">Toca una imagen para verla grande: con dos dedos puedes ampliarla.</p></details>';
  return h+'</section>';
}
function viewNegocio(){
  const N=DB.negocio||{secciones:[],glosario:[]};
  let h='<section class="panel ng-top"><span class="rbadge">Solo para el equipo</span><h2>Mi proyecto</h2>'
    +'<p class="ng-int">Información interna del equipo. Para entender el plan, no para publicarla.</p>'
    +'<p class="lead">'+esc(N.intro||"")+'</p></section>';
  h+='<section class="panel ng-ix"><h3>Qué quieres ver</h3><div class="ng-ixg">'+(N.secciones||[]).map(s=>'<button type="button" class="ng-ixb" data-ng="'+esc(s.id)+'">'+esc(s.titulo)+'</button>').join("")+'<button type="button" class="ng-ixb" data-ng="glosario">Glosario</button></div></section>';
  h+=(N.secciones||[]).map((s,i)=>ngSeccion(s,i,N)).join("");
  h+='<section class="panel" id="ng_glosario"><h3>Glosario</h3><label>Buscar un término<input id="rn_q" type="search" autocomplete="off" placeholder="Escribe una palabra"></label><dl class="gl" id="rn_gl">'+glosarioHtml("")+'</dl></section>';
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
  if(t.dataset.ng){
    const x=document.getElementById("ng_"+t.dataset.ng);
    if(x){x.scrollIntoView({behavior:"smooth",block:"start"});const f=x.querySelector("h3");if(f){f.setAttribute("tabindex","-1");f.focus({preventScroll:true})}}
    return;
  }
  if(t.dataset.nimg){
    const [i,j]=t.dataset.nimg.split("-").map(Number),s=DB.negocio.secciones[i];
    const u=s&&s.img.filter(x=>typeof x==="string"&&NEG_IMG.test(x))[j];
    if(u)abreVisor(u,s.titulo);
  }
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")cierraVisor()});
document.addEventListener("input",e=>{if(e.target.id==="rn_q"){const g=document.getElementById("rn_gl");if(g)g.innerHTML=glosarioHtml(e.target.value)}});

// ===== Fam Studio · zonas de España (datos para «Tu bio») =====
// Generado a partir de una tabla revisada a mano; comprobar_bio.py la verifica (52 zonas, 250 municipios, provincias válidas, sin colisiones).
// p: [nombre en la lista, nombre oficial si es otro, alias, capitales, comunidad] · cc: comunidades · is: islas [nombre, alias, provincia]
// m: los 250 municipios más poblados [nombre, alias, provincia, isla] · ab: abreviaturas (se distingue entre mayúsculas y minúsculas)
// comun: nombres que son también palabras corrientes (solo cuentan con mayúscula y tras «en», «de», «desde»…) · mayus: solo cuentan con mayúscula inicial
const ZN={"p":[["Álava","Araba/Álava",["Araba","Alava"],["Vitoria","Vitoria-Gasteiz","Gasteiz"],"País Vasco"],["Albacete","",[],["Albacete"],"Castilla-La Mancha"],["Alicante","Alicante/Alacant",["Alacant"],["Alicante"],"Comunidad Valenciana"],["Almería","",[],["Almería"],"Andalucía"],["Asturias","",["Principado de Asturias","Asturies"],["Oviedo"],"Asturias"],["Ávila","",[],["Ávila"],"Castilla y León"],["Badajoz","",[],["Badajoz"],"Extremadura"],["Baleares","Illes Balears",["Illes Balears","Islas Baleares","Balears"],["Palma","Palma de Mallorca"],"Baleares"],["Barcelona","",[],["Barcelona"],"Cataluña"],["Bizkaia","Bizkaia/Vizcaya",["Vizcaya"],["Bilbao","Bilbo"],"País Vasco"],["Burgos","",[],["Burgos"],"Castilla y León"],["Cáceres","",[],["Cáceres"],"Extremadura"],["Cádiz","",[],["Cádiz"],"Andalucía"],["Cantabria","",[],["Santander"],"Cantabria"],["Castellón","Castellón/Castelló",["Castelló"],["Castellón de la Plana","Castelló de la Plana"],"Comunidad Valenciana"],["Ciudad Real","",[],["Ciudad Real"],"Castilla-La Mancha"],["Córdoba","",[],["Córdoba"],"Andalucía"],["A Coruña","",["La Coruña","Coruña"],["A Coruña"],"Galicia"],["Cuenca","",[],["Cuenca"],"Castilla-La Mancha"],["Gipuzkoa","Gipuzkoa/Guipúzcoa",["Guipúzcoa","Guipuzcoa"],["San Sebastián","Donostia"],"País Vasco"],["Girona","",["Gerona"],["Girona"],"Cataluña"],["Granada","",[],["Granada"],"Andalucía"],["Guadalajara","",[],["Guadalajara"],"Castilla-La Mancha"],["Huelva","",[],["Huelva"],"Andalucía"],["Huesca","",[],["Huesca"],"Aragón"],["Jaén","",[],["Jaén"],"Andalucía"],["La Rioja","",["Rioja"],["Logroño"],"La Rioja"],["Las Palmas","",[],["Las Palmas de Gran Canaria"],"Canarias"],["León","",[],["León"],"Castilla y León"],["Lleida","",["Lérida"],["Lleida"],"Cataluña"],["Lugo","",[],["Lugo"],"Galicia"],["Madrid","",[],["Madrid"],"Comunidad de Madrid"],["Málaga","",[],["Málaga"],"Andalucía"],["Murcia","",[],["Murcia"],"Región de Murcia"],["Navarra","",["Nafarroa","Comunidad Foral de Navarra"],["Pamplona","Iruña"],"Navarra"],["Ourense","",["Orense"],["Ourense"],"Galicia"],["Palencia","",[],["Palencia"],"Castilla y León"],["Pontevedra","",[],["Pontevedra"],"Galicia"],["Salamanca","",[],["Salamanca"],"Castilla y León"],["Segovia","",[],["Segovia"],"Castilla y León"],["Sevilla","",[],["Sevilla"],"Andalucía"],["Soria","",[],["Soria"],"Castilla y León"],["Tarragona","",[],["Tarragona"],"Cataluña"],["Tenerife","Santa Cruz de Tenerife",["Santa Cruz de Tenerife"],["Santa Cruz de Tenerife","Santa Cruz"],"Canarias"],["Teruel","",[],["Teruel"],"Aragón"],["Toledo","",[],["Toledo"],"Castilla-La Mancha"],["Valencia","Valencia/València",["València"],["Valencia"],"Comunidad Valenciana"],["Valladolid","",[],["Valladolid"],"Castilla y León"],["Zamora","",[],["Zamora"],"Castilla y León"],["Zaragoza","",[],["Zaragoza"],"Aragón"],["Ceuta","",[],["Ceuta"],"Ceuta"],["Melilla","",[],["Melilla"],"Melilla"]],"cc":[["Andalucía",["Andalucia"]],["Aragón",["Aragon"]],["Canarias",["Islas Canarias"]],["Castilla y León",["Castilla Leon"]],["Castilla-La Mancha",["Castilla La Mancha"]],["Cataluña",["Catalunya"]],["Comunidad Valenciana",["Comunitat Valenciana","Levante"]],["Extremadura",[]],["Galicia",["Galiza"]],["País Vasco",["Euskadi","Pais Vasco"]],["Comunidad de Madrid",[]],["Región de Murcia",["Region de Murcia"]]],"is":[["Mallorca",[],"Baleares"],["Menorca",[],"Baleares"],["Ibiza",["Eivissa"],"Baleares"],["Formentera",[],"Baleares"],["Gran Canaria",[],"Las Palmas"],["Lanzarote",[],"Las Palmas"],["Fuerteventura",[],"Las Palmas"],["Tenerife",[],"Tenerife"],["La Palma",[],"Tenerife"],["La Gomera",[],"Tenerife"],["El Hierro",[],"Tenerife"]],"m":[["Madrid",[],"Madrid",""],["Barcelona",[],"Barcelona",""],["Valencia",["València"],"Valencia",""],["Sevilla",[],"Sevilla",""],["Zaragoza",[],"Zaragoza",""],["Málaga",[],"Málaga",""],["Murcia",[],"Murcia",""],["Palma",["Palma de Mallorca"],"Baleares","Mallorca"],["Las Palmas de Gran Canaria",["Las Palmas"],"Las Palmas","Gran Canaria"],["Bilbao",["Bilbo"],"Bizkaia",""],["Alicante",["Alacant"],"Alicante",""],["Córdoba",[],"Córdoba",""],["Valladolid",[],"Valladolid",""],["Vigo",[],"Pontevedra",""],["L'Hospitalet de Llobregat",["Hospitalet","L Hospitalet"],"Barcelona",""],["Gijón",["Xixón"],"Asturias",""],["Vitoria-Gasteiz",["Vitoria","Vitoria Gasteiz"],"Álava",""],["A Coruña",["La Coruña","Coruña"],"A Coruña",""],["Elche",["Elx"],"Alicante",""],["Granada",[],"Granada",""],["Terrassa",["Tarrasa"],"Barcelona",""],["Badalona",[],"Barcelona",""],["Oviedo",["Uviéu"],"Asturias",""],["Cartagena",[],"Murcia",""],["Sabadell",[],"Barcelona",""],["Jerez de la Frontera",["Jerez"],"Cádiz",""],["Móstoles",[],"Madrid",""],["Santa Cruz de Tenerife",["Santa Cruz"],"Tenerife","Tenerife"],["Pamplona",["Iruña","Iruña Pamplona"],"Navarra",""],["Almería",[],"Almería",""],["Alcalá de Henares",[],"Madrid",""],["Fuenlabrada",[],"Madrid",""],["Leganés",[],"Madrid",""],["San Sebastián",["Donostia","San Sebastian"],"Gipuzkoa",""],["Getafe",[],"Madrid",""],["Burgos",[],"Burgos",""],["Albacete",[],"Albacete",""],["Santander",[],"Cantabria",""],["Castellón de la Plana",["Castelló de la Plana","Castelló"],"Castellón",""],["Alcorcón",[],"Madrid",""],["San Cristóbal de La Laguna",["La Laguna"],"Tenerife","Tenerife"],["Logroño",[],"La Rioja",""],["Badajoz",[],"Badajoz",""],["Marbella",[],"Málaga",""],["Salamanca",[],"Salamanca",""],["Huelva",[],"Huelva",""],["Lleida",["Lérida"],"Lleida",""],["Dos Hermanas",[],"Sevilla",""],["Tarragona",[],"Tarragona",""],["Torrejón de Ardoz",["Torrejón"],"Madrid",""],["Parla",[],"Madrid",""],["Mataró",[],"Barcelona",""],["León",[],"León",""],["Algeciras",[],"Cádiz",""],["Alcobendas",[],"Madrid",""],["Santa Coloma de Gramenet",[],"Barcelona",""],["Cádiz",[],"Cádiz",""],["Jaén",[],"Jaén",""],["Reus",[],"Tarragona",""],["Ourense",["Orense"],"Ourense",""],["Girona",["Gerona"],"Girona",""],["Telde",[],"Las Palmas","Gran Canaria"],["Barakaldo",[],"Bizkaia",""],["Roquetas de Mar",["Roquetas"],"Almería",""],["Lugo",[],"Lugo",""],["Santiago de Compostela",["Compostela"],"A Coruña",""],["Cáceres",[],"Cáceres",""],["Las Rozas de Madrid",["Las Rozas"],"Madrid",""],["Lorca",[],"Murcia",""],["Rivas-Vaciamadrid",["Rivas"],"Madrid",""],["San Fernando",[],"Cádiz",""],["Sant Cugat del Vallès",["San Cugat","Sant Cugat"],"Barcelona",""],["San Sebastián de los Reyes",[],"Madrid",""],["Torrevieja",[],"Alicante",""],["Cornellà de Llobregat",["Cornellá","Cornella"],"Barcelona",""],["El Puerto de Santa María",["Puerto de Santa María"],"Cádiz",""],["Guadalajara",[],"Guadalajara",""],["Chiclana de la Frontera",["Chiclana"],"Cádiz",""],["El Ejido",[],"Almería",""],["Mijas",[],"Málaga",""],["Pozuelo de Alarcón",["Pozuelo"],"Madrid",""],["Toledo",[],"Toledo",""],["Torrent",[],"Valencia",""],["Melilla",[],"Melilla",""],["Ceuta",[],"Ceuta",""],["Coslada",[],"Madrid",""],["Fuengirola",[],"Málaga",""],["Pontevedra",[],"Pontevedra",""],["Sant Boi de Llobregat",["San Baudilio","Sant Boi"],"Barcelona",""],["Talavera de la Reina",["Talavera"],"Toledo",""],["Arona",["Los Cristianos"],"Tenerife","Tenerife"],["Vélez-Málaga",["Vélez Málaga","Velez Malaga"],"Málaga",""],["Orihuela",[],"Alicante",""],["Gandia",["Gandía"],"Valencia",""],["Alcalá de Guadaíra",["Alcalá de Guadaira"],"Sevilla",""],["Avilés",[],"Asturias",""],["Manresa",[],"Barcelona",""],["Palencia",[],"Palencia",""],["Rubí",[],"Barcelona",""],["Getxo",[],"Bizkaia",""],["Santa Lucía de Tirajana",[],"Las Palmas","Gran Canaria"],["Valdemoro",[],"Madrid",""],["Ciudad Real",[],"Ciudad Real",""],["Molina de Segura",[],"Murcia",""],["Estepona",[],"Málaga",""],["Majadahonda",[],"Madrid",""],["Paterna",[],"Valencia",""],["Benalmádena",[],"Málaga",""],["Benidorm",[],"Alicante",""],["Torremolinos",[],"Málaga",""],["Sanlúcar de Barrameda",["Sanlúcar"],"Cádiz",""],["Sagunto",["Sagunt"],"Valencia",""],["Vilanova i la Geltrú",["Vilanova y la Geltrú","Villanueva y Geltrú"],"Barcelona",""],["Castelldefels",[],"Barcelona",""],["Ferrol",[],"A Coruña",""],["Viladecans",[],"Barcelona",""],["El Prat de Llobregat",["El Prat"],"Barcelona",""],["Arrecife",[],"Las Palmas","Lanzarote"],["Ponferrada",[],"León",""],["Irun",[],"Gipuzkoa",""],["La Línea de la Concepción",[],"Cádiz",""],["Collado Villalba",[],"Madrid",""],["Granollers",[],"Barcelona",""],["Aranjuez",[],"Madrid",""],["Motril",[],"Granada",""],["Zamora",[],"Zamora",""],["Boadilla del Monte",[],"Madrid",""],["Mérida",[],"Badajoz",""],["Alcoy",["Alcoi"],"Alicante",""],["Cerdanyola del Vallès",["Cerdanyola"],"Barcelona",""],["San Vicente del Raspeig",["Sant Vicent del Raspeig"],"Alicante",""],["Linares",[],"Jaén",""],["Ávila",[],"Ávila",""],["Arganda del Rey",["Arganda"],"Madrid",""],["Cuenca",[],"Cuenca",""],["Huesca",[],"Huesca",""],["Pinto",[],"Madrid",""],["San Bartolomé de Tirajana",["Maspalomas","Playa del Inglés"],"Las Palmas","Gran Canaria"],["Mollet del Vallès",["Mollet"],"Barcelona",""],["Elda",[],"Alicante",""],["Segovia",[],"Segovia",""],["Siero",[],"Asturias",""],["Utrera",[],"Sevilla",""],["Torrelavega",[],"Cantabria",""],["Vila-real",["Villarreal","Vila real"],"Castellón",""],["Calvià",[],"Baleares","Mallorca"],["Granadilla de Abona",["Granadilla"],"Tenerife","Tenerife"],["Ibiza",["Eivissa"],"Baleares","Ibiza"],["Adeje",["Costa Adeje"],"Tenerife","Tenerife"],["Colmenar Viejo",[],"Madrid",""],["Rincón de la Victoria",[],"Málaga",""],["Tres Cantos",[],"Madrid",""],["Esplugues de Llobregat",["Esplugues"],"Barcelona",""],["Figueres",["Figueras"],"Girona",""],["Gavà",[],"Barcelona",""],["Puertollano",[],"Ciudad Real",""],["Vic",[],"Barcelona",""],["Mairena del Aljarafe",["Mairena"],"Sevilla",""],["Santurtzi",[],"Bizkaia",""],["Alzira",[],"Valencia",""],["Portugalete",[],"Bizkaia",""],["Sant Feliu de Llobregat",[],"Barcelona",""],["Dénia",["Denia"],"Alicante",""],["Manacor",[],"Baleares","Mallorca"],["Lucena",[],"Córdoba",""],["Mislata",[],"Valencia",""],["Alcantarilla",[],"Murcia",""],["Alhaurín de la Torre",[],"Málaga",""],["Puerto Real",[],"Cádiz",""],["Antequera",[],"Málaga",""],["Basauri",[],"Bizkaia",""],["La Orotava",[],"Tenerife","Tenerife"],["Blanes",[],"Girona",""],["El Vendrell",[],"Tarragona",""],["Errenteria",["Rentería"],"Gipuzkoa",""],["La Rinconada",[],"Sevilla",""],["Lloret de Mar",[],"Girona",""],["Plasencia",[],"Cáceres",""],["San Fernando de Henares",[],"Madrid",""],["Soria",[],"Soria",""],["Vilafranca del Penedès",[],"Barcelona",""],["Igualada",[],"Barcelona",""],["Puerto del Rosario",[],"Las Palmas","Fuerteventura"],["Écija",["Ecija"],"Sevilla",""],["Arucas",[],"Las Palmas","Gran Canaria"],["Burjassot",[],"Valencia",""],["Langreo",[],"Asturias",""],["Llucmajor",[],"Baleares","Mallorca"],["Los Palacios y Villafranca",["Los Palacios"],"Sevilla",""],["Marratxí",[],"Baleares","Mallorca"],["Narón",[],"A Coruña",""],["Ripollet",[],"Barcelona",""],["Sant Adrià de Besòs",["San Adrián de Besós"],"Barcelona",""],["Santa Eulària des Riu",["Santa Eulalia del Río","Santa Eulalia"],"Baleares","Ibiza"],["Torre-Pacheco",["Torre Pacheco"],"Murcia",""],["Azuqueca de Henares",["Azuqueca"],"Guadalajara",""],["Burriana",["Borriana"],"Castellón",""],["Don Benito",[],"Badajoz",""],["Los Realejos",[],"Tenerife","Tenerife"],["Vilagarcía de Arousa",["Vilagarcía"],"Pontevedra",""],["Andújar",[],"Jaén",""],["Miranda de Ebro",[],"Burgos",""],["Montcada i Reixac",["Montcada"],"Barcelona",""],["Oleiros",[],"A Coruña",""],["Santa Pola",[],"Alicante",""],["Teruel",[],"Teruel",""],["Tomelloso",[],"Ciudad Real",""],["Tudela",[],"Navarra",""],["Águilas",[],"Murcia",""],["Inca",[],"Baleares","Mallorca"],["Mieres",[],"Asturias",""],["Olot",[],"Girona",""],["Ontinyent",[],"Valencia",""],["Villajoyosa",["La Vila Joiosa","Vila Joiosa"],"Alicante",""],["Almendralejo",[],"Badajoz",""],["Cambrils",[],"Tarragona",""],["Cieza",[],"Murcia",""],["Petrer",["Petrel"],"Alicante",""],["Ronda",[],"Málaga",""],["Sant Joan Despí",[],"Barcelona",""],["Villena",[],"Alicante",""],["Yecla",[],"Murcia",""],["Úbeda",[],"Jaén",""],["Aranda de Duero",[],"Burgos",""],["Arteixo",[],"A Coruña",""],["Barberà del Vallès",["Barberà"],"Barcelona",""],["Galapagar",[],"Madrid",""],["Mazarrón",[],"Murcia",""],["Níjar",[],"Almería",""],["Salt",[],"Girona",""],["San Javier",[],"Murcia",""],["San Roque",[],"Cádiz",""],["Tortosa",[],"Tarragona",""],["Aldaia",[],"Valencia",""],["Castro-Urdiales",["Castro Urdiales"],"Cantabria",""],["Totana",[],"Murcia",""],["Alcázar de San Juan",[],"Ciudad Real",""],["Arcos de la Frontera",[],"Cádiz",""],["Camargo",[],"Cantabria",""],["Illescas",[],"Toledo",""],["Ingenio",[],"Las Palmas","Gran Canaria"],["Leioa",[],"Bizkaia",""],["Manises",[],"Valencia",""],["Maó",["Mahón"],"Baleares","Menorca"],["Puerto de la Cruz",[],"Tenerife","Tenerife"],["San Andrés del Rabanedo",[],"León",""],["Seseña",[],"Toledo",""],["Ciutadella",["Ciudadela"],"Baleares","Menorca"],["Coria del Río",[],"Sevilla",""],["Crevillent",["Crevillente"],"Alicante",""]],"ab":[["BCN","Barcelona"],["Bcn","Barcelona"],["MAD","Madrid"],["VLC","Valencia"],["Vlc","Valencia"],["MLG","Málaga"],["Mlg","Málaga"],["ZGZ","Zaragoza"],["Zgz","Zaragoza"],["BIO","Bizkaia"],["SVQ","Sevilla"],["Svq","Sevilla"],["ALC","Alicante"],["PMI","Baleares"],["LPA","Las Palmas"],["TFS","Tenerife"],["TFN","Tenerife"],["IBZ","Ibiza"],["OVD","Asturias"],["SCQ","A Coruña"],["VGO","Pontevedra"],["GRX","Granada"]],"comun":["Pinto","Ronda","Vic","Salt","Parla","Inca","Torrent","Elda","Rubí","Siero","Ingenio","Águilas","Ciudadela","Los Cristianos","La Laguna","El Hierro","Santa Cruz","Don Benito","Puerto Real","San Roque","San Fernando","San Javier","Levante","Camargo","Linares","Lucena","Tudela","Rivas","Mollet","Compostela"],"mayus":["León","Granada","Palma","Cuenca","Rioja","La Palma"]};

// ===== Fam Studio · Tu bio de Instagram =====
// Cuestionario de cinco preguntas -> seis bios montadas con las frases de content/bio.json (DB.bio).
// El montaje es el mismo que hace comprobar_bio.py (que revisa todas las combinaciones al construir la app).
const BIO_MAX=150, BIO_NVER=12, BIO_PAL_MAX=12, BIO_NOM_MAX=24, BIO_CIU_MAX=20;
// Ciudad (opcional): cada una de las seis bios la dice de una forma y en un sitio distinto: [frase, posición] (0 = al principio, 1 = tras la primera línea, -1 = antes de la última). Si con ella no cabe en 150, esa bio va sin ciudad. Misma tabla en comprobar_bio.py.
const BIO_CIU_FORMAS={A:["Desde {C}",1],B:["En {C} y por mensaje",-1],C:["{C}",0],D:["De {C}",-1],E:["Aquí, en {C}",1],F:["Soy de {C}",-1]};
const BIO_CIU_NO=/env(io|ios)\b|tienda|gratis|precio|oferta|descuento|dinero|negoci|vend|venta|compr|farmasi|catalog|whatsapp|instagram|tiktok|http|www/;
const BIO_CIU_MIN=["de","del","la","las","los","el","y","i","en","a","d"];
function bioCiu(s){
  let t=String(s||"").normalize("NFC").replace(/[^\p{L}\s.'\u2019-]/gu,"").replace(/\s+/g," ").trim();
  if(t.length>BIO_CIU_MAX){ // nunca se parte una palabra: se quitan palabras enteras (y los «de», «del»… que queden colgando)
    const w=t.split(" ");while(w.length>1&&w.join(" ").length>BIO_CIU_MAX)w.pop();
    while(w.length>1&&BIO_CIU_MIN.indexOf(w[w.length-1].toLowerCase())>=0)w.pop();
    t=w.join(" ").slice(0,BIO_CIU_MAX).trim();
  }
  if(!/\p{L}{2}/u.test(t)||(BIO_CIU_NO.test(bioN(t))&&!znConoce(t)))return "";
  if(t===t.toLowerCase()||t===t.toUpperCase())t=t.toLowerCase().split(" ").map((w,i)=>i&&BIO_CIU_MIN.indexOf(w)>=0?w:w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  return t;
}
function bioCiuLineas(L,letra,ciu){
  const f=ciu&&BIO_CIU_FORMAS[letra];if(!f)return L;
  const M=L.slice(),pos=f[1]<0?Math.max(0,M.length-1):Math.min(f[1],M.length);
  M.splice(pos,0,{g:"ciudad",t:f[0].split("{C}").join(ciu)});
  return M.map(x=>x.t).join("\n").length<=BIO_MAX?M:L;
}
// ----- Zona (provincia, isla o ciudad autónoma): lista con buscador, sugerencia de provincia y reconocimiento en una bio ya escrita -----
// Datos en src/zonas.js (ZN). Todo se compara sin tildes, en minúsculas y con guiones y apóstrofos como espacios (una letra por letra, para poder señalar el texto original).
const znL=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[-'\u2019\u00b7]/g," ");
const ZN_CUE=["en","de","del","desde","por","entre","hacia","a","y"];
let ZX=null;
function znIdx(){
  if(ZX)return ZX;
  const mapa={},mun={},prop={},zonas=[];
  const add=(nom,o)=>{const k=znL(nom).replace(/\s+/g," ").trim();if(k&&!mapa[k])mapa[k]=o;return k};
  const esComun=nom=>ZN.comun.indexOf(nom)>=0,esMay=nom=>ZN.mayus.indexOf(nom)>=0;
  const info=(nom,t,z)=>({t:t,z:z,c:esComun(nom),m:esMay(nom)});
  ZN.p.forEach(p=>{
    const ks=[];[p[0]].concat(p[1]?[p[1].replace("/"," ")]:[],p[2]).forEach(x=>{ks.push(znL(x).trim());prop[znL(x).trim()]=1;add(x,info(x,"p",p[0]))});
    p[3].forEach(x=>{ks.push(znL(x).trim());prop[znL(x).trim()]=1;add(x,info(x,"c",p[0]))});
    zonas.push({n:p[0],of:p[1]?p[1].replace("/"," / "):"",k:ks});
  });
  ZN.cc.forEach(c=>[c[0]].concat(c[1]).forEach(x=>{prop[znL(x).trim()]=1;add(x,info(x,"cc",c[0]))}));
  ZN.is.forEach(c=>[c[0]].concat(c[1]).forEach(x=>{prop[znL(x).trim()]=1;add(x,info(x,"is",c[0]))}));
  ZN.m.forEach(m=>[m[0]].concat(m[1]).forEach(x=>{const k=add(x,info(x,"m",m[3]||m[2]));if(k&&!mun[k])mun[k]={z:m[3]||m[2],prov:m[2],n:m[0]}}));
  [["espana","España"],["toda espana","Toda España"],["online","online"],["a distancia","a distancia"],["envios","envíos"]].forEach(x=>add(x[1],{t:"at",z:"",c:false,m:false}));
  const nombres=Object.keys(mapa).sort((x,y)=>y.length-x.length||(x<y?-1:1)).map(x=>x.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  ZX={mapa:mapa,mun:mun,prop:prop,zonas:zonas.sort((x,y)=>znL(x.n)<znL(y.n)?-1:1),
      re:new RegExp("(^|[^a-z0-9])("+nombres.join("|")+")(?![a-z0-9])","g"),
      ab:new RegExp("(^|[^A-Za-z0-9])("+ZN.ab.map(x=>x[0]).join("|")+")(?![A-Za-z0-9])","g")};
  return ZX;
}
const znConoce=t=>{const X=znIdx(),k=znL(t).replace(/\s+/g," ").trim();return !!(X.mapa[k]&&!X.mapa[k].c&&X.mapa[k].t!=="at")};
// lo que sugiere la app si lo escrito es un municipio grande que no es capital: {mun, zona}; null si no hay nada que sugerir
function znSugiere(t){
  const X=znIdx(),k=znL(t).replace(/\s+/g," ").trim(),m=X.mun[k];
  if(!m||X.prop[k]||znL(m.z)===k)return null;
  return {mun:String(t).trim(),zona:m.z};
}
function znLista(q){
  const X=znIdx(),k=znL(q).replace(/\s+/g," ").trim();
  return k?X.zonas.filter(z=>z.k.some(x=>x.indexOf(k)>=0)):X.zonas;
}
// primera zona que aparece en un texto: {txt (como está escrito), z (zona), t (p, c, cc, is, m, ab o at)}; las abreviaturas solo cuentan tal cual (BCN, Bcn, MAD…) y las palabras corrientes solo con mayúscula y un «en», «de»… delante
function znReconoce(orig){
  orig=String(orig||"").normalize("NFC");
  const X=znIdx(),n=znL(orig),igual=n.length===orig.length;let mejor=null;
  const re=new RegExp(X.re.source,"g");let m;
  while((m=re.exec(n))){
    const st=m.index+m[1].length,e=X.mapa[m[2]],txt=igual?orig.substr(st,m[2].length):m[2];
    re.lastIndex=st+1;
    if(e.m&&!/^\p{Lu}/u.test(txt))continue;
    if(e.c){const prev=n.slice(0,st).trim().split(/\s+/).pop();if(!/^\p{Lu}/u.test(txt)||ZN_CUE.indexOf(prev)<0)continue}
    mejor={txt:txt,z:e.z,t:e.t,i:st};break;
  }
  const ra=new RegExp(X.ab.source,"g");let b;
  while((b=ra.exec(orig))){
    const st=b.index+b[1].length,ab=b[2];
    // una abreviatura solo cuenta como zona si es una palabra suelta y está en un contexto de sitio: tras «en», «de», «desde»… o sola entre separadores
    const antes=orig.slice(0,st),desp=orig.slice(st+ab.length);
    const prev=znL(antes).trim().split(/\s+/).pop(),cue=ZN_CUE.indexOf(prev)>=0;
    const sepA=/(^|[\n|·•,;:\/\u2013\u2014-]|\p{Extended_Pictographic})[ \t]*$/u.test(antes),sepD=/^[ \t]*($|[\n|·•,;:.\/\u2013\u2014-]|\p{Extended_Pictographic})/u.test(desp);
    if(!(cue||(sepA&&sepD)))continue;
    if(ab==="BIO"&&/(?:eco|natural|cosmetic\w*|organic\w*|producto\w*|vegan\w*|bio)\W*$/i.test(bioN(orig.slice(Math.max(0,st-14),st))+"")||ab==="BIO"&&/^\W*(?:cosmetic|natural|organic|producto|vegan|eco)/i.test(bioN(orig.slice(st+3,st+16))))continue;
    const z=ZN.ab.filter(x=>x[0]===ab)[0][1];
    if(!mejor||st<mejor.i)mejor={txt:ab,z:z,t:"ab",i:st};
    break;
  }
  return mejor;
}
function bioZonaHtml(){
  const a=PIG.a||{ciudad:""},raw=PIG.zt!=null?PIG.zt:a.ciudad,k=znL(raw).replace(/\s+/g," ").trim();
  let h="";
  const sg=znSugiere(raw);
  if(sg&&a.zd!==znL(raw).trim())h+='<div class="bz-sug" role="status"><p>¿Pones '+esc(sg.zona)+'?</p><div class="acts"><button type="button" class="mini bio-pri" data-bk="zsi" data-bv="'+esc(sg.zona)+'">Sí, '+esc(sg.zona)+'</button><button type="button" class="mini" data-bk="zno">Dejar '+esc(sg.mun)+'</button></div></div>';
  const L=znLista(raw),cur=znL(a.ciudad).trim();
  h+='<div class="bz-list" role="group" aria-label="Zonas de España">'+(L.length?L.map(z=>{const on=cur===znL(z.n).trim();return '<button type="button" class="bz-it'+(on?" on":"")+'" data-bk="zona" data-bv="'+esc(z.n)+'" aria-pressed="'+(on?"true":"false")+'">'+esc(z.n)+(z.of?'<small>'+esc(z.of)+'</small>':'')+'</button>'}).join(""):'<p class="bz-none">'+(k?'Esa zona no está en la lista: se queda lo que has escrito.':'')+'</p>')+'</div>';
  return h;
}
function bioZonaBox(){const b=document.getElementById("bz_box");if(b)b.innerHTML=bioZonaHtml()}
const BIO_QUIEN=[["clientas","Para clientas"],["proyecto","Para mi proyecto"],["ambas","Para las dos cosas"]];
const BIO_TEMAS_C=[["piel","Piel"],["maquillaje","Maquillaje"],["pelo","Pelo"],["nutri","Nutrición y recetas"],["perfumes","Perfumes y regalos"],["todo","De todo un poco"]];
const BIO_TEMAS_P=[["dia","Mi día a día con mi proyecto"],["redes","Aprender redes desde cero"],["familia","Llegar a todo con la familia"],["edad","Empezar algo a mi edad"]];
const BIO_RASGOS=[["madre","Soy madre"],["trabajo","Trabajo fuera de casa"],["cuarenta","He pasado de los 40"],["veinte","Tengo veintitantos"],["deporte","Hago deporte"],["pueblo","Soy de pueblo"],["belleza","Trabajo en belleza (peluquería, estética, maquillaje)"],["nada","Nada en especial"]];
const BIO_TONOS=[["cercana","Cercana"],["directa","Directa"],["humor","Con humor"]];
const BIO_LLAMADAS=[["palabra","Que me escriban una palabra"],["destacadas","Que miren mis destacadas"],["mensaje","Que me manden un mensaje"]];
// cada línea de una bio: [grupo de frases, desplazamiento respecto a la versión actual]
const BIO_EST={A:[["quien",0],["hablo",0],["llamada",0]],B:[["para_quien",0],["encontrar",0],["llamada",1]],C:[["pregunta",0],["hablo",2],["llamada",2]],D:[["trio",0],["llamada",3]],E:[["frase",0],["llamada",0]],F_proy:[["proyecto",0],["encontrar",1],["llamada",2]],F_cli:[["para_quien_f",0],["encontrar",2],["llamada",3]]};
const BIO_EXCL={cuarenta:"veinte",veinte:"cuarenta",trabajo:"belleza",belleza:"trabajo"};
const PIG={zt:null,a:null,ok:null,vs:[0,0,0,0,0,0],pv:[0,0,0,0,0,0],edit:false,emo:false,red:"ig",tv:0,rv:null,ci:0};
const PRE_MAX={texto:70,foto:90,desc:350};

const bioTemas=q=>q==="proyecto"?BIO_TEMAS_P:q?BIO_TEMAS_C:[];
const bioHas=(L,v)=>L.some(x=>x[0]===v);
const bioPal=s=>String(s||"").toUpperCase().replace(/[^A-ZÁÉÍÓÚÜÑ]/g,"").slice(0,BIO_PAL_MAX);
function bioRasgos(R){
  R=(Array.isArray(R)?R:[]).filter((x,i,a)=>bioHas(BIO_RASGOS,x)&&a.indexOf(x)===i);
  if(R.indexOf("nada")>=0)return ["nada"];
  const out=[];
  R.forEach(x=>{if(out.length<2&&out.indexOf(BIO_EXCL[x])<0)out.push(x)});
  return BIO_RASGOS.map(x=>x[0]).filter(x=>out.indexOf(x)>=0);
}
function bioSane(a){
  a=a&&typeof a==="object"?a:{};
  const o={quien:bioHas(BIO_QUIEN,a.quien)?a.quien:"",tono:bioHas(BIO_TONOS,a.tono)?a.tono:"",llamada:bioHas(BIO_LLAMADAS,a.llamada)?a.llamada:"",palabra:bioPal(a.palabra),nombre:String(a.nombre||"").slice(0,BIO_NOM_MAX),rasgos:bioRasgos(a.rasgos),ciudad:bioCiu(a.ciudad)};
  o.sinc=a.sinc===true&&!o.ciudad;
  o.zd=o.ciudad&&typeof a.zd==="string"&&a.zd===znL(o.ciudad)?a.zd:""; // «Dejar Fuenlabrada»: no se vuelve a sugerir la provincia para ese texto
  o.tema=bioHas(bioTemas(o.quien),a.tema)?a.tema:"";
  return o;
}
function bioInit(){
  if(PIG.a)return;
  PIG.a=bioSane(ls("fs_bio_r"));
  PIG.emo=ls("fs_bio_emo")===1;
  PIG.ok=bioOk(ls("fs_bio_ok"));
}
// la bio elegida guarda sus dos versiones (sin y con emojis); las guardadas antes solo traían una: la otra se saca de ella
function bioOk(k){
  if(!k||typeof k.txt!=="string"||!k.txt.length||k.txt.length>BIO_MAX+8)return null;
  const e=bioTieneEmo(k.txt),v=x=>typeof x==="string"&&x.length&&x.length<=BIO_MAX+8;
  const sin=v(k.sin)?k.sin:(e?bioSinEmo(k.txt):k.txt);
  return {txt:k.txt,sin:sin,con:v(k.con)?k.con:(e?k.txt:bioConEmo(sin)),est:String(k.est||"").slice(0,1)};
}
const bioOkTxt=()=>PIG.emo?PIG.ok.con:PIG.ok.sin;
const bioSave=()=>ls("fs_bio_r",PIG.a);
const bioDone=a=>!!(a.quien&&a.tema&&a.rasgos.length&&a.tono&&a.llamada&&(a.llamada!=="palabra"||a.palabra.length>=2));

// ----- montaje de las bios -----
function bioVar(g,r){
  const B=DB.bio,t=r.tono,tema=r.tema;
  switch(g){
   case "quien":{
    const rs=r.rasgos.filter(x=>x!=="nada");
    if(!rs.length)return B.quien.nada[t];
    if(rs.length===1)return B.quien[rs[0]][t];
    const p1=B.pred[rs[0]],p2=B.pred[rs[1]];
    return B.pares[t].map(f=>f.split("{P1}").join(p1.charAt(0).toUpperCase()+p1.slice(1)).split("{p2}").join(p2));
   }
   case "hablo":case "encontrar":case "frase":return B[g][tema][t];
   case "pregunta":return B.preguntas[tema];
   case "trio":return B.trios[tema].map(x=>x.join("\n"));
   case "para_quien":case "para_quien_f":return B[g][r.quien][t];
   case "proyecto":return B.proyecto[t];
   case "llamada":return B.llamada[r.llamada][t].map(x=>x.split("{PALABRA}").join(r.palabra));
  }
  return [""];
}
const bioMontar=(r,v,est)=>BIO_EST[est].map(l=>{const vs=bioVar(l[0],r);return vs[(v+l[1])%vs.length]}).join("\n");
// las líneas sueltas de una bio, cada una con el grupo de frases del que sale (el trío son tres líneas)
function bioLineas(r,v,est){
  const out=[];
  BIO_EST[est].forEach(l=>{const vs=bioVar(l[0],r);vs[(v+l[1])%vs.length].split("\n").forEach(x=>out.push({g:l[0],t:x}))});
  return out;
}
function bioSeis(r){
  const f=r.quien==="clientas"?"F_cli":"F_proy";
  return [["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F",f]].map((x,i)=>{
    const L=bioCiuLineas(bioLineas(r,PIG.vs[i],x[1]),x[0],r.ciudad);
    const sin=L.map(y=>y.t).join("\n"),con=bioEmoAplica(r,L,BIO_MAX); // las dos versiones de cada opción: la que se ve la decide el interruptor (PIG.emo)
    return {l:x[0],sin:sin,con:con,txt:PIG.emo?con:sin};
  });
}

// ----- con emojis (la única parte de la app con emojis: van a su Instagram) -----
// Una paleta corta y sobria: sin caras ni manos, sin dinero, sin fuego ni cohetes, nada que sugiera un resultado en el cuerpo.
const BIO_EMO_TEMA={piel:["🧴","🌿","🌞"],maquillaje:["💄","🎨","🌸"],pelo:["🎀","🌿","🌸"],nutri:["🍓","🥗","🍋","🍵","🥣"],perfumes:["🌷","🎁","🌸"],todo:["🌿","🌸","☕"],dia:["📱","📅","☕"],redes:["📱","🧩","🌱"],familia:["🏡","🧸","☕"],edad:["🌱","📅","☕"]};
const BIO_EMO_GEN=["🌿","🌸","☕","📅","🧩","🌷"];
const BIO_EMO_RASGO={madre:"🧸",trabajo:"⏰",deporte:"👟",pueblo:"📍",belleza:"💄"};
const BIO_EMO_LLAMADA={palabra:["🔑","💬"],destacadas:["📌"],mensaje:["💬","📩","💌"]};
// si la línea nombra algo concreto, el emoji lo sigue (el orden manda)
const BIO_EMO_KW=[[/\bcafe/,"☕"],[/pueblo|barrio/,"📍"],[/ciudad|madrid|barcelona|sevilla|valencia|bilbao|malaga|zaragoza/,"🌆"],[/\bcole\b|hij[oa]s?\b|ninos?\b|madre|mama\b|familia/,"🧸"],[/\bcasa\b|hogar|sofa|cocina/,"🏡"],[/prisa|manana|reloj|minutos|turno|despertador/,"⏰"],[/proyecto|algo mio|algo propio/,"🌱"],[/deporte|zapatillas|correr|gimnasio/,"👟"]];
const bioN=s=>String(s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
function bioEmoCands(r,l){
  if(l.g==="llamada")return (BIO_EMO_LLAMADA[r.llamada]||["💬"]).concat(BIO_EMO_GEN);
  const n=bioN(l.t),c=[];
  if(l.g==="ciudad")c.push("📍","🌆");
  if(l.g==="pregunta")c.push("❓");
  if(l.g==="quien")r.rasgos.forEach(x=>{if(BIO_EMO_RASGO[x])c.push(BIO_EMO_RASGO[x])});
  if(r.tema==="nutri"&&/receta|cocin|plato|sabor|desayuno|cena\b/.test(n))c.push("🥣");
  BIO_EMO_KW.forEach(k=>{if(k[0].test(n))c.push(k[1])});
  if(l.g==="proyecto")c.push("🌱","🧩");
  if(l.g==="para_quien"||l.g==="para_quien_f")c.push("🌸");
  return c.concat(BIO_EMO_TEMA[r.tema]||[],BIO_EMO_GEN);
}
// un emoji por línea, nunca dos iguales; si no cabe en el límite (contando como Instagram, que cuenta cada emoji por sus dos unidades), se quita el de la línea más larga
// Instagram cuenta cada emoji por dos caracteres, también los que en JavaScript miden uno (☕, ⏰…): se cuenta así para no pasarse nunca
const bioLen=t=>String(t||"").replace(/\p{Extended_Pictographic}/gu,"..").length;
const bioTieneEmo=t=>/\p{Extended_Pictographic}/u.test(String(t||""));
const bioSinEmo=t=>String(t||"").replace(/[\p{Extended_Pictographic}\uFE0F\u200D]/gu,"").replace(/[ \t]+/g," ").replace(/ ?\n ?/g,"\n").replace(/^ +| +$/gm,"").trim();
function bioConEmo(sin){ // la versión con emojis de un texto ya hecho (bios guardadas antes de que se guardasen las dos)
  const L=String(sin||"").split("\n").map((t,i,a)=>({g:i===a.length-1&&a.length>1?"llamada":"",t:t}));
  return bioEmoAplica(PIG.a||bioSane(null),L,BIO_MAX);
}
function bioEmoAplica(r,lins,max){
  const used=[],L=lins.map(l=>{const c=bioEmoCands(r,l);let e="";for(let i=0;i<c.length;i++)if(used.indexOf(c[i])<0){e=c[i];break}used.push(e);return {e:e,t:l.t}});
  const join=()=>L.map(x=>x.e?x.e+" "+x.t:x.t).join("\n");
  let t=join();
  while(bioLen(t)>max){let k=-1;L.forEach((x,i)=>{if(x.e&&(k<0||x.t.length>L[k].t.length))k=i});if(k<0)break;L[k].e="";t=join()}
  return t;
}

// ----- versión para TikTok: 80 caracteres, dos líneas (quién soy + una llamada corta), solo parejas que caben enteras -----
const BIO_TT_MAX=80;
function bioSent(t){
  const out=[];
  bioN(t).split("\n").forEach(l=>l.replace(/([.?!:])\s+/g,"$1\u0000").split("\u0000").forEach(x=>{x=x.replace(/[^a-z0-9_ ]/g,"").trim();if(x)out.push(x)}));
  return out;
}
function bioTTPares(r){
  const sub=x=>x.split("{PALABRA}").join(r.palabra||""),quien=bioVar("quien",r),out=[];
  DB.bio.tiktok.llamada[r.llamada][r.tono].map(sub).concat(bioVar("llamada",r)).forEach(c=>quien.forEach(q=>{
    const t=q+"\n"+c;
    if(t.length<=BIO_TT_MAX&&out.indexOf(t)<0){const s=bioSent(t);if(new Set(s).size===s.length)out.push(t)}}));
  return out;
}
function bioTT(r,v,emo){
  const P=bioTTPares(r);if(!P.length)return "";
  let pool=P;
  if(emo){const f=P.filter(t=>t.length+6<=BIO_TT_MAX);if(f.length>=2)pool=f}
  const t=pool[v%pool.length];
  return emo?bioEmoAplica(r,t.split("\n").map((x,i)=>({g:i?"llamada":"quien",t:x})),BIO_TT_MAX):t;
}
const bioNom=()=>(PIG.a.nombre||"").trim()||"Tu nombre";

// ----- maqueta del perfil: un perfil de Instagram (o de TikTok) dibujado con HTML y CSS, con los datos de la usuaria -----
// Es una maqueta propia: sin logotipos, sin nombres de marca ni capturas. Se ve en claro, dentro de un marco de móvil.
const bioCnt=(t,m)=>'<span class="bio-cnt">'+bioLen(t)+' de '+(m||BIO_MAX)+'</span>';
const BIO_CAT={piel:"Cuidado de la piel",maquillaje:"Maquillaje",pelo:"Cuidado del pelo",nutri:"Recetas y nutrición",perfumes:"Perfumes y regalos",todo:"Belleza y bienestar",dia:"Creadora de contenido",redes:"Creadora de contenido",familia:"Familia y día a día",edad:"Creadora de contenido"};
const BIO_TIPOS=["cafe_taza","lavabo_botes","regalo_caja","ventana_luz","productos_fila","comida_cocina","mesa_trabajo","calendario_pared"]; // fotos de ejemplo de objetos, sin caras
const BIO_NUM={ig:[["36","Publicaciones"],["842","Seguidores"],["295","Seguidos"]],tt:[["128","Siguiendo"],["842","Seguidores"],["3.402","Me gusta"]]};
const BIO_ENLACE="tu-enlace.es/hola";
const bioIni=n=>{const m=String(n||"").match(/\p{L}/u);return m?m[0].toUpperCase():""};
// los datos de la maqueta salen de las respuestas: el nombre de perfil es el primero que propone la pantalla, las destacadas son las de «Tus destacadas»
function bioModelo(){
  const B=DB.bio,a=PIG.a,nom=bioNom(),tema=a&&a.tema,propuesto=(B.nombres[tema]||[])[0];
  const slug=bioN(a.nombre||"").replace(/[^a-z0-9]+/g,".").replace(/^\.+|\.+$/g,"").slice(0,20)||"tu.nombre";
  return {nom:nom,ini:bioIni(a.nombre),perfil:propuesto?propuesto.split("{Nombre}").join(nom):nom,usuario:slug,cat:BIO_CAT[tema]||"",
    dest:(B.destacadas[a.quien]||B.destacadas.ambas).slice(0,4).map(d=>d.n)};
}
function bioMiniaturas(i,n){
  const C=(DB.fotos||{}).cats||{},T=BIO_TIPOS.filter(t=>C[t]);let h="";
  for(let j=0;j<n;j++){const t=T.length?T[(i+j)%T.length]:"";h+='<span class="pm-th"'+(t?' data-ft="'+t+'" data-fh="'+((i*5+j*3)%C[t])+'"':'')+'></span>'}
  return h;
}
function bioMock(txt,red,i){
  const M=bioModelo(),tt=red==="tt",N=BIO_NUM[tt?"tt":"ig"];
  const av='<span class="pm-av'+(M.ini?'':' pm-av0')+'" aria-hidden="true">'+(M.ini?esc(M.ini):'')+'</span>';
  const sts='<div class="pm-sts">'+N.map(x=>'<span><b>'+x[0]+'</b><small>'+x[1]+'</small></span>').join("")+'</div>';
  const bio='<p class="bio-tx pm-bio">'+esc(txt).replace(/\n/g,"<br>")+'</p><p class="pm-lnk">'+BIO_ENLACE+'</p>';
  let h;
  if(tt){
    h='<div class="pm pm-tt"><div class="pm-top"><b class="pm-hd">'+esc(M.nom)+'</b></div>'+av+'<p class="pm-nm">@'+esc(M.usuario)+'</p>'+sts
     +'<div class="pm-bt" aria-hidden="true"><span class="pm-pri">Seguir</span><span>Mensaje</span></div>'+bio
     +'<div class="pm-tb" aria-hidden="true"><i class="on"></i><i></i><i></i></div><div class="pm-gr">'+bioMiniaturas(i||0,6)+'</div></div>';
  }else{
    h='<div class="pm pm-ig"><div class="pm-top"><b class="pm-hd">'+esc(M.usuario)+'</b><span class="pm-mn" aria-hidden="true"><i></i><i></i><i></i></span></div>'
     +'<div class="pm-row">'+av+sts+'</div><p class="pm-nm">'+esc(M.perfil)+'</p>'+(M.cat?'<p class="pm-cat">'+esc(M.cat)+'</p>':'')+bio
     +'<div class="pm-bt" aria-hidden="true"><span>Seguir</span><span>Mensaje</span></div>'
     +'<div class="pm-hl">'+M.dest.map(d=>'<span class="pm-h"><i aria-hidden="true">'+esc(bioIni(d))+'</i><small>'+esc(d)+'</small></span>').join("")+'</div>'
     +'<div class="pm-tb" aria-hidden="true"><i class="on"></i><i></i></div><div class="pm-gr">'+bioMiniaturas(i||0,6)+'</div></div>';
  }
  return '<div class="pm-w"><div class="pm-fr" role="group" aria-label="Así se vería tu perfil de '+(tt?'TikTok':'Instagram')+'">'+h+'</div></div>';
}
const bioBtnImg='<button type="button" class="mini" data-bk="img">Guardar imagen</button>';
function bioCards(){
  const S=bioSeis(PIG.a),n=S.length,c=Math.min(Math.max(PIG.ci|0,0),n-1);
  return '<div class="bio-car"><button type="button" class="bio-ar" data-bk="sl" data-bv="-1" aria-label="Opción anterior">&#8249;</button>'
   +'<p class="bio-cl" aria-live="polite"><b id="bio_cl">Opción '+S[c].l+'</b><span id="bio_cn">'+(c+1)+' de '+n+' · desliza para ver más</span></p>'
   +'<button type="button" class="bio-ar" data-bk="sl" data-bv="1" aria-label="Opción siguiente">&#8250;</button></div>'
   +'<div class="bio-dots" id="bio_dots" aria-hidden="true">'+S.map((b,i)=>'<i'+(i===c?' class="on"':'')+'></i>').join("")+'</div>'
   +'<div class="bio-trk" id="bio_tr">'+S.map((b,i)=>'<article class="bio-card" aria-label="Opción '+b.l+'"><span class="bio-lt bio-sr">Opción '+b.l+'</span>'+bioMock(b.txt,"ig",i)+'<div class="bio-ft">'+bioCnt(b.txt)+'</div>'+(b.con===b.sin?'<p class="note bio-sne">Esta opción es tan larga que con emojis pasaría de 150: sale igual en las dos versiones.</p>':'')
   +'<div class="acts"><button type="button" class="mini" data-copy="'+esc(b.txt)+'">Copiar</button><button type="button" class="mini" data-bk="otra" data-bi="'+i+'">Otra versión</button><button type="button" class="mini bio-pri" data-bk="mia" data-bi="'+i+'">Esta es la mía</button>'+bioBtnImg+'</div></article>').join("")+'</div>';
}
function bioChosen(){
  const t=bioOkTxt(),i=Math.max(0,"ABCDEF".indexOf(PIG.ok.est||"A"));
  return '<section class="panel bio-ok"><h2>Tu bio</h2>'+(PIG.edit?'':bioEmoSw())+bioMock(t,"ig",i)+'<div class="bio-ft">'+bioCnt(t)+'</div><div class="acts"><button type="button" class="mini" data-copy="'+esc(t)+'">Copiar</button>'+bioBtnImg
   +(PIG.edit?'':'<button type="button" class="mini" data-bk="cambiar">Cambiar mis respuestas</button>')+'</div>'
   +(PIG.edit?'<p class="note">Seguirá siendo tu bio hasta que elijas otra.</p>':'')+'</section>';
}
function bioForm(){
  const a=PIG.a;
  const opt=(n,v,l,on)=>'<button type="button" class="chip bio-o'+(on?" on":"")+'" data-bk="q" data-bn="'+n+'" data-bv="'+esc(v)+'" aria-pressed="'+(on?"true":"false")+'">'+esc(l)+'</button>';
  const Q=(n,t,sub,body)=>'<div class="bio-q" role="group" aria-labelledby="bq'+n+'"><h4 id="bq'+n+'"><span class="bio-n">'+n+'</span>'+t+'</h4>'+(sub?'<p class="mut">'+sub+'</p>':'')+body+'</div>';
  const grp=(n,L,val)=>'<div class="bio-opts">'+L.map(x=>opt(n,x[0],x[1],x[0]===val)).join("")+'</div>';
  const T=bioTemas(a.quien);
  let h='<section class="panel bio-form"><h3>Preguntas para tu bio</h3><p class="lead">Contesta con calma. Las dos últimas son opcionales. Al final te preparo seis bios para que elijas la que más se parezca a ti.'+(PIG.red==="tt"?' Tu bio de TikTok sale en la pestaña «TikTok» del resultado.':'')+'</p>';
  h+=Q(1,"¿Para quién publicas?","",grp("quien",BIO_QUIEN,a.quien));
  h+=Q(2,"¿De qué hablas más?",a.quien?"":"Primero dime para quién publicas.",a.quien?grp("tema",T,a.tema):"");
  h+=Q(3,"¿Qué te define?","Elige hasta dos.",'<div class="bio-opts">'+BIO_RASGOS.map(x=>opt("rasgo",x[0],x[1],a.rasgos.indexOf(x[0])>=0)).join("")+'</div>');
  h+=Q(4,"¿Cómo hablas?","",grp("tono",BIO_TONOS,a.tono));
  let q5=grp("llamada",BIO_LLAMADAS,a.llamada);
  if(a.llamada==="palabra"){
    const W=(DB.bio.palabras[a.tema]||[]);
    q5+='<div class="bio-pal">'+(W.length?'<p class="mut">Te propongo estas. Pulsa una o escribe la tuya.</p><div class="bio-opts">'+W.map(w=>'<button type="button" class="chip bio-o'+(w===a.palabra?" on":"")+'" data-bk="pal" data-bv="'+esc(w)+'" aria-pressed="'+(w===a.palabra?"true":"false")+'">'+esc(w)+'</button>').join("")+'</div>':'<p class="mut">Elige antes de qué hablas y te propongo palabras. También puedes escribir la tuya.</p>')
     +'<label>Tu palabra<input id="bio_pal" type="text" maxlength="'+BIO_PAL_MAX+'" autocomplete="off" autocapitalize="characters" spellcheck="false" value="'+esc(a.palabra)+'" placeholder="Una sola palabra"><small>En mayúsculas y de '+BIO_PAL_MAX+' letras como máximo.</small></label></div>';
  }
  h+=Q(5,"¿Qué quieres que hagan al llegar a tu perfil?","",q5)+'<div class="bio-gow">'+bioGoHtml()+'</div>';
  h+=Q(6,"¿De qué zona eres?","Es opcional y solo sale en la bio de Instagram. La gente pone su provincia o su zona, no su pueblo: busca la tuya y tócala, o escribe lo que prefieras.",'<label class="bio-ciu"><input id="bio_ciu" aria-label="Tu zona: provincia, isla o ciudad autónoma" type="text" enterkeyhint="search" maxlength="'+(BIO_CIU_MAX+4)+'" autocomplete="off" autocapitalize="words" value="'+esc(a.ciudad)+'" placeholder="Por ejemplo, Sevilla"></label><div id="bz_box" class="bz-box">'+bioZonaHtml()+'</div><div class="bio-opts"><button type="button" class="chip bio-o'+(a.sinc?" on":"")+'" data-bk="sinc" aria-pressed="'+(a.sinc?"true":"false")+'">Prefiero no ponerlo</button></div><small class="mut" id="bio_ciuw" role="status"></small>');
  h+='<div class="bio-q"><label>Tu nombre (opcional)<input id="bio_nom" type="text" maxlength="'+BIO_NOM_MAX+'" autocomplete="given-name" value="'+esc(a.nombre)+'" placeholder="Por ejemplo, Laura"><small>Sirve para el nombre del perfil.</small></label></div><div class="bio-gow">'+bioGoHtml()+'</div>';
  return h+'</section>';
}
// ----- publicación de presentación (banco: content/presentacion.json, DB.presentacion) -----
// Mismo sistema que las bios: las respuestas de arriba eligen las frases, y cada tarjeta tiene su «Otra versión» (PIG.pv).
// El montaje es el mismo que hace comprobar_presentacion.py (montar), que revisa todas las combinaciones al construir la app.
function prePiezas(r){
  const P=DB.presentacion,t=r.tono,tema=r.tema,nom=String(r.nombre||"").trim(),con=nom?"con":"sin",proy=r.quien!=="clientas";
  const sub=L=>L.map(x=>x.split("{Nombre}").join(nom).split("{PALABRA}").join(r.palabra||""));
  const rs=r.rasgos.filter(x=>x!=="nada"),k2=rs[0]||"nada";
  let t2;
  if(rs.length>=2){const p1=P.s2.pred[rs[0]],p2=P.s2.pred[rs[1]];t2=P.s2.pares[t].map(f=>f.split("{P1}").join(p1.charAt(0).toUpperCase()+p1.slice(1)).split("{p2}").join(p2))}
  else t2=P.s2.texto[k2][t];
  const t5=[[sub(P.s5.texto[r.llamada][t]),0]];
  if(proy)t5.push([P.s5.proyecto[t],1]);
  const d=[[sub(P.desc.apertura[con][t]),0],[P.desc.habla[tema],1]];
  if(r.quien==="ambas")d.push([P.desc.proyecto[t],2]);
  d.push([P.desc.pregunta[tema][t],3]);
  return {f:[
    {t:[[sub(P.s1[con][t]),0]],f:P.s1.foto[t]},
    {t:[[t2,0]],f:P.s2.foto[k2]},
    {t:[[P.s3[t].map(x=>x.t),0]],f:P.s3[t]},
    {t:[[P.s4.texto[tema][t],0]],f:P.s4.foto[tema]},
    {t:t5,f:P.s5.foto[r.llamada]}
  ],d:d};
}
const preEl=(L,v,o)=>L[(v+o)%L.length];
function preMontar(r,vs){
  const z=prePiezas(r);
  return {fotos:z.f.map((f,i)=>{const x=preEl(f.f,vs[i],0);return {txt:f.t.map(y=>preEl(y[0],vs[i],y[1])).join(" "),foto:x.f,tipo:x.p}}),
    desc:z.d.map(y=>preEl(y[0],vs[5],y[1])).join(" ")};
}
// la foto de ejemplo se elige con un hash de «qué foto poner» (la misma frase enseña siempre la misma foto); FOTOS la pone al verse
function preAttrs(tipo,q){
  const C=(DB.fotos||{}).cats||{},r=typeof FOTOS!=="undefined"?FOTOS.real(tipo):"";
  return r&&C[r]?' data-ft="'+esc(r)+'" data-fh="'+(hash(String(q))%C[r])+'"':"";
}
const preCnt=(t,m)=>'<span class="bio-cnt">'+t.length+' de '+m+'</span>';
function preCard(f,i){
  const P=DB.presentacion,pa=preAttrs(f.tipo,f.foto);
  return '<article class="pr-card" aria-label="Foto '+(i+1)+' de 5">'
   +'<div class="pr-hd"><span class="pr-n">Foto '+(i+1)+' de 5</span><b>'+esc(P.fijos.propositos[i])+'</b></div>'
   +'<div class="pr-bd'+(pa?'':' pr-sf')+'"><div class="pr-tx"><p class="pr-k">Qué foto poner</p><p class="pr-foto">'+esc(f.foto)+'</p>'
   +'<p class="pr-k">Qué escribir encima</p><p class="pr-txt">'+esc(f.txt)+'</p>'+preCnt(f.txt,PRE_MAX.texto)+'</div>'
   +(pa?'<div class="pr-pv"'+pa+' role="img" aria-label="Vista previa de la foto '+(i+1)+' con su frase encima"><span class="pr-pt"><span>'+esc(f.txt)+'</span></span></div>':'')+'</div>'
   +'<div class="acts"><button type="button" class="mini" data-copy="'+esc(f.txt)+'">Copiar la frase</button><button type="button" class="mini" data-bk="pre" data-bi="'+i+'">Otra versión</button></div></article>';
}
function preDesc(txt){
  return '<article class="pr-card pr-desc" aria-label="Descripción para copiar"><div class="pr-hd"><span class="pr-n">Descripción</span><b>Para pegar al publicar</b></div>'
   +'<p class="pr-dt">'+esc(txt)+'</p>'+preCnt(txt,PRE_MAX.desc)
   +'<div class="acts"><button type="button" class="mini" data-copy="'+esc(txt)+'">Copiar la descripción</button><button type="button" class="mini" data-bk="pre" data-bi="5">Otra versión</button></div></article>';
}
function preCards(){
  const m=preMontar(PIG.a,PIG.pv);
  return m.fotos.map(preCard).join("")+preDesc(m.desc);
}
function preBlock(){
  const P=DB.presentacion,F=P.fijos;
  return '<section class="panel pr-panel" id="pr_blk"><h3>Tu publicación de presentación</h3><p class="lead">'+esc(F.explica[0])+'</p><p class="mut">'+esc(F.explica[1])+'</p><div id="pr_out">'+preCards()+'</div></section>'
   +'<details class="rdet"><summary>Cómo se publica y se fija</summary><div class="rdb"><ol class="rres">'+F.pasos.map(p=>'<li>'+esc(p)+'</li>').join("")+'</ol><p class="mut">'+esc(F.consejo)+'</p></div></details>';
}
function bioBlocks(){
  const B=DB.bio,a=PIG.a;
  let h='<section class="panel"><h3>El nombre del perfil</h3><p class="mut">'+esc(B.explica_nombre)+'</p>'
   +(a.nombre.trim()?'':'<p class="note">Ahora pone «Tu nombre»: cámbialo por el tuyo.</p>')
   +B.nombres[a.tema].map(n=>{const t=n.split("{Nombre}").join(bioNom());return '<div class="rmsg"><b class="bio-nm">'+esc(t)+'</b><div class="acts"><button type="button" class="mini" data-copy="'+esc(t)+'">Copiar</button><span class="bio-cnt">'+t.length+' de 64</span></div></div>'}).join("")+'</section>';
  if(DB.presentacion)h+=preBlock();
  h+='<section class="panel"><h3>Tus destacadas</h3><p class="mut">Crea estas y colócalas en este orden.</p>'
   +B.destacadas[a.quien].map(d=>'<div class="rmsg"><b class="bio-nm">'+esc(d.n)+'</b> <span class="bio-cnt">'+d.n.length+' de 15</span><p>'+esc(d.q)+'</p></div>').join("")+'</section>';
  h+='<section class="panel"><h3>Tu foto</h3><ul class="rres">'+B.foto.map(f=>'<li><b>'+esc(f.t)+'.</b> '+esc(f.q)+'</li>').join("")+'</ul></section>';
  h+='<details class="rdet"><summary>Cómo se cambia en Instagram</summary><div class="rdb"><ol class="rres">'+B.pasos.map(p=>'<li>'+esc(p)+'</li>').join("")+'</ol></div></details>';
  return h;
}
// interruptores del resultado: Instagram | TikTok (solo mientras elige) y Sin emojis | Con emojis (vale para las dos; sale una sola vez en la pantalla, siempre encima de la maqueta)
const bioSg=(k,v,l,on)=>'<button type="button" class="bio-sg'+(on?" on":"")+'" data-bk="'+k+'" data-bv="'+v+'" aria-pressed="'+(on?"true":"false")+'">'+l+'</button>';
const bioEmoSw=()=>'<div class="bio-ctl bio-ctl1"><div class="bio-seg" role="group" aria-label="Emojis">'+bioSg("emo","0","Sin emojis",!PIG.emo)+bioSg("emo","1","Con emojis",PIG.emo)+'</div></div>'
  +(PIG.emo?'<p class="note">Los emojis cuentan para el límite de caracteres. Si una bio no cabe con ellos, se quita el de la línea más larga.</p>':'');
function bioCtl(tabs,sel,emo){
  if(!tabs&&!emo)return "";
  return '<div class="bio-ctl">'+(tabs?'<div class="bio-seg" role="group" aria-label="Red social">'+bioSg("red","ig","Instagram",sel==="ig")+bioSg("red","tt","TikTok",sel==="tt")+'</div>':'')
   +(emo?'<div class="bio-seg" role="group" aria-label="Emojis">'+bioSg("emo","0","Sin emojis",!PIG.emo)+bioSg("emo","1","Con emojis",PIG.emo)+'</div>':'')+'</div>'
   +(emo&&PIG.emo?'<p class="note">Los emojis cuentan para el límite de caracteres. Si una bio no cabe con ellos, se quita el de la línea más larga.</p>':'');
}
function bioTTCard(){
  const t=bioTT(PIG.a,PIG.tv,PIG.emo);
  return '<article class="bio-tt" aria-label="Bio para TikTok"><span class="bio-lt">Para TikTok</span>'+bioMock(t,"tt",PIG.tv)+'<div class="bio-ft">'+bioCnt(t,BIO_TT_MAX)+'</div>'
   +'<div class="acts"><button type="button" class="mini" data-copy="'+esc(t)+'">Copiar bio</button><button type="button" class="mini" data-bk="tto">Otra versión</button>'+bioBtnImg+'</div>'
   +'<p class="note">'+esc(DB.bio.tiktok.nota)+'</p></article>';
}
function bioResHtml(){
  const a=PIG.a;
  if(!bioDone(a))return "";
  const bios=!PIG.ok||PIG.edit,sel=bios?PIG.red:"tt";
  return '<section class="panel" id="bio_res"><h3>'+(bios&&sel==="ig"?'Tus seis bios':'Tu bio para TikTok')+'</h3><p class="lead">'
   +(sel==="tt"?'Es la misma bio en corto: 80 caracteres y dos líneas como mucho.':'Elige la que más se parezca a ti. Con «Otra versión» cambian las frases y, al pegarla, puedes retocar lo que quieras.')+'</p>'
   +bioCtl(bios,sel,bios)+'<div id="bio_out">'+(sel==="tt"?bioTTCard():bioCards())+'</div></section>'+bioBlocks();
}
// botón «Ya están tus bios · Verlas»: sale en cuanto las respuestas están completas, para no tener que buscarlas más abajo
const bioGoHtml=()=>bioDone(PIG.a)&&(!PIG.ok||PIG.edit)?'<button type="button" class="mini bio-pri bio-go" data-bk="ver">Ya están tus bios · Verlas</button>':"";

// ----- «Revisa tu bio actual»: revisión por reglas de una bio pegada (no se guarda en ningún sitio) -----
const BIO_RE_TEMA=/piel|maquill|\bpelo\b|cabello|receta|nutri|sabor|perfum|regalo|rutina|belleza|\bcuid|truco|consejo|cosmetic|skincare|labios|\bcara\b|esteti|peluquer|proyecto|redes|\bayudo|para ti|para quien|\bhablo de|comparto|encontraras|\bcocin|neceser|look\b/;
const BIO_RE_CTA=/escribeme|\bescribe\b|mandame|\bmanda\b|\bdime\b|\bdm\b|mensaje|escribenos|contactame|contacta|\bpulsa|\btoca\b|pincha|\bmira\b|\bvisita|enlace|\blink\b|destacadas|comenta|sigueme|apuntate|reserva|descubre|whatsapp|pasate|\bentra\b|\bclic\b/;
const BIO_RE_PASA=/\by te\b|\bte (mando|envio|paso|cuento|respondo|contesto|leo|ensen|explico|regalo|preparo|ayudo|digo|cuento)|para que|\by (hablamos|charlamos|seguimos|lo vemos|lo hablamos)|\by veras\b|\by recibes/;
// [expresión sobre el texto sin acentos, qué cambiar]
const BIO_MALAS=[
 [/\b(dinero|ingresos?|sueldos?|cobrar|nomina)\b|\d\s?€|€\s?\d|\beuros?\b/,"Quítala: ni Instagram ni las normas del equipo quieren dinero en la bio. Cuenta lo que haces, no lo que se saca."],
 [/\b(ganar|gana|ganando|ganado|ganancias?|ganan|ganamos|gano)\b/,"Cámbiala por lo que haces o lo que aprendes: «ganar» suena a promesa de dinero."],
 [/\bnegocios?\b/,"Di «proyecto» en lugar de «negocio»: es más cercano y no salta en los filtros de Instagram."],
 [/\boportunidad(es)?\b/,"Cambia «oportunidad» por «proyecto» o cuenta qué haces: «oportunidad» suena a promesa."],
 [/libertad (financiera|economica)/,"Quítala: es una promesa de dinero y Instagram la penaliza."],
 [/\brangos?\b/,"Quítala: los rangos son cosa interna del equipo y no dicen nada a quien llega."],
 [/\bnetworkers?\b|network marketing/,"Cámbiala por algo de calle, como «llevo un proyecto desde el móvil»: «networker» es jerga."],
 [/multi[ -]?nivel|\bmlm\b/,"Quítala: da desconfianza y no hace falta nombrarlo."],
 [/propia\s+jef[ae]/,"Cámbiala por «llevo algo mío»: «tu propia jefa» promete independencia y dinero."],
 [/\b(pesos?|kilos?|kgs?|adelgaz\w*|dietas?)\b/,"Quítala: el peso y las dietas son temas de cuerpo que Instagram vigila. Habla de rutinas, sabor y cuidado."],
 [/antes y despues/,"Quítala: «antes y después» está prohibido en el cuerpo y en la piel. Enseña el paso a paso, no el cambio."],
 [/\b(curar|cura|curas|curo|curan|curamos|curacion)\b/,"Cámbiala por «cuidar»: «curar» suena a medicina."],
 [/\b(tratar|tratamientos?)\b/,"Cámbiala por «cuidar» o «rutina»: «tratar» suena a medicina."],
 [/\b(eliminar|elimino|eliminas|elimina|eliminan|eliminamos|eliminando)\b/,"Cámbiala por «cuidar»: «eliminar» promete un resultado."],
 [/\burgen\w*|ultimas (plazas|unidades)/,"Quítala: no presiones. Invita con calma, por ejemplo «cuando quieras»."],
 [/\bprecios?\b/,"Quítala: los precios no van en la bio; se hablan por mensaje."],
 [/\b(descuentos?|ofertas?|rebajas)\b/,"Quítala: los descuentos y ofertas no van en la bio."]
];
function bioRevisa(txt){
  const orig=String(txt||"").normalize("NFC").trim();
  if(!orig)return null;
  const n=bioN(orig),lineas=orig.split(/\n/).map(x=>x.trim()).filter(Boolean),len=orig.length,C=[];
  const add=(t,ok,f,items)=>C.push({t:t,ok:ok,f:f,items:items||[]});
  // longitud y líneas
  add("Longitud",len<=BIO_MAX&&len>=30,len>BIO_MAX?"Tiene "+len+" caracteres y Instagram admite "+BIO_MAX+": se cortaría lo que sobra.":len<30?"Tiene solo "+len+" caracteres. Cuenta un poco más: quién eres, de qué hablas y qué hacer.":"Tiene "+len+" de "+BIO_MAX+" caracteres: cabe entera.");
  const nl=lineas.length;
  add("Líneas",nl>=2&&nl<=4||(nl===1&&len<=70),nl===1?(len<=70?"Una sola línea corta: vale.":"Todo en una línea se lee como un bloque. Sepárala en dos o tres líneas."):nl>4?"Tiene "+nl+" líneas y cuesta leerla en el móvil. Déjala en tres o cuatro.":"Tiene "+nl+" líneas: se lee de un vistazo.");
  // de qué hablas
  add("De qué hablas",BIO_RE_TEMA.test(n),BIO_RE_TEMA.test(n)?"Se entiende de qué hablas o a quién ayudas.":"No se ve de qué hablas ni a quién ayudas. Dilo en una frase: «Hablo de piel y de rutinas sencillas».");
  // llamada a la acción
  const cta=BIO_RE_CTA.test(n),pasa=BIO_RE_PASA.test(n);
  add("Llamada a la acción",cta&&pasa,!cta?"No dice qué hacer al llegar. Termina con algo como «Escríbeme RUTINA y te cuento».":!pasa?"Dices qué hacer pero no qué pasa después. Añade «y te mando…» o «y te cuento…».":"Dice qué hacer y qué pasa después.");
  // dónde
  const zr=znReconoce(orig);
  add("De dónde eres",!!zr,zr?"Dices dónde estás o a quién atiendes: «"+zr.txt+"»"+(zr.z&&znL(zr.z)!==znL(zr.txt)?" ("+zr.z+")":"")+".":"No dices de dónde eres ni a quién atiendes. Si te sirve, pon tu ciudad o «atiendo en toda España».");
  // palabras a evitar
  const ev=[];
  BIO_MALAS.forEach(m=>{const g=new RegExp(m[0].source,"g");let x;while((x=g.exec(n))){const w=orig.substr(x.index,x[0].length).trim();if(!ev.some(e=>bioN(e.w)===bioN(w)))ev.push({w:w,f:m[1]});if(x[0].length===0)g.lastIndex++}});
  add("Palabras que evitar",!ev.length,ev.length?(ev.length===1?"Hay una palabra que las normas del equipo y las de Instagram piden evitar.":"Hay "+ev.length+" palabras que las normas del equipo y las de Instagram piden evitar."):"No hay ninguna palabra de las que piden evitar las normas.",ev.map(e=>"«"+e.w+"»: "+e.f));
  // estilo
  const est=[];
  const cw=orig.match(/[A-ZÁÉÍÓÚÑ]{3,}/g)||[],let_=(orig.match(/[A-Za-zÁÉÍÓÚÑáéíóúñ]/g)||[]).length,up=(orig.match(/[A-ZÁÉÍÓÚÑ]/g)||[]).length;
  if(cw.length>=3||/[A-ZÁÉÍÓÚÑ]{3,}[^A-Za-zÁÉÍÓÚÑáéíóúñ]{1,3}[A-ZÁÉÍÓÚÑ]{3,}/.test(orig)||(let_>=12&&up/let_>0.4))est.push("Mayúsculas a gritos: una sola palabra clave en mayúsculas está bien, más parecen gritos.");
  let ne=0;try{ne=(orig.match(new RegExp("\\p{Extended_Pictographic}","gu"))||[]).length}catch(e){ne=(orig.match(/[\u2600-\u27bf]|\ud83c[\udc00-\udfff]|\ud83d[\udc00-\udfff]|\ud83e[\udc00-\udfff]/g)||[]).length}
  if(ne>4)est.push("Tiene "+ne+" emojis: con más de cuatro se lee como un adorno y no como una presentación.");
  const ht=(orig.match(/#[A-Za-z0-9_\u00C0-\u024F]+/g)||[]).length;
  if(ht>=3)est.push("Tiene "+ht+" etiquetas seguidas: en la bio no hacen falta; quítalas.");
  if(/(?:\+?\s?34[\s.-]?)?\b[6789](?:[\s.-]?\d){8}\b/.test(orig))est.push("Hay un teléfono escrito: mejor pon el enlace a tu mensaje directo.");
  add("Estilo",!est.length,est.length?"Algo se puede limpiar:":"Sin gritos, sin exceso de emojis, sin etiquetas ni teléfono.",est);
  return C;
}
// lo que se puede deducir de una bio para dejar el cuestionario medio marcado
function bioDeduce(txt){
  const n=bioN(txt),orig=String(txt||""),p={},dich=[];
  const cli=[["piel",/piel|skincare|cutis|crema/],["maquillaje",/maquill|labios|\blook\b/],["pelo",/\bpelo\b|cabello|peluquer/],["nutri",/receta|nutri|cocin|sabor|batido/],["perfumes",/perfum|regalo|fragancia/]];
  let tc="";cli.forEach(c=>{if(!tc&&c[1].test(n))tc=c[0]});
  const proy=/proyecto|negocio|equipo|emprend|distribuidora|networker|multinivel/.test(n);
  if(proy&&tc)p.quien="ambas";else if(proy)p.quien="proyecto";else if(tc||/belleza|cuid/.test(n))p.quien="clientas";
  if(p.quien){
    if(p.quien==="proyecto"){p.tema=/redes|instagram|tiktok|reels/.test(n)?"redes":/familia|hij|madre|mama/.test(n)?"familia":/\d\d anos|cuarent|edad/.test(n)?"edad":"dia"}
    else p.tema=tc||"todo";
    dich.push(p.quien==="clientas"?"para clientas":p.quien==="proyecto"?"para tu proyecto":"para las dos cosas");
  }
  const R=[];
  if(/madre|mama\b|hij[oa]s?\b/.test(n))R.push("madre");
  if(/cuarent|\b4\d\b/.test(n))R.push("cuarenta");else if(/veinti/.test(n))R.push("veinte");
  if(/deporte|running|gimnasio|yoga|\bgym\b|entreno/.test(n))R.push("deporte");
  if(/pueblo/.test(n))R.push("pueblo");
  if(/peluquer|esteti|maquilladora/.test(n))R.push("belleza");
  const rs=bioRasgos(R);if(rs.length)p.rasgos=rs;
  const pal=orig.match(/(?:[Ee]scr[ií]beme|[Mm][aá]ndame|[Dd]ime|[Ee]scribe|[Cc]omenta)\s+[«"'“]?([A-ZÁÉÍÓÚÑ]{2,12})\b/);
  if(pal){p.llamada="palabra";p.palabra=pal[1]}
  else if(/destacadas/.test(n))p.llamada="destacadas";
  const zr=znReconoce(orig);
  if(zr&&zr.t!=="at"){const c=bioCiu(zr.t==="ab"?zr.z:zr.txt);if(c)p.ciudad=c}
  else if(/mensaje|\bdm\b|escribeme|mandame/.test(n))p.llamada="mensaje";
  return p;
}
function bioRevOut(txt){
  const C=bioRevisa(txt);
  if(!C)return '<p class="note">Pega primero tu bio y vuelve a pulsar «Revisar».</p>';
  const nb=C.filter(c=>c.ok).length;
  return '<div class="bio-rvout" aria-live="polite"><p class="lead">'+nb+' de '+C.length+' comprobaciones, bien.</p><ul class="bio-ck">'
   +C.map(c=>'<li class="bio-ckl '+(c.ok?"bio-ckb":"bio-ckm")+'"><div class="bio-ckh"><b>'+esc(c.t)+'</b><span class="bio-st">'+(c.ok?"Bien":"Mejorable")+'</span></div><p>'+esc(c.f)+'</p>'
    +(c.items.length?'<ul class="rres">'+c.items.map(i=>'<li>'+esc(i)+'</li>').join("")+'</ul>':'')+'</li>').join("")+'</ul>'
   +'<div class="acts bio-rvacts"><button type="button" class="mini bio-pri" data-bk="rvnew">Hazme una nueva con lo que ya dice</button><button type="button" class="mini" data-bk="rvkeep">Quedarme con la mía</button></div></div>';
}
function bioRevHtml(){
  const R=PIG.rv;
  if(!R)return '<h3>Revisa tu bio actual</h3><p class="mut">¿Ya tienes una? Pégala y te digo qué está bien y qué se puede mejorar. Lo que pegues no se guarda en ningún sitio.</p><div class="acts"><button type="button" class="mini bio-pri" data-bk="rvab">Revisar mi bio</button></div>';
  return '<h3>Revisa tu bio actual</h3><label for="bio_rvt">Pega aquí tu bio de ahora<textarea id="bio_rvt" rows="5" maxlength="600" autocomplete="off" spellcheck="false" placeholder="Pega aquí tu bio">'+esc(R.txt)+'</textarea></label>'
   +'<div class="acts"><button type="button" class="mini bio-pri" data-bk="rvgo">Revisar</button><button type="button" class="mini" data-bk="rvx">Cerrar</button></div>'+(R.go?bioRevOut(R.txt):"");
}
function bioMas(){
  const P=DB.perfil||{},det=(t,body)=>'<details class="rdet"><summary>'+t+'</summary><div class="rdb">'+body+'</div></details>';
  return det("Publicaciones fijadas ("+(P.fijados||[]).length+")",(P.fijados||[]).map(d=>'<div class="rmsg"><b>'+esc(d.que)+'</b><p>'+esc(d.por_que)+'</p></div>').join(""))
   +det("Errores comunes ("+(P.errores||[]).length+")",(P.errores||[]).map(d=>'<div class="rmsg"><p class="rerr">'+esc(d.error)+'</p><p><b>Mejor así:</b> '+esc(d.arreglo)+'</p></div>').join(""));
}
function viewPerfilIG(){
  bioInit();
  let h="";
  if(PIG.ok)h+='<div id="bio_okbox">'+bioChosen()+'</div>';
  else h+='<section class="panel"><h2>Tu bio de Instagram</h2><p class="lead">Tu bio es lo primero que lee quien llega por un reel. Tiene que decir quién eres, de qué hablas y qué hacer ahora, en 150 caracteres.</p></section>';
  h+='<section class="panel bio-rv" id="bio_rv">'+bioRevHtml()+'</section>';
  if(!PIG.ok||PIG.edit)h+=bioForm();
  setTimeout(bioPos,0); // la maqueta que se estaba viendo vuelve a su sitio
  return h+'<div id="bio_resbox">'+bioResHtml()+'</div>'+bioMas();
}

// ----- eventos -----
function bioRefresh(){
  const b=document.getElementById("bio_resbox");if(b)b.innerHTML=bioResHtml();
  const k=document.getElementById("bio_okbox");if(k&&PIG.ok)k.innerHTML=bioChosen();
  document.querySelectorAll(".bio-gow").forEach(g=>{g.innerHTML=bioGoHtml()});
  bioPos();if(typeof FOTOS!=="undefined")FOTOS.scan();
}
// ----- carrusel de las seis opciones: se desliza con el dedo (scroll-snap) o con las flechas; PIG.ci es la opción que se ve -----
const bioTr=()=>document.getElementById("bio_tr");
function bioPos(){
  const t=bioTr();if(!t||!t.clientWidth)return;
  t.style.scrollBehavior="auto";t.scrollLeft=PIG.ci*t.clientWidth;t.style.scrollBehavior="";
  bioCar();
}
function bioCar(){
  const l=document.getElementById("bio_cl"),n=document.getElementById("bio_cn"),d=document.getElementById("bio_dots");if(!l)return;
  l.textContent="Opción "+"ABCDEF".charAt(PIG.ci);n.textContent=(PIG.ci+1)+" de 6 · desliza para ver más";
  if(d)Array.prototype.forEach.call(d.children,(x,i)=>x.classList.toggle("on",i===PIG.ci));
}
function bioIr(i){
  const t=bioTr();if(!t)return;
  i=(i+6)%6;PIG.ci=i;bioCar();
  try{t.scrollTo({left:i*t.clientWidth,behavior:"smooth"})}catch(e){t.scrollLeft=i*t.clientWidth}
}
let bioTm=0;
document.addEventListener("scroll",e=>{ // cuando la maqueta se para (no mientras se desliza, para no pisar el salto de las flechas) se apunta cuál se ve
  const t=e.target;if(!t||t.id!=="bio_tr"||!t.clientWidth)return;
  clearTimeout(bioTm);
  bioTm=setTimeout(()=>{const i=Math.min(5,Math.max(0,Math.round(t.scrollLeft/t.clientWidth)));if(i!==PIG.ci){PIG.ci=i;bioCar()}},80);
},true);
// ----- «Guardar imagen»: la maqueta se dibuja en un canvas (sin librerías) y se comparte o se descarga como PNG -----
const BIO_FUENTE='-apple-system,"Segoe UI",Roboto,Helvetica,Arial,"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
function bioLineasCv(c,t,w){
  const out=[];
  String(t).split("\n").forEach(par=>{let l="";par.split(" ").forEach(p=>{const k=l?l+" "+p:p;if(l&&c.measureText(k).width>w){out.push(l);l=p}else l=k});out.push(l)});
  return out;
}
function bioRR(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
// dibuja la maqueta en unidades de 360 de ancho; con «seco» solo mide (devuelve el alto)
function bioDibuja(c,tt,txt,M,imgs,seco){
  const W=360,m=16,x0=m+3,pw=W-2*m-6,pad=12,cw=pw-2*pad,L=x0+pad,F=n=>n+"px "+BIO_FUENTE;
  const INK="#262626",GR="#737373",LK="#0b4f9c";
  let y=m+3;
  const fin=()=>y;
  const t=(s,x,yy,font,col,al)=>{c.font=font;c.fillStyle=col;c.textAlign=al||"left";c.textBaseline="alphabetic";if(!seco)c.fillText(s,x,yy)};
  // barra de arriba
  y+=24;
  if(tt){t(M.nom,W/2,y,"700 15px "+BIO_FUENTE,INK,"center")}
  else{t(M.usuario,L,y,"700 17px "+BIO_FUENTE,INK);if(!seco){c.fillStyle=INK;for(let k=0;k<3;k++)c.fillRect(x0+pw-pad-18,y-14+k*6,18,2.4)}}
  y+=14;
  const num=BIO_NUM[tt?"tt":"ig"];
  const av=(cx,cy,r)=>{if(seco)return;c.beginPath();c.arc(cx,cy,r+3,0,7);c.fillStyle="#fff";c.fill();c.beginPath();c.arc(cx,cy,r+3,0,7);c.strokeStyle="#D9C7A8";c.lineWidth=1.6;c.stroke();
    const g=c.createLinearGradient(cx-r,cy-r,cx+r,cy+r);g.addColorStop(0,"#8a7262");g.addColorStop(1,"#614a3e");c.beginPath();c.arc(cx,cy,r,0,7);c.fillStyle=g;c.fill();
    c.fillStyle="#EBDDC5";
    if(M.ini){c.font="700 "+Math.round(r*.95)+"px "+BIO_FUENTE;c.textAlign="center";c.textBaseline="middle";c.fillText(M.ini,cx,cy+1)}
    else{c.beginPath();c.arc(cx,cy-r*.2,r*.3,0,7);c.fill();c.beginPath();c.ellipse(cx,cy+r*.85,r*.62,r*.5,0,Math.PI,0);c.fill()}};
  const stats=(xa,xb,yy)=>{
    c.font="700 16px "+BIO_FUENTE;const wn=num.map(n=>c.measureText(n[0]).width);
    c.font="13px "+BIO_FUENTE;const wl=num.map(n=>c.measureText(n[1]).width),ww=num.map((n,i)=>Math.max(wn[i],wl[i])),tot=ww.reduce((a,b)=>a+b,0),gap=Math.max(2,(xb-xa-tot)/(num.length-1));
    let x=xa;num.forEach((n,i)=>{const cx=x+ww[i]/2;t(n[0],cx,yy,"700 16px "+BIO_FUENTE,INK,"center");t(n[1],cx,yy+17,"13px "+BIO_FUENTE,tt?GR:INK,"center");x+=ww[i]+gap});
  };
  const btn=(x,yy,w,h,s,pri)=>{if(!seco){bioRR(c,x,yy,w,h,8);c.fillStyle=pri?"#614a3e":"#efefef";c.fill()}t(s,x+w/2,yy+h/2+5,"700 13px "+BIO_FUENTE,pri?"#EBDDC5":INK,"center")};
  const bio=(al)=>{
    c.font=F(14);const ls=bioLineasCv(c,txt,cw);
    ls.forEach(l=>{t(l,al==="center"?W/2:L,y,F(14),INK,al);y+=19});
    y+=3;t(BIO_ENLACE,al==="center"?W/2:L,y,"600 14px "+BIO_FUENTE,LK,al);y+=12;
  };
  const pest=yy=>{ // fila de pestañas de la cuadrícula: raya, marca de la activa y dos iconos
    if(seco)return;
    c.fillStyle="#dbdbdb";c.fillRect(x0,yy,pw,1);c.fillStyle=INK;c.fillRect(x0,yy,tt?pw/3:pw/2,2);
    const n=tt?3:2;for(let k=0;k<n;k++){c.lineWidth=2;c.strokeStyle=k?"#8e8e8e":INK;c.strokeRect(x0+pw/n*k+pw/n/2-6,yy+11,12,12)}
  };
  const th=(x,yy,w,h,k)=>{
    if(seco)return;
    const el=imgs[k],tonos=["#d9c7a8","#c7b08f","#e3d3b8","#b9a08c","#ceb99b","#dccdb4"];
    c.save();c.beginPath();c.rect(x,yy,w,h);c.clip();
    if(el&&el.complete&&el.naturalWidth){const r=Math.max(w/el.naturalWidth,h/el.naturalHeight),dw=el.naturalWidth*r,dh=el.naturalHeight*r;c.drawImage(el,x+(w-dw)/2,yy+(h-dh)/2,dw,dh)}
    else{c.fillStyle=tonos[k%6];c.fillRect(x,yy,w,h)}
    c.restore();
  };
  if(tt){
    y+=6;av(W/2,y+42,42);y+=106;
    t("@"+M.usuario,W/2,y,"700 16px "+BIO_FUENTE,INK,"center");y+=28;
    stats(L+26,L+cw-26,y);y+=34;
    const bw=(cw-70)/2;btn(L+16,y,bw+20,34,"Seguir",true);btn(L+16+bw+28,y,bw+6,34,"Mensaje",false);y+=34+14;
    y+=10;bio("center");y+=6;
    pest(y);y+=34;
  }else{
    y+=8;av(L+33,y+33,30);stats(L+72,L+cw,y+26);y+=92;
    c.font="700 14px "+BIO_FUENTE;bioLineasCv(c,M.perfil,cw).forEach(l=>{t(l,L,y,"700 14px "+BIO_FUENTE,INK);y+=19});
    if(M.cat){t(M.cat,L,y,F(13),GR);y+=19}
    y+=1;bio("left");
    const bw=(cw-8)/2;btn(L,y,bw,32,"Seguir",false);btn(L+bw+8,y,bw,32,"Mensaje",false);y+=32+14;
    const hw=cw/4;
    M.dest.forEach((d,i)=>{
      const cx=L+hw*i+hw/2;
      if(!seco){c.beginPath();c.arc(cx,y+29,29,0,7);c.fillStyle="#fff";c.fill();c.strokeStyle="#D9C7A8";c.lineWidth=1.6;c.stroke();
        c.beginPath();c.arc(cx,y+29,25,0,7);c.fillStyle="#EBDDC5";c.fill();c.fillStyle="#614a3e";c.font="700 20px "+BIO_FUENTE;c.textAlign="center";c.textBaseline="middle";c.fillText(bioIni(d),cx,y+30)}
      c.font=F(13);bioLineasCv(c,d,hw-4).slice(0,2).forEach((l,k)=>t(l,cx,y+29+29+16+k*15,F(13),INK,"center"));
    });
    y+=29+29+16+15+10;
    pest(y);y+=34;
  }
  // cuadrícula: dos filas de tres, la segunda cortada como en una pantalla de móvil
  const g=2,s=(pw-2*g)/3,hh=tt?s*4/3:s;
  for(let k=0;k<6;k++){const col=k%3,fila=k>=3?1:0;th(x0+col*(s+g),y+g+fila*(hh+g),s,fila?hh*.45:hh,k)}
  y+=g+hh+g+hh*.45;
  return y;
}
async function bioGuardaImg(btn){
  const box=btn.closest("article,section"),pm=box&&box.querySelector(".pm"),cp=box&&box.querySelector("[data-copy]");
  if(!pm||!cp){toast("No se pudo guardar la imagen");return}
  const tt=pm.classList.contains("pm-tt"),txt=cp.dataset.copy,M=bioModelo(),L=[];
  pm.querySelectorAll(".pm-th").forEach(e=>L.push(e.querySelector("img.c2ph")));
  const K=3,W=360,c0=document.createElement("canvas").getContext("2d");
  const H=Math.ceil(bioDibuja(c0,tt,txt,M,L,true))+16;
  const cv=document.createElement("canvas");cv.width=W*K;cv.height=H*K;
  const c=cv.getContext("2d");c.scale(K,K);
  c.fillStyle="#EBDDC5";c.fillRect(0,0,W,H);
  c.save();bioRR(c,16,16,W-32,H-32,26);c.fillStyle="#fff";c.fill();c.lineWidth=3;c.strokeStyle="#614a3e";c.stroke();c.clip();
  bioDibuja(c,tt,txt,M,L,false);
  c.restore();
  const blob=await new Promise(ok=>cv.toBlob(ok,"image/png"));
  if(!blob){toast("No se pudo guardar la imagen");return}
  const nombre="fam-studio-mi-perfil-"+(tt?"tiktok":"instagram")+".png";
  const f=new File([blob],nombre,{type:"image/png"});
  try{if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f]});return}}
  catch(e){if(e&&e.name==="AbortError")return}
  const u=URL.createObjectURL(blob),a=document.createElement("a");a.href=u;a.download=nombre;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);
  toast("Imagen guardada");
}
function bioSet(n,v){
  const a=PIG.a;
  if(n==="quien"){a.quien=v;if(!bioHas(bioTemas(v),a.tema))a.tema=""}
  else if(n==="rasgo"){
    let R=a.rasgos.slice();
    if(v==="nada")R=R.indexOf("nada")>=0?[]:["nada"];
    else{
      R=R.filter(x=>x!=="nada");
      if(R.indexOf(v)>=0)R=R.filter(x=>x!==v);
      else{R=R.filter(x=>x!==BIO_EXCL[v]);if(R.length>=2){toast("Elige hasta dos");return false}R.push(v)}
    }
    a.rasgos=bioRasgos(R);
  }
  else if(n==="tema"||n==="tono"||n==="llamada")a[n]=v;
  return true;
}
document.addEventListener("click",e=>{
  const t=e.target.closest("[data-bk]");if(!t)return;
  const d=t.dataset,a=PIG.a;if(!a)return;
  switch(d.bk){
   case "q":case "pal":{
    const was=bioDone(a);
    if(d.bk==="pal")a.palabra=d.bv;else if(!bioSet(d.bn,d.bv))return;
    PIG.vs=[0,0,0,0,0,0];PIG.pv=[0,0,0,0,0,0];PIG.ci=0;bioSave();render(true);
    if(!was&&bioDone(a)&&(!PIG.ok||PIG.edit)){const r=document.getElementById("bio_res");if(r)r.scrollIntoView({behavior:"smooth",block:"start"})}
    break}
   case "otra":{
    const i=+d.bi;PIG.vs[i]=(PIG.vs[i]+1)%BIO_NVER;PIG.ci=i;
    const o=document.getElementById("bio_out");if(o)o.innerHTML=bioCards();bioPos();if(typeof FOTOS!=="undefined")FOTOS.scan();
    const b=document.querySelector('[data-bk="otra"][data-bi="'+i+'"]');if(b)b.focus();
    break}
   case "pre":{
    const i=+d.bi;if(!(i>=0&&i<6))return;
    PIG.pv[i]=(PIG.pv[i]+1)%BIO_NVER;
    const o=document.getElementById("pr_out");if(o)o.innerHTML=preCards();
    const b=document.querySelector('[data-bk="pre"][data-bi="'+i+'"]');if(b)b.focus();
    if(typeof FOTOS!=="undefined")FOTOS.scan();
    break}
   case "sinc":{
    a.sinc=!a.sinc;if(a.sinc){a.ciudad="";a.zd=""}PIG.zt=null;
    bioSave();render(true);break}
   case "zona":{
    a.ciudad=bioCiu(d.bv);a.sinc=false;a.zd="";PIG.zt=null;
    const i=document.getElementById("bio_ciu");if(i)i.value=a.ciudad;
    const w=document.getElementById("bio_ciuw");if(w)w.textContent="";
    bioSave();bioZonaBox();bioRefresh();
    const b=document.querySelector('[data-bk="zona"][aria-pressed="true"]');if(b)b.focus({preventScroll:true});
    const sn=document.querySelector('[data-bk="sinc"]');if(sn){sn.classList.remove("on");sn.setAttribute("aria-pressed","false")}
    break}
   case "zsi":{
    a.ciudad=bioCiu(d.bv);a.sinc=false;a.zd="";PIG.zt=null;
    const i=document.getElementById("bio_ciu");if(i)i.value=a.ciudad;
    bioSave();bioZonaBox();bioRefresh();break}
   case "zno":{
    a.zd=znL(PIG.zt!=null?PIG.zt:a.ciudad).trim();bioSave();bioZonaBox();break}
   case "mia":{
    const b=bioSeis(a)[+d.bi];if(!b)return;
    PIG.ok={txt:b.txt,sin:b.sin,con:b.con,est:b.l};ls("fs_bio_ok",PIG.ok);PIG.edit=false;
    toast("Guardada como tu bio");render();
    break}
   case "cambiar":PIG.edit=true;render();break;
   case "emo":case "red":{
    if(d.bk==="emo"){PIG.emo=d.bv==="1";ls("fs_bio_emo",PIG.emo?1:0)}else PIG.red=d.bv==="tt"?"tt":"ig";
    bioRefresh();
    const b=document.querySelector('[data-bk="'+d.bk+'"][data-bv="'+d.bv+'"]');if(b)b.focus();
    break}
   case "sl":bioIr(PIG.ci+(+d.bv));break;
   case "img":bioGuardaImg(t);break;
   case "ver":{const r=document.getElementById("bio_res");if(r){try{r.scrollIntoView({behavior:"smooth",block:"start"})}catch(x){r.scrollIntoView()}}break}
   case "tto":{
    PIG.tv=(PIG.tv+1)%BIO_NVER;
    const o=document.getElementById("bio_out");if(o)o.innerHTML=bioTTCard();if(typeof FOTOS!=="undefined")FOTOS.scan();
    const b=document.querySelector('[data-bk="tto"]');if(b)b.focus();
    break}
   case "rvab":case "rvgo":case "rvx":case "rvnew":case "rvkeep":bioRevClick(d.bk);break;
  }
});
function bioRevBox(f){
  const b=document.getElementById("bio_rv");if(b){b.innerHTML=bioRevHtml();if(f){const x=document.getElementById(f);if(x)x.focus()}}
}
function bioRevClick(k){
  const a=PIG.a;
  if(k==="rvab"){PIG.rv={txt:"",go:false};bioRevBox("bio_rvt")}
  else if(k==="rvx"){PIG.rv=null;bioRevBox()}
  else if(k==="rvgo"){if(PIG.rv){PIG.rv.go=true;bioRevBox();const o=document.querySelector(".bio-rvout,#bio_rv .note");if(o)o.scrollIntoView({behavior:"smooth",block:"nearest"})}}
  else if(k==="rvnew"&&PIG.rv){
    const p=bioDeduce(PIG.rv.txt),m=Object.assign({},a);
    Object.keys(p).forEach(x=>{m[x]=p[x]});
    if(p.quien&&!bioHas(bioTemas(p.quien),m.tema))m.tema="";
    PIG.a=bioSane(m);PIG.rv=null;if(PIG.ok)PIG.edit=true;
    PIG.vs=[0,0,0,0,0,0];PIG.pv=[0,0,0,0,0,0];PIG.ci=0;bioSave();render();
    toast(Object.keys(p).length?"He marcado lo que dice tu bio. Revisa y completa el resto":"No he podido deducir nada: contesta las preguntas");
    const f=document.querySelector(".bio-form");if(f)f.scrollIntoView({behavior:"smooth",block:"start"});
  }
  else if(k==="rvkeep"&&PIG.rv){
    const t=PIG.rv.txt.trim();
    if(t){
      if(t.length>BIO_MAX){toast("Tiene más de "+BIO_MAX+" caracteres: acórtala y vuelve a revisarla");return}
      PIG.ok=bioOk({txt:t,est:""});ls("fs_bio_ok",PIG.ok);PIG.edit=false;toast("Guardada como tu bio");
    }
    PIG.rv=null;render();
  }
}
document.addEventListener("input",e=>{
  const id=e.target.id;
  if(id==="bio_rvt"){if(PIG.rv)PIG.rv.txt=e.target.value;return}
  if(id!=="bio_pal"&&id!=="bio_nom"&&id!=="bio_ciu")return;
  const a=PIG.a;if(!a)return;
  if(id==="bio_ciu"){
    const v=e.target.value;a.ciudad=bioCiu(v);a.sinc=false;PIG.zt=v;bioZonaBox();
    const w=document.getElementById("bio_ciuw");if(w)w.textContent=v.trim()&&!a.ciudad?"Escribe solo el nombre de tu ciudad o de tu pueblo.":(a.ciudad&&v.trim().length>a.ciudad.length&&v.trim().length>BIO_CIU_MAX?"En la bio saldrá «"+a.ciudad+"», para que quepa.":"");
    const b=document.querySelector('[data-bk="sinc"]');if(b){b.classList.remove("on");b.setAttribute("aria-pressed","false")}
    bioSave();bioRefresh();return;
  }
  if(id==="bio_pal"){const v=bioPal(e.target.value);if(e.target.value!==v)e.target.value=v;a.palabra=v;
    document.querySelectorAll('[data-bk="pal"]').forEach(b=>{const on=b.dataset.bv===v;b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false")})}
  else a.nombre=e.target.value.slice(0,BIO_NOM_MAX);
  if(id==="bio_pal"){PIG.vs=[0,0,0,0,0,0];PIG.pv=[0,0,0,0,0,0]}
  bioSave();bioRefresh();
});

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
  if(t<4.5)out.push({k:"mejora",t:"Respuestas a tu llamada a la acción: "+numFmt(t),d:"Lo habitual es que conteste un 5 % (entre un 4,5 y un 5 %) de quienes ven tu story. Falla la parte alta: la gente ve, pero no se anima a escribirte.",tips:["Pon más llamadas a la acción: una al final de cada secuencia, con palabra clave.","Cuida la estructura: dolor, solución, llamada a la acción y recurso. Nunca venta directa.","Toca mejor el dolor: cuenta la situación concreta de tu clienta antes de ofrecerle el recurso.","Que el recurso sea concreto: dile qué recibe exactamente si te escribe la palabra."]});
  else out.push({k:"ok",t:"Respuestas a tu llamada a la acción: "+numFmt(t),d:t>5?"Por encima del 5 % habitual. Muy buena llamada a la acción.":"Dentro de lo esperado (alrededor del 5 %). Tu llamada a la acción funciona."});
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
  return '<section class="panel"><h3>Mide tus stories (cada semana)</h3><p class="lead">Escribe los números de tus stories de esta semana y te digo qué mejorar primero. Se guardan solo en este móvil.</p>'
   +'<div class="grid2">'+f("rn_s","Seguidores","Los que tienes hoy en Instagram.")+f("rn_v","Visualizaciones medias de tus stories","La media de tus últimas stories.")+f("rn_r","Respuestas a tu última llamada a la acción","Personas que te escribieron la palabra clave.")+f("rn_w","Conversaciones que pasaron a WhatsApp","De esas personas, cuántas pasaron a WhatsApp.")+'</div>'
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
const redGet=()=>ls("ft_red")==="tiktok"?"tiktok":"instagram";
const redSet=v=>ls("ft_red",v==="tiktok"?"tiktok":"instagram");

// ---------- barra INSTAGRAM | TIKTOK ----------
function redSeg(){
  const r=redGet();
  return '<div class="tt-plat" role="group" aria-label="Red social">'+[["instagram","Instagram"],["tiktok","TikTok"]].map(x=>'<button type="button" class="'+(r===x[0]?"on":"")+'" data-red="'+x[0]+'" aria-pressed="'+(r===x[0])+'">'+x[1]+'</button>').join("")+'</div>';
}

// ---------- INICIO en modo TikTok ----------
// Tres botones llevan a Crear (el banco nuevo). Orden del Inicio de TikTok: qué publico hoy (aquí), tu perfil de TikTok, Directos (TikTok LIVE, con tarjeta propia) y comentarios (perfilHtml en nav.js).
function viewHomeTT(nombre,sinHero){
  const B=(t,sub,tab,main)=>'<button class="hb'+(main?" main":"")+'" '+(tab.indexOf("|")>0?'data-c2k="hoy" data-c2v="'+tab+'"':'data-tab="'+tab+'"')+'><b>'+t+'</b>'+(sub?'<small>'+sub+'</small>':'')+'</button>';
  return (sinHero?'':'<section class="hero2"><p class="hi">'+(nombre?"Hola, "+esc(nombre):"Hola")+'</p><h2>¿Qué subes hoy?</h2></section>')
  +'<section class="panel hblk tt-menu">'
  +B("Vídeo para el proyecto","Texto, qué grabar y la palabra clave","tt|proyecto|escriban",true)
  +B("Vídeo para clientas","Un momento real con tu producto","tt|clientas|escriban")
  +B("Stories para TikTok","De 2 a 8 stories que piden la palabra en comentarios","st|proyecto|escriban|tt")
  +'</section>';
}

// ---------- MI HISTORIA EN 60 SEGUNDOS ----------
function viewTTHistoria(){
  const H=DB.tiktok.historia;
  let h='<section class="panel"><h2>Mi historia en 60 segundos</h2><p class="lead">El vídeo que fijas arriba de tu perfil de TikTok. Cuatro pasos, uno por frase o dos. Duración: '+esc(H.duracion)+'.</p></section>';
  h+=H.pasos.map((p,i)=>'<section class="panel tt-paso"><div class="tt-num">'+(i+1)+'</div><div><h3>'+esc(p.titulo)+'</h3><div class="tt-lbl">Qué contar</div><p class="tt-val">'+esc(p.que_contar)+'</p><div class="tt-lbl">Ejemplo</div><p class="tt-ejem">'+esc(p.ejemplo)+'</p><button class="mini" data-copy="'+esc(p.ejemplo)+'">Copiar ejemplo</button></div></section>').join("");
  h+='<section class="panel"><h3>Consejos para grabarlo</h3><ul>'+H.consejos.map(c=>'<li>'+esc(c)+'</li>').join("")+'</ul></section>';
  return h;
}

// ---------- RESPONDER COMENTARIOS ----------
function viewTTRespuestas(){
  const R0=DB.tiktok.respuestas,S0=[["informacion","Cuando te piden información"],["es_fiable","Cuando preguntan si es fiable"],["precio_producto","Cuando preguntan por el precio o el producto"],["video_respuesta","Para responder con un vídeo"]];
  let h='<section class="panel"><h2>Responder comentarios</h2><p class="lead">Respuestas cortas y tranquilas para los comentarios de tus vídeos de TikTok. Cámbialas un poco para que suenen a ti.</p></section>';
  S0.forEach(s=>{
    const L=R0[s[0]]||[];if(!L.length)return;
    h+='<section class="panel"><h3>'+esc(s[1])+'</h3>'+L.map(t=>'<div class="tt-ej"><p>'+esc(t)+'</p><button class="mini" data-copy="'+esc(t)+'">Copiar</button></div>').join("")+'</section>';
  });
  return h;
}

// ---------- MI BIO DE TIKTOK ----------
function viewTTBio(){
  let h='<section class="panel"><h2>Mi bio de TikTok</h2><p class="lead">Una bio corta que dice quién eres y adónde ir. TikTok deja 80 caracteres.</p></section>';
  h+='<section class="panel tt-med"><h3>Hazla a tu medida</h3><p>En «Tu bio» contestas unas preguntas cortas y te preparo una bio de TikTok con lo tuyo: 80 caracteres y dos líneas.</p><div class="acts"><button type="button" class="btn" data-tt="biotu">Hacer mi bio de TikTok</button></div></section>';
  h+='<section class="panel"><h3>Ejemplos para inspirarte</h3><p class="lead">Diez ejemplos para inspirarte. Elige la que más se parezca a ti, cópiala y acórtala a tu medida.</p></section>';
  h+=DB.tiktok.bios.map((b,i)=>'<section class="panel tt-bio"><h4>'+esc(b.perfil)+'</h4><p class="tt-bl">'+b.lineas.map(esc).join("<br>")+'</p><p class="mut">Te lleva a: '+esc(b.destino)+'</p><button class="mini" data-tt="biocopy" data-i="'+i+'">Copiar</button></section>').join("");
  return h;
}

// ---------- LO QUE NO SE DICE ----------
const TT_RED={ambas:"Meta y TikTok",meta:"Solo Meta",tiktok:"Solo TikTok"};
function viewNormas(){
  let h='<section class="panel"><h2>Lo que no se dice</h2><p class="lead">Lo que Meta y TikTok penalizan en proyectos de venta directa, y cómo decirlo mejor. Si se cuela alguna frase en tus textos, el Revisor te avisa.</p></section>';
  const NG=DB.tiktok.normas.slice();if(redGet()==="tiktok")NG.sort((a,b)=>(b.red==="tiktok")-(a.red==="tiktok"));
  h+=NG.map(g=>'<section class="tt-rl'+(g.red==="tiktok"?" tk":"")+'"><div class="tt-rlh"><b>'+esc(g.grupo)+'</b><span class="tt-red">'+esc(TT_RED[g.red]||"")+'</span></div>'
    +g.no.map(t=>'<p class="no">'+esc(t)+'</p>').join("")+g.mejor.map(t=>'<p class="si">'+esc(t)+'</p>').join("")+'</section>').join("");
  h+='<p class="note"><button class="linkb" data-tab="revisor">Pasar un texto por el Revisor</button></p>';
  return h;
}


Object.assign(VIEWS,{tt_historia:viewTTHistoria,tt_respuestas:viewTTRespuestas,tt_bio:viewTTBio,normas:viewNormas});

// ---------- eventos ----------
document.addEventListener("click",e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.red){redSet(d.red);render();return}
  if(d.tt==="biotu"){PIG.red="tt";go("perfil_ig");return}
  if(d.tt==="biocopy"){const b=DB.tiktok.bios[+d.i];if(b)copy(b.lineas.join("\n"))}
});

// ===== Fam Studio · sección Equipo (solo para el equipo) =====
// Contenido: DB.equipo (JSON descifrado). Todo texto dinámico pasa por esc(); los enlaces se comprueban otra vez aquí
// (https + dominio de la lista LINK_HOSTS de core.js) aunque el build ya los haya validado.
const EQ_IMG=/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/;
const EQ_KEY="ft_eq_sem";
const EQ_CARDS=[
  ["eq_semana","Tus primeros siete días en el equipo","primera_semana"],
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
  }).join("")+'<button type="button" class="eqc plain" data-tab="negocio"><span class="eqcs"><b>Mi proyecto</b><small>El plan de compensación explicado</small></span></button></div>';
  return h;
}

// ----- Tus primeros siete días en el equipo -----
function viewEqSemana(){
  const S1=eqSec("primera_semana"),D=eqDays(),p=eqProg(),st=eqSemStat();
  const pct=st.n?Math.round(st.c*100/st.n):0;
  let h=eqHead(S1,S1.titulo||"Tus primeros siete días en el equipo");
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
  return eqHead(F,F.titulo||"Formaciones",F.intro)+(F.grupos||[]).map(g=>eqPanel(g.t,eqLinks(g.items)+(g.nota?'<p class="note">'+esc(g.nota)+'</p>':'')+(/plan de compensaci/i.test(g.t)?'<button type="button" class="linkb" data-tab="negocio">Abrir «Mi proyecto»</button>':''))).join("");
}

// ----- Guías y plantillas -----
function viewEqGuias(){
  const G=eqSec("guias");
  let h=eqHead(G,G.titulo||"Guías y plantillas",G.intro);
  h+=eqPanel("Acciones básicas que dan resultados",'<ul class="equl">'+(G.plantillas||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul><p class="note">'+esc(G.plantillas_nota||"")+'</p>');
  if(G.guia7)h+=eqPanel(G.guia7.t,eqP(G.guia7.d)+eqLinks([G.guia7.link])+'<button type="button" class="linkb" data-tab="eq_semana">Ir a «Tus primeros siete días en el equipo»</button>');
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
  h+='<p class="note center"><button type="button" class="linkb" data-tab="negocio">Más términos en el glosario de «Mi proyecto»</button></p>';
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
  h+='<p class="eqaviso">Estos mensajes son para contestar a quien ya te ha escrito o ya te conoce. No los mandes en frío ni el mismo a muchas personas: eso es lo que Instagram y WhatsApp limitan.</p>';
  h+=eqPanel("Tips de ventas",eqNum(V.tips||[],x=>'<li>'+esc(x)+'</li>')+eqLinks([V.zoom]));
  h+=eqPanel("Cómo cobrar",(V.cobrar||[]).map(c=>'<div class="eqcobro"><h4>'+esc(c.t)+'</h4>'+eqP(c.d)+'</div>').join(""));
  h+=eqPanel("Lo que no debes hacer",'<ul class="eqno">'+(V.no_hacer||[]).map(x=>'<li>'+esc(x)+'</li>').join("")+'</ul>');
  h+=eqPanel("Ejemplos de mensajes",(V.mensajes||[]).map((m,i)=>eqMsg(m,i)).join(""));
  return h;
}
// mensaje con sus versiones: la primera es el original y «Otra versión» pasa a la siguiente (la elegida vive en S.eqv mientras dura la sesión)
function eqMsg(m,i){
  const v=[m.txt].concat(Array.isArray(m.otras)?m.otras:[]).filter(x=>typeof x==="string"&&x),n=((S.eqv||{})[i]||0)%v.length;
  return '<div class="eqmv" data-eqm="'+i+'"><div class="rmsg"><div class="rmh"><span class="rver">'+esc(m.t)+(v.length>1?' · versión '+(n+1)+' de '+v.length:'')+'</span>'+rcCopy(v[n],"")+'</div><p>'+esc(v[n])+'</p></div>'
    +(v.length>1?'<div class="acts"><button type="button" class="mini" data-eqotra="'+i+'">Otra versión</button></div>':'')+'</div>';
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
  if(t.dataset.eqreset){if(window.confirm("¿Borrar todo tu progreso de tus primeros siete días?")){ls(EQ_KEY,{});S.eqOpen={};render(true)}return}
  if(t.dataset.eqotra!==undefined){
    const i=+t.dataset.eqotra,m=((eqSec("ventas").mensajes)||[])[i],b=t.closest(".eqmv");
    if(!m||!b)return;
    S.eqv=S.eqv||{};S.eqv[i]=((S.eqv[i]||0)+1)%(1+(Array.isArray(m.otras)?m.otras.length:0));
    b.outerHTML=eqMsg(m,i);
    const nb=document.querySelector('[data-eqotra="'+i+'"]');if(nb)nb.focus();
    return;
  }
  if(t.dataset.eqimg){const s=eqShotByKey(t.dataset.eqimg),u=s&&eqImgOk(s.img);if(u)abreVisor(u,s.alt||"")}
});
Object.assign(VIEWS,{equipo:viewEquipo,eq_semana:viewEqSemana,eq_calendario:viewEqCalendario,eq_formaciones:viewEqFormaciones,eq_guias:viewEqGuias,eq_herramientas:viewEqHerramientas,eq_paises:viewEqPaises,eq_terminos:viewEqTerminos,eq_presentar:viewEqPresentar,eq_ventas:viewEqVentas,eq_normas:viewEqNormas});

// ===== Fam Studio · fotos de ejemplo (por tipo de plano) e imágenes de producto =====
// Nada de esto se descarga hasta que una tarjeta lo necesita:
//  - Fotos de ejemplo: el tipo de plano de cada instrucción sale primero de la tabla hecha a mano (DB.fotos.tabla, de
//    content/img_ej/tabla_tipos.json) y, solo si el texto no está en ella, de las reglas de content/img_ej/clasificar.py
//    (DB.fotos.reglas). Un tipo nuevo sin fotos propias usa las de su tipo de reserva (DB.fotos.reserva).
//    Qué foto del tipo sale en cada hueco lo decide un reparto por situación («pool»): sin repetir dentro de la situación y
//    fijo (la misma situación enseña siempre las mismas fotos). Las fotos (sin cifrar, de bancos libres) viven en unos pocos archivos f/<n>.bin; DB.fotos.ej = {tipo: [[archivo, desde, cuántos]]} dice dónde
//    está cada una y se pide con una petición de rango (plan B si el servidor no la respeta: ver «paquetes» más abajo). Se baja solo la que toca, la primera vez
//    que su tarjeta está a punto de verse (IntersectionObserver, máximo 4 descargas a la vez), y se guarda en la caché del
//    service worker (una clave por foto, ligada a la versión ?v=): lo ya visto funciona sin conexión.
//  - Imágenes de producto: prod.enc (cifrado y comprimido igual que los datos), una sola descarga la primera vez que hace falta.
// Si no hay tipo, no hay paquete o algo falla, la tarjeta no enseña ningún dibujo de relleno: solo el texto bien compuesto,
// sin marco de foto vacío (clase c2sf en la vista previa; las miniaturas se ocultan con .nof).
const FOTOS=(function(){
const F=DB.fotos||{},CATS=F.cats||{},RES=F.reserva||{},EJ=F.ej||{},TAB=F.tabla||null,RG=F.reglas||null,PROD_IMG=new Set(F.prod||[]),PG=F.pg||{},BPF=F.bp||{},FAM=F.fam||{};
const MAX_VIVOS=4,REINTENTO=20000;

// ---------- clasificador: mismas reglas y mismo orden que clasificar.py ----------
// Las expresiones llegan escritas para Python. Dos diferencias que hay que traducir: \b y \w de Python entienden las letras
// con tilde («tú», «café»); en JavaScript solo entienden ASCII. Se sustituyen por clases Unicode.
const LW="[\\p{L}\\p{N}_]",WB="(?:(?<!"+LW+")(?="+LW+")|(?<="+LW+")(?!"+LW+"))";
function tr(src){
  let o="";
  for(let i=0;i<src.length;i++){
    const c=src[i];
    if(c==="\\"&&i+1<src.length){const d=src[++i];o+=d==="b"?WB:d==="w"?LW:/[^\w^$\\.*+?()[\]{}|\/-]/.test(d)?d:c+d}else o+=c;
  }
  return o;
}
const mk=(s,f)=>new RegExp(tr(s),(f||"")+"u");
let M;
function motor(){
  if(M!==undefined)return M;
  M=null;
  if(!RG)return M;
  try{
    const tab=t=>t.map(x=>[x[0],mk(x[1],"i")]),m={lugares:tab(RG.lugares),activ:tab(RG.activ),obj:tab(RG.obj),debil:tab(RG.debil),r:{}};
    for(const k in RG.r)m.r[k]=mk(RG.r[k][0],RG.r[k][1]);
    m.cita=mk(RG.r.cita[0],"g");m.fondo=mk(RG.r.fondo[0],"ig");
    // expresiones que en clasificar.py están dentro de las funciones (mismo texto, mismo orden)
    const X=s=>mk(s);
    m.x={
      subs:[
        ["\\b(?:cajón|armario|estante|balda|encimera|mueble)(?:es)? (?:de|del) (?:los botes del |la )?(?:ba[nñ]o)\\b","repisa del baño"],
        ["\\bgrifo de la ducha\\b","ducha"],
        ["\\bagua micelar\\b","micelar"],
        ["\\bpapel de regalo\\b","regalo"],
        ["\\bcepillo (?:con|y) pasta\\b","cepillo de dientes en el lavabo"],
        ["\\barmarios? de (?:la )?cocina\\b","cocina"],
        ["\\bpa[nñ]uelos? de papel\\b","pañuelo"],
        ["\\bbolsa (?:de|del) (?:deporte|p[aá]del|gimnasio)\\b","material de gimnasio"],
        ["\\bcepillo de dientes\\b","cepillo de dientes en el lavabo"],
        ["\\bnevera port[aá]til\\b","bolsa térmica"],
        ["\\bbotes? de (t[eé]|negro|caf[eé]|canela|cacao|vainilla|matcha|az[uú]car|sal|especias|miel)\\b","especias ($1)"],
        ["\\bagua (?:humeante|caliente)\\b","taza humeante"],
        ["\\bpuertas? (?:de la |del |de los |de las |de )?(nevera|armario|congelador|horno|coche|ducha|cole|colegio)","$1"]
      ].map(p=>[mk(p[0],"g"),p[1]]),
      tusPies:X("^\\s*tus (?:pies|piernas|tobillos)\\b"),
      pies:X("^\\s*(?:tus?|el|la|los|las|un|una|unos|unas)?\\s*(?:pies|piernas)\\b"),
      aMano:mk("\\ba mano\\b","g"),
      seg:X("seguidor|nombres? de usuario|likes?|visualizaciones"),
      pulgar:X("^\\s*tu (?:pulgar|dedo)"),
      pulgarA:X("v[ií]deos|pasando|deslizando|pulsando|borrando|publicar|grabar|enviar|subir|escribiendo"),
      pulgarB:X("m[oó]vil|pantalla|story|stories|v[ií]deos?|bot[oó]n|chat|mensaje|publicar|app|comentarios|galer[ií]a|reel|clip"),
      pulgarC:X("libreta|cuaderno|agenda|papel|hoja|calendario|boli|nota"),
      tele:X("\\btele\\b|televisi"),movil:X("m[oó]vil"),
      ordenador:X("\\b(?:ordenador|port[aá]til)\\b"),movilW:X("\\bm[oó]vil\\b"),
      maqCara:X("pesta[nñ]as|p[aá]rpado|\\bceja|labios"),
      peloCara:X("pesta[nñ]as|cejas?|labios"),
      bolso:X("\\b(?:bolso|neceser|bolsillo|estuche|cremallera)\\b"),
      pelo:X("\\b(?:pelo|puntas|ra[ií]z|mech[oó]n|mechones|coleta|melena|cabello)\\b"),
      calend:X("\\bcalendario\\b"),
      cara:X("^\\s*tu (?:sonrisa|cara|ojo|boca|mirada|ceja|rostro|gesto)\\b"),
      cara2:X("\\b(?:tap\\w+|apoyada en) (?:la|el|tu) (?:cara|boca|mejilla)|cerca de la cara|apart\\w+ de la cara"),
      bano:X("\\b(?:lavabo|repisa|balda|grifo|ba[nñ]o|estante del ba[nñ]o)\\b"),
      fecha:X("\\b(?:lunes|martes|mi[eé]rcoles|jueves|viernes|s[aá]bado|domingo|enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)\\b"),
      toques:X("\\b(?:toquecitos|toques|toque)\\b.*\\b(?:ojo|mejilla|ojeras?)\\b"),
      pulsar:X("\\b(?:pulsando|pulsar|pulgar|borrando|deslizando)\\b"),
      pielB:X("p[oó]mulo|p[aá]rpado|antebrazo|mejilla|barra|raya")
    };
    M=m;
  }catch(e){M=null}
  return M;
}
const has=(rx,t)=>rx.test(t);
const dentro=(o,l)=>l.indexOf(o)>=0;
function limpia(t){
  t=t.replace(M.cita,"").replace(M.fondo,"").toLowerCase();
  for(const p of M.x.subs)t=t.replace(p[0],p[1]);
  const u=t.trimStart();
  if(u.startsWith("tú a cámara")||u.startsWith("tu a camara"))t=t.split(":")[0];
  return t.toLowerCase().trim();
}
// la mención que aparece antes; en empate, el orden de la tabla
function primero(t,lista){
  let mejor=-1,id="";
  for(const x of lista){const m=x[1].exec(t);if(m&&(mejor<0||m.index<mejor)){mejor=m.index;id=x[0]}}
  return id;
}
function objeto(t){
  const i=primero(t,M.obj);
  if(i)return i;
  for(const d of M.debil)if(has(d[1],t))return d[0];
  return "";
}
function cat(texto){
  if(!motor())return "";
  texto=String(texto==null?"":texto);
  if(!texto.trim())return "";
  const R=M.r,X=M.x;
  let t=limpia(texto);
  if(has(R.persona_ini,t)){
    if(has(R.espalda,t))return "tu_espalda";
    if(has(X.tusPies,t))return "tus_pies";
    const lugar=primero(t,M.lugares);
    if(lugar)return lugar;
    if(has(R.camara,t))return "cam_casa";
    const act=primero(t,M.activ);
    if(act)return act;
    if(has(R.gesto,t))return "cara_gesto";
    return "cam_casa";
  }
  if(has(X.pies,t))return "tus_pies";
  t=t.replace(X.aMano,"");
  const o=objeto(t);
  if(o==="libreta_lista"&&has(X.seg,t))return "pantalla_chat";
  if(has(X.pulgar,t)&&has(X.pulgarA,t)&&has(X.pulgarB,t)&&!has(X.pulgarC,t))return "pantalla_chat";
  if(o==="pantalla_chat"&&has(X.tele,t)&&!has(X.movil,t))return "sofa_salon";
  if(o==="pantalla_chat"&&has(X.ordenador,t)&&!has(X.movilW,t))return "portatil";
  if((o==="libreta_escribiendo"||o==="libreta_lista")&&has(X.maqCara,t))return "manos_maquillaje";
  if(o==="pelo_cepillo"&&has(X.peloCara,t))return "manos_maquillaje";
  if(dentro(o,["lavabo_botes","maquillaje","pelo_cepillo","ducha_toalla","vaso_bebida","cafe_taza","calle_exterior","armario_ropa"])&&has(X.bolso,t))return "bolso_neceser";
  if(has(X.pelo,t)&&dentro(o,["lavabo_botes","maquillaje","ducha_toalla","producto_solo","manos_producto",""]))return "pelo_cepillo";
  if((has(R.transparente,t)||has(R.aplicar,t))&&has(R.piel2,t)&&dentro(o,["lavabo_botes","maquillaje","ducha_toalla","producto_solo",""]))return "manos_piel";
  if(has(X.movilW,t)&&has(R.pantalla,t)&&dentro(o,["movil_mesa","pantalla_chat","libreta_lista","reloj_hora","calendario_pared"]))return "pantalla_chat";
  if((o==="libreta_escribiendo"||o==="libreta_lista")&&has(X.calend,t))return "calendario_pared";
  if(has(R.transparente,t)&&has(R.aplicar,t)&&has(R.piel,t)&&dentro(o,["lavabo_botes","maquillaje","manos_producto","pelo_cepillo",""]))return "manos_piel";
  if(has(X.cara,t)||has(X.cara2,t))return "cara_gesto";
  if(o==="maquillaje")return "manos_maquillaje";
  if(o==="lavabo_botes"){
    const bano=has(X.bano,t);
    if(has(R.transparente,t)&&!bano)return "manos_producto";
    if(bano)return "lavabo_botes";
    if(has(R.en_fila,t)||has(R.numero,t))return "productos_fila";
    return "producto_solo";
  }
  if(!o){
    if(has(X.fecha,t))return "calendario_pared";
    if(has(X.toques,t))return "manos_piel";
    if(has(X.pulsar,t))return "pantalla_chat";
    if(has(R.piel2,t)&&has(X.pielB,t))return "manos_piel";
    if(has(R.transparente,t))return "manos_gesto";
  }
  return o;
}
// ---------- tabla hecha a mano: texto -> tipo (misma normalización y mismo hash que content/img_ej/generar_tabla.py) ----------
const normT=t=>String(t==null?"":t).normalize("NFC").trim().toLowerCase().replace(/[ \t\n\r\u00a0]+/g," ");
function hash32(s,seed){let h=(2166136261^seed)>>>0;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
let TB;
function tabla(){
  if(TB!==undefined)return TB;
  TB=null;
  if(!TAB||!TAB.n)return TB;
  try{
    const b64=x=>{const bin=atob(x),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return u};
    const hb=b64(TAB.h),dv=new DataView(hb.buffer),n=TAB.n,hs=new Uint32Array(n);
    for(let i=0;i<n;i++)hs[i]=dv.getUint32(4*i,true);
    TB={seed:TAB.seed|0,tipos:TAB.tipos,hs,ts:b64(TAB.t),n};
  }catch(e){TB=null}
  return TB;
}
// tipo según la tabla, "" si el texto no está
function deTabla(texto){
  const T=tabla();
  if(!T)return "";
  const h=hash32(normT(texto),T.seed);
  let lo=0,hi=T.n-1;
  while(lo<=hi){const m=(lo+hi)>>1,v=T.hs[m];if(v===h)return T.tipos[T.ts[m]]||"";if(v<h)lo=m+1;else hi=m-1}
  return "";
}
// el tipo (de los 75) con fotos que enseña ese tipo: el suyo si tiene carpeta, si no su tipo de reserva; "" si ninguno
function real(t){
  for(let i=0;t&&i<4;i++){if(CATS[t])return t;t=RES[t]}
  return "";
}
// tipo de plano de una instrucción («Qué grabas»): la tabla manda; si el texto no está, las reglas; "" si no hay foto para ella
const memo=new Map();
function tipo(txt){
  txt=String(txt==null?"":txt);
  let r=memo.get(txt);
  if(r===undefined){
    try{r=deTabla(txt)||cat(txt)}catch(e){r=""}
    if(!real(r))r="";
    if(memo.size>4000)memo.clear();
    memo.set(txt,r);
  }
  return r;
}
// «El plano»: de dónde se graba y cómo se coloca el móvil, según el tipo de plano (DB.fotos.planos = {tipo:[titulo,como]}).
// Una instrucción sin tipo (o un tipo sin plano) enseña un consejo general: nunca sale vacío.
const PLANOS=F.planos||{},PLANO_GEN={t:"Un solo plano, sin cortes",c:"Apoya el móvil para que no tiemble y busca luz de ventana."};
function plano(txt){
  const t=tipo(txt),p=t&&PLANOS[t];
  return p&&p[0]&&p[1]?{t:p[0],c:p[1],tipo:t}:{t:PLANO_GEN.t,c:PLANO_GEN.c,tipo:""};
}
// ---------- reparto de fotos por situación ----------
// Todos los «qué grabas» de una situación (stories, ideas de qué grabar, planos de los reels, frases, serie, clips de TikTok y portada) forman
// un solo reparto, siempre en el mismo orden. Dentro de cada tipo de foto, el hueco número j de esa situación recibe la foto
// (pos·paso + salto + j) mod N, con N las fotos del tipo y «paso» un número primo con N cerca de 0,618·N:
//  - dentro de la situación, ningún hueco repite foto mientras haya fotos (las que tocan son N seguidas, mod N);
//  - situaciones seguidas del mismo grupo (pos, pos+1...) empiezan por fotos distintas y, a lo largo del grupo, las N fotos salen por igual;
//  - es fijo: depende solo de la situación y del hueco, no de «Otro gancho», de cambiar la palabra ni del número de stories.
// «salto» (un hash del grupo y del tipo) evita que grupos distintos empiecen todos por la misma foto.
function paso(N){
  if(N<3)return 1;
  const gcd=(a,b)=>b?gcd(b,a%b):a,ideal=Math.round(N*0.6180339887);
  for(let d=0;d<N;d++)for(const c of [ideal-d,ideal+d])if(c>=1&&c<N&&gcd(c,N)===1)return c;
  return 1;
}
const idx=(N,pos,salto,j)=>((pos*paso(N)+salto+j)%N+N)%N;
// huecos de una situación, en el orden del reparto: [id del hueco, texto «qué grabas»]
function huecos(s){
  const P=s.pk||{},ST=P.stories||{},L=[],add=(k,t)=>{if(t)L.push([k,String(t)])};
  add("st:gancho",(ST.gancho||{}).graba);add("st:antes",(ST.antes||{}).graba);add("st:ahora",(ST.ahora||{}).graba);
  (ST.valor||[]).forEach((v,i)=>add("st:v"+i,v.graba));
  add("st:pregunta",(ST.pregunta||{}).graba);add("st:cierre",(ST.cierre||{}).graba);
  const pf=((P.amp||{}).portada||{}).foto;
  if(pf)L.push(["pg",null,pf]); // la portada de la mini guía tiene el tipo escrito en los datos: va justo detrás de las stories
  const I=P.planos||{};
  ["sin_cara","soltura","camara"].forEach(k=>(I[k]||[]).forEach((x,i)=>add("id:"+k+":"+i,x)));
  (P.reels||[]).forEach((r,ri)=>(r.planos||[]).forEach((p,pi)=>add("rp:"+ri+":"+pi,p.graba)));
  (P.frases||[]).forEach((f,i)=>add("rf:"+i,f.plano));
  if(P.serie&&P.serie.partes)P.serie.partes.forEach((f,i)=>add("se:"+i,f));
  (P.tiktok||[]).forEach((x,i)=>add("tt:"+i,x.graba));
  return L;
}
let ORD=null;
// pos de cada situación o guía: su número de orden dentro de su vía y grupo (en el orden de paquetes.json), y el grupo
function orden(){
  if(ORD)return ORD;
  ORD={};
  const cont={};
  (DB.paquetes||[]).forEach(s=>{const g=s.via+"|"+s.grupo;ORD[s.id]={pos:cont[g]=(cont[g]||0)+1,sal:g,s}});
  (DB.guias||[]).forEach((x,i)=>{ORD["pg:"+x.id]={pos:i,sal:"guias",s:{pk:{amp:x.amp}}}});
  return ORD;
}
const POOLS=new Map();
// Cuando a un tipo ya no le quedan fotos sin usar en la situación (más huecos que fotos), la tarjeta toma una foto aún no usada del hermano más
// cercano de su familia (FAM = {tipo: [hermanos por cercanía]}, de content/img_ej/familias.json). Solo si toda la familia se ha agotado se repite,
// empezando por la foto usada hace más tarjetas. Es fijo: depende solo de la situación y del orden de los huecos.
function prestada(t,o,usado,ult,k){
  for(const s of FAM[t]||[]){
    const N=CATS[s];if(!N)continue;
    const base=((o.pos*paso(N)+hash32(o.sal+"|"+s,7)%N)%N+N)%N;
    for(let d=0;d<N;d++){const i=(base+d)%N;if(!usado.has(s+"|"+i)){usado.add(s+"|"+i);ult.set(s+"|"+i,k);return [s,i,1]}}
  }
  // familia agotada: la foto (propia o de un hermano) usada hace más tarjetas
  let mejor=null,mk=1e9;
  for(const s of [t].concat(FAM[t]||[])){const N=CATS[s];if(!N)continue;for(let i=0;i<N;i++){const u=ult.has(s+"|"+i)?ult.get(s+"|"+i):-1;if(u<mk){mk=u;mejor=[s,i,1]}}}
  if(mejor)ult.set(mejor[0]+"|"+mejor[1],k);
  return mejor;
}
// {hueco: [tipo con fotos, nº de foto, 1 si es prestada de un hermano] | null} de una situación (id de situación) o de la portada de una guía ("pg:<id>")
function pool(id){
  let r=POOLS.get(id);
  if(r)return r;
  r={};
  const o=orden()[id];
  if(o){
    const L=huecos(o.s),cnt={},usado=new Set(),ult=new Map(),pend=[];
    L.forEach((h,k)=>{
      const t=h[2]?real(h[2]):real(tipo(h[1]));
      if(!t){r[h[0]]=null;return}
      const N=CATS[t],j=cnt[t]||0;cnt[t]=j+1;
      if(j<N){const i=idx(N,o.pos,hash32(o.sal+"|"+t,7)%N,j);r[h[0]]=[t,i];usado.add(t+"|"+i);ult.set(t+"|"+i,k)}
      else pend.push([h[0],k,t]);
    });
    for(const p of pend)r[p[0]]=prestada(p[2],o,usado,ult,p[1]);
  }
  if(POOLS.size>300)POOLS.clear();
  POOLS.set(id,r);
  return r;
}
// {tipo, i, pres} de un hueco (pres: foto prestada de un tipo hermano); null si no hay foto
function foto(id,hueco){
  const p=pool(id)[hueco];
  return p?{tipo:p[0],i:p[1],pres:!!p[2]}:null;
}
// atributos que se ponen a la caja que enseñará la foto de ese hueco; "" si no hay foto (entonces la tarjeta es solo texto)
function attrs(id,hueco){
  const f=foto(id,hueco);
  return f?' data-ft="'+esc(f.tipo)+'" data-fh="'+f.i+'"':"";
}
// miniatura vertical (planos del reel, ideas de qué grabar, partes de la serie). "" si no hay foto.
function thumb(id,hueco,cls){
  const a=attrs(id,hueco);
  return a?'<span class="c2th'+(cls?" "+cls:"")+'"'+a+' aria-hidden="true"></span>':"";
}
// imagen de producto. "" si ese producto no tiene.
function prodThumb(id,cls){
  return PROD_IMG.has(id)?'<span class="c2pi'+(cls?" "+cls:"")+'" data-fp="'+esc(id)+'" aria-hidden="true"></span>':"";
}

// ---------- paquetes de fotos ----------
const PAQ={},cola=[];
let vivos=0,purgado=false;
async function cache(){try{return await caches.open(FS.CACHE||"fs-cache-3")}catch(e){return null}}
async function limpiaViejas(c,v){
  if(purgado||!c)return;
  purgado=true;
  try{for(const k of await c.keys()){const u=new URL(k.url);if(/\/(?:f\/[^/]+\.jpg|ej\/[^/]+\.jpg|pg\/[^/]+\.jpg|bp\/[^/]+\.jpg)$/.test(u.pathname)&&u.search!=="?v="+encodeURIComponent(v))await c.delete(k)}}catch(e){}
}
// ---------- todas las fotos (ejemplo, portadas y Beauty Party) viven en unos pocos archivos f/<n>.bin ----------
// Cada foto se pide con una petición de rango (Range: bytes=desde-hasta) y se guarda en la caché con una clave propia (una respuesta 206 no se puede guardar tal cual).
// Plan B: si el servidor no respeta el rango (contesta 200 con el archivo entero), o el trozo llega mal, se baja ese archivo entero UNA vez, se trocea y se guarda foto a foto.
// Una foto es [archivo, desde, cuántos]; DB.fotos.paq lleva el tamaño de cada archivo, con el que se comprueba lo que llega.
const PKS=F.paq||[],ENTERO={};
let sinRango=null,sonda=null;   // sinRango: null = aún no se sabe, true = el servidor no respeta rangos, false = los respeta
const verU=()=>encodeURIComponent((FS.ver&&FS.ver.v)||"");
const claveFoto=r=>"f/"+r[0]+"_"+r[1]+"_"+r[2]+".jpg?v="+verU();
const esJpeg=(b,n)=>!!b&&b.byteLength===n&&n>1000&&new Uint8Array(b,0,3).join()==="255,216,255";
const corta=(b,o,n)=>{const x=b.slice(o,o+n);if(!esJpeg(x,n))throw new Error("f");return x};
// las fotos que lleva un archivo (para guardarlas todas al bajarlo entero)
function fotosDe(p){
  const L=[],add=r=>{if(Array.isArray(r)&&r[0]===p)L.push(r)};
  for(const t in EJ)(EJ[t]||[]).forEach(add);
  for(const k in PG)add(PG[k]);
  for(const k in BPF)add(BPF[k]);
  return L;
}
function registra(p,prom){
  const e=ENTERO[p]=prom.then(b=>{if(!b||b.byteLength!==PKS[p])throw new Error("f");return b});
  e.then(async b=>{
    const c=await cache();if(!c)return;
    try{
      for(const r of fotosDe(p)){const k=claveFoto(r);if(!(await c.match(k)))await c.put(k,new Response(b.slice(r[1],r[1]+r[2]),{headers:{"content-type":"image/jpeg"}}))}
      if(ENTERO[p]===e)delete ENTERO[p];   // ya está todo en la caché: se suelta de la memoria
    }catch(er){}
  },()=>{if(ENTERO[p]===e)delete ENTERO[p]});
  return e;
}
function entero(p){
  if(ENTERO[p])return ENTERO[p];
  return registra(p,fetch("f/"+p+".bin?v="+verU()).then(h=>{if(!h.ok)throw new Error("f");return h.arrayBuffer()}));
}
// una petición de rango; devuelve el trozo bueno o null (y se aprende si el servidor respeta rangos)
async function pideRango(r){
  const h=await fetch("f/"+r[0]+".bin?v="+verU(),{headers:{Range:"bytes="+r[1]+"-"+(r[1]+r[2]-1)}});
  if(h.status===206){
    const b=await h.arrayBuffer();
    if(esJpeg(b,r[2])){sinRango=false;return b}
    sinRango=true;return null;      // un 206 con otro contenido: no te fíes de este servidor
  }
  if(h.status===200){
    sinRango=true;
    if(ENTERO[r[0]]){try{h.body&&h.body.cancel()}catch(e){}return null}   // ya se está bajando entero
    registra(r[0],h.arrayBuffer());  // el archivo entero que ha llegado se aprovecha
    return null;
  }
  try{h.body&&h.body.cancel()}catch(e){}
  return null;
}
async function trozo(r){
  const p=r[0],o=r[1],n=r[2];
  if(ENTERO[p])return corta(await ENTERO[p],o,n);
  if(sinRango===null&&sonda)await sonda;     // la primera petición averigua si hay rangos; las demás esperan para no bajar el archivo entero varias veces
  if(ENTERO[p])return corta(await ENTERO[p],o,n);
  if(sinRango!==true){
    const q=pideRango(r);
    if(sinRango===null&&!sonda)sonda=q.then(()=>{},()=>{});
    try{const b=await q;if(b)return b}catch(e){}
  }
  return corta(await entero(p),o,n);
}
// dirección blob: lista para un <img> de la foto [archivo, desde, cuántos]; lo ya visto sale de la caché (también sin conexión)
async function bajaFoto(r){
  if(!Array.isArray(r))throw new Error("f");
  const k=claveFoto(r),c=await cache();
  let b=null;
  if(c){try{const h=await c.match(k);if(h){b=await h.arrayBuffer();if(!esJpeg(b,r[2]))b=null}}catch(e){}}
  const deCache=!!b;
  if(!b)b=await trozo(r);
  if(!deCache&&c){try{await c.put(k,new Response(b,{headers:{"content-type":"image/jpeg"}}))}catch(e){}}
  limpiaViejas(c,(FS.ver&&FS.ver.v)||"");
  return URL.createObjectURL(new Blob([b],{type:"image/jpeg"}));
}
// una foto de ejemplo: número i de un tipo
function bajar(t,i){return bajaFoto((EJ[t]||[])[i])}
// ---------- portadas grandes de las guías (1080x1350): una sola descarga, al abrir esa guía ----------
const POR={};
const bajaPortada=id=>bajaFoto(PG[id]);
// dirección (blob:) de la portada propia de una guía; null si no tiene o no se pudo bajar
function portada(id){
  if(!PG[id])return Promise.resolve(null);
  let e=POR[id];
  if(e&&(!e.fallo||Date.now()-e.fallo<REINTENTO))return e.p;
  e=POR[id]={};
  e.p=bajaPortada(id).catch(()=>{e.fallo=Date.now();return null});
  return e.p;
}
// ---------- fotos de ambiente de Mi Beauty Party (1080x1350): se bajan al usarlas; si no se puede, la pantalla usa su variante sin foto ----------
const AMB={};
const bajaAmbiente=id=>bajaFoto(BPF[id]);
function ambiente(id){
  if(!BPF[id])return Promise.resolve(null);
  let e=AMB[id];
  if(e&&(!e.fallo||Date.now()-e.fallo<REINTENTO))return e.p;
  e=AMB[id]={};
  e.p=bajaAmbiente(id).catch(()=>{e.fallo=Date.now();return null});
  return e.p;
}
function bombea(){
  while(vivos<MAX_VIVOS&&cola.length){
    const j=cola.shift();vivos++;
    bajar(j.t,j.i).then(u=>{vivos--;j.ok(u);bombea()},er=>{vivos--;j.e.fallo=Date.now();j.ko(er);bombea()});
  }
}
// dirección blob: de la foto número i (0...) de un tipo con fotos; la promesa falla si no se pudo bajar (se reintenta pasados 20 s)
function imagen(t,i){
  const N=CATS[t]||0;
  if(!N)return Promise.reject(new Error("ej"));
  const k=t+"|"+(((i%N)+N)%N);
  let e=PAQ[k];
  if(e&&(!e.fallo||Date.now()-e.fallo<REINTENTO))return e.p;
  e=PAQ[k]={};
  e.p=new Promise((ok,ko)=>{cola.push({t,i:((i%N)+N)%N,ok,ko,e});bombea()});
  e.p.catch(()=>{});
  return e.p;
}
// ---------- imágenes de producto: un solo paquete cifrado ----------
let prodP=null;
function prodPaquete(){
  if(!prodP){
    prodP=Promise.resolve().then(()=>{if(typeof FS.loadEnc!=="function")throw new Error("prod");return FS.loadEnc("prod.enc")})
      .then(o=>{if(!o||!o.imgs||typeof o.imgs!=="object")throw new Error("prod");return o.imgs});
    prodP.catch(()=>{setTimeout(()=>{prodP=null},REINTENTO)});
  }
  return prodP;
}

// ---------- poner la foto en la caja ----------
function fallo(el){el.dataset.fd="x";if(el.classList.contains("c2th")||el.classList.contains("c2pi")||el.classList.contains("bpfoto"))el.classList.add("nof");if(el.classList.contains("c2story")){el.classList.remove("c2foto");el.classList.add("c2sf")}if(el.classList.contains("pr-pv")&&el.parentNode)el.parentNode.classList.add("pr-sf")}
function pon(el,src){
  const img=new Image();
  img.alt="";img.decoding="async";img.className="c2ph";
  img.addEventListener("load",()=>{
    el.dataset.fd="1";el.classList.add("fok");
    if(el.classList.contains("c2story")&&!el.querySelector(".c2fl")){const l=document.createElement("span");l.className="c2fl";l.textContent="Foto de ejemplo";el.appendChild(l)}
  });
  img.addEventListener("error",()=>fallo(el));
  img.src=src;
  el.insertBefore(img,el.firstChild);
}
function pide(el){
  if(el.dataset.fd||!el.isConnected)return;
  el.dataset.fd="0";
  if(el.dataset.fa){
    ambiente(el.dataset.fa).then(u=>{if(!el.isConnected)return;u?pon(el,u):fallo(el)});
    return;
  }
  if(el.dataset.fp){
    prodPaquete().then(M=>{const u=M[el.dataset.fp];if(!el.isConnected)return;typeof u==="string"&&u.indexOf("data:image/jpeg;base64,")===0?pon(el,u):fallo(el)},()=>fallo(el));
    return;
  }
  imagen(el.dataset.ft,+el.dataset.fh||0).then(u=>{if(!el.isConnected)return;pon(el,u)},()=>fallo(el));
}
// ---------- qué tarjetas están en pantalla (o a punto de entrar) ----------
let io=null,pend=false;
const SEL="#main [data-ft]:not([data-fd]),#main [data-fp]:not([data-fd]),#main [data-fa]:not([data-fd])";
function escanear(){
  pend=false;
  const L=document.querySelectorAll(SEL);
  if(io){io.disconnect();io=null}
  if(!L.length)return;
  if(typeof IntersectionObserver!=="function"){L.forEach(pide);return}
  io=new IntersectionObserver(es=>{for(const e of es)if(e.isIntersecting){io&&io.unobserve(e.target);pide(e.target)}},{rootMargin:"400px 0px 400px 0px"});
  L.forEach(el=>io.observe(el));
}
// render() lo llama después de pintar; solo apunta que hay que mirar (no cuesta nada si no hay fotos)
function scan(){if(!pend){pend=true;setTimeout(escanear,0)}}
// imagen de producto como data:URL (para dibujarla en un canvas); null si no hay o falla
const prodSrc=id=>PROD_IMG.has(id)?prodPaquete().then(M=>{const u=M[id];return typeof u==="string"&&u.indexOf("data:image/jpeg;base64,")===0?u:null},()=>null):Promise.resolve(null);
return {tipo,real,plano,cat,deTabla,pool,foto,huecos,attrs,thumb,prodThumb,scan,imagen,prodSrc,portada,tienePortada:id=>!!PG[id],ambiente,tieneAmbiente:id=>!!BPF[id],tiene:id=>PROD_IMG.has(id)};
})();

// ===== Fam Studio · CREAR (banco de paquetes) =====
// Tres preguntas -> guion en 3 pasos. Todo el texto sale tal cual de DB.paquetes (escrito y revisado a mano):
// aquí no se rellenan huecos, solo se eligen piezas y se pone la palabra clave.
const C2=(function(){
const PKS=(DB.paquetes||[]).filter(s=>s&&s.pk&&s.id);
const PK={};PKS.forEach(s=>{PK[s.id]=s});
const VIAS={clientas:{n:"Clientas",d:"Vender y recomendar productos"},proyecto:{n:"Proyecto",d:"Sumar gente al equipo"}};
// Cada intención cambia tres cosas del guion: el tipo de gancho, qué stories salen y cómo termina.
const OBJ={
 clientas:[["conocer","Llegar a gente nueva","Para quien todavía no te sigue. Terminas pidiendo que te sigan."],
  ["confien","Contar algo mío","Para quien ya te sigue. Cuentas cómo lo hacías y cómo lo haces ahora, y terminas con una encuesta."],
  ["escriban","Recibir mensajes","Das un consejo y regalas tu guía a quien te escriba la palabra."],
  ["producto","Enseñar un producto","Cuentas cómo lo usas tú y pides la palabra."],
  ["reto","Invitar al reto","Explicas cómo va el reto y pides la palabra."],
  ["taller","Invitar al taller del martes","Cuentas qué se ve en el taller y pides la palabra."]],
 proyecto:[["conocer","Llegar a gente nueva","Para quien todavía no te sigue. Terminas pidiendo que te sigan."],
  ["confien","Contar algo mío","Para quien ya te sigue. Cuentas cómo lo hacías y cómo lo haces ahora, y terminas con una encuesta."],
  ["escriban","Recibir mensajes","Das un consejo y regalas tu guía a quien te escriba la palabra."],
  ["invitar","Invitar a una formación","Cuentas qué se ve y cuándo, y pides la palabra."]]};
const CONCRETO=["producto","reto","taller","invitar"];
// tipos de gancho que mejor encajan con cada intención (los demás siguen disponibles con «Otro gancho»)
const HOOKS={conocer:["negativo","contra corriente","curiosidad","enemigo común","sorpresa"],confien:["historia","robado","cotilla","sorpresa"],escriban:["fórmula","regla del tres","pregunta","reto"],producto:["cotilla","fórmula","curiosidad","historia"]};
const HOOKS_DEF=["pregunta","fórmula","curiosidad","robado"];
function hookOrden(s,o){const pr=HOOKS[o]||HOOKS_DEF,G=s.pk.ganchos,A=[],B=[];G.forEach((g,i)=>{(pr.indexOf(g.tipo)>=0?A:B).push(i)});A.sort((x,y)=>pr.indexOf(G[x].tipo)-pr.indexOf(G[y].tipo));return {pref:A,todos:A.concat(B)}}
const TIPOS=[["st","Stories"],["re","Reel"],["tt","TikTok"]];
const MES=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const AVISO=(DB.gamas&&DB.gamas.nutri&&DB.gamas.nutri.aviso)||"";
const LBL={gancho:"Engancha",antes:"Cómo era antes",ahora:"Cómo lo hago ahora",valor:"Un consejo",pregunta:"Encuesta",cierre:{kw:"Pide la palabra",sigue:"Invita a seguirte",encuesta:"Pregunta y escucha"}};
const SETS_BASE={2:["gancho","cierre"],3:["gancho","ahora","cierre"],4:["gancho","antes","ahora","cierre"],5:["gancho","antes","ahora","v0","cierre"],6:["gancho","antes","ahora","v0","v1","cierre"],7:["gancho","antes","ahora","v0","v1","v2","cierre"],8:["gancho","antes","ahora","v0","v1","v2","pregunta","cierre"]};
const SETS_CONOCER={2:["gancho","cierre"],3:["gancho","ahora","cierre"],4:["gancho","ahora","v0","cierre"],5:["gancho","ahora","v0","v1","cierre"],6:["gancho","ahora","v0","v1","v2","cierre"],7:["gancho","antes","ahora","v0","v1","v2","cierre"],8:["gancho","antes","ahora","v0","v1","v2","pregunta","cierre"]};
const SETS_ESCRIBAN={2:["gancho","cierre"],3:["gancho","v0","cierre"],4:["gancho","ahora","v0","cierre"],5:["gancho","ahora","v0","v1","cierre"],6:["gancho","ahora","v0","v1","v2","cierre"],7:["gancho","antes","ahora","v0","v1","v2","cierre"],8:["gancho","antes","ahora","v0","v1","v2","pregunta","cierre"]};
const setsDe=o=>o==="conocer"?SETS_CONOCER:o==="escriban"?SETS_ESCRIBAN:SETS_BASE;

const GRAB_KEY="fs_c2_grab"; // «Ver una a una» se recuerda entre visitas
const st=()=>S.c2||(S.c2={t:"st",v:"clientas",o:"escriban",w:"hoy",g:"",q:"",s:"",n:defLen(S.f&&S.f.nivel),kw:"",own:false,hook:-1,ci:0,ri:0,ti:0,rt:"frase",fi:0,res:false,grab:!!ls(GRAB_KEY),gi:0,kwOpen:false});
const hasSerie=s=>!!(s.pk.serie&&s.pk.serie.partes&&s.pk.serie.partes.length===3);
const ANG={confesion:"Confesión",negacion:"No fue… fue",eres:"¿Eres de las que…?",carta:"A la de antes",yano:"Ya no",diamalo:"El día malo",preguntan:"Lo que me preguntan",nadieve:"Lo que no se ve",aprendi:"Lo que he aprendido",eleccion:"¿Tú de A o de B?",minimo:"Lo mínimo",primeravez:"La primera vez",mania:"Mi manía",miregla:"Mi regla",enhora:"A esta hora",llevo:"Llevo un tiempo",sinpermiso:"Sin pedir perdón"};
const tipoCierre=o=>o==="conocer"?"sigue":o==="confien"?"encuesta":"kw";
const objsVia=v=>OBJ[v].filter(o=>PKS.some(s=>s.via===v&&s.objetivos.indexOf(o[0])>=0));
// ¿hay hoy alguna situación de esta propuesta? (las de otra temporada no se ofrecen) y, si no, en qué mes vuelven
const disp=(v,o)=>PKS.some(s=>s.via===v&&s.objetivos.indexOf(o)>=0&&cuando(s)!=="");
function vuelve(v,o){
  const m=mesNow();let best=13;
  PKS.forEach(s=>{if(s.via===v&&s.objetivos.indexOf(o)>=0)(s.meses||[]).forEach(x=>{const d=(x-m+12)%12;if(d>0&&d<best)best=d})});
  return best<13?MESL[(m-1+best)%12]:"";
}
const objLabel=(v,o)=>((OBJ[v].find(x=>x[0]===o)||[])[1])||"";
const isNutri=s=>/^(Nutrición|Reto)/.test(s.grupo)||(s.productos||[]).some(p=>PROD[p]&&PROD[p].gama==="nutri");
const prodList=s=>(s.productos||[]).map(p=>PROD[p]).filter(Boolean);
const mesNow=()=>new Date().getMonth()+1;
const MESL=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
function cuando(s){
  if(s.temporada==="todo el año"||!s.meses||s.meses.length>=12)return "todo";
  const m=mesNow(),n1=m%12+1,n2=n1%12+1;
  if(s.meses.indexOf(m)>=0)return "temp";
  if(s.meses.indexOf(n1)>=0||s.meses.indexOf(n2)>=0)return "fechas";
  return "";
}
const mesesTxt=s=>(s.meses||[]).length>=12?"":(s.meses||[]).map(m=>MES[m-1]).join(", ");
// objetivos abiertos: cualquier situación sirve (todas traen palabra clave, «sígueme» y encuesta)
// cada situación solo sale en las intenciones para las que se ha revisado que tiene sentido
const vale=(s,o)=>s.objetivos.indexOf(o)>=0;
const TEMA_N={hoy:"Para hoy",ahora:"Fechas que vienen",dia:"Mi día a día",piel:"Piel y cuerpo",maq:"Maquillaje",pelo:"Pelo",olor:"Perfumes y regalos",nutri:"Nutrición",casa:"En casa y talleres",dudas:"Dudas que me hacen"};
const TEMA_ORD=["ahora","dia","piel","maq","pelo","olor","nutri","casa","dudas"];
function temaDe(s){
  const w=cuando(s);if(w==="temp"||w==="fechas")return "ahora";if(!w)return "";
  const g=s.grupo;
  if(/^Mi día · /.test(g))return "dia";
  if(/^Por la (mañana|noche)$|^Mi piel|^Cuerpo/.test(g))return "piel";
  if(/^Maquillaje/.test(g))return "maq";
  if(g==="Pelo")return "pelo";
  if(/^Olor/.test(g))return "olor";
  if(/^(Nutrición|Reto)/.test(g))return "nutri";
  if(/^(Beauty party|Taller)/.test(g))return "casa";
  if(/^Dudas que/.test(g))return "dudas";
  return "g:"+g;
}
const temaNom=t=>TEMA_N[t]||String(t).replace(/^g:/,"");
const subNom=g=>g.replace(/^(Nutrición|Mi día) · /,"");
const base=c=>PKS.filter(s=>s.via===c.v&&vale(s,c.o));
const ordena=(L,o)=>L.filter(s=>s.objetivos.indexOf(o)>=0).concat(L.filter(s=>s.objetivos.indexOf(o)<0));
const distMes=s=>{const m=mesNow();return Math.min(...(s.meses||[m]).map(x=>(x-m+12)%12))};
function temas(c){
  const n={};base(c).forEach(s=>{const t=temaDe(s);if(t)n[t]=(n[t]||0)+1});
  return TEMA_ORD.filter(k=>n[k]).concat(Object.keys(n).filter(k=>TEMA_ORD.indexOf(k)<0)).map(k=>[k,n[k]]);
}
function paraHoy(c){
  const B=base(c),out=[],k=dayKey()+"|"+c.v+"|"+c.o;
  const A=B.filter(s=>temaDe(s)==="ahora").sort((a,b)=>distMes(a)-distMes(b));
  if(A.length)out.push(A[hash(k+"a")%Math.min(A.length,6)]);
  const T=[...new Set(B.map(temaDe).filter(t=>t&&t!=="ahora"))];
  const r=T.length?hash(k)%T.length:0;
  for(let i=0;i<T.length&&out.length<4;i++){const t=T[(r+i)%T.length],L=B.filter(s=>temaDe(s)===t),M=L.filter(s=>s.objetivos.indexOf(c.o)>=0),P=M.length?M:L;out.push(P[hash(k+t)%P.length])}
  return out;
}
function lista(c,w,q){
  const qq=norm(q||"").trim().split(/\s+/).filter(Boolean),B=base(c);
  if(qq.length)return ordena(B.filter(s=>qq.every(x=>norm([s.nombre,s.escena,s.grupo,s.recurso,(s.kw||[]).join(" ")].join(" ")).indexOf(x)>=0)),c.o);
  if(w==="hoy")return paraHoy(c);
  const L=B.filter(s=>temaDe(s)===w);
  return w==="ahora"?L.sort((a,b)=>distMes(a)-distMes(b)):L;
}
const dayKey=()=>{const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
const sugerida=(L,c)=>L.length?L[hash(dayKey()+"|"+c.v+"|"+c.o)%L.length]:null;
// tipo de reel: sin «rt» (estado antiguo) o con uno que la situación no admite, se trata como «de una frase»
function normRt(s,c){
  const F=s.pk.frases;
  c.rt=c.rt==="planos"?"planos":c.rt==="serie"&&hasSerie(s)?"serie":"frase";
  if(!(F&&F.length))c.rt="planos";
  c.fi=F&&F.length?((+c.fi||0)%F.length+F.length)%F.length:0;
}
// ¿qué situaciones se ven ahora mismo en la lista? (el tema, el grupo y la búsqueda que hay puestos)
function visibles(c){
  const L=lista(c,c.w,c.q);
  if(c.q||c.w==="hoy"||!c.g)return L;
  const L2=L.filter(x=>x.grupo===c.g);return L2.length?L2:L;
}
function asegurar(){
  const c=st();
  if(!VIAS[c.v])c.v="clientas";
  // una situación de otra temporada solo se mantiene si la ha elegido la usuaria a propósito (c.pin) y sigue siendo la elegida
  const pin=c.pin&&PK[c.pin]&&c.s===c.pin&&PK[c.pin].via===c.v&&vale(PK[c.pin],c.o);
  if(!pin)c.pin="";
  const O=objsVia(c.v);if(!O.some(o=>o[0]===c.o&&(pin||disp(c.v,o[0]))))c.o=(O.find(o=>o[0]==="escriban")||O.find(o=>disp(c.v,o[0]))||O[0])[0];
  if(!c.w||(c.w!=="hoy"&&!lista(c,c.w,"").length)){c.w="hoy";c.g=""}
  const s=PK[c.s];
  // lo elegido tiene que verse en la lista (salvo en el guion ya abierto): si no, se elige otra de las que se ven
  const oculta=!!s&&!c.res&&!pin&&visibles(c).indexOf(s)<0;
  if(!s||s.via!==c.v||!vale(s,c.o)||oculta){
    let g=null;
    if(c.q){g=lista(c,c.w,c.q)[0]||null}
    else{let L=lista(c,c.w,"");if(c.g&&c.w!=="hoy"){const L2=L.filter(x=>x.grupo===c.g);if(L2.length)L=L2;else c.g=""}g=(c.w==="hoy"?L[0]:sugerida(ordena(L,c.o).filter(x=>x.objetivos.indexOf(c.o)>=0),c)||sugerida(L,c))||PKS.find(x=>x.via===c.v&&vale(x,c.o)&&cuando(x)!=="")||null}
    c.s=g?g.id:"";c.kw="";c.own=false;c.hook=-1;c.fi=0}
  const S1=PK[c.s];
  if(S1&&!c.kw)c.kw=S1.kw[0];
  if(S1&&c.hook<0){const H=hookOrden(S1,c.o).pref;c.hook=H.length?H[hash(dayKey()+S1.id)%H.length]:hash(dayKey()+S1.id)%S1.pk.ganchos.length}
  if(tipoCierre(c.o)==="encuesta"&&c.n>7)c.n=7;
  if(S1)normRt(S1,c);
  return S1;
}
// ---------- piezas ----------
function rol(s,r,c){
  const P=s.pk,ST=P.stories,tc=tipoCierre(c.o);
  if(r==="gancho")return {r,lbl:LBL.gancho,txt:P.ganchos[c.hook%12].t,g:ST.gancho.graba,d:ST.gancho.dice};
  if(r==="antes")return {r,lbl:LBL.antes,txt:ST.antes.texto,g:ST.antes.graba,d:ST.antes.dice};
  if(r==="ahora"){const pr=c.o==="producto"&&P.producto_frase;return {r,lbl:pr?"Así lo uso yo":LBL.ahora,txt:pr?P.producto_frase:ST.ahora.texto,g:ST.ahora.graba,d:ST.ahora.dice}}
  if(r[0]==="v"){const v=ST.valor[+r[1]];return {r,lbl:LBL.valor,txt:v.texto,g:v.graba,d:v.dice}}
  if(r==="pregunta")return {r,lbl:LBL.pregunta,txt:ST.pregunta.texto,g:ST.pregunta.graba,d:"Aquí no hace falta que hables.",poll:ST.pregunta.opciones};
  // cierre
  if(tc==="kw")return {r,lbl:LBL.cierre.kw,txt:P.cierres_kw[c.ci%P.cierres_kw.length],g:ST.cierre.graba,d:ST.cierre.dice,kw:true};
  if(tc==="sigue")return {r,lbl:LBL.cierre.sigue,txt:P.sigueme[c.ci%P.sigueme.length],g:ST.cierre.graba,d:"Aquí no hace falta que hables."};
  return {r,lbl:LBL.cierre.encuesta,txt:ST.pregunta.texto,g:ST.cierre.graba,d:"Aquí no hace falta que hables.",poll:ST.pregunta.opciones};
}
// «Stories para TikTok»: se llega desde el Inicio de TikTok. Mismos guiones; cambian los textos de la app, los pasos y las pegatinas
// (TikTok no tiene caja de preguntas ni encuesta como Instagram: la palabra se escribe en el texto y se contesta en comentarios)
const rdTT=c=>c.t==="st"&&c.rd==="tt";
const redSt=c=>rdTT(c)?"tt":"st";
const storiesDe=(s,c)=>setsDe(c.o)[c.n].map(r=>rol(s,r,c)).map(x=>rdTT(c)&&x.lbl===LBL.pregunta?Object.assign(x,{lbl:"Pregunta"}):x);
const kwSmall=(s,red)=>(red==="tt"?"Comenta esta palabra y te mando ":"Escríbeme esta palabra y te mando ")+s.pk.recurso_corto+":";
const ctaLine=(s,kw,red)=>(red==="tt"||red==="re"?"Comenta ":"Escríbeme ")+kw+" y te mando "+s.pk.recurso_corto+(red==="st"?".":" por privado.");
// ---------- textos para copiar ----------
function txtStories(s,c){
  return storiesDe(s,c).map((x,i)=>"STORY "+(i+1)+" · "+x.lbl.toUpperCase()+"\nQué grabas: "+x.g+"\nQué escribes: "+x.txt+(x.kw?"\nAbajo, en grande: "+c.kw+" ("+kwSmall(s,redSt(c))+")":"")+(x.poll?(rdTT(c)?"\nPregunta en el texto; que te contesten en los comentarios (por ejemplo: "+x.poll.join(" / ")+")":"\nEncuesta: "+x.poll.join(" / ")):"")+"\nQué dices: "+x.d).join("\n\n");
}
function captionReel(s,c){
  const r=s.pk.reels[c.ri%s.pk.reels.length],tc=tipoCierre(c.o);
  return r.caption+"\n"+(tc==="kw"?ctaLine(s,c.kw,"re"):tc==="sigue"?s.pk.sigueme[0]:"")+(isNutri(s)&&s.via==="clientas"?"\n"+AVISO:"");
}
function captionReelH(s,c){
  const r=s.pk.reels[c.ri%s.pk.reels.length],tc=tipoCierre(c.o);
  return esc(r.caption)+"\n"+(tc==="kw"?esc(ctaLine(s,"\u0001","re")).replace("\u0001",'<span class="c2kw">'+esc(c.kw)+'</span>'):tc==="sigue"?esc(s.pk.sigueme[0]):"")+(isNutri(s)&&s.via==="clientas"?"\n"+esc(AVISO):"");
}
function txtReelPlanos(s,c){
  const r=s.pk.reels[c.ri%s.pk.reels.length],tc=tipoCierre(c.o);
  return "REEL · "+r.formato.toUpperCase()+"\nPortada: "+r.portada+"\n\n"+r.planos.map((p,i)=>"Plano "+(i+1)+": "+p.graba+(p.texto?"\nTexto: "+p.texto:"")).join("\n\n")+(tc==="kw"?"\n\nPlano final: la palabra "+c.kw+" abajo, en grande.":"")+"\n\nDescripción:\n"+captionReel(s,c);
}
// final del reel según la intención: texto plano, html (con la palabra marcada para el cambio en vivo) y ayuda
function cierreReel(s,c,preg){
  const tc=tipoCierre(c.o),P=s.pk;
  if(tc==="sigue"){const t=P.sigueme[c.ci%P.sigueme.length];return {t,h:esc(t),ay:"Va al final de la descripción."}}
  if(tc==="encuesta")return {t:preg,h:esc(preg),ay:"Termina la descripción con esta pregunta para que te contesten."};
  return {t:ctaLine(s,c.kw,"re"),h:esc(ctaLine(s,"\u0001","re")).replace("\u0001",'<span class="c2kw">'+esc(c.kw)+'</span>'),ay:"Escribe la palabra abajo en el vídeo, en grande, los dos últimos segundos."};
}
const avisoR=(s,c)=>isNutri(s)&&s.via==="clientas";
function captionFrase(s,c,f,html){
  const fin=cierreReel(s,c,f.pregunta),sg=tipoCierre(c.o)==="sigue",av=avisoR(s,c);
  if(html)return esc(f.pie)+"<br>"+(sg?esc(f.pregunta)+"<br>":"")+fin.h+(av?"<br>"+esc(AVISO):"");
  return f.pie+"\n"+(sg?f.pregunta+"\n":"")+fin.t+(av?"\n"+AVISO:"");
}
const fraseDe=(s,c)=>s.pk.frases[c.fi%s.pk.frases.length];
function txtFrase(s,c){
  const f=fraseDe(s,c),fin=cierreReel(s,c,f.pregunta),kw=tipoCierre(c.o)==="kw";
  return "REEL DE UNA FRASE · "+(ANG[f.a]||f.a).toUpperCase()+"\nGancho, la frase arriba y en grande: "+f.frase+"\nLo que enseñas, un solo plano: "+f.plano+"\nFinal: "+fin.t+(kw?" (la palabra "+c.kw+" abajo, en grande, los dos últimos segundos)":"")+"\n\nDescripción:\n"+captionFrase(s,c,f);
}
const PARTE=["hoy","mañana","pasado mañana"];
function finParte(s,c,i){return i<2?{t:"Mañana, la siguiente parte.",h:"Mañana, la siguiente parte.",ay:"",sig:true}:cierreReel(s,c,s.pk.stories.pregunta.texto)}
function txtSerie(s,c){
  const S1=s.pk.serie;
  return "SERIE DE 3 DÍAS · "+S1.titulo+"\nTres reels de una frase para tres días seguidos. En cada parte graba un solo plano de lo que dice la frase."+S1.partes.map((f,i)=>"\n\nPARTE "+(i+1)+" · "+PARTE[i].toUpperCase()+"\nFrase: "+f+"\nEscribe arriba, en pequeño: "+S1.titulo+" · parte "+(i+1)+"\nTermina la descripción con: "+(i<2?"«Mañana, la siguiente parte.»":finParte(s,c,i).t)).join("");
}
const txtReel=(s,c)=>c.rt==="serie"?txtSerie(s,c):c.rt==="planos"?txtReelPlanos(s,c):txtFrase(s,c);
function descTT(s,c){const tc=tipoCierre(c.o);return (tc==="kw"?ctaLine(s,c.kw,"tt"):s.pk.sigueme[0])+(isNutri(s)&&s.via==="clientas"?" "+AVISO:"")}
function txtTT(s,c){
  const x=s.pk.tiktok[c.ti%s.pk.tiktok.length],tc=tipoCierre(c.o);
  return "TIKTOK\nQué grabas (7 segundos, un solo plano): "+x.graba+"\nTexto arriba: "+x.pantalla+(tc==="kw"?"\nTexto abajo: Comenta "+c.kw:"")+"\nDescripción: "+descTT(s,c);
}
function txtGuia(s){const G=s.pk.guia;return G.entrega+"\n\n"+G.texto}
// ---------- vista: preguntas ----------
function viaCards(c){return '<div class="c2vias">'+Object.keys(VIAS).map(v=>'<button type="button" class="c2vc c2'+v[0]+(c.v===v?" on":"")+'" data-c2k="v" data-c2v="'+v+'" aria-pressed="'+(c.v===v)+'"><b>'+VIAS[v].n+'</b><small>'+VIAS[v].d+'</small></button>').join("")+'</div>'}
// «Stories para TikTok»: una línea que lo dice y deja pasar a las de Instagram
const avisoTT=c=>rdTT(c)?'<div class="c2kwl c2rdl"><span>Stories para <b>TikTok</b></span><button type="button" class="linkb" data-c2k="rd" data-c2v="">Verlas para Instagram</button></div>':'';
const banner=c=>c.v==="proyecto"?'<div class="c2ban p">Creando para el proyecto <small>sumar gente al equipo</small></div>':'<div class="c2ban c">Creando para clientas <small>vender y recomendar</small></div>';
// La red (interruptor de Inicio, ft_red) y el tipo de Crear van de la mano: TikTok es el vídeo de TikTok o las stories para TikTok.
const esTT=c=>c.t==="tt"||rdTT(c);
function sincRed(c){redSet(esTT(c)?"tiktok":"instagram");c.rv=redGet()}  // elegir tipo o «Verlas para Instagram» mueve el interruptor
function sigueRed(c){                                                      // si el interruptor se tocó fuera, el tipo lo sigue
  const r=redGet();if(c.rv===r)return;
  if(r==="tiktok"){if(!esTT(c)){c.t="tt";c.rd=""}}else if(esTT(c)){if(c.t==="tt")c.t="st";c.rd=""}
  c.rv=r;
}
const HERR=[["situaciones","Situaciones","Todas las situaciones del banco"],["ganchos","Ganchos",null],["cuadricula","Cuadrícula","Dónde colocar texto y palabra clave"],["revisor","Revisor","Revisa tus textos antes de publicar"],["normas","Lo que no se dice","Qué evitar en Meta y TikTok, y cómo decirlo mejor"]];
const nGanchos=()=>String(Math.floor(PKS.length*12/1000)*1000).replace(/\B(?=(\d{3})+(?!\d))/g,".");
// fila de arriba de Crear: el interruptor Instagram | TikTok y el botón «Herramientas» (abre el panel con las cinco herramientas)
function cabCrear(c){
  const h='<div class="c9row">'+redSeg()+'<button type="button" class="c9herr'+(c.herr?" on":"")+'" data-c2k="herr" aria-expanded="'+(!!c.herr)+'" aria-controls="c9pan">Herramientas</button></div>';
  if(!c.herr)return h;
  return h+'<section class="panel c9pan" id="c9pan" aria-label="Herramientas para crear"><h3>Herramientas para crear</h3>'+HERR.map(x=>'<button type="button" class="ml" data-tab="'+x[0]+'"><b>'+x[1]+'</b><small>'+(x[2]||"Más de "+nGanchos()+" ganchos escritos, por tema")+'</small></button>').join("")+'</section>';
}
const tipoTabs=c=>'<div class="c2tabs" role="group" aria-label="Qué vas a crear">'+TIPOS.map(t=>'<button type="button" class="'+(c.t===t[0]?"on":"")+'" data-c2k="t" data-c2v="'+t[0]+'" aria-pressed="'+(c.t===t[0])+'">'+t[1]+'</button>').join("")+'</div>';
function sitBtn(s,c,tema){return '<button type="button" class="c2sit'+(s.id===c.s?" on":"")+'" data-c2k="s" data-c2v="'+esc(s.id)+'">'+(tema?'<span class="c2tema">'+esc(temaNom(temaDe(s))||subNom(s.grupo))+'</span>':'')+esc(s.nombre)+(mesesTxt(s)?'<span class="c2fecha">'+esc(mesesTxt(s))+'</span>':'')+'<small>'+esc(s.escena)+'</small></button>'}
function sitsHtml(c){
  let L=lista(c,c.w,c.q);
  const el=PK[c.s];
  // la que eligió a propósito y no está en esta lista (otra temporada): se ve arriba, nunca queda elegida a escondidas
  const fuera=el&&c.pin===el.id&&L.indexOf(el)<0?'<div class="c2grp">La que has elegido</div>'+sitBtn(el,c,true):"";
  if(c.q){
    let h='<p class="c2ex">'+L.length+(L.length===1?' situación encaja':' situaciones encajan')+' con tu búsqueda</p>';
    return L.length?h+L.map(s=>sitBtn(s,c,true)).join(""):fuera+h+'<p class="c2ex">Nada con esa palabra. Prueba con otra más corta: noche, café, regalo, tiempo…</p>';
  }
  if(c.w==="hoy"&&!L.length)return fuera;
  if(c.w==="hoy")return fuera+'<p class="c2ex">Cuatro situaciones de temas distintos. Mañana salen otras. Si ninguna te encaja, toca un tema de arriba.</p>'+L.map(s=>sitBtn(s,c,true)).join("");
  const G={};L.forEach(s=>{(G[s.grupo]=G[s.grupo]||[]).push(s)});const gs=Object.keys(G);
  let h=fuera;
  if(gs.length>1)h+='<div class="c2sub">'+[["","Todo",L.length]].concat(gs.map(g=>[g,subNom(g),G[g].length])).map(x=>'<button type="button" class="'+((c.g||"")===x[0]?"on":"")+'" data-c2k="g" data-c2v="'+esc(x[0])+'">'+esc(x[1])+' <small>'+x[2]+'</small></button>').join("")+'</div>';
  const sel=c.g&&G[c.g]?[c.g]:gs;
  sel.forEach(g=>{if(sel.length>1)h+='<div class="c2grp">'+esc(subNom(g))+'</div>';h+=ordena(G[g],c.o).map(s=>sitBtn(s,c,false)).join("")});
  return h;
}
function viewForm(c){
  const O=objsVia(c.v),ob=O.find(o=>o[0]===c.o)||O[0];
  let h=cabCrear(c)+tipoTabs(c)+avisoTT(c);
  h+='<section class="c2step"><div class="c2sn"><i>1</i><b>¿Para quién creas hoy?</b></div>'+viaCards(c)+'</section>';
  const oBtn=o=>!disp(c.v,o[0])&&!(c.pin&&PK[c.pin]&&vale(PK[c.pin],o[0]))?'<div class="c2ob off"><b>'+esc(o[1])+'</b><small>Ahora no hay situaciones para esto'+(vuelve(c.v,o[0])?'. Vuelven en '+vuelve(c.v,o[0])+'.':'.')+'</small></div>':'<button type="button" class="c2ob'+(o[0]===c.o?" on":"")+'" data-c2k="o" data-c2v="'+o[0]+'" aria-pressed="'+(o[0]===c.o)+'"><b>'+esc(o[1])+'</b><small>'+esc(o[2])+'</small></button>';
  const OG=O.filter(o=>CONCRETO.indexOf(o[0])<0),OC=O.filter(o=>CONCRETO.indexOf(o[0])>=0);
  h+='<section class="c2step"><div class="c2sn"><i>2</i><b>Hoy quiero…</b></div><p class="c2ex c2tot">Cada opción cambia el gancho, las stories y el final.</p><div class="c2obs">'+OG.map(oBtn).join("")+'</div>'+(OC.length?'<div class="c2grp">O proponer algo concreto</div><div class="c2obs">'+OC.map(oBtn).join("")+'</div>':'')+'</section>';
  const T=temas(c),tot=T.reduce((a,x)=>a+x[1],0);
  h+='<section class="c2step"><div class="c2sn"><i>3</i><b>¿De qué hablas hoy?</b></div><p class="c2ex c2tot">'+(tot?'Tienes <b>'+tot+' situaciones</b> '+(c.v==="proyecto"?"para el proyecto":"para clientas")+'. Toca un tema o busca una palabra.':'Esta propuesta no tiene situaciones en las listas ahora. Puedes buscar una palabra.')+'</p>'
   +'<input id="c2q" class="c2q" type="search" placeholder="Busca: noche, café, regalo…" value="'+esc(c.q)+'" autocomplete="off">'
   +'<div class="c2temas'+(c.q?' off':'')+'">'+[["hoy",0]].concat(T).map(x=>'<button type="button" class="'+(c.w===x[0]?"on":"")+(x[0]==="hoy"?" hoy":"")+'" data-c2k="w" data-c2v="'+esc(x[0])+'">'+esc(temaNom(x[0]))+(x[1]?' <small>'+x[1]+'</small>':'')+'</button>').join("")+'</div>'
   +'<div id="c2sits">'+sitsHtml(c)+'</div></section>';
  if(c.t==="st"){const mx=tipoCierre(c.o)==="encuesta"?7:8;h+='<details class="c2more"><summary>Más opciones (ya está lo recomendado)</summary><div class="c2grp">Número de stories</div><div class="c2chips">'+[2,3,4,5,6,7,8].filter(n=>n<=mx).map(n=>'<button type="button" class="c2ch'+(c.n===n?" on":"")+'" data-c2k="n" data-c2v="'+n+'">'+n+(n===3?" (recomendado)":"")+'</button>').join("")+'</div></details>'}
  h+='<div class="c2fix c2ver" role="group" aria-label="Ver el guion"'+(PK[c.s]?'':' hidden')+'><button type="button" class="c2go" data-c2k="ver">Ver mi guion</button></div>';
  return h;
}
// ---------- vista: resultado ----------
// «fa» son los atributos de la foto de ejemplo de esa pieza (FOTOS.attrs(situación, hueco)): la vista previa se pinta sobre esa foto
// cuando la tarjeta está a punto de verse. Sin foto (no hay tipo, no hay paquete o falla la descarga) no hay dibujo de relleno ni marco
// vacío: es el bloque de texto solo (clase c2sf).
function storyBox(txt,kw,small,poll,cls,fa){
  fa=fa||"";
  return '<div class="c2story'+(cls?" "+cls:"")+(fa?" c2foto":" c2sf")+'"'+fa+'><div class="c2hook"><span>'+esc(txt)+'</span></div>'+(poll?'<div class="c2poll">'+poll.map(o=>'<span>'+esc(o)+'</span>').join("")+'</div>':'')+(kw?'<div class="c2kwz"><small>'+esc(small)+'</small><strong class="c2kw'+(kw.length>10?" ll":kw.length>7?" l":"")+'">'+esc(kw)+'</strong></div>':'')+'</div>';
}
const como=ins=>'<small class="c2como">Cómo: '+esc(FOTOS.plano(ins).c)+'</small>';
const t3=(n,lbl,txt,w)=>'<div class="c2t3'+(w?" w":"")+'"><em>'+n+' · '+lbl+'</em><p>'+txt+'</p></div>';
function kwBox(s,c){
  if(tipoCierre(c.o)!=="kw")return '<div class="c2note c2nokw">Con este objetivo no hace falta palabra clave: '+(c.o==="conocer"?'terminas invitando a seguirte.':(rdTT(c)?'terminas con una pregunta y lees lo que te contestan en los comentarios.':'terminas con una encuesta y escuchas lo que te contestan.'))+'</div>';
  const plat=c.t==="tt"||rdTT(c)?"tiktok":"meta";
  const iss=kwIssues(c.kw,w=>[ctaLine(s,w,redSt(c)==="tt"?"tt":c.t)]);
  const abierta=!!c.kwOpen||iss.length>0; // si la palabra tiene un aviso, se ve desplegada
  // una sola línea: «Tu palabra: MINUTOS · Cambiar». Al pulsar «Cambiar» se despliega lo que había antes.
  return '<div class="c2kwl"><span>Tu palabra: <b class="c2kw">'+esc(c.kw)+'</b></span><button type="button" class="linkb" data-c2k="kwo" aria-expanded="'+abierta+'" aria-controls="c2kwd" data-lbl="Cambiar">'+(abierta?"Cerrar":"Cambiar")+'</button></div>'
   +'<div id="c2kwd" class="c2kwd"'+(abierta?"":" hidden")+'>'+kwBoxHtml("c2","Tu palabra clave (cámbiala si quieres)",s.kw,c.own?"":c.kw,c.own?c.kw:"",kwWarnHtml(iss,plat),"Por ejemplo: "+s.kw[0])+'</div>';
}
// «Ver una a una»: la palabra se puede cambiar sin salir (el mismo selector de siempre, plegado bajo un enlace discreto)
function kwGrab(s,c){
  const iss=kwIssues(c.kw,w=>[ctaLine(s,w,redSt(c)==="tt"?"tt":c.t)]),abierta=!!c.kwOpen||iss.length>0;
  return '<div class="c2kwl c2gkw"><span>Tu palabra: <b class="c2kw">'+esc(c.kw)+'</b></span><button type="button" class="linkb" data-c2k="kwo" aria-expanded="'+abierta+'" aria-controls="c2kwd" data-lbl="Cambiar la palabra">'+(abierta?"Cerrar":"Cambiar la palabra")+'</button></div>'
   +'<div id="c2kwd" class="c2kwd c2gkwd"'+(abierta?"":" hidden")+'>'+kwBoxHtml("c2","Tu palabra clave (cámbiala si quieres)",s.kw,c.own?"":c.kw,c.own?c.kw:"",kwWarnHtml(iss,rdTT(c)?"tiktok":"meta"),"Por ejemplo: "+s.kw[0])+'</div>';
}
function storyCard(s,c,x,i){
    const tt=rdTT(c);
    const otro=x.r==="gancho"?'<button type="button" class="mini" data-c2k="hook">Otro gancho</button>':x.r==="cierre"&&!x.poll?'<button type="button" class="mini" data-c2k="ci">Otro cierre</button>':'';
    const peg=x.kw?(tt?'<div class="c2t3"><em>En la story</em><p>Escribe «Comenta <span class="c2kw">'+esc(c.kw)+'</span>» en grande, abajo. La gente te contesta en los comentarios.</p></div>'
      :'<div class="c2t3"><em>Pegatina</em><p>Caja de preguntas: «Escríbeme <span class="c2kw">'+esc(c.kw)+'</span>».</p></div>')
     :x.poll?(tt?'<div class="c2t3"><em>En la story</em><p>Escribe la pregunta en el texto y pide que te contesten en los comentarios. Puedes proponer: '+x.poll.map(esc).join(" o ")+'.</p></div>'
      :'<div class="c2t3"><em>Pegatina</em><p>Encuesta con dos opciones: '+x.poll.map(esc).join(" / ")+'.</p></div>'):'';
    return '<article class="c2card"><div class="c2h"><i>'+(i+1)+'</i><b>'+esc(x.lbl)+'</b>'+otro+'</div>'+storyBox(x.txt,x.kw?c.kw:"",kwSmall(s,redSt(c)),tt?null:x.poll,"",FOTOS.attrs(s.id,"st:"+x.r))
    +'<div class="c2three">'+t3(1,"Qué grabas",esc(x.g)+como(x.g))+t3(2,"Qué escribes",esc(x.txt)+(x.kw?' · '+(tt?'Comenta':'Escríbeme')+' <span class="c2kw">'+esc(c.kw)+'</span>':''),1)+t3(3,"Qué dices",esc(x.d))+'</div>'
    +peg
    +'<button type="button" class="mini" data-copy="'+esc(x.txt)+'">Copiar texto</button></article>';
}
const resStories=(s,c)=>storiesDe(s,c).map((x,i)=>storyCard(s,c,x,i)).join("");
const t3h=(n,lbl,txt,ay,w)=>'<div class="c2t3'+(w?" w":"")+'"><em>'+n+' · '+lbl+'</em><div class="c2bd">'+txt+'</div>'+(ay?'<small class="c2ay">'+ay+'</small>':'')+'</div>';
const MONTA=p2=>'<details class="c2more c2mnt"><summary>Cómo se monta en Instagram</summary><ol class="c2stp"><li>Abre Instagram, pulsa «+» y elige «Reel».</li><li>'+p2+'</li><li>Pulsa «Aa», escribe la frase y colócala arriba. Que se vea todo el vídeo.</li><li>Pulsa «Siguiente», pega la descripción y comparte.</li></ol></details>';
const MONTA_TT_ST='<details class="c2more c2mnt"><summary>Cómo se publican en TikTok</summary><ol class="c2stp"><li>Abre TikTok, pulsa «+» y elige «Story».</li><li>Graba o elige en tu galería lo que dice «Qué grabas» de cada story.</li><li>Pulsa «Aa», escribe el texto de «Qué escribes» y colócalo donde no tape tu cara.</li><li>Si hay palabra clave, escríbela en grande abajo y pide que la comenten. Publica y repite con la siguiente.</li></ol></details>';
const reelSel=(s,c)=>'<div class="c2rt" role="group" aria-label="Tipo de reel">'+[["frase","De una frase","El más fácil: un plano y una frase"],["planos","Por planos","Varios planos seguidos"]].concat(hasSerie(s)?[["serie","Serie de 3 días","Tres reels para tres días"]]:[]).map(x=>'<button type="button" class="c2ch'+(c.rt===x[0]?" on":"")+'" data-c2k="rt" data-c2v="'+x[0]+'" aria-pressed="'+(c.rt===x[0])+'"><b>'+x[1]+'</b><small>'+x[2]+'</small></button>').join("")+'</div>';
function resFrase(s,c){
  const f=fraseDe(s,c),tc=tipoCierre(c.o),fin=cierreReel(s,c,f.pregunta);
  return '<article class="c2card"><div class="c2h"><i>▶</i><b>Tu reel · De una frase</b><button type="button" class="mini" data-c2k="fi">Otra frase</button></div>'
  +'<span class="c2ang">'+esc(ANG[f.a]||f.a)+'</span>'
  +'<div class="c2meta"><span>1 plano</span><span>De 5 a 8 segundos</span><span>No hace falta hablar</span></div>'
  +storyBox(f.frase,tc==="kw"?c.kw:"",tc==="kw"?kwSmall(s,"tt"):"",null,"tt",FOTOS.attrs(s.id,"rf:"+(c.fi%s.pk.frases.length)))
  +t3h(1,"Gancho: la frase que se lee",esc(f.frase),"Es lo primero que se ve. Escríbela arriba, en grande, desde el primer segundo.",1)
  +t3h(2,"Lo que enseñas: el plano",esc(f.plano)+como(f.plano),"Un solo plano, sin cortes. No hace falta que salga tu cara.")
  +t3h(3,"Final: lo que pides",fin.h,fin.ay,1)
  +'<div class="c2t3 w"><em>Descripción para copiar</em><p>'+captionFrase(s,c,f,1)+'</p></div><button type="button" class="mini" data-copy="'+esc(captionFrase(s,c,f))+'">Copiar descripción</button>'
  +MONTA("Elige el vídeo de tu galería y recórtalo a unos 7 segundos.")
  +'<button type="button" class="mini" data-copy="'+esc(txtFrase(s,c))+'">Copiar todo el reel</button></article>';
}
function resPlanos(s,c){
  const r=s.pk.reels[c.ri%s.pk.reels.length],tc=tipoCierre(c.o),P=r.planos;
  const fin=P.length?P[P.length-1].seg.split("-")[1]:"10";
  const ri=c.ri%s.pk.reels.length,pl=(p,i)=>{const th=FOTOS.thumb(s.id,"rp:"+ri+":"+i);return '<div class="c2pl'+(th?" c2plt":"")+'"><i>'+(i+1)+'</i><span>'+esc(p.graba)+(p.texto?'<br><b>Texto:</b> '+esc(p.texto):'')+'</span>'+th+'</div>'};
  const med=P.slice(1,-1),ult=P.length>1?P[P.length-1]:null;
  return '<article class="c2card"><div class="c2h"><i>▶</i><b>Tu reel · '+esc(r.formato)+'</b><button type="button" class="mini" data-c2k="ri">Otra idea</button></div>'
  +'<div class="c2meta"><span>'+P.length+' planos</span><span>Unos '+esc(String((+fin||10)+(tc==="kw"?2:0)))+' segundos</span></div>'
  +t3h(1,"Gancho",'<b>Portada: '+esc(r.portada)+'</b>'+(P.length?pl(P[0],0):''),"Lo que hace que no pasen de largo.")
  +(med.length?t3h(2,"Lo que enseñas",med.map((p,i)=>pl(p,i+1)).join(""),"Cada plano, una sola cosa."):'')
  +(ult?t3h(3,"Final",pl(ult,P.length-1)+(tc==="kw"?'<span class="c2kwbig c2kw">'+esc(c.kw)+'</span><span class="c2kwcap">Abajo, en grande, los dos últimos segundos.</span>':tc==="sigue"?'<b>'+esc(s.pk.sigueme[0])+'</b>':''),"Lo último que se ve es lo que pides."):'')
  +'<div class="c2t3 w"><em>Descripción para copiar</em><p>'+captionReelH(s,c).replace(/\n/g,"<br>")+'</p></div><button type="button" class="mini" data-copy="'+esc(captionReel(s,c))+'">Copiar descripción</button>'
  +'<div class="c2note">Graba de día, con luz de ventana. El texto de cada plano se tiene que leer en 3 segundos.'+(isNutri(s)&&s.via==="clientas"?' Al hablar de un complemento, deja el aviso en la descripción.':'')+'</div>'
  +MONTA("Elige los vídeos de tu galería en el orden de los planos.")
  +'<button type="button" class="mini" data-copy="'+esc(txtReelPlanos(s,c))+'">Copiar todo el reel</button></article>';
}
function resSerie(s,c){
  const S1=s.pk.serie;
  return '<article class="c2card"><div class="c2h"><i>▶</i><b>Tu serie · '+esc(S1.titulo)+'</b></div>'
  +'<p class="c2ex c2sx">Tres reels de una frase para tres días seguidos. Quien ve el primero vuelve a por el siguiente.</p>'
  +'<p class="c2ay c2sx">En cada parte graba un solo plano de lo que dice la frase.</p>'
  +S1.partes.map((f,i)=>{const fin=finParte(s,c,i),th=FOTOS.thumb(s.id,"se:"+i);
    return '<div class="c2t3 c2part"><em>Parte '+(i+1)+' · '+PARTE[i]+'</em>'+(th?'<div class="c2pf"><p class="c2big">'+esc(f)+'</p>'+th+'</div>':'<p class="c2big">'+esc(f)+'</p>')+'<small class="c2ay">Escribe arriba, en pequeño: '+esc(S1.titulo)+' · parte '+(i+1)+'</small>'
    +'<small class="c2fn"><b>Final:</b> '+(fin.sig?'Termina la descripción con: «'+fin.h+'»':fin.h)+(fin.ay?'<br>'+fin.ay:'')+'</small>'
    +'<button type="button" class="mini" data-copy="'+esc(f)+'">Copiar la frase</button></div>'}).join("")
  +'<button type="button" class="mini" data-copy="'+esc(txtSerie(s,c))+'">Copiar la serie entera</button></article>';
}
const resReel=(s,c)=>c.rt==="serie"?resSerie(s,c):c.rt==="planos"?resPlanos(s,c):resFrase(s,c);
function resTT(s,c){
  const x=s.pk.tiktok[c.ti%s.pk.tiktok.length],tc=tipoCierre(c.o),fm={clip_texto:"Clip con texto",esta_soy_yo:"Esta soy yo que…",humor_vida:"Humor de la vida real"}[x.formato]||"Clip";
  return '<article class="c2card"><div class="c2h"><i>▶</i><b>Tu TikTok · '+esc(fm)+'</b><button type="button" class="mini" data-c2k="ti">Otra idea</button></div>'
  +'<div class="c2meta"><span>7 segundos</span><span>1 plano, sin cortes</span><span>No hace falta hablar</span></div>'
  +storyBox(x.pantalla,tc==="kw"?c.kw:"",tc==="kw"?kwSmall(s,"tt"):"",null,"tt",FOTOS.attrs(s.id,"tt:"+(c.ti%s.pk.tiktok.length)))
  +'<div class="c2tl"><div class="c2tlb"><span>Texto en pantalla todo el vídeo</span></div><div class="c2tlb s"><span>Sonido de moda bajito</span></div><div class="c2tlx"><b>0 s</b><b>3 s</b><b>7 s</b></div></div>'
  +'<div class="c2how"><div class="c2hw"><i>1</i><div><b>Graba 7 segundos</b><p>'+esc(x.graba)+' Móvil apoyado, con luz de día.</p></div></div>'
  +'<div class="c2hw"><i>2</i><div><b>Pon este texto arriba</b><p class="big">'+esc(x.pantalla)+'</p><p>Toca «Aa», pega el texto y súbelo a la parte de arriba. Que no tape tu cara.</p></div></div>'
  +(tc==="kw"?'<div class="c2hw"><i>3</i><div><b>Pon la palabra abajo</b><p>Otro texto en grande, en la parte de abajo: «Comenta <span class="c2kw">'+esc(c.kw)+'</span>».</p></div></div>':'')
  +'<div class="c2hw"><i>'+(tc==="kw"?4:3)+'</i><div><b>Sonido y descripción</b><p>Elige un sonido en tendencia y bájale el volumen. Descripción: «'+esc(descTT(s,c)).replace(/(Comenta )([^ ]+)/,'$1<span class="c2kw">$2</span>')+'»</p></div></div>'
  +'<div class="c2hw"><i>'+(tc==="kw"?5:4)+'</i><div><b>Publica</b><p>'+(s.via==="clientas"&&(s.productos||[]).length?'Activa «Revelar contenido comercial». ':'')+'Sube dos vídeos al día, separados al menos 4 horas.</p></div></div></div>'
  +'<div class="c2note"><b>Por qué funciona:</b> el texto tarda más en leerse que el vídeo en acabar, así que lo ven dos veces.'+(s.via==="proyecto"?' <b>Nunca</b> expliques el proyecto en TikTok: eso va por WhatsApp.':'')+'</div>'
  +'<button type="button" class="mini" data-copy="'+esc(txtTT(s,c))+'">Copiar texto y descripción</button></article>';
}
function resGuia(s,c){
  const G=s.pk.guia,tc=tipoCierre(c.o),mg=typeof mgSit==="function"?mgSit(s):null,mini=!!(mg&&mgOk(mg));
  const cab='<details class="c2card c2guia"><summary><b>'+(tc==="kw"?(rdTT(c)?"Lo que mandas cuando comenten la palabra":"Lo que mandas cuando te escriban"):"Si alguien te escribe por esto")+'</b><small>'+esc(cap(s.pk.recurso_corto))+'</small></summary>';
  const pie='<div class="c2t3"><em>2 · A los 2 o 3 días</em><p>'+esc(G.seguimiento)+'</p></div><button type="button" class="mini" data-copy="'+esc(G.seguimiento)+'">Copiar seguimiento</button>'
  +'<div class="c2t3"><em>3 · Si sigue la conversación</em><p>Pásala a WhatsApp con un mensaje corto y sin prisa.</p></div></details>';
  if(!mini) // sin mini guía válida: el texto y la tarjeta, como antes
    return cab+'<div class="c2t3"><em>1 · Mensaje con la guía</em><p>'+esc(G.entrega)+'</p></div><pre class="c2pre">'+esc(G.texto)+'</pre>'
    +'<button type="button" class="mini" data-copy="'+esc(txtGuia(s))+'" data-ct="pk:'+esc(s.id)+'">Copiar mensaje y guía</button>'
    +'<div class="c2t3"><em>Tarjeta para guardar o compartir</em></div>'+tjBloque("pk:"+s.id)+pie;
  // la mini guía se maqueta y se pinta solo cuando este desplegable está abierto y el bloque entra en pantalla (mgScan)
  const tj=tjBloque("pk:"+s.id,true); // el usuario de Instagram ya está en la mini guía
  return cab+'<div class="c2t3"><em>1 · Mensaje con la guía</em><p>'+esc(G.entrega)+'</p></div>'
  +'<button type="button" class="mini" data-copy="'+esc(G.entrega)+'" data-ct="pk:'+esc(s.id)+'">Copiar mensaje</button>'
  +'<div class="c2t3"><em>La mini guía que le mandas</em></div>'+mgBloque(mg)
  +'<details class="c2dd"><summary><b>O solo el texto, por si prefieres mandarlo escrito</b></summary><pre class="c2pre">'+esc(G.texto)+'</pre><button type="button" class="mini" data-copy="'+esc(G.texto)+'">Copiar el texto de la guía</button></details>'
  +(tj?'<details class="c2dd"><summary><b>Versión corta en una sola imagen</b></summary>'+tj+'</details>':'')
  +pie;
}
function resExtras(s){
  const P=s.pk.planos,pr=prodList(s);
  return '<details class="c2card"><summary><b>Más ideas de qué grabar</b><small>sin cara, con soltura o a cámara</small></summary>'
  +[["sin_cara","Sin enseñar la cara"],["soltura","Se te ve, pero no hablas"],["camara","Hablando a cámara"]].map(k=>'<div class="c2t3"><em>'+k[1]+'</em><div class="c2ideas">'+P[k[0]].map((x,i)=>{const th=FOTOS.thumb(s.id,"id:"+k[0]+":"+i);return '<div class="c2idea'+(th?" c2idt":"")+'">'+th+'<span>'+esc(x)+'</span></div>'}).join("")+'</div></div>').join("")
  +'<div class="c2t3"><em>Otros ganchos para esta situación</em><p>'+s.pk.ganchos.map(g=>esc(g.t)).join("<br>")+'</p></div></details>'
  +(pr.length?'<div class="c2note c2prods"><b>Productos de esta situación:</b><ul class="c2pr">'+pr.map(p=>'<li>'+FOTOS.prodThumb(p.id)+'<span class="c2pn">'+esc(p.nombre_corto||p.nombre)+'</span></li>').join("")+'</ul></div>':'')
  +(isNutri(s)&&s.via==="clientas"?'<div class="c2note">Al hablar de nutrición, solo sabor, preparación, momento y rutina. Si nombras un complemento, añade: «'+AVISO+'»</div>':'');
}
function txtTodo(s,c){
  const head=(c.t==="st"?c.n+" STORIES"+(rdTT(c)?" PARA TIKTOK":""):c.t==="re"?"REEL":"TIKTOK")+" · "+objLabel(c.v,c.o)+" · "+s.nombre;
  const body=c.t==="st"?txtStories(s,c):c.t==="re"?txtReel(s,c):txtTT(s,c);
  return head+"\n\n"+body+(tipoCierre(c.o)==="kw"?"\n\nLO QUE MANDAS\n"+txtGuia(s)+"\n\nSEGUIMIENTO\n"+s.pk.guia.seguimiento:"");
}
// barra fija de acciones del resultado (encima de la barra de abajo): copiar todo, guardar en la semana y, en Stories, otro gancho
function barraAcc(s,c){
  const pl=typeof PL!=="undefined"&&PL.barBtn?PL.barBtn(c):"";
  return '<div class="c2fix c2bar" role="group" aria-label="Acciones del guion"><button type="button" class="c2go c2fb" data-copy="'+esc(txtTodo(s,c))+'">Copiar todo</button>'+pl
   +(c.t==="st"?'<button type="button" class="c2fb c2fb2" data-c2k="hook">Otro gancho</button>':'')+'</div>';
}
// modo grabación (Stories): una story por pantalla, con Anterior / Siguiente fijos abajo
// Para qué sirve cada story según su papel (lo primero que se explica en la pantalla)
const SIRVE={gancho:"Que no pasen de largo",antes:"Contar cómo lo hacías antes",ahora:"Contar cómo lo haces ahora",producto:"Enseñar cómo lo usas tú",valor:"Dar un consejo que se pueda copiar",enc:"Que te contesten con un toque",kw:"Pedir la palabra",sigue:"Invitar a que te sigan"};
function sirvePara(x,c){
  if(x.poll)return rdTT(c)?"Que te contesten en los comentarios":SIRVE.enc;
  const r=x.r;
  if(r==="gancho"||r==="antes")return SIRVE[r];
  if(r==="ahora")return c.o==="producto"?SIRVE.producto:SIRVE.ahora;
  if(r[0]==="v")return SIRVE.valor;
  if(r==="pregunta")return rdTT(c)?"Que te contesten en los comentarios":SIRVE.enc;
  return x.kw?SIRVE.kw:SIRVE.sigue;
}
const NO_HABLAR=/^(?:solo el texto, )?(?:aquí )?no hace falta (?:hablar|que hables)\.$/i; // las dos frases fijas de «no hables»
function viewGrab(c,s){
  const L=storiesDe(s,c),n=L.length;
  c.gi=Math.max(0,Math.min(n-1,+c.gi||0));
  const x=L[c.gi],pl=FOTOS.plano(x.g),mudo=NO_HABLAR.test(x.d),ult=c.gi===n-1;
  const otro=x.r==="gancho"?'<button type="button" class="mini" data-c2k="hook">Otro gancho</button>':x.r==="cierre"&&!x.poll?'<button type="button" class="mini" data-c2k="ci">Otro cierre</button>':'';
  const tt=rdTT(c);
  const peg=x.kw?(tt?'<small class="c2gpeg">En la story: escribe «Comenta <span class="c2kw">'+esc(c.kw)+'</span>» en grande, abajo.</small>':'<small class="c2gpeg">Pegatina: caja de preguntas con «Escríbeme <span class="c2kw">'+esc(c.kw)+'</span>».</small>')
   :x.poll?(tt?'<small class="c2gpeg">En la story: escribe la pregunta y pide que te contesten en los comentarios.</small>':'<small class="c2gpeg">Pegatina: encuesta con dos opciones, '+x.poll.map(esc).join(" y ")+'.</small>'):'';
  const paso=(k,lbl,body)=>'<div class="c2gst"><i>'+k+'</i><div><em>'+lbl+'</em>'+body+'</div></div>';
  return '<div class="c2gtop"><button type="button" class="back" data-c2k="grabx">‹ Salir</button><b class="c2gpos">Story '+(c.gi+1)+' de '+n+'</b></div>'
   +'<div class="c2gbar" aria-hidden="true">'+L.map((_,i)=>'<i class="'+(i<c.gi?"hecha":i===c.gi?"ahora":"")+'"></i>').join("")+'</div>'
   +(tipoCierre(c.o)==="kw"?kwGrab(s,c):'')
   +'<div class="c2gone">'
   +'<div class="c2gsirve"><small>Esta story sirve para</small><div class="c2gtit">'+esc(sirvePara(x,c))+'</div></div>'
   +'<div class="c2gcols"><div class="c2gprev">'+storyBox(x.txt,x.kw?c.kw:"",kwSmall(s,redSt(c)),tt?null:x.poll,"",FOTOS.attrs(s.id,"st:"+x.r))+'</div>'
   +'<div class="c2gplano"><small>El plano</small><b>'+esc(pl.t)+'</b><p>'+esc(pl.c)+'</p><span class="c2gpill">'+(mudo?"No hace falta hablar":"Dilo con tus palabras")+'</span></div></div>'
   +'<div class="c2gsteps">'+paso(1,"Graba",'<p>'+esc(x.g)+'</p>')
   +paso(2,"Escribe",'<p class="b">'+esc(x.txt)+'</p>'+peg+'<div class="c2gacc"><button type="button" class="mini" data-copy="'+esc(x.txt)+'">Copiar texto</button>'+otro+'</div>')
   +paso(3,"Di",'<p>'+esc(x.d)+'</p>')+'</div></div>'
   +'<div class="c2fix c2gnav" role="group" aria-label="Cambiar de story"><button type="button" class="c2fb" data-c2k="gprev"'+(c.gi===0?" disabled":"")+'>Anterior</button><span class="c2gcnt" aria-live="polite">'+(c.gi+1)+' de '+n+'</span>'
   +(ult?'<button type="button" class="c2go c2fb" data-c2k="grabx">Terminar</button>':'<button type="button" class="c2go c2fb" data-c2k="gnext">Siguiente</button>')+'</div>';
}
function viewRes(c,s){
  if(c.grab===undefined)c.grab=!!ls(GRAB_KEY);
  if(c.t==="st"&&c.grab)return '<div class="c2gr">'+viewGrab(c,s)+'</div>';
  let h='<button type="button" class="back" data-c2k="edit">‹ Cambiar las respuestas</button>'+tipoTabs(c)+avisoTT(c);
  // el aviso de «para quién» va dentro del resumen (una caja menos arriba)
  h+='<div class="c2sum '+(c.v==="proyecto"?"p":"c")+'"><b>'+(c.t==="st"?c.n+(rdTT(c)?" stories para TikTok":" stories"):c.t==="re"?"Un reel":"Un vídeo de TikTok")+' · '+esc(VIAS[c.v].n)+'</b>'+esc(objLabel(c.v,c.o))+' · '+esc(s.nombre)+'</div>';
  if(c.t==="st")h+='<div class="c2chips c2nst" role="group" aria-label="Número de stories">'+[2,3,4,5,6,7,8].filter(n=>n<=(tipoCierre(c.o)==="encuesta"?7:8)).map(n=>'<button type="button" class="c2ch'+(c.n===n?" on":"")+'" data-c2k="n" data-c2v="'+n+'">'+n+'</button>').join("")+'<small>stories</small><button type="button" class="c2ch c2gb" data-c2k="grab">Ver una a una</button></div>';
  h+=kwBox(s,c);
  if(c.t==="re")h+=reelSel(s,c);
  h+=c.t==="st"?resStories(s,c)+(rdTT(c)?MONTA_TT_ST:""):c.t==="re"?resReel(s,c):resTT(s,c);
  h+=resGuia(s,c)+resExtras(s);
  h+=(typeof PL!=="undefined"?PL.resBox(c,s):"");
  h+='<div class="c2acts"><button type="button" class="c2go" data-copy="'+esc(txtTodo(s,c))+'">Copiar todo</button><button type="button" class="mini" data-c2k="save">Guardar en mi cuenta</button></div>';
  h+='<div class="c2chk"><b>Antes de publicar</b><div>El texto se lee bien y no tapa tu cara</div>'+(tipoCierre(c.o)==="kw"?'<div>La palabra clave se lee bien abajo</div><div>Tienes preparado el mensaje con la guía</div>':'<div>Vas a contestar a quien te responda</div>')+'</div>';
  return h+barraAcc(s,c);
}
// guion de solo lectura (para Mi semana): mismas tarjetas que en Crear, sin los botones que cambian Crear
function guionRO(it){
  const s=PK[it.s];if(!s)return "";
  const c={t:it.t,v:it.v,o:vale(s,it.o)?it.o:s.objetivos[0],s:it.s,n:Math.max(2,Math.min(8,+it.n||3)),kw:it.kw||s.kw[0],hook:(+it.hook||0)%12,ci:+it.ci||0,ri:+it.ri||0,ti:+it.ti||0,rt:it.rt,fi:it.fi,rd:it.rd==="tt"?"tt":""};
  normRt(s,c);
  if(tipoCierre(c.o)==="encuesta"&&c.n>7)c.n=7;
  let h=c.t==="st"?resStories(s,c):c.t==="re"?resReel(s,c):resTT(s,c);
  h=h.replace(/<button type="button" class="mini" data-c2k="(hook|ci|ri|ti|fi)">[^<]*<\/button>/g,"");
  return h+resGuia(s,c)+'<button type="button" class="c2go" data-copy="'+esc(txtTodo(s,c))+'">Copiar todo este guion</button>';
}
function viewCrear2(){
  if(!PKS.length)return '<section class="panel"><h2>Crear</h2><p class="lead">No se han cargado las situaciones. Cierra y vuelve a abrir la app.</p></section>';
  const c=st();sigueRed(c);const s=asegurar();
  return '<div class="c2 c2hasfix">'+(typeof PL!=="undefined"?PL.destino(c):"")+(c.res&&s?viewRes(c,s):viewForm(c))+'</div>';
}
// ---------- SITUACIONES (herramienta de Crear) ----------
function viewSits2(){
  const v=S.c2sv||"clientas",q=S.c2sq||"";
  const qq=norm(q).trim().split(/\s+/).filter(Boolean);
  const L=PKS.filter(s=>s.via===v&&(!qq.length||qq.every(x=>norm([s.nombre,s.escena,s.grupo,s.recurso].join(" ")).indexOf(x)>=0)));
  const G={};L.forEach(s=>{(G[s.grupo]=G[s.grupo]||[]).push(s)});
  return '<section class="panel"><h2>Situaciones</h2><p class="lead">'+PKS.length+' momentos de la vida real, cada uno con sus ganchos, stories, reels, TikTok y la guía que mandas.</p><div class="c2vias">'+Object.keys(VIAS).map(x=>'<button type="button" class="c2vc c2'+x[0]+(v===x?" on":"")+'" data-c2k="sv" data-c2v="'+x+'"><b>'+VIAS[x].n+'</b><small>'+PKS.filter(s=>s.via===x).length+' situaciones</small></button>').join("")+'</div><input id="c2sq" class="c2q" type="search" placeholder="Busca una situación" value="'+esc(q)+'" autocomplete="off"></section>'
  +'<div id="c2slist">'+sitsListHtml(G,q)+'</div>';
}
function sitsListHtml(G,q){return Object.keys(G).map(g=>'<details class="panel c2gd"'+(q?" open":"")+'><summary>'+esc(g)+' <span>'+G[g].length+'</span></summary>'+G[g].map(s=>'<div class="c2srow"><b>'+esc(s.nombre)+'</b><small>'+esc(s.escena)+'</small><small>Palabra clave: <b>'+esc(s.kw[0])+'</b> · Mandas: '+esc(s.pk.recurso_corto)+'</small><button type="button" class="mini" data-c2k="use" data-c2v="'+esc(s.id)+'">Crear con esta</button></div>').join("")+'</details>').join("")||VIS.sinRes('Nada con esa búsqueda. Prueba con una sola palabra.',"c2sq")}
// ---------- eventos ----------
function abrir(t,v,o,sid,directo,red){
  const c=st();c.t=t||c.t;c.v=v||c.v;c.o=o||c.o;c.q="";c.res=!!sid;c.gi=0;c.kwOpen=false;c.pin=sid||"";c.rd=red==="tt"&&c.t==="st"?"tt":"";
  if(sid){const s=PK[sid];if(s){c.s=s.id;c.v=s.via;c.w=temaDe(s)||"hoy";c.g=c.w!=="hoy"&&lista(c,c.w,"").length>25?s.grupo:"";c.kw=s.kw[0];c.own=false;c.hook=-1;c.fi=0;if(!vale(s,c.o))c.o=s.objetivos[0]}}
  else c.s="";
  if(directo){c.w="hoy";c.g="";asegurar();c.res=!!c.s} // la idea del día: va directo al guion (se puede volver a las respuestas)
  c.ri=0;c.ti=0;c.ci=0;c.fi=0;c.herr=false;sincRed(c);
  go("crear");
}
document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button[data-c2k]");if(!b)return;
  const c=st(),k=b.dataset.c2k,v=b.dataset.c2v;
  switch(k){
   case "t":c.t=v==="re"||v==="tt"?v:"st";if(c.t!=="st")c.rd="";sincRed(c);render(true);break;
   case "herr":c.herr=!c.herr;render(true);break;
   case "v":if(VIAS[v]&&c.v!==v){c.v=v;c.s="";c.kw="";c.q="";c.pin=""}render(true);break;
   case "o":c.o=v;c.s="";c.kw="";c.hook=-1;c.pin="";render(true);break;
   case "w":{c.pin="";c.w=v;c.g="";c.q="";c.s="";c.kw="";const L=v==="hoy"?[]:lista(c,v,"");if(L.length>25)c.g=L[0].grupo;render(true);break}
   case "g":c.g=v||"";c.s="";c.kw="";c.pin="";render(true);break;
   case "s":if(PK[v]){c.pin="";c.s=v;c.kw=PK[v].kw[0];c.own=false;c.hook=-1;c.ci=0;c.ri=0;c.ti=0;c.fi=0;c.gi=0}render(true);break;
   case "n":c.n=Math.max(2,Math.min(8,+v||3));render(true);break;
   case "ver":c.res=true;c.kwOpen=false;c.gi=0;render();break;
   case "kwo":c.kwOpen=!c.kwOpen;{const d=document.getElementById("c2kwd");if(d){d.hidden=!c.kwOpen;b.textContent=c.kwOpen?"Cerrar":(b.dataset.lbl||"Cambiar");b.setAttribute("aria-expanded",c.kwOpen);if(c.kwOpen){const i=d.querySelector(".kwin");if(i&&c.own)try{i.focus({preventScroll:true})}catch(e){}}}}break;
   case "grab":c.grab=true;c.gi=0;ls(GRAB_KEY,1);render();break;
   case "grabx":c.grab=false;ls(GRAB_KEY,0);render();break;
   case "gprev":c.gi=Math.max(0,(+c.gi||0)-1);render();break;
   case "gnext":c.gi=(+c.gi||0)+1;render();break;
   case "edit":c.res=false;render();break;
   case "hook":{const s=PK[c.s];if(s){const T=hookOrden(s,c.o).todos,i=T.indexOf(c.hook%12);c.hook=T[(i+1)%T.length]}render(true);break}
   case "ci":c.ci++;render(true);break;
   case "ri":c.ri++;render(true);break;
   case "ti":c.ti++;render(true);break;
   case "fi":c.fi=(+c.fi||0)+1;render(true);break;
   case "rt":c.rt=v==="planos"||v==="serie"?v:"frase";render(true);break;
   case "save":{const s=PK[c.s];if(!s)break;const G=ls("ft_guiones")||[];G.unshift({titulo:({st:"Stories",re:"Reel",tt:"TikTok"}[c.t])+" · "+s.nombre,fecha:new Date().toLocaleDateString("es-ES"),texto:txtTodo(s,c)});ls("ft_guiones",G.slice(0,40));toast("Guardado en Mi cuenta");break}
   case "go":{const p=String(v||"").split("|");abrir(p[0],p[1],p[2],"");break}
   case "hoy":{const p=String(v||"").split("|");abrir(p[0],p[1],p[2],"",true,p[3]);break}
   case "rd":c.rd=v==="tt"?"tt":"";c.kwOpen=false;sincRed(c);render(true);break;
   case "use":{const s=PK[v];if(s)abrir(st().t,s.via,vale(s,st().o)?st().o:(s.objetivos.indexOf("escriban")>=0?"escriban":s.objetivos[0]),s.id);break}
   case "sv":S.c2sv=v==="proyecto"?"proyecto":"clientas";S.c2sq="";render(true);break;
  }
});
document.addEventListener("input",e=>{
  const el=e.target;if(!el)return;
  if(el.id==="c2q"){const c=st();c.q=el.value.slice(0,40);c.pin="";asegurar();const box=document.getElementById("c2sits");if(box)box.innerHTML=sitsHtml(c);const tm=document.querySelector(".c2temas");if(tm)tm.classList.toggle("off",!!c.q);const fx=document.querySelector(".c2ver");if(fx)fx.hidden=!PK[c.s];return}
  if(el.id==="c2sq"){S.c2sq=el.value.slice(0,40);const v=S.c2sv||"clientas",qq=norm(S.c2sq).trim().split(/\s+/).filter(Boolean);const L=PKS.filter(s=>s.via===v&&(!qq.length||qq.every(x=>norm([s.nombre,s.escena,s.grupo,s.recurso].join(" ")).indexOf(x)>=0)));const G={};L.forEach(s=>{(G[s.grupo]=G[s.grupo]||[]).push(s)});const box=document.getElementById("c2slist");if(box)box.innerHTML=sitsListHtml(G,S.c2sq)}
});
KWT.c2=(kw,own)=>{
  const c=st(),s=PK[c.s];if(!s)return;
  const prev=c.kw;
  c.kw=kw||s.kw[0];c.own=!!own&&!!kw;
  document.querySelectorAll(".c2 .c2kw").forEach(x=>{x.textContent=c.kw});
  document.querySelectorAll(".c2 .c2kwz strong").forEach(x=>{x.classList.toggle("l",c.kw.length>7&&c.kw.length<=10);x.classList.toggle("ll",c.kw.length>10)});
  document.querySelectorAll(".c2 [data-copy]").forEach(x=>{x.dataset.copy=x.classList.contains("c2go")?txtTodo(s,c):kwSwap(x.dataset.copy,prev,c.kw)});
  kwShowWarn("c2",kwIssues(c.kw,w=>[ctaLine(s,w,redSt(c)==="tt"?"tt":c.t)]),c.t==="tt"||rdTT(c)?"tiktok":"meta");
};
Object.assign(VIEWS,{crear:viewCrear2,situaciones:viewSits2});
return {guionRO,PK,PKS,disp,vuelve,abrir,hookOrden,setsDe,temaDe,vale,storiesDe,txtTodo,lista,asegurar,cuando,objLabel,tipoCierre,objsVia,sugerida,st};
})();

// ===== Fam Studio · TikTok LIVE, Prospectar, Beauty Party, Reto, Embarazo, Ganchos, 5·5·5 y búsqueda por palabra =====
// Todo el contenido llega de DB.extra y DB.paquetes (JSON descifrado). Todo texto pasa por esc().
const XT=(function(){
const X=DB.extra||{};
const LIVE=X.tiktok_live||{},PRO=X.prospectar||{},NI=X.nutri_interna||{};
const ul=a=>(a&&a.length)?'<ul class="xul">'+a.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul>':"";
const ol=a=>(a&&a.length)?'<ol class="xol">'+a.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ol>':"";
const cp=t=>'<button type="button" class="mini" data-copy="'+esc(t)+'">Copiar</button>';
const msgs=a=>(a||[]).map(t=>'<div class="xmsg"><p>'+esc(t)+'</p>'+cp(t)+'</div>').join("");
const P=(t,b,cls)=>'<section class="panel'+(cls?" "+cls:"")+'">'+(t?'<h3>'+esc(t)+'</h3>':'')+b+'</section>';
const D=(t,b,open)=>'<details class="panel xd"'+(open?" open":"")+'><summary>'+esc(t)+'</summary>'+b+'</details>';
const H=(t,sub,badge)=>'<section class="panel xh">'+(badge?'<span class="rbadge">'+esc(badge)+'</span>':'')+'<h2>'+esc(t)+'</h2>'+(sub?'<p class="lead">'+esc(sub)+'</p>':'')+'</section>';
const prodN=id=>PROD[id]?PROD[id].nombre:"";
const linkA=(l,u)=>{const v=linkOk(u);return v?'<a class="eql" href="'+esc(v)+'" target="_blank" rel="noopener noreferrer"><span class="eqlt"><b>'+esc(l)+'</b><small>'+esc(new URL(v).hostname)+'</small></span><span class="eqlo">Abrir</span></a>':""};

// ---------- TikTok LIVE (C13) ----------
// Datos: DB.extra.tiktok_live (para_que, requisitos, antes, caminos{clientas,proyecto}, si_pasa, no_digas, despues, errores).
// Estado de la usuaria: fs_live_antes y fs_live_despues ({indice:1}). «Seguirlo en directo» es una capa a pantalla completa (#lvseg).
const LV_CAM=[["clientas","Directo para clientas","Enseñas lo que usas y quien te ve te pide lo que prometes"],["proyecto","Directo para el proyecto","Cuentas tu día y quien te ve te sigue y te escribe"]];
const LV_K={antes:"fs_live_antes",despues:"fs_live_despues"};
const lvDone=k=>{const d=ls(LV_K[k]);return (d&&typeof d==="object")?d:{}};
function lvCheck(k,lista){
  const d=lvDone(k),n=lista.filter((_,i)=>d[i]).length;
  return '<p class="lv-cnt" id="lv_cnt_'+k+'" role="status" aria-live="polite">'+n+' de '+lista.length+' hechas</p><div class="lv-ck" role="group" aria-label="Lista">'
   +lista.map((t,i)=>'<button type="button" class="lv-it'+(d[i]?" on":"")+'" role="checkbox" aria-checked="'+(d[i]?"true":"false")+'" data-lv="ck" data-l="'+k+'" data-i="'+i+'"><span class="lv-box" aria-hidden="true"></span><span class="lv-tx">'+esc(t)+'</span></button>').join("")
   +'</div><div class="acts"><button type="button" class="mini" data-lv="cero" data-l="'+k+'">Empezar de cero</button></div>';
}
function lvGuion(g,cam){
  return '<details class="lv-g"><summary><span class="lv-gt"><b>'+esc(g.titulo)+'</b><small>'+esc(g.duracion)+'</small></span></summary>'
   +'<div class="lv-gb"><p class="lv-nec"><b>Qué necesitas.</b> '+esc(g.necesitas)+'</p><ol class="lv-tl">'
   +g.bloques.map(b=>'<li class="lv-b"><span class="lv-min">Min '+esc(b.min)+'</span><div><p class="lv-h"><b>Haces.</b> '+esc(b.que_haces)+'</p><p class="lv-d"><b>Dices.</b> <span>«'+esc(b.dices)+'»</span></p><button type="button" class="mini" data-copy="'+esc(b.dices)+'" aria-label="Copiar lo que dices en el minuto '+esc(b.min)+'">Copiar lo que dices</button></div></li>').join("")
   +'</ol><div class="acts"><button type="button" class="btn big" data-lv="seguir" data-g="'+esc(g.id)+'" data-c="'+cam+'">Seguirlo en directo</button></div></div></details>';
}
function viewLive(){
  const C=LIVE.caminos||{},sel=(S.xlive==="clientas"||S.xlive==="proyecto")?S.xlive:"";
  const fr=String(LIVE.para_que||"").split(/(?<=\.)\s+/),corto=fr.slice(0,2).join(" "),resto=fr.slice(2).join(" ");
  let h='<section class="panel xh lv-top"><h2>TikTok LIVE</h2><p class="lead">'+esc(corto)+'</p>'
   +(resto?'<details class="lv-mas"><summary>Qué esperar de un directo</summary><p>'+esc(resto)+'</p></details>':'')
   +'<div class="lv-cams" role="group" aria-label="Para qué es tu directo">'+LV_CAM.map(c=>'<button type="button" class="lv-cam'+(sel===c[0]?" on":"")+'" data-lv="cam" data-v="'+c[0]+'" aria-pressed="'+(sel===c[0])+'"><b>'+c[1]+'</b><small>'+c[2]+'</small></button>').join("")+'</div></section>';
  if(sel&&C[sel]){
    const K=C[sel];
    h+='<section class="lv-cm" id="lv_cam">'
     +(sel==="proyecto"?'<p class="lv-aviso" role="note"><b>En un directo no se explica el proyecto.</b> Se cuenta tu día y, si quieren saber más, por privado.</p>':'')
     +'<div class="lv-obj" role="note"><div><span class="lv-et">Objetivo</span><p>'+esc(K.objetivo)+'</p></div><div><span class="lv-et">Qué pides al final</span><p>'+esc(K.llamada)+'</p></div></div>'
     +'<h3 class="lv-h3">Guiones ('+K.guiones.length+')</h3>'+K.guiones.map(g=>lvGuion(g,sel)).join("")+'</section>';
  }else{
    h+='<p class="lv-elige">Elige arriba para qué es tu directo y te enseño el objetivo y los guiones.</p>';
  }
  h+=D("Antes de darle a emitir",lvCheck("antes",LIVE.antes||[]));
  h+=D("Requisitos de TikTok",'<p class="lv-nota">'+esc(LIVE.requisitos_nota||"")+'</p>'+(LIVE.requisitos||[]).map(r=>'<div class="lv-rq"><p>'+esc(r.texto)+'</p>'+(r.fuente?'<span class="lv-fu">Fuente: TikTok</span>':'<span class="lv-fu lv-chk">Compruébalo en tu app</span>')+'</div>').join(""));
  h+=D("Si pasa esto…",(LIVE.si_pasa||[]).map(s=>'<div class="lv-sp"><h4>'+esc(s.situacion)+'</h4><p>'+esc(s.que_hacer)+'</p>'+(s.dices?'<div class="xmsg"><p>«'+esc(s.dices)+'»</p>'+cp(s.dices)+'</div>':'')+'</div>').join(""));
  h+=D("Lo que no se dice en un directo",(LIVE.no_digas||[]).map(n=>'<div class="lv-nd"><p class="lv-mal"><span class="lv-tag no">No</span><s>'+esc(n.mal)+'</s></p><div class="lv-bien"><p><span class="lv-tag si">Sí</span><span>'+esc(n.bien)+'</span></p>'+cp(n.bien)+'</div></div>').join(""));
  h+=D("Al terminar",lvCheck("despues",LIVE.despues||[])+'<div class="lv-ct"><button type="button" class="ml" data-tab="contactos"><b>Mis contactos</b><small>Apunta a quién le mandas lo que prometiste</small></button></div>');
  h+=D("Errores típicos",ul(LIVE.errores));
  return h;
}

// ----- «Seguirlo en directo»: capa a pantalla completa, un bloque cada vez, con reloj -----
const LVS={g:null,i:0,acc:0,t0:0,run:false,tick:0,wl:null,prev:null,bi:{}};
const lvFmt=ms=>{const s=Math.floor(ms/1000),m=Math.floor(s/60);return String(m).padStart(2,"0")+":"+String(s%60).padStart(2,"0")};
const lvMs=()=>LVS.acc+(LVS.run?Date.now()-LVS.t0:0);
async function lvWake(){try{if(navigator.wakeLock&&!LVS.wl&&document.getElementById("lvseg")){LVS.wl=await navigator.wakeLock.request("screen");LVS.wl.addEventListener&&LVS.wl.addEventListener("release",()=>{LVS.wl=null})}}catch(e){LVS.wl=null}}
const lvBlk=()=>{const b=LVS.g&&LVS.g.bloques[LVS.i];if(!b||!b.mins)return "";const t=Math.max(0,lvMs()-(LVS.bi[LVS.i]||0)),m=Math.floor(t/60000);return lvFmt(t)+" de "+b.mins+" min"+(m>=b.mins?" · ya te toca pasar":"")};
function lvSegHtml(){
  const g=LVS.g,n=g.bloques.length,b=g.bloques[LVS.i];
  if(LVS.bi[LVS.i]===undefined)LVS.bi[LVS.i]=lvMs();
  const dic=Array.isArray(b.dices)?b.dices.map(t=>'<p class="lvs-dices">«'+esc(t)+'»</p>').join(""):'<p class="lvs-dices">«'+esc(b.dices)+'»</p>';
  return '<div class="lvs-top"><button type="button" class="lvs-x" data-lv="salir">Salir</button><span class="lvs-tt">'+esc(g.titulo)+'</span><span class="lvs-clock" id="lvs_clock" role="timer" aria-label="Tiempo de directo">'+lvFmt(lvMs())+'</span></div>'
   +'<div class="lvs-body" id="lvs_body"><p class="lvs-min">Minutos '+esc(b.min)+' <span>· '+(g.unidad||"bloque")+' '+(LVS.i+1)+' de '+n+'</span></p>'
   +(b.titulo?'<h3 class="lvs-tit">'+esc(b.titulo)+'</h3>':'')+(b.mins?'<p class="lvs-blk" id="lvs_blk" role="timer">'+esc(lvBlk())+'</p>':'')
   +'<h3 class="lvs-l">Lo que haces</h3><p class="lvs-haces">'+esc(b.que_haces)+'</p><h3 class="lvs-l">Lo que dices</h3>'+dic
   +(b.truco?'<h3 class="lvs-l">Un truco</h3><p class="lvs-truco">'+esc(b.truco)+'</p>':'')+(b.nota?'<p class="lvs-nota">'+esc(b.nota)+'</p>':'')+'</div>'
   +'<div class="lvs-bar"><button type="button" class="lvs-go" data-lv="reloj">'+(LVS.run?"Pausar reloj":(LVS.acc?"Seguir reloj":"Empiezo"))+'</button><div class="lvs-nav"><button type="button" class="lvs-n" data-lv="ant"'+(LVS.i===0?" disabled":"")+'>Anterior</button><button type="button" class="lvs-n main" data-lv="sig"'+(LVS.i===n-1?" disabled":"")+'>Siguiente</button></div></div>';
}
function lvSegPinta(foco){
  const el=document.getElementById("lvseg");if(!el)return;
  el.innerHTML=lvSegHtml();
  const bd=document.getElementById("lvs_body");if(bd)bd.scrollTop=0;
  if(foco){const x=el.querySelector(foco);if(x)x.focus()}
}
function lvSegAbre(id,cam){
  const g=((LIVE.caminos||{})[cam]||{guiones:[]}).guiones.find(x=>x.id===id);if(!g)return;
  lvSegAbreG(g);
}
// g = {titulo, unidad?, bloques:[{min, que_haces, dices (texto o lista), titulo?, mins?, truco?, nota?}]}: lo usan TikTok LIVE y Mi Beauty Party
function lvSegAbreG(g){
  if(!g||!g.bloques||!g.bloques.length)return;
  lvSegCierra();
  Object.assign(LVS,{g,i:0,acc:0,t0:0,run:false,bi:{}});
  LVS.prev=document.activeElement;
  const el=document.createElement("div");el.id="lvseg";el.className="lvseg";el.setAttribute("role","dialog");el.setAttribute("aria-modal","true");el.setAttribute("aria-label","Seguir el guion en directo");
  document.body.appendChild(el);document.body.classList.add("lvs-on");
  lvSegPinta(".lvs-go");lvWake();
  LVS.tick=setInterval(()=>{const c=document.getElementById("lvs_clock");if(c)c.textContent=lvFmt(lvMs());const q=document.getElementById("lvs_blk");if(q)q.textContent=lvBlk()},500);
}
function lvSegCierra(){
  clearInterval(LVS.tick);LVS.tick=0;LVS.run=false;
  const el=document.getElementById("lvseg");if(el)el.remove();
  document.body.classList.remove("lvs-on");
  try{if(LVS.wl)LVS.wl.release()}catch(e){}LVS.wl=null;
  try{if(LVS.prev&&LVS.prev.focus&&document.contains(LVS.prev))LVS.prev.focus()}catch(e){}LVS.prev=null;
}
document.addEventListener("visibilitychange",()=>{if(!document.hidden)lvWake()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&document.getElementById("lvseg"))lvSegCierra()});
document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button[data-lv]");if(!b)return;
  const d=b.dataset,k=d.lv;
  if(k==="cam"){S.xlive=d.v;S.anc="lv_cam";render()}
  else if(k==="ck"){
    const m=lvDone(d.l),i=+d.i;if(m[i])delete m[i];else m[i]=1;ls(LV_K[d.l],m);
    const on=!!m[i];b.classList.toggle("on",on);b.setAttribute("aria-checked",on?"true":"false");
    const c=document.getElementById("lv_cnt_"+d.l);if(c){const tot=b.parentNode.querySelectorAll(".lv-it").length;c.textContent=Object.keys(m).filter(x=>+x<tot).length+" de "+tot+" hechas"}
  }
  else if(k==="cero"){ls(LV_K[d.l],{});render(true)}
  else if(k==="seguir")lvSegAbre(d.g,d.c);
  else if(k==="salir")lvSegCierra();
  else if(k==="sig"||k==="ant"){const n=LVS.g.bloques.length;LVS.i=Math.max(0,Math.min(n-1,LVS.i+(k==="sig"?1:-1)));lvSegPinta(k==="sig"?".lvs-n.main:not([disabled])":".lvs-n:not(.main):not([disabled])")}
  else if(k==="reloj"){if(LVS.run){LVS.acc+=Date.now()-LVS.t0;LVS.run=false}else{LVS.t0=Date.now();LVS.run=true}lvSegPinta(".lvs-go")}
});

// ---------- Prospectar ----------
function viewPros(){
  let h=H("Prospectar",PRO.intro||"","Solo para el equipo");
  h+=P("Cambia tu mentalidad",'<dl class="gl">'+(PRO.mentalidad||[]).map(x=>'<dt>'+esc(x.t)+'</dt><dd>'+esc(x.d)+'</dd>').join("")+'</dl>');
  const F=PRO.franc||{};
  h+=P("Tu lista F.R.A.N.C.",'<p>'+esc(F.intro||"")+'</p>'+(F.letras||[]).map(l=>'<div class="xfr"><span class="xlet">'+esc(l.l)+'</span><div><b>'+esc(l.palabra)+'</b><p>'+esc(l.d)+'</p>'+(l.ejemplos&&l.ejemplos.length?'<small class="mut">'+l.ejemplos.map(esc).join(" · ")+'</small>':'')+'</div></div>').join("")+(F.reto?'<p class="note"><b>Reto:</b> '+esc(F.reto)+'</p>':''));
  h+=P("El método AIDA",(PRO.aida||[]).map(l=>'<div class="xfr"><span class="xlet">'+esc(l.l)+'</span><div><b>'+esc(l.palabra)+'</b><p>'+esc(l.d)+'</p><p class="xdi">«'+esc(l.ejemplo)+'»</p></div></div>').join(""));
  h+=P("Las 5 C",'<dl class="gl">'+(PRO.cinco_c||[]).map(x=>'<dt>'+esc(x.c)+'</dt><dd>'+esc(x.d)+'</dd>').join("")+'</dl>');
  const V=PRO.no_vomites||{};
  if(V.t)h+=P(V.t,'<p>'+esc(V.d)+'</p><div class="xmal"><b>Así no</b><p>'+esc(V.mal)+'</p></div><div class="xbien"><b>Así sí</b><p>'+esc(V.bien)+'</p></div>');
  h+=(PRO.pasos||[]).map((p,i)=>D(p.paso,'<p class="mut">'+esc(p.objetivo)+'</p>'+msgs(p.mensajes),i===0)).join("");
  const Dd=PRO.diario||{};
  if(Dd.items)h+=P("Tu rutina diaria "+(Dd.titulo||""),'<p>'+esc(Dd.intro||"")+'</p><dl class="gl">'+Dd.items.map(x=>'<dt>'+esc(x.t)+'</dt><dd>'+esc(x.d)+'</dd>').join("")+'</dl><div class="acts"><button type="button" class="btn" data-tab="numeros">Apuntar mi 5·5·5 de hoy</button></div>');
  if(PRO.extra&&PRO.extra.length)h+=P("Para no olvidar",'<dl class="gl">'+PRO.extra.map(x=>'<dt>'+esc(x.t)+'</dt><dd>'+esc(x.d)+'</dd>').join("")+'</dl>');
  return h;
}

// ---------- Reto 21 días (interno) ----------
function viewReto(){
  const R=NI.reto||{},M=R.mensajes||{};
  let h=H("Reto 21 días",R.intro||"","Solo para el equipo");
  h+='<section class="aviso eqaviso"><b>Los menús del reto no se envían ni se enseñan. Los da la nutricionista dentro del reto.</b></section>';
  h+=P("Para quién es",ul(R.para_quien))+P("Qué incluye",ul(R.incluye))+P("Cómo se entra",ol(R.como_entrar));
  if(R.calendario&&R.calendario.length)h+=P("Cómo va el reto",ul(R.calendario));
  if(R.proximo)h+=P("Próximo reto",'<p>'+esc(R.proximo)+'</p>');
  h+=D("Preguntas que te harán",'<dl class="gl">'+(R.faq||[]).map(f=>'<dt>'+esc(f.q)+'</dt><dd>'+esc(f.a)+'</dd>').join("")+'</dl>');
  h+=[["informar","Para informar"],["inscripcion","Para inscribir"],["bienvenida","Bienvenida al grupo"],["seguimiento","Seguimiento"],["cierre","Al terminar"]].map(k=>D("Mensajes · "+k[1],msgs(M[k[0]]))).join("");
  h+=P("Lo que nunca decimos del reto",ul(R.nunca),"xnop");
  h+=C2.disp("clientas","reto")?'<div class="acts"><button type="button" class="btn" data-c2k="go" data-c2v="st|clientas|reto">Crear contenido para invitar al reto</button></div>'
   :'<p class="note">Ahora no hay situaciones en Crear para invitar al reto'+(C2.vuelve("clientas","reto")?': vuelven en '+esc(C2.vuelve("clientas","reto"))+'.':'.')+'</p>';
  return h;
}
// ---------- Embarazo (interno) ----------
function viewEmb(){
  const E=NI.embarazo||{};
  let h=H("Complementos y embarazo",E.intro||"","Solo para el equipo");
  h+='<section class="aviso eqaviso"><b>'+esc(E.aviso||"")+'</b></section>';
  h+=(E.etapas||[]).map(e=>P(e.t,'<p>'+esc(e.d)+'</p>'+(e.productos||[]).map(p=>'<div class="xmsg xmp">'+FOTOS.prodThumb(p.id)+'<p><b>'+esc(prodN(p.id))+'</b> · '+esc(p.nota)+'</p></div>').join(""))).join("");
  h+=D("Preguntas frecuentes",'<dl class="gl">'+(E.preguntas||[]).map(f=>'<dt>'+esc(f.q)+'</dt><dd>'+esc(f.a)+'</dd>').join("")+'</dl>');
  h+=P("Lo que nunca decimos",ul(E.nunca),"xnop");
  return h;
}

function viewMorning(){
  const M=NI.morning||{};
  let h=H("Morning Glow",M.intro||"","Solo para el equipo");
  h+='<section class="aviso eqaviso"><b>'+esc(M.aviso||"")+'</b></section>';
  h+=P("Lo que lleva",(M.productos||[]).map(p=>'<div class="xmsg xmp">'+FOTOS.prodThumb(p.id)+'<p><b>'+esc(prodN(p.id))+'</b> · '+esc(p.nota)+'</p></div>').join(""));
  h+=P("Cómo se prepara",ol(M.receta))+P("Trucos",ul(M.trucos))+P("Cómo hablar de él en redes",ul(M.como_hablar))+P("Lo que nunca decimos",ul(M.nunca),"xnop");
  h+='<div class="acts"><button type="button" class="btn" data-c2k="use" data-c2v="nc-morning-glow-coche">Crear contenido del Morning Glow</button></div>';
  return h;
}

// ---------- Ganchos (sin huecos: todos escritos para su situación) ----------
const TIPOS=[["negativo","Negativo","Avisa de un error o de algo que sale mal. Funciona porque nadie quiere equivocarse."],["contra corriente","Contra corriente","Dice algo que parece al revés de lo normal y luego lo explica."],["curiosidad","Curiosidad","Deja una pregunta en el aire que solo se resuelve si siguen mirando."],["fórmula","Fórmula","Promete enseñar cómo hacer algo concreto."],["historia","Historia","Empieza por algo que te pasó, con un detalle real."],["enemigo común","Enemigo común","Señala algo que nos fastidia a todas."],["pregunta","Pregunta","Una pregunta en la que la persona se reconoce."],["regla del tres","Regla del tres","Tres cosas, tres pasos o tres errores: se entiende de un vistazo."],["reto","Reto","Invita a probar algo unos días, sin prometer resultados."],["cotilla","Cotilla","Enseña algo tuyo que da curiosidad ver."],["sorpresa","Sorpresa","Un dato o un momento que no se espera."],["robado","Robado","Una frase real que te dijo alguien."]];
const ALLG=[];(DB.paquetes||[]).forEach(s=>(s.pk&&s.pk.ganchos||[]).forEach(g=>ALLG.push({t:g.t,tipo:g.tipo,s})));
function gBusca(q,via,tipo){
  const ws=norm(q||"").trim().split(/\s+/).filter(w=>w.length>1);
  let L=(DB.paquetes||[]).filter(s=>(!via||s.via===via));
  if(ws.length)L=L.map(s=>{const hay=norm([s.nombre,s.escena,s.grupo,s.recurso,s.kw.join(" "),s.pk.ganchos.map(g=>g.t).join(" ")].join(" "));const n=ws.filter(w=>hay.indexOf(w)>=0).length;const tit=ws.filter(w=>norm(s.nombre).indexOf(w)>=0).length;return {s,sc:n*2+tit}}).filter(x=>x.sc>=ws.length*2).sort((a,b)=>b.sc-a.sc).map(x=>x.s);
  return L;
}
function gCard(s,tipo){
  const G=s.pk.ganchos.filter(g=>!tipo||g.tipo===tipo);
  return '<section class="panel xg"><h4>'+esc(s.nombre)+' <small class="mut">· '+(s.via==="proyecto"?"Proyecto":"Clientas")+' · '+esc(s.grupo)+'</small></h4><ul class="hooks">'+G.map(g=>'<li><span class="tag">'+esc(cap(g.tipo))+'</span> '+esc(g.t)+' <button type="button" class="mini" data-copy="'+esc(g.t)+'">Copiar</button></li>').join("")+'</ul><button type="button" class="mini" data-c2k="use" data-c2v="'+esc(s.id)+'">Crear con esta situación</button></section>';
}
function gResHtml(){
  const q=S.xgq||"",via=S.xgv||"",tipo=S.xgt||"";
  if(!norm(q).trim()){
    // sin búsqueda: cada tipo explicado con dos ejemplos reales del banco (cambian cada día)
    const day=hash(new Date().toDateString());
    return TIPOS.map((t,ti)=>[t,ti]).filter(x=>!tipo||x[0][0]===tipo).map(([t,ti])=>{const L=ALLG.filter(g=>g.tipo===t[0]&&(!via||g.s.via===via));const ex=L.length?[L[((day+ti*131)>>>0)%L.length],L[((day*7+ti*389+(L.length>>1))>>>0)%L.length]]:[];
      return '<section class="panel xg"><h3>'+esc(t[1])+'</h3><p class="mut">'+esc(t[2])+'</p><ul class="hooks">'+ex.map(g=>'<li>'+esc(g.t)+' <small class="mut">· '+esc(g.s.nombre)+'</small> <button type="button" class="mini" data-copy="'+esc(g.t)+'">Copiar</button></li>').join("")+'</ul></section>'}).join("");
  }
  const L=gBusca(q,via,tipo);
  if(!L.length)return VIS.sinRes('No hay ninguna situación con esas palabras. Prueba con una sola palabra: noche, café, regalo, tiempo…',"xg_q");
  return '<p class="mut">'+L.length+(L.length===1?' situación':' situaciones')+(L.length>8?' · te enseño las 8 que más encajan':'')+'</p>'+L.slice(0,8).map(s=>gCard(s,tipo)).join("");
}
function viewGanchos2(){
  const via=S.xgv||"",tipo=S.xgt||"";
  return '<section class="panel"><h2>Ganchos</h2><p class="lead">El gancho es la primera frase: decide si siguen mirando o pasan. Aquí tienes '+ALLG.length+' ganchos escritos uno a uno para su situación, nada de frases con huecos. Escribe de qué vas a hablar y te enseño los que encajan.</p>'
  +'<label>¿De qué vas a hablar?<input id="xg_q" type="search" value="'+esc(S.xgq||"")+'" placeholder="Ej.: noche, café, regalo" autocomplete="off"></label>'
  +'<div class="chips">'+[["","Todo"],["clientas","Clientas"],["proyecto","Proyecto"]].map(v=>'<button type="button" class="chip'+(via===v[0]?" on":"")+'" data-xk="gv" data-xv="'+v[0]+'">'+v[1]+'</button>').join("")+'</div>'
  +'<label>Tipo de gancho<select id="xg_t"><option value="">Los 12 tipos</option>'+TIPOS.map(t=>'<option value="'+esc(t[0])+'"'+(tipo===t[0]?" selected":"")+'>'+esc(t[1])+'</option>').join("")+'</select></label></section>'
  +'<div id="xg_res">'+gResHtml()+'</div>';
}

// ---------- Recursos: «Me han escrito una palabra» ----------
// Busca la palabra entre las de las situaciones y las de las guías; si vale para las dos, salen las dos.
const kwN=k=>norm(k).toUpperCase();
function kwTodas(){
  const L=[];
  (DB.paquetes||[]).forEach(s=>(s.kw||[]).forEach(k=>L.push({k:kwN(k),t:"s",o:s})));
  (DB.guias||[]).forEach(g=>(g.kw||[]).forEach(k=>L.push({k:kwN(k),t:"g",o:g})));
  return L;
}
function kwDist(a,b){
  const m=a.length,n=b.length;let prev=[];for(let j=0;j<=n;j++)prev[j]=j;
  for(let i=1;i<=m;i++){const cur=[i];for(let j=1;j<=n;j++)cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));prev=cur}
  return prev[n];
}
// las palabras que más se parecen a lo escrito (sin repetir)
function kwParecidas(n,max){
  const seen={},out=[];
  kwTodas().forEach(x=>{if(seen[x.k])return;seen[x.k]=1;const d=kwDist(n,x.k)-(x.k.indexOf(n)>=0||n.indexOf(x.k)>=0?2:0)-(x.k[0]===n[0]?0.5:0);out.push([d,x.k])});
  return out.sort((a,b)=>a[0]-b[0]||a[1].localeCompare(b[1])).slice(0,max||4).map(x=>x[1]);
}
function kwSitHtml(s,solo){const G=s.pk.guia;return '<details class="panel xd"'+(solo?" open":"")+'><summary>'+esc(s.kw[0])+' · '+esc(s.nombre)+'<small class="mut"> · Situación · '+(s.via==="proyecto"?"Proyecto":"Clientas")+'</small></summary>'
    +'<p class="mut">Le mandas: '+esc(s.pk.recurso_corto)+'</p><div class="xmsg"><p>'+esc(G.entrega)+'</p></div><pre class="c2pre">'+esc(G.texto)+'</pre>'
    +'<button type="button" class="mini" data-copy="'+esc(G.entrega+"\n\n"+G.texto)+'" data-ct="pk:'+esc(s.id)+'">Copiar mensaje y guía</button>'
    +'<h4 class="xh4">A los 2 o 3 días</h4>'+msgs([G.seguimiento])+'</details>'}
function kwGuiaHtml(g,k,solo){const kit=g.kit||{};return '<details class="panel xd"'+(solo?" open":"")+'><summary>'+esc(k)+' · '+esc(g.titulo)+'<small class="mut"> · Guía · '+(g.via==="proyecto"?"Proyecto":"Clientas")+'</small></summary>'
    +(g.para?'<p class="mut">'+esc(g.para)+'</p>':'')
    +(kit.entrega&&kit.entrega.length?'<h4 class="xh4">Para mandarla</h4>'+msgs(kit.entrega):'')
    +'<pre class="c2pre">'+esc(g.texto||"")+'</pre>'
    +'<button type="button" class="mini" data-copy="'+esc(g.texto||"")+'" data-ct="g:'+esc(g.id)+'">Copiar la guía</button> <button type="button" class="mini" data-rg="'+esc(g.id)+'">Abrir la guía y su tarjeta</button>'
    +(kit.seguimiento&&kit.seguimiento.length?'<h4 class="xh4">A los 2 o 3 días</h4>'+msgs(kit.seguimiento):'')+'</details>'}
function kwBuscaHtml(q){
  const n=kwN((q||"").trim());
  if(n.length<2)return '';
  const T=kwTodas(),vistos={},R=[];
  const add=(x,exacta)=>{const id=x.t+(x.o.id||"")+(x.t==="g"?x.k:"");if(vistos[id])return;vistos[id]=1;R.push({x,exacta})};
  // primero las guías y luego las situaciones, las que tienen justo esa palabra antes que las que empiezan por ella
  const G=T.filter(x=>x.t==="g"),Sx=T.filter(x=>x.t==="s");
  [G,Sx].forEach(A=>A.filter(x=>x.k===n).forEach(x=>add(x,true)));
  [G,Sx].forEach(A=>A.filter(x=>x.k!==n&&x.k.indexOf(n)===0).forEach(x=>add(x,false)));
  const L=R.slice(0,8);
  if(!L.length){
    const par=kwParecidas(n,4);
    return VIS.sinRes('No tengo ninguna guía ni situación con esa palabra. Si la escribiste tú, busca abajo por tema.',"xk_q")
     +(par.length?'<div class="xkpar"><p class="mut">Las más parecidas:</p><div class="chips">'+par.map(w=>'<button type="button" class="chip" data-xk="kw" data-xv="'+esc(w)+'">'+esc(w)+'</button>').join("")+'</div></div>':'');
  }
  return L.map(r=>r.x.t==="s"?kwSitHtml(r.x.o,L.length===1):kwGuiaHtml(r.x.o,r.x.k,L.length===1)).join("");
}
function kwBuscaPanel(){return '<section class="panel xkw"><h3>¿Te han escrito una palabra?</h3><p class="mut">Escríbela y te sale lo que tienes que mandar, ya sea una guía o la de una situación.</p><input id="xk_q" type="search" value="'+esc(S.xkq||"")+'" placeholder="Por ejemplo: NOCHE" autocomplete="off" autocapitalize="characters"><div id="xk_res">'+kwBuscaHtml(S.xkq||"")+'</div></section>'}

// ---------- Mis números: 5·5·5 de hoy ----------
const K555="fs_555";
const hoyKey=()=>{const d=new Date();return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
function d555(){const h=ls(K555);return h&&typeof h==="object"&&!Array.isArray(h)?h:{}}
function panel555(){
  const I=((PRO.diario||{}).items)||[];if(!I.length)return "";
  const H5=d555(),t=H5[hoyKey()]||{};
  const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const k=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");const x=H5[k]||{};const ok=I.every(it=>(x[it.k]||0)>=5);days.push('<span class="x5d'+(ok?" ok":"")+'" title="'+esc(k)+'">'+["D","L","M","X","J","V","S"][d.getDay()]+'</span>')}
  return '<section class="panel"><h3>Mi 5·5·5 de hoy</h3><p class="mut">'+esc((PRO.diario||{}).intro||"")+'</p>'
  +I.map(it=>{const n=Math.min(5,t[it.k]||0);return '<div class="x5"><div><b>'+esc(it.t)+'</b><small>'+esc(it.d)+'</small></div><div class="x5c"><button type="button" class="mini" data-xk="555" data-xv="'+esc(it.k)+'|-1" aria-label="Quitar uno">−</button><span>'+n+' / 5</span><button type="button" class="mini" data-xk="555" data-xv="'+esc(it.k)+'|1" aria-label="Sumar uno">+</button></div></div>'}).join("")
  +'<p class="x5w">Últimos 7 días: '+days.join("")+'</p><p class="note">Se guarda solo en este móvil. Un día cuenta como hecho cuando llegas a 5 en las tres.</p>'
  +'<div class="acts"><button type="button" class="btn ghost" data-tab="eq_prospectar">Ver la guía de prospección</button></div></section>';
}

// ---------- montaje en las vistas existentes ----------
const _equipo=VIEWS.equipo,_paises=VIEWS.eq_paises,_numeros=viewNumeros,_recursos=viewRecursos;
const XCARDS=[["eq_prospectar","Prospectar","Lista F.R.A.N.C., AIDA, mensajes y tu 5·5·5"],["eq_beauty","Mi Beauty Party","Tu tarde con amigas a medida: guion, tareas y guía en PDF"],["eq_reto","Reto 21 días","Cómo funciona, cómo se entra y mensajes"],["eq_morning","Morning Glow","Qué es, cómo se prepara y cómo hablar de él"],["eq_embarazo","Complementos y embarazo","Orientación interna, siempre con su médico"]];
VIEWS.equipo=function(){
  const h=_equipo();
  const extra='<h3 class="xeqh">Más herramientas del equipo</h3><div class="eqcards">'+XCARDS.map(c=>'<button type="button" class="eqc plain" data-tab="'+c[0]+'"><span class="eqcs"><b>'+esc(c[1])+'</b><small>'+esc(c[2])+'</small></span></button>').join("")+'</div>';
  return h+extra;
};
VIEWS.eq_paises=function(){
  const C=(eqSec("paises").casillero)||null;let h=_paises();
  if(C)h+='<section class="panel"><h3>'+esc(C.titulo)+'</h3><p>'+esc(C.que)+'</p><p><b>'+esc(C.quien)+'</b></p>'
   +C.lista.map(x=>'<div class="eqpais"><h4>'+esc(x.p)+' · '+esc(x.n)+'</h4>'+(x.link?eqLinks([x.link]):'')+(x.nota?'<p class="mut">'+esc(x.nota)+'</p>':'')+'</div>').join("")
   +'<p class="note">'+esc(C.aviso)+'</p></section>';
  return h;
};
const numeros=function(){
  return '<section class="panel"><h2>Mis números</h2><p class="lead">Aquí hay dos cosas distintas. Cada día llevas la cuenta de tu 5·5·5 de prospección. Cada semana mides cómo van tus stories y te digo qué mejorar primero.</p></section>'+panel555()+_numeros();
};
// «Mis contactos» vive en Recursos (a quién le mandaste una guía y cuándo volver a escribirle)
const contactosFila=()=>{const n=(typeof CT!=="undefined"&&CT.load)?CT.load().length:0;return '<section class="panel rc9"><button type="button" class="ml" data-tab="contactos"><b>Mis contactos</b><small>'+(n?n+(n===1?" persona apuntada":" personas apuntadas")+" · a quién escribir y cuándo":"A quién le mandaste tu guía y cuándo volver a escribirle")+'</small></button></section>'};
const recursos=function(){return kwBuscaPanel()+contactosFila()+_recursos()};
Object.assign(VIEWS,{numeros,recursos});
Object.assign(VIEWS,{tt_live:viewLive,eq_prospectar:viewPros,eq_reto:viewReto,eq_embarazo:viewEmb,eq_morning:viewMorning,ganchos:viewGanchos2});

document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button[data-xk]");if(!b)return;
  const k=b.dataset.xk,v=b.dataset.xv||"";
  if(k==="kw"){S.xkq=String(v).slice(0,20);const i=document.getElementById("xk_q"),r=document.getElementById("xk_res");if(i)i.value=S.xkq;if(r)r.innerHTML=kwBuscaHtml(S.xkq)}
  else if(k==="gv"){S.xgv=v;render(true)}
  else if(k==="555"){const p=v.split("|"),H5=d555(),hk=hoyKey(),t=H5[hk]||{};t[p[0]]=Math.max(0,Math.min(5,(t[p[0]]||0)+(+p[1]||0)));H5[hk]=t;
    const keys=Object.keys(H5).sort();while(keys.length>60)delete H5[keys.shift()];ls(K555,H5);render(true)}
});
document.addEventListener("input",e=>{
  const el=e.target;if(!el)return;
  if(el.id==="xg_q"){S.xgq=el.value.slice(0,60);const r=document.getElementById("xg_res");if(r)r.innerHTML=gResHtml()}
  else if(el.id==="xk_q"){S.xkq=el.value.slice(0,20);const r=document.getElementById("xk_res");if(r)r.innerHTML=kwBuscaHtml(S.xkq)}
});
document.addEventListener("change",e=>{if(e.target&&e.target.id==="xg_t"){S.xgt=e.target.value;const r=document.getElementById("xg_res");if(r)r.innerHTML=gResHtml()}});
return {gBusca,kwBuscaHtml,numeros,recursos,lvSegAbreG};
})();

// ===== Fam Studio · Mi Beauty Party a medida (C14) =====
// Contenido por piezas en DB.extra.beautyparty (content/extra/beautyparty.json): estaciones por tipo de producto, mapa de los 130 productos
// a su estación, reglas para recortar por tiempo, tareas, invitaciones, guion de bienvenida y cierre, mensajes de después...
// La usuaria contesta un formulario corto (cuándo, dónde y cuántas, cuánto tiempo, qué tipo de tarde, qué productos tiene) y la guía se arma con SUS productos.
// Todo vive en localStorage (clave fs_bp: entra solo en la copia de seguridad). Todo texto pasa por esc().
// El PDF se maqueta en beauty_pdf.js con el motor de las mini guías (guias.js).
const BPX=(function(){
const BP=(DB.extra||{}).beautyparty||{};
const K="fs_bp",MAXF=12;
const EST={};(BP.estaciones||[]).forEach(e=>{EST[e.id]=e});
const MAPA=BP.mapa_productos||{},COMB=BP.combinaciones||{},FORM=BP.formulario||{},TIPOS=BP.tipos||[],TEMAS=BP.temas||[],GU=BP.guion||{},VD=BP.videollamada||{};
const GRUPOS=FORM.invitadas||["2-3","4-6","7-10"],MINS=FORM.minutos||[60,90,120];
const TR=(BP.estructura_base||{}).tramos||[],T_BIEN=(TR[0]||{}).tramo||"Bienvenida",T_CIERRE=(TR[4]||{}).tramo||"Cierre",NUTRI=(GU.cierre||{}).nota_nutricion||"",PREG_FIN=(GU.preguntas_para_conversar||[])[7]||"";
const MOMENTOS=["Dos semanas antes","Una semana antes","El día de antes","Una hora antes","Mientras","Al acabar","Al día siguiente"];
const DIAS=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],MESES=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
const p2=n=>String(n).padStart(2,"0");
const nrm=s=>String(s==null?"":s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");
const cap=s=>{s=String(s||"");return s.charAt(0).toUpperCase()+s.slice(1)};
const bajaP=s=>{s=String(s||"");return s.charAt(0).toLowerCase()+s.slice(1)};
// grupos de productos para el formulario: piel y maquillaje primero
const GRP=[["Piel",["limpiar","tonico","serum","contorno","crema","mascarilla"]],["Maquillaje",["base","corrector","colorete","cejas","ojos","pestanas","labios","fijador"]],["Y más",["perfume","pelo","cuidado_diario","para_ellos","nutri_bebidas","nutri_complementos"]]];
const CATEG={limpiar:"Limpiadores y agua micelar",tonico:"Tónicos",serum:"Sérums y aceites",contorno:"Contorno de ojos",crema:"Cremas y bálsamos",mascarilla:"Mascarillas",base:"Prebase y base",corrector:"Corrector y polvos",colorete:"Colorete e iluminador",cejas:"Cejas",ojos:"Ojos y brochas",pestanas:"Pestañas",labios:"Labios",fijador:"Fijador",perfume:"Perfumes",pelo:"Pelo",cuidado_diario:"Manos, cuerpo y dientes",para_ellos:"Para ellos",nutri_bebidas:"Batidos, tés y cafés",nutri_complementos:"Complementos"};
const CLAVE_BASE=["limpiar","crema","serum","base","labios"];
const PRES={para_ellos:"lo que hay para ellos",nutri_complementos:"los complementos a la merienda",cuidado_diario:"manos, cuerpo y sonrisa"};
const INF=/^(Probar|Limpiar|Fijar)\b/;
const TABS=[["tarde","La tarde"],["tareas","Tareas"],["material","Material"],["inv","Invitaciones"],["despues","Después"],["pdf","Guía en PDF"]];
const prodsAll=()=>(DB.products||[]);
const pnom=id=>{const p=PROD[id];return p?cap(p.nombre_corto||p.nombre):""};
const pfull=id=>{const p=PROD[id];return p?p.nombre:""};

// ---------- fechas ----------
function parseF(s){const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||"");if(!m)return null;const d=new Date(+m[1],+m[2]-1,+m[3]);return d.getFullYear()===+m[1]&&d.getMonth()===+m[2]-1&&d.getDate()===+m[3]?d:null}
const diaTxt=d=>DIAS[d.getDay()]+" "+d.getDate()+" de "+MESES[d.getMonth()];
const addDias=(d,n)=>new Date(d.getFullYear(),d.getMonth(),d.getDate()+n);
const horaOk=h=>/^([01]\d|2[0-3]):[0-5]\d$/.test(h||"");
function inicio(f){const d=parseF(f.fe);if(!d)return null;const m=horaOk(f.h)?f.h.split(":").map(Number):[17,0];return new Date(d.getFullYear(),d.getMonth(),d.getDate(),m[0],m[1])}
const horaTxt=d=>d.getHours()+":"+p2(d.getMinutes());

// ---------- datos guardados ----------
function nid(){return "f"+Date.now().toString(36)+Math.random().toString(36).slice(2,6)}
function limpiaF(x){
  if(!x||typeof x!=="object"||typeof x.id!=="string"||!/^[a-z0-9]{4,24}$/.test(x.id))return null;
  const f={id:x.id,c:+x.c||0,fe:parseF(x.fe)?x.fe:"",h:horaOk(x.h)?x.h:"",fmt:x.fmt==="video"?"video":"casa",n:GRUPOS.indexOf(x.n)>=0?x.n:"4-6",min:MINS.indexOf(+x.min)>=0?+x.min:90,
    tipo:TIPOS.some(t=>t.id===x.tipo)?x.tipo:"",tema:"",p:[],paso:Math.max(0,Math.min(4,+x.paso||0)),ok:!!x.ok,sel:{},chk:{},mat:{}};
  const t=TEMAS.find(t=>t.id===x.tema);if(t&&(!f.tipo||t.tipo===f.tipo)){f.tema=t.id;f.tipo=t.tipo}
  if(Array.isArray(x.p)){const v=new Set();x.p.forEach(id=>{if(typeof id==="string"&&PROD[id]&&MAPA[id])v.add(id)});f.p=prodsAll().map(p=>p.id).filter(id=>v.has(id))}
  [["sel"],["chk"],["mat"]].forEach(([k])=>{if(x[k]&&typeof x[k]==="object"&&!Array.isArray(x[k]))Object.keys(x[k]).slice(0,200).forEach(q=>{const v=x[k][q];if(/^[A-Za-z0-9_]{1,40}$/.test(q)&&(k==="sel"?(typeof v==="string"&&PROD[v]):v))f[k][q]=k==="sel"?v:1})});
  return f;
}
function cargar(){
  let o=ls(K);
  if(!o||typeof o!=="object"||!Array.isArray(o.f))o={f:[],act:""};
  o.f=o.f.map(limpiaF).filter(Boolean).slice(0,MAXF);
  if(!o.f.some(x=>x.id===o.act))o.act=o.f.length?o.f[0].id:"";
  return o;
}
const guardar=o=>{ls(K,{f:o.f,act:o.act})};
function fiesta(id){return cargar().f.find(x=>x.id===id)||null}
function pon(f){const o=cargar(),i=o.f.findIndex(x=>x.id===f.id);if(i<0)o.f.unshift(f);else o.f[i]=f;o.act=f.id;guardar(o)}
function nueva(){const f=limpiaF({id:nid(),c:Date.now(),fmt:"casa",n:"4-6",min:90,p:[],paso:0,ok:false});const o=cargar();o.f.unshift(f);o.f=o.f.slice(0,MAXF);o.act=f.id;guardar(o);return f}
function borra(id){const o=cargar();o.f=o.f.filter(x=>x.id!==id);guardar(o)}
const ordenadas=()=>cargar().f.slice().sort((a,b)=>(b.c||0)-(a.c||0));

// ---------- el plan de la tarde ----------
function propios(f,s){const set=new Set(f.p);return prodsAll().map(p=>p.id).filter(id=>set.has(id)&&MAPA[id]===s)}
function productoDe(f,s){const L=propios(f,s);return f.sel[s]&&L.indexOf(f.sel[s])>=0?f.sel[s]:L[0]||""}
function plan(f){
  const video=f.fmt==="video",k=String(f.min),total=video?Math.min(f.min,COMB.video_cap_minutos):f.min;
  const ki=video?(total<=60?"60":"90"):k,bf=COMB.bloques_fijos;
  const bien=bf.bienvenida[ki],cier=bf.cierre[ki],libres0=video?0:bf.pruebas_libres[ki],marg=COMB.margen_minutos;
  const disp=total-bien-cier-libres0-marg;
  let mx=video?COMB.max_estaciones_video[k]:COMB.max_estaciones[k];
  if(!video&&f.n==="7-10"&&f.min===90)mx=Math.min(mx,6);
  const pos=[...new Set(f.p.map(id=>MAPA[id]).filter(Boolean))];
  const tm=TEMAS.find(t=>t.id===f.tema),tp=TIPOS.find(t=>t.id===f.tipo),fc=(tm||tp||{}).estaciones_foco||[];
  const foco=fc.filter(s=>pos.indexOf(s)>=0);
  const orden=foco.concat(COMB.prioridad.filter(s=>pos.indexOf(s)>=0&&foco.indexOf(s)<0));
  const mm=s=>{const m=EST[s].minutos[f.n];return video?Math.ceil(m*COMB.video_factor_estaciones):m};
  let el=[],usado=0;const razon={};
  orden.forEach(s=>{
    if(el.length>=mx){razon[s]="max";return}
    if(usado+mm(s)<=disp){el.push(s);usado+=mm(s)}else razon[s]="tiempo";
  });
  let corta=false;
  if(!el.length&&pos.length){const s=pos.slice().sort((a,b)=>mm(a)-mm(b))[0];el=[s];usado=mm(s);corta=true;delete razon[s]}
  el.sort((a,b)=>EST[a].orden-EST[b].orden);
  const m={};el.forEach(s=>{m[s]=mm(s)});
  // el tiempo que sobra se reparte: un poco más a cada parada (hasta la mitad) y el resto, a probar y charlar
  let sobra=total-(bien+cier+libres0+marg+usado),libres=libres0;
  const tope={};el.forEach(s=>{tope[s]=Math.ceil(mm(s)/2)});
  let vuelta=true;
  while(sobra>0&&vuelta&&el.length){vuelta=false;for(const s of el){if(sobra>0&&m[s]-mm(s)<tope[s]){m[s]++;sobra--;vuelta=true}}}
  libres+=sobra;
  const fuera=orden.filter(s=>el.indexOf(s)<0).map(s=>({id:s,razon:razon[s]||"tiempo"}));
  // bloques en orden, con sus minutos de inicio y fin
  const B=[];let t=0;
  const add=(o)=>{o.ini=t;t+=o.m;o.fin=t;B.push(o)};
  add({k:"bienvenida",id:"bienvenida",titulo:T_BIEN,m:bien});
  el.forEach(s=>add({k:"est",id:s,titulo:EST[s].titulo,m:m[s],base:mm(s)}));
  if(libres>0)add({k:"libres",id:"libres",titulo:video?"Dudas y comentarios":"Pruebas individuales",m:libres});
  add({k:"cierre",id:"cierre",titulo:T_CIERRE,m:cier});
  add({k:"margen",id:"margen",titulo:"Margen por si algo se alarga",m:marg});
  // si falta algo clave
  const claves=(foco.length||fc.length?fc:CLAVE_BASE).filter(s=>pos.indexOf(s)<0&&EST[s]);
  const faltan=claves.slice(0,5).map(s=>({id:s,texto:(BP.sin_esto||{})[s]||""})).filter(x=>x.texto);
  const pocos=f.p.length>0&&(f.p.length<4||pos.length<3);
  return {video,total,disp,mx,el,fuera,B,usado,corta,sobra:libres-libres0,faltan,pocos,bien,cier,minsSum:B.reduce((a,b)=>a+b.m,0)};
}

// ---------- lo que dice ----------
function presenta(s,i){
  const L=GU.presentar_estacion||[],t=EST[s].titulo;
  const idx=INF.test(t)?[1,2]:[0,1,2,3],pl=L[idx[i%idx.length]%L.length]||"";
  return pl.split("{estacion}").join(PRES[s]||bajaP(t));
}
function dices(s,prod,i){
  const p=PROD[prod],out=[presenta(s,i)];
  EST[s].dices.forEach(t=>{
    if(!p&&(t.indexOf("{producto}")>=0||t.indexOf("{frase_oficial}")>=0))return;
    out.push(t.split("{producto}").join(p.nombre).split("{frase_oficial}").join(String(p.frase_oficial||"").trim()));
  });
  return out;
}

// ---------- tareas ----------
function momentoDia(f,mo){
  const d=parseF(f.fe);if(!d)return "";
  const pd=inicio(f);
  switch(mo){
    case "Dos semanas antes":return diaTxt(addDias(d,-14));
    case "Una semana antes":return diaTxt(addDias(d,-7));
    case "El día de antes":return diaTxt(addDias(d,-1));
    case "Una hora antes":return diaTxt(d)+", a las "+horaTxt(new Date(pd.getTime()-36e5));
    case "Mientras":return diaTxt(d)+", a las "+horaTxt(pd);
    case "Al acabar":return diaTxt(d)+", sobre las "+horaTxt(new Date(pd.getTime()+plan(f).total*6e4));
    case "Al día siguiente":return diaTxt(addDias(d,1));
  }
  return "";
}
function tareas(f,P){
  P=P||plan(f);
  const ids=new Set(P.el);
  const L=(BP.checklist||[]).filter(c=>(c.formato==="ambos"||c.formato===f.fmt)&&(c.grupo==="todos"||(Array.isArray(c.grupo)&&c.grupo.indexOf(f.n)>=0))&&(!c.si_estaciones||c.si_estaciones.some(s=>ids.has(s))));
  return MOMENTOS.map(mo=>({momento:mo,dia:momentoDia(f,mo),items:L.filter(c=>c.momento===mo)})).filter(g=>g.items.length);
}

// ---------- material ----------
const clavMat=t=>"m"+hash(nrm(t)).toString(36);
function material(f,P){
  P=P||plan(f);
  const video=f.fmt==="video",maxN=+String(f.n).split("-")[1]+1;
  const indiv=/por (persona|invitada)|individual|una por invitada/i;
  const tieneEst=a=>a.some(s=>P.el.indexOf(s)>=0);
  const gen=(BP.material||[]).filter(t=>{
    if(video)return /luz|libreta|agua|basura/i.test(t);
    if(/labios/i.test(t))return tieneEst(["labios"]);
    if(/pesta|ceja/i.test(t))return tieneEst(["pestanas","cejas"]);
    if(/brocha/i.test(t))return tieneEst(["base","corrector","colorete","ojos","cejas"]);
    if(/esponj/i.test(t))return tieneEst(["base","corrector"]);
    return true;
  });
  const visto=new Set(gen.map(nrm)),porEst=[];
  P.el.forEach(s=>{
    const L=(EST[s].material||[]).filter(t=>!(video&&indiv.test(t))).filter(t=>{const n=nrm(t);if(visto.has(n))return false;visto.add(n);return true});
    if(L.length)porEst.push({id:s,titulo:EST[s].titulo,items:L.map(cap)});
  });
  return {kits:video?0:maxN,gen,porEst};
}

// ---------- invitaciones ----------
function invita(f,i){
  const d=parseF(f.fe),pd=inicio(f);
  let t=i.texto;
  if(pd&&pd.getHours()===1)t=t.split("a las {hora}").join("a la {hora}");
  return t.split("{dia}").join(d?diaTxt(d):"[día]").split("{hora}").join(pd?horaTxt(pd):"[hora]");
}
function invGrupos(f){
  const I=BP.invitaciones||[],g=id=>I.find(x=>x.id===id);
  const para=f.fmt==="video"?[g("videollamada")]:["intimas","trabajo","vecinas","familia"].map(g);
  return {para:para.filter(Boolean),otros:["recordatorio","no_puede"].map(g).filter(Boolean)};
}

// ---------- calendario ----------
function icsTexto(f,P){
  P=P||plan(f);
  const pd=inicio(f);if(!pd)return "";
  const now=new Date(),dts=now.getUTCFullYear()+p2(now.getUTCMonth()+1)+p2(now.getUTCDate())+"T"+p2(now.getUTCHours())+p2(now.getUTCMinutes())+p2(now.getUTCSeconds())+"Z";
  const V=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Fam Studio//Mi Beauty Party//ES","CALSCALE:GREGORIAN"];
  const ev=(uid,a,b,nom,desc)=>V.push("BEGIN:VEVENT","UID:"+uid+"-"+f.id+"@famstudio.local","DTSTAMP:"+dts,"DTSTART:"+FX.stamp(a),"DTEND:"+FX.stamp(b),"SUMMARY:"+FX.icsEsc(nom),"DESCRIPTION:"+FX.icsEsc(desc),
    "BEGIN:VALARM","TRIGGER:-PT15M","ACTION:DISPLAY","DESCRIPTION:"+FX.icsEsc(nom),"END:VALARM","END:VEVENT");
  const fin=new Date(pd.getTime()+P.total*6e4),T=tareas(f,P),d0=parseF(f.fe);
  const lista=mo=>{const g=T.find(x=>x.momento===mo);return g?g.items.map(c=>c.texto).join(" · "):""};
  const futuro=a=>a.getTime()>now.getTime()-864e5;
  [["Dos semanas antes",-14],["Una semana antes",-7],["El día de antes",-1],["Al día siguiente",1]].forEach(([mo,n])=>{
    const l=lista(mo);if(!l)return;
    const a=new Date(d0.getFullYear(),d0.getMonth(),d0.getDate()+n,10,0);
    if(futuro(a))ev("t"+n,a,new Date(a.getTime()+30*6e4),"Beauty Party: "+mo.toLowerCase(),mo+": "+l);
  });
  const l1=lista("Una hora antes");
  if(l1&&futuro(pd))ev("h1",new Date(pd.getTime()-36e5),pd,"Beauty Party: prepara la mesa","Una hora antes: "+l1);
  const lm=lista("Mientras"),guion=P.B.filter(b=>b.k!=="margen").map(b=>b.titulo+" ("+b.m+" min)").join(" · ");
  ev("fiesta",pd,fin,"Mi Beauty Party","La tarde: "+guion+(lm?". Mientras: "+lm:"")+". Abre Fam Studio, Equipo, Mi Beauty Party, para ver la guía.");
  const la=lista("Al acabar");
  if(la)ev("fin",fin,new Date(fin.getTime()+30*6e4),"Beauty Party: al acabar","Al acabar: "+la);
  V.push("END:VCALENDAR");
  return V.map(FX.fold).join("\r\n")+"\r\n";
}
function descargaIcs(f){
  const txt=icsTexto(f);if(!txt){toast("Pon primero el día");return}
  const b=new Blob([txt],{type:"text/calendar;charset=utf-8"}),u=URL.createObjectURL(b),a=document.createElement("a");
  a.href=u;a.download="fam-studio-beauty-party.ics";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);
  toast("Calendario preparado");
}

// ---------- seguirla en directo ----------
function liveGuion(f,P){
  P=P||plan(f);
  const bl=[];
  P.B.forEach(b=>{
    if(b.k==="margen")return;
    const o={min:b.ini+"-"+b.fin,mins:b.m,titulo:b.titulo};
    if(b.k==="bienvenida"){
      const g=GU.bienvenida||{};
      o.que_haces=g.que_haces||"";o.dices=(g.dices||[]).concat(g.presentacion_farmasi?[g.presentacion_farmasi]:[]);
      if(f.fmt==="video")o.truco=(VD.antes||[])[2]||"";
    }else if(b.k==="est"){
      const e=EST[b.id],prod=productoDe(f,b.id),idx=P.el.indexOf(b.id);
      o.titulo=b.titulo+(prod?" · "+pnom(prod):"");o.que_haces=e.que_haces+(f.fmt==="video"?" Por videollamada: "+e.en_video:"");o.dices=dices(b.id,prod,idx);o.truco=e.truco;
      o.nota=[e.higiene,e.nota].filter(Boolean).join(" ");
    }else if(b.k==="libres"){
      o.que_haces=f.fmt==="video"?"Deja un rato para las dudas. Nombra a quien pregunta y contesta sin prisa.":"Cada una prueba lo que más le ha gustado, con su espejo y su kit. Pasa por cada una y pregunta qué sensación le deja.";
      o.dices=[GU.transicion||"Antes de seguir, ¿alguna pregunta?",PREG_FIN];
    }else if(b.k==="cierre"){
      const g=GU.cierre||{};
      o.que_haces=g.que_haces||"";o.dices=g.dices||[];o.truco=(g.apuntar||[])[0]||"";
      if(P.el.some(s=>/^nutri/.test(s)))o.nota=g.nota_nutricion||NUTRI;
    }
    bl.push(o);
  });
  return {titulo:"Mi Beauty Party",unidad:"parte",bloques:bl};
}

// ---------- PDF: los datos que necesita beauty_pdf.js ----------
const TG={};
function guia(f){
  const P=plan(f),pd=inicio(f),d=parseF(f.fe);
  const T=tareas(f,P),Mt=material(f,P),IG=invGrupos(f);
  const sig=hash(JSON.stringify([f.fe,f.h,f.fmt,f.n,f.min,f.tipo,f.tema,f.p,f.sel,P.el.length,f.chk,f.mat]));
  const id="bp:"+f.id+":"+sig.toString(36);
  const prods={};P.el.forEach(s=>{const p=productoDe(f,s);if(p)prods[s]=p});
  const G={id,bp:true,titulo:"Mi Beauty Party",amp:{portada:{titulo:"Mi Beauty Party"}},
    f:{fmt:f.fmt,n:f.n,min:f.min},
    portada:{antetitulo:"Guía para tu tarde",titulo:"Mi Beauty Party",sub:(d?cap(diaTxt(d))+(pd?", a las "+horaTxt(pd):"")+". ":"")+f.n+" invitadas, "+P.total+" minutos, "+(f.fmt==="video"?"por videollamada":"en casa")+"."},
    vistazo:P.B.map(b=>({ini:b.ini,fin:b.fin,m:b.m,titulo:b.titulo,k:b.k})),total:P.total,
    fuera:P.fuera.map(x=>EST[x.id].titulo),faltan:P.faltan.map(x=>x.texto),
    bloques:P.B.filter(b=>b.k!=="margen").map(b=>{
      const o={k:b.k,titulo:b.titulo,m:b.m,ini:b.ini,fin:b.fin};
      if(b.k==="bienvenida"){const g=GU.bienvenida||{};o.haces=g.que_haces||"";o.dices=(g.dices||[]).concat(g.presentacion_farmasi?[g.presentacion_farmasi]:[])}
      else if(b.k==="est"){const e=EST[b.id],pr=prods[b.id]||"",i=P.el.indexOf(b.id);o.id=b.id;o.prod=pr;o.pnom=pr?pnom(pr):"";o.haces=e.que_haces+(f.fmt==="video"?" Por videollamada: "+e.en_video:"");o.dices=dices(b.id,pr,i);o.truco=e.truco;o.nota=e.nota||""}
      else if(b.k==="libres"){o.haces=f.fmt==="video"?"Deja un rato para las dudas y nombra a quien pregunta.":"Cada una prueba lo que más le ha gustado y tú pasas por cada una para preguntarle qué sensación le deja.";o.dices=[GU.transicion||"",(PREG_FIN)].filter(Boolean)}
      else{const g=GU.cierre||{};o.haces=g.que_haces||"";o.dices=g.dices||[];o.apuntar=(g.apuntar||[]).slice(0,3);if(P.el.some(s=>/^nutri/.test(s)))o.nota=g.nota_nutricion||NUTRI}
      return o;
    }),
    tareas:T.map(g=>({momento:g.momento,dia:g.dia,items:g.items.map(c=>c.texto)})),
    material:{kits:Mt.kits,gen:Mt.gen,porEst:Mt.porEst.map(x=>({titulo:x.titulo,items:x.items}))},
    higiene:(BP.higiene||[]).slice(),
    invit:IG.para.concat(IG.otros).map(i=>({para:i.para,texto:invita(f,i)})),
    productos:Object.keys(prods).map(s=>prods[s])};
  TG[id]=G;
  return G;
}
function guiaDe(id){return TG[id]||null}

// ---------- pantalla: entrada ----------
const fraseIntro=()=>{const t=String(BP.intro||"").split(/(?<=\.)\s+/).filter(Boolean);return {que:t[0]||"",adapta:t.slice(1).join(" ")}};
const tituloF=f=>{const d=parseF(f.fe);return d?"Beauty Party del "+diaTxt(d):"Beauty Party sin fecha"};
function resumenF(f){
  const P=f.ok?plan(f):null;
  return f.n+" invitadas · "+(P?P.total:f.min)+" min · "+(f.fmt==="video"?"videollamada":"en casa")+" · "+f.p.length+(f.p.length===1?" producto":" productos");
}
const heroFoto=id=>'<div class="bpfoto" data-fa="'+id+'" aria-hidden="true"></div>';
function entHtml(){
  const L=ordenadas(),o=cargar(),act=L.find(x=>x.id===o.act)||L[0]||null,I=fraseIntro();
  const lista=act&&act.ok?act:null;
  let h='<section class="bp-hero">'+heroFoto("mesa_preparada")+'<div class="bp-hero-in"><span class="rbadge">Solo para el equipo</span><h2>Mi Beauty Party</h2><p>'+esc(I.que)+'</p></div></section>';
  h+='<section class="panel bp-ent">';
  if(lista)h+='<button type="button" class="btn big bp-main" data-bp="abre" data-v="'+esc(lista.id)+'">Seguir con mi Beauty Party'+(parseF(lista.fe)?" del "+esc(diaTxt(parseF(lista.fe))):"")+'</button>';
  else if(act&&!act.ok)h+='<button type="button" class="btn big bp-main" data-bp="abre" data-v="'+esc(act.id)+'">Seguir preparando mi Beauty Party</button>';
  h+='<button type="button" class="btn big bp-main'+(act?" ghost":"")+'" data-bp="nueva">Preparar la mía</button>';
  h+='<p class="note">'+esc(I.adapta)+'</p></section>';
  h+='<section class="panel bp-como"><h3>Cómo funciona</h3><ol class="bp-pasos"><li><b>Contestas cinco preguntas</b><span>Cuándo, cuántas sois, cuánto tiempo y qué productos tienes.</span></li><li><b>Te sale tu tarde</b><span>Con tus productos, en orden y con los minutos justos, lo que haces y lo que dices.</span></li><li><b>La llevas contigo</b><span>Tareas para ir marcando, mensajes para invitar y una guía en PDF.</span></li></ol></section>';
  if(L.length>=2){
    h+='<section class="panel bp-lista" aria-label="Tus Beauty Party guardadas"><h3>Tus Beauty Party</h3><ul>'+L.map(f=>{
      const conf=S.bp&&S.bp.conf===f.id;
      return '<li class="bp-fila"><button type="button" class="bp-fab" data-bp="abre" data-v="'+esc(f.id)+'"><b>'+esc(tituloF(f))+'</b><small>'+esc(f.ok?resumenF(f):"Sin terminar · paso "+(f.paso+1)+" de 5")+'</small></button>'
       +(conf?'<span class="bp-conf"><button type="button" class="mini bp-no" data-bp="borra2" data-v="'+esc(f.id)+'">Sí, borrarla</button><button type="button" class="mini" data-bp="noborra">No</button></span>'
             :'<button type="button" class="mini bp-del" data-bp="borra" data-v="'+esc(f.id)+'" aria-label="Borrar '+esc(tituloF(f))+'">Borrar</button>')+'</li>'}).join("")+'</ul></section>';
  }else if(L.length===1){
    h+='<p class="note bp-solo"><button type="button" class="bp-txt" data-bp="borra" data-v="'+esc(L[0].id)+'">Borrar esta Beauty Party</button>'+((S.bp&&S.bp.conf===L[0].id)?' <span class="bp-conf">¿Seguro? <button type="button" class="mini bp-no" data-bp="borra2" data-v="'+esc(L[0].id)+'">Sí, borrarla</button> <button type="button" class="mini" data-bp="noborra">No</button></span>':'')+'</p>';
  }
  return h;
}

// ---------- pantalla: formulario ----------
const PASOS=["¿Cuándo?","¿Dónde y cuántas sois?","¿Cuánto tiempo?","¿Qué tipo de tarde?","¿Qué productos tienes?"];
const opt=(k,v,on,t,sub)=>'<button type="button" class="bp-opt'+(on?" on":"")+'" data-bp="set" data-k="'+k+'" data-v="'+esc(v)+'" aria-pressed="'+(on?"true":"false")+'"><b>'+esc(t)+'</b>'+(sub?'<small>'+esc(sub)+'</small>':'')+'</button>';
function prodTile(id,on){
  const p=PROD[id];if(!p)return "";
  const th=FOTOS.prodThumb(id);
  return '<button type="button" class="bp-t'+(on?" on":"")+'" data-bp="p" data-id="'+esc(id)+'" data-n="'+esc(nrm((p.nombre_corto||"")+" "+p.nombre+" "+(p.tipo||"")))+'" aria-pressed="'+(on?"true":"false")+'">'+(th?'<span class="bp-th">'+th+'</span>':'')+'<span class="bp-tn">'+esc(cap(p.nombre_corto||p.nombre))+'</span><span class="bp-ck" aria-hidden="true"></span></button>';
}
function prodsStep(f){
  const set=new Set(f.p),tm=TEMAS.find(t=>t.id===f.tema),tp=TIPOS.find(t=>t.id===f.tipo),fc=(tm||tp||{}).estaciones_foco||[];
  const por={};prodsAll().forEach(p=>{if(MAPA[p.id])(por[MAPA[p.id]]=por[MAPA[p.id]]||[]).push(p.id)});
  const grupo=s=>{
    const L=por[s]||[],n=L.filter(id=>set.has(id)).length;
    return '<details class="bp-g" data-g="'+s+'"'+(fc.indexOf(s)>=0&&fc.length<=6&&s===fc.filter(x=>por[x])[0]?" open":"")+'><summary><span class="bp-gt">'+esc(CATEG[s]||EST[s].titulo)+'</span><span class="bp-gc" data-gc="'+s+'">'+n+" de "+L.length+'</span></summary>'
     +'<button type="button" class="bp-all" data-bp="todos" data-v="'+s+'">'+(n===L.length?"Quitar todos los de esta estación":"Marcar todos los de esta estación")+'</button>'
     +'<div class="bp-tg">'+L.map(id=>prodTile(id,set.has(id))).join("")+'</div></details>';
  };
  let ord=GRP.map(g=>[g[0],g[1].slice()]);
  if(fc.length){ // los del tipo de tarde elegido, primero dentro de su bloque
    ord=ord.map(g=>[g[0],g[1].filter(s=>fc.indexOf(s)>=0).concat(g[1].filter(s=>fc.indexOf(s)<0))]);
  }
  return '<section class="panel bp-prodp"><h2>'+PASOS[4]+'</h2><p class="lead">Toca los que tienes a mano. Con ellos armo tu tarde: solo saldrán paradas de lo que tengas.</p>'
   +'<label class="bp-sl" for="bp_q">Buscar un producto</label><input id="bp_q" type="text" inputmode="search" enterkeyhint="search" autocomplete="off" autocapitalize="none" spellcheck="false" maxlength="40" placeholder="Por ejemplo: labial, crema, perfume" value="'+esc((S.bp&&S.bp.q)||"")+'">'
   +'<p class="bp-vacio" id="bp_vacio" hidden>No encuentro ese producto. Prueba con otra palabra.</p>'
   +ord.map(g=>'<h3 class="bp-gh" data-gh="'+esc(g[0])+'">'+esc(g[0])+'</h3>'+g[1].filter(s=>por[s]).map(grupo).join("")).join("")+'</section>'
   +'<div class="c2fix bp-bar" role="group" aria-label="Seguir"><button type="button" class="c2fb" data-bp="paso" data-v="-1">Atrás</button><button type="button" class="c2go c2fb" id="bp_fin" data-bp="fin">'+finTxt(f.p.length)+'</button></div>';
}
const finTxt=n=>n?"Ver mi tarde · "+n+(n===1?" producto":" productos"):"Elige algún producto";
function formHtml(f){
  const i=f.paso;
  let h='<div class="bp-fh"><button type="button" class="bp-txt" data-bp="ent">‹ Mis Beauty Party</button><span class="bp-pn" aria-live="polite">Paso '+(i+1)+' de 5</span></div>'
   +'<progress class="bp-pg" max="5" value="'+(i+1)+'" aria-label="Paso '+(i+1)+' de 5">'+(i+1)+' de 5</progress>';
  if(i===4){if(S.bp&&S.bp.q)setTimeout(()=>filtra(S.bp.q),0);return h+prodsStep(f)+'<p class="bp-cnt" id="bp_cnt" role="status">'+cuenta(f.p.length)+'</p>'}
  h+='<section class="panel bp-step"><h2>'+PASOS[i]+'</h2>';
  if(i===0){
    h+='<p class="lead">Es opcional. Con el día y la hora, tus tareas y tus mensajes llevan las fechas reales.</p>'
     +'<div class="bp-campos"><div><label for="bp_fe">Día</label><input id="bp_fe" type="date" value="'+esc(f.fe)+'" min="'+hoyIso()+'"></div><div><label for="bp_h">Hora</label><input id="bp_h" type="time" value="'+esc(f.h)+'"></div></div>'
     +'<p class="note">Si todavía no lo sabes, pasa al siguiente paso: lo puedes poner cuando quieras.</p>';
  }else if(i===1){
    h+='<p class="lead">Dónde la haces y cuántas invitadas vais a ser, sin contarte a ti.</p><h3 class="bp-q">Dónde</h3><div class="bp-og" role="group" aria-label="Dónde">'
     +opt("fmt","casa",f.fmt==="casa","En casa","Probáis los productos en la cara")+opt("fmt","video",f.fmt==="video","Por videollamada","Tú enseñas y ellas miran desde casa")+'</div>'
     +'<h3 class="bp-q">Cuántas invitadas</h3><div class="bp-og three" role="group" aria-label="Cuántas invitadas">'+GRUPOS.map(g=>opt("n",g,f.n===g,g.replace("-"," a "),"")).join("")+'</div>';
  }else if(i===2){
    const vid=f.fmt==="video";
    h+='<p class="lead">'+(vid?"Por videollamada, a partir de una hora y cuarto la gente se despista: tu tarde durará como mucho "+COMB.video_cap_minutos+" minutos.":"Cuánto rato tenéis. Con más tiempo salen más paradas.")+'</p><div class="bp-og" role="group" aria-label="Cuánto tiempo">'
     +MINS.map(m=>opt("min",String(m),f.min===m,m+" minutos",m===60?"Una tarde corta, con lo esencial":m===90?"La más habitual":"Con calma y con pruebas")).join("")+'</div>';
  }else if(i===3){
    const tipo=TIPOS.find(t=>t.id===f.tipo),temas=TEMAS.filter(t=>t.tipo===f.tipo);
    h+='<p class="lead">Opcional. Si eliges una, pongo sus paradas primero. Si no, sale lo que mejor encaja con tus productos.</p><div class="bp-og" role="group" aria-label="Tipo de tarde">'
     +opt("tipo","",!f.tipo,"Que salga lo que tengo","Sin decidirlo ahora")+TIPOS.map(t=>opt("tipo",t.id,f.tipo===t.id,t.titulo,t.descripcion)).join("")+'</div>';
    if(tipo&&temas.length)h+='<h3 class="bp-q">Un tema concreto <small>(opcional)</small></h3><div class="bp-og" role="group" aria-label="Tema">'+temas.map(t=>opt("tema",t.id,f.tema===t.id,t.titulo,t.descripcion)).join("")+'</div>';
  }
  h+='</section><div class="bp-nav"><button type="button" class="btn ghost" data-bp="paso" data-v="-1">'+(i?"Atrás":"Salir")+'</button><button type="button" class="btn" data-bp="paso" data-v="1">Siguiente</button></div>';
  return h;
}
const hoyIso=()=>{const d=new Date();return d.getFullYear()+"-"+p2(d.getMonth()+1)+"-"+p2(d.getDate())};
const cuenta=n=>n?"Llevas "+n+(n===1?" producto":" productos"):"Todavía no has marcado ninguno";

// ---------- pantalla: resultado ----------
function cabeceraRes(f,P){
  const d=parseF(f.fe),pd=inicio(f);
  return '<section class="bp-top"><button type="button" class="bp-txt cr" data-bp="ent">‹ Mis Beauty Party</button><span class="rbadge">Mi Beauty Party</span><h2>'+(d?esc(cap(diaTxt(d))):"Tu Beauty Party")+'</h2><p class="bp-sub">'+(pd?"A las "+horaTxt(pd)+" · ":"")+(f.fmt==="video"?"Por videollamada":"En casa")+'</p>'
   +'<ul class="bp-st"><li><b>'+esc(f.n.replace("-"," a "))+'</b><span>invitadas</span></li><li><b>'+P.total+'</b><span>minutos</span></li><li><b>'+P.el.length+'</b><span>'+(P.el.length===1?"parada":"paradas")+'</span></li><li><b>'+f.p.length+'</b><span>'+(f.p.length===1?"producto":"productos")+'</span></li></ul>'
   +'<div class="bp-ta"><button type="button" class="btn bp-live" data-bp="live">Seguirla en directo</button><button type="button" class="btn ghost bp-camb" data-bp="cambiar">Cambiar mis respuestas</button></div></section>';
}
function tabsHtml(t){
  return '<div class="bp-tabs" id="bp_tabs" role="tablist" aria-label="Tu Beauty Party">'+TABS.map(x=>'<button type="button" role="tab" class="bp-tab'+(x[0]===t?" on":"")+'" id="bp_tab_'+x[0]+'" aria-selected="'+(x[0]===t)+'" aria-controls="bp_pan" data-bp="tab" data-v="'+x[0]+'">'+x[1]+'</button>').join("")+'</div>';
}
const det=(t,b,open,cls)=>'<details class="bp-d'+(cls?" "+cls:"")+'"'+(open?" open":"")+'><summary>'+esc(t)+'</summary><div class="bp-db">'+b+'</div></details>';
const ul=a=>'<ul class="bp-ul">'+a.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul>';
function quote(t){return '<blockquote class="bp-q2">«'+esc(t)+'»</blockquote>'}
function cardEst(f,b,P,n){
  const e=EST[b.id],own=propios(f,b.id),sel=productoDe(f,b.id),vid=f.fmt==="video";
  const th=sel?FOTOS.prodThumb(sel):"";
  let h='<details class="bp-c" data-est="'+b.id+'"><summary><span class="bp-n">'+n+'</span><span class="bp-ct"><b>'+esc(b.titulo)+'</b><small>'+b.m+' min · minutos '+b.ini+' a '+b.fin+(sel?' · con '+esc(bajaP(pnom(sel))):"")+'</small></span>'+(th?'<span class="bp-sth">'+th+'</span>':'')+'</summary><div class="bp-cb">';
  if(own.length)h+='<p class="bp-l">Con tu'+(own.length>1?"s":"")+'</p><div class="bp-pc">'+own.map(id=>'<button type="button" class="bp-ch'+(id===sel?" on":"")+'" data-bp="usar" data-e="'+b.id+'" data-v="'+esc(id)+'" aria-pressed="'+(id===sel?"true":"false")+'">'+esc(pnom(id))+'</button>').join("")+'</div>'+(own.length>1?'<p class="note bp-uno">Enseña uno o dos. Toca el que vayas a usar y abajo cambia lo que dices.</p>':"");
  h+='<p class="bp-l">Lo que haces</p><p>'+esc(e.que_haces)+'</p>';
  if(vid)h+='<p class="bp-vid"><b>Por videollamada.</b> '+esc(e.en_video)+'</p>';
  h+='<p class="bp-l">Lo que dices</p>'+dices(b.id,sel,P.el.indexOf(b.id)).map(quote).join("");
  h+='<p class="bp-l">Un truco</p><p class="bp-truco">'+esc(e.truco)+'</p><p class="bp-hig"><b>Higiene.</b> '+esc(e.higiene)+'</p>';
  if(e.nota)h+='<p class="bp-nota">'+esc(e.nota)+'</p>';
  return h+'</div></details>';
}
function cardFija(f,b,n,P){
  let h='<details class="bp-c" data-est="'+b.k+'"><summary><span class="bp-n">'+n+'</span><span class="bp-ct"><b>'+esc(b.titulo)+'</b><small>'+b.m+' min · minutos '+b.ini+' a '+b.fin+'</small></span></summary><div class="bp-cb">';
  if(b.k==="bienvenida"){
    const g=GU.bienvenida||{};
    h+='<p class="bp-l">Lo que haces</p><p>'+esc(g.que_haces||"")+'</p><p class="bp-l">Lo que dices</p>'+(g.dices||[]).map(quote).join("")
     +(g.presentacion_farmasi?'<p class="bp-l">Para presentar la marca, en una frase</p>'+quote(g.presentacion_farmasi):"")
     +(g.orden?'<p class="bp-l">En este orden</p><ol class="bp-ol">'+g.orden.map(t=>'<li>'+esc(t)+'</li>').join("")+'</ol>':"");
    if(f.fmt==="video")h+='<p class="bp-vid"><b>Antes de conectar.</b> '+esc((VD.antes||[]).join(" "))+'</p>';
  }else if(b.k==="libres"){
    h+='<p class="bp-l">Lo que haces</p><p>'+esc(f.fmt==="video"?"Deja un rato para las dudas. Nombra a quien pregunta y contesta sin prisa.":"Cada una prueba lo que más le ha gustado, con su espejo y su kit. Pasa por cada una y pregunta qué sensación le deja.")+'</p><p class="bp-l">Lo que dices</p>'+quote(GU.transicion||"")+quote(PREG_FIN);
  }else{
    const g=GU.cierre||{};
    h+='<p class="bp-l">Lo que haces</p><p>'+esc(g.que_haces||"")+'</p><p class="bp-l">Lo que dices</p>'+(g.dices||[]).map(quote).join("")+'<p class="bp-l">Para apuntar lo que quiere cada una</p>'+ul(g.apuntar||[]);
    if(P.el.some(s=>/^nutri/.test(s)))h+='<p class="bp-nota">'+esc(g.nota_nutricion||NUTRI)+'</p>';
    if(f.fmt==="video"&&VD.cierre)h+='<p class="bp-vid"><b>Por videollamada.</b> '+esc(VD.cierre)+'</p>';
  }
  return h+'</div></details>';
}
function tardeHtml(f,P){
  let h='<section class="panel bp-vis"><h3>Tu tarde en un vistazo</h3><ol class="bp-tl">'+P.B.map(b=>'<li class="'+b.k+'"><span class="bp-tm">'+b.ini+'–'+b.fin+'</span><b>'+esc(b.titulo)+'</b><span class="bp-mn">'+b.m+' min</span></li>').join("")+'</ol><p class="bp-tot"><b>Total</b><span id="bp_total">'+P.minsSum+' minutos</span></p>';
  if(f.fmt==="video"&&f.min>COMB.video_cap_minutos)h+='<p class="note">Elegiste '+f.min+' minutos, pero por videollamada la gente se despista: la he dejado en '+P.total+'.</p>';
  if(P.sobra>=10)h+='<p class="note">Con tus productos te sobran minutos: los he dejado para '+(f.fmt==="video"?"dudas y comentarios":"que cada una pruebe lo que quiera")+'.</p>';
  if(P.fuera.length)h+='<div class="bp-fuera"><b>Quedan fuera</b><ul>'+P.fuera.map(x=>'<li>'+esc(EST[x.id].titulo)+' <span>'+(x.razon==="max"?"ya son suficientes paradas para "+P.total+" minutos":"no cabe en "+P.total+" minutos")+'</span></li>').join("")+'</ul><p>Déjalas para si os sobra tiempo o para otra tarde.</p></div>';
  h+='</section>';
  if(P.faltan.length||P.pocos){
    h+='<section class="panel bp-falta" role="note"><h3>Si te falta algo, no pasa nada</h3>'
     +(P.pocos?'<p>'+esc((BP.sin_esto||{})._casi_nada||"")+'</p>':"")
     +P.faltan.map(x=>'<p><b>Sin '+esc(bajaP((CATEG[x.id]||EST[x.id].titulo)))+'.</b> '+esc(x.texto)+'</p>').join("")+'</section>';
  }
  if(P.corta)h+='<p class="aviso">Con tus productos la tarde es corta: te sale una sola parada. Añade algún producto más si quieres una tarde más larga.</p>';
  h+='<h3 class="bp-h3">La tarde, paso a paso</h3><div class="bp-cards">';
  let n=1;
  P.B.forEach(b=>{if(b.k==="margen")return;h+=b.k==="est"?cardEst(f,b,P,n):cardFija(f,b,n,P);n++});
  h+='</div>';
  const mt=BP.mini_tip||{};
  if(mt.titulo)h+='<section class="panel bp-tip"><span class="bp-tipl">Un consejo</span><h3>'+esc(mt.titulo)+'</h3><ul>'+(mt.mejor_esto||[]).map(t=>'<li>'+esc(t)+'</li>').join("")+'</ul></section>';
  if(f.fmt==="video"){
    h+=det("Qué cambia por videollamada",'<p class="bp-l">Qué cambia</p>'+ul(VD.cambios||[])+'<p class="bp-l">Para que no se despisten</p>'+ul(VD.atencion||[])+'<p class="bp-l">Antes de conectar</p>'+ul(VD.antes||[])+'<p class="bp-l">Al despedirte</p><p>'+esc(VD.cierre||"")+'</p>',true);
  }
  const sp=GU.si_preguntan_por_ti||{};
  h+=det("Si alguna te pregunta por lo que haces tú",quote(sp.dices||"")+ul(sp.normas||[]));
  h+=det("Si alguna tiene la piel delicada, está embarazada o toma medicación",'<p>'+esc(GU.salud||"")+'</p>');
  h+=det("Preguntas para charlar",ul(GU.preguntas_para_conversar||[]));
  h+=det("Si la fiesta es en casa de otra persona",ul(BP.anfitriona||[]));
  h+=det("Errores típicos",'<ul class="bp-er">'+(BP.errores||[]).map(e=>'<li><b>'+esc(e.titulo)+'.</b> '+esc(e.texto)+'</li>').join("")+'</ul>',false,"bp-errores");
  return h;
}
function ckBtn(k,id,txt,on,tipo){return '<li><button type="button" class="bp-ckb'+(on?" on":"")+'" data-bp="'+tipo+'" data-v="'+esc(id)+'" role="checkbox" aria-checked="'+(on?"true":"false")+'"><span class="bp-box" aria-hidden="true"></span><span>'+esc(txt)+'</span></button></li>'}
function progreso(n,t,id){return '<div class="bp-prog"><progress max="'+Math.max(1,t)+'" value="'+n+'" aria-hidden="true"></progress><b id="'+id+'" role="status">'+n+' de '+t+' hechas</b></div>'}
function tareasHtml(f,P){
  const T=tareas(f,P),tot=T.reduce((a,g)=>a+g.items.length,0),hec=T.reduce((a,g)=>a+g.items.filter(c=>f.chk[c.id]).length,0);
  let h='<section class="panel bp-tar"><h3>Tu lista de tareas</h3>'+progreso(hec,tot,"bp_pt");
  if(!f.fe)h+='<p class="note">Pon el día de tu Beauty Party y cada momento te dirá su fecha real.</p>'+camposFecha(f);
  h+='</section>';
  T.forEach(g=>{
    h+='<section class="panel bp-mom"><h4>'+esc(g.momento)+'</h4>'+(g.dia?'<p class="bp-dia">'+esc(cap(g.dia))+'</p>':'')+'<ul class="bp-ckl">'+g.items.map(c=>ckBtn("chk",c.id,c.texto,!!f.chk[c.id],"ck")).join("")+'</ul></section>';
  });
  if(f.fe)h+='<section class="panel"><button type="button" class="btn big bp-main" data-bp="ics">Añadir a mi calendario</button><p class="note">Se abre con el calendario de tu móvil: la tarde y cada recordatorio, con aviso un cuarto de hora antes.</p></section>';
  return h;
}
function camposFecha(f){return '<div class="bp-campos"><div><label for="bp_fe">Día</label><input id="bp_fe" type="date" value="'+esc(f.fe)+'" min="'+hoyIso()+'"></div><div><label for="bp_h">Hora</label><input id="bp_h" type="time" value="'+esc(f.h)+'"></div></div>'}
function materialHtml(f,P){
  const M=material(f,P),todos=[].concat(M.gen,...M.porEst.map(x=>x.items)),hec=todos.filter(t=>f.mat[clavMat(t)]).length;
  let h='<section class="panel bp-tar"><h3>Lo que tienes que tener a mano</h3>'+progreso(hec,todos.length,"bp_pm");
  if(M.kits)h+='<p class="bp-kits"><b>Prepara '+M.kits+' kits</b> (uno por invitada y el tuyo): espejo, discos, bastoncillos, espátula, esponjita y toallita.</p>';
  else h+='<p class="bp-kits"><b>Por videollamada</b> ellas no tienen que comprar nada: tú enseñas y ellas siguen con lo que tengan en casa.</p>';
  h+='</section>';
  h+='<section class="panel bp-mom"><h4>Para toda la tarde</h4><ul class="bp-ckl">'+M.gen.map(t=>ckBtn("mat",clavMat(t),t,!!f.mat[clavMat(t)],"mk")).join("")+'</ul></section>';
  M.porEst.forEach(x=>{h+='<section class="panel bp-mom"><h4>'+esc(x.titulo)+'</h4><ul class="bp-ckl">'+x.items.map(t=>ckBtn("mat",clavMat(t),t,!!f.mat[clavMat(t)],"mk")).join("")+'</ul></section>'});
  h+=det("Higiene: nada se comparte",ul(BP.higiene||[]),true,"bp-hig2");
  h+=det("Si quieres comprar algo",'<ul class="bp-ul">'+(BP.material_para_comprar||[]).map(x=>'<li><b>'+esc(x.cosa)+'.</b> '+esc(cap(x.sirve_para))+'.</li>').join("")+'</ul><p class="note">'+esc((BP.sin_esto||{})._sin_material||"")+'</p>');
  return h;
}
function invHtml(f,P){
  const G=invGrupos(f),B=S.bp,ix=Math.max(0,B.inv||0)%G.para.length,cur=G.para[ix];
  let h='<section class="panel bp-inv"><h3>'+(f.fmt==="video"?"Para invitarlas":"Para invitar")+'</h3>';
  if(!f.fe||!f.h)h+='<p class="note">Pon el día y la hora y los mensajes salen con ellos puestos.</p>'+camposFecha(f);
  if(G.para.length>1)h+='<div class="bp-aud" role="group" aria-label="A quién invitas">'+G.para.map((x,i)=>'<button type="button" class="bp-ch'+(i===ix?" on":"")+'" data-bp="aud" data-v="'+i+'" aria-pressed="'+(i===ix)+'">'+esc(x.para)+'</button>').join("")+'</div>';
  const t=invita(f,cur);
  h+='<div class="bp-msg"><p>'+esc(t)+'</p><div class="acts"><button type="button" class="mini bp-b44" data-copy="'+esc(t)+'">Copiar</button>'+(G.para.length>1?'<button type="button" class="mini bp-b44" data-bp="otra">Otra versión</button>':"")+'</div></div></section>';
  G.otros.forEach(x=>{const tx=invita(f,x);h+='<section class="panel bp-inv"><h4>'+esc(x.para)+'</h4><div class="bp-msg"><p>'+esc(tx)+'</p><div class="acts"><button type="button" class="mini bp-b44" data-copy="'+esc(tx)+'">Copiar</button></div></div></section>'});
  return h;
}
function despuesHtml(f,P){
  let h='<section class="panel bp-inv"><h3>Después de la tarde</h3><p class="lead">Un mensaje corto, sin ninguna prisa y sin presionar. Elige el que encaje con cada una.</p>';
  h+=(BP.despues||[]).map(x=>'<div class="bp-msg"><b class="bp-para">'+esc(x.para)+'</b><p>'+esc(x.texto)+'</p><div class="acts"><button type="button" class="mini bp-b44" data-copy="'+esc(x.texto)+'">Copiar</button></div></div>').join("")+'</section>';
  h+='<section class="panel bp-ctc"><h3>Apunta a cada invitada</h3><p>Para acordarte de a quién le escribiste y cuándo volver a hacerlo, usa Mis contactos. Solo un nombre o un alias.</p><button type="button" class="btn" data-tab="contactos">Ir a Mis contactos</button></section>';
  return h;
}
function pdfHtml(f,P){
  const g=guia(f);
  return '<section class="panel bp-pdf"><h3>Tu guía en PDF</h3><p class="lead">La tarde paso a paso con tus productos, tus tareas, el material y las invitaciones, en varias páginas. Es para ti, y puedes mandársela a una compañera.</p>'+mgBloque(g)+'<p class="note">Lleva los nombres de tus productos y tu día y hora. No la publiques: es tu guía de trabajo.</p></section>';
}
function resHtml(f,tab){
  const P=plan(f),B=S.bp||(S.bp={});
  const t=TABS.some(x=>x[0]===tab)?tab:"tarde";
  let h=cabeceraRes(f,P)+tabsHtml(t)+'<div id="bp_pan" role="tabpanel" aria-labelledby="bp_tab_'+t+'">';
  h+=t==="tarde"?tardeHtml(f,P):t==="tareas"?tareasHtml(f,P):t==="material"?materialHtml(f,P):t==="inv"?invHtml(f,P):t==="despues"?despuesHtml(f,P):pdfHtml(f,P);
  h+='</div><section class="panel bp-fin"><button type="button" class="btn ghost" data-bp="cambiar">Cambiar mis respuestas</button><button type="button" class="btn ghost" data-bp="nueva">Empezar otra</button></section>';
  return h;
}

// ---------- la vista ----------
function viewBeauty(){
  const B=S.bp||(S.bp={v:"ent"});
  if(B.v==="form"){const f=fiesta(B.id);if(f)return formHtml(f);B.v="ent"}
  if(B.v==="res"){const f=fiesta(B.id);if(f&&f.ok)return resHtml(f,B.tab)}
  B.v="ent";
  return entHtml();
}
VIEWS.eq_beauty=viewBeauty;

// ---------- acciones ----------
function ir(v,id,extra){S.bp=Object.assign({v,id:id||""},extra||{});S.anc="";render()}
function actualiza(f){pon(f)}
function aplicaProductos(f){
  const set=new Set(f.p);
  document.querySelectorAll("#main .bp-t").forEach(b=>{const on=set.has(b.dataset.id);b.classList.toggle("on",on);b.setAttribute("aria-pressed",on?"true":"false")});
  document.querySelectorAll("#main details.bp-g").forEach(d=>{
    const ids=[...d.querySelectorAll(".bp-t")].map(b=>b.dataset.id),n=ids.filter(id=>set.has(id)).length;
    const c=d.querySelector(".bp-gc");if(c)c.textContent=n+" de "+ids.length;
    const a=d.querySelector(".bp-all");if(a)a.textContent=n===ids.length?"Quitar todos los de esta estación":"Marcar todos los de esta estación";
  });
  const c=document.getElementById("bp_cnt");if(c)c.textContent=cuenta(f.p.length);
  const b=document.getElementById("bp_fin");if(b)b.textContent=finTxt(f.p.length);
}
function filtra(q){
  const B=S.bp||(S.bp={});B.q=q;
  const n=nrm(q).trim().split(/\s+/).filter(Boolean);
  let hay=0;
  document.querySelectorAll("#main details.bp-g").forEach(d=>{
    let k=0;
    d.querySelectorAll(".bp-t").forEach(b=>{const ok=!n.length||n.every(w=>b.dataset.n.indexOf(w)>=0);b.hidden=!ok;if(ok)k++});
    d.hidden=!!n.length&&!k;
    const a=d.querySelector(".bp-all");if(a)a.hidden=!!n.length;
    if(n.length&&k)d.open=true;
    hay+=k;
  });
  document.querySelectorAll("#main .bp-gh").forEach(h=>{let s=h.nextElementSibling,v=false;while(s&&s.classList.contains("bp-g")){if(!s.hidden)v=true;s=s.nextElementSibling}h.hidden=!v});
  const e=document.getElementById("bp_vacio");if(e)e.hidden=!(n.length&&!hay);
}
document.addEventListener("click",ev=>{
  const b=ev.target.closest&&ev.target.closest("button[data-bp]");if(!b||!document.getElementById("main").contains(b))return;
  const d=b.dataset,a=d.bp,B=S.bp||(S.bp={v:"ent"});
  const f=B.id?fiesta(B.id):null;
  if(a==="ent"){ir("ent");return}
  if(a==="nueva"){const n=nueva();ir("form",n.id);return}
  if(a==="abre"){const g=fiesta(d.v);if(!g)return;const o=cargar();o.act=g.id;guardar(o);if(g.ok)ir("res",g.id,{tab:"tarde"});else ir("form",g.id);return}
  if(a==="borra"){B.conf=d.v;render(true);return}
  if(a==="noborra"){B.conf="";render(true);return}
  if(a==="borra2"){borra(d.v);B.conf="";toast("Borrada");render(true);return}
  if(a==="cambiar"){if(f){f.paso=0;pon(f);ir("form",f.id)}return}
  if(!f)return;
  if(a==="paso"){
    const n=+d.v;
    if(n<0&&f.paso===0){ir("ent");return}
    if(n>0&&f.paso>=4)return;
    f.paso=Math.max(0,Math.min(4,f.paso+n));pon(f);S.anc="";render();return;
  }
  if(a==="set"){
    const k=d.k,v=d.v;
    if(k==="fmt")f.fmt=v==="video"?"video":"casa";
    else if(k==="n"&&GRUPOS.indexOf(v)>=0)f.n=v;
    else if(k==="min"&&MINS.indexOf(+v)>=0)f.min=+v;
    else if(k==="tipo"){const nuevoT=f.tipo===v?"":v;if(TEMAS.find(t=>t.id===f.tema&&t.tipo!==nuevoT))f.tema="";f.tipo=nuevoT}
    else if(k==="tema"){f.tema=f.tema===v?"":v;const t=TEMAS.find(t=>t.id===f.tema);if(t)f.tipo=t.tipo}
    pon(f);render(true);return;
  }
  if(a==="p"){const i=f.p.indexOf(d.id);if(i>=0)f.p.splice(i,1);else if(PROD[d.id]&&MAPA[d.id])f.p.push(d.id);f.p=prodsAll().map(p=>p.id).filter(id=>f.p.indexOf(id)>=0);pon(f);aplicaProductos(f);return}
  if(a==="todos"){
    const ids=prodsAll().map(p=>p.id).filter(id=>MAPA[id]===d.v),todos=ids.every(id=>f.p.indexOf(id)>=0);
    f.p=f.p.filter(id=>ids.indexOf(id)<0);if(!todos)f.p=f.p.concat(ids);f.p=prodsAll().map(p=>p.id).filter(id=>f.p.indexOf(id)>=0);
    pon(f);aplicaProductos(f);return;
  }
  if(a==="fin"){
    if(!f.p.length){toast("Marca al menos un producto");return}
    f.ok=true;f.paso=4;pon(f);ir("res",f.id,{tab:"tarde"});return;
  }
  if(a==="tab"){B.tab=d.v;S.anc="bp_tabs";render();return}
  if(a==="ck"||a==="mk"){
    const m=a==="ck"?f.chk:f.mat;if(m[d.v])delete m[d.v];else m[d.v]=1;pon(f);
    const on=!!m[d.v];b.classList.toggle("on",on);b.setAttribute("aria-checked",on?"true":"false");
    const P=plan(f);
    if(a==="ck"){const T=tareas(f,P),tot=T.reduce((x,g)=>x+g.items.length,0),h=T.reduce((x,g)=>x+g.items.filter(c=>f.chk[c.id]).length,0);const e=document.getElementById("bp_pt");if(e){e.textContent=h+" de "+tot+" hechas";const p=e.parentNode.querySelector("progress");if(p){p.max=Math.max(1,tot);p.value=h}}}
    else{const M=material(f,P),todos=[].concat(M.gen,...M.porEst.map(x=>x.items)),h=todos.filter(t=>f.mat[clavMat(t)]).length;const e=document.getElementById("bp_pm");if(e){e.textContent=h+" de "+todos.length+" hechas";const p=e.parentNode.querySelector("progress");if(p){p.max=Math.max(1,todos.length);p.value=h}}}
    return;
  }
  if(a==="usar"){f.sel[d.e]=d.v;pon(f);B.abre=d.e;render(true);const c=document.querySelector('#main details.bp-c[data-est="'+d.e+'"]');if(c)c.open=true;return}
  if(a==="aud"){B.inv=+d.v||0;render(true);return}
  if(a==="otra"){B.inv=(B.inv||0)+1;render(true);return}
  if(a==="live"){const g=liveGuion(f);XT.lvSegAbreG(g);return}
  if(a==="ics"){descargaIcs(f);return}
});
// entrar desde Equipo (o desde cualquier acceso) empieza por la entrada; volver con «‹ Atrás» deja donde estabas
document.addEventListener("click",ev=>{const t=ev.target.closest&&ev.target.closest('[data-tab="eq_beauty"]');if(t&&!t.dataset.back)S.bp={v:"ent"}},true);
document.addEventListener("input",ev=>{
  const el=ev.target;if(!el)return;
  if(el.id==="bp_q")filtra(el.value.slice(0,40));
});
document.addEventListener("change",ev=>{
  const el=ev.target;if(!el||(el.id!=="bp_fe"&&el.id!=="bp_h"))return;
  const B=S.bp;if(!B||!B.id)return;const f=fiesta(B.id);if(!f)return;
  if(el.id==="bp_fe")f.fe=parseF(el.value)?el.value:"";else f.h=horaOk(el.value)?el.value:"";
  pon(f);
  if(B.v==="res")render(true);
});
return {plan,cargar,limpiaF,guia,guiaDe,tareas,material,invita,invGrupos,icsTexto,liveGuion,dices,productoDe,propios,resHtml,formHtml,entHtml,EST,MAPA,TIPOS,TEMAS,MOMENTOS,diaTxt,parseF,inicio,TABS,CATEG,nueva,pon,fiesta};
})();

// ===== Fam Studio · la guía de Mi Beauty Party en PDF (C14) =====
// Usa el motor de las mini guías (guias.js): mismas páginas de 1080 x 1350, mismos tres estilos, mismo PDF por dentro.
// La portada es la de las mini guías (con la foto de ambiente si existe, y si no, su variante sin foto). El resto son páginas «de flujo»:
// bloques (título, texto, frases, truco, casillas...) que se miden antes de dibujar y se reparten en las páginas que hagan falta, sin cortar nada.
// bpMaqueta(ctx,g) devuelve {pags,informe} como mgMaqueta; bpPinta dibuja una página; bpAssets baja la foto y las imágenes de producto.
const BP_GAP=26,BP_AV=MG_BOT-MG_TOP;
function bpMide(ctx,it,s){
  const W=MG_CW,o=Object.assign({},it);
  switch(it.t){
    case "tag":o.h=30;break;
    case "lab":o.h=30;break;
    case "h1":{const T=mgFitTit(ctx,it.x,mgRango(it.max||104,56,4),W,3);o.T=T;o.h=mgTitH(T.l.length,T.s,1.04);o.ok=T.ok;break}
    case "p":{ctx.font=mgF(it.sz||s,it.w||400);const r=tjWrap(ctx,it.x,W);o.l=r.l;o.lh=Math.round((it.sz||s)*1.4);o.sz=it.sz||s;o.h=r.l.length*o.lh;o.ok=!r.over;break}
    case "q":{const sz=s;ctx.font=mgF(sz,500);const r=tjWrap(ctx,"«"+it.x+"»",W-56);o.l=r.l;o.lh=Math.round(sz*1.4);o.sz=sz;o.pad=18;o.h=r.l.length*o.lh+2*o.pad;o.ok=!r.over;break}
    case "box":{const sz=s-2,pad=26,lab=24;ctx.font=mgF(sz);const r=tjWrap(ctx,it.x,W-2*pad);o.l=r.l;o.sz=sz;o.lh=Math.round(sz*1.4);o.pad=pad;o.labH=lab;o.h=pad+lab+10+r.l.length*o.lh+pad-4;o.ok=!r.over;break}
    case "ck":{const sz=s-2;ctx.font=mgF(sz,500);const r=tjWrap(ctx,it.x,W-76);o.l=r.l;o.sz=sz;o.lh=Math.round(sz*1.36);o.h=Math.max(44,r.l.length*o.lh)+20;o.ok=!r.over;o.gap=6;break}
    case "bul":{const sz=s-2;ctx.font=mgF(sz,400);const r=tjWrap(ctx,it.x,W-48);o.l=r.l;o.sz=sz;o.lh=Math.round(sz*1.38);o.h=r.l.length*o.lh+8;o.ok=!r.over;o.gap=12;break}
    case "hd":{o.h=54+(it.dia?44:0);o.gapAntes=40;break}
    case "row":{const sz=Math.min(s,36);ctx.font=mgF(sz,600);const r=tjWrap(ctx,it.x,W-330);o.l=r.l;o.sz=sz;o.lh=Math.round(sz*1.3);o.h=Math.max(66,r.l.length*o.lh+28);o.ok=!r.over;o.gap=0;break}
    case "h2":o.h=62;break;
    case "prod":o.h=176;break;
    default:o.h=0;
  }
  return o;
}
// reparte los bloques en páginas; los párrafos largos se pueden partir entre dos páginas (dejando al menos dos líneas en cada una)
function bpReparte(ctx,items,s){
  const pages=[];let cur={it:[],y:0};
  const push=()=>{if(cur.it.length)pages.push(cur);cur={it:[],y:0}};
  const gapDe=(a,b)=>{if(!a)return 0;if(b.gapAntes)return b.gapAntes;return a.gap!=null?a.gap:BP_GAP};
  let ok=true;
  for(let n=0;n<items.length;n++){
    if(items[n].t==="salto"){push();continue}
    let m=bpMide(ctx,items[n],s);if(m.ok===false)ok=false;
    // un título o una etiqueta no se queda solo al final de una página
    const pegado=m.t==="lab"||m.t==="hd"||m.t==="tag"||m.t==="h1";
    for(;;){
      const prev=cur.it[cur.it.length-1],g=gapDe(prev,m),need=m.h+g;
      let sig=null;
      if(pegado&&n+1<items.length){sig=bpMide(ctx,items[n+1],s)}
      const extra=sig?Math.min(sig.h,(sig.l?sig.lh*2+4:sig.h))+gapDe(m,sig):0;
      if(cur.y+need+extra<=BP_AV||!cur.it.length&&need<=BP_AV){cur.it.push(m);cur.y+=need;break}
      if(m.l&&(m.t==="p")&&!pegado){ // partir un párrafo
        const room=BP_AV-cur.y-g,k=Math.floor(room/m.lh);
        if(k>=2&&m.l.length-k>=2){
          const a=Object.assign({},m,{l:m.l.slice(0,k),h:k*m.lh}),b=Object.assign({},m,{l:m.l.slice(k),h:(m.l.length-k)*m.lh});
          cur.it.push(a);cur.y+=a.h+g;push();m=b;continue;
        }
      }
      if(!cur.it.length){cur.it.push(m);cur.y+=need;ok=false;break} // no cabe ni solo: se marca
      push();
    }
  }
  push();
  return {pages,ok};
}
function bpFlujo(ctx,items,sizes){
  let best=null;
  for(const s of sizes){const r=bpReparte(ctx,items,s);r.s=s;if(!best||r.pages.length<best.pages.length||(r.pages.length===best.pages.length&&!best.ok&&r.ok))best=r}
  return best;
}
function bpMaqueta(ctx,g){
  const inf={pags:0,recortado:false,motivos:[],reducido:false,reducidas:[],minCuerpo:99,minTitulo:999,pasosPorPagina:[],tam:[],uso:[],maxY:0};
  const amp={portada:{antetitulo:g.portada.antetitulo,titulo:g.portada.titulo,sub:g.portada.sub,foto:""},gancho:{frase:"x",texto:"x"},pasos:[{titulo:"x",texto:"x"}],errores:[{mal:"x",bien:"x"}],lista:{titulo:"x",items:["x"]},extra:{titulo:"x",texto:"x"},cierre:{frase:"x",texto:"x",pide:"x"}};
  const L0=mgMaqueta(ctx,amp,{}),P=[L0.pags[0]];
  inf.minTitulo=L0.informe.minTitulo;
  const seccion=(etq,sec,items,sizes,sinSufijo)=>{
    // si todo cabe en una página se deja en una; si no, la parte de «lo que haces» y la de «lo que dices» van cada una en la suya
    let r=bpFlujo(ctx,items.filter(x=>x.t!=="salto"),sizes);
    if(r.pages.length>1&&items.some(x=>x.t==="salto"))r=bpFlujo(ctx,items,sizes);
    if(!r.ok){inf.recortado=true;if(inf.motivos.indexOf(sec)<0)inf.motivos.push(sec)}
    r.pages.forEach((pg,k)=>{
      const n=r.pages.length;
      P.push({t:"bp",bp:true,sec,etq:etq+(n>1&&!sinSufijo?"  "+(k+1)+"/"+n:""),it:pg.it,s:r.s,y:pg.y,tam:{titulo:0,cuerpo:r.s}});
      inf.uso.push(Math.round(pg.y/BP_AV*100)/100);inf.minCuerpo=Math.min(inf.minCuerpo,r.s);inf.maxY=Math.max(inf.maxY,MG_TOP+pg.y);
      inf.pasosPorPagina.push(pg.it.length);
    });
  };
  const SZ=[40,38,36,34,32],SZ2=[36,34,32];
  // 1. la tarde de un vistazo
  const vi=[{t:"h1",x:"Tu tarde en un vistazo"},{t:"p",x:g.portada.sub,sz:34}];
  g.vistazo.forEach(v=>vi.push({t:"row",x:v.titulo,a:v.ini+"–"+v.fin,b:v.m+" min"}));
  vi.push({t:"box",lab:"EN TOTAL",x:g.total+" minutos, contado todo: bienvenida, paradas, pruebas, cierre y un margen por si algo se alarga."});
  if(g.fuera.length)vi.push({t:"box",lab:"QUEDAN FUERA",x:g.fuera.join(", ")+". Para si os sobra tiempo o para otra tarde."});
  seccion("TU TARDE","Tu tarde en un vistazo",vi,SZ2);
  // 2. cada parada
  const nb=g.bloques.length;
  g.bloques.forEach((b,i)=>{
    const cab=(b.k==="est"?"PARADA ":"")+(i+1)+" DE "+nb;
    const it=[{t:"tag",x:cab+" · "+b.m+" MINUTOS"},{t:"h1",x:b.titulo,max:96}];
    if(b.prod)it.push({t:"prod",prod:b.prod,nom:b.pnom});
    it.push({t:"lab",x:"LO QUE HACES"},{t:"p",x:b.haces});
    if(b.truco)it.push({t:"box",lab:"UN TRUCO",x:b.truco});
    if(b.apuntar&&b.apuntar.length){it.push({t:"lab",x:"PARA APUNTAR LO QUE QUIERE CADA UNA"});b.apuntar.forEach(a=>it.push({t:"bul",x:a}))}
    it.push({t:"salto"},{t:"tag",x:cab+" · "+b.titulo.toUpperCase()},{t:"h2",x:"Lo que dices"});
    (b.dices||[]).forEach(d=>it.push({t:"q",x:d}));
    if(b.nota)it.push({t:"p",x:b.nota,sz:30,w:600});
    seccion("LA TARDE",b.titulo,it,SZ,true);
  });
  // 3. tareas
  const ta=[{t:"h1",x:"Tu lista de tareas"}];
  g.tareas.forEach(m=>{ta.push({t:"hd",x:m.momento,dia:m.dia});m.items.forEach(x=>ta.push({t:"ck",x}))});
  seccion("TAREAS","Tareas",ta,[34,32]);
  // 4. material
  const ma=[{t:"h1",x:"Lo que tienes que tener a mano"}];
  ma.push({t:"p",x:g.material.kits?"Prepara "+g.material.kits+" kits, uno por invitada y el tuyo: espejo, discos, bastoncillos, espátula, esponjita y toallita.":"Por videollamada ellas no tienen que comprar nada: tú enseñas y ellas siguen con lo que tengan en casa.",sz:32});
  ma.push({t:"hd",x:"Para toda la tarde"});g.material.gen.forEach(x=>ma.push({t:"ck",x}));
  g.material.porEst.forEach(e=>{ma.push({t:"hd",x:e.titulo});e.items.forEach(x=>ma.push({t:"ck",x}))});
  seccion("MATERIAL","Material",ma,[34,32]);
  // 5. higiene
  const hi=[{t:"h1",x:"Higiene: nada se comparte"}];g.higiene.forEach(x=>hi.push({t:"bul",x}));
  seccion("HIGIENE","Higiene",hi,[36,34,32]);
  // 6. invitaciones
  const iv=[{t:"h1",x:"Para invitarlas"}];
  g.invit.forEach(x=>iv.push({t:"box",lab:x.para.toUpperCase(),x:x.texto}));
  seccion("INVITACIONES","Invitaciones",iv,[36,34,32]);
  inf.pags=P.length;inf.tam=P.map((p,i)=>Object.assign({p:i+1,t:p.t},p.tam));
  if(inf.minCuerpo===99)inf.minCuerpo=0;
  P.forEach((p,i)=>{if(i&&p.t==="bp"&&p.s<32){inf.recortado=true}});
  return {pags:P,informe:inf};
}
async function bpAssets(g){
  const foto=typeof FOTOS!=="undefined"?FOTOS.ambiente("mesa_preparada").then(u=>u?mgImg(u):null):Promise.resolve(null);
  const ids=[...new Set((g.productos||[]).filter(id=>id&&typeof FOTOS!=="undefined"&&FOTOS.tiene(id)))];
  const pp=Promise.all(ids.map(id=>FOTOS.prodSrc(id).then(mgImg))).then(L=>{const m={};ids.forEach((id,i)=>{if(L[i])m[id]=L[i]});return m});
  const to=new Promise(ok=>setTimeout(()=>ok("t"),9000));
  const v=await Promise.race([Promise.all([foto,pp]),to]);
  if(v==="t")return {foto:null,prod:{},tipo:"",pedidos:ids.length,tarde:true};
  return {foto:v[0],prod:v[1],tipo:"",pedidos:ids.length};
}
function bpPinta(ctx,pg,E,as,i,n,user){
  const X=MG_X,W=MG_CW;
  mgFondo(ctx,E);mgCab(ctx,E,pg.etq);
  let y=MG_TOP;
  const items=pg.it,slack=Math.max(0,BP_AV-pg.y),k=Math.max(1,items.length-1),ex=Math.min(26,Math.floor(slack/k/2));
  items.forEach((it,j)=>{
    const prev=items[j-1],g=prev?(it.gapAntes||(prev.gap!=null?prev.gap:BP_GAP)):0;
    y+=g+(prev&&items.length>2&&!it.gapAntes&&prev.t!=="lab"&&prev.t!=="tag"?ex:0);
    bpItem(ctx,it,E,as,X,y,W,j===0);
    y+=it.h;
  });
  mgPie(ctx,E,i,n,user,false);
}
function bpItem(ctx,it,E,as,X,y,W,primero){
  switch(it.t){
    case "tag":ctx.fillStyle=E.sub;ctx.font=mgF(24,700);tjEsp(ctx,it.x,X,y+22,5);break;
    case "lab":ctx.fillStyle=E.ac;ctx.font=mgF(22,700);tjEsp(ctx,it.x,X,y+22,6);break;
    case "h1":mgAnton(ctx,it.T.l,X,y,it.T.s,1.04,E.tx);break;
    case "h2":mgAnton(ctx,[String(it.x).toUpperCase()],X,y,56,1,E.tx);break;
    case "p":mgTxt(ctx,it.l,X,y,it.sz,it.lh,E.tx,it.w||400);break;
    case "q":{
      mgRR(ctx,X,y,W,it.h,12);ctx.fillStyle=E.quote;ctx.fill();
      ctx.fillStyle=E.ac;ctx.fillRect(X,y+8,6,it.h-16);
      mgTxt(ctx,it.l,X+34,y+it.pad,it.sz,it.lh,E.tx,500);break}
    case "box":{
      mgRR(ctx,X,y,W,it.h,12);ctx.fillStyle=E.box;ctx.fill();
      ctx.fillStyle=E.ac;ctx.font=mgF(it.labH*.9,700);tjEsp(ctx,it.lab,X+it.pad,y+it.pad+Math.round(it.labH*.8),5);
      mgTxt(ctx,it.l,X+it.pad,y+it.pad+it.labH+6,it.sz,it.lh,E.tx);break}
    case "ck":{
      mgRR(ctx,X,y+Math.round((it.lh-34)/2)+2,34,34,8);ctx.strokeStyle=E.ac;ctx.lineWidth=3.5;ctx.stroke();
      mgTxt(ctx,it.l,X+60,y+2,it.sz,it.lh,E.tx,500);break}
    case "bul":{
      ctx.beginPath();ctx.arc(X+9,y+Math.round(it.lh/2)+3,7,0,Math.PI*2);ctx.fillStyle=E.ac;ctx.fill();
      mgTxt(ctx,it.l,X+40,y+4,it.sz,it.lh,E.tx);break}
    case "hd":{
      if(!primero){ctx.fillStyle=E.rule;ctx.fillRect(X,y-14,W,2)}
      mgAnton(ctx,[String(it.x).toUpperCase()],X,y,44,1,E.tx);
      if(it.dia){ctx.fillStyle=E.sub;ctx.font=mgF(30,600);ctx.fillText(it.dia.charAt(0).toUpperCase()+it.dia.slice(1),X,y+54+22)}
      break}
    case "row":{
      ctx.fillStyle=E.ac;ctx.font=mgF(Math.min(it.sz,34),700);ctx.fillText(it.a,X,y+Math.round(it.h/2)+11);
      mgTxt(ctx,it.l,X+190,y+Math.round((it.h-it.l.length*it.lh)/2),it.sz,it.lh,E.tx,600);
      ctx.textAlign="right";ctx.fillStyle=E.sub;ctx.font=mgF(30,600);ctx.fillText(it.b,X+W,y+Math.round(it.h/2)+11);ctx.textAlign="left";
      ctx.fillStyle=E.rule;ctx.fillRect(X,y+it.h-2,W,2);break}
    case "prod":{
      const r=72,cx=X+r+4,cy=y+it.h/2,im=(as.prod||{})[it.prod];
      ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fillStyle="#FFFFFF";ctx.fill();ctx.strokeStyle=E.rule;ctx.lineWidth=2;ctx.stroke();
      if(im){ctx.save();ctx.beginPath();ctx.arc(cx,cy,r-2,0,Math.PI*2);ctx.clip();const q=r*1.7,sc=Math.min(q/im.width,q/im.height);ctx.drawImage(im,cx-im.width*sc/2,cy-im.height*sc/2,im.width*sc,im.height*sc);ctx.restore()}
      ctx.fillStyle=E.ac;ctx.font=mgF(22,700);tjEsp(ctx,"CON TU",X+2*r+40,cy-30,6);
      ctx.font=mgF(38,700);const L=tjWrap(ctx,it.nom,W-2*r-60).l.slice(0,2);mgTxt(ctx,L,X+2*r+40,cy-18,38,48,E.tx,700);break}
  }
}

// ===== Fam Studio · MI SEMANA (planificador editable y guardado en el móvil) =====
// Cada pieza guarda exactamente cómo se creó (tipo, vía, objetivo, situación, nº de stories, palabra, gancho…)
// para que «Abrir guion» enseñe lo mismo que se eligió en Crear. Se guarda en localStorage (este móvil).
const PL=(function(){
const KEY="fs_plan_v1",MAXW=16;
const DIAS=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],DC=["L","M","X","J","V","S","D"];
const MESES=["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const TIPO={st:"Stories",re:"Reel",tt:"TikTok"};
const SLOT={m:"Mañana",md:"De 11:00 a 14:00",t:"Tarde"};
const slotDef=t=>t==="st"?"md":"m";
const pad=n=>String(n).padStart(2,"0");
const kd=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
function lunes(d){d=new Date(d.getFullYear(),d.getMonth(),d.getDate());const w=(d.getDay()+6)%7;d.setDate(d.getDate()-w);return d}
const wkHoy=()=>kd(lunes(new Date()));
const fecha=(wk,i)=>{const p=wk.split("-").map(Number),d=new Date(p[0],p[1]-1,p[2]+i);return d};
const fTxt=d=>d.getDate()+" "+MESES[d.getMonth()];
const hoyIdx=wk=>wk===wkHoy()?(new Date().getDay()+6)%7:-1;
// ---------- almacenamiento ----------
function load(){const x=ls(KEY);return x&&typeof x==="object"&&x.w&&typeof x.w==="object"?x:{w:{},cfg:null}}
function save(D){const ks=Object.keys(D.w).sort();while(ks.length>MAXW)delete D.w[ks.shift()];ls(KEY,D)}
const valido=it=>it&&C2.PK[it.s]&&TIPO[it.t]&&it.d>=0&&it.d<=6;
function items(wk){const D=load();return (D.w[wk]||[]).filter(valido)}
function setItems(wk,L){const D=load();D.w[wk]=L;save(D)}
const nid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
function snap(c){return {t:c.t,v:c.v,o:c.o,s:c.s,n:c.n,kw:c.kw,own:!!c.own,hook:c.hook,ci:c.ci,ri:c.ri,ti:c.ti,rt:c.rt,fi:c.fi,rd:c.rd==="tt"?"tt":""}}
// ---------- estado de pantalla ----------
const E=()=>S.pl||(S.pl={wk:wkHoy(),wiz:false,del:"",cfg:null});
// ---------- generador «Crear mi semana rápida» ----------
function cfgDef(){
  const D=load();
  return D.cfg||{re:2,reP:1,st:4,stP:2,tt:0,tema:"uno",sc:"",sp:"",desc:"sab",modo:"nuevo"};
}
const TEMAS=v=>C2.PKS.filter(s=>s.via===v&&(C2.cuando(s)==="todo"||C2.cuando(s)==="temp"));
// tema por defecto: una situación que sirva para varios objetivos (que te escriban, que confíen y que te conozcan)
function temaDef(v){const L=TEMAS(v),R=L.filter(s=>["escriban","confien","conocer"].every(o=>s.objetivos.indexOf(o)>=0));const P=R.length?R:L;return (C2.sugerida(P,{v,o:"semana"})||P[0]||{}).id||""}
function reparte(n,dias,off){const out=[];if(!n||!dias.length)return out;for(let i=0;i<n;i++)out.push(dias[Math.floor((i+(off||0))*dias.length/n)%dias.length]);return out}
const OBJ_ST=["escriban","confien","conocer","escriban","producto","confien","conocer","producto"];
const OBJ_RE=["conocer","escriban","conocer","escriban","conocer"];
const OBJ_ALT=["escriban","confien","conocer","producto","invitar","reto","taller"];
// primero el objetivo; luego la situación que lo admite (en «un tema», la del tema si puede)
function pieza(v,cfg,lista,i){
  const o=lista[i%lista.length];
  if(cfg.tema==="uno"){const s=C2.PK[v==="proyecto"?cfg.sp:cfg.sc];if(s)return {s,o:s.objetivos.indexOf(o)>=0?o:(OBJ_ALT.find(x=>s.objetivos.indexOf(x)>=0)||s.objetivos[0])}}
  const L=TEMAS(v).filter(s=>s.objetivos.indexOf(o)>=0);const A=L.length?L:TEMAS(v);if(!A.length)return null;
  const s=A[(hash(wkHoy()+v+o)+i*17)%A.length];return {s,o:s.objetivos.indexOf(o)>=0?o:s.objetivos[0]};
}
function generar(cfg){
  const dias=[0,1,2,3,4,5,6].filter(d=>!(cfg.desc==="sab"&&d===5)&&!(cfg.desc==="dom"&&d===6)&&!(cfg.desc==="finde"&&d>=5));
  const out=[];let k=0;
  const add=(t,v,d,o,s,sl,i)=>{const n=t==="st"?defLen(S.f&&S.f.nivel):3;out.push({id:nid(),d,sl,t,v,o,s:s.id,n,kw:s.kw[0],own:false,hook:(i*5+k)%12,ci:i%3,ri:i%3,ti:i%5,rt:"frase",fi:i%4,done:false});k++};
  // reels: proyecto primero, repartidos por la mañana
  const rd=reparte(cfg.re,dias,0);
  rd.forEach((d,i)=>{const v=i<cfg.reP?"proyecto":"clientas",j=v==="proyecto"?i:i-cfg.reP,x=pieza(v,cfg,OBJ_RE,j);if(x)add("re",v,d,x.o,x.s,"m",j+3)});
  // stories: alternando proyecto y clientas para que no se junten
  const sd=reparte(cfg.st,dias,0.5);
  let ip=0,ic=0;const nP=cfg.stP,nC=cfg.st-cfg.stP;
  // como mucho dos días con palabra clave en stories (lo que dice la pantalla)
  const kwD=new Set(),noKw=o=>C2.tipoCierre(o)!=="kw";
  sd.forEach((d,i)=>{const v=(ip<nP&&(ic>=nC||i%2===0))?"proyecto":"clientas";const j=v==="proyecto"?ip++:ic++;let x=pieza(v,cfg,OBJ_ST,j);
    if(x&&!noKw(x.o)&&!kwD.has(d)&&kwD.size>=2){const y=pieza(v,cfg,["confien","conocer"],j);if(y){const o2=noKw(y.o)?y.o:y.s.objetivos.find(noKw);x=o2?{s:y.s,o:o2}:null}}
    if(x&&!noKw(x.o)&&!kwD.has(d)&&kwD.size>=2)x=null;
    if(!x&&!kwD.has(d)&&kwD.size>=2){const L=TEMAS(v).filter(s=>s.objetivos.some(noKw));const s=L[(hash(wkHoy()+v)+j*17)%(L.length||1)];if(s)x={s,o:s.objetivos.find(noKw)}}
    if(x){if(!noKw(x.o))kwD.add(d);add("st",v,d,x.o,x.s,"md",j)}});
  // TikTok: cada día disponible, mañana y tarde (70 % proyecto)
  if(cfg.tt>0)dias.forEach((d,i)=>{for(let x=0;x<cfg.tt;x++){const v=(i*cfg.tt+x)%10<7?"proyecto":"clientas";const q=pieza(v,cfg,["escriban","conocer"],i+x);if(q)add("tt",v,d,q.o,q.s,x===0?"m":"t",i+x+7)}});
  return out;
}
// ---------- vista ----------
function itemHtml(it,wk,del){
  const s=C2.PK[it.s],vc=it.v==="proyecto"?"p":"c";
  const kw=C2.tipoCierre(it.o)==="kw"?'<span class="plkw">'+esc(it.kw||s.kw[0])+'</span>':'';
  const mv='<select class="plmv" data-pmove="'+esc(it.id)+'" aria-label="Mover a otro día">'+DIAS.map((x,i)=>'<option value="'+i+'"'+(i===it.d?" selected":"")+'>'+(i===it.d?"Mover…":x)+'</option>').join("")+'</select>';
  return '<article class="plit '+vc+(it.done?" done":"")+'"><button type="button" class="plck" data-pk="done" data-pi="'+esc(it.id)+'" aria-pressed="'+(!!it.done)+'" aria-label="Marcar como publicada"><span></span></button>'
  +'<div class="plb"><div class="plt"><span class="pltipo">'+TIPO[it.t]+(it.t==="st"?" · "+it.n:"")+'</span><span class="plvia">'+(it.v==="proyecto"?"Proyecto":"Clientas")+'</span><span class="plsl">'+esc(SLOT[it.sl]||"")+'</span></div>'
  +'<b class="pln">'+esc(s.nombre)+'</b><small class="plo">'+esc(C2.objLabel(it.v,it.o))+'</small>'+kw+(typeof FX!=="undefined"?FX.filaHtml(it):"")
  +'<div class="placts"><button type="button" class="mini plopen" data-pk="open" data-pi="'+esc(it.id)+'">Editar en Crear</button>'+mv
  +(del===it.id?'<button type="button" class="mini plno" data-pk="delok" data-pi="'+esc(it.id)+'">¿Seguro? Quitar</button>':'<button type="button" class="mini" data-pk="del" data-pi="'+esc(it.id)+'" aria-label="Quitar">Quitar</button>')+'</div></div></article>'+'<details class="plgd" open><summary>Ver el guion</summary><div class="c2 plguion">'+C2.guionRO(it)+'</div></details>';
}
function stepper(f,lab,val,max,help){return '<div class="plstep"><div><b>'+lab+'</b>'+(help?'<small>'+help+'</small>':'')+'</div><div class="plsc"><button type="button" class="mini" data-pk="cfg" data-pf="'+f+'" data-pdlt="-1" aria-label="Menos">−</button><span>'+val+'</span><button type="button" class="mini" data-pk="cfg" data-pf="'+f+'" data-pdlt="1" aria-label="Más"'+(val>=max?" disabled":"")+'>+</button></div></div>'}
function chipsOpt(f,cur,ops){return '<div class="chips">'+ops.map(o=>'<button type="button" class="chip'+(cur===o[0]?" on":"")+'" data-pk="opt" data-pf="'+f+'" data-pv="'+o[0]+'">'+o[1]+'</button>').join("")+'</div>'}
function temaSel(id,v,cur){const L=TEMAS(v);return '<select id="'+id+'">'+[...new Set(L.map(x=>x.grupo))].map(g=>'<optgroup label="'+esc(g)+'">'+L.filter(x=>x.grupo===g).map(x=>'<option value="'+esc(x.id)+'"'+(x.id===cur?" selected":"")+'>'+esc(x.nombre)+'</option>').join("")+'</optgroup>').join("")+'</select>'}
function wizHtml(){
  const e=E(),c=e.cfg||(e.cfg=cfgDef());
  if(!C2.PK[c.sc])c.sc=temaDef("clientas");if(!C2.PK[c.sp])c.sp=temaDef("proyecto");
  c.reP=Math.min(c.reP,c.re);c.stP=Math.min(c.stP,c.st);
  return '<section class="panel plwiz"><h3>Crear mi semana rápida</h3><p class="mut">Elige cuánto quieres publicar y para quién. Después puedes cambiar, mover o quitar cada cosa.</p>'
  +stepper("re","Reels",c.re,7,"Se publican por la mañana")+(c.re?stepper("reP","De ellos, para el proyecto",c.reP,c.re,(c.re-c.reP)+" para clientas"):"")
  +stepper("st","Secuencias de stories",c.st,14,"De 11:00 a 14:00")+(c.st?stepper("stP","De ellas, para el proyecto",c.stP,c.st,(c.st-c.stP)+" para clientas"):"")
  +stepper("tt","Vídeos de TikTok al día",c.tt,2,c.tt?"Mañana"+(c.tt>1?" y tarde":"")+", cada día que publicas":"Si no usas TikTok, déjalo en 0")
  +'<div class="plgrp">Tema</div>'+chipsOpt("tema",c.tema,[["uno","Un tema toda la semana"],["variado","Un tema distinto cada vez"]])
  +(c.tema==="uno"?'<label class="c2lbl">Tema para clientas'+temaSel("pl_sc","clientas",c.sc)+'</label><label class="c2lbl">Tema para el proyecto'+temaSel("pl_sp","proyecto",c.sp)+'</label>':'<p class="mut">Cada pieza sale con una situación distinta de esta temporada.</p>')
  +'<div class="plgrp">Día de descanso</div>'+chipsOpt("desc",c.desc,[["sab","Sábado"],["dom","Domingo"],["finde","Fin de semana"],["no","Ninguno"]])
  +(items(e.wk).length?'<div class="plgrp">Lo que ya tienes esta semana</div>'+chipsOpt("modo",c.modo,[["nuevo","Empezar de cero"],["sumar","Añadir a lo que hay"]]):'')
  +'<div class="acts"><button type="button" class="btn" data-pk="gen">Preparar mi semana</button><button type="button" class="btn ghost" data-pk="wiz">Cancelar</button></div></section>';
}
function textoSemana(wk){
  const L=items(wk);let o="MI SEMANA · del "+fTxt(fecha(wk,0))+" al "+fTxt(fecha(wk,6))+"\n";
  DIAS.forEach((d,i)=>{const X=L.filter(x=>x.d===i);o+="\n"+d.toUpperCase()+" "+fTxt(fecha(wk,i))+"\n"+(X.length?X.map(x=>"- "+(SLOT[x.sl]||"")+" · "+TIPO[x.t]+(x.t==="st"?" ("+x.n+")":"")+" · "+(x.v==="proyecto"?"Proyecto":"Clientas")+" · "+C2.PK[x.s].nombre+(C2.tipoCierre(x.o)==="kw"?" · palabra "+(x.kw||C2.PK[x.s].kw[0]):"")).join("\n"):"- Descanso")+"\n"});
  return o;
}
function viewPlan(){
  const e=E(),wk=e.wk,L=items(wk),hi=hoyIdx(wk),hechas=L.filter(x=>x.done).length;
  const ord=(a,b)=>["m","md","t"].indexOf(a.sl)-["m","md","t"].indexOf(b.sl);
  let h='<section class="panel plhead"><h2>Semana</h2><div class="plnav"><button type="button" class="mini" data-pk="wk" data-pdlt="-7" aria-label="Semana anterior">‹</button><div><b>'+(wk===wkHoy()?"Esta semana":wk===kd(fecha(wkHoy(),7))?"La semana que viene":"Semana")+'</b><small>del '+fTxt(fecha(wk,0))+' al '+fTxt(fecha(wk,6))+'</small></div><button type="button" class="mini" data-pk="wk" data-pdlt="7" aria-label="Semana siguiente">›</button></div>'
  +(L.length?'<div class="plprog"><div style="width:'+Math.round(hechas*100/L.length)+'%"></div></div><p class="mut center">'+hechas+' de '+L.length+' publicaciones hechas</p>':'')
  +'<div class="plstrip">'+DIAS.map((d,i)=>{const n=L.filter(x=>x.d===i).length;return '<button type="button" class="pld'+(i===hi?" hoy":"")+(n?" con":"")+'" data-pk="ir" data-pv="'+i+'"><small>'+DC[i]+'</small><b>'+fecha(wk,i).getDate()+'</b><i>'+(n?n:"·")+'</i></button>'}).join("")+'</div>'
  +'<div class="plleg"><span class="c">Clientas</span><span class="p">Proyecto</span></div>'
  +'<div class="acts"><button type="button" class="btn" data-pk="wiz">'+(L.length?"Rehacer o ampliar mi semana":"Crear mi semana rápida")+'</button>'+(L.length?'<button type="button" class="btn ghost" data-copy="'+esc(textoSemana(wk))+'">Copiar mi semana</button>':'')+'</div>'+(typeof FX!=="undefined"?FX.calHtml():"")+'</section>';
  h+='<div class="sm9" role="group" aria-label="¿Cómo voy?"><button type="button" class="sm9b" data-tab="funciona">Lo que te funciona</button><button type="button" class="sm9b" data-tab="numeros">Mis números</button></div>';
  if(e.wiz)h+=wizHtml();
  if(!L.length&&!e.wiz)h+='<section class="panel plvacio">'+VIS.vacio("semana","","")+'<h3>Así funciona</h3><ol class="xol"><li><b>Crea tu semana rápida:</b> eliges cuántos reels, stories y TikTok, y para quién. La app te lo reparte por días.</li><li><b>O añade lo que te guste desde Crear:</b> al final de cada guion tienes «Añadir a mi semana» y eliges el día.</li><li><b>Cada día abre su guion,</b> lo publicas y lo marcas como hecho.</li></ol><p class="note">Se guarda en este móvil: la próxima vez que entres, tu semana sigue aquí.</p></section>';
  const op=e.open||(e.open={});
  h+=DIAS.map((d,i)=>{const X=L.filter(x=>x.d===i).sort(ord);const abierto=(e.wk+"|"+i) in op?op[e.wk+"|"+i]:(i===hi||(hi<0&&i===0));
    const res=X.length?X.map(x=>'<span class="plmini '+(x.v==="proyecto"?"p":"c")+(x.done?" ok":"")+'">'+TIPO[x.t]+'</span>').join(""):'<span class="plmini off">Descanso</span>';
    return '<details class="panel plday'+(i===hi?" hoy":"")+'" id="pld'+i+'" data-pday="'+e.wk+'|'+i+'"'+(abierto?" open":"")+'><summary class="pldh"><div><b>'+d+'</b> <small>'+fTxt(fecha(e.wk,i))+(i===hi?' · hoy':'')+'</small><div class="plres">'+res+'</div></div><span class="plab">'+(X.length?X.length+(X.length===1?" publicación":" publicaciones"):"")+'</span></summary>'
    +'<div class="pldbody"><div class="pldadd"><button type="button" class="mini" data-pk="add" data-pv="'+i+'">+ Añadir a este día</button></div>'
    +(X.length?X.map(x=>itemHtml(x,wk,e.del)).join(""):'<p class="mut pldesc">Sin nada. Descansa o toca «+ Añadir a este día».</p>')+'</div></details>'}).join("");
  h+='<p class="note">Reels por la mañana, stories de 11:00 a 14:00 y como mucho dos días con palabra clave en stories. Tu semana se guarda en este móvil.</p>';
  return h;
}
// ---------- en Crear ----------
function destino(c){
  const T=c.target;if(!T)return "";
  return '<div class="pldest">Vas a añadir al <b>'+DIAS[T.d]+' '+fTxt(fecha(T.wk,T.d))+'</b><button type="button" class="mini" data-pk="cancel">Cancelar</button></div>';
}
// botón de la barra fija del resultado: lo mismo que el cuadro «Añádelo a tu semana», con el día y el momento que haya elegidos ahí
function barBtn(c){
  const it=c.fromPlan?items(c.fromPlan.wk).find(x=>x.id===c.fromPlan.id):null;
  return it?'<button type="button" class="c2fb c2fb2" data-pk="upd">Guardar cambios</button>':'<button type="button" class="c2fb c2fb2" data-pk="addc">Guardar en mi semana</button>';
}
function resBox(c,s){
  const e=E(),wk=(c.target&&c.target.wk)||e.wk,it=c.fromPlan?items(c.fromPlan.wk).find(x=>x.id===c.fromPlan.id):null;
  if(it)return '<section class="plbox"><b>Esto está en tu semana: '+DIAS[it.d]+'</b><p class="mut">Si has cambiado algo (otro gancho, otra palabra, más stories), guárdalo.</p><div class="acts"><button type="button" class="btn" data-pk="upd">Guardar cambios en mi semana</button><button type="button" class="btn ghost" data-pk="back">Volver a mi semana</button></div></section>';
  const d0=c.target?c.target.d:Math.max(0,hoyIdx(wk));
  const wks=[wkHoy(),kd(fecha(wkHoy(),7))];
  return '<section class="plbox"><b>¿Te gusta? Añádelo a tu semana</b><div class="plrow"><label>Semana<select id="pl_wk">'+wks.map((w,i)=>'<option value="'+w+'"'+(w===wk?" selected":"")+'>'+(i?"La que viene":"Esta semana")+'</option>').join("")+'</select></label>'
  +'<label>Día<select id="pl_d">'+DIAS.map((x,i)=>'<option value="'+i+'"'+(i===d0?" selected":"")+'>'+x+'</option>').join("")+'</select></label>'
  +'<label>Momento<select id="pl_sl">'+Object.keys(SLOT).map(k=>'<option value="'+k+'"'+(k===slotDef(c.t)?" selected":"")+'>'+SLOT[k]+'</option>').join("")+'</select></label></div>'
  +'<button type="button" class="btn" data-pk="addc">Añadir a mi semana</button></section>';
}
// ---------- eventos ----------
document.addEventListener("click",ev=>{
  const b=ev.target.closest&&ev.target.closest("button[data-pk]");if(!b)return;
  const e=E(),k=b.dataset.pk,id=b.dataset.pi,c=C2.st();
  const L=()=>load().w[e.wk]||[];
  switch(k){
   case "wk":{const d=fecha(e.wk,+b.dataset.pdlt||0);e.wk=kd(d);e.del="";render();break}
   case "wiz":e.wiz=!e.wiz;e.cfg=e.cfg||cfgDef();render(true);break;
   case "cfg":{const f=b.dataset.pf,cfg=e.cfg,max={re:7,st:14,tt:2,reP:cfg.re,stP:cfg.st}[f];cfg[f]=Math.max(0,Math.min(max,(cfg[f]||0)+(+b.dataset.pdlt||0)));render(true);break}
   case "opt":e.cfg[b.dataset.pf]=b.dataset.pv;render(true);break;
   case "gen":{const cfg=e.cfg,nuevos=generar(cfg),D=load();D.cfg=cfg;D.w[e.wk]=(cfg.modo==="sumar"?(D.w[e.wk]||[]):[]).concat(nuevos);save(D);e.wiz=false;render();toast(nuevos.length+" publicaciones en tu semana");break}
   case "ir":{const x=document.getElementById("pld"+b.dataset.pv);if(x){x.open=true;(e.open||(e.open={}))[e.wk+"|"+b.dataset.pv]=true;x.scrollIntoView({behavior:"smooth",block:"start"})}break}
   case "done":{const X=L(),it=X.find(x=>x.id===id);if(it){it.done=!it.done;setItems(e.wk,X);let fr="";try{if(typeof FX!=="undefined")fr=it.done?FX.marcar(it):(FX.desmarcar(it.id),"")}catch(err){}render(true);if(fr)toast(fr)}break}
   case "del":e.del=id;render(true);break;
   case "delok":{setItems(e.wk,L().filter(x=>x.id!==id));e.del="";render(true);break}
   case "open":{const it=L().find(x=>x.id===id);if(!it)break;S.c2=Object.assign({w:"todo",q:"",res:true,pin:it.s},snap(it));S.c2.w=(C2.PK[it.s]?C2.temaDe(C2.PK[it.s]):"")||"hoy";S.c2.g="";S.c2.fromPlan={wk:e.wk,id:it.id};S.c2.target=null;go("crear");break}
   case "add":{const c0=C2.st();c0.target={wk:e.wk,d:+b.dataset.pv};c0.fromPlan=null;c0.res=false;go("crear");break}
   case "cancel":c.target=null;render(true);break;
   case "back":c.fromPlan=null;c.res=false;go("semana");break;
   case "upd":{const f=c.fromPlan;if(!f)break;const D=load(),X=D.w[f.wk]||[],it=X.find(x=>x.id===f.id);if(it){Object.assign(it,snap(c));D.w[f.wk]=X;save(D);toast("Guardado en tu semana")}break}
   case "addc":{const wk=($("#pl_wk")||{}).value||wkHoy(),d=+(($("#pl_d")||{}).value||0),sl=($("#pl_sl")||{}).value||slotDef(c.t);
     const D=load(),X=D.w[wk]||[];X.push(Object.assign({id:nid(),d,sl,done:false},snap(c)));D.w[wk]=X;save(D);
     c.target=null;toast("Añadido al "+DIAS[d].toLowerCase());e.wk=wk;document.querySelectorAll('button[data-pk="addc"]').forEach(x=>{x.textContent="Añadido al "+DIAS[d].toLowerCase();x.disabled=true});break}
  }
});
document.addEventListener("change",ev=>{
  const t=ev.target;if(!t)return;
  if(t.dataset&&t.dataset.pmove){const e=E(),X=load().w[e.wk]||[],it=X.find(x=>x.id===t.dataset.pmove);if(it){it.d=+t.value;setItems(e.wk,X);render(true);toast("Movido al "+DIAS[it.d].toLowerCase())}}
  else if(t.id==="pl_sc"||t.id==="pl_sp"){const e=E();e.cfg[t.id==="pl_sc"?"sc":"sp"]=t.value}
});
document.addEventListener("toggle",ev=>{const t=ev.target;if(t&&t.dataset&&t.dataset.pday){const e=E();(e.open||(e.open={}))[t.dataset.pday]=t.open}},true);
VIEWS.semana=viewPlan;
return {resBox,barBtn,destino,items,generar,textoSemana,wkHoy};
})();

// ===== Fam Studio · LO QUE TE FUNCIONA, CONSTANCIA Y AVISOS EN EL CALENDARIO =====
// Todo lo apunta ella (la app no lee Instagram) y se guarda solo en el móvil, con claves fs_ para que entren en la copia de seguridad:
//   fs_funciona  una ficha por publicación marcada como publicada: {id (el de la pieza de Mi semana), f (día), v (vía), o (intención),
//                t (st/re/tt), rt (tipo de reel), s (situación), gr (grupo/tema), gk (tipo de gancho, solo stories), n (nº de stories),
//                r (null = sin contestar, -1 = no lo sé, 0..3 = ninguna, 1 o 2, 3 a 5, más de 5)}
//   fs_fx_cfg    {obj: publicaciones por semana, h: {semana: objetivo} (para que cambiarlo no reescriba el pasado), fr: {semana: frase}, k: contador de frases}
// Las fichas se validan al leer: una copia de seguridad puede traer cualquier cosa. Todo texto que se pinta pasa por esc().
const FX=(function(){
const KEY="fs_funciona",CFG="fs_fx_cfg",MAXR=400,MINR=6,OBJ_MIN=2,OBJ_MAX=7,OBJ_DEF=3;
const pad=n=>String(n).padStart(2,"0");
const kd=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const RX_DIA=/^\d{4}-\d{2}-\d{2}$/,RX_ID=/^[A-Za-z0-9_-]{1,30}$/;
const hoyK=()=>kd(new Date());
const pk=k=>{const p=k.split("-").map(Number);return new Date(p[0],p[1]-1,p[2])};
const addD=(k,n)=>{const p=k.split("-").map(Number);return kd(new Date(p[0],p[1]-1,p[2]+n))};
const lunesK=k=>{const d=pk(k);return addD(k,-((d.getDay()+6)%7))};
const wkHoy=()=>lunesK(hoyK());
const dias=f=>Math.round((pk(hoyK())-pk(f))/864e5);
const DSEM=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
const TIPOS={st:"Stories",re:"Reel",tt:"TikTok"};
const RESP=[["Ninguna",0],["1 o 2",1],["3 a 5",2],["Más de 5",3]];
const VAL=[0,1.5,4,6.5],TOPE=6.5; // lo que vale cada respuesta al comparar (el punto medio de cada tramo)
const RLBL={"-1":"No lo sé",0:"Ninguna",1:"1 o 2",2:"3 a 5",3:"Más de 5"};
const lim=(t,n)=>String(t==null?"":t).replace(/[\u0000-\u001f<>]/g," ").replace(/\s+/g," ").trim().slice(0,n);
// ---------- almacenamiento ----------
function load(){
  const x=ls(KEY);if(!Array.isArray(x))return [];
  const out=[],seen={};
  x.forEach(c=>{
    if(!c||typeof c!=="object"||typeof c.id!=="string"||!RX_ID.test(c.id)||seen[c.id]||!RX_DIA.test(c.f)||!TIPOS[c.t])return;
    seen[c.id]=1;
    out.push({id:c.id,f:c.f,v:c.v==="proyecto"?"proyecto":"clientas",o:lim(c.o,20),t:c.t,rt:c.t==="re"&&["frase","planos","serie"].indexOf(c.rt)>=0?c.rt:(c.t==="re"?"frase":""),s:lim(c.s,80),gr:lim(c.gr,60),gk:lim(c.gk,30),n:Number.isInteger(c.n)&&c.n>=2&&c.n<=8?c.n:0,r:Number.isInteger(c.r)&&c.r>=-1&&c.r<=3?c.r:null});
  });
  return out.slice(-MAXR);
}
const save=L=>ls(KEY,L.slice(-MAXR));
function deItem(it,f){
  const s=C2.PK[it.s];if(!s||!TIPOS[it.t]||typeof it.id!=="string"||!RX_ID.test(it.id))return null;
  const g=it.t==="st"&&s.pk&&s.pk.ganchos&&s.pk.ganchos[(+it.hook||0)%12];
  return {id:it.id,f,v:it.v==="proyecto"?"proyecto":"clientas",o:lim(it.o,20),t:it.t,rt:it.t==="re"?(["frase","planos","serie"].indexOf(it.rt)>=0?it.rt:"frase"):"",s:it.s,gr:lim(s.grupo,60),gk:g?lim(g.tipo,30):"",n:it.t==="st"&&it.n>=2&&it.n<=8?it.n:0,r:null};
}
// las piezas que ya estaban «hechas» antes de este cambio (o que vienen de una copia) también cuentan: su día es el planificado
function sync(){
  const D=ls("fs_plan_v1");if(!D||typeof D!=="object"||!D.w||typeof D.w!=="object")return;
  const L=load(),ids={};L.forEach(x=>ids[x.id]=1);let ch=false;const hoy=hoyK();
  Object.keys(D.w).sort().forEach(wk=>{
    if(!RX_DIA.test(wk)||!Array.isArray(D.w[wk]))return;
    D.w[wk].forEach(it=>{
      if(!it||!it.done||typeof it.id!=="string"||ids[it.id]||!(it.d>=0&&it.d<=6))return;
      let f=addD(wk,Math.floor(it.d));if(f>hoy)f=hoy;
      const r=deItem(it,f);if(r){L.push(r);ids[it.id]=1;ch=true}
    });
  });
  if(ch){L.sort((a,b)=>a.f<b.f?-1:a.f>b.f?1:0);save(L)}
}
const datos=()=>{try{sync()}catch(e){}return load()};
const rec=id=>datos().find(x=>x.id===id)||null;
function cfg(){
  const c=ls(CFG),o=c&&typeof c==="object"?c:{};
  const obj=Number.isInteger(o.obj)&&o.obj>=OBJ_MIN&&o.obj<=OBJ_MAX?o.obj:OBJ_DEF;
  const h={},fr={};
  if(o.h&&typeof o.h==="object")Object.keys(o.h).forEach(k=>{if((k===""||RX_DIA.test(k))&&Number.isInteger(o.h[k])&&o.h[k]>=OBJ_MIN&&o.h[k]<=OBJ_MAX)h[k]=o.h[k]});
  if(o.fr&&typeof o.fr==="object")Object.keys(o.fr).forEach(k=>{if(RX_DIA.test(k)&&Number.isInteger(o.fr[k])&&o.fr[k]>=0&&o.fr[k]<FRASES.length)fr[k]=o.fr[k]});
  return {obj,h,fr,k:Number.isInteger(o.k)&&o.k>=0?o.k:0};
}
const saveCfg=c=>ls(CFG,c);
// ---------- nombre corto de una situación ----------
function corto(t){
  t=String(t==null?"":t).replace(/\s+/g," ").trim();
  if(t.length<=44)return t;
  let c=t.slice(0,44);const i=c.lastIndexOf(" ");if(i>20)c=c.slice(0,i);
  return c.replace(/[,;:.\s]+$/,"")+"…";
}
const nomDe=x=>{const s=C2.PK[x.s];return s?corto(s.nombre):"una publicación"};
// ---------- constancia ----------
const FRASES=[
 "Objetivo de la semana cumplido. Constancia es esto.",
 "Has publicado lo que dijiste que ibas a publicar. Así se construye.",
 "Semana cumplida. Lo que repites cada semana es lo que te conoce la gente.",
 "Tu objetivo está hecho. Descansa sin prisa: ya has hecho tu parte.",
 "Lo has cumplido. Poco a poco, pero cada semana.",
 "Meta de la semana alcanzada. Lo difícil es empezar, y tú ya has empezado.",
 "Cumplido. Quien te sigue ve que estás ahí, y eso cuenta.",
 "Semana completa. Lo que publicas hoy te sirve dentro de unos meses.",
 "Hecho. Tu constancia se nota más que cualquier truco.",
 "Objetivo cumplido. Esta semana ya puedes mirar tu perfil con orgullo.",
 "Lo prometido es deuda, y esta semana la has pagado entera.",
 "Has cumplido tu objetivo. Sigue a tu ritmo: así llegas lejos."];
function objDe(c,wk){
  let o=c.obj;const ks=Object.keys(c.h).sort();
  if(!ks.length)return o;
  o=c.h[ks[0]]; // lo anterior al primer cambio se midió con el primer valor guardado
  ks.forEach(k=>{if(k<=wk)o=c.h[k]});
  return o;
}
function cuenta(L,wk){const fin=addD(wk,6);return L.filter(x=>x.f>=wk&&x.f<=fin).length}
function estado(L){
  const c=cfg(),wk=wkHoy(),n=cuenta(L,wk),obj=objDe(c,wk),cumple=n>=obj;
  let racha=cumple?1:0,w=addD(wk,-7);
  for(let i=0;i<104;i++,w=addD(w,-7)){if(cuenta(L,w)>=objDe(c,w))racha++;else break}
  return {n,obj,cumple,racha,wk,c};
}
function frase(E){
  if(!E.cumple)return "";
  const c=E.c;
  if(c.fr[E.wk]===undefined){
    c.fr[E.wk]=c.k%FRASES.length;c.k++;
    Object.keys(c.fr).sort().slice(0,-30).forEach(k=>delete c.fr[k]);
    saveCfg({obj:c.obj,h:c.h,fr:c.fr,k:c.k});
  }
  return FRASES[c.fr[E.wk]];
}
function setObj(d){
  const c=cfg(),n=Math.max(OBJ_MIN,Math.min(OBJ_MAX,c.obj+d));if(n===c.obj)return;
  if(!Object.keys(c.h).length)c.h[""]=c.obj;
  c.h[wkHoy()]=n;c.obj=n;saveCfg(c);
}
function pasos(n,obj){
  let h='<div class="fx-dots" role="img" aria-label="'+Math.min(n,obj)+' de '+obj+' publicaciones esta semana">';
  for(let i=0;i<obj;i++)h+='<i class="'+(i<n?"on":"")+'"></i>';
  return h+(n>obj?'<b class="fx-mas">+'+(n-obj)+'</b>':"")+'</div>';
}
function semanaHtml(){
  let L=[];try{L=datos()}catch(e){}
  const E=estado(L);let plan=[];try{plan=PL.items(PL.wkHoy())}catch(e){}
  const falta=plan.filter(x=>!x.done).length;
  let t,sub="";
  if(E.cumple){t='<p class="hr-t"><svg class="fx-cum-ok" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10.5"/><path d="M7 12.5l3.5 3.5 6.5-7.5"/></svg>Objetivo cumplido: '+E.n+(E.n===1?" publicación":" publicaciones")+' esta semana</p>';sub='<p class="fx-fr">'+esc(frase(E))+'</p>'}
  else if(E.n===0){t='<p class="hr-t">Semana nueva: tu objetivo son '+E.obj+'</p>'}
  else t='<p class="hr-t">Llevas '+E.n+' de '+E.obj+' publicaciones esta semana</p>';
  if(E.racha>=2)sub+='<p class="fx-racha">Llevas '+E.racha+' semanas seguidas cumpliendo tu objetivo</p>';
  if(!sub&&!E.cumple)sub='<p class="mut">'+(falta?"Te quedan "+falta+(falta===1?" publicación":" publicaciones")+" por hacer en tu semana.":"Cada publicación que marques como publicada suma.")+'</p>';
  const b=plan.length?'<button type="button" class="btn ghost" data-tab="semana">Ver mi semana</button>':'<button type="button" class="btn ghost" data-tab="semana">Planificar mi semana</button>';
  const st='<div class="fx-obj"><span>Tu objetivo, a la semana</span><div class="fx-ob"><button type="button" class="mini" data-fx="obj" data-d="-1" aria-label="Menos publicaciones al objetivo"'+(E.obj<=OBJ_MIN?" disabled":"")+'>−</button><b>'+E.obj+'</b><button type="button" class="mini" data-fx="obj" data-d="1" aria-label="Más publicaciones al objetivo"'+(E.obj>=OBJ_MAX?" disabled":"")+'>+</button></div></div>';
  return '<section class="panel hr fx-sem'+(E.cumple?" fx-cum":"")+'"><p class="hr-k">Tu semana</p>'+pasos(E.n,E.obj)+t+sub+st+b+'</section>';
}
// ---------- apuntar cómo le fue ----------
function marcar(it){
  const L=load();
  if(!L.some(x=>x.id===it.id)){const r=deItem(it,hoyK());if(r){L.push(r);save(L)}}
  const E=estado(load());
  return E.cumple&&E.n===E.obj?frase(E):""; // la frase solo salta al llegar justo al objetivo
}
const desmarcar=id=>save(load().filter(x=>x.id!==id));
function responde(id,v){
  const L=load(),x=L.find(y=>y.id===id);if(!x)return false;
  if(!(v===-1||(v>=0&&v<=3)))return false;
  x.r=v;save(L);return true;
}
function pendientes(L){return L.filter(x=>x.r===null&&dias(x.f)>=1&&dias(x.f)<=7&&C2.PK[x.s]).sort((a,b)=>a.f<b.f?1:a.f>b.f?-1:0).slice(0,2)}
function cuando(f){const d=dias(f);return d<=1?"Ayer":"El "+DSEM[pk(f).getDay()]}
function preguntasHtml(){
  let P=[];try{P=pendientes(datos())}catch(e){}
  return P.map(x=>'<section class="panel fx-q" role="group" aria-label="Cómo te fue"><p class="fx-qt">'+cuando(x.f)+' publicaste «'+esc(nomDe(x))+'». ¿Cuántas personas te escribieron?</p>'
   +'<div class="fx-qb">'+RESP.map(r=>'<button type="button" class="btn ghost fx-b" data-fx="ans" data-id="'+esc(x.id)+'" data-v="'+r[1]+'">'+r[0]+'</button>').join("")+'</div>'
   +'<button type="button" class="linkb fx-no" data-fx="ans" data-id="'+esc(x.id)+'" data-v="-1">No lo sé</button></section>').join("");
}
// la misma pregunta, dentro de cada pieza de Mi semana (para apuntar o corregir)
function filaHtml(it){
  if(!it.done)return "";
  const x=rec(it.id);if(!x)return "";
  const chip=(l,v)=>'<button type="button" class="chip fx-c'+(x.r===v?" on":"")+'" data-fx="ans" data-id="'+esc(it.id)+'" data-v="'+v+'" aria-pressed="'+(x.r===v)+'">'+l+'</button>';
  return '<div class="fx-fila" role="group" aria-label="Cómo te fue"><span class="fx-l">'+(x.r===null?"¿Cuántas personas te escribieron?":"Te escribieron: "+RLBL[x.r]+". Puedes corregirlo.")+'</span><div class="fx-ch">'+RESP.map(r=>chip(r[0],r[1])).join("")+chip("No lo sé",-1)+'</div></div>';
}
// ---------- lo que te funciona ----------
const FM_B={st:"Stories","re:frase":"Reel de una frase","re:planos":"Reel por planos","re:serie":"Reel en serie",tt:"TikTok"};
const FM_S={st:"stories","re:frase":"el reel de una frase","re:planos":"el reel por planos","re:serie":"el reel en serie",tt:"TikTok"};
const fmKey=x=>x.t==="re"?"re:"+(x.rt||"frase"):x.t;
const objNom=o=>C2.objLabel("clientas",o)||C2.objLabel("proyecto",o)||o;
const temaNom=g=>String(g).replace(/^(Nutrición|Mi día) · /,"");
const gkNom=g=>g.charAt(0).toUpperCase()+g.slice(1);
const respondidas=L=>L.filter(x=>x.r!==null&&x.r>=0);
// medias por categoría; solo cuentan las que tienen al menos 2 publicaciones
function medias(A,kf,nf){
  const m={};
  A.forEach(x=>{const k=kf(x);if(!k)return;const c=m[k]||(m[k]={k,n:nf(k),c:0,s:0});c.c++;c.s+=VAL[x.r]});
  return Object.keys(m).map(k=>m[k]).filter(c=>c.c>=2).map(c=>Object.assign(c,{m:c.s/c.c})).sort((a,b)=>b.m-a.m||b.c-a.c||(a.n<b.n?-1:a.n>b.n?1:0));
}
const w5=m=>"fx-w"+Math.max(0,Math.min(100,Math.round(m/TOPE*20)*5));
function textoMedia(m){const r=Math.round(m);return r<1?"casi nadie":r===1?"1 persona":"unas "+r+" personas"}
function barras(cs){
  return '<div class="fx-bars">'+cs.map(c=>'<div class="fx-br"><div class="fx-bt"><span>'+esc(c.n)+'</span><small>'+textoMedia(c.m)+' · '+c.c+' publicaciones</small></div><div class="fx-bar" aria-hidden="true"><i class="'+w5(c.m)+'"></i></div></div>').join("")+'</div>';
}
// compara la mejor con la peor (hace falta al menos dos categorías con 2 publicaciones y una diferencia clara)
function compara(cs,f){
  if(cs.length<2)return "";
  const a=cs[0],b=cs[cs.length-1];
  if(a.m<=0)return "Por ahora no te ha escrito nadie con ninguna de estas.";
  if(a.m-b.m<0.5)return "Con todas te escriben más o menos lo mismo.";
  return f(a,b);
}
function bloque(titulo,frase,cs){
  if(!cs.length)return "";
  return '<section class="panel fx-sec"><h3>'+titulo+'</h3>'+(frase?'<p class="fx-f">'+esc(frase)+'</p>':'')+barras(cs)+'</section>';
}
function mejores(cs,uno,dos){
  const B=cs.filter(c=>c.m>0).slice(0,2);
  if(!B.length)return {f:"",B:[]};
  return {f:B.length===1?uno(B[0]):dos(B[0],B[1]),B};
}
function top3(A){return A.filter(x=>x.r>=1&&C2.PK[x.s]).sort((a,b)=>b.r-a.r||(a.f<b.f?1:a.f>b.f?-1:0)).slice(0,3)}
function viewFunciona(){
  const L=datos(),A=respondidas(L),n=A.length;
  let h='<section class="panel"><h2>Lo que te funciona</h2>';
  if(n<MINR){
    const falta=MINR-n;
    h+=VIS.vacio("funciona","","")+'<p class="lead">Llevas '+n+' de '+MINR+'. Cuando tengas seis publicaciones apuntadas te digo qué te funciona mejor a ti.</p>'
     +'<div class="fx-bar fx-big" role="img" aria-label="'+n+' de '+MINR+' publicaciones apuntadas"><i class="'+w5(n/MINR*TOPE)+'"></i></div>'
     +'<p class="mut">Te '+(falta===1?"falta ":"faltan ")+falta+'. Marca cada publicación como publicada en Semana y, al día siguiente, te pregunto en Inicio cuántas personas te escribieron. Un toque.</p>';
    const pend=L.filter(x=>x.r===null).length;
    if(pend)h+='<p class="mut">Tienes '+pend+(pend===1?" publicación sin apuntar":" publicaciones sin apuntar")+': las contestas en Inicio o en la propia pieza de Mi semana.</p>';
    h+='<div class="acts"><button type="button" class="btn" data-tab="semana">Ir a Mi semana</button></div></section>';
    return h+'<p class="note">Esto sale solo de lo que tú apuntas, y se guarda solo en tu móvil.</p>';
  }
  h+='<p class="lead">Con tus '+n+' publicaciones apuntadas, esto es lo que mejor te ha ido. Solo comparo lo que has publicado al menos dos veces.</p></section>';
  const I=medias(A,x=>x.o,objNom);
  h+=bloque("Según para qué publicas",compara(I,(a,b)=>'Cuando publicas para «'+a.n+'» te escriben más que con «'+b.n+'».'),I);
  const F=medias(A,fmKey,k=>FM_B[k]||k);
  h+=bloque("Según el formato",compara(F,(a,b)=>"Te escriben más con "+(FM_S[a.k]||a.n)+" que con "+(FM_S[b.k]||b.n)+"."),F);
  const G=mejores(medias(A.filter(x=>x.gk),x=>x.gk,gkNom),a=>'El gancho que mejor te ha ido: «'+a.n+'».',(a,b)=>'Los ganchos que mejor te han ido: «'+a.n+'» y «'+b.n+'».');
  h+=bloque("Tus mejores ganchos",G.f,G.B);
  const T=mejores(medias(A.filter(x=>x.gr),x=>x.gr,temaNom),a=>'El tema que mejor te ha ido: «'+a.n+'».',(a,b)=>'Los temas que mejor te han ido: «'+a.n+'» y «'+b.n+'».');
  h+=bloque("Tus mejores temas",T.f,T.B);
  const P=top3(A);
  h+='<section class="panel fx-sec"><h3>Tus tres mejores publicaciones</h3>'+(P.length?P.map((x,i)=>'<article class="fx-top"><b class="fx-n">'+(i+1)+'</b><div class="fx-tb"><p class="fx-tn">'+esc(C2.PK[x.s].nombre)+'</p><small>'+esc((FM_B[fmKey(x)]||"")+" · "+objNom(x.o))+' · te escribieron '+esc(RLBL[x.r].toLowerCase())+'</small><button type="button" class="mini fx-rep" data-fx="rep" data-id="'+esc(x.id)+'">Repetir con otra situación del mismo tema</button></div></article>').join(""):'<p class="mut">Todavía ninguna te ha traído mensajes. Sigue probando: cada publicación apuntada nos acerca a lo que te funciona.</p>')+'</section>';
  return h+'<p class="note">Esto sale solo de lo que tú apuntas, y se guarda solo en tu móvil.</p>';
}
// abre Crear con la misma configuración (formato, vía, intención, tipo de reel, tipo de gancho) pero con otra situación del mismo tema
function repetir(id){
  const x=load().find(y=>y.id===id),s0=x&&C2.PK[x.s];if(!x||!s0)return false;
  const usadas={};load().forEach(y=>usadas[y.s]=1);
  const cand=C2.PKS.filter(s=>s.id!==x.s&&s.via===x.v&&C2.vale(s,x.o));
  let L=cand.filter(s=>s.grupo===x.gr);
  if(!L.length){const t=C2.temaDe(s0);if(t)L=cand.filter(s=>C2.temaDe(s)===t)}
  const L2=L.filter(s=>!usadas[s.id]);
  const s=(L2.length?L2:L)[0]||s0;
  const hi=x.t==="st"&&x.gk?s.pk.ganchos.findIndex(g=>g.tipo===x.gk):-1;
  const c=C2.st();
  Object.assign(c,{t:x.t,v:x.v,o:x.o,rd:"",pin:s.id,w:C2.temaDe(s)||"hoy",g:"",q:"",s:s.id,kw:s.kw[0],own:false,hook:hi,ci:0,ri:0,ti:0,rt:x.rt||"frase",fi:0,gi:0,kwOpen:false,res:true,target:null,fromPlan:null});
  if(x.t==="st"&&x.n>=2)c.n=x.n;
  go("crear");
  return true;
}
function tarjetaHtml(){
  let A=[];try{A=respondidas(datos())}catch(e){}
  if(A.length<MINR)return "";
  const I=medias(A,x=>x.o,objNom),b=I.length&&I[0].m>0?I[0]:null;
  return '<section class="panel hr"><p class="hr-k">Lo que te funciona</p><p class="hr-t">'+A.length+' publicaciones apuntadas</p><p class="mut">'+(b?'Lo que mejor te va ahora: publicar para «'+esc(b.n)+'».':'Mira qué formatos, ganchos y temas te traen más mensajes.')+'</p><button type="button" class="btn ghost" data-tab="funciona">Ver lo que te funciona</button></section>';
}
// ---------- calendario (.ics) ----------
const HORA={m:[9,0],md:[11,0],t:[19,0]}; // la franja «De 11:00 a 14:00» se avisa a su inicio
const icsEsc=t=>String(t==null?"":t).replace(/[\u0000-\u001f]/g," ").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,");
function fold(l){
  const te=new TextEncoder();
  if(te.encode(l).length<=75)return l;
  let out="",cur="",len=0;
  for(const ch of l){const b=te.encode(ch).length;if(len+b>75){out+=cur+"\r\n ";cur="";len=1}cur+=ch;len+=b}
  return out+cur;
}
const stamp=d=>d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+"T"+pad(d.getHours())+pad(d.getMinutes())+pad(d.getSeconds());
function horaDe(it){
  const m=/^([01]\d|2[0-3]):([0-5]\d)$/.exec(it.h||"");
  if(m)return [+m[1],+m[2]];
  return HORA[it.sl]||HORA.m;
}
function piezasCal(){
  const out=[];
  [wkHoy(),addD(wkHoy(),7)].forEach(wk=>{
    let X=[];try{X=PL.items(wk)}catch(e){}
    X.forEach(it=>{if(typeof it.id==="string"&&RX_ID.test(it.id))out.push({it,wk})});
  });
  return out;
}
function icsTexto(){
  const now=new Date(),dtstamp=now.getUTCFullYear()+pad(now.getUTCMonth()+1)+pad(now.getUTCDate())+"T"+pad(now.getUTCHours())+pad(now.getUTCMinutes())+pad(now.getUTCSeconds())+"Z";
  const V=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Fam Studio//Mi semana//ES","CALSCALE:GREGORIAN"];
  piezasCal().forEach(({it,wk})=>{
    const s=C2.PK[it.s];if(!s)return;
    const p=wk.split("-").map(Number),hm=horaDe(it),a=new Date(p[0],p[1]-1,p[2]+Math.floor(it.d),hm[0],hm[1],0),b=new Date(a.getTime()+30*60000);
    const nom="Publicar: "+corto(s.nombre);
    const desc=TIPOS[it.t]+(it.t==="st"&&it.n?" ("+it.n+")":"")+" para "+(it.v==="proyecto"?"el proyecto":"clientas")+": "+C2.objLabel(it.v,it.o)+". Abre Fam Studio, Semana, para ver el guion.";
    V.push("BEGIN:VEVENT","UID:"+it.id+"-"+wk+"@famstudio.local","DTSTAMP:"+dtstamp,"DTSTART:"+stamp(a),"DTEND:"+stamp(b),"SUMMARY:"+icsEsc(nom),"DESCRIPTION:"+icsEsc(desc),
      "BEGIN:VALARM","TRIGGER:-PT15M","ACTION:DISPLAY","DESCRIPTION:"+icsEsc(nom),"END:VALARM","END:VEVENT");
  });
  V.push("END:VCALENDAR");
  return V.map(fold).join("\r\n")+"\r\n";
}
function calHtml(){
  if(!piezasCal().length)return "";
  return '<div class="fx-cal"><button type="button" class="btn ghost" data-fx="ics">Añadir a mi calendario</button><p class="mut">Se abre con el calendario de tu móvil y te avisará un cuarto de hora antes de cada publicación.</p></div>';
}
function descargaIcs(){
  const txt=icsTexto(),b=new Blob([txt],{type:"text/calendar;charset=utf-8"});
  const u=URL.createObjectURL(b),a=document.createElement("a");a.href=u;a.download="fam-studio-semana.ics";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),4000);
  toast("Calendario preparado");
}
// ---------- eventos ----------
document.addEventListener("click",ev=>{
  const b=ev.target.closest&&ev.target.closest("button[data-fx]");if(!b)return;
  const d=b.dataset;
  switch(d.fx){
   case "ans":if(responde(d.id,+d.v)){toast(+d.v===-1?"Apuntado":"Apuntado. Gracias");render(true)}break;
   case "obj":setObj(+d.d||0);render(true);break;
   case "rep":if(!repetir(d.id))toast("Esa publicación ya no está disponible");break;
   case "ics":descargaIcs();break;
  }
});
VIEWS.funciona=viewFunciona;
return {marcar,desmarcar,sync,load,datos,filaHtml,preguntasHtml,semanaHtml,tarjetaHtml,calHtml,icsTexto,estado,corto,FRASES,respondidas,icsEsc,fold,stamp};
})();

// ===== Fam Studio · «Qué contestar cuando te dicen…» (antes «Respuestas a dudas») =====
// Datos: DB.objeciones = {clientas:{temas:[..],items:[..]}, proyecto:{..}}. Cada pega: id (único dentro de su camino), tema, dicen,
// variantes, detras, respuestas [3: corta, con mi ejemplo, con una pregunta], no_digas, siguiente.
// Vistas: `objeciones` (camino, buscador, temas plegables) y `obj_det` (la ficha de una pega).
// Guarda en el móvil: fs_obj_via (el último camino). Todo texto que se pinta pasa por esc().
const QC=(function(){
const VIA="fs_obj_via",VIAS=["clientas","proyecto"];
const E=()=>S.ob||(S.ob={via:"",q:"",open:{},id:"",from:"",y:0});
const viaAct=()=>{const e=E();if(!e.via){const v=ls(VIA);e.via=VIAS.indexOf(v)>=0?v:"clientas"}return e.via};
const items=v=>((DB.objeciones&&DB.objeciones[v])||{}).items||[];
const temas=v=>((DB.objeciones&&DB.objeciones[v])||{}).temas||[];
const key=(v,id)=>v+"_"+id;
function porClave(k){const m=/^(clientas|proyecto)_([a-z0-9-]{1,60})$/.exec(k||"");if(!m)return null;const it=items(m[1]).find(x=>x.id===m[2]);return it||null}
const TONO={"corta":"Corta","con mi ejemplo":"Con mi ejemplo","con una pregunta":"Con una pregunta"};
const NOTA="Son mensajes para contestar a quien ya te ha escrito. Cámbiales las palabras para que suenen a ti.";
// ---------- buscador ----------
const PARADA=new Set("a al de del la las el los lo un una unos unas y o u e en con por para que me mi mis te tu tus se su sus le les es da ha he ya si no ni muy mas pero como".split(" "));
const toks=t=>norm(String(t||"")).replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(Boolean);
const stem=w=>w.length>4&&w.slice(-2)==="es"?w.slice(0,-2):(w.length>3&&w.slice(-1)==="s"?w.slice(0,-1):w);
function lev(a,b,max){
  if(Math.abs(a.length-b.length)>max)return max+1;
  let prev=[];for(let j=0;j<=b.length;j++)prev[j]=j;
  for(let i=1;i<=a.length;i++){
    const cur=[i];let mn=i;
    for(let j=1;j<=b.length;j++){
      const v=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
      cur[j]=v;if(v<mn)mn=v;
    }
    if(mn>max)return max+1;
    prev=cur;
  }
  return prev[b.length];
}
const IDX={};
function indice(v){
  if(IDX[v])return IDX[v];
  const L=items(v),vocab=new Map(),df=new Map(),docs=[];
  L.forEach((it,i)=>{
    const campos=[[3,it.dicen],[2.5,(it.variantes||[]).join(" ")],[1.5,it.tema],[1,it.detras]],vistas=new Set();
    campos.forEach(c=>toks(c[1]).forEach(w=>{
      const o=vocab.get(w)||vocab.set(w,[]).get(w);
      const f=o.find(x=>x[0]===i);if(f){if(c[0]>f[1])f[1]=c[0]}else o.push([i,c[0]]);
      vistas.add(w);
    }));
    vistas.forEach(w=>df.set(w,(df.get(w)||0)+1));
    docs.push(norm([it.dicen].concat(it.variantes||[]).join(" | ")).replace(/[^a-z0-9\s|]/g," ").replace(/\s+/g," "));
  });
  const tri=L.map(it=>{const s=" "+toks([it.dicen].concat(it.variantes||[],[it.tema]).join(" ")).join(" ")+" ",r=new Set();for(let i=0;i<s.length-2;i++)r.add(s.substr(i,3));return r});
  return IDX[v]={L,vocab,df,docs,tri,N:L.length};
}
function fuerza(t,w){
  if(t===w)return 1;
  const st=stem(t),sw=stem(w);
  if(st===sw)return .9;
  if(t.length>=3&&w.indexOf(t)===0)return .75; // mientras escribe
  if(w.length>=4&&t.indexOf(w)===0&&t.length-w.length<=2)return .6;
  if(t.length>=5&&Math.abs(t.length-w.length)<=2){
    const d=Math.min(lev(t,w,2),lev(st,sw,2));
    if(d<=1)return .7;
    if(d<=2&&t.length>=8)return .55;
  }
  return 0;
}
// devuelve los índices de las pegas que encajan, de más a menos parecida
function busca(v,q){
  const I=indice(v),T=toks(q);if(!T.length)return [];
  let U=T.filter(t=>!PARADA.has(t));if(!U.length)U=T.filter(t=>t.length>1);
  U=U.filter((t,i)=>U.indexOf(t)===i);
  const sc=new Array(I.N).fill(0),cub=new Array(I.N).fill(0);
  U.forEach(t=>{
    const mejor=new Array(I.N).fill(0);
    I.vocab.forEach((lista,w)=>{
      const f=fuerza(t,w);if(!f)return;
      const idf=Math.log(1+I.N/I.df.get(w));
      lista.forEach(x=>{const s=f*x[1]*idf;if(s>mejor[x[0]])mejor[x[0]]=s});
    });
    mejor.forEach((s,i)=>{if(s>0){sc[i]+=s;cub[i]++}});
  });
  const fr=norm(q).replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim();
  const out=[];
  for(let i=0;i<I.N;i++){
    if(!cub[i])continue;
    let s=sc[i]*(.5+.5*cub[i]/U.length);
    if(fr.length>=4&&I.docs[i].indexOf(fr)>=0)s+=4;
    out.push([i,s]);
  }
  out.sort((a,b)=>b[1]-a[1]||a[0]-b[0]);
  if(!out.length)return [];
  const tope=out[0][1];
  return out.filter(x=>x[1]>=tope*.3).slice(0,20).map(x=>x[0]);
}
// las más cercanas cuando nada encaja (parecido de trozos de tres letras)
function cercanas(v,q,n){
  const I=indice(v),s=" "+toks(q).join(" ")+" ",Q=new Set();
  for(let i=0;i<s.length-2;i++)Q.add(s.substr(i,3));
  const r=I.L.map((it,i)=>{let c=0;Q.forEach(x=>{if(I.tri[i].has(x))c++});return [i,c/(Q.size+I.tri[i].size-c||1)]});
  r.sort((a,b)=>b[1]-a[1]||a[0]-b[0]);
  return r.slice(0,n).map(x=>x[0]);
}
// ---------- la lista ----------
const fila=(v,it,conTema)=>'<button type="button" class="qc-row" data-act="qcabre" data-via="'+v+'" data-id="'+esc(it.id)+'"><span class="qc-ft"><b>«'+esc(it.dicen)+'»</b>'+(conTema?'<small>'+esc(it.tema)+'</small>':'')+'</span></button>';
function listaHtml(){
  const e=E(),v=viaAct(),q=e.q.trim(),L=items(v);
  if(q){
    const r=busca(v,q);
    const otro=VIAS.find(x=>x!==v),en=busca(otro,q).length;
    const hint=en?'<p class="qc-otro">Hay '+en+(en===1?" parecida":" parecidas")+' en el camino de '+(otro==="proyecto"?"Proyecto":"Clientas")+'. <button type="button" class="linkb" data-act="qcvia" data-via="'+otro+'">Verlas</button></p>':"";
    if(r.length)return '<p class="mut qc-n" role="status">'+r.length+(r.length===1?" pega encaja":" pegas encajan")+' con lo que has escrito</p><div class="qc-res">'+r.map(i=>fila(v,L[i],true)).join("")+'</div>'+(r.length<3?hint:"");
    const c=cercanas(v,q,3);
    return VIS.sinRes('No encuentro nada con «'+esc(q.slice(0,60))+'». Prueba con otras palabras.',"qc_q")
     +hint
     +'<h3 class="qc-h3">Las más cercanas</h3><div class="qc-res">'+c.map(i=>fila(v,L[i],true)).join("")+'</div><p class="qc-falta">¿No está? Dínoslo en el grupo.</p>';
  }
  return temas(v).map(t=>{
    const its=L.filter(x=>x.tema===t);if(!its.length)return "";
    const k=v+"|"+t;
    return '<details class="qc-tema" data-tk="'+esc(k)+'"'+(e.open[k]?" open":"")+'><summary><span class="qc-tn">'+esc(t)+'</span><span class="qc-c" aria-label="'+its.length+(its.length===1?" pega":" pegas")+'">'+its.length+'</span></summary><div class="qc-res">'+its.map(x=>fila(v,x,false)).join("")+'</div></details>';
  }).join("");
}
function viewObjeciones(){
  const e=E(),v=viaAct(),ch=(val,txt)=>'<button type="button" class="chip'+(v===val?" on":"")+'" data-act="qcvia" data-via="'+val+'" aria-pressed="'+(v===val)+'">'+txt+'</button>';
  const c=e.from&&CT.load().find(x=>x.id===e.from);
  const y=e.y;e.y=0;
  if(y)setTimeout(()=>window.scrollTo(0,y),0);
  return '<section class="panel qc-head"><h2>Qué contestar cuando te dicen…</h2><p class="lead">Alguien te pone una pega y no sabes qué responder. Escribe lo que te ha dicho o busca entre los temas: tienes tres respuestas para copiar.</p>'
   +(c?'<p class="tipp qc-para">Para <b>'+esc(c.n)+'</b>. Cuando contestes, puedes apuntarlo en su ficha.</p>':'')
   +'<div class="chips qc-vias" role="group" aria-label="Camino">'+ch("clientas","Clientas")+ch("proyecto","Proyecto")+'</div>'
   +'<label class="qc-l" for="qc_q">Escribe lo que te ha dicho</label><input id="qc_q" class="qc-q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" value="'+esc(e.q)+'" placeholder="Por ejemplo: me da vergüenza"></section>'
   +'<div id="qc_list">'+listaHtml()+'</div><p class="qc-nota">'+NOTA+'</p>';
}
// ---------- la ficha ----------
function sigue(v,it){
  const s=it.siguiente||"";
  if(v==="proyecto"&&/zoom|vídeo|video|información oficial|formacion/i.test(s))return {t:"Ver las guías del proyecto",a:'data-act="qcguias" data-via="proyecto"'};
  if(v==="clientas"&&/catálogo|catalogo|guía|guia|ingredientes|ficha|condiciones oficiales|información oficial|enlace oficial/i.test(s))return {t:"Ver las guías para clientas",a:'data-act="qcguias" data-via="clientas"'};
  if(/septiembre|retom|hasta que ella|no vuelvas|no escribas más|cuándo escribirle|Acuerda/i.test(s))return {t:"Ir a Mis contactos",a:'data-tab="contactos"'};
  return null;
}
function viewObjDet(){
  const e=E(),v=VIAS.indexOf(e.via)>=0?e.via:"clientas",L=items(v),it=L.find(x=>x.id===e.id);
  if(!it)return '<section class="panel"><h2>No encuentro esa pega</h2><p class="lead">Vuelve a la lista y elige otra.</p><div class="acts"><button type="button" class="btn" data-tab="objeciones">Ver la lista</button></div></section>';
  const k=key(v,it.id),c=e.from&&CT.load().find(x=>x.id===e.from);
  let h='<section class="panel qc-cab"><span class="rtag">'+(v==="proyecto"?"Proyecto":"Clientas")+' · '+esc(it.tema)+'</span><h2 class="qc-dicen">«'+esc(it.dicen)+'»</h2>'
   +'<div class="qc-detras"><span class="qc-k">Lo que hay detrás</span><p>'+esc(it.detras)+'</p></div></section>';
  h+='<section class="panel qc-resps"><h3>Tres formas de contestar</h3>'+(it.respuestas||[]).map(r=>'<div class="rmsg qc-resp"><div class="rmh"><span class="rver">'+esc(TONO[r.tono]||r.tono)+'</span>'+'<button type="button" class="mini" data-rc="'+esc(r.texto)+'">Copiar respuesta</button></div><p>'+esc(r.texto)+'</p></div>').join("")+'</section>';
  h+='<section class="qc-nodigas" aria-label="No digas"><span class="qc-k">No digas</span><p>'+esc(it.no_digas)+'</p></section>';
  const s=sigue(v,it);
  h+='<section class="panel qc-sig"><h3>Si cae bien, el siguiente paso</h3><p>'+esc(it.siguiente)+'</p>'+(s?'<div class="acts"><button type="button" class="btn ghost" '+s.a+'>'+s.t+'</button></div>':'')+'</section>';
  h+='<section class="panel qc-ap"><h3>Apuntar a quién se lo he contestado</h3>'
   +(c?'<p class="mut">Lo apuntas en la ficha de <b>'+esc(c.n)+'</b>.</p><div class="acts"><button type="button" class="btn" data-act="qcap" data-k="'+esc(k)+'" data-cid="'+esc(c.id)+'">Apuntar en la ficha de '+esc(c.n)+'</button></div>'
     :'<p class="mut">Se guarda en Mis contactos, solo en tu móvil, con la pega que era.</p><div class="acts"><button type="button" class="btn" data-act="qcap" data-k="'+esc(k)+'">Apuntar a quién se lo he contestado</button></div>')
   +'<div id="qc_ask"></div></section>';
  const ot=L.filter(x=>x.tema===it.tema&&x.id!==it.id),pos=L.filter(x=>x.tema===it.tema).findIndex(x=>x.id===it.id),tm=L.filter(x=>x.tema===it.tema);
  const otras=[];for(let i=1;i<tm.length&&otras.length<3;i++)otras.push(tm[(pos+i)%tm.length]);
  if(ot.length)h+='<section class="panel qc-otras"><h3>Otras parecidas</h3><div class="qc-res">'+otras.map(x=>fila(v,x,false)).join("")+'</div></section>';
  return h+'<p class="qc-nota">'+NOTA+'</p>';
}
// ---------- eventos ----------
function ir(v,id,from){
  const e=E();e.y=window.scrollY;e.via=v;e.id=id;ls(VIA,v);if(from!==undefined)e.from=from;
  go("obj_det");
}
document.addEventListener("click",ev=>{
  const b=ev.target.closest&&ev.target.closest("button");if(!b)return;
  const d=b.dataset;
  switch(d.act){
   case "qcir":{const e=E();e.from=d.cid||"";e.y=0;e.id="";go("objeciones");break}
   case "qcvia":{const e=E();if(VIAS.indexOf(d.via)<0)break;e.via=d.via;ls(VIA,d.via);render(true);break}
   case "qcabre":{if(VIAS.indexOf(d.via)<0)break;ir(d.via,d.id);break}
   case "qcguias":{RCS.sec="guias";RCS.q="";RCS.via=d.via==="proyecto"?"proyecto":"clientas";go("recursos");break}
   case "qcap":{
    const it=porClave(d.k);if(!it)break;
    if(d.cid){
      const L=CT.load(),c=L.find(x=>x.id===d.cid);if(!c)break;
      CT.marcaPega(d.cid,d.k);toast("Apuntado en la ficha de "+c.n);break;
    }
    const host=document.getElementById("qc_ask");if(!host)break;
    host.innerHTML=CT.askHtml("o:"+d.k);
    const el=host.querySelector(".ct-in");if(el)try{el.focus({preventScroll:true})}catch(x){}
    try{host.scrollIntoView({block:"center",behavior:"smooth"})}catch(x){}
    break}
  }
});
document.addEventListener("input",ev=>{
  if(!ev.target||ev.target.id!=="qc_q")return;
  const e=E();e.q=ev.target.value.slice(0,120);
  const l=document.getElementById("qc_list");if(l)l.innerHTML=listaHtml();
});
// recordar qué temas están abiertos (el evento toggle no sube: se escucha en captura)
document.addEventListener("toggle",ev=>{
  const t=ev.target;if(!t||!t.classList||!t.classList.contains("qc-tema"))return;
  const e=E(),k=t.dataset.tk;if(t.open)e.open[k]=1;else delete e.open[k];
},true);
VIEWS.objeciones=viewObjeciones;VIEWS.obj_det=viewObjDet;
return {busca,cercanas,porClave,items,NOTA};
})();

// ===== Fam Studio · MIS CONTACTOS, TU PRIMERA SEMANA e INICIO «Hoy te toca» =====
// Todo se guarda solo en el móvil (localStorage, claves fs_ para que entren en la copia de seguridad):
//   fs_contactos  lista de contactos (alias, fecha, de qué guía salió, estado, nota)
//   fs_ct_cfg     {no: veces seguidas que dijo «Ahora no», off: ya no preguntar}
//   fs_sem1       progreso de «Tu primera semana»
// La app no lee Instagram ni manda nada: todo lo apunta ella. Todo texto que se pinta pasa por esc().
const CT=(function(){
const KEY="fs_contactos",CFG="fs_ct_cfg",SEM="fs_sem1",MAXC=300,ALIAS_MAX=40,NOTA_MAX=120;
const ESTADOS=["Guía enviada","Le escribí otra vez","Es clienta","Le interesa el proyecto","Ahora no"];
const SEG_PEGA="Hola, ¿cómo lo has pensado? Si te apetece, seguimos hablando. Y si no, también está bien.";
const SEG_GENERICO="Hola, ¿pudiste ver lo que te mandé? Si te apetece, te cuento más. Sin compromiso.";
const pad=n=>String(n).padStart(2,"0");
const kdia=d=>d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
const hoyK=()=>kdia(new Date());
const RX_DIA=/^\d{4}-\d{2}-\d{2}$/;
function dias(f){
  if(!RX_DIA.test(f))return 0;
  const p=f.split("-").map(Number),a=new Date(p[0],p[1]-1,p[2]),b=new Date(),c=new Date(b.getFullYear(),b.getMonth(),b.getDate());
  return Math.max(0,Math.round((c-a)/864e5));
}
const hace=n=>n<=0?"hoy":n===1?"ayer":"hace "+n+" días";
const nid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
// ---------- privacidad ----------
// nueve cifras seguidas (aunque lleven espacios, puntos o guiones entre medias) = parece un teléfono
const pareceTel=t=>/\d(?:[\s.\-]*\d){8}/.test(String(t==null?"":t));
const limpia=(t,n)=>String(t==null?"":t).replace(/[\u0000-\u001f<>]/g," ").replace(/\s+/g," ").trim().slice(0,n);
// ---------- almacenamiento (se valida todo al leer: una copia de seguridad puede traer cualquier cosa) ----------
function load(){
  const x=ls(KEY);if(!Array.isArray(x))return [];
  const out=[];
  x.forEach(c=>{
    if(!c||typeof c!=="object"||typeof c.id!=="string"||!/^[A-Za-z0-9_-]{1,30}$/.test(c.id))return;
    const n=limpia(c.n,ALIAS_MAX);if(!n)return;
    out.push({id:c.id,n,f:RX_DIA.test(c.f)?c.f:hoyK(),ref:/^(pk|g|e|o):[A-Za-z0-9_-]{1,60}$/.test(c.ref||"")?c.ref.replace(/^g:(.+)$/,(m,i)=>"g:"+guiaId(i)):"",pg:/^(clientas|proyecto)_[a-z0-9-]{1,60}$/.test(c.pg||"")?c.pg:"",q:limpia(c.q,140),kw:limpia(c.kw,15),s:Number.isInteger(c.s)&&c.s>=0&&c.s<=4?c.s:0,nota:limpia(c.nota,NOTA_MAX)});
  });
  return out.slice(0,MAXC);
}
const save=L=>ls(KEY,L.slice(0,MAXC));
function cfg(){const c=ls(CFG);return c&&typeof c==="object"?{no:+c.no||0,off:!!c.off}:{no:0,off:false}}
// ---------- de dónde sale lo que se mandó ----------
function info(ref){
  const m=/^(pk|g|e|o):(.+)$/.exec(ref||"");if(!m)return null;
  try{
    if(m[1]==="o"){const it=QC.porClave(m[2]);if(!it)return null;return {q:"tu respuesta a «"+it.dicen+"»",kw:"",seg:SEG_PEGA,kws:[]}}
    if(m[1]==="pk"){const s=C2.PK[m[2]];if(!s)return null;return {q:s.pk.recurso_corto,kw:s.kw[0],seg:s.pk.guia.seguimiento,kws:s.kw}}
    if(m[1]==="g"){const g=GUIA[m[2]];if(!g)return null;return {q:"la guía «"+g.titulo+"»",kw:(g.kw||[])[0]||"",seg:((g.kit||{}).seguimiento||[])[0]||"",kws:g.kw||[]}}
    const r=rcFind(m[2]);if(!r)return null;return {q:"«"+r.titulo+"»",kw:r.kw[0]||"",seg:r.seguimiento[0]||"",kws:r.kw}
  }catch(e){}
  return null;
}
// la palabra que de verdad se pidió: la que ha elegido en Crear o la que ha escrito en el buscador de Recursos; si no, la primera
function kwDe(ref,I){
  const m=/^(pk|g):(.+)$/.exec(ref||"");
  if(m&&typeof S!=="undefined"){
    if(m[1]==="pk"&&S.tab==="crear"&&S.c2&&S.c2.s===m[2]&&S.c2.kw)return kwClean(S.c2.kw);
    const q=norm(S.xkq||"").trim().toUpperCase();if(q&&I&&I.kws.some(k=>norm(k).toUpperCase()===q))return kwClean(q);
  }
  return I?kwClean(I.kw):"";
}
function mensajeSeg(c){const I=info(c.ref);return (I&&I.seg)||SEG_GENERICO}
// ---------- apuntar ----------
function add(alias,ref){
  const L=load(),I=info(ref);
  L.unshift({id:nid(),n:alias,f:hoyK(),ref:I?ref:"",pg:(I&&/^o:/.test(ref))?ref.slice(2):"",q:I?I.q:"",kw:I?kwDe(ref,I):"",s:0,nota:""});
  save(L);return L[0];
}
function validaAlias(v){
  const t=limpia(v,200);
  if(!t)return {err:"Escribe un nombre o un alias."};
  if(pareceTel(v))return {err:"Eso parece un teléfono. Pon solo un nombre o un alias: no guardo teléfonos."};
  if(t.length>ALIAS_MAX)return {err:"Máximo "+ALIAS_MAX+" letras."};
  return {ok:t};
}
function askHtml(ref){
  return '<div class="ct-ask" role="group" aria-label="Apuntar a quién se la mandas" data-ctr="'+esc(ref)+'"><label class="ct-l" for="ct_alias">¿A quién se la mandas?</label>'
   +'<input id="ct_alias" class="ct-in" type="text" maxlength="'+ALIAS_MAX+'" autocomplete="off" autocapitalize="words" placeholder="Nombre o alias" aria-describedby="ct_aerr">'
   +'<p class="ct-err" id="ct_aerr" role="status"></p>'
   +'<div class="ct-b"><button type="button" class="btn" data-act="ctsi">Apuntar</button><button type="button" class="btn ghost" data-act="ctno">Ahora no</button></div>'
   +'<small class="mut">Solo un nombre o alias. Se guarda en tu móvil.</small></div>';
}
function mostrarAsk(btn){
  if(cfg().off||!info(btn.dataset.ct))return;
  document.querySelectorAll(".ct-ask,.ct-okm").forEach(x=>x.remove());
  const anchor=btn.closest(".rmsg,.rtext,.xmsg")||btn;
  anchor.insertAdjacentHTML("afterend",askHtml(btn.dataset.ct));
  const el=document.querySelector(".ct-ask");
  if(el&&el.scrollIntoView)try{el.scrollIntoView({block:"nearest",behavior:"smooth"})}catch(e){}
}
// ---------- estado de los avisos ----------
// quien recibió una respuesta a una pega no recibe aviso de seguimiento: ahí la norma es no insistir
const sinAviso=c=>/^o:/.test(c.ref);
const est=(c,s)=>(s===0&&sinAviso(c))?"Pega contestada":ESTADOS[s];
const pegaHtml=c=>{const it=c.pg?QC.porClave(c.pg):null;return it?'<p class="ct-m">La pega era: «'+esc(it.dicen)+'»</p>':""};
function marcaPega(id,k){const L=load(),c=L.find(x=>x.id===id);if(!c||!QC.porClave(k))return false;c.pg=k;save(L);return true}
function pendientes(){
  return load().filter(c=>c.s===0&&!sinAviso(c)&&dias(c.f)>=2&&dias(c.f)<=7).sort((a,b)=>dias(b.f)-dias(a.f)).slice(0,3);
}
function avisosHtml(){
  const P=pendientes();if(!P.length)return "";
  return P.map(c=>{
    const d=dias(c.f),msg=mensajeSeg(c);
    return '<article class="panel ct-av"><p class="ct-avt">Escríbele a <b>'+esc(c.n)+'</b>: le mandaste '+esc(c.q||"una guía")+' '+hace(d)+'.</p>'
     +'<div class="ct-msg">'+esc(msg)+'</div>'
     +'<div class="acts"><button type="button" class="btn ghost" data-copy="'+esc(msg)+'">Copiar mensaje</button><button type="button" class="btn" data-act="cthecho" data-cid="'+esc(c.id)+'">Hecho</button></div></article>';
  }).join("");
}
// ---------- pantalla Mis contactos ----------
const E=()=>S.ct||(S.ct={del:"",err:""});
function cardHtml(c,e){
  const d=dias(c.f);
  const est0=c.s===0?'<div class="acts"><button type="button" class="btn" data-act="ctst" data-cid="'+esc(c.id)+'" data-v="1">Le escribí otra vez</button></div>'
   :'<div class="chips ct-ch" role="group" aria-label="Resultado">'+[[2,"Es clienta"],[3,"Le interesa el proyecto"],[4,"Ahora no"]].map(x=>'<button type="button" class="chip'+(c.s===x[0]?" on":"")+'" data-act="ctst" data-cid="'+esc(c.id)+'" data-v="'+x[0]+'" aria-pressed="'+(c.s===x[0])+'">'+x[1]+'</button>').join("")+'</div>'
   +'<button type="button" class="linkb ct-back" data-act="ctst" data-cid="'+esc(c.id)+'" data-v="'+(c.s===1?0:1)+'">Volver a «'+est(c,c.s===1?0:1)+'»</button>';
  const toca=c.s===0&&d>=2&&d<=7&&!sinAviso(c);
  const conf=e.del===c.id?'<div class="tipp ct-conf" role="alert"><b>¿Borrar a '+esc(c.n)+'?</b> No se puede deshacer.<div class="acts"><button type="button" class="btn" data-act="ctdelok" data-cid="'+esc(c.id)+'">Sí, borrar</button><button type="button" class="btn ghost" data-act="ctdelno">Cancelar</button></div></div>':'<button type="button" class="mini ct-del" data-act="ctdel" data-cid="'+esc(c.id)+'">Borrar</button>';
  return '<article class="panel ct-card'+(toca?" toca":"")+'"><div class="ct-top"><b class="ct-n">'+esc(c.n)+'</b><span class="ct-badge s'+c.s+'">'+est(c,c.s)+'</span></div>'
   +'<p class="ct-m">'+(c.q?'Le mandaste: '+esc(c.q):'Añadido a mano')+' · '+hace(d)+(c.kw?' · palabra '+esc(c.kw):'')+'</p>'
   +pegaHtml(c)
   +(toca?'<p class="ct-toca">Hoy toca escribirle: tienes el mensaje en Inicio.</p>':'')
   +est0
   +'<button type="button" class="linkb ct-peg" data-act="qcir" data-cid="'+esc(c.id)+'">Me ha puesto una pega</button>'
   +'<label class="ct-nl">Nota<input type="text" class="ct-note" data-cid="'+esc(c.id)+'" maxlength="'+NOTA_MAX+'" value="'+esc(c.nota)+'" placeholder="Una nota corta (opcional)" autocomplete="off"></label>'
   +conf+'</article>';
}
function viewContactos(){
  const e=E(),L=load(),C=cfg();
  let h='<section class="panel ct-head"><h2>Mis contactos</h2><p class="lead">Esto se guarda solo en tu móvil. Pon un nombre o un alias y nada más: ni teléfonos ni datos que no necesites.</p>'
   +'<label class="ct-l2" for="ct_new">Añadir a alguien a mano</label><div class="ct-add"><input id="ct_new" class="ct-in" type="text" maxlength="'+ALIAS_MAX+'" autocomplete="off" autocapitalize="words" placeholder="Nombre o alias" aria-describedby="ct_nerr"><button type="button" class="btn" data-act="ctadd">Añadir</button></div>'
   +'<p class="ct-err" id="ct_nerr" role="status">'+esc(e.err||"")+'</p></section>';
  if(C.off)h+='<section class="panel ct-off"><p><b>Ahora no te pregunto a quién se la mandas.</b> Lo dejé de preguntar porque dijiste «Ahora no» tres veces seguidas.</p><button type="button" class="btn ghost" data-act="ctoff">Volver a preguntarme</button></section>';
  if(!L.length){
    h+='<section class="panel">'+VIS.vacio("contactos",'<b>Todavía no has apuntado a nadie.</b><br>Cuando copies el mensaje con la guía en Crear o en Recursos, te preguntaré a quién se la mandas. A los 2 o 3 días te aviso en Inicio para que le escribas.','<button type="button" class="btn" data-tab="crear">Ir a Crear</button>')+'</section>';
    return h;
  }
  const esp=L.filter(c=>c.s===0).length,toca=L.filter(c=>c.s===0&&!sinAviso(c)&&dias(c.f)>=2&&dias(c.f)<=7);
  h+='<p class="ct-sum"><b>'+L.length+'</b> '+(L.length===1?"contacto":"contactos")+' · <b>'+esp+'</b> '+(esp===1?"con la guía enviada":"con la guía enviada")+'</p>';
  const orden=L.slice().sort((a,b)=>(toca.indexOf(b)>=0)-(toca.indexOf(a)>=0));
  h+=orden.map(c=>cardHtml(c,e)).join("");
  h+='<section class="panel ct-all">'+(e.del==="all"?'<div class="tipp ct-conf" role="alert"><b>¿Borrar los '+L.length+' contactos?</b> No se puede deshacer.<div class="acts"><button type="button" class="btn" data-act="ctdelok" data-cid="all">Sí, borrar todos</button><button type="button" class="btn ghost" data-act="ctdelno">Cancelar</button></div></div>'
   :'<button type="button" class="mini" data-act="ctdel" data-cid="all">Borrar todos los contactos</button>')+'<p class="note">Tus contactos van incluidos en tu copia de seguridad (Más › Mi cuenta).</p></section>';
  return h;
}
// ---------- TU PRIMERA SEMANA ----------
const PASOS=[
 {t:"Deja lista tu bio",w:"Es lo primero que mira quien llega a tu perfil."},
 {t:"Crea tus primeras stories",w:"Las stories las ve quien ya te sigue, y ahí empieza la confianza."},
 {t:"Graba tu primer reel de una frase",w:"Un solo plano y una frase: así te descubre gente nueva."},
 {t:"Planifica tu semana",w:"Con tres publicaciones ya apuntadas, dejas de improvisar."},
 {t:"Apunta a quién le mandas tu primera guía",w:"Así sabes a quién escribirle de nuevo y cuándo."}];
function hayPlan(){
  const D=ls("fs_plan_v1");if(!D||typeof D!=="object"||!D.w||typeof D.w!=="object")return false;
  return Object.keys(D.w).some(k=>Array.isArray(D.w[k])&&D.w[k].length>0);
}
function hayGuiones(){const G=ls("ft_guiones");return Array.isArray(G)&&G.length>0}
function semLoad(){
  let s=ls(SEM);
  if(!s||typeof s!=="object"||Array.isArray(s)){
    // quien ya usaba la app antes de este cambio no ve la tarjeta sola: solo desde Más › Cómo se usa
    s={ini:Date.now(),a:{},m:{},cerr:0,off:(hayPlan()||hayGuiones())?1:0,fin:""};ls(SEM,s);
  }
  s.a=s.a&&typeof s.a==="object"?s.a:{};s.m=s.m&&typeof s.m==="object"?s.m:{};
  return s;
}
function semMarca(n){const s=semLoad();if(s.a[n])return;s.a[n]=1;ls(SEM,s)}
function hechos(s){
  let sem=0;try{sem=PL.items(PL.wkHoy()).length}catch(e){}
  return [!!(ls("fs_bio_ok")||s.m[1]),!!(s.a[2]||s.m[2]),!!(s.a[3]||s.m[3]),!!(sem>=3||s.m[4]),!!(load().length>0||s.m[5])];
}
const SVG_OK='<svg class="sm-svg" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function semHtml(){
  const s=semLoad();if(s.off||s.cerr)return "";
  const H=hechos(s),n=H.filter(Boolean).length,hoy=hoyK();
  if(n===5){if(!s.fin){s.fin=hoy;ls(SEM,s)}if(s.fin!==hoy)return ""}
  else if(s.fin){s.fin="";ls(SEM,s)}
  const sig=H.indexOf(false);
  const bars='<div class="sm-bars" aria-hidden="true">'+H.map((x,i)=>'<i class="'+(x?"on":i===sig?"nx":"")+'"></i>').join("")+'</div>';
  const cab='<div class="sm-h"><h3>Tu primera semana</h3><span class="sm-n" aria-label="'+n+' de 5 pasos hechos">'+n+' de 5</span></div>'+bars;
  if(n===5)return '<section class="panel sm sm-fin">'+cab+'<p class="sm-bye"><b>Ya tienes lo básico.</b> Tu bio, tus stories, tu reel, tu semana y tu primer contacto. Ahora toca repetir lo que mejor te salga.</p><button type="button" class="linkb" data-act="semcerrar">Ya sé por dónde voy</button></section>';
  const li=PASOS.map((p,i)=>{
    const ok=H[i],nx=i===sig;
    return '<li class="sm-r'+(ok?" ok":"")+(nx?" nx":"")+'"><button type="button" class="sm-ck" data-act="semck" data-n="'+(i+1)+'" aria-pressed="'+ok+'" aria-label="'+(ok?"Paso hecho: ":"Marcar como hecho: ")+esc(p.t)+'">'+(ok?SVG_OK:'')+'</button>'
     +'<div class="sm-t">'+(ok?'<b class="sm-tt">'+esc(p.t)+'</b>':'<button type="button" class="sm-tt" data-act="semgo" data-n="'+(i+1)+'">'+esc(p.t)+'</button>')+'<small>'+esc(p.w)+'</small>'
     +(nx?'<button type="button" class="btn sm-go" data-act="semgo" data-n="'+(i+1)+'">Empezar</button>':'')+'</div></li>';
  }).join("");
  return '<section class="panel sm">'+cab+'<ol class="sm-l">'+li+'</ol><button type="button" class="linkb" data-act="semcerrar">Ya sé por dónde voy</button></section>';
}
function semIr(n){
  switch(n){
   case 1:go("perfil_ig");break;
   case 2:C2.abrir("st","clientas","confien");break;
   case 3:C2.st().rt="frase";C2.abrir("re","clientas","conocer");break;
   case 4:go("semana");break;
   case 5:go("contactos");break;
  }
}
// ---------- INICIO: la idea de hoy, avisos, resumen ----------
const IDEAS=[
 {t:"Planifica tu semana",d:"Elige qué vas a publicar cada día para no improvisar. Se hace en un minuto.",b:"Preparar mi semana",tab:"semana"},
 {t:"Stories con palabra clave",d:"Una secuencia corta con palabra clave para que te escriban. Te la damos escrita.",b:"Empezar",v:"st|clientas|escriban"},
 {t:"Un reel para que te descubran",d:"Gente nueva que todavía no te conoce: un plano, una frase, y ya.",b:"Empezar",v:"re|clientas|conocer"},
 {t:"Stories del proyecto",d:"Cuenta cómo lo encajas en tu día y pide una palabra a quien le interese.",b:"Empezar",v:"st|proyecto|escriban"},
 {t:"Un reel para captar",d:"Con palabra clave y la guía que mandas cuando te escriban.",b:"Empezar",v:"re|clientas|escriban"},
 {t:"Cuenta algo tuyo en stories",d:"Para quien ya te sigue: cómo era antes y cómo lo haces ahora.",b:"Empezar",v:"st|clientas|confien"},
 {t:"Un reel del proyecto",d:"Para que te encuentre quien busca algo propio.",b:"Empezar",v:"re|proyecto|conocer"}];
function ideaHtml(){
  const f=new Date(),di=(f.getDay()+6)%7;
  let it=null;
  try{
    if(S.pl)S.pl.wk=PL.wkHoy(); // «Editar en Crear» de la semana actual
    it=PL.items(PL.wkHoy()).filter(x=>x.d===di&&!x.done)[0]||null;
  }catch(e){}
  if(it){
    const s=C2.PK[it.s],tipo={st:"Stories",re:"Reel",tt:"TikTok"}[it.t];
    return '<section class="panel hy"><p class="hy-k">La idea de hoy</p><p class="hy-t">Hoy tienes en tu semana: '+esc(tipo)+'</p><p class="hy-d">'+esc(s.nombre)+'. Ya la tienes planificada: solo falta grabarla.</p><button type="button" class="btn hy-go" data-pk="open" data-pi="'+esc(it.id)+'">Abrir el guion</button></section>';
  }
  const x=IDEAS[f.getDay()];
  return '<section class="panel hy"><p class="hy-k">La idea de hoy</p><p class="hy-t">'+esc(x.t)+'</p><p class="hy-d">'+esc(x.d)+'</p><button type="button" class="btn hy-go" '+(x.tab?'data-tab="'+x.tab+'"':'data-c2k="hoy" data-c2v="'+x.v+'"')+'>'+esc(x.b)+'</button></section>';
}
function resumenHtml(){
  let L=[];try{L=PL.items(PL.wkHoy())}catch(e){}
  const h=L.filter(x=>x.done).length;
  return '<section class="panel hr"><p class="hr-k">Tu semana</p>'+(L.length
   ?'<p class="hr-t">'+h+' de '+L.length+' publicaciones hechas</p><p class="mut">Te quedan '+(L.length-h)+' por hacer esta semana.</p><button type="button" class="btn ghost" data-tab="semana">Ver mi semana</button>'
   :'<p class="hr-t">Todavía no tienes publicaciones planificadas</p><p class="mut">Con tres o cuatro apuntadas, cada día sabes qué toca.</p><button type="button" class="btn ghost" data-tab="semana">Planificar mi semana</button>')+'</section>';
}
function tarjetaContactos(){
  const L=load();if(!L.length)return "";
  const esp=L.filter(c=>c.s===0).length;
  return '<section class="panel hr"><p class="hr-k">Mis contactos</p><p class="hr-t">'+L.length+(L.length===1?" persona apuntada":" personas apuntadas")+'</p><p class="mut">'+(esp?esp+(esp===1?" espera a que le escribas otra vez.":" esperan a que les escribas otra vez."):"Todas tienen ya su seguimiento.")+'</p><button type="button" class="btn ghost" data-tab="contactos">Ver mis contactos</button></section>';
}
function inicioHtml(nombre,tt){
  const hola='<div class="hi-fila"><p class="hi">'+(nombre?"Hola, "+esc(nombre):"Hola")+'</p><div class="hi-il">'+VIS.D.cab()+'</div></div>';
  let h=hola+semHtml();
  h+='<h2 class="hy-h">Hoy te toca</h2>'+FX.preguntasHtml()+(tt?"":ideaHtml())+avisosHtml();
  return h;
}
// ---------- eventos ----------
document.addEventListener("click",e=>{
  const b=e.target.closest&&e.target.closest("button");if(!b)return;
  const d=b.dataset;
  // copiar el mensaje de entrega o la guía: aparece «¿A quién se la mandas?» debajo
  if(d.ct){mostrarAsk(b);return}
  // los pasos de «Tu primera semana» que se marcan solos al copiar o guardar un guion
  if(S.tab==="crear"&&S.c2&&(d.copy!==undefined||d.c2k==="save")){
    if(S.c2.t==="st")semMarca(2);else if(S.c2.t==="re")semMarca(3);
  }
  switch(d.act){
   case "ctsi":{
    const box=b.closest(".ct-ask");if(!box)break;
    const inp=box.querySelector(".ct-in"),er=box.querySelector(".ct-err"),v=validaAlias(inp.value);
    if(!v.ok){er.textContent=v.err;inp.focus();break}
    const c=add(v.ok,box.dataset.ctr);
    const cf=cfg();ls(CFG,{no:0,off:cf.off});
    box.outerHTML='<p class="ct-okm" role="status">Apuntado: <b>'+esc(c.n)+'</b>. A los 2 o 3 días te aviso en Inicio. <button type="button" class="linkb" data-tab="contactos">Ver mis contactos</button></p>';
    break}
   case "ctno":{
    const cf=cfg(),no=cf.no+1,off=no>=3;
    ls(CFG,{no:off?3:no,off});
    const box=b.closest(".ct-ask");if(box)box.remove();
    if(off)toast("Dejo de preguntar. Puedes reactivarlo en Mis contactos");
    break}
   case "ctoff":ls(CFG,{no:0,off:false});toast("Volveré a preguntarte");render(true);break;
   case "ctadd":{
    const inp=$("#ct_new"),v=validaAlias(inp?inp.value:"");
    const x=E();
    if(!v.ok){x.err=v.err;const er=$("#ct_nerr");if(er)er.textContent=v.err;if(inp)inp.focus();break}
    x.err="";add(v.ok,"");toast("Apuntado");render(true);break}
   case "ctst":{
    const L=load(),c=L.find(x=>x.id===d.cid);if(!c)break;
    c.s=Math.max(0,Math.min(4,+d.v||0));save(L);render(true);break}
   case "cthecho":{
    const L=load(),c=L.find(x=>x.id===d.cid);if(!c)break;
    c.s=1;save(L);toast("Apuntado: le escribiste otra vez");render(true);break}
   case "ctdel":E().del=d.cid;render(true);break;
   case "ctdelno":E().del="";render(true);break;
   case "ctdelok":{
    E().del="";
    if(d.cid==="all")save([]);else save(load().filter(x=>x.id!==d.cid));
    toast("Borrado");render(true);break}
   case "semgo":semIr(+d.n);break;
   case "semck":{
    const s=semLoad(),n=+d.n,H=hechos(s);
    if(H[n-1]&&!s.m[n])break; // ya está hecho solo
    s.m[n]=s.m[n]?0:1;ls(SEM,s);render(true);break}
   case "semcerrar":{const s=semLoad();s.cerr=1;ls(SEM,s);toast("Tienes «Tu primera semana» en Más › Cómo se usa");render(true);break}
   case "semver":{const s=semLoad();s.cerr=0;s.off=0;s.fin="";ls(SEM,s);go("home");break}
  }
});
// notas: se guardan al salir del campo
document.addEventListener("change",e=>{
  const el=e.target;if(!el||!el.classList||!el.classList.contains("ct-note"))return;
  const L=load(),c=L.find(x=>x.id===el.dataset.cid);if(!c)return;
  if(pareceTel(el.value)){el.value=c.nota;toast("Eso parece un teléfono: no lo guardo");return}
  c.nota=limpia(el.value,NOTA_MAX);save(L);el.value=c.nota;toast("Nota guardada");
});
document.addEventListener("keydown",e=>{
  if(e.key!=="Enter"||!e.target||!e.target.classList)return;
  if(e.target.id==="ct_alias"){const b=document.querySelector('.ct-ask [data-act="ctsi"]');if(b)b.click()}
  else if(e.target.id==="ct_new"){const b=document.querySelector('[data-act="ctadd"]');if(b)b.click()}
});
VIEWS.contactos=viewContactos;
return {load,dias,pendientes,askHtml,marcaPega,inicioHtml,resumenHtml,tarjetaContactos,semHtml,avisosHtml,pareceTel};
})();

// ===== Fam Studio · accesibilidad: estado de los interruptores y nombre de los campos =====
// Cada pantalla se pinta con su propio HTML; aquí se completa lo que lee un lector de pantalla, siempre igual:
//  - grupos de botones donde uno está marcado (clase «on»): aria-pressed en todos, sincronizado con la clase;
//  - barra de abajo: aria-current="page" en la pestaña actual;
//  - campos sin etiqueta: se les da nombre (su texto de ayuda).
const A11Y=(function(){
let pend=false;
function run(){
  pend=false;
  const main=document.getElementById("main");if(!main)return;
  main.querySelectorAll("button").forEach(b=>{
    if(b.hasAttribute("aria-expanded")||b.getAttribute("role")==="tab")return;
    const p=b.parentElement;if(!p)return;
    const hay=b.classList.contains("on")||(p.querySelector(":scope>button.on"));
    if(!hay&&!b.hasAttribute("aria-pressed"))return;
    if(b.hasAttribute("aria-pressed")&&!hay)return;
    if(!b.classList.contains("on")&&b.hasAttribute("aria-pressed")&&b.getAttribute("aria-pressed")==="false")return;
    b.setAttribute("aria-pressed",b.classList.contains("on")?"true":"false");
  });
  main.querySelectorAll("input:not([type=hidden]):not([type=checkbox]):not([type=radio]):not([type=file]),textarea,select").forEach(e=>{
    if(e.getAttribute("aria-label")||e.getAttribute("aria-labelledby")||(e.labels&&e.labels.length))return;
    const t=e.getAttribute("placeholder");if(t)e.setAttribute("aria-label",t.replace(/…$/,""));
  });
}
function pide(){if(pend)return;pend=true;Promise.resolve().then(run)}
function init(){
  const m=document.getElementById("main");if(!m)return;
  new MutationObserver(pide).observe(m,{subtree:true,childList:true,attributes:true,attributeFilter:["class"]});
  run();
}
return {run,init};
})();
A11Y.init();

// ===== Fam Studio · navegación, inicio, instalación y administración =====
const NAV=[["home","Inicio"],["crear","Crear"],["semana","Semana"],["recursos","Recursos"],["equipo","Equipo"],["mas","Más"]];
const PARENT={contactos:"recursos",objeciones:"recursos",obj_det:"objeciones",funciona:"semana",situaciones:"crear",ganchos:"crear",cuadricula:"crear",revisor:"crear",normas:"crear",numeros:"semana",perfil_ig:"home",tt_live:"home",tt_historia:"home",tt_respuestas:"home",tt_bio:"home",guia:"mas",ayuda:"mas",perfil:"mas",instalar:"mas",admin:"mas",negocio:"equipo",guia_det:"recursos",sit_mini:"recursos",eq_prospectar:"equipo",eq_beauty:"equipo",eq_reto:"equipo",eq_embarazo:"equipo",eq_morning:"equipo",eq_semana:"equipo",eq_calendario:"equipo",eq_formaciones:"equipo",eq_guias:"equipo",eq_herramientas:"equipo",eq_paises:"equipo",eq_terminos:"equipo",eq_presentar:"equipo",eq_ventas:"equipo",eq_normas:"equipo"};
const parentOf=t=>PARENT[t];
const isStandalone=()=>{try{return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===true}catch(e){return false}};
const platform=()=>{const u=navigator.userAgent||"";if(/iPhone|iPad|iPod/i.test(u)||(/Macintosh/.test(u)&&"ontouchend" in document))return "ios";if(/Android/i.test(u))return "android";return "otro"};

// «Atrás» vuelve de donde vienes: S.hist guarda las pantallas por las que has pasado (se vacía al tocar la barra de abajo
// o si alguien cambia S.tab sin pasar por go()); sin historial vuelve a la pantalla «madre» (PARENT).
const NOMBRE={home:"Inicio",crear:"Crear",semana:"Semana",recursos:"Recursos",equipo:"Equipo",mas:"Más",contactos:"Mis contactos",objeciones:"Qué contestar cuando te dicen…",obj_det:"la pega",funciona:"Lo que te funciona",situaciones:"Situaciones",ganchos:"Ganchos",cuadricula:"Cuadrícula",revisor:"Revisor",guia:"Guía del método",ayuda:"Cómo se usa",perfil:"Mi cuenta",instalar:"Instalar",admin:"Administración",negocio:"Mi proyecto",perfil_ig:"Tu bio",numeros:"Mis números",guia_det:"la guía",sit_mini:"la mini guía",normas:"Lo que no se dice",tt_historia:"Mi historia",tt_respuestas:"Responder comentarios",tt_bio:"Mi bio de TikTok",tt_live:"TikTok LIVE",eq_prospectar:"Prospectar",eq_beauty:"Mi Beauty Party",eq_reto:"Reto 21 días",eq_morning:"Morning Glow",eq_embarazo:"Complementos y embarazo",eq_semana:"Tus primeros siete días en el equipo",eq_calendario:"Calendario",eq_formaciones:"Formaciones",eq_guias:"Guías y plantillas",eq_herramientas:"Herramientas",eq_paises:"Países y kits",eq_terminos:"Términos",eq_presentar:"Cómo presentar",eq_ventas:"Vender",eq_normas:"Normas"};
function backDe(tab){
  const H=S.hist||[];const t=H.length?H[H.length-1]:null;
  if(t&&t!==tab&&VIEWS[t])return t;
  return parentOf(tab)||null;
}
function go(tab,keep){
  if(tab!==S.tab){
    if(NAV.some(n=>n[0]===tab))S.hist=[];else{S.hist=S.hist||[];S.hist.push(S.tab);if(S.hist.length>20)S.hist.shift()}
  }
  S.tab=tab;S.histCur=tab;render(keep)
}
function goBack(){const H=S.hist||[];const t=H.length?H.pop():null;const d=(t&&VIEWS[t])?t:parentOf(S.tab);if(!d)return;S.tab=d;S.histCur=d;render()}
function render(keep){
  const y=window.scrollY,par=parentOf(S.tab),cur=par||S.tab;
  $("#bnav").innerHTML=NAV.map(t=>'<button type="button" class="bn'+(cur===t[0]?" on":"")+'" data-tab="'+t[0]+'"'+(cur===t[0]?' aria-current="page"':'')+'>'+t[1]+'</button>').join("");
  const v=VIEWS[S.tab]||viewHome;
  if(S.histCur!==S.tab){S.hist=[];S.histCur=S.tab}
  const bt=backDe(S.tab),back=bt?'<button type="button" class="back" data-tab="'+bt+'" data-back="1" aria-label="Volver a '+esc(NOMBRE[bt]||"la pantalla anterior")+'">‹ '+esc(NOMBRE[bt]||"Atrás")+'</button>':"";
  try{$("#main").innerHTML=back+v()}catch(err){$("#main").innerHTML='<section class="panel"><h3>Algo ha fallado</h3><p>'+esc(err&&err.message)+'</p></section>'}
  if(typeof tjScan==="function")tjScan(); // tarjetas para compartir: se dibujan al abrirse o entrar en pantalla
  if(typeof FOTOS!=="undefined")FOTOS.scan(); // fotos de ejemplo e imágenes de producto: solo las de las tarjetas que se ven
  if(typeof ESC!=="undefined")ESC.scan(); // minitutoriales animados (Instalar, Cómo se usa): solo los que se ven
  if(keep)window.scrollTo(0,y);else{window.scrollTo(0,0);VIS.entra()}
  {const tb=document.getElementById("bp_tabs"); // pestañas de Mi Beauty Party: la activa se ve (centrada) y el degradado del borde avisa de que hay más
   if(tb){const on=tb.querySelector(".on");if(on)tb.scrollLeft=on.offsetLeft-(tb.clientWidth-on.offsetWidth)/2;const f=()=>tb.classList.toggle("fin",tb.scrollLeft+tb.clientWidth>=tb.scrollWidth-4);tb.addEventListener("scroll",f,{passive:true});f()}}
  {const rt=document.getElementById("rc_temas"); // Recursos › Guías: el tema elegido se ve en la fila de temas (que se desliza)
   if(rt){const on=rt.querySelector(".on");if(on)rt.scrollLeft=on.offsetLeft-(rt.clientWidth-on.offsetWidth)/2}}
  if(S.anc){const a=document.getElementById(S.anc);S.anc="";if(a)try{a.scrollIntoView({block:"start"})}catch(e){}} // accesos que llevan a un apartado concreto (data-anc)
}

// ----- INICIO -----
const instHtml=()=>(!isStandalone()&&!ls("fs_inst_ok"))?'<section class="panel inst"><div><b>Instala Fam Studio en tu móvil</b><small>Se abre como una app, con su icono. Tardas 30 segundos.</small></div><div class="acts"><button class="btn" data-tab="instalar">Ver cómo</button><button class="mini" data-act="instok">Ya la tengo</button></div></section>':"";
const bkHtml=()=>bkToca()?'<section class="panel inst bkav"><div><b>Guarda una copia de tus datos</b><small>Tu semana y tus ajustes están solo en este móvil.</small></div><div class="acts"><button class="btn" data-act="bkgo">Ir a la copia de seguridad</button><button class="mini" data-act="bkno">Ahora no</button></div></section>':"";
// ----- «Tu perfil» (Inicio): la bio y lo propio de cada red; son accesos, las pantallas viven aquí (su madre es Inicio) -----
const ICO9=d=>'<svg class="pf9s" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+d+'</svg>';
const PF_ICO={bio:ICO9('<circle cx="12" cy="8" r="4"/><path d="M4.5 21c.9-4.6 3.7-7 7.5-7s6.6 2.4 7.5 7"/>'),pres:ICO9('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>'),hist:ICO9('<rect x="3" y="6" width="18" height="12" rx="3"/><path d="m10 9.5 5 2.5-5 2.5z"/>'),resp:ICO9('<path d="M4 5h16v10H9.5L5 19v-4H4z"/>'),live:ICO9('<circle cx="12" cy="12" r="2"/><path d="M8 8a5.7 5.7 0 0 0 0 8M16 8a5.7 5.7 0 0 1 0 8M5 5a10 10 0 0 0 0 14M19 5a10 10 0 0 1 0 14"/>')};
const bioHecha=()=>{const k=ls("fs_bio_ok");return !!(k&&typeof k.txt==="string"&&k.txt.length)};
function perfilHtml(tt){
  const B=(tab,ico,t,sub,anc)=>'<button type="button" class="pf9" data-tab="'+tab+'"'+(anc?' data-anc="'+anc+'"':'')+'><span class="pf9i">'+PF_ICO[ico]+'</span><span class="pf9t"><b>'+t+'</b><small>'+sub+'</small></span></button>';
  if(tt)return '<section class="panel pf9p" aria-label="Tu perfil de TikTok"><h3>Tu perfil de TikTok</h3><div class="pf9g">'+B("tt_bio","bio","Mi bio de TikTok","Dos líneas, 80 caracteres")+B("tt_historia","hist","Mi historia en 60 segundos","El vídeo que fijas arriba del perfil")+'</div></section>'
   +'<section class="panel lv-card" aria-label="Directos"><span class="lv-et">Directos</span><h3>TikTok LIVE</h3><p>Para que te conozcan en directo y te escriban por privado. Con guiones minuto a minuto, para clientas o para el proyecto.</p><button type="button" class="btn big" data-tab="tt_live">Preparar mi directo</button></section>'
   +'<section class="panel pf9p" aria-label="Comentarios"><h3>Comentarios</h3><div class="pf9g">'+B("tt_respuestas","resp","Responder comentarios","«Información», «¿es fiable?» y más")+'</div></section>';
  return '<section class="panel pf9p" aria-label="Tu perfil"><h3>Tu perfil</h3><div class="pf9g">'+B("perfil_ig","bio","Tu bio",bioHecha()?"Tu bio está lista · Verla":"150 caracteres que dicen quién eres")+B("perfil_ig","pres","Tu publicación de presentación","La que fijas arriba del perfil","pr_blk")+'</div></section>';
}
// aviso de una sola vez para quien ya usaba la app (fs_orden: 1 = pendiente de ver, 0 = no hay que enseñarlo). Quien llega nueva no tiene nada guardado y no lo ve.
const ORDEN="fs_orden";
(function(){
  if(ls(ORDEN)!==null)return;
  let uso=false;
  try{for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i)||"";if(/^(fs|ft)_/.test(k)&&["fs_bien","fs_tut","fs_ini","fs_ver","fs_seen_v","fs_code","fs_inst_ok","fs_copia",ORDEN].indexOf(k)<0){uso=true;break}}}catch(e){}
  ls(ORDEN,uso?1:0);
})();
const ordenHtml=()=>ls(ORDEN)===1?'<section class="panel orden9" role="note"><b>Hemos ordenado la app</b><ul><li>Tu bio y lo de TikTok están aquí, en «Tu perfil».</li><li>Situaciones, Ganchos, Cuadrícula, Revisor y Lo que no se dice, en Crear › Herramientas.</li><li>Lo que te funciona y Mis números, en Semana. Mis contactos, en Recursos.</li></ul><div class="acts"><button type="button" class="mini" data-act="orden9">Entendido</button></div></section>':"";
function viewHome(){
  const P=ls("ft_perfil")||{},nombre=(P.nombre||"").trim().split(" ")[0],tt=redGet()==="tiktok";
  // Inicio «Hoy te toca»: primera semana (si toca) -> la idea de hoy y los avisos -> resumen de la semana -> tu perfil -> accesos
  let h=ordenHtml()+redSeg()+'<section class="hero2">'+CT.inicioHtml(nombre,tt)+'</section>';
  if(tt)h+=viewHomeTT(nombre,true);
  h+=FX.semanaHtml()+FX.tarjetaHtml()+CT.tarjetaContactos()+instHtml()+bkHtml()+perfilHtml(tt);
  const B=(t,attrs)=>'<button type="button" class="hq" '+attrs+'>'+t+'</button>';
  h+='<section class="hqs" aria-label="Accesos">'+B("Crear algo nuevo",'data-tab="crear"')+B("Semana",'data-tab="semana"')+B("Me han escrito una palabra",'data-tab="recursos"')+B("Mis contactos",'data-tab="contactos"')+B("Situaciones",'data-tab="situaciones"')+B("Cómo se usa",'data-tab="ayuda"')+'<button type="button" class="hq hq-w" data-act="qcir">Qué contestar cuando te dicen…<small>Tres respuestas para cada pega</small></button></section>';
  return h;
}
function viewMas(){
  const L=(id,t,s)=>'<button class="ml" data-tab="'+id+'"><b>'+t+'</b><small>'+s+'</small></button>';
  return '<section class="panel"><h2>Más</h2><p class="lead">La app en sí: cómo se usa, instalarla y tu cuenta.</p><h4 class="mg">Para empezar</h4>'+L("ayuda","Cómo se usa Fam Studio","Tu primera publicación, paso a paso")+'<button type="button" class="ml" data-vis="bienv"><b>Ver el tutorial otra vez</b><small>Las seis pantallas animadas de cuando abriste Fam Studio por primera vez</small></button>'+L("instalar","Instalar en el móvil","Tenerla como una app")+L("guia","Guía del método","Stories, reels, llamada a la acción y plan semanal")
  +'<h4 class="mg">Tu cuenta</h4>'+L("perfil","Mi cuenta","Tu nombre, tu nivel, el vídeo de tu equipo, tus guiones y tu copia de seguridad")
  +'<h4 class="mg">Para el equipo</h4>'+L("admin","Administración","Solo para la administradora del equipo")+'</section>';
}

// ----- INSTALAR -----
const ICO_SHARE='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
const ICO_DOTS='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1.8" fill="currentColor"/><circle cx="12" cy="12" r="1.8" fill="currentColor"/><circle cx="12" cy="19" r="1.8" fill="currentColor"/></svg>';
const ICO_ADD='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';
function viewInstalar(){
  const k=TUT.plat(),p=S.plat||(k.indexOf("ios")===0?"ios":"android");
  if(k==="inst")return '<section class="panel"><h2>Ya la tienes instalada</h2><p class="lead">Estás usando Fam Studio como app. Ábrela siempre desde su icono.</p></section>';
  const st=(n,t,d)=>'<li><span class="num">'+n+'</span><div><b>'+t+'</b><small>'+d+'</small></div></li>';
  const ios='<ol class="isteps">'
   +st(1,"Ábrela en Safari","Si la abriste desde WhatsApp o Instagram, busca en esa pantalla el menú (los tres puntos o el icono de la brújula) y elige abrirla en el navegador, en Safari.")
   +st(2,"Toca el botón de compartir","Es este icono "+ICO_SHARE+", un cuadrado con una flecha hacia arriba. Suele estar abajo, en el centro de la pantalla (en iPad, arriba). Si no lo ves, toca los tres puntos de la barra de abajo y búscalo ahí.")
   +st(3,"Busca «Añadir a pantalla de inicio»","Tiene este icono "+ICO_ADD+". Si no la ves, desliza la lista hacia arriba o abre las opciones adicionales del final de la lista.")
   +st(4,"Toca «Añadir»","Arriba a la derecha. Si te sale un interruptor para abrirla como app, déjalo activado. Ya tienes Fam Studio en tu pantalla, con su icono.")
   +'</ol>';
  const and='<ol class="isteps">'
   +st(1,"Ábrela en Chrome","Si la abriste desde WhatsApp o Instagram, toca los tres puntos y elige abrirla en el navegador (Chrome).")
   +st(2,"Toca los tres puntos","Es este icono "+ICO_DOTS+", arriba a la derecha (en algunos móviles, abajo).")
   +st(3,"Busca «Instalar aplicación» o «Añadir a la pantalla de inicio»","Depende del móvil, sale una de las dos.")
   +st(4,"Confirma","Toca «Instalar» (o «Añadir») cuando te lo pida. Ya tienes Fam Studio en tu pantalla, con su icono.")
   +'</ol>';
  const btn=p==="android"&&TUT.bip()?'<div class="acts"><button type="button" class="btn big" data-ins="go">Instalar Fam Studio</button></div>':"";
  return '<section class="panel"><h2>Instálala en 30 segundos</h2><p class="lead">Así se abre como una app, a pantalla completa y con el icono de Fam Team.'+(k==="pc"?' Fam Studio está pensada para el móvil: ábrela allí con este mismo enlace.':'')+'</p><div class="chips"><button class="chip'+(p==="ios"?" on":"")+'" data-plat="ios">iPhone</button><button class="chip'+(p!=="ios"?" on":"")+'" data-plat="android">Android</button></div>'+btn+'<div class="in-es"><div class="esc-host" data-esc="'+(p==="ios"?"ios":"android")+'"></div></div>'+(p==="ios"?ios:and)+'<p class="note">'+(p==="ios"?'En iPhone la app guarda sus datos aparte de Safari: te pedirá otra vez el código del equipo y, si ya usabas Fam Studio en Safari, haz antes una copia de seguridad en Mi cuenta y recupérala dentro de la app. ':'')+'Después de abrirla una vez con internet, también se abre sin conexión; las fotos de ejemplo que no hayas visto antes no saldrán.</p><div class="acts"><button class="btn" data-act="instok">Ya la tengo instalada</button></div></section>';
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
  return '<div class="okbox"><b>Archivos preparados y descargados.</b><ol><li>Busca en tu carpeta de descargas <code>data.enc</code>, <code>version.json</code>'+(FS.out&&FS.out.prod?' y <code>prod.enc</code>':'')+'.</li><li>En GitHub, dentro de tu repositorio, pulsa <b>Add file → Upload files</b>, arrastra '+(FS.out&&FS.out.prod?'los tres':'los dos')+' y pulsa <b>Commit changes</b>.</li><li>En unos minutos la app pedirá el código del equipo'+(code?' nuevo: <b>'+esc(code)+'</b>':' a quien lo necesite')+'.</li></ol><p class="note">Si la descarga no empezó, toca los botones:</p><div class="acts"><button class="mini" data-act="dl" data-f="data">Descargar data.enc</button><button class="mini" data-act="dl" data-f="ver">Descargar version.json</button>'+(FS.out&&FS.out.prod?'<button class="mini" data-act="dl" data-f="prod">Descargar prod.enc</button>':'')+'</div></div>';
}
// ----- eventos propios -----
document.addEventListener("click",async e=>{
  const t=e.target.closest("button");if(!t)return;const d=t.dataset;
  if(d.plat){S.plat=d.plat;render(true);return}
  switch(d.act){
   case "orden9":ls(ORDEN,0);render(true);break;
   case "instok":ls("fs_inst_ok",1);toast("Perfecto");go("home");break;
   case "adlogin":{const c=$("#ad_code").value;$("#ad_err").textContent="Comprobando…";let ok=false;try{ok=await FS.checkAdmin(c)}catch(err){}if(ok){S.adminOk=true;render()}else $("#ad_err").textContent="Código incorrecto.";break}
   case "adcode":{const c=FS.norm($("#ad_new").value);if(c.length<14){$("#ad_err2").textContent="Pon al menos 14 caracteres.";return}$("#ad_err2").textContent="Preparando…";try{await FS.rekey({team:c});$("#ad_err2").textContent="";$("#ad_out").innerHTML=adminFilesHtml(c)}catch(err){$("#ad_err2").textContent="No se pudo preparar: "+err.message}break}
   case "adadm":{const cur=$("#ad_cur").value,c=FS.norm($("#ad_newadm").value);if(!FS.norm(cur)){$("#ad_err3").textContent="Escribe el código actual del equipo.";return}if(c.length<16){$("#ad_err3").textContent="Pon al menos 16 caracteres.";return}$("#ad_err3").textContent="Preparando…";try{await FS.rekey({current:cur,admin:c});$("#ad_err3").textContent="";$("#ad_out2").innerHTML=adminFilesHtml(null)}catch(err){$("#ad_err3").textContent="No se pudo preparar: "+err.message}break}
   case "dl":FS.download(d.f);break;
  }
});
Object.assign(VIEWS,{home:viewHome,recursos:XT.recursos,negocio:viewNegocio,perfil_ig:viewPerfilIG,numeros:XT.numeros,guia_det:viewGuiaDet,mas:viewMas,instalar:viewInstalar,admin:viewAdmin});
const _bienv=TUT.pendiente(); // antes de pintar: al pintar se crean claves de la primera semana
render();
if(_bienv)TUT.abre();else if(!ls("fs_ini"))ls("fs_ini",Date.now());
try{if(sessionStorage.getItem("fs_bk_ok")){sessionStorage.removeItem("fs_bk_ok");toast("Copia recuperada")}}catch(e){}
