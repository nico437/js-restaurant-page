(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(81),o=n.n(a),r=n(645),c=n.n(r)()(o());c.push([e.id,"body {\n    background-color: blanchedalmond;\n    margin: 0px;\n    padding: 0px;\n}\n\n#content {\n    /*display: flex;*/\n    min-height: 100vh;\n    /* justify-content: center; */\n    text-align: center;\n}\n\n\n.image-restaurant {\n    margin: 25px;\n    height: 410px;\n    width: 600px;\n}\n\n.top-image {\n    margin: 25px;\n    height: 300px;\n    width: 500px;\n}\n\n.landing-page-copy, .menu-copy, .contact-copy {\n    color: rgb(0, 0, 0);\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    font-weight: 100;\n    font-style: italic;\n}\n\nheader {\n    background-color: rgba(136, 225, 109, 0.653);\n    height: 50px;\n}\n\nul {\n    display: flex;\n    justify-content: space-around;\n    list-style-type: none;\n    margin: 0px;\n    padding: 0px;\n    align-items: center;\n    height: 50px;\n}\n\nli {\n    display: flex;\n    height: 40px;\n    align-items: center;\n    border-radius: 5px 5px 0px 0px;\n    border-top: 1px solid black;\n    border-right: 1px solid black;\n    border-left: 1px solid black;\n    cursor: pointer;\n}\n\n.image-food {\n    margin: 25px;\n    height: 300px;\n    width: 500px;\n}\n\n.image-contact {\n    margin: 25px;\n    height: 300px;\n    width: 500px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var s=e[i],d=a.base?s[0]+a.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=o(m,a);a.byIndex=i,t.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=n(r[c]);t[i].references--}for(var s=a(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"b507d796787e73745c8d.jpg";function t(){const t=document.querySelector("#content");t.replaceChildren();const n=document.createElement("h1");n.textContent="Welcome to Nico's Restaurant",n.classList.add("landing-title"),t.appendChild(n);const a=document.createElement("img");a.classList.add("image-restaurant"),a.src=e,a.alt="Image of Restaurant",t.appendChild(a);const o=document.createElement("p");o.classList.add("landing-page-copy"),o.textContent="This is a restaurant with a natural look and feel",t.appendChild(o);const r=document.createElement("p");r.classList.add("landing-page-copy"),r.textContent="Casual attire",t.appendChild(r);const c=document.createElement("p");c.classList.add("landing-page-copy"),c.textContent="Thanks, Management",t.appendChild(c)}const a=n.p+"21b868ee5e146707ad20.jpg",o=n.p+"06c0846c1da10b3f2adb.jpg";function r(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome To Nico's Restaurant",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image-food"),n.src=a,n.alt="Image of Italian Pasta",e.appendChild(n);const r=document.createElement("p");r.classList.add("menu-copy"),r.textContent="An amazing Italian Pasta made with Italian noodles",e.appendChild(r);const c=document.createElement("img");c.classList.add("image-food"),c.src=o,c.alt="Image of Chicken Parm Dish",e.appendChild(c);const i=document.createElement("p");i.classList.add("menu-copy"),i.textContent="This savoury Chicken Parm will satisfy your Italian food craving",e.appendChild(i)}const c=n.p+"ef1744d7920c6cbc8f2b.jpg",i=n.p+"d2ea7bb1ca5fe22c7479.jpg",s=n.p+"d18a6ce1276f1177ff8b.jpg";function d(){const e=document.querySelector("#content");e.replaceChildren();const t=document.createElement("h1");t.textContent="Welcome To Nico's Restaurant",t.classList.add("landing-title"),e.appendChild(t);const n=document.createElement("img");n.classList.add("image-contact"),n.src=c,n.alt="Image of phone",e.appendChild(n);const a=document.createElement("p");a.classList.add("menu-copy"),a.textContent="Call us!",e.appendChild(a);const o=document.createElement("img");o.classList.add("image-contact"),o.src=i,o.alt="Image of email",e.appendChild(o);const r=document.createElement("p");r.classList.add("menu-copy"),r.textContent="Email us at fake@fake.com",e.appendChild(r);const d=document.createElement("img");d.classList.add("image-contact"),d.src=s,d.alt="Image of mailing address",e.appendChild(d);const l=document.createElement("p");l.classList.add("contact-copy"),l.textContent="Our address is 125 Fake Lane",e.appendChild(l)}var l=n(379),p=n.n(l),u=n(795),m=n.n(u),f=n(569),h=n.n(f),g=n(565),y=n.n(g),v=n(216),x=n.n(v),b=n(589),C=n.n(b),E=n(426),L={};L.styleTagTransform=C(),L.setAttributes=y(),L.insert=h().bind(null,"head"),L.domAPI=m(),L.insertStyleElement=x(),p()(E.Z,L),E.Z&&E.Z.locals&&E.Z.locals,t(),document.querySelector(".home").addEventListener("click",t),document.querySelector(".menu").addEventListener("click",r),document.querySelector(".contact").addEventListener("click",d)})()})();
