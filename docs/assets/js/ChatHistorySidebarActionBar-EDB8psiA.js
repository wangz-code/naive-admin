import{c as e}from"./chatContext-dJttu_c0.js";import{_ as l}from"./ActionIcon.vuevuetypescriptsetuptruelang-MrvMRLam.js";import{d as t,i as s,R as a,N as r,a2 as o,Q as i,U as f,f as d,a8 as n,u as c,a7 as p}from"./vue-On1Nx3Ly.js";import{a6 as u,a7 as x,ad as m,a8 as v,a9 as b}from"./celerisComponents-DoMVLPED.js";import{_ as y}from"./plugin-vueexport-helper-BCo6x5W8.js";import"./ToolTipper.vuevuetypescriptsetuptruelang-MzCIzAVe.js";const w={class:"w-full rounded-2xl flex mx-2 px-2 py-1 justify-between"},_={class:"overflow-hidden flex justify-between items-center"},h={class:"name whitespace-nowrap text-ellipsis grow font-bold"},j={class:"flex flex-y-center"},g={class:"overflow-hidden flex flex-col grow gap-2 p-2"},A={class:"flex flex-row justify-between"},C={class:"flex flex-row flex-y-center"},k={class:"flex flex-y-center mr-2"},I={class:"flex flex-y-center"},R={class:"flex flex-row flex-y-center"},T={class:"flex flex-y-center mr-2"},q={class:"flex flex-y-center"},z={class:"flex flex-row flex-y-center"},B={class:"flex flex-y-center mr-2"},H=y(t({__name:"ChatHistorySidebarActionBar",setup(t){const{selectedAssistantRef:y}=s(e);return(e,t)=>{const s=u,H=x,N=m,Q=v,S=b;return a(),r(S,{"default-expanded-names":["info"],"arrow-placement":"left",class:"p-4 chat-history-action"},{default:o((()=>[i(Q,{title:"助手信息",name:"info"},{default:o((()=>[i(N,{embedded:"",bordered:!1},{footer:o((()=>[i(N,{bordered:!1},{default:o((()=>[f("div",A,[f("div",C,[f("div",k,[i(l,{icon:"tabler:thumb-up-filled","tooltip-text":"点赞"})]),i(H,null,{default:o((()=>[d(n(c(y).likes),1)])),_:1})]),f("div",I,[f("div",R,[f("div",T,[i(l,{icon:"tabler:thumb-down-filled","tooltip-text":"踩"})]),i(H,null,{default:o((()=>[d(n(c(y).dislikes),1)])),_:1})])]),f("div",q,[f("div",z,[f("div",B,[i(l,{icon:"tabler:share","tooltip-text":"分享"})]),i(H,null,{default:o((()=>[d(n(c(y).shares),1)])),_:1})])])])])),_:1})])),default:o((()=>[i(N,{bordered:!1},{default:o((()=>[f("div",w,[f("div",{class:p(["relative rounded-full flex items-center pb-1 pr-2",{available:c(y).available}])},[i(s,{round:"",src:c(y).avatar,size:"large"},null,8,["src"])],2),f("div",_,[f("div",h,n(c(y).name),1)]),f("div",j,[i(l,{icon:"tabler:edit","tooltip-text":"编辑助手"})])]),f("div",g,[i(H,{class:"prompt text-ellipsis"},{default:o((()=>[d(n(c(y).prompt),1)])),_:1})])])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f7e6bee1"]]);export{H as default};