"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6408],{6612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(17624),o=t(4552);const i={title:"Eventos",slug:"/basics/eventos",hide_title:!0},r="Eventos",a={id:"basics/events",title:"Eventos",description:"Un smart contract en ink! puede definir eventos que pueden ser emitidos durante la execuci\xf3n del contrato.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/basics/events.md",sourceDirName:"basics",slug:"/basics/eventos",permalink:"/es/5.x/basics/eventos",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/basics/events.md",tags:[],version:"5.x",frontMatter:{title:"Eventos",slug:"/basics/eventos",hide_title:!0},sidebar:"reference",previous:{title:"Mutando Valores del Storage",permalink:"/es/5.x/basics/mutando-valores-del-storage"},next:{title:"Selectores",permalink:"/es/5.x/basics/selectors"}},c={},l=[{value:"Definici\xf3n de Eventos",id:"definici\xf3n-de-eventos",level:2},{value:"Emitir Eventos en un Constructor",id:"emitir-eventos-en-un-constructor",level:2},{value:"Emitir Eventos desde Mensajes",id:"emitir-eventos-desde-mensajes",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/balloons-1.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.h1,{id:"eventos",children:"Eventos"}),"\n",(0,s.jsx)(n.p,{children:"Un smart contract en ink! puede definir eventos que pueden ser emitidos durante la execuci\xf3n del contrato.\nEmitir eventos puede ser utilizado por herramientas de terceros para consultar informaci\xf3n sobre la ejecuci\xf3n y el estado de un contrato."}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo de un contrato en ink! muestra como se define un evento ",(0,s.jsx)(n.code,{children:"Transferred"})," y se emite en ",(0,s.jsx)(n.code,{children:"#[ink(constructor)]"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod erc20 {\n    /// Definir un evento que es emitido\n    /// cada vez que el valor se transfiere.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // m\xe1s campos ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Vea nuestro ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs",children:(0,s.jsx)(n.code,{children:"ERC20 contrato de ejemplo"})}),"\npara un elaborado ejemplo que utiliza eventos."]}),"\n",(0,s.jsx)(n.h2,{id:"definici\xf3n-de-eventos",children:"Definici\xf3n de Eventos"}),"\n",(0,s.jsx)(n.p,{children:"As\xed es como la definici\xf3n de eventos se ve:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["A\xf1ade el atributo tag ",(0,s.jsx)(n.code,{children:"#[ink(topic)]"})," para cada elemento en tu evento que quieras tener indexado.\nUna buena regla general es preguntarte si alguien podr\xeda querer buscar este tema.\nPor esta raz\xf3n el ",(0,s.jsx)(n.code,{children:"amount"})," en el evento ejemplo de arriba no esta hecho indexado - probablemente habr\xe1 muchos eventos diferentes con\ncantidades diferentes cada uno."]}),"\n",(0,s.jsxs)(n.p,{children:["La firma del evento es por defecto uno de los temas del evento, excepto si anotas el evento con ",(0,s.jsx)(n.code,{children:"#[ink(anonymous)]"}),".\nMira ",(0,s.jsx)(n.a,{href:"/macros-attributes/anonymous",children:"aqu\xed"})," para ver m\xe1s detalles de este atributo."]}),"\n",(0,s.jsx)(n.h2,{id:"emitir-eventos-en-un-constructor",children:"Emitir Eventos en un Constructor"}),"\n",(0,s.jsxs)(n.p,{children:["En un contructor los eventos son emitidos via  ",(0,s.jsx)(n.code,{children:"Self::env().emit_event()"}),".\nMira este ejemplo:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"emitir-eventos-desde-mensajes",children:"Emitir Eventos desde Mensajes"}),"\n",(0,s.jsxs)(n.p,{children:["En un mensaje los eventos se emiten via ",(0,s.jsx)(n.code,{children:"self.env().emit_event()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementaci\xf3n oculta\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(11504);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);