
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=globalThis,e$2=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$4=new WeakMap;class n$3{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$4.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$4.set(s,t));}return t}toString(){return this.cssText}}const r$4=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$2.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$3,getOwnPropertySymbols:o$3,getPrototypeOf:n$2}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b={attribute:!0,type:String,converter:u$1,reflect:!1,useDefault:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class y$1 extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$2(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$3(t),...o$3(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=h.fromAttribute(s,t.type)??this._$Ej?.get(e)??null,this._$Em=null;}}requestUpdate(t,s,i){if(void 0!==t){const e=this.constructor,h=this[t];if(i??=e.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(e._$Eu(t,i))))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),!0!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),!0===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=!0;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];!0!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$EM();}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return !0}update(t){this._$Eq&&=this._$Eq.forEach((t=>this._$ET(t,this[t]))),this._$EM();}updated(t){}firstUpdated(t){}}y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,i$1=t$1.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${Math.random().toFixed(9).slice(2)}$`,o$2="?"+h,n$1=`<${o$2}>`,r$2=document,l=()=>r$2.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r$2.createTreeWalker(r$2,129);function P(t,i){if(!a(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":3===i?"<math>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n$1:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [P(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),o]};class N{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=V(t,s);if(this.el=N.createElement(f,n),C.currentNode=this.el.content,2===s||3===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=C.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?H:"?"===e[1]?I:"@"===e[1]?L:k}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),C.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o$2)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$2.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){if(i===T)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=S(t,h._$AS(t,i.values),h,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$2).importNode(i,!0);C.currentNode=e;let h=C.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new R(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new z(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=C.nextNode(),o++);}return C.currentNode=r$2,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),c(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):u(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==E&&c(this._$AH)?this._$AA.nextSibling.data=t:this.T(r$2.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(P(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new M(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new N(t)),i}k(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new R(this.O(l()),this.O(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class k{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=S(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=S(this,e[s+n],i,n),r===T&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===E?t=E:t!==E&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===E?void 0:t;}}class I extends k{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E);}}class L extends k{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=S(this,t,i,0)??E)===T)return;const s=this._$AH,e=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==E&&(s===E||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const j=t$1.litHtmlPolyfillSupport;j?.(N,R),(t$1.litHtmlVersions??=[]).push("3.3.0");const B=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new R(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=B(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}}i._$litElement$=!0,i["finalized"]=!0,s.litElementHydrateSupport?.({LitElement:i});const o$1=s.litElementPolyfillSupport;o$1?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e);})):customElements.define(t,e);};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1},r$1=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===n){const{name:o}=r;return {set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t);},init(e){return void 0!==e&&this.C(o,void 0,t,e),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t);}}throw Error("Unsupported decorator location: "+n)};function n(t){return (e,o)=>"object"==typeof o?r$1(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r(r){return n({...r,state:!0,attribute:!1})}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    var isSafe = function (value) {
        for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
            var char = delimiter_1[_i];
            if (value.indexOf(char) > -1)
                return true;
        }
        return false;
    };
    var safePattern = function (prefix) {
        var prev = result[result.length - 1];
        var prevText = prefix || (prev && typeof prev === "string" ? prev : "");
        if (prev && !prevText) {
            throw new TypeError("Must have text between two parameters, missing text after \"".concat(prev.name, "\""));
        }
        if (!prevText || isSafe(prevText))
            return "[^".concat(escapeString(delimiter), "]+?");
        return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || safePattern(prefix),
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
    var index = 0;
    var execResult = groupsRegex.exec(path.source);
    while (execResult) {
        keys.push({
            // Use parenthesized substring match if available, index otherwise
            name: execResult[1] || index++,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: "",
        });
        execResult = groupsRegex.exec(path.source);
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
    var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
    var delimiterRe = "[".concat(escapeString(delimiter), "]");
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
                    }
                    else {
                        route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
                    }
                }
                else {
                    if (token.modifier === "+" || token.modifier === "*") {
                        throw new TypeError("Can not repeat \"".concat(token.name, "\" without a prefix and suffix"));
                    }
                    route += "(".concat(token.pattern, ")").concat(token.modifier);
                }
            }
            else {
                route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
            }
        }
    }
    if (end) {
        if (!strict)
            route += "".concat(delimiterRe, "?");
        route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1
            : endToken === undefined;
        if (!strict) {
            route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
        }
        if (!isEndDelimited) {
            route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
        }
    }
    return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}

function isObject(o) {
  return typeof o === "object" && !!o;
}
function isFunction(f) {
  return typeof f === "function";
}
function isString(s) {
  return typeof s === "string";
}
function toArray(value = []) {
  return Array.isArray(value) ? value : [value];
}
function log(msg) {
  return `[Vaadin.Router] ${msg}`;
}
class NotFoundError extends Error {
  code;
  context;
  constructor(context) {
    super(log(`Page not found (${context.pathname})`));
    this.context = context;
    this.code = 404;
  }
}
const notFoundResult = Symbol("NotFoundResult");
function getNotFoundError(context) {
  return new NotFoundError(context);
}
function resolvePath(path) {
  return (Array.isArray(path) ? path[0] : path) ?? "";
}
function getRoutePath$1(route) {
  return resolvePath(route?.path);
}
function unwrapChildren(children) {
  return Array.isArray(children) && children.length > 0 ? children : void 0;
}

const cache = /* @__PURE__ */ new Map();
cache.set("|false", {
  keys: [],
  pattern: /(?:)/u
});
function decodeParam(val) {
  try {
    return decodeURIComponent(val);
  } catch {
    return val;
  }
}
function matchPath(routePath, path, exact = false, parentKeys = [], parentParams) {
  const cacheKey = `${routePath}|${String(exact)}`;
  const _path = resolvePath(path);
  let regexp = cache.get(cacheKey);
  if (!regexp) {
    const keys = [];
    regexp = {
      keys,
      pattern: pathToRegexp(routePath, keys, {
        end: exact,
        strict: routePath === ""
      })
    };
    cache.set(cacheKey, regexp);
  }
  const m = regexp.pattern.exec(_path);
  if (!m) {
    return null;
  }
  const params = { ...parentParams };
  for (let i = 1; i < m.length; i++) {
    const key = regexp.keys[i - 1];
    const prop = key.name;
    const value = m[i];
    if (value !== void 0 || !Object.hasOwn(params, prop)) {
      if (key.modifier === "+" || key.modifier === "*") {
        params[prop] = value ? value.split(/[/?#]/u).map(decodeParam) : [];
      } else {
        params[prop] = value ? decodeParam(value) : value;
      }
    }
  }
  return {
    keys: [...parentKeys, ...regexp.keys],
    params,
    path: m[0]
  };
}
var matchPath_default = matchPath;

function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
  let match;
  let childMatches;
  let childIndex = 0;
  let routepath = getRoutePath$1(route);
  if (routepath.startsWith("/")) {
    if (ignoreLeadingSlash) {
      routepath = routepath.substring(1);
    }
    ignoreLeadingSlash = true;
  }
  return {
    next(routeToSkip) {
      if (route === routeToSkip) {
        return { done: true, value: void 0 };
      }
      route.__children ??= unwrapChildren(route.children);
      const children = route.__children ?? [];
      const exact = !route.__children && !route.children;
      if (!match) {
        match = matchPath_default(routepath, pathname, exact, parentKeys, parentParams);
        if (match) {
          return {
            value: {
              keys: match.keys,
              params: match.params,
              path: match.path,
              route
            }
          };
        }
      }
      if (match && children.length > 0) {
        while (childIndex < children.length) {
          if (!childMatches) {
            const childRoute = children[childIndex];
            childRoute.parent = route;
            let matchedLength = match.path.length;
            if (matchedLength > 0 && pathname.charAt(matchedLength) === "/") {
              matchedLength += 1;
            }
            childMatches = matchRoute(
              childRoute,
              pathname.substring(matchedLength),
              ignoreLeadingSlash,
              match.keys,
              match.params
            );
          }
          const childMatch = childMatches.next(routeToSkip);
          if (!childMatch.done) {
            return {
              done: false,
              value: childMatch.value
            };
          }
          childMatches = null;
          childIndex += 1;
        }
      }
      return { done: true, value: void 0 };
    }
  };
}
var matchRoute_default = matchRoute;

function resolveRoute(context) {
  if (isFunction(context.route.action)) {
    return context.route.action(context);
  }
  return void 0;
}

function isDescendantRoute(route, maybeParent) {
  let _route = route;
  while (_route) {
    _route = _route.parent;
    if (_route === maybeParent) {
      return true;
    }
  }
  return false;
}
function isRouteContext(value) {
  return !!value && typeof value === "object" && "next" in value && "params" in value && "result" in value && "route" in value;
}
class ResolutionError extends Error {
  code;
  context;
  constructor(context, options) {
    let errorMessage = `Path '${context.pathname}' is not properly resolved due to an error.`;
    const routePath = getRoutePath$1(context.route);
    if (routePath) {
      errorMessage += ` Resolution had failed on route: '${routePath}'`;
    }
    super(errorMessage, options);
    this.code = options?.code;
    this.context = context;
  }
  warn() {
    console.warn(this.message);
  }
}
function updateChainForRoute(context, match) {
  const { path, route } = match;
  if (route && !route.__synthetic) {
    const item = { path, route };
    if (route.parent && context.chain) {
      for (let i = context.chain.length - 1; i >= 0; i--) {
        if (context.chain[i].route === route.parent) {
          break;
        }
        context.chain.pop();
      }
    }
    context.chain?.push(item);
  }
}
class Resolver {
  /**
   * The base URL for all routes in the router instance. By default,
   * if the base element exists in the `<head>`, vaadin-router
   * takes the `<base href>` attribute value, resolved against the current
   * `document.URL`.
   */
  baseUrl;
  #context;
  errorHandler;
  resolveRoute;
  #root;
  constructor(routes, { baseUrl = "", context, errorHandler, resolveRoute: resolveRoute$1 = resolveRoute } = {}) {
    if (Object(routes) !== routes) {
      throw new TypeError("Invalid routes");
    }
    this.baseUrl = baseUrl;
    this.errorHandler = errorHandler;
    this.resolveRoute = resolveRoute$1;
    if (Array.isArray(routes)) {
      this.#root = {
        __children: routes,
        __synthetic: true,
        action: () => void 0,
        path: ""
      };
    } else {
      this.#root = { ...routes, parent: void 0 };
    }
    this.#context = {
      ...context,
      hash: "",
      // eslint-disable-next-line @typescript-eslint/require-await
      async next() {
        return notFoundResult;
      },
      params: {},
      pathname: "",
      resolver: this,
      route: this.#root,
      search: "",
      chain: []
    };
  }
  get root() {
    return this.#root;
  }
  get context() {
    return this.#context;
  }
  /**
   * If the baseUrl property is set, transforms the baseUrl and returns the full
   * actual `base` string for using in the `new URL(path, base);` and for
   * prepernding the paths with. The returned base ends with a trailing slash.
   *
   * Otherwise, returns empty string.
   */
  get __effectiveBaseUrl() {
    return this.baseUrl ? new URL(this.baseUrl, document.baseURI || document.URL).href.replace(/[^/]*$/u, "") : "";
  }
  /**
   * Returns the current list of routes (as a shallow copy). Adding / removing
   * routes to / from the returned array does not affect the routing config,
   * but modifying the route objects does.
   *
   * @public
   */
  getRoutes() {
    return [...this.#root.__children ?? []];
  }
  /**
   * Removes all existing routes from the routing config.
   *
   * @public
   */
  removeRoutes() {
    this.#root.__children = [];
  }
  /**
   * Asynchronously resolves the given pathname, i.e. finds all routes matching
   * the pathname and tries resolving them one after another in the order they
   * are listed in the routes config until the first non-null result.
   *
   * Returns a promise that is fulfilled with the return value of an object that consists of the first
   * route handler result that returns something other than `null` or `undefined` and context used to get this result.
   *
   * If no route handlers return a non-null result, or if no route matches the
   * given pathname the returned promise is rejected with a 'page not found'
   * `Error`.
   *
   * @param pathnameOrContext - the pathname to
   *    resolve or a context object with a `pathname` property and other
   *    properties to pass to the route resolver functions.
   */
  async resolve(pathnameOrContext) {
    const self = this;
    const context = {
      ...this.#context,
      ...isString(pathnameOrContext) ? { pathname: pathnameOrContext } : pathnameOrContext,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      next
    };
    const match = matchRoute_default(
      this.#root,
      this.__normalizePathname(context.pathname) ?? context.pathname,
      !!this.baseUrl
    );
    const resolve = this.resolveRoute;
    let matches = null;
    let nextMatches = null;
    let currentContext = context;
    async function next(resume = false, parent = matches?.value?.route, prevResult) {
      const routeToSkip = prevResult === null ? matches?.value?.route : void 0;
      matches = nextMatches ?? match.next(routeToSkip);
      nextMatches = null;
      if (!resume) {
        if (!!matches.done || !isDescendantRoute(matches.value.route, parent)) {
          nextMatches = matches;
          return notFoundResult;
        }
      }
      if (matches.done) {
        throw getNotFoundError(context);
      }
      currentContext = {
        ...context,
        params: matches.value.params,
        route: matches.value.route,
        chain: currentContext.chain?.slice()
      };
      updateChainForRoute(currentContext, matches.value);
      const resolution = await resolve(currentContext);
      if (resolution !== null && resolution !== void 0 && resolution !== notFoundResult) {
        currentContext.result = isRouteContext(resolution) ? resolution.result : resolution;
        self.#context = currentContext;
        return currentContext;
      }
      return await next(resume, parent, resolution);
    }
    try {
      return await next(true, this.#root);
    } catch (error) {
      const _error = error instanceof NotFoundError ? error : new ResolutionError(currentContext, { code: 500, cause: error });
      if (this.errorHandler) {
        currentContext.result = this.errorHandler(_error);
        return currentContext;
      }
      throw error;
    }
  }
  /**
   * Sets the routing config (replacing the existing one).
   *
   * @param routes - a single route or an array of those
   *    (the array is shallow copied)
   */
  setRoutes(routes) {
    this.#root.__children = [...toArray(routes)];
  }
  /**
   * If the baseUrl is set, matches the pathname with the router’s baseUrl,
   * and returns the local pathname with the baseUrl stripped out.
   *
   * If the pathname does not match the baseUrl, returns undefined.
   *
   * If the `baseUrl` is not set, returns the unmodified pathname argument.
   */
  __normalizePathname(pathname) {
    if (!this.baseUrl) {
      return pathname;
    }
    const base = this.__effectiveBaseUrl;
    const url = pathname.startsWith("/") ? new URL(base).origin + pathname : `./${pathname}`;
    const normalizedUrl = new URL(url, base).href;
    if (normalizedUrl.startsWith(base)) {
      return normalizedUrl.slice(base.length);
    }
    return void 0;
  }
  /**
   * Appends one or several routes to the routing config and returns the
   * effective routing config after the operation.
   *
   * @param routes - a single route or an array of those
   *    (the array is shallow copied)
   */
  addRoutes(routes) {
    this.#root.__children = [...this.#root.__children ?? [], ...toArray(routes)];
    return this.getRoutes();
  }
}

function cacheRoutes(routesByName, route, routes, cacheKeyProvider) {
  const name = route.name ?? cacheKeyProvider?.(route);
  if (name) {
    if (routesByName.has(name)) {
      routesByName.get(name)?.push(route);
    } else {
      routesByName.set(name, [route]);
    }
  }
  if (Array.isArray(routes)) {
    for (const childRoute of routes) {
      childRoute.parent = route;
      cacheRoutes(routesByName, childRoute, childRoute.__children ?? childRoute.children, cacheKeyProvider);
    }
  }
}
function getRouteByName(routesByName, routeName) {
  const routes = routesByName.get(routeName);
  if (routes) {
    if (routes.length > 1) {
      throw new Error(`Duplicate route with name "${routeName}". Try seting unique 'name' route properties.`);
    }
    return routes[0];
  }
  return void 0;
}
function generateUrls(resolver, options = {}) {
  if (!(resolver instanceof Resolver)) {
    throw new TypeError("An instance of Resolver is expected");
  }
  const cache = /* @__PURE__ */ new Map();
  const routesByName = /* @__PURE__ */ new Map();
  return (routeName, params) => {
    let route = getRouteByName(routesByName, routeName);
    if (!route) {
      routesByName.clear();
      cacheRoutes(routesByName, resolver.root, resolver.root.__children, options.cacheKeyProvider);
      route = getRouteByName(routesByName, routeName);
      if (!route) {
        throw new Error(`Route "${routeName}" not found`);
      }
    }
    let cached = route.fullPath ? cache.get(route.fullPath) : void 0;
    if (!cached) {
      let fullPath = getRoutePath$1(route);
      let rt = route.parent;
      while (rt) {
        const path = getRoutePath$1(rt);
        if (path) {
          fullPath = `${path.replace(/\/$/u, "")}/${fullPath.replace(/^\//u, "")}`;
        }
        rt = rt.parent;
      }
      const tokens = parse(fullPath);
      const keys = /* @__PURE__ */ Object.create(null);
      for (const item of tokens) {
        if (!isString(item)) {
          keys[item.name] = true;
        }
      }
      cached = { keys, tokens };
      cache.set(fullPath, cached);
      route.fullPath = fullPath;
    }
    const toPath = tokensToFunction(cached.tokens, { encode: encodeURIComponent, ...options });
    let url = toPath(params) || "/";
    if (options.stringifyQueryParams && params) {
      const queryParams = {};
      for (const [key, value] of Object.entries(params)) {
        if (!(key in cached.keys) && value) {
          queryParams[key] = value;
        }
      }
      const query = options.stringifyQueryParams(queryParams);
      if (query) {
        url += query.startsWith("?") ? query : `?${query}`;
      }
    }
    return url;
  };
}
var generateUrls_default = generateUrls;

