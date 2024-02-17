"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||s;return r?a.createElement(m,o(o({ref:t},i),{},{components:r})):a.createElement(m,o({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={},o="User Settings",l={unversionedId:"features/user-settings",id:"features/user-settings",title:"User Settings",description:"A user can select various settings that are stored locally in the browser and are subsequently used.",source:"@site/docs/features/user-settings.md",sourceDirName:"features",slug:"/features/user-settings",permalink:"/docs/features/user-settings",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/features/user-settings.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Keyboard Shortcuts",permalink:"/docs/features/keyboard-shortcuts"},next:{title:"Editor Settings",permalink:"/docs/features/editor-settings"}},u={},c=[{value:"Related",id:"related",level:2}],i={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-settings"},"User Settings"),(0,n.kt)("p",null,"A user can select various settings that are stored locally in the browser and are subsequently used."),(0,n.kt)("p",null,"User settings can be configured in app menu. These include settings like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Auto-update"),(0,n.kt)("li",{parentName:"ul"},"Auto-save"),(0,n.kt)("li",{parentName:"ul"},"Delay (before auto-update and auto-save)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/code-format#format-on-save"},"Format on-save")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/themes"},"Theme")," (light/dark)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/recover"},"Recover unsaved projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/result#show-spacings"},"Show spacing")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/sync"},"Sync")),(0,n.kt)("li",{parentName:"ul"},"Show ",(0,n.kt)("a",{parentName:"li",href:"/docs/features/welcome"},"welcome screen"))),(0,n.kt)("p",null,"The settings selected in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/editor-settings"},(0,n.kt)("inlineCode",{parentName:"a"},"Editor Settings"))," screen are also saved locally as user settings."),(0,n.kt)("p",null,"User settings are scoped to the currently ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/user-management"},"logged-in user"),". They can be ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/backup-restore"},"backed up/restored")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/sync"},"synced")," the same as other user data (",(0,n.kt)("a",{parentName:"p",href:"/docs/features/projects"},"projects"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/templates#user-templates"},"user templates"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/assets"},"assets"),", ",(0,n.kt)("a",{parentName:"p",href:"/docs/features/snippets"},"code snippets"),")."),(0,n.kt)("h2",{id:"related"},"Related"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/user-management"},"User management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/projects"},"Project")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/templates"},"Templates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/backup-restore"},"Backup/Restore")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/features/sync"},"Sync"))))}p.isMDXComponent=!0}}]);