"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6120],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(o),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return o?r.createElement(f,a(a({ref:t},p),{},{components:o})):r.createElement(f,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5076:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const i={},a="Editor Settings",s={unversionedId:"features/editor-settings",id:"features/editor-settings",title:"Editor Settings",description:"LiveCodes allows a lot of flexibility for configuring which code editor to use and its settings.",source:"@site/docs/features/editor-settings.md",sourceDirName:"features",slug:"/features/editor-settings",permalink:"/docs/features/editor-settings",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/editor-settings.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"User Settings",permalink:"/docs/features/user-settings"},next:{title:"Default Template/Language",permalink:"/docs/features/default-template-language"}},l={},d=[{value:"Code Editor",id:"code-editor",level:3},{value:"Editor Options",id:"editor-options",level:3},{value:"Emmet",id:"emmet",level:3},{value:"Editor Modes",id:"editor-modes",level:3},{value:"Format Options",id:"format-options",level:3}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"editor-settings"},"Editor Settings"),(0,n.kt)("p",null,"LiveCodes allows a lot of flexibility for configuring which code editor to use and its settings."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Editor Settings")," screen can be accessed from app menu \u2192 Editor Settings."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LiveCodes Editor Settings",src:o(7082).Z,width:"1900",height:"1103"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"LiveCodes Editor Settings",src:o(7999).Z,width:"2686",height:"1560"})),(0,n.kt)("p",null,"A preview code editor is displayed to preview the settings in real time."),(0,n.kt)("p",null,"The settings selected in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Editor Settings")," screen are saved locally to ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/user-settings"},"user settings")," and are used subsequently. These include:"),(0,n.kt)("h3",{id:"code-editor"},"Code Editor"),(0,n.kt)("p",null,"The following code editors are supported:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://microsoft.github.io/monaco-editor/"},(0,n.kt)("strong",{parentName:"a"},"Monaco Editor")),": This is the code editor that powers ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},(0,n.kt)("strong",{parentName:"a"},"VS Code")),". It is ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/codebasics"},"feature-rich")," and supports autocomplete with ",(0,n.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/editor/intellisense"},(0,n.kt)("strong",{parentName:"a"},"IntelliSense"))," (including ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/intellisense"},"types for custom libraries"),"). However, it requires a relatively large download and is not supported in mobile browsers. (editor-only compressed size: ",(0,n.kt)("strong",{parentName:"li"},"~2.5 MB"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://codemirror.net/"},(0,n.kt)("strong",{parentName:"a"},"CodeMirror")),": Has ",(0,n.kt)("a",{parentName:"li",href:"https://codemirror.net/docs/extensions/"},"many editing features"),", including autocomplete, with good ",(0,n.kt)("strong",{parentName:"li"},"mobile support"),". (editor-only compressed size: ",(0,n.kt)("strong",{parentName:"li"},"~180 kB"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medv.io/codejar/"},(0,n.kt)("strong",{parentName:"a"},"CodeJar")),": A ",(0,n.kt)("strong",{parentName:"li"},"lightweight")," code editor with very basic editing features. ",(0,n.kt)("a",{parentName:"li",href:"https://prismjs.com/"},"PrismJs")," is used for syntax highlighting. Please note that some editor settings are not supported in CodeJar (see below). (editor-only compressed size: ",(0,n.kt)("strong",{parentName:"li"},"~18 kB"),")")),(0,n.kt)("p",null,"This can be configured using the ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/configuration-object#editor"},(0,n.kt)("inlineCode",{parentName:"a"},"editor"))," configuration option."),(0,n.kt)("p",null,"By default, Monaco editor is used on desktop, CodeMirror is used on mobile and CodeJar is used in ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/display-modes#codeblock"},"codeblocks"),", in ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/lite"},"lite mode")," and in ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/configuration-object#readonly"},"readonly")," playgrounds."),(0,n.kt)("h3",{id:"editor-options"},"Editor Options"),(0,n.kt)("p",null,"These include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#editortheme"},"Editor theme")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#fontfamily"},"Font family")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#fontsize"},"Font size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#usetabs"},"Indentation")," (Spaces/Tabs)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#tabsize"},"Tab size")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#linenumbers"},"Line numbers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#wordwrap"},"Word-wrap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#closebrackets"},"Auto-close brackets and quotes"))),(0,n.kt)("h3",{id:"emmet"},"Emmet"),(0,n.kt)("p",null,"Allows using ",(0,n.kt)("a",{parentName:"p",href:"https://emmet.io/"},(0,n.kt)("strong",{parentName:"a"},"Emmet"))," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.emmet.io/"},"abbreviations and actions"),". See ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/configuration-object#emmet"},(0,n.kt)("inlineCode",{parentName:"a"},"emmet"))," configuration option."),(0,n.kt)("p",null,"(Not supported in CodeJar)"),(0,n.kt)("h3",{id:"editor-modes"},"Editor Modes"),(0,n.kt)("p",null,"Allows using ",(0,n.kt)("a",{parentName:"p",href:"https://vimhelp.org/"},(0,n.kt)("strong",{parentName:"a"},"Vim"))," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/emacs/manual/html_node/emacs/Basic.html"},(0,n.kt)("strong",{parentName:"a"},"Emacs"))," keyboard bindings. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/configuration/configuration-object#editormode"},(0,n.kt)("inlineCode",{parentName:"a"},"editorMode"))," configuration option."),(0,n.kt)("p",null,"(Not supported in CodeJar)"),(0,n.kt)("h3",{id:"format-options"},"Format Options"),(0,n.kt)("p",null,"These are ",(0,n.kt)("a",{parentName:"p",href:"https://prettier.io/"},(0,n.kt)("strong",{parentName:"a"},"Prettier"))," ",(0,n.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/options.html"},"configuration options")," used for code formatting."),(0,n.kt)("p",null,"In addition to those specified in ",(0,n.kt)("a",{parentName:"p",href:"#editor-options"},"Editor Options"),", the following options are available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#semicolons"},"Use Semicolons")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#singlequote"},"Use Single Quotes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration/configuration-object#trailingcomma"},"Use Trailing Commas"))))}c.isMDXComponent=!0},7082:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/editor-settings-1a116e8c9fdbb39e68a71b5d605df2c6.jpg"},7999:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/editor-settings2-25cbcea5ba7bf6fbf9bead0dc0074b35.jpg"}}]);