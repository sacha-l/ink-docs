"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[400],{9028:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=n(17624),o=n(4552);const s={title:"Getting Started",slug:"/frontend/utils",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more."},r="Getting Started with useink/utils",d={id:"frontend/utils/getting-started",title:"Getting Started",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more.",source:"@site/docs/frontend/utils/getting-started.md",sourceDirName:"frontend/utils",slug:"/frontend/utils",permalink:"/frontend/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/getting-started.md",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/frontend/utils",description:"General utility functions for formatting balances, Big Numbers, converting data types, and more."},sidebar:"reference",previous:{title:"toNotificationLevel",permalink:"/frontend/notifications/toNotificationLevel"},next:{title:"\u26cf\ufe0f Pick Helpers",permalink:"/frontend/utils/pick"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configure tsconfig.json",id:"configure-tsconfigjson",level:2},{value:"Add <code>&lt;NotificationProvider /&gt;</code>",id:"add-notificationprovider-",level:2}];function a(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"getting-started-with-useinkutils",children:"Getting Started with useink/utils"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"useink/utils"})," is an extension of ",(0,i.jsx)(e.code,{children:"useink"})," that provides general utility functions for\nformatting balances, working with Big Numbers and decimals, converting data types (e.g.\nhex to string), and more. ",(0,i.jsx)(e.code,{children:"useink/utils"})," currently exports\n",(0,i.jsx)(e.a,{href:"https://github.com/polkadot-js/common/tree/master/packages/util/src",children:"@polkadot/utils"}),",\nbut we will be adding new utility functions in the future."]}),"\n",(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(e.p,{children:["You must first ",(0,i.jsx)(e.a,{href:"/frontend/getting-started#installation",children:"install useink"}),".\nThen you can import utils with ",(0,i.jsx)(e.code,{children:"import * as U from 'useink/utils'"}),"."]}),"\n",(0,i.jsxs)(e.p,{children:["See ",(0,i.jsx)(e.a,{href:"https://github.com/polkadot-js/common/tree/master/packages/util/src",children:"@polkadot/utils"}),"\nfor a list of all utility functions."]}),"\n",(0,i.jsx)(e.h2,{id:"configure-tsconfigjson",children:"Configure tsconfig.json"}),"\n",(0,i.jsxs)(e.p,{children:["You must set ",(0,i.jsx)(e.code,{children:"moduleResolution"})," to ",(0,i.jsx)(e.code,{children:"nodenext"})," or ",(0,i.jsx)(e.code,{children:"bundler"})," inside of your ",(0,i.jsx)(e.code,{children:"tsconfig.json"}),".\nThis feature allows your application to discover the ",(0,i.jsx)(e.code,{children:"useink/utils"})," import paths defined\nin the ",(0,i.jsx)(e.strong,{children:"useink"})," ",(0,i.jsx)(e.code,{children:"package.json"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext", // or `bundler`\n  }\n}\n'})}),"\n",(0,i.jsxs)(e.h2,{id:"add-notificationprovider-",children:["Add ",(0,i.jsx)(e.code,{children:"<NotificationProvider />"})]})]})}function u(t={}){const{wrapper:e}={...(0,o.M)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(a,{...t})}):a(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>d,M:()=>r});var i=n(11504);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function d(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);