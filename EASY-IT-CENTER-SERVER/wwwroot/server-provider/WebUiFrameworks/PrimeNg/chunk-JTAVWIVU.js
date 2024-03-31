import{a as E,b as Z}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as C}from"./chunk-2BMKZP7B.js";import{a as J,w as K}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-RJKOGX2L.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as I,b as X,c as R}from"./chunk-AS5FXEGH.js";import{a as S,b as W}from"./chunk-X2ZDE2AM.js";import{p as $}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{k as c,q as G}from"./chunk-UWMVDULA.js";import{t as T}from"./chunk-N5X6XDRN.js";import{Eb as Q,Gb as k,Hb as H,Jb as m,Kb as w,Nc as y,Pc as F,Qb as D,Sa as h,Sb as U,Ta as s,V as p,Va as N,Ya as P,ab as V,da as f,ea as u,fa as A,ib as x,kb as l,kc as Y,rb as r,sb as a,tb as d,ua as B,va as _,vc as q,yb as M,za as z,zb as O}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var j=(()=>{let e=class e{constructor(o,i,n,b,L,de){this.document=o,this.platformId=i,this.el=n,this.renderer=b,this.viewContainer=L,this.cd=de,this.onLoad=new _,this.window=this.document.defaultView}ngAfterViewInit(){F(this.platformId)&&(this.shouldLoad()&&this.load(),this.isLoaded()||(this.documentScrollListener=this.renderer.listen(this.window,"scroll",()=>{this.shouldLoad()&&(this.load(),this.documentScrollListener&&this.documentScrollListener(),this.documentScrollListener=null)})))}shouldLoad(){if(this.isLoaded())return!1;{let o=this.el.nativeElement.getBoundingClientRect();return this.document.documentElement.clientHeight>=o.top}}load(){this.view=this.viewContainer.createEmbeddedView(this.template),this.onLoad.emit(),this.cd.detectChanges()}isLoaded(){return this.view!=null&&F(this.platformId)}ngOnDestroy(){this.view=null,this.documentScrollListener&&this.documentScrollListener()}};e.\u0275fac=function(i){return new(i||e)(s(q),s(z),s(B),s(P),s(V),s(Y))},e.\u0275dir=A({type:e,selectors:[["","pDefer",""]],contentQueries:function(i,n,b){if(i&1&&Q(b,N,5),i&2){let L;k(L=H())&&(n.template=L.first)}},hostAttrs:[1,"p-element"],outputs:{onLoad:"onLoad"}});let t=e;return t})(),ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[y]});let t=e;return t})();function fe(t,e){t&1&&d(0,"img",4)}var re=(()=>{let e=class e{constructor(o){this.messageService=o,this.code={basic:`<div pDefer (onLoad)="onLoad()">
    <ng-template>
        <img class="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg" alt="Prime" />
    </ng-template>
</div>`,html:`
<div class="card">
    <p style="margin-bottom: 70rem;">
        Content is not loaded yet, scroll down to initialize it.
    </p>
    <p-toast></p-toast>
    <div pDefer (onLoad)="onLoad()">
        <ng-template>
            <img class="w-full md:w-30rem md:block md:mx-auto" src="https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg" alt="Prime" />
        </ng-template>
    </div>
</div>`,typescript:`
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'defer-basic-demo',
    templateUrl: './defer-basic-demo.html',
    providers: [MessageService]
})
export class DeferBasicDemo {
    constructor(private messageService: MessageService) {}

    onLoad() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }
}`}}onLoad(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"})}};e.\u0275fac=function(i){return new(i||e)(s(c))},e.\u0275cmp=f({type:e,selectors:[["basic-doc"]],features:[D([c])],decls:10,vars:1,consts:[[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-basic-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/demo/nature/nature1.jpg","alt","Prime",1,"w-full","md:w-30rem","md:block","md:mx-auto"]],template:function(i,n){i&1&&(r(0,"app-docsectiontext")(1,"p"),m(2,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),a()(),r(3,"div",0)(4,"p",1),m(5,"Content is not loaded yet, scroll down to initialize it."),a(),d(6,"p-toast"),r(7,"div",2),M("onLoad",function(){return n.onLoad()}),x(8,fe,1,0,"ng-template"),a()(),d(9,"app-code",3)),i&2&&(h(9),l("code",n.code))},dependencies:[S,I,j,E],encapsulation:2});let t=e;return t})();function he(t,e){t&1&&(r(0,"tr")(1,"th"),m(2,"Vin"),a(),r(3,"th"),m(4,"Year"),a(),r(5,"th"),m(6,"Brand"),a(),r(7,"th"),m(8,"Color"),a()())}function ve(t,e){if(t&1&&(r(0,"tr")(1,"td"),m(2),a(),r(3,"td"),m(4),a(),r(5,"td"),m(6),a(),r(7,"td"),m(8),a()()),t&2){let g=e.$implicit;h(2),w(g.vin),h(2),w(g.year),h(2),w(g.brand),h(2),w(g.color)}}function ge(t,e){if(t&1&&(r(0,"p-table",4),x(1,he,9,0,"ng-template",5)(2,ve,9,4,"ng-template",6),a()),t&2){let g=O();l("value",g.cars)}}var ae=(()=>{let e=class e{constructor(o,i){this.carService=o,this.messageService=i,this.code={basic:`<div pDefer (onLoad)="initData()">
    <ng-template>
        <p-table [value]="cars" responsiveLayout="scroll">
            <ng-template pTemplate="header">
                <tr>
                    <th>Vin</th>
                    <th>Year</th>
                    <th>Brand</th>
                    <th>Color</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-car>
                <tr>
                    <td>{{car.vin}}</td>
                    <td>{{car.year}}</td>
                    <td>{{car.brand}}</td>
                    <td>{{car.color}}</td>
                </tr>
            </ng-template>
        </p-table>
    </ng-template>
</div>`,html:`
<div class="card">
    <p style="margin-bottom: 70rem;">
        Table is not loaded yet, scroll down to initialize it.
    </p>

    <p-toast></p-toast>
    <div pDefer (onLoad)="initData()">
        <ng-template>
            <p-table [value]="cars" responsiveLayout="scroll">
                <ng-template pTemplate="header">
                    <tr>
                        <th>Vin</th>
                        <th>Year</th>
                        <th>Brand</th>
                        <th>Color</th>
                    </tr>
                </ng-template>
                <ng-template pTemplate="body" let-car>
                    <tr>
                        <td>{{car.vin}}</td>
                        <td>{{car.year}}</td>
                        <td>{{car.brand}}</td>
                        <td>{{car.color}}</td>
                    </tr>
                </ng-template>
            </p-table>
        </ng-template>
    </div>
</div>`,typescript:`
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';

@Component({
    selector: 'defer-data-table-demo',
    templateUrl: './defer-data-table-demo.html',
    providers: [MessageService, CarService]
})
export class DeferDataTableDemo {
    cars: Car[] | undefined;

    constructor(private carService: CarService, private messageService: MessageService) {}

    initData() {
        this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
        this.carService.getCarsSmall().then((cars) => (this.cars = cars));
    }
}`,data:`{
            vin: 'ee8a89d8',
            brand: 'Fiat',
            year: 1987,
            color: 'Maroon'
}`,service:["CarService"]},this.extFiles=[{path:"src/domain/car.ts",content:`
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`}]}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(o=>this.cars=o)}};e.\u0275fac=function(i){return new(i||e)(s(C),s(c))},e.\u0275cmp=f({type:e,selectors:[["datatable-doc"]],features:[D([c,C])],decls:10,vars:2,consts:[[1,"card"],[2,"margin-bottom","70rem"],["pDefer","",3,"onLoad"],["selector","defer-data-table-demo",3,"code","extFiles"],["responsiveLayout","scroll",3,"value"],["pTemplate","header"],["pTemplate","body"]],template:function(i,n){i&1&&(r(0,"app-docsectiontext")(1,"p"),m(2,"Defer is applied to a container element with pDefer directive where content needs to be placed inside an ng-template."),a()(),r(3,"div",0)(4,"p",1),m(5,"Table is not loaded yet, scroll down to initialize it."),a(),d(6,"p-toast"),r(7,"div",2),M("onLoad",function(){return n.initData()}),x(8,ge,3,1,"ng-template"),a()(),d(9,"app-code",3)),i&2&&(h(9),l("code",n.code)("extFiles",n.extFiles))},dependencies:[S,I,j,J,G,E],encapsulation:2});let t=e;return t})();var ne=(()=>{let e=class e{constructor(){this.code={typescript:"import { DeferModule } from 'primeng/defer';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=f({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,n){i&1&&d(0,"app-code",0),i&2&&l("code",n.code)("hideToggleCode",!0)},dependencies:[S],encapsulation:2});let t=e;return t})();var se=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[y,T,W,R,$,ee,K,Z,R]});let t=e;return t})();var De=()=>["Defer"],me=(()=>{let e=class e{constructor(o,i){this.carService=o,this.messageService=i,this.docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:re},{id:"datatable",label:"DataTable",component:ae}]}initData(){this.messageService.add({severity:"success",summary:"Data Initialized",detail:"Render Completed"}),this.carService.getCarsSmall().then(o=>this.cars=o)}};e.\u0275fac=function(i){return new(i||e)(s(C),s(c))},e.\u0275cmp=f({type:e,selectors:[["ng-component"]],features:[D([c])],decls:1,vars:3,consts:[["docTitle","Angular Defer Component","header","Defer","description","Defer postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.",3,"docs","apiDocs"]],template:function(i,n){i&1&&d(0,"app-doc",0),i&2&&l("docs",n.docs)("apiDocs",U(2,De))},dependencies:[X],encapsulation:2});let t=e;return t})();var ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[T.forChild([{path:"",component:me}]),T]});let t=e;return t})();var lt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=u({type:e}),e.\u0275inj=p({imports:[y,ce,se]});let t=e;return t})();export{lt as DeferDemoModule};
