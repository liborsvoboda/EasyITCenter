import{a as g,b as $}from"./chunk-ORJYCDDT.js";import"./chunk-K5J3KJF5.js";import"./chunk-5W5PG5VT.js";import"./chunk-CZYOEPZS.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as s,b as te,c as A}from"./chunk-AS5FXEGH.js";import{a as f,b as ee}from"./chunk-X2ZDE2AM.js";import{e as y,f as z,g as K,h as H,i as E,j as V,m as q,n as Z,p as J,q as Q}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as F}from"./chunk-UWMVDULA.js";import{o as X,t as _}from"./chunk-N5X6XDRN.js";import{Ic as R,Jb as e,Kb as Y,Nb as x,Nc as N,Ob as h,Pb as S,Sa as d,Sb as B,Tb as G,V as T,da as c,ea as k,ib as I,kb as m,ma as L,na as P,rb as n,sb as t,tb as u,xb as U,yb as O}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ne=(()=>{let i=class i{constructor(){this.code={typescript:"import { CalendarModule } from 'primeng/calendar';"}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,l){a&1&&u(0,"app-code",0),a&2&&m("code",l.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let o=i;return o})();var ie=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-basic-demo',
    templateUrl: './calendar-basic-demo.html'
})
export class CalendarBasicDemo {
    date: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-basic-demo"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["selector","calendar-basic-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Two-way value binding is defined using the standard "),n(3,"i"),e(4,"ngModel"),t(),e(5," directive referencing to a "),n(6,"i"),e(7,"Date"),t(),e(8," property."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.date),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var ae=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" dateFormat="dd.mm.yy"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" dateFormat="dd.mm.yy"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-format-demo',
    templateUrl: './calendar-format-demo.html'
})
export class CalendarFormatDemo {
    date: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-format-demo"]],decls:81,vars:2,consts:[[1,"mb-4","line-height-4"],[1,"card","flex","justify-content-center"],["dateFormat","dd.mm.yy",3,"ngModelChange","ngModel"],["selector","calendar-format-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Default date format is "),n(3,"i"),e(4,"mm/dd/yy"),t(),e(5," which can be customized using the "),n(6,"i"),e(7,"dateFormat"),t(),e(8," property. Following options can be a part of the format."),t(),n(9,"ul",0)(10,"li")(11,"i"),e(12,"d"),t(),e(13," - day of month (no leading zero)"),t(),n(14,"li")(15,"i"),e(16,"dd"),t(),e(17," - day of month (two digit)"),t(),n(18,"li")(19,"i"),e(20,"o"),t(),e(21," - day of the year (no leading zeros)"),t(),n(22,"li")(23,"i"),e(24,"oo"),t(),e(25," - day of the year (three digit)"),t(),n(26,"li")(27,"i"),e(28,"D"),t(),e(29," - day name short"),t(),n(30,"li")(31,"i"),e(32,"DD"),t(),e(33," - day name long"),t(),n(34,"li")(35,"i"),e(36,"m"),t(),e(37," - month of year (no leading zero)"),t(),n(38,"li")(39,"i"),e(40,"mm"),t(),e(41," - month of year (two digit)"),t(),n(42,"li")(43,"i"),e(44,"M"),t(),e(45," - month name short"),t(),n(46,"li")(47,"i"),e(48,"MM"),t(),e(49," - month name long"),t(),n(50,"li")(51,"i"),e(52,"y"),t(),e(53," - year (two digit)"),t(),n(54,"li")(55,"i"),e(56,"yy"),t(),e(57," - year (four digit)"),t(),n(58,"li")(59,"i"),e(60,"@"),t(),e(61," - Unix timestamp (ms since 01/01/1970)"),t(),n(62,"li")(63,"i"),e(64,"!"),t(),e(65," - Windows ticks (100ns since 01/01/0001)"),t(),n(66,"li")(67,"i"),e(68,"'...'"),t(),e(69," - literal text"),t(),n(70,"li")(71,"i"),e(72,"''"),t(),e(73," - single quote"),t(),n(74,"li")(75,"i"),e(76,"anything else"),t(),e(77," - literal text"),t()()(),n(78,"div",1)(79,"p-calendar",2),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(80,"app-code",3)),a&2&&(d(79),x("ngModel",l.date),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var oe=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-local-demo"]],decls:6,vars:0,consts:[["href","/configuration/#locale"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Locale for different languages and formats is defined globally, refer to the "),n(3,"a",0),e(4,"PrimeNG Locale"),t(),e(5," configuration for more information."),t()())},dependencies:[s],encapsulation:2});let o=i;return o})();function Fe(o,i){if(o&1){let W=U();n(0,"i",10),O("click",function(a){let l=L(W).clickCallBack;return P(l(a))}),t()}}var re=(()=>{let i=class i{constructor(){this.code={basic:`<p-calendar [(ngModel)]="date1" [showIcon]="true"></p-calendar>
<p-calendar [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true"></p-calendar>
<p-calendar [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" inputId="templatedisplay">
    <ng-template pTemplate="inputicon" let-clickCallBack="clickCallBack">
        <i class="pi pi-user pointer-events-none" (click)="clickCallBack($event)"></i>
    </ng-template>
</p-calendar>`,html:`<div class="card flex flex-wrap gap-3 p-fluid">
    <div class="flex-auto">
        <label for="buttondisplay" class="font-bold block mb-2"> Button Display </label>
        <p-calendar [(ngModel)]="date1" [showIcon]="true" inputId="buttondisplay"></p-calendar>
    </div>

    <div class="flex-auto">
        <label for="icondisplay" class="font-bold block mb-2"> Icon Display </label>
        <p-calendar [(ngModel)]="date2" [iconDisplay]="'input'" [showIcon]="true" inputId="icondisplay"></p-calendar>
    </div>

    <div class="flex-auto">
        <label for="templatedisplay" class="font-bold block mb-2"> Template Display </label>
        <p-calendar [(ngModel)]="date3" [iconDisplay]="'input'" [showIcon]="true" inputId="templatedisplay">
            <ng-template pTemplate="inputicon" let-clickCallBack="clickCallBack">
                <i class="pi pi-user pointer-events-none" (click)="clickCallBack($event)"></i>
            </ng-template>
        </p-calendar>
    </div>
</div>`,typescript:`import { Component } from '@angular/core';

@Component({
    selector: 'calendar-icon-demo',
    templateUrl: './calendar-icon-demo.html'
})
export class CalendarIconDemo {
    date1: Date | undefined;

    date2: Date | undefined;

    date3: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-icon-demo"]],decls:21,vars:9,consts:[[1,"card","flex","flex-wrap","gap-3","p-fluid"],[1,"flex-auto"],["for","buttondisplay",1,"font-bold","block","mb-2"],["inputId","buttondisplay",3,"ngModelChange","ngModel","showIcon"],["for","icondisplay",1,"font-bold","block","mb-2"],["inputId","icondisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon"],["for","templatedisplay",1,"font-bold","block","mb-2"],["inputId","templatedisplay",3,"ngModelChange","ngModel","iconDisplay","showIcon"],["pTemplate","inputicon"],["selector","calendar-icon-demo",3,"code"],[1,"pi","pi-user","pointer-events-none","pointer-events-none",3,"click"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"An additional icon is displayed next to the input field when "),n(3,"i"),e(4,"showIcon"),t(),e(5," is present."),t()(),n(6,"div",0)(7,"div",1)(8,"label",2),e(9," Button Display "),t(),n(10,"p-calendar",3),S("ngModelChange",function(r){return h(l.date1,r)||(l.date1=r),r}),t()(),n(11,"div",1)(12,"label",4),e(13," Icon Display "),t(),n(14,"p-calendar",5),S("ngModelChange",function(r){return h(l.date2,r)||(l.date2=r),r}),t()(),n(15,"div",1)(16,"label",6),e(17," Template Display "),t(),n(18,"p-calendar",7),S("ngModelChange",function(r){return h(l.date3,r)||(l.date3=r),r}),I(19,Fe,1,0,"ng-template",8),t()()(),u(20,"app-code",9)),a&2&&(d(10),x("ngModel",l.date1),m("showIcon",!0),d(4),x("ngModel",l.date2),m("iconDisplay","input")("showIcon",!0),d(4),x("ngModel",l.date3),m("iconDisplay","input")("showIcon",!0),d(2),m("code",l.code))},dependencies:[f,s,y,E,g,F],encapsulation:2});let o=i;return o})();var de=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [minDate]="minDate" [maxDate]="maxDate" [readonlyInput]="true"></p-calendar>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'calendar-minmax-demo',
    templateUrl: './calendar-minmax-demo.html'
})
export class CalendarMinmaxDemo implements OnInit {
    date: Date | undefined;

    minDate: Date | undefined;

    maxDate: Date | undefined;

    ngOnInit() {
        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month -1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);
    }
}`}}ngOnInit(){let p=new Date,a=p.getMonth(),l=p.getFullYear(),C=a===0?11:a-1,r=C===11?l-1:l,j=a===11?0:a+1,Ie=j===0?l+1:l;this.minDate=new Date,this.minDate.setMonth(C),this.minDate.setFullYear(r),this.maxDate=new Date,this.maxDate.setMonth(j),this.maxDate.setFullYear(Ie)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-minmax-demo"]],decls:12,vars:6,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","minDate","maxDate","readonlyInput","showTime"],["selector","calendar-minmax-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Boundaries for the permitted dates that can be entered are defined with "),n(3,"i"),e(4,"minDate"),t(),e(5," and "),n(6,"i"),e(7,"maxDate"),t(),e(8," properties."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.date),m("minDate",l.minDate)("maxDate",l.maxDate)("readonlyInput",!0)("showTime",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var me=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="dates" selectionMode="multiple" [readonlyInput]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-multiple-demo',
    templateUrl: './calendar-multiple-demo.html'
})
export class CalendarMultipleDemo {
    dates: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-multiple-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["selectionMode","multiple",3,"ngModelChange","ngModel","readonlyInput"],["selector","calendar-multiple-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"In order to choose multiple dates, set "),n(3,"i"),e(4,"selectionMode"),t(),e(5," as "),n(6,"i"),e(7,"multiple"),t(),e(8,". In this mode, the value binding should be an array."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.dates,r)||(l.dates=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.dates),m("readonlyInput",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var pe=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="rangeDates" selectionMode="range" [readonlyInput]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core'

@Component({
    selector: 'calendar-range-demo',
    templateUrl: './calendar-range-demo.html',
})
export class CalendarRangeDemo {
    rangeDates: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-range-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["selectionMode","range",3,"ngModelChange","ngModel","readonlyInput"],["selector","calendar-range-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"A range of dates can be selected by defining "),n(3,"i"),e(4,"selectionMode"),t(),e(5," as "),n(6,"i"),e(7,"range"),t(),e(8,", in this case the bound value would be an array with two values where first date is the start of the range and second date is the end."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.rangeDates,r)||(l.rangeDates=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.rangeDates),m("readonlyInput",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var ce=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [showButtonBar]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [showButtonBar]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-buttonbar-demo',
    templateUrl: './calendar-buttonbar-demo.html'
})
export class CalendarButtonbarDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-buttonbar-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","showButtonBar"],["selector","calendar-buttonbar-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"When "),n(3,"i"),e(4,"showButtonBar"),t(),e(5," is present, today and clear buttons are displayed at the footer."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(8,"app-code",2)),a&2&&(d(7),x("ngModel",l.date),m("showButtonBar",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var se=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [showTime]="true" [showSeconds]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [showTime]="true" [showSeconds]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core'

@Component({
    selector: 'calendar-time-demo',
    templateUrl: './calendar-time-demo.html'
})
export class CalendarTimeDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-time-demo"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","showTime","showSeconds"],["selector","calendar-time-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"TimePicker is enabled with "),n(3,"i"),e(4,"showTime"),t(),e(5," property and 24 (default) or 12 hour mode is configured using "),n(6,"i"),e(7,"hourFormat"),t(),e(8," option."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.date),m("showTime",!0)("showSeconds",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var ue=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" view="month" dateFormat="mm/yy" [readonlyInput]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-month-demo',
    templateUrl: './calendar-month-demo.html'
})
export class CalendarMonthDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-month-demo"]],decls:15,vars:3,consts:[[1,"card","flex","justify-content-center"],["view","month","dateFormat","mm/yy",3,"ngModelChange","ngModel","readonlyInput"],["selector","calendar-month-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Month only picker is enabled by specifying "),n(3,"i"),e(4,"view"),t(),e(5," as "),n(6,"i"),e(7,"month"),t(),e(8," in addition to a suitable "),n(9,"i"),e(10,"dateFormat"),t(),e(11,"."),t()(),n(12,"div",0)(13,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(14,"app-code",2)),a&2&&(d(13),x("ngModel",l.date),m("readonlyInput",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var fe=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" view="year" dateFormat="yy" inputId="yearpicker"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" view="year" dateFormat="yy" inputId="yearpicker"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core'

@Component({
    selector: 'calendar-year-demo',
    templateUrl: './calendar-year-demo.html'
})
export class CalendarYearDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-year-demo"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],["view","year","dateFormat","yy","inputId","yearpicker",3,"ngModelChange","ngModel"],["selector","calendar-year-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Similar to the month picker, year picker can be used to select years only. Set "),n(3,"i"),e(4,"view"),t(),e(5," to "),n(6,"i"),e(7,"year"),t(),e(8," to display the year picker."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.date),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var xe=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [numberOfMonths]="3"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [numberOfMonths]="3"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core'

@Component({
    selector: 'calendar-multiplemonths-demo',
    templateUrl: './calendar-multiplemonths-demo.html'
})
export class CalendarMultiplemonthsDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-multiplemonths-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","numberOfMonths"],["selector","calendar-multiplemonths-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Number of months to display is configured with the "),n(3,"i"),e(4,"numberOfMonths"),t(),e(5," property."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(8,"app-code",2)),a&2&&(d(7),x("ngModel",l.date),m("numberOfMonths",3),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();function We(o,i){o&1&&e(0,"Header")}function _e(o,i){o&1&&e(0,"Footer")}var he=(()=>{let i=class i{constructor(){this.code={basic:`<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="header">Header</ng-template>
    <ng-template pTemplate="footer">Footer</ng-template>
</p-calendar>`,html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date">
        <ng-template pTemplate="header">Header</ng-template>
        <ng-template pTemplate="footer">Footer</ng-template>
    </p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-template-demo',
    templateUrl: './calendar-template-demo.html'
})
export class CalendarTemplateDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-template-demo"]],decls:14,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["pTemplate","header"],["pTemplate","footer"],["selector","calendar-template-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Calendar UI accepts custom content using "),n(3,"i"),e(4,"header"),t(),e(5," and "),n(6,"i"),e(7,"footer"),t(),e(8," templates."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),I(11,We,1,0,"ng-template",2)(12,_e,1,0,"ng-template",3),t()(),u(13,"app-code",4)),a&2&&(d(10),x("ngModel",l.date),d(3),m("code",l.code))},dependencies:[f,s,y,E,g,F],encapsulation:2});let o=i;return o})();var Se=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar class="max-w-full" [(ngModel)]="date" [inline]="true" [showWeek]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-inline-demo',
    templateUrl: './calendar-inline-demo.html'
})
export class CalendarInlineDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-inline-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],[1,"max-w-full",3,"ngModelChange","ngModel","inline","showWeek"],["selector","calendar-inline-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Calendar is displayed as a popup by default, add "),n(3,"i"),e(4,"inline"),t(),e(5," property to customize this behavior."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(8,"app-code",2)),a&2&&(d(7),x("ngModel",l.date),m("inline",!0)("showWeek",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var ye=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [touchUI]="true" [readonlyInput]="true"></p-calendar>',html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [touchUI]="true" [readonlyInput]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core'

@Component({
    selector: 'calendar-touchui-demo',
    templateUrl: './calendar-touchui-demo.html'
})
export class CalendarTouchuiDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-touchui-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","touchUI","readonlyInput"],["selector","calendar-touchui-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"When "),n(3,"i"),e(4,"touchUI"),t(),e(5," is enabled, overlay is displayed as optimized for touch devices."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(8,"app-code",2)),a&2&&(d(7),x("ngModel",l.date),m("touchUI",!0)("readonlyInput",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var Be=o=>({textDecoration:o});function Ne(o,i){if(o&1&&(n(0,"span",4),e(1),t()),o&2){let W=i.$implicit;m("ngStyle",G(2,Be,W.day<21&&W.day>10?"line-through":"inherit")),d(),Y(W.day)}}var ge=(()=>{let i=class i{constructor(){this.code={basic:`<p-calendar [(ngModel)]="date">
    <ng-template pTemplate="date" let-date>
        <span [ngStyle]="{textDecoration: (date.day < 21 && date.day > 10) ? 'line-through' : 'inherit'}">{{date.day}}</span>
    </ng-template>
</p-calendar>`,html:`
<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date">
        <ng-template pTemplate="date" let-date>
            <span [ngStyle]="{ textDecoration: date.day < 21 && date.day > 10 ? 'line-through' : 'inherit' }">{{ date.day }}</span>
        </ng-template>
    </p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-datetemplate-demo',
    templateUrl: './calendar-datetemplate-demo.html'
})
export class CalendarDatetemplateDemo {
    date: Date[] | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-datetemplate-demo"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel"],["pTemplate","date"],["selector","calendar-datetemplate-demo",3,"code"],[3,"ngStyle"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Custom content can be placed inside date cells with the "),n(3,"i"),e(4,"ng-template"),t(),e(5," property that takes a Date as a parameter."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),I(8,Ne,2,4,"ng-template",2),t()(),u(9,"app-code",3)),a&2&&(d(7),x("ngModel",l.date),d(2),m("code",l.code))},dependencies:[R,f,s,y,E,g,F],encapsulation:2});let o=i;return o})();var Ae=()=>["/theming"],Ee=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["style-doc"]],decls:70,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),e(4,"theming"),t(),e(5," page."),t()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),t(),n(12,"th"),e(13,"Element"),t()()(),n(14,"tbody")(15,"tr")(16,"td"),e(17,"p-calendar"),t(),n(18,"td"),e(19,"Main container element"),t()(),n(20,"tr")(21,"td"),e(22,"p-calendar-w-btn"),t(),n(23,"td"),e(24,"Main container element when button is enabled."),t()(),n(25,"tr")(26,"td"),e(27,"p-calendar-timeonly"),t(),n(28,"td"),e(29,"Main container element in time picker only mode."),t()(),n(30,"tr")(31,"td"),e(32,"p-inputtext"),t(),n(33,"td"),e(34,"Input element"),t()(),n(35,"tr")(36,"td"),e(37,"p-datepicker"),t(),n(38,"td"),e(39,"Datepicker element"),t()(),n(40,"tr")(41,"td"),e(42,"p-datepicker-inline"),t(),n(43,"td"),e(44,"Datepicker element in inline mode"),t()(),n(45,"tr")(46,"td"),e(47,"p-datepicker-monthpicker"),t(),n(48,"td"),e(49,"Datepicker element in month view."),t()(),n(50,"tr")(51,"td"),e(52,"p-datepicker-touch-p"),t(),n(53,"td"),e(54,"Datepicker element in touch p mode."),t()(),n(55,"tr")(56,"td"),e(57,"p-datepicker-calendar"),t(),n(58,"td"),e(59,"Table containing dates of a month."),t()(),n(60,"tr")(61,"td"),e(62,"p-datepicker-current-day"),t(),n(63,"td"),e(64,"Cell of selected date."),t()(),n(65,"tr")(66,"td"),e(67,"p-datepicker-today"),t(),n(68,"td"),e(69,"Cell of today's date."),t()()()()()),a&2&&(d(3),m("routerLink",B(1,Ae)))},dependencies:[X,s],encapsulation:2});let o=i;return o})();var be=(()=>{let i=class i{constructor(){this.code={basic:`<label for="date1">Date</label>
<p-calendar inputId="date1"></p-calendar>

<span id="date2">Date</span>
<p-calendar ariaLabelledBy="date2"></p-calendar>

<p-calendar ariaLabel="Date"></p-calendar>`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["accessibility-doc"]],decls:336,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(n(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),t(),n(4,"p"),e(5," Value to describe the component can either be provided via "),n(6,"i"),e(7,"label"),t(),e(8," tag combined with "),n(9,"i"),e(10,"inputId"),t(),e(11," prop or using "),n(12,"i"),e(13,"aria-labelledby"),t(),e(14,", "),n(15,"i"),e(16,"aria-label"),t(),e(17," props. The input element has "),n(18,"i"),e(19,"combobox"),t(),e(20," role in addition to "),n(21,"i"),e(22,"aria-autocomplete"),t(),e(23,' as "none", '),n(24,"i"),e(25,"aria-haspopup"),t(),e(26,' as "dialog" and '),n(27,"i"),e(28,"aria-expanded"),t(),e(29," attributes. The relation between the input and the popup is created with "),n(30,"i"),e(31,"aria-controls"),t(),e(32," attribute that refers to the id of the popup. "),t(),n(33,"p"),e(34," The optional calendar button requires includes "),n(35,"i"),e(36,"aria-haspopup"),t(),e(37,", "),n(38,"i"),e(39,"aria-expanded"),t(),e(40," for states along with "),n(41,"i"),e(42,"aria-controls"),t(),e(43," to define the relation between the popup and the button. The value to read is retrieved from the "),n(44,"i"),e(45,"chooseDate"),t(),e(46," key of the aria property from the "),n(47,"a",0),e(48,"locale"),t(),e(49," API. This label is also used for the "),n(50,"i"),e(51,"aria-label"),t(),e(52," of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users about the current value. "),t(),n(53,"p"),e(54," Popup has a "),n(55,"i"),e(56,"dialog"),t(),e(57," role along with "),n(58,"i"),e(59,"aria-modal"),t(),e(60," and "),n(61,"i"),e(62,"aria-label"),t(),e(63,". The navigation buttons at the header has an "),n(64,"i"),e(65,"aria-label"),t(),e(66," retrieved from the "),n(67,"i"),e(68,"prevYear"),t(),e(69,", "),n(70,"i"),e(71,"nextYear"),t(),e(72,", "),n(73,"i"),e(74,"prevMonth"),t(),e(75,", "),n(76,"i"),e(77,"nextMonth"),t(),e(78,","),n(79,"i"),e(80,"prevDecade"),t(),e(81," and "),n(82,"i"),e(83,"nextDecade"),t(),e(84," keys of the locale aria API. Similarly month picker button uses the "),n(85,"i"),e(86,"chooseMonth"),t(),e(87," and year picker button uses the "),n(88,"i"),e(89,"chooseYear"),t(),e(90," keys. "),t(),n(91,"p"),e(92," Main date table uses "),n(93,"i"),e(94,"grid"),t(),e(95," role that contains th elements with "),n(96,"i"),e(97,"col"),t(),e(98," as the scope along with "),n(99,"i"),e(100,"abbr"),t(),e(101," tag resolving to the full name of the month. Each date cell has an "),n(102,"i"),e(103,"aria-label"),t(),e(104," referring to the full date value. Buttons at the footer utilize their readable labels as "),n(105,"i"),e(106,"aria-label"),t(),e(107," as well. Selected date also receives the "),n(108,"i"),e(109,"aria-selected"),t(),e(110," attribute. "),t(),n(111,"p"),e(112," Timepicker spinner buttons get their labels for "),n(113,"i"),e(114,"aria-label"),t(),e(115," from the aria locale API using the "),n(116,"i"),e(117,"prevHour"),t(),e(118,", "),n(119,"i"),e(120,"nextHour"),t(),e(121,", "),n(122,"i"),e(123,"prevMinute"),t(),e(124,", "),n(125,"i"),e(126,"nextMinute"),t(),e(127,", "),n(128,"i"),e(129,"prevSecond"),t(),e(130,", "),n(131,"i"),e(132,"nextSecond"),t(),e(133,", "),n(134,"i"),e(135,"am"),t(),e(136," and "),n(137,"i"),e(138,"pm"),t(),e(139," keys. "),t(),n(140,"p"),e(141,"Calendar also includes a hidden section that is only available to screen readers with "),n(142,"i"),e(143,"aria-live"),t(),e(144,' as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.'),t()(),u(145,"app-code",1),n(146,"h3"),e(147,"Choose Date Button Keyboard Support"),t(),n(148,"div",2)(149,"table",3)(150,"thead")(151,"tr")(152,"th"),e(153,"Key"),t(),n(154,"th"),e(155,"Function"),t()()(),n(156,"tbody")(157,"tr")(158,"td")(159,"i"),e(160,"space"),t()(),n(161,"td"),e(162,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()(),n(163,"tr")(164,"td")(165,"i"),e(166,"enter"),t()(),n(167,"td"),e(168,"Opens popup and moves focus to the selected date, if there is none focuses on today."),t()()()()(),n(169,"h3"),e(170,"Popup Keyboard Support"),t(),n(171,"div",2)(172,"table",3)(173,"thead")(174,"tr")(175,"th"),e(176,"Key"),t(),n(177,"th"),e(178,"Function"),t()()(),n(179,"tbody")(180,"tr")(181,"td")(182,"i"),e(183,"escape"),t()(),n(184,"td"),e(185,"Closes the popup and moves focus to the input element."),t()(),n(186,"tr")(187,"td")(188,"i"),e(189,"tab"),t()(),n(190,"td"),e(191,"Moves focus to the next focusable element within the popup."),t()(),n(192,"tr")(193,"td")(194,"i"),e(195,"shift"),t(),e(196," + "),n(197,"i"),e(198,"tab"),t()(),n(199,"td"),e(200,"Moves focus to the next focusable element within the popup."),t()()()()(),n(201,"h3"),e(202,"Header Buttons Keyboard Support"),t(),n(203,"div",2)(204,"table",3)(205,"thead")(206,"tr")(207,"th"),e(208,"Key"),t(),n(209,"th"),e(210,"Function"),t()()(),n(211,"tbody")(212,"tr")(213,"td")(214,"i"),e(215,"enter"),t()(),n(216,"td"),e(217,"Triggers the button action."),t()(),n(218,"tr")(219,"td")(220,"i"),e(221,"space"),t()(),n(222,"td"),e(223,"Triggers the button action."),t()()()()(),n(224,"h3"),e(225,"Date Grid Keyboard Support"),t(),n(226,"div",2)(227,"table",3)(228,"thead")(229,"tr")(230,"th"),e(231,"Key"),t(),n(232,"th"),e(233,"Function"),t()()(),n(234,"tbody")(235,"tr")(236,"td")(237,"i"),e(238,"enter"),t()(),n(239,"td"),e(240,"Selects the date, closes the popup and moves focus to the input element."),t()(),n(241,"tr")(242,"td")(243,"i"),e(244,"space"),t()(),n(245,"td"),e(246,"Selects the date, closes the popup and moves focus to the input element."),t()(),n(247,"tr")(248,"td")(249,"i"),e(250,"up arrow"),t()(),n(251,"td"),e(252,"Moves focus to the same day of the previous week."),t()(),n(253,"tr")(254,"td")(255,"i"),e(256,"down arrow"),t()(),n(257,"td"),e(258,"Moves focus to the same day of the next week."),t()(),n(259,"tr")(260,"td")(261,"i"),e(262,"right arrow"),t()(),n(263,"td"),e(264,"Moves focus to the next day."),t()(),n(265,"tr")(266,"td")(267,"i"),e(268,"left arrow"),t()(),n(269,"td"),e(270,"Moves focus to the previous day."),t()(),n(271,"tr")(272,"td")(273,"i"),e(274,"home"),t()(),n(275,"td"),e(276,"Moves focus to the first day of the current week."),t()(),n(277,"tr")(278,"td")(279,"i"),e(280,"end"),t()(),n(281,"td"),e(282,"Moves focus to the last day of the current week."),t()(),n(283,"tr")(284,"td")(285,"i"),e(286,"page up"),t()(),n(287,"td"),e(288,"Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker."),t()(),n(289,"tr")(290,"td")(291,"i"),e(292,"shift"),t(),e(293," + "),n(294,"i"),e(295,"page up"),t()(),n(296,"td"),e(297,"Changes the date to previous year in date picker mode. Has no effect in month or year picker"),t()(),n(298,"tr")(299,"td")(300,"i"),e(301,"page down"),t()(),n(302,"td"),e(303,"Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker."),t()(),n(304,"tr")(305,"td")(306,"i"),e(307,"shift"),t(),e(308," + "),n(309,"i"),e(310,"page down"),t()(),n(311,"td"),e(312,"Changes the date to next year in date picker mode. Has no effect in month or year picker"),t()()()()(),n(313,"h3"),e(314,"Footer Buttons Keyboard Support"),t(),n(315,"div",2)(316,"table",3)(317,"thead")(318,"tr")(319,"th"),e(320,"Key"),t(),n(321,"th"),e(322,"Function"),t()()(),n(323,"tbody")(324,"tr")(325,"td")(326,"i"),e(327,"enter"),t()(),n(328,"td"),e(329,"Triggers the button action."),t()(),n(330,"tr")(331,"td")(332,"i"),e(333,"space"),t()(),n(334,"td"),e(335,"Triggers the button action."),t()()()()()()),a&2&&(d(145),m("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[f,s],encapsulation:2});let o=i;return o})();var ve=(()=>{let i=class i{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-calendar formControlName="date"></p-calendar>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-calendar formControlName="date"></p-calendar>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'calendar-reactive-forms-demo',
    templateUrl: './calendar-reactive-forms-demo.html'
})
export class CalendarReactiveFormsDemo {
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.formGroup = new FormGroup({
            date: new FormControl<Date | null>(null)
        });
    } 
}`}}ngOnInit(){this.formGroup=new K({date:new H(null)})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["reactive-forms-doc"]],decls:10,vars:2,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","date"],["selector","calendar-reactive-forms-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Calendar can also be used with reactive forms. In this case, the "),n(3,"i"),e(4,"formControlName"),t(),e(5," property is used to bind the component to a form control."),t()(),n(6,"div",0)(7,"form",1),u(8,"p-calendar",2),t()(),u(9,"app-code",3)),a&2&&(d(7),m("formGroup",l.formGroup),d(2),m("code",l.code))},dependencies:[f,s,V,y,z,g,q,Z],encapsulation:2});let o=i;return o})();var Ce=(()=>{let i=class i{constructor(){this.code={basic:`<span class="p-float-label">
    <p-calendar [(ngModel)]="date" inputId="birth_date"></p-calendar>
    <label for="birth_date">Birth Date</label>
