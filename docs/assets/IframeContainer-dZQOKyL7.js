var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{bT as l,l as o,aa as u,dB as f,d as m,a8 as h,a as d,a9 as c,o as p,p as g,b as w,w as v,g as b,s as y,e as k,cq as O,cA as P,dC as j,dD as I,H as L,O as _,av as F,bN as R,c as x,q as C}from"./index-n-eiTXQj.js";import{_ as q}from"./Spin-DkpQSxhN.js";import"./use-compitable-CYXn6I1v.js";const A={class:"w-full h-full"},D=["src"],E=m({__name:"IframePage",props:h({iframeLink:{default:""}},{width:{default:0},widthModifiers:{},height:{default:0},heightModifiers:{}}),emits:["update:width","update:height"],setup(e){const a=d(),t=c(e,"width"),r=c(e,"height"),s=d(!0);function n(){s.value=!1}return(e,i)=>{const l=q;return p(),g("div",A,[w(l,{show:k(s)},{default:v((()=>[b("iframe",{ref_key:"frameRef",ref:a,src:e.iframeLink,style:y({width:`${t.value}px`,height:`${r.value}px`}),class:"rounded-2xl",onLoad:n},null,44,D)])),_:1},8,["show"])])}}}),M={key:0,class:"w-full h-full"},S=m(($=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&i(e,t,a[t]);return e})({},{name:"IframeLayout"}),a($,t({__name:"IframeContainer",setup(e){const{getCanEmbedIFramePage:a}=O(),{getFramePages:t,hasRenderFrame:r,showIframe:s}=function(){const e=l(),{currentRoute:a}=e;function t(e){let a=[];for(const r of e){const{meta:{iframeLink:e}={},children:s}=r;e&&a.push(r),s&&s.length&&a.push(...t(s))}return a=f(a,"name"),a}return{hasRenderFrame:function(e){return a.value.name===e},getFramePages:o((()=>t(u(e.getRoutes())))),showIframe:function(e){return e.name===a.value.name},getAllFramePages:t}}(),n=o((()=>P(t).length>0)),i=j(),{height:m,width:h}=I(i);return(e,i)=>k(a)&&k(n)?(p(),g("div",M,[(p(!0),g(L,null,_(k(t),(e=>{var a,t;return p(),g(L,{key:e.path},[(null==(a=null==e?void 0:e.meta)?void 0:a.iframeLink)&&k(r)(e.name)?F((p(),x(E,{key:0,height:k(m),width:k(h),"iframe-link":null==(t=null==e?void 0:e.meta)?void 0:t.iframeLink},null,8,["height","width","iframe-link"])),[[R,k(s)(e)]]):C("",!0)],64)})),128))])):C("",!0)}}))));var $;export{S as default};
