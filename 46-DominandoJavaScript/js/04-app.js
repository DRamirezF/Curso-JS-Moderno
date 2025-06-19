// Implicit Binding

const usuario = {
    nombre: 'Daniel',
    edad: 20,
    informacion() {
        console.log(`Mi nombre es ${this.nombre}, y mi edad es ${this.edad}`)
    },
    mascota: {
        nombre: 'Niko',
        edad: 12,
        informacion() {
            console.log(`Mi nombre es ${this.nombre}, y mi edad es ${this.edad}`)
        }
    }
}

usuario.informacion()
usuario.mascota.informacion()