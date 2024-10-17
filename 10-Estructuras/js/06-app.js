const usuario = true;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Sí lo peudes comprar');
} else if (!usuario && !puedePagar) {
    console.log('No puedes comprar');
} else if (!usuario) {
    console.log('Inicia sesión o crea una cuenta');
} else if (!puedePagar) {
    console.log('Fondo Insuficiente');
}