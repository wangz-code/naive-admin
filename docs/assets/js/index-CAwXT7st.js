import{af as e,a9 as a,ae as t,aK as l,aL as s,ai as n,aM as o}from"./celerisComponents-wzvf23oQ.js";import{_ as i}from"./ToolTipper.vuevuetypescriptsetuptruelang-t2rAA2vf.js";import{a as r}from"./index-DJhmYswW.js";import{d as p,r as u,x as c,R as d,S as m,Q as v,a2 as f,U as x,u as g,a6 as h,e as b,f as _,F as w}from"./vue-DfkJQHDQ.js";const j={class:"user-info flex flex-wrap gap-8 p-8 pb-6 border-b border-solid"},y={class:"avatar relative h-24"},U={class:"info grow flex flex-col justify-center"},C={class:"name mb-4"},z={class:"lg:text-2xl md:text-lg sm:text-base font-bold"},L={class:"tooltip-wrap flex items-center"},R={class:"line-height-1 ml-2"},S={class:"tooltip-wrap flex items-center"},T={class:"tooltip-wrap flex items-center"},E={class:"line-height-1 ml-2"},F={class:"tooltip-wrap flex items-center"},I={class:"line-height-1 ml-2"},J={class:"section-selector p-5 md:p-6 pt-0"},K={class:"main mt-8"},M=p({__name:"index",setup(p){const M=u("settings"),N=r(),Q=c(N.getUserInfo);return(r,p)=>{const u=e,c=a,N=t,k=l,q=s,A=n,B=o;return d(),m(w,null,[v(A,{class:"header flex flex-col","content-style":{padding:0}},{default:f((()=>{var e,a;return[x("div",j,[x("div",y,[v(u,{round:"",src:null==(e=g(Q))?void 0:e.avatarUrl,size:80},null,8,["src"])]),x("div",U,[x("div",C,[x("h1",z,h(null==(a=g(Q))?void 0:a.fullName),1)]),v(N,{size:"large"},{default:f((()=>[v(i,{"tooltip-text":"Roles",placement:"top"},{default:f((()=>{var e;return[x("div",L,[v(c,{component:"tabler:user"}),x("span",R,h(null==(e=g(Q))?void 0:e.roles),1)])]})),_:1}),v(i,{"tooltip-text":"Location",placement:"top"},{default:f((()=>[x("div",S,[v(c,{component:"tabler:map-pin"}),p[2]||(p[2]=x("span",{class:"line-height-1 ml-2"},"China",-1))])])),_:1}),v(i,{"tooltip-text":"Email",placement:"top"},{default:f((()=>{var e;return[x("div",T,[v(c,{component:"tabler:mail"}),x("span",E,h(null==(e=g(Q))?void 0:e.email),1)])]})),_:1}),v(i,{"tooltip-text":"Contacts",placement:"top"},{default:f((()=>{var e;return[x("div",F,[v(c,{component:"tabler:phone"}),x("span",I,h(null==(e=g(Q))?void 0:e.phone),1)])]})),_:1})])),_:1})])]),x("div",J,[v(q,{value:g(M),"onUpdate:value":p[0]||(p[0]=e=>b(M)?M.value=e:null)},{default:f((()=>[v(k,{name:"settings"},{default:f((()=>p[3]||(p[3]=[_(" Settings ")]))),_:1})])),_:1},8,["value"])])]})),_:1}),x("div",K,[v(q,{value:g(M),"onUpdate:value":p[1]||(p[1]=e=>b(M)?M.value=e:null),"tab-style":{display:"none"},animated:""},{default:f((()=>[v(B,{name:"settings"})])),_:1},8,["value"])])],64)}}});export{M as default};