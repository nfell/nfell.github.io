//Graphic Images slideshow
let imageIndex = 0;
let images=document.querySelectorAll(".graphic_image_wrapper");
changeImage();

function incrementIndex() {
    imageIndex++;

    if (imageIndex > images.length - 1) {
        imageIndex = 0;
    }

    changeImage();
}

function changeImage() {
    for (i=0; i < images.length - 1; i++) {
        images[i].style.display = "none";
    }

    images[imageIndex].style.display = "flex";

    setTimeout(incrementIndex, 2000)
}