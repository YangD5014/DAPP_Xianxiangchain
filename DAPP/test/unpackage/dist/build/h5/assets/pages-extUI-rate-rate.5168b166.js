import{_ as e,o as a,c as l,w as t,i,a as n,b as u,f as d,r as o,e as s}from"./index-c2c57812.js";import{_ as r}from"./uni-card.bcd3f951.js";import{_ as p}from"./uni-rate.0f459ec2.js";import{_ as f}from"./uni-section.3d46fb8b.js";import"./uni-icons.1a24bd84.js";const c=e({components:{},data:()=>({rateValue:0}),onLoad(){setTimeout((()=>{this.rateValue=3}),1e3)},methods:{onChange(e){console.log("rate发生改变:"+JSON.stringify(e))}}},[["render",function(e,c,g,m,b,_){const h=d,y=o(s("uni-card"),r),v=o(s("uni-rate"),p),T=o(s("uni-section"),f),C=i;return a(),l(C,{class:"container"},{default:t((()=>[n(y,{"is-full":"","is-shadow":!1},{default:t((()=>[n(h,{class:"uni-h6"},{default:t((()=>[u("评分组件多用于商品评价打分、服务态度评价、用户满意度等场景。")])),_:1})])),_:1}),n(T,{title:"基本用法",type:"line",padding:""},{default:t((()=>[n(v,{modelValue:b.rateValue,"onUpdate:modelValue":c[0]||(c[0]=e=>b.rateValue=e),onChange:_.onChange},null,8,["modelValue","onChange"])])),_:1}),n(T,{title:"不支持滑动手势选择评分",subTitle:"设置 touchable 属性控制是否开启手势选择",type:"line",padding:""},{default:t((()=>[n(v,{touchable:!1,value:5,onChange:_.onChange},null,8,["onChange"])])),_:1}),n(T,{title:"设置尺寸大小",subTitle:"设置 size 属性控制组件大小",type:"line",padding:""},{default:t((()=>[n(v,{size:"18",value:5})])),_:1}),n(T,{title:"设置评分数",subTitle:"设置 max 属性控制组件最大星星数量",type:"line",padding:""},{default:t((()=>[n(v,{max:10,value:5})])),_:1}),n(T,{title:"设置星星间隔",subTitle:"设置 margin 属性控制星星间隔",type:"line",padding:""},{default:t((()=>[n(v,{value:4,margin:"20"})])),_:1}),n(T,{title:"设置颜色",subTitle:"使用 color 属性设置星星颜色",type:"line",padding:""},{default:t((()=>[n(v,{value:3,color:"#bbb","active-color":"red"})])),_:1}),n(T,{title:"半星",subTitle:"使用 allow-half 属性设置是否显示半星",type:"line",padding:""},{default:t((()=>[n(v,{"allow-half":"",value:3.5},null,8,["value"])])),_:1}),n(T,{title:"只读状态",subTitle:"使用 readonly 属性设置组件只读",type:"line",padding:""},{default:t((()=>[n(v,{readonly:!0,value:2})])),_:1}),n(T,{title:"禁用状态",subTitle:"使用 disabled 属性设置组件禁用",type:"line",padding:""},{default:t((()=>[n(v,{disabled:!0,disabledColor:"#ccc",value:3})])),_:1}),n(T,{title:"未选中的星星为镂空状态",subTitle:"使用 is-fill 属性设置星星镂空",type:"line",padding:""},{default:t((()=>[n(v,{value:3,"is-fill":!1})])),_:1})])),_:1})}]]);export{c as default};