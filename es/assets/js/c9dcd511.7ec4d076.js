"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[43],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=t(87462),i=(t(67294),t(3905));const r={title:"Definiciones Trait",slug:"/basics/definiciones-trait",hide_title:!0},s=void 0,o={unversionedId:"basics/trait-definitions",id:"version-5.x/basics/trait-definitions",title:"Definiciones Trait",description:"A trav\xe9s del proc. macro #[ink::trait_definition] ahora es posible definir tu propia trait definici\xf3n que se pueden implementar en los ink! smart contracts.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/basics/trait-definitions.md",sourceDirName:"basics",slug:"/basics/definiciones-trait",permalink:"/es/5.x/basics/definiciones-trait",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/basics/trait-definitions.md",tags:[],version:"5.x",frontMatter:{title:"Definiciones Trait",slug:"/basics/definiciones-trait",hide_title:!0},sidebar:"reference",previous:{title:"Selectores",permalink:"/es/5.x/basics/selectors"},next:{title:"Llamadas Cross-Contract",permalink:"/es/5.x/basics/cross-contract-calling"}},l={},c=[{value:"Ejemplo",id:"ejemplo",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,i.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("img",{src:"/img/title/text/trait.svg",className:"titlePic"}),(0,i.kt)("p",null,"A trav\xe9s del proc. macro ",(0,i.kt)("inlineCode",{parentName:"p"},"#[ink::trait_definition]")," ahora es posible definir tu propia trait definici\xf3n que se pueden implementar en los ink! smart contracts."),(0,i.kt)("p",null,"Esto permite definir interfaces de smart contracts compartidas para diferentes implementaciones concretas.\nTenga en cuenta que que esta definici\xf3n trait de ink! puede ser definida en cualquier lugar, incluso en otro crate!"),(0,i.kt)("p",null,"Vea nuestro ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/trait-erc20/lib.rs"},(0,i.kt)("inlineCode",{parentName:"a"},"ERC20-Trait contracto de ejemplo")),"\npara un elaborado ejemplo que utiliza definiciones trait."),(0,i.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,i.kt)("p",null,"Definido en el m\xf3dulo ",(0,i.kt)("inlineCode",{parentName:"p"},"base_erc20.rs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::trait_definition]\npub trait BaseErc20 {\n    /// Crear un nuevo contrato ERC-20 e inicializa con un suministro inicial para el instanciador.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Devuelve el suministro total.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    /// Transfiere `amount` de la persona que llama el contrato a `to`.\n    #[ink(message, payable)]\n    fn transfer(&mut self, to: AccountId, amount: Balance);\n}\n")),(0,i.kt)("p",null,"Una definici\xf3n de un ink! smart contract puede implementar esta definici\xf3n trait as\xed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod erc20 {\n    use base_erc20::BaseErc20;\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // m\xe1s campos ...\n    }\n\n    impl BaseErc20 for Erc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            // implementaci\xf3n ...\n        }\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            // implementaci\xf3n ...\n        }\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {\n            // implementaci\xf3n ...\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Llamar el ",(0,i.kt)("inlineCode",{parentName:"p"},"Erc20")," de arriba explicitamente mediante su implementaci\xf3n trait se puede haver como un c\xf3digo Rust normal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// --- Instanciando el contrato ERC-20:\n//\nlet mut erc20 = <Erc20 as BaseErc20>::new(1000);\n// --- Es solo el mismo como:\nuse base_erc20::BaseErc20;\nlet mut erc20 = Erc20::new(1000);\n\n// --- Recuperando el suministro total:\n//\nassert_eq!(<Erc20 as BaseErc20>::total_supply(&erc20), 1000);\n// --- Es simplemente lo mismo como:\nuse base_erc20::BaseErc20;\nassert_eq!(erc20.total_supply(), 1000);\n")),(0,i.kt)("p",null,"A\xfan existen algunas limitaciones con las ink! trait definiciones y las ink! trait implementaciones.\nPor ejemplo no es posible definir constantes asociadas o tipos o tampoco es posible tener m\xe9todos implementados por defecto.\nEstas limitaciones existen debido a las complejidades t\xe9cnicas, sin embargo muchas de ellas se van a abordar en un futuros lanzamientos de ink!."),(0,i.kt)("p",null,"Marca definiciones trait para ink! como ink! trait definiciones especiales."),(0,i.kt)("p",null,"Hay algunas restricciones para las definiciones trait de ink! que este macro comprueba. Adem\xe1s las definiciones trait de ink! son necesarias para\ntener una estructura especializada y que la principial macro ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/ink/4.0.0/ink/attr.contract.html"},(0,i.kt)("inlineCode",{parentName:"a"},"#[ink::contract]"))," pueda generar correctamente c\xf3digo para su implementaci\xf3n."),(0,i.kt)("h1",{id:"ejemplo-definici\xf3n"},"Ejemplo: Definici\xf3n"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;\n\n#[ink::trait_definition]\npub trait Erc20 {\n    /// Construye un nuevo ERC-20 smart contract utilizando el sumunistro inicial.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Devuelve el suministro total del smart contract ERC-20.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    // etc.\n}\n")),(0,i.kt)("h1",{id:"ejemplo-implementaci\xf3n"},"Ejemplo: Implementaci\xf3n"),(0,i.kt)("p",null,"Con la definici\xf3n trait de arriba puedes implementarla como se muestra a continuaci\xf3n:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod base_erc20 {\n    /// De alguna manera no podemos poner el trait el el doc-test crate root debido a bugs.\n    #[ink_lang::trait_definition]\n    pub trait Erc20 {\n        /// Construye un nuevo ERC-20 smart contract utilizando el sumunistro inicial.\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self;\n\n        /// Devuelve el suministro total del smart contract ERC-20.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance;\n    }\n\n    #[ink(storage)]\n    pub struct BaseErc20 {\n        total_supply: Balance,\n        // etc ..\n    }\n\n    impl Erc20 for BaseErc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            Self { total_supply: initial_supply }\n        }\n\n        /// Devuelve el suministro total del smart contract ERC-20.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n\n        // etc ..\n    }\n}\n")))}m.isMDXComponent=!0}}]);