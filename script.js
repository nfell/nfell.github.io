"use strict";

function selectLED(num) {
    document.querySelectorAll(".LED").forEach(i => {
        i.id = ""
    });
    document.querySelectorAll(".LED")[num].id = "onLED";
}