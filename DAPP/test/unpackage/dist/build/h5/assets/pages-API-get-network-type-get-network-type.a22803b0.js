import{_ as e,aJ as t,U as n,o as a,c as s,w as o,i,a as l,b as c,z as u,F as r,m as d,t as p,r as m,d as k,e as y,Q as f,v as h}from"./index-c2c57812.js";const w=e({data:()=>({title:"getNetworkType",hasNetworkType:!1,networkType:"",connectedWifi:""}),onUnload:function(){this.networkType="",this.hasNetworkType=!1},methods:{getNetworkType:function(){t({success:e=>{console.log(e),this.hasNetworkType=!0,this.networkType=e.subtype||e.networkType},fail:()=>{n({content:"获取失败！",showCancel:!1})}})},clear:function(){this.hasNetworkType=!1,this.networkType="",this.connectedWifi=""}}},[["render",function(e,t,n,w,T,_){const N=m(y("page-head"),k),g=i,F=f,x=h;return a(),s(g,null,{default:o((()=>[l(N,{title:T.title},null,8,["title"]),l(g,{class:"uni-padding-wrap uni-common-mt"},{default:o((()=>[l(g,{style:{background:"#FFFFFF",padding:"40rpx"}},{default:o((()=>[l(g,{class:"uni-hello-text uni-center"},{default:o((()=>[c("网络状态")])),_:1}),!1===T.hasNetworkType?(a(),u(r,{key:0},[l(g,{class:"uni-h2 uni-center uni-common-mt"},{default:o((()=>[c("未获取")])),_:1}),l(g,{class:"uni-hello-text uni-center uni-common-mt"},{default:o((()=>[c("请点击下面按钮获取网络状态")])),_:1})],64)):d("",!0),!0===T.hasNetworkType?(a(),s(g,{key:1,class:"uni-h2 uni-center uni-common-mt"},{default:o((()=>[c(p(T.networkType),1)])),_:1})):d("",!0),!0===T.hasNetworkType&&"wifi"===T.networkType?(a(),s(g,{key:2,class:"uni-textarea uni-common-mt"},{default:o((()=>[l(F,{value:T.connectedWifi},null,8,["value"])])),_:1})):d("",!0)])),_:1}),l(g,{class:"uni-btn-v uni-common-mt"},{default:o((()=>[l(x,{type:"primary",onClick:_.getNetworkType},{default:o((()=>[c("获取设备网络状态")])),_:1},8,["onClick"]),l(x,{class:"uni-common-mt",onClick:_.clear},{default:o((()=>[c("清空")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{w as default};