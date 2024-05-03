var easyreport;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@easydata/core/dist/easydata.core.es.js":
/*!**************************************************************!*\
  !*** ./node_modules/@easydata/core/dist/easydata.core.es.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AggregationSettings: () => (/* binding */ T),
/* harmony export */   ColumnAlignment: () => (/* binding */ h),
/* harmony export */   DataColumn: () => (/* binding */ x),
/* harmony export */   DataColumnList: () => (/* binding */ E),
/* harmony export */   DataRow: () => (/* binding */ b),
/* harmony export */   DataType: () => (/* binding */ t),
/* harmony export */   EasyDataTable: () => (/* binding */ C),
/* harmony export */   EasyGuid: () => (/* binding */ I),
/* harmony export */   EditorTag: () => (/* binding */ s),
/* harmony export */   EntityAttrKind: () => (/* binding */ e),
/* harmony export */   EventEmitter: () => (/* binding */ A),
/* harmony export */   HttpClient: () => (/* binding */ m),
/* harmony export */   HttpMethod: () => (/* binding */ r),
/* harmony export */   HttpRequest: () => (/* binding */ d),
/* harmony export */   HttpResponseError: () => (/* binding */ f),
/* harmony export */   MetaData: () => (/* binding */ w),
/* harmony export */   MetaEntity: () => (/* binding */ p),
/* harmony export */   MetaEntityAttr: () => (/* binding */ y),
/* harmony export */   SpecialDatesResolver: () => (/* binding */ n),
/* harmony export */   TimeValue: () => (/* binding */ i),
/* harmony export */   ValueEditor: () => (/* binding */ D),
/* harmony export */   combinePath: () => (/* binding */ M),
/* harmony export */   i18n: () => (/* binding */ a),
/* harmony export */   liquid: () => (/* binding */ l),
/* harmony export */   registerSpecialDatesResolver: () => (/* binding */ c),
/* harmony export */   repeatString: () => (/* binding */ v),
/* harmony export */   reverseString: () => (/* binding */ F),
/* harmony export */   strEndsWith: () => (/* binding */ S),
/* harmony export */   utils: () => (/* binding */ o)
/* harmony export */ });
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
/*!
 * EasyData.JS Core
 * Copyright 2023 Korzh.com
 * Licensed under MIT
 !*/
var t,e;!function(t){t[t.Unknown=0]="Unknown",t[t.String=1]="String",t[t.Byte=2]="Byte",t[t.Word=3]="Word",t[t.Int32=4]="Int32",t[t.Int64=5]="Int64",t[t.Bool=6]="Bool",t[t.Float=7]="Float",t[t.Currency=8]="Currency",t[t.BCD=9]="BCD",t[t.Date=10]="Date",t[t.Time=11]="Time",t[t.DateTime=12]="DateTime",t[t.Autoinc=13]="Autoinc",t[t.Memo=14]="Memo",t[t.Blob=15]="Blob",t[t.FixedChar=16]="FixedChar",t[t.Guid=17]="Guid",t[t.Geometry=18]="Geometry",t[t.Geography=19]="Geography"}(t||(t={})),function(t){t[t.Data=0]="Data",t[t.Virtual=1]="Virtual",t[t.Lookup=2]="Lookup"}(e||(e={}));const s={Unknown:"Unknown",Edit:"EDIT",DateTime:"DATETIME",List:"LIST",CustomList:"CUSTOMLIST",File:"FILE"};class i{constructor(t){t instanceof Date?this.date=t:this._name=t}asTime(t){if(this.date)return this.date;u.getDateByName(this._name)}get name(){return this.name}}class n{getDateByName(t,e){return this[t]?this[t](e):void 0}Today(t){return new Date}Yesterday(t){let e=new Date;return e.setDate(e.getDate()-1),e}Tomorrow(t){let e=new Date;return e.setDate(e.getDate()+1),e}FirstDayOfMonth(t){let e=new Date;return e.setDate(1),e}LastDayOfMonth(t){let e=new Date;return e.setMonth(e.getMonth()+1,0),e}FirstDayOfNextMonth(t){let e=new Date;return e.setMonth(e.getMonth()+1,1),e}FirstDayOfPrevMonth(t){let e=new Date;return e.setMonth(e.getMonth()-1,1),e}FirstDayOfYear(t){const e=new Date;return e.setMonth(0,1),e}FirstDayOfPrevYear(t){let e=new Date;return e.setFullYear(e.getFullYear()-1,0,1),e}FirstDayOfNextYear(t){let e=new Date;return e.setFullYear(e.getFullYear()+1,0,1),e}FirstDayOfWeek(t){const e=new Date;let s=e.getDay();return s=0==s?6:s-1,e.setDate(e.getDate()-s),e}FirstDayOfPrevWeek(t){let e=new Date,s=e.getDay();return s=0==s?1:8-s,e.setDate(e.getDate()-s),e}FirstDayOfNextWeek(t){let e=new Date;var s=e.getDay();return s=0==s?1:8-s,e.setDate(e.getDate()+s),e}}var r,o,a,h,l,u=new n;function c(t){u=t}!function(t){t.Trace="TRACE",t.Options="OPTIONS",t.Get="GET",t.Put="PUT",t.Post="POST",t.Delete="DELETE"}(r||(r={}));class d{constructor(t,e){this.xhr=t,this.method=e.method,this.url=e.url,this.headers=e.headers,this.queryParams=e.queryParams,this.data=e.data}setHeader(t,e){this.headers[t]=e}setQueryParam(t,e){this.queryParams[t]=e}getXMLHttpRequest(){return this.xhr}getResponseHeaders(){if(this.xhr.readyState==this.xhr.HEADERS_RECEIVED){const t=this.xhr.getAllResponseHeaders().trim().split(/[\r\n]+/),e={};for(const s of t){const t=s.split(": "),i=t.shift(),n=t.join(": ");e[i]=n}return e}return{}}open(){if(this.xhr.readyState!==this.xhr.UNSENT)return;let t=this.url;this.queryParams&&Object.keys(this.queryParams).length>0&&(t+=encodeURI("?"+Object.keys(this.queryParams).map((t=>t+"="+this.queryParams[t])).join("&"))),this.xhr.open(this.method,t,!0),this.xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");for(const t in this.headers)this.xhr.setRequestHeader(t,this.headers[t])}abort(){this.xhr.abort()}}!function(e){e.getAllDataTypes=function(){return Object.values(t).filter((t=>"number"==typeof t))},e.getDateDataTypes=function(){return[t.Time,t.Date,t.DateTime]},e.getStringDataTypes=function(){return[t.String,t.Memo,t.FixedChar]};const s=[t.Byte,t.Word,t.Int32,t.Int64,t.Float,t.Currency,t.Autoinc];e.getNumericDataTypes=function(){return s};const i=[t.Byte,t.Word,t.Int32,t.Int64,t.Autoinc];function n(t,e,s){e||(e={});for(let i of s)if(i)for(let s in i)if(i.hasOwnProperty(s)){let o=i[s];null!==o&&"object"==typeof o?t.has(o)?e[s]=t.get(o):Array.isArray(o)?(e[s]=r(o),t.set(o,e[s])):(void 0!==e[s]&&null!=e[s]||(e[s]=Object.create(Object.getPrototypeOf(o))),t.set(o,e[s]),n(t,e[s],[o])):e[s]=o}return e}function r(t){let e=[];for(let s of t)e.push(s);return e}e.assign=function(t,...e){for(let s=0;s<e.length;s++){let i=e[s];if(i)for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e])}return t},e.assignDeep=function(t,...e){return n(new WeakMap,t,e)},e.getIfDefined=function(t,e){return void 0!==t?t:e},e.IsDefinedAndNotNull=function(t){return null!=t},e.copyArrayTo=function(t,e){const s=t.length,i=e.length;for(let n=0;n<s&&n<i;n++)e[n]=t[n]},e.createArrayFrom=r,e.findItemById=function(t,e){for(var s=t.length,i=0;i<s;i++)if(t[i].id===e)return t[i];return null},e.findItemIndexById=function(t,e){for(var s=t.length,i=0;i<s;i++)if(t[i].id===e)return i;return-1},e.indexOfArrayItem=function(t,e){if(t.indexOf)return t.indexOf(e);{let s=t.length;for(let i=0;i<s;i++)if(e==t[i])return i;return-1}},e.moveArrayItem=function(t,e,s){if(e>=t.length)throw"Index out of bounds: "+e;s>=t.length&&(s=t.length-1);let i=t.splice(e,1)[0];t.splice(s,0,i)},e.removeArrayItem=function(t,e){let s=t.indexOf(e);if(-1!=s)return t.splice(s,1)[0]},e.insertArrayItem=function(t,e,s){t.splice(e,0,s)},e.fillArray=function(t,e,s=0,i){let n=t.length>>>0;var r=s>>0,o=r<0?Math.max(n+r,0):Math.min(r,n),a=void 0===i?n:i>>0;let h=a<0?Math.max(n+a,0):Math.min(a,n);for(;o<h;)t[o]=e,o++;return t},e.shiftToFitWindow=function(t,e){let s=document.getElementsByTagName("body")[0],i=window.innerWidth||document.documentElement.clientWidth||s.clientWidth;var n=t+e;let r=0;return n>i&&(r=i-n-10,t+r<0&&(r=10-t)),r},e.isObject=function(t){return null!==t&&("function"==typeof t||"object"==typeof t)},e.isNumericType=function(t){return s.indexOf(t)>=0},e.isIntType=function(t){return i.indexOf(t)>=0},e.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},e.areCompatibleDataTypes=function(e,s){return void 0===e||void 0===s||e==t.Unknown||s==t.Unknown||e==s||e==t.Date&&s==t.DateTime||e==t.DateTime&&s==t.Date},e.isPropSet=function(t,e){return t[e]||t[e.toLowerCase()]||t[e.toUpperCase()]};const o="0123456789abcdefghijklmnopqrstuvwxyz";function a(t,e){const s=t.length;if(s>e){let i=s/e,n="";n+=t[0];let r,o=i;for(let e=1;e<s;e++)r=t[e],e+1>o&&(n+=r,o+=i);return n}return t}function h(t,e){return Math.floor(Math.random()*(e-t))+t}function l(t){const e=parseInt(t);if(isNaN(e))throw`"${t}" is not a valid number`;return e}e.generateId=function(t){t||(t="easy");let e=t.length>4?function(t,e){let s=t.split("-"),i=1,n=e;s.length<e&&(i=e/s.length,n=s.length);let r="";for(let t=0;t<n;t++)r+=a(s[t],i);return r}(t,4):t;e&&e.length>0&&(e+="-");var s=o[h(0,o.length)]+o[h(0,o.length)]+o[h(0,o.length)],i=h(0,1e4);return e+s+function(t,e=36){var s="",i=t;do{s=o[i%e]+s,i=Math.floor(i/=e)}while(i>0);return s}(621355968e9+1e4*(new Date).getTime()-0x8d60e562e627800-i)},e.strToDateTime=function(t,e){if(!t||0==t.length)return new Date;const s=t.replace(/[^a-zA-Z0-9_]/g,"-"),i=e.replace(/[^a-zA-Z0-9_]/g,"-").split("-"),n=s.split("-"),r=i.indexOf("MM"),o=i.indexOf("dd"),a=i.indexOf("yyyy"),h=i.indexOf("HH"),u=i.indexOf("mm"),c=i.indexOf("ss"),d=new Date;try{const t=a>-1&&a<n.length?l(n[a]):d.getFullYear(),e=r>-1&&r<n.length?l(n[r])-1:d.getMonth()-1;if(e>11)throw"";const s=o>-1&&o<n.length?l(n[o]):d.getDate();if(s>function(t,e){return new Date(e,t+1,0).getDate()}(e,t))throw"";const i=h>-1&&h<n.length?l(n[h]):0;if(i>23)throw"";const g=u>-1&&u<n.length?l(n[u]):0;if(g>59)throw"";const f=c>-1&&c<n.length?l(n[c]):0;if(f>59)throw"";return new Date(t,e,s,i,g,f)}catch(e){throw`${t} is not a valid date.`}},e.strToTime=function(t){const e=t.split(":");try{const t=e.length>0?l(e[0]):0;if(t>23)throw"";const s=e.length>1?l(e[1]):0;if(s>59)throw"";const i=e.length>1?l(e[1]):0;if(i>59)throw"";return new Date(0,0,0,t,s,i)}catch(e){throw`${t} is not a valid time.`}}}(o||(o={}));class g{constructor(t,e){this.request=t,this.promise=e}getPromise(){return this.promise}getRequest(){return this.request}then(t,e){return this.promise.then(t,e)}catch(t){return this.promise.catch(t)}finally(t){return this.promise.finally(t)}}class f extends Error{constructor(t,e){super(e),this.status=t}}class m{get responseBody(){return this._responseBody}constructor(){this.defaultHeaders={},this.customPayload=void 0}get(t,e){return this.send(r.Get,t,null,e)}post(t,e,s){return this.send(r.Post,t,e,s)}put(t,e,s){return this.send(r.Put,t,e,s)}delete(t,e,s){return this.send(r.Delete,t,e,s)}send(t,e,s,i){const n=(i=i||{}).dataType||"json",r=i.contentType||"form-data"!==n?"application/json":null;s&&"form-data"!=n&&this.customPayload&&(s.data=o.assignDeep(s.data||{},this.customPayload));const a=new("onload"in new XMLHttpRequest?XMLHttpRequest:window.XDomainRequest),h={method:t,url:e,headers:Object.assign(Object.assign({},this.defaultHeaders),i.headers||{}),queryParams:i.queryParams||{},data:s};r&&(h.headers["Content-Type"]=r);const l=new d(a,h);this.beforeEachRequest&&(console.warn("HttpClient: 'beforeEachRequest' is deprecated and will be removed in future updates.\n            Use 'onRequest' instead"),this.beforeEachRequest(l)),this.onRequest&&this.onRequest(l);const u=l.data&&"string"!=typeof l.data&&"json"==n?JSON.stringify(l.data):l.data;return l.open(),new g(l,new Promise(((t,s)=>{i.responseType&&(a.responseType=i.responseType),a.onerror=t=>{s(new f(a.status,a.responseText))},a.onreadystatechange=()=>{if(4!=a.readyState)return;const i=a.getResponseHeader("Content-Type")||"",n=a.status;if(0===n)s(new f(n,"Network error or the request was aborted"));else if(n>=200&&n<400){const e="arraybuffer"===a.responseType||"blob"===a.responseType?a.response:0==i.indexOf("application/json")?JSON.parse(a.responseText):a.responseText;this._responseBody=e,this.onResponse&&this.onResponse(a),t(e)}else{("arraybuffer"===a.responseType||"blob"===a.responseType?m.decodeArrayBuffer(a.response):Promise.resolve(a.responseText)).then((t=>{const r=0==i.indexOf("application/json")?JSON.parse(t):t;this._responseBody=r;const o=r.message||(404==n?`No such endpoint: ${e}`:r);s(new f(n,o))}))}},a.send(u)})))}static decodeArrayBuffer(t){var e=new FileReader;return new Promise((s=>{e.onloadend=function(){e.readyState==FileReader.DONE&&s(e.result)},e.readAsText(new Blob([t]))}))}}!function(e){let s,i={shortDateFormat:"MM/dd/yyyy",longDateFormat:"dd MMM, yyyy",editDateFormat:"MM/dd/yyyy",shortTimeFormat:"HH:mm",editTimeFormat:"HH:mm",longTimeFormat:"HH:mm:ss",shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],shortWeekDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longWeekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalSeparator:".",currency:"USD"},n={localeId:"en-US",englishName:"English",displayName:"English",texts:{ButtonOK:"OK",ButtonCancel:"Cancel",Yes:"Yes",No:"No",True:"True",False:"False"},settings:i},r={"en-US":n};const a=[];function h(t){for(const e of a)e(t)}function l(){return s.localeId}function u(t){const e=r[t];e?o.assignDeep(s,e):(s.englishName=t,s.displayName=t,s.texts=o.assignDeep({},n.texts)),s.localeId=t}function c(){return s.settings}function d(t){s.settings||(s.settings=o.assignDeep({},i)),s.settings=o.assignDeep(s.settings,t)}function g(t,e){h(e);let i=s;t&&(e.localeId||(e.localeId=t),i=r[t],i||(i=o.assignDeep({},n),r[t]=i)),o.assignDeep(i,e)}function f(){!function(t){const e=new Date(2020,5,7,19,34,56,88),i=e.toLocaleDateString(t,{year:"numeric",month:"numeric",day:"numeric"}),n=e.toLocaleTimeString(t,{hour:"numeric",minute:"numeric",second:"numeric"});let r=i.replace("07","dd").replace("7","d").replace("06","MM").replace("6","M").replace("2020","yyyy").replace("20","yy"),o=n.replace("19","HH").replace("07","hh").replace("7","h").replace("34","mm").replace("56","ss").replace("PM","tt");s.settings||(s.settings={}),d({shortDateFormat:r,shortTimeFormat:o})}("object"==typeof navigator?navigator.language:void 0)}e.addMapper=function(t){a.push(t)},e.getLocales=function(){let t=[];for(let e in r)t.push({locale:e,englishName:r[e].englishName,displayName:r[e].displayName});return t.sort(((t,e)=>t.englishName>e.englishName?1:t.englishName===e.englishName?0:-1))},e.getCurrentLocale=l,e.setLocale=function(t){console.warn("This method is deprecated. Use setCurrentLocale instead"),u(t)},e.setCurrentLocale=u,e.getText=function(...t){let e=s.texts,i="";if(t&&t.length){const s=t.length;for(let n=0;n<s&&(i=e[t[n]],"object"==typeof i);n++)e=i}return i},e.getLocaleSettings=c,e.getOneLocaleSetting=function(t){return s.settings[t]},e.getShortMonthName=function(t){const e=c();if(t>0&&t<13)return e.shortMonthNames[t-1];throw"Wrong month number: "+t},e.getLongMonthName=function(t){const e=c();if(t>0&&t<13)return e.longMonthNames[t-1];throw"Wrong month number: "+t},e.getShortWeekDayName=function(t){const e=c();if(t>0&&t<8)return e.shortWeekDayNames.length>=t?e.shortWeekDayNames[t-1]:t.toString();throw"Wrong month number: "+t},e.getLongWeekDayName=function(t){const e=c();if(t>0&&t<8)return e.longWeekDayNames.length>=t?e.longWeekDayNames[t-1]:t.toString();throw"Wrong month number: "+t},e.updateLocaleSettings=d,e.updateLocaleTexts=function(t){"object"==typeof t?(h({localeId:s.localeId,texts:t}),o.assignDeep(s.texts,t)):console.error("Wrong parameter type in updateLocaleTexts function call.The first parameter (localeId) is not necessary. Use updateLocaleTexts(texts) instead")},e.updateDefaultTexts=function(t){for(let e in r){let s=r[e];s.texts=o.assignDeep({},t,s.texts)}s.texts=o.assignDeep({},t,s.texts)},e.updateLocaleInfo=g,e.addLocale=function(t,e){g(t,e)},e.resetLocales=function(){s||(s=o.assignDeep({},n),f())};const m=/\[([^\]]+)]|y{2,4}|M{1,4}|d{1,2}|H{1,2}|h{1,2}|m{2}|s{2}|t{2}/g;function p(t,s){const i=t.getFullYear().toString(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),a=t.getMinutes(),h=t.getSeconds(),l=o%12||12,u=o>11,c={yyyy:i,yy:i.substring(i.length-2),MMMM:e.getLongMonthName(n),MMM:e.getShortMonthName(n),MM:n<10?"0"+n:n.toString(),M:n.toString(),dd:r<10?"0"+r:r.toString(),d:r.toString(),HH:o<10?"0"+o:o.toString(),H:o.toString(),hh:l<10?"0"+l:l.toString(),h:l.toString(),tt:u?"PM":"AM",mm:a<10?"0"+a:a.toString(),ss:h<10?"0"+h:h.toString()};return s.replace(m,((t,e)=>e||c[t]))}function y(e){const s=c();let i;switch(e){case t.Date:i=s.shortDateFormat;break;case t.Time:i=s.shortTimeFormat;break;default:i=s.shortDateFormat+" "+s.shortTimeFormat}return i}function D(e){const s=c();let i;switch(e){case t.Date:i=s.longDateFormat;break;case t.Time:i=s.longTimeFormat;break;default:i=s.longDateFormat+" "+s.longTimeFormat}return i}e.dateTimeToStr=p,e.dateTimeToStrEx=function(e,s,i){return i?"d"==i?i=y(t.Date):"D"==i?i=D(t.Date):"f"==i?i=y(t.DateTime):"F"==i&&(i=D(t.DateTime)):i=y(s),p(e,i)},e.numberToStr=function(t,s,i){if(s&&s.length>0){const i=s.charAt(0).toUpperCase();if("S"===i)return function(t,s){if(!w[s]){const t=s.split("|").filter((t=>t.length>0)).map((t=>t.split("=")));if(w[s]={},t.length>0)if(t[0].length>1)for(const e of t)w[s][Number.parseInt(e[1])]=e[0];else t.forEach(((t,e)=>{w[s][e]=t[0]}))}const i=w[s];if(void 0!==i[t]){const s=i[t];return e.getText(s)||s}return t.toString()}(t,s.slice(1));if(["D","F","C"].indexOf(i)>=0){const e=l();return t.toLocaleString(e,function(t){const e=c(),s=t[0].toUpperCase(),i=t.length>1?Number.parseInt(t.slice(1)):"D"==s?1:2;switch(s){case"D":return{style:"decimal",useGrouping:!1,minimumIntegerDigits:i};case"C":return{style:"currency",currency:e.currency,minimumFractionDigits:i};default:return{style:"decimal",minimumFractionDigits:i,maximumFractionDigits:i}}}(s))}return function(t,e){let s=t.toString(),i="",n=s.length-1;for(let t=e.length-1;t>=0;t--){const r=e.charAt(t);"#"===r||"0"===r?n>=0?(i+=s.charAt(n),n--):"0"===r&&(i+=0):i+=r}return i.split("").reverse().join("")}(Math.trunc(t),s)}const n=c();return i=i||n.decimalSeparator,t.toString().replace(".",i)},e.booleanToStr=function(t,s){if(s&&s.length>0){if("S"===s.charAt(0).toUpperCase()){const i=s.slice(1).split("|");if(i.length>1){const s=i[t?1:0];return e.getText(s)||s}}}return`${t}`};const w={}}(a||(a={}));class p{constructor(t){this.isEditable=!0,this.name="",this.caption="",this.description="",this.parent=t,this.attributes=new Array,this.subEntities=new Array}loadFromData(t,e){if(e){if(this.id=e.id,this.name=e.name,this.captionPlural=e.namePlur,this.caption=e.name,this.description=e.desc,void 0!==e.ied&&(this.isEditable=e.ied),this.subEntities=new Array,e.ents)for(let s=0;s<e.ents.length;s++){let i=t.createEntity(this);i.loadFromData(t,e.ents[s]),this.subEntities.push(i)}if(this.attributes=new Array,e.attrs)for(let s=0;s<e.attrs.length;s++){let i=t.createEntityAttr(this);i.loadFromData(t,e.attrs[s]),this.attributes.push(i)}}}scan(t,e){let s={stop:!1},i=n=>{if(e&&e(n,s),n.attributes){let e=n.attributes.length;for(let i=0;i<e&&!s.stop;i++){let e=n.attributes[i];if(t&&t(e,s),s.stop)return}}if(n.subEntities){let t=n.subEntities.length;for(let e=0;e<t&&!s.stop;e++)i(n.subEntities[e])}};i(this)}getFirstPrimaryAttr(){return this.getPrimaryAttrs()[0]}getPrimaryAttrs(){return this.attributes.filter((t=>t.isPrimaryKey))}}class y{constructor(s){this.id="",this.caption="{Unrecognized attribute}",this.dataType=t.String,this.size=0,this.isPrimaryKey=!1,this.isForeignKey=!1,this.isNullable=!0,this.showOnView=!0,this.isEditable=!0,this.showOnCreate=!0,this.showOnEdit=!0,this.showInLookup=!1,this.lookupAttr="",this.expr="",this.entity=s,this.kind=e.Data}loadFromData(t,e){if(e){this.id=e.id,this.description=e.desc,this.caption=e.cptn,this.dataType=e.dtype,this.isPrimaryKey=e.ipk,this.isForeignKey=e.ifk,this.size=e.size,this.lookupAttr=e.lattr,this.lookupEntity=e.lent,this.dataAttr=e.dattr,this.lookupDataAttr=e.ldattr;const s=o.getDateDataTypes().indexOf(this.dataType);this.defaultValue=e.defVal&&s?new Date(e.defVal):e.defVal,this.isNullable=o.getIfDefined(e.nul,this.isNullable),this.isEditable=o.getIfDefined(e.ied,this.isEditable),this.showOnView=o.getIfDefined(e.ivis||e.sov,this.showOnView),this.showOnCreate=o.getIfDefined(e.soc,this.showOnCreate),this.showOnEdit=o.getIfDefined(e.soe,this.showOnEdit),this.showInLookup=o.getIfDefined(e.sil,this.showInLookup),this.kind=e.kind,this.displayFormat=e.dfmt,e.udata&&(this.userData=e.udata),e.edtr&&(this.defaultEditor=t.getEditorById(e.edtr)||t.createValueEditor())}}}class D{constructor(){this.id="",this.tag=s.Unknown,this.resType=t.Unknown,this.defValue=""}loadFromData(t){t&&(this.id=t.id,this.tag=t.tag,this.defValue=t.defval,this.resType=t.rtype,this.accept=t.accept,this.multiline=t.multiline,t.subType&&(this.resType=t.subType),t.name&&(this.name=t.name),t.values&&(this.values=t.values))}getValueText(t){let e="";if(!this.values)return e;if(Array.isArray(t))for(let s of this.values)t.indexOf(s.id)>=0&&(e+=s.text+",");else for(let s of this.values)s.id===t&&(e+=s.text+",");return e&&(e=e.substring(0,e.length-1)),e}}class w{constructor(){this.mainEntity=null,this.id="__none",this.name="Empty model",this.rootEntity=this.createEntity(),this.displayFormats=new Map}getMainEntity(){return this.mainEntity}createEntity(t){return new p(t)}createEntityAttr(t){return new y(t)}createValueEditor(){return new D}loadFromJSON(t){let e=JSON.parse(t);this.loadFromData(e)}loadFromData(e){if(this.id=e.id,this.name=e.name,this.version=e.vers,this.editors=new Array,e.editors)for(let t=0;t<e.editors.length;t++){let s=this.createValueEditor();s.loadFromData(e.editors[t]),this.editors.push(s)}if(this.rootEntity.loadFromData(this,e.entroot),this.displayFormats=new Map,e.displayFormats)for(const s in e.displayFormats){const i=t[s],n=e.displayFormats[s]||new Array;this.displayFormats.set(i,n)}}getDisplayFormats(){return this.displayFormats}getDisplayFormatsForType(t){return this.displayFormats.has(t)?this.displayFormats.get(t):[]}getDefaultFormat(t){return this.displayFormats.has(t)?this.displayFormats.get(t).filter((t=>t.isdef))[0]:null}setData(t){"string"==typeof t?this.loadFromJSON(t):this.loadFromData(t)}isEmpty(){return 0===this.rootEntity.subEntities.length&&0===this.rootEntity.attributes.length}getId(){return this.id}getName(){return this.name}getRootEntity(){return this.rootEntity}getEditorById(t){for(let e of this.editors)if(e.id===t)return e;return null}getAttributeById(t){let e=this.getEntityAttrById(this.getRootEntity(),t);return e||null}checkAttrProperty(t,e){let s=this.getAttributeById(t);if(s){if(void 0===s[e])throw"No such property: "+e;return!!s[e]||!!s.lookupAttr&&(t=s.lookupAttr,s=this.getAttributeById(t),s&&s[e])}return!1}getEntityAttrById(t,e){let s,i;if(t.attributes){let i=t.attributes.length;for(s=0;s<i;s++)if(t.attributes[s].id==e)return t.attributes[s]}if(t.subEntities){let n=t.subEntities.length;for(s=0;s<n;s++)if(i=this.getEntityAttrById(t.subEntities[s],e),i)return i}return null}listByEntityWithFilter(t,e){let s,i=new Array,n=null;if(t.subEntities){let r=t.subEntities.length;for(let h=0;h<r;h++)if(n=t.subEntities[h],!e||e(n,null)){s=a.getText("Entities",n.name),s||(s=n.caption);let t=o.assign(this.createEntity(),{id:n.name,text:s,items:[],isEntity:!0});t.items=this.listByEntityWithFilter(n,e),t.items.length>0&&i.push(t)}}let r=null;if(t.attributes){let n=t.attributes.length;for(let h=0;h<n;h++)if(r=t.attributes[h],!e||e(t,r)){s=a.getText("Attributes",r.id),s||(s=r.caption);let t=o.assign(this.createEntity(),{id:r.id,text:s,dataType:r.dataType});i.push(t)}}return i}listByEntity(t,e,s){e=e||{};let i,n=[],r=[],h=null;if(t.subEntities){let r=t.subEntities.length;for(let l=0;l<r;l++)if(h=t.subEntities[l],!s||s(h,null)){i=a.getText("Entities",h.name)||h.caption;let t=o.assign(this.createEntity(),{id:h.name,text:i,items:[],isEntity:!0,description:h.description}),r=o.assign({},e);r.includeRootData=!1,t.items=this.listByEntity(h,r,s),t.items.length>0&&n.push(t)}}let l=null;if(t.attributes){let e=t.attributes.length;for(let n=0;n<e;n++)l=t.attributes[n],s&&!s(t,l)||(i=a.getText("Attributes",l.id)||l.caption,r.push(o.assign(this.createEntityAttr(t),{id:l.id,text:i,dataType:l.dataType,lookupAttr:l.lookupAttr,description:l.description})))}let u,c=(t,e)=>t.text.toLowerCase()==e.text.toLowerCase()?0:t.text.toLowerCase()>e.text.toLowerCase()?1:-1;return e.sortEntities&&(n.sort(c),r.sort(c)),u=e.attrPlacement&&0!=e.attrPlacement?r.concat(n):n.concat(r),2==e.attrPlacement&&u.sort(c),e.includeRootData?(i=a.getText("Entities",t.name),i||(i=t.caption),{id:t.name,text:i,items:u}):u}clear(){this.rootEntity=this.createEntity(),this.editors=[],this.version=""}addDefaultValueEditors(){let e;e=this.addOrUpdateValueEditor("_DTE",s.Edit,t.String),e.defValue="",this.addOrUpdateValueEditor("_DPDE",s.DateTime,t.DateTime),this.addOrUpdateValueEditor("_DPTE",s.DateTime,t.DateTime)}addOrUpdateValueEditor(t,e,s){let i=o.findItemById(this.editors,t);return i||(i=this.createValueEditor(),i.id=t,this.editors.push(i)),i.tag=e,i.resType=s,i}getEntitiesTree(t,e){return this.listByEntity(this.getRootEntity(),t,e)}getEntitiesTreeWithFilter(t){return this.listByEntityWithFilter(this.getRootEntity(),t)}getFullEntityPathByAttr(t,e){return e=e||" ",this.getEntityPathByAttr(this.getRootEntity(),t,e,!0)}getEntityPathByAttr(t,e,s,i){if(!t)return"";s=s||" ";let n="";if(t.caption&&!i){let e=a.getText("Entities",t.caption);n=e||t.caption}if(t.attributes){let s=t.attributes.length;for(let i=0;i<s;i++)if(t.attributes[i].id==e)return n}if(t.subEntities){let i=t.subEntities.length;for(let r=0;r<i;r++){let i=t.subEntities[r],o=this.getEntityPathByAttr(i,e,s,!1);if(""!==o)return""!==n&&(o=n+s+o),o}}return""}getAttributeText(t,e){let s=a.getText("Attributes",t.id);if(s||(s=t.caption),!e)return s;let i="",n=this.getFullEntityPathByAttr(t.id," ");return n?(i=e.replace(new RegExp("{attr}","g"),s),i=i.replace(new RegExp("{entity}","g"),n)):i=s,i.trim()}runThroughEntities(t,e){this.getRootEntity().scan(t,e)}getFirstAttributeByFilter(t){let e=null;return this.runThroughEntities((function(s,i){t(s)&&(i.stop=!0,e=s)}),null),e}}class T{constructor(t){this.colStore=t,this.aggregates=[],this.groups=[],this.useGrandTotals=!1,this.useRecordCount=!1,this._caseSensitiveGroups=!1,this.COUNT_FIELD_NAME="GRPRECCNT"}get caseSensitiveGroups(){return this._caseSensitiveGroups}set caseSensitiveGroups(t){this._caseSensitiveGroups=t,this.updateCompareProc()}updateCompareProc(){this.compareValues=this._caseSensitiveGroups?this.strictCompare:this.caseInsensitiveCompare}addGroup(t){const e=t.columns||this.colStore.getColumnIds(t.from,t.to);if(!this.colStore.validateColumns(e))throw"Invalid columns: "+e;if(this.hasColumnsInUse(e))throw"Can't add same columns to different groups/aggregates";return this.groups.push(Object.assign({columns:e},t)),this}addAggregateColumn(t,e){const s="string"==typeof t?t:this.colStore.getColumnIds(t,t)[0];if(this.hasColumnsInUse([s])||!this.colStore.validateAggregate(s,e))throw"Invalid aggregation function for the column: "+s;return this.aggregates.push({colId:s,funcId:e}),this}addGrandTotals(){return this.useGrandTotals=!0,this}addCounts(){return this.useRecordCount=!0,this}getGroups(){let t=[];return this.groups.map((e=>(t=t.concat(e.columns),Object.assign(Object.assign({},e),{columns:Array.from(t),aggregates:Array.from(this.aggregates)}))))}getInternalGroups(){return this.groups}lastGroup(){const t=this.getGroups();return t[t.length-1]}getAggregates(){return this.aggregates}hasAggregates(){return this.aggregates.length>0}hasGroups(){return this.groups.length>0}hasGrandTotals(){return this.useGrandTotals}hasRecordCount(){return this.useRecordCount}isEmpty(){return!(this.hasAggregates()||this.hasGroups()||this.hasAggregates()||this.hasRecordCount())}drop(){console.warn('"drop()" method is obsolete. Use "clear()" instead'),this.clear()}clear(){return this.groups=[],this.aggregates=[],this.useGrandTotals=!1,this.useRecordCount=!1,this.caseSensitiveGroups=!1,this}hasColumnsInUse(t){for(const e of this.groups){if(e.columns.filter((e=>t.indexOf(e)>=0)).length>0)return!0}for(const e of this.aggregates)if(t.indexOf(e.colId)>=0)return!0;return!1}needAggrCalculation(){return(this.hasAggregates()||this.hasRecordCount())&&(this.hasGrandTotals()||this.hasGroups())}saveToData(){return{groups:Array.from(this.groups),ugt:this.useGrandTotals,urc:this.useRecordCount,csg:this.caseSensitiveGroups,aggregates:Array.from(this.aggregates)}}loadFromData(t){t&&(void 0!==t.ugt&&(this.useGrandTotals=t.ugt),void 0!==t.urc&&(this.useRecordCount=t.urc),void 0!==t.csg&&(this.caseSensitiveGroups=t.csg),t.groups&&(this.groups=Array.from(t.groups)),t.aggregates&&(this.aggregates=Array.from(t.aggregates)))}buildGroupKey(t,e){const s=!this.caseSensitiveGroups;let i={};if(t)for(const n of t.columns){let t=e.getValue(n);s&&"string"==typeof t&&(t=t.toLowerCase()),i[n]=t}return i}strictCompare(t,e){return t instanceof Date?t.getTime()===e.getTime():t===e}caseInsensitiveCompare(t,e){if(t instanceof Date)return t.getTime()===e.getTime();return("string"==typeof t?t.toLowerCase():t)===("string"==typeof e?e.toLowerCase():e)}}!function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Center=2]="Center",t[t.Right=3]="Right"}(h||(h={}));class x{constructor(e){if(!e)throw Error("Options are required");if(!e.id)throw Error("Field Id is required");if(!e.label)throw Error("Label is required");this.id=e.id,this.type=o.getIfDefined(e.type,t.String),this.label=e.label,this.originAttrId=e.originAttrId,this.isAggr=e.isAggr||!1,this.displayFormat=e.dfmt,this.groupFooterColumnTemplate=e.gfct,this.style=e.style||{},this.description=e.description,this.calculatedWidth=0}}class E{constructor(){this.items=[],this.mapper={},this._dateColumnIdx=[]}get count(){return this.items.length}add(e){let s;s=e instanceof x?e:new x(e);const i=this.items.length;return this.items.push(s),this.mapper[s.id]=i,[t.Date,t.DateTime,t.Time].indexOf(s.type)>=0&&this._dateColumnIdx.push(i),i}updateDateColumnIdx(){this._dateColumnIdx=this.getItems().filter((e=>[t.Date,t.DateTime,t.Time].indexOf(e.type)>=0)).map(((t,e)=>e))}put(t,e){t>=0&&t<this.count&&(this.items[t]=e,this.updateDateColumnIdx())}move(t,e){let s=this.items.indexOf(t);s>=0&&s!=e&&(o.moveArrayItem(this.items,s,e),this.updateDateColumnIdx())}get(t){return t>=0&&t<this.count?this.items[t]:null}getIndex(t){return this.mapper[t]}getItems(){return this.items}getDateColumnIndexes(){return this._dateColumnIdx}removeAt(t){const e=this.get(t);this.items.splice(t,1);const s=this._dateColumnIdx.indexOf(t);s>=0&&this._dateColumnIdx.splice(s,1),delete this.mapper[e.id]}clear(){this.items=[],this._dateColumnIdx=[],this.mapper={}}}class b{constructor(t,e){this.columns=t,this.values=e}toArray(){return Array.from(this.values)}size(){return this.values.length}getValue(t){let e;if("string"==typeof t){if(e=this.columns.getIndex(t),void 0===e)throw new RangeError(`No column with id '${t}'`)}else e=t;if(e>=this.values.length)throw new RangeError("Out of range: "+e);return this.values[e]}setValue(t,e){let s;if("string"==typeof t){if(s=this.columns.getIndex(t),void 0===s)throw new RangeError(`No column with id '${t}'`)}else s=t;if(s>=this.values.length)throw new RangeError("Out of range: "+s);this.values[s]=e}}class C{constructor(t){if(this._chunkSize=1e3,this._elasticChunks=!1,this.cachedRows=[],this.total=0,this.loader=null,this.needTotal=!0,this.isInMemory=!1,t=t||{},this._chunkSize=t.chunkSize||this._chunkSize,this._elasticChunks=t.elasticChunks||this._elasticChunks,this.loader=t.loader,void 0!==t.inMemory&&(this.isInMemory=t.inMemory),this.isInMemory&&(this.needTotal=!1),this._columns=new E,this.onUpdate=t.onUpdate,t.columns)for(const e of t.columns)this._columns.add(e);if(t.rows)for(const e of t.rows){const t=this.createRow(e);this.addRow(t)}this.needTotal=!this._elasticChunks}get columns(){return this._columns}get chunkSize(){return this._chunkSize}set chunkSize(t){this._chunkSize=t,this.total=0,this.needTotal=!this.elasticChunks,this.cachedRows=[]}get elasticChunks(){return this._elasticChunks}set elasticChunks(t){this._elasticChunks=t,this.total=0,this.needTotal=!this.elasticChunks,this.cachedRows=[]}getRows(t){let e=0,s=this._chunkSize;t&&("page"in t?(e=t.pageSize*(t.page-1),s=t.pageSize):(e=t.offset,s=t.limit));let i=e+s;if(!this.needTotal&&!this.elasticChunks){if(e>=this.total)return Promise.resolve([]);i>this.total&&(i=this.total)}if(this.isInMemory&&i>this.cachedRows.length&&(i=this.cachedRows.length),i<=this.cachedRows.length)return Promise.resolve(this.cachedRows.slice(e,i));if(!this.loader)throw`Loader is not defined. Can't get the rows from ${e} to ${i}`;const n=this.needTotal;this.needTotal&&(this.needTotal=!1);let r=this.cachedRows.length,o=i-r;o<this._chunkSize&&(o=this._chunkSize);return this.loader.loadChunk({offset:r,limit:o,needTotal:n}).then((t=>{if(n&&(this.total=t.total),Array.prototype.push.apply(this.cachedRows,t.table.getCachedRows()),i>this.cachedRows.length&&(i=this.cachedRows.length),this.elasticChunks){t.table.getCachedCount()<o&&(this.total=this.cachedRows.length)}return this.fireUpdated(),this.cachedRows.slice(e,i)}))}getRow(t){return this.getRows({offset:t,limit:1}).then((t=>t.length>0?t[0]:null))}getTotal(){return this.total}setTotal(t){this.total=t,this.needTotal=!1}getCachedCount(){return this.cachedRows.length}clear(){this.columns.clear(),this.cachedRows=[],this.total=0,this.needTotal=!this._elasticChunks,this.fireUpdated()}createRow(t){const e=this._columns.getDateColumnIndexes(),s=new Array(this._columns.count),i=t instanceof b?e=>t.getValue(e):e=>t[e];return t&&this.columns.getItems().forEach((t=>{const n=i(t.id),r=this.columns.getIndex(t.id);s[r]=e.indexOf(r)>=0?this.mapDate(n,t.type):n})),new b(this._columns,s)}mapDate(e,s){if(e){let i=new Date(e);return isNaN(i.getTime())&&s==t.Time&&(i=o.strToTime(e)),i}return null}addRow(t){let e;if(Array.isArray(t)){let s=t;const i=this._columns.getDateColumnIndexes();if(i.length>0)for(const t of i)s[t]&&(s[t]=this.mapDate(s[t],this._columns.get(t).type));e=new b(this._columns,s)}else e=this.createRow(t);this.cachedRows.push(e);const s=this.getCachedCount();return s>this.total&&(this.total=s),e}getCachedRows(){return this.cachedRows}totalIsKnown(){if(this.elasticChunks){return this.getCachedCount()===this.total}return!this.needTotal}fireUpdated(){this.onUpdate&&this.onUpdate(this)}}class I{static newGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}}class A{constructor(t){this.silentMode=0,this.events=new Array,this.source=t}subscribe(t,e){let s=this.getEventRecByType(t);const i={id:I.newGuid(),callback:e};return s?s.eventCallbacks.push(i):(s={type:t,eventCallbacks:new Array(i)},this.events.push(s)),i.id}unsubscribe(t,e){let s=this.getEventRecByType(t);if(s){let t=-1;for(t=0;t<s.eventCallbacks.length&&s.eventCallbacks[t].id!==e;t++);t>=0&&s.eventCallbacks.splice(t,1)}}fire(t,e,s=0,i=!1){if(this.silentMode&&!i)return;let n=this.getEventRecByType(t);if(n){const i={type:t,source:this.source,data:e};let r=()=>{for(let t of n.eventCallbacks)t.callback(i)};s>0?setTimeout(r,s):r()}}enterSilentMode(){this.silentMode++}exitSilentMode(){this.silentMode&&this.silentMode--}isSilent(){return this.silentMode>0}getEventRecByType(t){for(let e of this.events)if(e.type==t)return e;return null}}function v(t,e){return t.repeat(e)}function F(t){return t.split("").reverse().join("")}function S(t,e){return t&&t.lastIndexOf(e)==t.length-e.length}function M(t,e){let s=t;return null!=s&&s.length>0?("/"!=s.charAt(s.length-1)&&(s+="/"),s+=e):s=e,s}!function(t){t.renderLiquidTemplate=function(t,e){let s=t;if(e)for(let t in e){const i=new RegExp("{{"+t+"}}","g");s=s.replace(i,e[t])}return s}}(l||(l={})),a.resetLocales(),"function"!=typeof Object.values&&(Object.values=function(t){return Object.keys(t).map((e=>t[e]))}),"function"!=typeof Math.trunc&&(Math.trunc=function(t){return isNaN(t)?NaN:t>0?Math.floor(t):Math.ceil(t)});
//# sourceMappingURL=easydata.core.es.js.map


/***/ }),

