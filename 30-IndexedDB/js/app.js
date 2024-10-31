
document.addEventListener('DOMContentLoaded', () => {
    crmDB()
})


function crmDB() {
    // Crear Bade de Datos versión 1.0
    let crm = window.indexedDB.open('crm', 1)

    // Si hay un error
    crm.onerror = function() {
        console.log('Hubo un error al crear la Base de Datos');
    }

    // Si se creó
    crm.onsuccess = () => {
        console.log('Base de Datos creada!!');
    }

    // Configuración de la Base de Datos
    crm.onupgradeneeded = function(e) {
        const db = e.target.result

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        })

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: true });

        console.log('Columnas creadas');
    }
}