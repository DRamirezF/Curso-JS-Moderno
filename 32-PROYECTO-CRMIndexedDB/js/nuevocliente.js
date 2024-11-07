

(function () {
    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarInformacion);
    });

    function validarInformacion(e) {
        e.preventDefault();

        // Leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if (
            nombre === '' ||
            email === '' ||
            telefono === '' ||
            empresa === ''
        ) {
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        // Crear un objeto  con la información
        const cliente = {
            nombre,
            email,
            telefono,
            empresa,
            id: Date.now()
        }

        agregarNuevoCliente(cliente)
    }

    function agregarNuevoCliente(cliente) {
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente)
        
        transaction.onerror = () => imprimirAlerta('Ya existe un cliente con ese correo', 'error');
        transaction.oncomplete = () => {
            console.log('Cliente agregado')
            imprimirAlerta('Cliente agregado correctamente', 'success')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        }
    }
})();
