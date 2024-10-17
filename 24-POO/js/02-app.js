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

const daniel = new Cliente('Daniel', 400)
console.log(daniel.mostratInformacion());
console.log(daniel);
// Esto da error
// console.log(daniel.bienvenida());

console.log(Cliente.bienvenida());


// Class Espresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostratInformacion() {
        return `Cliente: ${this.nombre}, tu salso es ${this.saldo}`
    }
}
const daniel2 = new Cliente2('Daniel', 400)
console.log(daniel2.mostratInformacion());
console.log(daniel2);