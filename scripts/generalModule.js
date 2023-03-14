// FUNCIONES GENERALES PARA EXPORTAR



// Crear un array con las categorías de los eventos.
export function eventCategories(eventsArray) {
    let eventCategories = [];
    eventsArray.forEach(eventsArray => {eventCategories.push(eventsArray.category)});
    return eventCategories;
}


// Crear un nuevo array eliminando los duplicados de la lista de categorías.
export function filterCategories(eventsArray) {
    let filteredCategories = eventCategories(eventsArray).filter((value, index, array) => array.indexOf(value) === index);
    return filteredCategories;
}
//! Repasar documentación sobre filter().


// Generar los checkboxes a partir de las categorías filtradas.
export function checkboxGenerator(filteredCategories) {
    let docFrag = document.createDocumentFragment();
    filteredCategories.forEach(filteredCategory => {
        let div = document.createElement("div");
        div.classList.add('d-flex', 'align-items-center', 'mx-2');
        div.innerHTML =
            `<input
                class="form-check-input"
                type="checkbox"
                id="cat${filteredCategory.replace(/\s+/g, '')}"
                data-category="${filteredCategory}"
                value=""
                aria-label="..."
                checked
            />
            <label for="cat${filteredCategory.replace(/\s+/g, '')}">${filteredCategory}</label>`; //! Leer sobre expresiones regulares.
        docFrag.appendChild(div)
    })
    document.getElementById("categorySelectors").appendChild(docFrag);
}


// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
export function cardGenerator(eventsArray) {
    let dFrag = document.createDocumentFragment();
    eventsArray.forEach(event => {
        let div = document.createElement("div");
        div.classList.add('card');
        div.setAttribute('id', `card${event._id}`);
        div.setAttribute('data-category', `${event.category}`)
        div.innerHTML =
            `<div class="card-image" id="bg-event${event._id}"></div>  
            <div class="card-body">
                <h5 class="card-title text-center">${event.name}</h5>
                <p class="text-center">${event.description}</p>
            </div>
            <div class="row card-bottom d-flex align-items-baseline">
                <div class="col text-center">
                    <p>Price: $ ${event.price}</p>
                </div>
                <div class="col btn-details p-0">
                    <a href="#" class="btn btn-sm w-100">Details</a>
                </div>
            </div>`;
        dFrag.appendChild(div)
        dFrag.getElementById(`bg-event${event._id}`).style.backgroundImage = `url(${event.image})`;
    })
    document.getElementById("cards").appendChild(dFrag);
}


// Mostrar las tarjetas en función de la selección de los checkboxes.
export function displayCards() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let cards = document.querySelectorAll('.card');

    checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        let category = checkbox.dataset.category;
        cards.forEach((card) => {
        if (card.dataset.category === category) {
            card.classList.toggle('d-none', !checkbox.checked);
        }
        });
    });
    });
}