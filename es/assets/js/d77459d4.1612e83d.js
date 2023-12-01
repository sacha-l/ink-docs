"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1866],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Aplicaciones Descentralizadas",slug:"/examples/dapps",hide_title:!0},o=void 0,s={unversionedId:"examples/dapps",id:"examples/dapps",title:"Aplicaciones Descentralizadas",description:"Aqu\xed se\xf1alaremos algunos ejemplos de aplicaciones descentralizadas",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/examples/dapps.md",sourceDirName:"examples",slug:"/examples/dapps",permalink:"/es/examples/dapps",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/examples/dapps.md",tags:[],version:"current",frontMatter:{title:"Aplicaciones Descentralizadas",slug:"/examples/dapps",hide_title:!0},sidebar:"reference",previous:{title:"Contratos Inteligentes",permalink:"/es/examples/smart-contracts"},next:{title:"Kickstart your project!",permalink:"/es/inkubator-overview"}},l={},p=[{value:"INK!athon",id:"inkathon",level:2},{value:"link!",id:"link",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/balloons-2.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"aplicaciones-descentralizadas"},"Aplicaciones Descentralizadas"),(0,r.kt)("p",null,"Aqu\xed se\xf1alaremos algunos ejemplos de aplicaciones descentralizadas\nfull-stack.\nEstos pueden servir de inspiraci\xf3n para saber c\xf3mo crear un frontend\npara tu contrato inteligente."),(0,r.kt)("p",null,"Dos librerias populares para la construcci\xf3n de frontends son:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js/api"))," una API de Typescript de bajo nivel."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/use-inkathon"},"useInkathon")," una librer\xeda de hooks para React.")),(0,r.kt)("h2",{id:"inkathon"},"INK!athon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://inkathon.xyz/"},"INK!athon")," es una plantilla de proyecto de una aplicaci\xf3n descentralizada\nfull-stack que consiste en un contrato inteligente ink! y un frontend React usando la librer\xeda de hooks ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/scio-labs/use-inkathon"},"useInkathon"),"."),(0,r.kt)("h2",{id:"link"},"link!"),(0,r.kt)("p",null,"link! es una aplicaci\xf3n descentralizada que acorta URLs. Consiste en un frontend y un contrato ink!."),(0,r.kt)("p",null,"link! utiliza ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js/api"))," por detr\xe1s. El c\xf3digo fuente completo (contrato + frontend) se encuentra aqu\xed: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/link"},"https://github.com/paritytech/link"),"."),(0,r.kt)("p",null,"Puedes ver una demo online de la aplicaci\xf3n aqu\xed: ",(0,r.kt)("a",{parentName:"p",href:"https://tiny.ink"},"https://tiny.ink"),"."),(0,r.kt)("p",null,"Para crear nuevos enlaces cortos necesitar\xe1s tokens ",(0,r.kt)("inlineCode",{parentName:"p"},"ROC")," de nuestra testnet. Consulte ",(0,r.kt)("a",{parentName:"p",href:"/testnet"},"aqu\xed")," para saber c\xf3mo conseguirlos."))}d.isMDXComponent=!0}}]);