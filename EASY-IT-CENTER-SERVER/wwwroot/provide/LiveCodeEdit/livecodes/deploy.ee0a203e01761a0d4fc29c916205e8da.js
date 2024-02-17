var F='<!DOCTYPE html><html><head><script id="message-script" data-env="development">window.addEventListener("message",(function(e){var t=e.data.result||e.data.html;t&&(document.write(t),document.close())}))<\/script></head><body></body></html>';var D='<div id="deploy-container" class="modal-container"><div class="modal-title">Deploy to GitHub Pages</div><ul id="deploy-tabs" class="modal-tabs"><li data-target="new-repo" class="active">Create New Repo</li><li data-target="existing-repo">Existing Repo</li></ul><div id="deploy-screens" class="modal-screen-container"><div id="new-repo" class="tab-content active"><div class="modal-screen"><form id="new-repo-form"><div><label for="new-repo-name">Repo Name <span id="new-repo-name-error" class="error"></span></label> <input type="text" id="new-repo-name" placeholder="Required"></div><div><label for="new-repo-message">Commit Message</label> <input type="text" id="new-repo-message" placeholder="Optional"></div><div class="padded"><input type="checkbox" id="new-repo-source"> <label for="new-repo-source">Commit source code (public)</label></div><button id="new-repo-btn" class="wide-button" type="submit">Deploy</button></form><div class="description">A new <strong>public</strong> repo will be created. The result page will be pushed to <span class="code">gh-pages</span> branch.</div></div></div><div id="existing-repo" class="tab-content"><div class="modal-screen"><form id="existing-repo-form"><div><label for="existing-repo-name">Repo Name</label> <input type="text" id="existing-repo-name" autocomplete="off" placeholder="Loading..."></div><div><label for="existing-repo-message">Commit Message</label> <input type="text" id="existing-repo-message" placeholder="Optional"></div><div class="padded"><input type="checkbox" id="existing-repo-source"> <label for="existing-repo-source">Commit source code (public)</label></div><button id="existing-repo-btn" class="wide-button" type="submit">Deploy</button></form><div class="description">A new commit will be added to <span class="code">gh-pages</span> branch.</div></div></div></div></div>';var P=e=>e.replace(/{{APP_VERSION}}/g,"22").replace(/{{SDK_VERSION}}/g,"0.4.0").replace(/{{COMMIT_SHA}}/g,"18c61b4").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/docs/"),N=P(F);var _=P(D);var O=["esm.sh","skypack","jspm"],z=["unpkg","jsdelivr","fastly.jsdelivr"],G=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],L={getModuleUrl:(e,{isModule:t=!0,defaultCDN:o="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let n=W(e,t,o);return n||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")||e.startsWith("data:")?e:W(e,!1,t||ve())||e,cdnLists:{npm:z,module:O,gh:G},checkCDNs:async(e,t)=>{let o=[t,...L.cdnLists.npm].filter(Boolean);for(let n of o)try{if((await fetch(L.getUrl(e,n),{method:"HEAD"})).ok)return n}catch{}return L.cdnLists.npm[0]}},ve=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||L.cdnLists.npm[0]}catch{return L.cdnLists.npm[0]}},W=(e,t,o)=>{let n=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",G[0]):e.includes(":")||(e=(o||(t?O[0]:z[0]))+":"+e);for(let s of He){let[r,c]=s;if(r.test(e))return e.replace(r,c)+n}return null},He=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:C,getModuleUrl:et}=L;var J=C("@tarekraafat/autocomplete.js@10.2.6/dist/autoComplete.js");var Ue="0.6.64",tt=C(`malinajs@${Ue}/malina.js`);var V=C("easyqrcodejs@4.5.0/dist/easy.qrcode.min.js");var Ce=typeof btoa=="function",k=typeof Buffer=="function",nt=typeof TextDecoder=="function"?new TextDecoder:void 0,K=typeof TextEncoder=="function"?new TextEncoder:void 0,ke="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",v=Array.prototype.slice.call(ke),rt=(e=>{let t={};return e.forEach((o,n)=>t[o]=n),t})(v);var f=String.fromCharCode.bind(String),st=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),qe=e=>e.replace(/=/g,"").replace(/[+\/]/g,t=>t=="+"?"-":"_");var je=e=>{let t,o,n,s,r="",c=e.length%3;for(let i=0;i<e.length;){if((o=e.charCodeAt(i++))>255||(n=e.charCodeAt(i++))>255||(s=e.charCodeAt(i++))>255)throw new TypeError("invalid character found");t=o<<16|n<<8|s,r+=v[t>>18&63]+v[t>>12&63]+v[t>>6&63]+v[t&63]}return c?r.slice(0,c-3)+"===".substring(c):r},Q=Ce?e=>btoa(e):k?e=>Buffer.from(e,"binary").toString("base64"):je,Re=k?e=>Buffer.from(e).toString("base64"):e=>{let o=[];for(let n=0,s=e.length;n<s;n+=4096)o.push(f.apply(null,e.subarray(n,n+4096)));return Q(o.join(""))};var Ae=e=>{if(e.length<2){var t=e.charCodeAt(0);return t<128?e:t<2048?f(192|t>>>6)+f(128|t&63):f(224|t>>>12&15)+f(128|t>>>6&63)+f(128|t&63)}else{var t=65536+(e.charCodeAt(0)-55296)*1024+(e.charCodeAt(1)-56320);return f(240|t>>>18&7)+f(128|t>>>12&63)+f(128|t>>>6&63)+f(128|t&63)}},Ie=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,Be=e=>e.replace(Ie,Ae),Z=k?e=>Buffer.from(e,"utf8").toString("base64"):K?e=>Re(K.encode(e)):e=>Q(Be(e)),Y=(e,t=!1)=>t?qe(Z(e)):Z(e);var b=(e,t="_")=>e.replace(/[\W]+/g,t);var q=(e,t)=>new Promise((o,n)=>{if(t&&globalThis[t])return o(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?o(globalThis[t]):o(globalThis);let s=document.createElement("script");s.src=e,s.async=!0;let r=()=>{s.removeEventListener("load",c),s.removeEventListener("error",i)},c=()=>{if(r(),!t)return o("loaded: "+e);let a=setInterval(()=>{if(window[t])return clearInterval(a),o(window[t])},5)},i=()=>{r(),n("failed to load: "+e)};s.addEventListener("load",c),s.addEventListener("error",i),document.head.appendChild(s)});var X=(e,{getLanguageExtension:t})=>{let o={markup:"index",style:"style",script:"script"},n=Object.keys(o).reduce((i,a)=>{let p=o[a],l=e[a].language,m=t?.(l)||"md",u=e[a].content||"";return{...i,...u?{[p+"."+m]:{content:u}}:{}}},{}),s=e.stylesheets.length>0?{styles:{content:e.stylesheets.map(i=>`<link rel="stylesheet" href="${i}" />`).join(`
`)}}:void 0,r=e.scripts.length>0?{scripts:{content:e.scripts.map(i=>`<script src="${i}"><\/script>`).join(`
`)}}:void 0,c=e.tests?.content?{["script.spec."+t?.(e.tests?.language)||"ts"]:{content:e.tests?.content}}:void 0;return{...n,...s,...r,...c}},ee=(e,t,o,n=!0)=>{let s=n?"https://gist.github.com/":"https://github.com/",r=t?t.username?"by ["+t.displayName+"]("+s+t.username+")":"by "+t.displayName:"",c=o?`[project](https://livecodes.io/?x=${o})`:"project";return{[b(e.title)+".md"]:{content:`# ${e.title}
A ${c} created ${r} on [LiveCodes](https://livecodes.io).`}}};var te=()=>(Date.now()+""+Math.floor(Math.floor(Math.random()*Date.now()))).substring(0,24);var g=(e,t)=>({Accept:`application/vnd.github.v3${t?"."+t:""}+json`,"Content-Type":"application/json",Authorization:"token "+e.token}),oe=async(e,t)=>{try{return(await fetch(`https://api.github.com/repos/${e.username}/${t}`,{method:"GET",cache:"no-store",headers:g(e)})).ok}catch{return!1}},ne=async(e,t,o=!1,n)=>{let s=await fetch("https://api.github.com/user/repos",{method:"POST",cache:"no-store",headers:g(e),body:JSON.stringify({name:t,private:o,...o?{}:{homepage:`https://${e.username}.github.io/${t}/`},...n?{description:n}:{}})});if(!s.ok)throw await s.json().then(c=>c.errors[0]?.message)==="name already exists on this account"?new Error("Repo name already exists"):new Error("Error creating repo");return s.json().then(r=>r.name)},re=async({user:e,repo:t,branch:o,file:n,message:s,initialize:r=!1,encoded:c=!1})=>{let i=`https://api.github.com/repos/${e.username}/${t}/contents/`,a=n.path.split("/").slice(0,-1).join("/"),p;if(!r){let m=await fetch(i+a,{method:"GET",cache:"no-store",headers:g(e)});m.ok&&(p=(await m.json()).find(x=>x.path===n.path)?.sha)}let l=await fetch(i+n.path,{method:"PUT",cache:"no-store",headers:g(e),body:JSON.stringify({message:s||"deploy",content:c?n.content:Y(n.content),branch:o,...p?{sha:p}:{}})});if(!l.ok)throw new Error("Error creating file");return l.json()};var j=async(e,t,o="main",n)=>(await re({user:e,repo:t,branch:o,file:{path:"README.md",content:`${n||"# "+t+`
`}`},message:"initial commit",initialize:!0,encoded:!1}))?.commit.sha,$e=async(e,t,o)=>{let n=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/matching-refs/heads/${o}?per_page=100`,{method:"GET",cache:"no-store",headers:g(e)}),s=await n.json();if(s.message==="Git Repository is empty."){let c=await j(e,t,"main");return o==="main"?c:null}if(!n.ok)throw new Error("Error getting last commit");let r=s.find(c=>c.ref===`refs/heads/${o}`);return r?r.object.sha:null},Fe=async(e,t,o)=>{let n=await fetch(`https://api.github.com/repos/${e.username}/${t}/commits/${o}`,{method:"GET",cache:"no-store",headers:g(e)});if(!n.ok)throw new Error("Error getting commit tree");let r=(await n.json())?.commit?.tree?.sha;return r||null},De=async(e,t,o,n)=>{let s=o.map(c=>({path:c.path,mode:"100644",type:"blob",content:c.content})),r=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/trees`,{method:"POST",cache:"no-store",headers:g(e),body:JSON.stringify({...n?{base_tree:n}:{},tree:s})});if(!r.ok)throw new Error("Error creating tree");return r.json().then(c=>c.sha)},Pe=async(e,t,o,n,s)=>{let r=await fetch(`https://api.github.com/repos/${e.username}/${t}/git/commits`,{method:"POST",cache:"no-store",headers:g(e),body:JSON.stringify({tree:n,message:o||"deploy",...s?{parents:[s]}:{}})});if(!r.ok)throw new Error("Error creating commit");return r.json().then(c=>c.sha)},Ne=async(e,t,o,n)=>{if(!(await fetch(`https://api.github.com/repos/${e.username}/${t}/git/refs`,{method:"POST",cache:"no-store",headers:g(e),body:JSON.stringify({ref:`refs/heads/${o}`,sha:n})})).ok)throw new Error("Error creating branch");return!0},_e=async(e,t,o,n)=>{if(!(await fetch(`https://api.github.com/repos/${e.username}/${t}/git/refs/heads/${o}`,{method:"PATCH",cache:"no-store",headers:g(e),body:JSON.stringify({sha:n})})).ok)throw new Error("Error updating branch");return!0},se=async({files:e,user:t,repo:o,branch:n,message:s,newRepo:r,privateRepo:c,description:i,readmeContent:a,clearPrevious:p=!0})=>{let l,m,u,x=!1;r&&(o=b(o,"-").toLowerCase());try{if(r||!await oe(t,o)){r=!0,await ne(t,o,c,i);let w=await j(t,o,"main",a);l=n==="main"?w:null}else l=await $e(t,o,n);let h=l&&!p?await Fe(t,o,l):null;return m=await De(t,o,e,h),u=await Pe(t,o,s,m,l),l?x=await _e(t,o,n,u):x=await Ne(t,o,n,u),x?{tree:m,commit:u}:null}catch{return null}},ce=async({file:e,user:t,repo:o,branch:n,message:s,newRepo:r,privateRepo:c,description:i,readmeContent:a})=>{try{(r||!await oe(t,o))&&(r=!0,o=b(o,"-").toLowerCase(),await ne(t,o,c,i),await j(t,o,n,a));let p=await re({user:t,repo:o,branch:n,file:e,message:s,initialize:r||!1,encoded:!0});return{tree:p?.commit?.tree?.sha,commit:p?.commit?.sha}}catch{return null}},ie=async(e,t="public")=>{let o=1,n=100,s=5,r=[];for(;o<=s;){let c=await fetch(`https://api.github.com/user/repos?type=${t}&per_page=${n}&page=${o}`,{method:"GET",cache:"no-store",headers:g(e)});if(o+=1,!c.ok)continue;let i=await c.json();r.push(...i.map(a=>a.name)),i.length<n&&(o=s+1)}return r};var ae={title:"Untitled Project",description:"",head:`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,htmlAttrs:'lang="en" class=""',tags:[],autoupdate:!0,autosave:!1,autotest:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",editorTheme:void 0,recoverUnsaved:!0,showSpacing:!1,welcome:!0,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,editorMode:void 0,version:"22"};var We=({config:e,content:t,commitSource:o,singleFile:n,deps:s})=>{let r=[{path:"index.html",content:t.resultPage}];if(n||r.push({path:"style.css",content:t.style||""},{path:"script.js",content:t.script||""}),o){let c=X(e,s);r.push(...Object.keys(c).map(i=>({path:"src/"+i,content:c[i].content})),{path:"src/livecodes.json",content:JSON.stringify(e,null,2)})}return r},le=async({user:e,repo:t,config:o,content:n,message:s,commitSource:r=!0,singleFile:c,newRepo:i=!0,deps:a})=>{i&&(t=b(t,"-").toLowerCase());let p=We({config:o,content:n,commitSource:r,singleFile:c,deps:a}),l="gh-pages",m=r?`https://github.com/${e.username}/${t}/tree/gh-pages/src`:void 0,u=o.title!==ae.title?o.title:"",x=Object.values(ee(o,e,m,!1))[0].content,h=await se({files:p,user:e,repo:t,branch:l,message:s,newRepo:i,privateRepo:!1,description:u,readmeContent:x,clearPrevious:!0});return h?{url:`https://${e.username}.github.io/${t}/`,username:e.username,repo:t,tree:h.tree,commit:h.commit}:null},Oe=async({file:e,user:t,repo:o,branch:n,message:s,description:r,readmeContent:c})=>{let i={path:`assets/${te()}/${e.path}`,content:e.content},a=await ce({file:i,user:t,repo:o,branch:n,message:s,privateRepo:!1,description:r,readmeContent:c});return a?{url:`https://${t.username}.github.io/${o}/${i.path}`,username:t.username,repo:o,tree:a?.tree,commit:a?.commit}:null},pe=(e,t)=>{let{url:o,username:n,repo:s,commit:r}=e,c=t?`
    <div class="description">
      <p>
        The source code is
        <a
          href="https://github.com/${n}/${s}/tree/${r}/src"
          target="_blank"
        >
          publicly available
        </a>
      </p>
      <p>
        Permanent link:
        <a
          href="https://livecodes.io/?config=https://raw.githubusercontent.com/${n}/${s}/${r}/src/livecodes.json"
          target="_blank"
        >
          Edit in LiveCodes
        </a>
      </p>
    </div>
`:"",i=`
    <div id="deploy-container" class="modal-container">
      <div class="modal-title">Deployed Successfully!</div>
      <p>
        Your project has been deployed successfully to GitHub Pages, and will shortly be available on: <br />
        <a href="${o}" target="_blank">${o}</a>
      </p>
      <div id="deploy-qrcode" class="qrcode-container">Generating...</div>
      ${c}
    </div>
  `,a=document.createElement("div");return a.innerHTML=i,a};var me=async({container:e,url:t,title:o,logo:n})=>{let s=await q(V,"QRCode");e.style.visibility="hidden";let r=new s(e,{text:t,logo:n,width:200,height:200,drawer:"canvas",onRenderingEnd:(c,i)=>{e.innerHTML="";let a=document.createElement("img");a.src=i,a.style.cursor="pointer",a.title="Click to download",a.onclick=()=>r.download(b(o||"LiveCodes","-")),e.appendChild(a),e.style.visibility="visible"}})};var ue=e=>e.querySelector("#new-repo-form"),de=e=>e.querySelector("#new-repo-btn"),ge=e=>e.querySelector("#new-repo-name"),fe=e=>e.querySelector("#new-repo-name-error"),xe=e=>e.querySelector("#new-repo-message"),he=e=>e.querySelector("#new-repo-source");var ye=e=>e.querySelector("#existing-repo-form"),be=e=>e.querySelector("#existing-repo-btn"),R=e=>e.querySelector("#existing-repo-name"),A=e=>e.querySelector("#existing-repo-message"),Ee=e=>e.querySelector("#existing-repo-source");var ze=(e,t)=>{let o=document.createElement("div");o.innerHTML=_;let n=o.firstChild,s=n.querySelectorAll("#deploy-tabs li");return s.forEach(r=>{e.addEventListener(r,"click",()=>{s.forEach(i=>i.classList.remove("active")),r.classList.add("active"),document.querySelectorAll("#deploy-screens > div").forEach(i=>{i.classList.remove("active")});let c=n.querySelector("#"+r.dataset.target);c?.classList.add("active"),c?.querySelector("input")?.focus()})}),t&&setTimeout(()=>{s[1].click();let r=R(n),c=A(n);r.value=t,c.focus()}),n},yo=async({modal:e,notifications:t,eventsManager:o,user:n,deployRepo:s,deps:r})=>{let c=ze(o,s),i=ue(c),a=de(c),p=ge(c),l=fe(c),m=xe(c),u=he(c),x=ye(c),h=be(c),w=R(c),Le=A(c),Se=Ee(c),I=async(S,d,y,E,T)=>{l.innerHTML="";let Te=await r.getResultPage({forExport:!0,template:N,singleFile:!1}),$=r.getCache(),U=await le({user:S,repo:d,config:r.getContentConfig(r.getConfig()),content:{resultPage:Te,style:$.style.compiled||"",script:$.script.compiled||""},message:y,commitSource:E,singleFile:!1,newRepo:T,deps:{getLanguageExtension:r.getLanguageExtension}}).catch(M=>{M.message==="Repo name already exists"&&(l.innerHTML=M.message)});if(l.innerHTML!=="")return!1;if(U){await r.setProjectDeployRepo(d);let M=pe(U,E);return e.show(M,{size:"small"}),await me({container:M.querySelector("#deploy-qrcode"),url:U.url,title:d}),!0}else return e.close(),t.error("Deployment failed!"),!0};o.addEventListener(i,"submit",async S=>{if(S.preventDefault(),!n)return;let d=p.value.replace(/[^A-Za-z0-9_.-]/g,"-"),y=m.value,E=u.checked,T=!0;if(!d){t.error("Repo name is required");return}a.innerHTML="Deploying...",a.disabled=!0,await I(n,d,y,E,T)||(a.innerHTML="Deploy",a.disabled=!1)}),o.addEventListener(x,"submit",async S=>{if(S.preventDefault(),!n)return;let d=w.value,y=Le.value,E=Se.checked,T=!1;if(!d){t.error("Repo name is required");return}h.innerHTML="Deploying...",h.disabled=!0,await I(n,d,y,E,T)});let B;import(J).then(async()=>{if(B=globalThis.autoComplete,!n)return;let S=await ie(n);o.addEventListener(w,"init",()=>{s||w.focus()});let d="#"+w.id;if(!document.querySelector(d))return;let y=new B({selector:d,placeHolder:"Search your public repos...",data:{src:S},resultItem:{highlight:{render:!0}}});o.addEventListener(y.input,"selection",function(E){let T=E.detail;y.input.blur();let H=T.selection.value;y.input.value=H})}),e.show(c,{isAsync:!0}),p.focus()};export{yo as createDeployUI,Oe as deployFile};
