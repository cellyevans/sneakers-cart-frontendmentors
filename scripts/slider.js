// variables
const sliderContainer = document.querySelector(".snk-main__product-slider");
const slides = document.querySelectorAll(".slide");
const previousSlide = document.querySelector(".previous");
const nextSlide = document.querySelector(".next");

let counter = 0;
slides[counter].classList.add("active");
// IIFE
(() => setInterval(() => {
    moveForward();
}, 4000))();


nextSlide.addEventListener("click", () => moveForward());
previousSlide.addEventListener("click", () => moveBackward());

const  moveBackward = () => {
    counter > 0 ? counter -= 1 : counter = slides.length - 1 ;
    loop(slides, counter);
}

function moveForward() {
    counter < slides.length - 1 ? counter += 1 : counter = 0;
    loop(slides, counter);
}

const loop = (slider, count) => slider.forEach((slide, idx) => {
    if(count === idx) {
        slide.classList.add("active");
    } else {
        slide.classList.remove("active");
    }
})


