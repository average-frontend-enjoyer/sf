(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9774)}])},9774:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return J},default:function(){return O}});var s=n(5893),r=n(7294),a=n(6253),l=n(3593),c=n(4184),i=n.n(c),o=n(1664),u=n.n(o);n(7659);let d=e=>{let{type:t,isSelected:n,text:r,action:a,link:c,className:o,isNewTab:d}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("button",{className:i()("button",{button_selected:n,button_primary:"primary"===t,button_secondary:"secondary"===t,button_tag:"tag"===t},o),onClick:a,children:(0,s.jsxs)("div",{className:"button__content",children:[n&&(0,s.jsx)(l.X1,{className:"button__icon"}),(0,s.jsx)("span",{className:"button__text",children:r}),c&&(0,s.jsx)(u(),{className:"button__link",href:c,target:d?"_blank":"_self"})]})})})};n(1791);let _=e=>{let{tags:t,className:n}=e,a=(0,r.useMemo)(()=>t.map((e,t)=>(0,s.jsx)(d,{type:"tag",...e},e.text+t)),[JSON.stringify(t)]);return(0,s.jsx)("aside",{className:i()("tag-list",n),children:a})};var m=n(2544),p=n(2546);n(6797),n(1082),n(6388);let h=e=>{let{slides:t,slidesPerView:n,spaceBetween:a,scrollDelay:c=700,breakpoints:o,hasScreenWidth:u,classNames:d={},onSwiper:_}=e,h=(0,r.useRef)(null),x=(0,r.useRef)(null),{swiper:f,initSwiper:w}=function(e){let t=t=>{s(t),e&&e(t)},[n,s]=(0,r.useState)();return{swiper:n,initSwiper:t}}(_),g=function(e){let t=(0,r.useCallback)(t=>{var n;let{currentTarget:s}=t;if(!e||!(null==s?void 0:null===(n=s.parentElement)||void 0===n?void 0:n.children))return;let r=Array.from(s.parentElement.children).indexOf(s);e.slideTo(r)},[e]);return{onSlideFocus:t}}(f),j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:550,n=(0,r.useRef)(null),[s,a]=(0,r.useState)({}),l=()=>{n.current&&(clearTimeout(n.current),n.current=null)};return(0,r.useEffect)(()=>{if(e)return a({onEnter:()=>{e.mousewheel&&(e.mousewheel.disable(),n.current=setTimeout(()=>{e.mousewheel.enable(),l()},t))},onLeave:()=>{e.mousewheel&&(e.mousewheel.disable(),l())}}),()=>{l()}},[e]),s}(f,c);return(0,s.jsxs)("div",{className:i()("card-swiper",d.root),onMouseEnter:j.onEnter,onMouseLeave:j.onLeave,children:[(0,s.jsx)("button",{className:i()("card-swiper__control-button","card-swiper__control-button_left",d.controls),ref:x,children:(0,s.jsx)(l.Eh,{direction:"left"})}),(0,s.jsx)("button",{className:i()("card-swiper__control-button","card-swiper__control-button_right",d.controls),ref:h,children:(0,s.jsx)(l.Eh,{direction:"right"})}),(0,s.jsx)(p.tq,{className:i()("card-swiper__swiper",{"card-swiper__swiper_screen-width":u},d.swiper),onSwiper:w,slidesPerView:n,spaceBetween:a,modules:[m.W_,m.Gk],mousewheel:{releaseOnEdges:!0,forceToAxis:!0},breakpoints:o,navigation:{nextEl:h.current,prevEl:x.current,lockClass:"card-swiper__lock"},children:t.map(e=>(0,s.jsx)(p.o5,{onFocus:g.onSlideFocus,className:i()("card-swiper__slide",d.slide),children:e.element},e.key))})]})},x={asSlides:e=>e.map((e,t)=>({element:e,key:"".concat(e.key," ").concat(t)}))};var f=n(6430),w=n.n(f);n(6315);let g=e=>{let{src:t,width:n="100%",controls:s=!0,autoPlay:a=!0,className:l,...c}=e;return(0,r.createElement)("video",{src:t,width:n,controls:s,autoPlay:a,className:i()("video",l),...c})};var j=n(8449),N=n.n(j);let b=e=>{let{title:t,src:n,button:a,className:l}=e;return(0,s.jsxs)("article",{className:i()(N().teaser,l),children:[(0,s.jsx)("header",{className:N().header,children:t}),(0,s.jsx)(g,{src:n}),(0,r.cloneElement)(a,{className:N().button})]})};var v=n(5733);let y=e=>{let{preview:{thumbnail:t,src:n,duration:a},title:l,description:c,messageId:o,className:u,..._}=e,m=(0,r.useMemo)(()=>{let{price:e,discountedPrice:t,link:n}=_,a=(0,s.jsxs)(s.Fragment,{children:["Buy Now For",t?(0,s.jsxs)(s.Fragment,{children:["\xa0",(0,s.jsx)("s",{children:"$".concat(e)}),"\xa0","$".concat(t)]}):(0,s.jsxs)(s.Fragment,{children:["\xa0","$".concat(e)]})]});return(0,r.createElement)(d,{type:"primary",text:a,link:n,className:w().button,isNewTab:!0})},[JSON.stringify(_)]),p=function(e){let t=(0,r.createElement)(b,e),{openModal:n}=(0,v.dd)(t);return n}({title:l,src:n,button:m});return(0,s.jsxs)("article",{className:i()(w().card,u),children:[(0,s.jsxs)("div",{className:w().preview,onClick:p,children:[(0,s.jsx)("img",{src:t,alt:l,sizes:"100%",className:w().previewImage}),(0,s.jsx)("span",{role:"button",className:w().play}),a&&(0,s.jsx)("span",{className:w().duration,children:a})]}),(0,s.jsxs)("div",{className:w().content,children:[(0,s.jsx)("h2",{className:w().title,children:l}),(0,s.jsx)("p",{className:w().description,children:c}),(0,s.jsxs)("span",{children:["Message me: ",(0,s.jsx)("span",{className:w().messageId,children:o})]}),m]})]})};var k=n(8469),E=n.n(k);n(6628);let S=e=>{let{title:t,content:n}=e,a={[parseInt(E().mobile)]:{slidesPerView:"auto"}},{isExpandedView:l,toggleView:c,forceExpandedView:o,showExpandButton:u}=function(){let[e,t]=(0,r.useState)(!1),[n,s]=(0,r.useState)(!0),a=(0,r.useCallback)(()=>{t(e=>!e)},[]),l=(0,r.useCallback)(e=>{e.isBeginning&&!e.allowSlideNext&&s(!1)},[]);return{isExpandedView:e,toggleView:a,forceExpandedView:l,showExpandButton:n}}(),_=(0,r.useMemo)(()=>n.map((e,t)=>{let n=e.messageId+t;return(0,r.createElement)(y,{...e,key:n})}),[l,n]);return n.length?(0,s.jsxs)("section",{className:"category",children:[(0,s.jsxs)("header",{className:"category__header",children:[(0,s.jsx)("h2",{className:"category__title",children:t}),(0,s.jsx)("span",{className:"category__badge",children:n.length})]}),(0,s.jsx)("div",{className:i()("category__content",{category__content_expanded:l}),children:l?_:(0,s.jsx)(h,{spaceBetween:10,slides:x.asSlides(_),slidesPerView:1,breakpoints:a,classNames:{controls:"category__controls",slide:"category__slide"},onSwiper:o})}),u&&(0,s.jsx)(d,{text:"".concat(l?"Collapse":"Show All"," ").concat(t),type:"secondary",className:"category__button",action:c})]}):null};n(1379);let C=e=>{let{className:t}=e,{tags:n,displayedCategories:l}=function(){let{content:{content:e}}=(0,a.r0)(),t=Object.keys(e),[n,s]=(0,r.useState)([]),l=(0,r.useCallback)(e=>{s(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},[]),c=t.reduce((t,s)=>e[s].length?[...t,{text:s,action:()=>l(s),isSelected:n.includes(s)}]:t,[]).sort(e=>"popular"===e.text.toLowerCase()?-1:0),i=Object.entries(e).sort(e=>{let[t]=e;return"popular"===t.toLowerCase()?-1:0}).reduce((e,t,s)=>{let[a,l]=t;if(!n.length||n.includes(a)){let t=(0,r.createElement)(S,{title:a,content:l,key:a+s});return[...e,t]}return e},[]);return{tags:c,displayedCategories:i}}();return(0,s.jsxs)("div",{className:i()("content",t),children:[(0,s.jsx)("div",{className:"content__tags",children:(0,s.jsx)(_,{tags:n})}),l]})};n(4019);let T=e=>{let{content:t}=e;return(0,a._H)(t),!function(){let{content:{common:{title:e}}}=(0,a.r0)();(0,r.useEffect)(()=>{document.title=e},[e])}(),(0,s.jsx)(C,{})},F=e=>(0,s.jsx)(T,{...e});var J=!0,O=F},7659:function(){},6388:function(){},6315:function(){},6628:function(){},1791:function(){},4019:function(){},1379:function(){},8469:function(e){e.exports={mobile:"720px",tablet:"1140px",desktop:"1440px"}},8449:function(e){e.exports={teaser:"video-teaser_teaser__0U3fv",header:"video-teaser_header__BmJ_G",button:"video-teaser_button__r_d3S"}},6430:function(e){e.exports={card:"card_card__qJfa0",content:"card_content__eqTDh",preview:"card_preview__tQpmX",play:"card_play__kmB5t","preview-image":"card_preview-image__3gGA9",previewImage:"card_preview-image__3gGA9",duration:"card_duration__blJwh",title:"card_title__wyHTW",description:"card_description__JswJJ",button:"card_button__WgijD",messageId:"card_messageId__jYpKa"}}},function(e){e.O(0,[944,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);