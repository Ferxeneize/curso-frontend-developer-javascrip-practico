const nvarEmail = document.querySelector (".navbar-email")
const cambiarMenu = document.querySelector(".desktop-menu")
const iconHamburguesaMobile = document.querySelector (".menu")
const cambiarMenuMobile = document.querySelector(".mobile-menu")
const iconCarrito = document.querySelector (".navbar-shopping-cart")
const cambiarMenuCarrito = document.querySelector(".product-detail")
const contenedorDeProductos = document.querySelector(".cards-container")
const detalleProducto = document.querySelector(".productDetail")
const iconoDetalleProductoCerrar = document.querySelector(".productDetail-close")

nvarEmail.addEventListener("click", funcionCambiarMenu);
function funcionCambiarMenu () {
    cambiarMenu.classList.toggle("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE")
    detalleProducto.classList.add("inactiveE")
}

iconHamburguesaMobile.addEventListener("click", funcionCambiarMenuMobile);
function funcionCambiarMenuMobile () {
    cambiarMenuMobile.classList.toggle("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE");
    detalleProducto.classList.add("inactiveE")
};

iconCarrito.addEventListener("click", funcionCambiarMenuCarrito);
function funcionCambiarMenuCarrito () {
    cambiarMenuCarrito.classList.toggle("inactiveE");
    cambiarMenu.classList.add("inactiveE");
    cambiarMenuMobile.classList.add("inactiveE");
    detalleProducto.classList.add("inactiveE")
};

function abrirDetallesProducto() {
    detalleProducto.classList.remove("inactiveE");
    cambiarMenu.classList.add("inactiveE");
    cambiarMenuMobile.classList.add("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE");

}
iconoDetalleProductoCerrar.addEventListener("click", cerrarDetallesProducto)
function cerrarDetallesProducto() {
    detalleProducto.classList.add("inactiveE")
}
const listadeProductos = []

listadeProductos.push({
    nombre: "Bici",
    precio: 25000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
listadeProductos.push({
    nombre: "Auto",
    precio: 6500000 ,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
listadeProductos.push({
    nombre: "Moto",
    precio: 250000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
listadeProductos.push({
    nombre: "Casa",
    precio: 77880000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})



function listarProductos(a) {
    for (producto of a){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src", producto.imagen);
        productCard.appendChild(img);
        img.addEventListener("click", abrirDetallesProducto)

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
        productCard.appendChild(productInfo)
        
        const divSolo = document.createElement("div");
        
        productInfo.appendChild(divSolo)
        const pPrecio = document.createElement("p");
        pPrecio.innerText = "$ " + producto.precio
        divSolo.appendChild(pPrecio)
        
        const pNombre = document.createElement("p");
        pNombre.innerText = producto.nombre
        divSolo.appendChild(pNombre)
        
        const figure = document.createElement("figure");
        productInfo.appendChild(figure)
        
        const imagenicono = document.createElement("img");
        imagenicono.setAttribute("src", "./icons/bt_add_to_cart.svg")
        
        figure.appendChild(imagenicono)
        contenedorDeProductos.appendChild(productCard)
        } 
}

listarProductos (listadeProductos)


// Inicio Probamos creando los productos por un Constructor!!!!! funciono!!!!!!!

// function constructorProducto(a,b)  {
//     this.nombre = a;
//     this.precio = b;
//     this.imagen = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// }
// var  listadoDeProductosConstructor = []

// function agregarProductos (a,b) { 
//     listadoDeProductosConstructor.push(new constructorProducto(a,b))
// }
// agregarProductos ("BiciConstruc", 1500 )
// agregarProductos ("MotoConstruc", 3000 )
// agregarProductos ("AutoConstruc", 25000 )
// agregarProductos ("CASAConstruc", 215000 )


// listarProductos (listadoDeProductosConstructor)

// Fin Probamos creando los productos por un Constructor!!!!! funciono!!!!!!!