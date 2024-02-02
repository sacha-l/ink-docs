"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8920],{87732:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=o(17624),s=o(4552);const r={title:"Troubleshooting",slug:"/getting-started/troubleshooting",hide_title:!0},i="Troubleshooting",a={id:"getting-started/troubleshooting",title:"Troubleshooting",description:"Here are solutions to some of the common problems you may come across:",source:"@site/versioned_docs/version-5.x/getting-started/troubleshooting.md",sourceDirName:"getting-started",slug:"/getting-started/troubleshooting",permalink:"/5.x/getting-started/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/getting-started/troubleshooting.md",tags:[],version:"5.x",frontMatter:{title:"Troubleshooting",slug:"/getting-started/troubleshooting",hide_title:!0},sidebar:"reference",previous:{title:"Call Your Contract",permalink:"/5.x/getting-started/calling-your-contract"},next:{title:"Contract Template",permalink:"/5.x/basics/contract-template"}},c={},l=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",level:3},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",level:3},{value:"Other Issues",id:"other-issues",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/img/title/magnifying-glass.svg",className:"titlePic"}),"\n",(0,n.jsx)(t.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(t.p,{children:"Here are solutions to some of the common problems you may come across:"}),"\n",(0,n.jsx)(t.h3,{id:"unexpected-epoch-change",children:"Unexpected Epoch Change"}),"\n",(0,n.jsx)(t.p,{children:"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'ClientImport("Unexpected epoch change")\n'})}),"\n",(0,n.jsxs)(t.p,{children:["To solve this you will need to restart your node with: ",(0,n.jsx)(t.code,{children:"substrate-contracts-node"}),". At that point, you will\nneed to re-deploy any contracts and re-do any steps that you may have done before on your node. As\nlong as you keep your node running, you should face no issues."]}),"\n",(0,n.jsx)(t.h3,{id:"old-contracts-in-local-storage",children:"Old Contracts in Local Storage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Contracts UI"})," uses its own local storage to track the contracts that you have deployed. This means\nthat if you deploy a contract using the UI, and then purge your Substrate node, you will be prompted to\nreset your local storage and please do so. And then re-deploy any contracts and re-do any steps that\nyou may have done before on your node."]}),"\n",(0,n.jsx)(t.h3,{id:"other-issues",children:"Other Issues"}),"\n",(0,n.jsxs)(t.p,{children:["If you run into any other issues during this tutorial, please ",(0,n.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-docs/issues",children:"report an issue"}),"!"]})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>i});var n=o(11504);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);