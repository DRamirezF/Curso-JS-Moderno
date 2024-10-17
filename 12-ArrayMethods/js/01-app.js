const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Combrobar si un valor existe en un arreglo
meses.forEach( mes => mes === enero ? console.log('Enero sí existe') : null)

// Con .includes
const resultados = meses.includes('Enero')
// Devuelve un booleano, true si existe, false si no
console.log(resultados);


// En un arreglo de objetos se utiliza .some
const existe = carrito.some( producto => producto.nombre === 'Tablet')
// Devuelve un booleano
console.log(existe);

// En un arreglo tradicional con .some
const existe2 = meses.some( mes => mes === 'Febrero' )
console.log(existe2);
