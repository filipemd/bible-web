import{d as z,s as $,c as _,a as D,t as b,u as H,b as I,e as f,f as N,g as u,i as g,S as C,h as x,T as M,F as T}from"./index-LbOBhe_L.js";import{l as F,A as j}from"./logo-DLrN9Sf5.js";const V={};async function E(e,s){if(!V[e]){const t=`/bible-web/${s}/${e}.json`;try{const r=await fetch(t);if(!r.ok)throw new Error(`Erro: ${r.status} ${r.statusText}`);const n=await r.json();V[e]=n}catch(r){return console.error("Erro ao buscar dados da Bíblia:",r),console.log(t),{error:r instanceof Error?r.message:"Erro desconhecido ao buscar dados da Bíblia."}}}return V[e]}async function P(e,s,t,r="static/bible/json"){if(!e||!s||t<=0||!Number.isInteger(t))return{error:"Parâmetros inválidos. Verifique a versão, livro e capítulo."};const n=await E(e,r);if("error"in n)return n;const a=n.find(v=>v.abbrev===s);if(!a)return{error:"Livro não encontrado."};if(t>a.chapters.length)return{error:"Capítulo não encontrado."};const i=a.chapters[t-1]||[];return{book:a.name,verses:i}}async function Z(e,s,t="static/bible/json"){const r=await E(e,t);if("error"in r)return 0;const n=r.find(a=>a.abbrev.toLowerCase()===s.toLowerCase()||a.name.toLowerCase()===s.toLowerCase());return n?n.chapters.length:0}async function A(e,s="static/bible/json"){const t=await E(e,s);return"error"in t?t:t.map(n=>({abbrev:n.abbrev,name:n.name}))}const R="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.5%2016.5L19.5%204.5L18.75%203.75H9L8.25%204.5L8.25%207.5L5.25%207.5L4.5%208.25V20.25L5.25%2021H15L15.75%2020.25V17.25H18.75L19.5%2016.5ZM15.75%2015.75L15.75%208.25L15%207.5L9.75%207.5V5.25L18%205.25V15.75H15.75ZM6%209L14.25%209L14.25%2019.5L6%2019.5L6%209Z'%20fill='gray'/%3e%3c/svg%3e",q="_copy_icon_g6dcx_1",U={copy_icon:q};var G=b('<img alt="Copy icon">');const J=e=>{function s(){navigator.clipboard.writeText(e.text)}return(()=>{var t=G();return t.$$click=s,t.addEventListener("dragstart",r=>r.preventDefault()),$(t,"src",R),_(()=>D(t,U.copy_icon)),t})()};z(["click"]);const K="_verseNumber_1w6gc_1",O="_selector_1w6gc_1",Q="_version_1w6gc_1",W="_center_1w6gc_1",X="_content_1w6gc_1",y={verseNumber:K,selector:O,version:Q,center:W,content:X};var Y=b("<p class=verse>"),p=b("<h1>"),ee=b("<div>"),te=b("<p>No verses found."),re=b('<div><div><img width=50px alt="Bible Logo"><br></div><div><select name=book></select><input type=number name=chapter min=1>'),ne=b("<option>"),oe=b("<button>Next Chapter."),ae=b("<div><main><article>"),se=b("<em>Loading..."),ce=b("<button>Read full chapter.");const S=e=>{const s=e.url?`${e.url}${e.number}`:`#${e.number}`;return(()=>{var t=Y();return g(t,u(j,{get class(){return y.verseNumber},href:s,onClick:()=>e.onClick?.(e.number),get children(){return e.number}}),null),g(t,()=>"    "+e.text+"    ",null),g(t,u(J,{get text(){return e.text}}),null),t})()},ie=e=>{const[s,t]=f();N(()=>{(async()=>{const n=await P(e.version,e.book,e.chapter);"error"in n?console.log("Erro em getBibleVerses():",n.error):t(n)})()});const r=[x(()=>s()?.book)," ",x(()=>e.chapter),x(()=>e.verse?`:${e.verse}`:"")," ",x(()=>e.version.toUpperCase())];return(()=>{var n=ee();return g(n,u(C,{get when(){return s()},get children(){return[u(M,{children:r}),(()=>{var a=p();return g(a,r),a})(),u(C,{get when(){return e.verse>0},get children(){return u(S,{get text(){return s().verses[e.verse-1]||"Verse not found."},get number(){return e.verse}})}}),u(C,{get when(){return e.verse===0},get children(){return u(T,{get each(){return s().verses},get fallback(){return te()},children:(a,i)=>u(S,{get number(){return i()+1},text:a,get url(){return`/bible-web/${e.version}/${e.book}/${e.chapter}/`},get onClick(){return e.onVerseClick}})})}})]}})),_(()=>$(n,"id",y.chapter)),n})()},le=e=>{const[s,t]=f([]),[r,n]=f(0);return N(()=>{(async()=>{const i=await A(e.version);if("error"in i)console.error("Error in getAllBooks():",i.error);else{t(i);const v=i.findIndex(k=>k.abbrev===e.book);n(v>=0?v:0)}})()}),(()=>{var a=re(),i=a.firstChild,v=i.firstChild;v.nextSibling;var k=i.nextSibling,h=k.firstChild,L=h.nextSibling;return $(v,"src",F),g(i,u(j,{get href(){return`/bible-web/${e.version}/${r()}/${e.chapter}/${e.verse+"/"||""}select_version`},children:"Change version."}),null),h.addEventListener("change",o=>{const l=o.currentTarget.value;e.onchange(l)}),g(h,u(T,{get each(){return s()},children:o=>(()=>{var l=ne();return g(l,()=>o.name),_(()=>l.selected=e.book===o.abbrev),_(()=>l.value=o.abbrev),l})()})),L.addEventListener("change",o=>{const l=Number(o.currentTarget.value);!isNaN(l)&&l>=1&&l<=e.bookSize?e.onchange(void 0,l):o.currentTarget.value=e.chapter.toString()}),_(o=>{var l=y.selector,B=y.version,c=y.center,d=e.disabled,w=e.bookSize,m=e.disabled;return l!==o.e&&$(a,"id",o.e=l),B!==o.t&&$(i,"id",o.t=B),c!==o.a&&$(k,"id",o.a=c),d!==o.o&&(h.disabled=o.o=d),w!==o.i&&$(L,"max",o.i=w),m!==o.n&&(L.disabled=o.n=m),o},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0}),_(()=>h.value=e.book),_(()=>L.value=e.chapter),a})()},be=()=>{const e=H(),s=I(),[t]=f(e.version||"en_kjv"),[r,n]=f(e.book||"gn"),[a,i]=f(Number(e.chapter)||1),[v,k]=f(Number(e.verse)||0),[h,L]=f(0),[o,l]=f(!0);N(async()=>{l(!0);try{const c=Number(r());if(!isNaN(c)){const w=await A(t());"error"in w||n(w[c]?.abbrev||r())}const d=await Z(t(),r());L(d),d||console.error("Failed to fetch book size.")}catch(c){console.error("Error:",c)}finally{l(!1)}}),N(()=>{s(`/bible-web/${t()}/${r()}/${a()}/${v()||""}`)});function B(c,d){c&&n(c),i(d||1)}return u(C,{get when(){return!o()},get fallback(){return(()=>{var c=se();return c.style.setProperty("color","gray"),c})()},get children(){return[u(le,{get version(){return t()},get book(){return r()},get bookSize(){return h()},get chapter(){return a()},get verse(){return v()},onchange:B,get disabled(){return v()!==0}}),(()=>{var c=ae(),d=c.firstChild,w=d.firstChild;return g(w,u(ie,{get version(){return t()},get book(){return r()},get chapter(){return a()},get verse(){return v()},onVerseClick:k})),g(c,u(C,{get when(){return x(()=>typeof h()=="number"&&a()<h())()&&v()===0},get fallback(){return(()=>{var m=ce();return m.$$click=()=>k(0),m})()},get children(){var m=oe();return m.$$click=()=>i(a()+1),m}}),null),_(()=>$(c,"id",y.content)),c})()]}})};z(["click"]);export{be as default};