import{a as me,b as re}from"./chunk-MCAH3RDI.js";import{a as g,b as pe,c as q}from"./chunk-AS5FXEGH.js";import{a as h,b as ae}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as le,q as f,r as ne,y as oe}from"./chunk-UWMVDULA.js";import{o as ie,t as w}from"./chunk-N5X6XDRN.js";import{Cc as Y,Eb as Q,Ec as Z,Fc as k,Gb as K,Hb as V,Ib as G,Ic as ee,Jb as o,Jc as te,Kb as J,Lb as v,Na as P,Nc as D,Sa as s,Sb as M,Ta as R,Tb as _,V as T,Zb as W,da as d,dc as X,ea as C,ib as c,jb as S,kb as m,nb as H,ob as z,rb as i,sb as n,tb as u,ua as $,ub as L,vb as U,wb as A,zb as E}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var Ee=(t,e,r,p,l,a,O)=>({"p-timeline p-component":!0,"p-timeline-left":t,"p-timeline-right":e,"p-timeline-top":r,"p-timeline-bottom":p,"p-timeline-alternate":l,"p-timeline-vertical":a,"p-timeline-horizontal":O}),j=t=>({$implicit:t});function _e(t,e){t&1&&A(0)}function De(t,e){t&1&&A(0)}function be(t,e){if(t&1&&(L(0),c(1,De,1,0,"ng-container",5),U()),t&2){let r=E().$implicit,p=E();s(),m("ngTemplateOutlet",p.markerTemplate)("ngTemplateOutletContext",_(2,j,r))}}function we(t,e){t&1&&u(0,"div",10),t&2&&S("data-pc-section","marker")}function Fe(t,e){t&1&&u(0,"div",11)}function Ie(t,e){t&1&&A(0)}function ze(t,e){if(t&1&&(i(0,"div",3)(1,"div",4),c(2,_e,1,0,"ng-container",5),n(),i(3,"div",6),c(4,be,2,4,"ng-container",7)(5,we,1,1,"ng-template",null,0,X)(7,Fe,1,0,"div",8),n(),i(8,"div",9),c(9,Ie,1,0,"ng-container",5),n()()),t&2){let r=e.$implicit,p=e.last,l=G(6),a=E();S("data-pc-section","event"),s(),S("data-pc-section","opposite"),s(),m("ngTemplateOutlet",a.oppositeTemplate)("ngTemplateOutletContext",_(11,j,r)),s(),S("data-pc-section","separator"),s(),m("ngIf",a.markerTemplate)("ngIfElse",l),s(3),m("ngIf",!p),s(),S("data-pc-section","content"),s(),m("ngTemplateOutlet",a.contentTemplate)("ngTemplateOutletContext",_(13,j,r))}}var y=(()=>{let e=class e{constructor(p){this.el=p,this.align="left",this.layout="vertical"}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(p=>{switch(p.getType()){case"content":this.contentTemplate=p.template;break;case"opposite":this.oppositeTemplate=p.template;break;case"marker":this.markerTemplate=p.template;break}})}};e.\u0275fac=function(l){return new(l||e)(R($))},e.\u0275cmp=d({type:e,selectors:[["p-timeline"]],contentQueries:function(l,a,O){if(l&1&&Q(O,f,4),l&2){let N;K(N=V())&&(a.templates=N)}},hostAttrs:[1,"p-element"],inputs:{value:"value",style:"style",styleClass:"styleClass",align:"align",layout:"layout"},decls:2,vars:15,consts:[["marker",""],[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(l,a){l&1&&(i(0,"div",1),c(1,ze,10,15,"div",2),n()),l&2&&(z(a.styleClass),m("ngStyle",a.style)("ngClass",W(7,Ee,a.align==="left",a.align==="right",a.align==="top",a.align==="bottom",a.align==="alternate",a.layout==="vertical",a.layout==="horizontal")),S("data-pc-name","timeline")("data-pc-section","root"),s(),m("ngForOf",a.value))},dependencies:[Y,Z,k,te,ee],styles:[`@layer primeng{.p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}}
`],encapsulation:2,changeDetection:0});let t=e;return t})(),se=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=C({type:e}),e.\u0275inj=T({imports:[D,ne]});let t=e;return t})();var ce=(()=>{let e=class e{constructor(){this.code={typescript:"import { TimelineModule } from 'primeng/timeline';"}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,a){l&1&&u(0,"app-code",0),l&2&&m("code",a.code)("hideToggleCode",!0)},dependencies:[h],encapsulation:2});let t=e;return t})();function Ae(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r.status," ")}}var de=(()=>{let e=class e{constructor(){this.code={basic:`<p-timeline [value]="events">
    <ng-template pTemplate="content" let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`
<div class="card">
    <p-timeline [value]="events">
        <ng-template pTemplate="content" let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'timeline-basic-demo',
    templateUrl: './timeline-basic-demo.html'
})
export class TimelineBasicDemo {
    events: any[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`},this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["basic-doc"]],decls:13,vars:2,consts:[[1,"card"],[3,"value"],["pTemplate","content"],["selector","timeline-basic-demo",3,"code"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2," Timeline receives the events with the "),i(3,"i"),o(4,"value"),n(),o(5," property as a collection of arbitrary objects. In addition, "),i(6,"i"),o(7,"content"),n(),o(8," template is required to display the representation of an event. Example below is a sample events array that is used throughout the documentation. "),n()(),i(9,"div",0)(10,"p-timeline",1),c(11,Ae,1,1,"ng-template",2),n()(),u(12,"app-code",3)),l&2&&(s(10),m("value",a.events),s(2),m("code",a.code))},dependencies:[h,g,y,f],encapsulation:2});let t=e;return t})();function Me(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r.status," ")}}function ke(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r.status," ")}}function Be(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r.status," ")}}var ue=(()=>{let e=class e{constructor(){this.code={basic:`<p-timeline [value]="events" class="w-full md:w-20rem">
    <ng-template pTemplate="content" let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-20rem" align="right">
    <ng-template pTemplate="content" let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" class="w-full md:w-20rem" align="alternate">
    <ng-template pTemplate="content" let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`
<div class="card flex flex-wrap gap-6">
    <p-timeline [value]="events" class="w-full md:w-20rem">
        <ng-template pTemplate="content" let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-20rem" align="right">
        <ng-template pTemplate="content" let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" class="w-full md:w-20rem" align="alternate">
        <ng-template pTemplate="content" let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`
import { Component } from '@angular/core';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-alignment-demo',
    templateUrl: './timeline-alignment-demo.html'
})
export class TimelineAlignmentDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`},this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["alignment-doc"]],decls:14,vars:4,consts:[[1,"card","flex","flex-wrap","gap-6"],[1,"w-full","md:w-20rem",3,"value"],["pTemplate","content"],["align","right",1,"w-full","md:w-20rem",3,"value"],["align","alternate",1,"w-full","md:w-20rem",3,"value"],["selector","timeline-alignment-demo",3,"code"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Content location relative the line is defined with the "),i(3,"i"),o(4,"align"),n(),o(5," property."),n()(),i(6,"div",0)(7,"p-timeline",1),c(8,Me,1,1,"ng-template",2),n(),i(9,"p-timeline",3),c(10,ke,1,1,"ng-template",2),n(),i(11,"p-timeline",4),c(12,Be,1,1,"ng-template",2),n()(),u(13,"app-code",5)),l&2&&(s(7),m("value",a.events),s(2),m("value",a.events),s(2),m("value",a.events),s(2),m("code",a.code))},dependencies:[h,g,y,f],encapsulation:2});let t=e;return t})();function Oe(t,e){if(t&1&&(i(0,"small",5),o(1),n()),t&2){let r=e.$implicit;s(),J(r.date)}}function qe(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r.status," ")}}var ge=(()=>{let e=class e{constructor(){this.code={basic:`<p-timeline [value]="events">
    <ng-template pTemplate="content" let-event>
        <small class="p-text-secondary">{{ event.date }}</small>
    </ng-template>
    <ng-template pTemplate="opposite" let-event>
        {{ event.status }}
    </ng-template>
</p-timeline>`,html:`
<div class="card">
    <p-timeline [value]="events">
        <ng-template pTemplate="content" let-event>
            <small class="p-text-secondary">{{ event.date }}</small>
        </ng-template>
        <ng-template pTemplate="opposite" let-event>
            {{ event.status }}
        </ng-template>
    </p-timeline>
</div>`,typescript:`
import { Component } from '@angular/core';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-opposite-demo',
    templateUrl: './timeline-opposite-demo.html'
})
export class TimelineOppositeDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`},this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["opposite-doc"]],decls:11,vars:2,consts:[[1,"card"],[3,"value"],["pTemplate","content"],["pTemplate","opposite"],["selector","timeline-opposite-demo",3,"code"],[1,"p-text-secondary"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Additional content at the other side of the line can be provided with the "),i(3,"i"),o(4,"opposite"),n(),o(5," property."),n()(),i(6,"div",0)(7,"p-timeline",1),c(8,Oe,2,1,"ng-template",2)(9,qe,1,1,"ng-template",3),n()(),u(10,"app-code",4)),l&2&&(s(7),m("value",a.events),s(3),m("code",a.code))},dependencies:[h,g,y,f],encapsulation:2});let t=e;return t})();var je=t=>({"background-color":t});function Ne(t,e){if(t&1&&(i(0,"span",5),u(1,"i"),n()),t&2){let r=e.$implicit;H(_(4,je,r.color)),s(),z(r.icon)}}function $e(t,e){if(t&1&&u(0,"img",9),t&2){let r=E().$implicit;m("src","https://primefaces.org/cdn/primeng/images/demo/product/"+r.image,P)("alt",r.name)}}function Pe(t,e){if(t&1&&(i(0,"p-card",6),c(1,$e,1,2,"img",7),i(2,"p"),o(3," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas! "),n(),u(4,"button",8),n()),t&2){let r=e.$implicit;m("header",r.status)("subheader",r.date),s(),m("ngIf",r.image)}}var ve=(()=>{let e=class e{constructor(){this.code={basic:`<p-timeline [value]="events" align="alternate" styleClass="customized-timeline">
    <ng-template pTemplate="marker" let-event>
        <span class="custom-marker shadow-2" [style.backgroundColor]="event.color">
            <i [ngClass]="event.icon"></i>
        </span>
    </ng-template>
    <ng-template pTemplate="content" let-event>
        <p-card [header]="event.status" [subheader]="event.date">
            <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow-2" />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                neque quas!
            </p>
            <button pButton label="Read more" class="p-button-text"></button>
        </p-card>
    </ng-template>
</p-timeline>`,html:`
<div class="card">
    <p-timeline [value]="events" align="alternate" styleClass="customized-timeline">
        <ng-template pTemplate="marker" let-event>
            <span class="custom-marker shadow-2" [style.backgroundColor]="event.color">
                <i [ngClass]="event.icon"></i>
            </span>
        </ng-template>
        <ng-template pTemplate="content" let-event>
            <p-card [header]="event.status" [subheader]="event.date">
                <img *ngIf="event.image" [src]="'https://primefaces.org/cdn/primeng/images/demo/product/' + event.image" [alt]="event.name" width="200" class="shadow-2" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                    neque quas!
                </p>
                <button pButton label="Read more" class="p-button-text"></button>
            </p-card>
        </ng-template>
    </p-timeline>
</div>`,typescript:`
import { Component } from '@angular/core';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    color?: string;
    image?: string;
}

