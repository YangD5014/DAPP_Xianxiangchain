import{_ as e,o as t,c as a,w as l,b as i,t as s,L as d,a1 as r,m as n,f as u,i as c,a as p,r as y,e as o}from"./index-c2c57812.js";import{_ as f}from"./uni-card.bcd3f951.js";import{_ as m}from"./uni-section.3d46fb8b.js";const g=e({name:"UniTag",emits:["click"],props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},inverted:{type:[Boolean,String],default:!1},circle:{type:[Boolean,String],default:!1},mark:{type:[Boolean,String],default:!1},customStyle:{type:String,default:""}},computed:{classes(){const{type:e,disabled:t,inverted:a,circle:l,mark:i,size:s,isTrue:d}=this;return["uni-tag--"+e,"uni-tag--"+s,d(t)?"uni-tag--disabled":"",d(a)?"uni-tag--"+e+"--inverted":"",d(l)?"uni-tag--circle":"",d(i)?"uni-tag--mark":"",d(a)?"uni-tag--inverted uni-tag-text--"+e:"","small"===s?"uni-tag-text--small":""].join(" ")}},methods:{isTrue:e=>!0===e||"true"===e,onClick(){this.isTrue(this.disabled)||this.$emit("click")}}},[["render",function(e,c,p,y,o,f){const m=u;return p.text?(t(),a(m,{key:0,class:d(["uni-tag",f.classes]),style:r(p.customStyle),onClick:f.onClick},{default:l((()=>[i(s(p.text),1)])),_:1},8,["class","style","onClick"])):n("",!0)}],["__scopeId","data-v-f9b60738"]]);const _=e({components:{},data:()=>({type:"default",inverted:!1}),methods:{setType(){let e=["default","primary","success","warning","error"],t=e.indexOf(this.type);e.splice(t,1);let a=Math.floor(4*Math.random());this.type=e[a]},setInverted(){this.inverted=!this.inverted}}},[["render",function(e,s,d,r,n,_){const v=u,x=y(o("uni-card"),f),w=y(o("uni-tag"),g),b=c,k=y(o("uni-section"),m);return t(),a(b,{class:"container"},{default:l((()=>[p(x,{"is-full":""},{default:l((()=>[p(v,{class:"uni-h6"},{default:l((()=>[i("标签组件多用于商品分类、重点内容显示等场景。")])),_:1})])),_:1}),p(k,{title:"实心标签",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"primary"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"success"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"warning"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"error"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签"})])),_:1})])),_:1})])),_:1}),p(k,{title:"空心标签",subTitle:"使用 inverted 属性显示空心表签",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{inverted:!0,text:"标签",type:"primary"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{inverted:!0,text:"标签",type:"success"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{inverted:!0,text:"标签",type:"warning"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{inverted:!0,text:"标签",type:"error"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{inverted:!0,text:"标签"})])),_:1})])),_:1})])),_:1}),p(k,{title:"标签尺寸",subTitle:"使用 size 属性控制标签大小",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"primary",size:"normal"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"primary",size:"small"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"标签",type:"primary",size:"mini"})])),_:1})])),_:1})])),_:1}),p(k,{title:"圆角样式",subTitle:"使用 circle 属性控制标签圆角",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{circle:!0,text:"标签",type:"primary"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{circle:!0,text:"标签",type:"primary",size:"small"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{circle:!0,text:"标签",type:"primary",size:"mini"})])),_:1})])),_:1})])),_:1}),p(k,{title:"标记样式",subTitle:"使用 mark 属性显示标记样式",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{mark:!0,text:"标签",type:"primary",size:"default"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{mark:!0,text:"标签",type:"primary",size:"small"})])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{mark:!0,text:"标签",type:"primary",size:"mini"})])),_:1})])),_:1})])),_:1}),p(k,{title:"不可点击状态",subTitle:"使用 disabled 属性 显示禁用样式",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{disabled:"",text:"标签",type:"primary"})])),_:1})])),_:1})])),_:1}),p(k,{title:"自定义样式",subTitle:"使用 custom-style 属性自定义样式",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{text:"自定义标签样式","custom-style":"background-color: #4335d6; border-color: #4335d6; color: #fff;"})])),_:1})])),_:1})])),_:1}),p(k,{title:"点击事件",type:"line",padding:""},{default:l((()=>[p(b,{class:"example-body"},{default:l((()=>[p(b,{class:"tag-view"},{default:l((()=>[p(w,{type:n.type,text:"标签",onClick:_.setType},null,8,["type","onClick"])])),_:1}),p(b,{class:"tag-view"},{default:l((()=>[p(w,{circle:!0,inverted:n.inverted,text:"标签",type:"primary",onClick:_.setInverted},null,8,["inverted","onClick"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-a0ab684b"]]);export{_ as default};