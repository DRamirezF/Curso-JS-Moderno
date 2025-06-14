const suma = (a, b) => a + b
const multiplicar = (a, b) => a * b

const sumarOMultiplicar = fn => fn(10, 20)

console.log ( "suma:", sumarOMultiplicar( suma ) )
console.log ( "multiplicar:", sumarOMultiplicar( multiplicar ) )