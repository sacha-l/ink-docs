"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9472],{93924:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=n(17624),r=n(4552);const s={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},c=void 0,i={id:"macros-attributes/constructor",title:"#[ink(constructor)]",description:"Aplicable a un m\xe9todo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/es/macros-attributes/constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/constructor.md",tags:[],version:"current",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/es/macros-attributes/anonymous"},next:{title:"#[ink(default)]",permalink:"/es/macros-attributes/default"}},a={},u=[{value:"Ejemplo",id:"ejemplo",level:2}];function l(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/text/constructor.svg",className:"titlePic"}),"\n",(0,o.jsx)(e.p,{children:"Aplicable a un m\xe9todo."}),"\n",(0,o.jsx)(e.p,{children:"Marca un m\xe9todo (o m\xfaltiples m\xe9todos) para el struc del ink! storage como contructor haciendo que este disponible\npara la API de instanciaci\xf3n del contrato."}),"\n",(0,o.jsxs)(e.p,{children:["Tiene que haber al menos un m\xe9todo ",(0,o.jsx)(e.code,{children:"#[ink(constructor)]"})," definido."]}),"\n",(0,o.jsxs)(e.p,{children:["Los m\xe9todos marcados con ",(0,o.jsx)(e.code,{children:"#[ink(constructor)]"})," son especiales ya que son dispatacble en el momento\nde la instanciaci\xf3n del contrato. Un contrato puede definir m\xfaltiples constructores que permite al\nlos usuarios del contrato inicializar el contrato de diferentes maneras."]}),"\n",(0,o.jsx)(e.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,r.M)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(l,{...t})}):l(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>i,M:()=>c});var o=n(11504);const r={},s=o.createContext(r);function c(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:c(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);