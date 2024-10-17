// Event Bubbling

const cardDiv = document.querySelector('.card')
const infoDiv = document.querySelector('.info')
const tituloDiv = document.querySelector('.titulo')

cardDiv.addEventListener('click', e => {
    // Sin esta línea el evento se propagaría y se activaría en momentos que no debe
    e.stopPropagation();
    console.log('Click en card');
})

infoDiv.addEventListener('click', e => {
    // Sin esta línea el evento se propagaría y se activaría en momentos que no debe
    // Ej: Como info está dentro de card, al activarse este evento de activaría el de card también
    e.stopPropagation();
    console.log('Click en card');
})

tituloDiv.addEventListener('click', e => {
    // Sin esta línea el evento se propagaría y se activaría en momentos que no debe
    e.stopPropagation();
    console.log('Click en card');
})