const carrito = []

// Definir Producto
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto4 = {
    nombre: 'Computadora',
    precio: 1000
}

const producto5 = {
    nombre: 'Mouse',
    precio: 60
}

// .push agrega al final del arreglo

carrito.push(producto)
carrito.push(producto2)
carrito.push(producto4)
carrito.push(producto5)

const producto3 = {
    nombre: 'teclado',
    precio: 50
}

carrito.unshift(producto3)

console.table(carrito);

// Eliminar el último elemento .pop
carrito.pop()
console.table(carrito);

// Elimnar el primer elemento
carrito.shift()
console.table(carrito);

// Eliminar en cualquier punto del arreglo
// El primer valor toma cuando empieza, el segundo cauntos elementos borrará
carrito.splice(1, 1)


console.table(carrito);