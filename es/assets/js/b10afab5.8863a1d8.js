"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4724],{63676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(17624),a=n(4552);const i={title:"Mutating Storage Values",slug:"/basics/mutating-values"},o=void 0,r={id:"basics/mutating-values",title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/mutating-values.md",sourceDirName:"basics",slug:"/basics/mutating-values",permalink:"/es/3.x/basics/mutating-values",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/mutating-values.md",tags:[],version:"3.x",frontMatter:{title:"Mutating Storage Values",slug:"/basics/mutating-values"},sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/es/3.x/basics/reading-values"},next:{title:"Events",permalink:"/es/3.x/basics/events"}},u={},c=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"It's time to modify some storage!"}),"\n",(0,s.jsx)(t.h2,{id:"mutable-and-immutable-functions",children:"Mutable and Immutable Functions"}),"\n",(0,s.jsxs)(t.p,{children:["You may have noticed that the function template included ",(0,s.jsx)(t.code,{children:"self"})," as the first parameter of the\ncontract functions. It is through ",(0,s.jsx)(t.code,{children:"self"})," that you gain access to all your contract functions and\nstorage items."]}),"\n",(0,s.jsxs)(t.p,{children:["If you are simply ",(0,s.jsx)(t.em,{children:"reading"})," from the contract storage, you only need to pass ",(0,s.jsx)(t.code,{children:"&self"}),". But\nif you want to ",(0,s.jsx)(t.em,{children:"modify"})," storage items, you will need to explicitly mark it as mutable,\n",(0,s.jsx)(t.code,{children:"&mut self"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var s=n(11504);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);