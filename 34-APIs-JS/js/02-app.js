// Previamente vimos getClientRect, que nos permitía identificar cuando un elemento estaba visible,
// existe otra API llamada Interception Observer, veamos como utilizarla...

document.addEventListener('DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {
        // console.log(entries[0]);

        if (entries[0].isIntersecting) {
            console.log('Ya está visible.');
        }
        else {
            console.log('No es visible');
        }
    })

    observer.observe(document.querySelector('.premium'));
})