// Partials y Currying
const suma = (a, b, c) => a + b + c
console.log(suma(1,2,3))

// Partial #1
const parcial = (a) => (b, c) => suma(a,b,c)
const primerNumero = parcial(5)
const resultado = primerNumero(4, 3)
console.log(resultado)


// Parcial #2
// Modo A
const otroParcial = a => b => c => suma(a,b,c)
const otroPrimerNumero = otroParcial(10)
const otroSegundoNumero = otroPrimerNumero(9)
const otroResultado = otroSegundoNumero(8)
console.log(otroResultado)

// Modo B
const resultadoParcial = otroParcial(1)(2)(3)
console.log(resultadoParcial)