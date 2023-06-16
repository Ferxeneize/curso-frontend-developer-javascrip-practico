const nvarEmail = document.querySelector (".navbar-email")
const cambiarMenu = document.querySelector(".desktop-menu")
const iconHamburguesaMobile = document.querySelector (".menu")
const cambiarMenuMobile = document.querySelector(".mobile-menu")
const iconCarrito = document.querySelector (".navbar-shopping-cart")
const cambiarMenuCarrito = document.querySelector(".product-detail")

nvarEmail.addEventListener("click", funcionCambiarMenu);
function funcionCambiarMenu () {
    cambiarMenu.classList.toggle("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE")
}

iconHamburguesaMobile.addEventListener("click", funcionCambiarMenuMobile);
function funcionCambiarMenuMobile () {
    cambiarMenuMobile.classList.toggle("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE");
};

iconCarrito.addEventListener("click", funcionCambiarMenuCarrito);
function funcionCambiarMenuCarrito () {
    cambiarMenuCarrito.classList.toggle("inactiveE");
    cambiarMenu.classList.add("inactiveE");
    cambiarMenuMobile.classList.add("inactiveE");
};
