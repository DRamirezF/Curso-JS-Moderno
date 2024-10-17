const cardDiv = document.querySelector('.card')

cardDiv.addEventListener('click', e => {
    if (e.target.classlist.contains('titulo')) {
        console.log('Diste click en titulo');
    }
    if (e.target.classlist.contains('precio')) {
        console.log('Diste click en precio');
    }
    if (e.target.classlist.contains('card')) {
        console.log('Diste click en card');
    }
})