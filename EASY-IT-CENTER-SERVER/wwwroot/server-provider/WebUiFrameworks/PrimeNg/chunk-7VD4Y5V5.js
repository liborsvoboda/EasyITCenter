import{a as v,b as z}from"./chunk-UMPZYH6V.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-PXBAS5CJ.js";import{a as u,b as q,c as F}from"./chunk-AS5FXEGH.js";import{a as s,b as K}from"./chunk-X2ZDE2AM.js";import{e as b,f as L,g as B,h as W,i as M,j as R,m as j,n as O,p as P,q as U}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as V,t as D}from"./chunk-N5X6XDRN.js";import{Jb as t,Kb as x,Nb as S,Nc as I,Ob as k,Pb as y,Sa as l,Sb as w,V as g,da as d,ea as C,kb as m,rb as o,sb as i,tb as p}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var H=(()=>{let e=class e{constructor(){this.value=null,this.code={basic:'<p-triStateCheckbox [(ngModel)]="value" inputId="tricheckbox"></p-triStateCheckbox>',html:`
<div class="card flex flex-column gap-3 align-items-center">
    <p-triStateCheckbox [(ngModel)]="value" inputId="tricheckbox"></p-triStateCheckbox>
    <label for="tricheckbox">{{ value === null ? 'null' : value }}</label>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tri-state-checkbox-basic-demo',
    templateUrl: './tri-state-checkbox-basic-demo.html'
})
export class TriStateCheckboxBasicDemo {
    value: boolean | null = null;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:11,vars:3,consts:[[1,"card","flex","flex-column","gap-3","align-items-center"],["inputId","tricheckbox",3,"ngModelChange","ngModel"],["for","tricheckbox"],["selector","tri-state-checkbox-basic-demo",3,"code"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"A model can be bound using the standard "),o(3,"i"),t(4,"ngModel"),i(),t(5," directive."),i()(),o(6,"div",0)(7,"p-triStateCheckbox",1),y("ngModelChange",function(f){return k(a.value,f)||(a.value=f),f}),i(),o(8,"label",2),t(9),i()(),p(10,"app-code",3)),n&2&&(l(7),S("ngModel",a.value),l(2),x(a.value===null?"null":a.value),l(),m("code",a.code))},dependencies:[s,u,v,b,M],encapsulation:2});let r=e;return r})();var J=(()=>{let e=class e{constructor(){this.value=null,this.code={basic:`<p-triStateCheckbox [(ngModel)]="value" inputId="tricheckbox" class="ng-dirty ng-invalid"></p-triStateCheckbox>
<label  for="tricheckbox">{{ value === null ? 'null' : value }}</label>`,html:`<div class="card flex flex-column gap-3 align-items-center">
    <p-triStateCheckbox [(ngModel)]="value" inputId="tricheckbox" class="ng-dirty ng-invalid"></p-triStateCheckbox>
    <label  for="tricheckbox">{{ value === null ? 'null' : value }}</label>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tri-state-checkbox-invalid-demo',
    templateUrl: './tri-state-checkbox-invalid-demo.html'
})
export class TriStateCheckboxInvalidDemo {
    value: boolean | null = null;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["invalid-doc"]],decls:14,vars:3,consts:[[1,"card","flex","flex-column","gap-3","align-items-center"],["inputId","tricheckbox",1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["for","tricheckbox"],["selector","tri-state-checkbox-invalid-demo",3,"code"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),o(3,"i"),t(4,"ng-invalid"),i(),t(5," and "),o(6,"i"),t(7,"ng-dirty"),i(),t(8," class to indicate a failed validation."),i()(),o(9,"div",0)(10,"p-triStateCheckbox",1),y("ngModelChange",function(f){return k(a.value,f)||(a.value=f),f}),i(),o(11,"label",2),t(12),i()(),p(13,"app-code",3)),n&2&&(l(10),S("ngModel",a.value),l(2),x(a.value===null?"null":a.value),l(),m("code",a.code))},dependencies:[s,u,v,b,M],encapsulation:2});let r=e;return r})();var Q=(()=>{let e=class e{constructor(){this.code={typescript:"import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&p(0,"app-code",0),n&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[s],encapsulation:2});let r=e;return r})();var X=(()=>{let e=class e{constructor(){this.code={basic:'<p-triStateCheckbox [(ngModel)]="value" [disabled]="true"></p-triStateCheckbox>',html:`
<div class="card flex flex-column gap-3 align-items-center">
    <p-triStateCheckbox [(ngModel)]="value" [disabled]="true"></p-triStateCheckbox>
    <label>{{value === null ? 'null' : value}}</label>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'tri-state-checkbox-disabled-demo',
    templateUrl: './tri-state-checkbox-disabled-demo.html'
})
export class TriStateCheckboxDisabledDemo {
    value!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["disabled-doc"]],decls:11,vars:4,consts:[[1,"card","flex","flex-column","gap-3","align-items-center"],[3,"ngModelChange","ngModel","disabled"],["selector","tri-state-checkbox-disabled-demo",3,"code"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"disabled"),i(),t(5," is present, the element cannot be edited and focused."),i()(),o(6,"div",0)(7,"p-triStateCheckbox",1),y("ngModelChange",function(f){return k(a.value,f)||(a.value=f),f}),i(),o(8,"label"),t(9),i()(),p(10,"app-code",2)),n&2&&(l(7),S("ngModel",a.value),m("disabled",!0),l(2),x(a.value===null?"null":a.value),l(),m("code",a.code))},dependencies:[s,u,v,b,M],encapsulation:2});let r=e;return r})();var oe=()=>["/theming"],Y=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:35,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),t(4,"theming"),i(),t(5," page."),i()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),i(),o(12,"th"),t(13,"Element"),i()()(),o(14,"tbody")(15,"tr")(16,"td"),t(17,"p-checkbox"),i(),o(18,"td"),t(19,"Container element"),i()(),o(20,"tr")(21,"td"),t(22,"p-tristatechkbox"),i(),o(23,"td"),t(24,"Container element"),i()(),o(25,"tr")(26,"td"),t(27,"p-checkbox-box"),i(),o(28,"td"),t(29,"Container of icon."),i()(),o(30,"tr")(31,"td"),t(32,"p-checkbox-icon"),i(),o(33,"td"),t(34,"Icon element."),i()()()()()),n&2&&(l(3),m("routerLink",w(1,oe)))},dependencies:[u,V],encapsulation:2});let r=e;return r})();var Z=(()=>{let e=class e{constructor(){this.code={basic:`<span id="chkbox1">Remember Me</span>
<p-triStateCheckbox ariaLabelledBy="chkbox1"></p-triStateCheckbox>

<p-triStateCheckbox ariaLabel="Remember Me"></p-triStateCheckbox>`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:63,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),o(4,"p"),t(5," TriStateCheckbox component uses an element with "),o(6,"i"),t(7,"checkbox"),i(),t(8," role. Value to describe the component can either be provided with "),o(9,"i"),t(10,"ariaLabelledBy"),i(),t(11," or "),o(12,"i"),t(13,"ariaLabel"),i(),t(14," props. Component adds an element with "),o(15,"i"),t(16,"aria-live"),i(),t(17," attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the "),o(18,"i"),t(19,"trueLabel"),i(),t(20,", "),o(21,"i"),t(22,"falseLabel"),i(),t(23," and "),o(24,"i"),t(25,"nullLabel"),i(),t(26," keys of the "),o(27,"i"),t(28,"aria"),i(),t(29," property from the "),o(30,"a",0),t(31,"locale"),i(),t(32," API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification. "),i()(),p(33,"app-code",1),o(34,"h3"),t(35,"Keyboard Support"),i(),o(36,"div",2)(37,"table",3)(38,"thead")(39,"tr")(40,"th"),t(41,"Key"),i(),o(42,"th"),t(43,"Function"),i()()(),o(44,"tbody")(45,"tr")(46,"td")(47,"i"),t(48,"tab"),i()(),o(49,"td"),t(50,"Moves focus to the checkbox."),i()(),o(51,"tr")(52,"td")(53,"i"),t(54,"space"),i()(),o(55,"td"),t(56,"Toggles between the values."),i()(),o(57,"tr")(58,"td")(59,"i"),t(60,"enter"),i()(),o(61,"td"),t(62,"Toggles between the values."),i()()()()()()),n&2&&(l(33),m("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[s,u],encapsulation:2});let r=e;return r})();var $=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup" class="flex flex-column align-items-center gap-3">
    <p-triStateCheckbox formControlName="checked" inputId="checked"></p-triStateCheckbox>
    <label  for="checked">{{ formGroup.value.checked === null ? 'null' : formGroup.value.checked }}</label>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup" class="flex flex-column align-items-center gap-3">
        <p-triStateCheckbox formControlName="checked" inputId="checked"></p-triStateCheckbox>
        <label  for="checked">{{ formGroup.value.checked === null ? 'null' : formGroup.value.checked }}</label>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'tri-state-checkbox-reactive-forms-demo',
    templateUrl: './tri-state-checkbox-reactive-forms-demo.html'
})
export class TriStateCheckboxReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean | null>(null)
        });
    }
}`}}ngOnInit(){this.formGroup=new B({checked:new W(null)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","align-items-center","gap-3",3,"formGroup"],["formControlName","checked","inputId","checked"],["for","checked"],["selector","tri-state-checkbox-reactive-forms-demo",3,"code"]],template:function(n,a){n&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"TriStateCheckbox can also be used with reactive forms. In this case, the "),o(3,"i"),t(4,"formControlName"),i(),t(5," property is used to bind the component to a form control."),i()(),o(6,"div",0)(7,"form",1),p(8,"p-triStateCheckbox",2),o(9,"label",3),t(10),i()()(),p(11,"app-code",4)),n&2&&(l(7),m("formGroup",a.formGroup),l(3),x(a.formGroup.value.checked===null?"null":a.formGroup.value.checked),l(),m("code",a.code))},dependencies:[s,u,v,R,b,L,j,O],encapsulation:2});let r=e;return r})();var _=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[I,K,F,z,P,U,D,F]});let r=e;return r})();var ie=()=>["TriStateCheckbox"],ee=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:H},{id:"reactive-forms",label:"Reactive Forms",component:$},{id:"invalid",label:"Invalid",component:J},{id:"disabled",label:"Disabled",component:X},{id:"style",label:"Style",component:Y},{id:"accessibility",label:"Accessibility",component:Z}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular TriStateCheckbox Component","header","TriStateCheckbox","description","TriStateCheckbox is an extension to the Checkbox component with an additional state.",3,"docs","apiDocs"]],template:function(n,a){n&1&&p(0,"app-doc",0),n&2&&m("docs",a.docs)("apiDocs",w(2,ie))},dependencies:[q],encapsulation:2});let r=e;return r})();var te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[D.forChild([{path:"",component:ee}]),D]});let r=e;return r})();var Ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=g({imports:[I,te,_]});let r=e;return r})();export{Ze as TriStateCheckboxDemoModule};
