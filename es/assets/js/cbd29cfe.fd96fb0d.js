"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7548],{31635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var c=r(17624),n=r(4552);const o={title:"decodeCallResult",hide_title:!0,description:"Decode the result of a contract call"},l="decodeCallResult",s={id:"frontend/core/contracts/decode-call-result",title:"decodeCallResult",description:"Decode the result of a contract call",source:"@site/docs/frontend/core/contracts/decode-call-result.md",sourceDirName:"frontend/core/contracts",slug:"/frontend/core/contracts/decode-call-result",permalink:"/es/frontend/core/contracts/decode-call-result",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/contracts/decode-call-result.md",tags:[],version:"current",frontMatter:{title:"decodeCallResult",hide_title:!0,description:"Decode the result of a contract call"},sidebar:"reference",previous:{title:"call",permalink:"/es/frontend/core/contracts/call"},next:{title:"decodeError",permalink:"/es/frontend/core/contracts/decode-error"}},a={},d=[{value:"Usage",id:"usage",level:2},{value:"Returns",id:"returns",level:2}];function i(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,n.M)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"decodecallresult",children:"decodeCallResult"}),"\n",(0,c.jsxs)(t.p,{children:["A function to decode the response of a ",(0,c.jsx)(t.a,{href:"/frontend/core/contracts/call",children:"call"})," result (or\nresults of ",(0,c.jsx)(t.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"})," and similar hooks)."]}),"\n",(0,c.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-tsx",children:"import { decodeCallResult, call } from 'useink/core';\n\nconst result = await call<boolean>(contract, ...additionalArgs);\n\ndecodeCallResult(result); // { Ok: true, value: boolean } | { Ok: false, error: DispatchError }\n"})}),"\n",(0,c.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-ts",children:"{ Ok: true, value: T } | { Ok: false, error: DispatchError }\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(i,{...e})}):i(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>s,M:()=>l});var c=r(11504);const n={},o=c.createContext(n);function l(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);