(function() {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {
        crearDB()
    })

    // Crea la Base de Datos de IndexDB
    function crearDB() {
        const crearDB = window.indexedDB.open('crm', 1)

        // No se crea la Base de Datos
        crearDB.onerror = function() {
            console.log('Error al crear la Base de Datos');
        }

        // Se crea la Base de Datos
        crearDB.onsuccess = function() {
            DB = crearDB.result

            console.log('Base de Datos creada!!');
        }

        // Definir estructura de la Base de Datos
        crearDB.onupgradeneeded = function(e) {
            const db = e.target.result

            const objectStore = db.createObjectStore('crm', { keyPath: 'id', autoIncrement: true })

            objectStore.createIndex('nombre', 'nombre', { unique: false })
            objectStore.createIndex('correo', 'correo', { unique: true })
            objectStore.createIndex('telefono', 'telefono', { unique: false })
            objectStore.createIndex('emrpesa', 'emrpesa', { unique: false })
            objectStore.createIndex('id', 'id', { unique: true })

            console.log('DB lista y creada');
        }
    }
})()