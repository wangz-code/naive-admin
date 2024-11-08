import{v as e,aF as n,d as o,D as r,aI as a,a as c,l,a8 as i,aK as d,aO as t,y as s,z as b,Q as u,A as h,bg as v,V as k,W as f,C as x,i as p,bc as g,bi as m,F as y,Y as C,G as w,b0 as z,x as R,b9 as S,b7 as T}from"./index-Chs2zBSz.js";import{u as D}from"./use-merged-state-DgUqyJ-M.js";const $=e("svg",{viewBox:"0 0 64 64",class:"check-icon"},e("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),F=e("svg",{viewBox:"0 0 100 100",class:"line-icon"},e("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),A=n("n-checkbox-group"),B=o({name:"CheckboxGroup",props:{min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},setup(e){const{mergedClsPrefixRef:n}=r(e),o=a(e),{mergedSizeRef:s,mergedDisabledRef:b}=o,u=c(e.defaultValue),h=l((()=>e.value)),v=D(h,u),k=l((()=>{var e;return(null===(e=v.value)||void 0===e?void 0:e.length)||0})),f=l((()=>Array.isArray(v.value)?new Set(v.value):new Set));return i(A,{checkedCountRef:k,maxRef:d(e,"max"),minRef:d(e,"min"),valueSetRef:f,disabledRef:b,mergedSizeRef:s,toggleCheckbox:function(n,r){const{nTriggerFormInput:a,nTriggerFormChange:c}=o,{onChange:l,"onUpdate:value":i,onUpdateValue:d}=e;if(Array.isArray(v.value)){const e=Array.from(v.value),o=e.findIndex((e=>e===r));n?~o||(e.push(r),d&&t(d,e,{actionType:"check",value:r}),i&&t(i,e,{actionType:"check",value:r}),a(),c(),u.value=e,l&&t(l,e)):~o&&(e.splice(o,1),d&&t(d,e,{actionType:"uncheck",value:r}),i&&t(i,e,{actionType:"uncheck",value:r}),l&&t(l,e),u.value=e,a(),c())}else n?(d&&t(d,[r],{actionType:"check",value:r}),i&&t(i,[r],{actionType:"check",value:r}),l&&t(l,[r]),u.value=[r],a(),c()):(d&&t(d,[],{actionType:"uncheck",value:r}),i&&t(i,[],{actionType:"uncheck",value:r}),l&&t(l,[]),u.value=[],a(),c())}}),{mergedClsPrefix:n}},render(){return e("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),V=s([b("checkbox","\n font-size: var(--n-font-size);\n outline: none;\n cursor: pointer;\n display: inline-flex;\n flex-wrap: nowrap;\n align-items: flex-start;\n word-break: break-word;\n line-height: var(--n-size);\n --n-merged-color-table: var(--n-color-table);\n ",[u("show-label","line-height: var(--n-label-line-height);"),s("&:hover",[b("checkbox-box",[h("border","border: var(--n-border-checked);")])]),s("&:focus:not(:active)",[b("checkbox-box",[h("border","\n border: var(--n-border-focus);\n box-shadow: var(--n-box-shadow-focus);\n ")])]),u("inside-table",[b("checkbox-box","\n background-color: var(--n-merged-color-table);\n ")]),u("checked",[b("checkbox-box","\n background-color: var(--n-color-checked);\n ",[b("checkbox-icon",[s(".check-icon","\n opacity: 1;\n transform: scale(1);\n ")])])]),u("indeterminate",[b("checkbox-box",[b("checkbox-icon",[s(".check-icon","\n opacity: 0;\n transform: scale(.5);\n "),s(".line-icon","\n opacity: 1;\n transform: scale(1);\n ")])])]),u("checked, indeterminate",[s("&:focus:not(:active)",[b("checkbox-box",[h("border","\n border: var(--n-border-checked);\n box-shadow: var(--n-box-shadow-focus);\n ")])]),b("checkbox-box","\n background-color: var(--n-color-checked);\n border-left: 0;\n border-top: 0;\n ",[h("border",{border:"var(--n-border-checked)"})])]),u("disabled",{cursor:"not-allowed"},[u("checked",[b("checkbox-box","\n background-color: var(--n-color-disabled-checked);\n ",[h("border",{border:"var(--n-border-disabled-checked)"}),b("checkbox-icon",[s(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),b("checkbox-box","\n background-color: var(--n-color-disabled);\n ",[h("border","\n border: var(--n-border-disabled);\n "),b("checkbox-icon",[s(".check-icon, .line-icon","\n fill: var(--n-check-mark-color-disabled);\n ")])]),h("label","\n color: var(--n-text-color-disabled);\n ")]),b("checkbox-box-wrapper","\n position: relative;\n width: var(--n-size);\n flex-shrink: 0;\n flex-grow: 0;\n user-select: none;\n -webkit-user-select: none;\n "),b("checkbox-box","\n position: absolute;\n left: 0;\n top: 50%;\n transform: translateY(-50%);\n height: var(--n-size);\n width: var(--n-size);\n display: inline-block;\n box-sizing: border-box;\n border-radius: var(--n-border-radius);\n background-color: var(--n-color);\n transition: background-color 0.3s var(--n-bezier);\n ",[h("border","\n transition:\n border-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n border-radius: inherit;\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n border: var(--n-border);\n "),b("checkbox-icon","\n display: flex;\n align-items: center;\n justify-content: center;\n position: absolute;\n left: 1px;\n right: 1px;\n top: 1px;\n bottom: 1px;\n ",[s(".check-icon, .line-icon","\n width: 100%;\n fill: var(--n-check-mark-color);\n opacity: 0;\n transform: scale(0.5);\n transform-origin: center;\n transition:\n fill 0.3s var(--n-bezier),\n transform 0.3s var(--n-bezier),\n opacity 0.3s var(--n-bezier),\n border-color 0.3s var(--n-bezier);\n "),v({left:"1px",top:"1px"})])]),h("label","\n color: var(--n-text-color);\n transition: color .3s var(--n-bezier);\n user-select: none;\n -webkit-user-select: none;\n padding: var(--n-label-padding);\n font-weight: var(--n-label-font-weight);\n ",[s("&:empty",{display:"none"})])]),k(b("checkbox","\n --n-merged-color-table: var(--n-color-table-modal);\n ")),f(b("checkbox","\n --n-merged-color-table: var(--n-color-table-popover);\n "))]),U=o({name:"Checkbox",props:Object.assign(Object.assign({},x.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),setup(e){const n=p(A,null),o=c(null),{mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedRtlRef:b}=r(e),u=c(e.defaultChecked),h=d(e,"checked"),v=D(h,u),k=g((()=>{if(n){const o=n.valueSetRef.value;return!(!o||void 0===e.value)&&o.has(e.value)}return v.value===e.checkedValue})),f=a(e,{mergedSize(o){const{size:r}=e;if(void 0!==r)return r;if(n){const{value:e}=n.mergedSizeRef;if(void 0!==e)return e}if(o){const{mergedSize:e}=o;if(void 0!==e)return e.value}return"medium"},mergedDisabled(o){const{disabled:r}=e;if(void 0!==r)return r;if(n){if(n.disabledRef.value)return!0;const{maxRef:{value:e},checkedCountRef:o}=n;if(void 0!==e&&o.value>=e&&!k.value)return!0;const{minRef:{value:r}}=n;if(void 0!==r&&o.value<=r&&k.value)return!0}return!!o&&o.disabled.value}}),{mergedDisabledRef:R,mergedSizeRef:S}=f,T=x("Checkbox","-checkbox",V,m,e,i);function $(o){if(n&&void 0!==e.value)n.toggleCheckbox(!k.value,e.value);else{const{onChange:n,"onUpdate:checked":r,onUpdateChecked:a}=e,{nTriggerFormInput:c,nTriggerFormChange:l}=f,i=k.value?e.uncheckedValue:e.checkedValue;r&&t(r,i,o),a&&t(a,i,o),n&&t(n,i,o),c(),l(),u.value=i}}const F={focus:()=>{var e;null===(e=o.value)||void 0===e||e.focus()},blur:()=>{var e;null===(e=o.value)||void 0===e||e.blur()}},B=y("Checkbox",b,i),U=l((()=>{const{value:e}=S,{common:{cubicBezierEaseInOut:n},self:{borderRadius:o,color:r,colorChecked:a,colorDisabled:c,colorTableHeader:l,colorTableHeaderModal:i,colorTableHeaderPopover:d,checkMarkColor:t,checkMarkColorDisabled:s,border:b,borderFocus:u,borderDisabled:h,borderChecked:v,boxShadowFocus:k,textColor:f,textColorDisabled:x,checkMarkColorDisabledChecked:p,colorDisabledChecked:g,borderDisabledChecked:m,labelPadding:y,labelLineHeight:w,labelFontWeight:z,[C("fontSize",e)]:R,[C("size",e)]:D}}=T.value;return{"--n-label-line-height":w,"--n-label-font-weight":z,"--n-size":D,"--n-bezier":n,"--n-border-radius":o,"--n-border":b,"--n-border-checked":v,"--n-border-focus":u,"--n-border-disabled":h,"--n-border-disabled-checked":m,"--n-box-shadow-focus":k,"--n-color":r,"--n-color-checked":a,"--n-color-table":l,"--n-color-table-modal":i,"--n-color-table-popover":d,"--n-color-disabled":c,"--n-color-disabled-checked":g,"--n-text-color":f,"--n-text-color-disabled":x,"--n-check-mark-color":t,"--n-check-mark-color-disabled":s,"--n-check-mark-color-disabled-checked":p,"--n-font-size":R,"--n-label-padding":y}})),I=s?w("checkbox",l((()=>S.value[0])),U,e):void 0;return Object.assign(f,F,{rtlEnabled:B,selfRef:o,mergedClsPrefix:i,mergedDisabled:R,renderedChecked:k,mergedTheme:T,labelId:z(),handleClick:function(e){R.value||$(e)},handleKeyUp:function(e){if(!R.value)switch(e.key){case" ":case"Enter":$(e)}},handleKeyDown:function(e){if(" "===e.key)e.preventDefault()},cssVars:s?void 0:U,themeClass:null==I?void 0:I.themeClass,onRender:null==I?void 0:I.onRender})},render(){var n;const{$slots:o,renderedChecked:r,mergedDisabled:a,indeterminate:c,privateInsideTable:l,cssVars:i,labelId:d,label:t,mergedClsPrefix:s,focusable:b,handleKeyUp:u,handleKeyDown:h,handleClick:v}=this;null===(n=this.onRender)||void 0===n||n.call(this);const k=R(o.default,(n=>t||n?e("span",{class:`${s}-checkbox__label`,id:d},t||n):null));return e("div",{ref:"selfRef",class:[`${s}-checkbox`,this.themeClass,this.rtlEnabled&&`${s}-checkbox--rtl`,r&&`${s}-checkbox--checked`,a&&`${s}-checkbox--disabled`,c&&`${s}-checkbox--indeterminate`,l&&`${s}-checkbox--inside-table`,k&&`${s}-checkbox--show-label`],tabindex:a||!b?void 0:0,role:"checkbox","aria-checked":c?"mixed":r,"aria-labelledby":d,style:i,onKeyup:u,onKeydown:h,onClick:v,onMousedown:()=>{T("selectstart",window,(e=>{e.preventDefault()}),{once:!0})}},e("div",{class:`${s}-checkbox-box-wrapper`}," ",e("div",{class:`${s}-checkbox-box`},e(S,null,{default:()=>this.indeterminate?e("div",{key:"indeterminate",class:`${s}-checkbox-icon`},F):e("div",{key:"check",class:`${s}-checkbox-icon`},$)}),e("div",{class:`${s}-checkbox-box__border`}))),k)}});export{U as _,B as a};
