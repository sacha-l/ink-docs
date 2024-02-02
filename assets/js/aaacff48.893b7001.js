"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8576],{32259:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(17624),o=t(4552);const i={title:"Testing with Chain Snapshots",hide_title:!0,slug:"/basics/contract-testing/chain-snapshot"},r="Test your Contract with a Chain Snapshot",c={id:"testing/testing-with-live-state",title:"Testing with Chain Snapshots",description:"On this page we explain how to test ink! contracts with the",source:"@site/versioned_docs/version-5.x/testing/testing-with-live-state.md",sourceDirName:"testing",slug:"/basics/contract-testing/chain-snapshot",permalink:"/5.x/basics/contract-testing/chain-snapshot",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/testing-with-live-state.md",tags:[],version:"5.x",frontMatter:{title:"Testing with Chain Snapshots",hide_title:!0,slug:"/basics/contract-testing/chain-snapshot"},sidebar:"reference",previous:{title:"End-to-End (E2E) Tests",permalink:"/5.x/basics/contract-testing/end-to-end-e2e-testing"},next:{title:"Contracts on Rococo",permalink:"/5.x/testnet"}},a={},l=[{value:"General Concept",id:"general-concept",level:2},{value:"Setup Chopsticks",id:"setup-chopsticks",level:3},{value:"Run ink! E2E Tests",id:"run-ink-e2e-tests",level:3},{value:"Application to Production Chains",id:"application-to-production-chains",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/blockchain-fork.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.h1,{id:"test-your-contract-with-a-chain-snapshot",children:"Test your Contract with a Chain Snapshot"}),"\n",(0,s.jsxs)(n.p,{children:["On this page we explain how to test ink! contracts with the\nfork of an existing chain. We'll take a snapshot of an existing\nchain for this purpose. The snapshot contains the chains full state,\nbut can be modified locally without affecting the live chain.\nWe'll use the ",(0,s.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopsticks"}),"\ntool for this purpose."]}),"\n",(0,s.jsx)(n.p,{children:"This is a powerful workflow that you can use to e.g."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Test a contract upgrade or migration locally before running it in production."}),"\n",(0,s.jsx)(n.li,{children:"Debug the behavior of an on-chain contract with on-chain state locally."}),"\n",(0,s.jsx)(n.li,{children:"Get detailed debug info and replay blocks as you want."}),"\n",(0,s.jsx)(n.li,{children:"\u2026and much more!"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In the first section of this page we explain the general concept, using a local\n",(0,s.jsx)(n.code,{children:"substrate-contracts-node"}),' that will play the role of our "live chain".\nThe ',(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," is just for exemplary purposes, you can also\napply the exact same workflow to production chains like Astar, Aleph Zero,\nPendulum and others."]}),"\n",(0,s.jsx)(n.h2,{id:"general-concept",children:"General Concept"}),"\n",(0,s.jsxs)(n.p,{children:["First you need a node that has produced some blocks with state. We'll\nuse ",(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," for this purpose.\n",(0,s.jsx)(n.a,{href:"/5.x/getting-started/running-substrate/",children:"See here"})," for how to run it."]}),"\n",(0,s.jsx)(n.p,{children:"You should get output similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$ substrate-contracts-node\n2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u270c\ufe0f  version 0.30.0-124c159ba94    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u2764\ufe0f  by Parity Technologies <admin@parity.io>, 2021-2023    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udccb Chain specification: Development    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83c\udff7  Node name: chilly-desire-6458    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udc64 Role: AUTHORITY    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udcbe Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    \n2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  \n'})}),"\n",(0,s.jsx)(n.p,{children:"Note that the node is running on port 9944."}),"\n",(0,s.jsxs)(n.p,{children:["Next, we'll create some state and produce a bunch of blocks. You can do this by deploying ",(0,s.jsxs)(n.a,{href:"https://github.com/paritytech/ink-examples/tree/main/flipper",children:["our\n",(0,s.jsx)(n.code,{children:"flipper"})," example"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"cd ink-examples/flipper/\ncargo contract build --release\ncargo contract instantiate --suri //Alice --args true -x\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can check that the contract exists by querying its state via ",(0,s.jsx)(n.code,{children:"cargo-contract"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s\n+-------+----------+--------+-------------------------+\n| Index | Root Key | Parent | Value                   |\n+=====================================================+\n| 0     | 00000000 | root   | Flipper { value: true } |\n+-------+----------+--------+-------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"setup-chopsticks",children:"Setup Chopsticks"}),"\n",(0,s.jsxs)(n.p,{children:["We will now set up ",(0,s.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks",children:"Chopsticks"}),",\na powerful tool in our ecosystem that allows us to create a parallel reality\nof an existing network."]}),"\n",(0,s.jsxs)(n.p,{children:["We will run it and have it mirror the ",(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," that is already running\non our machine from the previous step."]}),"\n",(0,s.jsx)(n.p,{children:"The following schema illustrates the setup that we will create:"}),"\n",(0,s.jsx)("img",{className:"schema2",width:!0,title:"Test your smart contract on a Chopsticks branch",src:"/img/test-smart-contract-with-chain-snapshot.svg",alt:"Chain Snapshot"}),"\n",(0,s.jsx)(n.p,{children:"Clone chopsticks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/AcalaNetwork/chopsticks\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Modify the ",(0,s.jsx)(n.code,{children:"dev.yml"})," config file in the cloned repository (or create one from scratch) :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"endpoint: ws://127.0.0.1:9944\nmock-signature-host: true\nblock: 1\ndb: ./db.sqlite\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["In the example above chopsticks will be mirroring up until block 1 from the\n",(0,s.jsx)(n.code,{children:"substrate-contracts-node"}),"."]}),(0,s.jsxs)(n.p,{children:["For production chains (like Aleph Zero or Astar) you would want to use a different\nblock number and different endpoint. The Chopsticks repository already contains a\nwide number of configurations for ink! production chains (see ",(0,s.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks/tree/master/configs",children:"here"}),").\nIf you don't find a fitting configuration there, see the section\n\"",(0,s.jsx)(n.a,{href:"#application-to-production-chains",children:"Application to Production Chains"}),'".']})]}),"\n",(0,s.jsxs)(n.p,{children:["You can either run chopsticks locally by following the instructions\n",(0,s.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks#install",children:"here"}),", or\nyou can run it using npx:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should get output similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The Chopsticks node is running on port 8000.\nIf you now execute the ",(0,s.jsx)(n.code,{children:"cargo-contract"})," storage command against this node, you'll see\nthat the ",(0,s.jsx)(n.code,{children:"flipper"})," contract exists there as well:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944\n+-------+----------+--------+-------------------------+\n| Index | Root Key | Parent | Value                   |\n+=====================================================+\n| 0     | 00000000 | root   | Flipper { value: true } |\n+-------+----------+--------+-------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Chopsticks has branched off from the live chain.\nYou can now submit transactions to the Chopsticks node on port 8000,\nwithout affecting the node/chain on port 9944."}),"\n",(0,s.jsx)(n.h3,{id:"run-ink-e2e-tests",children:"Run ink! E2E Tests"}),"\n",(0,s.jsxs)(n.p,{children:['Recap: We have our "live" ',(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," running on port 9944\nand our test node with the branched state running on port 8000."]}),"\n",(0,s.jsxs)(n.p,{children:["Next we would like to run some tests against the contract on our forked chain.\nOur ",(0,s.jsx)(n.code,{children:"flipper/lib.rs"})," contains a test that illustrates how to do this.\nThe test reads an environment variable ",(0,s.jsx)(n.code,{children:"CONTRACT_ADDR_HEX"})," that refers to\nthe ",(0,s.jsx)(n.code,{children:"flipper"})," on-chain address."]}),"\n",(0,s.jsx)(n.p,{children:"Here's the code for it:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[ink_e2e::test]\n#[ignore]\nasync fn e2e_test_deployed_contract<Client: E2EBackend>(\n    mut client: Client,\n) -> E2EResult<()> {\n    // given\n    let addr = std::env::var("CONTRACT_ADDR_HEX")\n        .unwrap()\n        .replace("0x", "");\n    let acc_id = hex::decode(addr).unwrap();\n    let acc_id = AccountId::try_from(&acc_id[..]).unwrap();\n\n    // when\n    // Invoke `Flipper::flip()` from Bob\'s account\n    let call_builder = ink_e2e::create_call_builder::<Flipper>(acc_id);\n    let flip = call_builder.flip();\n    let _flip_res = client.call(&ink_e2e::bob(), &flip).submit().await?;\n    \n    // then\n    let get = call_builder.get();\n    let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await?;\n    assert!(matches!(get_res.return_value(), false));\n    Ok(())\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The test is marked as ",(0,s.jsx)(n.code,{children:"#[ignore]"}),", as it requires the pre-conditions that we went through\nabove to succeed."]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["You can convert SS58 addresses to hex using ",(0,s.jsxs)(n.a,{href:"https://crates.io/crates/subkey",children:["the ",(0,s.jsx)(n.code,{children:"subkey"})," tool"]}),":"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"subkey inspect <YOUR-SS58>\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"Here's the process to execute the above test:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Address of your on-chain contract\nexport CONTRACT_HEX=0x2c75f0aa09dbfbfd49e6286a0f2edd3b4913f04a58b13391c79e96782f5713e3\n\n# This env variable needs to be set to reference the Chopsticks node.\n# If this env variable is not set, `ink_e2e` will spawn a new node\n# process (typically of `substrate-contracts-node`) for each test.\nexport CONTRACTS_NODE_URL=ws://127.0.0.1:8000\n\ncargo test --features e2e-tests e2e_test_deployed_contract -- --ignored\n"})}),"\n",(0,s.jsx)(n.p,{children:"You will get output similar to the following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"running 1 tests\ntest flipper::e2e_tests::e2e_test_deployed_contract ... ok\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you query the contract storage on our Chopsticks fork, you'll see that the E2E test\nflipped the boolean:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:8000\n+-------+----------+--------+-------------------------+\n| Index | Root Key | Parent | Value                   |\n+=====================================================+\n| 0     | 00000000 | root   | Flipper { value: false } |\n+-------+----------+--------+-------------------------+\n"})}),"\n",(0,s.jsxs)(n.p,{children:['On the "original" ',(0,s.jsx)(n.code,{children:"substrate-contracts-node"})," chain the boolean will be untouched."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944\n+-------+----------+--------+-------------------------+\n| Index | Root Key | Parent | Value                   |\n+=====================================================+\n| 0     | 00000000 | root   | Flipper { value: true } |\n+-------+----------+--------+-------------------------+\n"})}),"\n",(0,s.jsx)(n.p,{children:"Success! We just ran an ink! end-to-end test against the snapshot of a chain!"}),"\n",(0,s.jsx)(n.h2,{id:"application-to-production-chains",children:"Application to Production Chains"}),"\n",(0,s.jsx)(n.p,{children:"You can apply the workflow explained above to ink! production chains."}),"\n",(0,s.jsxs)(n.p,{children:["You would want to use a different block number and different endpoint.\nThe Chopsticks repository already contains a wide number of configurations for\nink! production chains (see ",(0,s.jsx)(n.a,{href:"https://github.com/AcalaNetwork/chopsticks/tree/master/configs",children:"here"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["If a pre-made config for chain you want to fork from is not available, you can just\nmodify the ",(0,s.jsx)(n.code,{children:"dev.yml"}),". You can use ",(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps",children:"polkadot-js/apps"})," to\nthe URL of an endpoint to use:"]}),"\n",(0,s.jsx)("img",{src:"/img/polkadot-js-rpc-endpoint.png"})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);