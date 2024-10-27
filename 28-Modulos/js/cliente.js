export const nombreCliente = 'Juan';
export const ahorro = 200;

export function mostrarinformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Sí tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}


export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarinformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`
    }
}