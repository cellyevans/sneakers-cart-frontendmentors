// Toggle Menu
// variables
const openMenu = document.querySelector(".snk-header__toggle-box");
const closeMenu = document.querySelector(".snk-header__menu--close");
const menu = document.querySelector(".snk-header__menu");
const menuContainer = document.querySelector(".snk-header__menu--menu-container");

openMenu.addEventListener("click", () => {
    menu.classList.add("active");
    menuContainer.classList.add("active");
})

closeMenu.addEventListener("click", () => {
    menu.classList.remove("active");
    menuContainer.classList.remove("active");
});

menu.addEventListener("click", e => {
    const target = e.target;

    if (target.matches(".snk-header__menu") || target.matches("a.snk-header__menu--link")) {
        menu.classList.remove("active");
        menuContainer.classList.remove("active");
    }
})

// const addActive = (elem, container) => {
//     elem.classList.add("active");
//     container.classList.add("active");
// }

// const removeActive = (elem, container) => {
//     elem.classList.remove("active");
//     container.classList.remove("active");
// }

