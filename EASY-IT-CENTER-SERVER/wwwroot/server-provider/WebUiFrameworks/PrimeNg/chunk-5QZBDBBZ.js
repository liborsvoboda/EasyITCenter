import{a as S,b as O}from"./chunk-WW43CASL.js";import{a as f,b as K,c as N}from"./chunk-AS5FXEGH.js";import{a as u,b as z}from"./chunk-X2ZDE2AM.js";import{e as g,f as j,g as B,h as W,i as C,j as G,m as R,n as P,p as L,q as U}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as D}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as w,Nc as k,Ob as y,Pb as v,Sa as m,Sb as A,V as b,da as a,ea as x,kb as d,rb as n,sb as r,tb as s}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var V=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>',html:` 
<div class="card flex justify-content-center">
    <p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-switch-basic-demo',
    templateUrl: './input-switch-basic-demo.html'
})
export class InputSwitchBasicDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","input-switch-basic-demo",3,"code"]],template:function(i,c){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"Two-way value binding is defined using "),n(3,"i"),t(4,"ngModel"),r(),t(5,"."),r()(),n(6,"div",0)(7,"p-inputSwitch",1),v("ngModelChange",function(l){return y(c.checked,l)||(c.checked=l),l}),r()(),s(8,"app-code",2)),i&2&&(m(7),w("ngModel",c.checked),m(),d("code",c.code))},dependencies:[u,f,g,C,S],encapsulation:2});let o=e;return o})();var q=(()=>{let e=class e{constructor(){this.code={typescript:"import { InputSwitchModule } from 'primeng/inputswitch';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,c){i&1&&s(0,"app-code",0),i&2&&d("code",c.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let o=e;return o})();var H=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-inputSwitch [(ngModel)]="checked" [disabled]="true"></p-inputSwitch>',html:`
<div class="card flex justify-content-center">
    <p-inputSwitch [(ngModel)]="checked" [disabled]="true"></p-inputSwitch>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-switch-disabled-demo',
    templateUrl: './input-switch-disabled-demo.html'
})
export class InputSwitchDisabledDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","input-switch-disabled-demo",3,"code"]],template:function(i,c){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"When "),n(3,"i"),t(4,"disabled"),r(),t(5," is present, the element cannot be edited and focused."),r()(),n(6,"div",0)(7,"p-inputSwitch",1),v("ngModelChange",function(l){return y(c.checked,l)||(c.checked=l),l}),r()(),s(8,"app-code",2)),i&2&&(m(7),w("ngModel",c.checked),d("disabled",!0),m(),d("code",c.code))},dependencies:[u,f,g,C,S],encapsulation:2});let o=e;return o})();var J=(()=>{let e=class e{constructor(){this.checked=!0,this.code={basic:'<p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>',html:`
<div class="card flex justify-content-center">
    <p-inputSwitch [(ngModel)]="checked"></p-inputSwitch>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-switch-preselection-demo',
    templateUrl: './input-switch-preselection-demo.html'
})
export class InputSwitchPreselectionDemo {
    checked: boolean = true;
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["preselection-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","input-switch-preselection-demo",3,"code"]],template:function(i,c){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"Enabling "),n(3,"i"),t(4,"ngModel"),r(),t(5," property displays the component as active initially."),r()(),n(6,"div",0)(7,"p-inputSwitch",1),v("ngModelChange",function(l){return y(c.checked,l)||(c.checked=l),l}),r()(),s(8,"app-code",2)),i&2&&(m(7),w("ngModel",c.checked),m(),d("code",c.code))},dependencies:[u,f,g,C,S],encapsulation:2});let o=e;return o})();var Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["style-doc"]],decls:24,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,c){i&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t(5,"Name"),r(),n(6,"th"),t(7,"Element"),r()()(),n(8,"tbody")(9,"tr")(10,"td"),t(11,"p-inputswitch"),r(),n(12,"td"),t(13,"Container element."),r()(),n(14,"tr")(15,"td"),t(16,"p-inputswitch-checked"),r(),n(17,"td"),t(18,"Container element in active state."),r()(),n(19,"tr")(20,"td"),t(21,"p-inputswitch-slider"),r(),n(22,"td"),t(23,"Slider element behind the handle."),r()()()()())},encapsulation:2});let o=e;return o})();var X=(()=>{let e=class e{constructor(){this.code={basic:`<label for="switch1">Remember Me</label>
<p-inputSwitch inputId="switch1"></p-inputSwitch>

<span id="switch2">Remember Me</span>
<p-inputSwitch ariaLabelledBy="switch2"></p-inputSwitch>

<p-inputSwitch ariaLabel="Remember Me"></p-inputSwitch>`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["accessibility-doc"]],decls:45,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,c){i&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),r(),n(4,"p"),t(5," InputSwitch component uses a hidden native checkbox element with "),n(6,"i"),t(7,"switch"),r(),t(8," role internally that is only visible to screen readers. Value to describe the component can either be provided via "),n(9,"i"),t(10,"label"),r(),t(11," tag combined with "),n(12,"i"),t(13,"inputId"),r(),t(14," prop or using "),n(15,"i"),t(16,"ariaLabelledBy"),r(),t(17,", "),n(18,"i"),t(19,"ariaLabel"),r(),t(20," props. "),r()(),s(21,"app-code",0),n(22,"h3"),t(23,"Keyboard Support"),r(),n(24,"div",1)(25,"table",2)(26,"thead")(27,"tr")(28,"th"),t(29,"Key"),r(),n(30,"th"),t(31,"Function"),r()()(),n(32,"tbody")(33,"tr")(34,"td")(35,"i"),t(36,"tab"),r()(),n(37,"td"),t(38,"Moves focus to the switch."),r()(),n(39,"tr")(40,"td")(41,"i"),t(42,"space"),r()(),n(43,"td"),t(44,"Toggles the checked state."),r()()()()()()),i&2&&(m(21),d("code",c.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let o=e;return o})();var Y=(()=>{let e=class e{constructor(){this.code={basic:'<p-inputSwitch formControlName="checked"></p-inputSwitch>',html:`
<div class="card flex justify-content-center">
    <p-inputSwitch formControlName="checked"></p-inputSwitch>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-switch-reactive-forms-demo',
    templateUrl: './input-switch-reactive-forms-demo.html'
})
export class InputSwitchReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean>(false)
        });
    }
}`}}ngOnInit(){this.formGroup=new B({checked:new W})}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","checked"],["selector","input-switch-reactive-forms-demo",3,"code"]],template:function(i,c){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"InputSwitch can also be used with reactive forms. In this case, the "),n(3,"i"),t(4,"formControlName"),r(),t(5," property is used to bind the component to a form control."),r()(),n(6,"div",0)(7,"form",1),s(8,"p-inputSwitch",2),r()(),s(9,"app-code",3)),i&2&&(m(7),d("formGroup",c.formGroup),m(2),d("code",c.code))},dependencies:[u,f,G,g,j,R,P,S],encapsulation:2});let o=e;return o})();var Z=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-inputSwitch [(ngModel)]="checked" class="ng-dirty ng-invalid"></p-inputSwitch>',html:`<div class="card flex justify-content-center">
    <p-inputSwitch [(ngModel)]="checked" class="ng-dirty ng-invalid"></p-inputSwitch>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-switch-invalid-demo',
    templateUrl: './input-switch-invalid-demo.html'
})
export class InputSwitchInvalidDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"ng-dirty","ng-invalid",3,"ngModelChange","ngModel"],["selector","input-switch-invalid-demo",3,"code"]],template:function(i,c){i&1&&(n(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),n(3,"i"),t(4,"ng-invalid"),r(),t(5," and "),n(6,"i"),t(7,"ng-dirty"),r(),t(8," class to indicate a failed validation."),r()(),n(9,"div",0)(10,"p-inputSwitch",1),v("ngModelChange",function(l){return y(c.checked,l)||(c.checked=l),l}),r()(),s(11,"app-code",2)),i&2&&(m(10),w("ngModel",c.checked),m(),d("code",c.code))},dependencies:[u,f,g,C,S],encapsulation:2});let o=e;return o})();var _=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[k,D,z,N,L,U,O,N]});let o=e;return o})();var te=()=>["InputSwitch"],$=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:q},{id:"basic",label:"Basic",component:V},{id:"reactive-forms",label:"Reactive Forms",component:Y},{id:"preselection",label:"Preselection",component:J},{id:"disabled",label:"Disabled",component:H},{id:"invalid",label:"Invalid",component:Z},{id:"style",label:"Style",component:Q},{id:"accessibility",label:"Accessibility",component:X}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputSwitch Component","header","InputSwitch","description","InputSwitch is used to select a boolean value.",3,"docs","apiDocs"]],template:function(i,c){i&1&&s(0,"app-doc",0),i&2&&d("docs",c.docs)("apiDocs",A(2,te))},dependencies:[K],encapsulation:2});let o=e;return o})();var ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[D.forChild([{path:"",component:$}]),D]});let o=e;return o})();var _e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=x({type:e}),e.\u0275inj=b({imports:[k,ee,_]});let o=e;return o})();export{_e as InputSwitchDemoModule};
