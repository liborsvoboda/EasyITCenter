var k=t=>!t?.startsWith("http")&&!t?.startsWith("data:"),m=(t,e=document.baseURI)=>k(t)?new URL(t,e).href:t;var u=(t,e)=>new Promise((s,r)=>{if(e&&globalThis[e])return s(globalThis[e]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(t),e&&globalThis[e]?s(globalThis[e]):s(globalThis);let o=document.createElement("script");o.src=t,o.async=!0;let i=()=>{o.removeEventListener("load",p),o.removeEventListener("error",n)},p=()=>{if(i(),!e)return s("loaded: "+t);let l=setInterval(()=>{if(window[e])return clearInterval(l),s(window[e])},5)},n=()=>{i(),r("failed to load: "+t)};o.addEventListener("load",p),o.addEventListener("error",n),document.head.appendChild(o)});var h=["esm.sh","skypack","jspm"],f=["unpkg","jsdelivr","fastly.jsdelivr"],x=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],c={getModuleUrl:(t,{isModule:e=!0,defaultCDN:s="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let r=g(t,e,s);return r||(e?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")||t.startsWith("data:")?t:g(t,!1,e||$())||t,cdnLists:{npm:f,module:h,gh:x},checkCDNs:async(t,e)=>{let s=[e,...c.cdnLists.npm].filter(Boolean);for(let r of s)try{if((await fetch(c.getUrl(t,r),{method:"HEAD"})).ok)return r}catch{}return c.cdnLists.npm[0]}},$=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||c.cdnLists.npm[0]}catch{return c.cdnLists.npm[0]}},g=(t,e,s)=>{let r=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",x[0]):t.includes(":")||(t=(s||(e?h[0]:f[0]))+":"+t);for(let o of R){let[i,p]=o;if(i.test(t))return t.replace(i,p)+r}return null},R=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:a,getModuleUrl:I}=c;var q="0.6.64",A=a(`malinajs@${q}/malina.js`);var b=a("requirejs@2.3.6/require.js"),w=a("https://cdn.rescript-lang.org/v9.1.2/compiler.js"),y=a("https://cdn.rescript-lang.org/v9.1.2/%40rescript/react/cmij.js"),U=a("@rescript/std@9.1.3/lib/es6/"),j=a("https://cdn.rescript-lang.org/v10.1.2/compiler.js"),v=a("https://cdn.rescript-lang.org/v10.1.2/%40rescript/react/cmij.js"),C=a("@rescript/std@10.1.2/lib/es6/");var d=/(import\s+?(?:(?:(?:[\w*\s{},\$]*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g;var E=(t,e)=>t.replace(new RegExp(d),s=>s.replace(new RegExp(d),"$2").replace(/"/g,"").replace(/'/g,"").startsWith("./stdlib/")?s.replace("./stdlib/",e):s),S=async t=>(window.require||(await u(b,"require"),window.requirejs.config({waitSeconds:0})),new Promise((e,s)=>{t==="reason"?window.require([w,y],()=>{window.reason_compiler=window.rescript_compiler,window.rescript_compiler=void 0,window.loadedReasonCompiler=window.reason_compiler.make();let r=window.loadedReasonCompiler;r.setModuleSystem("es6"),r.setFilename("index.bs.js"),e()},s):window.require([j,v],()=>{window.rescript_ocaml_compiler=window.rescript_compiler,window.rescript_compiler=void 0,window.loadedRescriptCompiler=window.rescript_ocaml_compiler.make();let r=window.loadedRescriptCompiler;r.setModuleSystem("es6"),r.setFilename("index.bs.js"),e()},s)})),it=async(t,{baseUrl:e,language:s})=>{if(!t)return"";let r=s==="reason"?"loadedReasonCompiler":"loadedRescriptCompiler",o=s==="reason"?U:C,i=3;for(;!window[r]&&i>0;)try{await S(s)}catch{console.warn(`Failed to load ${s} compiler. Retrying...`),i--}let n=window[r][s].compile(t);try{return n.type==="success"&&n.js_code?E(n.js_code,m(o,e)):(n.errors?n.errors.forEach(l=>{console.error(l.fullMsg)}):n.msg&&console.warn(n.msg,n.type),"")}catch(l){return console.error(l),""}};export{it as rescriptCompiler};
