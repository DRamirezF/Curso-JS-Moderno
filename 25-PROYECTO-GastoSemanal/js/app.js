// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gatosLista = document.querySelector('#gastos ul');


// Eventos
eventListeners()
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = []
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto]
        this.calcularRestante()
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id !== id )
        this.calcularRestante()
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extraer varibles
        const { presupuesto, restante } = cantidad

        // Agregar HTML
        document.querySelector('#total').textContent = presupuesto
        document.querySelector('#restante').textContent = restante
    }

    imprimiralerta(mensaje, tipo) {
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center', 'alert');

        switch(tipo) {
            case 'error':
                divMensaje.classList.add('alert-danger');
                break
            case 'success':
                divMensaje.classList.add('alert-success');
                break
            default:
                divMensaje.classList.add('alert-warning')
                break;
        }

        // Mensaje error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario)

        setTimeout(() => {
            divMensaje.remove()
        }, 3000);
    }


    mostrarGastos(gastos) {
        this.limpiarHTML(gatosLista)

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            
            const { nombre, cantidad, id } = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('LI')
            nuevoGasto.className = 'list-group-item d-flex - justify-content-between align-items-center'
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('BUTTON')
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto')
            btnBorrar.innerHTML = `Borrar &times`;
            btnBorrar.onclick = () => {
                eliminarGasto(id)
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gatosLista.appendChild(nuevoGasto)
        });
    }

    limpiarHTML(selector) {
        while (selector.lastChild) {
            selector.removeChild(selector.lastChild)
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante
    }

    comprobarPresupuseto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj

        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25%
        if ( (presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning')
            restanteDiv.classList.add('alert-danger')
        } else if ( (presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-danger')
            restanteDiv.classList.add('alert-warning')
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning')
            restanteDiv.classList.add('alert-success')
        }

        // Si el presupeusto es menor a 0
        if (restante <= 0) {
            ui.imprimiralerta('El presupuesto se a agotado', 'error');
            formulario.querySelector('button[type="submit"').disabled = true;
        }
    }
}


// Instanciar
const ui = new UI()
let presupuesto;


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto?');

    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Presupuesto Valido
    presupuesto = new Presupuesto(presupuestoUsuario)

    ui.insertarPresupuesto(presupuesto)
}

function agregarGasto(e) {
    e.preventDefault()

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        ui.imprimiralerta('Ambos campos son obligatorios', 'error');

        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimiralerta('Cantidad no valida', 'error')

        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now()}

    // Añade un nuevo gasto
    presupuesto.nuevoGasto( gasto )

    // Mensaje de todo bien
    ui.imprimiralerta('Gasto agregado correctamente', 'success')

    // Agregar gastos en lista
    const { gastos, restante } = presupuesto
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)

    ui.comprobarPresupuseto(presupuesto)

    // Reinicio de formulario
    formulario.reset()
}

function eliminarGasto(id) {
    // Elimina los gastos del OBJETO
    presupuesto.eliminarGasto(id)

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto
    ui.mostrarGastos(gastos)

    ui.actualizarRestante(restante)
    ui.comprobarPresupuseto(presupuesto)
}