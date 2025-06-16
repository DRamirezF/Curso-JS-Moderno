
const obtenerCliente = () => {
    const nombre = "Daniel"

    function muestraNombre() {
        console.log(nombre)
    }

    return muestraNombre
}

const cliente = obtenerCliente()

cliente()

// Si quieres usar la función sin pasarlo por una variable
obtenerCliente()()  