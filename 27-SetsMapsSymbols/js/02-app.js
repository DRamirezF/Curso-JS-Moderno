// Weakset

const weakset = new WeakSet();

const cliente = {
    nombre: 'Juna',
    saldo: 100
}


weakset.add(cliente)

// weakset solo acepta Objetos, no es iterable y no usa el método size
// const numero = 10;
// weakset.add(numero)


// Un resultado bastante curioso
console.log(weakset);
console.log(weakset.has(cliente));
weakset.delete(cliente)
console.log(weakset.has(cliente));
console.log(weakset);