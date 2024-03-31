import{a as X,b as Y}from"./chunk-C5QF4TVV.js";import{a as H,b as J}from"./chunk-QGLUNQP3.js";import"./chunk-Z2ZAEWPQ.js";import{a as b,b as Q,c as N}from"./chunk-AS5FXEGH.js";import{a as h,b as O}from"./chunk-X2ZDE2AM.js";import{e as K,i as R,p as L,r as g,s as z}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as q,r as D,y as V}from"./chunk-UWMVDULA.js";import{t as I}from"./chunk-N5X6XDRN.js";import{Ab as v,Bb as k,Cc as S,Ic as B,Jb as l,Nb as A,Nc as x,Ob as M,Pb as w,Sa as m,V as s,da as d,ea as f,jb as T,kb as c,rb as i,sb as p,tb as r}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ct=["*"],G=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["p-inputGroup"]],hostAttrs:[1,"p-element","p-inputgroup"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:ct,decls:2,vars:3,consts:[[1,"p-inputgroup",3,"ngClass","ngStyle"]],template:function(o,n){o&1&&(v(),i(0,"div",0),k(1),p()),o&2&&(c("ngClass",n.styleClass)("ngStyle",n.style),T("data-pc-name","inputgroup"))},dependencies:[S,B],encapsulation:2});let e=t;return e})(),Z=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=s({imports:[x,D]});let e=t;return e})();var dt=["*"],C=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["p-inputGroupAddon"]],hostAttrs:[1,"p-element","p-inputgroup-addon"],inputs:{style:"style",styleClass:"styleClass"},ngContentSelectors:dt,decls:2,vars:3,consts:[[3,"ngClass","ngStyle"]],template:function(o,n){o&1&&(v(),i(0,"div",0),k(1),p()),o&2&&(c("ngClass",n.styleClass)("ngStyle",n.style),T("data-pc-name","inputgroupaddon"))},dependencies:[S,B],encapsulation:2});let e=t;return e})(),$=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=s({imports:[x,D]});let e=t;return e})();var _=(()=>{let t=class t{constructor(){this.code={basic:`<p-inputGroup>
    <p-inputGroupAddon>
        <i class="pi pi-user"></i>
    </p-inputGroupAddon>
    <input pInputText placeholder="Username" />
</p-inputGroup>
<p-inputGroup>
    <p-inputGroupAddon>$</p-inputGroupAddon>
    <input type="text" pInputText placeholder="Price" />
    <p-inputGroupAddon>.00</p-inputGroupAddon>
</p-inputGroup>
<p-inputGroup>
    <p-inputGroupAddon>www</p-inputGroupAddon>
    <input type="text" pInputText placeholder="Website" />
</p-inputGroup>`,html:`<div class="card flex flex-column md:flex-row gap-3">
    <p-inputGroup>
        <p-inputGroupAddon>
            <i class="pi pi-user"></i>
        </p-inputGroupAddon>
        <input pInputText placeholder="Username" />
    </p-inputGroup>
    <p-inputGroup>
        <p-inputGroupAddon>$</p-inputGroupAddon>
        <input type="text" pInputText placeholder="Price" />
        <p-inputGroupAddon>.00</p-inputGroupAddon>
    </p-inputGroup>
    <p-inputGroup>
        <p-inputGroupAddon>www</p-inputGroupAddon>
        <input type="text" pInputText placeholder="Website" />
    </p-inputGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-group-basic-demo',
    templateUrl: './input-group-basic-demo.html'
})
export class InputGroupBasicDemo { }`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["basic-doc"]],decls:22,vars:1,consts:[[1,"card","flex","flex-column","md:flex-row","gap-3"],[1,"pi","pi-user"],["pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Price"],["type","text","pInputText","","placeholder","Website"],["selector","input-group-basic-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"An InputGroup is created by wrapping the add-ons inside the "),i(3,"i"),l(4,"p-inputGroup"),p(),l(5," element."),p()(),i(6,"div",0)(7,"p-inputGroup")(8,"p-inputGroupAddon"),r(9,"i",1),p(),r(10,"input",2),p(),i(11,"p-inputGroup")(12,"p-inputGroupAddon"),l(13,"$"),p(),r(14,"input",3),i(15,"p-inputGroupAddon"),l(16,".00"),p()(),i(17,"p-inputGroup")(18,"p-inputGroupAddon"),l(19,"www"),p(),r(20,"input",4),p()(),r(21,"app-code",5)),o&2&&(m(21),c("code",n.code))},dependencies:[h,b,g,G,C],encapsulation:2});let e=t;return e})();var tt=(()=>{let t=class t{constructor(){this.code={basic:`<p-inputGroup>
    <button type="button" pButton label="Search"></button>
    <input type="text" pInputText placeholder="Keyword" />
</p-inputGroup>
<p-inputGroup>
    <input type="text" pInputText placeholder="Keyword" />
    <button type="button" pButton icon="pi pi-search" class="p-button-warning"></button>
</p-inputGroup>
<p-inputGroup>
    <button type="button" pButton icon="pi pi-check" class="p-button-success"></button>
    <input type="text" pInputText placeholder="Vote" />
    <button type="button" pButton icon="pi pi-times" class="p-button-danger"></button>
</p-inputGroup>`,html:`<div class="card flex flex-column md:flex-row gap-3">
    <p-inputGroup>
        <button type="button" pButton label="Search"></button>
        <input type="text" pInputText placeholder="Keyword" />
    </p-inputGroup>
    <p-inputGroup>
        <input type="text" pInputText placeholder="Keyword" />
        <button type="button" pButton icon="pi pi-search" class="p-button-warning"></button>
    </p-inputGroup>
    <p-inputGroup>
        <button type="button" pButton icon="pi pi-check" class="p-button-success"></button>
        <input type="text" pInputText placeholder="Vote" />
        <button type="button" pButton icon="pi pi-times" class="p-button-danger"></button>
    </p-inputGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-group-button-demo',
    templateUrl: './input-group-button-demo.html'
})
export class InputGroupButtonDemo {
}`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["button-doc"]],decls:15,vars:1,consts:[[1,"card","flex","flex-column","md:flex-row","gap-3"],["type","button","pButton","","label","Search"],["type","text","pInputText","","placeholder","Keyword"],["type","button","pButton","","icon","pi pi-search",1,"p-button-warning"],["type","button","pButton","","icon","pi pi-check",1,"p-button-success"],["type","text","pInputText","","placeholder","Vote"],["type","button","pButton","","icon","pi pi-times",1,"p-button-danger"],["selector","input-group-button-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"Buttons can be placed at either side of an input element."),p()(),i(3,"div",0)(4,"p-inputGroup"),r(5,"button",1)(6,"input",2),p(),i(7,"p-inputGroup"),r(8,"input",2)(9,"button",3),p(),i(10,"p-inputGroup"),r(11,"button",4)(12,"input",5)(13,"button",6),p()(),r(14,"app-code",7)),o&2&&(m(14),c("code",n.code))},dependencies:[h,b,g,V,G],encapsulation:2});let e=t;return e})();var et=(()=>{let t=class t{constructor(){this.checkbox1=!1,this.checkbox2=!1,this.code={basic:`<p-inputGroup>
    <p-inputGroupAddon><p-checkbox [(ngModel)]="checkbox1" [binary]="true"></p-checkbox></p-inputGroupAddon>
    <input type="text" pInputText placeholder="Username" />
</p-inputGroup>
<p-inputGroup>
    <input type="text" pInputText placeholder="Price" />
    <p-inputGroupAddon><p-radioButton name="category" value="price" [(ngModel)]="category"></p-radioButton></p-inputGroupAddon>
</p-inputGroup>
<p-inputGroup>
    <p-inputGroupAddon><p-checkbox [(ngModel)]="checkbox2" [binary]="true"></p-checkbox></p-inputGroupAddon>
    <input type="text" pInputText placeholder="Website" />
    <p-inputGroupAddon><p-radioButton name="category" value="site" [(ngModel)]="category"></p-radioButton></p-inputGroupAddon>
</p-inputGroup>`,html:`<div class="card flex flex-column md:flex-row gap-3">
    <p-inputGroup>
        <p-inputGroupAddon><p-checkbox [(ngModel)]="checkbox1" [binary]="true"></p-checkbox></p-inputGroupAddon>
        <input type="text" pInputText placeholder="Username" />
    </p-inputGroup>
    <p-inputGroup>
        <input type="text" pInputText placeholder="Price" />
        <p-inputGroupAddon><p-radioButton name="category" value="price" [(ngModel)]="category"></p-radioButton></p-inputGroupAddon>
    </p-inputGroup>
    <p-inputGroup>
        <p-inputGroupAddon><p-checkbox [(ngModel)]="checkbox2" [binary]="true"></p-checkbox></p-inputGroupAddon>
        <input type="text" pInputText placeholder="Website" />
        <p-inputGroupAddon><p-radioButton name="category" value="site" [(ngModel)]="category"></p-radioButton></p-inputGroupAddon>
    </p-inputGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-group-checkbox-demo',
    templateUrl: './input-group-checkbox-demo.html'
})
export class InputGroupCheckboxDemo {
    checkbox1: boolean = false;

    checkbox2: boolean = false;

    category: string | undefined;
}`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["checkbox-doc"]],decls:19,vars:7,consts:[[1,"card","flex","flex-column","md:flex-row","gap-3"],[3,"ngModelChange","ngModel","binary"],["type","text","pInputText","","placeholder","Username"],["type","text","pInputText","","placeholder","Price"],["name","category","value","price",3,"ngModelChange","ngModel"],["type","text","pInputText","","placeholder","Website"],["name","category","value","site",3,"ngModelChange","ngModel"],["selector","input-group-checkbox-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"Checkbox and RadioButton components can be combined with an input element under the same group."),p()(),i(3,"div",0)(4,"p-inputGroup")(5,"p-inputGroupAddon")(6,"p-checkbox",1),w("ngModelChange",function(a){return M(n.checkbox1,a)||(n.checkbox1=a),a}),p()(),r(7,"input",2),p(),i(8,"p-inputGroup"),r(9,"input",3),i(10,"p-inputGroupAddon")(11,"p-radioButton",4),w("ngModelChange",function(a){return M(n.category,a)||(n.category=a),a}),p()()(),i(12,"p-inputGroup")(13,"p-inputGroupAddon")(14,"p-checkbox",1),w("ngModelChange",function(a){return M(n.checkbox2,a)||(n.checkbox2=a),a}),p()(),r(15,"input",5),i(16,"p-inputGroupAddon")(17,"p-radioButton",6),w("ngModelChange",function(a){return M(n.category,a)||(n.category=a),a}),p()()()(),r(18,"app-code",7)),o&2&&(m(6),A("ngModel",n.checkbox1),c("binary",!0),m(5),A("ngModel",n.category),m(3),A("ngModel",n.checkbox2),c("binary",!0),m(3),A("ngModel",n.category),m(),c("code",n.code))},dependencies:[h,b,K,R,g,X,H,G,C],encapsulation:2});let e=t;return e})();var ot=(()=>{let t=class t{constructor(){this.code={typescript:`import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,n){o&1&&r(0,"app-code",0),o&2&&c("code",n.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let e=t;return e})();var pt=(()=>{let t=class t{constructor(){this.code={basic:`<p-inputGroup class="w-full md:w-30rem">
    <p-inputGroupAddon>
        <i class="pi pi-clock"></i>
    </p-inputGroupAddon>
    <p-inputGroupAddon>
        <i class="pi pi-star-fill"></i>
    </p-inputGroupAddon>
    <input type="text" pInputText placeholder="Price" />
    <p-inputGroupAddon>$</p-inputGroupAddon>
    <p-inputGroupAddon>.00</p-inputGroupAddon>
</p-inputGroup>`,html:`<div class="card flex justify-content-center">
    <p-inputGroup class="w-full md:w-30rem">
        <p-inputGroupAddon>
            <i class="pi pi-clock"></i>
        </p-inputGroupAddon>
        <p-inputGroupAddon>
            <i class="pi pi-star-fill"></i>
        </p-inputGroupAddon>
        <input type="text" pInputText placeholder="Price" />
        <p-inputGroupAddon>$</p-inputGroupAddon>
        <p-inputGroupAddon>.00</p-inputGroupAddon>
    </p-inputGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'input-group-multiple-demo',
    templateUrl: './input-group-multiple-demo.html'
})
export class InputGroupMultipleDemo {
}`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["multiple-doc"]],decls:15,vars:1,consts:[[1,"card","flex","justify-content-center"],[1,"w-full","md:w-30rem"],[1,"pi","pi-clock"],[1,"pi","pi-star-fill"],["type","text","pInputText","","placeholder","Price"],["selector","input-group-multiple-demo",3,"code"]],template:function(o,n){o&1&&(i(0,"app-docsectiontext")(1,"p"),l(2,"Multiple add-ons can be placed inside the same group."),p()(),i(3,"div",0)(4,"p-inputGroup",1)(5,"p-inputGroupAddon"),r(6,"i",2),p(),i(7,"p-inputGroupAddon"),r(8,"i",3),p(),r(9,"input",4),i(10,"p-inputGroupAddon"),l(11,"$"),p(),i(12,"p-inputGroupAddon"),l(13,".00"),p()()(),r(14,"app-code",5)),o&2&&(m(14),c("code",n.code))},dependencies:[h,b,g,G,C],encapsulation:2});let e=t;return e})();var nt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=s({imports:[x,I,O,N,L,z,q,Y,J,Z,$,N]});let e=t;return e})();var it=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:ot},{id:"basic",label:"Basic",component:_},{id:"multiple",label:"Multiple",component:pt},{id:"button",label:"Button",component:tt},{id:"checkbox",label:"Checkbox & RadioButton",component:et}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[["docTitle","Angular InputGroup Component","header","InputGroup","description","Text, icon, buttons and other content can be grouped next to an input.",3,"docs"]],template:function(o,n){o&1&&r(0,"app-doc",0),o&2&&c("docs",n.docs)},dependencies:[Q],encapsulation:2});let e=t;return e})();var rt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=s({imports:[I.forChild([{path:"",component:it}]),I]});let e=t;return e})();var ae=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=f({type:t}),t.\u0275inj=s({imports:[x,rt,nt]});let e=t;return e})();export{ae as InputGroupDemoModule};
