const autenticado = true;

// No es necesario colocar la comparación ya que la variable única funciona
// if(autenticado === true)
if(autenticado) {
    console.log('El usuario está autenticado');
}


const puntaje = 500;

// Si no te gusta hacer muchos else if puedes hacerlo así:
function revisarPuntaje(puntaje) {
    if (puntaje > 400) {
        console.log('Excelente!!');
        return
    }

    if (puntaje > 300) {
        console.log('Buen puntaje, felicidades');
        return
    }
}

revisarPuntaje()

