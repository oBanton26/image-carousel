export function nextSlide () {
    const imageNodeList = document.querySelectorAll(".image");
    const imageArray = Array.from(imageNodeList);
    console.log(getPositionOfVisibleImage(imageArray));
}

function getPositionOfVisibleImage (array) {
    for (let imgDiv of array) {
        if (imgDiv.classList.contains("visible")) {
            return array.indexOf(imgDiv);
        }
    }
}