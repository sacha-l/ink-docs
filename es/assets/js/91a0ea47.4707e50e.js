"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6717],{98208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(17624),o=t(4552);const i={title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},s=void 0,a={id:"macros-attributes/chain-extension",title:"#[ink::chain_extension]",description:"En la configuraci\xf3n por defecto del contracts-pallet un smart contract solo puede interactuar con el runtime",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/macros-attributes/chain-extension.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/chain-extension",permalink:"/es/5.x/macros-attributes/chain-extension",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/chain-extension.md",tags:[],version:"5.x",frontMatter:{title:"#[ink::chain_extension]",slug:"/macros-attributes/chain-extension",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(topic)]",permalink:"/es/5.x/macros-attributes/topic"},next:{title:"Introducci\xf3n",permalink:"/es/5.x/datastructures/overview"}},d={},c=[{value:"Estructura",id:"estructura",level:2},{value:"Uso",id:"uso",level:2},{value:"Atributos",id:"atributos",level:2},{value:"Detalles: <code>handle_status</code>",id:"detalles-handle_status",level:2},{value:"Uso: <code>handle_status</code> + tipo de retorno <code>Result&lt;T, E&gt;</code>",id:"uso-handle_status--tipo-de-retorno-resultt-e",level:2},{value:"Combinaciones",id:"combinaciones",level:2},{value:"C\xf3digo de Error",id:"c\xf3digo-de-error",level:2},{value:"Ejemplo: Definici\xf3n",id:"ejemplo-definici\xf3n",level:2},{value:"Ejemplo: Entorno",id:"ejemplo-entorno",level:2},{value:"Ejemplo: Uso",id:"ejemplo-uso",level:2},{value:"Limitaciones t\xe9cnicas",id:"limitaciones-t\xe9cnicas",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/img/title/text/chain-ext.svg",className:"titlePic"}),"\n",(0,r.jsxs)(n.p,{children:["En la configuraci\xf3n por defecto del ",(0,r.jsx)(n.code,{children:"contracts-pallet"})," un smart contract solo puede interactuar con el runtime\nvia su conjunto bien definido de la interface basica del smart contract. Este API ya permite una gran variedad de\ninteracci\xf3n entre el ",(0,r.jsx)(n.code,{children:"contracts-pallet"})," y el smart contract ejecutado. Por ejemplo es posible llamar e instanciar\notros smart contracts en la misma cadena, emitiendo eventos, consultando informaci\xf3n del contexto o\ncorriendo built-in procedimientos de hashing criptogr\xe1ficos."]}),"\n",(0,r.jsx)(n.p,{children:"Si este conjunto b\xe1sico de features no es suficiente para una Blockchain particular construida con Substrate\nes posible extender facilmente su API utilizando la feature de extensi\xf3n de la cadena."}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("img",{src:"/img/venn.png",width:"50%"})}),"\n",(0,r.jsx)(n.p,{children:"Con las extensiones de cadena puede exponer partes de su l\xf3gica de runtime a los desarrolladores de contratos inteligentes."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["El repositorio ink! contiene ",(0,r.jsxs)(n.a,{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension",children:["el ejemplo ",(0,r.jsx)(n.code,{children:"rand-extension"})," "]}),".\nEste es un ejemplo completo de una extensi\xf3n de una cadea implementada con ambos ink! y Substrate."]})}),"\n",(0,r.jsx)(n.h2,{id:"estructura",children:"Estructura"}),"\n",(0,r.jsx)(n.p,{children:"La interface consiste en un c\xf3digo de error que indica los errores ligeros\nasi como la definici\xf3n de algunos m\xe9todos de extensi\xf3n de cadena."}),"\n",(0,r.jsx)(n.p,{children:"La estructura general sigue una simple definici\xf3n de un Rust trat.\nEl c\xf3digo de error es definido como la definici\xf3n de un tipo asociado de la definici\xf3n trait.\nLos m\xe9todos son definidos como m\xe9todos trait asociados sin implementaci\xf3n."}),"\n",(0,r.jsxs)(n.p,{children:["Los m\xe9todos de extensi\xf3n de cadena no deben tener un receptor ",(0,r.jsx)(n.code,{children:"self"})," como ",(0,r.jsx)(n.code,{children:"&self"})," o ",(0,r.jsx)(n.code,{children:"&mut self"}),"\ny deben tener inputs y outputs que implementen el codec SCALE. Su valor de retorno sigue\nunas reglas espec\xedficas que pueden ser alteradas utilizando el atributo ",(0,r.jsx)(n.code,{children:"handle_status"})," y la\nalternancia entre los tipos ",(0,r.jsx)(n.code,{children:"Result"})," y Non-",(0,r.jsx)(n.code,{children:"Result"}),", que se describen con m\xe1s detalle a continuaci\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"uso",children:"Uso"}),"\n",(0,r.jsx)(n.p,{children:"Normalmente la definici\xf3n de extensi\xf3n de cadena utilizando este proc. macro\nla provee el autor de la extensi\xf3n de cadena en un crate separado.\nLos smart contracts ink! utilizando esta extensi\xf3n de cadena simplemente dependen en\nde este crate y utilizan su definici\xf3n de entorno asociado para hacer uso\nde los m\xe9todos proporcionados por la extensi\xf3n de cadena."}),"\n",(0,r.jsx)(n.h2,{id:"atributos",children:"Atributos"}),"\n",(0,r.jsx)(n.p,{children:"Los m\xe9todos de extensi\xf3n de cadena pueden marcarse con dos atributos diferentes:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Atributos"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Requerido"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Valor por Defecto"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ink(extension = N: u32)"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Si"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Determina el ID \xfanico de la funci\xf3n del m\xe9todo de extensi\xf3n de cadena"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"ink(handle_status = flag: bool)"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Opcional"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"Asume que el c\xf3digo de estatus devuelto del m\xe9todo de extensi\xf3n de la cadena siempre indica exito y por lo tanto siempre carga y decodifica el output buffer de la llamada."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"Como en todos los atributos ink! pueden aparecer multiples de ellos en una lista contigua:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = i32;\n  \n    #[ink(extension = 5, handle_status = false)]\n    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"o como multiples atributos ink! independientes aplicados al mismo item:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"type Access = i32;\n\n#[ink::chain_extension]\npub trait MyChainExtension {\n  type ErrorCode = i32;\n  \n  #[ink(extension = 5)]\n  #[ink(handle_status = false)]\n  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;\n}\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"detalles-handle_status",children:["Detalles: ",(0,r.jsx)(n.code,{children:"handle_status"})]}),"\n",(0,r.jsxs)(n.p,{children:["Valor por defecto: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsxs)(n.p,{children:["Por defecto todos los m\xe9todos de extensi\xf3n de cadena deber\xedan retornar un ",(0,r.jsx)(n.code,{children:"Result<T, E>"})," donde ",(0,r.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),".\nEl ",(0,r.jsx)(n.code,{children:"Self::ErrorCode"})," representa el c\xf3digo de error de la extensi\xf3n de cadena.\nEsto significa que un smart contract llamando a un m\xe9todo de extensi\xf3n de cadena primero consulta el\nc\xf3digo de estado devuelto por el m\xe9todo de extensi\xf3n de cadena y solo carga y decodifica el output si el\nc\xf3digo de estado devuelto indica que ha sido una llamada exitosa.\nSe dise\xf1o asi para ser m\xe1s eficiente cuando ning\xfan outputs sin contar con el c\xf3digo de error\nes requerido por la llamada de extensi\xf3n de cadena. Cuando dise\xf1es la extensi\xf3n de cadena intenta no utilizar el\nc\xf3digo de error para devolver errores y solo utiliza el buffer output para m\xe1s informaci\xf3n que no encja\nen un \xfanico valor ",(0,r.jsx)(n.code,{children:"u32"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Un m\xe9todo de extensi\xf3n de cadena que es marcado con ",(0,r.jsx)(n.code,{children:"handle_status = false"})," asume que el c\xf3digo de error devuelto\nsiempre indicara \xe9xito. Por lo tanto siempre cargara y decodificara el buffer output y perdera el\nconstraint ",(0,r.jsx)(n.code,{children:"E: From<Self::ErrorCode"})," de la llamada."]}),"\n",(0,r.jsxs)(n.p,{children:["Tenga en cuenta que si un m\xe9todo de extensi\xf3n de cadena no retorna ",(0,r.jsx)(n.code,{children:"Result<T, E>"})," where ",(0,r.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),"\npero con ",(0,r.jsx)(n.code,{children:"handle_status = true"}),", seguir\xe1 retornando un valor de tipo ",(0,r.jsx)(n.code,{children:"Result<T, Self::ErrorCode>"}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"uso-handle_status--tipo-de-retorno-resultt-e",children:["Uso: ",(0,r.jsx)(n.code,{children:"handle_status"})," + tipo de retorno ",(0,r.jsx)(n.code,{children:"Result<T, E>"})]}),"\n",(0,r.jsxs)(n.p,{children:["Utiliza ambos ",(0,r.jsx)(n.code,{children:"handle_status = false"})," y tipo de retorno non-",(0,r.jsx)(n.code,{children:"Result"})," para el mismo m\xe9todo de extensi\xf3n de cadena\nsi una llamada nunca puede fallar y nunca devuelva un tipo ",(0,r.jsx)(n.code,{children:"Result"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"combinaciones",children:"Combinaciones"}),"\n",(0,r.jsxs)(n.p,{children:["Debido a la posibilidad de marcar un m\xe9todo de extensi\xf3n de cadena con ",(0,r.jsx)(n.code,{children:"handle_status"})," y (1) devolver ",(0,r.jsx)(n.code,{children:"Result<T, E>"})," o\n(2) devolver s\xf3lo ",(0,r.jsx)(n.code,{children:"T"}),", hay 4 casos diferentes con sem\xe1ntica ligeramente variable:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"handle_status"})}),(0,r.jsxs)(n.th,{style:{textAlign:"center"},children:["Retorna ",(0,r.jsx)(n.code,{children:"Result<T, E>"})]}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Efectos"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["El m\xe9todo de extensi\xf3n de cadena requiere devolver un valor de tipo ",(0,r.jsx)(n.code,{children:"Result<T, E>"})," donde ",(0,r.jsx)(n.code,{children:"E: From<Self::ErrorCode>"}),". Una llamada siempre comprobar\xe1 si el c\xf3digo de estado devuelto indica exito y solo entonces cargara y decodificara el valor en el buffer output."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["El m\xe9todo de extensi\xf3n de cadena puede devolver cualquier tipo non-",(0,r.jsx)(n.code,{children:"Result"}),". Una llamada siempre comprobar\xe1 si el c\xf3digo de estado devuelto indica exito y solo entonces cargar\xe1 y decodificar\xe1 el valor en el buffer output. El tipo de retorno real del m\xe9todo de extensi\xf3n de la cadena sigue siendo ",(0,r.jsx)(n.code,{children:"Result<T, Self::ErrorCode>"})," cuando el m\xe9todo de extensi\xf3n de cadena fue definido para devilver un valor de tipo ",(0,r.jsx)(n.code,{children:"T"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["El m\xe9todo de extensi\xf3n de cadena requiere devolver un valor de tipo ",(0,r.jsx)(n.code,{children:"Result<T, E>"}),". Una llamada siempre asume que el c\xf3digo de estado devuelto indica exito por lo tanto siempre cargar\xe1 y decodificar\xe1 el buffer output directamente."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["El m\xe9todo de extensi\xf3n de cadena puede devolver cualquier tipo non-",(0,r.jsx)(n.code,{children:"Result"}),". Una llamada siempre asume que el c\xf3digo de estado devuelto indica exito por lo tanto siempre cargar\xe1 y decodificar\xe1 el buffer output directamente."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"c\xf3digo-de-error",children:"C\xf3digo de Error"}),"\n",(0,r.jsxs)(n.p,{children:["Cada extensi\xf3n de cadena define exactamente un ",(0,r.jsx)(n.code,{children:"ErrorCode"})," utilizando la siguiente sintaxis:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[ink::chain_extension]\npub trait MyChainExtension {\n    type ErrorCode = MyErrorCode;\n\n    // m\xe1s definiciones ...\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["El definido ",(0,r.jsx)(n.code,{children:"ErrorCode"})," debe implementar ",(0,r.jsx)(n.code,{children:"FromStatusCode"})," que debe ser implementado como una\nconversi\xf3n m\xe1s o menos trivial del c\xf3digo de estado ",(0,r.jsx)(n.code,{children:"u32"})," a ",(0,r.jsx)(n.code,{children:"Result<(), Self::ErrorCode>"}),".\nEl valor ",(0,r.jsx)(n.code,{children:"Ok(())"})," indica que la llamada al m\xe9todo de extensi\xf3n de cadena fue un \xe9xito."]}),"\n",(0,r.jsxs)(n.p,{children:["Por convenci\xf3n un c\xf3digo de error de ",(0,r.jsx)(n.code,{children:"0"})," representa \xe9xito.\nSin embargo, los autores de extensi\xf3n de cadena pueden utilizar lo que se adapte a sus necesidades."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-definici\xf3n",children:"Ejemplo: Definici\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"En el ejemplo a continuaci\xf3n una extensi\xf3n de cadena se define que se permite a los usuarios\nleer y escribir en el storage del runtime utilizando privilegios de acceso:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'/// Custom chain extension to read to and write from the runtime.\n#[ink::chain_extension]\npub trait RuntimeReadWrite {\n    type ErrorCode = ReadWriteErrorCode;\n\n    /// Reads from runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.\n    /// #[ink(extension = 1, returns_result = false)]\n    /// fn read(key: &[u8]) -> Vec<u8>;\n    ///\n    /// Reads from runtime storage.\n    ///\n    /// Returns the number of bytes read and up to 32 bytes of the\n    /// read value. Unused bytes in the output are set to 0.\n    ///\n    /// # Errors\n    ///\n    /// If the runtime storage cell stores a value that requires more than\n    /// 32 bytes.\n    ///\n    /// # Note\n    ///\n    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`\n    /// and may potentially return any `Self::ErrorCode` through its return value.\n    #[ink(extension = 2)]\n    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n\n    /// Writes into runtime storage.\n    ///\n    /// # Note\n    ///\n    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.\n    #[ink(extension = 3)]\n    fn write(key: &[u8], value: &[u8]);\n\n    /// Returns the access allowed for the key for the caller.\n    ///\n    /// # Note\n    ///\n    /// Assumes to never fail the call and therefore always returns `Option<Access>`.\n    #[ink(extension = 4, handle_status = false)]\n    fn access(key: &[u8]) -> Option<Access>;\n\n    /// Unlocks previously aquired permission to access key.\n    ///\n    /// # Errors\n    ///\n    /// If the permission was not granted.\n    ///\n    /// # Note\n    ///\n    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`\n    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.\n    #[ink(extension = 5, handle_status = false)]\n    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteErrorCode {\n  InvalidKey,\n  CannotWriteToKey,\n  CannotReadFromKey,\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum ReadWriteError {\n  ErrorCode(ReadWriteErrorCode),\n  BufferTooSmall { required_bytes: u32 },\n}\n\nimpl From<ReadWriteErrorCode> for ReadWriteError {\n  fn from(error_code: ReadWriteErrorCode) -> Self {\n    Self::ErrorCode(error_code)\n  }\n}\n\nimpl From<scale::Error> for ReadWriteError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub struct UnlockAccessError {\n  reason: String,\n}\n\nimpl From<scale::Error> for UnlockAccessError {\n  fn from(_: scale::Error) -> Self {\n    panic!("encountered unexpected invalid SCALE encoding")\n  }\n}\n\n#[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\npub enum Access {\n  ReadWrite,\n  ReadOnly,\n  WriteOnly,\n}\n\nimpl ink_env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n  fn from_status_code(status_code: u32) -> Result<(), Self> {\n    match status_code {\n      0 => Ok(()),\n      1 => Err(Self::InvalidKey),\n      2 => Err(Self::CannotWriteToKey),\n      3 => Err(Self::CannotReadFromKey),\n      _ => panic!("encountered unknown status code"),\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Todos los tipos de error y otros tipos de utilizad utilizados en la definici\xf3n de extensi\xf3n de cadena de arriba\nson normalmente requeridos para implementar varios traits como los SCALE's ",(0,r.jsx)(n.code,{children:"Encode"})," y ",(0,r.jsx)(n.code,{children:"Decode"}),"\nasi como los traits ",(0,r.jsx)(n.code,{children:"scale-info"}),"'s ",(0,r.jsx)(n.code,{children:"TypeInfo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Un ejemplo completo de la definici\xf3n de extensi\xf3n de cadena de arriba puede verse\n",(0,r.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs",children:"aqu\xed"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-entorno",children:"Ejemplo: Entorno"}),"\n",(0,r.jsxs)(n.p,{children:["Para permitir a los ink! smart contracts utilizar la extensi\xf3n de cadena definida arriba se necesita\nintegrarla en una definici\xf3n ",(0,r.jsx)(n.code,{children:"Environment"})," como se muestra a continuaci\xf3n:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"type RuntimeReadWrite = i32;\n\nuse ink::env::{Environment, DefaultEnvironment};\n\npub enum CustomEnvironment {}\n\nimpl Environment for CustomEnvironment {\n    const MAX_EVENT_TOPICS: usize =\n        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;\n\n    type AccountId = <DefaultEnvironment as Environment>::AccountId;\n    type Balance = <DefaultEnvironment as Environment>::Balance;\n    type Hash = <DefaultEnvironment as Environment>::Hash;\n    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;\n    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;\n\n    type ChainExtension = RuntimeReadWrite;\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Arriba hemos definido el ",(0,r.jsx)(n.code,{children:"CustomEnvironment"})," que por defecto es el ink!'s ",(0,r.jsx)(n.code,{children:"DefaultEnvironment"}),"\npara todas las constantes y tipos excepto el tipo",(0,r.jsx)(n.code,{children:"ChainExtension"})," que es asignado a nuestra nueva\ndefinici\xf3n de extensi\xf3n de cadena."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-uso",children:"Ejemplo: Uso"}),"\n",(0,r.jsxs)(n.p,{children:["Un ink! smart contract puede utilizar la cadena de extensi\xf3n definida arriba a trav\xe9s de la definici\xf3n ",(0,r.jsx)(n.code,{children:"Environment"}),"\ndefinida en el ejemplo de la \xfaltima secci\xf3n utilizando el parametro de macro ",(0,r.jsx)(n.code,{children:"env"})," como se muestra a continuaci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Nota que los m\xe9todos de extensi\xf3n de cadena son accesibles a trav\xe9s de ",(0,r.jsx)(n.code,{children:"Self::extension()"})," o\n",(0,r.jsx)(n.code,{children:"self.extension()"}),". Por ejemplo en ",(0,r.jsx)(n.code,{children:"Self::extension().read(..)"})," o ",(0,r.jsx)(n.code,{children:"self.extension().read(..)"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'#[ink::contract(env = CustomEnvironment)]\nmod read_writer {\n    #[ink(storage)]\n    pub struct ReadWriter {}\n\n    impl ReadWriter {\n        #[ink(constructor)]\n        pub fn new() -> Self { Self {} }\n\n        #[ink(message)]\n        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .read(&key)\n        }\n\n        #[ink(message)]\n        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {\n            self.env()\n                .extension()\n                .read_small(&key)\n        }\n\n        #[ink(message)]\n        pub fn write(\n            &self,\n            key: Vec<u8>,\n            value: Vec<u8>,\n        ) -> Result<(), ReadWriteErrorCode> {\n            self.env()\n                .extension()\n                .write(&key, &value)\n        }\n\n        #[ink(message)]\n        pub fn access(&self, key: Vec<u8>) -> Option<Access> {\n            self.env()\n                .extension()\n                .access(&key)\n        }\n\n        #[ink(message)]\n        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {\n            self.env()\n                .extension()\n                .unlock_access(&key, access)\n        }\n    }\n    \n    /// Custom chain extension to read to and write from the runtime.\n    #[ink::chain_extension]\n    pub trait RuntimeReadWrite {\n          type ErrorCode = ReadWriteErrorCode;\n          #[ink(extension = 1)]\n          fn read(key: &[u8]) -> Vec<u8>;\n          #[ink(extension = 2)]\n          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;\n          #[ink(extension = 3)]\n          fn write(key: &[u8], value: &[u8]);\n          #[ink(extension = 4, handle_status = false)]\n          fn access(key: &[u8]) -> Option<Access>;\n          #[ink(extension = 5, handle_status = false)]\n          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteErrorCode {\n          InvalidKey,\n          CannotWriteToKey,\n          CannotReadFromKey,\n    }\n    \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum ReadWriteError {\n          ErrorCode(ReadWriteErrorCode),\n          BufferTooSmall { required_bytes: u32 },\n    }\n    impl From<ReadWriteErrorCode> for ReadWriteError {\n         fn from(error_code: ReadWriteErrorCode) -> Self {\n             Self::ErrorCode(error_code)\n         }\n    }\n    impl From<scale::Error> for ReadWriteError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n  \n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub struct UnlockAccessError {\n         reason: String,\n    }\n    impl From<scale::Error> for UnlockAccessError {\n         fn from(_: scale::Error) -> Self {\n             panic!("encountered unexpected invalid SCALE encoding")\n         }\n    }\n    #[derive(scale::Encode, scale::Decode, scale_info::TypeInfo)]\n    pub enum Access {\n         ReadWrite,\n         ReadOnly,\n         WriteOnly,\n    }\n    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {\n         fn from_status_code(status_code: u32) -> Result<(), Self> {\n             match status_code {\n                 0 => Ok(()),\n                 1 => Err(Self::InvalidKey),\n                 2 => Err(Self::CannotWriteToKey),\n                 3 => Err(Self::CannotReadFromKey),\n                 _ => panic!("encountered unknown status code"),\n             }\n         }\n    }\n    pub enum CustomEnvironment {}\n    impl ink::env::Environment for CustomEnvironment {\n         const MAX_EVENT_TOPICS: usize =\n             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;\n    \n         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;\n         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;\n         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;\n         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;\n         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;\n    \n         type ChainExtension = RuntimeReadWrite;\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"limitaciones-t\xe9cnicas",children:"Limitaciones t\xe9cnicas"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Por limitaciones t\xe9cnicas no es posible referirse al tipo asociado ",(0,r.jsx)(n.code,{children:"ErrorCode"})," utilizando\n",(0,r.jsx)(n.code,{children:"Self::ErrorCode"})," en cualquier lugar dentro de la extensi\xf3n de cadena y sus m\xe9todos definidos.\nEn su lugar los autores de la extensi\xf3n de cadena deben utilizar directamente el tipo de c\xf3digo de error cuando se requiera.\nEsta limitaci\xf3n podr\xeda eliminarse en versiones futuras deink!."]}),"\n",(0,r.jsx)(n.li,{children:"No es posible declarar otros traits de extensiones de cadenas como super traits o super\nextensiones de cadenas o otros."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var r=t(11504);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);