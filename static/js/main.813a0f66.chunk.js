(this["webpackJsonpreact-ze"]=this["webpackJsonpreact-ze"]||[]).push([[0],{100:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},104:function(t,e,n){},105:function(t,e,n){},106:function(t,e,n){},107:function(t,e,n){},109:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),s=n.n(c),o=n(13),i=n(33),l=n(66),u={},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ADDRESS":return Object(l.a)({},e.Address);default:return t}},m=n(38),p=[],g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CATEGORIES":return Object(m.a)(e.Categories);default:return t}},f={Items:[],IsLoading:!1},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REQUEST_PRODUCTS":return Object.assign({},t,{IsLoading:!0});case"FINISH_REQUEST_PRODUCTS":return Object.assign({},t,{IsLoading:!1});case"SET_PRODUCTS":return console.log(e.Products),{Items:Object(m.a)(e.Products)};default:return t}},h=Object(i.b)({Address:d,Categories:g,Products:v}),E=Object(i.c)(h),y=n(62),b=n(25),w=n(10),x=n.n(w),S=n(21),O=n(142),I=n(145),C=n(143),N=n(42),j=n.n(N),T=n(60),_=n.n(T),P=n(35),k=n.n(P),A=k.a.create({baseURL:"https://api.opencagedata.com/geocode/v1/json"});A.getAddressParams=function(t){var e,n;return x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={q:t,key:"d75c8fb7f8d74e039afd3ed148012678"},a.next=3,x.a.awrap(A.get("",{params:e}));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))};var R=A,D=function(t){return{type:"SET_ADDRESS",Address:t.Address}};n(100);function $(){var t=Object(a.useState)(""),e=Object(S.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)([]),i=Object(S.a)(s,2),l=i[0],u=i[1],d=Object(a.useState)(0),m=Object(S.a)(d,2),p=m[0],g=m[1],f=Object(a.useState)(!1),v=Object(S.a)(f,2),h=v[0],E=v[1],y=Object(o.b)(),b=function(){var t,e,a;return x.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,E(!0),r.next=4,x.a.awrap(R.getAddressParams(n));case 4:t=r.sent,e=t.results,a=t.rate,u(e),g(a.remaining),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.error(r.t0);case 14:return r.prev=14,E(!1),r.finish(14);case 17:case"end":return r.stop()}}),null,null,[[0,11,14,17]])};return r.a.createElement("div",{className:"search-address"},r.a.createElement("div",{className:"search"},r.a.createElement(O.a,{id:"outlined-basic",placeholder:"Insira o endere\xe7o e n\xfamero",variant:"outlined",value:n,onChange:function(t){c(t.target.value)},InputProps:{startAdornment:r.a.createElement(I.a,{position:"start"},r.a.createElement(j.a,null))},onKeyPress:function(t){"Enter"===t.key&&b()}}),r.a.createElement(C.a,{onClick:b,variant:"contained",color:"primary",disabled:h},r.a.createElement(_.a,null)," ",p?r.a.createElement(r.a.Fragment,null,"(",p,")"):null)),l.map((function(t){return r.a.createElement("div",{className:"address-info",onClick:function(){y(D({Address:t}))},key:t.annotations.geohash},r.a.createElement(j.a,{className:"address-info-icon"}),r.a.createElement("span",{className:"address-description"},t.formatted))})))}var U=function(t){return{type:"SET_PRODUCTS",Products:t.Products}},q=function(){return{type:"REQUEST_PRODUCTS"}},L=function(){return{type:"FINISH_REQUEST_PRODUCTS"}},V=function(t){return{type:"SET_CATEGORIES",Categories:t.Categories}},z="query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {\n\tpocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {\n\t\t__typename\n\t\tid\n\t\tstatus\n\t\ttradingName\n\t\tofficialName\n\t\tdeliveryTypes {\n\t\t\t__typename\n\t\t\tpocDeliveryTypeId\n\t\t\tdeliveryTypeId\n\t\t\tprice\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\tactive\n\t\t}\n\t\tpaymentMethods {\n\t\t\t__typename\n\t\t\tpocPaymentMethodId\n\t\t\tpaymentMethodId\n\t\t\tactive\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t}\n\t\tpocWorkDay {\n\t\t\t__typename\n\t\t\tweekDay\n\t\t\tactive\n\t\t\tworkingInterval {\n\t\t\t\t__typename\n\t\t\t\topeningTime\n\t\t\t\tclosingTime\n\t\t\t}\n\t\t}\n\t\taddress {\n\t\t\t__typename\n\t\t\taddress1\n\t\t\taddress2\n\t\t\tnumber\n\t\t\tcity\n\t\t\tprovince\n\t\t\tzip\n\t\t\tcoordinates\n\t\t}\n\t\tphone {\n\t\t__typename\n\t\tphoneNumber\n\t\t}\n\t}\n}",F="query poc($id: ID!, $categoryId: Int, $search: String){\n\tpoc(id: $id) {\n\t  id\n\t  products(categoryId: $categoryId, search: $search) {\n\t\tid\n\t\ttitle\n\t\trgb\n\t\timages {\n\t\t  url\n\t\t}\n\t\tproductVariants {\n\t\t  availableDate\n\t\t  productVariantId\n\t\t  price\n\t\t  inventoryItemId\n\t\t  shortDescription\n\t\t  title\n\t\t  published\n\t\t  volume\n\t\t  volumeUnit\n\t\t  description\n\t\t  subtitle\n\t\t  components {\n\t\t\tid\n\t\t\tproductVariantId\n\t\t\tproductVariant {\n\t\t\t  id\n\t\t\t  title\n\t\t\t  description\n\t\t\t  shortDescription\n\t\t\t}\n\t\t  }\n\t\t}\n\t  }\n\t}\n  }",M="query allCategoriesSearch {\n\tallCategory{\n\t  title\n\t  id\n\t}\n  }\n",Q=k.a.create({baseURL:"https://api.code-challenge.ze.delivery/public/graphql"});Q.getAddress=function(){var t,e,n,a,r,c=arguments;return x.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"NEAREST",e=c.length>1&&void 0!==c[1]?c[1]:"-23.632919",n=c.length>2&&void 0!==c[2]?c[2]:"-46.699453",a=c.length>3&&void 0!==c[3]?c[3]:"2017-08-01T20:00:00.000Z",s.prev=4,s.next=7,x.a.awrap(Q.post("",{query:z,variables:{algorithm:t,lat:e,long:n,now:a}}));case 7:return r=s.sent,s.abrupt("return",r.data);case 11:throw s.prev=11,s.t0=s.catch(4),console.error(s.t0),s.t0;case 15:case"end":return s.stop()}}),null,null,[[4,11]])},Q.getProducts=function(){var t,e,n,a,r=arguments;return x.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"532",e=r.length>1&&void 0!==r[1]?r[1]:"",n=r.length>2&&void 0!==r[2]?r[2]:null,c.prev=3,c.next=6,x.a.awrap(Q.post("",{query:F,variables:{id:t,search:e,categoryId:n}}));case 6:return a=c.sent,c.abrupt("return",a.data);case 10:throw c.prev=10,c.t0=c.catch(3),console.error(c.t0),c.t0;case 14:case"end":return c.stop()}}),null,null,[[3,10]])},Q.getAllCategoriesSearch=function(){var t,e,n,a,r,c=arguments;return x.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"NEAREST",e=c.length>1&&void 0!==c[1]?c[1]:"-23.632919",n=c.length>2&&void 0!==c[2]?c[2]:"-46.699453",a=c.length>3&&void 0!==c[3]?c[3]:"2017-08-01T20:00:00.000Z",s.prev=4,s.next=7,x.a.awrap(Q.post("",{query:M,variables:{algorithm:t,lat:e,long:n,now:a}}));case 7:return r=s.sent,s.abrupt("return",r.data);case 11:throw s.prev=11,s.t0=s.catch(4),console.error(s.t0),s.t0;case 15:case"end":return s.stop()}}),null,null,[[4,11]])};var G=Q,H=n(61),J=n.n(H);n(102);function Z(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:J.a,alt:"Carregando"}),"Carregando ...")}n(103);function B(t){var e=t.Category;return r.a.createElement("div",{className:"category"},r.a.createElement("img",{className:"image",src:{Cervejas:"https://courier-images-prod.imgix.net/category/beer%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png",Destilados:"https://courier-images-prod.imgix.net/category/distilled%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png",Vinhos:"https://courier-images-prod.imgix.net/category/wine%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png","Sem \xe1lcool":"https://courier-images-prod.imgix.net/category/juice%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png",Petiscos:"https://courier-images-prod.imgix.net/category/chips%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png",Outros:"https://courier-images-prod.imgix.net/category/others%403x.png?auto=compress,format&fit=max&w=48&h=48&dpr=2&fm=png",Limpar:"https://www.freeiconspng.com/uploads/close-button-png-27.png"}[e.title],alt:e.title}),e.title)}n(104);function K(){var t=Object(o.c)((function(t){return t.Categories})),e=Object(a.useState)(!1),n=Object(S.a)(e,2),c=n[0],s=n[1],i=t&&t.length>0,l=Object(o.b)(),u=function(t){var e;return x.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,l(q()),n.next=4,x.a.awrap(G.getProducts("532","",t.id));case 4:e=n.sent,l(U({Products:e.data.poc.products})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:return n.prev=11,l(L()),n.finish(11);case 14:case"end":return n.stop()}}),null,null,[[0,8,11,14]])};return Object(a.useEffect)((function(){!function(){var t;x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,x.a.awrap(G.getAllCategoriesSearch());case 4:t=e.sent,l(V({Categories:t.data.allCategory})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,s(!1),e.finish(11);case 14:case"end":return e.stop()}}),null,null,[[0,8,11,14]])}()}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"categories"},i?t.map((function(t){return r.a.createElement("div",{key:t.id,onClick:function(){return u(t)}},r.a.createElement(B,{Category:t})," ")})):null,i?r.a.createElement("div",{onClick:function(){return u({id:null})}},r.a.createElement(B,{Category:{title:"Limpar"}})," "):null),c?r.a.createElement(Z,null):null)}n(105);function W(t){var e=t.Product,n=e.images&&e.images.length>0?e.images[0].url:null,c=e.productVariants&&e.productVariants.length>0?e.productVariants[0]:{price:"Indispon\xedvel"},s=Object(a.useState)(!0),o=Object(S.a)(s,2),i=o[0],l=o[1],u=function(){l(!i)};return r.a.createElement("div",{className:"product"},r.a.createElement("img",{src:n,onError:function(t){t.target.onerror=null,t.target.src="http://www.solaway.com.br/image/no_image.png"},alt:e.title}),r.a.createElement("p",{className:"title"},e.title),r.a.createElement("span",{className:"price"},"R$",c.price),i?r.a.createElement(C.a,{onClick:function(){return u()},className:"button"},"Adicionar"):r.a.createElement(C.a,{onClick:function(){return u()},className:"button"},"Remover"))}n(106);function X(){var t=Object(o.c)((function(t){return t.Products})),e=t.Items&&t.Items.length>0,n=Object(o.b)();return Object(a.useEffect)((function(){!function(){var t;x.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(q()),e.next=4,x.a.awrap(G.getProducts());case 4:t=e.sent,n(U({Products:t.data.poc.products})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:return e.prev=11,n(L()),e.finish(11);case 14:case"end":return e.stop()}}),null,null,[[0,8,11,14]])}()}),[n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),t&&t.IsLoading?r.a.createElement(Z,null):null,r.a.createElement("ul",{className:"products"},e?t.Items.map((function(t){return r.a.createElement("li",{key:t.id},r.a.createElement(W,{Product:t})," ")})):null))}n(107);function Y(){var t=Object(o.c)((function(t){return t.Address}));return r.a.createElement("div",{className:"home"},t&&t.geometry?r.a.createElement(X,null):r.a.createElement($,null))}function tt(){return r.a.createElement(y.a,{basename:"/react-ze"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",component:Y})))}var et=n(65),nt=n.n(et),at=n(64),rt=n.n(at);n(109);function ct(){var t=Object(o.c)((function(t){return t.Address})),e=Object(o.b)();return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:rt.a,alt:"ze logo",className:"logo"}),t&&t.geometry?r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"content-address"},r.a.createElement("span",{className:"address-title"},"Receber agora em:"),r.a.createElement("span",{className:"address-info"},t.formatted)),r.a.createElement(nt.a,{className:"delete-address",onClick:function(){e(D({Address:{}}))}})):null))}n(110);function st(){return r.a.createElement("div",{className:"footer"},"\xa9 2020 - Todos os direitos reservados.")}n(111);s.a.render(r.a.createElement((function(){return r.a.createElement(o.a,{store:E},r.a.createElement("div",{className:"app"},r.a.createElement(ct,null),r.a.createElement(tt,null),r.a.createElement(st,null)))}),null),document.getElementById("root"))},61:function(t,e,n){t.exports=n.p+"static/media/loading.f31331d3.gif"},64:function(t,e,n){t.exports=n.p+"static/media/logo.8df94341.png"},72:function(t,e,n){t.exports=n(112)}},[[72,1,2]]]);
//# sourceMappingURL=main.813a0f66.chunk.js.map