import{a as y,b as ae}from"./chunk-PUPRV2TB.js";import{a as ie,b as ne}from"./chunk-63PLGKGD.js";import{a as ee}from"./chunk-Z2ZAEWPQ.js";import{a as Y}from"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as se,c as W}from"./chunk-AS5FXEGH.js";import{a as g,b as te}from"./chunk-X2ZDE2AM.js";import{p as J,r as Z,s as $}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as X,k as O,q as Q,y as U}from"./chunk-UWMVDULA.js";import{o as F,t as B}from"./chunk-N5X6XDRN.js";import{Cc as z,Fc as K,Ib as P,Ic as G,Jb as t,Kb as R,Ma as j,Nb as h,Nc as _,Ob as S,Pb as b,Qb as V,Sa as l,Sb as T,Ta as L,V as C,Xb as q,da as p,dc as H,ea as M,ib as w,kb as r,ob as N,rb as i,sb as s,tb as c,yb as D,zb as k}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Me=(n,e,x,m,a)=>({"p-inline-message-info":n,"p-inline-message-warn":e,"p-inline-message-error":x,"p-inline-message-success":m,"p-inline-message-icon-only":a});function Ee(n,e){n&1&&c(0,"CheckIcon",4),n&2&&r("styleClass","p-inline-message-icon")}function Ie(n,e){n&1&&c(0,"InfoCircleIcon",4),n&2&&r("styleClass","p-inline-message-icon")}function De(n,e){n&1&&c(0,"TimesCircleIcon",4),n&2&&r("styleClass","p-inline-message-icon")}function we(n,e){n&1&&c(0,"ExclamationTriangleIcon",4),n&2&&r("styleClass","p-inline-message-icon")}function Te(n,e){if(n&1&&c(0,"span",6),n&2){let x=k(2);r("innerHTML",x.text,j)}}function _e(n,e){if(n&1&&(i(0,"div"),w(1,Te,1,1,"span",5),s()),n&2){let x=k();l(),r("ngIf",!x.escape)}}function Ae(n,e){if(n&1&&(i(0,"span",8),t(1),s()),n&2){let x=k(2);l(),R(x.text)}}function ke(n,e){if(n&1&&w(0,Ae,2,1,"span",7),n&2){let x=k();r("ngIf",x.escape)}}var oe=(()=>{let e=class e{constructor(){this.escape=!0}get icon(){return this.severity&&this.severity.trim()?this.severity:"info"}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["p-message"]],hostAttrs:[1,"p-element"],inputs:{severity:"severity",text:"text",escape:"escape",style:"style",styleClass:"styleClass"},decls:8,vars:16,consts:[["escapeOut",""],["aria-live","polite",1,"p-inline-message","p-component","p-inline-message",3,"ngStyle","ngClass"],[3,"styleClass",4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"styleClass"],["class","p-inline-message-text",3,"innerHTML",4,"ngIf"],[1,"p-inline-message-text",3,"innerHTML"],["class","p-inline-message-text",4,"ngIf"],[1,"p-inline-message-text"]],template:function(a,o){if(a&1&&(i(0,"div",1),w(1,Ee,1,1,"CheckIcon",2)(2,Ie,1,1,"InfoCircleIcon",2)(3,De,1,1,"TimesCircleIcon",2)(4,we,1,1,"ExclamationTriangleIcon",2)(5,_e,2,1,"div",3)(6,ke,1,1,"ng-template",null,0,H),s()),a&2){let v=P(7);N(o.styleClass),r("ngStyle",o.style)("ngClass",q(10,Me,o.severity==="info",o.severity==="warn",o.severity==="error",o.severity==="success",o.text==null)),l(),r("ngIf",o.icon==="success"),l(),r("ngIf",o.icon==="info"),l(),r("ngIf",o.icon==="error"),l(),r("ngIf",o.icon==="warn"),l(),r("ngIf",!o.escape)("ngIfElse",v)}},dependencies:[z,K,G,ee,ne,Y,ie],styles:[`@layer primeng{.p-inline-message{display:inline-flex;align-items:center;justify-content:center;vertical-align:top}.p-inline-message-icon-only .p-inline-message-text{visibility:hidden;width:0}.p-fluid .p-inline-message{display:flex}}
`],encapsulation:2,changeDetection:0});let n=e;return n})(),re=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[_]});let n=e;return n})();var me=(()=>{let e=class e{constructor(){this.code={typescript:"import { MessagesModule } from 'primeng/messages';"}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["import-demo"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,o){a&1&&c(0,"app-code",0),a&2&&r("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let n=e;return n})();var le=(()=>{let e=class e{constructor(){this.code={basic:'<p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>',html:`
<div class="card">
    <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-basic-demo',
    templateUrl: './messages-basic-demo.html'
})
export class MessagesBasicDemo implements OnInit {
    messages: Message[] | undefined;

