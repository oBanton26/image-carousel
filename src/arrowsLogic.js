function getPositionOfVisibleImage (imageArray) {
    for (let imgDiv of imageArray) {
        if (imgDiv.classList.contains("visible")) {
            return imageArray.indexOf(imgDiv);
        };
    };
};

export function nextSlide () {
    const imageArray = Array.from(document.querySelectorAll(".image"));
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);
    imageArray[visibleImageIndex].classList.toggle("visible");
    if (visibleImageIndex === imageArray.length - 1) {
        imageArray[0].classList.toggle("visible");
    } else {
        imageArray[visibleImageIndex + 1].classList.toggle("visible");
    };
};

export function previousSlide () {
    const imageArray = Array.from(document.querySelectorAll(".image"));
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);
    imageArray[visibleImageIndex].classList.toggle("visible");
    if (visibleImageIndex === 0) {
        imageArray[imageArray.length - 1].classList.toggle("visible");
    } else {
        imageArray[visibleImageIndex - 1].classList.toggle("visible");
    };
};