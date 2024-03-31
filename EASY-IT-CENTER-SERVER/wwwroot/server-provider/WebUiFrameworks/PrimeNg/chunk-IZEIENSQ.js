import{a as w,b as J}from"./chunk-GATJVW4X.js";import"./chunk-7WKP5VQZ.js";import{a as H,b as q}from"./chunk-KPQQ7URC.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as u,b as V,c as k}from"./chunk-AS5FXEGH.js";import{a as f,b as K}from"./chunk-X2ZDE2AM.js";import{e as g,f as W,g as j,h as _,i as C,j as I,m as B,n as G,p as U,q as R}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as z}from"./chunk-UWMVDULA.js";import{o as O,t as A}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as v,Nc as F,Ob as h,Pb as y,Sa as s,Sb as L,V as E,da as m,ea as P,ib as N,kb as p,rb as o,sb as i,tb as c}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Q=(()=>{let e=class e{constructor(){this.code={basic:`<label for="pwd1">Password</label>
<p-password inputId="pwd1"></p-password>

<span id="pwd2">Password</span>
<p-password ariaLabelledBy="pwd2"></p-password>

<p-password ariaLabel="Password"></p-password>`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["accessibility-doc"]],decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),o(4,"p"),t(5," Value to describe the component can either be provided via "),o(6,"i"),t(7,"label"),i(),t(8," tag combined with "),o(9,"i"),t(10,"id"),i(),t(11," prop or using "),o(12,"i"),t(13,"ariaLabelledBy"),i(),t(14,", "),o(15,"i"),t(16,"ariaLabel"),i(),t(17," props. Screen reader is notified about the changes to the strength of the password using a section that has "),o(18,"i"),t(19,"aria-live"),i(),t(20," while typing. "),i()(),c(21,"app-code",0),o(22,"h3"),t(23,"Keyboard Support"),i(),o(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),t(29,"Key"),i(),o(30,"th"),t(31,"Function"),i()()(),o(32,"tbody")(33,"tr")(34,"td")(35,"i"),t(36,"tab"),i()(),o(37,"td"),t(38,"Moves focus to the input."),i()(),o(39,"tr")(40,"td")(41,"i"),t(42,"escape"),i()(),o(43,"td"),t(44,"Hides the strength meter if open."),i()()()()()()),n&2&&(s(21),p("code",r.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[f,u],encapsulation:2});let a=e;return a})();var X=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value" [feedback]="false"></p-password>',html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" [feedback]="false"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-basic-demo',
    templateUrl: './password-basic-demo.html'
})
export class PasswordBasicDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","feedback"],["selector","password-basic-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Two-way value binding is defined using "),o(3,"i"),t(4,"ngModel"),i(),t(5,"."),i()(),o(6,"div",0)(7,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(8,"app-code",2)),n&2&&(s(7),v("ngModel",r.value),p("feedback",!1),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var Y=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value" [disabled]="true"></p-password>',html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" [disabled]="true"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-disabled-demo',
    templateUrl: './password-disabled-demo.html'
})
export class PasswordDisabledDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","password-disabled-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"disabled"),i(),t(5," is present, the element cannot be edited and focused."),i()(),o(6,"div",0)(7,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(8,"app-code",2)),n&2&&(s(7),v("ngModel",r.value),p("disabled",!0),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var Z=(()=>{let e=class e{constructor(){this.code={basic:`<span class="p-float-label">
    <p-password [(ngModel)]="value" [feedback]="false"></p-password>
    <label for="password">Password</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-password [(ngModel)]="value" [feedback]="false"></p-password>
        <label for="password">Password</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-floatlabel-demo',
    templateUrl: './password-floatlabel-demo.html'
})
export class PasswordFloatlabelDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["floatlabel-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],[3,"ngModelChange","ngModel","feedback"],["for","password"],["selector","password-floatlabel-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"A floating label appears on top of the input field when focused."),i()(),o(3,"div",0)(4,"span",1)(5,"p-password",2),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i(),o(6,"label",3),t(7,"Password"),i()()(),c(8,"app-code",4)),n&2&&(s(5),v("ngModel",r.value),p("feedback",!1),s(3),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var $=(()=>{let e=class e{constructor(){this.code={typescript:"import { PasswordModule } from 'primeng/password';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&c(0,"app-code",0),n&2&&p("code",r.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let a=e;return a})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value" class="ng-invalid ng-dirty"></p-password>',html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" class="ng-invalid ng-dirty"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-invalid-demo',
    templateUrl: './password-invalid-demo.html'
})
export class PasswordInvalidDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","password-invalid-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),o(3,"i"),t(4,"ng-invalid"),i(),t(5," and "),o(6,"i"),t(7,"ng-dirty"),i(),t(8," class to indicate a failed validation."),i()(),o(9,"div",0)(10,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(11,"app-code",2)),n&2&&(s(10),v("ngModel",r.value),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var te=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value"></p-password>',html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-meter-demo',
    templateUrl: './password-meter-demo.html'
})
export class PasswordMeterDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["meter-doc"]],decls:6,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","password-meter-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Strength meter is displayed as a popup while a value is being entered."),i()(),o(3,"div",0)(4,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(5,"app-code",2)),n&2&&(s(4),v("ngModel",r.value),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var oe=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"></p-password>',html:`<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" promptLabel="Choose a password" weakLabel="Too simple" mediumLabel="Average complexity" strongLabel="Complex password"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-locale-demo',
    templateUrl: './password-locale-demo.html'
})
export class PasswordLocaleDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["locale-doc"]],decls:20,vars:2,consts:[["href","/configuration/#locale"],[1,"card","flex","justify-content-center"],["promptLabel","Choose a password","weakLabel","Too simple","mediumLabel","Average complexity","strongLabel","Complex password",3,"ngModelChange","ngModel"],["selector","password-locale-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2," Labels are translated at component level by "),o(3,"i"),t(4,"promptLabel"),i(),t(5,", "),o(6,"i"),t(7,"weakLabel"),i(),t(8,", "),o(9,"i"),t(10,"mediumLabel"),i(),t(11," and "),o(12,"i"),t(13,"strongLabel"),i(),t(14," properties. In order to apply global translations for all Password components in the application, refer to the "),o(15,"a",0),t(16,"locale"),i()()(),o(17,"div",1)(18,"p-password",2),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(19,"app-code",3)),n&2&&(s(18),v("ngModel",r.value),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var ie=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-password formControlName="value" [feedback]="false"></p-password>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-password formControlName="value" [feedback]="false"></p-password>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'password-reactive-forms-demo',
    templateUrl: './password-reactive-forms-demo.html'
})
export class PasswordReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl()
        });
    }
}`}}ngOnInit(){this.formGroup=new j({value:new _})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value",3,"feedback"],["selector","password-reactive-forms-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Password can also be used with reactive forms. In this case, the "),o(3,"i"),t(4,"formControlName"),i(),t(5," property is used to bind the component to a form control."),i()(),o(6,"div",0)(7,"form",1),c(8,"p-password",2),i()(),c(9,"app-code",3)),n&2&&(s(7),p("formGroup",r.formGroup),s(),p("feedback",!1),s(),p("code",r.code))},dependencies:[f,u,w,I,g,W,B,G],encapsulation:2});let a=e;return a})();var de=()=>["/theming"],ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),t(4,"theming"),i(),t(5," page."),i()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),i(),o(12,"th"),t(13,"Element"),i()()(),o(14,"tbody")(15,"tr")(16,"td"),t(17,"p-password-panel"),i(),o(18,"td"),t(19,"Container of password panel"),i()(),o(20,"tr")(21,"td"),t(22,"p-password-meter"),i(),o(23,"td"),t(24,"Meter element of password strength"),i()(),o(25,"tr")(26,"td"),t(27,"p-password-info"),i(),o(28,"td"),t(29,"Text to display strength"),i()()()()()),n&2&&(s(3),p("routerLink",L(1,de)))},dependencies:[u,O],encapsulation:2});let a=e;return a})();function me(a,e){a&1&&(o(0,"h6"),t(1,"Pick a password"),i())}function ce(a,e){a&1&&(c(0,"p-divider"),o(1,"p",5),t(2,"Suggestions"),i(),o(3,"ul",6)(4,"li"),t(5,"At least one lowercase"),i(),o(6,"li"),t(7,"At least one uppercase"),i(),o(8,"li"),t(9,"At least one numeric"),i(),o(10,"li"),t(11,"Minimum 8 characters"),i()())}var ae=(()=>{let e=class e{constructor(){this.code={basic:`<p-password [(ngModel)]="value">
    <ng-template pTemplate="header">
        <h6>Pick a password</h6>
    </ng-template>
    <ng-template pTemplate="footer">
        <p-divider></p-divider>
        <p class="mt-2">Suggestions</p>
        <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </ng-template>
