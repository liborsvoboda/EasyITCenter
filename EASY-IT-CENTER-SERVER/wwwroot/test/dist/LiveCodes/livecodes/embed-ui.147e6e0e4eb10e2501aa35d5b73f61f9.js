var b={title:"Untitled Project",description:"",head:`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,htmlAttrs:'lang="en" class=""',tags:[],autoupdate:!0,autosave:!1,autotest:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",layout:"responsive",editorTheme:void 0,recoverUnsaved:!0,showSpacing:!1,welcome:!0,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,enableAI:!1,editorMode:void 0,version:"30"};var q='<div id="embed-container" class="modal-container"><div class="modal-title">Embed Project</div><div id="embed-screen-container" class="modal-screen-container"><div class="modal-screen"><label>Preview</label><div id="embed-preview-container">Loading Preview...</div><form id="embed-form"></form><label for="embed-code">Code</label><div id="embed-code" class="custom-editor"></div><button id="embed-copy-btn" class="wide-button">Copy Code</button><div class="description">Please check the <a href="{{DOCS_BASE_URL}}configuration/" target="_blank" rel="noopener">documentations</a> for advanced configurations.</div></div></div></div>';var ne=t=>t.replace(/{{APP_VERSION}}/g,"30").replace(/{{SDK_VERSION}}/g,"0.5.0").replace(/{{COMMIT_SHA}}/g,"").replace(/{{REPO_URL}}/g,"").replace(/{{DOCS_BASE_URL}}/g,"/docs/");var B=ne(q);var j=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&#34;");var E=(t,r=!0)=>t.replace(/\\/g,r?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var z=t=>(globalThis.structuredClone||(r=>JSON.parse(JSON.stringify(r,(a,l)=>l===void 0?null:l))))(t);var W=t=>{if(document.queryCommandSupported&&document.queryCommandSupported("copy")){let r=document.createElement("textarea");r.textContent=t,r.style.position="fixed",document.body.appendChild(r),r.select();try{return document.execCommand("copy")}catch(a){return console.warn("Copy to clipboard failed.",a),!1}finally{document.body.removeChild(r)}}return!1};var C=(t,r,a=!0)=>(a?"":" ".repeat(r))+t.split(`
`).join(`
`+" ".repeat(r));var V=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],J=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],Z=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],u={getModuleUrl:(t,{isModule:r=!0,defaultCDN:a="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let l=K(t,r,a);return l||(r?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,r)=>t.startsWith("http")||t.startsWith("data:")?t:K(t,!1,r||oe())||t,cdnLists:{npm:J,module:V,gh:Z},checkCDNs:async(t,r)=>{let a=[r,...u.cdnLists.npm].filter(Boolean);for(let l of a)try{if((await fetch(u.getUrl(t,l),{method:"HEAD"})).ok)return l}catch{}return u.cdnLists.npm[0]}},oe=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||u.cdnLists.npm[0]}catch{return u.cdnLists.npm[0]}},K=(t,r,a)=>{let l=r&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",Z[0]):t.includes(":")||(t=(a||(r?V[0]:J[0]))+":"+t);for(let g of re){let[y,x]=g;if(y.test(t))return t.replace(y,x)+l}return null},re=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var se={esm:"livecodes.js",umd:"livecodes.umd.js",react:"react.js",vue:"vue.js",types:"index.d.ts"},Q={getAppUrl:()=>"https://v30.livecodes.io/",getSDKUrl:(t="esm")=>u.getUrl(`livecodes@0.5.0/${se[t]}`)};var ye=async({baseUrl:t,config:r,editorLanguages:a,modal:l,notifications:g,eventsManager:y,createEditorFn:x,getUrlFn:A})=>{let M=r.title,f=r.activeEditor||"markup",O=document.createElement("div");O.innerHTML=B;let w=O.firstChild;l.show(w,{isAsync:!0});let R=w.querySelector("#embed-preview-container"),S=w.querySelector("#embed-form"),P=w.querySelector("#embed-code"),I=w.querySelector("#embed-copy-btn");if(!R||!S||!P||!I)return;[{title:"Theme",name:"theme",options:[{label:"Dark",value:"dark",checked:!0},{label:"Light",value:"light"}]},{title:"Loading",name:"loading",options:[{label:"Lazy",value:"lazy",checked:!0},{label:"On-click",value:"click"},{label:"Eager",value:"eager"}]},{title:"Lite Mode",name:"lite",options:[{value:"true",checked:!1}],help:"/docs/features/lite"},{title:"Read only",name:"readonly",options:[{value:"true",checked:!1}]},{title:"Display Mode",name:"mode",options:[{label:"Full",value:"full",checked:!0},{label:"Editor",value:"editor"},{label:"Code Block",value:"codeblock"},{label:"Result",value:"result"}],help:"/docs/features/display-modes"},{title:"Default View",name:"view",options:[{label:"Split",value:"split",checked:!0},{label:"Editor",value:"editor"},{label:"Result",value:"result"}],help:"/docs/features/default-view"},{title:"Active Editor",name:"activeEditor",options:[{label:a.markup,value:"markup",checked:f==="markup"},{label:a.style,value:"style",checked:f==="style"},{label:a.script,value:"script",checked:f==="script"}]},{title:"Tools",name:"tools",options:[{label:"Closed",value:"closed",checked:!0},{label:"Open",value:"open"},{label:"Full",value:"full"},{label:"None",value:"none"}],help:"/docs/features/tools-pane"},{title:"Active Tool",name:"activeTool",options:[{label:"Console",value:"console",checked:!0},{label:"Compiled",value:"compiled"},{label:"Tests",value:"tests"}].filter(e=>!(e.value==="tests"&&!r.tests?.content)),help:"/docs/features/tools-pane"},{title:"Permanent URL",name:"permanentUrl",options:[{value:"true",checked:!0}],help:"/docs/features/permanent-url"},{title:"Embed Type",name:"type",options:[{label:"Script (CDN)",value:"cdn",checked:!0},{label:"JS (npm)",value:"npm"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Svelte",value:"svelte"},{label:"Iframe",value:"iframe"},{label:"HTML",value:"html"}]}].forEach(e=>{let o=document.createElement("label");if(o.innerHTML=e.title,S.appendChild(o),e.help){let s=document.createElement("a");s.href=e.help,s.target="_blank",s.classList.add("help-link"),s.title="Click for info...",o.appendChild(s);let m=document.createElement("img");m.src=t+"assets/icons/info.svg",s.appendChild(m)}let i=document.createElement("div");i.classList.add("input-container"),S.appendChild(i),e.options.forEach(s=>{let m=`embed-${e.name}`,c=`${m}-${s.value}`,k=!s.label&&s.value==="true",$=document.createElement("span");i.appendChild($);let d=document.createElement("input");if(d.type=k?"checkbox":"radio",d.name=m,d.id=c,d.value=s.value,d.checked=s.checked||!1,$.appendChild(d),k)d.classList.add("switch");else{let n=document.createElement("label");n.classList.add("radio-label"),n.htmlFor=c,n.innerHTML=s.label||"",$.appendChild(n)}})});let L=await x(P),G="https://livecodes.io",F=Q.getSDKUrl("umd"),T=await A(!0),h=new URL(T),U=h.origin+h.pathname,D=document.createElement("iframe");D.id="embed-preview-iframe",R.innerHTML="",R.appendChild(D);let X=()=>"livecodes-"+(Math.random()+1).toString(36).substring(2),v=e=>{let o={...e.mode!==b.mode?{mode:e.mode}:{},...e.theme!==b.theme?{theme:e.theme}:{},...e.tools!=="closed"||e.activeTool!=="console"?{tools:{enabled:e.tools==="none"?[]:"all",status:e.tools,active:e.activeTool}}:{},...e.readonly?{readonly:e.readonly}:{},...e.mode!=="result"&&e.activeEditor!==f?{activeEditor:e.activeEditor}:{}},i=h.searchParams.get("x");return{...U!=="https://livecodes.io/"?{appUrl:U}:{},...Object.keys(o).length>0?{config:o}:{},...i?{import:i}:{},...e.lite?{lite:e.lite}:{},...e.loading!=="lazy"?{loading:e.loading}:{},...e.view&&e.view!=="split"?{view:e.view}:{}}},H=e=>{let o=new URL(T);return o.searchParams.set(e.lite?"lite":"embed","true"),e.loading&&e.loading!=="lazy"&&o.searchParams.set("loading",String(e.loading)),e.view&&e.view!=="split"&&o.searchParams.set("view",String(e.view)),e.mode!=="result"&&e.activeEditor&&e.activeEditor!==f&&o.searchParams.set("activeEditor",String(e.activeEditor)),e.mode&&e.mode!==b.mode&&o.searchParams.set("mode",String(e.mode)),e.theme&&e.theme!==b.theme&&o.searchParams.set("theme",String(e.theme)),e.tools&&(e.tools!=="closed"||e.activeTool!=="console")&&o.searchParams.set(e.tools==="none"?"tools":String(e.activeTool),String(e.tools)),e.readonly!==void 0&&o.searchParams.set("readonly",String(e.readonly)),decodeURIComponent(o.href)},Y={cdn:e=>{let o=X(),i=`<div id="${o}"></div>`,s=v(e),m=JSON.stringify(s,null,2),c=C(m,2);return`
${i}
<script src="${F}"><\/script>
<script>
  const options = ${c};
  livecodes.createPlayground("#${o}", options);
<\/script>
`.trimStart()},npm(e){let o=v(e);return`
import { createPlayground } from "livecodes";
const options = ${JSON.stringify(o,null,2)};
createPlayground("#container", options);
`.trimStart()},react(e){let o=v(e),i=JSON.stringify(o,null,2);return`
import LiveCodes from "livecodes/react";
export default function App() {
  const options = ${C(i,2)};
  return <LiveCodes {...options}></LiveCodes>;
}
`.trimStart()},vue(e){let o=v(e),i=JSON.stringify(o,null,2);return`
<script setup>
  import LiveCodes from 'livecodes/vue';
  const options = ${C(i,2)};
<\/script>

<template>
  <LiveCodes v-bind="options" />
</template>
`.trimStart()},svelte(e){let o=v(e),i=JSON.stringify(o,null,2);return`
<script>
  import { onMount } from 'svelte';
  import { createPlayground } from 'livecodes';
  const options = ${C(i,2)};
  let container;
  let playground;
  onMount(() => {
    createPlayground(container, options).then((p) => (playground = p));
    return () => playground?.destroy();
  });
<\/script>

<div bind:this="{container}"></div>
`.trimStart()},iframe:e=>{let o=H(e),i=new URL(o);i.searchParams.delete("embed"),i.searchParams.delete("lite");let s=decodeURIComponent(i.href);return`
<iframe title="${M}" scrolling="no" loading="lazy" style="height:300px; width: 100%; border:1px solid black; border-radius:5px;" src="${o}">
  See the project <a href="${s}" target="_blank">${M}</a> on <a href="${G}" target="_blank">LiveCodes</a>.
</iframe>
`.trimStart()},html:e=>{let{import:o,...i}=v(e),s={...z(r),...i.config};return Object.keys(s).forEach(c=>{(JSON.stringify(s[c])===JSON.stringify(b[c])||c==="activeEditor"&&s.activeEditor==="markup"||["markup","style","script"].includes(c))&&delete s[c]}),Object.keys(s).length>0&&(i.config=s),`
<div class="livecodes" style="height: 300px;" data-options='${E(JSON.stringify(i).replace(/'/g,"&#39;"))}'>
<pre data-lang="${r.markup.language}">${E(j(r.markup.content||""))}</pre>
<pre data-lang="${r.style.language}">${E(j(r.style.content||""))}</pre>
<pre data-lang="${r.script.language}">${E(j(r.script.content||""))}</pre>
</div>
<script defer src="${F}" data-prefill><\/script>
`.trimStart()}},p={view:"split",tools:"closed",activeTool:"console"},N=async()=>{let e=Array.from(new FormData(S)).reduce((n,[ee,_])=>({...n,[ee.replace("embed-","")]:_==="true"?!0:_}),{});T=await A(!!e.permanentUrl),h=new URL(T),U=h.origin+h.pathname;let o=document.querySelectorAll('input[name="embed-view"]');e.mode!=="full"?(p.view=e.view||p.view,delete e.view,o.forEach(n=>{n.checked=!1,n.disabled=!0})):o.forEach(n=>{n.value===(e.view||p.view)&&(n.checked=!0),n.disabled=!1,n.checked&&(e.view=n.value)});let i=document.querySelectorAll('input[name="embed-tools"]'),s=document.querySelectorAll('input[name="embed-activeTool"]');e.lite?(p.tools=e.tools||p.tools,delete e.tools,i.forEach(n=>{n.checked=!1,n.disabled=!0})):i.forEach(n=>{n.value===(e.tools||p.tools)&&(n.checked=!0),n.disabled=!1,n.checked&&(e.tools=n.value)}),e.lite||e.tools==="none"?(p.activeTool=e.activeTool||p.activeTool,delete e.activeTool,s.forEach(n=>{n.checked=!1,n.disabled=!0})):s.forEach(n=>{n.value===(e.activeTool||p.activeTool)&&(n.checked=!0),n.disabled=!1,n.checked&&(e.activeTool=n.value)}),document.querySelectorAll('input[name="embed-activeEditor"]').forEach(n=>{e.mode==="result"?(n.checked=n.value===f,n.disabled=!0,delete e.activeEditor):n.disabled=!1}),D.src=H(e);let c=e.type,k=Y[c]?.(e),d={npm:"javascript",react:"jsx"}[c]||"html";L.getLanguage()!==d?L.setLanguage(d,k):L.setValue(k)};y.addEventListener(S,"change",N),y.addEventListener(I,"click",async()=>{W(L.getValue())?g.success("Code copied to clipboard"):g.error("Failed to copy to clipboard")}),N()};export{ye as createEmbedUI};
