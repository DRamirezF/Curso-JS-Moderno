document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: '',
    }
    
    // Seleccionar los elementos de la interfaz
    const inputCC = document.querySelector('#cc');
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner');

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    inputCC.addEventListener('blur', validar);

    formulario.addEventListener('submit', enviarEmail)

    btnReset.addEventListener('click', resetFormulario)

    function enviarEmail(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario(e);

            // Crea una alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviando correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);
        }, 3000)
    }

    function validar(e) {
        // Revisamos que no esté vacío y eliminamos los espacios en blanco de antes y después
        if (e.target.value.trim() === '' && e.target.id !== 'cc') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'cc' && e.target.value !== '' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es valido', e.target.parentElement)
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement)

        if (e.target.id === 'cc' && e.target.value === '') {
            delete email[e.target.name]
        } else {
            // Asignar valores
            email[e.target.name] = e.target.value.trim().toLowerCase();
        }

        // Comprobar el objeto de email
        comprobarEmail()
    }

    function mostrarAlerta(mensaje, referencia) {
        const alerta = referencia.querySelector('.bg-red-600');

        // Comprueba si ya existe una alerta
        if (!alerta) {
            // Generar alerta en HTML
            const error = document.createElement('P');
            error.textContent= mensaje;
            error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

            // Inyectar el error al formulario
            referencia.appendChild(error)
        }
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        }
        else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

    function resetFormulario(e) {
        e.preventDefault();

        // Reiniciar formulario
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }
})