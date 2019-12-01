let btn = document.querySelector(".header__nav-burger")
let dropDown = document.querySelector(".header__nav-menu")
btn.addEventListener("mouseover", () => {
    dropDown.style.display = "flex"
})
btn.addEventListener("mouseleave", () => {
    dropDown.style.display = "none"
})