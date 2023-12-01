"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1356],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={title:"Custom Data Structures",slug:"/datastructures/custom-datastructure",hide_title:!0},o=void 0,i={unversionedId:"datastructures/custom",id:"datastructures/custom",title:"Custom Data Structures",description:"The ink_storage crate provides useful utilities and data structures to organize and",source:"@site/docs/datastructures/custom.md",sourceDirName:"datastructures",slug:"/datastructures/custom-datastructure",permalink:"/datastructures/custom-datastructure",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/datastructures/custom.md",tags:[],version:"current",frontMatter:{title:"Custom Data Structures",slug:"/datastructures/custom-datastructure",hide_title:!0},sidebar:"reference",previous:{title:"Storage Layout",permalink:"/datastructures/storage-layout"},next:{title:"Metadata Format",permalink:"/datastructures/storage-in-metadata"}},l={},u=[{value:"Using custom types on storage",id:"using-custom-types-on-storage",level:2},{value:"Generic storage fields",id:"generic-storage-fields",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"custom-data-structures"},"Custom Data Structures"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," crate provides useful utilities and data structures to organize and\nmanipulate the contract's storage. However, contract authors should know that they can\nalso create their own custom data structures."),(0,r.kt)("h2",{id:"using-custom-types-on-storage"},"Using custom types on storage"),(0,r.kt)("p",null,"Any custom type wanting to be compatible with ink! storage must implement the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Storable.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Storable")),"\ntrait, so it can be SCALE\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"encoded")),"\nand\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"decoded")),".\nAdditionally, the traits\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.StorageLayout.html"},(0,r.kt)("inlineCode",{parentName:"a"},"StorageLayout")),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeInfo")),"\nare required as well. But don't worry, usually these traits can just be derived:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// A custom type that we can use in our contract storage\n#[derive(scale::Decode, scale::Encode)]\n#[cfg_attr(\n    feature = "std",\n    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)\n)]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n')),(0,r.kt)("p",null,"Even better: there is a macro\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_macro/4.0.0/ink_macro/attr.storage_item.html"},(0,r.kt)("inlineCode",{parentName:"a"},"#[ink::storage_item]")),",\nwhich derives all necessary traits for you. If there is no need to implement any special\nbehavior, the above code example can be simplified further as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// A custom type that we can use in our contract storage\n#[ink::storage_item]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n")),(0,r.kt)("p",null,"Naturally, you can as well implement any required trait manually. Please directly refer to\nthe relevant trait documentations for more information."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::storage_item]")," macro is responsible for storage key calculation of\nnon-",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Packed")),"\ntypes. Without it, the key for non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," fields will be zero. Using this macro is\nnecessary if you don't plan to use a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ManualKey")),"\non a non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," type."),(0,r.kt)("p",{parentName:"admonition"},"Types with custom implementations of the ink! storage traits can still use this macro only\nfor key calculation by disabling the derives: ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::storage_item(derive = false)]"),".")),(0,r.kt)("h2",{id:"generic-storage-fields"},"Generic storage fields"),(0,r.kt)("p",null,"It is possible to use generic data types in your storage, as long as any generic type\nsatisfies the required storage trait bounds. In fact, we already witnessed this in the\nprevious sections about the\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Let's say you want a mapping where accessing a non-existent key should just return\nit's default value, akin to how mappings work in Solidity. Additionally, you want to know\nhow many values there are in the mapping (its length). This could be implemented as a\nthin wrapper around the ink! ",(0,r.kt)("inlineCode",{parentName:"p"},"Mapping")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Values for this map need to implement the `Default` trait.\n/// Naturally, they also must be compatible with contract storage.\n/// Note that the underlying `Mapping` type only supports `Packed` values.\n#[ink::storage_item]\npub struct DefaultMap<K, V: Packed + Default> {\n    values: Mapping<K, V>,\n    length: u32,\n}\n\nimpl<K: Encode, V: Packed + Default> DefaultMap<K, V> {\n    /// Accessing non-existent keys will return the default value.\n    pub fn get(&self, key: &K) -> V {\n        self.values.get(key).unwrap_or_default()\n    }\n\n    /// Inserting into the map increases its length by one.\n    pub fn set<I, U>(&mut self, key: I, value: &U)\n    where\n        I: scale::EncodeLike<K>,\n        E: scale::EncodeLike<V> + Storable,\n    {\n        if self.values.insert(key, value).is_none() {\n            self.length += 1\n        }\n    }\n\n    /// Removing a value from the map decreases its length by one.\n    pub fn remove(&mut self, key: &K) {\n        if self.values.take(key).is_some() {\n            self.length -= 1\n        }\n    }\n\n    /// Return how many values the mapping contains\n    pub fn len(&self) -> u32 {\n        self.length\n    }\n}\n\n/// `DefaultMap` is compatible with contract storage.\n#[ink(storage)]\npub struct MyContract {\n    my_map: DefaultMap<BlockNumber, Balance>,\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Generic data types may substantially increase your contracts overall code size, making it\nmore costly to store on-chain."),(0,r.kt)("p",{parentName:"admonition"},"The reason for this is ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/twiggy/concepts/generic-functions-and-monomorphization.html"},"Rust's monomorphization"),".")))}m.isMDXComponent=!0}}]);