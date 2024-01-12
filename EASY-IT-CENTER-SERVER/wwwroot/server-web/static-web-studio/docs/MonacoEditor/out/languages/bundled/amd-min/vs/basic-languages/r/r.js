/*! For license information please see r.js.LICENSE.txt */
"use strict";define("vs/basic-languages/r/r",["require","require"],(e=>(()=>{var e=Object.defineProperty,r=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,t=Object.prototype.hasOwnProperty,a={};((r,o)=>{for(var t in o)e(r,t,{get:o[t],enumerable:!0})})(a,{conf:()=>s,language:()=>i});var n,s={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},i={defaultToken:"",tokenPostfix:".r",roxygen:["@alias","@aliases","@assignee","@author","@backref","@callGraph","@callGraphDepth","@callGraphPrimitives","@concept","@describeIn","@description","@details","@docType","@encoding","@evalNamespace","@evalRd","@example","@examples","@export","@exportClass","@exportMethod","@exportPattern","@family","@field","@formals","@format","@import","@importClassesFrom","@importFrom","@importMethodsFrom","@include","@inherit","@inheritDotParams","@inheritParams","@inheritSection","@keywords","@md","@method","@name","@noMd","@noRd","@note","@param","@rawNamespace","@rawRd","@rdname","@references","@return","@S3method","@section","@seealso","@setClass","@slot","@source","@template","@templateVar","@title","@TODO","@usage","@useDynLib"],constants:["NULL","FALSE","TRUE","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","T","F","LETTERS","letters","month.abb","month.name","pi","R.version.string"],keywords:["break","next","return","if","else","for","in","repeat","while","array","category","character","complex","double","function","integer","list","logical","matrix","numeric","vector","data.frame","factor","library","require","attach","detach","source"],special:["\\n","\\r","\\t","\\b","\\a","\\f","\\v","\\'",'\\"',"\\\\"],brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"}],tokenizer:{root:[{include:"@numbers"},{include:"@strings"},[/[{}\[\]()]/,"@brackets"],{include:"@operators"},[/#'$/,"comment.doc"],[/#'/,"comment.doc","@roxygen"],[/(^#.*$)/,"comment"],[/\s+/,"white"],[/[,:;]/,"delimiter"],[/@[a-zA-Z]\w*/,"tag"],[/[a-zA-Z]\w*/,{cases:{"@keywords":"keyword","@constants":"constant","@default":"identifier"}}]],roxygen:[[/@\w+/,{cases:{"@roxygen":"tag","@eos":{token:"comment.doc",next:"@pop"},"@default":"comment.doc"}}],[/\s+/,{cases:{"@eos":{token:"comment.doc",next:"@pop"},"@default":"comment.doc"}}],[/.*/,{token:"comment.doc",next:"@pop"}]],numbers:[[/0[xX][0-9a-fA-F]+/,"number.hex"],[/-?(\d*\.)?\d+([eE][+\-]?\d+)?/,"number"]],operators:[[/<{1,2}-/,"operator"],[/->{1,2}/,"operator"],[/%[^%\s]+%/,"operator"],[/\*\*/,"operator"],[/%%/,"operator"],[/&&/,"operator"],[/\|\|/,"operator"],[/<</,"operator"],[/>>/,"operator"],[/[-+=&|!<>^~*/:$]/,"operator"]],strings:[[/'/,"string.escape","@stringBody"],[/"/,"string.escape","@dblStringBody"]],stringBody:[[/\\./,{cases:{"@special":"string","@default":"error-token"}}],[/'/,"string.escape","@popall"],[/./,"string"]],dblStringBody:[[/\\./,{cases:{"@special":"string","@default":"error-token"}}],[/"/,"string.escape","@popall"],[/./,"string"]]}};return n=a,((a,n,s,i)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let s of o(n))!t.call(a,s)&&undefined!==s&&e(a,s,{get:()=>n[s],enumerable:!(i=r(n,s))||i.enumerable});return a})(e({},"__esModule",{value:!0}),n)})()));