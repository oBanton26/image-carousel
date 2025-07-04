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
};


export function toggleImageVisibility (indexOfImage, imageArray) {
    imageArray[indexOfImage].classList.toggle("visible");
    toggleDotColor(indexOfImage);
};


function nextSlide () {
    const imageArray = getArrayOfImageDOMNode();
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);

    toggleImageVisibility(visibleImageIndex, imageArray);

    if (visibleImageIndex === imageArray.length - 1) {
        toggleImageVisibility(0, imageArray);
    } else {
        toggleImageVisibility(visibleImageIndex + 1, imageArray);
    };
};


function previousSlide () {
    const imageArray = getArrayOfImageDOMNode();
    const visibleImageIndex = getPositionOfVisibleImage(imageArray);

    toggleImageVisibility(visibleImageIndex, imageArray);

    if (visibleImageIndex === 0) {
        toggleImageVisibility(imageArray.length - 1, imageArray);
    } else {
        toggleImageVisibility(visibleImageIndex - 1, imageArray);
    };
};


export function setUpArrowButtons () {
    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");
    leftArrow.addEventListener("click", previousSlide);
    rightArrow.addEventListener("click", nextSlide);
}