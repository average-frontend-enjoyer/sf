(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&e.push(c)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(n=(function(){return o}).apply(t,[]))&&(e.exports=n)}()},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1949)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),c=n(1003),s=n(7795),i=n(4465),a=n(2692),u=n(8245),f=n(9246),d=n(227),h=n(3468);let p=new Set;function v(e,t,n,r){if(c.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(p.has(l))return;p.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function m(e){return"string"==typeof e?e:s.formatUrl(e)}let x=l.default.forwardRef(function(e,t){let n,r;let{href:s,as:p,children:x,prefetch:g,passHref:_,replace:w,shallow:j,scroll:y,locale:C,onClick:M,onMouseEnter:b,onTouchStart:k,legacyBehavior:N=!1}=e,E=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=x,N&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==g,O=l.default.useContext(a.RouterContext),P=l.default.useContext(u.AppRouterContext),z=null!=O?O:P,S=!O,{href:R,as:T}=l.default.useMemo(()=>{if(!O){let e=m(s);return{href:e,as:p?m(p):e}}let[e,t]=c.resolveHref(O,s,!0);return{href:e,as:p?c.resolveHref(O,p):t||e}},[O,s,p]),B=l.default.useRef(R),I=l.default.useRef(T);N&&(r=l.default.Children.only(n));let H=N?r&&"object"==typeof r&&r.ref:t,[V,D,W]=f.useIntersection({rootMargin:"200px"}),A=l.default.useCallback(e=>{(I.current!==T||B.current!==R)&&(W(),I.current=T,B.current=R),V(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[T,H,R,W,V]);l.default.useEffect(()=>{z&&D&&L&&v(z,R,T,{locale:C})},[T,R,D,C,L,null==O?void 0:O.locale,z]);let J={ref:A,onClick(e){N||"function"!=typeof M||M(e),N&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,n,r,o,s,i,a,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:s,locale:a,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(p):p()}(e,z,R,T,w,j,y,C,S,L)},onMouseEnter(e){N||"function"!=typeof b||b(e),N&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&(L||!S)&&v(z,R,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){N||"function"!=typeof k||k(e),N&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&(L||!S)&&v(z,R,T,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(T,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);J.href=t||h.addBasePath(i.addLocale(T,e,null==O?void 0:O.defaultLocale))}return N?l.default.cloneElement(r,J):l.default.createElement("a",Object.assign({},E,J),n)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:i}=e,a=i||!l,[u,f]=r.useState(!1),d=r.useRef(null),h=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(a||u)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=c.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},s.push(n),c.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),c.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!u){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[a,n,t,u,d.current]);let p=r.useCallback(()=>{f(!1)},[]);return[h,u,p]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,c=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2120:function(e,t,n){"use strict";var r,o;n.d(t,{V:function(){return l},g:function(){return r}}),(o=r||(r={})).Instagram="instagram",o.Reddit="reddit",o.Onlyfans="onlyfans",o.Twitter="twitter";class l{static default(){return{common:{title:"",background:{left:"",right:""}},header:{avatar:"",subtitle:"",description:""},content:{default:[]},footer:{socials:{[r.Instagram]:"",[r.Reddit]:"",[r.Onlyfans]:"",[r.Twitter]:""}}}}}},3593:function(e,t,n){"use strict";n.d(t,{Eh:function(){return i},X1:function(){return a},mr:function(){return u},NJ:function(){return f},JP:function(){return d},tL:function(){return h}});var r=n(5893),o=n(4184),l=n.n(o),c=n(8086),s=n.n(c);let i=e=>{let{direction:t,className:n,...o}=e;return(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:l()(s()["arrow_".concat(t)],n),...o,children:(0,r.jsx)("path",{id:"Vector",d:"M5 12H19M19 12L13 6M19 12L13 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})},a=e=>(0,r.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{d:"M18.75 5.25L5.25 18.75",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.jsx)("path",{d:"M18.75 18.75L5.25 5.25",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),u=e=>(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"-2 -2 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z",stroke:"currentColor",strokeWidth:.9})}),f=e=>(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"-1.5 -2 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M16.165 17.236h0.038c0.007-0 0.016-0 0.025-0 0.95 0 1.721 0.77 1.721 1.721 0 0.726-0.449 1.347-1.085 1.599l-0.012 0.004h-0.107v1.445c0 0.001 0 0.002 0 0.003 0 0.221-0.115 0.416-0.288 0.527l-0.002 0.002h-0.639c-0.18-0.116-0.298-0.315-0.3-0.542v-1.434c-0.647-0.257-1.096-0.878-1.096-1.603 0-0.95 0.77-1.721 1.721-1.721 0.009 0 0.018 0 0.027 0l-0.001-0zM15.585 10.743h1.006c0.853 0.003 1.626 0.348 2.187 0.905l-0-0c0.561 0.546 0.91 1.308 0.912 2.151v0l0.004 1.262h-7.21v-1.262c0.002-0.844 0.351-1.606 0.912-2.151l0.001-0.001c0.562-0.557 1.334-0.903 2.188-0.906h0.001zM15.585 8.281c-0.001 0-0.002 0-0.004 0-1.54 0-2.936 0.62-3.951 1.624l0.001-0.001c-1.016 0.986-1.646 2.365-1.646 3.89 0 0.002 0 0.003 0 0.005v-0 1.223l-0.695 1.253v1.804c0.003 1.696 0.703 3.228 1.829 4.325l0.001 0.001c1.133 1.113 2.688 1.799 4.403 1.799 0.003 0 0.006 0 0.008 0h1.119c1.714-0 3.267-0.687 4.4-1.8l-0.001 0.001c1.129-1.097 1.831-2.63 1.833-4.326v-1.806l-0.687-1.253v-1.225c-0.002-1.527-0.633-2.906-1.648-3.893l-0.001-0.001c-1.014-1.003-2.41-1.623-3.95-1.623-0.002 0-0.004 0-0.006 0h0zM15.985 2.574c0.001 0 0.002 0 0.003 0 7.415 0 13.427 6.011 13.427 13.427s-6.011 13.427-13.427 13.427c-7.415 0-13.427-6.011-13.427-13.427 0-0.002 0-0.003 0-0.005v0c0-0.001 0-0.001 0-0.002 0-7.412 6.009-13.421 13.421-13.421 0.001 0 0.002 0 0.003 0h-0zM16 1.004c0 0 0 0-0 0-8.282 0-14.996 6.714-14.996 14.996s6.714 14.996 14.996 14.996c8.282 0 14.996-6.714 14.996-14.996v0c-0-8.282-6.714-14.995-14.996-14.996h-0z",fill:"currentColor"})}),d=e=>(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 1024 1024",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M664.6 729.8c-9.6-2.6-21.198.8-35.398 10.201l-1.4 1.2c-23 23-64.8 34.6-124.2 34.6s-101.2-11.6-124.2-34.6c-9.6-9.6-29-9.6-38.6 0-10 10-10 28.6.6 39.2C384 816 437.6 832.6 509.8 832.6c75 0 135-18.8 169-52.8 4.8-4.8 7.6-11.8 7.6-19.2 0-6.8-2.4-13.4-6.4-18-4.6-8.4-10.8-11.6-15.4-12.8zM438.2 579.399c0-44.2-37.2-84.4-78.2-84.4s-78.2 40.2-78.2 84.4c0 42.4 35.8 78.2 78.2 78.2s78.2-35.8 78.2-78.2zm221.401-78.2c-42.4 0-78.2 35.8-78.2 78.2s35.8 78.2 78.2 78.2 78.2-35.8 78.2-78.2-35.8-78.2-78.2-78.2zm237-124.8c-25.6 0-55.6 11.6-75.8 28.6-68-43.2-159.8-70-267.2-77.8l50-167 140.2 33.6c4.2 51.8 50.4 95.599 102.801 95.599 55 0 103.2-48.2 103.2-103.2s-48.2-103.2-103.2-103.2c-37.8 0-76 23-92.8 54.6l-166.8-41.8-2.4-.2c-11.4 0-27.2 10-28.2 26.6l-66 204.2c-105.2 1.2-208.601 29.2-292.4 79.4-25-15.6-49.6-23.2-75-23.2-67.2 0-122 54.6-122 122 0 42 20.2 79.4 56.2 99.4V629.4c0 87.2 47 163.2 135.2 220 83 57.4 195.8 89 317.6 89s237.8-31.6 320.8-89c87.2-60.4 138.4-138.6 138.4-220v-26c26-22.8 52.8-63.6 52.8-105.2-.2-67.2-58-121.8-125.401-121.8zm65.4 128.201c0 11.4-6.401 27.6-17.001 39.6-12.6-33.4-36.4-65-74.6-99.4 7.6-3.2 16-5.4 26.4-5.4 38.401-.2 65.201 26.8 65.201 65.2zM905.8 629.399c0 78-59 137.201-107.8 172.801-84.8 52.2-184.399 79.8-288.199 79.8-107.2 0-212.2-29-288-79.6-74.8-49.8-114.2-109.6-114.2-173s39.4-123.2 114.2-173c77-51.2 177-79.6 281.8-79.6 107.2 0 212.2 29 288 79.6 74.6 49.799 114.199 109.6 114.199 173zM150.399 442.4c-32.2 25.6-59.6 59.8-78.8 98.6-7.8-12.599-14-25-14-36.4 0-38.4 26.8-65.2 65.2-65.2 13-.2 21 0 27.6 3zM800.2 186.401c0-26.2 20.4-46.6 46.6-46.6s46.601 20.4 46.601 46.6-20.4 46.6-46.6 46.6c-26.2-.2-46.601-20.6-46.601-46.6z",fill:"currentColor",strokeWidth:.5})}),h=e=>(0,r.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M56 16.46a67.49 67.49 0 0 0-8.11-.73 9.75 9.75 0 0 0-16.56 8.91c-8.08-.41-14.2-4.56-19.92-10.73-.78 1.52-2.26 6.37-1.11 9.87a19.1 19.1 0 0 0 6.75 8.59 26.05 26.05 0 0 1-8.52-1.85c1.41 4.63 6.25 11.35 13.86 12.4a19.46 19.46 0 0 1-12.07 4.19A19.66 19.66 0 0 1 8 47a27.42 27.42 0 0 0 14.9 4.39c17.87 0 27.65-14.89 27.65-27.81v-1.27z",stroke:"currentColor",strokeWidth:3})})},6253:function(e,t,n){"use strict";n.d(t,{Gx:function(){return s},r0:function(){return i},_H:function(){return a}});var r=n(7294),o=n(2120);let l=(0,r.createContext)({content:o.V.default(),setContent:null});var c=n(5893);let s=e=>{let{children:t}=e,[n,s]=(0,r.useState)(o.V.default());return(0,c.jsx)(l.Provider,{value:{content:n,setContent:s},children:t})};function i(){return(0,r.useContext)(l)}function a(e){let{content:t,setContent:n}=(0,r.useContext)(l);return(0,r.useEffect)(()=>{n&&n(e)},[]),t}},5733:function(e,t,n){"use strict";n.d(t,{DY:function(){return i},dd:function(){return l},vR:function(){return c}});var r=n(7294);let o=(0,r.createContext)({openModal(){},closeModal(){},setModalBody:null,modalContext:{isModalOpened:!1,closeModal(){},modalBody:(0,r.createElement)(r.Fragment)}});function l(e){let{openModal:t,closeModal:n,setModalBody:l}=(0,r.useContext)(o),c=()=>{e&&l&&l(e),t()};return{openModal:c,closeModal:n}}function c(){let{modalContext:e}=(0,r.useContext)(o);return e}var s=n(5893);let i=e=>{let{children:t}=e,[n,l]=(0,r.useState)(!1),[c,i]=(0,r.useState)((0,s.jsx)(s.Fragment,{})),a=()=>l(!1);return(0,s.jsx)(o.Provider,{value:{openModal:()=>l(!0),closeModal:a,setModalBody:i,modalContext:{isModalOpened:n,modalBody:c,closeModal:a}},children:t})}},1949:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),o=n(7294),l=n(6253),c=n(5733);n(7301);let s=()=>{let{content:{common:{title:e,background:t}}}=(0,l.r0)();return(0,r.jsxs)("aside",{className:"background",children:[(0,r.jsx)("img",{className:"background__left",src:t.left,alt:e}),(0,r.jsx)("img",{className:"background__right",src:t.right,alt:e})]})};var i=n(2120),a=n(3593),u=n(4184),f=n.n(u),d=n(1664),h=n.n(d),p=n(8801),v=n.n(p);let m=e=>{let{className:t,icon:n,url:o}=e;return(0,r.jsx)(h(),{className:f()(v().icon,t),href:o,target:"_blank",children:n})},x={[i.g.Instagram]:(0,r.jsx)(a.mr,{}),[i.g.Onlyfans]:(0,r.jsx)(a.NJ,{}),[i.g.Reddit]:(0,r.jsx)(a.JP,{}),[i.g.Twitter]:(0,r.jsx)(a.tL,{})};n(5609);let g=e=>{let{className:t}=e,n=function(){let{content:{footer:{socials:e}}}=(0,l.r0)();return(0,o.useMemo)(()=>Object.entries(e).map((e,t)=>{let[n,o]=e;return o?(0,r.jsx)(m,{className:"icon-gallery__icon",icon:x[n],url:o},o+t):null}),[JSON.stringify(e)])}();return(0,r.jsx)("aside",{className:f()("icon-gallery",t),children:n})};n(845);let _=e=>{let{className:t}=e,{content:{common:{title:n}}}=(0,l.r0)(),c=(0,o.useCallback)(()=>{window.document.body.scrollTo({top:0,behavior:"smooth"})},[]);return(0,r.jsxs)("footer",{className:f()("footer",t),children:[(0,r.jsx)("h3",{className:"footer__title",onClick:c,children:n}),(0,r.jsx)(g,{className:"footer__icon-gallery"})]})};n(2430);let w=e=>{let{className:t}=e,{content:{header:n,common:o}}=(0,l.r0)();return(0,r.jsxs)("header",{className:f()("header",t),children:[n.avatar&&(0,r.jsx)("img",{className:"header__avatar",src:n.avatar,alt:o.title}),(0,r.jsxs)("div",{className:"header__text",children:[(0,r.jsx)("h1",{className:"header__title",children:o.title}),(0,r.jsx)("h3",{className:"header__subtitle",children:n.subtitle}),(0,r.jsx)("span",{className:"header__description",children:n.description})]})]})};var j=n(3935);let y=e=>{let{children:t}=e,[n,r]=(0,o.useState)(!1),l=(0,o.useRef)(null);return(0,o.useEffect)(()=>{r(!0);let{documentElement:e}=document;return l.current=document.createElement("portal"),e.appendChild(l.current),()=>{r(!1),l.current&&l.current.remove()}},[]),n&&l.current?(0,j.createPortal)(t,l.current):null};n(9902);let C=()=>{let{closeModal:e,modalBody:t,isModalOpened:n}=(0,c.vR)(),l=(0,o.useRef)(null);return((0,o.useEffect)(()=>{function t(t){let n=null==l?void 0:l.current;!n||n.contains(t.target)||e(t)}return window.addEventListener("click",t),()=>{window.removeEventListener("click",t)}},[l,e]),n)?(0,r.jsx)(y,{children:(0,r.jsx)("aside",{className:"modal",children:(0,r.jsxs)("div",{ref:l,className:"modal__content",children:[(0,r.jsx)("header",{className:"modal__header",children:(0,r.jsx)(a.X1,{role:"button",className:"modal__close-icon",onClick:e})}),t]})})}):null};n(9688);let M=e=>{let{children:t}=e;return!function(){let e=()=>{let e=window.document.documentElement.clientHeight;window.document.documentElement.style.setProperty("--viewport-height-unit","".concat(e/100,"px"))};(0,o.useEffect)(()=>(e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}),[])}(),(0,r.jsxs)(l.Gx,{children:[(0,r.jsx)("main",{className:"layout__content",children:(0,r.jsxs)(c.DY,{children:[(0,r.jsx)(w,{className:"layout__header"}),t,(0,r.jsx)(_,{className:"layout__footer"}),(0,r.jsx)(C,{})]})}),(0,r.jsx)(s,{})]})};n(9133);var b=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsx)(M,{children:(0,r.jsx)(t,{...n})})}},5609:function(){},9688:function(){},7301:function(){},845:function(){},2430:function(){},9902:function(){},9133:function(){},8086:function(e){e.exports={arrow_right:"arrow_arrow_right__lzRfU",arrow_left:"arrow_arrow_left__KeFPs"}},8801:function(e){e.exports={icon:"icon_icon__Ho0uM"}},1664:function(e,t,n){e.exports=n(1551)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);