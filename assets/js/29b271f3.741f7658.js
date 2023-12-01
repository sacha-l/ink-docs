"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"DApps",slug:"/examples/dapps",hide_title:!0},i=void 0,p={unversionedId:"examples/dapps",id:"version-5.x/examples/dapps",title:"DApps",description:"We'll point to a couple full-stack dApp examples here.",source:"@site/versioned_docs/version-5.x/examples/dapps.md",sourceDirName:"examples",slug:"/examples/dapps",permalink:"/5.x/examples/dapps",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/examples/dapps.md",tags:[],version:"5.x",frontMatter:{title:"DApps",slug:"/examples/dapps",hide_title:!0},sidebar:"reference",previous:{title:"Smart Contracts",permalink:"/5.x/examples/smart-contracts"},next:{title:"Kickstart your project!",permalink:"/5.x/inkubator-overview"}},l={},s=[{value:"INK!athon",id:"inkathon",level:2},{value:"link!",id:"link",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/balloons-2.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"dapps"},"DApps"),(0,a.kt)("p",null,"We'll point to a couple full-stack dApp examples here.\nThese can serve as inspiration for how to create a frontend for your\nsmart contract."),(0,a.kt)("p",null,"Three popular libraries for building frontends are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/frontend/overview"},(0,a.kt)("inlineCode",{parentName:"a"},"useink"))," an ergonomic React hooks library for interacting with Wasm contracts and Substrate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api"},(0,a.kt)("inlineCode",{parentName:"a"},"polkadot-js/api"))," a low-level TypeScript API."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/use-inkathon"},"useInkathon")," a React hooks library.")),(0,a.kt)("h2",{id:"inkathon"},"INK!athon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://inkathon.xyz/"},"INK!athon")," is a full-stack dApp boilerplate project consisting\nof an ink! smart contract and a React frontend using the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scio-labs/use-inkathon"},"useInkathon")," hooks library."),(0,a.kt)("h2",{id:"link"},"link!"),(0,a.kt)("p",null,"link! is a URL shortener dApp. It consists of a frontend and an ink! contract."),(0,a.kt)("p",null,"link! uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},(0,a.kt)("inlineCode",{parentName:"a"},"polkadot-js/api"))," under the hood.\nThe entire source code (contract + frontend) is located here:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/link"},"https://github.com/paritytech/link"),"."),(0,a.kt)("p",null,"You can view an online demo of the dApp here: ",(0,a.kt)("a",{parentName:"p",href:"https://tiny.ink"},"https://tiny.ink"),"."),(0,a.kt)("p",null,"To create new short links you need ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," tokens from our testnet.\nSee ",(0,a.kt)("a",{parentName:"p",href:"/testnet"},"here")," for how to get those."))}d.isMDXComponent=!0}}]);