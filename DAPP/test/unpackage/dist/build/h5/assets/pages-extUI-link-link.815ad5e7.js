import{_ as t,aO as e,o as i,z as n,aY as s,b as o,t as a,L as l,a1 as d,c as r,w as u,f as p,i as h,a as f,r as c,e as w}from"./index-c2c57812.js";import{_ as y}from"./uni-card.bcd3f951.js";import{_}from"./uni-section.3d46fb8b.js";const m=t({name:"uniLink",props:{href:{type:String,default:""},text:{type:String,default:""},download:{type:String,default:""},showUnderLine:{type:[Boolean,String],default:!0},copyTips:{type:String,default:"已自动复制网址，请在手机浏览器里粘贴该网址"},color:{type:String,default:"#999999"},fontSize:{type:[Number,String],default:14}},computed:{isShowA(){return this._isH5=!0,!(!this.isMail()&&!this.isTel()||!0!==this._isH5)}},created(){this._isH5=null},methods:{isMail(){return this.href.startsWith("mailto:")},isTel(){return this.href.startsWith("tel:")},openURL(){window.open(this.href)},makePhoneCall(t){e({phoneNumber:t})}}},[["render",function(t,e,h,f,c,w){const y=p;return w.isShowA?(i(),n("a",{key:0,class:l(["uni-link",{"uni-link--withline":!0===h.showUnderLine||"true"===h.showUnderLine}]),href:h.href,style:d({color:h.color,fontSize:h.fontSize+"px"}),download:h.download},[s(t.$slots,"default",{},(()=>[o(a(h.text),1)]),!0)],14,["href","download"])):(i(),r(y,{key:1,class:l(["uni-link",{"uni-link--withline":!0===h.showUnderLine||"true"===h.showUnderLine}]),style:d({color:h.color,fontSize:h.fontSize+"px"}),onClick:w.openURL},{default:u((()=>[s(t.$slots,"default",{},(()=>[o(a(h.text),1)]),!0)])),_:3},8,["class","style","onClick"]))}],["__scopeId","data-v-44511933"]]);const S=t({components:{},data:()=>({})},[["render",function(t,e,n,s,a,l){const d=p,S=c(w("uni-card"),y),g=c(w("uni-link"),m),x=c(w("uni-section"),_),L=h;return i(),r(L,{class:"container"},{default:u((()=>[f(S,{"is-full":"","is-shadow":!1},{default:u((()=>[f(d,{class:"uni-h6"},{default:u((()=>[o("超链接组件，在小程序内复制url，在app内打开外部浏览器，在h5端打开新网页。")])),_:1})])),_:1}),f(x,{title:"基本示例",subTitle:"打开外部连接",type:"line",padding:""},{default:u((()=>[f(g,{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/"})])),_:1}),f(x,{title:"自定义颜色",type:"line",padding:""},{default:u((()=>[f(g,{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",color:"#007BFF"})])),_:1}),f(x,{title:"自定义下划线",type:"line",padding:""},{default:u((()=>[f(g,{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false"})])),_:1}),f(x,{title:"自定义字体大小",type:"line",padding:""},{default:u((()=>[f(g,{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false","font-size":"20"})])),_:1}),f(x,{title:"自定义插槽",type:"line",padding:""},{default:u((()=>[f(g,{href:"https://uniapp.dcloud.io/",text:"https://uniapp.dcloud.io/",showUnderLine:"false",color:"red"},{default:u((()=>[o("点击跳转")])),_:1})])),_:1})])),_:1})}]]);export{S as default};