</p-password>`,html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value">
         <ng-template pTemplate="header">
             <h6>Pick a password</h6>
         </ng-template>
         <ng-template pTemplate="footer">
             <p-divider></p-divider>
             <p class="mt-2">Suggestions</p>
             <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                 <li>At least one lowercase</li>
                 <li>At least one uppercase</li>
                 <li>At least one numeric</li>
                 <li>Minimum 8 characters</li>
             </ul>
         </ng-template>
     </p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-template-demo',
    templateUrl: './password-template-demo.html'
})
export class PasswordTemplateDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["template-doc"]],decls:17,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["pTemplate","header"],["pTemplate","footer"],["selector","password-template-demo",3,"code"],[1,"mt-2"],[1,"pl-2","ml-2","mt-0",2,"line-height","1.5"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"3 templates are included to customize the overlay. These are "),o(3,"i"),t(4,"header"),i(),t(5,", "),o(6,"i"),t(7,"content"),i(),t(8," and "),o(9,"i"),t(10,"footer"),i(),t(11,". Note that content overrides the default meter."),i()(),o(12,"div",0)(13,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),N(14,me,2,0,"ng-template",2)(15,ce,12,0,"ng-template",3),i()(),c(16,"app-code",4)),n&2&&(s(13),v("ngModel",r.value),s(3),p("code",r.code))},dependencies:[f,u,w,z,g,C,H],encapsulation:2});let a=e;return a})();var re=(()=>{let e=class e{constructor(){this.code={basic:'<p-password [(ngModel)]="value" [toggleMask]="true"></p-password>',html:`
<div class="card flex justify-content-center">
    <p-password [(ngModel)]="value" [toggleMask]="true"></p-password>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'password-toggle-mask-demo',
    templateUrl: './password-toggle-mask-demo.html'
})
export class PasswordToggleMaskDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["togglemask-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","toggleMask"],["selector","password-toggle-mask-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"toggleMask"),i(),t(5," is present, an icon is displayed to show the value as plain text."),i()(),o(6,"div",0)(7,"p-password",1),y("ngModelChange",function(l){return h(r.value,l)||(r.value=l),l}),i()(),c(8,"app-code",2)),n&2&&(s(7),v("ngModel",r.value),p("toggleMask",!0),s(),p("code",r.code))},dependencies:[f,u,w,g,C],encapsulation:2});let a=e;return a})();var se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[F,K,k,J,U,R,q,A,k]});let a=e;return a})();var fe=()=>["Password","PasswordDirective"],pe=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:$},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:ie},{id:"meter",label:"Meter",component:te},{id:"locale",label:"Locale",component:oe},{id:"togglemask",label:"Toggle Mask",component:re},{id:"template",label:"Template",component:ae},{id:"floatlabel",label:"Float Label",component:Z},{id:"invalid",label:"Invalid",component:ee},{id:"disabled",label:"Disabled",component:Y},{id:"style",label:"Style",component:ne},{id:"accessibility",label:"Accessibility",component:Q}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Password Component","header","Password","description","Password displays strength indicator for password fields.",3,"docs","apiDocs"]],template:function(n,r){n&1&&c(0,"app-doc",0),n&2&&p("docs",r.docs)("apiDocs",L(2,fe))},dependencies:[V],encapsulation:2});let a=e;return a})();var le=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[A.forChild([{path:"",component:pe}]),A]});let a=e;return a})();var Lt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=E({imports:[F,le,se]});let a=e;return a})();export{Lt as PasswordDemoModule};
