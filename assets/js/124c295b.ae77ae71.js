"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3225],{38860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var l=n(17624),s=n(4552);const o={title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions"},r="useAllWallets",a={id:"frontend/react/hooks/wallets/use-all-wallets",title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions",source:"@site/docs/frontend/react/hooks/wallets/use-all-wallets.md",sourceDirName:"frontend/react/hooks/wallets",slug:"/frontend/react/hooks/wallets/use-all-wallets",permalink:"/frontend/react/hooks/wallets/use-all-wallets",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/wallets/use-all-wallets.md",tags:[],version:"current",frontMatter:{title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions"},sidebar:"reference",previous:{title:"useWallet",permalink:"/frontend/react/hooks/wallets/use-wallet"},next:{title:"useInstalledWallets",permalink:"/frontend/react/hooks/wallets/use-installed-wallets"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2}];function u(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"useallwallets",children:"useAllWallets"}),"\n",(0,l.jsx)(t.p,{children:"This hook returns a list of all supported wallet extensions."}),"\n",(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-tsx",children:"import { useAllWallets } from 'useink'\n\nfunction PrintWallets() {\n  const wallets = useAllWallets()\n  useEffect(() => console.log(wallets), [wallets])\n\n  return null;\n}\n"})}),"\n",(0,l.jsx)(t.h2,{id:"return-type",children:"Return Type"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-ts",children:"{\n  extensionName: string;\n  title: string;\n  noExtensionMessage?: string;\n  installUrl: string;\n  logo: WalletLogoProps;\n  installed: boolean | undefined;\n  extension: any;\n  signer: any;\n  enable: (dappName: string) => unknown;\n  getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>;\n  subscribeAccounts: (callback: SubscriptionFn) => unknown;\n  sign?: (address: string, payload: string) => unknown;\n  transformError: (err: WalletError) => Error;\n}[]\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>r});var l=n(11504);const s={},o=l.createContext(s);function r(e){const t=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(o.Provider,{value:t},e.children)}}}]);