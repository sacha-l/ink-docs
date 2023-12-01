"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,h=p["".concat(l,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Why Rust for Smart Contracts?",slug:"/why-rust-for-smart-contracts"},s=void 0,i={unversionedId:"intro/why-rust",id:"version-3.x/intro/why-rust",title:"Why Rust for Smart Contracts?",description:"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.",source:"@site/versioned_docs/version-3.x/intro/why-rust.md",sourceDirName:"intro",slug:"/why-rust-for-smart-contracts",permalink:"/3.x/why-rust-for-smart-contracts",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/intro/why-rust.md",tags:[],version:"3.x",frontMatter:{title:"Why Rust for Smart Contracts?",slug:"/why-rust-for-smart-contracts"},sidebar:"reference",previous:{title:"Welcome!",permalink:"/3.x/"},next:{title:"Why WebAssembly for Smart Contracts?",permalink:"/3.x/why-webassembly-for-smart-contracts"}},l={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.\nIf this doesn't already convince you, you find many more good reasons here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Rust is an ideal smart contract language:")," It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn\u2019t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Rust ecosystem:")," You gain from all of support available to the Rust ecosystem for free. As the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Tooling:")," Because ink! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box. Same goes for code formatting and syntax highlighting in most modern text editors. Also Rust has an integrated test and benchmark runner,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"No overhead:")," Minimal runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Safe & Efficient:")," Zero-cost & safe abstractions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Productive:")," Cargo + ",(0,a.kt)("a",{href:"https://crates.io"},"crates.io")," Ecosystem."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"1st class Wasm:")," Rust provides the first class support for the WebAssembly."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{class:"highlight"},"Small Size:")," In the space-constrained blockchain world size is important. The Rust compiler is a great help for that, since it reorders struct fields in order to make each type as small as possible. Thus Rust data structures are very compact, in many cases even more compact than in C.")))}m.isMDXComponent=!0}}]);