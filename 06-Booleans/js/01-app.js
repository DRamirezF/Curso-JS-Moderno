const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1);
console.log(boolean2);

console.log(boolean1);

// A diferencia de cuando comparas un numero y un texto que da true esto da false porque funcionan diferente
console.log(boolean1 == boolean3);


const boolean4 = new Boolean(true)
// El resultado en consola es un objeto
console.log(typeof boolean4);