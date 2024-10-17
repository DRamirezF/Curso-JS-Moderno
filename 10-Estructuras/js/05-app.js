// Switch Case

const metodoPago = 'efectivo'

switch (metodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case '':
        console.log('No haz seleccionado un método de pago');
        break;

    default:
        console.log('Método de pago no soportado');
        break;
}