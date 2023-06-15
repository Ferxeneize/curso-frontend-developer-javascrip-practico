const nvarEmail = document.querySelector (".navbar-email")
const cambiarMenu = document.querySelector(".desktop-menu")

nvarEmail.addEventListener("click", funcionCambiarMenu)

function funcionCambiarMenu () {
    cambiarMenu.classList.toggle("inactiveE");
}
