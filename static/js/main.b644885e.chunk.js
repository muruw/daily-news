(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),l=a(13),c=a.n(l),u=(a(27),function(){return r.a.createElement("div",{className:"navbar"},"DAILY NEWS")}),i=a(20),s=a(14),m=new(a(19).a)({uri:"https://mrtns.ee/graphql"}),o=a(7),f=function(e){var t=e.data,a=e.isSmall;return r.a.createElement("a",{href:t.url,target:"_blank",className:a?"article article--small":"article"},r.a.createElement("img",{className:"article__image",src:t.urlToImage,alt:""}),r.a.createElement("div",{className:"article__source"},t.source.name),r.a.createElement("div",{className:"article__title"},t.title))};function d(){var e=Object(s.a)(["\n  query {\n    articles {\n      title\n      source {\n        name\n      }\n      urlToImage\n      url\n    }\n  }\n"]);return d=function(){return e},e}var E=a.n(o)()(d()),p=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return m.query({query:E}).then(function(e){return l(e.data.articles)}).catch(function(e){return console.log(e)}),r.a.createElement("div",{className:"feed"},a.map(function(e,t){return r.a.createElement(f,{isSmall:(t+1)%5===0||(t+2)%5===0||(t+3)%5===0,data:e,key:t})}),r.a.createElement("a",{href:"https://newsapi.org/ ",target:"_blank"},"Made with news api!"))},g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(p,null))};c.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b644885e.chunk.js.map