"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,b=p["".concat(i,".").concat(d)]||p[d]||f[d]||c;return n?r.createElement(b,s(s({ref:t},l),{},{components:n})):r.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,s=new Array(c);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<c;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const c={title:"useEventSubscription",description:"React hook for subscribing to events for a specific contract."},s="useEventSubscription",a={unversionedId:"frontend/react/hooks/contracts/use-event-subscription",id:"frontend/react/hooks/contracts/use-event-subscription",title:"useEventSubscription",description:"React hook for subscribing to events for a specific contract.",source:"@site/docs/frontend/react/hooks/contracts/use-event-subscription.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-event-subscription",permalink:"/es/frontend/react/hooks/contracts/use-event-subscription",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-event-subscription.md",tags:[],version:"current",frontMatter:{title:"useEventSubscription",description:"React hook for subscribing to events for a specific contract."},sidebar:"reference",previous:{title:"useDryRun",permalink:"/es/frontend/react/hooks/contracts/use-dry-run"},next:{title:"useEvents",permalink:"/es/frontend/react/hooks/contracts/use-events"}},i={},u=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],l={toc:u},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useeventsubscription"},"useEventSubscription"),(0,o.kt)("p",null,"A hook for subscribing to events for a specific contract. This hook should only be called\nonce. Only events emitted after the subscription has been established\nwill be available. See ",(0,o.kt)("a",{parentName:"p",href:"/frontend/configuration#configprops"},"configuration")," to learn more\nabout setting dApp defaults for how long events should live in state before being removed."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useEventSubscription, useContract } from 'useink'\nimport metadata from 'metadata.json'\n\nconst CONTRACT_ADDRESS = '..'\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract(CONTRACT_ADDRESS, metadata)\n  useEventSubscription(contract) // subscribe to events for a contract one time\n  // call useEvents(contract?.address) to fetch the events from state\n\n  return null\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"void\n")))}f.isMDXComponent=!0}}]);