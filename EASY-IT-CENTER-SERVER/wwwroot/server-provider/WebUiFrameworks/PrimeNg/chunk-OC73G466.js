import{a as S,b as oe}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as te,b as ie}from"./chunk-A5TA6W7J.js";import{a as G,b as J}from"./chunk-5RR2IM57.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as f,b as ee,c as Z}from"./chunk-AS5FXEGH.js";import{a as v,b as Q}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as q,k as l,q as V,w as b,x as Y,y,z as H}from"./chunk-UWMVDULA.js";import{o as X,t as L}from"./chunk-N5X6XDRN.js";import{Jb as e,Kb as j,Lb as z,Nc as W,Qb as g,Sa as m,Sb as B,Ta as h,Tb as $,V as R,da as u,ea as A,ib as P,kb as d,kc as K,ma as I,na as F,nb as N,rb as i,sb as o,tb as p,xb as O,yb as c,zb as U}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var se=(()=>{let t=class t{constructor(){this.code={typescript:"import { ToastModule } from 'primeng/toast';"}}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=u({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(s,a){s&1&&p(0,"app-code",0),s&2&&d("code",a.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2});let n=t;return n})();var ne=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'"></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>`,html:`
<div class="card flex justify-content-center">
    <p-toast [showTransformOptions]="'translateY(100%)'" [showTransitionOptions]="'1000ms'" [hideTransitionOptions]="'1000ms'" [showTransformOptions]="'translateX(100%)'"></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-animation-demo',
    templateUrl: './toast-animation-demo.html',
    providers: [MessageService]
})
export class ToastAnimationDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`}}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["animation-doc"]],features:[g([l])],decls:19,vars:5,consts:[[1,"card","flex","justify-content-center"],[3,"showTransformOptions","showTransitionOptions","hideTransitionOptions"],["type","button","pButton","","pRipple","","label","Show",3,"click"],["selector","toast-animation-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Transition of the animations can be customized using the "),i(3,"i"),e(4,"showTransitionOptions"),o(),e(5,", "),i(6,"i"),e(7,"hideTransitionOptions"),o(),e(8,", "),i(9,"i"),e(10,"showTransformOptions"),o(),e(11," and "),i(12,"i"),e(13,"hideTransformOptions"),o(),e(14," properties."),o()(),i(15,"div",0),p(16,"p-toast",1),i(17,"button",2),c("click",function(){return a.show()}),o()(),p(18,"app-code",3)),s&2&&(m(16),d("showTransformOptions","translateY(100%)")("showTransitionOptions","1000ms")("hideTransitionOptions","1000ms")("showTransformOptions","translateX(100%)"),m(2),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var re=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show" class="p-button-success"></button>`,html:`
<div class="card">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show" class="p-button-success"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-basic-demo',
    templateUrl: './toast-basic-demo.html',
    providers: [MessageService]
})
export class ToastBasicDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`}}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["basic-doc"]],features:[g([l])],decls:28,vars:1,consts:[[1,"card","flex","justify-content-center"],["type","button","pButton","","pRipple","","label","Show",3,"click"],["selector","toast-basic-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Toasts are displayed by calling the "),i(3,"i"),e(4,"add"),o(),e(5," and "),i(6,"i"),e(7,"addAll"),o(),e(8," method provided by the "),i(9,"i"),e(10,"messageService"),o(),e(11,". A single toast is specified by the "),i(12,"i"),e(13,"Message"),o(),e(14," interface that defines various properties such as "),i(15,"i"),e(16,"severity"),o(),e(17,", "),i(18,"i"),e(19,"summary"),o(),e(20," and "),i(21,"i"),e(22,"detail"),o(),e(23,". "),o()(),i(24,"div",0),p(25,"p-toast"),i(26,"button",1),c("click",function(){return a.show()}),o()(),p(27,"app-code",2)),s&2&&(m(27),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var ae=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Multiple"></button>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Multiple"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-multiple-demo',
    templateUrl: './toast-multiple-demo.html',
    providers: [MessageService]
})
export class ToastMultipleDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.addAll([
            { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
            { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
            { severity: 'warn', summary: 'Message 3', detail: 'Message Content' }
        ]);
    }
}`}}show(){this.messageService.addAll([{severity:"success",summary:"Message 1",detail:"Message Content"},{severity:"info",summary:"Message 2",detail:"Message Content"},{severity:"warn",summary:"Message 3",detail:"Message Content"}])}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["toast-multiple-demo"]],features:[g([l])],decls:13,vars:1,consts:[[1,"card","flex","justify-content-center"],["type","button","pButton","","pRipple","","label","Multiple",3,"click"],["selector","toast-multiple-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Multiple toasts are displayed by passing an array to the "),i(3,"i"),e(4,"showAll"),o(),e(5," method of the "),i(6,"i"),e(7,"messageService"),o(),e(8,"."),o()(),i(9,"div",0),p(10,"p-toast"),i(11,"button",1),c("click",function(){return a.show()}),o()(),p(12,"app-code",2)),s&2&&(m(12),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var le=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast position="top-left" key="tl"></p-toast>
<p-toast position="top-center" key="tc"></p-toast>
<p-toast position="bottom-center" key="bc"></p-toast>
<button type="button" pButton pRipple (click)="showTopLeft()" label="Top Left"></button>
<button type="button" pButton pRipple (click)="showTopCenter()" label="Top Center" class="p-button-warning"></button>
<button type="button" pButton pRipple (click)="showBottomCenter()" label="Bottom Center" class="p-button-success"></button>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-toast position="top-left" key="tl"></p-toast>
    <p-toast position="top-center" key="tc"></p-toast>
    <p-toast position="bottom-center" key="bc"></p-toast>
    <button type="button" pButton pRipple (click)="showTopLeft()" label="Top Left"></button>
    <button type="button" pButton pRipple (click)="showTopCenter()" label="Top Center" class="p-button-warning"></button>
    <button type="button" pButton pRipple (click)="showBottomCenter()" label="Bottom Center" class="p-button-success"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-position-demo',
    templateUrl: './toast-position-demo.html',
    providers: [MessageService]
})
export class ToastPositionDemo {
    constructor(private messageService: MessageService) {}

    showTopLeft() {
        this.messageService.add({ key: 'tl', severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showTopCenter() {
        this.messageService.add({ key: 'tc', severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showBottomCenter() {
        this.messageService.add({ key: 'bc', severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`}}showTopLeft(){this.messageService.add({key:"tl",severity:"info",summary:"Info",detail:"Message Content"})}showTopCenter(){this.messageService.add({key:"tc",severity:"warn",summary:"Warn",detail:"Message Content"})}showBottomCenter(){this.messageService.add({key:"bc",severity:"success",summary:"Success",detail:"Message Content"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["position-doc"]],features:[g([l])],decls:35,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["position","top-left","key","tl"],["position","top-center","key","tc"],["position","bottom-center","key","bc"],["type","button","pButton","","pRipple","","label","Top Left",3,"click"],["type","button","pButton","","pRipple","","label","Top Center",1,"p-button-warning",3,"click"],["type","button","pButton","","pRipple","","label","Bottom Center",1,"p-button-success",3,"click"],["selector","toast-position-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Location of the toast is customized with the "),i(3,"i"),e(4,"position"),o(),e(5," property. Valid values are "),i(6,"i"),e(7,"top-left"),o(),e(8,", "),i(9,"i"),e(10,"top-center"),o(),e(11,", "),i(12,"i"),e(13,"top-right"),o(),e(14,", "),i(15,"i"),e(16,"bottom-left"),o(),e(17,", "),i(18,"i"),e(19,"bottom-center"),o(),e(20,", "),i(21,"i"),e(22,"bottom-right"),o(),e(23," and "),i(24,"i"),e(25,"center"),o(),e(26,"."),o()(),i(27,"div",0),p(28,"p-toast",1)(29,"p-toast",2)(30,"p-toast",3),i(31,"button",4),c("click",function(){return a.showTopLeft()}),o(),i(32,"button",5),c("click",function(){return a.showTopCenter()}),o(),i(33,"button",6),c("click",function(){return a.showBottomCenter()}),o()(),p(34,"app-code",7)),s&2&&(m(34),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var we=()=>({width:"100%",right:"0",left:"0"}),Ce=n=>({"920px":n}),pe=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast [breakpoints]="{'920px': {width: '100%', right: '0', left: '0'}}"></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>`,html:`
<div class="card flex justify-content-center">
    <p-toast [breakpoints]="{'920px': {width: '100%', right: '0', left: '0'}}"></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-responsive-demo',
    templateUrl: './toast-responsive-demo.html',
    providers: [MessageService]
})
export class ToastResponsiveDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }
}`}}show(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["responsive-doc"]],features:[g([l])],decls:13,vars:5,consts:[[1,"card","flex","justify-content-center"],[3,"breakpoints"],["type","button","pButton","","pRipple","","label","Show",3,"click"],["selector","toast-responsive-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Toast styling can be adjusted per screen size with the "),i(3,"i"),e(4,"breakpoints"),o(),e(5," option. The value of "),i(6,"i"),e(7,"breakpoints"),o(),e(8," should be an object literal whose keys are the maximum screen sizes and values are the styles per screen. In example below, width of the toast messages cover the whole page on screens whose widths is smaller than 921px. "),o()(),i(9,"div",0),p(10,"p-toast",1),i(11,"button",2),c("click",function(){return a.show()}),o()(),p(12,"app-code",3)),s&2&&(m(10),d("breakpoints",$(3,Ce,B(2,we))),m(2),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var ce=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast></p-toast>
<button type="button" pButton pRipple (click)="showSuccess()" label="Success" class="p-button-success"></button>
<button type="button" pButton pRipple (click)="showInfo()" label="Info" class="p-button-info"></button>
<button type="button" pButton pRipple (click)="showWarn()" label="Warn" class="p-button-warning"></button>
<button type="button" pButton pRipple (click)="showError()" label="Error" class="p-button-danger"></button>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="showSuccess()" label="Success" class="p-button-success"></button>
    <button type="button" pButton pRipple (click)="showInfo()" label="Info" class="p-button-info"></button>
    <button type="button" pButton pRipple (click)="showWarn()" label="Warn" class="p-button-warning"></button>
    <button type="button" pButton pRipple (click)="showError()" label="Error" class="p-button-danger"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-severity-demo',
    templateUrl: './toast-severity-demo.html',
    providers: [MessageService]
})
export class ToastSeverityDemo {
    constructor(private messageService: MessageService) {}

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
    }

    showInfo() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    }

    showWarn() {
        this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
    }

    showError() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
}`}}showSuccess(){this.messageService.add({severity:"success",summary:"Success",detail:"Message Content"})}showInfo(){this.messageService.add({severity:"info",summary:"Info",detail:"Message Content"})}showWarn(){this.messageService.add({severity:"warn",summary:"Warn",detail:"Message Content"})}showError(){this.messageService.add({severity:"error",summary:"Error",detail:"Message Content"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["severity-doc"]],features:[g([l])],decls:25,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["type","button","pButton","","pRipple","","label","Success",1,"p-button-success",3,"click"],["type","button","pButton","","pRipple","","label","Info",1,"p-button-info",3,"click"],["type","button","pButton","","pRipple","","label","Warn",1,"p-button-warning",3,"click"],["type","button","pButton","","pRipple","","label","Error",1,"p-button-danger",3,"click"],["selector","toast-severity-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," The "),i(3,"i"),e(4,"severity"),o(),e(5," option specifies the type of the message. There are four types of messages: "),i(6,"i"),e(7,"success"),o(),e(8,", "),i(9,"i"),e(10,"info"),o(),e(11,", "),i(12,"i"),e(13,"warn"),o(),e(14," and "),i(15,"i"),e(16,"error"),o(),e(17,". The severity of the message is used to display the icon and the color of the toast. "),o()(),i(18,"div",0),p(19,"p-toast"),i(20,"button",1),c("click",function(){return a.showSuccess()}),o(),i(21,"button",2),c("click",function(){return a.showInfo()}),o(),i(22,"button",3),c("click",function(){return a.showWarn()}),o(),i(23,"button",4),c("click",function(){return a.showError()}),o()(),p(24,"app-code",5)),s&2&&(m(24),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var me=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast [life]="10000"></p-toast>
<button type="button" pButton pRipple (click)="showLife()" label="Show Life Default"></button>
<button type="button" pButton pRipple (click)="showLifeLong()" label="Show Life Long"></button>`,html:`
<div class="card flex justify-content-center">
    <p-toast [life]="10000"></p-toast>
    <button type="button" pButton pRipple (click)="showLife()" label="Show Life Default"></button>
    <button type="button" pButton pRipple (click)="showLifeLong()" label="Show Life Long"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-life-demo',
    templateUrl: './toast-life-demo.html',
    providers: [MessageService]
})
export class ToastLifeDemo {
    constructor(private messageService: MessageService) {}

    showLifeDefault() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
    }

    showLifeLong() {
        this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
    }
}`}}showLife(){this.messageService.add({severity:"info",summary:"Life",detail:"I show for 10000ms"})}showLifeLong(){this.messageService.add({severity:"info",summary:"Life",detail:"I show for 20000ms",life:2e4})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["life-doc"]],features:[g([l])],decls:11,vars:2,consts:[[1,"card","flex","justify-content-center","gap-2"],[3,"life"],["type","button","pButton","","pRipple","","label","Show Life",3,"click"],["type","button","pButton","","pRipple","","label","Show Life Long",3,"click"],["selector","toast-life-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A toast disappears after 3000ms by default, set the "),i(3,"i"),e(4,"life"),o(),e(5," option on either the message or toast to override this."),o()(),i(6,"div",0),p(7,"p-toast",1),i(8,"button",2),c("click",function(){return a.showLife()}),o(),i(9,"button",3),c("click",function(){return a.showLifeLong()}),o()(),p(10,"app-code",4)),s&2&&(m(7),d("life",1e4),m(3),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var de=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast></p-toast>
<div class="flex flex-wrap gap-2">
    <button type="button" pButton pRipple (click)="show()" class="p-button-success" label="Show Sticky"></button>
    <button type="button" pButton pRipple (click)="clear()" label="Clear"></button>
</div>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <div class="flex flex-wrap gap-2">
        <button type="button" pButton pRipple (click)="show()" class="p-button-success" label="Show Sticky"></button>
        <button type="button" pButton pRipple (click)="clear()" label="Clear"></button>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-sticky-demo',
    templateUrl: './toast-sticky-demo.html',
    providers: [MessageService]
})
export class ToastStickyDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    }

    clear() {
        this.messageService.clear();
    }
}`}}show(){this.messageService.add({severity:"info",summary:"Sticky",detail:"Message Content",sticky:!0})}clear(){this.messageService.clear()}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["sticky-doc"]],features:[g([l])],decls:18,vars:1,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-wrap","gap-2"],["type","button","pButton","","pRipple","","label","Show Sticky",1,"p-button-success",3,"click"],["type","button","pButton","","pRipple","","label","Clear",3,"click"],["selector","toast-sticky-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A toast disappears after the time defined by the "),i(3,"i"),e(4,"life"),o(),e(5," option, set "),i(6,"i"),e(7,"sticky"),o(),e(8," option "),i(9,"i"),e(10,"true"),o(),e(11," on the message to override this and not hide the toast automatically."),o()(),i(12,"div",0),p(13,"p-toast"),i(14,"div",1)(15,"button",2),c("click",function(){return a.show()}),o(),i(16,"button",3),c("click",function(){return a.clear()}),o()()(),p(17,"app-code",4)),s&2&&(m(17),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var ke=()=>["/theming"],ue=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=u({type:t,selectors:[["style-doc"]],decls:50,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),e(4,"theming"),o(),e(5," page."),o()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),o(),i(12,"th"),e(13,"Element"),o()()(),i(14,"tbody")(15,"tr")(16,"td"),e(17,"p-toast"),o(),i(18,"td"),e(19,"Main container element."),o()(),i(20,"tr")(21,"td"),e(22,"p-toast-message"),o(),i(23,"td"),e(24,"Container of a message item."),o()(),i(25,"tr")(26,"td"),e(27,"p-toast-icon-close"),o(),i(28,"td"),e(29,"Close icon of a message."),o()(),i(30,"tr")(31,"td"),e(32,"p-toast-icon"),o(),i(33,"td"),e(34,"Severity icon."),o()(),i(35,"tr")(36,"td"),e(37,"p-toast-message-content"),o(),i(38,"td"),e(39,"Container of message texts."),o()(),i(40,"tr")(41,"td"),e(42,"p-toast-summary"),o(),i(43,"td"),e(44,"Summary of the message."),o()(),i(45,"tr")(46,"td"),e(47,"p-toast-detail"),o(),i(48,"td"),e(49,"Detail of the message."),o()()()()()),s&2&&(m(3),d("routerLink",B(1,ke)))},dependencies:[X,f],encapsulation:2});let n=t;return n})();var fe=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast key="toast1"></p-toast>
<p-toast key="toast2"></p-toast>
<button type="button" pButton pRipple (click)="showToast1()" label="Show Success"></button>
<button type="button" pButton pRipple (click)="showToast2()" label="Show Warning" class="p-button-success"></button>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-toast key="toast1"></p-toast>
    <p-toast key="toast2"></p-toast>
    <button type="button" pButton pRipple (click)="showToast1()" label="Show Success"></button>
    <button type="button" pButton pRipple (click)="showToast2()" label="Show Warning" class="p-button-success"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-target-demo',
    templateUrl: './toast-target-demo.html',
    providers: [MessageService]
})
export class ToastTargetDemo {
    constructor(private messageService: MessageService) {}

