//Se creo un algoritmo para calcular el precio total de los productos del carrito de compras
function calculoEspecias(agregadoDeProductos){
    let sum = 0;
    while(true){
        let agregadoDeProductos = +prompt("Agregar articulos introducciendo su numero correspondiente para calcular el precio a pagar: Lechuga. Costo: $3 Carne de res. Costo: $7, Mantequilla. Costo: $2, Coca cola. Costo: $3, Pan para hamburguesa. Costo $4");
        if(!agregadoDeProductos) break;
        
        sum += agregadoDeProductos;
        
    }
    return alert("Suma total de sus productos son: $" + sum + " Gracias por su compra");
}




calculoEspecias()