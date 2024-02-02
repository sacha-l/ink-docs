"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[780],{57580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(17624),i=n(4552);const a={title:"End-to-End (E2E) Tests",hide_title:!0,slug:"/basics/contract-testing/end-to-end-e2e-testing"},o="End-to-End (E2E) Tests",c={id:"testing/e2e",title:"End-to-End (E2E) Tests",description:"E2E testing enables developers to write a test that will not only test the contract in an",source:"@site/versioned_docs/version-5.x/testing/e2e.md",sourceDirName:"testing",slug:"/basics/contract-testing/end-to-end-e2e-testing",permalink:"/es/5.x/basics/contract-testing/end-to-end-e2e-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/e2e.md",tags:[],version:"5.x",frontMatter:{title:"End-to-End (E2E) Tests",hide_title:!0,slug:"/basics/contract-testing/end-to-end-e2e-testing"},sidebar:"reference",previous:{title:"DRink!",permalink:"/es/5.x/basics/contract-testing/drink"},next:{title:"Testing with Chain Snapshots",permalink:"/es/5.x/basics/contract-testing/chain-snapshot"}},r={},l=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.h1,{id:"end-to-end-e2e-tests",children:"End-to-End (E2E) Tests"}),"\n",(0,s.jsxs)(t.p,{children:["E2E testing enables developers to write a test that will not only test the contract in an\nisolated manner; instead the contract will be tested ",(0,s.jsx)(t.em,{children:"together"})," with all components that\nwill be involved on-chain \u2013 so from end to end. This way of testing resembles closely\nhow the contract will actually behave in production."]}),"\n",(0,s.jsx)(t.p,{children:"As part of the test, the contract will be compiled and deployed to a Substrate node that\nis running in the background. ink! offers API functions that enable developers to then\ninteract with the contract via transactions that they create and submit to the blockchain."}),"\n",(0,s.jsx)(t.p,{children:"You as a developer can define assertions on the outcome of their transactions, such as checking\nfor state mutations, transaction failures or incurred gas costs."}),"\n",(0,s.jsx)(t.p,{children:"Your chain configuration will be tested together with the smart contract. And if your\nchain has pallets that are involved with the smart contract execution, those will be\npart of the test execution as well."}),"\n",(0,s.jsx)(t.p,{children:"ink! does not put any requirements on the Substrate node in the background \u2013 for example,\nyou can run a node that contains a snapshot of a live network."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["The following code example illustrates a basic E2E test for the\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[ink_e2e::test]\nasync fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n    // When the function is entered, the contract was already\n    // built in the background via `cargo contract build`.\n    // The `client` object exposes an interface to interact\n    // with the Substrate node.\n    \n    // given\n    let constructor = FlipperRef::new_default();\n\n    // when\n    let contract_acc_id = client\n        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)\n        .await\n        .expect("instantiate failed")\n        .account_id;\n\n    // then\n    let get = build_message::<FlipperRef>(contract_acc_id.clone())\n        .call(|flipper| flipper.get());\n    let get_res = client\n        .call(&ink_e2e::bob(), get, 0, None)\n        .await\n        .expect("get failed");\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can run the above test by going to the ",(0,s.jsx)(t.code,{children:"flipper"})," folder in\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/tree/main",children:"the ink! examples directory"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Before you can run the test, you have to install a Substrate\nnode with ",(0,s.jsx)(t.code,{children:"pallet-contracts"}),". By default e2e tests require that you install ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,s.jsx)(t.code,{children:"substrate-contracts-node"})}),". You do not need to run it in the background since the node is started for each test independently.\nTo install the latest version:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you want to run any other node with ",(0,s.jsx)(t.code,{children:"pallet-contracts"})," you need to change ",(0,s.jsx)(t.code,{children:"CONTRACTS_NODE"})," environment variable:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"\n'})}),"\n",(0,s.jsx)(t.p,{children:"And finally execute the following command to start e2e test execution."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cargo test --features e2e-tests\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var s=n(11504);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);