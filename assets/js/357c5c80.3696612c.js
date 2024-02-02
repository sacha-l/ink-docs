"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9060],{24980:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=t(17624),a=t(4552);const s={title:"October '22",slug:"/monthly-update/2022/10"},i=void 0,r={id:"monthly-update/2022/10",title:"October '22",description:"Polkadot Blockchain Academy: Jan/Feb '23 \ud83c\udf93",source:"@site/versioned_docs/version-5.x/monthly-update/2022/10.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/10",permalink:"/5.x/monthly-update/2022/10",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/monthly-update/2022/10.md",tags:[],version:"5.x",frontMatter:{title:"October '22",slug:"/monthly-update/2022/10"}},d={},l=[{value:"Polkadot Blockchain Academy: Jan/Feb &#39;23 \ud83c\udf93",id:"polkadot-blockchain-academy-janfeb-23-",level:2},{value:"Astar ported Uniswap v2 to ink! \ud83d\udcb1",id:"astar-ported-uniswap-v2-to-ink-",level:2},{value:"Release Updates \ud83c\udd95",id:"release-updates-",level:2},{value:"Conference Season \ud83d\udce2",id:"conference-season-",level:2},{value:"Blog Post on <code>wasm-opt-rs</code> \ud83d\ude4c",id:"blog-post-on-wasm-opt-rs-",level:2},{value:"Solang Solidity compiler incubated into Hyperledger Foundation \ud83c\udf89",id:"solang-solidity-compiler-incubated-into-hyperledger-foundation-",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"polkadot-blockchain-academy-janfeb-23-",children:"Polkadot Blockchain Academy: Jan/Feb '23 \ud83c\udf93"}),"\n",(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ODg6EPfekf0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.p,{children:"In July we spent some time in Cambridge on a secret mission.\nAt the time we teased this in our monthly update and said we'd\ngive more details soon. Well, the cat (or rather squid?) is out\nof the bag!"}),"\n",(0,o.jsx)(n.p,{children:"We were holding lectures on WebAssembly smart contracts as part\nof the Polkadot Blockchain Academy! This was the first, intentionally\nlow-key, run of a Polkadot education program with an academic\nfocus. This first run was low-key to smooth out the edges and verify\nif our idea of a curriculum worked out in the real world.\nIt did and there will be many more academies! Starting with the next\none, which is happening in January and February 2023 in Buenos Aires."}),"\n",(0,o.jsxs)(n.p,{children:["We will also be giving lectures there again! You can find more\ndetails on ",(0,o.jsx)(n.a,{href:"http://dot.li/academy",children:"http://dot.li/academy"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"astar-ported-uniswap-v2-to-ink-",children:"Astar ported Uniswap v2 to ink! \ud83d\udcb1"}),"\n",(0,o.jsx)(n.p,{children:"Astar has published a showcase dApp built with ink!:\na Uniswap-V2 DEX. This is amazing and we can't wait to\nsee where this is going!"}),"\n",(0,o.jsxs)(n.p,{children:["They are working on a UI for the DEX as well. You can find\nthe repository here:\n",(0,o.jsx)(n.a,{href:"https://github.com/AstarNetwork/wasm-tutorial-dex",children:(0,o.jsx)(n.code,{children:"AstarNetwork/wasm-tutorial-dex"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"release-updates-",children:"Release Updates \ud83c\udd95"}),"\n",(0,o.jsxs)(n.p,{children:["We've published a release of ink! ",(0,o.jsx)(n.a,{href:"https://github.com/paritytech/ink/releases/tag/v3.4.0",children:(0,o.jsx)(n.code,{children:"v3.4"})}),"\nthis month."]}),"\n",(0,o.jsxs)(n.p,{children:["For ink! ",(0,o.jsx)(n.code,{children:"v4.0"})," and ",(0,o.jsx)(n.code,{children:"cargo-contract"})," ",(0,o.jsx)(n.code,{children:"v2.0"})," we decided to shift our\ntarget release date a bit, to January 2023. There are a number of\nreasons why we decided to do this:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["We have made a number of breaking changes and want to wait until popular\nuser interfaces (like ",(0,o.jsx)(n.a,{href:"https://polkadot.js.org/apps/",children:(0,o.jsx)(n.code,{children:"polkadot-js"})})," or\n",(0,o.jsx)(n.a,{href:"https://contracts-ui.substrate.io/",children:(0,o.jsx)(n.code,{children:"contracts-ui"})}),") support those."]}),"\n",(0,o.jsx)(n.li,{children:"We want to have a release candidate out for at least some weeks to give\neveryone the chance to already upgrade tooling and provide feedback."}),"\n",(0,o.jsx)(n.li,{children:"We have an audit going on and would ideally like to incorporate more\nof the results."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A breaking change that has formed in the last weeks is that we\nwill have to remove ",(0,o.jsx)(n.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html",children:(0,o.jsx)(n.code,{children:"ink::env::random"})}),".\nThis function allowed contract developers getting random entropy.\nThere is unfortunately no way how this can be done safely enough\nwith built-in Substrate primitives on-chain currently. We're\nfollowing the recommendation of our auditors to remove it."]}),"\n",(0,o.jsx)(n.p,{children:"The alternative right now is to provide random entropy off-chain to\nthe contract, to use a random entropy oracle, or to have a chain-extension\nthat does this, in case the chain has a possibility to do so."}),"\n",(0,o.jsxs)(n.p,{children:["We hope to bring this function back in a future release of ink!, the\nbest hope right now is that it could come back with ",(0,o.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/learn-consensus#badass-babe-sassafras",children:"Sassafras"}),", a block production\nprotocol for future versions of Polkadot."]}),"\n",(0,o.jsx)(n.h2,{id:"conference-season-",children:"Conference Season \ud83d\udce2"}),"\n",(0,o.jsx)(n.p,{children:"Many from our team have been on the road in the last weeks.\nYou might have met us at DappCon, DevCon, or EuroRust."}),"\n",(0,o.jsxs)(n.p,{children:["There's more to come and a number of us will be at ",(0,o.jsx)(n.a,{href:"https://sub0.polkadot.network/",children:"sub0 in\nLisbon at the end of November '22"}),".\nWe have two events scheduled there, a talk and a fireside chat.\nCome by and talk to us if you're there!"]}),"\n",(0,o.jsxs)(n.h2,{id:"blog-post-on-wasm-opt-rs-",children:["Blog Post on ",(0,o.jsx)(n.code,{children:"wasm-opt-rs"})," \ud83d\ude4c"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/brson",children:"Brian Anderson"})," wrote a blog post on ",(0,o.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/1070",children:"his\nWeb3 Foundation grant"}),"\nto get rid of ",(0,o.jsx)(n.code,{children:"wasm-opt"})," as an external dependency for ",(0,o.jsx)(n.code,{children:"cargo-contract"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"This was a contribution that we looked forward to a lot.\nExternal dependencies cause so much user friction. For once, it's\nanother manual step in the installation process, which is not always\nstraight forward and different for each operating system.\nThere's other issues too, we don't have control over which\nversion of the dependency is installed on the local system and\nhave to throw errors to the user, causing more user friction."}),"\n",(0,o.jsxs)(n.p,{children:["All of this is just solved now by having ",(0,o.jsx)(n.a,{href:"https://crates.io/crates/wasm-opt",children:(0,o.jsx)(n.code,{children:"wasm-opt"})}),"\nbe a direct dependency of ",(0,o.jsx)(n.code,{children:"cargo-contract"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The blog post is an interesting read, you can find it on\nBrian's blog ",(0,o.jsx)(n.a,{href:"https://brson.github.io/2022/10/26/creating-wasm-opt-rust-bindings-with-cxx",children:"here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"solang-solidity-compiler-incubated-into-hyperledger-foundation-",children:"Solang Solidity compiler incubated into Hyperledger Foundation \ud83c\udf89"}),"\n",(0,o.jsxs)(n.p,{children:["ink! contracts are executed by Substrate's ",(0,o.jsx)(n.a,{href:"/how-it-works",children:(0,o.jsx)(n.code,{children:"pallet-contracts"})}),";\nbesides ink! there are two other languages that you can use to\nwrite smart contracts for this pallet: ",(0,o.jsx)(n.a,{href:"https://github.com/ask-lang/ask",children:"ask!"}),"\n(Assembly Script) and Solidity via ",(0,o.jsx)(n.a,{href:"https://github.com/hyperledger-labs/solang",children:"the Solang compiler"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Solang supports different blockchains as compiler targets, one\nof them being ",(0,o.jsx)(n.code,{children:"pallet-contracts"}),". Our colleague ",(0,o.jsx)(n.a,{href:"https://github.com/xermicus",children:"@xermicus"}),"\nis working full-time on this Substrate backend in Solang."]}),"\n",(0,o.jsx)(n.p,{children:"The project has now been incubated into the Hyperledger Foundation,\nhosted by the Linux Foundation. This is a big recognition for\nthe project!"}),"\n",(0,o.jsx)(n.p,{children:"In ink!, supporting a symbiotic interaction with Solidity contracts\nis an important part of the puzzle for us and we're looking forward\nto the next stages of Solang."}),"\n",(0,o.jsxs)(n.p,{children:["More details can be found ",(0,o.jsx)(n.a,{href:"https://www.hyperledger.org/blog/2022/09/12/meet-hyperledger-solang-a-portable-solidity-compiler",children:"in the announcement blog post"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>i});var o=t(11504);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);