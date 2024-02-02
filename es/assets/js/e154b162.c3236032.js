"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1232],{98360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var s=t(17624),o=t(4552);const r={title:"useCallSubscription",description:"React hook for calling a contract message on every new block."},a="useCallSubscription",c={id:"frontend/react/hooks/contracts/use-call-subscription",title:"useCallSubscription",description:"React hook for calling a contract message on every new block.",source:"@site/docs/frontend/react/hooks/contracts/use-call-subscription.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-call-subscription",permalink:"/es/frontend/react/hooks/contracts/use-call-subscription",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-call-subscription.md",tags:[],version:"current",frontMatter:{title:"useCallSubscription",description:"React hook for calling a contract message on every new block."},sidebar:"reference",previous:{title:"useCall",permalink:"/es/frontend/react/hooks/contracts/use-call"},next:{title:"useCodeHash",permalink:"/es/frontend/react/hooks/contracts/use-code-hash"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Calling with a default caller address",id:"calling-with-a-default-caller-address",level:2},{value:"Return Value",id:"return-value",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"usecallsubscription",children:"useCallSubscription"}),"\n",(0,s.jsxs)(n.p,{children:["A React hook for calling a contract message on each new block and decoding a successful\nresponse or receiving an error. This is similar to\n",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"}),", except that there is no ",(0,s.jsx)(n.code,{children:"send()"}),"\nfunction in the response. The contract message will automatically be called on each new\nblock. See ",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"})," to learn about more shared\nfeatures."]}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"/frontend/utils/pick",children:"useink/utils helpers"})," for compatible functions that work\nwell with this hook."]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useCallSubscription } from 'useink'\nimport { pickDecoded } from 'useink/utils'\nimport metadata from 'contract/metadata.json'\n\nconst CONTRACT_ADDRESS = '...'\n\n// We define a response type so that `get.result.value.decoded` is of type SuccessfulResponse\ninterface SuccessfulResponse {\n  foo: 'bar'\n}\n\nexport const CallGetOnNewBlocks: React.FC = () => {\n  const contract = useContract(CONTRACT_ADDRESS, metadata, 'aleph') \n  const args = ['arg-1', 2]\n  const get = useCallSubscription<SuccessfulResponse>(contract, 'get', args)\n\n  return (\n    <>\n      <h2>Get the Result the hard way: {get.result?.ok ? get.result.value.decoded.foo : '--'}</h2>\n      <h2>Or the easy way: {pickDecoded(get.result)?.foo || '--'}</h2>\n    </>\n  )\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"calling-with-a-default-caller-address",children:"Calling with a default caller address"}),"\n",(0,s.jsxs)(n.p,{children:["You must first define a default caller in ",(0,s.jsx)(n.a,{href:"/frontend/configuration#configprops",children:"configuration"}),", then call the contract with options:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"const args = ['blue pill'];\nconst callSub = useCallSubscription(contract, 'get', args, { defaultCaller: true });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  isSubmitting: boolean;\n  result?: {\n    ok: true;\n    value: {\n      raw: ContractExecResult; \n      decoded: T; // The response is decoded using contract Metadata, and of type `T`\n    } | {\n      ok: false;\n      // error is set if a contract panics or has a failed assert(), or some other pallet errors.\n      error: DispatchError | undefined; \n    }\n  }\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>a});var s=t(11504);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);