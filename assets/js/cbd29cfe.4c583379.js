"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[386],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||c;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const c={title:"decodeCallResult",hide_title:!0,description:"Decode the result of a contract call"},a="decodeCallResult",l={unversionedId:"frontend/core/contracts/decode-call-result",id:"frontend/core/contracts/decode-call-result",title:"decodeCallResult",description:"Decode the result of a contract call",source:"@site/docs/frontend/core/contracts/decode-call-result.md",sourceDirName:"frontend/core/contracts",slug:"/frontend/core/contracts/decode-call-result",permalink:"/frontend/core/contracts/decode-call-result",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/contracts/decode-call-result.md",tags:[],version:"current",frontMatter:{title:"decodeCallResult",hide_title:!0,description:"Decode the result of a contract call"},sidebar:"reference",previous:{title:"call",permalink:"/frontend/core/contracts/call"},next:{title:"decodeError",permalink:"/frontend/core/contracts/decode-error"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Returns",id:"returns",level:2}],d={toc:i},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decodecallresult"},"decodeCallResult"),(0,o.kt)("p",null,"A function to decode the response of a ",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/contracts/call"},"call")," result (or\nresults of ",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall")," and similar hooks)."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { decodeCallResult, call } from 'useink/core';\n\nconst result = await call<boolean>(contract, ...additionalArgs);\n\ndecodeCallResult(result); // { Ok: true, value: boolean } | { Ok: false, error: DispatchError }\n")),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{ Ok: true, value: T } | { Ok: false, error: DispatchError }\n")))}p.isMDXComponent=!0}}]);