@Component({
    selector: 'timeline-template-demo',
    templateUrl: './timeline-template-demo.html'
})
export class TimelineTemplateDemo {
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }
}`},this.events=[{status:"Ordered",date:"15/10/2020 10:30",icon:"pi pi-shopping-cart",color:"#9C27B0",image:"game-controller.jpg"},{status:"Processing",date:"15/10/2020 14:00",icon:"pi pi-cog",color:"#673AB7"},{status:"Shipped",date:"15/10/2020 16:15",icon:"pi pi-shopping-cart",color:"#FF9800"},{status:"Delivered",date:"16/10/2020 10:00",icon:"pi pi-check",color:"#607D8B"}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["template-doc"]],decls:8,vars:2,consts:[[1,"card"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["pTemplate","content"],["selector","timeline-template-demo",3,"code"],[1,"flex","w-2rem","h-2rem","align-items-center","justify-content-center","text-white","border-circle","z-1","shadow-1"],[3,"header","subheader"],["width","200","class","shadow-2",3,"src","alt",4,"ngIf"],["pButton","","label","Read more",1,"p-button-text"],["width","200",1,"shadow-2",3,"src","alt"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Sample implementation with custom content and styled markers."),n()(),i(3,"div",0)(4,"p-timeline",1),c(5,Ne,2,6,"ng-template",2)(6,Pe,5,3,"ng-template",3),n()(),u(7,"app-code",4)),l&2&&(s(4),m("value",a.events),s(3),m("code",a.code))},dependencies:[k,h,g,y,f,me,oe],encapsulation:2});let t=e;return t})();function Re(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r," ")}}function He(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r," ")}}function Le(t,e){if(t&1&&o(0),t&2){let r=e.$implicit;v(" ",r," ")}}function Ue(t,e){t&1&&(i(0,"span"),o(1,"\xA0"),n())}var fe=(()=>{let e=class e{constructor(){this.code={basic:`<p-timeline [value]="events" layout="horizontal" align="top">
    <ng-template pTemplate="content" let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="bottom">
    <ng-template pTemplate="content" let-event>
        {{ event }}
    </ng-template>