</span>`,html:`<div class="card flex justify-content-center">
    <span class="p-float-label">
    <p-calendar [(ngModel)]="date" inputId="birth_date"></p-calendar>
    <label for="birth_date">Birth Date</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-float-label-demo',
    templateUrl: './calendar-float-label-demo.html'
})
export class CalendarFloatLabelDemo {
    date: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-float-label-demo"]],decls:9,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["inputId","birth_date",3,"ngModelChange","ngModel"],["for","birth_date"],["selector","calendar-float-label-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"A floating label appears on top of the input field when focused."),t()(),n(3,"div",0)(4,"span",1)(5,"p-calendar",2),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t(),n(6,"label",3),e(7,"Birth Date"),t()()(),u(8,"app-code",4)),a&2&&(d(5),x("ngModel",l.date),d(3),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var Me=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" class="ng-invalid ng-dirty"></p-calendar>',html:`<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" class="ng-invalid ng-dirty"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-invalid-demo',
    templateUrl: './calendar-invalid-demo.html'
})
export class CalendarInvalidDemo {
    date: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-invalid-demo"]],decls:12,vars:2,consts:[[1,"card","flex","justify-content-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","ngModel"],["selector","calendar-invalid-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),n(3,"i"),e(4,"ng-invalid"),t(),e(5," and "),n(6,"i"),e(7,"ng-dirty"),t(),e(8," class to indicate a failed validation."),t()(),n(9,"div",0)(10,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(11,"app-code",2)),a&2&&(d(10),x("ngModel",l.date),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var De=(()=>{let i=class i{constructor(){this.code={basic:'<p-calendar [(ngModel)]="date" [disabled]="true"></p-calendar>',html:`<div class="card flex justify-content-center">
    <p-calendar [(ngModel)]="date" [disabled]="true"></p-calendar>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'calendar-disabled-demo',
    templateUrl: './calendar-disabled-demo.html'
})
export class CalendarDisabledDemo {
    date: Date | undefined;
}`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["calendar-disabled-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"ngModelChange","ngModel","disabled"],["selector","calendar-disabled-demo",3,"code"]],template:function(a,l){a&1&&(n(0,"app-docsectiontext")(1,"p"),e(2,"When "),n(3,"i"),e(4,"disabled"),t(),e(5," is present, the element cannot be edited and focused."),t()(),n(6,"div",0)(7,"p-calendar",1),S("ngModelChange",function(r){return h(l.date,r)||(l.date=r),r}),t()(),u(8,"app-code",2)),a&2&&(d(7),x("ngModel",l.date),m("disabled",!0),d(),m("code",l.code))},dependencies:[f,s,y,E,g],encapsulation:2});let o=i;return o})();var we=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=T({imports:[N,_,ee,A,J,$,Q,A]});let o=i;return o})();var je=()=>["Calendar"],Te=(()=>{let i=class i{constructor(){this.docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:ie},{id:"reactive-forms",label:"Reactive Forms",component:ve},{id:"format",label:"Format",component:ae},{id:"locale",label:"Locale",component:oe},{id:"icon",label:"Icon",component:re},{id:"minmax",label:"Min / Max",component:de},{id:"multiple",label:"Multiple",component:me},{id:"range",label:"Range",component:pe},{id:"buttonbar",label:"ButtonBar",component:ce},{id:"time",label:"Time",component:se},{id:"monthpicker",label:"Month Picker",component:ue},{id:"yearpicker",label:"Year Picker",component:fe},{id:"multiplemonths",label:"Multiple Months",component:xe},{id:"customcontent",label:"Custom Content",component:he},{id:"datetemplate",label:"Date Template",component:ge},{id:"touchui",label:"TouchUI",component:ye},{id:"inline",label:"Inline",component:Se},{id:"floatlabel",label:"Float Label",component:Ce},{id:"invalid",label:"Invalid",component:Me},{id:"disabled",label:"Disabled",component:De},{id:"style",label:"Style",component:Ee},{id:"accessibility",label:"Accessibility",component:be}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Calendar Component","header","Calendar","description","Calendar is an input component to select a date.",3,"docs","apiDocs"]],template:function(a,l){a&1&&u(0,"app-doc",0),a&2&&m("docs",l.docs)("apiDocs",B(2,je))},dependencies:[te],encapsulation:2});let o=i;return o})();var ke=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=T({imports:[_.forChild([{path:"",component:Te}]),_]});let o=i;return o})();var ei=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=T({imports:[N,ke,we]});let o=i;return o})();export{ei as CalendarDemoModule};
