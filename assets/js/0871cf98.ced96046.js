"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"Mutating Storage Values",slug:"/basics/mutating-values",hide_title:!0},o=void 0,s={unversionedId:"basics/mutating-values",id:"basics/mutating-values",title:"Mutating Storage Values",description:"It's time to modify some storage!",source:"@site/docs/basics/mutating-values.md",sourceDirName:"basics",slug:"/basics/mutating-values",permalink:"/basics/mutating-values",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/mutating-values.md",tags:[],version:"current",frontMatter:{title:"Mutating Storage Values",slug:"/basics/mutating-values",hide_title:!0},sidebar:"reference",previous:{title:"Reading Values from Storage",permalink:"/basics/reading-values"},next:{title:"Events",permalink:"/basics/events"}},l={},u=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}],c={toc:u},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/storage-mutating.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"mutating-storage-values"},"Mutating Storage Values"),(0,a.kt)("p",null,"It's time to modify some storage!"),(0,a.kt)("h2",{id:"mutable-and-immutable-functions"},"Mutable and Immutable Functions"),(0,a.kt)("p",null,"You may have noticed that the function template included ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," as the first parameter of the\ncontract functions. It is through ",(0,a.kt)("inlineCode",{parentName:"p"},"self")," that you gain access to all your contract functions and\nstorage items."),(0,a.kt)("p",null,"If you are simply ",(0,a.kt)("em",{parentName:"p"},"reading")," from the contract storage, you only need to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"&self"),". But\nif you want to ",(0,a.kt)("em",{parentName:"p"},"modify")," storage items, you will need to explicitly mark it as mutable,\n",(0,a.kt)("inlineCode",{parentName:"p"},"&mut self"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n")))}p.isMDXComponent=!0}}]);