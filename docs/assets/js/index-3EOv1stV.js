import{P as e}from"./PageWrapper-BRc0v8dK.js";import{d as a,r as l,R as n,N as o,a2 as s,Q as t,f as c}from"./vue-B5H4WroO.js";import{_ as d}from"./plugin-vueexport-helper-BCo6x5W8.js";import{aA as r,a7 as u,aB as i,ae as p,ai as f}from"./celerisComponents-CqXnuMA9.js";const m=d(a({setup(){const e=l(!1),a=l("难吃"),n=l(null);return{menuInstRef:n,selectAndExpand:e=>{var l;a.value=e,null==(l=n.value)||l.showOption(e)},accordion:e,selectedKey:a,options:[{label:"学五",key:"学五",children:[{label:"难吃",key:"难吃"}]},{label:"学一",key:"/components",children:[{label:"也难吃",key:"/components/headlessTable/basic"}]},{label:"燕南",key:"燕南",children:[{label:"依然难吃",key:"依然难吃"}]}]}}}),[["render",function(a,l,d,m,v,b){const k=r,h=u,y=i,_=p,x=f,A=e;return n(),o(A,{"use-scrollbar":""},{default:s((()=>[t(x,{title:"menu"},{default:s((()=>[t(_,{vertical:""},{default:s((()=>[t(k,{value:a.accordion,"onUpdate:value":l[0]||(l[0]=e=>a.accordion=e)},{checked:s((()=>[c(" 手风琴 ")])),unchecked:s((()=>[c(" 普通 ")])),_:1},8,["value"]),t(h,{onClick:l[1]||(l[1]=e=>a.selectAndExpand("难吃"))},{default:s((()=>[c(" 选中第一项 ")])),_:1}),t(h,{onClick:l[2]||(l[2]=e=>a.selectAndExpand("/components/headlessTable/basic"))},{default:s((()=>[c(" 选中第二项 ")])),_:1}),t(h,{onClick:l[3]||(l[3]=e=>a.selectAndExpand("依然难吃"))},{default:s((()=>[c(" 选中第三项 ")])),_:1}),t(y,{ref:"menuInstRef",value:a.selectedKey,"onUpdate:value":l[4]||(l[4]=e=>a.selectedKey=e),options:a.options,accordion:a.accordion},null,8,["value","options","accordion"])])),_:1})])),_:1})])),_:1})}]]);export{m as default};