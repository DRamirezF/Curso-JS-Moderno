// const encabezado = document.querySelector('.contenido-hero h1');
const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


// console.log(encabezado.innerText);      // Si en el CSS - visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent);    // Sí lo encuentra
// console.log(encabezado.innerHTML);      // Trae el HTML

// const nuevoHeading = 'Nuevo Heading';
// document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img')
imagen.src = 'img/hacer2.jpg'