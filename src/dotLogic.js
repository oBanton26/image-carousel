import { getArrayOfImageDOMNode, getPositionOfVisibleImage } from "./arrowsLogic";

export function createDots () {
    const dotContainer = document.querySelector(".dot-container");
    const imageArray = getArrayOfImageDOMNode();
    const currentImageShown = getPositionOfVisibleImage(imageArray);
    imageArray.forEach((element, index) => {
        const dot = document.createElement("span");
        dot.className = "dot";
        if (index === currentImageShown) {dot.classList.add("shownImageDot")};
        dotContainer.appendChild(dot);
    });
};

export function toggleDotColor (index) {
    const dotArray = Array.from(document.querySelectorAll(".dot"));
    dotArray[index].classList.toggle("shownImageDot");
};