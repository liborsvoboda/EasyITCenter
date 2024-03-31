import{a as x,b as B}from"./chunk-KTKLWM5T.js";import{a as h,b as F,c as w}from"./chunk-AS5FXEGH.js";import{a as y,b as T}from"./chunk-X2ZDE2AM.js";import"./chunk-5R6LCAUH.js";import{a as S}from"./chunk-ZFN2ACGN.js";import"./chunk-QLODAJMV.js";import"./chunk-UWMVDULA.js";import{t as E}from"./chunk-N5X6XDRN.js";import{F as f,Jb as r,Nc as M,Pc as C,Sa as p,Sb as j,Ta as c,V as k,da as m,ea as A,kb as s,kc as b,rb as n,sb as i,tb as d,za as g}from"./chunk-ZJD4PHQZ.js";import"./chunk-P2VZOJAX.js";var O=(()=>{let t=class t{constructor(){this.code={html:'<p-chart type="line" [data]="data" ariaLabbel="Data"></p-chart>'}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["accessibility-doc"]],decls:17,vars:2,consts:[[1,"doc-section-description"],["href","https://www.chartjs.org/docs/latest/general/accessibility.html",1,"text-primary","font-medium","hover:underline"],[3,"code","hideToggleCode"]],template:function(o,a){o&1&&(n(0,"div")(1,"app-docsectiontext")(2,"div",0)(3,"h3"),r(4,"Screen Reader"),i(),n(5,"p"),r(6," Chart components internally use "),n(7,"i"),r(8,"canvas"),i(),r(9," element, refer to the "),n(10,"a",1),r(11,"Chart.js accessibility"),i(),r(12," guide for more information. The canvas element can be customized with "),n(13,"i"),r(14,"canvasProps"),i(),r(15," property to define aria roles and properties, in addition any content inside the component is directly passed as a child of the canvas to be able to provide fallback content like a table. "),i()()(),d(16,"app-code",2),i()),o&2&&(p(16),s("code",a.code)("hideToggleCode",!0))},dependencies:[y,h],encapsulation:2});let l=t;return l})();var R=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="bar" [data]="basicData" [options]="basicOptions"></p-chart>',html:`
<div class="card">
    <p-chart type="bar" [data]="basicData" [options]="basicOptions"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-basic-demo',
    templateUrl: './chart-basic-demo.html'
})
export class ChartBasicDemo implements OnInit {
    basicData: any;

