import{a as ue,b as fe}from"./chunk-MCAH3RDI.js";import{a as u,b as de,c as W}from"./chunk-AS5FXEGH.js";import{a as f,b as se}from"./chunk-X2ZDE2AM.js";import{p as le}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as ce,a as pe,q as z,r as J,z as me}from"./chunk-UWMVDULA.js";import{o as re,t as k}from"./chunk-N5X6XDRN.js";import{Cc as R,Eb as V,Ec as A,Fc as q,Gb as $,Hb as U,Ic as H,Jb as n,Jc as K,Kb as ie,Lb as Q,Mb as ne,Nc as I,Sa as c,Sb as C,T as X,Tb as F,Ub as j,V as h,Vb as P,Xb as oe,_ as Y,cb as ee,da as d,ea as y,ib as x,jb as te,kb as m,nb as E,ob as G,pc as ae,qb as B,rb as o,sb as a,tb as s,ua as Z,ub as D,vb as w,wb as S,zb as g}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ve=(()=>{let e=class e{constructor(){this.code={typescript:"import { MeterGroupModule } from 'primeng/metergroup';"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(i,p){i&1&&s(0,"app-code",0),i&2&&m("code",p.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let t=e;return t})();var Fe=(t,e)=>({$implicit:t,icon:e}),Ie=()=>({"p-metergroup-label-icon":!0}),Oe=t=>({color:t}),Pe=t=>({backgroundColor:t});function Ae(t,e){if(t&1&&s(0,"i",8),t&2){let r=g(2).$implicit;G(r.icon),m("ngClass",C(4,Ie))("ngStyle",F(5,Oe,r.color))}}function ke(t,e){if(t&1&&s(0,"span",9),t&2){let r=g(2).$implicit;m("ngStyle",F(1,Pe,r.color))}}function ze(t,e){if(t&1&&(D(0),x(1,Ae,1,7,"i",6)(2,ke,1,3,"span",7),w()),t&2){let r=g().$implicit;c(),m("ngIf",r.icon),c(),m("ngIf",!r.icon)}}function je(t,e){t&1&&S(0)}function Le(t,e){if(t&1&&(o(0,"li",2),x(1,ze,3,2,"ng-container",3)(2,je,1,0,"ng-container",4),o(3,"span",5),n(4),a()()),t&2){let r=e.$implicit,l=g();c(),m("ngIf",!l.iconTemplate),c(),m("ngTemplateOutlet",l.iconTemplate)("ngTemplateOutletContext",j(5,Fe,r,r.icon)),c(2),ne("",r.label," (",l.parentInstance==null?null:l.parentInstance.percentValue(r.value),")")}}var L=(t,e,r)=>({$implicit:t,totalPercent:e,percentages:r}),Ne=(t,e,r,l,i)=>({$implicit:t,index:e,orientation:r,class:"p-metergroup-meter",size:l,totalPercent:i});function Be(t,e){if(t&1&&s(0,"p-meterGroupLabel",6),t&2){let r=g(2);m("value",r.value)("labelPosition",r.labelPosition)("labelOrientation",r.labelOrientation)("min",r.min)("max",r.max)("iconTemplate",r.iconTemplate)}}function Ve(t,e){t&1&&S(0)}function $e(t,e){if(t&1&&x(0,Be,1,6,"p-meterGroupLabel",5)(1,Ve,1,0,"ng-container",2),t&2){let r=g();m("ngIf",!r.labelTemplate),c(),m("ngTemplateOutlet",r.labelTemplate)("ngTemplateOutletContext",P(3,L,r.value,r.totalPercent(),r.percentages()))}}function Ue(t,e){t&1&&S(0)}function Qe(t,e){t&1&&S(0)}function Re(t,e){if(t&1&&(D(0),s(1,"span",8),w()),t&2){let r=g().$implicit,l=g();c(),m("ngStyle",l.meterStyle(r))}}function qe(t,e){if(t&1&&(D(0),x(1,Qe,1,0,"ng-container",2)(2,Re,2,1,"ng-container",7),w()),t&2){let r=e.$implicit,l=e.index,i=g();c(),m("ngTemplateOutlet",i.meterTemplate)("ngTemplateOutletContext",oe(3,Ne,r,l,i.orientation,i.percentValue(r.value),i.totalPercent())),c(),m("ngIf",!i.meterTemplate)}}function He(t,e){t&1&&S(0)}function Ke(t,e){if(t&1&&s(0,"p-meterGroupLabel",6),t&2){let r=g(2);m("value",r.value)("labelPosition",r.labelPosition)("labelOrientation",r.labelOrientation)("min",r.min)("max",r.max)("iconTemplate",r.iconTemplate)}}function Je(t,e){t&1&&S(0)}function We(t,e){if(t&1&&x(0,Ke,1,6,"p-meterGroupLabel",5)(1,Je,1,0,"ng-container",2),t&2){let r=g();m("ngIf",!r.labelTemplate),c(),m("ngTemplateOutlet",r.labelTemplate)("ngTemplateOutletContext",P(3,L,r.value,r.totalPercent(),r.percentages()))}}var Xe=(()=>{let e=class e{constructor(){this.value=null,this.labelPosition="end",this.labelOrientation="horizontal",this.parentInstance=Y(X(()=>v))}get labelClass(){return{"p-metergroup-labels p-component":!0,"p-metergroup-labels-vertical":this.labelOrientation==="vertical","p-metergroup-labels-horizontal":this.labelOrientation==="horizontal"}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["p-meterGroupLabel"]],contentQueries:function(i,p,N){if(i&1&&V(N,z,4),i&2){let O;$(O=U())&&(p.templates=O)}},inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},decls:2,vars:3,consts:[[3,"ngClass"],["class","p-metergroup-label",4,"ngFor","ngForOf","ngForTrackBy"],[1,"p-metergroup-label"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-label-text"],[3,"class","ngClass","ngStyle",4,"ngIf"],["class","p-metergroup-label-marker",3,"ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[1,"p-metergroup-label-marker",3,"ngStyle"]],template:function(i,p){i&1&&(o(0,"ol",0),x(1,Le,5,8,"li",1),a()),i&2&&(m("ngClass",p.labelClass),c(),m("ngForOf",p.value)("ngForTrackBy",p.parentInstance.trackByFn))},dependencies:[R,A,q,K,H],encapsulation:2});let t=e;return t})(),v=(()=>{let e=class e{constructor(){this.min=0,this.max=100,this.orientation="horizontal",this.labelPosition="end",this.labelOrientation="horizontal",this.container=ee("container",{read:Z}),this.containerEffect=ae(()=>{let l=this.container(),i=pe.getOuterHeight(l.nativeElement);this.vertical&&(this.container().nativeElement.style.height=i+"px")})}get vertical(){return this.orientation==="vertical"}get containerClass(){return{"p-metergroup p-component":!0,"p-metergroup-horizontal":this.orientation==="horizontal","p-metergroup-vertical":this.orientation==="vertical"}}ngAfterContentInit(){this.templates?.forEach(l=>{switch(l.getType()){case"label":this.labelTemplate=l.template;break;case"meter":this.meterTemplate=l.template;break;case"icon":this.iconTemplate=l.template;break;case"start":this.startTemplate=l.template;break;case"end":this.endTemplate=l.template;break;default:break}})}percent(l=0){let i=(l-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,i)))}percentValue(l){return this.percent(l)+"%"}meterStyle(l){return{backgroundColor:l.color,width:this.orientation==="horizontal"&&this.percentValue(l.value),height:this.orientation==="vertical"&&this.percentValue(l.value)}}totalPercent(){return this.percent(this.value.reduce((l,i)=>l+i.value,0))}percentages(){let l=0,i=[];return this.value.forEach(p=>{l+=p.value,i.push(l)}),i}trackByFn(l){return l}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["p-meterGroup"]],contentQueries:function(i,p,N){if(i&1&&V(N,z,4),i&2){let O;$(O=U())&&(p.templates=O)}},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",style:"style",styleClass:"styleClass"},decls:8,vars:23,consts:[["container",""],["role","meter",3,"ngClass","ngStyle"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-metergroup-meters"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate"],[4,"ngIf"],[1,"p-metergroup-meter",3,"ngStyle"]],template:function(i,p){i&1&&(o(0,"div",1,0),x(2,$e,2,7)(3,Ue,1,0,"ng-container",2),o(4,"div",3),x(5,qe,3,9,"ng-container",4),a(),x(6,He,1,0,"ng-container",2)(7,We,2,7),a()),i&2&&(G(p.styleClass),m("ngClass",p.containerClass)("ngStyle",p.style),te("aria-valuemin",p.min)("aria-valuemax",p.max)("aria-valuenow",p.totalPercent()),c(2),B(2,p.labelPosition==="start"?2:-1),c(),m("ngTemplateOutlet",p.startTemplate)("ngTemplateOutletContext",P(15,L,p.value,p.totalPercent(),p.percentages())),c(2),m("ngForOf",p.value)("ngForTrackBy",p.trackByFn),c(),m("ngTemplateOutlet",p.endTemplate)("ngTemplateOutletContext",P(19,L,p.value,p.totalPercent(),p.percentages())),c(),B(7,p.labelPosition==="end"?7:-1))},dependencies:[R,A,q,K,H,Xe],encapsulation:2,changeDetection:0});let t=e;return t})(),ge=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=h({imports:[I,J,J]});let t=e;return t})();var be=(()=>{let e=class e{constructor(){this.value=[{label:"Space used",value:15,color:"#34d399"}],this.code={basic:'<p-meterGroup [value]="value"></p-meterGroup>',html:`<div class="card">
<p-meterGroup [value]="value"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-basic-demo',
    templateUrl: './meter-group-basic-demo.html'
})
export class MeterGroupBasicDemo {
    value = [
        { label: 'Space used', value: 15, color: '#34d399' }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:12,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-basic-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"MeterGroup requires a "),o(3,"i"),n(4,"value"),a(),n(5," as the data to display where each item in the collection should be a type of "),o(6,"i"),n(7,"MeterItem"),a(),n(8,"."),a()(),o(9,"div",0),s(10,"p-meterGroup",1),a(),s(11,"app-code",2)),i&2&&(c(10),m("value",p.value),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var xe=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],this.code={basic:'<p-meterGroup [value]="value"></p-meterGroup>',html:`<div class="card">
<p-meterGroup [value]="value"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-multiple-demo',
    templateUrl: './meter-group-multiple-demo.html'
})
export class MeterGroupMultipleDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["multiple-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-multiple-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Adding more items to the array displays the meters in a group."),a()(),o(3,"div",0),s(4,"p-meterGroup",1),a(),s(5,"app-code",2)),i&2&&(c(4),m("value",p.value),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var he=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color:"#34d399",value:16,icon:"pi pi-table"},{label:"Messages",color:"#fbbf24",value:8,icon:"pi pi-inbox"},{label:"Media",color:"#60a5fa",value:24,icon:"pi pi-image"},{label:"System",color:"#c084fc",value:10,icon:"pi pi-cog"}],this.code={basic:'<p-meterGroup [value]="value"></p-meterGroup>',html:`<div class="card">
<p-meterGroup [value]="value"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';


@Component({
    selector: 'meter-group-icon-demo',
    templateUrl: './meter-group-icon-demo.html'
})
export class MeterGroupIconDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
        { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
        { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
        { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["icon-doc"]],decls:6,vars:2,consts:[[1,"card"],[3,"value"],["selector","meter-group-icon-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Icons can be displayed next to the labels instead of the default marker."),a()(),o(3,"div",0),s(4,"p-meterGroup",1),a(),s(5,"app-code",2)),i&2&&(c(4),m("value",p.value),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var ye=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],this.code={basic:'<p-meterGroup [value]="value" labelPosition="start" labelOrientation="vertical"></p-meterGroup>',html:`<div class="card">
<p-meterGroup [value]="value" labelPosition="start" labelOrientation="vertical"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-label-demo',
    templateUrl: './meter-group-label-demo.html'
})
export class MeterGroupLabelDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["label-doc"]],decls:12,vars:2,consts:[[1,"card"],["labelPosition","start","labelOrientation","vertical",3,"value"],["selector","meter-group-label-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2," The position of the labels relative to the meters is defined using the "),o(3,"i"),n(4,"labelPosition"),a(),n(5," property. The default orientation of the labels is horizontal, and the vertical alternative is available through the "),o(6,"i"),n(7,"labelOrientation"),a(),n(8," option. "),a()(),o(9,"div",0),s(10,"p-meterGroup",1),a(),s(11,"app-code",2)),i&2&&(c(10),m("value",p.value),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var Ye=()=>["/theming"],Ce=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:80,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"a",0),n(4,"theming"),a(),n(5," page."),a()(),o(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),n(11,"Name"),a(),o(12,"th"),n(13,"Element"),a()()(),o(14,"tbody")(15,"tr")(16,"td"),n(17,"p-metergroup"),a(),o(18,"td"),n(19,"Container element."),a()(),o(20,"tr")(21,"td"),n(22,"p-metergroup-horizontal"),a(),o(23,"td"),n(24,"Container element when orientation mode is horizontal."),a()(),o(25,"tr")(26,"td"),n(27,"p-metergroup-vertical"),a(),o(28,"td"),n(29,"Container element when orientation mode is vertical."),a()(),o(30,"tr")(31,"td"),n(32,"p-metergroup-meter-container"),a(),o(33,"td"),n(34,"Container of the meters."),a()(),o(35,"tr")(36,"td"),n(37,"p-metergroup-meter"),a(),o(38,"td"),n(39,"Content of a meter."),a()(),o(40,"tr")(41,"td"),n(42,"p-metergroup-label-list"),a(),o(43,"td"),n(44,"Container element of the list of labels."),a()(),o(45,"tr")(46,"td"),n(47,"p-metergroup-label-list-start"),a(),o(48,"td"),n(49,"Container element when label position is start."),a()(),o(50,"tr")(51,"td"),n(52,"p-metergroup-label-list-end"),a(),o(53,"td"),n(54,"Container element when label position is end."),a()(),o(55,"tr")(56,"td"),n(57,"p-metergroup-label-list-horizontal"),a(),o(58,"td"),n(59,"Container element when label orientation is horizontal."),a()(),o(60,"tr")(61,"td"),n(62,"p-metergroup-label-list-vertical"),a(),o(63,"td"),n(64,"Container element when label orientation is vertical."),a()(),o(65,"tr")(66,"td"),n(67,"p-metergroup-label-list-item"),a(),o(68,"td"),n(69,"Container element of a list item."),a()(),o(70,"tr")(71,"td"),n(72,"p-metergroup-label-list-type"),a(),o(73,"td"),n(74,"Container element of a list type."),a()(),o(75,"tr")(76,"td"),n(77,"p-metergroup-label"),a(),o(78,"td"),n(79,"Content of a label."),a()()()()()),i&2&&(c(3),m("routerLink",C(1,Ye)))},dependencies:[re,u],encapsulation:2});let t=e;return t})();var Ze=()=>({height:"300px"}),Me=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],this.code={basic:`<p-meterGroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }"></p-meterGroup>`,html:`<div class="card flex justify-content-center">
<p-meterGroup [value]="value" orientation="vertical" labelOrientation="vertical" [style]="{ height: '300px' }"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-vertical-demo',
    templateUrl: './meter-group-vertical-demo.html'
})
export class MeterGroupVerticalDemo {
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["vertical-doc"]],decls:15,vars:5,consts:[[1,"card","flex","justify-content-center"],["orientation","vertical","labelOrientation","vertical",3,"value"],["selector","meter-group-vertical-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Layout of the MeterGroup is configured with the "),o(3,"i"),n(4,"orientation"),a(),n(5," property that accepts either "),o(6,"i"),n(7,"horizontal"),a(),n(8," or "),o(9,"i"),n(10,"vertical"),a(),n(11," as available options."),a()(),o(12,"div",0),s(13,"p-meterGroup",1),a(),s(14,"app-code",2)),i&2&&(c(13),E(C(4,Ze)),m("value",p.value),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var Se=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}],this.code={basic:'<p-meterGroup [value]="value" [max]="200"></p-meterGroup>',html:`<div class="card">
<p-meterGroup [value]="value" [max]="200"></p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-min-max-demo',
    templateUrl: './meter-group-min-max-demo.html'
})
export class MeterGroupMinMaxDemo{
   
    value = [
        { label: 'Apps', color: '#34d399', value: 16 },
        { label: 'Messages', color: '#fbbf24', value: 8 },
        { label: 'Media', color: '#60a5fa', value: 24 },
        { label: 'System', color: '#c084fc', value: 10 }
    ];
 
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["min-max-doc"]],decls:12,vars:3,consts:[[1,"card"],[3,"value","max"],["selector","meter-group-min-max-demo",3,"code"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"Boundaries are configured with the "),o(3,"i"),n(4,"min"),a(),n(5," and "),o(6,"i"),n(7,"max"),a(),n(8," values whose defaults are 0 and 100 respectively."),a()(),o(9,"div",0),s(10,"p-meterGroup",1),a(),s(11,"app-code",2)),i&2&&(c(10),m("value",p.value)("max",200),c(),m("code",p.code))},dependencies:[f,u,v],encapsulation:2});let t=e;return t})();var et=t=>({"background-color":t,color:"#ffffff"}),tt=(t,e)=>({background:t,width:e}),it=t=>({width:t});function nt(t,e){if(t&1&&(D(0),o(1,"p-card",9)(2,"div",10)(3,"div",11)(4,"span",12),n(5),a(),o(6,"span",13),n(7),a()(),o(8,"span",14),s(9,"i"),a()()(),w()),t&2){let r=e.$implicit;c(5),ie(r.label),c(2),Q("",r.value,"%"),c(),E(F(6,et,r.color1)),c(),G(r.icon)}}function ot(t,e){if(t&1&&(o(0,"div",7),x(1,nt,10,8,"ng-container",8),a()),t&2){let r=g();c(),m("ngForOf",r.value)}}function at(t,e){if(t&1&&s(0,"span"),t&2){let r=e.$implicit,l=e.class,i=e.size;E(j(4,tt,"linear-gradient(to right, "+r.color1+", "+r.color2+")",i)),G(l)}}function lt(t,e){if(t&1&&(o(0,"div",15)(1,"span"),n(2,"Storage"),a(),o(3,"span",16),n(4),a(),o(5,"span",17),n(6,"1TB"),a()()),t&2){let r=e.totalPercent;c(3),E(F(3,it,r+"%")),c(),Q("",r,"%")}}function rt(t,e){t&1&&(o(0,"div",18),s(1,"p-button",19)(2,"p-button",20),a()),t&2&&(c(),m("outlined",!0))}var Te=(()=>{let e=class e{constructor(){this.value=[{label:"Apps",color1:"#34d399",color2:"#fbbf24",value:25,icon:"pi pi-table"},{label:"Messages",color1:"#fbbf24",color2:"#60a5fa",value:15,icon:"pi pi-inbox"},{label:"Media",color1:"#60a5fa",color2:"#c084fc",value:20,icon:"pi pi-image"},{label:"System",color1:"#c084fc",color2:"#c084fc",value:10,icon:"pi pi-cog"}],this.code={basic:`<p-meterGroup [value]="value" labelPosition="start">
    <ng-template pTemplate="label">
        <div class="flex flex-wrap gap-3">
            <ng-container *ngFor="let meterItem of value; let index = index">
                <p-card class="flex-1">
                    <div class="flex justify-content-between gap-5">
                        <div class="flex flex-column gap-1">
                            <span class="text-secondary text-sm">{{ meterItem.label }}</span>
                            <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                        </div>
                        <span class="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                            <i [class]="meterItem.icon"></i>
                        </span>
                    </div>
                </p-card>
            </ng-container>
        </div>
    </ng-template>
    <ng-template pTemplate="meter" let-value let-class="class" let-width="size">
        <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
    </ng-template>
    <ng-template pTemplate="start" let-totalPercent="totalPercent">
        <div class="flex justify-content-between mt-3 mb-2 relative">
            <span>Storage</span>
            <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
            <span class="font-medium">1TB</span>
        </div>
    </ng-template>
    <ng-template pTemplate="end">
        <div class="flex justify-content-between mt-3">
            <p-button label="Manage Storage" [outlined]="true" size="small" />
            <p-button label="Update Plan" size="small" />
        </div>
    </ng-template>
</p-meterGroup>`,html:`<div class="card">
    <p-meterGroup [value]="value" labelPosition="start">
        <ng-template pTemplate="label">
            <div class="flex flex-wrap gap-3">
                <ng-container *ngFor="let meterItem of value; let index = index">
                    <p-card class="flex-1">
                        <div class="flex justify-content-between gap-5">
                            <div class="flex flex-column gap-1">
                                <span class="text-secondary text-sm">{{ meterItem.label }}</span>
                                <span class="font-bold text-lg">{{ meterItem.value }}%</span>
                            </div>
                            <span class="w-2rem h-2rem border-circle inline-flex justify-content-center align-items-center text-center" [style]="{ 'background-color': meterItem.color1, color: '#ffffff' }">
                                <i [class]="meterItem.icon"></i>
                            </span>
                        </div>
                    </p-card>
                </ng-container>
            </div>
        </ng-template>
        <ng-template pTemplate="meter" let-value let-class="class" let-width="size">
            <span [class]="class" [style]="{ background: 'linear-gradient(to right, ' + value.color1 + ', ' + value.color2 + ')', width: width }"></span>
        </ng-template>
        <ng-template pTemplate="start" let-totalPercent="totalPercent">
            <div class="flex justify-content-between mt-3 mb-2 relative">
                <span>Storage</span>
                <span [style]="{ width: totalPercent + '%' }" class="absolute text-right">{{ totalPercent }}%</span>
                <span class="font-medium">1TB</span>
            </div>
        </ng-template>
        <ng-template pTemplate="end">
            <div class="flex justify-content-between mt-3">
                <p-button label="Manage Storage" [outlined]="true" size="small" />
                <p-button label="Update Plan" size="small" />
            </div>
        </ng-template>
    </p-meterGroup>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'meter-group-template-demo',
    templateUrl: './meter-group-template-demo.html'
})
export class MeterGroupTemplateDemo {
    value = [
        { label: 'Apps', color1: '#34d399', color2: '#fbbf24', value: 25, icon: 'pi pi-table' },
        { label: 'Messages', color1: '#fbbf24', color2: '#60a5fa', value: 15, icon: 'pi pi-inbox' },
        { label: 'Media', color1: '#60a5fa', color2: '#c084fc', value: 20, icon: 'pi pi-image' },
        { label: 'System', color1: '#c084fc', color2: '#c084fc', value: 10, icon: 'pi pi-cog' }
    ];
}`}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["template-doc"]],decls:10,vars:2,consts:[[1,"card"],["labelPosition","start",3,"value"],["pTemplate","label"],["pTemplate","meter"],["pTemplate","start"],["pTemplate","end"],["selector","meter-group-template-demo",3,"code"],[1,"flex","flex-wrap","gap-3"],[4,"ngFor","ngForOf"],[1,"flex-1"],[1,"flex","justify-content-between","gap-5"],[1,"flex","flex-column","gap-1"],[1,"text-secondary","text-sm"],[1,"font-bold","text-lg"],[1,"w-2rem","h-2rem","border-circle","inline-flex","justify-content-center","align-items-center","text-center"],[1,"flex","justify-content-between","mt-3","mb-2","relative"],[1,"absolute","text-right"],[1,"font-medium"],[1,"flex","justify-content-between","mt-3"],["label","Manage Storage","size","small",3,"outlined"],["label","Update Plan","size","small"]],template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"p"),n(2,"MeterGroup provides templating support for labels, meter items, and content around the meters."),a()(),o(3,"div",0)(4,"p-meterGroup",1),x(5,ot,2,1,"ng-template",2)(6,at,1,7,"ng-template",3)(7,lt,7,5,"ng-template",4)(8,rt,3,1,"ng-template",5),a()(),s(9,"app-code",6)),i&2&&(c(4),m("value",p.value),c(5),m("code",p.code))},dependencies:[A,f,me,z,u,v,ue],encapsulation:2});let t=e;return t})();var _e=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:24,vars:0,template:function(i,p){i&1&&(o(0,"app-docsectiontext")(1,"h3"),n(2,"Screen Reader"),a(),o(3,"p"),n(4,"MeterGroup component uses "),o(5,"i"),n(6,"meter"),a(),n(7," role in addition to the "),o(8,"i"),n(9,"aria-valuemin"),a(),n(10,", "),o(11,"i"),n(12,"aria-valuemax"),a(),n(13," and "),o(14,"i"),n(15,"aria-valuenow"),a(),n(16," attributes. Value to describe the component can be defined using "),o(17,"i"),n(18,"aria-labelledby"),a(),n(19," prop."),a(),o(20,"h3"),n(21,"Keyboard Support"),a(),o(22,"p"),n(23,"Component does not include any interactive elements."),a()())},dependencies:[u],encapsulation:2});let t=e;return t})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=h({imports:[I,se,le,k,ce,W,ge,fe,W]});let t=e;return t})();var pt=()=>["MeterGroup"],Ge=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:ve},{id:"basic",label:"Basic",component:be},{id:"multiple",label:"Multiple",component:xe},{id:"icon",label:"Icon",component:he},{id:"label",label:"Label",component:ye},{id:"vertical",label:"Vertical",component:Me},{id:"minmax",label:"Min Max",component:Se},{id:"template",label:"Template",component:Te},{id:"style",label:"Style",component:Ce},{id:"accessibility",label:"Accessibility",component:_e}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular MeterGroup Component","header","MeterGroup","description","MeterGroup displays scalar measurements within a known range.",3,"docs","apiDocs"]],template:function(i,p){i&1&&s(0,"app-doc",0),i&2&&m("docs",p.docs)("apiDocs",C(2,pt))},dependencies:[de],encapsulation:2});let t=e;return t})();var De=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=h({imports:[k.forChild([{path:"",component:Ge}]),k]});let t=e;return t})();var Ii=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=h({imports:[I,De,Ee]});let t=e;return t})();export{Ii as MeterGroupDemoModule};
