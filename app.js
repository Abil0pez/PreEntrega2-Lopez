class Producto {
    nombre;
    precio;

    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

function main() {
    const producto1 = new Producto("Alaska", 5999);
    const producto2 = new Producto("Bilbao", 3999);
    const producto3 = new Producto("Black", 9999);
    const producto4 = new Producto("Tokyo", 2999);

    const catalogo = [producto1, producto2, producto3, producto4];




    let seleccion = prompt("Hola desea comprar algun producto si o no");

    while (seleccion != "si" && seleccion != no) {
        alert("Porfavor ingresa si o no")
        seleccion = prompt("Hola desea comprar algo si o no")
    }

    if (seleccion == "si") {
        alert("A continuacion nuestra lista de productos")
        alert("Alaska - 5999 - ID: 1\nBilbao - 3999 - ID: 2\n Black - 9999 - ID: 3\nTokyo - 2999 - ID: 4")
    } else if (seleccion == "no") {
        alert("Gracias por visitar la pagina, hasta pronto!")
    }

    while (seleccion != "no") {
        let eleccion = parseInt(prompt("Agrega un producto a tu carrito! Ponga su ID"))
        console.log(eleccion)
        let id = eleccion - 1
        if (eleccion = !0) {

            console.log(id)
            let unidades = parseInt(prompt("Cuantas unidades quiere llevar"))

            let precioFinal = catalogo[id].precio * unidades
            console.log(precioFinal)
            alert("El costo es de " + precioFinal)
        } else {
            alert("No tenemos ese producto")
        }

        seleccion = prompt("Desea seguir comprando?")

        if (seleccion === "no")
            alert("Gracias por su compra! hasta pronto")
    }
}

main()
