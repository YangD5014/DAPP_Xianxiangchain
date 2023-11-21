import{_ as t,s as a,o as e,c as l,w as s,i,a as c,b as o,f as n,r as d,e as u,g as r}from"./index-c2c57812.js";import{_ as f}from"./uni-card.bcd3f951.js";import{_}from"./uni-section.3d46fb8b.js";import{_ as m}from"./uni-icons.1a24bd84.js";import{_ as p}from"./uni-list-item.877a7a1b.js";import{_ as b}from"./uni-list.a98ea169.js";import"./uni-badge.3ca48f09.js";const h=t({components:{},data:()=>({cover:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg",avatar:"https://web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",extraIcon:{color:"#4cd964",size:"22",type:"gear-filled"}}),methods:{onClick(t){console.log(t)},actionsClick(t){a({title:t,icon:"none"})}}},[["render",function(t,a,h,k,C,y){const x=n,v=d(u("uni-card"),f),w=d(u("uni-section"),_),z=d(u("uni-icons"),m),g=i,j=d(u("uni-list-item"),p),A=d(u("uni-list"),b),F=r;return e(),l(g,{class:"container"},{default:s((()=>[c(v,{"is-shadow":!1,"is-full":""},{default:s((()=>[c(x,{class:"uni-h6"},{default:s((()=>[o("卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")])),_:1})])),_:1}),c(w,{title:"基础卡片",type:"line"},{default:s((()=>[c(v,{"is-shadow":!1},{default:s((()=>[c(x,{class:"uni-body"},{default:s((()=>[o("这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。")])),_:1})])),_:1})])),_:1}),c(w,{title:"卡片标题+额外信息",type:"line"},{default:s((()=>[c(v,{title:"基础卡片",extra:"额外信息"},{default:s((()=>[c(x,{class:"uni-body"},{default:s((()=>[o("这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。")])),_:1})])),_:1})])),_:1}),c(w,{title:"双标题卡片",type:"line"},{default:s((()=>[c(v,{title:"基础卡片","sub-title":"副标题",extra:"额外信息",thumbnail:C.avatar,onClick:y.onClick},{default:s((()=>[c(x,{class:"uni-body"},{default:s((()=>[o("这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。")])),_:1})])),_:1},8,["thumbnail","onClick"])])),_:1}),c(w,{title:"通栏卡片",type:"line"},{default:s((()=>[c(v,{title:"基础卡片",isFull:!0,"sub-title":"副标题",extra:"额外信息",thumbnail:C.avatar},{default:s((()=>[c(x,{class:"uni-body"},{default:s((()=>[o("这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。")])),_:1})])),_:1},8,["thumbnail"])])),_:1}),c(w,{title:"卡片封面图+操作栏",type:"line"},{default:s((()=>[c(v,{cover:C.cover,onClick:y.onClick},{default:s((()=>[c(x,{class:"uni-body"},{default:s((()=>[o("这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。")])),_:1}),c(g,{slot:"actions",class:"card-actions"},{default:s((()=>[c(g,{class:"card-actions-item",onClick:a[0]||(a[0]=t=>y.actionsClick("分享"))},{default:s((()=>[c(z,{type:"redo",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("分享")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[1]||(a[1]=t=>y.actionsClick("点赞"))},{default:s((()=>[c(z,{type:"heart",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("点赞")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[2]||(a[2]=t=>y.actionsClick("评论"))},{default:s((()=>[c(z,{type:"chatbubble",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("评论")])),_:1})])),_:1})])),_:1})])),_:1},8,["cover","onClick"])])),_:1}),c(w,{title:"自定义卡片内容",type:"line"},{default:s((()=>[c(v,{title:"基础卡片","sub-title":"副标题",extra:"额外信息",padding:"10px 0",thumbnail:C.avatar},{title:s((()=>[c(A,null,{default:s((()=>[c(j,{"show-switch":!0,title:"自定义标题"})])),_:1})])),default:s((()=>[c(F,{style:{width:"100%"},src:C.cover},null,8,["src"]),c(x,{class:"uni-body uni-mt-5"},{default:s((()=>[o("卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。")])),_:1}),c(g,{slot:"actions",class:"card-actions"},{default:s((()=>[c(g,{class:"card-actions-item",onClick:a[3]||(a[3]=t=>y.actionsClick("分享"))},{default:s((()=>[c(z,{type:"redo",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("分享")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[4]||(a[4]=t=>y.actionsClick("点赞"))},{default:s((()=>[c(z,{type:"heart",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("点赞")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[5]||(a[5]=t=>y.actionsClick("评论"))},{default:s((()=>[c(z,{type:"chatbubble",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("评论")])),_:1})])),_:1})])),_:1})])),_:1},8,["thumbnail"])])),_:1}),c(w,{title:"卡片+列表",type:"line"},{default:s((()=>[c(v,{padding:"0",spacing:"0"},{cover:s((()=>[c(g,{class:"custom-cover"},{default:s((()=>[c(F,{class:"cover-image",mode:"aspectFill",src:C.cover},null,8,["src"]),c(g,{class:"cover-content"},{default:s((()=>[c(x,{class:"uni-subtitle uni-white"},{default:s((()=>[o("今日新闻热点")])),_:1})])),_:1})])),_:1})])),default:s((()=>[c(A,null,{default:s((()=>[c(j,{title:"今日新闻",showArrow:""}),c(j,{title:"今日新闻",showArrow:""})])),_:1}),c(g,{slot:"actions",class:"card-actions no-border"},{default:s((()=>[c(g,{class:"card-actions-item",onClick:a[6]||(a[6]=t=>y.actionsClick("分享"))},{default:s((()=>[c(z,{type:"redo",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("分享")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[7]||(a[7]=t=>y.actionsClick("点赞"))},{default:s((()=>[c(z,{type:"heart",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("点赞")])),_:1})])),_:1}),c(g,{class:"card-actions-item",onClick:a[8]||(a[8]=t=>y.actionsClick("评论"))},{default:s((()=>[c(z,{type:"chatbubble",size:"18",color:"#999"}),c(x,{class:"card-actions-item-text"},{default:s((()=>[o("评论")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-da0f51e7"]]);export{h as default};