</p-timeline>

<p-timeline [value]="events" layout="horizontal" align="alternate">
    <ng-template pTemplate="content" let-event>
        {{ event }}
    </ng-template>
    <ng-template pTemplate="opposite" let-event><span>&nbsp;</span></ng-template>
</p-timeline>`,html:`
<div class="card flex flex-column gap-3">
    <p-timeline [value]="events" layout="horizontal" align="top">
        <ng-template pTemplate="content" let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="bottom">
        <ng-template pTemplate="content" let-event>
            {{ event }}
        </ng-template>
    </p-timeline>
    <p-timeline [value]="events" layout="horizontal" align="alternate">
        <ng-template pTemplate="content" let-event>
            {{ event }}
        </ng-template>
        <ng-template pTemplate="opposite" let-event><span>&nbsp;</span></ng-template>
    </p-timeline>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'timeline-horizontal-demo',
    templateUrl: './timeline-horizontal-demo.html'
})
export class TimelineHorizontalDemo {
    events: string[];

    constructor() {
        this.events = [
            "2020", "2021", "2022", "2023"
        ];
    }
}`},this.events=["2020","2021","2022","2023"]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["horizontal-doc"]],decls:21,vars:4,consts:[[1,"card","flex","flex-column","gap-3"],["layout","horizontal","align","top",3,"value"],["pTemplate","content"],["layout","horizontal","align","bottom",3,"value"],["layout","horizontal","align","alternate",3,"value"],["pTemplate","opposite"],["selector","timeline-horizontal-demo",3,"code"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"TimeLine orientation is controlled with the "),i(3,"i"),o(4,"layout"),n(),o(5," property, default is "),i(6,"i"),o(7,"vertical"),n(),o(8," having "),i(9,"i"),o(10,"horizontal"),n(),o(11," as the alternative."),n()(),i(12,"div",0)(13,"p-timeline",1),c(14,Re,1,1,"ng-template",2),n(),i(15,"p-timeline",3),c(16,He,1,1,"ng-template",2),n(),i(17,"p-timeline",4),c(18,Le,1,1,"ng-template",2)(19,Ue,2,0,"ng-template",5),n()(),u(20,"app-code",6)),l&2&&(s(13),m("value",a.events),s(2),m("value",a.events),s(2),m("value",a.events),s(3),m("code",a.code))},dependencies:[h,g,y,f],encapsulation:2});let t=e;return t})();var Qe=()=>["/theming"],he=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["style-doc"]],decls:85,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"p"),o(2,"Following is the list of structural style classes, for theming classes visit "),i(3,"a",0),o(4,"theming"),n(),o(5," page."),n()(),i(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),o(11,"Name"),n(),i(12,"th"),o(13,"Element"),n()()(),i(14,"tbody")(15,"tr")(16,"td"),o(17,"p-timeline"),n(),i(18,"td"),o(19,"Container element."),n()(),i(20,"tr")(21,"td"),o(22,"p-timeline-left"),n(),i(23,"td"),o(24,"Container element when alignment is left."),n()(),i(25,"tr")(26,"td"),o(27,"p-timeline-right"),n(),i(28,"td"),o(29,"Container element when alignment is right."),n()(),i(30,"tr")(31,"td"),o(32,"p-timeline-top"),n(),i(33,"td"),o(34,"Container element when alignment is top."),n()(),i(35,"tr")(36,"td"),o(37,"p-timeline-bottom"),n(),i(38,"td"),o(39,"Container element when alignment is bottom."),n()(),i(40,"tr")(41,"td"),o(42,"p-timeline-alternate"),n(),i(43,"td"),o(44,"Container element when alignment is alternating."),n()(),i(45,"tr")(46,"td"),o(47,"p-timeline-vertical"),n(),i(48,"td"),o(49,"Container element of a vertical timeline."),n()(),i(50,"tr")(51,"td"),o(52,"p-timeline-horizontal"),n(),i(53,"td"),o(54,"Container element of a horizontal timeline."),n()(),i(55,"tr")(56,"td"),o(57,"p-timeline-event"),n(),i(58,"td"),o(59,"Event element."),n()(),i(60,"tr")(61,"td"),o(62,"p-timeline-event-opposite"),n(),i(63,"td"),o(64,"Opposite of an event content."),n()(),i(65,"tr")(66,"td"),o(67,"p-timeline-event-content"),n(),i(68,"td"),o(69,"Event content."),n()(),i(70,"tr")(71,"td"),o(72,"p-timeline-event-separator"),n(),i(73,"td"),o(74,"Separator element of an event."),n()(),i(75,"tr")(76,"td"),o(77,"p-timeline-event-marker"),n(),i(78,"td"),o(79,"Marker element of an event."),n()(),i(80,"tr")(81,"td"),o(82,"p-timeline-event-connector"),n(),i(83,"td"),o(84,"Connector element of an event."),n()()()()()),l&2&&(s(3),m("routerLink",M(1,Qe)))},dependencies:[g,ie],encapsulation:2});let t=e;return t})();var xe=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["accessibility-doc"]],decls:9,vars:0,template:function(l,a){l&1&&(i(0,"app-docsectiontext")(1,"h3"),o(2,"Screen Reader"),n(),i(3,"p"),o(4,"Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element."),n(),i(5,"h3"),o(6,"Keyboard Support"),n(),i(7,"p"),o(8,"Component does not include any interactive elements."),n()())},dependencies:[g],encapsulation:2});let t=e;return t})();var ye=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=C({type:e}),e.\u0275inj=T({imports:[D,ae,q,se,re,le,w,q]});let t=e;return t})();var Ke=()=>["Timeline"],Te=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:ce},{id:"basic",label:"Basic",component:de},{id:"alignment",label:"Alignment",component:ue},{id:"opposite",label:"Opposite",component:ge},{id:"template",label:"Template",component:ve},{id:"horizontal",label:"Horizontal",component:fe},{id:"style",label:"Style",component:he},{id:"accessibility",label:"Accessibility",component:xe}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Timeline Component","header","Timeline","description","Timeline visualizes a series of chained events.",3,"docs","apiDocs"]],template:function(l,a){l&1&&u(0,"app-doc",0),l&2&&m("docs",a.docs)("apiDocs",M(2,Ke))},dependencies:[pe],encapsulation:2});let t=e;return t})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=C({type:e}),e.\u0275inj=T({imports:[w.forChild([{path:"",component:Te}]),w]});let t=e;return t})();var Xt=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=C({type:e}),e.\u0275inj=T({imports:[D,Ce,ye]});let t=e;return t})();export{Xt as TimelineDemoModule};
