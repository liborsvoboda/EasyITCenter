import{a as h,b as X}from"./chunk-QGLUNQP3.js";import{a as f,b as Z,c as O}from"./chunk-AS5FXEGH.js";import{a as u,b as Y}from"./chunk-X2ZDE2AM.js";import{e as v,f as W,g as _,h as U,i as b,j as V,m as K,n as q,p as H,q as J}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as Q,t as k}from"./chunk-N5X6XDRN.js";import{Ec as R,Jb as t,Kb as I,Nb as x,Nc as T,Ob as C,Pb as M,Sa as d,Sb as F,V as S,da as p,ea as B,ib as w,kb as l,ma as P,na as j,rb as i,sb as o,tb as c,xb as L,zb as G}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var $=(()=>{let e=class e{constructor(){this.code={basic:`<label for="rb1">One</label>
<p-radioButton inputId="rb1"></p-radioButton>

<span id="rb2">Two</span>
<p-radioButton ariaLabelledBy="rb2"></p-radioButton>

<p-radioButton ariaLabel="Three"></p-radioButton>`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:60,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(n,a){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),o(),i(4,"p"),t(5," RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via "),i(6,"i"),t(7,"label"),o(),t(8," tag combined with "),i(9,"i"),t(10,"inputId"),o(),t(11," prop or using "),i(12,"i"),t(13,"ariaLabelledBy"),o(),t(14,", "),i(15,"i"),t(16,"ariaLabel"),o(),t(17," props. "),o()(),c(18,"app-code",0),i(19,"h3"),t(20,"Keyboard Support"),o(),i(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),t(26,"Key"),o(),i(27,"th"),t(28,"Function"),o()()(),i(29,"tbody")(30,"tr")(31,"td")(32,"i"),t(33,"tab"),o()(),i(34,"td"),t(35,"Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus."),o()(),i(36,"tr")(37,"td")(38,"span",3)(39,"i",4),t(40,"left arrow"),o(),i(41,"i"),t(42,"up arrow"),o()()(),i(43,"td"),t(44,"Moves focus to the previous radio button, if there is none then last radio button receives the focus."),o()(),i(45,"tr")(46,"td")(47,"span",3)(48,"i",4),t(49,"right arrow"),o(),i(50,"i"),t(51,"down arrow"),o()()(),i(52,"td"),t(53,"Moves focus to the next radio button, if there is none then first radio button receives the focus."),o()(),i(54,"tr")(55,"td")(56,"i"),t(57,"space"),o()(),i(58,"td"),t(59,"If the focused radio button is unchecked, changes the state to checked."),o()()()()()()),n&2&&(d(18),l("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<p-radioButton [disabled]="true"></p-radioButton>',html:`
<div class="card flex justify-content-center">
    <p-radioButton [disabled]="true"></p-radioButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'radio-button-disabled-demo',
    templateUrl: './radio-button-disabled-demo.html'
})
export class RadioButtonDisabledDemo { }`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"disabled","ngModel"],["selector","radio-button-disabled-demo",3,"code"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"disabled"),o(),t(5," is present, the element cannot be edited and focused."),o()(),i(6,"div",0),c(7,"p-radioButton",1),o(),c(8,"app-code",2)),n&2&&(d(7),l("disabled",!0)("ngModel",a.checked),d(),l("code",a.code))},dependencies:[u,f,h,v,b],encapsulation:2});let r=e;return r})();function pe(r,e){if(r&1){let g=L();i(0,"div",4)(1,"p-radioButton",5),M("ngModelChange",function(n){P(g);let a=G();return C(a.selectedCategory,n)||(a.selectedCategory=n),j(n)}),o(),i(2,"label",6),t(3),o()()}if(r&2){let g=e.$implicit,m=G();d(),l("inputId",g.key)("value",g),x("ngModel",m.selectedCategory),d(),l("for",g.key),d(),I(g.name)}}var te=(()=>{let e=class e{constructor(){this.selectedCategory=null,this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],this.code={basic:`<div class="flex flex-column gap-3">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radioButton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory"></p-radioButton>
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</div>`,html:`
<div class="card flex justify-content-center">
    <div class="flex flex-column gap-3">
        <div *ngFor="let category of categories" class="field-checkbox">
            <p-radioButton [inputId]="category.key" name="category" [value]="category" [(ngModel)]="selectedCategory"></p-radioButton>
            <label [for]="category.key" class="ml-2">{{ category.name }}</label>
        </div>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'radio-button-dynamic-demo',
    templateUrl: './radio-button-dynamic-demo.html'
})
export class RadioButtonDynamicDemo implements OnInit{
    selectedCategory: any = null;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.selectedCategory = this.categories[1];
    }
}`}}ngOnInit(){this.selectedCategory=this.categories[1]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["dynamic-doc"]],decls:7,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","gap-3"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","radio-button-dynamic-demo",3,"code"],[1,"field-checkbox"],["name","category",3,"ngModelChange","inputId","value","ngModel"],[1,"ml-2",3,"for"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"RadioButtons can be generated using a list of values."),o()(),i(3,"div",0)(4,"div",1),w(5,pe,4,5,"div",2),o()(),c(6,"app-code",3)),n&2&&(d(5),l("ngForOf",a.categories),d(),l("code",a.code))},dependencies:[R,u,f,h,v,b],encapsulation:2});let r=e;return r})();var ie=(()=>{let e=class e{constructor(){this.code={basic:`<div class="flex flex-wrap gap-3">
    <div class="flex align-items-center">
        <p-radioButton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1"></p-radioButton>
        <label for="ingredient1" class="ml-2">Cheese</label>
    </div>
    
    <div class="flex align-items-center">
        <p-radioButton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2"></p-radioButton>
        <label for="ingredient2" class="ml-2">Mushroom</label>
    </div>
    
    <div class="flex align-items-center">
        <p-radioButton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3"></p-radioButton>
        <label for="ingredient3" class="ml-2">Pepper</label>
    </div>

    <div class="flex align-items-center">
        <p-radioButton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4"></p-radioButton>
        <label for="ingredient4" class="ml-2">Onion</label>
    </div>
</div>`,html:`
<div class="card flex justify-content-center">
    <div class="flex flex-wrap gap-3">
        <div class="flex align-items-center">
            <p-radioButton name="pizza" value="Cheese" [(ngModel)]="ingredient" inputId="ingredient1"></p-radioButton>
            <label for="ingredient1" class="ml-2">Cheese</label>
        </div>
        
        <div class="flex align-items-center">
            <p-radioButton name="pizza" value="Mushroom" [(ngModel)]="ingredient" inputId="ingredient2"></p-radioButton>
            <label for="ingredient2" class="ml-2">Mushroom</label>
        </div>
        
        <div class="flex align-items-center">
            <p-radioButton name="pizza" value="Pepper" [(ngModel)]="ingredient" inputId="ingredient3"></p-radioButton>
            <label for="ingredient3" class="ml-2">Pepper</label>
        </div>
        
        <div class="flex align-items-center">
            <p-radioButton name="pizza" value="Onion" [(ngModel)]="ingredient" inputId="ingredient4"></p-radioButton>
            <label for="ingredient4" class="ml-2">Onion</label>
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'radio-button-group-demo',
    templateUrl: './radio-button-group-demo.html'
})
export class RadioButtonGroupDemo {
    ingredient!: string;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["group-doc"]],decls:28,vars:5,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-wrap","gap-3"],[1,"flex","align-items-center"],["name","pizza","value","Cheese","inputId","ingredient1",3,"ngModelChange","ngModel"],["for","ingredient1",1,"ml-2"],["name","pizza","value","Mushroom","inputId","ingredient2",3,"ngModelChange","ngModel"],["for","ingredient2",1,"ml-2"],["name","pizza","value","Pepper","inputId","ingredient3",3,"ngModelChange","ngModel"],["for","ingredient3",1,"ml-2"],["name","pizza","value","Onion","inputId","ingredient4",3,"ngModelChange","ngModel"],["for","ingredient4",1,"ml-2"],["selector","radio-button-group-demo",3,"code"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"RadioButton is used as a controlled input with "),i(3,"i"),t(4,"value"),o(),t(5," and "),i(6,"i"),t(7,"ngModel"),o(),t(8," properties."),o()(),i(9,"div",0)(10,"div",1)(11,"div",2)(12,"p-radioButton",3),M("ngModelChange",function(s){return C(a.ingredient,s)||(a.ingredient=s),s}),o(),i(13,"label",4),t(14,"Cheese"),o()(),i(15,"div",2)(16,"p-radioButton",5),M("ngModelChange",function(s){return C(a.ingredient,s)||(a.ingredient=s),s}),o(),i(17,"label",6),t(18,"Mushroom"),o()(),i(19,"div",2)(20,"p-radioButton",7),M("ngModelChange",function(s){return C(a.ingredient,s)||(a.ingredient=s),s}),o(),i(21,"label",8),t(22,"Pepper"),o()(),i(23,"div",2)(24,"p-radioButton",9),M("ngModelChange",function(s){return C(a.ingredient,s)||(a.ingredient=s),s}),o(),i(25,"label",10),t(26,"Onion"),o()()()(),c(27,"app-code",11)),n&2&&(d(12),x("ngModel",a.ingredient),d(4),x("ngModel",a.ingredient),d(4),x("ngModel",a.ingredient),d(4),x("ngModel",a.ingredient),d(3),l("code",a.code))},dependencies:[u,f,h,v,b],encapsulation:2});let r=e;return r})();var oe=(()=>{let e=class e{constructor(){this.code={typescript:"import { RadioButtonModule } from 'primeng/radiobutton';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,a){n&1&&c(0,"app-code",0),n&2&&l("code",a.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let r=e;return r})();var ne=(()=>{let e=class e{constructor(){this.code={basic:'<p-radioButton class="ng-invalid ng-dirty"></p-radioButton>',html:`
<div class="card flex justify-content-center">
    <p-radioButton class="ng-invalid ng-dirty"></p-radioButton>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'radio-button-invalid-demo',
    templateUrl: './radio-button-invalid-demo.html'
})
export class RadioButtonInvalidDemo { }`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"ng-invalid","ng-dirty",3,"ngModel"],["selector","radio-button-invalid-demo",3,"code"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Invalid state style is added using the "),i(3,"i"),t(4,"ng-invalid"),o(),t(5," and "),i(6,"i"),t(7,"ng-dirty"),o(),t(8," class to indicate a failed validation."),o()(),i(9,"div",0),c(10,"p-radioButton",1),o(),c(11,"app-code",2)),n&2&&(d(10),l("ngModel",a.checked),d(),l("code",a.code))},dependencies:[u,f,h,v,b],encapsulation:2});let r=e;return r})();function se(r,e){if(r&1&&(i(0,"div",4),c(1,"p-radioButton",5),i(2,"label",6),t(3),o()()),r&2){let g=e.$implicit;d(),l("inputId",g.key)("value",g),d(),l("for",g.key),d(),I(g.name)}}var re=(()=>{let e=class e{constructor(){this.categories=[{name:"Accounting",key:"A"},{name:"Marketing",key:"M"},{name:"Production",key:"P"},{name:"Research",key:"R"}],this.code={basic:`<form class="flex flex-column gap-3" [formGroup]="formGroup">
    <div *ngFor="let category of categories" class="field-checkbox">
        <p-radioButton [inputId]="category.key" [value]="category" formControlName="selectedCategory"></p-radioButton>
        <label [for]="category.key" class="ml-2">{{ category.name }}</label>
    </div>
</form>`,html:`
<div class="card flex justify-content-center">
    <form class="flex flex-column gap-3" [formGroup]="formGroup">
        <div *ngFor="let category of categories" class="field-checkbox">
            <p-radioButton [inputId]="category.key" [value]="category" formControlName="selectedCategory"></p-radioButton>
            <label [for]="category.key" class="ml-2">{{ category.name }}</label>
        </div>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'radio-button-reactive-forms-demo',
    templateUrl: './radio-button-reactive-forms-demo.html'
})
export class RadioButtonReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    categories: any[] = [
        { name: 'Accounting', key: 'A' },
        { name: 'Marketing', key: 'M' },
        { name: 'Production', key: 'P' },
        { name: 'Research', key: 'R' }
    ];

    ngOnInit() {
        this.formGroup = new FormGroup({
            selectedCategory: new FormControl()
        });
    }
}`}}ngOnInit(){this.formGroup=new _({selectedCategory:new U})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","gap-3",3,"formGroup"],["class","field-checkbox",4,"ngFor","ngForOf"],["selector","radio-button-reactive-forms-demo",3,"code"],[1,"field-checkbox"],["formControlName","selectedCategory",3,"inputId","value"],[1,"ml-2",3,"for"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"RadioButton can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),o(),t(5," property is used to bind the component to a form control."),o()(),i(6,"div",0)(7,"form",1),w(8,se,4,4,"div",2),o()(),c(9,"app-code",3)),n&2&&(d(7),l("formGroup",a.formGroup),d(),l("ngForOf",a.categories),d(),l("code",a.code))},dependencies:[R,u,f,h,V,v,W,K,q],encapsulation:2});let r=e;return r})();var ue=()=>["/theming"],ae=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["style-doc"]],decls:50,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,a){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),t(4,"theming"),o(),t(5," page."),o()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),o(),i(12,"th"),t(13,"Element"),o()()(),i(14,"tbody")(15,"tr")(16,"td"),t(17,"p-radiobutton"),o(),i(18,"td"),t(19,"Container element"),o()(),i(20,"tr")(21,"td"),t(22,"p-radiobutton-box"),o(),i(23,"td"),t(24,"Container of icon."),o()(),i(25,"tr")(26,"td"),t(27,"p-radiobutton-icon"),o(),i(28,"td"),t(29,"Icon element."),o()(),i(30,"tr")(31,"td"),t(32,"p-checkbox-label"),o(),i(33,"td"),t(34,"Label element."),o()(),i(35,"tr")(36,"td"),t(37,"p-label-active"),o(),i(38,"td"),t(39,"Label element of a checked state."),o()(),i(40,"tr")(41,"td"),t(42,"p-label-focus"),o(),i(43,"td"),t(44,"Label element of a focused state."),o()(),i(45,"tr")(46,"td"),t(47,"p-label-disabled"),o(),i(48,"td"),t(49,"Label element of a disabled state."),o()()()()()),n&2&&(d(3),l("routerLink",F(1,ue)))},dependencies:[f,Q],encapsulation:2});let r=e;return r})();var de=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[T,Y,O,X,H,J,k,O]});let r=e;return r})();var fe=()=>["RadioButton"],le=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:oe},{id:"group",label:"Group",component:ie},{id:"dynamic",label:"Dynamic",component:te},{id:"reactive-forms",label:"Reactive Forms",component:re},{id:"invalid",label:"Invalid",component:ne},{id:"disabled",label:"Disabled",component:ee},{id:"style",label:"Style",component:ae},{id:"accessibility",label:"Accessibility",component:$}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular RadioButton Component","header","RadioButton","description","RadioButton is an extension to standard radio button element with theming.",3,"docs","apiDocs"]],template:function(n,a){n&1&&c(0,"app-doc",0),n&2&&l("docs",a.docs)("apiDocs",F(2,fe))},dependencies:[Z],encapsulation:2});let r=e;return r})();var me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[k.forChild([{path:"",component:le}]),k]});let r=e;return r})();var st=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=B({type:e}),e.\u0275inj=S({imports:[T,me,de]});let r=e;return r})();export{st as RadioButtonDemoModule};
