const carrito = new Set()

carrito.add('Camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')
carrito.add('Camisa')   // Los Sets no admiten valores repetidos
carrito.add('camisa')   // Hay diferencia entre mayúsculas y minúsculas


// console.log(carrito);
// console.log(carrito.delete('Piano'));
// console.log(carrito.delete('Disco #2'));
// console.log(carrito.has('Guitarra'));
// console.log(carrito.has('Disco #3'));
// console.log(carrito.size);
// console.log(carrito);
// console.log(carrito.clear());
// console.log(carrito);


// Los Sets son iterables
// Al guardar solo un valor tanto la primera variable como al segunda guardan cada producto
// carrito.forEach( (producto, index) => {
//     // console.log(producto);
//     console.log(index);
// })


const numeros = [10, 20, 30, 40, 50, 10, 20]
const noDuplicados = new Set(numeros);

console.log(noDuplicados);