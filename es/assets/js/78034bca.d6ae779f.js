"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},i=void 0,s={unversionedId:"macros-attributes/anonymous",id:"version-5.x/macros-attributes/anonymous",title:"#[ink(anonymous)]",description:"Aplicable a los eventos de ink!.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/anonymous.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/anonymous",permalink:"/es/5.x/macros-attributes/anonymous",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/anonymous.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},sidebar:"reference",previous:{title:"#[ink::contract]",permalink:"/es/5.x/macros-attributes/contract"},next:{title:"#[ink(constructor)]",permalink:"/es/5.x/macros-attributes/constructor"}},l={},c=[{value:"Example",id:"example",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/text/anon.svg",className:"titlePic"}),(0,o.kt)("p",null,"Aplicable a los eventos de ink!."),(0,o.kt)("p",null,"Le dice al codificador de ink! que trate a los eventos de ink! como an\xf3nimos lo que omite la firma del evento como tema al emitir.\nMuy similar a los eventos an\xf3nimos de Solidity."),(0,o.kt)("p",null,"Los eventos An\xf3nimos tienen una semantica similar a los de Solidity en que su\nfirma del evento no sera incluida en los topics de serializaci\xf3n del evento\npara reducir la sobrecarga de emisi\xf3n de eventos. Esto es especialmente \xfatil para\nlos eventos definidos por los usuarios."),(0,o.kt)("p",null,"La firma de los eventos es por defecto uno de los topics del evento, excepto\nsi anotas el evento con ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(anonymous)]"),".\nEl atributo implica que no es posible filtrar eventos an\xf3nimos espec\xedficos por el nombre."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\n#[ink(anonymous)]\npub struct MyEvent {\n    #[ink(topic)]\n    field_1: i32,\n    field_2: bool,\n}\n")))}p.isMDXComponent=!0}}]);