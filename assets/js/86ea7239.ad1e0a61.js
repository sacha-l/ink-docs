"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8415],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:e},s),{},{components:n})):r.createElement(d,o({ref:e},s))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},44006:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Working with Mapping",slug:"/datastructures/mapping"},o=void 0,l={unversionedId:"datastructures/mapping",id:"version-3.x/datastructures/mapping",title:"Working with Mapping",description:"In this section we want to demonstrate how to work with ink! Mapping.",source:"@site/versioned_docs/version-3.x/datastructures/mapping.md",sourceDirName:"datastructures",slug:"/datastructures/mapping",permalink:"/3.x/datastructures/mapping",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/mapping.md",tags:[],version:"3.x",frontMatter:{title:"Working with Mapping",slug:"/datastructures/mapping"},sidebar:"reference",previous:{title:"Overview",permalink:"/3.x/datastructures/overview"},next:{title:"Spread Storage Layout",permalink:"/3.x/datastructures/spread-storage-layout"}},p={},c=[{value:"Initializing a Mapping",id:"initializing-a-mapping",level:2}],s={toc:c},u="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section we want to demonstrate how to work with ink! ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,a.kt)("p",null,"Here is an example of a mapping from a user to a number:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(SpreadAllocate)]\npub struct MyContract {\n    // Store a mapping from AccountIds to a u32\n    map: ink_storage::Mapping<AccountId, u32>,\n}\n")),(0,a.kt)("p",null,'This means that for a given key, you can store a unique instance of a value type. In this\ncase, each "user" gets their own number.'),(0,a.kt)("h2",{id:"initializing-a-mapping"},"Initializing a Mapping"),(0,a.kt)("p",null,"In order to correctly initialize a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," we need two things:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"An implementation of the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadAllocate.html"},(0,a.kt)("inlineCode",{parentName:"a"},"SpreadAllocate"))," trait on our storage struct"),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/ink_lang/3.3.1/ink_lang/utils/fn.initialize_contract.html"},(0,a.kt)("inlineCode",{parentName:"a"},"ink_lang::utils::initialize_contract"))," initializer")),(0,a.kt)("p",null,"Not initializing storage before you use it is a common mistake that can break your smart\ncontract. If you do not initialize your ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s correctly you may end up with\ndifferent ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping"),"'s operating on the same set of storage entries \ud83d\ude31."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"\n#![cfg_attr(not(feature = \"std\"), no_std)]\n\nuse ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n    use ink_storage::traits::SpreadAllocate;\n\n    #[ink(storage)]\n    #[derive(SpreadAllocate)]\n    pub struct MyContract {\n        // Store a mapping from AccountIds to a u32\n        map: ink_storage::Mapping<AccountId, u32>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(count: u32) -> Self {\n            // This call is required in order to correctly initialize the\n            // `Mapping`s of our contract.\n            ink_lang::utils::initialize_contract(|contract: &mut Self| {\n                let caller = Self::env().caller();\n                contract.map.insert(&caller, &count);\n            })\n        }\n\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            // Even though we're not explicitly initializing the `Mapping`,\n            // we still need to call this\n            ink_lang::utils::initialize_contract(|_| {})\n        }\n\n        // Grab the number at the caller's AccountID, if it exists\n        #[ink(message)]\n        pub fn get(&self) -> u32 {\n            let caller = Self::env().caller();\n            self.map.get(&caller).unwrap_or_default()\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);