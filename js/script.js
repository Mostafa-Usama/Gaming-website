let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")


menuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened")
    menuBtn.classList.toggle("clicked")
})