var navBackground = document.querySelector("nav");
var icons = document.querySelectorAll(".navbar-light .navbar-nav .nav-link")
var logoColor = document.querySelector(".navbar-light .navbar-brand")
var searchIcon = document.querySelector(".text-primary")
// var changeColor = navBackground.classList.add("navColor")

console.log(icons)

console.log(screen.height)

window.onscroll = function () {

    if (document.body.scrollTop >= 610 || document.documentElement.scrollTop >= 610) {
        navBackground.classList.add("navColor");
        logoColor.style.color = "#fffbfb";
        searchIcon.classList.add("searchColor")
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.color = "rgba(255, 255, 255, 0.91)"
        }
    } else {
        navBackground.classList.remove("navColor");
        logoColor.style.color = "rgba(0,0,0,.9)";
        searchIcon.classList.remove("searchColor");
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.color = "rgba(0,0,0,.5)"
        }
    }
}