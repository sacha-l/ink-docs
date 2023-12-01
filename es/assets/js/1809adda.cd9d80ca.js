"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,s(s({ref:t},u),{},{components:n})):a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Testing del Contrato",hide_title:!0,slug:"/basics/contract-testing"},s=void 0,i={unversionedId:"basics/testing",id:"basics/testing",title:"Testing del Contrato",description:"ink! soporta tres diferentes etapas de testing: unitarios, de integraci\xf3n",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/testing.md",sourceDirName:"basics",slug:"/basics/contract-testing",permalink:"/es/basics/contract-testing",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/testing.md",tags:[],version:"current",frontMatter:{title:"Testing del Contrato",hide_title:!0,slug:"/basics/contract-testing"},sidebar:"reference",previous:{title:"Metadata",permalink:"/es/metadata"},next:{title:"Contract Debugging",permalink:"/es/basics/contract-debugging"}},l={},c=[{value:"Tests Unitarios",id:"tests-unitarios",level:2},{value:"Off-chain Testing",id:"off-chain-testing",level:2},{value:"\xbfC\xf3mo saber si su test requiere el entorno off-chain?",id:"c\xf3mo-saber-si-su-test-requiere-el-entorno-off-chain",level:3},{value:"Ejemplo",id:"ejemplo",level:3},{value:"End-to-End (E2E) Tests",id:"end-to-end-e2e-tests",level:2},{value:"Ejemplo",id:"ejemplo-1",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),(0,o.kt)("h1",{id:"contract-testing"},"Contract Testing"),(0,o.kt)("p",null,"ink! soporta tres diferentes etapas de testing: unitarios, de integraci\xf3n\ny tests end-to-end. En esta p\xe1gina explicaremos cual es el proposito de cada\netapa y como utilizarlas."),(0,o.kt)("img",{src:"/img/testing.png"}),(0,o.kt)("p",null,"Generalmente puedes pensar en estos tres tipos de testing como una piramide\ndonde el top es el m\xe1s elaborados de los tests. Los tests End-to-End (E2E)\nen el top testearan las capas m\xe1s bajas de la piramide como parte de ellos."),(0,o.kt)("h2",{id:"tests-unitarios"},"Tests Unitarios"),(0,o.kt)("p",null,"El testing de los contractos off-chain se hace mediante ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo test")," y los usuarios pueden simplemente utilizar las rutinas est\xe1ndar para\ncrear m\xf3dulos de unit test dentro del projecto de ink!:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n")),(0,o.kt)("p",null,"Se pueden crear instancias de test de los contratos as\xed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let contract = MyContract::my_constructor(a, b);\n")),(0,o.kt)("p",null,"Los mensajes se pueden llamar simplemente en la instancia devuelta como si ",(0,o.kt)("inlineCode",{parentName:"p"},"MyContract::my_constructor")," devolviese\nuna instancia ",(0,o.kt)("inlineCode",{parentName:"p"},"Self"),"."),(0,o.kt)("p",null,"Vea el ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs"},"ejemplo flipper"),"."),(0,o.kt)("h2",{id:"off-chain-testing"},"Off-chain Testing"),(0,o.kt)("p",null,"Para tests de integraci\xf3n, el test se anota con nuestro atributo ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink::test]"),"\nen lugar del ",(0,o.kt)("inlineCode",{parentName:"p"},"#[test]"),". Nuestro atributo denota que el test se ejecuta\nen un entorno simulado, en un mocked blockchain. Aqu\xed est\xe1n las funciones disponibles\npara influenciar en como el entorno del test es configurado (por ejemplo configurar un balance espec\xedfico\nde una cuenta para simular como el contrato se comportaria al interaccionar con el)."),(0,o.kt)("p",null,"Si anotas un test con este atributo se ejecutara en un entorno simulado,\nsimilar a como se ejecutar\xeda on-chain.\nEntonces tienes un control detallado sobre c\xf3mo llamar al contrato;\npor ejemplo puedes influir en el avance del bloque, el valor transferido al mismo,\npor qu\xe9 cuenta se llama, con qu\xe9 almacenamiento se ejecuta, etc."),(0,o.kt)("p",null,"Vea el contrato ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs"},(0,o.kt)("inlineCode",{parentName:"a"},"examples/erc20"))," csobre como utilizarlo o ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/ink/4.0.0/ink/attr.test.html"},"la documentaci\xf3n")," para m\xe1s detalles."),(0,o.kt)("p",null,"En este momento hay algunas limitaciones conocidas para nuestro entorno off-chain y estamos trabajando\nen hacer que el comportamiento sea lo m\xe1s cercano posible a un entorno de una red real."),(0,o.kt)("p",null,"Define un unit test que utilice las capacidades del ink! testing off-chain."),(0,o.kt)("p",null,"Si tu unit test no requiere de la existencia de un entorno off-chain esta bien no\nutilizar esta macro ya que tiene algunos gastos generales con el test."),(0,o.kt)("p",null,"Date cuenta que esta macro no es necesaria para ejecutar los unit tests que requieren\nlas capacidades del ink! testing off-chain pero simplemente mejora la legibilidad del c\xf3digo."),(0,o.kt)("h3",{id:"c\xf3mo-saber-si-su-test-requiere-el-entorno-off-chain"},"\xbfC\xf3mo saber si su test requiere el entorno off-chain?"),(0,o.kt)("p",null,"Normalmente si el test utiliza recursivamente o invoca algunos metodos del contrato que\nllaman a un metodo definido en ",(0,o.kt)("inlineCode",{parentName:"p"},"self.env()")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"Self::env()"),"."),(0,o.kt)("p",null,"Un ejemplo es el siguiente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let caller: AccountId = self.env().caller();\n")),(0,o.kt)("h3",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Unit test convencional que devuelve alg\xfan Result.\n    // El c\xf3digo del test puede utilizar el operador-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink::env::Error> {\n        // El c\xf3digo del test que devuelve un tipo Rust Result\n    }\n}\n")),(0,o.kt)("h2",{id:"end-to-end-e2e-tests"},"End-to-End (E2E) Tests"),(0,o.kt)("p",null,"El testing E2E permite a los desarroladores escribir un test que no solo testeara el contrato de\nmanera aislada; en su lugar el contrato sera testado ",(0,o.kt)("em",{parentName:"p"},"todo junto")," con todos los componentes\nque est\xe1n involucrados on-chain \u2013 por lo que de extremo a extremo (end to end). De esta manera el testing This way of testing se parece mucho c\xf3mo se comportar\xe1 realmente el contrato en la producci\xf3n."),(0,o.kt)("p",null,"Como parte del test, el contrato sera compilado y desplegado a un nodo Substrate node que este corriendo en el background.\nink! ofrece funciones API que permiten a los desarrolladores interaccionar con el contrato via transacciones\nque ellos crean y cargan en la blockchain."),(0,o.kt)("p",null,"T\xfa, como desarrollador, puede definir aserciones sobre el resultado de sus transacciones, como la verificaci\xf3n de mutaciones de estado, transaccione fallidas o costos de gas incurridos."),(0,o.kt)("p",null,"La configuraci\xf3n de tu cadena sera testeada junto al smart contract. Y si tu cadena tiene pallets que\nestan involucrados con la ejecuci\xf3n del smart contract, estos tambi\xe9n seran parte de la ejecuci\xf3n del test."),(0,o.kt)("p",null,"ink! no pone ning\xfan requerimiento para el nodo Substrate en el background - por ejemplo,\npuedes correr un nodo que contiene una instant\xe1nea de una red en vivo."),(0,o.kt)("h3",{id:"ejemplo-1"},"Ejemplo"),(0,o.kt)("p",null,"El c\xf3digo de ejemplo a continuaci\xf3n ilustra un test b\xe1sico E2E para el\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/flipper/lib.rs"},"ejemplo flipper"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink_e2e::test]\nasync fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n    // Cuando se ingresa la funci\xf3n, el contrato ya estaba\n    // construido en el background via `cargo contract build`.\n    // El objeto `client`expone una interfaz para interactuar\n    // con el nodo Substrate.\n    \n    // dado\n    let constructor = FlipperRef::new_default();\n\n    // cuando\n    let contract_acc_id = client\n        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)\n        .await\n        .expect("instantiate failed")\n        .account_id;\n\n    // entonces\n    let get = build_message::<FlipperRef>(contract_acc_id.clone())\n        .call(|flipper| flipper.get());\n    let get_res = client\n        .call(&ink_e2e::bob(), get, 0, None)\n        .await\n        .expect("get failed");\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n')),(0,o.kt)("p",null,"Puedes correr el test de arriba yendo a la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper")," en\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main"},"el directorio ink! examples"),"."),(0,o.kt)("p",null,"Antes de que puedas arrancar el test, tienes que arrancar un nodo Substrate\ncon ",(0,o.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," en el background.\nPara esto puedes utilizar por ejemplo nuestro",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,o.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),". Arranca el nodo en una terminal/sesi\xf3n shell via"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"substrate-contracts-node\n")),(0,o.kt)("p",null,"Entonces, mientras el nodo este corriendo ejecuta el siguiente comando\nen otra ventana la terminal/sesi\xf3n shell con:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo test --features e2e-tests\n")))}d.isMDXComponent=!0}}]);