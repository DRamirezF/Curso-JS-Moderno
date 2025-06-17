// Hoisting
// Funciona sin importar donde declares o llames la función
obtenerCliente('Daniel-1')
function obtenerCliente(nombre) {
    console.log(`El nombre del cliente es: ${nombre}`)
}
obtenerCliente('Daniel-2')


// Solo funciona si declaras primero la función y después la llamas
// obtenerCliente2('Avelino-1')     // ---> No funciona
const obtenerCliente2 = function(nombre) {
    console.log(`El nombre del cliente es: ${nombre}`)
}
obtenerCliente2('Avelino-2')        // ---> Funciona

/* 
    En el segundo modo lo que el navegador hace es:
    1. Crea la variable: const obtenerCliente2
    2. Luego llama a la función: function() {console.log()}
    y como no a sido declarada sale error.

*/