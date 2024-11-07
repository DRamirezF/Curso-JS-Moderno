(function() {
    let DB;
    let idCliente
    // Leer todos los inputs
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB()

        formulario.addEventListener('submit', actualizarCliente)

        // Verificar el ID de la URL
        const parametroURL = new URLSearchParams(window.location.search)
        idCliente = parametroURL.get('id')

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 100);
        }
    })

    function actualizarCliente(e) {
        e.preventDefault()

        if (nombreInput === '' || emailInput === '' || telefonoInput === '' || empresaInput === '') {
            imprimirAlerta('Todos los campos osn obligatorios', 'error')

            return
        }

        // Actualizar cliente
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            empresa: empresaInput.value,
            telefono: telefonoInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        objectStore.put(clienteActualizado)

        transaction.oncomplete = function() {
            imprimirAlerta('Editado correctamente', 'success')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 3000);
        };
        transaction.onerror = () => imprimirAlerta('Error al editar', 'error');
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crm'], 'readwrite')
        const objectStore = transaction.objectStore('crm')

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e) {
            const cursor = e.target.result

            if (cursor) {
                if (cursor.value.id === Number(id)) {
                    llenarFormulario(cursor.value)
                }

                cursor.continue()
            }
        }
    }

    function llenarFormulario(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
    }
})()