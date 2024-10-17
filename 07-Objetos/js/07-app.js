const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

producto.disponible = false;

// Delete elimina una propiedad de un objeto
delete producto.precio

console.log(producto);