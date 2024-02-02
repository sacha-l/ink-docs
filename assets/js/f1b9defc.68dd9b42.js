"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4944],{44532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var i=n(17624),s=n(4552);const o={title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},r=void 0,a={id:"macros-attributes/anonymous",title:"#[ink(anonymous)]",description:"Applicable to ink! events.",source:"@site/versioned_docs/version-5.x/macros-attributes/anonymous.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/anonymous",permalink:"/5.x/macros-attributes/anonymous",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/anonymous.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},sidebar:"reference",previous:{title:"#[ink::contract]",permalink:"/5.x/macros-attributes/contract"},next:{title:"#[ink(constructor)]",permalink:"/5.x/macros-attributes/constructor"}},c={},u=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/text/anon.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.p,{children:"Applicable to ink! events."}),"\n",(0,i.jsx)(t.p,{children:"Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity."}),"\n",(0,i.jsx)(t.p,{children:"Anonymous events have similar semantics as in Solidity in that their\nevent signature won't be included in their event topics serialization\nto reduce event emitting overhead. This is especially useful for user\ndefined events."}),"\n",(0,i.jsxs)(t.p,{children:["The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,i.jsx)(t.code,{children:"#[ink(anonymous)]"}),".\nThe attribute implies that it is not possible to filter for specific anonymous events by name."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink(event)]\n#[ink(anonymous)]\npub struct MyEvent {\n    #[ink(topic)]\n    field_1: i32,\n    field_2: bool,\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var i=n(11504);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);