"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2572],{79204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=n(17624),a=n(4552);const s={title:"strict_balance_equality",hide_title:!0,description:"strict_balance_equality lint documentation"},r="strict_balance_equality",c={id:"linter/rules/strict_balance_equality",title:"strict_balance_equality",description:"strict_balance_equality lint documentation",source:"@site/versioned_docs/version-5.x/linter/rules/strict_balance_equality.md",sourceDirName:"linter/rules",slug:"/linter/rules/strict_balance_equality",permalink:"/es/5.x/linter/rules/strict_balance_equality",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/linter/rules/strict_balance_equality.md",tags:[],version:"5.x",frontMatter:{title:"strict_balance_equality",hide_title:!0,description:"strict_balance_equality lint documentation"},sidebar:"reference",previous:{title:"storage_never_freed",permalink:"/es/5.x/linter/rules/storage_never_freed"},next:{title:"non_fallible_api",permalink:"/es/5.x/linter/rules/non_fallible_api"}},l={},o=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this bad?",id:"why-is-this-bad",level:2},{value:"Known problems",id:"known-problems",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"strict_balance_equality",children:"strict_balance_equality"}),"\n",(0,i.jsx)(t.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,i.jsx)(t.p,{children:"Looks for strict equalities with balance in ink! contracts."}),"\n",(0,i.jsx)(t.h2,{id:"why-is-this-bad",children:"Why is this bad?"}),"\n",(0,i.jsxs)(t.p,{children:["The problem with strict balance equality is that it is always possible to forcibly send\ntokens to a contract. For example, using\n",(0,i.jsx)(t.a,{href:"https://paritytech.github.io/ink/ink_env/fn.terminate_contract.html",children:(0,i.jsx)(t.code,{children:"terminate_contract"})}),".\nIn such a case, the condition involving the contract balance will work incorrectly, what\nmay lead to security issues, including DoS attacks and draining contract's gas."]}),"\n",(0,i.jsx)(t.h2,{id:"known-problems",children:"Known problems"}),"\n",(0,i.jsx)(t.p,{children:"There are many ways to implement balance comparison in ink! contracts. This lint is not\ntrying to be exhaustive. Instead, it addresses the most common cases that may occur in\nreal-world contracts and focuses on precision and lack of false positives."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Assume, there is an attacker contract that sends all its funds to the target contract when\nterminated:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\npub mod attacker {\n  // ...\n  #[ink(message)]\n  pub fn attack(&mut self, target: &AccountId) {\n      self.env().terminate_contract(target);\n  }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"If the target contains a condition with strict balance equality, this may be manipulated by\nthe attacker:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\npub mod target {\n  // ...\n  #[ink(message)]\n  pub fn do_something(&mut self) {\n      if self.env().balance() != 100 { // Bad: Strict balance equality\n          // ... some logic\n      }\n  }\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"This could be mitigated using non-strict equality operators in the condition with the\nbalance:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\npub mod target {\n  // ...\n  #[ink(message)]\n  pub fn do_something(&mut self) {\n      if self.env().balance() < 100 { // Good: Non-strict equality\n          // ... some logic\n      }\n  }\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>r});var i=n(11504);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);