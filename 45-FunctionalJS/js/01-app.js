const suma = function(a, b) {
    return a + b
}

// First-Class Function: Poder usar una función como un dato que se puede asignar a una variable
const resultado = suma;

console.log(resultado(10,20))