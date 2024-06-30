"use strict";(self.webpackChunkmy_application=self.webpackChunkmy_application||[]).push([[3756],{3756:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const i='(function () {\n\tvar PLAY_SAMPLES = [\n\t\t{\n\t\t\tchapter: "Creating the editor",\n\t\t\tname: "Hello world!",\n\t\t\tid: "creating-the-editor-hello-world",\n\t\t\tpath: "creating-the-editor/hello-world",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the editor",\n\t\t\tname: "Editor basic options",\n\t\t\tid: "creating-the-editor-editor-basic-options",\n\t\t\tpath: "creating-the-editor/editor-basic-options",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the editor",\n\t\t\tname: "Hard wrapping",\n\t\t\tid: "creating-the-editor-hard-wrapping",\n\t\t\tpath: "creating-the-editor/hard-wrapping",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the editor",\n\t\t\tname: "Syntax highlighting for HTML elements",\n\t\t\tid: "creating-the-editor-syntax-highlighting-for-html-elements",\n\t\t\tpath: "creating-the-editor/syntax-highlighting-for-html-elements",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Adding a command to an editor instance",\n\t\t\tid: "interacting-with-the-editor-adding-a-command-to-an-editor-instance",\n\t\t\tpath: "interacting-with-the-editor/adding-a-command-to-an-editor-instance",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Adding an action to an editor instance",\n\t\t\tid: "interacting-with-the-editor-adding-an-action-to-an-editor-instance",\n\t\t\tpath: "interacting-with-the-editor/adding-an-action-to-an-editor-instance",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Adding a keybinding to an existing command",\n\t\t\tid: "interacting-with-the-editor-adding-an-keybinding-to-an-existing-command",\n\t\t\tpath: "interacting-with-the-editor/adding-an-keybinding-to-an-existing-command",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Revealing a position",\n\t\t\tid: "interacting-with-the-editor-revealing-a-position",\n\t\t\tpath: "interacting-with-the-editor/revealing-a-position",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Rendering glyphs in the margin",\n\t\t\tid: "interacting-with-the-editor-rendering-glyphs-in-the-margin",\n\t\t\tpath: "interacting-with-the-editor/rendering-glyphs-in-the-margin",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Line and Inline decorations",\n\t\t\tid: "interacting-with-the-editor-line-and-inline-decorations",\n\t\t\tpath: "interacting-with-the-editor/line-and-inline-decorations",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Customizing the line numbers",\n\t\t\tid: "interacting-with-the-editor-customizing-the-line-numbers",\n\t\t\tpath: "interacting-with-the-editor/customizing-the-line-numbers",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Listening to mouse events",\n\t\t\tid: "interacting-with-the-editor-listening-to-mouse-events",\n\t\t\tpath: "interacting-with-the-editor/listening-to-mouse-events",\n\t\t},\n\t\t{\n\t\t\tchapter: "Interacting with the editor",\n\t\t\tname: "Listening to key events",\n\t\t\tid: "interacting-with-the-editor-listening-to-key-events",\n\t\t\tpath: "interacting-with-the-editor/listening-to-key-events",\n\t\t},\n\t\t{\n\t\t\tchapter: "Customizing the appearence",\n\t\t\tname: "Exposed colors",\n\t\t\tid: "customizing-the-appearence-exposed-colors",\n\t\t\tpath: "customizing-the-appearence/exposed-colors",\n\t\t},\n\t\t{\n\t\t\tchapter: "Customizing the appearence",\n\t\t\tname: "Scrollbars",\n\t\t\tid: "customizing-the-appearence-scrollbars",\n\t\t\tpath: "customizing-the-appearence/scrollbars",\n\t\t},\n\t\t{\n\t\t\tchapter: "Customizing the appearence",\n\t\t\tname: "Tokens and colors",\n\t\t\tid: "customizing-the-appearence-tokens-and-colors",\n\t\t\tpath: "customizing-the-appearence/tokens-and-colors",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the DiffEditor",\n\t\t\tname: "Hello diff world!",\n\t\t\tid: "creating-the-diffeditor-hello-diff-world",\n\t\t\tpath: "creating-the-diffeditor/hello-diff-world",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the DiffEditor",\n\t\t\tname: "Multi-line example",\n\t\t\tid: "creating-the-diffeditor-multi-line-example",\n\t\t\tpath: "creating-the-diffeditor/multi-line-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the DiffEditor",\n\t\t\tname: "Inline Diff Example",\n\t\t\tid: "creating-the-diffeditor-inline-diff-example",\n\t\t\tpath: "creating-the-diffeditor/inline-diff-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Creating the DiffEditor",\n\t\t\tname: "Navigating a Diff",\n\t\t\tid: "creating-the-diffeditor-navigating-a-diff",\n\t\t\tpath: "creating-the-diffeditor/navigating-a-diff",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Custom languages",\n\t\t\tid: "extending-language-services-custom-languages",\n\t\t\tpath: "extending-language-services/custom-languages",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Completion provider example",\n\t\t\tid: "extending-language-services-completion-provider-example",\n\t\t\tpath: "extending-language-services/completion-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Codelens provider example",\n\t\t\tid: "extending-language-services-codelens-provider-example",\n\t\t\tpath: "extending-language-services/codelens-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Color provider example",\n\t\t\tid: "extending-language-services-color-provider-example",\n\t\t\tpath: "extending-language-services/color-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Symbols provider example",\n\t\t\tid: "extending-language-services-symbols-provider-example",\n\t\t\tpath: "extending-language-services/symbols-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Folding provider example",\n\t\t\tid: "extending-language-services-folding-provider-example",\n\t\t\tpath: "extending-language-services/folding-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Hover provider example",\n\t\t\tid: "extending-language-services-hover-provider-example",\n\t\t\tpath: "extending-language-services/hover-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Model markers example",\n\t\t\tid: "extending-language-services-model-markers-example",\n\t\t\tpath: "extending-language-services/model-markers-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Semantic tokens provider example",\n\t\t\tid: "extending-language-services-semantic-tokens-provider-example",\n\t\t\tpath: "extending-language-services/semantic-tokens-provider-example",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Configure JavaScript defaults",\n\t\t\tid: "extending-language-services-configure-javascript-defaults",\n\t\t\tpath: "extending-language-services/configure-javascript-defaults",\n\t\t},\n\t\t{\n\t\t\tchapter: "Extending Language Services",\n\t\t\tname: "Configure JSON defaults",\n\t\t\tid: "extending-language-services-configure-json-defaults",\n\t\t\tpath: "extending-language-services/configure-json-defaults",\n\t\t},\n\t];\n\n\tif (typeof exports !== "undefined") {\n\t\texports.PLAY_SAMPLES = PLAY_SAMPLES;\n\t} else {\n\t\tself.PLAY_SAMPLES = PLAY_SAMPLES;\n\t}\n})();\n'}}]);
//# sourceMappingURL=3756.js.map