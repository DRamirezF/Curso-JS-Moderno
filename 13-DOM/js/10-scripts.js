const enlace = document.createElement('A')

// Agregando texto
enlace.textContent = 'Nuevo Enlace'

// Añadiendo href
enlace.href = '/nuevo-enlace'

// console.log(enlace);

enlace.target = '_blank'
enlace.setAttribute('data-enlace', 'nuevo-enlace')
enlace.classList.add('alguna-clase')

enlace.onclick = miFuncion

// console.log(enlace);

// Seleccionar la navegación
const navegación = document.querySelector('.navegacion')

// Para agregarlo al final usas .appenchild
navegación.appendChild(enlace)
// Para agregarlo en un lugar específico usa .insertBefore
// console.log(navegación.children);
navegación.insertBefore(enlace, navegación.children[1])

function miFuncion() {
    alert('Diste click')
}



// Crear un CARD
const parrafo1 = document.createElement('p')
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p')
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p')
parrafo3.textContent = '$800 por persona'
parrafo3.classList.add('precio')

// Crear un DIV con la clase info
const info = document.createElement('div')
info.classList.add('info')
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

// Crear la imagen
const imagen = document.createElement('img')
imagen.src = 'img/hacer2.jpg'
imagen.alt = 'texto-alternativo'

// Crear el card
const card = document.createElement('DIV')
card.classList.add('card')

// Asignar la imagen
card.appendChild(imagen)
// Asignar la info
card.appendChild(info)

// console.log(card);


// Insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards')
// contenedor.appendChild(card)
contenedor.insertBefore(card, contenedor.children[0])