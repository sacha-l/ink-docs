"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4033],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),d=u(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,c(c({ref:e},l),{},{components:n})):r.createElement(y,c({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5520:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),c=["components"],i={title:"Instantiate a Contract",slug:"/cargo-contract-cli/instantiate"},s=void 0,u={unversionedId:"cargo-contract/instantiate",id:"cargo-contract/instantiate",isDocsHomePage:!1,title:"Instantiate a Contract",description:"TODO",source:"@site/docs/cargo-contract/instantiate.md",sourceDirName:"cargo-contract",slug:"/cargo-contract-cli/instantiate",permalink:"/ink-docs/cargo-contract-cli/instantiate",editUrl:"https://github.com/ink-docs/edit/master/docs/cargo-contract/instantiate.md",version:"current",frontMatter:{title:"Instantiate a Contract",slug:"/cargo-contract-cli/instantiate"}},l=[],p={toc:l};function d(t){var e=t.components,n=(0,a.Z)(t,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"TODO"),(0,o.kt)("p",null,"I am trying to deploy and instantiate a contract using a custom-built cargo-contract with the extrinsics feature. The 'deploy' and 'instantiate' commands require a \"secret key uri\" and \"secret key password\" that I don't know how to find for my canvas devnet. Can somebody help me understand what these are and how to obtain them?"),(0,o.kt)("p",null,"You probably just need to the key for some account with enough funds to deploy and instantiate the contract...I don't think the key is specific to the node in any way\nIf you're running the Canvas node in dev mode, these are the accounts that are pre-funded ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76"},"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76"),"\nPeople typically use Alice...her information is here ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey#well-known-keys"},"https://substrate.dev/docs/en/knowledgebase/integrate/subkey#well-known-keys")," I guess you'd just leave the password blank\nSo the secret key URI will be bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice I think"))}d.isMDXComponent=!0}}]);