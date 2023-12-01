"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4282],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>v});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(v,s(s({ref:n},u),{},{components:t})):r.createElement(v,s({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o={title:"Leer Valores del Storage",slug:"/basics/leer-valores-del-storage",hide_title:!0},s=void 0,l={unversionedId:"basics/reading-values",id:"version-5.x/basics/reading-values",title:"Leer Valores del Storage",description:"Leer los valores almacenados en el storage es \xa1es donde comienza la diversi\xf3n!",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/basics/reading-values.md",sourceDirName:"basics",slug:"/basics/leer-valores-del-storage",permalink:"/es/5.x/basics/leer-valores-del-storage",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/basics/reading-values.md",tags:[],version:"5.x",frontMatter:{title:"Leer Valores del Storage",slug:"/basics/leer-valores-del-storage",hide_title:!0},sidebar:"reference",previous:{title:"Almacenando Valores",permalink:"/es/5.x/basics/storing-values"},next:{title:"Mutando Valores del Storage",permalink:"/es/5.x/basics/mutando-valores-del-storage"}},i={},c=[{value:"Funciones del Contrato",id:"funciones-del-contrato",level:2},{value:"Funciones P\xfablicas y Privadas",id:"funciones-p\xfablicas-y-privadas",level:3},{value:"Obtener un Valor",id:"obtener-un-valor",level:2}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/storage-read.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"leer-valores-del-storage"},"Leer Valores del Storage"),(0,a.kt)("p",null,"Leer los valores almacenados en el storage es \xa1es donde comienza la diversi\xf3n!"),(0,a.kt)("h2",{id:"funciones-del-contrato"},"Funciones del Contrato"),(0,a.kt)("p",null,"Como puedes ver en la plantilla del contrato, todas las funciones del contrato son parte del m\xf3dulo del contrato."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    // Funciones p\xfablicas y privadas van aqu\xed\n}\n")),(0,a.kt)("h3",{id:"funciones-p\xfablicas-y-privadas"},"Funciones P\xfablicas y Privadas"),(0,a.kt)("p",null,"En Rust, puede realizar tantas implementaciones como quieras. Como soluci\xf3n m\xe1s estil\xedstica te recomendamos\ndividir las definiciones de implementaci\xf3n para sus funciones p\xfablicas y privadas:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    /// Public function\n    #[ink(message)]\n    pub fn my_public_function(&self) {\n        /* --snip-- */\n    }\n\n    /// Private function\n    fn my_private_function(&self) {\n        /* --snip-- */\n    }\n\n    /* --snip-- */\n}\n")),(0,a.kt)("p",null,"Tambi\xe9n puede optar por dividir las cosas como sea m\xe1s claro para t\xfa proyecto."),(0,a.kt)("p",null,"Ten en cuenta que todas las funciones p\xfablicas deben utilizar el atributo ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(message)]"),"."),(0,a.kt)("h2",{id:"obtener-un-valor"},"Obtener un Valor"),(0,a.kt)("p",null,"Ya te hemos mostrado como inicializar un valor en el storage en este cap\xedtulo ",(0,a.kt)("a",{parentName:"p",href:"/basics/storing-values"},"Almacenando Valores"),".\nObtener el valor es as\xed de simple:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.number\n    }\n}\n")),(0,a.kt)("p",null,"En Rust, si la \xfaltima expresion de una funci\xf3n no tiene un punto y coma, entonces es el valor que retornara."))}d.isMDXComponent=!0}}]);