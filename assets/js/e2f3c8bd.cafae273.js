"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=i(t),d=r,b=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?a.createElement(b,c(c({ref:n},u),{},{components:t})):a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[f]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const o={title:"useBalance",description:"A React hook for fetching balance information for Substrate chains."},c="useBalance",l={unversionedId:"frontend/react/hooks/substrate/use-balance",id:"frontend/react/hooks/substrate/use-balance",title:"useBalance",description:"A React hook for fetching balance information for Substrate chains.",source:"@site/docs/frontend/react/hooks/substrate/use-balance.md",sourceDirName:"frontend/react/hooks/substrate",slug:"/frontend/react/hooks/substrate/use-balance",permalink:"/frontend/react/hooks/substrate/use-balance",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/substrate/use-balance.md",tags:[],version:"current",frontMatter:{title:"useBalance",description:"A React hook for fetching balance information for Substrate chains."},sidebar:"reference",previous:{title:"useApi",permalink:"/frontend/react/hooks/substrate/use-api"},next:{title:"useTransfer",permalink:"/frontend/react/hooks/substrate/use-transfer"}},s={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:i},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usebalance"},"useBalance"),(0,r.kt)("p",null,"A React hook for fetching balance information for Substrate chains."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useBalance, useWallet } from 'useink'\n\nfunction Balances() {\n  const { account } = useWallet()\n\n  // The default chain will be used if no chainId is given\n  // The default chain is the first chain config set in <UseInkProvider> props\n  const balance = useBalance(account) \n\n  // phala must be set in UseInkProvider config for this to work\n  const phalaBalance = useBalance(account, 'phala') \n\n  return (\n    <ul>\n      <li>Default Chain Balance: {balance ? planckToDecimalFormatted(balance.freeBalance, api, { decimals: 4 }) : '--'}</li>\n      <li>Phala Balance: {balance ? planckToDecimalFormatted(phalaBalance.freeBalance, phalaApi, { decimals: 4 }) : '--'}</li>\n    </ul>\n  )\n}\n")),(0,r.kt)("h2",{id:"return-value"},"Return Value"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  freeBalance: Balance;\n  frozenFee: Balance;\n  frozenMisc: Balance;\n  reservedBalance: Balance;\n  votingBalance: Balance;\n} | undefined\n")))}p.isMDXComponent=!0}}]);