    ngOnInit() {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Message Content' }];
    }
}`}}ngOnInit(){this.messages=[{severity:"success",summary:"Success",detail:"Message Content"}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["basic-doc"]],decls:27,vars:4,consts:[[1,"card"],[3,"valueChange","value","enableService","closable"],["selector","messages-basic-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," A single message is specified by "),i(3,"i"),t(4,"Message"),s(),t(5," interface in PrimeNG that defines the "),i(6,"i"),t(7,"id"),s(),t(8,", "),i(9,"i"),t(10,"severity"),s(),t(11,", "),i(12,"i"),t(13,"summary"),s(),t(14," and "),i(15,"i"),t(16,"detail"),s(),t(17," as the properties. Messages to display can either be defined using the value property which should an array of Message instances or using a "),i(18,"i"),t(19,"MessageService"),s(),t(20," are defined using the "),i(21,"i"),t(22,"value"),s(),t(23," property which should an array of Message instances. "),s()(),i(24,"div",0)(25,"p-messages",1),b("valueChange",function(d){return S(o.messages,d)||(o.messages=d),d}),s()(),c(26,"app-code",2)),a&2&&(l(25),h("value",o.messages),r("enableService",!1)("closable",!1),l(),r("code",o.code))},dependencies:[g,y,u],encapsulation:2});let n=e;return n})();var Oe=()=>["/theming"],ce=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["messagesstyle-demo"]],decls:69,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,o){a&1&&(i(0,"p"),t(1,"Following is the list of structural style classes, for theming classes visit "),i(2,"a",0),t(3,"theming page"),s(),t(4,"."),s(),i(5,"div",1)(6,"table",2)(7,"thead")(8,"tr")(9,"th"),t(10,"Name"),s(),i(11,"th"),t(12,"Element"),s()()(),i(13,"tbody")(14,"tr")(15,"td"),t(16,"p-messages"),s(),i(17,"td"),t(18,"Container element."),s()(),i(19,"tr")(20,"td"),t(21,"p-message"),s(),i(22,"td"),t(23,"Message element."),s()(),i(24,"tr")(25,"td"),t(26,"p-message-info"),s(),i(27,"td"),t(28,"Message element when displaying info messages."),s()(),i(29,"tr")(30,"td"),t(31,"p-message-warn"),s(),i(32,"td"),t(33,"Message element when displaying warning messages."),s()(),i(34,"tr")(35,"td"),t(36,"p-message-error"),s(),i(37,"td"),t(38,"Message element when displaying error messages."),s()(),i(39,"tr")(40,"td"),t(41,"p-message-success"),s(),i(42,"td"),t(43,"Message element when displaying success messages."),s()(),i(44,"tr")(45,"td"),t(46,"p-message-close"),s(),i(47,"td"),t(48,"Close button."),s()(),i(49,"tr")(50,"td"),t(51,"p-message-close-icon"),s(),i(52,"td"),t(53,"Close icon."),s()(),i(54,"tr")(55,"td"),t(56,"p-message-icon"),s(),i(57,"td"),t(58,"Severity icon."),s()(),i(59,"tr")(60,"td"),t(61,"p-message-summary"),s(),i(62,"td"),t(63,"Summary of a message."),s()(),i(64,"tr")(65,"td"),t(66,"p-message-detail"),s(),i(67,"td"),t(68,"Detail of a message."),s()()()()()),a&2&&(l(2),r("routerLink",T(1,Oe)))},dependencies:[F],encapsulation:2});let n=e;return n})();var Ue=()=>["/theming"],pe=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["messagestyle-demo"]],decls:49,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,o){a&1&&(i(0,"p"),t(1,"Following is the list of structural style classes, for theming classes visit "),i(2,"a",0),t(3,"theming page"),s(),t(4,"."),s(),i(5,"div",1)(6,"table",2)(7,"thead")(8,"tr")(9,"th"),t(10,"Name"),s(),i(11,"th"),t(12,"Element"),s()()(),i(13,"tbody")(14,"tr")(15,"td"),t(16,"p-inline-message"),s(),i(17,"td"),t(18,"Message element."),s()(),i(19,"tr")(20,"td"),t(21,"p-inline-message-info"),s(),i(22,"td"),t(23,"Message element when displaying info messages."),s()(),i(24,"tr")(25,"td"),t(26,"p-inline-message-warn"),s(),i(27,"td"),t(28,"Message element when displaying warning messages."),s()(),i(29,"tr")(30,"td"),t(31,"p-inline-message-error"),s(),i(32,"td"),t(33,"Message element when displaying error messages."),s()(),i(34,"tr")(35,"td"),t(36,"p-inline-message-success"),s(),i(37,"td"),t(38,"Message element when displaying success messages."),s()(),i(39,"tr")(40,"td"),t(41,"p-inline-message-icon"),s(),i(42,"td"),t(43,"Severity icon."),s()(),i(44,"tr")(45,"td"),t(46,"p-inline-message-text"),s(),i(47,"td"),t(48,"Text of a message."),s()()()()()),a&2&&(l(2),r("routerLink",T(1,Ue)))},dependencies:[F],encapsulation:2});let n=e;return n})();var de=(()=>{let e=class e{constructor(){this.code={basic:'<p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>',html:`
<div class="card">
    <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-severity-demo',
    templateUrl: './messages-severity-demo.html'
})
export class MessagesSeverityDemo implements OnInit {
    messages: Message[] | undefined;

