// Fizz Buzz

// Si es divisible entre 3 debe imprimir en consola: Fizz
// Ejemplo: 3, 6, 9...

// Si es divisible entre 5 debe imprimir en consola: Buzz
// Ejemplo: 5, 10, 15...

// Si es divisible entre 3 y 5 debe imprimir en consola: Fizz Buzz
// Ejemplo: 15, 30, 45...

console.log(3 % 3 === 0);
for (let i = 1; i < 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Fizz Buzz -> ${i}`);
    } else if(i % 3 === 0) {
        console.log(`Fizz -> ${i}`);
    } else if(i % 5 === 0) {
        console.log(`Buzz -> ${i}`);
    } else {
        console.log(`${i}`);
    }

    // Esto no funciona, va directo al Default sin entrar en ningún Case
    // switch (i) {
    //     case i % 3 === 0 && i % 5 === 0:
    //         console.log(`Fizz Buzz -> ${i}`);
    //         break;

    //     case i % 3 === 0:
    //         console.log(`Fizz -> ${i}`);
    //         break;
    
    //     case i % 5 === 0:
    //         console.log(`Fizz Buzz -> ${i}`);
    //         break;

    //     default:
    //         console.log(`${i}`);
    //         break;
    // }
    
}
