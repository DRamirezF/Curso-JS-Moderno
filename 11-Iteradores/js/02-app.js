// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log(`Este es el número 5`);
//         // El break detiene por completo el loop
//         // EJemplo: 1, 2, 3, 4, 5
//         break
//     }
//     console.log(`Número: ${i}`);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log('CINCO');
//         // El continue termina esta iteración y salta a la siguiente
//         // Ejemplo: 1, 2, 3, 4, CINCO, 6, 7, 8, 9, 10
//         continue
//     }
//     console.log(`Número: ${i}`);
// }


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200, descuento: true},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El artículo: ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
}