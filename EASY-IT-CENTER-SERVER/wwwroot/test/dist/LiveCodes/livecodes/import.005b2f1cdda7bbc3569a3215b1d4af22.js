var Pe=Object.create;var z=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var Fe=Object.getOwnPropertyNames;var We=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var $e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ne=(e,t,o,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let d of Fe(t))!Oe.call(e,d)&&d!==o&&z(e,d,{get:()=>t[d],enumerable:!(l=De(t,d))||l.enumerable});return e};var Je=(e,t,o)=>(o=e!=null?Pe(We(e)):{},Ne(t||!e||!e.__esModule?z(o,"default",{value:e,enumerable:!0}):o,e));var Z=$e((at,P)=>{var Ve=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",l={};function d(r,c){if(!l[r]){l[r]={};for(var p=0;p<r.length;p++)l[r][r.charAt(p)]=p}return l[r][c]}var f={compressToBase64:function(r){if(r==null)return"";var c=f._compress(r,6,function(p){return t.charAt(p)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(r){return r==null?"":r==""?null:f._decompress(r.length,32,function(c){return d(t,r.charAt(c))})},compressToUTF16:function(r){return r==null?"":f._compress(r,15,function(c){return e(c+32)})+" "},decompressFromUTF16:function(r){return r==null?"":r==""?null:f._decompress(r.length,16384,function(c){return r.charCodeAt(c)-32})},compressToUint8Array:function(r){for(var c=f.compress(r),p=new Uint8Array(c.length*2),n=0,a=c.length;n<a;n++){var g=c.charCodeAt(n);p[n*2]=g>>>8,p[n*2+1]=g%256}return p},decompressFromUint8Array:function(r){if(r==null)return f.decompress(r);for(var c=new Array(r.length/2),p=0,n=c.length;p<n;p++)c[p]=r[p*2]*256+r[p*2+1];var a=[];return c.forEach(function(g){a.push(e(g))}),f.decompress(a.join(""))},compressToEncodedURIComponent:function(r){return r==null?"":f._compress(r,6,function(c){return o.charAt(c)})},decompressFromEncodedURIComponent:function(r){return r==null?"":r==""?null:(r=r.replace(/ /g,"+"),f._decompress(r.length,32,function(c){return d(o,r.charAt(c))}))},compress:function(r){return f._compress(r,16,function(c){return e(c)})},_compress:function(r,c,p){if(r==null)return"";var n,a,g={},S={},E="",T="",x="",y=2,U=3,u=2,h=[],s=0,i=0,L;for(L=0;L<r.length;L+=1)if(E=r.charAt(L),Object.prototype.hasOwnProperty.call(g,E)||(g[E]=U++,S[E]=!0),T=x+E,Object.prototype.hasOwnProperty.call(g,T))x=T;else{if(Object.prototype.hasOwnProperty.call(S,x)){if(x.charCodeAt(0)<256){for(n=0;n<u;n++)s=s<<1,i==c-1?(i=0,h.push(p(s)),s=0):i++;for(a=x.charCodeAt(0),n=0;n<8;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1}else{for(a=1,n=0;n<u;n++)s=s<<1|a,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=0;for(a=x.charCodeAt(0),n=0;n<16;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1}y--,y==0&&(y=Math.pow(2,u),u++),delete S[x]}else for(a=g[x],n=0;n<u;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1;y--,y==0&&(y=Math.pow(2,u),u++),g[T]=U++,x=String(E)}if(x!==""){if(Object.prototype.hasOwnProperty.call(S,x)){if(x.charCodeAt(0)<256){for(n=0;n<u;n++)s=s<<1,i==c-1?(i=0,h.push(p(s)),s=0):i++;for(a=x.charCodeAt(0),n=0;n<8;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1}else{for(a=1,n=0;n<u;n++)s=s<<1|a,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=0;for(a=x.charCodeAt(0),n=0;n<16;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1}y--,y==0&&(y=Math.pow(2,u),u++),delete S[x]}else for(a=g[x],n=0;n<u;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1;y--,y==0&&(y=Math.pow(2,u),u++)}for(a=2,n=0;n<u;n++)s=s<<1|a&1,i==c-1?(i=0,h.push(p(s)),s=0):i++,a=a>>1;for(;;)if(s=s<<1,i==c-1){h.push(p(s));break}else i++;return h.join("")},decompress:function(r){return r==null?"":r==""?null:f._decompress(r.length,32768,function(c){return r.charCodeAt(c)})},_decompress:function(r,c,p){var n=[],a,g=4,S=4,E=3,T="",x=[],y,U,u,h,s,i,L,m={val:p(0),position:c,index:1};for(y=0;y<3;y+=1)n[y]=y;for(u=0,s=Math.pow(2,2),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;switch(a=u){case 0:for(u=0,s=Math.pow(2,8),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;L=e(u);break;case 1:for(u=0,s=Math.pow(2,16),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;L=e(u);break;case 2:return""}for(n[3]=L,U=L,x.push(L);;){if(m.index>r)return"";for(u=0,s=Math.pow(2,E),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;switch(L=u){case 0:for(u=0,s=Math.pow(2,8),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;n[S++]=e(u),L=S-1,g--;break;case 1:for(u=0,s=Math.pow(2,16),i=1;i!=s;)h=m.val&m.position,m.position>>=1,m.position==0&&(m.position=c,m.val=p(m.index++)),u|=(h>0?1:0)*i,i<<=1;n[S++]=e(u),L=S-1,g--;break;case 2:return x.join("")}if(g==0&&(g=Math.pow(2,E),E++),n[L])T=n[L];else if(L===S)T=U+U.charAt(0);else return null;x.push(T),n[S++]=U+T.charAt(0),g--,U=T,g==0&&(g=Math.pow(2,E),E++)}}};return f}();typeof P<"u"&&P!=null&&(P.exports=Ve)});var F={title:"Untitled Project",description:"",head:`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,htmlAttrs:'lang="en" class=""',tags:[],autoupdate:!0,autosave:!1,autotest:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",layout:"responsive",editorTheme:void 0,recoverUnsaved:!0,showSpacing:!1,welcome:!0,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,enableAI:!1,editorMode:void 0,version:"30"};var K='<div id="import-container" class="modal-container"><div class="modal-title">Import</div><ul id="import-tabs" class="modal-tabs"><li data-target="import-code" class="active">Import Code</li><li data-target="import-json">Import Project JSON</li><li data-target="bulk-import-json">Bulk Import</li></ul><div id="import-screens" class="modal-screen-container"><div id="import-code" class="tab-content active"><div class="modal-screen"><form id="url-import-form"><label for="code-url">URL</label> <input type="text" id="code-url" placeholder="https://"> <button id="url-import-btn" class="wide-button" type="submit">Import from URL</button></form><form id="local-code-import-form"><label for="local-code-input">Local file</label> <label for="local-code-input" class="file-input-label">Import local files</label> <input type="file" id="local-code-input" class="file-input" multiple></form><div class="description">Supported Sources:<ul><li>GitHub gist</li><li>GitHub file</li><li>Directory in a GitHub repo</li><li>Gitlab snippet</li><li>Gitlab file</li><li>Directory in a Gitlab repo</li><li>JS Bin</li><li>Raw code</li><li>Code in web page DOM</li><li>Code in zip file</li><li>Official playgrounds<br>(TypeScript, Vue and Svelte)</li></ul>Please visit the <a href="{{DOCS_BASE_URL}}features/import" target="_blank" rel="noopener">documentations</a> for details.</div></div></div><div id="import-json" class="tab-content"><div class="modal-screen"><div class="description">Import a single project JSON to editor. A project can be exported from app&nbsp;menu&nbsp;\u2192 Export&nbsp;\u2192 Export&nbsp;Project&nbsp;(JSON).</div><form id="json-url-import-form"><label for="json-url">URL</label> <input type="text" id="json-url" placeholder="https://"> <button id="json-url-import-btn" class="wide-button" type="submit">Import project from URL</button></form><form id="file-url-import-form"><label for="file-input">Local file</label> <label for="file-input" class="file-input-label">Import project from local file</label> <input type="file" id="file-input" class="file-input" accept="application/json"></form></div></div><div id="bulk-import-json" class="tab-content"><div class="modal-screen"><div class="description">Bulk import multiple projects to your saved projects. Projects can be exported from the <a href="#" id="link-to-saved-projects">Saved Projects</a> screen.</div><form id="bulk-json-url-import-form"><label for="bulk-json-url">URL</label> <input type="text" id="bulk-json-url" placeholder="https://"> <button id="bulk-json-url-import-btn" class="wide-button" type="submit">Bulk import from URL</button></form><form id="bulk-file-url-import-form"><label for="bulk-file-input">Local file</label> <label for="bulk-file-input" class="file-input-label">Bulk import from local file</label> <input type="file" id="bulk-file-input" class="file-input" accept="application/json"></form></div></div></div></div>';var ze=e=>e.replace(/{{APP_VERSION}}/g,"30").replace(/{{SDK_VERSION}}/g,"0.5.0").replace(/{{COMMIT_SHA}}/g,"").replace(/{{REPO_URL}}/g,"").replace(/{{DOCS_BASE_URL}}/g,"/docs/");var V=ze(K);var W=(e,t)=>new Promise((o,l)=>{if(t&&globalThis[t])return o(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?o(globalThis[t]):o(globalThis);let d=document.createElement("script");d.src=e,d.async=!0;let f=()=>{d.removeEventListener("load",r),d.removeEventListener("error",c)},r=()=>{if(f(),!t)return o("loaded: "+e);let p=setInterval(()=>{if(window[t])return clearInterval(p),o(window[t])},5)},c=()=>{f(),l("failed to load: "+e)};d.addEventListener("load",r),d.addEventListener("error",c),document.head.appendChild(d)});var Ke=e=>e.ok?e:Promise.reject(),_=(e,t)=>fetch(e,t).then(Ke);var O=e=>{if(!e)return null;let t=null;if(e.startsWith("http")||e.startsWith("data:"))try{t=new URL(e).href}catch{try{t=new URL(decodeURIComponent(e)).href}catch{}}return t};var C=Je(Z());var $=(e,t=!0)=>{let o=(0,C.decompressFromEncodedURIComponent)(e);if(o){if(!t)return o;try{if(JSON.parse(o))return o}catch{}}return(0,C.decompressFromBase64)(e)};var Q=e=>{let t=e.slice(5),o;try{o=JSON.parse($(t)||"{}")}catch{o={}}return o};var A=(e=location.origin)=>!!(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var Y=["esm.sh","skypack","esm.run","jsdelivr.esm","fastly.jsdelivr.esm","gcore.jsdelivr.esm","testingcf.jsdelivr.esm","jsdelivr.b-cdn.esm","jspm"],ee=["jsdelivr","fastly.jsdelivr","unpkg","gcore.jsdelivr","testingcf.jsdelivr","jsdelivr.b-cdn","npmcdn"],te=["jsdelivr.gh","fastly.jsdelivr.gh","statically","gcore.jsdelivr.gh","testingcf.jsdelivr.gh","jsdelivr.b-cdn.gh"],k={getModuleUrl:(e,{isModule:t=!0,defaultCDN:o="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let l=X(e,t,o);return l||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:X(e,!1,t||Ze())||e,cdnLists:{npm:ee,module:Y,gh:te},checkCDNs:async(e,t)=>{let o=[t,...k.cdnLists.npm].filter(Boolean);for(let l of o)try{if((await fetch(k.getUrl(e,l),{method:"HEAD"})).ok)return l}catch{}return k.cdnLists.npm[0]}},Ze=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||k.cdnLists.npm[0]}catch{return k.cdnLists.npm[0]}},X=(e,t,o)=>{let l=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",te[0]):e.includes(":")||(e=(o||(t?Y[0]:ee[0]))+":"+e);for(let d of Qe){let[f,r]=d;if(f.test(e))return e.replace(f,r)+l}return null},Qe=[[/^(esm\.sh:)(.+)/i,"https://esm.sh/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(jsr:)(.+)/i,"https://esm.sh/jsr/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly\.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(gcore\.jsdelivr:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2"],[/^(testingcf\.jsdelivr:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2"],[/^(jsdelivr\.b-cdn:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2"],[/^(jsdelivr\.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly\.jsdelivr\.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(gcore\.jsdelivr\.gh:)(.+)/i,"https://gcore.jsdelivr.net/gh/$2"],[/^(testingcf\.jsdelivr\.gh:)(.+)/i,"https://testingcf.jsdelivr.net/gh/$2"],[/^(jsdelivr\.b-cdn\.gh:)(.+)/i,"https://jsdelivr.b-cdn.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm\.run:)(.+)/i,"https://esm.run/$2"],[/^(jsdelivr\.esm:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2/+esm"],[/^(fastly\.jsdelivr\.esm:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2/+esm"],[/^(gcore\.jsdelivr\.esm:)(.+)/i,"https://gcore.jsdelivr.net/npm/$2/+esm"],[/^(testingcf\.jsdelivr\.esm:)(.+)/i,"https://testingcf.jsdelivr.net/npm/$2/+esm"],[/^(jsdelivr\.b-cdn\.esm:)(.+)/i,"https://jsdelivr.b-cdn.net/npm/$2/+esm"],[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle\.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(npmcdn:)(.+)/i,"https://npmcdn.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:N,getModuleUrl:ht}=k,oe="5.5.2";var re=N("jszip@3.10.1/dist/jszip.js");var Xe="0.6.64",yt=N(`malinajs@${Xe}/malina.js`);var xt=`https://typescript.azureedge.net/cdn/${oe}/monaco/min/vs`;var bt=N(`typescript@${oe}/lib/typescript.js`);var se="https://dpaste.com/",et="https://dpaste.com/api/v2/",ie="https://api2.livecodes.io/share",ce={getProject:async e=>{try{let t=await fetch(se+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(et,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(se,""):""}catch{return""}}},tt={getProject:async e=>{if(e.length<11)return ce.getProject(e);if(!A())return{};try{let t=await fetch(ie+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!A())return"";try{let t=await fetch(ie,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},le=A()?tt:ce;var ae=e=>{let t=e.slice(3);return le.getProject(t)};var R=e=>{try{return e.startsWith("https://")?new URL(e):new URL("https://"+e)}catch{return}},H={github:/^(?:(?:http|https):\/\/)?github\.com\/(?:.*)/g,githubGist:/^(?:(?:http|https):\/\/)?gist\.github\.com(?:\/\S*)?\/(\w+)/g,gitlab:/^(?:(?:http|https):\/\/)?gitlab\.com\/(?:.*)/g,codepen:/^(?:(?:http|https):\/\/)?codepen\.io\/(\w+)\/pen\/(\w+)/g,jsbin:/^(?:(?:(?:http|https):\/\/)?(?:\w+.)?)?jsbin\.com\/((\w)+(\/\d+)?)(?:.*)/g,typescriptPlayground:/^(?:(?:http|https):\/\/)?(?:www\.)?typescriptlang\.org\/play(?:.*)/g,vuePlayground:/^(?:(?:http|https):\/\/)?play\.vuejs\.org(?:.*)/g,sveltePlayground:/^(?:(?:http|https):\/\/)?svelte\.dev\/repl\/(?:.*)/g},pe=e=>e.startsWith("code/"),me=(e,t=new RegExp(H.codepen))=>t.test(e),ue=e=>e.startsWith("dom/"),de=(e,t=new RegExp(H.github))=>{if(t.test(e))try{let o=R(e);return o?o.pathname.split("/")[3]==="blob":void 0}catch{return}};var ge=(e,t=new RegExp(H.github))=>{if(t.test(e))try{let o=R(e);if(!o)return;let l=o.pathname;o.pathname.endsWith("/")&&(l=o.pathname.slice(0,-1));let d=l.split("/");return d[3]==="tree"||d.length===3}catch{return}},fe=(e,t=new RegExp(H.githubGist))=>t.test(e),he=(e,t=new RegExp(H.gitlab))=>{if(t.test(e))try{let o=R(e);return o?o.pathname.split("/")[4]==="blob":void 0}catch{return}},ye=(e,t=new RegExp(H.gitlab))=>{if(t.test(e))try{let o=R(e);if(!o)return;let l=o.pathname;o.pathname.endsWith("/")&&(l=o.pathname.slice(0,-1));let d=l.split("/");return d[4]==="tree"||d.length===3}catch{return}},xe=(e,t=new RegExp(H.gitlab))=>{if(!t.test(e))return;let o=R(e);if(!o)return;let l=o.pathname.split("/");return l[l.length-2]==="snippets"},be=(e,t=new RegExp(H.jsbin))=>t.test(e),Se=e=>e.startsWith("id/"),Le=(e,t=new RegExp(H.typescriptPlayground))=>t.test(e),ve=(e,t=new RegExp(H.vuePlayground))=>t.test(e),Te=(e,t=new RegExp(H.sveltePlayground))=>t.test(e);var Ee=async(e,t,o,l,d)=>{if(pe(e))return Q(e);if(Se(e))return ae(e);let f=await import(d+"import-src.70ff51638949e00bc51de07c5ea93fcf.js"),{importFromCodepen:r,importFromDom:c,importFromGithub:p,importFromGithubDir:n,importFromGithubGist:a,importFromGitlab:g,importFromGitlabDir:S,importFromGitlabSnippet:E,importFromJsbin:T,importSveltePlayground:x,importTypescriptPlayground:y,importVuePlayground:U,importFromUrl:u}=f;return ue(e)?c(e,t,o):fe(e)?a(e,t):ge(e)?n(e,t,l):de(e)?p(e,l):xe(e)?E(e,t):ye(e)?S(e,t):he(e)?g(e):me(e)?r(e):be(e)?T(e):Te(e)?x(e):Le(e)?y(e):ve(e)?U(e):O(e)?u(e,t,o):Promise.resolve({})};var we=async(e,t)=>new Promise(async(o,l)=>{(await W(re,"JSZip")).loadAsync(e).then(async f=>{let r=f.file(/livecodes\.json/);if(r.length>0){r[0].async("string").then(g=>{o(JSON.parse(g))}).catch(l);return}let c=f.file(/((^src\/)|(\/src\/))/),p=f.file(/.*/),n=p.filter(g=>!g.name.includes("/")),a=c.length>0?c:n.length>0?n:p;if(a.length>0){let g=await Promise.all(a.map(async S=>({filename:S.name,content:await S.async("string")})));o(t(g,{}));return}o({})}).catch(l)});var Me=e=>e.querySelector("#url-import-form"),je=e=>e.querySelector("#url-import-btn"),J=e=>e.querySelector("#code-url"),Ue=e=>e.querySelector("#local-code-input"),He=e=>e.querySelector("#json-url-import-form"),ke=e=>e.querySelector("#json-url-import-btn"),qe=e=>e.querySelector("#json-url"),Ie=e=>e.querySelector("#bulk-json-url-import-form"),Ce=e=>e.querySelector("#bulk-json-url-import-btn"),Ae=e=>e.querySelector("#bulk-json-url"),Re=e=>e.querySelector("#link-to-saved-projects"),Be=e=>e.querySelector("#file-input");var _e=e=>e.querySelector("#bulk-file-input");var ot=e=>{let t=document.createElement("div");t.innerHTML=V;let o=t.firstChild,l=o.querySelectorAll("#import-tabs li");return l.forEach(d=>{e.addEventListener(d,"click",()=>{l.forEach(r=>r.classList.remove("active")),d.classList.add("active"),document.querySelectorAll("#import-screens > div").forEach(r=>{r.classList.remove("active")});let f=o.querySelector("#"+d.dataset.target);f?.classList.add("active"),f?.querySelector("input")?.focus()})}),o},Er=({baseUrl:e,modal:t,notifications:o,eventsManager:l,getUser:d,loadConfig:f,populateConfig:r,projectStorage:c,showScreen:p})=>{let n=ot(l),a=Me(n),g=je(n);l.addEventListener(a,"submit",async b=>{b.preventDefault();let w=g.innerHTML;g.innerHTML="Loading...",g.disabled=!0;let v=J(n),M=v.value,j=await Ee(M,{},F,await d?.(),e);j&&Object.keys(j).length>0?(await f({...F,...j},location.origin+location.pathname+"?x="+encodeURIComponent(M)),t.close()):(g.innerHTML=w,g.disabled=!1,o.error("failed to load URL"),v.focus())});let S=b=>new Promise((w,v)=>{let M=Array.from(b.files),j=[];for(let q of M){if(q.size>104857600){v("Error: Exceeded size 100 MB");return}let I=new FileReader;l.addEventListener(I,"load",async D=>{let G=D.target?.result||"";j.push({filename:q.name,content:G}),j.length===M.length&&w(r(j,{}))}),l.addEventListener(I,"error",()=>{v("Error: Failed to read file")}),I.readAsText(q)}}),E=b=>we(b.files[0],r),T=Ue(n);l.addEventListener(T,"change",()=>{if(T.files?.length===0)return;(T.files?.length===1&&T.files[0].name.endsWith(".zip")?E:S)(T).then(f).then(t.close).catch(w=>{o.error(w)})});let x=He(n),y=ke(n);l.addEventListener(x,"submit",async b=>{b.preventDefault();let w=y.innerHTML;y.innerHTML="Loading...",y.disabled=!0;let v=qe(n),M=v.value;_(M).then(j=>j.json()).then(j=>f(j,location.origin+location.pathname+"?config="+M)).then(()=>t.close()).catch(()=>{y.innerHTML=w,y.disabled=!1,o.error("Error: failed to load URL"),v.focus()})});let U=Ie(n),u=Ce(n);l.addEventListener(U,"submit",async b=>{b.preventDefault();let w=u.innerHTML;u.innerHTML="Loading...",u.disabled=!0;let v=Ae(n),M=v.value;_(M).then(j=>j.json()).then(s).catch(()=>{u.innerHTML=w,u.disabled=!1,o.error("Error: failed to load URL"),v.focus()})});let h=b=>new Promise((w,v)=>{if(b.files?.length===0)return;let M=b.files[0];if(["application/json","text/plain"].indexOf(M.type)===-1){v("Error: Incorrect file type");return}let q=100*1024*1024;if(M.size>q){v("Error: Exceeded size 100 MB");return}let B=new FileReader;l.addEventListener(B,"load",async I=>{let D=I.target?.result||"";try{w(JSON.parse(D))}catch{v("Invalid configuration file")}}),l.addEventListener(B,"error",()=>{v("Error: Failed to read file")}),B.readAsText(M)}),s=async b=>{let w=v=>v.config||v.pen;if(Array.isArray(b)&&b.every(w)&&c){await c.bulkInsert(b.map(w)),o.success("Import Successful!"),p("open");return}return Promise.reject("Error: Invalid file")},i=Be(n);l.addEventListener(i,"change",()=>{h(i).then(f).then(t.close).catch(b=>{o.error(b)})});let L=_e(n);l.addEventListener(L,"change",()=>{h(L).then(s).catch(b=>{o.error(b)})});let m=Re(n);l.addEventListener(m,"click",b=>{b.preventDefault(),p("open")}),t.show(n,{isAsync:!0}),J(n).focus()};export{Er as createImportUI,Ee as importCode};
