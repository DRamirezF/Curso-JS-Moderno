
const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`)
    }
})

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando el email de: ${info.nombre}`)
        info.email = email
    }
})

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`El email de ${info.nombre} es: ${info.email}`)
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`)
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`)
    }
})



function Cliente(nombre, email, empresa) {
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info),
    )
}

// const cliente = Cliente('Daniel', 'correo@correo.com', 'Churromanía')
const cliente = Cliente('Daniel', null, 'Microsoft')
cliente.mostrarNombre()
cliente.agregarEmail('correo@correo.com')
cliente.mostrarEmail()
cliente.mostrarEmpresa()

console.log('===========')

// const empleado = Empleado('Avelino', 'empleado@empleado.com', 'Programador')
const empleado = Empleado('Avelino', null, 'Programador')
empleado.mostrarNombre()
empleado.agregarEmail('empleado@empleado.com')
empleado.mostrarEmail()
empleado.mostrarPuesto()