const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");
const nav =  document.querySelector(".nav");



const navLeft = menu.getBoundingClientRect().left;

navOpen.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        nav.classList.add("show");
        console.log("działa");
        }

});


navClose.addEventListener("click", () => {
    if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.add("show");
        nav.classList.remove("show");
        }
});