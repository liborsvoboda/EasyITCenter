import{a as T,b as Se}from"./chunk-VQELUIPY.js";import"./chunk-IL4VCBHR.js";import"./chunk-5QBES3VP.js";import{a as be,b as ye}from"./chunk-C5QF4TVV.js";import{a as v}from"./chunk-NH53W3CT.js";import{a as Y,b as he}from"./chunk-QGLUNQP3.js";import"./chunk-5W5PG5VT.js";import"./chunk-Z2ZAEWPQ.js";import"./chunk-CZYOEPZS.js";import"./chunk-PXBAS5CJ.js";import"./chunk-XSSXK7EZ.js";import{a as S,b as fe,c as Z}from"./chunk-AS5FXEGH.js";import{a as w,b as ve}from"./chunk-X2ZDE2AM.js";import{e as J,i as X,p as ce}from"./chunk-5R6LCAUH.js";import"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import{A as ue,q as _,y as R,z as ge}from"./chunk-UWMVDULA.js";import{o as de,t as H}from"./chunk-N5X6XDRN.js";import{Cc as me,Ec as G,Fb as ie,Fc as q,Gb as ne,Hb as ae,Ic as pe,Jb as i,Kb as z,Lb as oe,Mb as re,Na as g,Nb as b,Nc as Q,Ob as u,Pb as x,Pc as K,Qb as A,Sa as c,Sb as y,Ta as I,Ub as le,V as N,da as h,ea as U,ib as f,kb as s,kc as se,ma as M,na as W,rb as n,sb as a,tb as d,xb as B,yb as j,za as te,zb as F}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var He=["galleria"],qe=()=>({"max-width":"640px"}),Qe=(t,e)=>({width:t,display:e});function Ke(t,e){if(t&1&&d(0,"img",7),t&2){let m=e.$implicit,r=F();s("src",m.itemImageSrc,g)("ngStyle",le(2,Qe,r.fullscreen?"":"100%",r.fullscreen?"":"block"))}}function Je(t,e){if(t&1&&(n(0,"div",8),d(1,"img",9),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}function Xe(t,e){if(t&1&&(n(0,"span",14)(1,"span"),i(2),a(),n(3,"span",15),i(4),a(),n(5,"span"),i(6),a()()),t&2){let m=F(2);c(2),re("",m.activeIndex+1,"/",m.images.length,""),c(2),z(m.images[m.activeIndex].title),c(2),z(m.images[m.activeIndex].alt)}}function Ye(t,e){if(t&1){let m=B();n(0,"div",10)(1,"button",11),j("click",function(){M(m);let l=F();return W(l.onThumbnailButtonClick())}),a(),f(2,Xe,7,4,"span",12),n(3,"button",13),j("click",function(){M(m);let l=F();return W(l.toggleFullScreen())}),a()()}if(t&2){let m=F();c(2),s("ngIf",m.images),c(),s("icon",m.fullScreenIcon())}}var xe=(()=>{let e=class e{constructor(r,l,o){this.platformId=r,this.photoService=l,this.cd=o,this.fullscreen=!1,this.activeIndex=0,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria
    #galleria
    [(value)]="images"
    [(activeIndex)]="activeIndex"
    [numVisible]="5"
    [showThumbnails]="showThumbnails"
    [showItemNavigators]="true"
    [showItemNavigatorsOnHover]="true"
    [circular]="true"
    [autoPlay]="true"
    [transitionInterval]="3000"
    [containerStyle]="{ 'max-width': '640px' }"
    [containerClass]="galleriaClass()"
>
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" [ngStyle]="{ width: !fullscreen ? '100%' : '', display: !fullscreen ? 'block' : '' }" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
    <ng-template pTemplate="footer" let-item>
        <div class="custom-galleria-footer">
            <button type="button" pButton icon="pi pi-list" (click)="onThumbnailButtonClick()"></button>
            <span *ngIf="images" class="title-container">
                <span>{{ activeIndex + 1 }}/{{ images.length }}</span>
                <span class="title">{{ images[activeIndex].title }}</span>
                <span>{{ images[activeIndex].alt }}</span>
            </span>
            <button type="button" pButton [icon]="fullScreenIcon()" (click)="toggleFullScreen()" class="fullscreen-button"></button>
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria #galleria [(value)]="images" [(activeIndex)]="activeIndex" [numVisible]="5" [showThumbnails]="showThumbnails" [showItemNavigators]="true" [showItemNavigatorsOnHover]="true" [circular]="true" [autoPlay]="true" [transitionInterval]="3000" [containerStyle]="{'width':'100%'}" [containerClass]="galleriaClass()"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-advanced-demo',
    templateUrl: './galleria-advanced-demo.html',
    styleUrls: ['./galleria-advanced-demo.scss']
})
export class GalleriaAdvancedDemo implements OnInit, OnDestroy {

    images: any[] | undefined;

    showThumbnails: boolean | undefined;

    fullscreen: boolean = false;

    activeIndex: number = 0;

    onFullScreenListener: any;

