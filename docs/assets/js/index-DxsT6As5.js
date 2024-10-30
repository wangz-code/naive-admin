import{a1 as e,ap as a,a3 as l,a4 as t,aq as n,ad as s,ar as u,as as o,a6 as d,ag as r,ae as p,a9 as c,aw as i,at as f,a7 as h,ax as m,ai as v}from"./celerisComponents-wzvf23oQ.js";import{f as _,t as g,C as b,S as y,a as w,b as k,g as S,_ as x,c as U,d as j,A as z,e as C,T as V}from"./numberUtils-CQBnSid3.js";import{d as R,r as L,m as P,R as D,S as q,Q as A,a2 as E,u as F,F as I,a7 as Q,f as T,h as $}from"./vue-DfkJQHDQ.js";import{u as B}from"./index-DJhmYswW.js";const G=()=>_([["billdate","单据日期"],["name","姓名"],["phone","联系电话"],["address","地址"],["state","单据状态"],["sales","销售金额","right",g("sales")],["payment","收款金额","right",g("payment")],["action","操作","center"]]),H=R({__name:"index",setup(_){B();const g=e(),R=L(null),H=L(!0),J=L({user:{name:"",age:""},where:"",phone:"",select:"",saleValue:"",stateValue:"",dateRange:[Date.now(),Date.now()]});L();const K=[{label:"批量发起",key:"submit",icon:a(U)},{label:"批量审核",key:"audit",icon:a(j)},{label:"批量驳回",key:"reject",icon:a(z)},{label:"批量反审",key:"reAudit",icon:a(C)},{label:"批量删除",key:"delete",icon:a(V)}],M=["","全部收款","部分收款","未收款"].map((e=>({label:e||"全部",value:e}))),N=["","起草","待审","通过"].map((e=>({label:e||"全部",value:e}))),O=e=>{g.success(e)},W=e=>{var a;e.preventDefault(),null==(a=R.value)||a.validate((e=>{e?(console.log(e),g.error("Invalid")):X()}))},X=()=>{return e=this,a=null,l=function*(){try{Z.isLoading=!0;const{data:e}=yield S();"success"==e.status&&(Z.source=e.data)}catch(e){}finally{Z.isLoading=!1}},new Promise(((t,n)=>{var s=e=>{try{o(l.next(e))}catch(a){n(a)}},u=e=>{try{o(l.throw(e))}catch(a){n(a)}},o=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,u);o((l=l.apply(e,a)).next())}));var e,a,l},Y=P({page:1,pageSize:10,showSizePicker:!0,pageSizes:[10,20,100],prefix:({itemCount:e})=>`${e}条记录`,onChange:e=>{Y.page=e},onUpdatePageSize:e=>{Y.pageSize=e,Y.page=1}}),Z=P({source:[],isLoading:!1,summary:e=>({name:{value:$("span",{style:{color:"red"}},e.reduce(((e,a)=>e),0)),colSpan:3}})});return X(),(e,a)=>{const _=l,g=t,S=n,U=s,j=u,z=o,C=x,V=d,L=r,P=p,$=c,B=i,X=f,ee=h,ae=m,le=v;return D(),q("div",null,[A(le,null,{default:E((()=>[A(ee,{ref_key:"formRef",ref:R,"label-placement":"left","label-width":"auto",model:F(J)},{default:E((()=>[A(z,{"x-gap":8,"y-gap":15,cols:"2 s:3 m:4 l:5 xl:6",responsive:"screen"},{default:E((()=>[A(S,null,{default:E((()=>[A(g,{label:"模糊查询",path:"where","show-feedback":!1},{default:E((()=>[A(_,{value:F(J).where,"onUpdate:value":a[0]||(a[0]=e=>F(J).where=e),placeholder:"输入关键字"},null,8,["value"])])),_:1})])),_:1}),A(S,null,{default:E((()=>[A(g,{label:"姓名",path:"user.name","show-feedback":!1,rule:[{required:!0,message:"姓名必填"}]},{default:E((()=>[A(_,{value:F(J).user.name,"onUpdate:value":a[1]||(a[1]=e=>F(J).user.name=e),placeholder:"输入姓名"},null,8,["value"])])),_:1})])),_:1}),A(S,{span:2},{default:E((()=>[A(g,{label:"单据日期","show-feedback":!1,path:"phone"},{default:E((()=>[A(U,{value:F(J).dateRange,"onUpdate:value":a[2]||(a[2]=e=>F(J).dateRange=e),type:"daterange",clearable:""},null,8,["value"])])),_:1})])),_:1}),A(S,null,{default:E((()=>[A(g,{label:"收款状态","show-feedback":!1,path:"phone"},{default:E((()=>[A(j,{value:F(J).saleValue,"onUpdate:value":a[3]||(a[3]=e=>F(J).saleValue=e),placeholder:"Select",options:F(M)},null,8,["value","options"])])),_:1})])),_:1}),A(S,null,{default:E((()=>[A(g,{label:"单据状态","show-feedback":!1,path:"user.name"},{default:E((()=>[A(j,{value:F(J).stateValue,"onUpdate:value":a[4]||(a[4]=e=>F(J).stateValue=e),placeholder:"Select",options:F(N)},null,8,["value","options"])])),_:1})])),_:1}),F(H)?(D(),q(I,{key:0},[A(S,null,{default:E((()=>[A(g,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[A(_,{value:F(J).phone,"onUpdate:value":a[5]||(a[5]=e=>F(J).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),A(S,null,{default:E((()=>[A(g,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[A(_,{value:F(J).phone,"onUpdate:value":a[6]||(a[6]=e=>F(J).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1}),A(S,null,{default:E((()=>[A(g,{label:"电话号码",path:"phone","show-feedback":!1},{default:E((()=>[A(_,{value:F(J).phone,"onUpdate:value":a[7]||(a[7]=e=>F(J).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1})])),_:1})],64)):Q("",!0)])),_:1}),A(X,{class:"m-t-sm m-b-sm",justify:"space-between"},{default:E((()=>[A(P,null,{default:E((()=>[A(C,{type:"primary",icon:F(b)},{default:E((()=>a[9]||(a[9]=[T("新增")]))),_:1},8,["icon"]),A(V,{strong:"",secondary:""},{default:E((()=>a[10]||(a[10]=[T("下载模板")]))),_:1}),A(V,{strong:"",secondary:""},{default:E((()=>a[11]||(a[11]=[T("批量导入")]))),_:1}),A(V,{strong:"",secondary:""},{default:E((()=>a[12]||(a[12]=[T("导出Excel")]))),_:1}),A(V,{strong:"",secondary:""},{default:E((()=>a[13]||(a[13]=[T("打印")]))),_:1}),A(L,{trigger:"hover",options:K,onSelect:O},{default:E((()=>[A(V,null,{default:E((()=>a[14]||(a[14]=[T("更多...")]))),_:1})])),_:1})])),_:1}),A(P,null,{default:E((()=>[A(B,null,{default:E((()=>[A(C,{"attr-type":"button",onClick:W,type:"info",icon:F(y)},null,8,["icon"]),A(V,{"attr-type":"reset"},{default:E((()=>a[15]||(a[15]=[T(" 重置 ")]))),_:1}),A(V,{"attr-type":"button",onClick:a[8]||(a[8]=e=>H.value=!F(H))},{icon:E((()=>[A($,{component:F(H)?F(w):F(k),size:16},null,8,["component"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["model"]),A(ae,{columns:F(G)(),data:F(Z).source,pagination:F(Y),loading:F(Z).isLoading},null,8,["columns","data","pagination","loading"])])),_:1})])}}});export{H as default};
