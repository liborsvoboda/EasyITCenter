import{a as b,b as K}from"./chunk-FVHWLI4A.js";import{a as f,b as V,c as k}from"./chunk-AS5FXEGH.js";import{a as d,b as P}from"./chunk-X2ZDE2AM.js";import{e as h,f as A,g as j,h as G,i as B,j as z,m as R,n as W,p as Y,q as O}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as U,t as D}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as x,Nc as E,Ob as v,Pb as S,Sa as s,Sb as M,V as y,da as a,ea as C,kb as m,nb as N,rb as i,sb as n,tb as p}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var q=(()=>{let e=class e{constructor(){this.code={basic:`<span id="rememberme">Remember Me</span>
<p-toggleButton ariaLabelledBy="rememberme"></p-toggleButton>

<p-toggleButton ariaLabel="Remember Me"></p-toggleButton>`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["accessibility-doc"]],decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,c){o&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),i(4,"p"),t(5," ToggleButton component uses an element with "),i(6,"i"),t(7,"button"),n(),t(8," role and updates "),i(9,"i"),t(10,"aria-pressed"),n(),t(11," state for screen readers. Value to describe the component can be defined with "),i(12,"i"),t(13,"ariaLabelledBy"),n(),t(14," or "),i(15,"i"),t(16,"ariaLabel"),n(),t(17," props, it is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria label that does not change related to state. "),n()(),p(18,"app-code",0),i(19,"h3"),t(20,"Keyboard Support"),n(),i(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),n(),i(27,"th"),t(28,"Function"),n()()(),i(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),n()(),i(34,"td"),t(35,"Moves focus to the button."),n()(),i(36,"tr")(37,"td")(38,"i"),t(39,"space"),n()(),i(40,"td"),t(41,"Toggles the checked state."),n()()()()()()),o&2&&(s(18),m("code",c.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[d,f],encapsulation:2});let r=e;return r})();var H=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-toggleButton [(ngModel)]="checked" onLabel="Yes" offLabel="No"></p-toggleButton>',html:`
<div class="card flex justify-content-center">
    <p-toggleButton [(ngModel)]="checked" onLabel="Yes" offLabel="No"></p-toggleButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'toggle-button-basic-demo',
    templateUrl: './toggle-button-basic-demo.html'
})
export class ToggleButtonBasicDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["onLabel","Yes","offLabel","No",3,"ngModelChange","ngModel"],["selector","toggle-button-basic-demo",3,"code"]],template:function(o,c){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Two-way binding to a boolean property is defined using the standard "),i(3,"i"),t(4,"ngModel"),n(),t(5," directive."),n()(),i(6,"div",0)(7,"p-toggleButton",1),S("ngModelChange",function(u){return v(c.checked,u)||(c.checked=u),u}),n()(),p(8,"app-code",2)),o&2&&(s(7),x("ngModel",c.checked),s(),m("code",c.code))},dependencies:[d,f,b,h,B],encapsulation:2});let r=e;return r})();var oe=()=>({width:"10em"}),J=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:`<p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{ width: '10em' }"></p-toggleButton>`,html:`
<div class="card flex justify-content-center">
    <p-toggleButton [(ngModel)]="checked" onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" [style]="{ width: '10em' }"></p-toggleButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'toggle-button-customized-demo',
    templateUrl: './toggle-button-customized-demo.html'
})
export class ToggleButtonCustomizedDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["customized-doc"]],decls:18,vars:5,consts:[[1,"card","flex","justify-content-center"],["onLabel","I confirm","offLabel","I reject","onIcon","pi pi-check","offIcon","pi pi-times",3,"ngModelChange","ngModel"],["selector","toggle-button-customized-demo",3,"code"]],template:function(o,c){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Icons and Labels can be customized using "),i(3,"i"),t(4,"onLabel"),n(),t(5,", "),i(6,"i"),t(7,"offLabel"),n(),t(8,", "),i(9,"i"),t(10,"onIcon"),n(),t(11," and "),i(12,"i"),t(13,"offIcon"),n(),t(14," properties."),n()(),i(15,"div",0)(16,"p-toggleButton",1),S("ngModelChange",function(u){return v(c.checked,u)||(c.checked=u),u}),n()(),p(17,"app-code",2)),o&2&&(s(16),N(M(4,oe)),x("ngModel",c.checked),s(),m("code",c.code))},dependencies:[d,f,b,h,B],encapsulation:2});let r=e;return r})();var Q=(()=>{let e=class e{constructor(){this.code={typescript:"import { ToggleButtonModule } from 'primeng/togglebutton';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,c){o&1&&p(0,"app-code",0),o&2&&m("code",c.code)("hideToggleCode",!0)},dependencies:[d],encapsulation:2});let r=e;return r})();var X=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-toggleButton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" styleClass="w-full sm:w-10rem" aria-label="Confirmation"></p-toggleButton>',html:`<div class="card flex justify-content-center">
<p-toggleButton disabled="true" onIcon="pi pi-check" offIcon="pi pi-times" [(ngModel)]="checked" onLabel="Yes" offLabel="No" styleClass="w-full sm:w-10rem" aria-label="Confirmation"></p-toggleButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'toggle-button-disabled-demo',
    templateUrl: './toggle-button-disabled-demo.html'
})
export class ToggleButtonDisabledDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["disabled-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["disabled","true","onIcon","pi pi-check","offIcon","pi pi-times","onLabel","Yes","offLabel","No","styleClass","w-full sm:w-10rem","aria-label","Confirmation",3,"ngModelChange","ngModel"],["selector","toggle-button-disabled-demo",3,"code"]],template:function(o,c){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"disabled"),n(),t(5," is present, the element cannot be edited and focused."),n()(),i(6,"div",0)(7,"p-toggleButton",1),S("ngModelChange",function(u){return v(c.checked,u)||(c.checked=u),u}),n()(),p(8,"app-code",2)),o&2&&(s(7),x("ngModel",c.checked),s(),m("code",c.code))},dependencies:[d,f,b,h,B],encapsulation:2});let r=e;return r})();var Z=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-toggleButton formControlName="checked" onLabel="Yes" offLabel="No"></p-toggleButton>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-toggleButton formControlName="checked" onLabel="Yes" offLabel="No"></p-toggleButton>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'toggle-button-reactive-forms-demo',
    templateUrl: './toggle-button-reactive-forms-demo.html'
})
export class ToggleButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean>(false)
        });
    }
}`}}ngOnInit(){this.formGroup=new j({checked:new G(!1)})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","checked","onLabel","Yes","offLabel","No"],["selector","toggle-button-reactive-forms-demo",3,"code"]],template:function(o,c){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"ToggleButton can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),n(),t(5," property is used to bind the component to a form control."),n()(),i(6,"div",0)(7,"form",1),p(8,"p-toggleButton",2),n()(),p(9,"app-code",3)),o&2&&(s(7),m("formGroup",c.formGroup),s(2),m("code",c.code))},dependencies:[d,f,b,z,h,A,R,W],encapsulation:2});let r=e;return r})();var ie=()=>["/theming"],$=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,c){o&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),t(4,"theming"),n(),t(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),n(),i(12,"th"),t(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),t(17,"p-togglebutton"),n(),i(18,"td"),t(19,"Container element."),n()(),i(20,"tr")(21,"td"),t(22,"p-button-icon-left"),n(),i(23,"td"),t(24,"Text element."),n()(),i(25,"tr")(26,"td"),t(27,"p-button-icon-right"),n(),i(28,"td"),t(29,"Value element."),n()()()()()),o&2&&(s(3),m("routerLink",M(1,ie)))},dependencies:[f,U],encapsulation:2});let r=e;return r})();var _=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[E,P,k,K,Y,O,D,k]});let r=e;return r})();var ne=()=>["ToggleButton"],ee=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Q},{id:"basic",label:"Basic",component:H},{id:"reactive-forms",label:"Reactive Forms",component:Z},{id:"customized",label:"Customized",component:J},{id:"disabled",label:"Disabled",component:X},{id:"style",label:"Style",component:$},{id:"accessibility",label:"Accessibility",component:q}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=a({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular ToggleButton Component","header","ToggleButton","description","ToggleButton is used to select a boolean value using a button.",3,"docs","apiDocs"]],template:function(o,c){o&1&&p(0,"app-doc",0),o&2&&m("docs",c.docs)("apiDocs",M(2,ne))},dependencies:[V],encapsulation:2});let r=e;return r})();var te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[D.forChild([{path:"",component:ee}]),D]});let r=e;return r})();var $e=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=C({type:e}),e.\u0275inj=y({imports:[E,te,_]});let r=e;return r})();export{$e as ToggleButtonDemoModule};