    showToast1() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
    }

    showToast2() {
        this.messageService.clear();
        this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
    }
}`}}showToast1(){this.messageService.clear(),this.messageService.add({key:"toast1",severity:"success",summary:"Success",detail:"key: toast1"})}showToast2(){this.messageService.clear(),this.messageService.add({key:"toast2",severity:"warn",summary:"Warning",detail:"key: toast2"})}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["target-doc"]],features:[g([l])],decls:12,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["key","toast1"],["key","toast2"],["type","button","pButton","","pRipple","","label","Show Success",3,"click"],["type","button","pButton","","pRipple","","label","Show Warning",1,"p-button-warning",3,"click"],["selector","toast-target-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"A page may have multiple toast components, in case you'd like to target a specific message to a particular toast, use the "),i(3,"i"),e(4,"key"),o(),e(5," property so that toast and the message can match."),o()(),i(6,"div",0),p(7,"p-toast",1)(8,"p-toast",2),i(9,"button",3),c("click",function(){return a.showToast1()}),o(),i(10,"button",4),c("click",function(){return a.showToast2()}),o()(),p(11,"app-code",5)),s&2&&(m(11),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();function Me(n,t){if(n&1){let _=O();i(0,"div",5)(1,"div",6),p(2,"p-avatar",7),i(3,"span",8),e(4,"Amy Elsner"),o()(),i(5,"div",9),e(6),o(),i(7,"p-button",10),c("click",function(){I(_);let s=U();return F(s.onConfirm())}),o()()}if(n&2){let _=t.$implicit;m(6),j(_.summary)}}var ve=(()=>{let t=class t{constructor(r){this.messageService=r,this.visible=!1,this.code={basic:`   <p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
        <ng-template let-message pTemplate="message">
            <div class="flex flex-column align-items-start" style="flex: 1">
                <div class="flex align-items-center gap-2">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold text-900">Amy Elsner</span>
                </div>
                <div class="font-medium text-lg my-3 text-900">{{ message.summary }}</div>
                <p-button class="p-button-sm" label="Reply" (click)="onConfirm()"></p-button>
            </div>
        </ng-template>
    </p-toast>
