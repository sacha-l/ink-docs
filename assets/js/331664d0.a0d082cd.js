"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2854],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:e},c),{},{components:n})):r.createElement(m,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5926:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"Getting Started",slug:"/frontend/utils",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more."},a="Getting Started with useink/utils",l={unversionedId:"frontend/utils/getting-started",id:"frontend/utils/getting-started",title:"Getting Started",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more.",source:"@site/docs/frontend/utils/getting-started.md",sourceDirName:"frontend/utils",slug:"/frontend/utils",permalink:"/frontend/utils",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/frontend/utils",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more."},sidebar:"reference",previous:{title:"toNotificationLevel",permalink:"/frontend/notifications/toNotificationLevel"},next:{title:"\u26cf\ufe0f Pick Helpers",permalink:"/frontend/utils/pick"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Configure tsconfig.json",id:"configure-tsconfigjson",level:2},{value:"Add <code>&lt;NotificationProvider /&gt;</code>",id:"add-notificationprovider-",level:2}],c={toc:u},p="wrapper";function d(t){let{components:e,...n}=t;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-useinkutils"},"Getting Started with useink/utils"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useink/utils")," is an extension of ",(0,i.kt)("inlineCode",{parentName:"p"},"useink")," that provides general utility functions for\nformatting balances, working with Big Numbers and decimals, converting data types (e.g.\nhex to string), and more. ",(0,i.kt)("inlineCode",{parentName:"p"},"useink/utils")," currently exports\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/util/src"},"@polkadot/utils"),",\nbut we will be adding new utility functions in the future."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"You must first ",(0,i.kt)("a",{parentName:"p",href:"/frontend/getting-started#installation"},"install useink"),".\nThen you can import utils with ",(0,i.kt)("inlineCode",{parentName:"p"},"import * as U from 'useink/utils'"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/common/tree/master/packages/util/src"},"@polkadot/utils"),"\nfor a list of all utility functions."),(0,i.kt)("h2",{id:"configure-tsconfigjson"},"Configure tsconfig.json"),(0,i.kt)("p",null,"You must set ",(0,i.kt)("inlineCode",{parentName:"p"},"moduleResolution")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"nodenext")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bundler")," inside of your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),".\nThis feature allows your application to discover the ",(0,i.kt)("inlineCode",{parentName:"p"},"useink/utils")," import paths defined\nin the ",(0,i.kt)("strong",{parentName:"p"},"useink")," ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext", // or `bundler`\n  }\n}\n')),(0,i.kt)("h2",{id:"add-notificationprovider-"},"Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"<NotificationProvider />")))}d.isMDXComponent=!0}}]);