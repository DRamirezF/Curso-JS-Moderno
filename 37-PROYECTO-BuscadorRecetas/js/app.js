function iniciarApp() {
    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');

    if (selectCategorias) {
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if (favoritosDiv) {
        obtenerFavoritos();
    }

    const modal = new bootstrap.Modal('#modal', {})

    function obtenerCategorias() {
        url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

        fetch(url)
            .then( respuesta => respuesta.json())
            .then( datos => mostrarCategorias(datos.categories))
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach(categoria => {
            const { strCategory } = categoria;
            const option = document.createElement('OPTION');

            option.value = strCategory;
            option.textContent = strCategory;

            selectCategorias.appendChild(option)
        });
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( datos => mostrarRecetas(datos.meals) )
    }

    function mostrarRecetas(recetas = []) {

        limpiarHTML(resultado)

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultado.appendChild(heading);

        recetas.forEach(receta => {
            const { idMeal, strMeal, strMealThumb } = receta;
            console.log(receta);

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImage = document.createElement('IMG');
            recetaImage.classList.add('card-img-top');
            recetaImage.alt = `Imagen de la receta: ${strMeal ?? receta.titulo}`;
            recetaImage.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'Ver receta';
            // recetaButton.dataset.bsTarget = '#modal';
            // recetaButton.dataset.bsToggle = 'modal';

            // Usar una funcion de esta forma se llama Callback
            // Esto sirve para que no se llame inmediatamente, sino que espere al click
            recetaButton.onclick = function() {
                seleccionarReceta(idMeal ?? receta.id)
            }

            // Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImage);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor)
        });
    }
    
    function seleccionarReceta(id) {
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`

        fetch(url)
            .then( resultado => resultado.json() )
            .then( datos => mostrarRecetaModal(datos.meals[0]) )
    }

    function mostrarRecetaModal(receta) {
        const { idMeal, strInstructions, strMeal, strMealThumb } = receta

        const modalTitle = document.querySelector('.modal .modal-title')
        const modalBody = document.querySelector('.modal .modal-body')

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class='img-fluid' src='${strMealThumb}' alt='receta ${strMeal}' />
            <h3 class='my-3'>Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class='my-3'>Ingredientes y Cantidades</h3>
        `

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');

        let i = 1;

        while (receta[`strIngredient${i}`]) {
            const ingrediente = receta[`strIngredient${i}`]
            const cantidad = receta[`strMeasure${i}`]

            const ingredienteLi = document.createElement('LI');
            ingredienteLi.classList.add('list-group-item');
            ingredienteLi.textContent = `${ingrediente} - ${cantidad}`

            listGroup.appendChild(ingredienteLi);
            i++;
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        // Botones de Cerrar y Favoritos
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';

        // Localstorage
        btnFavorito.onclick = function() {

            if (existeStorage(idMeal)) {
                eliminarFavoritos(idMeal)
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado correctamente');
                return
            }

            agregarFavorito({
                id: idMeal,
                titulo: strMeal,
                img: strMealThumb
            })

            btnFavorito.textContent = 'Remover Favorito';
            mostrarToast('Agregado correctamente');
        }

        const btnCerrar = document.createElement('BUTTON');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function() {
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);

        // Muestra el modal
        modal.show();
    }

    function agregarFavorito(receta) {
        // El operador nullish evalua si lo de la izquierda da uno de estos valores y si es así ejecuto lo de la derecha
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, receta]));
    }

    function eliminarFavoritos(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function existeStorage(id) {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id)
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        
        if (favoritos.length) {
            mostrarRecetas(favoritos)
            return
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos aún';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos)
    }

    function limpiarHTML(selector) {
        while (selector.lastChild) {
            selector.removeChild(selector.lastChild)
        }
    }
}


document.addEventListener('DOMContentLoaded', iniciarApp);