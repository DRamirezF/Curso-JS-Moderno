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
        // Eliminar los elementos cuando la cantidad sea 0
        const resultado = pedidos.filter( pedido => pedido.id !== producto.id )
        cliente.pedidos = [...resultado];
    }
    // Limpiar el código HTML Previo
    limpiarHTML()

    if ( cliente.pedidos.length ) {
        // Mostrar el resumen
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }
}

function actualizarResumen() {
    const contenido = document.querySelector('#resumen .contenido')

    const resumen = document.createElement('DIV')
    resumen.className = 'col-md-6 card py-2 px-3 shadow'

    // Información de la mesa
    const mesa = document.createElement('P')
    mesa.textContent = 'Mesa: '
    mesa.classList.add('fw-bold')

    const mesaSpan = document.createElement('SPAN')
    mesaSpan.textContent = cliente.mesa
    mesaSpan.classList.add('fw-normal')

    // Información de la hora
    const hora = document.createElement('P')
    hora.textContent = 'Hora: '
    hora.classList.add('fw-bold')

    const horaSpan = document.createElement('SPAN')
    horaSpan.textContent = cliente.hora
    horaSpan.classList.add('fw-normal')

    // Agregar a los elementos padres
    mesa.appendChild(mesaSpan)
    hora.appendChild(horaSpan)

    // Titulo de la sección
    const heading = document.createElement('H3')
    heading.textContent = 'Platillos Consumidos'
    heading.classList.add('my-4', 'text-center')

    // Iterar sobre el array de pedidos
    const grupo = document.createElement('UL')
    grupo.classList.add('list-group')

    const { pedidos } = cliente
    pedidos.forEach( articulo => {
        const { nombre, cantidad, precio, id } = articulo

        const lista = document.createElement('UL')
        lista.classList.add('list-group-item')

        // Nombre del artículo
        const nombreEl = document.createElement('H4');
        nombreEl.className = 'my-4'
        nombreEl.textContent = nombre

        // Cantidad del artículo
        const cantidadEl = document.createElement('P');
        cantidadEl.className = 'fw-bold'
        cantidadEl.textContent = 'Cantidad: '

        const cantidadValor = document.createElement('SPAN');
        cantidadValor.className = 'fw-normal'
        cantidadValor.textContent = cantidad

        // Precio del artículo
        const precioEl = document.createElement('P');
        precioEl.className = 'fw-bold'
        precioEl.textContent = 'Precio: '

        const precioValor = document.createElement('SPAN');
        precioValor.className = 'fw-normal'
        precioValor.textContent = `$${precio}`

        // Subtotal del artículo
        const subtotalEl = document.createElement('P');
        subtotalEl.className = 'fw-bold'
        subtotalEl.textContent = 'Subtotal: '

        const subtotalValor = document.createElement('SPAN');
        subtotalValor.className = 'fw-normal'
        subtotalValor.textContent = calcularSubtotal( precio, cantidad )

        // Botón Eliminar
        const btnEliminar  = document.createElement('BUTTON')
        btnEliminar.className = 'btn btn-danger'
        btnEliminar.textContent = 'Eliminar del pedido'

        // Función para eliminar del pedido
        btnEliminar.onclick = function() {
            eliminarProducto(id)
        }

        // Agregar valores a sus contenedores
        cantidadEl.appendChild(cantidadValor)
        precioEl.appendChild(precioValor)
        subtotalEl.appendChild(subtotalValor)

        // Agregar elementos al LI
        lista.appendChild(nombreEl)
        lista.appendChild(cantidadEl)
        lista.appendChild(precioEl)
        lista.appendChild(subtotalEl)
        lista.appendChild(btnEliminar)


        // Agregar lista al grupo principal
        grupo.appendChild(lista)
    });


    resumen.appendChild(heading)
    resumen.appendChild(mesa)
    resumen.appendChild(hora)
    resumen.appendChild(grupo)

    contenido.appendChild(resumen)

    // Mostrar formulario de propinas
    formularioPropinas()
}

function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido')

    while (contenido.lastChild) {
        contenido.removeChild(contenido.lastChild)
    }
}

function calcularSubtotal(precio, cantidad) {
    return `$ ${precio * cantidad}`
}

function eliminarProducto(id) {
    const { pedidos } = cliente;

    const resultado = pedidos.filter( pedido => pedido.id !== id )
    cliente.pedidos = [...resultado];

    // Limpiar el código HTML Previo
    limpiarHTML()

    if ( cliente.pedidos.length ) {
        // Mostrar el resumen
        actualizarResumen()
    } else {
        mensajePedidoVacio()
    }

    // El producto se eliminó por la tanto regresamos la cantidad a 0 en el formulario
    const productoEliminado = `#producto-${id}`
    const inputELiminado = document.querySelector(productoEliminado)
    inputELiminado.value = 0
}

