import{a as v,b as ce}from"./chunk-IYXFLF6T.js";import{a as R,b as re}from"./chunk-HYN6KKXN.js";import"./chunk-63PLGKGD.js";import{a as ae,b as de}from"./chunk-DWVF3PYJ.js";import"./chunk-UEO6IQ7K.js";import{a as ie,b as oe}from"./chunk-WW43CASL.js";import{a as g}from"./chunk-NYXQLOFS.js";import"./chunk-G7VICPVK.js";import"./chunk-KL3QZRIM.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-RJKOGX2L.js";import"./chunk-KPYNJB2H.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-UFISP26C.js";import"./chunk-XSSXK7EZ.js";import{a as f,b as le,c as U}from"./chunk-AS5FXEGH.js";import{a as h,b as ne}from"./chunk-X2ZDE2AM.js";import{e as $,i as J,p as Q}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as te,k as T,q as Y,t as Z,y as ee}from"./chunk-UWMVDULA.js";import{o as X,t as H}from"./chunk-N5X6XDRN.js";import{Ib as G,Jb as e,Kb as L,Na as P,Nb as D,Nc as z,Ob as E,Pb as k,Qb as M,Sa as c,Sb as j,Ta as u,V as F,da as m,ea as I,ib as V,kb as d,kc as O,ma as K,na as B,rb as o,sb as i,tb as s,xb as q,yb as N}from"./chunk-ZJD4PHQZ.js";import{a as A}from"./chunk-P2VZOJAX.js";var se=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=m({type:t,selectors:[["accessibility-doc"]],decls:109,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),o(3,"p"),e(4," Value to describe the component can either be provided with "),o(5,"i"),e(6,"aria-labelledby"),i(),e(7," or "),o(8,"i"),e(9,"aria-label"),i(),e(10," props. The root list element has a "),o(11,"i"),e(12,"tree"),i(),e(13," role whereas each list item has a "),o(14,"i"),e(15,"treeitem"),i(),e(16," role along with "),o(17,"i"),e(18,"aria-label"),i(),e(19,", "),o(20,"i"),e(21,"aria-selected"),i(),e(22," and "),o(23,"i"),e(24,"aria-expanded"),i(),e(25," attributes. In checkbox selection, "),o(26,"i"),e(27,"aria-checked"),i(),e(28," is used instead of "),o(29,"i"),e(30,"aria-selected"),i(),e(31,". The container element of a treenode has the "),o(32,"i"),e(33,"group"),i(),e(34," role. Checkbox and toggle icons are hidden from screen readers as their parent element with "),o(35,"i"),e(36,"treeitem"),i(),e(37," role and attributes are used instead for readers and keyboard support. The "),o(38,"i"),e(39,"aria-setsize"),i(),e(40,", "),o(41,"i"),e(42,"aria-posinset"),i(),e(43," and "),o(44,"i"),e(45,"aria-level"),i(),e(46," attributes are calculated implicitly and added to each treeitem. "),i(),o(47,"h3"),e(48,"Keyboard Support"),i(),o(49,"div",0)(50,"table",1)(51,"thead")(52,"tr")(53,"th"),e(54,"Key"),i(),o(55,"th"),e(56,"Function"),i()()(),o(57,"tbody")(58,"tr")(59,"td")(60,"i"),e(61,"tab"),i()(),o(62,"td"),e(63," Moves focus to the first selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the next focusable element in the page tab sequence. "),i()(),o(64,"tr")(65,"td")(66,"i"),e(67,"shift"),i(),e(68," + "),o(69,"i"),e(70,"tab"),i()(),o(71,"td"),e(72," Moves focus to the last selected node when focus enters the component, if there is none then first element receives the focus. If focus is already inside the component, moves focus to the previous focusable element in the page tab sequence. "),i()(),o(73,"tr")(74,"td")(75,"i"),e(76,"enter"),i()(),o(77,"td"),e(78,"Selects the focused treenode."),i()(),o(79,"tr")(80,"td")(81,"i"),e(82,"space"),i()(),o(83,"td"),e(84,"Selects the focused treenode."),i()(),o(85,"tr")(86,"td")(87,"i"),e(88,"down arrow"),i()(),o(89,"td"),e(90,"Moves focus to the next treenode."),i()(),o(91,"tr")(92,"td")(93,"i"),e(94,"up arrow"),i()(),o(95,"td"),e(96,"Moves focus to the previous treenode."),i()(),o(97,"tr")(98,"td")(99,"i"),e(100,"right arrow"),i()(),o(101,"td"),e(102,"If node is closed, opens the node otherwise moves focus to the first child node."),i()(),o(103,"tr")(104,"td")(105,"i"),e(106,"left arrow"),i()(),o(107,"td"),e(108,"If node is open, closes the node otherwise moves focus to the parent node."),i()()()()()())},dependencies:[f],encapsulation:2});let r=t;return r})();var pe=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:'<p-tree class="w-full md:w-30rem" [value]="files"></p-tree>',html:`
<div class="card flex justify-content-center">
    <p-tree class="w-full md:w-30rem" [value]="files"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-basic-demo',
    templateUrl: './tree-basic-demo.html'
})
export class TreeBasicDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    } 
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"w-full","md:w-30rem",3,"value"],["selector","tree-basic-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Tree component requires an array of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," objects as its "),o(6,"i"),e(7,"value"),i(),e(8,"."),i()(),o(9,"div",0),s(10,"p-tree",1),i(),s(11,"app-code",2)),l&2&&(c(10),d("value",a.files),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var me=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:'<p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles"></p-tree>',html:`
<div class="card flex flex-column align-items-center justify-content-center">
    <p-tree [value]="files" selectionMode="checkbox" class="w-full md:w-30rem" [(selection)]="selectedFiles"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-checkbox-demo',
    templateUrl: './tree-checkbox-demo.html'
})
export class TreeCheckboxDemo implements OnInit {
    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["checkbox-doc"]],decls:12,vars:3,consts:[[1,"card","flex","flex-column","align-items-center","justify-content-center"],["selectionMode","checkbox",1,"w-full","md:w-30rem",3,"selectionChange","value","selection"],["selector","tree-checkbox-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Selection of multiple nodes via checkboxes is enabled by configuring "),o(3,"i"),e(4,"selectionMode"),i(),e(5," as "),o(6,"i"),e(7,"checkbox"),i(),e(8,"."),i()(),o(9,"div",0)(10,"p-tree",1),k("selectionChange",function(p){return E(a.selectedFiles,p)||(a.selectedFiles=p),p}),i()(),s(11,"app-code",2)),l&2&&(c(10),d("value",a.files),D("selection",a.selectedFiles),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var fe=(()=>{let t=class t{constructor(n,l){this.nodeService=n,this.messageService=l,this.code={basic:`<p-tree class="w-full md:w-30rem" [value]="files" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm"></p-tree>
<p-contextMenu #cm [model]="items"></p-contextMenu>
<p-toast></p-toast>`,html:`
<div class="card flex justify-content-center">
    <p-tree class="w-full md:w-30rem" [value]="files" selectionMode="single" [(selection)]="selectedFile" [contextMenu]="cm"></p-tree>
    <p-contextMenu #cm [model]="items"></p-contextMenu>
    <p-toast></p-toast>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-context-menu-demo',
    templateUrl: './tree-context-menu-demo.html',
    providers:[MessageService]
})
export class TreeContextMenuDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode | null;

    items!: MenuItem[];

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((files) => (this.files = files));

        this.items = [
            { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile) },
            { label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile() }
        ];
    }

    viewFile(file: TreeNode) {
        this.messageService.add({ severity: 'info', summary: 'Node Details', detail: file.label });
    }

    unselectFile() {
        this.selectedFile = null;
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n),this.items=[{label:"View",icon:"pi pi-search",command:n=>this.viewFile(this.selectedFile)},{label:"Unselect",icon:"pi pi-times",command:n=>this.unselectFile()}]}viewFile(n){this.messageService.add({severity:"info",summary:"Node Details",detail:n.label})}unselectFile(){this.selectedFile=null}};t.\u0275fac=function(l){return new(l||t)(u(g),u(T))},t.\u0275cmp=m({type:t,selectors:[["context-menu-doc"]],features:[M([T])],decls:12,vars:5,consts:[["cm",""],[1,"card","flex","justify-content-center"],["selectionMode","single",1,"w-full","md:w-30rem",3,"selectionChange","value","selection","contextMenu"],[3,"model"],["selector","tree-context-menu-demo",3,"code"]],template:function(l,a){if(l&1){let y=q();o(0,"app-docsectiontext")(1,"p"),e(2,"Tree requires a collection of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," instances as a value."),i()(),o(6,"div",1)(7,"p-tree",2),k("selectionChange",function(W){return K(y),E(a.selectedFile,W)||(a.selectedFile=W),B(W)}),i(),s(8,"p-contextMenu",3,0)(10,"p-toast"),i(),s(11,"app-code",4)}if(l&2){let y=G(9);c(7),d("value",a.files),D("selection",a.selectedFile),d("contextMenu",y),c(),d("model",a.items),c(3),d("code",a.code)}},dependencies:[h,f,v,R,ae],encapsulation:2});let r=t;return r})();var ue=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:`<div class="mb-3">
    <button pButton type="button" label="Expand all" (click)="expandAll()" class="mr-2"></button>
    <button pButton type="button" label="Collapse all" (click)="collapseAll()"></button>
</div>
<p-tree [value]="files" class="w-full md:w-30rem"></p-tree>`,html:`
<div class="card flex flex-column align-items-center justify-content-center">
    <div class="mb-3">
        <button pButton type="button" label="Expand all" (click)="expandAll()" class="mr-2"></button>
        <button pButton type="button" label="Collapse all" (click)="collapseAll()"></button>
    </div>
    <p-tree [value]="files" class="w-full md:w-30rem"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-controlled-demo',
    templateUrl: './tree-controlled-demo.html'
})
export class TreeControlledDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    expandAll() {
        this.files.forEach((node) => {
            this.expandRecursive(node, true);
        });
    }

    collapseAll() {
        this.files.forEach((node) => {
            this.expandRecursive(node, false);
        });
    }

    private expandRecursive(node: TreeNode, isExpand: boolean) {
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach((childNode) => {
                this.expandRecursive(childNode, isExpand);
            });
        }
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}expandAll(){this.files.forEach(n=>{this.expandRecursive(n,!0)})}collapseAll(){this.files.forEach(n=>{this.expandRecursive(n,!1)})}expandRecursive(n,l){n.expanded=l,n.children&&n.children.forEach(a=>{this.expandRecursive(a,l)})}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["controlled-doc"]],decls:15,vars:2,consts:[[1,"card","flex","flex-column","align-items-center","justify-content-center"],[1,"mb-3"],["pButton","","type","button","icon","pi pi-plus","label","Expand all",1,"mr-2",3,"click"],["pButton","","type","button","icon","pi pi-minus","label","Collapse all",3,"click"],[1,"w-full","md:w-30rem",3,"value"],["selector","tree-controlled-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Tree requires a collection of "),o(3,"i"),e(4,"TreeNode"),i(),e(5," instances as a "),o(6,"i"),e(7,"value"),i(),e(8,"."),i()(),o(9,"div",0)(10,"div",1)(11,"button",2),N("click",function(){return a.expandAll()}),i(),o(12,"button",3),N("click",function(){return a.collapseAll()}),i()(),s(13,"p-tree",4),i(),s(14,"app-code",5)),l&2&&(c(13),d("value",a.files),c(),d("code",a.code))},dependencies:[h,f,v,ee],encapsulation:2});let r=t;return r})();var he=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:'<p-tree class="w-full md:w-30rem" [value]="files" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self"></p-tree>',html:`
<div class="card flex justify-content-center">
    <p-tree class="w-full md:w-30rem" [value]="files" [draggableNodes]="true" [droppableNodes]="true" draggableScope="self" droppableScope="self"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeDragDropService, TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-drag-drop-demo',
    templateUrl: './tree-drag-drop-demo.html',
    providers: [TreeDragDropService]
})
export class TreeDragDropDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["drag-drop-doc"]],features:[M([Z])],decls:6,vars:4,consts:[[1,"card","flex","justify-content-center"],["draggableScope","self","droppableScope","self",1,"w-full","md:w-30rem",3,"value","draggableNodes","droppableNodes"],["selector","tree-drag-drop-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Nodes can be reordered within the same tree and also can be transferred between other trees using drag&drop."),i()(),o(3,"div",0),s(4,"p-tree",1),i(),s(5,"app-code",2)),l&2&&(c(4),d("value",a.files)("draggableNodes",!0)("droppableNodes",!0),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var ve=(()=>{let t=class t{constructor(n,l){this.nodeService=n,this.messageService=l,this.code={basic:`<p-tree [value]="files" class="w-full md:w-30rem" selectionMode="single" [(selection)]="selectedFile"
    (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)"(onNodeUnselect)="nodeUnselect($event)"></p-tree>`,html:`
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-tree [value]="files" class="w-full md:w-30rem" selectionMode="single" [(selection)]="selectedFile"
        (onNodeExpand)="nodeExpand($event)" (onNodeCollapse)="nodeCollapse($event)" (onNodeSelect)="nodeSelect($event)"(onNodeUnselect)="nodeUnselect($event)"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-events-demo',
    templateUrl: './tree-events-demo.html',
    providers: [MessageService]
})
export class TreeEventsDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode;

    constructor(private nodeService: NodeService, private messageService: MessageService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }

    nodeExpand(event: any) {
        this.messageService.add({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
    }

    nodeCollapse(event: any) {
        this.messageService.add({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
    }

    nodeSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    nodeUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}nodeExpand(n){this.messageService.add({severity:"success",summary:"Node Expanded",detail:n.node.label})}nodeCollapse(n){this.messageService.add({severity:"warn",summary:"Node Collapsed",detail:n.node.label})}nodeSelect(n){this.messageService.add({severity:"info",summary:"Node Selected",detail:n.node.label})}nodeUnselect(n){this.messageService.add({severity:"info",summary:"Node Unselected",detail:n.node.label})}};t.\u0275fac=function(l){return new(l||t)(u(g),u(T))},t.\u0275cmp=m({type:t,selectors:[["event-doc"]],features:[M([T])],decls:7,vars:3,consts:[[1,"card","flex","justify-content-center"],["selectionMode","single",1,"w-full","md:w-30rem",3,"selectionChange","onNodeExpand","onNodeCollapse","onNodeSelect","onNodeUnselect","value","selection"],["selector","tree-events-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"An event is provided for each type of user interaction such as expand, collapse and selection."),i()(),o(3,"div",0),s(4,"p-toast"),o(5,"p-tree",1),k("selectionChange",function(p){return E(a.selectedFile,p)||(a.selectedFile=p),p}),N("onNodeExpand",function(p){return a.nodeExpand(p)})("onNodeCollapse",function(p){return a.nodeCollapse(p)})("onNodeSelect",function(p){return a.nodeSelect(p)})("onNodeUnselect",function(p){return a.nodeUnselect(p)}),i()(),s(6,"app-code",2)),l&2&&(c(5),d("value",a.files),D("selection",a.selectedFile),c(),d("code",a.code))},dependencies:[h,f,v,R],encapsulation:2});let r=t;return r})();var ye=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:`<p-tree [value]="files" class="w-full md:w-30rem" [filter]="true" filterPlaceholder="Lenient Filter"></p-tree>
<p-tree [value]="files" class="w-full md:w-30rem" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter"></p-tree>`,html:`
<div class="card flex flex-wrap justify-content-center gap-5">
    <p-tree [value]="files" class="w-full md:w-30rem" [filter]="true" filterPlaceholder="Lenient Filter"></p-tree>
    <p-tree [value]="files" class="w-full md:w-30rem" [filter]="true" filterMode="strict" filterPlaceholder="Strict Filter"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-filter-demo',
    templateUrl: './tree-filter-demo.html'
})
export class TreeFilterDemo implements OnInit {
    files!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    } 
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["filter-doc"]],decls:22,vars:5,consts:[[1,"card","flex","flex-wrap","justify-content-center","gap-5"],["filterPlaceholder","Lenient Filter",1,"w-full","md:w-30rem",3,"value","filter"],["filterMode","strict","filterPlaceholder","Strict Filter",1,"w-full","md:w-30rem",3,"value","filter"],["selector","tree-filter-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Filtering is enabled by adding the "),o(3,"i"),e(4,"filter"),i(),e(5," property, by default label property of a node is used to compare against the value in the text field, in order to customize which field(s) should be used during search define "),o(6,"i"),e(7,"filterBy"),i(),e(8," property. In addition "),o(9,"i"),e(10,"filterMode"),i(),e(11," specifies the filtering strategy. In "),o(12,"i"),e(13,"lenient"),i(),e(14," mode when the query matches a node, children of the node are not searched further as all descendants of the node are included. On the other hand, in "),o(15,"i"),e(16,"strict"),i(),e(17," mode when the query matches a node, filtering continues on all descendants. "),i()(),o(18,"div",0),s(19,"p-tree",1)(20,"p-tree",2),i(),s(21,"app-code",3)),l&2&&(c(19),d("value",a.files)("filter",!0),c(),d("value",a.files)("filter",!0),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var ge=(()=>{let t=class t{constructor(){this.code={typescript:"import { TreeModule } from 'primeng/tree';"}}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=m({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,a){l&1&&s(0,"app-code",0),l&2&&d("code",a.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let r=t;return r})();var Se=(()=>{let t=class t{constructor(n){this.cd=n,this.loading=!1,this.code={basic:'<p-tree class="w-full md:w-30rem" [value]="nodes" [filter]="true" (onNodeExpand)="nodeExpand($event)" [loading]="loading"></p-tree>',html:`
<div class="card flex justify-content-center">
    <p-tree class="w-full md:w-30rem" [value]="nodes" [filter]="true" (onNodeExpand)="nodeExpand($event)" [loading]="loading"></p-tree>
</div>`,typescript:`import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'tree-lazy-demo',
    templateUrl: './tree-lazy-demo.html'
})
export class TreeLazyDemo implements OnInit {
    loading: boolean = false;

    nodes!: TreeNode[];

    constructor(private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.loading = true;
        setTimeout(() => {
            this.nodes = this.initiateNodes();
            this.loading = false;
            this.cd.markForCheck();
        }, 2000);
    }

    initiateNodes(): TreeNode[] {
        return [
            {
                key: '0',
                label: 'Node 0',
                leaf: false
            },
            {
                key: '1',
                label: 'Node 1',
                leaf: false
            },
            {
                key: '2',
                label: 'Node 2',
                leaf: false
            }
        ];
    }

    nodeExpand(event: any) {
        if (!event.node.children) {
            this.loading = true;
            setTimeout(() => {
                event.node.children = [];
                for (let i = 0; i < 3; i++) {
                    event.node.children.push({
                        key: event.node.key + '-' + i,
                        label: 'Node ' + event.node.key + '-' + i,
                        leaf: false
                    });
                }
                this.loading = false;
                this.cd.markForCheck();
            }, 500);
        }
    }
}`,data:`{
    key: '0',
    label: 'Node 0',
    leaf: false
},
...`}}ngOnInit(){this.loading=!0,setTimeout(()=>{this.nodes=this.initiateNodes(),this.loading=!1,this.cd.markForCheck()},2e3)}initiateNodes(){return[{key:"0",label:"Node 0",leaf:!1},{key:"1",label:"Node 1",leaf:!1},{key:"2",label:"Node 2",leaf:!1}]}nodeExpand(n){n.node.children||(this.loading=!0,setTimeout(()=>{n.node.children=[];for(let l=0;l<3;l++)n.node.children.push({key:n.node.key+"-"+l,label:"Node "+n.node.key+"-"+l,leaf:!1});this.loading=!1,this.cd.markForCheck()},500))}};t.\u0275fac=function(l){return new(l||t)(u(O))},t.\u0275cmp=m({type:t,selectors:[["lazy-demo"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],[1,"w-full","md:w-30rem",3,"onNodeExpand","value","filter","loading"],["selector","tree-lazy-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Lazy loading is useful when dealing with huge datasets, in this example nodes are dynamically loaded on demand using "),o(3,"i"),e(4,"loading"),i(),e(5," property and "),o(6,"i"),e(7,"onNodeExpand"),i(),e(8," method."),i()(),o(9,"div",0)(10,"p-tree",1),N("onNodeExpand",function(p){return a.nodeExpand(p)}),i()(),s(11,"app-code",2)),l&2&&(c(10),d("value",a.nodes)("filter",!0)("loading",a.loading),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var xe=(()=>{let t=class t{constructor(n){this.nodeService=n,this.metaKeySelection=!1,this.code={basic:`<div class="flex align-items-center mb-4 gap-2">
    <p-inputSwitch inputId="input-metakey" [(ngModel)]="metaKeySelection"></p-inputSwitch>
    <label for="input-metakey">MetaKey</label>
</div>
<p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-30rem" selectionMode="multiple" [(selection)]="selectedFiles"></p-tree>`,html:`
<div class="card flex flex-column align-items-center justify-content-center">
    <div class="flex align-items-center mb-4 gap-2">
        <p-inputSwitch inputId="input-metakey" [(ngModel)]="metaKeySelection"></p-inputSwitch>
        <label for="input-metakey">MetaKey</label>
    </div>
    <p-tree [metaKeySelection]="metaKeySelection" [value]="files" class="w-full md:w-30rem" selectionMode="multiple" [(selection)]="selectedFiles"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-multiple-demo',
    templateUrl: './tree-multiple-demo.html'
})
export class TreeMultipleDemo implements OnInit {
    metaKeySelection: boolean = false;

    files!: TreeNode[];

    selectedFiles!: TreeNode[];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["multiple-doc"]],decls:24,vars:5,consts:[[1,"card","flex","flex-column","align-items-center","justify-content-center"],[1,"flex","align-items-center","mb-4","gap-2"],["inputId","input-metakey",3,"ngModelChange","ngModel"],["for","input-metakey"],["selectionMode","multiple",1,"w-full","md:w-30rem",3,"selectionChange","metaKeySelection","value","selection"],["selector","tree-multiple-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," More than one node is selectable by setting "),o(3,"i"),e(4,"selectionMode"),i(),e(5," to "),o(6,"i"),e(7,"multiple"),i(),e(8,". By default in multiple selection mode, metaKey press (e.g. "),o(9,"i"),e(10,"\u2318"),i(),e(11,") is necessary to add to existing selections however this can be configured with disabling the "),o(12,"i"),e(13,"metaKeySelection"),i(),e(14," property. Note that in touch enabled devices, Tree always ignores metaKey. "),i(),o(15,"p"),e(16,"In multiple selection mode, value binding should be a key-value pair where key is the node key and value is a boolean to indicate selection."),i()(),o(17,"div",0)(18,"div",1)(19,"p-inputSwitch",2),k("ngModelChange",function(p){return E(a.metaKeySelection,p)||(a.metaKeySelection=p),p}),i(),o(20,"label",3),e(21,"MetaKey"),i()(),o(22,"p-tree",4),k("selectionChange",function(p){return E(a.selectedFiles,p)||(a.selectedFiles=p),p}),i()(),s(23,"app-code",5)),l&2&&(c(19),D("ngModel",a.metaKeySelection),c(3),d("metaKeySelection",a.metaKeySelection)("value",a.files),D("selection",a.selectedFiles),c(),d("code",a.code))},dependencies:[h,f,v,ie,$,J],encapsulation:2});let r=t;return r})();var be=(()=>{let t=class t{constructor(n){this.nodeService=n,this.code={basic:'<p-tree [value]="files" class="w-full md:w-30rem" selectionMode="single" [(selection)]="selectedFile"></p-tree>',html:`
<div class="card flex justify-content-center">
    <p-tree [value]="files" class="w-full md:w-30rem" selectionMode="single" [(selection)]="selectedFile"></p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-single-demo',
    templateUrl: './tree-single-demo.html'
})
export class TreeSingleDemo implements OnInit {
    files!: TreeNode[];

    selectedFile!: TreeNode;
    
    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => (this.files = data));
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>this.files=n)}};t.\u0275fac=function(l){return new(l||t)(u(g))},t.\u0275cmp=m({type:t,selectors:[["single-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-content-center"],["selectionMode","single",1,"w-full","md:w-30rem",3,"selectionChange","value","selection"],["selector","tree-single-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Single node selection is configured by setting "),o(3,"i"),e(4,"selectionMode"),i(),e(5," as "),o(6,"i"),e(7,"single"),i(),e(8," along with "),o(9,"i"),e(10,"selection"),i(),e(11," properties to manage the selection value binding."),i()(),o(12,"div",0)(13,"p-tree",1),k("selectionChange",function(p){return E(a.selectedFile,p)||(a.selectedFile=p),p}),i()(),s(14,"app-code",2)),l&2&&(c(13),d("value",a.files),D("selection",a.selectedFile),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var Me=()=>["/theming"],we=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=m({type:t,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),e(4,"theming"),i(),e(5," page."),i()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),i(),o(12,"th"),e(13,"Element"),i()()(),o(14,"tbody")(15,"tr")(16,"td"),e(17,"p-tree"),i(),o(18,"td"),e(19,"Main container element"),i()(),o(20,"tr")(21,"td"),e(22,"p-tree-horizontal"),i(),o(23,"td"),e(24,"Main container element in horizontal mode"),i()(),o(25,"tr")(26,"td"),e(27,"p-tree-container"),i(),o(28,"td"),e(29,"Container of nodes"),i()(),o(30,"tr")(31,"td"),e(32,"p-treenode"),i(),o(33,"td"),e(34,"A treenode element"),i()(),o(35,"tr")(36,"td"),e(37,"p-treenode-content"),i(),o(38,"td"),e(39,"Content of a treenode"),i()(),o(40,"tr")(41,"td"),e(42,"p-treenode-toggler"),i(),o(43,"td"),e(44,"Toggle icon"),i()(),o(45,"tr")(46,"td"),e(47,"p-treenode-icon"),i(),o(48,"td"),e(49,"Icon of a treenode"),i()(),o(50,"tr")(51,"td"),e(52,"p-treenode-label"),i(),o(53,"td"),e(54,"Label of a treenode"),i()(),o(55,"tr")(56,"td"),e(57,"p-treenode-children"),i(),o(58,"td"),e(59,"Container element for node children"),i()()()()()),l&2&&(c(3),d("routerLink",j(1,Me)))},dependencies:[f,X],encapsulation:2});let r=t;return r})();function Oe(r,t){if(r&1&&(o(0,"a",5),e(1),i()),r&2){let _=t.$implicit;d("href",_.data,P),c(),L(_.label)}}function _e(r,t){if(r&1&&(o(0,"b"),e(1),i()),r&2){let _=t.$implicit;c(),L(_.label)}}var De=(()=>{let t=class t{constructor(){this.code={basic:`<p-tree [value]="nodes" class="w-full md:w-30rem">
    <ng-template let-node pTemplate="url">
         <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-700 hover:text-primary">{{ node.label }}</a>
    </ng-template>
    <ng-template let-node pTemplate="default">
        <b>{{ node.label }}</b>
    </ng-template>
</p-tree>`,html:`
<div class="card flex justify-content-center">
    <p-tree [value]="nodes" class="w-full md:w-30rem">
        <ng-template let-node pTemplate="url">
             <a [href]="node.data" target="_blank" rel="noopener noreferrer" class="text-700 hover:text-primary">{{ node.label }}</a>
        </ng-template>
        <ng-template let-node pTemplate="default">
            <b>{{ node.label }}</b>
        </ng-template>
    </p-tree>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'tree-template-demo',
    templateUrl: './tree-template-demo.html'
})
export class TreeTemplateDemo implements OnInit {
    nodes!: TreeNode[];

    ngOnInit() {
        this.nodes = [
            {
                key: '0',
                label: 'Introduction',
                children: [
                    { key: '0-0', label: 'What is Angular', data: 'https://angular.io', type: 'url' },
                    { key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url' },
                    { key: '0-2', label: 'Learn and Explore', data: 'https://angular.io/guide/architecture', type: 'url' },
                    { key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url' }
                ]
            },
            {
                key: '1',
                label: 'Components In-Depth',
                children: [
                    { key: '1-0', label: 'Component Registration', data: 'https://angular.io/guide/component-interaction', type: 'url' },
                    { key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url' },
                    { key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url' },
                    { key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url' }
                ]
            }
        ];
    }
}`}}ngOnInit(){this.nodes=[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Angular",data:"https://angular.io",type:"url"},{key:"0-1",label:"Getting Started",data:"https://angular.io/guide/setup-local",type:"url"},{key:"0-2",label:"Learn and Explore",data:"https://angular.io/guide/architecture",type:"url"},{key:"0-3",label:"Take a Look",data:"https://angular.io/start",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://angular.io/guide/component-interaction",type:"url"},{key:"1-1",label:"User Input",data:"https://angular.io/guide/user-input",type:"url"},{key:"1-2",label:"Hooks",data:"https://angular.io/guide/lifecycle-hooks",type:"url"},{key:"1-3",label:"Attribute Directives",data:"https://angular.io/guide/attribute-directives",type:"url"}]}]}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=m({type:t,selectors:[["template-doc"]],decls:11,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"w-full","md:w-30rem",3,"value"],["pTemplate","url"],["pTemplate","default"],["selector","tree-template-demo",3,"code"],["target","_blank","rel","noopener noreferrer",1,"text-700","hover:text-primary",3,"href"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Custom node content instead of a node label is defined with the "),o(3,"i"),e(4,"pTemplate"),i(),e(5," property."),i()(),o(6,"div",0)(7,"p-tree",1),V(8,Oe,2,2,"ng-template",2)(9,_e,2,1,"ng-template",3),i()(),s(10,"app-code",4)),l&2&&(c(7),d("value",a.nodes),c(3),d("code",a.code))},dependencies:[h,f,v,Y],encapsulation:2});let r=t;return r})();var Ee=(()=>{let t=class t{constructor(n,l){this.nodeService=n,this.cd=l,this.loading=!1,this.code={basic:'<p-tree class="w-full md:w-30rem" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" [value]="files"></p-tree>',html:`
<div class="card flex justify-content-center">
<p-tree class="w-full md:w-30rem" scrollHeight="250px" [virtualScroll]="true" [virtualScrollItemSize]="46" [value]="files"></p-tree>
</div>`,typescript:`
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-virtual-scroll-demo',
    templateUrl: './tree-virtual-scroll-demo.html'
})
export class TreeVirtualScrollDemo implements OnInit {
    loading: boolean = false;

    files!: TreeNode[];

    constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.nodeService.getFiles().then((data) => {
            this.files = this.duplicateData(data, 50);
            this.cd.markForCheck();
        });
    }

    duplicateData(data: TreeNode[], count: number): TreeNode[] {
        let duplicatedData: TreeNode[] = [];
        for (let i = 0; i < count; i++) {
            duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
        }
        return duplicatedData;
    }

}`,service:["NodeService"],data:`
/* NodeService */
{
key: '0',
label: 'Documents',
data: 'Documents Folder',
icon: 'pi pi-fw pi-inbox',
children: [
{
    key: '0-0',
    label: 'Work',
    data: 'Work Folder',
    icon: 'pi pi-fw pi-cog',
    children: [
        { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
        { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
    ]
},
{
    key: '0-1',
    label: 'Home',
    data: 'Home Folder',
    icon: 'pi pi-fw pi-home',
    children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
}
]
},
...`}}ngOnInit(){this.nodeService.getFiles().then(n=>{this.files=this.duplicateData(n,50),this.cd.markForCheck()})}duplicateData(n,l){let a=[];for(let y=0;y<l;y++)a=[...a,...n.map(p=>A({},p))];return a}};t.\u0275fac=function(l){return new(l||t)(u(g),u(O))},t.\u0275cmp=m({type:t,selectors:[["virtual-scroll-doc"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],["scrollHeight","250px",1,"w-full","md:w-30rem",3,"virtualScroll","virtualScrollItemSize","value"],["selector","tree-virtual-scroll-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),o(3,"i"),e(4,"virtualScroll"),i(),e(5," property as true and providing a "),o(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," in pixels would be enough to enable this functionality."),i()(),o(9,"div",0),s(10,"p-tree",1),i(),s(11,"app-code",2)),l&2&&(c(10),d("virtualScroll",!0)("virtualScrollItemSize",46)("value",a.files),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var ke=(()=>{let t=class t{constructor(n,l){this.nodeService=n,this.cd=l,this.loading=!1,this.code={basic:'<p-tree class="w-full md:w-30rem" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" [value]="files" (onNodeExpand)="nodeExpand($event)" [loading]="loading"></p-tree>',html:`<div class="card flex justify-content-center">
<p-tree class="w-full md:w-30rem" scrollHeight="250px" [virtualScroll]="true" [lazy]="true" [virtualScrollItemSize]="46" [value]="files" (onNodeExpand)="nodeExpand($event)" [loading]="loading"></p-tree>
</div>`,typescript:`
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';

@Component({
    selector: 'tree-virtual-scroll-lazy-demo',
    templateUrl: './tree-virtual-scroll-lazy-demo.html'
})
export class TreeVirtualScrollLazyDemo implements OnInit {
    loading: boolean = false;

    files!: TreeNode[];

    virtualFiles!: TreeNode[];

    constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {}

    ngOnInit() {
        this.loading = true;
        setTimeout(() => {
            this.nodeService.getLazyFiles().then((files) => (this.files = this.duplicateData(files, 50)));
            this.loading = false;
            this.cd.markForCheck();
        }, 1000);
    }

    duplicateData(data: TreeNode[], count: number): TreeNode[] {
        let duplicatedData: TreeNode[] = [];
        for (let i = 0; i < count; i++) {
            duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
        }
        return duplicatedData;
    }

    nodeExpand(event: any) {
        if (event.node) {
            this.loading = true;
            setTimeout(() => {
                this.nodeService.getLazyFiles().then((nodes) => {
                    event.node.children = nodes;
                    this.files = [...this.files, event.node.children];
                });
                this.loading = false;
                this.cd.markForCheck();
            }, 200);
        }
    }
}`,service:["NodeService"],data:`
    /* NodeService */
{
    key: '0',
    label: 'Documents',
    data: 'Documents Folder',
    icon: 'pi pi-fw pi-inbox',
    children: [
        {
            key: '0-0',
            label: 'Work',
            data: 'Work Folder',
            icon: 'pi pi-fw pi-cog',
            children: [
                { key: '0-0-0', label: 'Expenses.doc', icon: 'pi pi-fw pi-file', data: 'Expenses Document' },
                { key: '0-0-1', label: 'Resume.doc', icon: 'pi pi-fw pi-file', data: 'Resume Document' }
            ]
        },
        {
            key: '0-1',
            label: 'Home',
            data: 'Home Folder',
            icon: 'pi pi-fw pi-home',
            children: [{ key: '0-1-0', label: 'Invoices.txt', icon: 'pi pi-fw pi-file', data: 'Invoices for this month' }]
        }
    ]
},
...`}}ngOnInit(){this.loading=!0,setTimeout(()=>{this.nodeService.getLazyFiles().then(n=>this.files=this.duplicateData(n,50)),this.loading=!1,this.cd.markForCheck()},1e3)}duplicateData(n,l){let a=[];for(let y=0;y<l;y++)a=[...a,...n.map(p=>A({},p))];return a}nodeExpand(n){n.node&&(this.loading=!0,setTimeout(()=>{this.nodeService.getLazyFiles().then(l=>{n.node.children=l,this.files=[...this.files,n.node.children]}),this.loading=!1,this.cd.markForCheck()},200))}};t.\u0275fac=function(l){return new(l||t)(u(g),u(O))},t.\u0275cmp=m({type:t,selectors:[["lazy-virtual-scroll-doc"]],decls:12,vars:6,consts:[[1,"card","flex","justify-content-center"],["scrollHeight","250px",1,"w-full","md:w-30rem",3,"onNodeExpand","virtualScroll","lazy","virtualScrollItemSize","value","loading"],["selector","tree-virtual-scroll-lazy-demo",3,"code"]],template:function(l,a){l&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"VirtualScroller is a performance-approach to handle huge data efficiently. Setting "),o(3,"i"),e(4,"virtualScroll"),i(),e(5," property as true and providing a "),o(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," in pixels would be enough to enable this functionality."),i()(),o(9,"div",0)(10,"p-tree",1),N("onNodeExpand",function(p){return a.nodeExpand(p)}),i()(),s(11,"app-code",2)),l&2&&(c(10),d("virtualScroll",!0)("lazy",!0)("virtualScrollItemSize",46)("value",a.files)("loading",a.loading),c(),d("code",a.code))},dependencies:[h,f,v],encapsulation:2});let r=t;return r})();var Ce=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=I({type:t}),t.\u0275inj=F({imports:[z,ne,U,ce,te,oe,Q,re,de,U]});let r=t;return r})();var Ae=()=>["Tree","TreeNode"],Ne=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:ge},{id:"basic",label:"Basic",component:pe},{id:"controlled",label:"Controlled",component:ue},{id:"selection",label:"Selection",children:[{id:"single",label:"Single",component:be},{id:"multiple",label:"Multiple",component:xe},{id:"checkbox",label:"Checkbox",component:me}]},{id:"event",label:"Events",component:ve},{id:"lazy",label:"Lazy",component:Se},{id:"virtualscroll",label:"Virtual Scroll",children:[{id:"preload",label:"Preload",component:Ee},{id:"lazyvirtualscroll",label:"Lazy",component:ke}]},{id:"template",label:"Template",component:De},{id:"dragdrop",label:"DragDrop",component:he},{id:"contextmenu",label:"Context Menu",component:fe},{id:"filter",label:"Filter",component:ye},{id:"style",label:"Style",component:we},{id:"accessibility",label:"Accessibility",component:se}]}};t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Tree Component","header","Tree","description","Tree is used to display hierarchical data.",3,"docs","apiDocs"]],template:function(l,a){l&1&&s(0,"app-doc",0),l&2&&d("docs",a.docs)("apiDocs",j(2,Ae))},dependencies:[le],encapsulation:2});let r=t;return r})();var Te=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=I({type:t}),t.\u0275inj=F({imports:[H.forChild([{path:"",component:Ne}]),H]});let r=t;return r})();var wi=(()=>{let t=class t{};t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=I({type:t}),t.\u0275inj=F({imports:[z,Te,Ce]});let r=t;return r})();export{wi as TreeDemoModule};
