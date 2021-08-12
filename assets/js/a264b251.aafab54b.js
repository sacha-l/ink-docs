"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7661],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,d=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},m),{},{components:n})):r.createElement(d,a({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7114:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"#[ink(impl)]",slug:"/macros-attributes/impl"},c=void 0,l={unversionedId:"macros-attributes/implementation",id:"macros-attributes/implementation",isDocsHomePage:!1,title:"#[ink(impl)]",description:"This attribute supports a niche case that is rarely needed.",source:"@site/docs/macros-attributes/implementation.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/impl",permalink:"/ink-docs/macros-attributes/impl",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/implementation.md",version:"current",frontMatter:{title:"#[ink(impl)]",slug:"/macros-attributes/impl"},sidebar:"reference",previous:{title:"#[ink(event)]",permalink:"/ink-docs/macros-attributes/event"},next:{title:"#[ink(message)]",permalink:"/ink-docs/macros-attributes/message"}},m=[{value:"Example",id:"example",children:[]}],u={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This attribute supports a niche case that is rarely needed."),(0,o.kt)("p",null,"Can be applied on ink! implementation blocks in order to make ink! aware\nof them. This is useful if such an implementation block doesn't contain\nany other ink! attributes, so it would be flagged by ink! as a Rust item.\nAdding ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(impl)]")," on such implementation blocks makes them treated\nas ink! implementation blocks thus allowing to access the environment\netc."),(0,o.kt)("p",null,"Note that ink! messages and constructors still need to be explicitly\nflagged as such."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"An implementation block can be defined as a trait implementation\nfor the ink! storage struct using the ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(impl)]")," annotation \u2012 even\nif none of its interior items have any ink! specific attributes on them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use core::convert::TryFrom;\nuse ink_lang_ir as ir;\n\n#[ink::contract]\nmod my_module {\n    #[ink(storage)]\n    pub struct MyStorage {\n        /* storage fields */\n    }\n\n    #[ink(impl)]\n    impl MyStorage {\n        fn my_method(&self) -> i32 {\n            /* method implementation */\n        }\n    }\n\n    impl MyStorage {\n      #[ink(constructor)]\n      pub fn my_constructor() -> Self {\n          /* constructor implementation */\n      }\n\n      #[ink(message)]\n      pub fn my_message(&self) {\n          /* message implementation */\n      }\n    }\n}\n")))}p.isMDXComponent=!0}}]);