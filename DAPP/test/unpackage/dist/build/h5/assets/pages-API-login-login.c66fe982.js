import{_ as e,X as i,a3 as n,ai as t,ao as a,ap as s,s as o,aq as r,U as c,al as l,ac as u,o as d,c as f,w as g,i as h,a as p,z as m,b as y,t as v,m as b,F as k,A as L,r as _,d as w,e as N,f as x,v as C}from"./index-c2c57812.js";const U=e({data:()=>({title:"login",providerList:[],phoneNumber:"",univerifyBtnLoading:!1}),computed:{...i(["hasLogin","isUniverifyLogin","univerifyErrorMsg"])},onLoad(){n({service:"oauth",success:e=>{this.providerList=e.provider.map((e=>{let i="";switch(e){case"weixin":i="微信登录";break;case"qq":i="QQ登录";break;case"sinaweibo":i="新浪微博登录";break;case"xiaomi":i="小米登录";break;case"alipay":i="支付宝登录";break;case"baidu":i="百度登录";break;case"jd":i="京东登录";break;case"toutiao":i="头条登录";break;case"apple":i="苹果登录";break;case"univerify":i="一键登录"}return{name:i,id:e}}))},fail:e=>{console.log("获取登录通道失败",e)}}),this.hasLogin&&this.isUniverifyLogin&&this.getPhoneNumber(t("univerifyInfo")).then((e=>{this.phoneNumber=e}))},methods:{...a(["login","setUniverifyLogin"]),...s(["getPhoneNumber"]),Toast(e,i=1e3){o(Object.assign({},e,{duration:i}))},tologin(e){"univerify"===e.id&&(this.univerifyBtnLoading=!0),r({provider:e.id,success:async i=>{console.log("login success:",i),this.Toast({title:"登录成功"}),this.login(e.id)},fail:e=>{if(console.log("login fail:",e),"30002"==e.code)return uni.closeAuthView(),void this.Toast({title:"其他登录方式"});1e3!=e.code?"30005"!=e.code?"30003"!=e.code&&c({showCancel:!1,title:"登录失败",content:JSON.stringify(e)}):c({showCancel:!1,title:"预登录失败",content:this.univerifyErrorMsg||e.errMsg}):c({title:"登录失败",content:`${e.errMsg}\n，错误码：${e.code}`,confirmText:"开通指南",cancelText:"确定",success:e=>{e.confirm&&setTimeout((()=>{plus.runtime.openWeb("https://ask.dcloud.net.cn/article/37965")}),500)}})},complete:()=>{this.univerifyBtnLoading=!1}})},loginByUniverify(e,i){this.setUniverifyLogin(!0),uni.closeAuthView();const n={provider:e,...i.authResult};this.getPhoneNumber(n).then((e=>{this.phoneNumber=e,l("univerifyInfo",n)})).catch((e=>{c({showCancel:!1,title:"手机号获取失败",content:`${e.errMsg}\n，错误码：${e.code}`}),console.error(i)}))},async loginByApple(e,i){let n,t;try{t=await uni.getUserInfo({provider:e})}catch(a){n=a}if(n){let e=n.errMsg;~e.indexOf("uni.login")&&(e="请在登录页面完成登录操作"),c({title:"获取用户信息失败",content:"错误原因"+e,showCancel:!1})}console.warn("此处使用uni-id处理苹果登录，详情参考: https://uniapp.dcloud.net.cn/uniCloud/uni-id"),u({url:"https://97fca9f2-41f6-449f-a35e-3f135d4c3875.bspapp.com/http/user-center",method:"POST",data:{action:"loginByApple",params:t.userInfo},success:e=>{console.log("uniId login success",e),0!==e.data.code?c({showCancel:!1,content:`苹果登录失败: ${JSON.stringify(e.data.msg)}`}):(l("openid",e.data.openid),l("apple_nickname",e.data.userInfo.nickname))},fail:e=>{c({content:`苹果登录失败: ${JSON.stringify(e)}`,showCancel:!1})}})}}},[["render",function(e,i,n,t,a,s){const o=_(N("page-head"),w),r=x,c=h,l=C;return d(),f(c,null,{default:g((()=>[p(o,{title:a.title},null,8,["title"]),p(c,{class:"uni-padding-wrap"},{default:g((()=>[p(c,{style:{background:"#FFF",padding:"40rpx"}},{default:g((()=>[!0===e.hasLogin?(d(),m(k,{key:0},[p(c,{class:"uni-h3 uni-center uni-common-mt"},{default:g((()=>[y("已登录 "),e.isUniverifyLogin?(d(),f(r,{key:0,style:{"font-size":"0.8em"}},{default:g((()=>[a.phoneNumber.length?(d(),m("i",{key:1},"（"+v(a.phoneNumber)+"）",1)):(d(),m("i",{key:0,class:"uni-icon_toast uni-loading"}))])),_:1})):b("",!0)])),_:1}),p(c,{class:"uni-hello-text uni-center"},{default:g((()=>[p(r,null,{default:g((()=>[y("每个账号仅需登录 1 次，\\n后续每次进入页面即可自动拉取用户信息。")])),_:1})])),_:1})],64)):b("",!0),!1===e.hasLogin?(d(),m(k,{key:1},[p(c,{class:"uni-h3 uni-center uni-common-mt"},{default:g((()=>[y("未登录")])),_:1}),p(c,{class:"uni-hello-text uni-center"},{default:g((()=>[y(" 请点击按钮登录 ")])),_:1})],64)):b("",!0)])),_:1}),p(c,{class:"uni-btn-v uni- uni-common-mt"},{default:g((()=>[(d(!0),m(k,null,L(a.providerList,((e,i)=>(d(),f(l,{type:"primary",class:"page-body-button",onClick:i=>s.tologin(e),loading:"univerify"===e.id&&a.univerifyBtnLoading,key:i},{default:g((()=>[y(v(e.name),1)])),_:2},1032,["onClick","loading"])))),128))])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-7d511e1e"]]);export{U as default};