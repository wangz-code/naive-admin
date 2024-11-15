import{d as e,a as t,bA as n,v as a,bB as r,bC as o,bD as i,au as s,i as l,t as d,l as b,ai as c,H as p,N as f,bE as v,bt as u,b9 as h,z as g,Q as x,y as m,A as y,U as w,D as C,C as $,bF as z,a9 as R,a0 as S,an as T,a2 as P,a4 as _,az as j,a1 as L,Y as A,bs as W,G as B,x as k,b3 as E,aD as N,a8 as H,aB as O,bG as D,bH as F,bI as I,k as V,o as U,p as M,b as X,w as G,g as Y,e as q,j as Q,Z as J,h as K,_ as Z,L as ee}from"./index-BT0ZcDkn.js";import{_ as te}from"./ToolTipper.vuevuetypescriptsetuptruelang-BQIt4vT0.js";import{u as ne}from"./use-compitable-CHcH6xDN.js";import{u as ae}from"./use-merged-state-D7wGS6Km.js";import{c as re,b as oe,o as ie}from"./Popover-3mPJ01hC.js";import{_ as se}from"./Avatar-BpYqF4bS.js";import{_ as le}from"./Space-_SFqgYmP.js";import"./Tooltip-BFoQMn72.js";import"./next-frame-once-DiJwGkuW.js";import"./Tag-D4OMG_5z.js";import"./get-slot-BjAOOWF7.js";const de=oe(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[oe("&::-webkit-scrollbar",{width:0,height:0})]),be=e({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=t(null);const a=n();de.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:re,ssr:a});const r={scrollTo(...t){var n;null===(n=e.value)||void 0===n||n.scrollTo(...t)}};return Object.assign({selfRef:e,handleWheel:function(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&0!==e.deltaY&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}},r)},render(){return a("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var ce=/\s/;var pe=/^\s+/;function fe(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&ce.test(e.charAt(t)););return t}(e)+1).replace(pe,""):e}var ve=/^[-+]0x[0-9a-f]+$/i,ue=/^0b[01]+$/i,he=/^0o[0-7]+$/i,ge=parseInt;function xe(e){if("number"==typeof e)return e;if(r(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=fe(e);var n=ue.test(e);return n||he.test(e)?ge(e.slice(2),n?2:8):ve.test(e)?NaN:+e}var me=function(){return i.Date.now()},ye=Math.max,we=Math.min;function Ce(e,t,n){var a,r,i,s,l,d,b=0,c=!1,p=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=a,o=r;return a=r=void 0,b=t,s=e.apply(o,n)}function u(e){var n=e-d;return void 0===d||n>=t||n<0||p&&e-b>=i}function h(){var e=me();if(u(e))return g(e);l=setTimeout(h,function(e){var n=t-(e-d);return p?we(n,i-(e-b)):n}(e))}function g(e){return l=void 0,f&&a?v(e):(a=r=void 0,s)}function x(){var e=me(),n=u(e);if(a=arguments,r=this,d=e,n){if(void 0===l)return function(e){return b=e,l=setTimeout(h,t),c?v(e):s}(d);if(p)return clearTimeout(l),l=setTimeout(h,t),v(d)}return void 0===l&&(l=setTimeout(h,t)),s}return t=xe(t)||0,o(n)&&(c=!!n.leading,i=(p="maxWait"in n)?ye(xe(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),x.cancel=function(){void 0!==l&&clearTimeout(l),b=0,a=d=r=l=void 0},x.flush=function(){return void 0===l?s:g(me())},x}function $e(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),Ce(e,t,{leading:a,maxWait:t,trailing:r})}const ze=e({name:"Add",render:()=>a("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}),Re=s("n-tabs"),Se={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Te=e({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Se,setup(e){const t=l(Re,null);return t||d("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return a("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Pe=e({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},h(Se,["displayDirective"])),setup(e){const{mergedClsPrefixRef:t,valueRef:n,typeRef:a,closableRef:r,tabStyleRef:o,addTabStyleRef:i,tabClassRef:s,addTabClassRef:d,tabChangeIdRef:c,onBeforeLeaveRef:p,triggerRef:f,handleAdd:v,activateTab:u,handleClose:h}=l(Re);return{trigger:f,mergedClosable:b((()=>{if(e.internalAddable)return!1;const{closable:t}=e;return void 0===t?r.value:t})),style:o,addStyle:i,tabClass:s,addTabClass:d,clsPrefix:t,value:n,type:a,handleClose(t){t.stopPropagation(),e.disabled||h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable)return void v();const{name:t}=e,a=++c.id;if(t!==n.value){const{value:r}=p;r?Promise.resolve(r(e.name,n.value)).then((e=>{e&&c.id===a&&u(t)})):u(t)}}}},render(){const{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:o,tab:i,value:s,mergedClosable:l,trigger:d,$slots:{default:b}}=this,h=null!=o?o:i;return a("div",{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?a("div",{class:`${t}-tabs-tab-pad`}):null,a("div",Object.assign({key:n,"data-name":n,"data-disabled":!!r||void 0},c({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,l&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:"click"===d?this.activateTab:void 0,onMouseenter:"hover"===d?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),a("span",{class:`${t}-tabs-tab__label`},e?a(p,null,a("div",{class:`${t}-tabs-tab__height-placeholder`}," "),a(f,{clsPrefix:t},{default:()=>a(ze,null)})):b?b():"object"==typeof h?h:v(null!=h?h:n)),l&&"card"===this.type?a(u,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),_e=g("tabs","\n box-sizing: border-box;\n width: 100%;\n display: flex;\n flex-direction: column;\n transition:\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n",[x("segment-type",[g("tabs-rail",[m("&.transition-disabled",[g("tabs-capsule","\n transition: none;\n ")])])]),x("top",[g("tab-pane","\n padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);\n ")]),x("left",[g("tab-pane","\n padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);\n ")]),x("left, right","\n flex-direction: row;\n ",[g("tabs-bar","\n width: 2px;\n right: 0;\n transition:\n top .2s var(--n-bezier),\n max-height .2s var(--n-bezier),\n background-color .3s var(--n-bezier);\n "),g("tabs-tab","\n padding: var(--n-tab-padding-vertical); \n ")]),x("right","\n flex-direction: row-reverse;\n ",[g("tab-pane","\n padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);\n "),g("tabs-bar","\n left: 0;\n ")]),x("bottom","\n flex-direction: column-reverse;\n justify-content: flex-end;\n ",[g("tab-pane","\n padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);\n "),g("tabs-bar","\n top: 0;\n ")]),g("tabs-rail","\n position: relative;\n padding: 3px;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n background-color: var(--n-color-segment);\n transition: background-color .3s var(--n-bezier);\n display: flex;\n align-items: center;\n ",[g("tabs-capsule","\n border-radius: var(--n-tab-border-radius);\n position: absolute;\n pointer-events: none;\n background-color: var(--n-tab-color-segment);\n box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);\n transition: transform 0.3s var(--n-bezier);\n "),g("tabs-tab-wrapper","\n flex-basis: 0;\n flex-grow: 1;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[g("tabs-tab","\n overflow: hidden;\n border-radius: var(--n-tab-border-radius);\n width: 100%;\n display: flex;\n align-items: center;\n justify-content: center;\n ",[x("active","\n font-weight: var(--n-font-weight-strong);\n color: var(--n-tab-text-color-active);\n "),m("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])])]),x("flex",[g("tabs-nav","\n width: 100%;\n position: relative;\n ",[g("tabs-wrapper","\n width: 100%;\n ",[g("tabs-tab","\n margin-right: 0;\n ")])])]),g("tabs-nav","\n box-sizing: border-box;\n line-height: 1.5;\n display: flex;\n transition: border-color .3s var(--n-bezier);\n ",[y("prefix, suffix","\n display: flex;\n align-items: center;\n "),y("prefix","padding-right: 16px;"),y("suffix","padding-left: 16px;")]),x("top, bottom",[g("tabs-nav-scroll-wrapper",[m("&::before","\n top: 0;\n bottom: 0;\n left: 0;\n width: 20px;\n "),m("&::after","\n top: 0;\n bottom: 0;\n right: 0;\n width: 20px;\n "),x("shadow-start",[m("&::before","\n box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);\n ")]),x("shadow-end",[m("&::after","\n box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);\n ")])])]),x("left, right",[g("tabs-nav-scroll-content","\n flex-direction: column;\n "),g("tabs-nav-scroll-wrapper",[m("&::before","\n top: 0;\n left: 0;\n right: 0;\n height: 20px;\n "),m("&::after","\n bottom: 0;\n left: 0;\n right: 0;\n height: 20px;\n "),x("shadow-start",[m("&::before","\n box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);\n ")]),x("shadow-end",[m("&::after","\n box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);\n ")])])]),g("tabs-nav-scroll-wrapper","\n flex: 1;\n position: relative;\n overflow: hidden;\n ",[g("tabs-nav-y-scroll","\n height: 100%;\n width: 100%;\n overflow-y: auto; \n scrollbar-width: none;\n ",[m("&::-webkit-scrollbar","\n width: 0;\n height: 0;\n ")]),m("&::before, &::after",'\n transition: box-shadow .3s var(--n-bezier);\n pointer-events: none;\n content: "";\n position: absolute;\n z-index: 1;\n ')]),g("tabs-nav-scroll-content","\n display: flex;\n position: relative;\n min-width: 100%;\n min-height: 100%;\n width: fit-content;\n box-sizing: border-box;\n "),g("tabs-wrapper","\n display: inline-flex;\n flex-wrap: nowrap;\n position: relative;\n "),g("tabs-tab-wrapper","\n display: flex;\n flex-wrap: nowrap;\n flex-shrink: 0;\n flex-grow: 0;\n "),g("tabs-tab","\n cursor: pointer;\n white-space: nowrap;\n flex-wrap: nowrap;\n display: inline-flex;\n align-items: center;\n color: var(--n-tab-text-color);\n font-size: var(--n-tab-font-size);\n background-clip: padding-box;\n padding: var(--n-tab-padding);\n transition:\n box-shadow .3s var(--n-bezier),\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ",[x("disabled",{cursor:"not-allowed"}),y("close","\n margin-left: 6px;\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n "),y("label","\n display: flex;\n align-items: center;\n z-index: 1;\n ")]),g("tabs-bar","\n position: absolute;\n bottom: 0;\n height: 2px;\n border-radius: 1px;\n background-color: var(--n-bar-color);\n transition:\n left .2s var(--n-bezier),\n max-width .2s var(--n-bezier),\n opacity .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n ",[m("&.transition-disabled","\n transition: none;\n "),x("disabled","\n background-color: var(--n-tab-text-color-disabled)\n ")]),g("tabs-pane-wrapper","\n position: relative;\n overflow: hidden;\n transition: max-height .2s var(--n-bezier);\n "),g("tab-pane","\n color: var(--n-pane-text-color);\n width: 100%;\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n opacity .2s var(--n-bezier);\n left: 0;\n right: 0;\n top: 0;\n ",[m("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active","\n transition:\n color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n transform .2s var(--n-bezier),\n opacity .2s var(--n-bezier);\n "),m("&.next-transition-leave-active, &.prev-transition-leave-active","\n position: absolute;\n "),m("&.next-transition-enter-from, &.prev-transition-leave-to","\n transform: translateX(32px);\n opacity: 0;\n "),m("&.next-transition-leave-to, &.prev-transition-enter-from","\n transform: translateX(-32px);\n opacity: 0;\n "),m("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to","\n transform: translateX(0);\n opacity: 1;\n ")]),g("tabs-tab-pad","\n box-sizing: border-box;\n width: var(--n-tab-gap);\n flex-grow: 0;\n flex-shrink: 0;\n "),x("line-type, bar-type",[g("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n box-sizing: border-box;\n vertical-align: bottom;\n ",[m("&:hover",{color:"var(--n-tab-text-color-hover)"}),x("active","\n color: var(--n-tab-text-color-active);\n font-weight: var(--n-tab-font-weight-active);\n "),x("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),g("tabs-nav",[x("line-type",[x("top",[y("prefix, suffix","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),g("tabs-nav-scroll-content","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),g("tabs-bar","\n bottom: -1px;\n ")]),x("left",[y("prefix, suffix","\n border-right: 1px solid var(--n-tab-border-color);\n "),g("tabs-nav-scroll-content","\n border-right: 1px solid var(--n-tab-border-color);\n "),g("tabs-bar","\n right: -1px;\n ")]),x("right",[y("prefix, suffix","\n border-left: 1px solid var(--n-tab-border-color);\n "),g("tabs-nav-scroll-content","\n border-left: 1px solid var(--n-tab-border-color);\n "),g("tabs-bar","\n left: -1px;\n ")]),x("bottom",[y("prefix, suffix","\n border-top: 1px solid var(--n-tab-border-color);\n "),g("tabs-nav-scroll-content","\n border-top: 1px solid var(--n-tab-border-color);\n "),g("tabs-bar","\n top: -1px;\n ")]),y("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n "),g("tabs-nav-scroll-content","\n transition: border-color .3s var(--n-bezier);\n "),g("tabs-bar","\n border-radius: 0;\n ")]),x("card-type",[y("prefix, suffix","\n transition: border-color .3s var(--n-bezier);\n "),g("tabs-pad","\n flex-grow: 1;\n transition: border-color .3s var(--n-bezier);\n "),g("tabs-tab-pad","\n transition: border-color .3s var(--n-bezier);\n "),g("tabs-tab","\n font-weight: var(--n-tab-font-weight);\n border: 1px solid var(--n-tab-border-color);\n background-color: var(--n-tab-color);\n box-sizing: border-box;\n position: relative;\n vertical-align: bottom;\n display: flex;\n justify-content: space-between;\n font-size: var(--n-tab-font-size);\n color: var(--n-tab-text-color);\n ",[x("addable","\n padding-left: 8px;\n padding-right: 8px;\n font-size: 16px;\n justify-content: center;\n ",[y("height-placeholder","\n width: 0;\n font-size: var(--n-tab-font-size);\n "),w("disabled",[m("&:hover","\n color: var(--n-tab-text-color-hover);\n ")])]),x("closable","padding-right: 8px;"),x("active","\n background-color: #0000;\n font-weight: var(--n-tab-font-weight-active);\n color: var(--n-tab-text-color-active);\n "),x("disabled","color: var(--n-tab-text-color-disabled);")])]),x("left, right","\n flex-direction: column; \n ",[y("prefix, suffix","\n padding: var(--n-tab-padding-vertical);\n "),g("tabs-wrapper","\n flex-direction: column;\n "),g("tabs-tab-wrapper","\n flex-direction: column;\n ",[g("tabs-tab-pad","\n height: var(--n-tab-gap-vertical);\n width: 100%;\n ")])]),x("top",[x("card-type",[g("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),y("prefix, suffix","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),g("tabs-tab","\n border-top-left-radius: var(--n-tab-border-radius);\n border-top-right-radius: var(--n-tab-border-radius);\n ",[x("active","\n border-bottom: 1px solid #0000;\n ")]),g("tabs-tab-pad","\n border-bottom: 1px solid var(--n-tab-border-color);\n "),g("tabs-pad","\n border-bottom: 1px solid var(--n-tab-border-color);\n ")])]),x("left",[x("card-type",[g("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),y("prefix, suffix","\n border-right: 1px solid var(--n-tab-border-color);\n "),g("tabs-tab","\n border-top-left-radius: var(--n-tab-border-radius);\n border-bottom-left-radius: var(--n-tab-border-radius);\n ",[x("active","\n border-right: 1px solid #0000;\n ")]),g("tabs-tab-pad","\n border-right: 1px solid var(--n-tab-border-color);\n "),g("tabs-pad","\n border-right: 1px solid var(--n-tab-border-color);\n ")])]),x("right",[x("card-type",[g("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),y("prefix, suffix","\n border-left: 1px solid var(--n-tab-border-color);\n "),g("tabs-tab","\n border-top-right-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ",[x("active","\n border-left: 1px solid #0000;\n ")]),g("tabs-tab-pad","\n border-left: 1px solid var(--n-tab-border-color);\n "),g("tabs-pad","\n border-left: 1px solid var(--n-tab-border-color);\n ")])]),x("bottom",[x("card-type",[g("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),y("prefix, suffix","\n border-top: 1px solid var(--n-tab-border-color);\n "),g("tabs-tab","\n border-bottom-left-radius: var(--n-tab-border-radius);\n border-bottom-right-radius: var(--n-tab-border-radius);\n ",[x("active","\n border-top: 1px solid #0000;\n ")]),g("tabs-tab-pad","\n border-top: 1px solid var(--n-tab-border-color);\n "),g("tabs-pad","\n border-top: 1px solid var(--n-tab-border-color);\n ")])])])]),je=e({name:"Tabs",props:Object.assign(Object.assign({},$.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),setup(e,{slots:n}){var a,r,o,i;const{mergedClsPrefixRef:s,inlineThemeDisabled:l}=C(e),d=$("Tabs","-tabs",_e,z,e,s),c=t(null),p=t(null),f=t(null),v=t(null),u=t(null),h=t(null),g=t(!0),x=t(!0),m=ne(e,["labelSize","size"]),y=ne(e,["activeName","value"]),w=t(null!==(r=null!==(a=y.value)&&void 0!==a?a:e.defaultValue)&&void 0!==r?r:n.default?null===(i=null===(o=R(n.default())[0])||void 0===o?void 0:o.props)||void 0===i?void 0:i.name:null),k=ae(y,w),E={id:0},O=b((()=>{if(e.justifyContent&&"card"!==e.type)return{display:"flex",justifyContent:e.justifyContent}}));function D(){var e;const{value:t}=k;if(null===t)return null;return null===(e=c.value)||void 0===e?void 0:e.querySelector(`[data-name="${t}"]`)}function F(e){const{value:t}=p;if(t)for(const n of e)t.style[n]=""}function I(){if("card"===e.type)return;const t=D();t?function(t){if("card"===e.type)return;const{value:n}=p;if(!n)return;const a="0"===n.style.opacity;if(t){const r=`${s.value}-tabs-bar--disabled`,{barWidth:o,placement:i}=e;if("true"===t.dataset.disabled?n.classList.add(r):n.classList.remove(r),["top","bottom"].includes(i)){if(F(["top","maxHeight","height"]),"number"==typeof o&&t.offsetWidth>=o){const e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width="8192px",a&&(n.style.transition="none"),n.offsetWidth,a&&(n.style.transition="",n.style.opacity="1")}else{if(F(["left","maxWidth","width"]),"number"==typeof o&&t.offsetHeight>=o){const e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height="8192px",a&&(n.style.transition="none"),n.offsetHeight,a&&(n.style.transition="",n.style.opacity="1")}}}(t):function(){if("card"===e.type)return;const{value:t}=p;t&&(t.style.opacity="0")}()}function V(){var e;const t=null===(e=u.value)||void 0===e?void 0:e.$el;if(!t)return;const n=D();if(!n)return;const{scrollLeft:a,offsetWidth:r}=t,{offsetLeft:o,offsetWidth:i}=n;a>o?t.scrollTo({top:0,left:o,behavior:"smooth"}):o+i>a+r&&t.scrollTo({top:0,left:o+i-r,behavior:"smooth"})}S(k,(()=>{E.id=0,I(),V()}));const U=t(null);let M=0,X=null;const G={value:[]},Y=t("next");function q(){const{value:e}=p;if(!e)return;const t="transition-disabled";e.classList.add(t),I(),e.classList.remove(t)}const Q=t(null);function J({transitionDisabled:e}){const t=c.value;if(!t)return;e&&t.classList.add("transition-disabled");const n=D();n&&Q.value&&(Q.value.style.width=`${n.offsetWidth}px`,Q.value.style.height=`${n.offsetHeight}px`,Q.value.style.transform=`translateX(${n.offsetLeft-H(getComputedStyle(t).paddingLeft)}px)`,e&&Q.value.offsetWidth),e&&t.classList.remove("transition-disabled")}S([k],(()=>{"segment"===e.type&&T((()=>{J({transitionDisabled:!1})}))})),P((()=>{"segment"===e.type&&J({transitionDisabled:!0})}));let K=0;const Z=$e((function(t){var n;if(0===t.contentRect.width&&0===t.contentRect.height)return;if(K===t.contentRect.width)return;K=t.contentRect.width;const{type:a}=e;if("line"!==a&&"bar"!==a||q(),"segment"!==a){const{placement:t}=e;re(("top"===t||"bottom"===t?null===(n=u.value)||void 0===n?void 0:n.$el:h.value)||null)}}),64);S([()=>e.justifyContent,()=>e.size],(()=>{T((()=>{const{type:t}=e;"line"!==t&&"bar"!==t||q()}))}));const ee=t(!1);const te=$e((function(t){var n;const{target:a,contentRect:{width:r,height:o}}=t,i=a.parentElement.parentElement.offsetWidth,s=a.parentElement.parentElement.offsetHeight,{placement:l}=e;if(ee.value){const{value:e}=v;if(!e)return;"top"===l||"bottom"===l?i-r>e.$el.offsetWidth&&(ee.value=!1):s-o>e.$el.offsetHeight&&(ee.value=!1)}else"top"===l||"bottom"===l?i<r&&(ee.value=!0):s<o&&(ee.value=!0);re((null===(n=u.value)||void 0===n?void 0:n.$el)||null)}),64);function re(t){if(!t)return;const{placement:n}=e;if("top"===n||"bottom"===n){const{scrollLeft:e,scrollWidth:n,offsetWidth:a}=t;g.value=e<=0,x.value=e+a>=n}else{const{scrollTop:e,scrollHeight:n,offsetHeight:a}=t;g.value=e<=0,x.value=e+a>=n}}const oe=$e((e=>{re(e.target)}),64);_(Re,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),tabClassRef:j(e,"tabClass"),addTabStyleRef:j(e,"addTabStyle"),addTabClassRef:j(e,"addTabClass"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:s,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:k,tabChangeIdRef:E,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:function(t){const n=k.value;let a="next";for(const e of G.value){if(e===n)break;if(e===t){a="prev";break}}Y.value=a,function(t){const{onActiveNameChange:n,onUpdateValue:a,"onUpdate:value":r}=e;n&&N(n,t);a&&N(a,t);r&&N(r,t);w.value=t}(t)},handleClose:function(t){const{onClose:n}=e;n&&N(n,t)},handleAdd:function(){const{onAdd:t}=e;t&&t(),T((()=>{const e=D(),{value:t}=u;e&&t&&t.scrollTo({left:e.offsetLeft,top:0,behavior:"smooth"})}))}}),ie((()=>{I(),V()})),L((()=>{const{value:e}=f;if(!e)return;const{value:t}=s,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,a=`${t}-tabs-nav-scroll-wrapper--shadow-end`;g.value?e.classList.remove(n):e.classList.add(n),x.value?e.classList.remove(a):e.classList.add(a)}));const se={syncBarPosition:()=>{I()}},le=b((()=>{const{value:t}=m,{type:n}=e,a=`${t}${{card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[n]}`,{self:{barColor:r,closeIconColor:o,closeIconColorHover:i,closeIconColorPressed:s,tabColor:l,tabBorderColor:b,paneTextColor:c,tabFontWeight:p,tabBorderRadius:f,tabFontWeightActive:v,colorSegment:u,fontWeightStrong:h,tabColorSegment:g,closeSize:x,closeIconSize:y,closeColorHover:w,closeColorPressed:C,closeBorderRadius:$,[A("panePadding",t)]:z,[A("tabPadding",a)]:R,[A("tabPaddingVertical",a)]:S,[A("tabGap",a)]:T,[A("tabGap",`${a}Vertical`)]:P,[A("tabTextColor",n)]:_,[A("tabTextColorActive",n)]:j,[A("tabTextColorHover",n)]:L,[A("tabTextColorDisabled",n)]:B,[A("tabFontSize",t)]:k},common:{cubicBezierEaseInOut:E}}=d.value;return{"--n-bezier":E,"--n-color-segment":u,"--n-bar-color":r,"--n-tab-font-size":k,"--n-tab-text-color":_,"--n-tab-text-color-active":j,"--n-tab-text-color-disabled":B,"--n-tab-text-color-hover":L,"--n-pane-text-color":c,"--n-tab-border-color":b,"--n-tab-border-radius":f,"--n-close-size":x,"--n-close-icon-size":y,"--n-close-color-hover":w,"--n-close-color-pressed":C,"--n-close-border-radius":$,"--n-close-icon-color":o,"--n-close-icon-color-hover":i,"--n-close-icon-color-pressed":s,"--n-tab-color":l,"--n-tab-font-weight":p,"--n-tab-font-weight-active":v,"--n-tab-padding":R,"--n-tab-padding-vertical":S,"--n-tab-gap":T,"--n-tab-gap-vertical":P,"--n-pane-padding-left":W(z,"left"),"--n-pane-padding-right":W(z,"right"),"--n-pane-padding-top":W(z,"top"),"--n-pane-padding-bottom":W(z,"bottom"),"--n-font-weight-strong":h,"--n-tab-color-segment":g}})),de=l?B("tabs",b((()=>`${m.value[0]}${e.type[0]}`)),le,e):void 0;return Object.assign({mergedClsPrefix:s,mergedValue:k,renderedNames:new Set,segmentCapsuleElRef:Q,tabsPaneWrapperRef:U,tabsElRef:c,barElRef:p,addTabInstRef:v,xScrollInstRef:u,scrollWrapperElRef:f,addTabFixed:ee,tabWrapperStyle:O,handleNavResize:Z,mergedSize:m,handleScroll:oe,handleTabsResize:te,cssVars:l?void 0:le,themeClass:null==de?void 0:de.themeClass,animationDirection:Y,renderNameListRef:G,yScrollElRef:h,handleSegmentResize:()=>{J({transitionDisabled:!0})},onAnimationBeforeLeave:function(e){const t=U.value;if(t){M=e.getBoundingClientRect().height;const n=`${M}px`,a=()=>{t.style.height=n,t.style.maxHeight=n};X?(a(),X(),X=null):X=a}},onAnimationEnter:function(e){const t=U.value;if(t){const n=e.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(M,n)}px`};X?(X(),X=null,a()):X=a}},onAnimationAfterEnter:function(){const t=U.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:n}=e;if("string"==typeof n)t.style.cssText=n;else if(n){const{maxHeight:e,height:a}=n;void 0!==e&&(t.style.maxHeight=e),void 0!==a&&(t.style.height=a)}}},onRender:null==de?void 0:de.onRender},se)},render(){const{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:o,mergedSize:i,renderNameListRef:s,onRender:l,paneWrapperClass:d,paneWrapperStyle:b,$slots:{default:c,prefix:p,suffix:f}}=this;null==l||l();const v=c?R(c()).filter((e=>!0===e.type.__TAB_PANE__)):[],u=c?R(c()).filter((e=>!0===e.type.__TAB__)):[],h=!u.length,g="card"===t,x="segment"===t,m=!g&&!x&&this.justifyContent;s.value=[];const y=()=>{const t=a("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},m?null:a("div",{class:`${e}-tabs-scroll-padding`,style:"top"===n||"bottom"===n?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?v.map(((e,t)=>(s.value.push(e.props.name),Be(a(Pe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t&&(!m||"center"===m||"start"===m||"end"===m)}),e.children?{default:e.children.tab}:void 0))))):u.map(((e,t)=>(s.value.push(e.props.name),Be(0===t||m?e:We(e))))),!r&&o&&g?Ae(o,0!==(h?v.length:u.length)):null,m?null:a("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return a("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},g&&o?a(E,{onResize:this.handleTabsResize},{default:()=>t}):t,g?a("div",{class:`${e}-tabs-pad`}):null,g?null:a("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},w=x?"top":n;return a("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${i}-size`,m&&`${e}-tabs--flex`,`${e}-tabs--${w}`],style:this.cssVars},a("div",{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${w}`,`${e}-tabs-nav`]},k(p,(t=>t&&a("div",{class:`${e}-tabs-nav__prefix`},t))),x?a(E,{onResize:this.handleSegmentResize},{default:()=>a("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},a("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},a("div",{class:`${e}-tabs-wrapper`},a("div",{class:`${e}-tabs-tab`}))),h?v.map(((e,t)=>(s.value.push(e.props.name),a(Pe,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:0!==t}),e.children?{default:e.children.tab}:void 0)))):u.map(((e,t)=>(s.value.push(e.props.name),0===t?e:We(e)))))}):a(E,{onResize:this.handleNavResize},{default:()=>a("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(w)?a(be,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:y}):a("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},y()))}),r&&o&&g?Ae(o,!0):null,k(f,(t=>t&&a("div",{class:`${e}-tabs-nav__suffix`},t)))),h&&(!this.animated||"top"!==w&&"bottom"!==w?Le(v,this.mergedValue,this.renderedNames):a("div",{ref:"tabsPaneWrapperRef",style:b,class:[`${e}-tabs-pane-wrapper`,d]},Le(v,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))))}});function Le(e,t,n,r,o,i,s){const l=[];return e.forEach((e=>{const{name:a,displayDirective:r,"display-directive":o}=e.props,i=e=>r===e||o===e,s=t===a;if(void 0!==e.key&&(e.key=a),s||i("show")||i("show:lazy")&&n.has(a)){n.has(a)||n.add(a);const t=!i("if");l.push(t?O(e,[[D,s]]):e)}})),s?a(F,{name:`${s}-transition`,onBeforeLeave:r,onEnter:o,onAfterEnter:i},{default:()=>l}):l}function Ae(e,t){return a(Pe,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:"object"==typeof e&&e.disabled})}function We(e){const t=I(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function Be(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const ke={class:"user-info flex flex-wrap gap-8 p-8 pb-6 border-b border-solid"},Ee={class:"avatar relative h-24"},Ne={class:"info grow flex flex-col justify-center"},He={class:"name mb-4"},Oe={class:"lg:text-2xl md:text-lg sm:text-base font-bold"},De={class:"tooltip-wrap flex items-center"},Fe={class:"line-height-1 ml-2"},Ie={class:"tooltip-wrap flex items-center"},Ve={class:"tooltip-wrap flex items-center"},Ue={class:"line-height-1 ml-2"},Me={class:"tooltip-wrap flex items-center"},Xe={class:"line-height-1 ml-2"},Ge={class:"section-selector p-5 md:p-6 pt-0"},Ye={class:"main mt-8"},qe=e({__name:"index",setup(e){const n=t("settings"),a=V(),r=j(a.getUserInfo);return(e,t)=>{const a=se,o=Z,i=le,s=Pe,l=je,d=ee,b=Te;return U(),M(p,null,[X(d,{class:"header flex flex-col","content-style":{padding:0}},{default:G((()=>{var e,d;return[Y("div",ke,[Y("div",Ee,[X(a,{round:"",src:null==(e=q(r))?void 0:e.avatarUrl,size:80},null,8,["src"])]),Y("div",Ne,[Y("div",He,[Y("h1",Oe,Q(null==(d=q(r))?void 0:d.fullName),1)]),X(i,{size:"large"},{default:G((()=>[X(te,{"tooltip-text":"Roles",placement:"top"},{default:G((()=>{var e;return[Y("div",De,[X(o,{component:"tabler:user"}),Y("span",Fe,Q(null==(e=q(r))?void 0:e.roles),1)])]})),_:1}),X(te,{"tooltip-text":"Location",placement:"top"},{default:G((()=>[Y("div",Ie,[X(o,{component:"tabler:map-pin"}),t[2]||(t[2]=Y("span",{class:"line-height-1 ml-2"},"China",-1))])])),_:1}),X(te,{"tooltip-text":"Email",placement:"top"},{default:G((()=>{var e;return[Y("div",Ve,[X(o,{component:"tabler:mail"}),Y("span",Ue,Q(null==(e=q(r))?void 0:e.email),1)])]})),_:1}),X(te,{"tooltip-text":"Contacts",placement:"top"},{default:G((()=>{var e;return[Y("div",Me,[X(o,{component:"tabler:phone"}),Y("span",Xe,Q(null==(e=q(r))?void 0:e.phone),1)])]})),_:1})])),_:1})])]),Y("div",Ge,[X(l,{value:q(n),"onUpdate:value":t[0]||(t[0]=e=>J(n)?n.value=e:null)},{default:G((()=>[X(s,{name:"settings"},{default:G((()=>t[3]||(t[3]=[K(" Settings ")]))),_:1})])),_:1},8,["value"])])]})),_:1}),Y("div",Ye,[X(l,{value:q(n),"onUpdate:value":t[1]||(t[1]=e=>J(n)?n.value=e:null),"tab-style":{display:"none"},animated:""},{default:G((()=>[X(b,{name:"settings"})])),_:1},8,["value"])])],64)}}});export{qe as default};
