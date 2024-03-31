import{a as D,b as ae}from"./chunk-YQT5QGVL.js";import"./chunk-IL4VCBHR.js";import"./chunk-5QBES3VP.js";import{a as ie,b as oe}from"./chunk-A5TA6W7J.js";import{a as G,b as J}from"./chunk-M3S4BN7L.js";import"./chunk-G7VICPVK.js";import{a as Y,b as Q}from"./chunk-W23CXJV4.js";import"./chunk-KPYNJB2H.js";import"./chunk-ES7AWOUN.js";import"./chunk-PXBAS5CJ.js";import"./chunk-DP75TYTQ.js";import"./chunk-XSSXK7EZ.js";import{a as v,b as te,c as P}from"./chunk-AS5FXEGH.js";import{a as g,b as ee}from"./chunk-X2ZDE2AM.js";import{e as z,i as N,p as R,r as X,s as $}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as K,q as F,z as w}from"./chunk-UWMVDULA.js";import{o as O,t as U}from"./chunk-N5X6XDRN.js";import{Jb as t,Nb as h,Nc as I,Ob as x,Pb as y,Sa as p,Sb as f,V as E,da as u,ea as M,ib as H,kb as s,ma as T,na as V,nb as L,oa as W,pa as j,rb as e,sb as i,tb as d,xb as B,yb as c,zb as A}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var ye=()=>({width:"50vw"}),le=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [style]="{width: '50vw'}">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [style]="{width: '50vw'}">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-basic-demo',
    templateUrl: './dialog-basic-demo.html'
})
export class DialogBasicDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-basic-demo"]],decls:18,vars:5,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible"],["selector","dialog-basic-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Dialog is used as a container and visibility is controlled with "),e(3,"i"),t(4,"visible"),i(),t(5," property. Dialogs are "),e(6,"i"),t(7,"draggable"),i(),t(8," and "),e(9,"i"),t(10,"resizable"),i(),t(11," by default."),i()(),e(12,"div",0)(13,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(14,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(15,"p"),t(16," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),d(17,"app-code",3)),a&2&&(p(14),L(f(4,ye)),h("visible",l.visible),p(3),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();var ne=(()=>{let o=class o{constructor(){this.code={typescript:"import { DialogModule } from 'primeng/dialog';"}}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(a,l){a&1&&d(0,"app-code",0),a&2&&s("code",l.code)("hideToggleCode",!0)},dependencies:[g],encapsulation:2});let n=o;return n})();var we=()=>["/theming"],re=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["style-doc"]],decls:50,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Following is the list of structural style classes, for theming classes visit "),e(3,"a",0),t(4,"theming"),i(),t(5," page."),i()(),e(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),t(11,"Name"),i(),e(12,"th"),t(13,"Element"),i()()(),e(14,"tbody")(15,"tr")(16,"td"),t(17,"p-dialog"),i(),e(18,"td"),t(19,"Container element"),i()(),e(20,"tr")(21,"td"),t(22,"p-dialog-titlebar"),i(),e(23,"td"),t(24,"Container of header."),i()(),e(25,"tr")(26,"td"),t(27,"p-dialog-title"),i(),e(28,"td"),t(29,"Header element."),i()(),e(30,"tr")(31,"td"),t(32,"p-dialog-titlebar-icon"),i(),e(33,"td"),t(34,"Icon container inside header."),i()(),e(35,"tr")(36,"td"),t(37,"p-dialog-titlebar-close"),i(),e(38,"td"),t(39,"Close icon element."),i()(),e(40,"tr")(41,"td"),t(42,"p-dialog-content"),i(),e(43,"td"),t(44,"Content element."),i()(),e(45,"tr")(46,"td"),t(47,"p-dialog-footer"),i(),e(48,"td"),t(49,"Footer element."),i()()()()()),a&2&&(p(3),s("routerLink",f(1,we)))},dependencies:[O,v],encapsulation:2});let n=o;return n})();var De=()=>({width:"50vw",height:"300px"}),se=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Long Content" [(visible)]="visible" [style]="{ width: '50vw', height: '300px' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
        commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>

