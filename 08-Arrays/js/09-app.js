const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Celular', precio: 700},
]



for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} -- Precio: ${carrito[i].precio}`);
}

// Arrary Method
// Aunque tardan el mismo tiempo y la diferencia de escritura no es tanta,
// el forEach es más intuitivo ya que permite personalizar el nombre de la variable
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
})