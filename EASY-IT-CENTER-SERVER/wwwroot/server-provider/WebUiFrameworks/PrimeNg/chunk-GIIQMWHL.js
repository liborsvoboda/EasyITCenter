import{a as ue}from"./chunk-K5J3KJF5.js";import{a as xe}from"./chunk-DP75TYTQ.js";import{c as he,d as G,f as V,g as fe,h as J}from"./chunk-XSSXK7EZ.js";import{a as u,b as ve,c as Y}from"./chunk-AS5FXEGH.js";import{a as v,b as Ce}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{a as K,q as T,r as H}from"./chunk-UWMVDULA.js";import{o as ge,t as A}from"./chunk-N5X6XDRN.js";import{Cc as X,Eb as ae,Ec as pe,Fc as W,Gb as oe,Hb as re,Ic as q,Jb as o,Jc as me,Kb as x,Na as U,Nb as le,Nc as N,Ob as de,Pb as ce,Sa as d,Sb as z,T as te,Ta as I,Tb as E,Ub as se,V as _,da as g,ea as S,f as ee,ib as h,jb as m,kb as s,kc as Q,ma as O,na as D,ob as F,rb as i,sb as a,tb as p,ua as ne,ub as j,va as w,vb as P,wb as ie,xb as L,yb as $,zb as f}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ke=["pOrganizationChartNode",""],Ue=(t,e)=>({"p-organizationchart-node-content":!0,"p-organizationchart-selectable-node":t,"p-highlight":e}),be=t=>({$implicit:t}),Z=()=>({display:"inline"}),ye=t=>({"p-organizationchart-line-top":t});function je(t,e){if(t&1&&(i(0,"div"),o(1),a()),t&2){let r=f(2);d(),x(r.node.label)}}function Pe(t,e){t&1&&ie(0)}function Ve(t,e){if(t&1&&(i(0,"div"),h(1,Pe,1,0,"ng-container",7),a()),t&2){let r=f(2);d(),s("ngTemplateOutlet",r.chart.getTemplateForNode(r.node))("ngTemplateOutletContext",E(2,be,r.node))}}function Re(t,e){t&1&&p(0,"ChevronDownIcon",11),t&2&&(s("styleClass","p-node-toggler-icon")("ngStyle",z(3,Z)),m("data-pc-section","nodeTogglerIcon"))}function Be(t,e){t&1&&p(0,"ChevronUpIcon",11),t&2&&(s("styleClass","p-node-toggler-icon")("ngStyle",z(3,Z)),m("data-pc-section","nodeTogglerIcon"))}function Le(t,e){if(t&1&&(j(0),h(1,Re,1,4,"ChevronDownIcon",10)(2,Be,1,4,"ChevronUpIcon",10),P()),t&2){let r=f(3);d(),s("ngIf",r.node.expanded),d(),s("ngIf",!r.node.expanded)}}function $e(t,e){}function Qe(t,e){t&1&&h(0,$e,0,0,"ng-template")}function Xe(t,e){if(t&1&&(i(0,"span",12),h(1,Qe,1,0,null,7),a()),t&2){let r=f(3);s("ngStyle",z(4,Z)),m("data-pc-section","nodeTogglerIcon"),d(),s("ngTemplateOutlet",r.chart.togglerIconTemplate)("ngTemplateOutletContext",E(5,be,r.node.expanded))}}function We(t,e){if(t&1){let r=L();i(0,"a",8),$("click",function(n){O(r);let c=f(2);return D(c.toggleNode(n,c.node))})("keydown.enter",function(n){O(r);let c=f(2);return D(c.toggleNode(n,c.node))})("keydown.space",function(n){O(r);let c=f(2);return D(c.toggleNode(n,c.node))}),h(1,Le,3,2,"ng-container",0)(2,Xe,2,7,"span",9),a()}if(t&2){let r=f(2);m("data-pc-section","nodeToggler"),d(),s("ngIf",!r.chart.togglerIconTemplate),d(),s("ngIf",r.chart.togglerIconTemplate)}}function qe(t,e){if(t&1&&(j(0),i(1,"td"),p(2,"div",4),a(),P()),t&2){let r=f(2);d(),m("data-pc-section","lineCell")("colspan",r.colspan),d(),m("data-pc-section","lineDown")}}function Ke(t,e){if(t&1&&(i(0,"td",14),o(1,"\xA0"),a(),i(2,"td",15),o(3,"\xA0"),a()),t&2){let r=e.first,l=e.last;s("ngClass",E(4,ye,!r)),m("data-pc-section","lineLeft"),d(2),s("ngClass",E(6,ye,!l)),m("data-pc-section","lineRight")}}function He(t,e){if(t&1&&(j(0),h(1,Ke,4,8,"ng-template",13),P()),t&2){let r=f(2);d(),s("ngForOf",r.node.children)}}function Ge(t,e){if(t&1&&(i(0,"td",16),p(1,"table",17),a()),t&2){let r=e.$implicit;m("data-pc-section","nodeCell"),d(),s("node",r)}}function Je(t,e){if(t&1){let r=L();i(0,"tbody")(1,"tr")(2,"td")(3,"div",1),$("click",function(n){O(r);let c=f();return D(c.onNodeClick(n,c.node))}),h(4,je,2,1,"div",0)(5,Ve,2,4,"div",0)(6,We,3,3,"a",2),a()()(),i(7,"tr",3)(8,"td"),p(9,"div",4),a()(),i(10,"tr",3),h(11,qe,3,3,"ng-container",0)(12,He,2,1,"ng-container",0),a(),i(13,"tr",5),h(14,Ge,2,2,"td",6),a()()}if(t&2){let r=f();m("data-pc-section","body"),d(),m("data-pc-section","row"),d(),m("colspan",r.colspan)("data-pc-section","cell"),d(),F(r.node.styleClass),s("ngClass",se(26,Ue,r.chart.selectionMode&&r.node.selectable!==!1,r.isSelected())),m("data-pc-section","node"),d(),s("ngIf",!r.chart.getTemplateForNode(r.node)),d(),s("ngIf",r.chart.getTemplateForNode(r.node)),d(),s("ngIf",!r.leaf),d(),s("ngClass",!r.leaf&&r.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),m("data-pc-section","lines"),d(),m("data-pc-section","lineCell")("colspan",r.colspan),d(),m("data-pc-section","lineDown"),d(),s("ngClass",!r.leaf&&r.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),m("data-pc-section","lines"),d(),s("ngIf",r.node.children&&r.node.children.length===1),d(),s("ngIf",r.node.children&&r.node.children.length>1),d(),s("ngClass",!r.leaf&&r.node.expanded?"p-organizationchart-node-visible":"p-organizationchart-node-hidden")("@childState","in"),m("data-pc-section","nodes"),d(),s("ngForOf",r.node.children)}}var Ye=t=>({"p-organizationchart p-component":!0,"p-organizationchart-preservespace":t});function Ze(t,e){if(t&1&&p(0,"table",2),t&2){let r=f();s("node",r.root)}}var et=(()=>{let e=class e{constructor(l,n){this.cd=n,this.chart=l,this.subscription=this.chart.selectionSource$.subscribe(()=>{this.cd.markForCheck()})}get leaf(){if(this.node)return this.node.leaf==!1?!1:!(this.node.children&&this.node.children.length)}get colspan(){if(this.node)return this.node.children&&this.node.children.length?this.node.children.length*2:null}onNodeClick(l,n){this.chart.onNodeClick(l,n)}toggleNode(l,n){n.expanded=!n.expanded,n.expanded?this.chart.onNodeExpand.emit({originalEvent:l,node:this.node}):this.chart.onNodeCollapse.emit({originalEvent:l,node:this.node}),l.preventDefault()}isSelected(){return this.chart.isSelected(this.node)}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(n){return new(n||e)(I(te(()=>b)),I(Q))},e.\u0275cmp=g({type:e,selectors:[["","pOrganizationChartNode",""]],hostAttrs:[1,"p-element"],inputs:{node:"node",root:"root",first:"first",last:"last"},attrs:ke,decls:1,vars:1,consts:[[4,"ngIf"],[3,"click","ngClass"],["tabindex","0","class","p-node-toggler",3,"click","keydown.enter","keydown.space",4,"ngIf"],[1,"p-organizationchart-lines",3,"ngClass"],[1,"p-organizationchart-line-down"],[1,"p-organizationchart-nodes",3,"ngClass"],["colspan","2",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["tabindex","0",1,"p-node-toggler",3,"click","keydown.enter","keydown.space"],["class","p-node-toggler-icon",3,"ngStyle",4,"ngIf"],[3,"styleClass","ngStyle",4,"ngIf"],[3,"styleClass","ngStyle"],[1,"p-node-toggler-icon",3,"ngStyle"],["ngFor","",3,"ngForOf"],[1,"p-organizationchart-line-left",3,"ngClass"],[1,"p-organizationchart-line-right",3,"ngClass"],["colspan","2"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"node"]],template:function(n,c){n&1&&h(0,Je,15,29,"tbody",0),n&2&&s("ngIf",c.node)},dependencies:[X,pe,W,me,q,xe,ue,e],styles:[`@layer primeng{.p-organizationchart-table{border-spacing:0;border-collapse:separate;margin:0 auto}.p-organizationchart-table>tbody>tr>td{text-align:center;vertical-align:top;padding:0 .75rem}.p-organizationchart-node-content{display:inline-block;position:relative}.p-organizationchart-node-content .p-node-toggler{position:absolute;bottom:-.75rem;margin-left:-.75rem;z-index:2;left:50%;-webkit-user-select:none;user-select:none;cursor:pointer;width:1.5rem;height:1.5rem}.p-organizationchart-node-content .p-node-toggler .p-node-toggler-icon{position:relative;top:.25rem}.p-organizationchart-line-down{margin:0 auto;height:20px;width:1px}.p-organizationchart-line-right,.p-organizationchart-line-left{border-radius:0}.p-organizationchart-selectable-node{cursor:pointer}.p-organizationchart .p-organizationchart-node-hidden{display:none}.p-organizationchart-preservespace .p-organizationchart-node-hidden{visibility:hidden;display:inherit}}
`],encapsulation:2,data:{animation:[he("childState",[fe("in",V({opacity:1})),J("void => *",[V({opacity:0}),G(150)]),J("* => void",[G(150,V({opacity:0}))])])]}});let t=e;return t})(),b=(()=>{let e=class e{get selection(){return this._selection}set selection(l){this._selection=l,this.initialized&&this.selectionSource.next(null)}constructor(l,n){this.el=l,this.cd=n,this.preserveSpace=!0,this.selectionChange=new w,this.onNodeSelect=new w,this.onNodeUnselect=new w,this.onNodeExpand=new w,this.onNodeCollapse=new w,this.selectionSource=new ee,this.selectionSource$=this.selectionSource.asObservable()}get root(){return this.value&&this.value.length?this.value[0]:null}ngAfterContentInit(){this.templates.length&&(this.templateMap={}),this.templates.forEach(l=>{l.getType()==="togglericon"?this.togglerIconTemplate=l.template:this.templateMap[l.getType()]=l.template}),this.initialized=!0}getTemplateForNode(l){return this.templateMap?l.type?this.templateMap[l.type]:this.templateMap.default:null}onNodeClick(l,n){let c=l.target;if(!(c.className&&(K.hasClass(c,"p-node-toggler")||K.hasClass(c,"p-node-toggler-icon")))&&this.selectionMode){if(n.selectable===!1)return;let M=this.findIndexInSelection(n),y=M>=0;this.selectionMode==="single"?y?(this.selection=null,this.onNodeUnselect.emit({originalEvent:l,node:n})):(this.selection=n,this.onNodeSelect.emit({originalEvent:l,node:n})):this.selectionMode==="multiple"&&(y?(this.selection=this.selection.filter((rt,Ae)=>Ae!=M),this.onNodeUnselect.emit({originalEvent:l,node:n})):(this.selection=[...this.selection||[],n],this.onNodeSelect.emit({originalEvent:l,node:n}))),this.selectionChange.emit(this.selection),this.selectionSource.next(null)}}findIndexInSelection(l){let n=-1;if(this.selectionMode&&this.selection){if(this.selectionMode==="single")n=this.selection==l?0:-1;else if(this.selectionMode==="multiple"){for(let c=0;c<this.selection.length;c++)if(this.selection[c]==l){n=c;break}}}return n}isSelected(l){return this.findIndexInSelection(l)!=-1}};e.\u0275fac=function(n){return new(n||e)(I(ne),I(Q))},e.\u0275cmp=g({type:e,selectors:[["p-organizationChart"]],contentQueries:function(n,c,M){if(n&1&&ae(M,T,4),n&2){let y;oe(y=re())&&(c.templates=y)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",selectionMode:"selectionMode",preserveSpace:"preserveSpace",selection:"selection"},outputs:{selectionChange:"selectionChange",onNodeSelect:"onNodeSelect",onNodeUnselect:"onNodeUnselect",onNodeExpand:"onNodeExpand",onNodeCollapse:"onNodeCollapse"},decls:2,vars:8,consts:[[3,"ngStyle","ngClass"],["class","p-organizationchart-table","pOrganizationChartNode","",3,"node",4,"ngIf"],["pOrganizationChartNode","",1,"p-organizationchart-table",3,"node"]],template:function(n,c){n&1&&(i(0,"div",0),h(1,Ze,1,1,"table",1),a()),n&2&&(F(c.styleClass),s("ngStyle",c.style)("ngClass",E(6,Ye,c.preserveSpace)),m("data-pc-section","root"),d(),s("ngIf",c.root))},dependencies:[X,W,q,et],encapsulation:2});let t=e;return t})(),_e=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=_({imports:[N,H,H]});let t=e;return t})();var Se=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["accessibility-doc"]],decls:34,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),a(),i(3,"p"),o(4," Component currently uses a table based implementation and does not provide high level of screen reader support, a nested list implementation replacement is planned with aria roles and attributes aligned to a tree widget for high level of reader support in the upcoming versions. "),a(),i(5,"h3"),o(6,"Keyboard Support"),a(),i(7,"div",0)(8,"table",1)(9,"thead")(10,"tr")(11,"th"),o(12,"Key"),a(),i(13,"th"),o(14,"Function"),a()()(),i(15,"tbody")(16,"tr")(17,"td")(18,"i"),o(19,"tab"),a()(),i(20,"td"),o(21,"Moves focus through the focusable elements within the chart."),a()(),i(22,"tr")(23,"td")(24,"i"),o(25,"enter"),a()(),i(26,"td"),o(27,"Toggles the expanded state of a node."),a()(),i(28,"tr")(29,"td")(30,"i"),o(31,"space"),a()(),i(32,"td"),o(33,"Toggles the expanded state of a node."),a()()()()()())},dependencies:[u],encapsulation:2});let t=e;return t})();var ze=(()=>{let e=class e{constructor(){this.data=[{label:"Argentina",expanded:!0,children:[{label:"Argentina",expanded:!0,children:[{label:"Argentina"},{label:"France"}]},{label:"France",expanded:!0,children:[{label:"France"},{label:"Morocco"}]}]}],this.code={basic:'<p-organizationChart [value]="data"></p-organizationChart>',html:`
<div class="card flex justify-content-center">
    <p-organizationChart [value]="data"></p-organizationChart>
</div>`,typescript:`
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'organization-chart-basic-doc',
    templateUrl: './organization-chart-basic-doc.html',
})
export class OrganizationChartBasicDoc {
    data: TreeNode[] = [
        {
            label: 'F.C Barcelona',
            expanded: true,
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    children: [
                        {
                            label: 'Argentina'
                        },
                        {
                            label: 'France'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    children: [
                        {
                            label: 'France'
                        },
                        {
                            label: 'Morocco'
                        }
                    ]
                }
            ]
        }
    ];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center","overflow-x-auto"],[3,"value"],["selector","organization-chart-basic-doc",3,"code"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"OrganizationChart requires a collection of "),i(3,"i"),o(4,"TreeNode"),a(),o(5," instances as a "),i(6,"i"),o(7,"value"),a(),o(8,"."),a()(),i(9,"div",0),p(10,"p-organizationChart",1),a(),p(11,"app-code",2)),n&2&&(d(10),s("value",c.data),d(),s("code",c.code))},dependencies:[v,u,b],encapsulation:2});let t=e;return t})();function tt(t,e){if(t&1&&(i(0,"div",4),p(1,"img",5),i(2,"div",6),o(3),a(),i(4,"div"),o(5),a()()),t&2){let r=e.$implicit;d(),s("src",r.data.image,U),d(2),x(r.data.name),d(2),x(r.data.title)}}var we=(()=>{let e=class e{constructor(){this.data=[{expanded:!0,type:"person",styleClass:"bg-indigo-500 text-white",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",styleClass:"bg-purple-500 text-white",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales",styleClass:"bg-purple-500 text-white",style:" border-radius: 12px"},{label:"Marketing",styleClass:"bg-purple-500 text-white",style:" border-radius: 12px"}]},{expanded:!0,type:"person",styleClass:"bg-teal-500 text-white",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development",styleClass:"bg-teal-500 text-white"},{label:"UI/UX Design",styleClass:"bg-teal-500 text-white"}]}]}],this.code={basic:`<p-organizationChart [value]="data">
    <ng-template let-node pTemplate="person">
        <div class="p-2 text-center">
            <img [src]="node.data.image" class="mb-3 w-3rem h-3rem" />
            <div class="font-bold">{{ node.data.name }}</div>
            <div>{{ node.data.title }}</div>
        </div>
    </ng-template>
</p-organizationChart>`,html:`
<div class="card flex justify-content-center overflow-x-auto">
    <p-organizationChart [value]="data">
        <ng-template let-node pTemplate="person">
            <div class="p-2 text-center">
                <img [src]="node.data.image" class="mb-3 w-3rem h-3rem" />
                <div class="font-bold">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </ng-template>
    </p-organizationChart>
</div>`,typescript:`
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'organization-chart-colored-demo',
    templateUrl: './organization-chart-colored-demo.html',
})
export class OrganizationChartColoredDemo {
    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            styleClass: 'bg-indigo-500 text-white',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-purple-500 text-white',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales',
                            styleClass: 'bg-purple-500 text-white',
                            style: ' border-radius: 12px'
                        },
                        {
                            label: 'Marketing',
                            styleClass: 'bg-purple-500 text-white',
                            style: ' border-radius: 12px'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    styleClass: 'bg-teal-500 text-white',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development',
                            styleClass: 'bg-teal-500 text-white'
                        },
                        {
                            label: 'UI/UX Design',
                            styleClass: 'bg-teal-500 text-white'
                        }
                    ]
                }
            ]
        }
    ];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["organization-chart-colored-demo"]],decls:13,vars:2,consts:[[1,"card","flex","justify-content-center","overflow-x-auto"],[3,"value"],["pTemplate","person"],["selector","organization-chart-colored-demo",3,"code"],[1,"p-2","text-center"],[1,"mb-3","w-3rem","h-3rem",3,"src"],[1,"font-bold"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Styling a specific node is configured with "),i(3,"i"),o(4,"class"),a(),o(5," and "),i(6,"i"),o(7,"style"),a(),o(8," options of a TreeNode."),a()(),i(9,"div",0)(10,"p-organizationChart",1),h(11,tt,6,3,"ng-template",2),a()(),p(12,"app-code",3)),n&2&&(d(10),s("value",c.data),d(2),s("code",c.code))},dependencies:[v,u,b,T],encapsulation:2});let t=e;return t})();var Ee=(()=>{let e=class e{constructor(){this.code={typescript:"import { OrganizationChartModule } from 'primeng/organizationchart';"}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,c){n&1&&p(0,"app-code",0),n&2&&s("code",c.code)("hideToggleCode",!0)},dependencies:[v],encapsulation:2});let t=e;return t})();function nt(t,e){if(t&1&&(i(0,"div",4),p(1,"img",5),i(2,"div",6),o(3),a(),i(4,"div"),o(5),a()()),t&2){let r=e.$implicit;d(),s("src",r.data.image,U),d(2),x(r.data.name),d(2),x(r.data.title)}}var Ne=(()=>{let e=class e{constructor(){this.data=[{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png",name:"Amy Elsner",title:"CEO"},children:[{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png",name:"Anna Fali",title:"CMO"},children:[{label:"Sales"},{label:"Marketing"}]},{expanded:!0,type:"person",data:{image:"https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png",name:"Stephen Shaw",title:"CTO"},children:[{label:"Development"},{label:"UI/UX Design"}]}]}],this.code={basic:`<p-organizationChart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes">
    <ng-template let-node pTemplate="person">
        <div class="p-2 text-center">
            <img [src]="node.data.image" class="mb-3 w-3rem h-3rem" />
            <div class="font-bold">{{ node.data.name }}</div>
            <div>{{ node.data.title }}</div>
        </div>
    </ng-template>
</p-organizationChart>`,html:`
<div class="card flex justify-content-center overflow-x-auto">
    <p-organizationChart [value]="data" selectionMode="multiple" [(selection)]="selectedNodes">
        <ng-template let-node pTemplate="person">
            <div class="p-2 text-center">
                <img [src]="node.data.image" class="mb-3 w-3rem h-3rem" />
                <div class="font-bold">{{ node.data.name }}</div>
                <div>{{ node.data.title }}</div>
            </div>
        </ng-template>
    </p-organizationChart>
</div>`,typescript:`
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'organization-chart-selection-demo',
    templateUrl: './organization-chart-selection-demo.html',
})
export class OrganizationChartSelectionDemo {
    selectedNodes!: TreeNode[];

