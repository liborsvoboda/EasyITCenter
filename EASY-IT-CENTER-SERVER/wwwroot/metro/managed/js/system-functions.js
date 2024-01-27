﻿//Global Functions Library

function ScrollToTop() { window.scrollTo(0, 0); }
function enableScroll() { window.onscroll = function () { }; }
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function () { window.scrollTo(scrollLeft, scrollTop); };
}

function str2bytes(str) {
    var bytes = new Uint8Array(str.length);
    for (var i = 0; i < str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}

function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}

function UserChangeTranslateSetting() {
    Metro.storage.setItem('UserAutomaticTranslate', $("#UserAutomaticTranslate").val('checked')[0].checked);
}




function RestrictionControls() {
    //Enable-Disable Logged Controls
    //$("#UserSettingBtn").prop('disabled', !isLogged);
}



//Save Token on Success Login
async function AdminLogin(data) {
    Cookies.set('ApiToken', data.Token);
    Metro.storage.setItem('ApiToken', data.Token);
    Metro.storage.setItem('User', data);

    window.location.href = '/' + Metro.storage.getItem('WebMenuList', null)[0].id + "-" + Metro.storage.getItem('WebMenuList', data.Token)[0].name.replace(/\s+/g, '');
}


//Do Logout
function Logout() {
    Cookies.remove('ApiToken');
    Metro.storage.storage.clear();
    window.location.href ='/';
}


//Check is logged
function IsLogged() {
    return Metro.storage.getItem('ApiToken', null) != null;
}




//Load Metro
async function LoadMetro() {
    const pathCss = './metro/css/metro-all.min.css';
    const pathThemeCss = './metro/css/schemes/sky-net.css';
    const pathJs = './metro/js/metro.4.5.2.min.js?v=4.5.2';

    const dataCss = await fetch(pathCss).then((r) => r.text());
    const dataThemeCss = await fetch(pathThemeCss).then((r) => r.text());

    const myFont = new FontFace('metro', "url('./metro/mif/metro.svg') format('svg'), url('./metro/mif/metro.woff') format('woff'), url('./metro/mif/metro.ttf') format('truetype')");
    await myFont.load();document.fonts.add(myFont);

    const dataJs = await fetch(pathJs).then((r) => r.text())

    const style = document.createElement("style")
    style.textContent = dataCss
    document.querySelector("head").appendChild(style)

    style.textContent = dataThemeCss
    document.querySelector("head").appendChild(style)

    new Function(dataJs)();
    Metro.init();
    Metro.toast.create("Metro 4 did loaded successful!", {showTop: true,clsToast: "success"});
    $("#a1").accordion()
}

//Unload Metro 
function UnloadMetro() {
    delete Metro;
}


async function FileReaderToImageData(file) {
    const reader = new FileReader();
    let fileContent = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        console.log("files", JSON.parse(JSON.stringify(files)));    

        reader.readAsDataURL(file[0]);
    });
    return fileContent;
}



function PrintElement(elementId) {
    try {
        var printContents = document.getElementById(elementId).innerHTML;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    } catch (err) { }
}

function DownloadElement(elementId) {
    try {
        var a = document.body.appendChild(document.createElement("a"));
        a.download = elementId + ".html";
        a.href = "data:text/html," + document.getElementById(elementId).innerHTML;
        a.click();
    } catch (err) { }
}

async function CopyElement(elementId) {
    try {
        let text = document.getElementById(elementId).innerHTML;
        await navigator.clipboard.writeText(text);
    } catch (err) { }
}

function ImageFromElement(elementId) {
    try {
        var getCanvas;
        $('document').ready(function () {
            html2canvas($("#" + elementId), { onrendered: function (canvas) { $("#previewImage").append(canvas); getCanvas = canvas; } });
            var imgageData = getCanvas.toDataURL("image/png");
            var newData = imageData.replace(/^data:image\/png/, "data:application/octet-stream");
            var a = document.body.appendChild(document.createElement("a"));
            a.download = elementId + ".png";
            a.href = newData;
            a.click();
        });
    } catch (err) { }
}



