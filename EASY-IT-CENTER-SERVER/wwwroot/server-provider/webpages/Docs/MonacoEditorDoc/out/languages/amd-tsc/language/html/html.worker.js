define(["require","exports","monaco-editor-core/esm/vs/editor/editor.worker","./htmlWorker"],(function(e,r,o,i){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),self.onmessage=function(){o.initialize((function(e,r){return new i.HTMLWorker(e,r)}))}}));