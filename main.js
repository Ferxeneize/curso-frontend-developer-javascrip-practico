const nvarEmail = document.querySelector (".navbar-email")
const cambiarMenu = document.querySelector(".desktop-menu")
const iconHamburguesaMobile = document.querySelector (".menu")
const cambiarMenuMobile = document.querySelector(".mobile-menu")

nvarEmail.addEventListener("click", funcionCambiarMenu)

function funcionCambiarMenu () {
    cambiarMenu.classList.toggle("inactiveE");
}

iconHamburguesaMobile.addEventListener("click", funcionCambiarMenuMobile)

function funcionCambiarMenuMobile () {
    cambiarMenuMobile.classList.toggle("inactiveE");
}