    <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
        officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
        placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Long Content" [(visible)]="visible" [style]="{ width: '50vw', height: '300px' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
            commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>

        <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
        </p>
</p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-long-content-demo',
    templateUrl: './dialog-long-content-demo.html'
})
export class DialogLongContentDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-long-content-demo"]],decls:13,vars:5,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Long Content",3,"click"],["header","Long Content",3,"visibleChange","visible"],["selector","dialog-long-content-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Dialog automatically displays a scroller when content exceeeds viewport."),i()(),e(3,"div",0)(4,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(5,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(6,"p"),t(7," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i(),e(8,"p"),t(9,' "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? '),i(),e(10,"p"),t(11," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. "),i()()(),d(12,"app-code",3)),a&2&&(p(5),L(f(4,De)),h("visible",l.visible),p(7),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();var Le=()=>({width:"50vw"}),qe=()=>({"960px":"75vw"}),pe=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [breakpoints]="{ '960px': '75vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [breakpoints]="{ '960px': '75vw' }" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-responsive-demo',
    templateUrl: './dialog-responsive-demo.html'
})
export class DialogResponsiveDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-responsive-demo"]],decls:15,vars:9,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible","breakpoints","draggable","resizable"],["selector","dialog-responsive-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2," Dialog width can be adjusted per screen size with the "),e(3,"i"),t(4,"breakpoints"),i(),t(5," option where a key defines the max-width for the breakpoint and value for the corresponding width. When no breakpoint matches width defined in "),e(6,"i"),t(7,"style"),i(),t(8," property is used. "),i()(),e(9,"div",0)(10,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(11,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(12,"p"),t(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),d(14,"app-code",3)),a&2&&(p(11),L(f(7,Le)),h("visible",l.visible),s("breakpoints",f(8,qe))("draggable",!1)("resizable",!1),p(3),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();var Se=()=>({width:"50vw"}),me=(()=>{let o=class o{constructor(){this.visible=!1,this.position="center",this.code={basic:`<div class="flex flex-wrap gap-2">
    <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" styleClass="p-button-help"></p-button>
    <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" styleClass="p-button-help"></p-button>
</div>
<div class="flex flex-wrap gap-2">
    <p-button (click)="showDialog('top-left')" icon="pi pi-arrow-down-right" label="TopLeft" styleClass="p-button-warning"></p-button>
    <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" styleClass="p-button-warning"></p-button>
    <p-button (click)="showDialog('top-right')" icon="pi pi-arrow-down-left" label="TopRight" styleClass="p-button-warning"></p-button>
</div>
<div class="flex flex-wrap gap-2">
    <p-button (click)="showDialog('bottom-left')" icon="pi pi-arrow-up-right" label="BottomLeft" styleClass="p-button-success"></p-button>
    <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" styleClass="p-button-success"></p-button>
    <p-button (click)="showDialog('bottom-right')" icon="pi pi-arrow-up-left" label="BottomRight" styleClass="p-button-success"></p-button>
</div>
<p-dialog header="Header" [(visible)]="visible" [position]="position" [style]="{ width: '50vw' }">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-dialog>`,html:`
<div class="card flex flex-column align-items-center gap-2">
    <div class="flex flex-wrap gap-2">
        <p-button (click)="showDialog('left')" icon="pi pi-arrow-right" label="Left" styleClass="p-button-help"></p-button>
        <p-button (click)="showDialog('right')" icon="pi pi-arrow-left" label="Right" styleClass="p-button-help"></p-button>
    </div>
    <div class="flex flex-wrap gap-2">
        <p-button (click)="showDialog('top-left')" icon="pi pi-arrow-down-right" label="TopLeft" styleClass="p-button-warning"></p-button>
        <p-button (click)="showDialog('top')" icon="pi pi-arrow-down" label="Top" styleClass="p-button-warning"></p-button>
        <p-button (click)="showDialog('top-right')" icon="pi pi-arrow-down-left" label="TopRight" styleClass="p-button-warning"></p-button>
    </div>
    <div class="flex flex-wrap gap-2">
        <p-button (click)="showDialog('bottom-left')" icon="pi pi-arrow-up-right" label="BottomLeft" styleClass="p-button-success"></p-button>
        <p-button (click)="showDialog('bottom')" icon="pi pi-arrow-up" label="Bottom" styleClass="p-button-success"></p-button>
        <p-button (click)="showDialog('bottom-right')" icon="pi pi-arrow-up-left" label="BottomRight" styleClass="p-button-success"></p-button>
    </div>
    <p-dialog header="Header" [(visible)]="visible" [position]="position" [style]="{ width: '50vw' }">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-position-demo',
    templateUrl: './dialog-position-demo.html'
})
export class DialogPositionDemo {
    visible: boolean = false;

