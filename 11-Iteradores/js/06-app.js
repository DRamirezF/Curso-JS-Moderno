// foreach

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente, index) => {
    console.log(`${pendiente} : ${index}`);
})


const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisor', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700},
]


// ForEach crea un nuevo arreglo
const nuevoArreglo = carrito.forEach( producto => console.log(producto.nombre))

// Map crea un nuevo arreglo
const nuevoArreglo2 = carrito.map( producto => console.log(producto.nombre))


// El ForEach dará undefined porque no genra nuevos arreglos
console.log(nuevoArreglo);
// El map si genera un nuevo arreglo
console.log(nuevoArreglo2);