var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(u){return function(s){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&u[0]?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,r=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){a=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){a.label=u[1];break}if(6===u[0]&&a.label<i[1]){a.label=i[1],i=u;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(u);break}i[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],r=0}finally{n=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,s])}}};define(["require","exports","vscode-json-languageservice","vscode-uri"],(function(e,t,n,r){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.JSONWorker=void 0,"undefined"!=typeof fetch&&(i=function(e){return fetch(e).then((function(e){return e.text()}))});var o=function(){function e(e,t){this._ctx=e,this._languageSettings=t.languageSettings,this._languageId=t.languageId,this._languageService=n.getLanguageService({workspaceContext:{resolveRelativePath:function(e,t){return function(e,t){if(function(e){return e.charCodeAt(0)===a}(t)){var n=r.URI.parse(e),i=t.split("/");return n.with({path:s(i)}).toString()}return function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=r.URI.parse(e),o=i.path.split("/"),a=0,u=t;a<u.length;a++){var c=u[a];o.push.apply(o,c.split("/"))}return i.with({path:s(o)}).toString()}(e,t)}(t.substr(0,t.lastIndexOf("/")+1),e)}},schemaRequestService:t.enableSchemaRequest?i:void 0,clientCapabilities:n.ClientCapabilities.LATEST}),this._languageService.configure(this._languageSettings)}return e.prototype.doValidation=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){return(t=this._getTextDocument(e))?(n=this._languageService.parseJSONDocument(t),[2,this._languageService.doValidation(t,n,this._languageSettings)]):[2,Promise.resolve([])]}))}))},e.prototype.doComplete=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){return(n=this._getTextDocument(e))?(r=this._languageService.parseJSONDocument(n),[2,this._languageService.doComplete(n,t,r)]):[2,null]}))}))},e.prototype.doResolve=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this._languageService.doResolve(e)]}))}))},e.prototype.doHover=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){return(n=this._getTextDocument(e))?(r=this._languageService.parseJSONDocument(n),[2,this._languageService.doHover(n,t,r)]):[2,null]}))}))},e.prototype.format=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var r,i;return __generator(this,(function(o){return(r=this._getTextDocument(e))?(i=this._languageService.format(r,t,n),[2,Promise.resolve(i)]):[2,[]]}))}))},e.prototype.resetSchema=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,Promise.resolve(this._languageService.resetSchema(e))]}))}))},e.prototype.findDocumentSymbols=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(i){return(t=this._getTextDocument(e))?(n=this._languageService.parseJSONDocument(t),r=this._languageService.findDocumentSymbols2(t,n),[2,Promise.resolve(r)]):[2,[]]}))}))},e.prototype.findDocumentColors=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r;return __generator(this,(function(i){return(t=this._getTextDocument(e))?(n=this._languageService.parseJSONDocument(t),r=this._languageService.findDocumentColors(t,n),[2,Promise.resolve(r)]):[2,[]]}))}))},e.prototype.getColorPresentations=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var r,i,o;return __generator(this,(function(a){return(r=this._getTextDocument(e))?(i=this._languageService.parseJSONDocument(r),o=this._languageService.getColorPresentations(r,i,t,n),[2,Promise.resolve(o)]):[2,[]]}))}))},e.prototype.getFoldingRanges=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r;return __generator(this,(function(i){return(n=this._getTextDocument(e))?(r=this._languageService.getFoldingRanges(n,t),[2,Promise.resolve(r)]):[2,[]]}))}))},e.prototype.getSelectionRanges=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r,i;return __generator(this,(function(o){return(n=this._getTextDocument(e))?(r=this._languageService.parseJSONDocument(n),i=this._languageService.getSelectionRanges(n,t,r),[2,Promise.resolve(i)]):[2,[]]}))}))},e.prototype.parseJSONDocument=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){return(t=this._getTextDocument(e))?(n=this._languageService.parseJSONDocument(t),[2,Promise.resolve(n)]):[2,null]}))}))},e.prototype.getMatchingSchemas=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){return(t=this._getTextDocument(e))?(n=this._languageService.parseJSONDocument(t),[2,Promise.resolve(this._languageService.getMatchingSchemas(t,n))]):[2,[]]}))}))},e.prototype._getTextDocument=function(e){for(var t=0,r=this._ctx.getMirrorModels();t<r.length;t++){var i=r[t];if(i.uri.toString()===e)return n.TextDocument.create(e,this._languageId,i.version,i.getValue())}return null},e}();t.JSONWorker=o;var a="/".charCodeAt(0),u=".".charCodeAt(0);function s(e){for(var t=[],n=0,r=e;n<r.length;n++){var i=r[n];0===i.length||1===i.length&&i.charCodeAt(0)===u||(2===i.length&&i.charCodeAt(0)===u&&i.charCodeAt(1)===u?t.pop():t.push(i))}e.length>1&&0===e[e.length-1].length&&t.push("");var o=t.join("/");return 0===e[0].length&&(o="/"+o),o}t.create=function(e,t){return new o(e,t)}}));