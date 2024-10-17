const busqueda = document.querySelector('.busqueda')

// busqueda.addEventListener('keydown', () => {
//     console.log('Presionaste una tecla');
// })

// busqueda.addEventListener('keyup', () => {
//     console.log('Soltaste una tecla');
// })

// busqueda.addEventListener('blur', () => {
//     console.log('Saliste del elemento');
// })

// busqueda.addEventListener('copy', () => {
//     console.log('Copiaste algo');
// })

// busqueda.addEventListener('paste', () => {
//     console.log('Pegaste algo');
// })

// busqueda.addEventListener('cut', () => {
//     console.log('Cortaste algo');
// })


// input hace todo lo de abajo MENOS blur
busqueda.addEventListener('input', (e) => {
    // console.log('Soy Dios!!');
    if (e.target.value === '') {
        console.log('Falló la validación...');
    } else {
        console.log(e.target.value);
    }
})