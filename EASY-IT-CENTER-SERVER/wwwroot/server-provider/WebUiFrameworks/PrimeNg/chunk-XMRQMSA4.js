import{a as g,b as J}from"./chunk-24SD7D6H.js";import{a as f,b as q,c as F}from"./chunk-AS5FXEGH.js";import{a as u,b as K}from"./chunk-X2ZDE2AM.js";import{e as v,f as V,g as W,h as I,i as M,j as G,m as _,n as R,p as P,q as U}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as k}from"./chunk-UWMVDULA.js";import{t as E}from"./chunk-N5X6XDRN.js";import{Jb as i,Nb as y,Nc as j,Ob as b,Pb as h,Sa as c,Sb as A,V as S,da as m,ea as B,ib as L,kb as p,ob as N,rb as l,sb as a,tb as d}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var z=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["accessibility-doc"]],decls:41,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){o&1&&(l(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),a(),l(4,"p"),i(5," The container element that wraps the buttons has a "),l(6,"i"),i(7,"group"),a(),i(8," role whereas each button element uses "),l(9,"i"),i(10,"button"),a(),i(11," role and "),l(12,"i"),i(13,"aria-pressed"),a(),i(14," is updated depending on selection state. Value to describe an option is automatically set using the "),l(15,"i"),i(16,"ariaLabel"),a(),i(17," property that refers to the label of an option so it is still suggested to define a label even the option display consists of presentational content like icons only. "),a()(),l(18,"h3"),i(19,"Keyboard Support"),a(),l(20,"div",0)(21,"table",1)(22,"thead")(23,"tr")(24,"th"),i(25,"Key"),a(),l(26,"th"),i(27,"Function"),a()()(),l(28,"tbody")(29,"tr")(30,"td")(31,"i"),i(32,"tab"),a()(),l(33,"td"),i(34,"Moves focus to the buttons."),a()(),l(35,"tr")(36,"td")(37,"i"),i(38,"space"),a()(),l(39,"td"),i(40,"Toggles the checked state of a button."),a()()()()()())},dependencies:[f],encapsulation:2});let t=e;return t})();var H=(()=>{let e=class e{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.value="off",this.code={basic:'<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value"></p-selectButton>',html:`
<div class="card flex justify-content-center">
    <p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value"></p-selectButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'select-button-basic-demo',
    templateUrl: './select-button-basic-demo.html'
})
export class SelectButtonBasicDemo {
    stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

    value: string = 'off';
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["basic-doc"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel"],["selector","select-button-basic-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"SelectButton requires a value to bind and a collection of options."),a()(),l(3,"div",0)(4,"p-selectButton",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),a()(),d(5,"app-code",2)),o&2&&(c(4),p("options",n.stateOptions),y("ngModel",n.value),c(),p("code",n.code))},dependencies:[u,f,g,v,M],encapsulation:2});let t=e;return t})();var Q=(()=>{let e=class e{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.stateOptions2=[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2",constant:!0}],this.value1="off",this.value2="Option 1",this.code={basic:`<p-selectButton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true"></p-selectButton>
<p-selectButton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant"></p-selectButton>`,html:`
<div class="card flex justify-content-center">
    <p-selectButton [options]="stateOptions" [(ngModel)]="value1" optionLabel="label" optionValue="value" [disabled]="true"></p-selectButton>
    <p-selectButton [options]="stateOptions2" [(ngModel)]="value2" optionLabel="label" optionValue="value" optionDisabled="constant"></p-selectButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'select-button-disabled-demo',
    templateUrl: './select-button-disabled-demo.html'
})
export class SelectButtonDisabledDemo {
    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    stateOptions2: any[] = [
        { label: 'Option 1', value: 'Option 1' },
        { label: 'Option 2', value: 'Option 2', constant: true }
    ];

    value1: string = 'off';

    value2: string = 'Option 1';
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["disabled-doc"]],decls:13,vars:6,consts:[[1,"card","flex","justify-content-center","flex-wrap","gap-3"],["optionLabel","label","optionValue","value",3,"ngModelChange","options","ngModel","disabled"],["optionLabel","label","optionValue","value","optionDisabled","constant",3,"ngModelChange","options","ngModel"],["selector","select-button-disabled-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"When "),l(3,"i"),i(4,"disabled"),a(),i(5," is present, the element cannot be edited and focused entirely. Certain options can also be disabled using the "),l(6,"i"),i(7,"optionDisabled"),a(),i(8," property."),a()(),l(9,"div",0)(10,"p-selectButton",1),h("ngModelChange",function(s){return b(n.value1,s)||(n.value1=s),s}),a(),l(11,"p-selectButton",2),h("ngModelChange",function(s){return b(n.value2,s)||(n.value2=s),s}),a()(),d(12,"app-code",3)),o&2&&(c(10),p("options",n.stateOptions),y("ngModel",n.value1),p("disabled",!0),c(),p("options",n.stateOptions2),y("ngModel",n.value2),c(),p("code",n.code))},dependencies:[u,f,g,v,M],encapsulation:2});let t=e;return t})();var X=(()=>{let e=class e{constructor(){this.code={typescript:"import { SelectButtonModule } from 'primeng/selectbutton';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&d(0,"app-code",0),o&2&&p("code",n.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let t=e;return t})();var Y=(()=>{let e=class e{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.value="off",this.code={basic:'<p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty"></p-selectButton>',html:`
<div class="card flex justify-content-center">
    <p-selectButton [options]="stateOptions" [(ngModel)]="value" optionLabel="label" optionValue="value" class="ng-invalid ng-dirty"></p-selectButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'select-button-invalid-demo',
    templateUrl: './select-button-invalid-demo.html'
})
export class SelectButtonInvalidDemo {
    stateOptions: any[] = [{label: 'Off', value: 'off'}, {label: 'On', value: 'on'}];

    value: string = 'off';
}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["invalid-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["optionLabel","label","optionValue","value",1,"ng-invalid","ng-dirty",3,"ngModelChange","options","ngModel"],["selector","select-button-invalid-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"Invalid state style is added using the "),l(3,"i"),i(4,"ng-invalid"),a(),i(5," and "),l(6,"i"),i(7,"ng-dirty"),a(),i(8," class to indicate a failed validation."),a()(),l(9,"div",0)(10,"p-selectButton",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),a()(),d(11,"app-code",2)),o&2&&(c(10),p("options",n.stateOptions),y("ngModel",n.value),c(),p("code",n.code))},dependencies:[u,f,g,v,M],encapsulation:2});let t=e;return t})();var Z=(()=>{let e=class e{constructor(){this.paymentOptions=[{name:"Option 1",value:1},{name:"Option 2",value:2},{name:"Option 3",value:3}],this.code={basic:'<p-selectButton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value"></p-selectButton>',html:`
<div class="card flex justify-content-center">
    <p-selectButton [options]="paymentOptions" [(ngModel)]="value" [multiple]="true" optionLabel="name" optionValue="value"></p-selectButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'select-button-multiple-demo',
    templateUrl: './select-button-multiple-demo.html'
})
export class SelectButtonMultipleDemo {
    value!: number;
    
    paymentOptions: any[] = [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 }
    ];

}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["multiple-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","optionValue","value",3,"ngModelChange","options","ngModel","multiple"],["selector","select-button-multiple-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"SelectButton allows selecting only one item by default and setting "),l(3,"i"),i(4,"multiple"),a(),i(5," option enables choosing more than one item. In multiple case, model property should be an array."),a()(),l(6,"div",0)(7,"p-selectButton",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),a()(),d(8,"app-code",2)),o&2&&(c(7),p("options",n.paymentOptions),y("ngModel",n.value),p("multiple",!0),c(),p("code",n.code))},dependencies:[u,f,g,v,M],encapsulation:2});let t=e;return t})();var $=(()=>{let e=class e{constructor(){this.stateOptions=[{label:"Off",value:"off"},{label:"On",value:"on"}],this.code={basic:`<form [formGroup]="formGroup">
    <p-selectButton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value"></p-selectButton>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-selectButton [options]="stateOptions" formControlName="value" optionLabel="label" optionValue="value"></p-selectButton>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'select-button-reactive-forms-demo',
    templateUrl: './select-button-reactive-forms-demo.html'
})
export class SelectButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    stateOptions: any[] = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' }
    ];

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl('on')
        });
    }
}`}}ngOnInit(){this.formGroup=new W({value:new I("on")})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value","optionLabel","label","optionValue","value",3,"options"],["selector","select-button-reactive-forms-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"SelectButton can also be used with reactive forms. In this case, the "),l(3,"i"),i(4,"formControlName"),a(),i(5," property is used to bind the component to a form control."),a()(),l(6,"div",0)(7,"form",1),d(8,"p-selectButton",2),a()(),d(9,"app-code",3)),o&2&&(c(7),p("formGroup",n.formGroup),c(),p("options",n.stateOptions),c(),p("code",n.code))},dependencies:[u,f,g,G,v,V,_,R],encapsulation:2});let t=e;return t})();function le(t,e){if(t&1&&d(0,"i"),t&2){let ne=e.$implicit;N(ne.icon)}}var ee=(()=>{let e=class e{constructor(){this.justifyOptions=[{icon:"pi pi-align-left",justify:"Left"},{icon:"pi pi-align-right",justify:"Right"},{icon:"pi pi-align-center",justify:"Center"},{icon:"pi pi-align-justify",justify:"Justify"}],this.code={basic:`<p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">
    <ng-template let-item pTemplate>
        <i [class]="item.icon"></i>
    </ng-template>
