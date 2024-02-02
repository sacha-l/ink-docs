"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2056],{72788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var s=t(17624),i=t(4552);const a={title:"useApi",description:"Get a api instance for a given chain"},o="useApi",r={id:"frontend/react/hooks/substrate/use-api",title:"useApi",description:"Get a api instance for a given chain",source:"@site/docs/frontend/react/hooks/substrate/use-api.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-api",permalink:"/frontend/react/hooks/substrate/use-api",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-api.md",tags:[],version:"current",frontMatter:{title:"useApi",description:"Get a api instance for a given chain"},sidebar:"reference",previous:{title:"useUninstalledWallets",permalink:"/frontend/react/hooks/wallets/use-uninstalled-wallets"},next:{title:"useBalance",permalink:"/frontend/react/hooks/substrate/use-balance"}},c={},u=[{value:"Return Type",id:"return-type",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"useapi",children:"useApi"}),"\n",(0,s.jsxs)(n.p,{children:["A hook to get an ApiPromise and WsProvider instance for a given chain. These instances\nhave chain-specific RPC urls defined and will automatically update when you change your\nconfiguration or set a new default RPC for a chain. This hook is used in many ",(0,s.jsx)(n.strong,{children:"useink"}),"\nhooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useApi } from 'useink';\n\nexport const Api = ({ children }) => {\n  const { api } = useApi(); // Get the api instance for the default chain set in UseInkProvider\n  const alephApi = useApi('aleph'); // This assumes that 'aleph' config is added to UseInkProvider\n\n  console.log('default chain api', api)\n  console.log('aleph chain api', alephApi.api)\n\n  return <h1>Check the console logs...</h1>\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"return-type",children:"Return Type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"{\n  api: ApiPromise;\n  provider: WsProvider;\n} | undefined\n"})})]})}function d(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>o});var s=t(11504);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);