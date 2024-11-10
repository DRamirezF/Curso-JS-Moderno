let cliente = {
    hora: '',
    hora: '',
    pedido: [],
};

const btnGuardarCliente = document.querySelector('#guardar-cliente');

document.addEventListener('DOMContentLoaded', () => {
    btnGuardarCliente.addEventListener('click', guardarCliente);
});

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacíos
    const camposVacios = [mesa, hora].some((campo) => campo === '');

    if (camposVacios) {
        const existeAlerta = document.querySelector('.invalid-feedback');
        if (!existeAlerta) {
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'Todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }

        return;
    }
    
    console.log('Todos los campos están llenos');
}
