import{_ as e,o as l,c as i,w as a,a as t,L as r,b as u,a1 as h,z as c,A as s,F as n,m as p,i as k,P as o,O as d,t as V,bf as m,r as g,d as f,e as v,aX as y}from"./index-c2c57812.js";const C=e({components:{mpvuePicker:e({data:()=>({pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}),props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:()=>[]},pickerValueDefault:{type:Array,default:()=>[]},deepLength:{type:Number,default:2},themeColor:String},watch:{pickerValueArray(e,l){this.pickerValueArrayChange=!0},mode(e,l){this.modeChange=!0},pickerValueArray(e){this.initPicker(e)}},methods:{initPicker(e){let l=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;let e=[],l=[];for(let i=0;i<24;i++)e.push({value:i,label:i>9?`${i} 时`:`0${i} 时`});for(let i=0;i<60;i++)l.push({value:i,label:i>9?`${i} 分`:`0${i} 分`});this.pickerValueHour=e,this.pickerValueMinute=l}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){let e=[],i=[];for(let a=0,t=l.length;a<t;a++)e.push(l[a]);if(2===this.pickerValueDefault.length){let e=this.pickerValueDefault[0];for(let a=0,t=l[e].children.length;a<t;a++)i.push(l[e].children[a])}else for(let a=0,t=l[0].children.length;a<t;a++)i.push(l[0].children[a]);this.pickerValueMulTwoOne=e,this.pickerValueMulTwoTwo=i}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){let e=[],i=[],a=[];for(let t=0,r=l.length;t<r;t++)e.push(l[t]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){let e=this.pickerValueDefault[0];for(let a=0,r=l[e].children.length;a<r;a++)i.push(l[e].children[a]);let t=this.pickerValueDefault[1];for(let i=0,r=l[e].children[t].children.length;i<r;i++)a.push(l[e].children[t].children[i])}this.pickerValueMulThreeOne=e,this.pickerValueMulThreeTwo=i,this.pickerValueMulThreeThree=a}},show(){setTimeout((()=>{this.pickerValueArrayChange||this.modeChange?(this.initPicker(this.pickerValueArray),this.showPicker=!0,this.pickerValueArrayChange=!1,this.modeChange=!1):this.showPicker=!0}),0)},maskClick(){this.pickerCancel()},pickerCancel(){this.showPicker=!1,this._initPickerVale();let e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm(e){this.showPicker=!1,this._initPickerVale();let l={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",l)},showPickerView(){this.showPicker=!0},pickerChange(e){console.log(11111111,e),this.pickerValue=e.detail.value;let l={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",l)},pickerChangeMul(e){if(2===this.deepLength){let l=this.pickerValueArray,i=e.detail.value;if(i[0]!==this.pickerValue[0]){let e=[];for(let a=0,t=l[i[0]].children.length;a<t;a++)e.push(l[i[0]].children[a]);this.pickerValueMulTwoTwo=e,i[1]=0}this.pickerValue=i}else if(3===this.deepLength){let l=this.pickerValueArray,i=e.detail.value,a=[],t=[];if(i[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(let e=0,t=l[i[0]].children.length;e<t;e++)a.push(l[i[0]].children[e]);for(let e=0,a=l[i[0]].children[0].children.length;e<a;e++)t.push(l[i[0]].children[0].children[e]);i[1]=0,i[2]=0,this.pickerValueMulThreeTwo=a,this.pickerValueMulThreeThree=t}else if(i[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],a=this.pickerValueMulThreeTwo;for(let e=0,a=l[i[0]].children[i[1]].children.length;e<a;e++)t.push(l[i[0]].children[i[1]].children[e]);i[2]=0,this.pickerValueMulThreeThree=t}this.pickerValue=i}let l={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",l)},_getPickerLabelAndValue(e,l){let i,a=[];if("selector"===l)i=this.pickerValueSingleArray[e].label,a.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===l)i=`${this.pickerValueHour[e[0]].label}-${this.pickerValueMinute[e[1]].label}`,a.push(this.pickerValueHour[e[0]].value),a.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===l)for(let t=0;t<e.length;t++)t>0?i+=this.pickerValueMulArray[t][e[t]].label+(t===e.length-1?"":"-"):i=this.pickerValueMulArray[t][e[t]].label+"-",a.push(this.pickerValueMulArray[t][e[t]].value);else"multiLinkageSelector"===l&&(i=2===this.deepLength?`${this.pickerValueMulTwoOne[e[0]].label}-${this.pickerValueMulTwoTwo[e[1]].label}`:`${this.pickerValueMulThreeOne[e[0]].label}-${this.pickerValueMulThreeTwo[e[1]].label}-${this.pickerValueMulThreeThree[e[2]].label}`,2===this.deepLength?(a.push(this.pickerValueMulTwoOne[e[0]].value),a.push(this.pickerValueMulTwoTwo[e[1]].value)):(a.push(this.pickerValueMulThreeOne[e[0]].value),a.push(this.pickerValueMulThreeTwo[e[1]].value),a.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:i,value:a}},_initPickerVale(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}},[["render",function(e,m,g,f,v,y){const C=k,T=o,_=d;return l(),i(C,{class:"mpvue-picker"},{default:a((()=>[t(C,{class:r({pickerMask:v.showPicker}),onClick:y.maskClick,catchtouchmove:"true"},null,8,["class","onClick"]),t(C,{class:r(["mpvue-picker-content",{"mpvue-picker-view-show":v.showPicker}])},{default:a((()=>[t(C,{class:"mpvue-picker__hd",catchtouchmove:"true"},{default:a((()=>[t(C,{class:"mpvue-picker__action",onClick:y.pickerCancel},{default:a((()=>[u("取消")])),_:1},8,["onClick"]),t(C,{class:"mpvue-picker__action",style:h({color:g.themeColor}),onClick:y.pickerConfirm},{default:a((()=>[u("确定")])),_:1},8,["style","onClick"])])),_:1}),"selector"===g.mode&&v.pickerValueSingleArray.length>0?(l(),i(_,{key:0,"indicator-style":"height: 40px;",class:"mpvue-picker-view",value:v.pickerValue,onChange:y.pickerChange},{default:a((()=>[t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueSingleArray,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["value","onChange"])):p("",!0),"timeSelector"===g.mode?(l(),i(_,{key:1,"indicator-style":"height: 40px;",class:"mpvue-picker-view",value:v.pickerValue,onChange:y.pickerChange},{default:a((()=>[t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueHour,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1}),t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMinute,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["value","onChange"])):p("",!0),"multiSelector"===g.mode?(l(),i(_,{key:2,"indicator-style":"height: 40px;",class:"mpvue-picker-view",value:v.pickerValue,onChange:y.pickerChange},{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulArray.length,((e,t)=>(l(),i(T,{key:t},{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulArray[e],((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:2},1024)))),128))])),_:1},8,["value","onChange"])):p("",!0),"multiLinkageSelector"===g.mode&&2===g.deepLength?(l(),i(_,{key:3,"indicator-style":"height: 40px;",class:"mpvue-picker-view",value:v.pickerValue,onChange:y.pickerChangeMul},{default:a((()=>[t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulTwoOne,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1}),t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulTwoTwo,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["value","onChange"])):p("",!0),"multiLinkageSelector"===g.mode&&3===g.deepLength?(l(),i(_,{key:4,"indicator-style":"height: 40px;",class:"mpvue-picker-view",value:v.pickerValue,onChange:y.pickerChangeMul},{default:a((()=>[t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulThreeOne,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1}),t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulThreeTwo,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1}),t(T,null,{default:a((()=>[(l(!0),c(n,null,s(v.pickerValueMulThreeThree,((e,t)=>(l(),i(C,{class:"picker-item",key:t},{default:a((()=>[u(V(e.label),1)])),_:2},1024)))),128))])),_:1})])),_:1},8,["value","onChange"])):p("",!0)])),_:1},8,["class"])])),_:1})}],["__scopeId","data-v-c62f00a2"]])},data:()=>({title:"nav-city-dropdown",pickerValueArray:[{label:"北京市",value:11e4},{label:"天津市",value:12e4},{label:"广州市",value:440100},{label:"深圳市",value:440300}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0],index:0}),onReady(){this.setStyle(0,"北京市")},methods:{onCancel(e){console.log(e)},showSinglePicker(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm(e){console.log(e.label),this.setStyle(0,e.label)},setStyle(e,l){m(),l.length>3&&(l=l.substr(0,3)+"...");document.getElementsByClassName("uni-btn-icon")[e].innerText=l}},onBackPress(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},onNavigationBarButtonTap(e){0===e.index&&this.showSinglePicker()}},[["render",function(e,r,h,c,s,n){const p=g(v("page-head"),f),o=k,d=y("mpvue-picker");return l(),i(o,{class:"mpvue-picker"},{default:a((()=>[t(p,{title:s.title},null,8,["title"]),t(o,{class:"uni-padding-wrap uni-common-mt"},{default:a((()=>[t(o,{class:"uni-title"},{default:a((()=>[u(" 说明 : ")])),_:1}),t(o,{class:"uni-helllo-text"},{default:a((()=>[t(o,null,{default:a((()=>[u(" 在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。 ")])),_:1})])),_:1})])),_:1}),t(d,{themeColor:s.themeColor,ref:"mpvuePicker",mode:s.mode,deepLength:s.deepLength,pickerValueDefault:s.pickerValueDefault,onOnConfirm:n.onConfirm,onOnCancel:n.onCancel,pickerValueArray:s.pickerValueArray},null,8,["themeColor","mode","deepLength","pickerValueDefault","onOnConfirm","onOnCancel","pickerValueArray"])])),_:1})}]]);export{C as default};
