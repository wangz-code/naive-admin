import{B as e,V as o,a as n,r,p as t,_ as i}from"./Popover-C0WQOPIR.js";import{a as d,a0 as l,r as a,dc as s,m as u,aW as p,b6 as c,dd as v,b7 as f,d as h,v as b,aF as m,i as w,cj as y,l as g,a8 as x,bc as k,T as S,al as N,bO as P,M as R,aV as C,H as O,ck as I,ci as $,de as z,z as A,aH as F,y as _,U as j,Q as K,A as T,C as L,aK as D,D as M,df as B,aO as H,Y as E,G as U,ae as q}from"./index-Chs2zBSz.js";import{h as G,c as W,a as V}from"./create-Bylz8BGN.js";import{u as Q}from"./use-merged-state-DgUqyJ-M.js";function Y(e={},o){const n=a({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,i=e=>{switch(e.key){case"Control":n.ctrl=!0;break;case"Meta":n.command=!0,n.win=!0;break;case"Shift":n.shift=!0;break;case"Tab":n.tab=!0}void 0!==r&&Object.keys(r).forEach((o=>{if(o!==e.key)return;const n=r[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:r=!1}=n;o&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}}))},d=e=>{switch(e.key){case"Control":n.ctrl=!1;break;case"Meta":n.command=!1,n.win=!1;break;case"Shift":n.shift=!1;break;case"Tab":n.tab=!1}void 0!==t&&Object.keys(t).forEach((o=>{if(o!==e.key)return;const n=t[o];if("function"==typeof n)n(e);else{const{stop:o=!1,prevent:r=!1}=n;o&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}}))},h=()=>{(void 0===o||o.value)&&(f("keydown",document,i),f("keyup",document,d)),void 0!==o&&l(o,(e=>{e?(f("keydown",document,i),f("keyup",document,d)):(c("keydown",document,i),c("keyup",document,d))}))};return s()?(u(h),p((()=>{(void 0===o||o.value)&&(c("keydown",document,i),c("keyup",document,d))}))):h(),v(n)}const Z=h({name:"ChevronRight",render:()=>b("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}),J=h({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return b("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),X=m("n-dropdown-menu"),ee=m("n-dropdown"),oe=m("n-dropdown-option");function ne(e,o){return"submenu"===e.type||void 0===e.type&&void 0!==e[o]}function re(e){return"divider"===e.type}const te=h({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=w(ee),{hoverKeyRef:n,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:i,activeKeyPathRef:a,animatedRef:s,mergedShowRef:u,renderLabelRef:p,renderIconRef:c,labelFieldRef:v,childrenFieldRef:f,renderOptionRef:h,nodePropsRef:b,menuPropsRef:m}=o,S=w(oe,null),N=w(X),P=w(y),R=g((()=>e.tmNode.rawNode)),C=g((()=>{const{value:o}=f;return ne(e.tmNode.rawNode,o)})),O=g((()=>{const{disabled:o}=e.tmNode;return o})),I=function(e,o,n){const r=d(e.value);let t=null;return l(e,(e=>{null!==t&&window.clearTimeout(t),!0===e?n&&!n.value?r.value=!0:t=window.setTimeout((()=>{r.value=!0}),o):r.value=!1})),r}(g((()=>{if(!C.value)return!1;const{key:o,disabled:d}=e.tmNode;if(d)return!1;const{value:l}=n,{value:a}=r,{value:s}=t,{value:u}=i;return null!==l?u.includes(o):null!==a?u.includes(o)&&u[u.length-1]!==o:null!==s&&u.includes(o)})),300,g((()=>null===r.value&&!s.value))),$=g((()=>!!(null==S?void 0:S.enteringSubmenuRef.value))),z=d(!1);function A(){const{parentKey:o,tmNode:i}=e;i.disabled||u.value&&(t.value=o,r.value=null,n.value=i.key)}return x(oe,{enteringSubmenuRef:z}),{labelField:v,renderLabel:p,renderIcon:c,siblingHasIcon:N.showIconRef,siblingHasSubmenu:N.hasSubmenuRef,menuProps:m,popoverBody:P,animated:s,mergedShowSubmenu:g((()=>I.value&&!$.value)),rawNode:R,hasSubmenu:C,pending:k((()=>{const{value:o}=i,{key:n}=e.tmNode;return o.includes(n)})),childActive:k((()=>{const{value:o}=a,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r<o.length-1})),active:k((()=>{const{value:o}=a,{key:n}=e.tmNode,r=o.findIndex((e=>n===e));return-1!==r&&r===o.length-1})),mergedDisabled:O,renderOption:h,nodeProps:b,handleClick:function(){const{value:n}=C,{tmNode:r}=e;u.value&&(n||r.disabled||(o.doSelect(r.key,r.rawNode),o.doUpdateShow(!1)))},handleMouseMove:function(){const{tmNode:o}=e;o.disabled||u.value&&n.value!==o.key&&A()},handleMouseEnter:A,handleMouseLeave:function(o){if(e.tmNode.disabled)return;if(!u.value)return;const{relatedTarget:r}=o;!r||G({target:r},"dropdownOption")||G({target:r},"scrollbarRail")||(n.value=null)},handleSubmenuBeforeEnter:function(){z.value=!0},handleSubmenuAfterEnter:function(){z.value=!1}}},render(){var r,t;const{animated:i,rawNode:d,mergedShowSubmenu:l,clsPrefix:a,siblingHasIcon:s,siblingHasSubmenu:u,renderLabel:p,renderIcon:c,renderOption:v,nodeProps:f,props:h,scrollable:m}=this;let w=null;if(l){const e=null===(r=this.menuProps)||void 0===r?void 0:r.call(this,d,d.children);w=b(ae,Object.assign({},e,{clsPrefix:a,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const y={class:[`${a}-dropdown-option-body`,this.pending&&`${a}-dropdown-option-body--pending`,this.active&&`${a}-dropdown-option-body--active`,this.childActive&&`${a}-dropdown-option-body--child-active`,this.mergedDisabled&&`${a}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=null==f?void 0:f(d),x=b("div",Object.assign({class:[`${a}-dropdown-option`,null==g?void 0:g.class],"data-dropdown-option":!0},g),b("div",N(y,h),[b("div",{class:[`${a}-dropdown-option-body__prefix`,s&&`${a}-dropdown-option-body__prefix--show-icon`]},[c?c(d):P(d.icon)]),b("div",{"data-dropdown-option":!0,class:`${a}-dropdown-option-body__label`},p?p(d):P(null!==(t=d[this.labelField])&&void 0!==t?t:d.title)),b("div",{"data-dropdown-option":!0,class:[`${a}-dropdown-option-body__suffix`,u&&`${a}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?b(R,null,{default:()=>b(Z,null)}):null)]),this.hasSubmenu?b(e,null,{default:()=>[b(o,null,{default:()=>b("div",{class:`${a}-dropdown-offset-container`},b(n,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>b("div",{class:`${a}-dropdown-menu-wrapper`},i?b(S,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>w}):w)}))})]}):null);return v?v({node:x,option:d}):x}}),ie=h({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=w(X),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:t,renderOptionRef:i}=w(ee);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:n,nodeProps:t,renderOption:i}},render(){var e;const{clsPrefix:o,hasSubmenu:n,showIcon:r,nodeProps:t,renderLabel:i,renderOption:d}=this,{rawNode:l}=this.tmNode,a=b("div",Object.assign({class:`${o}-dropdown-option`},null==t?void 0:t(l)),b("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},b("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},P(l.icon)),b("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(l):P(null!==(e=l.title)&&void 0!==e?e:l[this.labelField])),b("div",{class:[`${o}-dropdown-option-body__suffix`,n&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return d?d({node:a,option:l}):a}}),de=h({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:n}=this,{children:r}=e;return b(O,null,b(ie,{clsPrefix:n,tmNode:e,key:e.key}),null==r?void 0:r.map((e=>{const{rawNode:r}=e;return!1===r.show?null:re(r)?b(J,{clsPrefix:n,key:e.key}):e.isGroup?(C("dropdown","`group` node is not allowed to be put in `group` node."),null):b(te,{clsPrefix:n,tmNode:e,parentKey:o,key:e.key})})))}}),le=h({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return b("div",o,[null==e?void 0:e()])}}),ae=h({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:n}=w(ee);x(X,{showIconRef:g((()=>{const n=o.value;return e.tmNodes.some((e=>{var o;if(e.isGroup)return null===(o=e.children)||void 0===o?void 0:o.some((({rawNode:e})=>n?n(e):e.icon));const{rawNode:r}=e;return n?n(r):r.icon}))})),hasSubmenuRef:g((()=>{const{value:o}=n;return e.tmNodes.some((e=>{var n;if(e.isGroup)return null===(n=e.children)||void 0===n?void 0:n.some((({rawNode:e})=>ne(e,o)));const{rawNode:r}=e;return ne(r,o)}))}))});const r=d(null);return x(I,null),x($,null),x(y,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:n}=this,t=this.tmNodes.map((r=>{const{rawNode:t}=r;return!1===t.show?null:function(e){return"render"===e.type}(t)?b(le,{tmNode:r,key:r.key}):re(t)?b(J,{clsPrefix:o,key:r.key}):function(e){return"group"===e.type}(t)?b(de,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key}):b(te,{clsPrefix:o,tmNode:r,parentKey:e,key:r.key,props:t.props,scrollable:n})}));return b("div",{class:[`${o}-dropdown-menu`,n&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},n?b(z,{contentClass:`${o}-dropdown-menu__content`},{default:()=>t}):t,this.showArrow?r({clsPrefix:o,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),se=A("dropdown-menu","\n transform-origin: var(--v-transform-origin);\n background-color: var(--n-color);\n border-radius: var(--n-border-radius);\n box-shadow: var(--n-box-shadow);\n position: relative;\n transition:\n background-color .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n",[F(),A("dropdown-option","\n position: relative;\n ",[_("a","\n text-decoration: none;\n color: inherit;\n outline: none;\n ",[_("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),A("dropdown-option-body","\n display: flex;\n cursor: pointer;\n position: relative;\n height: var(--n-option-height);\n line-height: var(--n-option-height);\n font-size: var(--n-font-size);\n color: var(--n-option-text-color);\n transition: color .3s var(--n-bezier);\n ",[_("&::before",'\n content: "";\n position: absolute;\n top: 0;\n bottom: 0;\n left: 4px;\n right: 4px;\n transition: background-color .3s var(--n-bezier);\n border-radius: var(--n-border-radius);\n '),j("disabled",[K("pending","\n color: var(--n-option-text-color-hover);\n ",[T("prefix, suffix","\n color: var(--n-option-text-color-hover);\n "),_("&::before","background-color: var(--n-option-color-hover);")]),K("active","\n color: var(--n-option-text-color-active);\n ",[T("prefix, suffix","\n color: var(--n-option-text-color-active);\n "),_("&::before","background-color: var(--n-option-color-active);")]),K("child-active","\n color: var(--n-option-text-color-child-active);\n ",[T("prefix, suffix","\n color: var(--n-option-text-color-child-active);\n ")])]),K("disabled","\n cursor: not-allowed;\n opacity: var(--n-option-opacity-disabled);\n "),K("group","\n font-size: calc(var(--n-font-size) - 1px);\n color: var(--n-group-header-text-color);\n ",[T("prefix","\n width: calc(var(--n-option-prefix-width) / 2);\n ",[K("show-icon","\n width: calc(var(--n-option-icon-prefix-width) / 2);\n ")])]),T("prefix","\n width: var(--n-option-prefix-width);\n display: flex;\n justify-content: center;\n align-items: center;\n color: var(--n-prefix-color);\n transition: color .3s var(--n-bezier);\n z-index: 1;\n ",[K("show-icon","\n width: var(--n-option-icon-prefix-width);\n "),A("icon","\n font-size: var(--n-option-icon-size);\n ")]),T("label","\n white-space: nowrap;\n flex: 1;\n z-index: 1;\n "),T("suffix","\n box-sizing: border-box;\n flex-grow: 0;\n flex-shrink: 0;\n display: flex;\n justify-content: flex-end;\n align-items: center;\n min-width: var(--n-option-suffix-width);\n padding: 0 8px;\n transition: color .3s var(--n-bezier);\n color: var(--n-suffix-color);\n z-index: 1;\n ",[K("has-submenu","\n width: var(--n-option-icon-suffix-width);\n "),A("icon","\n font-size: var(--n-option-icon-size);\n ")]),A("dropdown-menu","pointer-events: all;")]),A("dropdown-offset-container","\n pointer-events: none;\n position: absolute;\n left: 0;\n right: 0;\n top: -4px;\n bottom: -4px;\n ")]),A("dropdown-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 4px 0;\n "),A("dropdown-menu-wrapper","\n transform-origin: var(--v-transform-origin);\n width: fit-content;\n "),_(">",[A("scrollbar","\n height: inherit;\n max-height: inherit;\n ")]),j("scrollable","\n padding: var(--n-padding);\n "),K("scrollable",[T("content","\n padding: var(--n-padding);\n ")])]),ue={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},pe=Object.keys(t),ce=h({name:"Dropdown",inheritAttrs:!1,props:Object.assign(Object.assign(Object.assign({},t),ue),L.props),setup(e){const o=d(!1),n=Q(D(e,"show"),o),r=g((()=>{const{keyField:o,childrenField:n}=e;return W(e.options,{getKey:e=>e[o],getDisabled:e=>!0===e.disabled,getIgnored:e=>"divider"===e.type||"render"===e.type,getChildren:e=>e[n]})})),t=g((()=>r.value.treeNodes)),i=d(null),a=d(null),s=d(null),u=g((()=>{var e,o,n;return null!==(n=null!==(o=null!==(e=i.value)&&void 0!==e?e:a.value)&&void 0!==o?o:s.value)&&void 0!==n?n:null})),p=g((()=>r.value.getPath(u.value).keyPath)),c=g((()=>r.value.getPath(e.value).keyPath));Y({keydown:{ArrowUp:{prevent:!0,handler:function(){S("up")}},ArrowRight:{prevent:!0,handler:function(){S("right")}},ArrowDown:{prevent:!0,handler:function(){S("down")}},ArrowLeft:{prevent:!0,handler:function(){S("left")}},Enter:{prevent:!0,handler:function(){const e=y();(null==e?void 0:e.isLeaf)&&n.value&&(b(e.key,e.rawNode),m(!1))}},Escape:function(){m(!1)}}},k((()=>e.keyboard&&n.value)));const{mergedClsPrefixRef:v,inlineThemeDisabled:f}=M(e),h=L("Dropdown","-dropdown",se,B,e,v);function b(o,n){const{onSelect:r}=e;r&&H(r,o,n)}function m(n){const{"onUpdate:show":r,onUpdateShow:t}=e;r&&H(r,n),t&&H(t,n),o.value=n}function w(){i.value=null,a.value=null,s.value=null}function y(){var e;const{value:o}=r,{value:n}=u;return o&&null!==n&&null!==(e=o.getNode(n))&&void 0!==e?e:null}function S(e){const{value:o}=u,{value:{getFirstAvailableNode:n}}=r;let t=null;if(null===o){const e=n();null!==e&&(t=e.key)}else{const o=y();if(o){let n;switch(e){case"down":n=o.getNext();break;case"up":n=o.getPrev();break;case"right":n=o.getChild();break;case"left":n=o.getParent()}n&&(t=n.key)}}null!==t&&(i.value=null,a.value=t)}x(ee,{labelFieldRef:D(e,"labelField"),childrenFieldRef:D(e,"childrenField"),renderLabelRef:D(e,"renderLabel"),renderIconRef:D(e,"renderIcon"),hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:s,pendingKeyPathRef:p,activeKeyPathRef:c,animatedRef:D(e,"animated"),mergedShowRef:n,nodePropsRef:D(e,"nodeProps"),renderOptionRef:D(e,"renderOption"),menuPropsRef:D(e,"menuProps"),doSelect:b,doUpdateShow:m}),l(n,(o=>{e.animated||o||w()}));const N=g((()=>{const{size:o,inverted:n}=e,{common:{cubicBezierEaseInOut:r},self:t}=h.value,{padding:i,dividerColor:d,borderRadius:l,optionOpacityDisabled:a,[E("optionIconSuffixWidth",o)]:s,[E("optionSuffixWidth",o)]:u,[E("optionIconPrefixWidth",o)]:p,[E("optionPrefixWidth",o)]:c,[E("fontSize",o)]:v,[E("optionHeight",o)]:f,[E("optionIconSize",o)]:b}=t,m={"--n-bezier":r,"--n-font-size":v,"--n-padding":i,"--n-border-radius":l,"--n-option-height":f,"--n-option-prefix-width":c,"--n-option-icon-prefix-width":p,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":s,"--n-option-icon-size":b,"--n-divider-color":d,"--n-option-opacity-disabled":a};return n?(m["--n-color"]=t.colorInverted,m["--n-option-color-hover"]=t.optionColorHoverInverted,m["--n-option-color-active"]=t.optionColorActiveInverted,m["--n-option-text-color"]=t.optionTextColorInverted,m["--n-option-text-color-hover"]=t.optionTextColorHoverInverted,m["--n-option-text-color-active"]=t.optionTextColorActiveInverted,m["--n-option-text-color-child-active"]=t.optionTextColorChildActiveInverted,m["--n-prefix-color"]=t.prefixColorInverted,m["--n-suffix-color"]=t.suffixColorInverted,m["--n-group-header-text-color"]=t.groupHeaderTextColorInverted):(m["--n-color"]=t.color,m["--n-option-color-hover"]=t.optionColorHover,m["--n-option-color-active"]=t.optionColorActive,m["--n-option-text-color"]=t.optionTextColor,m["--n-option-text-color-hover"]=t.optionTextColorHover,m["--n-option-text-color-active"]=t.optionTextColorActive,m["--n-option-text-color-child-active"]=t.optionTextColorChildActive,m["--n-prefix-color"]=t.prefixColor,m["--n-suffix-color"]=t.suffixColor,m["--n-group-header-text-color"]=t.groupHeaderTextColor),m})),P=f?U("dropdown",g((()=>`${e.size[0]}${e.inverted?"i":""}`)),N,e):void 0;return{mergedClsPrefix:v,mergedTheme:h,tmNodes:t,mergedShow:n,handleAfterLeave:()=>{e.animated&&w()},doUpdateShow:m,cssVars:f?void 0:N,themeClass:null==P?void 0:P.themeClass,onRender:null==P?void 0:P.onRender}},render(){const{mergedTheme:e}=this,o={show:this.mergedShow,theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:(e,o,n,r,t)=>{var i;const{mergedClsPrefix:d,menuProps:l}=this;null===(i=this.onRender)||void 0===i||i.call(this);const a=(null==l?void 0:l(void 0,this.tmNodes.map((e=>e.rawNode))))||{},s={ref:V(o),class:[e,`${d}-dropdown`,this.themeClass],clsPrefix:d,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:t};return b(ae,N(this.$attrs,s,a))},onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return b(i,Object.assign({},q(this.$props,pe),o),{trigger:()=>{var e,o;return null===(o=(e=this.$slots).default)||void 0===o?void 0:o.call(e)}})}});export{Z as C,ce as _,Y as u};
