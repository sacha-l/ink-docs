"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5104],{67684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var s=n(17624),o=n(4552);const a={title:"useTimestampDate",description:"A React hook for getting the unix timestamp in milliseconds on each new block."},r="useTimestampDate",i={id:"frontend/react/hooks/substrate/use-timestamp-date",title:"useTimestampDate",description:"A React hook for getting the unix timestamp in milliseconds on each new block.",source:"@site/docs/frontend/react/hooks/substrate/use-timestamp-date.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-timestamp-date",permalink:"/es/frontend/react/hooks/substrate/use-timestamp-date",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-timestamp-date.md",tags:[],version:"current",frontMatter:{title:"useTimestampDate",description:"A React hook for getting the unix timestamp in milliseconds on each new block."},sidebar:"reference",previous:{title:"useBlockHeader",permalink:"/es/frontend/react/hooks/substrate/use-block-header"},next:{title:"useTimestampNow",permalink:"/es/frontend/react/hooks/substrate/use-timestamp-now"}},c={},u=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usetimestampdate",children:"useTimestampDate"}),"\n",(0,s.jsx)(t.p,{children:"A React hook for getting the unix timestamp in milliseconds on each new block."}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { useTimestampDate } from 'useink'\n\nfunction BlockTime() {\n  const d = useTimestampDate('phala');\n\n  // e.g. 4:40:54 PM\n  return <p>{d.toLocaleTimeString()}</p>;\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"Date | undefined\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var s=n(11504);const o={},a=s.createContext(o);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);