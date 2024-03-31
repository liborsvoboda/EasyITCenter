import{a as d,b as N,c as v}from"./chunk-AS5FXEGH.js";import{a as u,b as T}from"./chunk-X2ZDE2AM.js";import{p as D}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as E,z as A}from"./chunk-UWMVDULA.js";import{o as M,t as y}from"./chunk-N5X6XDRN.js";import{Jb as i,Nc as C,Oa as b,Sa as l,Sb as w,V as h,da as a,ea as g,kb as c,rb as r,sb as n,tb as m}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var k=(()=>{let e=class e{constructor(){this.code={typescript:`import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        //...
    ],
    //...
})
export class AppModule { }`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["animations-doc"]],decls:10,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p"),i(2," Various components utilize Angular animations to improve the user experience. Animations have their own module "),r(3,"i"),i(4,"BrowserAnimationsModule"),n(),i(5," is required to be imported in your application. If you prefer to disable animations globally, import "),r(6,"i"),i(7,"NoopAnimationsModule"),n(),i(8," instead. "),n()(),m(9,"app-code",0)),o&2&&(l(9),c("code",p.code)("hideToggleCode",!0))},dependencies:[u,d],encapsulation:2});let t=e;return t})();var F=(()=>{let e=class e{constructor(){this.code={command:"npm install primeng"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["download-doc"]],decls:7,vars:2,consts:[["href","https://www.npmjs.com/package/primeng"],[3,"code","hideToggleCode"]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"PrimeNG is available for download at "),r(3,"a",0),i(4,"npm"),n(),i(5,"."),n()(),m(6,"app-code",1)),o&2&&(l(6),c("code",p.code)("hideToggleCode",!0))},dependencies:[u,d],encapsulation:2});let t=e;return t})();var j=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["examples-doc"]],decls:6,vars:0,consts:[["href","https://github.com/primefaces/primeng-quickstart-cli"]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"An example start with Angular CLI is available at "),r(3,"a",0),i(4,"github"),n(),i(5,"."),n()())},dependencies:[d],encapsulation:2});let t=e;return t})();var R=()=>["/guides/csslayer"],B=(()=>{let e=class e{constructor(){this.code1={typescript:`...
"styles": [
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    ...
]`},this.code2={scss:`@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeng/resources/primeng.css";`},this.code3={scss:`/* Order */
@layer reset, primeng;

/* Reset CSS */
@layer reset {
    button,
    input {
        /* CSS to Reset */
    }
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["styles-doc"]],decls:29,vars:8,consts:[["href","/theming#themes",1,""],[3,"code","hideToggleCode"],[3,"routerLink"]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p"),i(2," Theme and Core styles are the necessary css files of the components, visit the "),r(3,"a",0),i(4,"Themes"),n(),i(5," section for the complete list of available themes to choose from. Styles can either be imported at "),r(6,"i"),i(7,"angular.json"),n(),i(8," or "),r(9,"i"),i(10,"src/styles.css"),n(),i(11," file. "),n(),r(12,"h3"),i(13,"With angular.json"),n(),m(14,"app-code",1),r(15,"h3"),i(16,"With styles.css"),n(),m(17,"app-code",1),r(18,"h3"),i(19,"CSS layer"),n(),r(20,"p"),i(21," The style classes of PrimeNG are defined under the "),r(22,"i"),i(23,"primeng"),n(),i(24," CSS layer to be easier to customize by having low specificity. If you are using a CSS library that styles default HTML elements such as Tailwind Preflight, Bootstrap, Normalize, or similar, a custom CSS layer configuration would be necessary for compatibility. View the "),r(25,"a",2),i(26,"CSS Layer"),n(),i(27," guide for more information. "),n(),m(28,"app-code",1),n()),o&2&&(l(14),c("code",p.code1)("hideToggleCode",!0),l(3),c("code",p.code2)("hideToggleCode",!0),l(8),c("routerLink",w(7,R)),l(3),c("code",p.code3)("hideToggleCode",!0))},dependencies:[M,u,d],encapsulation:2});let t=e;return t})();var I=(()=>{let e=class e{constructor(){this.code={typescript:"import { ButtonModule } from 'primeng/button';",html:`
<div class="card flex justify-content-center">
    <p-button label="Check" icon="pi pi-check"></p-button>
</div>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["usage-doc"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["label","Check","icon","pi pi-check"],[3,"code","hideStackBlitz","hideCodeSandbox"]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p"),i(2,"Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component."),n()(),r(3,"div",0),m(4,"p-button",1),n(),m(5,"app-code",2)),o&2&&(l(5),c("code",p.code)("hideStackBlitz",!0)("hideCodeSandbox",!0))},dependencies:[u,d,A],encapsulation:2});let t=e;return t})();var L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["videos-doc"]],decls:7,vars:0,consts:[["href","https://angular.io/cli"],[1,"video-container"],["width","560","height","315","src",b`https://www.youtube.com/embed/_Zel-Eapb9Y`,"frameborder","0","allowfullscreen",""]],template:function(o,p){o&1&&(r(0,"app-docsectiontext")(1,"p")(2,"a",0),i(3,"Angular CLI"),n(),i(4," is the recommended way to build Angular applications with PrimeNG."),n()(),r(5,"div",1),m(6,"iframe",2),n())},dependencies:[d],encapsulation:2});let t=e;return t})();var G=(()=>{let e=class e{constructor(){this.docs=[{id:"download",label:"Download",component:F},{id:"styles",label:"Styles",component:B},{id:"usage",label:"Usage",component:I},{id:"animations",label:"Animations",component:k},{id:"examples",label:"QuickStart",component:j},{id:"videos",label:"Videos",component:L}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Getting Started - PrimeNG","header","Installation","description","PrimeNG is a rich set of open source native Angular UI components.",3,"docs"]],template:function(o,p){o&1&&m(0,"app-doc",0),o&2&&c("docs",p.docs)},dependencies:[N],encapsulation:2});let t=e;return t})();var P=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[y.forChild([{path:"",component:G}]),y]});let t=e;return t})();var z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[C,y,T,D,v,E,v]});let t=e;return t})();var Ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[C,P,z]});let t=e;return t})();export{Ne as InstallationModule};
