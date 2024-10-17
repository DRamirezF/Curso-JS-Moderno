const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Para que funcione TODOS los elementos deben cumplir con esa condición, sino devolverá un false
const resultado = carrito.every( producto => producto.precio < 1000)
const resultado2 = carrito.every( producto => producto.precio < 500)
console.log(resultado);
console.log(resultado2);