const DEV_MODE_CODE_REGEXP =
  /\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }
  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }

    if (!isLocalhost()) {
      return false;
    }

    if (FlowClients) {
      return !isFlowProductionMode();
    }

    return !isMinified();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
}

function isFlowProductionMode() {
  if (FlowClients) {
    const productionModeApps = Object.keys(FlowClients)
      .map(key => FlowClients[key])
      .filter(client => client.productionMode);
    if (productionModeApps.length > 0) {
      return true;
    }
  }
  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
}

// A guard against polymer-modulizer removing the window.Vaadin
// initialization above.
window['Vaadin'] = window['Vaadin'] || {};

/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */
const runIfDevelopmentMode = function(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

function maybeGatherAndSendStats() {
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

  vaadin-dev-mode:end **/
}

const usageStatistics = function() {
  if (typeof runIfDevelopmentMode === 'function') {
    return runIfDevelopmentMode(maybeGatherAndSendStats);
  }
};

function __REGISTER__(feature, vaadinObj = window.Vaadin ??= {}) {
  vaadinObj.registrations ??= [];
  vaadinObj.registrations.push({
    is: feature ? `${"@vaadin/router"}/${feature}` : "@vaadin/router",
    version: "2.0.0"
  });
}
__REGISTER__();
usageStatistics();

const willAnimate = (elem) => {
  const name = getComputedStyle(elem).getPropertyValue("animation-name");
  return name && name !== "none";
};
const waitForAnimation = (elem, cb) => {
  const listener = () => {
    elem.removeEventListener("animationend", listener);
    cb();
  };
  elem.addEventListener("animationend", listener);
};
async function animate(elem, className) {
  elem.classList.add(className);
  return await new Promise((resolve) => {
    if (willAnimate(elem)) {
      const rect = elem.getBoundingClientRect();
      const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
      elem.setAttribute("style", `position: absolute; ${size}`);
      waitForAnimation(elem, () => {
        elem.classList.remove(className);
        elem.removeAttribute("style");
        resolve();
      });
    } else {
      elem.classList.remove(className);
      resolve();
    }
  });
}
var animate_default = animate;

function ensureRoute(route) {
  if (!route || !isString(route.path)) {
    throw new Error(
      log(`Expected route config to be an object with a "path" string property, or an array of such objects`)
    );
  }
  if (!isFunction(route.action) && !Array.isArray(route.children) && !isFunction(route.children) && !isString(route.component) && !isString(route.redirect)) {
    throw new Error(
      log(
        `Expected route config "${route.path}" to include either "component, redirect" or "action" function but none found.`
      )
    );
  }
  if (route.redirect) {
    ["bundle", "component"].forEach((overriddenProp) => {
      if (overriddenProp in route) {
        console.warn(
          log(
            `Route config "${String(route.path)}" has both "redirect" and "${overriddenProp}" properties, and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`
          )
        );
      }
    });
  }
}
function ensureRoutes(routes) {
  toArray(routes).forEach((route) => ensureRoute(route));
}
function copyContextWithoutNext({
  next: _,
  ...context
}) {
  return context;
}
function getPathnameForRouter(pathname, router) {
  const base = router.__effectiveBaseUrl;
  return base ? new URL(pathname.replace(/^\//u, ""), base).pathname : pathname;
}
function getMatchedPath(pathItems) {
  return pathItems.map((pathItem) => pathItem.path).reduce((a, b) => {
    if (b.length) {
      return `${a.replace(/\/$/u, "")}/${b.replace(/^\//u, "")}`;
    }
    return a;
  }, "");
}
function getRoutePath(chain) {
  return getMatchedPath(chain.map((chainItem) => chainItem.route));
}
function createLocation({ chain = [], hash = "", params = {}, pathname = "", redirectFrom, resolver, search = "" }, route) {
  const routes = chain.map((item) => item.route);
  return {
    baseUrl: resolver?.baseUrl ?? "",
    getUrl: (userParams = {}) => resolver ? getPathnameForRouter(compile(getRoutePath(chain))({ ...params, ...userParams }), resolver) : "",
    hash,
    params,
    pathname,
    redirectFrom,
    route: route ?? (Array.isArray(routes) ? routes.at(-1) : void 0) ?? null,
    routes,
    search,
    searchParams: new URLSearchParams(search)
  };
}
function createRedirect(context, pathname) {
  const params = { ...context.params };
  return {
    redirect: {
      from: context.pathname,
      params,
      pathname
    }
  };
}
function renderElement(context, element) {
  element.location = createLocation(context);
  if (context.chain) {
    const index = context.chain.map((item) => item.route).indexOf(context.route);
    context.chain[index].element = element;
  }
  return element;
}
function maybeCall(callback, thisArg, ...args) {
  if (typeof callback === "function") {
    return callback.apply(thisArg, args);
  }
  return void 0;
}
function amend(fn, obj, ...args) {
  return (result) => {
    if (result && isObject(result) && ("cancel" in result || "redirect" in result)) {
      return result;
    }
    return maybeCall(obj?.[fn], obj, ...args);
  };
}
function processNewChildren(newChildren, route) {
  if (!Array.isArray(newChildren) && !isObject(newChildren)) {
    throw new Error(
      log(
        `Incorrect "children" value for the route ${String(route.path)}: expected array or object, but got ${String(
          newChildren
        )}`
      )
    );
  }
  const children = toArray(newChildren);
  children.forEach((child) => ensureRoute(child));
  route.__children = children;
}
function fireRouterEvent(type, detail) {
  return !window.dispatchEvent(new CustomEvent(`vaadin-router-${type}`, { cancelable: type === "go", detail }));
}
function logValue(value) {
  if (typeof value !== "object") {
    return String(value);
  }
  const [stringType = "Unknown"] = / (.*)\]$/u.exec(String(value)) ?? [];
  if (stringType === "Object" || stringType === "Array") {
    return `${stringType} ${JSON.stringify(value)}`;
  }
  return stringType;
}

function getAnchorOrigin(anchor) {
  const { port, protocol } = anchor;
  const defaultHttp = protocol === "http:" && port === "80";
  const defaultHttps = protocol === "https:" && port === "443";
  const host = defaultHttp || defaultHttps ? anchor.hostname : anchor.host;
  return `${protocol}//${host}`;
}
function getNormalizedNodeName(e) {
  if (!(e instanceof Element)) {
    return void 0;
  }
  return e.nodeName.toLowerCase();
}
function vaadinRouterGlobalClickHandler(event) {
  if (event.defaultPrevented) {
    return;
  }
  if (event.button !== 0) {
    return;
  }
  if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  let anchorCandidate = event.target;
  const path = event instanceof MouseEvent ? event.composedPath() : event.path ?? [];
  for (let i = 0; i < path.length; i++) {
    const target = path[i];
    if ("nodeName" in target && target.nodeName.toLowerCase() === "a") {
      anchorCandidate = target;
      break;
    }
  }
  while (anchorCandidate && anchorCandidate instanceof Node && getNormalizedNodeName(anchorCandidate) !== "a") {
    anchorCandidate = anchorCandidate.parentNode;
  }
  if (!anchorCandidate || getNormalizedNodeName(anchorCandidate) !== "a") {
    return;
  }
  const anchor = anchorCandidate;
  if (anchor.target && anchor.target.toLowerCase() !== "_self") {
    return;
  }
  if (anchor.hasAttribute("download")) {
    return;
  }
  if (anchor.hasAttribute("router-ignore")) {
    return;
  }
  if (anchor.pathname === window.location.pathname && anchor.hash !== "") {
    return;
  }
  const origin = anchor.origin || getAnchorOrigin(anchor);
  if (origin !== window.location.origin) {
    return;
  }
  const { hash, pathname, search } = anchor;
  if (fireRouterEvent("go", { hash, pathname, search }) && event instanceof MouseEvent) {
    event.preventDefault();
    if (event.type === "click") {
      window.scrollTo(0, 0);
    }
  }
}
const CLICK = {
  activate() {
    window.document.addEventListener("click", vaadinRouterGlobalClickHandler);
  },
  inactivate() {
    window.document.removeEventListener("click", vaadinRouterGlobalClickHandler);
  }
};
var click_default = CLICK;

function vaadinRouterGlobalPopstateHandler(event) {
  if (event.state === "vaadin-router-ignore") {
    return;
  }
  const { hash, pathname, search } = window.location;
  fireRouterEvent("go", { hash, pathname, search });
}
const POPSTATE = {
  activate() {
    window.addEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  },
  inactivate() {
    window.removeEventListener("popstate", vaadinRouterGlobalPopstateHandler);
  }
};
var popstate_default = POPSTATE;

let triggers = [];
const DEFAULT_TRIGGERS = {
  CLICK: click_default,
  POPSTATE: popstate_default
};
function setNavigationTriggers(newTriggers = []) {
  triggers.forEach((trigger) => trigger.inactivate());
  newTriggers.forEach((trigger) => trigger.activate());
  triggers = newTriggers;
}

const MAX_REDIRECT_COUNT = 256;
function prevent() {
  return { cancel: true };
}
const rootContext = {
  __renderId: -1,
  params: {},
  route: {
    __synthetic: true,
    children: [],
    path: "",
    action() {
      return void 0;
    }
  },
  pathname: "",
  // eslint-disable-next-line @typescript-eslint/require-await
  async next() {
    return notFoundResult;
  }
};
class Router extends Resolver {
  /**
   * Contains read-only information about the current router location:
   * pathname, active routes, parameters. See the
   * [Location type declaration](#/classes/RouterLocation)
   * for more details.
   */
  location = createLocation({ resolver: this });
  /**
   * A promise that is settled after the current render cycle completes. If
   * there is no render cycle in progress the promise is immediately settled
   * with the last render cycle result.
   */
  ready = Promise.resolve(this.location);
  #addedByRouter = /* @__PURE__ */ new WeakSet();
  #createdByRouter = /* @__PURE__ */ new WeakSet();
  #navigationEventHandler = this.#onNavigationEvent.bind(this);
  #lastStartedRenderId = 0;
  #outlet;
  __previousContext;
  #urlForName;
  #appearingContent = null;
  #disappearingContent = null;
  /**
   * Creates a new Router instance with a given outlet, and
   * automatically subscribes it to navigation events on the `window`.
   * Using a constructor argument or a setter for outlet is equivalent:
   *
   * ```
   * const router = new Router();
   * router.setOutlet(outlet);
   * ```
   * @param outlet - a container to render the resolved route
   * @param options - an optional object with options
   */
  constructor(outlet, options) {
    const baseElement = document.head.querySelector("base");
    const baseHref = baseElement?.getAttribute("href");
    super([], {
      baseUrl: baseHref ? new URL(baseHref, document.URL).href.replace(/[^/]*$/u, "") : void 0,
      ...options,
      resolveRoute: async (context) => await this.#resolveRoute(context)
    });
    setNavigationTriggers(Object.values(DEFAULT_TRIGGERS));
    this.setOutlet(outlet);
    this.subscribe();
  }
  async #resolveRoute(context) {
    const { route } = context;
    if (isFunction(route.children)) {
      let children = await route.children(copyContextWithoutNext(context));
      if (!isFunction(route.children)) {
        ({ children } = route);
      }
      processNewChildren(children, route);
    }
    const commands = {
      component: (component) => {
        const element = document.createElement(component);
        this.#createdByRouter.add(element);
        return element;
      },
      prevent,
      redirect: (path) => createRedirect(context, path)
    };
    return await Promise.resolve().then(async () => {
      if (this.#isLatestRender(context)) {
        return await maybeCall(route.action, route, context, commands);
      }
    }).then((result) => {
      if (result != null && (typeof result === "object" || typeof result === "symbol")) {
        if (result instanceof HTMLElement || result === notFoundResult || isObject(result) && "redirect" in result) {
          return result;
        }
      }
      if (isString(route.redirect)) {
        return commands.redirect(route.redirect);
      }
    }).then((result) => {
      if (result != null) {
        return result;
      }
      if (isString(route.component)) {
        return commands.component(route.component);
      }
    });
  }
  /**
   * Sets the router outlet (the DOM node where the content for the current
   * route is inserted). Any content pre-existing in the router outlet is
   * removed at the end of each render pass.
   *
   * @remarks
   * This method is automatically invoked first time when creating a new Router
   * instance.
   *
   * @param outlet - the DOM node where the content for the current route is
   * inserted.
   */
  setOutlet(outlet) {
    if (outlet) {
      this.#ensureOutlet(outlet);
    }
    this.#outlet = outlet;
  }
  /**
   * Returns the current router outlet. The initial value is `undefined`.
   *
   * @returns the current router outlet (or `undefined`)
   */
  getOutlet() {
    return this.#outlet;
  }
  /**
   * Sets the routing config (replacing the existing one) and triggers a
   * navigation event so that the router outlet is refreshed according to the
   * current `window.location` and the new routing config.
   *
   * Each route object may have the following properties, listed here in the processing order:
   * * `path` – the route path (relative to the parent route if any) in the
   * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   *
   * * `children` – an array of nested routes or a function that provides this
   * array at the render time. The function can be synchronous or asynchronous:
   * in the latter case the render is delayed until the returned promise is
   * resolved. The `children` function is executed every time when this route is
   * being rendered. This allows for dynamic route structures (e.g. backend-defined),
   * but it might have a performance impact as well. In order to avoid calling
   * the function on subsequent renders, you can override the `children` property
   * of the route object and save the calculated array there
   * (via `context.route.children = [ route1, route2, ...];`).
   * Parent routes are fully resolved before resolving the children. Children
   * 'path' values are relative to the parent ones.
   *
   * * `action` – the action that is executed before the route is resolved.
   * The value for this property should be a function, accepting `context`
   * and `commands` parameters described below. If present, this function is
   * always invoked first, disregarding of the other properties' presence.
   * The action can return a result directly or within a `Promise`, which
   * resolves to the result. If the action result is an `HTMLElement` instance,
   * a `commands.component(name)` result, a `commands.redirect(path)` result,
   * or a `context.next()` result, the current route resolution is finished,
   * and other route config properties are ignored.
   * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
   * The target route should also be defined.
   * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * * `component` – the tag name of the Web Component to resolve the route to.
   * The property is ignored when either an `action` returns the result or `redirect` property is present.
   * If route contains the `component` property (or an action that return a component)
   * and its child route also contains the `component` property, child route's component
   * will be rendered as a light dom child of a parent component.
   *
   * * `name` – the string name of the route to use in the
   * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
   * navigation helper method.
   *
   * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the
   * callback through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow
   * function because arrow functions do not have their own `this` reference.
   *
   * `context` object that is passed to `action` function holds the following properties:
   * * `context.pathname` – string with the pathname being resolved
   *
   * * `context.search` – search query string
   *
   * * `context.hash` – hash string
   *
   * * `context.params` – object with route parameters
   *
   * * `context.route` – object that holds the route that is currently being rendered.
   *
   * * `context.next()` – function for asynchronously getting the next route
   * contents from the resolution chain (if any)
   *
   * `commands` object that is passed to `action` function has
   * the following methods:
   *
   * * `commands.redirect(path)` – function that creates a redirect data
   * for the path specified.
   *
   * * `commands.component(component)` – function that creates a new HTMLElement
   * with current context. Note: the component created by this function is reused if visiting the same path twice in
   * row.
   *
   * @param routes - a single route or an array of those
   * @param skipRender - configure the router but skip rendering the
   *     route corresponding to the current `window.location` values
   */
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  async setRoutes(routes, skipRender = false) {
    this.__previousContext = void 0;
    this.#urlForName = void 0;
    ensureRoutes(routes);
    super.setRoutes(routes);
    if (!skipRender) {
      this.#onNavigationEvent();
    }
    return await this.ready;
  }
  addRoutes(routes) {
    ensureRoutes(routes);
    return super.addRoutes(routes);
  }
  /**
   * Asynchronously resolves the given pathname and renders the resolved route
   * component into the router outlet. If no router outlet is set at the time of
   * calling this method, or at the time when the route resolution is completed,
   * a `TypeError` is thrown.
   *
   * Returns a promise that is fulfilled with the router outlet DOM Element | DocumentFragment after
   * the route component is created and inserted into the router outlet, or
   * rejected if no route matches the given path.
   *
   * If another render pass is started before the previous one is completed, the
   * result of the previous render pass is ignored.
   *
   * @param pathnameOrContext - the pathname to render or a context object with
   * a `pathname` property, optional `search` and `hash` properties, and other
   * properties to pass to the resolver.
   * @param shouldUpdateHistory - update browser history with the rendered
   * location
   */
  async render(pathnameOrContext, shouldUpdateHistory = false) {
    this.#lastStartedRenderId += 1;
    const renderId = this.#lastStartedRenderId;
    const context = {
      ...rootContext,
      ...isString(pathnameOrContext) ? { hash: "", search: "", pathname: pathnameOrContext } : pathnameOrContext,
      __renderId: renderId
    };
    this.ready = this.#doRender(context, shouldUpdateHistory);
    return await this.ready;
  }
  async #doRender(context, shouldUpdateHistory) {
    const { __renderId: renderId } = context;
    try {
      const ctx = await this.resolve(context);
      const contextWithChain = await this.#fullyResolveChain(ctx);
      if (!this.#isLatestRender(contextWithChain)) {
        return this.location;
      }
      const previousContext = this.__previousContext;
      if (contextWithChain === previousContext) {
        this.#updateBrowserHistory(previousContext, true);
        return this.location;
      }
      this.location = createLocation(contextWithChain);
      if (shouldUpdateHistory) {
        this.#updateBrowserHistory(contextWithChain, renderId === 1);
      }
      fireRouterEvent("location-changed", {
        router: this,
        location: this.location
      });
      if (contextWithChain.__skipAttach) {
        this.#copyUnchangedElements(contextWithChain, previousContext);
        this.__previousContext = contextWithChain;
        return this.location;
      }
      this.#addAppearingContent(contextWithChain, previousContext);
      const animationDone = this.#animateIfNeeded(contextWithChain);
      this.#runOnAfterEnterCallbacks(contextWithChain);
      this.#runOnAfterLeaveCallbacks(contextWithChain, previousContext);
      await animationDone;
      if (this.#isLatestRender(contextWithChain)) {
        this.#removeDisappearingContent();
        this.__previousContext = contextWithChain;
        return this.location;
      }
    } catch (error) {
      if (renderId === this.#lastStartedRenderId) {
        if (shouldUpdateHistory) {
          this.#updateBrowserHistory(this.context);
        }
        for (const child of this.#outlet?.children ?? []) {
          child.remove();
        }
        this.location = createLocation(Object.assign(context, { resolver: this }));
        fireRouterEvent("error", {
          router: this,
          error,
          ...context
        });
        throw error;
      }
    }
    return this.location;
  }
  // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
  // It would contain a 'redirect' route or the first 'component' route that
  // matched the pathname. There might be more child 'component' routes to be
  // resolved and added into the chain. This method would find and add them.
  // `contextBeforeRedirects` is the context containing such a child component
  // route. It's only necessary when this method is called recursively (otherwise
  // it's the same as the 'top of the chain' context).
  //
  // Apart from building the chain of child components, this method would also
  // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
  // and 'redirect' callback results.
  async #fullyResolveChain(topOfTheChainContextBeforeRedirects, contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
    const contextAfterRedirects = await this.#findComponentContextAfterAllRedirects(contextBeforeRedirects);
    const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
    const topOfTheChainContextAfterRedirects = redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;
    const matchedPath = getPathnameForRouter(getMatchedPath(contextAfterRedirects.chain ?? []), this);
    const isFound = matchedPath === contextAfterRedirects.pathname;
    const findNextContextIfAny = async (context, parent = context.route, prevResult) => {
      const nextContext2 = await context.next(false, parent, prevResult);
      if (nextContext2 === null || nextContext2 === notFoundResult) {
        if (isFound) {
          return context;
        } else if (parent.parent != null) {
          return await findNextContextIfAny(context, parent.parent, nextContext2);
        }
        return nextContext2;
      }
      return nextContext2;
    };
    const nextContext = await findNextContextIfAny(contextAfterRedirects);
    if (nextContext == null || nextContext === notFoundResult) {
      throw getNotFoundError(
        topOfTheChainContextAfterRedirects
      );
    }
    return nextContext !== contextAfterRedirects ? await this.#fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext) : await this.#amendWithOnBeforeCallbacks(contextAfterRedirects);
  }
  async #findComponentContextAfterAllRedirects(context) {
    const { result } = context;
    if (result instanceof HTMLElement) {
      renderElement(context, result);
      return context;
    } else if (result && "redirect" in result) {
      const ctx = await this.#redirect(result.redirect, context.__redirectCount, context.__renderId);
      return await this.#findComponentContextAfterAllRedirects(ctx);
    }
    throw result instanceof Error ? result : new Error(
      log(
        `Invalid route resolution result for path "${context.pathname}". Expected redirect object or HTML element, but got: "${logValue(result)}". Double check the action return value for the route.`
      )
    );
  }
  async #amendWithOnBeforeCallbacks(contextWithFullChain) {
    return await this.#runOnBeforeCallbacks(contextWithFullChain).then(async (amendedContext) => {
      if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
        return amendedContext;
      }
      return await this.#fullyResolveChain(amendedContext);
    });
  }
  async #runOnBeforeCallbacks(newContext) {
    const previousContext = this.__previousContext ?? {};
    const previousChain = previousContext.chain ?? [];
    const newChain = newContext.chain ?? [];
    let callbacks = Promise.resolve(void 0);
    const redirect = (pathname) => createRedirect(newContext, pathname);
    newContext.__divergedChainIndex = 0;
    newContext.__skipAttach = false;
    if (previousChain.length) {
      for (let i = 0; i < Math.min(previousChain.length, newChain.length); newContext.__divergedChainIndex++, i++) {
        if (previousChain[i].route !== newChain[i].route || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element || !this.#isReusableElement(
          previousChain[i].element,
          newChain[i].element
        )) {
          break;
        }
      }
      newContext.__skipAttach = // Same route chain
      newChain.length === previousChain.length && newContext.__divergedChainIndex === newChain.length && // Same element
      this.#isReusableElement(newContext.result, previousContext.result);
      if (newContext.__skipAttach) {
        for (let i = newChain.length - 1; i >= 0; i--) {
          callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i]);
        }
        for (let i = 0; i < newChain.length; i++) {
          callbacks = this.#runOnBeforeEnterCallbacks(
            callbacks,
            newContext,
            {
              prevent,
              redirect
            },
            newChain[i]
          );
          previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
        }
      } else {
        for (let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--) {
          callbacks = this.#runOnBeforeLeaveCallbacks(callbacks, newContext, { prevent }, previousChain[i]);
        }
      }
    }
    if (!newContext.__skipAttach) {
      for (let i = 0; i < newChain.length; i++) {
        if (i < newContext.__divergedChainIndex) {
          if (i < previousChain.length && previousChain[i].element) {
            previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
          }
        } else {
          callbacks = this.#runOnBeforeEnterCallbacks(
            callbacks,
            newContext,
            {
              prevent,
              redirect
            },
            newChain[i]
          );
          if (newChain[i].element) {
            newChain[i].element.location = createLocation(newContext, newChain[i].route);
          }
        }
      }
    }
    return await callbacks.then(async (amendmentResult) => {
      if (amendmentResult && isObject(amendmentResult)) {
        if ("cancel" in amendmentResult && this.__previousContext) {
          this.__previousContext.__renderId = newContext.__renderId;
          return this.__previousContext;
        }
        if ("redirect" in amendmentResult) {
          return await this.#redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
        }
      }
      return newContext;
    });
  }
  async #runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext);
    let result = await callbacks;
    if (this.#isLatestRender(newContext)) {
      const beforeLeaveFunction = amend("onBeforeLeave", chainElement.element, location, commands, this);
      result = beforeLeaveFunction(result);
    }
    if (!(isObject(result) && "redirect" in result)) {
      return result;
    }
  }
  async #runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
    const location = createLocation(newContext, chainElement.route);
    const result = await callbacks;
    if (this.#isLatestRender(newContext)) {
      const beforeEnterFunction = amend("onBeforeEnter", chainElement.element, location, commands, this);
      return beforeEnterFunction(result);
    }
  }
  #isReusableElement(element, otherElement) {
    if (element instanceof Element && otherElement instanceof Element) {
      return this.#createdByRouter.has(element) && this.#createdByRouter.has(otherElement) ? element.localName === otherElement.localName : element === otherElement;
    }
    return false;
  }
  #isLatestRender(context) {
    return context.__renderId === this.#lastStartedRenderId;
  }
  async #redirect(redirectData, counter = 0, renderId = 0) {
    if (counter > MAX_REDIRECT_COUNT) {
      throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
    }
    return await this.resolve({
      ...rootContext,
      pathname: this.urlForPath(redirectData.pathname, redirectData.params),
      redirectFrom: redirectData.from,
      __redirectCount: counter + 1,
      __renderId: renderId
    });
  }
  #ensureOutlet(outlet = this.#outlet) {
    if (!(outlet instanceof Element || outlet instanceof DocumentFragment)) {
      throw new TypeError(
        log(`Expected router outlet to be a valid DOM Element | DocumentFragment (but got ${outlet})`)
      );
    }
  }
  // eslint-disable-next-line @typescript-eslint/class-methods-use-this
  #updateBrowserHistory({ pathname, search = "", hash = "" }, replace) {
    if (window.location.pathname !== pathname || window.location.search !== search || window.location.hash !== hash) {
      const changeState = replace ? "replaceState" : "pushState";
      window.history[changeState](null, document.title, pathname + search + hash);
      window.dispatchEvent(new PopStateEvent("popstate", { state: "vaadin-router-ignore" }));
    }
  }
  #copyUnchangedElements(context, previousContext) {
    let deepestCommonParent = this.#outlet;
    for (let i = 0; i < (context.__divergedChainIndex ?? 0); i++) {
      const unchangedElement = previousContext?.chain?.[i].element;
      if (unchangedElement) {
        if (unchangedElement.parentNode === deepestCommonParent) {
          context.chain[i].element = unchangedElement;
          deepestCommonParent = unchangedElement;
        } else {
          break;
        }
      }
    }
    return deepestCommonParent;
  }
  #addAppearingContent(context, previousContext) {
    this.#ensureOutlet();
    this.#removeAppearingContent();
    const deepestCommonParent = this.#copyUnchangedElements(context, previousContext);
    this.#appearingContent = [];
    this.#disappearingContent = Array.from(deepestCommonParent?.children ?? []).filter(
      // Only remove layout content that was added by router
      (e) => this.#addedByRouter.has(e) && // Do not remove the result element to avoid flickering
      e !== context.result
    );
    let parentElement = deepestCommonParent;
    for (let i = context.__divergedChainIndex ?? 0; i < (context.chain?.length ?? 0); i++) {
      const elementToAdd = context.chain[i].element;
      if (elementToAdd) {
        parentElement?.appendChild(elementToAdd);
        this.#addedByRouter.add(elementToAdd);
        if (parentElement === deepestCommonParent) {
          this.#appearingContent.push(elementToAdd);
        }
        parentElement = elementToAdd;
      }
    }
  }
  #removeDisappearingContent() {
    if (this.#disappearingContent) {
      for (const element of this.#disappearingContent) {
        element.remove();
      }
    }
    this.#disappearingContent = null;
    this.#appearingContent = null;
  }
  #removeAppearingContent() {
    if (this.#disappearingContent && this.#appearingContent) {
      for (const element of this.#appearingContent) {
        element.remove();
      }
      this.#disappearingContent = null;
      this.#appearingContent = null;
    }
  }
  #runOnAfterLeaveCallbacks(currentContext, targetContext) {
    if (!targetContext?.chain || currentContext.__divergedChainIndex == null) {
      return;
    }
    for (let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--) {
      if (!this.#isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = targetContext.chain[i].element;
      if (!currentComponent) {
        continue;
      }
      try {
        const location = createLocation(currentContext);
        maybeCall(currentComponent.onAfterLeave, currentComponent, location, {}, this);
      } finally {
        if (this.#disappearingContent?.includes(currentComponent)) {
          for (const child of currentComponent.children) {
            child.remove();
          }
        }
      }
    }
  }
  #runOnAfterEnterCallbacks(currentContext) {
    if (!currentContext.chain || currentContext.__divergedChainIndex == null) {
      return;
    }
    for (let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++) {
      if (!this.#isLatestRender(currentContext)) {
        break;
      }
      const currentComponent = currentContext.chain[i].element;
      if (currentComponent) {
        const location = createLocation(currentContext, currentContext.chain[i].route);
        maybeCall(currentComponent.onAfterEnter, currentComponent, location, {}, this);
      }
    }
  }
  async #animateIfNeeded(context) {
    const from = this.#disappearingContent?.[0];
    const to = this.#appearingContent?.[0];
    const promises = [];
    const { chain = [] } = context;
    let config;
    for (let i = chain.length - 1; i >= 0; i--) {
      if (chain[i].route.animate) {
        config = chain[i].route.animate;
        break;
      }
    }
    if (from && to && config) {
      const leave = isObject(config) && config.leave ? config.leave : "leaving";
      const enter = isObject(config) && config.enter ? config.enter : "entering";
      promises.push(animate_default(from, leave));
      promises.push(animate_default(to, enter));
    }
    await Promise.all(promises);
    return context;
  }
  /**
   * Subscribes this instance to navigation events on the `window`.
   *
   * NOTE: beware of resource leaks. For as long as a router instance is
   * subscribed to navigation events, it won't be garbage collected.
   */
  subscribe() {
    window.addEventListener("vaadin-router-go", this.#navigationEventHandler);
  }
  /**
   * Removes the subscription to navigation events created in the `subscribe()`
   * method.
   */
  unsubscribe() {
    window.removeEventListener("vaadin-router-go", this.#navigationEventHandler);
  }
  #onNavigationEvent(event) {
    const { pathname, search, hash } = event instanceof CustomEvent ? event.detail : window.location;
    if (isString(this.__normalizePathname(pathname))) {
      if (event?.preventDefault) {
        event.preventDefault();
      }
      void this.render({ pathname, search, hash }, true);
    }
  }
  /**
   * Configures what triggers Router navigation events:
   *  - `POPSTATE`: popstate events on the current `window`
   *  - `CLICK`: click events on `<a>` links leading to the current page
   *
   * This method is invoked with the pre-configured values when creating a new Router instance.
   * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
   *
   * See the `router-config.js` for the default navigation triggers config. Based on it, you can
   * create the own one and only import the triggers you need, instead of pulling in all the code,
   * e.g. if you want to handle `click` differently.
   *
   * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
   *
   * @param triggers - navigation triggers
   */
  static setTriggers(...triggers) {
    setNavigationTriggers(triggers);
  }
  /**
   * Generates a URL for the route with the given name, optionally performing
   * substitution of parameters.
   *
   * The route is searched in all the Router instances subscribed to
   * navigation events.
   *
   * **Note:** For child route names, only array children are considered.
   * It is not possible to generate URLs using a name for routes set with
   * a children function.
   *
   * @param name - The route name or the route’s `component` name.
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */
  urlForName(name, params) {
    if (!this.#urlForName) {
      this.#urlForName = generateUrls_default(this, {
        cacheKeyProvider(route) {
          return "component" in route && typeof route.component === "string" ? route.component : void 0;
        }
      });
    }
    return getPathnameForRouter(this.#urlForName(name, params ?? void 0), this);
  }
  /**
   * Generates a URL for the given route path, optionally performing
   * substitution of parameters.
   *
   * @param path - String route path declared in [express.js
   * syntax](https://expressjs.com/en/guide/routing.html#route-paths).
   * @param params - Optional object with route path parameters.
   * Named parameters are passed by name (`params[name] = value`), unnamed
   * parameters are passed by index (`params[index] = value`).
   */
  urlForPath(path, params) {
    return getPathnameForRouter(
      compile(path)(params ?? void 0),
      this
    );
  }
  /**
   * Triggers navigation to a new path. Returns a boolean without waiting until
   * the navigation is complete. Returns `true` if at least one `Router`
   * has handled the navigation (was subscribed and had `baseUrl` matching
   * the `path` argument), otherwise returns `false`.
   *
   * @param path - A new in-app path string, or an URL-like object with
   * `pathname` string property, and optional `search` and `hash` string
   * properties.
   */
  static go(path) {
    const { pathname, search, hash } = isString(path) ? new URL(path, "http://a") : path;
    return fireRouterEvent("go", { pathname, search, hash });
  }
}

