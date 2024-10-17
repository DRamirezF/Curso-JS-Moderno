const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve("Descuento aplicado.");
    } else {
        reject("No se aplicó el descuento.");
    }
});

aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error))

// Hay 3 valores posibles:
// fulfilled - El Promise se cumplió.
// rejected - El Promise no se cumplió.
// pending - El Promise no se ha cumplido ni tampoco rechazado.

function descuento(mensaje) {
    console.log(mensaje);
}