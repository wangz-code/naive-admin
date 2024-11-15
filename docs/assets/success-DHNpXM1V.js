import{d as e,z as t,Q as n,y as s,A as r,b5 as i,U as a,D as o,F as l,C as c,bJ as d,a4 as p,v as u,a9 as g,au as f,i as h,t as b,l as m,Y as v,G as x,aD as z,x as S,aI as C,a_ as _,N as y,bK as P,bL as $,bM as w,u as k,r as j,o as I,c as R,w as T,b as D,e as F,bN as A,h as B,j as H,g as N,B as O,L as E}from"./index-BT0ZcDkn.js";import{D as L,_ as U}from"./Descriptions-BD5yoHoK.js";import{g as Y}from"./get-slot-BjAOOWF7.js";import{F as M}from"./Checkmark-DuWLWy-v.js";import{_ as G}from"./Space-_SFqgYmP.js";import{_ as J}from"./Result-Du_g0nDe.js";import"./use-compitable-CHcH6xDN.js";const Q={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},V=e({name:"DescriptionsItem",[L]:!0,props:Q,render:()=>null}),K=t("steps","\n width: 100%;\n display: flex;\n",[t("step","\n position: relative;\n display: flex;\n flex: 1;\n ",[n("disabled","cursor: not-allowed"),n("clickable","\n cursor: pointer;\n "),s("&:last-child",[t("step-splitor","display: none;")])]),t("step-splitor","\n background-color: var(--n-splitor-color);\n margin-top: calc(var(--n-step-header-font-size) / 2);\n height: 1px;\n flex: 1;\n align-self: flex-start;\n margin-left: 12px;\n margin-right: 12px;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),t("step-content","flex: 1;",[t("step-content-header","\n color: var(--n-header-text-color);\n margin-top: calc(var(--n-indicator-size) / 2 - var(--n-step-header-font-size) / 2);\n line-height: var(--n-step-header-font-size);\n font-size: var(--n-step-header-font-size);\n position: relative;\n display: flex;\n font-weight: var(--n-step-header-font-weight);\n margin-left: 9px;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[r("title","\n white-space: nowrap;\n flex: 0;\n ")]),r("description","\n color: var(--n-description-text-color);\n margin-top: 12px;\n margin-left: 9px;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ")]),t("step-indicator","\n background-color: var(--n-indicator-color);\n box-shadow: 0 0 0 1px var(--n-indicator-border-color);\n height: var(--n-indicator-size);\n width: var(--n-indicator-size);\n border-radius: 50%;\n display: flex;\n align-items: center;\n justify-content: center;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ",[t("step-indicator-slot","\n position: relative;\n width: var(--n-indicator-icon-size);\n height: var(--n-indicator-icon-size);\n font-size: var(--n-indicator-icon-size);\n line-height: var(--n-indicator-icon-size);\n ",[r("index","\n display: inline-block;\n text-align: center;\n position: absolute;\n left: 0;\n top: 0;\n white-space: nowrap;\n font-size: var(--n-indicator-index-font-size);\n width: var(--n-indicator-icon-size);\n height: var(--n-indicator-icon-size);\n line-height: var(--n-indicator-icon-size);\n color: var(--n-indicator-text-color);\n transition: color .3s var(--n-bezier);\n ",[i()]),t("icon","\n color: var(--n-indicator-text-color);\n transition: color .3s var(--n-bezier);\n ",[i()]),t("base-icon","\n color: var(--n-indicator-text-color);\n transition: color .3s var(--n-bezier);\n ",[i()])])]),n("vertical","flex-direction: column;",[a("show-description",[s(">",[t("step","padding-bottom: 8px;")])]),s(">",[t("step","margin-bottom: 16px;",[s("&:last-child","margin-bottom: 0;"),s(">",[t("step-indicator",[s(">",[t("step-splitor","\n position: absolute;\n bottom: -8px;\n width: 1px;\n margin: 0 !important;\n left: calc(var(--n-indicator-size) / 2);\n height: calc(100% - var(--n-indicator-size));\n ")])]),t("step-content",[r("description","margin-top: 8px;")])])])])])]);function W(e){return e.map(((e,t)=>function(e,t){return"object"!=typeof e||null===e||Array.isArray(e)?null:(e.props||(e.props={}),e.props.internalIndex=t+1,e)}(e,t)))}const q=Object.assign(Object.assign({},c.props),{current:Number,status:{type:String,default:"process"},size:{type:String,default:"medium"},vertical:Boolean,"onUpdate:current":[Function,Array],onUpdateCurrent:[Function,Array]}),X=f("n-steps"),Z=e({name:"Steps",props:q,setup(e,{slots:t}){const{mergedClsPrefixRef:n,mergedRtlRef:s}=o(e),r=l("Steps",s,n),i=c("Steps","-steps",K,d,e,n);return p(X,{props:e,mergedThemeRef:i,mergedClsPrefixRef:n,stepsSlots:t}),{mergedClsPrefix:n,rtlEnabled:r}},render(){const{mergedClsPrefix:e}=this;return u("div",{class:[`${e}-steps`,this.rtlEnabled&&`${e}-steps--rtl`,this.vertical&&`${e}-steps--vertical`]},W(g(Y(this))))}}),ee=e({name:"Step",props:{status:String,title:String,description:String,disabled:Boolean,internalIndex:{type:Number,default:0}},setup(e){const t=h(X,null);t||b("step","`n-step` must be placed inside `n-steps`.");const{inlineThemeDisabled:n}=o(),{props:s,mergedThemeRef:r,mergedClsPrefixRef:i,stepsSlots:a}=t,l=m((()=>s.vertical)),c=m((()=>{const{status:t}=e;if(t)return t;{const{internalIndex:t}=e,{current:n}=s;if(void 0===n)return"process";if(t<n)return"finish";if(t===n)return s.status||"process";if(t>n)return"wait"}return"process"})),d=m((()=>{const{value:e}=c,{size:t}=s,{common:{cubicBezierEaseInOut:n},self:{stepHeaderFontWeight:i,[v("stepHeaderFontSize",t)]:a,[v("indicatorIndexFontSize",t)]:o,[v("indicatorSize",t)]:l,[v("indicatorIconSize",t)]:d,[v("indicatorTextColor",e)]:p,[v("indicatorBorderColor",e)]:u,[v("headerTextColor",e)]:g,[v("splitorColor",e)]:f,[v("indicatorColor",e)]:h,[v("descriptionTextColor",e)]:b}}=r.value;return{"--n-bezier":n,"--n-description-text-color":b,"--n-header-text-color":g,"--n-indicator-border-color":u,"--n-indicator-color":h,"--n-indicator-icon-size":d,"--n-indicator-index-font-size":o,"--n-indicator-size":l,"--n-indicator-text-color":p,"--n-splitor-color":f,"--n-step-header-font-size":a,"--n-step-header-font-weight":i}})),p=n?x("step",m((()=>{const{value:e}=c,{size:t}=s;return`${e[0]}${t[0]}`})),d,s):void 0,u=m((()=>{if(e.disabled)return;const{onUpdateCurrent:t,"onUpdate:current":n}=s;return t||n?()=>{t&&z(t,e.internalIndex),n&&z(n,e.internalIndex)}:void 0}));return{stepsSlots:a,mergedClsPrefix:i,vertical:l,mergedStatus:c,handleStepClick:u,cssVars:n?void 0:d,themeClass:null==p?void 0:p.themeClass,onRender:null==p?void 0:p.onRender}},render(){const{mergedClsPrefix:e,onRender:t,handleStepClick:n,disabled:s}=this,r=S(this.$slots.default,(t=>{const n=t||this.description;return n?u("div",{class:`${e}-step-content__description`},n):null}));return null==t||t(),u("div",{class:[`${e}-step`,s&&`${e}-step--disabled`,!s&&n&&`${e}-step--clickable`,this.themeClass,r&&`${e}-step--show-description`,`${e}-step--${this.mergedStatus}-status`],style:this.cssVars,onClick:n},u("div",{class:`${e}-step-indicator`},u("div",{class:`${e}-step-indicator-slot`},u(_,null,{default:()=>S(this.$slots.icon,(t=>{const{mergedStatus:n,stepsSlots:s}=this;return"finish"!==n&&"error"!==n?t||u("div",{key:this.internalIndex,class:`${e}-step-indicator-slot__index`},this.internalIndex):"finish"===n?u(y,{clsPrefix:e,key:"finish"},{default:()=>C(s["finish-icon"],(()=>[u(M,null)]))}):"error"===n?u(y,{clsPrefix:e,key:"error"},{default:()=>C(s["error-icon"],(()=>[u(P,null)]))}):null}))})),this.vertical?u("div",{class:`${e}-step-splitor`}):null),u("div",{class:`${e}-step-content`},u("div",{class:`${e}-step-content-header`},u("div",{class:`${e}-step-content-header__title`},C(this.$slots.title,(()=>[this.title]))),this.vertical?null:u("div",{class:`${e}-step-splitor`})),r))}});function te(e,t="YYYY-MM-DD HH:mm:ss"){return $(e).format(t)}const ne={class:"font-black"},se=e({__name:"success",setup(e){const t=w(),{t:n}=k(),s=j({generatedTime:te(new Date),generator:"ChatGPT"});return(e,r)=>{const i=O,a=G,o=J,l=V,c=U,d=ee,p=Z,u=E;return I(),R(u,null,{default:T((()=>[D(a,{vertical:"",size:"large"},{default:T((()=>[D(o,{status:"success",title:F(n)("page.result.successPage.title"),"sub-title":F(n)("page.result.successPage.subTitle")},{footer:T((()=>[D(a,{justify:"center"},{default:T((()=>[D(i,{type:"primary",onClick:r[0]||(r[0]=e=>F(t).push(F(A).BASE_HOME))},{default:T((()=>[B(H(F(n)("page.result.successPage.buttons.home")),1)])),_:1})])),_:1})])),_:1},8,["title","sub-title"]),D(u,{embedded:"",bordered:!1},{default:T((()=>[D(a,{vertical:"",size:"large"},{default:T((()=>[D(c,{"label-placement":"left"},{header:T((()=>[N("div",ne,H(F(n)("page.result.successPage.contentHeader")),1)])),default:T((()=>[D(l,{label:F(n)("page.result.successPage.generatedTimeLabel")},{default:T((()=>[B(H(F(s).generatedTime),1)])),_:1},8,["label"]),D(l,{label:F(n)("page.result.successPage.generatorLabel")},{default:T((()=>[B(H(F(s).generator),1)])),_:1},8,["label"]),D(l,{label:F(n)("page.result.successPage.contentLabel")},{default:T((()=>[B(H(F(n)("page.result.successPage.generatedContent")),1)])),_:1},8,["label"])])),_:1}),D(p,{current:3,"progress-dot":"",size:"small"},{default:T((()=>[D(d,{title:F(n)("page.result.successPage.step1")},null,8,["title"]),D(d,{title:F(n)("page.result.successPage.step2")},{default:T((()=>[N("p",null,H(F(n)("page.result.successPage.step2Content")),1)])),_:1},8,["title"]),D(d,{title:F(n)("page.result.successPage.step3")},{default:T((()=>[N("p",null,H(F(n)("page.result.successPage.step3Content")),1)])),_:1},8,["title"]),D(d,{title:F(n)("page.result.successPage.step4")},null,8,["title"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}});export{se as default};
