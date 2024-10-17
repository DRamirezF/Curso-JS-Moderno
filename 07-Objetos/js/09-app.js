'use strict'

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Sellar un objeto hace que no se puedan agregar o eliminar campos, pero sí modificar los existentes
Object.seal( producto )

// Esto sí se puede
producto.disponible = false
// Estas dos no
producto.image = 'image.png'
delete producto.precio

console.log(producto);

console.log(Object.isSealed(producto));