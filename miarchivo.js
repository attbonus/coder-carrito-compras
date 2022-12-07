//Se creo un algoritmo para calcular el precio total de los productos del carrito de compras
function calculoEspecias(agregadoDeProductos) {
    let sum = 0;
    while (true) {
        let agregadoDeProductos = +prompt("Agregar articulos introducciendo su numero correspondiente para calcular el precio a pagar: Lechuga. Costo: $3 Carne de res. Costo: $7, Mantequilla. Costo: $2, Coca cola. Costo: $3, Pan para hamburguesa. Costo $4");
        if (!agregadoDeProductos) break;

        sum += agregadoDeProductos;

    }
    return alert("Suma total de sus productos son: $" + sum + " Gracias por su compra");
}

calculoEspecias()

//productos que les sera agregado el descuento por incio de nueva temporada navideña

let productosseleccionados = [ {
    "nombre": "harina",
    "precio": 25,
    "descuento": true,
 }, {
    "nombre": "jamon",
    "precio": 45,
    "descuento": true,
}, {
    "nombre": "azucar",
    "precio": 35,
    "descuento": false,
},{
    "nombre": "torta",
    "precio": 2,
    "descuento": false,
}]


let productosConDescuentos = productosseleccionados.filter(productosConDescuento => productosConDescuento.descuento === true)
console.log(productosConDescuentos)










/*
Procesos necesarios en el carrito de compras tales como: agregado de nuevo producto, cálculo de descuento, suma de la canasta total, elimina productos.
Así como los elementos necesarios para su  modificacion si es necesaria

*/
// definir el objeto general para el agregado de un nuevo producto por la persona encargada:

function Producto(nombre, identificador, precioUnitario, cantidad, marca, seccion) {
    this.nombre = nombre;
    this.identificador = identificador;
    this.precioUnitario = precioUnitario;
    this.cantidad = cantidad;
    this.marca = marca;
    this.seccion = seccion;
    this.descripcion = function () {
        console.log(`${this.nombre} de la marca ${this.marca} tiene el #ID correspondiente ${this.identificador}, su costo en moneda nacional(MX) es ${this.precioUnitario} y el stock disponible es de ${this.cantidad} piezas, perteneciente a la seccion de: ${this.seccion}`)
    };
};



const zote = new Producto("zote", "axsdc11", 34.5, 4, "morena", "limpieza General");
const papelHigienico = new Producto("papel higienico", "xdw342",45.99,12,"Kleenex","cuidado Personal")



console.log(zote.descripcion())
console.log(papelHigienico.descripcion())