// Selectores
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


// Obejto de cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}


// EventListeners
mascotaInput.addEventListener('change', datosCita)
propietarioInput.addEventListener('change', datosCita)
telefonoInput.addEventListener('change', datosCita)
fechaInput.addEventListener('change', datosCita)
horaInput.addEventListener('change', datosCita)
sintomasInput.addEventListener('change', datosCita)


// Funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
    console.log(citaObj);
}
