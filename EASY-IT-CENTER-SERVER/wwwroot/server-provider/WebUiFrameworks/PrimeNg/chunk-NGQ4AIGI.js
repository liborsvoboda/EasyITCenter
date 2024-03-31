import{a as _,b as C,c as oe}from"./chunk-J53P4OCV.js";import"./chunk-RJKOGX2L.js";import"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as g,b as ne,c as U}from"./chunk-AS5FXEGH.js";import{a as f,b as ie}from"./chunk-X2ZDE2AM.js";import{e as y,f as z,g as Y,h as $,i as x,j as J,m as Q,n as X,p as Z,q as ee}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{j as te,q as N}from"./chunk-UWMVDULA.js";import{t as L}from"./chunk-N5X6XDRN.js";import{Jb as e,Kb as k,Nb as v,Nc as G,Ob as S,Pb as b,Pc as R,Sa as p,Sb as K,Ta as E,U as P,V as T,Z as B,da as d,ea as F,ib as j,kb as c,ob as O,rb as o,sb as i,tb as u,vc as V,yb as h,za as H}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var re=(()=>{let t=class t{constructor(){this.code={typescript:"import { AutoCompleteModule } from 'primeng/autocomplete';"}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(n,r){n&1&&u(0,"app-code",0),n&2&&c("code",r.code)("hideToggleCode",!0)},dependencies:[f],encapsulation:2});let s=t;return s})();var le=(()=>{let t=class t{constructor(){this.code={basic:'<p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)"></p-autoComplete>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-basic-demo',
    templateUrl: './autocomplete-basic-demo.html'
})
export class AutocompleteBasicDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`}}search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["basic-doc"]],decls:15,vars:3,consts:[[1,"card","flex","justify-content-center"],["placeholder","Search",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-basic-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," AutoComplete uses "),o(3,"i"),e(4,"ngModel"),i(),e(5," for two-way binding, requires a list of suggestions and a "),o(6,"i"),e(7,"completeMethod"),i(),e(8," to query for the results. The completeMethod gets the query text as "),o(9,"i"),e(10,"event.query"),i(),e(11," property and should update the suggestions with the search results. "),i()(),o(12,"div",0)(13,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedItem,l)||(r.selectedItem=l),l}),h("completeMethod",function(l){return r.search(l)}),i()(),u(14,"app-code",2)),n&2&&(p(13),v("ngModel",r.selectedItem),c("suggestions",r.suggestions),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();function we(s,t){if(s&1&&(o(0,"div",4),u(1,"img",5),o(2,"div"),e(3),i()()),s&2){let q=t.$implicit;p(),O("flag flag-"+q.code.toLowerCase()),p(2),k(q.name)}}var ae=(()=>{let t=class t{constructor(a){this.countryService=a,this.code={basic:`<p-autoComplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" 
    (completeMethod)="filterCountry($event)" field="name">
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
</p-autoComplete>`,html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCountryAdvanced" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name">
        <ng-template let-country pTemplate="item">
            <div class="flex align-items-center gap-2">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'flag flag-' + country.code.toLowerCase()" style="width: 18px"/>
                <div>{{ country.name }}</div>
            </div>
        </ng-template>
    </p-autoComplete>
</div>`,typescript:`
import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { CountryService } from 'src/service/countryservice';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-template-demo',
    templateUrl: './autocomplete-template-demo.html',
    styleUrls: ['./autocomplete-template-demo.scss']
})
export class AutocompleteTemplateDemo {
    countries: any[] | undefined;

    selectedCountryAdvanced: any[] | undefined;

    filteredCountries: any[] | undefined; 

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`}}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],r=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}};t.\u0275fac=function(n){return new(n||t)(E(_))},t.\u0275cmp=d({type:t,selectors:[["autocomplete-template-demo"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],["field","name","placeholder","Search",3,"ngModelChange","completeMethod","ngModel","suggestions"],["pTemplate","item"],["selector","autocomplete-template-demo",3,"code"],[1,"flex","align-items-center","gap-2"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","18px"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p")(2,"i"),e(3,"item"),i(),e(4," template allows displaying custom content inside the suggestions panel. The local ng-template variable passed to the ng-template is an object in the suggestions array."),i()(),o(5,"div",0)(6,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedCountryAdvanced,l)||(r.selectedCountryAdvanced=l),l}),h("completeMethod",function(l){return r.filterCountry(l)}),j(7,we,4,3,"ng-template",2),i()(),u(8,"app-code",3)),n&2&&(p(6),v("ngModel",r.selectedCountryAdvanced),c("suggestions",r.filteredCountries),p(2),c("code",r.code))},dependencies:[f,y,x,g,C,N],encapsulation:2});let s=t;return s})();function De(s,t){if(s&1&&(o(0,"div",4),u(1,"img",5),o(2,"span"),e(3),i()()),s&2){let q=t.$implicit;p(),O("mr-2 flag flag-"+q.value),p(2),k(q.label)}}var se=(()=>{let t=class t{constructor(a){this.filterService=a,this.code={basic:`<p-autoComplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
    <ng-template let-group pTemplate="group">
        <div class="flex align-items-center">
            <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
            <span>{{ group.label }}</span>
        </div>
    </ng-template>
</p-autoComplete>`,html:`<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCity" [group]="true" [suggestions]="filteredGroups" (completeMethod)="filterGroupedCity($event)" placeholder="Hint: type 'a'">
        <ng-template let-group pTemplate="group">
            <div class="flex align-items-center">
                <img src="https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png" [class]="'mr-2 flag flag-' + group.value" style="width: 20px" />
                <span>{{ group.label }}</span>
            </div>
        </ng-template>
    </p-autoComplete>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-grouped-demo',
    templateUrl: './autocomplete-grouped-demo.html'
})
export class AutocompleteGroupedDemo implements OnInit {
    selectedCity: any;

    filteredGroups: any[] | undefined;

    groupedCities: SelectItemGroup[] | undefined;

    constructor(private filterService: FilterService) { }

    ngOnInit() {
        this.groupedCities = [
            {
                label: 'Germany', value: 'de',
                items: [
                    { label: 'Berlin', value: 'Berlin' },
                    { label: 'Frankfurt', value: 'Frankfurt' },
                    { label: 'Hamburg', value: 'Hamburg' },
                    { label: 'Munich', value: 'Munich' }
                ]
            },
            {
                label: 'USA', value: 'us',
                items: [
                    { label: 'Chicago', value: 'Chicago' },
                    { label: 'Los Angeles', value: 'Los Angeles' },
                    { label: 'New York', value: 'New York' },
                    { label: 'San Francisco', value: 'San Francisco' }
                ]
            },
            {
                label: 'Japan', value: 'jp',
                items: [
                    { label: 'Kyoto', value: 'Kyoto' },
                    { label: 'Osaka', value: 'Osaka' },
                    { label: 'Tokyo', value: 'Tokyo' },
                    { label: 'Yokohama', value: 'Yokohama' }
                ]
            }
        ];
    }

    filterGroupedCity(event: AutoCompleteCompleteEvent) {
        let query = event.query;
        let filteredGroups = [];

        for (let optgroup of this.groupedCities) {
            let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, "contains");
            if (filteredSubOptions && filteredSubOptions.length) {
                filteredGroups.push({
                    label: optgroup.label,
                    value: optgroup.value,
                    items: filteredSubOptions
                });
            }
        }

        this.filteredGroups = filteredGroups;
    }
}`}}ngOnInit(){this.groupedCities=[{label:"Germany",value:"de",items:[{label:"Berlin",value:"Berlin"},{label:"Frankfurt",value:"Frankfurt"},{label:"Hamburg",value:"Hamburg"},{label:"Munich",value:"Munich"}]},{label:"USA",value:"us",items:[{label:"Chicago",value:"Chicago"},{label:"Los Angeles",value:"Los Angeles"},{label:"New York",value:"New York"},{label:"San Francisco",value:"San Francisco"}]},{label:"Japan",value:"jp",items:[{label:"Kyoto",value:"Kyoto"},{label:"Osaka",value:"Osaka"},{label:"Tokyo",value:"Tokyo"},{label:"Yokohama",value:"Yokohama"}]}]}filterGroupedCity(a){let n=a.query,r=[];for(let m of this.groupedCities){let l=this.filterService.filter(m.items,["label"],n,"contains");l&&l.length&&r.push({label:m.label,value:m.value,items:l})}this.filteredGroups=r}};t.\u0275fac=function(n){return new(n||t)(E(te))},t.\u0275cmp=d({type:t,selectors:[["grouped-doc"]],decls:16,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Hint: type 'a'",3,"ngModelChange","completeMethod","ngModel","group","suggestions"],["pTemplate","group"],["selector","autocomplete-grouped-demo",3,"code"],[1,"flex","align-items-center"],["src","https://primefaces.org/cdn/primeng/images/demo/flag/flag_placeholder.png",2,"width","20px"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Option grouping is enabled when "),o(3,"i"),e(4,"group"),i(),e(5," property is set to "),o(6,"i"),e(7,"true"),i(),e(8,". "),o(9,"i"),e(10,"group"),i(),e(11," template is available to customize the option groups. All templates get the option instance as the default local template variable."),i()(),o(12,"div",0)(13,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedCity,l)||(r.selectedCity=l),l}),h("completeMethod",function(l){return r.filterGroupedCity(l)}),j(14,De,4,3,"ng-template",2),i()(),u(15,"app-code",3)),n&2&&(p(13),v("ngModel",r.selectedCity),c("group",!0)("suggestions",r.filteredGroups),p(2),c("code",r.code))},dependencies:[f,y,x,g,C,N],encapsulation:2});let s=t;return s})();var me=(()=>{let t=class t{constructor(){this.code={basic:'<p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true"> </p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedItem" [virtualScroll]="true" [suggestions]="filteredItems" [virtualScrollItemSize]="34" (completeMethod)="filterItems($event)" field="label" [dropdown]="true"> </p-autoComplete>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-virtual-scroll-demo',
    templateUrl: './autocomplete-virtual-scroll-demo.html'
})
export class AutocompleteVirtualScrollDemo {
    selectedItem: any;

    filteredItems: any[] | undefined;

    items: any[] | undefined;

    filterItems(event: AutoCompleteCompleteEvent) {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.items as any[]).length; i++) {
            let item = (this.items as any[])[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }

        this.filteredItems = filtered;
    }

    ngOnInit() {
        this.items = [];
        for (let i = 0; i < 10000; i++) {
            this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
        }
    }
}`}}filterItems(a){let n=[],r=a.query;for(let m=0;m<this.items.length;m++){let l=this.items[m];l.label.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredItems=n}ngOnInit(){this.items=[];for(let a=0;a<1e4;a++)this.items.push({label:"Item "+a,value:"Item "+a})}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["autocomplete-virtual-scroll-demo"]],decls:15,vars:6,consts:[[1,"card","flex","justify-content-center"],["field","label",3,"ngModelChange","completeMethod","ngModel","virtualScroll","suggestions","virtualScrollItemSize","dropdown"],["selector","autocomplete-virtual-scroll-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Virtual scrolling is an efficient way of rendering the options by displaying a small subset of data in the viewport at any time. When dealing with huge number of options, it is suggested to enable virtual scrolling to avoid performance issues. Usage is simple as setting "),o(3,"i"),e(4,"virtualScroll"),i(),e(5," property to "),o(6,"i"),e(7,"true"),i(),e(8," and defining "),o(9,"i"),e(10,"virtualScrollItemSize"),i(),e(11," to specify the height of an item. "),i()(),o(12,"div",0)(13,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedItem,l)||(r.selectedItem=l),l}),h("completeMethod",function(l){return r.filterItems(l)}),i()(),u(14,"app-code",2)),n&2&&(p(13),v("ngModel",r.selectedItem),c("virtualScroll",!0)("suggestions",r.filteredItems)("virtualScrollItemSize",34)("dropdown",!0),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var pe=(()=>{let t=class t{constructor(){this.code={basic:`<span class="p-fluid">
    <p-autoComplete [(ngModel)]="selectedItems" [suggestions]="items" (completeMethod)="filterCountry($event)" [multiple]="true"></p-autoComplete>
</span>`,html:`
<div class="card">
    <span class="p-fluid">
        <p-autoComplete [(ngModel)]="selectedItems" [suggestions]="items" (completeMethod)="filterCountry($event)" [multiple]="true"></p-autoComplete>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-multiple-demo',
    templateUrl: './autocomplete-multiple-demo.html'
})
export class AutocompleteMultipleDemo {
    selectedItems: any[] | undefined;

