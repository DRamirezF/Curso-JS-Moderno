const numeros = [10, 20, 30, 40, 50, [1,2,3]]

console.log(numeros);
console.table(numeros);

// Acceder a una posición específica
console.log(numeros[2]);
console.log(numeros[0]);
// Si no existe es undefined
console.log(numeros[20]);
// Así se accede a un sub indice
console.log(numeros[5][1]);