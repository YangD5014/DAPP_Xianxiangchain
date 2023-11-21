import{_ as t,o as e,c as l,w as i,a,L as s,a1 as n,b as p,t as o,f as h,i as u,r as c,e as r}from"./index-c2c57812.js";import{_ as d}from"./uni-card.bcd3f951.js";import{_ as f}from"./uni-section.3d46fb8b.js";const y=t({name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},align:{type:String,default:"left"},color:{type:String,default:"#333333"},stat:{type:[Boolean,String],default:""}},data:()=>({}),computed:{textAlign(){let t="center";switch(this.align){case"left":t="flex-start";break;case"center":t="center";break;case"right":t="flex-end"}return t}},watch:{title(t){this.isOpenStat()&&uni.report&&uni.report("title",this.title)}},mounted(){this.isOpenStat()&&uni.report&&uni.report("title",this.title)},methods:{isOpenStat(){""===this.stat&&(this.isStat=!1);let t="boolean"==typeof this.stat&&this.stat||"string"==typeof this.stat&&""!==this.stat;return""===this.type&&(this.isStat=!0,"false"===this.stat.toString()&&(this.isStat=!1)),""!==this.type&&(this.isStat=!0,this.isStat=!!t),this.isStat}}},[["render",function(t,c,r,d,f,y){const _=h,g=u;return e(),l(g,{class:"uni-title__box",style:n({"align-items":y.textAlign})},{default:i((()=>[a(_,{class:s(["uni-title__base",["uni-"+r.type]]),style:n({color:r.color})},{default:i((()=>[p(o(r.title),1)])),_:1},8,["class","style"])])),_:1},8,["style"])}],["__scopeId","data-v-7e58812f"]]);const _=t({components:{},data:()=>({title:"标题组件通常用于记录页面标题，例如商品标题、新闻标题等，当前组件会自动上报内容统计数据"}),onLoad(){},methods:{}},[["render",function(t,s,n,o,_,g){const x=h,S=c(r("uni-card"),d),m=c(r("uni-title"),y),b=u,A=c(r("uni-section"),f);return e(),l(b,{class:"uni-content"},{default:i((()=>[a(S,{"is-full":"","is-shadow":!1},{default:i((()=>[a(x,{class:"uni-h6"},{default:i((()=>[p(" 标题组件，通常用于记录页面标题，使用当前组件在 uni-app 开启统计的情况下，将会自动统计页面标题.")])),_:1})])),_:1}),a(A,{title:"不同类型",type:"line"},{default:i((()=>[a(b,{class:"example-body"},{default:i((()=>[a(m,{type:"h1",title:"h1 一级标题"}),a(m,{type:"h2",title:"h2 二级标题"}),a(m,{type:"h3",title:"h3 三级标题"}),a(m,{type:"h4",title:"h4 四级标题"}),a(m,{type:"h5",title:"h5 五级标题"})])),_:1})])),_:1}),a(A,{title:"改变颜色",type:"line"},{default:i((()=>[a(b,{class:"example-body"},{default:i((()=>[a(m,{type:"h1",title:"h1 一级标题",color:"#027fff"}),a(m,{type:"h2",title:"h2 二级标题",color:"#2490ff"}),a(m,{type:"h3",title:"h3 三级标题",color:"#439ffc"}),a(m,{type:"h4",title:"h4 四级标题",color:"#60adfb"}),a(m,{type:"h5",title:"h5 五级标题",color:"#7db9f7"})])),_:1})])),_:1}),a(A,{title:"对齐方式",type:"line"},{default:i((()=>[a(b,{class:"example-body"},{default:i((()=>[a(m,{type:"h1",title:"h1 左对齐",align:"left"}),a(m,{type:"h2",title:"h2 居中",align:"center"}),a(m,{type:"h3",title:"h3 右对齐",align:"right"}),a(m,{type:"h4",title:"h4 居中",align:"center"}),a(m,{type:"h5",title:"h5 左对齐",align:"left"})])),_:1})])),_:1}),a(A,{title:"组合示例",type:"line"},{default:i((()=>[a(b,{class:"example-body"},{default:i((()=>[a(b,{class:"uni-box-head"},{default:i((()=>[a(m,{type:"h1",align:"center",title:"uni-app介绍"})])),_:1}),a(b,{class:"uni-box"},{default:i((()=>[a(m,{class:"h3",type:"h3",title:"1 框架介绍"})])),_:1}),a(b,{class:"uni-box"},{default:i((()=>[a(m,{class:"h4",type:"h4",title:"1.1 什么是uni-app"})])),_:1}),a(b,null,{default:i((()=>[a(x,{class:"uni-text"},{default:i((()=>[p("uni-app是一个使用Vue.js开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。即使不跨端，uni-app同时也是更好的小程序开发框架。DCloud公司拥有370万开发者用户，旗下uni-app有5万+案例、900款插件、50+微信/qq群，并且被阿里小程序工具内置，开发者可以放心选择。")])),_:1})])),_:1}),a(b,{class:"uni-box"},{default:i((()=>[a(m,{class:"h4",type:"h4",title:"1.2 开发规范"})])),_:1}),a(b,{class:""},{default:i((()=>[a(m,{class:"h5",type:"h5",color:"#666",title:"- 页面文件遵循 Vue 单文件组件 (SFC) 规范"}),a(m,{class:"h5",type:"h5",color:"#666",title:"- 组件标签靠近小程序规范，详见uni-app 组件规范"}),a(m,{class:"h5",type:"h5",color:"#666",title:"- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见uni-app接口规范"}),a(m,{class:"h5",type:"h5",color:"#666",title:"- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期"}),a(m,{class:"h5",type:"h5",color:"#666",title:"- 为兼容多端运行，建议使用flex布局进行开发"})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-28e00dd3"]]);export{_ as default};