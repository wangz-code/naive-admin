import{C as t,d as s,a as r,v as e,ao as l}from"./index-DARFfA1y.js";const n=s({name:"Scrollbar",props:Object.assign(Object.assign({},t.props),{trigger:String,xScrollable:Boolean,onScroll:Function,contentClass:String,contentStyle:[Object,String],size:Number,yPlacement:{type:String,default:"right"},xPlacement:{type:String,default:"bottom"}}),setup(){const t=r(null),s={scrollTo:(...s)=>{var r;null===(r=t.value)||void 0===r||r.scrollTo(s[0],s[1])},scrollBy:(...s)=>{var r;null===(r=t.value)||void 0===r||r.scrollBy(s[0],s[1])}};return Object.assign(Object.assign({},s),{scrollbarInstRef:t})},render(){return e(l,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}});export{n as S};
