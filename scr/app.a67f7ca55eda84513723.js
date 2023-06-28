(()=>{"use strict";var t,e,n,r,o={719:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"html,\nbody,\ncanvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\nhtml {\n    background: #000;\n}\n",""]);const c=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<t.length;u++){var f=[].concat(t[u]);r&&i[f[0]]||(void 0!==a&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=a),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},81:t=>{t.exports=function(t){return t[1]}},744:(t,e,n)=>{var r=n(379),o=n.n(r),a=n(795),i=n.n(a),c=n(569),s=n.n(c),u=n(565),f=n.n(u),d=n(216),l=n.n(d),p=n(589),h=n.n(p),v=n(719),m={};m.styleTagTransform=h(),m.setAttributes=f(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),o()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],f=a[u]||0,d="".concat(u," ").concat(f);a[u]=f+1;var l=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),u=0;u<a.length;u++){var f=n(a[u]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},465:(t,e,n)=>{n.a(t,(async(t,e)=>{try{var r=n(235),o=n(947),a=(n(744),t([r]));r=(a.then?(await a)():a)[0];function i(){return t=this,e=void 0,r=function*(){const t=new o.Z,e=document.getElementById("canvas");if(!e)throw Error("Missing element with id #canvas!");const n=e.getContext("2d");if(!n)throw Error("Unable to create a 2D context!");n.fillStyle="#000";let r=0;const a=o=>{if(r>0){const a=e.width,i=e.height,s=n.getImageData(0,0,a,i);c(s.data,a,i,o,t.getFunctions(),t.getBounds()),n.putImageData(s,0,0),r--}window.requestAnimationFrame(a)};window.requestAnimationFrame(a);const i=()=>{const t=e.clientWidth,o=e.clientHeight;e.width=t,e.height=o,n.fillRect(0,0,t,o),r=Math.floor(t*o*1e-4)};new ResizeObserver(i).observe(e),t.onRedraw=i},new((n=void 0)||(n=Promise))((function(o,a){function i(t){try{s(r.next(t))}catch(t){a(t)}}function c(t){try{s(r.throw(t))}catch(t){a(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}s((r=r.apply(t,e||[])).next())}));var t,e,n,r}function c(t,e,n,o,[a,i,c,s],[u,f,d,l]){(0,r.hh)(t,e,n,o,a.a,a.b,a.c,a.d,a.e,a.f,Math.ceil(a.p),i.a,i.b,i.c,i.d,i.e,i.f,Math.ceil(i.p),c.a,c.b,c.c,c.d,c.e,c.f,Math.ceil(c.p),s.a,s.b,s.c,s.d,s.e,s.f,Math.ceil(s.p),u,f,d,l)}i(),e()}catch(s){e(s)}}))},947:(t,e,n)=>{n.d(e,{Z:()=>c});const r=[-2.182,-1e-4,6.642,9.9983],o={barnsley:{functions:[[0,0,0,.16,0,0,1],[.85,.04,-.04,.85,0,1.6,85],[.2,-.26,.23,.22,0,1.6,7],[-.15,.28,.26,.24,0,.44,7]],bounds:[...r]},cyclosorus:{functions:[[0,0,0,.25,0,-.4,2],[.95,.005,-.005,.93,-.002,.5,84],[.035,-.2,.16,.04,-.09,.02,7],[-.04,.2,.16,.04,.083,.12,7]],bounds:[...r]},modified:{functions:[[0,0,0,.2,0,-.12,1],[.845,.035,-.035,.82,0,1.6,85],[.2,-.31,.255,.245,0,.29,7],[-.15,.24,.25,.2,0,.68,7]],bounds:[...r]},culcita:{functions:[[0,0,0,.25,0,-.14,2],[.85,.02,-.02,.83,0,1,84],[.09,-.28,.3,.11,0,.6,7],[-.09,.28,.3,.09,0,.7,7]],bounds:[...r]},fishbone:{functions:[[0,0,0,.25,0,-.4,2],[.95,.002,-.002,.93,-.002,.5,84],[.035,-.11,.27,.01,-.05,.005,7],[-.04,.11,.27,.01,.047,.06,7]],bounds:[...r]},coch:{functions:[[.5,.375,.5,-.375,-.0625,.5625,10],[.5,-.375,-.5,-.375,.5625,1.0625,10],[1,0,0,1,0,0,0],[1,0,0,1,0,0,0]],bounds:[.2,.5,1,.8]},tree:{functions:[[.4,0,0,.4,0,0,5],[.42,-.42,.42,.42,0,2,4],[.42,.42,-.42,.42,0,2,4],[0,0,0,.5,0,0,3]],bounds:[...r]},bee:{functions:[[.6178,0,0,-.6178,0,10,15],[0,-.786,.786,0,.786,0,15],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]],bounds:[...r]}},a=["a","b","c","d","e","f","p"],i="coch";class c{constructor(){this.onRedraw=()=>{},this.lastconfig="",this.functions=[u(i,0),u(i,1),u(i,2),u(i,3)],this.bounds=o[i].bounds;const t=document.getElementById("grid");if(!t)throw Error("Missing element #grid!");for(const e of a){t.appendChild(s(e));for(const n of this.functions){const r=this.makeInput(n,e);t.appendChild(r)}}const e=document.getElementById("preset");if(!e)throw Error("Missing element #preset!");for(const t of Object.keys(o)){const n=document.createElement("option");n.value=t,n.textContent=t,e.appendChild(n)}e.addEventListener("change",(()=>{this.reset(e.value)})),e.value=i}getFunctions(){const t=[...this.functions];t.sort(((t,e)=>e.p-t.p));const[e,n,r,o]=t,a=JSON.stringify([[e.a,e.b,e.c,e.d,e.e,e.f,e.p],[n.a,n.b,n.c,n.d,n.e,n.f,n.p],[r.a,r.b,r.c,r.d,r.e,r.f,r.p],[o.a,o.b,o.c,o.d,o.e,o.f,o.p]]);return a!==this.lastconfig&&console.log(a),this.lastconfig=a,t}getBounds(){return[...this.bounds]}reset(t){const e=o[t];if(!e)return;console.log("🚀 [inputs] preset = ",e);let n=0;for(const t of a){let r=0;for(const o of this.functions){const a=e.functions[r][n];o[t]=a;const i=`f${o.index}${t}`,c=document.getElementById(i);if(!c)throw Error(`Unable to find input #${i}!`);c.value=`${a}`,r++}n++}this.onRedraw()}makeInput(t,e){const n=document.createElement("input");return n.type="number",n.value=`${t[e]}`,n.id=`f${t.index}${e}`,n.addEventListener("input",(()=>{const r=parseFloat(n.value);isNaN(r)?n.classList.add("bad"):(n.classList.remove("bad"),this.update(t,e,r))})),n}update(t,e,n){t[e]=n,this.onRedraw()}}function s(t){const e=document.createElement("div");return e.textContent=t,e.classList.add("coeff"),e}function u(t,e){const[n,r,a,i,c,s,u]=o[t].functions[e];return{a:n,b:r,c:a,d:i,e:c,f:s,p:u,index:e}}},235:(t,e,n)=>{n.a(t,(async(t,r)=>{try{n.d(e,{hh:()=>a.hh});var o=n(530),a=n(838),i=t([o]);o=(i.then?(await i)():i)[0],(0,a.oT)(o),r()}catch(t){r(t)}}))},838:(t,e,n)=>{let r;function o(t){r=t}n.d(e,{T2:()=>l,hh:()=>d,oT:()=>o,ug:()=>p});let a=null;function i(){return null!==a&&0!==a.byteLength||(a=new Uint8Array(r.memory.buffer)),a}const c=new Array(128).fill(void 0);function s(t){return c[t]}c.push(void 0,null,!0,!1);let u=c.length;let f=0;function d(t,e,n,o,a,s,d,l,p,h,v,m,b,y,g,w,_,x,E,S,M,T,A,C,I,j,k,L,O,$,B,F,N,P,R,Z){var U=function(t,e){const n=e(1*t.length)>>>0;return i().set(t,n/1),f=t.length,n}(t,r.__wbindgen_malloc),q=f;r.barnsley_fern_paint(U,q,function(t){u===c.length&&c.push(c.length+1);const e=u;return u=c[e],c[e]=t,e}(t),e,n,o,a,s,d,l,p,h,v,m,b,y,g,w,_,x,E,S,M,T,A,C,I,j,k,L,O,$,B,F,N,P,R,Z)}function l(t,e,n){var r,o;new Uint8Array(s(n).buffer,s(n).byteOffset,s(n).byteLength).set((r=t,o=e,r>>>=0,i().subarray(r/1,r/1+o)))}function p(t){!function(t){const e=s(t);(function(t){t<132||(c[t]=u,u=t)})(t)}(t)}},530:(t,e,n)=>{var r=n(838);t.exports=n.v(e,t.id,"252f99dfbc7214f4c068",{"./index_bg.js":{__wbindgen_copy_to_typed_array:r.T2,__wbindgen_object_drop_ref:r.ug}})}},a={};function i(t){var e=a[t];if(void 0!==e)return e.exports;var n=a[t]={id:t,exports:{}};return o[t](n,n.exports,i),n.exports}t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",e="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",n="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=t=>{t&&!t.d&&(t.d=1,t.forEach((t=>t.r--)),t.forEach((t=>t.r--?t.r++:t())))},i.a=(o,a,i)=>{var c;i&&((c=[]).d=1);var s,u,f,d=new Set,l=o.exports,p=new Promise(((t,e)=>{f=e,u=t}));p[e]=l,p[t]=t=>(c&&t(c),d.forEach(t),p.catch((t=>{}))),o.exports=p,a((o=>{var a;s=(o=>o.map((o=>{if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var a=[];a.d=0,o.then((t=>{i[e]=t,r(a)}),(t=>{i[n]=t,r(a)}));var i={};return i[t]=t=>t(a),i}}var c={};return c[t]=t=>{},c[e]=o,c})))(o);var i=()=>s.map((t=>{if(t[n])throw t[n];return t[e]})),u=new Promise((e=>{(a=()=>e(i)).r=0;var n=t=>t!==c&&!d.has(t)&&(d.add(t),t&&!t.d&&(a.r++,t.push(a)));s.map((e=>e[t](n)))}));return a.r?u:i()}),(t=>(t?f(p[n]=t):u(l),r(c)))),c&&(c.d=0)},i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.v=(t,e,n,r)=>{var o=fetch(i.p+""+n+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,r).then((e=>Object.assign(t,e.instance.exports))):o.then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,r))).then((e=>Object.assign(t,e.instance.exports)))},(()=>{var t;i.g.importScripts&&(t=i.g.location+"");var e=i.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!t;)t=n[r--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t+"../"})(),i.nc=void 0,i(465)})();