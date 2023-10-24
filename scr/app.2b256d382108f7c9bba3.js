(()=>{"use strict";var e,n,t,r,a,i,o,s={719:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,'html {\n    font-family: sans-serif;\n    font-size: 18px;\n    font-size: 5vmin;\n    font-size: min(5vmin, 24px);\n}\n\nhtml,\nbody,\ncanvas {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n}\n\n* {\n    box-sizing: border-box;\n}\n\nh1,\nh2 {\n    margin: 0 0 0.5em 0;\n    padding: 0;\n}\n\nh1 {\n    font-size: 1.4rem;\n}\n\nh2 {\n    font-size: 1.2rem;\n}\n\nh1::after,\nh2::after {\n    content: "";\n    display: block;\n    height: 1px;\n    width: 100%;\n    background: linear-gradient(to left, transparent, currentColor);\n}\n\nhr {\n    height: 1px;\n    border: none;\n    background-image: linear-gradient(\n        to left,\n        transparent,\n        currentColor,\n        currentColor,\n        transparent\n    );\n}\n',""]);const s=o},78:(e,n,t)=>{t.d(n,{O:()=>f,Z:()=>l});var r=t(893),a=t(294);const i=a.lazy((()=>t.e(793).then(t.bind(t,793)))),o=a.lazy((()=>t.e(332).then(t.bind(t,332)))),s=a.lazy((()=>t.e(826).then(t.bind(t,826))));function l(){return(0,r.jsx)(h,{path:"/",Page:i,fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsxs)(h,{path:"/barnsley",fallback:(0,r.jsx)("div",{children:"Loading..."}),children:[(0,r.jsx)(h,{path:"/barnsley/edit",Page:o,fallback:(0,r.jsx)("div",{children:"Loading..."})}),(0,r.jsx)(h,{path:"/barnsley/view",fallback:(0,r.jsx)("div",{children:"Loading..."}),children:(0,r.jsx)(h,{path:"/barnsley/view/[params]",Page:s,fallback:(0,r.jsx)("div",{children:"Loading..."})})})]})})}function c(e){const n=new URL(e).hash;return n?n.startsWith("#")?n.substring(1):n:"/"}function u(e){return"string"==typeof e&&e.trim().length>0}let d={};function f(){const[e,n]=a.useState(d);return function(e,n){const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!0;for(const r of t)if(e[r]!==n[r])return!0;return!1}(e,d)&&n(d),e}function h({path:e,fallback:n,children:t,Page:i,Layout:o,Template:s}){const l=function(e,n){const t={},r=e.split("/").filter(u),a=n.split("/").filter(u);for(let e=0;e<Math.min(r.length,a.length);e++){const n=r[e],i=a[e];if(i.startsWith("["))t[i.substring(1,i.length-1)]=n;else if(n!==i)return null}return d=t,{full:r.length===a.length,params:t}}(function(){const[e,n]=a.useState(c(window.location.toString()));return a.useEffect((()=>{const e=e=>{const t=c(e.oldURL),r=c(e.newURL),a=function(e,n){if(e.startsWith("/"))return e;let t=e;for(;t.startsWith("./");)t=t.substring(2);const r=n.split("/").filter(u);for(const n of e.split("/"))".."===n?r.length>0&&r.pop():r.push(n);return`/${r.filter(u).join("/")}`}(r,t);a!==r&&history.replaceState({},"",`#${a}`),n(a)};return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)}),[]),e}(),e);if(!l)return null;if(l.full){if(!i)return null;const e=s?(0,r.jsx)(s,{params:l.params,children:(0,r.jsx)(i,{params:l.params})}):(0,r.jsx)(i,{params:l.params});return o?(0,r.jsx)(o,{params:l.params,children:(0,r.jsx)(a.Suspense,{fallback:n,children:e})}):(0,r.jsx)(a.Suspense,{fallback:n,children:e})}return o?(0,r.jsx)(o,{params:l.params,children:t}):(0,r.jsx)(r.Fragment,{children:t})}},514:(e,n,t)=>{var r=t(893),a=t(745),i=t(686),o=t(78),s=t(379),l=t.n(s),c=t(795),u=t.n(c),d=t(569),f=t.n(d),h=t(565),p=t.n(h),b=t(216),m=t.n(b),g=t(589),v=t.n(g),y=t(719),w={};w.styleTagTransform=v(),w.setAttributes=p(),w.insert=f().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=m(),l()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals,new i.Q2({colors:{secondary:{hue:0},neutral:{hue:240,lightness:[0,1],chroma:.5}}}).apply();const j=document.getElementById("app");if(!j)throw Error("Missing element with id #app!");(0,a.s)(j).render((0,r.jsx)(o.Z,{}))}},l={};function c(e){var n=l[e];if(void 0!==n)return n.exports;var t=l[e]={id:e,exports:{}};return s[e](t,t.exports,c),t.exports}c.m=s,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(a,i,o)=>{var s;o&&((s=[]).d=-1);var l,c,u,d=new Set,f=a.exports,h=new Promise(((e,n)=>{u=n,c=e}));h[n]=f,h[e]=e=>(s&&e(s),d.forEach(e),h.catch((e=>{}))),a.exports=h,i((a=>{var i;l=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];i.d=0,a.then((e=>{o[n]=e,r(i)}),(e=>{o[t]=e,r(i)}));var o={};return o[e]=e=>e(i),o}}var s={};return s[e]=e=>{},s[n]=a,s})))(a);var o=()=>l.map((e=>{if(e[t])throw e[t];return e[n]})),c=new Promise((n=>{(i=()=>n(o)).r=0;var t=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(i.r++,e.push(i)));l.map((n=>n[e](t)))}));return i.r?c:o()}),(e=>(e?u(h[t]=e):c(f),r(s)))),s&&s.d<0&&(s.d=0)},a=[],c.O=(e,n,t,r)=>{if(!n){var i=1/0;for(u=0;u<a.length;u++){for(var[n,t,r]=a[u],o=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(c.O).every((e=>c.O[e](n[s])))?n.splice(s--,1):(o=!1,r<i&&(i=r));if(o){a.splice(u--,1);var l=t();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=a.length;u>0&&a[u-1][2]>r;u--)a[u]=a[u-1];a[u]=[n,t,r]},c.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return c.d(n,{a:n}),n},c.d=(e,n)=>{for(var t in n)c.o(n,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((n,t)=>(c.f[t](e,n),n)),[])),c.u=e=>"scr/"+e+"."+{332:"601e98b2529c25fcabd4",793:"d519b56234a2e60f1e21",826:"3b8ed31669d3cc8de42f"}[e]+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),i={},o="fern:",c.l=(e,n,t,r)=>{if(i[e])i[e].push(n);else{var a,s;if(void 0!==t)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+t){a=d;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.setAttribute("data-webpack",o+t),a.src=e),i[e]=[n];var f=(n,t)=>{a.onerror=a.onload=null,clearTimeout(h);var r=i[e];if(delete i[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(t))),n)return n(t)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),s&&document.head.appendChild(a)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,n,t,r)=>{var a=fetch(c.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(a,r).then((n=>Object.assign(e,n.instance.exports))):a.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((n=>Object.assign(e,n.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var n=c.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!e;)e=t[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e+"../"})(),(()=>{var e={143:0};c.f.j=(n,t)=>{var r=c.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(((t,a)=>r=e[n]=[t,a]));t.push(r[2]=a);var i=c.p+c.u(n),o=new Error;c.l(i,(t=>{if(c.o(e,n)&&(0!==(r=e[n])&&(e[n]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,r[1](o)}}),"chunk-"+n,n)}},c.O.j=n=>0===e[n];var n=(n,t)=>{var r,a,[i,o,s]=t,l=0;if(i.some((n=>0!==e[n]))){for(r in o)c.o(o,r)&&(c.m[r]=o[r]);if(s)var u=s(c)}for(n&&n(t);l<i.length;l++)a=i[l],c.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return c.O(u)},t=self.webpackChunkfern=self.webpackChunkfern||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})(),c.nc=void 0;var u=c.O(void 0,[235],(()=>c(514)));u=c.O(u)})();