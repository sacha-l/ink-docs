"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8972],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(m,i(i({ref:e},d),{},{components:n})):r.createElement(m,i({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:a,i[1]=o;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},88493:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events"},i="Contracts::Instantiated",o={unversionedId:"frontend/utils/events/contracts/instantiated",id:"frontend/utils/events/contracts/instantiated",title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events",source:"@site/docs/frontend/utils/events/contracts/instantiated.md",sourceDirName:"frontend/utils/events/contracts",slug:"/frontend/utils/events/contracts/instantiated",permalink:"/es/frontend/utils/events/contracts/instantiated",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/events/contracts/instantiated.md",tags:[],version:"current",frontMatter:{title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events"},sidebar:"reference",previous:{title:"formatEventName",permalink:"/es/frontend/utils/events/format-event-name"},next:{title:"System::ExtrinsicFailed",permalink:"/es/frontend/utils/events/system/extrinsic-failed"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],d={toc:l},u="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contractsinstantiated"},"Contracts::Instantiated"),(0,a.kt)("p",null,"Utilties for use with ContractInstantiated events that are emitted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"In Block")," phase\nof a transaction. This is emitted during the successful deployment of a contract."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx"},"example in the playground dApp"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { isContractInstantiatedEvent, asContractInstantiatedEvent } from 'useink/utils';\n\nconsole.log(isContractInstantiatedEvent(eventRecord)) // true or false\n\nconst instantiated = asContractInstantiatedEvent(eventRecord);\nconsole.log(instantiated?.contractAddress) // string | undefined\nconsole.log(instantiated?.deployer) // string | undefined\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// asContractInstantiatedEvent\n{\n  name: string;\n  deployer: string;\n  contractAddress: string;\n}\n")))}p.isMDXComponent=!0}}]);