"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[4948],{4948:(t,n,e)=>{e.r(n),e.d(n,{default:()=>o});const o='monaco.languages.register({\n\tid: "foldLanguage",\n});\n\nvar value = `1. Hit F1 to bring up the Command Palette\n2. Type \'fold\'\n3. Choose \'Fold All Block Comments\' or \'Fold All Regions\'\n\n5. comment1\n6. comment1\n7. comment1\n\n9. unfoldable text\n10. unfoldable text\n11. unfoldable text\n\n13. comment2\n14. comment2\n15. comment2\n16. comment2\n17. comment2\n\n19. foldable text\n20. foldable text\n21. foldable text\n\n23. region1\n24. region1\n25. region1\n\n27. region2\n28. region2\n29. region2`;\n\nmonaco.editor.create(document.getElementById("container"), {\n\tvalue: value,\n\tlanguage: "foldLanguage",\n});\n\nmonaco.languages.registerFoldingRangeProvider("foldLanguage", {\n\tprovideFoldingRanges: function (model, context, token) {\n\t\treturn [\n\t\t\t// comment1\n\t\t\t{\n\t\t\t\tstart: 5,\n\t\t\t\tend: 7,\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Comment,\n\t\t\t},\n\t\t\t// comment2\n\t\t\t{\n\t\t\t\tstart: 13,\n\t\t\t\tend: 17,\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Comment,\n\t\t\t},\n\t\t\t// foldable text\n\t\t\t{\n\t\t\t\tstart: 19,\n\t\t\t\tend: 21,\n\t\t\t},\n\t\t\t// region1\n\t\t\t{\n\t\t\t\tstart: 23,\n\t\t\t\tend: 25,\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Region,\n\t\t\t},\n\t\t\t// region2\n\t\t\t{\n\t\t\t\tstart: 27,\n\t\t\t\tend: 29,\n\t\t\t\tkind: monaco.languages.FoldingRangeKind.Region,\n\t\t\t},\n\t\t];\n\t},\n});\n'}}]);
//# sourceMappingURL=4948.js.map