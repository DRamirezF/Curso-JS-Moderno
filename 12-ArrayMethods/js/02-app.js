const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, index) => {
    if (mes === 'Abril') {
        console.log(`Encontrado en el indice ${index}`);
    }
})

// Encontrar el indice de Abril
const indice = meses.findIndex( mes => mes === 'Abril')
// Devuelve True si lo encuentra, y -1 si no
console.log(indice);

// Encontrar un indice de un arreglo de objetos
const indice2 = carrito.findIndex( producto => producto.precio === 100)
// .findIndex se detiene al momento en que encuentra el primer elemento que cumple esa condición
console.log(indice2);