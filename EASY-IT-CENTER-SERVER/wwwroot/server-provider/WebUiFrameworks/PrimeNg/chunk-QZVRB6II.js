import{a as h,b as $}from"./chunk-VD5NKM3T.js";import"./chunk-G7VICPVK.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-RJKOGX2L.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as f,b as Z,c as O}from"./chunk-AS5FXEGH.js";import{a as u,b as X}from"./chunk-X2ZDE2AM.js";import{e as g,f as B,g as U,h as V,i as y,j as K,m as z,n as H,p as J,q}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{q as P}from"./chunk-UWMVDULA.js";import{o as Q,t as F}from"./chunk-N5X6XDRN.js";import{Ec as G,Fc as W,Jb as e,Kb as _,Lb as j,Nb as S,Nc as k,Ob as C,Pb as v,Sa as m,Sb as R,V as T,da as d,ea as L,ib as N,kb as r,ob as A,rb as t,sb as i,tb as p,yb as Y}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ee=(()=>{let o=class o{constructor(){this.code={basic:`<span id="dd1">Options</span>
<p-multiSelect ariaLabelledBy="dd1"></p-multiSelect>

<p-multiSelect ariaLabel="Options"></p-multiSelect>`}}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["accessibility-doc"]],decls:268,vars:4,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,a){l&1&&(t(0,"div")(1,"app-docsectiontext")(2,"h3"),e(3,"Screen Reader"),i(),t(4,"p"),e(5," Value to describe the component can either be provided with "),t(6,"i"),e(7,"ariaLabelledBy"),i(),e(8," or "),t(9,"i"),e(10,"ariaLabel"),i(),e(11," props. The multiselect component has a "),t(12,"i"),e(13,"combobox"),i(),e(14," role in addition to "),t(15,"i"),e(16,"aria-haspopup"),i(),e(17," and "),t(18,"i"),e(19,"aria-expanded"),i(),e(20," attributes. The relation between the combobox and the popup is created with "),t(21,"i"),e(22,"aria-controls"),i(),e(23," attribute that refers to the id of the popup listbox. "),i(),t(24,"p"),e(25,"The popup listbox uses "),t(26,"i"),e(27,"listbox"),i(),e(28," as the role with "),t(29,"i"),e(30,"aria-multiselectable"),i(),e(31," enabled. Each list item has an "),t(32,"i"),e(33,"option"),i(),e(34," role along with "),t(35,"i"),e(36,"aria-label"),i(),e(37,", "),t(38,"i"),e(39,"aria-selected"),i(),e(40," and "),t(41,"i"),e(42,"aria-disabled"),i(),e(43," attributes."),i(),t(44,"p"),e(45," Checkbox component at the header uses a hidden native checkbox element internally that is only visible to screen readers. Value to read is defined with the "),t(46,"i"),e(47,"selectAll"),i(),e(48," and "),t(49,"i"),e(50,"unselectAll"),i(),e(51," keys of the "),t(52,"i"),e(53,"aria"),i(),e(54," property from the "),t(55,"a",0),e(56,"locale"),i(),e(57," API. "),i(),t(58,"p"),e(59,"If filtering is enabled, "),t(60,"i"),e(61,"filterInputProps"),i(),e(62," can be defined to give "),t(63,"i"),e(64,"aria-*"),i(),e(65," props to the input element."),i(),t(66,"p"),e(67,"Close button uses "),t(68,"i"),e(69,"close"),i(),e(70," key of the "),t(71,"i"),e(72,"aria"),i(),e(73," property from the "),t(74,"a",0),e(75,"locale"),i(),e(76," API as the "),t(77,"i"),e(78,"aria-label"),i(),e(79," by default, this can be overriden with the "),t(80,"i"),e(81,"closeButtonProps"),i(),e(82,"."),i()(),p(83,"app-code",1),t(84,"h3"),e(85,"Closed State Keyboard Support"),i(),t(86,"div",2)(87,"table",3)(88,"thead")(89,"tr")(90,"th"),e(91,"Key"),i(),t(92,"th"),e(93,"Function"),i()()(),t(94,"tbody")(95,"tr")(96,"td")(97,"i"),e(98,"tab"),i()(),t(99,"td"),e(100,"Moves focus to the multiselect element."),i()(),t(101,"tr")(102,"td")(103,"i"),e(104,"space"),i()(),t(105,"td"),e(106,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(107,"tr")(108,"td")(109,"i"),e(110,"down arrow"),i()(),t(111,"td"),e(112,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()(),t(113,"tr")(114,"td")(115,"i"),e(116,"up arrow"),i()(),t(117,"td"),e(118,"Opens the popup and moves visual focus to the selected option, if there is none then first option receives the focus."),i()()()()(),t(119,"h3"),e(120,"Popup Keyboard Support"),i(),t(121,"div",2)(122,"table",3)(123,"thead")(124,"tr")(125,"th"),e(126,"Key"),i(),t(127,"th"),e(128,"Function"),i()()(),t(129,"tbody")(130,"tr")(131,"td")(132,"i"),e(133,"tab"),i()(),t(134,"td"),e(135,"Moves focus to the next focusable element in the popup, if there is none then first focusable element receives the focus."),i()(),t(136,"tr")(137,"td")(138,"i"),e(139,"shift"),i(),e(140," + "),t(141,"i"),e(142,"tab"),i()(),t(143,"td"),e(144,"Moves focus to the previous focusable element in the popup, if there is none then last focusable element receives the focus."),i()(),t(145,"tr")(146,"td")(147,"i"),e(148,"enter"),i()(),t(149,"td"),e(150,"Toggles the selection state of the focused option."),i()(),t(151,"tr")(152,"td")(153,"i"),e(154,"space"),i()(),t(155,"td"),e(156,"Toggles the selection state of the focused option."),i()(),t(157,"tr")(158,"td")(159,"i"),e(160,"escape"),i()(),t(161,"td"),e(162,"Closes the popup, moves focus to the multiselect element."),i()(),t(163,"tr")(164,"td")(165,"i"),e(166,"down arrow"),i()(),t(167,"td"),e(168,"Moves focus to the next option, if there is none then visual focus does not change."),i()(),t(169,"tr")(170,"td")(171,"i"),e(172,"up arrow"),i()(),t(173,"td"),e(174,"Moves focus to the previous option, if there is none then visual focus does not change."),i()(),t(175,"tr")(176,"td")(177,"i"),e(178,"home"),i()(),t(179,"td"),e(180,"Moves focus to the first option."),i()(),t(181,"tr")(182,"td")(183,"i"),e(184,"end"),i()(),t(185,"td"),e(186,"Moves focus to the last option."),i()(),t(187,"tr")(188,"td")(189,"i"),e(190,"any printable character"),i()(),t(191,"td"),e(192,"Moves focus to the option whose label starts with the characters being typed if dropdown is not editable."),i()()()()(),t(193,"h3"),e(194,"Toggle All Checkbox Keyboard Support"),i(),t(195,"div",2)(196,"table",3)(197,"thead")(198,"tr")(199,"th"),e(200,"Key"),i(),t(201,"th"),e(202,"Function"),i()()(),t(203,"tbody")(204,"tr")(205,"td")(206,"i"),e(207,"space"),i()(),t(208,"td"),e(209,"Toggles the checked state."),i()(),t(210,"tr")(211,"td")(212,"i"),e(213,"escape"),i()(),t(214,"td"),e(215,"Closes the popup."),i()()()()(),t(216,"h3"),e(217,"Filter Input Keyboard Support"),i(),t(218,"div",2)(219,"table",3)(220,"thead")(221,"tr")(222,"th"),e(223,"Key"),i(),t(224,"th"),e(225,"Function"),i()()(),t(226,"tbody")(227,"tr")(228,"td")(229,"i"),e(230,"enter"),i()(),t(231,"td"),e(232,"Closes the popup and moves focus to the multiselect element."),i()(),t(233,"tr")(234,"td")(235,"i"),e(236,"escape"),i()(),t(237,"td"),e(238,"Closes the popup and moves focus to the multiselect element."),i()()()()(),t(239,"h3"),e(240,"Close Button Keyboard Support"),i(),t(241,"div",2)(242,"table",3)(243,"thead")(244,"tr")(245,"th"),e(246,"Key"),i(),t(247,"th"),e(248,"Function"),i()()(),t(249,"tbody")(250,"tr")(251,"td")(252,"i"),e(253,"enter"),i()(),t(254,"td"),e(255,"Closes the popup and moves focus to the multiselect element."),i()(),t(256,"tr")(257,"td")(258,"i"),e(259,"space"),i()(),t(260,"td"),e(261,"Closes the popup and moves focus to the multiselect element."),i()(),t(262,"tr")(263,"td")(264,"i"),e(265,"escape"),i()(),t(266,"td"),e(267,"Closes the popup and moves focus to the multiselect element."),i()()()()()()),l&2&&(m(83),r("code",a.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[u,f],encapsulation:2});let n=o;return n})();var te=(()=>{let o=class o{constructor(){this.code={basic:'<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name"></p-multiSelect>',html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" optionLabel="name"></p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-basic-demo',
    templateUrl: './multi-select-basic-demo.html'
})
export class MultiSelectBasicDemo implements OnInit {

    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["basic-doc"]],decls:42,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select Cities",3,"ngModelChange","options","ngModel","showClear"],["selector","multi-select-basic-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," MultiSelect is used as a controlled component with "),t(3,"i"),e(4,"ngModel"),i(),e(5," property along with an "),t(6,"i"),e(7,"options"),i(),e(8," collection. Label and value of an option are defined with the "),t(9,"i"),e(10,"optionLabel"),i(),e(11," and "),t(12,"i"),e(13,"optionValue"),i(),e(14," properties respectively. Default property name for the "),t(15,"i"),e(16,"optionLabel"),i(),e(17," is "),t(18,"i"),e(19,"label"),i(),e(20," and "),t(21,"i"),e(22,"value"),i(),e(23," for the "),t(24,"i"),e(25,"optionValue"),i(),e(26,". If "),t(27,"i"),e(28,"optionValue"),i(),e(29," is omitted and the object has no "),t(30,"i"),e(31,"value"),i(),e(32," property, the object itself becomes the value of an option. Note that, when options are simple primitive values such as a string array, no "),t(33,"i"),e(34,"optionLabel"),i(),e(35," and "),t(36,"i"),e(37,"optionValue"),i(),e(38," would be necessary. "),i()(),t(39,"div",0)(40,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i()(),p(41,"app-code",2)),l&2&&(m(40),r("options",a.cities),S("ngModel",a.selectedCities),r("showClear",!0),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var ie=(()=>{let o=class o{constructor(){this.code={basic:'<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" [showClear]="true"></p-multiSelect>',html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" placeholder="Select Cities" optionLabel="name" display="chip" [showClear]="true"></p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-chips-demo',
    templateUrl: './multi-select-chips-demo.html'
})
export class MultiSelectChipsDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    constructor() {
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["chips-doc"]],decls:12,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select Cities","optionLabel","name","display","chip",3,"ngModelChange","options","ngModel","showClear"],["selector","multi-select-chips-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Selected values are displayed as a comma separated list by default, setting "),t(3,"i"),e(4,"display"),i(),e(5," as "),t(6,"i"),e(7,"chip"),i(),e(8," displays them as chips."),i()(),t(9,"div",0)(10,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i()(),p(11,"app-code",2)),l&2&&(m(10),r("options",a.cities),S("ngModel",a.selectedCities),r("showClear",!0),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var oe=(()=>{let o=class o{constructor(){this.code={basic:'<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name"></p-multiSelect>',html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [disabled]="true" optionLabel="name"></p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-disabled-demo',
    templateUrl: './multi-select-disabled-demo.html'
})
export class MultiSelectDisabledDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["disabled-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select Cities",3,"ngModelChange","options","ngModel","disabled"],["selector","multi-select-disabled-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"When "),t(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),t(6,"div",0)(7,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i()(),p(8,"app-code",2)),l&2&&(m(7),r("options",a.cities),S("ngModel",a.selectedCities),r("disabled",!0),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var ne=(()=>{let o=class o{constructor(){this.code={basic:'<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities"></p-multiSelect>',html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" [filter]="true" optionLabel="name" placeholder="Select Cities"></p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-filter-demo',
    templateUrl: './multi-select-filter-demo.html'
})
export class MultiSelectFilterDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["filter-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select Cities",3,"ngModelChange","options","ngModel","filter"],["selector","multi-select-filter-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect provides built-in filtering that is enabled by adding the "),t(3,"i"),e(4,"filter"),i(),e(5," property."),i()(),t(6,"div",0)(7,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i()(),p(8,"app-code",2)),l&2&&(m(7),r("options",a.cities),S("ngModel",a.selectedCities),r("filter",!0),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var le=(()=>{let o=class o{constructor(){this.code={basic:`<span class="p-float-label">
    <p-multiSelect inputId="float-label" [options]="cities" [(ngModel)]="selectedCities" optionLabel="name"></p-multiSelect>
    <label for="float-label">Select Cities</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-multiSelect inputId="float-label" [options]="cities" [(ngModel)]="selectedCities" optionLabel="name"></p-multiSelect>
        <label for="float-label">Select Cities</label>
    </span>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-floatlabel-demo',
    templateUrl: './multi-select-floatlabel-demo.html'
})
export class MultiSelectFloatlabelDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["floatlabel-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["inputId","float-label","optionLabel","name",3,"ngModelChange","options","ngModel"],["for","float-label"],["selector","multi-select-floatlabel-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"A floating label appears on top of the input field when focused."),i()(),t(3,"div",0)(4,"span",1)(5,"p-multiSelect",2),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i(),t(6,"label",3),e(7,"Select Cities"),i()()(),p(8,"app-code",4)),l&2&&(m(5),r("options",a.cities),S("ngModel",a.selectedCities),m(3),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();function Se(n,o){if(n&1&&(t(0,"div",4),p(1,"img",5),t(2,"span"),e(3),i()()),n&2){let b=o.$implicit;m(),A("mr-2 flag flag-"+b.value),m(2),_(b.label)}}var ae=(()=>{let o=class o{constructor(){this.code={basic:`<p-multiSelect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip">
    <ng-template let-group pTemplate="group">
        <div class="flex align-items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-multiSelect>`,html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="groupedCities" [group]="true" [(ngModel)]="selectedCities" placeholder="Select Cities" scrollHeight="250px" display="chip">
        <ng-template let-group pTemplate="group">
            <div class="flex align-items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-multiSelect>
</div>`,typescript:`
import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-group-demo',
    templateUrl: './multi-select-group-demo.html'
})
export class MultiSelectGroupDemo {
    groupedCities!: SelectItemGroup[];

    selectedCities!: City[];

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
}`},this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["group-doc"]],decls:7,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select Cities","scrollHeight","250px","display","chip",3,"ngModelChange","options","group","ngModel"],["pTemplate","group"],["selector","multi-select-group-demo",3,"code"],[1,"flex","align-items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Options can be grouped when a nested data structures is provided."),i()(),t(3,"div",0)(4,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),N(5,Se,4,3,"ng-template",2),i()(),p(6,"app-code",3)),l&2&&(m(4),r("options",a.groupedCities)("group",!0),S("ngModel",a.selectedCities),m(2),r("code",a.code))},dependencies:[u,h,P,g,y,f],encapsulation:2});let n=o;return n})();var re=(()=>{let o=class o{constructor(){this.code={typescript:"import { MultiSelectModule } from 'primeng/multiselect';"}}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,a){l&1&&p(0,"app-code",0),l&2&&r("code",a.code)("hideToggleCode",!0)},dependencies:[u],encapsulation:2});let n=o;return n})();var me=(()=>{let o=class o{constructor(){this.code={basic:'<p-multiSelect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name"></p-multiSelect>',html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="cities" [(ngModel)]="selectedCities" class="ng-dirty ng-invalid" optionLabel="name"></p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-invalid-demo',
    templateUrl: './multi-select-invalid-demo.html'
})
export class MultiSelectInvalidDemo implements OnInit {
    cities!: City[];

    selectedCities!: City[];

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["invalid-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["optionLabel","name","placeholder","Select Cities",1,"ng-dirty","ng-invalid",3,"ngModelChange","options","ngModel"],["selector","multi-select-invalid-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),t(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),t(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),t(9,"div",0)(10,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCities,s)||(a.selectedCities=s),s}),i()(),p(11,"app-code",2)),l&2&&(m(10),r("options",a.cities),S("ngModel",a.selectedCities),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var se=(()=>{let o=class o{constructor(){this.code={basic:`<form [formGroup]="formGroup">
    <p-multiSelect [options]="cities" formControlName="selectedCities" optionLabel="name" placeholder="Select Cities"></p-multiSelect>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-multiSelect [options]="cities" formControlName="selectedCities" optionLabel="name" placeholder="Select Cities"></p-multiSelect>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface City {
    name: string,
    code: string
}

@Component({
    selector: 'multi-select-reactive-forms-demo',
    templateUrl: './multi-select-reactive-forms-demo.html'
})
export class MultiSelectReactiveFormsDemo implements OnInit {
    cities!: City[];

    formGroup!: FormGroup;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];

        this.formGroup = new FormGroup({
            selectedCities: new FormControl<City[] | null>([{ name: 'Istanbul', code: 'IST' }])
        });
    }  
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}],this.formGroup=new U({selectedCities:new V([{name:"Istanbul",code:"IST"}])})}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","selectedCities","optionLabel","name","placeholder","Select Cities",3,"options"],["selector","multi-select-reactive-forms-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"MultiSelect can also be used with reactive forms. In this case, the "),t(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),t(6,"div",0)(7,"form",1),p(8,"p-multiSelect",2),i()(),p(9,"app-code",3)),l&2&&(m(7),r("formGroup",a.formGroup),m(),r("options",a.cities),m(),r("code",a.code))},dependencies:[u,h,K,g,B,z,H,f],encapsulation:2});let n=o;return n})();var Ce=()=>["/theming"],ce=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),t(3,"a",0),e(4,"theming"),i(),e(5," page."),i()(),t(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),e(11,"Name"),i(),t(12,"th"),e(13,"Element"),i()()(),t(14,"tbody")(15,"tr")(16,"td"),e(17,"p-multiselect"),i(),t(18,"td"),e(19,"Container element."),i()(),t(20,"tr")(21,"td"),e(22,"p-multiselect-label-container"),i(),t(23,"td"),e(24,"Container of the label to display selected items."),i()(),t(25,"tr")(26,"td"),e(27,"p-multiselect-label"),i(),t(28,"td"),e(29,"Label to display selected items."),i()(),t(30,"tr")(31,"td"),e(32,"p-multiselect-trigger"),i(),t(33,"td"),e(34,"Dropdown button."),i()(),t(35,"tr")(36,"td"),e(37,"p-multiselect-filter-container"),i(),t(38,"td"),e(39,"Container of filter input."),i()(),t(40,"tr")(41,"td"),e(42,"p-multiselect-panel"),i(),t(43,"td"),e(44,"Overlay panel for items."),i()(),t(45,"tr")(46,"td"),e(47,"p-multiselect-items"),i(),t(48,"td"),e(49,"List container of items."),i()(),t(50,"tr")(51,"td"),e(52,"p-multiselect-item"),i(),t(53,"td"),e(54,"An item in the list."),i()(),t(55,"tr")(56,"td"),e(57,"p-multiselect-open"),i(),t(58,"td"),e(59,"Container element when overlay is visible."),i()()()()()),l&2&&(m(3),r("routerLink",R(1,Ce)))},dependencies:[Q,f],encapsulation:2});let n=o;return n})();function ve(n,o){if(n&1&&(t(0,"div",7),p(1,"img",8),t(2,"div"),e(3),i()()),n&2){let b=o.$implicit;m(),A("flag flag-"+b.code.toLowerCase()),m(2),j("",b.name,",")}}function ye(n,o){n&1&&(t(0,"div"),e(1,"Select Countries"),i())}function xe(n,o){if(n&1&&N(0,ve,4,3,"div",5)(1,ye,2,0,"div",6),n&2){let b=o.$implicit;r("ngForOf",b),m(),r("ngIf",!b||b.length===0)}}function be(n,o){if(n&1&&(t(0,"div",9),p(1,"img",8),t(2,"div"),e(3),i()()),n&2){let b=o.$implicit;m(),A("flag flag-"+b.code.toLowerCase()),m(2),_(b.name)}}var pe=(()=>{let o=class o{constructor(){this.code={basic:`<p-multiSelect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select Countries" optionLabel="name">
    <ng-template let-value pTemplate="selectedItems">
        <div class="inline-flex align-items-center gap-2 px-1" *ngFor="let option of value">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + option.code.toLowerCase()" style="width: 18px" />
            <div>{{ option.name }},</div>
        </div>
        <div *ngIf="!value || value.length === 0">Select Countries</div>
    </ng-template>
    <ng-template let-country pTemplate="item">
        <div class="flex align-items-center gap-2">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
            <div>{{ country.name }}</div>
        </div>
    </ng-template>
</p-multiSelect>`,html:`
<div class="card flex justify-content-center">
    <p-multiSelect [options]="countries" [(ngModel)]="selectedCountries" placeholder="Select a Country" optionLabel="name">
        <ng-template let-value pTemplate="selectedItems">
            <div class="inline-flex align-items-center gap-2 px-1" *ngFor="let option of value">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + option.code.toLowerCase()" style="width: 18px" />
                <div>{{ option.name }},</div>
            </div>
            <div *ngIf="!value || value.length === 0">Select Countries</div>
        </ng-template>
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px" />
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-multiSelect>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface Country {
    name: string;
    code: string;
}

@Component({
    selector: 'multi-select-template-demo',
    templateUrl: './multi-select-template-demo.html'
})
export class MultiSelectTemplateDemo implements OnInit {
    countries!: Country[];

    selectedCountries!: Country[];

    constructor() {
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
}`}}ngOnInit(){this.countries=[{name:"Australia",code:"AU"},{name:"Brazil",code:"BR"},{name:"China",code:"CN"},{name:"Egypt",code:"EG"},{name:"France",code:"FR"},{name:"Germany",code:"DE"},{name:"India",code:"IN"},{name:"Japan",code:"JP"},{name:"Spain",code:"ES"},{name:"United States",code:"US"}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["template-doc"]],decls:11,vars:3,consts:[[1,"card","flex","justify-content-center"],["placeholder","Select Countries","optionLabel","name",3,"ngModelChange","options","ngModel"],["pTemplate","selectedItems"],["pTemplate","item"],["selector","multi-select-template-demo",3,"code"],["class","inline-flex align-items-center gap-2 px-1",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"inline-flex","align-items-center","gap-2","px-1"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"],[1,"flex","align-items-center","gap-2"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2,"Available options and the selected options support templating with "),t(3,"i"),e(4,"pTemplate"),i(),e(5," properties respectively. In addition, header, footer and filter sections can be templated as well."),i()(),t(6,"div",0)(7,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedCountries,s)||(a.selectedCountries=s),s}),N(8,xe,2,2,"ng-template",2)(9,be,4,3,"ng-template",3),i()(),p(10,"app-code",4)),l&2&&(m(7),r("options",a.countries),S("ngModel",a.selectedCountries),m(3),r("code",a.code))},dependencies:[G,W,u,h,P,g,y,f],encapsulation:2});let n=o;return n})();var de=(()=>{let o=class o{constructor(){this.items=Array.from({length:1e5},(c,l)=>({label:`Item #${l}`,value:l})),this.selectAll=!1,this.code={basic:`<p-multiSelect
    [options]="items"
    [showToggleAll]="true"
    [selectAll]="selectAll"
    [(ngModel)]="selectedItems"
    optionLabel="label"
    [virtualScroll]="true"
    [filter]="true"
    [virtualScrollItemSize]="43"
    class="multiselect-custom-virtual-scroll"
    placeholder="Select Cities"
    (onSelectAllChange)="onSelectAllChange($event)"
    (onChange)="onChange($event)"
></p-multiSelect>`,html:`
<div class="card flex justify-content-center">
    <p-multiSelect
        [options]="items"
        [showToggleAll]="true"
        [selectAll]="selectAll"
        [(ngModel)]="selectedItems"
        optionLabel="label"
        [virtualScroll]="true"
        [filter]="true"
        [virtualScrollItemSize]="43"
        class="multiselect-custom-virtual-scroll"
        placeholder="Select Cities"
        (onSelectAllChange)="onSelectAllChange($event)"
        (onChange)="onChange($event)"
    ></p-multiSelect>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'multi-select-virtual-scroll-demo',
    templateUrl: './multi-select-virtual-scroll-demo.html'
})
export class MultiSelectVirtualScrollDemo {
    items = Array.from({ length: 100000 }, (_, i) => ({ label: \`Item #\${i}\`, value: i }))

    selectedItems!: any[];

    selectAll = false;

    onSelectAllChange(event) {
        this.selectedItems = event.checked ? [...this.items] : [];
        this.selectAll = event.checked;
    }

    onChange(event) {
        const { originalEvent, value } = event
        if(value) this.selectAll = value.length === this.items.length;
    }

}`}}onSelectAllChange(c){this.selectedItems=c.checked?[...this.items]:[],this.selectAll=c.checked}onChange(c){let{value:l}=c;l&&(this.selectAll=l.length===this.items.length)}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["virtual-scroll-doc"]],decls:12,vars:8,consts:[[1,"card","flex","justify-content-center"],["optionLabel","label","placeholder","Select Cities",1,"multiselect-custom-virtual-scroll",3,"ngModelChange","onSelectAllChange","onChange","options","showToggleAll","selectAll","ngModel","virtualScroll","filter","virtualScrollItemSize"],["selector","multi-select-virtual-scroll-demo",3,"code"]],template:function(l,a){l&1&&(t(0,"app-docsectiontext")(1,"p"),e(2," VirtualScrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable VirtualScrolling to avoid performance issues. Usage is simple as setting "),t(3,"i"),e(4,"virtualScroll"),i(),e(5," property to true and defining "),t(6,"i"),e(7,"virtualScrollItemSize"),i(),e(8," to specify the height of an item. "),i()(),t(9,"div",0)(10,"p-multiSelect",1),v("ngModelChange",function(s){return C(a.selectedItems,s)||(a.selectedItems=s),s}),Y("onSelectAllChange",function(s){return a.onSelectAllChange(s)})("onChange",function(s){return a.onChange(s)}),i()(),p(11,"app-code",2)),l&2&&(m(10),r("options",a.items)("showToggleAll",!0)("selectAll",a.selectAll),S("ngModel",a.selectedItems),r("virtualScroll",!0)("filter",!0)("virtualScrollItemSize",43),m(),r("code",a.code))},dependencies:[u,h,g,y,f],encapsulation:2});let n=o;return n})();var ue=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=L({type:o}),o.\u0275inj=T({imports:[k,X,F,$,J,q,O,O]});let n=o;return n})();var Me=()=>["MultiSelect"],fe=(()=>{let o=class o{constructor(){this.docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:te},{id:"reactive-forms",label:"Reactive Forms",component:se},{id:"chips",label:"Chips",component:ie},{id:"group",label:"Group",component:ae},{id:"template",label:"Template",component:pe},{id:"filter",label:"Filter",component:ne},{id:"virtualscroll",label:"VirtualScroll",component:de},{id:"floatlabel",label:"Float Label",component:le},{id:"invalid",label:"Invalid",component:me},{id:"disabled",label:"Disabled",component:oe},{id:"style",label:"Style",component:ce},{id:"accessibility",label:"Accessibility",component:ee}]}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=d({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular MultiSelect Component","header","MultiSelect","description","MultiSelect is used to select multiple items from a collection.",3,"docs","apiDocs"]],template:function(l,a){l&1&&p(0,"app-doc",0),l&2&&r("docs",a.docs)("apiDocs",R(2,Me))},dependencies:[Z],styles:["[_nghost-%COMP%]     .p-multiselect{min-width:15rem;width:18rem}"]});let n=o;return n})();var ge=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=L({type:o}),o.\u0275inj=T({imports:[F.forChild([{path:"",component:fe}]),F]});let n=o;return n})();var Bt=(()=>{let o=class o{};o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=L({type:o}),o.\u0275inj=T({imports:[k,ge,ue]});let n=o;return n})();export{Bt as MultiSelectDemoModule};
