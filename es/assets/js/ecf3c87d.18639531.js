"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5108],{29852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(17624),c=n(4552);const s={title:"getBalance",hide_title:!0,description:"Get the balance of an address"},r="getBalance",o={id:"frontend/core/substrate/get-balance",title:"getBalance",description:"Get the balance of an address",source:"@site/docs/frontend/core/substrate/get-balance.md",sourceDirName:"frontend/core/substrate",slug:"/frontend/core/substrate/get-balance",permalink:"/es/frontend/core/substrate/get-balance",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/substrate/get-balance.md",tags:[],version:"current",frontMatter:{title:"getBalance",hide_title:!0,description:"Get the balance of an address"},sidebar:"reference",previous:{title:"txPaymentInfo",permalink:"/es/frontend/core/contracts/tx-payment-info"},next:{title:"getTimestampQuery",permalink:"/es/frontend/core/substrate/get-timestamp-query"}},i={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"getbalance",children:"getBalance"}),"\n",(0,a.jsx)(t.p,{children:"Get the balance of an address."}),"\n",(0,a.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"import { getBalance } from 'useink/core'\nimport { planckToDecimalFormatted } from 'useink/uitls'\n\nconst address = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'\nconst bal = await getBalance(apiPromise, address)\n\n// e.g. 89976200000000\nconsole.log(bal.freeBalance.toString())\n\n// e.g. 89.0762 ROC\nconsole.log(planckToDecimalFormatted(bal.freeBalance, apiPromise, { decimals: 4 }))\n"})}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface DeriveBalancesAccount extends DeriveBalancesAccountData {\n    accountId: AccountId;\n    accountNonce: Index;\n    additional: DeriveBalancesAccountData[];\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,c.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>r});var a=n(11504);const c={},s=a.createContext(c);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);