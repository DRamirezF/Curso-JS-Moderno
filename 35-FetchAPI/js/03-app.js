const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

// document.addEventListener('DOMContentLoaded', obtenerDatos)

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML(resultado) )
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = ''

    empleados.forEach(empleado => {
        const { nombre, id, empresa, trabajo} = empleado;

        html += `
            <p>Empleado: ${nombre}</p>
            <p>ID: ${id}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `

        contenido.innerHTML = html;
    });
}