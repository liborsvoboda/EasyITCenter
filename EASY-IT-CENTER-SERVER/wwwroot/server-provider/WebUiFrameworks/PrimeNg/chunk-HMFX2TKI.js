import{a as C}from"./chunk-WUBSW3GM.js";import{a as ri,b as li}from"./chunk-HPRJRG5U.js";import{c as ci}from"./chunk-5PJP2UCV.js";import{a as oi,b as ai}from"./chunk-FVHWLI4A.js";import{a as ii,b as ni}from"./chunk-UT7HFFJ3.js";import{a as xe,b as ti}from"./chunk-VD5NKM3T.js";import{a as Zt,b as ei}from"./chunk-VSJFAAI6.js";import{a as Jt,b as Xt}from"./chunk-2JM2IZM7.js";import"./chunk-PUPRV2TB.js";import{a as Ye,b as Qt}from"./chunk-YQT5QGVL.js";import"./chunk-IL4VCBHR.js";import"./chunk-5QBES3VP.js";import{a as Kt,b as Wt}from"./chunk-ZQDLLY5C.js";import{a as Te,b as Yt}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as Ht,b as $t}from"./chunk-DWVF3PYJ.js";import{a as Se,b as Gt}from"./chunk-2LMLW6BF.js";import{a as j}from"./chunk-7IEFA6YS.js";import{a as qe,b as Dt}from"./chunk-XDIIGL3G.js";import{a as St,b as xt}from"./chunk-WW43CASL.js";import{a as Ue,b as Et}from"./chunk-5RR2IM57.js";import{a as We}from"./chunk-2BMKZP7B.js";import{a as Ct,b as _t}from"./chunk-QGLUNQP3.js";import{a as w,b as It,c as Pt,d as ne,e as oe,f as be,g as Ft,h as je,i as Me,j as Mt,k as Rt,l as kt,m as Bt,n as Ot,o as zt,p as Ke,q as At,r as de,s as ue,t as Nt,u as Vt,v as we,w as Lt}from"./chunk-DMJDKY6C.js";import"./chunk-COPROXXV.js";import"./chunk-UMPZYH6V.js";import{a as wt,b as Tt}from"./chunk-24SD7D6H.js";import"./chunk-DQ6RBTPG.js";import"./chunk-SHNTBJK2.js";import{a as vt,b as bt}from"./chunk-34KZVEHI.js";import"./chunk-6KDLFDDH.js";import"./chunk-HKNDESHI.js";import{a as ve,b as ft}from"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import{b as ut}from"./chunk-ORJYCDDT.js";import"./chunk-KL3QZRIM.js";import{a as F}from"./chunk-NZVHRD6T.js";import{a as J,b as qt}from"./chunk-H6W5JTHG.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-RJKOGX2L.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as T,b as jt,c as et}from"./chunk-AS5FXEGH.js";import{a as x,b as Ut}from"./chunk-X2ZDE2AM.js";import{b as Pe,e as W,i as Y,o as Fe,p as st,r as le,s as yt}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import{a as gt,b as ht}from"./chunk-QLODAJMV.js";import{A as dt,d as Le,k as te,q as _,y as ie,z as ye}from"./chunk-UWMVDULA.js";import{o as mt,t as Ze}from"./chunk-N5X6XDRN.js";import{$b as U,Cb as Z,Cc as Ie,Ec as me,Fc as _e,Ib as ee,Ic as pt,Jb as i,Kb as d,Kc as Ne,Lb as P,Lc as $,Mb as lt,Na as G,Nb as B,Nc as Ve,Ob as O,Pb as z,Qb as fe,Sa as p,Sb as b,Ta as u,Tb as Oe,Ub as ze,V as De,Vb as ct,bc as K,cc as Ae,da as S,ea as Ee,ib as g,jb as rt,kb as s,kc as D,ma as E,na as I,nb as Ce,ob as re,rb as e,sb as t,tb as m,xb as R,yb as h,zb as f}from"./chunk-ZJD4PHQZ.js";import{a as Be,e as fn,g as yn}from"./chunk-P2VZOJAX.js";var _i=fn((it,nt)=>{(function(n,o){typeof define=="function"&&define.amd?define([],o):typeof it<"u"?o():(o(),n.FileSaver={})})(it,function(){"use strict";function n(y,M){return typeof M>"u"?M={autoBom:!1}:typeof M!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),M={autoBom:!M}),M.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(y.type)?new Blob(["\uFEFF",y],{type:y.type}):y}function o(y,M,he){var Q=new XMLHttpRequest;Q.open("GET",y),Q.responseType="blob",Q.onload=function(){v(Q.response,M,he)},Q.onerror=function(){console.error("could not download file")},Q.send()}function a(y){var M=new XMLHttpRequest;M.open("HEAD",y,!1);try{M.send()}catch{}return 200<=M.status&&299>=M.status}function l(y){try{y.dispatchEvent(new MouseEvent("click"))}catch{var M=document.createEvent("MouseEvents");M.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),y.dispatchEvent(M)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,c=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!c?function(y,M,he){var Q=r.URL||r.webkitURL,pe=document.createElement("a");M=M||y.name||"download",pe.download=M,pe.rel="noopener",typeof y=="string"?(pe.href=y,pe.origin===location.origin?l(pe):a(pe.href)?o(y,M,he):l(pe,pe.target="_blank")):(pe.href=Q.createObjectURL(y),setTimeout(function(){Q.revokeObjectURL(pe.href)},4e4),setTimeout(function(){l(pe)},0))}:"msSaveOrOpenBlob"in navigator?function(y,M,he){if(M=M||y.name||"download",typeof y!="string")navigator.msSaveOrOpenBlob(n(y,he),M);else if(a(y))o(y,M,he);else{var Q=document.createElement("a");Q.href=y,Q.target="_blank",setTimeout(function(){l(Q)})}}:function(y,M,he,Q){if(Q=Q||open("","_blank"),Q&&(Q.document.title=Q.document.body.innerText="downloading..."),typeof y=="string")return o(y,M,he);var pe=y.type==="application/octet-stream",hn=/constructor/i.test(r.HTMLElement)||r.safari,ot=/CriOS\/[\d]+/.test(navigator.userAgent);if((ot||pe&&hn||c)&&typeof FileReader<"u"){var Je=new FileReader;Je.onloadend=function(){var ke=Je.result;ke=ot?ke:ke.replace(/^data:[^;]*;/,"data:attachment/file;"),Q?Q.location.href=ke:location=ke,Q=null},Je.readAsDataURL(y)}else{var at=r.URL||r.webkitURL,Xe=at.createObjectURL(y);Q?Q.location=Xe:location.href=Xe,Q=null,setTimeout(function(){at.revokeObjectURL(Xe)},4e4)}});r.saveAs=v.saveAs=v,typeof nt<"u"&&(nt.exports=v)})});var vn=()=>({"min-width":"50rem"});function bn(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Price"),t()())}function Sn(n,o){if(n&1&&(e(0,"tr",8)(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),U(9,"currency"),t()()),n&2){let a=o.$implicit;s("pContextMenuRow",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(K(9,5,a.price,"USD"))}}var pi=(()=>{let o=class o{constructor(l,r,c){this.productService=l,this.messageService=r,this.cd=c,this.code={basic:`<p-contextMenu #cm [model]="items"></p-contextMenu>
<p-table [value]="products" [(contextMenuSelection)]="selectedProduct" [contextMenu]="cm" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr [pContextMenuRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.price |\xA0currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-contextMenu #cm [model]="items"></p-contextMenu>
    <p-table [value]="products" [(contextMenuSelection)]="selectedProduct" [contextMenu]="cm" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr [pContextMenuRow]="product">
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.price |\xA0currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MessageService, MenuItem } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-context-menu-demo',
    templateUrl: 'table-context-menu-demo.html',
    providers: [MessageService]
})
export class TableContextMenuDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    items!: MenuItem[];

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));

        this.items = [
            { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) },
            { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct) }
        ];
    }

    viewProduct(product: Product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    }

    deleteProduct(product: Product) {
        this.products = this.products.filter((p) => p.id !== product.id);
        this.messageService.add({ severity: 'info', summary: 'Product Deleted', detail: product.name });
        this.selectedProduct = null;
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsSmall().then(l=>{this.products=l,this.cd.markForCheck()}),this.items=[{label:"View",icon:"pi pi-fw pi-search",command:()=>this.viewProduct(this.selectedProduct)},{label:"Delete",icon:"pi pi-fw pi-times",command:()=>this.deleteProduct(this.selectedProduct)}]}viewProduct(l){this.messageService.add({severity:"info",summary:"Product Selected",detail:l.name})}deleteProduct(l){this.products=this.products.filter(r=>r.id!==l.id),this.messageService.add({severity:"info",summary:"Product Deleted",detail:l.name}),this.selectedProduct=null}};o.\u0275fac=function(r){return new(r||o)(u(F),u(te),u(D))},o.\u0275cmp=S({type:o,selectors:[["context-menu-doc"]],features:[fe([te])],decls:29,vars:8,consts:[["cm",""],[3,"load"],[1,"card"],[3,"model"],["dataKey","code",3,"contextMenuSelectionChange","value","contextMenuSelection","contextMenu","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-context-menu-demo",3,"code","extFiles"],[3,"pContextMenuRow"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2," Table has exclusive integration with "),e(3,"i"),i(4,"contextmenu"),t(),i(5," component. In order to attach a menu to a table, add "),e(6,"i"),i(7,"pContextMenuRow"),t(),i(8," directive to the rows that can be selected with context menu, define a local template variable for the menu and bind it to the "),e(9,"i"),i(10,"contextMenu"),t(),i(11," property of the table. This enables displaying the menu whenever a row is right clicked. Optional "),e(12,"i"),i(13,"pContextMenuRowIndex"),t(),i(14," property is available to access the row index. A separate "),e(15,"i"),i(16,"contextMenuSelection"),t(),i(17," property is used to get a hold of the right clicked row. For dynamic columns, setting "),e(18,"i"),i(19,"pContextMenuRowDisabled"),t(),i(20," property as true disables context menu for that particular row. "),t()(),e(21,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(22,"div",2),m(23,"p-contextMenu",3,0),e(25,"p-table",4),z("contextMenuSelectionChange",function(M){return E(v),O(c.selectedProduct,M)||(c.selectedProduct=M),I(M)}),g(26,bn,9,0,"ng-template",5)(27,Sn,10,8,"ng-template",6),t()()(),m(28,"app-code",7)}if(r&2){let v=ee(24);p(23),s("model",c.items),p(2),s("value",c.products),B("contextMenuSelection",c.selectedProduct),s("contextMenu",v)("tableStyle",b(7,vn)),p(3),s("code",c.code)("extFiles",c.extFiles)}},dependencies:[w,_,Ft,Ht,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var xn=()=>({"min-width":"50rem"});function Cn(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function _n(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var si=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
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
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-basic-demo',
    templateUrl: 'table-basic-demo.html'
})
export class TableBasicDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["basic-doc"]],decls:9,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-basic-demo",3,"code","extFiles"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"DataTable requires a collection to display along with column components for the representation of the data."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"p-table",2),g(6,Cn,9,0,"ng-template",3)(7,_n,9,4,"ng-template",4),t()()(),m(8,"app-code",5)),r&2&&(p(5),s("value",c.products)("tableStyle",b(4,xn)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var wn=()=>({"min-width":"50rem"});function Tn(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code"),t(),e(3,"th",6),i(4,"Name"),t(),e(5,"th",6),i(6,"Inventory Status"),t(),e(7,"th",6),i(8,"Price"),t()())}function Dn(n,o){if(n&1){let a=R();e(0,"input",13),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.code,r)||(c.code=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.code)}}function En(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.code," ")}}function In(n,o){if(n&1){let a=R();e(0,"input",14),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.name,r)||(c.name=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.name)}}function Pn(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.name," ")}}function Fn(n,o){if(n&1){let a=R();e(0,"input",15),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.inventoryStatus,r)||(c.inventoryStatus=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.inventoryStatus)}}function Mn(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.inventoryStatus," ")}}function Rn(n,o){if(n&1){let a=R();e(0,"input",13),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.price,r)||(c.price=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.price)}}function kn(n,o){if(n&1&&(i(0),U(1,"currency")),n&2){let a=f().$implicit;P(" ",K(1,1,a.price,"USD")," ")}}function Bn(n,o){if(n&1&&(e(0,"tr")(1,"td",7)(2,"p-cellEditor"),g(3,Dn,1,1,"ng-template",8)(4,En,1,1,"ng-template",9),t()(),e(5,"td",10)(6,"p-cellEditor"),g(7,In,1,1,"ng-template",8)(8,Pn,1,1,"ng-template",9),t()(),e(9,"td",11)(10,"p-cellEditor"),g(11,Fn,1,1,"ng-template",8)(12,Mn,1,1,"ng-template",9),t()(),e(13,"td",12)(14,"p-cellEditor"),g(15,Rn,1,1,"ng-template",8)(16,kn,2,4,"ng-template",9),t()()()),n&2){let a=o.$implicit;p(),s("pEditableColumn",a.code),p(4),s("pEditableColumn",a.name),p(4),s("pEditableColumn",a.inventoryStatus),p(4),s("pEditableColumn",a.price)}}var mi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Code</th>
            <th style="width:25%">Name</th>
            <th style="width:25%">Inventory Status</th>
            <th style="width:25%">Price</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-editing="editing">
        <tr>
            <td [pEditableColumn]="product.code" pEditableColumnField="code">
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.code" />
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{ product.code }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.name" pEditableColumnField="name">
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.name" required />
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{ product.name }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText [(ngModel)]="product.inventoryStatus" />
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{ product.inventoryStatus }}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td [pEditableColumn]="product.price" pEditableColumnField="price">
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.price" />
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{ product.price | currency: 'USD' }}
                    </ng-template>
                </p-cellEditor>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" dataKey="id" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Code</th>
                <th style="width:25%">Name</th>
                <th style="width:25%">Inventory Status</th>
                <th style="width:25%">Price</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-editing="editing">
            <tr>
                <td [pEditableColumn]="product.code" pEditableColumnField="code">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.code" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.code }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.name" pEditableColumnField="name">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.name" required />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.name }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.inventoryStatus" pEditableColumnField="inventoryStatus">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText [(ngModel)]="product.inventoryStatus" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.inventoryStatus }}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td [pEditableColumn]="product.price" pEditableColumnField="price">
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.price" />
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{ product.price | currency: 'USD' }}
                        </ng-template>
                    </p-cellEditor>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-cell-edit-demo',
    templateUrl: 'table-cell-edit-demo.html'
})
export class TableCellEditDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,scss:`
:host ::ng-deep .p-cell-editing {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["cell-edit-doc"]],decls:15,vars:5,consts:[[3,"load"],[1,"card"],["dataKey","id",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-cell-edit-demo",3,"code","extFiles"],[2,"width","25%"],["pEditableColumnField","code",3,"pEditableColumn"],["pTemplate","input"],["pTemplate","output"],["pEditableColumnField","name",3,"pEditableColumn"],["pEditableColumnField","inventoryStatus",3,"pEditableColumn"],["pEditableColumnField","price",3,"pEditableColumn"],["pInputText","","type","text",3,"ngModelChange","ngModel"],["pInputText","","type","text","required","",3,"ngModelChange","ngModel"],["pInputText","",3,"ngModelChange","ngModel"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"In-cell editing is enabled by adding "),e(3,"i"),i(4,"pEditableColumn"),t(),i(5," directive to an editable cell that has a "),e(6,"i"),i(7,"p-cellEditor"),t(),i(8," helper component to define the input-output templates for the edit and view modes respectively."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,Tn,9,0,"ng-template",3)(13,Bn,17,4,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.products)("tableStyle",b(4,wn)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[Pe,W,Fe,Y,w,_,Rt,Ke,le,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var On=()=>({"min-width":"50rem"});function zn(n,o){n&1&&(e(0,"tr")(1,"th",6),m(2,"p-tableHeaderCheckbox"),t(),e(3,"th"),i(4,"Code"),t(),e(5,"th"),i(6,"Name"),t(),e(7,"th"),i(8,"Category"),t(),e(9,"th"),i(10,"Quantity"),t()())}function An(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"p-tableCheckbox",7),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t()()),n&2){let a=o.$implicit;p(2),s("value",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var di=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product"></p-tableCheckbox>
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product"></p-tableCheckbox>
                </td>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-checkbox-selection-demo',
    templateUrl: 'table-checkbox-selection-demo.html'
})
export class TableCheckboxSelectionDemo implements OnInit{
    products!: Product[];

    selectedProducts!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["checkbox-selection-doc"]],decls:15,vars:6,consts:[[3,"load"],[1,"card"],["dataKey","code",3,"selectionChange","value","selection","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-checkbox-selection-demo",3,"code","extFiles"],[2,"width","4rem"],[3,"value"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Multiple selection can also be handled using checkboxes by enabling the "),e(3,"i"),i(4,"selectionMode"),t(),i(5," property of column as "),e(6,"i"),i(7,"multiple"),t(),i(8,"."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),z("selectionChange",function(y){return O(c.selectedProducts,y)||(c.selectedProducts=y),y}),g(12,zn,11,0,"ng-template",3)(13,An,11,5,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.products),B("selection",c.selectedProducts),s("tableStyle",b(5,On)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,de,ue,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Nn=()=>({"min-width":"50rem"});function Vn(n,o){n&1&&(e(0,"tr")(1,"th",7),i(2,"Product"),t(),e(3,"th",8),i(4,"Sale Rate"),t()(),e(5,"tr")(6,"th",9),i(7,"Sales"),t(),e(8,"th",9),i(9,"Profits"),t()(),e(10,"tr")(11,"th"),i(12,"Last Year"),t(),e(13,"th"),i(14,"This Year"),t(),e(15,"th"),i(16,"Last Year"),t(),e(17,"th"),i(18,"This Year"),t()())}function Ln(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),U(9,"currency"),t(),e(10,"td"),i(11),U(12,"currency"),t()()),n&2){let a=o.$implicit;p(2),d(a.product),p(2),P("",a.lastYearSale,"%"),p(2),P("",a.thisYearSale,"%"),p(2),d(K(9,5,a.lastYearProfit,"USD")),p(3),d(K(12,8,a.thisYearProfit,"USD"))}}function qn(n,o){if(n&1&&(e(0,"tr")(1,"td",10),i(2,"Totals"),t(),e(3,"td"),i(4),U(5,"currency"),t(),e(6,"td"),i(7),U(8,"currency"),t()()),n&2){let a=f();p(4),d(K(5,2,a.lastYearTotal,"USD")),p(3),d(K(8,5,a.thisYearTotal,"USD"))}}var ui=(()=>{let o=class o{constructor(l){this.cd=l,this.code={basic:`<p-table [value]="sales" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th rowspan="3">Product</th>
            <th colspan="4">Sale Rate</th>
        </tr>
        <tr>
            <th colspan="2">Sales</th>
            <th colspan="2">Profits</th>
        </tr>
        <tr>
            <th>Last Year</th>
            <th>This Year</th>
            <th>Last Year</th>
            <th>This Year</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-sale>
        <tr>
            <td>{{sale.product}}</td>
            <td>{{sale.lastYearSale}}%</td>
            <td>{{sale.thisYearSale}}%</td>
            <td>{{sale.lastYearProfit | currency: 'USD'}}</td>
            <td>{{sale.thisYearProfit | currency: 'USD'}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="footer">
        <tr>
            <td colspan="3" class="text-right">Totals</td>
            <td>{{lastYearTotal | currency: 'USD'}}</td>
            <td>{{thisYearTotal | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="sales" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th rowspan="3">Product</th>
                <th colspan="4">Sale Rate</th>
            </tr>
            <tr>
                <th colspan="2">Sales</th>
                <th colspan="2">Profits</th>
            </tr>
            <tr>
                <th>Last Year</th>
                <th>This Year</th>
                <th>Last Year</th>
                <th>This Year</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-sale>
            <tr>
                <td>{{sale.product}}</td>
                <td>{{sale.lastYearSale}}%</td>
                <td>{{sale.thisYearSale}}%</td>
                <td>{{sale.lastYearProfit | currency: 'USD'}}</td>
                <td>{{sale.thisYearProfit | currency: 'USD'}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="footer">
            <tr>
                <td colspan="3" class="text-right">Totals</td>
                <td>{{lastYearTotal | currency: 'USD'}}</td>
                <td>{{thisYearTotal | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'table-column-group-demo',
    templateUrl: 'table-column-group-demo.html'
})
export class TableColumnGroupDemo implements OnInit {
    sales!: any[];

    lastYearTotal!: number;

    thisYearTotal!: number;

    ngOnInit() {
        this.sales = [
            { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
            { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
            { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
            { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
            { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
            { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
            { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
            { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
            { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
            { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
        ];

        this.calculateLastYearTotal();
        this.calculateThisYearTotal();
    }

    calculateLastYearTotal() {
        let total = 0;
        for (let sale of this.sales) {
            total += sale.lastYearProfit;
        }

        this.lastYearTotal = total;
    }

    calculateThisYearTotal() {
        let total = 0;
        for (let sale of this.sales) {
            total += sale.thisYearProfit;
        }

        this.thisYearTotal = total;
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`}}loadDemoData(){this.sales=[{product:"Bamboo Watch",lastYearSale:51,thisYearSale:40,lastYearProfit:54406,thisYearProfit:43342},{product:"Black Watch",lastYearSale:83,thisYearSale:9,lastYearProfit:423132,thisYearProfit:312122},{product:"Blue Band",lastYearSale:38,thisYearSale:5,lastYearProfit:12321,thisYearProfit:8500},{product:"Blue T-Shirt",lastYearSale:49,thisYearSale:22,lastYearProfit:745232,thisYearProfit:65323},{product:"Brown Purse",lastYearSale:17,thisYearSale:79,lastYearProfit:643242,thisYearProfit:500332},{product:"Chakra Bracelet",lastYearSale:52,thisYearSale:65,lastYearProfit:421132,thisYearProfit:150005},{product:"Galaxy Earrings",lastYearSale:82,thisYearSale:12,lastYearProfit:131211,thisYearProfit:100214},{product:"Game Controller",lastYearSale:44,thisYearSale:45,lastYearProfit:66442,thisYearProfit:53322},{product:"Gaming Set",lastYearSale:90,thisYearSale:56,lastYearProfit:765442,thisYearProfit:296232},{product:"Gold Phone Case",lastYearSale:75,thisYearSale:54,lastYearProfit:21212,thisYearProfit:12533}],this.calculateLastYearTotal(),this.calculateThisYearTotal(),this.cd.markForCheck()}calculateLastYearTotal(){let l=0;for(let r of this.sales)l+=r.lastYearProfit;this.lastYearTotal=l}calculateThisYearTotal(){let l=0;for(let r of this.sales)l+=r.thisYearProfit;this.thisYearTotal=l}};o.\u0275fac=function(r){return new(r||o)(u(D))},o.\u0275cmp=S({type:o,selectors:[["column-group-doc"]],decls:13,vars:4,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["selector","table-column-group-demo",3,"code"],["rowspan","3"],["colspan","4"],["colspan","2"],["colspan","3",1,"text-right"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Columns can be grouped using rowspan and "),e(3,"i"),i(4,"colspan"),t(),i(5," properties."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,Vn,19,0,"ng-template",3)(10,Ln,13,11,"ng-template",4)(11,qn,9,8,"ng-template",5),t()()(),m(12,"app-code",6)),r&2&&(p(8),s("value",c.sales)("tableStyle",b(3,Nn)),p(4),s("code",c.code))},dependencies:[w,_,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var Un=()=>({"min-width":"50rem"});function jn(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code"),t(),e(3,"th",6),i(4,"Name"),t(),e(5,"th",6),i(6,"Category"),t(),e(7,"th",6),i(8,"Quantity"),t()())}function Kn(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var gi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pResizableColumn>Code</th>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Category</th>
            <th pResizableColumn>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [resizableColumns]="true" columnResizeMode="expand" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pResizableColumn>Code</th>
                <th pResizableColumn>Name</th>
                <th pResizableColumn>Category</th>
                <th pResizableColumn>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-column-resize-expand-mode-demo',
    templateUrl: 'table-column-resize-expand-mode-demo.html'
})
export class TableColumnResizeExpandModeDemo implements OnInit{
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["column-resize-expand-mode-doc"]],decls:15,vars:6,consts:[[3,"load"],[1,"card"],["columnResizeMode","expand","styleClass","p-datatable-gridlines",3,"value","resizableColumns","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-column-resize-expand-mode-demo",3,"code","extFiles"],["pResizableColumn",""]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Setting "),e(3,"i"),i(4,"columnResizeMode"),t(),i(5," as "),e(6,"i"),i(7,"expand"),t(),i(8," changes the table width as well."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,jn,9,0,"ng-template",3)(13,Kn,9,4,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.products)("resizableColumns",!0)("tableStyle",b(5,Un)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,Me,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Wn=()=>({"min-width":"50rem"});function Yn(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Name"),t(),e(3,"th",6),i(4,"Country"),t(),e(5,"th",6),i(6,"Company"),t(),e(7,"th",6),i(8,"Representative"),t()())}function Hn(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}var hi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Country</th>
            <th pResizableColumn>Company</th>
            <th pResizableColumn>Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Country</th>
            <th pResizableColumn>Company</th>
            <th pResizableColumn>Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
</p-table>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-column-resize-scrollable-mode-demo',
    templateUrl: 'table-column-resize-scrollable-mode-demo.html'
})
export class TableColumnResizeScrollableModeDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["column-resize-scrollable-mode-doc"]],decls:6,vars:7,consts:[[3,"load"],[1,"card"],["scrollHeight","400px","styleClass","p-datatable-gridlines",3,"value","scrollable","resizableColumns","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-column-resize-scrollable-mode-demo",3,"code","extFiles"],["pResizableColumn",""]],template:function(r,c){r&1&&(e(0,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(1,"div",1)(2,"p-table",2),g(3,Yn,9,0,"ng-template",3)(4,Hn,9,4,"ng-template",4),t()()(),m(5,"app-code",5)),r&2&&(p(2),s("value",c.customers)("scrollable",!0)("resizableColumns",!0)("tableStyle",b(6,Wn)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,Me,x,C],encapsulation:2,changeDetection:0});let n=o;return n})();var $n=()=>({"min-width":"50rem"});function Gn(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t(),m(9,"th",6),t())}function Qn(n,o){if(n&1){let a=R();e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",7),h("click",function(){let r=E(a).$implicit,c=f();return I(c.selectProduct(r))}),t()()()}if(n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var fi=(()=>{let o=class o{constructor(l,r,c){this.productService=l,this.messageService=r,this.cd=c,this.code={basic:`<p-toast></p-toast>
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th style="width: 5rem"></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
            <td>
                <button type="button" pButton pRipple icon="pi pi-plus" (click)="selectProduct(product)"></button>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-toast></p-toast>
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
                <th style="width: 5rem"></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
                <td>
                    <button type="button" pButton pRipple icon="pi pi-plus" (click)="selectProduct(product)"></button>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'table-column-selection-demo',
    templateUrl: 'table-column-selection-demo.html',
    providers: [MessageService]
})
export class TableColumnSelectionDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    selectProduct(product: Product) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}selectProduct(l){this.messageService.add({severity:"info",summary:"Product Selected",detail:l.name})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(te),u(D))},o.\u0275cmp=S({type:o,selectors:[["column-selection-doc"]],features:[fe([te])],decls:10,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-column-selection-demo",3,"code","extFiles"],[2,"width","5rem"],["type","button","pButton","","pRipple","","icon","pi pi-plus",3,"click"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Selection using custom elements."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1),m(5,"p-toast"),e(6,"p-table",2),g(7,Gn,10,0,"ng-template",3)(8,Qn,11,4,"ng-template",4),t()()(),m(9,"app-code",5)),r&2&&(p(6),s("value",c.products)("tableStyle",b(4,$n)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ie,Te,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Jn=()=>({"min-width":"50rem"}),Xn=()=>({"min-width":"200px"});function Zn(n,o){if(n&1){let a=R();e(0,"p-multiSelect",7),z("ngModelChange",function(r){E(a);let c=f();return O(c.selectedColumns,r)||(c.selectedColumns=r),I(r)}),t()}if(n&2){let a=f();Ce(b(4,Xn)),s("options",a.cols),B("ngModel",a.selectedColumns)}}function eo(n,o){if(n&1&&(e(0,"th"),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function to(n,o){if(n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),g(3,eo,2,1,"th",8),t()),n&2){let a=o.$implicit;p(3),s("ngForOf",a)}}function io(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function no(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),g(3,io,2,1,"td",8),t()),n&2){let a=o.$implicit,l=o.columns;p(2),d(a.code),p(),s("ngForOf",l)}}var yi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [columns]="selectedColumns" [value]="products" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="caption">
        <p-multiSelect [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header"
            selectedItemsLabel="{0} columns selected" [style]="{'min-width': '200px'}" placeholder="Choose Columns"></p-multiSelect>
    </ng-template>
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th>Code</th>
            <th *ngFor="let col of columns">
                {{col.header}}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-columns="columns">
        <tr>
            <td>{{product.code}}</td>
            <td *ngFor="let col of columns">
                {{product[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [columns]="selectedColumns" [value]="products" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="caption">
            <p-multiSelect [options]="cols" [(ngModel)]="selectedColumns" optionLabel="header"
                selectedItemsLabel="{0} columns selected" [style]="{'min-width': '200px'}" placeholder="Choose Columns"></p-multiSelect>
        </ng-template>
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th>Code</th>
                <th *ngFor="let col of columns">
                    {{col.header}}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-columns="columns">
            <tr>
                <td>{{product.code}}</td>
                <td *ngFor="let col of columns">
                    {{product[col.field]}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-column-toggle-demo',
    templateUrl: 'table-column-toggle-demo.html'
})
export class TableColumnToggleDemo implements OnInit{
    products!: Product[];

    cols!: Column[];

    selectedColumns!: Column[];

    constructor(private productService: ProductService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
            this.cd.markForCheck();
        });

        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.selectedColumns = this.cols;
    }

}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}],this.selectedColumns=this.cols}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["column-toggle-doc"]],decls:10,vars:6,consts:[[3,"load"],[1,"card"],[3,"columns","value","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["selector","table-column-toggle-demo",3,"code","extFiles"],["optionLabel","header","selectedItemsLabel","{0} columns selected","placeholder","Choose Columns",3,"ngModelChange","options","ngModel"],[4,"ngFor","ngForOf"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"This demo uses a multiselect component to implement toggleable columns."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"p-table",2),g(6,Zn,1,5,"ng-template",3)(7,to,4,1,"ng-template",4)(8,no,4,2,"ng-template",5),t()()(),m(9,"app-code",6)),r&2&&(p(5),s("columns",c.selectedColumns)("value",c.products)("tableStyle",b(5,Jn)),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,W,Y,w,_,xe,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var oo=()=>({"min-width":"50rem"});function ao(n,o){n&1&&(e(0,"tr")(1,"th",6),m(2,"p-tableHeaderCheckbox"),t(),e(3,"th",7),i(4,"Code"),t(),e(5,"th",7),i(6,"Name"),t(),e(7,"th",7),i(8,"Category"),t(),e(9,"th",7),i(10,"Quantity"),t()())}function ro(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"p-tableCheckbox",8),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t()()),n&2){let a=o.$implicit,l=f();p(2),s("value",a)("disabled",l.isOutOfStock(a)),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var vi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [rowSelectable]="isRowSelectable" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th style="min-width:200px">Code</th>
            <th style="min-width:200px">Name</th>
            <th style="min-width:200px">Category</th>
            <th style="min-width:200px">Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product" [disabled]="isOutOfStock(product)"></p-tableCheckbox>
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [rowSelectable]="isRowSelectable" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th style="min-width:200px">Code</th>
                <th style="min-width:200px">Name</th>
                <th style="min-width:200px">Category</th>
                <th style="min-width:200px">Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product" [disabled]="isOutOfStock(product)"></p-tableCheckbox>
                </td>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-controlled-selection-demo',
    templateUrl: 'table-controlled-selection-demo.html'
})
export class TableControlledSelectionDemo implements OnInit{
    products!: Product[];

    selectedProducts!: Product;

    constructor(private productService: ProductService) {
        this.isRowSelectable = this.isRowSelectable.bind(this);
    }

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    isRowSelectable(event: any) {
        return !this.isOutOfStock(event.data);
    }

    isOutOfStock(data: Product) {
        return data.inventoryStatus === 'OUTOFSTOCK';
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}],this.isRowSelectable=this.isRowSelectable.bind(this)}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}isRowSelectable(l){return!this.isOutOfStock(l.data)}isOutOfStock(l){return l.inventoryStatus==="OUTOFSTOCK"}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["controlled-selection-doc"]],decls:15,vars:7,consts:[[3,"load"],[1,"card"],["dataKey","code",3,"selectionChange","value","selection","rowSelectable","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-controlled-selection-demo",3,"code","extFiles"],[2,"width","4rem"],[2,"min-width","200px"],[3,"value","disabled"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Row selection can be controlled by utilizing "),e(3,"i"),i(4,"rowSelectable"),t(),i(5," and "),e(6,"i"),i(7,"disabled"),t(),i(8," properties."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),z("selectionChange",function(y){return O(c.selectedProducts,y)||(c.selectedProducts=y),y}),g(12,ao,11,0,"ng-template",3)(13,ro,11,6,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.products),B("selection",c.selectedProducts),s("rowSelectable",c.isRowSelectable)("tableStyle",b(6,oo)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,de,ue,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var po=()=>[10,25,50],so=()=>["name","country.name","representative.name","status"];function mo(n,o){if(n&1){let a=R();e(0,"div",9),i(1," List of Customers "),e(2,"span",10),m(3,"i",11),e(4,"input",12),h("input",function(r){E(a),f();let c=ee(6);return I(c.filterGlobal(r.target.value,"contains"))}),t()()()}}function uo(n,o){n&1&&(e(0,"div",38)(1,"span",39),i(2,"Agent Picker"),t()())}function go(n,o){if(n&1&&(e(0,"div",42),m(1,"img",43),e(2,"span",44),i(3),t()()),n&2){let a=o.$implicit;p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.image,"",G),s("alt",a.label),p(2),d(a.name)}}function ho(n,o){if(n&1){let a=R();e(0,"p-multiSelect",40),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,go,4,4,"ng-template",41),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.representatives)}}function fo(n,o){if(n&1&&m(0,"p-tag",46),n&2){let a=o.$implicit,l=f(3);s("value",a.label)("severity",l.getSeverity(a.label))}}function yo(n,o){if(n&1){let a=R();e(0,"p-dropdown",45),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,fo,1,2,"ng-template",41),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.statuses)}}function vo(n,o){if(n&1){let a=R();e(0,"p-slider",47),h("onSlideEnd",function(r){let c=E(a).filterCallback;return I(c(r.values))}),t(),e(1,"div",48)(2,"span"),i(3),t(),e(4,"span"),i(5),t()()}if(n&2){let a=f(2);s("ngModel",a.activityValues)("range",!0),p(3),d(a.activityValues[0]),p(2),d(a.activityValues[1])}}function bo(n,o){n&1&&(e(0,"tr")(1,"th",13),m(2,"p-tableHeaderCheckbox"),t(),e(3,"th",14)(4,"div",15),i(5," Name "),m(6,"p-sortIcon",16)(7,"p-columnFilter",17),t()(),e(8,"th",18)(9,"div",15),i(10," Country "),m(11,"p-sortIcon",19)(12,"p-columnFilter",20),t()(),e(13,"th",21)(14,"div",15),i(15," Agent "),m(16,"p-sortIcon",22),e(17,"p-columnFilter",23),g(18,uo,3,0,"ng-template",5)(19,ho,2,2,"ng-template",24),t()()(),e(20,"th",25)(21,"div",15),i(22," Date "),m(23,"p-sortIcon",26)(24,"p-columnFilter",27),t()(),e(25,"th",28)(26,"div",15),i(27," Balance "),m(28,"p-sortIcon",29)(29,"p-columnFilter",30),t()(),e(30,"th",31)(31,"div",15),i(32," Status "),m(33,"p-sortIcon",32),e(34,"p-columnFilter",33),g(35,yo,2,2,"ng-template",24),t()()(),e(36,"th",34)(37,"div",15),i(38," Activity "),m(39,"p-sortIcon",35),e(40,"p-columnFilter",36),g(41,vo,6,4,"ng-template",24),t()()(),m(42,"th",37),t()),n&2&&(p(17),s("showMatchModes",!1)("showOperator",!1)("showAddButton",!1),p(23),s("showMatchModes",!1)("showOperator",!1)("showAddButton",!1))}function So(n,o){if(n&1&&(e(0,"tr",49)(1,"td"),m(2,"p-tableCheckbox",50),t(),e(3,"td")(4,"span",51),i(5,"Name"),t(),i(6),t(),e(7,"td")(8,"span",51),i(9,"Country"),t(),m(10,"img",52),e(11,"span",53),i(12),t()(),e(13,"td")(14,"span",51),i(15,"Representative"),t(),m(16,"img",54),e(17,"span",53),i(18),t()(),e(19,"td")(20,"span",51),i(21,"Date"),t(),i(22),U(23,"date"),t(),e(24,"td")(25,"span",51),i(26,"Balance"),t(),i(27),U(28,"currency"),t(),e(29,"td")(30,"span",51),i(31,"Status"),t(),m(32,"p-tag",46),t(),e(33,"td")(34,"span",51),i(35,"Activity"),t(),m(36,"p-progressBar",55),t(),e(37,"td",56),m(38,"button",57),t()()),n&2){let a=o.$implicit,l=f();p(2),s("value",a),p(4),P(" ",a.name," "),p(4),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(4),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name),p(4),P(" ",K(23,15,a.date,"MM/dd/yyyy")," "),p(5),P(" ",Ae(28,18,a.balance,"USD","symbol")," "),p(5),s("value",a.status)("severity",l.getSeverity(a.status)),p(4),s("value",a.activity)("showValue",!1)}}function xo(n,o){n&1&&(e(0,"tr")(1,"td",58),i(2,"No customers found."),t()())}var bi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.loading=!0,this.activityValues=[0,100],this.code={basic:`<p-table
    #dt
    [value]="customers"
    [(selection)]="selectedCustomers"
    dataKey="id"
    [rowHover]="true"
    [rows]="10"
    [showCurrentPageReport]="true"
    [rowsPerPageOptions]="[10, 25, 50]"
    [loading]="loading"
    [paginator]="true"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [filterDelay]="0"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
>
    <ng-template pTemplate="caption">
        <div class="table-header">
            List of Customers
            <span class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <input pInputText type="text" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Global Search" />
            </span>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th pSortableColumn="name" style="min-width: 14rem">
                <div class="flex justify-content-between align-items-center">
                    Name
                    <p-sortIcon field="name"></p-sortIcon>
                    <p-columnFilter type="text" field="name" display="menu" class="ml-auto"></p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="country.name" style="min-width: 14rem">
                <div class="flex justify-content-between align-items-center">
                    Country
                    <p-sortIcon field="country.name"></p-sortIcon>
                    <p-columnFilter type="text" field="country.name" display="menu" class="ml-auto"></p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="representative.name" style="min-width: 14rem">
                <div class="flex justify-content-between align-items-center">
                    Agent
                    <p-sortIcon field="representative.name"></p-sortIcon>
                    <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                        <ng-template pTemplate="header">
                            <div class="px-3 pt-3 pb-0">
                                <span class="font-bold">Agent Picker</span>
                            </div>
                        </ng-template>
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                                <ng-template let-option pTemplate="item">
                                    <div class="inline-block vertical-align-middle">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                        <span class="ml-1 mt-1">{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiSelect>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="date" style="min-width: 10rem">
                <div class="flex justify-content-between align-items-center">
                    Date
                    <p-sortIcon field="date"></p-sortIcon>
                    <p-columnFilter type="date" field="date" display="menu" class="ml-auto"></p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="balance" style="min-width: 10rem">
                <div class="flex justify-content-between align-items-center">
                    Balance
                    <p-sortIcon field="balance"></p-sortIcon>
                    <p-columnFilter type="numeric" field="balance" display="menu" currency="USD" class="ml-auto"></p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="status" style="min-width: 10rem">
                <div class="flex justify-content-between align-items-center">
                    Status
                    <p-sortIcon field="status"></p-sortIcon>
                    <p-columnFilter field="status" matchMode="equals" display="menu" class="ml-auto">
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any">
                                <ng-template let-option pTemplate="item">
                                    <p-tag [value]="option.label" [severity]="getSeverity(option.label)"></p-tag>
                                </ng-template>
                            </p-dropdown>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th pSortableColumn="activity" style="min-width: 10rem">
                <div class="flex justify-content-between align-items-center">
                    Activity
                    <p-sortIcon field="activity"></p-sortIcon>
                    <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                        <ng-template pTemplate="filter" let-filter="filterCallback">
                            <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-3"></p-slider>
                            <div class="flex align-items-center justify-content-between px-2">
                                <span>{{ activityValues[0] }}</span>
                                <span>{{ activityValues[1] }}</span>
                            </div>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="width: 5rem"></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr class="p-selectable-row">
            <td>
                <p-tableCheckbox [value]="customer"></p-tableCheckbox>
            </td>
            <td>
                <span class="p-column-title">Name</span>
                {{ customer.name }}
            </td>
            <td>
                <span class="p-column-title">Country</span>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
            </td>
            <td>
                <span class="p-column-title">Representative</span>
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
            </td>
            <td>
                <span class="p-column-title">Date</span>
                {{ customer.date | date: 'MM/dd/yyyy' }}
            </td>
            <td>
                <span class="p-column-title">Balance</span>
                {{ customer.balance | currency: 'USD':'symbol' }}
            </td>
            <td>
                <span class="p-column-title">Status</span>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                <span class="p-column-title">Activity</span>
                <p-progressBar [value]="customer.activity" [showValue]="false"></p-progressBar>
            </td>
            <td style="text-align: center">
                <button pButton type="button" class="p-button-secondary" icon="pi pi-cog"></button>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="emptymessage">
        <tr>
            <td colspan="8">No customers found.</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        #dt
        [value]="customers"
        [(selection)]="selectedCustomers"
        dataKey="id"
        [rowHover]="true"
        [rows]="10"
        [showCurrentPageReport]="true"
        [rowsPerPageOptions]="[10, 25, 50]"
        [loading]="loading"
        [paginator]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [filterDelay]="0"
        [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    >
        <ng-template pTemplate="caption">
            <div class="table-header">
                List of Customers
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input pInputText type="text" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Global Search" />
                </span>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th pSortableColumn="name" style="min-width: 14rem">
                    <div class="flex justify-content-between align-items-center">
                        Name
                        <p-sortIcon field="name"></p-sortIcon>
                        <p-columnFilter type="text" field="name" display="menu" class="ml-auto"></p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="country.name" style="min-width: 14rem">
                    <div class="flex justify-content-between align-items-center">
                        Country
                        <p-sortIcon field="country.name"></p-sortIcon>
                        <p-columnFilter type="text" field="country.name" display="menu" class="ml-auto"></p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="representative.name" style="min-width: 14rem">
                    <div class="flex justify-content-between align-items-center">
                        Agent
                        <p-sortIcon field="representative.name"></p-sortIcon>
                        <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                            <ng-template pTemplate="header">
                                <div class="px-3 pt-3 pb-0">
                                    <span class="font-bold">Agent Picker</span>
                                </div>
                            </ng-template>
                            <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                                <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                                    <ng-template let-option pTemplate="item">
                                        <div class="inline-block vertical-align-middle">
                                            <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                            <span class="ml-1 mt-1">{{ option.name }}</span>
                                        </div>
                                    </ng-template>
                                </p-multiSelect>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="date" style="min-width: 10rem">
                    <div class="flex justify-content-between align-items-center">
                        Date
                        <p-sortIcon field="date"></p-sortIcon>
                        <p-columnFilter type="date" field="date" display="menu" class="ml-auto"></p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="balance" style="min-width: 10rem">
                    <div class="flex justify-content-between align-items-center">
                        Balance
                        <p-sortIcon field="balance"></p-sortIcon>
                        <p-columnFilter type="numeric" field="balance" display="menu" currency="USD" class="ml-auto"></p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="status" style="min-width: 10rem">
                    <div class="flex justify-content-between align-items-center">
                        Status
                        <p-sortIcon field="status"></p-sortIcon>
                        <p-columnFilter field="status" matchMode="equals" display="menu" class="ml-auto">
                            <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                                <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any">
                                    <ng-template let-option pTemplate="item">
                                        <p-tag [value]="option.label" [severity]="getSeverity(option.label)"></p-tag>
                                    </ng-template>
                                </p-dropdown>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th pSortableColumn="activity" style="min-width: 10rem">
                    <div class="flex justify-content-between align-items-center">
                        Activity
                        <p-sortIcon field="activity"></p-sortIcon>
                        <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false" class="ml-auto">
                            <ng-template pTemplate="filter" let-filter="filterCallback">
                                <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-3"></p-slider>
                                <div class="flex align-items-center justify-content-between px-2">
                                    <span>{{ activityValues[0] }}</span>
                                    <span>{{ activityValues[1] }}</span>
                                </div>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th style="width: 5rem"></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr class="p-selectable-row">
                <td>
                    <p-tableCheckbox [value]="customer"></p-tableCheckbox>
                </td>
                <td>
                    <span class="p-column-title">Name</span>
                    {{ customer.name }}
                </td>
                <td>
                    <span class="p-column-title">Country</span>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
                </td>
                <td>
                    <span class="p-column-title">Representative</span>
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
                </td>
                <td>
                    <span class="p-column-title">Date</span>
                    {{ customer.date | date: 'MM/dd/yyyy' }}
                </td>
                <td>
                    <span class="p-column-title">Balance</span>
                    {{ customer.balance | currency: 'USD':'symbol' }}
                </td>
                <td>
                    <span class="p-column-title">Status</span>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    <span class="p-column-title">Activity</span>
                    <p-progressBar [value]="customer.activity" [showValue]="false"></p-progressBar>
                </td>
                <td style="text-align: center">
                    <button pButton type="button" class="p-button-secondary" icon="pi pi-cog"></button>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="8">No customers found.</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-customers-demo',
    templateUrl: 'table-customers-demo.html',
    styleUrls: ['table-customers-demo.scss']
})
export class TableCustomersDemo implements OnInit{
    customers!: Customer[];

    selectedCustomers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,scss:`
:host ::ng-deep {
    .p-paginator {
        .p-paginator-current {
            margin-left: auto;
        }
    }
    
    .p-progressbar {
        height: .5rem;
        background-color: #D8DADC;
    
        .p-progressbar-value {
            background-color: #607D8B;
        }
    }
    
    .table-header {
        display: flex;
        justify-content: space-between;
    }
    
    .p-calendar .p-datepicker {
        min-width: 25rem;
    
        td {
            font-weight: 400;
        }
    }
    
    .p-datatable.p-datatable-customers {
        .p-datatable-header {
            padding: 1rem;
            text-align: left;
            font-size: 1.5rem;
        }
    
        .p-paginator {
            padding: 1rem;
        }
    
        .p-datatable-thead > tr > th {
            text-align: left;
        }
    
        .p-datatable-tbody > tr > td {
            cursor: auto;
        }
    
        .p-dropdown-label:not(.p-placeholder) {
            text-transform: uppercase;
        }
    }

    .p-w-100 {
        width: 100%;
    }
    
    /* Responsive */
    .p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
        display: none;
    }
}

@media screen and (max-width: 960px) {
    :host ::ng-deep {
        .p-datatable {
            &.p-datatable-customers {
                .p-datatable-thead > tr > th,
                .p-datatable-tfoot > tr > td {
                    display: none !important;
                }
    
                .p-datatable-tbody > tr {
                    border-bottom: 1px solid var(--layer-2);
    
                    > td {
                        text-align: left;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        border: 0 none;
    
                        .p-column-title {
                            min-width: 30%;
                            display: inline-block;
                            font-weight: bold;
                        }
        
                        p-progressbar {
                            width: 100%;
                        }

                        &:last-child {
                            border-bottom: 1px solid var(--surface-d);
                        }
                    }
                }
            }
        }
    } 
}`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.loading=!1,this.customers.forEach(r=>r.date=new Date(r.date)),this.cd.markForCheck()}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"Xuxue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["customers-doc"]],decls:12,vars:14,consts:[["dt",""],[3,"load"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"selectionChange","value","selection","rowHover","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","filterDelay","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["selector","table-customers-demo",3,"code","extFiles"],[1,"table-header"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Global Search",3,"input"],[2,"width","4rem"],["pSortableColumn","name",2,"min-width","14rem"],[1,"flex","justify-content-between","align-items-center"],["field","name"],["type","text","field","name","display","menu",1,"ml-auto"],["pSortableColumn","country.name",2,"min-width","14rem"],["field","country.name"],["type","text","field","country.name","display","menu",1,"ml-auto"],["pSortableColumn","representative.name",2,"min-width","14rem"],["field","representative.name"],["field","representative","matchMode","in","display","menu",1,"ml-auto",3,"showMatchModes","showOperator","showAddButton"],["pTemplate","filter"],["pSortableColumn","date",2,"min-width","10rem"],["field","date"],["type","date","field","date","display","menu",1,"ml-auto"],["pSortableColumn","balance",2,"min-width","10rem"],["field","balance"],["type","numeric","field","balance","display","menu","currency","USD",1,"ml-auto"],["pSortableColumn","status",2,"min-width","10rem"],["field","status"],["field","status","matchMode","equals","display","menu",1,"ml-auto"],["pSortableColumn","activity",2,"min-width","10rem"],["field","activity"],["field","activity","matchMode","between","display","menu",1,"ml-auto",3,"showMatchModes","showOperator","showAddButton"],[2,"width","5rem"],[1,"px-3","pt-3","pb-0"],[1,"font-bold"],["placeholder","Any","optionLabel","name",3,"onChange","ngModel","options"],["pTemplate","item"],[1,"inline-block","vertical-align-middle"],["width","24",1,"vertical-align-middle",3,"alt","src"],[1,"ml-1","mt-1"],["placeholder","Any",3,"onChange","ngModel","options"],[3,"value","severity"],["styleClass","m-3",3,"onSlideEnd","ngModel","range"],[1,"flex","align-items-center","justify-content-between","px-2"],[1,"p-selectable-row"],[3,"value"],[1,"p-column-title"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],["width","32",2,"vertical-align","middle",3,"alt","src"],[3,"value","showValue"],[2,"text-align","center"],["pButton","","type","button","icon","pi pi-cog",1,"p-button-secondary"],["colspan","8"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2,"DataTable with selection, pagination, filtering, sorting and templating."),t()(),e(3,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(4,"div",2)(5,"p-table",3,0),z("selectionChange",function(M){return E(v),O(c.selectedCustomers,M)||(c.selectedCustomers=M),I(M)}),g(7,mo,5,0,"ng-template",4)(8,bo,43,6,"ng-template",5)(9,So,39,22,"ng-template",6)(10,xo,3,0,"ng-template",7),t()()(),m(11,"app-code",8)}r&2&&(p(5),s("value",c.customers),B("selection",c.selectedCustomers),s("rowHover",!0)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",b(12,po))("loading",c.loading)("paginator",!0)("filterDelay",0)("globalFilterFields",b(13,so)),p(6),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,ne,oe,de,ue,we,ie,qe,xe,ve,J,le,Ue,x,T,C,$,Ne],encapsulation:2,changeDetection:0});let n=o;return n})();var Co=()=>({"min-width":"60rem"});function _o(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code "),m(3,"p-sortIcon",7),t(),e(4,"th",8),i(5,"Name "),m(6,"p-sortIcon",9),t(),e(7,"th",10),i(8,"Category "),m(9,"p-sortIcon",11),t(),e(10,"th",12),i(11,"Quantity "),m(12,"p-sortIcon",13),t(),e(13,"th",14),i(14,"Price "),m(15,"p-sortIcon",15),t()())}function wo(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),U(11,"currency"),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity),p(2),d(K(11,5,a.price,"USD"))}}var Si=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" (sortFunction)="customSort($event)" [customSort]="true" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
            <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
            <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" (sortFunction)="customSort($event)" [customSort]="true" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { SortEvent } from 'primeng/api';

@Component({
    selector: 'table-custom-sort-demo',
    templateUrl: 'table-custom-sort-demo.html'
})
export class TableCustomSortDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    customSort(event: SortEvent) {
        event.data.sort((data1, data2) => {
            let value1 = data1[event.field];
            let value2 = data2[event.field];
            let result = null;

            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

            return event.order * result;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}customSort(l){l.data.sort((r,c)=>{let v=r[l.field],y=c[l.field],M=null;return v==null&&y!=null?M=-1:v!=null&&y==null?M=1:v==null&&y==null?M=0:typeof v=="string"&&typeof y=="string"?M=v.localeCompare(y):M=v<y?-1:v>y?1:0,l.order*M})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["custom-sort-doc"]],decls:21,vars:6,consts:[[3,"load"],[1,"card"],[3,"sortFunction","value","customSort","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-custom-sort-demo",3,"code","extFiles"],["pSortableColumn","code",2,"width","20%"],["field","code"],["pSortableColumn","name",2,"width","20%"],["field","name"],["pSortableColumn","category",2,"width","20%"],["field","category"],["pSortableColumn","quantity",2,"width","20%"],["field","quantity"],["pSortableColumn","price",2,"width","20%"],["field","price"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Instead of using the built-in sorting algorithm a custom sort can be attached by enabling "),e(3,"i"),i(4,"customSort"),t(),i(5," property and defining a sortFunction implementation. This function gets a SortEvent instance that provides the data to sort, "),e(6,"i"),i(7,"sortField"),t(),i(8,", "),e(9,"i"),i(10,"sortOrder"),t(),i(11," and "),e(12,"i"),i(13,"multiSortMeta"),t(),i(14,". "),t()(),e(15,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(16,"div",1)(17,"p-table",2),h("sortFunction",function(y){return c.customSort(y)}),g(18,_o,16,0,"ng-template",3)(19,wo,12,8,"ng-template",4),t()()(),m(20,"app-code",5)),r&2&&(p(17),s("value",c.products)("customSort",!0)("tableStyle",b(5,Co)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ne,oe,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var To=()=>({"min-width":"50rem"});function Do(n,o){if(n&1&&(e(0,"th"),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function Eo(n,o){if(n&1&&(e(0,"tr"),g(1,Do,2,1,"th",6),t()),n&2){let a=o.$implicit;p(),s("ngForOf",a)}}function Io(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function Po(n,o){if(n&1&&(e(0,"tr"),g(1,Io,2,1,"td",6),t()),n&2){let a=o.columns;p(),s("ngForOf",a)}}var xi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [columns]="cols" [value]="products" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr>
                <td *ngFor="let col of columns">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-dynamic-demo',
    templateUrl: 'table-dynamic-demo.html'
})
export class TableDynamicDemo {
    products!: Product[];

    cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["dynamic-doc"]],decls:12,vars:6,consts:[[3,"load"],[1,"card"],[3,"columns","value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-dynamic-demo",3,"code","extFiles"],[4,"ngFor","ngForOf"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Columns can be defined dynamically using the "),e(3,"i"),i(4,"*ngFor"),t(),i(5," directive."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,Eo,2,1,"ng-template",3)(10,Po,2,1,"ng-template",4),t()()(),m(11,"app-code",5)),r&2&&(p(8),s("columns",c.cols)("value",c.products)("tableStyle",b(5,To)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Fo=()=>({"min-width":"70rem"});function Mo(n,o){n&1&&(e(0,"tr")(1,"th",8),i(2,"Name"),t(),e(3,"th",8),i(4,"Country"),t(),e(5,"th",8),i(6,"Company"),t(),e(7,"th",8),i(8,"Status"),t(),e(9,"th",8),i(10,"Date"),t()())}function Ro(n,o){if(n&1&&(e(0,"tr")(1,"td",9),m(2,"button",10)(3,"img",11),e(4,"span",12),i(5),t()()()),n&2){let a=o.$implicit,l=o.expanded;p(2),s("pRowToggler",a)("icon",l?"pi pi-chevron-down":"pi pi-chevron-right"),p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name)}}function ko(n,o){if(n&1&&(e(0,"tr",13)(1,"td",14),i(2,"Total Customers"),t(),e(3,"td"),i(4),t()()),n&2){let a=o.$implicit,l=f();p(4),d(l.calculateCustomerTotal(a.representative.name))}}function Bo(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),m(4,"img",15),e(5,"span",16),i(6),t()(),e(7,"td"),i(8),t(),e(9,"td"),m(10,"p-tag",17),t(),e(11,"td"),i(12),t()()),n&2){let a=o.$implicit,l=f();p(2),P(" ",a.name," "),p(2),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(2),P(" ",a.company," "),p(2),s("value",a.status)("severity",l.getSeverity(a.status)),p(2),P(" ",a.date," ")}}var Ci=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width:20%">Name</th>
            <th style="width:20%">Country</th>
            <th style="width:20%">Company</th>
            <th style="width:20%">Status</th>
            <th style="width:20%">Date</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupheader" let-customer let-rowIndex="rowIndex" let-expanded="expanded">
        <tr>
            <td colspan="5">
                <button type="button" pButton pRipple [pRowToggler]="customer" class="p-button-text p-button-rounded p-button-plain mr-2" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupfooter" let-customer>
        <tr class="p-rowgroup-footer">
            <td colspan="4" style="text-align: right">Total Customers</td>
            <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="rowexpansion" let-customer>
        <tr>
            <td>
                {{customer.name}}
            </td>
            <td>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="customers" sortField="representative.name" sortMode="single" dataKey="representative.name" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '70rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:20%">Name</th>
                <th style="width:20%">Country</th>
                <th style="width:20%">Company</th>
                <th style="width:20%">Status</th>
                <th style="width:20%">Date</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupheader" let-customer let-rowIndex="rowIndex" let-expanded="expanded">
            <tr>
                <td colspan="5">
                    <button type="button" pButton pRipple [pRowToggler]="customer" class="p-button-text p-button-rounded p-button-plain mr-2" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="font-bold ml-2">{{customer.representative.name}}</span>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupfooter" let-customer>
            <tr class="p-rowgroup-footer">
                <td colspan="4" style="text-align: right">Total Customers</td>
                <td>{{calculateCustomerTotal(customer.representative.name)}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="rowexpansion" let-customer>
            <tr>
                <td>
                    {{customer.name}}
                </td>
                <td>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                    <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
                </td>
                <td>
                    {{customer.company}}
                </td>
                <td>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    {{customer.date}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-expandable-row-group-demo',
    templateUrl: 'table-expandable-row-group-demo.html',
    styleUrls: ['table-expandable-row-group-demo.scss']
})
export class TableExpandableRowGroupDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,scss:`
:host ::ng-deep .p-rowgroup-footer td {
    font-weight: 700;
}

:host ::ng-deep .p-rowgroup-header {
    span {
        font-weight: 700;
    }

    .p-row-toggler {
        vertical-align: middle;
        margin-right: .25rem;
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}calculateCustomerTotal(l){let r=0;if(this.customers)for(let c of this.customers)c.representative?.name===l&&r++;return r}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["expandable-row-group-doc"]],decls:20,vars:5,consts:[[3,"load"],[1,"card"],["sortField","representative.name","sortMode","single","dataKey","representative.name","rowGroupMode","subheader","groupRowsBy","representative.name",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","groupheader"],["pTemplate","groupfooter"],["pTemplate","rowexpansion"],["selector","table-expandable-row-group-demo",3,"code","extFiles"],[2,"width","20%"],["colspan","5"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain","mr-2",3,"pRowToggler","icon"],["width","32",2,"vertical-align","middle",3,"alt","src"],[1,"font-bold","ml-2"],[1,"p-rowgroup-footer"],["colspan","4",2,"text-align","right"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],[3,"value","severity"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"When "),e(3,"i"),i(4,"expandableRowGroups"),t(),i(5," is present in subheader based row grouping, groups can be expanded and collapsed. State of the expansions are controlled using the "),e(6,"i"),i(7,"expandedRows"),t(),i(8," and "),e(9,"i"),i(10,"onRowToggle"),t(),i(11," properties."),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),g(15,Mo,11,0,"ng-template",3)(16,Ro,6,6,"ng-template",4)(17,ko,5,1,"ng-template",5)(18,Bo,13,8,"ng-template",6),t()()(),m(19,"app-code",7)),r&2&&(p(14),s("value",c.customers)("tableStyle",b(4,Fo)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,je,ie,J,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var wi=yn(_i());var Oo=()=>({"min-width":"50rem"});function zo(n,o){if(n&1){let a=R();e(0,"div",8)(1,"button",9),h("click",function(){E(a),f();let r=ee(14);return I(r.exportCSV())}),t(),e(2,"button",10),h("click",function(){E(a);let r=f();return I(r.exportExcel())}),t(),e(3,"button",11),h("click",function(){E(a);let r=f();return I(r.exportPdf())}),t(),e(4,"button",12),h("click",function(){E(a),f();let r=ee(14);return I(r.exportCSV({selectionOnly:!0}))}),t()()}}function Ao(n,o){if(n&1&&(e(0,"th"),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function No(n,o){if(n&1&&(e(0,"tr"),g(1,Ao,2,1,"th",13),t()),n&2){let a=o.$implicit;p(),s("ngForOf",a)}}function Vo(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function Lo(n,o){if(n&1&&(e(0,"tr",14),g(1,Vo,2,1,"td",13),t()),n&2){let a=o.$implicit,l=o.columns;s("pSelectableRow",a),p(),s("ngForOf",l)}}var Ti=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table #dt [columns]="cols" [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [exportHeader]="'customExportHeader'" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="caption">
        <div class="flex">
            <button type="button" pButton pRipple icon="pi pi-file" (click)="dt.exportCSV()" class="mr-2" pTooltip="CSV" tooltipPosition="bottom"></button>
            <button type="button" pButton pRipple icon="pi pi-file-excel" (click)="exportExcel()" class="p-button-success mr-2" pTooltip="XLS" tooltipPosition="bottom"></button>
            <button type="button" pButton pRipple icon="pi pi-file-pdf" (click)="exportPdf()" class="p-button-warning mr-2" pTooltip="PDF" tooltipPosition="bottom"></button>
            <button type="button" pButton pRipple icon="pi pi-filter" (click)="dt.exportCSV({ selectionOnly: true })" class="p-button-info ml-auto" pTooltip="Selection Only" tooltipPosition="bottom"></button>
        </div>
    </ng-template>
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr [pSelectableRow]="rowData">
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table #dt [columns]="cols" [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [exportHeader]="'customExportHeader'" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="caption">
            <div class="flex">
                <button type="button" pButton pRipple icon="pi pi-file" (click)="dt.exportCSV()" class="mr-2" pTooltip="CSV" tooltipPosition="bottom"></button>
                <button type="button" pButton pRipple icon="pi pi-file-excel" (click)="exportExcel()" class="p-button-success mr-2" pTooltip="XLS" tooltipPosition="bottom"></button>
                <button type="button" pButton pRipple icon="pi pi-file-pdf" (click)="exportPdf()" class="p-button-warning mr-2" pTooltip="PDF" tooltipPosition="bottom"></button>
                <button type="button" pButton pRipple icon="pi pi-filter" (click)="dt.exportCSV({ selectionOnly: true })" class="p-button-info ml-auto" pTooltip="Selection Only" tooltipPosition="bottom"></button>
            </div>
        </ng-template>
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr [pSelectableRow]="rowData">
                <td *ngFor="let col of columns">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'table-export-demo',
    templateUrl: 'table-export-demo.html'
})
export class TableExportDemo implements OnInit{
    products!: Product[];

    selectedProducts!: Product[];

    constructor(private productService: ProductService) {}

    cols!: Column[];

    exportColumns!: ExportColumn[];

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    exportPdf() {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then((x) => {
                const doc = new jsPDF.default('p', 'px', 'a4');
                (doc as any).autoTable(this.exportColumns, this.products);
                doc.save('products.pdf');
            });
        });
    }

    exportExcel() {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(this.products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
            this.saveAsExcelFile(excelBuffer, 'products');
        });
    }

    saveAsExcelFile(buffer: any, fileName: string): void {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code",customExportHeader:"Product Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}],this.exportColumns=this.cols.map(l=>({title:l.header,dataKey:l.field}))}exportPdf(){import("./chunk-UUO3OUIX.js").then(l=>{import("./chunk-FJKUO4CO.js").then(r=>{let c=new l.default("p","px","a4");c.autoTable(this.exportColumns,this.products),c.save("products.pdf")})})}exportExcel(){import("./chunk-73LXRZHN.js").then(l=>{let c={Sheets:{data:l.utils.json_to_sheet(this.products)},SheetNames:["data"]},v=l.write(c,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(v,"products")})}saveAsExcelFile(l,r){let c="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",v=".xlsx",y=new Blob([l],{type:c});wi.saveAs(y,r+"_export_"+new Date().getTime()+v)}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["export-doc"]],decls:19,vars:8,consts:[["dt",""],[3,"load"],[1,"card"],["selectionMode","multiple",3,"selectionChange","columns","value","selection","exportHeader","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["selector","table-export-demo",3,"code","extFiles"],[1,"flex"],["type","button","pButton","","pRipple","","icon","pi pi-file","pTooltip","CSV","tooltipPosition","bottom",1,"mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-file-excel","pTooltip","XLS","tooltipPosition","bottom",1,"p-button-success","mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-file-pdf","pTooltip","PDF","tooltipPosition","bottom",1,"p-button-warning","mr-2",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-filter","pTooltip","Selection Only","tooltipPosition","bottom",1,"p-button-info","ml-auto",3,"click"],[4,"ngFor","ngForOf"],[3,"pSelectableRow"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2," Table can export its data in CSV format using the built-in "),e(3,"i"),i(4,"exportCSV()"),t(),i(5," function. By default, all data is exported. If you'd like to export only the selection then pass a config object with "),e(6,"i"),i(7,"selectionOnly"),t(),i(8," property as true. Note that columns should be dynamic for export functionality to work, and column objects must define field/header properties. "),t(),e(9,"p"),i(10,"PDF and EXCEL export are also available using 3rd party libraries such as jspdf. Example below demonstrates how to implement all three export options."),t()(),e(11,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(12,"div",2)(13,"p-table",3,0),z("selectionChange",function(M){return E(v),O(c.selectedProducts,M)||(c.selectedProducts=M),I(M)}),g(15,zo,5,0,"ng-template",4)(16,No,2,1,"ng-template",5)(17,Lo,2,2,"ng-template",6),t()()(),m(18,"app-code",7)}r&2&&(p(13),s("columns",c.cols)("value",c.products),B("selection",c.selectedProducts),s("exportHeader","customExportHeader")("tableStyle",b(7,Oo)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,w,_,be,ie,gt,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var qo=()=>[10,25,50],Uo=()=>["name","country.name","representative.name","status"],jo=(n,o)=>({"text-green-500 pi-check-circle":n,"text-red-500 pi-times-circle":o});function Ko(n,o){if(n&1){let a=R();e(0,"div",9)(1,"button",10),h("click",function(){E(a);let r=f(),c=ee(6);return I(r.clear(c))}),t(),e(2,"span",11),m(3,"i",12),e(4,"input",13),h("input",function(r){E(a),f();let c=ee(6);return I(c.filterGlobal(r.target.value,"contains"))}),t()()()}}function Wo(n,o){n&1&&(e(0,"div",27)(1,"span",28),i(2,"Agent Picker"),t()())}function Yo(n,o){if(n&1&&(e(0,"div",31),m(1,"img",32),e(2,"span",33),i(3),t()()),n&2){let a=o.$implicit;p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.image,"",G),s("alt",a.label),p(2),d(a.name)}}function Ho(n,o){if(n&1){let a=R();e(0,"p-multiSelect",29),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,Yo,4,4,"ng-template",30),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.representatives)}}function $o(n,o){if(n&1&&m(0,"p-tag",35),n&2){let a=o.$implicit,l=f(3);s("value",a.value)("severity",l.getSeverity(a.label))}}function Go(n,o){if(n&1){let a=R();e(0,"p-dropdown",34),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,$o,1,2,"ng-template",30),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.statuses)}}function Qo(n,o){n&1&&(e(0,"span"),i(1,"0"),t())}function Jo(n,o){if(n&1&&(e(0,"span"),i(1),t()),n&2){let a=f().$implicit;p(),lt("",a[0]," - ",a[1],"")}}function Xo(n,o){if(n&1){let a=R();e(0,"p-slider",36),h("onSlideEnd",function(r){let c=E(a).filterCallback;return I(c(r.values))}),t(),e(1,"div",37),g(2,Qo,2,0,"span",38)(3,Jo,2,2,"span",38),t()}if(n&2){let a=o.$implicit;s("ngModel",a)("range",!0),p(2),s("ngIf",!a),p(),s("ngIf",a)}}function Zo(n,o){n&1&&(e(0,"tr")(1,"th",14)(2,"div",15),i(3," Name "),m(4,"p-columnFilter",16),t()(),e(5,"th",14)(6,"div",15),i(7," Country "),m(8,"p-columnFilter",17),t()(),e(9,"th",14)(10,"div",15),i(11," Agent "),e(12,"p-columnFilter",18),g(13,Wo,3,0,"ng-template",5)(14,Ho,2,2,"ng-template",19),t()()(),e(15,"th",20)(16,"div",15),i(17," Date "),m(18,"p-columnFilter",21),t()(),e(19,"th",20)(20,"div",15),i(21," Balance "),m(22,"p-columnFilter",22),t()(),e(23,"th",20)(24,"div",15),i(25," Status "),e(26,"p-columnFilter",23),g(27,Go,2,2,"ng-template",19),t()()(),e(28,"th",20)(29,"div",15),i(30," Activity "),e(31,"p-columnFilter",24),g(32,Xo,4,4,"ng-template",19),t()()(),e(33,"th",25)(34,"div",15),i(35," Verified "),m(36,"p-columnFilter",26),t()()()),n&2&&(p(12),s("showMatchModes",!1)("showOperator",!1)("showAddButton",!1),p(19),s("showMatchModes",!1)("showOperator",!1)("showAddButton",!1))}function ea(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),m(4,"img",39),e(5,"span",40),i(6),t()(),e(7,"td"),m(8,"img",41),e(9,"span",40),i(10),t()(),e(11,"td"),i(12),U(13,"date"),t(),e(14,"td"),i(15),U(16,"currency"),t(),e(17,"td"),m(18,"p-tag",35),t(),e(19,"td"),m(20,"p-progressBar",42),t(),e(21,"td",43),m(22,"i",44),t()()),n&2){let a=o.$implicit,l=f();p(2),P(" ",a.name," "),p(2),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(2),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name),p(2),P(" ",K(13,15,a.date,"MM/dd/yyyy")," "),p(3),P(" ",Ae(16,18,a.balance,"USD","symbol")," "),p(3),s("value",a.status)("severity",l.getSeverity(a.status)),p(2),s("value",a.activity)("showValue",!1),p(2),s("ngClass",ze(22,jo,a.verified,!a.verified))}}function ta(n,o){n&1&&(e(0,"tr")(1,"td",45),i(2,"No customers found."),t()())}var Di=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.loading=!0,this.activityValues=[0,100],this.code={basic:`<p-table
    #dt1
    [value]="customers"
    dataKey="id"
    [rows]="10"
    [showCurrentPageReport]="true"
    [rowsPerPageOptions]="[10, 25, 50]"
    [loading]="loading"
    [paginator]="true"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
>
    <ng-template pTemplate="caption">
        <div class="flex">
            <button pButton label="Clear" class="p-button-outlined" icon="pi pi-filter-slash" (click)="clear(dt1)"></button>
            <span class="p-input-icon-left ml-auto">
                <i class="pi pi-search"></i>
                <input pInputText type="text" (input)="dt1.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
            </span>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th style="min-width:15rem">
                <div class="flex align-items-center">
                    Name
                    <p-columnFilter type="text" field="name" display="menu"></p-columnFilter>
                </div>
            </th>
            <th style="min-width:15rem">
                <div class="flex align-items-center">
                    Country
                    <p-columnFilter type="text" field="country.name" display="menu"></p-columnFilter>
                </div>
            </th>
            <th style="min-width:15rem">
                <div class="flex align-items-center">
                    Agent
                    <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                        <ng-template pTemplate="header">
                            <div class="px-3 pt-3 pb-0">
                                <span class="font-bold">Agent Picker</span>
                            </div>
                        </ng-template>
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                                <ng-template let-option pTemplate="item">
                                    <div class="inline-block vertical-align-middle">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                        <span class="ml-1 mt-1">{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiSelect>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex align-items-center">
                    Date
                    <p-columnFilter type="date" field="date" display="menu"></p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex align-items-center">
                    Balance
                    <p-columnFilter type="numeric" field="balance" display="menu" currency="USD"></p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex align-items-center">
                    Status
                    <p-columnFilter field="status" matchMode="equals" display="menu">
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any">
                                <ng-template let-option pTemplate="item">
                                    <p-tag [value]="option.value" [severity]="getSeverity(option.label)"></p-tag>
                                </ng-template>
                            </p-dropdown>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="min-width:10rem">
                <div class="flex align-items-center">
                    Activity
                    <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                        <ng-template pTemplate="filter" let-filter="filterCallback">
                            <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-3"></p-slider>
                            <div class="flex align-items-center px-2">
                                <span>{{ activityValues[0] }}</span>
                                <span>{{ activityValues[1] }}</span>
                            </div>
                        </ng-template>
                    </p-columnFilter>
                </div>
            </th>
            <th style="width: 3rem">
                <div class="flex align-items-center">
                    Verified
                    <p-columnFilter type="boolean" field="verified" display="menu"></p-columnFilter>
                </div>
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
            </td>
            <td>
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
            </td>
            <td>
                {{ customer.date | date: 'MM/dd/yyyy' }}
            </td>
            <td>
                {{ customer.balance | currency: 'USD':'symbol' }}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                <p-progressBar [value]="customer.activity" [showValue]="false"></p-progressBar>
            </td>
            <td class="text-center">
                <i class="pi" [ngClass]="{ 'text-green-500 pi-check-circle': customer.verified, 'text-red-500 pi-times-circle': !customer.verified }"></i>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="emptymessage">
        <tr>
            <td colspan="7">No customers found.</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        #dt1
        [value]="customers"
        dataKey="id"
        [rows]="10"
        [showCurrentPageReport]="true"
        [rowsPerPageOptions]="[10, 25, 50]"
        [loading]="loading"
        [paginator]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
        >
        <ng-template pTemplate="caption">
            <div class="flex">
                <button pButton label="Clear" class="p-button-outlined" icon="pi pi-filter-slash" (click)="clear(dt1)"></button>
                <span class="p-input-icon-left ml-auto">
                    <i class="pi pi-search"></i>
                    <input pInputText type="text" (input)="dt1.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
                </span>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th style="min-width:15rem">
                    <div class="flex align-items-center">
                        Name
                        <p-columnFilter type="text" field="name" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th style="min-width:15rem">
                    <div class="flex align-items-center">
                        Country
                        <p-columnFilter type="text" field="country.name" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th style="min-width:15rem">
                    <div class="flex align-items-center">
                        Agent
                        <p-columnFilter field="representative" matchMode="in" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                            <ng-template pTemplate="header">
                                <div class="px-3 pt-3 pb-0">
                                    <span class="font-bold">Agent Picker</span>
                                </div>
                            </ng-template>
                            <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                                <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                                    <ng-template let-option pTemplate="item">
                                        <div class="inline-block vertical-align-middle">
                                            <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                            <span class="ml-1 mt-1">{{ option.name }}</span>
                                        </div>
                                    </ng-template>
                                </p-multiSelect>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th style="min-width:10rem">
                    <div class="flex align-items-center">
                        Date
                        <p-columnFilter type="date" field="date" display="menu"></p-columnFilter>
                    </div>
                </th>
                <th style="min-width:10rem">
                    <div class="flex align-items-center">
                        Balance
                        <p-columnFilter type="numeric" field="balance" display="menu" currency="USD"></p-columnFilter>
                    </div>
                </th>
                <th style="min-width:10rem">
                    <div class="flex align-items-center">
                        Status
                        <p-columnFilter field="status" matchMode="equals" display="menu">
                            <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                                <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any">
                                    <ng-template let-option pTemplate="item">
                                        <p-tag [value]="option.value" [severity]="getSeverity(option.label)"></p-tag>
                                    </ng-template>
                                </p-dropdown>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th style="min-width:10rem">
                    <div class="flex align-items-center">
                        Activity
                        <p-columnFilter field="activity" matchMode="between" display="menu" [showMatchModes]="false" [showOperator]="false" [showAddButton]="false">
                            <ng-template pTemplate="filter" let-filter="filterCallback">
                                <p-slider [ngModel]="activityValues" [range]="true" (onSlideEnd)="filter($event.values)" styleClass="m-3"></p-slider>
                                <div class="flex align-items-center px-2">
                                    <span>{{ activityValues[0] }}</span>
                                    <span>{{ activityValues[1] }}</span>
                                </div>
                            </ng-template>
                        </p-columnFilter>
                    </div>
                </th>
                <th style="width: 3rem">
                    <div class="flex align-items-center">
                        Verified
                        <p-columnFilter type="boolean" field="verified" display="menu"></p-columnFilter>
                    </div>
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>
                    {{ customer.name }}
                </td>
                <td>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
                </td>
                <td>
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
                </td>
                <td>
                    {{ customer.date | date: 'MM/dd/yyyy' }}
                </td>
                <td>
                    {{ customer.balance | currency: 'USD':'symbol' }}
                </td>
                <td>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    <p-progressBar [value]="customer.activity" [showValue]="false"></p-progressBar>
                </td>
                <td class="text-center">
                    <i class="pi" [ngClass]="{ 'text-green-500 pi-check-circle': customer.verified, 'text-red-500 pi-times-circle': !customer.verified }"></i>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="7">No customers found.</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-filter-menu-demo',
    templateUrl: 'table-filter-menu-demo.html',
    styleUrls: ['table-filter-menu-demo.scss']
})
export class TableFilterMenuDemo implements OnInit {
    customers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: Table) {
        table.clear();
    }

    getSeverity(status: string) {
        switch (status.toLowerCase()) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,scss:`
:host ::ng-deep {
    .p-progressbar {
        height: .5rem;
        background-color: #D8DADC;
    
        .p-progressbar-value {
            background-color: #607D8B;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.loading=!1,this.customers.forEach(r=>r.date=new Date(r.date)),this.cd.markForCheck()}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"Xuxue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}clear(l){l.clear()}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["filter-menu-doc"]],decls:12,vars:11,consts:[["dt1",""],[3,"load"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["selector","table-filter-menu-demo",3,"code","extFiles"],[1,"flex"],["pButton","","label","Clear","icon","pi pi-filter-slash",1,"p-button-outlined",3,"click"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],[2,"min-width","15rem"],[1,"flex","align-items-center"],["type","text","field","name","display","menu"],["type","text","field","country.name","display","menu"],["field","representative","matchMode","in","display","menu",3,"showMatchModes","showOperator","showAddButton"],["pTemplate","filter"],[2,"min-width","10rem"],["type","date","field","date","display","menu"],["type","numeric","field","balance","display","menu","currency","USD"],["field","status","matchMode","equals","display","menu"],["field","activity","matchMode","between","display","menu",3,"showMatchModes","showOperator","showAddButton"],[2,"width","3rem"],["type","boolean","field","verified","display","menu"],[1,"px-3","pt-3","pb-0"],[1,"font-bold"],["placeholder","Any","optionLabel","name",3,"onChange","ngModel","options"],["pTemplate","item"],[1,"inline-block","vertical-align-middle"],["width","24",1,"vertical-align-middle",3,"alt","src"],[1,"ml-1","mt-1"],["placeholder","Any",3,"onChange","ngModel","options"],[3,"value","severity"],["styleClass","m-3",3,"onSlideEnd","ngModel","range"],[1,"flex","align-items-center","px-2"],[4,"ngIf"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],["width","32",2,"vertical-align","middle",3,"alt","src"],[3,"value","showValue"],[1,"text-center"],[1,"pi",3,"ngClass"],["colspan","7"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2,"Filters are displayed in an overlay."),t()(),e(3,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(4,"div",2)(5,"p-table",3,0),g(7,Ko,5,0,"ng-template",4)(8,Zo,37,6,"ng-template",5)(9,ea,23,25,"ng-template",6)(10,ta,3,0,"ng-template",7),t()()(),m(11,"app-code",8)}r&2&&(p(5),s("value",c.customers)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",b(9,qo))("loading",c.loading)("paginator",!0)("globalFilterFields",b(10,Uo)),p(6),s("code",c.code)("extFiles",c.extFiles))},dependencies:[Ie,_e,W,Y,w,_,we,ie,qe,xe,ve,J,le,Ue,x,T,C,$,Ne],encapsulation:2,changeDetection:0});let n=o;return n})();var ia=()=>[10,25,50],na=()=>["name","country.name","representative.name","status"],oa=()=>({"min-width":"75rem"}),aa=(n,o)=>({"text-green-500 pi-check-circle":n,"text-red-500 pi-times-circle":o});function ra(n,o){if(n&1){let a=R();e(0,"div",9)(1,"span",10),m(2,"i",11),e(3,"input",12),h("input",function(r){E(a),f();let c=ee(6);return I(c.filterGlobal(r.target.value,"contains"))}),t()()()}}function la(n,o){if(n&1&&(e(0,"div",23),m(1,"img",24),e(2,"span",25),i(3),t()()),n&2){let a=o.$implicit;p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.image,"",G),s("alt",a.label),p(2),d(a.name)}}function ca(n,o){if(n&1){let a=R();e(0,"p-multiSelect",21),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,la,4,4,"ng-template",22),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.representatives)}}function pa(n,o){if(n&1&&m(0,"p-tag",27),n&2){let a=o.$implicit,l=f(3);s("value",a.value)("severity",l.getSeverity(a.label))}}function sa(n,o){if(n&1){let a=R();e(0,"p-dropdown",26),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,pa,1,2,"ng-template",22),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.statuses)("showClear",!0)}}function ma(n,o){n&1&&(e(0,"tr")(1,"th",13),i(2,"Name"),t(),e(3,"th",13),i(4,"Country"),t(),e(5,"th",13),i(6,"Agent"),t(),e(7,"th",13),i(8,"Status"),t(),e(9,"th",14),i(10,"Verified"),t()(),e(11,"tr")(12,"th"),m(13,"p-columnFilter",15),t(),e(14,"th"),m(15,"p-columnFilter",16),t(),e(16,"th")(17,"p-columnFilter",17),g(18,ca,2,2,"ng-template",18),t()(),e(19,"th")(20,"p-columnFilter",19),g(21,sa,2,3,"ng-template",18),t()(),e(22,"th"),m(23,"p-columnFilter",20),t()()),n&2&&(p(17),s("showMenu",!1),p(3),s("showMenu",!1))}function da(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),m(4,"img",28),e(5,"span",29),i(6),t()(),e(7,"td"),m(8,"img",30),e(9,"span",29),i(10),t()(),e(11,"td"),m(12,"p-tag",27),t(),e(13,"td"),m(14,"i",31),t()()),n&2){let a=o.$implicit,l=f();p(2),P(" ",a.name," "),p(2),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(2),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name),p(2),s("value",a.status)("severity",l.getSeverity(a.status)),p(2),s("ngClass",ze(11,aa,a.verified,!a.verified))}}function ua(n,o){n&1&&(e(0,"tr")(1,"td",32),i(2,"No customers found."),t()())}var Ei=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.loading=!0,this.activityValues=[0,100],this.code={basic:`<p-table
    #dt2
    [value]="customers"
    dataKey="id"
    [rows]="10"
    [showCurrentPageReport]="true"
    [rowsPerPageOptions]="[10, 25, 50]"
    [loading]="loading"
    [paginator]="true"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    [tableStyle]="{ 'min-width': '75rem' }"
    >
    <ng-template pTemplate="caption">
        <div class="flex">
            <span class="p-input-icon-left ml-auto">
                <i class="pi pi-search"></i>
                <input pInputText type="text" (input)="dt2.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
            </span>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:22%">Name</th>
            <th style="width:22%">Country</th>
            <th style="width:22%">Agent</th>
            <th style="width:22%">Status</th>
            <th style="width:12%">Verified</th>
        </tr>
        <tr>
            <th>
                <p-columnFilter type="text" field="name"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="text" field="country.name"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter field="representative" matchMode="in" [showMenu]="false">
                    <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                        <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                            <ng-template let-option pTemplate="item">
                                <div class="inline-block vertical-align-middle">
                                    <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                    <span class="ml-1 mt-1">{{ option.name }}</span>
                                </div>
                            </ng-template>
                        </p-multiSelect>
                    </ng-template>
                </p-columnFilter>
            </th>
            <th>
                <p-columnFilter field="status" matchMode="equals" [showMenu]="false">
                    <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                        <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [showClear]="true">
                            <ng-template let-option pTemplate="item">
                                <p-tag [value]="option.value" [severity]="getSeverity(option.label)"></p-tag>
                            </ng-template>
                        </p-dropdown>
                    </ng-template>
                </p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="boolean" field="verified"></p-columnFilter>
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>
                {{ customer.name }}
            </td>
            <td>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
            </td>
            <td>
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                <i class="pi" [ngClass]="{ 'text-green-500 pi-check-circle': customer.verified, 'text-red-500 pi-times-circle': !customer.verified }"></i>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="emptymessage">
        <tr>
            <td colspan="5">No customers found.</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        #dt2
        [value]="customers"
        dataKey="id"
        [rows]="10"
        [showCurrentPageReport]="true"
        [rowsPerPageOptions]="[10, 25, 50]"
        [loading]="loading"
        [paginator]="true"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
        [tableStyle]="{ 'min-width': '75rem' }"
        >
        <ng-template pTemplate="caption">
            <div class="flex">
                <span class="p-input-icon-left ml-auto">
                    <i class="pi pi-search"></i>
                    <input pInputText type="text" (input)="dt2.filterGlobal($event.target.value, 'contains')" placeholder="Search keyword" />
                </span>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th style="width:22%">Name</th>
                <th style="width:22%">Country</th>
                <th style="width:22%">Agent</th>
                <th style="width:22%">Status</th>
                <th style="width:12%">Verified</th>
            </tr>
            <tr>
                <th>
                    <p-columnFilter type="text" field="name"></p-columnFilter>
                </th>
                <th>
                    <p-columnFilter type="text" field="country.name"></p-columnFilter>
                </th>
                <th>
                    <p-columnFilter field="representative" matchMode="in" [showMenu]="false">
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-multiSelect [ngModel]="value" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name">
                                <ng-template let-option pTemplate="item">
                                    <div class="inline-block vertical-align-middle">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                        <span class="ml-1 mt-1">{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiSelect>
                        </ng-template>
                    </p-columnFilter>
                </th>
                <th>
                    <p-columnFilter field="status" matchMode="equals" [showMenu]="false">
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-dropdown [ngModel]="value" [options]="statuses" (onChange)="filter($event.value)" placeholder="Any" [showClear]="true">
                                <ng-template let-option pTemplate="item">
                                    <p-tag [value]="option.value" [severity]="getSeverity(option.label)"></p-tag>
                                </ng-template>
                            </p-dropdown>
                        </ng-template>
                    </p-columnFilter>
                </th>
                <th>
                    <p-columnFilter type="boolean" field="verified"></p-columnFilter>
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>
                    {{ customer.name }}
                </td>
                <td>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px" />
                    <span class="ml-1 vertical-align-middle">{{ customer.country.name }}</span>
                </td>
                <td>
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ customer.representative.image }}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 vertical-align-middle">{{ customer.representative.name }}</span>
                </td>
                <td>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    <i class="pi" [ngClass]="{ 'text-green-500 pi-check-circle': customer.verified, 'text-red-500 pi-times-circle': !customer.verified }"></i>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="5">No customers found.</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-filter-row-demo',
    templateUrl: 'table-filter-row-demo.html'
})
export class TableFilterRowDemo implements OnInit {
    customers!: Customer[];

    representatives!: Representative[];

    statuses!: any[];

    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => {
            this.customers = customers;
            this.loading = false;

            this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: Table) {
        table.clear();
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.loading=!1,this.customers.forEach(r=>r.date=new Date(r.date)),this.cd.markForCheck()}),this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"Xuxue Feng",image:"xuxuefeng.png"}],this.statuses=[{label:"Unqualified",value:"unqualified"},{label:"Qualified",value:"qualified"},{label:"New",value:"new"},{label:"Negotiation",value:"negotiation"},{label:"Renewal",value:"renewal"},{label:"Proposal",value:"proposal"}]}clear(l){l.clear()}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["filter-row-doc"]],decls:12,vars:13,consts:[["dt2",""],[3,"load"],[1,"card"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","rows","showCurrentPageReport","rowsPerPageOptions","loading","paginator","globalFilterFields","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["selector","table-filter-row-demo",3,"code","extFiles"],[1,"flex"],[1,"p-input-icon-left","ml-auto"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search keyword",3,"input"],[2,"width","22%"],[2,"width","12%"],["type","text","field","name","ariaLabel","Filter Name"],["type","text","field","country.name","ariaLabel","Filter Country"],["field","representative","matchMode","in",3,"showMenu"],["pTemplate","filter"],["field","status","matchMode","equals",3,"showMenu"],["type","boolean","field","verified"],["placeholder","Any","optionLabel","name",3,"onChange","ngModel","options"],["pTemplate","item"],[1,"inline-block","vertical-align-middle"],["width","24",1,"vertical-align-middle",3,"alt","src"],[1,"ml-1","mt-1"],["placeholder","Any",3,"onChange","ngModel","options","showClear"],[3,"value","severity"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],["width","32",2,"vertical-align","middle",3,"alt","src"],[1,"pi",3,"ngClass"],["colspan","5"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2,"Filters are displayed inline within a separate row."),t()(),e(3,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(4,"div",2)(5,"p-table",3,0),g(7,ra,4,0,"ng-template",4)(8,ma,24,2,"ng-template",5)(9,da,15,14,"ng-template",6)(10,ua,3,0,"ng-template",7),t()()(),m(11,"app-code",8)}r&2&&(p(5),s("value",c.customers)("rows",10)("showCurrentPageReport",!0)("rowsPerPageOptions",b(10,ia))("loading",c.loading)("paginator",!0)("globalFilterFields",b(11,na))("tableStyle",b(12,oa)),p(6),s("code",c.code)("extFiles",c.extFiles))},dependencies:[Ie,W,Y,w,_,we,xe,ve,J,le,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var ha=()=>({width:"75vw"}),fa=()=>({height:"300px"}),ya=()=>({"min-width":"50rem"});function va(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Country"),t(),e(5,"th"),i(6,"Company"),t(),e(7,"th"),i(8,"Representative"),t()())}function ba(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}function Sa(n,o){if(n&1){let a=R();e(0,"button",10),h("click",function(){E(a);let r=f();return I(r.dialogVisible=!1)}),t()}}var Ii=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.dialogVisible=!1,this.code={basic:`<div class="flex justify-content-center">
    <button type="button" (click)="showDialog()" pButton icon="pi pi-external-link" label="View"></button>
</div>
<p-dialog header="Header" [resizable]="false" [modal]="true" [maximizable]="true" appendTo="body" [(visible)]="dialogVisible" [style]="{width: '75vw'}" [contentStyle]="{height: '300px'}">
    <p-table [value]="customers" [scrollable]="true" scrollHeight="flex" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{customer.name}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.representative.name}}</td>
            </tr>
        </ng-template>
    </p-table>
    <ng-template pTemplate="footer">
        <button type="button" pButton pRipple icon="pi pi-times" (click)="dialogVisible=false" label="Dismiss" class="p-button-text"></button>
    </ng-template>
</p-dialog>`,html:`
<div class="card">
    <div class="flex justify-content-center">
        <button type="button" (click)="showDialog()" pButton icon="pi pi-external-link" label="View"></button>
    </div>
    <p-dialog header="Header" [resizable]="false" [modal]="true" [maximizable]="true" appendTo="body" [(visible)]="dialogVisible" [style]="{width: '75vw'}" [contentStyle]="{height: '300px'}">
        <p-table [value]="customers" [scrollable]="true" scrollHeight="flex" [tableStyle]="{'min-width': '50rem'}">
            <ng-template pTemplate="header">
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Company</th>
                    <th>Representative</th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-customer>
                <tr>
                    <td>{{customer.name}}</td>
                    <td>{{customer.country.name}}</td>
                    <td>{{customer.company}}</td>
                    <td>{{customer.representative.name}}</td>
                </tr>
            </ng-template>
        </p-table>
        <ng-template pTemplate="footer">
            <button type="button" pButton pRipple icon="pi pi-times" (click)="dialogVisible=false" label="Dismiss" class="p-button-text"></button>
        </ng-template>
    </p-dialog>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-flexible-scroll-demo',
    templateUrl: 'table-flexible-scroll-demo.html'
})
export class TableFlexibleScrollDemo implements OnInit{
    customers!: Customer[];

    dialogVisible: boolean = false;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    showDialog() {
        this.dialogVisible = true;
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l})}showDialog(){this.dialogVisible=!0}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["flexible-scroll-doc"]],decls:13,vars:15,consts:[[3,"load"],[1,"card"],[1,"flex","justify-content-center"],["type","button","pButton","","icon","pi pi-external-link","label","View",3,"click"],["header","Header","appendTo","body",3,"visibleChange","resizable","modal","maximizable","visible","contentStyle"],["scrollHeight","flex",3,"value","scrollable","tableStyle"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["selector","table-flexible-scroll-demo",3,"code","extFiles"],["type","button","pButton","","pRipple","","icon","pi pi-times","label","Dismiss",1,"p-button-text",3,"click"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Flex scroll feature makes the scrollable viewport section dynamic instead of a fixed value so that it can grow or shrink relative to the parent size of the table. Click the button below to display a maximizable Dialog where data viewport adjusts itself according to the size changes. "),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"div",2)(6,"button",3),h("click",function(){return c.showDialog()}),t()(),e(7,"p-dialog",4),z("visibleChange",function(y){return O(c.dialogVisible,y)||(c.dialogVisible=y),y}),e(8,"p-table",5),g(9,va,9,0,"ng-template",6)(10,ba,9,4,"ng-template",7),t(),g(11,Sa,1,0,"ng-template",8),t()()(),m(12,"app-code",9)),r&2&&(p(7),Ce(b(12,ha)),s("resizable",!1)("modal",!0)("maximizable",!0),B("visible",c.dialogVisible),s("contentStyle",b(13,fa)),p(),s("value",c.customers)("scrollable",!0)("tableStyle",b(14,ya)),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ie,Ye,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();function xa(n,o){if(n&1&&(e(0,"tr")(1,"th",7),i(2,"Name"),t(),e(3,"th",8),i(4,"Id"),t(),e(5,"th",9),i(6,"Country"),t(),e(7,"th",9),i(8,"Date"),t(),e(9,"th",9),i(10,"Company"),t(),e(11,"th",9),i(12,"Status"),t(),e(13,"th",9),i(14,"Activity"),t(),e(15,"th",9),i(16,"Representative"),t(),e(17,"th",10),i(18,"Balance"),t()()),n&2){let a=f();p(17),s("frozen",a.balanceFrozen)}}function Ca(n,o){if(n&1&&(e(0,"tr")(1,"td",11),i(2),t(),e(3,"td",8),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t(),e(11,"td"),i(12),t(),e(13,"td"),i(14),t(),e(15,"td"),i(16),t(),e(17,"td",12),i(18),t()()),n&2){let a=o.$implicit,l=f();p(2),d(a.name),p(2),d(a.id),p(2),d(a.country.name),p(2),d(a.date),p(2),d(a.company),p(2),d(a.status),p(2),d(a.activity),p(2),d(a.representative.name),p(),s("frozen",l.balanceFrozen),p(),d(l.formatCurrency(a.balance))}}var Pi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.balanceFrozen=!1,this.code={basic:`<p-toggleButton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'Balance'" offLabel="Balance"></p-toggleButton>

<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" styleClass="mt-3">
    <ng-template pTemplate="header">
        <tr>
            <th style="min-width:200px" pFrozenColumn>Name</th>
            <th style="min-width:100px">Id</th>
            <th style="min-width:200px">Country</th>
            <th style="min-width:200px">Date</th>
            <th style="min-width:200px">Company</th>
            <th style="min-width:200px">Status</th>
            <th style="min-width:200px">Activity</th>
            <th style="min-width:200px">Representative</th>
            <th style="min-width:200px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">Balance</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td pFrozenColumn>{{customer.name}}</td>
            <td style="min-width:100px">{{customer.id}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.date}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.status}}</td>
            <td>{{customer.activity}}</td>
            <td >{{customer.representative.name}}</td>
            <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">{{formatCurrency(customer.balance)}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-toggleButton [(ngModel)]="balanceFrozen" [onIcon]="'pi pi-lock'" offIcon="pi pi-lock-open" [onLabel]="'Balance'" offLabel="Balance"></p-toggleButton>

    <p-table [value]="customers" [scrollable]="true" scrollHeight="400px" styleClass="mt-3">
        <ng-template pTemplate="header">
            <tr>
                <th style="min-width:200px" pFrozenColumn>Name</th>
                <th style="min-width:100px">Id</th>
                <th style="min-width:200px">Country</th>
                <th style="min-width:200px">Date</th>
                <th style="min-width:200px">Company</th>
                <th style="min-width:200px">Status</th>
                <th style="min-width:200px">Activity</th>
                <th style="min-width:200px">Representative</th>
                <th style="min-width:200px" alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">Balance</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td pFrozenColumn>{{customer.name}}</td>
                <td style="min-width:100px">{{customer.id}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.date}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.status}}</td>
                <td>{{customer.activity}}</td>
                <td >{{customer.representative.name}}</td>
                <td alignFrozen="right" pFrozenColumn [frozen]="balanceFrozen">{{formatCurrency(customer.balance)}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-frozen-columns-demo',
    templateUrl: 'table-frozen-columns-demo.html'
})
export class TableFrozenColumnsDemo implements OnInit{
    balanceFrozen: boolean = false;

    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } 
}`,scss:`
:host ::ng-deep  .p-frozen-column {
    font-weight: bold;
}
:host ::ng-deep .p-datatable-frozen-tbody {
    font-weight: bold;
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}formatCurrency(l){return l.toLocaleString("en-US",{style:"currency",currency:"USD"})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["frozen-columns-doc"]],decls:16,vars:7,consts:[[3,"load"],[1,"card"],["offIcon","pi pi-lock-open","offLabel","Balance",3,"ngModelChange","ngModel","onIcon","onLabel"],["scrollHeight","400px","styleClass","mt-3",3,"value","scrollable"],["pTemplate","header"],["pTemplate","body"],["selector","table-frozen-columns-demo",3,"code","extFiles"],["pFrozenColumn","",2,"min-width","200px"],[2,"min-width","100px"],[2,"min-width","200px"],["alignFrozen","right","pFrozenColumn","",2,"min-width","200px",3,"frozen"],["pFrozenColumn",""],["alignFrozen","right","pFrozenColumn","",3,"frozen"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Certain columns can be frozen by using the "),e(3,"i"),i(4,"pFrozenColumn"),t(),i(5," directive of the table component. In addition, "),e(6,"i"),i(7,"alignFrozen"),t(),i(8," is available to define whether the column should be fixed on the left or right."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-toggleButton",2),z("ngModelChange",function(y){return O(c.balanceFrozen,y)||(c.balanceFrozen=y),y}),t(),e(12,"p-table",3),g(13,xa,19,1,"ng-template",4)(14,Ca,19,10,"ng-template",5),t()()(),m(15,"app-code",6)),r&2&&(p(11),B("ngModel",c.balanceFrozen),s("onIcon","pi pi-lock")("onLabel","Balance"),p(),s("value",c.customers)("scrollable",!0),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,Pt,oi,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var _a=()=>({"min-width":"60rem"});function wa(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Country"),t(),e(5,"th"),i(6,"Company"),t(),e(7,"th"),i(8,"Representative"),t(),m(9,"th",7),t())}function Ta(n,o){if(n&1){let a=R();e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",8),h("click",function(){let r=E(a),c=r.$implicit,v=r.rowIndex,y=f();return I(y.toggleLock(c,!0,v))}),t()()()}if(n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name),p(2),s("icon","pi pi-lock-open")}}function Da(n,o){if(n&1){let a=R();e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td")(10,"button",9),h("click",function(){let r=E(a),c=r.$implicit,v=r.rowIndex,y=f();return I(y.toggleLock(c,!1,v))}),t()()()}if(n&2){let a=o.$implicit,l=f();p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name),p(2),s("icon","pi pi-lock")("disabled",l.lockedCustomers.length>=2)}}var Fi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="unlockedCustomers" [frozenValue]="lockedCustomers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Representative</th>
            <th style="width:5rem"></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="frozenbody" let-customer let-index="rowIndex">
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
            <td>
                <button pButton pRipple type="button" [icon]="'pi pi-lock-open'" (click)="toggleLock(customer,true,index)" class="p-button-sm p-button-text"></button>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer let-index="rowIndex">
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
            <td>
                <button pButton pRipple type="button" [icon]="'pi pi-lock'" [disabled]="lockedCustomers.length >= 2" (click)="toggleLock(customer,false,index)" class="p-button-sm p-button-text"></button>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="unlockedCustomers" [frozenValue]="lockedCustomers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Representative</th>
                <th style="width:5rem"></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="frozenbody" let-customer let-index="rowIndex">
            <tr>
                <td>{{customer.name}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.representative.name}}</td>
                <td>
                    <button pButton pRipple type="button" [icon]="'pi pi-lock-open'" (click)="toggleLock(customer,true,index)" class="p-button-sm p-button-text"></button>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer let-index="rowIndex">
            <tr>
                <td>{{customer.name}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.representative.name}}</td>
                <td>
                    <button pButton pRipple type="button" [icon]="'pi pi-lock'" [disabled]="lockedCustomers.length >= 2" (click)="toggleLock(customer,false,index)" class="p-button-sm p-button-text"></button>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-frozen-rows-demo',
    templateUrl: 'table-frozen-rows-demo.html'
})
export class TableFrozenRowsDemo implements OnInit{
    unlockedCustomers!: Customer[];

