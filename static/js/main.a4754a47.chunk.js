(this.webpackJsonppraznicni_spisak=this.webpackJsonppraznicni_spisak||[]).push([[0],{19:function(e,t,n){e.exports={wrapper:"Layout_wrapper__25FIg",holidaySelect:"Layout_holidaySelect__3jpNK",addMeal:"Layout_addMeal__3MNYS",editingMeal:"Layout_editingMeal__IH72t",inputSection:"Layout_inputSection__2tQ-r",regularInput:"Layout_regularInput__1vaOo",smallInput:"Layout_smallInput__20t_G",colorPickerActivator:"Layout_colorPickerActivator__3sUsK",colorPicker:"Layout_colorPicker__1rQta",colorContainer:"Layout_colorContainer__1sove",button:"Layout_button__36MH3"}},206:function(e,t,n){},232:function(e,t){},234:function(e,t){},24:function(e,t,n){e.exports={wrapper:"Meal_wrapper__3Reum",headerWrapper:"Meal_headerWrapper__huAJN",active:"Meal_active__3bBVi",addProduct:"Meal_addProduct__2Kq1u",editingProduct:"Meal_editingProduct__1jAh9",inputSection:"Meal_inputSection__3EAw3",regularInput:"Meal_regularInput__1geBF",smallInput:"Meal_smallInput__wmrFb"}},261:function(e,t){},262:function(e,t){},337:function(e,t){},484:function(e,t,n){},485:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),c=n(65),i=n.n(c),o=(n(206),n(54)),u=n(33),l=n(11),s=n(8),j=n.n(s),d=n(201),b=n(97),p=n.n(b),m={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}},h=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://praznici.herokuapp.com"+t,m);case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(j.a.mark((function e(t,n){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("https://praznici.herokuapp.com"+t,Object(d.a)({},n),m);case 2:return a=e.sent,r=a.statusText,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=n(25),v=n(24),x=n.n(v),_=n(26),g=n(98),y=n.n(g),k=n(6),C=function(e){var t=e.item,n=e.handleAmountChange,r=e.handleIgnoreItem,c=Object(a.useState)(!0),i=Object(l.a)(c,2),o=i[0],u=i[1];return Object(k.jsxs)("li",{className:"".concat(y.a.listItem," ").concat(!o&&y.a.disabled),children:[Object(k.jsx)(f.a,{icon:_.b,onClick:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u(!1),r(e,t)}(t.name,!0)}}),Object(k.jsxs)("span",{children:[t.name,":"]}),Object(k.jsx)("input",{type:"number",onChange:function(e){return n(t.name,e.target.value)},defaultValue:t.amount||0}),t.measurement]})},S=n(34),I=function(e){var t=e.meal,n=e.activeMeal,r=e.activeMealHandler,c=e.handleUpdateMeals,i=e.handleIgnoreItem,u=Object(a.useState)(t.items),s=Object(l.a)(u,2),j=s[0],d=s[1],b=Object(a.useState)(!1),p=Object(l.a)(b,2),m=p[0],h=p[1],O=Object(a.useState)(null),v=Object(l.a)(O,2),g=v[0],y=v[1],I=Object(a.useState)(null),N=Object(l.a)(I,2),w=N[0],z=N[1],M=Object(a.useState)(null),P=Object(l.a)(M,2),L=P[0],A=P[1],E=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=Object(o.a)(j);if(a){var i=!1;if(r.map((function(e){return e.name===a.name?i=!0:""})),i)return void S.b.error("Proizvod je ve\u0107 u listi");r.push(a)}else r.map((function(t){return t.name===e?t.amount=Number(n):""}));d(r),c(r,t.name,a)};return Object(k.jsxs)("div",{className:x.a.wrapper,children:[Object(k.jsxs)("div",{className:"".concat(x.a.headerWrapper," ").concat(t.name===n?x.a.active:""),onClick:function(){return r(t.name)},children:[t.name===n?Object(k.jsx)(f.a,{icon:_.c}):Object(k.jsx)(f.a,{icon:_.d}),Object(k.jsx)("h2",{children:t.name})]}),Object(k.jsxs)("ul",{className:t.name===n?x.a.active:"",children:[t.items.map((function(e){return Object(k.jsx)(C,{item:e,handleAmountChange:E,handleIgnoreItem:i},e._id)})),Object(k.jsx)("hr",{}),m?Object(k.jsxs)("li",{className:x.a.editingProduct,children:[Object(k.jsx)("h5",{children:"Unesi proizvod"}),Object(k.jsxs)("div",{className:x.a.inputSection,children:[Object(k.jsx)("input",{type:"text",onChange:function(e){return y(e.target.value)},placeholder:"Ime proizvoda",className:x.a.regularInput}),Object(k.jsx)("input",{type:"number",onChange:function(e){return z(e.target.value)},placeholder:"Koli\u010dina proizvoda",className:x.a.regularInput}),Object(k.jsx)("input",{type:"text",onChange:function(e){return A(e.target.value)},placeholder:"Jedinica mere",className:x.a.smallInput}),Object(k.jsx)(f.a,{icon:_.a,onClick:function(){if(g&&w&&L){var e={name:g,amount:Number(w),measurement:L};E(null,null,e),h(!1),y(null),z(null),A(null)}else h(!1)}})]})]}):Object(k.jsx)("li",{className:x.a.addProduct,onClick:function(){return h(!0)},children:"Dodaj proizvod"})]})]})},N=n(19),w=n.n(N),z=(n(229),n(27)),M=z.StyleSheet.create({page:{flexDirection:"column",backgroundColor:"#E4E4E4"},header:{fontSize:"14px",marginBottom:"20px"},section:{padding:"5px",fontSize:"10px"}}),P=function(e){var t=e.items,n=e.holiday;return Object(k.jsx)(z.Document,{children:Object(k.jsxs)(z.Page,{size:"A4",style:M.page,children:[Object(k.jsxs)(z.Text,{style:M.header,children:["Spisak za: ",Object(k.jsx)("b",{children:n})]}),t.map((function(e){return Object(k.jsx)(z.View,{style:M.section,children:Object(k.jsxs)(z.Text,{children:[e.name," ---- ",e.amount,e.measurement]})})}))]})})},L=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(),i=Object(l.a)(c,2),s=i[0],d=i[1],b=Object(a.useState)("#fff"),p=Object(l.a)(b,2),m=p[0],v=p[1],x=Object(a.useState)("#00000"),g=Object(l.a)(x,2),y=g[0],C=g[1],N=Object(a.useState)(!1),M=Object(l.a)(N,2),L=M[0],A=M[1],E=Object(a.useState)({visibility:"hidden",left:-210}),B=Object(l.a)(E,2),F=B[0],D=B[1],U=Object(a.useState)(null),H=Object(l.a)(U,2),K=H[0],J=H[1],T=Object(a.useState)(null),G=Object(l.a)(T,2),V=G[0],W=G[1],Q=Object(a.useState)(!1),q=Object(l.a)(Q,2),R=q[0],Y=q[1],X=Object(a.useState)(null),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)([]),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1],ce=Object(a.useState)(""),ie=Object(l.a)(ce,2),oe=ie[0],ue=ie[1],le=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/praznici");case 2:t=e.sent,r(t),W(t[0]._id);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(V){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h("/praznici/".concat(V));case 4:t=e.sent,ue(t.name),d(t.meals),n=[],t.meals.map((function(e){return e.items.map((function(e){return n.push(e)}))})),re(n),J(t.meals[0].name),be(null,t.backgroundColor),me(null,t.fontColor);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=function(e){J(K!==e?e:null)},de=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("/praznici/".concat(V),{meals:s,backgroundColor:m,fontColor:y});case 2:"OK"===e.sent?S.b.success("Uspe\u0161no a\u017eurirano!"):S.b.error("Gre\u0161ka pri a\u017euriranju");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;document.documentElement.style.setProperty("--background-color",t||e.target.value),v(t||e.target.value)},pe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=Object(o.a)(s);if(n){var r=!1;if(a.map((function(e){return e.name===n.name?r=!0:""})),r)return void S.b.error("Proizvod je ve\u0107 u listi");re([].concat(Object(o.a)(ae),[n]))}a.map((function(n){return n.name===t?n.items=e:""})),d(a)},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;document.documentElement.style.setProperty("--font-color",t||e.target.value),C(t||e.target.value)},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(ae){var t=ae.filter((function(t){return t.name!==e}));re(t)}};return Object(a.useEffect)((function(){le()}),[]),Object(a.useEffect)((function(){se()}),[V]),n?Object(k.jsxs)("div",{className:w.a.wrapper,children:[Object(k.jsx)("div",{className:w.a.colorPickerActivator,style:{left:L?205:0},onClick:function(){L?(A(!1),D({visibility:"hidden",left:-210})):(A(!0),D({visibility:"visible",left:0}))},children:Object(k.jsx)(f.a,{icon:_.e})}),Object(k.jsxs)("div",{className:w.a.colorPicker,style:F,children:[Object(k.jsx)("h1",{children:"Izaberi boje"}),Object(k.jsxs)("div",{className:w.a.colorContainer,children:[Object(k.jsx)("input",{type:"color",value:m,onChange:be,id:"backgroundColor"}),Object(k.jsx)("label",{htmlFor:"backgroundColor",children:"Boja pozadine"})]}),Object(k.jsxs)("div",{className:w.a.colorContainer,children:[Object(k.jsx)("input",{type:"color",value:y,onChange:me,id:"fontColor"}),Object(k.jsx)("label",{htmlFor:"fontColor",children:"Boja teksta"})]})]}),Object(k.jsx)("h1",{children:"Izaberi praznik"}),Object(k.jsx)("select",{className:w.a.holidaySelect,onChange:function(e){return W(n[e.target.selectedIndex]._id)},children:n.map((function(e){return Object(k.jsx)("option",{id:e._id,children:e.name},e._id)}))}),Object(k.jsxs)("div",{children:[s&&s.map((function(e){return Object(k.jsx)(I,{meal:e,activeMeal:K,activeMealHandler:je,handleUpdateMeals:pe,handleIgnoreItem:he},e._id)})),Object(k.jsx)("hr",{}),R?Object(k.jsxs)("div",{className:w.a.editingMeal,children:[Object(k.jsx)("h4",{children:"Unesi obrok"}),Object(k.jsxs)("div",{className:w.a.inputSection,children:[Object(k.jsx)("input",{type:"text",onChange:function(e){return ee(e.target.value)},placeholder:"Ime proizvoda",className:w.a.regularInput}),Object(k.jsx)(f.a,{icon:_.a,onClick:function(){$?(pe(null,null,{name:$,items:[]}),Y(!1),ee(null)):Y(!1)}})]})]}):Object(k.jsx)("h3",{className:w.a.addMeal,onClick:function(){return Y(!0)},children:"Dodaj obrok"})]}),Object(k.jsxs)("div",{className:w.a.button,children:[Object(k.jsx)("button",{onClick:de,children:"A\u017euriraj"}),Object(k.jsx)(z.PDFDownloadLink,{document:Object(k.jsx)(P,{items:ae,holiday:oe}),fileName:"spisak",children:function(e){e.blob,e.url;var t=e.loading;e.error;return t?"Loading document...":"Preuzmi"}})]}),Object(k.jsx)(S.a,{position:"bottom-center",autoClose:5e3,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,pauseOnHover:!1,theme:"colored"}),Object(k.jsx)("div",{})]}):Object(k.jsx)("span",{children:"Loading..."})};n(484);var A=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(L,{})})};i.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(A,{})}),document.getElementById("root"))},98:function(e,t,n){e.exports={listItem:"Item_listItem__3S8fG",disabled:"Item_disabled__3oBtk"}}},[[485,1,2]]]);
//# sourceMappingURL=main.a4754a47.chunk.js.map