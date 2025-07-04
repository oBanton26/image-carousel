import { toggleDotColor } from "./dotLogic";

export function getPositionOfVisibleImage (imageArray) {
    for (let imgDiv of imageArray) {
        if (imgDiv.classList.contains("visible")) {
            return imageArray.indexOf(imgDiv);
        };
    };
};

export function getArrayOfImageDOMNode () {
    return Array.from(document.querySelectorAll(".image"));
}

function nextSlide () {
    const imageArray = getArrayOfImageDOMNode();
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);

    imageArray[visibleImageIndex].classList.toggle("visible");
    toggleDotColor(visibleImageIndex);

    if (visibleImageIndex === imageArray.length - 1) {
        imageArray[0].classList.toggle("visible");
        toggleDotColor(0);
    } else {
        imageArray[visibleImageIndex + 1].classList.toggle("visible");
        toggleDotColor(visibleImageIndex + 1);
    };
};

function previousSlide () {
    const imageArray = getArrayOfImageDOMNode();
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);

    imageArray[visibleImageIndex].classList.toggle("visible");
    toggleDotColor(visibleImageIndex);

    if (visibleImageIndex === 0) {
        imageArray[imageArray.length - 1].classList.toggle("visible");
        toggleDotColor(imageArray.length - 1);
    } else {
        imageArray[visibleImageIndex - 1].classList.toggle("visible");
        toggleDotColor(visibleImageIndex - 1);
    };
};

export function setUpArrowButtons () {
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");
    leftArrow.addEventListener("click", previousSlide);
    rightArrow.addEventListener("click", nextSlide);
}