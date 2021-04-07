(()=>{var r={607:(r,n,e)=>{"use strict";e.d(n,{Z:()=>i});var t=e(645),o=e.n(t)()((function(r){return r[1]}));o.push([r.id,"body {\r\n    background-color: #faf8ef;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 17px;\r\n    color: #776e65;   \r\n}\r\n#pageWrap {\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n#header-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#header-container-left {\r\n    margin-top: 30px; \r\n    width: 50%;\r\n}\r\n#header-container-right {\r\n    margin-top: 30px; \r\n    width: 50%;\r\n}\r\nh1 {\r\n    font-size: 80px;\r\n    font-weight: bold;\r\n    margin: 0px;\r\n}\r\nhr {\r\n    opacity: 0.7;\r\n    margin-top: 35px;\r\n    margin-bottom: 35px;\r\n}\r\nspan {\r\n    font-weight: bold;\r\n    text-decoration-line: underline;\r\n    text-decoration-style: solid;\r\n    cursor: pointer;\r\n}\r\n.scoreBox {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n.scoreData {\r\n    background-color: #b8a99f;\r\n    display: flex;\r\n    flex-direction: column;\r\n    border-radius: 3px;\r\n    margin-left: 5px;\r\n    padding: 10px 10% 0px 10%;\r\n}\r\n.head {\r\n    color: #e9dfd5;\r\n    font-size: 12px;\r\n}\r\n.val {\r\n    color: white;\r\n    font-size: 25px;\r\n}\r\n#newGameButton {\r\n    margin-top: 52px;\r\n    background-color:#8a7766;\r\n    width: 110px;\r\n    color: #fefffb;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n    float: right;\r\n}\r\n.gridBox {\r\n    margin-top: 23px;\r\n    margin-bottom: 35px;\r\n    background-color:#b8aa9f;\r\n    text-align: center;\r\n    font-size: 55px;\r\n    font-weight: bolder;\r\n    width: 500px;\r\n    height: 500px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n.gridRow {\r\n    width: 97%;\r\n    height: 21.5%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n.gridElement {\r\n    width: 21.9%;\r\n    height: 100%;\r\n    color: #f9f6f2;\r\n    background-color: #ccc0b4;\r\n    border-radius: 3px;\r\n    line-height: 2em;\r\n}\r\na:link {\r\n    color:#7a6f6c;\r\n    font-weight: bolder;\r\n}\r\na:visited {\r\n    color:#7a6f6c;\r\n    font-weight: bolder;\r\n}\r\n#line {\r\n    width: 300px;\r\n    background-color:#776e65;\r\n}\r\n.par {\r\n    line-height: 1.7;\r\n}\r\n#feedback {\r\n    position: fixed;\r\n    transform: rotate(90deg);\r\n    transform-origin:left;\r\n    top: 220px;\r\n    padding : 5px 8px 14px 8px;\r\n    background-color: #bbafa1;\r\n    color: white;\r\n    text-align: center;\r\n    font-size: 13px;\r\n    font-stretch: expanded;\r\n    font-weight: bold;\r\n    letter-spacing: 0.08em;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n#feedback:hover {\r\n    background-color:#8a7766;\r\n}\r\n#donate {\r\n    background-color:#8a7766;\r\n    width: 122px;\r\n    padding: 8px 0;\r\n    color: white;\r\n    text-align: center;\r\n    margin-top: 30px;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    left: 100px;\r\n    cursor: pointer;\r\n}\r\n#donateBTC {\r\n    background-color:#8a7766;\r\n    width: 150px;\r\n    padding: 10px 0;\r\n    color: white;\r\n    text-align: center;\r\n    border-radius: 3px;\r\n    position: relative;\r\n    left: 238px;\r\n    bottom: 39px;\r\n    cursor: pointer;\r\n}\r\nimg {\r\n    position: relative;\r\n    max-width: 15px;\r\n    top: 3px;\r\n}\r\nfooter {\r\n    text-align: center;\r\n    margin-bottom: 200px;\r\n}\r\n.gridElement-2 {\r\n    color: #776e65;\r\n    background-color: #eee4da;\r\n}\r\n.gridElement-4 {\r\n    color: #776e65;\r\n    background-color: #eee1c9;\r\n}\r\n.gridElement-8 {\r\n    background-color: #f3b27a;\r\n}\r\n.gridElement-16 {\r\n    background-color: #f69664;\r\n}\r\n.gridElement-32 {\r\n    background-color: #f77c5f;\r\n}\r\n.gridElement-64 {\r\n    background-color: #f75f3b;\r\n}\r\n.gridElement-128 {\r\n    background-color: #edd073;\r\n    font-size: 46px;\r\n    line-height: 107.5px;\r\n}\r\n.gridElement-256 {\r\n    background-color: #edcc62;\r\n    font-size: 46px;\r\n    line-height: 107.5px;\r\n}\r\n.gridElement-512 {\r\n    background-color: #edc950;\r\n    font-size: 46px;\r\n    line-height: 107.5px;\r\n}\r\n.gridElement-1024 {\r\n    background-color: #edc53f;\r\n    font-size: 36px;\r\n    line-height: 107.5px;\r\n}\r\n.gridElement-2048 {\r\n    background-color: #edc22e;\r\n    font-size: 36px;\r\n    line-height: 107.5px;\r\n}\r\n.gridElement-higher {\r\n    background-color: #3c3a33;\r\n    font-size: 30px;\r\n    line-height: 107.5px;\r\n}",""]);const i=o},645:r=>{"use strict";r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,t){"string"==typeof r&&(r=[[null,r,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<r.length;c++){var l=[].concat(r[c]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),n.push(l))}},n}},379:(r,n,e)=>{"use strict";var t,o=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),i=[];function a(r){for(var n=-1,e=0;e<i.length;e++)if(i[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},t=[],o=0;o<r.length;o++){var c=r[o],l=n.base?c[0]+n.base:c[0],d=e[l]||0,s="".concat(l," ").concat(d);e[l]=d+1;var f=a(s),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:s,updater:h(u,n),references:1}),t.push(s)}return t}function l(r){var n=document.createElement("style"),t=r.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(r){n.setAttribute(r,t[r])})),"function"==typeof r.insert)r.insert(n);else{var a=o(r.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var d,s=(d=[],function(r,n){return d[r]=n,d.filter(Boolean).join("\n")});function f(r,n,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(r.styleSheet)r.styleSheet.cssText=s(n,o);else{var i=document.createTextNode(o),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}function u(r,n,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?r.setAttribute("media",o):r.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}var p=null,g=0;function h(r,n){var e,t,o;if(n.singleton){var i=g++;e=p||(p=l(n)),t=f.bind(null,e,i,!1),o=f.bind(null,e,i,!0)}else e=l(n),t=u.bind(null,e,n),o=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return t(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;t(r=n)}else o()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var l=c(r,n),d=0;d<e.length;d++){var s=a(e[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}e=l}}}},978:r=>{r.exports=function(r){let n=[];for(let e=0;e<4;e++)for(let t=0;t<4;t++)0===r[e][t]&&n.push({x:e,y:t});if(n.length>0){let e=n[Math.floor(Math.random()*n.length)];r[e.x][e.y]=Math.random()<.9?2:4}return r}},359:r=>{r.exports=function(r){if(r.length>0)for(let n=r.length-1;n>=0;n--){let e=r[n],t=r[n-1];e==t&&(r[n]=e+t,r.splice(n-1,1))}return r}},788:r=>{r.exports=function(r,n){for(let e=0;e<4;e++)for(let t=0;t<4;t++)if(r[e][t]!==n[e][t])return!0;return!1}},351:(r,n,e)=>{const t=e(729);r.exports=function(r){for(let n=0;n<r.length;n++)t(r[n]);return r}},927:r=>{r.exports={rotate:function(r,n="l"){const e=r.length,t=r[0].length,o=e*t,i=[];let a="r"===n?0:o-1;for(;;){const c=a/t|0,l=a%t,d="r"===n?l:t-1-l,s="r"===n?e-1-c:c,f=r[c][l];if(i[d]||i.push([]),i[d][s]=f,"r"===n){if(++a>=o)break}else if(a--<=0)break}return i},reverseGrid:function(r){for(let n=0;n<4;n++)r[n].reverse();return r}}},729:(r,n,e)=>{const t=e(359);r.exports=function(r){let n=r.length,e=n;for(;e--;)0===r[e]&&r.splice(e,1);for(t(r);n!==r.length;)r.unshift(0);return r}}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={id:t,exports:{}};return r[t](i,i.exports,e),i.exports}e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{"use strict";var r=e(379),n=e.n(r),t=e(607);n()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const{reverseGrid:o,rotate:i}=e(927),a=e(351),c=e(978),l=e(788);let d=[];function s(r){let n=document.getElementById("mainContainer");r.forEach((r=>{n.insertAdjacentHTML("beforeend",`<div class="gridRow">\n            ${r.map((r=>{return`<div class="gridElement ${function(r){switch(r){case 0:return"";case 2:return"gridElement-2";case 4:return"gridElement-4";case 8:return"gridElement-8";case 16:return"gridElement-16";case 32:return"gridElement-32";case 64:return"gridElement-64";case 128:return"gridElement-128";case 256:return"gridElement-256";case 512:return"gridElement-512";case 1024:return"gridElement-1024";case 2048:return"gridElement-2048";default:return"gridElement-higher"}}(n=r)}" >${0===n?"":n}</div>`;var n})).join("<br>")}        \n            </div>`)}))}function f(){return Math.floor(4*Math.random())}function u(){let r=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];return r[f()][f()]=2,r[f()][f()]=Math.random()>.1?2:4,r}function p(){document.getElementById("mainContainer").innerHTML=""}d=u(),s(d),document.getElementById("newGameButton").addEventListener("click",(r=>{p(),d=u(),s(d)})),window.addEventListener("keydown",(function(r){[32,37,38,39,40].indexOf(r.keyCode)>-1&&r.preventDefault()}),!1),document.addEventListener("keydown",(function(r){let n=d;switch(r.key){case"ArrowLeft":d=o(a(o(d)));break;case"ArrowRight":d=a(d);break;case"ArrowUp":d=i(a(i(d,"r")),"l");break;case"ArrowDown":d=i(a(i(d,"l")),"r")}l(n,d)&&c(d),p(),s(d)}))})()})();