"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9248],{80208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var r=n(17624),o=n(4552),i=n(11504),a=n(48684);const s=()=>{const[e,t]=(0,i.useState)(null),n=(0,i.useMemo)((()=>{if("undefined"==typeof window)return"";const e=new URLSearchParams(window?.location?.search);return e?.get("acc")||void 0}),[]),[o,s]=(0,i.useState)(n),[c,d]=(0,i.useState)(),[p,l]=(0,i.useState)(),[u,h]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:"faucetContainer",children:[(0,r.jsx)("h3",{className:"faucetTitle",children:"Get Testnet Tokens"}),(0,r.jsxs)("div",{className:"faucetPlantContainer",children:[(0,r.jsx)("img",{src:"/img/plantOne.svg",alt:"illustration of a sea grass plant",className:"faucetPlantOne"}),(0,r.jsx)("img",{src:"/img/plantTwo.svg",alt:"illustration of a sea plant",className:"faucetPlantTwo"})]}),(0,r.jsx)("div",{className:"faucetHeroContainer",children:(0,r.jsx)("img",{src:"/img/chest.svg",alt:"treasure chest",className:"faucetHeroImage"})}),(0,r.jsxs)("form",{className:"withHero",children:[(0,r.jsxs)("fieldset",{children:[(0,r.jsx)("label",{htmlFor:"address-input",children:"Your SS58 Address"}),(0,r.jsx)("input",{className:"addressInput",id:"address-input",type:"text",value:o,placeholder:"e.g. 5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR",onChange:e=>{s(e.target.value),l(void 0),d(void 0)}})]}),(0,r.jsx)(a.c,{sitekey:"6LcgFI4nAAAAAATrEMoJ6zBacsx5udc1UhGFXemH",onChange:t}),(0,r.jsx)("button",{disabled:u||!e||!o,onClick:async t=>{t.preventDefault(),await(async()=>{try{d(void 0),l(void 0),h(!0);const t={address:o,parachain_id:"1002",recaptcha:e},n=await fetch("https://rococo-faucet.parity-testnet.parity.io/drip/web",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}),r=await n.json();"error"in r?l(r.error):d(r.hash)}catch(t){console.error(t),l("Hmm... something went wrong.")}finally{h(!1)}})()},children:u?"Requesting...":"Request"})]}),(0,r.jsxs)("div",{className:"faucetResultContainer",children:[c&&(0,r.jsx)("button",{className:"faucet-success w-full border-none",onClick:()=>window.open(`https://rococo.subscan.io/extrinsic/${c}`,"_blank"),children:(0,r.jsxs)("div",{className:"faucet-success-ic",children:[(0,r.jsx)("p",{className:"faucet-success-msg",children:"Your funds have been sent!"}),(0,r.jsx)("p",{className:"faucet-success-cta",children:"Click here to view the transaction"})]})}),p&&(0,r.jsx)("p",{className:"error",children:p})]})]})},c={title:"Faucet",slug:"/faucet",hide_title:!0},d=void 0,p={id:"testing/testnet/faucet",title:"Faucet",description:"We are operating a faucet for our Contracts Testnet on Rococo.",source:"@site/versioned_docs/version-5.x/testing/testnet/faucet.md",sourceDirName:"testing/testnet",slug:"/faucet",permalink:"/5.x/faucet",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/testnet/faucet.md",tags:[],version:"5.x",frontMatter:{title:"Faucet",slug:"/faucet",hide_title:!0},sidebar:"reference",previous:{title:"Contracts on Rococo",permalink:"/5.x/testnet"},next:{title:"Overview",permalink:"/5.x/macros-attributes"}},l={},u=[];function h(e){const t={a:"a",code:"code",p:"p",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),"\n",(0,r.jsxs)(t.p,{children:["We are operating a faucet for our ",(0,r.jsx)(t.a,{href:"/testnet",children:"Contracts Testnet on Rococo"}),".\nBy requesting funds from the form above you will receive ",(0,r.jsx)(t.code,{children:"ROC"}),"\ntokens to your account on this parachain."]}),"\n",(0,r.jsxs)(t.p,{children:["Note that the funds won't be available on the relaychain, the faucet teleports\nthem  directly to our parachain (",(0,r.jsx)(t.a,{href:"/testnet",children:"see here for more details"}),").\nThe polkadot-js UI will display them under ",(0,r.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts",children:'the "Accounts" tab for the Contracts parachain'}),":"]}),"\n",(0,r.jsx)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"})]})}function f(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},48684:(e,t,n)=>{n.d(t,{c:()=>w});var r=n(11504),o=n(3268),i=n.n(o),a=["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl","isolated"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}var p=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(c(t)),t.handleErrored=t.handleErrored.bind(c(t)),t.handleChange=t.handleChange.bind(c(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(c(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,d(t,n);var i=o.prototype;return i.getCaptchaFunction=function(e){return this.props.grecaptcha?this.props.grecaptcha.enterprise?this.props.grecaptcha.enterprise[e]:this.props.grecaptcha[e]:null},i.getValue=function(){var e=this.getCaptchaFunction("getResponse");return e&&void 0!==this._widgetId?e(this._widgetId):null},i.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},i.execute=function(){var e=this.getCaptchaFunction("execute");if(e&&void 0!==this._widgetId)return e(this._widgetId);this._executeRequested=!0},i.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},i.reset=function(){var e=this.getCaptchaFunction("reset");e&&void 0!==this._widgetId&&e(this._widgetId)},i.forceReset=function(){var e=this.getCaptchaFunction("reset");e&&e()},i.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},i.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},i.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},i.explicitRender=function(){var e=this.getCaptchaFunction("render");if(e&&void 0===this._widgetId){var t=document.createElement("div");this._widgetId=e(t,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge,isolated:this.props.isolated}),this.captcha.appendChild(t)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},i.componentDidMount=function(){this.explicitRender()},i.componentDidUpdate=function(){this.explicitRender()},i.handleRecaptchaRef=function(e){this.captcha=e},i.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,e.isolated,function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a));return r.createElement("div",s({},t,{ref:this.handleRecaptchaRef}))},o}(r.Component);p.displayName="ReCAPTCHA",p.propTypes={sitekey:i().string.isRequired,onChange:i().func,grecaptcha:i().object,theme:i().oneOf(["dark","light"]),type:i().oneOf(["image","audio"]),tabindex:i().number,onExpired:i().func,onErrored:i().func,size:i().oneOf(["compact","normal","invisible"]),stoken:i().string,hl:i().string,badge:i().oneOf(["bottomright","bottomleft","inline"]),isolated:i().bool},p.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var l=n(84792),u=n.n(l);function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var f={},g=0;var v="onloadcallback";function m(){return"undefined"!=typeof window&&window.recaptchaOptions||{}}const x=(b=function(){var e=m(),t=e.useRecaptchaNet?"recaptcha.net":"www.google.com";return e.enterprise?"https://"+t+"/recaptcha/enterprise.js?onload="+v+"&render=explicit":"https://"+t+"/recaptcha/api.js?onload="+v+"&render=explicit"},y=(y={callbackName:v,globalName:"grecaptcha",attributes:m().nonce?{nonce:m().nonce}:{}})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,o;function i(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}o=t,(n=i).prototype=Object.create(o.prototype),n.prototype.constructor=n,n.__proto__=o;var a=i.prototype;return a.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+g++),this.__scriptLoaderID},a.setupScriptURL=function(){return this.__scriptURL="function"==typeof b?b():b,this.__scriptURL},a.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},a.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=f[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[y.callbackName]},a.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=y,o=r.globalName,i=r.callbackName,a=r.scriptId;if(o&&void 0!==window[o]&&(f[t]={loaded:!0,observers:{}}),f[t]){var s=f[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var c={};c[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},f[t]={loaded:!1,observers:c};var d=document.createElement("script");for(var p in d.src=t,d.async=!0,y.attributes)d.setAttribute(p,y.attributes[p]);a&&(d.id=a);var l=function(e){if(f[t]){var n=f[t].observers;for(var r in n)e(n[r])&&delete n[r]}};i&&"undefined"!=typeof window&&(window[i]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),d.onload=function(){var e=f[t];e&&(e.loaded=!0,l((function(t){return!i&&(t(e),!0)})))},d.onerror=function(){var e=f[t];e&&(e.errored=!0,l((function(t){return t(e),!0})))},document.body.appendChild(d)},a.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===y.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=f[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===y.removeOnUnmount&&delete f[e])},a.render=function(){var t=y.globalName,n=this.props,o=(n.asyncScriptOnLoad,n.forwardedRef),i=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!=typeof window&&(i[t]=void 0!==window[t]?window[t]:void 0),i.ref=o,(0,r.createElement)(e,i)},i}(r.Component),o=(0,r.forwardRef)((function(e,t){return(0,r.createElement)(n,h({},e,{forwardedRef:t}))}));return o.displayName="AsyncScriptLoader("+t+")",o.propTypes={asyncScriptOnLoad:i().func},u()(o,e)})(p);var b,y;const w=x},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>a});var r=n(11504);const o={},i=r.createContext(o);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);