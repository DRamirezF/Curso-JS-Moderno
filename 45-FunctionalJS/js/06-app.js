// Funciones Puras o Pure Functions
// Las Pure Functions retorna la misma cantidad de valores que los parámetros
// Tampoco modifican el valor original
const numero1 = 20
const duplicar = numero => numero * 2


const resultado = duplicar(numero1)

console.log(resultado)
console.log(numero1)