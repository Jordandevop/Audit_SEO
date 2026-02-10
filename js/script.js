let menuButton = document.querySelector(".menu-toggle");
let mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", function () {
        mainNav.classList.toggle("open");
    });
}