"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},66070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"OpenBrush",slug:"/getting-started/use-openbrush"},o=void 0,s={unversionedId:"third-party-tools/openbrush",id:"version-5.x/third-party-tools/openbrush",title:"OpenBrush",description:"OpenBrush] es una librer\xeda para el desarrollo de contratos inteligentes en ink! mantenida por el equipo de [Brushfam.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/third-party-tools/openbrush.md",sourceDirName:"third-party-tools",slug:"/getting-started/use-openbrush",permalink:"/es/5.x/getting-started/use-openbrush",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/third-party-tools/openbrush.md",tags:[],version:"5.x",frontMatter:{title:"OpenBrush",slug:"/getting-started/use-openbrush"},sidebar:"reference",previous:{title:"Faucet",permalink:"/es/5.x/faucet"},next:{title:"Swanky Suite",permalink:"/es/5.x/getting-started/swanky"}},l={},p=[{value:"\xbfQu\xe9 est\xe1ndares y componentes de contrato contiene?",id:"qu\xe9-est\xe1ndares-y-componentes-de-contrato-contiene",level:3},{value:"Implementaci\xf3n gen\xe9rica de Traits",id:"implementaci\xf3n-gen\xe9rica-de-traits",level:3},{value:"Wrapper de Traits",id:"wrapper-de-traits",level:3},{value:"Documentaci\xf3n",id:"documentaci\xf3n",level:3},{value:"Typechain-Polkadot",id:"typechain-polkadot",level:2},{value:"Sol2Ink",id:"sol2ink",level:2},{value:"\xbfPreguntas?",id:"preguntas",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/openbrush-contracts"},"OpenBrush")," es una librer\xeda para el desarrollo de contratos inteligentes en ink! mantenida por el equipo de ",(0,r.kt)("a",{parentName:"p",href:"https://brushfam.io/"},"Brushfam"),"."),(0,r.kt)("p",null,"Proporciona contratos est\xe1ndar basados en las ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/PSPs"},"Propuestas Est\xe1ndar de Polkadot (PSPs)"),", as\xed como contratos de m\xe1s alto nivel y macros de Rust que generan c\xf3digo de ink!."),(0,r.kt)("p",null,"Usar OpenBrush es simple, s\xf3lo tienes que a\xf1adir la dependencia a tu archivo ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),". Puedes encontrar un ejemplo ",(0,r.kt)("a",{parentName:"p",href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/overview"},"aqu\xed"),"."),(0,r.kt)("h3",{id:"qu\xe9-est\xe1ndares-y-componentes-de-contrato-contiene"},"\xbfQu\xe9 est\xe1ndares y componentes de contrato contiene?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP22"),": Token fungible (",(0,r.kt)("em",{parentName:"li"},"equivalente a ERC20"),") con extensiones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP34"),": Token no fungible (",(0,r.kt)("em",{parentName:"li"},"equivalente a ERC721"),") con extensiones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PSP37"),": ",(0,r.kt)("em",{parentName:"li"},"Equivalente a ERC1155")," con extensiones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ownable")," Restringe el accionar a los que no son propietarios."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Access Control"),": Define un conjunto de roles y restringe el acceso a una acci\xf3n determinada por roles."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reentrancy Guard"),": Previene llamadas reentrantes a una funci\xf3n."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pausable"),": Pausar/Resumir un contrato para deshabilitar/habilitar algunas operaciones."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timelock Controller"),": Ejecuta operaciones con determinado retardo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Splitter"),": Divide la cantidad de tokens nativos entre participantes.")),(0,r.kt)("h3",{id:"implementaci\xf3n-gen\xe9rica-de-traits"},"Implementaci\xf3n gen\xe9rica de Traits"),(0,r.kt)("p",null,"OpenBrush a\xf1ade soporte para implementaciones gen\xe9ricas de Traits. De esta manera podras dividir un Trait y su implementaci\xf3n en diferentes archivos. Esto puede aumentar la legibilidad y mantenibilidad del c\xf3digo de tu contrato inteligente (",(0,r.kt)("a",{parentName:"p",href:"https://learn.brushfam.io/docs/OpenBrush/smart-contracts/example/setup_project"},"descripci\xf3n detallada"),")."),(0,r.kt)("h3",{id:"wrapper-de-traits"},"Wrapper de Traits"),(0,r.kt)("p",null,"OpenBrush simplifica la comunicaci\xf3n entre contratos. No es necesario contar con un contrato que implemente un Trait en particular para poder llamarlo. Un Wrapper permite llamar a m\xe9todos de ese Trait referenciando la direcci\xf3n de alg\xfan contrato de la red (hacer una llamada cruzada entre contratos)."),(0,r.kt)("h3",{id:"documentaci\xf3n"},"Documentaci\xf3n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/727-Ventures/openbrush-contracts"},"Repositorio Github de OpenBrush")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://learn.brushfam.io/docs/OpenBrush"},"Documentaci\xf3n oficial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://openbrush.io/"},"Sitio web de OpenBrush")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I5OFGNVvzOc"},"Seminario de Substrate (Youtube)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/supercolony/how-to-use-modifiers-for-ink-smart-contracts-using-openbrush-7a9e53ba1c76"},"C\xf3mo usar modificadores?"))),(0,r.kt)("h2",{id:"typechain-polkadot"},"Typechain-Polkadot"),(0,r.kt)("p",null,"Otra herramienta \xfatil para el desarrollo de contratos inteligentes ink! es ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"Typechain-Polkadot"),"."),(0,r.kt)("p",null,"Typechain-Polkadot se utiliza para generar wrappers de Typescript de su contrato inteligente. Esto se puede utilizar para el desarrollo de la UI o en las pruebas de integraci\xf3n de sus contratos inteligentes ink!. La librer\xeda utiliza ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},(0,r.kt)("inlineCode",{parentName:"a"},"polkadot-js/api")),", pero es especialmente \xfatil porque todas las llamadas y consultas est\xe1n tipadas, por lo que se mitiga la posibilidad de obtener un error durante una llamada."),(0,r.kt)("h2",{id:"sol2ink"},"Sol2Ink"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/sol2ink"},"Sol2Ink")," es una herramienta que permite realizar migraciones de Solidity a ink!. El c\xf3digo en Solidity se env\xeda a Sol2Ink y es convertido en un contrato ink!. La herramienta tambi\xe9n puede utilizarse para aprender las diferencias entre el c\xf3digo de Solidity y el de ink!."),(0,r.kt)("h3",{id:"preguntas"},"\xbfPreguntas?"),(0,r.kt)("p",null,"Si tienes alguna pregunta sobre c\xf3mo utilizar cualquiera de estas herramientas, o simplemente sobre los contratos inteligentes de ink! en general, puede unirse al ",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/!utTuYglskDvqRRMQta:matrix.org?via=matrix.org&via=t2bot.io&via=web3.foundation"},"canal de Element de Brushfam")," o hacer una pregunta en el ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/"},"Substrate Stack Exchange"),"."))}d.isMDXComponent=!0}}]);