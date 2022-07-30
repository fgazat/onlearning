"use strict";(self.webpackChunkonlearning=self.webpackChunkonlearning||[]).push([[1659],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,d=m["".concat(l,".").concat(p)]||m[p]||f[p]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17661:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(67294),i=n(34334),o=n(44544),a=n(83699),c=n(2735),l=n(97325),u="cardContainer_fWXF",s="cardTitle_rnsV",f="cardDescription_PWke";function m(e){var t=e.href,n=e.children;return r.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",u)},n)}function p(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",s),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.Z)("text--truncate",f),title:a},a))}function d(e){var t=e.item,n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t,n=e.item,i=(0,c.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(p,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function h(e){var t=e.item;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(d,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.items,n=e.className;return r.createElement("section",{className:(0,i.Z)("row",n)},function(e){return e.filter((function(e){return"category"!==e.type||!!(0,o.Wl)(e)}))}(t).map((function(e,t){return r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e}))})))}},14617:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(17661),c=n(44544),l=["components"],u={sidebar_label:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0444\u0430\u0437."},s="\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f",f={unversionedId:"kolloidnaya-himiya/index",id:"kolloidnaya-himiya/index",title:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0444\u0430\u0437.",source:"@site/docs/kolloidnaya-himiya/index.md",sourceDirName:"kolloidnaya-himiya",slug:"/kolloidnaya-himiya/",permalink:"/kolloidnaya-himiya/",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f",description:"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0444\u0430\u0437."},sidebar:"kolloidnaya",next:{title:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u043e\u0439 \u0445\u0438\u043c\u0438\u0438",permalink:"/kolloidnaya-himiya/opredeleniya"}},m={},p=[],d={toc:p};function y(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u043a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f-\u0445\u0438\u043c\u0438\u044f"},"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041a\u043e\u043b\u043b\u043e\u0438\u0434\u043d\u0430\u044f \u0445\u0438\u043c\u0438\u044f (\u03ba\u03cc\u03bb\u03bb\u03b1\u2014 \u043a\u043b\u0435\u0439)")," \u2014 \u0440\u0430\u0437\u0434\u0435\u043b \u0445\u0438\u043c\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0437\u0443\u0447\u0430\u0435\u0442 \u0434\u0438\u0441\u043f\u0435\u0440\u0441\u043d\u044b\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0438 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u044f\u0432\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u0433\u0440\u0430\u043d\u0438\u0446\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0430 \u0444\u0430\u0437."),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}y.isMDXComponent=!0}}]);