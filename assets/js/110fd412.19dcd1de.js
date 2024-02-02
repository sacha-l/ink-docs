"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7510],{48964:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(17624),r=t(4552);const s={title:"useDeployer",description:"A React hook for deploying a contract from a Wasm blob or code hash."},a="useDeployer",c={id:"frontend/react/hooks/contracts/use-deployer",title:"useDeployer",description:"A React hook for deploying a contract from a Wasm blob or code hash.",source:"@site/docs/frontend/react/hooks/contracts/use-deployer.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-deployer",permalink:"/frontend/react/hooks/contracts/use-deployer",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-deployer.md",tags:[],version:"current",frontMatter:{title:"useDeployer",description:"A React hook for deploying a contract from a Wasm blob or code hash."},sidebar:"reference",previous:{title:"useContract",permalink:"/frontend/react/hooks/contracts/use-contract"},next:{title:"useDryRun",permalink:"/frontend/react/hooks/contracts/use-dry-run"}},i={},d=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usedeployer",children:"useDeployer"}),"\n",(0,o.jsx)(n.p,{children:"A React hook for deploying a contract from a Wasm blob or code hash."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx",children:"example in the playground dApp"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useDeployer } from 'useink'\n\nexport const DeployPage: React.FC = () => {\n  // Optionally pass in a ChainId to deploy to another chain. \n  // e.g. `useDeployer('shibuya-testnet')`.\n  // ChainId must be configured in your UseInkProvider config props.\n  const D = useDeployer();\n  // The code to load metadata this is omitted from this example. See useMetata docs.\n  const M = useMetadata(); \n\n  return (\n    <>\n      {D.isSubmitting && <p>Submitting...</p>}\n      {D.error && <p>{D.error}</p>}\n\n      <button onClick={D.dryRun(M.abi, 'new')}>Dry Run</button>\n      <button onClick={D.signAndSubmit(M.abi, 'new')}>Deploy</button>\n    </>\n  );\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"{\n  dryRun: DeploySignAndSend<Promise<DeployTx | undefined>>;\n  signAndSend: DeploySignAndSend<Promise<void>>;\n  contractAddress: string | undefined;\n  status: TransactionStatus;\n  result: ContractSubmittableResult | undefined;\n  isSubmitting: boolean;\n  error: string | undefined;\n  resetState: () => void;\n  gasConsumed?: WeightV2;\n  gasRequired?: WeightV2;\n  storageDeposit?: StorageDeposit;\n  willBeSuccessful: boolean;\n  events: EventRecord[];\n}\n"})})]})}function l(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>a});var o=t(11504);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);