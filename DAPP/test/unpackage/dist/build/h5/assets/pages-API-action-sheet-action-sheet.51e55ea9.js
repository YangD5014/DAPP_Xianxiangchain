import{_ as t,a8 as e,s as n,T as o,o as s,c as a,w as i,i as c,a as d,b as l,r as u,d as r,e as f,v as h}from"./index-c2c57812.js";const p=t({data:()=>({title:"action-sheet",buttonRect:{}}),onReady(){this.getNodeInfo(),window.addEventListener("resize",this.getNodeInfo)},beforeDestroy(){window.removeEventListener("resize",this.getNodeInfo)},methods:{actionSheetTap(){const t=this;e({title:"标题",itemList:["item1","item2","item3","item4"],popover:{top:t.buttonRect.top+104+t.buttonRect.height,left:t.buttonRect.left+t.buttonRect.width/2},success:t=>{console.log(t.tapIndex),n({title:"点击了第"+t.tapIndex+"个选项",icon:"none"})}})},getNodeInfo(){o().select(".target").boundingClientRect().exec((t=>{const e=t[0];e&&(this.buttonRect=e)}))}}},[["render",function(t,e,n,o,p,g){const b=u(f("page-head"),r),m=h,R=c;return s(),a(R,null,{default:i((()=>[d(b,{title:p.title},null,8,["title"]),d(R,{class:"uni-padding-wrap"},{default:i((()=>[d(R,{class:"uni-btn-v"},{default:i((()=>[d(m,{class:"target",type:"default",onClick:g.actionSheetTap},{default:i((()=>[l("弹出action sheet")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{p as default};
