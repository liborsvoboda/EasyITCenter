import{a as y,b as W}from"./chunk-C5QF4TVV.js";import"./chunk-Z2ZAEWPQ.js";import{a as f,b as Q,c as N}from"./chunk-AS5FXEGH.js";import{a as h,b as J}from"./chunk-X2ZDE2AM.js";import{e as x,f as G,g as R,h as O,i as v,j as U,m as Y,n as K,p as q,q as H}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as T}from"./chunk-N5X6XDRN.js";import{Ec as j,Jb as i,Nb as u,Nc as _,Ob as b,Pb as g,Sa as l,Sb as P,V as D,da as d,ea as z,ib as V,kb as m,ma as I,na as L,rb as t,sb as o,tb as s,xb as B,zb as A}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var X=(()=>{let e=class e{constructor(){this.code={typescript:"import { CheckboxModule } from 'primeng/checkbox';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&s(0,"app-code",0),n&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let c=e;return c})();var Z=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>',html:`
<div class="card flex justify-content-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary"></p-checkbox>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-basic-demo',
    templateUrl: './checkbox-basic-demo.html'
})
export class CheckboxBasicDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-basic-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["inputId","binary",3,"ngModelChange","ngModel","binary"],["selector","checkbox-basic-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Binary checkbox is used as a controlled input with "),t(3,"i"),i(4,"ngModel"),o(),i(5," and "),t(6,"i"),i(7,"binary"),o(),i(8," properties."),o()(),t(9,"div",0)(10,"p-checkbox",1),g("ngModelChange",function(r){return b(a.checked,r)||(a.checked=r),r}),o()(),s(11,"app-code",2)),n&2&&(l(10),u("ngModel",a.checked),m("binary",!0),l(),m("code",a.code))},dependencies:[x,v,h,f,y],encapsulation:2});let c=e;return c})();var $=(()=>{let e=class e{constructor(){this.pizza=[],this.code={basic:`<div class="flex align-items-center">
        <p-checkbox label="Cheese" name="pizza" value="Cheese" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Mushroom" name="pizza" value="Mushroom" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Pepper" name="pizza" value="Pepper" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Onion" name="pizza" value="Onion" [(ngModel)]="pizza"></p-checkbox>
</div>`,html:`<div class="card flex justify-content-center gap-3">
     <div class="flex align-items-center">
        <p-checkbox label="Cheese" name="pizza" value="Cheese" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Mushroom" name="pizza" value="Mushroom" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Pepper" name="pizza" value="Pepper" [(ngModel)]="pizza"></p-checkbox>
    </div>
    <div class="flex align-items-center">
        <p-checkbox label="Onion" name="pizza" value="Onion" [(ngModel)]="pizza"></p-checkbox>
</div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-multiple-demo',
    templateUrl: './checkbox-multiple-demo.html'
})
export class CheckboxMultipleDemo {
    pizza: string[] = [];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-multiple-demo"]],decls:13,vars:5,consts:[[1,"card","flex","flex-wrap","justify-content-center","gap-3"],[1,"flex","align-items-center"],["label","Cheese","name","pizza","value","Cheese",3,"ngModelChange","ngModel"],["label","Mushroom","name","pizza","value","Mushroom",3,"ngModelChange","ngModel"],["label","Pepper","name","pizza","value","Pepper",3,"ngModelChange","ngModel"],["label","Onion","name","pizza","value","Onion",3,"ngModelChange","ngModel"],["selector","checkbox-multiple-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Multiple checkboxes can be grouped together."),o()(),t(3,"div",0)(4,"div",1)(5,"p-checkbox",2),g("ngModelChange",function(r){return b(a.pizza,r)||(a.pizza=r),r}),o()(),t(6,"div",1)(7,"p-checkbox",3),g("ngModelChange",function(r){return b(a.pizza,r)||(a.pizza=r),r}),o()(),t(8,"div",1)(9,"p-checkbox",4),g("ngModelChange",function(r){return b(a.pizza,r)||(a.pizza=r),r}),o()(),t(10,"div",1)(11,"p-checkbox",5),g("ngModelChange",function(r){return b(a.pizza,r)||(a.pizza=r),r}),o()()(),s(12,"app-code",6)),n&2&&(l(5),u("ngModel",a.pizza),l(2),u("ngModel",a.pizza),l(2),u("ngModel",a.pizza),l(2),u("ngModel",a.pizza),l(),m("code",a.code))},dependencies:[x,v,h,f,y],encapsulation:2});let c=e;return c})();var ee=(()=>{let e=class e{constructor(){this.selectedValues=[],this.code={basic:`<p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>
<p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>`,html:`
<div class="card flex justify-content-center gap-3">
    <p-checkbox name="groupname" value="val1" label="Value 1" [(ngModel)]="selectedValues"></p-checkbox>
    <p-checkbox name="groupname" value="val2" label="Value 2" [(ngModel)]="selectedValues"></p-checkbox>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-label-demo',
    templateUrl: './checkbox-label-demo.html'
})
export class CheckboxLabelDemo {
    selectedValues: string[] = [];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-label-demo"]],decls:7,vars:3,consts:[[1,"card","flex","justify-content-center","gap-3"],["name","groupname","value","val1","label","Value 1",3,"ngModelChange","ngModel"],["name","groupname","value","val2","label","Value 2",3,"ngModelChange","ngModel"],["selector","checkbox-label-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state."),o()(),t(3,"div",0)(4,"p-checkbox",1),g("ngModelChange",function(r){return b(a.selectedValues,r)||(a.selectedValues=r),r}),o(),t(5,"p-checkbox",2),g("ngModelChange",function(r){return b(a.selectedValues,r)||(a.selectedValues=r),r}),o()(),s(6,"app-code",3)),n&2&&(l(4),u("ngModel",a.selectedValues),l(),u("ngModel",a.selectedValues),l(),m("code",a.code))},dependencies:[x,v,h,f,y],encapsulation:2});let c=e;return c})();function me(c,e){if(c&1){let F=B();t(0,"div",4)(1,"p-checkbox",5),g("ngModelChange",function(n){I(F);let a=A();return b(a.selectedCategories,n)||(a.selectedCategories=n),L(n)}),o()()}if(c&2){let F=e.$implicit,p=A();l(),m("label",F.name)("value",F),u("ngModel",p.selectedCategories)}}var te=(()=>{let e=class e{constructor(){this.selectedCategories=[],this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],this.code={basic:`<div *ngFor="let category of categories" class="field-checkbox">
    <p-checkbox [label]="category.name" name="group" [value]="category" [(ngModel)]="selectedCategories"></p-checkbox>
</div>`,html:`
<div class="card flex justify-content-center">
    <div class="flex flex-column gap-2">
        <div *ngFor="let category of categories" class="field-checkbox">
        <p-checkbox [label]="category.name" name="group" [value]="category" [(ngModel)]="selectedCategories"></p-checkbox>
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-dynamic-demo',
    templateUrl: './checkbox-dynamic-demo.html'
})
export class CheckboxDynamicDemo {
    selectedCategories: any[] = [];

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-dynamic-demo"]],decls:7,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","gap-2"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","checkbox-dynamic-demo",3,"code"],[1,"field-checkbox"],["name","group",3,"ngModelChange","label","value","ngModel"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Checkboxes can be generated using a list of values."),o()(),t(3,"div",0)(4,"div",1),V(5,me,2,3,"div",2),o()(),s(6,"app-code",3)),n&2&&(l(5),m("ngForOf",a.categories),l(),m("code",a.code))},dependencies:[j,x,v,h,f,y],encapsulation:2});let c=e;return c})();var oe=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-checkbox [disabled]="true" [(ngModel)]="checked"></p-checkbox>',html:`
<div class="card flex justify-content-center">
    <p-checkbox [disabled]="true" [(ngModel)]="checked"></p-checkbox>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-disabled-demo',
    templateUrl: './checkbox-disabled-demo.html'
})
export class CheckboxDisabledDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-disabled-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","disabled","ngModel"],["selector","checkbox-disabled-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"When "),t(3,"i"),i(4,"disabled"),o(),i(5," is present, the element cannot be edited and focused."),o()(),t(6,"div",0)(7,"p-checkbox",1),g("ngModelChange",function(r){return b(a.checked,r)||(a.checked=r),r}),o()(),s(8,"app-code",2)),n&2&&(l(7),m("disabled",!0),u("ngModel",a.checked),l(),m("code",a.code))},dependencies:[x,v,h,f,y],encapsulation:2});let c=e;return c})();var ie=(()=>{let e=class e{constructor(){this.checked=!1,this.code={basic:'<p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary" class="ng-invalid ng-dirty"></p-checkbox>',html:`
<div class="card flex justify-content-center">
    <p-checkbox [(ngModel)]="checked" [binary]="true" inputId="binary" class="ng-invalid ng-dirty"></p-checkbox>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'checkbox-invalid-demo',
    templateUrl: './checkbox-invalid-demo.html'
})
export class CheckboxInvalidDemo {
    checked: boolean = false;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["checkbox-invalid-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["inputId","binary",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel","binary"],["selector","checkbox-invalid-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Invalid state style is added using the "),t(3,"i"),i(4,"ng-invalid"),o(),i(5," and "),t(6,"i"),i(7,"ng-dirty"),o(),i(8," class to indicate a failed validation."),o()(),t(9,"div",0)(10,"p-checkbox",1),g("ngModelChange",function(r){return b(a.checked,r)||(a.checked=r),r}),o()(),s(11,"app-code",2)),n&2&&(l(10),u("ngModel",a.checked),m("binary",!0),l(),m("code",a.code))},dependencies:[x,v,h,f,y],encapsulation:2});let c=e;return c})();var ne=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:49,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"i"),i(4,"theming page."),o()()(),t(5,"div",0)(6,"table",1)(7,"thead")(8,"tr")(9,"th"),i(10,"Name"),o(),t(11,"th"),i(12,"Element"),o()()(),t(13,"tbody")(14,"tr")(15,"td"),i(16,"p-checkbox"),o(),t(17,"td"),i(18,"Container element"),o()(),t(19,"tr")(20,"td"),i(21,"p-checkbox-box"),o(),t(22,"td"),i(23,"Container of icon."),o()(),t(24,"tr")(25,"td"),i(26,"p-checkbox-icon"),o(),t(27,"td"),i(28,"Icon element."),o()(),t(29,"tr")(30,"td"),i(31,"p-checkbox-label"),o(),t(32,"td"),i(33,"Label element."),o()(),t(34,"tr")(35,"td"),i(36,"p-label-active"),o(),t(37,"td"),i(38,"Label element of a checked state."),o()(),t(39,"tr")(40,"td"),i(41,"p-label-focus"),o(),t(42,"td"),i(43,"Label element of a focused state."),o()(),t(44,"tr")(45,"td"),i(46,"p-label-disabled"),o(),t(47,"td"),i(48,"Label element of a disabled state."),o()()()()())},dependencies:[f],encapsulation:2});let c=e;return c})();var ce=(()=>{let e=class e{constructor(){this.code={basic:`<label for="chkbox1">Remember Me</label>
<p-checkbox inputId="chkbox1"></p-checkbox>

<span id="chkbox2">Remember Me</span>
<p-checkbox ariaLabelledBy="chkbox2"></p-checkbox>

<p-checkbox ariaLabel="Remember Me"></p-checkbox>`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:42,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),o(),t(4,"p"),i(5," Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via "),t(6,"i"),i(7,"label"),o(),i(8," tag combined with "),t(9,"i"),i(10,"inputId"),o(),i(11," prop or using "),t(12,"i"),i(13,"ariaLabelledBy"),o(),i(14,", "),t(15,"i"),i(16,"ariaLabel"),o(),i(17," props. "),o()(),s(18,"app-code",0),t(19,"h3"),i(20,"Keyboard Support"),o(),t(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),i(26,"Key"),o(),t(27,"th"),i(28,"Function"),o()()(),t(29,"tbody")(30,"tr")(31,"td")(32,"i"),i(33,"tab"),o()(),t(34,"td"),i(35,"Moves focus to the checkbox."),o()(),t(36,"tr")(37,"td")(38,"i"),i(39,"space"),o()(),t(40,"td"),i(41,"Toggles the checked state."),o()()()()()()),n&2&&(l(18),m("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[h,f],encapsulation:2});let c=e;return c})();var ae=(()=>{let e=class e{constructor(){this.code={basic:`<form class="flex align-items-center gap-1" [formGroup]="formGroup">
    <p-checkbox formControlName="city" value="New York" inputId="ny"></p-checkbox>
    <label for="ny">New York</label>
</form>`,html:`
<div class="card">
    <form class="flex align-items-center gap-1" [formGroup]="formGroup">
        <p-checkbox formControlName="city" value="New York" inputId="ny"></p-checkbox>
        <label for="ny">New York</label>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox-reactive-forms-demo',
    templateUrl: './checkbox-reactive-forms-demo.html'
})
export class CheckboxReactiveFormsDemo implements OnInit{
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            city: new FormControl<string | null>(null)
        });
    }
}`}}ngOnInit(){this.formGroup=new R({city:new O(null)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:12,vars:2,consts:[[1,"card"],[1,"flex","align-items-center","justify-content-center","gap-1",3,"formGroup"],["formControlName","city","value","New York","inputId","ny"],["for","ny"],["selector","checkbox-reactive-forms-demo",3,"code"]],template:function(n,a){n&1&&(t(0,"app-docsectiontext")(1,"p"),i(2,"Checkbox can also be used with reactive forms. In this case, the "),t(3,"i"),i(4,"formControlName"),o(),i(5," property is used to bind the component to a form control."),o()(),t(6,"div",0)(7,"form",1),s(8,"p-checkbox",2),t(9,"label",3),i(10,"New York"),o()()(),s(11,"app-code",4)),n&2&&(l(7),m("formGroup",a.formGroup),l(4),m("code",a.code))},dependencies:[U,x,G,h,f,y,Y,K],encapsulation:2});let c=e;return c})();var re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=D({imports:[_,T,q,J,N,W,H]});let c=e;return c})();var de=()=>["Checkbox"],le=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:X},{id:"basic",label:"Basic",component:Z},{id:"reactive-forms",label:"Reactive Forms",component:ae},{id:"group",label:"Group",component:$},{id:"label",label:"Label",component:ee},{id:"dynamic",label:"Dynamic",component:te},{id:"invalid",label:"Invalid",component:ie},{id:"disabled",label:"Disabled",component:oe},{id:"style",label:"Style",component:ne},{id:"accessibility",label:"Accessibility",component:ce}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Checkbox Component","header","Checkbox","description","Checkbox is an extension to standard checkbox element with theming.",3,"docs","apiDocs"]],template:function(n,a){n&1&&s(0,"app-doc",0),n&2&&m("docs",a.docs)("apiDocs",P(2,de))},dependencies:[Q],encapsulation:2});let c=e;return c})();var pe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=D({imports:[T.forChild([{path:"",component:le}]),T]});let c=e;return c})();var yt=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=z({type:e}),e.\u0275inj=D({imports:[_,pe,W,N,re]});let c=e;return c})();export{yt as CheckboxDemoModule};
