function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){"use strict";function t(e){if(e&&0!=e.length)return btoa(String.fromCharCode.apply(null,new Uint8Array(e)))}function r(e){return Uint8Array.from(e,e=>e.charCodeAt(0)).buffer}shz.common.setWithNamespace("npmBridgeDynamic",shz,{import_WebAuthn:()=>Promise.resolve().then((function(){return a}))});const n={publicKeyCredentialNotAvailable:new Error("PublicKeyCredential not available"),unableToCreateCredential:new Error("Unable to create credential"),unableToRetrieveChallenge:new Error("Unable to retrieve challenge"),unableToRetrieveRedemptionObject:new Error("Unable to retrieve redemption data"),unableToRetrieveRedemptionNetwork:new Error("Unable to retrieve redemption data due to network issue"),userIDUndefined:new Error("user ID is undefined")};var a=Object.freeze({__proto__:null,start:async function(e){const{userId:a}=e||{};if(null==a)throw n.userIDUndefined;let i,o={_challenge:null,_rawAttestation:null,_attestation:null,requestRedemptionCodeURL:async function(e){const t=await fetch("/services/wa/redeem",{method:"POST",credentials:"same-origin",body:JSON.stringify(o._attestation),headers:_objectSpread({"content-type":"application/json"},e&&e.headers?e.headers:{})});if(!1===t.ok)throw n.unableToRetrieveRedemptionObject;return t.json()},promptUserForCredential:async function(){const{attestation:a,rawAttestatiton:i}=await async function({challenge:e,userId:a}){if(!window.PublicKeyCredential||"function"!=typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable)throw n.publicKeyCredentialNotAvailable;let i;try{i=await navigator.credentials.create({publicKey:(o={challenge:e,userId:a},{rp:{name:"Shazam"},user:{id:null!=o.userId?r(o.userId):null,name:"AM Music Subscriber",displayName:"AM Music Subscriber"},pubKeyCredParams:[{type:"public-key",alg:-7},{type:"public-key",alg:-257}],authenticatorSelection:{requireResidentKey:!0,userVerification:"required",authenticatorAttachment:"platform"},timeout:5e4,challenge:o.challenge,excludeCredentials:[],attestation:"direct"})})}catch(e){throw n.unableToCreateCredential}var o,c;return{attestation:{id:i.id,rawId:(c=i.rawId,JSON.stringify(Array.from(new Uint8Array(c)))),response:{clientDataJSON:t(i.response.clientDataJSON),attestationObject:t(i.response.attestationObject)},type:i.type},rawAttestation:i}}(_objectSpread({challenge:o._challenge},e));return o._attestation=a,o._rawAttestation=i,o}};try{i=await async function(){const e=await fetch("/services/wa/challenge",{method:"GET",credentials:"same-origin"}),t=await e.json();return t&&t.result?r(t.result):Promise.reject(t.error)}()}catch(e){throw n.unableToRetrieveChallenge}return o._challenge=i,o}});e.resolveModuleURL=function(e){return shz.script.getDepUrl("".concat("/npm-bridge/dist/dynamic","/").concat(e))},Object.defineProperty(e,"__esModule",{value:!0})}({});