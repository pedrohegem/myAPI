(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(15),o=t.n(c),r=t(6),a=t(4),u=t(2),i=t(0),s=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:e.handleAddPerson,children:["Nombre:",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})," ",Object(i.jsx)("br",{}),"Number:",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumber}),Object(i.jsx)("br",{}),Object(i.jsx)("button",{type:"submit",children:"Add"})]})})},b=function(e){return Object(i.jsx)("div",{children:e.persons.sort((function(e,n){return e.name>n.name?1:-1})).filter((function(n){return 0===e.handler.length?n:n.name.toLowerCase().startsWith(e.handler.toLowerCase())})).map((function(n){return Object(i.jsxs)("div",{children:[n.name," - ",n.number,Object(i.jsx)("button",{onClick:e.handleDeletePerson(n.id,n.name),children:"delete"})]},n.id)}))})},h=t(3),d=t.n(h),l="api/persons",j=function(){return d.a.get(l).then((function(e){return e.data}))},f=function(e){return d.a.post(l,e).then((function(e){return e.data}))},m=function(e,n){return d.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},O=function(e){return d.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},p=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],c=n[1],o=Object(u.useState)(""),h=Object(a.a)(o,2),d=h[0],l=h[1],p=Object(u.useState)(""),x=Object(a.a)(p,2),g=x[0],v=x[1],w=Object(u.useState)(""),N=Object(a.a)(w,2),k=N[0],C=N[1];Object(u.useEffect)((function(){j().then((function(e){c(e)})).catch((function(e){return console.log(e)}))}),[]);return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(s,{newName:d,newNumber:g,handleNameChange:function(e){l(e.target.value)},handleNumber:function(e){v(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===d}));n?(window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&m(n.id,Object(r.a)(Object(r.a)({},n),{},{number:g})).then((function(e){var n=t.map((function(n){return n.name===e.name?e:n}));c(n)})).catch((function(e){return console.log(e)})),l(""),v("")):f({name:d,number:g}).then((function(e){c(t.concat(e)),l(""),v("")})).catch((function(e){return console.log(e)}))}}),Object(i.jsx)("h4",{children:" Filter by name"}),Object(i.jsx)("input",{value:k,onChange:function(e){C(e.target.value)}}),Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)(b,{persons:t,handler:k,handleDeletePerson:function(e,n){return function(){window.confirm("Do you want to DELETE ".concat(n," from the phonebook?"))&&O(e).then((function(){c(t.filter((function(e){return e.name!==n})))})).catch((function(e){return console.log(e)}))}}})]})};o.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.8eca3e19.chunk.js.map