let AppContainer = class AppContainer extends i {
    toggleSidebar() {
        const sidebar = this.shadowRoot?.querySelector('.sidebar');
        const mainContent = this.shadowRoot?.querySelector('#main-content');
        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }
    }
    _onCollectionSelected(e) {
        const collectionId = e.detail.collectionId;
        const mainContent = this.shadowRoot?.querySelector('#main-content');
        // mainContent.classList.remove('main-content');
        // mainContent.classList.add('current-collection');
        const currentCollection = document.createElement('current-collection');
        currentCollection.collectionId = collectionId;
        mainContent.innerHTML = '';
        mainContent.appendChild(currentCollection);
    }
    _onNewCollection() {
        const mainContent = this.shadowRoot?.querySelector('#main-content');
        // mainContent.classList.remove('current-collection');
        // mainContent.classList.add('main-content');
        mainContent.innerHTML = '';
        const newCollection = document.createElement('new-collection');
        mainContent.appendChild(newCollection);
    }
    firstUpdated() {
        const router = new Router(this.renderRoot.querySelector('#main-content'));
        router.setRoutes([
            { path: '/', component: 'new-collection' },
            { path: '/collection/:id', component: 'current-collection' },
            { path: '/register', component: 'auth-register' },
            { path: '/login', component: 'auth-login' },
            { path: '/about', component: 'about-view' },
        ]);
    }
    render() {
        return x `
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
        `;
    }
};
AppContainer.styles = [
    i$3 `
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
            `
];
AppContainer = __decorate([
    t('app-container')
], AppContainer);

