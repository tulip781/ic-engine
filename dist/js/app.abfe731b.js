(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/ic-engine/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a={name:"App",components:{}},s=a,c=(n("034f"),n("2877")),l=Object(c["a"])(s,i,o,!1,null,null,null),u=l.exports,d=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"wrapper"}},[n("Nav"),n("ThreeTest")],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"container"}})},m=[],v=n("5a89"),b=n("34ad"),g=n("4721"),w={name:"ThreeTest",data:function(){return{camera:null,scene:null,renderer:null,controls:null,container:null,geo:null}},methods:{scaleCanvas:function(){this.camera.aspect(this.container.clientWidth,this.container.clientHeight),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.camera.updateProjectMatrix()},init:function(){var e=document.getElementById("container");this.container=e,this.camera=new v["S"](70,e.clientWidth/e.clientHeight,.25,20),this.camera.position.set(0,0,1),this.scene=new v["bb"];var t=this.scene;this.renderer=new v["pb"]({antialias:!0}),this.renderer.setClearColor(12961219),this.renderer.setSize(e.clientWidth,e.clientHeight),this.renderer.outputEncoding=v["qb"],e.appendChild(this.renderer.domElement),this.controls=new g["a"](this.camera,this.renderer.domElement),this.controls.maxDistance=1.5,this.controls.minDistance=1.3,this.controls.minAzimuthAngle=3,this.controls.maxAzimuthAngle=2,this.controls.target.set(0,0,0),this.controls.enablePan=!1,this.controls.autoRotate=!0,this.controls.autoRotateSpeed=.2,this.controls.update();var n=new v["T"](16777215,10,100);n.position.set(1,5,20),this.scene.add(n);var r=new v["T"](16777215,10,100);r.position.set(1,5,-20),this.scene.add(r);var i=new b["a"];i.load("./yo.gltf",(function(e){console.log(e),e.scene.scale.set(20,20,20),e.scene.position.y=-.25,e.scene.rotation.y=-.3,t.add(e.scene),this.geo=e.scene}),(function(e){console.log(e.loaded/e.total*100+"% loaded")}),(function(e){console.log(e),console.log("An error happened "+e)}))},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()},created:function(){window.addEventListener("resize",this.scaleCanvas)},destroyed:function(){window.removeEventListener("resize",this.scaleCanvas)}},y=w,_=(n("d728"),Object(c["a"])(y,f,m,!1,null,"3b6384fc",null)),x=_.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("h1",{staticClass:"nav-title"},[e._v("ME2 Thermodynamics Lab")]),n("div",{staticClass:"nav-button-wrapper"},[n("h1",{staticClass:"nav-button"},[e._v("explore model")]),n("h1",{staticClass:"nav-button"},[e._v("start simulation")])])])}],E={name:"Nav"},T=E,C=(n("5b49"),Object(c["a"])(T,O,j,!1,null,null,null)),P=C.exports,S={name:"Home",components:{ThreeTest:x,Nav:P}},A=S,M=(n("cccb"),Object(c["a"])(A,h,p,!1,null,null,null)),z=M.exports;r["a"].use(d["a"]);var H=[{path:"/",name:"Home",component:z,meta:{title:"ME2 thermodynamics labs",metaTags:[{name:"description",content:"The home page of our example app."}]}}],$=new d["a"]({routes:H});$.beforeEach((function(e,t,n){document.title=e.meta.title,n()}));var W=$;r["a"].config.productionTip=!1,new r["a"]({router:W,render:function(e){return e(u)}}).$mount("#app")},"58de":function(e,t,n){},"5b49":function(e,t,n){"use strict";var r=n("58de"),i=n.n(r);i.a},"5ced":function(e,t,n){},"85ec":function(e,t,n){},"87c4":function(e,t,n){},cccb:function(e,t,n){"use strict";var r=n("5ced"),i=n.n(r);i.a},d728:function(e,t,n){"use strict";var r=n("87c4"),i=n.n(r);i.a}});
//# sourceMappingURL=app.abfe731b.js.map