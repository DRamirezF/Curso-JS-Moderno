// Opción 1
localStorage.setItem('nombre', 'Daniel');

// Opción 2
const producto = {
    nombre: 'Monitor 24 pulgadas',
    precio: 300,
}
const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString)


// Opción 3
const meses = ['Enero', 'Febrero', 'Marzo']
localStorage.setItem('meses', JSON.stringify(meses))