/***/ "./node_modules/@easydata/ui/dist/easydata.ui.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/@easydata/ui/dist/easydata.ui.es.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoResizeColumns: () => (/* binding */ Y),
/* harmony export */   Calendar: () => (/* binding */ Z),
/* harmony export */   CellRendererType: () => (/* binding */ U),
/* harmony export */   DFMT_REGEX: () => (/* binding */ V),
/* harmony export */   DateTimePicker: () => (/* binding */ tt),
/* harmony export */   DefaultCalendar: () => (/* binding */ et),
/* harmony export */   DefaultDateTimePicker: () => (/* binding */ nt),
/* harmony export */   DefaultDialog: () => (/* binding */ lt),
/* harmony export */   DefaultDialogService: () => (/* binding */ rt),
/* harmony export */   DefaultDialogSet: () => (/* binding */ ht),
/* harmony export */   DefaultProgressDialog: () => (/* binding */ dt),
/* harmony export */   DefaultTimePicker: () => (/* binding */ st),
/* harmony export */   DialogFooterAlignment: () => (/* binding */ at),
/* harmony export */   DomElementBuilder: () => (/* binding */ R),
/* harmony export */   DomInputElementBuilder: () => (/* binding */ P),
/* harmony export */   DomSelectElementBuilder: () => (/* binding */ A),
/* harmony export */   DomTextAreaElementBuilder: () => (/* binding */ O),
/* harmony export */   DragManager: () => (/* binding */ F),
/* harmony export */   DropEffect: () => (/* binding */ N),
/* harmony export */   EasyGrid: () => (/* binding */ X),
/* harmony export */   EqDragEvent: () => (/* binding */ $),
/* harmony export */   GridCellRendererStore: () => (/* binding */ J),
/* harmony export */   GridColumn: () => (/* binding */ W),
/* harmony export */   GridColumnAlign: () => (/* binding */ B),
/* harmony export */   GridColumnList: () => (/* binding */ G),
/* harmony export */   JUMP_TO: () => (/* binding */ ut),
/* harmony export */   PRE_SELECT: () => (/* binding */ ct),
/* harmony export */   TimePicker: () => (/* binding */ it),
/* harmony export */   TimeSpanPicker: () => (/* binding */ gt),
/* harmony export */   addCssClass: () => (/* binding */ g),
/* harmony export */   addElement: () => (/* binding */ u),
/* harmony export */   browserUtils: () => (/* binding */ r),
/* harmony export */   createBrowserEvent: () => (/* binding */ y),
/* harmony export */   dialogs: () => (/* binding */ mt),
/* harmony export */   domel: () => (/* binding */ L),
/* harmony export */   eqCssMobile: () => (/* binding */ M),
/* harmony export */   eqCssPrefix: () => (/* binding */ S),
/* harmony export */   eqDragManager: () => (/* binding */ _),
/* harmony export */   getDocSize: () => (/* binding */ w),
/* harmony export */   getElementAbsolutePos: () => (/* binding */ T),
/* harmony export */   getScrollPos: () => (/* binding */ C),
/* harmony export */   getViewportSize: () => (/* binding */ v),
/* harmony export */   getWinSize: () => (/* binding */ b),
/* harmony export */   hideElement: () => (/* binding */ p),
/* harmony export */   isVisible: () => (/* binding */ D),
/* harmony export */   mask: () => (/* binding */ I),
/* harmony export */   showElement: () => (/* binding */ m),
/* harmony export */   showTimeSpanPicker: () => (/* binding */ pt),
/* harmony export */   slideDown: () => (/* binding */ E),
/* harmony export */   slideUp: () => (/* binding */ x),
/* harmony export */   toggleVisibility: () => (/* binding */ f),
/* harmony export */   wrapInner: () => (/* binding */ c)
/* harmony export */ });
/* provided dependency */ var Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js")["Promise"];
/*!
 * EasyData.JS UI
 * Copyright 2023 Korzh.com
 * Licensed under MIT
 !*/
/*!
 * EasyData.JS Core
 * Copyright 2023 Korzh.com
 * Licensed under MIT
 !*/