    ngOnInit() {
        this.messages = [
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' },
        ];
    }
}`}}ngOnInit(){this.messages=[{severity:"info",summary:"Info",detail:"Message Content"},{severity:"success",summary:"Success",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["severity-doc"]],decls:9,vars:4,consts:[[1,"card"],[3,"valueChange","value","enableService","closable"],["selector","messages-severity-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"The "),i(3,"i"),t(4,"severity"),s(),t(5," option specifies the type of the message."),s()(),i(6,"div",0)(7,"p-messages",1),b("valueChange",function(d){return S(o.messages,d)||(o.messages=d),d}),s()(),c(8,"app-code",2)),a&2&&(l(7),h("value",o.messages),r("enableService",!1)("closable",!1),l(),r("code",o.code))},dependencies:[g,y,u],encapsulation:2});let n=e;return n})();var ge=(()=>{let e=class e{constructor(){this.code={basic:`<p-messages [(value)]="messages1" [enableService]="false" [closable]="false"></p-messages>
<p-messages [(value)]="messages2" [enableService]="false"></p-messages>`,html:`
<div class="card">
    <p-messages [(value)]="messages1" [enableService]="false" [closable]="false"></p-messages>
    <p-messages [(value)]="messages2" [enableService]="false"></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-closable-demo',
    templateUrl: './messages-closable-demo.html'
})
export class MessagesClosableDemo implements OnInit {
    messages1: Message[] | undefined;

