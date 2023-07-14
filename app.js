function agregar0(){
    let objeto = JSON.parse(localStorage.getItem("productos"))
    let producto = objeto[0].precio
    let carrito = []
    if (JSON.parse(localStorage.getItem("carrito"))){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(JSON.stringify(producto))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let padre = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = objeto[0].nombre
    padre.appendChild(li)
}

function agregar1(){
    let objeto = JSON.parse(localStorage.getItem("productos"))
    let producto = objeto[1].precio
    let carrito = []
    if (JSON.parse(localStorage.getItem("carrito"))){
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(JSON.stringify(producto))
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let padre = document.getElementById("lista")
    let li = document.createElement("li")
    li.innerHTML = objeto[1].nombre
    padre.appendChild(li)
}

function borrar(){
    let padre = document.getElementById("lista")
    padre.innerHTML = ""
    let mostrar = document.getElementById("mostrar")
    mostrar.innerHTML = ""
    localStorage.removeItem("carrito")
    localStorage.removeItem("total")
}

function precioFinal(){
    
    localStorage.setItem("total", total)
}

function mostrarTotal(){
    let carrito = JSON.parse(localStorage.getItem("carrito"))
    let precioFinal = 0
    for (let total of carrito) {
        
        precioFinal += parseInt(total)
    }
    let h2 = document.createElement("h2")
    h2.innerHTML = precioFinal
    let padre = document.getElementById("mostrar")
    padre.appendChild(h2)
    localStorage.setItem("total", precioFinal)
}



let objeto = [
                {nombre: "Alaska", id: 0, precio: 2000},
                {nombre: "Tokyo", id: 1, precio: 3500}]

localStorage.setItem("productos", JSON.stringify(objeto))


let alaska = document.getElementById("alaska")
let tokyo = document.getElementById("tokyo")
let calcular = document.getElementById("precio")
let limpiar = document.getElementById("limpiar")

alaska.addEventListener("click", agregar0)
tokyo.addEventListener("click", agregar1)
limpiar.addEventListener("click", borrar)


calcular.addEventListener("click", mostrarTotal)
