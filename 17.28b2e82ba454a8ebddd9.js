(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{MKz1:function(t,n,e){"use strict";e.r(n),e.d(n,"DevLazyModule",function(){return y});var o=e("tyNb"),c=e("PCNd"),s=e("cPJV"),i=e.n(s),p=e("fXoL"),r=e("ByMC"),a=e("ofXK");let u=(()=>{class t{constructor(){this.now=i()(new Date,"yyyy-MM-dd HH:mm:ss")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=p.Lb({type:t,selectors:[["dev-lazy-layout"]],decls:6,vars:3,consts:[[1,"p-lg"]],template:function(t,n){1&t&&(p.Sb(0,"page-header"),p.Xb(1,"h2"),p.Pc(2),p.jc(3,"json"),p.Wb(),p.Xb(4,"div",0),p.Sb(5,"router-outlet"),p.Wb()),2&t&&(p.Db(2),p.Rc("Lazy Module, ",p.kc(3,1,n.now),""))},directives:[r.a,o.o],pipes:[a.i],encapsulation:2}),t})(),d=(()=>{class t{constructor(t){this.route=t,this.first=i()(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=i()(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("ngoninit"),this.route.params.subscribe(t=>this.id=+t.id)}_onReuseInit(){this.now=i()(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("by _onReuseInit",this.route.snapshot.url.toString())}}return t.\u0275fac=function(n){return new(n||t)(p.Rb(o.a))},t.\u0275cmp=p.Lb({type:t,selectors:[["dev-page"]],decls:11,vars:12,template:function(t,n){1&t&&(p.Xb(0,"h3"),p.Pc(1,"Lazy child component"),p.Wb(),p.Xb(2,"p"),p.Pc(3),p.jc(4,"json"),p.jc(5,"json"),p.Wb(),p.Xb(6,"p"),p.Pc(7),p.jc(8,"json"),p.Wb(),p.Pc(9),p.jc(10,"json")),2&t&&(p.Db(3),p.Sc("first: ",p.kc(4,4,n.first),"\uff0cnow: ",p.kc(5,6,n.now),""),p.Db(4),p.Rc("id: ",p.kc(8,8,n.id),""),p.Db(2),p.Rc(" page: ",p.kc(10,10,n.route.url)," "))},pipes:[a.i],encapsulation:2}),t})();const l=[{path:"",component:u,children:[{path:"",pathMatch:"full",redirectTo:"p1"},{path:"p1",component:d},{path:"p2",component:d},{path:"p3",component:d},{path:"p4",component:d},{path:"p5",component:d},{path:":id/view",component:d}]}];let y=(()=>{class t{}return t.\u0275mod=p.Pb({type:t}),t.\u0275inj=p.Ob({factory:function(n){return new(n||t)},imports:[[c.a,o.n.forChild(l)]]}),t})()}}]);