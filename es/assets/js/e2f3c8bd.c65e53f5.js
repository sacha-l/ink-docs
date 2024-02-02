"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4772],{32344:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var t=a(17624),s=a(4552);const c={title:"useBalance",description:"A React hook for fetching balance information for Substrate chains."},r="useBalance",o={id:"frontend/react/hooks/substrate/use-balance",title:"useBalance",description:"A React hook for fetching balance information for Substrate chains.",source:"@site/docs/frontend/react/hooks/substrate/use-balance.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-balance",permalink:"/es/frontend/react/hooks/substrate/use-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-balance.md",tags:[],version:"current",frontMatter:{title:"useBalance",description:"A React hook for fetching balance information for Substrate chains."},sidebar:"reference",previous:{title:"useApi",permalink:"/es/frontend/react/hooks/substrate/use-api"},next:{title:"useTransfer",permalink:"/es/frontend/react/hooks/substrate/use-transfer"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"usebalance",children:"useBalance"}),"\n",(0,t.jsx)(n.p,{children:"A React hook for fetching balance information for Substrate chains."}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useBalance, useWallet } from 'useink'\n\nfunction Balances() {\n  const { account } = useWallet()\n\n  // The default chain will be used if no chainId is given\n  // The default chain is the first chain config set in <UseInkProvider> props\n  const balance = useBalance(account) \n\n  // phala must be set in UseInkProvider config for this to work\n  const phalaBalance = useBalance(account, 'phala') \n\n  return (\n    <ul>\n      <li>Default Chain Balance: {balance ? planckToDecimalFormatted(balance.freeBalance, api, { decimals: 4 }) : '--'}</li>\n      <li>Phala Balance: {balance ? planckToDecimalFormatted(phalaBalance.freeBalance, phalaApi, { decimals: 4 }) : '--'}</li>\n    </ul>\n  )\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"return-value",children:"Return Value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"{\n  freeBalance: Balance;\n  frozenFee: Balance;\n  frozenMisc: Balance;\n  reservedBalance: Balance;\n  votingBalance: Balance;\n} | undefined\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4552:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>r});var t=a(11504);const s={},c=t.createContext(s);function r(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);