import nuevaFuncion, { nombreCliente, ahorro, mostrarinformacion, tieneSaldo, Cliente } from './cliente.js'
import { Empresa } from "./empresa.js";

console.log(nombreCliente);
console.log(ahorro);

console.log( mostrarinformacion(nombreCliente, ahorro) );
tieneSaldo(ahorro);

const cliente = new Cliente( nombreCliente, ahorro )

console.log(cliente);
console.log(cliente.mostrarinformacion());


const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en línea')
console.log(empresa);
console.log(empresa.mostrarinformacion());


nuevaFuncion()