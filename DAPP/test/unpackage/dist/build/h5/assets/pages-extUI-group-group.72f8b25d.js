import{_ as t,o as e,c as l,w as a,aY as u,a1 as n,a as s,b as r,t as i,m as d,L as o,f,i as _,r as p,e as c}from"./index-c2c57812.js";import{_ as m}from"./uni-card.bcd3f951.js";import{_ as g}from"./uni-section.3d46fb8b.js";const h=t({name:"uniGroup",emits:["click"],props:{title:{type:String,default:""},top:{type:[Number,String],default:10},mode:{type:String,default:"default"},stat:{type:Boolean,default:!1}},data:()=>({margin:!1,border:!1}),watch:{title(t){uni.report&&this.stat&&""!==t&&uni.report("title",t)}},created(){this.form=this.getForm(),this.form&&(this.margin=!0,this.border=this.form.border)},methods:{getForm(){let t=this.$parent,e=t.$options.name;for(;"uniForms"!==e;){if(t=t.$parent,!t)return!1;e=t.$options.name}return t},onClick(){this.$emit("click")}}},[["render",function(t,p,c,m,g,h){const y=f,b=_;return e(),l(b,{class:o(["uni-group",["uni-group--"+c.mode,g.margin?"group-margin":""]]),style:n({marginTop:`${c.top}px`})},{default:a((()=>[u(t.$slots,"title",{},(()=>[c.title?(e(),l(b,{key:0,class:"uni-group__title",style:n({"padding-left":g.border?"30px":"15px"})},{default:a((()=>[s(y,{class:"uni-group__title-text"},{default:a((()=>[r(i(c.title),1)])),_:1})])),_:1},8,["style"])):d("",!0)]),!0),s(b,{class:o(["uni-group__content",{"group-conent-padding":g.border}])},{default:a((()=>[u(t.$slots,"default",{},void 0,!0)])),_:3},8,["class"])])),_:3},8,["class","style"])}],["__scopeId","data-v-f9b5d343"]]);const y=t({components:{},data:()=>({appear:!1,name:"",mobile:"139 9999 9999",weixin:"sskd",message:"",errorMessage:""}),onReady(){},methods:{}},[["render",function(t,u,n,i,d,o){const y=f,b=p(c("uni-card"),m),$=_,x=p(c("uni-group"),h),k=p(c("uni-section"),g);return e(),l($,{class:"container"},{default:a((()=>[s(b,{"is-shadow":!1,"is-full":""},{default:a((()=>[s(y,{class:"uni-h6"},{default:a((()=>[r("分组组件可用于将组件分组，添加间隔，以产生明显的区块。")])),_:1})])),_:1}),s(k,{title:"基础分组",type:"line"},{default:a((()=>[s(x,null,{default:a((()=>[s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1})])),_:1}),s(x,{title:"基本模式","margin-top":"20"},{default:a((()=>[s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1})])),_:1})])),_:1}),s(k,{title:"卡片分组",type:"line"},{default:a((()=>[s(x,{mode:"card"},{default:a((()=>[s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1})])),_:1}),s(x,{title:"card 模式",mode:"card"},{default:a((()=>[s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1}),s($,null,{default:a((()=>[r(" 分组内容 ")])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-e465887b"]]);export{y as default};