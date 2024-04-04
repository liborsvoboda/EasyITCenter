console.log("js/dropleft.js loaded");

//droplefts
var home = document.getElementById("home");
var calender = document.getElementById("calender");
var tv = document.getElementById("tv");
var setting = document.getElementById("setting");
var help = document.getElementById("help");

//icons
var calicon = document.getElementById("calicon");
var tvicon = document.getElementById("tvicon");
var seticon = document.getElementById("seticon");
var helpicon = document.getElementById("helpicon");

//dropdown
var components = document.getElementById("components");


function myHome() {
    if (home.style.display === "none") {
        home.style.display = "block";
        calender.style.display = "none";
        tv.style.display = "none";
        setting.style.display = "none";
        help.style.display = "none";
        components.style.display = "none";

        tvicon.style = "none";
        seticon.style = "none";
        helpicon.style = "none";
        calicon.style = "none";
    } else {
        home.style.display = "none";
    }
  }

  function myCalender() {
    if (calender.style.display === "none") {
        calender.style.display = "block";
        home.style.display = "none";
        tv.style.display = "none";
        setting.style.display = "none";
        help.style.display = "none";
        components.style.display = "none";

        calicon.style.color = "#22B9FF";

        tvicon.style = "none";
        seticon.style = "none";
        helpicon.style = "none";
    } else {
        calender.style.display = "none";
        calicon.style = "none";
    }
  }

  function myTv() {
    if (tv.style.display === "none") {
        tv.style.display = "block";
        home.style.display = "none";
        calender.style.display = "none";
        setting.style.display = "none";
        help.style.display = "none";
        components.style.display = "none";

        tvicon.style.color = "#22B9FF";

        seticon.style = "none";
        helpicon.style = "none";
        calicon.style = "none";
    } else {
        tv.style.display = "none";
        tvicon.style = "none";
    }
  }

  function mySetting() {
    if (setting.style.display === "none") {
        setting.style.display = "block";
        home.style.display = "none";
        calender.style.display = "none";
        tv.style.display = "none";
        help.style.display = "none";
        components.style.display = "none";

        seticon.style.color = "#22B9FF";

        tvicon.style = "none";
        helpicon.style = "none";
        calicon.style = "none";
    } else {
        setting.style.display = "none";
        seticon.style = "none";
    }
  }

  function myHelp() {
    if (help.style.display === "none") {
        help.style.display = "block";
        home.style.display = "none";
        calender.style.display = "none";
        tv.style.display = "none";
        setting.style.display = "none";
        components.style.display = "none";

        helpicon.style.color = "#22B9FF";

        tvicon.style = "none";
        seticon.style = "none";
        calicon.style = "none";
    } else {
        help.style.display = "none";
        helpicon.style = "none";
    }
  }

  function myComponents() {
    if (components.style.display === "none") {
        components.style.display = "block";
        home.style.display = "none";
        calender.style.display = "none";
        tv.style.display = "none";
        setting.style.display = "none";

        helpicon.style.color = "#22B9FF";

        tvicon.style = "none";
        seticon.style = "none";
        calicon.style = "none";
    } else {
        components.style.display = "none";
        helpicon.style = "none";
    }
  }
