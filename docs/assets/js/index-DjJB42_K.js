import{ae as e,a1 as a,a6 as l,ap as t,a3 as n,a4 as o,aq as s,ad as u,ar as r,as as d,ag as i,a9 as p,aw as c,at as h,a7 as f,ax as m,ai as v}from"./celerisComponents-wzvf23oQ.js";import{f as g,t as w,_,C as b,S as y,a as k,b as x,g as S,c as U,d as j,A as C,e as M,T as R}from"./numberUtils-CQBnSid3.js";import{d as V,R as z,S as L,U as P,V as A,N as D,a2 as E,Q as q,u as B,r as F,m as H,F as I,a7 as N,f as Q,h as T}from"./vue-DfkJQHDQ.js";import{R as $}from"./Refresh-DZP6PmIc.js";import{u as G}from"./index-DJhmYswW.js";const J={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},K=[P("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[P("path",{d:"M12 15l8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3z"}),P("path",{d:"M16 5l3 3"}),P("path",{d:"M9 7.07A7.002 7.002 0 0 0 10 21a7.002 7.002 0 0 0 6.929-5.999"})],-1)],O=V({name:"EditCircle",render:function(e,a){return z(),L("svg",J,K)}}),W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=[A('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697"></path><path d="M18 12V7a2 2 0 0 0-2-2h-2"></path><rect x="8" y="3" width="6" height="4" rx="2"></rect><path d="M8 11h4"></path><path d="M8 15h3"></path><circle cx="16.5" cy="17.5" r="2.5"></circle><path d="M18.5 19.5L21 22"></path></g>',1)],Y=V({name:"ReportSearch",render:function(e,a){return z(),L("svg",W,X)}}),Z=e=>[{type:"selection"},...g([["billdate","单据日期"],["name","姓名"],["phone","联系电话"],["address","地址"],["state","单据状态"],["sales","销售金额","right",w("sales")],["payment","收款金额","right",w("payment")],["action","操作","center",e.action]])],ee=V({__name:"action",setup(a){const l=()=>{};return(a,t)=>{const n=_,o=e;return z(),D(o,{justify:"center"},{default:E((()=>[q(n,{title:"查看",onClick:l,icon:B(Y)},null,8,["icon"]),q(n,{title:"编辑",icon:B(O)},null,8,["icon"])])),_:1})}}}),ae=V({__name:"index",setup(g){G();const w=a(),V=F(null),P=F(!0),A=F({user:{name:"",age:""},where:"",phone:"",select:"",saleValue:"",stateValue:"",dateRange:[Date.now(),Date.now()]});F();const J=[{label:"批量发起",key:"submit",icon:t(U)},{label:"批量审核",key:"audit",icon:t(j)},{label:"批量驳回",key:"reject",icon:t(C)},{label:"批量反审",key:"reAudit",icon:t(M)},{label:"批量删除",key:"delete",icon:t(R)}],K=["","全部收款","部分收款","未收款"].map((e=>({label:e||"全部",value:e}))),O=["","起草","待审","通过"].map((e=>({label:e||"全部",value:e}))),W=e=>{w.success(e)},X=e=>{var a;e.preventDefault(),null==(a=V.value)||a.validate((e=>{e?(console.log(e),w.error("Invalid")):Y()}))},Y=()=>{return e=this,a=null,l=function*(){try{te.isLoading=!0;const{data:e}=yield S();"success"==e.status&&(te.source=e.data)}catch(e){}finally{te.isLoading=!1}},new Promise(((t,n)=>{var o=e=>{try{u(l.next(e))}catch(a){n(a)}},s=e=>{try{u(l.throw(e))}catch(a){n(a)}},u=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,s);u((l=l.apply(e,a)).next())}));var e,a,l},ae={action:e=>T(ee,{})},le=H({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,100],prefix:({itemCount:e})=>`${e}条记录`,onChange:e=>{le.page=e},onUpdatePageSize:e=>{le.pageSize=e,le.page=1}}),te=H({source:[],isLoading:!1,summary:e=>({name:{value:T("span",{style:{color:"red"}},e.reduce(((e,a)=>e),0)),colSpan:3}})});return Y(),(a,t)=>{const g=n,w=o,S=s,U=u,j=r,C=d,M=_,R=i,F=e,H=p,T=c,G=h,Y=f,ee=m,ne=v;return z(),D(ne,null,{default:E((()=>[q(Y,{ref_key:"formRef",ref:V,"label-placement":"left","label-width":"auto",model:B(A)},{default:E((()=>[q(C,{"x-gap":8,"y-gap":15,cols:"2 s:3 m:4 l:5 xl:6",responsive:"screen"},{default:E((()=>[q(S,null,{default:E((()=>[q(w,{label:"模糊查询",path:"where","show-feedback":!1},{default:E((()=>[q(g,{value:B(A).where,"onUpdate:value":t[0]||(t[0]=e=>B(A).where=e),placeholder:"输入关键字"},null,8,["value"])])),_:1})])),_:1}),q(S,null,{default:E((()=>[q(w,{label:"姓名",path:"user.name","show-feedback":!1,rule:[{required:!0,message:"姓名必填"}]},{default:E((()=>[q(g,{value:B(A).user.name,"onUpdate:value":t[1]||(t[1]=e=>B(A).user.name=e),placeholder:"输入姓名"},null,8,["value"])])),_:1})])),_:1}),q(S,{span:2},{default:E((()=>[q(w,{label:"单据日期","show-feedback":!1,path:"phone"},{default:E((()=>[q(U,{value:B(A).dateRange,"onUpdate:value":t[2]||(t[2]=e=>B(A).dateRange=e),type:"daterange",clearable:""},null,8,["value"])])),_:1})])),_:1}),q(S,null,{default:E((()=>[q(w,{label:"收款状态","show-feedback":!1,path:"phone"},{default:E((()=>[q(j,{value:B(A).saleValue,"onUpdate:value":t[3]||(t[3]=e=>B(A).saleValue=e),placeholder:"Select",options:B(K)},null,8,["value","options"])])),_:1})])),_:1}),q(S,null,{default:E((()=>[q(w,{label:"单据状态","show-feedback":!1,path:"user.name"},{default:E((()=>[q(j,{value:B(A).stateValue,"onUpdate:value":t[4]||(t[4]=e=>B(A).stateValue=e),placeholder:"Select",options:B(O)},null,8,["value","options"])])),_:1})])),_:1}),B(P)?(z(),L(I,{key:0},[q(S,null,{default:E((()=>[q(w,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[q(g,{value:B(A).phone,"onUpdate:value":t[5]||(t[5]=e=>B(A).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),q(S,null,{default:E((()=>[q(w,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[q(g,{value:B(A).phone,"onUpdate:value":t[6]||(t[6]=e=>B(A).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),q(S,null,{default:E((()=>[q(w,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[q(g,{value:B(A).phone,"onUpdate:value":t[7]||(t[7]=e=>B(A).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1})],64)):N("",!0)])),_:1}),q(G,{class:"m-t-sm m-b-sm",justify:"space-between"},{default:E((()=>[q(F,null,{default:E((()=>[q(M,{type:"primary",icon:B(b)},{default:E((()=>t[9]||(t[9]=[Q("新增")]))),_:1},8,["icon"]),q(B(l),{strong:"",secondary:""},{default:E((()=>t[10]||(t[10]=[Q("下载模板")]))),_:1}),q(B(l),{strong:"",secondary:""},{default:E((()=>t[11]||(t[11]=[Q("批量导入")]))),_:1}),q(B(l),{strong:"",secondary:""},{default:E((()=>t[12]||(t[12]=[Q("导出Excel")]))),_:1}),q(B(l),{strong:"",secondary:""},{default:E((()=>t[13]||(t[13]=[Q("打印")]))),_:1}),q(R,{trigger:"hover",options:J,onSelect:W},{default:E((()=>[q(B(l),null,{default:E((()=>t[14]||(t[14]=[Q("更多...")]))),_:1})])),_:1})])),_:1}),q(F,null,{default:E((()=>[q(T,null,{default:E((()=>[q(M,{"attr-type":"button",title:"查询",onClick:X,type:"info",icon:B(y)},null,8,["icon"]),q(M,{"attr-type":"reset",title:"重置",icon:B($)},null,8,["icon"]),q(B(l),{"attr-type":"button",onClick:t[8]||(t[8]=e=>P.value=!B(P))},{icon:E((()=>[q(H,{component:B(P)?B(k):B(x),size:16},null,8,["component"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),q(ee,{columns:B(Z)(ae),data:B(te).source,pagination:B(le),loading:B(te).isLoading},null,8,["columns","data","pagination","loading"])])),_:1})}}});export{ae as default};
