import { nombreCliente, ahorro, mostrarinformacion, tieneSaldo, Cliente } from './cliente.js'

console.log(nombreCliente);
console.log(ahorro);

console.log( mostrarinformacion(nombreCliente, ahorro) );
tieneSaldo(ahorro);

const cliente = new Cliente( nombreCliente, ahorro )

console.log(cliente);
console.log(cliente.mostrarinformacion());