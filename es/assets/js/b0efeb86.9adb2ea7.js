"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5180],{83692:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=a(17624),n=a(4552);const r={title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},o=void 0,i={id:"datastructures/spread-storage-layout",title:"Spread Storage Layout",description:"Storage Organization",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/datastructures/spread-storage-layout.md",sourceDirName:"datastructures",slug:"/datastructures/spread-storage-layout",permalink:"/es/3.x/datastructures/spread-storage-layout",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/spread-storage-layout.md",tags:[],version:"3.x",frontMatter:{title:"Spread Storage Layout",slug:"/datastructures/spread-storage-layout"},sidebar:"reference",previous:{title:"Working with Mapping",permalink:"/es/3.x/datastructures/mapping"},next:{title:"Custom Data Structures",permalink:"/es/3.x/datastructures/custom-datastructure"}},l={},c=[{value:"Storage Organization",id:"storage-organization",level:3},{value:"Spreading",id:"spreading",level:3}];function d(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"storage-organization",children:"Storage Organization"}),"\n",(0,s.jsx)(t.p,{children:"The following schema depicts the storage which is exposed\nto ink! by the contracts pallet:"}),"\n",(0,s.jsx)("div",{class:"schema",children:(0,s.jsx)("img",{src:"/img/kv-3.x.svg",alt:"Storage Organization: Layout"})}),"\n",(0,s.jsx)(t.p,{children:"ink!'s storage operates by storing and loading entries into and from a single storage\ncell. At the moment there is no way to customize this behaviour. Depending on the data\nwe're dealing with, this can end up being good or bad."}),"\n",(0,s.jsxs)(t.p,{children:["For example, if we have a somewhat small ",(0,s.jsx)(t.code,{children:"ink_prelude::vec::Vec"})," loading all the elements\nat the same time can be advantegous - especially if we expect our message to interact\nwith most of them in a single call."]}),"\n",(0,s.jsxs)(t.p,{children:["On the other hand, this can be problematic if we're loading a large ",(0,s.jsx)(t.code,{children:"Vec"})," and only\noperating on a few elements."]}),"\n",(0,s.jsx)(t.h3,{id:"spreading",children:"Spreading"}),"\n",(0,s.jsxs)(t.p,{children:["ink! spreads information to as many cells as possible. For example if you have the\nfollowing ",(0,s.jsx)(t.code,{children:"#[ink(storage)]"})," struct every field will live in its own single storage cell.\nNote that for ",(0,s.jsx)(t.code,{children:"b"})," all 32 bytes will share the same cell!"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Spread {\n    a: i32,\n    b: [u8; 32],\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The following schema depicts the storage layout for a vector with three elements,\npersisted to storage in a spread layout."}),"\n",(0,s.jsx)("div",{class:"schema",children:(0,s.jsx)("img",{src:"/img/spread.svg",alt:"Storage Organization: Spreading"})})]})}function u(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,a)=>{a.d(t,{I:()=>i,M:()=>o});var s=a(11504);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);