(this["webpackJsonpanime-website-v2"]=this["webpackJsonpanime-website-v2"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(12),i=n.n(a),r=(n(25),n(8)),u=n(3),j=(n(26),n(18)),o=n(20),b=n(9),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:"CHANGE",value:e}},O=n(1),h=function(e){var t=Object(b.c)((function(e){return e.searching})),n=Object(b.b)();Object(c.useEffect)((function(){return function(){n(l(""))}}),[]);return Object(O.jsx)("input",{autoFocus:!0,className:e.inputClass,value:t,onChange:function(e){n(l(e.target.value))}})},f=!1,d=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)("searchBarInput"),i=Object(j.a)(a,2),r=i[0],l=i[1],d=Object(b.c)((function(e){return e.searching})),x=Object(u.e)();Object(c.useEffect)((function(){f?""!==d?x.push({pathname:"/search",search:"?".concat(d)}):x.push(""):f=!0}),[d]);return Object(O.jsxs)("span",{className:"searchBar",children:[Object(O.jsx)("span",{onClick:function(){n?(l("inputOff"),setTimeout((function(){s((function(e){return!e}))}),400)):(l("searchBarInput"),s((function(e){return!e})))},children:Object(O.jsx)(o.a,{})}),n&&Object(O.jsx)(h,{inputClass:r})]})},x=function(){return Object(O.jsx)("div",{className:"Navbar",children:Object(O.jsxs)("div",{className:"nav-container",children:[Object(O.jsxs)("div",{className:"nav-left",children:[Object(O.jsx)(r.b,{exact:!0,to:"/",children:"Home"}),Object(O.jsx)(r.b,{exact:!0,to:"/profile",children:"Profile"}),Object(O.jsx)(r.b,{exact:!0,to:"/news",children:"News"}),Object(O.jsx)(r.b,{exact:!0,to:"/test",children:"Donate"})]}),Object(O.jsxs)("div",{className:"nav-right",children:[Object(O.jsx)(d,{}),Object(O.jsx)(r.b,{exact:!0,to:"/profile",children:"Profile"})]})]})})},v=(n(37),function(e){return Object(O.jsx)(r.a,{basename:"/anime-website-v2",children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)("div",{children:"test"})})]})})}),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))},m=n(13),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE":return t.value;default:return e}},N=Object(m.a)({searching:g}),E=Object(m.b)(N,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(b.a,{store:E,children:Object(O.jsx)(v,{})})}),document.getElementById("root")),p()}},[[38,1,2]]]);
//# sourceMappingURL=main.5bd16e0a.chunk.js.map