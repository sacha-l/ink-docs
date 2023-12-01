"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2945],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>m});var i=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var s=i.createContext({}),f=function(t){var n=i.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},l=function(t){var n=f(t.components);return i.createElement(s.Provider,{value:n},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=f(e),p=o,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||r;return e?i.createElement(m,a(a({ref:n},l),{},{components:e})):i.createElement(m,a({ref:n},l))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,a=new Array(r);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=t,c[d]="string"==typeof t?t:o,a[1]=c;for(var f=2;f<r;f++)a[f]=e[f];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},74486:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>f});var i=e(87462),o=(e(67294),e(3905));const r={title:"useNotifications",description:"A hook containing tools to add, remove, and fetch transient notification state."},a="useNotifications",c={unversionedId:"frontend/notifications/useNotifications",id:"frontend/notifications/useNotifications",title:"useNotifications",description:"A hook containing tools to add, remove, and fetch transient notification state.",source:"@site/docs/frontend/notifications/useNotifications.mdx",sourceDirName:"frontend/notifications",slug:"/frontend/notifications/useNotifications",permalink:"/frontend/notifications/useNotifications",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/notifications/useNotifications.mdx",tags:[],version:"current",frontMatter:{title:"useNotifications",description:"A hook containing tools to add, remove, and fetch transient notification state."},sidebar:"reference",previous:{title:"Configuration",permalink:"/frontend/notifications/configuration"},next:{title:"toNotificationLevel",permalink:"/frontend/notifications/toNotificationLevel"}},s={},f=[{value:"Return Type",id:"return-type",level:2}],l={toc:f},d="wrapper";function u(t){let{components:n,...e}=t;return(0,o.kt)(d,(0,i.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usenotifications"},"useNotifications"),(0,o.kt)("p",null,"A hook containing tools to add, remove, and fetch notifications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { useNotifications } from 'useink/notifications'\n\nexport const MyNotifications = ({ children }) => {\n  const { notifications, addNotification, removeNotification } = useNotifications()\n\n  return (\n    <div>\n      <button\n        onClick={() => {\n          addNotification({ message: 'hello from the ink! team \ud83e\udd91', type: 'None' })\n        }}\n      >\n        Say hello\n      </button>\n\n      <ul>\n        {notifications.map((n) => (\n          <li key={n.id} onClick={() => removeNotification(n.id)}>\n            {n.message}\n          </li>\n        ))}\n      </ul>\n    </div>\n  )\n}\n")),(0,o.kt)("h2",{id:"return-type"},"Return Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Returns\ninterface UseNotifications {\n  notifications: {\n    id: string;\n    createdAt: number;\n    type: NotificationType;\n    message: string;\n    // Raw types from PolkadotJs\n    result?: Codec | ISubmittableResult;\n    chain?: ChainId; \n  }[];\n  addNotification: (payload: AddNotificationPayload) => void;\n  removeNotification: (id: string) => void;\n}\n\ninterface AddNotificationPayload {\n  type: NotificationType;\n  message: string;\n  result?: Codec | ISubmittableResult;\n  chain?: ChainId;\n}\n\ntype NotificationType =\n  | 'None'\n  | 'WalletConnected'\n  | 'WalletDisconnected'\n  | 'DryRun'\n  | 'PendingSignature'\n  | 'Errored' // Used for custom JavaScript errors\n     // Potential transaction statuses\n  | 'Future' | 'Ready' | 'Broadcast' | 'InBlock' | 'Retracted' | 'FinalityTimeout' | 'Finalized' | 'Usurped' | 'Dropped' | 'Invalid';\n")))}u.isMDXComponent=!0}}]);