    items: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
    }
}`}}search(a){this.items=[...Array(10).keys()].map(n=>a.query+"-"+n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["autocomplete-multiple-demo"]],decls:10,vars:4,consts:[[1,"card"],[1,"p-fluid"],["placeholder","Search",3,"ngModelChange","completeMethod","ngModel","suggestions","multiple"],["selector","autocomplete-multiple-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Multiple mode is enabled using "),o(3,"i"),e(4,"multiple"),i(),e(5," property used to select more than one value from the autocomplete. In this case, value reference should be an array."),i()(),o(6,"div",0)(7,"span",1)(8,"p-autoComplete",2),b("ngModelChange",function(l){return S(r.selectedItems,l)||(r.selectedItems=l),l}),h("completeMethod",function(l){return r.search(l)}),i()()(),u(9,"app-code",3)),n&2&&(p(8),v("ngModel",r.selectedItems),c("suggestions",r.items)("multiple",!0),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var ce=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["style-doc"]],decls:54,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Following is the list of structural style classes, for theming classes visit "),o(3,"i"),e(4,"theming page."),i()()(),o(5,"div",0)(6,"table",1)(7,"thead")(8,"tr")(9,"th"),e(10,"Name"),i(),o(11,"th"),e(12,"Element"),i()()(),o(13,"tbody")(14,"tr")(15,"td"),e(16,"p-autocomplete"),i(),o(17,"td"),e(18,"Container element"),i()(),o(19,"tr")(20,"td"),e(21,"p-autocomplete-panel"),i(),o(22,"td"),e(23,"Overlay panel of suggestions."),i()(),o(24,"tr")(25,"td"),e(26,"p-autocomplete-items"),i(),o(27,"td"),e(28,"List container of suggestions."),i()(),o(29,"tr")(30,"td"),e(31,"p-autocomplete-item"),i(),o(32,"td"),e(33,"List item of a suggestion."),i()(),o(34,"tr")(35,"td"),e(36,"p-autocomplete-token"),i(),o(37,"td"),e(38,"Element of a selected item in multiple mode."),i()(),o(39,"tr")(40,"td"),e(41,"p-autocomplete-token-icon"),i(),o(42,"td"),e(43,"Close icon element of a selected item in multiple mode."),i()(),o(44,"tr")(45,"td"),e(46,"p-autocomplete-token-label"),i(),o(47,"td"),e(48,"Label of a selected item in multiple mode."),i()(),o(49,"tr")(50,"td"),e(51,"p-autocomplete-loader"),i(),o(52,"td"),e(53,"Loader icon."),i()()()()())},dependencies:[g],encapsulation:2});let s=t;return s})();var de=(()=>{let t=class t{constructor(){this.code={basic:`<label for="ac1">Username</label>
<p-autoComplete inputId="ac1"></p-autoComplete>

