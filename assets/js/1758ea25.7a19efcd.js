"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2032],{14232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var o=t(17624),a=t(4552);const i={title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},c="planckToDecimal",r={id:"frontend/utils/helpers/planck-to-decimal",title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal.",source:"@site/docs/frontend/utils/helpers/planck-to-decimal.md",sourceDirName:"frontend/utils/helpers",slug:"/frontend/utils/helpers/planck-to-decimal",permalink:"/frontend/utils/helpers/planck-to-decimal",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/helpers/planck-to-decimal.md",tags:[],version:"current",frontMatter:{title:"planckToDecimal",description:"Convert an integer (planck) number to a decimal."},sidebar:"reference",previous:{title:"System::ExtrinsicFailed",permalink:"/frontend/utils/events/system/extrinsic-failed"},next:{title:"planckToDecimalFormatted",permalink:"/frontend/utils/helpers/planck-to-decimal-formatted"}},s={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"plancktodecimal",children:"planckToDecimal"}),"\n",(0,o.jsxs)(n.p,{children:["Convert a planck number (large integer) to a decimal. Blockchains do not use floating\npoint values for tokens. Instead they a large integer for the value and a second integer\nto define how the decimals. For instance, Contracts on Rococo uses 12 decimals for the\nnative token ",(0,o.jsx)(n.code,{children:"ROC"}),". Therefore ",(0,o.jsx)(n.code,{children:"1 ROC"})," equals ",(0,o.jsx)(n.code,{children:"1_000_000_000_000"}),", or ",(0,o.jsx)(n.code,{children:"1 * 10^12"}),". These\nvalues are difficult for humans to read so we created ",(0,o.jsx)(n.code,{children:"planckToDecimal"})," to easily convert\nlarge values to human-readible ones."]}),"\n",(0,o.jsx)(n.p,{children:"This function will look up the chain's decimal count and do the math for you."}),"\n",(0,o.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import { planckToDecimal } from 'useink/utils';\nimport { getBalance } from 'useink/core';\n\nconst bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000\nconst floatingPointVersion = planckToDecimal(apiPromise, bn);\n\nconsole.log(floatingPointVersion); // e.g. 1.5\n"})}),"\n",(0,o.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"number | undefined\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>c});var o=t(11504);const a={},i=o.createContext(a);function c(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);