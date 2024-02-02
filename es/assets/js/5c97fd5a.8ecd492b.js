"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8240],{85996:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=t(17624),s=t(4552);const r={title:"Troubleshooting",slug:"/getting-started/troubleshooting"},a="Troubleshooting",i={id:"getting-started/troubleshooting",title:"Troubleshooting",description:"Aqu\xed est\xe1n las soluciones para algunos del los problemas m\xe1s comunes que te puedes encontrar:",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started/troubleshooting.md",sourceDirName:"getting-started",slug:"/getting-started/troubleshooting",permalink:"/es/getting-started/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",slug:"/getting-started/troubleshooting"},sidebar:"reference",previous:{title:"Ejecute su Contrato",permalink:"/es/getting-started/calling-your-contract"},next:{title:"Plantilla de un Contrato",permalink:"/es/basics/contract-template"}},l={},c=[{value:"Cambio de \xe9poca inesperado",id:"cambio-de-\xe9poca-inesperado",level:3},{value:"Viejos Contratos en Local Storage",id:"viejos-contratos-en-local-storage",level:3},{value:"Otros Problemas",id:"otros-problemas",level:3}];function u(e){const o={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/img/title/magnifying-glass.svg",className:"titlePic"}),"\n",(0,n.jsx)(o.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,n.jsx)(o.p,{children:"Aqu\xed est\xe1n las soluciones para algunos del los problemas m\xe1s comunes que te puedes encontrar:"}),"\n",(0,n.jsx)(o.h3,{id:"cambio-de-\xe9poca-inesperado",children:"Cambio de \xe9poca inesperado"}),"\n",(0,n.jsx)(o.p,{children:"Existe un error conocido con el Substrate block production (BABE) en una red funcionando. Si paras el nodo por mucho tiempo (cerrando la terminal,\nponiendo tu ordenador a dormis, etc...), obtendras el siguiente error:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:'ClientImport("Unexpected epoch change")\n'})}),"\n",(0,n.jsxs)(o.p,{children:["Para solucionar esto necesitaras rearrancar el nodo con: ",(0,n.jsx)(o.code,{children:"substrate-contracts-node"}),". En este punto, necesitaras redesplegar\ncualquier contrato y rehacer todos los pasos que has hecho previamente en tu nodo. Mientras mantengas el nodo corriendo, no deber\xedas encontrarte errores."]}),"\n",(0,n.jsx)(o.h3,{id:"viejos-contratos-en-local-storage",children:"Viejos Contratos en Local Storage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Contracts UI"})," utiliza su propio local storage para realizar el seguimiento de los contratos que has desplegado. Esto significa\nque si desplegas un contrato utilizando la UI, y despues borras tu nodo Substrate, se te pedir\xe1 que reinicies tu local storage y por favor hazlo.\nY luego redespliega tus contratos y vuelve a hacer todos los pasos que has hecho previamente en tu nodo."]}),"\n",(0,n.jsx)(o.h3,{id:"otros-problemas",children:"Otros Problemas"}),"\n",(0,n.jsxs)(o.p,{children:["Si encuentras otros problemas durante el tutorial, por favor ",(0,n.jsx)(o.a,{href:"https://github.com/substrate-developer-hub/substrate-docs/issues",children:"report el problema"}),"!"]})]})}function d(e={}){const{wrapper:o}={...(0,s.M)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},4552:(e,o,t)=>{t.d(o,{I:()=>i,M:()=>a});var n=t(11504);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);