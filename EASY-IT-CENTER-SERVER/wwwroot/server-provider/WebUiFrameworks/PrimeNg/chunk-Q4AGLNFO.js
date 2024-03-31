import{a as v,b as K}from"./chunk-XDIIGL3G.js";import{a as f,b as q,c as W}from"./chunk-AS5FXEGH.js";import{a as u,b as H}from"./chunk-X2ZDE2AM.js";import{b as j,e as g,f as G,g as B,h as V,i as C,j as L,m as R,n as O,p as _,q as P,r as k,s as z}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as U,t as T}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as y,Nc as A,Ob as S,Pb as x,Sa as m,Sb as I,V as D,da as s,ea as w,kb as d,rb as i,sb as o,tb as c}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var J=(()=>{let e=class e{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-slider formControlName="value"></p-slider>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-slider formControlName="value"></p-slider>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'slider-reactive-forms-demo',
    templateUrl: './slider-reactive-forms-demo.html'
})
export class SliderReactiveFormsDemo implements OnInit {
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
}`}}ngOnInit(){this.formGroup=new B({value:new V(20)})}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value"],["selector","slider-reactive-forms-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Slider can also be used with reactive forms. In this case, the "),i(3,"i"),t(4,"formControlName"),o(),t(5," property is used to bind the component to a form control."),o()(),i(6,"div",0)(7,"form",1),c(8,"p-slider",2),o()(),c(9,"app-code",3)),n&2&&(m(7),d("formGroup",l.formGroup),m(2),d("code",l.code))},dependencies:[u,L,g,G,R,O,v,f],encapsulation:2});let r=e;return r})();var Q=(()=>{let e=class e{constructor(){this.code={basic:`<span id="label_number">Number</span>
<p-slider ariaLabelledBy="label_number"></p-slider>

<p-slider ariaLabel="Number"></p-slider>`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["accessibility-doc"]],decls:87,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(n,l){n&1&&(i(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),o(),i(4,"p"),t(5," Slider element component uses "),i(6,"i"),t(7,"slider"),o(),t(8," role on the handle in addition to the "),i(9,"i"),t(10,"aria-orientation"),o(),t(11,", "),i(12,"i"),t(13,"aria-valuemin"),o(),t(14,", "),i(15,"i"),t(16,"aria-valuemax"),o(),t(17," and "),i(18,"i"),t(19,"aria-valuenow"),o(),t(20," attributes. Value to describe the component can be defined using "),i(21,"i"),t(22,"ariaLabelledBy"),o(),t(23," and "),i(24,"i"),t(25,"ariaLabel"),o(),t(26," props. "),o()(),c(27,"app-code",0),i(28,"h3"),t(29,"Keyboard Support"),o(),i(30,"div",1)(31,"table",2)(32,"thead")(33,"tr")(34,"th"),t(35,"Key"),o(),i(36,"th"),t(37,"Function"),o()()(),i(38,"tbody")(39,"tr")(40,"td")(41,"i"),t(42,"tab"),o()(),i(43,"td"),t(44,"Moves focus to the slider."),o()(),i(45,"tr")(46,"td")(47,"span",3)(48,"i",4),t(49,"left arrow"),o(),i(50,"i"),t(51,"up arrow"),o()()(),i(52,"td"),t(53,"Decrements the value."),o()(),i(54,"tr")(55,"td")(56,"span",3)(57,"i",4),t(58,"right arrow"),o(),i(59,"i"),t(60,"down arrow"),o()()(),i(61,"td"),t(62,"Increments the value."),o()(),i(63,"tr")(64,"td")(65,"i"),t(66,"home"),o()(),i(67,"td"),t(68,"Set the minimum value."),o()(),i(69,"tr")(70,"td")(71,"i"),t(72,"end"),o()(),i(73,"td"),t(74,"Set the maximum value."),o()(),i(75,"tr")(76,"td")(77,"i"),t(78,"page up"),o()(),i(79,"td"),t(80,"Increments the value by 10 steps."),o()(),i(81,"tr")(82,"td")(83,"i"),t(84,"page down"),o()(),i(85,"td"),t(86,"Decrements the value by 10 steps."),o()()()()()()),n&2&&(m(27),d("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let r=e;return r})();var X=(()=>{let e=class e{constructor(){this.code={basic:'<p-slider [(ngModel)]="value"></p-slider>',html:`
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="value"></p-slider>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'slider-basic-demo',
    templateUrl: './slider-basic-demo.html'
})
export class SliderBasicDemo {
    value!: number;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","slider-basic-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Two-way binding is defined using the standard "),i(3,"i"),t(4,"ngModel"),o(),t(5," directive."),o()(),i(6,"div",0)(7,"p-slider",1),x("ngModelChange",function(a){return S(l.value,a)||(l.value=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),y("ngModel",l.value),m(),d("code",l.code))},dependencies:[u,g,C,v,f],encapsulation:2});let r=e;return r})();var Y=(()=>{let e=class e{constructor(){this.code={typescript:"import { SliderModule } from 'primeng/slider';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,l){n&1&&c(0,"app-code",0),n&2&&d("code",l.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let r=e;return r})();var Z=(()=>{let e=class e{constructor(){this.value=50,this.code={basic:`<div>
    <input type="text" pInputText [(ngModel)]="value" class="w-full"/>
    <p-slider [(ngModel)]="value" class="w-full"></p-slider>
</div>`,html:`
<div class="card flex justify-content-center">
    <div>
        <input type="text" pInputText [(ngModel)]="value" class="w-full"/>
        <p-slider [(ngModel)]="value" class="w-full"></p-slider>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'slider-input-demo',
    templateUrl: './slider-input-demo.html'
})
export class SliderInputDemo {
    value: number = 50;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["input-doc"]],decls:8,vars:3,consts:[[1,"card","flex","justify-content-center"],["type","text","pInputText","",1,"w-full",3,"ngModelChange","ngModel"],[1,"w-full",3,"ngModelChange","ngModel"],["selector","slider-input-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Slider is connected to an input field using two-way binding."),o()(),i(3,"div",0)(4,"div")(5,"input",1),x("ngModelChange",function(a){return S(l.value,a)||(l.value=a),a}),o(),i(6,"p-slider",2),x("ngModelChange",function(a){return S(l.value,a)||(l.value=a),a}),o()()(),c(7,"app-code",3)),n&2&&(m(5),y("ngModel",l.value),m(),y("ngModel",l.value),m(),d("code",l.code))},dependencies:[u,j,g,C,v,f,k],encapsulation:2});let r=e;return r})();var $=(()=>{let e=class e{constructor(){this.rangeValues=[20,80],this.code={basic:'<p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>',html:`
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'slider-range-demo',
    templateUrl: './slider-range-demo.html'
})
export class SliderRangeDemo {
    rangeValues: number[] = [20, 80];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["range-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","range"],["selector","slider-range-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"When "),i(3,"i"),t(4,"range"),o(),t(5," property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value."),o()(),i(6,"div",0)(7,"p-slider",1),x("ngModelChange",function(a){return S(l.rangeValues,a)||(l.rangeValues=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),y("ngModel",l.rangeValues),d("range",!0),m(),d("code",l.code))},dependencies:[u,g,C,v,f],encapsulation:2});let r=e;return r})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<p-slider [(ngModel)]="value" [step]="20"></p-slider>',html:`
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="value" [step]="20"></p-slider>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'slider-step-demo',
    templateUrl: './slider-step-demo.html'
})
export class SliderStepDemo {
    value!: number;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["step-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","step"],["selector","slider-step-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Size of each movement is defined with the "),i(3,"i"),t(4,"step"),o(),t(5," property."),o()(),i(6,"div",0)(7,"p-slider",1),x("ngModelChange",function(a){return S(l.value,a)||(l.value=a),a}),o()(),c(8,"app-code",2)),n&2&&(m(7),y("ngModel",l.value),d("step",20),m(),d("code",l.code))},dependencies:[u,g,C,v,f],encapsulation:2});let r=e;return r})();var le=()=>["/theming"],te=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["style-doc"]],decls:25,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),t(4,"theming"),o(),t(5," page."),o()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),o(),i(12,"th"),t(13,"Element"),o()()(),i(14,"tbody")(15,"tr")(16,"td"),t(17,"p-slider"),o(),i(18,"td"),t(19,"Container element"),o()(),i(20,"tr")(21,"td"),t(22,"p-slider-handle"),o(),i(23,"td"),t(24,"Handle element"),o()()()()()),n&2&&(m(3),d("routerLink",I(1,le)))},dependencies:[f,U],encapsulation:2});let r=e;return r})();var ie=(()=>{let e=class e{constructor(){this.code={basic:'<p-slider [(ngModel)]="value" orientation="vertical"></p-slider>',html:`
<div class="card flex justify-content-center">
    <p-slider [(ngModel)]="value" orientation="vertical"></p-slider>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'slider-vertical-demo',
    templateUrl: './slider-vertical-demo.html'
})
export class SliderVerticalDemo {
    value!: number;
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["vertical-doc"]],decls:15,vars:2,consts:[[1,"card","flex","justify-content-center"],["orientation","vertical",3,"ngModelChange","ngModel"],["selector","slider-vertical-demo",3,"code"]],template:function(n,l){n&1&&(i(0,"app-docsectiontext")(1,"p"),t(2,"Default layout of slider is "),i(3,"i"),t(4,"horizontal"),o(),t(5,", use "),i(6,"i"),t(7,"orientation"),o(),t(8," property for the alternative "),i(9,"i"),t(10,"vertical"),o(),t(11," mode."),o()(),i(12,"div",0)(13,"p-slider",1),x("ngModelChange",function(a){return S(l.value,a)||(l.value=a),a}),o()(),c(14,"app-code",2)),n&2&&(m(13),y("ngModel",l.value),m(),d("code",l.code))},dependencies:[u,g,C,v,f],encapsulation:2});let r=e;return r})();var oe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[A,H,_,P,K,W,z,T,W]});let r=e;return r})();var ae=()=>["Slider"],ne=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Y},{id:"basic",label:"Basic",component:X},{id:"reactive-forms",label:"Reactive Forms",component:J},{id:"input",label:"Input",component:Z},{id:"step",label:"Step",component:ee},{id:"range",label:"Range",component:$},{id:"vertical",label:"Vertical",component:ie},{id:"style",label:"Style",component:te},{id:"accessibility",label:"Accessibility",component:Q}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=s({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Slider Component","header","Slider","description","Slider is a component to provide input with a drag handle.",3,"docs","apiDocs"]],template:function(n,l){n&1&&c(0,"app-doc",0),n&2&&d("docs",l.docs)("apiDocs",I(2,ae))},dependencies:[q],styles:[".p-inputtext[_ngcontent-%COMP%]{width:14rem}.p-slider-vertical[_ngcontent-%COMP%]{height:14rem}[_nghost-%COMP%]     .p-slider-horizontal{width:14rem}"]});let r=e;return r})();var re=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[T.forChild([{path:"",component:ne}]),T]});let r=e;return r})();var st=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=w({type:e}),e.\u0275inj=D({imports:[A,re,oe]});let r=e;return r})();export{st as SliderDemoModule};
