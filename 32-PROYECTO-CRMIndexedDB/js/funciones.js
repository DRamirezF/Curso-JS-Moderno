function conectarDB() {
    const abrirConexion = window.indexedDB.open('crm', 1);

    abrirConexion.onerror = () => console.log('Error al crear la base de Datos desde nuevoCliente');
    abrirConexion.onsuccess = function (e) {
        console.log('Se conectó con la Base de Datos');
        DB = abrirConexion.result;
    };
}

function imprimirAlerta(mensaje, tipo) {
    const alerta = document.querySelector('.alerta');

    if (!alerta) {
        // Crear mensaje
        const divMensaje = document.createElement('DIV');
        divMensaje.className =
            'px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center border alerta';

        switch (tipo) {
            case 'success':
                divMensaje.classList.add(
                    'bg-green-100',
                    'border-green-400',
                    'text-green-700'
                );
                console.log('Cliente Registrado!!');
                break;
            case 'error':
                divMensaje.classList.add(
                    'bg-red-100',
                    'border-red-400',
                    'text-red-700'
                );
                break;

            default:
                console.log('¡Ups! Algo salió mal');
                break;
        }

        divMensaje.textContent = mensaje;

        // formulario.insertBefore(divMensaje, formulario)
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}