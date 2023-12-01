"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[689],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>b});var r=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=r.createContext({}),l=function(e){var a=r.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},u=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=t,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,s(s({ref:a},u),{},{components:n})):r.createElement(b,s({ref:a},u))}));function b(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[d]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14543:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),t=(n(67294),n(3905));const o={title:"Smart Contracts en Polkadot",hide_title:!0,slug:"/smart-contracts-polkadot"},s=void 0,i={unversionedId:"intro/polkadot",id:"intro/polkadot",title:"Smart Contracts en Polkadot",description:"Una de las primeras preguntas que normalmente recibimos cuando alguien aprende sobre Substrate, Polkadot, o Kusama es cu\xe1ndo desarrollar una parachain vs. cu\xe1ndo desarrollar un smart contract.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/polkadot.md",sourceDirName:"intro",slug:"/smart-contracts-polkadot",permalink:"/es/smart-contracts-polkadot",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/polkadot.md",tags:[],version:"current",frontMatter:{title:"Smart Contracts en Polkadot",hide_title:!0,slug:"/smart-contracts-polkadot"},sidebar:"reference",previous:{title:"Por qu\xe9 WebAssembly para Smart Contracts?",permalink:"/es/por-que-webassembly-para-smart-contracts"},next:{title:"C\xf3mo funciona \u2012 Substrate",permalink:"/es/como-funciona"}},c={},l=[],u={toc:l},d="wrapper";function p(e){let{components:a,...o}=e;return(0,t.kt)(d,(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("img",{src:"/img/title/polkadot.svg",className:"titlePic"}),(0,t.kt)("h1",{id:"smart-contracts-en-polkadot"},"Smart Contracts en Polkadot"),(0,t.kt)("p",null,"Una de las primeras preguntas que normalmente recibimos cuando alguien aprende sobre Substrate, Polkadot, o Kusama es cu\xe1ndo desarrollar una parachain vs. cu\xe1ndo desarrollar un smart contract."),(0,t.kt)("p",null,"La diferencia aqu\xed es que en el contexto de Polkadot y Kusama una parachain alquila un espacio que abarca desde un par de meses hasta dos a\xf1os. El acuerdo con un alquiler es que la parachain obtiene un slot fijo para ejecutar su l\xf3gica de negocio (normalmente conocida como su  ",(0,t.kt)("em",{parentName:"p"},"funci\xf3n de transici\xf3n de estado"),") y puede persistir su estado modificado en un  bloque. En terminolog\xeda de Substrate esta funci\xf3n de transici\xf3n de estado se denomina ",(0,t.kt)("em",{parentName:"p"},"runtime"),"."),(0,t.kt)("p",null,"La diferencia con otros ecosistemas aqu\xed es que, en el contexto de Polkadot, parachains y smart contracts existen en diferentes niveles del stack: ",(0,t.kt)("em",{parentName:"p"},"los smart contracts se ubican por encima de las parachains"),". Las parachains ser\xedan generalmente descriptas como blockchains de nivel 1 - excepto por el hecho de que no tienen que construir su propia seguridad, son actualizables e interoperables."),(0,t.kt)("p",null,"Vale la pena destacar que una funci\xf3n de transici\xf3n de estado de una parachain no se valida m\xe1s - depende de la parachain c\xf3mo utiliza su tiempo de slot. La parachain ya pag\xf3 por adelantado por su slot cuando gan\xf3 la subasta en Polkadot o Kusama. Eso significa que la parachain puede construir su propio mundo (de blockchain)! Por ejemplo, puede decidir c\xf3mo se cobran las comisiones por transacci\xf3n - incluso si dichas comisiones se cobran o no. Estas opciones son cruciales cuando se construyen modelos de negocio nuevos o m\xe1s accesibles para el usuario. Otros factores distintivos entre parachains que observamos en estado natural son diferencias en c\xf3mo funciona la gobernanza o la cripto econom\xeda. Sin embargo hay algunas limitaciones en c\xf3mo la parachain puede construir su mundo. Como la f\xedsica en el mundo real, tiene que adherir a ciertas reglas b\xe1sicas. Para Polkadot y Kusama eso es por ejemplo el algoritmo de consenso para que la Relay Chain se comunique con la parachain. Desde esas reglas b\xe1sicas emergen las ventajas para Polkadot y Kusama. Ventajas como la seguridad compartida, comunicaci\xf3n cross-chain o ejecuci\xf3n de tiempo de slot garantizada."),(0,t.kt)("p",null,"Para los smart contracts, por otro lado, una parachain existente tiene que incluir el ",(0,t.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," para que los usuarios deployen smart contracts. El smart contract deployado siempre es un c\xf3digo untrusted (de no confianza). Cualquiera (o cualquier programa) que tiene tokens de la chain puede subir un smart contract sin requerir permiso. Los smart contracts permiten deployar de manera ",(0,t.kt)("em",{parentName:"p"},"permissionless")," programas ",(0,t.kt)("em",{parentName:"p"},"untrusted")," en una blockchain. El ",(0,t.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," debe asumir que estos programas son contradictorios, debe ubicar un n\xfamero de pilares de seguridad en su lugar para asegurar que el contrato no puede, por ejemplo, paralizar la chain o causar la corrupci\xf3n del estado de otros contratos. Para el ",(0,t.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," esos pilares de seguridad incluyen mecanismos como la medici\xf3n de gas o dep\xf3sitos para almacenar datos on-chain."),(0,t.kt)("p",null," ",(0,t.kt)("em",{parentName:"p"},"Para reafirmar esta distinci\xf3n importante: desarrollar un runtime de parachain es diferente a desarrollar un smart contract \u2012 un smart contract se sit\xfaa por encima de una parachain"),"."),(0,t.kt)("p",null,"La contrapartida es que con una parachain uno tiene la libertad de decidir sobre (casi) todas las reglas que constituyen la parachain. Con un smart contract uno est\xe1 limitado por lo que la chain permite y los pilares de seguridad que necesariamente deben estar en su lugar. Un smart contract nunca puede ser tan r\xe1pido como un pallet nativo incluido en el runtime de la parachain - hay demasiada l\xf3gica involucrada.\nUn smart contract, por otro lado, tiene menos fricci\xf3n para desarrollarlo y deployarlo. Los desarrolladores no tienen que ocuparse de la gobernanza, crypto econom\xeda, etc. Uno s\xf3lo necesita unos pocos tokens y puede simplemente seguir adelante deployando un smart contract. Es tan simple como eso."),(0,t.kt)("p",null,(0,t.kt)("img",{src:n(39466).Z,width:"2400",height:"1200"})))}p.isMDXComponent=!0},39466:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/smart-contract-vs-parachain-ebe1233980ba17f60e1f222b4f03966e.png"}}]);