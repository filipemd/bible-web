import{d as N,c as g,a as $,s as f,b as V,t as b,e as L,f as B,g as l,T as U,i as h,S as x,F,o as Y,h as Z,u as q,j as K,k as W}from"./index-B8plS7ys.js";import{A as J,l as Q}from"./logo-BT1jLtMN.js";const y=new Map;async function E(e,o){if(y.has(e))return y.get(e);const n=`/bible-web/${o}/${e}.json`;try{const r=await fetch(n);if(!r.ok)throw new Error(`Erro: ${r.status} ${r.statusText}`);const t=await r.json();return y.set(e,t),t}catch(r){return console.error("Erro ao buscar dados da Bíblia:",r),console.log(n),{error:r instanceof Error?r.message:"Erro desconhecido ao buscar dados da Bíblia."}}}async function X(e,o,n,r="static/bible/json"){if(!e||!o||n<=0||!Number.isInteger(n))return{error:"Parâmetros inválidos. Verifique a versão, livro e capítulo."};const t=await E(e,r);if("error"in t)return t;const a=t.find(u=>u.abbrev===o);return a?n>a.chapters.length?{error:`Capítulo ${n} não encontrado.`}:{book:a.name,verses:a.chapters[n-1]||[]}:{error:"Livro não encontrado."}}async function p(e,o,n="static/bible/json"){const r=await E(e,n);if("error"in r)return 0;const t=r.find(a=>a.abbrev.toLowerCase()===o.toLowerCase()||a.name.toLowerCase()===o.toLowerCase());return t?t.chapters.length:0}async function H(e,o="static/bible/json"){const n=await E(e,o);return"error"in n?n:n.map(({abbrev:r,name:t})=>({abbrev:r,name:t}))}let A;function ee(e,o,n){A={version:e,book:o,chapter:n}}function te(){const e=localStorage.getItem("lastChapterRead");return e?JSON.parse(e):{version:null,book:null,chapter:null}}window.addEventListener("beforeunload",()=>localStorage.setItem("lastChapterRead",JSON.stringify(A)));function M(e,o,n){return`${e}-${o}-${n}`}function re(e,o,n){const r=M(e,o,n),t=JSON.parse(localStorage.getItem("markedVerses")||"{}");t[r]=!0,localStorage.setItem("markedVerses",JSON.stringify(t))}function ne(e,o,n){const r=M(e,o,n),t=JSON.parse(localStorage.getItem("markedVerses")||"{}");t[r]?(delete t[r],localStorage.setItem("markedVerses",JSON.stringify(t))):console.error("Verse is not marked.")}function oe(e,o,n){const r=M(e,o,n);return!!JSON.parse(localStorage.getItem("markedVerses")||"{}")[r]}const ae="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.5%2016.5L19.5%204.5L18.75%203.75H9L8.25%204.5L8.25%207.5L5.25%207.5L4.5%208.25V20.25L5.25%2021H15L15.75%2020.25V17.25H18.75L19.5%2016.5ZM15.75%2015.75L15.75%208.25L15%207.5L9.75%207.5V5.25L18%205.25V15.75H15.75ZM6%209L14.25%209L14.25%2019.5L6%2019.5L6%209Z'%20fill='gray'/%3e%3c/svg%3e",se="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20fill='%23000000'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='800px'%20height='800px'%20viewBox='0%200%20335.765%20335.765'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpolygon%20points='311.757,41.803%20107.573,245.96%2023.986,162.364%200,186.393%20107.573,293.962%20335.765,65.795%20'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e",ce="_icon_pi8nl_1",P={icon:ce};var ie=b('<img alt="Copy icon">');const le=e=>{const[o,n]=g(!1);function r(){navigator.clipboard.writeText(e.text).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})}return(()=>{var t=ie();return t.$$click=r,t.addEventListener("dragstart",a=>a.preventDefault()),$(a=>{var u=o()?se:ae,k=P.icon;return u!==a.e&&f(t,"src",a.e=u),k!==a.t&&V(t,a.t=k),a},{e:void 0,t:void 0}),t})()};N(["click"]);const de="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='gray'%20height='800px'%20width='800px'%20version='1.1'%20id='Icons'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%2032%2032'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M17.6,6L6.9,16.7c-0.2,0.2-0.3,0.4-0.3,0.6L6,23.9c0,0.3,0.1,0.6,0.3,0.8C6.5,24.9,6.7,25,7,25c0,0,0.1,0,0.1,0l6.6-0.6%20c0.2,0,0.5-0.1,0.6-0.3L25,13.4L17.6,6z'/%3e%3cpath%20d='M26.4,12l1.4-1.4c1.2-1.2,1.1-3.1-0.1-4.3l-3-3c-0.6-0.6-1.3-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9L19,4.6L26.4,12z'/%3e%3c/g%3e%3cg%3e%3cpath%20d='M28,29H4c-0.6,0-1-0.4-1-1s0.4-1,1-1h24c0.6,0,1,0.4,1,1S28.6,29,28,29z'/%3e%3c/g%3e%3c/svg%3e",ue="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.99486%207.00636C6.60433%207.39689%206.60433%208.03005%206.99486%208.42058L10.58%2012.0057L6.99486%2015.5909C6.60433%2015.9814%206.60433%2016.6146%206.99486%2017.0051C7.38538%2017.3956%208.01855%2017.3956%208.40907%2017.0051L11.9942%2013.4199L15.5794%2017.0051C15.9699%2017.3956%2016.6031%2017.3956%2016.9936%2017.0051C17.3841%2016.6146%2017.3841%2015.9814%2016.9936%2015.5909L13.4084%2012.0057L16.9936%208.42059C17.3841%208.03007%2017.3841%207.3969%2016.9936%207.00638C16.603%206.61585%2015.9699%206.61585%2015.5794%207.00638L11.9942%2010.5915L8.40907%207.00636C8.01855%206.61584%207.38538%206.61584%206.99486%207.00636Z'%20fill='%230F0F0F'/%3e%3c/svg%3e";var ve=b('<img alt="Marker icon">');const ge=e=>{function o(){e.marked?ne(e.book,e.chapter,e.verse):re(e.book,e.chapter,e.verse)}return(()=>{var n=ve();return n.$$click=()=>{o(),e.onClick()},n.addEventListener("dragstart",r=>r.preventDefault()),$(r=>{var t=e.marked?ue:de,a=P.icon;return t!==r.e&&f(n,"src",r.e=t),a!==r.t&&V(n,r.t=a),r},{e:void 0,t:void 0}),n})()};N(["click"]);const he="_verseNumber_xss4u_1",be="_marked_xss4u_11",O={verseNumber:he,marked:be};var me=b("<p><span>"),ke=b("<h1>"),we=b("<p>Nenhum verso encontrado.");const j=e=>{const o=B(()=>e.url?`${e.url}${e.verse}`:`#${e.verse}`),[n,r]=g(oe(e.book,e.chapter,e.verse));return(()=>{var t=me(),a=t.firstChild;return h(a,l(J,{get class(){return O.verseNumber},get href(){return o()},onClick:()=>e.onClick?.(e.verse),get children(){return e.verse}}),null),h(a,()=>"    "+e.text+"    ",null),h(t,l(le,{get text(){return e.text}}),null),h(t,l(ge,{get book(){return e.book},get chapter(){return e.chapter},get verse(){return e.verse},get marked(){return n()},onClick:()=>r(!n())}),null),$(()=>V(a,n()?O.marked:"")),t})()},fe=e=>{const[o,n]=g();L(()=>{(async()=>{const t=await X(e.version,e.book,e.chapter);"error"in t?(console.error(`Erro em getBibleVerses(${e.version}, ${e.book}, ${e.chapter}):`,t.error),console.log(t)):n(t)})()},[e.version,e.book,e.chapter]);const r=B(()=>`${o()?.book} ${e.chapter}${e.verse?`:${e.verse}`:""} ${e.version.toUpperCase()}`);return l(x,{get when(){return o()},get children(){return[l(U,{get children(){return r()}}),(()=>{var t=ke();return h(t,r),t})(),l(x,{get when(){return e.verse>0},get children(){return l(j,{get book(){return e.book},get chapter(){return e.chapter},get verse(){return e.verse},get text(){return o().verses[e.verse-1]||"Verse not found."},get url(){return`/bible-web/${e.version}/${e.book}/${e.chapter}/`},get onClick(){return e.onVerseClick}})}}),l(x,{get when(){return e.verse===0},get children(){return l(F,{get each(){return o().verses},get fallback(){return we()},children:(t,a)=>l(j,{get book(){return e.book},get chapter(){return e.chapter},get verse(){return a()+1},text:t,get url(){return`/bible-web/${e.version}/${e.book}/${e.chapter}/`},get onClick(){return e.onVerseClick}})})}})]}})},$e="_selector_1sxb2_1",xe="_version_1sxb2_1",Le="_center_1sxb2_1",Ce="_content_1sxb2_1",S={selector:$e,version:xe,center:Le,content:Ce};var _e=b('<div><div><img width=50px alt="Bible Logo"><br></div><div><select name=book></select><input type=number name=chapter min=1>'),Se=b("<option>");const Ve=e=>{const[o,n]=g([]),[r,t]=g(0);L(()=>{(async()=>{const v=await H(e.version);"error"in v?console.error("Error in getAllBooks():",v.error):n(v)})()},[e.version]),L(()=>{const d=o().findIndex(v=>v.abbrev===e.book);t(d>=0?d:0)},[e.book,o]);const[a,u]=g(!1);let k=window.scrollY;const m=()=>{const d=window.scrollY;u(d>k&&d>100),k=d};return Y(()=>{window.addEventListener("scroll",m)}),Z(()=>{window.removeEventListener("scroll",m)}),(()=>{var d=_e(),v=d.firstChild,C=v.firstChild;C.nextSibling;var _=v.nextSibling,s=_.firstChild,w=s.nextSibling;return f(C,"src",Q),h(v,l(J,{get href(){return`/bible-web/${e.version}/${r()}/${e.chapter}/${e.verse||""}select_version`},children:"Change version."}),null),s.addEventListener("change",c=>e.onchange(c.currentTarget.value)),h(s,l(F,{get each(){return o()},children:c=>(()=>{var i=Se();return h(i,()=>c.name),$(()=>i.value=c.abbrev),i})()})),w.addEventListener("change",c=>{const i=Number(c.currentTarget.value);!isNaN(i)&&i>=1&&i<=e.bookSize?e.onchange(void 0,i):c.currentTarget.value=e.chapter.toString()}),$(c=>{var i=S.selector,T=a()?"hidden":"shown",I=S.version,G=S.center,R=e.disabled,z=e.bookSize,D=e.disabled;return i!==c.e&&f(d,"id",c.e=i),T!==c.t&&V(d,c.t=T),I!==c.a&&f(v,"id",c.a=I),G!==c.o&&f(_,"id",c.o=G),R!==c.i&&(s.disabled=c.i=R),z!==c.n&&f(w,"max",c.n=z),D!==c.s&&(w.disabled=c.s=D),c},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),$(()=>s.value=e.book),$(()=>w.value=e.chapter),d})()};var ye=b("<button>Next chapter."),Ne=b("<button>Full chapter."),Be=b("<div><main><article>"),Ee=b("<em>Loading...");const Ie=()=>{const e=q(),o=K(),n=te(),[r]=g(e.version||n.version||"en_kjv"),[t,a]=g(isNaN(Number(e.book))?e.book||n.book||"gn":""),[u,k]=g(Number(e.chapter)||n.chapter||1),[m,d]=g(Number(e.verse)||0),[v,C]=g(0);L(async()=>{try{if(t()===""){const s=await H(r());"error"in s||a(s[Number(e.book)]?.abbrev)}else{const s=await p(r(),t());C(s),s||console.error("Falha ao buscar o tamanho do livro.")}}catch(s){console.error("Erro:",s)}},[r,t]),L(()=>{t()!==""&&(o(`/bible-web/${r()}/${t()}/${u()}/${m()||""}`),ee(r(),t(),u()))},[r,t,u,m]);function _(s,w){W(()=>{w&&k(w),s&&(a(s),k(1))})}return l(x,{get when(){return t()!==""},get fallback(){return(()=>{var s=Ee();return s.style.setProperty("color","gray"),s})()},get children(){return[l(Ve,{get version(){return r()},get book(){return t()},get bookSize(){return v()},get chapter(){return u()},get verse(){return m()},onchange:_,get disabled(){return m()!==0}}),(()=>{var s=Be(),w=s.firstChild,c=w.firstChild;return h(c,l(fe,{get version(){return r()},get book(){return t()},get chapter(){return u()},get verse(){return m()},onVerseClick:d})),h(s,l(x,{get when(){return B(()=>u()<v())()&&m()===0},get children(){var i=ye();return i.$$click=()=>k(u()+1),i}}),null),h(s,l(x,{get when(){return m()!==0},get children(){var i=Ne();return i.$$click=()=>d(0),i}}),null),$(()=>f(s,"id",S.content)),s})()]}})};N(["click"]);export{Ie as default};