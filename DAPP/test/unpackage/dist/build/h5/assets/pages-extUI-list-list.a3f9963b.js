import{_ as t,s as e,o as l,c as i,w as o,i as s,a as n,b as a,bg as r,f as c,r as d,e as u,g as h}from"./index-c2c57812.js";import{_ as f}from"./uni-card.bcd3f951.js";import{_ as p}from"./uni-list-item.877a7a1b.js";import{_}from"./uni-list.a98ea169.js";import{_ as g}from"./uni-section.3d46fb8b.js";import"./uni-icons.1a24bd84.js";import"./uni-badge.3ca48f09.js";const m=t({components:{},data:()=>({cover:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",avatar:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}),methods:{onClick(t){console.log("执行click事件",t.data),e({title:"点击反馈"})},switchChange(t){e({title:"change:"+t.value,icon:"none"})}}},[["render",function(t,e,m,b,x,w){const k=c,T=d(u("uni-card"),f),C=d(u("uni-list-item"),p),y=d(u("uni-list"),_),A=d(u("uni-section"),g),j=s,v=h;return l(),i(j,{class:"container"},{default:o((()=>[n(T,{"is-shadow":!1,"is-full":""},{default:o((()=>[n(k,{class:"uni-h6"},{default:o((()=>[a("列表组件可以在其中使用图标、略缩图或放置任何你想放的元素，使用场景如：导航菜单、列表、设置中心排版等")])),_:1})])),_:1}),n(A,{title:"基础用法",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{title:"列表文字"}),n(C,{title:"列表文字",rightText:"右侧文字"}),n(C,{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"})])),_:1})])),_:1}),n(A,{title:"禁用列表",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"}),n(C,{disabled:!0,title:"列表禁用状态",rightText:"右侧文字"})])),_:1})])),_:1}),n(A,{title:"显示右侧箭头",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{showArrow:"",title:"列表文字"}),n(C,{showArrow:"",title:"列表文字",rightText:"右侧文字"})])),_:1})])),_:1}),n(A,{title:"开启点击反馈",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{title:"弹窗提示",clickable:"",onClick:w.onClick},null,8,["onClick"]),n(C,{title:"页面跳转",to:"./chat",onClick:w.onClick},null,8,["to","onClick"]),n(C,{title:"关闭当前页面打开新页面",showArrow:"",link:"redirectTo",to:"./chat",onClick:w.onClick},null,8,["onClick"]),n(C,{title:"打开错误页面(查看控制台)",showArrow:"",link:"redirectTo",to:"./chats",onClick:w.onClick},null,8,["onClick"])])),_:1})])),_:1}),n(A,{title:"不显示分隔线",type:"line"},{default:o((()=>[n(y,{border:!1},{default:o((()=>[n(C,{title:"列表文字"}),n(C,{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}),n(C,{border:!1,title:"列表文字",note:"列表描述信息",rightText:"右侧文字"})])),_:1})])),_:1}),n(A,{title:"分隔线通栏",type:"line"},{default:o((()=>[n(y,{"border-full":""},{default:o((()=>[n(C,{title:"列表文字"}),n(C,{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"}),n(C,{title:"列表文字",note:"列表描述信息",rightText:"右侧文字"})])),_:1})])),_:1}),n(A,{title:"文字溢出隐藏",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{ellipsis:"1",title:"超长文字显示一行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字"}),n(C,{ellipsis:"2",title:"超长文字显示二行,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",rightText:"二行显示"}),n(C,{ellipsis:"1",title:"全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",note:"列表描述信息,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字,下是测试文字",showArrow:"",rightText:"一行显示"}),n(C,{title:"全部显示,以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字以下是测试文字",showArrow:"",rightText:"全部"})])),_:1})])),_:1}),n(A,{title:"显示图标或图片",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,{"show-extra-icon":!0,showArrow:"","extra-icon":x.extraIcon,title:"列表左侧带扩展图标"},null,8,["extra-icon"]),n(C,{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:"",thumb:"/static/c1.png","thumb-size":"sm",rightText:"小图"}),n(C,{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:"",thumb:"https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png","thumb-size":"base",rightText:"默认"}),n(C,{title:"列表左侧带略缩图",note:"列表描述信息",showArrow:"",thumb:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png","thumb-size":"lg",rightText:"大图"})])),_:1})])),_:1}),n(A,{title:"使用插槽",type:"line"},{default:o((()=>[n(y,null,{default:o((()=>[n(C,null,{body:o((()=>[n(j,{class:"slot-box"},{default:o((()=>[n(k,{class:"slot-text"},{default:o((()=>[a("使用 body 插槽")])),_:1})])),_:1})])),_:1}),n(C,{title:"自定义右侧插槽",note:"列表描述信息",link:""},{footer:o((()=>[n(v,{class:"slot-image",src:r,mode:"widthFix"})])),_:1}),n(C,null,{header:o((()=>[n(j,{class:"slot-box"},{default:o((()=>[n(v,{class:"slot-image",src:r,mode:"widthFix"})])),_:1})])),body:o((()=>[n(k,{class:"slot-box slot-text"},{default:o((()=>[a("自定义两侧插槽")])),_:1})])),footer:o((()=>[n(v,{class:"slot-image",src:r,mode:"widthFix"})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-3fb4c716"]]);export{m as default};