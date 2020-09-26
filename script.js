"use strict";

//Turn LED on when you switch from section to section
window.onscroll = function() {selectLED()};

function selectLED() {

    document.querySelectorAll(".markers").forEach((value, i) => {
        var height = value.offsetTop;
        if (window.pageYOffset > height - 10) {
            document.querySelectorAll(".LED")[i].id = "onLED";
        } else {
            document.querySelectorAll(".LED")[i].id = "";
        }
    });
}