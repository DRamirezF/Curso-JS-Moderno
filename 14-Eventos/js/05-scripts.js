window.addEventListener('scroll', () => {
    // const scrollPX = window.screenY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium')
    const ubicacion = premium.getBoundingClientRect()

    // console.log(ubicacion); // Esto srive para debugear y poner el condicional mejor

    if (ubicacion < 784) {
        console.log('El elemento ya está visible');
    } else {
        console.log('Aún no, da más scroll');
    }
})