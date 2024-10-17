const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for( propiedad in automovil) {
    // Esto trae la llave
    console.log(propiedad);

    // Con esto traes el valor
    console.log(`${automovil[propiedad]}`);
}


// OTra forma de iterar un objeto
for( let [llave, valor] of Object.entries(automovil)) {
    console.log(llave);
    console.log(valor);
}