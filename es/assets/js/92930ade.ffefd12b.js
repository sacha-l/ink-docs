"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Eventos",slug:"/basics/eventos",hide_title:!0},i=void 0,s={unversionedId:"basics/events",id:"basics/events",title:"Eventos",description:"Un smart contract en ink! puede definir eventos que pueden ser emitidos durante la execuci\xf3n del contrato.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/events.md",sourceDirName:"basics",slug:"/basics/eventos",permalink:"/es/basics/eventos",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/events.md",tags:[],version:"current",frontMatter:{title:"Eventos",slug:"/basics/eventos",hide_title:!0},sidebar:"reference",previous:{title:"Mutando Valores del Storage",permalink:"/es/basics/mutando-valores-del-storage"},next:{title:"Selectores",permalink:"/es/basics/selectors"}},l={},c=[{value:"Definici\xf3n de Eventos",id:"definici\xf3n-de-eventos",level:2},{value:"Emitir Eventos en un Constructor",id:"emitir-eventos-en-un-constructor",level:2},{value:"Emitir Eventos desde Mensajes",id:"emitir-eventos-desde-mensajes",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/balloons-1.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"eventos"},"Eventos"),(0,a.kt)("p",null,"Un smart contract en ink! puede definir eventos que pueden ser emitidos durante la execuci\xf3n del contrato.\nEmitir eventos puede ser utilizado por herramientas de terceros para consultar informaci\xf3n sobre la ejecuci\xf3n y el estado de un contrato."),(0,a.kt)("p",null,"El siguiente ejemplo de un contrato en ink! muestra como se define un evento ",(0,a.kt)("inlineCode",{parentName:"p"},"Transferred")," y se emite en ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod erc20 {\n    /// Definir un evento que es emitido\n    /// cada vez que el valor se transfiere.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // m\xe1s campos ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n")),(0,a.kt)("p",null,"Vea nuestro ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs"},(0,a.kt)("inlineCode",{parentName:"a"},"ERC20 contrato de ejemplo")),"\npara un elaborado ejemplo que utiliza eventos."),(0,a.kt)("h2",{id:"definici\xf3n-de-eventos"},"Definici\xf3n de Eventos"),(0,a.kt)("p",null,"As\xed es como la definici\xf3n de eventos se ve:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n")),(0,a.kt)("p",null,"A\xf1ade el atributo tag ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(topic)]")," para cada elemento en tu evento que quieras tener indexado.\nUna buena regla general es preguntarte si alguien podr\xeda querer buscar este tema.\nPor esta raz\xf3n el ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," en el evento ejemplo de arriba no esta hecho indexado - probablemente habr\xe1 muchos eventos diferentes con\ncantidades diferentes cada uno."),(0,a.kt)("p",null,"La firma del evento es por defecto uno de los temas del evento, excepto si anotas el evento con ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(anonymous)]"),".\nMira ",(0,a.kt)("a",{parentName:"p",href:"/macros-attributes/anonymous"},"aqu\xed")," para ver m\xe1s detalles de este atributo."),(0,a.kt)("h2",{id:"emitir-eventos-en-un-constructor"},"Emitir Eventos en un Constructor"),(0,a.kt)("p",null,"En un contructor los eventos son emitidos via  ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env().emit_event()"),".\nMira este ejemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n")),(0,a.kt)("h2",{id:"emitir-eventos-desde-mensajes"},"Emitir Eventos desde Mensajes"),(0,a.kt)("p",null,"En un mensaje los eventos se emiten via ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env().emit_event()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementaci\xf3n oculta\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n")))}m.isMDXComponent=!0}}]);