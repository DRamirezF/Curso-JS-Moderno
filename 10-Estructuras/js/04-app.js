
const dinero = 500;
const totalPagar = 300;
const tarjeta = true;
const cheque = true;

// El condicional evalua hasta que encuentra una condición verdadera y ya
// Si existe una segunda condición verdadera después no la tomará
if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if(cheque) {
    console.log('Sí tengo cheque');
} else if(tarjeta) {
    console.log('Sí puedo pagar porque tengo tarjeta');
}
else {
    console.log('Fondo Insuficiente');
}