    @ViewChild('galleria') galleria: Galleria | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    
    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.bindDocumentListeners();
    }

    onThumbnailButtonClick() {
        this.showThumbnails = !this.showThumbnails;
    }

    toggleFullScreen() {
        if (this.fullscreen) {
            this.closePreviewFullScreen();
        } else {
            this.openPreviewFullScreen();
        }

        this.cd.detach();
    }

    openPreviewFullScreen() {
        let elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem['mozRequestFullScreen']) {
            /* Firefox */
            elem['mozRequestFullScreen']();
        } else if (elem['webkitRequestFullscreen']) {
            /* Chrome, Safari & Opera */
            elem['webkitRequestFullscreen']();
        } else if (elem['msRequestFullscreen']) {
            /* IE/Edge */
            elem['msRequestFullscreen']();
        }
    }

    onFullScreenChange() {
        this.fullscreen = !this.fullscreen;
        this.cd.detectChanges();
        this.cd.reattach();
    }

    closePreviewFullScreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document['mozCancelFullScreen']) {
            document['mozCancelFullScreen']();
        } else if (document['webkitExitFullscreen']) {
            document['webkitExitFullscreen']();
        } else if (document['msExitFullscreen']) {
            document['msExitFullscreen']();
        }
    }

    bindDocumentListeners() {
        this.onFullScreenListener = this.onFullScreenChange.bind(this);
        document.addEventListener('fullscreenchange', this.onFullScreenListener);
        document.addEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.addEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.addEventListener('msfullscreenchange', this.onFullScreenListener);
    }

    unbindDocumentListeners() {
        document.removeEventListener('fullscreenchange', this.onFullScreenListener);
        document.removeEventListener('mozfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('webkitfullscreenchange', this.onFullScreenListener);
        document.removeEventListener('msfullscreenchange', this.onFullScreenListener);
        this.onFullScreenListener = null;
    }

    ngOnDestroy() {
        this.unbindDocumentListeners();
    }

    galleriaClass() {
        return \`custom-galleria \${this.fullscreen ? 'fullscreen' : ''}\`;
    }

    fullScreenIcon() {
        return \`pi \${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}\`;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,scss:`
:host ::ng-deep {
    .custom-galleria {
        &.p-galleria {
            &.fullscreen {
                display: flex;
                flex-direction: column;
    
                .p-galleria-content {
                    flex-grow: 1;
                    justify-content: center;
                }
            }
    
            .p-galleria-content {
                position: relative;
            }
    
            .p-galleria-thumbnail-wrapper {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
    
            .p-galleria-thumbnail-items-container {
                width: 100%;
            }
    
            .custom-galleria-footer {
                display: flex;
                align-items: center;
                background-color: rgba(0, 0, 0, .9);
                color: #ffffff;
    
                > button {
                    background-color: transparent;
                    color: #ffffff;
                    border: 0 none;
                    border-radius: 0;
                    margin: .2rem 0;
    
                    &.fullscreen-button {
                        margin-left: auto;
                    }
    
                    &:hover {
                        background-color: rgba(255, 255, 255, 0.1);
                    }
                }
            }
    
            .title-container {
                > span {
                    font-size: .9rem;
                    padding-left: .829rem;
    
                    &.title {
                        font-weight: bold;
                    }
                }
            }
        }
    }
}`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r),this.bindDocumentListeners()}onThumbnailButtonClick(){this.showThumbnails=!this.showThumbnails}toggleFullScreen(){this.fullscreen?this.closePreviewFullScreen():this.openPreviewFullScreen(),this.cd.detach()}openPreviewFullScreen(){let r=this.galleria?.element.nativeElement.querySelector(".p-galleria");r.requestFullscreen?r.requestFullscreen():r.mozRequestFullScreen?r.mozRequestFullScreen():r.webkitRequestFullscreen?r.webkitRequestFullscreen():r.msRequestFullscreen&&r.msRequestFullscreen()}onFullScreenChange(){this.fullscreen=!this.fullscreen,this.cd.detectChanges(),this.cd.reattach()}closePreviewFullScreen(){K(this.platformId)&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen())}bindDocumentListeners(){K(this.platformId)&&(this.onFullScreenListener=this.onFullScreenChange.bind(this),document.addEventListener("fullscreenchange",this.onFullScreenListener),document.addEventListener("mozfullscreenchange",this.onFullScreenListener),document.addEventListener("webkitfullscreenchange",this.onFullScreenListener),document.addEventListener("msfullscreenchange",this.onFullScreenListener))}unbindDocumentListeners(){K(this.platformId)&&(document.removeEventListener("fullscreenchange",this.onFullScreenListener),document.removeEventListener("mozfullscreenchange",this.onFullScreenListener),document.removeEventListener("webkitfullscreenchange",this.onFullScreenListener),document.removeEventListener("msfullscreenchange",this.onFullScreenListener),this.onFullScreenListener=null)}ngOnDestroy(){this.unbindDocumentListeners()}galleriaClass(){return`custom-galleria ${this.fullscreen?"fullscreen":""}`}fullScreenIcon(){return`pi ${this.fullscreen?"pi-window-minimize":"pi-window-maximize"}`}};e.\u0275fac=function(l){return new(l||e)(I(te),I(v),I(se))},e.\u0275cmp=h({type:e,selectors:[["galleria-advanced-doc"]],viewQuery:function(l,o){if(l&1&&ie(He,5),l&2){let C;ne(C=ae())&&(o.galleria=C.first)}},decls:10,vars:13,consts:[["galleria",""],[1,"card"],[3,"valueChange","activeIndexChange","value","activeIndex","numVisible","showThumbnails","showItemNavigators","showItemNavigatorsOnHover","circular","autoPlay","transitionInterval","containerStyle","containerClass"],["pTemplate","item"],["pTemplate","thumbnail"],["pTemplate","footer"],["selector","galleria-advanced-demo",3,"code"],[3,"src","ngStyle"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"],[1,"custom-galleria-footer"],["type","button","pButton","","icon","pi pi-list",3,"click"],["class","title-container",4,"ngIf"],["type","button","pButton","",1,"fullscreen-button",3,"click","icon"],[1,"title-container"],[1,"title"]],template:function(l,o){if(l&1){let C=B();n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be extended further to implement complex requirements."),a()(),n(3,"div",1)(4,"p-galleria",2,0),x("valueChange",function(L){return M(C),u(o.images,L)||(o.images=L),W(L)})("activeIndexChange",function(L){return M(C),u(o.activeIndex,L)||(o.activeIndex=L),W(L)}),f(6,Ke,1,5,"ng-template",3)(7,Je,2,1,"ng-template",4)(8,Ye,4,2,"ng-template",5),a()(),d(9,"app-code",6)}l&2&&(c(4),b("value",o.images)("activeIndex",o.activeIndex),s("numVisible",5)("showThumbnails",o.showThumbnails)("showItemNavigators",!0)("showItemNavigatorsOnHover",!0)("circular",!0)("autoPlay",!0)("transitionInterval",3e3)("containerStyle",y(12,qe))("containerClass",o.galleriaClass()),c(5),s("code",o.code))},dependencies:[q,pe,w,S,T,_,R],encapsulation:2});let t=e;return t})();var Ze=()=>({"max-width":"640px"});function $e(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function et(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var Ie=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5"  [containerStyle]="{ 'max-width': '640px' }"> 
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [autoPlay]="true" [circular]="true" [responsiveOptions]="responsiveOptions" [numVisible]="5"  [containerStyle]="{ 'max-width': '640px' }"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-autoplay-demo',
    templateUrl: './galleria-autoplay-demo.html'
})
export class GalleriaAutoplayDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-autoplay-demo"]],decls:14,vars:8,consts:[[1,"card"],[3,"valueChange","value","autoPlay","circular","responsiveOptions","numVisible","containerStyle"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-autoplay-demo",3,"code"],[2,"width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"A slideshow implementation is defined by adding "),n(3,"i"),i(4,"circular"),a(),i(5," and "),n(6,"i"),i(7,"autoPlay"),a(),i(8," properties."),a()(),n(9,"div",0)(10,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(11,$e,1,1,"ng-template",2)(12,et,2,1,"ng-template",3),a()(),d(13,"app-code",4)),l&2&&(c(10),b("value",o.images),s("autoPlay",!0)("circular",!0)("responsiveOptions",o.responsiveOptions)("numVisible",5)("containerStyle",y(7,Ze)),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var tt=()=>({"max-width":"640px"});function it(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function nt(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var we=(()=>{let e=class e{constructor(r){this.photoService=r,this.code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-basic-demo',
    templateUrl: './galleria-basic-demo.html'
})
export class GalleriaBasicDemo implements OnInit {
    images: any[] | undefined;
    
    responsiveOptions: any[] | undefined;

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r),this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-basic-demo"]],decls:17,vars:6,consts:[[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-basic-demo",3,"code"],[2,"width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria requires a "),n(3,"i"),i(4,"value"),a(),i(5," as a collection of images, "),n(6,"i"),i(7,"item"),a(),i(8," template for the higher resolution image and "),n(9,"i"),i(10,"thumbnail"),a(),i(11," template to display as a thumbnail."),a()(),n(12,"div",0)(13,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(14,it,1,1,"ng-template",2)(15,nt,2,1,"ng-template",3),a()(),d(16,"app-code",4)),l&2&&(c(13),b("value",o.images),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(5,tt))("numVisible",5),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var at=()=>({"max-width":"640px"});function ot(t,e){if(t&1&&d(0,"img",6),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function rt(t,e){if(t&1&&(n(0,"div",7),d(1,"img",8),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}function lt(t,e){if(t&1&&(n(0,"h4",9),i(1),a(),n(2,"p"),i(3),a()),t&2){let m=e.$implicit;c(),z(m.title),c(2),z(m.alt)}}var _e=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
    <ng-template pTemplate="caption" let-item>
        <h4 style="margin-bottom: .5rem; color: #ffffff;">{{ item.title }}</h4>
        <p>{{ item.alt }}</p>
    </ng-template>
</p-galleria>
`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-caption-demo',
    templateUrl: './galleria-caption-demo.html'
})
export class GalleriaCaptionDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-caption-demo"]],decls:12,vars:6,consts:[[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],["pTemplate","caption"],["selector","galleria-caption-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"],[2,"margin-bottom",".5rem","color","#ffffff"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Description of an image is specified with the "),n(3,"i"),i(4,"caption"),a(),i(5," template."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,ot,1,1,"ng-template",2)(9,rt,2,1,"ng-template",3)(10,lt,4,2,"ng-template",4),a()(),d(11,"app-code",5)),l&2&&(c(7),b("value",o.images),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(5,at))("numVisible",5),c(4),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var st=()=>({"max-width":"640px"});function mt(t,e){if(t&1&&d(0,"img",8),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function pt(t,e){if(t&1&&(n(0,"div",9),d(1,"img",10),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var Te=(()=>{let e=class e{get activeIndex(){return this._activeIndex}set activeIndex(r){this.images&&0<=r&&r<=this.images.length-1&&(this._activeIndex=r)}constructor(r){this.photoService=r,this._activeIndex=2,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<div class="py-2">
    <p-button type="button" icon="pi pi-minus" (click)="prev()" styleClass="p-button-secondary mr-2"></p-button>
    <p-button type="button" icon="pi pi-plus" (click)="next()" styleClass="p-button-primary"></p-button>
</div>
<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" [(activeIndex)]="activeIndex">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <div class="py-2">
        <p-button type="button" icon="pi pi-minus" (click)="prev()" styleClass="p-button-secondary mr-2"></p-button>
        <p-button type="button" icon="pi pi-plus" (click)="next()" styleClass="p-button-primary"></p-button>
    </div>
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5" [(activeIndex)]="activeIndex"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-controlled-demo',
    templateUrl: './galleria-controlled-demo.html'
})
export class GalleriaControlledDemo implements OnInit {
    images: any[] | undefined;

