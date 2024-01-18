"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Overview",hide_title:!0,description:"An overview of ink! linter"},o="Overview",l={unversionedId:"linter/overview",id:"linter/overview",title:"Overview",description:"An overview of ink! linter",source:"@site/docs/linter/overview.md",sourceDirName:"linter",slug:"/linter/overview",permalink:"/linter/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/linter/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",hide_title:!0,description:"An overview of ink! linter"},sidebar:"reference",previous:{title:"Metadata Format",permalink:"/datastructures/storage-in-metadata"},next:{title:"no_main",permalink:"/linter/rules/no_main"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Suppressing linter warnings",id:"suppressing-linter-warnings",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"ink! includes the linter - a security tool designed to identify typical security issues in smart contracts. The linter is meant to seamlessly fit into the smart contracts development process, ensuring that contracts are thoroughly checked during the build phase before they are deployed to the blockchain."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"The linter is integrated to the contracts build process, therefore you should already have it installed if you are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,i.kt)("inlineCode",{parentName:"a"},"cargo-contract"))," of version ",(0,i.kt)("inlineCode",{parentName:"p"},"4.0.0")," or later."),(0,i.kt)("p",null,"Here is the list of commands you can use for installation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo install cargo-dylint dylint-link ink_linting ink_linting_mandatory\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The linter operates via ",(0,i.kt)("inlineCode",{parentName:"p"},"cargo-contract"),"."),(0,i.kt)("p",null,"To perform an analysis, run the following command within the contract directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cargo contract build --lint\n")),(0,i.kt)("p",null,"This command compiles the contract and applies all linting checks. You can find the complete list of lints along with their descriptions in this documentation."),(0,i.kt)("h2",{id:"suppressing-linter-warnings"},"Suppressing linter warnings"),(0,i.kt)("p",null,"To suppress linter warnings in your ink! smart-contract, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"allow")," attributes. You can apply these attributes either to a particular piece of code or globally."),(0,i.kt)("p",null,"Here's how to suppress the specific linter warnings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'// Suppressing the `primitive_topic` lint globally\n#[cfg_attr(dylint_lib = "ink_linting", allow(primitive_topic))]\n\n#[ink(message)]\npub fn test(&mut self) {\n    // Suppressing the `strict_balance_equality` lint in a specific place\n    #[cfg_attr(dylint_lib = "ink_linting", allow(strict_balance_equality))]\n    if self.env().balance() == 10 { /* ... */ }\n}\n')))}d.isMDXComponent=!0}}]);