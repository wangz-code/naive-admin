import{c3 as e,C as t,d as a,D as r,F as n,l as i,ad as l,v as s,dE as o,dF as p,Y as d,ab as c,ac as m}from"./index-Chs2zBSz.js";import{g}from"./get-slot-BjAOOWF7.js";let u;function f(){if(!e)return!0;if(void 0===u){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const t=1===e.scrollHeight;return document.body.removeChild(e),u=t}return u}const y=a({name:"Space",props:Object.assign(Object.assign({},t.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemClass:String,itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:l}=r(e),s=t("Space","-space",void 0,p,e,a),o=n("Space",l,a);return{useGap:f(),rtlEnabled:o,mergedClsPrefix:a,margin:i((()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if("number"==typeof t)return{horizontal:t,vertical:t};const{self:{[d("gap",t)]:a}}=s.value,{row:r,col:n}=c(a);return{horizontal:m(n),vertical:m(r)}}))}},render(){const{vertical:e,reverse:t,align:a,inline:r,justify:n,itemClass:i,itemStyle:p,margin:d,wrap:c,mergedClsPrefix:m,rtlEnabled:u,useGap:f,wrapItem:y,internalUseGap:v}=this,x=l(g(this),!1);if(!x.length)return null;const h=`${d.horizontal}px`,b=d.horizontal/2+"px",w=`${d.vertical}px`,C=d.vertical/2+"px",B=x.length-1,S=n.startsWith("space-");return s("div",{role:"none",class:[`${m}-space`,u&&`${m}-space--rtl`],style:{display:r?"inline-flex":"flex",flexDirection:e&&!t?"column":e&&t?"column-reverse":!e&&t?"row-reverse":"row",justifyContent:["start","end"].includes(n)?`flex-${n}`:n,flexWrap:!c||e?"nowrap":"wrap",marginTop:f||e?"":`-${C}`,marginBottom:f||e?"":`-${C}`,alignItems:a,gap:f?`${d.vertical}px ${d.horizontal}px`:""}},y||!f&&!v?x.map(((t,a)=>t.type===o?t:s("div",{role:"none",class:i,style:[p,{maxWidth:"100%"},f?"":e?{marginBottom:a!==B?w:""}:u?{marginLeft:S?"space-between"===n&&a===B?"":b:a!==B?h:"",marginRight:S?"space-between"===n&&0===a?"":b:"",paddingTop:C,paddingBottom:C}:{marginRight:S?"space-between"===n&&a===B?"":b:a!==B?h:"",marginLeft:S?"space-between"===n&&0===a?"":b:"",paddingTop:C,paddingBottom:C}]},t))):x)}});export{y as _};