    get activeIndex(): number {
        return this._activeIndex;
    }

    set activeIndex(newValue) {
        if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
            this._activeIndex = newValue;
        }
    }

    _activeIndex: number = 2;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    next() {
        this.activeIndex++;
    }

    prev() {
        this.activeIndex--;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}next(){this.activeIndex++}prev(){this.activeIndex--}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-controlled-demo"]],decls:14,vars:7,consts:[[1,"card"],[1,"py-2"],["type","button","icon","pi pi-minus","styleClass","p-button-secondary mr-2",3,"click"],["type","button","icon","pi pi-plus","styleClass","p-button-primary",3,"click"],[3,"valueChange","activeIndexChange","value","responsiveOptions","containerStyle","numVisible","activeIndex"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-controlled-demo",3,"code"],[2,"width","100%",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be controlled programmatically using the "),n(3,"i"),i(4,"activeIndex"),a(),i(5," property."),a()(),n(6,"div",0)(7,"div",1)(8,"p-button",2),j("click",function(){return o.prev()}),a(),n(9,"p-button",3),j("click",function(){return o.next()}),a()(),n(10,"p-galleria",4),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p})("activeIndexChange",function(p){return u(o.activeIndex,p)||(o.activeIndex=p),p}),f(11,mt,1,1,"ng-template",5)(12,pt,2,1,"ng-template",6),a()(),d(13,"app-code",7)),l&2&&(c(10),b("value",o.images),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(6,st))("numVisible",5),b("activeIndex",o.activeIndex),c(3),s("code",o.code))},dependencies:[w,S,T,_,ge],encapsulation:2});let t=e;return t})();var ct=()=>({"max-width":"850px"});function dt(t,e){if(t&1){let m=B();n(0,"div",7)(1,"img",8),j("click",function(){let l=M(m).index,o=F(2);return W(o.imageClick(l))}),a()()}if(t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)("alt",m.alt)}}function gt(t,e){if(t&1&&(n(0,"div",5),f(1,dt,2,2,"div",6),a()),t&2){let m=F();c(),s("ngForOf",m.images)}}function ut(t,e){if(t&1&&d(0,"img",9),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Ce=(()=>{let e=class e{constructor(r){this.photoService=r,this.activeIndex=0,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria
    [(value)]="images"
    [(visible)]="displayCustom"
    [(activeIndex)]="activeIndex"
    [responsiveOptions]="responsiveOptions"
    [containerStyle]="{ 'max-width': '850px' }"
    [numVisible]="7"
    [circular]="true"
    [fullScreen]="true"
    [showItemNavigators]="true"
    [showThumbnails]="false"
>
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>
        `,html:`
 <div class="card">
    <div *ngIf="images" class="grid" style="max-width: 800px;">
        <div *ngFor="let image of images; let index = index" class="col-3" key="index">
            <img [src]="image.thumbnailImageSrc" [alt]="image.alt" style="cursor: pointer" (click)="imageClick(index)" />
        </div>
    </div>
    <p-galleria
        [(value)]="images"
        [(visible)]="displayCustom"
        [(activeIndex)]="activeIndex"
        [responsiveOptions]="responsiveOptions"
        [containerStyle]="{ 'max-width': '850px' }"
        [numVisible]="7"
        [circular]="true"
        [fullScreen]="true"
        [showItemNavigators]="true"
        [showThumbnails]="false"
    >
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-full-secreen-template-demo',
    templateUrl: './galleria-full-secreen-template-demo.html'
})
export class GalleriaFullScreenTemplateDemo implements OnInit {
    displayCustom: boolean | undefined;

