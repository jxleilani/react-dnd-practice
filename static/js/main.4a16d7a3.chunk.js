(this.webpackJsonpdragndrop=this.webpackJsonpdragndrop||[]).push([[0],{10:function(e,n,t){},11:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t.n(c),i=t(4),d=t.n(i),s=(t(10),t.p+"static/media/logo.6ce24c58.svg"),o=(t(11),t(3));var l=function(e){var n=e.data,t=Object(c.useState)(n),a=Object(o.a)(t,2),i=a[0],d=a[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],g=l[1],j=Object(c.useRef)(),x=Object(c.useRef)(),p=function(e,n){console.log("entering drag",n);var t=j.current;e.target!==x.current&&(console.log("target not the same"),d((function(e){var r=JSON.parse(JSON.stringify(e));return r[n.gIndex].items.splice(n.iIndex,0,r[t.gIndex].items.splice(t.iIndex,1)[0]),j.current=n,r})))},m=function e(){console.log("end dragging"),g(!1),x.current.removeEventListener("dragend",e),j.current=null,x.current=null},b=function(e){var n=j.current;return n.gIndex===e.gIndex&&n.iIndex===e.iIndex?"current dnd-item":"dnd-item"};return Object(r.jsx)("div",{className:"drag-n-drop",children:i.map((function(e,n){return Object(r.jsxs)("div",{className:"dnd-day",onDragEnter:u&&!e.items.length?function(e){return p(e,{gIndex:n,iIndex:0})}:null,children:[Object(r.jsx)("div",{className:"dnd-day-title",children:e.title}),e.items.map((function(e,t){return Object(r.jsx)("div",{draggable:!0,onDragStart:function(e){!function(e,n){console.log("drag starting",n),j.current=n,x.current=e.target,x.current.addEventListener("dragend",m),setTimeout((function(){g(!0)}),0)}(e,{gIndex:n,iIndex:t})},onDragEnter:u?function(e){p(e,{gIndex:n,iIndex:t})}:null,className:u?b({gIndex:n,iIndex:t}):"dnd-item",children:e},e)}))]},e.title)}))})},u=[{title:"Monday",items:["1","2","3"]},{title:"Tuesday",items:["4","5"]}];var g=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(r.jsxs)("p",{children:["Edit ",Object(r.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(r.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(r.jsx)(l,{data:u})]})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};d.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),j()}},[[12,1,2]]]);
//# sourceMappingURL=main.4a16d7a3.chunk.js.map