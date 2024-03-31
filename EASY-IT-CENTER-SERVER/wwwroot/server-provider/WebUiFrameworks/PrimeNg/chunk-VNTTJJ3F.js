import{a as g,b as G}from"./chunk-2JM2IZM7.js";import"./chunk-PUPRV2TB.js";import{a as b,b as q}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{b as O}from"./chunk-5RR2IM57.js";import{b as H}from"./chunk-H6W5JTHG.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-PXBAS5CJ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as W,c as j}from"./chunk-AS5FXEGH.js";import{a as f,b as K}from"./chunk-X2ZDE2AM.js";import{p as k}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as R,k as c,q as A}from"./chunk-UWMVDULA.js";import{o as E,t as T}from"./chunk-N5X6XDRN.js";import{Ec as P,Fc as $,Jb as i,Mb as N,Nc as M,Qb as w,Sa as d,Sb as D,Ta as S,V as y,da as m,ea as x,ib as U,kb as p,rb as a,sb as n,tb as s,yb as F,zb as B}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";function pe(t,e){t&1&&(a(0,"div",5),i(1,"Drag and drop files"),n())}function re(t,e){if(t&1&&(a(0,"li"),i(1),n()),t&2){let h=e.$implicit;d(),N("",h.name," - ",h.size," bytes")}}function me(t,e){if(t&1&&(a(0,"ul"),U(1,re,2,2,"li",7),n()),t&2){let h=B(2);d(),p("ngForOf",h.uploadedFiles)}}function de(t,e){if(t&1&&U(0,me,2,1,"ul",6),t&2){let h=B();p("ngIf",h.uploadedFiles.length)}}var V=(()=>{let e=class e{constructor(l){this.messageService=l,this.uploadedFiles=[],this.code={basic:`<p-fileUpload name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000">
    <ng-template pTemplate="content">
        <ul *ngIf="uploadedFiles.length">
            <li *ngFor="let file of uploadedFiles">{{ file.name }} - {{ file.size }} bytes</li>
        </ul>
    </ng-template>
</p-fileUpload>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-fileUpload name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" (onUpload)="onUpload($event)" [multiple]="true" accept="image/*" maxFileSize="1000000">
        <ng-template pTemplate="content">
            <ul *ngIf="uploadedFiles.length">
                <li *ngFor="let file of uploadedFiles">{{ file.name }} - {{ file.size }} bytes</li>
            </ul>
        </ng-template>
    </p-fileUpload>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-advanced-demo',
    templateUrl: './file-upload-advanced-demo.html',
    providers: [MessageService]
})
export class FileUploadAdvancedDemo {
    uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:UploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}`}}onUpload(l){for(let o of l.files)this.uploadedFiles.push(o);this.messageService.add({severity:"info",summary:"File Uploaded",detail:""})}};e.\u0275fac=function(o){return new(o||e)(S(c))},e.\u0275cmp=m({type:e,selectors:[["file-upload-advanced-demo"]],features:[w([c])],decls:6,vars:2,consts:[[1,"card","flex","justify-content-center"],["name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","mode","advanced",3,"onUpload","multiple"],["pTemplate","toolbar"],["pTemplate","content"],["selector","file-upload-advanced-demo",3,"code"],[1,"py-3"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(o,r){o&1&&(a(0,"div",0),s(1,"p-toast"),a(2,"p-fileUpload",1),F("onUpload",function(C){return r.onUpload(C)}),U(3,pe,2,0,"ng-template",2)(4,de,1,1,"ng-template",3),n()(),s(5,"app-code",4)),o&2&&(d(2),p("multiple",!0),d(3),p("code",r.code))},dependencies:[P,$,f,A,b,g],encapsulation:2});let t=e;return t})();var X=(()=>{let e=class e{constructor(l){this.messageService=l,this.code={basic:'<p-fileUpload mode="basic" chooseLabel="Choose" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)"></p-fileUpload>',html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-fileUpload mode="basic" chooseLabel="Choose" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onUpload($event)"></p-fileUpload>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-basic-demo',
    templateUrl: './file-upload-basic-demo.html',
    providers: [MessageService]
})
export class FileUploadBasicDemo {
    constructor(private messageService: MessageService) {}

    onUpload(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}`}}onUpload(l){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Basic Mode"})}};e.\u0275fac=function(o){return new(o||e)(S(c))},e.\u0275cmp=m({type:e,selectors:[["file-upload-basic-demo"]],features:[w([c])],decls:10,vars:1,consts:[[1,"card","flex","justify-content-center"],["mode","basic","chooseLabel","Choose","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"onUpload"],["selector","file-upload-basic-demo",3,"code"]],template:function(o,r){o&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"FileUpload basic "),a(3,"i"),i(4,"mode"),n(),i(5," provides a simpler UI as an alternative to default advanced mode."),n()(),a(6,"div",0),s(7,"p-toast"),a(8,"p-fileUpload",1),F("onUpload",function(C){return r.onUpload(C)}),n()(),s(9,"app-code",2)),o&2&&(d(9),p("code",r.code))},dependencies:[f,u,b,g],encapsulation:2});let t=e;return t})();var Y=(()=>{let e=class e{constructor(){this.code={typescript:"import { FileUploadModule } from 'primeng/fileupload';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["file-upload-import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&s(0,"app-code",0),o&2&&p("code",r.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let t=e;return t})();var ce=()=>["/theming"],Z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,r){o&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),a(3,"a",0),i(4,"theming"),n(),i(5," page."),n()(),a(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),n(),a(12,"th"),i(13,"Element"),n()()(),a(14,"tbody")(15,"tr")(16,"td"),i(17,"p-fileupload"),n(),a(18,"td"),i(19,"Container element"),n()(),a(20,"tr")(21,"td"),i(22,"p-fileupload-buttonbar"),n(),a(23,"td"),i(24,"Header containing the buttons"),n()(),a(25,"tr")(26,"td"),i(27,"p-fileupload-content"),n(),a(28,"td"),i(29,"Content section"),n()()()()()),o&2&&(d(3),p("routerLink",D(1,ce)))},dependencies:[u,E],encapsulation:2});let t=e;return t})();function fe(t,e){t&1&&(a(0,"div",7),i(1,"Upload 3 Files"),n())}function ue(t,e){t&1&&(a(0,"div"),i(1,"Custom UI to display a file"),n())}function ve(t,e){t&1&&(a(0,"div"),i(1,"Additional content."),n())}var ee=(()=>{let e=class e{constructor(){this.code={basic:`<p-fileUpload name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000">
    <ng-template pTemplate="toolbar">
        <div class="py-3">Upload 3 Files</div>
    </ng-template>
    <ng-template let-file pTemplate="file">
        <div>Custom UI to display a file</div>
    </ng-template>
    <ng-template pTemplate="content" let-files>
        <div>Additional content.</div>
    </ng-template>
</p-fileUpload>`,html:`
<div class="card flex justify-content-center">
    <p-fileUpload name="myfile[]" url="https://www.primefaces.org/cdn/api/upload.php" [multiple]="true" accept="image/*" maxFileSize="1000000">
        <ng-template pTemplate="toolbar">
            <div class="py-3">Upload 3 Files</div>
        </ng-template>
        <ng-template let-file pTemplate="file">
            <div>Custom UI to display a file</div>
        </ng-template>
        <ng-template pTemplate="content" let-files>
            <div>Additional content.</div>
        </ng-template>
    </p-fileUpload>
</div>`,typescript:`
import { Component, Input } from '@angular/core';

@Component({
    selector: 'file-upload-template-demo',
    templateUrl: './file-upload-template-demo.html',
})
export class FileUploadTemplateDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["file-upload-template-demo"]],decls:21,vars:2,consts:[["href","https://www.w3.org/TR/FileAPI/"],[1,"card","flex","justify-content-center"],["name","myfile[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000",3,"multiple"],["pTemplate","toolbar"],["pTemplate","file"],["pTemplate","content"],["selector","file-upload-template-demo",3,"code"],[1,"py-3"]],template:function(o,r){o&1&&(a(0,"app-docsectiontext")(1,"p"),i(2," Uploader UI is customizable using a ng-template called "),a(3,"i"),i(4,"file"),n(),i(5," that gets the "),a(6,"a",0),i(7,"File"),n(),i(8," instance as the implicit variable. Second ng-template named "),a(9,"i"),i(10,"content"),n(),i(11," can be used to place custom content inside the content section which would be useful to implement a user interface to manage the uploaded files such as removing them. This template gets the selected files as the implicit variable. Third and final ng-template option is "),a(12,"i"),i(13,"toolbar"),n(),i(14," to display custom content at toolbar. "),n()(),a(15,"div",1)(16,"p-fileUpload",2),U(17,fe,2,0,"ng-template",3)(18,ue,2,0,"ng-template",4)(19,ve,2,0,"ng-template",5),n()(),s(20,"app-code",6)),o&2&&(d(16),p("multiple",!0),d(4),p("code",r.code))},dependencies:[f,u,A,g],encapsulation:2});let t=e;return t})();var te=(()=>{let e=class e{constructor(l){this.messageService=l,this.code={basic:'<p-fileUpload mode="basic" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse"></p-fileUpload>',html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-fileUpload mode="basic" name="demo[]" url="https://www.primefaces.org/cdn/api/upload.php" accept="image/*" maxFileSize="1000000" (onUpload)="onBasicUploadAuto($event)" [auto]="true" chooseLabel="Browse"></p-fileUpload>
</div>`,typescript:`
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
    originalEvent: Event;
    files: File[];
}

@Component({
    selector: 'file-upload-auto-demo',
    templateUrl: './file-upload-auto-demo.html',
    providers: [MessageService]
})
export class FileUploadAutoDemo {
    constructor(private messageService: MessageService) { }

    onBasicUploadAuto(event: UploadEvent) {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }
}`}}onBasicUploadAuto(l){this.messageService.add({severity:"info",summary:"Success",detail:"File Uploaded with Auto Mode"})}};e.\u0275fac=function(o){return new(o||e)(S(c))},e.\u0275cmp=m({type:e,selectors:[["file-upload-auto-demo"]],features:[w([c])],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],["mode","basic","name","demo[]","url","https://www.primefaces.org/cdn/api/upload.php","accept","image/*","maxFileSize","1000000","chooseLabel","Browse",3,"onUpload","auto"],["selector","file-upload-auto-demo",3,"code"]],template:function(o,r){o&1&&(a(0,"app-docsectiontext")(1,"p"),i(2,"When "),a(3,"i"),i(4,"auto"),n(),i(5," property is enabled, a file gets uploaded instantly after selection."),n()(),a(6,"div",0),s(7,"p-toast"),a(8,"p-fileUpload",1),F("onUpload",function(C){return r.onBasicUploadAuto(C)}),n()(),s(9,"app-code",2)),o&2&&(d(8),p("auto",!0),d(),p("code",r.code))},dependencies:[f,u,b,g],encapsulation:2});let t=e;return t})();var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["accessibility-doc"]],decls:18,vars:0,consts:[["routerLink","/button#accessibility"]],template:function(o,r){o&1&&(a(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),n(),a(3,"p"),i(4,"FileUpload uses a hidden native "),a(5,"i"),i(6,"input"),n(),i(7," element with "),a(8,"i"),i(9,'type="file"'),n(),i(10," for screen readers."),n(),a(11,"h3"),i(12,"Keyboard Support"),n(),a(13,"p"),i(14,"Interactive elements of the uploader are buttons, visit the "),a(15,"a",0),i(16,"Button"),n(),i(17," accessibility section for more information."),n()())},dependencies:[u,E],encapsulation:2});let t=e;return t})();var oe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=y({imports:[M,k,K,j,R,H,O,q,G,T,j]});let t=e;return t})();var ge=()=>["FileUpload"],ae=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:X},{id:"auto",label:"Auto",component:te},{id:"template",label:"Template",component:ee},{id:"advanced",label:"Advanced",component:V},{id:"style",label:"Style",component:Z},{id:"accessibility",label:"Accessibility",component:ie}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular FileUpload Component","header","FileUpload","description","FileUpload is an advanced uploader with drag and drop support, multi file uploads, auto uploading, progress tracking and validations.",3,"docs","apiDocs"]],template:function(o,r){o&1&&s(0,"app-doc",0),o&2&&p("docs",r.docs)("apiDocs",D(2,ge))},dependencies:[W],encapsulation:2});let t=e;return t})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=y({imports:[T.forChild([{path:"",component:ae}]),T]});let t=e;return t})();var gt=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=x({type:e}),e.\u0275inj=y({imports:[M,ne,oe]});let t=e;return t})();export{gt as FileUploadDemoModule};
