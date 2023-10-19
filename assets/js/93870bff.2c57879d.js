"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9665],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"October '22",slug:"/monthly-update/2022/10"},i=void 0,s={unversionedId:"monthly-update/2022/10",id:"monthly-update/2022/10",title:"October '22",description:"Polkadot Blockchain Academy: Jan/Feb '23 \ud83c\udf93",source:"@site/docs/monthly-update/2022/10.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/10",permalink:"/monthly-update/2022/10",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/monthly-update/2022/10.md",tags:[],version:"current",frontMatter:{title:"October '22",slug:"/monthly-update/2022/10"}},l={},p=[{value:"Polkadot Blockchain Academy: Jan/Feb &#39;23 \ud83c\udf93",id:"polkadot-blockchain-academy-janfeb-23-",level:2},{value:"Astar ported Uniswap v2 to ink! \ud83d\udcb1",id:"astar-ported-uniswap-v2-to-ink-",level:2},{value:"Release Updates \ud83c\udd95",id:"release-updates-",level:2},{value:"Conference Season \ud83d\udce2",id:"conference-season-",level:2},{value:"Blog Post on <code>wasm-opt-rs</code> \ud83d\ude4c",id:"blog-post-on-wasm-opt-rs-",level:2},{value:"Solang Solidity compiler incubated into Hyperledger Foundation \ud83c\udf89",id:"solang-solidity-compiler-incubated-into-hyperledger-foundation-",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"polkadot-blockchain-academy-janfeb-23-"},"Polkadot Blockchain Academy: Jan/Feb '23 \ud83c\udf93"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ODg6EPfekf0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"In July we spent some time in Cambridge on a secret mission.\nAt the time we teased this in our monthly update and said we'd\ngive more details soon. Well, the cat (or rather squid?) is out\nof the bag!"),(0,o.kt)("p",null,"We were holding lectures on WebAssembly smart contracts as part\nof the Polkadot Blockchain Academy! This was the first, intentionally\nlow-key, run of a Polkadot education program with an academic\nfocus. This first run was low-key to smooth out the edges and verify\nif our idea of a curriculum worked out in the real world.\nIt did and there will be many more academies! Starting with the next\none, which is happening in January and February 2023 in Buenos Aires."),(0,o.kt)("p",null,"We will also be giving lectures there again! You can find more\ndetails on ",(0,o.kt)("a",{parentName:"p",href:"http://dot.li/academy"},"http://dot.li/academy"),"."),(0,o.kt)("h2",{id:"astar-ported-uniswap-v2-to-ink-"},"Astar ported Uniswap v2 to ink! \ud83d\udcb1"),(0,o.kt)("p",null,"Astar has published a showcase dApp built with ink!:\na Uniswap-V2 DEX. This is amazing and we can't wait to\nsee where this is going!"),(0,o.kt)("p",null,"They are working on a UI for the DEX as well. You can find\nthe repository here:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/wasm-tutorial-dex"},(0,o.kt)("inlineCode",{parentName:"a"},"AstarNetwork/wasm-tutorial-dex")),"."),(0,o.kt)("h2",{id:"release-updates-"},"Release Updates \ud83c\udd95"),(0,o.kt)("p",null,"We've published a release of ink! ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/releases/tag/v3.4.0"},(0,o.kt)("inlineCode",{parentName:"a"},"v3.4")),"\nthis month."),(0,o.kt)("p",null,"For ink! ",(0,o.kt)("inlineCode",{parentName:"p"},"v4.0")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.0")," we decided to shift our\ntarget release date a bit, to January 2023. There are a number of\nreasons why we decided to do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We have made a number of breaking changes and want to wait until popular\nuser interfaces (like ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},(0,o.kt)("inlineCode",{parentName:"a"},"polkadot-js"))," or\n",(0,o.kt)("a",{parentName:"li",href:"https://contracts-ui.substrate.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"contracts-ui")),") support those."),(0,o.kt)("li",{parentName:"ul"},"We want to have a release candidate out for at least some weeks to give\neveryone the chance to already upgrade tooling and provide feedback."),(0,o.kt)("li",{parentName:"ul"},"We have an audit going on and would ideally like to incorporate more\nof the results.")),(0,o.kt)("p",null,"A breaking change that has formed in the last weeks is that we\nwill have to remove ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html"},(0,o.kt)("inlineCode",{parentName:"a"},"ink::env::random")),".\nThis function allowed contract developers getting random entropy.\nThere is unfortunately no way how this can be done safely enough\nwith built-in Substrate primitives on-chain currently. We're\nfollowing the recommendation of our auditors to remove it."),(0,o.kt)("p",null,"The alternative right now is to provide random entropy off-chain to\nthe contract, to use a random entropy oracle, or to have a chain-extension\nthat does this, in case the chain has a possibility to do so."),(0,o.kt)("p",null,"We hope to bring this function back in a future release of ink!, the\nbest hope right now is that it could come back with ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-consensus#badass-babe-sassafras"},"Sassafras"),", a block production\nprotocol for future versions of Polkadot."),(0,o.kt)("h2",{id:"conference-season-"},"Conference Season \ud83d\udce2"),(0,o.kt)("p",null,"Many from our team have been on the road in the last weeks.\nYou might have met us at DappCon, DevCon, or EuroRust."),(0,o.kt)("p",null,"There's more to come and a number of us will be at ",(0,o.kt)("a",{parentName:"p",href:"https://sub0.polkadot.network/"},"sub0 in\nLisbon at the end of November '22"),".\nWe have two events scheduled there, a talk and a fireside chat.\nCome by and talk to us if you're there!"),(0,o.kt)("h2",{id:"blog-post-on-wasm-opt-rs-"},"Blog Post on ",(0,o.kt)("inlineCode",{parentName:"h2"},"wasm-opt-rs")," \ud83d\ude4c"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/brson"},"Brian Anderson")," wrote a blog post on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/1070"},"his\nWeb3 Foundation grant"),"\nto get rid of ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-opt")," as an external dependency for ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"."),(0,o.kt)("p",null,"This was a contribution that we looked forward to a lot.\nExternal dependencies cause so much user friction. For once, it's\nanother manual step in the installation process, which is not always\nstraight forward and different for each operating system.\nThere's other issues too, we don't have control over which\nversion of the dependency is installed on the local system and\nhave to throw errors to the user, causing more user friction."),(0,o.kt)("p",null,"All of this is just solved now by having ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/wasm-opt"},(0,o.kt)("inlineCode",{parentName:"a"},"wasm-opt")),"\nbe a direct dependency of ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"."),(0,o.kt)("p",null,"The blog post is an interesting read, you can find it on\nBrian's blog ",(0,o.kt)("a",{parentName:"p",href:"https://brson.github.io/2022/10/26/creating-wasm-opt-rust-bindings-with-cxx"},"here"),"."),(0,o.kt)("h2",{id:"solang-solidity-compiler-incubated-into-hyperledger-foundation-"},"Solang Solidity compiler incubated into Hyperledger Foundation \ud83c\udf89"),(0,o.kt)("p",null,"ink! contracts are executed by Substrate's ",(0,o.kt)("a",{parentName:"p",href:"/how-it-works"},(0,o.kt)("inlineCode",{parentName:"a"},"pallet-contracts")),";\nbesides ink! there are two other languages that you can use to\nwrite smart contracts for this pallet: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ask-lang/ask"},"ask!"),"\n(Assembly Script) and Solidity via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/solang"},"the Solang compiler"),"."),(0,o.kt)("p",null,"Solang supports different blockchains as compiler targets, one\nof them being ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". Our colleague ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/xermicus"},"@xermicus"),"\nis working full-time on this Substrate backend in Solang."),(0,o.kt)("p",null,"The project has now been incubated into the Hyperledger Foundation,\nhosted by the Linux Foundation. This is a big recognition for\nthe project!"),(0,o.kt)("p",null,"In ink!, supporting a symbiotic interaction with Solidity contracts\nis an important part of the puzzle for us and we're looking forward\nto the next stages of Solang."),(0,o.kt)("p",null,"More details can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.hyperledger.org/blog/2022/09/12/meet-hyperledger-solang-a-portable-solidity-compiler"},"in the announcement blog post"),"."))}u.isMDXComponent=!0}}]);