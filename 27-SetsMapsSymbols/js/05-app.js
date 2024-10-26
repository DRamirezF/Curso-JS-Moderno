// No hay 2  Symbols iguales
const sym = Symbol()
const sym2 = Symbol()

if (sym === sym2) {
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

console.log( Symbol() === Symbol());
console.log( Symbol() == Symbol());     // Incluso así son diferentes



const nombre = Symbol()
const apellido = Symbol()

const persona = {}

// Agregar nombre y apellido como llaves en el objeto
persona[nombre] = 'Juan'
persona[apellido] = 'De la torre'
persona.tipo = 'Premium'
persona.saldo = 500

console.log(persona);
console.log(persona[nombre]);


// Los Symbols no son iterables
for (const i in persona) {
    console.log(i);
}



// Definir una descripción del Symbol
const nombreCliente = Symbol('Nombre del Cliente')
const cliente = {}


cliente[nombreCliente] = 'Pedro'

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);