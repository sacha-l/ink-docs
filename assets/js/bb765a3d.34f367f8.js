"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8183],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},f=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),l=i(r),p=a,m=l["".concat(c,".").concat(p)]||l[p]||d[p]||o;return r?n.createElement(m,s(s({ref:t},f),{},{components:r})):n.createElement(m,s({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[l]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={title:"useTransfer",description:"A React hook for transferring funds to an account"},s="useTransfer",u={unversionedId:"frontend/react/hooks/substrate/use-transfer",id:"frontend/react/hooks/substrate/use-transfer",title:"useTransfer",description:"A React hook for transferring funds to an account",source:"@site/docs/frontend/react/hooks/substrate/use-transfer.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-transfer",permalink:"/frontend/react/hooks/substrate/use-transfer",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-transfer.md",tags:[],version:"current",frontMatter:{title:"useTransfer",description:"A React hook for transferring funds to an account"},sidebar:"reference",previous:{title:"useBalance",permalink:"/frontend/react/hooks/substrate/use-balance"},next:{title:"useBlockHeader",permalink:"/frontend/react/hooks/substrate/use-block-header"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],f={toc:i},l="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(l,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usetransfer"},"useTransfer"),(0,a.kt)("p",null,"A React hook for transferring funds to an account"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTransfer } from 'useink'\n\nfunction TransferWidget() {\n  const transfer = useTransfer() \n  const receiver = '5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR'\n  const amount = 1_000_000;\n\n  return (\n    <div>\n      <p>Hash {transfer?.result?.toHex() || '--'}</p>\n\n      <button \n        type=\"button\" \n        disabled={transfer.isSubmitting}\n        onClick={() => transfer.signAndSend(receiver, amount)}\n      >\n        Send $$$\n      </button>\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface TransferState {\n  signAndSend: SignAndSendTransfer;\n  hash: Hash | undefined;\n  error: unknown | undefined;\n  resetState: () => void; // clears the hash and error value\n  isSubmitting: boolean;\n}\n")))}d.isMDXComponent=!0}}]);