function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido')

    const texto = document.createElement('P')
    texto.className = 'text-center'
    texto.textContent = 'Añade los elementos del pedido'

    contenido.appendChild(texto)
}

function formularioPropinas() {
    const contenido = document.querySelector('#resumen .contenido')

    const formulario = document.createElement('DIV')
    formulario.className = 'col-md-6 formulario'

    const divFormulario = document.createElement('DIV')
    divFormulario.className = 'card py-2 px-3 shadow'

    const heading = document.createElement('H3')
    heading.className = 'my-4 text-center'
    heading.textContent = 'Propina'


    // Radio Button 10%
    const radio10 = document.createElement('INPUT')
    radio10.type = 'radio'
    radio10.name = 'propina'
    radio10.value = 10
    radio10.className = 'form-check-input'
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL')
    radio10Label.textContent = '10%'
    radio10Label.className = 'form-check-label'

    const radio10Div = document.createElement('DIV')
    radio10Div.className = 'form-check'

    radio10Label.appendChild(radio10)
    radio10Div.appendChild(radio10Label)


    // Radio Button 25%
    const radio25 = document.createElement('INPUT')
    radio25.type = 'radio'
    radio25.name = 'propina'
    radio25.value = 25
    radio25.className = 'form-check-input'
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL')
    radio25Label.textContent = '25%'
    radio25Label.className = 'form-check-label'

    const radio25Div = document.createElement('DIV')
    radio25Div.className = 'form-check'

    radio25Label.appendChild(radio25)
    radio25Div.appendChild(radio25Label)


    // Radio Button 25%
    const radio50 = document.createElement('INPUT')
    radio50.type = 'radio'
    radio50.name = 'propina'
    radio50.value = 50
    radio50.className = 'form-check-input'
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL')
    radio50Label.textContent = '50%'
    radio50Label.className = 'form-check-label'

    const radio50Div = document.createElement('DIV')
    radio50Div.className = 'form-check'

    radio50Label.appendChild(radio50)
    radio50Div.appendChild(radio50Label)


    divFormulario.appendChild(heading)
    divFormulario.appendChild(radio10Div)
    divFormulario.appendChild(radio25Div)
    divFormulario.appendChild(radio50Div)

    formulario.appendChild(divFormulario)

    contenido.appendChild(formulario)
}

function calcularPropina() {
    const { pedidos } = cliente
    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedidos.forEach( pedido => {
        subtotal += pedido.cantidad * pedido.precio
    })

    // Seleccionar el radio button con la propina del cliente
    const propinaSeleccionada = Number(document.querySelector('[name="propina"]:checked').value)

    // Calcular Propina
    const propina = ((subtotal * propinaSeleccionada) / 100 )

    // Calcular total a pagar
    const total = subtotal + propina

    mostrarTotalHTML(subtotal, total, propina)
}

function mostrarTotalHTML(subtotal, total, propina) {
    const divTotales = document.createElement('DIV')
    divTotales.className = 'total-pagar mt-5'

    // Subtotal
    const subtotalParrafo = document.createElement('P')
    subtotalParrafo.className = 'fs-3 fw-bold mt-2'
    subtotalParrafo.textContent = 'Subtotal Consumo:'

    const subtotalSpan = document.createElement('SPAN')
    subtotalSpan.className = 'fw-normal'
    subtotalSpan.textContent = `$${subtotal}`

    subtotalParrafo.appendChild(subtotalSpan)


    // Propina
    const propinaParrafo = document.createElement('P')
    propinaParrafo.className = 'fs-3 fw-bold mt-2'
    propinaParrafo.textContent = 'Propina:'

    const propinaSpan = document.createElement('SPAN')
    propinaSpan.className = 'fw-normal'
    propinaSpan.textContent = `$${propina}`

    propinaParrafo.appendChild(propinaSpan)


    // Total
    const totalParrafo = document.createElement('P')
    totalParrafo.className = 'fs-3 fw-bold mt-2'
    totalParrafo.textContent = 'Total Consumo:'

    const totalSpan = document.createElement('SPAN')
    totalSpan.className = 'fw-normal'
    totalSpan.textContent = `$${total}`

    totalParrafo.appendChild(totalSpan)

    // Eliminar el último resultado
    const totalPagar = document.querySelector('.total-pagar')
    if (totalPagar) {
        totalPagar.remove()
    }


    divTotales.appendChild(subtotalParrafo)
    divTotales.appendChild(propinaParrafo)
    divTotales.appendChild(totalParrafo)


    const formulario = document.querySelector('.formulario > div')
    formulario.appendChild(divTotales)
}