// src/config/api.js
const getApiBaseUrl = () => {
    // En développement, l'API est sur un port différent
    if (typeof window !== 'undefined' && window.location.hostname === 'localhost' && window.location.port === '3000') {
        return 'http://localhost:8030';
    }
    // En production, l'API est servie par le même serveur
    return '';
};
const API_BASE_URL = getApiBaseUrl();

let NewCollection = class NewCollection extends i {
    constructor() {
        super(...arguments);
        this.error = null;
        this.loading = false;
    }
    async _handleClick() {
        const input = this.shadowRoot?.querySelector('input[type="text"]');
        const url = input.value.trim();
        if (!url) {
            alert("Veuillez saisir une URL valide.");
            return;
        }
        try {
            this.loading = true;
            const response = await this._callBackend(url);
            if (response.status === 200) {
                // The backend returns a collection ID
                const collectionId = response.collectionId;
                console.log("Collection créée avec l'ID:", collectionId);
                // const currentCollection = document.createElement('current-collection') as CurrentCollection;
                // currentCollection.collectionId = collectionId;
                window.location.href = '/collection/' + collectionId; // Redirect to the new collection
            }
            else {
                this.error = "Erreur lors de la création de la collection. Veuillez réessayer.";
            }
        }
        catch (error) {
            this.error = "Erreur inattendue: ${error}";
        }
        finally {
            this.loading = false;
        }
    }
    async _callBackend(url) {
        try {
            const token = localStorage.getItem('access_token');
            const res = await fetch(`${API_BASE_URL}/api/generate-cards`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    video_url: url,
                    difficulty: 'intermediaire',
                    language: 'en'
                })
            });
            if (!res.ok) {
                return { status: res.status, collectionId: "" };
            }
            const data = await res.json();
            return { status: res.status, collectionId: data.collection_uuid };
        }
        catch {
            return { status: 500, collectionId: "" };
        }
    }
    render() {
        return x `
      <div class="container">
        <h1>Créer une nouvelle collection</h1>
         <div class="search-box">
            <input type="text" placeholder="Saisir une URL" ?disabled=${this.loading}>
            <button @click=${this._handleClick} ?disabled=${this.loading}>🪄</button>
         </div>
          ${this.loading ? x `<p>Chargement...</p>` : ''}
          ${this.error ? x `<p style="color: red;">${this.error}</p>` : ''}
      </div>
    `;
    }
};
NewCollection.styles = [
    i$3 `
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
    `
];
__decorate([
    r()
], NewCollection.prototype, "error", void 0);
__decorate([
    r()
], NewCollection.prototype, "loading", void 0);
NewCollection = __decorate([
    t('new-collection')
], NewCollection);

