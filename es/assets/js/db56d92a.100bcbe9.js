"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3352],{41040:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=r(17624),t=r(4552);const c={title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined'},o="Pick Helpers",i={id:"frontend/utils/pick",title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined',source:"@site/docs/frontend/utils/pick.mdx",sourceDirName:"frontend/utils",slug:"/frontend/utils/pick",permalink:"/es/frontend/utils/pick",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/pick.mdx",tags:[],version:"current",frontMatter:{title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined'},sidebar:"reference",previous:{title:"Getting Started",permalink:"/es/frontend/utils"},next:{title:"tx Helpers",permalink:"/es/frontend/utils/tx-utils"}},d={},l=[{value:"pickDecoded",id:"pickdecoded",level:2},{value:"pickError",id:"pickerror",level:2},{value:"pickDecodedError",id:"pickdecodederror",level:2},{value:"pickResultOk",id:"pickresultok",level:2},{value:"pickResultErr",id:"pickresulterr",level:2},{value:"pickCallInfo",id:"pickcallinfo",level:2},{value:"pickTxInfo",id:"picktxinfo",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pick-helpers",children:"Pick Helpers"}),"\n",(0,s.jsx)(n.p,{children:'Utility functions to easily "pick" deeply nested values or undefined'}),"\n",(0,s.jsx)(n.h2,{id:"pickdecoded",children:"pickDecoded"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickDecoded"})," picks a decoded value or ",(0,s.jsx)(n.code,{children:"undefined"})," from ",(0,s.jsx)(n.code,{children:"DecodedContractResult"})," returned\nby ",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"}),", and similar hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const get = useCall<number>(flipper, 'get')\n\npickDecoded(get) // returns number or `undefined`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pickerror",children:"pickError"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickError"})," picks a ",(0,s.jsx)(n.code,{children:"DispatchError"})," (thrown in one of many possible pallets) or undefined\nfrom ",(0,s.jsx)(n.code,{children:"DecodedContractResult"})," returned by\n",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"}),", and similar hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const get = useCall<number>(flipper, 'get')\n\npickError(get) // returns a Dispatch Error or `undefined`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pickdecodederror",children:"pickDecodedError"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickDecodedError"})," picks a ",(0,s.jsx)(n.code,{children:"DispatchError"})," (thrown in one of many possible pallets) or\nundefined from ",(0,s.jsx)(n.code,{children:"DecodedContractResult"})," and returns a string error message. This is a\nwrapper around ",(0,s.jsx)(n.a,{href:"/frontend/core/contracts/decode-error",children:"decodeError"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const get = useCall<number>(flipper, 'get')\n\nconst errMessage = pickDecodedError(\n  get,\n  flipper, \n  { ContractTrapped: 'This is a custom message. There was a panic in the contract!' }, \n  'Something went wrong... This is a default error message',\n);\n\nconsole.error(errMessage); // string or undefined\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pickresultok",children:"pickResultOk"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickResultOk"})," picks the decoded Ok value or ",(0,s.jsx)(n.code,{children:"undefined"})," if a contract returns a ",(0,s.jsx)(n.code,{children:"Result<T, E>"}),". Can be used with ",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"})," and similar\nhooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface SuccessStructInContract {\n  Cool: string;\n}\n\ninterface SomeErrorEnumInContract {\n  NotCool: string;\n}\n\ninterface Response = { Ok?: SuccessStructInContract, Err?: SomeErrorEnumInContract }\n\nconst get = useCall<Response>(flipper, 'get')\n\npickResultOk(get)?.Cool // returns a SuccessStructInContract object or `undefined`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pickresulterr",children:"pickResultErr"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickResultErr"})," picks the decoded Err value or ",(0,s.jsx)(n.code,{children:"undefined"})," if a contract returns a ",(0,s.jsx)(n.code,{children:"Result<T, E>"}),". Can be used with ",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"})," and similar\nhooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface SuccessStructInContract {\n  Cool: string;\n}\n\ninterface SomeErrorEnumInContract {\n  NotCool: string;\n}\n\ninterface Response = { Ok?: SuccessStructInContract, Err?: SomeErrorEnumInContract }\n\nconst get = useCall<Response>(flipper, 'get')\n\npickResultErr(get)?.NotCool // returns a SomeErrorEnumInContract object or `undefined`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"pickcallinfo",children:"pickCallInfo"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickCallInfo"})," picks the ",(0,s.jsx)(n.code,{children:"CallInfo"})," or ",(0,s.jsx)(n.code,{children:"undefined"})," from a message result. Can be used with\n",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-call",children:"useCall"})," and similar hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const get = useCall(flipper, 'get')\n\npickCallInfo(get.result)\n\n// Returns undefined or CallInfo\ninterface CallInfo {\n  gasRequired: Weight;\n  gasConsumed: Weight;\n  storageDeposit: StorageDeposit;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"picktxinfo",children:"pickTxInfo"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"pickTxInfo"})," picks the ",(0,s.jsx)(n.code,{children:"TxInfo"})," or ",(0,s.jsx)(n.code,{children:"undefined"})," from a tx or dry run result. Can be used with\n",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-tx",children:"useTx"}),",\n",(0,s.jsx)(n.a,{href:"/frontend/react/hooks/contracts/use-dry-run",children:"useDryRun"}),", and similar hooks."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const flip = useTx(flipper, 'flip')\n\npickTxInfo(flip.result)\n\n// Returns undefined or Info\ninterface TxInfo {\n  gasRequired: Weight;\n  gasConsumed: Weight;\n  storageDeposit: StorageDeposit;\n  partialFee: Balance;\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>i,M:()=>o});var s=r(11504);const t={},c=s.createContext(t);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);