    messages2: Message[] | undefined;

    ngOnInit() {
        this.messages1 = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];

        this.messages2 = [
            { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
        ];
    }
}`}}ngOnInit(){this.messages1=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"}],this.messages2=[{severity:"warn",summary:"Warning",detail:"Closable Message Content"},{severity:"error",summary:"Error",detail:"Closable Message Content"}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["closable-doc"]],decls:16,vars:6,consts:[[1,"card"],[3,"valueChange","value","enableService","closable"],[3,"valueChange","value","enableService"],["selector","messages-closable-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," Messages are "),i(3,"i"),t(4,"closable"),s(),t(5," by default resulting in a close icon being displayed on top right corner. In order to disable closable messages, set "),i(6,"i"),t(7,"closable"),s(),t(8," to "),i(9,"i"),t(10,"false"),s(),t(11,". Note that in this case two-way binding is not necessary as the component does not need to update its value. "),s()(),i(12,"div",0)(13,"p-messages",1),b("valueChange",function(d){return S(o.messages1,d)||(o.messages1=d),d}),s(),i(14,"p-messages",2),b("valueChange",function(d){return S(o.messages2,d)||(o.messages2=d),d}),s()(),c(15,"app-code",3)),a&2&&(l(13),h("value",o.messages1),r("enableService",!1)("closable",!1),l(),h("value",o.messages2),r("enableService",!1),l(),r("code",o.code))},dependencies:[g,y,u],encapsulation:2});let n=e;return n})();function We(n,e){n&1&&(c(0,"img",4),i(1,"div",5),t(2,"Always bet on Prime."),s())}var ue=(()=>{let e=class e{constructor(){this.code={basic:`<p-messages severity="info">
    <ng-template pTemplate>
        <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" width="32" />
        <div class="ml-2">Always bet on Prime.</div>
    </ng-template>
</p-messages>`,html:`
<div class="card">
    <p-messages severity="info">
        <ng-template pTemplate>
            <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" width="32" />
            <div class="ml-2">Always bet on Prime.</div>
        </ng-template>
    </p-messages>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'messages-static-demo',
    templateUrl: './messages-static-demo.html'
})
export class MessagesStaticDemo { }`}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["static-doc"]],decls:7,vars:1,consts:[[1,"card"],["severity","info"],["pTemplate",""],["selector","messages-static-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/primeng.svg","width","32"],[1,"ml-2"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Alternative way to provide the content for the messages is templating. In this case value property and message service is ignored and only static is displayed."),s()(),i(3,"div",0)(4,"p-messages",1),w(5,We,3,0,"ng-template",2),s()(),c(6,"app-code",3)),a&2&&(l(6),r("code",o.code))},dependencies:[g,y,Q,u],encapsulation:2});let n=e;return n})();var fe=(()=>{let e=class e{constructor(){this.code={basic:`<button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>
<button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>
<p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>`,html:`
<div class="card">
    <button type="button" pButton pRipple (click)="addMessages()" label="Show" class="mr-2"></button>
    <button type="button" pButton pRipple (click)="clearMessages()" icon="pi pi-times" label="Clear" class="p-button-secondary"></button>
    <p-messages [(value)]="messages" [enableService]="false" [closable]="false"></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-dynamic-demo',
    templateUrl: './messages-dynamic-demo.html'
})
export class MessagesDynamicDemo {
    messages: Message[] | undefined;

