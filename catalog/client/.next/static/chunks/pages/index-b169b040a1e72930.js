(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2873)}])},2873:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return J},default:function(){return M}});var r=n(5893),s=n(7294),a=n(6253),l=n(3593),c=n(4184),o=n.n(c),i=n(1664),u=n.n(i);n(7659);let d=e=>{let{type:t,isSelected:n,text:s,action:a,link:c,className:i,isNewTab:d}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{className:o()("button",{button_selected:n,button_primary:"primary"===t,button_secondary:"secondary"===t,button_tag:"tag"===t},i),onClick:a,children:(0,r.jsxs)("div",{className:"button__content",children:[n&&(0,r.jsx)(l.X1,{className:"button__icon"}),(0,r.jsx)("span",{className:"button__text",children:s}),c&&(0,r.jsx)(u(),{className:"button__link",href:c,target:d?"_blank":"_self"})]})})})};n(1791);let _=e=>{let{tags:t,className:n}=e,a=(0,s.useMemo)(()=>t.map((e,t)=>(0,r.jsx)(d,{type:"tag",...e},e.text+t)),[JSON.stringify(t)]);return(0,r.jsx)("aside",{className:o()("tag-list",n),children:a})};var m=n(2544),p=n(2546);n(6797),n(1082),n(6388);let h=e=>{let{slides:t,slidesPerView:n,spaceBetween:a,scrollDelay:c=700,breakpoints:i,hasScreenWidth:u,classNames:d={},onSwiper:_}=e,h=(0,s.useRef)(null),x=(0,s.useRef)(null),{swiper:f,initSwiper:w}=function(e){let t=t=>{r(t),e&&e(t)},[n,r]=(0,s.useState)();return{swiper:n,initSwiper:t}}(_),g=function(e){let t=(0,s.useCallback)(t=>{var n;let{currentTarget:r}=t;if(!e||!(null==r?void 0:null===(n=r.parentElement)||void 0===n?void 0:n.children))return;let s=Array.from(r.parentElement.children).indexOf(r);e.slideTo(s)},[e]);return{onSlideFocus:t}}(f),b=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:550,n=(0,s.useRef)(null),[r,a]=(0,s.useState)({}),l=()=>{n.current&&(clearTimeout(n.current),n.current=null)};return(0,s.useEffect)(()=>{if(e)return a({onEnter:()=>{e.mousewheel&&(e.mousewheel.disable(),n.current=setTimeout(()=>{e.mousewheel.enable(),l()},t))},onLeave:()=>{e.mousewheel&&(e.mousewheel.disable(),l())}}),()=>{l()}},[e]),r}(f,c);return(0,r.jsxs)("div",{className:o()("card-swiper",d.root),onMouseEnter:b.onEnter,onMouseLeave:b.onLeave,children:[(0,r.jsx)("button",{className:o()("card-swiper__control-button","card-swiper__control-button_left",d.controls),ref:x,children:(0,r.jsx)(l.Eh,{direction:"left"})}),(0,r.jsx)("button",{className:o()("card-swiper__control-button","card-swiper__control-button_right",d.controls),ref:h,children:(0,r.jsx)(l.Eh,{direction:"right"})}),(0,r.jsx)(p.tq,{className:o()("card-swiper__swiper",{"card-swiper__swiper_screen-width":u},d.swiper),onSwiper:w,slidesPerView:n,spaceBetween:a,modules:[m.W_,m.Gk],mousewheel:{releaseOnEdges:!0,forceToAxis:!0},breakpoints:i,navigation:{nextEl:h.current,prevEl:x.current,lockClass:"card-swiper__lock"},children:t.map(e=>(0,r.jsx)(p.o5,{onFocus:g.onSlideFocus,className:o()("card-swiper__slide",d.slide),children:e.element},e.key))})]})},x={asSlides:e=>e.map((e,t)=>({element:e,key:"".concat(e.key," ").concat(t)}))};var f=n(6430),w=n.n(f);n(6315);let g=e=>{let{src:t,width:n="100%",controls:r=!0,autoPlay:a=!0,className:l,...c}=e;return(0,s.createElement)("video",{src:t,width:n,controls:r,autoPlay:a,className:o()("video",l),...c})};var b=n(8449),j=n.n(b);let v=e=>{let{title:t,src:n,button:a,className:l}=e;return(0,r.jsxs)("article",{className:o()(j().teaser,l),children:[(0,r.jsx)("header",{className:j().header,children:t}),(0,r.jsx)(g,{src:n}),(0,s.cloneElement)(a,{className:j().button})]})};var N=n(5733);let y=e=>{let{preview:{thumbnail:t,src:n,duration:a},title:l,description:c,messageId:i,className:u,..._}=e,m=function(e){let{link:t}=e;return(0,s.useMemo)(()=>(0,s.createElement)(d,{type:"primary",text:"click to buy",link:t,className:w().button,isNewTab:!0}),[t])}(_),p=function(e){let t=(0,s.createElement)(v,e),{openModal:n}=(0,N.dd)(t);return n}({title:l,src:n,button:m});return(0,r.jsxs)("article",{className:o()(w().card,u),children:[(0,r.jsxs)("div",{className:w().preview,onClick:p,children:[(0,r.jsx)("img",{src:t,alt:l,sizes:"100%",className:w().previewImage}),(0,r.jsx)("span",{role:"button",className:w().play}),a&&(0,r.jsx)("span",{className:w().duration,children:a})]}),(0,r.jsxs)("div",{className:w().content,children:[(0,r.jsx)("h2",{className:w().title,children:l}),(0,r.jsx)("p",{className:w().description,children:c}),(0,r.jsxs)("span",{children:["Message me: ",(0,r.jsx)("span",{className:w().messageId,children:i})]}),m]})]})},k={byOrder:(e,t,n)=>{var r,s;let{tags:a,order:l}=e,{tags:c,order:o}=t,i=null!==(r=l[a.indexOf(n)])&&void 0!==r?r:0,u=null!==(s=o[c.indexOf(n)])&&void 0!==s?s:0;return i-u}};var E=n(8469),S=n.n(E);n(6628);let C=e=>{let{tag:t,content:n}=e,a={[parseInt(S().mobile)]:{slidesPerView:"auto"}},{isExpandedView:l,toggleView:c,forceExpandedView:i,showExpandButton:u}=function(){let[e,t]=(0,s.useState)(!1),[n,r]=(0,s.useState)(!0),a=(0,s.useCallback)(()=>t(e=>!e),[]),l=(0,s.useCallback)(e=>{e.isBeginning&&!e.allowSlideNext&&r(!1)},[]);return{isExpandedView:e,toggleView:a,forceExpandedView:l,showExpandButton:n}}(),_=(0,s.useMemo)(()=>{let e=n.sort(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return k.byOrder(...n,t)});return e.map((e,t)=>{let n=e.messageId+t;return(0,s.createElement)(y,{...e,key:n})})},[l,n]);return n.length?(0,r.jsxs)("section",{className:"category",children:[(0,r.jsxs)("header",{className:"category__header",children:[(0,r.jsx)("h2",{className:"category__title",children:t}),(0,r.jsx)("span",{className:"category__badge",children:n.length})]}),(0,r.jsx)("div",{className:o()("category__content",{category__content_expanded:l}),children:l?_:(0,r.jsx)(h,{spaceBetween:10,slides:x.asSlides(_),slidesPerView:1,breakpoints:a,classNames:{controls:"category__controls",slide:"category__slide"},onSwiper:i})}),u&&(0,r.jsx)(d,{text:"".concat(l?"Collapse":"Show All"," ").concat(t),type:"secondary",className:"category__button",action:c})]}):null};n(1379);let O=e=>{let{className:t}=e,{tags:n,displayedCategories:l}=function(){let{content:{content:e}}=(0,a.r0)(),t=Object.keys(e),[n,r]=(0,s.useState)([]),l=(0,s.useCallback)(e=>{r(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),c=t.reduce((t,r)=>e[r].length?[...t,{text:r,action:()=>l(r),isSelected:n.includes(r)}]:t,[]).sort(e=>"popular"===e.text.toLowerCase()?-1:0),o=Object.entries(e).sort(e=>{let[t]=e;return"popular"===t.toLowerCase()?-1:0}).reduce((e,t,r)=>{let[a,l]=t;if(!n.length||n.includes(a)){let t=(0,s.createElement)(C,{tag:a,content:l,key:a+r});return[...e,t]}return e},[]);return{tags:c,displayedCategories:o}}();return(0,r.jsxs)("div",{className:o()("content",t),children:[(0,r.jsx)("div",{className:"content__tags",children:(0,r.jsx)(_,{tags:n})}),l]})};n(4019);let T=e=>{let{content:t}=e;return(0,a._H)(t),!function(){let{content:{common:{title:e}}}=(0,a.r0)();(0,s.useEffect)(()=>{document.title=e},[e])}(),(0,r.jsx)(O,{})},I=e=>(0,r.jsx)(T,{...e});var J=!0,M=I},7659:function(){},6388:function(){},6315:function(){},6628:function(){},1791:function(){},4019:function(){},1379:function(){},8469:function(e){e.exports={mobile:"720px",tablet:"1140px",desktop:"1440px"}},8449:function(e){e.exports={teaser:"video-teaser_teaser__0U3fv",header:"video-teaser_header__BmJ_G",button:"video-teaser_button__r_d3S"}},6430:function(e){e.exports={card:"card_card__qJfa0",content:"card_content__eqTDh",preview:"card_preview__tQpmX",play:"card_play__kmB5t","preview-image":"card_preview-image__3gGA9",previewImage:"card_preview-image__3gGA9",duration:"card_duration__blJwh",title:"card_title__wyHTW",description:"card_description__JswJJ",button:"card_button__WgijD",messageId:"card_messageId__jYpKa"}}},function(e){e.O(0,[944,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);