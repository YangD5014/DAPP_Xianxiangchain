import{bc as e,_ as t,r as a,e as l,o as s,c as i,w as d,a as n,z as r,F as o,A as h,L as c,b as u,t as p,m as g,f,i as m,S as _,aX as y,aY as v,ag as k}from"./index-c2c57812.js";import{_ as D}from"./uni-load-more.28f821b7.js";import{_ as S}from"./uni-icons.1a24bd84.js";const x={props:{localdata:{type:[Array,Object],default:()=>[]},spaceInfo:{type:Object,default:()=>({})},collection:{type:String,default:""},action:{type:String,default:""},field:{type:String,default:""},orderby:{type:String,default:""},where:{type:[String,Object],default:""},pageData:{type:String,default:"add"},pageCurrent:{type:Number,default:1},pageSize:{type:Number,default:20},getcount:{type:[Boolean,String],default:!1},getone:{type:[Boolean,String],default:!1},gettree:{type:[Boolean,String],default:!1},manual:{type:Boolean,default:!1},value:{type:[Array,String,Number],default:()=>[]},modelValue:{type:[Array,String,Number],default:()=>[]},preload:{type:Boolean,default:!1},stepSearh:{type:Boolean,default:!0},selfField:{type:String,default:""},parentField:{type:String,default:""},multiple:{type:Boolean,default:!1},map:{type:Object,default:()=>({text:"text",value:"value"})}},data(){return{loading:!1,errorMessage:"",loadMore:{contentdown:"",contentrefresh:"",contentnomore:""},dataList:[],selected:[],selectedIndex:0,page:{current:this.pageCurrent,size:this.pageSize,count:0}}},computed:{isLocaldata(){return!this.collection.length},postField(){let e=[this.field];return this.parentField&&e.push(`${this.parentField} as parent_value`),e.join(",")},dataValue(){return(Array.isArray(this.modelValue)?this.modelValue.length>0:null!==this.modelValue||void 0!==this.modelValue)?this.modelValue:this.value},hasValue(){return"number"==typeof this.dataValue||null!=this.dataValue&&this.dataValue.length>0}},created(){this.$watch((()=>{var e=[];return["pageCurrent","pageSize","spaceInfo","value","modelValue","localdata","collection","action","field","orderby","where","getont","getcount","gettree"].forEach((t=>{e.push(this[t])})),e}),((e,t)=>{for(let a=2;a<e.length&&e[a]==t[a];a++);e[0]!=t[0]&&(this.page.current=this.pageCurrent),this.page.size=this.pageSize,this.onPropsChange()})),this._treeData=[]},methods:{onPropsChange(){this._treeData=[]},getCommand(t={}){let a=e.database(this.spaceInfo);const l=t.action||this.action;l&&(a=a.action(l));const s=t.collection||this.collection;a=a.collection(s);const i=t.where||this.where;i&&Object.keys(i).length&&(a=a.where(i));const d=t.field||this.field;d&&(a=a.field(d));const n=t.orderby||this.orderby;n&&(a=a.orderBy(n));const r=void 0!==t.pageCurrent?t.pageCurrent:this.page.current,o=void 0!==t.pageSize?t.pageSize:this.page.size,h={getCount:void 0!==t.getcount?t.getcount:this.getcount,getTree:void 0!==t.gettree?t.gettree:this.gettree};return t.getTreePath&&(h.getTreePath=t.getTreePath),a=a.skip(o*(r-1)).limit(o).get(h),a},getNodeData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:this._pathWhere()}).then((t=>{this.loading=!1,this.selected=t.result.data,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},getTreePath(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,getTreePath:{startWith:`${this.selfField}=='${this.dataValue}'`}}).then((t=>{this.loading=!1;let a=[];this._extractTreePath(t.result.data,a),this.selected=a,e&&e()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},loadData(){this.isLocaldata?this._processLocalData():null==this.dataValue?this.stepSearh?this._loadNodeData((e=>{this._treeData=e,this._updateBindData()})):this._loadAllData((e=>{this._treeData=[],this._extractTree(e,this._treeData,null),this._updateBindData()})):this._loadNodeData((e=>{this._treeData=e,this._updateBindData(),this._updateSelected()}))},_loadAllData(e){this.loading||(this.loading=!0,this.getCommand({field:this.postField,gettree:!0,startwith:`${this.selfField}=='${this.dataValue}'`}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_loadNodeData(e,t){this.loading||(this.loading=!0,this.getCommand({field:this.postField,where:t||this._postWhere(),pageSize:500}).then((t=>{this.loading=!1,e(t.result.data),this.onDataChange()})).catch((e=>{this.loading=!1,this.errorMessage=e})))},_pathWhere(){let e=[],t=this._getParentNameByField();return t&&e.push(`${t} == '${this.dataValue}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_postWhere(){let e=[],t=this.selected,a=this.parentField;if(a&&e.push(`${a} == null || ${a} == ""`),t.length)for(var l=0;l<t.length-1;l++)e.push(`${a} == '${t[l].value}'`);let s=[];return this.where&&s.push(`(${this.where})`),e.length&&s.push(`(${e.join(" || ")})`),s.join(" && ")},_nodeWhere(){let e=[],t=this.selected;return t.length&&e.push(`${this.parentField} == '${t[t.length-1].value}'`),this.where?`(${this.where}) && (${e.join(" || ")})`:e.join(" || ")},_getParentNameByField(){const e=this.field.split(",");let t=null;for(let a=0;a<e.length;a++){const l=e[a].split("as");if(!(l.length<2)&&"value"===l[1].trim()){t=l[0].trim();break}}return t},_isTreeView(){return this.parentField&&this.selfField},_updateSelected(){var e=this.dataList,t=this.selected;let a=this.map.text,l=this.map.value;for(var s=0;s<t.length;s++)for(var i=t[s].value,d=e[s],n=0;n<d.length;n++){var r=d[n];if(r[l]===i){t[s].text=r[a];break}}},_updateBindData(e){const{dataList:t,hasNodes:a}=this._filterData(this._treeData,this.selected);let l=!1===this._stepSearh&&!a;return e&&(e.isleaf=l),this.dataList=t,this.selectedIndex=t.length-1,!l&&this.selected.length<t.length&&this.selected.push({value:null,text:"请选择"}),{isleaf:l,hasNodes:a}},_filterData(e,t){let a=[],l=!0;a.push(e.filter((e=>null===e.parent_value||void 0===e.parent_value||""===e.parent_value)));for(let d=0;d<t.length;d++){var s=t[d].value,i=e.filter((e=>e.parent_value===s));i.length?a.push(i):l=!1}return{dataList:a,hasNodes:l}},_extractTree(e,t,a){let l=this.map.value;for(let s=0;s<e.length;s++){let i=e[s],d={};for(let e in i)"children"!==e&&(d[e]=i[e]);null!=a&&""!==a&&(d.parent_value=a),t.push(d);let n=i.children;n&&this._extractTree(n,t,i[l])}},_extractTreePath(e,t){for(let a=0;a<e.length;a++){let l=e[a],s={};for(let e in l)"children"!==e&&(s[e]=l[e]);t.push(s);let i=l.children;i&&this._extractTreePath(i,t)}},_findNodePath(e,t,a=[]){let l=this.map.text,s=this.map.value;for(let i=0;i<t.length;i++){let d=t[i],n=d.children,r=d[l],o=d[s];if(a.push({value:o,text:r}),o===e)return a;if(n){const t=this._findNodePath(e,n,a);if(t.length)return t}a.pop()}return[]},_processLocalData(){this._treeData=[],this._extractTree(this.localdata,this._treeData);var e=this.dataValue;void 0!==e&&(Array.isArray(e)&&"object"==typeof(e=e[e.length-1])&&e[this.map.value]&&(e=e[this.map.value]),this.selected=this._findNodePath(e,this.localdata))}}};const C=t({name:"UniDataPicker",emits:["popupopened","popupclosed","nodeclick","input","change","update:modelValue"],mixins:[x],components:{DataPickerView:t({name:"UniDataPickerView",emits:["nodeclick","change","datachange","update:modelValue"],mixins:[x],props:{managedMode:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0}},data:()=>({}),created(){this.managedMode||this.$nextTick((()=>{this.load()}))},methods:{onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.isLocaldata?this.loadData():this.dataValue.length&&this.getTreePath((e=>{this.loadData()}))},handleSelect(e){this.selectedIndex=e},handleNodeClick(e,t,a){if(e.disable)return;const l=this.dataList[t][a],s=l[this.map.text],i=l[this.map.value];if(t<this.selected.length-1?(this.selected.splice(t,this.selected.length-t),this.selected.push({text:s,value:i})):t===this.selected.length-1&&this.selected.splice(t,1,{text:s,value:i}),l.isleaf)return void this.onSelectedChange(l,l.isleaf);const{isleaf:d,hasNodes:n}=this._updateBindData();(this._isTreeView()||n)&&(!this.isLocaldata||n&&!d)?d||n?this.onSelectedChange(l,!1):this._loadNodeData((e=>{e.length?(this._treeData.push(...e),this._updateBindData(l)):l.isleaf=!0,this.onSelectedChange(l,l.isleaf)}),this._nodeWhere()):this.onSelectedChange(l,!0)},updateData(e){this._treeData=e.treeData,this.selected=e.selected,this._treeData.length?this._updateBindData():this.loadData()},onDataChange(){this.$emit("datachange")},onSelectedChange(e,t){t&&this._dispatchEvent(),e&&this.$emit("nodeclick",e)},_dispatchEvent(){this.$emit("change",this.selected.slice(0))}}},[["render",function(e,t,y,v,k,S){const x=f,C=m,w=_,$=a(l("uni-load-more"),D);return s(),i(C,{class:"uni-data-pickerview"},{default:d((()=>[n(w,{class:"selected-area","scroll-x":"true","scroll-y":"false","show-scrollbar":!1},{default:d((()=>[n(C,{class:"selected-list"},{default:d((()=>[(s(!0),r(o,null,h(e.selected,((t,a)=>(s(),r(o,null,[t.text?(s(),i(C,{key:0,class:c(["selected-item",{"selected-item-active":a==e.selectedIndex,"selected-item-text-overflow":y.ellipsis}]),onClick:e=>S.handleSelect(a)},{default:d((()=>[n(x,{class:""},{default:d((()=>[u(p(t.text),1)])),_:2},1024)])),_:2},1032,["class","onClick"])):g("",!0)],64)))),256))])),_:1})])),_:1}),n(C,{class:"tab-c"},{default:d((()=>[(s(!0),r(o,null,h(e.dataList,((t,a)=>(s(),r(o,null,[a==e.selectedIndex?(s(),i(w,{class:"list",key:a,"scroll-y":!0},{default:d((()=>[(s(!0),r(o,null,h(t,((t,l)=>(s(),i(C,{class:c(["item",{"is-disabled":!!t.disable}]),onClick:e=>S.handleNodeClick(t,a,l)},{default:d((()=>[n(x,{class:"item-text item-text-overflow"},{default:d((()=>[u(p(t[e.map.text]),1)])),_:2},1024),e.selected.length>a&&t[e.map.value]==e.selected[a].value?(s(),i(C,{key:0,class:"check"})):g("",!0)])),_:2},1032,["class","onClick"])))),256))])),_:2},1024)):g("",!0)],64)))),256)),e.loading?(s(),i(C,{key:0,class:"loading-cover"},{default:d((()=>[n($,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):g("",!0),e.errorMessage?(s(),i(C,{key:1,class:"error-message"},{default:d((()=>[n(x,{class:"error-text"},{default:d((()=>[u(p(e.errorMessage),1)])),_:1})])),_:1})):g("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-f4fa1c50"]])},props:{options:{type:[Object,Array],default:()=>({})},popupTitle:{type:String,default:"请选择"},placeholder:{type:String,default:"请选择"},heightMobile:{type:String,default:""},readonly:{type:Boolean,default:!1},clearIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!0},split:{type:String,default:"/"},ellipsis:{type:Boolean,default:!0}},data:()=>({isOpened:!1,inputSelected:[]}),created(){this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this)),this.$nextTick((()=>{this.load()}))},methods:{clear(){this.inputSelected.splice(0),this._dispatchEvent([])},onPropsChange(){this._treeData=[],this.selectedIndex=0,this.load()},load(){this.readonly?this._processReadonly(this.localdata,this.dataValue):this.isLocaldata?(this.loadData(),this.inputSelected=this.selected.slice(0)):this.parentField||this.selfField||!this.hasValue?this.hasValue&&this.getTreePath((()=>{this.inputSelected=this.selected.slice(0)})):this.getNodeData((()=>{this.inputSelected=this.selected.slice(0)}))},getForm(e="uniForms"){let t=this.$parent,a=t.$options.name;for(;a!==e;){if(t=t.$parent,!t)return!1;a=t.$options.name}return t},show(){this.isOpened=!0,setTimeout((()=>{this.$refs.pickerView.updateData({treeData:this._treeData,selected:this.selected,selectedIndex:this.selectedIndex})}),200),this.$emit("popupopened")},hide(){this.isOpened=!1,this.$emit("popupclosed")},handleInput(){this.readonly||this.show()},handleClose(e){this.hide()},onnodeclick(e){this.$emit("nodeclick",e)},ondatachange(e){this._treeData=this.$refs.pickerView._treeData},onchange(e){this.hide(),this.$nextTick((()=>{this.inputSelected=e})),this._dispatchEvent(e)},_processReadonly(e,t){if(e.findIndex((e=>e.children))>-1){let e;return Array.isArray(t)?(e=t[t.length-1],"object"==typeof e&&e.value&&(e=e.value)):e=t,void(this.inputSelected=this._findNodePath(e,this.localdata))}if(!this.hasValue)return void(this.inputSelected=[]);let a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}a.length&&(this.inputSelected=a)},_filterForArray(e,t){var a=[];for(let i=0;i<t.length;i++){var l=t[i],s=e.find((e=>e.value==l));s&&a.push(s)}return a},_dispatchEvent(e){let t={};if(e.length){for(var a=new Array(e.length),l=0;l<e.length;l++)a[l]=e[l].value;t=e[e.length-1]}else t.value="";this.formItem&&this.formItem.setValue(t.value),this.$emit("input",t.value),this.$emit("update:modelValue",t.value),this.$emit("change",{detail:{value:e}})}}},[["render",function(e,t,x,C,w,$){const V=f,b=a(l("uni-load-more"),D),F=m,I=_,T=a(l("uni-icons"),S),N=y("data-picker-view");return s(),i(F,{class:"uni-data-tree"},{default:d((()=>[n(F,{class:"uni-data-tree-input",onClick:$.handleInput},{default:d((()=>[v(e.$slots,"default",{options:x.options,data:w.inputSelected,error:e.errorMessage},(()=>[n(F,{class:c(["input-value",{"input-value-border":x.border}])},{default:d((()=>[e.errorMessage?(s(),i(V,{key:0,class:"selected-area error-text"},{default:d((()=>[u(p(e.errorMessage),1)])),_:1})):e.loading&&!w.isOpened?(s(),i(F,{key:1,class:"selected-area"},{default:d((()=>[n(b,{class:"load-more",contentText:e.loadMore,status:"loading"},null,8,["contentText"])])),_:1})):w.inputSelected.length?(s(),i(I,{key:2,class:"selected-area","scroll-x":"true"},{default:d((()=>[n(F,{class:"selected-list"},{default:d((()=>[(s(!0),r(o,null,h(w.inputSelected,((e,t)=>(s(),i(F,{class:"selected-item",key:t},{default:d((()=>[n(V,{class:"text-color"},{default:d((()=>[u(p(e.text),1)])),_:2},1024),t<w.inputSelected.length-1?(s(),i(V,{key:0,class:"input-split-line"},{default:d((()=>[u(p(x.split),1)])),_:1})):g("",!0)])),_:2},1024)))),128))])),_:1})])),_:1})):(s(),i(V,{key:3,class:"selected-area placeholder"},{default:d((()=>[u(p(x.placeholder),1)])),_:1})),x.clearIcon&&!x.readonly&&w.inputSelected.length?(s(),i(F,{key:4,class:"icon-clear",onClick:k($.clear,["stop"])},{default:d((()=>[n(T,{type:"clear",color:"#c0c4cc",size:"24"})])),_:1},8,["onClick"])):g("",!0),x.clearIcon&&w.inputSelected.length||x.readonly?g("",!0):(s(),i(F,{key:5,class:"arrow-area"},{default:d((()=>[n(F,{class:"input-arrow"})])),_:1}))])),_:1},8,["class"])]),!0)])),_:3},8,["onClick"]),w.isOpened?(s(),i(F,{key:0,class:"uni-data-tree-cover",onClick:$.handleClose},null,8,["onClick"])):g("",!0),w.isOpened?(s(),i(F,{key:1,class:"uni-data-tree-dialog"},{default:d((()=>[n(F,{class:"uni-popper__arrow"}),n(F,{class:"dialog-caption"},{default:d((()=>[n(F,{class:"title-area"},{default:d((()=>[n(V,{class:"dialog-title"},{default:d((()=>[u(p(x.popupTitle),1)])),_:1})])),_:1}),n(F,{class:"dialog-close",onClick:$.handleClose},{default:d((()=>[n(F,{class:"dialog-close-plus","data-id":"close"}),n(F,{class:"dialog-close-plus dialog-close-rotate","data-id":"close"})])),_:1},8,["onClick"])])),_:1}),n(N,{class:"picker-view",ref:"pickerView",modelValue:e.dataValue,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dataValue=t),localdata:e.localdata,preload:e.preload,collection:e.collection,field:e.field,orderby:e.orderby,where:e.where,"step-searh":e.stepSearh,"self-field":e.selfField,"parent-field":e.parentField,"managed-mode":!0,map:e.map,ellipsis:x.ellipsis,onChange:$.onchange,onDatachange:$.ondatachange,onNodeclick:$.onnodeclick},null,8,["modelValue","localdata","preload","collection","field","orderby","where","step-searh","self-field","parent-field","map","ellipsis","onChange","onDatachange","onNodeclick"])])),_:1})):g("",!0)])),_:3})}],["__scopeId","data-v-fc53b656"]]);export{C as _};
