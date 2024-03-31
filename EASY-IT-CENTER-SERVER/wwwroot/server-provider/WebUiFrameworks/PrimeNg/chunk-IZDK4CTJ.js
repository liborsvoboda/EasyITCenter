import{a as f,b as F}from"./chunk-UT7HFFJ3.js";import{a as T,w as M}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as d,b as A,c as C}from"./chunk-AS5FXEGH.js";import{a as h,b as R}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as z}from"./chunk-UWMVDULA.js";import{o as E,t as b}from"./chunk-N5X6XDRN.js";import{Jb as l,Nc as g,Sa as c,Sb as v,V as u,da as p,ea as y,ib as D,kb as m,rb as t,sb as s,tb as n}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var I=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["accessibility-doc"]],decls:16,vars:0,template:function(o,a){o&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),l(3,"Screen Reader"),s(),t(4,"p"),l(5," Skeleton uses "),t(6,"i"),l(7,"aria-hidden"),s(),l(8,' as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a container, you may use '),t(9,"i"),l(10,"aria-busy"),s(),l(11," on the container element as well to indicate the loading process. "),s()(),t(12,"h3"),l(13,"Keyboard Support"),s(),t(14,"p"),l(15,"Component does not include any interactive elements."),s()())},dependencies:[d],encapsulation:2});let i=e;return i})();var N=(()=>{let e=class e{constructor(){this.code={basic:`<div class="border-round border-1 surface-border p-4 surface-card">
    <div class="flex mb-3">
        <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
        <div>
            <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
            <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
            <p-skeleton height=".5rem"></p-skeleton>
        </div>
    </div>
    <p-skeleton width="100%" height="150px"></p-skeleton>
    <div class="flex justify-content-between mt-3">
        <p-skeleton width="4rem" height="2rem"></p-skeleton>
        <p-skeleton width="4rem" height="2rem"></p-skeleton>
    </div>
</div>`,html:`
<div class="card">
    <div class="border-round border-1 surface-border p-4 surface-card">
        <div class="flex mb-3">
            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
            <div>
                <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
                <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
                <p-skeleton height=".5rem"></p-skeleton>
            </div>
        </div>
        <p-skeleton width="100%" height="150px"></p-skeleton>
        <div class="flex justify-content-between mt-3">
            <p-skeleton width="4rem" height="2rem"></p-skeleton>
            <p-skeleton width="4rem" height="2rem"></p-skeleton>
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'skeleton-card-demo',
    templateUrl: './skeleton-card-demo.html'
})
export class SkeletonCardDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["card-doc"]],decls:16,vars:1,consts:[[1,"card"],[1,"border-round","border-1","surface-border","p-4","surface-card"],[1,"flex","mb-3"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-content-between","mt-3"],["width","4rem","height","2rem"],["selector","skeleton-card-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),l(2,"Sample Card implementation using different Skeleton components and PrimeFlex CSS utilities."),s()(),t(3,"div",0)(4,"div",1)(5,"div",2),n(6,"p-skeleton",3),t(7,"div"),n(8,"p-skeleton",4)(9,"p-skeleton",5)(10,"p-skeleton",6),s()(),n(11,"p-skeleton",7),t(12,"div",8),n(13,"p-skeleton",9)(14,"p-skeleton",9),s()()(),n(15,"app-code",10)),o&2&&(c(15),m("code",a.code))},dependencies:[h,d,f],encapsulation:2});let i=e;return i})();var K=()=>({"min-width":"50rem"});function V(i,e){i&1&&(t(0,"tr")(1,"th"),l(2,"Code"),s(),t(3,"th"),l(4,"Name"),s(),t(5,"th"),l(6,"Category"),s(),t(7,"th"),l(8,"Quantity"),s()())}function B(i,e){i&1&&(t(0,"tr")(1,"td"),n(2,"p-skeleton"),s(),t(3,"td"),n(4,"p-skeleton"),s(),t(5,"td"),n(6,"p-skeleton"),s(),t(7,"td"),n(8,"p-skeleton"),s()())}var j=(()=>{let e=class e{constructor(){this.code={basic:`<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
            <td><p-skeleton></p-skeleton></td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" responsiveLayout="scroll">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
                <td><p-skeleton></p-skeleton></td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'skeleton-data-table-demo',
    templateUrl: './skeleton-data-table-demo.html'
})
export class SkeletonDataTableDemo implements OnInit {
    products: any[] | undefined;

    ngOnInit() {
        this.products = Array.from({ length: 5 }).map((_, i) => \`Item #\${i}\`);
    }
}`}}ngOnInit(){this.products=Array.from({length:5}).map((r,o)=>`Item #${o}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["datatable-doc"]],decls:8,vars:4,consts:[[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","skeleton-data-table-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),l(2,"Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities."),s()(),t(3,"div",0)(4,"p-table",1),D(5,V,9,0,"ng-template",2)(6,B,9,0,"ng-template",3),s()(),n(7,"app-code",4)),o&2&&(c(4),m("value",a.products)("tableStyle",v(3,K)),c(3),m("code",a.code))},dependencies:[h,d,T,z,f],encapsulation:2});let i=e;return i})();var L=(()=>{let e=class e{constructor(){this.code={typescript:"import { SkeletonModule } from 'primeng/skeleton';"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&n(0,"app-code",0),o&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let i=e;return i})();var O=(()=>{let e=class e{constructor(){this.code={basic:`<div class="border-round border-1 surface-border p-4 surface-card">
    <ul class="m-0 p-0 list-none">
        <li class="mb-3">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                <div style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                    <p-skeleton width="75%"></p-skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                <div style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                    <p-skeleton width="75%"></p-skeleton>
                </div>
            </div>
        </li>
        <li class="mb-3">
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                <div style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                    <p-skeleton width="75%"></p-skeleton>
                </div>
            </div>
        </li>
        <li>
            <div class="flex">
                <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                <div style="flex: 1">
                    <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                    <p-skeleton width="75%"></p-skeleton>
                </div>
            </div>
        </li>
    </ul>
</div>`,html:`
<div class="card">
    <div class="border-round border-1 surface-border p-4 surface-card">
        <ul class="m-0 p-0 list-none">
            <li class="mb-3">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                    <div style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                        <p-skeleton width="75%"></p-skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                    <div style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                        <p-skeleton width="75%"></p-skeleton>
                    </div>
                </div>
            </li>
            <li class="mb-3">
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                    <div style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                        <p-skeleton width="75%"></p-skeleton>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex">
                    <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
                    <div style="flex: 1">
                        <p-skeleton width="100%" styleClass="mb-2"></p-skeleton>
                        <p-skeleton width="75%"></p-skeleton>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'skeleton-list-demo,
    templateUrl: './skeleton-list-demo.html'
})
export class SkeletonListDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["list-doc"]],decls:31,vars:1,consts:[[1,"card"],[1,"border-round","border-1","surface-border","p-4","surface-card"],[1,"m-0","p-0","list-none"],[1,"mb-3"],[1,"flex"],["shape","circle","size","4rem","styleClass","mr-2"],[2,"flex","1"],["width","100%","styleClass","mb-2"],["width","75%"],["selector","skeleton-list-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),l(2,"Sample List implementation using different Skeleton components and PrimeFlex CSS utilities."),s()(),t(3,"div",0)(4,"div",1)(5,"ul",2)(6,"li",3)(7,"div",4),n(8,"p-skeleton",5),t(9,"div",6),n(10,"p-skeleton",7)(11,"p-skeleton",8),s()()(),t(12,"li",3)(13,"div",4),n(14,"p-skeleton",5),t(15,"div",6),n(16,"p-skeleton",7)(17,"p-skeleton",8),s()()(),t(18,"li",3)(19,"div",4),n(20,"p-skeleton",5),t(21,"div",6),n(22,"p-skeleton",7)(23,"p-skeleton",8),s()()(),t(24,"li")(25,"div",4),n(26,"p-skeleton",5),t(27,"div",6),n(28,"p-skeleton",7)(29,"p-skeleton",8),s()()()()()(),n(30,"app-code",9)),o&2&&(c(30),m("code",a.code))},dependencies:[h,d,f],encapsulation:2});let i=e;return i})();var P=(()=>{let e=class e{constructor(){this.code={basic:`<h5>Rectangle</h5>
<p-skeleton styleClass="mb-2"></p-skeleton>
<p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
<p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
<p-skeleton height="2rem" styleClass="mb-2"></p-skeleton>
<p-skeleton width="10rem" height="4rem"></p-skeleton>

<h5>Rounded</h5>
<p-skeleton styleClass="mb-2" borderRadius="16px"></p-skeleton>
<p-skeleton width="10rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
<p-skeleton width="5rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
<p-skeleton height="2rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
<p-skeleton width="10rem" height="4rem" borderRadius="16px"></p-skeleton>

<h5 class="mt-3">Square</h5>
<p-skeleton size="2rem" styleClass="mr-2"></p-skeleton>
<p-skeleton size="3rem" styleClass="mr-2"></p-skeleton>
<p-skeleton size="4rem" styleClass="mr-2"></p-skeleton>
<p-skeleton size="5rem"></p-skeleton>

<h5 class="mt-3">Circle</h5>
<p-skeleton shape="circle" size="2rem" styleClass="mr-2"></p-skeleton>
<p-skeleton shape="circle" size="3rem" styleClass="mr-2"></p-skeleton>
<p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
<p-skeleton shape="circle" size="5rem"></p-skeleton>`,html:`
<div class="grid grid-nogutter">
    <div class="w-full xl:w-6 p-3">
        <h5>Rectangle</h5>
        <p-skeleton styleClass="mb-2"></p-skeleton>
        <p-skeleton width="10rem" styleClass="mb-2"></p-skeleton>
        <p-skeleton width="5rem" styleClass="mb-2"></p-skeleton>
        <p-skeleton height="2rem" styleClass="mb-2"></p-skeleton>
        <p-skeleton width="10rem" height="4rem"></p-skeleton>
    </div>
    <div class="w-full xl:w-6 p-3">
        <h5>Rounded</h5>
        <p-skeleton styleClass="mb-2" borderRadius="16px"></p-skeleton>
        <p-skeleton width="10rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
        <p-skeleton width="5rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
        <p-skeleton height="2rem" styleClass="mb-2" borderRadius="16px"></p-skeleton>
        <p-skeleton width="10rem" height="4rem" borderRadius="16px"></p-skeleton>
    </div>
    <div class="w-full xl:w-6 p-3">
        <h5 class="mt-3">Square</h5>
        <div class="flex align-items-end">
            <p-skeleton size="2rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton size="3rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton size="4rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton size="5rem"></p-skeleton>
        </div>
    </div>
    <div class="field w-full xl:w-6 p-3">
        <h5 class="mt-3">Circle</h5>
        <div class="flex align-items-end">
            <p-skeleton shape="circle" size="2rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton shape="circle" size="3rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton shape="circle" size="4rem" styleClass="mr-2"></p-skeleton>
            <p-skeleton shape="circle" size="5rem"></p-skeleton>
        </div>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'skeleton-shapes-demo',
    templateUrl: './skeleton-shapes-demo.html',
})
export class SkeletonShapesDemo {}`}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["shapes-doc"]],decls:52,vars:1,consts:[[1,"card","grid","grid-nogutter"],[1,"w-full","xl:w-6","p-3"],["styleClass","mb-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height","2rem","styleClass","mb-2"],["width","10rem","height","4rem"],["styleClass","mb-2","borderRadius","16px"],["width","10rem","styleClass","mb-2","borderRadius","16px"],["width","5rem","styleClass","mb-2","borderRadius","16px"],["height","2rem","styleClass","mb-2","borderRadius","16px"],["width","10rem","height","4rem","borderRadius","16px"],[1,"mt-3"],[1,"flex","align-items-end"],["size","2rem","styleClass","mr-2"],["size","3rem","styleClass","mr-2"],["size","4rem","styleClass","mr-2"],["size","5rem"],[1,"field","w-full","xl:w-6","p-3"],["shape","circle","size","2rem","styleClass","mr-2"],["shape","circle","size","3rem","styleClass","mr-2"],["shape","circle","size","4rem","styleClass","mr-2"],["shape","circle","size","5rem"],["selector","skeleton-shapes-demo",3,"code"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),l(2,"Various shapes and sizes can be created using styling properties like "),t(3,"i"),l(4,"shape"),s(),l(5,", "),t(6,"i"),l(7,"width"),s(),l(8,", "),t(9,"i"),l(10,"height"),s(),l(11,", "),t(12,"i"),l(13,"borderRadius"),s(),l(14," and "),t(15,"i"),l(16,"styleClass"),s(),l(17,"."),s()(),t(18,"div",0)(19,"div",1)(20,"h5"),l(21,"Rectangle"),s(),n(22,"p-skeleton",2)(23,"p-skeleton",3)(24,"p-skeleton",4)(25,"p-skeleton",5)(26,"p-skeleton",6),s(),t(27,"div",1)(28,"h5"),l(29,"Rounded"),s(),n(30,"p-skeleton",7)(31,"p-skeleton",8)(32,"p-skeleton",9)(33,"p-skeleton",10)(34,"p-skeleton",11),s(),t(35,"div",1)(36,"h5",12),l(37,"Square"),s(),t(38,"div",13),n(39,"p-skeleton",14)(40,"p-skeleton",15)(41,"p-skeleton",16)(42,"p-skeleton",17),s()(),t(43,"div",18)(44,"h5",12),l(45,"Circle"),s(),t(46,"div",13),n(47,"p-skeleton",19)(48,"p-skeleton",20)(49,"p-skeleton",21)(50,"p-skeleton",22),s()()(),n(51,"app-code",23)),o&2&&(c(51),m("code",a.code))},dependencies:[h,d,f],encapsulation:2});let i=e;return i})();var G=()=>["/theming"],q=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["style-doc"]],decls:30,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(t(0,"app-docsectiontext")(1,"p"),l(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"a",0),l(4,"theming"),s(),l(5," page."),s()(),t(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),l(11,"Name"),s(),t(12,"th"),l(13,"Element"),s()()(),t(14,"tbody")(15,"tr")(16,"td"),l(17,"p-skeleton"),s(),t(18,"td"),l(19,"Container element."),s()(),t(20,"tr")(21,"td"),l(22,"p-skeleton-circle"),s(),t(23,"td"),l(24,"Container element of a determinate progressbar."),s()(),t(25,"tr")(26,"td"),l(27,"p-skeleton-animation-none"),s(),t(28,"td"),l(29,"Container element of an indeterminate progressbar."),s()()()()()),o&2&&(c(3),m("routerLink",v(1,G)))},dependencies:[E,d],encapsulation:2});let i=e;return i})();var U=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[g,b,R,C,M,F,C]});let i=e;return i})();var H=()=>["Skeleton"],Q=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:L},{id:"shapes",label:"Shapes",component:P},{id:"card",label:"Card",component:N},{id:"list",label:"List",component:O},{id:"datatable",label:"DataTable",component:j},{id:"style",label:"Style",component:q},{id:"accessibility",label:"Accessibility",component:I}]}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Skeleton Component","header","Skeleton","description","Skeleton is a placeholder to display instead of the actual content.",3,"docs","apiDocs"]],template:function(o,a){o&1&&n(0,"app-doc",0),o&2&&m("docs",a.docs)("apiDocs",v(2,H))},dependencies:[A],styles:[".custom-skeleton[_ngcontent-%COMP%]{border:1px solid var(--surface-d);border-borderRadius:4px}.custom-skeleton[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}"]});let i=e;return i})();var $=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[b.forChild([{path:"",component:Q}]),b]});let i=e;return i})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=y({type:e}),e.\u0275inj=u({imports:[g,$,C,U]});let i=e;return i})();export{Ke as SkeletonDemoModule};