    data: TreeNode[] = [
        {
            expanded: true,
            type: 'person',
            data: {
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Amy Elsner',
                title: 'CEO'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'CMO'
                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'CTO'
                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["selection-doc"]],decls:19,vars:3,consts:[[1,"card","flex","justify-content-center","overflow-x-auto"],["selectionMode","multiple",3,"selectionChange","value","selection"],["pTemplate","person"],["selector","organization-chart-selection-demo",3,"code"],[1,"p-2","text-center"],[1,"mb-3","w-3rem","h-3rem",3,"src"],[1,"font-bold"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"p"),o(2," Nodes can be selected by defining "),i(3,"i"),o(4,"selectionMode"),a(),o(5," along with a value binding with "),i(6,"i"),o(7,"selection"),a(),o(8," properties. By default only one node can be selected, set "),i(9,"i"),o(10,"selectionMode"),a(),o(11," as "),i(12,"i"),o(13,"multiple"),a(),o(14," to select more than one. "),a()(),i(15,"div",0)(16,"p-organizationChart",1),ce("selectionChange",function(y){return de(c.selectedNodes,y)||(c.selectedNodes=y),y}),h(17,nt,6,3,"ng-template",2),a()(),p(18,"app-code",3)),n&2&&(d(16),s("value",c.data),le("selection",c.selectedNodes),d(2),s("code",c.code))},dependencies:[v,u,b,T],encapsulation:2});let t=e;return t})();var it=()=>["/theming"],Me=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["style-doc"]],decls:50,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),o(4,"theming"),a(),o(5," page."),a()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),o(11,"Name"),a(),i(12,"th"),o(13,"Element"),a()()(),i(14,"tbody")(15,"tr")(16,"td"),o(17,"p-organizationchart"),a(),i(18,"td"),o(19,"Container element."),a()(),i(20,"tr")(21,"td"),o(22,"p-organizationchart-table"),a(),i(23,"td"),o(24,"Table container of a node."),a()(),i(25,"tr")(26,"td"),o(27,"p-organizationchart-lines"),a(),i(28,"td"),o(29,"Connector lines container."),a()(),i(30,"tr")(31,"td"),o(32,"p-organizationchart-nodes"),a(),i(33,"td"),o(34,"Contained of node children."),a()(),i(35,"tr")(36,"td"),o(37,"p-organizationchart-line-right"),a(),i(38,"td"),o(39,"Right side line of a node connector."),a()(),i(40,"tr")(41,"td"),o(42,"p-organizationchart-line-left"),a(),i(43,"td"),o(44,"Left side line of a node connector."),a()(),i(45,"tr")(46,"td"),o(47,"p-organizationchart-line-top"),a(),i(48,"td"),o(49,"Top side line of a node connector."),a()()()()()),n&2&&(d(3),s("routerLink",z(1,it)))},dependencies:[ge,u],encapsulation:2});let t=e;return t})();function at(t,e){if(t&1&&(i(0,"div",4),p(1,"img",5),i(2,"div"),o(3),a(),i(4,"div",6),o(5),a()()),t&2){let r=e.$implicit;d(),F("flag flag-"+r.data),s("alt",r.label),d(2),x(r.data.name),d(2),x(r.label)}}var Oe=(()=>{let e=class e{constructor(){this.data=[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",expanded:!0,data:"ar",children:[{label:"Argentina",data:"ar"},{label:"Croatia",data:"hr"}]},{label:"France",expanded:!0,data:"fr",children:[{label:"France",data:"fr"},{label:"Morocco",data:"ma"}]}]}],this.code={basic:`<p-organizationChart [value]="data">
    <ng-template let-node pTemplate="default">
        <div class="p-2 text-center">
            <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
            <div>{{ node.data.name }}</div>
            <div class="p-2">{{ node.label }}</div>
        </div>
    </ng-template>
</p-organizationChart>`,html:`
<div class="card flex justify-content-center">
    <p-organizationChart [value]="data">
        <ng-template let-node pTemplate="default">
            <div class="p-2 text-center">
                <img src="https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png" [alt]="node.label" [class]="'flag' + ' flag-' + node.data" width="32" />
                <div>{{ node.data.name }}</div>
                <div class="p-2">{{ node.label }}</div>
            </div>
        </ng-template>
    </p-organizationChart>
</div>`,typescript:`
import { Component } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
    selector: 'organization-chart-template-demo',
    templateUrl: './organization-chart-template-demo.html',
})
export class OrganizationChartTemplateDemo {
    data: TreeNode[] = [
        {
            label: 'Argentina',
            expanded: true,
            data: 'ar',
            children: [
                {
                    label: 'Argentina',
                    expanded: true,
                    data: 'ar',
                    children: [
                        {
                            label: 'Argentina',
                            data: 'ar'
                        },
                        {
                            label: 'Croatia',
                            data: 'hr'
                        }
                    ]
                },
                {
                    label: 'France',
                    expanded: true,
                    data: 'fr',
                    children: [
                        {
                            label: 'France',
                            data: 'fr'
                        },
                        {
                            label: 'Morocco',
                            data: 'ma'
                        }
                    ]
                }
            ]
        }
    ];
}`}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["template-doc"]],decls:13,vars:2,consts:[[1,"card","flex","justify-content-center","overflow-x-auto"],[3,"value"],["pTemplate","default"],["selector","organization-chart-template-demo",3,"code"],[1,"p-2","text-center"],["src","https://primefaces.org/cdn/primeng/images/flag/flag_placeholder.png","width","32",3,"alt"],[1,"p-2"]],template:function(n,c){n&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Custom content instead of a node "),i(3,"i"),o(4,"label"),a(),o(5," is defined using the "),i(6,"i"),o(7,"pTemplate"),a(),o(8," property."),a()(),i(9,"div",0)(10,"p-organizationChart",1),h(11,at,6,5,"ng-template",2),a()(),p(12,"app-code",3)),n&2&&(d(10),s("value",c.data),d(2),s("code",c.code))},dependencies:[v,u,b,T],encapsulation:2});let t=e;return t})();var De=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=_({imports:[N,A,Ce,Y,_e,Y]});let t=e;return t})();var ot=()=>["OrganizationChart"],Ie=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:Ee},{id:"basic",label:"Basic",component:ze},{id:"template",label:"Template",component:Oe},{id:"selection",label:"Selection",component:Ne},{id:"colored",label:"Colored",component:we},{id:"style",label:"Style",component:Me},{id:"accessibility",label:"Accessibility",component:Se}]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=g({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Organization Chart Component","header","OrganizationChart","description","OrganizationChart visualizes hierarchical organization data.",3,"docs","apiDocs"]],template:function(n,c){n&1&&p(0,"app-doc",0),n&2&&s("docs",c.docs)("apiDocs",z(2,ot))},dependencies:[ve],styles:["[_nghost-%COMP%]     .p-organizationchart .p-person{padding:0;border:0 none}[_nghost-%COMP%]     .p-organizationchart .node-header, [_nghost-%COMP%]     .p-organizationchart .node-content{padding:.5em .7rem}[_nghost-%COMP%]     .p-organizationchart .node-header{background-color:#495ebb;color:#fff}[_nghost-%COMP%]     .p-organizationchart .node-content{text-align:center;border:1px solid #495ebb}[_nghost-%COMP%]     .p-organizationchart .node-content img{border-radius:50%}[_nghost-%COMP%]     .p-organizationchart .department-cfo{background-color:#7247bc;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-coo{background-color:#a534b6;color:#fff}[_nghost-%COMP%]     .p-organizationchart .department-cto{background-color:#e9286f;color:#fff}"]});let t=e;return t})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=_({imports:[A.forChild([{path:"",component:Ie}]),A]});let t=e;return t})();var Sn=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=S({type:e}),e.\u0275inj=_({imports:[N,Fe,De]});let t=e;return t})();export{Sn as OrganizationChartDemoModule};
