// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`)
}

const informacion = {
    nombre: 'Daniel'
}

const musicaFavorita = ['Heavy Metal', 'Jazz', 'Rock']

// Call: Debes pasar cada elemento del arreglo individualmente
persona.call(informacion, musicaFavorita[0], musicaFavorita[1])
// Aply: Puedes pasar el arreglo completo sin problemas
persona.apply(informacion, musicaFavorita)
// Bind: Genera una nueva función y los datos de los arreglos se pasan individualmente
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1])
nuevaFn()