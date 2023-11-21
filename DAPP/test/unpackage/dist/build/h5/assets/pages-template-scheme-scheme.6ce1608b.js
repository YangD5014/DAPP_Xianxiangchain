import{_ as a,U as e,o as n,c as t,w as l,i,a as o,b as u,r as p,d as s,e as c,v as d,I as r,E as m,C as f,G as _,H as b}from"./index-c2c57812.js";const v=a({data:()=>({}),methods:{openBrowser(a){plus.runtime.openURL(a)},openMarket(a){var e;e="Android"==plus.os.name?"market://details?id=io.dcloud.hellouniapp":"itms-apps://itunes.apple.com/cn/app/hello-uni-app/id1417078253",void 0===a?plus.runtime.openURL(e,(function(a){console.log(a)})):"Android"==plus.os.name?plus.runtime.openURL(e,(function(a){plus.nativeUI.alert("本机没有安装应用宝")}),a):plus.nativeUI.alert("仅Android手机才支持应用宝")},openTaobao(a){plus.runtime.openURL(a,(function(a){e({content:"本机未检测到淘宝客户端，是否打开浏览器访问淘宝？",success:function(a){a.confirm&&plus.runtime.openURL("https://s.taobao.com/search?q=uni-app")}})}))},openMap(){var a="";if("Android"==plus.os.name){var e=plus.runtime.isApplicationExist({pname:"com.baidu.BaiduMap",action:"baidumap://"}),n=plus.runtime.isApplicationExist({pname:"com.autonavi.minimap",action:"androidamap://"}),t="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app",l="androidamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0";n&&e?plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"百度地图"},{title:"高德地图"}]},(function(a){switch(a.index){case 1:plus.runtime.openURL(t);break;case 2:plus.runtime.openURL(l)}})):n?plus.runtime.openURL(l):e?plus.runtime.openURL(t):(a="geo:39.96310,116.340698?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82",plus.runtime.openURL(a))}else plus.nativeUI.actionSheet({title:"选择地图应用",cancel:"取消",buttons:[{title:"Apple地图"},{title:"百度地图"},{title:"高德地图"}]},(function(e){switch(console.log("e.index: "+e.index),e.index){case 1:a="http://maps.apple.com/?q=%e6%95%b0%e5%ad%97%e5%a4%a9%e5%a0%82&ll=39.96310,116.340698&spn=0.008766,0.019441";break;case 2:a="baidumap://map/marker?location=39.968789,116.347247&title=DCloud&src=Hello%20uni-app";break;case 3:a="iosamap://viewMap?sourceApplication=Hello%20uni-app&poiname=DCloud&lat=39.9631018208&lon=116.3406135236&dev=0"}""!=a&&plus.runtime.openURL(a,(function(a){plus.nativeUI.alert("本机未安装指定的地图应用")}))}))},openQQ:function(a){plus.runtime.openURL("mqqwpa://im/chat?chat_type="+a.detail.value.qqNumType+"&uin="+a.detail.value.qqNum,(function(a){plus.nativeUI.alert("本机没有安装QQ，无法启动")}))}}},[["render",function(a,e,v,U,h,q){const Q=p(c("page-head"),s),k=d,L=i,R=r,w=m,A=f,C=_,x=b;return n(),t(L,null,{default:l((()=>[o(Q,{title:"通过scheme打开三方app示例"}),o(k,{class:"button",onClick:e[0]||(e[0]=a=>q.openBrowser("https://uniapp.dcloud.io/h5"))},{default:l((()=>[u("使用浏览器打开指定URL")])),_:1}),o(k,{class:"button",onClick:e[1]||(e[1]=a=>q.openMarket())},{default:l((()=>[u("使用应用商店打开指定App")])),_:1}),o(k,{class:"button",onClick:e[2]||(e[2]=a=>q.openMarket("com.tencent.android.qqdownloader"))},{default:l((()=>[u("强制使用应用宝打开指定App")])),_:1}),o(k,{class:"button",onClick:e[3]||(e[3]=a=>q.openTaobao("taobao://s.taobao.com/search?q=uni-app"))},{default:l((()=>[u("打开淘宝搜索页面")])),_:1}),o(k,{class:"button",onClick:e[4]||(e[4]=a=>q.openMap())},{default:l((()=>[u("打开地图并指定地点")])),_:1}),o(L,{class:"uni-divider"},{default:l((()=>[o(L,{class:"uni-divider__content"},{default:l((()=>[u("打开QQ")])),_:1}),o(L,{class:"uni-divider__line"})])),_:1}),o(L,{class:"uni-padding-wrap"},{default:l((()=>[o(x,{onSubmit:q.openQQ},{default:l((()=>[o(L,null,{default:l((()=>[o(L,{class:"uni-title"},{default:l((()=>[u("请输入聊天对象QQ号：")])),_:1}),o(L,{class:"uni-list"},{default:l((()=>[o(L,{class:"uni-list-cell"},{default:l((()=>[o(R,{class:"uni-input",name:"qqNum",type:"number"})])),_:1})])),_:1})])),_:1}),o(L,null,{default:l((()=>[o(L,{class:"uni-title"},{default:l((()=>[u("请选择QQ号类型：")])),_:1}),o(C,{class:"uni-flex",name:"qqNumType"},{default:l((()=>[o(A,null,{default:l((()=>[o(w,{value:"wpa",checked:""}),u("普通QQ号")])),_:1}),o(A,null,{default:l((()=>[o(w,{value:"crm"}),u("营销QQ号(无需加好友直接聊天)")])),_:1})])),_:1})])),_:1}),o(L,{class:"uni-btn-v uni-common-mt"},{default:l((()=>[o(k,{class:"button",formType:"submit"},{default:l((()=>[u("打开qq并到指定聊天界面")])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1})])),_:1})}],["__scopeId","data-v-6cc96ad0"]]);export{v as default};