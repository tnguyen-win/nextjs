(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126],{6435:function(t,n,r){"use strict";r.d(n,{F:function(){return y},f:function(){return $}});var o=r(2265);let i=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,s=(0,o.createContext)(void 0),c={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,o.useContext)(s))&&void 0!==t?t:c},$=t=>(0,o.useContext)(s)?o.createElement(o.Fragment,null,t.children):o.createElement(f,t),u=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:c="theme",themes:d=u,defaultTheme:h=r?"system":"light",attribute:g="data-theme",value:_,children:v,nonce:T})=>{let[w,x]=(0,o.useState)(()=>S(c,h)),[O,k]=(0,o.useState)(()=>S(c)),E=_?Object.values(_):d,C=(0,o.useCallback)(t=>{let o=t;if(!o)return;"system"===t&&r&&(o=p());let a=_?_[o]:o,s=n?b():null,c=document.documentElement;if("class"===g?(c.classList.remove(...E),a&&c.classList.add(a)):a?c.setAttribute(g,a):c.removeAttribute(g),l){let t=i.includes(h)?h:null,n=i.includes(o)?o:t;c.style.colorScheme=n}null==s||s()},[]),j=(0,o.useCallback)(t=>{x(t);try{localStorage.setItem(c,t)}catch(t){}},[t]),I=(0,o.useCallback)(n=>{let o=p(n);k(o),"system"===w&&r&&!t&&C("system")},[w,t]);(0,o.useEffect)(()=>{let t=window.matchMedia(a);return t.addListener(I),I(t),()=>t.removeListener(I)},[I]),(0,o.useEffect)(()=>{let e=t=>{t.key===c&&j(t.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),(0,o.useEffect)(()=>{C(null!=t?t:w)},[t,w]);let N=(0,o.useMemo)(()=>({theme:w,setTheme:j,forcedTheme:t,resolvedTheme:"system"===w?O:w,themes:r?[...d,"system"]:d,systemTheme:r?O:void 0}),[w,j,t,O,r,d]);return o.createElement(s.Provider,{value:N},o.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:l,storageKey:c,themes:d,defaultTheme:h,attribute:g,value:_,children:v,attrs:E,nonce:T}),v)},m=(0,o.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:s,defaultTheme:c,value:u,attrs:m,nonce:d})=>{let h="system"===c,g="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${m.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,_=s?i.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,o=!0)=>{let a=u?u[t]:t,l=n?t+"|| ''":`'${a}'`,c="";return s&&o&&!n&&i.includes(t)&&(c+=`d.style.colorScheme = '${t}';`),"class"===r?c+=n||a?`c.add(${l})`:"null":a&&(c+=`d[s](n,${l})`),c},v=t?`!function(){${g}${$(t)}}()`:l?`!function(){try{${g}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${h})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}${h?"":"else{"+$(c,!1,!1)+"}"}${_}}catch(e){}}()`:`!function(){try{${g}var e=localStorage.getItem('${n}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${$(u?"x[e]":"e",!0)}}else{${$(c,!1,!1)};}${_}}catch(t){}}();`;return o.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:v}})},()=>!0),S=(t,n)=>{let r;if(!l){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(a)),t.matches?"dark":"light")},2601:function(t,n,r){"use strict";var o,i;t.exports=(null==(o=r.g.process)?void 0:o.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(8960)},679:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t,n){for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}(n,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return c}});let o=r(1024),i=r(7929),a=r(2637),l=r(413),s=o._(r(9950)),unstable_getImgProps=t=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:n}=(0,i.getImgProps)(t,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/nextjs/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(n))void 0===r&&delete n[t];return{props:n}},c=l.Image},7626:function(t){t.exports={style:{fontFamily:"'__Fjalla_One_d691bc', '__Fjalla_One_Fallback_d691bc'",fontWeight:400,fontStyle:"normal"},className:"__className_d691bc"}},5154:function(t){t.exports={style:{fontFamily:"'__GeistSans_292d22', '__GeistSans_Fallback_292d22'"},className:"__className_292d22",variable:"__variable_292d22"}},8960:function(t){!function(){var n={229:function(t){var n,r,o,i=t.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(t){if(n===setTimeout)return setTimeout(t,0);if((n===defaultSetTimout||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(t){n=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(t){r=defaultClearTimeout}}();var a=[],l=!1,s=-1;function cleanUpNextTick(){l&&o&&(l=!1,o.length?a=o.concat(a):s=-1,a.length&&drainQueue())}function drainQueue(){if(!l){var t=runTimeout(cleanUpNextTick);l=!0;for(var n=a.length;n;){for(o=a,a=[];++s<n;)o&&o[s].run();s=-1,n=a.length}o=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(n){try{return r.call(null,t)}catch(n){return r.call(this,t)}}}(t)}}function Item(t,n){this.fun=t,this.array=n}function noop(){}i.nextTick=function(t){var n=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)n[r-1]=arguments[r];a.push(new Item(t,n)),1!==a.length||l||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function __nccwpck_require__(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}},a=!0;try{n[t](i,i.exports,__nccwpck_require__),a=!1}finally{a&&delete r[t]}return i.exports}__nccwpck_require__.ab="//";var o=__nccwpck_require__(229);t.exports=o}()},622:function(t,n,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(t,n,r){var o,a={},u=null,m=null;for(o in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(m=n.ref),n)l.call(n,o)&&!c.hasOwnProperty(o)&&(a[o]=n[o]);if(t&&t.defaultProps)for(o in n=t.defaultProps)void 0===a[o]&&(a[o]=n[o]);return{$$typeof:i,type:t,key:u,ref:m,props:a,_owner:s.current}}n.Fragment=a,n.jsx=q,n.jsxs=q},7437:function(t,n,r){"use strict";t.exports=r(622)},6691:function(t,n,r){t.exports=r(679)},7359:function(t,n,r){"use strict";var o=r(2265);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t}).apply(this,arguments)}var i=["cdnSuffix","cdnUrl","countryCode","style","svg"];n.Z=function(t){var n=t.cdnSuffix,r=t.cdnUrl,a=t.countryCode,l=t.style,s=t.svg,c=function(t,n){if(null==t)return{};var r,o,i={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],n.indexOf(r)>=0||(i[r]=t[r]);return i}(t,i);if("string"!=typeof a)return null;if(void 0!==s&&s){var u=""+(void 0===r?"https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/":r)+a.toLowerCase()+"."+(void 0===n?"svg":n);return(0,o.createElement)("img",Object.assign({},c,{src:u,style:_extends({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},l)}))}var m=a.toUpperCase().replace(/./g,function(t){return String.fromCodePoint(t.charCodeAt(0)+127397)});return(0,o.createElement)("span",Object.assign({role:"img"},c,{style:_extends({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},l)}),m)}},1172:function(t,n,r){"use strict";r.d(n,{w_:function(){return GenIcon}});var o=r(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=o.createContext&&o.createContext(i),__assign=function(){return(__assign=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++)for(var i in n=arguments[r])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},__rest=function(t,n){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&0>n.indexOf(o)&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(t);i<o.length;i++)0>n.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(t,o[i])&&(r[o[i]]=t[o[i]]);return r};function GenIcon(t){return function(n){return o.createElement(IconBase,__assign({attr:__assign({},t.attr)},n),function Tree2Element(t){return t&&t.map(function(t,n){return o.createElement(t.tag,__assign({key:n},t.attr),Tree2Element(t.child))})}(t.child))}}function IconBase(t){var elem=function(n){var r,i=t.attr,a=t.size,l=t.title,s=__rest(t,["attr","size","title"]),c=a||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),o.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:__assign(__assign({color:t.color||n.color},n.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),t.children)};return void 0!==a?o.createElement(a.Consumer,null,function(t){return elem(t)}):elem(i)}}}]);