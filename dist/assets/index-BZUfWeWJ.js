(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Jf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},ti={},$u={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr=Symbol.for("react.element"),Xf=Symbol.for("react.portal"),Gf=Symbol.for("react.fragment"),Zf=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),tp=Symbol.for("react.provider"),np=Symbol.for("react.context"),rp=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ip=Symbol.for("react.memo"),lp=Symbol.for("react.lazy"),us=Symbol.iterator;function ap(e){return e===null||typeof e!="object"?null:(e=us&&e[us]||e["@@iterator"],typeof e=="function"?e:null)}var Hu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vu=Object.assign,Wu={};function On(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Hu}On.prototype.isReactComponent={};On.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};On.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yu(){}Yu.prototype=On.prototype;function na(e,t,n){this.props=e,this.context=t,this.refs=Wu,this.updater=n||Hu}var ra=na.prototype=new Yu;ra.constructor=na;Vu(ra,On.prototype);ra.isPureReactComponent=!0;var cs=Array.isArray,Qu=Object.prototype.hasOwnProperty,oa={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function Ku(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Qu.call(t,r)&&!qu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Pr,type:e,key:i,ref:l,props:o,_owner:oa.current}}function sp(e,t){return{$$typeof:Pr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ia(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pr}function up(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ds=/\/+/g;function Ci(e,t){return typeof e=="object"&&e!==null&&e.key!=null?up(""+e.key):t.toString(36)}function uo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Pr:case Xf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ci(l,0):r,cs(o)?(n="",e!=null&&(n=e.replace(ds,"$&/")+"/"),uo(o,t,n,"",function(c){return c})):o!=null&&(ia(o)&&(o=sp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ds,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",cs(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+Ci(i,a);l+=uo(i,t,n,u,o)}else if(u=ap(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+Ci(i,a++),l+=uo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Vr(e,t,n){if(e==null)return e;var r=[],o=0;return uo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function cp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var me={current:null},co={transition:null},dp={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:co,ReactCurrentOwner:oa};function Ju(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Vr,forEach:function(e,t,n){Vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vr(e,function(){t++}),t},toArray:function(e){return Vr(e,function(t){return t})||[]},only:function(e){if(!ia(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=On;D.Fragment=Gf;D.Profiler=ep;D.PureComponent=na;D.StrictMode=Zf;D.Suspense=op;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dp;D.act=Ju;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Vu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=oa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Qu.call(t,u)&&!qu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Pr,type:e.type,key:o,ref:i,props:r,_owner:l}};D.createContext=function(e){return e={$$typeof:np,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tp,_context:e},e.Consumer=e};D.createElement=Ku;D.createFactory=function(e){var t=Ku.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:rp,render:e}};D.isValidElement=ia;D.lazy=function(e){return{$$typeof:lp,_payload:{_status:-1,_result:e},_init:cp}};D.memo=function(e,t){return{$$typeof:ip,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=co.transition;co.transition={};try{e()}finally{co.transition=t}};D.unstable_act=Ju;D.useCallback=function(e,t){return me.current.useCallback(e,t)};D.useContext=function(e){return me.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return me.current.useDeferredValue(e)};D.useEffect=function(e,t){return me.current.useEffect(e,t)};D.useId=function(){return me.current.useId()};D.useImperativeHandle=function(e,t,n){return me.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return me.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return me.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return me.current.useMemo(e,t)};D.useReducer=function(e,t,n){return me.current.useReducer(e,t,n)};D.useRef=function(e){return me.current.useRef(e)};D.useState=function(e){return me.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return me.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return me.current.useTransition()};D.version="18.3.1";$u.exports=D;var x=$u.exports;const fp=Jf(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp=x,mp=Symbol.for("react.element"),hp=Symbol.for("react.fragment"),gp=Object.prototype.hasOwnProperty,yp=pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vp={key:!0,ref:!0,__self:!0,__source:!0};function Xu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)gp.call(t,r)&&!vp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:mp,type:e,key:i,ref:l,props:o,_owner:yp.current}}ti.Fragment=hp;ti.jsx=Xu;ti.jsxs=Xu;Bu.exports=ti;var s=Bu.exports,rl={},Gu={exports:{}},Pe={},Zu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,z){var O=b.length;b.push(z);e:for(;0<O;){var F=O-1>>>1,$=b[F];if(0<o($,z))b[F]=z,b[O]=$,O=F;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var z=b[0],O=b.pop();if(O!==z){b[0]=O;e:for(var F=0,$=b.length,yt=$>>>1;F<yt;){var _e=2*(F+1)-1,on=b[_e],It=_e+1,Hr=b[It];if(0>o(on,O))It<$&&0>o(Hr,on)?(b[F]=Hr,b[It]=O,F=It):(b[F]=on,b[_e]=O,F=_e);else if(It<$&&0>o(Hr,O))b[F]=Hr,b[It]=O,F=It;else break e}}return z}function o(b,z){var O=b.sortIndex-z.sortIndex;return O!==0?O:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],d=1,f=null,g=3,w=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=b)r(c),z.sortIndex=z.expirationTime,t(u,z);else break;z=n(c)}}function E(b){if(v=!1,m(b),!y)if(n(u)!==null)y=!0,ye(j);else{var z=n(c);z!==null&&rn(E,z.startTime-b)}}function j(b,z){y=!1,v&&(v=!1,h(T),T=-1),w=!0;var O=g;try{for(m(z),f=n(u);f!==null&&(!(f.expirationTime>z)||b&&!ge());){var F=f.callback;if(typeof F=="function"){f.callback=null,g=f.priorityLevel;var $=F(f.expirationTime<=z);z=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(u)&&r(u),m(z)}else r(u);f=n(u)}if(f!==null)var yt=!0;else{var _e=n(c);_e!==null&&rn(E,_e.startTime-z),yt=!1}return yt}finally{f=null,g=O,w=!1}}var R=!1,N=null,T=-1,A=5,L=-1;function ge(){return!(e.unstable_now()-L<A)}function Ke(){if(N!==null){var b=e.unstable_now();L=b;var z=!0;try{z=N(!0,b)}finally{z?Ie():(R=!1,N=null)}}else R=!1}var Ie;if(typeof p=="function")Ie=function(){p(Ke)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,$r=Je.port2;Je.port1.onmessage=Ke,Ie=function(){$r.postMessage(null)}}else Ie=function(){S(Ke,0)};function ye(b){N=b,R||(R=!0,Ie())}function rn(b,z){T=S(function(){b(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,ye(j))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(b){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var O=g;g=z;try{return b()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var O=g;g=b;try{return z()}finally{g=O}},e.unstable_scheduleCallback=function(b,z,O){var F=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?F+O:F):O=F,b){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=O+$,b={id:d++,callback:z,priorityLevel:b,startTime:O,expirationTime:$,sortIndex:-1},O>F?(b.sortIndex=O,t(c,b),n(u)===null&&b===n(c)&&(v?(h(T),T=-1):v=!0,rn(E,O-F))):(b.sortIndex=$,t(u,b),y||w||(y=!0,ye(j))),b},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(b){var z=g;return function(){var O=g;g=z;try{return b.apply(this,arguments)}finally{g=O}}}})(ec);Zu.exports=ec;var xp=Zu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=x,be=xp;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,dr={};function tn(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(dr[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ol=Object.prototype.hasOwnProperty,kp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fs={},ps={};function Sp(e){return ol.call(ps,e)?!0:ol.call(fs,e)?!1:kp.test(e)?ps[e]=!0:(fs[e]=!0,!1)}function Ep(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function jp(e,t,n,r){if(t===null||typeof t>"u"||Ep(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){le[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];le[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){le[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){le[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){le[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){le[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){le[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){le[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){le[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var la=/[\-:]([a-z])/g;function aa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(la,aa);le[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(la,aa);le[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(la,aa);le[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});le.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){le[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function sa(e,t,n,r){var o=le.hasOwnProperty(t)?le[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(jp(t,n,o,r)&&(n=null),r||o===null?Sp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var gt=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wr=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),ua=Symbol.for("react.strict_mode"),il=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),ca=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),da=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),oc=Symbol.for("react.offscreen"),ms=Symbol.iterator;function $n(e){return e===null||typeof e!="object"?null:(e=ms&&e[ms]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Ni;function Gn(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Ri=!1;function bi(e,t){if(!e||Ri)return"";Ri=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Ri=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Gn(e):""}function Cp(e){switch(e.tag){case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 2:case 15:return e=bi(e.type,!1),e;case 11:return e=bi(e.type.render,!1),e;case 1:return e=bi(e.type,!0),e;default:return""}}function sl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case il:return"Profiler";case ua:return"StrictMode";case ll:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case ca:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case da:return t=e.displayName||null,t!==null?t:sl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return sl(e(t))}catch{}}return null}function Np(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sl(t);case 8:return t===ua?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Rp(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yr(e){e._valueTracker||(e._valueTracker=Rp(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ul(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function hs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ac(e,t){t=t.checked,t!=null&&sa(e,"checked",t,!1)}function cl(e,t){ac(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function gs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zn=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ys(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Zn(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function sc(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bp=["Webkit","ms","Moz","O"];Object.keys(nr).forEach(function(e){bp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nr[t]=nr[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||nr.hasOwnProperty(e)&&nr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pp=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gl=null;function fa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,kn=null,Sn=null;function xs(e){if(e=Lr(e)){if(typeof yl!="function")throw Error(C(280));var t=e.stateNode;t&&(t=li(t),yl(e.stateNode,e.type,t))}}function pc(e){kn?Sn?Sn.push(e):Sn=[e]:kn=e}function mc(){if(kn){var e=kn,t=Sn;if(Sn=kn=null,xs(e),t)for(e=0;e<t.length;e++)xs(t[e])}}function hc(e,t){return e(t)}function gc(){}var Pi=!1;function yc(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return hc(e,t,n)}finally{Pi=!1,(kn!==null||Sn!==null)&&(gc(),mc())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=li(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var vl=!1;if(dt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){vl=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{vl=!1}function Tp(e,t,n,r,o,i,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var rr=!1,bo=null,Po=!1,xl=null,_p={onError:function(e){rr=!0,bo=e}};function Lp(e,t,n,r,o,i,l,a,u){rr=!1,bo=null,Tp.apply(_p,arguments)}function zp(e,t,n,r,o,i,l,a,u){if(Lp.apply(this,arguments),rr){if(rr){var c=bo;rr=!1,bo=null}else throw Error(C(198));Po||(Po=!0,xl=c)}}function nn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ws(e){if(nn(e)!==e)throw Error(C(188))}function Op(e){var t=e.alternate;if(!t){if(t=nn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ws(o),e;if(i===r)return ws(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function xc(e){return e=Op(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var kc=be.unstable_scheduleCallback,ks=be.unstable_cancelCallback,Dp=be.unstable_shouldYield,Ap=be.unstable_requestPaint,G=be.unstable_now,Mp=be.unstable_getCurrentPriorityLevel,pa=be.unstable_ImmediatePriority,Sc=be.unstable_UserBlockingPriority,To=be.unstable_NormalPriority,Fp=be.unstable_LowPriority,Ec=be.unstable_IdlePriority,ni=null,tt=null;function Ip(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:$p,Up=Math.log,Bp=Math.LN2;function $p(e){return e>>>=0,e===0?32:31-(Up(e)/Bp|0)|0}var qr=64,Kr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _o(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=er(a):(i&=l,i!==0&&(r=er(i)))}else l=n&~o,l!==0?r=er(l):i!==0&&(r=er(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function Hp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),a=1<<l,u=o[l];u===-1?(!(a&n)||a&r)&&(o[l]=Hp(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function wl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jc(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Ti(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Wp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ma(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var I=0;function Cc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nc,ha,Rc,bc,Pc,kl=!1,Jr=[],Ct=null,Nt=null,Rt=null,mr=new Map,hr=new Map,kt=[],Yp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,t){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":mr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hr.delete(t.pointerId)}}function Vn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Lr(t),t!==null&&ha(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qp(e,t,n,r,o){switch(t){case"focusin":return Ct=Vn(Ct,e,t,n,r,o),!0;case"dragenter":return Nt=Vn(Nt,e,t,n,r,o),!0;case"mouseover":return Rt=Vn(Rt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mr.set(i,Vn(mr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,hr.set(i,Vn(hr.get(i)||null,e,t,n,r,o)),!0}return!1}function Tc(e){var t=$t(e.target);if(t!==null){var n=nn(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,Pc(e.priority,function(){Rc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gl=r,n.target.dispatchEvent(r),gl=null}else return t=Lr(n),t!==null&&ha(t),e.blockedOn=n,!1;t.shift()}return!0}function Es(e,t,n){fo(e)&&n.delete(t)}function qp(){kl=!1,Ct!==null&&fo(Ct)&&(Ct=null),Nt!==null&&fo(Nt)&&(Nt=null),Rt!==null&&fo(Rt)&&(Rt=null),mr.forEach(Es),hr.forEach(Es)}function Wn(e,t){e.blockedOn===t&&(e.blockedOn=null,kl||(kl=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,qp)))}function gr(e){function t(o){return Wn(o,e)}if(0<Jr.length){Wn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ct!==null&&Wn(Ct,e),Nt!==null&&Wn(Nt,e),Rt!==null&&Wn(Rt,e),mr.forEach(t),hr.forEach(t),n=0;n<kt.length;n++)r=kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<kt.length&&(n=kt[0],n.blockedOn===null);)Tc(n),n.blockedOn===null&&kt.shift()}var En=gt.ReactCurrentBatchConfig,Lo=!0;function Kp(e,t,n,r){var o=I,i=En.transition;En.transition=null;try{I=1,ga(e,t,n,r)}finally{I=o,En.transition=i}}function Jp(e,t,n,r){var o=I,i=En.transition;En.transition=null;try{I=4,ga(e,t,n,r)}finally{I=o,En.transition=i}}function ga(e,t,n,r){if(Lo){var o=Sl(e,t,n,r);if(o===null)Ui(e,t,r,zo,n),Ss(e,r);else if(Qp(o,e,t,n,r))r.stopPropagation();else if(Ss(e,r),t&4&&-1<Yp.indexOf(e)){for(;o!==null;){var i=Lr(o);if(i!==null&&Nc(i),i=Sl(e,t,n,r),i===null&&Ui(e,t,r,zo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var zo=null;function Sl(e,t,n,r){if(zo=null,e=fa(r),e=$t(e),e!==null)if(t=nn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zo=e,null}function _c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mp()){case pa:return 1;case Sc:return 4;case To:case Fp:return 16;case Ec:return 536870912;default:return 16}default:return 16}}var Et=null,ya=null,po=null;function Lc(){if(po)return po;var e,t=ya,n=t.length,r,o="value"in Et?Et.value:Et.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return po=o.slice(e,1<r?1-r:void 0)}function mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xr(){return!0}function js(){return!1}function Te(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xr:js,this.isPropagationStopped=js,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xr)},persist:function(){},isPersistent:Xr}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},va=Te(Dn),_r=K({},Dn,{view:0,detail:0}),Xp=Te(_r),_i,Li,Yn,ri=K({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yn&&(Yn&&e.type==="mousemove"?(_i=e.screenX-Yn.screenX,Li=e.screenY-Yn.screenY):Li=_i=0,Yn=e),_i)},movementY:function(e){return"movementY"in e?e.movementY:Li}}),Cs=Te(ri),Gp=K({},ri,{dataTransfer:0}),Zp=Te(Gp),em=K({},_r,{relatedTarget:0}),zi=Te(em),tm=K({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),nm=Te(tm),rm=K({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),om=Te(rm),im=K({},Dn,{data:0}),Ns=Te(im),lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function um(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sm[e])?!!t[e]:!1}function xa(){return um}var cm=K({},_r,{key:function(e){if(e.key){var t=lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),dm=Te(cm),fm=K({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rs=Te(fm),pm=K({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),mm=Te(pm),hm=K({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gm=Te(hm),ym=K({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vm=Te(ym),xm=[9,13,27,32],wa=dt&&"CompositionEvent"in window,or=null;dt&&"documentMode"in document&&(or=document.documentMode);var wm=dt&&"TextEvent"in window&&!or,zc=dt&&(!wa||or&&8<or&&11>=or),bs=" ",Ps=!1;function Oc(e,t){switch(e){case"keyup":return xm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function km(e,t){switch(e){case"compositionend":return Dc(t);case"keypress":return t.which!==32?null:(Ps=!0,bs);case"textInput":return e=t.data,e===bs&&Ps?null:e;default:return null}}function Sm(e,t){if(cn)return e==="compositionend"||!wa&&Oc(e,t)?(e=Lc(),po=ya=Et=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var Em={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ts(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Em[e.type]:t==="textarea"}function Ac(e,t,n,r){pc(r),t=Oo(t,"onChange"),0<t.length&&(n=new va("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ir=null,yr=null;function jm(e){Qc(e,0)}function oi(e){var t=pn(e);if(lc(t))return e}function Cm(e,t){if(e==="change")return t}var Mc=!1;if(dt){var Oi;if(dt){var Di="oninput"in document;if(!Di){var _s=document.createElement("div");_s.setAttribute("oninput","return;"),Di=typeof _s.oninput=="function"}Oi=Di}else Oi=!1;Mc=Oi&&(!document.documentMode||9<document.documentMode)}function Ls(){ir&&(ir.detachEvent("onpropertychange",Fc),yr=ir=null)}function Fc(e){if(e.propertyName==="value"&&oi(yr)){var t=[];Ac(t,yr,e,fa(e)),yc(jm,t)}}function Nm(e,t,n){e==="focusin"?(Ls(),ir=t,yr=n,ir.attachEvent("onpropertychange",Fc)):e==="focusout"&&Ls()}function Rm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(yr)}function bm(e,t){if(e==="click")return oi(t)}function Pm(e,t){if(e==="input"||e==="change")return oi(t)}function Tm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qe=typeof Object.is=="function"?Object.is:Tm;function vr(e,t){if(Qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ol.call(t,o)||!Qe(e[o],t[o]))return!1}return!0}function zs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Os(e,t){var n=zs(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zs(n)}}function Ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _m(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ic(n.ownerDocument.documentElement,n)){if(r!==null&&ka(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Os(n,i);var l=Os(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=dt&&"documentMode"in document&&11>=document.documentMode,dn=null,El=null,lr=null,jl=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||dn==null||dn!==Ro(r)||(r=dn,"selectionStart"in r&&ka(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lr&&vr(lr,r)||(lr=r,r=Oo(El,"onSelect"),0<r.length&&(t=new va("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Gr("Animation","AnimationEnd"),animationiteration:Gr("Animation","AnimationIteration"),animationstart:Gr("Animation","AnimationStart"),transitionend:Gr("Transition","TransitionEnd")},Ai={},Bc={};dt&&(Bc=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function ii(e){if(Ai[e])return Ai[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Bc)return Ai[e]=t[n];return e}var $c=ii("animationend"),Hc=ii("animationiteration"),Vc=ii("animationstart"),Wc=ii("transitionend"),Yc=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){Yc.set(e,t),tn(t,[e])}for(var Mi=0;Mi<As.length;Mi++){var Fi=As[Mi],zm=Fi.toLowerCase(),Om=Fi[0].toUpperCase()+Fi.slice(1);Dt(zm,"on"+Om)}Dt($c,"onAnimationEnd");Dt(Hc,"onAnimationIteration");Dt(Vc,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(Wc,"onTransitionEnd");Nn("onMouseEnter",["mouseout","mouseover"]);Nn("onMouseLeave",["mouseout","mouseover"]);Nn("onPointerEnter",["pointerout","pointerover"]);Nn("onPointerLeave",["pointerout","pointerover"]);tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dm=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Ms(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zp(r,t,void 0,e),e.currentTarget=null}function Qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Ms(o,a,c),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Ms(o,a,c),i=u}}}if(Po)throw e=xl,Po=!1,xl=null,e}function H(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function Ii(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[Zr]){e[Zr]=!0,tc.forEach(function(n){n!=="selectionchange"&&(Dm.has(n)||Ii(n,!1,e),Ii(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ii("selectionchange",!1,t))}}function qc(e,t,n,r){switch(_c(t)){case 1:var o=Kp;break;case 4:o=Jp;break;default:o=ga}n=o.bind(null,t,n,e),o=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=$t(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}yc(function(){var c=i,d=fa(n),f=[];e:{var g=Yc.get(e);if(g!==void 0){var w=va,y=e;switch(e){case"keypress":if(mo(n)===0)break e;case"keydown":case"keyup":w=dm;break;case"focusin":y="focus",w=zi;break;case"focusout":y="blur",w=zi;break;case"beforeblur":case"afterblur":w=zi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Cs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=mm;break;case $c:case Hc:case Vc:w=nm;break;case Wc:w=gm;break;case"scroll":w=Xp;break;case"wheel":w=vm;break;case"copy":case"cut":case"paste":w=om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Rs}var v=(t&4)!==0,S=!v&&e==="scroll",h=v?g!==null?g+"Capture":null:g;v=[];for(var p=c,m;p!==null;){m=p;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,h!==null&&(E=pr(p,h),E!=null&&v.push(wr(p,E,m)))),S)break;p=p.return}0<v.length&&(g=new w(g,y,null,n,d),f.push({event:g,listeners:v}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==gl&&(y=n.relatedTarget||n.fromElement)&&($t(y)||y[ft]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?$t(y):null,y!==null&&(S=nn(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(v=Cs,E="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(v=Rs,E="onPointerLeave",h="onPointerEnter",p="pointer"),S=w==null?g:pn(w),m=y==null?g:pn(y),g=new v(E,p+"leave",w,n,d),g.target=S,g.relatedTarget=m,E=null,$t(d)===c&&(v=new v(h,p+"enter",y,n,d),v.target=m,v.relatedTarget=S,E=v),S=E,w&&y)t:{for(v=w,h=y,p=0,m=v;m;m=ln(m))p++;for(m=0,E=h;E;E=ln(E))m++;for(;0<p-m;)v=ln(v),p--;for(;0<m-p;)h=ln(h),m--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=ln(v),h=ln(h)}v=null}else v=null;w!==null&&Fs(f,g,w,v,!1),y!==null&&S!==null&&Fs(f,S,y,v,!0)}}e:{if(g=c?pn(c):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var j=Cm;else if(Ts(g))if(Mc)j=Pm;else{j=Rm;var R=Nm}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=bm);if(j&&(j=j(e,c))){Ac(f,j,n,d);break e}R&&R(e,g,c),e==="focusout"&&(R=g._wrapperState)&&R.controlled&&g.type==="number"&&dl(g,"number",g.value)}switch(R=c?pn(c):window,e){case"focusin":(Ts(R)||R.contentEditable==="true")&&(dn=R,El=c,lr=null);break;case"focusout":lr=El=dn=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Ds(f,n,d);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":Ds(f,n,d)}var N;if(wa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else cn?Oc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(zc&&n.locale!=="ko"&&(cn||T!=="onCompositionStart"?T==="onCompositionEnd"&&cn&&(N=Lc()):(Et=d,ya="value"in Et?Et.value:Et.textContent,cn=!0)),R=Oo(c,T),0<R.length&&(T=new Ns(T,e,null,n,d),f.push({event:T,listeners:R}),N?T.data=N:(N=Dc(n),N!==null&&(T.data=N)))),(N=wm?km(e,n):Sm(e,n))&&(c=Oo(c,"onBeforeInput"),0<c.length&&(d=new Ns("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=N))}Qc(f,t)})}function wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=pr(e,n),i!=null&&r.unshift(wr(e,i,o)),i=pr(e,t),i!=null&&r.push(wr(e,i,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=pr(n,i),u!=null&&l.unshift(wr(n,u,a))):o||(u=pr(n,i),u!=null&&l.push(wr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Am=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function Is(e){return(typeof e=="string"?e:""+e).replace(Am,`
`).replace(Mm,"")}function eo(e,t,n){if(t=Is(t),Is(e)!==t&&n)throw Error(C(425))}function Do(){}var Cl=null,Nl=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bl=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(Um)}:bl;function Um(e){setTimeout(function(){throw e})}function Bi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),gr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);gr(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var An=Math.random().toString(36).slice(2),et="__reactFiber$"+An,kr="__reactProps$"+An,ft="__reactContainer$"+An,Pl="__reactEvents$"+An,Bm="__reactListeners$"+An,$m="__reactHandles$"+An;function $t(e){var t=e[et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ft]||n[et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bs(e);e!==null;){if(n=e[et])return n;e=Bs(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[et]||e[ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function li(e){return e[kr]||null}var Tl=[],mn=-1;function At(e){return{current:e}}function V(e){0>mn||(e.current=Tl[mn],Tl[mn]=null,mn--)}function B(e,t){mn++,Tl[mn]=e.current,e.current=t}var Ot={},de=At(Ot),we=At(!1),Kt=Ot;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function Ao(){V(we),V(de)}function $s(e,t,n){if(de.current!==Ot)throw Error(C(168));B(de,t),B(we,n)}function Kc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Np(e)||"Unknown",o));return K({},n,r)}function Mo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Kt=de.current,B(de,e),B(we,we.current),!0}function Hs(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Kc(e,t,Kt),r.__reactInternalMemoizedMergedChildContext=e,V(we),V(de),B(de,e)):V(we),B(we,n)}var lt=null,ai=!1,$i=!1;function Jc(e){lt===null?lt=[e]:lt.push(e)}function Hm(e){ai=!0,Jc(e)}function Mt(){if(!$i&&lt!==null){$i=!0;var e=0,t=I;try{var n=lt;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,ai=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),kc(pa,Mt),o}finally{I=t,$i=!1}}return null}var hn=[],gn=0,Fo=null,Io=0,Le=[],ze=0,Jt=null,at=1,st="";function Ut(e,t){hn[gn++]=Io,hn[gn++]=Fo,Fo=e,Io=t}function Xc(e,t,n){Le[ze++]=at,Le[ze++]=st,Le[ze++]=Jt,Jt=e;var r=at;e=st;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,at=1<<32-We(t)+o|n<<o|r,st=i+e}else at=1<<i|n<<o|r,st=e}function Sa(e){e.return!==null&&(Ut(e,1),Xc(e,1,0))}function Ea(e){for(;e===Fo;)Fo=hn[--gn],hn[gn]=null,Io=hn[--gn],hn[gn]=null;for(;e===Jt;)Jt=Le[--ze],Le[ze]=null,st=Le[--ze],Le[ze]=null,at=Le[--ze],Le[ze]=null}var Re=null,Ne=null,W=!1,He=null;function Gc(e,t){var n=Oe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Vs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Ne=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:at,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Oe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Ne=null,!0):!1;default:return!1}}function _l(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(W){var t=Ne;if(t){var n=t;if(!Vs(e,t)){if(_l(e))throw Error(C(418));t=bt(n.nextSibling);var r=Re;t&&Vs(e,t)?Gc(r,n):(e.flags=e.flags&-4097|2,W=!1,Re=e)}}else{if(_l(e))throw Error(C(418));e.flags=e.flags&-4097|2,W=!1,Re=e}}}function Ws(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function to(e){if(e!==Re)return!1;if(!W)return Ws(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=Ne)){if(_l(e))throw Zc(),Error(C(418));for(;t;)Gc(e,t),t=bt(t.nextSibling)}if(Ws(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Re?bt(e.stateNode.nextSibling):null;return!0}function Zc(){for(var e=Ne;e;)e=bt(e.nextSibling)}function bn(){Ne=Re=null,W=!1}function ja(e){He===null?He=[e]:He.push(e)}var Vm=gt.ReactCurrentBatchConfig;function Qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function no(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ys(e){var t=e._init;return t(e._payload)}function ed(e){function t(h,p){if(e){var m=h.deletions;m===null?(h.deletions=[p],h.flags|=16):m.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Lt(h,p),h.index=0,h.sibling=null,h}function i(h,p,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<p?(h.flags|=2,p):m):(h.flags|=2,p)):(h.flags|=1048576,p)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,p,m,E){return p===null||p.tag!==6?(p=Ki(m,h.mode,E),p.return=h,p):(p=o(p,m),p.return=h,p)}function u(h,p,m,E){var j=m.type;return j===un?d(h,p,m.props.children,E,m.key):p!==null&&(p.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xt&&Ys(j)===p.type)?(E=o(p,m.props),E.ref=Qn(h,p,m),E.return=h,E):(E=ko(m.type,m.key,m.props,null,h.mode,E),E.ref=Qn(h,p,m),E.return=h,E)}function c(h,p,m,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ji(m,h.mode,E),p.return=h,p):(p=o(p,m.children||[]),p.return=h,p)}function d(h,p,m,E,j){return p===null||p.tag!==7?(p=Qt(m,h.mode,E,j),p.return=h,p):(p=o(p,m),p.return=h,p)}function f(h,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ki(""+p,h.mode,m),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wr:return m=ko(p.type,p.key,p.props,null,h.mode,m),m.ref=Qn(h,null,p),m.return=h,m;case sn:return p=Ji(p,h.mode,m),p.return=h,p;case xt:var E=p._init;return f(h,E(p._payload),m)}if(Zn(p)||$n(p))return p=Qt(p,h.mode,m,null),p.return=h,p;no(h,p)}return null}function g(h,p,m,E){var j=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return j!==null?null:a(h,p,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wr:return m.key===j?u(h,p,m,E):null;case sn:return m.key===j?c(h,p,m,E):null;case xt:return j=m._init,g(h,p,j(m._payload),E)}if(Zn(m)||$n(m))return j!==null?null:d(h,p,m,E,null);no(h,m)}return null}function w(h,p,m,E,j){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(m)||null,a(p,h,""+E,j);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Wr:return h=h.get(E.key===null?m:E.key)||null,u(p,h,E,j);case sn:return h=h.get(E.key===null?m:E.key)||null,c(p,h,E,j);case xt:var R=E._init;return w(h,p,m,R(E._payload),j)}if(Zn(E)||$n(E))return h=h.get(m)||null,d(p,h,E,j,null);no(p,E)}return null}function y(h,p,m,E){for(var j=null,R=null,N=p,T=p=0,A=null;N!==null&&T<m.length;T++){N.index>T?(A=N,N=null):A=N.sibling;var L=g(h,N,m[T],E);if(L===null){N===null&&(N=A);break}e&&N&&L.alternate===null&&t(h,N),p=i(L,p,T),R===null?j=L:R.sibling=L,R=L,N=A}if(T===m.length)return n(h,N),W&&Ut(h,T),j;if(N===null){for(;T<m.length;T++)N=f(h,m[T],E),N!==null&&(p=i(N,p,T),R===null?j=N:R.sibling=N,R=N);return W&&Ut(h,T),j}for(N=r(h,N);T<m.length;T++)A=w(N,h,T,m[T],E),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?T:A.key),p=i(A,p,T),R===null?j=A:R.sibling=A,R=A);return e&&N.forEach(function(ge){return t(h,ge)}),W&&Ut(h,T),j}function v(h,p,m,E){var j=$n(m);if(typeof j!="function")throw Error(C(150));if(m=j.call(m),m==null)throw Error(C(151));for(var R=j=null,N=p,T=p=0,A=null,L=m.next();N!==null&&!L.done;T++,L=m.next()){N.index>T?(A=N,N=null):A=N.sibling;var ge=g(h,N,L.value,E);if(ge===null){N===null&&(N=A);break}e&&N&&ge.alternate===null&&t(h,N),p=i(ge,p,T),R===null?j=ge:R.sibling=ge,R=ge,N=A}if(L.done)return n(h,N),W&&Ut(h,T),j;if(N===null){for(;!L.done;T++,L=m.next())L=f(h,L.value,E),L!==null&&(p=i(L,p,T),R===null?j=L:R.sibling=L,R=L);return W&&Ut(h,T),j}for(N=r(h,N);!L.done;T++,L=m.next())L=w(N,h,T,L.value,E),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?T:L.key),p=i(L,p,T),R===null?j=L:R.sibling=L,R=L);return e&&N.forEach(function(Ke){return t(h,Ke)}),W&&Ut(h,T),j}function S(h,p,m,E){if(typeof m=="object"&&m!==null&&m.type===un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wr:e:{for(var j=m.key,R=p;R!==null;){if(R.key===j){if(j=m.type,j===un){if(R.tag===7){n(h,R.sibling),p=o(R,m.props.children),p.return=h,h=p;break e}}else if(R.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===xt&&Ys(j)===R.type){n(h,R.sibling),p=o(R,m.props),p.ref=Qn(h,R,m),p.return=h,h=p;break e}n(h,R);break}else t(h,R);R=R.sibling}m.type===un?(p=Qt(m.props.children,h.mode,E,m.key),p.return=h,h=p):(E=ko(m.type,m.key,m.props,null,h.mode,E),E.ref=Qn(h,p,m),E.return=h,h=E)}return l(h);case sn:e:{for(R=m.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(h,p.sibling),p=o(p,m.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ji(m,h.mode,E),p.return=h,h=p}return l(h);case xt:return R=m._init,S(h,p,R(m._payload),E)}if(Zn(m))return y(h,p,m,E);if($n(m))return v(h,p,m,E);no(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,m),p.return=h,h=p):(n(h,p),p=Ki(m,h.mode,E),p.return=h,h=p),l(h)):n(h,p)}return S}var Pn=ed(!0),td=ed(!1),Uo=At(null),Bo=null,yn=null,Ca=null;function Na(){Ca=yn=Bo=null}function Ra(e){var t=Uo.current;V(Uo),e._currentValue=t}function zl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Bo=e,Ca=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(xe=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(Ca!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Bo===null)throw Error(C(308));yn=e,Bo.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Ht=null;function ba(e){Ht===null?Ht=[e]:Ht.push(e)}function nd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ba(t)):(n.next=o.next,o.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Pa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,pt(e,n)}return o=r.interleaved,o===null?(t.next=t,ba(r)):(t.next=o.next,o.next=t),r.interleaved=t,pt(e,n)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}function Qs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $o(e,t,n,r){var o=e.updateQueue;wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;l=0,d=c=u=null,a=i;do{var g=a.lane,w=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,v=a;switch(g=t,w=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(w,f,g);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,g=typeof y=="function"?y.call(w,f,g):y,g==null)break e;f=K({},f,g);break e;case 2:wt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else w={eventTime:w,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=w,u=f):d=d.next=w,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(u=f),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Gt|=l,e.lanes=l,e.memoizedState=f}}function qs(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var zr={},nt=At(zr),Sr=At(zr),Er=At(zr);function Vt(e){if(e===zr)throw Error(C(174));return e}function Ta(e,t){switch(B(Er,t),B(Sr,e),B(nt,zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pl(t,e)}V(nt),B(nt,t)}function Tn(){V(nt),V(Sr),V(Er)}function od(e){Vt(Er.current);var t=Vt(nt.current),n=pl(t,e.type);t!==n&&(B(Sr,e),B(nt,n))}function _a(e){Sr.current===e&&(V(nt),V(Sr))}var Y=At(0);function Ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function La(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var go=gt.ReactCurrentDispatcher,Vi=gt.ReactCurrentBatchConfig,Xt=0,Q=null,ee=null,ne=null,Vo=!1,ar=!1,jr=0,Wm=0;function ae(){throw Error(C(321))}function za(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qe(e[n],t[n]))return!1;return!0}function Oa(e,t,n,r,o,i){if(Xt=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,go.current=e===null||e.memoizedState===null?Km:Jm,e=n(r,o),ar){i=0;do{if(ar=!1,jr=0,25<=i)throw Error(C(301));i+=1,ne=ee=null,t.updateQueue=null,go.current=Xm,e=n(r,o)}while(ar)}if(go.current=Wo,t=ee!==null&&ee.next!==null,Xt=0,ne=ee=Q=null,Vo=!1,t)throw Error(C(300));return e}function Da(){var e=jr!==0;return jr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?Q.memoizedState=ne=e:ne=ne.next=e,ne}function Me(){if(ee===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?Q.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(C(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?Q.memoizedState=ne=e:ne=ne.next=e}return ne}function Cr(e,t){return typeof t=="function"?t(e):t}function Wi(e){var t=Me(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,c=i;do{var d=c.lane;if((Xt&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,l=r):u=u.next=f,Q.lanes|=d,Gt|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=a,Qe(r,t.memoizedState)||(xe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Gt|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yi(e){var t=Me(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Qe(i,t.memoizedState)||(xe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function id(){}function ld(e,t){var n=Q,r=Me(),o=t(),i=!Qe(r.memoizedState,o);if(i&&(r.memoizedState=o,xe=!0),r=r.queue,Aa(ud.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Nr(9,sd.bind(null,n,r,o,t),void 0,null),re===null)throw Error(C(349));Xt&30||ad(n,t,o)}return o}function ad(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function sd(e,t,n,r){t.value=n,t.getSnapshot=r,cd(t)&&dd(e)}function ud(e,t,n){return n(function(){cd(t)&&dd(e)})}function cd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qe(e,n)}catch{return!0}}function dd(e){var t=pt(e,1);t!==null&&Ye(t,e,1,-1)}function Ks(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cr,lastRenderedState:e},t.queue=e,e=e.dispatch=qm.bind(null,Q,e),[t.memoizedState,e]}function Nr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fd(){return Me().memoizedState}function yo(e,t,n,r){var o=Ze();Q.flags|=e,o.memoizedState=Nr(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var o=Me();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&za(r,l.deps)){o.memoizedState=Nr(t,n,i,r);return}}Q.flags|=e,o.memoizedState=Nr(1|t,n,i,r)}function Js(e,t){return yo(8390656,8,e,t)}function Aa(e,t){return si(2048,8,e,t)}function pd(e,t){return si(4,2,e,t)}function md(e,t){return si(4,4,e,t)}function hd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function gd(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,hd.bind(null,t,e),n)}function Ma(){}function yd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&za(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&za(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function xd(e,t,n){return Xt&21?(Qe(n,t)||(n=jc(),Q.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,xe=!0),e.memoizedState=n)}function Ym(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{I=n,Vi.transition=r}}function wd(){return Me().memoizedState}function Qm(e,t,n){var r=_t(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kd(e))Sd(t,n);else if(n=nd(e,t,n,r),n!==null){var o=pe();Ye(n,e,r,o),Ed(n,t,r)}}function qm(e,t,n){var r=_t(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kd(e))Sd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Qe(a,l)){var u=t.interleaved;u===null?(o.next=o,ba(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=nd(e,t,o,r),n!==null&&(o=pe(),Ye(n,e,r,o),Ed(n,t,r))}}function kd(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Sd(e,t){ar=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ed(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ma(e,n)}}var Wo={readContext:Ae,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Km={readContext:Ae,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Js,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,yo(4194308,4,hd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return yo(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qm.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Ks,useDebugValue:Ma,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Ks(!1),t=e[0];return e=Ym.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Q,o=Ze();if(W){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),re===null)throw Error(C(349));Xt&30||ad(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Js(ud.bind(null,r,i,e),[e]),r.flags|=2048,Nr(9,sd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Ze(),t=re.identifierPrefix;if(W){var n=st,r=at;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Wm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jm={readContext:Ae,useCallback:yd,useContext:Ae,useEffect:Aa,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:vd,useReducer:Wi,useRef:fd,useState:function(){return Wi(Cr)},useDebugValue:Ma,useDeferredValue:function(e){var t=Me();return xd(t,ee.memoizedState,e)},useTransition:function(){var e=Wi(Cr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1},Xm={readContext:Ae,useCallback:yd,useContext:Ae,useEffect:Aa,useImperativeHandle:gd,useInsertionEffect:pd,useLayoutEffect:md,useMemo:vd,useReducer:Yi,useRef:fd,useState:function(){return Yi(Cr)},useDebugValue:Ma,useDeferredValue:function(e){var t=Me();return ee===null?t.memoizedState=e:xd(t,ee.memoizedState,e)},useTransition:function(){var e=Yi(Cr)[0],t=Me().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:wd,unstable_isNewReconciler:!1};function Be(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ol(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?nn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),i=ut(r,o);i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,o),t!==null&&(Ye(t,e,o,r),ho(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pe(),o=_t(e),i=ut(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,o),t!==null&&(Ye(t,e,o,r),ho(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pe(),r=_t(e),o=ut(n,r);o.tag=2,t!=null&&(o.callback=t),t=Pt(e,o,r),t!==null&&(Ye(t,e,r,n),ho(t,e,r))}};function Xs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!vr(n,r)||!vr(o,i):!0}function jd(e,t,n){var r=!1,o=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(o=ke(t)?Kt:de.current,r=t.contextTypes,i=(r=r!=null)?Rn(e,o):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Gs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Dl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Pa(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ae(i):(i=ke(t)?Kt:de.current,o.context=Rn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ol(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ui.enqueueReplaceState(o,o.state,null),$o(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function _n(e,t){try{var n="",r=t;do n+=Cp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qo||(Qo=!0,Yl=r),Al(e,t)},n}function Nd(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Al(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Zs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=fh.bind(null,e,t,n),t.then(e,e))}function eu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ut(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var Zm=gt.ReactCurrentOwner,xe=!1;function fe(e,t,n,r){t.child=e===null?td(t,null,n,r):Pn(t,e.child,n,r)}function nu(e,t,n,r,o){n=n.render;var i=t.ref;return jn(t,o),r=Oa(e,t,n,r,i,o),n=Da(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(W&&n&&Sa(t),t.flags|=1,fe(e,t,r,o),t.child)}function ru(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wa(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rd(e,t,i,r,o)):(e=ko(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:vr,n(l,r)&&e.ref===t.ref)return mt(e,t,o)}return t.flags|=1,e=Lt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(vr(i,r)&&e.ref===t.ref)if(xe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(xe=!0);else return t.lanes=e.lanes,mt(e,t,o)}return Ml(e,t,n,r,o)}function bd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(xn,Ce),Ce|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(xn,Ce),Ce|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(xn,Ce),Ce|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(xn,Ce),Ce|=r;return fe(e,t,o,n),t.child}function Pd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ml(e,t,n,r,o){var i=ke(n)?Kt:de.current;return i=Rn(t,i),jn(t,o),n=Oa(e,t,n,r,i,o),r=Da(),e!==null&&!xe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(W&&r&&Sa(t),t.flags|=1,fe(e,t,n,o),t.child)}function ou(e,t,n,r,o){if(ke(n)){var i=!0;Mo(t)}else i=!1;if(jn(t,o),t.stateNode===null)vo(e,t),jd(t,n,r),Dl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ae(c):(c=ke(n)?Kt:de.current,c=Rn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&Gs(t,l,r,c),wt=!1;var g=t.memoizedState;l.state=g,$o(t,r,l,o),u=t.memoizedState,a!==r||g!==u||we.current||wt?(typeof d=="function"&&(Ol(t,n,d,r),u=t.memoizedState),(a=wt||Xs(t,n,a,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,rd(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Be(t.type,a),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ae(u):(u=ke(n)?Kt:de.current,u=Rn(t,u));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||g!==u)&&Gs(t,l,r,u),wt=!1,g=t.memoizedState,l.state=g,$o(t,r,l,o);var y=t.memoizedState;a!==f||g!==y||we.current||wt?(typeof w=="function"&&(Ol(t,n,w,r),y=t.memoizedState),(c=wt||Xs(t,n,c,r,g,y,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),l.props=r,l.state=y,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,i,o)}function Fl(e,t,n,r,o,i){Pd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Hs(t,n,!1),mt(e,t,i);r=t.stateNode,Zm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Pn(t,e.child,null,i),t.child=Pn(t,null,a,i)):fe(e,t,a,i),t.memoizedState=r.state,o&&Hs(t,n,!0),t.child}function Td(e){var t=e.stateNode;t.pendingContext?$s(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$s(e,t.context,!1),Ta(e,t.containerInfo)}function iu(e,t,n,r,o){return bn(),ja(o),t.flags|=256,fe(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0};function Ul(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var r=t.pendingProps,o=Y.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(Y,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=fi(l,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ul(n),t.memoizedState=Il,e):Fa(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return eh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Lt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=Lt(a,i):(i=Qt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ul(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Il,r}return i=e.child,e=i.sibling,r=Lt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fa(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ro(e,t,n,r){return r!==null&&ja(r),Pn(t,e.child,null,n),e=Fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Qi(Error(C(422))),ro(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=fi({mode:"visible",children:r.children},o,0,null),i=Qt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Pn(t,e.child,null,l),t.child.memoizedState=Ul(l),t.memoizedState=Il,i);if(!(t.mode&1))return ro(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Qi(i,r,void 0),ro(e,t,l,r)}if(a=(l&e.childLanes)!==0,xe||a){if(r=re,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,pt(e,o),Ye(r,e,o,-1))}return Va(),r=Qi(Error(C(421))),ro(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ph.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ne=bt(o.nextSibling),Re=t,W=!0,He=null,e!==null&&(Le[ze++]=at,Le[ze++]=st,Le[ze++]=Jt,at=e.id,st=e.overflow,Jt=t),t=Fa(t,r.children),t.flags|=4096,t)}function lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),zl(e.return,t,n)}function qi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ld(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(fe(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lu(e,n,t);else if(e.tag===19)lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ho(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),qi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ho(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}qi(t,!0,n,null,i);break;case"together":qi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function th(e,t,n){switch(t.tag){case 3:Td(t),bn();break;case 5:od(t);break;case 1:ke(t.type)&&Mo(t);break;case 4:Ta(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Uo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?_d(e,t,n):(B(Y,Y.current&1),e=mt(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ld(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,bd(e,t,n)}return mt(e,t,n)}var zd,Bl,Od,Dd;zd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Od=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Vt(nt.current);var i=null;switch(n){case"input":o=ul(e,o),r=ul(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=fl(e,o),r=fl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}ml(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(dr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(dr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function qn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nh(e,t,n){var r=t.pendingProps;switch(Ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ke(t.type)&&Ao(),se(t),null;case 3:return r=t.stateNode,Tn(),V(we),V(de),La(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(to(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(Kl(He),He=null))),Bl(e,t),se(t),null;case 5:_a(t);var o=Vt(Er.current);if(n=t.type,e!==null&&t.stateNode!=null)Od(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return se(t),null}if(e=Vt(nt.current),to(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[et]=t,r[kr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)H(tr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":hs(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ys(r,i),H("invalid",r)}ml(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&eo(r.textContent,a,e),o=["children",""+a]):dr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Yr(r),gs(r,i,!0);break;case"textarea":Yr(r),vs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Do)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[et]=t,e[kr]=r,zd(e,t,!1,!1),t.stateNode=e;e:{switch(l=hl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)H(tr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":hs(e,r),o=ul(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),H("invalid",e);break;case"textarea":ys(e,r),o=fl(e,r),H("invalid",e);break;default:o=r}ml(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?fc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&cc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&fr(e,u):typeof u=="number"&&fr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(dr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&H("scroll",e):u!=null&&sa(e,i,u,l))}switch(n){case"input":Yr(e),gs(e,r,!1);break;case"textarea":Yr(e),vs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Vt(Er.current),Vt(nt.current),to(t)){if(r=t.stateNode,n=t.memoizedProps,r[et]=t,(i=r.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&eo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=t,t.stateNode=r}return se(t),null;case 13:if(V(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&t.mode&1&&!(t.flags&128))Zc(),bn(),t.flags|=98560,i=!1;else if(i=to(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[et]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),i=!1}else He!==null&&(Kl(He),He=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?te===0&&(te=3):Va())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Tn(),Bl(e,t),e===null&&xr(t.stateNode.containerInfo),se(t),null;case 10:return Ra(t.type._context),se(t),null;case 17:return ke(t.type)&&Ao(),se(t),null;case 19:if(V(Y),i=t.memoizedState,i===null)return se(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)qn(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ho(e),l!==null){for(t.flags|=128,qn(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&G()>Ln&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ho(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!W)return se(t),null}else 2*G()-i.renderingStartTime>Ln&&n!==1073741824&&(t.flags|=128,r=!0,qn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=G(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Ha(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ce&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function rh(e,t){switch(Ea(t),t.tag){case 1:return ke(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),V(we),V(de),La(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _a(t),null;case 13:if(V(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(Y),null;case 4:return Tn(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return Ha(),null;case 24:return null;default:return null}}var oo=!1,ue=!1,oh=typeof WeakSet=="function"?WeakSet:Set,P=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){X(e,t,r)}}var au=!1;function ih(e,t){if(Cl=Lo,e=Uc(),ka(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,d=0,f=e,g=null;t:for(;;){for(var w;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break t;if(g===n&&++c===o&&(a=l),g===i&&++d===r&&(u=l),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nl={focusedElem:e,selectionRange:n},Lo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?v:Be(t.type,v),S);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){X(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=au,au=!1,y}function sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&$l(t,n,i)}o=o.next}while(o!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[et],delete t[kr],delete t[Pl],delete t[Bm],delete t[$m])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Md(e){return e.tag===5||e.tag===3||e.tag===4}function su(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wl(e,t,n),e=e.sibling;e!==null;)Wl(e,t,n),e=e.sibling}var oe=null,$e=!1;function vt(e,t,n){for(n=n.child;n!==null;)Fd(e,t,n),n=n.sibling}function Fd(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:ue||vn(n,t);case 6:var r=oe,o=$e;oe=null,vt(e,t,n),oe=r,$e=o,oe!==null&&($e?(e=oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):oe.removeChild(n.stateNode));break;case 18:oe!==null&&($e?(e=oe,n=n.stateNode,e.nodeType===8?Bi(e.parentNode,n):e.nodeType===1&&Bi(e,n),gr(e)):Bi(oe,n.stateNode));break;case 4:r=oe,o=$e,oe=n.stateNode.containerInfo,$e=!0,vt(e,t,n),oe=r,$e=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&$l(n,t,l),o=o.next}while(o!==r)}vt(e,t,n);break;case 1:if(!ue&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}vt(e,t,n);break;case 21:vt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,vt(e,t,n),ue=r):vt(e,t,n);break;default:vt(e,t,n)}}function uu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new oh),t.forEach(function(r){var o=mh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:oe=a.stateNode,$e=!1;break e;case 3:oe=a.stateNode.containerInfo,$e=!0;break e;case 4:oe=a.stateNode.containerInfo,$e=!0;break e}a=a.return}if(oe===null)throw Error(C(160));Fd(i,l,o),oe=null,$e=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){X(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Id(t,e),t=t.sibling}function Id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Xe(e),r&4){try{sr(3,e,e.return),ci(3,e)}catch(v){X(e,e.return,v)}try{sr(5,e,e.return)}catch(v){X(e,e.return,v)}}break;case 1:Ue(t,e),Xe(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Ue(t,e),Xe(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var o=e.stateNode;try{fr(o,"")}catch(v){X(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ac(o,i),hl(a,l);var c=hl(a,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];d==="style"?fc(o,f):d==="dangerouslySetInnerHTML"?cc(o,f):d==="children"?fr(o,f):sa(o,d,f,c)}switch(a){case"input":cl(o,i);break;case"textarea":sc(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?wn(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?wn(o,!!i.multiple,i.defaultValue,!0):wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[kr]=i}catch(v){X(e,e.return,v)}}break;case 6:if(Ue(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(v){X(e,e.return,v)}}break;case 3:if(Ue(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gr(t.containerInfo)}catch(v){X(e,e.return,v)}break;case 4:Ue(t,e),Xe(e);break;case 13:Ue(t,e),Xe(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ba=G())),r&4&&uu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||d,Ue(t,e),ue=c):Ue(t,e),Xe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(f=P=d;P!==null;){switch(g=P,w=g.child,g.tag){case 0:case 11:case 14:case 15:sr(4,g,g.return);break;case 1:vn(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){X(r,n,v)}}break;case 5:vn(g,g.return);break;case 22:if(g.memoizedState!==null){du(f);continue}}w!==null?(w.return=g,P=w):du(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=dc("display",l))}catch(v){X(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){X(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ue(t,e),Xe(e),r&4&&uu(e);break;case 21:break;default:Ue(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Md(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(fr(o,""),r.flags&=-33);var i=su(e);Wl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=su(e);Vl(e,a,l);break;default:throw Error(C(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lh(e,t,n){P=e,Ud(e)}function Ud(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||oo;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ue;a=oo;var c=ue;if(oo=l,(ue=u)&&!c)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?fu(o):u!==null?(u.return=l,P=u):fu(o);for(;i!==null;)P=i,Ud(i),i=i.sibling;P=o,oo=a,ue=c}cu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,P=i):cu(e)}}function cu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ue||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Be(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&qs(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qs(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&gr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ue||t.flags&512&&Hl(t)}catch(g){X(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function du(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){X(t,o,u)}}var i=t.return;try{Hl(t)}catch(u){X(t,i,u)}break;case 5:var l=t.return;try{Hl(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){P=null;break}var a=t.sibling;if(a!==null){a.return=t.return,P=a;break}P=t.return}}var ah=Math.ceil,Yo=gt.ReactCurrentDispatcher,Ia=gt.ReactCurrentOwner,De=gt.ReactCurrentBatchConfig,M=0,re=null,Z=null,ie=0,Ce=0,xn=At(0),te=0,Rr=null,Gt=0,di=0,Ua=0,ur=null,ve=null,Ba=0,Ln=1/0,it=null,Qo=!1,Yl=null,Tt=null,io=!1,jt=null,qo=0,cr=0,Ql=null,xo=-1,wo=0;function pe(){return M&6?G():xo!==-1?xo:xo=G()}function _t(e){return e.mode&1?M&2&&ie!==0?ie&-ie:Vm.transition!==null?(wo===0&&(wo=jc()),wo):(e=I,e!==0||(e=window.event,e=e===void 0?16:_c(e.type)),e):1}function Ye(e,t,n,r){if(50<cr)throw cr=0,Ql=null,Error(C(185));Tr(e,n,r),(!(M&2)||e!==re)&&(e===re&&(!(M&2)&&(di|=n),te===4&&St(e,ie)),Se(e,r),n===1&&M===0&&!(t.mode&1)&&(Ln=G()+500,ai&&Mt()))}function Se(e,t){var n=e.callbackNode;Vp(e,t);var r=_o(e,e===re?ie:0);if(r===0)n!==null&&ks(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ks(n),t===1)e.tag===0?Hm(pu.bind(null,e)):Jc(pu.bind(null,e)),Im(function(){!(M&6)&&Mt()}),n=null;else{switch(Cc(r)){case 1:n=pa;break;case 4:n=Sc;break;case 16:n=To;break;case 536870912:n=Ec;break;default:n=To}n=qd(n,Bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Bd(e,t){if(xo=-1,wo=0,M&6)throw Error(C(327));var n=e.callbackNode;if(Cn()&&e.callbackNode!==n)return null;var r=_o(e,e===re?ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var o=M;M|=2;var i=Hd();(re!==e||ie!==t)&&(it=null,Ln=G()+500,Yt(e,t));do try{ch();break}catch(a){$d(e,a)}while(!0);Na(),Yo.current=i,M=o,Z!==null?t=0:(re=null,ie=0,t=te)}if(t!==0){if(t===2&&(o=wl(e),o!==0&&(r=o,t=ql(e,o))),t===1)throw n=Rr,Yt(e,0),St(e,r),Se(e,G()),n;if(t===6)St(e,r);else{if(o=e.current.alternate,!(r&30)&&!sh(o)&&(t=Ko(e,r),t===2&&(i=wl(e),i!==0&&(r=i,t=ql(e,i))),t===1))throw n=Rr,Yt(e,0),St(e,r),Se(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Bt(e,ve,it);break;case 3:if(St(e,r),(r&130023424)===r&&(t=Ba+500-G(),10<t)){if(_o(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=bl(Bt.bind(null,e,ve,it),t);break}Bt(e,ve,it);break;case 4:if(St(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ah(r/1960))-r,10<r){e.timeoutHandle=bl(Bt.bind(null,e,ve,it),r);break}Bt(e,ve,it);break;case 5:Bt(e,ve,it);break;default:throw Error(C(329))}}}return Se(e,G()),e.callbackNode===n?Bd.bind(null,e):null}function ql(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Yt(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=ve,ve=n,t!==null&&Kl(t)),e}function Kl(e){ve===null?ve=e:ve.push.apply(ve,e)}function sh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qe(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function St(e,t){for(t&=~Ua,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function pu(e){if(M&6)throw Error(C(327));Cn();var t=_o(e,0);if(!(t&1))return Se(e,G()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=wl(e);r!==0&&(t=r,n=ql(e,r))}if(n===1)throw n=Rr,Yt(e,0),St(e,t),Se(e,G()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bt(e,ve,it),Se(e,G()),null}function $a(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(Ln=G()+500,ai&&Mt())}}function Zt(e){jt!==null&&jt.tag===0&&!(M&6)&&Cn();var t=M;M|=1;var n=De.transition,r=I;try{if(De.transition=null,I=1,e)return e()}finally{I=r,De.transition=n,M=t,!(M&6)&&Mt()}}function Ha(){Ce=xn.current,V(xn)}function Yt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fm(n)),Z!==null)for(n=Z.return;n!==null;){var r=n;switch(Ea(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:Tn(),V(we),V(de),La();break;case 5:_a(r);break;case 4:Tn();break;case 13:V(Y);break;case 19:V(Y);break;case 10:Ra(r.type._context);break;case 22:case 23:Ha()}n=n.return}if(re=e,Z=e=Lt(e.current,null),ie=Ce=t,te=0,Rr=null,Ua=di=Gt=0,ve=ur=null,Ht!==null){for(t=0;t<Ht.length;t++)if(n=Ht[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Ht=null}return e}function $d(e,t){do{var n=Z;try{if(Na(),go.current=Wo,Vo){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Vo=!1}if(Xt=0,ne=ee=Q=null,ar=!1,jr=0,Ia.current=null,n===null||n.return===null){te=1,Rr=t,Z=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=ie,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=eu(l);if(w!==null){w.flags&=-257,tu(w,l,a,i,t),w.mode&1&&Zs(i,c,t),t=w,u=c;var y=t.updateQueue;if(y===null){var v=new Set;v.add(u),t.updateQueue=v}else y.add(u);break e}else{if(!(t&1)){Zs(i,c,t),Va();break e}u=Error(C(426))}}else if(W&&a.mode&1){var S=eu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),tu(S,l,a,i,t),ja(_n(u,a));break e}}i=u=_n(u,a),te!==4&&(te=2),ur===null?ur=[i]:ur.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Cd(i,u,t);Qs(i,h);break e;case 1:a=u;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Tt===null||!Tt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var E=Nd(i,a,t);Qs(i,E);break e}}i=i.return}while(i!==null)}Wd(n)}catch(j){t=j,Z===n&&n!==null&&(Z=n=n.return);continue}break}while(!0)}function Hd(){var e=Yo.current;return Yo.current=Wo,e===null?Wo:e}function Va(){(te===0||te===3||te===2)&&(te=4),re===null||!(Gt&268435455)&&!(di&268435455)||St(re,ie)}function Ko(e,t){var n=M;M|=2;var r=Hd();(re!==e||ie!==t)&&(it=null,Yt(e,t));do try{uh();break}catch(o){$d(e,o)}while(!0);if(Na(),M=n,Yo.current=r,Z!==null)throw Error(C(261));return re=null,ie=0,te}function uh(){for(;Z!==null;)Vd(Z)}function ch(){for(;Z!==null&&!Dp();)Vd(Z)}function Vd(e){var t=Qd(e.alternate,e,Ce);e.memoizedProps=e.pendingProps,t===null?Wd(e):Z=t,Ia.current=null}function Wd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=rh(n,t),n!==null){n.flags&=32767,Z=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,Z=null;return}}else if(n=nh(n,t,Ce),n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);te===0&&(te=5)}function Bt(e,t,n){var r=I,o=De.transition;try{De.transition=null,I=1,dh(e,t,n,r)}finally{De.transition=o,I=r}return null}function dh(e,t,n,r){do Cn();while(jt!==null);if(M&6)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Wp(e,i),e===re&&(Z=re=null,ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,qd(To,function(){return Cn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var l=I;I=1;var a=M;M|=4,Ia.current=null,ih(e,n),Id(n,e),_m(Nl),Lo=!!Cl,Nl=Cl=null,e.current=n,lh(n),Ap(),M=a,I=l,De.transition=i}else e.current=n;if(io&&(io=!1,jt=e,qo=o),i=e.pendingLanes,i===0&&(Tt=null),Ip(n.stateNode),Se(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Qo)throw Qo=!1,e=Yl,Yl=null,e;return qo&1&&e.tag!==0&&Cn(),i=e.pendingLanes,i&1?e===Ql?cr++:(cr=0,Ql=e):cr=0,Mt(),null}function Cn(){if(jt!==null){var e=Cc(qo),t=De.transition,n=I;try{if(De.transition=null,I=16>e?16:e,jt===null)var r=!1;else{if(e=jt,jt=null,qo=0,M&6)throw Error(C(331));var o=M;for(M|=4,P=e.current;P!==null;){var i=P,l=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:sr(8,d,i)}var f=d.child;if(f!==null)f.return=d,P=f;else for(;P!==null;){d=P;var g=d.sibling,w=d.return;if(Ad(d),d===c){P=null;break}if(g!==null){g.return=w,P=g;break}P=w}}}var y=i.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:sr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,P=h;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){l=P;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,P=m;else e:for(l=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ci(9,a)}}catch(j){X(a,a.return,j)}if(a===l){P=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,P=E;break e}P=a.return}}if(M=o,Mt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{I=n,De.transition=t}}return!1}function mu(e,t,n){t=_n(n,t),t=Cd(e,t,1),e=Pt(e,t,1),t=pe(),e!==null&&(Tr(e,1,t),Se(e,t))}function X(e,t,n){if(e.tag===3)mu(e,e,n);else for(;t!==null;){if(t.tag===3){mu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=_n(n,e),e=Nd(t,e,1),t=Pt(t,e,1),e=pe(),t!==null&&(Tr(t,1,e),Se(t,e));break}}t=t.return}}function fh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=pe(),e.pingedLanes|=e.suspendedLanes&n,re===e&&(ie&n)===n&&(te===4||te===3&&(ie&130023424)===ie&&500>G()-Ba?Yt(e,0):Ua|=n),Se(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):t=1);var n=pe();e=pt(e,t),e!==null&&(Tr(e,t,n),Se(e,n))}function ph(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function mh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Yd(e,n)}var Qd;Qd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)xe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return xe=!1,th(e,t,n);xe=!!(e.flags&131072)}else xe=!1,W&&t.flags&1048576&&Xc(t,Io,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vo(e,t),e=t.pendingProps;var o=Rn(t,de.current);jn(t,n),o=Oa(null,t,r,e,o,n);var i=Da();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,Mo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Pa(t),o.updater=ui,t.stateNode=o,o._reactInternals=t,Dl(t,r,e,n),t=Fl(null,t,r,!0,i,n)):(t.tag=0,W&&i&&Sa(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=gh(r),e=Be(r,e),o){case 0:t=Ml(null,t,r,e,n);break e;case 1:t=ou(null,t,r,e,n);break e;case 11:t=nu(null,t,r,e,n);break e;case 14:t=ru(null,t,r,Be(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),Ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),ou(e,t,r,o,n);case 3:e:{if(Td(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rd(e,t),$o(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=_n(Error(C(423)),t),t=iu(e,t,r,n,o);break e}else if(r!==o){o=_n(Error(C(424)),t),t=iu(e,t,r,n,o);break e}else for(Ne=bt(t.stateNode.containerInfo.firstChild),Re=t,W=!0,He=null,n=td(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=mt(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return od(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Rl(r,o)?l=null:i!==null&&Rl(r,i)&&(t.flags|=32),Pd(e,t),fe(e,t,l,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return _d(e,t,n);case 4:return Ta(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pn(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),nu(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Uo,r._currentValue),r._currentValue=l,i!==null)if(Qe(i.value,l)){if(i.children===o.children&&!we.current){t=mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=ut(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),zl(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),zl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Ae(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=Be(r,t.pendingProps),o=Be(r.type,o),ru(e,t,r,o,n);case 15:return Rd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Be(r,o),vo(e,t),t.tag=1,ke(r)?(e=!0,Mo(t)):e=!1,jn(t,n),jd(t,r,o),Dl(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return Ld(e,t,n);case 22:return bd(e,t,n)}throw Error(C(156,t.tag))};function qd(e,t){return kc(e,t)}function hh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oe(e,t,n,r){return new hh(e,t,n,r)}function Wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gh(e){if(typeof e=="function")return Wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ca)return 11;if(e===da)return 14}return 2}function Lt(e,t){var n=e.alternate;return n===null?(n=Oe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ko(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Wa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case un:return Qt(n.children,o,i,t);case ua:l=8,o|=8;break;case il:return e=Oe(12,n,t,o|2),e.elementType=il,e.lanes=i,e;case ll:return e=Oe(13,n,t,o),e.elementType=ll,e.lanes=i,e;case al:return e=Oe(19,n,t,o),e.elementType=al,e.lanes=i,e;case oc:return fi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:l=10;break e;case rc:l=9;break e;case ca:l=11;break e;case da:l=14;break e;case xt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Oe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=Oe(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=Oe(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ki(e,t,n){return e=Oe(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=Oe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function yh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ya(e,t,n,r,o,i,l,a,u){return e=new yh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Oe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pa(i),e}function vh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Kd(e){if(!e)return Ot;e=e._reactInternals;e:{if(nn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(ke(n))return Kc(e,n,t)}return t}function Jd(e,t,n,r,o,i,l,a,u){return e=Ya(n,r,!0,e,o,i,l,a,u),e.context=Kd(null),n=e.current,r=pe(),o=_t(n),i=ut(r,o),i.callback=t??null,Pt(n,i,o),e.current.lanes=o,Tr(e,o,r),Se(e,r),e}function pi(e,t,n,r){var o=t.current,i=pe(),l=_t(o);return n=Kd(n),t.context===null?t.context=n:t.pendingContext=n,t=ut(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(o,t,l),e!==null&&(Ye(e,o,l,i),ho(e,o,l)),l}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qa(e,t){hu(e,t),(e=e.alternate)&&hu(e,t)}function xh(){return null}var Xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function qa(e){this._internalRoot=e}mi.prototype.render=qa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));pi(e,t,null,null)};mi.prototype.unmount=qa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){pi(null,e,null,null)}),t[ft]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=bc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<kt.length&&t!==0&&t<kt[n].priority;n++);kt.splice(n,0,e),n===0&&Tc(e)}};function Ka(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function wh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=Jo(l);i.call(c)}}var l=Jd(t,r,e,0,null,!1,!1,"",gu);return e._reactRootContainer=l,e[ft]=l.current,xr(e.nodeType===8?e.parentNode:e),Zt(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Jo(u);a.call(c)}}var u=Ya(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=u,e[ft]=u.current,xr(e.nodeType===8?e.parentNode:e),Zt(function(){pi(t,u,n,r)}),u}function gi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=Jo(l);a.call(u)}}pi(t,l,e,o)}else l=wh(n,t,e,o,r);return Jo(l)}Nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(ma(t,n|1),Se(t,G()),!(M&6)&&(Ln=G()+500,Mt()))}break;case 13:Zt(function(){var r=pt(e,1);if(r!==null){var o=pe();Ye(r,e,1,o)}}),Qa(e,1)}};ha=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=pe();Ye(t,e,134217728,n)}Qa(e,134217728)}};Rc=function(e){if(e.tag===13){var t=_t(e),n=pt(e,t);if(n!==null){var r=pe();Ye(n,e,t,r)}Qa(e,t)}};bc=function(){return I};Pc=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};yl=function(e,t,n){switch(t){case"input":if(cl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=li(r);if(!o)throw Error(C(90));lc(r),cl(r,o)}}}break;case"textarea":sc(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};hc=$a;gc=Zt;var kh={usingClientEntryPoint:!1,Events:[Lr,pn,li,pc,mc,$a]},Kn={findFiberByHostInstance:$t,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sh={bundleType:Kn.bundleType,version:Kn.version,rendererPackageName:Kn.rendererPackageName,rendererConfig:Kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:Kn.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{ni=lo.inject(Sh),tt=lo}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ka(t))throw Error(C(200));return vh(e,t,null,n)};Pe.createRoot=function(e,t){if(!Ka(e))throw Error(C(299));var n=!1,r="",o=Xd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ya(e,1,!1,null,null,n,!1,r,o),e[ft]=t.current,xr(e.nodeType===8?e.parentNode:e),new qa(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Zt(e)};Pe.hydrate=function(e,t,n){if(!hi(t))throw Error(C(200));return gi(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Ka(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Xd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Jd(t,null,e,1,n??null,o,!1,i,l),e[ft]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new mi(t)};Pe.render=function(e,t,n){if(!hi(t))throw Error(C(200));return gi(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!hi(e))throw Error(C(40));return e._reactRootContainer?(Zt(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[ft]=null})}),!0):!1};Pe.unstable_batchedUpdates=$a;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return gi(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Gd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gd)}catch(e){console.error(e)}}Gd(),Gu.exports=Pe;var Eh=Gu.exports,yu=Eh;rl.createRoot=yu.createRoot,rl.hydrateRoot=yu.hydrateRoot;/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var vu="popstate";function jh(e={}){function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Jl("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:br(o)}return Nh(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ch(){return Math.random().toString(36).substring(2,10)}function xu(e,t){return{usr:e.state,key:e.key,idx:t}}function Jl(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Mn(t):t,state:n,key:t&&t.key||r||Ch()}}function br({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Nh(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a="POP",u=null,c=d();c==null&&(c=0,l.replaceState({...l.state,idx:c},""));function d(){return(l.state||{idx:null}).idx}function f(){a="POP";let S=d(),h=S==null?null:S-c;c=S,u&&u({action:a,location:v.location,delta:h})}function g(S,h){a="PUSH";let p=Jl(v.location,S,h);c=d()+1;let m=xu(p,c),E=v.createHref(p);try{l.pushState(m,"",E)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(E)}i&&u&&u({action:a,location:v.location,delta:1})}function w(S,h){a="REPLACE";let p=Jl(v.location,S,h);c=d();let m=xu(p,c),E=v.createHref(p);l.replaceState(m,"",E),i&&u&&u({action:a,location:v.location,delta:0})}function y(S){return Rh(S)}let v={get action(){return a},get location(){return e(o,l)},listen(S){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(vu,f),u=S,()=>{o.removeEventListener(vu,f),u=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let h=y(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:w,go(S){return l.go(S)}};return v}function Rh(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),q(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:br(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Zd(e,t,n="/"){return bh(e,t,n,!1)}function bh(e,t,n,r){let o=typeof t=="string"?Mn(t):t,i=ht(o.pathname||"/",n);if(i==null)return null;let l=ef(e);Ph(l);let a=null;for(let u=0;a==null&&u<l.length;++u){let c=Uh(i);a=Fh(l[u],c,r)}return a}function ef(e,t=[],n=[],r="",o=!1){let i=(l,a,u=o,c)=>{let d={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:a,route:l};if(d.relativePath.startsWith("/")){if(!d.relativePath.startsWith(r)&&u)return;q(d.relativePath.startsWith(r),`Absolute route path "${d.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),d.relativePath=d.relativePath.slice(r.length)}let f=ct([r,d.relativePath]),g=n.concat(d);l.children&&l.children.length>0&&(q(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),ef(l.children,t,g,f,u)),!(l.path==null&&!l.index)&&t.push({path:f,score:Ah(f,l.index),routesMeta:g})};return e.forEach((l,a)=>{var u;if(l.path===""||!((u=l.path)!=null&&u.includes("?")))i(l,a);else for(let c of tf(l.path))i(l,a,!0,c)}),t}function tf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=tf(r.join("/")),a=[];return a.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ph(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Mh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Th=/^:[\w-]+$/,_h=3,Lh=2,zh=1,Oh=10,Dh=-2,wu=e=>e==="*";function Ah(e,t){let n=e.split("/"),r=n.length;return n.some(wu)&&(r+=Dh),t&&(r+=Lh),n.filter(o=>!wu(o)).reduce((o,i)=>o+(Th.test(i)?_h:i===""?zh:Oh),r)}function Mh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Fh(e,t,n=!1){let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",f=Xo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),g=u.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Xo({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:ct([i,f.pathname]),pathnameBase:Vh(ct([i,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(i=ct([i,f.pathnameBase]))}return l}function Xo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ih(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,{paramName:d,isOptional:f},g)=>{if(d==="*"){let y=a[g]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const w=a[g];return f&&!w?c[d]=void 0:c[d]=(w||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:l,pattern:e}}function Ih(e,t=!1,n=!0){rt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Uh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return rt(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ht(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var Bh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function $h(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Mn(e):e,i;return n?(n=n.replace(/\/\/+/g,"/"),n.startsWith("/")?i=ku(n.substring(1),"/"):i=ku(n,t)):i=t,{pathname:i,search:Wh(r),hash:Yh(o)}}function ku(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Xi(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Hh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function nf(e){let t=Hh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function rf(e,t,n,r=!1){let o;typeof e=="string"?o=Mn(e):(o={...e},q(!o.pathname||!o.pathname.includes("?"),Xi("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),Xi("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),Xi("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}a=f>=0?t[f]:"/"}let u=$h(o,a),c=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}var ct=e=>e.join("/").replace(/\/\/+/g,"/"),Vh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Wh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Yh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Qh=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function qh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Kh(e){return e.map(t=>t.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var of=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function lf(e,t){let n=e;if(typeof n!="string"||!Bh.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(of)try{let i=new URL(window.location.href),l=n.startsWith("//")?new URL(i.protocol+n):new URL(n),a=ht(l.pathname,t);l.origin===i.origin&&a!=null?n=a+l.search+l.hash:o=!0}catch{rt(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var af=["POST","PUT","PATCH","DELETE"];new Set(af);var Jh=["GET",...af];new Set(Jh);var Fn=x.createContext(null);Fn.displayName="DataRouter";var yi=x.createContext(null);yi.displayName="DataRouterState";var Xh=x.createContext(!1),sf=x.createContext({isTransitioning:!1});sf.displayName="ViewTransition";var Gh=x.createContext(new Map);Gh.displayName="Fetchers";var Zh=x.createContext(null);Zh.displayName="Await";var Fe=x.createContext(null);Fe.displayName="Navigation";var Or=x.createContext(null);Or.displayName="Location";var ot=x.createContext({outlet:null,matches:[],isDataRoute:!1});ot.displayName="Route";var Ja=x.createContext(null);Ja.displayName="RouteError";var uf="REACT_ROUTER_ERROR",eg="REDIRECT",tg="ROUTE_ERROR_RESPONSE";function ng(e){if(e.startsWith(`${uf}:${eg}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function rg(e){if(e.startsWith(`${uf}:${tg}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Qh(t.status,t.statusText,t.data)}catch{}}function og(e,{relative:t}={}){q(Dr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(Fe),{hash:o,pathname:i,search:l}=Ar(e,{relative:t}),a=i;return n!=="/"&&(a=i==="/"?n:ct([n,i])),r.createHref({pathname:a,search:l,hash:o})}function Dr(){return x.useContext(Or)!=null}function Ft(){return q(Dr(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Or).location}var cf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function df(e){x.useContext(Fe).static||x.useLayoutEffect(e)}function In(){let{isDataRoute:e}=x.useContext(ot);return e?vg():ig()}function ig(){q(Dr(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Fn),{basename:t,navigator:n}=x.useContext(Fe),{matches:r}=x.useContext(ot),{pathname:o}=Ft(),i=JSON.stringify(nf(r)),l=x.useRef(!1);return df(()=>{l.current=!0}),x.useCallback((u,c={})=>{if(rt(l.current,cf),!l.current)return;if(typeof u=="number"){n.go(u);return}let d=rf(u,JSON.parse(i),o,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ct([t,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[t,n,i,o,e])}x.createContext(null);function lg(){let{matches:e}=x.useContext(ot),t=e[e.length-1];return t?t.params:{}}function Ar(e,{relative:t}={}){let{matches:n}=x.useContext(ot),{pathname:r}=Ft(),o=JSON.stringify(nf(n));return x.useMemo(()=>rf(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function ag(e,t){return ff(e,t)}function ff(e,t,n,r,o){var p;q(Dr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=x.useContext(Fe),{matches:l}=x.useContext(ot),a=l[l.length-1],u=a?a.params:{},c=a?a.pathname:"/",d=a?a.pathnameBase:"/",f=a&&a.route;{let m=f&&f.path||"";mf(c,!f||m.endsWith("*")||m.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${m}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${m}"> to <Route path="${m==="/"?"*":`${m}/*`}">.`)}let g=Ft(),w;if(t){let m=typeof t=="string"?Mn(t):t;q(d==="/"||((p=m.pathname)==null?void 0:p.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${m.pathname}" was given in the \`location\` prop.`),w=m}else w=g;let y=w.pathname||"/",v=y;if(d!=="/"){let m=d.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(m.length).join("/")}let S=Zd(e,{pathname:v});rt(f||S!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),rt(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=fg(S&&S.map(m=>Object.assign({},m,{params:Object.assign({},u,m.params),pathname:ct([d,i.encodeLocation?i.encodeLocation(m.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?d:ct([d,i.encodeLocation?i.encodeLocation(m.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:m.pathnameBase])})),l,n,r,o);return t&&h?x.createElement(Or.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},h):h}function sg(){let e=yg(),t=qh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},i={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:i},"ErrorBoundary")," or"," ",x.createElement("code",{style:i},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:o},n):null,l)}var ug=x.createElement(sg,null),pf=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=rg(e.digest);n&&(e=n)}let t=e!==void 0?x.createElement(ot.Provider,{value:this.props.routeContext},x.createElement(Ja.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?x.createElement(cg,{error:e},t):t}};pf.contextType=Xh;var Gi=new WeakMap;function cg({children:e,error:t}){let{basename:n}=x.useContext(Fe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=ng(t.digest);if(r){let o=Gi.get(t);if(o)throw o;let i=lf(r.location,n);if(of&&!Gi.get(t))if(i.isExternal||r.reloadDocument)window.location.href=i.absoluteURL||i.to;else{const l=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:r.replace}));throw Gi.set(t,l),l}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${i.absoluteURL||i.to}`})}}return e}function dg({routeContext:e,match:t,children:n}){let r=x.useContext(Fn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(ot.Provider,{value:e},n)}function fg(e,t=[],n=null,r=null,o=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,l=n==null?void 0:n.errors;if(l!=null){let d=i.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);q(d>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),i=i.slice(0,Math.min(i.length,d+1))}let a=!1,u=-1;if(n)for(let d=0;d<i.length;d++){let f=i[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:g,errors:w}=n,y=f.route.loader&&!g.hasOwnProperty(f.route.id)&&(!w||w[f.route.id]===void 0);if(f.route.lazy||y){a=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}let c=n&&r?(d,f)=>{var g,w;r(d,{location:n.location,params:((w=(g=n.matches)==null?void 0:g[0])==null?void 0:w.params)??{},unstable_pattern:Kh(n.matches),errorInfo:f})}:void 0;return i.reduceRight((d,f,g)=>{let w,y=!1,v=null,S=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||ug,a&&(u<0&&g===0?(mf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,S=null):u===g&&(y=!0,S=f.route.hydrateFallbackElement||null)));let h=t.concat(i.slice(0,g+1)),p=()=>{let m;return w?m=v:y?m=S:f.route.Component?m=x.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=d,x.createElement(dg,{match:f,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?x.createElement(pf,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:c}):p()},null)}function Xa(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pg(e){let t=x.useContext(Fn);return q(t,Xa(e)),t}function mg(e){let t=x.useContext(yi);return q(t,Xa(e)),t}function hg(e){let t=x.useContext(ot);return q(t,Xa(e)),t}function Ga(e){let t=hg(e),n=t.matches[t.matches.length-1];return q(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function gg(){return Ga("useRouteId")}function yg(){var r;let e=x.useContext(Ja),t=mg("useRouteError"),n=Ga("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function vg(){let{router:e}=pg("useNavigate"),t=Ga("useNavigate"),n=x.useRef(!1);return df(()=>{n.current=!0}),x.useCallback(async(o,i={})=>{rt(n.current,cf),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...i}))},[e,t])}var Su={};function mf(e,t,n){!t&&!Su[e]&&(Su[e]=!0,rt(!1,n))}x.memo(xg);function xg({routes:e,future:t,state:n,onError:r}){return ff(e,void 0,n,r,t)}function an(e){q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wg({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:i=!1,unstable_useTransitions:l}){q(!Dr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:a,navigator:o,static:i,unstable_useTransitions:l,future:{}}),[a,o,i,l]);typeof n=="string"&&(n=Mn(n));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:w="default"}=n,y=x.useMemo(()=>{let v=ht(c,a);return v==null?null:{location:{pathname:v,search:d,hash:f,state:g,key:w},navigationType:r}},[a,c,d,f,g,w,r]);return rt(y!=null,`<Router basename="${a}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:x.createElement(Fe.Provider,{value:u},x.createElement(Or.Provider,{children:t,value:y}))}function kg({children:e,location:t}){return ag(Xl(e),t)}function Xl(e,t=[]){let n=[];return x.Children.forEach(e,(r,o)=>{if(!x.isValidElement(r))return;let i=[...t,o];if(r.type===x.Fragment){n.push.apply(n,Xl(r.props.children,i));return}q(r.type===an,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),q(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xl(r.props.children,i)),n.push(l)}),n}var So="get",Eo="application/x-www-form-urlencoded";function vi(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function Sg(e){return vi(e)&&e.tagName.toLowerCase()==="button"}function Eg(e){return vi(e)&&e.tagName.toLowerCase()==="form"}function jg(e){return vi(e)&&e.tagName.toLowerCase()==="input"}function Cg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ng(e,t){return e.button===0&&(!t||t==="_self")&&!Cg(e)}var ao=null;function Rg(){if(ao===null)try{new FormData(document.createElement("form"),0),ao=!1}catch{ao=!0}return ao}var bg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zi(e){return e!=null&&!bg.has(e)?(rt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Eo}"`),null):e}function Pg(e,t){let n,r,o,i,l;if(Eg(e)){let a=e.getAttribute("action");r=a?ht(a,t):null,n=e.getAttribute("method")||So,o=Zi(e.getAttribute("enctype"))||Eo,i=new FormData(e)}else if(Sg(e)||jg(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||a.getAttribute("action");if(r=u?ht(u,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||So,o=Zi(e.getAttribute("formenctype"))||Zi(a.getAttribute("enctype"))||Eo,i=new FormData(a,e),!Rg()){let{name:c,type:d,value:f}=e;if(d==="image"){let g=c?`${c}.`:"";i.append(`${g}x`,"0"),i.append(`${g}y`,"0")}else c&&i.append(c,f)}}else{if(vi(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=So,r=null,o=Eo,l=e}return i&&o==="text/plain"&&(l=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Za(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tg(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&ht(o.pathname,t)==="/"?o.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function _g(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Lg(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function zg(e,t,n){let r=await Promise.all(e.map(async o=>{let i=t.routes[o.route.id];if(i){let l=await _g(i,n);return l.links?l.links():[]}return[]}));return Mg(r.flat(1).filter(Lg).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Eu(e,t,n,r,o,i){let l=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var d;return n[c].pathname!==u.pathname||((d=n[c].route.path)==null?void 0:d.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return i==="assets"?t.filter((u,c)=>l(u,c)||a(u,c)):i==="data"?t.filter((u,c)=>{var f;let d=r.routes[u.route.id];if(!d||!d.hasLoader)return!1;if(l(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Og(e,t,{includeHydrateFallback:n}={}){return Dg(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let i=[o.module];return o.clientActionModule&&(i=i.concat(o.clientActionModule)),o.clientLoaderModule&&(i=i.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(i=i.concat(o.hydrateFallbackModule)),o.imports&&(i=i.concat(o.imports)),i}).flat(1))}function Dg(e){return[...new Set(e)]}function Ag(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Mg(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let i=JSON.stringify(Ag(o));return n.has(i)||(n.add(i),r.push({key:i,link:o})),r},[])}function hf(){let e=x.useContext(Fn);return Za(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Fg(){let e=x.useContext(yi);return Za(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var es=x.createContext(void 0);es.displayName="FrameworkContext";function gf(){let e=x.useContext(es);return Za(e,"You must render this element inside a <HydratedRouter> element"),e}function Ig(e,t){let n=x.useContext(es),[r,o]=x.useState(!1),[i,l]=x.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let v=h=>{h.forEach(p=>{l(p.isIntersecting)})},S=new IntersectionObserver(v,{threshold:.5});return g.current&&S.observe(g.current),()=>{S.disconnect()}}},[e]),x.useEffect(()=>{if(r){let v=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(v)}}},[r]);let w=()=>{o(!0)},y=()=>{o(!1),l(!1)};return n?e!=="intent"?[i,g,{}]:[i,g,{onFocus:Jn(a,w),onBlur:Jn(u,y),onMouseEnter:Jn(c,w),onMouseLeave:Jn(d,y),onTouchStart:Jn(f,w)}]:[!1,g,{}]}function Jn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ug({page:e,...t}){let{router:n}=hf(),r=x.useMemo(()=>Zd(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?x.createElement($g,{page:e,matches:r,...t}):null}function Bg(e){let{manifest:t,routeModules:n}=gf(),[r,o]=x.useState([]);return x.useEffect(()=>{let i=!1;return zg(e,t,n).then(l=>{i||o(l)}),()=>{i=!0}},[e,t,n]),r}function $g({page:e,matches:t,...n}){let r=Ft(),{future:o,manifest:i,routeModules:l}=gf(),{basename:a}=hf(),{loaderData:u,matches:c}=Fg(),d=x.useMemo(()=>Eu(e,t,c,i,r,"data"),[e,t,c,i,r]),f=x.useMemo(()=>Eu(e,t,c,i,r,"assets"),[e,t,c,i,r]),g=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,S=!1;if(t.forEach(p=>{var E;let m=i.routes[p.route.id];!m||!m.hasLoader||(!d.some(j=>j.route.id===p.route.id)&&p.route.id in u&&((E=l[p.route.id])!=null&&E.shouldRevalidate)||m.hasClientLoader?S=!0:v.add(p.route.id))}),v.size===0)return[];let h=Tg(e,a,o.unstable_trailingSlashAwareDataRequests,"data");return S&&v.size>0&&h.searchParams.set("_routes",t.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[h.pathname+h.search]},[a,o.unstable_trailingSlashAwareDataRequests,u,r,i,d,t,e,l]),w=x.useMemo(()=>Og(f,i),[f,i]),y=Bg(f);return x.createElement(x.Fragment,null,g.map(v=>x.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),w.map(v=>x.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),y.map(({key:v,link:S})=>x.createElement("link",{key:v,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function Hg(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Vg&&(window.__reactRouterVersion="7.13.0")}catch{}function Wg({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=x.useRef();o.current==null&&(o.current=jh({window:r,v5Compat:!0}));let i=o.current,[l,a]=x.useState({action:i.action,location:i.location}),u=x.useCallback(c=>{n===!1?a(c):x.startTransition(()=>a(c))},[n]);return x.useLayoutEffect(()=>i.listen(u),[i,u]),x.createElement(wg,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:i,unstable_useTransitions:n})}var yf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ve=x.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:i,replace:l,state:a,target:u,to:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:g,...w},y){let{basename:v,unstable_useTransitions:S}=x.useContext(Fe),h=typeof c=="string"&&yf.test(c),p=lf(c,v);c=p.to;let m=og(c,{relative:o}),[E,j,R]=Ig(r,w),N=Kg(c,{replace:l,state:a,target:u,preventScrollReset:d,relative:o,viewTransition:f,unstable_defaultShouldRevalidate:g,unstable_useTransitions:S});function T(L){t&&t(L),L.defaultPrevented||N(L)}let A=x.createElement("a",{...w,...R,href:p.absoluteURL||m,onClick:p.isExternal||i?t:T,ref:Hg(y,j),target:u,"data-discover":!h&&n==="render"?"true":void 0});return E&&!h?x.createElement(x.Fragment,null,A,x.createElement(Ug,{page:m})):A});Ve.displayName="Link";var Yg=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:i,to:l,viewTransition:a,children:u,...c},d){let f=Ar(l,{relative:c.relative}),g=Ft(),w=x.useContext(yi),{navigator:y,basename:v}=x.useContext(Fe),S=w!=null&&e0(f)&&a===!0,h=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,p=g.pathname,m=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;n||(p=p.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&v&&(m=ht(m,v)||m);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let j=p===h||!o&&p.startsWith(h)&&p.charAt(E)==="/",R=m!=null&&(m===h||!o&&m.startsWith(h)&&m.charAt(h.length)==="/"),N={isActive:j,isPending:R,isTransitioning:S},T=j?t:void 0,A;typeof r=="function"?A=r(N):A=[r,j?"active":null,R?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let L=typeof i=="function"?i(N):i;return x.createElement(Ve,{...c,"aria-current":T,className:A,ref:d,style:L,to:l,viewTransition:a},typeof u=="function"?u(N):u)});Yg.displayName="NavLink";var Qg=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:i,method:l=So,action:a,onSubmit:u,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:g,...w},y)=>{let{unstable_useTransitions:v}=x.useContext(Fe),S=Gg(),h=Zg(a,{relative:c}),p=l.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&yf.test(a),E=j=>{if(u&&u(j),j.defaultPrevented)return;j.preventDefault();let R=j.nativeEvent.submitter,N=(R==null?void 0:R.getAttribute("formmethod"))||l,T=()=>S(R||j.currentTarget,{fetcherKey:t,method:N,navigate:n,replace:o,state:i,relative:c,preventScrollReset:d,viewTransition:f,unstable_defaultShouldRevalidate:g});v&&n!==!1?x.startTransition(()=>T()):T()};return x.createElement("form",{ref:y,method:p,action:h,onSubmit:r?u:E,...w,"data-discover":!m&&e==="render"?"true":void 0})});Qg.displayName="Form";function qg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vf(e){let t=x.useContext(Fn);return q(t,qg(e)),t}function Kg(e,{target:t,replace:n,state:r,preventScrollReset:o,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:a,unstable_useTransitions:u}={}){let c=In(),d=Ft(),f=Ar(e,{relative:i});return x.useCallback(g=>{if(Ng(g,t)){g.preventDefault();let w=n!==void 0?n:br(d)===br(f),y=()=>c(e,{replace:w,state:r,preventScrollReset:o,relative:i,viewTransition:l,unstable_defaultShouldRevalidate:a});u?x.startTransition(()=>y()):y()}},[d,c,f,n,r,t,e,o,i,l,a,u])}var Jg=0,Xg=()=>`__${String(++Jg)}__`;function Gg(){let{router:e}=vf("useSubmit"),{basename:t}=x.useContext(Fe),n=gg(),r=e.fetch,o=e.navigate;return x.useCallback(async(i,l={})=>{let{action:a,method:u,encType:c,formData:d,body:f}=Pg(i,t);if(l.navigate===!1){let g=l.fetcherKey||Xg();await r(g,n,l.action||a,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:d,body:f,formMethod:l.method||u,formEncType:l.encType||c,flushSync:l.flushSync})}else await o(l.action||a,{unstable_defaultShouldRevalidate:l.unstable_defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:d,body:f,formMethod:l.method||u,formEncType:l.encType||c,replace:l.replace,state:l.state,fromRouteId:n,flushSync:l.flushSync,viewTransition:l.viewTransition})},[r,o,t,n])}function Zg(e,{relative:t}={}){let{basename:n}=x.useContext(Fe),r=x.useContext(ot);q(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),i={...Ar(e||".",{relative:t})},l=Ft();if(e==null){i.search=l.search;let a=new URLSearchParams(i.search),u=a.getAll("index");if(u.some(d=>d==="")){a.delete("index"),u.filter(f=>f).forEach(f=>a.append("index",f));let d=a.toString();i.search=d?`?${d}`:""}}return(!e||e===".")&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(i.pathname=i.pathname==="/"?n:ct([n,i.pathname])),br(i)}function e0(e,{relative:t}={}){let n=x.useContext(sf);q(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=vf("useViewTransitionState"),o=Ar(e,{relative:t});if(!n.isTransitioning)return!1;let i=ht(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=ht(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xo(o.pathname,l)!=null||Xo(o.pathname,i)!=null}const Un=x.createContext(),t0=({children:e})=>{const[t,n]=x.useState(null),[r,o]=x.useState(!0);x.useEffect(()=>{(async()=>{const u=localStorage.getItem("user"),c=localStorage.getItem("token");if(u&&c)try{const d=JSON.parse(u);n(d);const f=await fetch("http://localhost:5000/api/users/me",{headers:{Authorization:`Bearer ${c}`}});if(f.ok){const w={...await f.json(),token:c};n(w),localStorage.setItem("user",JSON.stringify(w))}else f.status===401&&(localStorage.removeItem("user"),localStorage.removeItem("token"),n(null))}catch(d){console.error("Failed to sync user",d)}o(!1)})()},[]);const i=(a,u)=>{localStorage.setItem("user",JSON.stringify(a)),localStorage.setItem("token",u),n(a)},l=()=>{localStorage.removeItem("user"),localStorage.removeItem("token"),n(null)};return s.jsx(Un.Provider,{value:{user:t,login:i,logout:l,loading:r},children:e})};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xf=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=x.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:l,...a},u)=>x.createElement("svg",{ref:u,...r0,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:xf("lucide",o),...a},[...l.map(([c,d])=>x.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=(e,t)=>{const n=x.forwardRef(({className:r,...o},i)=>x.createElement(o0,{ref:i,iconNode:t,className:xf(`lucide-${n0(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=U("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=U("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=U("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=U("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=U("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=U("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=U("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=U("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=U("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=U("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=U("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=U("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=U("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=U("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=U("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=U("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=U("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=U("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=U("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=U("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=U("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=U("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=U("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=U("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=U("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=U("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=U("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Go=({isScrolled:e})=>{var f;const[t,n]=x.useState(!1),[r,o]=x.useState(null),{user:i,logout:l}=x.useContext(Un),a=In(),u=[{name:"About",type:"dropdown",items:[{name:"About Event",href:"/#about"},{name:"About Department",href:"/#about-department"}]},{name:"Event Details",href:"/#event-details"},{name:"Schedule",href:"/#schedule"},{name:"Coordinators",type:"dropdown",items:[{name:"Faculty",href:"/coordinators?tab=faculty"},{name:"Core Team",href:"/coordinators?tab=team"},{name:"Volunteers",href:"/coordinators?tab=volunteers"}]},{name:"Rules",href:"/#rules"},{name:"Contact",href:"/#contact"}],c=()=>{l(),n(!1),a("/")},d=g=>{window.innerWidth<=1024&&o(r===g?null:g)};return s.jsxs("nav",{className:`navbar ${e?"scrolled glass":""} ${t?"open":""}`,children:[s.jsxs("div",{className:"container nav-container",children:[s.jsxs(Ve,{to:"/",className:"logo",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:[s.jsx("img",{src:"/logo.png",alt:"Logo",className:"nav-logo"}),s.jsx("img",{src:"/NAAC.png",alt:"NAAC",className:"nav-logo"}),s.jsx("img",{src:"/UGC.png",alt:"UGC",className:"ugc"}),s.jsxs("span",{children:[s.jsx("span",{className:"gradient-text",children:"HACK"}),"OVER"]})]}),s.jsxs("div",{className:`nav-links ${t?"active":""}`,children:[u.map(g=>s.jsx("div",{className:`nav-item ${g.type==="dropdown"?"dropdown":""}`,children:g.type==="dropdown"?s.jsxs(s.Fragment,{children:[s.jsxs("button",{className:"nav-link dropdown-trigger",onClick:()=>d(g.name),"aria-expanded":r===g.name,children:[g.name,s.jsx(u0,{size:16,className:`chevron ${r===g.name?"rotate":""}`})]}),s.jsx("div",{className:`dropdown-menu ${r===g.name?"show-mobile":""}`,children:g.items.map(w=>s.jsx("a",{href:w.href,className:"dropdown-item",onClick:()=>n(!1),children:w.name},w.name))})]}):s.jsx("a",{href:g.href,className:"nav-link",onClick:()=>n(!1),children:g.name})},g.name)),s.jsx("div",{className:"auth-buttons-mobile",children:i?s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center"},children:s.jsxs("button",{className:"nav-link cta-link",onClick:c,children:[s.jsx(ju,{size:18})," Logout"]})}):s.jsxs(s.Fragment,{children:[s.jsx(Ve,{to:"/login",className:"nav-link",onClick:()=>n(!1),children:"Login"}),s.jsx(Ve,{to:"/signup",className:"nav-link cta-link",onClick:()=>n(!1),children:"Sign Up"})]})})]}),s.jsx("div",{className:"desktop-auth",children:i?s.jsxs("div",{className:"user-menu",children:[s.jsxs("span",{className:"user-name",children:["Hi, ",((f=i.name)==null?void 0:f.split(" ")[0])||"User"]}),s.jsx("button",{className:"logout-btn",onClick:c,children:s.jsx(ju,{size:20})})]}):s.jsxs("div",{className:"auth-buttons",children:[s.jsx(Ve,{to:"/login",className:"login-link",children:"Login"}),s.jsx(Ve,{to:"/signup",className:"btn btn-primary btn-sm",children:"Sign Up"})]})}),s.jsx("button",{className:"mobile-toggle",onClick:()=>n(!t),children:t?s.jsx(rs,{size:28}):s.jsx(m0,{size:28})})]}),s.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--nav-height);
          display: flex;
          align-items: center;
          z-index: 1000;
          transition: var(--transition);
          padding: 0 5%;
        }

        .navbar.scrolled {
          height: 70px;
          border-bottom: 1px solid var(--glass-border);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (min-width: 1920px) {
           .nav-container {
              max-width: 1600px;
           }
           .logo {
              font-size: 2.5rem;
           }
           .nav-link, .dropdown-item {
              font-size: 1.2rem;
           }
           .nav-logo {
              height: 60px;
           }
        }
           
        @media (min-width: 2560px) {
           .nav-container {
              max-width: 2000px;
           }
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -1px;
          display: flex;
          align-items: center;
          gap: 1px;
          text-decoration: none;
          color: var(--text-main);
          margin-left: -40px;
        }

        .nav-logo {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
          .ugc {
            height: 50px;
            width: auto;
            object-fit: contain;
          }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-item {
            position: relative;
        }

        .nav-link {
          font-weight: 500;
          color: var(--text-muted);
          font-size: 0.95rem;
          position: relative;
          background: none;
          padding: 0;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link:hover, .nav-link:focus, .dropdown-item:hover {
          color: var(--text-main);
        }

        .nav-link:not(.dropdown-trigger)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: var(--transition);
        }

        .nav-link:not(.dropdown-trigger):hover::after {
          width: 100%;
        }

        /* Dropdown Styles */
        .dropdown-trigger {
            cursor: pointer;
        }

        .chevron {
            transition: transform 0.3s ease;
        }

        .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 10px;
            min-width: 200px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            gap: 5px;
        }

        .dropdown-item {
            padding: 10px 16px;
            color: var(--text-muted);
            white-space: nowrap;
            border-radius: 8px;
            transition: var(--transition);
            display: block;
            width: 100%;
            text-align: left;
        }

        .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.05);
            color: var(--primary-color);
            padding-left: 20px;
        }

        /* Desktop Hover Effect */
        @media (min-width: 1025px) {
            .nav-item.dropdown:hover .dropdown-menu {
                opacity: 1;
                visibility: visible;
                transform: translateX(-50%) translateY(0);
                top: calc(100% + 15px);
            }
            /* Bridge to prevent closing when moving mouse from trigger to menu */
            .nav-item.dropdown::before {
                content: '';
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 20px;
            }
        }

        .nav-cta {
          padding: 10px 24px;
          font-size: 0.9rem;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          color: var(--text-main);
        }

        @media (max-width: 1024px) {
          .nav-links {
            position: fixed;
            top: var(--nav-height);
            left: -100%;
            flex-direction: column;
            background: var(--bg-darker);
            width: 100%;
            height: calc(100vh - var(--nav-height));
            padding: 40px 0;
            transition: var(--transition);
            z-index: 999;
            overflow-y: auto;
          }

          .nav-links.active {
            left: 0;
          }

          .mobile-toggle {
            display: block;
          }
          
          .nav-link {
            font-size: 1.2rem;
            justify-content: center;
          }

          .desktop-auth {
             display: none;
          }
          
          .auth-buttons-mobile {
              display: flex;
              flex-direction: column;
              gap: 20px;
              margin-top: 20px;
              align-items: center;
          }

          /* Mobile Dropdown */
          .nav-item {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
          }

          .dropdown-menu {
              position: static;
              background: transparent;
              border: none;
              box-shadow: none;
              transform: none;
              opacity: 1;
              visibility: visible;
              display: none;
              width: 100%;
              align-items: center;
              padding: 10px 0;
              backdrop-filter: none;
          }

          .dropdown-menu.show-mobile {
              display: flex;
              animation: slideDown 0.3s ease forwards;
          }

          .dropdown-item {
              text-align: center;
              font-size: 1.1rem;
              padding: 10px;
              color: var(--text-muted);
          }

          .dropdown-item:hover {
              background: transparent;
              color: var(--primary-color);
              padding-left: 10px;
          }

          .chevron.rotate {
              transform: rotate(180deg);
          }
          
          @keyframes slideDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
          }
        }

        .desktop-auth {
            margin-left: 20px;
        }

        .auth-buttons {
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .login-link {
             color: var(--text-muted);
             font-weight: 500;
             transition: var(--transition);
        }

        .login-link:hover {
            color: white;
        }

        .user-menu {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .user-name {
            font-size: 0.9rem;
            color: var(--primary-color);
            font-weight: 600;
        }

        .btn-sm {
            padding: 8px 16px;
            font-size: 0.85rem;
        }
        
        .auth-buttons-mobile {
            display: none;
        }
        
        .logout-btn {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            transition: var(--transition);
        }

        .logout-btn:hover {
            color: var(--primary-color);
        }

        @media (max-width: 1024px) {
            .auth-buttons-mobile {
                display: flex;
            }
            
            .logo {
               margin-left: 0;
               font-size: 1.4rem;
               gap: 2px;
            }

            .nav-logo {
               height: 30px;
            }

            .ugc {
               height: 40px;
            }
        }
      `})]})},w0=()=>{const[e,t]=x.useState({days:0,hours:0,minutes:0,seconds:0});return x.useEffect(()=>{const n=new Date("2026-02-16T00:00:00"),r=setInterval(()=>{const i=n-new Date;i<=0?clearInterval(r):t({days:Math.floor(i/(1e3*60*60*24)),hours:Math.floor(i/(1e3*60*60)%24),minutes:Math.floor(i/1e3/60%60),seconds:Math.floor(i/1e3%60)})},1e3);return()=>clearInterval(r)},[]),s.jsxs("section",{id:"home",className:"home-section",children:[s.jsx("div",{className:"hero-glow"}),s.jsxs("div",{className:"container hero-container",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("div",{className:"hero-badge",children:"Registration Open 2026"}),s.jsxs("h1",{className:"hero-title",children:["Unleash Your ",s.jsx("span",{className:"gradient-text",children:"Creativity"})," ",s.jsx("br",{}),"at Hackover 2026"]}),s.jsx("p",{className:"hero-subtitle",children:"text have to added"}),s.jsxs("div",{className:"hero-btns",children:[s.jsx("a",{href:"#event-details",className:"btn btn-primary",children:"Event Details"}),s.jsx("a",{href:"#about",className:"btn btn-outline",children:"Learn More"})]}),s.jsxs("div",{className:"countdown",children:[s.jsxs("div",{className:"countdown-item",children:[s.jsx("span",{className:"count",children:e.days}),s.jsx("span",{className:"label",children:"Days"})]}),s.jsxs("div",{className:"countdown-item",children:[s.jsx("span",{className:"count",children:e.hours}),s.jsx("span",{className:"label",children:"Hours"})]}),s.jsxs("div",{className:"countdown-item",children:[s.jsx("span",{className:"count",children:e.minutes}),s.jsx("span",{className:"label",children:"Minutes"})]}),s.jsxs("div",{className:"countdown-item",children:[s.jsx("span",{className:"count",children:e.seconds}),s.jsx("span",{className:"label",children:"Seconds"})]})]})]}),s.jsxs("div",{className:"hero-highlights",children:[s.jsxs("div",{className:"highlight-card glass",children:[s.jsx(s0,{className:"highlight-icon"}),s.jsxs("div",{className:"highlight-info",children:[s.jsx("h3",{children:"Date"}),s.jsx("p",{children:"February 16-20, 2026"})]})]}),s.jsxs("div",{className:"highlight-card glass",children:[s.jsx(ns,{className:"highlight-icon"}),s.jsxs("div",{className:"highlight-info",children:[s.jsx("h3",{children:"Venue"}),s.jsx("p",{children:" Department of Computer Application (UIET-4), CSJMU"})]})]})]})]}),s.jsx("style",{children:`
        .home-section {
          min-height: 100vh;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: calc(var(--nav-height) + 40px);
          padding-bottom: 80px;
          position: relative;
        }

        .hero-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-block;
          padding: 6px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid var(--primary-color);
          border-radius: 20px;
          color: var(--primary-glow);
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 40px;
        }

        .hero-btns {
          display: flex;
          gap: 20px;
          margin-bottom: 60px;
        }

        .countdown {
          display: flex;
          gap: 30px;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .count {
          font-size: 2.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          color: var(--text-main);
        }

        .label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .hero-highlights {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .highlight-card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .highlight-card:hover {
          transform: translateX(10px);
          background: rgba(30, 41, 59, 0.9);
        }

        .highlight-icon {
          color: var(--primary-color);
          width: 32px;
          height: 32px;
        }

        .highlight-info h3 {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .highlight-info p {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .sponsors-container {
          margin-top: 80px;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .sponsors-label {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--text-muted);
          margin-bottom: 30px;
          opacity: 0.7;
        }

        .sponsors-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .sponsor-logo {
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-muted);
          opacity: 0.6;
          transition: var(--transition);
        }

        .sponsor-logo:hover {
          opacity: 1;
          color: white;
          border-color: var(--primary-color);
          transform: translateY(-5px);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-btns {
            justify-content: center;
          }

          .countdown {
            justify-content: center;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-highlights {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .countdown {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .count {
            font-size: 1.8rem;
          }

          .sponsors-grid {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
            line-height: 1.2;
          }

          .hero-badge {
            font-size: 0.75rem;
            padding: 4px 12px;
          }

          .hero-btns {
            flex-direction: column;
            width: 100%;
          }

          .hero-btns .btn {
            width: 100%;
          }

          .countdown {
            gap: 10px;
          }

          .count {
            font-size: 1.5rem;
          }

          .label {
            font-size: 0.7rem;
          }
        }

        @media (min-width: 1920px) {
          .hero-container {
             grid-template-columns: 1fr 0.8fr;
          }
          
          .hero-title {
            font-size: 5.5rem;
          }

          .hero-subtitle {
             font-size: 1.5rem;
             max-width: 800px;
          }

          .count {
             font-size: 3.5rem;
          }
        }
      `})]})},k0=()=>{const[e,t]=x.useState("event");x.useEffect(()=>{const o=()=>{window.location.hash==="#about-department"?t("department"):window.location.hash==="#about"&&t("event")};return o(),window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]);const n=[{icon:s.jsx(x0,{}),title:"Fast-Paced Innovation",desc:"Build solutions in 36 hours of non-stop hacking."},{icon:s.jsx(y0,{}),title:"Real World Problems",desc:"Tackle challenges provided by industry leaders."},{icon:s.jsx(v0,{}),title:"Expert Mentorship",desc:"Get guidance from 50+ mentors and judges."}],r=[{icon:s.jsx(a0,{}),title:"Excellence",desc:"State-of-the-art Infrastructure"},{icon:s.jsx(d0,{}),title:"Learning",desc:"Innovative Curriculum"},{icon:s.jsx(l0,{}),title:"Achievement",desc:"National Recognition"}];return s.jsxs("section",{id:"about",className:"section-padding",children:[s.jsxs("div",{className:"container",style:{position:"relative"},children:[s.jsx("div",{id:"about-department",style:{position:"absolute",top:"-100px",visibility:"hidden"}}),s.jsxs("div",{className:"section-header",children:[s.jsx("h2",{className:"section-title",children:e==="event"?"About Hackover":"About Department"}),s.jsxs("div",{className:"toggle-container glass",children:[s.jsx("button",{className:`toggle-btn ${e==="event"?"active":""}`,onClick:()=>t("event"),children:"Details"}),s.jsx("button",{className:`toggle-btn ${e==="department"?"active":""}`,onClick:()=>t("department"),children:"Department"})]})]}),e==="event"?s.jsxs("div",{className:"about-grid fade-in",children:[s.jsxs("div",{className:"about-text",children:[s.jsx("h3",{children:"Innovate, Code, and Transform"}),s.jsx("p",{children:"Hackover 2026 is the premier student-led hackathon designed to bring together the brightest minds to solve real-world problems. Join us for a weekend of creation, collaboration, and competition."}),s.jsx("p",{children:"Whether you are a seasoned developer or a first-time hacker, Hackover provides the platform, resources, and network you need to take your skills to the next level."})]}),s.jsx("div",{className:"about-cards",children:n.map((o,i)=>s.jsxs("div",{className:"about-card glass",children:[s.jsx("div",{className:"about-icon",children:o.icon}),s.jsxs("div",{className:"about-info",children:[s.jsx("h4",{children:o.title}),s.jsx("p",{children:o.desc})]})]},i))})]}):s.jsxs("div",{className:"about-grid fade-in",children:[s.jsxs("div",{className:"about-text",children:[s.jsx("h3",{children:"Department of Computer Application"}),s.jsx("p",{className:"dept-subtitle",children:"UIET, CSJMU Kanpur"}),s.jsx("p",{children:"The Department of Computer Application at UIET, CSJMU is dedicated to fostering technical excellence and innovation. We strive to provide a dynamic learning environment that empowers students to solve real-world challenges through technology."}),s.jsx("p",{children:"With a focus on practical application and research, our department has been a hub for upcoming tech leaders and developers."})]}),s.jsx("div",{className:"about-cards",children:r.map((o,i)=>s.jsxs("div",{className:"about-card glass",children:[s.jsx("div",{className:"about-icon",children:o.icon}),s.jsxs("div",{className:"about-info",children:[s.jsx("h4",{children:o.title}),s.jsx("p",{children:o.desc})]})]},i))})]})]}),s.jsx("style",{children:`
        .section-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-bottom: 60px;
        }
        
        .section-title {
            margin-bottom: 0;
        }

        .toggle-container {
            display: flex;
            padding: 5px;
            border-radius: 30px;
            gap: 5px;
        }

        .toggle-btn {
            padding: 8px 24px;
            border-radius: 25px;
            background: transparent;
            color: var(--text-muted);
            font-weight: 500;
            cursor: pointer;
            transition: var(--transition);
        }

        .toggle-btn.active {
            background: var(--primary-color);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .toggle-btn:not(.active):hover {
            color: var(--text-main);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .fade-in {
            animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .about-text h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--primary-glow);
        }
        
        .dept-subtitle {
            font-size: 1.2rem;
            color: var(--secondary-color);
            margin-bottom: 20px;
            font-weight: 600;
            display: block;
            margin-top: -10px;
        }

        .about-text p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .about-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-card {
          display: flex;
          gap: 20px;
          padding: 25px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .about-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .about-icon {
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.1);
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .about-info h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
        }

        .about-info p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
           .about-text h3 {
             font-size: 1.5rem;
           }

           .about-card {
             padding: 20px;
             gap: 15px;
           }
           
           .about-icon {
             width: 40px;
             height: 40px;
           }
        }

        @media (min-width: 1920px) {
          .about-text h3 {
             font-size: 3rem;
          }

          .about-text p {
             font-size: 1.4rem;
             max-width: 800px;
          }
          
          .about-card {
             padding: 40px;
          }
        }
      `})]})},S0=()=>{const e=In(),t=r=>{e(`/event/${r}`)},n=[{id:"dsa",icon:s.jsx(Ef,{}),title:"DSA Hackathon",desc:"Solve complex algorithmic problems and optimize solutions in this competitive programming challenge."},{id:"web",icon:s.jsx(jf,{}),title:"WEB Hackathon",desc:"Build responsive, dynamic, and innovative web applications in this full-stack development contest."},{id:"aptitude",icon:s.jsx(kf,{}),title:"Aptitude Test",desc:"Test your logical reasoning, quantitative ability, and problem-solving skills in this rapid-fire round."}];return s.jsxs("section",{id:"event-details",className:"section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Event Categories"}),s.jsx("p",{className:"section-desc",children:"Choose your track and start building. Each category has its own dedicated registration."}),s.jsx("div",{className:"categories-grid",children:n.map((r,o)=>s.jsxs("div",{className:"category-card glass",onClick:()=>t(r.id),style:{cursor:"pointer"},children:[s.jsx("div",{className:"category-icon-wrapper",children:r.icon}),s.jsx("h3",{children:r.title}),s.jsx("p",{children:r.desc}),s.jsx("button",{className:"btn btn-outline category-btn",onClick:i=>{i.stopPropagation(),t(r.id)},children:"View Details"}),s.jsx("div",{className:"category-hover-effect"})]},o))})]}),s.jsx("style",{children:`
        .section-desc {
          text-align: center;
          color: var(--text-muted);
          max-width: 600px;
          margin: 10px auto 50px;
          font-size: 1.1rem;
        }

        .categories-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          margin-top: 40px;
        }

        .category-card {
          flex: 1 1 300px; /* Grow, shrink, base width */
          max-width: 400px;
          width: 100%; /* Ensure it doesn't overflow container */
          padding: 40px;
          border-radius: 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .category-card:hover {
          transform: translateY(-10px);
          background: rgba(30, 41, 59, 0.9);
          border-color: var(--primary-color);
        }

        .category-icon-wrapper {
          color: var(--primary-color);
          width: 70px;
          height: 70px;
          margin: 0 auto 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 50%;
          transition: var(--transition);
        }

        .category-card:hover .category-icon-wrapper {
          background: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }

        .category-card h3 {
          font-size: 1.5rem;
          margin-bottom: 16px;
        }

        .category-card p {
          color: var(--text-muted);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .category-btn {
          font-size: 0.85rem;
          padding: 8px 20px;
          border-width: 1.5px;
          opacity: 0;
          transform: translateY(10px);
          transition: var(--transition);
          margin-top: auto;
        }

        .category-card:hover .category-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .category-hover-effect {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          transform: scaleX(0);
          transition: var(--transition);
          transform-origin: left;
        }

        .category-card:hover .category-hover-effect {
          transform: scaleX(1);
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
          }
          .category-btn {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .category-card {
            padding: 25px;
          }
          
          .category-icon-wrapper {
            width: 50px;
            height: 50px;
            margin-bottom: 16px;
          }
          
          .category-card h3 {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 1920px) {
           .category-card {
              padding: 60px;
           }
           
           .category-card h3 {
              font-size: 2rem;
           }

           .category-card p {
              font-size: 1.2rem;
           }
        }
      `})]})},E0=()=>{const e=[{time:"",title:"",desc:""}];return s.jsxs("section",{id:"schedule",className:"section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Event Schedule"}),s.jsx("div",{className:"timeline",children:e.map((t,n)=>s.jsxs("div",{className:"timeline-item",children:[s.jsx("div",{className:"timeline-dot"}),s.jsxs("div",{className:"timeline-content glass",children:[s.jsx("span",{className:"timeline-time",children:t.time}),s.jsx("h3",{children:t.title}),s.jsx("p",{children:t.desc})]})]},n))})]}),s.jsx("style",{children:`
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, var(--primary-color), var(--secondary-color), transparent);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 40px;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          background: var(--bg-darker);
          border: 4px solid var(--primary-color);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          box-shadow: 0 0 15px var(--primary-color);
        }

        .timeline-content {
          width: 45%;
          padding: 30px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .timeline-content:hover {
          transform: scale(1.02);
          border-color: var(--primary-color);
        }

        .timeline-time {
          display: inline-block;
          font-weight: 700;
          color: var(--primary-glow);
          margin-bottom: 10px;
          font-size: 0.9rem;
          letter-spacing: 1px;
        }

        .timeline-content h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
        }

        .timeline-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item, .timeline-item:nth-child(even) {
            flex-direction: row;
            justify-content: flex-start;
          }

          .timeline-dot {
            left: 30px;
          }

          .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px;
          }
        }

        @media (max-width: 480px) {
          .timeline::before {
            left: 20px;
          }
          
          .timeline-dot {
            left: 20px;
            width: 16px;
            height: 16px;
          }
          
          .timeline-content {
            width: calc(100% - 40px);
            margin-left: 40px;
            padding: 20px;
          }
          
          .timeline-content h3 {
            font-size: 1.1rem;
          }

          .timeline-item {
             margin-bottom: 30px;
          }
        }
        
        @media (min-width: 1920px) {
          .timeline {
             max-width: 1000px;
          }

          .timeline-content {
             padding: 40px;
          }
          
          .timeline-content h3 {
             font-size: 1.6rem;
          }
        }
      `})]})},j0=()=>{const e=[{title:"",desc:""}];return s.jsxs("section",{id:"rules",className:"section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Rules & Guidelines"}),s.jsxs("div",{className:"rules-grid",children:[s.jsxs("div",{className:"rules-sidebar glass",children:[s.jsx("div",{className:"rule-info-icon",children:s.jsx(f0,{size:40})}),s.jsx("h3",{children:"Read Carefully"}),s.jsx("p",{children:"Ensure you follow these rules to maintain a fair and competitive environment."}),s.jsxs("div",{className:"rules-stats",children:[s.jsxs("div",{className:"stat",children:[s.jsx("strong",{children:"100+"}),s.jsx("span",{children:"Participants"})]}),s.jsxs("div",{className:"stat",children:[s.jsx("strong",{children:"Fair"}),s.jsx("span",{children:"Play"})]})]})]}),s.jsx("div",{className:"rules-list",children:e.map((t,n)=>s.jsxs("div",{className:"rule-item glass",children:[s.jsxs("div",{className:"rule-number",children:["0",n+1]}),s.jsxs("div",{className:"rule-content",children:[s.jsx("h4",{children:t.title}),s.jsx("p",{children:t.desc})]})]},n))})]})]}),s.jsx("style",{children:`
        .rules-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          margin-top: 40px;
        }

        .rules-sidebar {
          padding: 40px;
          border-radius: 24px;
          height: fit-content;
          text-align: center;
        }

        .rule-info-icon {
          color: var(--primary-color);
          margin-bottom: 20px;
        }

        .rules-sidebar h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
        }

        .rules-sidebar p {
          color: var(--text-muted);
          margin-bottom: 30px;
        }

        .rules-stats {
          display: flex;
          justify-content: space-around;
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat strong {
          font-size: 1.5rem;
          color: white;
        }

        .stat span {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .rules-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .rule-item {
          display: flex;
          gap: 25px;
          padding: 25px;
          border-radius: 20px;
          transition: var(--transition);
        }

        .rule-item:hover {
          transform: translateX(10px);
          border-color: var(--primary-color);
        }

        .rule-number {
          font-size: 2rem;
          font-weight: 800;
          color: rgba(99, 102, 241, 0.2);
          font-family: var(--font-heading);
          line-height: 1;
        }

        .rule-content h4 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: var(--primary-glow);
        }

        .rule-content p {
          color: var(--text-muted);
          font-size: 0.95rem;
        }

        @media (max-width: 968px) {
          .rules-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
           .rules-sidebar {
             padding: 25px;
           }

           .rule-item {
             padding: 20px;
             gap: 15px;
           }

           .rule-number {
             font-size: 1.5rem;
           }
        }

        @media (min-width: 1920px) {
           .rules-sidebar {
              padding: 60px;
           }
           
           .rules-sidebar h3 {
              font-size: 2.5rem;
           }

           .rule-item {
              padding: 35px;
           }

           .rule-content h4 {
              font-size: 1.5rem;
           }
        }
      `})]})},C0=()=>s.jsxs("section",{id:"contact",className:"section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Get in Touch"}),s.jsxs("div",{className:"contact-grid",children:[s.jsxs("div",{className:"contact-info",children:[s.jsx("h3",{children:"Contact Information"}),s.jsx("p",{children:"Have questions? Reach out to our organizing team and we'll get back to you within 24 hours."}),s.jsxs("div",{className:"info-items",children:[s.jsxs("div",{className:"info-item",children:[s.jsx(xi,{className:"info-icon"}),s.jsx("a",{href:""})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(h0,{className:"info-icon"}),s.jsx("a",{href:""})]}),s.jsxs("div",{className:"info-item",children:[s.jsx(ns,{className:"info-icon"}),s.jsx("a",{href:"https://www.google.com/maps/dir/?api=1&destination=UIET+4+CSJM+university",children:"Department of Computer Application (UIET-4), CSJMU"})]})]})]}),s.jsxs("form",{className:"contact-form glass",onSubmit:e=>e.preventDefault(),children:[s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",placeholder:"Your Name"})}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"email",placeholder:"Your Email"})}),s.jsx("div",{className:"form-group",children:s.jsx("textarea",{placeholder:"Your Message",rows:"5"})}),s.jsx("button",{className:"btn btn-primary",children:"Send Message"})]})]})]}),s.jsx("style",{children:`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          margin-top: 40px;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-info p {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 40px;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 1.1rem;
        }

        .info-icon {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .social-icon:hover {
          color: var(--primary-color);
          transform: translateY(-5px);
          border-color: var(--primary-color);
        }

        .contact-form {
          padding: 40px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-form input, .contact-form textarea {
          width: 100%;
          padding: 14px 20px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
        }

        .contact-form textarea {
          resize: none;
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
           .contact-form {
             padding: 25px;
           }

           .contact-info h3 {
             font-size: 1.5rem;
           }
        }

        @media (min-width: 1920px) {
           .contact-info h3 {
              font-size: 2.5rem;
           }

           .info-item {
              font-size: 1.3rem;
           }

           .contact-form {
              padding: 60px;
              gap: 30px;
           }
           
           .contact-form input, .contact-form textarea {
              padding: 18px 25px;
              font-size: 1.2rem;
           }
        }
      `})]}),Zo=({onLegalClick:e})=>s.jsxs("footer",{className:"footer section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsxs("div",{className:"footer-grid",children:[s.jsxs("div",{className:"footer-brand",children:[s.jsxs("a",{href:"#home",className:"logo",children:[s.jsx("span",{className:"gradient-text",children:"TECH"}),"FEST"]}),s.jsx("p",{children:"Empowering students through innovation, logic, and creativity."})]}),s.jsxs("div",{className:"footer-links",children:[s.jsx("h4",{children:"Quick Links"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("a",{href:"#about",children:"About"})}),s.jsx("li",{children:s.jsx("a",{href:"#schedule",children:"Schedule"})}),s.jsx("li",{children:s.jsx("a",{href:"#faq",children:"FAQ"})})]})]}),s.jsxs("div",{className:"footer-legal",children:[s.jsx("h4",{children:"Legal"}),s.jsxs("ul",{children:[s.jsx("li",{children:s.jsx("button",{onClick:()=>e("privacy"),children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>e("terms"),children:"Terms of Service"})}),s.jsx("li",{children:s.jsx("button",{onClick:()=>e("conduct"),children:"Code of Conduct"})})]})]}),s.jsxs("div",{className:"footer-newsletter",children:[s.jsx("h4",{children:"Stay Updated"}),s.jsx("p",{children:"Get the latest news and updates directly in your inbox."}),s.jsxs("div",{className:"newsletter-box",children:[s.jsx("input",{type:"email",placeholder:"Email address"}),s.jsx("button",{className:"btn btn-primary",children:"Join"})]})]})]}),s.jsxs("div",{className:"footer-bottom",children:[s.jsx("p",{children:"© 2026 Tech Fest. All rights reserved."}),s.jsx("p",{children:"Organized by the Department of Computer Application (UIET-4), CSJMU"})]})]}),s.jsx("style",{children:`
        .footer {
          background-color: var(--bg-darker);
          border-top: 1px solid var(--glass-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand p {
          margin-top: 20px;
          color: var(--text-muted);
          max-width: 250px;
        }

        .footer h4 {
          margin-bottom: 25px;
          font-size: 1.1rem;
        }

        .footer-links ul, .footer-legal ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a, .footer-legal button {
          color: var(--text-muted);
          font-size: 0.95rem;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
        }

        .footer-links a:hover, .footer-legal button:hover {
          color: var(--primary-color);
        }

        .footer-newsletter p {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 20px;
        }

        .newsletter-box {
          display: flex;
          gap: 10px;
        }

        .newsletter-box input {
          flex: 1;
          padding: 10px 15px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: white;
        }

        .footer-bottom {
          padding-top: 30px;
          border-top: 1px solid var(--glass-border);
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 0.85rem;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-brand p {
            max-width: 100%;
          }
          .footer-links ul, .footer-legal ul {
             flex-direction: row;
             justify-content: center;
             flex-wrap: wrap;
             gap: 20px;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .newsletter-box {
            flex-direction: column;
          }
        }

        @media (min-width: 1920px) {
           .footer-grid {
              gap: 80px;
           }

           .footer h4 {
              font-size: 1.5rem;
           }

           .footer p, .footer a, .footer button {
              font-size: 1.1rem;
           }
        }
      `})]}),os=()=>{const[e,t]=x.useState(!1);x.useEffect(()=>{const r=()=>{window.pageYOffset>300?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return s.jsxs("div",{className:`scroll-to-top ${e?"visible":""}`,onClick:n,children:[s.jsx(i0,{size:24}),s.jsx("style",{children:`
        .scroll-to-top {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: var(--transition);
          box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .scroll-to-top.visible {
          opacity: 1;
          visibility: visible;
        }

        .scroll-to-top:hover {
          transform: translateY(-5px);
          background: var(--primary-glow);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.6);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
          }
        }
      `})]})},N0=({type:e,isOpen:t,onClose:n})=>{if(!t)return null;const r={privacy:{title:"Privacy Policy",sections:[{heading:"Information Collection",text:"We collect personal information such as Name, Email, Mobile No, Department, Year, and Course during registration for Tech Fest 2026."},{heading:"Use of Information",text:"The collected information is used solely for the purpose of organizing events, coordinating with participants, and issuing certificates."},{heading:"Data Security",text:"We implement appropriate security measures to protect your personal data from unauthorized access or disclosure."}]},terms:{title:"Terms of Service",sections:[{heading:"Eligibility",text:"The event is open to students currently enrolled in CSJMU or its affiliated colleges. Valid student ID may be required."},{heading:"Participation",text:"Participants must adhere to the rules specified for each event track. Cheating or use of unfair means will lead to disqualification."},{heading:"Liability",text:"The organizers are not responsible for any personal belongings or equipment brought to the venue by the participants."}]},conduct:{title:"Code of Conduct",sections:[{heading:"Respect and Inclusivity",text:"All participants, judges, and organizers must be treated with respect. Discrimination or harassment of any form is strictly prohibited."},{heading:"Professionalism",text:"Participants are expected to behave professionally and follow the instructions provided by event coordinators."},{heading:"Reporting Issues",text:"Any violations of this code of conduct should be reported immediately to the Tech Fest 2026 help desk."}]}},o=r[e]||r.privacy;return s.jsxs("div",{className:"legal-overlay",children:[s.jsxs("div",{className:"legal-modal glass",children:[s.jsx("button",{className:"legal-close",onClick:n,children:s.jsx(rs,{size:24})}),s.jsx("h2",{className:"gradient-text",children:o.title}),s.jsx("div",{className:"legal-scroll",children:o.sections.map((i,l)=>s.jsxs("div",{className:"legal-section",children:[s.jsx("h3",{children:i.heading}),s.jsx("p",{children:i.text})]},l))})]}),s.jsx("style",{children:`
        .legal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 6, 23, 0.9);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 20px;
        }

        .legal-modal {
          width: 100%;
          max-width: 800px;
          max-height: 80vh;
          padding: 50px;
          border-radius: 30px;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .legal-close {
          position: absolute;
          top: 25px;
          right: 25px;
          background: none;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .legal-close:hover {
          color: white;
          transform: rotate(90deg);
        }

        .legal-modal h2 {
          font-size: 2.5rem;
          margin-bottom: 30px;
          text-align: center;
        }

        .legal-scroll {
          overflow-y: auto;
          padding-right: 15px;
        }

        .legal-section {
          margin-bottom: 30px;
        }

        .legal-section h3 {
          font-size: 1.2rem;
          color: var(--primary-glow);
          margin-bottom: 12px;
        }

        .legal-section p {
          color: var(--text-muted);
          line-height: 1.8;
        }

        /* Custom Scrollbar */
        .legal-scroll::-webkit-scrollbar {
          width: 5px;
        }
        .legal-scroll::-webkit-scrollbar-thumb {
          background: var(--primary-color);
          border-radius: 10px;
        }
      `})]})},R0=()=>{const[e,t]=x.useState(!1),[n,r]=x.useState(null);return x.useEffect(()=>{const o=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),s.jsxs("div",{className:"app",children:[s.jsx(Go,{isScrolled:e}),s.jsxs("main",{children:[s.jsx(w0,{}),s.jsx(k0,{}),s.jsx(S0,{}),s.jsx(E0,{}),s.jsx(j0,{}),s.jsx(C0,{})]}),s.jsx(Zo,{onLegalClick:o=>r(o)}),s.jsx(os,{}),s.jsx(N0,{type:n,isOpen:!!n,onClose:()=>r(null)})]})};function Rf(e,t){return function(){return e.apply(t,arguments)}}const{toString:b0}=Object.prototype,{getPrototypeOf:is}=Object,{iterator:wi,toStringTag:bf}=Symbol,ki=(e=>t=>{const n=b0.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),qe=e=>(e=e.toLowerCase(),t=>ki(t)===e),Si=e=>t=>typeof t===e,{isArray:Bn}=Array,zn=Si("undefined");function Mr(e){return e!==null&&!zn(e)&&e.constructor!==null&&!zn(e.constructor)&&Ee(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pf=qe("ArrayBuffer");function P0(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pf(e.buffer),t}const T0=Si("string"),Ee=Si("function"),Tf=Si("number"),Fr=e=>e!==null&&typeof e=="object",_0=e=>e===!0||e===!1,jo=e=>{if(ki(e)!=="object")return!1;const t=is(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(bf in e)&&!(wi in e)},L0=e=>{if(!Fr(e)||Mr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},z0=qe("Date"),O0=qe("File"),D0=qe("Blob"),A0=qe("FileList"),M0=e=>Fr(e)&&Ee(e.pipe),F0=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Ee(e.append)&&((t=ki(e))==="formdata"||t==="object"&&Ee(e.toString)&&e.toString()==="[object FormData]"))},I0=qe("URLSearchParams"),[U0,B0,$0,H0]=["ReadableStream","Request","Response","Headers"].map(qe),V0=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ir(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Bn(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{if(Mr(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),l=i.length;let a;for(r=0;r<l;r++)a=i[r],t.call(null,e[a],a,e)}}function _f(e,t){if(Mr(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Wt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lf=e=>!zn(e)&&e!==Wt;function Gl(){const{caseless:e,skipUndefined:t}=Lf(this)&&this||{},n={},r=(o,i)=>{const l=e&&_f(n,i)||i;jo(n[l])&&jo(o)?n[l]=Gl(n[l],o):jo(o)?n[l]=Gl({},o):Bn(o)?n[l]=o.slice():(!t||!zn(o))&&(n[l]=o)};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Ir(arguments[o],r);return n}const W0=(e,t,n,{allOwnKeys:r}={})=>(Ir(t,(o,i)=>{n&&Ee(o)?Object.defineProperty(e,i,{value:Rf(o,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:o,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Y0=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Q0=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},q0=(e,t,n,r)=>{let o,i,l;const a={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)l=o[i],(!r||r(l,e,t))&&!a[l]&&(t[l]=e[l],a[l]=!0);e=n!==!1&&is(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},K0=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},J0=e=>{if(!e)return null;if(Bn(e))return e;let t=e.length;if(!Tf(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},X0=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&is(Uint8Array)),G0=(e,t)=>{const r=(e&&e[wi]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Z0=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},ey=qe("HTMLFormElement"),ty=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Cu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ny=qe("RegExp"),zf=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ir(n,(o,i)=>{let l;(l=t(o,i,e))!==!1&&(r[i]=l||o)}),Object.defineProperties(e,r)},ry=e=>{zf(e,(t,n)=>{if(Ee(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Ee(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},oy=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Bn(e)?r(e):r(String(e).split(t)),n},iy=()=>{},ly=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ay(e){return!!(e&&Ee(e.append)&&e[bf]==="FormData"&&e[wi])}const sy=e=>{const t=new Array(10),n=(r,o)=>{if(Fr(r)){if(t.indexOf(r)>=0)return;if(Mr(r))return r;if(!("toJSON"in r)){t[o]=r;const i=Bn(r)?[]:{};return Ir(r,(l,a)=>{const u=n(l,o+1);!zn(u)&&(i[a]=u)}),t[o]=void 0,i}}return r};return n(e,0)},uy=qe("AsyncFunction"),cy=e=>e&&(Fr(e)||Ee(e))&&Ee(e.then)&&Ee(e.catch),Of=((e,t)=>e?setImmediate:t?((n,r)=>(Wt.addEventListener("message",({source:o,data:i})=>{o===Wt&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Wt.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Ee(Wt.postMessage)),dy=typeof queueMicrotask<"u"?queueMicrotask.bind(Wt):typeof process<"u"&&process.nextTick||Of,fy=e=>e!=null&&Ee(e[wi]),k={isArray:Bn,isArrayBuffer:Pf,isBuffer:Mr,isFormData:F0,isArrayBufferView:P0,isString:T0,isNumber:Tf,isBoolean:_0,isObject:Fr,isPlainObject:jo,isEmptyObject:L0,isReadableStream:U0,isRequest:B0,isResponse:$0,isHeaders:H0,isUndefined:zn,isDate:z0,isFile:O0,isBlob:D0,isRegExp:ny,isFunction:Ee,isStream:M0,isURLSearchParams:I0,isTypedArray:X0,isFileList:A0,forEach:Ir,merge:Gl,extend:W0,trim:V0,stripBOM:Y0,inherits:Q0,toFlatObject:q0,kindOf:ki,kindOfTest:qe,endsWith:K0,toArray:J0,forEachEntry:G0,matchAll:Z0,isHTMLForm:ey,hasOwnProperty:Cu,hasOwnProp:Cu,reduceDescriptors:zf,freezeMethods:ry,toObjectSet:oy,toCamelCase:ty,noop:iy,toFiniteNumber:ly,findKey:_f,global:Wt,isContextDefined:Lf,isSpecCompliantForm:ay,toJSONObject:sy,isAsyncFn:uy,isThenable:cy,setImmediate:Of,asap:dy,isIterable:fy};let _=class Df extends Error{static from(t,n,r,o,i,l){const a=new Df(t.message,n||t.code,r,o,i);return a.cause=t,a.name=t.name,l&&Object.assign(a,l),a}constructor(t,n,r,o,i){super(t),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),o&&(this.request=o),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}};_.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";_.ERR_BAD_OPTION="ERR_BAD_OPTION";_.ECONNABORTED="ECONNABORTED";_.ETIMEDOUT="ETIMEDOUT";_.ERR_NETWORK="ERR_NETWORK";_.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";_.ERR_DEPRECATED="ERR_DEPRECATED";_.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";_.ERR_BAD_REQUEST="ERR_BAD_REQUEST";_.ERR_CANCELED="ERR_CANCELED";_.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";_.ERR_INVALID_URL="ERR_INVALID_URL";const py=null;function Zl(e){return k.isPlainObject(e)||k.isArray(e)}function Af(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function Nu(e,t,n){return e?e.concat(t).map(function(o,i){return o=Af(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function my(e){return k.isArray(e)&&!e.some(Zl)}const hy=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function Ei(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,S){return!k.isUndefined(S[v])});const r=n.metaTokens,o=n.visitor||d,i=n.dots,l=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function c(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(k.isBoolean(y))return y.toString();if(!u&&k.isBlob(y))throw new _("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,v,S){let h=y;if(y&&!S&&typeof y=="object"){if(k.endsWith(v,"{}"))v=r?v:v.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&my(y)||(k.isFileList(y)||k.endsWith(v,"[]"))&&(h=k.toArray(y)))return v=Af(v),h.forEach(function(m,E){!(k.isUndefined(m)||m===null)&&t.append(l===!0?Nu([v],E,i):l===null?v:v+"[]",c(m))}),!1}return Zl(y)?!0:(t.append(Nu(S,v,i),c(y)),!1)}const f=[],g=Object.assign(hy,{defaultVisitor:d,convertValue:c,isVisitable:Zl});function w(y,v){if(!k.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+v.join("."));f.push(y),k.forEach(y,function(h,p){(!(k.isUndefined(h)||h===null)&&o.call(t,h,k.isString(p)?p.trim():p,v,g))===!0&&w(h,v?v.concat(p):[p])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return w(e),t}function Ru(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ls(e,t){this._pairs=[],e&&Ei(e,this,t)}const Mf=ls.prototype;Mf.append=function(t,n){this._pairs.push([t,n])};Mf.toString=function(t){const n=t?function(r){return t.call(this,r,Ru)}:Ru;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function gy(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Ff(e,t,n){if(!t)return e;const r=n&&n.encode||gy,o=k.isFunction(n)?{serialize:n}:n,i=o&&o.serialize;let l;if(i?l=i(t,o):l=k.isURLSearchParams(t)?t.toString():new ls(t,o).toString(r),l){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class bu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const If={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},yy=typeof URLSearchParams<"u"?URLSearchParams:ls,vy=typeof FormData<"u"?FormData:null,xy=typeof Blob<"u"?Blob:null,wy={isBrowser:!0,classes:{URLSearchParams:yy,FormData:vy,Blob:xy},protocols:["http","https","file","blob","url","data"]},as=typeof window<"u"&&typeof document<"u",ea=typeof navigator=="object"&&navigator||void 0,ky=as&&(!ea||["ReactNative","NativeScript","NS"].indexOf(ea.product)<0),Sy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Ey=as&&window.location.href||"http://localhost",jy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:as,hasStandardBrowserEnv:ky,hasStandardBrowserWebWorkerEnv:Sy,navigator:ea,origin:Ey},Symbol.toStringTag,{value:"Module"})),ce={...jy,...wy};function Cy(e,t){return Ei(e,new ce.classes.URLSearchParams,{visitor:function(n,r,o,i){return ce.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function Ny(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Ry(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Uf(e){function t(n,r,o,i){let l=n[i++];if(l==="__proto__")return!0;const a=Number.isFinite(+l),u=i>=n.length;return l=!l&&k.isArray(o)?o.length:l,u?(k.hasOwnProp(o,l)?o[l]=[o[l],r]:o[l]=r,!a):((!o[l]||!k.isObject(o[l]))&&(o[l]=[]),t(n,r,o[l],i)&&k.isArray(o[l])&&(o[l]=Ry(o[l])),!a)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(Ny(r),o,n,0)}),n}return null}function by(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ur={transitional:If,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(Uf(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Cy(t,this.formSerializer).toString();if((a=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return Ei(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),by(t)):t}],transformResponse:[function(t){const n=this.transitional||Ur.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const l=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t,this.parseReviver)}catch(a){if(l)throw a.name==="SyntaxError"?_.from(a,_.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ce.classes.FormData,Blob:ce.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Ur.headers[e]={}});const Py=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ty=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(l){o=l.indexOf(":"),n=l.substring(0,o).trim().toLowerCase(),r=l.substring(o+1).trim(),!(!n||t[n]&&Py[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Pu=Symbol("internals");function Xn(e){return e&&String(e).trim().toLowerCase()}function Co(e){return e===!1||e==null?e:k.isArray(e)?e.map(Co):String(e)}function _y(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Ly=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function el(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function zy(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Oy(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,l){return this[r].call(this,t,o,i,l)},configurable:!0})})}let je=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(a,u,c){const d=Xn(u);if(!d)throw new Error("header name must be a non-empty string");const f=k.findKey(o,d);(!f||o[f]===void 0||c===!0||c===void 0&&o[f]!==!1)&&(o[f||u]=Co(a))}const l=(a,u)=>k.forEach(a,(c,d)=>i(c,d,u));if(k.isPlainObject(t)||t instanceof this.constructor)l(t,n);else if(k.isString(t)&&(t=t.trim())&&!Ly(t))l(Ty(t),n);else if(k.isObject(t)&&k.isIterable(t)){let a={},u,c;for(const d of t){if(!k.isArray(d))throw TypeError("Object iterator must return a key-value pair");a[c=d[0]]=(u=a[c])?k.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}l(a,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=Xn(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return _y(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Xn(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||el(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(l){if(l=Xn(l),l){const a=k.findKey(r,l);a&&(!n||el(r,r[a],a,n))&&(delete r[a],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||el(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,i)=>{const l=k.findKey(r,i);if(l){n[l]=Co(o),delete n[i];return}const a=t?zy(i):String(i).trim();a!==i&&delete n[i],n[a]=Co(o),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Pu]=this[Pu]={accessors:{}}).accessors,o=this.prototype;function i(l){const a=Xn(l);r[a]||(Oy(o,l),r[a]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}};je.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(je.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(je);function tl(e,t){const n=this||Ur,r=t||n,o=je.from(r.headers);let i=r.data;return k.forEach(e,function(a){i=a.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Bf(e){return!!(e&&e.__CANCEL__)}let Br=class extends _{constructor(t,n,r){super(t??"canceled",_.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function $f(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Dy(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ay(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,l;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=r[i];l||(l=c),n[o]=u,r[o]=c;let f=i,g=0;for(;f!==o;)g+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),c-l<t)return;const w=d&&c-d;return w?Math.round(g*1e3/w):void 0}}function My(e,t){let n=0,r=1e3/t,o,i;const l=(c,d=Date.now())=>{n=d,o=null,i&&(clearTimeout(i),i=null),e(...c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?l(c,d):(o=c,i||(i=setTimeout(()=>{i=null,l(o)},r-f)))},()=>o&&l(o)]}const ei=(e,t,n=3)=>{let r=0;const o=Ay(50,250);return My(i=>{const l=i.loaded,a=i.lengthComputable?i.total:void 0,u=l-r,c=o(u),d=l<=a;r=l;const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:u,rate:c||void 0,estimated:c&&a&&d?(a-l)/c:void 0,event:i,lengthComputable:a!=null,[t?"download":"upload"]:!0};e(f)},n)},Tu=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},_u=e=>(...t)=>k.asap(()=>e(...t)),Fy=ce.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ce.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ce.origin),ce.navigator&&/(msie|trident)/i.test(ce.navigator.userAgent)):()=>!0,Iy=ce.hasStandardBrowserEnv?{write(e,t,n,r,o,i,l){if(typeof document>"u")return;const a=[`${e}=${encodeURIComponent(t)}`];k.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),k.isString(r)&&a.push(`path=${r}`),k.isString(o)&&a.push(`domain=${o}`),i===!0&&a.push("secure"),k.isString(l)&&a.push(`SameSite=${l}`),document.cookie=a.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Uy(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function By(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Hf(e,t,n){let r=!Uy(t);return e&&(r||n==!1)?By(e,t):t}const Lu=e=>e instanceof je?{...e}:e;function en(e,t){t=t||{};const n={};function r(c,d,f,g){return k.isPlainObject(c)&&k.isPlainObject(d)?k.merge.call({caseless:g},c,d):k.isPlainObject(d)?k.merge({},d):k.isArray(d)?d.slice():d}function o(c,d,f,g){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c,f,g)}else return r(c,d,f,g)}function i(c,d){if(!k.isUndefined(d))return r(void 0,d)}function l(c,d){if(k.isUndefined(d)){if(!k.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function a(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const u={url:i,method:i,data:i,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,withXSRFToken:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:a,headers:(c,d,f)=>o(Lu(c),Lu(d),f,!0)};return k.forEach(Object.keys({...e,...t}),function(d){const f=u[d]||o,g=f(e[d],t[d],d);k.isUndefined(g)&&f!==a||(n[d]=g)}),n}const Vf=e=>{const t=en({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:l,auth:a}=t;if(t.headers=l=je.from(l),t.url=Ff(Hf(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),a&&l.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):""))),k.isFormData(n)){if(ce.hasStandardBrowserEnv||ce.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(k.isFunction(n.getHeaders)){const u=n.getHeaders(),c=["content-type","content-length"];Object.entries(u).forEach(([d,f])=>{c.includes(d.toLowerCase())&&l.set(d,f)})}}if(ce.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&Fy(t.url))){const u=o&&i&&Iy.read(i);u&&l.set(o,u)}return t},$y=typeof XMLHttpRequest<"u",Hy=$y&&function(e){return new Promise(function(n,r){const o=Vf(e);let i=o.data;const l=je.from(o.headers).normalize();let{responseType:a,onUploadProgress:u,onDownloadProgress:c}=o,d,f,g,w,y;function v(){w&&w(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(o.method.toUpperCase(),o.url,!0),S.timeout=o.timeout;function h(){if(!S)return;const m=je.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),j={data:!a||a==="text"||a==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:m,config:e,request:S};$f(function(N){n(N),v()},function(N){r(N),v()},j),S=null}"onloadend"in S?S.onloadend=h:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(h)},S.onabort=function(){S&&(r(new _("Request aborted",_.ECONNABORTED,e,S)),S=null)},S.onerror=function(E){const j=E&&E.message?E.message:"Network Error",R=new _(j,_.ERR_NETWORK,e,S);R.event=E||null,r(R),S=null},S.ontimeout=function(){let E=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const j=o.transitional||If;o.timeoutErrorMessage&&(E=o.timeoutErrorMessage),r(new _(E,j.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,S)),S=null},i===void 0&&l.setContentType(null),"setRequestHeader"in S&&k.forEach(l.toJSON(),function(E,j){S.setRequestHeader(j,E)}),k.isUndefined(o.withCredentials)||(S.withCredentials=!!o.withCredentials),a&&a!=="json"&&(S.responseType=o.responseType),c&&([g,y]=ei(c,!0),S.addEventListener("progress",g)),u&&S.upload&&([f,w]=ei(u),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(d=m=>{S&&(r(!m||m.type?new Br(null,e,S):m),S.abort(),S=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const p=Dy(o.url);if(p&&ce.protocols.indexOf(p)===-1){r(new _("Unsupported protocol "+p+":",_.ERR_BAD_REQUEST,e));return}S.send(i||null)})},Vy=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(c){if(!o){o=!0,a();const d=c instanceof Error?c:this.reason;r.abort(d instanceof _?d:new Br(d instanceof Error?d.message:d))}};let l=t&&setTimeout(()=>{l=null,i(new _(`timeout of ${t}ms exceeded`,_.ETIMEDOUT))},t);const a=()=>{e&&(l&&clearTimeout(l),l=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(i):c.removeEventListener("abort",i)}),e=null)};e.forEach(c=>c.addEventListener("abort",i));const{signal:u}=r;return u.unsubscribe=()=>k.asap(a),u}},Wy=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},Yy=async function*(e,t){for await(const n of Qy(e))yield*Wy(n,t)},Qy=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},zu=(e,t,n,r)=>{const o=Yy(e,t);let i=0,l,a=u=>{l||(l=!0,r&&r(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await o.next();if(c){a(),u.close();return}let f=d.byteLength;if(n){let g=i+=f;n(g)}u.enqueue(new Uint8Array(d))}catch(c){throw a(c),c}},cancel(u){return a(u),o.return()}},{highWaterMark:2})},Ou=64*1024,{isFunction:so}=k,qy=(({Request:e,Response:t})=>({Request:e,Response:t}))(k.global),{ReadableStream:Du,TextEncoder:Au}=k.global,Mu=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Ky=e=>{e=k.merge.call({skipUndefined:!0},qy,e);const{fetch:t,Request:n,Response:r}=e,o=t?so(t):typeof fetch=="function",i=so(n),l=so(r);if(!o)return!1;const a=o&&so(Du),u=o&&(typeof Au=="function"?(y=>v=>y.encode(v))(new Au):async y=>new Uint8Array(await new n(y).arrayBuffer())),c=i&&a&&Mu(()=>{let y=!1;const v=new n(ce.origin,{body:new Du,method:"POST",get duplex(){return y=!0,"half"}}).headers.has("Content-Type");return y&&!v}),d=l&&a&&Mu(()=>k.isReadableStream(new r("").body)),f={stream:d&&(y=>y.body)};o&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!f[y]&&(f[y]=(v,S)=>{let h=v&&v[y];if(h)return h.call(v);throw new _(`Response type '${y}' is not supported`,_.ERR_NOT_SUPPORT,S)})});const g=async y=>{if(y==null)return 0;if(k.isBlob(y))return y.size;if(k.isSpecCompliantForm(y))return(await new n(ce.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(k.isArrayBufferView(y)||k.isArrayBuffer(y))return y.byteLength;if(k.isURLSearchParams(y)&&(y=y+""),k.isString(y))return(await u(y)).byteLength},w=async(y,v)=>{const S=k.toFiniteNumber(y.getContentLength());return S??g(v)};return async y=>{let{url:v,method:S,data:h,signal:p,cancelToken:m,timeout:E,onDownloadProgress:j,onUploadProgress:R,responseType:N,headers:T,withCredentials:A="same-origin",fetchOptions:L}=Vf(y),ge=t||fetch;N=N?(N+"").toLowerCase():"text";let Ke=Vy([p,m&&m.toAbortSignal()],E),Ie=null;const Je=Ke&&Ke.unsubscribe&&(()=>{Ke.unsubscribe()});let $r;try{if(R&&c&&S!=="get"&&S!=="head"&&($r=await w(T,h))!==0){let F=new n(v,{method:"POST",body:h,duplex:"half"}),$;if(k.isFormData(h)&&($=F.headers.get("content-type"))&&T.setContentType($),F.body){const[yt,_e]=Tu($r,ei(_u(R)));h=zu(F.body,Ou,yt,_e)}}k.isString(A)||(A=A?"include":"omit");const ye=i&&"credentials"in n.prototype,rn={...L,signal:Ke,method:S.toUpperCase(),headers:T.normalize().toJSON(),body:h,duplex:"half",credentials:ye?A:void 0};Ie=i&&new n(v,rn);let b=await(i?ge(Ie,L):ge(v,rn));const z=d&&(N==="stream"||N==="response");if(d&&(j||z&&Je)){const F={};["status","statusText","headers"].forEach(on=>{F[on]=b[on]});const $=k.toFiniteNumber(b.headers.get("content-length")),[yt,_e]=j&&Tu($,ei(_u(j),!0))||[];b=new r(zu(b.body,Ou,yt,()=>{_e&&_e(),Je&&Je()}),F)}N=N||"text";let O=await f[k.findKey(f,N)||"text"](b,y);return!z&&Je&&Je(),await new Promise((F,$)=>{$f(F,$,{data:O,headers:je.from(b.headers),status:b.status,statusText:b.statusText,config:y,request:Ie})})}catch(ye){throw Je&&Je(),ye&&ye.name==="TypeError"&&/Load failed|fetch/i.test(ye.message)?Object.assign(new _("Network Error",_.ERR_NETWORK,y,Ie),{cause:ye.cause||ye}):_.from(ye,ye&&ye.code,y,Ie)}}},Jy=new Map,Wf=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:o}=t,i=[r,o,n];let l=i.length,a=l,u,c,d=Jy;for(;a--;)u=i[a],c=d.get(u),c===void 0&&d.set(u,c=a?new Map:Ky(t)),d=c;return c};Wf();const ss={http:py,xhr:Hy,fetch:{get:Wf}};k.forEach(ss,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Fu=e=>`- ${e}`,Xy=e=>k.isFunction(e)||e===null||e===!1;function Gy(e,t){e=k.isArray(e)?e:[e];const{length:n}=e;let r,o;const i={};for(let l=0;l<n;l++){r=e[l];let a;if(o=r,!Xy(r)&&(o=ss[(a=String(r)).toLowerCase()],o===void 0))throw new _(`Unknown adapter '${a}'`);if(o&&(k.isFunction(o)||(o=o.get(t))))break;i[a||"#"+l]=o}if(!o){const l=Object.entries(i).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?l.length>1?`since :
`+l.map(Fu).join(`
`):" "+Fu(l[0]):"as no adapter specified";throw new _("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return o}const Yf={getAdapter:Gy,adapters:ss};function nl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Br(null,e)}function Iu(e){return nl(e),e.headers=je.from(e.headers),e.data=tl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yf.getAdapter(e.adapter||Ur.adapter,e)(e).then(function(r){return nl(e),r.data=tl.call(e,e.transformResponse,r),r.headers=je.from(r.headers),r},function(r){return Bf(r)||(nl(e),r&&r.response&&(r.response.data=tl.call(e,e.transformResponse,r.response),r.response.headers=je.from(r.response.headers))),Promise.reject(r)})}const Qf="1.13.4",ji={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ji[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Uu={};ji.transitional=function(t,n,r){function o(i,l){return"[Axios v"+Qf+"] Transitional option '"+i+"'"+l+(r?". "+r:"")}return(i,l,a)=>{if(t===!1)throw new _(o(l," has been removed"+(n?" in "+n:"")),_.ERR_DEPRECATED);return n&&!Uu[l]&&(Uu[l]=!0,console.warn(o(l," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,l,a):!0}};ji.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Zy(e,t,n){if(typeof e!="object")throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],l=t[i];if(l){const a=e[i],u=a===void 0||l(a,i,e);if(u!==!0)throw new _("option "+i+" must be "+u,_.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new _("Unknown option "+i,_.ERR_BAD_OPTION)}}const No={assertOptions:Zy,validators:ji},Ge=No.validators;let qt=class{constructor(t){this.defaults=t||{},this.interceptors={request:new bu,response:new bu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=en(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&No.assertOptions(r,{silentJSONParsing:Ge.transitional(Ge.boolean),forcedJSONParsing:Ge.transitional(Ge.boolean),clarifyTimeoutError:Ge.transitional(Ge.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:No.assertOptions(o,{encode:Ge.function,serialize:Ge.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),No.assertOptions(n,{baseUrl:Ge.spelling("baseURL"),withXsrfToken:Ge.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let l=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=je.concat(l,i);const a=[];let u=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(u=u&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,f=0,g;if(!u){const y=[Iu.bind(this),void 0];for(y.unshift(...a),y.push(...c),g=y.length,d=Promise.resolve(n);f<g;)d=d.then(y[f++],y[f++]);return d}g=a.length;let w=n;for(;f<g;){const y=a[f++],v=a[f++];try{w=y(w)}catch(S){v.call(this,S);break}}try{d=Iu.call(this,w)}catch(y){return Promise.reject(y)}for(f=0,g=c.length;f<g;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=en(this.defaults,t);const n=Hf(t.baseURL,t.url,t.allowAbsoluteUrls);return Ff(n,t.params,t.paramsSerializer)}};k.forEach(["delete","get","head","options"],function(t){qt.prototype[t]=function(n,r){return this.request(en(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(i,l,a){return this.request(en(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:l}))}}qt.prototype[t]=n(),qt.prototype[t+"Form"]=n(!0)});let ev=class qf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const l=new Promise(a=>{r.subscribe(a),i=a}).then(o);return l.cancel=function(){r.unsubscribe(i)},l},t(function(i,l,a){r.reason||(r.reason=new Br(i,l,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new qf(function(o){t=o}),cancel:t}}};function tv(e){return function(n){return e.apply(null,n)}}function nv(e){return k.isObject(e)&&e.isAxiosError===!0}const ta={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ta).forEach(([e,t])=>{ta[t]=e});function Kf(e){const t=new qt(e),n=Rf(qt.prototype.request,t);return k.extend(n,qt.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Kf(en(e,o))},n}const J=Kf(Ur);J.Axios=qt;J.CanceledError=Br;J.CancelToken=ev;J.isCancel=Bf;J.VERSION=Qf;J.toFormData=Ei;J.AxiosError=_;J.Cancel=J.CanceledError;J.all=function(t){return Promise.all(t)};J.spread=tv;J.isAxiosError=nv;J.mergeConfig=en;J.AxiosHeaders=je;J.formToJSON=e=>Uf(k.isHTMLForm(e)?new FormData(e):e);J.getAdapter=Yf.getAdapter;J.HttpStatusCode=ta;J.default=J;const{Axios:pv,AxiosError:mv,CanceledError:hv,isCancel:gv,CancelToken:yv,VERSION:vv,all:xv,Cancel:wv,isAxiosError:kv,spread:Sv,toFormData:Ev,AxiosHeaders:jv,HttpStatusCode:Cv,formToJSON:Nv,getAdapter:Rv,mergeConfig:bv}=J,rv=({isOpen:e,onClose:t,category:n})=>{const{user:r}=x.useContext(Un),[o,i]=x.useState({fullName:"",email:"",enrollmentNo:"",phone:"",department:"",year:"",course:"",linkedin:"",githubLink:""}),[l,a]=x.useState(!1),[u,c]=x.useState(""),[d,f]=x.useState({});if(x.useEffect(()=>{r&&e&&i(v=>({...v,fullName:r.name||"",email:r.email||""}))},[r,e]),!e)return null;const g=()=>{let v={};return o.fullName||(v.fullName="Full Name is required"),o.email||(v.email="Email is required"),o.enrollmentNo||(v.enrollmentNo="Enrollment No is required"),o.phone||(v.phone="Mobile No is required"),o.department||(v.department="Department is required"),o.year||(v.year="Year is required"),o.course||(v.course="Course is required"),o.linkedin||(v.linkedin="LinkedIn Profile is required"),n==="WEB Hackathon"&&!o.githubLink&&(v.githubLink="GitHub Profile Link is required"),f(v),Object.keys(v).length===0},w=async v=>{var S,h;if(v.preventDefault(),c(""),g())try{const m={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}},E={...o,category:n,experienceLevel:"Intermediate"};E.college="TechFest Host College",await J.post("http://localhost:5000/api/register",E,m),a(!0),setTimeout(()=>{a(!1),t(),i({fullName:(r==null?void 0:r.name)||"",email:(r==null?void 0:r.email)||"",enrollmentNo:"",phone:"",department:"",year:"",course:"",linkedin:"",githubLink:""})},3e3)}catch(p){c(((h=(S=p.response)==null?void 0:S.data)==null?void 0:h.message)||"Registration failed. Please try again.")}},y=v=>{i({...o,[v.target.name]:v.target.value}),d[v.target.name]&&f({...d,[v.target.name]:null})};return s.jsxs("div",{className:"modal-overlay",children:[s.jsxs("div",{className:"modal-content glass",children:[s.jsx("button",{className:"modal-close",onClick:t,children:s.jsx(rs,{size:24})}),s.jsxs("div",{className:"modal-header",children:[s.jsxs("h2",{className:"gradient-text",children:["Register for ",n]}),s.jsx("p",{children:"Provide your details to participate."})]}),u&&s.jsxs("div",{className:"error-banner",children:[s.jsx(ts,{size:16})," ",u]}),s.jsxs("form",{className:"modal-form",onSubmit:w,children:[s.jsxs("div",{className:"form-grid",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Full Name"}),s.jsx("input",{type:"text",name:"fullName",value:o.fullName,onChange:y,className:d.fullName?"error":"",readOnly:!0}),d.fullName&&s.jsx("span",{className:"error-text",children:d.fullName})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Email Address"}),s.jsx("input",{type:"email",name:"email",value:o.email,onChange:y,className:d.email?"error":"",readOnly:!0}),d.email&&s.jsx("span",{className:"error-text",children:d.email})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Enrollment No"}),s.jsx("input",{type:"text",name:"enrollmentNo",placeholder:"Enrollment Number",value:o.enrollmentNo,onChange:y,className:d.enrollmentNo?"error":""}),d.enrollmentNo&&s.jsx("span",{className:"error-text",children:d.enrollmentNo})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Mobile No"}),s.jsx("input",{type:"tel",name:"phone",placeholder:"+91 9876543210",value:o.phone,onChange:y,className:d.phone?"error":""}),d.phone&&s.jsx("span",{className:"error-text",children:d.phone})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Course"}),s.jsxs("select",{name:"course",value:o.course,onChange:y,className:d.course?"error":"",children:[s.jsx("option",{value:"",children:"Select Course"}),s.jsx("option",{value:"B.Tech",children:"B.Tech"}),s.jsx("option",{value:"BCA",children:"BCA"}),s.jsx("option",{value:"B.Sc",children:"B.Sc"})]}),d.course&&s.jsx("span",{className:"error-text",children:d.course})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Department"}),s.jsx("input",{type:"text",name:"department",placeholder:"CSE",value:o.department,onChange:y,className:d.department?"error":""}),d.department&&s.jsx("span",{className:"error-text",children:d.department})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Year"}),s.jsxs("select",{name:"year",value:o.year,onChange:y,className:d.year?"error":"",children:[s.jsx("option",{value:"",children:"Select Year"}),s.jsx("option",{value:"1st Year",children:"1st Year"}),s.jsx("option",{value:"2nd Year",children:"2nd Year"}),s.jsx("option",{value:"3rd Year",children:"3rd Year"}),s.jsx("option",{value:"4th Year",children:"4th Year"})]}),d.year&&s.jsx("span",{className:"error-text",children:d.year})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"LinkedIn Profile"}),s.jsx("input",{type:"url",name:"linkedin",placeholder:"https://linkedin.com/in/username",value:o.linkedin,onChange:y,className:d.linkedin?"error":""}),d.linkedin&&s.jsx("span",{className:"error-text",children:d.linkedin})]}),n==="WEB Hackathon"&&s.jsxs("div",{className:"form-group full-width",children:[s.jsx("label",{children:"GitHub Profile Link"}),s.jsx("input",{type:"url",name:"githubLink",placeholder:"https://github.com/username",value:o.githubLink,onChange:y,className:d.githubLink?"error":""}),d.githubLink&&s.jsx("span",{className:"error-text",children:d.githubLink})]})]}),s.jsxs("button",{type:"submit",className:"btn btn-primary submit-btn",children:[s.jsx(g0,{size:18})," Confirm Registration"]})]}),l&&s.jsxs("div",{className:"success-toast glass",children:[s.jsx(Sf,{color:"#10b981"}),s.jsxs("span",{children:["Success! Registration confirmed for ",n,"."]})]})]}),s.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 700px;
          padding: 40px;
          border-radius: 30px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .modal-close:hover {
          color: white;
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .modal-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .modal-header p {
          color: var(--text-muted);
        }

        .error-banner {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
        }

        .modal-form .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-group input, .form-group select {
          padding: 12px 16px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
        }
        
        .form-group input:read-only {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .form-group input.error, .form-group select.error {
          border-color: #ef4444;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
        }

        .success-toast {
          position: absolute;
          bottom: -70px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(6, 78, 59, 0.9);
          border: 1px solid #10b981;
          border-radius: 50px;
          white-space: nowrap;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 600px) {
          .modal-form .form-grid {
            grid-template-columns: 1fr;
          }
          .modal-content {
            padding: 30px 20px;
          }
        }
      `})]})},ov=()=>{const{id:e}=lg(),t=In(),{user:n}=x.useContext(Un),[r,o]=x.useState(!1),[i,l]=x.useState(!1),u={dsa:{title:"DSA Hackathon",icon:s.jsx(Ef,{size:60}),description:"Solve complex algorithmic problems and optimize solutions in this competitive programming challenge. Test your data structures and algorithms knowledge against the best.",longDescription:"The DSA Hackathon is the ultimate test of your problem-solving skills. usage of efficient algorithms and data structures is key. Participants will be given a set of problems ranging from easy to hard difficulty. Points will be awarded based on the number of test cases passed and the time complexity of the solution.",details:["Individual Participation","Duration: 3 Hours","Platform: HackerRank/LeetCode (TBD)","Languages: C++, Java, Python"],schedule:"10:00 AM - 1:00 PM",venue:"Computer Lab 1"},web:{title:"WEB Hackathon",icon:s.jsx(jf,{size:60}),description:"Build responsive, dynamic, and innovative web applications in this full-stack development contest.",longDescription:"Unleash your creativity in the Web Hackathon. You will be given a theme at the start of the event, and your goal is to build a fully functional, responsive, and visually appealing web application within the time limit. Judging will be based on design, functionality, code quality, and innovation.",details:["Team Size: 1-3 Members","Duration: 6 Hours","Theme: Revealed on spot","Tech Stack: Open (React, Angular, Vue, etc.)"],schedule:"9:00 AM - 5:00 PM",venue:"Innovation Center"},aptitude:{title:"Aptitude Test",icon:s.jsx(kf,{size:60}),description:"Test your logical reasoning, quantitative ability, and problem-solving skills in this rapid-fire round.",longDescription:"The Aptitude Test is designed to evaluate your logical thinking and quantitative aptitude. This round is crucial for placements and competitive exams. Speed and accuracy are your best friends here. The test comprises multiple-choice questions covering various topics.",details:["Individual Participation","Duration: 60 Minutes","No Negative Marking","Sections: Quant, Logical, Verbal"],schedule:"2:00 PM - 3:00 PM",venue:"Seminar Hall"}}[e];x.useEffect(()=>{const d=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",d),window.scrollTo(0,0),()=>window.removeEventListener("scroll",d)},[e]);const c=()=>{if(!n){t("/login");return}l(!0)};return u?s.jsxs("div",{className:"app",children:[s.jsx(Go,{isScrolled:r}),s.jsxs("main",{className:"event-page",children:[s.jsxs("section",{className:"event-hero",children:[s.jsxs("div",{className:"container event-hero-content",children:[s.jsx("div",{className:"event-icon-large fade-in-up",children:u.icon}),s.jsx("h1",{className:"event-title fade-in-up delay-1",children:u.title}),s.jsx("p",{className:"event-subtitle fade-in-up delay-2",children:u.description}),s.jsxs("div",{className:"event-meta fade-in-up delay-3",children:[s.jsxs("div",{className:"meta-item",children:[s.jsx(c0,{size:20}),s.jsx("span",{children:u.schedule})]}),s.jsxs("div",{className:"meta-item",children:[s.jsx(ns,{size:20}),s.jsx("span",{children:u.venue})]})]}),s.jsx("button",{className:"btn btn-primary btn-lg pulse-anim fade-in-up delay-4",onClick:c,children:"Register Now"})]}),s.jsx("div",{className:"hero-bg-glow"})]}),s.jsx("section",{className:"event-content section-padding",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"content-grid",children:[s.jsxs("div",{className:"main-info",children:[s.jsx("h2",{children:"About the Event"}),s.jsx("p",{children:u.longDescription})]}),s.jsxs("div",{className:"details-card glass",children:[s.jsx("h3",{children:"Key Highlights"}),s.jsx("ul",{className:"details-list",children:u.details.map((d,f)=>s.jsxs("li",{children:[s.jsx(Sf,{size:18,className:"check-icon"}),d]},f))})]})]})})})]}),s.jsx(rv,{isOpen:i,onClose:()=>l(!1),category:u.title}),s.jsx(Zo,{}),s.jsx(os,{}),s.jsx("style",{children:`
                .event-page {
                    min-height: 100vh;
                    padding-top: 80px;
                }

                .event-hero {
                    position: relative;
                    padding: 80px 0;
                    text-align: center;
                    overflow: hidden;
                }

                .event-hero-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .event-icon-large {
                    width: 120px;
                    height: 120px;
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary-color);
                    margin-bottom: 30px;
                    border: 1px solid var(--glass-border);
                    box-shadow: 0 0 30px rgba(99, 102, 241, 0.2);
                }

                .event-title {
                    font-size: 3.5rem;
                    margin-bottom: 20px;
                    background: linear-gradient(to right, #fff, var(--primary-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .event-subtitle {
                    font-size: 1.2rem;
                    color: var(--text-muted);
                    max-width: 700px;
                    margin-bottom: 40px;
                    line-height: 1.6;
                }

                .event-meta {
                    display: flex;
                    gap: 30px;
                    margin-bottom: 40px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .meta-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 10px 20px;
                    border-radius: 50px;
                    border: 1px solid var(--glass-border);
                    color: var(--text-main);
                }

                .hero-bg-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 1;
                }

                .content-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 50px;
                    align-items: start;
                }

                .main-info h2 {
                    font-size: 2rem;
                    margin-bottom: 20px;
                    color: white;
                }

                .main-info p {
                    color: var(--text-muted);
                    line-height: 1.8;
                    font-size: 1.05rem;
                }

                .details-card {
                    padding: 30px;
                    border-radius: 20px;
                }

                .details-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 20px;
                    color: white;
                    border-bottom: 1px solid var(--glass-border);
                    padding-bottom: 15px;
                }

                .details-list {
                    list-style: none;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .details-list li {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: var(--text-muted);
                    font-size: 1rem;
                }

                .check-icon {
                    color: var(--secondary-color);
                    flex-shrink: 0;
                }

                .fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 0.8s ease forwards;
                }

                .delay-1 { animation-delay: 0.1s; }
                .delay-2 { animation-delay: 0.2s; }
                .delay-3 { animation-delay: 0.3s; }
                .delay-4 { animation-delay: 0.4s; }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 992px) {
                    .content-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .event-title {
                        font-size: 2.5rem;
                    }
                    
                    .event-meta {
                         gap: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .event-title {
                        font-size: 1.8rem;
                    }
                    .event-subtitle {
                        font-size: 1rem;
                    }
                    .event-hero {
                        padding: 60px 0;
                    }
                    .details-card {
                        padding: 20px;
                    }
                }
            `})]}):s.jsxs("div",{className:"app",children:[s.jsx(Go,{isScrolled:!0}),s.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:s.jsx("h2",{children:"Event not found"})}),s.jsx(Zo,{})]})},iv=()=>{const[e,t]=x.useState("team"),n=Ft();x.useEffect(()=>{const i=new URLSearchParams(n.search).get("tab");i&&["faculty","team","volunteers"].includes(i)&&t(i)},[n]);const r={faculty:[{name:"Mr. Ravikant Mishra",role:"Faculty Advisor",dept:"Computer Application",image:"rkm.png"},{name:"Mr. Anand Kumar Mishra",role:"Event Coordinator",dept:"Computer Application",image:"akm.png"}],team:[{name:"Lead Coordinator",role:"Organizing Lead",year:"Final Year",image:null},{name:"Tech Lead",role:"Technical Head",year:"3rd Year",image:null},{name:"Design Lead",role:"Creative Head",year:"3rd Year",image:null},{name:"Marketing Lead",role:"Outreach Head",year:"3rd Year",image:null}],volunteers:[{name:"Volunteer 1",role:"Event Support",year:"2nd Year",image:null},{name:"Volunteer 2",role:"Technical Support",year:"2nd Year",image:null},{name:"Volunteer 3",role:"Logistics",year:"1st Year",image:null}]};return s.jsxs("section",{id:"coordinators",className:"section-padding",children:[s.jsxs("div",{className:"container",children:[s.jsx("h2",{className:"section-title",children:"Meet the Team"}),s.jsxs("div",{className:"tabs-container",children:[s.jsx("button",{className:`tab-btn ${e==="faculty"?"active":""}`,onClick:()=>t("faculty"),children:"Faculty Coordinators"}),s.jsx("button",{className:`tab-btn ${e==="team"?"active":""}`,onClick:()=>t("team"),children:"Core Team"}),s.jsx("button",{className:`tab-btn ${e==="volunteers"?"active":""}`,onClick:()=>t("volunteers"),children:"Volunteers"})]}),s.jsx("div",{className:"coordinators-grid fade-in-up",children:r[e].map((o,i)=>s.jsxs("div",{className:"coordinator-card glass",children:[s.jsx("div",{className:"member-img-wrapper",children:o.image?s.jsx("img",{src:o.image,alt:o.name,className:"member-img"}):s.jsx("div",{className:"member-placeholder",children:s.jsx(Nf,{size:50})})}),s.jsxs("div",{className:"member-info",children:[s.jsx("h3",{children:o.name}),s.jsx("div",{className:"member-role",children:o.role}),s.jsx("div",{className:"member-detail",children:o.dept||o.year}),s.jsxs("div",{className:"member-links",children:[s.jsx("button",{className:"icon-btn",children:s.jsx(p0,{size:18})}),s.jsx("button",{className:"icon-btn",children:s.jsx(xi,{size:18})})]})]})]},i))})]}),s.jsx("style",{children:`
                .tabs-container {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    margin-bottom: 50px;
                    flex-wrap: wrap;
                }

                .tab-btn {
                    padding: 10px 24px;
                    border-radius: 50px;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid var(--glass-border);
                    color: var(--text-muted);
                    font-weight: 500;
                    font-size: 0.95rem;
                    transition: var(--transition);
                }

                .tab-btn:hover {
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                }

                .tab-btn.active {
                    background: var(--primary-color);
                    color: white;
                    border-color: var(--primary-color);
                    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
                }

                .coordinators-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 30px;
                    animation: fadeInUp 0.5s ease forwards;
                }

                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .coordinator-card {
                    width: 100%;
                    max-width: 300px;
                    flex: 1 1 250px;
                    padding: 24px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    transition: var(--transition);
                    border: 1px solid transparent;
                }

                .coordinator-card:hover {
                    background: rgba(30, 41, 59, 0.8);
                    border-color: rgba(99, 102, 241, 0.3);
                    transform: translateY(-5px);
                }

                .member-img-wrapper {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    margin-bottom: 16px;
                    overflow: hidden;
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                }

                .member-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .member-info {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                }

                .member-info h3 {
                    font-size: 1.1rem;
                    margin-bottom: 4px;
                    color: white;
                }

                .member-role {
                    color: var(--primary-color);
                    font-size: 0.85rem;
                    font-weight: 600;
                    margin-bottom: 4px;
                }

                .member-detail {
                    color: var(--text-muted);
                    font-size: 0.85rem;
                    margin-bottom: 12px;
                }

                .member-links {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                    opacity: 0.7;
                    transition: var(--transition);
                    width: 100%;
                }

                .coordinator-card:hover .member-links {
                    opacity: 1;
                }

                .icon-btn {
                    background: transparent;
                    color: var(--text-muted);
                    padding: 5px;
                    border-radius: 50%;
                    transition: var(--transition);
                }

                .icon-btn:hover {
                    color: white;
                    background: rgba(255, 255, 255, 0.1);
                }

                @media (max-width: 480px) {
                    .tabs-container {
                        gap: 10px;
                    }
                    
                    .tab-btn {
                        padding: 8px 16px;
                        font-size: 0.85rem;
                    }
                }
            `})]})},lv=()=>{const[e,t]=x.useState(!1);return x.useEffect(()=>{const n=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),s.jsxs("div",{className:"app",children:[s.jsx(Go,{isScrolled:e}),s.jsx("main",{style:{paddingTop:"80px"},children:s.jsx(iv,{})}),s.jsx(Zo,{}),s.jsx(os,{})]})},av=()=>{const[e,t]=x.useState({email:"",password:""}),[n,r]=x.useState(""),{login:o}=x.useContext(Un),i=In(),l=u=>{t({...e,[u.target.name]:u.target.value}),r("")},a=async u=>{var c,d;if(u.preventDefault(),!e.email||!e.password){r("Please fill in all fields");return}try{const f=await J.post("http://localhost:5000/api/users/login",e);f.data&&f.data.token&&(o(f.data,f.data.token),i("/"))}catch(f){r(((d=(c=f.response)==null?void 0:c.data)==null?void 0:d.message)||"Login failed. Please check your credentials.")}};return s.jsxs("div",{className:"auth-page",children:[s.jsxs("div",{className:"auth-container glass",children:[s.jsxs(Ve,{to:"/",className:"back-link",children:[s.jsx(wf,{size:16})," Back to Home"]}),s.jsxs("div",{className:"auth-header",children:[s.jsx("h2",{className:"gradient-text",children:"Welcome Back"}),s.jsx("p",{children:"Login to manage your registrations"})]}),n&&s.jsxs("div",{className:"error-massage",children:[s.jsx(ts,{size:16})," ",n]}),s.jsxs("form",{onSubmit:a,className:"auth-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Email Address"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(xi,{size:18}),s.jsx("input",{type:"email",name:"email",placeholder:"john@example.com",value:e.email,onChange:l})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Password"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Cf,{size:18}),s.jsx("input",{type:"password",name:"password",placeholder:"••••••••",value:e.password,onChange:l})]})]}),s.jsx("button",{type:"submit",className:"btn btn-primary auth-btn",children:"Login"})]}),s.jsxs("p",{className:"auth-footer",children:["Don't have an account? ",s.jsx(Ve,{to:"/signup",children:"Sign Up"})]})]}),s.jsx("style",{children:`
        .auth-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg-dark);
            background-image: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
            padding: 20px;
        }
        .auth-container {
            width: 100%;
            max-width: 450px;
            padding: 40px;
            border-radius: 24px;
        }
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            font-size: 0.9rem;
            margin-bottom: 30px;
            transition: var(--transition);
        }
        .back-link:hover {
            color: var(--primary-color);
        }
        .auth-header {
            text-align: center;
            margin-bottom: 30px;
        }
        .auth-header h2 {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .auth-header p {
            color: var(--text-muted);
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: var(--text-light);
        }
        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-wrapper svg {
            position: absolute;
            left: 14px;
            color: var(--text-muted);
        }
        .input-wrapper input {
            width: 100%;
            padding: 12px 12px 12px 42px;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            transition: var(--transition);
        }
        .input-wrapper input:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
        .auth-btn {
            width: 100%;
            margin-top: 10px;
            padding: 14px;
        }
        .auth-footer {
            text-align: center;
            margin-top: 24px;
            color: var(--text-muted);
            font-size: 0.95rem;
        }
        .auth-footer a {
            color: var(--primary-color);
            font-weight: 500;
        }
        .auth-footer a:hover {
            text-decoration: underline;
        }
        .error-massage {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.5);
            color: #ef4444;
            padding: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            font-size: 0.9rem;
        }
      `})]})},sv=()=>{const[e,t]=x.useState({name:"",email:"",password:""}),[n,r]=x.useState(""),{login:o}=x.useContext(Un),i=In(),l=u=>{t({...e,[u.target.name]:u.target.value}),r("")},a=async u=>{var c,d;if(u.preventDefault(),!e.name||!e.email||!e.password){r("Please fill in all fields");return}try{const f=await J.post("http://localhost:5000/api/users",e);f.data&&f.data.token&&(o(f.data,f.data.token),i("/"))}catch(f){r(((d=(c=f.response)==null?void 0:c.data)==null?void 0:d.message)||"Signup failed. Please try again.")}};return s.jsxs("div",{className:"auth-page",children:[s.jsxs("div",{className:"auth-container glass",children:[s.jsxs(Ve,{to:"/",className:"back-link",children:[s.jsx(wf,{size:16})," Back to Home"]}),s.jsxs("div",{className:"auth-header",children:[s.jsx("h2",{className:"gradient-text",children:"Create Account"}),s.jsx("p",{children:"Join us to register for events"})]}),n&&s.jsxs("div",{className:"error-massage",children:[s.jsx(ts,{size:16})," ",n]}),s.jsxs("form",{onSubmit:a,className:"auth-form",children:[s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Full Name"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Nf,{size:18}),s.jsx("input",{type:"text",name:"name",placeholder:"John Doe",value:e.name,onChange:l})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Email Address"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(xi,{size:18}),s.jsx("input",{type:"email",name:"email",placeholder:"john@example.com",value:e.email,onChange:l})]})]}),s.jsxs("div",{className:"form-group",children:[s.jsx("label",{children:"Password"}),s.jsxs("div",{className:"input-wrapper",children:[s.jsx(Cf,{size:18}),s.jsx("input",{type:"password",name:"password",placeholder:"••••••••",value:e.password,onChange:l})]})]}),s.jsx("button",{type:"submit",className:"btn btn-primary auth-btn",children:"Sign Up"})]}),s.jsxs("p",{className:"auth-footer",children:["Already have an account? ",s.jsx(Ve,{to:"/login",children:"Login"})]})]}),s.jsx("style",{children:`
        .auth-page {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg-dark);
            background-image: radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
            padding: 20px;
        }
        .auth-container {
            width: 100%;
            max-width: 450px;
            padding: 40px;
            border-radius: 24px;
        }
        .back-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--text-muted);
            font-size: 0.9rem;
            margin-bottom: 30px;
            transition: var(--transition);
        }
        .back-link:hover {
            color: var(--primary-color);
        }
        .auth-header {
            text-align: center;
            margin-bottom: 30px;
        }
        .auth-header h2 {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        .auth-header p {
            color: var(--text-muted);
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: var(--text-light);
        }
        .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
        }
        .input-wrapper svg {
            position: absolute;
            left: 14px;
            color: var(--text-muted);
        }
        .input-wrapper input {
            width: 100%;
            padding: 12px 12px 12px 42px;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            color: white;
            font-size: 1rem;
            transition: var(--transition);
        }
        .input-wrapper input:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
        }
        .auth-btn {
            width: 100%;
            margin-top: 10px;
            padding: 14px;
        }
        .auth-footer {
            text-align: center;
            margin-top: 24px;
            color: var(--text-muted);
            font-size: 0.95rem;
        }
        .auth-footer a {
            color: var(--primary-color);
            font-weight: 500;
        }
        .auth-footer a:hover {
            text-decoration: underline;
        }
        .error-massage {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.5);
            color: #ef4444;
            padding: 12px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
            font-size: 0.9rem;
        }
      `})]})};function uv(){return s.jsx(t0,{children:s.jsx(Wg,{children:s.jsxs(kg,{children:[s.jsx(an,{path:"/",element:s.jsx(R0,{})}),s.jsx(an,{path:"/coordinators",element:s.jsx(lv,{})}),s.jsx(an,{path:"/event/:id",element:s.jsx(ov,{})}),s.jsx(an,{path:"/login",element:s.jsx(av,{})}),s.jsx(an,{path:"/signup",element:s.jsx(sv,{})})]})})})}rl.createRoot(document.getElementById("root")).render(s.jsx(fp.StrictMode,{children:s.jsx(uv,{})}));
