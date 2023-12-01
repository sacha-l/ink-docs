"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4246],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||g[d]||i;return t?n.createElement(f,c(c({ref:r},p),{},{components:t})):n.createElement(f,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[u]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5614:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={title:"getRegistryError",hide_title:!0,description:"Get the RegistryError if it exists"},c="getRegistryError",a={unversionedId:"frontend/core/contracts/get-registry-error",id:"frontend/core/contracts/get-registry-error",title:"getRegistryError",description:"Get the RegistryError if it exists",source:"@site/docs/frontend/core/contracts/get-registry-error.md",sourceDirName:"frontend/core/contracts",slug:"/frontend/core/contracts/get-registry-error",permalink:"/frontend/core/contracts/get-registry-error",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/contracts/get-registry-error.md",tags:[],version:"current",frontMatter:{title:"getRegistryError",hide_title:!0,description:"Get the RegistryError if it exists"},sidebar:"reference",previous:{title:"decodeError",permalink:"/frontend/core/contracts/decode-error"},next:{title:"toAbiMessage",permalink:"/frontend/core/contracts/to-contract-abi-message"}},s={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Type",id:"return-type",level:2}],p={toc:l},u="wrapper";function g(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getregistryerror"},"getRegistryError"),(0,o.kt)("p",null,"Return a RegistryError if a result errored in one of many Substrate pallets, or undefined if not."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink/blob/8b8e8383f0adbe1054a3aec7f300131f09969a18/core/contracts/decodeError.ts#L15"},"dispatchError"),"\ncode implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { call, getRegistryError } from 'useink/core';\n\nconst result = await call(contract, ...additionalArgs);\n\nif (!result.ok) {\n  const registryError = getRegistryError(result, { contract });\n}\n\n")),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface RegistryError {\n    args: string[];\n    docs: string[];\n    index: number;\n    method: string;\n    name: string;\n    section: string;\n}\n")))}g.isMDXComponent=!0}}]);