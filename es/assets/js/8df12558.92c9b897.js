"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7488],{7552:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=s(17624),c=s(4552);const i={title:"Environment Functions",slug:"/basics/environment-functions"},r=void 0,o={id:"basics/env-functions",title:"Environment Functions",description:"ink! exposes a number of handy environment functions.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/env-functions.md",sourceDirName:"basics",slug:"/basics/environment-functions",permalink:"/es/3.x/basics/environment-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/env-functions.md",tags:[],version:"3.x",frontMatter:{title:"Environment Functions",slug:"/basics/environment-functions"},sidebar:"reference",previous:{title:"Contract Testing",permalink:"/es/3.x/basics/contract-testing"},next:{title:"Metadata",permalink:"/es/3.x/metadata"}},d={},l=[];function a(n){const e={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,c.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["ink! exposes a number of handy environment functions.\nA full overview ",(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/#functions",children:"is found here"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["In an ",(0,t.jsx)(e.code,{children:"#[ink(constructor)]"}),"  use ",(0,t.jsx)(e.code,{children:"Self::env()"})," to access those,\nin an ",(0,t.jsx)(e.code,{children:"#[ink(message)]"})," use ",(0,t.jsx)(e.code,{children:"self.env()"}),".\nSo e.g. ",(0,t.jsx)(e.code,{children:"Self::env().caller()"})," or ",(0,t.jsx)(e.code,{children:"self.env().caller()"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Some handy functions include:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.caller.html",children:(0,t.jsx)(e.code,{children:"caller()"})}),": Returns the address of the caller of the executed contract."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.account_id.html",children:(0,t.jsx)(e.code,{children:"account_id()"})}),": Returns the account ID of the executed contract."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.balance.html",children:(0,t.jsx)(e.code,{children:"balance()"})}),": Returns the balance of the executed contract."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.block_number.html",children:(0,t.jsx)(e.code,{children:"block_number()"})}),": Returns the current block number."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.random.html",children:(0,t.jsx)(e.code,{children:"random()"})}),": Returns a random hash seed."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.emit_event.html",children:(0,t.jsx)(e.code,{children:"emit_event(\u2026)"})}),": Emits an event with the given event data."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.transfer.html",children:(0,t.jsx)(e.code,{children:"transfer(\u2026)"})}),": Transfers value from the contract to the destination account ID."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_bytes.html",children:(0,t.jsx)(e.code,{children:"hash_bytes(\u2026)"})}),": Conducts the crypto hash of the given input and stores the result in output."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/#functions",children:"\u2026and many more"}),"."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,c.M)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},4552:(n,e,s)=>{s.d(e,{I:()=>o,M:()=>r});var t=s(11504);const c={},i=t.createContext(c);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);