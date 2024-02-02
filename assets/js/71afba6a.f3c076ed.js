"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9624],{30968:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=t(17624),o=t(4552);const r={title:"no_main",hide_title:!0,description:"no_main lint documentation"},s="no_main",a={id:"linter/rules/no_main",title:"no_main",description:"no_main lint documentation",source:"@site/versioned_docs/version-5.x/linter/rules/no_main.md",sourceDirName:"linter/rules",slug:"/linter/rules/no_main",permalink:"/5.x/linter/rules/no_main",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/linter/rules/no_main.md",tags:[],version:"5.x",frontMatter:{title:"no_main",hide_title:!0,description:"no_main lint documentation"},sidebar:"reference",previous:{title:"Overview",permalink:"/5.x/linter/overview"},next:{title:"primitive_topic",permalink:"/5.x/linter/rules/primitive_topic"}},c={},d=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this necessary?",id:"why-is-this-necessary",level:2},{value:"Example",id:"example",level:2}];function l(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"no_main",children:"no_main"}),"\n",(0,i.jsx)(e.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,i.jsxs)(e.p,{children:["Checks if a contract is annotated with the ",(0,i.jsx)(e.code,{children:"no_main"})," inner attribute."]}),"\n",(0,i.jsx)(e.h2,{id:"why-is-this-necessary",children:"Why is this necessary?"}),"\n",(0,i.jsxs)(e.p,{children:["Contracts must be annotated with ",(0,i.jsx)(e.code,{children:"no_main"})," inner attribute when compiled for on-chain\nexecution."]}),"\n",(0,i.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:'// Bad: Contract does not contain the `no_main` attribute,\n// so it cannot be compiled to Wasm\n#![cfg_attr(not(feature = "std"), no_std)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n'})}),"\n",(0,i.jsx)(e.p,{children:"Use instead:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n#[ink::contract]\nmod my_contract { /* ... */ }\n'})})]})}function m(n={}){const{wrapper:e}={...(0,o.M)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},4552:(n,e,t)=>{t.d(e,{I:()=>a,M:()=>s});var i=t(11504);const o={},r=i.createContext(o);function s(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);