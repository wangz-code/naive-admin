import{d as e,v as o,an as n,i as t,l as r,at as i,bQ as l,H as a,N as c,a as d,aZ as s,bI as v,a3 as u,aH as h,y as m,z as p,Q as g,A as f,U as b,bE as x,C as w,D as C,d8 as z,a1 as y,as as I,ax as S,G as k,aL as A,a$ as N,ab as P,b1 as H,d9 as R,aq as $,Y as F,aV as _,aS as T,da as B,x as E,aW as O,aX as L}from"./index-PiH8oZvg.js";import{_ as j}from"./Dropdown-BxDTdXQ9.js";import{_ as V}from"./Tooltip-D1QXMDop.js";import{c as K}from"./create-Bylz8BGN.js";import{u as M}from"./use-merged-state-CN59-VMd.js";import{u as D}from"./use-compitable-CL_hcFQb.js";import{V as U}from"./index-Ba1Yspn1.js";const q=e({name:"ChevronDownFilled",render:()=>o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}),G=n("n-layout-sider"),W=n("n-menu"),X=n("n-submenu"),Y=n("n-menu-item-group");function Q(e){const o=t(W),{props:n,mergedCollapsedRef:i}=o,l=t(X,null),a=t(Y,null),c=r((()=>"horizontal"===n.mode)),d=r((()=>c.value?n.dropdownPlacement:"tmNodes"in e?"right-start":"right")),s=r((()=>{var e;return Math.max(null!==(e=n.collapsedIconSize)&&void 0!==e?e:n.iconSize,n.iconSize)})),v=r((()=>{var o;return!c.value&&e.root&&i.value&&null!==(o=n.collapsedIconSize)&&void 0!==o?o:n.iconSize})),u=r((()=>{if(c.value)return;const{collapsedWidth:o,indent:t,rootIndent:r}=n,{root:d,isGroup:v}=e,u=void 0===r?t:r;return d?i.value?o/2-s.value/2:u:a&&"number"==typeof a.paddingLeftRef.value?t/2+a.paddingLeftRef.value:l&&"number"==typeof l.paddingLeftRef.value?(v?t/2:t)+l.paddingLeftRef.value:0})),h=r((()=>{const{collapsedWidth:o,indent:t,rootIndent:r}=n,{value:l}=s,{root:a}=e;if(c.value)return 8;if(!a)return 8;if(!i.value)return 8;return(void 0===r?t:r)+l+8-(o+l)/2}));return{dropdownPlacement:d,activeIconSize:v,maxIconSize:s,paddingLeft:u,iconMarginRight:h,NMenu:o,NSubmenu:l}}const Z={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},J=Object.assign(Object.assign({},Z),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ee=e({name:"MenuOptionGroup",props:J,setup(e){i(X,null);const n=Q(e);i(Y,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:r,props:c}=t(W);return function(){const{value:t}=r,i=n.paddingLeft.value,{nodeProps:d}=c,s=null==d?void 0:d(e.tmNode.rawNode);return o("div",{class:`${t}-menu-item-group`,role:"group"},o("div",Object.assign({},s,{class:[`${t}-menu-item-group-title`,null==s?void 0:s.class],style:[(null==s?void 0:s.style)||"",void 0!==i?`padding-left: ${i}px;`:""]}),l(e.title),e.extra?o(a,null," ",l(e.extra)):null),o("div",null,e.tmNodes.map((e=>ve(e,c)))))}}}),oe=e({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=t(W);return{menuProps:o,style:r((()=>{const{paddingLeft:o}=e;return{paddingLeft:o&&`${o}px`}})),iconStyle:r((()=>{const{maxIconSize:o,activeIconSize:n,iconMarginRight:t}=e;return{width:`${o}px`,height:`${o}px`,fontSize:`${n}px`,marginRight:`${t}px`}}))}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:t,renderLabel:r,renderExtra:i,expandIcon:a}}=this,d=t?t(n.rawNode):l(this.icon);return o("div",{onClick:e=>{var o;null===(o=this.onClick)||void 0===o||o.call(this,e)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},d&&o("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[d]),o("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:r?r(n.rawNode):l(this.title),this.extra||i?o("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(n.rawNode):l(this.extra)):null),this.showArrow?o(c,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>a?a(n.rawNode):o(q,null)}):null)}}),ne=Object.assign(Object.assign({},Z),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),te=e({name:"Submenu",props:ne,setup(e){const o=Q(e),{NMenu:n,NSubmenu:t}=o,{props:l,mergedCollapsedRef:a,mergedThemeRef:c}=n,v=r((()=>{const{disabled:o}=e;return!!(null==t?void 0:t.mergedDisabledRef.value)||(!!l.disabled||o)})),u=d(!1);return i(X,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:v}),i(Y,null),{menuProps:l,mergedTheme:c,doSelect:n.doSelect,inverted:n.invertedRef,isHorizontal:n.isHorizontalRef,mergedClsPrefix:n.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:u,paddingLeft:o.paddingLeft,mergedDisabled:v,mergedValue:n.mergedValueRef,childActive:s((()=>{var o;return null!==(o=e.virtualChildActive)&&void 0!==o?o:n.activePathRef.value.includes(e.internalKey)})),collapsed:r((()=>"horizontal"!==l.mode&&(!!a.value||!n.mergedExpandedKeysRef.value.includes(e.internalKey)))),dropdownEnabled:r((()=>!v.value&&("horizontal"===l.mode||a.value))),handlePopoverShowChange:function(e){u.value=e},handleClick:function(){v.value||(a.value||n.toggleExpand(e.internalKey),function(){const{onClick:o}=e;o&&o()}())}}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:t,renderLabel:r}}=this,i=()=>{const{isHorizontal:e,paddingLeft:n,collapsed:t,mergedDisabled:r,maxIconSize:i,activeIconSize:l,title:a,childActive:c,icon:d,handleClick:s,menuProps:{nodeProps:v},dropdownShow:u,iconMarginRight:h,tmNode:m,mergedClsPrefix:p,isEllipsisPlaceholder:g,extra:f}=this,b=null==v?void 0:v(m.rawNode);return o("div",Object.assign({},b,{class:[`${p}-menu-item`,null==b?void 0:b.class],role:"menuitem"}),o(oe,{tmNode:m,paddingLeft:n,collapsed:t,disabled:r,iconMarginRight:h,maxIconSize:i,activeIconSize:l,title:a,extra:f,showArrow:!e,childActive:c,clsPrefix:p,icon:d,hover:u,onClick:s,isEllipsisPlaceholder:g}))},l=()=>o(v,null,{default:()=>{const{tmNodes:e,collapsed:t}=this;return t?null:o("div",{class:`${n}-submenu-children`,role:"menu"},e.map((e=>ve(e,this.menuProps))))}});return this.root?o(j,Object.assign({size:"large",trigger:"hover"},null===(e=this.menuProps)||void 0===e?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:r}),{default:()=>o("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),this.isHorizontal?null:l())}):o("div",{class:`${n}-submenu`,role:"menu","aria-expanded":!this.collapsed,id:this.domId},i(),l())}}),re=Object.assign(Object.assign({},Z),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ie=e({name:"MenuOption",props:re,setup(e){const o=Q(e),{NSubmenu:n,NMenu:t}=o,{props:i,mergedClsPrefixRef:l,mergedCollapsedRef:a}=t,c=n?n.mergedDisabledRef:{value:!1},d=r((()=>c.value||e.disabled));return{mergedClsPrefix:l,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:t.mergedThemeRef,menuProps:i,dropdownEnabled:s((()=>e.root&&a.value&&"horizontal"!==i.mode&&!d.value)),selected:s((()=>t.mergedValueRef.value===e.internalKey)),mergedDisabled:d,handleClick:function(o){d.value||(t.doSelect(e.internalKey,e.tmNode.rawNode),function(o){const{onClick:n}=e;n&&n(o)}(o))}}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:t,menuProps:{renderLabel:r,nodeProps:i}}=this,a=null==i?void 0:i(t.rawNode);return o("div",Object.assign({},a,{role:"menuitem",class:[`${e}-menu-item`,null==a?void 0:a.class]}),o(V,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||void 0===this.title,internalExtraClass:["menu-tooltip"]},{default:()=>r?r(t.rawNode):l(this.title),trigger:()=>o(oe,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),le=e({name:"MenuDivider",setup(){const e=t(W),{mergedClsPrefixRef:n,isHorizontalRef:r}=e;return()=>r.value?null:o("div",{class:`${n.value}-menu-divider`})}}),ae=h(J),ce=h(re),de=h(ne);function se(e){return"divider"===e.type||"render"===e.type}function ve(e,n){const{rawNode:t}=e,{show:r}=t;if(!1===r)return null;if(se(t))return function(e){return"divider"===e.type}(t)?o(le,Object.assign({key:e.key},t.props)):null;const{labelField:i}=n,{key:l,level:a,isGroup:c}=e,d=Object.assign(Object.assign({},t),{title:t.title||t[i],extra:t.titleExtra||t.extra,key:l,internalKey:l,level:a,root:0===a,isGroup:c});return e.children?e.isGroup?o(ee,u(d,ae,{tmNode:e,tmNodes:e.children,key:l})):o(te,u(d,de,{key:l,rawNodes:t[n.childrenField],tmNodes:e.children,tmNode:e})):o(ie,u(d,ce,{key:l,tmNode:e}))}const ue=[m("&::before","background-color: var(--n-item-color-hover);"),f("arrow","\n color: var(--n-arrow-color-hover);\n "),f("icon","\n color: var(--n-item-icon-color-hover);\n "),p("menu-item-content-header","\n color: var(--n-item-text-color-hover);\n ",[m("a","\n color: var(--n-item-text-color-hover);\n "),f("extra","\n color: var(--n-item-text-color-hover);\n ")])],he=[f("icon","\n color: var(--n-item-icon-color-hover-horizontal);\n "),p("menu-item-content-header","\n color: var(--n-item-text-color-hover-horizontal);\n ",[m("a","\n color: var(--n-item-text-color-hover-horizontal);\n "),f("extra","\n color: var(--n-item-text-color-hover-horizontal);\n ")])],me=m([p("menu","\n background-color: var(--n-color);\n color: var(--n-item-text-color);\n overflow: hidden;\n transition: background-color .3s var(--n-bezier);\n box-sizing: border-box;\n font-size: var(--n-font-size);\n padding-bottom: 6px;\n ",[g("horizontal","\n max-width: 100%;\n width: 100%;\n display: flex;\n overflow: hidden;\n padding-bottom: 0;\n ",[p("submenu","margin: 0;"),p("menu-item","margin: 0;"),p("menu-item-content","\n padding: 0 20px;\n border-bottom: 2px solid #0000;\n ",[m("&::before","display: none;"),g("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),p("menu-item-content",[g("selected",[f("icon","color: var(--n-item-icon-color-active-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-horizontal);\n ",[m("a","color: var(--n-item-text-color-active-horizontal);"),f("extra","color: var(--n-item-text-color-active-horizontal);")])]),g("child-active","\n border-bottom: 2px solid var(--n-border-color-horizontal);\n ",[p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-horizontal);\n ",[m("a","\n color: var(--n-item-text-color-child-active-horizontal);\n "),f("extra","\n color: var(--n-item-text-color-child-active-horizontal);\n ")]),f("icon","\n color: var(--n-item-icon-color-child-active-horizontal);\n ")]),b("disabled",[b("selected, child-active",[m("&:focus-within",he)]),g("selected",[pe(null,[f("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-hover-horizontal);\n ",[m("a","color: var(--n-item-text-color-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),g("child-active",[pe(null,[f("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover-horizontal);\n ",[m("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),f("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),pe("border-bottom: 2px solid var(--n-border-color-horizontal);",he)]),p("menu-item-content-header",[m("a","color: var(--n-item-text-color-horizontal);")])])]),b("responsive",[p("menu-item-content-header","\n overflow: hidden;\n text-overflow: ellipsis;\n ")]),g("collapsed",[p("menu-item-content",[g("selected",[m("&::before","\n background-color: var(--n-item-color-active-collapsed) !important;\n ")]),p("menu-item-content-header","opacity: 0;"),f("arrow","opacity: 0;"),f("icon","color: var(--n-item-icon-color-collapsed);")])]),p("menu-item","\n height: var(--n-item-height);\n margin-top: 6px;\n position: relative;\n "),p("menu-item-content",'\n box-sizing: border-box;\n line-height: 1.75;\n height: 100%;\n display: grid;\n grid-template-areas: "icon content arrow";\n grid-template-columns: auto 1fr auto;\n align-items: center;\n cursor: pointer;\n position: relative;\n padding-right: 18px;\n transition:\n background-color .3s var(--n-bezier),\n padding-left .3s var(--n-bezier),\n border-color .3s var(--n-bezier);\n ',[m("> *","z-index: 1;"),m("&::before",'\n z-index: auto;\n content: "";\n background-color: #0000;\n position: absolute;\n left: 8px;\n right: 8px;\n top: 0;\n bottom: 0;\n pointer-events: none;\n border-radius: var(--n-border-radius);\n transition: background-color .3s var(--n-bezier);\n '),g("disabled","\n opacity: .45;\n cursor: not-allowed;\n "),g("collapsed",[f("arrow","transform: rotate(0);")]),g("selected",[m("&::before","background-color: var(--n-item-color-active);"),f("arrow","color: var(--n-arrow-color-active);"),f("icon","color: var(--n-item-icon-color-active);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active);\n ",[m("a","color: var(--n-item-text-color-active);"),f("extra","color: var(--n-item-text-color-active);")])]),g("child-active",[p("menu-item-content-header","\n color: var(--n-item-text-color-child-active);\n ",[m("a","\n color: var(--n-item-text-color-child-active);\n "),f("extra","\n color: var(--n-item-text-color-child-active);\n ")]),f("arrow","\n color: var(--n-arrow-color-child-active);\n "),f("icon","\n color: var(--n-item-icon-color-child-active);\n ")]),b("disabled",[b("selected, child-active",[m("&:focus-within",ue)]),g("selected",[pe(null,[f("arrow","color: var(--n-arrow-color-active-hover);"),f("icon","color: var(--n-item-icon-color-active-hover);"),p("menu-item-content-header","\n color: var(--n-item-text-color-active-hover);\n ",[m("a","color: var(--n-item-text-color-active-hover);"),f("extra","color: var(--n-item-text-color-active-hover);")])])]),g("child-active",[pe(null,[f("arrow","color: var(--n-arrow-color-child-active-hover);"),f("icon","color: var(--n-item-icon-color-child-active-hover);"),p("menu-item-content-header","\n color: var(--n-item-text-color-child-active-hover);\n ",[m("a","color: var(--n-item-text-color-child-active-hover);"),f("extra","color: var(--n-item-text-color-child-active-hover);")])])]),g("selected",[pe(null,[m("&::before","background-color: var(--n-item-color-active-hover);")])]),pe(null,ue)]),f("icon","\n grid-area: icon;\n color: var(--n-item-icon-color);\n transition:\n color .3s var(--n-bezier),\n font-size .3s var(--n-bezier),\n margin-right .3s var(--n-bezier);\n box-sizing: content-box;\n display: inline-flex;\n align-items: center;\n justify-content: center;\n "),f("arrow","\n grid-area: arrow;\n font-size: 16px;\n color: var(--n-arrow-color);\n transform: rotate(180deg);\n opacity: 1;\n transition:\n color .3s var(--n-bezier),\n transform 0.2s var(--n-bezier),\n opacity 0.2s var(--n-bezier);\n "),p("menu-item-content-header","\n grid-area: content;\n transition:\n color .3s var(--n-bezier),\n opacity .3s var(--n-bezier);\n opacity: 1;\n white-space: nowrap;\n color: var(--n-item-text-color);\n ",[m("a","\n outline: none;\n text-decoration: none;\n transition: color .3s var(--n-bezier);\n color: var(--n-item-text-color);\n ",[m("&::before",'\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')]),f("extra","\n font-size: .93em;\n color: var(--n-group-text-color);\n transition: color .3s var(--n-bezier);\n ")])]),p("submenu","\n cursor: pointer;\n position: relative;\n margin-top: 6px;\n ",[p("menu-item-content","\n height: var(--n-item-height);\n "),p("submenu-children","\n overflow: hidden;\n padding: 0;\n ",[x({duration:".2s"})])]),p("menu-item-group",[p("menu-item-group-title","\n margin-top: 6px;\n color: var(--n-group-text-color);\n cursor: default;\n font-size: .93em;\n height: 36px;\n display: flex;\n align-items: center;\n transition:\n padding-left .3s var(--n-bezier),\n color .3s var(--n-bezier);\n ")])]),p("menu-tooltip",[m("a","\n color: inherit;\n text-decoration: none;\n ")]),p("menu-divider","\n transition: background-color .3s var(--n-bezier);\n background-color: var(--n-divider-color);\n height: 1px;\n margin: 6px 18px;\n ")]);function pe(e,o){return[g("hover",e,o),m("&:hover",e,o)]}const ge=e({name:"Menu",inheritAttrs:!1,props:Object.assign(Object.assign({},w.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:l}=C(e),a=w("Menu","-menu",me,z,e,n),c=t(G,null),s=r((()=>{var o;const{collapsed:n}=e;if(void 0!==n)return n;if(c){const{collapseModeRef:e,collapsedRef:n}=c;if("width"===e.value)return null!==(o=n.value)&&void 0!==o&&o}return!1})),v=r((()=>{const{keyField:o,childrenField:n,disabledField:t}=e;return K(e.items||e.options,{getIgnored:e=>se(e),getChildren:e=>e[n],getDisabled:e=>e[t],getKey(e){var n;return null!==(n=e[o])&&void 0!==n?n:e.name}})})),u=r((()=>new Set(v.value.treeNodes.map((e=>e.key))))),{watchProps:h}=e,m=d(null);(null==h?void 0:h.includes("defaultValue"))?y((()=>{m.value=e.defaultValue})):m.value=e.defaultValue;const p=I(e,"value"),g=M(p,m),f=d([]),b=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(g.value,{includeSelf:!1}).keyPath};(null==h?void 0:h.includes("defaultExpandedKeys"))?y(b):b();const x=D(e,["expandedNames","expandedKeys"]),N=M(x,f),P=r((()=>v.value.treeNodes)),H=r((()=>v.value.getPath(g.value).keyPath));function R(o){const{"onUpdate:expandedKeys":n,onUpdateExpandedKeys:t,onExpandedNamesChange:r,onOpenNamesChange:i}=e;n&&S(n,o),t&&S(t,o),r&&S(r,o),i&&S(i,o),f.value=o}i(W,{props:e,mergedCollapsedRef:s,mergedThemeRef:a,mergedValueRef:g,mergedExpandedKeysRef:N,activePathRef:H,mergedClsPrefixRef:n,isHorizontalRef:r((()=>"horizontal"===e.mode)),invertedRef:I(e,"inverted"),doSelect:function(o,n){const{"onUpdate:value":t,onUpdateValue:r,onSelect:i}=e;r&&S(r,o,n);t&&S(t,o,n);i&&S(i,o,n);m.value=o},toggleExpand:function(o){const n=Array.from(N.value),t=n.findIndex((e=>e===o));if(~t)n.splice(t,1);else{if(e.accordion&&u.value.has(o)){const e=n.findIndex((e=>u.value.has(e)));e>-1&&n.splice(e,1)}n.push(o)}R(n)}});const $=r((()=>{const{inverted:o}=e,{common:{cubicBezierEaseInOut:n},self:t}=a.value,{borderRadius:r,borderColorHorizontal:i,fontSize:l,itemHeight:c,dividerColor:d}=t,s={"--n-divider-color":d,"--n-bezier":n,"--n-font-size":l,"--n-border-color-horizontal":i,"--n-border-radius":r,"--n-item-height":c};return o?(s["--n-group-text-color"]=t.groupTextColorInverted,s["--n-color"]=t.colorInverted,s["--n-item-text-color"]=t.itemTextColorInverted,s["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,s["--n-item-text-color-active"]=t.itemTextColorActiveInverted,s["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,s["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,s["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,s["--n-item-icon-color"]=t.itemIconColorInverted,s["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,s["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,s["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,s["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,s["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,s["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,s["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,s["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,s["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,s["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,s["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,s["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,s["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,s["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,s["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,s["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,s["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,s["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,s["--n-arrow-color"]=t.arrowColorInverted,s["--n-arrow-color-hover"]=t.arrowColorHoverInverted,s["--n-arrow-color-active"]=t.arrowColorActiveInverted,s["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,s["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,s["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,s["--n-item-color-hover"]=t.itemColorHoverInverted,s["--n-item-color-active"]=t.itemColorActiveInverted,s["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,s["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(s["--n-group-text-color"]=t.groupTextColor,s["--n-color"]=t.color,s["--n-item-text-color"]=t.itemTextColor,s["--n-item-text-color-hover"]=t.itemTextColorHover,s["--n-item-text-color-active"]=t.itemTextColorActive,s["--n-item-text-color-child-active"]=t.itemTextColorChildActive,s["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,s["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,s["--n-item-icon-color"]=t.itemIconColor,s["--n-item-icon-color-hover"]=t.itemIconColorHover,s["--n-item-icon-color-active"]=t.itemIconColorActive,s["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,s["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,s["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,s["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,s["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,s["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,s["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,s["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,s["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,s["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,s["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,s["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,s["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,s["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,s["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,s["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,s["--n-arrow-color"]=t.arrowColor,s["--n-arrow-color-hover"]=t.arrowColorHover,s["--n-arrow-color-active"]=t.arrowColorActive,s["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,s["--n-arrow-color-child-active"]=t.arrowColorChildActive,s["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,s["--n-item-color-hover"]=t.itemColorHover,s["--n-item-color-active"]=t.itemColorActive,s["--n-item-color-active-hover"]=t.itemColorActiveHover,s["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),s})),F=l?k("menu",r((()=>e.inverted?"a":"b")),$,e):void 0,_=A(),T=d(null),B=d(null);let E=!0;const O=()=>{var e;E?E=!1:null===(e=T.value)||void 0===e||e.sync({showAllItemsBeforeCalculate:!0})};const L=d(-1);const j=r((()=>{const o=L.value;return{children:-1===o?[]:e.options.slice(o)}})),V=r((()=>{const{childrenField:o,disabledField:n,keyField:t}=e;return K([j.value],{getIgnored:e=>se(e),getChildren:e=>e[o],getDisabled:e=>e[n],getKey(e){var o;return null!==(o=e[t])&&void 0!==o?o:e.name}})})),U=r((()=>K([{}]).treeNodes[0]));return{mergedClsPrefix:n,controlledExpandedKeys:x,uncontrolledExpanededKeys:f,mergedExpandedKeys:N,uncontrolledValue:m,mergedValue:g,activePath:H,tmNodes:P,mergedTheme:a,mergedCollapsed:s,cssVars:l?void 0:$,themeClass:null==F?void 0:F.themeClass,overflowRef:T,counterRef:B,updateCounter:()=>{},onResize:O,onUpdateOverflow:function(e){e||(L.value=-1)},onUpdateCount:function(o){L.value=e.options.length-o},renderCounter:function(){var e;if(-1===L.value)return o(te,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:U.value,domId:_,isEllipsisPlaceholder:!0});const n=V.value.treeNodes[0],t=H.value,r=!!(null===(e=n.children)||void 0===e?void 0:e.some((e=>t.includes(e.key))));return o(te,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:r,tmNode:n,domId:_,rawNodes:n.rawNode.children||[],tmNodes:n.children||[],isEllipsisPlaceholder:!0})},getCounter:function(){return document.getElementById(_)},onRender:null==F?void 0:F.onRender,showOption:o=>{const n=v.value.getPath(null!=o?o:g.value,{includeSelf:!1}).keyPath;if(!n.length)return;const t=Array.from(N.value),r=new Set([...t,...n]);e.accordion&&u.value.forEach((e=>{r.has(e)&&!n.includes(e)&&r.delete(e)})),R(Array.from(r))},deriveResponsiveState:O}},render(){const{mergedClsPrefix:e,mode:n,themeClass:t,onRender:r}=this;null==r||r();const i=()=>this.tmNodes.map((e=>ve(e,this.$props))),l="horizontal"===n&&this.responsive,a=()=>o("div",P(this.$attrs,{role:"horizontal"===n?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${n}`,l&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars}),l?o(U,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:i,counter:this.renderCounter}):i());return l?o(N,{onResize:this.onResize},{default:a}):a()}}),fe=p("switch","\n height: var(--n-height);\n min-width: var(--n-width);\n vertical-align: middle;\n user-select: none;\n -webkit-user-select: none;\n display: inline-flex;\n outline: none;\n justify-content: center;\n align-items: center;\n",[f("children-placeholder","\n height: var(--n-rail-height);\n display: flex;\n flex-direction: column;\n overflow: hidden;\n pointer-events: none;\n visibility: hidden;\n "),f("rail-placeholder","\n display: flex;\n flex-wrap: none;\n "),f("button-placeholder","\n width: calc(1.75 * var(--n-rail-height));\n height: var(--n-rail-height);\n "),p("base-loading","\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translateX(-50%) translateY(-50%);\n font-size: calc(var(--n-button-width) - 4px);\n color: var(--n-loading-color);\n transition: color .3s var(--n-bezier);\n ",[H({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),f("checked, unchecked","\n transition: color .3s var(--n-bezier);\n color: var(--n-text-color);\n box-sizing: border-box;\n position: absolute;\n white-space: nowrap;\n top: 0;\n bottom: 0;\n display: flex;\n align-items: center;\n line-height: 1;\n "),f("checked","\n right: 0;\n padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),f("unchecked","\n left: 0;\n justify-content: flex-end;\n padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));\n "),m("&:focus",[f("rail","\n box-shadow: var(--n-box-shadow-focus);\n ")]),g("round",[f("rail","border-radius: calc(var(--n-rail-height) / 2);",[f("button","border-radius: calc(var(--n-button-height) / 2);")])]),b("disabled",[b("icon",[g("rubber-band",[g("pressed",[f("rail",[f("button","max-width: var(--n-button-width-pressed);")])]),f("rail",[m("&:active",[f("button","max-width: var(--n-button-width-pressed);")])]),g("active",[g("pressed",[f("rail",[f("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),f("rail",[m("&:active",[f("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),g("active",[f("rail",[f("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),f("rail","\n overflow: hidden;\n height: var(--n-rail-height);\n min-width: var(--n-rail-width);\n border-radius: var(--n-rail-border-radius);\n cursor: pointer;\n position: relative;\n transition:\n opacity .3s var(--n-bezier),\n background .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n background-color: var(--n-rail-color);\n ",[f("button-icon","\n color: var(--n-icon-color);\n transition: color .3s var(--n-bezier);\n font-size: calc(var(--n-button-height) - 4px);\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n display: flex;\n justify-content: center;\n align-items: center;\n line-height: 1;\n ",[H()]),f("button",'\n align-items: center; \n top: var(--n-offset);\n left: var(--n-offset);\n height: var(--n-button-height);\n width: var(--n-button-width-pressed);\n max-width: var(--n-button-width);\n border-radius: var(--n-button-border-radius);\n background-color: var(--n-button-color);\n box-shadow: var(--n-button-box-shadow);\n box-sizing: border-box;\n cursor: inherit;\n content: "";\n position: absolute;\n transition:\n background-color .3s var(--n-bezier),\n left .3s var(--n-bezier),\n opacity .3s var(--n-bezier),\n max-width .3s var(--n-bezier),\n box-shadow .3s var(--n-bezier);\n ')]),g("active",[f("rail","background-color: var(--n-rail-color-active);")]),g("loading",[f("rail","\n cursor: wait;\n ")]),g("disabled",[f("rail","\n cursor: not-allowed;\n opacity: .5;\n ")])]);let be;const xe=e({name:"Switch",props:Object.assign(Object.assign({},w.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]}),setup(e){void 0===be&&(be="undefined"==typeof CSS||void 0!==CSS.supports&&CSS.supports("width","max(1px)"));const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=C(e),t=w("Switch","-switch",fe,R,e,o),i=$(e),{mergedSizeRef:l,mergedDisabledRef:a}=i,c=d(e.defaultValue),s=I(e,"value"),v=M(s,c),u=r((()=>v.value===e.checkedValue)),h=d(!1),m=d(!1),p=r((()=>{const{railStyle:o}=e;if(o)return o({focused:m.value,checked:u.value})}));function g(o){const{"onUpdate:value":n,onChange:t,onUpdateValue:r}=e,{nTriggerFormInput:l,nTriggerFormChange:a}=i;n&&S(n,o),r&&S(r,o),t&&S(t,o),c.value=o,l(),a()}const f=r((()=>{const{value:e}=l,{self:{opacityDisabled:o,railColor:n,railColorActive:r,buttonBoxShadow:i,buttonColor:a,boxShadowFocus:c,loadingColor:d,textColor:s,iconColor:v,[F("buttonHeight",e)]:u,[F("buttonWidth",e)]:h,[F("buttonWidthPressed",e)]:m,[F("railHeight",e)]:p,[F("railWidth",e)]:g,[F("railBorderRadius",e)]:f,[F("buttonBorderRadius",e)]:b},common:{cubicBezierEaseInOut:x}}=t.value;let w,C,z;return be?(w=`calc((${p} - ${u}) / 2)`,C=`max(${p}, ${u})`,z=`max(${g}, calc(${g} + ${u} - ${p}))`):(w=_((T(p)-T(u))/2),C=_(Math.max(T(p),T(u))),z=T(p)>T(u)?g:_(T(g)+T(u)-T(p))),{"--n-bezier":x,"--n-button-border-radius":b,"--n-button-box-shadow":i,"--n-button-color":a,"--n-button-width":h,"--n-button-width-pressed":m,"--n-button-height":u,"--n-height":C,"--n-offset":w,"--n-opacity-disabled":o,"--n-rail-border-radius":f,"--n-rail-color":n,"--n-rail-color-active":r,"--n-rail-height":p,"--n-rail-width":g,"--n-width":z,"--n-box-shadow-focus":c,"--n-loading-color":d,"--n-text-color":s,"--n-icon-color":v}})),b=n?k("switch",r((()=>l.value[0])),f,e):void 0;return{handleClick:function(){e.loading||a.value||(v.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue))},handleBlur:function(){m.value=!1,function(){const{nTriggerFormBlur:e}=i;e()}(),h.value=!1},handleFocus:function(){m.value=!0,function(){const{nTriggerFormFocus:e}=i;e()}()},handleKeyup:function(o){e.loading||a.value||" "===o.key&&(v.value!==e.checkedValue?g(e.checkedValue):g(e.uncheckedValue),h.value=!1)},handleKeydown:function(o){e.loading||a.value||" "===o.key&&(o.preventDefault(),h.value=!0)},mergedRailStyle:p,pressed:h,mergedClsPrefix:o,mergedValue:v,checked:u,mergedDisabled:a,cssVars:n?void 0:f,themeClass:null==b?void 0:b.themeClass,onRender:null==b?void 0:b.onRender}},render(){const{mergedClsPrefix:e,mergedDisabled:n,checked:t,mergedRailStyle:r,onRender:i,$slots:l}=this;null==i||i();const{checked:a,unchecked:c,icon:d,"checked-icon":s,"unchecked-icon":v}=l,u=!(B(d)&&B(s)&&B(v));return o("div",{role:"switch","aria-checked":t,class:[`${e}-switch`,this.themeClass,u&&`${e}-switch--icon`,t&&`${e}-switch--active`,n&&`${e}-switch--disabled`,this.round&&`${e}-switch--round`,this.loading&&`${e}-switch--loading`,this.pressed&&`${e}-switch--pressed`,this.rubberBand&&`${e}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},o("div",{class:`${e}-switch__rail`,"aria-hidden":"true",style:r},E(a,(n=>E(c,(t=>n||t?o("div",{"aria-hidden":!0,class:`${e}-switch__children-placeholder`},o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),n),o("div",{class:`${e}-switch__rail-placeholder`},o("div",{class:`${e}-switch__button-placeholder`}),t)):null)))),o("div",{class:`${e}-switch__button`},E(d,(n=>E(s,(t=>E(v,(r=>o(O,null,{default:()=>this.loading?o(L,{key:"loading",clsPrefix:e,strokeWidth:20}):this.checked&&(t||n)?o("div",{class:`${e}-switch__button-icon`,key:t?"checked-icon":"icon"},t||n):this.checked||!r&&!n?null:o("div",{class:`${e}-switch__button-icon`,key:r?"unchecked-icon":"icon"},r||n)}))))))),E(a,(n=>n&&o("div",{key:"checked",class:`${e}-switch__checked`},n))),E(c,(n=>n&&o("div",{key:"unchecked",class:`${e}-switch__unchecked`},n))))))}});export{xe as _,ge as a};