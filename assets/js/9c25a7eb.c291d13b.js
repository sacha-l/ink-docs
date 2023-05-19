"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4715],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),i=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=i(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3452:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={title:"useCall",description:"A React hook for calling a contract message and decoding the result."},s="useCall",c={unversionedId:"frontend/core/hooks/contracts/use-call",id:"frontend/core/hooks/contracts/use-call",title:"useCall",description:"A React hook for calling a contract message and decoding the result.",source:"@site/docs/frontend/core/hooks/contracts/use-call.md",sourceDirName:"frontend/core/hooks/contracts",slug:"/frontend/core/hooks/contracts/use-call",permalink:"/frontend/core/hooks/contracts/use-call",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/core/hooks/contracts/use-call.md",tags:[],version:"current",frontMatter:{title:"useCall",description:"A React hook for calling a contract message and decoding the result."},sidebar:"reference",previous:{title:"All Hooks",permalink:"/frontend/hooks"},next:{title:"useCallSubscription",permalink:"/frontend/core/hooks/contracts/use-call-subscription"}},l={},i=[{value:"Usage",id:"usage",level:2},{value:"Handling <code>Result&lt;T, E&gt;</code> responses from an ink! contract",id:"handling-resultt-e-responses-from-an-ink-contract",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:i},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usecall"},"useCall"),(0,o.kt)("p",null,"A hook for calling a contract message and decoding a successful response or receiving an\nerror. ",(0,o.kt)("inlineCode",{parentName:"p"},"useCall")," requires a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractPromise")," object created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useContract"),' hook.\nThese contract objects "know" which chain they live on, so ',(0,o.kt)("inlineCode",{parentName:"p"},"useCall")," will automatically\nuse the correct RPC url and call the correct chain. See\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-contract"},"useContract")," for more information on\ncreating contract instances and multi-chain support."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/frontend/utils/helpers"},"useink/utils helpers")," for compatible functions that work\nwell with this hook. "),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCall } from 'useink'\nimport { pickDecoded } from 'useink/utils'\nimport metadata from 'contract/metadata.json'\n\nconst CONTRACT_ADDRESS = '...'\n\n// We define a response type so that `get.result.value.decoded` is of type SuccessfulResponse\ninterface SuccessfulResponse {\n  foo: 'bar'\n}\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract(CONTRACT_ADDRESS, metadata, 'astar');\n  const get = useCall<SuccessfulResponse>(contract, 'get');\n  const args = ['arg-1', 2];\n\n  return (\n    <>\n      <h1>Get the Result the hard way: {get.result?.ok ? get.result.value.decoded.foo : '--'}</h1>\n      <h1>Or the easy way: {pickDecoded(get.result)?.foo || '--'}</h1>\n\n      <button disabled={get.isSubmitting} onClick={() => get.send(args)}>\n        Get Result\n      </button>\n    </>\n  );\n}\n")),(0,o.kt)("h2",{id:"handling-resultt-e-responses-from-an-ink-contract"},"Handling ",(0,o.kt)("inlineCode",{parentName:"h2"},"Result<T, E>")," responses from an ink! contract"),(0,o.kt)("p",null,"One of the benefits of using ink! is ability to return meaningful errors with ",(0,o.kt)("inlineCode",{parentName:"p"},"Result<T,\nE>"),". In this example we will distinguish between two kinds of errors and a successful\nresult. Let's say that you have the following ink! code in your contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'    use ink::prelude::string::String;\n\n    // ...other contract code omitted\n\n    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\n    pub struct Unhappy {\n        boo: String,\n    }\n\n    // A successful response\n    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\n    pub struct Happy {\n        yippee: String,\n    }\n\n    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\n    pub enum Error {\n        Sad(Unhappy),\n    }\n\n    impl MyMoodyContract {\n      #[ink(message)]\n      pub fn mood(&self, value: u64) -> Result<Happy, Error> {\n          if value % 2 == 0 {\n              return Ok(Happy {\n                  yippee: String::from("\ud83d\ude03"),\n              });\n          }\n\n          Err(Error::Sad(Unhappy {\n              boo: String::from("\ud83d\ude22"),\n          }))\n      }\n    }\n')),(0,o.kt)("p",null,"In this example, when you call ",(0,o.kt)("inlineCode",{parentName:"p"},"mood(2)"),", you will get an ",(0,o.kt)("inlineCode",{parentName:"p"},"Ok")," response. If you call\n",(0,o.kt)("inlineCode",{parentName:"p"},"mood(1)")," you will get an ",(0,o.kt)("inlineCode",{parentName:"p"},"Err"),". If you call ",(0,o.kt)("inlineCode",{parentName:"p"},"mood(5)")," you will get another type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Err"),"."),(0,o.kt)("p",null,"Here is how we could handle the view using ",(0,o.kt)("strong",{parentName:"p"},"useink"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useCall, useContract, useBlockNumber, decodeError } from 'useink'\nimport metadata from 'contract/metadata.json'\nconst CONTRACT_ADDRESS = '...'\n\n// We define the interface for the response.\ninterface MoodResult { \n  Ok?: { yippee: string }; \n  Err?: { \n    Sad?: { boo: string; },\n  },\n};\n\nexport const MyFickleContract: React.FC = () => {\n  const { blockNumber } = useBlockNumber();\n  const contract = useContract(CONTRACT_ADDRESS, metadata);\n  const getMood = useCall<MoodResult>(contract, 'mood');\n\n  // Fetch the mood of the contract on each new block\n  useEffect(() => {\n    if(blockNumber) getMood.send([blockNumber]);\n  }, [blockNumber])\n\n  // result is undefined before it is called the first time\n  if (!getMood.result) return <h1>Loading...</h1>\n\n  // if result.ok is false then one of two things happened.\n  // One possibility is that a pallet in the Substrate runtime threw an error.\n  // A second possibility is a contract method may have called panic! \n  // OR called assert! and it failed. In these situations no Response has been returned. \n  // We need to handle the error using decodeError.\n  if (!getMood.result.ok) {\n    return (\n      <div>\n        <p>An error occurred in runtime, not our contract function.</p>\n        <p>\n          {decodeError(getMood, {\n            ContractTrapped: 'This is a custom message. Something went wrong.', \n          })}\n        </p>\n      </div>\n    )\n  }\n\n  // We now know we have decoded value of type `MoodResult`\n  const { decoded } = getMood.result.value;\n\n  return (\n    <h1>\n      Block Number {blockNumber} makes me feel\n      {decoded.Ok && decoded.Ok.yippee}\n      {decoded.Err?.Sad && decoded.Err.Sad.boo}\n    </h1>\n  );\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type DecodedContractResult<T> = {\n  result?: {\n    ok: true;\n    value: {\n      decoded: T; // The response is decoded using contract Metadata and of type `T`\n      raw: ContractExecResult; // encoded raw data \n    } | {\n      ok: false;\n      // error\n      // This error occurs if any pallet throws an error, \n      // or if a contract method calls panic! or assert!() and it fails.\n      error: DispatchError | undefined; \n    }\n  }\n}\n\n// useCall returns\n{\n  isSubmitting: boolean;\n  // args: a list of arguments your contract message receives\n  // options: additional option overrides\n  // caller: the calling address. This can be used in ink! contracts with `self.env.caller()`\n  //         `caller` defaults to the connected wallet address.\n  send: (args?: unknown[], options?: ContractOptions, caller?: string) => \n    Promise<DecodedContractResult<T> | undefined>;\n  result?: DecodedContractResult<T>;\n}\n")))}p.isMDXComponent=!0}}]);