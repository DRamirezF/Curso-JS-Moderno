// const encabezado = document.querySelector('h1')

// La diferencia entre una propiedad de estilos en CSS y en JS es:
// En CSS están separadas por "-" y en JS se usa lowerCamelCase
// encabezado.style.backgroundColor = 'red';
// encabezado.style.fontFamily = 'Arial';
// encabezado.style.textTransform = 'uppercase';


const card = document.querySelector('.card')
card.classList.add('nueva-clase', 'segunda-clase')
card.classList.remove('card')

console.log(card.classList);