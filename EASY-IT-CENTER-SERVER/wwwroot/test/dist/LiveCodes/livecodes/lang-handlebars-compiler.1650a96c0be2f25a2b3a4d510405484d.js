"use strict";(()=>{var p=(t,e=!0)=>t.replace(/\\/g,e?"\\\\":"\\").replace(/`/g,"\\`").replace(/<\/script>/g,"<\\/script>");var d=(t,e)=>({...e.customSettings[t]});var u=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],g=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],h=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],n={getModuleUrl:(t,{isModule:e=!0,defaultCDN:r="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let s=m(t,e,r);return s||(e?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")||t.startsWith("data:")?t:m(t,!1,e||v())||t,cdnLists:{npm:g,module:u,gh:h},checkCDNs:async(t,e)=>{let r=[e,...n.cdnLists.npm].filter(Boolean);for(let s of r)try{if((await fetch(n.getUrl(t,s),{method:"HEAD"})).ok)return s}catch{}return n.cdnLists.npm[0]}},v=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||n.cdnLists.npm[0]}catch{return n.cdnLists.npm[0]}},m=(t,e,r)=>{let s=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",h[0]):t.includes(":")||(t=(r||(e?u[0]:g[0]))+":"+t);for(let c of w){let[a,U]=c;if(a.test(t))return t.replace(a,U)+s}return null},w=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:i,getModuleUrl:q}=n,f="5.5.2",x=i("@live-codes/browser-compilers@0.10.0/dist/");var l=i("handlebars@4.7.7/dist/");var k="0.6.64",M=i(`malinajs@${k}/malina.js`);var A=`https://typescript.azureedge.net/cdn/${f}/monaco/min/vs`;var o=i("prettier@3.2.5/"),b=i("@prettier/plugin-php@0.19.6/standalone.js");var R=i(`typescript@${f}/lib/typescript.js`);var W=o+"standalone.js",j={babel:o+"plugins/babel.js",estree:o+"plugins/estree.js",glimmer:o+"plugins/glimmer.js",html:o+"plugins/html.js",markdown:o+"plugins/markdown.js",postcss:o+"plugins/postcss.js",php:b,pug:x+"prettier/parser-pug.js"};var C=l+"handlebars.min.js",y=l+"handlebars.runtime.min.js",I={name:"handlebars",title:"Handlebars",parser:{name:"glimmer",pluginUrls:[j.glimmer]},compiler:{url:C,factory:(t,e)=>(self.importScripts(e+"waiting"),self.createHandlebarsCompiler())},extensions:["hbs","handlebars"],editor:"markup",editorLanguage:"html"};self.createHandlebarsCompiler=()=>async(t,{config:e})=>{let r=d("handlebars",e),s=e.customSettings.template?.data||{};if(e.customSettings.template?.prerender!==!1)return self.Handlebars.compile(t,r)(s);let c=self.Handlebars.precompile(t,r);return`<!-- ... compiling ... -->

<script src="${y}"><\/script>
<script>
window.addEventListener("load", () => {
const template = Handlebars.template(${c});
const content = template({
  ...${p(JSON.stringify(s||{}))},
  ...window.livecodes?.templateData,
});
document.body.innerHTML += content
parent.postMessage({type: 'compiled', payload: {language: 'handlebars', content}}, '*');
});
<\/script>
`};})();
