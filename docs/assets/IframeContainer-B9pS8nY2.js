var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{b$ as l,l as o,aa as u,dH as f,d as m,a8 as h,a as d,a9 as c,o as p,p as g,b as w,w as v,g as b,s as y,e as k,cy as O,cI as P,dI as j,dJ as I,H as L,O as _,av as F,bW as R,c as x,q as $}from"./index-BvLEaQlu.js";import{_ as C}from"./Spin-CxnFFyN6.js";import"./use-compitable-vUBiDS_e.js";const E={class:"w-full h-full"},H=["src"],M=m({__name:"IframePage",props:h({iframeLink:{default:""}},{width:{default:0},widthModifiers:{},height:{default:0},heightModifiers:{}}),emits:["update:width","update:height"],setup(e){const a=d(),t=c(e,"width"),r=c(e,"height"),s=d(!0);function n(){s.value=!1}return(e,i)=>{const l=C;return p(),g("div",E,[w(l,{show:k(s)},{default:v((()=>[b("iframe",{ref_key:"frameRef",ref:a,src:e.iframeLink,style:y({width:`${t.value}px`,height:`${r.value}px`}),class:"rounded-2xl",onLoad:n},null,44,H)])),_:1},8,["show"])])}}}),S={key:0,class:"w-full h-full"},q=m((A=((e,a)=>{for(var t in a||(a={}))s.call(a,t)&&i(e,t,a[t]);if(r)for(var t of r(a))n.call(a,t)&&i(e,t,a[t]);return e})({},{name:"IframeLayout"}),a(A,t({__name:"IframeContainer",setup(e){const{getCanEmbedIFramePage:a}=O(),{getFramePages:t,hasRenderFrame:r,showIframe:s}=function(){const e=l(),{currentRoute:a}=e;function t(e){let a=[];for(const r of e){const{meta:{iframeLink:e}={},children:s}=r;e&&a.push(r),s&&s.length&&a.push(...t(s))}return a=f(a,"name"),a}return{hasRenderFrame:function(e){return a.value.name===e},getFramePages:o((()=>t(u(e.getRoutes())))),showIframe:function(e){return e.name===a.value.name},getAllFramePages:t}}(),n=o((()=>P(t).length>0)),i=j(),{height:m,width:h}=I(i);return(e,i)=>k(a)&&k(n)?(p(),g("div",S,[(p(!0),g(L,null,_(k(t),(e=>{var a,t;return p(),g(L,{key:e.path},[(null==(a=null==e?void 0:e.meta)?void 0:a.iframeLink)&&k(r)(e.name)?F((p(),x(M,{key:0,height:k(m),width:k(h),"iframe-link":null==(t=null==e?void 0:e.meta)?void 0:t.iframeLink},null,8,["height","width","iframe-link"])),[[R,k(s)(e)]]):$("",!0)],64)})),128))])):$("",!0)}}))));var A;export{q as default};
