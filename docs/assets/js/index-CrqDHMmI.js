var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,u=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;import{P as o}from"./PageWrapper-Dtw0Quid.js";import{a2 as s,ab as i,ac as d,a4 as p,a5 as m,ad as f,a7 as c,a8 as v,ae as h,af as _,ag as y,ah as b,ai as g,aj as w,ak as k}from"./celerisComponents-DAbnjG2T.js";import{S as z,b as V,F as x}from"./index-wedWAzdG.js";import{d as C,R as j,S as O,U,r as P,Q as B,a2 as S,f as D,F,N as I,u as R,a6 as q,aa as A,h as E}from"./vue-B5H4WroO.js";import{_ as M}from"./plugin-vueexport-helper-BCo6x5W8.js";import{C as T}from"./ChevronForwardCircleOutline-DcIcDVvL.js";const W={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},L=[U("path",{d:"M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),U("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M338.29 338.29L448 448"},null,-1)],N=C({name:"SearchOutline",render:function(e,l){return j(),O("svg",W,L)}}),Q=C({setup(){const e=P(null),l=s();return{formRef:e,size:P("medium"),formValue:P({user:{name:"",age:""},timestamp:(new Date).getTime(),phone:""}),rules:{user:{name:{required:!0,message:"请输入姓名",trigger:"blur"},age:{required:!0,message:"请输入年龄",trigger:["input","blur"]}},phone:{required:!0,message:"请输入电话号码",trigger:["input"]}},handleValidateClick(a){var t;a.preventDefault(),null==(t=e.value)||t.validate((e=>{e?(console.log(e),l.error("Invalid")):l.success("Valid")}))}}}}),G={style:{width:"50%"}},H=U("pre",null,null,-1);const J=M(Q,[["render",function(e,l,a,t,n,r){const u=i,o=d,s=p,_=m,y=f,b=c,g=v,w=h;return j(),O(F,null,[B(o,{value:e.size,"onUpdate:value":l[0]||(l[0]=l=>e.size=l),name:"left-size",style:{"margin-bottom":"12px"}},{default:S((()=>[B(u,{value:"small"},{default:S((()=>[D(" 小 ")])),_:1}),B(u,{value:"medium"},{default:S((()=>[D(" 中 ")])),_:1}),B(u,{value:"large"},{default:S((()=>[D(" 大 ")])),_:1})])),_:1},8,["value"]),B(g,{ref:"formRef",inline:"","label-width":80,model:e.formValue,rules:e.rules,size:e.size},{default:S((()=>[B(_,{label:"姓名",path:"user.name"},{default:S((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[1]||(l[1]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"年龄",path:"user.age"},{default:S((()=>[B(s,{value:e.formValue.user.age,"onUpdate:value":l[2]||(l[2]=l=>e.formValue.user.age=l),placeholder:"输入年龄"},null,8,["value"])])),_:1}),B(_,{label:"电话号码",path:"phone"},{default:S((()=>[B(s,{value:e.formValue.phone,"onUpdate:value":l[3]||(l[3]=l=>e.formValue.phone=l),placeholder:"电话号码"},null,8,["value"])])),_:1}),B(_,{label:"日期时间"},{default:S((()=>[B(y,{value:e.formValue.timestamp,"onUpdate:value":l[4]||(l[4]=l=>e.formValue.timestamp=l),type:"date"},null,8,["value"])])),_:1}),B(_,null,{default:S((()=>[B(b,{"attr-type":"button",onClick:e.handleValidateClick},{default:S((()=>[D(" 验证 ")])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules","size"]),U("div",G,[B(g,{ref:"formRef2","label-width":80,model:e.formValue,rules:e.rules,size:e.size},{default:S((()=>[B(_,{label:"姓名",path:"user.name"},{default:S((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[5]||(l[5]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"姓名",path:"user.name"},{default:S((()=>[B(s,{value:e.formValue.user.name,"onUpdate:value":l[6]||(l[6]=l=>e.formValue.user.name=l),placeholder:"输入姓名"},null,8,["value"])])),_:1}),B(_,{label:"年龄",path:"user.age"},{default:S((()=>[B(s,{value:e.formValue.user.age,"onUpdate:value":l[7]||(l[7]=l=>e.formValue.user.age=l),placeholder:"输入年龄"},null,8,["value"])])),_:1}),B(_,{label:"电话号码",path:"phone"},{default:S((()=>[B(s,{value:e.formValue.phone,"onUpdate:value":l[8]||(l[8]=l=>e.formValue.phone=l),placeholder:"电话号码"},null,8,["value"])])),_:1}),B(_,null,{default:S((()=>[B(w,null,{default:S((()=>[B(b,{"attr-type":"button",onClick:e.handleValidateClick},{default:S((()=>[D(" 验证 ")])),_:1},8,["onClick"]),B(b,null,{default:S((()=>[D("Default")])),_:1}),B(b,{type:"tertiary"},{default:S((()=>[D(" Tertiary ")])),_:1}),B(b,{type:"primary"},{default:S((()=>[D(" Primary ")])),_:1}),B(b,{type:"info"},{default:S((()=>[D(" Info ")])),_:1}),B(b,{type:"success"},{default:S((()=>[D(" Success ")])),_:1}),B(b,{type:"warning"},{default:S((()=>[D(" Warning ")])),_:1}),B(b,{type:"error"},{default:S((()=>[D(" Error ")])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules","size"])]),H],64)}]]),K=C({setup(){const e=s();return{handleBack(){e.info("[onBack]")},options:[{label:"催更",key:"1"},{label:"催更",key:"2"},{label:"催更",key:"3"}]}}}),X=U("a",{href:"https://anyway.fm/",style:{"text-decoration":"none",color:"inherit"}},"Anyway.FM",-1);const Y=M(K,[["render",function(e,l,a,t,n,r){const u=_,o=c,s=y,i=h,d=b;return j(),I(d,{subtitle:"表单详情",onBack:e.handleBack},{title:S((()=>[X])),header:S((()=>[])),avatar:S((()=>[B(u,{src:"https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"})])),extra:S((()=>[B(i,null,{default:S((()=>[B(o,null,{default:S((()=>[D("催更")])),_:1}),B(s,{options:e.options,placement:"bottom-start"},{default:S((()=>[B(o,{bordered:!1,style:{padding:"0 4px"}},{default:S((()=>[D(" ··· ")])),_:1})])),_:1},8,["options"])])),_:1})])),footer:S((()=>[D(" 截止到 2021 年 4 月 3 日 ")])),_:1},8,["onBack"])}]]),Z=U("div",null,null,-1),$=C((ee=((e,l)=>{for(var a in l||(l={}))n.call(l,a)&&u(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&u(e,a,l[a]);return e})({},{name:"Chat"}),l(ee,a({__name:"index",setup(e){const l=P(!1);P(!1);const a=C((e=>()=>E("b","组件Foo"))),t=C((e=>()=>E("b","组件Bar")));return(e,n)=>{const r=g,u=w,s=c,i=h,d=k,p=o;return j(),I(p,{"use-scrollbar":""},{default:S((()=>[B(r,{title:"卡片"},{default:S((()=>[D(" 卡片内容 ")])),_:1}),B(r,{title:"按钮组",class:"mt-5"},{default:S((()=>[B(u,{size:"30",component:R(z)},null,8,["component"]),B(u,{size:"60",component:R(V)},null,8,["component"]),B(u,{size:"60",component:R(N)},null,8,["component"]),B(i,null,{default:S((()=>[B(s,null,{default:S((()=>[D("Default")])),_:1}),B(s,{type:"tertiary"},{default:S((()=>[D(" Tertiary ")])),_:1}),B(s,{type:"primary"},{default:S((()=>[D(" Primary ")])),_:1}),B(s,{type:"info"},{default:S((()=>[D(" Info ")])),_:1}),B(s,{type:"success"},{default:S((()=>[D(" Success ")])),_:1}),B(s,{type:"warning"},{default:S((()=>[D(" Warning ")])),_:1}),B(s,{type:"error"},{default:S((()=>[D(" Error ")])),_:1})])),_:1}),D(" 卡片内容 ")])),_:1}),B(r,{title:"测试动态组件",class:"mt-5"},{default:S((()=>[B(u,{size:"30",component:R(z)},null,8,["component"]),B(u,{size:"60",component:R(V)},null,8,["component"]),B(u,{size:"60",component:R(N)},null,8,["component"]),B(i,null,{default:S((()=>[B(s,{onClick:n[0]||(n[0]=e=>l.value=!0)},{default:S((()=>[D("默认")])),_:1}),B(s,{onClick:n[1]||(n[1]=e=>l.value=!1)},{default:S((()=>[D(" 更换图标 ")])),_:1}),B(u,{size:"60",component:R(l)?R(T):R(x)},null,8,["component"])])),_:1}),D(" "+q(R(l)?R(a):R(t))+" ",1),U("div",null,[U("div",null,[(j(),I(A(R(l)?R(t):R(a))))]),U("div",null,[B(u,{style:{width:"200px"},color:"#165dff",size:"60",component:R(l)?R(t):R(a)},null,8,["component"])]),U("div",null,[B(d,{style:{width:"200px"},color:"red",size:"30",component:R(l)?R(t):R(a)},null,8,["component"])]),U("div",null,[B(u,{style:{width:"200px"},color:"#165dff",size:"60",component:R(l)?R(t):R(a)},null,8,["component"])]),U("div",null,[B(d,{style:{width:"200px"},color:"red",size:"30",component:R(l)?R(t):R(a)},null,8,["component"])])]),U("div",null,[B(R(a))]),U("div",null,[B(R(t))]),Z])),_:1}),B(r,{class:"mt-10 mb-10"},{default:S((()=>[B(Y),B(J)])),_:1})])),_:1})}}}))));var ee;export{$ as default};