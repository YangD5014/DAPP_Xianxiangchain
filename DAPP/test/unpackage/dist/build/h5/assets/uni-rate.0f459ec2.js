import{_ as e,T as t,r as s,e as i,o as a,c as o,w as n,a as u,z as r,F as l,A as h,L as c,a1 as d,ag as m,i as f}from"./index-c2c57812.js";import{_ as v}from"./uni-icons.1a24bd84.js";const y=e({name:"UniRate",props:{isFill:{type:[Boolean,String],default:!0},color:{type:String,default:"#ececec"},activeColor:{type:String,default:"#ffca3e"},disabledColor:{type:String,default:"#c0c0c0"},size:{type:[Number,String],default:24},value:{type:[Number,String],default:0},modelValue:{type:[Number,String],default:0},max:{type:[Number,String],default:5},margin:{type:[Number,String],default:0},disabled:{type:[Boolean,String],default:!1},readonly:{type:[Boolean,String],default:!1},allowHalf:{type:[Boolean,String],default:!1},touchable:{type:[Boolean,String],default:!0}},data:()=>({valueSync:"",userMouseFristMove:!0,userRated:!1,userLastRate:1}),watch:{value(e){this.valueSync=Number(e)},modelValue(e){this.valueSync=Number(e)}},computed:{stars(){const e=this.valueSync?this.valueSync:0,t=[],s=Math.floor(e),i=Math.ceil(e);for(let a=0;a<this.max;a++)s>a?t.push({activeWitch:"100%"}):i-1===a?t.push({activeWitch:100*(e-s)+"%"}):t.push({activeWitch:"0"});return t},marginNumber(){return Number(this.margin)}},created(){this.valueSync=Number(this.value||this.modelValue),this._rateBoxLeft=0,this._oldValue=null},mounted(){setTimeout((()=>{this._getSize()}),100),this.PC=this.IsPC()},methods:{touchstart(e){if(this.IsPC())return;if(this.readonly||this.disabled)return;const{clientX:t,screenX:s}=e.changedTouches[0];this._getRateCount(t||s)},touchmove(e){if(this.IsPC())return;if(this.readonly||this.disabled||!this.touchable)return;const{clientX:t,screenX:s}=e.changedTouches[0];this._getRateCount(t||s)},mousedown(e){if(!this.IsPC())return;if(this.readonly||this.disabled)return;const{clientX:t}=e;this.userLastRate=this.valueSync,this._getRateCount(t),this.userRated=!0},mousemove(e){if(!this.IsPC())return;if(this.userRated)return;if(this.userMouseFristMove&&(console.log("---mousemove----",this.valueSync),this.userLastRate=this.valueSync,this.userMouseFristMove=!1),this.readonly||this.disabled||!this.touchable)return;const{clientX:t}=e;this._getRateCount(t)},mouseleave(e){this.IsPC()&&(this.readonly||this.disabled||!this.touchable||(this.userRated?this.userRated=!1:this.valueSync=this.userLastRate))},IsPC(){var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],s=!0;for(let i=0;i<t.length-1;i++)if(e.indexOf(t[i])>0){s=!1;break}return s},_getRateCount(e){this._getSize();const t=Number(this.size);if(isNaN(t))return new Error("size 属性只能设置为数字");const s=e-this._rateBoxLeft;let i=parseInt(s/(t+this.marginNumber));i=i<0?0:i,i=i>this.max?this.max:i;const a=parseInt(s-(t+this.marginNumber)*i);let o=0;(this._oldValue!==i||this.PC)&&(this._oldValue=i,o=this.allowHalf?a>t/2?i+1:i+.5:i+1,o=Math.max(.5,Math.min(o,this.max)),this.valueSync=o,this._onChange())},_onChange(){this.$emit("input",this.valueSync),this.$emit("update:modelValue",this.valueSync),this.$emit("change",{value:this.valueSync})},_getSize(){t().in(this).select(".uni-rate").boundingClientRect().exec((e=>{e&&(this._rateBoxLeft=e[0].left)}))}}},[["render",function(e,t,y,g,p,b){const S=s(i("uni-icons"),v),_=f;return a(),o(_,null,{default:n((()=>[u(_,{ref:"uni-rate",class:"uni-rate"},{default:n((()=>[(a(!0),r(l,null,h(b.stars,((e,t)=>(a(),o(_,{class:c(["uni-rate__icon",{"uni-cursor-not-allowed":y.disabled}]),style:d({"margin-right":b.marginNumber+"px"}),key:t,onTouchstart:m(b.touchstart,["stop"]),onTouchmove:m(b.touchmove,["stop"]),onMousedown:m(b.mousedown,["stop"]),onMousemove:m(b.mousemove,["stop"]),onMouseleave:b.mouseleave},{default:n((()=>[u(S,{color:y.color,size:y.size,type:y.isFill?"star-filled":"star"},null,8,["color","size","type"]),u(_,{style:d({width:e.activeWitch}),class:"uni-rate__icon-on"},{default:n((()=>[u(S,{color:y.disabled?y.disabledColor:y.activeColor,size:y.size,type:"star-filled"},null,8,["color","size"])])),_:2},1032,["style"])])),_:2},1032,["class","style","onTouchstart","onTouchmove","onMousedown","onMousemove","onMouseleave"])))),128))])),_:1},512)])),_:1})}],["__scopeId","data-v-6a42bbe2"]]);export{y as _};
