"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5136],{88444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(17624),i=n(4552);const s={title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project",hide_title:!0},a="Creating an ink! Project",o={id:"getting-started/creating",title:"Creating an ink! Project",description:"ink! is an Embedded Domain Specific Language (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language.",source:"@site/versioned_docs/version-5.x/getting-started/creating.md",sourceDirName:"getting-started",slug:"/getting-started/creating-an-ink-project",permalink:"/5.x/getting-started/creating-an-ink-project",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/getting-started/creating.md",tags:[],version:"5.x",frontMatter:{title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project",hide_title:!0},sidebar:"reference",previous:{title:"Setup",permalink:"/5.x/getting-started/setup"},next:{title:"Compile Your Contract",permalink:"/5.x/getting-started/building-your-contract"}},c={},d=[{value:"Contract Source Code",id:"contract-source-code",level:2},{value:"Testing Your Contract",id:"testing-your-contract",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/img/title/heart.svg",className:"titlePic"}),"\n",(0,r.jsx)(t.h1,{id:"creating-an-ink-project",children:"Creating an ink! Project"}),"\n",(0,r.jsxs)(t.p,{children:["ink! is an ",(0,r.jsx)(t.a,{href:"https://wiki.haskell.org/Embedded_domain_specific_language",children:"Embedded Domain Specific Language"})," (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language."]}),"\n",(0,r.jsxs)(t.p,{children:['ink! is just standard Rust in a well defined "contract format" with specialized ',(0,r.jsx)(t.code,{children:"#[ink(\u2026)]"})," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode!"]}),"\n",(0,r.jsx)(t.p,{children:"Use the ink! CLI to generate an initial smart contract with some scaffolding code."}),"\n",(0,r.jsx)(t.p,{children:"Make sure you are in your working directory, and then run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo contract new flipper\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This command will create a new project folder named ",(0,r.jsx)(t.code,{children:"flipper"})," with this content:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"flipper\n  \u2514\u2500 lib.rs                <-- Contract Source Code\n  \u2514\u2500 Cargo.toml            <-- Rust Dependencies and ink! Configuration\n  \u2514\u2500 .gitignore\n"})}),"\n",(0,r.jsx)(t.h2,{id:"contract-source-code",children:"Contract Source Code"}),"\n",(0,r.jsxs)(t.p,{children:['The ink CLI automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:\n',(0,r.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs",children:"Flipper Example Source Code"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The Flipper contract is nothing more than a ",(0,r.jsx)(t.code,{children:"bool"})," which gets flipped from ",(0,r.jsx)(t.code,{children:"true"})," to ",(0,r.jsx)(t.code,{children:"false"})," through the ",(0,r.jsx)(t.code,{children:"flip()"})," function."]}),"\n",(0,r.jsx)(t.h2,{id:"testing-your-contract",children:"Testing Your Contract"}),"\n",(0,r.jsxs)(t.p,{children:["You will see at the bottom of the source code there are simple test cases which verify the functionality of the contract. We can quickly test this code is functioning as expected using the ",(0,r.jsx)(t.strong,{children:"off-chain test environment"})," that ink! provides."]}),"\n",(0,r.jsx)(t.p,{children:"In your project folder run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo test\n"})}),"\n",(0,r.jsx)(t.p,{children:"To which you should see a successful test completion:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"$ cargo test\nrunning 2 tests\ntest flipper::tests::it_works ... ok\ntest flipper::tests::default_works ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now that we are feeling confident things are working, we can actually compile this contract to Wasm in the next step."})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var r=n(11504);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);