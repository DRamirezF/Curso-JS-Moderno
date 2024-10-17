const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Celular', precio: 700},
]


// .map se comporta muy parecdo a forEach
// Estas dos estructuras arrojan lo mismo
carrito.map( function(producto) {
    console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
})

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} -- Precio: ${producto.precio}`);
})

// La diferencia es que el .map crea un nuevo arreglo con la información
const nuevoArreglo = carrito.map( function(producto) {
    return `${producto.nombre} -- Precio: ${producto.precio}`;
})

// Por eso esta segunda variable está vacía
const nuevoArreglo2 = carrito.forEach( function(producto) {
    return `${producto.nombre} -- Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);      // Arreglo
console.log(nuevoArreglo2);     // Undefined
