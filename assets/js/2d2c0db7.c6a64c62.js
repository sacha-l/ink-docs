"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8340],{97120:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=e(17624),i=e(4552);const a={title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events"},r="Contracts::Instantiated",o={id:"frontend/utils/events/contracts/instantiated",title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events",source:"@site/docs/frontend/utils/events/contracts/instantiated.md",sourceDirName:"frontend/utils/events/contracts",slug:"/frontend/utils/events/contracts/instantiated",permalink:"/frontend/utils/events/contracts/instantiated",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/events/contracts/instantiated.md",tags:[],version:"current",frontMatter:{title:"Contracts::Instantiated",description:"Utilties for use with Contracts::Instantiated events"},sidebar:"reference",previous:{title:"formatEventName",permalink:"/frontend/utils/events/format-event-name"},next:{title:"System::ExtrinsicFailed",permalink:"/frontend/utils/events/system/extrinsic-failed"}},c={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}];function l(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"contractsinstantiated",children:"Contracts::Instantiated"}),"\n",(0,s.jsxs)(n.p,{children:["Utilties for use with ContractInstantiated events that are emitted in the ",(0,s.jsx)(n.code,{children:"In Block"})," phase\nof a transaction. This is emitted during the successful deployment of a contract."]}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx",children:"example in the playground dApp"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { isContractInstantiatedEvent, asContractInstantiatedEvent } from 'useink/utils';\n\nconsole.log(isContractInstantiatedEvent(eventRecord)) // true or false\n\nconst instantiated = asContractInstantiatedEvent(eventRecord);\nconsole.log(instantiated?.contractAddress) // string | undefined\nconsole.log(instantiated?.deployer) // string | undefined\n"})}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// asContractInstantiatedEvent\n{\n  name: string;\n  deployer: string;\n  contractAddress: string;\n}\n"})})]})}function u(t={}){const{wrapper:n}={...(0,i.M)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},4552:(t,n,e)=>{e.d(n,{I:()=>o,M:()=>r});var s=e(11504);const i={},a=s.createContext(i);function r(t){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function o(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),s.createElement(a.Provider,{value:n},t.children)}}}]);