    position: string = 'center';

    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }
}`}}showDialog(m){this.position=m,this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-position-demo"]],decls:22,vars:6,consts:[[1,"card","flex","flex-column","align-items-center","gap-2"],[1,"flex","flex-wrap","gap-2"],["icon","pi pi-arrow-right","label","Left","styleClass","p-button-help",3,"click"],["icon","pi pi-arrow-left","label","Right","styleClass","p-button-help",3,"click"],["icon","pi pi-arrow-down-right","label","TopLeft","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-down","label","Top","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-down-left","label","TopRight","styleClass","p-button-warning",3,"click"],["icon","pi pi-arrow-up-right","label","BottomLeft","styleClass","p-button-success",3,"click"],["icon","pi pi-arrow-up","label","Bottom","styleClass","p-button-success",3,"click"],["icon","pi pi-arrow-up-left","label","BottomRight","styleClass","p-button-success",3,"click"],["header","Header",3,"visibleChange","visible","position"],["selector","dialog-position-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"The "),e(3,"i"),t(4,"position"),i(),t(5," property is used to display a Dialog at all edges and corners of the screen."),i()(),e(6,"div",0)(7,"div",1)(8,"p-button",2),c("click",function(){return l.showDialog("left")}),i(),e(9,"p-button",3),c("click",function(){return l.showDialog("right")}),i()(),e(10,"div",1)(11,"p-button",4),c("click",function(){return l.showDialog("top-left")}),i(),e(12,"p-button",5),c("click",function(){return l.showDialog("top")}),i(),e(13,"p-button",6),c("click",function(){return l.showDialog("top-right")}),i()(),e(14,"div",1)(15,"p-button",7),c("click",function(){return l.showDialog("bottom-left")}),i(),e(16,"p-button",8),c("click",function(){return l.showDialog("bottom")}),i(),e(17,"p-button",9),c("click",function(){return l.showDialog("bottom-right")}),i()(),e(18,"p-dialog",10),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(19,"p"),t(20," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),d(21,"app-code",11)),a&2&&(p(18),L(f(5,Se)),h("visible",l.visible),s("position",l.position),p(3),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();var Ce=()=>({width:"50vw"}),de=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [style]="{width: '50vw'}" [maximizable]="true">
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [modal]="true" [(visible)]="visible" [style]="{width: '50vw'}" [maximizable]="true">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-maximizable-demo',
    templateUrl: './dialog-maximizable-demo.html'
})
export class DialogMaximizableDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-maximizable-demo"]],decls:15,vars:6,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible","maximizable"],["selector","dialog-maximizable-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Setting "),e(3,"i"),t(4,"maximizable"),i(),t(5," property to "),e(6,"i"),t(7,"true"),i(),t(8," enables the full screen mode."),i()(),e(9,"div",0)(10,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(11,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(12,"p"),t(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),d(14,"app-code",3)),a&2&&(p(11),L(f(5,Ce)),h("visible",l.visible),s("maximizable",!0),p(3),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();var ke=()=>({width:"50rem"}),Ee=()=>({"1199px":"75vw","575px":"90vw"});function Me(n,o){n&1&&(e(0,"div",7),d(1,"p-avatar",8),e(2,"span",9),t(3,"Amy Elsner"),i()())}function Te(n,o){if(n&1){let Z=B();e(0,"p-button",10),c("click",function(){T(Z);let a=A();return V(a.visible=!1)}),i()}n&2&&s("autofocus",!0)}var ce=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [modal]="true" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
        <ng-template pTemplate="header">
            <div class="inline-flex align-items-center justify-content-center gap-2">
                <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png" shape="circle" />
                <span class="font-bold white-space-nowrap">Amy Elsner</span>
            </div>
        </ng-template>
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ng-template pTemplate="footer">
            <p-button icon="pi pi-check" (click)="visible = false" label="Ok" pAutoFocus [autofocus]="true"></p-button>
        </ng-template>
</p-dialog>`,html:`<div class="card flex justify-content-center">
<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [modal]="true" [style]="{ width: '50rem' }" [breakpoints]="{ '1199px': '75vw', '575px': '90vw' }">
    <ng-template pTemplate="header">
        <div class="inline-flex align-items-center justify-content-center gap-2">
            <p-avatar image="https://primefaces.org/cdn/primeng/images/avatar/amyelsner.png" shape="circle" />
            <span class="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    </ng-template>
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <ng-template pTemplate="footer">
        <p-button icon="pi pi-check" (click)="visible = false" label="Ok" pAutoFocus [autofocus]="true"></p-button>
    </ng-template>
</p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-template-demo',
    templateUrl: './dialog-template-demo.html'
})
export class DialogTemplateDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-template-demo"]],decls:17,vars:8,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible","modal","breakpoints"],["pTemplate","header"],[1,"m-0"],["pTemplate","footer"],["selector","dialog-template-demo",3,"code"],[1,"inline-flex","align-items-center","justify-content-center","gap-2"],["image","https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png","shape","circle"],[1,"font-bold","white-space-nowrap"],["icon","pi pi-check","label","Ok","pAutoFocus","",3,"click","autofocus"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Dialog can be customized using "),e(3,"i"),t(4,"header"),i(),t(5," and "),e(6,"i"),t(7,"footer"),i(),t(8," templates."),i()(),e(9,"div",0)(10,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(11,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),H(12,Me,4,0,"ng-template",3),e(13,"p",4),t(14," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i(),H(15,Te,1,1,"ng-template",5),i()(),d(16,"app-code",6)),a&2&&(p(11),L(f(6,ke)),h("visible",l.visible),s("modal",!0)("breakpoints",f(7,Ee)),p(5),s("code",l.code))},dependencies:[g,D,F,w,v,ie,Y],encapsulation:2});let n=o;return n})();var Ve=()=>({width:"50vw"}),ue=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
    <div class="flex py-2 justify-content-center">
        <p-dropdown appendTo="body" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name"></p-dropdown>
    </div>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
        <div class="flex py-2 justify-content-center">
            <p-dropdown appendTo="body" [options]="cities" [(ngModel)]="selectedCity" placeholder="Select a City" optionLabel="name"></p-dropdown>
        </div>
    </p-dialog>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}

@Component({
    selector: 'dialog-overlays-inside-demo',
    templateUrl: './dialog-overlays-inside-demo.html'
})
export class DialogOverlaysInsideDemo implements OnInit {
    cities: City[] | undefined;

    selectedCity: City | undefined;

    visible: boolean = false;

    ngOnInit() { 
        this.cities = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];
    }

    showDialog() {
        this.visible = true;
    }
}`}}ngOnInit(){this.cities=[{name:"New York",code:"NY"},{name:"Rome",code:"RM"},{name:"London",code:"LDN"},{name:"Istanbul",code:"IST"},{name:"Paris",code:"PRS"}]}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-overlays-inside-demo"]],decls:12,vars:7,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible"],[1,"flex","py-2","justify-content-center"],["appendTo","body","placeholder","Select a City","optionLabel","name",3,"ngModelChange","options","ngModel"],["selector","dialog-overlays-inside-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2," When dialog includes other components with overlays such as dropdown, the overlay part cannot exceed dialog boundaries due to overflow. In order to solve this, you can either append the overlay to the body by using "),e(3,"i"),t(4,"appendTo"),i(),t(5," property or allow overflow in dialog. "),i()(),e(6,"div",0)(7,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(8,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(9,"div",3)(10,"p-dropdown",4),y("ngModelChange",function(r){return x(l.selectedCity,r)||(l.selectedCity=r),r}),i()()()(),d(11,"app-code",5)),a&2&&(p(8),L(f(6,Ve)),h("visible",l.visible),p(2),s("options",l.cities),h("ngModel",l.selectedCity),p(),s("code",l.code))},dependencies:[g,z,N,D,w,G,v],encapsulation:2});let n=o;return n})();var He=()=>({width:"50vw"}),be=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
<p-dialog header="Header" [(visible)]="visible" [modal]="true" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
    <p class="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</p-dialog>`,html:`
<div class="card flex justify-content-center">
    <p-button (click)="showDialog()" icon="pi pi-external-link" label="Show"></p-button>
    <p-dialog header="Header" [(visible)]="visible" [modal]="true" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
        <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-modal-demo',
    templateUrl: './dialog-modal-demo.html'
})
export class DialogModalDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }
}`}}showDialog(){this.visible=!0}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-modal-demo"]],decls:15,vars:8,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-external-link","label","Show",3,"click"],["header","Header",3,"visibleChange","visible","modal","draggable","resizable"],[1,"m-0"],["selector","dialog-modal-demo",3,"code"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p"),t(2,"Mask layer behind the Dialog can be turned on by setting the "),e(3,"i"),t(4,"modal"),i(),t(5," property to "),e(6,"i"),t(7,"true"),i(),t(8,"."),i()(),e(9,"div",0)(10,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(11,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),e(12,"p",3),t(13," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),i()()(),d(14,"app-code",4)),a&2&&(p(11),L(f(7,He)),h("visible",l.visible),s("modal",!0)("draggable",!1)("resizable",!1),p(3),s("code",l.code))},dependencies:[g,D,w,v],encapsulation:2});let n=o;return n})();function Ae(n,o){if(n&1){let Z=B();e(0,"div",5),W(),e(1,"svg",6),d(2,"path",7),e(3,"mask",8),d(4,"path",9),i(),e(5,"g",10),d(6,"path",11),i(),d(7,"path",12)(8,"path",13)(9,"path",14)(10,"path",15)(11,"path",16)(12,"path",17)(13,"path",18)(14,"path",19)(15,"path",20)(16,"path",21),i(),j(),e(17,"div",22)(18,"label",23),t(19,"Username"),i(),d(20,"input",24),i(),e(21,"div",22)(22,"label",25),t(23,"Password"),i(),d(24,"input",26),i(),e(25,"div",27)(26,"p-button",28),c("click",function(){T(Z);let a=A();return V(a.closeDialog())}),i(),e(27,"p-button",29),c("click",function(){T(Z);let a=A();return V(a.closeDialog())}),i()()()}n&2&&(p(26),s("text",!0),p(),s("text",!0))}var fe=(()=>{let o=class o{constructor(){this.visible=!1,this.code={basic:`<p-button (click)="showDialog()" icon="pi pi-user" label="Login"></p-button>
<p-dialog [(visible)]="visible">
    <ng-template pTemplate="headless">
        <div class="flex flex-column px-8 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
                </mask>
                <g mask="url(#mask0_1_36)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--primary-color)" />
                </g>
                <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--primary-color-text)" />
                <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--primary-color-text)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--primary-color-text)"
                />
                <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--primary-color-text)" />
                <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--primary-color-text)" />
                <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--primary-color-text)" />
                <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--primary-color-text)" />
            </svg>
            <div class="inline-flex flex-column gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="bg-white-alpha-20 border-none p-3 text-primary-50"/>
            </div>
            <div class="inline-flex flex-column gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input pInputText id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"/>
            </div>
            <div class="flex align-items-center gap-2">
                <p-button label="Sign-In" (click)="closeDialog()" [text]="true" styleClass="w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" class="w-full" ></p-button>
                <p-button label="Cancel" (click)="closeDialog()" [text]="true"  styleClass="w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" class="w-full"></p-button>
            </div>
        </div>
    </ng-template>
