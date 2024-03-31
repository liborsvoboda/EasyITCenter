import{a as L,b as O}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as g,b as N}from"./chunk-5RR2IM57.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as f,b as k,c as M}from"./chunk-AS5FXEGH.js";import{a as d,b as j}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{k as x,q as P}from"./chunk-UWMVDULA.js";import{o as F,t as b}from"./chunk-N5X6XDRN.js";import{Jb as t,Lb as A,Nc as B,Qb as D,Sa as p,Sb as y,Ta as T,V as v,da as c,ea as h,ib as w,kb as s,nb as I,rb as n,sb as r,tb as m}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var U=(()=>{let e=class e{constructor(){this.code={html:`<span id="label_status">Status</span>
<p-progressBar aria-labelledby="label_status"></p-progressBar>

<p-progressBar aria-label="Status"></p-progressBar>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["accessibility-doc"]],decls:29,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,l){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),r(),n(4,"p"),t(5," ProgressBar components uses "),n(6,"i"),t(7,"progressbar"),r(),t(8," role along with "),n(9,"i"),t(10,"aria-valuemin"),r(),t(11,", "),n(12,"i"),t(13,"aria-valuemax"),r(),t(14," and "),n(15,"i"),t(16,"aria-valuenow"),r(),t(17," attributes. Value to describe the component can be defined using"),n(18,"i"),t(19,"aria-labelledby"),r(),t(20," and "),n(21,"i"),t(22,"aria-label"),r(),t(23," props. "),r()(),m(24,"app-code",0),n(25,"h3"),t(26,"Keyboard Support"),r(),n(27,"p"),t(28,"Not applicable."),r()()),o&2&&(p(24),s("code",l.code)("hideToggleCode",!0))},dependencies:[d,f],encapsulation:2});let i=e;return i})();var R=(()=>{let e=class e{constructor(){this.code={basic:'<p-progressBar [value]="50"></p-progressBar>',html:`
<div class="card">
    <p-progressBar [value]="50"></p-progressBar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'progress-bar-basic-demo',
    templateUrl: './progress-bar-basic-demo.html'
})
export class ProgressBarBasicDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-basic-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"ProgressBar is used with the "),n(3,"i"),t(4,"value"),r(),t(5," property."),r()(),n(6,"div",0),m(7,"p-progressBar",1),r(),m(8,"app-code",2)),o&2&&(p(7),s("value",50),p(),s("code",l.code))},dependencies:[d,f,g],encapsulation:2});let i=e;return i})();var V=(()=>{let e=class e{constructor(a){this.messageService=a,this.value=0,this.code={basic:'<p-progressBar [value]="value"></p-progressBar>',html:`
<div class="card">
    <p-toast></p-toast>
    <p-progressBar [value]="50"></p-progressBar>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'progress-bar-dynamic-demo',
    templateUrl: './progress-bar-dynamic-demo.html',
    providers: [MessageService]
})
export class ProgressBarDynamicDemo implements OnInit {
    value: number = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        let interval = setInterval(() => {
            this.value = this.value + Math.floor(Math.random() * 10) + 1;
            if (this.value >= 100) {
                this.value = 100;
                this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                clearInterval(interval);
            }
        }, 2000);
    }
}`,service:["MessageService"]}}ngOnInit(){let a=setInterval(()=>{this.value=this.value+Math.floor(Math.random()*10)+1,this.value>=100&&(this.value=100,this.messageService.add({severity:"info",summary:"Success",detail:"Process Completed"}),clearInterval(a))},2e3)}};e.\u0275fac=function(o){return new(o||e)(T(x))},e.\u0275cmp=c({type:e,selectors:[["dynamic-doc"]],features:[D([x])],decls:7,vars:2,consts:[[1,"card"],[3,"value"],["selector","progress-bar-dynamic-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"Value is reactive so updating it dynamically changes the bar as well."),r()(),n(3,"div",0),m(4,"p-toast")(5,"p-progressBar",1),r(),m(6,"app-code",2)),o&2&&(p(5),s("value",l.value),p(),s("code",l.code))},dependencies:[d,f,g,L],encapsulation:2});let i=e;return i})();var K=(()=>{let e=class e{constructor(){this.code={typescript:`import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,l){o&1&&m(0,"app-code",0),o&2&&s("code",l.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let i=e;return i})();var W=()=>({height:"6px"}),$=(()=>{let e=class e{constructor(){this.code={basic:`<p-progressBar mode="indeterminate" [style]="{ height: '6px' }"></p-progressBar>`,html:`
<div class="card">
    <p-progressBar mode="indeterminate" [style]="{'height': '6px'}"></p-progressBar>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'progress-bar-indeterminate-demo',
    templateUrl: './progress-bar-indeterminate-demo.html',
    providers: [MessageService]
})
export class ProgressBarIndeterminateDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["indeterminate-doc"]],features:[D([x])],decls:12,vars:4,consts:[[1,"card"],["mode","indeterminate"],["selector","progress-bar-indeterminate-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"For progresses with no value to track, set the "),n(3,"i"),t(4,"mode"),r(),t(5," property to "),n(6,"i"),t(7,"indeterminate"),r(),t(8,"."),r()(),n(9,"div",0),m(10,"p-progressBar",1),r(),m(11,"app-code",2)),o&2&&(p(10),I(y(3,W)),p(),s("code",l.code))},dependencies:[d,f,g],encapsulation:2});let i=e;return i})();function X(i,e){if(i&1&&(n(0,"span"),t(1),r()),i&2){let Q=e.$implicit;p(),A("",Q,"/100")}}var q=(()=>{let e=class e{constructor(){this.code={basic:`<p-progressBar [value]="50">
    <ng-template pTemplate="content" let-value> 
    <span>{{value}}/100</span>    
    </ng-template>
</p-progressBar>`,html:`<div class="card">
     <p-progressBar [value]="50">
         <ng-template pTemplate="content" let-value> 
         <span>{{value}}/100</span>        
         </ng-template>
     </p-progressBar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'progress-bar-template-demo',
    templateUrl: './progress-bar-template-demo.html'
})
export class ProgressBarTemplateDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["template-doc"]],decls:9,vars:2,consts:[[1,"card"],[3,"value"],["pTemplate","content"],["selector","progress-bar-template-demo",3,"code"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"content"),r(),t(4," template allows displaying custom content inside the progressbar."),r()(),n(5,"div",0)(6,"p-progressBar",1),w(7,X,2,1,"ng-template",2),r()(),m(8,"app-code",3)),o&2&&(p(6),s("value",50),p(2),s("code",l.code))},dependencies:[d,f,g,P],encapsulation:2});let i=e;return i})();var Y=()=>["/theming"],z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["style-doc"]],decls:40,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,l){o&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),t(4,"theming"),r(),t(5," page."),r()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),r(),n(12,"th"),t(13,"Element"),r()()(),n(14,"tbody")(15,"tr")(16,"td"),t(17,"p-progressbar"),r(),n(18,"td"),t(19,"Container element."),r()(),n(20,"tr")(21,"td"),t(22,"p-progressbar-determinate"),r(),n(23,"td"),t(24,"Container element of a determinate progressbar."),r()(),n(25,"tr")(26,"td"),t(27,"p-progressbar-indeterminate"),r(),n(28,"td"),t(29,"Container element of an indeterminate progressbar."),r()(),n(30,"tr")(31,"td"),t(32,"p-progressbar-value"),r(),n(33,"td"),t(34,"Element whose width changes according to value."),r()(),n(35,"tr")(36,"td"),t(37,"p-progressbar-label"),r(),n(38,"td"),t(39,"Label element that displays the current value."),r()()()()()),o&2&&(p(3),s("routerLink",y(1,Y)))},dependencies:[F,f],encapsulation:2});let i=e;return i})();var G=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[B,b,j,M,N,O,M]});let i=e;return i})();var Z=()=>["ProgressBar"],H=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:K},{id:"basic",label:"Basic",component:R},{id:"dynamic",label:"Dynamic",component:V},{id:"indeterminate",label:"Indeterminate",component:$},{id:"template",label:"Template",component:q},{id:"style",label:"Style",component:z},{id:"accessibility",label:"Accessibility",component:U}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ProgressBar Component","header","ProgressBar","description","ProgressBar is a process status indicator.",3,"docs","apiDocs"]],template:function(o,l){o&1&&m(0,"app-doc",0),o&2&&s("docs",l.docs)("apiDocs",y(2,Z))},dependencies:[k],encapsulation:2});let i=e;return i})();var J=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[b.forChild([{path:"",component:H}]),b]});let i=e;return i})();var Xe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=h({type:e}),e.\u0275inj=v({imports:[B,J,G]});let i=e;return i})();export{Xe as ProgressBarDemoModule};
