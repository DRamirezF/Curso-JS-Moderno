// Selectores
const pacienteInput = document.querySelector("#paciente");
const propietarioInput = document.querySelector("#propietario");
const emailInput = document.querySelector("#email");
const fechaInput = document.querySelector("#fecha");
const sintomasInput = document.querySelector("#sintomas");

const formularioCita = document.querySelector("#formulario-cita");

const contenedorCitas = document.querySelector("#citas");

// EventListeners
pacienteInput.addEventListener("change", datosCita);
propietarioInput.addEventListener("change", datosCita);
fechaInput.addEventListener("change", datosCita);
emailInput.addEventListener("change", datosCita);
sintomasInput.addEventListener("change", datosCita);

formularioCita.addEventListener("submit", submitCita);

// Obejto de cita
const citaObj = {
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
        this.tipo === "error"
            ? alerta.classList.add("bg-red-500")
            : alerta.classList.add("bg-green-500");

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
        this.mostrar()
    }

    mostrar() {
        // Limpiar citas
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.lastChild);
        }

        this.citas.forEach((cita) => {
            const { pacienteCita, propietarioCita, emailCita, fechaCita, sintomasCita } = cita

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
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${pacienteCita}`;

            const propietario = document.createElement("p");
            propietario.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${propietarioCita}`;

            const email = document.createElement("p");
            email.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${emailCita}`;

            const fecha = document.createElement("p");
            fecha.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${fechaCita}`;

            const sintomas = document.createElement("p");
            sintomas.classList.add(
                "font-normal",
                "mb-3",
                "text-gray-700",
                "normal-case"
            );
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${sintomasCita}`;

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
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

    citas.agregarCitas({...citaObj});
    formularioCita.reset();
    reiniciarObjetoCita()
    new Notificacion({
        texto: "Paciente Registrado",
        tipo: "exito",
    });
}

function reiniciarObjetoCita() {
    // Reiniciar Objeto:

    // Forma antigua
    // citaObj.paciente = ''
    // citaObj.propietario = ''
    // citaObj.email = ''
    // citaObj.fecha = ''
    // citaObj.sintomas = ''

    // Nueva forma
    Object.assign(citaObj, {
        paciente: "",
        propietario: "",
        email: "",
        fecha: "",
        sintomas: "",
    })
}