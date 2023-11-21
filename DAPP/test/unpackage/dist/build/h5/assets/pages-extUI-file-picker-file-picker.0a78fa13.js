import{bc as e,V as t,aT as i,bh as s,s as l,bi as a,_ as o,a9 as r,o as n,c as d,w as u,z as c,F as p,A as h,a1 as f,a as m,ag as y,m as g,b,aY as x,g as F,i as _,y as k,L as w,t as v,aX as S,f as T,v as I,r as P,e as $}from"./index-c2c57812.js";import{_ as L}from"./uni-card.bcd3f951.js";import{_ as C}from"./uni-section.3d46fb8b.js";const M="chooseAndUploadFile:fail";function j(e,t){return e.tempFiles.forEach(((e,i)=>{e.name||(e.name=e.path.substring(e.path.lastIndexOf("/")+1)),t&&(e.fileType=t),e.cloudPath=Date.now()+"_"+i+e.name.substring(e.name.lastIndexOf("."))})),e.tempFilePaths||(e.tempFilePaths=e.tempFiles.map((e=>e.path))),e}function E(t,i=5,s){const l=(t=JSON.parse(JSON.stringify(t))).length;let a=0,o=this;return new Promise((r=>{for(;a<i;)n();function n(){let i=a++;if(i>=l)return void(!t.find((e=>!e.url&&!e.errMsg))&&r(t));const d=t[i],u=o.files.findIndex((e=>e.uuid===d.uuid));d.url="",delete d.errMsg,e.uploadFile({filePath:d.path,cloudPath:d.cloudPath,fileType:d.fileType,onUploadProgress:e=>{e.index=u,s&&s(e)}}).then((e=>{d.url=e.fileID,d.index=u,i<l&&n()})).catch((e=>{d.errMsg=e.errMsg||e.message,d.index=u,i<l&&n()}))}}))}function O(e,{onChooseFile:t,onUploadProgress:i}){return e.then((e=>{if(t){const i=t(e);if(void 0!==i)return Promise.resolve(i).then((t=>void 0===t?e:t))}return e})).then((e=>!1===e?{errMsg:"chooseAndUploadFile:ok",tempFilePaths:[],tempFiles:[]}:e))}function U(e={type:"all"}){return"image"===e.type?O(function(e){const{count:i,sizeType:s=["original","compressed"],sourceType:l,extension:a}=e;return new Promise(((e,o)=>{t({count:i,sizeType:s,sourceType:l,extension:a,success(t){e(j(t,"image"))},fail(e){o({errMsg:e.errMsg.replace("chooseImage:fail",M)})}})}))}(e),e):"video"===e.type?O(function(e){const{camera:t,compressed:s,maxDuration:l,sourceType:a,extension:o}=e;return new Promise(((e,r)=>{i({camera:t,compressed:s,maxDuration:l,sourceType:a,extension:o,success(t){const{tempFilePath:i,duration:s,size:l,height:a,width:o}=t;e(j({errMsg:"chooseVideo:ok",tempFilePaths:[i],tempFiles:[{name:t.tempFile&&t.tempFile.name||"",path:i,size:l,type:t.tempFile&&t.tempFile.type||"",width:o,height:a,duration:s,fileType:"video",cloudPath:""}]},"video"))},fail(e){r({errMsg:e.errMsg.replace("chooseVideo:fail",M)})}})}))}(e),e):O(function(e){const{count:t,extension:i}=e;return new Promise(((e,l)=>{let a=s;if("undefined"!=typeof wx&&"function"==typeof wx.chooseMessageFile&&(a=wx.chooseMessageFile),"function"!=typeof a)return l({errMsg:M+" 请指定 type 类型，该平台仅支持选择 image 或 video。"});a({type:"all",count:t,extension:i,success(t){e(j(t))},fail(e){l({errMsg:e.errMsg.replace("chooseFile:fail",M)})}})}))}(e),e)}const V=e=>{const t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},A=e=>{if(Array.isArray(e))return e;return e.replace(/(\[|\])/g,"").split(",")},B=async(e,t="image")=>{const i=V(e.name).ext.toLowerCase();let s={name:e.name,uuid:e.uuid,extname:i||"",cloudPath:e.cloudPath,fileType:e.fileType,url:e.path||e.path,size:e.size,image:{},path:e.path,video:{}};if("image"===t){const t=await(l=e.path,new Promise(((e,t)=>{a({src:l,success(t){e(t)},fail(e){t(e)}})})));delete s.video,s.image.width=t.width,s.image.height=t.height,s.image.location=t.path}else delete s.image;var l;return s};const D=o({name:"uniFilePicker",components:{uploadImage:o({name:"uploadImage",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},limit:{type:[Number,String],default:9},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto",border:{}})},delIcon:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1}},computed:{styles(){return Object.assign({width:"auto",height:"auto",border:{}},this.imageStyles)},boxStyle(){const{width:e="auto",height:t="auto"}=this.styles;let i={};"auto"===t?"auto"!==e?(i.height=this.value2px(e),i["padding-top"]=0):i.height=0:(i.height=this.value2px(t),i["padding-top"]=0),i.width="auto"===e?"auto"!==t?this.value2px(t):"33.3%":this.value2px(e);let s="";for(let l in i)s+=`${l}:${i[l]};`;return s},borderStyle(){let{border:e}=this.styles,t={};if("boolean"==typeof e)t.border=e?"1px #eee solid":"none";else{let i=e&&e.width||1;i=this.value2px(i);let s=e&&e.radius||3;s=this.value2px(s),t={"border-width":i,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}let i="";for(let s in t)i+=`${s}:${t[s]};`;return i}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",e)},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},prviewImage(e,t){let i=[];1===Number(this.limit)&&this.disablePreview&&!this.disabled&&this.$emit("choose"),this.disablePreview||(this.filesList.forEach((e=>{i.push(e.url)})),r({urls:i,current:t}))},value2px:e=>("number"==typeof e?e+="px":-1===e.indexOf("%")&&(e=-1!==e.indexOf("px")?e:e+"px"),e)}},[["render",function(e,t,i,s,l,a){const o=F,r=_,w=k;return n(),d(r,{class:"uni-file-picker__container"},{default:u((()=>[(n(!0),c(p,null,h(i.filesList,((e,t)=>(n(),d(r,{class:"file-picker__box",key:t,style:f(a.boxStyle)},{default:u((()=>[m(r,{class:"file-picker__box-content",style:f(a.borderStyle)},{default:u((()=>[m(o,{class:"file-image",src:e.url,mode:"aspectFill",onClick:y((i=>a.prviewImage(e,t)),["stop"])},null,8,["src","onClick"]),i.delIcon&&!i.readonly?(n(),d(r,{key:0,class:"icon-del-box",onClick:y((e=>a.delFile(t)),["stop"])},{default:u((()=>[m(r,{class:"icon-del"}),m(r,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):g("",!0),e.progress&&100!==e.progress||0===e.progress?(n(),d(r,{key:1,class:"file-picker__progress"},{default:u((()=>[m(w,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):g("",!0),e.errMsg?(n(),d(r,{key:2,class:"file-picker__mask",onClick:y((i=>a.uploadFiles(e,t)),["stop"])},{default:u((()=>[b(" 点击重试 ")])),_:2},1032,["onClick"])):g("",!0)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128)),i.filesList.length<i.limit&&!i.readonly?(n(),d(r,{key:0,class:"file-picker__box",style:f(a.boxStyle)},{default:u((()=>[m(r,{class:"file-picker__box-content is-add",style:f(a.borderStyle),onClick:a.choose},{default:u((()=>[x(e.$slots,"default",{},(()=>[m(r,{class:"icon-add"}),m(r,{class:"icon-add rotate"})]),!0)])),_:3},8,["style","onClick"])])),_:3},8,["style"])):g("",!0)])),_:3})}],["__scopeId","data-v-86b162f5"]]),uploadFile:o({name:"uploadFile",emits:["uploadFiles","choose","delFile"],props:{filesList:{type:Array,default:()=>[]},delIcon:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},showType:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},readonly:{type:Boolean,default:!1}},computed:{list(){let e=[];return this.filesList.forEach((t=>{e.push(t)})),e},styles(){return Object.assign({border:!0,dividline:!0,"border-style":{}},this.listStyles)},borderStyle(){let{borderStyle:e,border:t}=this.styles,i={};if(t){let t=e&&e.width||1;t=this.value2px(t);let s=e&&e.radius||5;s=this.value2px(s),i={"border-width":t,"border-style":e&&e.style||"solid","border-color":e&&e.color||"#eee","border-radius":s}}else i.border="none";let s="";for(let l in i)s+=`${l}:${i[l]};`;return s},borderLineStyle(){let e={},{borderStyle:t}=this.styles;if(t&&t.color&&(e["border-color"]=t.color),t&&t.width){let i=t&&t.width||1,s=t&&t.style||0;"number"==typeof i?i+="px":i=i.indexOf("px")?i:i+"px",e["border-width"]=i,"number"==typeof s?s+="px":s=s.indexOf("px")?s:s+"px",e["border-top-style"]=s}let i="";for(let s in e)i+=`${s}:${e[s]};`;return i}},methods:{uploadFiles(e,t){this.$emit("uploadFiles",{item:e,index:t})},choose(){this.$emit("choose")},delFile(e){this.$emit("delFile",e)},value2px:e=>("number"==typeof e?e+="px":e=-1!==e.indexOf("px")?e:e+"px",e)}},[["render",function(e,t,i,s,l,a){const o=_,r=k;return n(),d(o,{class:"uni-file-picker__files"},{default:u((()=>[i.readonly?g("",!0):(n(),d(o,{key:0,class:"files-button",onClick:a.choose},{default:u((()=>[x(e.$slots,"default",{},void 0,!0)])),_:3},8,["onClick"])),a.list.length>0?(n(),d(o,{key:1,class:"uni-file-picker__lists is-text-box",style:f(a.borderStyle)},{default:u((()=>[(n(!0),c(p,null,h(a.list,((e,t)=>(n(),d(o,{class:w(["uni-file-picker__lists-box",{"files-border":0!==t&&a.styles.dividline}]),key:t,style:f(0!==t&&a.styles.dividline&&a.borderLineStyle)},{default:u((()=>[m(o,{class:"uni-file-picker__item"},{default:u((()=>[m(o,{class:"files__name"},{default:u((()=>[b(v(e.name),1)])),_:2},1024),i.delIcon&&!i.readonly?(n(),d(o,{key:0,class:"icon-del-box icon-files",onClick:e=>a.delFile(t)},{default:u((()=>[m(o,{class:"icon-del icon-files"}),m(o,{class:"icon-del rotate"})])),_:2},1032,["onClick"])):g("",!0)])),_:2},1024),e.progress&&100!==e.progress||0===e.progress?(n(),d(o,{key:0,class:"file-picker__progress"},{default:u((()=>[m(r,{class:"file-picker__progress-item",percent:-1===e.progress?0:e.progress,"stroke-width":"4",backgroundColor:e.errMsg?"#ff5a5f":"#EBEBEB"},null,8,["percent","backgroundColor"])])),_:2},1024)):g("",!0),"error"===e.status?(n(),d(o,{key:1,class:"file-picker__mask",onClick:y((i=>a.uploadFiles(e,t)),["stop"])},{default:u((()=>[b(" 点击重试 ")])),_:2},1032,["onClick"])):g("",!0)])),_:2},1032,["class","style"])))),128))])),_:1},8,["style"])):g("",!0)])),_:3})}],["__scopeId","data-v-5d376bd5"]])},options:{virtualHost:!0},emits:["select","success","fail","progress","delete","update:modelValue","input"],props:{modelValue:{type:[Array,Object],default:()=>[]},disabled:{type:Boolean,default:!1},disablePreview:{type:Boolean,default:!1},delIcon:{type:Boolean,default:!0},autoUpload:{type:Boolean,default:!0},limit:{type:[Number,String],default:9},mode:{type:String,default:"grid"},fileMediatype:{type:String,default:"image"},fileExtname:{type:[Array,String],default:()=>[]},title:{type:String,default:""},listStyles:{type:Object,default:()=>({border:!0,dividline:!0,borderStyle:{}})},imageStyles:{type:Object,default:()=>({width:"auto",height:"auto"})},readonly:{type:Boolean,default:!1},returnType:{type:String,default:"array"},sizeType:{type:Array,default:()=>["original","compressed"]},sourceType:{type:Array,default:()=>["album","camera"]}},data:()=>({files:[],localValue:[]}),watch:{modelValue:{handler(e,t){this.setValue(e,t)},immediate:!0}},computed:{filesList(){let e=[];return this.files.forEach((t=>{e.push(t)})),e},showType(){return"image"===this.fileMediatype?this.mode:"list"},limitLength(){return"object"===this.returnType?1:this.limit?this.limit>=9?9:this.limit:1}},created(){e.config&&e.config.provider||(this.noSpace=!0,e.chooseAndUploadFile=U),this.form=this.getForm("uniForms"),this.formItem=this.getForm("uniFormsItem"),this.form&&this.formItem&&this.formItem.name&&(this.rename=this.formItem.name,this.form.inputChildrens.push(this))},methods:{clearFiles(e){0===e||e?this.files.splice(e,1):(this.files=[],this.$nextTick((()=>{this.setEmit()}))),this.$nextTick((()=>{this.setEmit()}))},upload(){let e=[];return this.files.forEach(((t,i)=>{"ready"!==t.status&&"error"!==t.status||e.push(Object.assign({},t))})),this.uploadFiles(e)},async setValue(e,t){const i=async e=>{let t="";return t=e.fileID?e.fileID:e.url,/cloud:\/\/([\w.]+\/?)\S*/.test(t)&&(e.fileID=t,e.url=await this.getTempFileURL(t)),e.url&&(e.path=e.url),e};if("object"===this.returnType)e?await i(e):e={};else{e||(e=[]);for(let t=0;t<e.length;t++){let s=e[t];await i(s)}}this.localValue=e,this.form&&this.formItem&&!this.is_reset&&(this.is_reset=!1,this.formItem.setValue(this.localValue));let s=Object.keys(e).length>0?e:[];this.files=[].concat(s)},choose(){this.disabled||(this.files.length>=Number(this.limitLength)&&"grid"!==this.showType&&"array"===this.returnType?l({title:`您最多选择 ${this.limitLength} 个文件`,icon:"none"}):this.chooseFiles())},chooseFiles(){const t=A(this.fileExtname);e.chooseAndUploadFile({type:this.fileMediatype,compressed:!1,sizeType:this.sizeType,sourceType:this.sourceType,extension:t.length>0?t:void 0,count:this.limitLength-this.files.length,onChooseFile:this.chooseFileCallback,onUploadProgress:e=>{this.setProgress(e,e.index)}}).then((e=>{this.setSuccessAndError(e.tempFiles)})).catch((e=>{console.log("选择失败",e)}))},async chooseFileCallback(e){const t=A(this.fileExtname);(1===Number(this.limitLength)&&this.disablePreview&&!this.disabled||"object"===this.returnType)&&(this.files=[]);let{filePaths:i,files:s}=((e,t)=>{let i=[],s=[];return t&&0!==t.length?(e.tempFiles.forEach((e=>{const l=V(e.name).ext.toLowerCase();-1!==t.indexOf(l)&&(s.push(e),i.push(e.path))})),s.length!==e.tempFiles.length&&l({title:`当前选择了${e.tempFiles.length}个文件 ，${e.tempFiles.length-s.length} 个文件格式不正确`,icon:"none",duration:5e3}),{filePaths:i,files:s}):{filePaths:i,files:s}})(e,t);t&&t.length>0||(i=e.tempFilePaths,s=e.tempFiles);let a=[];for(let l=0;l<s.length&&!(this.limitLength-this.files.length<=0);l++){s[l].uuid=Date.now();let e=await B(s[l],this.fileMediatype);e.progress=0,e.status="ready",this.files.push(e),a.push({...e,file:s[l]})}this.$emit("select",{tempFiles:a,tempFilePaths:i}),e.tempFiles=s,this.autoUpload&&!this.noSpace||(e.tempFiles=[])},uploadFiles(e){return e=[].concat(e),E.call(this,e,5,(e=>{this.setProgress(e,e.index,!0)})).then((e=>(this.setSuccessAndError(e),e))).catch((e=>{console.log(e)}))},async setSuccessAndError(e,t){let i=[],s=[],l=[],a=[];for(let o=0;o<e.length;o++){const t=e[o],r=t.uuid?this.files.findIndex((e=>e.uuid===t.uuid)):t.index;if(-1===r||!this.files)break;if("request:fail"===t.errMsg)this.files[r].url=t.path,this.files[r].status="error",this.files[r].errMsg=t.errMsg,s.push(this.files[r]),a.push(this.files[r].url);else{this.files[r].errMsg="",this.files[r].fileID=t.url;/cloud:\/\/([\w.]+\/?)\S*/.test(t.url)?this.files[r].url=await this.getTempFileURL(t.url):this.files[r].url=t.url,this.files[r].status="success",this.files[r].progress+=1,i.push(this.files[r]),l.push(this.files[r].fileID)}}i.length>0&&(this.setEmit(),this.$emit("success",{tempFiles:this.backObject(i),tempFilePaths:l})),s.length>0&&this.$emit("fail",{tempFiles:this.backObject(s),tempFilePaths:a})},setProgress(e,t,i){this.files.length;const s=Math.round(100*e.loaded/e.total);let l=t;i||(l=this.files.findIndex((t=>t.uuid===e.tempFile.uuid))),-1!==l&&this.files[l]&&(this.files[l].progress=s-1,this.$emit("progress",{index:l,progress:parseInt(s),tempFile:this.files[l]}))},delFile(e){this.$emit("delete",{tempFile:this.files[e],tempFilePath:this.files[e].url}),this.files.splice(e,1),this.$nextTick((()=>{this.setEmit()}))},getFileExt(e){const t=e.lastIndexOf("."),i=e.length;return{name:e.substring(0,t),ext:e.substring(t+1,i)}},setEmit(){let e=[];"object"===this.returnType?(e=this.backObject(this.files)[0],this.localValue=e||null):(e=this.backObject(this.files),this.localValue||(this.localValue=[]),this.localValue=[...e]),this.$emit("update:modelValue",this.localValue)},backObject(e){let t=[];return e.forEach((e=>{t.push({extname:e.extname,fileType:e.fileType,image:e.image,name:e.name,path:e.path,size:e.size,fileID:e.fileID,url:e.url})})),t},async getTempFileURL(t){t={fileList:[].concat(t)};return(await e.getTempFileURL(t)).fileList[0].tempFileURL||""},getForm(e="uniForms"){let t=this.$parent,i=t.$options.name;for(;i!==e;){if(t=t.$parent,!t)return!1;i=t.$options.name}return t}}},[["render",function(e,t,i,s,l,a){const o=T,r=_,c=S("upload-image"),p=I,h=S("upload-file");return n(),d(r,{class:"uni-file-picker"},{default:u((()=>[i.title?(n(),d(r,{key:0,class:"uni-file-picker__header"},{default:u((()=>[m(o,{class:"file-title"},{default:u((()=>[b(v(i.title),1)])),_:1}),m(o,{class:"file-count"},{default:u((()=>[b(v(a.filesList.length)+"/"+v(a.limitLength),1)])),_:1})])),_:1})):g("",!0),"image"===i.fileMediatype&&"grid"===a.showType?(n(),d(c,{key:1,readonly:i.readonly,"image-styles":i.imageStyles,"files-list":a.filesList,limit:a.limitLength,disablePreview:i.disablePreview,delIcon:i.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:u((()=>[x(e.$slots,"default",{},(()=>[m(r,{class:"is-add"},{default:u((()=>[m(r,{class:"icon-add"}),m(r,{class:"icon-add rotate"})])),_:1})]),!0)])),_:3},8,["readonly","image-styles","files-list","limit","disablePreview","delIcon","onUploadFiles","onChoose","onDelFile"])):g("",!0),"image"!==i.fileMediatype||"grid"!==a.showType?(n(),d(h,{key:2,readonly:i.readonly,"list-styles":i.listStyles,"files-list":a.filesList,showType:a.showType,delIcon:i.delIcon,onUploadFiles:a.uploadFiles,onChoose:a.choose,onDelFile:a.delFile},{default:u((()=>[x(e.$slots,"default",{},(()=>[m(p,{type:"primary",size:"mini"},{default:u((()=>[b("选择文件")])),_:1})]),!0)])),_:3},8,["readonly","list-styles","files-list","showType","delIcon","onUploadFiles","onChoose","onDelFile"])):g("",!0)])),_:3})}],["__scopeId","data-v-c59319f7"]]);const z=o({data:()=>({sourceType:["album","camera"],imageStyles:{width:64,height:64,border:{radius:"50%"}},listStyles:{border:!0,dividline:!0,borderStyle:{width:1,color:"blue",style:"dashed",radius:2}},fileLists:[{url:"https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao-small.jpg",extname:"png",name:"shuijiao.png"},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",extname:"png",name:"uniapp-logo.png"},{url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg",extname:"png",name:"shuijiao.png"}]}),methods:{}},[["render",function(e,t,i,s,l,a){const o=T,r=P($("uni-card"),L),c=P($("uni-file-picker"),D),p=_,h=P($("uni-section"),C);return n(),d(p,{class:"container"},{default:u((()=>[m(r,{"is-shadow":!1,"is-full":""},{default:u((()=>[m(o,{class:"uni-h6"},{default:u((()=>[b("文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间。")])),_:1})])),_:1}),m(h,{title:"只选择图片",type:"line"},{default:u((()=>[m(p,{class:"example-body"},{default:u((()=>[m(c,{limit:"9",title:"最多选择9张图片","source-type":l.sourceType},null,8,["source-type"])])),_:1})])),_:1}),m(h,{title:"只选择视频",type:"line"},{default:u((()=>[m(p,{class:"example-body"},{default:u((()=>[m(c,{limit:"9","file-mediatype":"video",title:"最多选择9个视频","source-type":l.sourceType},null,8,["source-type"])])),_:1})])),_:1}),m(h,{title:"自定义图片和视频选择的来源",type:"line"},{default:u((()=>[m(p,{class:"example-body"},{default:u((()=>[m(c,{limit:"9",title:"从相册选图","source-type":["album"]})])),_:1}),m(p,{class:"example-body"},{default:u((()=>[m(c,{limit:"9",title:"使用相机","file-mediatype":"video","source-type":["camera"]})])),_:1})])),_:1}),m(h,{title:"选择任意文件",type:"line"},{default:u((()=>[m(p,{class:"example-body"},{default:u((()=>[m(c,{limit:"5","file-mediatype":"all",title:"最多选择5个文件"})])),_:1})])),_:1}),m(h,{title:"自定义图片大小",type:"line"},{default:u((()=>[m(p,{class:"example-body custom-image-box"},{default:u((()=>[m(o,{class:"text"},{default:u((()=>[b("选择头像")])),_:1}),m(c,{limit:"1","del-icon":!1,"disable-preview":"",imageStyles:l.imageStyles,"file-mediatype":"image"},{default:u((()=>[b("选择")])),_:1},8,["imageStyles"])])),_:1})])),_:1}),m(h,{title:"自定义图片大小",type:"line"},{default:u((()=>[m(p,{class:"example-body"},{default:u((()=>[m(c,{readonly:"",value:l.fileLists,imageStyles:l.imageStyles,"file-mediatype":"image"},null,8,["value","imageStyles"]),m(c,{readonly:"",value:l.fileLists,listStyles:l.listStyles,"file-mediatype":"all"},null,8,["value","listStyles"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-11f9826b"]]);export{z as default};
