"use strict";(self.webpackChunkonlearning=self.webpackChunkonlearning||[]).push([[5853],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),p=i,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17661:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(67294),i=r(34334),a=r(44544),c=r(83699),o=r(2735),l=r(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,r=e.children;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},r)}function p(e){var t=e.href,r=e.icon,a=e.title,c=e.description;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:a},r," ",a),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",f),title:c},c))}function d(e){var t,r=e.item,i=(0,a.Wl)(r);return i?n.createElement(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function y(e){var t,r,i=e.item,c=(0,o.Z)(i.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,a.xz)(null!=(t=i.docId)?t:void 0);return n.createElement(p,{href:i.href,icon:c,title:i.label,description:null!=(r=i.description)?r:null==l?void 0:l.description})}function h(e){var t=e.item;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,r=(0,a.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return n.createElement(g,e);var c=(0,a.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},c.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e}))})))}},83399:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),c=r(17661),o=["components"],l={},u="\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0445\u0438\u043c\u0438\u044f",s={unversionedId:"fizicheskaya-himiya/index",id:"fizicheskaya-himiya/index",title:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432.",source:"@site/docs/fizicheskaya-himiya/index.md",sourceDirName:"fizicheskaya-himiya",slug:"/fizicheskaya-himiya/",permalink:"/fizicheskaya-himiya/",draft:!1,editUrl:"https://github.com/fgazat/labnotes/blob/master/docs/fizicheskaya-himiya/index.md",tags:[],version:"current",lastUpdatedAt:1663628672,formattedLastUpdatedAt:"19 \u0441\u0435\u043d\u0442. 2022 \u0433.",frontMatter:{},sidebar:"fizicheskaya",next:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f",permalink:"/fizicheskaya-himiya/opredeleniya"}},f={},m=[],p={toc:m};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f-\u0445\u0438\u043c\u0438\u044f"},"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0445\u0438\u043c\u0438\u044f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0445\u0438\u043c\u0438\u044f")," \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0432\u0435\u0449\u0435\u0441\u0442\u0432."),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);