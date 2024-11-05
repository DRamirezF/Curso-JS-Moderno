(function() {
    let DB;
    // Leer todos los inputs
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB()

        // Verificar el ID de la URL
        const parametroURL = new URLSearchParams(window.location.search)
        const idCliente = parametroURL.get('id')

        if (idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 100);
        }
    })

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

    function conectarDB() {
        const abrirConexion = window.indexedDB.open('crm', 1)
        
        abrirConexion.onerror = () => console.log('Error al abrir la Base de Datos');
        abrirConexion.onsuccess = function() {
            console.log('Se abrió correctamente la Base de Datos');
            DB = abrirConexion.result;
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