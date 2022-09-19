"use strict";(self.webpackChunkonlearning=self.webpackChunkonlearning||[]).push([[9642],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),p=a,d=f["".concat(l,".").concat(p)]||f[p]||m[p]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(67294),a=n(34334),i=n(44544),o=n(83699),c=n(2735),l=n(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",m="cardDescription_PWke";function f(e){var t=e.href,n=e.children;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},n)}function p(e){var t=e.href,n=e.icon,i=e.title,o=e.description;return r.createElement(f,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function d(e){var t=e.item,n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,a=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:a,title:n.label,description:null==o?void 0:o.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){var t=e.className,n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){var t=e.items,n=e.className;if(!t)return r.createElement(h,e);var o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e}))})))}},49050:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=n(17661),c=["components"],l={sidebar_label:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u044d\u0442\u043e \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0432\u0430\u043d\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438."},u="\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f",s={unversionedId:"kvantovaya-himiya/index",id:"kvantovaya-himiya/index",title:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u044d\u0442\u043e \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0432\u0430\u043d\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438.",source:"@site/docs/kvantovaya-himiya/index.md",sourceDirName:"kvantovaya-himiya",slug:"/kvantovaya-himiya/",permalink:"/kvantovaya-himiya/",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u044d\u0442\u043e \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0432\u0430\u043d\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438."},sidebar:"kvantovaya",next:{title:"\u041f\u043e\u0441\u0442\u0443\u043b\u0430\u0442\u044b \u043a\u0432\u0430\u043d\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438",permalink:"/kvantovaya-himiya/postulaty-kvantovoj-mekhaniki"}},m={},f=[],p={toc:f};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u043a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f-\u0445\u0438\u043c\u0438\u044f"},"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041a\u0432\u0430\u043d\u0442\u043e\u0432\u0430\u044f \u0445\u0438\u043c\u0438\u044f")," \u2014 \u044d\u0442\u043e \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0441\u0442\u0440\u043e\u0435\u043d\u0438\u0435 \u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u0445\u0438\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043a\u0432\u0430\u043d\u0442\u043e\u0432\u043e\u0439 \u043c\u0435\u0445\u0430\u043d\u0438\u043a\u0438."),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);