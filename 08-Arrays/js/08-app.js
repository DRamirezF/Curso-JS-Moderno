const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    siExiste: "",
};

// const nomber = producto.nombre;
// console.log(nombre);

// Destructuring Objetc
const { nombre } = producto;

console.log(nombre);

// Destructuring en Arreglos
const numeros = [10,20,30,40,50]

// Cada variable tomará el valro de su respectiva posición
const [ primero, segundo, tercero ] = numeros
// La coma vacía significa que no se crean las variables anteriores
const [ , , tercero2 ] = numeros
// Con el Spread Operator generamos un arreglo con todas las demás variables
const [ primero3, segundo3, ...tercero3 ] = numeros