<span id="ac2">Email</span>
<p-autoComplete ariaLabelledBy="ac2"></p-autoComplete>

<p-autoComplete ariaLabel="City"></p-autoComplete>`}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["accessibility-doc"]],decls:166,vars:4,consts:[[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"h3"),e(2,"Screen Reader"),i(),o(3,"p"),e(4," Value to describe the component can either be provided via "),o(5,"i"),e(6,"label"),i(),e(7," tag combined with "),o(8,"i"),e(9,"inputId"),i(),e(10," prop or using "),o(11,"i"),e(12,"ariaLabelledBy"),i(),e(13,", "),o(14,"i"),e(15,"ariaLabel"),i(),e(16," props. The input element has "),o(17,"i"),e(18,"combobox"),i(),e(19," role in addition to "),o(20,"i"),e(21,"aria-autocomplete"),i(),e(22,", "),o(23,"i"),e(24,"aria-haspopup"),i(),e(25," and "),o(26,"i"),e(27,"aria-expanded"),i(),e(28," attributes. The relation between the input and the popup is created with "),o(29,"i"),e(30,"aria-controls"),i(),e(31," and "),o(32,"i"),e(33,"aria-activedescendant"),i(),e(34," attribute is used to instruct screen reader which option to read during keyboard navigation within the popup list. "),i(),o(35,"p"),e(36,"In multiple mode, chip list uses "),o(37,"i"),e(38,"listbox"),i(),e(39," role whereas each chip has the "),o(40,"i"),e(41,"option"),i(),e(42," role with "),o(43,"i"),e(44,"aria-label"),i(),e(45," set to the label of the chip."),i(),o(46,"p"),e(47," The popup list has an id that refers to the "),o(48,"i"),e(49,"aria-controls"),i(),e(50," attribute of the input element and uses "),o(51,"i"),e(52,"listbox"),i(),e(53," as the role. Each list item has "),o(54,"i"),e(55,"option"),i(),e(56," role and an id to match the "),o(57,"i"),e(58,"aria-activedescendant"),i(),e(59," of the input element. "),i()(),u(60,"app-code",0),o(61,"h3"),e(62,"Keyboard Support"),i(),o(63,"div",1)(64,"table",2)(65,"thead")(66,"tr")(67,"th"),e(68,"Key"),i(),o(69,"th"),e(70,"Function"),i()()(),o(71,"tbody")(72,"tr")(73,"td")(74,"i"),e(75,"tab"),i()(),o(76,"td"),e(77,"Moves focus to the input element when popup is not visible. If the popup is open and an item is highlighted then popup gets closed, item gets selected and focus moves to the next focusable element."),i()(),o(78,"tr")(79,"td")(80,"i"),e(81,"up arrow"),i()(),o(82,"td"),e(83,"Highlights the previous item if popup is visible."),i()(),o(84,"tr")(85,"td")(86,"i"),e(87,"down arrow"),i()(),o(88,"td"),e(89,"Highlights the next item if popup is visible."),i()(),o(90,"tr")(91,"td")(92,"i"),e(93,"enter"),i()(),o(94,"td"),e(95,"Selects the highlighted item and closes the popup if popup is visible."),i()(),o(96,"tr")(97,"td")(98,"i"),e(99,"home"),i()(),o(100,"td"),e(101,"Highlights the first item if popup is visible."),i()(),o(102,"tr")(103,"td")(104,"i"),e(105,"end"),i()(),o(106,"td"),e(107,"Highlights the last item if popup is visible."),i()(),o(108,"tr")(109,"td")(110,"i"),e(111,"escape"),i()(),o(112,"td"),e(113,"Hides the popup."),i()()()()(),o(114,"h3"),e(115,"Chips Input Keyboard Support"),i(),o(116,"div",1)(117,"table",2)(118,"thead")(119,"tr")(120,"th"),e(121,"Key"),i(),o(122,"th"),e(123,"Function"),i()()(),o(124,"tbody")(125,"tr")(126,"td")(127,"i"),e(128,"backspace"),i()(),o(129,"td"),e(130,"Deletes the previous chip if the input field is empty."),i()(),o(131,"tr")(132,"td")(133,"i"),e(134,"left arrow"),i()(),o(135,"td"),e(136,"Moves focus to the previous chip if available and input field is empty."),i()()()()(),o(137,"h3"),e(138,"Chip Keyboard Support"),i(),o(139,"div",1)(140,"table",2)(141,"thead")(142,"tr")(143,"th"),e(144,"Key"),i(),o(145,"th"),e(146,"Function"),i()()(),o(147,"tbody")(148,"tr")(149,"td")(150,"i"),e(151,"left arrow"),i()(),o(152,"td"),e(153,"Moves focus to the previous chip if available."),i()(),o(154,"tr")(155,"td")(156,"i"),e(157,"right arrow"),i()(),o(158,"td"),e(159,"Moves focus to the next chip, if there is none then input field receives the focus."),i()(),o(160,"tr")(161,"td")(162,"i"),e(163,"backspace"),i()(),o(164,"td"),e(165,"Deletes the chips and adds focus to the input field."),i()()()()()),n&2&&(p(60),c("code",r.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[f,g],encapsulation:2});let s=t;return s})();var ue=(()=>{let t=class t{constructor(a,n){this.platformId=a,this.document=n,this.window=this.document.defaultView}isBrowser(){return R(this.platformId)&&this.window!==null&&this.window!==void 0}};t.\u0275fac=function(n){return new(n||t)(B(H),B(V))},t.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"});let s=t;return s})();var fe=(()=>{let t=class t{constructor(a,n){this.countryService=a,this.PlatformService=n,this.code={basic:'<p-autoComplete [(ngModel)]="selectedCountry" [dropdown]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCountry" [dropdown]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/service/countryservice';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-dropdown-demo',
    templateUrl: './autocomplete-dropdown-demo.html'
})
export class AutocompleteDropdownDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`}}ngOnInit(){this.PlatformService.isBrowser()&&this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],r=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}};t.\u0275fac=function(n){return new(n||t)(E(_),E(ue))},t.\u0275cmp=d({type:t,selectors:[["dropdown-doc"]],decls:24,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Search","field","name",3,"ngModelChange","completeMethod","ngModel","dropdown","suggestions"],["selector","autocomplete-dropdown-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," Enabling "),o(3,"i"),e(4,"dropdown"),i(),e(5," property displays a button next to the input field where click behavior of the button is defined using "),o(6,"i"),e(7,"dropdownMode"),i(),e(8," property that takes "),o(9,"strong"),e(10,"blank"),i(),e(11," or "),o(12,"strong"),e(13,"current"),i(),e(14," as possible values. "),o(15,"i"),e(16,"blank"),i(),e(17," is the default mode to send a query with an empty string whereas "),o(18,"i"),e(19,"current"),i(),e(20," setting sends a query with the current value of the input. "),i()(),o(21,"div",0)(22,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedCountry,l)||(r.selectedCountry=l),l}),h("completeMethod",function(l){return r.filterCountry(l)}),i()(),u(23,"app-code",2)),n&2&&(p(22),v("ngModel",r.selectedCountry),c("dropdown",!0)("suggestions",r.filteredCountries),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var ge=(()=>{let t=class t{constructor(a){this.countryService=a,this.code={basic:'<p-autoComplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCountry" [forceSelection]="true" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/service/countryservice';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-force-selection-demo',
    templateUrl: './autocomplete-force-selection-demo.html'
})
export class ForceSelectionDoc implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`}}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],r=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}};t.\u0275fac=function(n){return new(n||t)(E(_))},t.\u0275cmp=d({type:t,selectors:[["force-selection-doc"]],inputs:{id:"id",title:"title"},decls:6,vars:4,consts:[[1,"card","flex","justify-content-center"],["field","name",3,"ngModelChange","completeMethod","ngModel","forceSelection","suggestions"],["selector","autocomplete-force-selection-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"ForceSelection mode validates the manual input to check whether it also exists in the suggestions list, if not the input value is cleared to make sure the value passed to the model is always one of the suggestions."),i()(),o(3,"div",0)(4,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedCountry,l)||(r.selectedCountry=l),l}),h("completeMethod",function(l){return r.filterCountry(l)}),i()(),u(5,"app-code",2)),n&2&&(p(4),v("ngModel",r.selectedCountry),c("forceSelection",!0)("suggestions",r.filteredCountries),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var he=(()=>{let t=class t{constructor(a){this.countryService=a,this.code={basic:'<p-autoComplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/service/countryservice';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-objects-demo',
    templateUrl: './autocomplete-objects-demo.html'
})
export class AutocompleteObjectsDemo implements OnInit {
    countries: any[] | undefined;

    selectedCountry: any;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`}}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a})}filterCountry(a){let n=[],r=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}};t.\u0275fac=function(n){return new(n||t)(E(_))},t.\u0275cmp=d({type:t,selectors:[["autocomplete-objects-demo"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],["placeholder","Search","field","name",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-objects-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2," AutoComplete can also work with objects using the "),o(3,"i"),e(4,"field"),i(),e(5," property that defines the label to display as a suggestion. The value passed to the model would still be the object instance of a suggestion. Here is an example with a Country object that has name and code fields such as "),o(6,"i"),e(7,'{name: "United States", code:"USA"}'),i(),e(8,". "),i()(),o(9,"div",0)(10,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedCountry,l)||(r.selectedCountry=l),l}),h("completeMethod",function(l){return r.filterCountry(l)}),i()(),u(11,"app-code",2)),n&2&&(p(10),v("ngModel",r.selectedCountry),c("suggestions",r.filteredCountries),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var ye=(()=>{let t=class t{constructor(a){this.countryService=a,this.code={basic:`<form [formGroup]="formGroup">
    <p-autoComplete formControlName="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>
</form>`,html:`
<div class="card flex justify-content-center">
    <form [formGroup]="formGroup">
        <p-autoComplete formControlName="selectedCountry" [suggestions]="filteredCountries" (completeMethod)="filterCountry($event)" field="name"></p-autoComplete>
    </form>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../service/countryservice';
import { FormControl, FormGroup } from '@angular/forms';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-reactive-forms-demo',
    templateUrl: './autocomplete-reactive-forms-demo.html'
})
export class AutocompleteReactiveFormsDemo implements OnInit {
    countries: any[] | undefined;

    formGroup: FormGroup | undefined;

    filteredCountries: any[] | undefined;

    constructor(private countryService: CountryService) {}

    ngOnInit() {
        this.countryService.getCountries().then((countries) => {
            this.countries = countries;
        });

        this.formGroup = new FormGroup({
            selectedCountry: new FormControl<object | null>(null)
        });
    }

    filterCountry(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.countries as any[]).length; i++) {
            let country = (this.countries as any[])[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }

        this.filteredCountries = filtered;
    }
}`,service:["CountryService"],data:`
//CountryService
{
    "name": "Afghanistan",
    "code": "AF"
}
...`}}ngOnInit(){this.countryService.getCountries().then(a=>{this.countries=a}),this.formGroup=new Y({selectedCountry:new $(null)})}filterCountry(a){let n=[],r=a.query;for(let m=0;m<this.countries.length;m++){let l=this.countries[m];l.name.toLowerCase().indexOf(r.toLowerCase())==0&&n.push(l)}this.filteredCountries=n}};t.\u0275fac=function(n){return new(n||t)(E(_))},t.\u0275cmp=d({type:t,selectors:[["reactive-forms-doc"]],decls:10,vars:3,consts:[[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","selectedCountry","field","name","placeholder","Search",3,"completeMethod","suggestions"],["selector","autocomplete-reactive-forms-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"AutoComplete can also be used with reactive forms. In this case, the "),o(3,"i"),e(4,"formControlName"),i(),e(5," property is used to bind the component to a form control."),i()(),o(6,"div",0)(7,"form",1)(8,"p-autoComplete",2),h("completeMethod",function(l){return r.filterCountry(l)}),i()()(),u(9,"app-code",3)),n&2&&(p(7),c("formGroup",r.formGroup),p(),c("suggestions",r.filteredCountries),p(),c("code",r.code))},dependencies:[f,J,y,z,g,C,Q,X],encapsulation:2});let s=t;return s})();var Ce=(()=>{let t=class t{constructor(){this.code={basic:`<span class="p-float-label">
    <p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" inputId="float-label"></p-autoComplete>
    <label for="float-label">Float Label</label>
</span>`,html:`
<div class="card flex justify-content-center">
    <span class="p-float-label">
        <p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" inputId="float-label"></p-autoComplete>
        <label for="float-label">Float Label</label>
    </span>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-float-label-demo',
    templateUrl: './autocomplete-float-label-demo.html',
    styleUrls: ['./autocomplete-float-label-demo.scss']
})
export class AutocompleteFloatLabelDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`}}search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["float-label-doc"]],decls:9,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"p-float-label"],["inputId","float-label",3,"ngModelChange","completeMethod","ngModel","suggestions"],["for","float-label"],["selector","autocomplete-float-label-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"A floating label appears on top of the input field when focused."),i()(),o(3,"div",0)(4,"span",1)(5,"p-autoComplete",2),b("ngModelChange",function(l){return S(r.selectedItem,l)||(r.selectedItem=l),l}),h("completeMethod",function(l){return r.search(l)}),i(),o(6,"label",3),e(7,"Float Label"),i()()(),u(8,"app-code",4)),n&2&&(p(5),v("ngModel",r.selectedItem),c("suggestions",r.suggestions),p(3),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var ve=(()=>{let t=class t{constructor(){this.code={basic:'<p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" [disabled]="true"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" (completeMethod)="search($event)" [disabled]="true"></p-autoComplete>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-disabled-demo',
    templateUrl: './autocomplete-disabled-demo.html',
    styleUrls: ['./autocomplete-disabled-demo.scss']
})
export class AutocompleteDisabledDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`}}search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["disabled-doc"]],decls:9,vars:4,consts:[[1,"card","flex","justify-content-center"],["placeholder","Search",3,"ngModelChange","completeMethod","ngModel","suggestions","disabled"],["selector","autocomplete-disabled-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"When "),o(3,"i"),e(4,"disabled"),i(),e(5," is present, the element cannot be edited and focused."),i()(),o(6,"div",0)(7,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedItem,l)||(r.selectedItem=l),l}),h("completeMethod",function(l){return r.search(l)}),i()(),u(8,"app-code",2)),n&2&&(p(7),v("ngModel",r.selectedItem),c("suggestions",r.suggestions)("disabled",!0),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var Se=(()=>{let t=class t{constructor(){this.code={basic:'<p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" class="ng-invalid ng-dirty" (completeMethod)="search($event)"></p-autoComplete>',html:`
<div class="card flex justify-content-center">
    <p-autoComplete [(ngModel)]="selectedItem" [suggestions]="suggestions" class="ng-invalid ng-dirty" (completeMethod)="search($event)"></p-autoComplete>
