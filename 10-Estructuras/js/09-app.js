const autenticado = true;
const puedePagar = true;

console.log( autenticado ? 'Sí está autenticado' : 'No está autenticado' );
console.log( puedePagar ? 'Sí puede pagar' : 'No puede pagar' );
console.log( autenticado && puedePagar ? 'Sí está autenticado y puede pagar' : 'No está autenticado y no puede pagar' );
console.log( autenticado ? puedePagar ? 'Sí está autenticado y puede pagar' : 'Sí está autenticado, pero no puede pagar' : 'No está autenticado y no puede pagar' );