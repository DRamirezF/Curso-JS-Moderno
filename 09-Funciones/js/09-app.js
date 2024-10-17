
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el ID: ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) {
        console.log(`Borrando canción... ${id}`);
    },
    // Función creada por mi
    crearPlayList: function(nombre = 'Sin Nombre') {
        console.log(`Se creó la playlist con el nombre: ${nombre}`);

        this.reproducirPlayList(nombre)
    },
    // Función creada por mi
    reproducirPlayList: function(playlist) {
        console.log(`Reproduciendo playList: ${playlist}`);
    },
}

reproductor.reproducir(30)
reproductor.pausar()
reproductor.reproducir(20)
reproductor.borrar(30)
reproductor.crearPlayList('')
reproductor.crearPlayList('Salsa')

