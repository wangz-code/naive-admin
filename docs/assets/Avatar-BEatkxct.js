import{c3 as e,aF as r,z as n,V as o,y as t,W as s,A as a,C as i,d as l,D as d,a as c,i as u,l as v,dp as h,Y as g,G as f,dq as b,a3 as m,a1 as p,aW as z,a0 as y,aT as O,x,v as j,be as F}from"./index-Chs2zBSz.js";import{t as E}from"./Tag-CbvsiTlD.js";const L=e&&"loading"in document.createElement("img");const R=new WeakMap,k=new WeakMap,w=new WeakMap,P=(e,r,n)=>{if(!e)return()=>{};const o=function(e={}){var r;const{root:n=null}=e;return{hash:`${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):null!==(r=e.threshold)&&void 0!==r?r:"0"}`,options:Object.assign(Object.assign({},e),{root:("string"==typeof n?document.querySelector(n):n)||document.documentElement})}}(r),{root:t}=o.options;let s;const a=R.get(t);let i,l;a?s=a:(s=new Map,R.set(t,s)),s.has(o.hash)?(l=s.get(o.hash),l[1].has(e)||(i=l[0],l[1].add(e),i.observe(e))):(i=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const r=k.get(e.target),n=w.get(e.target);r&&r(),n&&(n.value=!0)}}))}),o.options),i.observe(e),l=[i,new Set([e])],s.set(o.hash,l));let d=!1;const c=()=>{d||(k.delete(e),w.delete(e),d=!0,l[1].has(e)&&(l[0].unobserve(e),l[1].delete(e)),l[1].size<=0&&s.delete(o.hash),s.size||R.delete(t))};return k.set(e,c),w.set(e,n),c},S=r("n-avatar-group"),$=n("avatar","\n width: var(--n-merged-size);\n height: var(--n-merged-size);\n color: #FFF;\n font-size: var(--n-font-size);\n display: inline-flex;\n position: relative;\n overflow: hidden;\n text-align: center;\n border: var(--n-border);\n border-radius: var(--n-border-radius);\n --n-merged-color: var(--n-color);\n background-color: var(--n-merged-color);\n transition:\n border-color .3s var(--n-bezier),\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n",[o(t("&","--n-merged-color: var(--n-color-modal);")),s(t("&","--n-merged-color: var(--n-color-popover);")),t("img","\n width: 100%;\n height: 100%;\n "),a("text","\n white-space: nowrap;\n display: inline-block;\n position: absolute;\n left: 50%;\n top: 50%;\n "),n("icon","\n vertical-align: bottom;\n font-size: calc(var(--n-merged-size) - 6px);\n "),a("text","line-height: 1.25")]),M=l({name:"Avatar",props:Object.assign(Object.assign({},i.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:n}=d(e),o=c(!1);let t=null;const s=c(null),a=c(null),l=u(S,null),O=v((()=>{const{size:r}=e;if(r)return r;const{size:n}=l||{};return n||"medium"})),x=i("Avatar","-avatar",$,h,e,r),j=u(E,null),F=v((()=>{if(l)return!0;const{round:r,circle:n}=e;return void 0!==r||void 0!==n?r||n:!!j&&j.roundRef.value})),L=v((()=>!!l||(e.bordered||!1))),R=v((()=>{const r=O.value,n=F.value,o=L.value,{color:t}=e,{self:{borderRadius:s,fontSize:a,color:i,border:l,colorModal:d,colorPopover:c},common:{cubicBezierEaseInOut:u}}=x.value;let v;return v="number"==typeof r?`${r}px`:x.value.self[g("height",r)],{"--n-font-size":a,"--n-border":o?l:"none","--n-border-radius":n?"50%":s,"--n-color":t||i,"--n-color-modal":t||d,"--n-color-popover":t||c,"--n-bezier":u,"--n-merged-size":`var(--n-avatar-size-override, ${v})`}})),k=n?f("avatar",v((()=>{const r=O.value,n=F.value,o=L.value,{color:t}=e;let s="";return r&&(s+="number"==typeof r?`a${r}`:r[0]),n&&(s+="b"),o&&(s+="c"),t&&(s+=b(t)),s})),R,e):void 0,w=c(!e.lazy);m((()=>{if(e.lazy&&e.intersectionObserverOptions){let r;const n=p((()=>{null==r||r(),r=void 0,e.lazy&&(r=P(a.value,e.intersectionObserverOptions,w))}));z((()=>{n(),null==r||r()}))}})),y((()=>{var r;return e.src||(null===(r=e.imgProps)||void 0===r?void 0:r.src)}),(()=>{o.value=!1}));const M=c(!e.lazy);return{textRef:s,selfRef:a,mergedRoundRef:F,mergedClsPrefix:r,fitTextTransform:()=>{const{value:e}=s;if(e&&(null===t||t!==e.innerHTML)){t=e.innerHTML;const{value:r}=a;if(r){const{offsetWidth:n,offsetHeight:o}=r,{offsetWidth:t,offsetHeight:s}=e,a=.9,i=Math.min(n/t*a,o/s*a,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${i})`}}},cssVars:n?void 0:R,themeClass:null==k?void 0:k.themeClass,onRender:null==k?void 0:k.onRender,hasLoadError:o,shouldStartLoading:w,loaded:M,mergedOnError:r=>{if(!w.value)return;o.value=!0;const{onError:n,imgProps:{onError:t}={}}=e;null==n||n(r),null==t||t(r)},mergedOnLoad:r=>{const{onLoad:n,imgProps:{onLoad:o}={}}=e;null==n||n(r),null==o||o(r),M.value=!0}}},render(){var e,r;const{$slots:n,src:o,mergedClsPrefix:t,lazy:s,onRender:a,loaded:i,hasLoadError:l,imgProps:d={}}=this;let c;null==a||a();const u=!i&&!l&&(this.renderPlaceholder?this.renderPlaceholder():null===(r=(e=this.$slots).placeholder)||void 0===r?void 0:r.call(e));return c=this.hasLoadError?this.renderFallback?this.renderFallback():O(n.fallback,(()=>[j("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})])):x(n.default,(e=>{if(e)return j(F,{onResize:this.fitTextTransform},{default:()=>j("span",{ref:"textRef",class:`${t}-avatar__text`},e)});if(o||d.src){const e=this.src||d.src;return j("img",Object.assign(Object.assign({},d),{loading:L&&!this.intersectionObserverOptions&&s?"lazy":"eager",src:s&&this.intersectionObserverOptions?this.shouldStartLoading?e:void 0:e,"data-image-src":e,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[d.style||"",{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}})),j("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},c,s&&u)}});export{M as _};