    lockedCustomers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => (this.unlockedCustomers = data));

        this.lockedCustomers = [
            {
                id: 5135,
                name: 'Geraldine Bisset',
                country: {
                    name: 'France',
                    code: 'fr'
                },
                company: 'Bisset Group',
                status: 'proposal',
                date: '2019-05-05',
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                }
            }
        ];
    }

    toggleLock(data: Customer, frozen: boolean, index: number) {
        if (frozen) {
            this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
            this.unlockedCustomers.push(data);
        } else {
            this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
            this.lockedCustomers.push(data);
        }

        this.unlockedCustomers.sort((val1, val2) => {
            return val1.id < val2.id ? -1 : 1;
        });
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.unlockedCustomers=l,this.cd.markForCheck()}),this.lockedCustomers=[{id:5135,name:"Geraldine Bisset",country:{name:"France",code:"fr"},company:"Bisset Group",status:"proposal",date:"2019-05-05",activity:0,representative:{name:"Amy Elsner",image:"amyelsner.png"}}]}toggleLock(l,r,c){r?(this.lockedCustomers=this.lockedCustomers.filter((v,y)=>y!==c),this.unlockedCustomers.push(l)):(this.unlockedCustomers=this.unlockedCustomers.filter((v,y)=>y!==c),this.lockedCustomers.push(l)),this.unlockedCustomers.sort((v,y)=>v.id<y.id?-1:1)}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["frozen-rows-doc"]],decls:13,vars:7,consts:[[3,"load"],[1,"card"],["scrollHeight","400px",3,"value","frozenValue","scrollable","tableStyle"],["pTemplate","header"],["pTemplate","frozenbody"],["pTemplate","body"],["selector","table-frozen-rows-demo",3,"code","extFiles"],[2,"width","5rem"],["pButton","","pRipple","","type","button",1,"p-button-sm","p-button-text",3,"click","icon"],["pButton","","pRipple","","type","button",1,"p-button-sm","p-button-text",3,"click","icon","disabled"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Frozen rows are used to fix certain rows while scrolling, this data is defined with the "),e(3,"i"),i(4,"frozenValue"),t(),i(5," property."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,wa,10,0,"ng-template",3)(10,Ta,11,5,"ng-template",4)(11,Da,11,6,"ng-template",5),t()()(),m(12,"app-code",6)),r&2&&(p(8),s("value",c.unlockedCustomers)("frozenValue",c.lockedCustomers)("scrollable",!0)("tableStyle",b(6,_a)),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ie,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Ea=()=>({"min-width":"50rem"});function Ia(n,o){n&1&&i(0," Header ")}function Pa(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function Fa(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}function Ma(n,o){n&1&&i(0,"Footer")}var Mi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" styleClass="p-datatable-gridlines" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="caption"> Header </ng-template>
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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="summary"> Footer </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" styleClass="p-datatable-gridlines" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="caption"> Header </ng-template>
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
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="summary"> Footer </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-gridlines-demo',
    templateUrl: 'table-gridlines-demo.html'
})
export class TableGridlinesDemo {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["gridlines-doc"]],decls:14,vars:5,consts:[[3,"load"],[1,"card"],["styleClass","p-datatable-gridlines",3,"value","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["selector","table-gridlines-demo",3,"code","extFiles"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Adding "),e(3,"i"),i(4,"p-datatable-gridlines"),t(),i(5," class displays grid lines."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,Ia,1,0,"ng-template",3)(10,Pa,9,0,"ng-template",4)(11,Fa,9,4,"ng-template",5)(12,Ma,1,0,"ng-template",6),t()()(),m(13,"app-code",7)),r&2&&(p(8),s("value",c.products)("tableStyle",b(4,Ea)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Ri=(()=>{let o=class o{constructor(){this.code={typescript:"import { TableModule } from 'primeng/table';"}}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=S({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(r,c){r&1&&m(0,"app-code",0),r&2&&s("code",c.code)("hideToggleCode",!0)},dependencies:[x],encapsulation:2});let n=o;return n})();function Ra(n,o){n&1&&(e(0,"tr")(1,"th",7),i(2,"Id"),t(),e(3,"th",8),i(4,"Name"),t(),e(5,"th",8),i(6,"Country"),t(),e(7,"th",8),i(8,"Date"),t(),e(9,"th",8),i(10,"Balance"),t(),e(11,"th",8),i(12,"Company"),t(),e(13,"th",8),i(14,"Status"),t(),e(15,"th",8),i(16,"Activity"),t(),e(17,"th",8),i(18,"Representative"),t()())}function ka(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t(),e(11,"td"),i(12),t(),e(13,"td"),i(14),t(),e(15,"td"),i(16),t(),e(17,"td"),i(18),t()()),n&2){let a=o.$implicit,l=f();p(2),d(a.id),p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.date),p(2),d(l.formatCurrency(a.balance)),p(2),d(a.company),p(2),d(a.status),p(2),d(a.activity),p(2),d(a.representative.name)}}function Ba(n,o){n&1&&(e(0,"tr")(1,"td"),i(2,"Id"),t(),e(3,"td"),i(4,"Name"),t(),e(5,"td"),i(6,"Country"),t(),e(7,"td"),i(8,"Date"),t(),e(9,"td"),i(10,"Balance"),t(),e(11,"td"),i(12,"Company"),t(),e(13,"td"),i(14,"Status"),t(),e(15,"td"),i(16,"Activity"),t(),e(17,"td"),i(18,"Representative"),t()())}var ki=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" [scrollable]="true" scrollHeight="400px">
    <ng-template pTemplate="header">
        <tr>
            <th style="min-width:100px">Id</th>
            <th style="min-width:200px">Name</th>
            <th style="min-width:200px">Country</th>
            <th style="min-width:200px">Date</th>
            <th style="min-width:200px">Balance</th>
            <th style="min-width:200px">Company</th>
            <th style="min-width:200px">Status</th>
            <th style="min-width:200px">Activity</th>
            <th style="min-width:200px">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{customer.id}}</td>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.date}}</td>
            <td>{{formatCurrency(customer.balance)}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.status}}</td>
            <td>{{customer.activity}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="footer">
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Country</td>
            <td>Date</td>
            <td>Balance</td>
            <td>Company</td>
            <td>Status</td>
            <td>Activity</td>
            <td>Representative</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="customers" [scrollable]="true" scrollHeight="400px">
        <ng-template pTemplate="header">
            <tr>
                <th style="min-width:100px">Id</th>
                <th style="min-width:200px">Name</th>
                <th style="min-width:200px">Country</th>
                <th style="min-width:200px">Date</th>
                <th style="min-width:200px">Balance</th>
                <th style="min-width:200px">Company</th>
                <th style="min-width:200px">Status</th>
                <th style="min-width:200px">Activity</th>
                <th style="min-width:200px">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{customer.id}}</td>
                <td>{{customer.name}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.date}}</td>
                <td>{{formatCurrency(customer.balance)}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.status}}</td>
                <td>{{customer.activity}}</td>
                <td>{{customer.representative.name}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="footer">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Country</td>
                <td>Date</td>
                <td>Balance</td>
                <td>Company</td>
                <td>Status</td>
                <td>Activity</td>
                <td>Representative</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-horizontal-and-vertical-scroll-demo',
    templateUrl: 'table-horizontal-and-vertical-scroll-demo.html'
})
export class TableHorizontalAndVerticalScrollDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    formatCurrency(value: number) {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}formatCurrency(l){return l.toLocaleString("en-US",{style:"currency",currency:"USD"})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["horizontal-and-vertical-scroll-doc"]],decls:10,vars:4,consts:[[3,"load"],[1,"card"],["scrollHeight","400px",3,"value","scrollable"],["pTemplate","header"],["pTemplate","body"],["pTemplate","footer"],["selector","table-horizontal-and-vertical-scroll-demo",3,"code","extFiles"],[2,"min-width","100px"],[2,"min-width","200px"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Horizontal and vertical scroll can be used together to enable double axis scrolling."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"p-table",2),g(6,Ra,19,0,"ng-template",3)(7,ka,19,9,"ng-template",4)(8,Ba,19,0,"ng-template",5),t()()(),m(9,"app-code",6)),r&2&&(p(5),s("value",c.customers)("scrollable",!0),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Oa=()=>({"min-width":"75rem"}),za=()=>["name","country.name","company","representative.name"];function Aa(n,o){if(n&1&&(e(0,"div",22),m(1,"img",23),e(2,"span",24),i(3),t()()),n&2){let a=o.$implicit;p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.image,"",G),s("alt",a.label),p(2),d(a.name)}}function Na(n,o){if(n&1){let a=R();e(0,"p-multiSelect",20),h("onChange",function(r){let c=E(a).filterCallback;return I(c(r.value))}),g(1,Aa,4,4,"ng-template",21),t()}if(n&2){let a=o.$implicit,l=f(2);s("ngModel",a)("options",l.representatives)("maxSelectedLabels",1)("selectedItemsLabel","{0} items")}}function Va(n,o){n&1&&(e(0,"tr"),m(1,"th",6),e(2,"th",7),i(3,"Name "),m(4,"p-sortIcon",8),t(),e(5,"th",9),i(6,"Country "),m(7,"p-sortIcon",10),t(),e(8,"th",11),i(9,"Company "),m(10,"p-sortIcon",12),t(),e(11,"th",13),i(12,"Representative "),m(13,"p-sortIcon",14),t()(),e(14,"tr")(15,"th",6),m(16,"p-tableHeaderCheckbox"),t(),e(17,"th"),m(18,"p-columnFilter",15),t(),e(19,"th"),m(20,"p-columnFilter",16),t(),e(21,"th"),m(22,"p-columnFilter",17),t(),e(23,"th")(24,"p-columnFilter",18),g(25,Na,2,4,"ng-template",19),t()()()),n&2&&(p(24),s("showMenu",!1))}function La(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"p-tableCheckbox",25),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t()()),n&2){let a=o.$implicit;p(2),s("value",a),p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}var Bi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.loading=!1,this.selectAll=!1,this.code={basic:`<p-table
    [value]="customers"
    [lazy]="true"
    (onLazyLoad)="loadCustomers($event)"
    dataKey="id"
    [tableStyle]="{ 'min-width': '75rem' }"
    [selection]="selectedCustomers"
    (selectionChange)="onSelectionChange($event)"
    [selectAll]="selectAll"
    (selectAllChange)="onSelectAllChange($event)"
    [paginator]="true"
    [rows]="10"
    [totalRecords]="totalRecords"
    [loading]="loading"
    [globalFilterFields]="['name', 'country.name', 'company', 'representative.name']"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem"></th>
            <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="country.name">Country <p-sortIcon field="country.name"></p-sortIcon></th>
            <th pSortableColumn="company">Company <p-sortIcon field="company"></p-sortIcon></th>
            <th pSortableColumn="representative.name">Representative <p-sortIcon field="representative.name"></p-sortIcon></th>
        </tr>
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th>
                <p-columnFilter type="text" field="name"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="text" field="country.name"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter type="text" field="company"></p-columnFilter>
            </th>
            <th>
                <p-columnFilter field="representative" matchMode="in" [showMenu]="false">
                    <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                        <p-multiSelect [ngModel]="value" appendTo="body" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" [maxSelectedLabels]="1" [selectedItemsLabel]="'{0} items'">
                            <ng-template let-option pTemplate="item">
                                <div class="inline-block vertical-align-middle">
                                    <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                    <span class="ml-1 mt-1">{{ option.name }}</span>
                                </div>
                            </ng-template>
                        </p-multiSelect>
                    </ng-template>
                </p-columnFilter>
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>
                <p-tableCheckbox [value]="customer"></p-tableCheckbox>
            </td>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        [value]="customers"
        [lazy]="true"
        (onLazyLoad)="loadCustomers($event)"
        dataKey="id"
        [tableStyle]="{ 'min-width': '75rem' }"
        [selection]="selectedCustomers"
        (selectionChange)="onSelectionChange($event)"
        [selectAll]="selectAll"
        (selectAllChange)="onSelectAllChange($event)"
        [paginator]="true"
        [rows]="10"
        [totalRecords]="totalRecords"
        [loading]="loading"
        [globalFilterFields]="['name', 'country.name', 'company', 'representative.name']"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem"></th>
                <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="country.name">Country <p-sortIcon field="country.name"></p-sortIcon></th>
                <th pSortableColumn="company">Company <p-sortIcon field="company"></p-sortIcon></th>
                <th pSortableColumn="representative.name">Representative <p-sortIcon field="representative.name"></p-sortIcon></th>
            </tr>
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th>
                    <p-columnFilter type="text" field="name"></p-columnFilter>
                </th>
                <th>
                    <p-columnFilter type="text" field="country.name"></p-columnFilter>
                </th>
                <th>
                    <p-columnFilter type="text" field="company"></p-columnFilter>
                </th>
                <th>
                    <p-columnFilter field="representative" matchMode="in" [showMenu]="false">
                        <ng-template pTemplate="filter" let-value let-filter="filterCallback">
                            <p-multiSelect [ngModel]="value" appendTo="body" [options]="representatives" placeholder="Any" (onChange)="filter($event.value)" optionLabel="name" [maxSelectedLabels]="1" [selectedItemsLabel]="'{0} items'">
                                <ng-template let-option pTemplate="item">
                                    <div class="inline-block vertical-align-middle">
                                        <img [alt]="option.label" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{ option.image }}" width="24" class="vertical-align-middle" />
                                        <span class="ml-1 mt-1">{{ option.name }}</span>
                                    </div>
                                </ng-template>
                            </p-multiSelect>
                        </ng-template>
                    </p-columnFilter>
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>
                    <p-tableCheckbox [value]="customer"></p-tableCheckbox>
                </td>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Customer, Representative } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-lazy-load-demo',
    templateUrl: 'table-lazy-load-demo.html'
})
export class TableLazyLoadDemo implements OnInit{
    customers!: Customer[];

