//  Object Literal
const cliente = {
    nombre: 'Juan',
    saldo: 500,
}

console.log(cliente);


// Object Constructor
function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

const juan = new Cliente('Juan', 500)

console.log(juan);