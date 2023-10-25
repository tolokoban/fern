"use strict";(self.webpackChunkfern=self.webpackChunkfern||[]).push([[826],{724:(t,n,e)=>{function r(t,n){try{return s(t,n),!0}catch(t){return!1}}function s(t,n,e="data"){if("unknown"===n)return;if("null"===n){if(null!==t)throw Error(`Expected ${e} to be null and not a ${typeof t}!`);return}if("string"==typeof n){if(typeof t!==n)throw Error(`Expected ${e} to be a string and not a ${typeof t}!`);return}if(Array.isArray(n)){const[r]=n;switch(r){case"array":return void function(t,n,e){if(!Array.isArray(t))throw Error(`Expected ${n} to be an array and not a ${typeof t}!`);const[,r]=e;for(let e=0;e<t.length;e+=1)s(t[e],r,`${n}[${e}]`)}(t,e,n);case"map":return void function(t,n,e){if(!function(t){return!!t&&!Array.isArray(t)&&"object"==typeof t}(t))throw Error(`Expected ${n} to be an object and not a ${typeof t}!`);const[,r]=e;for(const e of Object.keys(t))"string"==typeof e&&s(t[e],r,`${n}[${e}]`)}(t,e,n);case"?":return void function(t,n,e){if(void 0===t)return;const[,r]=e;s(t,r,n)}(t,e,n);case"|":return void function(t,n,e){const[,...r]=e;let o=Error(`No type has been defined for this alternative: ${JSON.stringify(e)}!`);for(const e of r)try{return void s(t,e,n)}catch(t){t instanceof Error&&(o=t)}throw o}(t,e,n);case"literal":return void function(t,n,e){const[,...r]=e;for(const n of r)if(t===n)return;throw Error(`Expected ${n} to be a literal (${r.map((t=>`"${t}"`)).join(" | ")})!`)}(t,e,n);default:if(r.startsWith("array("))return void function(t,n,e,r){if(!Array.isArray(t))throw Error(`Expected ${n} to be an array and not a ${typeof t}!`);if(t.length!==r)throw Error(`${n} was expected to have a length of ${r}, but we got ${t.length}!`);const[,o]=e;for(let e=0;e<t.length;e+=1)s(t[e],o,`${n}[${e}]`)}(t,e,n,parseInt(r.substring(6,r.length-1),10));throw Error(`Don't know how to create a type guard for this kind of type: ${JSON.stringify(n)}`)}}if("object"!=typeof t)throw Error(`Expected ${e} to be an object and not a ${typeof t}!`);const r=t;for(const t of Object.keys(n))"string"==typeof t&&n[t]&&s(r[t],n[t],`${e}.${t}`)}e.d(n,{P9:()=>r,p_:()=>s})},925:(t,n,e)=>{e.d(n,{Z:()=>a});var r=e(81),s=e.n(r),o=e(645),i=e.n(o)()(s());i.push([t.id,".IgF_c5MakGdPseyqvW2h {\n    overflow: hidden;\n    background-color: #000;\n}\n\n.IgF_c5MakGdPseyqvW2h,\n.IgF_c5MakGdPseyqvW2h > canvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.IgF_c5MakGdPseyqvW2h > menu {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 1em;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 1em;\n    margin: 0;\n}\n\n.IgF_c5MakGdPseyqvW2h > menu > button {\n    position: relative;\n    margin: 0;\n}\n",""]),i.locals={PageView:"IgF_c5MakGdPseyqvW2h"};const a=i},522:(t,n,e)=>{e.d(n,{Z:()=>p});var r=e(379),s=e.n(r),o=e(795),i=e.n(o),a=e(569),c=e.n(a),u=e(565),l=e.n(u),h=e(216),f=e.n(h),d=e(589),y=e.n(d),b=e(925),g={};g.styleTagTransform=y(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=f(),s()(b.Z,g);const p=b.Z&&b.Z.locals?b.Z.locals:void 0},826:(t,n,e)=>{e.a(t,(async(t,r)=>{try{e.r(n),e.d(n,{default:()=>f});var s=e(893),o=e(294),i=e(28),a=e(522),c=e(541),u=e(686),l=e(273),h=t([i]);function f(){const t=(0,c.LW)(),n=o.useRef(null);return o.useEffect((()=>(i.B.canvas=n.current,i.B.params=t,()=>{i.B.canvas=null})),[t]),(0,s.jsxs)("div",{className:a.Z.PageView,children:[(0,s.jsx)("canvas",{ref:n}),(0,s.jsxs)("menu",{children:[(0,s.jsx)(u.NI,{icon:u.yl,onClick:(0,l.H)("/barnsley/edit")}),(0,s.jsx)(u.NI,{icon:u.SW,onClick:i.B.reset})]})]})}i=(h.then?(await h)():h)[0],r()}catch(d){r(d)}}))},541:(t,n,e)=>{e.d(n,{LW:()=>l,go:()=>c,lB:()=>u});var r=e(724),s=e(294),o=e(78),i=e(423);const a={Barnsley:{functions:[[0,0,0,.16,0,0,1],[.85,.04,-.04,.85,0,1.6,85],[.2,-.26,.23,.22,0,1.6,7],[-.15,.28,.26,.24,0,.44,7]],bounds:[-2.182,-1e-4,6.642,9.9983]},Cyclosorus:{functions:[[0,0,0,.25,0,-.4,2],[.95,.005,-.005,.93,-.002,.5,84],[.035,-.2,.16,.04,-.09,.02,7],[-.04,.2,.16,.04,.083,.12,7]],bounds:[0,0,2,7]},Culcita:{functions:[[0,0,0,.25,0,-.14,2],[.85,.02,-.02,.83,0,1,84],[.09,-.28,.3,.11,0,.6,7],[-.09,.28,.3,.09,0,.7,7]],bounds:[-4,0,2,6]},Fishbone:{functions:[[0,0,0,.25,0,-.4,2],[.95,.002,-.002,.93,-.002,.5,84],[.035,-.11,.27,.01,-.05,.005,7],[-.04,.11,.27,.01,.047,.06,7]],bounds:[-5,-1,2,8]},Sierpiński:{functions:[[.5,0,0,.5,-.666,0,10],[.5,0,0,.5,.666,0,10],[.5,0,0,.5,0,1,10],[0,0,0,0,0,0,0]],bounds:[-2,0,2,2]},Coch:{functions:[[.5,.375,.5,-.375,-.0625,.5625,10],[.5,-.375,-.5,-.375,.5625,1.0625,10],[1,0,0,1,0,0,0],[1,0,0,1,0,0,0]],bounds:[.2,.6,1,.8]},Tree:{functions:[[.4,0,0,.4,0,0,5],[.42,-.42,.42,.42,0,2,4],[.42,.42,-.42,.42,0,2,4],[0,0,0,.5,0,0,3]],bounds:[-2.4,0,6.9,4.5]},Hive:{functions:[[.6178,0,0,-.6178,0,10,15],[0,-.786,.786,0,.786,0,15],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],bounds:[-2.182,-1e-4,6.642,9.9983]}};function c(){return Object.keys(a)}function u(t){const n=a[t];if(!n)throw Error(`There is no preset with the name "${t}"!`);return n}function l(){const{params:t}=(0,o.O)();return s.useMemo((()=>{let n={bounds:i.Z.barnsley.bounds.value,functions:i.Z.barnsley.functions.value};try{const e=JSON.parse(decodeURIComponent(t));(function(t){if(!t)return!1;try{return(0,r.p_)(t,{functions:["array(4)",["array(7)","number"]],bounds:["array(4)","number"]}),!0}catch(t){return console.error("LocalStorage is corrupted!"),console.error(t),!1}})(e)&&(n=e)}catch(t){console.error(t)}finally{return n}}),[t])}},28:(t,n,e)=>{e.a(t,(async(t,r)=>{try{e.d(n,{B:()=>u});var s=e(235),o=t([s]);s=(o.then?(await o)():o)[0];class i{constructor(){this._canvas=null,this._params=null,this.ctx=null,this.bitmap={width:0,height:0,colorSpace:"srgb",data:new Uint8ClampedArray},this.loops=0,this.reset=()=>{this.loops=-1},this.stop=()=>{this.loops=0},this.paint=t=>{window.requestAnimationFrame(this.paint);const{ctx:n,params:e}=this;if(!n||!e)return;if(0===this.loops)return;const{width:r,height:s}=c(n);this.loops<0&&(n.fillStyle="#000",n.fillRect(0,0,r,s),this.loops=Math.ceil(r*s*1e-4),this.bitmap=n.getImageData(0,0,r,s)),this.bitmap.width===r&&this.bitmap.height===s?(a(this.bitmap.data,r,s,t,e),n.putImageData(this.bitmap,0,0),this.loops--):this.reset()},window.requestAnimationFrame(this.paint),this.observer=new ResizeObserver(this.reset)}set canvas(t){this.ctx=null,this._canvas&&this.observer.unobserve(this._canvas),this._canvas=t,t?(this.observer.observe(t),this.ctx=t.getContext("2d",{alpha:!1}),this.reset()):this.stop()}get params(){return this._params}set params(t){this._params=t,t&&[0,1,2,3].forEach((n=>{const[e,r,s,o,i,a]=t.functions[n];console.log(`f${n+1}(x) = ${e.toFixed(3)}.x + ${r.toFixed(3)}.y + ${s.toFixed()}`),console.log(`f${n+1}(y) = ${o.toFixed(3)}.x + ${i.toFixed(3)}.y + ${a.toFixed()}`)})),this.reset()}}function a(t,n,e,r,{functions:[o,i,a,c],bounds:[u,l,h,f]}){const[d,y,b,g,p,v,m]=o,[w,$,_,S,x,E,A]=i,[I,k,F,j,M,O,q]=a,[N,C,P,W,V,Z,J]=c,T=(u+h)/2,B=(l+f)/2,G=Math.abs((h-u)/(f-l)),L=n/e,U=L>G?L/G:1,H=L>G?1:G/L;(0,s.hh)(t,n,e,r,d,y,b,g,p,v,Math.ceil(m),w,$,_,S,x,E,Math.ceil(A),I,k,F,j,M,O,Math.ceil(q),N,C,P,W,V,Z,Math.ceil(J),T+U*(u-T),B+H*(l-B),T+U*(h-T),B+H*(f-B))}function c(t){const{canvas:n}=t,e=Math.ceil(n.clientWidth),r=Math.ceil(n.clientHeight);return n.width=e,n.height=r,{width:e,height:r}}const u=new i;r()}catch(l){r(l)}}))},423:(t,n,e)=>{e.d(n,{Z:()=>c,q:()=>u});var r=e(294);class s{constructor(t,n={}){var e;this.options=n,this.listeners=new Set,this.sessionId=`AtomicState:${(s.counter++).toString(16)}\r`,this.currentValue=n.transform?n.transform(t):t,this.id=`AtomicState\n${null===(e=n.storage)||void 0===e?void 0:e.id}`,n.storage?this.loadFromStorage():this.restoreSession()}get value(){return this.currentValue}set value(t){const{transform:n,storage:e}=this.options;if(n&&(t=n(t)),t!==this.currentValue){this.currentValue=t,e?window.localStorage.setItem(this.id,JSON.stringify(t)):this.saveSession(t);for(const n of this.listeners)n(t)}}useValue(){const[t,n]=r.useState(this.currentValue);return r.useEffect((()=>(this.listeners.add(n),()=>{this.listeners.delete(n)})),[]),t}useState(){const[t,n]=r.useState(this.currentValue);return r.useEffect((()=>(this.listeners.add(n),()=>{this.listeners.delete(n)})),[]),[t,t=>{this.value=t}]}loadFromStorage(){const{storage:t}=this.options;if(t)try{const n=window.localStorage.getItem(this.id);if(!n)return;const e=JSON.parse(n);if(!t.guard(e))throw Error("Invalid type!");this.currentValue=e}catch(n){console.error(`Unable to retrieve AtomicState "${t.id}":`,n)}}saveSession(t){const n=JSON.stringify(t),e=i(n);window.sessionStorage.setItem(this.sessionId,`${e}${n}`)}restoreSession(){const t=window.sessionStorage.getItem(this.sessionId);if(!t)return;const n=t.substring(0,16),e=t.substring(16);if(i(e)===n)try{const t=JSON.parse(e);this.value=t}catch(t){console.error("Atomic state is an invalid JSON!",this.sessionId)}else console.error("Atomic state has been corrupted!",this.sessionId)}}s.counter=0;const o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";function i(t){const n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(let e=0;e<t.length;e++){const r=t.charCodeAt(e);n[e%n.length]+=r}return n.map((t=>o[t%o.length])).join("")}var a=e(724);const c={barnsley:{bounds:new s([-2,-2,2,2],{storage:{id:"barnsley/bounds",guard:l(["array(4)","number"])}}),functions:new s([[1,0,0,1,0,0,10],[1,0,0,1,0,0,10],[1,0,0,1,0,0,10],[1,0,0,1,0,0,10]],{storage:{id:"barnsley/functions",guard:l(["array(4)",["array(7)","number"]])}})}};function u(){const[t,n]=c.barnsley.bounds.useState(),[e,r]=c.barnsley.functions.useState();return[{bounds:t,functions:e},t=>{n(t.bounds),r(t.functions)}]}function l(t){return n=>(0,a.P9)(n,t)}},273:(t,n,e)=>{function r(t){window.location.hash=t}function s(t){return()=>r(t)}e.d(n,{E:()=>r,H:()=>s})},235:(t,n,e)=>{e.a(t,(async(t,r)=>{try{e.d(n,{hh:()=>o.hh,wq:()=>o.wq});var s=e(530),o=e(838),i=t([s]);s=(i.then?(await i)():i)[0],(0,o.oT)(s),r()}catch(t){r(t)}}))},838:(t,n,e)=>{let r;function s(t){r=t}e.d(n,{T2:()=>b,hh:()=>f,oT:()=>s,ug:()=>g,wq:()=>y});let o=null;function i(){return null!==o&&0!==o.byteLength||(o=new Uint8Array(r.memory.buffer)),o}const a=new Array(128).fill(void 0);function c(t){return a[t]}a.push(void 0,null,!0,!1);let u=a.length;let l=0;function h(t){u===a.length&&a.push(a.length+1);const n=u;return u=a[n],a[n]=t,n}function f(t,n,e,s,o,a,c,u,f,d,y,b,g,p,v,m,w,$,_,S,x,E,A,I,k,F,j,M,O,q,N,C,P,W,V,Z){var J=function(t,n){const e=n(1*t.length)>>>0;return i().set(t,e/1),l=t.length,e}(t,r.__wbindgen_malloc),T=l;r.barnsley_fern_paint(J,T,h(t),n,e,s,o,a,c,u,f,d,y,b,g,p,v,m,w,$,_,S,x,E,A,I,k,F,j,M,O,q,N,C,P,W,V,Z)}let d=null;function y(t,n,e,s,o,i,a,c,u,f,y,b,g,p,v,m,w,$,_,S,x,E,A,I,k,F,j,M,O,q){var N=function(t,n){const e=n(4*t.length)>>>0;return(null!==d&&0!==d.byteLength||(d=new Float32Array(r.memory.buffer)),d).set(t,e/4),l=t.length,e}(t,r.__wbindgen_malloc),C=l;r.barnsley_fern_compute_bounds(N,C,h(t),n,e,s,o,i,a,c,u,f,y,b,g,p,v,m,w,$,_,S,x,E,A,I,k,F,j,M,O,q)}function b(t,n,e){var r,s;new Uint8Array(c(e).buffer,c(e).byteOffset,c(e).byteLength).set((r=t,s=n,r>>>=0,i().subarray(r/1,r/1+s)))}function g(t){!function(t){const n=c(t);(function(t){t<132||(a[t]=u,u=t)})(t)}(t)}},530:(t,n,e)=>{var r=e(838);t.exports=e.v(n,t.id,"dc781ef30b979d40a2cf",{"./index_bg.js":{__wbindgen_copy_to_typed_array:r.T2,__wbindgen_object_drop_ref:r.ug}})}}]);