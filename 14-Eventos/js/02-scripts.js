const nav = document.querySelector('.navegacion')

// Registrar evento
nav.addEventListener('click', () => {
    console.log('Hiciste click en la navegación!!');
})

nav.addEventListener('mouseenter', () => {
    console.log('Entraste en la navegación!!');
})

nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación!!');
})

nav.addEventListener('mousedown', () => {
    console.log('Mantienes el click');
})

nav.addEventListener('mouseup', () => {
    console.log('Soltaste el click');
})

nav.addEventListener('dblclick', () => {
    console.log('Hiciste doble click');
})