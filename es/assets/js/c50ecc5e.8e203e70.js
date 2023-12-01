"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53048:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},i=void 0,c={unversionedId:"macros-attributes/topic",id:"macros-attributes/topic",title:"#[ink(topic)]",description:"Aplicado a los campos de los tipos de los eventos ink! para indicar que son temas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/topic.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/topic",permalink:"/es/macros-attributes/topic",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/topic.md",tags:[],version:"current",frontMatter:{title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(storage)]",permalink:"/es/macros-attributes/storage"},next:{title:"#[ink::chain_extension]",permalink:"/es/macros-attributes/chain-extension"}},s={},p=[{value:"Ejemplo",id:"ejemplo",level:2}],l={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/text/topic.svg",className:"titlePic"}),(0,o.kt)("p",null,"Aplicado a los campos de los tipos de los eventos ink! para indicar que son temas."),(0,o.kt)("p",null,"Le dice al codegen de ink! que para proporcionar un hash de tema para el campo dado. Cada evento de ink! solo puede tener un n\xfamero\nlimitado de dicho campo de tema. La sem\xe1ntica es similar a los argumentos de eventos indexados en Solidity."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n}\n")))}m.isMDXComponent=!0}}]);