// Los Maps son listas ordenadas con llave y valor, que pueden ser cualquier tipo de dato
// Tienen mejor performance que un objeto, se usan para agregar, quitar o recorrer elementos

const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

// Aunque esto funciona, por favor no lo hagas, está horrible
// cliente.set(true, true);
// cliente.set(false, true);
// cliente.set(0, 'a');
// cliente.set([0], 1);


console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.has('Karen'));  // No funciona con el valor
console.log(cliente.has('nombre2'));
cliente.delete('saldo');
console.log(cliente);
cliente.clear()
console.log(cliente);



const paciente = new Map([['nombre', 'Juan'], ['cuarto', 'no definido']])

paciente.set('dr', 'Dr asignado')
paciente.set('nombre', 'Daniel')

console.log(paciente);


// Al ser llave/valor pueden usar ambos
paciente.forEach( (datos, index) => {
    // console.log(datos);
    console.log(index);
})