</p-dialog>`,html:`<div class="card flex justify-content-center">
<p-button (click)="showDialog()" icon="pi pi-user" label="Login"></p-button>
<p-dialog [(visible)]="visible">
    <ng-template pTemplate="headless">
        <div class="flex flex-column px-8 py-5 gap-4" style="border-radius: 12px; background-image: radial-gradient(circle at left top, var(--primary-400), var(--primary-700))">
            <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg" class="block mx-auto">
                <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color)" />
                <mask id="mask0_1_36" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="31" height="33">
                    <path d="M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z" fill="var(--primary-color-text)" />
                </mask>
                <g mask="url(#mask0_1_36)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z" fill="var(--primary-color)" />
                </g>
                <path d="M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z" fill="var(--primary-color-text)" />
                <path d="M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z"
                    fill="var(--primary-color-text)"
                />
                <path d="M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                <path d="M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z" fill="var(--primary-color-text)" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z"
                    fill="var(--primary-color-text)"
                />
                <path d="M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z" fill="var(--primary-color-text)" />
                <path d="M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z" fill="var(--primary-color-text)" />
                <path d="M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z" fill="var(--primary-color-text)" />
                <path d="M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z" fill="var(--primary-color-text)" />
            </svg>
            <div class="inline-flex flex-column gap-2">
                <label for="username" class="text-primary-50 font-semibold">Username</label>
                <input pInputText id="username" class="bg-white-alpha-20 border-none p-3 text-primary-50"/>
            </div>
            <div class="inline-flex flex-column gap-2">
                <label for="password" class="text-primary-50 font-semibold">Password</label>
                <input pInputText id="password" class="bg-white-alpha-20 border-none p-3 text-primary-50" type="password"/>
            </div>
            <div class="flex align-items-center gap-2">
                <p-button label="Sign-In" (click)="closeDialog()" [text]="true" styleClass="w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" class="w-full" ></p-button>
                <p-button label="Cancel" (click)="closeDialog()" [text]="true"  styleClass="w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10" class="w-full"></p-button>
            </div>
        </div>
    </ng-template>