    addMessages() {
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { severity: 'error', summary: 'Error', detail: 'Message Content' }
        ];
    }

    clearMessages() {
        this.messages = [];
    }
}`}}addMessages(){this.messages=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"},{severity:"warn",summary:"Warning",detail:"Message Content"},{severity:"error",summary:"Error",detail:"Message Content"}]}clearMessages(){this.messages=[]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["messages-dynamic-demo"]],decls:8,vars:4,consts:[[1,"card"],["type","button","pButton","","pRipple","","label","Show",1,"mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Clear",1,"p-button-secondary",3,"click"],[3,"valueChange","value","enableService","closable"],["selector","messages-dynamic-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A binding to the value property is required to provide messages to the component."),s()(),i(3,"div",0)(4,"button",1),D("click",function(){return o.addMessages()}),s(),i(5,"button",2),D("click",function(){return o.clearMessages()}),s(),i(6,"p-messages",3),b("valueChange",function(d){return S(o.messages,d)||(o.messages=d),d}),s()(),c(7,"app-code",4)),a&2&&(l(6),h("value",o.messages),r("enableService",!1)("closable",!1),l(),r("code",o.code))},dependencies:[g,y,U,u],encapsulation:2});let n=e;return n})();var ye=(()=>{let e=class e{constructor(m){this.messageService=m,this.code={basic:`<div class="flex justify-content-center gap-2">
    <button type="button" pButton class="p-button-primary" (click)="addSingle()" label="Single"></button>
    <button type="button" pButton class="p-button-success" (click)="addMultiple()" label="Multiple"></button>
    <button type="button" pButton class="p-button-secondary" (click)="clear()" label="Clear"></button>
</div>
<p-messages></p-messages>`,html:`
<div class="card">
    <div class="flex justify-content-center gap-2">
        <button type="button" pButton class="p-button-primary" (click)="addSingle()" label="Single"></button>
        <button type="button" pButton class="p-button-success" (click)="addMultiple()" label="Multiple"></button>
        <button type="button" pButton class="p-button-secondary" (click)="clear()" label="Clear"></button>
    </div>
    <p-messages></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
    selector: 'messages-service-demo',
    templateUrl: './messages-service-demo.html',
    providers: [MessageService]
})
export class MessagesServiceDemo {
    constructor(private messageService: MessageService) {}

    addSingle() {
        this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
    }

    addMultiple() {
        this.messageService.addAll([
            {severity:'success', summary:'Service Message', detail:'Via MessageService'},
            {severity:'info', summary:'Info Message', detail:'Via MessageService'}
        ]);
    }
    
    clear() {
        this.messageService.clear();
    }
}`}}addSingle(){this.messageService.add({severity:"success",summary:"Service Message",detail:"Via MessageService"})}addMultiple(){this.messageService.addAll([{severity:"success",summary:"Service Message",detail:"Via MessageService"},{severity:"info",summary:"Info Message",detail:"Via MessageService"}])}clear(){this.messageService.clear()}};e.\u0275fac=function(a){return new(a||e)(L(O))},e.\u0275cmp=p({type:e,selectors:[["service-doc"]],features:[V([O])],decls:10,vars:1,consts:[[1,"card"],[1,"flex","justify-content-center","gap-2"],["type","button","pButton","","label","Show Single",1,"p-button-primary",3,"click"],["type","button","pButton","","label","Show Multiple",1,"p-button-success",3,"click"],["type","button","pButton","","label","Clear All",1,"p-button-secondary",3,"click"],["selector","messages-service-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," MessageService alternative does not require a value binding to an array. In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component to match the key of the message to implement scoping. "),s()(),i(3,"div",0)(4,"div",1)(5,"button",2),D("click",function(){return o.addSingle()}),s(),i(6,"button",3),D("click",function(){return o.addMultiple()}),s(),i(7,"button",4),D("click",function(){return o.clear()}),s()(),c(8,"p-messages"),s(),c(9,"app-code",5)),a&2&&(l(9),r("code",o.code))},dependencies:[g,y,U,u],encapsulation:2});let n=e;return n})();var ve=(()=>{let e=class e{constructor(){this.code={basic:`<div class="flex justify-content-center gap-2">
    <p-message severity="info" text="Message Content"></p-message>
    <p-message severity="success" text="Message Content"></p-message>  
    <p-message severity="warn" text="Message Content"></p-message>  
    <p-message severity="error" text="Message Content"></p-message>
