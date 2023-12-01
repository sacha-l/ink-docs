"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9435],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"Estructuras de Datos Personalizadas",slug:"/datastructures/custom-datastructure",hide_title:!0},s=void 0,i={unversionedId:"datastructures/custom",id:"version-5.x/datastructures/custom",title:"Estructuras de Datos Personalizadas",description:"El crate ink_storage provee servicios \xfatiles y estructuras de datos para organizar y manipular el storage del contrato. Sin embargo, los autores de contratos deber\xedan saber que ellos pueden crear sus propias estructuras de datos personalizadas.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/datastructures/custom.md",sourceDirName:"datastructures",slug:"/datastructures/custom-datastructure",permalink:"/es/5.x/datastructures/custom-datastructure",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/custom.md",tags:[],version:"5.x",frontMatter:{title:"Estructuras de Datos Personalizadas",slug:"/datastructures/custom-datastructure",hide_title:!0},sidebar:"reference",previous:{title:"Estructura del storage",permalink:"/es/5.x/datastructures/storage-layout"},next:{title:"Formato de la Metadata",permalink:"/es/5.x/datastructures/storage-in-metadata"}},l={},c=[{value:"Usando tipos personalizados en storage",id:"usando-tipos-personalizados-en-storage",level:2},{value:"Campos de storage gen\xe9ricos",id:"campos-de-storage-gen\xe9ricos",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/storage.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"estructuras-de-datos-personalizadas"},"Estructuras de Datos Personalizadas"),(0,r.kt)("p",null,"El crate ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," provee servicios \xfatiles y estructuras de datos para organizar y manipular el storage del contrato. Sin embargo, los autores de contratos deber\xedan saber que ellos pueden crear sus propias estructuras de datos personalizadas."),(0,r.kt)("h2",{id:"usando-tipos-personalizados-en-storage"},"Usando tipos personalizados en storage"),(0,r.kt)("p",null,"Cualquier tipo personalizado que quiera ser compatible con el  storage de ink! debe implementar el trait ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Storable.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Storable")),", as\xed puede ser ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Encode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"codificado"))," y ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/3.2.2/parity_scale_codec/trait.Decode.html"},(0,r.kt)("inlineCode",{parentName:"a"},"decodificado"))," mediante SCALE. Adem\xe1s, los traits ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.StorageLayout.html"},(0,r.kt)("inlineCode",{parentName:"a"},"StorageLayout"))," y ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/scale-info/2.3.1/scale_info/trait.TypeInfo.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeInfo"))," tambi\xe9n son requeridos. Pero no se preocupe, generalmente estos traits pueden ser derivados:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'/// Un tipo personalizado que podemos usar en nuestro storage del contrato\n#[derive(scale::Decode, scale::Encode)]\n#[cfg_attr(\n    feature = "std",\n    derive(scale_info::TypeInfo, ink::storage::traits::StorageLayout)\n)]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n')),(0,r.kt)("p",null,"A\xfan mejor: existe una macro ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_macro/4.0.0/ink_macro/attr.storage_item.html"},(0,r.kt)("inlineCode",{parentName:"a"},"#[ink::storage_item]")),", que deriva todos los traits necesarios. Si no hay necesidad de implementar un comportamiento especial, el c\xf3digo anterior puede ser simplificado de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Un tipo personalizado que podemos usar en nuestro storage del contrato\n#[ink::storage_item]\npub struct Inner {\n    value: bool,\n}\n\n#[ink(storage)]\npub struct ContractStorage {\n    inner: Inner,\n}\n")),(0,r.kt)("p",null,"Naturalmente, uno adem\xe1s puede implementar cualquier caracter\xedstica manualmente. Por favor, consulte directamente la documentaci\xf3n relevante de traits para m\xe1s informaci\xf3n."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"La macro ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::storage_item]")," es responsable del c\xe1lculo de la storage key de los tipos non-",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/trait.Packed.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Packed")),". Sin esta, la key para campos non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed")," ser\xe1 cero. Usar esta macro es necesario si no se planea usar una ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage_traits/4.0.0/ink_storage_traits/struct.ManualKey.html"},(0,r.kt)("inlineCode",{parentName:"a"},"ManualKey"))," en un tipo non-",(0,r.kt)("inlineCode",{parentName:"p"},"Packed"),"."),(0,r.kt)("p",{parentName:"admonition"},"Tipos con implementaciones personalizadas de storage de ink! pueden tambi\xe9n usar esta macro solo para c\xe1lculos de key al habilitar los derivados: ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink::storage_item(derive = false)]"),".")),(0,r.kt)("h2",{id:"campos-de-storage-gen\xe9ricos"},"Campos de storage gen\xe9ricos"),(0,r.kt)("p",null,"Es posible usar tipos de datos gen\xe9ricos en su storage, siempre y cuando cualquier tipo gen\xe9rico satisfaga los limites requeridos del trait storage. De hecho, ya hemos visto esto en anteriores secciones sobre ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping")),"."),(0,r.kt)("p",null,"Digamos que quiere un mapping que, al acceder a una key no existente, devuelva simplemente su valor predeterminado, similar a como los mappings trabajan en Solidity. Adem\xe1s, debe saber la cantidad de valores que hay en el mapping (la longitud). Esto puede ser implementado como un peque\xf1o wrapper sobre ink! ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_storage/4.0.0/ink_storage/struct.Mapping.html"},(0,r.kt)("inlineCode",{parentName:"a"},"Mapping"))," de la siguiente manera:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"/// Los valores para este map deben implementar el trait `Default`.\n/// Naturalmente, tambi\xe9n deben ser compatibles con el storage del contrato.\n/// Tener en cuenta que el tipo del `Mapping` solo soporta valores `Packed`.\n#[ink::storage_item]\npub struct DefaultMap<K, V: Packed + Default> {\n    values: Mapping<K, V>,\n    length: u32,\n}\n\nimpl<K: Encode, V: Packed + Default> DefaultMap<K, V> {\n    /// El acceso a keys inexistentes retornar\xe1 el valor predeterminado.\n    pub fn get(&self, key: &K) -> V {\n        self.values.get(key).unwrap_or_default()\n    }\n\n    /// La inserci\xf3n en el map incrementa la longitud en uno.\n    pub fn set<I, U>(&mut self, key: I, value: &U)\n    where\n        I: scale::EncodeLike<K>,\n        E: scale::EncodeLike<V> + Storable,\n    {\n        if self.values.insert(key, value).is_none() {\n            self.length += 1\n        }\n    }\n\n    /// La eliminaci\xf3n de un valor del map disminuye la longitud en uno.\n    pub fn remove(&mut self, key: &K) {\n        if self.values.take(key).is_some() {\n            self.length -= 1\n        }\n    }\n\n    /// Devuelve la cantidad de valores que contiene el mapping\n    pub fn len(&self) -> u32 {\n        self.length\n    }\n}\n\n/// `DefaultMap` es compatible con el storage del contrato.\n#[ink(storage)]\npub struct MyContract {\n    my_map: DefaultMap<BlockNumber, Balance>,\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Los tipos de datos gen\xe9ricos pueden incrementar sustancialmente el tama\xf1o del c\xf3digo de su contrato, generando mayores costos para almacenarlo on-chain."),(0,r.kt)("p",{parentName:"admonition"},"La raz\xf3n de esto es la ",(0,r.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/twiggy/concepts/generic-functions-and-monomorphization.html"},'"monomorfizaci\xf3n" de Rust'),".")))}d.isMDXComponent=!0}}]);