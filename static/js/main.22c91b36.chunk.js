(this["webpackJsonpreact-ze"]=this["webpackJsonpreact-ze"]||[]).push([[0],{101:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){},104:function(t,e,n){},105:function(t,e,n){},107:function(t,e,n){},108:function(t,e,n){},109:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),s=n(13),l=n(33),i=n(66),u={},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_ADDRESS":return Object(i.a)({},e.Address);default:return t}},p=n(38),m=[],v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_CATEGORIES":return Object(p.a)(e.Categories);default:return t}},g=[],f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_PRODUCTS":return Object(p.a)(e.Products);default:return t}},h=Object(l.b)({Address:d,Categories:v,Products:f}),E=Object(l.c)(h),b=n(62),y=n(25),w=n(10),S=n.n(w),O=n(21),j=n(140),C=n(142),x=n(141),N=n(42),A=n.n(N),I=n(60),P=n.n(I),T=n(35),_=n.n(T),k=_.a.create({baseURL:"https://api.opencagedata.com/geocode/v1/json"});k.getAddressParams=function(t){var e,n;return S.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e={q:t,key:"d75c8fb7f8d74e039afd3ed148012678"},a.next=3,S.a.awrap(k.get("",{params:e}));case 3:return n=a.sent,a.abrupt("return",n.data);case 5:case"end":return a.stop()}}))};var D=k,$=function(t){return{type:"SET_ADDRESS",Address:t.Address}};n(99);function R(){var t=Object(a.useState)(""),e=Object(O.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)([]),l=Object(O.a)(o,2),i=l[0],u=l[1],d=Object(a.useState)(0),p=Object(O.a)(d,2),m=p[0],v=p[1],g=Object(a.useState)(!1),f=Object(O.a)(g,2),h=f[0],E=f[1],b=Object(s.b)(),y=function(){var t,e,a;return S.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,E(!0),r.next=4,S.a.awrap(D.getAddressParams(n));case 4:t=r.sent,e=t.results,a=t.rate,u(e),v(a.remaining),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.error(r.t0);case 14:return r.prev=14,E(!1),r.finish(14);case 17:case"end":return r.stop()}}),null,null,[[0,11,14,17]])};return r.a.createElement("div",{className:"search-address"},r.a.createElement("div",{className:"search"},r.a.createElement(j.a,{id:"outlined-basic",placeholder:"Insira o endere\xe7o e n\xfamero",variant:"outlined",value:n,onChange:function(t){c(t.target.value)},InputProps:{startAdornment:r.a.createElement(C.a,{position:"start"},r.a.createElement(A.a,null))},onKeyPress:function(t){"Enter"===t.key&&y()}}),r.a.createElement(x.a,{onClick:y,variant:"contained",color:"primary",disabled:h},r.a.createElement(P.a,null)," ",m?r.a.createElement(r.a.Fragment,null,"(",m,")"):null)),i.map((function(t){return r.a.createElement("div",{className:"address-info",onClick:function(){b($({Address:t}))},key:t.annotations.geohash},r.a.createElement(A.a,{className:"address-info-icon"}),r.a.createElement("span",{className:"address-description"},t.formatted))})))}var q=function(t){return{type:"SET_PRODUCTS",Products:t.Products}},z=function(t){return{type:"SET_CATEGORIES",Categories:t.Categories}},U="query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {\n\tpocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {\n\t\t__typename\n\t\tid\n\t\tstatus\n\t\ttradingName\n\t\tofficialName\n\t\tdeliveryTypes {\n\t\t\t__typename\n\t\t\tpocDeliveryTypeId\n\t\t\tdeliveryTypeId\n\t\t\tprice\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t\tactive\n\t\t}\n\t\tpaymentMethods {\n\t\t\t__typename\n\t\t\tpocPaymentMethodId\n\t\t\tpaymentMethodId\n\t\t\tactive\n\t\t\ttitle\n\t\t\tsubtitle\n\t\t}\n\t\tpocWorkDay {\n\t\t\t__typename\n\t\t\tweekDay\n\t\t\tactive\n\t\t\tworkingInterval {\n\t\t\t\t__typename\n\t\t\t\topeningTime\n\t\t\t\tclosingTime\n\t\t\t}\n\t\t}\n\t\taddress {\n\t\t\t__typename\n\t\t\taddress1\n\t\t\taddress2\n\t\t\tnumber\n\t\t\tcity\n\t\t\tprovince\n\t\t\tzip\n\t\t\tcoordinates\n\t\t}\n\t\tphone {\n\t\t__typename\n\t\tphoneNumber\n\t\t}\n\t}\n}",F="query poc($id: ID!, $categoryId: Int, $search: String){\n\tpoc(id: $id) {\n\t  id\n\t  products(categoryId: $categoryId, search: $search) {\n\t\tid\n\t\ttitle\n\t\trgb\n\t\timages {\n\t\t  url\n\t\t}\n\t\tproductVariants {\n\t\t  availableDate\n\t\t  productVariantId\n\t\t  price\n\t\t  inventoryItemId\n\t\t  shortDescription\n\t\t  title\n\t\t  published\n\t\t  volume\n\t\t  volumeUnit\n\t\t  description\n\t\t  subtitle\n\t\t  components {\n\t\t\tid\n\t\t\tproductVariantId\n\t\t\tproductVariant {\n\t\t\t  id\n\t\t\t  title\n\t\t\t  description\n\t\t\t  shortDescription\n\t\t\t}\n\t\t  }\n\t\t}\n\t  }\n\t}\n  }",M="query allCategoriesSearch {\n\tallCategory{\n\t  title\n\t  id\n\t}\n  }\n",V=_.a.create({baseURL:"https://api.code-challenge.ze.delivery/public/graphql"});V.getAddress=function(){var t,e,n,a,r,c=arguments;return S.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"NEAREST",e=c.length>1&&void 0!==c[1]?c[1]:"-23.632919",n=c.length>2&&void 0!==c[2]?c[2]:"-46.699453",a=c.length>3&&void 0!==c[3]?c[3]:"2017-08-01T20:00:00.000Z",o.prev=4,o.next=7,S.a.awrap(V.post("",{query:U,variables:{algorithm:t,lat:e,long:n,now:a}}));case 7:return r=o.sent,o.abrupt("return",r.data);case 11:throw o.prev=11,o.t0=o.catch(4),console.error(o.t0),o.t0;case 15:case"end":return o.stop()}}),null,null,[[4,11]])},V.getProducts=function(){var t,e,n,a,r=arguments;return S.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"532",e=r.length>1&&void 0!==r[1]?r[1]:"",n=r.length>2&&void 0!==r[2]?r[2]:null,c.prev=3,c.next=6,S.a.awrap(V.post("",{query:F,variables:{id:t,search:e,categoryId:n}}));case 6:return a=c.sent,c.abrupt("return",a.data);case 10:throw c.prev=10,c.t0=c.catch(3),console.error(c.t0),c.t0;case 14:case"end":return c.stop()}}),null,null,[[3,10]])},V.getAllCategoriesSearch=function(){var t,e,n,a,r,c=arguments;return S.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"NEAREST",e=c.length>1&&void 0!==c[1]?c[1]:"-23.632919",n=c.length>2&&void 0!==c[2]?c[2]:"-46.699453",a=c.length>3&&void 0!==c[3]?c[3]:"2017-08-01T20:00:00.000Z",o.prev=4,o.next=7,S.a.awrap(V.post("",{query:M,variables:{algorithm:t,lat:e,long:n,now:a}}));case 7:return r=o.sent,o.abrupt("return",r.data);case 11:throw o.prev=11,o.t0=o.catch(4),console.error(o.t0),o.t0;case 15:case"end":return o.stop()}}),null,null,[[4,11]])};var G=V,J=n(61),L=n.n(J);n(101);function Z(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:L.a,alt:"Carregando"}),"Carregando ...")}n(102);function B(t){var e=t.Category;return r.a.createElement("div",null,e.title)}n(103);function K(){var t=Object(s.c)((function(t){return t.Categories})),e=Object(a.useState)(!1),n=Object(O.a)(e,2),c=n[0],o=n[1],l=t&&t.length>0,i=Object(s.b)();return Object(a.useEffect)((function(){!function(){var t;S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,S.a.awrap(G.getAllCategoriesSearch());case 4:t=e.sent,i(z({Categories:t.data.allCategory})),console.log("resultCategoriesSearch",t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),null,null,[[0,9,12,15]])}()}),[i]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(Z,null):null,l?t.map((function(t){return r.a.createElement("div",{key:t.id,onClick:function(){return function(t){var e;return S.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,S.a.awrap(G.getProducts("532","",t.id));case 3:e=n.sent,i(q({Products:e.data.poc.products})),console.log("new",e.data.poc.products),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),null,null,[[0,8]])}(t)}},r.a.createElement(B,{Category:t})," ")})):null)}n(104);function W(t){var e=t.Product;return r.a.createElement("div",null,e.title)}function H(){var t=Object(s.c)((function(t){return t.Products})),e=Object(a.useState)(!1),n=Object(O.a)(e,2),c=n[0],o=n[1],l=t&&t.length>0,i=Object(s.b)();return Object(a.useEffect)((function(){!function(){var t;S.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o(!0),e.next=4,S.a.awrap(G.getProducts());case 4:t=e.sent,i(q({Products:t.data.poc.products})),console.log("resultProducts",t.data.poc.products),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:return e.prev=12,o(!1),e.finish(12);case 15:case"end":return e.stop()}}),null,null,[[0,9,12,15]])}()}),[i]),r.a.createElement(r.a.Fragment,null,c?r.a.createElement(Z,null):null,r.a.createElement(K,null),l?t.map((function(t){return r.a.createElement(W,{key:t.id,Product:t})})):null)}n(105);function Q(){var t=Object(s.c)((function(t){return t.Address}));return r.a.createElement("div",{className:"home"},t&&t.geometry?r.a.createElement(H,null):r.a.createElement(R,null))}function X(){return r.a.createElement(b.a,{basename:"/react-ze"},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/",component:Q})))}var Y=n(65),tt=n.n(Y),et=n(64),nt=n.n(et);n(107);function at(){var t=Object(s.c)((function(t){return t.Address})),e=Object(s.b)();return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:nt.a,alt:"ze logo",className:"logo"}),t&&t.geometry?r.a.createElement("div",{className:"address"},r.a.createElement("div",{className:"content-address"},r.a.createElement("span",{className:"address-title"},"Receber agora em:"),r.a.createElement("span",{className:"address-info"},t.formatted)),r.a.createElement(tt.a,{className:"delete-address",onClick:function(){e($({Address:{}}))}})):null))}n(108);o.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{store:E},r.a.createElement("div",{className:"app"},r.a.createElement(at,null),r.a.createElement(X,null),r.a.createElement("div",null,"Footer")))}),null),document.getElementById("root"))},61:function(t,e,n){t.exports=n.p+"static/media/loading.f31331d3.gif"},64:function(t,e,n){t.exports=n.p+"static/media/logo.8df94341.png"},71:function(t,e,n){t.exports=n(109)},99:function(t,e,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.22c91b36.chunk.js.map