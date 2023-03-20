// ----- FUNCIONES GENERALES PARA EXPORTAR -----

// Unir los filtros.
export function generalFilter(eventsArray, cardsContainer, input) {
    let firstFilter = filterBySearchbox(eventsArray, input.value);
    let secondFilter = filterByCheckbox(firstFilter);
    cardGenerator(secondFilter, cardsContainer);
}
// Generar los checkboxes a partir de las categorías filtradas.
export function checkboxGenerator(eventsArray, categoryCheckboxes) {
    let categoriesArray = eventsArray.map(event => event.category);
    let setEvent = new Set(categoriesArray);
    let filteredCategoriesArray = Array.from(setEvent);
    let docFrag = document.createDocumentFragment();
    filteredCategoriesArray.forEach(category => {
        let div = document.createElement("div");
        div.classList.add('d-flex', 'align-items-center', 'mx-2');
        div.innerHTML =
            `<input
                class="form-check-input"
                type="checkbox"
                id="cat${category.replace(/\s+/g, '')}"
                value="${category}"
            />
            <label for="cat${category.replace(/\s+/g, '')}">${category}</label>`; //! Leer sobre expresiones regulares.
        docFrag.appendChild(div);
    });
    categoryCheckboxes.appendChild(docFrag);
}
// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
export function cardGenerator(eventsArray, cardsContainer) {
    cardsContainer.innerHTML = '';
    if (eventsArray.length == 0) {
        cardsContainer.innerHTML = `<h3 class="display-1 fw-bolder text-center">No soup for you!</h3>`;
        return;
    }
    let dFrag = document.createDocumentFragment();
    eventsArray.forEach(event => {
        let div = document.createElement("div");
        div.classList.add('card');
        div.setAttribute('id', `card${event._id}`);
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
                    <a href="../pages/event-details.html?id=${event._id}" class="btn btn-sm w-100">Details</a>
                </div>
            </div>`;
        dFrag.appendChild(div)
        dFrag.getElementById(`bg-event${event._id}`).style.backgroundImage = `url(${event.image})`;
    });
    cardsContainer.appendChild(dFrag);
}
// Crear filtro por input de texto.
function filterBySearchbox(eventsArray, searchTerm) {
    let filteredArray = eventsArray.filter(event => event.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filteredArray;
}
// Crear filtro por input de checkbox.
function filterByCheckbox(eventsArray) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let checkboxesArray = Array.from(checkboxes);
    let checkedCheckboxes = checkboxesArray.filter(check => check.checked);
    let checkedCheckboxesValues = checkedCheckboxes.map(checkedCheckbox => checkedCheckbox.value);
    let filteredArray = eventsArray.filter(event => checkedCheckboxesValues.includes(event.category));
    if (checkedCheckboxes.length > 0) {
        console.log(filteredArray)
        return filteredArray;
    };
    return eventsArray;
}