// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formularioCita = document.querySelector("#formulario-cita");
const contenedorCitas = document.querySelector("#citas");

let editando = false;

// EventListeners
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formularioCita.addEventListener("submit", submitCita);

// Obejto de cita
const citaObj = {
    id: generarId(),
    paciente: "",
    propietario: "",
    email: "",
    fecha: "",
    sintomas: "",
};

class Notificacion {
    constructor({ texto, tipo }) {
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }

    mostrar() {
        // Creamos la alerta
        const alerta = document.createElement("DIV");
        alerta.classList.add(
            "text-center",
            "w-full",
            "p-3",
            "text-white",
            "my-5",
            "alert",
            "uppercase",
            "font-bold",
            "text-sm"
        );

        // Eliminar alerta previa
        const alertaPrevia = document.querySelector(".alert");
        // Encadenamiento opcional "Optional Chaining"
        alertaPrevia?.remove();
        // Forma antigua
        // if (alertaPrevia) {
        //     alertaPrevia.remove()
        // }

        // Comprobamos el tipo de alerta
        switch (this.tipo) {
            case 'error':
                alerta.classList.add("bg-red-500")
                break;
            case 'exito':
                alerta.classList.add("bg-green-500")
                break;
            case 'cambio':
                alerta.classList.add("bg-indigo-600")
                break;

            default:
                console.log('Caso sin mapear');
                break;
        }

        // Insertamos el texto
        alerta.textContent = this.texto;

        // Insertar nuestra alerta
        formularioCita.parentElement.insertBefore(alerta, formularioCita);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas {
    constructor() {
        this.citas = [];
    }

    agregarCitas(cita) {
        this.citas = [...this.citas, cita];
        this.mostrar();
    }

    mostrar() {
        // Limpiar citas
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.lastChild);
        }

        this.citas.forEach((cita) => {
            const divCita = document.createElement("div");
            divCita.classList.add(
                "mx-5",
                "my-10",
                "bg-white",
                "shadow-md",
                "px-5",
                "py-10",
                "rounded-xl",
                "p-3"
            );

            const paciente = document.createElement("p");
            paciente.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.paciente}`;

            const propietario = document.createElement("p");
            propietario.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.propietario}`;

            const email = document.createElement("p");
            email.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.email}`;

            const fecha = document.createElement("p");
            fecha.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;

            const sintomas = document.createElement("p");
            sintomas.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            // Botones de Editar y Eliminar
            const btnEditar = document.createElement("button");
            btnEditar.classList.add(
                "py-2",
                "px-10",
                "bg-indigo-600",
                "hover:bg-indigo-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2"
            );
            btnEditar.innerHTML =
                'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';
            const clone = structuredClone(cita)
            btnEditar.onclick = () => cargarEdicion(clone)

            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add(
                "py-2",
                "px-10",
                "bg-red-600",
                "hover:bg-red-700",
                "text-white",
                "font-bold",
                "uppercase",
                "rounded-lg",
                "flex",
                "items-center",
                "gap-2"
            );
            btnEliminar.innerHTML =
                'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

            const contenedorBotones = document.createElement('DIV')
            contenedorBotones.classList.add('flex', 'justify-between', 'mt-10')

            contenedorBotones.appendChild(btnEditar)
            contenedorBotones.appendChild(btnEliminar)

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            contenedorCitas.appendChild(divCita);
        });
    }
}

const citas = new AdminCitas();

// Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

function submitCita(e) {
    e.preventDefault();

    if (Object.values(citaObj).some((valor) => valor.trim() === "")) {
        new Notificacion({
            texto: "Todos los campos son obligatorios",
            tipo: "error",
        });
        return;
    }

    if (editando) {
        console.log('Editando registro');
        new Notificacion({
            texto: "Registro editado",
            tipo: "cambio",
        });
    } else {
        citas.agregarCitas({ ...citaObj });
        new Notificacion({
            texto: "Paciente Registrado",
            tipo: "exito",
        });
    }
    formularioCita.reset();
    reiniciarObjetoCita();
}

function reiniciarObjetoCita() {
    // Reiniciar Objeto:

    // Forma antigua
    // citaObj.id = generarId()
    // citaObj.paciente = ''
    // citaObj.propietario = ''
    // citaObj.email = ''
    // citaObj.fecha = ''
    // citaObj.sintomas = ''

    // Nueva forma
    Object.assign(citaObj, {
        id: generarId(),
        paciente: "",
        propietario: "",
        email: "",
        fecha: "",
        sintomas: "",
    });
}

function generarId() {
    return Math.random().toString(36).substring(2) + Date.now()
}

function cargarEdicion(cita) {
    Object.assign(citaObj, cita)

    pacienteInput.value = cita.paciente
    propietarioInput.value = cita.propietario
    fechaInput.value = cita.fecha
    emailInput.value = cita.email
    sintomasInput.value = cita.sintomas

    editando = true;
}
