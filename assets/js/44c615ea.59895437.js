"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9432],{50436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(17624),r=n(4552);const s={title:"March '22",slug:"/monthly-update/2022/03"},o=void 0,i={id:"monthly-update/2022/03",title:"March '22",description:"StackExchange Beta",source:"@site/versioned_docs/version-5.x/monthly-update/2022/03.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/03",permalink:"/5.x/monthly-update/2022/03",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/monthly-update/2022/03.md",tags:[],version:"5.x",frontMatter:{title:"March '22",slug:"/monthly-update/2022/03"}},c={},l=[{value:"StackExchange Beta",id:"stackexchange-beta",level:2},{value:"ink! 3.0 \ud83e\udd91",id:"ink-30-",level:2},{value:"cargo-contract 1.0",id:"cargo-contract-10",level:2},{value:"Delegate Call",id:"delegate-call",level:2},{value:"Workshop &amp; Talk at EthDenver",id:"workshop--talk-at-ethdenver",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"stackexchange-beta",children:"StackExchange Beta"}),"\n",(0,a.jsxs)(t.p,{children:["We are participating in the Beta of ",(0,a.jsx)(t.a,{href:"https://substrate.stackexchange.com/",children:"the Substrate StackExchange"})," site!"]}),"\n",(0,a.jsx)(t.p,{children:"If this StackExchange site gains traction it will be made available to the general public.\nTo reach this goal it's important to have the community engage there though."}),"\n",(0,a.jsxs)(t.p,{children:["Head over to ",(0,a.jsx)(t.a,{href:"https://substrate.stackexchange.com/",children:"substrate.stackexchange.com"}),"\nto ask us any questions (there is an ",(0,a.jsx)(t.code,{children:"ink"})," tag)!"]}),"\n",(0,a.jsx)(t.h2,{id:"ink-30-",children:"ink! 3.0 \ud83e\udd91"}),"\n",(0,a.jsx)(t.p,{children:"The star of the show this month is the release of ink! 3.0:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["You can find the release notes ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink/releases/tag/v3.0.0",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["We've also published a blog post with some more context:\n",(0,a.jsx)(t.a,{href:"https://www.parity.io/blog/ink-3-0-paritys-rust-based-language-gets-a-major-update",children:"ink! 3.0: Parity\u2019s Rust-Based Language for WASM Smart Contracts Gets a Major Update"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The team has been working on this release for a while. If you're a developer you're\nprobably aware of this thanks to the long list of release candidates (",(0,a.jsx)(t.code,{children:"v3.0.0-rcX"}),") we've\npushed out in preparation for the stable 3.0 release."]}),"\n",(0,a.jsxs)(t.p,{children:["The main idea behind ink! 3.0 is that it's just Rust. The syntax is pretty much\nidentical, and all the tooling you know and love, such as ",(0,a.jsx)(t.code,{children:"rust-analyzer"})," and Clippy,\njust works."]}),"\n",(0,a.jsx)(t.p,{children:"Some other included changes worth highlighting:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Reduced contract sizes for better performance in a parachain context."}),"\n",(0,a.jsx)(t.li,{children:"Support for cross-contract calls, making it easier to write complex applications."}),"\n",(0,a.jsx)(t.li,{children:"Trait support, allowing for a more Rusty development experience."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"cargo-contract-10",children:"cargo-contract 1.0"}),"\n",(0,a.jsxs)(t.p,{children:["Alongside the release of ink! 3.0 we're also releasing ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/cargo-contract",children:(0,a.jsx)(t.code,{children:"cargo-contract"})})," in\nits first stable version 1.0.\n",(0,a.jsx)(t.code,{children:"cargo-contract"})," is a handy developer tool for building, testing, and deploying ink!\ncontracts."]}),"\n",(0,a.jsx)(t.p,{children:"Some notable updates in this release include:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Support for uploading and calling contracts on a chain with ",(0,a.jsx)(t.code,{children:"pallet-contracts"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Linting rules for ink! contracts, giving developers warnings about common errors."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"delegate-call",children:"Delegate Call"}),"\n",(0,a.jsxs)(t.p,{children:["Another update worth pointing out is the addition of ",(0,a.jsx)(t.code,{children:"delegate_call"}),". What this allows is\na way for contracts to forward a call they received to another contract."]}),"\n",(0,a.jsxs)(t.p,{children:["One use case for this is implementing a ",(0,a.jsx)(t.a,{href:"https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies",children:"Proxy Upgrade Pattern"})," for smart contracts."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"User ---- tx ---\x3e Proxy ----------\x3e Implementation_v0\n                     |\n                      ------------\x3e Implementation_v1\n                     |\n                      ------------\x3e Implementation_v2\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This required some work in both ",(0,a.jsx)(t.code,{children:"pallet-contracts"})," and ink!. Shoutout to the team over\nat ",(0,a.jsx)(t.a,{href:"https://github.com/Supercolony-net",children:"Supercolony"})," for driving the development here!"]}),"\n",(0,a.jsxs)(t.p,{children:["We now have two example contracts for writing upgradeable contracts in ink!.\n",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts",children:"See here"}),"\nfor a deeper explanation."]}),"\n",(0,a.jsx)(t.h2,{id:"workshop--talk-at-ethdenver",children:"Workshop & Talk at EthDenver"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/hcastano",children:"Hernando"})," and ",(0,a.jsx)(t.a,{href:"https://github.com/achimcc",children:"Achim"})," went to EthDenver to\ngive a workshop and talk regarding ink! on the Substrate stage!"]}),"\n",(0,a.jsxs)(t.p,{children:["The recording is available ",(0,a.jsx)(t.a,{href:"https://www.youtube.com/watch?t=7122&v=NrG3co6UWEg",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>o});var a=n(11504);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);