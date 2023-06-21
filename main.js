
const nvarEmail = document.querySelector (".navbar-email")
const cambiarMenu = document.querySelector(".desktop-menu")
const iconHamburguesaMobile = document.querySelector (".menu")
const cambiarMenuMobile = document.querySelector(".mobile-menu")
const iconCarrito = document.querySelector (".navbar-shopping-cart")
const cambiarMenuCarrito = document.querySelector(".product-detail")
const contenedorDeProductos = document.querySelector(".cards-container")
const detalleProducto = document.querySelector(".productDetail")
const iconoDetalleProductoCerrar = document.querySelector(".productDetail-close")
const iconoCantidadAgregada = document.querySelector(".cantidadAgregada")
const imagenDetalle = document.querySelector(".imagenDetalle")
const claseDetallePrecio = document.querySelector(".detallePrecio")
const claseDetalleNombre = document.querySelector(".detalleNombre")
const botonAgregarAlCarro = document.querySelector(".add-to-cart-button")
const compraTotal = document.querySelector(".compraTotal")
const irParaAtras = document.querySelector (".irParaAtras")
const myOrderContent = document.querySelector (".my-order-content")



let nombreProductoCarrito
let precioProductoCarrito
let srcProductoCarrito
let detalleImagen
let detallePrecio
let detalleNombre
let numeroProductosagregados = 0
let idProducto = 0
let importeTotalCarrito = 0


iconoCantidadAgregada.innerText = numeroProductosagregados

irParaAtras.addEventListener ("click" , e =>{
    cambiarMenuCarrito.classList.add("inactiveE");
})

function agregarProductos (){
    numeroProductosagregados++
    iconoCantidadAgregada.innerText = numeroProductosagregados
}

botonAgregarAlCarro.addEventListener("click", agregarProductos)

botonAgregarAlCarro.addEventListener("click", sacarDatosProducto)

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
   function datosDetallePructucto(ab) { 
        for (let b= 0; b < ab.length; b++){
            var convertirAutosenArray = Object.values(ab[b])
            if (convertirAutosenArray[2] == detalleImagen) {
                detalleNombre = convertirAutosenArray[0]
                detallePrecio = convertirAutosenArray[1]
            } 
        }
    }
    datosDetallePructucto(listadeProductos);
    claseDetalleNombre.innerHTML = detalleNombre;
    claseDetallePrecio.innerHTML = detallePrecio;
    imagenDetalle.setAttribute("src", detalleImagen);
    detalleProducto.classList.remove("inactiveE");
    cambiarMenu.classList.add("inactiveE");
    cambiarMenuMobile.classList.add("inactiveE");
    cambiarMenuCarrito.classList.add("inactiveE");
   
}
iconoDetalleProductoCerrar.addEventListener("click", cerrarDetallesProducto)
function cerrarDetallesProducto() {
    detalleProducto.classList.add("inactiveE")
}

function constructorCarrito(a,b,c,d)  {
    this.cantidad = a;
    this.nombre = b;
    this.precio = c;
    this.imagen = d;
}
let  listadoDeProductosCarrito = []


function sacarDatosProducto (e){
    
    if(e.target.classList.contains("btnAgregarCarritoContenedor")) {
        let AA = e.target.parentElement;
        let BB = AA.parentElement;
        let CC = BB.parentElement;
        nombreProductoCarrito = BB.querySelector(".nombreProductoo").innerText;
        precioProductoCarrito = Number(BB.querySelector(".nombrePrecio").innerText.replace(/[$.]/g,' '));
        srcProductoCarrito = CC.querySelector(".imgDetalle").src;
      
    } else if (e.target.classList.contains("add-to-cart-button")){
            nombreProductoCarrito = detalleNombre;
            precioProductoCarrito = detallePrecio;
            srcProductoCarrito = detalleImagen;     
    }
    else { return }

    var productosRepetidos = listadoDeProductosCarrito.some (function (a) {
        return a.nombre == nombreProductoCarrito;   
    })

    if (productosRepetidos){

        for (let b= 0; b < listadoDeProductosCarrito.length; b++){
            var convertirArray = Object.values(listadoDeProductosCarrito[b])
            if (convertirArray[1] == nombreProductoCarrito) {
                convertirArray[0]++
                listadoDeProductosCarrito[b].cantidad = convertirArray[0]
             } 
        }
    }else {listadoDeProductosCarrito.push(new constructorCarrito(1,nombreProductoCarrito,precioProductoCarrito,srcProductoCarrito))}
    
    importeTotalCarrito = 0
    for (let b= 0; b < listadoDeProductosCarrito.length; b++){
        var convertirArray = Object.values(listadoDeProductosCarrito[b])
        importeTotalCarrito = importeTotalCarrito + (convertirArray[0] * convertirArray[2])
    }
    console.log("El importe total es: $ "+importeTotalCarrito )
    compraTotal.innerHTML = "$ " + importeTotalCarrito


}

