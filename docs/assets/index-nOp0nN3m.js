import{d as t,a as e,bH as o,a2 as n,ag as s,v as i,a7 as l}from"./index-DARFfA1y.js";import{c as r,b as a}from"./Popover-CFfzrRBi.js";const u="v-hidden",c=a("[v-hidden]",{display:"none!important"}),f=t({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(t,{slots:s}){const i=e(null),l=e(null);function a(e){const{value:o}=i,{getCounter:n,getTail:r}=t;let a;if(a=void 0!==n?n():l.value,!o||!a)return;a.hasAttribute(u)&&a.removeAttribute(u);const{children:c}=o;if(e.showAllItemsBeforeCalculate)for(const t of c)t.hasAttribute(u)&&t.removeAttribute(u);const f=o.offsetWidth,d=[],h=s.tail?null==r?void 0:r():null;let v=h?h.offsetWidth:0,p=!1;const b=o.children.length-(s.tail?1:0);for(let s=0;s<b-1;++s){if(s<0)continue;const e=c[s];if(p){e.hasAttribute(u)||e.setAttribute(u,"");continue}e.hasAttribute(u)&&e.removeAttribute(u);const o=e.offsetWidth;if(v+=o,d[s]=o,v>f){const{updateCounter:e}=t;for(let o=s;o>=0;--o){const n=b-1-o;void 0!==e?e(n):a.textContent=`${n}`;const i=a.offsetWidth;if(v-=d[o],v+i<=f||0===o){p=!0,s=o-1,h&&(-1===s?(h.style.maxWidth=f-i+"px",h.style.boxSizing="border-box"):h.style.maxWidth="");const{onUpdateCount:e}=t;e&&e(n);break}}}}const{onUpdateOverflow:m}=t;p?void 0!==m&&m(!0):(void 0!==m&&m(!1),a.setAttribute(u,""))}const f=o();return c.mount({id:"vueuc/overflow",head:!0,anchorMetaName:r,ssr:f}),n((()=>a({showAllItemsBeforeCalculate:!1}))),{selfRef:i,counterRef:l,sync:a}},render(){const{$slots:t}=this;return s((()=>this.sync({showAllItemsBeforeCalculate:!1}))),i("div",{class:"v-overflow",ref:"selfRef"},[l(t,"default"),t.counter?t.counter():i("span",{style:{display:"inline-block"},ref:"counterRef"}),t.tail?t.tail():null])}});export{f as V};
