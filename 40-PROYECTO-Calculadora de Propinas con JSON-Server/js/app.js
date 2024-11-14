let cliente = {
    mesa: '',
    hora: '',
    pedidos: [],
};

const categorias = {
    1: 'Comida',
    2: 'Bebida',
    3: 'Postre',
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

    // Asignar datos del formulario al cliente
    cliente = { ...cliente, mesa, hora };

    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();

    // Mostrar las secciones
    mostrarSecciones();

    //  Obtener platillos de la API de json-server
    obtenerPlatillos();
}

function mostrarSecciones() {
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach((seccion) => seccion.classList.remove('d-none'));
}

function obtenerPlatillos() {
    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then((response) => response.json())
        .then((data) => mostrarPlatillos(data))
        .catch((error) => console.log(error));
}

function mostrarPlatillos(platillos) {
    const listaPlatillos = document.querySelector('#platillos .contenido');

    platillos.forEach((platillo) => {
        const { categoria, nombre, id, precio } = platillo;
        const row = document.createElement('DIV');
        row.className = 'row py-3 border-top';

        const nombreElemento = document.createElement('DIV');
        nombreElemento.className = 'col-md-4';
        nombreElemento.textContent = nombre;

        const precioElemento = document.createElement('DIV');
        precioElemento.className = 'col-md-3 fw-bold';
        precioElemento.textContent = '$' + precio;

        const categoriaElemento = document.createElement('DIV');
        categoriaElemento.className = 'col-md-3';
        categoriaElemento.textContent = categorias[categoria];

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = 'producto-' + id;
        inputCantidad.className = 'form-control';

        // Función que detecta la cantidad y el platillo que se está agregando
        inputCantidad.onchange = function() {
            const cantidad = Number(inputCantidad.value)
            agregarPlatillo({...platillo, cantidad})
        }

        const agregarElemento = document.createElement('DIV')
        agregarElemento.className = 'col-md-2';

        agregarElemento.appendChild(inputCantidad)

        row.appendChild(nombreElemento);
        row.appendChild(precioElemento);
        row.appendChild(categoriaElemento);
        row.appendChild(agregarElemento);

        listaPlatillos.appendChild(row);
    });
}

function agregarPlatillo(producto) {
    // Extraer el pedido actual
    let { pedidos } = cliente

    // Revisar que la cantidad sea mayor a 0
    if (producto.cantidad > 0) {
        // Comprueba si el artículo ya existe en el Array
        if( pedidos.some( pedido => pedido.id === producto.id )) {
            // El artículo ya existe, entonces actualizamos la canitdad
            const pedidoActualizado = pedidos.map( pedido => {
                if ( pedido.id === producto.id ) {
                    pedido.cantidad = producto.cantidad
                }
                return pedido
            })

            cliente.pedidos = [...pedidoActualizado]
        } else {
            // El artículo no existe, entonces lo agregamos al array de pedidos
            cliente.pedidos = [...pedidos, producto]
        }
    } else {
        console.log('No es mayor a 0');
    }

    console.log(cliente.pedidos);
}