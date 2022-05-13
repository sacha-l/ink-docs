"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5107],{3905:function(n,t,e){e.d(t,{Zo:function(){return p},kt:function(){return f}});var i=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?r(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function o(n,t){if(null==n)return{};var e,i,a=function(n,t){if(null==n)return{};var e,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)e=r[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var l=i.createContext({}),c=function(n){var t=i.useContext(l),e=t;return n&&(e="function"==typeof n?n(t):s(s({},t),n)),e},p=function(n){var t=c(n.components);return i.createElement(l.Provider,{value:t},n.children)},u={inlineCode:"code",wrapper:function(n){var t=n.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(n,t){var e=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),m=c(e),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||r;return e?i.createElement(d,s(s({ref:t},p),{},{components:e})):i.createElement(d,s({ref:t},p))}));function f(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var r=e.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=n,o.mdxType="string"==typeof n?n:a,s[1]=o;for(var c=2;c<r;c++)s[c]=e[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,e)}m.displayName="MDXCreateElement"},3819:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var i=e(7462),a=e(3366),r=(e(7294),e(3905)),s=["components"],o={title:"Trait Definitions",slug:"/basics/trait-definitions"},l=void 0,c={unversionedId:"basics/trait-definitions",id:"basics/trait-definitions",title:"Trait Definitions",description:"Through the #[ink::trait_definition] proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts.",source:"@site/docs/basics/trait-definitions.md",sourceDirName:"basics",slug:"/basics/trait-definitions",permalink:"/basics/trait-definitions",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/trait-definitions.md",tags:[],version:"current",frontMatter:{title:"Trait Definitions",slug:"/basics/trait-definitions"},sidebar:"reference",previous:{title:"Events",permalink:"/basics/events"},next:{title:"Cross-Contract Calling",permalink:"/basics/cross-contract-calling"}},p={},u=[{value:"Example",id:"example",level:3}],m={toc:u};function f(n){var t=n.components,e=(0,a.Z)(n,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Through the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::trait_definition]")," proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts."),(0,r.kt)("p",null,"This allows to define shared smart contract interfaces to different concrete implementations.\nNote that this ink! trait definition can be defined anywhere, even in another crate!"),(0,r.kt)("p",null,"See our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/master/examples/trait-erc20/lib.rs"},(0,r.kt)("inlineCode",{parentName:"a"},"ERC20-Trait example contract")),"\nfor an elaborate example which uses trait definitions."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"base_erc20.rs")," module."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::trait_definition]\npub trait BaseErc20 {\n    /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    /// Transfers `amount` from caller to `to`.\n    #[ink(message, payable)]\n    fn transfer(&mut self, to: AccountId, amount: Balance);\n}\n")),(0,r.kt)("p",null,"An ink! smart contract definition can then implement this trait definition as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    use base_erc20::BaseErc20;\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl BaseErc20 for Erc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            // implementation ...\n        }\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            // implementation ...\n        }\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {\n            // implementation ...\n        }\n    }\n}\n")),(0,r.kt)("p",null,"Calling the above ",(0,r.kt)("inlineCode",{parentName:"p"},"Erc20")," explicitely through its trait implementation can be done just as if it was normal Rust code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"// --- Instantiating the ERC-20 contract:\n//\nlet mut erc20 = <Erc20 as BaseErc20>::new(1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nlet mut erc20 = Erc20::new(1000);\n\n// --- Retrieving the total supply:\n//\nassert_eq!(<Erc20 as BaseErc20>::total_supply(&erc20), 1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nassert_eq!(erc20.total_supply(), 1000);\n")),(0,r.kt)("p",null,"There are still many limitations to ink! trait definitions and trait implementations.\nFor example it is not possible to define associated constants or types or have default implemented methods.\nThese limitations exist because of technical intricacies, however, please expect that many of those will be tackled in future ink! releases."),(0,r.kt)("p",null,"Marks trait definitions to ink! as special ink! trait definitions."),(0,r.kt)("p",null,"There are some restrictions that apply to ink! trait definitions that\nthis macro checks. Also ink! trait definitions are required to have specialized\nstructure so that the main ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_lang/attr.contract.html"},(0,r.kt)("inlineCode",{parentName:"a"},"#[ink::contract]"))," macro can\nproperly generate code for its implementations."),(0,r.kt)("h1",{id:"example-definition"},"Example: Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\ntype Balance = <ink_env::DefaultEnvironment as ink_env::Environment>::Balance;\n\n#[ink::trait_definition]\npub trait Erc20 {\n    /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply of the ERC-20 smart contract.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    // etc.\n}\n")),(0,r.kt)("h1",{id:"example-implementation"},"Example: Implementation"),(0,r.kt)("p",null,"Given the above trait definition you can implement it as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod base_erc20 {\n    /// We somehow cannot put the trait in the doc-test crate root due to bugs.\n    #[ink_lang::trait_definition]\n    pub trait Erc20 {\n        /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self;\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance;\n    }\n\n    #[ink(storage)]\n    pub struct BaseErc20 {\n        total_supply: Balance,\n        // etc ..\n    }\n\n    impl Erc20 for BaseErc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            Self { total_supply: initial_supply }\n        }\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n\n        // etc ..\n    }\n}\n")))}f.isMDXComponent=!0}}]);