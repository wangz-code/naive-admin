import{C as e,d as s,D as a,l,G as t,v as n,cP as o,cQ as i,ac as r,bT as d,o as u,p as c,b as m,w as p,e as v,q as f,R as g,T as b,av as h,bN as x,g as y,j as k,bl as C,bU as R}from"./index-DARFfA1y.js";const A=s({name:"Element",alias:["El"],props:Object.assign(Object.assign({},e.props),{tag:{type:String,default:"div"}}),setup(s){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=a(s),d=e("Element","-element",void 0,o,s,n),u=l((()=>{const{common:e}=d.value;return Object.keys(e).reduce(((s,a)=>(s[`--${i(a)}`]=e[a],s)),{})})),c=r?t("element",void 0,u,s):void 0;return{mergedClsPrefix:n,cssVars:r?void 0:u,themeClass:null==c?void 0:c.themeClass,onRender:null==c?void 0:c.onRender}},render(){var e;const{tag:s,mergedClsPrefix:a,cssVars:l,themeClass:t,onRender:o,$slots:i}=this;return null==o||o(),n(s,{role:"none",class:[`${a}-element`,t],style:l},null===(e=i.default)||void 0===e?void 0:e.call(i))}}),E=""+new URL("logo-524x524-CLkJ3RcN.png",import.meta.url).href,j=["src"],D=["src"],L=s({__name:"AppLogo",props:{displayTitle:{type:Boolean,default:!1},titleSize:{default:"xl"},isMini:{type:Boolean,default:!0},isDarkMode:{type:Boolean,default:void 0}},setup(e){const s=e,{displayTitle:a,titleSize:t,isMini:n,isDarkMode:o}=r(s),i=l((()=>String("Naive Admin"))),A=d();function L(){A.push(R.BASE_HOME)}const M=l((()=>o.value)),S=l((()=>!o.value));return(e,s)=>(u(),c("div",{class:C([`text-${v(t)}`,"flex items-center"]),onClick:L},[m(b,{appear:"",name:v(g).FADE,mode:"in-out"},{default:p((()=>[M.value&&!v(n)||S.value&&!v(n)?(u(),c("img",{key:0,src:v(E),class:"block h-full max-h-8 m-3",alt:"App Logo"},null,8,j)):M.value&&v(n)||S.value&&v(n)?(u(),c("img",{key:1,src:v(E),class:"block h-full max-h-8 m-3",alt:"App Logo"},null,8,D)):f("",!0)])),_:1},8,["name"]),h(y("span",{class:"font-semibold"},k(i.value),513),[[x,v(a)]])],2))}});export{L as _,A as a};