"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(t),m=r,f=l["".concat(d,".").concat(m)]||l[m]||u[m]||i;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5875:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"1. Empezando",hide_title:!0,slug:"/frontend/getting-started",description:"Comienze a construir aplicaciones frontend para ink! con useink"},o="Empezando",s={unversionedId:"frontend/getting-started",id:"frontend/getting-started",title:"1. Empezando",description:"Comienze a construir aplicaciones frontend para ink! con useink",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/frontend/getting-started.md",sourceDirName:"frontend",slug:"/frontend/getting-started",permalink:"/es/frontend/getting-started",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/getting-started.md",tags:[],version:"current",frontMatter:{title:"1. Empezando",hide_title:!0,slug:"/frontend/getting-started",description:"Comienze a construir aplicaciones frontend para ink! con useink"},sidebar:"reference",previous:{title:"Introducci\xf3n",permalink:"/es/frontend/overview"},next:{title:"2. Conectar Wallet",permalink:"/es/frontend/connect-wallet"}},d={},p=[{value:"Instalaci\xf3n",id:"instalaci\xf3n",level:2},{value:"Configuraci\xf3n",id:"configuraci\xf3n",level:2},{value:"tsconfig.json",id:"tsconfigjson",level:3},{value:"Agregando <code>&lt;UseInkProvider /&gt;</code>",id:"agregando-useinkprovider-",level:3},{value:"Ahora puede usar todas las funcionalidades de useink",id:"ahora-puede-usar-todas-las-funcionalidades-de-useink",level:3}],c={toc:p},l="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(l,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"empezando"},"Empezando"),(0,r.kt)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),(0,r.kt)("p",null,"Instala ",(0,r.kt)("inlineCode",{parentName:"p"},"useink")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i useink\n\n# pnpm\npnpm i useink\n\n# yarn\nyarn add useink\n")),(0,r.kt)("h2",{id:"configuraci\xf3n"},"Configuraci\xf3n"),(0,r.kt)("h3",{id:"tsconfigjson"},"tsconfig.json"),(0,r.kt)("p",null,"Deber\xe1s modificar la propiedad ",(0,r.kt)("inlineCode",{parentName:"p"},"moduleResolution")," a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodenext")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"bundler"),". Esta funcionalidad le permite a su aplicaci\xf3n\ndescubrir multiples rutas de importaci\xf3n definidas en el ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," de ",(0,r.kt)("strong",{parentName:"p"},"useink"),". Esto es requerido\npara utilizar multiples funcionalidades definidas en rutas como\n",(0,r.kt)("a",{parentName:"p",href:"/frontend/notifications"},"useink/notifications")," y ",(0,r.kt)("a",{parentName:"p",href:"/frontend/utils"},"useink/utils"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext" // o `bundler`\n  }\n}\n')),(0,r.kt)("h3",{id:"agregando-useinkprovider-"},"Agregando ",(0,r.kt)("inlineCode",{parentName:"h3"},"<UseInkProvider />")),(0,r.kt)("p",null,"React usa ",(0,r.kt)("em",{parentName:"p"},"Providers")," para que cualquier componente hijo pueda acceder al estado, sin importar que tan profundamente anidado est\xe9. Para hacer que las funcionalidades de ",(0,r.kt)("inlineCode",{parentName:"p"},"useink")," esten disponibles para toda la aplicaci\xf3n debemos envolverla con ",(0,r.kt)("inlineCode",{parentName:"p"},"UseInkProvider"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UseInkProvider } from 'useink'\nimport { RococoContractsTestnet, ShibuyaTestnet } from 'useink/chains'\n\nfunction App() {\n  return (\n    <UseInkProvider\n      config={{\n        dappName: 'Flipper',\n        chains: [RococoContractsTestnet, ShibuyaTestnet],\n      }}\n    >\n      <MyRoutes />\n    </UseInkProvider>\n  )\n}\n\nexport default App\n")),(0,r.kt)("p",null,"En el ejemplo de arriba hay dos campos que debemos tener en cuenta: ",(0,r.kt)("inlineCode",{parentName:"p"},"dappName")," y ",(0,r.kt)("inlineCode",{parentName:"p"},"chains"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"dappName")," es el nombre que va a ser presentado al usuario cuando se les solicite conectar su wallet por primera vez. ",(0,r.kt)("inlineCode",{parentName:"p"},"chains")," es la lista de configuraciones de cadenas que su aplicaci\xf3n va a soportar. Solo las cadenas que est\xe9n configuradas aqu\xed van a ser accesibles para nuestra aplicaci\xf3n. ",(0,r.kt)("inlineCode",{parentName:"p"},"useink")," provee configuraciones para cientos de cadenas existentes que puedes importar desde ",(0,r.kt)("inlineCode",{parentName:"p"},"useink/chains"),"."),(0,r.kt)("p",null,"Puedes aprender m\xe1s sobre ",(0,r.kt)("a",{parentName:"p",href:"/frontend/configuration"},"configuraci\xf3n de cadenas aqu\xed"),"."),(0,r.kt)("h3",{id:"ahora-puede-usar-todas-las-funcionalidades-de-useink"},"Ahora puede usar todas las funcionalidades de useink"),(0,r.kt)("p",null,"A continuaci\xf3n puede aprender como ",(0,r.kt)("a",{parentName:"p",href:"/frontend/connect-wallet"},"conectar una wallet mediante una extensi\xf3n de navegador"),", o ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/useink-kitchen-sink/blob/master/frontend/src/components/pg-home/HomePage.tsx"}," ver un ejemplo de dApp"),"."))}u.isMDXComponent=!0}}]);