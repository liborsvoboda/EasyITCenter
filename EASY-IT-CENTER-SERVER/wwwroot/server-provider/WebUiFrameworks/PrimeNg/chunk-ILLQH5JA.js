import{a as O,b as R}from"./chunk-QUKVYQLU.js";import{a as f,b as V,c as A}from"./chunk-AS5FXEGH.js";import{a as u,b as K}from"./chunk-X2ZDE2AM.js";import{b as v,e as h,f as B,g as z,h as L,i as M,j as k,m as P,n as U,p as W,q as G,r as C,s as _}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as j}from"./chunk-N5X6XDRN.js";import{Jb as i,Nb as g,Nc as N,Ob as x,Pb as y,Sa as l,V as E,da as d,ea as F,kb as c,rb as o,sb as r,tb as m}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var H=(()=>{let e=class e{constructor(){this.code={basic:`<label for="firstname">Firstname</label>
<input pInputText id="firstname" />

<span id="lastname">Lastname</span>
<input pInputText aria-labelledby="lastname" />

<input pInputText aria-label="Age" />`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:36,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(o(0,"div")(1,"app-docsectiontext")(2,"h3"),i(3,"Screen Reader"),r(),o(4,"p"),i(5," InputText component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via "),o(6,"i"),i(7,"label"),r(),i(8," tag combined with "),o(9,"i"),i(10,"id"),r(),i(11," prop or using "),o(12,"i"),i(13,"aria-labelledby"),r(),i(14,", "),o(15,"i"),i(16,"aria-label"),r(),i(17," props. "),r()(),m(18,"app-code",0),o(19,"h3"),i(20,"Keyboard Support"),r(),o(21,"div",1)(22,"table",2)(23,"thead")(24,"tr")(25,"th"),i(26,"Key"),r(),o(27,"th"),i(28,"Function"),r()()(),o(29,"tbody")(30,"tr")(31,"td")(32,"i"),i(33,"tab"),r()(),o(34,"td"),i(35,"Moves focus to the input."),r()()()()()()),t&2&&(l(18),c("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let n=e;return n})();var q=(()=>{let e=class e{constructor(){this.code={basic:'<input type="text" pInputText [(ngModel)]="value" />',html:`
<div class="card flex justify-content-center">
    <input type="text" pInputText [(ngModel)]="value" />
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-basic-demo',
    templateUrl: './input-text-basic-demo.html'
})
export class InputTextBasicDemo {
    value: string;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],["type","text","pInputText","",3,"ngModelChange","ngModel"],["selector","input-text-basic-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"InputText is used as a controlled input with "),o(3,"i"),i(4,"ngModel"),r(),i(5," properties."),r()(),o(6,"div",0)(7,"input",1),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r()(),m(8,"app-code",2)),t&2&&(l(7),g("ngModel",a.value),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var J=(()=>{let e=class e{constructor(){this.code={basic:'<input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value" />',html:`
<div class="card flex justify-content-center">
    <input id="disabled-input" type="text" pInputText [disabled]="true" [(ngModel)]="value" />
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-disabled-demo',
    templateUrl: './input-text-disabled-demo.html'
})
export class InputTextDisabledDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["disabled-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],["id","disabled-input","type","text","pInputText","",3,"ngModelChange","disabled","ngModel"],["selector","input-text-disabled-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"When "),o(3,"i"),i(4,"disabled"),r(),i(5," is present, the element cannot be edited and focused."),r()(),o(6,"div",0)(7,"input",1),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r()(),m(8,"app-code",2)),t&2&&(l(7),c("disabled",!0),g("ngModel",a.value),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var Q=(()=>{let e=class e{constructor(){this.code={basic:`<span class="p-float-label">
    <input pInputText id="username" [(ngModel)]="value" />
    <label for="username">Username</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <input pInputText id="username" [(ngModel)]="value" />
        <label for="username">Username</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-floatlabel-demo',
    templateUrl: './input-text-floatlabel-demo.html'
})
export class InputTextFloatlabelDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["floatlabel-doc"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["pInputText","","id","username",3,"ngModelChange","ngModel"],["for","username"],["selector","input-text-floatlabel-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"A floating label appears on top of the input field when focused."),r()(),o(3,"div",0)(4,"span",1)(5,"input",2),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r(),o(6,"label",3),i(7,"Username"),r()()(),m(8,"app-code",4)),t&2&&(l(5),g("ngModel",a.value),l(3),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var X=(()=>{let e=class e{constructor(){this.code={basic:`<div class="flex flex-column gap-2">
    <label for="username">Username</label>
    <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
    <small id="username-help">Enter your username to reset your password.</small>
</div>`,html:`
<div class="card flex justify-content-center">
    <div class="flex flex-column gap-2">
        <label for="username">Username</label>
        <input pInputText id="username" aria-describedby="username-help" [(ngModel)]="value" />
        <small id="username-help">Enter your username to reset your password.</small>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-help-text-demo',
    templateUrl: './input-text-help-text-demo.html'
})
export class InputTextHelpTextDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["helptext-doc"]],decls:14,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"flex","flex-column","gap-2"],["for","username"],["pInputText","","id","username","aria-describedby","username-help",3,"ngModelChange","ngModel"],["id","username-help"],["selector","input-text-help-text-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"An advisory text can be defined with the semantic "),o(3,"i"),i(4,"small"),r(),i(5," tag."),r()(),o(6,"div",0)(7,"div",1)(8,"label",2),i(9,"Username"),r(),o(10,"input",3),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r(),o(11,"small",4),i(12,"Enter your username to reset your password."),r()()(),m(13,"app-code",5)),t&2&&(l(10),g("ngModel",a.value),l(3),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var Y=(()=>{let e=class e{constructor(){this.code={basic:`<span class="p-input-icon-left">
    <i class="pi pi-search"></i>
    <input type="text" pInputText [(ngModel)]="value" />
</span>`,html:`
<div class="card flex flex-wrap justify-content-center gap-3">
    <span class="p-input-icon-left">
        <i class="pi pi-search"></i>
        <input type="text" pInputText [(ngModel)]="value" />
    </span>
    
    <span class="p-input-icon-right">
        <i class="pi pi-spin pi-spinner"></i>
        <input type="text" pInputText [(ngModel)]="value2" />
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-icons-demo',
    templateUrl: './input-text-icons-demo.html'
})
export class InputTextIconsDemo {
    value: string | undefined;
    
    value2: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["icons-doc"]],decls:17,vars:3,consts:[[1,"card","flex","flex-wrap","justify-content-center","gap-3"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["type","text","pInputText","",3,"ngModelChange","ngModel"],[1,"p-input-icon-right"],[1,"pi","pi-spin","pi-spinner"],["selector","input-text-icons-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either "),o(3,"i"),i(4,".p-input-icon-left"),r(),i(5," or "),o(6,"i"),i(7,"p-input-icon-right"),r(),i(8," class."),r()(),o(9,"div",0)(10,"span",1),m(11,"i",2),o(12,"input",3),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r()(),o(13,"span",4),m(14,"i",5),o(15,"input",3),y("ngModelChange",function(p){return x(a.value2,p)||(a.value2=p),p}),r()()(),m(16,"app-code",6)),t&2&&(l(12),g("ngModel",a.value),l(3),g("ngModel",a.value2),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var Z=(()=>{let e=class e{constructor(){this.code={typescript:"import { InputTextModule } from 'primeng/inputtext';"}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:4,consts:[[3,"hideToggleCode","hideStackBlitz","hideCodeSandbox","code"]],template:function(t,a){t&1&&m(0,"app-code",0),t&2&&c("hideToggleCode",!0)("hideStackBlitz",!0)("hideCodeSandbox",!0)("code",a.code)},dependencies:[u],encapsulation:2});let n=e;return n})();var $=(()=>{let e=class e{constructor(){this.code={basic:'<input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />',html:`
<div class="card flex justify-content-center">
    <input pInputText class="ng-invalid ng-dirty" [(ngModel)]="value" />
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-invalid-demo',
    templateUrl: './input-text-invalid-demo.html'
})
export class InputTextInvalidDemo {
    value: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["invalid-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["pInputText","",1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","input-text-invalid-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Invalid state style is added using the "),o(3,"i"),i(4,"ng-invalid"),r(),i(5," and "),o(6,"i"),i(7,"ng-dirty"),r(),i(8," class to indicate a failed validation."),r()(),o(9,"div",0)(10,"input",1),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r()(),m(11,"app-code",2)),t&2&&(l(10),g("ngModel",a.value),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var ee=(()=>{let e=class e{constructor(){this.code={basic:'<input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />',html:`
<div class="card flex justify-content-center">
    <input pInputText pKeyFilter="int" placeholder="Integers" [(ngModel)]="value" />
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-key-filter-demo',
    templateUrl: './input-text-key-filter-demo.html'
})
export class InputTextKeyFilterDemo {
    value: number | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["key-filter-doc"]],decls:9,vars:2,consts:[["href","/keyfilter"],[1,"card","flex","justify-content-center"],["pInputText","","pKeyFilter","int","placeholder","Integers",3,"ngModelChange","ngModel"],["selector","inputtext-key-filter-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"InputText has built-in key filtering support to block certain keys, refer to "),o(3,"a",0),i(4,"keyfilter"),r(),i(5," page for more information."),r()(),o(6,"div",1)(7,"input",2),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r()(),m(8,"app-code",3)),t&2&&(l(7),g("ngModel",a.value),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f,O],encapsulation:2});let n=e;return n})();var te=(()=>{let e=class e{constructor(){this.code={basic:'<input type="text" pInputText formControlName="text"/>',html:`
<div class="card flex justify-content-center">
    <input type="text" pInputText formControlName="text"/>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'input-text-reactive-forms-demo',
    templateUrl: './input-text-reactive-forms-demo.html'
})
export class InputTextReactiveFormsDemo implements OnInit {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            text: new FormControl<string | null>(null)
        });
    }
}`}}ngOnInit(){this.formGroup=new z({text:new L(null)})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["type","text","pInputText","","formControlName","text"],["selector","input-text-reactive-forms-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"InputText can also be used with reactive forms. In this case, the "),o(3,"i"),i(4,"formControlName"),r(),i(5," property is used to bind the component to a form control."),r()(),o(6,"div",0)(7,"form",1),m(8,"input",2),r()(),m(9,"app-code",3)),t&2&&(l(7),c("formGroup",a.formGroup),l(2),c("code",a.code))},dependencies:[u,C,k,v,h,B,P,U,f],encapsulation:2});let n=e;return n})();var ie=(()=>{let e=class e{constructor(){this.code={basic:`<input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value" />
<input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />
<input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />`,html:`
<div class="card flex flex-column align-items-center gap-3 ">
    <input pInputText type="text" class="p-inputtext-sm" placeholder="Small" [(ngModel)]="value" />
    <input pInputText type="text" placeholder="Normal" [(ngModel)]="value2" />
    <input pInputText type="text" class="p-inputtext-lg" placeholder="Large" [(ngModel)]="value3" />
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-text-sizes-demo',
    templateUrl: './input-text-sizes-demo.html'
})
export class InputTextSizesDemo {
    value: string | undefined;
    value2: string | undefined;
    value3: string | undefined;
}`}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["sizes-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-column","align-items-center","gap-3"],["pInputText","","type","text","placeholder","Small",1,"p-inputtext-sm",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Normal",3,"ngModelChange","ngModel"],["pInputText","","type","text","placeholder","Large",1,"p-inputtext-lg",3,"ngModelChange","ngModel"],["selector","input-text-sizes-demo",3,"code"]],template:function(t,a){t&1&&(o(0,"app-docsectiontext")(1,"p"),i(2,"Apply "),o(3,"i"),i(4,".p-inputtext-sm"),r(),i(5," to reduce the size of the input element or "),o(6,"i"),i(7,".p-inputtext-lg"),r(),i(8," to enlarge it."),r()(),o(9,"div",0)(10,"input",1),y("ngModelChange",function(p){return x(a.value,p)||(a.value=p),p}),r(),o(11,"input",2),y("ngModelChange",function(p){return x(a.value2,p)||(a.value2=p),p}),r(),o(12,"input",3),y("ngModelChange",function(p){return x(a.value3,p)||(a.value3=p),p}),r()(),m(13,"app-code",4)),t&2&&(l(10),g("ngModel",a.value),l(),g("ngModel",a.value2),l(),g("ngModel",a.value3),l(),c("code",a.code))},dependencies:[u,C,v,h,M,f],encapsulation:2});let n=e;return n})();var ne=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:14,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),i(5,"Name"),r(),o(6,"th"),i(7,"Element"),r()()(),o(8,"tbody")(9,"tr")(10,"td"),i(11,"p-inputtext"),r(),o(12,"td"),i(13,"Input element"),r()()()()())},encapsulation:2});let n=e;return n})();var oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=F({type:e}),e.\u0275inj=E({imports:[N,K,_,W,G,A,R,A]});let n=e;return n})();var re=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Z},{id:"basic",label:"Basic",component:q},{id:"reactive-forms",label:"Reactive Forms",component:te},{id:"icons",label:"Icons",component:Y},{id:"keyfilter",label:"Key Filter",component:ee},{id:"sizes",label:"Sizes",component:ie},{id:"helptext",label:"Help Text",component:X},{id:"floatlabel",label:"Float Label",component:Q},{id:"invalid",label:"Invalid",component:$},{id:"disabled",label:"Disabled",component:J},{id:"style",label:"Style",component:ne},{id:"accessibility",label:"Accessibility",component:H}]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular InputText Component","header","InputText","description","InputText is an extension to standard input element with theming and keyfiltering.",3,"docs"]],template:function(t,a){t&1&&m(0,"app-doc",0),t&2&&c("docs",a.docs)},dependencies:[V],styles:[".sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem}.sizes[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]:last-child{margin-bottom:0}.field[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{display:block}"]});let n=e;return n})();var ae=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=F({type:e}),e.\u0275inj=E({imports:[j.forChild([{path:"",component:re,data:{doc:!0}}]),j]});let n=e;return n})();var Tt=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=F({type:e}),e.\u0275inj=E({imports:[N,ae,W,_,oe,A]});let n=e;return n})();export{Tt as InputTextDemoModule};
