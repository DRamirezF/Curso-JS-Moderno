const numero1 = 20
const numero2 = '40'

// Coerción Implicita
console.log(numero1 + numero2)


// Coerción Explicita
console.log(Number(numero2))
console.log(numero1.toString())

const pedido = [1,2,3,4]
console.log(pedido.toString())
console.log(JSON.stringify(pedido))