"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5068],{50316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var r=n(17624),s=n(4552);const i={title:"OpenBrush",slug:"/getting-started/use-openbrush"},o=void 0,a={id:"third-party-tools/openbrush",title:"OpenBrush",description:"[OpenBrush] is a library for smart contract development on ink! maintained by the",source:"@site/docs/third-party-tools/openbrush.md",sourceDirName:"third-party-tools",slug:"/getting-started/use-openbrush",permalink:"/getting-started/use-openbrush",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/third-party-tools/openbrush.md",tags:[],version:"current",frontMatter:{title:"OpenBrush",slug:"/getting-started/use-openbrush"},sidebar:"reference",previous:{title:"Faucet",permalink:"/faucet"},next:{title:"Swanky Suite",permalink:"/getting-started/swanky"}},c={},h=[{value:"Which standards and contract components does it contain?",id:"which-standards-and-contract-components-does-it-contain",level:3},{value:"Generic Trait Implementation",id:"generic-trait-implementation",level:3},{value:"Wrapper around Traits: <code>#[openbrush::wrapper]</code>",id:"wrapper-around-traits-openbrushwrapper",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2},{value:"Questions?",id:"questions",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush"})," is a library for smart contract development on ink! maintained by the\n",(0,r.jsx)(t.a,{href:"https://github.com/Supercolony-net",children:"Brushfam"})," team."]}),"\n",(0,r.jsxs)(t.p,{children:["It provides standard contracts based on ",(0,r.jsx)(t.a,{href:"https://github.com/w3f/PSPs",children:"Polkadot Standard Proposals (PSPs)"}),",\nas well as higher-level contracts and Rust macros that generate ink! code."]}),"\n",(0,r.jsxs)(t.p,{children:["Using OpenBrush is simple, you only add the dependency to your ",(0,r.jsx)(t.code,{children:"Cargo.toml"})," file.\nYou can find an example ",(0,r.jsx)(t.a,{href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/overview",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"which-standards-and-contract-components-does-it-contain",children:"Which standards and contract components does it contain?"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"PSP22"}),": Fungible Token (",(0,r.jsx)(t.em,{children:"ERC20 equivalent"}),") with extensions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"PSP34"}),": Non-Fungible Token (",(0,r.jsx)(t.em,{children:"ERC721 equivalent"}),") with extensions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"PSP37"}),": ERC1155 equivalent with extensions."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ownable"})," Restrict access to action for non-owners."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Access Control"}),": Define a set of roles and restrict access to an action by roles."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Reentrancy Guard"}),": Prevent reentrant calls to a function."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Pausable"}),": Pause/Unpause the contract to disable/enable some operations."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Timelock Controller"}),": Execute transactions with some delay."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Payment Splitter"}),": Split the amount of native tokens between participants."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"generic-trait-implementation",children:"Generic Trait Implementation"}),"\n",(0,r.jsxs)(t.p,{children:["OpenBrush adds support for generic Trait implementations, so that you can\nsplit a Trait and its implementation into different files. This can\nincrease the readability and maintainability of your smart-contract\ncode base (",(0,r.jsx)(t.a,{href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/example/setup_project",children:"detailed description"}),")."]}),"\n",(0,r.jsxs)(t.h3,{id:"wrapper-around-traits-openbrushwrapper",children:["Wrapper around Traits: ",(0,r.jsx)(t.code,{children:"#[openbrush::wrapper]"})]}),"\n",(0,r.jsxs)(t.p,{children:["If you know that the other contract implements a trait and\nthe trait is attributed with ",(0,r.jsx)(t.code,{children:" #[openbrush::trait_definition]"}),"\nyou only need that trait definition and the address of the other contract\nin order to call a method from the deployed third-party contract.\nThe wrapper is an attribute macro named ",(0,r.jsx)(t.code,{children:"#[openbrush::wrapper]"})," for traits.\nIt will generate a callable structure of the other contract with the name defined\nby a user:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"// You can create wrapper in the place where you defined the trait\n// Or if you import **everything** from the file where you define trait\n#[openbrush::wrapper]\ntype Trait1Ref = dyn Trait1;\n"})}),"\n",(0,r.jsx)(t.p,{children:"The benefits of such mechanism is a functional polymorphism.\nInstead of working with the concrete implementation of the trait as a dependency\nin you contract, you only interact with its interface.\nThat means that you do not need to import other contracts as dependencies\nto the calling contract.\nIf you need to update the implementation of the trait within the calling contract,\nyou only need to replace the called contract address. The wrapper does not guarantee\nthat the given address refers to a contract that implements the given trait."}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, the wrapper supports multiple traits (i.e. ",(0,r.jsx)(t.code,{children:"dyn Erc20 + Ownable + Erc721"}),")\nwithout losing the syntax highlighting from your favourite IDE."]}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/openbrush-contracts#wrapper-around-traits",children:"this example"}),"\nfor more information."]}),"\n",(0,r.jsx)(t.h3,{id:"documentation",children:"Documentation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/openbrush-contracts",children:"OpenBrush Github repo"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://learn.brushfam.io/docs/OpenBrush",children:"Official Docs"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://openbrush.io/",children:"OpenBrush website"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=I5OFGNVvzOc",children:"Substrate Seminar (Youtube)"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76",children:"How to use modifiers"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"typechain-polkadot",children:"Typechain-Polkadot"}),"\n",(0,r.jsxs)(t.p,{children:["Another tool helpful for ink! smart contracts development is ",(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/typechain-polkadot",children:"Typechain-Polkadot"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Typechain-Polkadot is used to generate Typescript wrappers around your smart contract.\nThis can be used for UI development or in integration tests of your ink! smart contracts.\nThe library uses ",(0,r.jsx)(t.a,{href:"https://github.com/polkadot-js/api",children:(0,r.jsx)(t.code,{children:"polkadot-js/api"})})," under the hood,\nbut is especially useful because all calls and queries are typed, therefore the chance of\ngetting some error during a call is mitigated."]}),"\n",(0,r.jsx)(t.h2,{id:"sol2ink",children:"Sol2Ink"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://github.com/727-Ventures/sol2ink",children:"Sol2Ink"})," is a tool which can support migrations\nfrom Solidity to ink!. Solidity code is passed to Sol2Ink and converted to an ink! contract.\nThe tool can also be used to learn the differences between Solidity and ink! code."]}),"\n",(0,r.jsx)(t.h3,{id:"questions",children:"Questions?"}),"\n",(0,r.jsxs)(t.p,{children:["If you have any questions about how to use any of these tools, or just about the ink! smart contracts in general, you can join the ",(0,r.jsx)(t.a,{href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation",children:"Brushfam element channel"})," or ask a question on the ",(0,r.jsx)(t.a,{href:"https://substrate.stackexchange.com/",children:"Substrate Stack Exchange"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var r=n(11504);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);