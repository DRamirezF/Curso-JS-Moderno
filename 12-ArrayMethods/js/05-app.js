const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// Con .forEach
let resultado = ''

resultado = carrito.forEach( (producto, index) => {
    if (producto.name === 'Tablet') {
        resultado = carrito[index]
    }
} )


// Con .find
const resultado2 = carrito.find( producto => producto.name === 'Tablet')
// Solo traerá el primero que encuentre
// Para traer multiples usa filter
const resultado3 = carrito.find( producto => producto.precio === 100)
// Si no encuentra nada el valor será undefined
const resultado4 = carrito.find( producto => producto.precio === 1000)
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);