// Scope Global
const cliente = 'Daniel'

function mostrarCliente() {
    // Scope de la función
    const cliente = 'Pedro'
    console.log(cliente)
}
console.log(cliente)

mostrarCliente()