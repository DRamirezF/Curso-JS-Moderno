const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m",
        },
        fabricacion: { 
            pais: "China" 
        },
    },
};

// Esta sintaxis no funciona
// const { nombre, producto.informacion } = producto

// Para bajar un nivel de profundidad debes agregar los dis puntos a la propiedad objeto
// Y encerrar en llaves la propiedad que te interesa
// Repetir el proceso anterior por cada capa que quieras bajar
const {nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto
console.log(nombre);
console.log(fabricacion);
console.log(pais);
// El Destructuring en objetos anidados solo genera la variable para final, no genera ninguna intermedia
// Así que si necesitas usar la propeidad Informacion debes generarla aparte
console.log(informacion);