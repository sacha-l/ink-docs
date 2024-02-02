"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3968],{56844:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>f});var i=e(17624),o=e(4552);const r={title:"Configuration",description:"Notification configuration and default values"},c="Configuration",s={id:"frontend/notifications/configuration",title:"Configuration",description:"Notification configuration and default values",source:"@site/docs/frontend/notifications/configuration.mdx",sourceDirName:"frontend/notifications",slug:"/frontend/notifications/configuration",permalink:"/es/frontend/notifications/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/notifications/configuration.mdx",tags:[],version:"current",frontMatter:{title:"Configuration",description:"Notification configuration and default values"},sidebar:"reference",previous:{title:"Getting Started",permalink:"/es/frontend/notifications"},next:{title:"useNotifications",permalink:"/es/frontend/notifications/useNotifications"}},a={},f=[];function d(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"NotificationsProvider"})," takes ",(0,i.jsx)(t.code,{children:"config"})," props with the following interface."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"interface Config {\n  // The time to live in milliseconds before being removed from state\n  // Defaults to 5000 (5 seconds).\n  // Set to 0 to avoid having notifications removed\n  expiration?: number\n  // How often to check for notifications that have expired. Time in milliseconds\n  // Defaults to 500 (half a second)\n  checkInterval?: number\n}\n"})})]})}function u(n={}){const{wrapper:t}={...(0,o.M)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},4552:(n,t,e)=>{e.d(t,{I:()=>s,M:()=>c});var i=e(11504);const o={},r=i.createContext(o);function c(n){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:c(n.components),i.createElement(r.Provider,{value:t},n.children)}}}]);