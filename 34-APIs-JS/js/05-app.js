document.addEventListener('visibilitychange', () => {
    // console.log(document.visibilityState);
    if (document.visibilityState === 'visible') {
        console.log('Ejecutar la función de reproducir el vídeo...');
    } else {
        console.log('Pausar el vídeo.');
    }
})