const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    siExiste: ''
}

// const nomber = producto.nombre;
// console.log(nombre);

// Destructuring Objetc
const { nombre, precio, disponible, siExiste, noExiste } = producto
console.log(nombre);
console.log(precio);
console.log(disponible);
// Prueba para saber si podía replicar el undefined, pero el sistema no permite generar propiedades vacías
console.log(siExiste);
// Si la propiedad no existe el valor es "undefined"
console.log(noExiste);