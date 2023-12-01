"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=a,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},i=void 0,c={unversionedId:"getting-started/creating",id:"version-3.x/getting-started/creating",title:"Creating an ink! Project",description:"ink! is an Embedded Domain Specific Language (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/getting-started/creating.md",sourceDirName:"getting-started",slug:"/getting-started/creating-an-ink-project",permalink:"/es/3.x/getting-started/creating-an-ink-project",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/getting-started/creating.md",tags:[],version:"3.x",frontMatter:{title:"Creating an ink! Project",slug:"/getting-started/creating-an-ink-project"},sidebar:"reference",previous:{title:"Setup",permalink:"/es/3.x/getting-started/setup"},next:{title:"Compile Your Contract",permalink:"/es/3.x/getting-started/building-your-contract"}},s={},l=[{value:"Contract Source Code",id:"contract-source-code",level:2},{value:"Testing Your Contract",id:"testing-your-contract",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ink! is an ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.haskell.org/Embedded_domain_specific_language"},"Embedded Domain Specific Language")," (EDSL) that you can use to write WebAssembly based smart contracts in the Rust programming language."),(0,a.kt)("p",null,'ink! is just standard Rust in a well defined "contract format" with specialized ',(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(\u2026)]")," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode!"),(0,a.kt)("p",null,"Use the ink! CLI to generate an initial smart contract with some scaffolding code."),(0,a.kt)("p",null,"Make sure you are in your working directory, and then run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo contract new flipper\n")),(0,a.kt)("p",null,"This command will create a new project folder named ",(0,a.kt)("inlineCode",{parentName:"p"},"flipper")," with this content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"flipper\n  \u2514\u2500 lib.rs                <-- Contract Source Code\n  \u2514\u2500 Cargo.toml            <-- Rust Dependencies and ink! Configuration\n  \u2514\u2500 .gitignore\n")),(0,a.kt)("h2",{id:"contract-source-code"},"Contract Source Code"),(0,a.kt)("p",null,'The ink CLI automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/blob/v3.0.0-rc8/examples/flipper/lib.rs"},"Flipper Example Source Code")),(0,a.kt)("p",null,"The Flipper contract is nothing more than a ",(0,a.kt)("inlineCode",{parentName:"p"},"bool")," which gets flipped from ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," through the ",(0,a.kt)("inlineCode",{parentName:"p"},"flip()")," function. "),(0,a.kt)("h2",{id:"testing-your-contract"},"Testing Your Contract"),(0,a.kt)("p",null,"You will see at the bottom of the source code there are simple test cases which verify the functionality of the contract. We can quickly test this code is functioning as expected using the ",(0,a.kt)("strong",{parentName:"p"},"off-chain test environment")," that ink! provides."),(0,a.kt)("p",null,"In your project folder run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo +nightly test\n")),(0,a.kt)("p",null,"To which you should see a successful test completion:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ cargo +nightly test\n    running 2 tests\n    test flipper::tests::it_works ... ok\n    test flipper::tests::default_works ... ok\n\n    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")),(0,a.kt)("p",null,"Now that we are feeling confident things are working, we can actually compile this contract to Wasm in the next step."))}d.isMDXComponent=!0}}]);