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

//Photo wheel input
let images = [
    "/Images/photoSlide/IMG_0041.jpeg",
    "/Images/photoSlide/IMG_0806.jpeg",
    "/Images/photoSlide/IMG_1971.jpeg",
    "/Images/photoSlide/IMG_2498.jpeg",
    "/Images/photoSlide/IMG_4794.jpeg",
    "/Images/photoSlide/IMG_4624.jpeg",
    "/Images/photoSlide/IMG_5929.jpeg",
    "/Images/photoSlide/IMG_8256.jpeg",
    "/Images/photoSlide/IMG_4902.jpeg"
]

let captions = [
    "Choose godly wisdom over worldly wisdom",
    "I am confident I will see the Lord's goodness here in the land of the living",
    "Trust in God's Perfect Timing",
    "The struggle ends when gratitude begins",
    "The peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus",
    "But even the best years are filled with pain and trouble... Who can comprehend the power of your anger? Your wrath is as awesome as the fear you deserve. Teach us to realize the brevity of life, so that we may grow in wisdom",
    "The tounge is a small thing that makes grand speeches",
    "For he will conceal me when troubles come; he will hide me in his sanctuary. He will place me out of reach on a high rock. Then I will hold my head high, above my enemies who surround me. At his sanctuary I will offer sacrafices with shouts of joy, singing and praising the Lord with music",
    "Make every effort to add to your faith goodness; and to goodness, knowledge; and to knowledge, self control; and to self control, perseverance; and to perseverance, godliness; and to godliness, mutual affection; and to mutual affection, love"
]

let authors = [
    "",
    "Psalms 27:13",
    "",
    "Neale Donald Walsch",
    "Philippians 4:7",
    "Psalms 90:10-12",
    "James 3:5",
    "Psalms 27:5-6",
    "2 Peter 1:5-6"
]

//Move pictures when left/right arrows are pressed
var slideIndex = 0;
var caps = document.querySelectorAll(".caption");
var whos = document.querySelectorAll(".who");
var pics = document.querySelectorAll(".pic");

showSlides();

function plusSlides(n) {
    slideIndex += n;

    if (slideIndex > images.length) {
        slideIndex = 1
    }
    if (slideIndex < 0) {
        slideIndex = images.length - 1
    }
    showSlides();
}

//jQuery
function showSlides() {
    $("#photoWheel").fadeOut(setPics);
    $("#photoWheel").fadeIn();
}

function setPics() {
    let x = 0; // variable to run through the 4 positions for photos
    
    for (let i = slideIndex; i < slideIndex + 4; i++) {
        let index = i;
        if (i >= images.length) {
            index = i - images.length;
        }

        caps[x].textContent = captions[index];
        whos[x].textContent = authors[index];
        pics[x].src = images[index];
        x++;
    }
}