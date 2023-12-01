"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3279],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"November '22",slug:"/monthly-update/2022/11"},o=void 0,l={unversionedId:"monthly-update/2022/11",id:"version-5.x/monthly-update/2022/11",title:"November '22",description:"ink! v4.0.0-beta \ud83e\udd91",source:"@site/versioned_docs/version-5.x/monthly-update/2022/11.md",sourceDirName:"monthly-update/2022",slug:"/monthly-update/2022/11",permalink:"/es/5.x/monthly-update/2022/11",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/monthly-update/2022/11.md",tags:[],version:"5.x",frontMatter:{title:"November '22",slug:"/monthly-update/2022/11"}},p={},s=[{value:"ink! <code>v4.0.0-beta</code> \ud83e\udd91",id:"ink-v400-beta-",level:2},{value:"Parity Retreat in Sardinia \ud83c\udf1e",id:"parity-retreat-in-sardinia-",level:2},{value:"Shilling at Sub0 \ud83d\udde3\ufe0f",id:"shilling-at-sub0-\ufe0f",level:2},{value:"ink! x OpenZeppelin \ud83d\udd0f",id:"ink-x-openzeppelin-",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ink-v400-beta-"},"ink! ",(0,r.kt)("inlineCode",{parentName:"h2"},"v4.0.0-beta")," \ud83e\udd91"),(0,r.kt)("p",null,"We released the ink! ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink/releases/tag/v4.0.0-beta"},(0,r.kt)("inlineCode",{parentName:"a"},"v4.0.0-beta")),"! \ud83c\udf89"),(0,r.kt)("p",null,"The focus of this beta release was to establish the stable ABI for the final ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0"),"\nrelease. It means that whilst subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"beta")," releases may contain breaking contract\n",(0,r.kt)("em",{parentName:"p"},"code")," changes, the ABI will remain the same so that any contract compiled and deployed\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0-beta")," continue to be compatible with all future ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0")," versions."),(0,r.kt)("p",null,"In order to build contracts which use ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0-beta")," you need to use\n",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/releases/tag/v2.0.0-beta"},(0,r.kt)("inlineCode",{parentName:"a"},"v2.0.0-beta")),"."),(0,r.kt)("p",null,"We also released\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node/releases/tag/v0.22.1"},(0,r.kt)("inlineCode",{parentName:"a"},"v0.22.1")),"\nof the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"substrate-contracts-node")),"., which is compatible with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0.0-beta")," release."),(0,r.kt)("p",null,"If you're interested in digging further, check out the relevant ",(0,r.kt)("inlineCode",{parentName:"p"},"CHANGELOG"),"s."),(0,r.kt)("h2",{id:"parity-retreat-in-sardinia-"},"Parity Retreat in Sardinia \ud83c\udf1e"),(0,r.kt)("p",null,"Our team (and Parity as a whole) spent a few days enjoying the warmth and sunshine of\nSardinia."),(0,r.kt)("p",null,"We talked about the road towards a stable ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.0")," release, improvements to the non-Rust\ndeveloper experience, and ways to improve the adoption of ink!. Keep an eye out on the\nnext few updates to see the fruits of these discussions."),(0,r.kt)("p",null,"These in-person get togethers are especially valuable bonding experience for a global\nteam like ours. As of this writing we're spread across eight different countries!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sardinia 2022",src:n(51345).Z,width:"800",height:"534"})),(0,r.kt)("h2",{id:"shilling-at-sub0-\ufe0f"},"Shilling at Sub0 \ud83d\udde3\ufe0f"),(0,r.kt)("p",null,"Alex and German had a fireside chat session at ",(0,r.kt)("a",{parentName:"p",href:"https://sub0.polkadot.network/"},"Sub0"),", the Polkadot Developer conference."),(0,r.kt)("p",null,"You can watch the recording ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tIqcIxVm1GE"},"here on YouTube"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sub0 Fireside 2022",src:n(9663).Z,width:"800",height:"561"})),(0,r.kt)("h2",{id:"ink-x-openzeppelin-"},"ink! x OpenZeppelin \ud83d\udd0f"),(0,r.kt)("p",null,"The Polkadot council approved a ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subsquare.io/council/motion/296"},"treasury proposal")," funding\n",(0,r.kt)("a",{parentName:"p",href:"https://www.openzeppelin.com/"},"OpenZeppelin"),"'s review and audit of ink! and the Contracts pallet."),(0,r.kt)("p",null,"The tl;dr here is that OpenZeppelin will be taking a look at ink! as a language and will\ngive some recommendations for how to make the language safer."),(0,r.kt)("p",null,"We'll be sharing more about this in the upcoming weeks once the review gets started!"))}d.isMDXComponent=!0},51345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sardinia-2022-9ab731d4c7d4f19941f8706afa694705.jpg"},9663:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sub0-fireside-2022-1a21090803b68f0c394badf62d4dcbb8.jpg"}}]);