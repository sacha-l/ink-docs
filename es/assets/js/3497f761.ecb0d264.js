"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),f=l,g=p["".concat(i,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,a=new Array(s);a[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),l=(n(67294),n(3905));const s={title:"useInstalledWallets",description:"A hook for getting a list of installed wallet extensions"},a="useInstalledWallets",o={unversionedId:"frontend/react/hooks/wallets/use-installed-wallets",id:"frontend/react/hooks/wallets/use-installed-wallets",title:"useInstalledWallets",description:"A hook for getting a list of installed wallet extensions",source:"@site/docs/frontend/react/hooks/wallets/use-installed-wallets.md",sourceDirName:"frontend/react/hooks/wallets",slug:"/frontend/react/hooks/wallets/use-installed-wallets",permalink:"/es/frontend/react/hooks/wallets/use-installed-wallets",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/wallets/use-installed-wallets.md",tags:[],version:"current",frontMatter:{title:"useInstalledWallets",description:"A hook for getting a list of installed wallet extensions"},sidebar:"reference",previous:{title:"useAllWallets",permalink:"/es/frontend/react/hooks/wallets/use-all-wallets"},next:{title:"useUninstalledWallets",permalink:"/es/frontend/react/hooks/wallets/use-uninstalled-wallets"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"useinstalledwallets"},"useInstalledWallets"),(0,l.kt)("p",null,"This hook returns a list of all supported wallet extensions that are installed in the user","'","s browser."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useInstalledWallets } from 'useink'\n\nfunction PrintWallets() {\n  const wallets = useInstalledWallets()\n  useEffect(() => console.log(wallets), [wallets])\n\n  return null;\n}\n")),(0,l.kt)("h2",{id:"return-type"},"Return Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  extensionName: string;\n  title: string;\n  noExtensionMessage?: string;\n  installUrl: string;\n  logo: WalletLogoProps;\n  installed: boolean | undefined;\n  extension: any;\n  signer: any;\n  enable: (dappName: string) => unknown;\n  getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>;\n  subscribeAccounts: (callback: SubscriptionFn) => unknown;\n  sign?: (address: string, payload: string) => unknown;\n  transformError: (err: WalletError) => Error;\n}[]\n")))}d.isMDXComponent=!0}}]);