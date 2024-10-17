const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        // peso: '1kg',
        // medida: '1m'
        medidas: {
            peso: "1kg",
            medida: "1m",
        },
        fabricacion: { 
            pais: "China" 
        },
    },
};

console.log(producto);
console.log(producto.informacion);
// console.log(producto.informacion.peso);
// console.log(producto.informacion.medida);

// Se debe agregar un punto por cada capa interna
console.log(producto.informacion.fabricacion.pais);