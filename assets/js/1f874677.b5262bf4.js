"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8356],{12972:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var s=t(17624),a=t(4552);const i={title:"#[ink(message)]",slug:"/macros-attributes/message",hide_title:!0},r=void 0,c={id:"macros-attributes/message",title:"#[ink(message)]",description:"Applicable to methods.",source:"@site/docs/macros-attributes/message.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/message",permalink:"/macros-attributes/message",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/message.md",tags:[],version:"current",frontMatter:{title:"#[ink(message)]",slug:"/macros-attributes/message",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(impl)]",permalink:"/macros-attributes/impl"},next:{title:'#[ink(namespace = "\u2026")]',permalink:"/macros-attributes/namespace"}},l={},o=[{value:"Messages Return Value",id:"messages-return-value",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/text/message.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.p,{children:"Applicable to methods."}),"\n",(0,s.jsx)(n.p,{children:"Flags a method for the ink! storage struct as message making it available to the API for calling the contract."}),"\n",(0,s.jsxs)(n.p,{children:["Note that all public functions must use the ",(0,s.jsx)(n.code,{children:"#[ink(message)]"})," attribute"]}),"\n",(0,s.jsxs)(n.p,{children:["There must be at least one ",(0,s.jsx)(n.code,{children:"#[ink(message)]"})," defined method."]}),"\n",(0,s.jsxs)(n.p,{children:["Methods flagged with ",(0,s.jsx)(n.code,{children:"#[ink(message)]"})," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."]}),"\n",(0,s.jsx)(n.p,{children:"An ink! smart contract can have multiple such ink! messages defined."}),"\n",(0,s.jsxs)(n.p,{children:["An ink! message with a ",(0,s.jsx)(n.code,{children:"&self"})," receiver may only read state whereas an ink! message\nwith a ",(0,s.jsx)(n.code,{children:"&mut self"})," receiver may mutate the contract's storage."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\npub fn purely_reading(&self, from: AccountId) {\n    // actual implementation\n}\n\n#[ink(message)]\npub fn mutates_storage(&mut self, from: AccountId) {\n    // actual implementation\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"messages-return-value",children:"Messages Return Value"}),"\n",(0,s.jsxs)(n.p,{children:["The return value of a message needs to implement ",(0,s.jsx)(n.code,{children:"scale::Encode"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["It is notable that the collections under ",(0,s.jsx)(n.code,{children:"ink_storage"})," \u2012 such as e.g. ",(0,s.jsx)(n.code,{children:"Vec"})," or ",(0,s.jsx)(n.code,{children:"HashMap"})," \u2012\ndon't implement ",(0,s.jsx)(n.code,{children:"scale::Encode"}),". This means you can't just return a ",(0,s.jsx)(n.code,{children:"Vec"})," from an ink! message.\nThis restriction is intentional \u2012 returning a complete data structure with a potentially unbounded\ncontent is an anti-pattern for smart contracts. Just think about the unpredictable gas costs."]}),"\n",(0,s.jsxs)(n.p,{children:["If you ",(0,s.jsx)(n.em,{children:"really really"})," need to return a data structure in its entirety then use the ones from\n",(0,s.jsx)(n.code,{children:"ink_prelude"})," (e.g. ",(0,s.jsx)(n.code,{children:"ink_prelude::vec::Vec"}),"). Those implement ",(0,s.jsx)(n.code,{children:"scale::Encode"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Given the ",(0,s.jsx)(n.code,{children:"Flipper"})," contract definition above we add some ",(0,s.jsx)(n.code,{children:"#[ink(message)]"})," definitions\nas follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>r});var s=t(11504);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);