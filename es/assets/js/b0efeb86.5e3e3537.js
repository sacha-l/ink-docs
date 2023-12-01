"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(l,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},91337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},i=void 0,s={unversionedId:"datastructures/spread-storage-layout",id:"version-3.x/datastructures/spread-storage-layout",title:"Spread Storage Layout",description:"Storage Organization",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/datastructures/spread-storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/spread-storage-layout",permalink:"/es/3.x/datastructures/spread-storage-layout",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/spread-storage-layout.md",tags:[],version:"3.x",frontMatter:{title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},sidebar:"reference",previous:{title:"Working with Mapping",permalink:"/es/3.x/datastructures/mapping"},next:{title:"Custom Data Structures",permalink:"/es/3.x/datastructures/custom-datastructure"}},l={},c=[{value:"Storage Organization",id:"storage-organization",level:3},{value:"Spreading",id:"spreading",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"storage-organization"},"Storage Organization"),(0,n.kt)("p",null,"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/kv-3.x.svg",alt:"Storage Organization: Layout"})),(0,n.kt)("p",null,"ink!'s storage operates by storing and loading entries into and from a single storage\ncell. At the moment there is no way to customize this behaviour. Depending on the data\nwe're dealing with, this can end up being good or bad."),(0,n.kt)("p",null,"For example, if we have a somewhat small ",(0,n.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec")," loading all the elements\nat the same time can be advantegous - especially if we expect our message to interact\nwith most of them in a single call."),(0,n.kt)("p",null,"On the other hand, this can be problematic if we're loading a large ",(0,n.kt)("inlineCode",{parentName:"p"},"Vec")," and only\noperating on a few elements."),(0,n.kt)("h3",{id:"spreading"},"Spreading"),(0,n.kt)("p",null,"ink! spreads information to as many cells as possible. For example if you have the\nfollowing ",(0,n.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct every field will live in its own single storage cell.\nNote that for ",(0,n.kt)("inlineCode",{parentName:"p"},"b")," all 32 bytes will share the same cell!"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct Spread {\n    a: i32,\n    b: [u8; 32],\n}\n")),(0,n.kt)("p",null,"The following schema depicts the storage layout for a vector with three elements,\npersisted to storage in a spread layout."),(0,n.kt)("div",{class:"schema"},(0,n.kt)("img",{src:"/img/spread.svg",alt:"Storage Organization: Spreading"})))}d.isMDXComponent=!0}}]);