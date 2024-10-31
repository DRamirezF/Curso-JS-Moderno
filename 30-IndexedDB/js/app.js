let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    // Crear Bade de Datos versión 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = function () {
        console.log('Hubo un error al crear la Base de Datos');
    };

    // Si se creó
    crmDB.onsuccess = () => {
        console.log('Base de Datos creada!!');

        DB = crmDB.result;
    };

    // Configuración de la Base de Datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        // Definir las columnas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('Columnas creadas');
    };
}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite'); // Existe readonly

    transaction.oncomplete = function() {
        console.log('Trasacción Exitosa!!');
    };

    transaction.onerror = function () {
        console.log('Hubo un error en la Transacción');
    };

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telelefono: 6464646546,
        nombre: 'Daniel',
        email: 'correo@correo.com',
    };

    // .put para actualizar
    // .delete para eliminar
    const peticion = objectStore.add(nuevoCliente);

    console.log(peticion);
}
