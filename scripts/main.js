import data from "./amazing.js";


// Crear las tarjetas.
// En checkedEvents, cambiar visible o hidden. Ver cómo se hace desde el DOM.
// Ver cómo se hace delete div desde el DOM.  --> sólo para saber.




// Guardar la información de amazing.js en una variable para acceder y manipular la información.
let events = data.events;

// Recoger los input de los checkboxes de selector de categorías.
let checkFoodFair = document.getElementById("catFoodFair");
let checkMuseum = document.getElementById("catMuseum");
let checkCostumeParty = document.getElementById("catCostumeParty");
let checkMusicConcert = document.getElementById("catMusicConcert");
let checkRace = document.getElementById("catRace");
let checkBookExchange = document.getElementById("catBookExchange");
let checkCinema = document.getElementById("catCinema");

// Almacenar en una variable el div en el que van a estar las tarjetas (para posicionarlas).
let cardsSection = document.getElementById("cards");

// Crear las tarjetas dentro del div "cards". Asignarles la imagen de fondo.
for (let i = 0; i < events.length; i++) {
    let div =
        document.createElement("div");
        div.classList.add('card');
        div.classList.add('d-flex');
        div.classList.add('flex-column');
        div.setAttribute('id', `card${events[i]._id}`);
        div.innerHTML =
            `<div class="card-image" id="event${events[i]._id}"></div>  
            <div class="card-body">
                <h5 class="card-title text-center">${events[i].name}</h5>
                <p class="text-center">${events[i].description}</p>
            </div>
            <div class="row card-bottom d-flex align-items-baseline">
                <div class="col text-center">
                    <p>Price: $ ${events[i].price}</p>
                </div>
                <div class="col btn-details p-0">
                    <a href="#" class="btn btn-sm w-100">Details</a>
                </div>
            </div>`;
        document.getElementById("cards").appendChild(div);
        document.getElementById(`event${events[i]._id}`).style.backgroundImage = `url(${events[i].image})`;
}



// Crear un string de objetos para vincular el checkbox con el nombre de la categoría.
let checkedCategories = [
    {checkbox: checkFoodFair, category: "Food Fair"},
    {checkbox: checkMuseum, category: "Museum"},
    {checkbox: checkCostumeParty, category: "Costume Party"},
    {checkbox: checkMusicConcert, category: "Music Concert"},
    {checkbox: checkRace, category: "Race"},
    {checkbox: checkBookExchange, category: "Book Exchange"},
    {checkbox: checkCinema, category: "Cinema"}]


// Cambiar la visibilidad, en función de si el checkbox pertenciente a su categoría está checkeado.
for (let checkedCategory of checkedCategories) {
    (checkedCategory.checkbox).addEventListener("change", function() {
    
        if (!(checkedCategory.checkbox).checked) {
            for (let i = 0; i < events.length; i++){
                if (checkedCategory.category == (events[i].category)) {
                    document.getElementById(`card${events[i]._id}`).classList.remove('d-flex');
                    document.getElementById(`card${events[i]._id}`).style.display = `none`;
                }
            }
        } else {
            for (let i = 0; i < events.length; i++){
                if (checkedCategory.category == (events[i].category)) {
                    document.getElementById(`card${events[i]._id}`).classList.add('d-flex');
                     document.getElementById(`card${events[i]._id}`).removeAttribute('style');
                }
            }
            
        }



    // LO QUE ESTÁ ACÁ ABAJO FUE UN MAREO ASTRONÓMICO QUE HACÍA FUNCIONAR AL SITIO MUY LENTO.

    // Armar un array para seguir el funcionamiento de los checkboxes.
    /* let checkedEvents = [];
    if ((checkedCategory.checkbox).checked) {
        checkedEvents.push((checkedCategory.category));
    } else {
        checkedEvents.splice((checkedCategory.category), 1);
    }
    console.log("checkedEvents: " + checkedEvents) */

    
    // Mostrar una tarjeta con los datos del evento a partir de los checkboxes seleccionados (comparar nombres de categorías.)
    /* for (let checkedEvent of checkedEvents) {
        for (let i = 0; i < events.length; i++){
        if(checkedEvent == (events[i].category)) {
            console.log(`card${events[i]._id}`)
            document.getElementById(`card${events[i]._id}`).classList.remove('d-flex');
            document.getElementById(`card${events[i]._id}`).style.display = `none`;   
        } else {
            document.getElementById(`card${events[i]._id}`).classList.add('d-flex');
            document.getElementById(`card${events[i]._id}`).removeAttribute('style');
        }
    }
} */
})
}


   
