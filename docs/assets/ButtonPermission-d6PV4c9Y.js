import{d as e,bu as t,u as s,k as a,l as o,c as l,w as r,e as i,L as n,bt as u,o as p,b as m,h as d,j as c,bv as y,q as f,av as g,B as _}from"./index-DARFfA1y.js";import{_ as x,a as R}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-sJdzM4Kr.js";import{_ as S}from"./Authority.vuevuetypescriptsetuptruelang-CXyZkI2w.js";import{_ as M}from"./Space-BTRDy1N4.js";import{N as A}from"./Divider-7f-uLCRj.js";import"./get-slot-BjAOOWF7.js";const D=e({__name:"ButtonPermission",setup(e){const{changeRole:D,hasPermission:N}=t(),{t:E}=s(),I=a(),T=o((()=>I.getRoleList.includes(y.ADMIN))),U=o((()=>I.getRoleList.includes(y.USER)));return(e,t)=>{const s=n,a=R,o=_,v=M,B=A,b=u("auth");return p(),l(s,{title:i(E)("page.permission.pageTitles.button")},{default:r((()=>[m(x),m(s,{class:"my-4",title:i(E)("page.permission.currentRole"),embedded:"",bordered:!1},{default:r((()=>[d(c(i(I).getRoleList),1)])),_:1},8,["title"]),m(a,{class:"my-4",type:"info",title:i(E)("page.permission.clickToSeeButtonChange"),"show-icon":""},null,8,["title"]),m(s,{class:"mt-4",title:i(E)("page.permission.frontendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:r((()=>[m(v,null,{default:r((()=>[m(o,{type:i(T)?"primary":"default",onClick:t[0]||(t[0]=e=>i(D)(i(y).ADMIN))},{default:r((()=>[d(c(i(y).ADMIN),1)])),_:1},8,["type"]),m(o,{type:i(U)?"primary":"default",onClick:t[1]||(t[1]=e=>i(D)(i(y).USER))},{default:r((()=>[d(c(i(y).USER),1)])),_:1},8,["type"])])),_:1})])),_:1},8,["title"]),m(B,null,{default:r((()=>[d(c(i(E)("page.permission.componentWayTitle")),1)])),_:1}),m(S,{value:i(y).ADMIN},{default:r((()=>[m(o,{type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).ADMIN})),1)])),_:1})])),_:1},8,["value"]),m(S,{value:i(y).USER},{default:r((()=>[m(o,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).USER})),1)])),_:1})])),_:1},8,["value"]),m(S,{value:[i(y).USER,i(y).ADMIN]},{default:r((()=>[m(o,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:[i(y).USER,i(y).ADMIN]})),1)])),_:1})])),_:1},8,["value"]),m(B,null,{default:r((()=>[d(c(i(E)("page.permission.functionWayTitle")),1)])),_:1}),i(N)(i(y).ADMIN)?(p(),l(o,{key:0,type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).ADMIN})),1)])),_:1})):f("",!0),i(N)(i(y).USER)?(p(),l(o,{key:1,strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).USER})),1)])),_:1})):f("",!0),i(N)([i(y).USER,i(y).ADMIN])?(p(),l(o,{key:2,strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:[i(y).USER,i(y).ADMIN]})),1)])),_:1})):f("",!0),m(B,null,{default:r((()=>[d(c(i(E)("page.permission.directiveWayTitle")),1)])),_:1}),g((p(),l(o,{type:"primary",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).ADMIN})),1)])),_:1})),[[b,i(y).ADMIN]]),g((p(),l(o,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:i(y).USER})),1)])),_:1})),[[b,i(y).USER]]),g((p(),l(o,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:r((()=>[d(c(i(E)("page.permission.roleButtonText",{role:[i(y).USER,i(y).ADMIN]})),1)])),_:1})),[[b,[i(y).USER,i(y).ADMIN]]])])),_:1},8,["title"])}}});export{D as default};
