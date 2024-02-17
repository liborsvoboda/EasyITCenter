var V=Object.create;var Q=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var re=(d,m)=>()=>(m||d((m={exports:{}}).exports,m),m.exports);var se=(d,m,A,O)=>{if(m&&typeof m=="object"||typeof m=="function")for(let b of te(m))!ne.call(d,b)&&b!==A&&Q(d,b,{get:()=>m[b],enumerable:!(O=ee(m,b))||O.enumerable});return d};var ie=(d,m,A)=>(A=d!=null?V(oe(d)):{},se(m||!d||!d.__esModule?Q(A,"default",{value:d,enumerable:!0}):A,d));var G=re((ue,k)=>{var Z=function(){var d=String.fromCharCode,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",O={};function b(o,n){if(!O[o]){O[o]={};for(var i=0;i<o.length;i++)O[o][o.charAt(i)]=i}return O[o][n]}var S={compressToBase64:function(o){if(o==null)return"";var n=S._compress(o,6,function(i){return m.charAt(i)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:S._decompress(o.length,32,function(n){return b(m,o.charAt(n))})},compressToUTF16:function(o){return o==null?"":S._compress(o,15,function(n){return d(n+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:S._decompress(o.length,16384,function(n){return o.charCodeAt(n)-32})},compressToUint8Array:function(o){for(var n=S.compress(o),i=new Uint8Array(n.length*2),r=0,a=n.length;r<a;r++){var l=n.charCodeAt(r);i[r*2]=l>>>8,i[r*2+1]=l%256}return i},decompressFromUint8Array:function(o){if(o==null)return S.decompress(o);for(var n=new Array(o.length/2),i=0,r=n.length;i<r;i++)n[i]=o[i*2]*256+o[i*2+1];var a=[];return n.forEach(function(l){a.push(d(l))}),S.decompress(a.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":S._compress(o,6,function(n){return A.charAt(n)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),S._decompress(o.length,32,function(n){return b(A,o.charAt(n))}))},compress:function(o){return S._compress(o,16,function(n){return d(n)})},_compress:function(o,n,i){if(o==null)return"";var r,a,l={},y={},v="",x="",h="",E=2,w=3,c=2,p=[],e=0,t=0,P;for(P=0;P<o.length;P+=1)if(v=o.charAt(P),Object.prototype.hasOwnProperty.call(l,v)||(l[v]=w++,y[v]=!0),x=h+v,Object.prototype.hasOwnProperty.call(l,x))h=x;else{if(Object.prototype.hasOwnProperty.call(y,h)){if(h.charCodeAt(0)<256){for(r=0;r<c;r++)e=e<<1,t==n-1?(t=0,p.push(i(e)),e=0):t++;for(a=h.charCodeAt(0),r=0;r<8;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1}else{for(a=1,r=0;r<c;r++)e=e<<1|a,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=0;for(a=h.charCodeAt(0),r=0;r<16;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1}E--,E==0&&(E=Math.pow(2,c),c++),delete y[h]}else for(a=l[h],r=0;r<c;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1;E--,E==0&&(E=Math.pow(2,c),c++),l[x]=w++,h=String(v)}if(h!==""){if(Object.prototype.hasOwnProperty.call(y,h)){if(h.charCodeAt(0)<256){for(r=0;r<c;r++)e=e<<1,t==n-1?(t=0,p.push(i(e)),e=0):t++;for(a=h.charCodeAt(0),r=0;r<8;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1}else{for(a=1,r=0;r<c;r++)e=e<<1|a,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=0;for(a=h.charCodeAt(0),r=0;r<16;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1}E--,E==0&&(E=Math.pow(2,c),c++),delete y[h]}else for(a=l[h],r=0;r<c;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1;E--,E==0&&(E=Math.pow(2,c),c++)}for(a=2,r=0;r<c;r++)e=e<<1|a&1,t==n-1?(t=0,p.push(i(e)),e=0):t++,a=a>>1;for(;;)if(e=e<<1,t==n-1){p.push(i(e));break}else t++;return p.join("")},decompress:function(o){return o==null?"":o==""?null:S._decompress(o.length,32768,function(n){return o.charCodeAt(n)})},_decompress:function(o,n,i){var r=[],a,l=4,y=4,v=3,x="",h=[],E,w,c,p,e,t,P,f={val:i(0),position:n,index:1};for(E=0;E<3;E+=1)r[E]=E;for(c=0,e=Math.pow(2,2),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;switch(a=c){case 0:for(c=0,e=Math.pow(2,8),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;P=d(c);break;case 1:for(c=0,e=Math.pow(2,16),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;P=d(c);break;case 2:return""}for(r[3]=P,w=P,h.push(P);;){if(f.index>o)return"";for(c=0,e=Math.pow(2,v),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;switch(P=c){case 0:for(c=0,e=Math.pow(2,8),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;r[y++]=d(c),P=y-1,l--;break;case 1:for(c=0,e=Math.pow(2,16),t=1;t!=e;)p=f.val&f.position,f.position>>=1,f.position==0&&(f.position=n,f.val=i(f.index++)),c|=(p>0?1:0)*t,t<<=1;r[y++]=d(c),P=y-1,l--;break;case 2:return h.join("")}if(l==0&&(l=Math.pow(2,v),v++),r[P])x=r[P];else if(P===y)x=w+w.charAt(0);else return null;h.push(x),r[y++]=w+x.charAt(0),l--,w=x,l==0&&(l=Math.pow(2,v),v++)}}};return S}();typeof define=="function"&&define.amd?define(function(){return Z}):typeof k!="undefined"&&k!=null&&(k.exports=Z)});import le,{useEffect as X,useRef as ce,useState as H}from"react";var ae=ie(G());async function I(d,m={}){typeof d=="object"&&!(d instanceof HTMLElement)&&d.view==="headless"&&(m=d,d=null);let{appUrl:A="https://livecodes.io/",params:O={},config:b={},import:S,lite:o,loading:n="lazy",template:i,view:r="split"}=m,a=r==="headless",l=null;if(typeof d=="string")l=document.querySelector(d);else if(d instanceof HTMLElement)l=d;else if(!(a&&typeof d=="object"))throw new Error("A valid container element is required.");if(!l)if(a)l=document.createElement("div"),K(l),document.body.appendChild(l);else throw new Error(`Cannot find element: "${d}"`);let y;try{y=new URL(A)}catch(s){throw new Error(`"${A}" is not a valid URL.`)}let v=y.origin;if(typeof O=="object"&&Object.keys(O).forEach(s=>{y.searchParams.set(s,String(O[s]))}),typeof b=="string")try{new URL(b),y.searchParams.set("config",b)}catch(s){throw new Error('"config" is not a valid URL or configuration object.')}else if(typeof b=="object")Object.keys(b).length>0&&y.searchParams.set("config","sdk");else throw new Error('"config" is not a valid URL or configuration object.');i&&y.searchParams.set("template",i),S&&y.searchParams.set("x",S),o&&y.searchParams.set("lite","true"),y.searchParams.set("embed","true"),y.searchParams.set("loading",a?"eager":n),y.searchParams.set("view",r);let x=!1,h="Cannot call API methods after calling `destroy()`.",w=await(()=>new Promise(s=>{var M,R,U,C,_,j,T,z,W;if(!l)return;let g=l.dataset.height||l.style.height;if(g&&!a){let D=isNaN(Number(g))?g:g+"px";l.style.height=D}l.dataset.defaultStyles!=="false"&&!a&&((M=l.style).backgroundColor||(M.backgroundColor="#fff"),(R=l.style).border||(R.border="1px solid black"),(U=l.style).borderRadius||(U.borderRadius="5px"),(C=l.style).boxSizing||(C.boxSizing="border-box"),(_=l.style).padding||(_.padding="0"),(j=l.style).width||(j.width="100%"),(T=l.style).height||(T.height=l.style.height||"300px"),l.style.minHeight="200px",l.style.flexGrow="1",(z=l.style).overflow||(z.overflow="hidden"),(W=l.style).resize||(W.resize="vertical"));let u=document.createElement("iframe");u.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),u.setAttribute("allowtransparency","true"),u.setAttribute("allowpaymentrequest","true"),u.setAttribute("allowfullscreen","true"),u.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");let L=n==="eager"?"eager":"lazy";u.setAttribute("loading",L),u.classList.add("livecodes"),a?K(u):(u.style.height="100%",u.style.minHeight="200px",u.style.width="100%",u.style.margin="0",u.style.border="0",u.style.borderRadius=l.style.borderRadius),addEventListener("message",function D(N){var B,q;N.source!==u.contentWindow||N.origin!==v||((B=N.data)==null?void 0:B.type)!=="livecodes-get-config"||(removeEventListener("message",D),(q=u.contentWindow)==null||q.postMessage({type:"livecodes-config",payload:b},v))}),u.onload=()=>{s(u)},u.src=y.href,l.appendChild(u)}))(),c=new Promise(s=>{addEventListener("message",function g(u){var L;u.source!==w.contentWindow||u.origin!==v||((L=u.data)==null?void 0:L.type)!=="livecodes-ready"||(removeEventListener("message",g),s(),c.settled=!0)})}),p=()=>x?Promise.reject(h):new Promise(async s=>{var u;c.settled&&s();let g={type:"livecodes-load"};(u=w.contentWindow)==null||u.postMessage(g,v),await c,s()}),e=(s,g)=>new Promise(async(u,L)=>{var R;if(x)return L(h);await p();let M=F();addEventListener("message",function U(C){var _,j;if(!(C.source!==w.contentWindow||C.origin!==v||((_=C.data)==null?void 0:_.type)!=="livecodes-api-response"||((j=C.data)==null?void 0:j.id)!==M)&&C.data.method===s){removeEventListener("message",U);let T=C.data.payload;T!=null&&T.error?L(T.error):u(T)}}),(R=w.contentWindow)==null||R.postMessage({method:s,id:M,args:g},v)}),t={},P=["load","ready","code","console","tests","destroy"],f=(s,g)=>{var u;if(x)throw new Error(h);return P.includes(s)?(e("watch",[s]),t[s]||(t[s]=[]),(u=t[s])==null||u.push(g),{remove:()=>{var L,M;t[s]=(L=t[s])==null?void 0:L.filter(R=>R!==g),((M=t[s])==null?void 0:M.length)===0&&e("watch",[s,"unsubscribe"])}}):{remove:()=>{}}},Y=s=>({"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"})[s];addEventListener("message",async s=>{var L,M,R,U;let g=Y((M=(L=s.data)==null?void 0:L.type)!=null?M:"");if(s.source!==w.contentWindow||s.origin!==v||!g||!t[g])return;let u=(R=s.data)==null?void 0:R.payload;(U=t[g])==null||U.forEach(C=>{C(u)})});let J=()=>{var s;Object.values(t).forEach(g=>{g.length=0}),(s=w==null?void 0:w.remove)==null||s.call(w),x=!0};n==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((g,u)=>{g.forEach(async L=>{L.isIntersecting&&(await p(),u.unobserve(l))})},{rootMargin:"150px"}).observe(l);function K(s){s.style.position="absolute",s.style.top="0",s.style.visibility="hidden",s.style.opacity="0"}let F=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>p(),run:()=>e("run"),format:s=>e("format",[s]),getShareUrl:s=>e("getShareUrl",[s]),getConfig:s=>e("getConfig",[s]),setConfig:s=>e("setConfig",[s]),getCode:()=>e("getCode"),show:(s,g)=>e("show",[s,g]),runTests:()=>e("runTests"),onChange:s=>f("code",s),watch:f,exec:(s,...g)=>e("exec",[s,...g]),destroy:()=>c.settled?e("destroy").then(J):x?Promise.reject(h):(J(),Promise.resolve())}}var $;globalThis.document&&document.currentScript&&"prefill"in(($=document.currentScript)==null?void 0:$.dataset)&&window.addEventListener("load",()=>{document.querySelectorAll(".livecodes").forEach(d=>{let m,A=d.dataset.options;if(A)try{m=JSON.parse(A)}catch(o){}let O,b=d.dataset.config||d.dataset.prefill;if(b)try{O=JSON.parse(b)}catch(o){}let S=encodeURIComponent(d.outerHTML);d.innerHTML="",I(d,{import:"dom/"+S,...m,...O?{config:O}:{}})})});function de(d){let m=ce(null),[A,O]=H(d.className||""),[b,S]=H(d.style||{}),[o,n]=H(d.height),[i,r]=H(),[a,l]=H(JSON.stringify(d.config||"")),[y,v]=H("");return X(()=>{if(!m.current)return;let{className:x,style:h,height:E,sdkReady:w,config:c,...p}=d;if(O(x||""),S(h||{}),n(E),!i||y!==JSON.stringify(p))v(JSON.stringify(p)),i==null||i.destroy(),I(m.current,{config:c,...p}).then(e=>{r(e),typeof w=="function"&&w(e)});else{if(a===JSON.stringify(c))return;l(JSON.stringify(c)),typeof c=="string"?fetch(c).then(e=>e.json()).then(e=>{i==null||i.setConfig(e)}):c&&i.setConfig(c)}},[d]),X(()=>()=>{i==null||i.destroy()},[]),le.createElement("div",{ref:m,className:A,style:b,"data-height":o})}export{de as default};