/* <div class="shopping-cart">
        <p>3</p>
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$100,00</p>
        
        <img src="./icons/icon_close.png" alt="close">
    </div> */


function listarProductosCarrito(a){

    myOrderContent.remove
    
    for (producto of a) {
        const div1ero = document.createElement("div");
        div1ero.classList.add("shopping-cart")

        const p1 = document.createElement("p")
        p1.innerText = producto.cantidad

        const figuree = document.createElement("figure")
        const imgg = document.createElement("img")
        imgg.setAttribute ("src", producto.imagen)

        const p2 = document.createElement("p")
        p2.innerText = producto.nombre

        const p3 = document.createElement("p")
        p3.innerText = "$ " + producto.precio

        div1ero.appendChild(p1)
        figuree.appendChild(imgg)
        div1ero.appendChild(figuree)
        div1ero.appendChild(p2)
        div1ero.appendChild(p3)
        
        myOrderContent.appendChild(div1ero)
    }
}


const listadeProductos = []

listadeProductos.push({
    nombre: "Bici",
    precio: 250,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
listadeProductos.push({
    nombre: "Auto",
    precio: 6500 ,
    imagen: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
listadeProductos.push({
    nombre: "Moto",
    precio: 2500,
    imagen: "https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
listadeProductos.push({
    nombre: "Casa",
    precio: 10000,
    imagen: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})



function listarProductos(a) {
    for (producto of a){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.addEventListener("click", sacarDatosProducto);
        
        const img = document.createElement("img");
        img.classList.add("imgDetalle");
        img.setAttribute("src", producto.imagen);
        productCard.appendChild(img);
        img.addEventListener("click", e =>{detalleImagen = e.target.src});
        img.addEventListener("click", abrirDetallesProducto);
       

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
        productCard.appendChild(productInfo)
        
        
        const divSolo = document.createElement("div");
        
        productInfo.appendChild(divSolo)
        const pPrecio = document.createElement("p");
        pPrecio.innerText = "$ " + producto.precio
        pPrecio.classList.add("nombrePrecio")
        divSolo.appendChild(pPrecio)
        
        const pNombre = document.createElement("p");
        pNombre.innerText = producto.nombre
        pNombre.classList.add("nombreProductoo")
        divSolo.appendChild(pNombre)
        
        const figure = document.createElement("figure");
        productInfo.appendChild(figure)
        
        const imagenicono = document.createElement("img");
        imagenicono.classList.add("btnAgregarCarritoContenedor")
        imagenicono.setAttribute("src", "./icons/bt_add_to_cart.svg")
        imagenicono.addEventListener("click", agregarProductos);
       
     
        
        
        figure.appendChild(imagenicono)
        contenedorDeProductos.appendChild(productCard)
        } 
}
listarProductos (listadeProductos)






/* <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div> */




function datosDetallePructucto(listadeProductos) { 
     for (let b= 0; b < listadeProductos.length; b++){
         var convertirAutosenArray = Object.values(listadeProductos[b])
         if (convertirAutosenArray[0] == "Bici") {
             for (let i= 0; i < convertirAutosenArray.length ; i++) { 
                  console.log (convertirAutosenArray[i]);
              }
          }   
     }}


// Inicio Probamos creando los productos por un Constructor!!!!! funciono!!!!!!!

// function constructorProducto(a,b)  {
//     this.id = idProducto
//     this.nombre = a;
//     this.precio = b;
//     this.imagen = "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
// }
// var  listadoDeProductosConstructor = []

// function agregarProductos (a,b) { 
//     listadoDeProductosConstructor.push(new constructorProducto(a,b))
//     idProducto = idProducto + 1
// }
// agregarProductos ("BiciConstruc", 1500 )
// agregarProductos ("MotoConstruc", 3000 )
// agregarProductos ("AutoConstruc", 25000 )
// agregarProductos ("CASAConstruc", 215000 )


// listarProductos (listadoDeProductosConstructor)

// Fin Probamos creando los productos por un Constructor!!!!! funciono!!!!!!!