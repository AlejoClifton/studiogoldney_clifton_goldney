(this.webpackJsonpstudiogoldney=this.webpackJsonpstudiogoldney||[]).push([[0],{40:function(e,t,c){},42:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(5),i=c.n(n),s=c(34),a=c.n(s),o=(c(40),c(21)),r=c(7),j=c(2),d=i.a.createContext(),l=function(e){var t=e.children,c=Object(n.useState)([]),i=Object(r.a)(c,2),s=i[0],a=i[1],l=Object(n.useState)(0),b=Object(r.a)(l,2),u=b[0],O=b[1],h=Object(n.useState)(0),x=Object(r.a)(h,2),m=x[0],f=x[1],v=Object(n.useState)(""),p=Object(r.a)(v,2),g=p[0],N=p[1],C=function(e){O(u+e)};return Object(j.jsx)(d.Provider,{value:{values:{itemCart:s,quantity:u,total:m,email:g},itemCart:s,addItemCart:function(e){a([].concat(Object(o.a)(s),[e])),f(m+e.oneProduct.price*e.count)},removeItemCart:function(e,t){var c=s.filter((function(t){return t.oneProduct.id===e})),n=c[0].oneProduct.price*c[0].count;a(s.filter((function(t){return t.oneProduct.id!==e}))),O(u-t),f(m-n)},clearItems:function(){a([]),O(0)},addQuantity:C,addQuantityById:function(e,t){var c=s.find((function(t){return t.oneProduct.id===e}));c.count=c.count+t,C(t)},itemById:function(e){return s.find((function(t){return t.oneProduct.id===e}))},updateEmail:function(e){N(e)}},children:t})},b=d,u=i.a.createContext(),O=function(e){var t=e.children,c=Object(n.useState)(""),i=Object(r.a)(c,2),s=i[0],a=i[1],o=Object(n.useState)(""),d=Object(r.a)(o,2),l=d[0],b=d[1];return Object(j.jsx)(u.Provider,{value:{notification:{message:s,severity:l},setNotification:function(e,t){a(t),b(e),setTimeout((function(){a(""),b("")}),2e3)}},children:t})},h=u,x=c(14),m=c(12),f=c(20),v=(c(42),function(e){var t=e.category;return Object(j.jsx)("li",{children:Object(j.jsx)(x.b,{className:"list",to:"/studiogoldney_clifton_goldney/category/".concat(t.id),children:t.name})})}),p=function(){var e=Object(n.useContext)(b).values;return Object(j.jsxs)(x.b,{to:"/studiogoldney_clifton_goldney/cart",className:"CartWidget",children:[Object(j.jsx)("i",{className:"fas fa-shopping-cart"}),Object(j.jsx)("p",{children:e.quantity})]})},g=function(e){var t=e.categories,c=Object(n.useState)(!1),i=Object(r.a)(c,2),s=i[0],a=i[1],o=Object(n.useState)("navContainer"),d=Object(r.a)(o,2),l=d[0],b=d[1];return Object(j.jsxs)("div",{className:"navBar",children:[Object(j.jsx)(x.b,{to:"/",className:"navUser",children:"Studio Goldney"}),Object(j.jsx)("ul",{className:l,children:t.map((function(e){return Object(j.jsx)(v,{category:e},e.id)}))}),Object(j.jsx)(p,{}),Object(j.jsx)("i",{onClick:function(){s?(b("navContainer"),a(!1)):(b("navContainer displayNav"),a(!0))},className:"fas fa-bars buttonMenu"})]})},N=c(13),C=c(35),y=Object(C.a)({apiKey:"AIzaSyBpgo0GgEN7Ayo9f4ghmzbBt9bIsOSeaHQ",authDomain:"studio-goldney.firebaseapp.com",projectId:"studio-goldney",storageBucket:"studio-goldney.appspot.com",messagingSenderId:"1078875871398",appId:"1:1078875871398:web:e572ff92ce82d1ee79fc67"}),k=Object(N.g)(y),I=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){Object(N.f)(Object(N.c)(k,"category")).then((function(e){var t=e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}));i(t)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsx)(g,{categories:c})})},S=(c(45),function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsx)("h1",{children:"Alejo Tom\xe1s Clifton Goldney"}),Object(j.jsx)("h2",{children:"T\xe9cnico Universario en Programaci\xf3n"})]})}),P=function(e){var t=e.product;return Object(j.jsxs)("div",{className:"ItemsProducts",children:[Object(j.jsx)("img",{src:t.img,alt:"Imagen"}),Object(j.jsxs)("h1",{children:[" ",t.name," "]}),Object(j.jsxs)("p",{className:"Price",children:["$",t.price]}),Object(j.jsx)(x.b,{to:"/studiogoldney_clifton_goldney/item/".concat(t.id),className:"linkClick",children:"ver detalle del producto"})]})},T=function(e){var t=e.products;return Object(j.jsx)("div",{className:"listProduct",children:t.map((function(e){return Object(j.jsx)(P,{product:e},e.id)}))})},_=(c(46),function(e){e.greeting,e.classItemListContainer;var t=Object(n.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(m.g)().categoryId,o=Object(n.useState)(!1),d=Object(r.a)(o,2),l=d[0],b=d[1];return Object(n.useEffect)((function(){(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===t?new N.f(Object(N.c)(k,e)).then((function(e){return e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}))})).catch((function(e){console.log(e)})):new N.f(Object(N.h)(Object(N.c)(k,e),Object(N.i)("categoryId","==",t))).then((function(e){return e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}))})).catch((function(e){console.log(e)}))})("items",a).then((function(e){s(e),0===e.length?b(!1):b(!0)})).catch((function(e){console.log(e)}))}),[a]),Object(j.jsx)("div",{className:"itemListContainer",children:l?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title",children:"Productos"}),Object(j.jsx)(T,{products:i})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Cargando..."}),Object(j.jsxs)("div",{className:"lds-facebook",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})})}),D=function(e){var t=e.getStock,c=e.getInitial,i=e.onAdd,s=Object(n.useState)(t),a=Object(r.a)(s,1)[0],o=Object(n.useState)(c),d=Object(r.a)(o,2),l=d[0],b=d[1];return Object(j.jsx)("div",{className:"itemCount",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"numbers",children:[Object(j.jsx)("i",{className:"fas fa-minus",onClick:function(){l>0&&b(l-1)}}),Object(j.jsx)("span",{children:l}),Object(j.jsx)("i",{className:"fas fa-plus",onClick:function(){l<a&&b(l+1)}})]}),Object(j.jsx)("button",{className:"buttonClick",onClick:function(){i(l)},children:"Agregar al Carrito"})]})})},B=(c(47),function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(m.g)().paramId,a=Object(n.useContext)(b),o=a.addItemCart,d=a.addQuantity,l=a.addQuantityById,u=a.itemById,O=Object(n.useContext)(h).setNotification,v=Object(n.useState)(!1),p=Object(r.a)(v,2),g=p[0],C=p[1],y=Object(n.useState)(!1),I=Object(r.a)(y,2),S=I[0],P=I[1];return Object(n.useEffect)((function(){var e,t;return(e="items",t=s,new N.e(Object(N.d)(k,e,t)).then((function(e){return Object(f.a)({id:e.id},e.data())})).catch((function(e){console.log(e)}))).then((function(e){i(e),P(!0)})).catch((function(e){console.log(e)})),function(){i()}}),[s]),Object(j.jsx)("div",{className:"itemDetailContainer",children:S?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title",children:"Producto Seleccionado"}),Object(j.jsxs)("h2",{children:[" ",c.name," "]}),Object(j.jsxs)("div",{className:"containerDetail",children:[Object(j.jsx)("img",{src:c.img,alt:"Imagen"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"span",children:"Descripcion:"})," ",c.description]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"span",children:"Precio:"})," $",c.price]}),c.stock>0?Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("span",{className:"span",children:"Stock Disponible:"})," ",c.stock]}),g?Object(j.jsxs)("div",{className:"link",children:[Object(j.jsx)("div",{children:Object(j.jsx)(x.b,{className:"linkClick",to:"/",children:"Seleccionar otro Art\xedculo"})}),Object(j.jsx)("div",{children:Object(j.jsx)(x.b,{className:"linkClick",to:"/cart",children:"Ir al Carrito"})})]}):Object(j.jsx)(D,{getStock:c.stock,onAdd:function(e){if(e>0){var t=u(c.id);t?t.count+e<=c.stock?(O("succes","\xa1Agregada la cantidad de ".concat(e," de ").concat(c.name," a tu carrito!")),l(c.id,e),C(!0)):O("error","\xa1Ingresaste m\xe1s productos del stock permitido!"):(o({oneProduct:c,count:e}),O("succes","\xa1Agregada la cantidad de ".concat(e," de ").concat(c.name," a tu carrito!")),d(e),C(!0))}else O("error","\xa1No seleccionaste ning\xfan art\xedculo de ".concat(c.name," a tu carrito!"))},getInitial:0})]}):Object(j.jsx)("p",{className:"spanBlock",children:"Stock No Disponible"})]})]})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"title",children:"Cargando..."}),Object(j.jsxs)("div",{className:"lds-facebook",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]})})}),E=function(e){var t=e.item,c=e.count,i=Object(n.useContext)(b).removeItemCart;return Object(j.jsx)("tbody",{className:"listCartBody",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{src:t.img,alt:"Imagen"})}),Object(j.jsx)("td",{children:Object(j.jsxs)("h1",{children:[" ",t.name," "]})}),Object(j.jsx)("td",{children:Object(j.jsx)("h2",{className:"Count",children:c})}),Object(j.jsx)("td",{children:Object(j.jsxs)("h2",{className:"Price",children:["$",t.price*c]})}),Object(j.jsx)("td",{children:Object(j.jsx)("i",{onClick:function(){i(t.id,c)},className:"far fa-times-circle"})})]})})},A=function(e){var t=e.items,c=e.total;return Object(j.jsxs)("table",{className:"listCartProduct",children:[Object(j.jsx)("thead",{className:"listCartHead",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Productos"}),Object(j.jsx)("th",{children:"Nombre"}),Object(j.jsx)("th",{children:"Cantidad"}),Object(j.jsx)("th",{children:"Precio"}),Object(j.jsx)("th",{})]})}),t.map((function(e){return Object(j.jsx)(E,{item:e.oneProduct,count:e.count},e.oneProduct.id)})),Object(j.jsx)("tfoot",{children:Object(j.jsxs)("tr",{className:"listCartTotal",children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:Object(j.jsx)("h2",{children:"Total:"})}),Object(j.jsx)("td",{children:Object(j.jsxs)("h2",{children:["$",c]})}),Object(j.jsx)("td",{})]})})]})},q=(c(48),function(){var e=Object(n.useContext)(b).itemCart,t=Object(n.useContext)(b),c=t.clearItems,i=t.values,s=Object(n.useContext)(h).setNotification;return Object(j.jsx)("div",{className:"containerCart",children:0!==e.length?Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"buttonCart",onClick:c,children:"Borrar todos los items"}),Object(j.jsx)(A,{items:e,total:i.total}),Object(j.jsx)(x.b,{to:"/checkout",onClick:function(){s("succes","\xa1Finalizaste tu compra! \xa1compraste ".concat(i.quantity," productos a $").concat(i.total,"!"))},children:Object(j.jsx)("button",{className:"buttonCartEnd",children:"Terminar Compra"})})]}):Object(j.jsxs)("div",{className:"listNotCart",children:[Object(j.jsx)(x.b,{to:"/",children:Object(j.jsx)("button",{className:"buttonCart",children:"Volver a la tienda"})}),Object(j.jsx)("h2",{children:"Tu carrito est\xe1 vac\xedo"}),Object(j.jsx)("h3",{children:"\xbfNo sab\xe9s qu\xe9 comprar? \xa1Miles de productos te esperan!"})]})})}),w=c(10),$=(c(49),function(){var e=Object(n.useContext)(b),t=e.itemCart,c=e.clearItems,i=e.values,s=e.updateEmail,a=Object(n.useContext)(h).setNotification,o=Object(n.useState)({nombre:"",apellido:"",telefono:"",email:""}),d=Object(r.a)(o,2),l=d[0],u=d[1],O=Object(n.useState)(!1),v=Object(r.a)(O,2),p=v[0],g=v[1],C=Object(m.f)(),y=Object(N.j)(k),I=[],S=function(e){var t=e.target,c=t.name,n=t.value;u(Object(f.a)(Object(f.a)({},l),{},Object(w.a)({},c,n)))};return Object(j.jsx)("div",{className:"checkoutContainer",children:t.length>0?Object(j.jsx)("div",{children:p?Object(j.jsx)("h1",{children:"Ser\xe1 redirigido al Dashboard"}):Object(j.jsxs)("form",{method:"post",onSubmit:function(e){e.preventDefault();var n={buyer:{nombre:l.nombre,apellido:l.apellido,phone:l.telefono,email:l.email},items:t,total:i.total,date:N.a.fromDate(new Date)};n.items.forEach((function(e){Object(N.e)(Object(N.d)(k,"items",e.oneProduct.id)).then((function(t){t.data().stock>=e.count?y.update(Object(N.d)(k,"items",t.id),{stock:t.data().stock-e.count}):I.push(Object(f.a)({id:t.id},t.data()))})).catch((function(e){console.log(e)}))})),0===I.length&&Object(N.b)(Object(N.c)(k,"orders"),n).then((function(e){var t=e.id;y.commit().then((function(){a("succes","Su orden es: "+t)}))})).catch((function(e){a("error","Error ejecutando la orden"+e)})).finally((function(){s(n.buyer.email),setTimeout((function(){C("/dashboard"),c()}),4e3),g(!0)}))},children:[Object(j.jsx)("h1",{children:"Ingresar Datos"}),Object(j.jsx)("div",{className:"containerText",children:Object(j.jsx)("input",{type:"text",placeholder:"Nombre",name:"nombre",id:"nombre",required:!0,onChange:S})}),Object(j.jsx)("div",{className:"containerText",children:Object(j.jsx)("input",{type:"text",placeholder:"Apellido",name:"apellido",id:"apellido",required:!0,onChange:S})}),Object(j.jsx)("div",{className:"containerText",children:Object(j.jsx)("input",{type:"email",placeholder:"Email",name:"email",id:"email",required:!0,onChange:S})}),Object(j.jsx)("div",{className:"containerText",children:Object(j.jsx)("input",{type:"phone",placeholder:"Tel\xe9fono",name:"telefono",id:"telefono",required:!0,onChange:S})}),Object(j.jsxs)("p",{children:["Total: $",i.total]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"Enviar"})})]})}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"No hay productos en el carrito"}),Object(j.jsx)(x.b,{to:"/",children:Object(j.jsx)("button",{className:"buttonCart",children:"Volver a la tienda"})})]})})}),F=(c(50),function(){var e=Object(n.useContext)(h),t=e.notification,c=e.setNotification;return""===t.message?null:Object(j.jsx)("div",{className:"notification",style:{color:"error"===t.severity?"red":"green"},onClick:function(){return c("succes","")},children:Object(j.jsx)("h1",{children:t.message})})}),L=(c(51),function(e){var t=e.product;return Object(j.jsxs)("div",{className:"ItemsD",children:[Object(j.jsxs)("h1",{children:["ID de Compra: ",t.id]}),Object(j.jsx)("h2",{children:t.buyer.email}),Object(j.jsx)("p",{children:"Productos:"}),t.items.length>0&&t.items.map((function(e){return Object(j.jsxs)("ul",{className:"ulItemsD",children:[Object(j.jsx)("li",{children:e.oneProduct.name}),Object(j.jsxs)("li",{children:["$",e.oneProduct.price]}),Object(j.jsxs)("li",{children:["x",e.count]})]},e.oneProduct.id)})),Object(j.jsxs)("h3",{children:["Total: $",t.total]})]})}),Q=function(e){var t=e.products;return Object(j.jsx)("div",{className:"itemsDash",children:t.map((function(e){return Object(j.jsx)(L,{product:e},e.id)}))})},V=function(){var e=Object(n.useContext)(b).values,t=Object(n.useState)([]),c=Object(r.a)(t,2),i=c[0],s=c[1],a=Object(n.useState)(!1),o=Object(r.a)(a,2),d=o[0],l=o[1];return Object(n.useEffect)((function(){var t;(t="orders",new N.f(Object(N.c)(k,t)).then((function(e){return e.docs.map((function(e){return Object(f.a)({id:e.id},e.data())}))})).catch((function(e){console.log(e)}))).then((function(t){s(t.filter((function(t){return t.buyer.email===e.email}))),0===t.length?l(!1):l(!0)})).catch((function(e){console.log(e)}))}),[e.email]),Object(j.jsx)("div",{className:"dashBoardContainer",children:""!==e.email?Object(j.jsxs)("div",{children:[d?Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title",children:"Tu Lista de Compras"}),Object(j.jsx)(Q,{products:i})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Cargando..."}),Object(j.jsxs)("div",{className:"lds-facebook",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})]}),Object(j.jsx)(x.b,{to:"/",children:Object(j.jsx)("button",{className:"buttonCart",children:"Volver a la tienda"})})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"title",children:"No compraste nada a\xfan"}),Object(j.jsx)(x.b,{to:"/",children:Object(j.jsx)("button",{className:"buttonCart",children:"Volver a la tienda"})})]})})};var z=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(O,{children:Object(j.jsx)(l,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(I,{}),Object(j.jsx)(F,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/",element:Object(j.jsx)(_,{})}),Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/category/:categoryId",element:Object(j.jsx)(_,{})}),Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/item/:paramId",element:Object(j.jsx)(B,{})}),Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/cart",element:Object(j.jsx)(q,{})}),Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/checkout",element:Object(j.jsx)($,{})}),Object(j.jsx)(m.a,{path:"/studiogoldney_clifton_goldney/dashboard",element:Object(j.jsx)(V,{})})]}),Object(j.jsx)(S,{})]})})})})},G=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),G()}},[[52,1,2]]]);
//# sourceMappingURL=main.a78ad9f4.chunk.js.map