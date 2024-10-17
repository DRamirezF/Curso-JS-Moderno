// Objetc Literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const Producto2 = new Producto('Monitor 24 Pulgadas', 500)
console.log(Producto2);

const Producto3 = new Producto('Televisor', 100)
console.log(Producto3);