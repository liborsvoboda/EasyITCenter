!function(r,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.crosslink=t():r.crosslink=t()}(this,(()=>(()=>{var r={8613:(r,t,e)=>{e(961),e(4579).Object.keys},5663:r=>{r.exports=function(r){if("function"!=typeof r)throw TypeError(r+" is not a function!");return r}},2159:(r,t,e)=>{var n=e(6727);r.exports=function(r){if(!n(r))throw TypeError(r+" is not an object!");return r}},7428:(r,t,e)=>{var n=e(7932),o=e(8728),i=e(6531);r.exports=function(r){return function(t,e,u){var c,a=n(t),s=o(a.length),f=i(u,s);if(r&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((r||f in a)&&a[f]===e)return r||f||0;return!r&&-1}}},2894:r=>{var t={}.toString;r.exports=function(r){return t.call(r).slice(8,-1)}},4579:r=>{var t=r.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},9216:(r,t,e)=>{var n=e(5663);r.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 1:return function(e){return r.call(t,e)};case 2:return function(e,n){return r.call(t,e,n)};case 3:return function(e,n,o){return r.call(t,e,n,o)}}return function(){return r.apply(t,arguments)}}},8333:r=>{r.exports=function(r){if(null==r)throw TypeError("Can't call method on  "+r);return r}},9666:(r,t,e)=>{r.exports=!e(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(r,t,e)=>{var n=e(6727),o=e(3938).document,i=n(o)&&n(o.createElement);r.exports=function(r){return i?o.createElement(r):{}}},3338:r=>{r.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},3856:(r,t,e)=>{var n=e(3938),o=e(4579),i=e(9216),u=e(1818),c=e(7069),a="prototype",s=function(r,t,e){var f,p,l,v=r&s.F,h=r&s.G,d=r&s.S,g=r&s.P,y=r&s.B,x=r&s.W,m=h?o:o[t]||(o[t]={}),b=m[a],w=h?n:d?n[t]:(n[t]||{})[a];for(f in h&&(e=t),e)(p=!v&&w&&void 0!==w[f])&&c(m,f)||(l=p?w[f]:e[f],m[f]=h&&"function"!=typeof w[f]?e[f]:y&&p?i(l,n):x&&w[f]==l?function(r){var t=function(t,e,n){if(this instanceof r){switch(arguments.length){case 0:return new r;case 1:return new r(t);case 2:return new r(t,e)}return new r(t,e,n)}return r.apply(this,arguments)};return t[a]=r[a],t}(l):g&&"function"==typeof l?i(Function.call,l):l,g&&((m.virtual||(m.virtual={}))[f]=l,r&s.R&&b&&!b[f]&&u(b,f,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,r.exports=s},7929:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},3938:r=>{var t=r.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},7069:r=>{var t={}.hasOwnProperty;r.exports=function(r,e){return t.call(r,e)}},1818:(r,t,e)=>{var n=e(4743),o=e(3101);r.exports=e(9666)?function(r,t,e){return n.f(r,t,o(1,e))}:function(r,t,e){return r[t]=e,r}},3758:(r,t,e)=>{r.exports=!e(9666)&&!e(7929)((function(){return 7!=Object.defineProperty(e(7467)("div"),"a",{get:function(){return 7}}).a}))},799:(r,t,e)=>{var n=e(2894);r.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==n(r)?r.split(""):Object(r)}},6727:r=>{r.exports=function(r){return"object"==typeof r?null!==r:"function"==typeof r}},6227:r=>{r.exports=!0},4743:(r,t,e)=>{var n=e(2159),o=e(3758),i=e(3206),u=Object.defineProperty;t.f=e(9666)?Object.defineProperty:function(r,t,e){if(n(r),t=i(t,!0),n(e),o)try{return u(r,t,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(r[t]=e.value),r}},2963:(r,t,e)=>{var n=e(7069),o=e(7932),i=e(7428)(!1),u=e(8989)("IE_PROTO");r.exports=function(r,t){var e,c=o(r),a=0,s=[];for(e in c)e!=u&&n(c,e)&&s.push(e);for(;t.length>a;)n(c,e=t[a++])&&(~i(s,e)||s.push(e));return s}},6162:(r,t,e)=>{var n=e(2963),o=e(3338);r.exports=Object.keys||function(r){return n(r,o)}},2584:(r,t,e)=>{var n=e(3856),o=e(4579),i=e(7929);r.exports=function(r,t){var e=(o.Object||{})[r]||Object[r],u={};u[r]=t(e),n(n.S+n.F*i((function(){e(1)})),"Object",u)}},3101:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},8989:(r,t,e)=>{var n=e(250)("keys"),o=e(5730);r.exports=function(r){return n[r]||(n[r]=o(r))}},250:(r,t,e)=>{var n=e(4579),o=e(3938),i="__core-js_shared__",u=o[i]||(o[i]={});(r.exports=function(r,t){return u[r]||(u[r]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:e(6227)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},6531:(r,t,e)=>{var n=e(1052),o=Math.max,i=Math.min;r.exports=function(r,t){return(r=n(r))<0?o(r+t,0):i(r,t)}},1052:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){return isNaN(r=+r)?0:(r>0?e:t)(r)}},7932:(r,t,e)=>{var n=e(799),o=e(8333);r.exports=function(r){return n(o(r))}},8728:(r,t,e)=>{var n=e(1052),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},6530:(r,t,e)=>{var n=e(8333);r.exports=function(r){return Object(n(r))}},3206:(r,t,e)=>{var n=e(6727);r.exports=function(r,t){if(!n(r))return r;var e,o;if(t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;if("function"==typeof(e=r.valueOf)&&!n(o=e.call(r)))return o;if(!t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;throw TypeError("Can't convert object to primitive value")}},5730:r=>{var t=0,e=Math.random();r.exports=function(r){return"Symbol(".concat(void 0===r?"":r,")_",(++t+e).toString(36))}},961:(r,t,e)=>{var n=e(6530),o=e(6162);e(2584)("keys",(function(){return function(r){return o(n(r))}}))},4963:r=>{r.exports=function(r){if("function"!=typeof r)throw TypeError(r+" is not a function!");return r}},6793:(r,t,e)=>{"use strict";var n=e(4496)(!0);r.exports=function(r,t,e){return t+(e?n(r,t).length:1)}},7007:(r,t,e)=>{var n=e(5286);r.exports=function(r){if(!n(r))throw TypeError(r+" is not an object!");return r}},9315:(r,t,e)=>{var n=e(2110),o=e(875),i=e(2337);r.exports=function(r){return function(t,e,u){var c,a=n(t),s=o(a.length),f=i(u,s);if(r&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((r||f in a)&&a[f]===e)return r||f||0;return!r&&-1}}},1488:(r,t,e)=>{var n=e(2032),o=e(6314)("toStringTag"),i="Arguments"==n(function(){return arguments}());r.exports=function(r){var t,e,u;return void 0===r?"Undefined":null===r?"Null":"string"==typeof(e=function(r,t){try{return r[t]}catch(r){}}(t=Object(r),o))?e:i?n(t):"Object"==(u=n(t))&&"function"==typeof t.callee?"Arguments":u}},2032:r=>{var t={}.toString;r.exports=function(r){return t.call(r).slice(8,-1)}},5645:r=>{var t=r.exports={version:"2.6.12"};"number"==typeof __e&&(__e=t)},741:(r,t,e)=>{var n=e(4963);r.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 1:return function(e){return r.call(t,e)};case 2:return function(e,n){return r.call(t,e,n)};case 3:return function(e,n,o){return r.call(t,e,n,o)}}return function(){return r.apply(t,arguments)}}},1355:r=>{r.exports=function(r){if(null==r)throw TypeError("Can't call method on  "+r);return r}},7057:(r,t,e)=>{r.exports=!e(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:(r,t,e)=>{var n=e(5286),o=e(3816).document,i=n(o)&&n(o.createElement);r.exports=function(r){return i?o.createElement(r):{}}},4430:r=>{r.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},2985:(r,t,e)=>{var n=e(3816),o=e(5645),i=e(7728),u=e(7234),c=e(741),a="prototype",s=function(r,t,e){var f,p,l,v,h=r&s.F,d=r&s.G,g=r&s.S,y=r&s.P,x=r&s.B,m=d?n:g?n[t]||(n[t]={}):(n[t]||{})[a],b=d?o:o[t]||(o[t]={}),w=b[a]||(b[a]={});for(f in d&&(e=t),e)l=((p=!h&&m&&void 0!==m[f])?m:e)[f],v=x&&p?c(l,n):y&&"function"==typeof l?c(Function.call,l):l,m&&u(m,f,l,r&s.U),b[f]!=l&&i(b,f,v),y&&w[f]!=l&&(w[f]=l)};n.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,r.exports=s},4253:r=>{r.exports=function(r){try{return!!r()}catch(r){return!0}}},8082:(r,t,e)=>{"use strict";e(8269);var n=e(7234),o=e(7728),i=e(4253),u=e(1355),c=e(6314),a=e(1165),s=c("species"),f=!i((function(){var r=/./;return r.exec=function(){var r=[];return r.groups={a:"7"},r},"7"!=="".replace(r,"$<a>")})),p=function(){var r=/(?:)/,t=r.exec;r.exec=function(){return t.apply(this,arguments)};var e="ab".split(r);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();r.exports=function(r,t,e){var l=c(r),v=!i((function(){var t={};return t[l]=function(){return 7},7!=""[r](t)})),h=v?!i((function(){var t=!1,e=/a/;return e.exec=function(){return t=!0,null},"split"===r&&(e.constructor={},e.constructor[s]=function(){return e}),e[l](""),!t})):void 0;if(!v||!h||"replace"===r&&!f||"split"===r&&!p){var d=/./[l],g=e(u,l,""[r],(function(r,t,e,n,o){return t.exec===a?v&&!o?{done:!0,value:d.call(t,e,n)}:{done:!0,value:r.call(e,t,n)}:{done:!1}})),y=g[0],x=g[1];n(String.prototype,r,y),o(RegExp.prototype,l,2==t?function(r,t){return x.call(r,this,t)}:function(r){return x.call(r,this)})}}},3218:(r,t,e)=>{"use strict";var n=e(7007);r.exports=function(){var r=n(this),t="";return r.global&&(t+="g"),r.ignoreCase&&(t+="i"),r.multiline&&(t+="m"),r.unicode&&(t+="u"),r.sticky&&(t+="y"),t}},18:(r,t,e)=>{r.exports=e(3825)("native-function-to-string",Function.toString)},3816:r=>{var t=r.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},9181:r=>{var t={}.hasOwnProperty;r.exports=function(r,e){return t.call(r,e)}},7728:(r,t,e)=>{var n=e(9275),o=e(681);r.exports=e(7057)?function(r,t,e){return n.f(r,t,o(1,e))}:function(r,t,e){return r[t]=e,r}},1734:(r,t,e)=>{r.exports=!e(7057)&&!e(4253)((function(){return 7!=Object.defineProperty(e(2457)("div"),"a",{get:function(){return 7}}).a}))},266:(r,t,e)=>{var n=e(5286),o=e(7375).set;r.exports=function(r,t,e){var i,u=t.constructor;return u!==e&&"function"==typeof u&&(i=u.prototype)!==e.prototype&&n(i)&&o&&o(r,i),r}},9797:(r,t,e)=>{var n=e(2032);r.exports=Object("z").propertyIsEnumerable(0)?Object:function(r){return"String"==n(r)?r.split(""):Object(r)}},5286:r=>{r.exports=function(r){return"object"==typeof r?null!==r:"function"==typeof r}},5364:(r,t,e)=>{var n=e(5286),o=e(2032),i=e(6314)("match");r.exports=function(r){var t;return n(r)&&(void 0!==(t=r[i])?!!t:"RegExp"==o(r))}},4461:r=>{r.exports=!1},9275:(r,t,e)=>{var n=e(7007),o=e(1734),i=e(1689),u=Object.defineProperty;t.f=e(7057)?Object.defineProperty:function(r,t,e){if(n(r),t=i(t,!0),n(e),o)try{return u(r,t,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(r[t]=e.value),r}},8693:(r,t,e)=>{var n=e(4682),o=e(681),i=e(2110),u=e(1689),c=e(9181),a=e(1734),s=Object.getOwnPropertyDescriptor;t.f=e(7057)?s:function(r,t){if(r=i(r),t=u(t,!0),a)try{return s(r,t)}catch(r){}if(c(r,t))return o(!n.f.call(r,t),r[t])}},616:(r,t,e)=>{var n=e(189),o=e(4430).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(r){return n(r,o)}},189:(r,t,e)=>{var n=e(9181),o=e(2110),i=e(9315)(!1),u=e(9335)("IE_PROTO");r.exports=function(r,t){var e,c=o(r),a=0,s=[];for(e in c)e!=u&&n(c,e)&&s.push(e);for(;t.length>a;)n(c,e=t[a++])&&(~i(s,e)||s.push(e));return s}},4682:(r,t)=>{t.f={}.propertyIsEnumerable},681:r=>{r.exports=function(r,t){return{enumerable:!(1&r),configurable:!(2&r),writable:!(4&r),value:t}}},7234:(r,t,e)=>{var n=e(3816),o=e(7728),i=e(9181),u=e(3953)("src"),c=e(18),a="toString",s=(""+c).split(a);e(5645).inspectSource=function(r){return c.call(r)},(r.exports=function(r,t,e,c){var a="function"==typeof e;a&&(i(e,"name")||o(e,"name",t)),r[t]!==e&&(a&&(i(e,u)||o(e,u,r[t]?""+r[t]:s.join(String(t)))),r===n?r[t]=e:c?r[t]?r[t]=e:o(r,t,e):(delete r[t],o(r,t,e)))})(Function.prototype,a,(function(){return"function"==typeof this&&this[u]||c.call(this)}))},7787:(r,t,e)=>{"use strict";var n=e(1488),o=RegExp.prototype.exec;r.exports=function(r,t){var e=r.exec;if("function"==typeof e){var i=e.call(r,t);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(r))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(r,t)}},1165:(r,t,e)=>{"use strict";var n,o,i=e(3218),u=RegExp.prototype.exec,c=String.prototype.replace,a=u,s="lastIndex",f=(n=/a/,o=/b*/g,u.call(n,"a"),u.call(o,"a"),0!==n[s]||0!==o[s]),p=void 0!==/()??/.exec("")[1];(f||p)&&(a=function(r){var t,e,n,o,a=this;return p&&(e=new RegExp("^"+a.source+"$(?!\\s)",i.call(a))),f&&(t=a[s]),n=u.call(a,r),f&&n&&(a[s]=a.global?n.index+n[0].length:t),p&&n&&n.length>1&&c.call(n[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),r.exports=a},7375:(r,t,e)=>{var n=e(5286),o=e(7007),i=function(r,t){if(o(r),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};r.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(r,t,n){try{(n=e(741)(Function.call,e(8693).f(Object.prototype,"__proto__").set,2))(r,[]),t=!(r instanceof Array)}catch(r){t=!0}return function(r,e){return i(r,e),t?r.__proto__=e:n(r,e),r}}({},!1):void 0),check:i}},2974:(r,t,e)=>{"use strict";var n=e(3816),o=e(9275),i=e(7057),u=e(6314)("species");r.exports=function(r){var t=n[r];i&&t&&!t[u]&&o.f(t,u,{configurable:!0,get:function(){return this}})}},9335:(r,t,e)=>{var n=e(3825)("keys"),o=e(3953);r.exports=function(r){return n[r]||(n[r]=o(r))}},3825:(r,t,e)=>{var n=e(5645),o=e(3816),i="__core-js_shared__",u=o[i]||(o[i]={});(r.exports=function(r,t){return u[r]||(u[r]=void 0!==t?t:{})})("versions",[]).push({version:n.version,mode:e(4461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},4496:(r,t,e)=>{var n=e(1467),o=e(1355);r.exports=function(r){return function(t,e){var i,u,c=String(o(t)),a=n(e),s=c.length;return a<0||a>=s?r?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?r?c.charAt(a):i:r?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}}},2337:(r,t,e)=>{var n=e(1467),o=Math.max,i=Math.min;r.exports=function(r,t){return(r=n(r))<0?o(r+t,0):i(r,t)}},1467:r=>{var t=Math.ceil,e=Math.floor;r.exports=function(r){return isNaN(r=+r)?0:(r>0?e:t)(r)}},2110:(r,t,e)=>{var n=e(9797),o=e(1355);r.exports=function(r){return n(o(r))}},875:(r,t,e)=>{var n=e(1467),o=Math.min;r.exports=function(r){return r>0?o(n(r),9007199254740991):0}},508:(r,t,e)=>{var n=e(1355);r.exports=function(r){return Object(n(r))}},1689:(r,t,e)=>{var n=e(5286);r.exports=function(r,t){if(!n(r))return r;var e,o;if(t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;if("function"==typeof(e=r.valueOf)&&!n(o=e.call(r)))return o;if(!t&&"function"==typeof(e=r.toString)&&!n(o=e.call(r)))return o;throw TypeError("Can't convert object to primitive value")}},3953:r=>{var t=0,e=Math.random();r.exports=function(r){return"Symbol(".concat(void 0===r?"":r,")_",(++t+e).toString(36))}},6314:(r,t,e)=>{var n=e(3825)("wks"),o=e(3953),i=e(3816).Symbol,u="function"==typeof i;(r.exports=function(r){return n[r]||(n[r]=u&&i[r]||(u?i:o)("Symbol."+r))}).store=n},3946:(r,t,e)=>{var n=e(3816),o=e(266),i=e(9275).f,u=e(616).f,c=e(5364),a=e(3218),s=n.RegExp,f=s,p=s.prototype,l=/a/g,v=/a/g,h=new s(l)!==l;if(e(7057)&&(!h||e(4253)((function(){return v[e(6314)("match")]=!1,s(l)!=l||s(v)==v||"/a/i"!=s(l,"i")})))){s=function(r,t){var e=this instanceof s,n=c(r),i=void 0===t;return!e&&n&&r.constructor===s&&i?r:o(h?new f(n&&!i?r.source:r,t):f((n=r instanceof s)?r.source:r,n&&i?a.call(r):t),e?this:p,s)};for(var d=function(r){r in s||i(s,r,{configurable:!0,get:function(){return f[r]},set:function(t){f[r]=t}})},g=u(f),y=0;g.length>y;)d(g[y++]);p.constructor=s,s.prototype=p,e(7234)(n,"RegExp",s)}e(2974)("RegExp")},8269:(r,t,e)=>{"use strict";var n=e(1165);e(2985)({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},9357:(r,t,e)=>{"use strict";var n=e(7007),o=e(508),i=e(875),u=e(1467),c=e(6793),a=e(7787),s=Math.max,f=Math.min,p=Math.floor,l=/\$([$&`']|\d\d?|<[^>]*>)/g,v=/\$([$&`']|\d\d?)/g;e(8082)("replace",2,(function(r,t,e,h){return[function(n,o){var i=r(this),u=null==n?void 0:n[t];return void 0!==u?u.call(n,i,o):e.call(String(i),n,o)},function(r,t){var o=h(e,r,this,t);if(o.done)return o.value;var p=n(r),l=String(this),v="function"==typeof t;v||(t=String(t));var g=p.global;if(g){var y=p.unicode;p.lastIndex=0}for(var x=[];;){var m=a(p,l);if(null===m)break;if(x.push(m),!g)break;""===String(m[0])&&(p.lastIndex=c(l,i(p.lastIndex),y))}for(var b,w="",O=0,j=0;j<x.length;j++){m=x[j];for(var S=String(m[0]),_=s(f(u(m.index),l.length),0),E=[],M=1;M<m.length;M++)E.push(void 0===(b=m[M])?b:String(b));var P=m.groups;if(v){var A=[S].concat(E,_,l);void 0!==P&&A.push(P);var k=String(t.apply(void 0,A))}else k=d(S,l,_,E,P,t);_>=O&&(w+=l.slice(O,_)+k,O=_+S.length)}return w+l.slice(O)}];function d(r,t,n,i,u,c){var a=n+r.length,s=i.length,f=v;return void 0!==u&&(u=o(u),f=l),e.call(c,f,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return r;case"`":return t.slice(0,n);case"'":return t.slice(a);case"<":c=u[o.slice(1,-1)];break;default:var f=+o;if(0===f)return e;if(f>s){var l=p(f/10);return 0===l?e:l<=s?void 0===i[l-1]?o.charAt(1):i[l-1]+o.charAt(1):e}c=i[f-1]}return void 0===c?"":c}))}}))},6961:(r,t,e)=>{var n,o=function(){var r=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",n={};function o(r,t){if(!n[r]){n[r]={};for(var e=0;e<r.length;e++)n[r][r.charAt(e)]=e}return n[r][t]}var i={compressToBase64:function(r){if(null==r)return"";var e=i._compress(r,6,(function(r){return t.charAt(r)}));switch(e.length%4){default:case 0:return e;case 1:return e+"===";case 2:return e+"==";case 3:return e+"="}},decompressFromBase64:function(r){return null==r?"":""==r?null:i._decompress(r.length,32,(function(e){return o(t,r.charAt(e))}))},compressToUTF16:function(t){return null==t?"":i._compress(t,15,(function(t){return r(t+32)}))+" "},decompressFromUTF16:function(r){return null==r?"":""==r?null:i._decompress(r.length,16384,(function(t){return r.charCodeAt(t)-32}))},compressToUint8Array:function(r){for(var t=i.compress(r),e=new Uint8Array(2*t.length),n=0,o=t.length;n<o;n++){var u=t.charCodeAt(n);e[2*n]=u>>>8,e[2*n+1]=u%256}return e},decompressFromUint8Array:function(t){if(null==t)return i.decompress(t);for(var e=new Array(t.length/2),n=0,o=e.length;n<o;n++)e[n]=256*t[2*n]+t[2*n+1];var u=[];return e.forEach((function(t){u.push(r(t))})),i.decompress(u.join(""))},compressToEncodedURIComponent:function(r){return null==r?"":i._compress(r,6,(function(r){return e.charAt(r)}))},decompressFromEncodedURIComponent:function(r){return null==r?"":""==r?null:(r=r.replace(/ /g,"+"),i._decompress(r.length,32,(function(t){return o(e,r.charAt(t))})))},compress:function(t){return i._compress(t,16,(function(t){return r(t)}))},_compress:function(r,t,e){if(null==r)return"";var n,o,i,u={},c={},a="",s="",f="",p=2,l=3,v=2,h=[],d=0,g=0;for(i=0;i<r.length;i+=1)if(a=r.charAt(i),Object.prototype.hasOwnProperty.call(u,a)||(u[a]=l++,c[a]=!0),s=f+a,Object.prototype.hasOwnProperty.call(u,s))f=s;else{if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(n=0;n<v;n++)d<<=1,g==t-1?(g=0,h.push(e(d)),d=0):g++;for(o=f.charCodeAt(0),n=0;n<8;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1}else{for(o=1,n=0;n<v;n++)d=d<<1|o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1}0==--p&&(p=Math.pow(2,v),v++),delete c[f]}else for(o=u[f],n=0;n<v;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1;0==--p&&(p=Math.pow(2,v),v++),u[s]=l++,f=String(a)}if(""!==f){if(Object.prototype.hasOwnProperty.call(c,f)){if(f.charCodeAt(0)<256){for(n=0;n<v;n++)d<<=1,g==t-1?(g=0,h.push(e(d)),d=0):g++;for(o=f.charCodeAt(0),n=0;n<8;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1}else{for(o=1,n=0;n<v;n++)d=d<<1|o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o=0;for(o=f.charCodeAt(0),n=0;n<16;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1}0==--p&&(p=Math.pow(2,v),v++),delete c[f]}else for(o=u[f],n=0;n<v;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1;0==--p&&(p=Math.pow(2,v),v++)}for(o=2,n=0;n<v;n++)d=d<<1|1&o,g==t-1?(g=0,h.push(e(d)),d=0):g++,o>>=1;for(;;){if(d<<=1,g==t-1){h.push(e(d));break}g++}return h.join("")},decompress:function(r){return null==r?"":""==r?null:i._decompress(r.length,32768,(function(t){return r.charCodeAt(t)}))},_decompress:function(t,e,n){var o,i,u,c,a,s,f,p=[],l=4,v=4,h=3,d="",g=[],y={val:n(0),position:e,index:1};for(o=0;o<3;o+=1)p[o]=o;for(u=0,a=Math.pow(2,2),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;switch(u){case 0:for(u=0,a=Math.pow(2,8),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;f=r(u);break;case 1:for(u=0,a=Math.pow(2,16),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;f=r(u);break;case 2:return""}for(p[3]=f,i=f,g.push(f);;){if(y.index>t)return"";for(u=0,a=Math.pow(2,h),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;switch(f=u){case 0:for(u=0,a=Math.pow(2,8),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;p[v++]=r(u),f=v-1,l--;break;case 1:for(u=0,a=Math.pow(2,16),s=1;s!=a;)c=y.val&y.position,y.position>>=1,0==y.position&&(y.position=e,y.val=n(y.index++)),u|=(c>0?1:0)*s,s<<=1;p[v++]=r(u),f=v-1,l--;break;case 2:return g.join("")}if(0==l&&(l=Math.pow(2,h),h++),p[f])d=p[f];else{if(f!==v)return null;d=i+i.charAt(0)}g.push(d),p[v++]=i+d.charAt(0),i=d,0==--l&&(l=Math.pow(2,h),h++)}}};return i}();void 0===(n=function(){return o}.call(t,e,t,r))||(r.exports=n)},6243:(r,t,e)=>{e(8613)}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return r[n](i,i.exports,e),i.exports}e.d=(r,t)=>{for(var n in t)e.o(t,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:t[n]})},e.o=(r,t)=>Object.prototype.hasOwnProperty.call(r,t),e.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var n={};return(()=>{"use strict";e.r(n),e.d(n,{generateCrosslink:()=>f});var r=e(6961);const t=function(r,t){this.id=r,this.printableName=t};var o={JS:new t("js","JavaScript"),JS_IR:new t("js-ir","JavaScript IR"),WASM:new t("wasm","Wasm"),JAVA:new t("java","JVM"),JUNIT:new t("junit","JUnit"),CANVAS:new t("canvas","JavaScript(canvas)")};e(6243),e(9357),e(3946);var i="//sampleStart",u="//sampleEnd",c="[mark]",a="[/mark]";function s(r){return r.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function f(t,e){var n,f,p={code:t.replace(new RegExp(s(c),"g"),"").replace(new RegExp(s(a),"g"),"").replace(new RegExp(s(i),"g"),"").replace(new RegExp(s(u),"g"),"")};if(e&&e.targetPlatform){if(!(e.targetPlatform&&(n=e.targetPlatform,function(r,t){return r in t}(f=n&&n.toUpperCase().replace(/-/g,"_"),o)&&o[f])))throw new Error("Invalid target platform");p.targetPlatform=e.targetPlatform}return e&&e.compilerVersion&&(p.compilerVersion=e.compilerVersion),"https://play.kotlinlang.org/editor/v1/".concat(encodeURIComponent((0,r.compressToBase64)(JSON.stringify(p))))}})(),n})()));
//# sourceMappingURL=crosslink.js.map