(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(30)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(4),r=a.n(l),c=a(5),i=a(1);function s(){var e=o.a.useState(""),t=Object(i.a)(e,2),a=t[0],l=t[1],r=function(e,t){var a=o.a.useState(t),n=Object(i.a)(a,2),l=n[0],r=n[1],c=o.a.useState(!0),s=Object(i.a)(c,2),d=s[0],u=s[1],m=o.a.useState(!0),g=Object(i.a)(m,2),f=g[0],h=g[1],p=o.a.useState(!1),E=Object(i.a)(p,2),T=E[0],v=E[1];return o.a.useEffect(function(){try{setTimeout(function(){var a,n=localStorage.getItem(e);if(n)try{a=JSON.parse(n)}catch(o){a=[]}else a=[],localStorage.setItem(e,JSON.stringify(t));r(a),h(!1),u(!0)},1e3)}catch(T){h(!1),v(!0)}},[d]),{item:l,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),r(t)}catch(T){console.log(T),v(!0)}},sincronizeItem:function(){h(!0),u(!1)},loading:f,error:T}}("toDoList",[]),s=r.item,d=r.saveItem,u=r.sincronizeItem,m=r.loading,g=r.error,f=s.filter(function(e){return e.completed}),h=[];h=a.length>=1?s.filter(function(e){var t=e.text.toUpperCase(),n=a.toUpperCase();return t.includes(n)}):s;var p=Object(n.useState)(""),E=Object(i.a)(p,2),T=E[0],v=E[1];Object(n.useEffect)(function(){!function(){if(s.length){var e=s.length-f.length;document.title=e?"".concat(s.length-f.length," task left"):"Everything done!"}else document.title="To-Do List"}()},[s]);var w=Object(n.useState)(!1),N=Object(i.a)(w,2),b=N[0],S=N[1],y=function(){S(!b)},D=Object(n.useState)(null),M=Object(i.a)(D,2),k=M[0],O=M[1];return{appTitle:"To-Do List",completedToDos:f,ToDos:s,sincronizeToDos:u,loading:m,error:g,searchValue:a,setSearchValue:l,searchChanged:function(e){l(e.target.value)},filteredToDos:h,toggleTodo:function(e){var t=s.map(function(t){return s[e]===t&&(t.completed=!t.completed),t});d(t)},newTodo:T,setNewTodo:v,addNewTodo:function(){var e=[{text:T,completed:!1}].concat(Object(c.a)(s));d(e),v(""),y()},deleteTodo:function(e){var t=s.reduce(function(t,a){return s[e]!==a&&t.push(a),t},[]);d(t)},openModal:b,toggleModal:y,showingModal:k,setShowingModal:O}}function d(e){var t=e.loading,a=e.children;return o.a.createElement("header",null,o.a.Children.toArray(a).map(function(e){return o.a.cloneElement(e,{loading:t})}))}a(14);function u(e){var t=e.appTitle;return o.a.createElement("h1",{className:"app-title"},t)}a(16);function m(e){var t=e.loading,a=e.ToDos,n=e.completedToDos;return o.a.createElement("div",{className:"to-do__counter"},t&&o.a.createElement("span",null,"Loading..."),!t&&o.a.createElement("span",null,"You've done ",n.length," tasks of ",a.length))}a(18);function g(e){var t=e.loading,a=e.searchValue,n=e.searchChanged;return o.a.createElement("div",{className:"search-section"},o.a.createElement("input",{type:"text",placeholder:"Search...",value:a,onChange:n,disabled:t}))}function f(){return o.a.createElement("p",{className:"loading"},o.a.createElement("i",{className:"fa-solid fa-circle-notch"}))}a(20);function h(e){var t=e.children||e.render;return o.a.createElement("div",{className:"to-do-list"},o.a.createElement("h3",{className:"to-do-list__title"},"Your tasks"),!!e.error&&e.onError(),(!!e.loading||!e.sincronize)&&e.onLoad(),!e.loading&&!e.filteredToDos.length&&!e.searchValue.length&&e.onEmptyToDos(),!e.loading&&!e.filteredToDos.length&&!!e.searchValue.length&&e.onEmptySearchResults(),!e.loading&&e.sincronize&&e.filteredToDos.map(t))}a(22);function p(e){var t=e.text,a=e.completed,n=e.data_key,l=e.toggleTodo,r=e.deleteTodo;return o.a.createElement("div",{className:"".concat(a?"completed":""," to-do-item")},o.a.createElement("span",{className:"item--complete-button",onClick:function(){l(n)}},o.a.createElement("i",{className:"fa-solid fa-check"})),o.a.createElement("p",null,t),o.a.createElement("span",{className:"item--delete-button",onClick:function(){r(n)}},o.a.createElement("i",{className:"fa-solid fa-trash"})))}a(24);function E(e){var t=e.openModal,a=e.toggleModal,n=e.setShowingModal;return o.a.createElement("div",{className:"add-task"},o.a.createElement("button",{type:"button",className:"add-task__button ".concat(t?"opened":""),onClick:function(){a(),n("addToDo")}},"+"))}var T=a(2),v=a.n(T);a(26);function w(e){var t=e.openModal,a=e.children;return t?v.a.createPortal(a,document.querySelector("#modal")):null}function N(e){var t=e.children;return o.a.createElement("div",{className:"modal__background"},o.a.createElement("div",{className:"modal__card"},t))}function b(){return o.a.createElement("p",{className:"error"},"Oops! Something wrong just ocurred ")}function S(){return o.a.createElement("p",null,"Add your first task with the + icon")}function y(e){var t=e.searchValue;return o.a.createElement("p",{className:"xdds"}," No results found for ",t," ")}function D(e){var t=e.newTodo,a=e.setNewTodo,l=e.addNewTodo,r=e.toggleModal;return o.a.createElement(n.Fragment,null,o.a.createElement("p",{className:"card__title"},"Set a new task!"),o.a.createElement("input",{value:t,type:"text",className:"card__input",onChange:function(e){a(e.target.value)}}),o.a.createElement("div",{className:"card__footer"},o.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:r},"Cancel"),o.a.createElement("button",{className:"btn btn-primary",type:"button",onClick:function(){l(t)}},"Add")))}function M(e){return function(t){var a=Object(n.useState)(!1),l=Object(i.a)(a,2),r=l[0],c=l[1];window.addEventListener("storage",function(e){"toDoList"===e.key&&(c(e),t.toggleModal(),t.setShowingModal("changeAlert"))});return o.a.createElement(e,Object.assign({},t,{show:r,toggleShow:function(){c(!1),t.sincronizeToDos(),t.toggleModal()}}))}}var k=M(function(e){return e.show,e.toggleShow,null});var O=M(function(e){var t=e.toggleShow;return o.a.createElement(n.Fragment,null,o.a.createElement("p",{className:"card__info"},"Hmmm... It looks like your To Do List changed recently, would you like to refresh your list to get the last changes?"),o.a.createElement("div",{className:"card__footer"},o.a.createElement("button",{className:"btn btn-primary",onClick:function(){t()}},"Refresh")))});var _=function(){var e=s(),t=e.appTitle,a=e.completedToDos,n=e.ToDos,l=e.sincronizeToDos,r=e.loading,c=e.searchValue,i=e.searchChanged,T=e.filteredToDos,v=e.error,M=e.toggleTodo,_=e.deleteTodo,j=e.newTodo,C=e.setNewTodo,x=e.addNewTodo,z=e.openModal,V=e.toggleModal,I=e.showingModal,L=e.setShowingModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u,{appTitle:t}),o.a.createElement(d,{loading:r},o.a.createElement(m,{completedToDos:a,ToDos:n}),o.a.createElement(g,{searchValue:c,searchChanged:i})),o.a.createElement(h,{error:v,onError:function(){return o.a.createElement(b,null)},loading:r,sincronize:l,onLoad:function(){return o.a.createElement(f,null)},filteredToDos:T,onEmptyToDos:function(){return o.a.createElement(S,null)},searchValue:c,onEmptySearchResults:function(){return o.a.createElement(y,{searchValue:c})}},function(e){return o.a.createElement(p,{key:T.indexOf(e),text:e.text,completed:e.completed,data_key:T.indexOf(e),toggleTodo:M,deleteTodo:_})}),o.a.createElement(E,{openModal:z,toggleModal:V,setShowingModal:L}),o.a.createElement(w,{openModal:z},o.a.createElement(N,null,"addToDo"===I&&o.a.createElement(D,{newTodo:j,setNewTodo:C,addNewTodo:x,toggleModal:V}),"changeAlert"===I&&o.a.createElement(O,{toggleModal:V,sincronizeToDos:l,setShowingModal:L}))),o.a.createElement(k,{toggleModal:V,sincronizeToDos:l,setShowingModal:L}))};a(28);r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)))}],[[6,2,1]]]);
//# sourceMappingURL=main.05f65d3b.chunk.js.map