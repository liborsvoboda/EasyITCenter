import{a as h,b as q}from"./chunk-2LMLW6BF.js";import{a as f,b as V,c as W}from"./chunk-AS5FXEGH.js";import{a as g,b as z}from"./chunk-X2ZDE2AM.js";import{e as u,f as G,g as _,h as I,i as S,j as O,m as B,n as L,p as P,q as U}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as k}from"./chunk-UWMVDULA.js";import{o as K,t as F}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as y,Nc as A,Ob as x,Pb as C,Sa as c,Sb as R,V as D,da as s,ea as w,ib as j,kb as m,rb as o,sb as n,tb as d}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var H=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-rating formControlName="value"></p-rating>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-rating formControlName="value"></p-rating>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'rating-reactive-forms-demo',
    templateUrl: './rating-reactive-forms-demo.html'
})
export class RatingReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(4)
        });
    }
}`}}ngOnInit(){this.formGroup=new _({value:new I(4)})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value"],["selector","rating-reactive-forms-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Rating can also be used with reactive forms. In this case, the "),o(3,"i"),t(4,"formControlName"),n(),t(5," property is used to bind the component to a form control."),n()(),o(6,"div",0)(7,"form",1),d(8,"p-rating",2),n()(),d(9,"app-code",3)),r&2&&(c(7),m("formGroup",a.formGroup),c(2),m("code",a.code))},dependencies:[g,f,h,O,u,G,B,L],encapsulation:2});let i=e;return i})();var J=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["accessibility-doc"]],decls:61,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(r,a){r&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),n(),o(4,"p"),t(5," Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the "),o(6,"a",0),t(7,"locale"),n(),t(8," API via "),o(9,"i"),t(10,"star"),n(),t(11," and "),o(12,"i"),t(13,"stars"),n(),t(14," of the "),o(15,"i"),t(16,"aria"),n(),t(17," property. "),n()(),o(18,"h3"),t(19,"Keyboard Support"),n(),o(20,"p"),t(21,"Keyboard interaction is derived from the native browser handling of radio buttons in a group."),n(),o(22,"div",1)(23,"table",2)(24,"thead")(25,"tr")(26,"th"),t(27,"Key"),n(),o(28,"th"),t(29,"Function"),n()()(),o(30,"tbody")(31,"tr")(32,"td")(33,"i"),t(34,"tab"),n()(),o(35,"td"),t(36,"Moves focus to the star representing the value, if there is none then first star receives the focus."),n()(),o(37,"tr")(38,"td")(39,"span",3)(40,"i",4),t(41,"left arrow"),n(),o(42,"i"),t(43,"up arrow"),n()()(),o(44,"td"),t(45,"Moves focus to the previous star, if there is none then last radio button receives the focus."),n()(),o(46,"tr")(47,"td")(48,"span",3)(49,"i",4),t(50,"right arrow"),n(),o(51,"i"),t(52,"down arrow"),n()()(),o(53,"td"),t(54,"Moves focus to the next star, if there is none then first star receives the focus."),n()(),o(55,"tr")(56,"td")(57,"i"),t(58,"space"),n()(),o(59,"td"),t(60,"If the focused star does not represent the value, changes the value to the star value."),n()()()()()())},dependencies:[f],encapsulation:2});let i=e;return i})();var Q=(()=>{let e=class e{constructor(){this.code={basic:'<p-rating [(ngModel)]="value"></p-rating>',html:`
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value"></p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-basic-demo',
    templateUrl: './rating-basic-demo.html'
})
export class RatingBasicDemo {
    value!: number;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","rating-basic-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Two-way value binding is defined using "),o(3,"i"),t(4,"ngModel"),n(),t(5,"."),n()(),o(6,"div",0)(7,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),n()(),d(8,"app-code",2)),r&2&&(c(7),y("ngModel",a.value),c(),m("code",a.code))},dependencies:[g,f,h,u,S],encapsulation:2});let i=e;return i})();var X=(()=>{let e=class e{constructor(){this.value=5,this.code={basic:'<p-rating [(ngModel)]="value" [disabled]="true"></p-rating>',html:`
<div class="card flex justify-content-center">
<p-rating [(ngModel)]="value" [disabled]="true"></p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-disabled-demo',
    templateUrl: './rating-disabled-demo.html'
})
export class RatingDisabledDemo {
    value: number = 5;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","rating-disabled-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"disabled"),n(),t(5," is present, a visual hint is applied to indicate that the Knob cannot be interacted with."),n()(),o(6,"div",0)(7,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),n()(),d(8,"app-code",2)),r&2&&(c(7),y("ngModel",a.value),m("disabled",!0),c(),m("code",a.code))},dependencies:[g,f,h,u,S],encapsulation:2});let i=e;return i})();var Y=(()=>{let e=class e{constructor(){this.code={typescript:"import { RatingModule } from 'primeng/rating';"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,a){r&1&&d(0,"app-code",0),r&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let i=e;return i})();var Z=(()=>{let e=class e{constructor(){this.code={basic:'<p-rating [(ngModel)]="value" [stars]="10"></p-rating>',html:`
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [stars]="10"></p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-number-of-stars-demo',
    templateUrl: './rating-number-of-stars-demo.html'
})
export class RatingNumberOfStarsDemo {
    value!: number;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["number-of-stars-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","stars"],["selector","rating-number-of-stars-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Number of stars to display is defined with "),o(3,"i"),t(4,"stars"),n(),t(5," property."),n()(),o(6,"div",0)(7,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),n()(),d(8,"app-code",2)),r&2&&(c(7),y("ngModel",a.value),m("stars",10),c(),m("code",a.code))},dependencies:[g,f,h,u,S],encapsulation:2});let i=e;return i})();var $=(()=>{let e=class e{constructor(){this.value=5,this.code={basic:'<p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false"></p-rating>',html:`
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [readonly]="true" [cancel]="false"></p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-readonly-demo',
    templateUrl: './rating-readonly-demo.html'
})
export class RatingReadonlyDemo {
    value: number = 5;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["readonly-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","readonly","cancel"],["selector","rating-readonly-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"When "),o(3,"i"),t(4,"readOnly"),n(),t(5," present, value cannot be edited."),n()(),o(6,"div",0)(7,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),n()(),d(8,"app-code",2)),r&2&&(c(7),y("ngModel",a.value),m("readonly",!0)("cancel",!1),c(),m("code",a.code))},dependencies:[g,f,h,u,S],encapsulation:2});let i=e;return i})();var ae=()=>["/theming"],ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["style-doc"]],decls:35,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),t(4,"theming"),n(),t(5," page."),n()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),n(),o(12,"th"),t(13,"Element"),n()()(),o(14,"tbody")(15,"tr")(16,"td"),t(17,"p-rating"),n(),o(18,"td"),t(19,"Container element"),n()(),o(20,"tr")(21,"td"),t(22,"p-rating-star"),n(),o(23,"td"),t(24,"Star element"),n()(),o(25,"tr")(26,"td"),t(27,"p-rating-star-on"),n(),o(28,"td"),t(29,"Selected star element."),n()(),o(30,"tr")(31,"td"),t(32,"p-rating-cancel"),n(),o(33,"td"),t(34,"Cancel icon."),n()()()()()),r&2&&(c(3),m("routerLink",R(1,ae)))},dependencies:[f,K],encapsulation:2});let i=e;return i})();function me(i,e){i&1&&d(0,"img",6)}function pe(i,e){i&1&&d(0,"img",7)}function le(i,e){i&1&&d(0,"img",8)}var te=(()=>{let e=class e{constructor(){this.code={basic:`<p-rating [(ngModel)]="value" stars="5">
        <ng-template pTemplate="cancelicon">
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png" width="25px" height="25px" />
        </ng-template>
        <ng-template pTemplate="onicon">
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
        </ng-template>
        <ng-template pTemplate="officon">
            <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" width="25px" height="25px" />
        </ng-template>
</p-rating>`,html:`
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" stars="5">
    <ng-template pTemplate="cancelicon">
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png" width="25px" height="25px" />
    </ng-template>
    <ng-template pTemplate="onicon">
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
    </ng-template>
    <ng-template pTemplate="officon">
        <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" width="25px" height="25px" />
    </ng-template>
    </p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-template-demo',
    templateUrl: './rating-template-demo.html'
})
export class RatingTemplateDemo {
    value!: number;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["template-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["stars","5",3,"ngModelChange","ngModel"],["pTemplate","cancelicon"],["pTemplate","onicon"],["pTemplate","officon"],["selector","rating-template-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/cancel.png","width","25px","height","25px"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png","width","25px","height","25px"],["src","https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png","width","25px","height","25px"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"Templating allows customizing the content where the icon instance is available as the implicit variable."),n()(),o(3,"div",0)(4,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),j(5,me,1,0,"ng-template",2)(6,pe,1,0,"ng-template",3)(7,le,1,0,"ng-template",4),n()(),d(8,"app-code",5)),r&2&&(c(4),y("ngModel",a.value),c(4),m("code",a.code))},dependencies:[g,f,h,k,u,S],encapsulation:2});let i=e;return i})();var ie=(()=>{let e=class e{constructor(){this.code={basic:'<p-rating [(ngModel)]="value" [cancel]="false"></p-rating>',html:`
<div class="card flex justify-content-center">
    <p-rating [(ngModel)]="value" [cancel]="false"></p-rating>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'rating-without-cancel-demo',
    templateUrl: './rating-without-cancel-demo.html'
})
export class RatingWithoutCancelDemo {
    value!: number;
}`}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["without-cancel-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","cancel"],["selector","rating-without-cancel-demo",3,"code"]],template:function(r,a){r&1&&(o(0,"app-docsectiontext")(1,"p"),t(2,"A cancel icon is displayed to reset the value by default, set "),o(3,"i"),t(4,"cancel"),n(),t(5," as false to remove this option."),n()(),o(6,"div",0)(7,"p-rating",1),C("ngModelChange",function(l){return x(a.value,l)||(a.value=l),l}),n()(),d(8,"app-code",2)),r&2&&(c(7),y("ngModel",a.value),m("cancel",!1),c(),m("code",a.code))},dependencies:[g,f,h,u,S],encapsulation:2});let i=e;return i})();var oe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[A,z,W,q,P,U,F,W]});let i=e;return i})();var ce=()=>["Rating"],ne=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:Q},{id:"reactive-forms",label:"Reactive Forms",component:H},{id:"withoutcancel",label:"Without Cancel",component:ie},{id:"numberofstars",label:"Number of Stars",component:Z},{id:"template",label:"Template",component:te},{id:"readonly",label:"ReadOnly",component:$},{id:"disabled",label:"Disabled",component:X},{id:"style",label:"Style",component:ee},{id:"accessibility",label:"Accessibility",component:J}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Rating Component","header","Rating","description","Rating component is a star based selection input.",3,"docs","apiDocs"]],template:function(r,a){r&1&&d(0,"app-doc",0),r&2&&m("docs",a.docs)("apiDocs",R(2,ce))},dependencies:[V],encapsulation:2});let i=e;return i})();var re=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[F.forChild([{path:"",component:ne}]),F]});let i=e;return i})();var vt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[A,re,oe]});let i=e;return i})();export{vt as RatingDemoModule};
