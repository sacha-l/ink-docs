"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6540],{69356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(17624),s=n(4552);const o={title:"toAbiMessage",hide_title:!0,description:"Get an instance of an AbiMessage or undefined"},a="toAbiMessage",c={id:"frontend/core/contracts/to-contract-abi-message",title:"toAbiMessage",description:"Get an instance of an AbiMessage or undefined",source:"@site/docs/frontend/core/contracts/to-contract-abi-message.md",sourceDirName:"frontend/core/contracts",slug:"/frontend/core/contracts/to-contract-abi-message",permalink:"/frontend/core/contracts/to-contract-abi-message",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/contracts/to-contract-abi-message.md",tags:[],version:"current",frontMatter:{title:"toAbiMessage",hide_title:!0,description:"Get an instance of an AbiMessage or undefined"},sidebar:"reference",previous:{title:"getRegistryError",permalink:"/frontend/core/contracts/get-registry-error"},next:{title:"txPaymentInfo",permalink:"/frontend/core/contracts/tx-payment-info"}},i={},d=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"toabimessage",children:"toAbiMessage"}),"\n",(0,r.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"toAbiMessage(contract, 'flip');\n"})}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"interface AbiMessage {\n  args: AbiParam[];\n  docs: string[];\n  fromU8a: (data: Uint8Array) => DecodedMessage;\n  identifier: string;\n  index: number;\n  isConstructor?: boolean;\n  isMutating?: boolean;\n  isPayable?: boolean;\n  method: string;\n  path: string[];\n  returnType?: TypeDef | null;\n  selector: ContractSelector;\n  toU8a: (params: unknown[]) => Uint8Array;\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>a});var r=n(11504);const s={},o=r.createContext(s);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);