<button type="button" pButton pRipple (click)="showConfirm()" label="Confirm"></button>`,html:`<div class="card flex justify-content-center">
        <p-toast position="bottom-center" key="confirm" (onClose)="onReject()" [baseZIndex]="5000">
        <ng-template let-message pTemplate="message">
            <div class="flex flex-column align-items-start" style="flex: 1">
                <div class="flex align-items-center gap-2">
                    <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png" shape="circle" />
                    <span class="font-bold text-900">Amy Elsner</span>
                </div>
                <div class="font-medium text-lg my-3 text-900">{{ message.summary }}</div>
                <p-button class="p-button-sm" label="Reply" (click)="onConfirm()"></p-button>
            </div>
        </ng-template>
    </p-toast>
<button type="button" pButton pRipple (click)="showConfirm()" label="Confirm"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-template-demo',
    templateUrl: './toast-template-demo.html',
    providers: [MessageService]
})
export class ToastTemplateDemo {
    constructor(private messageService: MessageService) {}

    visible: boolean = false;

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
            this.visible = true;
        }
    }

    onConfirm() {
        this.messageService.clear('confirm');
        this.visible = false;
    }

    onReject() {
        this.messageService.clear('confirm');
        this.visible = false;
    }
}`}}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"success",summary:"Can you send me the report?"}),this.visible=!0)}onConfirm(){this.messageService.clear("confirm"),this.visible=!1}onReject(){this.messageService.clear("confirm"),this.visible=!1}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["template-doc"]],features:[g([l])],decls:8,vars:2,consts:[[1,"card","flex","justify-content-center"],["position","bottom-center","key","confirm",3,"onClose","baseZIndex"],["pTemplate","message"],["type","button","pButton","","pRipple","","label","Confirm",3,"click"],["selector","toast-template-demo",3,"code"],[1,"flex","flex-column","align-items-start",2,"flex","1"],[1,"flex","align-items-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","text-900"],[1,"font-medium","text-lg","my-3","text-900"],["label","Reply",1,"p-button-sm",3,"click"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2,"Templating allows customizing the content where the message instance is available as the implicit variable."),o()(),i(3,"div",0)(4,"p-toast",1),c("onClose",function(){return a.onReject()}),P(5,Me,8,1,"ng-template",2),o(),i(6,"button",3),c("click",function(){return a.showConfirm()}),o()(),p(7,"app-code",4)),s&2&&(m(4),d("baseZIndex",5e3),m(3),d("code",a.code))},dependencies:[v,f,S,V,y,H,b,te],encapsulation:2});let n=t;return n})();var he=(()=>{let t=class t{constructor(r){this.messageService=r,this.code={basic:`<p-toast></p-toast>
<button type="button" pButton pRipple (click)="show()" label="Show"></button>
<button type="button" pButton pRipple (click)="clear()" label="Clear" class="p-button-secondary"></button>`,html:`
<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <button type="button" pButton pRipple (click)="show()" label="Show"></button>
    <button type="button" pButton pRipple (click)="clear()" label="Clear" class="p-button-secondary"></button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-clear-demo',
    templateUrl: './toast-clear-demo.html',
    providers: [MessageService]
})
export class ToastClearDemo {
    constructor(private messageService: MessageService) {}

