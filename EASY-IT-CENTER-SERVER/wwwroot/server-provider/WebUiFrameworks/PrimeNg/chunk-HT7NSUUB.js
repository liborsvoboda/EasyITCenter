import{a as C,b as Q}from"./chunk-ZQDLLY5C.js";import{a as w,b as X}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as h,b as J,c as N}from"./chunk-AS5FXEGH.js";import{a as v,b as G}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as W,d as f,k as u,q as Y,y as O,z as x}from"./chunk-UWMVDULA.js";import{o as z,t as _}from"./chunk-N5X6XDRN.js";import{Ib as V,Jb as e,Kb as j,Nc as F,Qb as S,Sa as p,Sb as R,Ta as b,V as k,da as d,ea as E,ib as A,kb as l,ma as B,na as I,rb as t,sb as i,tb as s,xb as L,yb as m,zb as H}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Z=(()=>{let o=class o{constructor(a,n){this.confirmationService=a,this.messageService=n,this.code={basic:`<p-toast></p-toast>
        <p-confirmDialog></p-confirmDialog>
        <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
<p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" styleClass="p-button-danger"></p-button>`,html:`<div class="card flex justify-content-center gap-2">
    <p-toast></p-toast>
    <p-confirmDialog></p-confirmDialog>
    <p-button (click)="confirm1($event)" icon="pi pi-check" label="Confirm"></p-button>
    <p-button (click)="confirm2($event)" icon="pi pi-times" label="Delete" styleClass="p-button-danger"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        
@Component({
    selector: 'confirm-dialog-basic-demo',
    templateUrl: './confirm-dialog-basic-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogBasicDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm1(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon:"none",
            rejectIcon:"none",
            rejectButtonStyleClass:"p-button-text",
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass:"p-button-danger p-button-text",
            rejectButtonStyleClass:"p-button-text p-button-text",
            acceptIcon:"none",
            rejectIcon:"none",

            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
            }
        });
    }
}`}}confirm1(a){this.confirmationService.confirm({target:a.target,message:"Are you sure that you want to proceed?",header:"Confirmation",icon:"pi pi-exclamation-triangle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}confirm2(a){this.confirmationService.confirm({target:a.target,message:"Do you want to delete this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",acceptButtonStyleClass:"p-button-danger p-button-text",rejectButtonStyleClass:"p-button-text p-button-text",acceptIcon:"none",rejectIcon:"none",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Record deleted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected"})}})}};o.\u0275fac=function(n){return new(n||o)(b(f),b(u))},o.\u0275cmp=d({type:o,selectors:[["confirm-dialog-basic-demo"]],features:[S([f,u])],decls:15,vars:1,consts:[[1,"card","flex","justify-content-center","gap-2"],["icon","pi pi-check","label","Confirm",3,"click"],["icon","pi pi-times","label","Delete","styleClass","p-button-danger",3,"click"],["selector","confirm-dialog-basic-demo",3,"code"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"ConfirmDialog is defined using "),t(3,"i"),e(4,"p-confirmDialog"),i(),e(5," tag and an instance of "),t(6,"i"),e(7,"ConfirmationService"),i(),e(8," is required to display it bycalling confirm method."),i()(),t(9,"div",0),s(10,"p-toast")(11,"p-confirmDialog"),t(12,"p-button",1),m("click",function(M){return c.confirm1(M)}),i(),t(13,"p-button",2),m("click",function(M){return c.confirm2(M)}),i()(),s(14,"app-code",3)),n&2&&(p(14),l("code",c.code))},dependencies:[v,C,x,w,h],encapsulation:2});let r=o;return r})();var ee=(()=>{let o=class o{constructor(){this.code={typescript:"import { ConfirmDialogModule } from 'primeng/confirmdialog';"}}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=d({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,c){n&1&&s(0,"app-code",0),n&2&&l("code",c.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2});let r=o;return r})();var le=()=>["/theming"],te=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=d({type:o,selectors:[["style-doc"]],decls:50,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"a",0),e(4,"theming"),i(),e(5," page."),i()(),t(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),i(),t(12,"th"),e(13,"Element"),i()()(),t(14,"tbody")(15,"tr")(16,"td"),e(17,"p-dialog"),i(),t(18,"td"),e(19,"Container element"),i()(),t(20,"tr")(21,"td"),e(22,"p-confirmdialog"),i(),t(23,"td"),e(24,"Container element"),i()(),t(25,"tr")(26,"td"),e(27,"p-dialog-titlebar"),i(),t(28,"td"),e(29,"Container of header."),i()(),t(30,"tr")(31,"td"),e(32,"p-dialog-title"),i(),t(33,"td"),e(34,"Header element."),i()(),t(35,"tr")(36,"td"),e(37,"p-dialog-titlebar-icon"),i(),t(38,"td"),e(39,"Icon container inside header."),i()(),t(40,"tr")(41,"td"),e(42,"p-dialog-titlebar-close"),i(),t(43,"td"),e(44,"Close icon element."),i()(),t(45,"tr")(46,"td"),e(47,"p-dialog-content"),i(),t(48,"td"),e(49,"Content element."),i()()()()()),n&2&&(p(3),l("routerLink",R(1,le)))},dependencies:[z,h],encapsulation:2});let r=o;return r})();var ie=(()=>{let o=class o{constructor(a,n){this.confirmationService=a,this.messageService=n,this.position="center",this.code={basic:`<p-toast></p-toast>
    <p-confirmDialog key="positionDialog" [position]="position" rejectButtonStyleClass="p-button-outlined"></p-confirmDialog>
    <div class="flex flex-wrap justify-content-center gap-2">
        <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" styleClass="p-button-help"></p-button>
        <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" styleClass="p-button-help"></p-button>
    </div>
    <div class="flex flex-wrap justify-content-center gap-2">
        <p-button (click)="confirmPosition('top-left')" icon="pi pi-arrow-down" label="TopLeft" styleClass="p-button-warning"></p-button>
        <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" styleClass="p-button-warning"></p-button>
        <p-button (click)="confirmPosition('top-right')" icon="pi pi-arrow-down" label="TopRight" styleClass="p-button-warning"></p-button>
    </div>
    <div class="flex flex-wrap justify-content-center gap-2">
        <p-button (click)="confirmPosition('bottom-left')" icon="pi pi-arrow-up" label="BottomLeft" styleClass="p-button-success"></p-button>
        <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" styleClass="p-button-success"></p-button>
        <p-button (click)="confirmPosition('bottom-right')" icon="pi pi-arrow-up" label="BottomRight" styleClass="p-button-success"></p-button>
</div>`,html:`<div class="card flex flex-wrap flex-column align-items-center gap-2">
<p-toast></p-toast>
<p-confirmDialog key="positionDialog" [position]="position" rejectButtonStyleClass="p-button-outlined"></p-confirmDialog>
<div class="flex flex-wrap justify-content-center gap-2">
    <p-button (click)="confirmPosition('left')" icon="pi pi-arrow-right" label="Left" styleClass="p-button-help"></p-button>
    <p-button (click)="confirmPosition('right')" icon="pi pi-arrow-left" label="Right" styleClass="p-button-help"></p-button>
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <p-button (click)="confirmPosition('top-left')" icon="pi pi-arrow-down" label="TopLeft" styleClass="p-button-warning"></p-button>
    <p-button (click)="confirmPosition('top')" icon="pi pi-arrow-down" label="Top" styleClass="p-button-warning"></p-button>
    <p-button (click)="confirmPosition('top-right')" icon="pi pi-arrow-down" label="TopRight" styleClass="p-button-warning"></p-button>
</div>
<div class="flex flex-wrap justify-content-center gap-2">
    <p-button (click)="confirmPosition('bottom-left')" icon="pi pi-arrow-up" label="BottomLeft" styleClass="p-button-success"></p-button>
    <p-button (click)="confirmPosition('bottom')" icon="pi pi-arrow-up" label="Bottom" styleClass="p-button-success"></p-button>
    <p-button (click)="confirmPosition('bottom-right')" icon="pi pi-arrow-up" label="BottomRight" styleClass="p-button-success"></p-button>
</div>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        
@Component({
    selector: 'confirm-dialog-position-demo',
    templateUrl: './confirm-dialog-position-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogPositionDemo {
    position: string = 'center';

    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirmPosition(position: string) {
        this.position = position;

        this.confirmationService.confirm({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-info-circle',
            acceptIcon:"none",
            rejectIcon:"none",
            rejectButtonStyleClass:"p-button-text",
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Request submitted' });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'Process incomplete', life: 3000 });
            },
            key: 'positionDialog'
        });
    }
}`}}confirmPosition(a){this.position=a,this.confirmationService.confirm({message:"Are you sure you want to proceed?",header:"Confirmation",icon:"pi pi-info-circle",acceptIcon:"none",rejectIcon:"none",rejectButtonStyleClass:"p-button-text",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"Request submitted"})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"Process incomplete",life:3e3})},key:"positionDialog"})}};o.\u0275fac=function(n){return new(n||o)(b(f),b(u))},o.\u0275cmp=d({type:o,selectors:[["confirm-dialog-position-demo"]],features:[S([f,u])],decls:21,vars:2,consts:[[1,"card","flex","flex-wrap","flex-column","align-items-center","gap-2"],["key","positionDialog","rejectButtonStyleClass","p-button-outlined",3,"position"],[1,"flex","flex-wrap","justify-content-center","gap-2"],["icon","pi pi-arrow-right","label","Left","styleClass","p-button-help",3,"click"],["icon","pi pi-arrow-left","label","Right","styleClass","p-button-help",3,"click"],["icon","pi pi-arrow-down","label","TopLeft","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-down","label","Top","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-down","label","TopRight","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-up","label","BottomLeft","styleClass","p-button-success",3,"click"],["icon","pi pi-arrow-up","label","Bottom","styleClass","p-button-success",3,"click"],["icon","pi pi-arrow-up","label","BottomRight","styleClass","p-button-success",3,"click"],["selector","confirm-dialog-position-demo",3,"code"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"The "),t(3,"i"),e(4,"position"),i(),e(5," property of the confirm options is used to display a Dialog at all edges and corners of the screen."),i()(),t(6,"div",0),s(7,"p-toast")(8,"p-confirmDialog",1),t(9,"div",2)(10,"p-button",3),m("click",function(){return c.confirmPosition("left")}),i(),t(11,"p-button",4),m("click",function(){return c.confirmPosition("right")}),i()(),t(12,"div",2)(13,"p-button",5),m("click",function(){return c.confirmPosition("top-left")}),i(),t(14,"p-button",6),m("click",function(){return c.confirmPosition("top")}),i(),t(15,"p-button",7),m("click",function(){return c.confirmPosition("top-right")}),i()(),t(16,"div",2)(17,"p-button",8),m("click",function(){return c.confirmPosition("bottom-left")}),i(),t(18,"p-button",9),m("click",function(){return c.confirmPosition("bottom")}),i(),t(19,"p-button",10),m("click",function(){return c.confirmPosition("bottom-right")}),i()()(),s(20,"app-code",11)),n&2&&(p(8),l("position",c.position),p(12),l("code",c.code))},dependencies:[v,C,x,w,h],encapsulation:2});let r=o;return r})();function pe(r,o){if(r&1&&(t(0,"div",4),s(1,"i",5),t(2,"p"),e(3),i()()),r&2){let D=o.$implicit;p(3),j(D.message)}}var oe=(()=>{let o=class o{constructor(a,n){this.confirmationService=a,this.messageService=n,this.code={basic:`<p-toast></p-toast>
        <p-confirmDialog>
            <ng-template pTemplate="message" let-message>
                <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i class="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <p>{{ message.message }}</p>
                </div>
            </ng-template>
        </p-confirmDialog>
<p-button (click)="confirm()" icon="pi pi-check" label="Confirm"></p-button>`,html:`<div class="card flex justify-content-center">
<p-toast></p-toast>
<p-confirmDialog>
    <ng-template pTemplate="message" let-message>
        <div class="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
            <i class="pi pi-exclamation-circle text-6xl text-primary-500"></i>
            <p>{{ message.message }}</p>
        </div>
    </ng-template>
</p-confirmDialog>
<p-button (click)="confirm()" icon="pi pi-check" label="Confirm"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        
@Component({
    selector: 'confirm-dialog-template-demo',
    templateUrl: './confirm-dialog-template-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogTemplateDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Confirmation',
            message: 'Please confirm to proceed moving forward.',
            acceptIcon: 'pi pi-check mr-2',
            rejectIcon: 'pi pi-times mr-2',
            rejectButtonStyleClass: 'p-button-sm',
            acceptButtonStyleClass: 'p-button-outlined p-button-sm',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }

}`}}confirm(){this.confirmationService.confirm({header:"Confirmation",message:"Please confirm to proceed moving forward.",acceptIcon:"pi pi-check mr-2",rejectIcon:"pi pi-times mr-2",rejectButtonStyleClass:"p-button-sm",acceptButtonStyleClass:"p-button-outlined p-button-sm",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}};o.\u0275fac=function(n){return new(n||o)(b(f),b(u))},o.\u0275cmp=d({type:o,selectors:[["confirm-dialog-template-demo"]],features:[S([f,u])],decls:32,vars:1,consts:[[1,"card","flex","justify-content-center"],["pTemplate","message"],["icon","pi pi-check","label","Confirm",3,"click"],["selector","confirm-dialog-template-demo",3,"code"],[1,"flex","flex-column","align-items-center","w-full","gap-3","border-bottom-1","surface-border"],[1,"pi","pi-exclamation-circle","text-6xl","text-primary-500"]],template:function(n,c){n&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Properties of the dialog are defined in two ways, "),t(3,"i"),e(4,"message"),i(),e(5,", "),t(6,"i"),e(7,"icon"),i(),e(8,", "),t(9,"i"),e(10,"header"),i(),e(11," properties can either be defined using confirm method or declaratively on p-confirmDialog ng-template by "),t(12,"i"),e(13,"header"),i(),e(14,", "),t(15,"i"),e(16,"message"),i(),e(17,", "),t(18,"i"),e(19,"icon"),i(),e(20," and "),t(21,"i"),e(22,"footer"),i(),e(23," templates. If these values are unlikely to change then declarative approach would be useful, still properties defined in a ng-template can be overridden with confirm method call. "),i(),t(24,"p"),e(25," In addition, buttons at footer section can be customized by passing your own UI, important note to make confirmation work with a custom UI is defining a local ng-template variable for the dialog and assign accept()-reject() methods to your own buttons. "),i()(),t(26,"div",0),s(27,"p-toast"),t(28,"p-confirmDialog"),A(29,pe,4,1,"ng-template",1),i(),t(30,"p-button",2),m("click",function(){return c.confirm()}),i()(),s(31,"app-code",3)),n&2&&(p(31),l("code",c.code))},dependencies:[v,C,x,Y,w,h],encapsulation:2});let r=o;return r})();function de(r,o){if(r&1){let D=L();t(0,"div",5)(1,"div",6),s(2,"i",7),i(),t(3,"span",8),e(4),i(),t(5,"p",9),e(6),i(),t(7,"div",10)(8,"button",11),m("click",function(){B(D),H();let n=V(8);return I(n.accept())}),i(),t(9,"button",12),m("click",function(){B(D),H();let n=V(8);return I(n.reject())}),i()()()}if(r&2){let D=o.$implicit;p(4),j(D.header),p(2),j(D.message)}}var ne=(()=>{let o=class o{constructor(a,n){this.confirmationService=a,this.messageService=n,this.code={basic:`<p-toast></p-toast>
<p-confirmDialog #cd>
    <ng-template pTemplate="headless" let-message>
        <div class="flex flex-column align-items-center p-5 surface-overlay border-round">
            <div class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                <i class="pi pi-question text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex align-items-center gap-2 mt-4">
                <button pButton label="Save" (click)="cd.accept()" class="w-8rem"></button>
                <button pButton label="Cancel" (click)="cd.reject()" class="p-button-outlined w-8rem "></button>
            </div>
        </div>
    </ng-template>
</p-confirmDialog>
<p-button (click)="confirm()" icon="pi pi-check" label="Confirm"></p-button>`,html:`<div class="card flex justify-content-center">
<p-toast></p-toast>
<p-confirmDialog #cd>
    <ng-template pTemplate="headless" let-message>
        <div class="flex flex-column align-items-center p-5 surface-overlay border-round">
            <div class="border-circle bg-primary inline-flex justify-content-center align-items-center h-6rem w-6rem -mt-8">
                <i class="pi pi-question text-5xl"></i>
            </div>
            <span class="font-bold text-2xl block mb-2 mt-4">{{ message.header }}</span>
            <p class="mb-0">{{ message.message }}</p>
            <div class="flex align-items-center gap-2 mt-4">
                <button pButton label="Save" (click)="cd.accept()" class="w-8rem"></button>
                <button pButton label="Cancel" (click)="cd.reject()" class="p-button-outlined w-8rem "></button>
            </div>
        </div>
    </ng-template>
</p-confirmDialog>
<p-button (click)="confirm()" icon="pi pi-check" label="Confirm"></p-button>
</div>`,typescript:`
import { Component } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
        
@Component({
    selector: 'confirm-dialog-headless-demo',
    templateUrl: './confirm-dialog-headless-demo.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfirmDialogHeadlessDemo {
    constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

    confirm() {
        this.confirmationService.confirm({
            header: 'Are you sure?',
            message: 'Please confirm to proceed.',
            accept: () => {
                this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
            }
        });
    }
}`}}confirm(){this.confirmationService.confirm({header:"Are you sure?",message:"Please confirm to proceed.",accept:()=>{this.messageService.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:()=>{this.messageService.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}};o.\u0275fac=function(n){return new(n||o)(b(f),b(u))},o.\u0275cmp=d({type:o,selectors:[["confirm-dialog-headless-demo"]],features:[S([f,u])],decls:12,vars:1,consts:[["cd",""],[1,"card","flex","justify-content-center"],["pTemplate","headless"],["icon","pi pi-check","label","Confirm",3,"click"],["selector","confirm-dialog-headless-demo",3,"code"],[1,"flex","flex-column","align-items-center","p-5","surface-overlay","border-round"],[1,"border-circle","bg-primary","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(n,c){if(n&1){let g=L();t(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"Headless"),i(),e(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),t(5,"div",1),s(6,"p-toast"),t(7,"p-confirmDialog",null,0),A(9,de,10,2,"ng-template",2),i(),t(10,"p-button",3),m("click",function(){return B(g),I(c.confirm())}),i()(),s(11,"app-code",4)}n&2&&(p(11),l("code",c.code))},dependencies:[v,C,O,x,Y,w,h],encapsulation:2});let r=o;return r})();var re=(()=>{let o=class o{constructor(){this.code1={typescript:`confirm1() {
this.confirmationService.confirm({
    message: 'Are you sure that you want to proceed?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => acceptFunc(),
    reject: () => rejectFunc()
});

<p-button (click)="confirm1()" icon="pi pi-check" label="Confirm"></p-button>

<p-confirmDialog></p-confirmDialog>
        `},this.code2={html:`<p-confirmDialog 
    id="dialog" 
    [visible]="visible" 
    (onHide)="visible = false" 
    message="Are you sure you want to proceed?" 
    header="Confirmation" 
    icon="pi pi-exclamation-triangle"
></p-confirmDialog>

<p-button 
    (click)="visible = true" 
    icon="pi pi-check" 
    label="Confirm" 
    aria-controls="{{visible ? 'dialog' : null}} 
    aria-expanded="{{visible ? true : false}}"
></p-button>`}}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=d({type:o,selectors:[["accessibility-doc"]],decls:102,vars:4,consts:[[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,c){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," ConfirmDialog component uses "),t(6,"i"),e(7,"alertdialog"),i(),e(8," role along with "),t(9,"i"),e(10,"aria-labelledby"),i(),e(11," referring to the header element however any attribute is passed to the root element so you may use "),t(12,"i"),e(13,"aria-labelledby"),i(),e(14," to override this default behavior. In addition "),t(15,"i"),e(16,"aria-modal"),i(),e(17," is added since focus is kept within the popup. "),i(),t(18,"p"),e(19,"It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),t(20,"i"),e(21,"tabIndex"),i(),e(22," would be necessary."),i(),t(23,"p"),e(24," When "),t(25,"i"),e(26,"confirm"),i(),e(27," function is used and a trigger is passed as a parameter, ConfirmDialog adds "),t(28,"i"),e(29,"aria-expanded"),i(),e(30," state attribute and "),t(31,"i"),e(32,"aria-controls"),i(),e(33," to the trigger so that the relation between the trigger and the popup is defined. "),i(),s(34,"app-code",0),t(35,"p"),e(36,"If the dialog is controlled with the "),t(37,"i"),e(38,"visible"),i(),e(39," property "),t(40,"i"),e(41,"aria-expanded"),i(),e(42," and "),t(43,"i"),e(44,"aria-controls"),i(),e(45," need to be handled explicitly."),i(),s(46,"app-code",0),t(47,"h3"),e(48,"Overlay Keyboard Support"),i(),t(49,"div",1)(50,"table",2)(51,"thead")(52,"tr")(53,"th"),e(54,"Key"),i(),t(55,"th"),e(56,"Function"),i()()(),t(57,"tbody")(58,"tr")(59,"td")(60,"i"),e(61,"tab"),i()(),t(62,"td"),e(63,"Moves focus to the next the focusable element within the popup."),i()(),t(64,"tr")(65,"td")(66,"i"),e(67,"shift"),i(),e(68," + "),t(69,"i"),e(70,"tab"),i()(),t(71,"td"),e(72,"Moves focus to the previous the focusable element within the popup."),i()(),t(73,"tr")(74,"td")(75,"i"),e(76,"escape"),i()(),t(77,"td"),e(78,"Closes the popup and moves focus to the trigger."),i()()()()(),t(79,"h3"),e(80,"Buttons Keyboard Support"),i(),t(81,"div",1)(82,"table",2)(83,"thead")(84,"tr")(85,"th"),e(86,"Key"),i(),t(87,"th"),e(88,"Function"),i()()(),t(89,"tbody")(90,"tr")(91,"td")(92,"i"),e(93,"enter"),i()(),t(94,"td"),e(95,"Triggers the action, closes the popup and moves focus to the trigger."),i()(),t(96,"tr")(97,"td")(98,"i"),e(99,"space"),i()(),t(100,"td"),e(101,"Triggers the action, closes the popup and moves focus to the trigger."),i()()()()()()()),n&2&&(p(34),l("code",c.code1)("hideToggleCode",!0),p(12),l("code",c.code2)("hideToggleCode",!0))},dependencies:[v,h],encapsulation:2});let r=o;return r})();var ae=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=E({type:o}),o.\u0275inj=k({imports:[F,G,_,Q,W,X,N,N]});let r=o;return r})();var fe=()=>["ConfirmDialog","ConfirmationService","Confirmation"],ce=(()=>{let o=class o{constructor(){this.docs=[{id:"import",label:"Import",component:ee},{id:"basic",label:"Basic",component:Z},{id:"position",label:"Position",component:ie},{id:"template",label:"Template",component:oe},{id:"headless",label:"Headless",component:ne},{id:"style",label:"Style",component:te},{id:"accessibility",label:"Accessibility",component:re}]}};o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ConfirmDialog Component","header","ConfirmDialog","description","ConfirmDialog is backed by a service utilizing Observables to display confirmation windows easily that can be shared by multiple actions on the same component.",3,"docs","apiDocs"]],template:function(n,c){n&1&&s(0,"app-doc",0),n&2&&l("docs",c.docs)("apiDocs",R(2,fe))},dependencies:[J],encapsulation:2});let r=o;return r})();var se=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=E({type:o}),o.\u0275inj=k({imports:[_.forChild([{path:"",component:ce}]),_]});let r=o;return r})();var pt=(()=>{let o=class o{};o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=E({type:o}),o.\u0275inj=k({imports:[F,se,ae]});let r=o;return r})();export{pt as ConfirmDialogDemoModule};
