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

const producto3 = {
    nombre: 'teclado',
    precio: 50
}

let resultados;

resultados = [...carritos, producto]

resultados= [...resultados, producto2]
resultados= [producto3, ...resultados]


console.table(resultados);