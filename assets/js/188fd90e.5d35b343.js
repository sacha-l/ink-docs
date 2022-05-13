"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4554],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,c(c({ref:e},l),{},{components:n})):r.createElement(d,c({ref:e},l))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1209:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},u=void 0,s={unversionedId:"macros-attributes/constructor",id:"macros-attributes/constructor",title:"#[ink(constructor)]",description:"Applicable to a method.",source:"@site/docs/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/macros-attributes/constructor",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/constructor.md",tags:[],version:"current",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/macros-attributes/anonymous"},next:{title:"#[ink(event)]",permalink:"/macros-attributes/event"}},l={},p=[{value:"Example",id:"example",level:2}],m={toc:p};function f(t){var e=t.components,n=(0,o.Z)(t,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Applicable to a method."),(0,a.kt)("p",null,"Flags a method (or multiple methods) for the ink! storage struct as constructor making it available to the API for instantiating the contract."),(0,a.kt)("p",null,"There must be at least one ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," defined method."),(0,a.kt)("p",null,"Methods flagged with ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n")))}f.isMDXComponent=!0}}]);