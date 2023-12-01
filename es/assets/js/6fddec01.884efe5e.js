"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7209],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},59198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={title:"#[ink::contract]",slug:"/macros-attributes/contract",hide_title:!0},l=void 0,i={unversionedId:"macros-attributes/contract",id:"version-5.x/macros-attributes/contract",title:"#[ink::contract]",description:"Esta macro es el punto de entrada para escribir smart contracts ink!.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/contract.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/contract",permalink:"/es/5.x/macros-attributes/contract",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/contract.md",tags:[],version:"5.x",frontMatter:{title:"#[ink::contract]",slug:"/macros-attributes/contract",hide_title:!0},sidebar:"reference",previous:{title:"Introducci\xf3n",permalink:"/es/5.x/macros-attributes"},next:{title:"#[ink(anonymous)]",permalink:"/es/5.x/macros-attributes/anonymous"}},s={},p=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Uso",id:"uso",level:2},{value:"Argumentos del Header",id:"argumentos-del-header",level:3},{value:"<code>compile_as_dependency: bool</code>",id:"compile_as_dependency-bool",level:3},{value:"<code>env: impl Environment</code>",id:"env-impl-environment",level:3},{value:"An\xe1lisis",id:"an\xe1lisis",level:2},{value:"Interactuando con el Ejecutor del Contrato",id:"interactuando-con-el-ejecutor-del-contrato",level:2},{value:"Eventos",id:"eventos",level:2},{value:"Ejemplo: Flipper",id:"ejemplo-flipper",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/text/contract.svg",className:"titlePic"}),(0,r.kt)("p",null,"Esta macro es el punto de entrada para escribir smart contracts ink!."),(0,r.kt)("p",null,"Si eres un principiante aprendiendo ink! Le recomendamos que consulte nuestro amplio\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/smart-contracts/"},"workshop de ink! "),"."),(0,r.kt)("h2",{id:"descripci\xf3n"},"Descripci\xf3n"),(0,r.kt)("p",null,"La macro analiza el c\xf3digo del smart contract proporcionado y genera el c\xf3digo adecuado."),(0,r.kt)("h2",{id:"uso"},"Uso"),(0,r.kt)("h3",{id:"argumentos-del-header"},"Argumentos del Header"),(0,r.kt)("p",null,"A la macro ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," se le puede proporcionar argumentos header adicionales separados por coma:"),(0,r.kt)("h3",{id:"compile_as_dependency-bool"},(0,r.kt)("inlineCode",{parentName:"h3"},"compile_as_dependency: bool")),(0,r.kt)("p",null,"Le dice al generador de c\xf3digo de ink! que  ",(0,r.kt)("strong",{parentName:"p"},"siempre")," o ",(0,r.kt)("strong",{parentName:"p"},"nunca"),"\ncompile smart contract como si fuese utilizado como dependencia de otro smart contract de ink!"),(0,r.kt)("p",null,"Normalmente este flag solo es \xfatil para desarrolladores de ink! que\nquieran inspeccionar el la generaci\xf3n de c\xf3digo de los ink! smart contracts.\nEl autor no tiene conocimiento de ning\xfan caso de uso pr\xe1ctico particular para los usuarios que hagan uso de este flag,\npero se alienta a los redactores de contratos a refutar esto."),(0,r.kt)("p",null,"Date cuenta que se recomienda hacer uso de las feature built-in crate.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink-as-dependency")," para marcar las dependencias del smart contract\n",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," como dependencia actual de ink!."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract(compile_as_dependency = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default value:")," Depende de la propagaci\xf3n de la feature del crate de ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),"."),(0,r.kt)("h3",{id:"env-impl-environment"},(0,r.kt)("inlineCode",{parentName:"h3"},"env: impl Environment")),(0,r.kt)("p",null,"Le dice al generador de c\xf3digo ink! que entorno utilizar para el ink! smart contract.\nEl entorno debe implementar el trait ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," (definido en ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env"),") y proporciona\ntodas las necesarias definiciones de tipo fundamentales para ",(0,r.kt)("inlineCode",{parentName:"p"},"Balance"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," etc."),(0,r.kt)("p",null,"Cuando utilizamos la implementaci\xf3n personalizada de  ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," para smart contract todos los tipos\nque se exponen en el smart contract ink! y los tipos reflejados utilizados en el runtima\ndeben ser alineados con respecto a la codificaci\xf3n y semanticos SCALE. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ejemplo de Uso:")),(0,r.kt)("p",null,"Dada la implementaci\xf3n personalizada ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MyEnvironment;\n\nimpl ink::env::Environment for MyEnvironment {\n    const MAX_EVENT_TOPICS: usize = 3;\n    \n    type AccountId = u64;\n    type Balance = u128;\n    type Hash = [u8; 32];\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = ::ink::env::NoChainExtension;\n}\n")),(0,r.kt)("p",null,"Un usuario puede implementar su smart contract ink! utilizando la implementaci\xf3n personalizada\n",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," de arriba, como se demuestra a continuaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract(env = MyEnvironment)]\nmod my_contract {\n    pub struct MyEnvironment;\n   \n    impl ink::env::Environment for MyEnvironment {\n        const MAX_EVENT_TOPICS: usize = 3;\n        type AccountId = u64;\n        type Balance = u128;\n        type Hash = [u8; 32];\n        type Timestamp = u64;\n        type BlockNumber = u32;\n        type ChainExtension = ::ink::env::NoChainExtension;\n    }\n    \n    #[ink(storage)]\n    pub struct MyStorage;\n    \n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        \n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Valor por defecto:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultEnvironment")," definido en el crate ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env"),"."),(0,r.kt)("h2",{id:"an\xe1lisis"},"An\xe1lisis"),(0,r.kt)("p",null,"La macro ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro analiza completamente el smart contract\ndel input contra argumentos y estructuras no v\xe1lidas."),(0,r.kt)("p",null,"Algunas reglas de ejemplo incluyen pero no se limitan a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Debe existir exactamente una estructura ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(storage)]"),"."),(0,r.kt)("p",{parentName:"li"},"   Esta estructura define el dise\xf1o del storage sobre el que el smart contract de ink! opera.\nEl usuario puede utilizar una variedad de facilidades built-in, combinandolas de diversas maneras\no incluso proporcionando su propia implementacions de las estructuras de datos del storage."),(0,r.kt)("p",{parentName:"li"},"   Para m\xe1s informaci\xf3n visita la documentaci\xf3n del crate ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage"),"."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiene que haber al menos un ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," m\xe9todo definido."),(0,r.kt)("p",{parentName:"li"},"   Los m\xe9todos marcados con ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," son especiales porque sonson despachables\ntras la instanciaci\xf3n del contrato. Un contrato puede definir m\xfaltiples constructores\nde este tipo que permitan a los usuarios del contrato instanciar un contrato de m\xfaltiples maneras diferentes."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,r.kt)("p",{parentName:"li"},"   Dada la definici\xf3n del contrato ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," de arriba, a\xf1adimos un ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"\ncomo puedes ver:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tiene que haber al menos un ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," m\xe9todo definido."),(0,r.kt)("p",{parentName:"li"},"   Los m\xe9todos marcados con ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," son especiales porque sonson despachables\ntras la instanciaci\xf3n del contrato. El conjunto de mensajes ink! definidos por un smart contract\nink! define su superficie API con la que los usuarios pueden interactuar."),(0,r.kt)("p",{parentName:"li"},"   Un ink! smart contract puede tener multiples mensajes ink! definidos."),(0,r.kt)("p",{parentName:"li"},"   ",(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Un mensaje ink! con un receptor ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," solo puede leer el estado mientras que un mensaje ink!\ncon un receptor ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self")," puede mutar el storage del contrato."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ejemplo:")),(0,r.kt)("p",{parentName:"li"},"Dada la definici\xf3n del contrato ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," de arriba, a\xf1adimos algunas definiciones ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),"\ncomo puedes ver:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Payable Messages:")),(0,r.kt)("p",{parentName:"li"},"Un mensaje ink! por defecto rechazara llamadas que adicionalmente financial el smart contract.\nAutores del smart contract de ink pueden hacer que el mensaje de ink! sea payable a\xf1adiendole\nla marca ",(0,r.kt)("inlineCode",{parentName:"p"},"payable"),". Un ejemplo a continuaci\xf3n:"),(0,r.kt)("p",{parentName:"li"},"Date cuenta que los constructores ink! son implicitamente siempre payables y por lo tanto\nno puden marcarse como tal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Voltea el valor actual \n        #[ink(message)]\n        #[ink(payable)] // Puedes especificar payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Devuelve el valor actual\n        #[ink(message, payable)] // ...o especificar payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Controlar el selector de mensajes:")),(0,r.kt)("p",{parentName:"li"},"Cada mensaje y constructor de ink! tiene un \xfanico selector con el que cada mensaje\no constructor puede ser unicamente identificado dentro del smart contract de ink!.\nEstos selectores se utilizan principalmente para conducir el dispatch del contrato al llamarlo."),(0,r.kt)("p",{parentName:"li"},"El autor de un smart contract ink! puede controlar el selector de un mensaje o contructor ink!\nutilizando el flag ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," flag. A continuaci\xf3n de muestra un ejemplo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = "0xDEADBEEF")] // Funciona en los constructores tambien.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Voltea el valor actual.\n        #[ink(message)]\n        #[ink(selector = "0xCAFEBABE")] //Puedes especificar el selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n       \n        /// Devuelve el valor actual.\n        #[ink(message, selector = "0xFEEDBEEF")] // ...o puedes especificar el selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n')))))),(0,r.kt)("h2",{id:"interactuando-con-el-ejecutor-del-contrato"},"Interactuando con el Ejecutor del Contrato"),(0,r.kt)("p",null,"El crate ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_env")," provee facilidades para interactuar con el ejecutor del contrato\nque conecta el smart contract ink! con el mundo exterior."),(0,r.kt)("p",null,"Por ejemplo es posible consultar la persona que llama en la llamada actual a trav\xe9s de:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_env;\nink::env::test::run_test::<ink::env::DefaultEnvironment, _>(|_| {\n    let caller = ink::env::caller::<ink::env::DefaultEnvironment>();\n    let _caller = caller;\n    Ok(())\n}).unwrap();\n")),(0,r.kt)("p",null,"Sin embargo, ink! provee una manera mucho m\xe1s simple de interactuar con el ejecutor\ndel contrato a trav\xe9s de su entorno de acceso. Un ejemplo a continuaci\xf3n:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink::contract]\nmod greeter {\n    #[ink(storage)]\n    pub struct Greeter;\n\n    impl Greeter {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            let caller = Self::env().caller();\n            let message = format!("thanks for instantiation {:?}", caller);\n            ink::env::debug_println(&message);\n            Greeter {}\n        }\n\n        #[ink(message, payable)]\n        pub fn fund(&mut self) {\n            let caller = self.env().caller();\n            let value = self.env().transferred_balance();\n            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n            ink::env::debug_println(&message);\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"eventos"},"Eventos"),(0,r.kt)("p",null,"Un smart contract ink! puede definir eventos que puedan emitir durante la ejecuci\xf3n del contrato.\nEmitir eventos puede ser utilizado por herramientas de terceras partes para consultar informaci\xf3n\nacerca de la ejecuci\xf3n y el estado del contrato."),(0,r.kt)("p",null,"El siguiente ejemplo de un contrato ink! muestra como un evento ",(0,r.kt)("inlineCode",{parentName:"p"},"Transferred")," es definido y\nemitido en el ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," #[ink::contract]\n mod erc20 {\n     /// Define un evento que es emitido cada vez que el valor es transferido.\n     #[ink(event)]\n     pub struct Transferred {\n         from: Option<AccountId>,\n         to: Option<AccountId>,\n         value: Balance,\n     }\n\n     #[ink(storage)]\n     pub struct Erc20 {\n         total_supply: Balance,\n         // m\xe1s campos ...\n     }\n\n     impl Erc20 {\n         #[ink(constructor)]\n         pub fn new(initial_supply: Balance) -> Self {\n             let caller = Self::env().caller();\n             Self::env().emit_event(Transferred {\n                 from: None,\n                 to: Some(caller),\n                 value: initial_supply,\n             });\n             Self { total_supply: initial_supply }\n         }\n\n         #[ink(message)]\n         pub fn total_supply(&self) -> Balance {\n             self.total_supply\n         }\n     }\n }\n")),(0,r.kt)("h2",{id:"ejemplo-flipper"},"Ejemplo: Flipper"),(0,r.kt)("p",null,'El c\xf3digo a continuaci\xf3n muestra la implementaci\xf3n completa del smart contract ink! Flipper.\nPara nosotros actua como el "Hello, World!" de los smart contracts ink! porque\nes minimo pero a la vez proporciona m\xe1s o menos una funcionalidad \xfatil.'),(0,r.kt)("p",null,"Controla un simple valor  ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," que puede ser tanto ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," como ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\ny permite al usuario voltear el valor utilizando el mensaje ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper::flip"),"\no recuperar el valor actual utilizando ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper::get"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// Crea un nuevo smart contract flipper inicializando el valor dado\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            Self { value: init_value }\n        }\n\n        /// Voltea el valor actual del booleano de Flipper.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Devuelve el valor actual del boolean de Flipper.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}m.isMDXComponent=!0}}]);