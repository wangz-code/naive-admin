import{d as e,bu as t,u as s,k as a,l as o,c as l,w as r,e as i,L as n,bt as u,o as p,b as m,h as d,j as c,bv as f,q as y,av as g,B as _}from"./index-n-eiTXQj.js";import{_ as x,a as R}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-Ckjvk0ZD.js";import{_ as S}from"./Authority.vuevuetypescriptsetuptruelang-fPR7jYrT.js";import{_ as A}from"./Space-BXzxnBzY.js";import{N as D}from"./Divider-CYxQg5y0.js";import"./get-slot-BjAOOWF7.js";const E=e({__name:"ButtonPermission",setup(e){const{changeRole:E,hasPermission:M}=t(),{t:N}=s(),I=a(),T=o((()=>I.getRoleList.includes(f.ADMIN))),U=o((()=>I.getRoleList.includes(f.USER)));return(e,t)=>{const s=n,a=R,o=_,v=A,B=D,b=u("auth");return p(),l(s,{title:i(N)("page.permission.pageTitles.button")},{default:r((()=>[m(x),m(s,{class:"my-4",title:i(N)("page.permission.currentRole"),embedded:"",bordered:!1},{default:r((()=>[d(c(i(I).getRoleList),1)])),_:1},8,["title"]),m(a,{class:"my-4",type:"info",title:i(N)("page.permission.clickToSeeButtonChange"),"show-icon":""},null,8,["title"]),m(s,{class:"mt-4",title:i(N)("page.permission.frontendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:r((()=>[m(v,null,{default:r((()=>[m(o,{type:i(T)?"primary":"default",onClick:t[0]||(t[0]=e=>i(E)(i(f).ADMIN))},{default:r((()=>[d(c(i(f).ADMIN),1)])),_:1},8,["type"]),m(o,{type:i(U)?"primary":"default",onClick:t[1]||(t[1]=e=>i(E)(i(f).USER))},{default:r((()=>[d(c(i(f).USER),1)])),_:1},8,["type"])])),_:1})])),_:1},8,["title"]),m(B,null,{default:r((()=>[d(c(i(N)("page.permission.componentWayTitle")),1)])),_:1}),m(S,{value:i(f).ADMIN},{default:r((()=>[m(o,{type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).ADMIN})),1)])),_:1})])),_:1},8,["value"]),m(S,{value:i(f).USER},{default:r((()=>[m(o,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).USER})),1)])),_:1})])),_:1},8,["value"]),m(S,{value:[i(f).USER,i(f).ADMIN]},{default:r((()=>[m(o,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:[i(f).USER,i(f).ADMIN]})),1)])),_:1})])),_:1},8,["value"]),m(B,null,{default:r((()=>[d(c(i(N)("page.permission.functionWayTitle")),1)])),_:1}),i(M)(i(f).ADMIN)?(p(),l(o,{key:0,type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).ADMIN})),1)])),_:1})):y("",!0),i(M)(i(f).USER)?(p(),l(o,{key:1,strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).USER})),1)])),_:1})):y("",!0),i(M)([i(f).USER,i(f).ADMIN])?(p(),l(o,{key:2,strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:[i(f).USER,i(f).ADMIN]})),1)])),_:1})):y("",!0),m(B,null,{default:r((()=>[d(c(i(N)("page.permission.directiveWayTitle")),1)])),_:1}),g((p(),l(o,{type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).ADMIN})),1)])),_:1})),[[b,i(f).ADMIN]]),g((p(),l(o,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:i(f).USER})),1)])),_:1})),[[b,i(f).USER]]),g((p(),l(o,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(N)("page.permission.roleButtonText",{role:[i(f).USER,i(f).ADMIN]})),1)])),_:1})),[[b,[i(f).USER,i(f).ADMIN]]])])),_:1},8,["title"])}}});export{E as default};
