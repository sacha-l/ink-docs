"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),h=a,f=l["".concat(c,".").concat(h)]||l[h]||m[h]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},o=void 0,s={unversionedId:"basics/environment",id:"basics/environment",title:"Chain Environment Types",description:"If you write a contract for a chain that deviates from the default",source:"@site/docs/basics/environment.md",sourceDirName:"basics",slug:"/basics/chain-environment-types",permalink:"/basics/chain-environment-types",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/environment.md",tags:[],version:"current",frontMatter:{title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},sidebar:"reference",previous:{title:"Environment Functions",permalink:"/basics/environment-functions"},next:{title:"Metadata",permalink:"/basics/metadata"}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/environment.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"chain-environment-types"},"Chain Environment Types"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If you write a contract for a chain that deviates from the default\nSubstrate types, you have to make sure to configure that chain's\n",(0,a.kt)("inlineCode",{parentName:"p"},"Environment")," for your contract!")),(0,a.kt)("p",null,"ink! defines a trait ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/trait.Environment.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Environment")),"\nand also a default implementation of that trait \u2012 ",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/enum.DefaultEnvironment.html"},(0,a.kt)("inlineCode",{parentName:"a"},"DefaultEnvironment")),"."),(0,a.kt)("p",null,"These are the types that ink! uses, if no explicit steps are taken:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'/// The fundamental types of the default configuration.\n#[derive(Debug, Clone, PartialEq, Eq)]\n#[cfg_attr(feature = "std", derive(TypeInfo))]\npub enum DefaultEnvironment {}\n\nimpl Environment for DefaultEnvironment {\n    const MAX_EVENT_TOPICS: usize = 4;\n\n    type AccountId = ink_primitives::AccountId;\n    type Balance = u128;\n    type Hash = ink_primitives::Hash;\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = NoChainExtension;\n}\n')),(0,a.kt)("p",null,"The context here is that you can use ink! on any blockchain that was built with\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate")," framework and includes the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,a.kt)("inlineCode",{parentName:"a"},"pallet-contracts")),"\nmodule."),(0,a.kt)("p",null,"Chains built on Substrate can decide on their own which types they want\nto use for e.g. the chain's block number or account id's. For example,\nchains that intend to be compatible to Ethereum typically use the same\ntype as Ethereum for their ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId"),"."),(0,a.kt)("p",null,"Most Substrate chains stay with the default Substrate types though and\nink! just uses those by default as well. It is possible to configure\na different environment in the contract macro (",(0,a.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink/attr.contract.html#header-arguments"},"documentation here"),")\nthough:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract(env = MyCustomTypes)]\n")))}m.isMDXComponent=!0}}]);