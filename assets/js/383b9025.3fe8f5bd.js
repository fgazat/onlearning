"use strict";(self.webpackChunkonlearning=self.webpackChunkonlearning||[]).push([[5683],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||l[d]||s;return n?a.createElement(f,m(m({ref:t},o),{},{components:n})):a.createElement(f,m({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,m=new Array(s);m[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var p=2;p<s;p++)m[p]=n[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(67294),r=n(34334),s=n(44544),m=n(83699),i=n(2735),c=n(97325),p="cardContainer_fWXF",o="cardTitle_rnsV",l="cardDescription_PWke";function u(e){var t=e.href,n=e.children;return a.createElement(m.Z,{href:t,className:(0,r.Z)("card padding--lg",p)},n)}function d(e){var t=e.href,n=e.icon,s=e.title,m=e.description;return a.createElement(u,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",o),title:s},n," ",s),m&&a.createElement("p",{className:(0,r.Z)("text--truncate",l),title:m},m))}function f(e){var t=e.item,n=(0,s.Wl)(t);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function N(e){var t,n=e.item,r=(0,i.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",m=(0,s.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(d,{href:n.href,icon:r,title:n.label,description:null==m?void 0:m.description})}function h(e){var t=e.item;switch(t.type){case"link":return a.createElement(N,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,s.jA)();return a.createElement(k,{items:n.items,className:t})}function k(e){var t=e.items,n=e.className;if(!t)return a.createElement(g,e);var m=(0,s.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},m.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(h,{item:e}))})))}},58345:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return u}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),m=n(17661),i=["components"],c={sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421 \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u0438\u0437\u0443\u0447\u0430\u044e\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0435\u0437 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439."},p="\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421",o={unversionedId:"vms/index",id:"vms/index",title:"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421",description:"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421 \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u0438\u0437\u0443\u0447\u0430\u044e\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0435\u0437 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439.",source:"@site/docs/vms/index.md",sourceDirName:"vms",slug:"/vms/",permalink:"/vms/",draft:!1,editUrl:"https://github.com/fgazat/labnotes/blob/master/docs/vms/index.md",tags:[],version:"current",lastUpdatedAt:1663628672,formattedLastUpdatedAt:"19 \u0441\u0435\u043d\u0442. 2022 \u0433.",frontMatter:{sidebar_label:"\u0412\u0432\u0435\u0434\u0435\u043d\u0438\u0435",description:"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421 \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u0438\u0437\u0443\u0447\u0430\u044e\u0449\u0438\u0439 \u0441\u0438\u043d\u0442\u0435\u0437 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0432\u044b\u0441\u043e\u043a\u043e\u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439."},sidebar:"vms",next:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f",permalink:"/vms/opredeleniya"}},l={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u0445\u0438\u043c\u0438\u044f-\u0432\u043c\u0441"},"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0425\u0438\u043c\u0438\u044f \u0412\u041c\u0421")," \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0438\u043d\u0442\u0435\u0437, \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0412\u044b\u0441\u043e\u043a\u043e\u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f (\u0412\u041c\u0421, \u043f\u043e\u043b\u0438\u043c\u0435\u0440\u044b)")," \u2014 \u044d\u0442\u043e \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430 \u0441 \u043e\u0447\u0435\u043d\u044c \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u043c\u0430\u0441\u0441 (",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"M"),(0,s.kt)("mo",{parentName:"mrow"},">"),(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mn",{parentName:"msup"},"6"))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"M > 10^6")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.72243em",verticalAlign:"-0.0391em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"M"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},">"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141079999999999em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"6"))))))))))))," \u0433/\u043c\u043e\u043b\u044c)."),(0,s.kt)(m.Z,{mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);