</div>

<div class="mt-4">
    <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2">
    <p-message severity="error" text="Field is required"></p-message>
</div>

<div class="mt-4">
    <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2">
    <p-message severity="error"></p-message>
</div>

<div class="field p-fluid mt-4">
    <label for="username">Username</label>
    <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />
    <small id="username-help" class="p-error">Username is not available.</small>
</div>`,html:`
<div class="card">
    <div class="flex justify-content-center gap-2">
        <p-message severity="info" text="Message Content"></p-message>
        <p-message severity="success" text="Message Content"></p-message>  
        <p-message severity="warn" text="Message Content"></p-message>  
        <p-message severity="error" text="Message Content"></p-message>
    </div>

    <div class="mt-4">
        <input type="text" pInputText placeholder="Username" class="ng-dirty ng-invalid mr-2">
        <p-message severity="error" text="Field is required"></p-message>
    </div>

    <div class="mt-4">
        <input type="text" pInputText placeholder="Email" class="ng-dirty ng-invalid mr-2">
        <p-message severity="error"></p-message>
    </div>

    <div class="field p-fluid mt-4">
        <label for="username">Username</label>
        <input id="username" type="username" aria-describedby="username-help" class="ng-invalid ng-dirty" pInputText />
        <small id="username-help" class="p-error">Username is not available.</small>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'messages-inline-demo',
    templateUrl: './messages-inline-demo.html'
})
export class MessagesInlineDemo { }`}}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["messages-inline-demo"]],decls:24,vars:1,consts:[[1,"card"],[1,"flex","justify-content-center","gap-2"],["severity","info","text","Message Content"],["severity","success","text","Message Content"],["severity","warn","text","Message Content"],["severity","error","text","Message Content"],[1,"mt-4"],["type","text","pInputText","","placeholder","Username",1,"ng-dirty","ng-invalid","mr-2"],["severity","error","text","Field is required"],["type","text","pInputText","","placeholder","Email",1,"ng-dirty","ng-invalid","mr-2"],["severity","error"],[1,"field","p-fluid","mt-4"],["for","username"],["id","username","type","username","aria-describedby","username-help","pInputText","",1,"ng-invalid","ng-dirty"],["id","username-help",1,"p-error"],["selector","messages-inline-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"p-message"),s(),t(4," component is used to display inline messages mostly within forms."),s()(),i(5,"div",0)(6,"div",1),c(7,"p-message",2)(8,"p-message",3)(9,"p-message",4)(10,"p-message",5),s(),i(11,"div",6),c(12,"input",7)(13,"p-message",8),s(),i(14,"div",6),c(15,"input",9)(16,"p-message",10),s(),i(17,"div",11)(18,"label",12),t(19,"Username"),s(),c(20,"input",13),i(21,"small",14),t(22,"Username is not available."),s()()(),c(23,"app-code",15)),a&2&&(l(23),r("code",o.code))},dependencies:[g,oe,Z,u],encapsulation:2});let n=e;return n})();var he=(()=>{let e=class e{constructor(){this.code={basic:`<p-messages [(value)]="messages" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'" [enableService]="false"></p-messages>`,html:`
<div class="card">
    <p-messages [(value)]="messages" [showTransitionOptions]="'500ms'" [hideTransitionOptions]="'500ms'" [enableService]="false"></p-messages>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
    selector: 'messages-animation-demo',
    templateUrl: './messages-animation-demo.html'
})
export class MessagesAnimationDemo implements OnInit {
    messages: Message[] | undefined;

