"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8148],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,d=p["".concat(s,".").concat(b)]||p[b]||m[b]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"chainTokenSymbol",hide_title:!0,description:'Get a chain\'s token symbol as a string. e.g. "SBY"'},i="chainTokenSymbol",c={unversionedId:"frontend/core/substrate/chain-token-symbol",id:"frontend/core/substrate/chain-token-symbol",title:"chainTokenSymbol",description:'Get a chain\'s token symbol as a string. e.g. "SBY"',source:"@site/docs/frontend/core/substrate/chain-token-symbol.md",sourceDirName:"frontend/core/substrate",slug:"/frontend/core/substrate/chain-token-symbol",permalink:"/frontend/core/substrate/chain-token-symbol",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/substrate/chain-token-symbol.md",tags:[],version:"current",frontMatter:{title:"chainTokenSymbol",hide_title:!0,description:'Get a chain\'s token symbol as a string. e.g. "SBY"'},sidebar:"reference",previous:{title:"chainDecimals",permalink:"/frontend/core/substrate/chain-decimals"},next:{title:"Getting Started",permalink:"/frontend/chains"}},s={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chaintokensymbol"},"chainTokenSymbol"),(0,o.kt)("p",null,'Get a chain\'s token symbol as a string. e.g. "SBY"'),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { chainTokenSymbol } from 'useink/core'\n\nconst symbol = chainTokenSymbol('shibuya-testnet');\n\nconsole.log(symbol); // e.g. \"SBY\"\n")),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"string | undefined\n")))}m.isMDXComponent=!0}}]);