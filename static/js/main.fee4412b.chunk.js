(this.webpackJsonpkaspersky=this.webpackJsonpkaspersky||[]).push([[0],{32:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),o=n(16),r=n.n(o),i=n(9),l=n(3);n(32);var b=function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"row align-items-center",children:[Object(a.jsx)("div",{className:"col lg-6",children:Object(a.jsx)("div",{className:"title",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043a\u043d\u0438\u0433"})}),Object(a.jsxs)("div",{className:"col lg-6 button-block",children:[Object(a.jsx)("div",{id:"row justify-content-center"}),Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(i.b,{className:"btn btn-outline-light btn-sm header_botton",to:"/add_book",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"})}),Object(a.jsx)(l.a,{exact:!0,path:"/add_book",children:Object(a.jsx)(i.b,{className:"btn btn-outline-light btn-sm header_botton",to:"/",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433"})}),Object(a.jsx)(l.a,{exact:!0,path:"/edit_book:id",children:Object(a.jsx)(i.b,{className:"btn btn-outline-light btn-sm header_botton",to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})})]})]})})},j=(n(37),n.p+"static/media/about.4d4d16b6.pdf");var m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(a.jsx)("div",{className:"col lg-auto",children:Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("a",{href:j,className:"download_button",target:"_blank",rel:"noreferrer",children:"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435"})})})})})},d=n(22),u=n(7),h=n.p+"static/media/book.55abcabb.jpg",O=[{autors:"\u0420\u0435\u0439 \u0411\u0440\u044d\u0434\u0431\u0435\u0440\u0438",book_image:"https://img3.labirint.ru/rc/c29d2082295ab169ff78b9ed72123f01/220x340/books56/556173/cover.jpg?1565703130",book_name:"451\xb0 \u043f\u043e \u0424\u0430\u0440\u0435\u043d\u0433\u0435\u0439\u0442\u0443",id:"20210208T114017221Z",page_number:"760",publisher_name:"\u042d\u043a\u0441\u043c\u043e-\u041f\u0440\u0435\u0441\u0441",year_of_publishing:"2016"},{autors:"\u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439",book_image:"https://b1.culture.ru/c/365442.jpg",book_name:"\u0412\u043e\u0439\u043d\u0430 \u0438 \u041c\u0438\u0440",id:"20210208T103828799Z",page_number:"990",publisher_name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u0435\u0441\u0442\u043d\u0438\u043a",year_of_publishing:"1865"},{autors:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u043d\u0430\u0440\u043e\u0434",book_image:"https://img2.wbstatic.net/big/new/11100000/11100300-1.jpg",book_name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0435 \u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u0441\u043a\u0430\u0437\u043a\u0438",id:"20210205T130243997Z",page_number:"230",publisher_name:"\u0421\u043b\u043e\u0432\u043e",year_of_publishing:"1980"}];n(38);var x=function(){var e=Object(l.f)(),t=Object(c.useState)(JSON.parse(window.localStorage.getItem("books"))?JSON.parse(window.localStorage.getItem("books")):O),n=Object(u.a)(t,2),s=n[0],o=n[1],r=Object(c.useState)(JSON.parse(window.localStorage.getItem("sort_type"))?JSON.parse(window.localStorage.getItem("sort_type")):"book_name \u2193"),i=Object(u.a)(r,2),b=i[0],j=i[1];function m(e){j(e);var t=e.split(" "),n=Object(d.a)(s),a=[];"year_of_publishing"===t[0]&&("\u2193"===t[1]&&(a=n.sort((function(e,n){return e[t[0]]-n[t[0]]}))),"\u2191"===t[1]&&(a=n.sort((function(e,n){return n[t[0]]-e[t[0]]})))),"year_of_publishing"!==t[0]&&("\u2193"===t[1]&&(a=n.sort((function(e,n){return e[t[0]][0]<n[t[0]][0]?-1:e[t[0]][0]>n[t[0]][0]?1:0}))),"\u2191"===t[1]&&(a=n.sort((function(e,n){return e[t[0]][0]>n[t[0]][0]?-1:e[t[0]][0]<n[t[0]][0]?1:0})))),window.localStorage.setItem("sort_type",JSON.stringify(e)),o(a)}return Object(c.useEffect)((function(){JSON.parse(window.localStorage.getItem("start"))||(window.localStorage.setItem("start",JSON.stringify(!0)),window.localStorage.setItem("books",JSON.stringify(O)),o(O)),m(b)}),[b]),Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"main_page",children:[Object(a.jsx)("h1",{className:"animate__animated animate__slideInDown",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433"}),Object(a.jsxs)("div",{className:"row auto-content-center align-items-center sort",children:[Object(a.jsx)("div",{className:"col-md-auto",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e"}),Object(a.jsx)("div",{className:"col-md-auto",children:Object(a.jsxs)("select",{onChange:function(e){return m(e.target.value)},className:"custom-select custom-select-sm",defaultValue:b,children:[Object(a.jsx)("option",{value:"book_name \u2193",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u2193"}),Object(a.jsx)("option",{value:"book_name \u2191",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u2191"}),Object(a.jsx)("option",{value:"autors \u2193",children:"\u0410\u0432\u0442\u043e\u0440\u0443 \u2193"}),Object(a.jsx)("option",{value:"autors \u2191",children:"\u0410\u0432\u0442\u043e\u0440\u0443 \u2191"}),Object(a.jsx)("option",{value:"year_of_publishing \u2193",children:"\u0414\u0430\u0442\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u2193"}),Object(a.jsx)("option",{value:"year_of_publishing \u2191",children:"\u0414\u0430\u0442\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u2191"})]})})]}),Object(a.jsx)("div",{className:"card_list",children:s.map((function(t){return Object(a.jsx)("div",{id:t.id,className:"book_card",children:Object(a.jsxs)("div",{className:"row align-items-center",children:[Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)("div",{className:"image_container",children:Object(a.jsx)("a",{className:"customer fansy_link","data-fancybox":"gallery",href:t.book_image,children:Object(a.jsx)("img",{className:"fansy_image",src:t.book_image,alt:"book_image",onError:function(e){e.target.src=h}})})})}),Object(a.jsxs)("div",{className:"col-md-7 book_description",children:[Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"\u041a\u043d\u0438\u0433\u0430:"})," ",t.book_name]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"\u0410\u0432\u0442\u043e\u0440:"})," ",t.autors]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"\u041a\u043e\u043b-\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446:"})," ",t.page_number]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"\u0418\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e:"})," ",t.publisher_name]}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:[Object(a.jsx)("b",{children:"\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u043d\u0438\u044f:"})," ",t.year_of_publishing]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"card_buttons",children:[Object(a.jsx)("button",{onClick:function(){return e.push("/edit_book".concat(t.id))},className:"btn btn-outline-info",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(a.jsx)("button",{onClick:function(){!function(e){var t=s.find((function(t){return t.id===e})),n=s.indexOf(t),a=Object(d.a)(s);a.splice(n,1),window.localStorage.setItem("books",JSON.stringify(a)),o(a)}(t.id)},className:"btn btn-outline-danger",children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})]})},t.id)}))})]})})},p=n(12),g=n(10),f=n.p+"static/media/add_image.e9c486cb.mp4";n(39);var _=function(e){var t=e.setModalVisible,n=e.message,s=Object(l.f)(),o=Object(c.useRef)(null);return r.a.createPortal(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"modal_background",children:Object(a.jsxs)("div",{ref:o,className:"modal_window animate__animated animate__zoomIn",children:[Object(a.jsx)("div",{className:"row justify-content-center ",children:Object(a.jsx)("h2",{className:"massage",children:n})}),Object(a.jsxs)("div",{className:"row justify-content-center",children:[Object(a.jsx)("button",{className:"btn btn-primary btn-sm add_book_botton",type:"button",onClick:function(){o.current.classList.remove("animate__zoomIn"),o.current.classList.add("animate__zoomOut"),setTimeout((function(){t(!1)}),220)},children:"OK"}),Object(a.jsx)("button",{className:"btn btn-primary btn-sm add_book_botton",type:"button",onClick:function(){o.current.classList.remove("animate__zoomIn"),o.current.classList.add("animate__zoomOut"),setTimeout((function(){s.push("/")}),220)},children:"\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u043a\u043d\u0438\u0433"})]})]})})}),document.getElementById("portal"))},N=n(25),v=n(26);n(43);var k=function(){var e={book_name:"",autors:"",page_number:"",publisher_name:"",year_of_publishing:"",book_image:""},t=Object(c.useState)(e),n=Object(u.a)(t,2),s=n[0],o=n[1],r=s.book_name,i=s.autors,l=s.page_number,b=s.publisher_name,j=s.year_of_publishing,m=s.book_image,d=(new Date).getFullYear(),O=Object(c.useState)(null),x=Object(u.a)(O,2),k=x[0],y=x[1],w=Object(c.useState)(!1),S=Object(u.a)(w,2),I=S[0],C=S[1],J=Object(c.useState)(!1),q=Object(u.a)(J,2),F=q[0],L=q[1];function D(e){var t=e.target,n=t.name,a=t.value;y(null),o(Object(g.a)(Object(g.a)({},s),{},Object(p.a)({},n,a)))}return Object(a.jsxs)(a.Fragment,{children:[I&&Object(a.jsx)(_,{setModalVisible:C,message:"\u041a\u043d\u0438\u0433\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"}),Object(a.jsxs)("div",{className:"add_book_page",children:[Object(a.jsx)("h1",{className:"animate__animated animate__slideInDown",children:"\u041d\u043e\u0432\u0430\u044f \u043a\u043d\u0438\u0433\u0430"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=0;if(s.autors.split(" ").length%2!==0&&(n++,y("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044e \u0430\u0432\u0442\u043e\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b")),s.autors.split(" ").find((function(e){return e.length>20}))&&(n++,y("\u0418\u043c\u044f \u0438\u043b\u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),0===n){var a=JSON.parse(window.localStorage.getItem("books")),c=a||[],r=(new Date).toJSON().replace(/-/g,"").replace(/:/g,"").replace(/\./g,"");c.push(Object(g.a)(Object(g.a)({},s),{},{id:r})),window.localStorage.setItem("books",JSON.stringify(c)),o(e),C(!0)}},className:"add_book_form",children:[Object(a.jsxs)("label",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0412\u043e\u0439\u043d\u0430 \u0438 \u043c\u0438\u0440",type:"text",name:"book_name",onChange:function(e){return D(e)},value:r,maxLength:30})]}),Object(a.jsxs)("label",{children:["\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439 (\u0415\u0441\u043b\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e)",type:"text",name:"autors",onChange:function(e){return D(e)},value:i}),k&&Object(a.jsxs)("span",{className:"error",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",k]})]}),Object(a.jsxs)("label",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 850",type:"number",name:"page_number",onChange:function(e){return D(e)},value:l,min:1,max:1e4})]}),Object(a.jsxs)("label",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041f\u0440\u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",type:"text",name:"publisher_name",onChange:function(e){return D(e)},value:b,maxLength:30})]}),Object(a.jsxs)("label",{children:["\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 1920",type:"number",name:"year_of_publishing",onChange:function(e){return D(e)},value:j,min:1800,max:d})]}),Object(a.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(a.jsx)("div",{className:"col-md-10",children:Object(a.jsxs)("label",{children:["\u041e\u0431\u043b\u043e\u0436\u043a\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg",type:"text",name:"book_image",onChange:function(e){return D(e)},value:m}),Object(a.jsxs)("span",{className:"description",children:["\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0435\u0451 url"," ",Object(a.jsx)("a",{className:"customer fansy_link","data-fancybox":"gallery",href:f,children:Object(a.jsx)(N.a,{icon:v.a})})]})]})}),Object(a.jsx)("div",{className:"col-md-2",children:F?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{className:"book",src:m,alt:"book_image"})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{className:"book",src:h,alt:"book_image"})})})]}),Object(a.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(a.jsx)("img",{onLoad:function(){return L(!0)},onError:function(){return L(!1)},hidden:!0,src:m,alt:"book_image"})]})]})};n(44);var y=function(){var e=Object(l.g)().id,t=Object(c.useState)({book_name:"",autors:"",page_number:"",publisher_name:"",year_of_publishing:"",book_image:""}),n=Object(u.a)(t,2),s=n[0],o=n[1],r=s.book_name,i=s.autors,b=s.page_number,j=s.publisher_name,m=s.year_of_publishing,d=s.book_image,O=(new Date).getFullYear(),x=Object(c.useState)(!1),f=Object(u.a)(x,2),N=f[0],v=f[1],k=Object(c.useState)(null),y=Object(u.a)(k,2),w=y[0],S=y[1],I=Object(c.useState)(!1),C=Object(u.a)(I,2),J=C[0],q=C[1];function F(e){var t=e.target,n=t.name,a=t.value;S(null),o(Object(g.a)(Object(g.a)({},s),{},Object(p.a)({},n,a)))}return Object(c.useEffect)((function(){var t=JSON.parse(window.localStorage.getItem("books")).find((function(t){return t.id===e}));o(t)}),[e]),Object(a.jsxs)(a.Fragment,{children:[N&&Object(a.jsx)(_,{setModalVisible:v,message:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043d\u0435\u0441\u0435\u043d\u044b"}),Object(a.jsxs)("div",{className:"add_book_page",children:[Object(a.jsx)("h1",{className:"animate__animated animate__slideInDown",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=0;if(s.autors.split(" ").length%2!==0&&(n++,S("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044e \u0430\u0432\u0442\u043e\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b")),s.autors.split(" ").find((function(e){return e.length>20}))&&(n++,S("\u0418\u043c\u044f \u0438\u043b\u0438 \u0424\u0430\u043c\u0438\u043b\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435 \u0434\u043b\u0438\u043d\u043d\u0435\u0435 20 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")),0===n){var a=JSON.parse(window.localStorage.getItem("books")),c=a.find((function(t){return t.id===e})),o=a.indexOf(c);a.splice(o,1,s),window.localStorage.setItem("books",JSON.stringify(a)),v(!0)}},className:"add_book_form",children:[Object(a.jsxs)("label",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0412\u043e\u0439\u043d\u0430 \u0438 \u043c\u0438\u0440",type:"text",name:"book_name",onChange:function(e){return F(e)},value:r,maxLength:30})]}),Object(a.jsxs)("label",{children:["\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041b\u0435\u0432 \u0422\u043e\u043b\u0441\u0442\u043e\u0439 (\u0415\u0441\u043b\u0438 \u0430\u0432\u0442\u043e\u0440\u043e\u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e)",type:"text",name:"autors",onChange:function(e){return F(e)},value:i}),w&&Object(a.jsxs)("span",{className:"error",children:["\u041e\u0448\u0438\u0431\u043a\u0430: ",w]})]}),Object(a.jsxs)("label",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 850",type:"number",name:"page_number",onChange:function(e){return F(e)},value:b,min:1,max:1e4})]}),Object(a.jsxs)("label",{children:["\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u041f\u0440\u043e\u0441\u0432\u0435\u0449\u0435\u043d\u0438\u0435",type:"text",name:"publisher_name",onChange:function(e){return F(e)},value:j,maxLength:30})]}),Object(a.jsxs)("label",{children:["\u0413\u043e\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: 1920",type:"number",name:"year_of_publishing",onChange:function(e){return F(e)},value:m,min:1800,max:O})]}),Object(a.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(a.jsx)("div",{className:"col-md-10",children:Object(a.jsxs)("label",{children:["\u041e\u0431\u043b\u043e\u0436\u043a\u0430",Object(a.jsx)("input",{required:!0,className:"form-control form-control-sm",placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: https://html5book.ru/wp-content/uploads/2017/05/krasivaya_forma_html.jpg",type:"text",name:"book_image",onChange:function(e){return F(e)},value:d}),Object(a.jsxs)("span",{className:"description",children:["\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0443\u044e \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443 \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0438 \u0432\u0441\u0442\u0430\u0432\u0442\u0435 \u0435\u0451 url"," "]})]})}),Object(a.jsx)("div",{className:"col-md-2",children:J?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{className:"book",src:d,alt:"book_image"})}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("img",{className:"book",src:h,alt:"book_image"})})})]}),Object(a.jsx)("div",{className:"row justify-content-center align-items-center",children:Object(a.jsx)("button",{type:"submit",className:"btn btn-success",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]}),Object(a.jsx)("img",{onLoad:function(){return q(!0)},onError:function(){return q(!1)},hidden:!0,src:d,alt:"book_image"})]})]})};n(45);var w=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("section",{className:"container",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/add_book",component:k}),Object(a.jsx)(l.a,{exact:!0,path:"/edit_book:id",component:y}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:x})]})}),Object(a.jsx)(m,{})]})})};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.fee4412b.chunk.js.map