</p-dialog>
</div>`,typescript:`
import { Component } from '@angular/core';

@Component({
    selector: 'dialog-headless-demo',
    templateUrl: './dialog-headless-demo.html'
})
export class DialogHeadlessDemo {
    visible: boolean = false;

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }
}`}}showDialog(){this.visible=!0}closeDialog(){this.visible=!1}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["dialog-headless-demo"]],decls:10,vars:4,consts:[[1,"card","flex","justify-content-center"],["icon","pi pi-user","label","Login",3,"click"],[3,"visibleChange","modal","maskStyle","visible"],["pTemplate","headless"],["selector","dialog-headless-demo",3,"code"],[1,"flex","flex-column","px-8","py-5","gap-4",2,"border-radius","12px","background-image","radial-gradient(circle at left top, var(--primary-400), var(--primary-700))"],["width","33","height","35","viewBox","0 0 33 35","fill","none","xmlns","http://www.w3.org/2000/svg",1,"block","mx-auto"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--primary-color)"],["id","mask0_1_36","maskUnits","userSpaceOnUse","x","0","y","0","width","31","height","33",2,"mask-type","luminance"],["d","M15.1934 0V0V0L0.0391235 5.38288L2.35052 25.3417L15.1934 32.427V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1934 0Z","fill","var(--primary-color-text)"],["mask","url(#mask0_1_36)"],["fill-rule","evenodd","clip-rule","evenodd","d","M15.1935 0V3.5994V3.58318V20.0075V20.0075V32.427V32.427L28.0364 25.3417L30.3478 5.38288L15.1935 0Z","fill","var(--primary-color)"],["d","M19.6399 15.3776L18.1861 15.0547L19.3169 16.6695V21.6755L23.1938 18.4458V12.9554L21.4169 13.6013L19.6399 15.3776Z","fill","var(--primary-color-text)"],["d","M10.5936 15.3776L12.0474 15.0547L10.9166 16.6695V21.6755L7.03966 18.4458V12.9554L8.81661 13.6013L10.5936 15.3776Z","fill","var(--primary-color-text)"],["fill-rule","evenodd","clip-rule","evenodd","d","M11.3853 16.9726L12.6739 15.0309L13.4793 15.5163H16.7008L17.5061 15.0309L18.7947 16.9726V24.254L17.8283 25.7103L16.7008 26.843H13.4793L12.3518 25.7103L11.3853 24.254V16.9726Z","fill","var(--primary-color-text)"],["d","M19.3168 24.7437L21.4168 22.6444V20.5451L19.3168 22.3214V24.7437Z","fill","var(--primary-color-text)"],["d","M10.9166 24.7437L8.81662 22.6444V20.5451L10.9166 22.3214V24.7437Z","fill","var(--primary-color-text)"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.0167 5.68861L11.7244 8.7568L13.8244 14.8932H14.7936V5.68861H13.0167ZM15.4397 5.68861V14.8932H16.5706L18.5091 8.7568L17.2167 5.68861H15.4397Z","fill","var(--primary-color-text)"],["d","M13.8244 14.8932L6.87813 12.3094L5.90888 8.27235L11.8859 8.7568L13.9859 14.8932H13.8244Z","fill","var(--primary-color-text)"],["d","M16.5706 14.8932L23.5169 12.3094L24.4861 8.27235L18.3476 8.7568L16.4091 14.8932H16.5706Z","fill","var(--primary-color-text)"],["d","M18.8321 8.27235L22.2245 7.94938L19.9629 5.68861H17.7013L18.8321 8.27235Z","fill","var(--primary-color-text)"],["d","M11.4013 8.27235L8.00893 7.94938L10.2705 5.68861H12.5321L11.4013 8.27235Z","fill","var(--primary-color-text)"],[1,"inline-flex","flex-column","gap-2"],["for","username",1,"text-primary-50","font-semibold"],["pInputText","","id","username",1,"bg-white-alpha-20","border-none","p-3","text-primary-50"],["for","password",1,"text-primary-50","font-semibold"],["pInputText","","id","password","type","password",1,"bg-white-alpha-20","border-none","p-3","text-primary-50"],[1,"flex","align-items-center","gap-2"],["label","Sign-In","styleClass","w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10",1,"w-full",3,"click","text"],["label","Cancel","styleClass","w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10",1,"w-full",3,"click","text"]],template:function(a,l){a&1&&(e(0,"app-docsectiontext")(1,"p")(2,"i"),t(3,"Headless"),i(),t(4," mode allows you to customize the entire user interface instead of the default elements."),i()(),e(5,"div",0)(6,"p-button",1),c("click",function(){return l.showDialog()}),i(),e(7,"p-dialog",2),y("visibleChange",function(r){return x(l.visible,r)||(l.visible=r),r}),H(8,Ae,28,2,"ng-template",3),i()(),d(9,"app-code",4)),a&2&&(p(7),s("modal",!0)("maskStyle","backdrop-filter: blur(2px)"),h("visible",l.visible),p(2),s("code",l.code))},dependencies:[g,D,F,w,v,X],encapsulation:2});let n=o;return n})();var ge=(()=>{let o=class o{constructor(){this.code={html:`<button pButton
    icon="pi pi-external-link" 
    (click)="visible = true" 
    aria-controls="{{visible ? 'dialog' : null}}" 
    aria-expanded="{{visible ? true : false}}"
