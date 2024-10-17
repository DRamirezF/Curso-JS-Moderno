const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedasSelect = document.querySelector('#monedas');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: '',
}

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => {
    resolve(criptomonedas);
} )

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedasSelect.addEventListener('change', leerValor);
})

async function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    // fetch(url)
    //     .then( respuesta => respuesta.json() )
    //     .then( resultado => obtenerCriptomonedas(resultado.Data) )
    //     .then( criptomonedas => mostrarCriptomonedas(criptomonedas) )

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        mostrarCriptomonedas(criptomonedas)
    } catch (error) {
        console.log(error);
    }
}

function mostrarCriptomonedas(criptomonedas) {
    criptomonedas.forEach(criptomoneda => {
        const { FullName, Name } = criptomoneda.CoinInfo

        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option)
    });
}

function leerValor(e) {
    objBusqueda[e.target.name] = e.target.value
}

function submitFormulario(e) {
    e.preventDefault();

    const { moneda, criptomoneda} = objBusqueda

    if (!moneda || !criptomoneda) {
        mostrarAlerta('Ambos campos son obligatorios');
        return
    }

    // Consultar la API de los resultados
    consultarAPI();
}

function mostrarAlerta(mensaje) {
    const existeError = document.querySelector('.error');

    if (!existeError) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('error');
    
        // mensaje error
        divMensaje.textContent = mensaje;
    
        formulario.appendChild(divMensaje)
    
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI() {
    const { moneda, criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner()

    // fetch(url)
    //     .then( respuesta => respuesta.json() )
    //     .then( cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]))

    try {
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda])
    } catch (error) {
        console.log(error);
    }
}

function mostrarCotizacionHTML(cotizacion) {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;
    
    const precio = document.createElement('P');
    precio.classList.add('precio');
    precio.innerHTML = `El Precio es: <span>${PRICE}</span>`;
    
    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más alto del día es: <span>${HIGHDAY}</span>`;
    
    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más bajo del día es: <span>${LOWDAY}</span>`;
    
    const ultimasHoras = document.createElement('P');
    ultimasHoras.innerHTML = `Variación de las últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;
    
    const ultimasActualizacion = document.createElement('P');
    ultimasActualizacion.innerHTML = `Ultima actualización: <span>${LASTUPDATE}%</span>`;

    limpiarHTML(resultado);

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
}

function limpiarHTML(selector) {
    while (selector.lastChild) {
        selector.removeChild(selector.lastChild);
    }
}

function mostrarSpinner() {
    limpiarHTML(resultado);

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <button class="bounce1"></div>
        <button class="bounce2"></div>
        <button class="bounce3"></div>
    `

    resultado.appendChild(spinner);
}