    basicOptions: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.basicData={labels:["Q1","Q2","Q3","Q4"],datasets:[{label:"Sales",data:[540,325,702,620],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)"],borderColor:["rgb(255, 159, 64)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)"],borderWidth:1}]},this.basicOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-basic-demo"]],decls:42,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-basic-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2," A chart is configured with 3 properties; "),n(3,"i"),r(4,"type"),i(),r(5,", "),n(6,"i"),r(7,"data"),i(),r(8," and "),n(9,"i"),r(10,"options"),i(),r(11,". Chart type is defined using the "),n(12,"i"),r(13,"type"),i(),r(14," property that accepts "),n(15,"i"),r(16,"pie"),i(),r(17,", "),n(18,"i"),r(19,"doughtnut"),i(),r(20,", "),n(21,"i"),r(22,"line"),i(),r(23,", "),n(24,"i"),r(25,"bar"),i(),r(26,", "),n(27,"i"),r(28,"radar"),i(),r(29," and "),n(30,"i"),r(31,"polarArea"),i(),r(32," as a value. The "),n(33,"i"),r(34,"data"),i(),r(35," defines datasets represented with the chart and the "),n(36,"i"),r(37,"options"),i(),r(38," provide numerous customization options to customize the presentation. "),i()(),n(39,"div",0),d(40,"p-chart",1),i(),d(41,"app-code",2)),o&2&&(p(40),s("data",a.basicData)("options",a.basicOptions),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var J=(()=>{let t=class t{constructor(){this.code={typescript:`
npm install chart.js --save
`}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["chartjs-doc"]],decls:4,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"To begin with, first you must install the charts.js package using npm and then include it in your project. An example with CLI would be;"),i()(),d(3,"app-code",0)),o&2&&(p(3),s("code",a.code)("hideToggleCode",!0))},dependencies:[y,h],encapsulation:2});let l=t;return l})();var U=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="line" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="line" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-combo-demo',
    templateUrl: './chart-combo-demo.html'
})
export class ChartComboDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'line',
                    label: 'Dataset 1',
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4,
                    data: [50, 25, 12, 48, 56, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"line",label:"Dataset 1",borderColor:e.getPropertyValue("--blue-500"),borderWidth:2,fill:!1,tension:.4,data:[50,25,12,48,56,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34],borderColor:"white",borderWidth:2},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--orange-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a},grid:{color:u}},y:{ticks:{color:a},grid:{color:u}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-combo-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","line",3,"data","options"],["selector","chart-combo-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Different chart types can be combined in the same graph usign the "),n(3,"i"),r(4,"type"),i(),r(5," option of a dataset."),i()(),n(6,"div",0),d(7,"p-chart",1),i(),d(8,"app-code",2)),o&2&&(p(7),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var L=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="doughnut" [data]="data" [options]="options"></p-chart>',html:`
<div class="card flex justify-content-center">
    <p-chart type="doughnut" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-doughnut-demo',
    templateUrl: './chart-doughnut-demo.html'
})
export class ChartDoughnutDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };


        this.options = {
            cutout: '60%',
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color");this.data={labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:[e.getPropertyValue("--blue-500"),e.getPropertyValue("--yellow-500"),e.getPropertyValue("--green-500")],hoverBackgroundColor:[e.getPropertyValue("--blue-400"),e.getPropertyValue("--yellow-400"),e.getPropertyValue("--green-400")]}]},this.options={cutout:"60%",plugins:{legend:{labels:{color:o}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-doughnut-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["type","doughnut",3,"data","options"],["selector","chart-doughnut-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var z=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="bar" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="bar" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-horizontal-bar-demo',
    templateUrl: './chart-horizontal-bar-demo.html'
})
export class ChartHorizontalBarDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.options = {
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--blue-500"),borderColor:e.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--pink-500"),borderColor:e.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]},this.options={indexAxis:"y",maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-horizontal-bar-demo"]],decls:12,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-horizontal-bar-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A bar chart is rendered horizontally when "),n(3,"i"),r(4,"indexAxis"),i(),r(5," option is set as "),n(6,"i"),r(7,"y"),i(),r(8,"."),i()(),n(9,"div",0),d(10,"p-chart",1),i(),d(11,"app-code",2)),o&2&&(p(10),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var H=(()=>{let t=class t{constructor(){this.code={typescript:"import { ChartModule } from 'primeng/chart';"}}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["import-doc"]],decls:1,vars:2,consts:[[3,"code","hideToggleCode"]],template:function(o,a){o&1&&d(0,"app-code",0),o&2&&s("code",a.code)("hideToggleCode",!0)},dependencies:[y],encapsulation:2});let l=t;return l})();var $=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="line" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="line" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-line-demo',
    templateUrl: './chart-line-demo.html'
})
export class ChartLineDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:e.getPropertyValue("--blue-500"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderColor:e.getPropertyValue("--pink-500"),tension:.4}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a},grid:{color:u,drawBorder:!1}},y:{ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-line-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","line",3,"data","options"],["selector","chart-line-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var N=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="line" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="line" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-line-style-demo',
    templateUrl: './chart-line-style-demo.html'
})
export class ChartLineStyleDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--blue-500')
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    tension: 0.4,
                    borderColor: documentStyle.getPropertyValue('--teal-500')
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: documentStyle.getPropertyValue('--orange-500'),
                    tension: 0.4,
                    backgroundColor: 'rgba(255,167,38,0.2)'
                }
            ]
        };
        
        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,tension:.4,borderColor:e.getPropertyValue("--blue-500")},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,borderDash:[5,5],tension:.4,borderColor:e.getPropertyValue("--teal-500")},{label:"Third Dataset",data:[12,51,62,33,21,62,45],fill:!0,borderColor:e.getPropertyValue("--orange-500"),tension:.4,backgroundColor:"rgba(255,167,38,0.2)"}]},this.options={maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a},grid:{color:u}},y:{ticks:{color:a},grid:{color:u}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-line-style-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","line",3,"data","options"],["selector","chart-line-style-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Various styles of a line series can be customized to display customizations like an area chart."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var Q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["methods-doc"]],decls:32,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),r(5,"Name"),i(),n(6,"th"),r(7,"Parameters"),i(),n(8,"th"),r(9,"Description"),i()()(),n(10,"tbody")(11,"tr")(12,"td"),r(13,"refresh"),i(),n(14,"td"),r(15,"-"),i(),n(16,"td"),r(17,"Redraws the graph with new data."),i()(),n(18,"tr")(19,"td"),r(20,"reinit"),i(),n(21,"td"),r(22,"-"),i(),n(23,"td"),r(24,"Destroys the graph first and then creates it again."),i()(),n(25,"tr")(26,"td"),r(27,"generateLegend"),i(),n(28,"td"),r(29,"-"),i(),n(30,"td"),r(31,"Returns an HTML string of a legend for that chart. The legend is generated from the legendCallback in the options."),i()()()()())},encapsulation:2});let l=t;return l})();var W=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="line" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="line" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-multi-axis-demo',
    templateUrl: './chart-multi-axis-demo.html'
})
export class ChartMultiAxisDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'Dataset 1',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 81, 56, 55, 10]
                },
                {
                    label: 'Dataset 2',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        
        this.options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        drawOnChartArea: false,
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",fill:!1,borderColor:e.getPropertyValue("--blue-500"),yAxisID:"y",tension:.4,data:[65,59,80,81,56,55,10]},{label:"Dataset 2",fill:!1,borderColor:e.getPropertyValue("--green-500"),yAxisID:"y1",tension:.4,data:[28,48,40,19,86,27,90]}]},this.options={stacked:!1,maintainAspectRatio:!1,aspectRatio:.6,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a},grid:{color:u}},y:{type:"linear",display:!0,position:"left",ticks:{color:a},grid:{color:u}},y1:{type:"linear",display:!0,position:"right",ticks:{color:a},grid:{drawOnChartArea:!1,color:u}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-multi-axis-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","line",3,"data","options"],["selector","chart-multi-axis-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Multiple axes can be added using the "),n(3,"i"),r(4,"scales"),i(),r(5," option."),i()(),n(6,"div",0),d(7,"p-chart",1),i(),d(8,"app-code",2)),o&2&&(p(7),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var G=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="pie" [data]="data" [options]="options"></p-chart>',html:`
<div class="card flex justify-content-center">
    <p-chart type="pie" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-pie-demo',
    templateUrl: './chart-pie-demo.html'
})
export class ChartPieDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
                }
            ]
        };

        this.options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color");this.data={labels:["A","B","C"],datasets:[{data:[540,325,702],backgroundColor:[e.getPropertyValue("--blue-500"),e.getPropertyValue("--yellow-500"),e.getPropertyValue("--green-500")],hoverBackgroundColor:[e.getPropertyValue("--blue-400"),e.getPropertyValue("--yellow-400"),e.getPropertyValue("--green-400")]}]},this.options={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-pie-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["type","pie",3,"data","options"],["selector","chart-pie-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A pie chart is a circular statistical graphic which is divided into slices to illustrate numerical proportion."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var Y=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="polarArea" [data]="data" [options]="options"></p-chart>',html:`
