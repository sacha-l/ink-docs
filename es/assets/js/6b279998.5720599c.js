"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[59],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85721:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},c=void 0,i={unversionedId:"macros-attributes/constructor",id:"version-5.x/macros-attributes/constructor",title:"#[ink(constructor)]",description:"Aplicable a un m\xe9todo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/es/5.x/macros-attributes/constructor",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/constructor.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/es/5.x/macros-attributes/anonymous"},next:{title:"#[ink(default)]",permalink:"/es/5.x/macros-attributes/default"}},s={},l=[{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/text/constructor.svg",className:"titlePic"}),(0,o.kt)("p",null,"Aplicable a un m\xe9todo."),(0,o.kt)("p",null,"Marca un m\xe9todo (o m\xfaltiples m\xe9todos) para el struc del ink! storage como contructor haciendo que este disponible\npara la API de instanciaci\xf3n del contrato."),(0,o.kt)("p",null,"Tiene que haber al menos un m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," definido."),(0,o.kt)("p",null,"Los m\xe9todos marcados con ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," son especiales ya que son dispatacble en el momento\nde la instanciaci\xf3n del contrato. Un contrato puede definir m\xfaltiples constructores que permite al\nlos usuarios del contrato inicializar el contrato de diferentes maneras."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n")))}m.isMDXComponent=!0}}]);