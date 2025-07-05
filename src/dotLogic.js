import { getArrayOfImageDOMNode, getPositionOfVisibleImage, toggleImageVisibility } from "./arrowsLogic";

export function createDots () {
    const dotContainer = document.querySelector(".dot-container");
    const imageArray = getArrayOfImageDOMNode();
    const positionOfCurrentImageShown = getPositionOfVisibleImage(imageArray);
    imageArray.forEach((element, index) => {
        function shortcutToSlide () {
            const imageArray = getArrayOfImageDOMNode();
            const positionOfCurrentImageShown = getPositionOfVisibleImage(imageArray);
            toggleImageVisibility(positionOfCurrentImageShown, imageArray);
            toggleImageVisibility(index, imageArray);
        };
        
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", shortcutToSlide);

        if (index === positionOfCurrentImageShown) {
            dot.classList.add("shownImageDot");
        };
        dotContainer.appendChild(dot);
    });
};

export function toggleDotColor (index) {
    const dotArray = Array.from(document.querySelectorAll(".dot"));
    dotArray[index].classList.toggle("shownImageDot");
};

