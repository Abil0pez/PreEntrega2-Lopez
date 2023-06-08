alert("Hola bienvenido!")
alert("¿Desea llevar algun producto? de lo contrario, ingrese 5 al continuar.")
let seleccionproductos = NaN;
let seleccioncantidad;
let totalPrecio = 0;
let totalProductos = 0;

function validarProducto(numero){
    while (numero < 0 || numero.length == 0 || isNaN(numero)){
        numero = parseInt(prompt("Ingrese una cantidad correcta: "))
    }
    return numero
}

while (seleccionproductos != 5) {
    seleccionproductos = parseInt(prompt("1-Alaska: $5999 \n2-Bilbao: $3999 \n3-Black: $9999 \n4-Tokyo: $2999\n5-Salir: "))
    switch (seleccionproductos) {
        case 1:
            seleccioncantidad = validarProducto(parseInt(prompt("El producto seleccionado es Alaska, indique la cantidad: ")))
            totalPrecio += seleccioncantidad * 5999
            totalProductos += seleccioncantidad
            break;
        case 2:
            seleccioncantidad = validarProducto(parseInt(prompt("El producto seleccionado es Bilbao, indique la cantidad: ")))
            totalPrecio += seleccioncantidad * 3999 
            totalProductos += seleccioncantidad
            break;
        case 3:
            seleccioncantidad = validarProducto(parseInt(prompt("El producto seleccionado es Black, indique la cantidad: ")))            
            totalPrecio += seleccioncantidad * 9999 
            totalProductos += seleccioncantidad
            break;
        case 4:
            seleccioncantidad = validarProducto(parseInt(prompt("El producto seleccionado es Tokyo, indique la cantidad: ")))            
            totalPrecio += seleccioncantidad * 2999 
            totalProductos += seleccioncantidad
            break;
        case 5:
            alert("Adios vuelva pronto :)")
            break;
        default:
            alert("Ingrese una opcion valida :)")
            break;
    }
}
alert("El total de productos es de: " + totalProductos)
alert("El total de la compra es de: " + totalPrecio + "$")
