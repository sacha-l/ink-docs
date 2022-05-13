"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9578],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,f=m["".concat(l,".").concat(g)]||m[g]||s[g]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2517:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Working with Mapping",slug:"/datastructures/mapping"},l=void 0,p={unversionedId:"datastructures/mapping",id:"datastructures/mapping",title:"Working with Mapping",description:"In this section we want to demonstrate how to work with ink! Mapping.",source:"@site/docs/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/datastructures/mapping",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/mapping.md",tags:[],version:"current",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Overview",permalink:"/datastructures/overview"},next:{title:"Spread Storage Layout",permalink:"/datastructures/spread-storage-layout"}},u={},s=[{value:"Initializing a Mapping",id:"initializing-a-mapping",level:2}],m={toc:s};function g(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section we want to demonstrate how to work with ink! ",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_storage/struct.Mapping.html"},(0,i.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,i.kt)("p",null,"Here is an example of a mapping from a user to a number:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(SpreadAllocate)]\npub struct MyContract {\n    // Store a mapping from AccountIds to a u32\n    map: ink_storage::Mapping<AccountId, u32>,\n}\n")),(0,i.kt)("p",null,'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets their own number. '),(0,i.kt)("h2",{id:"initializing-a-mapping"},"Initializing a Mapping"),(0,i.kt)("p",null,"In order to correctly initialize a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping")," we need two things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An implementation of the ",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_storage/traits/trait.SpreadAllocate.html"},(0,i.kt)("inlineCode",{parentName:"a"},"SpreadAllocate"))," trait on our storage struct"),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/ink/ink_lang/utils/fn.initialize_contract.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ink_lang::utils::initalize_contract"))," initializer")),(0,i.kt)("p",null,"Not initializing storage before you use it is a common mistake that can break your smart\ncontract. If you do not initialize your ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s correctly you may end up with\ndifferent ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s operating on the same set of storage entries \ud83d\ude31."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"\n#![cfg_attr(not(feature = \"std\"), no_std)]\n\nuse ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct MyContract {\n        // Store a mapping from AccountIds to a u32\n        map: ink_storage::Mapping<AccountId, u32>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(count: u32) -> Self {\n            // This call is required in order to correctly initialize the\n            // `Mapping`s of our contract.\n            ink_lang::utils::initialize_contract(|contract: &mut Self| {\n                let caller = Self::env().caller();\n                contract.map.insert(&caller, &count);\n            })\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            // Even though we're not explicitly initializing the `Mapping`,\n            // we still need to call this\n            ink_lang::utils::initialize_contract(|_| {})\n        }\n\n        // Grab the number at the caller's AccountID, if it exists\n        #[ink(message)]\n        pub fn get(&self) -> u32 {\n            let caller = Self::env().caller();\n            self.map.get(&caller).unwrap_or_default()\n        }\n    }\n}\n")))}g.isMDXComponent=!0}}]);