import{a as x,b as J}from"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-PXBAS5CJ.js";import{a as v,b as O,c as F}from"./chunk-AS5FXEGH.js";import{a as g,b as V}from"./chunk-X2ZDE2AM.js";import{e as h,f as T,g as k,h as P,i as M,j as U,m as A,n as G,p as j,q as z}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{o as R,t as B}from"./chunk-N5X6XDRN.js";import{Jb as n,Nb as p,Nc as W,Ob as d,Pb as c,Sa as m,Sb as _,V as I,da as f,ea as E,kb as u,nb as L,rb as e,sb as t,tb as b}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Y=(()=>{let i=class i{constructor(){this.code={basic:`<label for="price">Price</label>
<p-inputNumber inputId="price"></p-inputNumber>

<span id="label_number">Number</span>
<p-inputNumber ariaLabelledBy="label_number"></p-inputNumber>

<p-inputNumber ariaLabel="Number"></p-inputNumber>`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["accessibility-doc"]],decls:72,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),n(3,"Screen Reader"),t(),e(4,"p"),n(5," Value to describe the component can either be provided via "),e(6,"i"),n(7,"label"),t(),n(8," tag combined with "),e(9,"i"),n(10,"inputId"),t(),n(11," prop or using "),e(12,"i"),n(13,"ariaLabelledBy"),t(),n(14,", "),e(15,"i"),n(16,"ariaLabel"),t(),n(17," props. The input element uses "),e(18,"i"),n(19,"spinbutton"),t(),n(20," role in addition to the "),e(21,"i"),n(22,"aria-valuemin"),t(),n(23,", "),e(24,"i"),n(25,"aria-valuemax"),t(),n(26," and "),e(27,"i"),n(28,"aria-valuenow"),t(),n(29," attributes. "),t()(),b(30,"app-code",0),e(31,"h3"),n(32,"Keyboard Support"),t(),e(33,"div",1)(34,"table",2)(35,"thead")(36,"tr")(37,"th"),n(38,"Key"),t(),e(39,"th"),n(40,"Function"),t()()(),e(41,"tbody")(42,"tr")(43,"td")(44,"i"),n(45,"tab"),t()(),e(46,"td"),n(47,"Moves focus to the input."),t()(),e(48,"tr")(49,"td")(50,"i"),n(51,"up arrow"),t()(),e(52,"td"),n(53,"Increments the value."),t()(),e(54,"tr")(55,"td")(56,"i"),n(57,"down arrow"),t()(),e(58,"td"),n(59,"Decrements the value."),t()(),e(60,"tr")(61,"td")(62,"i"),n(63,"home"),t()(),e(64,"td"),n(65,"Set the minimum value if provided."),t()(),e(66,"tr")(67,"td")(68,"i"),n(69,"end"),t()(),e(70,"td"),n(71,"Set the maximum value if provided."),t()()()()()()),l&2&&(m(30),u("code",o.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[g,v],encapsulation:2});let a=i;return a})();var H=(()=>{let i=class i{constructor(){this.value1=20,this.value2=10.5,this.value3=25,this.code={basic:`<p-inputNumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value3" [showButtons]="true" buttonLayout="horizontal" inputId="horizontal" spinnerMode="horizontal" [step]="0.25"
    decrementButtonClass="p-button-danger" incrementButtonClass="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" mode="currency" currency="EUR"></p-inputNumber>`,html:`
<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="stacked">Stacked</label>
        <p-inputNumber [(ngModel)]="value1" [showButtons]="true" inputId="stacked" mode="currency" currency="USD"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="minmax-buttons">Min-Max Boundaries</label>
        <p-inputNumber [(ngModel)]="value2" mode="decimal" [showButtons]="true" inputId="minmax-buttons" [min]="0" [max]="100"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="mb-2 block font-bold" for="horizontal">Horizontal with Step</label>
        <p-inputNumber
            [(ngModel)]="value3"
            [showButtons]="true"
            buttonLayout="horizontal"
            inputId="horizontal"
            spinnerMode="horizontal"
            [step]="0.25"
            decrementButtonClass="p-button-danger"
            incrementButtonClass="p-button-success"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
            mode="currency"
            currency="EUR"
        ></p-inputNumber>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-buttons-demo',
    templateUrl: './input-number-buttons-demo.html'
})
export class InputNumberButtonsDemo {
    value1: number = 20;

    value2: number = 10.5;

    value3: number = 25;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["buttons-doc"]],decls:23,vars:10,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","stacked",1,"mb-2","block","font-bold"],["inputId","stacked","mode","currency","currency","USD",3,"ngModelChange","ngModel","showButtons"],["for","minmax-buttons",1,"mb-2","block","font-bold"],["mode","decimal","inputId","minmax-buttons",3,"ngModelChange","ngModel","showButtons","min","max"],["for","horizontal",1,"mb-2","block","font-bold"],["buttonLayout","horizontal","inputId","horizontal","spinnerMode","horizontal","decrementButtonClass","p-button-danger","incrementButtonClass","p-button-success","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus","mode","currency","currency","EUR",3,"ngModelChange","ngModel","showButtons","step"],["selector","input-number-buttons-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2," Spinner buttons are enabled using the "),e(3,"i"),n(4,"showButtons"),t(),n(5," options and layout is defined with the "),e(6,"i"),n(7,"buttonLayout"),t(),n(8,'. Default value is "stacked" whereas "horizontal" and "stacked" are alternatives. Note that even there are no buttons, up and down arrow keys can be used to spin the values with keyboard. '),t()(),e(9,"div",0)(10,"div",1)(11,"label",2),n(12,"Stacked"),t(),e(13,"p-inputNumber",3),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),e(14,"div",1)(15,"label",4),n(16,"Min-Max Boundaries"),t(),e(17,"p-inputNumber",5),c("ngModelChange",function(r){return d(o.value2,r)||(o.value2=r),r}),t()(),e(18,"div",1)(19,"label",6),n(20,"Horizontal with Step"),t(),e(21,"p-inputNumber",7),c("ngModelChange",function(r){return d(o.value3,r)||(o.value3=r),r}),t()()(),b(22,"app-code",8)),l&2&&(m(13),p("ngModel",o.value1),u("showButtons",!0),m(4),p("ngModel",o.value2),u("showButtons",!0)("min",0)("max",100),m(4),p("ngModel",o.value3),u("showButtons",!0)("step",.25),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var K=(()=>{let i=class i{constructor(){this.value1=1500,this.value2=2500,this.value3=4250,this.value4=5002,this.code={basic:`<p-inputNumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value2" mode="currency" inputId="currency-germany" currency="EUR" locale="de-DE"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP"> </p-inputNumber>`,html:`
<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-us">United States</label>
        <p-inputNumber [(ngModel)]="value1" inputId="currency-us" mode="currency" currency="USD" locale="en-US"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-germany">Germany</label>
        <p-inputNumber [(ngModel)]="value2" mode="currency" inputId="currency-germany" currency="EUR" locale="de-DE"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-india">India</label>
        <p-inputNumber [(ngModel)]="value3" mode="currency" inputId="currency-india" currency="INR" currencyDisplay="code" locale="en-IN"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="currency-japan">Japan</label>
        <p-inputNumber [(ngModel)]="value4" mode="currency" inputId="currency-japan" currency="JPY" locale="jp-JP"> </p-inputNumber>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-currency-demo',
    templateUrl: './input-number-currency-demo.html'
})
export class InputNumberCurrencyDemo {
    value1: number = 1500;

    value2: number = 2500;

    value3: number = 4250;

    value4: number = 5002;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["currency-doc"]],decls:30,vars:5,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","currency-us",1,"block","font-bold","mb-2"],["inputId","currency-us","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","currency-germany",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-germany","currency","EUR","locale","de-DE",3,"ngModelChange","ngModel"],["for","currency-india",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-india","currency","INR","currencyDisplay","code","locale","en-IN",3,"ngModelChange","ngModel"],["for","currency-japan",1,"block","font-bold","mb-2"],["mode","currency","inputId","currency-japan","currency","JPY","locale","jp-JP",3,"ngModelChange","ngModel"],["selector","input-number-currency-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2," Currency formatting is specified by setting the "),e(3,"i"),n(4,"mode"),t(),n(5," option to currency and "),e(6,"i"),n(7,"currency"),t(),n(8," property. In addition "),e(9,"i"),n(10,"currencyDisplay"),t(),n(11,' option allows how the currency is displayed, valid values are "symbol" (default) or "code". '),t()(),e(12,"div",0)(13,"div",1)(14,"label",2),n(15,"United States"),t(),e(16,"p-inputNumber",3),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),e(17,"div",1)(18,"label",4),n(19,"Germany"),t(),e(20,"p-inputNumber",5),c("ngModelChange",function(r){return d(o.value2,r)||(o.value2=r),r}),t()(),e(21,"div",1)(22,"label",6),n(23,"India"),t(),e(24,"p-inputNumber",7),c("ngModelChange",function(r){return d(o.value3,r)||(o.value3=r),r}),t()(),e(25,"div",1)(26,"label",8),n(27,"Japan"),t(),e(28,"p-inputNumber",9),c("ngModelChange",function(r){return d(o.value4,r)||(o.value4=r),r}),t()()(),b(29,"app-code",10)),l&2&&(m(16),p("ngModel",o.value1),m(4),p("ngModel",o.value2),m(4),p("ngModel",o.value3),m(4),p("ngModel",o.value4),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var q=(()=>{let i=class i{constructor(){this.value1=50,this.code={basic:'<p-inputNumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1"> </p-inputNumber>',html:`
<div class="card flex justify-content-center">
    <p-inputNumber inputId="integeronly" [disabled]="true" prefix="%" [(ngModel)]="value1"> </p-inputNumber>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-disabled-demo',
    templateUrl: './input-number-disabled-demo.html'
})
export class InputNumberDisabledDemo {
    value1: number = 50;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],["inputId","integeronly","prefix","%",3,"ngModelChange","disabled","ngModel"],["selector","input-number-disabled-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"When "),e(3,"i"),n(4,"disabled"),t(),n(5," is present, the element cannot be edited and focused."),t()(),e(6,"div",0)(7,"p-inputNumber",1),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),b(8,"app-code",2)),l&2&&(m(7),u("disabled",!0),p("ngModel",o.value1),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var Q=(()=>{let i=class i{constructor(){this.code={basic:`<span class="p-float-label">
    <p-inputNumber inputId="integeronly" [(ngModel)]="value1"> </p-inputNumber>
    <label for="number-input">Number</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-inputNumber inputId="integeronly" [(ngModel)]="value1"> </p-inputNumber>
        <label for="number-input">Number</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-float-label-demo',
    templateUrl: './input-number-float-label-demo.html'
})
export class InputNumberFloatLabelDemo {
    value1!: number;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["float-label-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["inputId","integeronly",3,"ngModelChange","ngModel"],["for","number-input"],["selector","input-number-float-label-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"A floating label appears on top of the input field when focused."),t()(),e(3,"div",0)(4,"span",1)(5,"p-inputNumber",2),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t(),e(6,"label",3),n(7,"Number"),t()()(),b(8,"app-code",4)),l&2&&(m(5),p("ngModel",o.value1),m(3),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var X=(()=>{let i=class i{constructor(){this.code={typescript:"import { InputNumberModule } from 'primeng/inputnumber';"}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,o){l&1&&b(0,"app-code",0),l&2&&u("code",o.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let a=i;return a})();var Z=(()=>{let i=class i{constructor(){this.code={basic:'<p-inputNumber inputId="integeronly" class="ng-invalid ng-dirty" [(ngModel)]="value1"> </p-inputNumber>',html:`
<div class="card flex justify-content-center">
    <p-inputNumber inputId="integeronly" class="ng-invalid ng-dirty" [(ngModel)]="value1"> </p-inputNumber>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-invalid-demo',
    templateUrl: './input-number-invalid-demo.html'
})
export class InputNumberInvalidDemo {
    value1!: number;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["inputId","integeronly",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-number-invalid-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Invalid state style is added using the "),e(3,"i"),n(4,"ng-invalid"),t(),n(5," and "),e(6,"i"),n(7,"ng-dirty"),t(),n(8," class to indicate a failed validation."),t()(),e(9,"div",0)(10,"p-inputNumber",1),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),b(11,"app-code",2)),l&2&&(m(10),p("ngModel",o.value1),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var $=(()=>{let i=class i{constructor(){this.value1=151351,this.value2=115744,this.value3=635524,this.value4=732762,this.code={basic:`<p-inputNumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2"></p-inputNumber>
<p-inputNumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2"> </p-inputNumber>`,html:`
<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-user">User Locale</label>
        <p-inputNumber [(ngModel)]="value1" inputId="locale-user" [minFractionDigits]="2"></p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-us">United States Locale</label>
        <p-inputNumber [(ngModel)]="value2" inputId="locale-us" mode="decimal" locale="en-US" [minFractionDigits]="2"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-german">German Locale</label>
        <p-inputNumber [(ngModel)]="value3" inputId="locale-german" mode="decimal" locale="de-DE" [minFractionDigits]="2"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="block font-bold mb-2" for="locale-indian">Indian Locale</label>
        <p-inputNumber [(ngModel)]="value4" inputId="locale-indian" mode="decimal" locale="en-IN" [minFractionDigits]="2"> </p-inputNumber>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-locale-demo',
    templateUrl: './input-number-locale-demo.html'
})
export class InputNumberLocaleDemo {
    value1: number = 151351;

    value2: number = 115744;

    value3: number = 635524;

    value4: number = 732762;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["locale-doc"]],decls:24,vars:9,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","locale-user",1,"block","font-bold","mb-2"],["inputId","locale-user",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-us",1,"block","font-bold","mb-2"],["inputId","locale-us","mode","decimal","locale","en-US",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-german",1,"block","font-bold","mb-2"],["inputId","locale-german","mode","decimal","locale","de-DE",3,"ngModelChange","ngModel","minFractionDigits"],["for","locale-indian",1,"block","font-bold","mb-2"],["inputId","locale-indian","mode","decimal","locale","en-IN",3,"ngModelChange","ngModel","minFractionDigits"],["selector","input-number-locale-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Localization information such as grouping and decimal symbols are defined with the "),e(3,"i"),n(4,"locale"),t(),n(5," property which defaults to the user locale."),t()(),e(6,"div",0)(7,"div",1)(8,"label",2),n(9,"User Locale"),t(),e(10,"p-inputNumber",3),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),e(11,"div",1)(12,"label",4),n(13,"United States Locale"),t(),e(14,"p-inputNumber",5),c("ngModelChange",function(r){return d(o.value2,r)||(o.value2=r),r}),t()(),e(15,"div",1)(16,"label",6),n(17,"German Locale"),t(),e(18,"p-inputNumber",7),c("ngModelChange",function(r){return d(o.value3,r)||(o.value3=r),r}),t()(),e(19,"div",1)(20,"label",8),n(21,"Indian Locale"),t(),e(22,"p-inputNumber",9),c("ngModelChange",function(r){return d(o.value4,r)||(o.value4=r),r}),t()()(),b(23,"app-code",10)),l&2&&(m(10),p("ngModel",o.value1),u("minFractionDigits",2),m(4),p("ngModel",o.value2),u("minFractionDigits",2),m(4),p("ngModel",o.value3),u("minFractionDigits",2),m(4),p("ngModel",o.value4),u("minFractionDigits",2),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var ee=(()=>{let i=class i{constructor(){this.value1=42723,this.value2=58151,this.value3=2351.35,this.value4=50,this.code={basic:`<p-inputNumber inputId="integeronly" [(ngModel)]="value1"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100"> </p-inputNumber>`,html:`
<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label for="integeronly">Integer Only</label>
        <p-inputNumber inputId="integeronly" [(ngModel)]="value1"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label for="withoutgrouping">Without Grouping</label>
        <p-inputNumber [(ngModel)]="value2" mode="decimal" inputId="withoutgrouping" [useGrouping]="false"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label for="minmaxfraction">Min-Max Fraction Digits</label>
        <p-inputNumber [(ngModel)]="value3" inputId="minmaxfraction" mode="decimal" [minFractionDigits]="2" [maxFractionDigits]="5"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label for="minmax">Min-Max Boundaries</label>
        <p-inputNumber [(ngModel)]="value4" inputId="minmax" mode="decimal" [min]="0" [max]="100"> </p-inputNumber>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-numerals-demo',
    templateUrl: './input-number-numerals-demo.html'
})
export class InputNumberNumeralsDemo {
    value1: number = 42723;

    value2: number = 58151;

    value3: number = 2351.35;

    value4: number = 50;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["numerals-doc"]],decls:24,vars:10,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","integeronly",1,"mb-2","font-bold","block"],["inputId","integeronly",3,"ngModelChange","ngModel"],["for","withoutgrouping",1,"mb-2","font-bold","block"],["mode","decimal","inputId","withoutgrouping",3,"ngModelChange","ngModel","useGrouping"],["for","minmaxfraction",1,"mb-2","font-bold","block"],["inputId","minmaxfraction","mode","decimal",3,"ngModelChange","ngModel","minFractionDigits","maxFractionDigits"],["for","minmax",1,"mb-2","font-bold","block"],["inputId","minmax","mode","decimal",3,"ngModelChange","ngModel","min","max"],["selector","input-number-numerals-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"InputNumber is used as a controlled input with "),e(3,"i"),n(4,"ngModel"),t(),n(5," property."),t()(),e(6,"div",0)(7,"div",1)(8,"label",2),n(9,"Integer Only"),t(),e(10,"p-inputNumber",3),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),e(11,"div",1)(12,"label",4),n(13,"Without Grouping"),t(),e(14,"p-inputNumber",5),c("ngModelChange",function(r){return d(o.value2,r)||(o.value2=r),r}),t()(),e(15,"div",1)(16,"label",6),n(17,"Min-Max Fraction Digits"),t(),e(18,"p-inputNumber",7),c("ngModelChange",function(r){return d(o.value3,r)||(o.value3=r),r}),t()(),e(19,"div",1)(20,"label",8),n(21,"Min-Max Boundaries"),t(),e(22,"p-inputNumber",9),c("ngModelChange",function(r){return d(o.value4,r)||(o.value4=r),r}),t()()(),b(23,"app-code",10)),l&2&&(m(10),p("ngModel",o.value1),m(4),p("ngModel",o.value2),u("useGrouping",!1),m(4),p("ngModel",o.value3),u("minFractionDigits",2)("maxFractionDigits",5),m(4),p("ngModel",o.value4),u("min",0)("max",100),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var te=(()=>{let i=class i{constructor(){this.value1=20,this.value2=50,this.value3=10,this.value4=20,this.code={basic:`<p-inputNumber [(ngModel)]="value1" inputId="mile" suffix=" mi"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value2" inputId="percent" prefix="%"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value3" inputId="expiry" prefix="Expires in " suffix=" days"> </p-inputNumber>
<p-inputNumber [(ngModel)]="value4" prefix="\u2191 " inputId="temperature" suffix="\u2103" [min]="0" [max]="40"> </p-inputNumber>`,html:`
<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="mile">Mile</label>
        <p-inputNumber [(ngModel)]="value1" inputId="mile" suffix=" mi"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="percent">Percent</label>
        <p-inputNumber [(ngModel)]="value2" inputId="percent" prefix="%"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="expiry">Expiry</label>
        <p-inputNumber [(ngModel)]="value3" inputId="expiry" prefix="Expires in " suffix=" days"> </p-inputNumber>
    </div>
    <div class="flex-auto">
        <label class="font-bold block mb-2" for="temperature">Temperature</label>
        <p-inputNumber [(ngModel)]="value4" prefix="\u2191 " inputId="temperature" suffix="\u2103" [min]="0" [max]="40"> </p-inputNumber>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-prefix-suffix-demo',
    templateUrl: './input-number-prefix-suffix-demo.html'
})
export class InputNumberPrefixSuffixDemo {
    value1: number = 20;

    value2: number = 50;

    value3: number = 10;

    value4: number = 20;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["prefix-suffix-doc"]],decls:27,vars:7,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","mile",1,"font-bold","block","mb-2"],["inputId","mile","suffix"," mi",3,"ngModelChange","ngModel"],["for","percent",1,"font-bold","block","mb-2"],["inputId","percent","prefix","%",3,"ngModelChange","ngModel"],["for","expiry",1,"font-bold","block","mb-2"],["inputId","expiry","prefix","Expires in ","suffix"," days",3,"ngModelChange","ngModel"],["for","temperature",1,"font-bold","block","mb-2"],["prefix","\u2191 ","inputId","temperature","suffix","\u2103",3,"ngModelChange","ngModel","min","max"],["selector","input-number-prefix-suffix-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Custom texts e.g. units can be placed before or after the input section with the "),e(3,"i"),n(4,"prefix"),t(),n(5," and "),e(6,"i"),n(7,"suffix"),t(),n(8," properties."),t()(),e(9,"div",0)(10,"div",1)(11,"label",2),n(12,"Mile"),t(),e(13,"p-inputNumber",3),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),e(14,"div",1)(15,"label",4),n(16,"Percent"),t(),e(17,"p-inputNumber",5),c("ngModelChange",function(r){return d(o.value2,r)||(o.value2=r),r}),t()(),e(18,"div",1)(19,"label",6),n(20,"Expiry"),t(),e(21,"p-inputNumber",7),c("ngModelChange",function(r){return d(o.value3,r)||(o.value3=r),r}),t()(),e(22,"div",1)(23,"label",8),n(24,"Temperature"),t(),e(25,"p-inputNumber",9),c("ngModelChange",function(r){return d(o.value4,r)||(o.value4=r),r}),t()()(),b(26,"app-code",10)),l&2&&(m(13),p("ngModel",o.value1),m(4),p("ngModel",o.value2),m(4),p("ngModel",o.value3),m(4),p("ngModel",o.value4),u("min",0)("max",40),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var ne=(()=>{let i=class i{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-inputNumber inputId="integeronly" formControlName="value"></p-inputNumber>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-inputNumber inputId="integeronly" formControlName="value"></p-inputNumber>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-number-reactive-forms-demo',
    templateUrl: './input-number-reactive-forms-demo.html'
})
export class InputNumberReactiveFormsDemo implements OnInit {
    formGroup!: FormGroup;

    ngOnInit() {
        this.formGroup = new FormGroup({
            value: new FormControl(1234)
        });
    }
}`}}ngOnInit(){this.formGroup=new k({value:new P(1234)})}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["inputId","integeronly","formControlName","value"],["selector","input-number-reactive-forms-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"InputNumber can also be used with reactive forms. In this case, the "),e(3,"i"),n(4,"formControlName"),t(),n(5," property is used to bind the component to a form control."),t()(),e(6,"div",0)(7,"form",1),b(8,"p-inputNumber",2),t()(),b(9,"app-code",3)),l&2&&(m(7),u("formGroup",o.formGroup),m(2),u("code",o.code))},dependencies:[U,h,T,A,G,x,g,v],encapsulation:2});let a=i;return a})();var me=()=>["/theming"],ie=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Following is the list of structural style classes, for theming classes visit "),e(3,"a",0),n(4,"theming"),t(),n(5," page."),t()(),e(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),n(11,"Name"),t(),e(12,"th"),n(13,"Element"),t()()(),e(14,"tbody")(15,"tr")(16,"td"),n(17,"p-inputnumber"),t(),e(18,"td"),n(19,"Container element"),t()(),e(20,"tr")(21,"td"),n(22,"p-input-number-stacked"),t(),e(23,"td"),n(24,"Container element with stacked buttons."),t()(),e(25,"tr")(26,"td"),n(27,"p-input-number-horizontal"),t(),e(28,"td"),n(29,"Container element with horizontal buttons."),t()(),e(30,"tr")(31,"td"),n(32,"p-input-number-vertical"),t(),e(33,"td"),n(34,"Container element with vertical buttons."),t()(),e(35,"tr")(36,"td"),n(37,"p-input-number-input"),t(),e(38,"td"),n(39,"Input element"),t()(),e(40,"tr")(41,"td"),n(42,"p-input-number-button"),t(),e(43,"td"),n(44,"Input element"),t()(),e(45,"tr")(46,"td"),n(47,"p-input-number-button-up"),t(),e(48,"td"),n(49,"Increment button"),t()(),e(50,"tr")(51,"td"),n(52,"p-input-number-button-down"),t(),e(53,"td"),n(54,"Decrement button"),t()(),e(55,"tr")(56,"td"),n(57,"p-input-number-button-icon"),t(),e(58,"td"),n(59,"Button icon"),t()()()()()),l&2&&(m(3),u("routerLink",_(1,me)))},dependencies:[R,v],encapsulation:2});let a=i;return a})();var ue=()=>({width:"4rem"}),oe=(()=>{let i=class i{constructor(){this.value1=50,this.code={basic:`<p-inputNumber [(ngModel)]="value1" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" decrementButtonClass="p-button-secondary"
    incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" ></p-inputNumber>`,html:`
<div class="card flex justify-content-center">
    <p-inputNumber [(ngModel)]="value1" [style]="{'width': '4rem'}" [showButtons]="true" buttonLayout="vertical" spinnerMode="vertical" inputId="vertical" decrementButtonClass="p-button-secondary"
        incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"></p-inputNumber>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-number-vertical-demo',
    templateUrl: './input-number-vertical-demo.html'
})
export class InputNumberVerticalDemo {
    value1: number = 50;
}`}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["vertical-doc"]],decls:12,vars:6,consts:[[1,"card","flex","justify-content-center"],["buttonLayout","vertical","spinnerMode","vertical","inputId","vertical","decrementButtonClass","p-button-secondary","incrementButtonClass","p-button-secondary","incrementButtonIcon","pi pi-plus","decrementButtonIcon","pi pi-minus",3,"ngModelChange","ngModel","showButtons"],["selector","input-number-vertical-demo",3,"code"]],template:function(l,o){l&1&&(e(0,"app-docsectiontext")(1,"p"),n(2,"Buttons can also placed vertically by setting "),e(3,"i"),n(4,"buttonLayout"),t(),n(5," as "),e(6,"i"),n(7,"vertical"),t(),n(8,"."),t()(),e(9,"div",0)(10,"p-inputNumber",1),c("ngModelChange",function(r){return d(o.value1,r)||(o.value1=r),r}),t()(),b(11,"app-code",2)),l&2&&(m(10),L(_(5,ue)),p("ngModel",o.value1),u("showButtons",!0),m(),u("code",o.code))},dependencies:[h,M,x,g,v],encapsulation:2});let a=i;return a})();var re=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=E({type:i}),i.\u0275inj=I({imports:[W,j,z,J,B,V,F,F]});let a=i;return a})();var pe=()=>["InputNumber"],le=(()=>{let i=class i{constructor(){this.docs=[{id:"import",label:"Import",component:X},{id:"numeral",label:"Numeral",component:ee},{id:"reactive-forms",label:"Reactive Forms",component:ne},{id:"locale",label:"Locale",component:$},{id:"currency",label:"Currency",component:K},{id:"prefixsuffix",label:"Prefix & Suffix",component:te},{id:"buttons",label:"Buttons",component:H},{id:"vertical",label:"Vertical",component:oe},{id:"floatlabel",label:"Float Label",component:Q},{id:"invalid",label:"Invalid",component:Z},{id:"disabled",label:"Disabled",component:q},{id:"style",label:"Style",component:ie},{id:"accessibility",label:"Accessibility",component:Y}]}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=f({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular InputNumber Component","header","InputNumber","description","InputNumber is an input component to provide numerical input.",3,"docs","apiDocs"]],template:function(l,o){l&1&&b(0,"app-doc",0),l&2&&u("docs",o.docs)("apiDocs",_(2,pe))},dependencies:[O],encapsulation:2});let a=i;return a})();var ae=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=E({type:i}),i.\u0275inj=I({imports:[B.forChild([{path:"",component:le}]),B]});let a=i;return a})();var Et=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=E({type:i}),i.\u0275inj=I({imports:[W,ae,re]});let a=i;return a})();export{Et as InputNumberDemoModule};
