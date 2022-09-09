(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(3),i=c(14),l=c(6),o=c(12),d=c(13);!function(e){e.SET="currentTodoID/SET",e.REMOVE="currentTodoID/REMOVE"}(n||(n={}));var u,j,b=function(e){return{type:n.SET,payload:e}},h=function(){return{type:n.REMOVE}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET:return t.payload;case n.REMOVE:return null;default:return e}},f=c(5);!function(e){e.ALL="all",e.COMPLETED="completed",e.ACTIVE="active"}(u||(u={})),function(e){e.ALL="filterStatus/ALL",e.COMPLETED="filterStatus/COMPLETED",e.ACTIVE="filterStatus/ACTIVE",e.QUERY="filterQuery/QUERY"}(j||(j={}));var m,x=function(){return{type:j.ALL,payload:u.ALL}},p=function(){return{type:j.COMPLETED,payload:u.COMPLETED}},y=function(){return{type:j.ACTIVE,payload:u.ACTIVE}},v=function(e){return{type:j.QUERY,payload:e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:u.ALL},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.ALL:return Object(f.a)(Object(f.a)({},e),{},{status:u.ALL});case j.ACTIVE:return Object(f.a)(Object(f.a)({},e),{},{status:u.ACTIVE});case j.COMPLETED:return Object(f.a)(Object(f.a)({},e),{},{status:u.COMPLETED});case j.QUERY:return Object(f.a)(Object(f.a)({},e),{},{query:t.payload});default:return e}};!function(e){e.SetTodos="todos/set_todos"}(m||(m={}));var N=function(e){return{type:m.SetTodos,payload:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===m.SetTodos?t.payload:e},L=Object(l.combineReducers)({currentTodoID:O,filter:E,todos:T}),g=Object(l.createStore)(L,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),C=c(4),A=c(0),D=(c(22),c(23),r.b,r.c),I=c(1),S=function(){var e=D((function(e){var t=e.todos,c=e.filter,n=c.query,a=c.status;return t.filter((function(e){var t=e.title.toLowerCase().includes(n.toLowerCase().trim());switch(a){case u.COMPLETED:return!e.completed&&t;case u.ACTIVE:return e.completed&&t;case u.ALL:default:return t}}))})),t=D((function(e){return e.currentTodoID})),c=Object(r.b)();return Object(I.jsxs)(I.Fragment,{children:[0===e.length&&Object(I.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(I.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("th",{children:"Title"}),Object(I.jsx)("th",{children:" "})]})}),Object(I.jsx)("tbody",{children:e.map((function(e){return Object(I.jsxs)("tr",{"data-cy":"todo",className:e.id===t?"has-background-info-light":"",children:[Object(I.jsx)("td",{className:"is-vcentered",children:e.id}),Object(I.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(I.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(I.jsx)("i",{className:"fas fa-check"})})}),Object(I.jsx)("td",{className:"is-vcentered is-expanded",children:Object(I.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(I.jsx)("td",{className:"has-text-right is-vcentered",children:Object(I.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(b(e.id))},children:Object(I.jsx)("span",{className:"icon",children:Object(I.jsx)("i",{className:t===e.id?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]})]})},M=function(){var e=Object(r.b)(),t=D((function(e){return e.filter})).query;return Object(I.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(I.jsx)("p",{className:"control",children:Object(I.jsx)("span",{className:"select",children:Object(I.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){switch(t.target.value){case u.ACTIVE:return e(y());case u.COMPLETED:return e(p());case u.ALL:default:return e(x())}},children:[Object(I.jsx)("option",{value:u.ALL,children:"All"}),Object(I.jsx)("option",{value:u.ACTIVE,children:"Active"}),Object(I.jsx)("option",{value:u.COMPLETED,children:"Completed"})]})})}),Object(I.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(I.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){e(v(t.target.value))}}),Object(I.jsx)("span",{className:"icon is-left",children:Object(I.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(I.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(I.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return e(v(""))}})})]})]})};function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(25);var V=function(){return Object(I.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(I.jsx)("div",{className:"Loader__content"})})},k=function(){var e=Object(A.useState)(!1),t=Object(C.a)(e,2),c=t[0],n=t[1],a=Object(A.useState)(null),s=Object(C.a)(a,2),i=s[0],l=s[1],o=D((function(e){return e.currentTodoID})),d=D((function(e){return e.todos.find((function(e){return e.id===o}))||null})),u=Object(r.b)();return Object(A.useEffect)((function(){var e;n(!0),(e=(null===d||void 0===d?void 0:d.userId)||0,w("/users/".concat(e))).then((function(e){return l(e)})).finally((function(){return n(!1)}))}),[]),Object(I.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(I.jsx)("div",{className:"modal-background"}),c?Object(I.jsx)(V,{}):i&&d&&Object(I.jsxs)("div",{className:"modal-card",children:[Object(I.jsxs)("header",{className:"modal-card-head",children:[Object(I.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",o]}),Object(I.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return u(h())}})]}),Object(I.jsxs)("div",{className:"modal-card-body",children:[Object(I.jsx)("p",{className:"block","data-cy":"modal-title",children:d.title}),Object(I.jsxs)("p",{className:"block","data-cy":"modal-user",children:[d.completed?Object(I.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(I.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(I.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]})]})},P=function(){var e=Object(r.b)(),t=Object(A.useState)(!1),c=Object(C.a)(t,2),n=c[0],a=c[1],s=D((function(e){return e.currentTodoID}));return Object(A.useEffect)((function(){a(!0),w("/todos").then((function(t){e(N(t))})).finally((function(){return a(!1)}))}),[]),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("div",{className:"section",children:Object(I.jsx)("div",{className:"container",children:Object(I.jsxs)("div",{className:"box",children:[Object(I.jsx)("h1",{className:"title",children:"Todos:"}),Object(I.jsx)("div",{className:"block",children:Object(I.jsx)(M,{})}),Object(I.jsx)("div",{className:"block",children:n?Object(I.jsx)(V,{}):Object(I.jsx)(S,{})})]})})}),s&&Object(I.jsx)(k,{})]})},R=function(){return Object(I.jsx)(r.a,{store:g,children:Object(I.jsx)(i.a,{children:Object(I.jsx)(P,{})})})};s.a.render(Object(I.jsx)(R,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.d1bcb8c6.chunk.js.map