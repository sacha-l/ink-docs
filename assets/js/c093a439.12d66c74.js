"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2785],{74316:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var c=n(17624),o=n(4552);const r={title:"useContract",description:"A React hook for creating contract client instances scoped to a specific chain."},s="useContract",a={id:"frontend/react/hooks/contracts/use-contract",title:"useContract",description:"A React hook for creating contract client instances scoped to a specific chain.",source:"@site/docs/frontend/react/hooks/contracts/use-contract.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-contract",permalink:"/frontend/react/hooks/contracts/use-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-contract.md",tags:[],version:"current",frontMatter:{title:"useContract",description:"A React hook for creating contract client instances scoped to a specific chain."},sidebar:"reference",previous:{title:"useCodeHash",permalink:"/frontend/react/hooks/contracts/use-code-hash"},next:{title:"useDeployer",permalink:"/frontend/react/hooks/contracts/use-deployer"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function d(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"usecontract",children:"useContract"}),"\n",(0,c.jsxs)(e.p,{children:["This hook is the foundation for many other hooks in ",(0,c.jsx)(e.strong,{children:"useink"}),". It returns a\n",(0,c.jsx)(e.code,{children:"ChainContract<T>"})," type and will automatically set the RPC url for the chain you specify."]}),"\n",(0,c.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-tsx",children:"import { useContract } from 'useink'\n\nconst CONTRACT_ADDRESS = '..'\nconst ALEPH_CONTRACT_ADDRESS = '..'\n\nexport const MyContractView: React.FC = () => {\n  // The default chain will be used if you omit chainId as the third argument\n  // The default chain is the first item in the chain config for UseInkProvider\n  const contract = useContract(CONTRACT_ADDRESS, metadata)\n  const alephContract = useContract(ALEPH_CONTRACT_ADDRESS, metadata, 'aleph')\n\n  // use with other hooks...\n  // e.g. useCall, useCallSubscription, useTx, etc\n\n  return null\n}\n"})}),"\n",(0,c.jsx)(e.h2,{id:"return-value",children:"Return Value"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-ts",children:"{\n  // A contract object that contains metadata, and an api client set with a specific RPC url\n  contract: ChainContract<T>, \n  // A strongly typed chain name found in `useink/chains`\n  chainId: ChainId,\n} | undefined\n"})})]})}function h(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(d,{...t})}):d(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>a,M:()=>s});var c=n(11504);const o={},r=c.createContext(o);function s(t){const e=c.useContext(r);return c.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:s(t.components),c.createElement(r.Provider,{value:e},t.children)}}}]);