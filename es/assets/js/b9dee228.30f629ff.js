"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2772],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Selectores",hide_title:!0,slug:"/basics/selectors"},l="Selectores",i={unversionedId:"basics/selectors",id:"version-5.x/basics/selectors",title:"Selectores",description:"Los selectors en ink! son una forma de lenguaje agn\xf3stico para identificar constructores y mensajes. Son strings hexadecimales de cuatro bytes que se ven asi: 0x633aa551.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/basics/selectors.md",sourceDirName:"basics",slug:"/basics/selectors",permalink:"/es/5.x/basics/selectors",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/basics/selectors.md",tags:[],version:"5.x",frontMatter:{title:"Selectores",hide_title:!0,slug:"/basics/selectors"},sidebar:"reference",previous:{title:"Eventos",permalink:"/es/5.x/basics/eventos"},next:{title:"Definiciones Trait",permalink:"/es/5.x/basics/definiciones-trait"}},s={},c=[{value:"C\xe1lculo del selector",id:"c\xe1lculo-del-selector",level:2},{value:"C\xe1lculo del selector: Traits de ink!",id:"c\xe1lculo-del-selector-traits-de-ink",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"selectores"},"Selectores"),(0,r.kt)("p",null,"Los selectors en ink! son una forma de lenguaje agn\xf3stico para identificar constructores y mensajes. Son strings hexadecimales de cuatro bytes que se ven asi: ",(0,r.kt)("inlineCode",{parentName:"p"},"0x633aa551"),"."),(0,r.kt)("p",null,"Podemos encontrar el selector de un constructor de ink! o el mensaje en la ",(0,r.kt)("a",{parentName:"p",href:"/basics/metadata"},"metadata del contrato")," buscando el campo ",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," del dispatchable que nos interese."),(0,r.kt)("p",null,"Aqu\xed hay un ejemplo de como se puede elegir el nombre del mensaje y el selector desde la metadata del contrato usando ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat target/ink/flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"flip: 0x633aa551"\n')),(0,r.kt)("h2",{id:"c\xe1lculo-del-selector"},"C\xe1lculo del selector"),(0,r.kt)("p",null,"Si no se tiene acceso a la metadata del contrato uno puede calcularlo por si mismo."),(0,r.kt)("p",null,"El algoritmo que ink! usa es bastante directo:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Obtener ",(0,r.kt)("em",{parentName:"li"},"solo")," el nombre del constructor o el mensaje"),(0,r.kt)("li",{parentName:"ol"},"Computar el hash ",(0,r.kt)("inlineCode",{parentName:"li"},"BLAKE2")," del nombre"),(0,r.kt)("li",{parentName:"ol"},"Tomar los primeros cuatro bytes del hash como selector")),(0,r.kt)("p",null,"Vamos a dar un breve ejemplo de c\xf3mo se ve en la pr\xe1ctica. Considerar el siguiente mensaje:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\nfn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n    unimplemented!()\n}\n")),(0,r.kt)("p",null,"Para calcular el selector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tomar el nombre del mensaje, ",(0,r.kt)("inlineCode",{parentName:"li"},"frobinate")),(0,r.kt)("li",{parentName:"ol"},"Computar ",(0,r.kt)("inlineCode",{parentName:"li"},'BLAKE2("frobinate") = 0x8e39d7f22ef4f9f1404fe5200768179a8b4f2b67799082d7b39f6a8ca82da8f1')),(0,r.kt)("li",{parentName:"ol"},"Tomar los primeros cuatro bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x8e39d7f2"))),(0,r.kt)("h2",{id:"c\xe1lculo-del-selector-traits-de-ink"},"C\xe1lculo del selector: Traits de ink!"),(0,r.kt)("p",null,"Estas reglas cambian un poco si se define cualquier mensaje usando el ",(0,r.kt)("inlineCode",{parentName:"p"},"[ink::trait_definition]")," ",(0,r.kt)("a",{parentName:"p",href:"/basics/trait-definitions"},"macro"),".\nPara el primer paso, en lugar de tomar el nombre del mensaje ",(0,r.kt)("em",{parentName:"p"},"justo")," , ahora agregamos adem\xe1s el ",(0,r.kt)("em",{parentName:"p"},"nombre del trait")," para el c\xe1lculo del selector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'cat target/ink/trait-flipper.json | jq \'.spec.messages[0] | "\\(.label): \\(.selector)"\'\n"Flip::flip: 0xaa97cade"\n')),(0,r.kt)("p",null,"Veamos c\xf3mo se ver\xeda \xe9sto en la pr\xe1ctica. Consideremos el siguiente trait:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::trait_definition]\npub trait Frobinate {\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool;\n}\n\n-- snip --\n\nimpl Frobinate for Contract {\n    #[ink(message)]\n    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {\n        unimplemented!()\n    }\n}\n")),(0,r.kt)("p",null,"Para calcular el selector:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Tomar el nombre del trait ",(0,r.kt)("strong",{parentName:"li"},"y")," el nombre del mensaje, ",(0,r.kt)("inlineCode",{parentName:"li"},"Frobinate::frobinate")),(0,r.kt)("li",{parentName:"ol"},"Computar ",(0,r.kt)("inlineCode",{parentName:"li"},'BLAKE2("Frobinate::frobinate") = 0x8915412ad772b2a116917cf75df4ba461b5808556a73f729bce582fb79200c5b')),(0,r.kt)("li",{parentName:"ol"},"Tomar los primeros cuatro bytes, ",(0,r.kt)("inlineCode",{parentName:"li"},"0x8915412a"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"No preocuparse si no se puede calcular el hash de un string ",(0,r.kt)("inlineCode",{parentName:"p"},"BLAKE2")," a mano. Se puede usar la ",(0,r.kt)("a",{parentName:"p",href:"https://www.shawntabrizi.com/substrate-js-utilities/"},"utilidad de Substrate de Shawn")," para que lo haga por uno!")))}m.isMDXComponent=!0}}]);