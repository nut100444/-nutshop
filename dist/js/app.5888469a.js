(function(t){function e(e){for(var r,c,i=e[0],l=e[1],s=e[2],u=0,b=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(b.length)b.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,c=1;c<a.length;c++){var l=a[c];0!==o[l]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e7ded363"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=o[t]=[e,r]}));e.push(a[2]=r);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(t);var s=new Error;n=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",s.name="ChunkLoadError",s.type=r,s.request=n,a[1](s)}o[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var f=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("router-link",{attrs:{to:"/"}},[a("b-icon",{staticStyle:{width:"30px",height:"30px",color:"white"},attrs:{icon:"cart2"}})],1),a("b-navbar-brand",{attrs:{href:"#"}},[t._v("arifootballstore")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("router-link",{staticClass:"col-5",staticStyle:{color:"white"},attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"col-5",staticStyle:{color:"white"},attrs:{to:"/about"}},[t._v("About")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form"),a("router-link",{staticClass:"col-7",attrs:{to:"/about"}},[a("b-button",{attrs:{pill:"",variant:"success"},on:{click:function(e){return t.Submit()}}},[t._v(" ยืนยัน ")])],1),a("b-button",{attrs:{pill:"",variant:"danger"},on:{click:function(e){return t.Clear()}}},[t._v(" ยกเลิก ")])],1)],1)],1)],1),a("router-view",{attrs:{data:t.data,Total:t.Total},on:{Order:t.Sorder}})],1)},n=[],c=a("5530"),i=a("2f62"),l=r["default"].extend({computed:Object(c["a"])({},Object(i["c"])(["Clear","Submit"]))}),s=l,u=(a("034f"),a("2877")),f=Object(u["a"])(s,o,n,!1,null,null,null),b=f.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",[a("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"250"}},[a("b-carousel-slide",{staticStyle:{height:"30rem"},attrs:{"img-src":"https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/BLACKPACK-HP%20%281%29.jpg"}}),a("b-carousel-slide",{staticStyle:{height:"30rem"},attrs:{"img-src":"https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/COPA%20SENSE%20HP.jpg"}}),a("b-carousel-slide",{staticStyle:{height:"30rem"},attrs:{"img-src":"https://s3.ap-southeast-1.amazonaws.com/store-front.arifootballstore.com/arifootball/cms/media/SPECTRUM%20-HP.jpg"}})],1)],1),a("div",{staticClass:"row"},t._l(t.Menu,(function(e,r){return a("HelloWorld",{key:r,staticClass:"col-3",attrs:{img:e.img,name:e.name,price:e.price,index:r},on:{Order:t.menuorder}})})),1)])},m=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),a("br"),a("div",[a("b-card",[a("b-img",{staticStyle:{width:"250px",height:"20rem"},attrs:{src:t.img}}),a("h5",[t._v(t._s(t.name))]),a("b-card-text",[t._v(" "+t._s(t.price)+" บาท ")]),a("div",[a("b-form-spinbutton",{attrs:{id:"sb-inline",inline:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("br"),a("br")],1),a("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:function(e){return t.Order(t.value,t.index)}}},[a("b-icon",{attrs:{icon:"cart4"}}),t._v(" เพิ่มไปยังรถเข็น ")],1)],1)],1)])},g=[],h=(a("a9e3"),{name:"HelloWorld",props:{img:String,name:String,price:Number,index:Number},data:function(){return{value:1}},computed:Object(c["a"])({},Object(i["b"])(["Order"]))}),v=h,E=(a("bd59"),Object(u["a"])(v,_,g,!1,null,"33e5d2ef",null)),O=E.exports,w={name:"Home",components:{HelloWorld:O},computed:Object(c["a"])({},Object(i["b"])(["Menu","ShowSelect"]))},y=w,S=Object(u["a"])(y,p,m,!1,null,null,null),A=S.exports;r["default"].use(d["a"]);var C=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new d["a"]({mode:"history",base:"/",routes:C}),R=T;a("b0c0");r["default"].use(i["a"]);var j=new i["a"].Store({state:{select:[],nun:[{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_vapor_14_elite_fg_-_bright_crimson_metallic_silver_cq7635-600__00.jpg?w=400",name:"NIKE MERCURIAL VAPOR 14 ELITE FG - BRIGHT CRIMSON/METALLIC SILVER",price:8500},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_phantom_gt_elite_fg_-_photo_blue_metallic_silver-rage_green_-_ck8439-400__00.jpg?w=400",name:"NIKE PHANTOM GT ELITE FG - PHOTO BLUE/METALLIC SILVER-RAGE GREEN",price:8500},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_legend_8_elite_fg_-_platinum_tint_rage_green_at5293-030__00.jpg?w=400",name:"NIKE TIEMPO LEGEND 8 ELITE FG - PLATINUM TINT/RAGE GREEN",price:7900},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/n/i/nike_vapor_14_elite_fg_-_black_cyber-off_noir_-_cq7635-090_00.jpg?w=400",name:"NIKE MERCURIAL VAPOR 14 ELITE FG - BLACK/CYBER-OFF NOIR",price:8500},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_copa_sense.1_fg_-_cblack_grefiv_grefiv_fw6498__00.jpg?w=400",name:"ADIDAS COPA SENSE.1 FG - CORE BLACK/GREY FIVE",price:7300},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_predator_freak_.1_l_fg_-_cblack_grefou_ftwwht_fy1028__00.jpg?w=400",name:"ADIDAS PREDATOR FREAK.1 L FG - CORE BLACK/GREY FOUR",price:7800},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_predator_freak_.1_l_fg_-_cblack_ftwwht_syello_fy0745__00.jpg?w=400",name:"ADIDAS PREDATOR FREAK.1 L FG - CORE BLACK/SOLAR YELLOW",price:7800},{img:"https://cdn.arifootballstore.com/catalog/product/cache/image/beff4985b56e3afdbeabfc89641a4582/a/d/adidas_nemeziz_.1_fg_-_cblack-cblack-cblack_fw7422__00.jpg?w=400",name:"ADIDAS NEMEZIZ .1 FG - CORE BLACK/CORE BLACK",price:7800}],s:[],data:[{}],Total:0},getters:{T:function(t){return t.Total},Menu:function(t){return t.nun},Order:function(t){return function(e,a){return t.select.push({name:t.nun[a].name,price:t.nun[a].price,value:e,Total:e*t.nun[a].price})}},ShowSelect:function(t){return t.select}},mutations:{Clear:function(t){for(var e=0;e<=t.select.length;e++)t.Total=0,t.select=[]},Submit:function(t){t.Total=0;for(var e=0;e<=t.select.length;e++)t.Total=t.Total+t.select[e].Total}},actions:{},modules:{}}),k=a("5f5b"),L=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(k["a"]),r["default"].use(L["a"]),r["default"].config.productionTip=!1,new r["default"]({router:R,store:j,render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,a){},bd59:function(t,e,a){"use strict";a("e5db")},e5db:function(t,e,a){}});
//# sourceMappingURL=app.5888469a.js.map