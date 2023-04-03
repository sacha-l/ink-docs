"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2812],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(g,s(s({ref:n},c),{},{components:t})):a.createElement(g,s({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const o={title:"Almacenando Valores",slug:"/basics/storing-values",hide_title:!0},s=void 0,i={unversionedId:"basics/storing-values",id:"basics/storing-values",title:"Almacenando Valores",description:"As\xed es como se almacenan valores simples en el storage:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/storing-values.md",sourceDirName:"basics",slug:"/basics/storing-values",permalink:"/es/basics/storing-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/storing-values.md",tags:[],version:"current",frontMatter:{title:"Almacenando Valores",slug:"/basics/storing-values",hide_title:!0},sidebar:"reference",previous:{title:"Plantilla de un Contrato",permalink:"/es/basics/contract-template"},next:{title:"Leer Valores del Storage",permalink:"/es/basics/leer-valores-del-storage"}},l={},u=[{value:"Tipos Soportados",id:"tipos-soportados",level:2},{value:"String, Vec y m\xe1s",id:"string-vec-y-m\xe1s",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Substrate Types",id:"substrate-types",level:3},{value:"Enum",id:"enum",level:3},{value:"Struct",id:"struct",level:3},{value:"Use of enum",id:"use-of-enum",level:2},{value:"Inicializar Storage en Constructores",id:"inicializar-storage-en-constructores",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"almacenando-valores"},"Almacenando Valores"),(0,r.kt)("p",null,"As\xed es como se almacenan valores simples en el ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n")),(0,r.kt)("h2",{id:"tipos-soportados"},"Tipos Soportados"),(0,r.kt)("p",null,"Los contratos de Substrate pueden almacenar tipos que sean codificables y decodificables con ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-codec"},"Parity Codec"),"\nque incluye la mayor\xeda de los tipos de datos comunes de Rust, como ",(0,r.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"u{8,16,32,64,128}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"i{8,16,32,64,128}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", tuplas, y arrays."),(0,r.kt)("p",null,"Adem\xe1s, ink! proporciona tipos espec\xedficos de ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/"},"substrate")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash")," a los contratos inteligentes como si fueran tipos primitivos."),(0,r.kt)("h3",{id:"string-vec-y-m\xe1s"},"String, Vec y m\xe1s"),(0,r.kt)("p",null,"Como ink! opera en un entorno ",(0,r.kt)("inlineCode",{parentName:"p"},"no_std"),", necesitamos traer nuestras propias definiciones para los tipos de datos incluidos en std, como ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),". La caja ink_prelude ofrece tales definiciones para la mayor\xeda de los tipos de datos comunes de std y pueden ser utilizados de manera segura en un contrato ink!."),(0,r.kt)("p",null,"Puedes utilizar las definiciones del preludio de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod MyContractWithStringsAndArrays {\n    use ink::prelude::string::String;\n    use ink::prelude::vec::Vec;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        // Almacena una cadena\n        my_string: String,\n        // Almacena un u32 en un vector\n        my_vector: Vec<u32>,\n    }\n    /* --snip-- */\n}\n")),(0,r.kt)("h3",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"ink! tambi\xe9n proporciona el tipo de storage ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping"),". Puedes leer m\xe1s sobre este tipo ",(0,r.kt)("a",{parentName:"p",href:"/datastructures/mapping"},"aqu\xed"),"."),(0,r.kt)("h3",{id:"substrate-types"},"Substrate Types"),(0,r.kt)("p",null,"Aqu\xed hay un ejemplo de c\xf3mo almacenar los tipos de Substrate ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"Hash"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod MyContract {\n\n    // Nuestra estructura utilizar\xe1 esos tipos de tinta! por defecto\n    #[ink(storage)]\n    pub struct MyContract {\n        // Almacena un AccountId\n        my_account: AccountId,\n        // Almacena un Balance\n        my_balance: Balance,\n        // Almacena un Hash\n        my_hash: Hash,\n    }\n    /* --snip-- */\n}\n")),(0,r.kt)("h3",{id:"enum"},"Enum"),(0,r.kt)("p",null,"La enumeraci\xf3n tambi\xe9n se puede utilizar como tipo de datos. Su uso se muestra en la secci\xf3n ",(0,r.kt)("a",{parentName:"p",href:"#struct"},"Struct"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Status {\n    /// Una subasta a\xfan no ha comenzado.\n    NotStarted,\n    /// Estamos en el per\xedodo de inicio de la subasta, recopilando ofertas iniciales.\n    OpeningPeriod,\n    /// Estamos en el per\xedodo final de la subasta, donde estamos tomando instant\xe1neas\n    /// de las ofertas ganadoras.\n}\n")),(0,r.kt)("h3",{id:"struct"},"Struct"),(0,r.kt)("p",null,"Puede combinar todos los tipos mencionados anteriormente incluso en una estructura personalizada que luego puede almacenar en el almacenamiento de contratos."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"mod MyContract {\n    use ink::prelude::string::String;\n    use ink::prelude::vec::Vec;\n\n\n    pub struct Auction {\n        /// Nombre de marca del evento de subasta.\n        name: String,\n        /// Alg\xfan hash que identifica el tema de la subasta.\n        subject: Hash,\n        /// Estado de la subasta.\n        status: Status, // Enum: Uso mostrado en la siguiente secci\xf3n\n        /// La subasta de vela no puede tener un ganador.\n        /// Si se finaliza la subasta, eso significa que se determina el ganador.\n        finalized: bool,\n        /// vector\n        vector: Vec<u8>,\n    }\n\n    #[ink(storage)]\n    pub struct MyContract {\n        // Almacena las subastas en un vec\n        auctions: Vec<Auction>,\n    }\n}\n\n")),(0,r.kt)("h2",{id:"use-of-enum"},"Use of enum"),(0,r.kt)("p",null,"Enum puede ser usado como el tipo de un valor dentro de un ",(0,r.kt)("inlineCode",{parentName:"p"},"struct")," como se ha mostrado antes en ",(0,r.kt)("inlineCode",{parentName:"p"},"struct Auction"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Status {\n    /// El auction a\xfan no ha comenzado.\n    NotStarted,\n    /// El auction se encuentra en la parte inicial, acumulando pujas iniciales.\n    OpeningPeriod,\n    /// Nos encontramos en la parte final del auction, tomamos snapshots\n    /// de las pujas ganadoras.\n    EndingPeriod,\n}\n")),(0,r.kt)("p",null,"Los valores de un enum deben ser referenciados como ",(0,r.kt)("inlineCode",{parentName:"p"},"Status::OpeningPeriod"),"."),(0,r.kt)("h2",{id:"inicializar-storage-en-constructores"},"Inicializar Storage en Constructores"),(0,r.kt)("p",null,"Constructores es c\xf3mo se inicializan los valores\nCada ink! smart contract debe tener un constructor que se ejecuta una vez cuando el contrato es creado. Los ink! smart contracts pueden tener m\xfaltiples constructores:"),(0,r.kt)("p",null,"Tenga en cuenta que si tiene un contrato cuyo almacenamiento contiene ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," tambi\xe9n puedes utilizar\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink_lang::utils::initialize_contract")," en tu constructor. Mira la\n",(0,r.kt)("a",{parentName:"p",href:"/datastructures/mapping"},"documentaci\xf3n de ",(0,r.kt)("inlineCode",{parentName:"a"},"Mapping"))," para m\xe1s detalles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n")))}d.isMDXComponent=!0}}]);