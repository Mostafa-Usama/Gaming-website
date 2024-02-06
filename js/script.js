let menuBtn = document.querySelector(".menu-btn")
let menu = document.querySelector(".menu")
let scrollBtn = document.querySelector(".scroll-btn")
let main = document.querySelector("main")
let sections = document.querySelectorAll("section")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("opened")
    menuBtn.classList.toggle("clicked")
})

window.addEventListener("scroll", () => {
    this.scrollY > 300 ? scrollBtn.classList.add("visible") : scrollBtn.classList.remove("visible")
    
    sections.forEach(section => {
        if (this.scrollY + this.innerHeight > section.offsetTop + 150) {
            section.style.opacity = "1"
        }
    })
        
})

window.onload = ()=>{
    main.style.opacity = "1"
}