</p-selectButton>`,html:`
<div class="card flex justify-content-center">
    <p-selectButton [options]="justifyOptions" [(ngModel)]="value" optionLabel="icon">
        <ng-template let-item pTemplate>
            <i [class]="item.icon"></i>
        </ng-template>
    </p-selectButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'select-button-template-demo',
    templateUrl: './select-button-template-demo.html'
})
export class SelectButtonTemplateDemo {
    value: any;

    justifyOptions: any[] = [
        { icon: 'pi pi-align-left', justify: 'Left' },
        { icon: 'pi pi-align-right', justify: 'Right' },
        { icon: 'pi pi-align-center', justify: 'Center' },
        { icon: 'pi pi-align-justify', justify: 'Justify' }
    ];

}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["template-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],["optionLabel","icon",3,"ngModelChange","options","ngModel"],["pTemplate",""],["selector","select-button-template-demo",3,"code"]],template:function(o,n){o&1&&(l(0,"app-docsectiontext")(1,"p"),i(2,"For custom content support define a ng-template with "),l(3,"i"),i(4,"pTemplate"),a(),i(5," where the local ng-template variable refers to an option in the options collection."),a()(),l(6,"div",0)(7,"p-selectButton",1),h("ngModelChange",function(s){return b(n.value,s)||(n.value=s),s}),L(8,le,1,2,"ng-template",2),a()(),d(9,"app-code",3)),o&2&&(c(7),p("options",n.justifyOptions),y("ngModel",n.value),c(2),p("code",n.code))},dependencies:[u,f,g,k,v,M],encapsulation:2});let t=e;return t})();var te=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[j,K,F,J,P,U,F]});let t=e;return t})();var ae=()=>["SelectButton"],oe=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:H},{id:"reactive-forms",label:"Reactive Forms",component:$},{id:"multiple",label:"Multiple",component:Z},{id:"template",label:"Template",component:ee},{id:"invalid",label:"Invalid",component:Y},{id:"disabled",label:"Disabled",component:Q},{id:"accessibility",label:"Accessibility",component:z}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular SelectButton Component","header","SelectButton","description","SelectButton is used to choose single or multiple items from a list using buttons.",3,"docs","apiDocs"]],template:function(o,n){o&1&&d(0,"app-doc",0),o&2&&p("docs",n.docs)("apiDocs",A(2,ae))},dependencies:[q],encapsulation:2});let t=e;return t})();var ie=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[E.forChild([{path:"",component:oe}]),E]});let t=e;return t})();var it=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[j,ie,te]});let t=e;return t})();export{it as SelectButtonDemoModule};