var t,e,i,s,n,a,o,r;!function(t){t[t.Unknown=0]="Unknown",t[t.String=1]="String",t[t.Byte=2]="Byte",t[t.Word=3]="Word",t[t.Int32=4]="Int32",t[t.Int64=5]="Int64",t[t.Bool=6]="Bool",t[t.Float=7]="Float",t[t.Currency=8]="Currency",t[t.BCD=9]="BCD",t[t.Date=10]="Date",t[t.Time=11]="Time",t[t.DateTime=12]="DateTime",t[t.Autoinc=13]="Autoinc",t[t.Memo=14]="Memo",t[t.Blob=15]="Blob",t[t.FixedChar=16]="FixedChar",t[t.Guid=17]="Guid",t[t.Geometry=18]="Geometry",t[t.Geography=19]="Geography"}(t||(t={})),function(t){t[t.Data=0]="Data",t[t.Virtual=1]="Virtual",t[t.Lookup=2]="Lookup"}(e||(e={})),function(t){t.Trace="TRACE",t.Options="OPTIONS",t.Get="GET",t.Put="PUT",t.Post="POST",t.Delete="DELETE"}(i||(i={})),function(e){e.getAllDataTypes=function(){return Object.values(t).filter((t=>"number"==typeof t))},e.getDateDataTypes=function(){return[t.Time,t.Date,t.DateTime]},e.getStringDataTypes=function(){return[t.String,t.Memo,t.FixedChar]};const i=[t.Byte,t.Word,t.Int32,t.Int64,t.Float,t.Currency,t.Autoinc];e.getNumericDataTypes=function(){return i};const s=[t.Byte,t.Word,t.Int32,t.Int64,t.Autoinc];function n(t,e,i){e||(e={});for(let s of i)if(s)for(let i in s)if(s.hasOwnProperty(i)){let o=s[i];null!==o&&"object"==typeof o?t.has(o)?e[i]=t.get(o):Array.isArray(o)?(e[i]=a(o),t.set(o,e[i])):(void 0!==e[i]&&null!=e[i]||(e[i]=Object.create(Object.getPrototypeOf(o))),t.set(o,e[i]),n(t,e[i],[o])):e[i]=o}return e}function a(t){let e=[];for(let i of t)e.push(i);return e}e.assign=function(t,...e){for(let i=0;i<e.length;i++){let s=e[i];if(s)for(let e in s)s.hasOwnProperty(e)&&(t[e]=s[e])}return t},e.assignDeep=function(t,...e){return n(new WeakMap,t,e)},e.getIfDefined=function(t,e){return void 0!==t?t:e},e.IsDefinedAndNotNull=function(t){return null!=t},e.copyArrayTo=function(t,e){const i=t.length,s=e.length;for(let n=0;n<i&&n<s;n++)e[n]=t[n]},e.createArrayFrom=a,e.findItemById=function(t,e){for(var i=t.length,s=0;s<i;s++)if(t[s].id===e)return t[s];return null},e.findItemIndexById=function(t,e){for(var i=t.length,s=0;s<i;s++)if(t[s].id===e)return s;return-1},e.indexOfArrayItem=function(t,e){if(t.indexOf)return t.indexOf(e);{let i=t.length;for(let s=0;s<i;s++)if(e==t[s])return s;return-1}},e.moveArrayItem=function(t,e,i){if(e>=t.length)throw"Index out of bounds: "+e;i>=t.length&&(i=t.length-1);let s=t.splice(e,1)[0];t.splice(i,0,s)},e.removeArrayItem=function(t,e){let i=t.indexOf(e);if(-1!=i)return t.splice(i,1)[0]},e.insertArrayItem=function(t,e,i){t.splice(e,0,i)},e.fillArray=function(t,e,i=0,s){let n=t.length>>>0;var a=i>>0,o=a<0?Math.max(n+a,0):Math.min(a,n),r=void 0===s?n:s>>0;let l=r<0?Math.max(n+r,0):Math.min(r,n);for(;o<l;)t[o]=e,o++;return t},e.shiftToFitWindow=function(t,e){let i=document.getElementsByTagName("body")[0],s=window.innerWidth||document.documentElement.clientWidth||i.clientWidth;var n=t+e;let a=0;return n>s&&(a=s-n-10,t+a<0&&(a=10-t)),a},e.isObject=function(t){return null!==t&&("function"==typeof t||"object"==typeof t)},e.isNumericType=function(t){return i.indexOf(t)>=0},e.isIntType=function(t){return s.indexOf(t)>=0},e.isNumeric=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},e.areCompatibleDataTypes=function(e,i){return void 0===e||void 0===i||e==t.Unknown||i==t.Unknown||e==i||e==t.Date&&i==t.DateTime||e==t.DateTime&&i==t.Date},e.isPropSet=function(t,e){return t[e]||t[e.toLowerCase()]||t[e.toUpperCase()]};const o="0123456789abcdefghijklmnopqrstuvwxyz";function r(t,e){const i=t.length;if(i>e){let s=i/e,n="";n+=t[0];let a,o=s;for(let e=1;e<i;e++)a=t[e],e+1>o&&(n+=a,o+=s);return n}return t}function l(t,e){return Math.floor(Math.random()*(e-t))+t}function d(t){const e=parseInt(t);if(isNaN(e))throw`"${t}" is not a valid number`;return e}e.generateId=function(t){t||(t="easy");let e=t.length>4?function(t,e){let i=t.split("-"),s=1,n=4;i.length<4&&(s=4/i.length,n=i.length);let a="";for(let t=0;t<n;t++)a+=r(i[t],s);return a}(t):t;e&&e.length>0&&(e+="-");var i=o[l(0,36)]+o[l(0,36)]+o[l(0,36)],s=l(0,1e4);return e+i+function(t,e=36){var i="",s=t;do{i=o[s%e]+i,s=Math.floor(s/=e)}while(s>0);return i}(621355968e9+1e4*(new Date).getTime()-0x8d60e562e627800-s)},e.strToDateTime=function(t,e){if(!t||0==t.length)return new Date;const i=t.replace(/[^a-zA-Z0-9_]/g,"-"),s=e.replace(/[^a-zA-Z0-9_]/g,"-").split("-"),n=i.split("-"),a=s.indexOf("MM"),o=s.indexOf("dd"),r=s.indexOf("yyyy"),l=s.indexOf("HH"),h=s.indexOf("mm"),c=s.indexOf("ss"),u=new Date;try{const t=r>-1&&r<n.length?d(n[r]):u.getFullYear(),e=a>-1&&a<n.length?d(n[a])-1:u.getMonth()-1;if(e>11)throw"";const i=o>-1&&o<n.length?d(n[o]):u.getDate();if(i>function(t,e){return new Date(e,t+1,0).getDate()}(e,t))throw"";const s=l>-1&&l<n.length?d(n[l]):0;if(s>23)throw"";const g=h>-1&&h<n.length?d(n[h]):0;if(g>59)throw"";const p=c>-1&&c<n.length?d(n[c]):0;if(p>59)throw"";return new Date(t,e,i,s,g,p)}catch(e){throw`${t} is not a valid date.`}},e.strToTime=function(t){const e=t.split(":");try{const t=e.length>0?d(e[0]):0;if(t>23)throw"";const i=e.length>1?d(e[1]):0;if(i>59)throw"";const s=e.length>1?d(e[1]):0;if(s>59)throw"";return new Date(0,0,0,t,i,s)}catch(e){throw`${t} is not a valid time.`}}}(s||(s={})),function(e){let i,n={shortDateFormat:"MM/dd/yyyy",longDateFormat:"dd MMM, yyyy",editDateFormat:"MM/dd/yyyy",shortTimeFormat:"HH:mm",editTimeFormat:"HH:mm",longTimeFormat:"HH:mm:ss",shortMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],shortWeekDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longWeekDayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalSeparator:".",currency:"USD"},a={localeId:"en-US",englishName:"English",displayName:"English",texts:{ButtonOK:"OK",ButtonCancel:"Cancel",Yes:"Yes",No:"No",True:"True",False:"False"},settings:n},o={"en-US":a};const r=[];function l(t){for(const e of r)e(t)}function d(){return i.localeId}function h(t){const e=o[t];e?s.assignDeep(i,e):(i.englishName=t,i.displayName=t,i.texts=s.assignDeep({},a.texts)),i.localeId=t}function c(){return i.settings}function u(t){i.settings||(i.settings=s.assignDeep({},n)),i.settings=s.assignDeep(i.settings,t)}function g(t,e){l(e);let n=i;t&&(e.localeId||(e.localeId=t),n=o[t],n||(n=s.assignDeep({},a),o[t]=n)),s.assignDeep(n,e)}e.addMapper=function(t){r.push(t)},e.getLocales=function(){let t=[];for(let e in o)t.push({locale:e,englishName:o[e].englishName,displayName:o[e].displayName});return t.sort(((t,e)=>t.englishName>e.englishName?1:t.englishName===e.englishName?0:-1))},e.getCurrentLocale=d,e.setLocale=function(t){console.warn("This method is deprecated. Use setCurrentLocale instead"),h(t)},e.setCurrentLocale=h,e.getText=function(...t){let e=i.texts,s="";if(t&&t.length){const i=t.length;for(let n=0;n<i&&(s=e[t[n]],"object"==typeof s);n++)e=s}return s},e.getLocaleSettings=c,e.getOneLocaleSetting=function(t){return i.settings[t]},e.getShortMonthName=function(t){const e=c();if(t>0&&t<13)return e.shortMonthNames[t-1];throw"Wrong month number: "+t},e.getLongMonthName=function(t){const e=c();if(t>0&&t<13)return e.longMonthNames[t-1];throw"Wrong month number: "+t},e.getShortWeekDayName=function(t){const e=c();if(t>0&&t<8)return e.shortWeekDayNames.length>=t?e.shortWeekDayNames[t-1]:t.toString();throw"Wrong month number: "+t},e.getLongWeekDayName=function(t){const e=c();if(t>0&&t<8)return e.longWeekDayNames.length>=t?e.longWeekDayNames[t-1]:t.toString();throw"Wrong month number: "+t},e.updateLocaleSettings=u,e.updateLocaleTexts=function(t){"object"==typeof t?(l({localeId:i.localeId,texts:t}),s.assignDeep(i.texts,t)):console.error("Wrong parameter type in updateLocaleTexts function call.The first parameter (localeId) is not necessary. Use updateLocaleTexts(texts) instead")},e.updateDefaultTexts=function(t){for(let e in o){let i=o[e];i.texts=s.assignDeep({},t,i.texts)}i.texts=s.assignDeep({},t,i.texts)},e.updateLocaleInfo=g,e.addLocale=function(t,e){g(t,e)},e.resetLocales=function(){i||(i=s.assignDeep({},a),function(t){const e=new Date(2020,5,7,19,34,56,88),s=e.toLocaleDateString(t,{year:"numeric",month:"numeric",day:"numeric"}),n=e.toLocaleTimeString(t,{hour:"numeric",minute:"numeric",second:"numeric"});let a=s.replace("07","dd").replace("7","d").replace("06","MM").replace("6","M").replace("2020","yyyy").replace("20","yy"),o=n.replace("19","HH").replace("07","hh").replace("7","h").replace("34","mm").replace("56","ss").replace("PM","tt");i.settings||(i.settings={}),u({shortDateFormat:a,shortTimeFormat:o})}("object"==typeof navigator?navigator.language:void 0))};const p=/\[([^\]]+)]|y{2,4}|M{1,4}|d{1,2}|H{1,2}|h{1,2}|m{2}|s{2}|t{2}/g;function m(t,i){const s=t.getFullYear().toString(),n=t.getMonth()+1,a=t.getDate(),o=t.getHours(),r=t.getMinutes(),l=t.getSeconds(),d=o%12||12,h=o>11,c={yyyy:s,yy:s.substring(s.length-2),MMMM:e.getLongMonthName(n),MMM:e.getShortMonthName(n),MM:n<10?"0"+n:n.toString(),M:n.toString(),dd:a<10?"0"+a:a.toString(),d:a.toString(),HH:o<10?"0"+o:o.toString(),H:o.toString(),hh:d<10?"0"+d:d.toString(),h:d.toString(),tt:h?"PM":"AM",mm:r<10?"0"+r:r.toString(),ss:l<10?"0"+l:l.toString()};return i.replace(p,((t,e)=>e||c[t]))}function f(e){const i=c();let s;switch(e){case t.Date:s=i.shortDateFormat;break;case t.Time:s=i.shortTimeFormat;break;default:s=i.shortDateFormat+" "+i.shortTimeFormat}return s}function D(e){const i=c();let s;switch(e){case t.Date:s=i.longDateFormat;break;case t.Time:s=i.longTimeFormat;break;default:s=i.longDateFormat+" "+i.longTimeFormat}return s}e.dateTimeToStr=m,e.dateTimeToStrEx=function(e,i,s){return s?"d"==s?s=f(t.Date):"D"==s?s=D(t.Date):"f"==s?s=f(t.DateTime):"F"==s&&(s=D(t.DateTime)):s=f(i),m(e,s)},e.numberToStr=function(t,i,s){if(i&&i.length>0){const s=i.charAt(0).toUpperCase();if("S"===s)return function(t,i){if(!y[i]){const t=i.split("|").filter((t=>t.length>0)).map((t=>t.split("=")));if(y[i]={},t.length>0)if(t[0].length>1)for(const e of t)y[i][Number.parseInt(e[1])]=e[0];else t.forEach(((t,e)=>{y[i][e]=t[0]}))}const s=y[i];if(void 0!==s[t]){const i=s[t];return e.getText(i)||i}return t.toString()}(t,i.slice(1));if(["D","F","C"].indexOf(s)>=0){const e=d();return t.toLocaleString(e,function(t){const e=c(),i=t[0].toUpperCase(),s=t.length>1?Number.parseInt(t.slice(1)):"D"==i?1:2;switch(i){case"D":return{style:"decimal",useGrouping:!1,minimumIntegerDigits:s};case"C":return{style:"currency",currency:e.currency,minimumFractionDigits:s};default:return{style:"decimal",minimumFractionDigits:s,maximumFractionDigits:s}}}(i))}return function(t,e){let i=t.toString(),s="",n=i.length-1;for(let t=e.length-1;t>=0;t--){const a=e.charAt(t);"#"===a||"0"===a?n>=0?(s+=i.charAt(n),n--):"0"===a&&(s+=0):s+=a}return s.split("").reverse().join("")}(Math.trunc(t),i)}const n=c();return s=s||n.decimalSeparator,t.toString().replace(".",s)},e.booleanToStr=function(t,i){if(i&&i.length>0&&"S"===i.charAt(0).toUpperCase()){const s=i.slice(1).split("|");if(s.length>1){const i=s[t?1:0];return e.getText(i)||i}}return`${t}`};const y={}}(n||(n={})),function(t){t[t.None=0]="None",t[t.Left=1]="Left",t[t.Center=2]="Center",t[t.Right=3]="Right"}(a||(a={}));class l{constructor(t,e){this.columns=t,this.values=e}toArray(){return Array.from(this.values)}size(){return this.values.length}getValue(t){let e;if("string"==typeof t){if(e=this.columns.getIndex(t),void 0===e)throw new RangeError(`No column with id '${t}'`)}else e=t;if(e>=this.values.length)throw new RangeError("Out of range: "+e);return this.values[e]}setValue(t,e){let i;if("string"==typeof t){if(i=this.columns.getIndex(t),void 0===i)throw new RangeError(`No column with id '${t}'`)}else i=t;if(i>=this.values.length)throw new RangeError("Out of range: "+i);this.values[i]=e}}class d{static newGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}}class h{constructor(t){this.silentMode=0,this.events=new Array,this.source=t}subscribe(t,e){let i=this.getEventRecByType(t);const s={id:d.newGuid(),callback:e};return i?i.eventCallbacks.push(s):(i={type:t,eventCallbacks:new Array(s)},this.events.push(i)),s.id}unsubscribe(t,e){let i=this.getEventRecByType(t);if(i){let t=-1;for(t=0;t<i.eventCallbacks.length&&i.eventCallbacks[t].id!==e;t++);t>=0&&i.eventCallbacks.splice(t,1)}}fire(t,e,i=0,s=!1){if(this.silentMode&&!s)return;let n=this.getEventRecByType(t);if(n){const s={type:t,source:this.source,data:e};let a=()=>{for(let t of n.eventCallbacks)t.callback(s)};i>0?setTimeout(a,i):a()}}enterSilentMode(){this.silentMode++}exitSilentMode(){this.silentMode&&this.silentMode--}isSilent(){return this.silentMode>0}getEventRecByType(t){for(let e of this.events)if(e.type==t)return e;return null}}function c(t,e){for(t.appendChild(e);t.firstChild!==e;)e.appendChild(t.firstChild)}function u(t,e,i){let s=document.createElement(e),n=i||{};return n.cssClass&&(s.className=n.cssClass),t.appendChild(s),s}function g(t,e){t.className=t.className?t.className+" "+e:e}function p(t){t.style.display="none"}function m(t,e){e||(e=""),t.style.display=e}function f(t,e,i){i||(i={}),i.display||(i.display=""),i.duration||(i.duration=200),p(t),m(e,i.display),i.complete&&i.complete()}function D(t){return"none"!=t.style.display&&0!=t.offsetWidth&&0!=t.offsetHeight}function y(t){var e;return"function"==typeof Event?e=new Event(t):(e=document.createEvent("Event")).initEvent(t,!0,!0),e}function v(){return{width:Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),height:Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)}}function w(){if(r.IsIE())return b();return{width:Math.max(document.documentElement.clientWidth,document.body.clientWidth||0),height:Math.max(document.documentElement.clientHeight,document.body.clientHeight||0)}}function C(){const t=document.body,e=document.documentElement;return{top:window.pageYOffset||e.scrollTop||t.scrollTop,left:window.pageXOffset||e.scrollLeft||t.scrollLeft}}function T(t){let e={x:0,y:0};if(null!==t){const i=function(t){const e={top:0,right:0,bottom:0,left:0,width:0,height:0};let i;try{i=t.getBoundingClientRect()}catch(t){i=e}const s=document.body,n=document.documentElement,a=C(),o=a.top,r=a.left,l=n.clientTop||s.clientTop||0,d=n.clientLeft||s.clientLeft||0,h=i.top+o-l,c=i.left+r-d;return{top:Math.round(h),left:Math.round(c)}}(t);e={x:i.left,y:i.top}}return e}function b(){return{width:window.innerWidth,height:window.innerHeight}}function E(t,e,i){t.style.removeProperty("display");let s=window.getComputedStyle(t).display;"none"===s&&(s="block"),t.style.display=s;let n=t.offsetHeight;t.style.overflow="hidden",t.style.height="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px",t.style.marginTop="0px",t.style.marginBottom="0px",t.offsetHeight,t.style.boxSizing="border-box",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.height=n+"px",t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),window.setTimeout((()=>{t.style.removeProperty("height"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.style.removeProperty("box-sizing"),i&&i()}),e)}function x(t,e,i){t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=e+"ms",t.style.boxSizing="border-box",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.overflow="hidden",t.style.height="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px",t.style.marginTop="0px",t.style.marginBottom="0px",window.setTimeout((()=>{t.style.display="none",t.style.removeProperty("height"),t.style.removeProperty("padding-top"),t.style.removeProperty("padding-bottom"),t.style.removeProperty("margin-top"),t.style.removeProperty("margin-bottom"),t.style.removeProperty("overflow"),t.style.removeProperty("transition-duration"),t.style.removeProperty("transition-property"),t.style.removeProperty("box-sizing"),i&&i()}),e)}(o||(o={})).renderLiquidTemplate=function(t,e){let i=t;if(e)for(let t in e){const s=new RegExp("{{"+t+"}}","g");i=i.replace(s,e[t])}return i},n.resetLocales(),"function"!=typeof Object.values&&(Object.values=function(t){return Object.keys(t).map((e=>t[e]))}),"function"!=typeof Math.trunc&&(Math.trunc=function(t){return isNaN(t)?NaN:t>0?Math.floor(t):Math.ceil(t)}),function(t){let e=null,i=null;function s(){if(null===i){const t=navigator.userAgent;i=t.indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1}return i}t.IsIE=s,t.IsEdge=function(){const t=window.navigator.userAgent;return!s()&&t.includes("Edge/")},t.IsFirefox=function(){if(null===e){const t=navigator.userAgent;e=t.toLowerCase().indexOf("firefox")>-1}return e};let n,a,o=!1,r=()=>{const t=l();o=window.matchMedia("only screen and (max-width: 840px)").matches||window.matchMedia("only screen and (max-height: 420px)").matches;const e=l();e!==t&&a&&a(e)};function l(){return void 0!==n?n:o}r(),window.addEventListener("resize",(()=>r())),t.isMobileMode=l,t.setIsMobileMode=function(t){const e=l();n=t;const i=l();i!==e&&a&&a(i)},t.onMobileModeChanged=function(t){a=t},t.getMobileCssClass=function(){return l()?"k-mobile":null}}(r||(r={}));const S="eqjs",M="eqjs-mobile";function I(t,e){const i={9:"[0-9]",a:"[a-z]"},s=e.split(""),n=e=>{if("focus"===e.type&&""!==t.value)return;let n=[],a=t.selectionStart;s.forEach(((e,s)=>{if(i[e]){let a=new RegExp(i[e],"i").test(t.value.charAt(s));n.push(a?t.value.charAt(s):"_")}else n.push(e)})),t.value=n.join(""),t.selectionStart=t.selectionEnd=a};t.addEventListener("keydown",(e=>{if(8===e.keyCode||46===e.keyCode){e.preventDefault();let n=[],a=t.selectionStart;if(0==a)return;let o=a,r=!0;for(let e=s.length-1;e>=0;e--){const l=s[e];if(i[l]){let s=new RegExp(i[l],"i").test(t.value.charAt(e));s&&e!=a-1&&(r=!1),e===a-1&&o--,n.push(s&&e!=a-1?t.value.charAt(e):"_")}else e===o-1&&o--,a-1===e&&a--,n.push(l)}t.value=r?"":n.reverse().join(""),t.selectionStart=t.selectionEnd=o<0?0:o;const l=document.createEvent("Event");l.initEvent("input",!0,!0),t.dispatchEvent(l)}})),t.addEventListener("keypress",(e=>{const n=String.fromCharCode(e.charCode);if(n){e.preventDefault();let a=[],o=t.selectionStart,r=o;s.forEach(((e,s)=>{if(i[e]){const l=s!=o?t.value.charAt(s):n;let d=new RegExp(i[e],"i").test(l);a.push(d?l:"_"),d&&o===s&&r++}else a.push(e),r===s&&r++,o===s&&o++})),t.value=a.join(""),t.selectionStart=t.selectionEnd=r;const l=document.createEvent("Event");l.initEvent("input",!0,!0),t.dispatchEvent(l)}})),t.addEventListener("input",n),t.addEventListener("focus",n)}class R{constructor(t,e){this.element="string"==typeof t?document.createElement(t):t,e&&this.element.parentElement!==e&&e.appendChild(this.element)}addChild(t,e){const i=L(t,this.element);return e&&e(i),this}addChildElement(t){return t&&this.element.appendChild(t),this}attr(t,e){return this.element.setAttribute(t,e),this}id(t){return this.attr("id",t)}focus(){return this.element.focus(),this}title(t){return this.attr("title",t)}data(t,e=null){return null===e?(this.element.removeAttribute("data-"+t),this):this.attr("data-"+t,e)}show(){return this.removeStyle("display")}hide(t=!0){return t?this.setStyle("display","none"):this}visible(t=!0){return t?this.setStyle("visibility","visible"):this.setStyle("visibility","hidden")}isVisible(){return!!(this.element.offsetWidth||this.element.offsetHeight||this.element.getClientRects().length)}addClass(t,...e){if(t){const i=[...t.trim().split(" "),...e];for(let t=0;t<i.length;t++)this.element.classList.add(i[t])}return this}removeClass(t,...e){if(t){const i=[...t.trim().split(" "),...e];for(let t=0;t<i.length;t++)this.element.classList.remove(i[t])}return this}toggleClass(t,e=void 0){return t&&this.element.classList.toggle(t,e),this}on(t,e){const i=t.split(" ");for(let t=0;t<i.length;t++)this.element.addEventListener(i[t],e);return this}off(t,e){const i=t.split(" ");for(let t=0;t<i.length;t++)this.element.removeEventListener(i[t],e);return this}setStyle(t,e){return this.element.style.setProperty(t,e),this}removeStyle(t){return this.element.style.removeProperty(t),this}text(t){return this.element.innerText=t,this}html(t){return this.element.innerHTML=t,this}clear(){const t=this.element;this.element=document.createElement(this.element.tagName),t.replaceWith(this.element)}addText(t){const e=document.createTextNode(t);return this.element.appendChild(e),this}addHtml(t){return this.element.innerHTML+=t,this}toDOM(){return this.element}appendTo(t){return t&&t.appendChild(this.element),this}}class O extends R{constructor(t,e){super(t||"textarea",e)}name(t){return this.element.name=t,this}rows(t){return this.element.rows=t,this}cols(t){return this.element.cols=t,this}value(t){return this.element.value=t,this}}class P extends R{constructor(t,e){super(t||"input",e)}name(t){return this.element.name=t,this}type(t){return this.element.type=t,this}size(t){return this.element.size=t,this}value(t){return t instanceof Date?this.element.valueAsDate=t:"number"==typeof t?this.element.valueAsNumber=t:this.element.value=t,this}mask(t){return I(this.element,t),this}}class A extends R{constructor(t,e){super(t||"select",e)}addOption(t){const e=document.createElement("option");return"string"==typeof t?(e.value=t,e.innerHTML=t):(e.value=t.value,e.innerHTML=t.title||t.value,e.selected=t.selected||!1),this.element.appendChild(e),this}value(t){return this.element.value=t,this}}function L(t,e){return"div"===t||t instanceof HTMLDivElement||"span"===t||t instanceof HTMLSpanElement||"a"===t||t instanceof HTMLAnchorElement||"button"===t||t instanceof HTMLButtonElement||"img"===t||t instanceof HTMLImageElement?new R(t,e):"input"===t||t instanceof HTMLInputElement?new P(t instanceof HTMLInputElement?t:null,e):"textarea"===t||t instanceof HTMLTextAreaElement?new O(t instanceof HTMLTextAreaElement?t:null,e):"select"===t||t instanceof HTMLSelectElement?new A(t instanceof HTMLSelectElement?t:null,e):new R(t,e)}const k="undefined"!=typeof TouchEvent;var N;!function(t){t.None="none",t.Allow="allow",t.Forbid="forbid"}(N||(N={}));class ${constructor(t,e,i){this.dropEffect=N.Allow,this.pageX=0,this.pageY=0,this.item=t,this.dragImage=e,this.data=t.data,this.sourceEvent=i,i&&i instanceof MouseEvent&&(this.pageX=i.pageX,this.pageY=i.pageY),i&&k&&i instanceof TouchEvent&&i.touches[0]&&(this.pageX=i.touches[0].pageX,this.pageY=i.touches[0].pageY)}}class H{constructor(t){t&&t instanceof MouseEvent&&(this.x=t.pageX,this.y=t.pageY),t&&k&&t instanceof TouchEvent&&t.touches[0]&&(this.x=t.touches[0].pageX,this.y=t.touches[0].pageY)}}class F{constructor(){this.delta=5,this.draggableItem=null,this.dragImage=null,this.finishedSuccessfully=!1,this.mouseDownPosition=null,this.containerDescriptors=[],this.containerDescriptorIndex=-1,this.dropEffect=N.None,this.classPrefix="eqjs-drop",this.DRAG_DISABLED_ATTR="drag-disabled"}registerDraggableItem(t){const e=t.element;if(!e)throw Error("Element in draggle item is null or undefined");e.ondragstart=function(){return!1};const i=t=>{if(e.hasAttribute(this.DRAG_DISABLED_ATTR))return;t.preventDefault(),t instanceof MouseEvent&&t.stopPropagation();const i=new H(t);(Math.abs(i.x-this.mouseDownPosition.x)>this.delta||Math.abs(i.y-this.mouseDownPosition.y)>this.delta)&&n(t)},s=t=>{this.mouseMoveDragListener(t)},n=n=>{n.preventDefault(),n.stopPropagation(),e.removeEventListener("mousemove",i),e.removeEventListener("touchmove",i),this.finishedSuccessfully=!1,t.beforeDragStart&&t.beforeDragStart(),this.dragImage=L("div").setStyle("position","absolute").setStyle("z-index","65530").toDOM(),document.body.appendChild(this.dragImage),this.dragImage.appendChild(e.cloneNode(!0)),t.renderer&&t.renderer(this.dragImage),this.dropEffect=N.None,this.updateCusror(this.dropEffect),this.updateImageClass(this.dropEffect),this.draggableItem={element:e,scope:t.scope,data:t.data},this.updateDragItemPosition(n);const a=new $(this.draggableItem,this.dragImage,n);a.dropEffect=this.dropEffect,t.onDragStart&&t.onDragStart(a),this.dropEffect!==a.dropEffect&&(this.dropEffect=a.dropEffect,this.updateImageClass(this.dropEffect)),document.addEventListener("mousemove",s,!0),document.addEventListener("touchmove",s,!0)},a=t=>{k&&t instanceof TouchEvent&&t.preventDefault(),this.mouseDownPosition=new H(t),e.addEventListener("mousemove",i),e.addEventListener("touchmove",i),document.addEventListener("mouseup",o),document.addEventListener("touchend",o)};e.addEventListener("mousedown",a),e.addEventListener("touchstart",a);const o=t=>{this.mouseDownPosition=null,e.removeEventListener("mousemove",i),e.removeEventListener("touchmove",i),document.removeEventListener("mousemove",s,!0),document.removeEventListener("touchmove",s,!0),this.draggableItem&&r(t)},r=e=>{try{if(this.containerDescriptorIndex>=0){const t=this.containerDescriptors[this.containerDescriptorIndex],i={element:t.element,scopes:t.scopes,data:t.data},s=new $(this.draggableItem,this.dragImage,e);try{i.scopes.indexOf(this.draggableItem.scope)>=0&&this.dropEffect===N.Allow&&(this.finishedSuccessfully=!0,t.onDrop&&t.onDrop(i,s))}finally{t.onDragLeave&&t.onDragLeave(i,s)}}}finally{try{const i=new $(this.draggableItem,this.dragImage,e);i.data.finishedSuccessfully=this.finishedSuccessfully,t.onDragEnd&&t.onDragEnd(i)}finally{this.draggableItem=null,this.dragImage&&this.dragImage.parentElement&&this.dragImage.parentElement.removeChild(this.dragImage),this.dragImage=null,this.finishedSuccessfully=!1,document.removeEventListener("mouseup",o),document.removeEventListener("touchend",o)}}}}registerDropContainer(t){if(!t.element)throw Error("Element in drop container is null or undefined");this.containerDescriptors.push(t)}removeDropContainer(t){const e=this.containerDescriptors.filter((e=>e===t||e.element==t));if(e)for(const t of e)s.removeArrayItem(this.containerDescriptors,t)}mouseMoveDragListener(t){if(t instanceof MouseEvent&&t.preventDefault(),t.stopPropagation(),this.updateDragItemPosition(t),-1==this.containerDescriptorIndex){for(let e=0;e<this.containerDescriptors.length;e++){const i=this.containerDescriptors[e];if(this.detectDragEnterEvent(i.element,t)){this.containerDescriptorIndex=e;break}}this.containerDescriptorIndex>=0&&this.dragEnterEvent(t)}else{const e=this.containerDescriptors[this.containerDescriptorIndex];this.detectDragLeaveEvent(e.element,t)&&(this.dragLeaveEvent(t),this.containerDescriptorIndex=-1)}if(this.containerDescriptorIndex>=0){const e=this.containerDescriptors[this.containerDescriptorIndex],i={element:e.element,scopes:e.scopes,data:e.data};if(i.scopes.indexOf(this.draggableItem.scope)>=0){const s=new $(this.draggableItem,this.dragImage,t);s.dropEffect=this.dropEffect,e.onDragOver&&e.onDragOver(i,s)}}}updateCusror(t){switch(t){case N.Allow:this.setCursorStyle(this.dragImage,"grabbing");break;case N.Forbid:this.setCursorStyle(this.dragImage,"no-drop");break;default:this.setCursorStyle(this.dragImage,"grabbing")}}updateImageClass(t){switch(this.dragImage.classList.remove(`${this.classPrefix}-allow`),this.dragImage.classList.remove(`${this.classPrefix}-forbid`),this.dragImage.classList.remove(`${this.classPrefix}-none`),t){case N.Allow:this.dragImage.classList.add(`${this.classPrefix}-allow`);break;case N.None:this.dragImage.classList.add(`${this.classPrefix}-none`);break;case N.Forbid:this.dragImage.classList.add(`${this.classPrefix}-forbid`);break;default:this.dragImage.classList.add(`${this.classPrefix}-none`)}}setCursorStyle(t,e){if(t){t.style.cursor=e;for(let i=0;i<t.children.length;i++)this.setCursorStyle(t.children[i],e)}}updateDragItemPosition(t){if(this.dragImage){const e=new H(t);this.dragImage.style.top=e.y-this.dragImage.offsetHeight/2+"px",this.dragImage.style.left=e.x-this.dragImage.offsetWidth/2+"px"}}dragEnterEvent(t){const e=this.containerDescriptors[this.containerDescriptorIndex],i={element:e.element,scopes:e.scopes,data:e.data};if(i.scopes.indexOf(this.draggableItem.scope)>=0){const s=new $(this.draggableItem,this.dragImage,t);s.dropEffect=N.Allow,e.onDragEnter&&e.onDragEnter(i,s),this.dropEffect=s.dropEffect,this.updateCusror(this.dropEffect),this.updateImageClass(this.dropEffect)}else this.dropEffect!==N.Forbid&&(this.dropEffect=N.None,this.updateCusror(this.dropEffect),this.updateImageClass(this.dropEffect))}dragLeaveEvent(t){const e=this.containerDescriptors[this.containerDescriptorIndex],i={element:e.element,scopes:e.scopes,data:e.data};if(i.scopes.indexOf(this.draggableItem.scope)>=0){const s=new $(this.draggableItem,this.dragImage,t);s.dropEffect=N.None,e.onDragLeave&&e.onDragLeave(i,s),this.dropEffect=s.dropEffect,this.updateCusror(this.dropEffect),this.updateImageClass(this.dropEffect)}}detectDragEnterEvent(t,e){const i=T(t),s=new H(e);return!(s.y<i.y||s.y>i.y+t.offsetHeight)&&!(s.x<i.x||s.x>i.x+t.offsetWidth)}detectDragLeaveEvent(t,e){const i=T(t),s=new H(e);return!(s.y>i.y&&s.y<i.y+t.offsetHeight&&s.x>i.x&&s.x<i.x+t.offsetWidth)}}const _=new F;var Y;!function(t){t[t.Always=0]="Always",t[t.Once=1]="Once",t[t.Never=2]="Never"}(Y||(Y={}));var B;!function(t){t[t.NONE=1]="NONE",t[t.LEFT=2]="LEFT",t[t.CENTER=3]="CENTER",t[t.RIGHT=4]="RIGHT"}(B||(B={}));class W{constructor(t,e,i=!1){this._label=null,this._description=null,this.align=B.NONE,this.isVisible=!0,this.isRowNum=!1,this.dataColumn=t,this.grid=e;const s=e.options.columnWidths||{};t?(t.style.alignment&&(this.align=function(t){switch(t){case a.Left:return B.LEFT;case a.Center:return B.CENTER;case a.Right:return B.RIGHT;default:return B.NONE}}(t.style.alignment)),this.width=s&&s[this.type]?s[this.type].default:250,this._description=t.description):i&&(this.isRowNum=!0,this.width=s&&s.rowNumColumn?s.rowNumColumn.default:60,this._label="")}get label(){return this._label?this._label:this.isRowNum?"":this.dataColumn.label}set label(t){this._label=this.label}get description(){return this._description}get type(){return this.dataColumn?this.dataColumn.type:null}}class G{constructor(t,e){this.items=[],this.grid=e,this.sync(t)}sync(t,e=!0){this.clear();const i=new W(null,this.grid,!0);if(this.add(i),e||(i.isVisible=!1),t)for(let e of t.getItems()){const t=new W(e,this.grid);this.grid.options.onSyncGridColumn&&this.grid.options.onSyncGridColumn(t),this.add(t)}}get count(){return this.items.length}add(t){const e=this.items.length;return this.items.push(t),e}put(t,e){t>=0&&t<this.items.length&&(this.items[t]=e)}move(t,e){let i=this.items.indexOf(t);i>=0&&i!=e&&s.moveArrayItem(this.items,i,e)}get(t){return t>=0&&t<this.items.length?this.items[t]:null}getItems(){return this.items}removeAt(t){this.get(t),this.items.splice(t,1)}clear(){this.items=[]}}const z="keg",V=/{0:(.*?)}/g;var U;!function(t){t[t.STRING=1]="STRING",t[t.NUMBER=2]="NUMBER",t[t.DATETIME=3]="DATETIME",t[t.BOOL=4]="BOOL"}(U||(U={}));const j=(t,e,i,s)=>{const n=t?t.toString().replace(/\n/g,"↵ "):"";i.innerText=n,i.title=n,e.align==B.NONE&&i.classList.add(`${z}-cell-value-align-left`)},q=(t,e,i,s)=>{let a=(t||"").toString();"number"==typeof t&&(a=e.dataColumn&&e.dataColumn.displayFormat&&V.test(e.dataColumn.displayFormat)?e.dataColumn.displayFormat.replace(V,((e,i)=>n.numberToStr(t,i))):t.toLocaleString()),i.innerText=a,i.title=a,e.align==B.NONE&&i.classList.add(`${z}-cell-value-align-right`)},K=(e,i,s,a)=>{const o="[object Date]"===Object.prototype.toString.call(e);let r=(e||"").toString();if(o)if(i.dataColumn&&i.dataColumn.displayFormat&&V.test(i.dataColumn.displayFormat))r=i.dataColumn.displayFormat.replace(V,((t,s)=>n.dateTimeToStrEx(e,i.type,s)));else{const s=n.getCurrentLocale(),a={hour:"numeric",minute:"numeric",second:"numeric"};switch(i.type){case t.Date:r=e.toLocaleDateString(s);break;case t.Time:r=e.toLocaleTimeString(s,a);break;case t.DateTime:r=`${e.toLocaleDateString(s)} ${e.toLocaleTimeString(s,a)}`}}s.innerText=r,s.title=r,i.align==B.NONE&&s.classList.add(`${z}-cell-value-align-right`)},Q=(t,e,i,s)=>{if(e.dataColumn&&e.dataColumn.displayFormat&&V.test(e.dataColumn.displayFormat)){const s=e.dataColumn.displayFormat.replace(V,((e,i)=>n.booleanToStr(t,i)));return j(s,e,i)}i.classList.add(`${z}-cell-value-bool`),i.classList.add(`${z}-${t?"cell-value-true":"cell-value-false"}`)};class J{constructor(t){this.renderers={},this.defaultRenderers={},this.registerRenderer("StringDefault",j),this.setDefaultRenderer(U.STRING,j),this.registerRenderer("NumberDefault",q),this.setDefaultRenderer(U.NUMBER,q),this.registerRenderer("DateTimeDefault",K),this.setDefaultRenderer(U.DATETIME,K),this.registerRenderer("BoolDefault",Q),this.setDefaultRenderer(U.BOOL,Q)}getDefaultRenderer(t){const e=this.getCellType(t);return this.defaultRenderers[U[e]]}getDefaultRendererByType(t){return this.defaultRenderers[U[t]]}setDefaultRenderer(t,e){e&&(this.defaultRenderers[U[t]]=e)}getRenderer(t){return this.renderers[t]}registerRenderer(t,e){this.renderers[t]=e}getCellType(e){switch(e){case t.Autoinc:case t.Byte:case t.Word:case t.Currency:case t.Float:case t.Int32:case t.Int64:return U.NUMBER;case t.Date:case t.DateTime:case t.Time:return U.DATETIME;case t.Bool:return U.BOOL;default:return U.STRING}}}class X{constructor(t){if(this.cssPrefix="keg",this.pagination={page:1,pageSize:30,total:0},this.paginationOptions={maxButtonCount:10,useBootstrap:!1},this.defaultDataGridOptions={slot:null,dataTable:null,fixHeightOnFirstRender:!1,syncGridColumns:!0,useRowNumeration:!0,allowDragDrop:!1,aggregates:{settings:null,calculator:null},paging:{enabled:!0,pageSize:30,pageSizeItems:[20,30,50,100,200]},columnWidths:{autoResize:Y.Always,stringColumns:{min:100,max:500,default:250},numberColumns:{min:60,default:120},boolColumns:{min:50,default:80},dateColumns:{min:80,default:200},otherColumns:{min:100,max:500,default:250},rowNumColumn:{min:40,default:60}},showPlusButton:!1,viewportRowsCount:null,showActiveRow:!0},this.rowsOnPagePromise=null,this.containerInitialHeight=0,this.firstRender=!0,this.prevRowTotals=null,this.landingIndex=-1,this.landingSlot=L("div").addClass(`${this.cssPrefix}-col-landing-slot`).addChildElement(L("div").toDOM()).toDOM(),this._activeRowIndex=-1,t&&t.paging&&(t.paging=s.assign(this.defaultDataGridOptions.paging,t.paging)),this.options=this.mergeOptions(t),this.processColumnWidthsOptions(),!this.options.slot)throw Error('"slot" parameter is required to initialize EasyDataGrid');if(!this.options.dataTable)throw Error('"dataTable" parameter is required to initialize EasyDataGrid');this.dataTable=t.dataTable,this.eventEmitter=new h(this),this.cellRendererStore=new J(t),this.columns=new G(this.dataTable.columns,this),this.setSlot(this.options.slot),this.init(this.options)}mergeOptions(t){const e=s.assignDeep({},this.defaultDataGridOptions.columnWidths,t.columnWidths),i=s.assignDeep({},this.defaultDataGridOptions.paging,t.paging),n=s.assign({},this.defaultDataGridOptions,t);return n.columnWidths=e,n.paging=i,n}processColumnWidthsOptions(){const e=this.options.columnWidths;if(!e)return;s.getStringDataTypes().forEach((t=>{e[t]=Object.assign(Object.assign({},e.stringColumns),e[t])})),s.getNumericDataTypes().forEach((t=>{e[t]=Object.assign(Object.assign({},e.numberColumns),e[t])})),e[t.Bool]=Object.assign(Object.assign({},e.boolColumns),e[t.Bool]),s.getDateDataTypes().forEach((t=>{e[t]=Object.assign(Object.assign({},e.dateColumns),e[t])}));const i=[...s.getStringDataTypes(),...s.getNumericDataTypes(),...s.getDateDataTypes(),t.Bool];s.getAllDataTypes().forEach((t=>{t in i||(e[t]=Object.assign(Object.assign({},e.otherColumns),e[t]))})),e[t.Unknown]=e.otherColumns}setSlot(t){if("string"==typeof t){if(t.length)if("#"===t[0])this.slot=document.getElementById(t.substring(1));else{if("."!==t[0])throw Error("Unrecognized slot parameter (Must be id, class or HTMLElement): "+t);{const e=document.getElementsByClassName(t.substring(1));e.length&&(this.slot=e[0])}}}else this.slot=t}init(t){t.onInit&&this.addEventListener("init",t.onInit),t.onRowClick&&this.addEventListener("rowClick",t.onRowClick),t.onRowDbClick&&this.addEventListener("rowDbClick",t.onRowDbClick),t.onPlusButtonClick&&this.addEventListener("plusButtonClick",t.onPlusButtonClick),t.onColumnChanged&&this.addEventListener("columnChanged",t.onColumnChanged),t.onColumnDeleted&&this.addEventListener("columnDeleted",t.onColumnDeleted),t.onColumnMoved&&this.addEventListener("columnMoved",t.onColumnMoved),t.onPageChanged&&this.addEventListener("pageChanged",t.onPageChanged),t.onActiveRowChanged&&this.addEventListener("activeRowChanged",t.onActiveRowChanged),this.addEventListener("pageChanged",(t=>this.activeRowIndex=-1)),s.assignDeep(this.paginationOptions,t.pagination),this.pagination.pageSize=this.options.paging.pageSize||this.pagination.pageSize,this.options.allowDragDrop&&_.registerDropContainer({element:this.slot,scopes:["gridColumnMove"],onDragEnter:(t,e)=>{this.slot.classList.add(`${S}-drophover`),this.showLandingSlot(e.pageX,e.pageY)},onDragOver:(t,e)=>{this.showLandingSlot(e.pageX,e.pageY)},onDragLeave:(t,e)=>{e.dropEffect=N.Forbid,this.slot.classList.remove(`${S}-drophover`),this.hideLandingSlot()},onDrop:(t,e)=>{this.dataTable.columns.move(e.data.column,this.landingIndex),this.refresh(),this.fireEvent({type:"columnMoved",columnId:e.data.column.id,newIndex:this.landingIndex})}}),this.refresh(),this.fireEvent("init")}fireEvent(t){"string"==typeof t?this.eventEmitter.fire(t):this.eventEmitter.fire(t.type,t)}setData(t){this.dataTable=t,this.clear(),this.refresh()}getData(){return this.dataTable}getColumns(){return this.columns}destroy(){this.slot.innerHTML=""}refresh(){this.clearDOM(),this.render()}clearDOM(){this.slot.innerHTML=""}clear(){this.pagination.page=1,this.clearDOM()}render(){if(!this.hasData()&&!this.options.showPlusButton)return;this.containerInitialHeight=this.slot.clientHeight,this.rootDiv=document.createElement("div"),this.rootDiv.style.width="100%",this.rootDiv.classList.add(`${this.cssPrefix}-root`),this.columns.sync(this.dataTable.columns,this.options.useRowNumeration),this.renderHeader(),this.rootDiv.appendChild(this.headerDiv),this.renderBody(),this.rootDiv.appendChild(this.bodyDiv),this.renderFooter(),this.rootDiv.appendChild(this.footerDiv);let t=document.createElement("div");t.classList.add(`${this.cssPrefix}-container`),t.appendChild(this.rootDiv),this.slot.appendChild(t);const e=this.options.columnWidths.autoResize!==Y.Never;this.rowsOnPagePromise?this.rowsOnPagePromise.then((()=>this.updateHeight())).then((()=>{this.firstRender=!1,this.rowsOnPagePromise=null})):setTimeout((()=>{this.updateHeight().then((()=>{this.firstRender=!1,e&&this.resizeColumns()}))}),100)}updateHeight(){return new Promise((t=>{if(this.options.viewportRowsCount){const e=this.bodyCellContainerDiv.firstElementChild;let i=(e?e.offsetHeight:36)*this.options.viewportRowsCount;return L(this.bodyViewportDiv).setStyle("height",`${i}px`),void setTimeout((()=>{const e=this.bodyViewportDiv.offsetHeight-this.bodyViewportDiv.clientHeight;i+=e,L(this.bodyViewportDiv).setStyle("height",`${i}px`),t()}),100)}this.containerInitialHeight,t()})).then((()=>{this.options.fixHeightOnFirstRender&&this.firstRender&&(this.slot.style.height=`${this.slot.offsetHeight}px`)}))}getContainerWidth(){return this.columns.getItems().filter((t=>t.isVisible)).map((t=>t.width)).reduce(((t,e)=>t+e))}renderHeader(){this.headerDiv=L("div").addClass(`${this.cssPrefix}-header`).toDOM(),this.headerViewportDiv=L("div",this.headerDiv).addClass(`${this.cssPrefix}-header-viewport`).toDOM(),this.headerCellContainerDiv=L("div",this.headerViewportDiv).addClass(`${this.cssPrefix}-header-cell-container`).toDOM(),this.headerRowDiv=L("div",this.headerCellContainerDiv).addClass(`${this.cssPrefix}-header-row`).toDOM(),this.columns.getItems().forEach(((t,e)=>{if(!t.isVisible)return;let i=this.renderColumnHeader(t,e);this.headerRowDiv.appendChild(i),t.isRowNum&&L(i).addChildElement(this.renderHeaderButtons())}));const t=this.getContainerWidth();L(this.headerCellContainerDiv).setStyle("width",`${t}px`)}hasData(){return this.dataTable.columns.count>0}renderColumnHeader(t,e){let i=L("div").addClass(`${this.cssPrefix}-header-cell`).data("col-idx",`${e}`).setStyle("width",`${t.width}px`);t.dataColumn&&i.data("col-id",`${t.dataColumn.id}`);let s=i.toDOM();return L("div",s).addClass(`${this.cssPrefix}-header-cell-resize`),t.isRowNum||L("div",s).addClass(`${this.cssPrefix}-header-cell-label`).text(t.label),t.description&&L("div",s).addClass("question-mark").title(t.description),this.options.allowDragDrop&&_.registerDraggableItem({element:s,scope:"gridColumnMove",data:{column:t},renderer:e=>{e.innerHTML="";const i=document.createElement("div");i.innerText=t.label,e.classList.add(`${this.cssPrefix}-sortable-helper`),e.appendChild(i)},onDragStart:t=>{t.dropEffect=N.Allow}}),s}renderBody(){this.bodyDiv=L("div").addClass(`${this.cssPrefix}-body`).toDOM(),this.bodyViewportDiv=L("div",this.bodyDiv).addClass(`${this.cssPrefix}-body-viewport`).attr("tabIndex","0").toDOM(),this.bodyCellContainerDiv=L("div",this.bodyViewportDiv).addClass(`${this.cssPrefix}-cell-container`).toDOM();const t=this.canShowAggregates();this.dataTable&&(this.showProgress(),this.rowsOnPagePromise=this.getRowsToRender().then((e=>{this.pagination.total=this.dataTable.getTotal(),this.hideProgress(),this.bodyCellContainerDiv.innerHTML="",this.prevRowTotals=null;let i=0;if(e.length){const s=t?this.options.aggregates.settings.getGroups():[];i=e.length<this.pagination.pageSize?e.length:this.pagination.pageSize,e.forEach(((e,n)=>{if(t&&this.updateTotalsState(s,e),n<i){const t=this.renderRow(e,n);this.bodyCellContainerDiv.appendChild(t)}}));const n=this.options.aggregates&&this.options.aggregates.showGrandTotalsOnEachPage;if(t&&(this.isLastPage()||n)){const t=new l(this.dataTable.columns,new Array(this.dataTable.columns.count));this.updateTotalsState(s,t,!0)}}if(this.options.columnWidths.autoResize!==Y.Never)this.resizeColumns();else{const t=this.getContainerWidth();L(this.bodyCellContainerDiv).setStyle("width",`${t}px`)}return i})).catch((t=>(console.error(t),0)))),this.bodyViewportDiv.addEventListener("scroll",(t=>{L(this.headerViewportDiv).setStyle("margin-left",`-${this.bodyViewportDiv.scrollLeft}px`)})),this.bodyViewportDiv.addEventListener("keydown",this.onViewportKeydown.bind(this))}isLastPage(){return this.dataTable.elasticChunks?this.dataTable.totalIsKnown()&&this.pagination.page*this.pagination.pageSize>=this.pagination.total:this.pagination.page*this.pagination.pageSize>=this.pagination.total}canShowAggregates(){if(!this.options||!this.options.aggregates||!this.options.aggregates.settings)return!1;const t=this.options.aggregates.settings;return(t.hasAggregates()||t.hasRecordCount())&&(t.hasGroups()||t.hasGrandTotals())}updateTotalsState(t,e,i=!1){const s=this.options.aggregates.settings;if(this.prevRowTotals&&s.hasGroups()){let i=-1;for(let n=1;n<=t.length;n++){const a=t[n-1];for(const t of a.columns)if(!s.compareValues(this.prevRowTotals.getValue(t),e.getValue(t))){i=n;break}if(-1!==i)break}if(-1!==i)for(let e=t.length;e>=i;e--){const t=new l(this.dataTable.columns,this.prevRowTotals.toArray()),i=this.renderTotalsRow(e,t);this.bodyCellContainerDiv.appendChild(i)}}if(i&&s.hasGrandTotals()&&s.hasAggregates()){const t=this.renderTotalsRow(0,e);this.bodyCellContainerDiv.appendChild(t)}this.prevRowTotals=e}applyGroupColumnTemplate(t,e,i){let s=t.replace(/{{\s*GroupValue\s*}}/g,e?`${e}`:"-");return s=s.replace(/{{\s*GroupCount\s*}}/g,i?`${i}`:"-"),s}renderTotalsRow(t,e){const i=this.options.aggregates.settings,s=t>0?i.getGroups()[t-1]:{columns:[],aggregates:i.getAggregates()},n=L("div").addClass(`${this.cssPrefix}-row`).addClass(`${this.cssPrefix}-row-totals`).addClass(`${this.cssPrefix}-totals-lv${t}`).data("totals-level",`${t}`).attr("tabindex","-1").toDOM();this.columns.getItems().forEach(((t,i)=>{if(!t.isVisible)return;let a="";const o=t.isRowNum?-1:this.dataTable.columns.getIndex(t.dataColumn.id);!t.isRowNum&&t.dataColumn&&s.columns.indexOf(t.dataColumn.id)>=0&&(a=e.getValue(o)),o==this.dataTable.columns.count-1&&(a=".  .  .  .  .  ."),n.appendChild(this.renderCell(t,i,a,n))}));const a=this.options.aggregates.calculator.getAggrContainer(),o=i.getAggregates().map((t=>t.colId)),r=i.buildGroupKey(s,e);return a.getAggregateData(t,r).then((a=>{for(const t of o)e.setValue(t,a[t]);n.innerHTML="",this.columns.getItems().forEach(((r,l)=>{if(!r.isVisible)return;let d="";const h=r.isRowNum?-1:this.dataTable.columns.getIndex(r.dataColumn.id);if(!r.isRowNum){let c=!1;if(r.dataColumn){const i=s.columns.indexOf(r.dataColumn.id),n=o.indexOf(r.dataColumn.id);c=t>0?i==s.columns.length-1:0==h,(i>=0||n>=0)&&(d=e.getValue(h))}let u="";if(t>0&&(u=r.dataColumn.groupFooterColumnTemplate,!u&&i.hasRecordCount()&&c&&(u="{{GroupValue}} ({{GroupCount}})")),u){d=this.renderCell(r,l,d,n).firstChild.innerHTML,d=this.applyGroupColumnTemplate(u,d,a[i.COUNT_FIELD_NAME])}}const c=this.renderCell(r,l,d,n);n.appendChild(c)}))})).catch((t=>console.error(t))),n}onViewportKeydown(t){if(this.options.showActiveRow){const e=this.bodyCellContainerDiv.querySelectorAll(`.${this.cssPrefix}-row`).length;let i;switch(t.key){case"ArrowLeft":case"ArrowRight":break;case"ArrowUp":t.preventDefault(),i=this.activeRowIndex<0||this.activeRowIndex>=e?e-1:this.activeRowIndex-1,this.activeRowIndex=i>=0?i:0;break;case"ArrowDown":t.preventDefault(),i=this.activeRowIndex<0||this.activeRowIndex>=e?0:this.activeRowIndex+1,this.activeRowIndex=i<e?i:e-1}}}ensureRowVisibility(t){const e="number"==typeof t?this.getDataRow(t):t;if(e){let t=e.getBoundingClientRect();const i=this.bodyViewportDiv.getBoundingClientRect(),s=t.top-i.top,n=t.bottom-i.top,a=this.bodyViewportDiv.clientHeight,o=window.innerHeight||document.documentElement.clientHeight;if(s>0&&n<=a&&t.top>0&&t.bottom<o)return;s<0?this.bodyViewportDiv.scrollTop=this.bodyViewportDiv.scrollTop+s:n>a&&(this.bodyViewportDiv.scrollTop=this.bodyViewportDiv.scrollTop+n-a),t=e.getBoundingClientRect(),t.top<0?document.documentElement.scrollTop=document.documentElement.scrollTop+t.top:t.bottom>o&&(document.documentElement.scrollTop=document.documentElement.scrollTop+t.bottom-o)}}getRowsToRender(){return!1===this.options.paging.enabled?Promise.resolve(this.dataTable.getCachedRows()):this.dataTable.getRows({offset:(this.pagination.page-1)*this.pagination.pageSize,limit:this.pagination.pageSize+1}).catch((t=>(console.error(t),[])))}renderFooter(){this.footerDiv=L("div").addClass(`${this.cssPrefix}-footer`).toDOM(),this.rowsOnPagePromise&&this.rowsOnPagePromise.then((t=>{this.footerDiv.innerHTML="",this.footerPaginateDiv=this.renderPageNavigator(),this.footerDiv.appendChild(this.footerPaginateDiv);const e=this.renderPageInfoBlock(t);this.footerDiv.appendChild(e)}))}renderPageInfoBlock(t){const e=L("div").addClass(`${this.cssPrefix}-page-info`).toDOM();if(this.dataTable.getTotal()>0){const i=t?(this.pagination.page-1)*this.pagination.pageSize+1:0,s=t?i+t-1:0;let a=this.dataTable.getTotal().toString();if(this.dataTable.elasticChunks){this.dataTable.getCachedCount()!==this.dataTable.getTotal()&&(a="?")}e.innerHTML=n.getText("GridPageInfo").replace("{FirstPageRecordNum}",`<span>${i.toString()}</span>`).replace("{LastPageRecordNum}",`<span>${s.toString()}</span>`).replace("{Total}",`<span>${a}</span>`)}return e}showProgress(){}hideProgress(){}getLocalIndexByGlobal(t){return this.pagination?t%this.pagination.pageSize:t}getGlobalIndexByLocal(t){return this.pagination?(this.pagination.page-1)*this.pagination.pageSize+t:t}renderRow(t,e){let i=this.getGlobalIndexByLocal(e),s=L("div").addClass(`${this.cssPrefix}-row`).addClass(`${this.cssPrefix}-row-${e%2==1?"odd":"even"}`).data("row-idx",`${i}`).attr("tabindex","-1").on("click",(i=>{this.activeRowIndex=e,this.fireEvent({type:"rowClick",row:t,rowIndex:e,sourceEvent:i})})).on("dblclick",(i=>{this.fireEvent({type:"rowDbClick",row:t,rowIndex:e,sourceEvent:i})}));0==e&&s.addClass(`${this.cssPrefix}-row-first`);let n=s.toDOM();return this.options.showActiveRow&&e==this.activeRowIndex&&s.addClass(`${this.cssPrefix}-row-active`),this.columns.getItems().forEach(((e,s)=>{if(!e.isVisible)return;const a=e.isRowNum?-1:this.dataTable.columns.getIndex(e.dataColumn.id);let o=e.isRowNum?i+1:t.getValue(a);n.appendChild(this.renderCell(e,s,o,n))})),n}renderCell(t,e,i,s){const n=L("div").addClass(`${this.cssPrefix}-cell`).data("col-idx",`${e}`).attr("tabindex","-1").setStyle("width",`${t.width}px`);t.align==B.LEFT?n.addClass(`${this.cssPrefix}-cell-align-left`):t.align==B.RIGHT?n.addClass(`${this.cssPrefix}-cell-align-right`):t.align==B.CENTER&&n.addClass(`${this.cssPrefix}-cell-align-center`);const a=n.toDOM(),o=a.appendChild(L("div").addClass(`${this.cssPrefix}-cell-value`).toDOM()),r=this.getCellRenderer(t);return r&&r(i,t,o,s),a}getCellRenderer(t){let e;return e=t.isRowNum?this.cellRendererStore.getDefaultRendererByType(U.NUMBER):this.cellRendererStore.getDefaultRenderer(t.type),this.options&&this.options.onGetCellRenderer&&(e=this.options.onGetCellRenderer(t,e)||e),e}setPage(t){this.pagination.page=t,this.fireEvent({type:"pageChanged",page:t}),this.refresh(),this.bodyViewportDiv.focus()}renderPageNavigator(){let t=document.createElement("div");t.className=`${this.cssPrefix}-pagination-wrapper`;const e=this.dataTable.getTotal();if(this.options.paging&&this.options.paging.enabled&&e>0){const e=this.paginationOptions.useBootstrap?"":`${this.cssPrefix}-`,i=t=>{const e=t.target;if(e.hasAttribute("data-page")){const t=parseInt(e.getAttribute("data-page"));this.setPage(t)}},s=(t,s,n,a,o)=>{const r=document.createElement("li");if(r.className=`${e}page-item`,!a){o&&(r.className+=" active");const n=document.createElement("a");return n.setAttribute("href","javascript:void(0)"),n.innerHTML=s||t.toString(),n.setAttribute("data-page",`${t}`),n.className=`${e}page-link`,n.addEventListener("click",i),r.appendChild(n),r}let l=document.createElement("span");if(l.setAttribute("aria-hidden","true"),l.className=`${e}page-link`,n)r.className+=" disabled";else{if(this.paginationOptions.useBootstrap)l=document.createElement("a"),l.setAttribute("href","javascript:void(0)"),l.setAttribute("data-page",`${t}`);else{let e=document.createElement("a");e.setAttribute("href","javascript:void(0)"),e.setAttribute("data-page",`${t}`),l=e}l.className=`${e}page-link`,l.addEventListener("click",i)}return l.innerHTML=s,r.appendChild(l),r};if(this.dataTable.elasticChunks){const i=this.pagination.page||1;let n=document.createElement("ul");n.className=`${e}pagination`;let a=s(i-1,"&laquo;",1==i,!0,!1);n.appendChild(a),a=s(i+1,"&raquo;",this.isLastPage(),!0,!1),n.appendChild(a),t.appendChild(n)}else if(this.pagination.total>this.pagination.pageSize){const i=this.pagination.page||1,n=Math.ceil(this.pagination.total/this.pagination.pageSize)||1,a=this.paginationOptions.maxButtonCount||10,o=i-1;let r=o-o%a+1,l=r+a-1;l>n&&(l=n);let d=document.createElement("ul");d.className=`${e}pagination`;let h=s(r-1,"&laquo;",1==r,!0,!1);d.appendChild(h);for(let t=r;t<=l;t++)h=s(t,t.toString(),!1,!1,t==i),d.appendChild(h);h=s(l+1,"&raquo;",l==n,!0,!1),d.appendChild(h),t.appendChild(d)}if(this.options.paging.allowPageSizeChange){const e=t=>{const e=parseInt(t.target.value);this.pagination.pageSize=e,this.pagination.page=1,this.refresh()},i=document.createElement("div");i.className=`${this.cssPrefix}-page-sizes`;const s=document.createElement("div");s.className=`kfrm-select ${this.cssPrefix}-page-sizes-select`,i.appendChild(s);const a=document.createElement("select"),o=this.options.paging.pageSizeItems||[],r=new Set(o);r.add(this.options.paging.pageSize||20),Array.from(r).forEach((t=>{const e=document.createElement("option");e.value=t.toString(),e.text=t.toString(),a.appendChild(e)})),a.value=(this.pagination.pageSize||20).toString(),s.appendChild(a),a.addEventListener("change",e);const l=document.createElement("div");l.className=`${this.cssPrefix}-page-sizes-label`,i.appendChild(l);const d=document.createElement("span");d.innerText=n.getText("GridItemsPerPage"),l.appendChild(d),t.appendChild(i)}}return t}addEventListener(t,e){return this.eventEmitter.subscribe(t,(t=>e(t.data)))}removeEventListener(t,e){this.eventEmitter.unsubscribe(t,e)}renderHeaderButtons(){return this.options.showPlusButton?L("div").addClass(`${this.cssPrefix}-header-btn-plus`).title(this.options.plusButtonTitle||"Add").addChild("a",(t=>t.attr("href","javascript:void(0)").on("click",(t=>{t.preventDefault(),this.fireEvent({type:"plusButtonClick",sourceEvent:t})})))).toDOM():L("span").addText("#").toDOM()}showLandingSlot(t,e){const i=this.headerRowDiv.querySelectorAll(`[class*=${this.cssPrefix}-table-col]`),s=[];for(let t=1;t<i.length;t++){const e=i[t];"none"!==e.style.display&&s.push(e)}if(0===s.length)return this.landingIndex=0,void this.headerRowDiv.appendChild(this.landingSlot);const n=T(this.landingSlot);if(t>=n.x&&t<=n.x+this.landingSlot.offsetWidth)return;let a=this.landingIndex;for(let e of s){const i=T(e),s=e.offsetWidth;t>i.x&&t<i.x+s&&(a=parseInt(e.getAttribute("data-col-idx"))-1)}a!=this.landingIndex&&(this.landingIndex=a,this.landingIndex<s.length?this.headerRowDiv.insertBefore(this.landingSlot,s[this.landingIndex]):this.headerRowDiv.appendChild(this.landingSlot))}hideLandingSlot(){this.landingIndex=-1,setTimeout((()=>{this.landingSlot.parentElement&&this.landingSlot.parentElement.removeChild(this.landingSlot)}),10)}get activeRowIndex(){return this._activeRowIndex}set activeRowIndex(t){if(t!==this._activeRowIndex){const e=this._activeRowIndex;this._activeRowIndex=t,this.updateActiveRow(),this.fireEvent({type:"activeRowChanged",oldValue:e,newValue:this.activeRowIndex,rowIndex:this.getGlobalIndexByLocal(this.activeRowIndex)})}}updateActiveRow(){if(this.options.showActiveRow){this.bodyCellContainerDiv.querySelectorAll(`[class*=${this.cssPrefix}-row-active]`).forEach((t=>{t.classList.remove(`${this.cssPrefix}-row-active`)}));const t=this.getActiveRow();t&&(t.classList.add(`${this.cssPrefix}-row-active`),this.ensureRowVisibility(this.activeRowIndex))}}getActiveRow(){return this.getDataRow(this.activeRowIndex)}getDataRow(t){const e=Array.from(this.bodyCellContainerDiv.querySelectorAll(`.${this.cssPrefix}-row:not(.${this.cssPrefix}-row-totals)`));return t>=0&&t<e.length?e[t]:null}focus(){this.bodyViewportDiv.focus()}resizeColumns(){if(this.options.columnWidths.autoResize===Y.Never)return;const t=this.bodyCellContainerDiv.style.width;this.bodyCellContainerDiv.style.visibility="hidden",this.bodyCellContainerDiv.style.width="1px",this.headerRowDiv.style.width="1px";let e=0;const i=this.columns.getItems(),n=this.headerCellContainerDiv.querySelectorAll(`.${this.cssPrefix}-header-cell`);let a=0;for(let t=0;t<this.columns.count;t++){const o=i[t];if(!o.isVisible)continue;const r=this.options.columnWidths.autoResize!==Y.Always&&o.dataColumn?o.dataColumn.calculatedWidth:0,l=this.bodyCellContainerDiv.querySelectorAll(`.${this.cssPrefix}-cell[data-col-idx="${t}"] > .${this.cssPrefix}-cell-value`);let d=0;if(r>0)e+=r,o.width=r,l.forEach((t=>{t.parentElement.style.width=`${r}px`})),n[a].style.width=`${r}px`;else if(0==l.length&&(n[a].style.width=null,n[a].style.whiteSpace="nowrap"),d=n[a].offsetWidth,l.length>0){l.forEach((t=>{t.parentElement.style.width=null;const e=t.parentElement.offsetWidth;e>d&&(d=e)})),d+=3;const t=o.isRowNum?this.options.columnWidths.rowNumColumn.max||500:this.options.columnWidths[o.dataColumn.type].max||2e3,i=o.isRowNum?this.options.columnWidths.rowNumColumn.min||0:this.options.columnWidths[o.dataColumn.type].min||20;d>t&&(d=t),d<i&&(d=i),s.isNumericType(o.type)&&(d=Math.round(1.3*d)),e+=d,o.width=d,l.forEach((t=>{t.parentElement.style.width=`${d}px`})),n[a].style.width=`${d}px`,o.dataColumn&&(o.dataColumn.calculatedWidth=d)}else e+=d;a++}e>0?(this.bodyCellContainerDiv.style.width=`${e}px`,this.headerCellContainerDiv.style.width=`${e}px`):(this.bodyCellContainerDiv.style.width=t,this.headerCellContainerDiv.style.width=t),this.bodyCellContainerDiv.style.visibility=null,this.headerRowDiv.removeAttribute("style")}}class Z{get cssPrefix(){return"kdtp-cal"}constructor(t,e){this.slot=t,this.options=e||{},this.options.yearRange||(this.options.yearRange="c-10:c+10")}setDate(t){this.currentDate=new Date(t)}getDate(){return new Date(this.currentDate)}dateChanged(t){this.options.onDateChanged&&this.options.onDateChanged(this.currentDate,t)}}class tt{get cssPrefix(){return"kdtp"}constructor(t){this.calendar=null,this.timePicker=null,this.options=t,this.render()}setDateTime(t){this.currentDateTime=new Date(t),this.calendar&&this.calendar.setDate(this.currentDateTime),this.timePicker&&this.timePicker.setTime(this.currentDateTime)}getDateTime(){return new Date(this.currentDateTime)}render(){this.options.showCalendar&&(this.calendar=this.createCalendar({yearRange:this.options.yearRange,showDateTimeInput:this.options.showDateTimeInput,timePickerIsUsed:this.options.showTimePicker,oneClickDateSelection:this.options.oneClickDateSelection,onDateChanged:(t,e)=>{this.currentDateTime=t,this.timePicker&&this.timePicker.setTime(this.currentDateTime),this.options.showTimePicker&&this.dateTimeChanged(),e&&this.apply(this.currentDateTime)}}),this.calendar&&this.calendar.render()),this.options.showTimePicker&&(this.timePicker=this.createTimePicker({onTimeChanged:t=>{this.currentDateTime.setHours(t.getHours()),this.currentDateTime.setMinutes(t.getMinutes()),this.calendar&&this.calendar.setDate(this.currentDateTime),this.dateTimeChanged()}}),this.timePicker&&this.timePicker.render()),this.setDateTime(new Date)}createCalendar(t){return null}createTimePicker(t){return null}show(t){this.options.beforeShow&&this.options.beforeShow();const e=T(t||document.body);this.slot.style.top=e.y+t.clientHeight+"px",this.slot.style.left=e.x+"px"}apply(t){this.options.onApply&&this.options.onApply(t),this.destroy()}cancel(){this.options.onCancel&&this.options.onCancel(),this.destroy()}destroy(){this.slot&&this.slot.parentElement&&this.slot.parentElement.removeChild(this.slot)}dateTimeChanged(){this.options.onDateTimeChanged&&this.options.onDateTimeChanged(this.currentDateTime)}}class et extends Z{constructor(t,e){super(t,e),this.daysOfWeek=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],this.months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.calendarBody=null,this.isManualInputChanging=!1;for(let t=0;t<this.daysOfWeek.length;t++)this.daysOfWeek[t]=n.getShortWeekDayName(t+1);for(let t=0;t<this.months.length;t++)this.months[t]=n.getLongMonthName(t+1)}setDate(t){super.setDate(t),this.selectedMonth=this.currentDate.getMonth(),this.selectedYear=this.currentDate.getFullYear(),this.rerenderMonth()}render(){const t=L("div",this.slot).addClass(`${this.cssPrefix}-header`);this.options.showDateTimeInput?t.addChildElement(this.renderManualDateInput()):t.addChild("span",(t=>this.headerTextElem=t.toDOM())),L(this.slot).addChildElement(this.renderCalendarButtons()),this.calendarBody=L("div",this.slot).addClass(`${this.cssPrefix}-body`).toDOM()}getInputDateFormat(){const t=n.getLocaleSettings();return this.options.timePickerIsUsed?`${t.editDateFormat} ${t.editTimeFormat}`:t.editDateFormat}renderManualDateInput(){const t=this.getInputDateFormat(),e=L("input").attr("placeholder",t).addClass(`${this.cssPrefix}-header-input`);return e.mask(t.replace("yyyy","9999").replace("MM","99").replace("dd","99").replace("HH","99").replace("mm","99").replace("ss","99")).on("input",(i=>{e.removeClass("error");try{this.isManualInputChanging=!0;const e=s.strToDateTime(this.manualInputElem.value,t);this.currentDate=e,this.jump(this.currentDate.getFullYear(),this.currentDate.getMonth()),this.dateChanged(!1)}catch(t){e.addClass("error")}finally{this.isManualInputChanging=!1}})).on("keydown",(t=>{13===t.keyCode&&(t.preventDefault(),t.stopPropagation(),this.manualInputElem.className.indexOf("error")<0&&!this.isManualInputChanging&&this.dateChanged(!0))})).on("focus",(()=>{setTimeout((()=>{this.manualInputElem.selectionStart=0,this.manualInputElem.selectionEnd=0}),50)})),this.manualInputElem=e.toDOM(),this.manualInputElem}updateDisplayedDateValue(){if(this.manualInputElem){if(!this.isManualInputChanging){const t=this.getInputDateFormat();this.manualInputElem.value=n.dateTimeToStr(this.currentDate,t),this.manualInputElem.focus()}}else if(this.headerTextElem){const t=n.getCurrentLocale();this.headerTextElem.innerText=this.currentDate.toLocaleString("en"==t?void 0:t,{year:"numeric",month:"long",day:"numeric"})}}renderCalendarButtons(){return L("nav").addClass(`${this.cssPrefix}-nav`).addChild("div",(t=>t.addClass(`${this.cssPrefix}-nav-prev`).on("click",(()=>{this.prev()})).addChild("span",(t=>t.html("&lsaquo;"))))).addChild("div",(t=>t.addClass(`${this.cssPrefix}-nav-selectors`).addChild("div",(t=>t.addClass(`${this.cssPrefix}-nav-month`).addChild("select",(t=>{t.on("change",(()=>{this.jump(this.selectedYear,parseInt(this.selectMonthElem.value))}));for(let e=0;e<this.months.length;e++)t.addChild("option",(t=>t.attr("value",e.toString()).text(this.months[e])));this.selectMonthElem=t.toDOM()})))).addChild("div",(t=>t.addClass(`${this.cssPrefix}-nav-year`).addChild("select",(t=>this.selectYearElem=t.on("change",(()=>{this.jump(parseInt(this.selectYearElem.value),this.selectedMonth)})).toDOM())))))).addChild("div",(t=>t.addClass(`${this.cssPrefix}-nav-next`).on("click",(()=>{this.next()})).addChild("span",(t=>t.html("&rsaquo;"))))).toDOM()}prev(){this.selectedYear=0===this.selectedMonth?this.selectedYear-1:this.selectedYear,this.selectedMonth=0===this.selectedMonth?11:this.selectedMonth-1,this.rerenderMonth()}next(){this.selectedYear=11===this.selectedMonth?this.selectedYear+1:this.selectedYear,this.selectedMonth=(this.selectedMonth+1)%12,this.rerenderMonth()}rerenderSelectYear(){const t=/c-(\d*):c\+(\d*)/g.exec(this.options.yearRange);let e=0,i=1;null!==t&&(e=parseInt(t[1]),i=parseInt(t[2])),this.selectYearElem.innerHTML="";for(let t=0;t<=e+i;t++){let i=document.createElement("option"),s=this.selectedYear-e+t;i.value=s.toString(),i.innerText=s.toString(),this.selectYearElem.appendChild(i)}}jump(t,e){this.selectedYear=t,this.selectedMonth=e,this.rerenderMonth()}rerenderMonth(){this.updateDisplayedDateValue(),this.rerenderSelectYear();let t=new Date(this.selectedYear,this.selectedMonth).getDay(),e=new Date(this.selectedYear,this.selectedMonth+1,0).getDate();this.calendarBody.innerHTML="",this.selectYearElem.value=this.selectedYear.toString(),this.selectMonthElem.value=this.selectedMonth.toString(),this.daysOfWeek.forEach(((t,e)=>{L("div",this.calendarBody).addClass(`${this.cssPrefix}-weekday`).addClass(0==e||6==e?`${this.cssPrefix}-weekend`:"").text(t)}));for(let e=0;e<t;e++)L("div",this.calendarBody).addClass(`${this.cssPrefix}-day-empty`);const i=new Date;for(let s=1;s<=e;s++){const e=L("div",this.calendarBody).addClass(`${this.cssPrefix}-day`).attr("data-date",s.toString()).text(s.toString()).on("click",(t=>{this.currentDate.setFullYear(this.selectedYear),this.currentDate.setMonth(this.selectedMonth),this.currentDate.setDate(parseInt(t.target.getAttribute("data-date"))),this.dateChanged(this.options.oneClickDateSelection)}));s===i.getDate()&&this.selectedYear===i.getFullYear()&&this.selectedMonth===i.getMonth()&&e.addClass(`${this.cssPrefix}-day-current`),s===this.currentDate.getDate()&&this.selectedYear===this.currentDate.getFullYear()&&this.selectedMonth===this.currentDate.getMonth()&&e.addClass(`${this.cssPrefix}-day-selected`);const n=(t+s-1)%7;0!=n&&6!=n||e.addClass(`${this.cssPrefix}-weekend`),"function"==typeof this.options.onDrawDay&&this.options.onDrawDay.apply(e.toDOM(),[e.toDOM(),new Date(this.selectedYear,this.selectedMonth,s)])}const s=(t+e)%7,n=0==s?0:7-s;for(let t=0;t<n;t++)L("div",this.calendarBody).addClass(`${this.cssPrefix}-day-empty`)}dateChanged(t){super.dateChanged(t),this.rerenderMonth()}}class it{get cssPrefix(){return"kdtp-tp"}constructor(t,e){this.slot=t,this.options=e||{}}setTime(t){this.currentTime=new Date(t)}getTime(){return new Date(this.currentTime)}timeChanged(){this.options.onTimeChanged&&this.options.onTimeChanged(this.currentTime)}}class st extends it{setTime(t){super.setTime(t),this.updateDisplayedTime(),this.hoursInput.valueAsNumber=t.getHours(),this.minutesInput.valueAsNumber=t.getMinutes()}render(){L("div",this.slot).addClass(`${this.cssPrefix}-time`).addChild("span",(t=>this.timeText=t.toDOM())).toDOM();const t=L("div",this.slot).addClass(`${this.cssPrefix}-sliders`);return t.addChild("div",(t=>t.addClass(`${this.cssPrefix}-time-row`).title("Hours").addChild("input",(t=>this.hoursInput=t.addClass(`${this.cssPrefix}-input-hours`).type("range").attr("min","0").attr("max","23").attr("step","1").on("input",(t=>{this.currentTime.setHours(this.hoursInput.valueAsNumber),this.updateDisplayedTime(),this.timeChanged()})).toDOM())))),t.addChild("div",(t=>t.addClass(`${this.cssPrefix}-time-row`).title("Minutes").addChild("input",(t=>this.minutesInput=t.addClass(`${this.cssPrefix}-input-minutes`).type("range").attr("min","0").attr("max","59").attr("step","1").on("input",(t=>{this.currentTime.setMinutes(this.minutesInput.valueAsNumber),this.updateDisplayedTime(),this.timeChanged()})).toDOM())))),this.slot}updateDisplayedTime(){const t=n.getCurrentLocale(),e=this.currentTime.toLocaleString("en"==t?void 0:t,{hour:"numeric",minute:"numeric"});this.timeText.innerText=e}}class nt extends tt{render(){const t=L("div",document.body).addClass(`${this.cssPrefix}`).attr("tabIndex","0").setStyle("position","absolute").setStyle("top","-1000px").setStyle("left","-1000px").on("keydown",(t=>(27===t.keyCode?this.cancel():13===t.keyCode&&this.apply(this.getDateTime()),!1)));this.options.zIndex&&t.setStyle("z-index",`${this.options.zIndex}`),this.slot=t.toDOM(),super.render(),this.renderButtons(),this.globalMouseDownHandler=t=>{let e=window.event||t;return e.srcElement||e.target,!this.slot.contains(e.target)&&(document.removeEventListener("mousedown",this.globalMouseDownHandler,!0),this.cancel()),!0}}renderButtons(){const t=L("div",this.slot).addClass(`${this.cssPrefix}-buttons`).addChild("button",(t=>this.nowButton=t.addClass(`${this.cssPrefix}-button ${this.cssPrefix}-button-now`).text(n.getText("ButtonNow")).on("click",(()=>(this.setDateTime(new Date),this.dateTimeChanged(),!1))).toDOM()));!this.options.showTimePicker&&this.options.oneClickDateSelection||t.addChild("button",(t=>this.submitButton=t.addClass(`${this.cssPrefix}-button ${this.cssPrefix}-button-apply`).text(n.getText("ButtonApply")).on("click",(()=>(this.apply(this.getDateTime()),!1))).toDOM())),t.addChild("button",(t=>this.submitButton=t.addClass(`${this.cssPrefix}-button ${this.cssPrefix}-button-cancel`).text(n.getText("ButtonCancel")).on("click",(()=>(this.cancel(),!1))).toDOM()))}createCalendar(t){return this.calendarSlot=L("div",this.slot).addClass(`${this.cssPrefix}-cal`).toDOM(),new et(this.calendarSlot,t)}createTimePicker(t){return this.timePickerSlot=L("div",this.slot).addClass(`${this.cssPrefix}-tp`).toDOM(),new st(this.timePickerSlot,t)}show(t){if(this.options.showDateTimeInput){this.options.beforeShow&&this.options.beforeShow();const e=T(t||document.body),i=T(t?t.parentElement||t:document.body);this.slot.style.top=i.y+"px",this.slot.style.left=e.x+"px"}else super.show(t),this.slot.focus();setTimeout((()=>{document.addEventListener("mousedown",this.globalMouseDownHandler,!0)}),1)}}var at;!function(t){t[t.Left=1]="Left",t[t.Center=2]="Center",t[t.Right=3]="Right"}(at||(at={}));const ot="kdlg";class rt{openConfirm(t,e,i){const s={title:t,closable:!1,submitable:!0,cancelable:!0,body:`<div id="${ot}-dialog-confirm">${e}</div>`};return i?(s.onSubmit=()=>{i(!0)},s.onCancel=()=>{i(!1)},void this.open(s)):new Promise((t=>{s.onSubmit=()=>{t(!0)},s.onCancel=()=>{t(!1)},this.open(s)}))}openPrompt(t,e,i,s){const n={title:t,submitable:!0,closable:!0,cancelable:!0,submitOnEnter:!0,body:`<div id="${ot}-dialog-form" class="kfrm-form">\n            <div class="kfrm-fields label-above">\n                <label for="${ot}-dialog-form-input" id="${ot}-dialog-form-content">${e}</label>\n                <input type="text" name="${ot}-dialog-form-input" id="${ot}-dialog-form-input" />\n            </div>\n        </div>`,arrangeParents:!1,beforeOpen:()=>{const t=document.getElementById(`${ot}-dialog-form-input`);i&&(t.value=i),t.focus()}},a=t=>{const e=document.getElementById(`${ot}-dialog-form-input`),i=e.value;return i&&i.replace(/\s/g,"").length>0?(t(i),!0):(e.classList.add("eqjs-invalid"),!1)};return s?(n.onSubmit=()=>a(s),n.onCancel=()=>{s("")},void this.open(n)):new Promise((t=>{n.onSubmit=()=>a(t),n.onCancel=()=>{t("")},this.open(n)}))}open(t,e){const i=new lt(t,e),s=t.onDestroy;return t.onDestroy=t=>{this.untrack(t),s&&s(t)},i.open(),this.track(i),i}createSet(t){return new ht(t,this)}untrack(t){const e=rt.openDialogs.indexOf(t);e>=0&&rt.openDialogs.splice(e,1)}track(t){rt.openDialogs.push(t)}openProgress(t){const e=new dt(t),i=t.onDestroy;return t.onDestroy=t=>{this.untrack(t),i&&i(t)},e.open(),this.track(e),e}getAllDialogs(){return Array.from(rt.openDialogs)}closeAllDialogs(){for(const t of Array.from(rt.openDialogs))t.close()}}rt.openDialogs=[];class lt{constructor(t,e){this.options=t,this.submitHandler=t=>(!this.options.onSubmit||!1!==this.options.onSubmit(this,t))&&(this.destroy(),!0),this.cancelHandler=()=>{this.options.onCancel&&this.options.onCancel(this),this.destroy()},this.keydownHandler=t=>13!=t.keyCode||!this.isActiveDialog()||(t.preventDefault(),t.stopPropagation(),!this.submitHandler())||(window.removeEventListener("keydown",this.keydownHandler,!1),!1),this.dialogId=s.generateId("dlg"),this.data=e,this.slot=L("div",document.body).attr("tab-index","-1").data("dialog-id",this.dialogId).addClass(`${ot}-modal`,"is-active").focus().addChild("div",(t=>t.addClass("kdlg-modal-background"))).addChild("div",(i=>this.windowElement=i.addClass(`${ot}-modal-window`).addChild("header",(e=>{this.headerElement=e.addClass(`${ot}-header`).addChild("p",(e=>e.addClass(`${ot}-header-title`).addText(t.title))).toDOM(),!1!==t.closable&&e.addChild("button",(t=>t.addClass(`${ot}-modal-close`).on("click",(()=>{this.cancelHandler()})).focus()))})).addChild("div",(t=>{t.addClass(`${ot}-alert-container`),this.alertElement=t.toDOM()})).addChild("section",(i=>{if(this.bodyElement=i.addClass(`${ot}-body`).toDOM(),"string"==typeof t.body){const s=o.renderLiquidTemplate(t.body,e);i.addHtml(s)}else i.addChildElement(t.body)})).addChild("footer",(e=>{let i=null;i=t.footerAlignment&&t.footerAlignment==at.Center?"align-center":"align-right",this.footerElement=e.addClass(`${ot}-footer`).toDOM(),e.addClass(i),!1!==t.submitable&&(e.addChild("button",(e=>{e.id(this.dialogId+"-btn-submit").addClass("kfrm-button","is-info").addText(t.submitButtonText||n.getText("ButtonOK")),t.recaptchaSiteKey?(e.data("sitekey",t.recaptchaSiteKey),e.addClass("g-recaptcha"),e.on("click",(e=>{grecaptcha?grecaptcha.ready((()=>{grecaptcha.execute(t.recaptchaSiteKey,{action:"submit"}).then((t=>{this.submitHandler(t)}))})):this.submitHandler()}))):e.on("click",(t=>{this.submitHandler()})),e.focus()})),!1!==t.cancelable&&e.addChild("button",(e=>e.id(this.dialogId+"-btn-cancel").addClass("kfrm-button").addText(t.cancelButtonText||n.getText("ButtonCancel")).on("click",(t=>{this.cancelHandler()})))))})).toDOM())).toDOM()}getData(){return this.data}getRootElement(){return this.slot}getSubmitButtonElement(){return document.getElementById(this.dialogId+"-btn-submit")}getCancelButtonElement(){return document.getElementById(this.dialogId+"-btn-cancel")}open(){this.options.beforeOpen&&this.options.beforeOpen(this),L(this.slot).show(),this.options.arrangeParents&&this.arrangeParents(!0);const t=this.slot.querySelector(`.${ot}-modal-window`);this.options.height&&(t.style.height="string"==typeof this.options.height?this.options.height:`${this.options.height}px`),this.options.width&&(t.style.width="string"==typeof this.options.width?this.options.width:`${this.options.width}px`),this.options.submitOnEnter&&window.addEventListener("keydown",this.keydownHandler,!1),this.slot.querySelectorAll("input").forEach((t=>t.addEventListener("input",(()=>{this.clearAlert(),this.options.onInput&&this.options.onInput(this)})))),this.options.onShow&&this.options.onShow(this)}submit(){this.submitHandler()}cancel(){this.cancelHandler()}close(){this.destroy()}disableButtons(){this.slot.querySelectorAll("button").forEach((t=>t.disabled=!0))}enableButtons(){this.slot.querySelectorAll("button").forEach((t=>t.disabled=!1))}showAlert(t,e,i){let s=L("div").addClass(`${ot}-alert ${e||""}`).addChild("span",(t=>t.addClass(`${ot}-alert-closebtn`).text("×").on("click",(t=>{const e=t.target.parentElement;e.parentElement.removeChild(e)})))).addText(t).toDOM();!0===i&&this.clearAlert(),this.alertElement.appendChild(s)}clearAlert(){this.alertElement.innerHTML=""}destroy(){document.querySelectorAll(`[data-dialog-id="${this.dialogId}"]`).length<=0||(this.options.arrangeParents&&this.arrangeParents(!1),document.body.removeChild(this.slot),this.options.submitOnEnter&&window.removeEventListener("keydown",this.keydownHandler,!1),this.options.onDestroy&&this.options.onDestroy(this))}isActiveDialog(){const t=document.documentElement.querySelectorAll(".kdlg-modal");return t[t.length-1]===this.slot}arrangeParents(t){const e=document.documentElement.querySelectorAll(".kdlg-modal-window");for(let i=0;i<e.length-1;i++)if(t){const t=0==i?20:40*i+20;L(e[i]).setStyle("margin-top",`${t}px`).setStyle("margin-left",`${t}px`)}else L(e[i]).removeStyle("margin-top").removeStyle("margin-left")}}class dt extends lt{constructor(t,e){let i,s;const n=L("div").addChild("div",(e=>i=e.text(t.content||"").toDOM())).addChild("div",(e=>{e.addClass(`${ot}-progress-line`).addChild("div",(e=>{s=e.addClass("fill").toDOM(),t.determinated?e.setStyle("width","0%"):e.addClass("indeterminate")}))})).toDOM();super({title:t.title,body:n,beforeOpen:t.beforeOpen,onSubmit:t.onSubmit,width:t.width,height:t.height,submitable:!1,cancelable:!1,closable:!1,onDestroy:t.onDestroy},e),this.contentElement=i,this.progressElement=s}updateContent(t){this.contentElement.innerText=t}updateProgress(t){t=this.in01(t),this.progressElement.style.width=100*t+"%",1===t&&setTimeout((()=>{this.submit()}),500)}in01(t){return t>1?1:t<0?0:t}}class ht{constructor(t,e){this.options=t,this.dialogService=e,this.currentDialog=null,this.currentIndex=0,this.options=t,this.dialogService=e}getCurrent(){return this.currentDialog}openNext(t){return this.open(this.currentIndex+1,t)}openPrev(t){return this.open(this.currentIndex-1,t)}open(t,e){if(t<0?this.currentIndex=0:t>=this.options.length?this.currentIndex=this.options.length-1:this.currentIndex=t,this.currentDialog)try{this.currentDialog.close()}catch(t){}const i=this.options[this.currentIndex];return this.currentDialog=this.dialogService.open(i,e),this.currentDialog}close(){this.currentDialog&&(this.currentDialog.close(),this.currentDialog=null)}}var ct,ut;n.updateDefaultTexts({GridPageInfo:"{FirstPageRecordNum} - {LastPageRecordNum} of {Total} records",GridItemsPerPage:"items per page",ButtonOK:"OK",ButtonCancel:"Cancel",ButtonApply:"Apply",ButtonNow:"Now",LblTotal:"Total"}),function(t){t[t.THIS_WEEK=0]="THIS_WEEK",t[t.LAST_WEEK=1]="LAST_WEEK",t[t.THIS_MONTH=2]="THIS_MONTH",t[t.FIRST_MONTH=3]="FIRST_MONTH",t[t.LAST_MONTH=4]="LAST_MONTH",t[t.THIS_YEAR=5]="THIS_YEAR",t[t.QUARTER_1=6]="QUARTER_1",t[t.QUARTER_2=7]="QUARTER_2",t[t.QUARTER_3=8]="QUARTER_3",t[t.QUARTER_4=9]="QUARTER_4"}(ct||(ct={})),function(t){t.UNDEF="-1",t.TODAY="1",t.YESTERDAY="2",t.TOMORROW="3",t.WEEK_START="4",t.WEEK_END="5",t.MONTH_START="6",t.MONTH_END="7",t.YEAR_START="8",t.YEAR_END="9"}(ut||(ut={}));class gt extends lt{constructor(t){super({title:t.title||"Select a period",body:"",submitButtonText:t.submitButtonText||"OK",cancelButtonText:t.cancelButtonText||"Cancel",submitable:!0,closable:!0,cancelable:!0,beforeOpen:t=>{this.setupDialog()},onSubmit:e=>{"function"==typeof t.onSubmit&&t.onSubmit.apply(e,[this.result(this.from),this.result(this.to)])}}),this.yearRange=t.yearRange,this.weekStart=t.weekStart||0,this.bodyElement.append(this.drawDialog()),this.calendar1.render(),this.calendar2.render(),this.from=this.alignDate(t.start?t.start:new Date),this.to=this.alignDate(t.finish&&this.alignDate(t.finish)>this.from?t.finish:new Date(this.from.getFullYear(),this.from.getMonth(),this.from.getDate()+1)),this.represent()}alignDate(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}drawDialog(){const t=L("div").addClass("tsp__container").addChild("div",(t=>{t.addClass("tsp__intervals").addChild("button",(t=>t.addClass("tsp__button").addText("This Week").on("click",(()=>{this.select(ct.THIS_WEEK)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Last Week").on("click",(()=>{this.select(ct.LAST_WEEK)})))).addChild("button",(t=>t.addClass("tsp__button").addText("This Month").on("click",(()=>{this.select(ct.THIS_MONTH)})))).addChild("button",(t=>t.addClass("tsp__button").addText("First Month").on("click",(()=>{this.select(ct.FIRST_MONTH)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Last Month").on("click",(()=>{this.select(ct.LAST_MONTH)})))).addChild("button",(t=>t.addClass("tsp__button").addText("This Year").on("click",(()=>{this.select(ct.THIS_YEAR)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Quarter 1").on("click",(()=>{this.select(ct.QUARTER_1)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Quarter 2").on("click",(()=>{this.select(ct.QUARTER_2)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Quarter 3").on("click",(()=>{this.select(ct.QUARTER_3)})))).addChild("button",(t=>t.addClass("tsp__button").addText("Quarter 4").on("click",(()=>{this.select(ct.QUARTER_4)}))))})).addChild("div",(t=>{t.addClass("tsp__form").addChild("div",(t=>{t.addClass("tsp__date").addChild("div",(t=>{t.addClass("tsp__label").addChild("label",(t=>{t.addText("Start")})).addChild("select",(t=>{t.addOption({value:ut.UNDEF,title:"Jump To"}).addOption({value:ut.TODAY,title:"Today"}).addOption({value:ut.YESTERDAY,title:"Yesterday"}).addOption({value:ut.TOMORROW,title:"Tomorrow"}).addOption({value:ut.WEEK_START,title:"Week Start"}).addOption({value:ut.WEEK_END,title:"Week End"}).addOption({value:ut.MONTH_START,title:"Month Start"}).addOption({value:ut.MONTH_END,title:"Month End"}).addOption({value:ut.YEAR_START,title:"Year Start"}).addOption({value:ut.YEAR_END,title:"Year End"}),t.on("change",(t=>{this.jump(1,t.target.value,t.target)}))}))})).addChild("div",(t=>{t.addClass("tsp__calendar"),this.calendar1=new et(t.toDOM(),{yearRange:this.yearRange,showDateTimeInput:!0,onDateChanged:t=>{this.from=this.alignDate(t),this.calendar1.setDate(this.from),this.to<this.from&&(this.to=this.from),this.represent()},onDrawDay:(t,e)=>{this.alignDate(e)>=this.from&&this.alignDate(e)<=this.to?t.classList.add("day-in-range"):t.classList.remove("day-in-range")}})}))})).addChild("div",(t=>{t.addClass("tsp__date").addChild("div",(t=>{t.addClass("tsp__label").addChild("label",(t=>{t.addText("Finish")})).addChild("select",(t=>{t.addOption({value:ut.UNDEF,title:"Jump To"}).addOption({value:ut.TODAY,title:"Today"}).addOption({value:ut.YESTERDAY,title:"Yesterday"}).addOption({value:ut.TOMORROW,title:"Tomorrow"}).addOption({value:ut.WEEK_START,title:"Week Start"}).addOption({value:ut.WEEK_END,title:"Week End"}).addOption({value:ut.MONTH_START,title:"Month Start"}).addOption({value:ut.MONTH_END,title:"Month End"}).addOption({value:ut.YEAR_START,title:"Year Start"}).addOption({value:ut.YEAR_END,title:"Year End"}),t.on("change",(t=>{this.jump(2,t.target.value,t.target)}))}))})).addChild("div",(t=>{t.addClass("tsp__calendar"),this.calendar2=new et(t.toDOM(),{yearRange:this.yearRange,showDateTimeInput:!0,onDateChanged:t=>{this.alignDate(t)>=this.from?this.to=this.alignDate(t):this.calendar2.setDate(this.to),this.represent()},onDrawDay:(t,e)=>{this.alignDate(e)>=this.from&&this.alignDate(e)<=this.to?t.classList.add("day-in-range"):t.classList.remove("day-in-range")}})}))}))})).toDOM();return t}setupDialog(){}jump(t,e,i){let s,n=1===t?"from":"to";const a=new Date;switch(e){case ut.TODAY:s=a;break;case ut.YESTERDAY:s=new Date(a.getFullYear(),a.getMonth(),a.getDate()-1);break;case ut.TOMORROW:s=new Date(a.getFullYear(),a.getMonth(),a.getDate()+1);break;case ut.WEEK_START:s=new Date(a.setDate(a.getDate()-a.getDay()+this.weekStart));break;case ut.WEEK_END:s=new Date(a.setDate(a.getDate()-a.getDay()+6+this.weekStart));break;case ut.MONTH_START:s=new Date(a.getFullYear(),a.getMonth(),1);break;case ut.MONTH_END:s=new Date(a.getFullYear(),a.getMonth()+1,0);break;case ut.YEAR_START:s=new Date(a.getFullYear(),0,1);break;case ut.YEAR_END:s=new Date(a.getFullYear(),12,0)}s=this.alignDate(s),i.value=ut.UNDEF,"from"===n?(this.from=s,this.to<this.from&&(this.to=this.from)):s>=this.from&&(this[n]=s),this.represent()}represent(){this.calendar1.setDate(this.from),this.calendar2.setDate(this.to)}select(t){switch(t){case ct.THIS_WEEK:{const t=new Date;this.from=new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay()),this.to=new Date(this.from.getFullYear(),this.from.getMonth(),this.from.getDate()+6);break}case ct.LAST_WEEK:{const t=new Date;this.from=new Date(t.getFullYear(),t.getMonth(),t.getDate()-t.getDay()-7),this.to=new Date(this.from.getFullYear(),this.from.getMonth(),this.from.getDate()+6);break}case ct.THIS_MONTH:{const t=new Date;this.from=new Date(t.getFullYear(),t.getMonth(),1),this.to=new Date(t.getFullYear(),t.getMonth()+1,0);break}case ct.FIRST_MONTH:{const t=new Date;this.from=new Date(t.getFullYear(),0,1),this.to=new Date(t.getFullYear(),1,0);break}case ct.LAST_MONTH:{const t=new Date;this.from=new Date(t.getFullYear(),t.getMonth()-1,1),this.to=new Date(t.getFullYear(),t.getMonth(),0);break}case ct.THIS_YEAR:{const t=new Date;this.from=new Date(t.getFullYear(),0,1),this.to=new Date(t.getFullYear(),12,0);break}case ct.QUARTER_1:{const t=new Date;this.from=new Date(t.getFullYear(),0,1),this.to=new Date(t.getFullYear(),3,0);break}case ct.QUARTER_2:{const t=new Date;this.from=new Date(t.getFullYear(),3,1),this.to=new Date(t.getFullYear(),6,0);break}case ct.QUARTER_3:{const t=new Date;this.from=new Date(t.getFullYear(),6,1),this.to=new Date(t.getFullYear(),9,0);break}case ct.QUARTER_4:{const t=new Date;this.from=new Date(t.getFullYear(),9,1),this.to=new Date(t.getFullYear(),12,0);break}}this.represent()}result(t){const e=this.alignDate(new Date),i={Today:this.alignDate(new Date),Yesterday:this.alignDate(new Date(e.getFullYear(),e.getMonth(),e.getDate()-1)),Tomorrow:this.alignDate(new Date(e.getFullYear(),e.getMonth(),e.getDate()+1)),FirstDayOfMonth:this.alignDate(new Date(e.getFullYear(),e.getMonth(),1)),LastDayOfMonth:this.alignDate(new Date(e.getFullYear(),e.getMonth()+1,0)),FirstDayOfWeek:this.alignDate(new Date(e.setDate(e.getDate()-e.getDay()+this.weekStart))),FirstDayOfYear:this.alignDate(new Date(e.getFullYear(),0,1)),FirstDayOfNextWeek:this.alignDate(new Date(e.setDate(e.getDate()-e.getDay()+this.weekStart+7))),FirstDayOfNextMonth:this.alignDate(new Date(e.getFullYear(),e.getMonth()+1,1)),FirstDayOfNextYear:this.alignDate(new Date(e.getFullYear()+1,0,1))};for(let e in i)if(console.log(i[e],t),i[e].getTime()===t.getTime())return`\${{${e}}}`;return n.dateTimeToStr(t,n.getLocaleSettings().editDateFormat)}}const pt=t=>new gt(t).open(),mt=new rt;
//# sourceMappingURL=easydata.ui.es.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css ***!
  \******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".kdlg-modal,.kdlg-modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.kdlg-modal-background{background-color:hsla(0,0%,4%,.5)}.kdlg-modal{align-items:center;display:none;flex-direction:column;font-family:Roboto,Arial,serif;font-size:16px;font-weight:400;justify-content:center;line-height:1.5;overflow:hidden;position:fixed;z-index:9999}.kdlg-modal.is-active{display:flex}.kdlg-modal-window,.kdlg-modal-window.size-default{display:flex;flex-direction:column;margin:0 20px;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible;position:relative;width:100%}@media print,screen and (min-width:481px){.kdlg-modal-window.size-small{margin:0 auto;width:400px}}@media print,screen and (min-width:769px){.kdlg-modal-window,.kdlg-modal-window.size-default{margin:0 auto;width:640px}.kdlg-modal-window.size-large,.kdlg-modal-window.size-xl{margin:0 20px;width:100%}}@media print,screen and (min-width:1025px){.kdlg-modal-window.size-large{margin:0 auto;width:900px}}@media print,screen and (min-width:1383px){.kdlg-modal-window.size-xl{margin:0 auto;width:1200px}}.kdlg-footer,.kdlg-header{align-items:center;background-color:#fff;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.kdlg-footer.align-right{justify-content:flex-end}.kdlg-footer.align-center{justify-content:center}.kdlg-header{border-top-left-radius:6px;border-top-right-radius:6px}.kdlg-header.has-border{border-bottom:1px solid #dbdbdb}.kdlg-footer{border-bottom-left-radius:6px;border-bottom-right-radius:6px;color:initial;height:auto;margin:unset;min-height:10px}.kdlg-footer.has-border{border-top:1px solid #dbdbdb}.kdlg-header-title{color:#363636;flex-grow:1;flex-shrink:0;font-size:1.6em;line-height:1;margin:0;padding:0}.kdlg-modal-close{-webkit-touch-callout:none;-moz-appearance:none;-webkit-appearance:none;background-color:hsla(0,0%,4%,.2);border:none;border-radius:290486px;cursor:pointer;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;outline:0;pointer-events:auto;position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;width:24px}.kdlg-modal-close:after,.kdlg-modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.kdlg-modal-close:before{height:2px;width:50%}.kdlg-modal-close:after{height:50%;width:2px}.kdlg-modal-close:focus,.kdlg-modal-close:hover{background-color:rgba(255,1,1,.48)}.kdlg-body{-webkit-overflow-scrolling:touch;background-color:#fff;color:#4a4a4a;flex-grow:1;flex-shrink:1;font-size:1em;overflow:auto;padding:20px}.kdlg-alert-container{max-height:150px;overflow-y:auto}.kdlg-alert{background-color:#e2f5ff;color:#004aef;min-height:60px;min-width:1px;padding:20px}.kdlg-alert.success{background-color:#efffe6;color:#0c7905}.kdlg-alert.warning{background-color:#fff7e5;color:#e49e02}.kdlg-alert.error{background-color:#ffe2e2;color:red}.kdlg-alert-closebtn{cursor:pointer;float:right;font-size:22px;line-height:20px;margin-left:15px;transition:.3s}.kdlg-progress-line{background-color:#e0e0e0;border-radius:3px;box-shadow:inset 0 1px 3px rgba(0,0,0,.2);overflow:hidden;padding:3px;width:100%}.kdlg-progress-line .fill{background-color:#659cef;border-radius:3px;display:block;height:22px;transition:width .5s ease-in-out}.kdlg-progress-line .fill.indeterminate{animation:kdlg-progress-line-loading 2s linear infinite;left:-200px;position:relative;transition:none;width:200px}@keyframes kdlg-progress-line-loading{0%{left:-200px}to{left:120%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-forms.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-forms.css ***!
  \*****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".kfrm-buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.kfrm-buttons.align-right{justify-content:flex-end}.kfrm-buttons.align-center{justify-content:center}.kfrm-buttons:last-child{margin-bottom:-.5rem}.kfrm-buttons .kfrm-button{margin-bottom:.5rem}.kfrm-button{-webkit-touch-callout:none;align-items:center;-moz-appearance:none;-webkit-appearance:none;background-color:#fff;border:1px solid #dbdbdb;border-radius:4px;box-shadow:none;color:#363636;cursor:pointer;display:inline-flex;font-size:1em;height:2.5em;justify-content:center;line-height:1.5;padding:calc(.5em - 1px) 1em;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:top;white-space:nowrap}.kfrm-button:not(:last-child){margin-right:.5em}.kfrm-button.is-hovered,.kfrm-button:hover{border-color:#b5b5b5;color:#363636}.kfrm-button.is-focused,.kfrm-button:focus{border-color:#3273dc;color:#363636;outline:none}.kfrm-button.is-focused:not(:active),.kfrm-button:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.kfrm-button.is-active,.kfrm-button:active{border-color:#4a4a4a;color:#363636}.kfrm-button[disabled],fieldset[disabled] .kfrm-button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;cursor:not-allowed;opacity:.5}.kfrm-button.is-loading{color:transparent!important;pointer-events:none}.kfrm-button.is-loading:after{animation:spinAround .5s linear infinite;border-color:transparent transparent #dbdbdb #dbdbdb;border-radius:290486px;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;left:calc(50% - .5em);position:absolute!important;top:calc(50% - .5em);width:1em}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.kfrm-button.size-small,.kfrm-buttons.size-small .kfrm-button:not(.size-default):not(.size-medium):not(.size-large){border-radius:2px;font-size:.75rem}.kfrm-button.size-default\r\n.kfrm-buttons.size-default .kfrm-button:not(.size-small):not(.size-medium):not(.size-large){font-size:1rem}.kfrm-button.size-medium,.kfrm-buttons.size-medium .kfrm-button:not(.size-small):not(.size-default):not(.size-large){font-size:1.25rem}.kfrm-button.size-large\r\n.kfrm-buttons.size-large .kfrm-button:not(.size-small):not(.size-default):not(.size-medium){font-size:1.5rem}.kfrm-button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.kfrm-button.is-white.is-hovered,.kfrm-button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.kfrm-button.is-white.is-focused,.kfrm-button.is-white:focus{border-color:transparent;color:#0a0a0a}.kfrm-button.is-white.is-focused:not(:active),.kfrm-button.is-white:focus:not(:active){box-shadow:0 0 0 .125em hsla(0,0%,59%,.15)}.kfrm-button.is-white.is-active,.kfrm-button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.kfrm-button.is-dark{background-color:#363636e6;border-color:transparent;color:#fff}.kfrm-button.is-dark.is-hovered,.kfrm-button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#fff}.kfrm-button.is-dark.is-focused,.kfrm-button.is-dark:focus{border-color:transparent;color:#fff}.kfrm-button.is-dark.is-focused:not(:active),.kfrm-button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.kfrm-button.is-dark.is-active,.kfrm-button.is-dark:active{background-color:#292929;border-color:transparent;color:#fff}.kfrm-button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.kfrm-button.is-primary.is-hovered,.kfrm-button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.kfrm-button.is-primary.is-focused,.kfrm-button.is-primary:focus{border-color:transparent;color:#fff}.kfrm-button.is-primary.is-focused:not(:active),.kfrm-button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.kfrm-button.is-primary.is-active,.kfrm-button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.kfrm-button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.kfrm-button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.kfrm-button.is-link.is-hovered,.kfrm-button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.kfrm-button.is-link.is-focused,.kfrm-button.is-link:focus{border-color:transparent;color:#fff}.kfrm-button.is-link.is-focused:not(:active),.kfrm-button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.kfrm-button.is-link.is-active,.kfrm-button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.kfrm-button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.kfrm-button.is-info{background-color:#3298dc;border-color:transparent;color:#fff}.kfrm-button.is-info.is-hovered,.kfrm-button.is-info:hover{background-color:#2793da;border-color:transparent;color:#fff}.kfrm-button.is-info.is-focused,.kfrm-button.is-info:focus{border-color:transparent;color:#fff}.kfrm-button.is-info.is-focused:not(:active),.kfrm-button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,152,220,.25)}.kfrm-button.is-info.is-active,.kfrm-button.is-info:active{background-color:#238cd1;border-color:transparent;color:#fff}.kfrm-button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.kfrm-button.is-success{background-color:#48c774;border-color:transparent;color:#fff}.kfrm-button.is-success.is-hovered,.kfrm-button.is-success:hover{background-color:#3ec46d;border-color:transparent;color:#fff}.kfrm-button.is-success.is-focused:not(:active),.kfrm-button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(72,199,116,.25)}.kfrm-button.is-success.is-active,.kfrm-button.is-success:active{background-color:#3abb67;border-color:transparent;color:#fff}.kfrm-button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.kfrm-button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.kfrm-button.is-warning.is-hovered,.kfrm-button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.kfrm-button.is-warning.is-focused,.kfrm-button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.kfrm-button.is-warning.is-focused:not(:active),.kfrm-button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.kfrm-button.is-warning.is-active,.kfrm-button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.kfrm-button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.kfrm-button.is-danger{background-color:#f14668;border-color:transparent;color:#fff}.kfrm-button.is-danger.is-hovered,.kfrm-button.is-danger:hover{background-color:#f03a5f;border-color:transparent;color:#fff}.kfrm-button.is-danger.is-focused,.kfrm-button.is-danger:focus{border-color:transparent;color:#fff}.kfrm-button.is-danger.is-focused:not(:active),.kfrm-button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(241,70,104,.25)}.kfrm-button.is-danger.is-active,.kfrm-button.is-danger:active{background-color:#ef2e55;border-color:transparent;color:#fff}.kfrm-button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.kfrm-row{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.kfrm-row:not(:last-child){margin-bottom:.75rem}@media print,screen and (min-width:769px){.kfrm-row{display:flex;flex-wrap:wrap}.kdlg-modal-window.size-small .kfrm-row{display:block}.kfrm-column.size-1{flex:none;width:8.33333%}.kfrm-column.size-2{flex:none;width:16.66667%}.kfrm-column.size-3{flex:none;width:25%}.kfrm-column.size-4{flex:none;width:33.33333%}.kfrm-column.size-5{flex:none;width:41.66667%}.kfrm-column.size-6{flex:none;width:50%}.kfrm-column.size-7{flex:none;width:58.33333%}.kfrm-column.size-8{flex:none;width:66.66667%}.kfrm-column.size-9{flex:none;width:75%}.kfrm-column.size-10{flex:none;width:83.33333%}.kfrm-column.size-11{flex:none;width:91.66667%}.kfrm-column.size-12{flex:none;width:100%}}.kfrm-column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.kfrm-form .errors-block{color:red}.kfrm-form .control{box-sizing:border-box;clear:both;display:inline-flex;max-width:100%;padding:0!important;position:relative;text-align:inherit;width:100%}.kfrm-form .icon{align-items:center;display:inline-flex;height:1.5em;justify-content:center;width:1.5em}.kfrm-form .control.has-icons-left .select select,.kfrm-form .control.has-icons-left input{padding-left:2.5em}.kfrm-form .control.has-icons-right .select select,.kfrm-form .control.has-icons-right input{padding-right:2.5em}.kfrm-form .control.has-icons-left .icon.is-left{left:0}.kfrm-form .control.has-icons-right .icon.is-right{right:0}.kfrm-form .control .icon{color:#dbdbdb;height:2.5em;pointer-events:none;position:absolute;top:0;width:2.5em;z-index:4}.kfrm-form .control .icon.is-clickable{pointer-events:auto}.kfrm-form .control .icon.is-clickable:hover{color:#4a4a4a;cursor:pointer}.kfrm-form input.is-valid:not([type=checkbox]),.kfrm-form input.is-valid:not([type=checkbox]):hover{border-color:green}.kfrm-form input.is-invalid:not([type=checkbox]),.kfrm-form input.is-invalid:not([type=checkbox]):hover{border-color:red}.kfrm-form input:not([type=checkbox]):-moz-read-only{background-color:#e9ecef;opacity:1}.kfrm-form input:not([type=checkbox]):read-only{background-color:#e9ecef;opacity:1}.kfrm-form input:not([type=checkbox]),.kfrm-form textarea,.kfrm-select select{align-items:center;-moz-appearance:none;-webkit-appearance:none;background-color:#fff;border:1px solid transparent;border-color:#dbdbdb;border-radius:4px;box-shadow:none;color:#363636;display:inline-flex;font-size:1em;height:2.5em;justify-content:flex-start;line-height:1.5;outline:0;padding:calc(.5em - 1px) calc(.75em - 1px);position:relative;vertical-align:top}.kfrm-form input:not([type=checkbox]),.kfrm-form textarea{box-shadow:inset 0 .0625em .125em hsla(0,0%,4%,.05);max-width:100%;width:100%}.kfrm-form input:not([type=checkbox]).is-hovered,.kfrm-form input:not([type=checkbox]):hover,.kfrm-form textarea.is-hovered,.kfrm-form textarea:hover,.kfrm-select select.is-hovered,.kfrm-select select:hover{border-color:#b5b5b5}.kfrm-form input:not([type=checkbox]).is-active,.kfrm-form input:not([type=checkbox]).is-focused,.kfrm-form input:not([type=checkbox]):active,.kfrm-form input:not([type=checkbox]):focus,.kfrm-form textarea.is-active,.kfrm-form textarea.is-focused,.kfrm-form textarea:active,.kfrm-form textarea:focus,.kfrm-select select.is-active,.kfrm-select select.is-focused,.kfrm-select select:active,.kfrm-select select:focus{border-color:#3273dc;box-shadow:0 0 0 .125em rgba(50,115,220,.25);outline:0}.kfrm-select{display:inline-block;max-width:100%;padding:0;position:relative;vertical-align:top;width:-moz-max-content;width:max-content}.kfrm-select.full-width{width:100%}.kfrm-select select::-ms-expand{display:none!important}.kfrm-select:not(.is-multiple){height:2.5em}.kfrm-select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:0}.kfrm-select select:not([multiple]){padding-right:2.5em}.kfrm-select.kfrm-select.full-width select:not([multiple]){width:100%}.kfrm-select:not(.is-multiple):not(.is-loading):after{border:3px solid #3273dc;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.425em;margin-top:-.5em;pointer-events:none;position:absolute;right:.7em;top:50%;transform:rotate(-45deg);transform-origin:center;width:.425em;z-index:4}.kfrm-form textarea{display:block;max-width:100%;min-width:100%;padding:calc(.75em - 1px);resize:vertical}.kfrm-form textarea:not([rows]){max-height:40em;min-height:8em}.kfrm-form{font-size:16px}.kfrm-form fieldset{border:1px solid #dbdbdb;border-radius:6px;padding:20px}.kfrm-form fieldset>legend{font-size:16px;font-weight:600;margin-bottom:0;padding-inline-end:10px;padding-inline-start:10px;width:auto}.kfrm-break,.kfrm-break-50{margin-top:50px}.kfrm-break-10{margin-top:10px}.kfrm-break-20{margin-top:20px}.kfrm-break-30{margin-top:30px}.kfrm-break-40{margin-top:40px}.kfrm-break-60{margin-top:60px}.kfrm-break-70{margin-top:70px}.kfrm-break-80{margin-top:10px}.kfrm-fields,.kfrm-fields.col-a{grid-gap:10px;display:grid;grid-auto-rows:auto;grid-template-columns:auto}.kfrm-fields:not(:last-child){margin-bottom:.75rem}.kfrm-fields>label{padding:.5em 0}.kfrm-fields .label-compact{font-size:.9em}fieldset .kfrm-fields>label{margin:0;padding:0}.kfrm-fields>label:not(.checkbox){font-weight:600}.kfrm-fields.label-above>label:not(.checkbox){font-weight:500;margin-bottom:-.5em;padding:.5em 0 0}.kfrm-fields.label-align-right>label:not(.checkbox){text-align:right}.kfrm-fields.col-a-1{grid-template-columns:auto 1fr}.kfrm-fields.col-1-a{grid-template-columns:1fr auto}.kfrm-fields.col-a-a{grid-template-columns:auto auto}.kfrm-fields.col-1-1{grid-template-columns:1fr 1fr}.kfrm-fields.col-1-2{grid-template-columns:1fr 2fr}.kfrm-fields.col-1-3{grid-template-columns:1fr 3fr}.kfrm-fields.col-2-1{grid-template-columns:2fr 1fr}.kfrm-fields.col-3-1{grid-template-columns:3fr 1fr}.kfrm-fields.col-2-3{grid-template-columns:2fr 3fr}.kfrm-fields.col-3-2{grid-template-columns:3fr 2fr}.kfrm-fields.is-horizontal{display:flex;padding:0}.kfrm-fields.is-horizontal.align-right{justify-content:flex-end}.kfrm-fields.is-horizontal.align-center{justify-content:center}.kfrm-fields.is-horizontal.align-evenly{justify-content:space-evenly}.kfrm-fields.is-horizontal>label:not(:first-child){margin-left:.5rem}.kfrm-fields-ie{display:flex;flex-direction:column;font-size:16px}.kfrm-field-ie{display:flex;margin-bottom:1em}.kfrm-field-ie>:first-child{margin-right:20px}.kfrm-field-ie>label{padding:.5em 0}.kfrm-fields-ie.col-ie-1-1>.kfrm-field-ie>:first-child{flex:0 0 50%}.kfrm-fields-ie.col-ie-1-2>.kfrm-field-ie>:first-child{flex:0 0 33.3333%}.kfrm-fields-ie.col-ie-1-3>.kfrm-field-ie>:first-child{flex:0 0 25%}.kfrm-fields-ie.col-ie-1-4>.kfrm-field-ie>:first-child{flex:0 0 20%}.kfrm-fields-ie.label-align-right .kfrm-field-ie>:first-child{text-align:right}.kfrm-fields-ie.label-above .kfrm-field-ie>:first-child:not(.checkbox){margin-bottom:-.5em;padding:.5em 0 0}.kfrm-field-ie>label:not(.checkbox),.kfrm-fields-ie>label:not(.checkbox){font-weight:600}.kfrm-fields-ie.is-horizontal{display:flex;flex-direction:row;padding:0!important}.kfrm-fields-ie.kfrm-fields-ie.is-horizontal>:not(.kfrm-select){padding:.5em}.kfrm-fields-ie.is-horizontal>:not(:first-child){margin-left:1em}.kfrm-fields-ie>label{padding-left:0!important;padding-right:0!important}.kfrm-field>label{padding-right:.5em}.kfrm-callout{font-size:1.2em;text-align:center}.kdtp{background-color:#fff;border:1px solid silver;border-radius:8px;box-shadow:4px 8px 15px 0 rgba(0,0,0,.16);font-size:.7rem;outline:none;overflow:hidden;z-index:100000}.kdtp-buttons{display:flex;flex-direction:row;justify-content:space-between;margin-top:1em}.kdtp-button{background-color:#09c;border:none;color:#fff;cursor:pointer;flex:1;font-weight:500;height:2.5em;text-align:center;text-decoration:none}.kdtp-button:active,.kdtp-button:focus{outline:0}.kdtp-button-now{background-color:#fff;border:none;color:#09c}.kdtp-button:nth-child(2){border-top-left-radius:8px}.kdtp-button:not(:first-child){margin-left:2px}.kdtp-cal{padding:0}.kdtp-cal *{outline:none!important}.kdtp-cal-body{grid-gap:.5em;-ms-grid-rows:1fr .5em 1fr .5em 1fr .5em 1fr .5em 1fr .5em 1fr .5em 1fr;box-sizing:border-box;display:grid;grid-template-columns:repeat(7,minmax(1em,1fr));padding:0 12px}.kdtp-cal-body>:first-child{-ms-grid-column:1;-ms-grid-row:1}.kdtp-cal-body>:nth-child(2){-ms-grid-column:3;-ms-grid-row:1}.kdtp-cal-body>:nth-child(3){-ms-grid-column:5;-ms-grid-row:1}.kdtp-cal-body>:nth-child(4){-ms-grid-column:7;-ms-grid-row:1}.kdtp-cal-body>:nth-child(5){-ms-grid-column:9;-ms-grid-row:1}.kdtp-cal-body>:nth-child(6){-ms-grid-column:11;-ms-grid-row:1}.kdtp-cal-body>:nth-child(7){-ms-grid-column:13;-ms-grid-row:1}.kdtp-cal-body>:nth-child(8){-ms-grid-column:1;-ms-grid-row:3}.kdtp-cal-body>:nth-child(9){-ms-grid-column:3;-ms-grid-row:3}.kdtp-cal-body>:nth-child(10){-ms-grid-column:5;-ms-grid-row:3}.kdtp-cal-body>:nth-child(11){-ms-grid-column:7;-ms-grid-row:3}.kdtp-cal-body>:nth-child(12){-ms-grid-column:9;-ms-grid-row:3}.kdtp-cal-body>:nth-child(13){-ms-grid-column:11;-ms-grid-row:3}.kdtp-cal-body>:nth-child(14){-ms-grid-column:13;-ms-grid-row:3}.kdtp-cal-body>:nth-child(15){-ms-grid-column:1;-ms-grid-row:5}.kdtp-cal-body>:nth-child(16){-ms-grid-column:3;-ms-grid-row:5}.kdtp-cal-body>:nth-child(17){-ms-grid-column:5;-ms-grid-row:5}.kdtp-cal-body>:nth-child(18){-ms-grid-column:7;-ms-grid-row:5}.kdtp-cal-body>:nth-child(19){-ms-grid-column:9;-ms-grid-row:5}.kdtp-cal-body>:nth-child(20){-ms-grid-column:11;-ms-grid-row:5}.kdtp-cal-body>:nth-child(21){-ms-grid-column:13;-ms-grid-row:5}.kdtp-cal-body>:nth-child(22){-ms-grid-column:1;-ms-grid-row:7}.kdtp-cal-body>:nth-child(23){-ms-grid-column:3;-ms-grid-row:7}.kdtp-cal-body>:nth-child(24){-ms-grid-column:5;-ms-grid-row:7}.kdtp-cal-body>:nth-child(25){-ms-grid-column:7;-ms-grid-row:7}.kdtp-cal-body>:nth-child(26){-ms-grid-column:9;-ms-grid-row:7}.kdtp-cal-body>:nth-child(27){-ms-grid-column:11;-ms-grid-row:7}.kdtp-cal-body>:nth-child(28){-ms-grid-column:13;-ms-grid-row:7}.kdtp-cal-body>:nth-child(29){-ms-grid-column:1;-ms-grid-row:9}.kdtp-cal-body>:nth-child(30){-ms-grid-column:3;-ms-grid-row:9}.kdtp-cal-body>:nth-child(31){-ms-grid-column:5;-ms-grid-row:9}.kdtp-cal-body>:nth-child(32){-ms-grid-column:7;-ms-grid-row:9}.kdtp-cal-body>:nth-child(33){-ms-grid-column:9;-ms-grid-row:9}.kdtp-cal-body>:nth-child(34){-ms-grid-column:11;-ms-grid-row:9}.kdtp-cal-body>:nth-child(35){-ms-grid-column:13;-ms-grid-row:9}.kdtp-cal-body>:nth-child(36){-ms-grid-column:1;-ms-grid-row:11}.kdtp-cal-body>:nth-child(37){-ms-grid-column:3;-ms-grid-row:11}.kdtp-cal-body>:nth-child(38){-ms-grid-column:5;-ms-grid-row:11}.kdtp-cal-body>:nth-child(39){-ms-grid-column:7;-ms-grid-row:11}.kdtp-cal-body>:nth-child(40){-ms-grid-column:9;-ms-grid-row:11}.kdtp-cal-body>:nth-child(41){-ms-grid-column:11;-ms-grid-row:11}.kdtp-cal-body>:nth-child(42){-ms-grid-column:13;-ms-grid-row:11}.kdtp-cal-body>:nth-child(43){-ms-grid-column:1;-ms-grid-row:13}.kdtp-cal-body>:nth-child(44){-ms-grid-column:3;-ms-grid-row:13}.kdtp-cal-body>:nth-child(45){-ms-grid-column:5;-ms-grid-row:13}.kdtp-cal-body>:nth-child(46){-ms-grid-column:7;-ms-grid-row:13}.kdtp-cal-body>:nth-child(47){-ms-grid-column:9;-ms-grid-row:13}.kdtp-cal-body>:nth-child(48){-ms-grid-column:11;-ms-grid-row:13}.kdtp-cal-body>:nth-child(49){-ms-grid-column:13;-ms-grid-row:13}.kdtp-cal-header-input{background:#fff;border:1px solid silver;color:#262626;font-size:1em;height:100%;outline:none;padding:2px 5px;width:100%}.kdtp-cal-header-input.error{border-color:red}.kdtp-cal-header{background-color:#09c;color:#fff;font-size:1.2em;font-weight:600;height:2em;line-height:2em;text-align:center}.kdtp-cal-nav{display:flex;line-height:1em;margin:.7em 0;padding:0}.kdtp-cal-nav-next,.kdtp-cal-nav-prev{color:#777;flex:0 0 auto;font-size:3em;font-weight:600;text-align:center;width:1em}.kdtp-cal-nav-next:hover,.kdtp-cal-nav-prev:hover{color:#09c;cursor:pointer}.kdtp-cal-nav-selectors{display:flex;flex:1 1 auto;font-size:1.2em;margin:0 .5em}.kdtp-cal-nav-month{flex:1 1 auto;margin-right:.5em}.kdtp-cal-nav-year{flex:0 0 auto}.kdtp-cal-nav-selectors select{border:none;color:#777;font-weight:600}.kdtp-cal-nav-selectors select:hover{color:#09c}.kdtp-cal-nav-selectors select:hover option{color:#777}.kdtp-cal-weekday{align-items:center;color:#262626;display:flex;font-size:.8em;font-weight:600;height:1.8em;justify-content:center}.kdtp-cal-weekday.kdtp-cal-weekend{color:#ff685d}.kdtp-cal-day,.kdtp-cal-day-empty{align-items:center;border-radius:4px;color:#262626;display:flex;height:1.5em;justify-content:center}.kdtp-cal-day.kdtp-cal-weekend{color:#ff685d;font-weight:700}.kdtp-cal-day-selected,.kdtp-cal-day:hover{border:2px solid #09c;cursor:pointer;font-weight:700}.kdtp-cal-day-current{background-color:#d3d3d3}.kdtp-tp{-ms-flex-align:center;align-items:center;-webkit-align-items:center;display:flex;display:-ms-flexbox;margin-top:1em;padding:0 1em}.kdtp-tp-time{border:2px solid #09c;border-radius:6px;color:#777;flex:0 0 5em;-webkit-flex:0 0 5em;-ms-flex:0 0 5em;font-weight:600;margin-right:.5em;text-align:center}.kdtp-tp-sliders{flex:1 1 auto;-webkit-flex:1 1 auto;-ms-flex:1 1 auto}.kdtp-tp-time-row{align-items:center;background:linear-gradient(90deg,#c5c5c5,#c5c5c5) left 50%/100% 1px no-repeat;display:flex;height:1.5em}.kdtp-tp-time-row input[type=range]{-webkit-appearance:none;background:0 0;cursor:pointer;flex:1;height:100%;margin:0;padding:0}.kdtp-tp-time-row input[type=range]:hover::-webkit-slider-thumb{border-color:#777}.kdtp-tp-time-row input[type=range]:hover::-moz-range-thumb{border-color:#777}.kdtp-tp-time-row input[type=range]:hover::-ms-thumb{border-color:#777}.kdtp-tp-time-row input[type=range]:focus{outline:0}.kdtp-tp-time-row input[type=range]:focus::-webkit-slider-thumb{background:#09c;border-color:#09c}.kdtp-tp-time-row input[type=range]:focus::-moz-range-thumb{background:#09c;border-color:#09c}.kdtp-tp-time-row input[type=range]:focus::-ms-thumb{background:#09c;border-color:#09c}.kdtp-tp-time-row input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:#fff;border:1px solid #c5c5c5;border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;margin-top:-6px;-webkit-transition:background .2s;transition:background .2s;width:12px}.kdtp-tp-time-row input[type=range]::-moz-range-thumb{background:#fff;border:1px solid #c5c5c5;border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-moz-transition:background .2s;transition:background .2s;width:12px}.kdtp-tp-time-row input[type=range]::-ms-thumb{background:#fff;border:1px solid #c5c5c5;border-radius:3px;box-sizing:border-box;cursor:pointer;height:12px;-ms-transition:background .2s;transition:background .2s;width:12px}.kdtp-tp-time-row input[type=range]::-webkit-slider-runnable-track{background:0 0;border:none;color:transparent;cursor:pointer;height:1px}.kdtp-tp-time-row input[type=range]::-moz-range-track{background:0 0;border:none;color:transparent;cursor:pointer;height:1px}.kdtp-tp-time-row input[type=range]::-ms-track{background:0 0;border:none;color:transparent;cursor:pointer;height:1px}.kdtp-tp-time-row input[type=range]::-ms-fill-lower,.kdtp-tp-time-row input[type=range]::-ms-fill-upper{background:0 0}:root{--tsp-border-color:#e8e8e8;--tsp-control-background:#ebebeb;--tsp-control-text-color:#000}.tsp__container{display:flex;flex-flow:row}.tsp__intervals{border-right:1px solid var(--tsp-border-color);display:flex;flex-flow:column;padding-right:10px}.tsp__button{align-items:center;background-color:var(--tsp-control-background);border:1px solid transparent;box-sizing:border-box;color:var(--tsp-control-text-color);cursor:pointer;display:inline-flex;font-size:12px;font-weight:400;justify-content:center;line-height:1.2;margin-bottom:4px;opacity:.8;outline:none;overflow:visible;padding:4px 12px;position:relative;text-align:center;transition:all .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.tsp__button:hover{border-color:var(--tsp-border-color);opacity:1}.tsp__button:active{opacity:.9}.tsp__form{display:flex;flex-flow:row nowrap;width:100%}.tsp__date{display:flex;flex-flow:column;padding:0 10px;width:50%}.tsp__label{display:flex;flex-flow:row nowrap}.tsp__label label{font-weight:700}.tsp__label select{border-color:var(--tsp-border-color);font-size:12px;margin-left:auto}.tsp__calendar{margin:10px 0;width:230px}.tsp__calendar .kdtp-cal-header input{border:1px solid var(--tsp-border-color)!important}.tsp__calendar{display:flex;flex-flow:column}.tsp__calendar .kdtp-cal-body{margin:10px 0!important}.tsp__calendar .kdtp-cal-header{margin-bottom:10px!important}.tsp__calendar .kdtp-cal-nav-selectors{font-size:16px!important}.tsp__calendar .kdtp-cal-body{grid-gap:2px!important;padding:0!important}.tsp__calendar .kdtp-cal-nav-next,.tsp__calendar .kdtp-cal-nav-prev{font-size:2em!important;width:auto!important}.tsp__calendar .kdtp-cal-body{border:1px solid var(--tsp-border-color);padding:5px!important}.tsp__calendar .kdtp-cal-day{border:1px solid var(--tsp-border-color);font-size:14px;height:30px;width:30px}.tsp__calendar .kdtp-cal-day-current{background:#3ab93c;color:#fff}.tsp__calendar .day-in-range{background:#c6e3ff!important}.kdlg-footer{border-top:1px solid var(--tsp-border-color)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-grid.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-grid.css ***!
  \****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".keg-container *{outline:none}.keg-container,.keg-header{overflow:hidden}.keg-header{background-color:#f8f8f8;border-bottom:1px solid #babfc7;flex:0 0 auto}.keg-root{border:1px solid #babfc7;display:flex;flex-direction:column;font-family:Roboto,Arial,serif}.keg-body{flex:1;overflow:hidden}.keg-body-viewport{border:1px solid transparent;height:100%;overflow-x:auto;overflow-y:auto}.keg-body-viewport:focus,.keg-body-viewport:focus-within{border:1px solid #838383}.keg-header-row{color:rgba(0,0,0,.54);font-weight:600;min-height:30px}.keg-header-row,.keg-row{display:flex;font-size:12px}.keg-row{align-items:center;background-color:#fff;border-color:#dde2eb;border-bottom:solid #dde2eb;border-width:1px;color:#181d1f;height:26px;outline:none}.keg-row:not(.keg-row-active):not(.keg-row-totals):hover{background-color:#fffae9}.keg-row-odd{background-color:#fcfcfc}.keg-row-active{background-color:#fff3cf}.keg-cell,.keg-header-cell{display:flex}.keg-header-cell{align-items:center;padding:2px 6px;position:relative}.keg-header-cell-resize{align-items:center;display:flex;height:100%;position:absolute;right:-4px;top:0;width:8px;z-index:2}.keg-header-cell-resize:after{background-color:rgba(186,191,199,.5);content:\"\";display:block;height:50%;left:calc(50% - 1px);position:absolute;top:25%;width:2px;z-index:1}.keg-header-cell-label{-ms-word-wrap:keep-all;text-align:center;width:100%;word-break:keep-all}.keg-cell{align-items:center;border-right:solid transparent;height:100%;outline:none;padding:0 4px 0 10px}.keg-cell-value{max-height:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.keg-cell-align-left,.keg-cell-value-align-left{text-align:left}.keg-cell-align-right,.keg-cell-value-align-right{text-align:right}.keg-cell-align-center,.keg-cell-value-align-center{text-align:center}.keg-cell-value-bool{margin:0 auto;width:auto}.keg-cell-value-true:before{color:#28a745;content:\"\\2714\";font-size:16px}.keg-cell-value-false:before{color:#dc3545;content:\"\\2716\";font-size:16px}.keg-header-btn-plus{height:23px;position:relative;width:23px}.keg-header-btn-plus a{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAWCAYAAABQUsXJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAApBJREFUeNrUljFME1EYx3/v3buWNhCGemKo0eGUxEUHEtx0YHBAExc3o4sJ0Z04aeLkwOaCOjIocVLj5MSqYZEYBwiDBW2QGG21QHvX9xwobY+29o5eB/7b97+77/vf9/7ve08sLS2dBmaB64BNb9gE5oDZjM324xw8/wrYpIEZ4C4w0mMND3gNzKia8BvEgxHgAfALeNLE36nxVgw17H29EpgiXljA5AFuMibhzZiSQIL4kegSx1JDAjqU0TwP3/fDJtZd4lYIYNeHbQ9MuBoyzFtSSlzXJZvNorWmL6hoZi5meXrFJWXLUD8QSrwQAsdxyGQy/RPvaW6fzTB9ziEpRahPZJT81WqVvkHA78pefhPyE8kRhupkk06xECIQG2MO12gBqrmOFOxHthTYUrBPaAPVNnVUu6niui6O47S8PDg4yMTERIBbWVmhUCggpYzk70unhlm8Ntb28datC4F47ssW996vQdr+v3ghBL7vUy6XA3wymURrTaVSCXT+UBtYwI6vWS001TCGk0MJUpZkrVhGNzX6x46/t1TdOq+UYmNjg/X19caRaVmMj49TKpVYXl7Gtu3AGI3UdQAl+bj5l7H5Tw1ux2Px5nkujw5xZuEz7FbrtsESkFYtO1l1muuB896y6quilKrHPUEKSDbl0QZVG5HDCYuCoSG+wwg60tMmknilVP+UGDg2oOqLcuhR2XKJ0JpcLofnedH9HeGadf/DN06kbUqeDlqmF/HGGPL5PEKIePze9pYuebP6c2+oD6jQnRd9sIzoEre1DYlIjRESKPahj3+6xHGgKIGXEe5CYVAA3h3g3tb4GLc3rxTwCEgBV4F0j0m/A8+AFwf4BeA4MA2M9lhju9ach/8GANfFuVIHy61bAAAAAElFTkSuQmCC\") no-repeat;display:block;height:100%;width:100%}.keg-header-btn-plus a:hover{background-position:-25px 0!important}.keg-pagination,.keg-pagination-wrapper{display:inline-flex}.keg-pagination{border-radius:4px;margin:0;padding-left:0}.keg-page-item{display:inline}.keg-page-link{background-color:#fff;border:1px solid #ddd;color:#428bca;float:left;font-size:12px;line-height:1.42857;margin-left:-1px;padding:5px 10px;position:relative;text-decoration:none}.keg-page-link:focus,.keg-page-link:hover{background-color:#eee;border-color:#ddd;border-bottom:2px solid #ffd148!important;color:#2a6496}.keg-page-item.active>.keg-page-link,.keg-page-item.active>.keg-page-link:focus,.keg-page-item.active>.keg-page-link:hover{background-color:#428bca;border-color:#428bca;color:#fff;cursor:default;z-index:2}.keg-page-item.disabled>.keg-page-link,.keg-page-item.disabled>.keg-page-link:focus,.keg-page-item.disabled>.keg-page-link:hover{background-color:#fff;border-color:#ddd;color:#999;cursor:not-allowed}.keg-page-item:first-child>.keg-page-link{border-bottom-left-radius:3px;border-top-left-radius:3px;margin-left:0}.keg-page-item:last-child>.keg-page-link{border-bottom-right-radius:3px;border-top-right-radius:3px}.keg-page-sizes{display:inline-flex;margin-left:20px}.keg-page-sizes-select{font-size:12px;height:auto!important}.keg-page-sizes-select:after{border-width:2px!important;height:.6em!important;margin-top:-.6em!important;width:.6em!important}.keg-page-sizes-label{color:rgba(0,0,0,.54);font-size:16px;margin-left:10px;padding:5px 0;white-space:nowrap}.keg-footer{display:flex;flex-wrap:wrap;margin-top:5px}.keg-page-info{color:rgba(0,0,0,.54);flex:1 1 auto;font-size:16px;padding:5px 10px;text-align:end;white-space:nowrap}.keg-page-info>span{color:#212529}.keg-row-totals{font-weight:700}.keg-totals-lv0{background-color:#ace1af}.keg-totals-lv1{background-color:#d0f0c0}.keg-totals-lv2{background-color:#d0f2c0}.keg-totals-lv3{background-color:#d0f4c0}.keg-totals-lv4{background-color:#d0f6c0}.keg-totals-lv5{background-color:#d0f8c0}.keg-sortable-helper{background-color:#fff;border:2px solid #fb9c2f;border-radius:4px;padding:3px 20px}.eqjs-chart-content,.eqjs-chart-main,.keg-container,.keg-root{height:100%}.eqjs-chart-content canvas{max-height:100%}.question-mark{background:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACE4AAAhOAYwxAOwAAAFgSURBVDhPbdK7K4dRHMfxn1sWUVhcihK/MBKlbMqGKAplMMglk7JJRpOy+R8sJotBiUUiSe6XWNxGpYT3++k5Tw/51Kvfc06/c/2enMzv2K5CCxpRgmecYB+vSJIX/5oCTGINnXjBG+owjXE84gzfSOLAZRxiKG6nU4QpnGIWyY79mIEDa+N2LirRhvK4Tx24Qx+iVOMarhhmHICr7MFJ22GcdB47KLajF8fIt0GcYBujcLur2EBIIa7Q5Eze6hY+ETKCdXzA838hxL4jZB1sOZ4Q4k0+wJ1sogtLSMdKlDnYOtbY8ycNsEzDOLAjFd+CZct04wKeLx3brfCM6ZTiFvWu7MvxTGMIt20slbWNbjWOj2oB54hWNv2wNNbRCU0FJhAGO3AQN/B/SRzgy7mHdfxvqytwYI8dJr1Nv635HFzVcnirXk4z3OoidhElPTjEbfrqsiiDZ7uMf98RJ5P5AUhxQvegD107AAAAAElFTkSuQmCC\") no-repeat 50%;height:20px;margin-left:5px;position:relative;width:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof __webpack_require__.g !== 'undefined') {
    local = __webpack_require__.g;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));



//# sourceMappingURL=es6-promise.map


/***/ }),

/***/ "./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[2]!./easy-dialog.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@easydata/ui/dist/assets/css/easy-forms.css":
/*!******************************************************************!*\
  !*** ./node_modules/@easydata/ui/dist/assets/css/easy-forms.css ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[2]!./easy-forms.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-forms.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/@easydata/ui/dist/assets/css/easy-grid.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@easydata/ui/dist/assets/css/easy-grid.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var content = __webpack_require__(/*! !!../../../../../css-loader/dist/cjs.js??ruleSet[1].rules[2]!./easy-grid.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2]!./node_modules/@easydata/ui/dist/assets/css/easy-grid.css");

if(typeof content === 'string') content = [[module.id, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! !../../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/***/ ((module) => {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/user_role_validator.ts":
/*!************************************!*\
  !*** ./src/user_role_validator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Role: () => (/* binding */ Role),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getCookie(name) {
    var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : null;
}
var Role;
(function (Role) {
    Role["CONSUMER"] = "consumer";
    Role["MANAGER"] = "manager";
    Role["ADMIN"] = "admin";
})(Role || (Role = {}));
var UserRoleValidator = /** @class */ (function () {
    function UserRoleValidator() {
        this.roles = this.getUserRoles();
    }
    UserRoleValidator.prototype.validate = function (role) {
        return this.roles.indexOf(role) >= 0;
    };
    UserRoleValidator.prototype.getUserRoles = function () {
        var rolesStr = getCookie('user-roles');
        if (rolesStr) {
            return rolesStr.split(',');
        }
        return [];
    };
    return UserRoleValidator;
}());
var roleValidator = new UserRoleValidator();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (roleValidator);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************************!*\
  !*** ./src/styles.community.js ***!
  \*********************************/
// EasyData UI
__webpack_require__(/*! ../node_modules/@easydata/ui/dist/assets/css/easy-grid.css */ "./node_modules/@easydata/ui/dist/assets/css/easy-grid.css");
__webpack_require__(/*! ../node_modules/@easydata/ui/dist/assets/css/easy-dialog.css */ "./node_modules/@easydata/ui/dist/assets/css/easy-dialog.css");
__webpack_require__(/*! ../node_modules/@easydata/ui/dist/assets/css/easy-forms.css */ "./node_modules/@easydata/ui/dist/assets/css/easy-forms.css");

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************************!*\
  !*** ./src/easyreport.community.ts ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EasyReportView: () => (/* binding */ EasyReportView)
/* harmony export */ });
/* harmony import */ var _easydata_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @easydata/core */ "./node_modules/@easydata/core/dist/easydata.core.es.js");
/* harmony import */ var _easydata_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @easydata/ui */ "./node_modules/@easydata/ui/dist/easydata.ui.es.js");
/* harmony import */ var _user_role_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user_role_validator */ "./src/user_role_validator.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



/**
 * The EasyQuery client-side view that represents the UI for ad-hoc reporting page
 */
var EasyReportView = /** @class */ (function () {
    function EasyReportView() {
        this.reportSearchText = '';
        this.http = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__.HttpClient();
    }
    EasyReportView.prototype.init = function () {
        var _this = this;
        this.newReportButton = this.getControl("OpenNewReportDlgButton");
        this.newReportButton.hidden = _user_role_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validate(_user_role_validator__WEBPACK_IMPORTED_MODULE_2__.Role.CONSUMER);
        this.newReportButton.addEventListener('click', this.newReportButtonClick.bind(this));
        this.cloneReportButton = this.getControl('CloneReportButton');
        this.cloneReportButton.addEventListener('click', this.cloneReportButtonClick.bind(this));
        this.cloneReportIdInput = this.getControl("CloneReportIdInput");
        this.cloneReportNameInput = this.getControl("CloneReportNameInput");
        this.removeReportButton = this.getControl('RemoveReportButton');
        this.removeReportButton.addEventListener('click', this.removeReportButtonClick.bind(this));
        this.refreshResultButton = this.getControl('RefreshResultButton');
        this.refreshResultButton.addEventListener("mouseenter", function () {
            _this.refreshResultButton.querySelector('i').classList.add("fa-spin");
        });
        this.refreshResultButton.addEventListener("mouseleave", function () {
            _this.refreshResultButton.querySelector('i').classList.remove("fa-spin");
        });
        this.refreshResultButton.addEventListener('click', this.refreshResultButtonClick.bind(this));
        //Edit Report dialog controls
        this.editReportButton = this.getControl('OpenEditReportDlgButton');
        this.editReportButton.hidden = _user_role_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validate(_user_role_validator__WEBPACK_IMPORTED_MODULE_2__.Role.CONSUMER);
        this.editReportButton.addEventListener('click', this.editReportButtonClick.bind(this));
        this.saveReportButton = this.getControl('SaveReportButton');
        this.saveReportButton.addEventListener('click', this.saveReportButtonClick.bind(this));
        this.addReportButton = this.getControl('AddReportButton');
        this.addReportButton.addEventListener('click', this.addReportButtonClick.bind(this));
        this.addReportHeaderDiv = this.getControl('AddReportHeader');
        this.editReportHeaderDiv = this.getControl('EditReportHeader');
        this.sharedCheckbox = this.getControl('IsSharedCheckbox');
        var validateEditReportButtons = function () {
            var enabled = _this.queryEditor.getValue() && _this.reportNameInput.value;
            _this.saveReportButton.disabled = !enabled;
            _this.addReportButton.disabled = !enabled;
        };
        this.reportNameInput = this.getControl('ReportNameInput');
        this.reportNameInput.addEventListener('input', function () {
            validateEditReportButtons();
        });
        var aceEditor = this.getControl('ReportQueryEditor');
        this.queryEditor = ace.edit(aceEditor);
        this.queryEditor.getSession().setMode('ace/mode/sql');
        this.queryEditor.setShowPrintMargin(false);
        this.queryEditor.on('change', function () {
            validateEditReportButtons();
        });
        this.reportDescTextArea = this.getControl('ReportDescTextArea');
        var togglePickerFunc = function () {
            var picker = document.querySelector('.er-report-picker');
            if (picker) {
                picker.classList.toggle('show-picker');
                picker.classList.toggle('animate-in');
                picker.classList.toggle('animate-out');
            }
        };
        var togglePickerButton = this.getControl('TogglePickerButton');
        togglePickerButton.addEventListener('click', togglePickerFunc.bind(this));
        var closePickerBtn = this.getControl('HideReportListButton');
        closePickerBtn.addEventListener('click', togglePickerFunc.bind(this));
        this.reportListPlaceholder = this.getControl("ReportList");
        this.reportSearchBox = this.getControl('reportSearchBox');
        var updateTimer;
        this.reportSearchBox.addEventListener('input', function (e) {
            _this.reportSearchText = e.target.value;
            clearTimeout(updateTimer);
            updateTimer = setTimeout(function () { return _this.filterReportList(); }, 500);
        });
        this.gridTable = new _easydata_core__WEBPACK_IMPORTED_MODULE_0__.EasyDataTable();
        this.grid = new _easydata_ui__WEBPACK_IMPORTED_MODULE_1__.EasyGrid({
            slot: "#ResultSet",
            paging: {
                enabled: true,
                pageSize: 20
            },
            dataTable: this.gridTable
        });
        $('#EditReportDlg').on('shown.bs.modal', function () {
            _this.queryEditor.renderer.updateFull(true);
        });
        this.grid.refresh();
        this.loadReportList();
    };
    /**
    * Creates a new report.
    */
    EasyReportView.prototype.showNewReportDialog = function () {
        var _this = this;
        this.editReportHeaderDiv.hidden = true;
        this.addReportHeaderDiv.hidden = false;
        this.saveReportButton.hidden = true;
        this.addReportButton.disabled = true;
        this.addReportButton.hidden = false;
        this.reportNameInput.value = 'Report ' + new Date().toLocaleDateString('sv-SE');
        setTimeout(function () {
            _this.reportNameInput.select();
            _this.reportNameInput.focus();
        }, 500);
        this.sharedCheckbox.checked = true;
        this.queryEditor.setValue('');
        this.queryEditor.getSession().selection.clearSelection();
        this.reportDescTextArea.value = '';
        $('#EditReportDlg').modal();
    };
    EasyReportView.prototype.showEditReportDialog = function () {
        this.addReportHeaderDiv.hidden = true;
        this.editReportHeaderDiv.hidden = false;
        this.saveReportButton.hidden = false;
        this.addReportButton.hidden = true;
        if (this.activeReport.isAlien || this.activeReport.isReadonly) {
            return;
        }
        this.reportNameInput.value = this.activeReport.name;
        this.sharedCheckbox.checked = this.activeReport.isShared;
        this.queryEditor.setValue(this.activeReport.sql || '');
        this.queryEditor.getSession().selection.clearSelection();
        this.queryEditor.resize();
        this.reportDescTextArea.value = this.activeReport.description || '';
        $('#EditReportDlg').modal();
    };
    EasyReportView.prototype.addReportButtonClick = function () {
        var _this = this;
        var reportName = this.reportNameInput.value;
        if (reportName) {
            var isShared = this.sharedCheckbox.checked;
            var report = {
                id: null,
                name: reportName,
                isShared: isShared,
                description: this.reportDescTextArea.value,
                sql: this.queryEditor.getValue()
            };
            this.http.post('/Reports/NewReport', report)
                .then(function (report) {
                _this.insertIntoReportList(report);
                _this.renderReportList({ reportId: report.id });
            });
        }
    };
    EasyReportView.prototype.loadReportList = function () {
        var _this = this;
        this.http.get('/Reports/GetAllReports')
            .then(function (reports) {
            _this.reports = reports;
            _this.renderReportList();
        })
            .catch(function (error) { return console.error(error); });
    };
    EasyReportView.prototype.loadReport = function (reportId, keepListOpen) {
        var _this = this;
        if (keepListOpen === void 0) { keepListOpen = false; }
        if (!reportId)
            return;
        this.http.get("/Reports/LoadReport/" + reportId)
            .then(function (report) {
            _this.activeReport = report;
            _this.fetchData();
            _this.renderCurrentReport();
        });
        this.setActiveReport(reportId, keepListOpen);
    };
    EasyReportView.prototype.cloneReport = function () {
        var _this = this;
        var reportId = this.cloneReportIdInput.value;
        this.cloneReportIdInput.value = "";
        var report = this.findReportById(reportId);
        if (!report)
            return;
        var newReportName = this.cloneReportNameInput.value;
        if (newReportName) {
            this.http.get("/Reports/LoadReport/" + reportId)
                .then(function (report) {
                var newReport = {
                    id: undefined,
                    name: newReportName,
                    description: report.description,
                    sql: report.sql,
                    isShared: false
                };
                return _this.http.post('/Reports/NewReport', newReport);
            })
                .then(function (report) {
                _this.insertIntoReportList(report);
                _this.renderReportList({ reportId: report.id });
            });
        }
    };
    EasyReportView.prototype.saveCurrentReport = function () {
        var _this = this;
        var reportName = this.reportNameInput.value;
        if (reportName) {
            this.activeReport.name = reportName;
            this.activeReport.description = this.reportDescTextArea.value;
            this.activeReport.sql = this.queryEditor.getValue();
            this.activeReport.isShared = this.sharedCheckbox.checked;
            this.http.put('/Reports/SaveReport', this.activeReport)
                .then(function (result) {
                var report = _this.findReportById(result.id);
                report.name = result.name;
                report.isShared = result.isShared;
                report.description = _this.activeReport.description;
                report.sql = _this.activeReport.sql;
                _this.renderReportList({ reportId: report.id });
                _this.renderCurrentReport();
                _this.fetchData();
            });
        }
    };
    EasyReportView.prototype.removeSelectedReport = function () {
        var _this = this;
        var removeReportIdInput = this.getControl('RemoveReportIdInput');
        var reportId = removeReportIdInput.value;
        removeReportIdInput.value = '';
        var report = this.findReportById(reportId);
        if (!report)
            return;
        this.http.delete("/Reports/DeleteReport/" + reportId)
            .then(function () {
            var currentReportId = _this.activeReport.id;
            var index = _this.removeFromReportList(reportId);
            _this.renderReportList((reportId === currentReportId)
                ? { reportIndex: index, keepListOpen: true }
                : { reportId: currentReportId, keepListOpen: true });
        });
    };
    EasyReportView.prototype.fetchData = function () {
        var _this = this;
        this.clearErrors();
        if (this.activeReport) {
            this.gridTable.columns.clear();
            this.gridTable.clear();
            this.grid.clear();
            var requestData = {
                reportId: this.activeReport.id
            };
            this.http.post('/Reports/FetchData', requestData)
                .then(function (result) {
                for (var _i = 0, _a = result.cols; _i < _a.length; _i++) {
                    var col = _a[_i];
                    _this.gridTable.columns.add(col);
                }
                _this.gridTable.setTotal(result.rows.length);
                for (var _b = 0, _c = result.rows; _b < _c.length; _b++) {
                    var row = _c[_b];
                    _this.gridTable.addRow(row);
                }
                _this.grid.refresh();
            })
                .catch(function (error) {
                _this.errorHandler(error.message);
            });
        }
    };
    EasyReportView.prototype.setActiveReport = function (reportId, keepListOpen) {
        if (keepListOpen === void 0) { keepListOpen = false; }
        var rlItems = this.reportListPlaceholder.querySelectorAll('li');
        for (var i = 0; i < rlItems.length; i++) {
            var item = rlItems[i];
            item.classList.remove('active');
            var rid = item.getAttribute('data-rid');
            if (rid === reportId) {
                item.classList.add('active');
            }
        }
        if (!keepListOpen) {
            var closeButton = this.getControl('HideReportListButton');
            if (closeButton && closeButton.offsetParent !== null) { // HideReportList button is visible, so the reportlist is fullscreen now
                closeButton.click();
            }
        }
    };
    EasyReportView.prototype.renderCurrentReport = function () {
        var reportTitleElem = this.getControl('ReportTitle');
        if (reportTitleElem) {
            reportTitleElem.innerHTML = this.activeReport.name;
        }
        var reportDescElem = this.getControl('ReportDescription');
        if (reportDescElem) {
            reportDescElem.innerHTML = this.activeReport.description || '[No description]';
        }
        var report = this.findReportById(this.activeReport.id);
        this.editReportButton.disabled = report.isReadonly;
    };
    EasyReportView.prototype.renderReportList = function (options) {
        this.renderReportPanels();
        this.reportListPlaceholder.innerHTML = "";
        if (this.reports.length > 0) {
            options = __assign({ reportIndex: 0 }, options);
            var ul = document.createElement('ul');
            ul.className = "list-group list-group-flush";
            this.reportListPlaceholder.appendChild(ul);
            for (var _i = 0, _a = this.reports; _i < _a.length; _i++) {
                var report = _a[_i];
                ul.appendChild(this.renderReportItemInList(report));
            }
            if (options.reportId) {
                if (!this.activeReport || options.reportId !== this.activeReport.id) {
                    this.loadReport(options.reportId, options.keepListOpen);
                }
                else {
                    this.setActiveReport(this.activeReport.id, options.keepListOpen);
                }
            }
            else if (typeof (options.reportIndex) !== "undefined") {
                var idx = options.reportIndex;
                if (idx >= this.reports.length)
                    idx = this.reports.length - 1;
                if (idx < 0 && this.reports.length > 0)
                    idx = 0;
                if (idx >= 0)
                    this.loadReport(this.reports[idx].id, options.keepListOpen);
            }
        }
        this.filterReportList();
    };
    EasyReportView.prototype.filterReportList = function () {
        var _this = this;
        var filter = this.reportSearchText.toLowerCase();
        var items = this.reportListPlaceholder.querySelectorAll('li');
        items.forEach(function (item) {
            var report = _this.findReportById(item.getAttribute('data-rid'));
            var nameDiv = item.querySelector('.er-report-name');
            if (!_this.reportSearchText) {
                if (nameDiv) {
                    nameDiv.innerHTML = report.name;
                }
                item.hidden = false;
                return;
            }
            item.hidden = !report.name.toLowerCase().includes(filter);
            if (!item.hidden && nameDiv) {
                nameDiv.innerHTML = report.name
                    .replace(new RegExp(filter, "gi"), function (match) { return "<b>" + match + "</b>"; });
            }
        });
    };
    EasyReportView.prototype.renderReportItemInList = function (report) {
        var _this = this;
        var reportName = report.name || report.description || "";
        var li = document.createElement('li');
        li.title = report.name;
        li.setAttribute('data-rid', report.id);
        li.className = 'list-group-item list-group-item-action er-report-item';
        // shared icon
        var iconDiv = document.createElement('div');
        iconDiv.innerHTML = "<i class='fa'></i>";
        if (report.isShared) {
            if (report.isAlien) {
                iconDiv.classList.add("er-readonly-report");
                iconDiv.querySelector("i").classList.add("fa-lock");
                iconDiv.querySelector("i").title = "Read-only report";
            }
            else {
                iconDiv.classList.add("er-shared-report");
                iconDiv.querySelector("i").classList.add("fa-rss");
                iconDiv.querySelector("i").title = "Shared report";
            }
        }
        li.appendChild(iconDiv);
        // report name
        var nameDiv = document.createElement('div');
        nameDiv.classList.add('er-report-name');
        nameDiv.innerText = reportName;
        li.appendChild(nameDiv);
        // menu button
        var btnGroupDiv = document.createElement('div');
        btnGroupDiv.classList.add("er-actions-button");
        var self = this;
        if (!_user_role_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validate(_user_role_validator__WEBPACK_IMPORTED_MODULE_2__.Role.CONSUMER)) {
            btnGroupDiv.innerHTML += "<a data-toggle='dropdown' title=\"Actions\" id='drop-down' data-cid='" + report.id + "'>\n\t\t\t\t<i class=\"fa fa-ellipsis-v\"></i>\n            </a>";
            var dropDownDiv = document.createElement('div');
            dropDownDiv.className += "dropdown-menu dropdown-menu-left";
            dropDownDiv.setAttribute('role', 'menu');
            var cloneReportMenuButton = (0,_easydata_ui__WEBPACK_IMPORTED_MODULE_1__.domel)('button')
                .addClass('dropdown-item')
                .title('')
                .id('OpenCloneReportDlgButton')
                .attr('data-toggle', 'modal')
                .attr('data-target', "#CloneReportDlg")
                .html('Duplicate')
                .on('click', function () {
                _this.cloneReportIdInput.value = report.id;
                _this.cloneReportNameInput.value = report.name + " Copy";
                setTimeout(function () {
                    _this.cloneReportNameInput.focus();
                }, 500);
            })
                .toDOM();
            var removeReportMenuButton = (0,_easydata_ui__WEBPACK_IMPORTED_MODULE_1__.domel)('button')
                .id('OpenRemoveReportDlg')
                .addClass('dropdown-item text-danger')
                .title('')
                .attr('data-toggle', 'modal')
                .attr('data-target', '#RemoveReportDlg')
                .html('Remove')
                .on('click', function () {
                _this.getControl('RemoveReportIdInput').value = report.id;
                _this.getControl('RemoveReportTitle').innerHTML = report.name;
            })
                .toDOM();
            removeReportMenuButton.disabled = report.isReadonly;
            dropDownDiv.appendChild(cloneReportMenuButton);
            dropDownDiv.appendChild(removeReportMenuButton);
            btnGroupDiv.appendChild(dropDownDiv);
        }
        li.appendChild(btnGroupDiv);
        li.addEventListener('click', function (e) {
            var el = e.target;
            if (el.classList.contains('er-report-name')) {
                el = el.parentElement;
            }
            if (el.hasAttribute('data-rid')) {
                var rid = el.getAttribute('data-rid');
                self.loadReport(rid);
            }
        });
        return li;
    };
    EasyReportView.prototype.renderReportPanels = function () {
        var reportPicker = document.querySelector('.er-report-picker') || new HTMLElement();
        var reportContainer = document.querySelector('.er-report-container') || new HTMLElement();
        var noReportPanel = this.getControl("NoReportPanel") || new HTMLElement();
        if (this.reports.length > 0) {
            noReportPanel.style.display = 'none';
            reportPicker.style.removeProperty('display');
            reportContainer.style.removeProperty('display');
        }
        else {
            noReportPanel.style.removeProperty('display');
            if (_user_role_validator__WEBPACK_IMPORTED_MODULE_2__["default"].validate(_user_role_validator__WEBPACK_IMPORTED_MODULE_2__.Role.CONSUMER)) {
                noReportPanel.innerHTML = '<h3>No reports</h3><p>You need a "manager" or "admin" role to create reports. Please, ask your team administrator to grant you a permission.</p>';
            }
            reportPicker.style.display = 'none';
            reportContainer.style.display = 'none';
        }
    };
    EasyReportView.prototype.insertIntoReportList = function (report) {
        this.reports.push(report);
        this.orderReportsByName();
    };
    EasyReportView.prototype.orderReportsByName = function () {
        this.reports.sort(function (report1, report2) {
            if (report1.name > report2.name)
                return 1;
            if (report1.name === report2.name)
                return 0;
            return -1;
        });
    };
    EasyReportView.prototype.replaceInReportList = function (report) {
        for (var i = 0; i < this.reports.length; i++) {
            this.reports[i] = report;
        }
    };
    EasyReportView.prototype.removeFromReportList = function (reportId) {
        var index = this.indexOfReportById(reportId);
        if (index >= 0)
            this.reports.splice(index, 1);
        return index;
    };
    EasyReportView.prototype.indexOfReportById = function (reportId) {
        for (var i = 0; i < this.reports.length; i++) {
            if (this.reports[i].id === reportId)
                return i;
        }
        return -1;
    };
    EasyReportView.prototype.clearReportButtonClick = function () {
        this.clearErrors();
        this.grid.clear();
        this.activeReport.sql = '';
        this.reportDescTextArea.value = '';
        this.queryEditor.setValue('');
    };
    EasyReportView.prototype.refreshResultButtonClick = function () {
        this.fetchData();
    };
    EasyReportView.prototype.saveReportButtonClick = function () {
        this.saveCurrentReport();
    };
    EasyReportView.prototype.editReportButtonClick = function () {
        this.showEditReportDialog();
    };
    EasyReportView.prototype.newReportButtonClick = function () {
        this.showNewReportDialog();
    };
    EasyReportView.prototype.cloneReportButtonClick = function () {
        this.cloneReport();
    };
    EasyReportView.prototype.removeReportButtonClick = function () {
        this.removeSelectedReport();
    };
    EasyReportView.prototype.errorHandler = function (error) {
        var alertDiv = document.createElement('div');
        alertDiv.setAttribute('role', 'alert');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show';
        alertDiv.innerHTML = error + "\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>";
        var slot = document.querySelector('.er-result-block');
        slot.insertBefore(alertDiv, slot.firstChild);
    };
    EasyReportView.prototype.clearErrors = function () {
        var slot = document.querySelector('.er-result-block');
        var alerts = slot.querySelectorAll('.alert');
        alerts.forEach(function (alert) {
            alert.parentElement.removeChild(alert);
        });
    };
    EasyReportView.prototype.getControl = function (id) {
        var control = document.getElementById(id) || null;
        if (control === null) {
            throw new Error("Can't find element: " + id);
        }
        return control;
    };
    EasyReportView.prototype.findReportById = function (id) {
        for (var _i = 0, _a = this.reports; _i < _a.length; _i++) {
            var report = _a[_i];
            if (report.id === id)
                return report;
        }
        return null;
    };
    return EasyReportView;
}());


})();

easyreport = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=easyreport.js.map