></button>
<p-dialog id="dialog" header="Header" [(visible)]="visible" [style]="{ width: '50vw' }" (onHide)="visible = false">
    <p>Content</p>
</p-dialog>`}}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["accessibility-doc"]],decls:110,vars:2,consts:[["href","/configuration/#locale"],[3,"code","hideToggleCode"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(a,l){a&1&&(e(0,"div")(1,"app-docsectiontext")(2,"h3"),t(3,"Screen Reader"),i(),e(4,"p"),t(5," Dialog component uses "),e(6,"i"),t(7,"dialog"),i(),t(8," role along with "),e(9,"i"),t(10,"aria-labelledby"),i(),t(11," referring to the header element however any attribute is passed to the root element so you may use "),e(12,"i"),t(13,"aria-labelledby"),i(),t(14," to override this default behavior. In addition "),e(15,"i"),t(16,"aria-modal"),i(),t(17," is added since focus is kept within the popup. "),i(),e(18,"p"),t(19,"It is recommended to use a trigger component that can be accessed with keyboard such as a button, if not adding "),e(20,"i"),t(21,"tabIndex"),i(),t(22," would be necessary."),i(),e(23,"p"),t(24,"Trigger element also requires "),e(25,"i"),t(26,"aria-expanded"),i(),t(27," and "),e(28,"i"),t(29,"aria-controls"),i(),t(30," to be handled explicitly."),i(),e(31,"p"),t(32," Close element is a "),e(33,"i"),t(34,"button"),i(),t(35," with an "),e(36,"i"),t(37,"aria-label"),i(),t(38," that refers to the "),e(39,"i"),t(40,"aria.close"),i(),t(41," property of the "),e(42,"a",0),t(43,"locale"),i(),t(44," API by default, you may use"),e(45,"i"),t(46,"closeButtonProps"),i(),t(47," to customize the element and override the default "),e(48,"i"),t(49,"aria-label"),i(),t(50,". "),i(),d(51,"app-code",1),e(52,"h3"),t(53,"Overlay Keyboard Support"),i(),e(54,"div",2)(55,"table",3)(56,"thead")(57,"tr")(58,"th"),t(59,"Key"),i(),e(60,"th"),t(61,"Function"),i()()(),e(62,"tbody")(63,"tr")(64,"td")(65,"i"),t(66,"tab"),i()(),e(67,"td"),t(68,"Moves focus to the next the focusable element within the dialog."),i()(),e(69,"tr")(70,"td")(71,"i"),t(72,"shift"),i(),t(73," + "),e(74,"i"),t(75,"tab"),i()(),e(76,"td"),t(77,"Moves focus to the previous the focusable element within the dialog."),i()(),e(78,"tr")(79,"td")(80,"i"),t(81,"escape"),i()(),e(82,"td"),t(83,"Closes the dialog if "),e(84,"i"),t(85,"closeOnEscape"),i(),t(86," is true."),i()()()()(),e(87,"h3"),t(88,"Close Button Keyboard Support"),i(),e(89,"div",2)(90,"table",3)(91,"thead")(92,"tr")(93,"th"),t(94,"Key"),i(),e(95,"th"),t(96,"Function"),i()()(),e(97,"tbody")(98,"tr")(99,"td")(100,"i"),t(101,"enter"),i()(),e(102,"td"),t(103,"Closes the dialog."),i()(),e(104,"tr")(105,"td")(106,"i"),t(107,"space"),i()(),e(108,"td"),t(109,"Closes the dialog."),i()()()()()()()),a&2&&(p(51),s("code",l.code)("hideToggleCode",!0))},dependencies:[g,v],encapsulation:2});let n=o;return n})();var ve=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=M({type:o}),o.\u0275inj=E({imports:[I,ee,U,R,ae,K,J,P,$,oe,Q,P]});let n=o;return n})();var Ue=()=>["Dialog"],he=(()=>{let o=class o{constructor(){this.docs=[{id:"import",label:"Import",component:ne},{id:"basic",label:"Basic",component:le},{id:"longcontent",label:"Long Content",component:se},{id:"modal",label:"Modal",component:be},{id:"responsive",label:"Responsive",component:pe},{id:"position",label:"Position",component:me},{id:"maximizable",label:"Maximizable",component:de},{id:"custom",label:"Custom Content",component:ce},{id:"overlaysinside",label:"Overlays Inside",component:ue},{id:"headless",label:"Headless",component:fe},{id:"style",label:"Style",component:re},{id:"accessibility",label:"Accessibility",component:ge}]}};o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=u({type:o,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Dialog Component","header","Dialog","description","Dialog is a container to display content in an overlay window.",3,"docs","apiDocs"]],template:function(a,l){a&1&&d(0,"app-doc",0),a&2&&s("docs",l.docs)("apiDocs",f(2,Ue))},dependencies:[te],encapsulation:2});let n=o;return n})();var xe=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=M({type:o}),o.\u0275inj=E({imports:[U.forChild([{path:"",component:he}]),U]});let n=o;return n})();var ai=(()=>{let o=class o{};o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=M({type:o}),o.\u0275inj=E({imports:[I,xe,ve]});let n=o;return n})();export{ai as DialogDemoModule};
