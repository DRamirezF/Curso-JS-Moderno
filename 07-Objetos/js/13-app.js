const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Estas propiedades devuelven un arreglo con las propiedades, su valor o ambas según cuál se pida
console.log(Object.keys(producto));

console.log(Object.values(producto));

console.log(Object.entries(producto));