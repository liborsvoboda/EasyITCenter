import{G as N,A as M}from"./index-dbfd214c.js";var K=Object.defineProperty,R=(e,t,i)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,y=(e,t,i)=>(R(e,typeof t!="symbol"?t+"":t,i),i);/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.41.0(38e1e3d097f84e336c311d071a9ffb5191d4ffd1)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var I=Object.defineProperty,E=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,V=Object.prototype.hasOwnProperty,j=(e,t,i)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,F=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of H(t))!V.call(e,r)&&r!==i&&I(e,r,{get:()=>t[r],enumerable:!(o=E(t,r))||o.enumerable});return e},W=(e,t,i)=>(F(e,t,"default"),i&&F(i,t,"default")),m=(e,t,i)=>(j(e,typeof t!="symbol"?t+"":t,i),i),a={};W(a,M);var B=class{constructor(e,t){y(this,"_configChangeListener"),y(this,"_updateExtraLibsToken"),y(this,"_extraLibsChangeListener"),y(this,"_worker"),y(this,"_client"),this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=a.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(a.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},n={};n["lib.d.ts"]=!0;n["lib.decorators.d.ts"]=!0;n["lib.decorators.legacy.d.ts"]=!0;n["lib.dom.d.ts"]=!0;n["lib.dom.iterable.d.ts"]=!0;n["lib.es2015.collection.d.ts"]=!0;n["lib.es2015.core.d.ts"]=!0;n["lib.es2015.d.ts"]=!0;n["lib.es2015.generator.d.ts"]=!0;n["lib.es2015.iterable.d.ts"]=!0;n["lib.es2015.promise.d.ts"]=!0;n["lib.es2015.proxy.d.ts"]=!0;n["lib.es2015.reflect.d.ts"]=!0;n["lib.es2015.symbol.d.ts"]=!0;n["lib.es2015.symbol.wellknown.d.ts"]=!0;n["lib.es2016.array.include.d.ts"]=!0;n["lib.es2016.d.ts"]=!0;n["lib.es2016.full.d.ts"]=!0;n["lib.es2017.d.ts"]=!0;n["lib.es2017.full.d.ts"]=!0;n["lib.es2017.intl.d.ts"]=!0;n["lib.es2017.object.d.ts"]=!0;n["lib.es2017.sharedmemory.d.ts"]=!0;n["lib.es2017.string.d.ts"]=!0;n["lib.es2017.typedarrays.d.ts"]=!0;n["lib.es2018.asyncgenerator.d.ts"]=!0;n["lib.es2018.asynciterable.d.ts"]=!0;n["lib.es2018.d.ts"]=!0;n["lib.es2018.full.d.ts"]=!0;n["lib.es2018.intl.d.ts"]=!0;n["lib.es2018.promise.d.ts"]=!0;n["lib.es2018.regexp.d.ts"]=!0;n["lib.es2019.array.d.ts"]=!0;n["lib.es2019.d.ts"]=!0;n["lib.es2019.full.d.ts"]=!0;n["lib.es2019.intl.d.ts"]=!0;n["lib.es2019.object.d.ts"]=!0;n["lib.es2019.string.d.ts"]=!0;n["lib.es2019.symbol.d.ts"]=!0;n["lib.es2020.bigint.d.ts"]=!0;n["lib.es2020.d.ts"]=!0;n["lib.es2020.date.d.ts"]=!0;n["lib.es2020.full.d.ts"]=!0;n["lib.es2020.intl.d.ts"]=!0;n["lib.es2020.number.d.ts"]=!0;n["lib.es2020.promise.d.ts"]=!0;n["lib.es2020.sharedmemory.d.ts"]=!0;n["lib.es2020.string.d.ts"]=!0;n["lib.es2020.symbol.wellknown.d.ts"]=!0;n["lib.es2021.d.ts"]=!0;n["lib.es2021.full.d.ts"]=!0;n["lib.es2021.intl.d.ts"]=!0;n["lib.es2021.promise.d.ts"]=!0;n["lib.es2021.string.d.ts"]=!0;n["lib.es2021.weakref.d.ts"]=!0;n["lib.es2022.array.d.ts"]=!0;n["lib.es2022.d.ts"]=!0;n["lib.es2022.error.d.ts"]=!0;n["lib.es2022.full.d.ts"]=!0;n["lib.es2022.intl.d.ts"]=!0;n["lib.es2022.object.d.ts"]=!0;n["lib.es2022.regexp.d.ts"]=!0;n["lib.es2022.sharedmemory.d.ts"]=!0;n["lib.es2022.string.d.ts"]=!0;n["lib.es2023.array.d.ts"]=!0;n["lib.es2023.d.ts"]=!0;n["lib.es2023.full.d.ts"]=!0;n["lib.es5.d.ts"]=!0;n["lib.es6.d.ts"]=!0;n["lib.esnext.d.ts"]=!0;n["lib.esnext.full.d.ts"]=!0;n["lib.esnext.intl.d.ts"]=!0;n["lib.scripthost.d.ts"]=!0;n["lib.webworker.d.ts"]=!0;n["lib.webworker.importscripts.d.ts"]=!0;n["lib.webworker.iterable.d.ts"]=!0;function C(e,t,i=0){if(typeof e=="string")return e;if(e===void 0)return"";let o="";if(i){o+=t;for(let r=0;r<i;r++)o+="  "}if(o+=e.messageText,i++,e.next)for(const r of e.next)o+=C(r,t,i);return o}function w(e){return e?e.map(t=>t.text).join(""):""}var _=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),o=e.getPositionAt(t.start+t.length),{lineNumber:r,column:u}=i,{lineNumber:l,column:s}=o;return{startLineNumber:r,startColumn:u,endLineNumber:l,endColumn:s}}},U=class{constructor(e){y(this,"_libFiles"),y(this,"_hasFetchedLibFiles"),y(this,"_fetchLibFilesPromise"),this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!n[e.path.slice(1)]:!1}getOrCreateModel(e){const t=a.Uri.parse(e),i=a.editor.getModel(t);if(i)return i;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return a.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const o=N.getExtraLibs()[e];return o?a.editor.createModel(o.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},$=class extends _{constructor(e,t,i,o){super(o),y(this,"_disposables",[]),y(this,"_listener",Object.create(null)),this._libFiles=e,this._defaults=t,this._selector=i;const r=s=>{if(s.getLanguageId()!==i)return;const d=()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f?s.isAttachedToEditor()&&this._doValidate(s):this._doValidate(s)};let g;const p=s.onDidChangeContent(()=>{clearTimeout(g),g=window.setTimeout(d,500)}),h=s.onDidChangeAttached(()=>{const{onlyVisible:f}=this._defaults.getDiagnosticsOptions();f&&(s.isAttachedToEditor()?d():a.editor.setModelMarkers(s,this._selector,[]))});this._listener[s.uri.toString()]={dispose(){p.dispose(),h.dispose(),clearTimeout(g)}},d()},u=s=>{a.editor.setModelMarkers(s,this._selector,[]);const d=s.uri.toString();this._listener[d]&&(this._listener[d].dispose(),delete this._listener[d])};this._disposables.push(a.editor.onDidCreateModel(s=>r(s))),this._disposables.push(a.editor.onWillDisposeModel(u)),this._disposables.push(a.editor.onDidChangeModelLanguage(s=>{u(s.model),r(s.model)})),this._disposables.push({dispose(){for(const s of a.editor.getModels())u(s)}});const l=()=>{for(const s of a.editor.getModels())u(s),r(s)};this._disposables.push(this._defaults.onDidChange(l)),this._disposables.push(this._defaults.onDidExtraLibsChange(l)),a.editor.getModels().forEach(s=>r(s))}dispose(){this._disposables.forEach(e=>e&&e.dispose()),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:o,noSemanticValidation:r,noSuggestionDiagnostics:u}=this._defaults.getDiagnosticsOptions();o||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),u||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const l=await Promise.all(i);if(!l||e.isDisposed())return;const s=l.reduce((g,p)=>p.concat(g),[]).filter(g=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(g.code)===-1),d=s.map(g=>g.relatedInformation||[]).reduce((g,p)=>p.concat(g),[]).map(g=>g.file?a.Uri.parse(g.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(d),!e.isDisposed()&&a.editor.setModelMarkers(e,this._selector,s.map(g=>this._convertDiagnostics(e,g)))}_convertDiagnostics(e,t){const i=t.start||0,o=t.length||1,{lineNumber:r,column:u}=e.getPositionAt(i),{lineNumber:l,column:s}=e.getPositionAt(i+o),d=[];return t.reportsUnnecessary&&d.push(a.MarkerTag.Unnecessary),t.reportsDeprecated&&d.push(a.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:u,endLineNumber:l,endColumn:s,message:C(t.messageText,`
`),code:t.code.toString(),tags:d,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach(o=>{let r=e;if(o.file&&(r=this._libFiles.getOrCreateModel(o.file.fileName)),!r)return;const u=o.start||0,l=o.length||1,{lineNumber:s,column:d}=r.getPositionAt(u),{lineNumber:g,column:p}=r.getPositionAt(u+l);i.push({resource:r.uri,startLineNumber:s,startColumn:d,endLineNumber:g,endColumn:p,message:C(o.messageText,`
`)})}),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return a.MarkerSeverity.Error;case 3:return a.MarkerSeverity.Info;case 0:return a.MarkerSeverity.Warning;case 2:return a.MarkerSeverity.Hint}return a.MarkerSeverity.Info}},k=class extends _{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,i,o){const r=e.getWordUntilPosition(t),u=new a.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),l=e.uri,s=e.getOffsetAt(t),d=await this._worker(l);if(e.isDisposed())return;const g=await d.getCompletionsAtPosition(l.toString(),s);return!g||e.isDisposed()?void 0:{suggestions:g.entries.map(p=>{let h=u;if(p.replacementSpan){const x=e.getPositionAt(p.replacementSpan.start),v=e.getPositionAt(p.replacementSpan.start+p.replacementSpan.length);h=new a.Range(x.lineNumber,x.column,v.lineNumber,v.column)}const f=[];return p.kindModifiers!==void 0&&p.kindModifiers.indexOf("deprecated")!==-1&&f.push(a.languages.CompletionItemTag.Deprecated),{uri:l,position:t,offset:s,range:h,label:p.name,insertText:p.name,sortText:p.sortText,kind:k.convertKind(p.kind),tags:f}})}}async resolveCompletionItem(e,t){const i=e,o=i.uri,r=i.position,u=i.offset,l=await(await this._worker(o)).getCompletionEntryDetails(o.toString(),u,i.label);return l?{uri:o,position:r,label:l.name,kind:k.convertKind(l.kind),detail:w(l.displayParts),documentation:{value:k.createDocumentationString(l)}}:i}static convertKind(e){switch(e){case c.primitiveType:case c.keyword:return a.languages.CompletionItemKind.Keyword;case c.variable:case c.localVariable:return a.languages.CompletionItemKind.Variable;case c.memberVariable:case c.memberGetAccessor:case c.memberSetAccessor:return a.languages.CompletionItemKind.Field;case c.function:case c.memberFunction:case c.constructSignature:case c.callSignature:case c.indexSignature:return a.languages.CompletionItemKind.Function;case c.enum:return a.languages.CompletionItemKind.Enum;case c.module:return a.languages.CompletionItemKind.Module;case c.class:return a.languages.CompletionItemKind.Class;case c.interface:return a.languages.CompletionItemKind.Interface;case c.warning:return a.languages.CompletionItemKind.File}return a.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=w(e.documentation);if(e.tags)for(const i of e.tags)t+=`

${T(i)}`;return t}};function T(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[i,...o]=e.text;t+=`\`${i.text}\``,o.length>0&&(t+=` — ${o.map(r=>r.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(i=>i.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var L=class extends _{constructor(){super(...arguments),y(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case a.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case a.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(e,t,i,o){const r=e.uri,u=e.getOffsetAt(t),l=await this._worker(r);if(e.isDisposed())return;const s=await l.getSignatureHelpItems(r.toString(),u,{triggerReason:L._toSignatureHelpTriggerReason(o)});if(!s||e.isDisposed())return;const d={activeSignature:s.selectedItemIndex,activeParameter:s.argumentIndex,signatures:[]};return s.items.forEach(g=>{const p={label:"",parameters:[]};p.documentation={value:w(g.documentation)},p.label+=w(g.prefixDisplayParts),g.parameters.forEach((h,f,x)=>{const v=w(h.displayParts),O={label:v,documentation:{value:w(h.documentation)}};p.label+=v,p.parameters.push(O),f<x.length-1&&(p.label+=w(g.separatorDisplayParts))}),p.label+=w(g.suffixDisplayParts),d.signatures.push(p)}),{value:d,dispose(){}}}},z=class extends _{async provideHover(e,t,i){const o=e.uri,r=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const l=await u.getQuickInfoAtPosition(o.toString(),r);if(!l||e.isDisposed())return;const s=w(l.documentation),d=l.tags?l.tags.map(p=>T(p)).join(`  

`):"",g=w(l.displayParts);return{range:this._textSpanToRange(e,l.textSpan),contents:[{value:"```typescript\n"+g+"\n```\n"},{value:s+(d?`

`+d:"")}]}}},G=class extends _{async provideDocumentHighlights(e,t,i){const o=e.uri,r=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const l=await u.getDocumentHighlights(o.toString(),r,[o.toString()]);if(!(!l||e.isDisposed()))return l.flatMap(s=>s.highlightSpans.map(d=>({range:this._textSpanToRange(e,d.textSpan),kind:d.kind==="writtenReference"?a.languages.DocumentHighlightKind.Write:a.languages.DocumentHighlightKind.Text})))}},J=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const o=e.uri,r=e.getOffsetAt(t),u=await this._worker(o);if(e.isDisposed())return;const l=await u.getDefinitionAtPosition(o.toString(),r);if(!l||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(l.map(d=>a.Uri.parse(d.fileName))),e.isDisposed()))return;const s=[];for(let d of l){const g=this._libFiles.getOrCreateModel(d.fileName);g&&s.push({uri:g.uri,range:this._textSpanToRange(g,d.textSpan)})}return s}},Q=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,o){const r=e.uri,u=e.getOffsetAt(t),l=await this._worker(r);if(e.isDisposed())return;const s=await l.getReferencesAtPosition(r.toString(),u);if(!s||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(s.map(g=>a.Uri.parse(g.fileName))),e.isDisposed()))return;const d=[];for(let g of s){const p=this._libFiles.getOrCreateModel(g.fileName);p&&d.push({uri:p.uri,range:this._textSpanToRange(p,g.textSpan)})}return d}},q=class extends _{async provideDocumentSymbols(e,t){const i=e.uri,o=await this._worker(i);if(e.isDisposed())return;const r=await o.getNavigationTree(i.toString());if(!r||e.isDisposed())return;const u=(l,s)=>{var d;return{name:l.text,detail:"",kind:b[l.kind]||a.languages.SymbolKind.Variable,range:this._textSpanToRange(e,l.spans[0]),selectionRange:this._textSpanToRange(e,l.spans[0]),tags:[],children:(d=l.childItems)==null?void 0:d.map(g=>u(g,l.text)),containerName:s}};return r.childItems?r.childItems.map(l=>u(l)):[]}},c=class{};m(c,"unknown","");m(c,"keyword","keyword");m(c,"script","script");m(c,"module","module");m(c,"class","class");m(c,"interface","interface");m(c,"type","type");m(c,"enum","enum");m(c,"variable","var");m(c,"localVariable","local var");m(c,"function","function");m(c,"localFunction","local function");m(c,"memberFunction","method");m(c,"memberGetAccessor","getter");m(c,"memberSetAccessor","setter");m(c,"memberVariable","property");m(c,"constructorImplementation","constructor");m(c,"callSignature","call");m(c,"indexSignature","index");m(c,"constructSignature","construct");m(c,"parameter","parameter");m(c,"typeParameter","type parameter");m(c,"primitiveType","primitive type");m(c,"label","label");m(c,"alias","alias");m(c,"const","const");m(c,"let","let");m(c,"warning","warning");var b=Object.create(null);b[c.module]=a.languages.SymbolKind.Module;b[c.class]=a.languages.SymbolKind.Class;b[c.enum]=a.languages.SymbolKind.Enum;b[c.interface]=a.languages.SymbolKind.Interface;b[c.memberFunction]=a.languages.SymbolKind.Method;b[c.memberVariable]=a.languages.SymbolKind.Property;b[c.memberGetAccessor]=a.languages.SymbolKind.Property;b[c.memberSetAccessor]=a.languages.SymbolKind.Property;b[c.variable]=a.languages.SymbolKind.Variable;b[c.const]=a.languages.SymbolKind.Variable;b[c.localVariable]=a.languages.SymbolKind.Variable;b[c.variable]=a.languages.SymbolKind.Variable;b[c.function]=a.languages.SymbolKind.Function;b[c.localFunction]=a.languages.SymbolKind.Function;var S=class extends _{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},X=class extends S{constructor(){super(...arguments),y(this,"canFormatMultipleRanges",!1)}async provideDocumentRangeFormattingEdits(e,t,i,o){const r=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(r);if(e.isDisposed())return;const d=await s.getFormattingEditsForRange(r.toString(),u,l,S._convertOptions(i));if(!(!d||e.isDisposed()))return d.map(g=>this._convertTextChanges(e,g))}},Y=class extends S{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,i,o,r){const u=e.uri,l=e.getOffsetAt(t),s=await this._worker(u);if(e.isDisposed())return;const d=await s.getFormattingEditsAfterKeystroke(u.toString(),l,i,S._convertOptions(o));if(!(!d||e.isDisposed()))return d.map(g=>this._convertTextChanges(e,g))}},Z=class extends S{async provideCodeActions(e,t,i,o){const r=e.uri,u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=S._convertOptions(e.getOptions()),d=i.markers.filter(h=>h.code).map(h=>h.code).map(Number),g=await this._worker(r);if(e.isDisposed())return;const p=await g.getCodeFixesAtPosition(r.toString(),u,l,d,s);return!p||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:p.filter(h=>h.changes.filter(f=>f.isNewFile).length===0).map(h=>this._tsCodeFixActionToMonacoCodeAction(e,i,h)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const o=[];for(const r of i.changes)for(const u of r.textChanges)o.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.span),text:u.newText}});return{title:i.description,edit:{edits:o},diagnostics:t.markers,kind:"quickfix"}}},ee=class extends _{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,o){const r=e.uri,u=r.toString(),l=e.getOffsetAt(t),s=await this._worker(r);if(e.isDisposed())return;const d=await s.getRenameInfo(u,l,{allowRenameOfImportPath:!1});if(d.canRename===!1)return{edits:[],rejectReason:d.localizedErrorMessage};if(d.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const g=await s.findRenameLocations(u,l,!1,!1,!1);if(!g||e.isDisposed())return;const p=[];for(const h of g){const f=this._libFiles.getOrCreateModel(h.fileName);if(f)p.push({resource:f.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(f,h.textSpan),text:i}});else throw new Error(`Unknown file ${h.fileName}.`)}return{edits:p}}},te=class extends _{async provideInlayHints(e,t,i){const o=e.uri,r=o.toString(),u=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),l=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),s=await this._worker(o);return e.isDisposed()?null:{hints:(await s.provideInlayHints(r,u,l)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return a.languages.InlayHintKind.Parameter;case"Type":return a.languages.InlayHintKind.Type;default:return a.languages.InlayHintKind.Type}}},A,D;function re(e){D=P(e,"typescript")}function ne(e){A=P(e,"javascript")}function ae(){return new Promise((e,t)=>{if(!A)return t("JavaScript not registered!");e(A)})}function oe(){return new Promise((e,t)=>{if(!D)return t("TypeScript not registered!");e(D)})}function P(e,t){const i=[],o=new B(t,e),r=(...s)=>o.getLanguageServiceWorker(...s),u=new U(r);function l(){const{modeConfiguration:s}=e;ie(i),s.completionItems&&i.push(a.languages.registerCompletionItemProvider(t,new k(r))),s.signatureHelp&&i.push(a.languages.registerSignatureHelpProvider(t,new L(r))),s.hovers&&i.push(a.languages.registerHoverProvider(t,new z(r))),s.documentHighlights&&i.push(a.languages.registerDocumentHighlightProvider(t,new G(r))),s.definitions&&i.push(a.languages.registerDefinitionProvider(t,new J(u,r))),s.references&&i.push(a.languages.registerReferenceProvider(t,new Q(u,r))),s.documentSymbols&&i.push(a.languages.registerDocumentSymbolProvider(t,new q(r))),s.rename&&i.push(a.languages.registerRenameProvider(t,new ee(u,r))),s.documentRangeFormattingEdits&&i.push(a.languages.registerDocumentRangeFormattingEditProvider(t,new X(r))),s.onTypeFormattingEdits&&i.push(a.languages.registerOnTypeFormattingEditProvider(t,new Y(r))),s.codeActions&&i.push(a.languages.registerCodeActionProvider(t,new Z(r))),s.inlayHints&&i.push(a.languages.registerInlayHintsProvider(t,new te(r))),s.diagnostics&&i.push(new $(u,e,t,r))}return l(),r}function ie(e){for(;e.length;)e.pop().dispose()}export{_ as Adapter,Z as CodeActionAdaptor,J as DefinitionAdapter,$ as DiagnosticsAdapter,G as DocumentHighlightAdapter,X as FormatAdapter,S as FormatHelper,Y as FormatOnTypeAdapter,te as InlayHintsAdapter,c as Kind,U as LibFiles,q as OutlineAdapter,z as QuickInfoAdapter,Q as ReferenceAdapter,ee as RenameAdapter,L as SignatureHelpAdapter,k as SuggestAdapter,B as WorkerManager,C as flattenDiagnosticMessageText,ae as getJavaScriptWorker,oe as getTypeScriptWorker,ne as setupJavaScript,re as setupTypeScript};
