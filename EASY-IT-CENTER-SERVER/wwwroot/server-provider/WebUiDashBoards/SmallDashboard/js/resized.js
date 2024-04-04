console.log("resized.js loaded");
var menu2 = document.getElementById("second-menu");
function myMenu2(){
    if (menu2.style.display === "none") {
        menu2.style.display = "block";
    } else {
        menu2.style.display = "none";
    }
}

function myMenu2Close(){
    menu2.style.display ="none";
}