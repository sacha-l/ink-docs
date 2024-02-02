"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[696],{14984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(17624),r=n(4552);const s={title:"Overview",slug:"/macros-attributes"},a=void 0,o={id:"macros-attributes/overview",title:"Overview",description:"An ink! module is the module that is flagged by #[ink::contract] containing all the ink! definitions.",source:"@site/versioned_docs/version-3.x/macros-attributes/overview.md",sourceDirName:"macros-attributes",slug:"/macros-attributes",permalink:"/3.x/macros-attributes",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/overview.md",tags:[],version:"3.x",frontMatter:{title:"Overview",slug:"/macros-attributes"},sidebar:"reference",previous:{title:"Metadata",permalink:"/3.x/metadata"},next:{title:"#[ink::contract]",permalink:"/3.x/macros-attributes/contract"}},c={},l=[{value:"Merging Attributes",id:"merging-attributes",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["An ink! module is the module that is flagged by ",(0,i.jsx)(t.code,{children:"#[ink::contract]"})," containing all the ink! definitions.\nAll ink! attributes are available to specify inside an ink! module."]}),"\n",(0,i.jsx)(t.h2,{id:"merging-attributes",children:"Merging Attributes"}),"\n",(0,i.jsx)(t.p,{children:"It is possible to merge attributes that share a common flagged entity.\nThe example below demonstrates this for a payable message with a custom selector."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'#[ink(message)]\n#[ink(payable)]\n#[ink(selector = "0xCAFEBABE")]\npub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {\n    // actual implementation\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"We can also write the above ink! message definition in the following way:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'#[ink(message, payable, selector = "0xCAFEBABE")]\npub fn transfer(&mut self, from: AccountId, to: AccountId, value: Balance) -> Result<(), Error> {\n    // actual implementation\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var i=n(11504);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);