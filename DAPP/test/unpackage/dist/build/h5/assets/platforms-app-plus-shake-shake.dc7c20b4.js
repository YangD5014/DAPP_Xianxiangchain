import{_ as s,a4 as e,a5 as t,a6 as a,o as d,c as i,w as n,a1 as c,i as h,a as o,L as u,g as p}from"./index-c2c57812.js";const l=s({data:()=>({img:"https://web-assets.dcloud.net.cn/unidoc/zh/1.jpg",show:!1,isOpened:!1,index:1}),computed:{pageIndex(){return 1===this.index?"aff47ed0-517d-11eb-8ff1-d5dcf8779628":2===this.index?"1fc36f80-5199-11eb-a16f-5b3e54966275":3===this.index?"20a3bd60-5199-11eb-97b7-0dc4655d6e68":4===this.index?"8b872410-51a7-11eb-8a36-ebb87efcf8c0":"aff47ed0-517d-11eb-8ff1-d5dcf8779628"}},onLoad:function(){this.music=e(),this.music.src="https://web-assets.dcloud.net.cn/unidoc/zh/shake.wav";let s=null;t((e=>{Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)>20&&!this.show&&this.isOpened&&(this.music.play(),setTimeout((()=>{this.index++,this.index>4&&(this.index=1),this.img="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/"+this.pageIndex+".jpg"}),2e3),this.show=!0,s&&clearTimeout(s),s=setTimeout((()=>{s=null,this.show=!1}),600))}))},onShow(){this.isOpened=!0},onUnload(){this.show=!1,this.isOpened=!1,a(),this.music.destroy()}},[["render",function(s,e,t,a,l,f){const b=p,m=h;return d(),i(m,{class:"root",style:c({backgroundImage:"url("+l.img+")"})},{default:n((()=>[o(m,{class:u([l.show?"up":"","shake-up"])},{default:n((()=>[o(b,{mode:"aspectFit",src:"https://web-assets.dcloud.net.cn/unidoc/zh/shakeup.png"})])),_:1},8,["class"]),o(m,{class:u([l.show?"down":"","shake-down"])},{default:n((()=>[o(b,{mode:"aspectFit",src:"https://web-assets.dcloud.net.cn/unidoc/zh/shakedown.png"})])),_:1},8,["class"])])),_:1},8,["style"])}],["__scopeId","data-v-6992484c"]]);export{l as default};