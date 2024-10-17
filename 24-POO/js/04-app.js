// Class Declaration
class Cliente {
    
    #nombre

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}

const daniel = new Cliente()
daniel.setNombre('Daniel')
console.log(daniel.getNombre());

// Esto no funciona porque la variable Nombre es privada
// Y solo se puede accder desde la propia clase
// console.log(daniel.nombre);