    show() {
        this.messageService.add({ key:'myKey', severity: 'success', summary: 'Message 1', detail: 'Message Content' });
    }

    clear() {
        this.messageService.clear();
    }
}`}}show(){this.messageService.add({key:"myKey",severity:"success",summary:"Message 1",detail:"Message Content"})}clear(){this.messageService.clear()}};t.\u0275fac=function(s){return new(s||t)(h(l))},t.\u0275cmp=u({type:t,selectors:[["clear-doc"]],features:[g([l])],decls:11,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["key","myKey"],["type","button","pButton","","pRipple","","label","Show",3,"click"],["type","button","pButton","","pRipple","","label","Clear",1,"p-button-secondary",3,"click"],["selector","toast-clear-demo",3,"code"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p"),e(2," Clicking the close icon on the toast, removes it manually. Same can also be achieved programmatically using the clear function of the "),i(3,"i"),e(4,"messageService"),o(),e(5,". Calling it without any arguments, removes all displayed messages whereas calling it with a key, removes the messages displayed on a toast having the same key. "),o()(),i(6,"div",0),p(7,"p-toast",1),i(8,"button",2),c("click",function(){return a.show()}),o(),i(9,"button",3),c("click",function(){return a.clear()}),o()(),p(10,"app-code",4)),s&2&&(m(10),d("code",a.code))},dependencies:[v,f,S,y,b],encapsulation:2});let n=t;return n})();var De=()=>({height:"4px"});function Ee(n,t){if(n&1){let _=O();i(0,"section",5),p(1,"i",6),i(2,"div",7)(3,"p",8),e(4),o(),i(5,"p",9),e(6),o(),i(7,"div",10),p(8,"p-progressBar",11),i(9,"label",12),e(10),o()(),i(11,"div",13)(12,"p-button",14),c("click",function(s){let a=I(_).closeFn;return F(a(s))}),o(),i(13,"p-button",15),c("click",function(s){let a=I(_).closeFn;return F(a(s))}),o()()()()}if(n&2){let _=t.$implicit,r=U();m(4),j(_.summary),m(2),j(_.detail),m(2),N(B(7,De)),d("value",r.progress)("showValue",!1),m(2),z("",r.progress,"% uploaded...")}}var ge=(()=>{let t=class t{constructor(r,s){this.messageService=r,this.cdr=s,this.visible=!1,this.progress=0,this.interval=null,this.code={basic:`<p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
 <ng-template let-message pTemplate="headless" let-closeFn="closeFn">
     <section class="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2" style="border-radius: 10px">
         <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
         <div class="flex flex-column gap-3 w-full">
             <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
             <p class="m-0 text-base text-700">{{ message.detail }}</p>
             <div class="flex flex-column gap-2">
                 <p-progressBar [value]="progress" [showValue]="false" [style]="{ height: '4px' }"></p-progressBar>
                 <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
             </div>
             <div class="flex gap-3 mb-3">
                 <p-button label="Another Upload?" text="true" styleClass="p-0" (click)="closeFn($event)"></p-button>
                 <p-button label="Cancel" text="true" styleClass="text-white p-0" (click)="closeFn($event)"></p-button>
             </div>
         </div>
     </section>
 </ng-template>
