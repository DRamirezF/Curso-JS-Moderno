const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.firstChild);
console.log(navegacion.firstElementChild);
// console.log(navegacion.childNodes); // Los saltos de línnea en el .html son considerados elementos
// console.log(navegacion.children);   // Este sólo toma los elementos


// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);



// const card = document.querySelector('.card')

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM'
// console.log(card.children[1].children[1].textContent);

// card.children[0].src = 'img/hacer3.jpg'
// console.log(card.children[0]);



// Traversing the DOM Child to Father
// console.log(card.parentNode);
// console.log(card.parentElement);
// console.log(card.parentElement.parentElement);


// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);


// const ultimoCard = document.querySelector('.card:nth-child(4)')
// console.log(ultimoCard);
// console.log(ultimoCard.previousElementSibling);



const contenedorCards = document.querySelector('.contenedor-cards')
console.log(contenedorCards.firstChild);
console.log(contenedorCards.lastChild);