<div class="card flex justify-content-center">
    <p-chart type="polarArea" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-polar-area-demo',
    templateUrl: './chart-polar-area-demo.html'
})
export class ChartPolarAreaDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            datasets: [
                {
                    data: [11, 16, 7, 3, 14],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--red-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--bluegray-500'),
                        documentStyle.getPropertyValue('--blue-500')
                    ],
                    label: 'My dataset'
                }
            ],
            labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue']
        };
        
        this.options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--surface-border");this.data={datasets:[{data:[11,16,7,3,14],backgroundColor:[e.getPropertyValue("--red-500"),e.getPropertyValue("--green-500"),e.getPropertyValue("--yellow-500"),e.getPropertyValue("--bluegray-500"),e.getPropertyValue("--blue-500")],label:"My dataset"}],labels:["Red","Green","Yellow","Grey","Blue"]},this.options={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:a}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-polar-area-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["type","polarArea",3,"data","options"],["selector","chart-polar-area-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["props-doc"]],decls:85,vars:0,consts:[[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,a){o&1&&(n(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),r(5,"Name"),i(),n(6,"th"),r(7,"Type"),i(),n(8,"th"),r(9,"Default"),i(),n(10,"th"),r(11,"Description"),i()()(),n(12,"tbody")(13,"tr")(14,"td"),r(15,"type"),i(),n(16,"td"),r(17,"string"),i(),n(18,"td"),r(19,"null"),i(),n(20,"td"),r(21,"Type of the chart."),i()(),n(22,"tr")(23,"td"),r(24,"data"),i(),n(25,"td"),r(26,"any"),i(),n(27,"td"),r(28,"null"),i(),n(29,"td"),r(30,"Data to display."),i()(),n(31,"tr")(32,"td"),r(33,"options"),i(),n(34,"td"),r(35,"any"),i(),n(36,"td"),r(37,"null"),i(),n(38,"td"),r(39,"Options to customize the chart."),i()(),n(40,"tr")(41,"td"),r(42,"plugins"),i(),n(43,"td"),r(44,"any[]"),i(),n(45,"td"),r(46,"null"),i(),n(47,"td"),r(48,"Array of per-chart plugins to customize the chart behaviour."),i()(),n(49,"tr")(50,"td"),r(51,"width"),i(),n(52,"td"),r(53,"string"),i(),n(54,"td"),r(55,"null"),i(),n(56,"td"),r(57,"Width of the chart."),i()(),n(58,"tr")(59,"td"),r(60,"height"),i(),n(61,"td"),r(62,"string"),i(),n(63,"td"),r(64,"null"),i(),n(65,"td"),r(66,"Height of the chart."),i()(),n(67,"tr")(68,"td"),r(69,"responsive"),i(),n(70,"td"),r(71,"boolean"),i(),n(72,"td"),r(73,"true"),i(),n(74,"td"),r(75,"Whether the chart is redrawn on screen size change."),i()(),n(76,"tr")(77,"td"),r(78,"onDataSelect"),i(),n(79,"td"),r(80,"function"),i(),n(81,"td"),r(82,"null"),i(),n(83,"td"),r(84,"Callback to execute when an element on chart is clicked."),i()()()()())},encapsulation:2});let l=t;return l})();var Z=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="radar" [data]="data" [options]="options"></p-chart>',html:`