    ngOnInit(){
        this.messages = [
            { severity: 'success', summary: 'Success', detail: 'Message Content' },
            { severity: 'info', summary: 'Info', detail: 'Message Content' },
        ];
    }
}`}}ngOnInit(){this.messages=[{severity:"success",summary:"Success",detail:"Message Content"},{severity:"info",summary:"Info",detail:"Message Content"}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["animation-doc"]],decls:12,vars:5,consts:[[1,"card"],[3,"valueChange","value","showTransitionOptions","hideTransitionOptions","enableService"],["selector","messages-animation-demo",3,"code"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Transition of the open and hide animations can be customized using the "),i(3,"i"),t(4,"showTransitionOptions"),s(),t(5," and "),i(6,"i"),t(7,"hideTransitionOptions"),s(),t(8," properties, example below disables the animations altogether."),s()(),i(9,"div",0)(10,"p-messages",1),b("valueChange",function(d){return S(o.messages,d)||(o.messages=d),d}),s()(),c(11,"app-code",2)),a&2&&(l(10),h("value",o.messages),r("showTransitionOptions","500ms")("hideTransitionOptions","500ms")("enableService",!1),l(),r("code",o.code))},dependencies:[g,y,u],encapsulation:2});let n=e;return n})();var Se=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:57,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,o){a&1&&(i(0,"app-docsectiontext")(1,"h3"),t(2,"Screen Reader"),s(),i(3,"p"),t(4," Message components use "),i(5,"i"),t(6,"alert"),s(),t(7," role that implicitly defines "),i(8,"i"),t(9,"aria-live"),s(),t(10,' as "assertive" and '),i(11,"i"),t(12,"aria-atomic"),s(),t(13,' as "true". Since any attribute is passed to the root element, attributes like '),i(14,"i"),t(15,"aria-labelledby"),s(),t(16," and "),i(17,"i"),t(18,"aria-label"),s(),t(19," can optionally be used as well. "),s(),i(20,"p"),t(21,"Close element is a "),i(22,"i"),t(23,"button"),s(),t(24," with an "),i(25,"i"),t(26,"aria-label"),s(),t(27," that refers to the "),i(28,"i"),t(29,"aria.close"),s(),t(30," property of the "),i(31,"a",0),t(32,"locale"),s(),t(33," API by default."),s(),i(34,"h3"),t(35,"Close Button Keyboard Support"),s(),i(36,"div",1)(37,"table",2)(38,"thead")(39,"tr")(40,"th"),t(41,"Key"),s(),i(42,"th"),t(43,"Function"),s()()(),i(44,"tbody")(45,"tr")(46,"td")(47,"i"),t(48,"enter"),s()(),i(49,"td"),t(50,"Closes the message."),s()(),i(51,"tr")(52,"td")(53,"i"),t(54,"space"),s()(),i(55,"td"),t(56,"Closes the message."),s()()()()()())},dependencies:[u],encapsulation:2});let n=e;return n})();var be=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[_,te,J,B,ae,X,re,$,W,W]});let n=e;return n})();var Le=()=>["Messages","Message","MessageService"],xe=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:me},{id:"basic",label:"Basic",component:le},{id:"closable",label:"Closable",component:ge},{id:"dynamic",label:"Dynamic",component:fe},{id:"service",label:"Message Service",component:ye},{id:"static",label:"Static Content",component:ue},{id:"inline",label:"Inline",component:ve},{id:"severity",label:"Severity",component:de},{id:"animation",label:"Animation",component:he},{id:"messagesstyle",label:"Styling for Messages",component:ce},{id:"messagestyle",label:"Styling for Message",component:pe},{id:"accessibility",label:"Accessibility",component:Se}]}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Messages Component","header","Messages","description","Messages is used to display alerts inline.",3,"docs","apiDocs"]],template:function(a,o){a&1&&c(0,"app-doc",0),a&2&&r("docs",o.docs)("apiDocs",T(2,Le))},dependencies:[se],encapsulation:2});let n=e;return n})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[B.forChild([{path:"",component:xe}]),B]});let n=e;return n})();var Ss=(()=>{let e=class e{};e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[_,Ce,be]});let n=e;return n})();export{Ss as MessagesDemoModule};
