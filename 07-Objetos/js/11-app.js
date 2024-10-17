const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostratInfo: function() {
        // Esto dará error porque al no tener la palabra reservada THIS, buscará las variables fuera del objeto
        console.log(`El Producto: ${nombre} tiene un precio de: ${precio}`);
    }
}

const producto2 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostratInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

const producto3 = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostratInfo: function() {
        console.log(`El Producto: ${this.nombre} tiene un precio de: ${this.precio}`);
    }
}

producto.mostratInfo()
producto2.mostratInfo()
producto3.mostratInfo()