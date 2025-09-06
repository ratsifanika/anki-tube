function e(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,n=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;class i{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(n&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new i(n,e,r)},a=n?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,f=globalThis,m=f.trustedTypes,g=m?m.emptyScript:"",v=f.reactiveElementPolyfillSupport,b=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},y=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class _ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),r=this.getPropertyDescriptor(e,n,t);void 0!==r&&l(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){const{get:r,set:o}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const i=r?.call(this);o?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(n)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const n of r){const r=document.createElement("style"),o=t.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==n.converter?.toAttribute?n.converter:w).toAttribute(t,n.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const n=this.constructor,r=n._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=n.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=r,this[r]=o.fromAttribute(t,e.type)??this._$Ej?.get(r)??null,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const r=this.constructor,o=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??y)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[b("elementProperties")]=new Map,_[b("finalized")]=new Map,v?.({ReactiveElement:_}),(f.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,A=$.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,k="?"+S,R=`<${k}>`,O=document,P=()=>O.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,U="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,M=/>/g,j=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,z=/"/g,H=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),V=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),F=new WeakMap,W=O.createTreeWalker(O,129);function J(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const K=(e,t)=>{const n=e.length-1,r=[];let o,i=2===t?"<svg>":3===t?"<math>":"",s=N;for(let t=0;t<n;t++){const n=e[t];let a,c,l=-1,d=0;for(;d<n.length&&(s.lastIndex=d,c=s.exec(n),null!==c);)d=s.lastIndex,s===N?"!--"===c[1]?s=L:void 0!==c[1]?s=M:void 0!==c[2]?(H.test(c[2])&&(o=RegExp("</"+c[2],"g")),s=j):void 0!==c[3]&&(s=j):s===j?">"===c[0]?(s=o??N,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?j:'"'===c[3]?z:D):s===z||s===D?s=j:s===L||s===M?s=N:(s=j,o=void 0);const h=s===j&&e[t+1].startsWith("/>")?" ":"";i+=s===N?n+R:l>=0?(r.push(a),n.slice(0,l)+C+n.slice(l)+S+h):n+S+(-2===l?t:h)}return[J(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class G{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0;const s=e.length-1,a=this.parts,[c,l]=K(e,t);if(this.el=G.createElement(c,n),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=W.nextNode())&&a.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(C)){const t=l[i++],n=r.getAttribute(e).split(S),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:s[2],strings:n,ctor:"."===s[1]?ee:"?"===s[1]?te:"@"===s[1]?ne:X}),r.removeAttribute(e)}else e.startsWith(S)&&(a.push({type:6,index:o}),r.removeAttribute(e));if(H.test(r.tagName)){const e=r.textContent.split(S),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],P()),W.nextNode(),a.push({type:2,index:++o});r.append(e[t],P())}}}else if(8===r.nodeType)if(r.data===k)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(S,e+1));)a.push({type:7,index:o}),e+=S.length-1}o++}}static createElement(e,t){const n=O.createElement("template");return n.innerHTML=e,n}}function Y(e,t,n=e,r){if(t===V)return t;let o=void 0!==r?n._$Co?.[r]:n._$Cl;const i=I(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,n,r)),void 0!==r?(n._$Co??=[])[r]=o:n._$Cl=o),void 0!==o&&(t=Y(e,o._$AS(e,t.values),o,r)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??O).importNode(t,!0);W.currentNode=r;let o=W.nextNode(),i=0,s=0,a=n[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new Q(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new re(o,this,e)),this._$AV.push(t),a=n[++s]}i!==a?.index&&(o=W.nextNode(),i++)}return W.currentNode=O,r}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),I(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==V&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=G.createElement(J(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new Z(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=F.get(e.strings);return void 0===t&&F.set(e.strings,t=new G(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const o of e)r===t.length?t.push(n=new Q(this.O(P()),this.O(P()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}_$AI(e,t=this,n,r){const o=this.strings;let i=!1;if(void 0===o)e=Y(this,e,t,0),i=!I(e)||e!==this._$AH&&e!==V,i&&(this._$AH=e);else{const r=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Y(this,r[n+s],t,s),a===V&&(a=this._$AH[s]),i||=!I(a)||a!==this._$AH[s],a===q?e=q:e!==q&&(e+=(a??"")+o[s+1]),this._$AH[s]=a}i&&!r&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class ne extends X{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??q)===V)return;const n=this._$AH,r=e===q&&n!==q||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==q&&(n===q||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const oe=$.litHtmlPolyfillSupport;oe?.(G,Q),($.litHtmlVersions??=[]).push("3.3.0");const ie=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class se extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const e=n?.renderBefore??null;r._$litPart$=o=new Q(t.insertBefore(P(),e),e,void 0,n??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}se._$litElement$=!0,se.finalized=!0,ie.litElementHydrateSupport?.({LitElement:se});const ae=ie.litElementPolyfillSupport;ae?.({LitElement:se}),(ie.litElementVersions??=[]).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=e=>(t,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:y},de=(e=le,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),"accessor"===r){const{name:r}=n;return{set(n){const o=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,o,e)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=n;return function(n){const o=this[r];t.call(this,n),this.requestUpdate(r,o,e)}}throw Error("Unsupported decorator location: "+r)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,n)=>"object"==typeof n?de(e,t,n):((e,t,n)=>{const r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return he({...e,state:!0,attribute:!1})}function pe(e,t){void 0===t&&(t={});for(var n=function(e){for(var t=[],n=0;n<e.length;){var r=e[n];if("*"!==r&&"+"!==r&&"?"!==r)if("\\"!==r)if("{"!==r)if("}"!==r)if(":"!==r)if("("!==r)t.push({type:"CHAR",index:n,value:e[n++]});else{var o=1,i="";if("?"===e[a=n+1])throw new TypeError('Pattern cannot start with "?" at '.concat(a));for(;a<e.length;)if("\\"!==e[a]){if(")"===e[a]){if(0===--o){a++;break}}else if("("===e[a]&&(o++,"?"!==e[a+1]))throw new TypeError("Capturing groups are not allowed at ".concat(a));i+=e[a++]}else i+=e[a++]+e[a++];if(o)throw new TypeError("Unbalanced pattern at ".concat(n));if(!i)throw new TypeError("Missing pattern at ".concat(n));t.push({type:"PATTERN",index:n,value:i}),n=a}else{for(var s="",a=n+1;a<e.length;){var c=e.charCodeAt(a);if(!(c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122||95===c))break;s+=e[a++]}if(!s)throw new TypeError("Missing parameter name at ".concat(n));t.push({type:"NAME",index:n,value:s}),n=a}else t.push({type:"CLOSE",index:n,value:e[n++]});else t.push({type:"OPEN",index:n,value:e[n++]});else t.push({type:"ESCAPED_CHAR",index:n++,value:e[n++]});else t.push({type:"MODIFIER",index:n,value:e[n++]})}return t.push({type:"END",index:n,value:""}),t}(e),r=t.prefixes,o=void 0===r?"./":r,i=t.delimiter,s=void 0===i?"/#?":i,a=[],c=0,l=0,d="",h=function(e){if(l<n.length&&n[l].type===e)return n[l++].value},u=function(e){var t=h(e);if(void 0!==t)return t;var r=n[l],o=r.type,i=r.index;throw new TypeError("Unexpected ".concat(o," at ").concat(i,", expected ").concat(e))},p=function(){for(var e,t="";e=h("CHAR")||h("ESCAPED_CHAR");)t+=e;return t},f=function(e){var t=a[a.length-1],n=e||(t&&"string"==typeof t?t:"");if(t&&!n)throw new TypeError('Must have text between two parameters, missing text after "'.concat(t.name,'"'));return!n||function(e){for(var t=0,n=s;t<n.length;t++){var r=n[t];if(e.indexOf(r)>-1)return!0}return!1}(n)?"[^".concat(ge(s),"]+?"):"(?:(?!".concat(ge(n),")[^").concat(ge(s),"])+?")};l<n.length;){var m=h("CHAR"),g=h("NAME"),v=h("PATTERN");if(g||v){var b=m||"";-1===o.indexOf(b)&&(d+=b,b=""),d&&(a.push(d),d=""),a.push({name:g||c++,prefix:b,suffix:"",pattern:v||f(b),modifier:h("MODIFIER")||""})}else{var w=m||h("ESCAPED_CHAR");if(w)d+=w;else if(d&&(a.push(d),d=""),h("OPEN")){b=p();var y=h("NAME")||"",x=h("PATTERN")||"",_=p();u("CLOSE"),a.push({name:y||(x?c++:""),pattern:y&&!x?f(b):x,prefix:b,suffix:_,modifier:h("MODIFIER")||""})}else u("END")}}return a}function fe(e,t){return me(pe(e,t),t)}function me(e,t){void 0===t&&(t={});var n=ve(t),r=t.encode,o=void 0===r?function(e){return e}:r,i=t.validate,s=void 0===i||i,a=e.map(function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),n)});return function(t){for(var n="",r=0;r<e.length;r++){var i=e[r];if("string"!=typeof i){var c=t?t[i.name]:void 0,l="?"===i.modifier||"*"===i.modifier,d="*"===i.modifier||"+"===i.modifier;if(Array.isArray(c)){if(!d)throw new TypeError('Expected "'.concat(i.name,'" to not repeat, but got an array'));if(0===c.length){if(l)continue;throw new TypeError('Expected "'.concat(i.name,'" to not be empty'))}for(var h=0;h<c.length;h++){var u=o(c[h],i);if(s&&!a[r].test(u))throw new TypeError('Expected all "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(u,'"'));n+=i.prefix+u+i.suffix}}else if("string"!=typeof c&&"number"!=typeof c){if(!l){var p=d?"an array":"a string";throw new TypeError('Expected "'.concat(i.name,'" to be ').concat(p))}}else{u=o(String(c),i);if(s&&!a[r].test(u))throw new TypeError('Expected "'.concat(i.name,'" to match "').concat(i.pattern,'", but got "').concat(u,'"'));n+=i.prefix+u+i.suffix}}else n+=i}return n}}function ge(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function ve(e){return e&&e.sensitive?"":"i"}function be(e,t,n){return function(e,t,n){void 0===n&&(n={});for(var r=n.strict,o=void 0!==r&&r,i=n.start,s=void 0===i||i,a=n.end,c=void 0===a||a,l=n.encode,d=void 0===l?function(e){return e}:l,h=n.delimiter,u=void 0===h?"/#?":h,p=n.endsWith,f="[".concat(ge(void 0===p?"":p),"]|$"),m="[".concat(ge(u),"]"),g=s?"^":"",v=0,b=e;v<b.length;v++){var w=b[v];if("string"==typeof w)g+=ge(d(w));else{var y=ge(d(w.prefix)),x=ge(d(w.suffix));if(w.pattern)if(t&&t.push(w),y||x)if("+"===w.modifier||"*"===w.modifier){var _="*"===w.modifier?"?":"";g+="(?:".concat(y,"((?:").concat(w.pattern,")(?:").concat(x).concat(y,"(?:").concat(w.pattern,"))*)").concat(x,")").concat(_)}else g+="(?:".concat(y,"(").concat(w.pattern,")").concat(x,")").concat(w.modifier);else{if("+"===w.modifier||"*"===w.modifier)throw new TypeError('Can not repeat "'.concat(w.name,'" without a prefix and suffix'));g+="(".concat(w.pattern,")").concat(w.modifier)}else g+="(?:".concat(y).concat(x,")").concat(w.modifier)}}if(c)o||(g+="".concat(m,"?")),g+=n.endsWith?"(?=".concat(f,")"):"$";else{var $=e[e.length-1],A="string"==typeof $?m.indexOf($[$.length-1])>-1:void 0===$;o||(g+="(?:".concat(m,"(?=").concat(f,"))?")),A||(g+="(?=".concat(m,"|").concat(f,")"))}return new RegExp(g,ve(n))}(pe(e,n),t,n)}function we(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;for(var n=/\((?:\?<(.*?)>)?(?!\?)/g,r=0,o=n.exec(e.source);o;)t.push({name:o[1]||r++,prefix:"",suffix:"",modifier:"",pattern:""}),o=n.exec(e.source);return e}(e,t):Array.isArray(e)?function(e,t,n){var r=e.map(function(e){return we(e,t,n).source});return new RegExp("(?:".concat(r.join("|"),")"),ve(n))}(e,t,n):be(e,t,n)}function ye(e){return"object"==typeof e&&!!e}function xe(e){return"function"==typeof e}function _e(e){return"string"==typeof e}function $e(e=[]){return Array.isArray(e)?e:[e]}function Ae(e){return`[Vaadin.Router] ${e}`}class Ee extends Error{code;context;constructor(e){super(Ae(`Page not found (${e.pathname})`)),this.context=e,this.code=404}}const Ce=Symbol("NotFoundResult");function Se(e){return new Ee(e)}function ke(e){return(Array.isArray(e)?e[0]:e)??""}function Re(e){return ke(e?.path)}const Oe=new Map;function Pe(e){try{return decodeURIComponent(e)}catch{return e}}Oe.set("|false",{keys:[],pattern:/(?:)/u});var Ie=function(e,t,n=!1,r=[],o){const i=`${e}|${String(n)}`,s=ke(t);let a=Oe.get(i);if(!a){const t=[];a={keys:t,pattern:we(e,t,{end:n,strict:""===e})},Oe.set(i,a)}const c=a.pattern.exec(s);if(!c)return null;const l={...o};for(let e=1;e<c.length;e++){const t=a.keys[e-1],n=t.name,r=c[e];void 0===r&&Object.hasOwn(l,n)||("+"===t.modifier||"*"===t.modifier?l[n]=r?r.split(/[/?#]/u).map(Pe):[]:l[n]=r?Pe(r):r)}return{keys:[...r,...a.keys],params:l,path:c[0]}};var Te=function e(t,n,r,o,i){let s,a,c=0,l=Re(t);return l.startsWith("/")&&(r&&(l=l.substring(1)),r=!0),{next(d){if(t===d)return{done:!0,value:void 0};t.__children??=function(e){return Array.isArray(e)&&e.length>0?e:void 0}(t.children);const h=t.__children??[],u=!t.__children&&!t.children;if(!s&&(s=Ie(l,n,u,o,i),s))return{value:{keys:s.keys,params:s.params,path:s.path,route:t}};if(s&&h.length>0)for(;c<h.length;){if(!a){const o=h[c];o.parent=t;let i=s.path.length;i>0&&"/"===n.charAt(i)&&(i+=1),a=e(o,n.substring(i),r,s.keys,s.params)}const o=a.next(d);if(!o.done)return{done:!1,value:o.value};a=null,c+=1}return{done:!0,value:void 0}}}};function Ue(e){if(xe(e.route.action))return e.route.action(e)}class Ne extends Error{code;context;constructor(e,t){let n=`Path '${e.pathname}' is not properly resolved due to an error.`;const r=Re(e.route);r&&(n+=` Resolution had failed on route: '${r}'`),super(n,t),this.code=t?.code,this.context=e}warn(){console.warn(this.message)}}class Le{baseUrl;#e;errorHandler;resolveRoute;#t;constructor(e,{baseUrl:t="",context:n,errorHandler:r,resolveRoute:o=Ue}={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t,this.errorHandler=r,this.resolveRoute=o,Array.isArray(e)?this.#t={__children:e,__synthetic:!0,action:()=>{},path:""}:this.#t={...e,parent:void 0},this.#e={...n,hash:"",next:async()=>Ce,params:{},pathname:"",resolver:this,route:this.#t,search:"",chain:[]}}get root(){return this.#t}get context(){return this.#e}get __effectiveBaseUrl(){return this.baseUrl?new URL(this.baseUrl,document.baseURI||document.URL).href.replace(/[^/]*$/u,""):""}getRoutes(){return[...this.#t.__children??[]]}removeRoutes(){this.#t.__children=[]}async resolve(e){const t=this,n={...this.#e,..._e(e)?{pathname:e}:e,next:c},r=Te(this.#t,this.__normalizePathname(n.pathname)??n.pathname,!!this.baseUrl),o=this.resolveRoute;let i=null,s=null,a=n;async function c(e=!1,l=i?.value?.route,d){const h=null===d?i?.value?.route:void 0;if(i=s??r.next(h),s=null,!e&&(i.done||!function(e,t){let n=e;for(;n;)if(n=n.parent,n===t)return!0;return!1}(i.value.route,l)))return s=i,Ce;if(i.done)throw Se(n);a={...n,params:i.value.params,route:i.value.route,chain:a.chain?.slice()},function(e,t){const{path:n,route:r}=t;if(r&&!r.__synthetic){const t={path:n,route:r};if(r.parent&&e.chain)for(let t=e.chain.length-1;t>=0&&e.chain[t].route!==r.parent;t--)e.chain.pop();e.chain?.push(t)}}(a,i.value);const u=await o(a);return null!=u&&u!==Ce?(a.result=(p=u)&&"object"==typeof p&&"next"in p&&"params"in p&&"result"in p&&"route"in p?u.result:u,t.#e=a,a):await c(e,l,u);var p}try{return await c(!0,this.#t)}catch(e){const t=e instanceof Ee?e:new Ne(a,{code:500,cause:e});if(this.errorHandler)return a.result=this.errorHandler(t),a;throw e}}setRoutes(e){this.#t.__children=[...$e(e)]}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=e.startsWith("/")?new URL(t).origin+e:`./${e}`,r=new URL(n,t).href;return r.startsWith(t)?r.slice(t.length):void 0}addRoutes(e){return this.#t.__children=[...this.#t.__children??[],...$e(e)],this.getRoutes()}}function Me(e,t,n,r){const o=t.name??r?.(t);if(o&&(e.has(o)?e.get(o)?.push(t):e.set(o,[t])),Array.isArray(n))for(const o of n)o.parent=t,Me(e,o,o.__children??o.children,r)}function je(e,t){const n=e.get(t);if(n){if(n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n[0]}}var De=function(e,t={}){if(!(e instanceof Le))throw new TypeError("An instance of Resolver is expected");const n=new Map,r=new Map;return(o,i)=>{let s=je(r,o);if(!s&&(r.clear(),Me(r,e.root,e.root.__children,t.cacheKeyProvider),s=je(r,o),!s))throw new Error(`Route "${o}" not found`);let a=s.fullPath?n.get(s.fullPath):void 0;if(!a){let e=Re(s),t=s.parent;for(;t;){const n=Re(t);n&&(e=`${n.replace(/\/$/u,"")}/${e.replace(/^\//u,"")}`),t=t.parent}const r=pe(e),o=Object.create(null);for(const e of r)_e(e)||(o[e.name]=!0);a={keys:o,tokens:r},n.set(e,a),s.fullPath=e}let c=me(a.tokens,{encode:encodeURIComponent,...t})(i)||"/";if(t.stringifyQueryParams&&i){const e={};for(const[t,n]of Object.entries(i))!(t in a.keys)&&n&&(e[t]=n);const n=t.stringifyQueryParams(e);n&&(c+=n.startsWith("?")?n:`?${n}`)}return c}};const ze=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,He=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Be(e,t){if("function"!=typeof e)return;const n=ze.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const Ve=function(e,t){if(window.Vaadin.developmentMode)return Be(e,t)};function qe(){
/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(He?!(He&&Object.keys(He).map(e=>He[e]).filter(e=>e.productionMode).length>0):!Be(function(){return!0}))}catch(e){return!1}}());!function(e,t=(window.Vaadin??={})){t.registrations??=[],t.registrations.push({is:e?`@vaadin/router/${e}`:"@vaadin/router",version:"2.0.0"})}(),Ve(qe);var Fe=async function(e,t){return e.classList.add(t),await new Promise(n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})};function We(e){if(!e||!_e(e.path))throw new Error(Ae('Expected route config to be an object with a "path" string property, or an array of such objects'));if(!(xe(e.action)||Array.isArray(e.children)||xe(e.children)||_e(e.component)||_e(e.redirect)))throw new Error(Ae(`Expected route config "${e.path}" to include either "component, redirect" or "action" function but none found.`));e.redirect&&["bundle","component"].forEach(t=>{t in e&&console.warn(Ae(`Route config "${String(e.path)}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))})}function Je(e){$e(e).forEach(e=>We(e))}function Ke(e,t){const n=t.__effectiveBaseUrl;return n?new URL(e.replace(/^\//u,""),n).pathname:e}function Ge(e){return e.map(e=>e.path).reduce((e,t)=>t.length?`${e.replace(/\/$/u,"")}/${t.replace(/^\//u,"")}`:e,"")}function Ye({chain:e=[],hash:t="",params:n={},pathname:r="",redirectFrom:o,resolver:i,search:s=""},a){const c=e.map(e=>e.route);return{baseUrl:i?.baseUrl??"",getUrl:(t={})=>i?Ke(fe(function(e){return Ge(e.map(e=>e.route))}(e))({...n,...t}),i):"",hash:t,params:n,pathname:r,redirectFrom:o,route:a??(Array.isArray(c)?c.at(-1):void 0)??null,routes:c,search:s,searchParams:new URLSearchParams(s)}}function Ze(e,t){const n={...e.params};return{redirect:{from:e.pathname,params:n,pathname:t}}}function Qe(e,t,...n){if("function"==typeof e)return e.apply(t,n)}function Xe(e,t,...n){return r=>r&&ye(r)&&("cancel"in r||"redirect"in r)?r:Qe(t?.[e],t,...n)}function et(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function tt(e){if(e instanceof Element)return e.nodeName.toLowerCase()}function nt(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e instanceof MouseEvent?e.composedPath():e.path??[];for(let e=0;e<n.length;e++){const r=n[e];if("nodeName"in r&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&t instanceof Node&&"a"!==tt(t);)t=t.parentNode;if(!t||"a"!==tt(t))return;const r=t;if(r.target&&"_self"!==r.target.toLowerCase())return;if(r.hasAttribute("download"))return;if(r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&""!==r.hash)return;const o=r.origin||function(e){const{port:t,protocol:n}=e;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(r);if(o!==window.location.origin)return;const{hash:i,pathname:s,search:a}=r;et("go",{hash:i,pathname:s,search:a})&&e instanceof MouseEvent&&(e.preventDefault(),"click"===e.type&&window.scrollTo(0,0))}function rt(e){if("vaadin-router-ignore"===e.state)return;const{hash:t,pathname:n,search:r}=window.location;et("go",{hash:t,pathname:n,search:r})}let ot=[];const it={CLICK:{activate(){window.document.addEventListener("click",nt)},inactivate(){window.document.removeEventListener("click",nt)}},POPSTATE:{activate(){window.addEventListener("popstate",rt)},inactivate(){window.removeEventListener("popstate",rt)}}};function st(e=[]){ot.forEach(e=>e.inactivate()),e.forEach(e=>e.activate()),ot=e}function at(){return{cancel:!0}}const ct={__renderId:-1,params:{},route:{__synthetic:!0,children:[],path:"",action(){}},pathname:"",next:async()=>Ce};class lt extends Le{location=Ye({resolver:this});ready=Promise.resolve(this.location);#n=new WeakSet;#r=new WeakSet;#o=this.#i.bind(this);#s=0;#a;__previousContext;#c;#l=null;#d=null;constructor(e,t){const n=document.head.querySelector("base"),r=n?.getAttribute("href");super([],{baseUrl:r?new URL(r,document.URL).href.replace(/[^/]*$/u,""):void 0,...t,resolveRoute:async e=>await this.#h(e)}),st(Object.values(it)),this.setOutlet(e),this.subscribe()}async#h(e){const{route:t}=e;if(xe(t.children)){let n=await t.children(function({next:e,...t}){return t}(e));xe(t.children)||({children:n}=t),function(e,t){if(!Array.isArray(e)&&!ye(e))throw new Error(Ae(`Incorrect "children" value for the route ${String(t.path)}: expected array or object, but got ${String(e)}`));const n=$e(e);n.forEach(e=>We(e)),t.__children=n}(n,t)}const n={component:e=>{const t=document.createElement(e);return this.#r.add(t),t},prevent:at,redirect:t=>Ze(e,t)};return await Promise.resolve().then(async()=>{if(this.#u(e))return await Qe(t.action,t,e,n)}).then(e=>null==e||"object"!=typeof e&&"symbol"!=typeof e||!(e instanceof HTMLElement||e===Ce||ye(e)&&"redirect"in e)?_e(t.redirect)?n.redirect(t.redirect):void 0:e).then(e=>null!=e?e:_e(t.component)?n.component(t.component):void 0)}setOutlet(e){e&&this.#p(e),this.#a=e}getOutlet(){return this.#a}async setRoutes(e,t=!1){return this.__previousContext=void 0,this.#c=void 0,Je(e),super.setRoutes(e),t||this.#i(),await this.ready}addRoutes(e){return Je(e),super.addRoutes(e)}async render(e,t=!1){this.#s+=1;const n=this.#s,r={...ct,..._e(e)?{hash:"",search:"",pathname:e}:e,__renderId:n};return this.ready=this.#f(r,t),await this.ready}async#f(e,t){const{__renderId:n}=e;try{const r=await this.resolve(e),o=await this.#m(r);if(!this.#u(o))return this.location;const i=this.__previousContext;if(o===i)return this.#g(i,!0),this.location;if(this.location=Ye(o),t&&this.#g(o,1===n),et("location-changed",{router:this,location:this.location}),o.__skipAttach)return this.#v(o,i),this.__previousContext=o,this.location;this.#b(o,i);const s=this.#w(o);if(this.#y(o),this.#x(o,i),await s,this.#u(o))return this.#_(),this.__previousContext=o,this.location}catch(r){if(n===this.#s){t&&this.#g(this.context);for(const e of this.#a?.children??[])e.remove();throw this.location=Ye(Object.assign(e,{resolver:this})),et("error",{router:this,error:r,...e}),r}}return this.location}async#m(e,t=e){const n=await this.#$(t),r=n!==t?n:e,o=Ke(Ge(n.chain??[]),this)===n.pathname,i=async(e,t=e.route,n)=>{const r=await e.next(!1,t,n);return null===r||r===Ce?o?e:null!=t.parent?await i(e,t.parent,r):r:r},s=await i(n);if(null==s||s===Ce)throw Se(r);return s!==n?await this.#m(r,s):await this.#A(n)}async#$(e){const{result:t}=e;if(t instanceof HTMLElement)return function(e,t){if(t.location=Ye(e),e.chain){const n=e.chain.map(e=>e.route).indexOf(e.route);e.chain[n].element=t}}(e,t),e;if(t&&"redirect"in t){const n=await this.#E(t.redirect,e.__redirectCount,e.__renderId);return await this.#$(n)}throw t instanceof Error?t:new Error(Ae(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const[t="Unknown"]=/ (.*)\]$/u.exec(String(e))??[];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`))}async#A(e){return await this.#C(e).then(async t=>t===this.__previousContext||t===e?t:await this.#m(t))}async#C(e){const t=this.__previousContext??{},n=t.chain??[],r=e.chain??[];let o=Promise.resolve(void 0);const i=t=>Ze(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.#S(n[t].element,r[t].element));e.__divergedChainIndex++,t++);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex===r.length&&this.#S(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.#k(o,e,{prevent:at},n[t]);for(let t=0;t<r.length;t++)o=this.#R(o,e,{prevent:at,redirect:i},r[t]),n[t].element.location=Ye(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.#k(o,e,{prevent:at},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Ye(e,n[t].route)):(o=this.#R(o,e,{prevent:at,redirect:i},r[t]),r[t].element&&(r[t].element.location=Ye(e,r[t].route)));return await o.then(async t=>{if(t&&ye(t)){if("cancel"in t&&this.__previousContext)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if("redirect"in t)return await this.#E(t.redirect,e.__redirectCount,e.__renderId)}return e})}async#k(e,t,n,r){const o=Ye(t);let i=await e;if(this.#u(t)){i=Xe("onBeforeLeave",r.element,o,n,this)(i)}if(!ye(i)||!("redirect"in i))return i}async#R(e,t,n,r){const o=Ye(t,r.route),i=await e;if(this.#u(t)){return Xe("onBeforeEnter",r.element,o,n,this)(i)}}#S(e,t){return e instanceof Element&&t instanceof Element&&(this.#r.has(e)&&this.#r.has(t)?e.localName===t.localName:e===t)}#u(e){return e.__renderId===this.#s}async#E(e,t=0,n=0){if(t>256)throw new Error(Ae(`Too many redirects when rendering ${e.from}`));return await this.resolve({...ct,pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:t+1,__renderId:n})}#p(e=this.#a){if(!(e instanceof Element||e instanceof DocumentFragment))throw new TypeError(Ae(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${e})`))}#g({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}#v(e,t){let n=this.#a;for(let r=0;r<(e.__divergedChainIndex??0);r++){const o=t?.chain?.[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}#b(e,t){this.#p(),this.#O();const n=this.#v(e,t);this.#l=[],this.#d=Array.from(n?.children??[]).filter(t=>this.#n.has(t)&&t!==e.result);let r=n;for(let t=e.__divergedChainIndex??0;t<(e.chain?.length??0);t++){const o=e.chain[t].element;o&&(r?.appendChild(o),this.#n.add(o),r===n&&this.#l.push(o),r=o)}}#_(){if(this.#d)for(const e of this.#d)e.remove();this.#d=null,this.#l=null}#O(){if(this.#d&&this.#l){for(const e of this.#l)e.remove();this.#d=null,this.#l=null}}#x(e,t){if(t?.chain&&null!=e.__divergedChainIndex)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.#u(e);n--){const r=t.chain[n].element;if(r)try{const t=Ye(e);Qe(r.onAfterLeave,r,t,{},this)}finally{if(this.#d?.includes(r))for(const e of r.children)e.remove()}}}#y(e){if(e.chain&&null!=e.__divergedChainIndex)for(let t=e.__divergedChainIndex;t<e.chain.length&&this.#u(e);t++){const n=e.chain[t].element;if(n){const r=Ye(e,e.chain[t].route);Qe(n.onAfterEnter,n,r,{},this)}}}async#w(e){const t=this.#d?.[0],n=this.#l?.[0],r=[],{chain:o=[]}=e;let i;for(let e=o.length-1;e>=0;e--)if(o[e].route.animate){i=o[e].route.animate;break}if(t&&n&&i){const e=ye(i)&&i.leave?i.leave:"leaving",o=ye(i)&&i.enter?i.enter:"entering";r.push(Fe(t,e)),r.push(Fe(n,o))}return await Promise.all(r),e}subscribe(){window.addEventListener("vaadin-router-go",this.#o)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.#o)}#i(e){const{pathname:t,search:n,hash:r}=e instanceof CustomEvent?e.detail:window.location;_e(this.__normalizePathname(t))&&(e?.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){st(e)}urlForName(e,t){return this.#c||(this.#c=De(this,{cacheKeyProvider:e=>"component"in e&&"string"==typeof e.component?e.component:void 0})),Ke(this.#c(e,t??void 0),this)}urlForPath(e,t){return Ke(fe(e)(t??void 0),this)}static go(e){const{pathname:t,search:n,hash:r}=_e(e)?new URL(e,"http://a"):e;return et("go",{pathname:t,search:n,hash:r})}}let dt=class extends se{toggleSidebar(){const e=this.shadowRoot?.querySelector(".sidebar"),t=this.shadowRoot?.querySelector("#main-content");e&&t&&(e.classList.toggle("collapsed"),t.classList.toggle("expanded"))}_onCollectionSelected(e){const t=e.detail.collectionId,n=this.shadowRoot?.querySelector("#main-content"),r=document.createElement("current-collection");r.collectionId=t,n.innerHTML="",n.appendChild(r)}_onNewCollection(){const e=this.shadowRoot?.querySelector("#main-content");e.innerHTML="";const t=document.createElement("new-collection");e.appendChild(t)}firstUpdated(){new lt(this.renderRoot.querySelector("#main-content")).setRoutes([{path:"/",component:"new-collection"},{path:"/collection/:id",component:"current-collection"},{path:"/register",component:"auth-register"},{path:"/login",component:"auth-login"},{path:"/about",component:"about-view"}])}render(){return B`
       <app-nav></app-nav>
        <div class="app-container">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <h3><a href="/">Nouvelle collection</a></h3>
                    <button class="toggle-sidebar" @click="${this.toggleSidebar}">X</button>
                </div>
                <nav class="collection-list">
                    <collection-list></collection-list>
                </nav>
            </aside>

            <main class="main-content">
                <div id="main-content" class="content-wrapper">
                </div>
            </main>
        </div>
        `}};dt.styles=[s`
            .app-container {
                display: flex; /* Flexbox pour la disposition latérale */
                width: 100%;
                min-height: 100vh; /* Prend toute la hauteur disponible */
                box-sizing: border-box;
            }
            .sidebar {
                width: 250px; /* Largeur par défaut de la barre latérale */
                background-color: #f8f9fa;
                border-right: 1px solid #e0e0e0;
                padding: 20px;
                display: flex;
                flex-direction: column;
                transition: width 0.3s ease-in-out; /* Animation pour le pliage/dépliage */
                box-sizing: border-box;
                flex-shrink: 0; /* Empêche la barre latérale de rétrécir */
            }

            .sidebar.collapsed {
                width: 60px; /* Largeur réduite quand pliée */
                overflow: hidden; /* Cache le contenu débordant */
            }

            .sidebar-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 20px;
            }

            .sidebar.collapsed .sidebar-header h3 {
                display: none; /* Cache le titre quand la barre est pliée */
            }

            .sidebar.collapsed .sidebar-header .toggle-sidebar {
                margin: auto; /* Centre le bouton quand il est seul */
            }

            .toggle-sidebar {
                background: none;
                border: none;
                font-size: 1.2em;
                cursor: pointer;
                padding: 5px;
                border-radius: 5px;
                transition: background-color 0.2s;
            }

            .toggle-sidebar:hover {
                background-color: #e0e0e0;
            }
            /* Contenu principal (où la barre de recherche est centrée) */
            .main-content {
                flex-grow: 1; /* Prend l'espace restant */
                display: block; /* Active Flexbox pour centrer le contenu */
                justify-content: center; /* Centre horizontalement le contenu */
                align-items: center; /* Centre verticalement le contenu */
                padding: 20px 40px;
                box-sizing: border-box;
                transition: margin-left 0.3s ease-in-out; /* Pour l'animation si la barre latérale pousse le contenu */
            }

            .main-content.expanded {
                margin-left: 0; /* Réinitialise la marge si la barre est dépliée et pousse le contenu */
            }

            .current-collection {
                flex-grow: 1;
                display: block; /* Active Flexbox pour centrer le contenu */
                padding: 20px 40px;
                box-sizing: border-box;
                transition: margin-left 0.3s ease-in-out; /* Pour l'animation si la barre latérale pousse le contenu */
            }
           .sidebar.collapsed .collection-list collection-list::part(list-item) {
                display: none;
            }

            .sidebar.collapsed .collection-list collection-list::part(list-item):first-child {
                display: block;
                text-align: center;

            }
            .content-wrapper {
                max-width: 1000px;  /* ou 1000px, selon design */
                margin: 0 auto;    /* ✅ centre horizontalement */
            }
            `],dt=e([ce("app-container")],dt);const ht="http://backend";let ut=class extends se{constructor(){super(...arguments),this.error=null,this.loading=!1}async _handleClick(){const e=this.shadowRoot?.querySelector('input[type="text"]'),t=e.value.trim();if(t)try{this.loading=!0;const e=await this._callBackend(t);if(200===e.status){const t=e.collectionId;console.log("Collection créée avec l'ID:",t),window.location.href="/collection/"+t}else this.error="Erreur lors de la création de la collection. Veuillez réessayer."}catch(e){this.error="Erreur inattendue: ${error}"}finally{this.loading=!1}else alert("Veuillez saisir une URL valide.")}async _callBackend(e){try{const t=localStorage.getItem("access_token"),n=await fetch(`${ht}/api/generate-cards`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({video_url:e,difficulty:"intermediaire",card_count:5,language:"en"})});if(!n.ok)return{status:n.status,collectionId:""};const r=await n.json();return{status:n.status,collectionId:r.collection_uuid}}catch{return{status:500,collectionId:""}}}render(){return B`
      <div class="container">
        <h1>Créer une nouvelle collection</h1>
         <div class="search-box">
            <input type="text" placeholder="Saisir une URL" ?disabled=${this.loading}>
            <button @click=${this._handleClick} ?disabled=${this.loading}>🪄</button>
         </div>
          ${this.loading?B`<p>Chargement...</p>`:""}
          ${this.error?B`<p style="color: red;">${this.error}</p>`:""}
      </div>
    `}};ut.styles=[s`
      .container {
        display:block;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 600px;
        padding: 20px;
        box-sizing: border-box;
        margin: 0 auto; /* Center the container */
      }

      .search-box {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      input[type="text"] {
        flex-grow: 1;
        border: none;
        outline: none;
        font-size: 16px;
        padding: 5px 0;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 20px;
        color: #5f6368;
        margin-left: 10px;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      button:hover {
        color: #202124;
      }
      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
    `],e([ue()],ut.prototype,"error",void 0),e([ue()],ut.prototype,"loading",void 0),ut=e([ce("new-collection")],ut);class pt{constructor(e,t,n,r=1,o=0,i=0,s=[],a=new Date,c=new Date){this.id=e,this.front=t,this.back=n,this.difficulty=r,this.numberOfViews=o,this.numberOfGoodAnswers=i,this.tags=s,this.createdAt=a,this.updatedAt=c}static fromJSON(e){return new pt(e.id,e.front,e.back,e.difficulty||1,e.seen||0,e.answered_correctly||0,e.tags||[],new Date(e.createdAt),new Date(e.updatedAt))}update(e,t,n=[]){this.front=e,this.back=t,this.tags=n,this.updatedAt=new Date}}class ft{constructor(e,t,n,r=[],o,i){this.id=e,this.uuid=t,this.name=n,this.cards=r,this.createdAt=o,this.updatedAt=i}static fromJSON(e){return new ft(e.id,e.uuid,e.video_title,e.cards?e.cards.map(e=>pt.fromJSON(e)):[],new Date(e.createdAt),new Date(e.updatedAt))}randomCard(){if(0===this.cards.length)return null;const e=Math.floor(Math.random()*this.cards.length);return this.cards[e]}}class mt{constructor(e,t,n=""){this.cardId=e,this.correct=t,this.comment=n}static fromJSON(e){return new mt(e.cardId,e.correct,e.comment||"")}}let gt=class extends se{constructor(){super(...arguments),this.collectionId=null,this.collectionData=null,this.isLoading=!0,this.currentCard=null,this.lastCardEvaluation=null,this.userAnswer="",this.totalCards=10,this.openedCards=5,this.correctAnswers=3,this.isModalOpen=!1}onBeforeEnter(e){this.collectionId=e.params.id}willUpdate(e){e.has("collectionId")&&this.collectionId&&this.fetchCollectionData()}async fetchCollectionData(){if(this.collectionId){this.isLoading=!0;try{const e=await fetch(`${ht}/api/collection/${this.collectionId}`);if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();console.log("Data fetched:",t),this.collectionData=ft.fromJSON(t),console.log("Collection data fetched:",this.collectionData),this.currentCard=await this.getRandomCard()}catch(e){console.error("Error fetching collection data:",e)}finally{this.isLoading=!1}}else console.warn("Collection ID is not set.")}async getRandomCard(){this.lastCardEvaluation=null;const e=await fetch(`${ht}/api/collection/${this.collectionData?.id}/random`);if(!e.ok)return console.error("Failed to fetch random card:",e.statusText),null;const t=await e.json();return console.log("Random card data:",t),pt.fromJSON(t)}async validateResponse(){if(!this.userAnswer||!this.currentCard)return void alert("Veuillez entrer une réponse avant de valider!");const e=await fetch(`${ht}/api/card/evaluate-answer`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({card_id:this.currentCard.id,answer:this.userAnswer})});if(!e.ok)throw new Error("Network response was not ok");const t=await e.json();this.lastCardEvaluation=mt.fromJSON(t),this.userAnswer=""}closeModal(){this.isModalOpen=!1}render(){return B`
      <div class="container">
        <h1>${this.collectionData?.name}</h1>
        <!-- Statistiques de la collection -->
        <div class="collection-stats">
          <div class="stat-card">
            <span class="stat-number">${this.totalCards}</span>
            <span class="stat-label">Cartes Total</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${this.openedCards}</span>
            <span class="stat-label">Cartes Ouvertes</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">${this.correctAnswers}</span>
            <span class="stat-label">Bonnes Réponses</span>
          </div>
        </div>
        <!-- Carte principale -->
        <div class="card-container">
          ${this.currentCard?B`
            <div class="card-stats">
              <div class="card-stat-item">
                <span class="card-stat-icon views-icon"></span>
                <span>Vue ${this.currentCard.numberOfViews||0} fois</span>
              </div>
              <div class="card-stat-item">
                <span class="card-stat-icon correct-icon"></span>
                <span>${this.currentCard.numberOfGoodAnswers||0} bonnes réponses</span>
              </div>
            </div>
          `:""}

          <div class="card-content">
            ${this.isLoading?B`<div class="loading">Chargement...</div>`:this.currentCard?B`${this.currentCard.front}`:B`<div class="no-cards">Aucune carte disponible dans cette collection.</div>`}
          </div>
        </div>

        <!-- Zone de réponse -->
        <div class="answer-section" ?hidden="${null!==this.lastCardEvaluation}">
          <h3>Votre réponse</h3>
          <textarea id="user-answer"
          placeholder="Tapez votre réponse ici..." .value="${this.userAnswer}"
          @input="${e=>{const t=e.target;this.userAnswer=t.value}}"
          ></textarea>
          <div class="button-group">
            <button class="btn-primary" @click="${this.validateResponse}">
              Valider la Réponse
            </button>
            <button class="btn-secondary" @click="${()=>{this.isModalOpen=!0,console.log("modal show")}}">
              Voir la Réponse
            </button>
          </div>
        </div>
        <div class="evaluation-section" ?hidden="${null===this.lastCardEvaluation}">
          <h3>Évaluation de la Carte</h3>
          <p>Correct: ${this.lastCardEvaluation?.correct?"Oui":"Non"}</p>
          <p>Commentaire: ${this.lastCardEvaluation?.comment||"Aucun commentaire"}</p>
        </div>

        <!-- Bouton carte suivante -->
        <div class="button-group">
          <button class="btn-next" @click="${async()=>{this.currentCard=await this.getRandomCard()}}">
              Carte suivante
            </button>
        </div>
      </div>

      ${this.isModalOpen?B`
            <div class="modal-overlay" @click="${this.closeModal}">
              <div class="modal-content" @click="${e=>e.stopPropagation()}">
                <button class="close-button" @click="${this.closeModal}">&times;</button>
                <h3>Réponse de la carte</h3>
                <p>${this.currentCard?.back}</p>
              </div>
            </div>
          `:""}
    `}};gt.styles=[s`
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 10px;
        padding-left: 50px;
        padding-right: 50px;
        box-sizing: border-box;
      }

      h1 {
        text-align: center;
        color: #202124;
        font-size: 24px;
        margin-bottom: 20px;
      }
        /* Statistiques de la collection */
        .collection-stats {
          display: flex;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          display: block;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        /* Carte principale */
        .card-container {
          width: 100%;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
          margin-left: auto;
          margin-right: auto;
          overflow: hidden;
          min-height: 200px;
          position: relative;
          box-sizing: border-box;
        }

        .card-stats {
          background: #f8f9fa;
          padding: 1rem;
          border-bottom: 1px solid #e9ecef;
          display: flex;
          justify-content: left;
          align-items: center;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .card-stat-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .card-stat-icon {
          width: 16px;
          height: 16px;
          border-radius: 50%;
        }

        .views-icon {
          background: #3498db;
        }

        .correct-icon {
          background: #2ecc71;
        }

        .card-content {
          padding: 2rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          font-size: 1.2rem;
          line-height: 1.6;
          color: #2c3e50;
        }
        /* Zone de réponse */
        .answer-section {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-sizing: border-box;
        }

        .answer-section h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          margin-left: auto;
          margin-right: auto;
          color: #2c3e50;
          font-size: 1.2rem;
        }

        textarea {
          width: 100%;
          min-height: 120px;
          padding: 1rem;
          border: 2px solid #e9ecef;
          border-radius: 8px;
          font-family: inherit;
          font-size: 1rem;
          resize: vertical;
          transition: border-color 0.3s ease;
          box-sizing: border-box;
        }

        textarea:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
        }

        textarea::placeholder {
          color: #adb5bd;
        }

        /* Boutons */
        .button-group {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }

        button {
          padding: 0.8rem 2rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3498db, #2980b9);
          color: white;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #2980b9, #1f5f8b);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.3);
        }

        .btn-secondary {
          background: linear-gradient(135deg, #95a5a6, #7f8c8d);
          color: white;
        }

        .btn-secondary:hover {
          background: linear-gradient(135deg, #7f8c8d, #6c7b7d);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(149, 165, 166, 0.3);
        }

        .btn-next {
          background: linear-gradient(135deg, #e74c3c, #c0392b);
          color: white;
        }

        .btn-next:hover {
          background: linear-gradient(135deg, #c0392b, #a93226);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(231, 76, 60, 0.3);
        }

        /* Styles pour la modale */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: white;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          max-width: 90%;
          min-width: 300px;
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #aaa;
        }

        .close-button:hover {
          color: #333;
        }
    `],e([he()],gt.prototype,"collectionId",void 0),e([ue()],gt.prototype,"collectionData",void 0),e([ue()],gt.prototype,"isLoading",void 0),e([ue()],gt.prototype,"currentCard",void 0),e([ue()],gt.prototype,"lastCardEvaluation",void 0),e([ue()],gt.prototype,"userAnswer",void 0),e([ue()],gt.prototype,"isModalOpen",void 0),gt=e([ce("current-collection")],gt);let vt=class extends se{constructor(){super(...arguments),this.collections=[],this.loading=!1,this.page=1,this.observer=null}firstUpdated(){this.loadMore();const e=this.shadowRoot?.querySelector("#sentinel");e?(this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&!this.loading&&this.loadMore()}),this.observer.observe(e)):console.warn("Sentinel element not found")}disconnectedCallback(){super.disconnectedCallback(),this.observer?.disconnect()}async loadMore(){const e=localStorage.getItem("access_token");if(e){this.loading=!0;try{const t=await fetch(`${ht}/api/collections?page=${this.page}`,{method:"GET",headers:{Authorization:`Bearer ${e}`}});if(t.ok){const e=await t.json();this.collections=[...this.collections,...e],this.page+=1}else console.error("Failed to load more collections",t.status)}catch(e){console.error("Network error:",e)}finally{this.loading=!1}}else console.error("No access token found")}render(){return B`
         <ul class="container">
            ${this.collections.map(e=>B`<li part="list-item"><a href="/collection/${e.uuid}">${e.video_title}</a></li>`)}
            ${this.loading?B`<div class="loading">Chargement...</div>`:""}
            <!-- Élément sentinelle pour détecter le bas -->
            <div id="sentinel"></div>
        `}};vt.styles=s`
        /* Barre latérale gauche */
         ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            margin-bottom: 10px;
        }

        a {
            text-decoration: none;
            color: #333;
            padding: 2px 10px;
            display: block;
            border-radius: 5px;
            transition: background-color 0.2s;
            white-space: nowrap; /* Empêche le texte de se casser sur plusieurs lignes */
            overflow: hidden;
            text-overflow: ellipsis; /* Ajoute des points de suspension si le texte est trop long */
        }

        a:hover {
            background-color: #e6e6e6;
        }

        `,e([ue()],vt.prototype,"collections",void 0),e([ue()],vt.prototype,"loading",void 0),e([ue()],vt.prototype,"page",void 0),vt=e([ce("collection-list")],vt);let bt=class extends se{render(){return B`<h2>À propos de cette app</h2>`}};bt=e([ce("about-view")],bt);let wt=class extends se{constructor(){super(...arguments),this.email="",this.password="",this.message="",this.isSuccess=!1}render(){return B`
            <h2>S'enregistrer</h2>
            <form @submit=${e=>this._handleSubmit(e)}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${e=>this.email=e.target.value}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${e=>this.password=e.target.value}
                required
            />

            <button type="submit">S'inscrire</button>
            </form>
            ${this.message?B`<p class="message ${this.isSuccess?"success":"error"}">
                  ${this.message}
              </p>`:""}
            <p style="text-align: center; margin-top: 20px;">
            Déjà un compte? <a href="/login">Se connecter</a>
            </p>
        `}async _handleSubmit(e){e.preventDefault(),this.message="",this.isSuccess=!1;try{const e=await fetch(`${ht}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password})}),t=await e.json();e.ok?await this._loginUser(this.email,this.password):(this.message=t.detail||"Erreur lors de l'enregistrement.",this.isSuccess=!1)}catch(e){this.message="Erreur réseau. Veuillez réessayer.",this.isSuccess=!1,console.error("Registration error:",e)}}async _loginUser(e,t){try{const n=await fetch(`${ht}/auth/jwt/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:e,password:t})}),r=await n.json();n.ok?(localStorage.setItem("access_token",r.access_token),r.refresh_token&&localStorage.setItem("refresh_token",r.refresh_token),this.message="Enregistrement réussi! Connexion automatique...",this.isSuccess=!0,this.email="",this.password="",this.dispatchEvent(new CustomEvent("user-logged-in",{bubbles:!0,composed:!0,detail:{user:r}})),setTimeout(()=>{window.location.href="/"},1500)):(this.message="Enregistrement réussi! Veuillez vous connecter.",this.isSuccess=!0,setTimeout(()=>{window.location.href="/login"},2e3))}catch(e){console.error("Auto-login error:",e),this.message="Enregistrement réussi! Veuillez vous connecter.",this.isSuccess=!0,setTimeout(()=>{window.location.href="/login"},2e3)}}};wt.styles=s`
        :host {
            display: block;
            font-family: sans-serif;
            padding: 20px;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }
        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        input {
            width: calc(100% - 22px); /* Adjust for padding and border */
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #0056b3;
        }
        .message {
            margin-top: 15px;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    `,e([ue()],wt.prototype,"email",void 0),e([ue()],wt.prototype,"password",void 0),e([ue()],wt.prototype,"message",void 0),e([ue()],wt.prototype,"isSuccess",void 0),wt=e([ce("auth-register")],wt);let yt=class extends se{constructor(){super(...arguments),this.email="",this.password="",this.message="",this.isSuccess=!1}render(){return B`
            <h2>Se connecter</h2>
            <form @submit=${this._handleSubmit}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${e=>this.email=e.target.value}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${e=>this.password=e.target.value}
                required
            />

            <button type="submit">Connexion</button>
            </form>
            ${this.message?B`<p class="message ${this.isSuccess?"success":"error"}">
                  ${this.message}
              </p>`:""}
            <p style="text-align: center; margin-top: 20px;">
            Pas de compte? <a href="/register">S'enregistrer</a>
            </p>
        `}async _handleSubmit(e){e.preventDefault(),this.message="",this.isSuccess=!1;const t=new URLSearchParams;t.append("username",this.email),t.append("password",this.password),console.log("Attempting to login with:",ht);try{const e=await fetch(`${ht}/auth/jwt/login`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t.toString()}),n=await e.json();if(e.ok){const e=n.access_token;localStorage.setItem("access_token",e),this.message="Connexion réussie!",this.isSuccess=!0,this.email="",this.password="";const t=new CustomEvent("auth-success",{bubbles:!0,composed:!0,detail:{token:e,user:n.user}});this.dispatchEvent(t),setTimeout(()=>window.location.href="/",200)}else this.message=n.detail||"Email ou mot de passe incorrect.",this.isSuccess=!1}catch(e){this.message="Erreur réseau. Veuillez réessayer.",this.isSuccess=!1,console.error("Login error:",e)}}};yt.styles=s`
        :host {
            display: block;
            font-family: sans-serif;
            padding: 20px;
            max-width: 400px;
            margin: 50px auto;
            border: 1px solid #ddd;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }
        h2 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 8px;
            color: #555;
            font-weight: bold;
        }
        input {
            width: calc(100% - 22px); /* Adjust for padding and border */
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        button {
            width: 100%;
            padding: 12px;
            background-color: #28a745;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        button:hover {
            background-color: #218838;
        }
        .message {
            margin-top: 15px;
            padding: 10px;
            border-radius: 4px;
            text-align: center;
            font-weight: bold;
        }
        .success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
    `,e([ue()],yt.prototype,"email",void 0),e([ue()],yt.prototype,"password",void 0),e([ue()],yt.prototype,"message",void 0),e([ue()],yt.prototype,"isSuccess",void 0),yt=e([ce("auth-login")],yt);class xt extends Error{}function _t(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function(e){return decodeURIComponent(atob(e).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}(t)}catch(e){return atob(t)}}function $t(e,t){if("string"!=typeof e)throw new xt("Invalid token specified: must be a string");t||(t={});const n=!0===t.header?0:1,r=e.split(".")[n];if("string"!=typeof r)throw new xt(`Invalid token specified: missing part #${n+1}`);let o;try{o=_t(r)}catch(e){throw new xt(`Invalid token specified: invalid base64 for part #${n+1} (${e.message})`)}try{return JSON.parse(o)}catch(e){throw new xt(`Invalid token specified: invalid json for part #${n+1} (${e.message})`)}}function At(){const e=localStorage.getItem("access_token");if(!e)return!1;try{const t=$t(e),n=Date.now()/1e3;return!(t.exp<n)||(console.warn("Token expiré. Déconnexion automatique."),Et(),!1)}catch(e){return console.error("Erreur lors du décodage du token JWT:",e),Et(),!1}}function Et(){localStorage.removeItem("access_token"),localStorage.removeItem("user_info"),window.dispatchEvent(new CustomEvent("auth-status-changed",{detail:{isAuthenticated:!1,token:null,user:null}}))}xt.prototype.name="InvalidTokenError";let Ct=class extends se{constructor(){super(),this.isAuthenticated=!1,this.userInfo=null,this._updateAuthState(),window.addEventListener("auth-status-changed",this._handleAuthStatusChange.bind(this))}_handleAuthStatusChange(){this._updateAuthState()}_updateAuthState(){this.isAuthenticated=At(),this.userInfo=function(){if(At()){const e=localStorage.getItem("user_info");if(e)return JSON.parse(e);const t=localStorage.getItem("access_token");if(t)try{return $t(t)}catch(e){return console.error("Erreur lors du décodage du token pour UserInfo:",e),null}}return null}()}_handleLogout(){Et()}_handleClick(e){e.target instanceof HTMLAnchorElement&&e.target.href&&(e.preventDefault(),window.history.pushState({},"",e.target.href),window.dispatchEvent(new PopStateEvent("popstate")))}render(){return B`
            <nav @click=${this._handleClick}>
                <a href="/" class="logo">MonApp</a>

                <div class="nav-links">
                    <a href="/">Accueil</a>

                    ${this.isAuthenticated?B`
                              <a href="/">home</a>
                          `:B`
                              <a href="/login">Se connecter</a>
                              <a href="/register">S'enregistrer</a>
                          `}
                </div>

                <div class="auth-controls">
                    ${this.isAuthenticated?B`
                              <span class="welcome-message"
                                  >Bienvenue, ${this.userInfo?.email||"utilisateur"}!</span
                              >
                              <button @click=${this._handleLogout}>Déconnexion</button>
                          `:""}
                </div>
            </nav>
        `}};Ct.styles=s`
        :host {
            display: block;
            width: 100%;
            background-color: #2c3e50; /* Couleur sombre pour la barre de navigation */
            color: white;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            max-width: 1200px;
            margin: 0 auto;
            flex-wrap: wrap; /* Permet aux éléments de passer à la ligne sur petits écrans */
        }

        .logo {
            font-size: 1.8em;
            font-weight: bold;
            color: #4CAF50; /* Vert éclatant pour le logo */
            text-decoration: none;
            margin-right: 20px;
        }

        .nav-links {
            display: flex;
            gap: 25px; /* Espace entre les liens */
            align-items: center;
            flex-wrap: wrap;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 5px 0;
            transition: color 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
            color: #4CAF50; /* Changement de couleur au survol/actif */
        }

        .auth-controls {
            display: flex;
            align-items: center;
            gap: 15px;
            flex-wrap: wrap;
        }

        .welcome-message {
            font-size: 0.95em;
            color: #ecf0f1; /* Gris clair */
            margin-right: 10px;
        }

        button {
            background-color: #e74c3c; /* Rouge pour déconnexion */
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #c0392b;
        }

        /* Styles Responsifs */
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                align-items: flex-start;
                padding: 10px 15px;
            }

            .logo {
                margin-bottom: 15px;
                width: 100%;
                text-align: center;
            }

            .nav-links, .auth-controls {
                width: 100%;
                justify-content: center; /* Centrer les liens */
                margin-bottom: 10px;
            }

            .nav-links a, .auth-controls button, .welcome-message {
                margin-bottom: 5px; /* Espacement vertical */
            }

            .auth-controls {
                margin-top: 10px;
                border-top: 1px solid rgba(255, 255, 255, 0.1);
                padding-top: 10px;
            }
        }

        @media (max-width: 480px) {
            .nav-links {
                flex-direction: column;
                gap: 10px;
            }
            .nav-links a {
                padding: 8px 0;
                width: 100%;
                text-align: center;
            }
        }
    `,e([he({type:Boolean})],Ct.prototype,"isAuthenticated",void 0),e([he({type:Object})],Ct.prototype,"userInfo",void 0),Ct=e([ce("app-nav")],Ct);
//# sourceMappingURL=bundle.js.map
