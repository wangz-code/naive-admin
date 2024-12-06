import{z as e,A as n,Q as o,bI as r,y as t,C as i,d as s,D as a,bJ as l,F as c,l as d,bK as b,Y as g,G as h,a as u,v,ab as p,bL as m,aC as f,x as z,b8 as C,N as y,bM as x,bN as M,bO as _,bP as w,bF as P,u as $,o as A,c as R,w as k,b as B,h as I,j,e as L,bQ as T,B as S,L as F}from"./index-BvLEaQlu.js";const H=e("alert","\n line-height: var(--n-line-height);\n border-radius: var(--n-border-radius);\n position: relative;\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-color);\n text-align: start;\n word-break: break-word;\n",[n("border","\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n transition: border-color .3s var(--n-bezier);\n border: var(--n-border);\n pointer-events: none;\n "),o("closable",[e("alert-body",[n("title","\n padding-right: 24px;\n ")])]),n("icon",{color:"var(--n-icon-color)"}),e("alert-body",{padding:"var(--n-padding)"},[n("title",{color:"var(--n-title-text-color)"}),n("content",{color:"var(--n-content-text-color)"})]),r({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),n("icon","\n position: absolute;\n left: 0;\n top: 0;\n align-items: center;\n justify-content: center;\n display: flex;\n width: var(--n-icon-size);\n height: var(--n-icon-size);\n font-size: var(--n-icon-size);\n margin: var(--n-icon-margin);\n "),n("close","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n position: absolute;\n right: 0;\n top: 0;\n margin: var(--n-close-margin);\n "),o("show-icon",[e("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),o("right-adjust",[e("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),e("alert-body","\n border-radius: var(--n-border-radius);\n transition: border-color .3s var(--n-bezier);\n ",[n("title","\n transition: color .3s var(--n-bezier);\n font-size: 16px;\n line-height: 19px;\n font-weight: var(--n-title-font-weight);\n ",[t("& +",[n("content",{marginTop:"9px"})])]),n("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),n("icon",{transition:"color .3s var(--n-bezier)"})]),O=s({name:"Alert",inheritAttrs:!1,props:Object.assign(Object.assign({},i.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,inlineThemeDisabled:r,mergedRtlRef:t}=a(e),s=i("Alert","-alert",H,l,e,n),v=c("Alert",t,n),p=d((()=>{const{common:{cubicBezierEaseInOut:n},self:o}=s.value,{fontSize:r,borderRadius:t,titleFontWeight:i,lineHeight:a,iconSize:l,iconMargin:c,iconMarginRtl:d,closeIconSize:h,closeBorderRadius:u,closeSize:v,closeMargin:p,closeMarginRtl:m,padding:f}=o,{type:z}=e,{left:C,right:y}=b(c);return{"--n-bezier":n,"--n-color":o[g("color",z)],"--n-close-icon-size":h,"--n-close-border-radius":u,"--n-close-color-hover":o[g("closeColorHover",z)],"--n-close-color-pressed":o[g("closeColorPressed",z)],"--n-close-icon-color":o[g("closeIconColor",z)],"--n-close-icon-color-hover":o[g("closeIconColorHover",z)],"--n-close-icon-color-pressed":o[g("closeIconColorPressed",z)],"--n-icon-color":o[g("iconColor",z)],"--n-border":o[g("border",z)],"--n-title-text-color":o[g("titleTextColor",z)],"--n-content-text-color":o[g("contentTextColor",z)],"--n-line-height":a,"--n-border-radius":t,"--n-font-size":r,"--n-title-font-weight":i,"--n-icon-size":l,"--n-icon-margin":c,"--n-icon-margin-rtl":d,"--n-close-size":v,"--n-close-margin":p,"--n-close-margin-rtl":m,"--n-padding":f,"--n-icon-margin-left":C,"--n-icon-margin-right":y}})),m=r?h("alert",d((()=>e.type[0])),p,e):void 0,f=u(!0);return{rtlEnabled:v,mergedClsPrefix:n,mergedBordered:o,visible:f,handleCloseClick:()=>{var n;Promise.resolve(null===(n=e.onClose)||void 0===n?void 0:n.call(e)).then((e=>{!1!==e&&(f.value=!1)}))},handleAfterLeave:()=>{(()=>{const{onAfterLeave:n,onAfterHide:o}=e;n&&n(),o&&o()})()},mergedTheme:s,cssVars:r?void 0:p,themeClass:null==m?void 0:m.themeClass,onRender:null==m?void 0:m.onRender}},render(){var e;return null===(e=this.onRender)||void 0===e||e.call(this),v(C,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:n}=this,o={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?v("div",Object.assign({},p(this.$attrs,o)),this.closable&&v(m,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&v("div",{class:`${e}-alert__border`}),this.showIcon&&v("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},f(n.icon,(()=>[v(y,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return v(w,null);case"info":return v(_,null);case"warning":return v(M,null);case"error":return v(x,null);default:return null}}})]))),v("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},z(n.header,(n=>{const o=n||this.title;return o?v("div",{class:`${e}-alert-body__title`},o):null})),n.default&&v("div",{class:`${e}-alert-body__content`},n))):null}})}}),E=s({__name:"CurrentPermissionMode",setup(e){const{togglePermissionMode:n,getPermissionMode:o}=P(),{t:r}=$();return(e,t)=>{const i=S,s=F;return A(),R(s,{title:L(r)("page.permission.permissionMode.currentMode"),embedded:"",bordered:!1},{default:k((()=>[B(i,{type:"info"},{default:k((()=>[I(j(L(o)===L(T).BACKEND?L(r)("page.permission.permissionMode.backendMode"):L(r)("page.permission.permissionMode.frontendMode")),1)])),_:1}),B(i,{class:"ml-4",type:"primary",onClick:L(n)},{default:k((()=>[I(j(L(r)("page.permission.permissionMode.toggleMode")),1)])),_:1},8,["onClick"])])),_:1},8,["title"])}}});export{E as _,O as a};
