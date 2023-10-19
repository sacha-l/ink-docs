"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5585],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),d=r,h=s["".concat(p,".").concat(d)]||s[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9886:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"February '23",slug:"/monthly-update/2023/02",hide_title:!0},i=void 0,l={unversionedId:"monthly-update/2023/02",id:"monthly-update/2023/02",title:"February '23",description:"ink! 4.0 + cargo-contract 2.0 released! \ud83e\udd73",source:"@site/docs/monthly-update/2023/02.md",sourceDirName:"monthly-update/2023",slug:"/monthly-update/2023/02",permalink:"/es/monthly-update/2023/02",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/monthly-update/2023/02.md",tags:[],version:"current",frontMatter:{title:"February '23",slug:"/monthly-update/2023/02",hide_title:!0}},p={},c=[{value:"ink! 4.0 + <code>cargo-contract</code> 2.0 released! \ud83e\udd73",id:"ink-40--cargo-contract-20-released-",level:2},{value:"Buenos Aires \ud83c\udde6\ud83c\uddf7",id:"buenos-aires-",level:2},{value:"Polkadot Blockchain Academy",id:"polkadot-blockchain-academy",level:3},{value:"Spanish ink! Meetup",id:"spanish-ink-meetup",level:3},{value:"Met up with Open Zeppelin",id:"met-up-with-open-zeppelin",level:3},{value:"Berlin Meetup \ud83c\udde9\ud83c\uddea",id:"berlin-meetup-",level:2}],u={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/monthly-update-feb.svg",className:"titlePic"}),(0,r.kt)("h2",{id:"ink-40--cargo-contract-20-released-"},"ink! 4.0 + ",(0,r.kt)("inlineCode",{parentName:"h2"},"cargo-contract")," 2.0 released! \ud83e\udd73"),(0,r.kt)("p",null,"This is a biggie. We've released new major versions of ink! and ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract"),".\nYou can find more information in ",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/we-just-released-ink-4-0"},"our announcement blog post"),"."),(0,r.kt)("p",null,"In order to update your local ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," installation you just have\nto execute ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo install cargo-contract --force"),"."),(0,r.kt)("p",null,"In order to update ink!, you can take a look at\n",(0,r.kt)("a",{parentName:"p",href:"/faq/migrating-from-ink-3-to-4"},"our migration guide"),"."),(0,r.kt)("h2",{id:"buenos-aires-"},"Buenos Aires \ud83c\udde6\ud83c\uddf7"),(0,r.kt)("p",null,"Some people from our team spent a couple of weeks in Buenos Aires. "),(0,r.kt)("h3",{id:"polkadot-blockchain-academy"},"Polkadot Blockchain Academy"),(0,r.kt)("img",{src:"/img/monthly-update/ba-academy.jpeg",className:"titlePic"}),(0,r.kt)("p",null,"We gave a number of lectures on general smart contract concepts,\n",(0,r.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," and ink! as part of\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/development/academy/"},"the Polkadot Blockchain Academy"),"."),(0,r.kt)("h3",{id:"spanish-ink-meetup"},"Spanish ink! Meetup"),(0,r.kt)("img",{src:"/img/monthly-update/ba-meetup.jpeg",className:"titlePic"}),(0,r.kt)("img",{src:"/img/monthly-update/ba-meetup1.jpeg",className:"titlePic"}),(0,r.kt)("h3",{id:"met-up-with-open-zeppelin"},"Met up with Open Zeppelin"),(0,r.kt)("p",null,"We met up with OpenZeppelin, as part of ",(0,r.kt)("a",{parentName:"p",href:"/"},"our Polkadot treasury engagement"),"\nwith them."),(0,r.kt)("h2",{id:"berlin-meetup-"},"Berlin Meetup \ud83c\udde9\ud83c\uddea"),(0,r.kt)("p",null,"There was an ink! meetup in Berlin, at Full Node! And it was not organized by us!\n",(0,r.kt)("a",{parentName:"p",href:"https://lu.ma/inkathon-meetup"},"Here's the lu.ma page"),"."),(0,r.kt)("p",null,"The meetup was organized by ",(0,r.kt)("a",{parentName:"p",href:"https://scio.xyz"},"Scio-Labs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://alephzero.org"},"Aleph Zero"),".\nThere were maybe 15 people there. Amazing!"),(0,r.kt)("p",null,"Scio-Labs has created two ink! related projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/use-inkathon"},(0,r.kt)("inlineCode",{parentName:"a"},"useInkathon")),": React Hooks library abstracting\nfunctionality of polkadot.js for working with ink! contracts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://inkathon.xyz/"},"INK!athon"),": Full-stack dApp boilerplate generator for ink! contracts +\na React frontend using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/use-inkathon"},"useInkathon")," hooks library.")))}m.isMDXComponent=!0}}]);