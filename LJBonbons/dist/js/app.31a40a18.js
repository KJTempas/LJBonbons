(function(t){function e(e){for(var a,o,s=e[0],d=e[1],u=e[2],c=0,m=[];c<s.length;c++)o=s[c],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var d=r[s];0!==n[d]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},n={app:0},i=[];function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=d;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"08a7":function(t,e,r){},1999:function(t,e,r){"use strict";var a=r("331d"),n=r.n(a);n.a},"29d8":function(t,e,r){"use strict";var a=r("52b8"),n=r.n(a);n.a},"2aad":function(t,e,r){},"331d":function(t,e,r){},"4ca7":function(t,e,r){},"52b8":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("OrderForm",{on:{"box-addedFromOrderForm":t.addBoxAndQuantity}}),r("OrderTable",{attrs:{boxesAndQuantities:t.boxesAndQuantities},on:{"delete-box":t.boxDeleted}}),r("Customer",{on:{"add-customer":t.addCustomer}}),r("button",{staticClass:"btn btn-warning",attrs:{id:"finalize"},on:{click:t.finalizeOrder}},[t._v("Finalize Order")]),r("Summary",{attrs:{customer:t.customer,boxesAndQuantities:t.boxesAndQuantities}})],1)},i=[],o=(r("4de4"),r("a15b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"jumbotron"},[r("span",{attrs:{id:"long"}},[t._v("Long")]),r("span",{attrs:{id:"johns"}},[t._v("John's")]),r("span",{attrs:{id:"caribbean"}},[t._v("Caribbean")]),r("span",{attrs:{id:"bonbons"}},[t._v("Bonbons")])])])}],d={name:"Header"},u=d,l=(r("29d8"),r("2877")),c=Object(l["a"])(u,o,s,!1,null,"fd2132cc",null),m=c.exports,f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"customer"},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.errors&&t.errors.length>0,expression:"errors && errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,(function(e){return r("li",[t._v(t._s(e))])})),0),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Fname"}},[t._v("First Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.firstName,expression:"firstName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"fname"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Lname"}},[t._v("Last Name")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.lastName,expression:"lastName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"lname"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"streetAddress"}},[t._v("Street Address")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.streetAddress,expression:"streetAddress",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"streetAddress"},domProps:{value:t.streetAddress},on:{input:function(e){e.target.composing||(t.streetAddress=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cityStateZip"}},[t._v("City, State, Zip")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cityStateZip,expression:"cityStateZip"}],staticClass:"form-control",attrs:{id:"cityStateZip"},domProps:{value:t.cityStateZip},on:{input:function(e){e.target.composing||(t.cityStateZip=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary",on:{click:function(e){return e.preventDefault(),t.addCustomer(e)}}},[t._v("Add Customer")])])},p=[],b={name:"Customer",data:function(){return{firstName:"",lastName:"",email:"",streetAddress:"",cityStateZip:"",errors:[]}},methods:{addCustomer:function(){if(this.errors=[],this.firstName&&this.lastName&&this.email&&this.streetAddress&&this.cityStateZip){var t={firstName:this.firstName,lastName:this.lastName,email:this.email,streetAddress:this.streetAddress,cityStateZip:this.cityStateZip};this.$emit("add-customer",t)}else this.errors.push("All fields must be filled out.")}}},v=b,h=(r("1999"),Object(l["a"])(v,f,p,!1,null,null,null)),y=h.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card add-customer m-2 p-2"},[r("div",{staticClass:"order"},[r("h4",{staticClass:"card-title"},[t._v("Enjoy Caribbean flavored bonbons shipped to you")]),r("h5",{staticClass:"card-title"},[t._v(" Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons")]),r("h5",[t._v(" Select the type and quantity of boxes you'd like to order")]),t._l(t.boxes,(function(e){return r("Box",{key:e.id,attrs:{box:e},on:{"box-added":t.addBoxAndQuantity}})}))],2)])])},A=[],g=(r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("span",{staticClass:"boxType"},[t._v(t._s(t.box.boxDescription))]),r("p",[r("label",{attrs:{for:"quantity"}},[t._v(" Quantity of boxes ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.quantitySelected,expression:"quantitySelected"}],on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.quantitySelected=e.target.multiple?r:r[0]},t.addBoxAndQuantity]}},t._l(t.quantities,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+" ")])})),0)])])}),C=[],O={name:"Box",props:{box:Object},data:function(){return{boxOrdered:"",quantitySelected:"",quantities:[0,1,2,3]}},methods:{addBoxAndQuantity:function(){var t={box:this.box,quantity:this.quantitySelected};this.$emit("box-added",t)}}},w=O,B=Object(l["a"])(w,g,C,!1,null,"30732d1d",null),P=B.exports,Q={name:"OrderForm",components:{Box:P},data:function(){return{boxes:[],boxesAndQuantity:[]}},props:{},methods:{addBoxAndQuantity:function(t){this.$emit("box-addedFromOrderForm",t)},buildBoxOptions:function(){var t=this,e="/api/boxes";fetch(e).then((function(t){return t.json()})).then((function(e){t.boxes=e}))}},mounted:function(){this.buildBoxOptions()}},S=Q,T=(r("df2f"),Object(l["a"])(S,x,A,!1,null,null,null)),F=T.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"orderTable"},[r("div",{staticClass:"card order-list m-2 p-2"},[r("h4",{staticClass:"card-title"},[t._v("Order Table")]),r("div",{staticClass:"edit-table-toggle form-check"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var r=t.editTable,a=e.target,n=!!a.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);a.checked?o<0&&(t.editTable=r.concat([i])):o>-1&&(t.editTable=r.slice(0,o).concat(r.slice(o+1)))}else t.editTable=n}}}),r("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit order? ")])]),r("div",{attrs:{id:"order-table"}},[r("table",{staticClass:"table"},[r("tr",[r("th",[t._v("Box Size")]),r("th",[t._v("Coating Selected")]),r("th",[t._v("Quantity")]),r("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.boxesAndQuantities,(function(e){return r("OrderRow",{key:e.box.id,attrs:{boxAndQuantity:e,edit:t.editTable},on:{"delete-box":t.boxDeleted}})}))],2)])])])},_=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",[t._v(" "+t._s(t.boxAndQuantity.box.boxSize))]),a("td",[t._v(" "+t._s(t.boxAndQuantity.box.coating)+" ")]),a("td",[t._v(" "+t._s(t.boxAndQuantity.quantity))]),a("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[a("img",{staticClass:"delete-icon",attrs:{src:r("ed3a")},on:{click:t.deleteBox}})])])},H=[],L={name:"OrderRow",props:{boxAndQuantity:Object,edit:Boolean},methods:{deleteBox:function(){confirm("Delete this box/these boxes?")&&this.$emit("delete-box",this.boxAndQuantity)}}},I=L,z=Object(l["a"])(I,N,H,!1,null,null,null),D=z.exports,G={name:"OrderTable",components:{OrderRow:D},data:function(){return{editTable:!1}},props:{boxesAndQuantities:Array},methods:{boxDeleted:function(t){this.$emit("delete-box",t)}}},Z=G,j=(r("7be5"),Object(l["a"])(Z,E,_,!1,null,null,null)),k=j.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"summary"},[r("h3",[t._v(" Your Order Summary ")]),r("p",[t._v(" Thank you, "+t._s(t.customer.firstName)+" "+t._s(t.customer.lastName)+" for ordering from Long John's Bonbons. Your order should arrive in 5-7 business days. Enjoy! Order size: "+t._s(t.boxesAndQuantities.box.quantity)+" ")])])},J=[],M={name:"Summary",props:{customer:{},boxesAndQuantities:[]}},U=M,V=(r("6213"),Object(l["a"])(U,q,J,!1,null,"95a6679a",null)),Y=V.exports,R={name:"app",data:function(){return{customer:{},boxesAndQuantities:[],orders:[]}},components:{Header:m,Customer:y,OrderForm:F,OrderTable:k,Summary:Y},methods:{addBoxAndQuantity:function(t){this.boxesAndQuantities.push(t)},boxDeleted:function(t){this.boxesAndQuantities=this.boxesAndQuantities.filter((function(e){return e!=t}))},addCustomer:function(t){var e=this;this.customer=t,this.$customer_api.addCustomer(t).then((function(t){e.customer=t}))["catch"]((function(t){var e=t.response.data.join(", ");alert("Error adding customer.\n"+e)}))},finalizeOrder:function(t,e){var r={customerID:this.customer.id,boxesAndQuantities:this.boxesAndQuantities};this.$orders_api.addOrder(r).then((function(t){}))}}},X=R,K=(r("034f"),Object(l["a"])(X,n,i,!1,null,null,null)),W=K.exports,$=r("5f5b"),tt=r("bc3a"),et=r.n(tt),rt="/api/customer",at="/api/boxes",nt={addCustomer:function(t){return et.a.post(rt,t).then((function(t){return t.data}))},getBoxes:function(){return et.a.get("/api/boxes/").then((function(t){return t.data}))},addBox:function(t){return et.a.post(at,t).then((function(t){return t.data}))}},it="/api/orders",ot={addOrder:function(t){return et.a.post(it,t).then((function(t){return t.data}))}},st="/api/orderItems",dt={addorderItem:function(t){return et.a.post(st,order).then((function(t){return t.data}))}};r("f9e3"),r("2dd8");a["default"].use($["a"]),a["default"].prototype.$customer_api=nt,a["default"].prototype.$orderItems_api=dt,a["default"].prototype.$orders_api=ot,new a["default"]({render:function(t){return t(W)}}).$mount("#app")},6213:function(t,e,r){"use strict";var a=r("08a7"),n=r.n(a);n.a},"7be5":function(t,e,r){"use strict";var a=r("2aad"),n=r.n(a);n.a},"85ec":function(t,e,r){},df2f:function(t,e,r){"use strict";var a=r("4ca7"),n=r.n(a);n.a},ed3a:function(t,e){t.exports="data:image/png;base64,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"}});
//# sourceMappingURL=app.31a40a18.js.map