</div>`,typescript:`
import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
    selector: 'autocomplete-invalid-demo',
    templateUrl: './autocomplete-invalid-demo.html',
    styleUrls: ['./autocomplete-invalid-demo.scss']
})
export class AutocompleteInvalidDemo {
    items: any[] | undefined;

    selectedItem: any;

    suggestions: any[] | undefined;

    search(event: AutoCompleteCompleteEvent) {
        this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
    }
}`}}search(a){this.suggestions=[...Array(10).keys()].map(n=>a.query+"-"+n)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["invalid-doc"]],decls:12,vars:3,consts:[[1,"card","flex","justify-content-center"],[1,"ng-invalid","ng-dirty",3,"ngModelChange","completeMethod","ngModel","suggestions"],["selector","autocomplete-invalid-demo",3,"code"]],template:function(n,r){n&1&&(o(0,"app-docsectiontext")(1,"p"),e(2,"Invalid state style is added using the "),o(3,"i"),e(4,"ng-invalid"),i(),e(5," and "),o(6,"i"),e(7,"ng-dirty"),i(),e(8," class to indicate a failed validation."),i()(),o(9,"div",0)(10,"p-autoComplete",1),b("ngModelChange",function(l){return S(r.selectedItem,l)||(r.selectedItem=l),l}),h("completeMethod",function(l){return r.search(l)}),i()(),u(11,"app-code",2)),n&2&&(p(10),v("ngModel",r.selectedItem),c("suggestions",r.suggestions),p(),c("code",r.code))},dependencies:[f,y,x,g,C],encapsulation:2});let s=t;return s})();var be=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=F({type:t}),t.\u0275inj=T({imports:[G,L,ie,Z,U,oe,ee,U]});let s=t;return s})();var Ie=()=>["AutoComplete"],xe=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:re},{id:"basic",label:"Basic",component:le},{id:"reactive-forms",label:"Reactive Forms",component:ye},{id:"dropdown",label:"Dropdown",component:fe},{id:"objects",label:"Objects",component:he},{id:"template",label:"Template",component:ae},{id:"grouped",label:"Grouped",component:se},{id:"forceselection",label:"Force Selection",component:ge},{id:"virtualscroll",label:"Virtual Scroll",component:me},{id:"multiple",label:"Multiple",component:pe},{id:"floatlabel",label:"Float Label",component:Ce},{id:"disabled",label:"Disabled",component:ve},{id:"invalid",label:"Invalid",component:Se},{id:"style",label:"Style",component:ce},{id:"accessibility",label:"Accessibility",component:de}]}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular AutoComplete Component","header","AutoComplete","description","AutoComplete is an input component that provides real-time suggestions when being typed.",3,"docs","apiDocs"]],template:function(n,r){n&1&&u(0,"app-doc",0),n&2&&c("docs",r.docs)("apiDocs",K(2,Ie))},dependencies:[ne],encapsulation:2});let s=t;return s})();var Me=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=F({type:t}),t.\u0275inj=T({imports:[L.forChild([{path:"",component:xe}]),L]});let s=t;return s})();var no=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=F({type:t}),t.\u0275inj=T({imports:[G,Me,be]});let s=t;return s})();export{no as AutoCompleteDemoModule};
