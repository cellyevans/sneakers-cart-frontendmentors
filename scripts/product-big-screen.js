const displayImages = document.querySelectorAll(".output-box-img");
const thumbnails = document.querySelectorAll(".img-box .img-box-overlay");


thumbnails.forEach((img, index) => {
    img.addEventListener("click", event => {
        removeActiveFromElement(displayImages, "active");
        removeActiveFromElement(thumbnails, "active");

        displayImages[index].classList.add("active");
        event.target.classList.add("active");

        console.log(event.target);
    })
})

function removeActiveFromElement(node, className) {
    node.forEach(el => {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    })
}