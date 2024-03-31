import{a as oe,b as ae}from"./chunk-EE57ZIMK.js";import"./chunk-UEO6IQ7K.js";import{a as Q,w as X}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import{a as te}from"./chunk-NZVHRD6T.js";import{a as Y,b as ee}from"./chunk-H6W5JTHG.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as _,b as ie,c as $}from"./chunk-AS5FXEGH.js";import{a as f,b as re}from"./chunk-X2ZDE2AM.js";import{p as G}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{a as H,q as J}from"./chunk-UWMVDULA.js";import{t as z}from"./chunk-N5X6XDRN.js";import{Cb as q,Ec as F,Fc as B,Jb as s,Kb as w,Lb as T,Na as K,Nc as L,Sa as c,Sb as R,Ta as x,V as y,Ya as W,_a as k,ca as j,da as u,ea as S,fa as U,ib as h,kb as l,ma as v,na as D,rb as d,sb as a,tb as p,ua as V,va as C,xb as O,yb as g,zb as m}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var de=(()=>{let e=class e{constructor(){this.code={typescript:"import { DragDropModule } from 'primeng/dragdrop';"}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,o){r&1&&p(0,"app-code",0),r&2&&l("code",o.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let i=e;return i})();var E=(()=>{let e=class e{constructor(t,r,o){this.el=t,this.zone=r,this.renderer=o,this.onDragStart=new C,this.onDragEnd=new C,this.onDrag=new C,this._pDraggableDisabled=!1}get pDraggableDisabled(){return this._pDraggableDisabled}set pDraggableDisabled(t){this._pDraggableDisabled=t,this._pDraggableDisabled?this.unbindMouseListeners():(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}ngAfterViewInit(){this.pDraggableDisabled||(this.el.nativeElement.draggable=!0,this.bindMouseListeners())}bindDragListener(){this.dragListener||this.zone.runOutsideAngular(()=>{this.dragListener=this.renderer.listen(this.el.nativeElement,"drag",this.drag.bind(this))})}unbindDragListener(){this.dragListener&&this.zone.runOutsideAngular(()=>{this.dragListener&&this.dragListener(),this.dragListener=null})}bindMouseListeners(){!this.mouseDownListener&&!this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.mousedown.bind(this)),this.mouseUpListener=this.renderer.listen(this.el.nativeElement,"mouseup",this.mouseup.bind(this))})}unbindMouseListeners(){this.mouseDownListener&&this.mouseUpListener&&this.zone.runOutsideAngular(()=>{this.mouseDownListener&&this.mouseDownListener(),this.mouseUpListener&&this.mouseUpListener(),this.mouseDownListener=null,this.mouseUpListener=null})}drag(t){this.onDrag.emit(t)}dragStart(t){this.allowDrag()&&!this.pDraggableDisabled?(this.dragEffect&&(t.dataTransfer.effectAllowed=this.dragEffect),t.dataTransfer.setData("text",this.scope),this.onDragStart.emit(t),this.bindDragListener()):t.preventDefault()}dragEnd(t){this.onDragEnd.emit(t),this.unbindDragListener()}mousedown(t){this.handle=t.target}mouseup(t){this.handle=null}allowDrag(){return this.dragHandle&&this.handle?H.matches(this.handle,this.dragHandle):!0}ngOnDestroy(){this.unbindDragListener(),this.unbindMouseListeners()}};e.\u0275fac=function(r){return new(r||e)(x(V),x(k),x(W))},e.\u0275dir=U({type:e,selectors:[["","pDraggable",""]],hostAttrs:[1,"p-element"],hostBindings:function(r,o){r&1&&g("dragstart",function(b){return o.dragStart(b)})("dragend",function(b){return o.dragEnd(b)})},inputs:{scope:[j.None,"pDraggable","scope"],dragEffect:"dragEffect",dragHandle:"dragHandle",pDraggableDisabled:"pDraggableDisabled"},outputs:{onDragStart:"onDragStart",onDragEnd:"onDragEnd",onDrag:"onDrag"}});let i=e;return i})(),M=(()=>{let e=class e{constructor(t,r,o){this.el=t,this.zone=r,this.renderer=o,this.pDroppableDisabled=!1,this.onDragEnter=new C,this.onDragLeave=new C,this.onDrop=new C}ngAfterViewInit(){this.pDroppableDisabled||this.bindDragOverListener()}bindDragOverListener(){this.dragOverListener||this.zone.runOutsideAngular(()=>{this.dragOverListener=this.renderer.listen(this.el.nativeElement,"dragover",this.dragOver.bind(this))})}unbindDragOverListener(){this.dragOverListener&&this.zone.runOutsideAngular(()=>{this.dragOverListener&&this.dragOverListener(),this.dragOverListener=null})}dragOver(t){t.preventDefault()}drop(t){this.allowDrop(t)&&(H.removeClass(this.el.nativeElement,"p-draggable-enter"),t.preventDefault(),this.onDrop.emit(t))}dragEnter(t){t.preventDefault(),this.dropEffect&&(t.dataTransfer.dropEffect=this.dropEffect),H.addClass(this.el.nativeElement,"p-draggable-enter"),this.onDragEnter.emit(t)}dragLeave(t){t.preventDefault(),this.el.nativeElement.contains(t.relatedTarget)||(H.removeClass(this.el.nativeElement,"p-draggable-enter"),this.onDragLeave.emit(t))}allowDrop(t){let r=t.dataTransfer.getData("text");if(typeof this.scope=="string"&&r==this.scope)return!0;if(Array.isArray(this.scope)){for(let o=0;o<this.scope.length;o++)if(r==this.scope[o])return!0}return!1}ngOnDestroy(){this.unbindDragOverListener()}};e.\u0275fac=function(r){return new(r||e)(x(V),x(k),x(W))},e.\u0275dir=U({type:e,selectors:[["","pDroppable",""]],hostAttrs:[1,"p-element"],hostBindings:function(r,o){r&1&&g("drop",function(b){return o.drop(b)})("dragenter",function(b){return o.dragEnter(b)})("dragleave",function(b){return o.dragLeave(b)})},inputs:{scope:[j.None,"pDroppable","scope"],pDroppableDisabled:"pDroppableDisabled",dropEffect:"dropEffect"},outputs:{onDragEnter:"onDragEnter",onDragLeave:"onDragLeave",onDrop:"onDrop"}});let i=e;return i})(),ne=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=y({imports:[L]});let i=e;return i})();function fe(i,e){if(i&1){let n=O();d(0,"div")(1,"div",8),g("onDragStart",function(){let r=v(n).$implicit,o=m();return D(o.dragStart(r))})("onDragEnd",function(){v(n);let r=m();return D(r.dragEnd())}),d(2,"div",9),p(3,"img",10),a(),d(4,"div",11)(5,"h5",12),s(6),a(),p(7,"i",13),d(8,"span",14),s(9),a()(),d(10,"div",15)(11,"h6",12),s(12),a(),p(13,"p-tag",16),a()()()}if(i&2){let n=e.$implicit,t=m();c(3),q("src","https://primefaces.org/cdn/primeng/images/demo/product/",n.image,"",K),l("alt",n.name),c(3),w(n.name),c(3),w(n.category),c(3),w(n.price),c(),l("value",n.inventoryStatus)("severity",t.getSeverity(n.inventoryStatus))}}function be(i,e){i&1&&(d(0,"tr")(1,"th"),s(2,"ID"),a(),d(3,"th"),s(4,"Category"),a(),d(5,"th"),s(6,"Name"),a(),d(7,"th"),s(8,"Price"),a()())}function ve(i,e){if(i&1&&(d(0,"tr")(1,"td"),s(2),a(),d(3,"td"),s(4),a(),d(5,"td"),s(6),a(),d(7,"td"),s(8),a()()),i&2){let n=e.$implicit;c(2),w(n.id),c(2),w(n.category),c(2),w(n.name),c(2),w(n.price)}}var ce=(()=>{let e=class e{constructor(t){this.productService=t,this.code={basic:`<div class="card grid grid-nogutter">
    <div class="col-12 md:col-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                <div class="image-container">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                </div>
                <div class="product-list-detail">
                    <h5 class="mb-2">{{product.name}}</h5>
                    <i class="pi pi-tag product-category-icon"></i>
                    <span class="product-category">{{product.category}}</span>
                    </div>
                    <div class="product-list-action">
                    <h6 class="mb-2">{{product.price}}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                    <td>{{product.id}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,html:`
<div class="card grid grid-nogutter">
    <div class="col-12 md:col-6 drag-column">
        <div *ngFor="let product of availableProducts">
            <div class="product-item" pDraggable="products" (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                <div class="image-container">
                        <img src="https://primefaces.org/cdn/primeng/images/demo/product/{{ product.image }}"[alt]="product.name" class="product-image" />
                </div>
                <div class="product-list-detail">
                    <h5 class="mb-2">{{product.name}}</h5>
                    <i class="pi pi-tag product-category-icon"></i>
                    <span class="product-category">{{product.category}}</span>
                    </div>
                    <div class="product-list-action">
                    <h6 class="mb-2">{{product.price}}</h6>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-6 drop-column" pDroppable="products" (onDrop)="drop()">
    <p-table [value]="selectedProducts">
        <ng-template pTemplate="header">
            <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                    <td>{{product.id}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                </tr>
            </ng-template>
        </p-table>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'drag-drop-data-table-demo',
    templateUrl: './drag-drop-data-table-demo.html',
    styleUrls: ['./drag-drop-data-table-demo.scss']
})
export class DragDropDataTableDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    } 

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}`,scss:`
:host ::ng-deep {
    .drag-column {
        padding-right: .5em;
    }
    
    .drop-column {
        border: 1px solid transparent;
        transition: border-color .2s;
    
        &.p-draggable-enter {
            border-color: var(--primary-color); 
        }
    }
    
    .product-item {
        display: flex;
        align-items: center;
        padding: 1rem;
        width: 100%;
        border-bottom: 1px solid var(--surface-d);
    
        img {
            width: 75px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
            margin-right: 1rem;
        }
    
        .product-list-detail {
            flex: 1 1 0;
        }
    
        .product-list-action {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    
        .product-category-icon {
            vertical-align: middle;
            margin-right: .5rem;
        }
    
        .product-category {
            vertical-align: middle;
            line-height: 1;
        }
    }
    
    [pDraggable] {
        cursor: move;
    }
    
    @media screen and (max-width: 576px) {
        .product-item {
            flex-wrap: wrap;
    
            .image-container {
                width: 100%;
                text-align: center;
            }
    
            img {
                margin: 0 0 1rem 0;
                width: 100px;
            }
        }
    }
}`,data:`
...
{
    "id": "1000",
    "code": "f230fh0g3",
    "name": "Bamboo Watch",
    "description": "Product Description",
    "image": "bamboo-watch.jpg",
    "price": 65,
    "category": "Accessories",
    "quantity": 24,
    "inventoryStatus": "INSTOCK",
    "rating": 5
},
...`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.selectedProducts=[],this.productService.getProductsSmall().then(t=>this.availableProducts=t)}dragStart(t){this.draggedProduct=t}drop(){if(this.draggedProduct){let t=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((r,o)=>o!=t),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(t){let r=-1;for(let o=0;o<this.availableProducts.length;o++)if(t.id===this.availableProducts[o].id){r=o;break}return r}getSeverity(t){switch(t){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};e.\u0275fac=function(r){return new(r||e)(x(te))},e.\u0275cmp=u({type:e,selectors:[["drag-drop-data-table-demo"]],decls:11,vars:4,consts:[[1,"card","grid","grid-nogutter"],[1,"col-12","md:col-6","drag-column"],[4,"ngFor","ngForOf"],["pDroppable","products",1,"col-12","md:col-6","drop-column",3,"onDrop"],[3,"value"],["pTemplate","header"],["pTemplate","body"],["selector","drag-drop-data-table-demo",3,"code","extFiles"],["pDraggable","products",1,"product-item",3,"onDragStart","onDragEnd"],[1,"image-container"],[1,"product-image",3,"src","alt"],[1,"product-list-detail"],[1,"mb-2"],[1,"pi","pi-tag","product-category-icon"],[1,"product-category"],[1,"product-list-action"],[3,"value","severity"]],template:function(r,o){r&1&&(d(0,"app-docsectiontext")(1,"p"),s(2,"Drag and Drop to Table"),a()(),d(3,"div",0)(4,"div",1),h(5,fe,14,8,"div",2),a(),d(6,"div",3),g("onDrop",function(){return o.drop()}),d(7,"p-table",4),h(8,be,9,0,"ng-template",5)(9,ve,9,4,"ng-template",6),a()()(),p(10,"app-code",7)),r&2&&(c(5),l("ngForOf",o.availableProducts),c(2),l("value",o.selectedProducts),c(3),l("code",o.code)("extFiles",o.extFiles))},dependencies:[F,f,_,E,M,Q,J,Y],encapsulation:2});let i=e;return i})();function De(i,e){if(i&1){let n=O();d(0,"li",8),g("onDragStart",function(){let r=v(n).$implicit,o=m();return D(o.dragStart(r))})("onDragEnd",function(){v(n);let r=m();return D(r.dragEnd())}),s(1),a()}if(i&2){let n=e.$implicit;c(),T(" ",n.name," ")}}function xe(i,e){if(i&1&&(d(0,"li",10),s(1),a()),i&2){let n=e.$implicit;c(),T(" ",n.name," ")}}function Pe(i,e){if(i&1&&(d(0,"ul",2),h(1,xe,2,1,"li",9),a()),i&2){let n=m();c(),l("ngForOf",n.selectedProducts)}}var le=(()=>{let e=class e{constructor(){this.code={basic:`<div class="p-2 border-1 surface-border border-round w-15rem">
    <ul class="list-none flex flex-column gap-2 p-0 m-0">
        <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
            {{product.name}}
        </li>
    </ul>
</div>
<div class="p-2 border-1 surface-border border-round w-15rem" pDroppable (onDrop)="drop()">
    <p class="text-center surface-border border-bottom-1">Drop Zone</p>
    <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
        <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
            {{product.name}}
        </li>
    </ul>
</div>`,html:`
<div class="card flex flex-wrap gap-3">
    <div class="p-2 border-1 surface-border border-round w-15rem">
        <ul class="list-none flex flex-column gap-2 p-0 m-0">
            <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                {{product.name}}
            </li>
        </ul>
    </div>
    <div class="p-2 border-1 surface-border border-round w-15rem" pDroppable (onDrop)="drop()">
        <p class="text-center surface-border border-bottom-1">Drop Zone</p>
        <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
            <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
                {{product.name}}
            </li>
        </ul>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'drag-drop-basic-demo',
    templateUrl: './drag-drop-basic-demo.html',
    styleUrls: ['./drag-drop-basic-demo.scss']
})
export class DragDropBasicDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}`,scss:`
:host ::ng-deep {
    [pDraggable] {
        cursor: move;
    }
}`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.selectedProducts=[],this.availableProducts=[{id:"1",name:"Black Watch"},{id:"2",name:"Bamboo Watch"}]}dragStart(t){this.draggedProduct=t}drop(){if(this.draggedProduct){let t=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((r,o)=>o!=t),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(t){let r=-1;for(let o=0;o<this.availableProducts.length;o++)if(t.id===this.availableProducts[o].id){r=o;break}return r}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["drag-drop-basic-demo"]],decls:17,vars:4,consts:[[1,"card","flex","flex-wrap","gap-3"],[1,"p-2","border-1","surface-border","border-round","w-15rem"],[1,"list-none","flex","flex-column","gap-2","p-0","m-0"],["class","p-2 border-round shadow-1","pDraggable","",3,"onDragStart","onDragEnd",4,"ngFor","ngForOf"],["pDroppable","",1,"p-2","border-1","surface-border","border-round","w-15rem",3,"onDrop"],[1,"text-center","surface-border","border-bottom-1"],["class","list-none flex flex-column gap-2 p-0 m-0",4,"ngIf"],["selector","drag-drop-basic-demo",3,"code","extFiles"],["pDraggable","",1,"p-2","border-round","shadow-1",3,"onDragStart","onDragEnd"],["class","p-2 border-round shadow-1",4,"ngFor","ngForOf"],[1,"p-2","border-round","shadow-1"]],template:function(r,o){r&1&&(d(0,"app-docsectiontext")(1,"p")(2,"i"),s(3,"pDraggable"),a(),s(4," and "),d(5,"i"),s(6,"pDroppable"),a(),s(7," are attached to a target element to add drag-drop behavior. The value of a Directive attribute is required and it defines the scope to match draggables with droppables. Droppable scope can also be an array to accept multiple droppables. "),a()(),d(8,"div",0)(9,"div",1)(10,"ul",2),h(11,De,2,1,"li",3),a()(),d(12,"div",4),g("onDrop",function(){return o.drop()}),d(13,"p",5),s(14,"Drop Zone"),a(),h(15,Pe,2,1,"ul",6),a()(),p(16,"app-code",7)),r&2&&(c(11),l("ngForOf",o.availableProducts),c(4),l("ngIf",o.selectedProducts),c(),l("code",o.code)("extFiles",o.extFiles))},dependencies:[F,B,f,_,E,M],encapsulation:2});let i=e;return i})();function ye(i,e){if(i&1){let n=O();d(0,"li",8),g("onDragStart",function(){let r=v(n).$implicit,o=m();return D(o.dragStart(r))})("onDragEnd",function(){v(n);let r=m();return D(r.dragEnd())}),s(1),a()}if(i&2){let n=e.$implicit;c(),T(" ",n.name," ")}}function Se(i,e){if(i&1&&(d(0,"li",10),s(1),a()),i&2){let n=e.$implicit;c(),T(" ",n.name," ")}}function we(i,e){if(i&1&&(d(0,"ul",2),h(1,Se,2,1,"li",9),a()),i&2){let n=m();c(),l("ngForOf",n.selectedProducts)}}var pe=(()=>{let e=class e{constructor(){this.code={basic:`<div class="p-2 border-1 surface-border border-round w-15rem h-10rem">
    <ul class="list-none flex flex-column gap-2 p-0 m-0">
        <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
            {{product.name}}
        </li>
    </ul>
</div>
<div class="p-2 w-15rem h-10rem drop-column" pDroppable (onDrop)="drop()">
    <p class="text-center surface-border border-bottom-1">Drop Zone</p>
    <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
        <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
            {{product.name}}
        </li>
    </ul>
</div>`,html:`
<div class="card flex flex-wrap gap-3">
    <div class="p-2 border-1 surface-border border-round w-15rem h-10rem">
        <ul class="list-none flex flex-column gap-2 p-0 m-0">
            <li *ngFor="let product of availableProducts" class="p-2 border-round shadow-1" pDraggable (onDragStart)="dragStart(product)" (onDragEnd)="dragEnd()">
                {{product.name}}
            </li>
        </ul>
    </div>
    <div class="p-2 w-15rem h-10rem drop-column" pDroppable (onDrop)="drop()">
        <p class="text-center surface-border border-bottom-1">Drop Zone</p>
        <ul class="list-none flex flex-column gap-2 p-0 m-0" *ngIf="selectedProducts" >
            <li *ngFor="let product of selectedProducts" class="p-2 border-round shadow-1">
                {{product.name}}
            </li>
        </ul>
    </div>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'drag-drop-drop-indicator-demo',
    templateUrl: './drag-drop-drop-indicator-demo.html',
    styleUrls: ['./drag-drop-drop-indicator-demo.scss']
})
export class DragDropDropIndicatorDemo implements OnInit {
    availableProducts: Product[] | undefined;

    selectedProducts: Product[] | undefined;

    draggedProduct: Product | undefined | null;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
    }

    dragStart(product: Product) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: Product) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
            if (product.id === (this.availableProducts as Product[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}`,scss:`
:host ::ng-deep {
    .drop-column {
        border: 1px solid transparent;
        transition: border-color .2s;
    
        &.p-draggable-enter {
            border-color: var(--primary-color); 
        }
    }

    [pDraggable] {
        cursor: move;
    }
}`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}ngOnInit(){this.selectedProducts=[],this.availableProducts=[{id:"1",name:"Black Watch"},{id:"2",name:"Bamboo Watch"}]}dragStart(t){this.draggedProduct=t}drop(){if(this.draggedProduct){let t=this.findIndex(this.draggedProduct);this.selectedProducts=[...this.selectedProducts,this.draggedProduct],this.availableProducts=this.availableProducts?.filter((r,o)=>o!=t),this.draggedProduct=null}}dragEnd(){this.draggedProduct=null}findIndex(t){let r=-1;for(let o=0;o<this.availableProducts.length;o++)if(t.id===this.availableProducts[o].id){r=o;break}return r}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["drag-drop-drop-indicator-demo"]],decls:15,vars:4,consts:[[1,"card","flex","flex-wrap","gap-3"],[1,"p-2","border-1","surface-border","border-round","w-15rem","h-10rem"],[1,"list-none","flex","flex-column","gap-2","p-0","m-0"],["class","p-2 border-round shadow-1","pDraggable","",3,"onDragStart","onDragEnd",4,"ngFor","ngForOf"],["pDroppable","",1,"p-2","w-15rem","h-10rem","drop-column",3,"onDrop"],[1,"text-center","surface-border","border-bottom-1"],["class","list-none flex flex-column gap-2 p-0 m-0",4,"ngIf"],["selector","drag-drop-drop-indicator-demo",3,"code","extFiles"],["pDraggable","",1,"p-2","border-round","shadow-1",3,"onDragStart","onDragEnd"],["class","p-2 border-round shadow-1",4,"ngFor","ngForOf"],[1,"p-2","border-round","shadow-1"]],template:function(r,o){r&1&&(d(0,"app-docsectiontext")(1,"p"),s(2,"When a suitable draggable enters a droppable area, the area gets "),d(3,"i"),s(4,"p-draggable-enter"),a(),s(5," class that can be used to style the droppable section."),a()(),d(6,"div",0)(7,"div",1)(8,"ul",2),h(9,ye,2,1,"li",3),a()(),d(10,"div",4),g("onDrop",function(){return o.drop()}),d(11,"p",5),s(12,"Drop Zone"),a(),h(13,we,2,1,"ul",6),a()(),p(14,"app-code",7)),r&2&&(c(9),l("ngForOf",o.availableProducts),c(4),l("ngIf",o.selectedProducts),c(),l("code",o.code)("extFiles",o.extFiles))},dependencies:[F,B,f,_,E,M],encapsulation:2});let i=e;return i})();var ue=(()=>{let e=class e{constructor(){this.code={basic:`<div pDraggable dragHandle=".p-panel-header" class="w-15rem">
    <p-panel header="Drag Header">
        Content
    </p-panel>
</div>`,html:`
<div class="card">
    <div pDraggable dragHandle=".p-panel-header" class="w-15rem">
        <p-panel header="Drag Header">
            Content
        </p-panel>
    </div>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'drag-drop-drag-handle-demo',
    templateUrl: './drag-drop-drag-handle-demo.html',
    styleUrls: ['./drag-drop-drag-handle-demo.scss']
})
export class DragDropDragHandleDemo {}`,scss:`
:host ::ng-deep {
    [pDraggable] {
        cursor: move;
    }
}`,service:["ProductService"]},this.extFiles=[{path:"src/domain/product.ts",content:`
export interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    price?: number;
    quantity?: number;
    inventoryStatus?: string;
    category?: string;
    image?: string;
    rating?: number;
}`}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["drag-drop-drag-handle-demo"]],decls:10,vars:2,consts:[[1,"card"],["pDraggable","","dragHandle",".p-panel-header",1,"w-15rem"],["header","Drag Header"],["selector","drag-drop-drag-handle-demo",3,"code","extFiles"]],template:function(r,o){r&1&&(d(0,"app-docsectiontext")(1,"p")(2,"i"),s(3,"dragHandle"),a(),s(4," is used to restrict dragging unless mousedown occurs on the specified element. Panel below can only be dragged using its header."),a()(),d(5,"div",0)(6,"div",1)(7,"p-panel",2),s(8," Content "),a()()(),p(9,"app-code",3)),r&2&&(c(9),l("code",o.code)("extFiles",o.extFiles))},dependencies:[f,_,E,oe],encapsulation:2});let i=e;return i})();var ge=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=y({imports:[L,re,$,ne,X,ee,G,ae,$]});let i=e;return i})();var _e=()=>["DragDrop"],me=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:de},{id:"basic",label:"Basic",component:le},{id:"datatable",label:"DataTable",component:ce},{id:"dropindicator",label:"Drop Indicator",component:pe},{id:"draghandle",label:"Drag Handle",component:ue}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=u({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Drag and Drop Component","header","Drag and Drop","description","pDraggable and pDroppable directives apply drag-drop behaviors to any element.",3,"docs","apiDocs"]],template:function(r,o){r&1&&p(0,"app-doc",0),r&2&&l("docs",o.docs)("apiDocs",R(2,_e))},dependencies:[ie],styles:["[_nghost-%COMP%]     .drag-column{padding-right:.5em}[_nghost-%COMP%]     .drop-column{border:1px solid transparent;transition:border-color .2s}[_nghost-%COMP%]     .drop-column.p-draggable-enter{border-color:var(--primary-color)}[_nghost-%COMP%]     .product-item{display:flex;align-items:center;padding:1rem;width:100%;border-bottom:1px solid var(--surface-d)}[_nghost-%COMP%]     .product-item img{width:75px;box-shadow:0 3px 6px #00000029,0 3px 6px #0000003b;margin-right:1rem}[_nghost-%COMP%]     .product-item .product-list-detail{flex:1 1 0}[_nghost-%COMP%]     .product-item .product-list-action{display:flex;flex-direction:column;align-items:flex-end}[_nghost-%COMP%]     .product-item .product-category-icon{vertical-align:middle;margin-right:.5rem}[_nghost-%COMP%]     .product-item .product-category{vertical-align:middle;line-height:1}[_nghost-%COMP%]     [pDraggable]{cursor:move}@media screen and (max-width: 576px){[_nghost-%COMP%]     .product-item{flex-wrap:wrap}[_nghost-%COMP%]     .product-item .image-container{width:100%;text-align:center}[_nghost-%COMP%]     .product-item img{margin:0 0 1rem;width:100px}}"]});let i=e;return i})();var he=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=y({imports:[z.forChild([{path:"",component:me}]),z]});let i=e;return i})();var Et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=y({imports:[L,he,ge]});let i=e;return i})();export{Et as DragDropDemoModule};