<div class="card flex justify-content-center">
    <p-chart type="radar" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-radar-demo',
    templateUrl: './chart-radar-demo.html'
})
export class ChartRadarDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        
        this.data = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    borderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
        
        this.options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    },
                    pointLabels: {
                        color: textColorSecondary
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary");this.data={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--bluegray-400"),pointBackgroundColor:e.getPropertyValue("--bluegray-400"),pointBorderColor:e.getPropertyValue("--bluegray-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--bluegray-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--pink-400"),pointBackgroundColor:e.getPropertyValue("--pink-400"),pointBorderColor:e.getPropertyValue("--pink-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--pink-400"),data:[28,48,40,19,96,27,100]}]},this.options={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:a},pointLabels:{color:a}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-radar-demo"]],decls:6,vars:3,consts:[[1,"card","flex","justify-content-center"],["type","radar",3,"data","options"],["selector","chart-radar-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A radar chart is a graphical method of displaying multivariate data in the form of a two-dimensional chart of three or more quantitative variables represented on axes starting from the same point."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var K=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="bar" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="bar" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-stacked-bar-demo',
    templateUrl: './chart-stacked-bar-demo.html'
})
export class ChartStackedBarDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    type: 'bar',
                    label: 'Dataset 1',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [50, 25, 12, 48, 90, 76, 42]
                },
                {
                    type: 'bar',
                    label: 'Dataset 2',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 65, 34]
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
                    data: [41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:e.getPropertyValue("--blue-500"),data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:e.getPropertyValue("--green-500"),data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:e.getPropertyValue("--yellow-500"),data:[41,52,24,74,23,21,32]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{tooltip:{mode:"index",intersect:!1},legend:{labels:{color:o}}},scales:{x:{stacked:!0,ticks:{color:a},grid:{color:u,drawBorder:!1}},y:{stacked:!0,ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-stacked-bar-demo"]],decls:9,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-stacked-bar-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"Bars can be stacked on top of each other when "),n(3,"i"),r(4,"stacked"),i(),r(5," option of a scale is enabled."),i()(),n(6,"div",0),d(7,"p-chart",1),i(),d(8,"app-code",2)),o&2&&(p(7),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var X=(()=>{let t=class t{constructor(e,o,a){this.platformId=e,this.configService=o,this.cd=a,this.code={basic:'<p-chart type="bar" [data]="data" [options]="options"></p-chart>',html:`
<div class="card">
    <p-chart type="bar" [data]="data" [options]="options"></p-chart>
</div>`,typescript:`
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'chart-vertical-bar-demo',
    templateUrl: './chart-vertical-bar-demo.html'
})
export class ChartVerticalBarDemo implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: documentStyle.getPropertyValue('--pink-500'),
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }

            }
        };
    }
}`,module:`
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartDemo } from './chartdemo';

