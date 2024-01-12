import{A as Jt}from"./index-dbfd214c.js";var Qt=Object.defineProperty,Yt=(t,r,i)=>r in t?Qt(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,E=(t,r,i)=>(Yt(t,typeof r!="symbol"?r+"":r,i),i);/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var Zt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,ee=Object.getOwnPropertyNames,ne=Object.prototype.hasOwnProperty,st=(t,r,i,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of ee(r))!ne.call(t,e)&&e!==i&&Zt(t,e,{get:()=>r[e],enumerable:!(n=te(r,e))||n.enumerable});return t},re=(t,r,i)=>(st(t,r,"default"),i&&st(i,r,"default")),l={};re(l,Jt);var ie=2*60*1e3,oe=class{constructor(t){E(this,"_defaults"),E(this,"_idleCheckInterval"),E(this,"_lastUsedTime"),E(this,"_configChangeListener"),E(this,"_worker"),E(this,"_client"),this._defaults=t,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval(()=>this._checkIfIdle(),30*1e3),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker())}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>ie&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=l.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId,enableSchemaRequest:this._defaults.diagnosticsOptions.enableSchemaRequest}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...t){let r;return this._getClient().then(i=>{r=i}).then(i=>{if(this._worker)return this._worker.withSyncedResources(t)}).then(i=>r)}},ct;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647})(ct||(ct={}));var $;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647})($||($={}));var I;(function(t){function r(n,e){return n===Number.MAX_VALUE&&(n=$.MAX_VALUE),e===Number.MAX_VALUE&&(e=$.MAX_VALUE),{line:n,character:e}}t.create=r;function i(n){var e=n;return s.objectLiteral(e)&&s.uinteger(e.line)&&s.uinteger(e.character)}t.is=i})(I||(I={}));var _;(function(t){function r(n,e,o,a){if(s.uinteger(n)&&s.uinteger(e)&&s.uinteger(o)&&s.uinteger(a))return{start:I.create(n,e),end:I.create(o,a)};if(I.is(n)&&I.is(e))return{start:n,end:e};throw new Error("Range#create called with invalid arguments["+n+", "+e+", "+o+", "+a+"]")}t.create=r;function i(n){var e=n;return s.objectLiteral(e)&&I.is(e.start)&&I.is(e.end)}t.is=i})(_||(_={}));var et;(function(t){function r(n,e){return{uri:n,range:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&_.is(e.range)&&(s.string(e.uri)||s.undefined(e.uri))}t.is=i})(et||(et={}));var ut;(function(t){function r(n,e,o,a){return{targetUri:n,targetRange:e,targetSelectionRange:o,originSelectionRange:a}}t.create=r;function i(n){var e=n;return s.defined(e)&&_.is(e.targetRange)&&s.string(e.targetUri)&&(_.is(e.targetSelectionRange)||s.undefined(e.targetSelectionRange))&&(_.is(e.originSelectionRange)||s.undefined(e.originSelectionRange))}t.is=i})(ut||(ut={}));var nt;(function(t){function r(n,e,o,a){return{red:n,green:e,blue:o,alpha:a}}t.create=r;function i(n){var e=n;return s.numberRange(e.red,0,1)&&s.numberRange(e.green,0,1)&&s.numberRange(e.blue,0,1)&&s.numberRange(e.alpha,0,1)}t.is=i})(nt||(nt={}));var dt;(function(t){function r(n,e){return{range:n,color:e}}t.create=r;function i(n){var e=n;return _.is(e.range)&&nt.is(e.color)}t.is=i})(dt||(dt={}));var gt;(function(t){function r(n,e,o){return{label:n,textEdit:e,additionalTextEdits:o}}t.create=r;function i(n){var e=n;return s.string(e.label)&&(s.undefined(e.textEdit)||R.is(e))&&(s.undefined(e.additionalTextEdits)||s.typedArray(e.additionalTextEdits,R.is))}t.is=i})(gt||(gt={}));var W;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(W||(W={}));var lt;(function(t){function r(n,e,o,a,c){var u={startLine:n,endLine:e};return s.defined(o)&&(u.startCharacter=o),s.defined(a)&&(u.endCharacter=a),s.defined(c)&&(u.kind=c),u}t.create=r;function i(n){var e=n;return s.uinteger(e.startLine)&&s.uinteger(e.startLine)&&(s.undefined(e.startCharacter)||s.uinteger(e.startCharacter))&&(s.undefined(e.endCharacter)||s.uinteger(e.endCharacter))&&(s.undefined(e.kind)||s.string(e.kind))}t.is=i})(lt||(lt={}));var rt;(function(t){function r(n,e){return{location:n,message:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&et.is(e.location)&&s.string(e.message)}t.is=i})(rt||(rt={}));var M;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(M||(M={}));var ft;(function(t){t.Unnecessary=1,t.Deprecated=2})(ft||(ft={}));var ht;(function(t){function r(i){var n=i;return n!=null&&s.string(n.href)}t.is=r})(ht||(ht={}));var G;(function(t){function r(n,e,o,a,c,u){var d={range:n,message:e};return s.defined(o)&&(d.severity=o),s.defined(a)&&(d.code=a),s.defined(c)&&(d.source=c),s.defined(u)&&(d.relatedInformation=u),d}t.create=r;function i(n){var e,o=n;return s.defined(o)&&_.is(o.range)&&s.string(o.message)&&(s.number(o.severity)||s.undefined(o.severity))&&(s.integer(o.code)||s.string(o.code)||s.undefined(o.code))&&(s.undefined(o.codeDescription)||s.string((e=o.codeDescription)===null||e===void 0?void 0:e.href))&&(s.string(o.source)||s.undefined(o.source))&&(s.undefined(o.relatedInformation)||s.typedArray(o.relatedInformation,rt.is))}t.is=i})(G||(G={}));var V;(function(t){function r(n,e){for(var o=[],a=2;a<arguments.length;a++)o[a-2]=arguments[a];var c={title:n,command:e};return s.defined(o)&&o.length>0&&(c.arguments=o),c}t.create=r;function i(n){var e=n;return s.defined(e)&&s.string(e.title)&&s.string(e.command)}t.is=i})(V||(V={}));var R;(function(t){function r(o,a){return{range:o,newText:a}}t.replace=r;function i(o,a){return{range:{start:o,end:o},newText:a}}t.insert=i;function n(o){return{range:o,newText:""}}t.del=n;function e(o){var a=o;return s.objectLiteral(a)&&s.string(a.newText)&&_.is(a.range)}t.is=e})(R||(R={}));var F;(function(t){function r(n,e,o){var a={label:n};return e!==void 0&&(a.needsConfirmation=e),o!==void 0&&(a.description=o),a}t.create=r;function i(n){var e=n;return e!==void 0&&s.objectLiteral(e)&&s.string(e.label)&&(s.boolean(e.needsConfirmation)||e.needsConfirmation===void 0)&&(s.string(e.description)||e.description===void 0)}t.is=i})(F||(F={}));var k;(function(t){function r(i){var n=i;return typeof n=="string"}t.is=r})(k||(k={}));var T;(function(t){function r(o,a,c){return{range:o,newText:a,annotationId:c}}t.replace=r;function i(o,a,c){return{range:{start:o,end:o},newText:a,annotationId:c}}t.insert=i;function n(o,a){return{range:o,newText:"",annotationId:a}}t.del=n;function e(o){var a=o;return R.is(a)&&(F.is(a.annotationId)||k.is(a.annotationId))}t.is=e})(T||(T={}));var J;(function(t){function r(n,e){return{textDocument:n,edits:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&Q.is(e.textDocument)&&Array.isArray(e.edits)}t.is=i})(J||(J={}));var H;(function(t){function r(n,e,o){var a={kind:"create",uri:n};return e!==void 0&&(e.overwrite!==void 0||e.ignoreIfExists!==void 0)&&(a.options=e),o!==void 0&&(a.annotationId=o),a}t.create=r;function i(n){var e=n;return e&&e.kind==="create"&&s.string(e.uri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||k.is(e.annotationId))}t.is=i})(H||(H={}));var K;(function(t){function r(n,e,o,a){var c={kind:"rename",oldUri:n,newUri:e};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(c.options=o),a!==void 0&&(c.annotationId=a),c}t.create=r;function i(n){var e=n;return e&&e.kind==="rename"&&s.string(e.oldUri)&&s.string(e.newUri)&&(e.options===void 0||(e.options.overwrite===void 0||s.boolean(e.options.overwrite))&&(e.options.ignoreIfExists===void 0||s.boolean(e.options.ignoreIfExists)))&&(e.annotationId===void 0||k.is(e.annotationId))}t.is=i})(K||(K={}));var z;(function(t){function r(n,e,o){var a={kind:"delete",uri:n};return e!==void 0&&(e.recursive!==void 0||e.ignoreIfNotExists!==void 0)&&(a.options=e),o!==void 0&&(a.annotationId=o),a}t.create=r;function i(n){var e=n;return e&&e.kind==="delete"&&s.string(e.uri)&&(e.options===void 0||(e.options.recursive===void 0||s.boolean(e.options.recursive))&&(e.options.ignoreIfNotExists===void 0||s.boolean(e.options.ignoreIfNotExists)))&&(e.annotationId===void 0||k.is(e.annotationId))}t.is=i})(z||(z={}));var it;(function(t){function r(i){var n=i;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(function(e){return s.string(e.kind)?H.is(e)||K.is(e)||z.is(e):J.is(e)}))}t.is=r})(it||(it={}));var B=function(){function t(r,i){this.edits=r,this.changeAnnotations=i}return t.prototype.insert=function(r,i,n){var e,o;if(n===void 0?e=R.insert(r,i):k.is(n)?(o=n,e=T.insert(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),e=T.insert(r,i,o)),this.edits.push(e),o!==void 0)return o},t.prototype.replace=function(r,i,n){var e,o;if(n===void 0?e=R.replace(r,i):k.is(n)?(o=n,e=T.replace(r,i,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),e=T.replace(r,i,o)),this.edits.push(e),o!==void 0)return o},t.prototype.delete=function(r,i){var n,e;if(i===void 0?n=R.del(r):k.is(i)?(e=i,n=T.del(r,i)):(this.assertChangeAnnotations(this.changeAnnotations),e=this.changeAnnotations.manage(i),n=T.del(r,e)),this.edits.push(n),e!==void 0)return e},t.prototype.add=function(r){this.edits.push(r)},t.prototype.all=function(){return this.edits},t.prototype.clear=function(){this.edits.splice(0,this.edits.length)},t.prototype.assertChangeAnnotations=function(r){if(r===void 0)throw new Error("Text edit change is not configured to manage change annotations.")},t}(),pt=function(){function t(r){this._annotations=r===void 0?Object.create(null):r,this._counter=0,this._size=0}return t.prototype.all=function(){return this._annotations},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),t.prototype.manage=function(r,i){var n;if(k.is(r)?n=r:(n=this.nextId(),i=r),this._annotations[n]!==void 0)throw new Error("Id "+n+" is already in use.");if(i===void 0)throw new Error("No annotation provided for id "+n);return this._annotations[n]=i,this._size++,n},t.prototype.nextId=function(){return this._counter++,this._counter.toString()},t}();(function(){function t(r){var i=this;this._textEditChanges=Object.create(null),r!==void 0?(this._workspaceEdit=r,r.documentChanges?(this._changeAnnotations=new pt(r.changeAnnotations),r.changeAnnotations=this._changeAnnotations.all(),r.documentChanges.forEach(function(n){if(J.is(n)){var e=new B(n.edits,i._changeAnnotations);i._textEditChanges[n.textDocument.uri]=e}})):r.changes&&Object.keys(r.changes).forEach(function(n){var e=new B(r.changes[n]);i._textEditChanges[n]=e})):this._workspaceEdit={}}return Object.defineProperty(t.prototype,"edit",{get:function(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),t.prototype.getTextEditChange=function(r){if(Q.is(r)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var i={uri:r.uri,version:r.version},n=this._textEditChanges[i.uri];if(!n){var e=[],o={textDocument:i,edits:e};this._workspaceEdit.documentChanges.push(o),n=new B(e,this._changeAnnotations),this._textEditChanges[i.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");var n=this._textEditChanges[r];if(!n){var e=[];this._workspaceEdit.changes[r]=e,n=new B(e),this._textEditChanges[r]=n}return n}},t.prototype.initDocumentChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new pt,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},t.prototype.initChanges=function(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))},t.prototype.createFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;F.is(i)||k.is(i)?e=i:n=i;var o,a;if(e===void 0?o=H.create(r,n):(a=k.is(e)?e:this._changeAnnotations.manage(e),o=H.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},t.prototype.renameFile=function(r,i,n,e){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var o;F.is(n)||k.is(n)?o=n:e=n;var a,c;if(o===void 0?a=K.create(r,i,e):(c=k.is(o)?o:this._changeAnnotations.manage(o),a=K.create(r,i,e,c)),this._workspaceEdit.documentChanges.push(a),c!==void 0)return c},t.prototype.deleteFile=function(r,i,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");var e;F.is(i)||k.is(i)?e=i:n=i;var o,a;if(e===void 0?o=z.create(r,n):(a=k.is(e)?e:this._changeAnnotations.manage(e),o=z.create(r,n,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a},t})();var vt;(function(t){function r(n){return{uri:n}}t.create=r;function i(n){var e=n;return s.defined(e)&&s.string(e.uri)}t.is=i})(vt||(vt={}));var mt;(function(t){function r(n,e){return{uri:n,version:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&s.string(e.uri)&&s.integer(e.version)}t.is=i})(mt||(mt={}));var Q;(function(t){function r(n,e){return{uri:n,version:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&s.string(e.uri)&&(e.version===null||s.integer(e.version))}t.is=i})(Q||(Q={}));var _t;(function(t){function r(n,e,o,a){return{uri:n,languageId:e,version:o,text:a}}t.create=r;function i(n){var e=n;return s.defined(e)&&s.string(e.uri)&&s.string(e.languageId)&&s.integer(e.version)&&s.string(e.text)}t.is=i})(_t||(_t={}));var q;(function(t){t.PlainText="plaintext",t.Markdown="markdown"})(q||(q={}));(function(t){function r(i){var n=i;return n===t.PlainText||n===t.Markdown}t.is=r})(q||(q={}));var ot;(function(t){function r(i){var n=i;return s.objectLiteral(i)&&q.is(n.kind)&&s.string(n.value)}t.is=r})(ot||(ot={}));var v;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(v||(v={}));var at;(function(t){t.PlainText=1,t.Snippet=2})(at||(at={}));var bt;(function(t){t.Deprecated=1})(bt||(bt={}));var kt;(function(t){function r(n,e,o){return{newText:n,insert:e,replace:o}}t.create=r;function i(n){var e=n;return e&&s.string(e.newText)&&_.is(e.insert)&&_.is(e.replace)}t.is=i})(kt||(kt={}));var wt;(function(t){t.asIs=1,t.adjustIndentation=2})(wt||(wt={}));var Ct;(function(t){function r(i){return{label:i}}t.create=r})(Ct||(Ct={}));var yt;(function(t){function r(i,n){return{items:i||[],isIncomplete:!!n}}t.create=r})(yt||(yt={}));var Y;(function(t){function r(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=r;function i(n){var e=n;return s.string(e)||s.objectLiteral(e)&&s.string(e.language)&&s.string(e.value)}t.is=i})(Y||(Y={}));var Et;(function(t){function r(i){var n=i;return!!n&&s.objectLiteral(n)&&(ot.is(n.contents)||Y.is(n.contents)||s.typedArray(n.contents,Y.is))&&(i.range===void 0||_.is(i.range))}t.is=r})(Et||(Et={}));var At;(function(t){function r(i,n){return n?{label:i,documentation:n}:{label:i}}t.create=r})(At||(At={}));var xt;(function(t){function r(i,n){for(var e=[],o=2;o<arguments.length;o++)e[o-2]=arguments[o];var a={label:i};return s.defined(n)&&(a.documentation=n),s.defined(e)?a.parameters=e:a.parameters=[],a}t.create=r})(xt||(xt={}));var U;(function(t){t.Text=1,t.Read=2,t.Write=3})(U||(U={}));var It;(function(t){function r(i,n){var e={range:i};return s.number(n)&&(e.kind=n),e}t.create=r})(It||(It={}));var m;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(m||(m={}));var St;(function(t){t.Deprecated=1})(St||(St={}));var Tt;(function(t){function r(i,n,e,o,a){var c={name:i,kind:n,location:{uri:o,range:e}};return a&&(c.containerName=a),c}t.create=r})(Tt||(Tt={}));var Rt;(function(t){function r(n,e,o,a,c,u){var d={name:n,detail:e,kind:o,range:a,selectionRange:c};return u!==void 0&&(d.children=u),d}t.create=r;function i(n){var e=n;return e&&s.string(e.name)&&s.number(e.kind)&&_.is(e.range)&&_.is(e.selectionRange)&&(e.detail===void 0||s.string(e.detail))&&(e.deprecated===void 0||s.boolean(e.deprecated))&&(e.children===void 0||Array.isArray(e.children))&&(e.tags===void 0||Array.isArray(e.tags))}t.is=i})(Rt||(Rt={}));var Dt;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(Dt||(Dt={}));var Pt;(function(t){function r(n,e){var o={diagnostics:n};return e!=null&&(o.only=e),o}t.create=r;function i(n){var e=n;return s.defined(e)&&s.typedArray(e.diagnostics,G.is)&&(e.only===void 0||s.typedArray(e.only,s.string))}t.is=i})(Pt||(Pt={}));var jt;(function(t){function r(n,e,o){var a={title:n},c=!0;return typeof e=="string"?(c=!1,a.kind=e):V.is(e)?a.command=e:a.edit=e,c&&o!==void 0&&(a.kind=o),a}t.create=r;function i(n){var e=n;return e&&s.string(e.title)&&(e.diagnostics===void 0||s.typedArray(e.diagnostics,G.is))&&(e.kind===void 0||s.string(e.kind))&&(e.edit!==void 0||e.command!==void 0)&&(e.command===void 0||V.is(e.command))&&(e.isPreferred===void 0||s.boolean(e.isPreferred))&&(e.edit===void 0||it.is(e.edit))}t.is=i})(jt||(jt={}));var Mt;(function(t){function r(n,e){var o={range:n};return s.defined(e)&&(o.data=e),o}t.create=r;function i(n){var e=n;return s.defined(e)&&_.is(e.range)&&(s.undefined(e.command)||V.is(e.command))}t.is=i})(Mt||(Mt={}));var Lt;(function(t){function r(n,e){return{tabSize:n,insertSpaces:e}}t.create=r;function i(n){var e=n;return s.defined(e)&&s.uinteger(e.tabSize)&&s.boolean(e.insertSpaces)}t.is=i})(Lt||(Lt={}));var Ft;(function(t){function r(n,e,o){return{range:n,target:e,data:o}}t.create=r;function i(n){var e=n;return s.defined(e)&&_.is(e.range)&&(s.undefined(e.target)||s.string(e.target))}t.is=i})(Ft||(Ft={}));var Ot;(function(t){function r(n,e){return{range:n,parent:e}}t.create=r;function i(n){var e=n;return e!==void 0&&_.is(e.range)&&(e.parent===void 0||t.is(e.parent))}t.is=i})(Ot||(Ot={}));var Nt;(function(t){function r(o,a,c,u){return new ae(o,a,c,u)}t.create=r;function i(o){var a=o;return!!(s.defined(a)&&s.string(a.uri)&&(s.undefined(a.languageId)||s.string(a.languageId))&&s.uinteger(a.lineCount)&&s.func(a.getText)&&s.func(a.positionAt)&&s.func(a.offsetAt))}t.is=i;function n(o,a){for(var c=o.getText(),u=e(a,function(S,P){var O=S.range.start.line-P.range.start.line;return O===0?S.range.start.character-P.range.start.character:O}),d=c.length,p=u.length-1;p>=0;p--){var h=u[p],w=o.offsetAt(h.range.start),f=o.offsetAt(h.range.end);if(f<=d)c=c.substring(0,w)+h.newText+c.substring(f,c.length);else throw new Error("Overlapping edit");d=w}return c}t.applyEdits=n;function e(o,a){if(o.length<=1)return o;var c=o.length/2|0,u=o.slice(0,c),d=o.slice(c);e(u,a),e(d,a);for(var p=0,h=0,w=0;p<u.length&&h<d.length;){var f=a(u[p],d[h]);f<=0?o[w++]=u[p++]:o[w++]=d[h++]}for(;p<u.length;)o[w++]=u[p++];for(;h<d.length;)o[w++]=d[h++];return o}})(Nt||(Nt={}));var ae=function(){function t(r,i,n,e){this._uri=r,this._languageId=i,this._version=n,this._content=e,this._lineOffsets=void 0}return Object.defineProperty(t.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),t.prototype.getText=function(r){if(r){var i=this.offsetAt(r.start),n=this.offsetAt(r.end);return this._content.substring(i,n)}return this._content},t.prototype.update=function(r,i){this._content=r.text,this._version=i,this._lineOffsets=void 0},t.prototype.getLineOffsets=function(){if(this._lineOffsets===void 0){for(var r=[],i=this._content,n=!0,e=0;e<i.length;e++){n&&(r.push(e),n=!1);var o=i.charAt(e);n=o==="\r"||o===`
`,o==="\r"&&e+1<i.length&&i.charAt(e+1)===`
`&&e++}n&&i.length>0&&r.push(i.length),this._lineOffsets=r}return this._lineOffsets},t.prototype.positionAt=function(r){r=Math.max(Math.min(r,this._content.length),0);var i=this.getLineOffsets(),n=0,e=i.length;if(e===0)return I.create(0,r);for(;n<e;){var o=Math.floor((n+e)/2);i[o]>r?e=o:n=o+1}var a=n-1;return I.create(a,r-i[a])},t.prototype.offsetAt=function(r){var i=this.getLineOffsets();if(r.line>=i.length)return this._content.length;if(r.line<0)return 0;var n=i[r.line],e=r.line+1<i.length?i[r.line+1]:this._content.length;return Math.max(Math.min(n+r.character,e),n)},Object.defineProperty(t.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),t}(),s;(function(t){var r=Object.prototype.toString;function i(f){return typeof f<"u"}t.defined=i;function n(f){return typeof f>"u"}t.undefined=n;function e(f){return f===!0||f===!1}t.boolean=e;function o(f){return r.call(f)==="[object String]"}t.string=o;function a(f){return r.call(f)==="[object Number]"}t.number=a;function c(f,S,P){return r.call(f)==="[object Number]"&&S<=f&&f<=P}t.numberRange=c;function u(f){return r.call(f)==="[object Number]"&&-2147483648<=f&&f<=2147483647}t.integer=u;function d(f){return r.call(f)==="[object Number]"&&0<=f&&f<=2147483647}t.uinteger=d;function p(f){return r.call(f)==="[object Function]"}t.func=p;function h(f){return f!==null&&typeof f=="object"}t.objectLiteral=h;function w(f,S){return Array.isArray(f)&&f.every(S)}t.typedArray=w})(s||(s={}));var se=class{constructor(t,r,i){E(this,"_disposables",[]),E(this,"_listener",Object.create(null)),this._languageId=t,this._worker=r;const n=o=>{let a=o.getLanguageId();if(a!==this._languageId)return;let c;this._listener[o.uri.toString()]=o.onDidChangeContent(()=>{window.clearTimeout(c),c=window.setTimeout(()=>this._doValidate(o.uri,a),500)}),this._doValidate(o.uri,a)},e=o=>{l.editor.setModelMarkers(o,this._languageId,[]);let a=o.uri.toString(),c=this._listener[a];c&&(c.dispose(),delete this._listener[a])};this._disposables.push(l.editor.onDidCreateModel(n)),this._disposables.push(l.editor.onWillDisposeModel(e)),this._disposables.push(l.editor.onDidChangeModelLanguage(o=>{e(o.model),n(o.model)})),this._disposables.push(i(o=>{l.editor.getModels().forEach(a=>{a.getLanguageId()===this._languageId&&(e(a),n(a))})})),this._disposables.push({dispose:()=>{l.editor.getModels().forEach(e);for(let o in this._listener)this._listener[o].dispose()}}),l.editor.getModels().forEach(n)}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables.length=0}_doValidate(t,r){this._worker(t).then(i=>i.doValidation(t.toString())).then(i=>{const n=i.map(o=>ue(t,o));let e=l.editor.getModel(t);e&&e.getLanguageId()===r&&l.editor.setModelMarkers(e,r,n)}).then(void 0,i=>{console.error(i)})}};function ce(t){switch(t){case M.Error:return l.MarkerSeverity.Error;case M.Warning:return l.MarkerSeverity.Warning;case M.Information:return l.MarkerSeverity.Info;case M.Hint:return l.MarkerSeverity.Hint;default:return l.MarkerSeverity.Info}}function ue(t,r){let i=typeof r.code=="number"?String(r.code):r.code;return{severity:ce(r.severity),startLineNumber:r.range.start.line+1,startColumn:r.range.start.character+1,endLineNumber:r.range.end.line+1,endColumn:r.range.end.character+1,message:r.message,code:i,source:r.source}}var de=class{constructor(t,r){this._worker=t,this._triggerCharacters=r}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(t,r,i,n){const e=t.uri;return this._worker(e).then(o=>o.doComplete(e.toString(),D(r))).then(o=>{if(!o)return;const a=t.getWordUntilPosition(r),c=new l.Range(r.lineNumber,a.startColumn,r.lineNumber,a.endColumn),u=o.items.map(d=>{const p={label:d.label,insertText:d.insertText||d.label,sortText:d.sortText,filterText:d.filterText,documentation:d.documentation,detail:d.detail,command:fe(d.command),range:c,kind:le(d.kind)};return d.textEdit&&(ge(d.textEdit)?p.range={insert:A(d.textEdit.insert),replace:A(d.textEdit.replace)}:p.range=A(d.textEdit.range),p.insertText=d.textEdit.newText),d.additionalTextEdits&&(p.additionalTextEdits=d.additionalTextEdits.map(X)),d.insertTextFormat===at.Snippet&&(p.insertTextRules=l.languages.CompletionItemInsertTextRule.InsertAsSnippet),p});return{isIncomplete:o.isIncomplete,suggestions:u}})}};function D(t){if(t)return{character:t.column-1,line:t.lineNumber-1}}function zt(t){if(t)return{start:{line:t.startLineNumber-1,character:t.startColumn-1},end:{line:t.endLineNumber-1,character:t.endColumn-1}}}function A(t){if(t)return new l.Range(t.start.line+1,t.start.character+1,t.end.line+1,t.end.character+1)}function ge(t){return typeof t.insert<"u"&&typeof t.replace<"u"}function le(t){const r=l.languages.CompletionItemKind;switch(t){case v.Text:return r.Text;case v.Method:return r.Method;case v.Function:return r.Function;case v.Constructor:return r.Constructor;case v.Field:return r.Field;case v.Variable:return r.Variable;case v.Class:return r.Class;case v.Interface:return r.Interface;case v.Module:return r.Module;case v.Property:return r.Property;case v.Unit:return r.Unit;case v.Value:return r.Value;case v.Enum:return r.Enum;case v.Keyword:return r.Keyword;case v.Snippet:return r.Snippet;case v.Color:return r.Color;case v.File:return r.File;case v.Reference:return r.Reference}return r.Property}function X(t){if(t)return{range:A(t.range),text:t.newText}}function fe(t){return t&&t.command==="editor.action.triggerSuggest"?{id:t.command,title:t.title,arguments:t.arguments}:void 0}var he=class{constructor(t){this._worker=t}provideHover(t,r,i){let n=t.uri;return this._worker(n).then(e=>e.doHover(n.toString(),D(r))).then(e=>{if(e)return{range:A(e.range),contents:ve(e.contents)}})}};function pe(t){return t&&typeof t=="object"&&typeof t.kind=="string"}function Wt(t){return typeof t=="string"?{value:t}:pe(t)?t.kind==="plaintext"?{value:t.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:t.value}:{value:"```"+t.language+`
`+t.value+"\n```\n"}}function ve(t){if(t)return Array.isArray(t)?t.map(Wt):[Wt(t)]}var Ke=class{constructor(t){this._worker=t}provideDocumentHighlights(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.findDocumentHighlights(n.toString(),D(r))).then(e=>{if(e)return e.map(o=>({range:A(o.range),kind:me(o.kind)}))})}};function me(t){switch(t){case U.Read:return l.languages.DocumentHighlightKind.Read;case U.Write:return l.languages.DocumentHighlightKind.Write;case U.Text:return l.languages.DocumentHighlightKind.Text}return l.languages.DocumentHighlightKind.Text}var ze=class{constructor(t){this._worker=t}provideDefinition(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.findDefinition(n.toString(),D(r))).then(e=>{if(e)return[qt(e)]})}};function qt(t){return{uri:l.Uri.parse(t.uri),range:A(t.range)}}var qe=class{constructor(t){this._worker=t}provideReferences(t,r,i,n){const e=t.uri;return this._worker(e).then(o=>o.findReferences(e.toString(),D(r))).then(o=>{if(o)return o.map(qt)})}},Xe=class{constructor(t){this._worker=t}provideRenameEdits(t,r,i,n){const e=t.uri;return this._worker(e).then(o=>o.doRename(e.toString(),D(r),i)).then(o=>_e(o))}};function _e(t){if(!t||!t.changes)return;let r=[];for(let i in t.changes){const n=l.Uri.parse(i);for(let e of t.changes[i])r.push({resource:n,versionId:void 0,textEdit:{range:A(e.range),text:e.newText}})}return{edits:r}}var be=class{constructor(t){this._worker=t}provideDocumentSymbols(t,r){const i=t.uri;return this._worker(i).then(n=>n.findDocumentSymbols(i.toString())).then(n=>{if(n)return n.map(e=>({name:e.name,detail:"",containerName:e.containerName,kind:ke(e.kind),range:A(e.location.range),selectionRange:A(e.location.range),tags:[]}))})}};function ke(t){let r=l.languages.SymbolKind;switch(t){case m.File:return r.Array;case m.Module:return r.Module;case m.Namespace:return r.Namespace;case m.Package:return r.Package;case m.Class:return r.Class;case m.Method:return r.Method;case m.Property:return r.Property;case m.Field:return r.Field;case m.Constructor:return r.Constructor;case m.Enum:return r.Enum;case m.Interface:return r.Interface;case m.Function:return r.Function;case m.Variable:return r.Variable;case m.Constant:return r.Constant;case m.String:return r.String;case m.Number:return r.Number;case m.Boolean:return r.Boolean;case m.Array:return r.Array}return r.Function}var Be=class{constructor(t){this._worker=t}provideLinks(t,r){const i=t.uri;return this._worker(i).then(n=>n.findDocumentLinks(i.toString())).then(n=>{if(n)return{links:n.map(e=>({range:A(e.range),url:e.target}))}})}},we=class{constructor(t){this._worker=t}provideDocumentFormattingEdits(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.format(n.toString(),null,Xt(r)).then(o=>{if(!(!o||o.length===0))return o.map(X)}))}},Ce=class{constructor(t){E(this,"canFormatMultipleRanges",!1),this._worker=t}provideDocumentRangeFormattingEdits(t,r,i,n){const e=t.uri;return this._worker(e).then(o=>o.format(e.toString(),zt(r),Xt(i)).then(a=>{if(!(!a||a.length===0))return a.map(X)}))}};function Xt(t){return{tabSize:t.tabSize,insertSpaces:t.insertSpaces}}var ye=class{constructor(t){this._worker=t}provideDocumentColors(t,r){const i=t.uri;return this._worker(i).then(n=>n.findDocumentColors(i.toString())).then(n=>{if(n)return n.map(e=>({color:e.color,range:A(e.range)}))})}provideColorPresentations(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.getColorPresentations(n.toString(),r.color,zt(r.range))).then(e=>{if(e)return e.map(o=>{let a={label:o.label};return o.textEdit&&(a.textEdit=X(o.textEdit)),o.additionalTextEdits&&(a.additionalTextEdits=o.additionalTextEdits.map(X)),a})})}},Ee=class{constructor(t){this._worker=t}provideFoldingRanges(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.getFoldingRanges(n.toString(),r)).then(e=>{if(e)return e.map(o=>{const a={start:o.startLine+1,end:o.endLine+1};return typeof o.kind<"u"&&(a.kind=Ae(o.kind)),a})})}};function Ae(t){switch(t){case W.Comment:return l.languages.FoldingRangeKind.Comment;case W.Imports:return l.languages.FoldingRangeKind.Imports;case W.Region:return l.languages.FoldingRangeKind.Region}}var xe=class{constructor(t){this._worker=t}provideSelectionRanges(t,r,i){const n=t.uri;return this._worker(n).then(e=>e.getSelectionRanges(n.toString(),r.map(D))).then(e=>{if(e)return e.map(o=>{const a=[];for(;o;)a.push({range:A(o.range)}),o=o.parent;return a})})}};function Ie(t,r){r===void 0&&(r=!1);var i=t.length,n=0,e="",o=0,a=16,c=0,u=0,d=0,p=0,h=0;function w(g,C){for(var x=0,y=0;x<g||!C;){var b=t.charCodeAt(n);if(b>=48&&b<=57)y=y*16+b-48;else if(b>=65&&b<=70)y=y*16+b-65+10;else if(b>=97&&b<=102)y=y*16+b-97+10;else break;n++,x++}return x<g&&(y=-1),y}function f(g){n=g,e="",o=0,a=16,h=0}function S(){var g=n;if(t.charCodeAt(n)===48)n++;else for(n++;n<t.length&&j(t.charCodeAt(n));)n++;if(n<t.length&&t.charCodeAt(n)===46)if(n++,n<t.length&&j(t.charCodeAt(n)))for(n++;n<t.length&&j(t.charCodeAt(n));)n++;else return h=3,t.substring(g,n);var C=n;if(n<t.length&&(t.charCodeAt(n)===69||t.charCodeAt(n)===101))if(n++,(n<t.length&&t.charCodeAt(n)===43||t.charCodeAt(n)===45)&&n++,n<t.length&&j(t.charCodeAt(n))){for(n++;n<t.length&&j(t.charCodeAt(n));)n++;C=n}else h=3;return t.substring(g,C)}function P(){for(var g="",C=n;;){if(n>=i){g+=t.substring(C,n),h=2;break}var x=t.charCodeAt(n);if(x===34){g+=t.substring(C,n),n++;break}if(x===92){if(g+=t.substring(C,n),n++,n>=i){h=2;break}var y=t.charCodeAt(n++);switch(y){case 34:g+='"';break;case 92:g+="\\";break;case 47:g+="/";break;case 98:g+="\b";break;case 102:g+="\f";break;case 110:g+=`
`;break;case 114:g+="\r";break;case 116:g+="	";break;case 117:var b=w(4,!0);b>=0?g+=String.fromCharCode(b):h=4;break;default:h=5}C=n;continue}if(x>=0&&x<=31)if(N(x)){g+=t.substring(C,n),h=2;break}else h=6;n++}return g}function O(){if(e="",h=0,o=n,u=c,p=d,n>=i)return o=i,a=17;var g=t.charCodeAt(n);if(tt(g)){do n++,e+=String.fromCharCode(g),g=t.charCodeAt(n);while(tt(g));return a=15}if(N(g))return n++,e+=String.fromCharCode(g),g===13&&t.charCodeAt(n)===10&&(n++,e+=`
`),c++,d=n,a=14;switch(g){case 123:return n++,a=1;case 125:return n++,a=2;case 91:return n++,a=3;case 93:return n++,a=4;case 58:return n++,a=6;case 44:return n++,a=5;case 34:return n++,e=P(),a=10;case 47:var C=n-1;if(t.charCodeAt(n+1)===47){for(n+=2;n<i&&!N(t.charCodeAt(n));)n++;return e=t.substring(C,n),a=12}if(t.charCodeAt(n+1)===42){n+=2;for(var x=i-1,y=!1;n<x;){var b=t.charCodeAt(n);if(b===42&&t.charCodeAt(n+1)===47){n+=2,y=!0;break}n++,N(b)&&(b===13&&t.charCodeAt(n)===10&&n++,c++,d=n)}return y||(n++,h=1),e=t.substring(C,n),a=13}return e+=String.fromCharCode(g),n++,a=16;case 45:if(e+=String.fromCharCode(g),n++,n===i||!j(t.charCodeAt(n)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return e+=S(),a=11;default:for(;n<i&&$t(g);)n++,g=t.charCodeAt(n);if(o!==n){switch(e=t.substring(o,n),e){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return e+=String.fromCharCode(g),n++,a=16}}function $t(g){if(tt(g)||N(g))return!1;switch(g){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}function Gt(){var g;do g=O();while(g>=12&&g<=15);return g}return{setPosition:f,getPosition:function(){return n},scan:r?Gt:O,getToken:function(){return a},getTokenValue:function(){return e},getTokenOffset:function(){return o},getTokenLength:function(){return n-o},getTokenStartLine:function(){return u},getTokenStartCharacter:function(){return o-p},getTokenError:function(){return h}}}function tt(t){return t===32||t===9||t===11||t===12||t===160||t===5760||t>=8192&&t<=8203||t===8239||t===8287||t===12288||t===65279}function N(t){return t===10||t===13||t===8232||t===8233}function j(t){return t>=48&&t<=57}var Ut;(function(t){t.DEFAULT={allowTrailingComma:!1}})(Ut||(Ut={}));var Se=Ie;function Te(t){return{getInitialState:()=>new Z(null,null,!1,null),tokenize:(r,i)=>We(t,r,i)}}var Vt="delimiter.bracket.json",Ht="delimiter.array.json",Re="delimiter.colon.json",De="delimiter.comma.json",Pe="keyword.json",je="keyword.json",Me="string.value.json",Le="number.json",Fe="string.key.json",Oe="comment.block.json",Ne="comment.line.json",L=class{constructor(t,r){this.parent=t,this.type=r}static pop(t){return t?t.parent:null}static push(t,r){return new L(t,r)}static equals(t,r){if(!t&&!r)return!0;if(!t||!r)return!1;for(;t&&r;){if(t===r)return!0;if(t.type!==r.type)return!1;t=t.parent,r=r.parent}return!0}},Z=class{constructor(t,r,i,n){E(this,"_state"),E(this,"scanError"),E(this,"lastWasColon"),E(this,"parents"),this._state=t,this.scanError=r,this.lastWasColon=i,this.parents=n}clone(){return new Z(this._state,this.scanError,this.lastWasColon,this.parents)}equals(t){return t===this?!0:!t||!(t instanceof Z)?!1:this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon&&L.equals(this.parents,t.parents)}getStateData(){return this._state}setStateData(t){this._state=t}};function We(t,r,i,n=0){let e=0,o=!1;switch(i.scanError){case 2:r='"'+r,e=1;break;case 1:r="/*"+r,e=2;break}const a=Se(r);let c=i.lastWasColon,u=i.parents;const d={tokens:[],endState:i.clone()};for(;;){let p=n+a.getPosition(),h="";const w=a.scan();if(w===17)break;if(p===n+a.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+r.substr(a.getPosition(),3));switch(o&&(p-=e),o=e>0,w){case 1:u=L.push(u,0),h=Vt,c=!1;break;case 2:u=L.pop(u),h=Vt,c=!1;break;case 3:u=L.push(u,1),h=Ht,c=!1;break;case 4:u=L.pop(u),h=Ht,c=!1;break;case 6:h=Re,c=!0;break;case 5:h=De,c=!1;break;case 8:case 9:h=Pe,c=!1;break;case 7:h=je,c=!1;break;case 10:const f=(u?u.type:0)===1;h=c||f?Me:Fe,c=!1;break;case 11:h=Le,c=!1;break}if(t)switch(w){case 12:h=Ne;break;case 13:h=Oe;break}d.endState=new Z(i.getStateData(),a.getTokenError(),c,u),d.tokens.push({startIndex:p,scopes:h})}return d}var Ue=class extends se{constructor(t,r,i){super(t,r,i.onDidChange),this._disposables.push(l.editor.onWillDisposeModel(n=>{this._resetSchema(n.uri)})),this._disposables.push(l.editor.onDidChangeModelLanguage(n=>{this._resetSchema(n.model.uri)}))}_resetSchema(t){this._worker().then(r=>{r.resetSchema(t.toString())})}};function $e(t){const r=[],i=[],n=new oe(t);r.push(n);const e=(...c)=>n.getLanguageServiceWorker(...c);function o(){const{languageId:c,modeConfiguration:u}=t;Bt(i),u.documentFormattingEdits&&i.push(l.languages.registerDocumentFormattingEditProvider(c,new we(e))),u.documentRangeFormattingEdits&&i.push(l.languages.registerDocumentRangeFormattingEditProvider(c,new Ce(e))),u.completionItems&&i.push(l.languages.registerCompletionItemProvider(c,new de(e,[" ",":",'"']))),u.hovers&&i.push(l.languages.registerHoverProvider(c,new he(e))),u.documentSymbols&&i.push(l.languages.registerDocumentSymbolProvider(c,new be(e))),u.tokens&&i.push(l.languages.setTokensProvider(c,Te(!0))),u.colors&&i.push(l.languages.registerColorProvider(c,new ye(e))),u.foldingRanges&&i.push(l.languages.registerFoldingRangeProvider(c,new Ee(e))),u.diagnostics&&i.push(new Ue(c,e,t)),u.selectionRanges&&i.push(l.languages.registerSelectionRangeProvider(c,new xe(e)))}o(),r.push(l.languages.setLanguageConfiguration(t.languageId,Ve));let a=t.modeConfiguration;return t.onDidChange(c=>{c.modeConfiguration!==a&&(a=c.modeConfiguration,o())}),r.push(Kt(i)),Kt(r)}function Kt(t){return{dispose:()=>Bt(t)}}function Bt(t){for(;t.length;)t.pop().dispose()}var Ve={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]};export{de as CompletionAdapter,ze as DefinitionAdapter,se as DiagnosticsAdapter,ye as DocumentColorAdapter,we as DocumentFormattingEditProvider,Ke as DocumentHighlightAdapter,Be as DocumentLinkAdapter,Ce as DocumentRangeFormattingEditProvider,be as DocumentSymbolAdapter,Ee as FoldingRangeAdapter,he as HoverAdapter,qe as ReferenceAdapter,Xe as RenameAdapter,xe as SelectionRangeAdapter,oe as WorkerManager,D as fromPosition,zt as fromRange,$e as setupMode,A as toRange,X as toTextEdit};