    totalRecords!: number;

    loading: boolean = false;

    representatives!: Representative[];

    selectAll: boolean = false;

    selectedCustomers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.loading = true;
    }

    loadCustomers(event: LazyLoadEvent) {
        this.loading = true;

        setTimeout(() => {
            this.customerService.getCustomers({ lazyEvent: JSON.stringify(event) }).then((res) => {
                this.customers = res.customers;
                this.totalRecords = res.totalRecords;
                this.loading = false;
            });
        }, 1000);
    }

    onSelectionChange(value = []) {
        this.selectAll = value.length === this.totalRecords;
        this.selectedCustomers = value;
    }

    onSelectAllChange(event: any) {
        const checked = event.checked;

        if (checked) {
            this.customerService.getCustomers().then((res) => {
                this.selectedCustomers = res.customers;
                this.selectAll = true;
            });
        } else {
            this.selectedCustomers = [];
            this.selectAll = false;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}ngOnInit(){this.loading=!0}loadDemoData(){this.representatives=[{name:"Amy Elsner",image:"amyelsner.png"},{name:"Anna Fali",image:"annafali.png"},{name:"Asiya Javayant",image:"asiyajavayant.png"},{name:"Bernardo Dominic",image:"bernardodominic.png"},{name:"Elwin Sharvill",image:"elwinsharvill.png"},{name:"Ioni Bowcher",image:"ionibowcher.png"},{name:"Ivan Magalhaes",image:"ivanmagalhaes.png"},{name:"Onyama Limba",image:"onyamalimba.png"},{name:"Stephen Shaw",image:"stephenshaw.png"},{name:"Xuxue Feng",image:"xuxuefeng.png"}]}loadCustomers(l){this.loading=!0,setTimeout(()=>{this.customerService.getCustomers({lazyEvent:JSON.stringify(l)}).then(r=>{this.customers=r.customers,this.totalRecords=r.totalRecords,this.loading=!1,this.cd.markForCheck()})},1e3)}onSelectionChange(l=[]){this.selectAll=l.length===this.totalRecords,this.selectedCustomers=l}onSelectAllChange(l){l.checked?this.customerService.getCustomers().then(c=>{this.selectedCustomers=c.customers,this.selectAll=!0}):(this.selectedCustomers=[],this.selectAll=!1)}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["lazy-load-doc"]],decls:21,vars:14,consts:[[3,"load"],[1,"card"],["dataKey","id",3,"onLazyLoad","selectionChange","selectAllChange","value","lazy","tableStyle","selection","selectAll","paginator","rows","totalRecords","loading","globalFilterFields"],["pTemplate","header"],["pTemplate","body"],["selector","table-lazy-load-demo",3,"code","extFiles"],[2,"width","4rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","country.name"],["field","country.name"],["pSortableColumn","company"],["field","company"],["pSortableColumn","representative.name"],["field","representative.name"],["type","text","field","name"],["type","text","field","country.name"],["type","text","field","company"],["field","representative","matchMode","in",3,"showMenu"],["pTemplate","filter"],["appendTo","body","placeholder","Any","optionLabel","name",3,"onChange","ngModel","options","maxSelectedLabels","selectedItemsLabel"],["pTemplate","item"],[1,"inline-block","vertical-align-middle"],["width","24",1,"vertical-align-middle",3,"alt","src"],[1,"ml-1","mt-1"],[3,"value"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking onLazyLoad callback everytime "),e(3,"i"),i(4,"paging"),t(),i(5,", "),e(6,"i"),i(7,"sorting"),t(),i(8," and "),e(9,"i"),i(10,"filtering"),t(),i(11," happens. Sample here loads the data from remote datasource efficiently using lazy loading. Also, the implementation of "),e(12,"i"),i(13,"checkbox selection"),t(),i(14," in lazy tables is left entirely to the user. Since the table component does not know what will happen to the data on the next page or whether there are instant data changes, the selection array can be implemented in several ways. One of them is as in the example below. "),t()(),e(15,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(16,"div",1)(17,"p-table",2),h("onLazyLoad",function(y){return c.loadCustomers(y)})("selectionChange",function(y){return c.onSelectionChange(y)})("selectAllChange",function(y){return c.onSelectAllChange(y)}),g(18,Va,26,1,"ng-template",3)(19,La,11,5,"ng-template",4),t()()(),m(20,"app-code",5)),r&2&&(p(17),s("value",c.customers)("lazy",!0)("tableStyle",b(12,Oa))("selection",c.selectedCustomers)("selectAll",c.selectAll)("paginator",!0)("rows",10)("totalRecords",c.totalRecords)("loading",c.loading)("globalFilterFields",b(13,za)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,ne,oe,de,ue,we,xe,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var qa=()=>({"min-width":"50rem"});function Ua(n,o){n&1&&i(0," Multiple Selection with MetaKey ")}function ja(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function Ka(n,o){if(n&1&&(e(0,"tr",9)(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit,l=o.rowIndex;s("pSelectableRow",a)("pSelectableRowIndex",l),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var Oi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.metaKeySelection=!0,this.code={basic:`<div class="flex justify-content-center align-items-center gap-2 mb-3">
    <p-inputSwitch inputId="metakey" [(ngModel)]="metaKeySelection" label="MetaKey"></p-inputSwitch>
    <span>MetaKey</span>
</div>
<p-table [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [metaKeySelection]="metaKeySelection" dataKey="code" [tableStyle]="{ 'min-width': '50rem' }">
    <ng-template pTemplate="caption"> Multiple Selection with MetaKey </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-rowIndex="rowIndex">
        <tr [pSelectableRow]="product" [pSelectableRowIndex]="rowIndex">
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <div class="flex justify-content-center align-items-center gap-2 mb-3">
        <p-inputSwitch inputId="metakey" [(ngModel)]="metaKeySelection" label="MetaKey"></p-inputSwitch>
        <span>MetaKey</span>
    </div>
    <p-table [value]="products" selectionMode="multiple" [(selection)]="selectedProducts" [metaKeySelection]="metaKeySelection" dataKey="code" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template pTemplate="caption"> Multiple Selection with MetaKey </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-rowIndex="rowIndex">
            <tr [pSelectableRow]="product" [pSelectableRowIndex]="rowIndex">
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-multiple-selection-demo',
    templateUrl: 'table-multiple-selection-demo.html'
})
export class TableMultipleSelectionDemo implements OnInit{
    products!: Product[];

    selectedProducts!: Product;

    metaKeySelection: boolean = true;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["multiple-selection-doc"]],decls:20,vars:8,consts:[[3,"load"],[1,"card"],[1,"flex","justify-content-center","align-items-center","gap-2","mb-3"],["inputId","metakey","label","MetaKey",3,"ngModelChange","ngModel"],["selectionMode","multiple","dataKey","code",3,"selectionChange","value","selection","metaKeySelection","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["selector","table-multiple-selection-demo",3,"code","extFiles"],[3,"pSelectableRow","pSelectableRowIndex"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," In multiple mode, selection binding should be an array. For touch enabled devices, selection is managed by tapping and for other devices metakey or "),e(3,"i"),i(4,"shiftkey"),t(),i(5," are required. Setting "),e(6,"i"),i(7,"metaKeySelection"),t(),i(8," property as false enables multiple selection without meta key. "),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"div",2)(12,"p-inputSwitch",3),z("ngModelChange",function(y){return O(c.metaKeySelection,y)||(c.metaKeySelection=y),y}),t(),e(13,"span"),i(14,"MetaKey"),t()(),e(15,"p-table",4),z("selectionChange",function(y){return O(c.selectedProducts,y)||(c.selectedProducts=y),y}),g(16,Ua,1,0,"ng-template",5)(17,ja,9,0,"ng-template",6)(18,Ka,9,6,"ng-template",7),t()()(),m(19,"app-code",8)),r&2&&(p(12),B("ngModel",c.metaKeySelection),p(3),s("value",c.products),B("selection",c.selectedProducts),s("metaKeySelection",c.metaKeySelection)("tableStyle",b(7,qa)),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,be,St,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Wa=()=>({"min-width":"50rem"});function Ya(n,o){n&1&&(e(0,"tr")(1,"th",6),m(2,"p-tableHeaderCheckbox"),t(),e(3,"th",7),i(4,"Code"),t(),e(5,"th",7),i(6,"Name"),t(),e(7,"th",7),i(8,"Category"),t(),e(9,"th",7),i(10,"Quantity"),t()())}function Ha(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"p-tableCheckbox",8),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t()()),n&2){let a=o.$implicit;p(2),s("value",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var zi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [paginator]="true" [rows]="5" [selectionPageOnly]="true" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th style="min-width:200px">Code</th>
            <th style="min-width:200px">Name</th>
            <th style="min-width:200px">Category</th>
            <th style="min-width:200px">Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product"></p-tableCheckbox>
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [(selection)]="selectedProducts" dataKey="code" [paginator]="true" [rows]="5" [selectionPageOnly]="true" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th style="min-width:200px">Code</th>
                <th style="min-width:200px">Name</th>
                <th style="min-width:200px">Category</th>
                <th style="min-width:200px">Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product"></p-tableCheckbox>
                </td>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-page-only-selection-demo',
    templateUrl: 'table-page-only-selection-demo.html'
})
export class TablePageOnlySelectionDemo implements OnInit{
    products!: Product[];

    selectedProducts!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["page-only-selection-doc"]],decls:6,vars:9,consts:[[3,"load"],[1,"card"],["dataKey","code",3,"selectionChange","value","selection","paginator","rows","selectionPageOnly","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-page-only-selection-demo",3,"code","extFiles"],[2,"width","4rem"],[2,"min-width","200px"],[3,"value"]],template:function(r,c){r&1&&(e(0,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(1,"div",1)(2,"p-table",2),z("selectionChange",function(y){return O(c.selectedProducts,y)||(c.selectedProducts=y),y}),g(3,Ya,11,0,"ng-template",3)(4,Ha,11,5,"ng-template",4),t()()(),m(5,"app-code",5)),r&2&&(p(2),s("value",c.products),B("selection",c.selectedProducts),s("paginator",!0)("rows",5)("selectionPageOnly",!0)("tableStyle",b(8,Wa)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,de,ue,x,C],encapsulation:2,changeDetection:0});let n=o;return n})();var $a=()=>["/table#lazy"],Ga=()=>({"min-width":"50rem"}),Qa=()=>[5,10,20];function Ja(n,o){n&1&&(e(0,"tr")(1,"th",9),i(2,"Name"),t(),e(3,"th",9),i(4,"Country"),t(),e(5,"th",9),i(6,"Company"),t(),e(7,"th",9),i(8,"Representative"),t()())}function Xa(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}function Za(n,o){n&1&&m(0,"p-button",10)}function er(n,o){n&1&&m(0,"p-button",11)}var Ai=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [rowsPerPageOptions]="[5, 10, 20]"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [showCurrentPageReport]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [rowsPerPageOptions]="[5, 10, 20]"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-paginator-basic-demo',
    templateUrl: 'table-paginator-basic-demo.html'
})
export class TablePaginatorBasicDemo {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["paginator-basic-doc"]],decls:20,vars:12,consts:[[3,"routerLink"],[3,"load"],[1,"card"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["pTemplate","paginatorright"],["selector","table-paginator-basic-demo",3,"code","extFiles"],[2,"width","25%"],["type","button","icon","pi pi-plus","styleClass","p-button-text"],["type","button","icon","pi pi-cloud","styleClass","p-button-text"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Pagination is enabled by setting "),e(3,"i"),i(4,"paginator"),t(),i(5," property to "),e(6,"i"),i(7,"true"),t(),i(8," and defining a rows property to specify the number of rows per page. For server side pagination, see the "),e(9,"a",0),i(10,"lazy loading"),t(),i(11," example. "),t()(),e(12,"p-deferred-demo",1),h("load",function(){return c.loadDemoData()}),e(13,"div",2)(14,"p-table",3),g(15,Ja,9,0,"ng-template",4)(16,Xa,9,4,"ng-template",5)(17,Za,1,0,"ng-template",6)(18,er,1,0,"ng-template",7),t()()(),m(19,"app-code",8)),r&2&&(p(9),s("routerLink",b(9,$a)),p(5),s("value",c.customers)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("tableStyle",b(10,Ga))("rowsPerPageOptions",b(11,Qa)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ye,mt,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var tr=()=>({"min-width":"50rem"}),ir=()=>[10,25,50];function nr(n,o){n&1&&(e(0,"tr")(1,"th",10),i(2,"Name"),t(),e(3,"th",10),i(4,"Country"),t(),e(5,"th",10),i(6,"Company"),t(),e(7,"th",10),i(8,"Representative"),t()())}function or(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}var Ni=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.first=0,this.rows=10,this.code={basic:`<div class="mb-3">
    <p-button type="button" icon="pi pi-chevron-left" (click)="prev()" [disabled]="isFirstPage()" styleClass="p-button-text"></p-button>
    <p-button type="button" icon="pi pi-refresh" (click)="reset()" styleClass="p-button-text"></p-button>
    <p-button type="button" icon="pi pi-chevron-right" (click)="next()" [disabled]="isLastPage()" styleClass="p-button-text"></p-button>
</div>
<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [first]="first"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    (onPage)="pageChange($event)"
    [rowsPerPageOptions]="[10, 25, 50]"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
    </ng-template>
</p-table>`,html:`
<div class="mb-3">
    <p-button type="button" icon="pi pi-chevron-left" (click)="prev()" [disabled]="isFirstPage()" styleClass="p-button-text"></p-button>
    <p-button type="button" icon="pi pi-refresh" (click)="reset()" styleClass="p-button-text"></p-button>
    <p-button type="button" icon="pi pi-chevron-right" (click)="next()" [disabled]="isLastPage()" styleClass="p-button-text"></p-button>
</div>
<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [first]="first"
        [showCurrentPageReport]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        (onPage)="pageChange($event)"
        [rowsPerPageOptions]="[10, 25, 50]"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-paginator-programmatic-demo',
    templateUrl: 'table-paginator-programmatic-demo.html'
})
export class TablePaginatorProgrammaticDemo {
    customers!: Customer[];

    first = 0;

    rows = 10;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.customers ? this.first === this.customers.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.customers ? this.first === 0 : true;
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.cd.markForCheck()})}next(){this.first=this.first+this.rows}prev(){this.first=this.first-this.rows}reset(){this.first=0}pageChange(l){this.first=l.first,this.rows=l.rows}isLastPage(){return this.customers?this.first===this.customers.length-this.rows:!0}isFirstPage(){return this.customers?this.first===0:!0}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["paginator-programmatic-doc"]],decls:16,vars:13,consts:[[3,"load"],[1,"card"],[1,"mb-3","flex","gap-1"],["type","button","icon","pi pi-chevron-left","styleClass","p-button-text",3,"click","disabled"],["type","button","icon","pi pi-refresh","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-chevron-right","styleClass","p-button-text",3,"click","disabled"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"onPage","value","paginator","rows","showCurrentPageReport","first","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["selector","table-paginator-programmatic-demo",3,"code","extFiles"],[2,"width","25%"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Paginator can also be controlled via model using a binding to the "),e(3,"i"),i(4,"first"),t(),i(5," property where changes trigger a pagination."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"div",2)(9,"p-button",3),h("click",function(){return c.prev()}),t(),e(10,"p-button",4),h("click",function(){return c.reset()}),t(),e(11,"p-button",5),h("click",function(){return c.next()}),t()(),e(12,"p-table",6),h("onPage",function(y){return c.pageChange(y)}),g(13,nr,9,0,"ng-template",7)(14,or,9,4,"ng-template",8),t()()(),m(15,"app-code",9)),r&2&&(p(9),s("disabled",c.isFirstPage()),p(2),s("disabled",c.isLastPage()),p(),s("value",c.customers)("paginator",!0)("rows",c.rows)("showCurrentPageReport",!0)("first",c.first)("tableStyle",b(11,tr))("rowsPerPageOptions",b(12,ir)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ye,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var ar=()=>["name","country.name","representative.name","status"],rr=()=>({"min-width":"75rem"}),Vi=()=>({width:"450px"});function lr(n,o){if(n&1){let a=R();e(0,"button",15),h("click",function(){E(a);let r=f();return I(r.openNew())}),t(),e(1,"button",16),h("click",function(){E(a);let r=f();return I(r.deleteSelectedProducts())}),t()}if(n&2){let a=f();p(),s("label",a.Delete)("disabled",!a.selectedProducts||!a.selectedProducts.length)}}function cr(n,o){n&1&&m(0,"p-fileUpload",17)(1,"button",18),n&2&&s("maxFileSize",1e6)}function pr(n,o){if(n&1){let a=R();e(0,"div",19)(1,"h5",20),i(2,"Manage Products"),t(),e(3,"span",21),m(4,"i",22),e(5,"input",23),h("input",function(r){E(a),f();let c=ee(10);return I(c.filterGlobal(r.target.value,"contains"))}),t()()()}}function sr(n,o){n&1&&(e(0,"tr")(1,"th",24),m(2,"p-tableHeaderCheckbox"),t(),e(3,"th",25),i(4,"Name "),m(5,"p-sortIcon",26),t(),e(6,"th"),i(7,"Image"),t(),e(8,"th",27),i(9,"Price "),m(10,"p-sortIcon",28),t(),e(11,"th",29),i(12,"Category "),m(13,"p-sortIcon",30),t(),e(14,"th",31),i(15,"Reviews "),m(16,"p-sortIcon",32),t(),e(17,"th",33),i(18,"Status "),m(19,"p-sortIcon",34),t(),m(20,"th"),t())}function mr(n,o){if(n&1){let a=R();e(0,"tr")(1,"td"),m(2,"p-tableCheckbox",35),t(),e(3,"td"),i(4),t(),e(5,"td"),m(6,"img",36),t(),e(7,"td"),i(8),U(9,"currency"),t(),e(10,"td"),i(11),t(),e(12,"td"),m(13,"p-rating",37),t(),e(14,"td"),m(15,"p-tag",38),t(),e(16,"td")(17,"button",39),h("click",function(){let r=E(a).$implicit,c=f();return I(c.editProduct(r))}),t(),e(18,"button",40),h("click",function(){let r=E(a).$implicit,c=f();return I(c.deleteProduct(r))}),t()()()}if(n&2){let a=o.$implicit,l=f();p(2),s("value",a),p(2),d(a.name),p(2),s("src","https://primefaces.org/cdn/primeng/images/demo/product/"+a.image,G)("alt",a.name),p(2),d(K(9,11,a.price,"USD")),p(3),d(a.category),p(2),s("ngModel",a.rating)("readonly",!0)("cancel",!1),p(2),s("value",a.inventoryStatus)("severity",l.getSeverity(a.inventoryStatus))}}function dr(n,o){if(n&1&&(e(0,"div",19),i(1),t()),n&2){let a=f();p(),P("In total there are ",a.products?a.products.length:0," products.")}}function ur(n,o){if(n&1&&m(0,"img",68),n&2){let a=f(2);s("src","https://primefaces.org/cdn/primeng/images/demo/product/"+a.product.image,G)("alt",a.product.image)}}function gr(n,o){n&1&&(e(0,"small",69),i(1,"Name is required."),t())}function hr(n,o){if(n&1&&m(0,"p-tag",38),n&2){let a=f(2);s("value",a.product.inventoryStatus.toUpperCase())("severity",a.getSeverity(a.product.inventoryStatus.toUpperCase()))}}function fr(n,o){if(n&1&&m(0,"p-tag",38),n&2){let a=o.$implicit,l=f(2);s("value",a.label)("severity",l.getSeverity(a.label))}}function yr(n,o){if(n&1){let a=R();g(0,ur,1,2,"img",41),e(1,"div",42)(2,"label",43),i(3,"Name"),t(),e(4,"input",44),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.name,r)||(c.product.name=r),I(r)}),t(),g(5,gr,2,0,"small",45),t(),e(6,"div",42)(7,"label",46),i(8,"Description"),t(),e(9,"textarea",47),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.description,r)||(c.product.description=r),I(r)}),t()(),e(10,"div",42)(11,"label",48),i(12,"Inventory Status"),t(),e(13,"p-dropdown",49),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.inventoryStatus,r)||(c.product.inventoryStatus=r),I(r)}),g(14,hr,1,2,"ng-template",50)(15,fr,1,2,"ng-template",51),t()(),e(16,"div",42)(17,"label",52),i(18,"Category"),t(),e(19,"div",53)(20,"div",54)(21,"p-radioButton",55),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.category,r)||(c.product.category=r),I(r)}),t(),e(22,"label",56),i(23,"Accessories"),t()(),e(24,"div",54)(25,"p-radioButton",57),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.category,r)||(c.product.category=r),I(r)}),t(),e(26,"label",58),i(27,"Clothing"),t()(),e(28,"div",54)(29,"p-radioButton",59),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.category,r)||(c.product.category=r),I(r)}),t(),e(30,"label",60),i(31,"Electronics"),t()(),e(32,"div",54)(33,"p-radioButton",61),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.category,r)||(c.product.category=r),I(r)}),t(),e(34,"label",62),i(35,"Fitness"),t()()()(),e(36,"div",53)(37,"div",63)(38,"label",64),i(39,"Price"),t(),e(40,"p-inputNumber",65),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.price,r)||(c.product.price=r),I(r)}),t()(),e(41,"div",63)(42,"label",66),i(43,"Quantity"),t(),e(44,"p-inputNumber",67),z("ngModelChange",function(r){E(a);let c=f();return O(c.product.quantity,r)||(c.product.quantity=r),I(r)}),t()()()}if(n&2){let a=f();s("ngIf",a.product.image),p(4),B("ngModel",a.product.name),p(),s("ngIf",a.submitted&&!a.product.name),p(4),B("ngModel",a.product.description),p(4),B("ngModel",a.product.inventoryStatus),s("options",a.statuses),p(8),B("ngModel",a.product.category),p(4),B("ngModel",a.product.category),p(4),B("ngModel",a.product.category),p(4),B("ngModel",a.product.category),p(7),B("ngModel",a.product.price),p(4),B("ngModel",a.product.quantity)}}function vr(n,o){if(n&1){let a=R();e(0,"button",70),h("click",function(){E(a);let r=f();return I(r.hideDialog())}),t(),e(1,"button",71),h("click",function(){E(a);let r=f();return I(r.saveProduct())}),t()}}var Li=(()=>{let o=class o{constructor(l,r,c,v){this.productService=l,this.messageService=r,this.confirmationService=c,this.cd=v,this.productDialog=!1,this.submitted=!1,this.code={basic:`<p-toast></p-toast>
<p-toolbar styleClass="mb-4 gap-2">
    <ng-template pTemplate="left">
        <button pButton pRipple label="New" icon="pi pi-plus" class="p-button-success mr-2" (click)="openNew()"></button>
        <button pButton pRipple [label]="Delete" icon="pi pi-trash" class="p-button-danger" (click)="deleteSelectedProducts()" [disabled]="!selectedProducts || !selectedProducts.length"></button>
    </ng-template>

    <ng-template pTemplate="right">
        <p-fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block"></p-fileUpload>
        <button pButton pRipple label="Export" icon="pi pi-upload" class="p-button-help"></button>
    </ng-template>
</p-toolbar>

<p-table
    #dt
    [value]="products"
    [rows]="10"
    [paginator]="true"
    [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
    [tableStyle]="{ 'min-width': '75rem' }"
    [(selection)]="selectedProducts"
    [rowHover]="true"
    dataKey="id"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [showCurrentPageReport]="true"
>
    <ng-template pTemplate="caption">
        <div class="flex align-items-center justify-content-between">
            <h5 class="m-0">Manage Products</h5>
            <span class="p-input-icon-left">
                <i class="pi pi-search"></i>
                <input pInputText type="text" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Search..." />
            </span>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem">
                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
            </th>
            <th pSortableColumn="name" style="min-width:15rem">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th>Image</th>
            <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
            <th pSortableColumn="category" style="min-width:10rem">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="rating">Reviews <p-sortIcon field="rating"></p-sortIcon></th>
            <th pSortableColumn="inventoryStatus" style="min-width:10rem">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
            <th></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableCheckbox [value]="product"></p-tableCheckbox>
            </td>
            <td>{{ product.name }}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-4" /></td>
            <td>{{ product.price | currency: 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
            </td>
            <td>
                <button pButton pRipple icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" (click)="editProduct(product)"></button>
                <button pButton pRipple icon="pi pi-trash" class="p-button-rounded p-button-warning" (click)="deleteProduct(product)"></button>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="summary">
        <div class="flex align-items-center justify-content-between">In total there are {{ products ? products.length : 0 }} products.</div>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-toast></p-toast>
    <p-toolbar styleClass="mb-4 gap-2">
        <ng-template pTemplate="left">
            <button pButton pRipple label="New" icon="pi pi-plus" class="p-button-success mr-2" (click)="openNew()"></button>
            <button pButton pRipple [label]="Delete" icon="pi pi-trash" class="p-button-danger" (click)="deleteSelectedProducts()" [disabled]="!selectedProducts || !selectedProducts.length"></button>
        </ng-template>

        <ng-template pTemplate="right">
            <p-fileUpload mode="basic" accept="image/*" [maxFileSize]="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block"></p-fileUpload>
            <button pButton pRipple label="Export" icon="pi pi-upload" class="p-button-help"></button>
        </ng-template>
    </p-toolbar>

    <p-table
        #dt
        [value]="products"
        [rows]="10"
        [paginator]="true"
        [globalFilterFields]="['name', 'country.name', 'representative.name', 'status']"
        [tableStyle]="{ 'min-width': '75rem' }"
        [(selection)]="selectedProducts"
        [rowHover]="true"
        dataKey="id"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [showCurrentPageReport]="true"
    >
        <ng-template pTemplate="caption">
            <div class="flex align-items-center justify-content-between">
                <h5 class="m-0">Manage Products</h5>
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input pInputText type="text" (input)="dt.filterGlobal($event.target.value, 'contains')" placeholder="Search..." />
                </span>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem">
                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>
                </th>
                <th pSortableColumn="name" style="min-width:15rem">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th>Image</th>
                <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                <th pSortableColumn="category" style="min-width:10rem">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="rating">Reviews <p-sortIcon field="rating"></p-sortIcon></th>
                <th pSortableColumn="inventoryStatus" style="min-width:10rem">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
                <th></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableCheckbox [value]="product"></p-tableCheckbox>
                </td>
                <td>{{ product.name }}</td>
                <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-4" /></td>
                <td>{{ product.price | currency: 'USD' }}</td>
                <td>{{ product.category }}</td>
                <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
                <td>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                </td>
                <td>
                    <button pButton pRipple icon="pi pi-pencil" class="p-button-rounded p-button-success mr-2" (click)="editProduct(product)"></button>
                    <button pButton pRipple icon="pi pi-trash" class="p-button-rounded p-button-warning" (click)="deleteProduct(product)"></button>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="summary">
            <div class="flex align-items-center justify-content-between">In total there are {{ products ? products.length : 0 }} products.</div>
        </ng-template>
    </p-table>
</div>
<p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }" header="Product Details" [modal]="true" styleClass="p-fluid">
    <ng-template pTemplate="content">
        <img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.image" class="block m-auto pb-3" *ngIf="product.image" />
        <div class="field">
            <label for="name">Name</label>
            <input type="text" pInputText id="name" [(ngModel)]="product.name" required autofocus />
            <small class="p-error" *ngIf="submitted && !product.name">Name is required.</small>
        </div>
        <div class="field">
            <label for="description">Description</label>
            <textarea id="description" pInputTextarea [(ngModel)]="product.description" required rows="3" cols="20"></textarea>
        </div>

        <div class="field">
            <label for="inventoryStatus">Inventory Status</label>
            <p-dropdown [(ngModel)]="product.inventoryStatus" inputId="inventoryStatus" [options]="statuses">
                <ng-template pTemplate="selectedItem">
                    <p-tag [value]="product.inventoryStatus.toUpperCase()" [severity]="getSeverity(product.inventoryStatus.toUpperCase())"></p-tag>
                </ng-template>
                <ng-template let-option pTemplate="item">
                    <p-tag [value]="option.label" [severity]="getSeverity(option.label)"></p-tag>
                </ng-template>
            </p-dropdown>
        </div>

        <div class="field">
            <label class="mb-3">Category</label>
            <div class="formgrid grid">
                <div class="field-radiobutton col-6">
                    <p-radioButton id="category1" name="category" value="Accessories" [(ngModel)]="product.category"></p-radioButton>
                    <label for="category1">Accessories</label>
                </div>
                <div class="field-radiobutton col-6">
                    <p-radioButton id="category2" name="category" value="Clothing" [(ngModel)]="product.category"></p-radioButton>
                    <label for="category2">Clothing</label>
                </div>
                <div class="field-radiobutton col-6">
                    <p-radioButton id="category3" name="category" value="Electronics" [(ngModel)]="product.category"></p-radioButton>
                    <label for="category3">Electronics</label>
                </div>
                <div class="field-radiobutton col-6">
                    <p-radioButton id="category4" name="category" value="Fitness" [(ngModel)]="product.category"></p-radioButton>
                    <label for="category4">Fitness</label>
                </div>
            </div>
        </div>

        <div class="formgrid grid">
            <div class="field col">
                <label for="price">Price</label>
                <p-inputNumber id="price" [(ngModel)]="product.price" mode="currency" currency="USD" locale="en-US"></p-inputNumber>
            </div>
            <div class="field col">
                <label for="quantity">Quantity</label>
                <p-inputNumber id="quantity" [(ngModel)]="product.quantity"></p-inputNumber>
            </div>
        </div>
    </ng-template>

    <ng-template pTemplate="footer">
        <button pButton pRipple label="Cancel" icon="pi pi-times" class="p-button-text" (click)="hideDialog()"></button>
        <button pButton pRipple label="Save" icon="pi pi-check" class="p-button-text" (click)="saveProduct()"></button>
    </ng-template>
</p-dialog>

<p-confirmDialog [style]="{ width: '450px' }"></p-confirmDialog>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-products-demo',
    templateUrl: 'table-products-demo.html',
    styleUrls: ['table-products-demo.scss'],
    providers: [MessageService, ConfirmationService]
})
export class TableProductsDemo implements OnInit{
    productDialog: boolean = false;

    products!: Product[];

    product!: Product;

    selectedProducts!: Product[] | null;

    submitted: boolean = false;

    statuses!: any[];

    constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => (this.products = data));

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.product = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected products?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => !this.selectedProducts?.includes(val));
                this.selectedProducts = null;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
            }
        });
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + product.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.products = this.products.filter((val) => val.id !== product.id);
                this.product = {};
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
            }
        });
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.id) {
                this.products[this.findIndexById(this.product.id)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.id = this.createId();
                this.product.image = 'product-placeholder.svg';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
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
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...`,scss:`
:host ::ng-deep .p-dialog .product-image {
    width: 150px;
    margin: 0 auto 2rem auto;
    display: block;
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
}`}]}loadDemoData(){this.productService.getProducts().then(l=>{this.products=l,this.cd.markForCheck()}),this.statuses=[{label:"INSTOCK",value:"instock"},{label:"LOWSTOCK",value:"lowstock"},{label:"OUTOFSTOCK",value:"outofstock"}]}openNew(){this.product={},this.submitted=!1,this.productDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:"Are you sure you want to delete the selected products?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(l=>!this.selectedProducts?.includes(l)),this.selectedProducts=null,this.messageService.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}})}editProduct(l){this.product=Be({},l),this.productDialog=!0}deleteProduct(l){this.confirmationService.confirm({message:"Are you sure you want to delete "+l.name+"?",header:"Confirm",icon:"pi pi-exclamation-triangle",accept:()=>{this.products=this.products.filter(r=>r.id!==l.id),this.product={},this.messageService.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})}})}hideDialog(){this.productDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0,this.product.name?.trim()&&(this.product.id?(this.products[this.findIndexById(this.product.id)]=this.product,this.messageService.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.image="product-placeholder.svg",this.products.push(this.product),this.messageService.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.products=[...this.products],this.productDialog=!1,this.product={})}findIndexById(l){let r=-1;for(let c=0;c<this.products.length;c++)if(this.products[c].id===l){r=c;break}return r}createId(){let l="";for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<5;c++)l+=r.charAt(Math.floor(Math.random()*r.length));return l}getSeverity(l){switch(l){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(r){return new(r||o)(u(F),u(te),u(Le),u(D))},o.\u0275cmp=S({type:o,selectors:[["products-doc"]],features:[fe([te,Le])],decls:20,vars:20,consts:[["dt",""],[3,"load"],[1,"card"],["styleClass","mb-4 gap-2"],["pTemplate","left"],["pTemplate","right"],["dataKey","id","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"selectionChange","value","rows","paginator","globalFilterFields","tableStyle","selection","rowHover","showCurrentPageReport"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Product Details","styleClass","p-fluid",3,"visibleChange","visible","modal"],["pTemplate","content"],["pTemplate","footer"],["selector","table-products-demo",3,"code","extFiles"],["pButton","","pRipple","","label","New","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-danger",3,"click","label","disabled"],["mode","basic","accept","image/*","label","Import","chooseLabel","Import",1,"mr-2","inline-block",3,"maxFileSize"],["pButton","","pRipple","","label","Export","icon","pi pi-upload",1,"p-button-help"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",3,"input"],[2,"width","4rem"],["pSortableColumn","name",2,"min-width","15rem"],["field","name"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category",2,"min-width","10rem"],["field","category"],["pSortableColumn","rating"],["field","rating"],["pSortableColumn","inventoryStatus",2,"min-width","10rem"],["field","inventoryStatus"],[3,"value"],["width","50",1,"shadow-4",3,"src","alt"],[3,"ngModel","readonly","cancel"],[3,"value","severity"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button-rounded","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button-rounded","p-button-warning",3,"click"],["class","block m-auto pb-3",3,"src","alt",4,"ngIf"],[1,"field"],["for","name"],["type","text","pInputText","","id","name","required","","autofocus","",3,"ngModelChange","ngModel"],["class","p-error",4,"ngIf"],["for","description"],["id","description","pInputTextarea","","required","","rows","3","cols","20",3,"ngModelChange","ngModel"],["for","inventoryStatus"],["inputId","inventoryStatus",3,"ngModelChange","ngModel","options"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"mb-3"],[1,"formgrid","grid"],[1,"field-radiobutton","col-6"],["id","category1","name","category","value","Accessories",3,"ngModelChange","ngModel"],["for","category1"],["id","category2","name","category","value","Clothing",3,"ngModelChange","ngModel"],["for","category2"],["id","category3","name","category","value","Electronics",3,"ngModelChange","ngModel"],["for","category3"],["id","category4","name","category","value","Fitness",3,"ngModelChange","ngModel"],["for","category4"],[1,"field","col"],["for","price"],["id","price","mode","currency","currency","USD","locale","en-US",3,"ngModelChange","ngModel"],["for","quantity"],["id","quantity",3,"ngModelChange","ngModel"],[1,"block","m-auto","pb-3",3,"src","alt"],[1,"p-error"],["pButton","","pRipple","","label","Cancel","icon","pi pi-times",1,"p-button-text",3,"click"],["pButton","","pRipple","","label","Save","icon","pi pi-check",1,"p-button-text",3,"click"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2,"CRUD implementation example with a Dialog."),t()(),e(3,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(4,"div",2),m(5,"p-toast"),e(6,"p-toolbar",3),g(7,lr,2,2,"ng-template",4)(8,cr,2,1,"ng-template",5),t(),e(9,"p-table",6,0),z("selectionChange",function(M){return E(v),O(c.selectedProducts,M)||(c.selectedProducts=M),I(M)}),g(11,pr,6,0,"ng-template",7)(12,sr,21,0,"ng-template",8)(13,mr,19,14,"ng-template",9)(14,dr,2,1,"ng-template",10),t(),e(15,"p-dialog",11),z("visibleChange",function(M){return E(v),O(c.productDialog,M)||(c.productDialog=M),I(M)}),g(16,yr,45,12,"ng-template",12)(17,vr,2,0,"ng-template",13),t(),m(18,"p-confirmDialog"),t()(),m(19,"app-code",14)}r&2&&(p(9),s("value",c.products)("rows",10)("paginator",!0)("globalFilterFields",b(16,ar))("tableStyle",b(17,rr)),B("selection",c.selectedProducts),s("rowHover",!0)("showCurrentPageReport",!0),p(6),Ce(b(18,Vi)),B("visible",c.productDialog),s("modal",!0),p(3),Ce(b(19,Vi)),p(),s("code",c.code)("extFiles",c.extFiles))},dependencies:[_e,Pe,W,Fe,Y,w,_,ne,oe,de,ue,ie,Ye,Kt,ve,J,Te,le,vt,Zt,Ct,ri,Jt,Se,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var br=()=>({"min-width":"50rem"});function Sr(n,o){n&1&&(e(0,"tr"),m(1,"th",6),e(2,"th"),i(3,"Code"),t(),e(4,"th"),i(5,"Name"),t(),e(6,"th"),i(7,"Category"),t(),e(8,"th"),i(9,"Quantity"),t()())}function xr(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"p-tableRadioButton",7),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),t()()),n&2){let a=o.$implicit;p(2),s("value",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var qi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [(selection)]="selectedProduct" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 4rem"></th>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>
                <p-tableRadioButton [value]="product"></p-tableRadioButton>
            </td>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [(selection)]="selectedProduct" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 4rem"></th>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>
                    <p-tableRadioButton [value]="product"></p-tableRadioButton>
                </td>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-radio-button-selection-demo',
    templateUrl: 'table-radio-button-selection-demo.html'
})
export class TableRadioButtonSelectionDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["radio-button-selection-doc"]],decls:9,vars:6,consts:[[3,"load"],[1,"card"],["dataKey","code",3,"selectionChange","value","selection","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-radio-button-selection-demo",3,"code","extFiles"],[2,"width","4rem"],[3,"value"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Single selection can also be handled using radio buttons."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"p-table",2),z("selectionChange",function(y){return O(c.selectedProduct,y)||(c.selectedProduct=y),y}),g(6,Sr,10,0,"ng-template",3)(7,xr,11,5,"ng-template",4),t()()(),m(8,"app-code",5)),r&2&&(p(5),s("value",c.products),B("selection",c.selectedProduct),s("tableStyle",b(5,br)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,At,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Cr=()=>({"min-width":"50rem"});function _r(n,o){if(n&1&&(e(0,"th",8),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function wr(n,o){if(n&1&&(e(0,"tr"),m(1,"th",6),g(2,_r,2,1,"th",7),t()),n&2){let a=o.$implicit;p(2),s("ngForOf",a)}}function Tr(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function Dr(n,o){if(n&1&&(e(0,"tr",9)(1,"td"),m(2,"span",10),t(),g(3,Tr,2,1,"td",11),t()),n&2){let a=o.columns,l=o.rowIndex;s("pReorderableRow",l),p(3),s("ngForOf",a)}}var Ui=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [columns]="cols" [reorderableColumns]="true" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th style="width:3rem"></th>
            <th *ngFor="let col of columns" pReorderableColumn>
                {{col.header}}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns" let-index="rowIndex">
        <tr [pReorderableRow]="index">
            <td>
                <span class="pi pi-bars" pReorderableRowHandle></span>
            </td>
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [columns]="cols" [reorderableColumns]="true" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th style="width:3rem"></th>
                <th *ngFor="let col of columns" pReorderableColumn>
                    {{col.header}}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns" let-index="rowIndex">
            <tr [pReorderableRow]="index">
                <td>
                    <span class="pi pi-bars" pReorderableRowHandle></span>
                </td>
                <td *ngFor="let col of columns">
                    {{rowData[col.field]}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-reorder-demo',
    templateUrl: 'table-reorder-demo.html'
})
export class TableReorderDemo implements OnInit{
    products!: Product[];

    cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((data) => (this.products = data));

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' }
        ];
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsSmall().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["reorder-doc"]],decls:23,vars:7,consts:[[3,"load"],[1,"card"],[3,"value","columns","reorderableColumns","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-reorder-demo",3,"code","extFiles"],[2,"width","3rem"],["pReorderableColumn","",4,"ngFor","ngForOf"],["pReorderableColumn",""],[3,"pReorderableRow"],["pReorderableRowHandle","",1,"pi","pi-bars"],[4,"ngFor","ngForOf"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Order of the columns and rows can be changed using drag and drop. Column reordering is configured by adding "),e(3,"i"),i(4,"reorderableColumns"),t(),i(5," property."),t(),e(6,"p"),i(7," Similarly, adding "),e(8,"i"),i(9,"reorderableRows"),t(),i(10," property enables draggable rows. For the drag handle a column needs to have "),e(11,"i"),i(12,"rowReorder"),t(),i(13," property and "),e(14,"i"),i(15,"onRowReorder"),t(),i(16," callback is required to control the state of the rows after reorder completes. "),t()(),e(17,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(18,"div",1)(19,"p-table",2),g(20,wr,3,1,"ng-template",3)(21,Dr,4,2,"ng-template",4),t()()(),m(22,"app-code",5)),r&2&&(p(19),s("value",c.products)("columns",c.cols)("reorderableColumns",!0)("tableStyle",b(6,Cr)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,w,_,Mt,Nt,Vt,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Er=()=>({"min-width":"50rem"});function Ir(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Price"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t(),e(9,"th"),i(10,"Status"),t(),e(11,"th"),i(12,"Reviews"),t()())}function Pr(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),U(5,"currency"),t(),e(6,"td"),i(7),t(),e(8,"td"),i(9),t(),e(10,"td"),m(11,"p-tag",6),t(),e(12,"td"),m(13,"p-rating",7),t()()),n&2){let a=o.$implicit,l=f();p(2),d(a.name),p(2),d(K(5,9,a.price,"USD")),p(3),d(a.category),p(2),d(a.quantity),p(2),s("value",a.inventoryStatus)("severity",l.getSeverity(a.inventoryStatus)),p(2),s("ngModel",a.rating)("readonly",!0)("cancel",!1)}}var ji=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th>Name </th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Reviews</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-columns="columns">
        <tr>
            <td>{{product.name}}</td>
            <td>{{product.price | currency:'USD'}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th>Name </th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Reviews</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-columns="columns">
            <tr>
                <td>{{product.name}}</td>
                <td>{{product.price | currency:'USD'}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
                <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-responsive-scroll-demo',
    templateUrl: 'table-responsive-scroll-demo.html'
})
export class TableResponsiveScrollDemo implements OnInit{
    products!: Product[];

    cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'inventoryStatus', header: 'Status' },
            { field: 'rating', header: 'Rating' }
        ];
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
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"},{field:"inventoryStatus",header:"Status"},{field:"rating",header:"Rating"}]}getSeverity(l){switch(l){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["responsive-scroll-doc"]],decls:11,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-responsive-scroll-demo",3,"code","extFiles"],[3,"value","severity"],[3,"ngModel","readonly","cancel"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"When there is not enough space for the table to fit all the content efficiently, table displays a horizontal scrollbar. It is suggested to give a min-width to the table to avoid design issues due wrapping of cell contents."),t(),e(3,"p"),i(4,"Following table displays a horizontal scrollbar when viewport is smaller than 50rem."),t()(),e(5,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(6,"div",1)(7,"p-table",2),g(8,Ir,13,0,"ng-template",3)(9,Pr,14,12,"ng-template",4),t()()(),m(10,"app-code",5)),r&2&&(p(7),s("value",c.products)("tableStyle",b(4,Er)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,J,Se,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var Fr=()=>({"min-width":"50rem"});function Mr(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Price"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t(),e(9,"th"),i(10,"Status"),t(),e(11,"th"),i(12,"Reviews"),t()())}function Rr(n,o){if(n&1&&(e(0,"tr")(1,"td")(2,"span",6),i(3,"Name"),t(),i(4),t(),e(5,"td")(6,"span",6),i(7,"Price"),t(),i(8),U(9,"currency"),t(),e(10,"td")(11,"span",6),i(12,"Category"),t(),i(13),t(),e(14,"td")(15,"span",6),i(16,"Quantity"),t(),i(17),t(),e(18,"td"),m(19,"p-tag",7),t(),e(20,"td")(21,"span",6),i(22,"Reviews"),t(),m(23,"p-rating",8),t()()),n&2){let a=o.$implicit,l=f();p(4),d(a.name),p(4),d(K(9,9,a.price,"USD")),p(5),d(a.category),p(4),d(a.quantity),p(2),s("value",a.inventoryStatus)("severity",l.getSeverity(a.inventoryStatus)),p(4),s("ngModel",a.rating)("readonly",!0)("cancel",!1)}}var Ki=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" responsiveLayout="stack" [breakpoint]="'960px'" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Reviews</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-columns="columns">
        <tr>
            <td><span class="p-column-title">Name</span>{{product.name}}</td>
            <td><span class="p-column-title">Price</span>{{product.price | currency:'USD'}}</td>
            <td><span class="p-column-title">Category</span>{{product.category}}</td>
            <td><span class="p-column-title">Quantity</span>{{product.quantity}}</td>
            <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
            <td><span class="p-column-title">Reviews</span><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" responsiveLayout="stack" [breakpoint]="'960px'" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Reviews</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-columns="columns">
            <tr>
                <td><span class="p-column-title">Name</span>{{product.name}}</td>
                <td><span class="p-column-title">Price</span>{{product.price | currency:'USD'}}</td>
                <td><span class="p-column-title">Category</span>{{product.category}}</td>
                <td><span class="p-column-title">Quantity</span>{{product.quantity}}</td>
                <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
                <td><span class="p-column-title">Reviews</span><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-responsive-stack-demo',
    templateUrl: 'table-responsive-stack-demo.html',
    styleUrls: ['table-responsive-stack-demo.scss']
})
export class TableResponsiveStackDemo implements OnInit{
    products!: Product[];

    cols!: Column[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.cols = [
            { field: 'code', header: 'Code' },
            { field: 'name', header: 'Name' },
            { field: 'category', header: 'Category' },
            { field: 'quantity', header: 'Quantity' },
            { field: 'inventoryStatus', header: 'Status' },
            { field: 'rating', header: 'Rating' }
        ];
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
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"},{field:"inventoryStatus",header:"Status"},{field:"rating",header:"Rating"}]}getSeverity(l){switch(l){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["responsive-stack-doc"]],decls:18,vars:6,consts:[[3,"load"],[1,"card"],["responsiveLayout","stack",3,"value","breakpoint","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-responsive-stack-demo",3,"code","extFiles"],[1,"p-column-title"],[3,"value","severity"],[3,"ngModel","readonly","cancel"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," In stack layout, columns are displayed as stacked after a certain breakpoint. Default is '960px' as max-width. This feature is enabled by setting "),e(3,"i"),i(4,"responsiveLayout"),t(),i(5," to "),e(6,"i"),i(7,"stack"),t(),i(8," and adding an element with "),e(9,"i"),i(10,"p-column-title"),t(),i(11," style class to the body cells. "),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),g(15,Mr,13,0,"ng-template",3)(16,Rr,24,12,"ng-template",4),t()()(),m(17,"app-code",5)),r&2&&(p(14),s("value",c.products)("breakpoint","960px")("tableStyle",b(5,Fr)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,J,Se,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var kr=()=>({"min-width":"50rem"}),Br=()=>({width:"100%"});function Or(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code"),t(),e(3,"th",6),i(4,"Name"),t(),e(5,"th",6),i(6,"Inventory Status"),t(),e(7,"th",6),i(8,"Price"),t(),m(9,"th",6),t())}function zr(n,o){if(n&1){let a=R();e(0,"input",14),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.code,r)||(c.code=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.code)}}function Ar(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.code," ")}}function Nr(n,o){if(n&1){let a=R();e(0,"input",15),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.name,r)||(c.name=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.name)}}function Vr(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.name," ")}}function Lr(n,o){if(n&1){let a=R();e(0,"p-dropdown",16),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.inventoryStatus,r)||(c.inventoryStatus=r),I(r)}),t()}if(n&2){let a=f().$implicit,l=f();Ce(b(4,Br)),s("options",l.statuses),B("ngModel",a.inventoryStatus)}}function qr(n,o){if(n&1&&i(0),n&2){let a=f().$implicit;P(" ",a.inventoryStatus," ")}}function Ur(n,o){if(n&1){let a=R();e(0,"input",14),z("ngModelChange",function(r){E(a);let c=f().$implicit;return O(c.price,r)||(c.price=r),I(r)}),t()}if(n&2){let a=f().$implicit;B("ngModel",a.price)}}function jr(n,o){if(n&1&&(i(0),U(1,"currency")),n&2){let a=f().$implicit;P(" ",K(1,1,a.price,"USD")," ")}}function Kr(n,o){if(n&1){let a=R();e(0,"button",17),h("click",function(){E(a);let r=f().$implicit,c=f();return I(c.onRowEditInit(r))}),t()}}function Wr(n,o){if(n&1){let a=R();e(0,"button",18),h("click",function(){E(a);let r=f().$implicit,c=f();return I(c.onRowEditSave(r))}),t()}}function Yr(n,o){if(n&1){let a=R();e(0,"button",19),h("click",function(){E(a);let r=f(),c=r.$implicit,v=r.rowIndex,y=f();return I(y.onRowEditCancel(c,v))}),t()}}function Hr(n,o){if(n&1&&(e(0,"tr",7)(1,"td")(2,"p-cellEditor"),g(3,zr,1,1,"ng-template",8)(4,Ar,1,1,"ng-template",9),t()(),e(5,"td")(6,"p-cellEditor"),g(7,Nr,1,1,"ng-template",8)(8,Vr,1,1,"ng-template",9),t()(),e(9,"td")(10,"p-cellEditor"),g(11,Lr,1,5,"ng-template",8)(12,qr,1,1,"ng-template",9),t()(),e(13,"td")(14,"p-cellEditor"),g(15,Ur,1,1,"ng-template",8)(16,jr,2,4,"ng-template",9),t()(),e(17,"td")(18,"div",10),g(19,Kr,1,0,"button",11)(20,Wr,1,0,"button",12)(21,Yr,1,0,"button",13),t()()()),n&2){let a=o.$implicit,l=o.editing;s("pEditableRow",a),p(19),s("ngIf",!l),p(),s("ngIf",l),p(),s("ngIf",l)}}var Wi=(()=>{let o=class o{constructor(l,r,c){this.productService=l,this.messageService=r,this.cd=c,this.clonedProducts={},this.code={basic:`<p-toast></p-toast>
<p-table [value]="products" dataKey="id" editMode="row" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width:20%">Code</th>
            <th style="width:20%">Name</th>
            <th style="width:20%">Inventory Status</th>
            <th style="width:20%">Price</th>
            <th style="width:20%"></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-editing="editing" let-ri="rowIndex">
        <tr [pEditableRow]="product">
            <td>
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.code">
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{product.code}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.name" required>
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{product.name}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <p-dropdown [options]="statuses" appendTo="body" [(ngModel)]="product.inventoryStatus" [style]="{'width':'100%'}"></p-dropdown>
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{product.inventoryStatus}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <p-cellEditor>
                    <ng-template pTemplate="input">
                        <input pInputText type="text" [(ngModel)]="product.price">
                    </ng-template>
                    <ng-template pTemplate="output">
                        {{product.price | currency: 'USD'}}
                    </ng-template>
                </p-cellEditor>
            </td>
            <td>
                <div class="flex align-items-center justify-content-center gap-2">
                    <button *ngIf="!editing" pButton pRipple type="button" pInitEditableRow icon="pi pi-pencil" (click)="onRowEditInit(product)" class="p-button-rounded p-button-text"></button>
                    <button *ngIf="editing" pButton pRipple type="button" pSaveEditableRow icon="pi pi-check" (click)="onRowEditSave(product)" class="p-button-rounded p-button-text p-button-success mr-2"></button>
                    <button *ngIf="editing" pButton pRipple type="button" pCancelEditableRow icon="pi pi-times" (click)="onRowEditCancel(product, ri)" class="p-button-rounded p-button-text p-button-danger"></button>
                </div>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-toast></p-toast>
    <p-table [value]="products" dataKey="id" editMode="row" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:20%">Code</th>
                <th style="width:20%">Name</th>
                <th style="width:20%">Inventory Status</th>
                <th style="width:20%">Price</th>
                <th style="width:20%"></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-editing="editing" let-ri="rowIndex">
            <tr [pEditableRow]="product">
                <td>
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.code">
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{product.code}}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td>
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.name" required>
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{product.name}}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td>
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <p-dropdown [options]="statuses" appendTo="body" [(ngModel)]="product.inventoryStatus" [style]="{'width':'100%'}"></p-dropdown>
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{product.inventoryStatus}}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td>
                    <p-cellEditor>
                        <ng-template pTemplate="input">
                            <input pInputText type="text" [(ngModel)]="product.price">
                        </ng-template>
                        <ng-template pTemplate="output">
                            {{product.price | currency: 'USD'}}
                        </ng-template>
                    </p-cellEditor>
                </td>
                <td>
                    <div class="flex align-items-center justify-content-center gap-2">
                        <button *ngIf="!editing" pButton pRipple type="button" pInitEditableRow icon="pi pi-pencil" (click)="onRowEditInit(product)" class="p-button-rounded p-button-text"></button>
                        <button *ngIf="editing" pButton pRipple type="button" pSaveEditableRow icon="pi pi-check" (click)="onRowEditSave(product)" class="p-button-rounded p-button-text p-button-success mr-2"></button>
                        <button *ngIf="editing" pButton pRipple type="button" pCancelEditableRow icon="pi pi-times" (click)="onRowEditCancel(product, ri)" class="p-button-rounded p-button-text p-button-danger"></button>
                    </div>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-row-edit-demo',
    templateUrl: 'table-row-edit-demo.html',
    providers: [MessageService]
})
export class TableRowEditDemo implements OnInit{

    products!: Product[];

    statuses!: SelectItem[];

    clonedProducts: { [s: string]: Product } = {};

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];
    }

    onRowEditInit(product: Product) {
        this.clonedProducts[product.id as string] = { ...product };
    }

    onRowEditSave(product: Product) {
        if (product.price > 0) {
            delete this.clonedProducts[product.id as string];
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        }
    }

    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.statuses=[{label:"In Stock",value:"INSTOCK"},{label:"Low Stock",value:"LOWSTOCK"},{label:"Out of Stock",value:"OUTOFSTOCK"}]}onRowEditInit(l){this.clonedProducts[l.id]=Be({},l)}onRowEditSave(l){l.price>0?(delete this.clonedProducts[l.id],this.messageService.add({severity:"success",summary:"Success",detail:"Product is updated"})):this.messageService.add({severity:"error",summary:"Error",detail:"Invalid Price"})}onRowEditCancel(l,r){this.products[r]=this.clonedProducts[l.id],delete this.clonedProducts[l.id]}};o.\u0275fac=function(r){return new(r||o)(u(F),u(te),u(D))},o.\u0275cmp=S({type:o,selectors:[["row-edit-doc"]],features:[fe([te])],decls:38,vars:5,consts:[[3,"load"],[1,"card"],["dataKey","id","editMode","row",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-row-edit-demo",3,"code","extFiles"],[2,"width","20%"],[3,"pEditableRow"],["pTemplate","input"],["pTemplate","output"],[1,"flex","align-items-center","justify-content-center","gap-2"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil","class","p-button-rounded p-button-text",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check","class","p-button-rounded p-button-text p-button-success mr-2",3,"click",4,"ngIf"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times","class","p-button-rounded p-button-text p-button-danger",3,"click",4,"ngIf"],["pInputText","","type","text",3,"ngModelChange","ngModel"],["pInputText","","type","text","required","",3,"ngModelChange","ngModel"],["appendTo","body",3,"ngModelChange","options","ngModel"],["pButton","","pRipple","","type","button","pInitEditableRow","","icon","pi pi-pencil",1,"p-button-rounded","p-button-text",3,"click"],["pButton","","pRipple","","type","button","pSaveEditableRow","","icon","pi pi-check",1,"p-button-rounded","p-button-text","p-button-success","mr-2",3,"click"],["pButton","","pRipple","","type","button","pCancelEditableRow","","icon","pi pi-times",1,"p-button-rounded","p-button-text","p-button-danger",3,"click"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Row editing toggles the visibility of all the editors in the row at once and provides additional options to save and cancel editing. Row editing functionality is enabled by setting the "),e(3,"i"),i(4,"editMode"),t(),i(5,' to "row" on table, defining a dataKey to uniquely identify a row, adding '),e(6,"i"),i(7,"pEditableRow"),t(),i(8," directive to the editable rows and defining the UI Controls with "),e(9,"i"),i(10,"pInitEditableRow"),t(),i(11,", "),e(12,"i"),i(13,"pSaveEditableRow"),t(),i(14," and "),e(15,"i"),i(16,"pCancelEditableRow"),t(),i(17," directives respectively. "),t(),e(18,"p"),i(19,' Save and Cancel functionality implementation is left to the page author to provide more control over the editing business logic. Example below utilizes a simple implementation where a row is cloned when editing is initialized and is saved or restored depending on the result of the editing. An implicit variable called "editing" is passed to the body template so you may come up with your own UI controls that implement editing based on your own requirements such as adding validations and styling. Note that '),e(20,"i"),i(21,"pSaveEditableRow"),t(),i(22," only switches the row to back view mode when there are no validation errors. "),t(),e(23,"p"),i(24," Moreover, you may use setting "),e(25,"i"),i(26,"pEditableRowDisabled"),t(),i(27," property as true to disable editing for that particular row and in case you need to display rows in edit mode by default, use the "),e(28,"i"),i(29,"editingRowKeys"),t(),i(30," property which is a map whose key is the dataKey of the record where the value is any arbitrary number greater than zero. "),t()(),e(31,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(32,"div",1),m(33,"p-toast"),e(34,"p-table",2),g(35,Or,10,0,"ng-template",3)(36,Hr,22,4,"ng-template",4),t()()(),m(37,"app-code",5)),r&2&&(p(34),s("value",c.products)("tableStyle",b(4,kr)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[_e,Pe,W,Fe,Y,w,_,Ke,kt,Bt,Ot,zt,ie,ve,Te,le,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var $r=()=>({"min-width":"60rem"});function Gr(n,o){n&1&&(e(0,"tr"),m(1,"th",7),e(2,"th",8),i(3,"Name "),m(4,"p-sortIcon",9),t(),e(5,"th"),i(6,"Image"),t(),e(7,"th",10),i(8,"Price "),m(9,"p-sortIcon",11),t(),e(10,"th",12),i(11,"Category "),m(12,"p-sortIcon",13),t(),e(13,"th",14),i(14,"Reviews "),m(15,"p-sortIcon",15),t(),e(16,"th",16),i(17,"Status "),m(18,"p-sortIcon",17),t()())}function Qr(n,o){if(n&1&&(e(0,"tr")(1,"td"),m(2,"button",18),t(),e(3,"td"),i(4),t(),e(5,"td"),m(6,"img",19),t(),e(7,"td"),i(8),U(9,"currency"),t(),e(10,"td"),i(11),t(),e(12,"td"),m(13,"p-rating",20),t(),e(14,"td"),m(15,"p-tag",21),t()()),n&2){let a=o.$implicit,l=o.expanded,r=f();p(2),s("pRowToggler",a)("icon",l?"pi pi-chevron-down":"pi pi-chevron-right"),p(2),d(a.name),p(2),s("src","https://primefaces.org/cdn/primeng/images/demo/product/"+a.image,G)("alt",a.name),p(2),d(K(9,12,a.price,"USD")),p(3),d(a.category),p(2),s("ngModel",a.rating)("readonly",!0)("cancel",!1),p(2),s("value",a.inventoryStatus)("severity",r.getSeverity(a.inventoryStatus))}}function Jr(n,o){n&1&&(e(0,"tr")(1,"th",26),i(2,"Id "),m(3,"p-sortIcon",11),t(),e(4,"th",27),i(5,"Customer "),m(6,"p-sortIcon",28),t(),e(7,"th",29),i(8,"Date "),m(9,"p-sortIcon",30),t(),e(10,"th",31),i(11,"Amount "),m(12,"p-sortIcon",32),t(),e(13,"th",33),i(14,"Status "),m(15,"p-sortIcon",34),t(),m(16,"th",35),t())}function Xr(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),U(9,"currency"),t(),e(10,"td"),m(11,"p-tag",21),t(),e(12,"td"),m(13,"p-button",36),t()()),n&2){let a=o.$implicit,l=f(2);p(2),d(a.id),p(2),d(a.customer),p(2),d(a.date),p(2),d(K(9,6,a.amount,"USD")),p(3),s("value",a.status)("severity",l.getStatusSeverity(a.status))}}function Zr(n,o){n&1&&(e(0,"tr")(1,"td",37),i(2,"There are no order for this product yet."),t()())}function el(n,o){if(n&1&&(e(0,"tr")(1,"td",22)(2,"div",23)(3,"p-table",24),g(4,Jr,17,0,"ng-template",3)(5,Xr,14,9,"ng-template",4)(6,Zr,3,0,"ng-template",25),t()()()()),n&2){let a=o.$implicit;p(3),s("value",a.orders)}}var Yi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" dataKey="name" [tableStyle]="{ 'min-width': '60rem' }">
    <ng-template pTemplate="header">
        <tr>
            <th style="width: 5rem"></th>
            <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th>Image</th>
            <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
            <th pSortableColumn="category">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="rating">Reviews <p-sortIcon field="rating"></p-sortIcon></th>
            <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product let-expanded="expanded">
        <tr>
            <td>
                <button type="button" pButton pRipple [pRowToggler]="product" class="p-button-text p-button-rounded p-button-plain" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
            </td>
            <td>{{ product.name }}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-4" /></td>
            <td>{{ product.price | currency: 'USD' }}</td>
            <td>{{ product.category }}</td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            <td>
                <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="rowexpansion" let-product>
        <tr>
            <td colspan="7">
                <div class="p-3">
                    <p-table [value]="product.orders" dataKey="id">
                        <ng-template pTemplate="header">
                            <tr>
                                <th pSortableColumn="id">Id <p-sortIcon field="price"></p-sortIcon></th>
                                <th pSortableColumn="customer">Customer <p-sortIcon field="customer"></p-sortIcon></th>
                                <th pSortableColumn="date">Date <p-sortIcon field="date"></p-sortIcon></th>
                                <th pSortableColumn="amount">Amount <p-sortIcon field="amount"></p-sortIcon></th>
                                <th pSortableColumn="status">Status <p-sortIcon field="status"></p-sortIcon></th>
                                <th style="width: 4rem"></th>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="body" let-order>
                            <tr>
                                <td>{{ order.id }}</td>
                                <td>{{ order.customer }}</td>
                                <td>{{ order.date }}</td>
                                <td>{{ order.amount | currency: 'USD' }}</td>
                                <td>
                                    <p-tag [value]="order.status" [severity]="getStatusSeverity(order.status)"></p-tag>
                                </td>
                                <td><p-button type="button" icon="pi pi-plus"></p-button></td>
                            </tr>
                        </ng-template>
                        <ng-template pTemplate="emptymessage">
                            <tr>
                                <td colspan="6">There are no order for this product yet.</td>
                            </tr>
                        </ng-template>
                    </p-table>
                </div>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" dataKey="name" [tableStyle]="{ 'min-width': '60rem' }">
        <ng-template pTemplate="header">
            <tr>
                <th style="width: 5rem"></th>
                <th pSortableColumn="name">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th>Image</th>
                <th pSortableColumn="price">Price <p-sortIcon field="price"></p-sortIcon></th>
                <th pSortableColumn="category">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="rating">Reviews <p-sortIcon field="rating"></p-sortIcon></th>
                <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product let-expanded="expanded">
            <tr>
                <td>
                    <button type="button" pButton pRipple [pRowToggler]="product" class="p-button-text p-button-rounded p-button-plain" [icon]="expanded ? 'pi pi-chevron-down' : 'pi pi-chevron-right'"></button>
                </td>
                <td>{{ product.name }}</td>
                <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="50" class="shadow-4" /></td>
                <td>{{ product.price | currency: 'USD' }}</td>
                <td>{{ product.category }}</td>
                <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
                <td>
                    <p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="rowexpansion" let-product>
            <tr>
                <td colspan="7">
                    <div class="p-3">
                        <p-table [value]="product.orders" dataKey="id">
                            <ng-template pTemplate="header">
                                <tr>
                                    <th pSortableColumn="id">Id <p-sortIcon field="price"></p-sortIcon></th>
                                    <th pSortableColumn="customer">Customer <p-sortIcon field="customer"></p-sortIcon></th>
                                    <th pSortableColumn="date">Date <p-sortIcon field="date"></p-sortIcon></th>
                                    <th pSortableColumn="amount">Amount <p-sortIcon field="amount"></p-sortIcon></th>
                                    <th pSortableColumn="status">Status <p-sortIcon field="status"></p-sortIcon></th>
                                    <th style="width: 4rem"></th>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="body" let-order>
                                <tr>
                                    <td>{{ order.id }}</td>
                                    <td>{{ order.customer }}</td>
                                    <td>{{ order.date }}</td>
                                    <td>{{ order.amount | currency: 'USD' }}</td>
                                    <td>
                                        <p-tag [value]="order.status" [severity]="getStatusSeverity(order.status)"></p-tag>
                                    </td>
                                    <td><p-button type="button" icon="pi pi-plus"></p-button></td>
                                </tr>
                            </ng-template>
                            <ng-template pTemplate="emptymessage">
                                <tr>
                                    <td colspan="6">There are no order for this product yet.</td>
                                </tr>
                            </ng-template>
                        </p-table>
                    </div>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-row-expand-demo',
    templateUrl: 'table-row-expand-demo.html',
    styleUrls: ['table-row-expand-demo.scss']
})
export class TableRowExpandDemo implements OnInit{
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
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

    getStatusSeverity(status: string){
        switch (status) {
            case 'PENDING':
                return 'warning';
            case 'DELIVERED':
                return 'success';
            case 'CANCELLED':
                return 'danger'
        }
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
    orders: [
        {
            id: '1000-0',
            productCode: 'f230fh0g3',
            date: '2020-09-13',
            amount: 65,
            quantity: 1,
            customer: 'David James',
            status: 'PENDING'
        },
        ...
    ]
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
}`}]}loadDemoData(){this.productService.getProductsWithOrdersSmall().then(l=>{this.products=l,this.cd.markForCheck()})}getSeverity(l){switch(l){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}getStatusSeverity(l){switch(l){case"PENDING":return"warning";case"DELIVERED":return"success";case"CANCELLED":return"danger"}}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["row-expand-doc"]],decls:16,vars:5,consts:[[3,"load"],[1,"card"],["dataKey","name",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["pTemplate","rowexpansion"],["selector","table-row-expand-demo",3,"code","extFiles"],[2,"width","5rem"],["pSortableColumn","name"],["field","name"],["pSortableColumn","price"],["field","price"],["pSortableColumn","category"],["field","category"],["pSortableColumn","rating"],["field","rating"],["pSortableColumn","inventoryStatus"],["field","inventoryStatus"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["width","50",1,"shadow-4",3,"src","alt"],[3,"ngModel","readonly","cancel"],[3,"value","severity"],["colspan","7"],[1,"p-3"],["dataKey","id",3,"value"],["pTemplate","emptymessage"],["pSortableColumn","id"],["pSortableColumn","customer"],["field","customer"],["pSortableColumn","date"],["field","date"],["pSortableColumn","amount"],["field","amount"],["pSortableColumn","status"],["field","status"],[2,"width","4rem"],["type","button","icon","pi pi-plus"],["colspan","6"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Row expansion allows displaying detailed content for a particular row. To use this feature, add a template named rowexpansion and use the "),e(3,"i"),i(4,"pRowToggler"),t(),i(5," directive whose value is the row data instance on an element of your choice whose click event toggles the expansion. This enables providing your custom UI such as buttons, links and so on. Example below uses an anchor with an icon as a toggler. Setting "),e(6,"i"),i(7,"pRowTogglerDisabled"),t(),i(8," as true disables the toggle event for the element. "),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,Gr,19,0,"ng-template",3)(13,Qr,16,15,"ng-template",4)(14,el,7,1,"ng-template",5),t()()(),m(15,"app-code",6)),r&2&&(p(11),s("value",c.products)("tableStyle",b(4,$r)),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,ne,je,oe,ie,ye,J,Se,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var tl=()=>({"min-width":"75rem"});function il(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"#"),t(),e(3,"th"),i(4,"Representative"),t(),e(5,"th"),i(6,"Name"),t(),e(7,"th"),i(8,"Country"),t(),e(9,"th"),i(10,"Company"),t(),e(11,"th"),i(12,"Status"),t(),e(13,"th"),i(14,"Date"),t()())}function nl(n,o){if(n&1&&(e(0,"td"),m(1,"img",11),e(2,"span",12),i(3),t()()),n&2){let a=f(),l=a.$implicit,r=a.rowspan;rt("rowspan",r),p(),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",l.representative.image,"",G),s("alt",l.representative.name),p(2),d(l.representative.name)}}function ol(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),g(3,nl,4,5,"td",7),e(4,"td"),i(5),t(),e(6,"td"),m(7,"img",8),e(8,"span",9),i(9),t()(),e(10,"td"),i(11),t(),e(12,"td"),m(13,"p-tag",10),t(),e(14,"td"),i(15),t()()),n&2){let a=o.$implicit,l=o.rowIndex,r=o.rowgroup,c=f();p(2),d(l),p(),s("ngIf",r),p(2),P(" ",a.name," "),p(2),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(2),P(" ",a.company," "),p(2),s("value",a.status)("severity",c.getSeverity(a.status)),p(2),P(" ",a.date," ")}}var Hi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortField="representative.name" sortMode="single"  [tableStyle]="{'min-width': '75rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th style="width:3rem">#</th>
            <th>Representative</th>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex" let-rowgroup="rowgroup" let-rowspan="rowspan">
        <tr>
            <td>{{rowIndex}}</td>
            <td *ngIf="rowgroup" [attr.rowspan]="rowspan">
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
            <td>
                {{customer.name}}
            </td>
            <td>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortField="representative.name" sortMode="single"  [tableStyle]="{'min-width': '75rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th style="width:3rem">#</th>
                <th>Representative</th>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex" let-rowgroup="rowgroup" let-rowspan="rowspan">
            <tr>
                <td>{{rowIndex}}</td>
                <td *ngIf="rowgroup" [attr.rowspan]="rowspan">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="font-bold ml-2">{{customer.representative.name}}</span>
                </td>
                <td>
                    {{customer.name}}
                </td>
                <td>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                    <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
                </td>
                <td>
                    {{customer.company}}
                </td>
                <td>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    {{customer.date}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-rowspan-grouping-demo',
    templateUrl: 'table-rowspan-grouping-demo.html'
})
export class TableRowspanGroupingDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}calculateCustomerTotal(l){let r=0;if(this.customers)for(let c of this.customers)c.representative?.name===l&&r++;return r}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["rowspan-grouping-doc"]],decls:15,vars:5,consts:[[3,"load"],[1,"card"],["rowGroupMode","rowspan","groupRowsBy","representative.name","sortField","representative.name","sortMode","single",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-rowspan-grouping-demo",3,"code","extFiles"],[2,"width","3rem"],[4,"ngIf"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],[3,"value","severity"],["width","32",2,"vertical-align","middle",3,"alt","src"],[1,"font-bold","ml-2"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"When "),e(3,"i"),i(4,"rowGroupMode"),t(),i(5," is configured to be "),e(6,"i"),i(7,"rowspan"),t(),i(8,", the grouping column spans multiple rows."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,il,15,0,"ng-template",3)(13,ol,16,10,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.customers)("tableStyle",b(4,tl)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[_e,w,_,J,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var al=()=>({"min-width":"60rem"});function rl(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code "),m(3,"p-sortIcon",7),t(),e(4,"th",8),i(5,"Name "),m(6,"p-sortIcon",9),t(),e(7,"th",10),i(8,"Category "),m(9,"p-sortIcon",11),t(),e(10,"th",12),i(11,"Quantity "),m(12,"p-sortIcon",13),t(),e(13,"th",14),i(14,"Price "),m(15,"p-sortIcon",15),t()())}function ll(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),U(11,"currency"),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity),p(2),d(K(11,5,a.price,"USD"))}}var $i=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
            <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
            <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-single-column-sort-demo',
    templateUrl: 'table-single-column-sort-demo.html'
})
export class TableSingleColumnSortDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["single-column-sort-doc"]],decls:23,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-single-column-sort-demo",3,"code","extFiles"],["pSortableColumn","code",2,"width","20%"],["field","code"],["pSortableColumn","name",2,"width","20%"],["field","name"],["pSortableColumn","category",2,"width","20%"],["field","category"],["pSortableColumn","quantity",2,"width","20%"],["field","quantity"],["pSortableColumn","price",2,"width","20%"],["field","price"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," A column can be made sortable by adding the "),e(3,"i"),i(4,"pSortableColumn"),t(),i(5," directive whose value is the field to sort against and a sort indicator via "),e(6,"i"),i(7,"p-sortIcon"),t(),i(8," component. For dynamic columns, setting "),e(9,"i"),i(10,"pSortableColumnDisabled"),t(),i(11," property as true disables sorting for that particular column. "),t(),e(12,"p"),i(13,"Default sorting is executed on a single column, in order to enable multiple field sorting, set "),e(14,"i"),i(15,"sortMode"),t(),i(16,' property to "multiple" and use metakey when clicking on another column.'),t()(),e(17,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(18,"div",1)(19,"p-table",2),g(20,rl,16,0,"ng-template",3)(21,ll,12,8,"ng-template",4),t()()(),m(22,"app-code",5)),r&2&&(p(19),s("value",c.products)("tableStyle",b(4,al)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ne,oe,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var cl=()=>({"min-width":"60rem"});function pl(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code "),m(3,"p-sortIcon",7),t(),e(4,"th",8),i(5,"Name "),m(6,"p-sortIcon",9),t(),e(7,"th",10),i(8,"Category "),m(9,"p-sortIcon",11),t(),e(10,"th",12),i(11,"Quantity "),m(12,"p-sortIcon",13),t(),e(13,"th",14),i(14,"Price "),m(15,"p-sortIcon",15),t()())}function sl(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t(),e(9,"td"),i(10),U(11,"currency"),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity),p(2),d(K(11,5,a.price,"USD"))}}var Gi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products1" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
            <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
            <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
            <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
            <td>{{product.price | currency: 'USD'}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products1" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="code" style="width:20%">Code <p-sortIcon field="code"></p-sortIcon></th>
                <th pSortableColumn="name" style="width:20%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="category" style="width:20%">Category <p-sortIcon field="category"></p-sortIcon></th>
                <th pSortableColumn="quantity" style="width:20%">Quantity <p-sortIcon field="quantity"></p-sortIcon></th>
                <th pSortableColumn="price" style="width:20%">Price <p-sortIcon field="price"></p-sortIcon></th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
                <td>{{product.price | currency: 'USD'}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-multiple-column-sort-demo',
    templateUrl: 'table-multiple-column-sort-demo.html'
})
export class TableSingleColumnSortDemo implements OnInit {
    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["multiple-column-sort-doc"]],decls:18,vars:5,consts:[[3,"load"],[1,"card"],["sortMode","multiple",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-multiple-column-sort-demo",3,"code","extFiles"],["pSortableColumn","code",2,"width","20%"],["field","code"],["pSortableColumn","name",2,"width","20%"],["field","name"],["pSortableColumn","category",2,"width","20%"],["field","category"],["pSortableColumn","quantity",2,"width","20%"],["field","quantity"],["pSortableColumn","price",2,"width","20%"],["field","price"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Multiple columns can be sorted by defining "),e(3,"i"),i(4,"sortMode"),t(),i(5," as "),e(6,"i"),i(7,"multiple"),t(),i(8,". This mode requires metaKey (e.g. "),e(9,"i"),i(10,"\u2318"),t(),i(11,") to be pressed when clicking a header."),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),g(15,pl,16,0,"ng-template",3)(16,sl,12,8,"ng-template",4),t()()(),m(17,"app-code",5)),r&2&&(p(14),s("value",c.products)("tableStyle",b(4,cl)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ne,oe,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var ml=()=>({"min-width":"50rem"});function dl(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function ul(n,o){if(n&1&&(e(0,"tr",6)(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;s("pSelectableRow",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var Qi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr [pSelectableRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr [pSelectableRow]="product">
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-single-selection-demo',
    templateUrl: 'table-single-selection-demo.html'
})
export class TableSingleSelectionDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["single-selection-doc"]],decls:29,vars:6,consts:[[3,"load"],[1,"card"],["selectionMode","single","dataKey","code",3,"selectionChange","value","selection","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-single-selection-demo",3,"code","extFiles"],[3,"pSelectableRow"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Single row selection is enabled by defining "),e(3,"i"),i(4,"selectionMode"),t(),i(5," as "),e(6,"i"),i(7,"single"),t(),i(8," along with a value binding using "),e(9,"i"),i(10,"selection"),t(),i(11," property. When available, it is suggested to provide a unique identifier of a row with "),e(12,"i"),i(13,"dataKey"),t(),i(14," to optimize performance. "),t(),e(15,"p"),i(16," By default, metaKey press (e.g. "),e(17,"i"),i(18,"\u2318"),t(),i(19,") is necessary to unselect a row however this can be configured with disabling the "),e(20,"i"),i(21,"metaKeySelection"),t(),i(22," property. In touch enabled devices this option has no effect and behavior is same as setting it to false. "),t()(),e(23,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(24,"div",1)(25,"p-table",2),z("selectionChange",function(y){return O(c.selectedProduct,y)||(c.selectedProduct=y),y}),g(26,dl,9,0,"ng-template",3)(27,ul,9,5,"ng-template",4),t()()(),m(28,"app-code",5)),r&2&&(p(25),s("value",c.products),B("selection",c.selectedProduct),s("tableStyle",b(5,ml)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,be,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var gl=()=>({"min-width":"50rem"});function hl(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function fl(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var Ji=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.selectedSize="",this.code={basic:`<div class="flex justify-content-center mb-3">
    <p-selectButton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="class"></p-selectButton>
</div>
<p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [styleClass]="selectedSize.class">
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
            <td>{{ product.code }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.quantity }}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <div class="flex justify-content-center mb-3">
        <p-selectButton [options]="sizes" [(ngModel)]="selectedSize" [multiple]="false" optionLabel="name" optionValue="class"></p-selectButton>
    </div>
    <p-table [value]="products" [tableStyle]="{ 'min-width': '50rem' }" [styleClass]="selectedSize.class">
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
                <td>{{ product.code }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.category }}</td>
                <td>{{ product.quantity }}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-size-demo',
    templateUrl: 'table-size-demo.html'
})
export class TableSizeDemo {
    products!: Product[];

    sizes!: any[];

    selectedSize: any = '';

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.sizes = [
            { name: 'Small', class: 'p-datatable-sm' },
            { name: 'Normal', class: '' },
            { name: 'Large',  class: 'p-datatable-lg' }
        ];
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.sizes=[{name:"Small",class:"p-datatable-sm"},{name:"Normal",class:""},{name:"Large",class:"p-datatable-lg"}]}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["size-doc"]],decls:11,vars:9,consts:[[3,"load"],[1,"card"],[1,"flex","justify-content-center","mb-3"],["optionLabel","name","optionValue","class",3,"ngModelChange","options","ngModel","multiple"],[3,"value","tableStyle","styleClass"],["pTemplate","header"],["pTemplate","body"],["selector","table-size-demo",3,"code","extFiles"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"In addition to a regular table, alternatives with alternative sizes are available."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"div",2)(6,"p-selectButton",3),z("ngModelChange",function(y){return O(c.selectedSize,y)||(c.selectedSize=y),y}),t()(),e(7,"p-table",4),g(8,hl,9,0,"ng-template",5)(9,fl,9,4,"ng-template",6),t()()(),m(10,"app-code",7)),r&2&&(p(6),s("options",c.sizes),B("ngModel",c.selectedSize),s("multiple",!1),p(),s("value",c.products)("tableStyle",b(8,gl))("styleClass",c.selectedSize),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,wt,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var yl=()=>({"min-width":"50rem"});function vl(n,o){if(n&1){let a=R();e(0,"tr")(1,"th",8),i(2,"Name "),m(3,"p-sortIcon",9),t(),e(4,"th",10),i(5,"Country "),m(6,"p-sortIcon",11),t(),e(7,"th",12),i(8,"Representative "),m(9,"p-sortIcon",13),t(),e(10,"th",14),i(11,"Status "),m(12,"p-sortIcon",15),t()(),e(13,"tr")(14,"th")(15,"input",16),h("input",function(r){E(a),f();let c=ee(20);return I(c.filter(r.target.value,"name","contains"))}),t()(),e(16,"th")(17,"input",17),h("input",function(r){E(a),f();let c=ee(20);return I(c.filter(r.target.value,"country.name","contains"))}),t()(),e(18,"th")(19,"input",18),h("input",function(r){E(a),f();let c=ee(20);return I(c.filter(r.target.value,"representative.name","contains"))}),t()(),e(20,"th")(21,"input",19),h("input",function(r){E(a),f();let c=ee(20);return I(c.filter(r.target.value,"status","contains"))}),t()()()}if(n&2){f();let a=ee(20);p(15),s("value",a.filters.name==null?null:a.filters.name.value),p(2),s("value",a.filters["country.name"]==null?null:a.filters["country.name"].value),p(2),s("value",a.filters["representative.name"]==null?null:a.filters["representative.name"].value),p(2),s("value",a.filters.status==null?null:a.filters.status.value)}}function bl(n,o){if(n&1&&(e(0,"tr",20)(1,"td")(2,"span",21),i(3,"Name"),t(),i(4),t(),e(5,"td")(6,"span",21),i(7,"Country"),t(),m(8,"img",22),e(9,"span",23),i(10),t()(),e(11,"td")(12,"span",21),i(13,"Representative"),t(),m(14,"img",24),e(15,"span",23),i(16),t()(),e(17,"td")(18,"span",21),i(19,"Status"),t(),m(20,"p-tag",25),t()()),n&2){let a=o.$implicit,l=f();s("pSelectableRow",a),p(4),P(" ",a.name," "),p(4),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(4),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name),p(4),s("value",a.status)("severity",l.getSeverity(a.status))}}function Sl(n,o){if(n&1&&(e(0,"tr",20)(1,"td")(2,"span",21),i(3,"Name"),t(),i(4),t(),e(5,"td")(6,"span",21),i(7,"Country"),t(),m(8,"img",22),e(9,"span",23),i(10),t()(),e(11,"td")(12,"span",21),i(13,"Representative"),t(),m(14,"img",24),e(15,"span",23),i(16),t()(),e(17,"td")(18,"span",21),i(19,"Status"),t(),m(20,"p-tag",25),t()()),n&2){let a=o.$implicit,l=f();s("pSelectableRow",a),p(4),P(" ",a.name," "),p(4),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(4),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name),p(4),s("value",a.status)("severity",l.getSeverity(a.status))}}function xl(n,o){n&1&&(e(0,"tr")(1,"td",26),i(2,"No customers found."),t()())}var Xi=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table #dt1 [value]="customers" selectionMode="single" [(selection)]="selectedCustomers" dataKey="id" [tableStyle]="{'min-width': '50rem'}"
    [rows]="10" [paginator]="true" stateStorage="session" stateKey="statedemo-session">
    <ng-template pTemplate="header">
        <tr>
            <th pSortableColumn="name" style="width:25%">Name <p-sortIcon field="name"></p-sortIcon></th>
            <th pSortableColumn="country.name" style="width:25%">Country <p-sortIcon field="country.name"></p-sortIcon></th>
            <th pSortableColumn="representative.name" style="width:25%">Representative <p-sortIcon field="representative.name"></p-sortIcon></th>
            <th pSortableColumn="status" style="width:25%">Status <p-sortIcon field="status"></p-sortIcon></th>
        </tr>
        <tr>
        <th>
            <input pInputText type="text" (input)="dt1.filter($event.target.value, 'name', 'contains')" [value]="dt1.filters['name']?.value" placeholder="Search by Name" class="w-full">
        </th>
        <th>
            <input pInputText type="text" (input)="dt1.filter($event.target.value, 'country.name', 'contains')" [value]="dt1.filters['country.name']?.value" placeholder="Search by Country" class="w-full">
        </th>
        <th>
            <input pInputText type="text" (input)="dt1.filter($event.target.value, 'representative.name', 'contains')" [value]="dt1.filters['representative.name']?.value" placeholder="Search by Representative" class="w-full">
        </th>
        <th>
            <input pInputText type="text" (input)="dt1.filter($event.target.value, 'status', 'contains')" [value]="dt1.filters['status']?.value" placeholder="Search by Status" class="w-full">
        </th>
    </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr [pSelectableRow]="customer">
            <td>
                <span class="p-column-title">Name</span>
                {{customer.name}}
            </td>
            <td>
                <span class="p-column-title">Country</span>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
            </td>
            <td>
                <span class="p-column-title">Representative</span>
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="ml-1 vertical-align-middle">{{customer.representative.name}}</span>
            </td>
            <td>
                <span class="p-column-title">Status</span>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="emptymessage">
        <tr>
            <td colspan="4">No customers found.</td>
        </tr>
    </ng-template>
</p-table>`,html:`<div class="card">
    <p-table #dt1 [value]="customers" selectionMode="single" [(selection)]="selectedCustomers" dataKey="id" [tableStyle]="{'min-width': '50rem'}"
    [rows]="10" [paginator]="true" stateStorage="session" stateKey="statedemo-session">
        <ng-template pTemplate="header">
            <tr>
                <th pSortableColumn="name" style="width:25%">Name <p-sortIcon field="name"></p-sortIcon></th>
                <th pSortableColumn="country.name" style="width:25%">Country <p-sortIcon field="country.name"></p-sortIcon></th>
                <th pSortableColumn="representative.name" style="width:25%">Representative <p-sortIcon field="representative.name"></p-sortIcon></th>
                <th pSortableColumn="status" style="width:25%">Status <p-sortIcon field="status"></p-sortIcon></th>
            </tr>
            <tr>
            <th>
                <input pInputText type="text" (input)="dt1.filter($event.target.value, 'name', 'contains')" [value]="dt1.filters['name']?.value" placeholder="Search by Name" class="w-full">
            </th>
            <th>
                <input pInputText type="text" (input)="dt1.filter($event.target.value, 'country.name', 'contains')" [value]="dt1.filters['country.name']?.value" placeholder="Search by Country" class="w-full">
            </th>
            <th>
                <input pInputText type="text" (input)="dt1.filter($event.target.value, 'representative.name', 'contains')" [value]="dt1.filters['representative.name']?.value" placeholder="Search by Representative" class="w-full">
            </th>
            <th>
                <input pInputText type="text" (input)="dt1.filter($event.target.value, 'status', 'contains')" [value]="dt1.filters['status']?.value" placeholder="Search by Status" class="w-full">
            </th>
        </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr [pSelectableRow]="customer">
                <td>
                    <span class="p-column-title">Name</span>
                    {{customer.name}}
                </td>
                <td>
                    <span class="p-column-title">Country</span>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                    <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
                </td>
                <td>
                    <span class="p-column-title">Representative</span>
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="ml-1 vertical-align-middle">{{customer.representative.name}}</span>
                </td>
                <td>
                    <span class="p-column-title">Status</span>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="emptymessage">
            <tr>
                <td colspan="4">No customers found.</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-stateful-demo',
    templateUrl: 'table-stateful-demo.html',
    styleUrls: ['table-stateful-demo.scss']
})
export class TableStatefulDemo implements OnInit{
    customers!: Customer[];

    selectedCustomers!: Customer;

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMini().then((data) => (this.customers = data));
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMini().then(l=>{this.customers=l,this.cd.markForCheck()})}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["stateful-doc"]],decls:26,vars:8,consts:[["dt1",""],[3,"load"],[1,"card"],["selectionMode","single","dataKey","id","stateStorage","session","stateKey","statedemo-session",3,"selectionChange","value","selection","tableStyle","rows","paginator"],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],["selector","table-stateful-demo",3,"code","extFiles"],["pSortableColumn","name",2,"width","25%"],["field","name"],["pSortableColumn","country.name",2,"width","25%"],["field","country.name"],["pSortableColumn","representative.name",2,"width","25%"],["field","representative.name"],["pSortableColumn","status",2,"width","25%"],["field","status"],["pInputText","","type","text","placeholder","Search by Name",1,"w-full",3,"input","value"],["pInputText","","type","text","placeholder","Search by Country",1,"w-full",3,"input","value"],["pInputText","","type","text","placeholder","Search by Representative",1,"w-full",3,"input","value"],["pInputText","","type","text","placeholder","Search by Status",1,"w-full",3,"input","value"],[3,"pSelectableRow"],[1,"p-column-title"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],["width","32",2,"vertical-align","middle",3,"alt","src"],[3,"value","severity"],["colspan","4"]],template:function(r,c){if(r&1){let v=R();e(0,"app-docsectiontext")(1,"p"),i(2,"Stateful table allows keeping the state such as page, sort and filtering either at local storage or session storage so that when the page is visited again, table would render the data using the last settings."),t(),e(3,"p"),i(4," Change the state of the table e.g paginate, navigate away and then return to this table again to test this feature, the setting is set as "),e(5,"i"),i(6,"session"),t(),i(7," with the "),e(8,"i"),i(9,"stateStorage"),t(),i(10," property so that Table retains the state until the browser is closed. Other alternative is "),e(11,"i"),i(12,"local"),t(),i(13," referring to "),e(14,"i"),i(15,"localStorage"),t(),i(16," for an extended lifetime. "),t()(),e(17,"p-deferred-demo",1),h("load",function(){return E(v),I(c.loadDemoData())}),e(18,"div",2)(19,"p-table",3,0),z("selectionChange",function(M){return E(v),O(c.selectedCustomers,M)||(c.selectedCustomers=M),I(M)}),g(21,vl,22,4,"ng-template",4)(22,bl,21,11,"ng-template",5)(23,Sl,21,11,"ng-template",5)(24,xl,3,0,"ng-template",6),t()()(),m(25,"app-code",7)}r&2&&(p(19),s("value",c.customers),B("selection",c.selectedCustomers),s("tableStyle",b(7,yl))("rows",5)("paginator",!0),p(6),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ne,be,oe,J,le,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Cl=()=>({"min-width":"50rem"});function _l(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function wl(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var Zi=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" styleClass="p-datatable-striped" [tableStyle]="{'min-width': '50rem'}">
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
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" styleClass="p-datatable-striped" [tableStyle]="{'min-width': '50rem'}">
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
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-striped-demo',
    templateUrl: 'table-striped-demo.html'
})
export class TableStripedDemo {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["striped-doc"]],decls:12,vars:5,consts:[[3,"load"],[1,"card"],["styleClass","p-datatable-striped",3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-striped-demo",3,"code","extFiles"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Adding "),e(3,"i"),i(4,"p-datatable-striped"),t(),i(5," class displays striped rows."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,_l,9,0,"ng-template",3)(10,wl,9,4,"ng-template",4),t()()(),m(11,"app-code",5)),r&2&&(p(8),s("value",c.products)("tableStyle",b(4,Cl)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Tl=()=>({"min-width":"50rem"}),Dl=n=>({"row-accessories":n}),El=(n,o,a)=>({outofstock:n,lowstock:o,instock:a});function Il(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function Pl(n,o){if(n&1&&(e(0,"tr",6)(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td")(8,"div",6),i(9),t()()()),n&2){let a=o.$implicit;s("ngClass",Oe(6,Dl,a.category==="Accessories")),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),s("ngClass",ct(8,El,a.quantity===0,a.quantity>0&&a.quantity<10,a.quantity>10)),p(),P(" ",a.quantity," ")}}var en=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr [ngClass]="{'row-accessories': product.category === 'Accessories'}">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>
                <div [ngClass]="{'outofstock': product.quantity === 0, 'lowstock': (product.quantity > 0 && product.quantity < 10),'instock': product.quantity > 10}">
                    {{product.quantity}}
                </div>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr [ngClass]="{'row-accessories': product.category === 'Accessories'}">
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>
                    <div [ngClass]="{'outofstock': product.quantity === 0, 'lowstock': (product.quantity > 0 && product.quantity < 10),'instock': product.quantity > 10}">
                        {{product.quantity}}
                    </div>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-style-demo',
    templateUrl: 'table-style-demo.html',
    styleUrls: ['table-style-demo.scss']
})
export class TableStyleDemo implements OnInit{
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }
}`,scss:`
.outofstock {
    font-weight: 700;
    color: #ff5252;
    text-decoration: line-through;
}

.lowstock {
    font-weight: 700;
    color: #ffa726;
}

.instock {
    font-weight: 700;
    color: #66bb6a;
}

:host ::ng-deep .row-accessories {
    background-color: rgba(0, 0, 0, 0.15) !important;
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["style-doc"]],decls:9,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-style-demo",3,"code","extFiles"],[3,"ngClass"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Certain rows or cells can easily be styled based on conditions."),t()(),e(3,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(4,"div",1)(5,"p-table",2),g(6,Il,9,0,"ng-template",3)(7,Pl,10,12,"ng-template",4),t()()(),m(8,"app-code",5)),r&2&&(p(5),s("value",c.products)("tableStyle",b(4,Tl)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[Ie,w,_,x,T,C],styles:[".outofstock[_ngcontent-%COMP%]{font-weight:700;color:#ff5252;text-decoration:line-through}.lowstock[_ngcontent-%COMP%]{font-weight:700;color:#ffa726}.instock[_ngcontent-%COMP%]{font-weight:700;color:#66bb6a}[_nghost-%COMP%]     .row-accessories{background-color:#00000026!important}"],changeDetection:0});let n=o;return n})();var Fl=()=>({"min-width":"60rem"});function Ml(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Country"),t(),e(5,"th"),i(6,"Company"),t(),e(7,"th"),i(8,"Status"),t(),e(9,"th"),i(10,"Date"),t()())}function Rl(n,o){if(n&1&&(e(0,"tr",8)(1,"td",9),m(2,"img",10),e(3,"span",11),i(4),t()()()),n&2){let a=o.$implicit;p(2),Z("src","https://primefaces.org/cdn/primeng/images/demo/avatar/",a.representative.image,"",G),s("alt",a.representative.name),p(2),d(a.representative.name)}}function kl(n,o){if(n&1&&(e(0,"tr")(1,"td",12),i(2),t()()),n&2){let a=o.$implicit,l=f();p(2),P("Total Customers: ",l.calculateCustomerTotal(a.representative.name),"")}}function Bl(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),m(4,"img",13),e(5,"span",14),i(6),t()(),e(7,"td"),i(8),t(),e(9,"td"),m(10,"p-tag",15),t(),e(11,"td"),i(12),t()()),n&2){let a=o.$implicit,l=f();p(2),P(" ",a.name," "),p(2),re("flag flag-"+a.country.code),p(2),d(a.country.name),p(2),P(" ",a.company," "),p(2),s("value",a.status)("severity",l.getSeverity(a.status)),p(2),P(" ",a.date," ")}}var tn=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupheader" let-customer>
        <tr pRowGroupHeader>
            <td colspan="5">
                <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                <span class="font-bold ml-2">{{customer.representative.name}}</span>
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="groupfooter" let-customer>
        <tr>
            <td colspan="5" class="text-right font-bold pr-6">Total Customers: {{calculateCustomerTotal(customer.representative.name)}}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex">
        <tr>
            <td>
                {{customer.name}}
            </td>
            <td>
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + customer.country.code" style="width: 20px">
                <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
            </td>
            <td>
                {{customer.company}}
            </td>
            <td>
                <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
            </td>
            <td>
                {{customer.date}}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="customers" sortField="representative.name" sortMode="single" [scrollable]="true" scrollHeight="400px" rowGroupMode="subheader" groupRowsBy="representative.name" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupheader" let-customer>
            <tr pRowGroupHeader>
                <td colspan="5">
                    <img [alt]="customer.representative.name" src="https://primefaces.org/cdn/primeng/images/demo/avatar/{{customer.representative.image}}" width="32" style="vertical-align: middle" />
                    <span class="font-bold ml-2">{{customer.representative.name}}</span>
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="groupfooter" let-customer>
            <tr>
                <td colspan="5" class="text-right font-bold pr-6">Total Customers: {{calculateCustomerTotal(customer.representative.name)}}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer let-rowIndex="rowIndex">
            <tr>
                <td>
                    {{customer.name}}
                </td>
                <td>
                    <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag-' + customer.country.code" style="width: 20px">
                    <span class="ml-1 vertical-align-middle">{{customer.country.name}}</span>
                </td>
                <td>
                    {{customer.company}}
                </td>
                <td>
                    <p-tag [value]="customer.status" [severity]="getSeverity(customer.status)"></p-tag>
                </td>
                <td>
                    {{customer.date}}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-subheader-grouping-demo',
    templateUrl: 'table-subheader-grouping-demo.html'
})
export class TableSubheaderGroupingDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }

    calculateCustomerTotal(name: string) {
        let total = 0;

        if (this.customers) {
            for (let customer of this.customers) {
                if (customer.representative?.name === name) {
                    total++;
                }
            }
        }

        return total;
    }

    getSeverity(status: string) {
        switch (status) {
            case 'unqualified':
                return 'danger';

            case 'qualified':
                return 'success';

            case 'new':
                return 'info';

            case 'negotiation':
                return 'warning';

            case 'renewal':
                return null;
        }
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}calculateCustomerTotal(l){let r=0;if(this.customers)for(let c of this.customers)c.representative?.name===l&&r++;return r}getSeverity(l){switch(l){case"unqualified":return"danger";case"qualified":return"success";case"new":return"info";case"negotiation":return"warning";case"renewal":return null}}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["subheader-grouping-doc"]],decls:26,vars:6,consts:[[3,"load"],[1,"card"],["sortField","representative.name","sortMode","single","scrollHeight","400px","rowGroupMode","subheader","groupRowsBy","representative.name",3,"value","scrollable","tableStyle"],["pTemplate","header"],["pTemplate","groupheader"],["pTemplate","groupfooter"],["pTemplate","body"],["selector","table-subheader-grouping-demo",3,"code","extFiles"],["pRowGroupHeader",""],["colspan","5"],["width","32",2,"vertical-align","middle",3,"alt","src"],[1,"font-bold","ml-2"],["colspan","5",1,"text-right","font-bold","pr-6"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"],[1,"ml-1","vertical-align-middle"],[3,"value","severity"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," Rows are grouped with the "),e(3,"i"),i(4,"groupRowsBy"),t(),i(5," property. When "),e(6,"i"),i(7,"rowGroupMode"),t(),i(8," is set as "),e(9,"i"),i(10,"subheader"),t(),i(11,", a header and footer can be displayed for each group. The content of a group header is provided with "),e(12,"i"),i(13,"groupheader"),t(),i(14," and footer with "),e(15,"i"),i(16,"groupfooter"),t(),i(17," templates. "),t()(),e(18,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(19,"div",1)(20,"p-table",2),g(21,Ml,11,0,"ng-template",3)(22,Rl,5,4,"ng-template",4)(23,kl,3,1,"ng-template",5)(24,Bl,13,8,"ng-template",6),t()()(),m(25,"app-code",7)),r&2&&(p(20),s("value",c.customers)("scrollable",!0)("tableStyle",b(5,Fl)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,It,J,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var Ol=()=>({"min-width":"60rem"});function zl(n,o){n&1&&(e(0,"div",8),i(1," Products "),m(2,"p-button",9),t())}function Al(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Image"),t(),e(5,"th"),i(6,"Price"),t(),e(7,"th"),i(8,"Category"),t(),e(9,"th"),i(10,"Reviews"),t(),e(11,"th"),i(12,"Status"),t()())}function Nl(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),m(4,"img",10),t(),e(5,"td"),i(6),U(7,"currency"),t(),e(8,"td"),i(9),t(),e(10,"td"),m(11,"p-rating",11),t(),e(12,"td"),m(13,"p-tag",12),t()()),n&2){let a=o.$implicit,l=f();p(2),d(a.name),p(2),s("src","https://primefaces.org/cdn/primeng/images/demo/product/"+a.image,G)("alt",a.name),p(2),d(K(7,10,a.price,"USD")),p(3),d(a.category),p(2),s("ngModel",a.rating)("readonly",!0)("cancel",!1),p(2),s("value",a.inventoryStatus)("severity",l.getSeverity(a.inventoryStatus))}}function Vl(n,o){if(n&1&&(e(0,"div",8),i(1),t()),n&2){let a=f();p(),P("In total there are ",a.products?a.products.length:0," products.")}}var nn=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
    <ng-template pTemplate="caption">
        <div class="flex align-items-center justify-content-between">
            Products
            <p-button icon="pi pi-refresh"></p-button>
        </div>
    </ng-template>
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th>
            <th>Reviews</th>
            <th>Status</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.name}}</td>
            <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
            <td>{{product.price | currency:'USD'}}</td>
            <td>{{product.category}}</td>
            <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
            <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
        </tr>
    </ng-template>
    <ng-template pTemplate="summary">
        <div class="flex align-items-center justify-content-between">
            In total there are {{products ? products.length : 0 }} products.
        </div>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [tableStyle]="{'min-width': '60rem'}">
        <ng-template pTemplate="caption">
            <div class="flex align-items-center justify-content-between">
                Products
                <p-button icon="pi pi-refresh"></p-button>
            </div>
        </ng-template>
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Category</th>
                <th>Reviews</th>
                <th>Status</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.name}}</td>
                <td><img [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + product.image" [alt]="product.name" width="100" class="shadow-4" /></td>
                <td>{{product.price | currency:'USD'}}</td>
                <td>{{product.category}}</td>
                <td><p-rating [ngModel]="product.rating" [readonly]="true" [cancel]="false"></p-rating></td>
                <td><p-tag [value]="product.inventoryStatus" [severity]="getSeverity(product.inventoryStatus)"></p-tag></td>
            </tr>
        </ng-template>
        <ng-template pTemplate="summary">
            <div class="flex align-items-center justify-content-between">
                In total there are {{products ? products.length : 0 }} products.
            </div>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-template-demo',
    templateUrl: 'table-template-demo.html'
})
export class TableTemplateDemo implements OnInit {
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
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
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()}),this.cols=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]}getSeverity(l){switch(l){case"INSTOCK":return"success";case"LOWSTOCK":return"warning";case"OUTOFSTOCK":return"danger"}}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["template-doc"]],decls:20,vars:5,consts:[[3,"load"],[1,"card"],[3,"value","tableStyle"],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["selector","table-template-demo",3,"code","extFiles"],[1,"flex","align-items-center","justify-content-between"],["icon","pi pi-refresh"],["width","100",1,"shadow-4",3,"src","alt"],[3,"ngModel","readonly","cancel"],[3,"value","severity"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Custom content at "),e(3,"i"),i(4,"header"),t(),i(5,", "),e(6,"i"),i(7,"body"),t(),i(8," and "),e(9,"i"),i(10,"footer"),t(),i(11," sections are supported via templating."),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),g(15,zl,3,0,"ng-template",3)(16,Al,13,0,"ng-template",4)(17,Nl,14,13,"ng-template",5)(18,Vl,2,1,"ng-template",6),t()()(),m(19,"app-code",7)),r&2&&(p(14),s("value",c.products)("tableStyle",b(4,Ol)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[W,Y,w,_,ye,J,Se,x,T,C,$],encapsulation:2,changeDetection:0});let n=o;return n})();var Ll=()=>({"min-width":"50rem"});function ql(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Name"),t(),e(3,"th"),i(4,"Country"),t(),e(5,"th"),i(6,"Company"),t(),e(7,"th"),i(8,"Representative"),t()())}function Ul(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}var on=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Company</th>
            <th>Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{customer.name}}</td>
            <td>{{customer.country.name}}</td>
            <td>{{customer.company}}</td>
            <td>{{customer.representative.name}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="customers" [scrollable]="true" scrollHeight="400px" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>Company</th>
                <th>Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{customer.name}}</td>
                <td>{{customer.country.name}}</td>
                <td>{{customer.company}}</td>
                <td>{{customer.representative.name}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-vertical-scroll-demo',
    templateUrl: 'table-vertical-scroll-demo.html'
})
export class TableVerticalScrollDemo implements OnInit{
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersMedium().then((data) => {
            this.customers = data;
        });
    }
}`,data:`{
        id: 1000,
        name: 'James Butt',
        country: {
            name: 'Algeria',
            code: 'dz'
        },
        company: 'Benton, John B Jr',
        date: '2015-09-13',
        status: 'unqualified',
        verified: true,
        activity: 17,
        representative: {
            name: 'Ioni Bowcher',
            image: 'ionibowcher.png'
        },
        balance: 70663
    },
    ...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersMedium().then(l=>{this.customers=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["vertical-scroll-doc"]],decls:15,vars:6,consts:[[3,"load"],[1,"card"],["scrollHeight","400px",3,"value","scrollable","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-vertical-scroll-demo",3,"code","extFiles"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Adding "),e(3,"i"),i(4,"scrollable"),t(),i(5," property along with a "),e(6,"i"),i(7,"scrollHeight"),t(),i(8," for the data viewport enables vertical scrolling with fixed headers."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,ql,9,0,"ng-template",3)(13,Ul,9,4,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.customers)("scrollable",!0)("tableStyle",b(5,Ll)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();function Kl(n,o){if(n&1&&(e(0,"th",7),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function Wl(n,o){if(n&1&&(e(0,"tr"),g(1,Kl,2,1,"th",6),t()),n&2){let a=o.$implicit;p(),s("ngForOf",a)}}function Yl(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function Hl(n,o){if(n&1&&(e(0,"tr",8),g(1,Yl,2,1,"td",9),t()),n&2){let a=o.columns;p(),s("ngForOf",a)}}var an=(()=>{let o=class o{constructor(l){this.carService=l,this.code={basic:`<p-table [columns]="cols" [value]="cars" [scrollable]="true" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" style="width: 20%;">
                {{ col.header }}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-rowIndex="rowIndex" let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns">
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [columns]="cols" [value]="cars" [scrollable]="true" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" style="width: 20%;">
                    {{ col.header }}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-rowIndex="rowIndex" let-columns="columns">
            <tr style="height:46px">
                <td *ngFor="let col of columns">
                    {{ rowData[col.field] }}
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-virtual-scroll-demo',
    templateUrl: 'table-virtual-scroll-demo.html'
})
export class TableVirtualScrollDemo implements OnInit{
    cars!: Car[];

    virtualCars!: Car[];

    cols!: Column[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
        this.virtualCars = Array.from({ length: 10000 });
    }
}`,data:`{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}
...`,service:["CarService"]},this.extFiles=[{path:"src/domain/car.ts",content:`
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`}]}loadDemoData(){this.cols=[{field:"id",header:"Id"},{field:"vin",header:"Vin"},{field:"year",header:"Year"},{field:"brand",header:"Brand"},{field:"color",header:"Color"}],this.cars=Array.from({length:1e4}).map((l,r)=>this.carService.generateCar(r+1)),this.virtualCars=Array.from({length:1e4})}};o.\u0275fac=function(r){return new(r||o)(u(We))},o.\u0275cmp=S({type:o,selectors:[["virtual-scroll-doc"]],decls:18,vars:7,consts:[[3,"load"],[1,"card"],["scrollHeight","250px",3,"columns","value","scrollable","virtualScroll","virtualScrollItemSize"],["pTemplate","header"],["pTemplate","body"],["selector","table-virtual-scroll-demo",3,"code","extFiles"],["style","width: 20%;",4,"ngFor","ngForOf"],[2,"width","20%"],[2,"height","46px"],[4,"ngFor","ngForOf"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),e(3,"i"),i(4,"virtualScroll"),t(),i(5," property as true and providing a "),e(6,"i"),i(7,"virtualScrollItemSize"),t(),i(8," in pixels would be enough to enable this functionality. It is also suggested to use the same "),e(9,"i"),i(10,"virtualScrollItemSize"),t(),i(11," value on the tr element inside the body template. "),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),g(15,Wl,2,1,"ng-template",3)(16,Hl,2,1,"ng-template",4),t()()(),m(17,"app-code",5)),r&2&&(p(14),s("columns",c.cols)("value",c.cars)("scrollable",!0)("virtualScroll",!0)("virtualScrollItemSize",46),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,w,_,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var $l=n=>({width:n});function Gl(n,o){if(n&1&&(e(0,"th",8),i(1),t()),n&2){let a=o.$implicit;p(),P(" ",a.header," ")}}function Ql(n,o){if(n&1&&(e(0,"tr"),g(1,Gl,2,1,"th",7),t()),n&2){let a=o.$implicit;p(),s("ngForOf",a)}}function Jl(n,o){if(n&1&&(e(0,"td"),i(1),t()),n&2){let a=o.$implicit,l=f().$implicit;p(),P(" ",l[a.field]," ")}}function Xl(n,o){if(n&1&&(e(0,"tr",9),g(1,Jl,2,1,"td",10),t()),n&2){let a=o.columns;p(),s("ngForOf",a)}}function Zl(n,o){if(n&1&&(e(0,"td"),m(1,"p-skeleton",11),t()),n&2){let a=o.$implicit,l=o.even;p(),s("ngStyle",Oe(1,$l,l?a.field==="year"?"30%":"40%":"60%"))}}function ec(n,o){if(n&1&&(e(0,"tr",9),g(1,Zl,2,3,"td",10),t()),n&2){let a=o.columns;p(),s("ngForOf",a)}}var rn=(()=>{let o=class o{constructor(l){this.carService=l,this.code={basic:`<p-table [columns]="cols" [value]="virtualCars" [scrollable]="true" scrollHeight="250px" [rows]="100"
    [virtualScroll]="true" [virtualScrollItemSize]="46" [lazy]="true" (onLazyLoad)="loadCarsLazy($event)">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" style="width: 20%;">
                {{col.header}}
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
    <ng-template pTemplate="loadingbody" let-columns="columns">
        <tr style="height:46px">
            <td *ngFor="let col of columns; let even = even">
                <p-skeleton [ngStyle]="{'width': even ? (col.field === 'year' ? '30%' : '40%') : '60%'}"></p-skeleton>
            </td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [columns]="cols" [value]="virtualCars" [scrollable]="true" scrollHeight="250px" [rows]="100"
    [virtualScroll]="true" [virtualScrollItemSize]="46" [lazy]="true" (onLazyLoad)="loadCarsLazy($event)">
        <ng-template pTemplate="header" let-columns>
            <tr>
                <th *ngFor="let col of columns" style="width: 20%;">
                    {{col.header}}
                </th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-rowData let-columns="columns">
            <tr style="height:46px">
                <td *ngFor="let col of columns">
                    {{rowData[col.field]}}
                </td>
            </tr>
        </ng-template>
        <ng-template pTemplate="loadingbody" let-columns="columns">
            <tr style="height:46px">
                <td *ngFor="let col of columns; let even = even">
                    <p-skeleton [ngStyle]="{'width': even ? (col.field === 'year' ? '30%' : '40%') : '60%'}"></p-skeleton>
                </td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Car } from '../../domain/car';
import { CarService } from '../../service/carservice';

interface Column {
    field: string;
    header: string;
}

@Component({
    selector: 'table-virtual-scroll-lazy-demo',
    templateUrl: 'table-virtual-scroll-lazy-demo.html'
})
export class TableVirtualScrollLazyDemo implements OnInit{
    cars!: Car[];

    virtualCars!: Car[];

    cols!: Column[];

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];

        this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
        this.virtualCars = Array.from({ length: 10000 });
    }

    loadCarsLazy(event: LazyLoadEvent) {
        //simulate remote connection with a timeout
        setTimeout(() => {
            //load data of required page
            let loadedCars = this.cars.slice(event.first, event.first + event.rows);

            //populate page of virtual cars
            Array.prototype.splice.apply(this.virtualCars, [...[event.first, event.rows], ...loadedCars]);

            //trigger change detection
            event.forceUpdate();
        }, Math.random() * 1000 + 250);
    } 
}`,data:`{
    id: 1
    vin: tvACo,
    brand: Norma,
    color: Black,
    year: 2002
}
...`,service:["CarService"]},this.extFiles=[{path:"src/domain/car.ts",content:`
export interface Car {
    id?;
    vin?;
    year?;
    brand?;
    color?;
    price?;
    saleDate?;
}`}]}loadDemoData(){this.cols=[{field:"id",header:"Id"},{field:"vin",header:"Vin"},{field:"year",header:"Year"},{field:"brand",header:"Brand"},{field:"color",header:"Color"}],this.cars=Array.from({length:1e4}).map((l,r)=>this.carService.generateCar(r+1)),this.virtualCars=Array.from({length:1e4})}loadCarsLazy(l){setTimeout(()=>{let r=this.cars.slice(l.first,l.first+l.rows);Array.prototype.splice.apply(this.virtualCars,[l.first,l.rows,...r]),l.forceUpdate()},Math.random()*1e3+250)}};o.\u0275fac=function(r){return new(r||o)(u(We))},o.\u0275cmp=S({type:o,selectors:[["virtual-scroll-lazy-doc"]],decls:19,vars:9,consts:[[3,"load"],[1,"card"],["scrollHeight","250px",3,"onLazyLoad","columns","value","scrollable","rows","virtualScroll","virtualScrollItemSize","lazy"],["pTemplate","header"],["pTemplate","body"],["pTemplate","loadingbody"],["selector","table-virtual-scroll-lazy-demo",3,"code","extFiles"],["style","width: 20%;",4,"ngFor","ngForOf"],[2,"width","20%"],[2,"height","46px"],[4,"ngFor","ngForOf"],[3,"ngStyle"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2," VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),e(3,"i"),i(4,"virtualScroll"),t(),i(5," property as true and providing a "),e(6,"i"),i(7,"virtualScrollItemSize"),t(),i(8," in pixels would be enough to enable this functionality. It is also suggested to use the same "),e(9,"i"),i(10,"virtualScrollItemSize"),t(),i(11," value on the tr element inside the body template. "),t()(),e(12,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(13,"div",1)(14,"p-table",2),h("onLazyLoad",function(y){return c.loadCarsLazy(y)}),g(15,Ql,2,1,"ng-template",3)(16,Xl,2,1,"ng-template",4)(17,ec,2,1,"ng-template",5),t()()(),m(18,"app-code",6)),r&2&&(p(14),s("columns",c.cols)("value",c.virtualCars)("scrollable",!0)("rows",100)("virtualScroll",!0)("virtualScrollItemSize",46)("lazy",!0),p(4),s("code",c.code)("extFiles",c.extFiles))},dependencies:[me,pt,w,_,ii,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var tc=()=>({"min-width":"50rem"});function ic(n,o){n&1&&(e(0,"tr")(1,"th",6),i(2,"Code"),t(),e(3,"th",6),i(4,"Name"),t(),e(5,"th",6),i(6,"Category"),t(),e(7,"th",6),i(8,"Quantity"),t()())}function nc(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var ln=(()=>{let o=class o{constructor(l,r){this.productService=l,this.cd=r,this.code={basic:`<p-table [value]="products" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th pResizableColumn>Code</th>
            <th pResizableColumn>Name</th>
            <th pResizableColumn>Category</th>
            <th pResizableColumn>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr>
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table [value]="products" [resizableColumns]="true" styleClass="p-datatable-gridlines" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th pResizableColumn>Code</th>
                <th pResizableColumn>Name</th>
                <th pResizableColumn>Category</th>
                <th pResizableColumn>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr>
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-column-resize-fit-mode-demo',
    templateUrl: 'table-column-resize-fit-mode-demo.html'
})
export class TableColumnResizeFitModeDemo implements OnInit{
    products!: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    } 
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(D))},o.\u0275cmp=S({type:o,selectors:[["column-resize-fit-mode-doc"]],decls:15,vars:6,consts:[[3,"load"],[1,"card"],["styleClass","p-datatable-gridlines",3,"value","resizableColumns","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-column-resize-fit-mode-demo",3,"code","extFiles"],["pResizableColumn",""]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Columns can be resized using drag drop by setting the "),e(3,"i"),i(4,"resizableColumns"),t(),i(5," to "),e(6,"i"),i(7,"true"),t(),i(8,". Fit mode is the default one and the overall table width does not change when a column is resized."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1)(11,"p-table",2),g(12,ic,9,0,"ng-template",3)(13,nc,9,4,"ng-template",4),t()()(),m(14,"app-code",5)),r&2&&(p(11),s("value",c.products)("resizableColumns",!0)("tableStyle",b(5,tc)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,Me,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var oc=()=>({"min-width":"50rem"});function ac(n,o){n&1&&(e(0,"tr")(1,"th"),i(2,"Code"),t(),e(3,"th"),i(4,"Name"),t(),e(5,"th"),i(6,"Category"),t(),e(7,"th"),i(8,"Quantity"),t()())}function rc(n,o){if(n&1&&(e(0,"tr",6)(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;s("pSelectableRow",a),p(2),d(a.code),p(2),d(a.name),p(2),d(a.category),p(2),d(a.quantity)}}var cn=(()=>{let o=class o{constructor(l,r,c){this.productService=l,this.messageService=r,this.cd=c,this.code={basic:`<p-toast></p-toast>
<p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code"
    (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{'min-width': '50rem'}">
    <ng-template pTemplate="header">
        <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-product>
        <tr [pSelectableRow]="product">
            <td>{{product.code}}</td>
            <td>{{product.name}}</td>
            <td>{{product.category}}</td>
            <td>{{product.quantity}}</td>
        </tr>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-toast></p-toast>
    <p-table [value]="products" selectionMode="single" [(selection)]="selectedProduct" dataKey="code"
        (onRowSelect)="onRowSelect($event)" (onRowUnselect)="onRowUnselect($event)" [tableStyle]="{'min-width': '50rem'}">
        <ng-template pTemplate="header">
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Category</th>
                <th>Quantity</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-product>
            <tr [pSelectableRow]="product">
                <td>{{product.code}}</td>
                <td>{{product.name}}</td>
                <td>{{product.category}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
    selector: 'table-selection-events-demo',
    templateUrl: 'table-selection-events-demo.html',
    providers: [MessageService]
})
export class TableSelectionEventsDemo implements OnInit{
    products!: Product[];

    selectedProduct!: Product;

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });
    }

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
    }
}`,data:`{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
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
}`}]}loadDemoData(){this.productService.getProductsMini().then(l=>{this.products=l,this.cd.markForCheck()})}onRowSelect(l){this.messageService.add({severity:"info",summary:"Product Selected",detail:l.data.name})}onRowUnselect(l){this.messageService.add({severity:"info",summary:"Product Unselected",detail:l.data.name})}};o.\u0275fac=function(r){return new(r||o)(u(F),u(te),u(D))},o.\u0275cmp=S({type:o,selectors:[["selection-events-doc"]],features:[fe([te])],decls:16,vars:6,consts:[[3,"load"],[1,"card"],["selectionMode","single","dataKey","code",3,"selectionChange","onRowSelect","onRowUnselect","value","selection","tableStyle"],["pTemplate","header"],["pTemplate","body"],["selector","table-selection-events-demo",3,"code","extFiles"],[3,"pSelectableRow"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"Table provides "),e(3,"i"),i(4,"onRowSelect"),t(),i(5," and "),e(6,"i"),i(7,"onRowUnselect"),t(),i(8," events to listen selection events."),t()(),e(9,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(10,"div",1),m(11,"p-toast"),e(12,"p-table",2),z("selectionChange",function(y){return O(c.selectedProduct,y)||(c.selectedProduct=y),y}),h("onRowSelect",function(y){return c.onRowSelect(y)})("onRowUnselect",function(y){return c.onRowUnselect(y)}),g(13,ac,9,0,"ng-template",3)(14,rc,9,5,"ng-template",4),t()()(),m(15,"app-code",5)),r&2&&(p(12),s("value",c.products),B("selection",c.selectedProduct),s("tableStyle",b(5,oc)),p(3),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,be,Te,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var pn=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=S({type:o,selectors:[["styling-doc"]],decls:94,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,c){r&1&&(e(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),i(5,"Name"),t(),e(6,"th"),i(7,"Element"),t()()(),e(8,"tbody")(9,"tr")(10,"td"),i(11,"p-datatable"),t(),e(12,"td"),i(13,"Container element."),t()(),e(14,"tr")(15,"td"),i(16,"p-datatable-header"),t(),e(17,"td"),i(18,"Header section."),t()(),e(19,"tr")(20,"td"),i(21,"p-datatable-footer"),t(),e(22,"td"),i(23,"Footer section."),t()(),e(24,"tr")(25,"td"),i(26,"p-sortable-column"),t(),e(27,"td"),i(28,"Sortable column header."),t()(),e(29,"tr")(30,"td"),i(31,"p-editable-column"),t(),e(32,"td"),i(33,"Editable column cell."),t()(),e(34,"tr")(35,"td"),i(36,"p-datatable-thead"),t(),e(37,"td"),i(38,"Thead element of header columns."),t()(),e(39,"tr")(40,"td"),i(41,"p-datatable-tbody"),t(),e(42,"td"),i(43,"Tbody element of body rows."),t()(),e(44,"tr")(45,"td"),i(46,"p-datatable-tfoot"),t(),e(47,"td"),i(48,"Tfoot element of footer columns."),t()(),e(49,"tr")(50,"td"),i(51,"p-datatable-scrollable"),t(),e(52,"td"),i(53,"Container element when scrolling is enabled."),t()(),e(54,"tr")(55,"td"),i(56,"p-datatable-resizable"),t(),e(57,"td"),i(58,"Container element when column resizing is enabled."),t()(),e(59,"tr")(60,"td"),i(61,"p-datatable-resizable-fit"),t(),e(62,"td"),i(63,"Container element when column resizing is enabled and set to fit mode."),t()(),e(64,"tr")(65,"td"),i(66,"p-column-resizer-helper"),t(),e(67,"td"),i(68,"Vertical resizer indicator bar."),t()(),e(69,"tr")(70,"td"),i(71,"p-datatable-reorderablerow-handle"),t(),e(72,"td"),i(73,"Handle element of a reorderable row."),t()(),e(74,"tr")(75,"td"),i(76,"p-datatable-reorder-indicator-up"),t(),e(77,"td"),i(78,"Up indicator to display during column reordering."),t()(),e(79,"tr")(80,"td"),i(81,"p-datatable-reorder-indicator-up"),t(),e(82,"td"),i(83,"Down indicator to display during column reordering."),t()(),e(84,"tr")(85,"td"),i(86,"p-datatable-loading-overlay"),t(),e(87,"td"),i(88,"Overlay to display when table is loading."),t()(),e(89,"tr")(90,"td"),i(91,"p-datatable-loading-icon"),t(),e(92,"td"),i(93,"Icon to display when table is loading."),t()()()()())},encapsulation:2});let n=o;return n})();var sn=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=S({type:o,selectors:[["accessibility-doc"]],decls:330,vars:0,consts:[["href","/configuration",1,""],["href","/paginator",1,""],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),t(),e(3,"p"),i(4," Default role of the table is "),e(5,"i"),i(6,"table"),t(),i(7,". Header, body and footer elements use "),e(8,"i"),i(9,"rowgroup"),t(),i(10,", rows use "),e(11,"i"),i(12,"row"),t(),i(13," role, header cells have "),e(14,"i"),i(15,"columnheader"),t(),i(16," and body cells use "),e(17,"i"),i(18,"cell"),t(),i(19," roles. Sortable headers utilizer "),e(20,"i"),i(21,"aria-sort"),t(),i(22,' attribute either set to "ascending" or "descending". '),t(),e(23,"p"),i(24,"Table rows and table cells should be specified by users using the "),e(25,"i"),i(26,"aria-posinset"),t(),i(27,", "),e(28,"i"),i(29,"aria-setsize"),t(),i(30,", "),e(31,"i"),i(32,"aria-label"),t(),i(33,", and "),e(34,"i"),i(35,"aria-describedby"),t(),i(36," attributes, as they are determined through templating."),t(),e(37,"p"),i(38," Built-in checkbox and radiobutton components for row selection use "),e(39,"i"),i(40,"checkbox"),t(),i(41," and "),e(42,"i"),i(43,"radiobutton"),t(),i(44,". The label to describe them is retrieved from the "),e(45,"i"),i(46,"aria.selectRow"),t(),i(47," and "),e(48,"i"),i(49,"aria.unselectRow"),t(),i(50," properties of the "),e(51,"a",0),i(52,"locale"),t(),i(53," API. Similarly header checkbox uses "),e(54,"i"),i(55,"selectAll"),t(),i(56," and "),e(57,"i"),i(58,"unselectAll"),t(),i(59," keys. When a row is selected, "),e(60,"i"),i(61,"aria-selected"),t(),i(62," is set to true on a row. "),t(),e(63,"p"),i(64," The element to expand or collapse a row is a "),e(65,"i"),i(66,"button"),t(),i(67," with "),e(68,"i"),i(69,"aria-expanded"),t(),i(70," and "),e(71,"i"),i(72,"aria-controls"),t(),i(73," properties. Value to describe the buttons is derived from "),e(74,"i"),i(75,"aria.expandRow"),t(),i(76," and "),e(77,"i"),i(78,"aria.collapseRow"),t(),i(79," properties of the "),e(80,"a",0),i(81,"locale"),t(),i(82," API. "),t(),e(83,"p"),i(84," The filter menu button use "),e(85,"i"),i(86,"aria.showFilterMenu"),t(),i(87," and "),e(88,"i"),i(89,"aria.hideFilterMenu"),t(),i(90," properties as "),e(91,"i"),i(92,"aria-label"),t(),i(93," in addition to the "),e(94,"i"),i(95,"aria-haspopup"),t(),i(96,", "),e(97,"i"),i(98,"aria-expanded"),t(),i(99," and "),e(100,"i"),i(101,"aria-controls"),t(),i(102," to define the relation between the button and the overlay. Popop menu has "),e(103,"i"),i(104,"dialog"),t(),i(105," role with "),e(106,"i"),i(107,"aria-modal"),t(),i(108," as focus is kept within the overlay. The operator dropdown use "),e(109,"i"),i(110,"aria.filterOperator"),t(),i(111," and filter constraints dropdown use "),e(112,"i"),i(113,"aria.filterConstraint"),t(),i(114," properties. Buttons to add rules on the other hand utilize "),e(115,"i"),i(116,"aria.addRule"),t(),i(117," and "),e(118,"i"),i(119,"aria.removeRule"),t(),i(120," properties. The footer buttons similarly use "),e(121,"i"),i(122,"aria.clear"),t(),i(123," and "),e(124,"i"),i(125,"aria.apply"),t(),i(126," properties. "),e(127,"i"),i(128,"filterInputProps"),t(),i(129," of the Column component can be used to define aria labels for the built-in filter components, if a custom component is used with templating you also may define your own aria labels as well. "),t(),e(130,"p"),i(131," Editable cells use custom templating so you need to manage aria roles and attributes manually if required. The row editor controls are button elements with "),e(132,"i"),i(133,"aria.editRow"),t(),i(134,", "),e(135,"i"),i(136,"aria.cancelEdit"),t(),i(137," and "),e(138,"i"),i(139,"aria.saveEdit"),t(),i(140," used for the "),e(141,"i"),i(142,"aria-label"),t(),i(143,". "),t(),e(144,"p"),i(145,"Paginator is a standalone component used inside the Table, refer to the "),e(146,"a",1),i(147,"paginator"),t(),i(148," for more information about the accessibility features."),t(),e(149,"h3"),i(150,"Keyboard Support"),t(),e(151,"p"),i(152,"Any button element inside the Table used for cases like filter, row expansion, edit are tabbable and can be used with "),e(153,"i"),i(154,"space"),t(),i(155," and "),e(156,"i"),i(157,"enter"),t(),i(158," keys."),t(),e(159,"h3"),i(160,"Sortable Headers Keyboard Support"),t(),e(161,"div",2)(162,"table",3)(163,"thead")(164,"tr")(165,"th"),i(166,"Key"),t(),e(167,"th"),i(168,"Function"),t()()(),e(169,"tbody")(170,"tr")(171,"td")(172,"i"),i(173,"tab"),t()(),e(174,"td"),i(175,"Moves through the headers."),t()(),e(176,"tr")(177,"td")(178,"i"),i(179,"enter"),t()(),e(180,"td"),i(181,"Sorts the column."),t()(),e(182,"tr")(183,"td")(184,"i"),i(185,"space"),t()(),e(186,"td"),i(187,"Sorts the column."),t()()()()(),e(188,"h3"),i(189,"Filter Menu Keyboard Support"),t(),e(190,"div",2)(191,"table",3)(192,"thead")(193,"tr")(194,"th"),i(195,"Key"),t(),e(196,"th"),i(197,"Function"),t()()(),e(198,"tbody")(199,"tr")(200,"td")(201,"i"),i(202,"tab"),t()(),e(203,"td"),i(204,"Moves through the elements inside the popup."),t()(),e(205,"tr")(206,"td")(207,"i"),i(208,"escape"),t()(),e(209,"td"),i(210,"Hides the popup."),t()(),e(211,"tr")(212,"td")(213,"i"),i(214,"enter"),t()(),e(215,"td"),i(216,"Opens the popup."),t()()()()(),e(217,"h3"),i(218,"Selection Keyboard Support"),t(),e(219,"div",2)(220,"table",3)(221,"thead")(222,"tr")(223,"th"),i(224,"Key"),t(),e(225,"th"),i(226,"Function"),t()()(),e(227,"tbody")(228,"tr")(229,"td")(230,"i"),i(231,"tab"),t()(),e(232,"td"),i(233,"Moves focus to the first selected row, if there is none then first row receives the focus."),t()(),e(234,"tr")(235,"td")(236,"i"),i(237,"up arrow"),t()(),e(238,"td"),i(239,"Moves focus to the previous row."),t()(),e(240,"tr")(241,"td")(242,"i"),i(243,"down arrow"),t()(),e(244,"td"),i(245,"Moves focus to the next row."),t()(),e(246,"tr")(247,"td")(248,"i"),i(249,"enter"),t()(),e(250,"td"),i(251,"Toggles the selected state of the focused row depending on the metaKeySelection setting."),t()(),e(252,"tr")(253,"td")(254,"i"),i(255,"space"),t()(),e(256,"td"),i(257,"Toggles the selected state of the focused row depending on the metaKeySelection setting."),t()(),e(258,"tr")(259,"td")(260,"i"),i(261,"home"),t()(),e(262,"td"),i(263,"Moves focus to the first row."),t()(),e(264,"tr")(265,"td")(266,"i"),i(267,"end"),t()(),e(268,"td"),i(269,"Moves focus to the last row."),t()(),e(270,"tr")(271,"td")(272,"i"),i(273,"shift"),t(),i(274," + "),e(275,"i"),i(276,"down arrow"),t()(),e(277,"td"),i(278,"Moves focus to the next row and toggles the selection state."),t()(),e(279,"tr")(280,"td")(281,"i"),i(282,"shift"),t(),i(283," + "),e(284,"i"),i(285,"up arrow"),t()(),e(286,"td"),i(287,"Moves focus to the previous row and toggles the selection state."),t()(),e(288,"tr")(289,"td")(290,"i"),i(291,"shift"),t(),i(292," + "),e(293,"i"),i(294,"space"),t()(),e(295,"td"),i(296,"Selects the rows between the most recently selected row and the focused row."),t()(),e(297,"tr")(298,"td")(299,"i"),i(300,"control"),t(),i(301," + "),e(302,"i"),i(303,"shift"),t(),i(304," + "),e(305,"i"),i(306,"home"),t()(),e(307,"td"),i(308,"Selects the focused rows and all the options up to the first one."),t()(),e(309,"tr")(310,"td")(311,"i"),i(312,"control"),t(),i(313," + "),e(314,"i"),i(315,"shift"),t(),i(316," + "),e(317,"i"),i(318,"end"),t()(),e(319,"td"),i(320,"Selects the focused rows and all the options down to the last one."),t()(),e(321,"tr")(322,"td")(323,"i"),i(324,"control"),t(),i(325," + "),e(326,"i"),i(327,"a"),t()(),e(328,"td"),i(329,"Selects all rows."),t()()()()()())},dependencies:[T],encapsulation:2});let n=o;return n})();var lc=()=>({"min-width":"50rem"}),cc=()=>[10,25,50];function pc(n,o){n&1&&(e(0,"tr")(1,"th",8),i(2,"Name"),t(),e(3,"th",8),i(4,"Country"),t(),e(5,"th",8),i(6,"Company"),t(),e(7,"th",8),i(8,"Representative"),t()())}function sc(n,o){if(n&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),t(),e(5,"td"),i(6),t(),e(7,"td"),i(8),t()()),n&2){let a=o.$implicit;p(2),d(a.name),p(2),d(a.country.name),p(2),d(a.company),p(2),d(a.representative.name)}}function mc(n,o){n&1&&m(0,"p-button",9)}function dc(n,o){n&1&&m(0,"p-button",10)}var mn=(()=>{let o=class o{constructor(l,r){this.customerService=l,this.cd=r,this.code={basic:`<p-table
    [value]="customers"
    [paginator]="true"
    [rows]="5"
    [showCurrentPageReport]="true"
    [tableStyle]="{ 'min-width': '50rem' }"
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
    [rowsPerPageOptions]="[10, 25, 50]"
    paginatorLocale="fa-IR"
>
    <ng-template pTemplate="header">
        <tr>
            <th style="width:25%">Name</th>
            <th style="width:25%">Country</th>
            <th style="width:25%">Company</th>
            <th style="width:25%">Representative</th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-customer>
        <tr>
            <td>{{ customer.name }}</td>
            <td>{{ customer.country.name }}</td>
            <td>{{ customer.company }}</td>
            <td>{{ customer.representative.name }}</td>
        </tr>
    </ng-template>
    <ng-template pTemplate="paginatorleft">
        <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
    </ng-template>
    <ng-template pTemplate="paginatorright">
        <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
    </ng-template>
</p-table>`,html:`
<div class="card">
    <p-table
        [value]="customers"
        [paginator]="true"
        [rows]="5"
        [showCurrentPageReport]="true"
        [tableStyle]="{ 'min-width': '50rem' }"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        [rowsPerPageOptions]="[10, 25, 50]"
        paginatorLocale="fa-IR"
    >
        <ng-template pTemplate="header">
            <tr>
                <th style="width:25%">Name</th>
                <th style="width:25%">Country</th>
                <th style="width:25%">Company</th>
                <th style="width:25%">Representative</th>
            </tr>
        </ng-template>
        <ng-template pTemplate="body" let-customer>
            <tr>
                <td>{{ customer.name }}</td>
                <td>{{ customer.country.name }}</td>
                <td>{{ customer.company }}</td>
                <td>{{ customer.representative.name }}</td>
            </tr>
        </ng-template>
        <ng-template pTemplate="paginatorleft">
            <p-button type="button" icon="pi pi-plus" styleClass="p-button-text"></p-button>
        </ng-template>
        <ng-template pTemplate="paginatorright">
            <p-button type="button" icon="pi pi-cloud" styleClass="p-button-text"></p-button>
        </ng-template>
    </p-table>
</div>`,typescript:`
import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
    selector: 'table-paginator-locale-demo',
    templateUrl: 'table-paginator-locale-demo.html'
})
export class TablePaginatorLocaleDemo {
    customers!: Customer[];

    constructor(private customerService: CustomerService) {}

    ngOnInit() {
        this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
    }
}`,data:`{
    id: 1000,
    name: 'James Butt',
    country: {
        name: 'Algeria',
        code: 'dz'
    },
    company: 'Benton, John B Jr',
    date: '2015-09-13',
    status: 'unqualified',
    verified: true,
    activity: 17,
    representative: {
        name: 'Ioni Bowcher',
        image: 'ionibowcher.png'
    },
    balance: 70663
},
...`,service:["CustomerService"]},this.extFiles=[{path:"src/domain/customer.ts",content:`
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Customer {
    id?: number;
    name?: string;
    country?: Country;
    company?: string;
    date?: string | Date;
    status?: string;
    activity?: number;
    representative?: Representative;
    verified?: boolean;
    balance?: number;
}`}]}loadDemoData(){this.customerService.getCustomersLarge().then(l=>{this.customers=l,this.cd.markForCheck()})}};o.\u0275fac=function(r){return new(r||o)(u(j),u(D))},o.\u0275cmp=S({type:o,selectors:[["paginator-locale-doc"]],decls:14,vars:10,consts:[[3,"load"],[1,"card"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","paginatorLocale","fa-IR",3,"value","paginator","rows","showCurrentPageReport","tableStyle","rowsPerPageOptions"],["pTemplate","header"],["pTemplate","body"],["pTemplate","paginatorleft"],["pTemplate","paginatorright"],["selector","table-paginator-locale-demo",3,"code","extFiles"],[2,"width","25%"],["type","button","icon","pi pi-plus","styleClass","p-button-text"],["type","button","icon","pi pi-cloud","styleClass","p-button-text"]],template:function(r,c){r&1&&(e(0,"app-docsectiontext")(1,"p"),i(2,"paginator localization information such as page numbers and rows per page options are defined with the "),e(3,"i"),i(4,"paginatorLocale"),t(),i(5," property which defaults to the user locale."),t()(),e(6,"p-deferred-demo",0),h("load",function(){return c.loadDemoData()}),e(7,"div",1)(8,"p-table",2),g(9,pc,9,0,"ng-template",3)(10,sc,9,4,"ng-template",4)(11,mc,1,0,"ng-template",5)(12,dc,1,0,"ng-template",6),t()()(),m(13,"app-code",7)),r&2&&(p(8),s("value",c.customers)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("tableStyle",b(8,lc))("rowsPerPageOptions",b(9,cc)),p(5),s("code",c.code)("extFiles",c.extFiles))},dependencies:[w,_,ye,x,T,C],encapsulation:2,changeDetection:0});let n=o;return n})();var uc=()=>["Table"],dn=(()=>{let o=class o{constructor(){this.docs=[{id:"import-demo",label:"Import",component:Ri},{id:"basic",label:"Basic",component:si},{id:"dynamic",label:"Dynamic Columns",component:xi},{id:"template",label:"Template",component:nn},{id:"size",label:"Size",component:Ji},{id:"gridlines",label:"Grid Lines",component:Mi},{id:"striped",label:"Striped Rows",component:Zi},{id:"table-style",label:"Style",component:en},{id:"responsive",label:"Responsive",children:[{id:"responsive-scroll",label:"Scroll",component:ji},{id:"responsive-stack",label:"Stack",component:Ki}]},{id:"paginator",label:"Paginator",children:[{id:"paginator-basic",label:"Basic",component:Ai},{id:"paginator-locale",label:"Locale",component:mn},{id:"paginator-programmatic",label:"Programmatic",component:Ni}]},{id:"sort",label:"Sort",children:[{id:"single-column-sort",label:"Single Column",component:$i},{id:"multiple-column-sort",label:"Multiple Column",component:Gi},{id:"custom-sort",label:"Custom Sort",component:Si}]},{id:"filter",label:"Filter",children:[{id:"filter-menu",label:"Filter Menu",component:Di},{id:"filter-row",label:"Filter Row",component:Ei}]},{id:"row-selection",label:"Row Selection",children:[{id:"single-selection",label:"Single Selection",component:Qi},{id:"multiple-selection",label:"Multiple Selection",component:Oi},{id:"checkbox-selection",label:"Checkbox Selection",component:di},{id:"radio-button-selection",label:"Radio Button Selection",component:qi},{id:"controlled-selection",label:"Controlled Selection",component:vi},{id:"page-only-selection",label:"Page Only Selection",component:zi},{id:"selection-events",label:"Events",component:cn}]},{id:"column-selection",label:"Column Selection",component:fi},{id:"row-expand",label:"Row Expand",component:Yi},{id:"Edit",label:"Edit",children:[{id:"row-edit",label:"Row Edit",component:Wi},{id:"cell-edit",label:"Cell Edit",component:mi}]},{id:"lazy-load",label:"Lazy Load",component:Bi},{id:"scroll",label:"Scroll",children:[{id:"vertical-scroll",label:"Vertical Scroll",component:on},{id:"horizontal-and-vertical-scroll",label:"Horizontal and Vertical Scroll",component:ki},{id:"flex-scroll",label:"Flex Scroll",component:Ii},{id:"frozen-rows",label:"Frozen Rows",component:Fi},{id:"frozen-columns",label:"Frozen Columns",component:Pi}]},{id:"virtual-scroll",label:"Virtual Scroll",children:[{id:"virtual-scroll-basic",label:"Preload",component:an},{id:"virtual-scroll-lazy",label:"Lazy",component:rn}]},{id:"column-group",label:"Column Group",component:ui},{id:"row-group",label:"Row Group",children:[{id:"subheader",label:"Subheader",component:tn},{id:"expand",label:"Expandable",component:Ci},{id:"row-span",label:"RowSpan",component:Hi}]},{id:"column-resize",label:"Column Resize",children:[{id:"fit-mode",label:"Fit Mode",component:ln},{id:"expand-mode",label:"Expand Mode",component:gi},{id:"scrollable",label:"Scrollable",component:hi}]},{id:"reorder",label:"Reorder",component:Ui},{id:"column-toggle",label:"Column Toggle",component:yi},{id:"export",label:"Export",component:Ti},{id:"context-menu",label:"Context Menu",component:pi},{id:"stateful",label:"Stateful",component:Xi},{id:"samples",label:"Samples",children:[{id:"customers",label:"Customers",component:bi},{id:"products",label:"Products",component:Li}]},{id:"styling",label:"Styling",component:pn},{id:"accessibility",label:"Accessibility",component:sn}]}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=S({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Table Component","header","Table","description","Table displays data in tabular format.",3,"docs","apiDocs"]],template:function(r,c){r&1&&m(0,"app-doc",0),r&2&&s("docs",c.docs)("apiDocs",b(2,uc))},dependencies:[jt],styles:["[_nghost-%COMP%]     .p-paginator .p-paginator-current{margin-left:auto}[_nghost-%COMP%]     .p-progressbar{height:.5rem;background-color:#d8dadc}[_nghost-%COMP%]     .p-progressbar .p-progressbar-value{background-color:#607d8b}[_nghost-%COMP%]     .table-header{display:flex;justify-content:space-between}[_nghost-%COMP%]     .p-calendar .p-datepicker{min-width:25rem}[_nghost-%COMP%]     .p-calendar .p-datepicker td{font-weight:400}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-header{padding:1rem;text-align:left;font-size:1.5rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-paginator{padding:1rem}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th{text-align:left}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{cursor:auto}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-dropdown-label:not(.p-placeholder){text-transform:uppercase}[_nghost-%COMP%]     .p-w-100{width:100%}[_nghost-%COMP%]     .p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{display:none}@media screen and (max-width: 960px){[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-thead>tr>th, [_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tfoot>tr>td{display:none!important}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr{border-bottom:1px solid var(--layer-2)}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td{text-align:left;width:100%;display:flex;align-items:center;border:0 none}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td .p-column-title{min-width:30%;display:inline-block;font-weight:700}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td p-progressbar{width:100%}[_nghost-%COMP%]     .p-datatable.p-datatable-customers .p-datatable-tbody>tr>td:last-child{border-bottom:1px solid var(--surface-d)}}"]});let n=o;return n})();var un=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=Ee({type:o}),o.\u0275inj=De({imports:[Ze.forChild([{path:"",component:dn}]),Ze]});let n=o;return n})();var gn=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=Ee({type:o}),o.\u0275inj=De({imports:[Ve,st,Lt,ut,Dt,Qt,Wt,ti,$t,ft,dt,qt,Yt,yt,xt,bt,ei,Et,ht,_t,li,Xt,ci,ai,Gt,ni,Tt,Ut,et,C,et]});let n=o;return n})();var yu=(()=>{let o=class o{};o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=Ee({type:o}),o.\u0275inj=De({imports:[Ve,un,gn]});let n=o;return n})();export{yu as TableDemoModule};
