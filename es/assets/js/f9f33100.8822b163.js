"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},58608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={title:"Events",slug:"/basics/events"},o=void 0,s={unversionedId:"basics/events",id:"version-3.x/basics/events",title:"Events",description:"An ink! smart contract may define events that it can emit during contract execution.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/events.md",sourceDirName:"basics",slug:"/basics/events",permalink:"/es/3.x/basics/events",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/events.md",tags:[],version:"3.x",frontMatter:{title:"Events",slug:"/basics/events"},sidebar:"reference",previous:{title:"Mutating Storage Values",permalink:"/es/3.x/basics/mutating-values"},next:{title:"Trait Definitions",permalink:"/es/3.x/basics/trait-definitions"}},l={},c=[{value:"Event Definition",id:"event-definition",level:2},{value:"Emitting Events in a Constructor",id:"emitting-events-in-a-constructor",level:2},{value:"Emitting Events from Messages",id:"emitting-events-from-messages",level:2}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),(0,a.kt)("p",null,"The following example ink! contract shows how an event ",(0,a.kt)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    /// Defines an event that is emitted\n    /// every time value is transferred.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n")),(0,a.kt)("p",null,"See our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs"},(0,a.kt)("inlineCode",{parentName:"a"},"ERC20 example contract")),"\nfor an elaborate example which uses events."),(0,a.kt)("h2",{id:"event-definition"},"Event Definition"),(0,a.kt)("p",null,"This is how an event definition looks:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n")),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(topic)]")," attribute tag to each item in your event that you want to have indexed.\nA good rule of thumb is to ask yourself if somebody might want to search for this topic.\nFor this reason the ",(0,a.kt)("inlineCode",{parentName:"p"},"amount")," in the exemplary event above was not\nmade indexable \u2012 there will most probably be a lot of different events with\ndiffering amounts each."),(0,a.kt)("p",null,"The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,a.kt)("inlineCode",{parentName:"p"},"#[ink(anonymous)]"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"/macros-attributes/anonymous"},"here")," for details on this attribute."),(0,a.kt)("h2",{id:"emitting-events-in-a-constructor"},"Emitting Events in a Constructor"),(0,a.kt)("p",null,"In a constructor events are emitted via ",(0,a.kt)("inlineCode",{parentName:"p"},"Self::env().emit_event()"),".\nSee this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n")),(0,a.kt)("h2",{id:"emitting-events-from-messages"},"Emitting Events from Messages"),(0,a.kt)("p",null,"In a message events are emitted via ",(0,a.kt)("inlineCode",{parentName:"p"},"self.env().emit_event()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementation hidden\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n")))}m.isMDXComponent=!0}}]);