    activeIndex: number = 0;

    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }

    imageClick(index: number) {
        this.activeIndex = index;
        this.displayCustom = true;
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}imageClick(r){this.activeIndex=r,this.displayCustom=!0}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["template-doc"]],decls:11,vars:13,consts:[[1,"card"],["class","grid","style","max-width: 800px;",4,"ngIf"],[3,"valueChange","visibleChange","activeIndexChange","value","visible","activeIndex","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators","showThumbnails"],["pTemplate","item"],["selector","galleria-full-secreen-template-demo",3,"code"],[1,"grid",2,"max-width","800px"],["class","col-3","key","index",4,"ngFor","ngForOf"],["key","index",1,"col-3"],[2,"cursor","pointer",3,"click","src","alt"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Using "),n(3,"i"),i(4,"activeIndex"),a(),i(5,", Galleria is displayed with a specific initial image."),a()(),n(6,"div",0),f(7,gt,2,1,"div",1),n(8,"p-galleria",2),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p})("visibleChange",function(p){return u(o.displayCustom,p)||(o.displayCustom=p),p})("activeIndexChange",function(p){return u(o.activeIndex,p)||(o.activeIndex=p),p}),f(9,ut,1,1,"ng-template",3),a()(),d(10,"app-code",4)),l&2&&(c(7),s("ngIf",o.images),c(),b("value",o.images)("visible",o.displayCustom)("activeIndex",o.activeIndex),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(12,ct))("numVisible",7)("circular",!0)("fullScreen",!0)("showItemNavigators",!0)("showThumbnails",!1),c(2),s("code",o.code))},dependencies:[G,q,w,S,T,_],encapsulation:2});let t=e;return t})();var ht=()=>({"max-width":"850px"});function vt(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Oe=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria
    [(value)]="images"
    [(visible)]="displayBasic"
    [responsiveOptions]="responsiveOptions"
    [containerStyle]="{ 'max-width': '850px' }"
    [numVisible]="7"
    [circular]="true"
    [fullScreen]="true"
    [showItemNavigators]="true"
    [showThumbnails]="false"
>
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`
<div class="card flex justify-content-center">
    <button pButton type="button" icon="pi pi-external-link" label="Show" (click)="displayBasic = true"></button>
    <p-galleria
        [(value)]="images"
        [(visible)]="displayBasic"
        [responsiveOptions]="responsiveOptions"
        [containerStyle]="{ 'max-width': '850px' }"
        [numVisible]="7"
        [circular]="true"
        [fullScreen]="true"
        [showItemNavigators]="true"
        [showThumbnails]="false"
    >
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-full-screen-without-thumbnails-demo',
    templateUrl: './galleria-full-screen-without-thumbnails-demo.html'
})
export class GalleriaFullScreenWithoutThumbnailsDemo implements OnInit {
    displayBasic: boolean | undefined;

    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["without-thumbnails-doc"]],decls:8,vars:11,consts:[[1,"card","flex","justify-content-center"],["pButton","","type","button","icon","pi pi-external-link","label","Show",3,"click"],[3,"valueChange","visibleChange","value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showThumbnails","showItemNavigators"],["pTemplate","item"],["selector","galleria-full-screen-without-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Thumbnails can also be hidden in full screen mode."),a()(),n(3,"div",0)(4,"button",1),j("click",function(){return o.displayBasic=!0}),a(),n(5,"p-galleria",2),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p})("visibleChange",function(p){return u(o.displayBasic,p)||(o.displayBasic=p),p}),f(6,vt,1,1,"ng-template",3),a()(),d(7,"app-code",4)),l&2&&(c(5),b("value",o.images)("visible",o.displayBasic),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(10,ht))("numVisible",7)("circular",!0)("fullScreen",!0)("showThumbnails",!1)("showItemNavigators",!0),c(2),s("code",o.code))},dependencies:[w,S,T,_,R],encapsulation:2});let t=e;return t})();var ft=()=>({"max-width":"50%"});function bt(t,e){if(t&1&&d(0,"img",6),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function yt(t,e){if(t&1&&(n(0,"div",7),d(1,"img",8),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var ke=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '50%' }" [numVisible]="9" [circular]="true" [fullScreen]="true" [showItemNavigators]="true">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
</p-galleria>`,html:`
<div class="card flex justify-content-center">
    <button pButton type="button" icon="pi pi-external-link" label="Show" (click)="displayBasic = true"></button>
    <p-galleria [(value)]="images" [(visible)]="displayBasic" [responsiveOptions]="responsiveOptions" [containerStyle]="{'max-width': '50%'}" [numVisible]="9"
        [circular]="true" [fullScreen]="true" [showItemNavigators]="true">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;"/>
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;"/>
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-full-screen-with-thumbnails-demo',
    templateUrl: './galleria-full-screen-with-thumbnails-demo.html'
})
export class GalleriaFullScreenWithThumbnailsDemo implements OnInit {
    displayBasic: boolean | undefined;

    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["with-thumbnails-doc"]],decls:12,vars:10,consts:[[1,"card","flex","justify-content-center"],["pButton","","type","button","icon","pi pi-external-link","label","Show",3,"click"],[3,"valueChange","visibleChange","value","visible","responsiveOptions","containerStyle","numVisible","circular","fullScreen","showItemNavigators"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-full-screen-with-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Full screen mode is enabled by adding "),n(3,"i"),i(4,"fullScreen"),a(),i(5," property."),a()(),n(6,"div",0)(7,"button",1),j("click",function(){return o.displayBasic=!0}),a(),n(8,"p-galleria",2),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p})("visibleChange",function(p){return u(o.displayBasic,p)||(o.displayBasic=p),p}),f(9,bt,1,1,"ng-template",3)(10,yt,2,1,"ng-template",4),a()(),d(11,"app-code",5)),l&2&&(c(8),b("value",o.images)("visible",o.displayBasic),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(9,ft))("numVisible",9)("circular",!0)("fullScreen",!0)("showItemNavigators",!0),c(3),s("code",o.code))},dependencies:[w,S,T,_,R],encapsulation:2});let t=e;return t})();var De=(()=>{let e=class e{constructor(){this.code={typescript:"import { GalleriaModule } from 'primeng/galleria';"}}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=h({type:e,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(l,o){l&1&&d(0,"app-code",0),l&2&&s("code",o.code)("hideToggleCode",!0)},dependencies:[w],encapsulation:2});let t=e;return t})();var St=()=>({"max-width":"640px"});function xt(t,e){if(t&1&&d(0,"img",4),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Ee=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-indicator-click-event-demo',
    templateUrl: './galleria-indicator-click-event-demo.html'
})
export class GalleriaIndicatorClickEventDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["click-event-doc"]],decls:10,vars:7,consts:[[1,"card"],[3,"valueChange","value","showIndicators","showThumbnails","responsiveOptions","containerStyle"],["pTemplate","item"],["selector","galleria-indicator-click-event-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Indicators are displayed at the bottom by enabling "),n(3,"i"),i(4,"showIndicators"),a(),i(5," property and interacted with the click event by default."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,xt,1,1,"ng-template",2),a()(),d(9,"app-code",3)),l&2&&(c(7),b("value",o.images),s("showIndicators",!0)("showThumbnails",!1)("responsiveOptions",o.responsiveOptions)("containerStyle",y(6,St)),c(2),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var It=()=>({"max-width":"640px"});function wt(t,e){if(t&1&&d(0,"img",4),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Pe=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [changeItemOnIndicatorHover]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }"> 
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [changeItemOnIndicatorHover]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-indicator-hover-event-demo',
    templateUrl: './galleria-indicator-hover-event-demo.html'
})
export class GalleriaIndicatorHoverEventDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["hover-event-doc"]],decls:10,vars:8,consts:[[1,"card"],[3,"valueChange","value","showIndicators","showThumbnails","changeItemOnIndicatorHover","responsiveOptions","containerStyle"],["pTemplate","item"],["selector","galleria-indicator-hover-event-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Indicators can be activated on hover instead of click if "),n(3,"i"),i(4,"changeItemOnIndicatorHover"),a(),i(5," is added."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,wt,1,1,"ng-template",2),a()(),d(9,"app-code",3)),l&2&&(c(7),b("value",o.images),s("showIndicators",!0)("showThumbnails",!1)("changeItemOnIndicatorHover",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",y(7,It)),c(2),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var Ct=()=>({"max-width":"640px","margin-top":"2em"});function Ot(t,e){if(t&1){let m=B();n(0,"p-radioButton",8),x("ngModelChange",function(l){M(m);let o=F();return u(o.position,l)||(o.position=l),W(l)}),a()}if(t&2){let m=e.$implicit,r=F();s("name",m.label)("value",m.value)("label",m.label),b("ngModel",r.position),s("inputId",r.label)}}function kt(t,e){if(t&1&&d(0,"img",9),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Ve=(()=>{let e=class e{constructor(r){this.photoService=r,this.position="bottom",this.showIndicatorsOnItem=!1,this.positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria
    [(value)]="images"
    [indicatorsPosition]="position"
    [showIndicators]="true"
    [showThumbnails]="false"
    [showIndicatorsOnItem]="showIndicatorsOnItem"
    [responsiveOptions]="responsiveOptions"
    [containerStyle]="{ 'max-width': '640px', 'margin-top': '2em' }"
>
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <div class="flex flex-wrap gap-3 mb-5">
        <p-radioButton *ngFor="let option of positionOptions;" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
    </div>
    <div class="flex align-items-center">
        <p-checkbox [(ngModel)]="showIndicatorsOnItem" [binary]="true" inputId="binary" label="Inside" ngClass="mt-3"></p-checkbox>
    </div>
    <p-galleria [(value)]="images" [indicatorsPosition]="position" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="showIndicatorsOnItem" [responsiveOptions]="responsiveOptions" [containerStyle]="{'width': '100%','margin-top': '2em'}">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-indicator-positioned-demo',
    templateUrl: './galleria-indicator-positioned-demo.html'
})
export class GalleriaIndicatorPositionedDemo implements OnInit {
    images: any[] | undefined;

    position: string = 'bottom';

    showIndicatorsOnItem: boolean = false;

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["positioned-doc"]],decls:35,vars:12,consts:[[1,"card"],[1,"flex","flex-wrap","gap-3","mb-5"],[3,"name","value","label","ngModel","inputId","ngModelChange",4,"ngFor","ngForOf"],[1,"flex","align-items-center"],["inputId","binary","label","Inside","ngClass","mt-3",3,"ngModelChange","ngModel","binary"],[3,"valueChange","value","indicatorsPosition","showIndicators","showThumbnails","showIndicatorsOnItem","responsiveOptions","containerStyle"],["pTemplate","item"],["selector","galleria-indicator-positioned-demo",3,"code"],[3,"ngModelChange","name","value","label","ngModel","inputId"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2," Indicators can be placed at four different sides using the "),n(3,"i"),i(4,"indicatorsPosition"),a(),i(5," property. In addition, enabling "),n(6,"i"),i(7,"showIndicatorsOnItem"),a(),i(8," moves the indicators inside the image section. "),n(9,"i"),i(10,"indicatorsPosition"),a(),i(11," set to "),n(12,"i"),i(13,"bottom"),a(),i(14," by default, accepted values are "),n(15,"i"),i(16,"top"),a(),i(17,", "),n(18,"i"),i(19,"left"),a(),i(20,", "),n(21,"i"),i(22,"right"),a(),i(23,", and "),n(24,"i"),i(25,"bottom"),a(),i(26,". "),a()(),n(27,"div",0)(28,"div",1),f(29,Ot,1,5,"p-radioButton",2),a(),n(30,"div",3)(31,"p-checkbox",4),x("ngModelChange",function(p){return u(o.showIndicatorsOnItem,p)||(o.showIndicatorsOnItem=p),p}),a()(),n(32,"p-galleria",5),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(33,kt,1,1,"ng-template",6),a()(),d(34,"app-code",7)),l&2&&(c(29),s("ngForOf",o.positionOptions),c(2),b("ngModel",o.showIndicatorsOnItem),s("binary",!0),c(),b("value",o.images),s("indicatorsPosition",o.position)("showIndicators",!0)("showThumbnails",!1)("showIndicatorsOnItem",o.showIndicatorsOnItem)("responsiveOptions",o.responsiveOptions)("containerStyle",y(11,Ct)),c(2),s("code",o.code))},dependencies:[me,G,w,S,T,_,J,X,Y,be],encapsulation:2});let t=e;return t})();var Dt=()=>({maxWidth:"640px"});function Et(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function Pt(t,e){if(t&1&&(n(0,"span",6),i(1),a()),t&2){let m=e.$implicit;c(),oe(" ",m+1," ")}}var Fe=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '100%', 'margin-top': '2em' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="indicator" let-index>
        <span style="color: #e9ecef; cursor: pointer">
            {{ index + 1 }}
        </span>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="true" [showThumbnails]="false" [showIndicatorsOnItem]="true" indicatorsPosition="left" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '100%','margin-top': '2em' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="indicator" let-index>
            <span style="color: #e9ecef; cursor: pointer">
                {{index + 1}}
            </span>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-indicator-template-demo',
    templateUrl: './galleria-indicator-template-demo.html'
})
export class GalleriaIndicatorTemplateDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["template-doc"]],decls:11,vars:8,consts:[[1,"card"],["indicatorsPosition","left",3,"valueChange","value","showIndicators","showThumbnails","showIndicatorsOnItem","responsiveOptions","containerStyle"],["pTemplate","item"],["pTemplate","indicator"],["selector","galleria-indicator-template-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[2,"color","#e9ecef","cursor","pointer"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Indicator content can be customized with the "),n(3,"i"),i(4,"indicator"),a(),i(5," template."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,Et,1,1,"ng-template",2)(9,Pt,2,1,"ng-template",3),a()(),d(10,"app-code",4)),l&2&&(c(7),b("value",o.images),s("showIndicators",!0)("showThumbnails",!1)("showIndicatorsOnItem",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",y(7,Dt)),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var Vt=()=>({"max-width":"640px"});function Ft(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function jt(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var je=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showIndicators]="false" [showItemNavigatorsOnHover]="true" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showIndicators]="false" [showItemNavigatorsOnHover]="true" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-navigator-hover-demo',
    templateUrl: './galleria-navigator-hover-demo.html',
    providers: [PhotoService]
})
export class GalleriaNavigatorHoverDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["hover-doc"]],features:[A([v])],decls:11,vars:8,consts:[[1,"card"],[3,"valueChange","value","showIndicators","showItemNavigatorsOnHover","showItemNavigators","responsiveOptions","containerStyle"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-navigator-hover-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Navigators are displayed on hover only if "),n(3,"i"),i(4,"showItemNavigatorsOnHover"),a(),i(5," is enabled."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,Ft,1,1,"ng-template",2)(9,jt,2,1,"ng-template",3),a()(),d(10,"app-code",4)),l&2&&(c(7),b("value",o.images),s("showIndicators",!1)("showItemNavigatorsOnHover",!0)("showItemNavigators",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",y(7,Vt)),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var Mt=()=>({"max-width":"640px","margin-top":"2em"});function Wt(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function Bt(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var Me=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showItemNavigators]="true" [showThumbnails]="false" [showIndicators]="true" [showIndicatorsOnItem]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px', 'margin-top': '2em' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showItemNavigators]="true" [showThumbnails]="false" [showIndicators]="true" [showIndicatorsOnItem]="true" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px', 'margin-top':'2em' }"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-navigator-indicators-demo',
    templateUrl: './galleria-navigator-indicators-demo.html',
    providers: [PhotoService]
})
export class GalleriaNavigatorIndicatorsDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["indicators-doc"]],features:[A([v])],decls:8,vars:9,consts:[[1,"card"],[3,"valueChange","value","showItemNavigators","showThumbnails","showIndicators","showIndicatorsOnItem","responsiveOptions","containerStyle"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-navigator-indicators-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Navigators and Indicators can be combined as well."),a()(),n(3,"div",0)(4,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(5,Wt,1,1,"ng-template",2)(6,Bt,2,1,"ng-template",3),a()(),d(7,"app-code",4)),l&2&&(c(4),b("value",o.images),s("showItemNavigators",!0)("showThumbnails",!1)("showIndicators",!0)("showIndicatorsOnItem",!0)("responsiveOptions",o.responsiveOptions)("containerStyle",y(8,Mt)),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var At=()=>({"max-width":"640px"});function Lt(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function Nt(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var We=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [circular]="true" [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [showItemNavigators]="true" [responsiveOptions]="responsiveOptions" [circular]="true"  [numVisible]="5" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-navigator-item-thumbnails-demo',
    templateUrl: './galleria-navigator-item-thumbnails-demo.html',
    providers: [PhotoService]
})
export class GalleriaNavigatorItemThumbnailsDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["itemthumbnails-doc"]],features:[A([v])],decls:11,vars:8,consts:[[1,"card"],[3,"valueChange","value","showItemNavigators","responsiveOptions","circular","numVisible","containerStyle"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-navigator-item-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Add "),n(3,"i"),i(4,"showItemNavigators"),a(),i(5," to display navigator elements and the left and right side."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,Lt,1,1,"ng-template",2)(9,Nt,2,1,"ng-template",3),a()(),d(10,"app-code",4)),l&2&&(c(7),b("value",o.images),s("showItemNavigators",!0)("responsiveOptions",o.responsiveOptions)("circular",!0)("numVisible",5)("containerStyle",y(7,At)),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var Ut=()=>({"max-width":"640px"});function zt(t,e){if(t&1&&d(0,"img",4),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}var Be=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [numVisible]="5" [circular]="true" [showItemNavigators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [numVisible]="5" [circular]="true" [showItemNavigators]="true" [showThumbnails]="false" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }">
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-item-without-thumbnails-demo',
    templateUrl: './galleria-item-without-thumbnails-demo.html',
    providers: [PhotoService]
})
export class GalleriaItemWithoutThumbnailsDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => {
            this.images = images;
        });
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`}}ngOnInit(){this.photoService.getImages().then(r=>{this.images=r})}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["itemwithoutthumbnails-doc"]],features:[A([v])],decls:7,vars:9,consts:[[1,"card"],[3,"valueChange","value","numVisible","circular","showItemNavigators","showThumbnails","responsiveOptions","containerStyle"],["pTemplate","item"],["selector","galleria-item-without-thumbnails-demo",3,"code"],[2,"width","100%","display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Simple example with indicators only."),a()(),n(3,"div",0)(4,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(5,zt,1,1,"ng-template",2),a()(),d(6,"app-code",3)),l&2&&(c(4),b("value",o.images),s("numVisible",5)("circular",!0)("showItemNavigators",!0)("showThumbnails",!1)("responsiveOptions",o.responsiveOptions)("containerStyle",y(8,Ut)),c(2),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var Gt=()=>({"max-width":"640px"});function Rt(t,e){if(t&1&&d(0,"img",5),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function Ht(t,e){if(t&1&&(n(0,"div",6),d(1,"img",7),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var Ae=(()=>{let e=class e{constructor(r){this.photoService=r,this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="7" [circular]="true">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" style="display: block;" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <p-galleria [(value)]="images" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="7" [circular]="true"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; display: block;"/>
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" style="display: block;"/>
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-responsive-demo',
    templateUrl: './galleria-responsive-demo.html'
})
export class GalleriaResponsiveDemo implements OnInit {
    images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-responsive-demo"]],decls:11,vars:7,consts:[[1,"card"],[3,"valueChange","value","responsiveOptions","containerStyle","numVisible","circular"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-responsive-demo",3,"code"],[2,"width","100%","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[2,"display","block",3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria responsiveness is defined with the "),n(3,"i"),i(4,"responsiveOptions"),a(),i(5," property."),a()(),n(6,"div",0)(7,"p-galleria",1),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(8,Rt,1,1,"ng-template",2)(9,Ht,2,1,"ng-template",3),a()(),d(10,"app-code",4)),l&2&&(c(7),b("value",o.images),s("responsiveOptions",o.responsiveOptions)("containerStyle",y(6,Gt))("numVisible",7)("circular",!0),c(3),s("code",o.code))},dependencies:[w,S,T,_],encapsulation:2});let t=e;return t})();var qt=()=>["/theming"],Le=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=h({type:e,selectors:[["style-doc"]],decls:60,vars:2,consts:[["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Following is the list of structural style classes, for theming classes visit "),n(3,"a",0),i(4,"theming"),a(),i(5," page."),a()(),n(6,"div",1)(7,"table",2)(8,"thead")(9,"tr")(10,"th"),i(11,"Name"),a(),n(12,"th"),i(13,"Element"),a()()(),n(14,"tbody")(15,"tr")(16,"td"),i(17,"p-galleria"),a(),n(18,"td"),i(19,"Container element."),a()(),n(20,"tr")(21,"td"),i(22,"p-galleria-header"),a(),n(23,"td"),i(24,"Header section."),a()(),n(25,"tr")(26,"td"),i(27,"p-galleria-footer"),a(),n(28,"td"),i(29,"Footer section."),a()(),n(30,"tr")(31,"td"),i(32,"p-galleria-item-wrapper"),a(),n(33,"td"),i(34,"Preview content element. It contains preview and indicator containers."),a()(),n(35,"tr")(36,"td"),i(37,"p-galleria-item-container"),a(),n(38,"td"),i(39,"Container of the preview content. It contains navigation buttons, preview item and caption content."),a()(),n(40,"tr")(41,"td"),i(42,"p-galleria-indicators"),a(),n(43,"td"),i(44,"Container of the indicators. It contains indicator items."),a()(),n(45,"tr")(46,"td"),i(47,"p-galleria-thumbnail-wrapper"),a(),n(48,"td"),i(49,"Thumbnail content element."),a()(),n(50,"tr")(51,"td"),i(52,"p-galleria-thumbnail-container"),a(),n(53,"td"),i(54,"Container of the thumbnail content. It contains navigation buttons and thumbnail items."),a()(),n(55,"tr")(56,"td"),i(57,"p-galleria-caption"),a(),n(58,"td"),i(59,"Content of the preview caption."),a()()()()()),l&2&&(c(3),s("routerLink",y(1,qt)))},dependencies:[de,S],encapsulation:2});let t=e;return t})();var Qt=()=>({"max-width":"640px"});function Kt(t,e){if(t&1){let m=B();n(0,"p-radioButton",7),x("ngModelChange",function(l){M(m);let o=F();return u(o.position,l)||(o.position=l),W(l)}),a()}if(t&2){let m=e.$implicit,r=F();s("name",m.label)("value",m.value)("label",m.label),b("ngModel",r.position),s("inputId",r.label)}}function Jt(t,e){if(t&1&&d(0,"img",8),t&2){let m=e.$implicit;s("src",m.itemImageSrc,g)}}function Xt(t,e){if(t&1&&(n(0,"div",9),d(1,"img",10),a()),t&2){let m=e.$implicit;c(),s("src",m.thumbnailImageSrc,g)}}var Ne=(()=>{let e=class e{constructor(r){this.photoService=r,this.position="bottom",this.positionOptions=[{label:"Bottom",value:"bottom"},{label:"Top",value:"top"},{label:"Left",value:"left"},{label:"Right",value:"right"}],this.responsiveOptions=[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],this.code={basic:`<p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5">
    <ng-template pTemplate="item" let-item>
        <img [src]="item.itemImageSrc" style="width: 100%; min-height: 420px; display: block;" />
    </ng-template>
    <ng-template pTemplate="thumbnail" let-item>
        <div class="grid grid-nogutter justify-content-center">
            <img [src]="item.thumbnailImageSrc" />
        </div>
    </ng-template>
</p-galleria>`,html:`
 <div class="card">
    <div class="flex flex-wrap gap-3 mb-5">
        <p-radioButton *ngFor="let option of positionOptions;" [name]="option.label" [value]="option.value" [label]="option.label" [(ngModel)]="position" [inputId]="label"></p-radioButton>
    </div>
    <p-galleria [(value)]="images" [thumbnailsPosition]="position" [responsiveOptions]="responsiveOptions" [containerStyle]="{ 'max-width': '640px' }" [numVisible]="5"> 
        <ng-template pTemplate="item" let-item>
            <img [src]="item.itemImageSrc" style="width: 100%; min-height: 420px; display: block;" />
        </ng-template>
        <ng-template pTemplate="thumbnail" let-item>
            <div class="grid grid-nogutter justify-content-center">
                <img [src]="item.thumbnailImageSrc" />
            </div>
        </ng-template>
    </p-galleria>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photoservice';

@Component({
    selector: 'galleria-thumbnail-demo',
    templateUrl: './galleria-thumbnail-demo.html'
})
export class GalleriaThumbnailDemo implements OnInit {
    images: any[] | undefined;

    position: string = 'bottom';

    positionOptions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => (this.images = images));
    }
}`,data:`
/* PhotoService */
{
    itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
    thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
},
...`,service:["PhotoService"]}}ngOnInit(){this.photoService.getImages().then(r=>this.images=r)}};e.\u0275fac=function(l){return new(l||e)(I(v))},e.\u0275cmp=h({type:e,selectors:[["galleria-thumbnail-demo"]],decls:13,vars:8,consts:[[1,"card"],[1,"flex","flex-wrap","gap-3","mb-5"],[3,"name","value","label","ngModel","inputId","ngModelChange",4,"ngFor","ngForOf"],[3,"valueChange","value","thumbnailsPosition","responsiveOptions","containerStyle","numVisible"],["pTemplate","item"],["pTemplate","thumbnail"],["selector","galleria-thumbnail-demo",3,"code"],[3,"ngModelChange","name","value","label","ngModel","inputId"],[2,"width","100%","min-height","420px","display","block",3,"src"],[1,"grid","grid-nogutter","justify-content-center"],[3,"src"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"p"),i(2,"Galleria can be controlled programmatically using the "),n(3,"i"),i(4,"activeIndex"),a(),i(5," property."),a()(),n(6,"div",0)(7,"div",1),f(8,Kt,1,5,"p-radioButton",2),a(),n(9,"p-galleria",3),x("valueChange",function(p){return u(o.images,p)||(o.images=p),p}),f(10,Jt,1,1,"ng-template",4)(11,Xt,2,1,"ng-template",5),a()(),d(12,"app-code",6)),l&2&&(c(8),s("ngForOf",o.positionOptions),c(),b("value",o.images),s("thumbnailsPosition",o.position)("responsiveOptions",o.responsiveOptions)("containerStyle",y(7,Qt))("numVisible",5),c(3),s("code",o.code))},dependencies:[G,w,S,T,_,J,X,Y],encapsulation:2});let t=e;return t})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=h({type:e,selectors:[["accessibility-doc"]],decls:182,vars:0,consts:[["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(l,o){l&1&&(n(0,"app-docsectiontext")(1,"h3"),i(2,"Screen Reader"),a(),n(3,"p"),i(4," Galleria uses "),n(5,"i"),i(6,"region"),a(),i(7," role and since any attribute is passed to the main container element, attributes such as "),n(8,"i"),i(9,"aria-label"),a(),i(10," and "),n(11,"i"),i(12,"aria-roledescription"),a(),i(13," can be used as well. The slides container has "),n(14,"i"),i(15,"aria-live"),a(),i(16,' attribute set as "polite" if galleria is not in autoplay mode, otherwise "off" would be the value in autoplay. '),a(),n(17,"p"),i(18," A slide has a "),n(19,"i"),i(20,"group"),a(),i(21," role with an aria-label that refers to the "),n(22,"i"),i(23,"aria.slideNumber"),a(),i(24," property of the "),n(25,"a",0),i(26,"locale"),a(),i(27," API. Similarly "),n(28,"i"),i(29,"aria.slide"),a(),i(30," is used as the "),n(31,"i"),i(32,"aria-roledescription"),a(),i(33," of the item. Inactive slides are hidden from the readers with "),n(34,"i"),i(35,"aria-hidden"),a(),i(36,". "),a(),n(37,"p"),i(38," Next and Previous navigators are button elements with "),n(39,"i"),i(40,"aria-label"),a(),i(41," attributes referring to the "),n(42,"i"),i(43,"aria.nextPageLabel"),a(),i(44," and "),n(45,"i"),i(46,"aria.firstPageLabel"),a(),i(47," properties of the "),n(48,"a",0),i(49,"locale"),a(),i(50," API by default respectively, you may still use your own aria roles and attributes as any valid attribute is passed to the button elements implicitly by using "),n(51,"i"),i(52,"nextButtonProps"),a(),i(53," and "),n(54,"i"),i(55,"prevButtonProps"),a(),i(56,". "),a(),n(57,"p"),i(58," Quick navigation elements and thumnbails follow the tab pattern. They are placed inside an element with a "),n(59,"i"),i(60,"tablist"),a(),i(61," role whereas each item has a "),n(62,"i"),i(63,"tab"),a(),i(64," role with "),n(65,"i"),i(66,"aria-selected"),a(),i(67," and "),n(68,"i"),i(69,"aria-controls"),a(),i(70," attributes. The "),n(71,"i"),i(72,"aria-label"),a(),i(73," attribute of a quick navigation item refers to the "),n(74,"i"),i(75,"aria.pageLabel"),a(),i(76," of the "),n(77,"a",0),i(78,"locale"),a(),i(79," API. Current page is marked with "),n(80,"i"),i(81,"aria-current"),a(),i(82,". "),a(),n(83,"p"),i(84,"In full screen mode, modal element uses "),n(85,"i"),i(86,"dialog"),a(),i(87," role with "),n(88,"i"),i(89,"aria-modal"),a(),i(90," enabled. The close button retrieves "),n(91,"i"),i(92,"aria-label"),a(),i(93," from the "),n(94,"i"),i(95,"aria.close"),a(),i(96," property of the "),n(97,"a",0),i(98,"locale"),a(),i(99," API."),a(),n(100,"h3"),i(101,"Next/Prev Keyboard Support"),a(),n(102,"div",1)(103,"table",2)(104,"thead")(105,"tr")(106,"th"),i(107,"Key"),a(),n(108,"th"),i(109,"Function"),a()()(),n(110,"tbody")(111,"tr")(112,"td")(113,"i"),i(114,"tab"),a()(),n(115,"td"),i(116,"Moves focus through interactive elements in the carousel."),a()(),n(117,"tr")(118,"td")(119,"i"),i(120,"enter"),a()(),n(121,"td"),i(122,"Activates navigation."),a()(),n(123,"tr")(124,"td")(125,"i"),i(126,"space"),a()(),n(127,"td"),i(128,"Activates navigation."),a()()()()(),n(129,"h3"),i(130,"Quick Navigation Keyboard Support"),a(),n(131,"div",1)(132,"table",2)(133,"thead")(134,"tr")(135,"th"),i(136,"Key"),a(),n(137,"th"),i(138,"Function"),a()()(),n(139,"tbody")(140,"tr")(141,"td")(142,"i"),i(143,"tab"),a()(),n(144,"td"),i(145,"Moves focus through the active slide link."),a()(),n(146,"tr")(147,"td")(148,"i"),i(149,"enter"),a()(),n(150,"td"),i(151,"Activates the focused slide link."),a()(),n(152,"tr")(153,"td")(154,"i"),i(155,"space"),a()(),n(156,"td"),i(157,"Activates the focused slide link."),a()(),n(158,"tr")(159,"td")(160,"i"),i(161,"right arrow"),a()(),n(162,"td"),i(163,"Moves focus to the next slide link."),a()(),n(164,"tr")(165,"td")(166,"i"),i(167,"left arrow"),a()(),n(168,"td"),i(169,"Moves focus to the previous slide link."),a()(),n(170,"tr")(171,"td")(172,"i"),i(173,"home"),a()(),n(174,"td"),i(175,"Moves focus to the first slide link."),a()(),n(176,"tr")(177,"td")(178,"i"),i(179,"end"),a()(),n(180,"td"),i(181,"Moves focus to the last slide link."),a()()()()()())},dependencies:[S],encapsulation:2});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=U({type:e}),e.\u0275inj=N({imports:[Q,H,ve,Z,Se,ce,ue,he,ye,Z]});let t=e;return t})();var Yt=()=>["Galleria"],Ge=(()=>{let e=class e{constructor(){this.docs=[{id:"import",label:"Import",component:De},{id:"basic",label:"Basic",component:we},{id:"controlled",label:"Controlled",component:Te},{id:"indicator",label:"Indicator",children:[{id:"clickevent",label:"Click Event",component:Ee},{id:"hoverevent",label:"Hover Event",component:Pe},{id:"positioned",label:"Positioned",component:Ve},{id:"template",label:"Templating",component:Fe}]},{id:"thumbnail",label:"Thumbnail",component:Ne},{id:"responsive",label:"Responsive",component:Ae},{id:"fullscreen",label:"Full Screen",children:[{id:"withthumbnails",label:"With Thumbnails",component:ke},{id:"withtouthumbnails",label:"Without Thumbnails",component:Oe},{id:"customcontent",label:"Custom Content",component:Ce}]},{id:"navigator",label:"Navigator",children:[{id:"itemwiththumbnails",label:"With Thumbnails",component:We},{id:"itemwithtouthumbnails",label:"Without Thumbnails",component:Be},{id:"hover",label:"Display on Hover",component:je},{id:"withindicators",label:"With Indicators",component:Me}]},{id:"autoplay",label:"AutoPlay",component:Ie},{id:"caption",label:"Caption",component:_e},{id:"advanced",label:"Advanced",component:xe},{id:"style",label:"Style",component:Le},{id:"accessibility",label:"Accessibility",component:Ue}]}};e.\u0275fac=function(l){return new(l||e)},e.\u0275cmp=h({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Gallery Component","header","Galleria","description","Galleria is an advanced content gallery component.",3,"docs","apiDocs"]],template:function(l,o){l&1&&d(0,"app-doc",0),l&2&&s("docs",o.docs)("apiDocs",y(2,Yt))},dependencies:[fe],styles:["[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen{display:flex;flex-direction:column}[_nghost-%COMP%]     .custom-galleria.p-galleria.fullscreen .p-galleria-content{flex-grow:1;justify-content:center}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-content{position:relative}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-wrapper{position:absolute;bottom:0;left:0;width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .p-galleria-thumbnail-items-container{width:100%}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer{display:flex;align-items:center;background-color:#000000e6;color:#fff}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button{background-color:transparent;color:#fff;border:0 none;border-radius:0;margin:.2rem 0}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button.fullscreen-button{margin-left:auto}[_nghost-%COMP%]     .custom-galleria.p-galleria .custom-galleria-footer>button:hover{background-color:#ffffff1a}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span{font-size:.9rem;padding-left:.829rem}[_nghost-%COMP%]     .custom-galleria.p-galleria .title-container>span.title{font-weight:700}"]});let t=e;return t})();var Re=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=U({type:e}),e.\u0275inj=N({imports:[H.forChild([{path:"",component:Ge}]),H]});let t=e;return t})();var ra=(()=>{let e=class e{};e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=U({type:e}),e.\u0275inj=N({imports:[Q,Re,ze]});let t=e;return t})();export{ra as GalleriaDemoModule};
