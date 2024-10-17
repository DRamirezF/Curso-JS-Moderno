// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // Métodos
    mostratInformacion() {
        return `Cliente: ${this.nombre}, tu salso es ${this.saldo}`
    }

    // Métodos estáticos
    static bienvenida() {
        return "Bienvenido al cajero"
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super( nombre, saldo )
        this.telefono = telefono
        this.categoria = categoria
    }

    // Reescribir un método
    static bienvenida() {
        return "Bienvenido al cajero de la empresa"
    }
}

const daniel = new Cliente('Daniel', 400)
const empresa = new Empresa('Empresa de Daniel', 4000, 84684, 'Aprendizaje en Línea')

console.log(daniel.mostratInformacion());
console.log(empresa.mostratInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());