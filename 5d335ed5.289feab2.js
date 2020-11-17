(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(92)),i={title:"HashMap Lazy vs. Eager",slug:"/datastructures/hashmap-lazy-eager"},c={unversionedId:"datastructures/hashmap-impls",id:"datastructures/hashmap-impls",isDocsHomePage:!1,title:"HashMap Lazy vs. Eager",description:"In the following we explore the differences between the high-level ink_storage::HashMap",source:"@site/docs/datastructures/hashmap-impls.md",slug:"/datastructures/hashmap-lazy-eager",permalink:"/ink-docs/datastructures/hashmap-lazy-eager",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/hashmap-impls.md",version:"current",sidebar:"reference",previous:{title:"HashMap",permalink:"/ink-docs/datastructures/hashmap"},next:{title:"Your Custom Datastructure",permalink:"/ink-docs/datastructures/custom-datastructure"}},l=[{value:"Spread &amp; Packed Modes",id:"spread--packed-modes",children:[]},{value:"Default: Spreading Mode",id:"default-spreading-mode",children:[]},{value:"Packing Storage",id:"packing-storage",children:[]},{value:"Spreading Array Cells",id:"spreading-array-cells",children:[]},{value:"Opting-out of Storage",id:"opting-out-of-storage",children:[]},{value:"Dynamic Storage Allocator",id:"dynamic-storage-allocator",children:[]},{value:"Custom Data Sturctures",id:"custom-data-sturctures",children:[]},{value:"In Summary",id:"in-summary",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the following we explore the differences between the high-level ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::collections::HashMap"),"\nand the low-level ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::lazy::LazyHashMap"),". Both provide very similar functionality in that they map some generic key to some storage entity."),Object(o.b)("p",null,"However, their APIs look very different. Whereas the ",Object(o.b)("inlineCode",{parentName:"p"},"HashMap")," provides a rich and high-level API that is comparable to that of Rust's very own ",Object(o.b)("inlineCode",{parentName:"p"},"HashMap"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"LazyHashMap")," provides only a fraction of the API and also operates on ",Object(o.b)("inlineCode",{parentName:"p"},"Option<T>")," values types instead of ",Object(o.b)("inlineCode",{parentName:"p"},"T")," directly. It is more similar Solidity mappings than to Rust's ",Object(o.b)("inlineCode",{parentName:"p"},"HashMap"),"."),Object(o.b)("p",null,"The fundamental difference of both data structures is that ",Object(o.b)("inlineCode",{parentName:"p"},"HashMap")," is aware of the keys that have been stored in it and thus can reconstruct exactly which elements and storage regions apply to it. This enables it to provide iteration and automated deletion as well as efficient way to defragment its underlying storage to free some storage space again. This goes very well in the vein of Substrate's storage rent model where contracts have to pay for the storage they are using."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Data Structure"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"level of abstraction"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"caching"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"lazy"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"element type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"container"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"T")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"no"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"T")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"primitive value")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"Lazy<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"high-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"T")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"single element container")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"LazyCell<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"low-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"Option<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"single element, no container")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"Vec<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"high-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"T")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rust vector-like container")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"LazyIndexMap<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"low-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"Option<T>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"similar to Solidity mapping")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"HashMap<K, V>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"high-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"V")," (key type ",Object(o.b)("inlineCode",{parentName:"td"},"K"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Rust map-like container")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(o.b)("inlineCode",{parentName:"td"},"LazyHashMap<K, V>")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"low-level"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"yes"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(o.b)("inlineCode",{parentName:"td"},"Option<V>")," (key type ",Object(o.b)("inlineCode",{parentName:"td"},"K"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"similar to Solidity mapping")))),Object(o.b)("p",null,"There are many more! For more information about the specifics please take a look into ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_storage/"}),"the ",Object(o.b)("inlineCode",{parentName:"a"},"ink_storage")," crate documentation"),"."),Object(o.b)("h3",{id:"spread--packed-modes"},"Spread & Packed Modes"),Object(o.b)("p",null,"Storing or loading complex data structures to and from contract storage can be done in many different ways. You could store all information into a single storage cell or you could try to store all information into as many different cells as possible. Both strategies have pros and cons under different conditions."),Object(o.b)("p",null,"For example it might be a very good idea to store all the information under the same cell if all the information is very compact. For example when we are dealing with a byte vector that is expected to never be larger than approx a thousand elements it would probably be more efficient if we store all those thousand bytes in the same cell and especially if we often access many of those (or all) in our contract messages."),Object(o.b)("p",null,"On the other hand spreading information across as many cells as possible might be much more efficient if we are dealing with big data structures, a lot of information that is not compact, or when messages that operate on the data always only need a small fraction of the whole data.\nAn example for this use case is if you have a vector of user accounts where each account stores potentially a lot of information, e.g. a 32-byte hash etc and where our messages only every operate on only a few of those at a time."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate provides the user full control over the strategy or a mix of these two root strategies through some fundamental abstractions that we are briefly presenting to you."),Object(o.b)("h3",{id:"default-spreading-mode"},"Default: Spreading Mode"),Object(o.b)("p",null,"By default ink! spreads information to as many cells as possible. For example if you have the following ",Object(o.b)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct every field will live in its own single storage cell. Note that for ",Object(o.b)("inlineCode",{parentName:"p"},"c")," all 32 bytes will share the same cell!"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: [u8; 32],\n}\n")),Object(o.b)("h3",{id:"packing-storage"},"Packing Storage"),Object(o.b)("p",null,"We can alter this behaviour by using the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Pack")," abstraction:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"pub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: [u8; 32],\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n}\n")),Object(o.b)("p",null,"Now all fields of ",Object(o.b)("inlineCode",{parentName:"p"},"Spreaded")," will share the same storage cell. This means whenever one of them is stored to or loaded from the contract storage, all of them are stored or loaded. A user has to choose wisely what mode of operation is more suitable for their contract."),Object(o.b)("p",null,"These abstractions can be combined in various ways, yielding full control to the users. For example, in the following only ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," share a common storage cell while ",Object(o.b)("inlineCode",{parentName:"p"},"c")," lives in its own:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"pub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n    c: [u8; 32],\n}\n")),Object(o.b)("h3",{id:"spreading-array-cells"},"Spreading Array Cells"),Object(o.b)("p",null,"If we prefer to store all bytes of ",Object(o.b)("inlineCode",{parentName:"p"},"c")," into their own storage cell we can make use of the ",Object(o.b)("inlineCode",{parentName:"p"},"SmallVec")," data structure. The ",Object(o.b)("inlineCode",{parentName:"p"},"SmallVec")," is a high-level data structure that allows to efficiently organize a fixed number of elements similar to a Rust array. However, unlike a Rust array it acts lazily upon the storage and spreads its elements into different cells."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use typenum::U32;\n\npub struct Spreaded {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n}\n\n#[ink(storage)]\npub struct Packed {\n    packed: ink_storage::Pack<Spreaded>,\n    c: SmallVec<u8, U32>,\n}\n")),Object(o.b)("h3",{id:"opting-out-of-storage"},"Opting-out of Storage"),Object(o.b)("p",null,"If you are in need of storing some temporary information across method and message boundaries ink! will have your back with the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Memory")," abstraction. It allows you to simply opt-out of using the storage for the wrapped entity at all and thus is very similar to Solidity's very own ",Object(o.b)("inlineCode",{parentName:"p"},"memory")," annotation."),Object(o.b)("p",null,"An example below:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct OptedOut {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: ink_storage::Memory<i32>,\n}\n")),Object(o.b)("p",null,"The the above example ",Object(o.b)("inlineCode",{parentName:"p"},"a")," and ",Object(o.b)("inlineCode",{parentName:"p"},"b")," are normal storage entities, however, ",Object(o.b)("inlineCode",{parentName:"p"},"c")," on the other hand side will never load from or store to contract storage and will always be reset to the default value of its ",Object(o.b)("inlineCode",{parentName:"p"},"i32")," type for every contract call.\nIt can be accesses from all ink! messages or methods via ",Object(o.b)("inlineCode",{parentName:"p"},"self.c")," but will never manipulate the contract storage and thus acts wonderfully as some shared local information."),Object(o.b)("h3",{id:"dynamic-storage-allocator"},"Dynamic Storage Allocator"),Object(o.b)("p",null,"In the previous section we have seen how the default mode of operation is to spread information and how we can opt-in to packing information into single cells via ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Packed"),"."),Object(o.b)("p",null,"However, what if we wanted to store a vector of a vector of ",Object(o.b)("inlineCode",{parentName:"p"},"i32")," for example?\nNaturally a user would try to construct this as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use ink_storage::Vec as StorageVec;\n\n#[ink(storage)]\npub struct Matrix {\n    values: StorageVec<StorageVec<i32>>,\n}\n")),Object(o.b)("p",null,"However, this will fail compilation with an error indicating that ",Object(o.b)("inlineCode",{parentName:"p"},"StorageVec<T>")," requires for its ",Object(o.b)("inlineCode",{parentName:"p"},"T")," to be packed (",Object(o.b)("inlineCode",{parentName:"p"},"T: PackedLayout"),") which ",Object(o.b)("inlineCode",{parentName:"p"},"StorageVec<T>")," itself does not since it always stores all of its elements into different cells. The same applies to many other storage data sturctures provided by ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," and is a trade-off the ink! team decided for the case of efficiency of the overall system.\nInstead what a user can do in order to get their vector-of-vector to be working is to make use of ink!'s dynamic storage allocator capabilities."),Object(o.b)("p",null,"For this the contract author has to first enable the feature via:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n\n#[ink::contract(dynamic_storage_allocator = true)]\nmod matrix {\n    // contract code ...\n}\n")),Object(o.b)("p",null,"And then we can define our ",Object(o.b)("inlineCode",{parentName:"p"},"Matrix")," ",Object(o.b)("inlineCode",{parentName:"p"},"#[ink(storage)]")," as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),"use ink_storage::{\n    Vec as StorageVec,\n    Box as StorageBox,\n};\n\n#[ink(storage)]\npub struct Matrix {\n    values: StorageVec<StorageBox<StorageVec<i32>>>,\n}\n")),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Box<T>")," we can use a ",Object(o.b)("inlineCode",{parentName:"p"},"T: SpreadLayout")," as if it was ",Object(o.b)("inlineCode",{parentName:"p"},"T: PackedLayout")," since the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage::Box<T>")," itself suffices the requirements and can be put into a single contract storage cell. The whole concept works quite similar to how Rust's ",Object(o.b)("inlineCode",{parentName:"p"},"Box")," works: by an indirection - contract authors are therefore advised to make use of dynamic storage allocator capabilities only if other ways of dealing with ones problems are not applicable."),Object(o.b)("h3",{id:"custom-data-sturctures"},"Custom Data Sturctures"),Object(o.b)("p",null,"While the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core ",Object(o.b)("inlineCode",{parentName:"p"},"SpreadLayout")," and ",Object(o.b)("inlineCode",{parentName:"p"},"PackedLayout")," traits users are able to define their very own custom storage data structures with their own set of requirement and features that work along the ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," data structures as long as they fulfill the mere requirements stated by those two traits."),Object(o.b)("p",null,"In the future we plan on providing some more ink! workshops and tutorials guiding the approach to design and implement a custom storage data structure."),Object(o.b)("h3",{id:"in-summary"},"In Summary"),Object(o.b)("p",null,"The new ",Object(o.b)("inlineCode",{parentName:"p"},"ink_storage")," crate provides everything you need to operate on your contract's storage.\nThere are low-level and high-level data structures depending on your need of control.\nAll provided data structures operate lazily on the contract's storage and cache their reads and writes for a more gas efficient storage access.\nUsers should prefer high-level data structures found in the ",Object(o.b)("inlineCode",{parentName:"p"},"collections")," module over the low-level data structures found in the ",Object(o.b)("inlineCode",{parentName:"p"},"lazy")," module.\nFor a list of all the new storage data structure visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://paritytech.github.io/ink/ink_storage/"}),Object(o.b)("inlineCode",{parentName:"a"},"ink_storage"),"'s documentation"),"."))}b.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(u,c(c({ref:t},s),{},{components:a})):r.a.createElement(u,c({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);