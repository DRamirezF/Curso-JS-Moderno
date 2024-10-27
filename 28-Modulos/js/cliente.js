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


// Sólo puede haber uno por archivo
// Puede no tener nombre, pero es una nueva práctica que lo tenga
export default function nuevaFuncion() {
    console.log('Desde el export default');
}