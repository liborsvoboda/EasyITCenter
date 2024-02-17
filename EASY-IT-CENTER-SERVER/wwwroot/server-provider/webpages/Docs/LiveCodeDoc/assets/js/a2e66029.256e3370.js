"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),o=n(9493);function i(e){const t=(0,a.useRef)(null),[n,r]=(0,a.useState)(e.className||""),[i,s]=(0,a.useState)(e.style||{}),[l,d]=(0,a.useState)(e.height),[p,c]=(0,a.useState)(),[m,u]=(0,a.useState)(JSON.stringify(e.config||"")),[h,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:i,sdkReady:l,config:y,...g}=e;if(r(n||""),s(a||{}),d(i),p&&h===JSON.stringify(g)){if(m===JSON.stringify(y))return;u(JSON.stringify(y)),"string"==typeof y?fetch(y).then((e=>e.json())).then((e=>{p?.setConfig(e)})):y&&p.setConfig(y)}else f(JSON.stringify(g)),p?.destroy(),(0,o.T)(t.current,{config:y,...g}).then((e=>{c(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{p?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:i,"data-height":l})}var s=n(1446),l=n(412),d=n(814),p=n(4866),c=n(5162),m=n(2134),u=n(420);function h(e){const[t,n]=(0,a.useState)(e.js),[r,o]=(0,a.useState)(e.ts),[i,s]=(0,a.useState)(e.react),[h,f]=(0,a.useState)(e.vue),[y,g]=(0,a.useState)(e.svelte),v="3.7rem",[b,w]=(0,a.useState)(!0),[k,_]=(0,a.useState)(v),x=(0,a.useRef)(null),P=()=>{setTimeout((()=>{_(`calc(${x.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{_(`calc(${x.current.offsetHeight}px + ${v})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),o(e(r,"ts")),s(e(i,"jsx")),f(e(h,"html")),g(e(y,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":b,style:{height:b?v:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{w(!b),P()}},"show code"),a.createElement("div",{ref:x,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:m.Z.collapsibleContent},a.createElement(p.Z,{groupId:"sdk-code"},a.createElement(c.Z,{value:"js",label:"JS",attributes:{onMouseDown:P}},a.createElement(d.Z,{language:"js"},t)),a.createElement(c.Z,{value:"ts",label:"TS",attributes:{onMouseDown:P}},a.createElement(d.Z,{language:"ts"},r)),a.createElement(c.Z,{value:"react",label:"React",attributes:{onMouseDown:P}},a.createElement(d.Z,{language:"jsx"},i)),a.createElement(c.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:P}},a.createElement(d.Z,{language:"html"},h)),a.createElement(c.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:P}},a.createElement(d.Z,{language:"html"},y))))))}const f="container_Egsj";function y(e){const{className:t,style:n,showCode:o,height:l,...d}=e,p=e=>JSON.stringify(e,null,2),c=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(d)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${p(d)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${p(d)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),y=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${p(d)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,g=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${p(d)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(i,(0,r.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:s.G},e)),!1!==e.showCode&&a.createElement(h,{js:c,ts:m,react:u,vue:y,svelte:g}))}},1818:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7294),a=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,t?.()):n??null}var i=n(814),s=n(9493),l=n(1446);function d(e){const{params:t,config:n,code:a,language:d="js",codeTitle:p="",showLineNumbers:c=!1,formatCode:m=!0,linkText:u="Run in LiveCodes",style:h={},className:f=""}=e,y=(0,s.r)({appUrl:l.G,params:t,config:n});return r.createElement("div",{style:{marginBottom:"30px",...h},className:f},a&&r.createElement(o,null,(()=>{return r.createElement(i.Z,{language:d,title:p,showLineNumbers:c},m?(e=a,void 0===(t=d)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):a);var e,t})),r.createElement("a",{href:y,target:"_blank",rel:"noreferrer"},u,r.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>o});var r=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:r={},config:a={},import:o,lite:i,loading:s="lazy",template:l,view:d="split"}=t,p="headless"===d;let c,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!p||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!p)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),P(m),document.body.appendChild(m)}try{c=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=c.origin;if("object"==typeof r&&Object.keys(r).forEach((e=>{c.searchParams.set(e,String(r[e]))})),"string"==typeof a)try{new URL(a),c.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&c.searchParams.set("config","sdk")}l&&c.searchParams.set("template",l),o&&c.searchParams.set("x",o),i&&c.searchParams.set("lite","true"),c.searchParams.set("embed","true"),c.searchParams.set("loading",p?"eager":s),c.searchParams.set("view",d);let h=!1;const f="Cannot call API methods after calling `destroy()`.",y=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!p){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||p||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="5px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const r="eager"===s?"eager":"lazy";n.setAttribute("loading",r),n.classList.add("livecodes"),p?P(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},u))})),n.onload=()=>{e(n)},n.src=c.href,m.appendChild(n)})),g=new Promise((e=>{addEventListener("message",(function t(n){n.source===y.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),g.settled=!0)}))})),v=()=>h?Promise.reject(f):new Promise((async e=>{g.settled&&e();y.contentWindow?.postMessage({type:"livecodes-load"},u),await g,e()})),b=(e,t)=>new Promise((async(n,r)=>{if(h)return r(f);await v();const a=N();addEventListener("message",(function t(o){if(o.source===y.contentWindow&&o.origin===u&&"livecodes-api-response"===o.data?.type&&o.data?.id===a&&o.data.method===e){removeEventListener("message",t);const e=o.data.payload;e?.error?r(e.error):n(e)}})),y.contentWindow?.postMessage({method:e,id:a,args:t},u)})),w={},k=["load","ready","code","console","tests","destroy"],_=(e,t)=>{if(h)throw new Error(f);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==y.contentWindow||e.origin!==u||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const x=()=>{Object.values(w).forEach((e=>{e.length=0})),y?.remove?.(),h=!0};if("lazy"===s&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function P(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const N=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>_("code",e),watch:_,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b("exec",[e,...n])},destroy:()=>g.settled?b("destroy").then(x):h?Promise.reject(f):(x(),Promise.resolve())}}function o(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:o,...i}=e,s="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,r.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...i,...n,x:o,...s}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let r;const o=e.dataset.config||e.dataset.prefill;if(o)try{r=JSON.parse(o)}catch{}const i=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+i,...t,...r?{config:r}:{}})}))}))},67:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,libParams:()=>m,metadata:()=>d,params:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(1818),i=n(325);const s={},l="Python (Wasm)",d={unversionedId:"languages/python-wasm",id:"languages/python-wasm",title:"Python (Wasm)",description:"Pyodide is a Python distribution for the browser and Node.js based on WebAssembly.",source:"@site/docs/languages/python-wasm.md",sourceDirName:"languages",slug:"/languages/python-wasm",permalink:"/docs/languages/python-wasm",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/python-wasm.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"PurgeCSS",permalink:"/docs/languages/purgecss"},next:{title:"Python",permalink:"/docs/languages/python"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Loading Modules",id:"loading-modules",level:3},{value:"Standard Library",id:"standard-library",level:3},{value:"External Packages",id:"external-packages",level:3},{value:"JavaScript Interoperability",id:"javascript-interoperability",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Aliases",id:"aliases",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Version",id:"version",level:3},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Live Reload",id:"live-reload",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],m={pyodide:"import snowballstemmer\nstemmer = snowballstemmer.stemmer('english')\nprint(stemmer.stemWords('go goes going gone'.split()))\n",languages:"pyodide",console:"full",compiled:"none"},u={"python-wasm":'# From: https://github.com/TheAlgorithms/Python\n# License: https://github.com/TheAlgorithms/Python/blob/master/LICENSE.md\n\n"""\nImplementation of a basic regression decision tree.\nInput data set: The input data set must be 1-dimensional with continuous labels.\nOutput: The decision tree maps a real number input to a real number output.\n"""\nimport numpy as np\n\n\nclass DecisionTree:\n    def __init__(self, depth=5, min_leaf_size=5):\n        self.depth = depth\n        self.decision_boundary = 0\n        self.left = None\n        self.right = None\n        self.min_leaf_size = min_leaf_size\n        self.prediction = None\n\n    def mean_squared_error(self, labels, prediction):\n        """\n        mean_squared_error:\n        @param labels: a one dimensional numpy array\n        @param prediction: a floating point value\n        return value: mean_squared_error calculates the error if prediction is used to\n            estimate the labels\n        >>> tester = DecisionTree()\n        >>> test_labels = np.array([1,2,3,4,5,6,7,8,9,10])\n        >>> test_prediction = float(6)\n        >>> tester.mean_squared_error(test_labels, test_prediction) == (\n        ...     TestDecisionTree.helper_mean_squared_error_test(test_labels,\n        ...         test_prediction))\n        True\n        >>> test_labels = np.array([1,2,3])\n        >>> test_prediction = float(2)\n        >>> tester.mean_squared_error(test_labels, test_prediction) == (\n        ...     TestDecisionTree.helper_mean_squared_error_test(test_labels,\n        ...         test_prediction))\n        True\n        """\n        if labels.ndim != 1:\n            print("Error: Input labels must be one dimensional")\n\n        return np.mean((labels - prediction) ** 2)\n\n    def train(self, x, y):\n        """\n        train:\n        @param x: a one dimensional numpy array\n        @param y: a one dimensional numpy array.\n        The contents of y are the labels for the corresponding X values\n\n        train does not have a return value\n        """\n\n        """\n        this section is to check that the inputs conform to our dimensionality\n        constraints\n        """\n        if x.ndim != 1:\n            print("Error: Input data set must be one dimensional")\n            return\n        if len(x) != len(y):\n            print("Error: X and y have different lengths")\n            return\n        if y.ndim != 1:\n            print("Error: Data set labels must be one dimensional")\n            return\n\n        if len(x) < 2 * self.min_leaf_size:\n            self.prediction = np.mean(y)\n            return\n\n        if self.depth == 1:\n            self.prediction = np.mean(y)\n            return\n\n        best_split = 0\n        min_error = self.mean_squared_error(x, np.mean(y)) * 2\n\n        """\n        loop over all possible splits for the decision tree. find the best split.\n        if no split exists that is less than 2 * error for the entire array\n        then the data set is not split and the average for the entire array is used as\n        the predictor\n        """\n        for i in range(len(x)):\n            if len(x[:i]) < self.min_leaf_size:\n                continue\n            elif len(x[i:]) < self.min_leaf_size:\n                continue\n            else:\n                error_left = self.mean_squared_error(x[:i], np.mean(y[:i]))\n                error_right = self.mean_squared_error(x[i:], np.mean(y[i:]))\n                error = error_left + error_right\n                if error < min_error:\n                    best_split = i\n                    min_error = error\n\n        if best_split != 0:\n            left_x = x[:best_split]\n            left_y = y[:best_split]\n            right_x = x[best_split:]\n            right_y = y[best_split:]\n\n            self.decision_boundary = x[best_split]\n            self.left = DecisionTree(\n                depth=self.depth - 1, min_leaf_size=self.min_leaf_size\n            )\n            self.right = DecisionTree(\n                depth=self.depth - 1, min_leaf_size=self.min_leaf_size\n            )\n            self.left.train(left_x, left_y)\n            self.right.train(right_x, right_y)\n        else:\n            self.prediction = np.mean(y)\n\n        return\n\n    def predict(self, x):\n        """\n        predict:\n        @param x: a floating point value to predict the label of\n        the prediction function works by recursively calling the predict function\n        of the appropriate subtrees based on the tree\'s decision boundary\n        """\n        if self.prediction is not None:\n            return self.prediction\n        elif self.left or self.right is not None:\n            if x >= self.decision_boundary:\n                return self.right.predict(x)\n            else:\n                return self.left.predict(x)\n        else:\n            print("Error: Decision tree not yet trained")\n            return None\n\n\nclass TestDecisionTree:\n    """Decision Tres test class"""\n\n    @staticmethod\n    def helper_mean_squared_error_test(labels, prediction):\n        """\n        helper_mean_squared_error_test:\n        @param labels: a one dimensional numpy array\n        @param prediction: a floating point value\n        return value: helper_mean_squared_error_test calculates the mean squared error\n        """\n        squared_error_sum = float(0)\n        for label in labels:\n            squared_error_sum += (label - prediction) ** 2\n\n        return float(squared_error_sum / labels.size)\n\n\ndef main():\n    """\n    In this demonstration we\'re generating a sample data set from the sin function in\n    numpy.  We then train a decision tree on the data set and use the decision tree to\n    predict the label of 10 different test values. Then the mean squared error over\n    this test is displayed.\n    """\n    x = np.arange(-1.0, 1.0, 0.005)\n    y = np.sin(x)\n\n    tree = DecisionTree(depth=10, min_leaf_size=10)\n    tree.train(x, y)\n\n    test_cases = (np.random.rand(10) * 2) - 1\n    predictions = np.array([tree.predict(x) for x in test_cases])\n    avg_error = np.mean((predictions - test_cases) ** 2)\n\n    print("Test values: " + str(test_cases))\n    print("Predictions: " + str(predictions))\n    print("Average error: " + str(avg_error))\n\n\nif __name__ == "__main__":\n    main()\n    import doctest\n    doctest.testmod(name="mean_squarred_error", verbose=True)\n',languages:"pyodide",console:"full",compiled:"none"},h={toc:c,libParams:m,params:u};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-wasm"},"Python (Wasm)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org"},"Pyodide")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/"},"Python")," distribution for the browser and Node.js based on WebAssembly."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pyodide makes it possible to install and run Python packages in the browser with ",(0,a.kt)("a",{parentName:"p",href:"https://micropip.pyodide.org"},"micropip"),". Any pure Python package with a wheel available on PyPI is supported. Many packages with C extensions have also been ported for use with Pyodide. These include many general-purpose packages such as regex, pyyaml, lxml and scientific Python packages including numpy, pandas, scipy, matplotlib, and scikit-learn."),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org"},"https://pyodide.org"))),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Pyodide is a port of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/python/cpython"},"CPython")," to WebAssembly/Emscripten. This matches the behavior of the official Python interpreter and allows importing many Python packages. However, the full Python interpreter compiled to WebAssembly needs to be downloaded in the result page."),(0,a.kt)("p",{parentName:"admonition"},"If you do not need to import external packages, you may want to use the lighter-weight ",(0,a.kt)("a",{parentName:"p",href:"/docs/languages/python"},"Python interpreter written in JavaScript"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Using Pyodide allows running Python code in the browser. There is no server required to run the code and no need to install Python or explicitly install packages. Packages imported in code are automatically loaded using ",(0,a.kt)("a",{parentName:"p",href:"https://micropip.pyodide.org"},"micropip"),"."),(0,a.kt)("p",null,"In addition, since the Python code is running on the client-side, it has access to the ",(0,a.kt)("a",{parentName:"p",href:"#javascript-interoperability"},"JavaScript scope"),", including the page DOM and browser APIs. See the ",(0,a.kt)("a",{parentName:"p",href:"#starter-template"},"starter template")," for an example."),(0,a.kt)("h3",{id:"loading-modules"},"Loading Modules"),(0,a.kt)("p",null,"Modules can just be imported in code without the need for any explicit installs. The modules are automatically loaded using ",(0,a.kt)("a",{parentName:"p",href:"https://micropip.pyodide.org"},"micropip"),"."),(0,a.kt)("h3",{id:"standard-library"},"Standard Library"),(0,a.kt)("p",null,"Most of the Python standard library is functional, except for the modules ",(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/wasm-constraints.html"},"listed here"),"."),(0,a.kt)("h3",{id:"external-packages"},"External Packages"),(0,a.kt)("p",null,"Pyodide allows using many external packages (all pure Python packages on PyPI and many general-purpose and scientific ",(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/packages-in-pyodide.html"},"packages built in Pyodide"),")."),(0,a.kt)("p",null,"Example:"),(0,a.kt)(o.Z,{params:m,code:m.pyodide,language:"python",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("p",null,"In addition, ",(0,a.kt)("a",{parentName:"p",href:"https://micropip.pyodide.org"},"micropip")," can be used to load external packages from custom URLs. See ",(0,a.kt)("a",{parentName:"p",href:"https://micropip.pyodide.org/en/stable/project/usage.html#examples"},"examples"),"."),(0,a.kt)("h3",{id:"javascript-interoperability"},"JavaScript Interoperability"),(0,a.kt)("p",null,"The JavaScript scope can be accessed from Python using the ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," module."),(0,a.kt)("p",null,"See Pyodide documentations about ",(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/quickstart.html#accessing-javascript-scope-from-python"},"accessing JavaScript scope from Python")," and ",(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org/en/stable/usage/type-conversions.html"},"type translations")," for more information."),(0,a.kt)("p",null,"Check the ",(0,a.kt)("a",{parentName:"p",href:"#starter-template"},"starter template")," for an example."),(0,a.kt)("h2",{id:"language-info"},"Language Info"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"python-wasm")),(0,a.kt)("h3",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".py3"),", ",(0,a.kt)("inlineCode",{parentName:"p"},".wasm.py")),(0,a.kt)("h3",{id:"aliases"},"Aliases"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pyodide"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"py-wasm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pythonwasm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"pywasm")),(0,a.kt)("h3",{id:"editor"},"Editor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script")),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://pyodide.org"},"Pyodide")),(0,a.kt)("h3",{id:"version"},"Version"),(0,a.kt)("p",null,"Pyodide v0.24.0, running Python v3.11.3"),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"Not supported."),(0,a.kt)("h2",{id:"live-reload"},"Live Reload"),(0,a.kt)("p",null,"By default, when code is updated, the Pyodide environment is re-used while the global variables are reset. This behavior is used for performance reasons. However, in order to fully reload Pyodide and start a new environment, insert this comment in the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# __livecodes_reload__\n")),(0,a.kt)("p",null,"Think of this like restarting the kernel in Jupyter notebooks."),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)(i.Z,{params:u,height:"80vh",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"starter-template"},"Starter Template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=python-wasm"},"https://livecodes.io/?template=python-wasm")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pyodide.org"},"Pyodide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://micropip.pyodide.org"},"micropip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/languages/python"},"Brython in LiveCodes"))))}f.isMDXComponent=!0}}]);