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

// .push agrega al final del arreglo

carrito.push(producto)
carrito.push(producto2)

const producto3 = {
    nombre: 'teclado',
    precio: 50
}

carrito.unshift(producto3)


console.table(carrito);