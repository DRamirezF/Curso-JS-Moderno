
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
    crm.onupgradeneeded = () => console.log('Este método solo se ejecuta una vez!');
}