class Card {
    constructor(id, front, back, difficulty = 1, numberOfViews = 0, numberOfGoodAnswers = 0, tags = [], createdAt = new Date(), updatedAt = new Date()) {
        this.id = id;
        this.front = front;
        this.back = back;
        this.difficulty = difficulty;
        this.numberOfViews = numberOfViews;
        this.numberOfGoodAnswers = numberOfGoodAnswers;
        this.tags = tags;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(json) {
        return new Card(json.id, json.front, json.back, json.difficulty || 1, json.seen || 0, json.answered_correctly || 0, json.tags || [], new Date(json.createdAt), new Date(json.updatedAt));
    }
    // Method to update the card's content
    update(front, back, tags = []) {
        this.front = front;
        this.back = back;
        this.tags = tags;
        this.updatedAt = new Date();
    }
}

class Collection {
    constructor(id, uuid, name, cards = [], createdAt, updatedAt) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.cards = cards;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    static fromJSON(json) {
        return new Collection(json.id, json.uuid, json.video_title, json.cards ? json.cards.map((card) => Card.fromJSON(card)) : [], new Date(json.createdAt), new Date(json.updatedAt));
    }
    randomCard() {
        if (this.cards.length === 0) {
            return null;
        }
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        return this.cards[randomIndex];
    }
}

class CardEvaluation {
    constructor(cardId, correct, comment = '') {
        this.cardId = cardId;
        this.correct = correct;
        this.comment = comment;
    }
    static fromJSON(json) {
        return new CardEvaluation(json.cardId, json.correct, json.comment || '');
    }
}

let CurrentCollection = class CurrentCollection extends i {
    constructor() {
        super(...arguments);
        this.collectionId = null;
        this.collectionData = null;
        this.isLoading = true;
        this.currentCard = null;
        this.lastCardEvaluation = null;
        this.userAnswer = '';
        //TODO: replace with a class that represent fetched stats from the API
        this.totalCards = 10;
        this.openedCards = 5;
        this.correctAnswers = 3;
        this.isModalOpen = false;
    }
    onBeforeEnter(location) {
        this.collectionId = location.params.id;
    }
    willUpdate(_changedProperties) {
        if (_changedProperties.has('collectionId') && this.collectionId) {
            this.fetchCollectionData();
        }
    }
    async fetchCollectionData() {
        if (!this.collectionId) {
            console.warn('Collection ID is not set.');
            return;
        }
        this.isLoading = true;
        try {
            // const response = await fetch(`/api/collections/${this.collectionId}`);
            const response = await fetch(`${API_BASE_URL}/api/collection/${this.collectionId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Data fetched:', data);
            this.collectionData = Collection.fromJSON(data);
            console.log('Collection data fetched:', this.collectionData);
            this.currentCard = await this.getRandomCard();
        }
        catch (error) {
            console.error('Error fetching collection data:', error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async getRandomCard() {
        this.lastCardEvaluation = null;
        const response = await fetch(`${API_BASE_URL}/api/collection/${this.collectionData?.id}/random`);
        if (!response.ok) {
            console.error('Failed to fetch random card:', response.statusText);
            return null;
        }
        const data = await response.json();
        console.log('Random card data:', data);
        return Card.fromJSON(data);
    }
    async validateResponse() {
        if (!this.userAnswer || !this.currentCard) {
            alert('Veuillez entrer une réponse avant de valider!');
            return;
        }
        const response = await fetch(`${API_BASE_URL}/api/card/evaluate-answer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                card_id: this.currentCard.id,
                answer: this.userAnswer,
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.lastCardEvaluation = CardEvaluation.fromJSON(data);
        this.userAnswer = '';
    }
    closeModal() {
        this.isModalOpen = false;
    }
    render() {
        return x `
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
          ${this.currentCard ? x `
            <div class="card-stats">
              <div class="card-stat-item">
                <span class="card-stat-icon views-icon"></span>
                <span>Vue ${this.currentCard.numberOfViews || 0} fois</span>
              </div>
              <div class="card-stat-item">
                <span class="card-stat-icon correct-icon"></span>
                <span>${this.currentCard.numberOfGoodAnswers || 0} bonnes réponses</span>
              </div>
            </div>
          ` : ''}

          <div class="card-content">
            ${this.isLoading
            ? x `<div class="loading">Chargement...</div>`
            : this.currentCard
                ? x `${this.currentCard.front}`
                : x `<div class="no-cards">Aucune carte disponible dans cette collection.</div>`}
          </div>
        </div>

        <!-- Zone de réponse -->
        <div class="answer-section" ?hidden="${this.lastCardEvaluation !== null}">
          <h3>Votre réponse</h3>
          <textarea id="user-answer"
          placeholder="Tapez votre réponse ici..." .value="${this.userAnswer}"
          @input="${(e) => {
            const target = e.target;
            this.userAnswer = target.value;
        }}"
          ></textarea>
          <div class="button-group">
            <button class="btn-primary" @click="${this.validateResponse}">
              Valider la Réponse
            </button>
            <button class="btn-secondary" @click="${() => { this.isModalOpen = true; console.log('modal show'); }}">
              Voir la Réponse
            </button>
          </div>
        </div>
        <div class="evaluation-section" ?hidden="${this.lastCardEvaluation === null}">
          <h3>Évaluation de la Carte</h3>
          <p>Correct: ${this.lastCardEvaluation?.correct ? 'Oui' : 'Non'}</p>
          <p>Commentaire: ${this.lastCardEvaluation?.comment || 'Aucun commentaire'}</p>
        </div>

        <!-- Bouton carte suivante -->
        <div class="button-group">
          <button class="btn-next" @click="${async () => {
            this.currentCard = await this.getRandomCard();
        }}">
              Carte suivante
            </button>
        </div>
      </div>

      ${this.isModalOpen
            ? x `
            <div class="modal-overlay" @click="${this.closeModal}">
              <div class="modal-content" @click="${(e) => e.stopPropagation()}">
                <button class="close-button" @click="${this.closeModal}">&times;</button>
                <h3>Réponse de la carte</h3>
                <p>${this.currentCard?.back}</p>
              </div>
            </div>
          `
            : ''}
    `;
    }
};
CurrentCollection.styles = [
    i$3 `
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
    `
];
__decorate([
    n()
], CurrentCollection.prototype, "collectionId", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "collectionData", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "isLoading", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "currentCard", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "lastCardEvaluation", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "userAnswer", void 0);
__decorate([
    r()
], CurrentCollection.prototype, "isModalOpen", void 0);
CurrentCollection = __decorate([
    t('current-collection')
], CurrentCollection);

let CollectionList = class CollectionList extends i {
    constructor() {
        super(...arguments);
        this.collections = [];
        this.loading = false;
        this.page = 1;
        this.observer = null;
    }
    firstUpdated() {
        this.loadMore();
        const sentinel = this.shadowRoot?.querySelector('#sentinel');
        if (!sentinel) {
            console.warn('Sentinel element not found');
            return;
        }
        this.observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !this.loading) {
                this.loadMore();
            }
        });
        this.observer.observe(sentinel);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observer?.disconnect();
    }
    async loadMore() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            console.error('No access token found');
            return;
        }
        this.loading = true; // Éviter les appels multiples
        try {
            const response = await fetch(`${API_BASE_URL}/api/collections?page=${this.page}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                this.collections = [...this.collections, ...data];
                this.page += 1;
            }
            else {
                console.error("Failed to load more collections", response.status);
            }
        }
        catch (error) {
            console.error("Network error:", error);
        }
        finally {
            this.loading = false;
        }
    }
    render() {
        return x `
         <ul class="container">
            ${this.collections.map((item) => x `<li part="list-item"><a href="/collection/${item.uuid}">${item.video_title}</a></li>`)}
            ${this.loading ? x `<div class="loading">Chargement...</div>` : ''}
            <!-- Élément sentinelle pour détecter le bas -->
            <div id="sentinel"></div>
        `;
    }
};
CollectionList.styles = i$3 `
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

        `;
__decorate([
    r()
], CollectionList.prototype, "collections", void 0);
__decorate([
    r()
], CollectionList.prototype, "loading", void 0);
__decorate([
    r()
], CollectionList.prototype, "page", void 0);
CollectionList = __decorate([
    t('collection-list')
], CollectionList);

let AboutView = class AboutView extends i {
    render() {
        return x `<h2>À propos de cette app</h2>`;
    }
};
AboutView = __decorate([
    t('about-view')
], AboutView);

let AuthRegister = class AuthRegister extends i {
    constructor() {
        super(...arguments);
        this.email = '';
        this.password = '';
        this.message = '';
        this.isSuccess = false;
    }
    render() {
        return x `
            <h2>S'enregistrer</h2>
            <form @submit=${(e) => this._handleSubmit(e)}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${(e) => (this.email = e.target.value)}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${(e) => (this.password = e.target.value)}
                required
            />

            <button type="submit">S'inscrire</button>
            </form>
            ${this.message
            ? x `<p class="message ${this.isSuccess ? 'success' : 'error'}">
                  ${this.message}
              </p>`
            : ''}
            <p style="text-align: center; margin-top: 20px;">
            Déjà un compte? <a href="/login">Se connecter</a>
            </p>
        `;
    }
    async _handleSubmit(event) {
        event.preventDefault();
        this.message = ''; // Clear previous messages
        this.isSuccess = false;
        try {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                await this._loginUser(this.email, this.password);
            }
            else {
                this.message = data.detail || 'Erreur lors de l\'enregistrement.';
                this.isSuccess = false;
            }
        }
        catch (error) {
            this.message = 'Erreur réseau. Veuillez réessayer.';
            this.isSuccess = false;
            console.error('Registration error:', error);
        }
    }
    async _loginUser(email, password) {
        try {
            // Utilisation du endpoint de login de FastAPI-users
            // Selon la configuration, cela peut être /auth/login ou /auth/jwt/login
            const loginResponse = await fetch(`${API_BASE_URL}/auth/jwt/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: email, // FastAPI-users utilise 'username' même pour l'email
                    password: password,
                }),
            });
            const loginData = await loginResponse.json();
            if (loginResponse.ok) {
                // Stockage du token JWT
                localStorage.setItem('access_token', loginData.access_token);
                if (loginData.refresh_token) {
                    localStorage.setItem('refresh_token', loginData.refresh_token);
                }
                this.message = 'Enregistrement réussi! Connexion automatique...';
                this.isSuccess = true;
                // Effacer le formulaire
                this.email = '';
                this.password = '';
                // Émettre un événement pour notifier les autres composants
                this.dispatchEvent(new CustomEvent('user-logged-in', {
                    bubbles: true,
                    composed: true,
                    detail: { user: loginData }
                }));
                // Redirection vers la page d'accueil ou dashboard
                setTimeout(() => {
                    window.location.href = '/'; // ou votre page d'accueil
                }, 1500);
            }
            else {
                // Si la connexion automatique échoue, rediriger vers login
                this.message = 'Enregistrement réussi! Veuillez vous connecter.';
                this.isSuccess = true;
                setTimeout(() => {
                    window.location.href = '/login';
                }, 2000);
            }
        }
        catch (error) {
            console.error('Auto-login error:', error);
            // En cas d'erreur de connexion auto, rediriger vers login
            this.message = 'Enregistrement réussi! Veuillez vous connecter.';
            this.isSuccess = true;
            setTimeout(() => {
                window.location.href = '/login';
            }, 2000);
        }
    }
};
AuthRegister.styles = i$3 `
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
    `;
