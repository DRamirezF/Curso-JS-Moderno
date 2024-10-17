
const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el ID: ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción... ${id}`),
    // Función creada por mi
    crearPlayList: (nombre = 'Sin Nombre') => {
        console.log(`Se creó la playlist con el nombre: ${nombre}`);

        this.reproducirPlayList(nombre)
    },
    // Función creada por mi
    reproducirPlayList: playlist => console.log(`Reproduciendo playList: ${playlist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Pop'
reproductor.obtenerCancion


reproductor.reproducir(30)
reproductor.pausar()
reproductor.reproducir(20)
reproductor.borrar(30)
reproductor.crearPlayList('')
reproductor.crearPlayList('Salsa')

