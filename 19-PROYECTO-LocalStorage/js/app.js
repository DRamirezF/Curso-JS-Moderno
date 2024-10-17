// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = []


// Event Listeners
eventsListeners();

function eventsListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweets);

    // Cuando el Documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) ?? [];

        console.log(tweets);

        crearHTML()
    })
}



// Funciones
function agregarTweets(e) {
    e.preventDefault();

    // Textarea dodne el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    if (tweet === '') {
        mostrarError('El mensaje no puede ir vacío.')

        return // Evita que se ejecuten más líneas de código
    }

    const tweetObj = {
        id: Date.now(),
        tweet,
        // tweet: tweet, // Esto es lo mismo que lo de arriba
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}


// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


// Muestra un listado de los tweets
function crearHTML() {
    
    limpiarHTML(listaTweets)

    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar botón de Eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X'

            // Añadir la función de Eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.textContent = tweet.tweet;

            // Asignar botón
            li.appendChild(btnEliminar)

            // Insertar en el HTMl
            listaTweets.appendChild(li);
        })

        sincronizarLocalStorage();
    }
}

// Agregar al Local Storage
function sincronizarLocalStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Eliminar un Tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id )
    crearHTML()
}

// Limpiar el HTML
function limpiarHTML(selector) {
    while (selector.lastChild) {
        selector.removeChild(selector.lastChild)
    }
}
