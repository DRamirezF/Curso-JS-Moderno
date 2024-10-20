// Selectores
const pacienteInput = document.querySelector('#paciente');
const propietarioInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const fechaInput = document.querySelector('#fecha');
const sintomasInput = document.querySelector('#sintomas');

const formularioCita = document.querySelector('#formulario-cita');


// EventListeners
pacienteInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
emailInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)

formularioCita.addEventListener('submit', submitCita)

// Obejto de cita
const citaObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: '',
}


class Notificacion {
    constructor ({texto, tipo}) {
        this.texto = texto
        this.tipo = tipo

        this.mostrar()
    }

    mostrar() {
        // Creamos la alerta
        const alerta = document.createElement('DIV');
        alerta.classList.add('text-center', 'w-full', 'p-3', 'text-white', 'my-5', 'alert', 'uppercase', 'font-bold', 'text-sm')

        // Eliminar alerta previa
        const alertaPrevia = document.querySelector('.alert')
        // Encadenamiento opcional "Optional Chaining"
        alertaPrevia?.remove()
        // Forma antigua
        // if (alertaPrevia) {
        //     alertaPrevia.remove()
        // }

        // Comprobamos el tipo de alerta
        this.tipo === 'error' ? 
        alerta.classList.add('bg-red-500') :
        alerta.classList.add('bg-green-500')

        // Insertamos el texto
        alerta.textContent = this.texto;

        // Insertar nuestra alerta
        formularioCita.parentElement.insertBefore(alerta, formularioCita)

        setTimeout(() => {
            alerta.remove()
        }, 3000);
    }
}

class AdminCitas {
    constructor() {
        this.citas = []
    }

    agregarCitas(cita) {
        this.citas = [...this.citas, cita]

        console.log(this.citas);
    }
}


const citas = new AdminCitas

// Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
    e.preventDefault()

    if ( Object.values(citaObj).some( valor => valor.trim() === '')) {
        new Notificacion({
            texto: 'Todos los campos son obligatorios',
            tipo: 'error'
        })
        return
    }

    citas.agregarCitas(citaObj)

    formularioCita.reset()
}
