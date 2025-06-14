const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// Array function
const resultado = carrito.filter( producto => producto.precio > 400 )
console.log(resultado)


// Higher-order function
const mayor400 = producto => producto.precio > 400
const resultado2 = carrito.filter(mayor400)
console.log(resultado2)