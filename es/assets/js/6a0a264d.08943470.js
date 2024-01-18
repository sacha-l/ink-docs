"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"strict_balance_equality",hide_title:!0,description:"strict_balance_equality lint documentation"},l="strict_balance_equality",o={unversionedId:"linter/rules/strict_balance_equality",id:"linter/rules/strict_balance_equality",title:"strict_balance_equality",description:"strict_balance_equality lint documentation",source:"@site/docs/linter/rules/strict_balance_equality.md",sourceDirName:"linter/rules",slug:"/linter/rules/strict_balance_equality",permalink:"/es/linter/rules/strict_balance_equality",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/linter/rules/strict_balance_equality.md",tags:[],version:"current",frontMatter:{title:"strict_balance_equality",hide_title:!0,description:"strict_balance_equality lint documentation"},sidebar:"reference",previous:{title:"storage_never_freed",permalink:"/es/linter/rules/storage_never_freed"},next:{title:"non_fallible_api",permalink:"/es/linter/rules/non_fallible_api"}},c={},s=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this bad?",id:"why-is-this-bad",level:2},{value:"Known problems",id:"known-problems",level:2},{value:"Example",id:"example",level:2}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strict_balance_equality"},"strict_balance_equality"),(0,r.kt)("h2",{id:"what-it-does"},"What it does"),(0,r.kt)("p",null,"Looks for strict equalities with balance in ink! contracts."),(0,r.kt)("h2",{id:"why-is-this-bad"},"Why is this bad?"),(0,r.kt)("p",null,"The problem with strict balance equality is that it is always possible to forcibly send\ntokens to a contract. For example, using\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/ink/ink_env/fn.terminate_contract.html"},(0,r.kt)("inlineCode",{parentName:"a"},"terminate_contract")),".\nIn such a case, the condition involving the contract balance will work incorrectly, what\nmay lead to security issues, including DoS attacks and draining contract's gas."),(0,r.kt)("h2",{id:"known-problems"},"Known problems"),(0,r.kt)("p",null,"There are many ways to implement balance comparison in ink! contracts. This lint is not\ntrying to be exhaustive. Instead, it addresses the most common cases that may occur in\nreal-world contracts and focuses on precision and lack of false positives."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Assume, there is an attacker contract that sends all its funds to the target contract when\nterminated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod attacker {\n  // ...\n  #[ink(message)]\n  pub fn attack(&mut self, target: &AccountId) {\n      self.env().terminate_contract(target);\n  }\n}\n")),(0,r.kt)("p",null,"If the target contains a condition with strict balance equality, this may be manipulated by\nthe attacker:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod target {\n  // ...\n  #[ink(message)]\n  pub fn do_something(&mut self) {\n      if self.env().balance() != 100 { // Bad: Strict balance equality\n          // ... some logic\n      }\n  }\n}\n")),(0,r.kt)("p",null,"This could be mitigated using non-strict equality operators in the condition with the\nbalance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\npub mod target {\n  // ...\n  #[ink(message)]\n  pub fn do_something(&mut self) {\n      if self.env().balance() < 100 { // Good: Non-strict equality\n          // ... some logic\n      }\n  }\n}\n")))}d.isMDXComponent=!0}}]);