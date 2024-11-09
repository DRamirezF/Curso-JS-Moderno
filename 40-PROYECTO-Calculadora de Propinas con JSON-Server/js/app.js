let cliente = {
    hora: '',
    hora: '',
    pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');

document.addEventListener('DOMContentLoaded', () => {
    btnGuardarCliente.addEventListener('click', guardarCliente)

})

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value
    const hora = document.querySelector('#hora').value
    
    // Revisar si hay campos vacíos
    const camposVacios = [ mesa, hora ].some( campo => campo === '')

    if (camposVacios) {
        console.log('Existen campos vacíos');
    } else {
        console.log('Todos los campos están llenos');
    }
}