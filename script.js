"use strict";

// Function to change LED to on when tab is selected
function selectLED(num) {
    document.querySelectorAll(".LED").forEach(i => {
        i.id = ""
    });
    document.querySelectorAll(".LED")[num].id = "onLED";
}