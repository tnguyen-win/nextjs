(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6435:function(t,n,r){"use strict";r.d(n,{F:function(){return y},f:function(){return $}});var a=r(2265);let s=["light","dark"],o="(prefers-color-scheme: dark)",l="undefined"==typeof window,c=(0,a.createContext)(void 0),i={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,a.useContext)(c))&&void 0!==t?t:i},$=t=>(0,a.useContext)(c)?a.createElement(a.Fragment,null,t.children):a.createElement(f,t),d=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:r=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:m=d,defaultTheme:g=r?"system":"light",attribute:h="data-theme",value:x,children:v,nonce:j})=>{let[k,w]=(0,a.useState)(()=>S(i,g)),[_,N]=(0,a.useState)(()=>S(i)),E=x?Object.values(x):m,C=(0,a.useCallback)(t=>{let a=t;if(!a)return;"system"===t&&r&&(a=p());let o=x?x[a]:a,c=n?b():null,i=document.documentElement;if("class"===h?(i.classList.remove(...E),o&&i.classList.add(o)):o?i.setAttribute(h,o):i.removeAttribute(h),l){let t=s.includes(g)?g:null,n=s.includes(a)?a:t;i.style.colorScheme=n}null==c||c()},[]),O=(0,a.useCallback)(t=>{w(t);try{localStorage.setItem(i,t)}catch(t){}},[t]),L=(0,a.useCallback)(n=>{let a=p(n);N(a),"system"===k&&r&&!t&&C("system")},[k,t]);(0,a.useEffect)(()=>{let t=window.matchMedia(o);return t.addListener(L),L(t),()=>t.removeListener(L)},[L]),(0,a.useEffect)(()=>{let e=t=>{t.key===i&&O(t.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),(0,a.useEffect)(()=>{C(null!=t?t:k)},[t,k]);let P=(0,a.useMemo)(()=>({theme:k,setTheme:O,forcedTheme:t,resolvedTheme:"system"===k?_:k,themes:r?[...m,"system"]:m,systemTheme:r?_:void 0}),[k,O,t,_,r,m]);return a.createElement(c.Provider,{value:P},a.createElement(u,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:r,enableColorScheme:l,storageKey:i,themes:m,defaultTheme:g,attribute:h,value:x,children:v,attrs:E,nonce:j}),v)},u=(0,a.memo)(({forcedTheme:t,storageKey:n,attribute:r,enableSystem:l,enableColorScheme:c,defaultTheme:i,value:d,attrs:u,nonce:m})=>{let g="system"===i,h="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${u.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,x=c?s.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,n=!1,a=!0)=>{let o=d?d[t]:t,l=n?t+"|| ''":`'${o}'`,i="";return c&&a&&!n&&s.includes(t)&&(i+=`d.style.colorScheme = '${t}';`),"class"===r?i+=n||o?`c.add(${l})`:"null":o&&(i+=`d[s](n,${l})`),i},v=t?`!function(){${h}${$(t)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${n}');if('system'===e||(!e&&${g})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}${g?"":"else{"+$(i,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${n}');if(e){${d?`var x=${JSON.stringify(d)};`:""}${$(d?"x[e]":"e",!0)}}else{${$(i,!1,!1)};}${x}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})},()=>!0),S=(t,n)=>{let r;if(!l){try{r=localStorage.getItem(t)||void 0}catch(t){}return r||n}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(o)),t.matches?"dark":"light")},5923:function(t,n,r){Promise.resolve().then(r.bind(r,8001)),Promise.resolve().then(r.bind(r,1060)),Promise.resolve().then(r.t.bind(r,2853,23)),Promise.resolve().then(r.bind(r,8971)),Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.t.bind(r,5154,23)),Promise.resolve().then(r.t.bind(r,7626,23))},8001:function(t,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Navbar}});var a=r(7437),s=r(9160),o=r(2265),l=r(7626),c=r.n(l),i=r(6691),d=r.n(i),u=r(4606);let m="/nextjs/";function BrandLink(t){let{href:n,body:r,extraClasses:s}=t;return(0,a.jsxs)("a",{className:"flex items-center gap-2 font-black text-2xl ".concat(s||""),href:"/nextjs/",children:[(0,a.jsx)("div",{className:"grow grayscale invert dark:invert-0 brightness-200",children:(0,a.jsx)(d(),{src:"".concat(m,"favicon.jpg"),alt:"Waka Daiko logo",width:40,height:40})}),(0,a.jsx)("div",{className:"shrink ".concat(c().className," text-3xl ").concat("text-black dark:text-white"),children:r})]})}function ProfileLink(t){let{href:n}=t;return(0,a.jsx)("a",{className:"flex items-center text-lg megaHover:text-black dark:megaHover:text-white p-6 lg:p-3",href:n,children:(0,a.jsx)(u._Tb,{size:s.Zg})})}function Link(t){let n,{type:r,href:s,body:l,invert:c,extraClasses:i}=t,d="megaHover:text-black dark:megaHover:text-white";switch(r){case"navbar":n="text-sm p-6 lg:px-4 ".concat(d," megaHover:bg-[rgb(95%,95%,95%)] dark:megaHover:bg-[rgb(5%,5%,5%)]");break;case"hero1":n="justify-center rounded-lg font-black text-white lg:text-lg px-3 py-1.5";break;case"footer":n=d;break;default:n=""}return(0,a.jsx)("a",{className:"group flex items-center ".concat(n||""," ").concat(i||""),href:"".concat(m).concat(s),children:"hero1"===r?(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)("span",{className:"flex items-center font-black text-white",children:l}),(0,a.jsx)("span",{className:"transition-transform group-hover:translate-x-1 ms-2",children:"->"})]}):l})}function ButtonLink(t){let n,{type:r,href:o,body:l,invert:c}=t;switch(r){case"navbar":n="w-full h-full p-0";break;case"hero1":n="rounded-lg bg-white megaHover:bg-[rgb(95%,95%,95%)] text-black border-2 border-white megaHover:border-[rgb(90%,90%,90%)]";break;case"hero2":n="rounded-lg ".concat(c?s.TK||"":s.hA||"");break;default:n=""}return(0,a.jsx)("a",{className:"flex items-center justify-center font-black lg:text-lg px-4 py-2 ".concat(n||""),href:"".concat(m).concat(o),children:"navbar"===r?(0,a.jsx)("span",{className:"w-full text-center lg:w-max rounded-lg ".concat(s.hA," mx-5 lg:m-0 p-2 lg:px-2 lg:py-1"),children:l}):l})}var g=r(1060);function Navbar(){let t="/nextjs/",n="invisible lg:visible text-black dark:text-white ms-2",r="bg-[rgb(95%,95%,95%)] dark:bg-[rgb(5%,5%,5%)] lg:bg-inherit lg:dark:bg-inherit",l="border-b-[1px] ".concat(s.c$),[c,i]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{window.onresize=()=>window.matchMedia("(min-width: 1024px)")?i(!0):{}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("header",{className:"".concat(s.YE||""," sticky top-0 start-0 bg-inherit"),children:[(0,a.jsxs)("a",{className:"h-8 flex items-center justify-center bg-blue-400 text-center text-xs",href:"".concat(t,"news/events"),children:[(0,a.jsx)("span",{className:"rounded font-black bg-blue-300 text-blue-500 px-2 py-[1px]",children:"NEW"}),(0,a.jsx)("span",{className:"".concat("text-white dark:text-black"," tracking-widest mx-3"),children:"Asian Celebration, Summer 2024"}),(0,a.jsx)("div",{className:"rounded font-black ".concat(s.w1," ").concat(s.H3," px-2 py-[1px]"),children:"LEARN MORE"})]}),(0,a.jsx)("nav",{className:"".concat(c?"":l," lg:border-b-[1px] ").concat(l),children:(0,a.jsxs)("div",{className:"lg:h-16 flex flex-col lg:flex-row lg:container lg:mx-auto",children:[(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row lg:me-auto",children:[(0,a.jsxs)("div",{className:"h-16 flex items-center ".concat(l," lg:border-0"),children:[(0,a.jsx)(BrandLink,{href:t,body:"WAKA DAIKO",extraClasses:"p-6 lg:px-6"}),(0,a.jsx)(g.default,{collapse:c,handleMobile:()=>i(!c)})]}),(0,a.jsxs)("div",{className:"".concat(c?"hidden ":"","lg:flex flex-col lg:flex-row ").concat(r),children:[(0,a.jsx)(Link,{type:"navbar",href:"".concat(t,"news"),body:(0,a.jsxs)(o.Fragment,{children:["News",(0,a.jsx)("sup",{className:n,children:"3"})]})}),(0,a.jsx)(Link,{type:"navbar",href:"".concat(t,"learning"),body:(0,a.jsxs)(o.Fragment,{children:["Learning",(0,a.jsx)("sup",{className:n,children:"46"})]})}),(0,a.jsx)(Link,{type:"navbar",href:"".concat(t,"about"),body:"About"}),(0,a.jsx)(Link,{type:"navbar",href:"".concat(t,"contact"),body:"Contact"}),(0,a.jsx)(Link,{type:"navbar",href:"".concat(t,"abc"),body:"404"})]})]}),(0,a.jsxs)("div",{className:"".concat(c?"hidden ":"","flex lg:flex flex-col lg:flex-row flex-col-reverse"),children:[(0,a.jsxs)("div",{className:"flex justify-center ".concat(r),children:[(0,a.jsx)(g.SearchSelector,{}),(0,a.jsx)(g.ThemeSelector,{}),(0,a.jsx)("div",{className:"block self-center ".concat(s.SL," w-[1px] h-1/2 mx-2")}),(0,a.jsx)(g.LanguageSelector,{}),(0,a.jsx)(ProfileLink,{href:"https://sites.google.com/view/wakadaikowebsite/"})]}),(0,a.jsx)("span",{className:"flex items-center justify-center ".concat(r),children:(0,a.jsx)(ButtonLink,{type:"navbar",href:"".concat(t,"news/press"),body:"PRESS"})})]})]})})]}),(0,a.jsx)("div",{className:"".concat(s.Kn||""," ").concat(c?"hidden":""," fixed start-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.75)]")})]})}},1060:function(t,n,r){"use strict";r.r(n),r.d(n,{LanguageSelector:function(){return LanguageSelector},ScrollSelector:function(){return ScrollSelector},SearchSelector:function(){return SearchSelector},ThemeSelector:function(){return ThemeSelector},default:function(){return MobileSelector}});var a=r(7437),s=r(9160),o=r(2510),l=r(2265);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t}).apply(this,arguments)}var c=["cdnSuffix","cdnUrl","countryCode","style","svg"],react_country_flag_esm=function(t){var n=t.cdnSuffix,r=t.cdnUrl,a=t.countryCode,s=t.style,o=t.svg,i=function(t,n){if(null==t)return{};var r,a,s={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(s[r]=t[r]);return s}(t,c);if("string"!=typeof a)return null;if(void 0!==o&&o){var d=""+(void 0===r?"https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/":r)+a.toLowerCase()+"."+(void 0===n?"svg":n);return(0,l.createElement)("img",Object.assign({},i,{src:d,style:_extends({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},s)}))}var u=a.toUpperCase().replace(/./g,function(t){return String.fromCodePoint(t.charCodeAt(0)+127397)});return(0,l.createElement)("span",Object.assign({role:"img"},i,{style:_extends({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},s)}),u)},i=r(6435),d=r(4606),u=r(1824);function MobileSelector(t){let{collapse:n,handleMobile:r}=t;return(0,a.jsx)("button",{className:"lg:hidden dark:megaHover:text-white ms-auto p-6",type:"button",onClick:r,children:n?(0,a.jsx)(o.Fm7,{size:s.Zg}):(0,a.jsx)(o.JqX,{size:s.Zg})})}let m="dropdown-item w-full font-medium megaHover:text-black dark:megaHover:text-white me-[64px] p-4",HtmlDropdown=t=>{let{type:n,buttons:r,body:o}=t;return(0,a.jsxs)("div",{className:"group relative flex",children:[(0,a.jsx)("button",{className:"megaHover:text-black dark:megaHover:text-white p-6 lg:p-3 ".concat(""),type:"button",children:r}),(0,a.jsx)("ul",{className:"".concat(s.EK||""," hidden group-focus-within:block lg:group-focus-within:hidden group-hover:block absolute top-full w-max -translate-x-[25%] lg:-translate-x-[37.5%] rounded-b-lg ").concat(s.fI||""," border-[1px] ").concat(s.c$||""," shadow-lg dark:shadow-none"),children:o})]})},resetDropdowns=()=>"undefined"!=typeof document?document.activeElement.blur():{};function SearchSelector(){return(0,a.jsxs)("div",{className:"group lg:[&:not(:hover)>*:last-child]:hidden relative flex",children:[(0,a.jsx)("button",{className:"flex items-center megaHover:text-black dark:megaHover:text-white p-6 lg:p-3",type:"button",children:(0,a.jsx)(o.XPI,{size:s.Lt})}),(0,a.jsxs)("ul",{className:"".concat(s.EK||""," hidden group-focus-within:flex absolute top-full start-[-100%] lg:start-[-325%] top-full shadow-lg dark:shadow-none"),children:[(0,a.jsx)("li",{children:(0,a.jsx)("div",{className:"w-full h-full flex items-center ".concat(s.fI||""," border-[1px] ").concat(s.c$||""," px-4 py-3"),children:(0,a.jsx)(o.XPI,{size:s.Lt})})}),(0,a.jsx)("li",{children:(0,a.jsx)("input",{className:"".concat(s.fI||""," border-y-[1px] ").concat(s.c$||""," p-3"),placeholder:"Search..."})}),(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:"w-full h-full ".concat(s.fI||""," megaHover:text-black dark:megaHover:text-white border-[1px] ").concat(s.c$||""," px-4 py-3"),type:"button",onClick:resetDropdowns,children:(0,a.jsx)(o.JqX,{size:s.Lt})})})]})]})}function LanguageSelector(){let t="flex items-center gap-4",n=[{lang:"en",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(react_country_flag_esm,{countryCode:"US",svg:!0}),"English"]})},{lang:"ja",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(react_country_flag_esm,{countryCode:"JP",svg:!0}),"Japanese"]})},{lang:"vi",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(react_country_flag_esm,{countryCode:"VN",svg:!0}),"Vietnamese"]})},{lang:"zh",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(react_country_flag_esm,{countryCode:"CN",svg:!0}),"Chinese"]})},{lang:"ko",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(react_country_flag_esm,{countryCode:"KR",svg:!0}),"Korean"]})}],handleLanguage=t=>"undefined"!=typeof document?(document.documentElement.lang=t.currentTarget.getAttribute("language"),console.log(document.documentElement.lang),resetDropdowns()):{};return(0,a.jsx)(HtmlDropdown,{type:"lang",buttons:(0,a.jsx)(o.ssk,{size:s.Zg}),body:n.map((t,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:m,language:t.lang,onClick:handleLanguage,children:t.body})},n))})}function ThemeSelector(){let t="flex items-center gap-4",n=[{theme:"light",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(d.aQ_,{}),"Light"]})},{theme:"dark",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(d.gxG,{}),"Dark"]})},{theme:"system",body:(0,a.jsxs)("span",{className:t,children:[(0,a.jsx)(u.p17,{}),"System"]})}],[r,o]=(0,l.useState)(!1),{theme:c,setTheme:g}=(0,i.F)(),handleTheme=t=>(g(t.currentTarget.getAttribute("theme")),resetDropdowns());return(0,l.useEffect)(()=>{o(!0)},[]),(0,a.jsx)(HtmlDropdown,{type:"theme",buttons:r?"light"===c?(0,a.jsx)(d.aQ_,{size:s.Zg}):"dark"===c?(0,a.jsx)(d.gxG,{size:s.Zg}):"system"===c?(0,a.jsx)(u.p17,{size:s.Zg}):"":(0,a.jsx)(u.p17,{size:s.Zg}),body:n.map((t,n)=>(0,a.jsx)("li",{children:(0,a.jsx)("button",{className:m,theme:t.theme,onClick:handleTheme,children:t.body})},n))})}function ScrollSelector(){let[t,n]=(0,l.useState)(!1),checkScreenPosition=()=>"undefined"!=typeof document?document.body.scrollTop>250||document.documentElement.scrollTop>250?n(!0):n(!1):"";return(0,l.useEffect)(()=>{checkScreenPosition(),window.addEventListener("scroll",checkScreenPosition),window.addEventListener("touchmove",checkScreenPosition)},[]),(0,a.jsx)("button",{className:"".concat(t?"":"hidden"," ").concat(s.en||""," fixed right-0 bottom-0 rounded-full ").concat(s.hA||""," m-[2vw] p-3"),type:"button",onClick:()=>"undefined"!=typeof document?(document.body.scroll({top:0,left:0,behavior:"smooth"}),document.documentElement.scroll({top:0,left:0,behavior:"smooth"})):{},children:(0,a.jsx)(o.s$2,{size:s.Lt})})}},9160:function(t,n,r){"use strict";r.d(n,{EK:function(){return x},H3:function(){return o},Kn:function(){return h},Lt:function(){return u},SL:function(){return d},TK:function(){return c},YE:function(){return g},Zg:function(){return m},c$:function(){return i},en:function(){return v},fI:function(){return s},hA:function(){return l},w1:function(){return a}}),r(7437);let a="bg-white dark:bg-black",s="bg-[rgb(95%,95%,95%)] dark:bg-[rgb(5%,5%,5%)]",o="text-black dark:text-white",l="bg-black megaHover:bg-[rgb(10%,10%,10%)] dark:bg-white dark:megaHover:bg-[rgb(90%,90%,90%)] text-white dark:text-black border-2 border-black dark:border-white megaHover:border-[rgb(10%,10%,10%)] dark:megaHover:border-[rgb(90%,90%,90%)]",c="bg-white megaHover:bg-[rgb(95%,95%,95%)] dark:bg-black dark:megaHover:bg-[rgb(10%,10%,10%)] text-black dark:text-white border-2 border-white megaHover:border-[rgb(90%,90%,90%)] dark:border-black dark:megaHover:border-[rgb(10%,10%,10%)]",i="border-[rgb(87.5%,87.5%,87.5%)] dark:border-[rgb(12.5%,12.5%,12.5%)]",d="bg-[rgb(87.5%,87.5%,87.5%)] dark:bg-[rgb(22.5%,22.5%,22.5%)]",u=16,m=20,g="z-40",h="z-30",x="z-40",v="z-40"},8971:function(t,n,r){"use strict";r.r(n),r.d(n,{Providers:function(){return Providers}});var a=r(7437),s=r(6435);function Providers(t){let{children:n}=t;return(0,a.jsx)(s.f,{attribute:"class",disableTransitionOnChange:!0,children:n})}},679:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t,n){for(var r in n)Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}(n,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return i}});let a=r(1024),s=r(7929),o=r(2637),l=r(413),c=a._(r(9950)),unstable_getImgProps=t=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:n}=(0,s.getImgProps)(t,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/nextjs/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(n))void 0===r&&delete n[t];return{props:n}},i=l.Image},2853:function(){},7626:function(t){t.exports={style:{fontFamily:"'__Fjalla_One_d691bc', '__Fjalla_One_Fallback_d691bc'",fontWeight:400,fontStyle:"normal"},className:"__className_d691bc"}},5154:function(t){t.exports={style:{fontFamily:"'__GeistSans_292d22', '__GeistSans_Fallback_292d22'"},className:"__className_292d22",variable:"__variable_292d22"}},622:function(t,n,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function q(t,n,r){var a,o={},d=null,u=null;for(a in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(u=n.ref),n)l.call(n,a)&&!i.hasOwnProperty(a)&&(o[a]=n[a]);if(t&&t.defaultProps)for(a in n=t.defaultProps)void 0===o[a]&&(o[a]=n[a]);return{$$typeof:s,type:t,key:d,ref:u,props:o,_owner:c.current}}n.Fragment=o,n.jsx=q,n.jsxs=q},7437:function(t,n,r){"use strict";t.exports=r(622)},6691:function(t,n,r){t.exports=r(679)},1172:function(t,n,r){"use strict";r.d(n,{w_:function(){return GenIcon}});var a=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(s),__assign=function(){return(__assign=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++)for(var s in n=arguments[r])Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);return t}).apply(this,arguments)},__rest=function(t,n){var r={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&0>n.indexOf(a)&&(r[a]=t[a]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(t);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(t,a[s])&&(r[a[s]]=t[a[s]]);return r};function GenIcon(t){return function(n){return a.createElement(IconBase,__assign({attr:__assign({},t.attr)},n),function Tree2Element(t){return t&&t.map(function(t,n){return a.createElement(t.tag,__assign({key:n},t.attr),Tree2Element(t.child))})}(t.child))}}function IconBase(t){var elem=function(n){var r,s=t.attr,o=t.size,l=t.title,c=__rest(t,["attr","size","title"]),i=o||n.size||"1em";return n.className&&(r=n.className),t.className&&(r=(r?r+" ":"")+t.className),a.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,c,{className:r,style:__assign(__assign({color:t.color||n.color},n.style),t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),t.children)};return void 0!==o?a.createElement(o.Consumer,null,function(t){return elem(t)}):elem(s)}}},function(t){t.O(0,[61,306,447,413,971,472,744],function(){return t(t.s=5923)}),_N_E=t.O()}]);