"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},i="planckToDecimal",l={unversionedId:"frontend/utils/helpers/planck-to-decimal",id:"frontend/utils/helpers/planck-to-decimal",title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal.",source:"@site/docs/frontend/utils/helpers/planck-to-decimal.md",sourceDirName:"frontend/utils/helpers",slug:"/frontend/utils/helpers/planck-to-decimal",permalink:"/frontend/utils/helpers/planck-to-decimal",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/helpers/planck-to-decimal.md",tags:[],version:"current",frontMatter:{title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},sidebar:"reference",previous:{title:"System::ExtrinsicFailed",permalink:"/frontend/utils/events/system/extrinsic-failed"},next:{title:"planckToDecimalFormatted",permalink:"/frontend/utils/helpers/planck-to-decimal-formatted"}},c={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plancktodecimal"},"planckToDecimal"),(0,a.kt)("p",null,"Convert a planck number (large integer) to a decimal. Blockchains do not use floating\npoint values for tokens. Instead they a large integer for the value and a second integer\nto define how the decimals. For instance, Contracts on Rococo uses 12 decimals for the\nnative token ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC"),". Therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"1 ROC")," equals ",(0,a.kt)("inlineCode",{parentName:"p"},"1_000_000_000_000"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"1 * 10^12"),". These\nvalues are difficult for humans to read so we created ",(0,a.kt)("inlineCode",{parentName:"p"},"planckToDecimal")," to easily convert\nlarge values to human-readible ones."),(0,a.kt)("p",null,"This function will look up the chain's decimal count and do the math for you."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { planckToDecimal } from 'useink/utils';\nimport { getBalance } from 'useink/core';\n\nconst bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000\nconst floatingPointVersion = planckToDecimal(apiPromise, bn);\n\nconsole.log(floatingPointVersion); // e.g. 1.5\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"number | undefined\n")))}d.isMDXComponent=!0}}]);