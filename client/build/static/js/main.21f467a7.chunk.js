(this["webpackJsonptiho-react"]=this["webpackJsonptiho-react"]||[]).push([[0],{18:function(e,n,t){},25:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(0),o=t.n(c),s=t(15),r=t(8),a=(t(25),t(2)),i=(t(18),t(10)),l=(t(19),t(12)),d=(t(26),t(1));l.StylesManager.applyTheme("modern");var u={surveyId:"94fddab0-4a51-4b98-abf6-60ef8b895197",surveyPostId:"155b60f3-7268-4c0e-93dc-338fc33f4387"};function j(e){console.log(e.valuesHash)}var h=function(){var e=new l.Model(u),n=o.a.useState(""),t=Object(i.a)(n,2),c=t[0],s=t[1];return console.log("Completed:",c),"completed"===c?Object(d.jsx)(a.a,{to:"/menu"}):Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(l.Survey,{model:e,onComplete:function(e){console.log("Complete! "+e.data),fetch("/logmood",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({result:e.data})}).then((function(e){if(200!==e.status)throw alert("Data could not be saved. Please refresh the page and try again."),new Error(e.status);s("completed")})).catch((function(e){return console.log(e)}))},onValueChanged:j})})},b=(t(36),t(37),function(e){return Object(d.jsx)("div",{className:e.className,children:Object(d.jsxs)("p",{children:[" ",e.children," "]})})}),f=(t(38),function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("button",{onClick:e.function,className:e.className,children:[" ",e.children," "]})})}),O=t(39),p=function(){var e=o.a.useState(""),n=Object(i.a)(e,2),t=n[0],c=n[1];console.log("Indicator",t);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)(r.b,{to:"./",style:{textDecoration:"none"},children:Object(d.jsxs)(b,{className:"greenContFlex",children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"../../../../assets/groceries1.png",alt:""})}),Object(d.jsx)("div",{children:"neue Umfrage"})]})}),Object(d.jsx)(b,{className:"brownContFlex",children:Object(d.jsxs)(f,{function:function(){return fetch("/data").then((function(e){console.log(e);var n=e.headers.get("Content-Type");console.log("Header",n);e.blob().then((function(e){return O(e,"Report.csv")}))})).catch((function(e){console.error(e)}))},children:[" ","DATEN"," "]})}),Object(d.jsx)(b,{className:"greenContFlex",children:Object(d.jsxs)(f,{function:function(){return c("indicator"),fetch("/download").then((function(e){console.log(e);e.blob().then((function(e){return O(e,"Files.zip")})).then((function(e){return c("")}))})).catch((function(e){console.error(e)}))},children:[" ","BILDER & VIDEOS"," "]})}),Object(d.jsx)("div",{className:t})]})})},x=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(a.d,{children:[Object(d.jsx)(a.b,{exact:!0,path:"/",component:h}),Object(d.jsx)(a.b,{path:"/menu",component:p})]})})};Object(s.render)(Object(d.jsx)(r.a,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.21f467a7.chunk.js.map