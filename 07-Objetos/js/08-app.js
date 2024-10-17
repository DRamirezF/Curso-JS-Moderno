'use strict'

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Congelar un objeto hace que no pueda ser modificado al estilo de una constante
Object.freeze( producto )

// Todas estra propiedades lanzarán error porque el objeto está congelado
producto.disponible = false
producto.image = 'image.png'
delete producto.precio

console.log(producto);

console.log(Object.isFrozen(producto));