// Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear() - 4; // El curso es del 2020 y el sño es importante para el contenido
const min = max - 10;

// Craer un objeto on la búsqueda
const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}


// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los automóviles al cargar
    mostrarAutos(autos)

    // Llena las opciones de años
    llenarSelect()
})

// Event Listener para los select de búsqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos()
})
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos()
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos()
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos()
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos()
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos()
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos()
})
// Intento de no repetir tanto código
// marca.addEventListener('change', asignarValor)
// year.addEventListener('change', asignarValor)
// minimo.addEventListener('change', asignarValor)
// maximo.addEventListener('change', asignarValor)
// puertas.addEventListener('change', asignarValor)
// transmision.addEventListener('change', asignarValor)
// color.addEventListener('change', asignarValor)


// Funciones
function mostrarAutos(autos) {
    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('P')

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}
        `
        // Inserte en el HTML
        resultado.appendChild(autoHTML);
    });
}

// Limpiar el HTML
function limpiarHTML() {
    while(resultado.lastChild) {
        resultado.removeChild(resultado.lastChild)
    }
}


// Genera los años del Select
function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);   // Agregamos las opciones de año al Select
    }
}

// Intento de no repetir tanto código
// function asignarValor(e) {
//     datosBusqueda[e.target.id] = e.target.value;
//     filtrarAutos(e)
// }

// Función que filtra en base a la busqueda
function filtrarAutos() {
    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo).filter( filtrarMaximo).filter( filtrarPuertas ).filter( filtrarColor ).filter( filtrarTransmision );

    mostrarAutos(resultado)

    if ( resultado.length ) {
    }
    else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No Hay Resultados, Intenta otros términos de búsqueda.';
    resultado.appendChild(noResultado)
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if ( year ) {
        return auto.year === year;
    }

    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if ( minimo ) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if ( maximo ) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }

    return auto;
}