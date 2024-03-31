import{a as y,b as ie}from"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as g,b as re,c as G}from"./chunk-AS5FXEGH.js";import{a as u,b as le}from"./chunk-X2ZDE2AM.js";import{b as Y,e as h,f as J,g as K,h as H,i as S,j as q,m as Q,n as X,p as Z,q as $,r as ne,s as ae}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as oe,q as N,y as te}from"./chunk-UWMVDULA.js";import{o as ee,t as P}from"./chunk-N5X6XDRN.js";import{Fc as j,Jb as e,Kb as D,Nb as C,Nc as W,Ob as w,Pb as v,Sa as p,Sb as z,V as O,da as c,ea as k,ib as _,kb as d,ma as A,na as R,ob as L,rb as t,sb as o,tb as s,xb as U,yb as B,zb as F}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var de=(()=>{let i=class i{constructor(){this.code={typescript:"import { DropdownModule } from 'primeng/dropdown';"}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,l){a&1&&s(0,"app-code",0),a&2&&d("code",l.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let n=i;return n})();var pe=(()=>{let i=class i{constructor(){this.code={basic:'<p-dropdown [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City"></p-dropdown>',html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City"></p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'dropdown-basic-demo',
    templateUrl: './dropdown-basic-demo.html'
})
export class DropdownBasicDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-basic-demo"]],decls:24,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select a City",3,"ngModelChange","options","ngModel","showClear"],["selector","dropdown-basic-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Dropdown is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),o(),e(5," property along with an "),t(6,"i"),e(7,"options"),o(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),o(),e(11," and "),t(12,"i"),e(13,"optionValue"),o(),e(14," properties respectively. Note that, when options are simple primitive values such as a string array, no "),t(15,"i"),e(16,"optionLabel"),o(),e(17," and "),t(18,"i"),e(19,"optionValue"),o(),e(20," would be necessary. "),o()(),t(21,"div",0)(22,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),s(23,"app-code",2)),a&2&&(p(22),d("options",l.cities),C("ngModel",l.selectedCity),d("showClear",!0),p(),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();var me=(()=>{let i=class i{constructor(){this.code={basic:'<p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name"></p-dropdown>',html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" [editable]="true" optionLabel="name"></p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-editable-demo',
    templateUrl: './dropdown-editable-demo.html'
})
export class DropdownEditableDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-editable-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select a City","optionLabel","name",3,"ngModelChange","options","ngModel","editable"],["selector","dropdown-editable-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"editable"),o(),e(5," is present, the input can also be entered with typing."),o()(),t(6,"div",0)(7,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),s(8,"app-code",2)),a&2&&(p(7),d("options",l.cities),C("ngModel",l.selectedCity),d("editable",!0),p(),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();function De(n,i){if(n&1&&(t(0,"div",4),s(1,"img",5),t(2,"span"),e(3),o()()),n&2){let f=i.$implicit;p(),L("mr-2 flag flag-"+f.value),p(2),D(f.label)}}var se=(()=>{let i=class i{constructor(){this.code={basic:`<p-dropdown [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true">
    <ng-template let-group pTemplate="group">
        <div class="flex align-items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-dropdown>`,html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="groupedCities" [(ngModel)]="selectedCity" placeholder="Select a City" [group]="true">
        <ng-template let-group pTemplate="group">
            <div class="flex align-items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-dropdown>
</div>`,typescript:`
import { SelectItemGroup } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
    selector: 'dropdown-group-demo',
    templateUrl: './dropdown-group-demo.html'
})
export class DropdownGroupDemo {
    groupedCities: SelectItemGroup[];

    selectedCity: string | undefined;

    constructor() {
        this.groupedCities = [
            {
                label: 'Germany',
                value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA',
                value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan',
                value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }
}`},this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-group-demo"]],decls:7,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select a City",3,"ngModelChange","options","ngModel","group"],["pTemplate","group"],["selector","dropdown-group-demo",3,"code"],[1,"flex","align-items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),o()(),t(3,"div",0)(4,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),_(5,De,4,3,"ng-template",2),o()(),s(6,"app-code",3)),a&2&&(p(4),d("options",l.groupedCities),C("ngModel",l.selectedCity),d("group",!0),p(2),d("code",l.code))},dependencies:[u,g,h,S,y,N],encapsulation:2});let n=i;return n})();function Ie(n,i){if(n&1&&(t(0,"div",6),s(1,"img",7),t(2,"div"),e(3),o()()),n&2){let f=F().$implicit;p(),L("flag flag-"+f.code.toLowerCase()),p(2),D(f.name)}}function Te(n,i){if(n&1&&_(0,Ie,4,3,"div",5),n&2){let f=i.$implicit;d("ngIf",f)}}function _e(n,i){if(n&1&&(t(0,"div",6),s(1,"img",7),t(2,"div"),e(3),o()()),n&2){let f=i.$implicit;p(),L("flag flag-"+f.code.toLowerCase()),p(2),D(f.name)}}var ce=(()=>{let i=class i{constructor(){this.code={basic:`<p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [showClear]="true" placeholder="Select a Country">
    <ng-template pTemplate="selectedItem">
        <div class="flex align-items-center gap-2" *ngIf="selectedCountry">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px"/>
            <div>{{ selectedCountry.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country pTemplate="item">
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-dropdown>`,html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [showClear]="true" placeholder="Select a Country">
        <ng-template pTemplate="selectedItem">
            <div class="flex align-items-center gap-2" *ngIf="selectedCountry">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px"/>
                <div>{{ selectedCountry.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dropdown-template-demo',
    templateUrl: './dropdown-template-demo.html'
})
export class DropdownTemplateDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`}}ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-template-demo"]],decls:17,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select a country",3,"ngModelChange","options","ngModel","showClear"],["pTemplate","selectedItem"],["pTemplate","item"],["selector","dropdown-template-demo",3,"code"],["class","flex align-items-center gap-2",4,"ngIf"],[1,"flex","align-items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," Both the selected option and the options list can be templated to provide customizated representation. Use "),t(3,"i"),e(4,"selectedItem"),o(),e(5," template to customize the selected label display and the "),t(6,"i"),e(7,"item"),o(),e(8," template to change the content of the options in the dropdown panel. In addition when grouping is enabled, "),t(9,"i"),e(10,"group"),o(),e(11," template is available to customize the option groups. All templates get the option instance as the default local template variable. "),o()(),t(12,"div",0)(13,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCountry,m)||(l.selectedCountry=m),m}),_(14,Te,1,1,"ng-template",2)(15,_e,4,3,"ng-template",3),o()(),s(16,"app-code",4)),a&2&&(p(13),d("options",l.countries),C("ngModel",l.selectedCountry),d("showClear",!0),p(3),d("code",l.code))},dependencies:[j,u,g,h,S,y,N],encapsulation:2});let n=i;return n})();var ue=(()=>{let i=class i{constructor(){this.code={basic:'<p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true"></p-dropdown>',html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" [disabled]="true"></p-dropdown>
</div>`,typescript:`
import { Component } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-disabled-demo',
    templateUrl: './dropdown-disabled-demo.html'
})
export class DropdownDisabledDemo {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-disabled-demo"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select a City","optionLabel","name",3,"ngModelChange","options","ngModel","disabled"],["selector","dropdown-disabled-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),o(),e(5," is present, the element cannot be edited and focused."),o()(),t(6,"div",0)(7,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),s(8,"app-code",2)),a&2&&(p(7),d("options",l.cities),C("ngModel",l.selectedCity),d("disabled",!0),p(),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();var fe=(()=>{let i=class i{constructor(){this.code={basic:'<p-dropdown [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="ng-dirty ng-invalid"></p-dropdown>',html:`
<div class="card flex justify-content-center">
<p-dropdown [options]="cities" [(ngModel)]="selectedCity" optionLabel="name" [showClear]="true" placeholder="Select a City" class="ng-dirty ng-invalid"></p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'dropdown-invalid-demo',
    templateUrl: './dropdown-invalid-demo.html'
})
export class DropdownInvalidDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-invalid-demo"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select a City",1,"ng-dirty","ng-invalid",3,"ngModelChange","options","ngModel","showClear"],["selector","dropdown-invalid-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),o(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),o(),e(8," class to indicate a failed validation."),o()(),t(9,"div",0)(10,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),o()(),s(11,"app-code",2)),a&2&&(p(10),d("options",l.cities),C("ngModel",l.selectedCity),d("showClear",!0),p(),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();var ge=(()=>{let i=class i{constructor(){this.code={basic:`<p-dropdown [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" 
    [virtualScroll]="true" [virtualScrollItemSize]="38"></p-dropdown>`,html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38"></p-dropdown>
</div>`,typescript:`
import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
    selector: 'dropdown-virtualscroll-demo',
    templateUrl: './dropdown-virtualscroll-demo.html'
})
export class DropdownVirtualscrollDemo {
    items: SelectItem[];
    
    selectedItem: string | undefined;

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`},this.items=[];for(let r=0;r<1e4;r++)this.items.push({label:"Item "+r,value:"Item "+r})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-virtualscroll-demo"]],decls:12,vars:5,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select Item",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize"],["selector","dropdown-virtualscroll-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),o(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),o(),e(8," to specify the height of an item. "),o()(),t(9,"div",0)(10,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedItem,m)||(l.selectedItem=m),m}),o()(),s(11,"app-code",2)),a&2&&(p(10),d("options",l.items),C("ngModel",l.selectedItem),d("virtualScroll",!0)("virtualScrollItemSize",38),p(),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();var he=(()=>{let i=class i{constructor(){this.loading=!1,this.loadLazyTimeout=null,this.options={delay:250,showLoader:!0,lazy:!0,onLazyLoad:this.onLazyLoad.bind(this)},this.code={basic:`<p-dropdown 
    [options]="items" 
    [(ngModel)]="selectedItem" 
    placeholder="Select Item" 
    [virtualScroll]="true" 
    [virtualScrollItemSize]="38" 
    [virtualScrollOptions]="options"
></p-dropdown>`,html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="items" [(ngModel)]="selectedItem" placeholder="Select Item" [virtualScroll]="true" [virtualScrollItemSize]="38" [virtualScrollOptions]="options"></p-dropdown>
</div>`,typescript:`
import { SelectItem } from 'primeng/api';
import { Component } from '@angular/core';

@Component({
    selector: 'dropdown-lazy-virtualscroll-demo',
    templateUrl: './dropdown-lazy-virtualscroll-demo.html'
})
export class DropdownLazyVirtualscrollDemo {
    items: SelectItem[];

    selectedItem: string | undefined;

    loading: boolean = false;

    loadLazyTimeout = null;

    options: ScrollerOptions = {
        delay: 250,
        showLoader: true,
        lazy: true,
        onLazyLoad: this.onLazyLoad.bind(this)
    };

    constructor() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
    onLazyLoad(event) {
        this.loading = true;

        if (this.loadLazyTimeout) {
            clearTimeout(this.loadLazyTimeout);
        }

        //imitate delay of a backend call
        this.loadLazyTimeout = setTimeout(() => {
            const { first, last } = event;
            const items = [...this.items];

            for (let i = first; i < last; i++) {
                items[i] = { label: \`Item #\${i}\`, value: i };
            }

            this.items = items;
            this.loading = false;
        }, Math.random() * 1000 + 250);
    }

}`},this.items=[];for(let r=0;r<1e4;r++)this.items.push({label:"Item "+r,value:"Item "+r})}onLazyLoad(r){this.loading=!0,this.loadLazyTimeout&&clearTimeout(this.loadLazyTimeout),this.loadLazyTimeout=setTimeout(()=>{let{first:a,last:l}=r,b=[...this.items];for(let m=a;m<l;m++)b[m]={label:`Item #${m}`,value:m};this.items=b,this.loading=!1},Math.random()*1e3+250)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-lazy-virtualscroll-demo"]],decls:3,vars:6,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select Item",3,"ngModelChange","options","ngModel","virtualScroll","virtualScrollItemSize","virtualScrollOptions"],["selector","dropdown-lazy-virtualscroll-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"div",0)(1,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedItem,m)||(l.selectedItem=m),m}),o()(),s(2,"app-code",2)),a&2&&(p(),d("options",l.items),C("ngModel",l.selectedItem),d("virtualScroll",!0)("virtualScrollItemSize",38)("virtualScrollOptions",l.options),p(),d("code",l.code))},dependencies:[u,h,S,y],encapsulation:2});let n=i;return n})();function Le(n,i){if(n&1&&(t(0,"div",5)(1,"div"),e(2),o()()),n&2){let f=i.$implicit;p(2),D(f.name)}}function Fe(n,i){if(n&1&&(t(0,"div",5)(1,"div"),e(2),o()()),n&2){let f=i.$implicit;p(2),D(f.name)}}var ye=(()=>{let i=class i{constructor(){this.code={basic:`<p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
    <ng-template pTemplate="selectedItem" let-selectedOption>
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px"/>
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country pTemplate="item">
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-dropdown>`,html:`
<div class="card flex justify-content-center">
    <p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country">
        <ng-template pTemplate="selectedItem" let-selectedOption>
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px"/>
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dropdown-filter-demo',
    templateUrl: './dropdown-filter-demo.html'
})
export class DropdownFilterDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: string | undefined;

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }
}`}}ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-filter-demo"]],decls:11,vars:5,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","filterBy","name","placeholder","Select a Country",3,"ngModelChange","options","ngModel","filter","showClear"],["pTemplate","selectedItem"],["pTemplate","item"],["selector","dropdown-filter-demo",3,"code"],[1,"flex","align-items-center","gap-2"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Dropdown provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),o(),e(5," property."),o()(),t(6,"div",0)(7,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCountry,m)||(l.selectedCountry=m),m}),_(8,Le,3,1,"ng-template",2)(9,Fe,3,1,"ng-template",3),o()(),s(10,"app-code",4)),a&2&&(p(7),d("options",l.countries),C("ngModel",l.selectedCountry),d("filter",!0)("showClear",!0),p(3),d("code",l.code))},dependencies:[u,g,h,S,y,N],encapsulation:2});let n=i;return n})();function Ne(n,i){if(n&1){let f=U();t(0,"div",6)(1,"div",7),B("click",function(a){return A(f),R(a.stopPropagation())}),t(2,"span",8),s(3,"i",9),o(),t(4,"input",10),v("ngModelChange",function(a){A(f);let l=F();return w(l.filterValue,a)||(l.filterValue=a),R(a)}),B("keyup",function(a){let l=A(f).options,b=F();return R(b.customFilterFunction(a,l))}),o()(),t(5,"button",11),B("click",function(){let a=A(f).options,l=F();return R(l.resetFunction(a))}),o()()}if(n&2){let f=F();p(4),C("ngModel",f.filterValue)}}function Oe(n,i){if(n&1&&(t(0,"div",12),s(1,"img",13),t(2,"div"),e(3),o()()),n&2){let f=i.$implicit,r=F();p(),L("flag flag-"+r.selectedCountry.code.toLowerCase()),p(2),D(f.name)}}function ke(n,i){if(n&1&&(t(0,"div",12),s(1,"img",13),t(2,"div"),e(3),o()()),n&2){let f=i.$implicit;p(),L("flag flag-"+f.code.toLowerCase()),p(2),D(f.name)}}var Ce=(()=>{let i=class i{constructor(){this.filterValue="",this.code={basic:`<p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" styleClass="w-20rem">
        <ng-template pTemplate="filter" let-options="options">
            <div class="flex gap-1">
                <div class="p-inputgroup" (click)="$event.stopPropagation()">
                    <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                    <input type="text" pInputText placeholder="Filter" [(ngModel)]="filterValue" (keyup)="customFilterFunction($event, options)" />
                </div>
                <button pButton icon="pi pi-times" (click)="resetFunction(options)"></button>
            </div>
        </ng-template>
        <ng-template pTemplate="selectedItem" let-selectedOption>
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
                <div>{{ selectedOption.name }}</div>
            </div>
        </ng-template>
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
</p-dropdown>`,html:`<div class="card flex justify-content-center">
<p-dropdown [options]="countries" [(ngModel)]="selectedCountry" optionLabel="name" [filter]="true" filterBy="name" [showClear]="true" placeholder="Select a Country" styleClass="w-20rem">
    <ng-template pTemplate="filter" let-options="options">
        <div class="flex gap-1">
            <div class="p-inputgroup" (click)="$event.stopPropagation()">
                <span class="p-inputgroup-addon"><i class="pi pi-search"></i></span>
                <input type="text" pInputText placeholder="Filter" [(ngModel)]="filterValue" (keyup)="customFilterFunction($event, options)" />
            </div>
            <button pButton icon="pi pi-times" (click)="resetFunction(options)"></button>
        </div>
    </ng-template>
    <ng-template pTemplate="selectedItem" let-selectedOption>
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + selectedCountry.code.toLowerCase()" style="width: 18px" />
            <div>{{ selectedOption.name }}</div>
        </div>
    </ng-template>
    <ng-template let-country pTemplate="item">
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-dropdown>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { DropdownFilterOptions } from 'primeng/dropdown';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'dropdown-custom-filter-demo',
    templateUrl: './dropdown-custom-filter-demo.html'
})
export class DropdownCustomFilterDemo implements OnInit {
    countries: City[] | undefined;

    selectedCountry: string | undefined;

    filterValue: string | undefined = '';

    ngOnInit() {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
        ];
    }

    resetFunction(options: DropdownFilterOptions) {
        options.reset();
        this.filterValue = '';
    }

    customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
        options.filter(event);
    }
}`}}ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}resetFunction(r){r.reset(),this.filterValue=""}customFilterFunction(r,a){a.filter(r)}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-custom-filter-demo"]],decls:12,vars:5,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","filterBy","name","placeholder","Select a Country",3,"ngModelChange","options","ngModel","filter","showClear"],["pTemplate","filter"],["pTemplate","selectedItem"],["pTemplate","item"],["selector","dropdown-custom-filter-demo",3,"code"],[1,"flex","gap-1"],[1,"p-inputgroup",3,"click"],[1,"p-inputgroup-addon"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Filter",3,"ngModelChange","keyup","ngModel"],["pButton","","icon","pi pi-times",3,"click"],[1,"flex","align-items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Custom filter can be applied with the "),t(3,"i"),e(4,"filterTemplate"),o(),e(5,"."),o()(),t(6,"div",0)(7,"p-dropdown",1),v("ngModelChange",function(m){return w(l.selectedCountry,m)||(l.selectedCountry=m),m}),_(8,Ne,6,1,"ng-template",2)(9,Oe,4,3,"ng-template",3)(10,ke,4,3,"ng-template",4),o()(),s(11,"app-code",5)),a&2&&(p(7),d("options",l.countries),C("ngModel",l.selectedCountry),d("filter",!0)("showClear",!0),p(4),d("code",l.code))},dependencies:[u,g,Y,h,S,y,N,te,ne],encapsulation:2});let n=i;return n})();var we=(()=>{let i=class i{constructor(){this.code={basic:`<span class="p-float-label">
    <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" inputId="float-label"></p-dropdown>
    <label for="float-label">Select a City</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-dropdown [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name" inputId="float-label"></p-dropdown>
        <label for="float-label">Select a City</label>
    </span>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-floatlabel-demo',
    templateUrl: './dropdown-floatlabel-demo.html'
})
export class DropdownFloatlabelDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["dropdown-floatlabel-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["optionLabel","name","inputId","float-label",3,"ngModelChange","options","ngModel"],["for","float-label"],["selector","dropdown-floatlabel-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A floating label appears on top of the input field when focused."),o()(),t(3,"div",0)(4,"span",1)(5,"p-dropdown",2),v("ngModelChange",function(m){return w(l.selectedCity,m)||(l.selectedCity=m),m}),o(),t(6,"label",3),e(7,"Select a City"),o()()(),s(8,"app-code",4)),a&2&&(p(5),d("options",l.cities),C("ngModel",l.selectedCity),p(3),d("code",l.code))},dependencies:[u,g,h,S,y],encapsulation:2});let n=i;return n})();var Ae=()=>["/theming"],ve=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["style-doc"]],decls:70,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"a",0),e(4,"theming"),o(),e(5," page."),o()(),t(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),o(),t(12,"th"),e(13,"Element"),o()()(),t(14,"tbody")(15,"tr")(16,"td"),e(17,"p-dropdown"),o(),t(18,"td"),e(19,"Container element."),o()(),t(20,"tr")(21,"td"),e(22,"p-dropdown-clearable"),o(),t(23,"td"),e(24,"Container element when showClear is on."),o()(),t(25,"tr")(26,"td"),e(27,"p-dropdown-label"),o(),t(28,"td"),e(29,"Element to display label of selected option."),o()(),t(30,"tr")(31,"td"),e(32,"p-dropdown-trigger"),o(),t(33,"td"),e(34,"Icon element."),o()(),t(35,"tr")(36,"td"),e(37,"p-dropdown-panel"),o(),t(38,"td"),e(39,"Icon element."),o()(),t(40,"tr")(41,"td"),e(42,"p-dropdown-items-wrapper"),o(),t(43,"td"),e(44,"Wrapper element of items list."),o()(),t(45,"tr")(46,"td"),e(47,"p-dropdown-items"),o(),t(48,"td"),e(49,"List element of items."),o()(),t(50,"tr")(51,"td"),e(52,"p-dropdown-item"),o(),t(53,"td"),e(54,"An item in the list."),o()(),t(55,"tr")(56,"td"),e(57,"p-dropdown-filter-container"),o(),t(58,"td"),e(59,"Container of filter input."),o()(),t(60,"tr")(61,"td"),e(62,"p-dropdown-filter"),o(),t(63,"td"),e(64,"Filter element."),o()(),t(65,"tr")(66,"td"),e(67,"p-dropdown-open"),o(),t(68,"td"),e(69,"Container element when overlay is visible."),o()()()()()),a&2&&(p(3),d("routerLink",z(1,Ae)))},dependencies:[ee,g],encapsulation:2});let n=i;return n})();var Se=(()=>{let i=class i{constructor(){this.code={basic:`<span id="dd1">Options</span>
<p-dropdown ariaLabelledBy="dd1"></p-dropdown>

<p-dropdown ariaLabel="Options"></p-dropdown>`}}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["accessibility-doc"]],decls:209,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),o(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),o(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),o(),e(11," props. The dropdown element has a "),t(12,"i"),e(13,"combobox"),o(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),o(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),o(),e(20," attributes. If the editable option is enabled "),t(21,"i"),e(22,"aria-autocomplete"),o(),e(23," is also added. The relation between the combobox and the popup is created with "),t(24,"i"),e(25,"aria-controls"),o(),e(26," and "),t(27,"i"),e(28,"aria-activedescendant"),o(),e(29," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),o(),t(30,"p"),e(31," The popup list has an id that refers to the "),t(32,"i"),e(33,"aria-controls"),o(),e(34," attribute of the "),t(35,"i"),e(36,"combobox"),o(),e(37," element and uses "),t(38,"i"),e(39,"listbox"),o(),e(40," as the role. Each list item has an "),t(41,"i"),e(42,"option"),o(),e(43," role, an id to match the "),t(44,"i"),e(45,"aria-activedescendant"),o(),e(46," of the input element along with "),t(47,"i"),e(48,"aria-label"),o(),e(49,", "),t(50,"i"),e(51,"aria-selected"),o(),e(52," and "),t(53,"i"),e(54,"aria-disabled"),o(),e(55," attributes. "),o(),t(56,"p"),e(57,"If filtering is enabled, "),t(58,"i"),e(59,"filterInputProps"),o(),e(60," can be defined to give "),t(61,"i"),e(62,"aria-*"),o(),e(63," props to the filter input element."),o()(),s(64,"app-code",0),t(65,"h3"),e(66,"Closed State Keyboard Support"),o(),t(67,"div",1)(68,"table",2)(69,"thead")(70,"tr")(71,"th"),e(72,"Key"),o(),t(73,"th"),e(74,"Function"),o()()(),t(75,"tbody")(76,"tr")(77,"td")(78,"i"),e(79,"tab"),o()(),t(80,"td"),e(81,"Moves focus to the dropdown element."),o()(),t(82,"tr")(83,"td")(84,"i"),e(85,"space"),o()(),t(86,"td"),e(87,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),o()(),t(88,"tr")(89,"td")(90,"i"),e(91,"down arrow"),o()(),t(92,"td"),e(93,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),o()(),t(94,"tr")(95,"td")(96,"i"),e(97,"up arrow"),o()(),t(98,"td"),e(99,"Opens the popup and moves visual focus to the selected option, if there is none then last option receives the focus."),o()()()()(),t(100,"h3"),e(101,"Popup Keyboard Support"),o(),t(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),e(107,"Key"),o(),t(108,"th"),e(109,"Function"),o()()(),t(110,"tbody")(111,"tr")(112,"td")(113,"i"),e(114,"tab"),o()(),t(115,"td"),e(116,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),o()(),t(117,"tr")(118,"td")(119,"i"),e(120,"shift"),o(),e(121," + "),t(122,"i"),e(123,"tab"),o()(),t(124,"td"),e(125,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),o()(),t(126,"tr")(127,"td")(128,"i"),e(129,"enter"),o()(),t(130,"td"),e(131,"Selects the focused option and closes the popup."),o()(),t(132,"tr")(133,"td")(134,"i"),e(135,"space"),o()(),t(136,"td"),e(137,"Selects the focused option and closes the popup."),o()(),t(138,"tr")(139,"td")(140,"i"),e(141,"escape"),o()(),t(142,"td"),e(143,"Closes the popup, moves focus to the dropdown element."),o()(),t(144,"tr")(145,"td")(146,"i"),e(147,"down arrow"),o()(),t(148,"td"),e(149,"Moves focus to the next option, if there is none then visual focus does not change."),o()(),t(150,"tr")(151,"td")(152,"i"),e(153,"up arrow"),o()(),t(154,"td"),e(155,"Moves focus to the previous option, if there is none then visual focus does not change."),o()(),t(156,"tr")(157,"td")(158,"i"),e(159,"right arrow"),o()(),t(160,"td"),e(161,"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character left."),o()(),t(162,"tr")(163,"td")(164,"i"),e(165,"left arrow"),o()(),t(166,"td"),e(167,"If the dropdown is editable, removes the visual focus from the current option and moves input cursor to one character right."),o()(),t(168,"tr")(169,"td")(170,"i"),e(171,"home"),o()(),t(172,"td"),e(173,"If the dropdown is editable, moves input cursor at the end, if not then moves focus to the first option."),o()(),t(174,"tr")(175,"td")(176,"i"),e(177,"end"),o()(),t(178,"td"),e(179,"If the dropdown is editable, moves input cursor at the beginning, if not then moves focus to the last option."),o()(),t(180,"tr")(181,"td")(182,"i"),e(183,"any printable character"),o()(),t(184,"td"),e(185,"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."),o()()()()(),t(186,"h3"),e(187,"Filter Input Keyboard Support"),o(),t(188,"div",1)(189,"table",2)(190,"thead")(191,"tr")(192,"th"),e(193,"Key"),o(),t(194,"th"),e(195,"Function"),o()()(),t(196,"tbody")(197,"tr")(198,"td")(199,"i"),e(200,"enter"),o()(),t(201,"td"),e(202,"Closes the popup and moves focus to the dropdown element."),o()(),t(203,"tr")(204,"td")(205,"i"),e(206,"escape"),o()(),t(207,"td"),e(208,"Closes the popup and moves focus to the dropdown element."),o()()()()()()),a&2&&(p(64),d("code",l.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,g],encapsulation:2});let n=i;return n})();var xe=(()=>{let i=class i{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-dropdown formControlName="selectedCity" [options]="cities" optionLabel="name" placeholder="Select a City"></p-dropdown>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-dropdown formControlName="selectedCity" [options]="cities" optionLabel="name" placeholder="Select a City"></p-dropdown>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dropdown-reactive-forms-demo',
    templateUrl: './dropdown-reactive-forms-demo.html'
})
export class DropdownReactiveFormsDemo implements OnInit {
    cities: City[] | undefined;
    
    formGroup: FormGroup | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.formGroup = new FormGroup({
            selectedCity: new FormControl<City | null>(null)
        });
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new K({selectedCity:new H(null)})}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","selectedCity","optionLabel","name","placeholder","Select a City",3,"options"],["selector","dropdown-reactive-forms-demo",3,"code"]],template:function(a,l){a&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Dropdown can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),o(),e(5," property is used to bind the component to a form control."),o()(),t(6,"div",0)(7,"form",1),s(8,"p-dropdown",2),o()(),s(9,"app-code",3)),a&2&&(p(7),d("formGroup",l.formGroup),p(),d("options",l.cities),p(),d("code",l.code))},dependencies:[u,g,q,h,J,Q,X,y],encapsulation:2});let n=i;return n})();var be=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=O({imports:[W,P,le,G,Z,$,ie,oe,ae,G]});let n=i;return n})();var Re=()=>["Dropdown"],Ee=(()=>{let i=class i{constructor(){this.docs=[{id:"import",label:"Import",component:de},{id:"basic",label:"Basic",component:pe},{id:"reactive-forms",label:"Reactive Forms",component:xe},{id:"editable",label:"Editable",component:me},{id:"group",label:"Group",component:se},{id:"template",label:"Template",component:ce},{id:"filter",label:"Filter",children:[{id:"filterbasic",label:"Basic",component:ye},{id:"customfilter",label:"Custom Filter",component:Ce}]},{id:"virtualscroll",label:"Virtual Scroll",component:ge},{id:"lazyvirtualscroll",label:"Lazy Virtual Scroll",component:he},{id:"disabled",label:"Disabled",component:ue},{id:"invalid",label:"Invalid",component:fe},{id:"floatlabel",label:"Float Label",component:we},{id:"style",label:"Style",component:ve},{id:"accessibility",label:"Accessibility",component:Se}]}};i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=c({type:i,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dropdown Component","header","Dropdown","description","Dropdown also known as Select, is used to choose an item from a collection of options.",3,"docs","apiDocs"]],template:function(a,l){a&1&&s(0,"app-doc",0),a&2&&d("docs",l.docs)("apiDocs",z(2,Re))},dependencies:[re],styles:["[_nghost-%COMP%]     .p-dropdown{width:14rem}.country-item-value[_ngcontent-%COMP%]   img.flag[_ngcontent-%COMP%]{width:17px}p-skeleton[_ngcontent-%COMP%]{width:100%}"]});let n=i;return n})();var Me=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=O({imports:[P.forChild([{path:"",component:Ee}]),P]});let n=i;return n})();var fo=(()=>{let i=class i{};i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=k({type:i}),i.\u0275inj=O({imports:[W,Me,be]});let n=i;return n})();export{fo as DropdownDemoModule};
