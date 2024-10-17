const btnFlotante = document.querySelector('.btn-flotante')
const footer = document.querySelector('#footer')

btnFlotante.addEventListener('Click', mostrarOcultarFooter)

function mostrarOcultarFooter() {
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        // btnFlotante.classList.remove('activo');
        // btnFlotante.textContent = 'Idioma y Moneda';
        /* this hace referencia a aquello que mandó a llamar a la función  */
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        // btnFlotante.classList.add('activo');
        // btnFlotante.textContent = 'X Cerrar'
        /* this hace referencia a aquello que mandó a llamar a la función  */
        this.classList.add('activo');
        this.textContent = 'X Cerrar'
    }
}