</p-toast>
<button type="button" pButton pRipple (click)="showConfirm()" label="Confirm"></button>`,html:`<div class="card flex justify-content-center">
    <p-toast position="top-center" key="confirm" (onClose)="onClose()" [baseZIndex]="5000">
    <ng-template let-message pTemplate="headless" let-closeFn="closeFn">
        <section class="flex p-3 gap-3 w-full bg-black-alpha-90 shadow-2" style="border-radius: 10px">
            <i class="pi pi-cloud-upload text-primary-500 text-2xl"></i>
            <div class="flex flex-column gap-3 w-full">
                <p class="m-0 font-semibold text-base text-white">{{ message.summary }}</p>
                <p class="m-0 text-base text-700">{{ message.detail }}</p>
                <div class="flex flex-column gap-2">
                    <p-progressBar [value]="progress" [showValue]="false" [style]="{ height: '4px' }"></p-progressBar>
                    <label class="text-right text-xs text-white">{{ progress }}% uploaded...</label>
                </div>
                <div class="flex gap-3 mb-3">
                    <p-button label="Another Upload?" text="true" styleClass="p-0" (click)="closeFn($event)"></p-button>
                    <p-button label="Cancel" text="true" styleClass="text-white p-0" (click)="closeFn($event)"></p-button>
                </div>
            </div>
        </section>
    </ng-template>
    </p-toast>
    <button type="button" pButton pRipple (click)="showConfirm()" label="Confirm"></button>
