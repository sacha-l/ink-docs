"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2544],{59480:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(17624),r=t(4552);const i={title:"OpenBrush",slug:"/getting-started/openbrush"},o=void 0,a={id:"third-party-tools/openbrush",title:"OpenBrush",description:"[OpenBrush] is a library for smart contract development on ink! maintained by the",source:"@site/versioned_docs/version-3.x/third-party-tools/openbrush.md",sourceDirName:"third-party-tools",slug:"/getting-started/openbrush",permalink:"/es/3.x/getting-started/openbrush",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/third-party-tools/openbrush.md",tags:[],version:"3.x",frontMatter:{title:"OpenBrush",slug:"/getting-started/openbrush"},sidebar:"reference",previous:{title:"Overview",permalink:"/es/3.x/testnet"},next:{title:"Frequently Asked Questions",permalink:"/es/3.x/faq"}},l={},c=[{value:"Why use OpenBrush?",id:"why-use-openbrush",level:3},{value:"Which standard tokens and useful contracts does it provide?",id:"which-standard-tokens-and-useful-contracts-does-it-provide",level:3},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits",id:"wrapper-around-traits",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush"})," is a library for smart contract development on ink! maintained by the\n",(0,s.jsx)(n.a,{href:"https://github.com/Supercolony-net",children:"Brushfam"})," team."]}),"\n",(0,s.jsxs)(n.p,{children:["It provides standard contracts based on ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/PSPs",children:"PSPs"}),", as well as useful contracts and Rust macros to help you build ink! smart contracts."]}),"\n",(0,s.jsxs)(n.p,{children:["Using OpenBrush is simple, you will only add the dependency to your ",(0,s.jsx)(n.code,{children:"Cargo.toml"})," file. Here is an ",(0,s.jsx)(n.a,{href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/overview",children:"example"})," of how to do it."]}),"\n",(0,s.jsx)(n.h3,{id:"why-use-openbrush",children:"Why use OpenBrush?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["To make contracts ",(0,s.jsx)(n.strong,{children:"interoperable"})," to do ",(0,s.jsx)(n.strong,{children:"safe"})," cross-contracts calls (by having the same function's signature among every contract)"]}),"\n",(0,s.jsxs)(n.li,{children:["To ensure the usage of ",(0,s.jsx)(n.a,{href:"https://github.com/w3f/PSPs",children:"Polkadot Standards Proposals"})]}),"\n",(0,s.jsxs)(n.li,{children:["To ensure the usage of the ",(0,s.jsx)(n.strong,{children:"latest and most secure"})," implementation"]}),"\n",(0,s.jsx)(n.li,{children:"Useful contracts that provide custom logic to be implemented in contracts"}),"\n",(0,s.jsxs)(n.li,{children:["To ",(0,s.jsx)(n.strong,{children:"save time"})," by not writing boilerplate code"]}),"\n",(0,s.jsx)(n.li,{children:"Useful features which can simplify development"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"which-standard-tokens-and-useful-contracts-does-it-provide",children:"Which standard tokens and useful contracts does it provide?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PSP22"})," - Fungible Token (",(0,s.jsx)(n.em,{children:"ERC20 equivalent"}),") with extensions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PSP34"})," - Non-Fungible Token (",(0,s.jsx)(n.em,{children:"ERC721 equivalent"}),") with extensions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PSP37"}),": ",(0,s.jsx)(n.em,{children:"ERC1155 equivalent"})," with extensions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ownable"})," Restrict access to action for non-owners"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Access Control"}),": Define a set of roles and restrict access to an action by roles"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Reentrancy Guard"}),": Prevent reentrant calls to a function"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Pausable"}),": Pause/Unpause the contract to disable/enable some operations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Timelock Controller"}),": Execute transactions with some delay"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Splitter"}),": Split the amount of native tokens between participants"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"generic-trait-implementation",children:"Generic Trait Implementation"}),"\n",(0,s.jsxs)(n.p,{children:["More importantly, OpenBrush adds support for generic Trait implementation so you can split Trait and Impls into different files, which will increase the readability and maintainability of your smart-contract code base (see detailed description ",(0,s.jsx)(n.a,{href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/example/setup_project",children:"here"}),")"]}),"\n",(0,s.jsx)(n.h3,{id:"wrapper-around-traits",children:"Wrapper around Traits"}),"\n",(0,s.jsx)(n.p,{children:"Defining a Trait definition is sufficient (a contract that implements that Trait is not needed anymore) to call methods of that Trait from some contract in the network (do a cross contract call). It makes cross-contract calls easier."}),"\n",(0,s.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush Github repo"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.brushfam.io/docs/OpenBrush",children:"Official Docs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://openbrush.io/",children:"OpenBrush website"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=I5OFGNVvzOc",children:"Substrate Seminar (Youtube)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76",children:"How to use modifiers"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"typechain-polkadot",children:"Typechain-Polkadot"}),"\n",(0,s.jsxs)(n.p,{children:["Another tool essential for ink! smart contracts development is ",(0,s.jsx)(n.a,{href:"https://github.com/727-Ventures/typechain-polkadot",children:"Typechain-Polkadot"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Typechain-Polkadot is used to generate Typescript wrappers around your smart-contract, which can be used in UI or in integration tests of your ink! smart contracts. It uses polkadot-api under the hood, but is especially useful because all calls and queries are typed, therefore the chance of getting some error during a call is mitigated."}),"\n",(0,s.jsx)(n.h2,{id:"sol2ink",children:"Sol2Ink"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/727-Ventures/sol2ink",children:"Sol2Ink"})," is a useful tool which can help you migrating from Solidity to ink! You will only pass the Solidity code of your smart contract to Sol2Ink and get the ink! contract in return. You can also use Sol2Ink to learn the differences between Solidity and ink! code and use it to help you learning to create ink! smart contracts."]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var s=t(11504);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);