const notificacionBtn = document.querySelector('#notificar');

notificacionBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resultado es:', resultado);
        })
})


const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if ( Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Código con Juan, aprende con proyectos reales.',
        });

        notificacion.onclick = function() {
            window.open('https://www.google.com')
        }
    }
})