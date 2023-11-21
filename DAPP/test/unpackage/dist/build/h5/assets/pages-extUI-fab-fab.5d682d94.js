import{_ as t,K as i,r as o,e,o as n,c as s,w as a,L as r,a1 as l,a as c,m as h,z as f,F as u,A as d,b as p,t as _,i as b,g,f as m,U as y,s as C,v}from"./index-c2c57812.js";import{_ as k}from"./uni-card.bcd3f951.js";import{_ as w}from"./uni-section.3d46fb8b.js";import{_ as x}from"./uni-icons.1a24bd84.js";const B=t({name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:()=>({})},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:()=>[]},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:()=>({fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#007AFF",backgroundColor:"#fff",buttonColor:"#007AFF",iconColor:"#fff"}}),computed:{contentWidth(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:()=>"55px",boxWidth(){return this.getPosition(3,"horizontal")},boxHeight(){return this.getPosition(3,"vertical")},leftBottom(){return this.getPosition(0,"left","bottom")},rightBottom(){return this.getPosition(0,"right","bottom")},leftTop(){return this.getPosition(0,"left","top")},rightTop(){return this.getPosition(0,"right","top")},flexDirectionStart(){return this.getPosition(1,"vertical","top")},flexDirectionEnd(){return this.getPosition(1,"vertical","bottom")},horizontalLeft(){return this.getPosition(2,"horizontal","left")},horizontalRight(){return this.getPosition(2,"horizontal","right")},nvueBottom:()=>(i().windowBottom,30)},watch:{pattern:{handler(t,i){this.styles=Object.assign({},this.styles,t)},deep:!0}},created(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open(){this.isShow=!0},close(){this.isShow=!1},_onItemClick(t,i){this.$emit("trigger",{index:t,item:i})},getPosition(t,i,o){return 0===t?this.horizontal===i&&this.vertical===o:1===t?this.direction===i&&this.vertical===o:2===t?this.direction===i&&this.horizontal===o:this.isShow&&this.direction===i?this.contentWidth:this.contentWidthMin}}},[["render",function(t,i,y,C,v,k){const w=b,B=g,z=m,S=o(e("uni-icons"),x);return n(),s(w,{class:"uni-cursor-point"},{default:a((()=>[y.popMenu&&(k.leftBottom||k.rightBottom||k.leftTop||k.rightTop)&&y.content.length>0?(n(),s(w,{key:0,class:r([{"uni-fab--leftBottom":k.leftBottom,"uni-fab--rightBottom":k.rightBottom,"uni-fab--leftTop":k.leftTop,"uni-fab--rightTop":k.rightTop},"uni-fab"]),style:l(k.nvueBottom)},{default:a((()=>[c(w,{class:r([{"uni-fab__content--left":"left"===y.horizontal,"uni-fab__content--right":"right"===y.horizontal,"uni-fab__content--flexDirection":"vertical"===y.direction,"uni-fab__content--flexDirectionStart":k.flexDirectionStart,"uni-fab__content--flexDirectionEnd":k.flexDirectionEnd,"uni-fab__content--other-platform":!v.isAndroidNvue},"uni-fab__content"]),style:l({width:k.boxWidth,height:k.boxHeight,backgroundColor:v.styles.backgroundColor}),elevation:"5"},{default:a((()=>[k.flexDirectionStart||k.horizontalLeft?(n(),s(w,{key:0,class:"uni-fab__item uni-fab__item--first"})):h("",!0),(n(!0),f(u,null,d(y.content,((t,i)=>(n(),s(w,{key:i,class:r([{"uni-fab__item--active":v.isShow},"uni-fab__item"]),onClick:o=>k._onItemClick(i,t)},{default:a((()=>[c(B,{src:t.active?t.selectedIconPath:t.iconPath,class:"uni-fab__item-image",mode:"aspectFit"},null,8,["src"]),c(z,{class:"uni-fab__item-text",style:l({color:t.active?v.styles.selectedColor:v.styles.color})},{default:a((()=>[p(_(t.text),1)])),_:2},1032,["style"])])),_:2},1032,["class","onClick"])))),128)),k.flexDirectionEnd||k.horizontalRight?(n(),s(w,{key:1,class:"uni-fab__item uni-fab__item--first"})):h("",!0)])),_:1},8,["class","style"])])),_:1},8,["class","style"])):h("",!0),c(w,{class:r([{"uni-fab__circle--leftBottom":k.leftBottom,"uni-fab__circle--rightBottom":k.rightBottom,"uni-fab__circle--leftTop":k.leftTop,"uni-fab__circle--rightTop":k.rightTop,"uni-fab__content--other-platform":!v.isAndroidNvue},"uni-fab__circle uni-fab__plus"]),style:l({"background-color":v.styles.buttonColor,bottom:k.nvueBottom}),onClick:k._onClick},{default:a((()=>[c(S,{class:r(["fab-circle-icon",{"uni-fab__plus--active":v.isShow&&y.content.length>0}]),type:"plusempty",color:v.styles.iconColor,size:"32"},null,8,["color","class"])])),_:1},8,["class","style","onClick"])])),_:1})}],["__scopeId","data-v-4ac40f92"]]);const z=t({components:{},data:()=>({title:"uni-fab",directionStr:"垂直",horizontal:"left",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"/static/image.png",selectedIconPath:"/static/image-active.png",text:"相册",active:!1},{iconPath:"/static/home.png",selectedIconPath:"/static/home-active.png",text:"首页",active:!1},{iconPath:"/static/star.png",selectedIconPath:"/static/star-active.png",text:"收藏",active:!1}]}),onBackPress(){return!!this.$refs.fab.isShow&&(this.$refs.fab.close(),!0)},methods:{trigger(t){console.log(t),this.content[t.index].active=!t.item.active,y({title:"提示",content:`您${this.content[t.index].active?"选中了":"取消了"}${t.item.text}`,success:function(t){t.confirm?console.log("用户点击确定"):t.cancel&&console.log("用户点击取消")}})},fabClick(){C({title:"点击了悬浮按钮",icon:"none"})},switchBtn(t,i){0===t?(this.direction="horizontal"===this.direction?"vertical":"horizontal",this.directionStr="horizontal"===this.direction?"垂直":"水平"):(this.horizontal=t,this.vertical=i),this.$forceUpdate()},switchColor(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}},[["render",function(t,i,r,l,h,f){const u=m,d=o(e("uni-card"),k),g=v,y=b,C=o(e("uni-section"),w),x=o(e("uni-fab"),B);return n(),s(y,{class:"container"},{default:a((()=>[c(d,{"is-shadow":!1,"is-full":""},{default:a((()=>[c(u,{class:"uni-h6"},{default:a((()=>[p("uni-ui 规范颜色色板，通过内置样式快速指定元素前景和背景色。")])),_:1})])),_:1}),c(C,{title:"基本功能",subTitle:"点击按钮,切换 fab 不同状态",type:"line"},{default:a((()=>[c(y,{class:"warp"},{default:a((()=>[c(g,{class:"button",type:"primary",onClick:i[0]||(i[0]=t=>f.switchBtn(0))},{default:a((()=>[p("切换菜单方向("+_(h.directionStr)+")",1)])),_:1}),c(g,{class:"button",type:"primary",onClick:i[1]||(i[1]=t=>f.switchBtn("left","bottom"))},{default:a((()=>[p("左下角显示")])),_:1}),c(g,{class:"button",type:"primary",onClick:i[2]||(i[2]=t=>f.switchBtn("right","bottom"))},{default:a((()=>[p("右下角显示")])),_:1}),c(g,{class:"button",type:"primary",onClick:i[3]||(i[3]=t=>f.switchBtn("left","top"))},{default:a((()=>[p("左上角显示")])),_:1}),c(g,{class:"button",type:"primary",onClick:i[4]||(i[4]=t=>f.switchBtn("left","top"))},{default:a((()=>[p("左上角显示")])),_:1}),c(g,{class:"button",type:"primary",onClick:i[5]||(i[5]=t=>f.switchBtn("right","top"))},{default:a((()=>[p("右上角显示")])),_:1}),c(g,{class:"button",type:"primary",onClick:f.switchColor},{default:a((()=>[p("修改颜色")])),_:1},8,["onClick"])])),_:1})])),_:1}),c(x,{ref:"fab",pattern:h.pattern,content:h.content,horizontal:h.horizontal,vertical:h.vertical,direction:h.direction,onTrigger:f.trigger,onFabClick:f.fabClick},null,8,["pattern","content","horizontal","vertical","direction","onTrigger","onFabClick"])])),_:1})}],["__scopeId","data-v-3e2321fb"]]);export{z as default};