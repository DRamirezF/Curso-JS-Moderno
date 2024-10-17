function Cliente(nombre, saldo) {
    this.nombre = nombre
    this.saldo = saldo
}

// El Function busca en el objeto actua
// La arrow function busca en el objeto global
Cliente.prototype.tipoCliente = function() {
    // console.log('Desde mi nuevo proto!!');
    // console.log(this.saldo);

    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Silver';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;

    return this.saldo
}


// Instanciarlo
const daniel = new Cliente('Daniel', 8000);

// daniel.tipoCliente();
// console.log(daniel.tipoCliente());
// console.log(daniel);
console.log(daniel.nombreClienteSaldo());
console.log(daniel.retiraSaldo(4000));
console.log(daniel.nombreClienteSaldo());




// function Empresa(nombre, saldo, categoria) {
//     this.nombre = nombre
//     this.saldo = saldo
//     this.categoria = categoria
// }

// const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea');

/* Se puede ver que no tiene la funcion "tipoCliente" */
// console.log(CCJ);