</div>`,typescript:`
import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'toast-headless-demo',
    templateUrl: './toast-headless-demo.html',
    providers: [MessageService]
})
export class ToastHeadlessDemo {
    constructor(private messageService: MessageService,private cdr:ChangeDetectorRef) {}

    visible: boolean = false;

    progress: number = 0;

    interval = null;

    showConfirm() {
        if (!this.visible) {
            this.messageService.add({ key: 'confirm', sticky: true, severity: 'custom', summary: 'Uploading your files.' });
            this.visible = true;
            this.progress = 0;

            if (this.interval) {
                clearInterval(this.interval);
            }

            this.interval = setInterval(() => {
                if (this.progress <= 100) {
                    this.progress = this.progress + 20;
                }

                if (this.progress >= 100) {
                    this.progress = 100;
                    clearInterval(this.interval);
                }
                this.cdr.detectChanges()
            }, 1000);
        }
    }

    onClose() {
        this.visible = false;
    }
}`}}showConfirm(){this.visible||(this.messageService.add({key:"confirm",sticky:!0,severity:"custom",summary:"Uploading your files."}),this.visible=!0,this.progress=0,this.interval&&clearInterval(this.interval),this.interval=setInterval(()=>{this.progress<=100&&(this.progress=this.progress+20),this.progress>=100&&(this.progress=100,clearInterval(this.interval)),this.cdr.markForCheck()},1e3))}onClose(){this.visible=!1}};t.\u0275fac=function(s){return new(s||t)(h(l),h(K))},t.\u0275cmp=u({type:t,selectors:[["headless-doc"]],features:[g([l])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],["position","top-center","key","confirm",3,"onClose","baseZIndex"],["pTemplate","headless"],["type","button","pButton","","pRipple","","label","Confirm",3,"click"],["selector","toast-headless-demo",3,"code"],[1,"flex","p-3","gap-3","w-full","bg-black-alpha-90","shadow-2",2,"border-radius","10px"],[1,"pi","pi-cloud-upload","text-primary-500","text-2xl"],[1,"flex","flex-column","gap-3","w-full"],[1,"m-0","font-semibold","text-base","text-white"],[1,"m-0","text-base","text-700"],[1,"flex","flex-column","gap-2"],[3,"value","showValue"],[1,"text-right","text-xs","text-white"],[1,"flex","gap-3","mb-3"],["label","Another Upload?","text","true","styleClass","p-0",3,"click"],["label","Cancel","text","true","styleClass","text-white p-0",3,"click"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),o(),e(4," mode allows you to customize the entire user interface instead of the default elements."),o()(),i(5,"div",0)(6,"p-toast",1),c("onClose",function(){return a.onClose()}),P(7,Ee,14,8,"ng-template",2),o(),i(8,"button",3),c("click",function(){return a.showConfirm()}),o()(),p(9,"app-code",4)),s&2&&(m(6),d("baseZIndex",5e3),m(3),d("code",a.code))},dependencies:[v,f,S,V,y,H,b,G],encapsulation:2});let n=t;return n})();var be=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=u({type:t,selectors:[["accessibility-doc"]],decls:51,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(s,a){s&1&&(i(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),o(),i(3,"p"),e(4,"Toast component use "),i(5,"i"),e(6,"alert"),o(),e(7," role that implicitly defines "),i(8,"i"),e(9,"aria-live"),o(),e(10,' as "assertive" and '),i(11,"i"),e(12,"aria-atomic"),o(),e(13,' as "true".'),o(),i(14,"p"),e(15,"Close element is a "),i(16,"i"),e(17,"button"),o(),e(18," with an "),i(19,"i"),e(20,"aria-label"),o(),e(21," that refers to the "),i(22,"i"),e(23,"aria.close"),o(),e(24," property of the "),i(25,"a",0),e(26,"locale"),o(),e(27," API by default."),o(),i(28,"h3"),e(29,"Close Button Keyboard Support"),o(),i(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),e(35,"Key"),o(),i(36,"th"),e(37,"Function"),o()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"i"),e(42,"enter"),o()(),i(43,"td"),e(44,"Closes the message."),o()(),i(45,"tr")(46,"td")(47,"i"),e(48,"space"),o()(),i(49,"td"),e(50,"Closes the message."),o()()()()()())},dependencies:[f],encapsulation:2});let n=t;return n})();var ye=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=A({type:t}),t.\u0275inj=R({imports:[W,L,Q,Z,oe,q,Y,ie,J,Z]});let n=t;return n})();var _e=()=>["Toast","Message","MessageService"],Se=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:se},{id:"basic",label:"Basic",component:re},{id:"severity",label:"Severity",component:ce},{id:"position",label:"Position",component:le},{id:"multiple",label:"Multiple",component:ae},{id:"target",label:"Target",component:fe},{id:"life",label:"Life",component:me},{id:"clear",label:"Clear",component:he},{id:"sticky",label:"Sticky",component:de},{id:"templating",label:"Templating",component:ve},{id:"headless",label:"Headless",component:ge},{id:"responsive",label:"Responsive",component:pe},{id:"animation",label:"Animation",component:ne},{id:"style",label:"Style",component:ue},{id:"accessibility",label:"Accessibility",component:be}]}};t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=u({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Toast Component","header","Toast","description","Toast is used to display messages in an overlay.",3,"docs","apiDocs"]],template:function(s,a){s&1&&p(0,"app-doc",0),s&2&&d("docs",a.docs)("apiDocs",B(2,_e))},dependencies:[ee],encapsulation:2});let n=t;return n})();var xe=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=A({type:t}),t.\u0275inj=R({imports:[L.forChild([{path:"",component:Se}]),L]});let n=t;return n})();var gi=(()=>{let t=class t{};t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=A({type:t}),t.\u0275inj=R({imports:[W,xe,ye]});let n=t;return n})();export{gi as ToastDemoModule};