__decorate([
    r()
], AuthRegister.prototype, "email", void 0);
__decorate([
    r()
], AuthRegister.prototype, "password", void 0);
__decorate([
    r()
], AuthRegister.prototype, "message", void 0);
__decorate([
    r()
], AuthRegister.prototype, "isSuccess", void 0);
AuthRegister = __decorate([
    t('auth-register')
], AuthRegister);

let AuthLogin = class AuthLogin extends i {
    constructor() {
        super(...arguments);
        this.email = '';
        this.password = '';
        this.message = '';
        this.isSuccess = false;
    }
    render() {
        return x `
            <h2>Se connecter</h2>
            <form @submit=${this._handleSubmit}>
            <label for="email">Email:</label>
            <input
                type="email"
                id="email"
                .value=${this.email}
                @input=${(e) => (this.email = e.target.value)}
                required
            />

            <label for="password">Mot de passe:</label>
            <input
                type="password"
                id="password"
                .value=${this.password}
                @input=${(e) => (this.password = e.target.value)}
                required
            />

            <button type="submit">Connexion</button>
            </form>
            ${this.message
            ? x `<p class="message ${this.isSuccess ? 'success' : 'error'}">
                  ${this.message}
              </p>`
            : ''}
            <p style="text-align: center; margin-top: 20px;">
            Pas de compte? <a href="/register">S'enregistrer</a>
            </p>
        `;
    }
    async _handleSubmit(event) {
        event.preventDefault();
        this.message = ''; // Clear previous messages
        this.isSuccess = false;
        // FastAPI-Users login expects 'username' for the email
        const formData = new URLSearchParams();
        formData.append('username', this.email);
        formData.append('password', this.password);
        console.log('Attempting to login with:', API_BASE_URL);
        try {
            const response = await fetch(`${API_BASE_URL}/auth/jwt/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString(),
            });
            // For JWT, the token is often in the response body or Authorization header
            const data = await response.json();
            if (response.ok) {
                // Assuming token is in data.access_token for BearerTransport
                const token = data.access_token;
                localStorage.setItem('access_token', token); // Store token
                this.message = 'Connexion réussie!';
                this.isSuccess = true;
                this.email = ''; // Clear form
                this.password = ''; // Clear form
                // Optionally, dispatch an event or redirect to a dashboard
                const authEvent = new CustomEvent('auth-success', {
                    bubbles: true,
                    composed: true,
                    detail: { token: token, user: data.user }, // data.user might be present if configured
                });
                this.dispatchEvent(authEvent);
                setTimeout(() => window.location.href = '/', 200);
            }
            else {
                this.message = data.detail || 'Email ou mot de passe incorrect.';
                this.isSuccess = false;
            }
        }
        catch (error) {
            this.message = 'Erreur réseau. Veuillez réessayer.';
            this.isSuccess = false;
            console.error('Login error:', error);
        }
    }
};
AuthLogin.styles = i$3 `
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
    `;
__decorate([
    r()
], AuthLogin.prototype, "email", void 0);
__decorate([
    r()
], AuthLogin.prototype, "password", void 0);
__decorate([
    r()
], AuthLogin.prototype, "message", void 0);
__decorate([
    r()
], AuthLogin.prototype, "isSuccess", void 0);
AuthLogin = __decorate([
    t('auth-login')
], AuthLogin);

class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    }
    catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    }
    catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}

// frontend/auth-state.ts
// 2. Fonction pour vérifier si l'utilisateur est authentifié
function isAuthenticated() {
    const token = localStorage.getItem('access_token');
    if (!token) {
        return false;
    }
    try {
        // jwtDecode retourne un type any par défaut, nous le castons pour accéder à 'exp'
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Temps actuel en secondes
        if (decodedToken.exp < currentTime) {
            console.warn('Token expiré. Déconnexion automatique.');
            logout(); // Déconnecte l'utilisateur si le token est expiré
            return false;
        }
        return true;
    }
    catch (error) {
        console.error('Erreur lors du décodage du token JWT:', error);
        logout(); // Token invalide ou corrompu
        return false;
    }
}
// 3. Fonction pour récupérer les informations de l'utilisateur
function getUserInfo() {
    if (isAuthenticated()) {
        const userInfoString = localStorage.getItem('user_info');
        if (userInfoString) {
            // Caster la chaîne JSON parsée en UserInfo
            return JSON.parse(userInfoString);
        }
        // Si les infos ne sont pas dans localStorage, essayez de les extraire du token
        const token = localStorage.getItem('access_token');
        if (token) {
            try {
                // Caster le token décodé en UserInfo
                return jwtDecode(token);
            }
            catch (e) {
                console.error("Erreur lors du décodage du token pour UserInfo:", e);
                return null;
            }
        }
    }
    return null;
}
// 4. Fonction pour la déconnexion
function logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_info');
    // Déclenche un événement global pour que d'autres composants puissent réagir à la déconnexion
    window.dispatchEvent(new CustomEvent('auth-status-changed', {
        detail: { isAuthenticated: false, token: null, user: null }
    }));
}

let AppNav = class AppNav extends i {
    constructor() {
        super();
        this.isAuthenticated = false;
        this.userInfo = null;
        this._updateAuthState();
        // Écoute les changements globaux de l'état d'authentification
        window.addEventListener('auth-status-changed', this._handleAuthStatusChange.bind(this));
    }
    // Met à jour l'état interne du composant quand l'état d'auth global change
    _handleAuthStatusChange() {
        this._updateAuthState();
    }
    // Récupère l'état d'authentification et les infos utilisateur
    _updateAuthState() {
        this.isAuthenticated = isAuthenticated();
        this.userInfo = getUserInfo();
    }
    // Gère la déconnexion
    _handleLogout() {
        logout(); // Appelle la fonction de déconnexion du service d'authentification
    }
    // Rend les liens de navigation cliquables sans recharger la page
    _handleClick(e) {
        if (e.target instanceof HTMLAnchorElement && e.target.href) {
            e.preventDefault();
            // Utilise vaadin-router pour naviguer
            window.history.pushState({}, '', e.target.href);
            window.dispatchEvent(new PopStateEvent('popstate'));
        }
    }
    render() {
        return x `
            <nav @click=${this._handleClick}>
                <a href="/" class="logo">Anki-Tube</a>

                <div class="nav-links">
                    <a href="/">Accueil</a>

                    ${this.isAuthenticated
            ? x `
                              <a href="/">home</a>
                          `
            : x `
                              <a href="/login">Se connecter</a>
                              <a href="/register">S'enregistrer</a>
                          `}
                </div>

                <div class="auth-controls">
                    ${this.isAuthenticated
            ? x `
                              <span class="welcome-message"
                                  >Bienvenue, ${this.userInfo?.email || 'utilisateur'}!</span
                              >
                              <button @click=${this._handleLogout}>Déconnexion</button>
                          `
            : ''}
                </div>
            </nav>
        `;
    }
};
AppNav.styles = i$3 `
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
    `;
__decorate([
    n({ type: Boolean })
], AppNav.prototype, "isAuthenticated", void 0);
__decorate([
    n({ type: Object })
], AppNav.prototype, "userInfo", void 0);
AppNav = __decorate([
    t('app-nav')
], AppNav);
//# sourceMappingURL=bundle.js.map
