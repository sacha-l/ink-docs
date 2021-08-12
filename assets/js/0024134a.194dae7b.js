"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5226],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),f=d(n),m=a,u=f["".concat(p,".").concat(m)]||f[m]||c[m]||i;return n?r.createElement(u,l(l({ref:e},s),{},{components:n})):r.createElement(u,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=f;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4935:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"ink! vs. Solidity",slug:"/ink-vs-solidity"},p=void 0,d={unversionedId:"intro/ink-vs-solidity",id:"intro/ink-vs-solidity",isDocsHomePage:!1,title:"ink! vs. Solidity",description:"Here is a brief comparison of features between ink! and Solidity:",source:"@site/docs/intro/ink-vs-solidity.md",sourceDirName:"intro",slug:"/ink-vs-solidity",permalink:"/ink-docs/ink-vs-solidity",editUrl:"https://github.com/ink-docs/edit/master/docs/intro/ink-vs-solidity.md",version:"current",frontMatter:{title:"ink! vs. Solidity",slug:"/ink-vs-solidity"},sidebar:"reference",previous:{title:"How it Works \u2012 Substrate",permalink:"/ink-docs/how-it-works"},next:{title:"Setup",permalink:"/ink-docs/getting-started/setup"}},s=[],c={toc:s};function f(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here is a brief comparison of features between ink! and Solidity:"),(0,i.kt)("div",{class:"comparison"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"left"},"ink!"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Solidity"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Virtual Machine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Any Wasm VM"),(0,i.kt)("td",{parentName:"tr",align:"left"},"EVM")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Encoding"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wasm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"EVM Byte Code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Language"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rust"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standalone")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Overflow Protection"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Enabled by default"),(0,i.kt)("td",{parentName:"tr",align:"left"},"None")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Constructor Functions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Multiple"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Single")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Tooling"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Anything that supports Rust"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Custom")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Versioning"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Semantic"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Semantic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Has Metadata?"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Multi-File Project"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Planned"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Storage Entries"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Variable"),(0,i.kt)("td",{parentName:"tr",align:"left"},"256 bits")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Supported Types"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Docs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Docs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Has Interfaces?"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes (Rust Traits)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Yes"))))))}f.isMDXComponent=!0}}]);