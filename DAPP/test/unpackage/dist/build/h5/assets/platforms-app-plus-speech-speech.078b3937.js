import{_ as e,o as a,c as s,w as n,i as l,a as t,b as o,r as i,d as u,e as c,Q as r,v as d}from"./index-c2c57812.js";import"./permission.641c2388.js";const g=e({data:()=>({title:"speech",value:""}),onUnload(){this.value=""},methods:{async startRecognize(){var e={},a=this;e.engine="baidu",a.value="",plus.speech.startRecognize(e,(function(e){console.log(e),a.value+=e}),(function(e){console.log("语音识别失败："+e.message)}))},async startRecognizeEnglish(){var e={},a=this;e.engine="baidu",e.lang="en-us",a.value="",plus.speech.startRecognize(e,(function(e){console.log(e),a.value+=e}),(function(e){console.log("语音识别失败："+e.message)}))}}},[["render",function(e,g,p,m,v,f){const h=i(c("page-head"),u),_=r,b=l,z=d;return a(),s(b,null,{default:n((()=>[t(h,{title:v.title},null,8,["title"]),t(b,{class:"uni-padding-wrap uni-common-mt"},{default:n((()=>[t(b,{class:"uni-textarea"},{default:n((()=>[t(_,{value:v.value,placeholder:"语音识别内容展示区域",disabled:""},null,8,["value"])])),_:1}),t(b,{class:"uni-common-mt uni-btn-v"},{default:n((()=>[t(z,{type:"primary",onClick:f.startRecognize},{default:n((()=>[o("开始语音识别")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}]]);export{g as default};
