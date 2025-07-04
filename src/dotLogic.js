export function createDots () {
    const dotContainer = document.querySelector(".dot-container");
    const imageArray = Array.from(document.querySelectorAll(".image"));
    imageArray.forEach(()=>{
        const dot = document.createElement("span");
        dot.className = "dot";
        dotContainer.appendChild(dot);
    });
}