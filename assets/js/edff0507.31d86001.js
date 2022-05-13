"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9334],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2714:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Storing Values",slug:"/basics/storing-values"},c=void 0,u={unversionedId:"basics/storing-values",id:"basics/storing-values",title:"Storing Values",description:"Here is how you store simple values in storage:",source:"@site/docs/basics/storing-values.md",sourceDirName:"basics",slug:"/basics/storing-values",permalink:"/basics/storing-values",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/storing-values.md",tags:[],version:"current",frontMatter:{title:"Storing Values",slug:"/basics/storing-values"},sidebar:"reference",previous:{title:"Contract Template",permalink:"/basics/contract-template"},next:{title:"Reading Values from Storage",permalink:"/basics/reading-values"}},l={},p=[{value:"Supported Types",id:"supported-types",level:2},{value:"Initializing Storage in Constructors",id:"initializing-storage-in-constructors",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is how you store simple values in storage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n")),(0,o.kt)("h2",{id:"supported-types"},"Supported Types"),(0,o.kt)("p",null,"Substrate contracts may store types that are encodable and decodable with\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-codec"},"Parity Codec")," which includes most Rust common data\ntypes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"u{8,16,32,64,128}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"i{8,16,32,64,128}"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"String"),", tuples, and arrays."),(0,o.kt)("p",null,"ink! provides Substrate specific types like ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountId"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Balance"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Hash")," to smart contracts as if\nthey were primitive types. "),(0,o.kt)("p",null,"ink! also provides a ",(0,o.kt)("inlineCode",{parentName:"p"},"Mapping")," storage type. You can read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink-docs/datastructures/mapping"},"here"),"."),(0,o.kt)("p",null,"Here is an example of how you would store an ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// We are importing the default ink! types\nuse ink_lang as ink;\n\n#[ink::contract]\nmod MyContract {\n\n    // Our struct will use those default ink! types\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some AccountId\n        my_account: AccountId,\n        // Store some Balance\n        my_balance: Balance,\n    }\n    /* --snip-- */\n}\n")),(0,o.kt)("h2",{id:"initializing-storage-in-constructors"},"Initializing Storage in Constructors"),(0,o.kt)("p",null,"Constructors are how values get initialized.\nEvery ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:"),(0,o.kt)("p",null,"Note that if you have a contract whose storage contains ",(0,o.kt)("inlineCode",{parentName:"p"},"Mapping'"),"s you will need to use\n",(0,o.kt)("inlineCode",{parentName:"p"},"ink_lang::utils::initialize_contract")," in your constructor. See the\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink-docs/datastructures/mapping"},(0,o.kt)("inlineCode",{parentName:"a"},"Mapping")," documentation")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n")))}d.isMDXComponent=!0}}]);