@NgModule({
    imports: [CommonModule, ChartModule],
    declarations: [ChartDemo]
})
export class ChartDemoModule {}`},this.subscription=this.configService.configUpdate$.pipe(f(25)).subscribe(u=>{this.initChart(),this.cd.markForCheck()})}ngOnInit(){this.initChart()}initChart(){if(C(this.platformId)){let e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),u=e.getPropertyValue("--surface-border");this.data={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:e.getPropertyValue("--blue-500"),borderColor:e.getPropertyValue("--blue-500"),data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:e.getPropertyValue("--pink-500"),borderColor:e.getPropertyValue("--pink-500"),data:[28,48,40,19,86,27,90]}]},this.options={maintainAspectRatio:!1,aspectRatio:.8,plugins:{legend:{labels:{color:o}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{color:u,drawBorder:!1}},y:{ticks:{color:a},grid:{color:u,drawBorder:!1}}}}}}};t.\u0275fac=function(o){return new(o||t)(c(g),c(S),c(b))},t.\u0275cmp=m({type:t,selectors:[["chart-vertical-bar-demo"]],decls:6,vars:3,consts:[[1,"card"],["type","bar",3,"data","options"],["selector","chart-vertical-bar-demo",3,"code"]],template:function(o,a){o&1&&(n(0,"app-docsectiontext")(1,"p"),r(2,"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent."),i()(),n(3,"div",0),d(4,"p-chart",1),i(),d(5,"app-code",2)),o&2&&(p(4),s("data",a.data)("options",a.options),p(),s("code",a.code))},dependencies:[y,x,h],encapsulation:2});let l=t;return l})();var _=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=A({type:t}),t.\u0275inj=k({imports:[M,E,T,B,w,w]});let l=t;return l})();var oe=()=>["Chart"],ee=(()=>{let t=class t{constructor(){this.docs=[{id:"import",label:"Import",component:H},{id:"chartjs",label:"Chart.js",component:J},{id:"basic",label:"Basic",component:R},{id:"pie",label:"Pie",component:G},{id:"doughnut",label:"Doughnut",component:L},{id:"verticalbar",label:"Vertical Bar",component:X},{id:"horizontalbar",label:"Horizontal Bar",component:z},{id:"stackedbar",label:"Stacked Bar",component:K},{id:"line",label:"Line",component:$},{id:"multiaxis",label:"MultiAxis",component:W},{id:"linestyles",label:"Line Styles",component:N},{id:"polararea",label:"Polar Area",component:Y},{id:"Radar",label:"Radar",component:Z},{id:"combo",label:"Combo",component:U},{id:"accessibility",label:"Accessibility",component:O}],this.apiDocs=[{id:"properties",label:"Properties",component:q},{id:"methods",label:"Methods",component:Q}]}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["docTitle","Angular Chart Component","header","Charts","description","Chart components are based on Charts.js 3.3.2+, an open source HTML5 based charting library.",3,"docs","apiDocs"]],template:function(o,a){o&1&&d(0,"app-doc",0),o&2&&s("docs",a.docs)("apiDocs",j(2,oe))},dependencies:[F],encapsulation:2});let l=t;return l})();var te=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=A({type:t}),t.\u0275inj=k({imports:[E.forChild([{path:"",component:ee}]),E]});let l=t;return l})();var zo=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=A({type:t}),t.\u0275inj=k({imports:[M,te,B,_]});let l=t;return l})();export{zo as ChartDemoModule};
