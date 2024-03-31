import{a as k,b as K}from"./chunk-Y2SF2K2Q.js";import"./chunk-W23CXJV4.js";import"./chunk-PXBAS5CJ.js";import{a as f,b as z,c as A}from"./chunk-AS5FXEGH.js";import{a as u,b as R}from"./chunk-X2ZDE2AM.js";import{e as v,f as W,g as _,h as j,i as y,j as B,m as L,n as P,p as G,q as O}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as U,t as N}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as M,Nc as T,Ob as g,Pb as h,Sa as l,Sb as F,V as E,da as d,ea as I,kb as s,rb as i,sb as n,tb as c}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var V=(()=>{let e=class e{constructor(){this.code={basic:`<label for="date">Date</label>
<p-inputMask inputId="date"></p-inputMask>

<span id="phone">Phone</span>
<p-inputMask ariaLabelledBy="phone"></p-inputMask>

<p-inputMask ariaLabel="Age"></p-inputMask>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,r){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),i(6,"i"),t(7,"label"),n(),t(8," tag combined with "),i(9,"i"),t(10,"id"),n(),t(11," prop or using "),i(12,"i"),t(13,"ariaLabelledBy"),n(),t(14,", "),i(15,"i"),t(16,"ariaLabel"),n(),t(17," props. "),n()(),c(18,"app-code",0),i(19,"h3"),t(20,"Keyboard Support"),n(),i(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),n(),i(27,"th"),t(28,"Function"),n()()(),i(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),n()(),i(34,"td"),t(35,"Moves focus to the input."),n()()()()()()),o&2&&(l(18),s("code",r.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let a=e;return a})();var q=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>',html:`
<div class="card flex justify-content-center">
    <p-inputMask mask="99-999999" [(ngModel)]="value" placeholder="99-999999"></p-inputMask>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-basic-demo',
    templateUrl: './input-mask-basic-demo.html'
})
export class InputMaskBasicDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["mask","99-999999","placeholder","99-999999",3,"ngModelChange","ngModel"],["selector","input-mask-basic-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"InputMask is used as a controlled input with "),i(3,"i"),t(4,"ngModel"),n(),t(5," properties."),n()(),i(6,"div",0)(7,"p-inputMask",1),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n()(),c(8,"app-code",2)),o&2&&(l(7),M("ngModel",r.value),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var H=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>',html:`
<div class="card flex justify-content-center">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" [disabled]="true"></p-inputMask>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-disabled-demo',
    templateUrl: './input-mask-disabled-demo.html'
})
export class InputMaskDisabledDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],["mask","999-99-9999",3,"ngModelChange","ngModel","disabled"],["selector","input-mask-disabled-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"disabled"),n(),t(5," is present, the element cannot be edited and focused."),n()(),i(6,"div",0)(7,"p-inputMask",1),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n()(),c(8,"app-code",2)),o&2&&(l(7),M("ngModel",r.value),s("disabled",!0),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var J=(()=>{let e=class e{constructor(){this.code={basic:`<span class="p-float-label">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>
    <label for="ssn_input">SSN</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" id="ssn_input"></p-inputMask>
    <label for="ssn_input">SSN</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-floatlabel-demo',
    templateUrl: './input-mask-floatlabel-demo.html'
})
export class InputMaskFloatlabelDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["floatlabel-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["mask","999-99-9999","id","ssn_input",3,"ngModelChange","ngModel"],["for","ssn_input"],["selector","input-mask-floatlabel-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"A floating label appears on top of the input field when focused."),n()(),i(3,"div",0)(4,"span",1)(5,"p-inputMask",2),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n(),i(6,"label",3),t(7,"SSN"),n()()(),c(8,"app-code",4)),o&2&&(l(5),M("ngModel",r.value),l(3),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var Q=(()=>{let e=class e{constructor(){this.code={typescript:"import { InputMaskModule } from 'primeng/inputmask';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,r){o&1&&c(0,"app-code",0),o&2&&s("code",r.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let a=e;return a})();var X=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>',html:`
<div class="card flex justify-content-center">
    <p-inputMask mask="999-99-9999" [(ngModel)]="value" class="ng-invalid ng-dirty"></p-inputMask>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-invalid-demo',
    templateUrl: './input-mask-invalid-demo.html'
})
export class InputMaskInvalidDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["mask","999-99-9999",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-mask-invalid-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),i(3,"i"),t(4,"ng-invalid"),n(),t(5," and "),i(6,"i"),t(7,"ng-dirty"),n(),t(8," class to indicate a failed validation."),n()(),i(9,"div",0)(10,"p-inputMask",1),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n()(),c(11,"app-code",2)),o&2&&(l(10),M("ngModel",r.value),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var Y=(()=>{let e=class e{constructor(){this.code={basic:`<span class="font-bold block mb-2">SSN</span>
<p-inputMask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999"></p-inputMask>

<span class="font-bold block mb-2">Phone</span>
<p-inputMask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999"></p-inputMask>

<span class="font-bold block mb-2">Serial Number</span>
<p-inputMask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999"></p-inputMask>`,html:`
<div class="card p-fluid flex flex-wrap gap-3">
    <div class="flex-auto">
        <span class="font-bold block mb-2">SSN</span>
        <p-inputMask mask="999-99-9999" [(ngModel)]="value1" placeholder="999-99-9999"></p-inputMask>
    </div>

    <div class="flex-auto">
        <span class="font-bold block mb-2">Phone</span>
        <p-inputMask mask="(999) 999-9999" [(ngModel)]="value2" placeholder="(999) 999-9999"></p-inputMask>
    </div>

    <div class="flex-auto">
        <span class="font-bold block mb-2">Serial Number</span>
        <p-inputMask mask="a*-999-a999" [(ngModel)]="value3" placeholder="a*-999-a999"></p-inputMask>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-mask-demo',
    templateUrl: './input-mask-mask-demo.html'
})
export class InputMaskMaskDemo {
    value1: string | undefined;

    value2: string | undefined;

    value3: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["input-mask-mask-demo"]],decls:35,vars:4,consts:[[1,"card","p-fluid","flex","flex-wrap","gap-3"],[1,"flex-auto"],[1,"font-bold","block","mb-2"],["mask","999-99-9999","placeholder","999-99-9999",3,"ngModelChange","ngModel"],["mask","(999) 999-9999","placeholder","(999) 999-9999",3,"ngModelChange","ngModel"],["mask","a*-999-a999","placeholder","a*-999-a999",3,"ngModelChange","ngModel"],["selector","input-mask-mask-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2," Mask format can be a combination of the following definitions; "),i(3,"i"),t(4,"a"),n(),t(5," for alphabetic characters, "),i(6,"i"),t(7,"9"),n(),t(8," for numeric characters and "),i(9,"i"),t(10,"*"),n(),t(11," for alphanumberic characters. In addition, formatting characters like "),i(12,"i"),t(13,"("),n(),t(14," , "),i(15,"i"),t(16,")"),n(),t(17," , "),i(18,"i"),t(19,"-"),n(),t(20," are also accepted. "),n()(),i(21,"div",0)(22,"div",1)(23,"span",2),t(24,"SSN"),n(),i(25,"p-inputMask",3),h("ngModelChange",function(p){return g(r.value1,p)||(r.value1=p),p}),n()(),i(26,"div",1)(27,"span",2),t(28,"Phone"),n(),i(29,"p-inputMask",4),h("ngModelChange",function(p){return g(r.value2,p)||(r.value2=p),p}),n()(),i(30,"div",1)(31,"span",2),t(32,"Serial Number"),n(),i(33,"p-inputMask",5),h("ngModelChange",function(p){return g(r.value3,p)||(r.value3=p),p}),n()()(),c(34,"app-code",6)),o&2&&(l(25),M("ngModel",r.value1),l(4),M("ngModel",r.value2),l(4),M("ngModel",r.value3),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var Z=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>',html:`
<div class="card flex justify-content-center">
    <p-inputMask mask="(999) 999-9999? x99999" [(ngModel)]="value" placeholder="(999) 999-9999? x99999"></p-inputMask>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-optional-demo',
    templateUrl: './input-mask-optional-demo.html'
})
export class InputMaskOptionalDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["optional-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["mask","(999) 999-9999? x99999","placeholder","(999) 999-9999? x99999",3,"ngModelChange","ngModel"],["selector","input-mask-optional-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When the input does not complete the mask definition, it is cleared by default. Use "),i(3,"i"),t(4,"autoClear"),n(),t(5," property to control this behavior. In addition, "),i(6,"i"),t(7,"?"),n(),t(8," is used to mark anything after the question mark optional."),n()(),i(9,"div",0)(10,"p-inputMask",1),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n()(),c(11,"app-code",2)),o&2&&(l(10),M("ngModel",r.value),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var $=(()=>{let e=class e{constructor(){this.code={basic:`
<p-inputMask mask="99-999999" formControlName="value" placeholder="99-999999"></p-inputMask>`,html:`
<div class="card flex justify-content-center">
    <p-inputMask mask="99-999999" formControlName="value" placeholder="99-999999"></p-inputMask>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-mask-reactive-forms-demo',
    templateUrl: './input-mask-reactive-forms-demo.html'
})
export class InputMaskReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl<string | null>(null)
        });
    }
}`}}ngOnInit(){this.formGroup=new _({value:new j(null)})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["mask","99-999999","formControlName","value","placeholder","99-999999"],["selector","input-mask-reactive-forms-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"InputMask can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),n(),t(5," property is used to bind the component to a form control."),n()(),i(6,"div",0)(7,"form",1),c(8,"p-inputMask",2),n()(),c(9,"app-code",3)),o&2&&(l(7),s("formGroup",r.formGroup),l(2),s("code",r.code))},dependencies:[B,v,W,L,P,k,u,f],encapsulation:2});let a=e;return a})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>',html:`
<div class="card flex justify-content-center">
    <p-inputMask [(ngModel)]="value" mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"></p-inputMask>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-mask-slot-char-demo',
    templateUrl: './input-mask-slot-char-demo.html'
})
export class InputMaskSlotCharDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["slot-char-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["mask","99/99/9999","placeholder","99/99/9999","slotChar","mm/dd/yyyy",3,"ngModelChange","ngModel"],["selector","input-mask-slot-char-demo",3,"code"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Default placeholder for a mask is underscore that can be customized using "),i(3,"i"),t(4,"slotChar"),n(),t(5," property."),n()(),i(6,"div",0)(7,"p-inputMask",1),h("ngModelChange",function(p){return g(r.value,p)||(r.value=p),p}),n()(),c(8,"app-code",2)),o&2&&(l(7),M("ngModel",r.value),l(),s("code",r.code))},dependencies:[v,y,k,u,f],encapsulation:2});let a=e;return a})();var ae=()=>["/inputtext"],re=()=>["/theming"],te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:9,vars:4,consts:[["href","#",3,"routerLink"]],template:function(o,r){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Styling is same as "),i(3,"a",0),t(4,"inputtext component"),n(),t(5,", for theming classes visit "),i(6,"a",0),t(7,"theming page"),n(),t(8,"."),n()()),o&2&&(l(3),s("routerLink",F(2,ae)),l(3),s("routerLink",F(3,re)))},dependencies:[U,f],encapsulation:2});let a=e;return a})();var oe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=I({type:e}),e.\u0275inj=E({imports:[T,G,O,K,N,R,A,A]});let a=e;return a})();var pe=()=>["InputMask"],ie=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:q},{id:"reactive-forms",label:"Reactive Forms",component:$},{id:"mask",label:"Mask",component:Y},{id:"slotchar",label:"Slot Char",component:ee},{id:"optional",label:"Optional",component:Z},{id:"floatlabel",label:"FloatLabel",component:J},{id:"disabled",label:"Disabled",component:H},{id:"invalid",label:"Invalid",component:X},{id:"style",label:"Style",component:te},{id:"accessibility",label:"Accessibility",component:V}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputMask Component","header","InputMask","description","InputMask component is used to enter input in a certain format such as numeric, date, currency and phone.",3,"docs","apiDocs"]],template:function(o,r){o&1&&c(0,"app-doc",0),o&2&&s("docs",r.docs)("apiDocs",F(2,pe))},dependencies:[z],encapsulation:2});let a=e;return a})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=I({type:e}),e.\u0275inj=E({imports:[N.forChild([{path:"",component:ie}]),N]});let a=e;return a})();var ht=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=I({type:e}),e.\u0275inj=E({imports:[T,ne,oe]});let a=e;return a})();export{ht as InputMaskDemoModule};
