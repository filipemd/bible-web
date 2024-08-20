const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Bible-DvmHJoWt.js","assets/logo-D7eYx9__.js","assets/Bible-kEo-KUk5.css","assets/VersionSelector-DEiugjmo.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const yt="modulepreload",wt=function(e){return"/bible-web/"+e},De={},Ye=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.all(n.map(i=>{if(i=wt(i),i in De)return;De[i]=!0;const c=i.endsWith(".css"),a=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${a}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":yt,c||(f.as="script",f.crossOrigin=""),f.href=i,l&&f.setAttribute("nonce",l),document.head.appendChild(f),c)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return s.then(()=>t()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})},p={context:void 0,registry:void 0,done:!1,getContextId(){return Ue(this.context.count)},getNextContextId(){return Ue(this.context.count++)}};function Ue(e){const t=String(e),n=t.length-1;return p.context.id+(n?String.fromCharCode(96+n):"")+t}function K(e){p.context=e}function bt(){return{...p.context,id:p.getNextContextId(),count:0}}const vt=(e,t)=>e===t,oe=Symbol("solid-proxy"),At=Symbol("solid-track"),ie={equals:vt};let Qe=rt;const F=1,le=2,Ze={owned:null,cleanups:null,context:null,owner:null},ye={};var b=null;let we=null,xt=null,v=null,T=null,U=null,ue=0;function Y(e,t){const n=v,r=b,s=e.length===0,o=t===void 0?r:t,l=s?Ze:{owned:null,cleanups:null,context:o?o.context:null,owner:o},i=s?e:()=>e(()=>k(()=>me(l)));b=l,v=null;try{return _(i,!0)}finally{v=n,b=r}}function $(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),nt(n,s));return[tt.bind(n),r]}function Me(e,t,n){const r=he(e,t,!0,F);X(r)}function M(e,t,n){const r=he(e,t,!1,F);X(r)}function Kn(e,t,n){Qe=Rt;const r=he(e,t,!1,F);r.user=!0,U?U.push(r):X(r)}function N(e,t,n){n=n?Object.assign({},ie,n):ie;const r=he(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,X(r),tt.bind(r)}function Pt(e){return e&&typeof e=="object"&&"then"in e}function Et(e,t,n){let r,s,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=e,o={}):(r=e,s=t,o={});let l=null,i=ye,c=null,a=!1,f="initialValue"in o,u=typeof r=="function"&&N(r);const h=new Set,[m,x]=(o.storage||$)(o.initialValue),[d,g]=$(void 0),[w,y]=$(void 0,{equals:!1}),[R,E]=$(f?"ready":"unresolved");p.context&&(c=p.getNextContextId(),o.ssrLoadFrom==="initial"?i=o.initialValue:p.load&&p.has(c)&&(i=p.load(c)));function S(C,L,O,B){return l===C&&(l=null,B!==void 0&&(f=!0),(C===i||L===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(B,{value:L})),i=ye,D(L,O)),L}function D(C,L){_(()=>{L===void 0&&x(()=>C),E(L!==void 0?"errored":f?"ready":"unresolved"),g(L);for(const O of h.keys())O.decrement();h.clear()},!1)}function G(){const C=Lt,L=m(),O=d();if(O!==void 0&&!l)throw O;return v&&!v.user&&C&&Me(()=>{w(),l&&(C.resolved||h.has(C)||(C.increment(),h.add(C)))}),L}function V(C=!0){if(C!==!1&&a)return;a=!1;const L=u?u():r;if(L==null||L===!1){S(l,k(m));return}const O=i!==ye?i:k(()=>s(L,{value:m(),refetching:C}));return Pt(O)?(l=O,"value"in O?(O.status==="success"?S(l,O.value,void 0,L):S(l,void 0,Pe(O.value),L),O):(a=!0,queueMicrotask(()=>a=!1),_(()=>{E(f?"refreshing":"pending"),y()},!1),O.then(B=>S(O,B,void 0,L),B=>S(O,void 0,Pe(B),L)))):(S(l,O,void 0,L),O)}return Object.defineProperties(G,{state:{get:()=>R()},error:{get:()=>d()},loading:{get(){const C=R();return C==="pending"||C==="refreshing"}},latest:{get(){if(!f)return G();const C=d();if(C&&!l)throw C;return m()}}}),u?Me(()=>V(!1)):V(!1),[G,{refetch:V,mutate:x}]}function St(e){return _(e,!1)}function k(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function Ne(e,t,n){const r=Array.isArray(e);let s,o=n&&n.defer;return l=>{let i;if(r){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o)return o=!1,l;const c=k(()=>t(i,s,l));return s=i,c}}function fe(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ze(){return b}function et(e,t){const n=b,r=v;b=e,v=null;try{return _(t,!0)}catch(s){ke(s)}finally{b=n,v=r}}function Ct(e){const t=v,n=b;return Promise.resolve().then(()=>{v=t,b=n;let r;return _(e,!1),v=b=null,r?r.done:void 0})}function Re(e,t){const n=Symbol("context");return{id:n,Provider:Tt(n),defaultValue:e}}function de(e){let t;return b&&b.context&&(t=b.context[e.id])!==void 0?t:e.defaultValue}function Te(e){const t=N(e),n=N(()=>Ee(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Lt;function tt(){if(this.sources&&this.state)if(this.state===F)X(this);else{const e=T;T=null,_(()=>ae(this),!1),T=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function nt(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&_(()=>{for(let s=0;s<e.observers.length;s+=1){const o=e.observers[s],l=we&&we.running;l&&we.disposed.has(o),(l?!o.tState:!o.state)&&(o.pure?T.push(o):U.push(o),o.observers&&st(o)),l||(o.state=F)}if(T.length>1e6)throw T=[],new Error},!1)),t}function X(e){if(!e.fn)return;me(e);const t=ue;Ot(e,e.value,t)}function Ot(e,t,n){let r;const s=b,o=v;v=b=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=F,e.owned&&e.owned.forEach(me),e.owned=null),e.updatedAt=n+1,ke(l)}finally{v=o,b=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?nt(e,r):e.value=r,e.updatedAt=n)}function he(e,t,n,r=F,s){const o={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==Ze&&(b.owned?b.owned.push(o):b.owned=[o]),o}function ce(e){if(e.state===0)return;if(e.state===le)return ae(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ue);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===F)X(e);else if(e.state===le){const r=T;T=null,_(()=>ae(e,t[0]),!1),T=r}}function _(e,t){if(T)return e();let n=!1;t||(T=[]),U?n=!0:U=[],ue++;try{const r=e();return Nt(n),r}catch(r){n||(U=null),T=null,ke(r)}}function Nt(e){if(T&&(rt(T),T=null),e)return;const t=U;U=null,t.length&&_(()=>Qe(t),!1)}function rt(e){for(let t=0;t<e.length;t++)ce(e[t])}function Rt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ce(r)}if(p.context){if(p.count){p.effects||(p.effects=[]),p.effects.push(...e.slice(0,n));return}else p.effects&&(e=[...p.effects,...e],n+=p.effects.length,delete p.effects);K()}for(t=0;t<n;t++)ce(e[t])}function ae(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===F?r!==t&&(!r.updatedAt||r.updatedAt<ue)&&ce(r):s===le&&ae(r,t)}}}function st(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=le,n.pure?T.push(n):U.push(n),n.observers&&st(n))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const o=s.pop(),l=n.observerSlots.pop();r<s.length&&(o.sourceSlots[l]=r,s[r]=o,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Pe(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function ke(e,t=b){throw Pe(e)}function Ee(e){if(typeof e=="function"&&!e.length)return Ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Ee(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Tt(e,t){return function(r){let s;return M(()=>s=k(()=>(b.context={...b.context,[e]:r.value},Te(()=>r.children))),void 0),s}}const kt=Symbol("fallback");function Fe(e){for(let t=0;t<e.length;t++)e[t]()}function jt(e,t,n={}){let r=[],s=[],o=[],l=0,i=t.length>1?[]:null;return fe(()=>Fe(o)),()=>{let c=e()||[],a=c.length,f,u;return c[At],k(()=>{let m,x,d,g,w,y,R,E,S;if(a===0)l!==0&&(Fe(o),o=[],r=[],s=[],l=0,i&&(i=[])),n.fallback&&(r=[kt],s[0]=Y(D=>(o[0]=D,n.fallback())),l=1);else if(l===0){for(s=new Array(a),u=0;u<a;u++)r[u]=c[u],s[u]=Y(h);l=a}else{for(d=new Array(a),g=new Array(a),i&&(w=new Array(a)),y=0,R=Math.min(l,a);y<R&&r[y]===c[y];y++);for(R=l-1,E=a-1;R>=y&&E>=y&&r[R]===c[E];R--,E--)d[E]=s[R],g[E]=o[R],i&&(w[E]=i[R]);for(m=new Map,x=new Array(E+1),u=E;u>=y;u--)S=c[u],f=m.get(S),x[u]=f===void 0?-1:f,m.set(S,u);for(f=y;f<=R;f++)S=r[f],u=m.get(S),u!==void 0&&u!==-1?(d[u]=s[f],g[u]=o[f],i&&(w[u]=i[f]),u=x[u],m.set(S,u)):o[f]();for(u=y;u<a;u++)u in d?(s[u]=d[u],o[u]=g[u],i&&(i[u]=w[u],i[u](u))):s[u]=Y(h);s=s.slice(0,l=a),r=c.slice(0)}return s});function h(m){if(o[u]=m,i){const[x,d]=$(u);return i[u]=d,t(c[u],x)}return t(c[u])}}}let It=!1;function j(e,t){if(It&&p.context){const n=p.context;K(bt());const r=k(()=>e(t||{}));return K(n),r}return k(()=>e(t||{}))}function re(){return!0}const Se={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:re,deleteProperty:re,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:re,deleteProperty:re}},ownKeys(e){return e.keys()}};function be(e){return(e=typeof e=="function"?e():e)?e:{}}function $t(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function _t(...e){let t=!1;for(let l=0;l<e.length;l++){const i=e[l];t=t||!!i&&oe in i,e[l]=typeof i=="function"?(t=!0,N(i)):i}if(t)return new Proxy({get(l){for(let i=e.length-1;i>=0;i--){const c=be(e[i])[l];if(c!==void 0)return c}},has(l){for(let i=e.length-1;i>=0;i--)if(l in be(e[i]))return!0;return!1},keys(){const l=[];for(let i=0;i<e.length;i++)l.push(...Object.keys(be(e[i])));return[...new Set(l)]}},Se);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const i=e[l];if(!i)continue;const c=Object.getOwnPropertyNames(i);for(let a=c.length-1;a>=0;a--){const f=c[a];if(f==="__proto__"||f==="constructor")continue;const u=Object.getOwnPropertyDescriptor(i,f);if(!r[f])r[f]=u.get?{enumerable:!0,configurable:!0,get:$t.bind(n[f]=[u.get.bind(i)])}:u.value!==void 0?u:void 0;else{const h=n[f];h&&(u.get?h.push(u.get.bind(i)):u.value!==void 0&&h.push(()=>u.value))}}}const s={},o=Object.keys(r);for(let l=o.length-1;l>=0;l--){const i=o[l],c=r[i];c&&c.get?Object.defineProperty(s,i,c):s[i]=c?c.value:void 0}return s}function Vn(e,...t){if(oe in e){const s=new Set(t.length>1?t.flat():t[0]),o=t.map(l=>new Proxy({get(i){return l.includes(i)?e[i]:void 0},has(i){return l.includes(i)&&i in e},keys(){return l.filter(i=>i in e)}},Se));return o.push(new Proxy({get(l){return s.has(l)?void 0:e[l]},has(l){return s.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!s.has(l))}},Se)),o}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const o=Object.getOwnPropertyDescriptor(e,s),l=!o.get&&!o.set&&o.enumerable&&o.writable&&o.configurable;let i=!1,c=0;for(const a of t)a.includes(s)&&(i=!0,l?r[c][s]=o.value:Object.defineProperty(r[c],s,o)),++c;i||(l?n[s]=o.value:Object.defineProperty(n,s,o))}return[...r,n]}function ot(e){let t,n;const r=s=>{const o=p.context;if(o){const[i,c]=$();p.count||(p.count=0),p.count++,(n||(n=e())).then(a=>{!p.done&&K(o),p.count--,c(()=>a.default),K()}),t=i}else if(!t){const[i]=Et(()=>(n||(n=e())).then(c=>c.default));t=i}let l;return N(()=>(l=t())?k(()=>{if(!o||p.done)return l(s);const i=p.context;K(o);const c=l(s);return K(i),c}):"")};return r.preload=()=>n||((n=e()).then(s=>t=()=>s.default),n),r}let Dt=0;function Ut(){return p.context?p.getNextContextId():`cl-${Dt++}`}const Mt=e=>`Stale read from <${e}>.`;function Hn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return N(jt(()=>e.each,e.children,t||void 0))}function it(e){const t=e.keyed,n=N(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return N(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?k(()=>s(t?r:()=>{if(!k(n))throw Mt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const Ft=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Bt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ft]),qt=new Set(["innerHTML","textContent","innerText","children"]),Kt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Vt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Ht(e,t){const n=Vt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const Wt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Xt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Gt(e,t,n){let r=n.length,s=t.length,o=r,l=0,i=0,c=t[s-1].nextSibling,a=null;for(;l<s||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[s-1]===n[o-1];)s--,o--;if(s===l){const f=o<r?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],f)}else if(o===i)for(;l<s;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],f),t[s]=n[o]}else{if(!a){a=new Map;let u=i;for(;u<o;)a.set(n[u],u++)}const f=a.get(t[l]);if(f!=null)if(i<f&&f<o){let u=l,h=1,m;for(;++u<s&&u<o&&!((m=a.get(t[u]))==null||m!==f+h);)h++;if(h>f-i){const x=t[l];for(;i<f;)e.insertBefore(n[i++],x)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const Be="_$DX_DELEGATE";function Jt(e,t,n,r={}){let s;return Y(o=>{s=o,t===document?e():nn(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function Wn(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},o=()=>(r||(r=s())).cloneNode(!0);return o.cloneNode=o,o}function lt(e,t=window.document){const n=t[Be]||(t[Be]=new Set);for(let r=0,s=e.length;r<s;r++){const o=e[r];n.has(o)||(n.add(o),t.addEventListener(o,on))}}function Ce(e,t,n){z(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Yt(e,t,n,r){z(e)||(r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r))}function Qt(e,t){z(e)||(t==null?e.removeAttribute("class"):e.className=t)}function Zt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=o=>s.call(e,n[1],o))}else e.addEventListener(t,n)}function zt(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let o,l;for(o=0,l=s.length;o<l;o++){const i=s[o];!i||i==="undefined"||t[i]||(Ke(e,i,!1),delete n[i])}for(o=0,l=r.length;o<l;o++){const i=r[o],c=!!t[i];!i||i==="undefined"||n[i]===c||!c||(Ke(e,i,!0),n[i]=c)}return n}function en(e,t,n){if(!t)return n?Ce(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,o;for(o in n)t[o]==null&&r.removeProperty(o),delete n[o];for(o in t)s=t[o],s!==n[o]&&(r.setProperty(o,s),n[o]=s);return n}function qe(e,t={},n,r){const s={};return r||M(()=>s.children=Z(e,t.children,s.children)),M(()=>typeof t.ref=="function"&&tn(t.ref,e)),M(()=>rn(e,t,n,!0,s,!0)),s}function tn(e,t,n){return k(()=>e(t,n))}function nn(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Z(e,t,r,n);M(s=>Z(e,t(),s,n),r)}function rn(e,t,n,r,s={},o=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Ve(e,l,null,s[l],n,o)}for(const l in t){if(l==="children")continue;const i=t[l];s[l]=Ve(e,l,i,s[l],n,o)}}function z(e){return!!p.context&&!p.done&&(!e||e.isConnected)}function sn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ke(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,o=r.length;s<o;s++)e.classList.toggle(r[s],n)}function Ve(e,t,n,r,s,o){let l,i,c,a,f;if(t==="style")return en(e,n,r);if(t==="classList")return zt(e,n,r);if(n===r)return r;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),h=Wt.has(u);if(!h&&r){const m=Array.isArray(r)?r[0]:r;e.removeEventListener(u,m)}(h||n)&&(Zt(e,u,n,h),h&&lt([u]))}else if(t.slice(0,5)==="attr:")Ce(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(c=qt.has(t))||!s&&((a=Ht(t,e.tagName))||(i=Bt.has(t)))||(l=e.nodeName.includes("-"))){if(f)t=t.slice(5),i=!0;else if(z(e))return n;t==="class"||t==="className"?Qt(e,n):l&&!i&&!c?e[sn(t)]=n:e[a||t]=n}else{const u=s&&t.indexOf(":")>-1&&Xt[t.split(":")[0]];u?Yt(e,u,t,n):Ce(e,Kt[t]||t,n)}return n}function on(e){if(p.registry&&p.events&&p.events.find(([r,s])=>s===e))return;const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),p.registry&&!p.done&&(p.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Z(e,t,n,r,s){const o=z(e);if(o){!n&&(n=[...e.childNodes]);let c=[];for(let a=0;a<n.length;a++){const f=n[a];f.nodeType===8&&f.data.slice(0,2)==="!$"?f.remove():c.push(f)}n=c}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,i=r!==void 0;if(e=i&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(o||l==="number"&&(t=t.toString(),t===n))return n;if(i){let c=n[0];c&&c.nodeType===3?c.data!==t&&(c.data=t):c=document.createTextNode(t),n=W(e,n,r,c)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(o)return n;n=W(e,n,r)}else{if(l==="function")return M(()=>{let c=t();for(;typeof c=="function";)c=c();n=Z(e,c,n,r)}),()=>n;if(Array.isArray(t)){const c=[],a=n&&Array.isArray(n);if(Le(c,t,n,s))return M(()=>n=Z(e,c,n,r,!0)),()=>n;if(o){if(!c.length)return n;if(r===void 0)return n=[...e.childNodes];let f=c[0];if(f.parentNode!==e)return n;const u=[f];for(;(f=f.nextSibling)!==r;)u.push(f);return n=u}if(c.length===0){if(n=W(e,n,r),i)return n}else a?n.length===0?He(e,c,r):Gt(e,n,c):(n&&W(e),He(e,c));n=c}else if(t.nodeType){if(o&&t.parentNode)return n=i?[t]:t;if(Array.isArray(n)){if(i)return n=W(e,n,r,t);W(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Le(e,t,n,r){let s=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],c=n&&n[e.length],a;if(!(i==null||i===!0||i===!1))if((a=typeof i)=="object"&&i.nodeType)e.push(i);else if(Array.isArray(i))s=Le(e,i,c)||s;else if(a==="function")if(r){for(;typeof i=="function";)i=i();s=Le(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||s}else e.push(i),s=!0;else{const f=String(i);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return s}function He(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function W(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(s!==i){const c=i.parentNode===e;!o&&!l?c?e.replaceChild(s,i):e.insertBefore(s,n):c&&i.remove()}else o=!0}}else e.insertBefore(s,n);return[s]}const ln=!1;function ct(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,o){if(n)return!(n=!1);const l={to:s,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:c=>{c&&(n=!0),i.navigate(s,{...o,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let Oe;function je(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Oe=window.history.state._depth}je();function cn(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function an(e,t){let n=!1;return()=>{const r=Oe;je();const s=r==null?null:Oe-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const un=/^(?:[a-z0-9]+:)?\/\//i,fn=/^\/+|(\/)\/+$/g,at="http://sr";function Q(e,t=!1){const n=e.replace(fn,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function se(e,t,n){if(un.test(t))return;const r=Q(e),s=n&&Q(n);let o="";return!s||t.startsWith("/")?o=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?o=r+s:o=s,(o||"/")+Q(t,!o)}function dn(e,t){if(e==null)throw new Error(t);return e}function hn(e,t){return Q(e).replace(/\/*(\*.*)?$/g,"")+Q(t)}function ut(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function mn(e,t,n){const[r,s]=e.split("/*",2),o=r.split("/").filter(Boolean),l=o.length;return i=>{const c=i.split("/").filter(Boolean),a=c.length-l;if(a<0||a>0&&s===void 0&&!t)return null;const f={path:l?"":"/",params:{}},u=h=>n===void 0?void 0:n[h];for(let h=0;h<l;h++){const m=o[h],x=c[h],d=m[0]===":",g=d?m.slice(1):m;if(d&&ve(x,u(g)))f.params[g]=x;else if(d||!ve(x,m))return null;f.path+=`/${x}`}if(s){const h=a?c.slice(-a).join("/"):"";if(ve(h,u(s)))f.params[s]=h;else return null}return f}}function ve(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function gn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,o)=>s+(o.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function ft(e){const t=new Map,n=ze();return new Proxy({},{get(r,s){return t.has(s)||et(n,()=>t.set(s,N(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function dt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return dt(r).reduce((o,l)=>[...o,...s.map(i=>i+l)],[])}const pn=100,ht=Re(),Ie=Re(),ee=()=>dn(de(ht),"<A> and 'use' router primitives can be only used inside a Route."),yn=()=>de(Ie)||ee().base,Xn=e=>{const t=yn();return N(()=>t.resolvePath(e()))},Gn=e=>{const t=ee();return N(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Jn=()=>ee().navigatorFactory(),Yn=()=>ee().location,Qn=()=>ee().params;function wn(e,t=""){const{component:n,preload:r,load:s,children:o,info:l}=e,i=!o||Array.isArray(o)&&!o.length,c={key:e,component:n,preload:r||s,info:l};return mt(e.path).reduce((a,f)=>{for(const u of dt(f)){const h=hn(t,u);let m=i?h:h.split("/*",1)[0];m=m.split("/").map(x=>x.startsWith(":")||x.startsWith("*")?x:encodeURIComponent(x)).join("/"),a.push({...c,originalPath:f,pattern:m,matcher:mn(m,!i,e.matchFilters)})}return a},[])}function bn(e,t=0){return{routes:e,score:gn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const o=e[s],l=o.matcher(n);if(!l)return null;r.unshift({...l,route:o})}return r}}}function mt(e){return Array.isArray(e)?e:[e]}function gt(e,t="",n=[],r=[]){const s=mt(e);for(let o=0,l=s.length;o<l;o++){const i=s[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const c=wn(i,t);for(const a of c){n.push(a);const f=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!f)gt(i.children,a.pattern,n,r);else{const u=bn([...n],r.length);r.push(u)}n.pop()}}}return n.length?r:r.sort((o,l)=>l.score-o.score)}function Ae(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function vn(e,t){const n=new URL(at),r=N(c=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),c}},n,{equals:(c,a)=>c.href===a.href}),s=N(()=>r().pathname),o=N(()=>r().search,!0),l=N(()=>r().hash),i=()=>"";return{get pathname(){return s()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:ft(Ne(o,()=>ut(r())))}}let q;function An(){return q}function xn(e,t,n,r={}){const{signal:[s,o],utils:l={}}=e,i=l.parsePath||(A=>A),c=l.renderPath||(A=>A),a=l.beforeLeave||ct(),f=se("",r.base||"");if(f===void 0)throw new Error(`${f} is not a valid base path`);f&&!s().value&&o({value:f,replace:!0,scroll:!1});const[u,h]=$(!1);let m;const x=(A,P)=>{P.value===d()&&P.state===w()||(m===void 0&&h(!0),q=A,m=P,Ct(()=>{m===P&&(g(m.value),y(m.state),S[1]([]))}).finally(()=>{m===P&&St(()=>{q=void 0,A==="navigate"&&O(m),h(!1),m=void 0})}))},[d,g]=$(s().value),[w,y]=$(s().state),R=vn(d,w),E=[],S=$([]),D=N(()=>typeof r.transformUrl=="function"?Ae(t(),r.transformUrl(R.pathname)):Ae(t(),R.pathname)),G=ft(()=>{const A=D(),P={};for(let I=0;I<A.length;I++)Object.assign(P,A[I].params);return P}),V={pattern:f,path:()=>f,outlet:()=>null,resolvePath(A){return se(f,A)}};return M(Ne(s,A=>x("native",A),{defer:!0})),{base:V,location:R,params:G,isRouting:u,renderPath:c,parsePath:i,navigatorFactory:L,matches:D,beforeLeave:a,preloadRoute:B,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:S};function C(A,P,I){k(()=>{if(typeof P=="number"){P&&(l.go?l.go(P):console.warn("Router integration does not support relative routing"));return}const te=!P||P[0]==="?",{replace:ge,resolve:H,scroll:pe,state:J}={replace:!1,resolve:!te,scroll:!0,...I};let $e;const ne=H?A.resolvePath(P):se(te&&($e=s().value)&&$e.split("?")[0]||"",P);if(ne===void 0)throw new Error(`Path '${P}' is not a routable path`);if(E.length>=pn)throw new Error("Too many redirects");const _e=d();(ne!==_e||J!==w())&&(ln||a.confirm(ne,I)&&(E.push({value:_e,replace:ge,scroll:pe,state:w()}),x("navigate",{value:ne,state:J})))})}function L(A){return A=A||de(Ie)||V,(P,I)=>C(A,P,I)}function O(A){const P=E[0];P&&(o({...A,replace:P.replace,scroll:P.scroll}),E.length=0)}function B(A,P={}){const I=Ae(t(),A.pathname),te=q;q="preload";for(let ge in I){const{route:H,params:pe}=I[ge];H.component&&H.component.preload&&H.component.preload();const{preload:J}=H;P.preloadData&&J&&et(n(),()=>J({params:pe,location:{pathname:A.pathname,search:A.search,hash:A.hash,query:ut(A),state:null,key:""},intent:"preload"}))}q=te}}function Pn(e,t,n,r){const{base:s,location:o,params:l}=e,{pattern:i,component:c,preload:a}=r().route,f=N(()=>r().path);c&&c.preload&&c.preload();const u=a?a({params:l,location:o,intent:q||"initial"}):void 0;return{parent:t,pattern:i,path:f,outlet:()=>c?j(c,{params:l,location:o,data:u,get children(){return n()}}):n(),resolvePath(m){return se(s.path(),m,f())}}}const En=e=>t=>{const{base:n}=t,r=Te(()=>t.children),s=N(()=>gt(r(),t.base||""));let o;const l=xn(e,s,()=>o,{base:n,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return e.create&&e.create(l),j(ht.Provider,{value:l,get children(){return j(Sn,{routerState:l,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[N(()=>(o=ze())&&null),j(Cn,{routerState:l,get branches(){return s()}})]}})}})};function Sn(e){const t=e.routerState.location,n=e.routerState.params,r=N(()=>e.preload&&k(()=>{e.preload({params:n,location:t,intent:An()||"initial"})}));return j(it,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:s=>j(s,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function Cn(e){const t=[];let n;const r=N(Ne(e.routerState.matches,(s,o,l)=>{let i=o&&s.length===o.length;const c=[];for(let a=0,f=s.length;a<f;a++){const u=o&&o[a],h=s[a];l&&u&&h.route.key===u.route.key?c[a]=l[a]:(i=!1,t[a]&&t[a](),Y(m=>{t[a]=m,c[a]=Pn(e.routerState,c[a-1]||e.routerState.base,We(()=>r()[a+1]),()=>e.routerState.matches()[a])}))}return t.splice(s.length).forEach(a=>a()),l&&i?l:(n=c[0],c)}));return We(()=>r()&&n)()}const We=e=>()=>j(it,{get when(){return e()},keyed:!0,children:t=>j(Ie.Provider,{value:t,get children(){return t.outlet()}})}),xe=e=>{const t=Te(()=>e.children);return _t(e,{get children(){return t()}})};function Ln([e,t],n,r){return[e,r?s=>t(r(s)):t]}function On(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Nn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Ln($(n(e.get()),{equals:(s,o)=>s.value===o.value&&s.state===o.state}),void 0,s=>(!t&&e.set(s),p.registry&&!p.done&&(p.done=!0),s));return e.init&&fe(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),En({signal:r,create:e.create,utils:e.utils})}function Rn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Tn(e,t){const n=On(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const kn=new Map;function jn(e=!0,t=!1,n="/_server",r){return s=>{const o=s.base.path(),l=s.navigatorFactory(s.base);let i={};function c(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function a(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const g=d.composedPath().find(D=>D instanceof Node&&D.nodeName.toUpperCase()==="A");if(!g||t&&!g.hasAttribute("link"))return;const w=c(g),y=w?g.href.baseVal:g.href;if((w?g.target.baseVal:g.target)||!y&&!g.hasAttribute("state"))return;const E=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||E&&E.includes("external"))return;const S=w?new URL(y,document.baseURI):new URL(y);if(!(S.origin!==window.location.origin||o&&S.pathname&&!S.pathname.toLowerCase().startsWith(o.toLowerCase())))return[g,S]}function f(d){const g=a(d);if(!g)return;const[w,y]=g,R=s.parsePath(y.pathname+y.search+y.hash),E=w.getAttribute("state");d.preventDefault(),l(R,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:E&&JSON.parse(E)})}function u(d){const g=a(d);if(!g)return;const[w,y]=g;typeof r=="function"&&(y.pathname=r(y.pathname)),i[y.pathname]||s.preloadRoute(y,{preloadData:w.getAttribute("preload")!=="false"})}function h(d){const g=a(d);if(!g)return;const[w,y]=g;typeof r=="function"&&(y.pathname=r(y.pathname)),!i[y.pathname]&&(i[y.pathname]=setTimeout(()=>{s.preloadRoute(y,{preloadData:w.getAttribute("preload")!=="false"}),delete i[y.pathname]},200))}function m(d){const g=a(d);if(!g)return;const[,w]=g;typeof r=="function"&&(w.pathname=r(w.pathname)),i[w.pathname]&&(clearTimeout(i[w.pathname]),delete i[w.pathname])}function x(d){if(d.defaultPrevented)return;let g=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const y=new URL(g,at);if(g=s.parsePath(y.pathname+y.search),!g.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=kn.get(g);if(w){d.preventDefault();const y=new FormData(d.target,d.submitter);w.call({r:s,f:d.target},d.target.enctype==="multipart/form-data"?y:new URLSearchParams(y))}}lt(["click","submit"]),document.addEventListener("click",f),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",m),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",x),fe(()=>{document.removeEventListener("click",f),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",x)})}}function In(e){const t=()=>({value:window.location.pathname.replace(/^\/+/,"/")+window.location.search+window.location.hash,state:window.history.state}),n=ct();return Nn({get:t,set({value:r,replace:s,scroll:o,state:l}){s?window.history.replaceState(cn(l),"",r):window.history.pushState(l,"",r),Tn(decodeURIComponent(window.location.hash.slice(1)),o),je()},init:r=>Rn(window,"popstate",an(r,s=>{if(s&&s<0)return!n.confirm(s);{const o=t();return!n.confirm(o.value,{state:o.state})}})),create:jn(e.preload,e.explicitLinks,e.actionBase,e.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const pt=Re(),$n=["title","meta"],Xe=[],Ge=["name","http-equiv","content","charset","media"].concat(["property"]),Je=(e,t)=>{const n=Object.fromEntries(Object.entries(e.props).filter(([r])=>t.includes(r)).sort());return(Object.hasOwn(n,"name")||Object.hasOwn(n,"property"))&&(n.name=n.name||n.property,delete n.property),e.tag+JSON.stringify(n)};function _n(){if(!p.context){const n=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(n,r=>r.parentNode.removeChild(r))}const e=new Map;function t(n){if(n.ref)return n.ref;let r=document.querySelector(`[data-sm="${n.id}"]`);return r?(r.tagName.toLowerCase()!==n.tag&&(r.parentNode&&r.parentNode.removeChild(r),r=document.createElement(n.tag)),r.removeAttribute("data-sm")):r=document.createElement(n.tag),r}return{addTag(n){if($n.indexOf(n.tag)!==-1){const o=n.tag==="title"?Xe:Ge,l=Je(n,o);e.has(l)||e.set(l,[]);let i=e.get(l),c=i.length;i=[...i,n],e.set(l,i);let a=t(n);n.ref=a,qe(a,n.props);let f=null;for(var r=c-1;r>=0;r--)if(i[r]!=null){f=i[r];break}return a.parentNode!=document.head&&document.head.appendChild(a),f&&f.ref&&f.ref.parentNode&&document.head.removeChild(f.ref),c}let s=t(n);return n.ref=s,qe(s,n.props),s.parentNode!=document.head&&document.head.appendChild(s),-1},removeTag(n,r){const s=n.tag==="title"?Xe:Ge,o=Je(n,s);if(n.ref){const l=e.get(o);if(l){if(n.ref.parentNode){n.ref.parentNode.removeChild(n.ref);for(let i=r-1;i>=0;i--)l[i]!=null&&document.head.appendChild(l[i].ref)}l[r]=null,e.set(o,l)}else n.ref.parentNode&&n.ref.parentNode.removeChild(n.ref)}}}}const Dn=e=>{const t=_n();return j(pt.Provider,{value:t,get children(){return e.children}})},Un=(e,t,n)=>(Mn({tag:e,props:t,setting:n,id:Ut(),get name(){return t.name||t.property}}),null);function Mn(e){const t=de(pt);if(!t)throw new Error("<MetaProvider /> should be in the tree");M(()=>{const n=t.addTag(e);fe(()=>t.removeTag(e,n))})}const Zn=e=>Un("title",e,{escape:!0,close:!0}),Fn=ot(()=>Ye(()=>import("./Bible-DvmHJoWt.js"),__vite__mapDeps([0,1,2]))),Bn=ot(()=>Ye(()=>import("./VersionSelector-DEiugjmo.js"),__vite__mapDeps([3,1]))),qn=document.getElementById("root");Jt(()=>j(Dn,{get children(){return j(In,{get children(){return j(xe,{get path(){return"/bible-web/"},get children(){return[j(xe,{path:":version?/:book?/:chapter?/:verse?/",component:Fn}),j(xe,{path:":version?/:book?/:chapter?/:verse?/select_version",component:Bn})]}})}})}}),qn);export{Hn as F,it as S,Zn as T,M as a,Qt as b,$ as c,lt as d,Kn as e,N as f,j as g,Jn as h,nn as i,St as j,Et as k,Vn as l,_t as m,Xn as n,Gn as o,Yn as p,Q as q,qe as r,Ce as s,Wn as t,Qn as u};
