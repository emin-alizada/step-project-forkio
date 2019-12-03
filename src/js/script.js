let btn = document.querySelector(".header__nav-burger")
let nav = document.querySelector(".header__nav")
let dropDown = document.querySelector(".header__nav-menu")
btn.addEventListener("mouseover", () => {
    dropDown.style.display = "flex"
})
nav.addEventListener("mouseleave", () => {
    dropDown.style.display = "none"
})