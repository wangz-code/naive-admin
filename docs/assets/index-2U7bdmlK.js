import{d as e,a,r as t,o as l,c as r,w as o,b as s,e as u,h as p,B as n,L as m,v as i}from"./index-DARFfA1y.js";import{u as d}from"./use-message-Ddh_dhS_.js";import{N as c}from"./Input-5cQz8LEN.js";import{N as f,a as y}from"./FormItem-DnyVGc6W.js";import{_ as h}from"./Space-BTRDy1N4.js";import{N as g}from"./Divider-7f-uLCRj.js";import{_ as j}from"./DataTable-o1G3C4xw.js";import"./use-locale-DwupoVXT.js";import"./use-merged-state-CFBUsh0b.js";import"./get-slot-BjAOOWF7.js";import"./Checkbox-C3Rui2Ue.js";import"./RadioGroup-BEN_67mz.js";import"./Popover-CFfzrRBi.js";import"./use-compitable-DuvaDNS_.js";import"./next-frame-once-DiJwGkuW.js";import"./Dropdown-B8FInGfZ.js";import"./create-Bylz8BGN.js";import"./FocusDetector-BQzXbw3B.js";import"./Tooltip-BgLXfIKX.js";import"./Empty-B21olQ5Q.js";import"./Pagination-DohxwXgL.js";import"./Select-CUhFOAkZ.js";import"./Tag-fbafY23M.js";import"./index-nOp0nN3m.js";import"./Checkmark-BkBgpDzS.js";import"./Forward-BjUGNbi1.js";import"./Popselect-CKtzXi14.js";const v=e({__name:"index",setup(e){const v=d(),_=a(null),k=a({user:{name:"",age:""},phone:""}),b=e=>{var a;e.preventDefault(),null==(a=_.value)||a.validate((e=>{e?(console.log(e),v.error("Invalid")):v.success("Valid")}))},S=t({page:2,pageSize:10,showSizePicker:!0,pageSizes:[10,20,100],onChange:e=>{S.page=e},onUpdatePageSize:e=>{S.pageSize=e,S.page=1}}),T={summary:e=>({name:{value:i("span",{style:{color:"red"}},e.reduce(((e,a)=>e+a.age),0)),colSpan:3}}),data:(()=>{const e=[];for(let a=0;a<100;a++)e.push({key:a,name:"John Brown"+a,age:32,address:"New York No. 1 Lake Park"});return e})(),columns:[{type:"selection"},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}]};return(e,a)=>{const t=c,i=f,d=n,v=y,U=h,w=g,D=j,P=m;return l(),r(P,null,{default:o((()=>[s(v,{ref_key:"formRef",ref:_,inline:"","label-width":80,model:u(k)},{default:o((()=>[s(i,{label:"姓名",path:"user.name"},{default:o((()=>[s(t,{value:u(k).user.name,"onUpdate:value":a[0]||(a[0]=e=>u(k).user.name=e),placeholder:"输入姓名"},null,8,["value"])])),_:1}),s(i,{label:"年龄",path:"user.age"},{default:o((()=>[s(t,{value:u(k).user.age,"onUpdate:value":a[1]||(a[1]=e=>u(k).user.age=e),placeholder:"输入年龄"},null,8,["value"])])),_:1}),s(i,{label:"电话号码",path:"phone"},{default:o((()=>[s(t,{value:u(k).phone,"onUpdate:value":a[2]||(a[2]=e=>u(k).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1}),s(i,{label:"姓名",path:"user.name"},{default:o((()=>[s(t,{value:u(k).user.name,"onUpdate:value":a[3]||(a[3]=e=>u(k).user.name=e),placeholder:"输入姓名"},null,8,["value"])])),_:1}),s(i,{label:"年龄",path:"user.age"},{default:o((()=>[s(t,{value:u(k).user.age,"onUpdate:value":a[4]||(a[4]=e=>u(k).user.age=e),placeholder:"输入年龄"},null,8,["value"])])),_:1}),s(i,{label:"电话号码",path:"phone"},{default:o((()=>[s(t,{value:u(k).phone,"onUpdate:value":a[5]||(a[5]=e=>u(k).phone=e),placeholder:"电话号码"},null,8,["value"])])),_:1}),s(i,null,{default:o((()=>[s(d,{"attr-type":"button",type:"primary",onClick:b},{default:o((()=>a[6]||(a[6]=[p(" 查询 ")]))),_:1})])),_:1})])),_:1},8,["model"]),s(U,null,{default:o((()=>[s(d,null,{default:o((()=>a[7]||(a[7]=[p("Default")]))),_:1}),s(d,{type:"tertiary"},{default:o((()=>a[8]||(a[8]=[p(" Tertiary ")]))),_:1}),s(d,{type:"primary"},{default:o((()=>a[9]||(a[9]=[p(" Primary ")]))),_:1}),s(d,{type:"tertiary"},{default:o((()=>a[10]||(a[10]=[p(" Tertiary ")]))),_:1}),s(d,{type:"tertiary"},{default:o((()=>a[11]||(a[11]=[p(" Tertiary ")]))),_:1}),s(d,{type:"tertiary"},{default:o((()=>a[12]||(a[12]=[p(" Tertiary ")]))),_:1}),s(d,{type:"tertiary"},{default:o((()=>a[13]||(a[13]=[p(" Tertiary ")]))),_:1})])),_:1}),s(w,{dashed:""}),s(D,{columns:T.columns,data:T.data,summary:T.summary,size:"small",pagination:u(S)},null,8,["columns","data","summary","pagination"])])),_:1})}}});export{v as default};
