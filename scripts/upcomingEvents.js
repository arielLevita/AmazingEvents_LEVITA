import data from "./amazing.js";


// Guardar la información de amazing.js en variables para facilitar la manipulación.
let events = data.events;
let date = data.currentDate;


// Transformar el array de eventos en un array de futuros eventos.
function upcEvArray(events) {
    let upcEv = [];
    for (let event of events) {
        if (Date.parse(event.date) > Date.parse(date)) {
            upcEv.push(event);
        }
    }
    return upcEv;
}
console.log(upcEvArray(events));


// Recoger los input de los checkboxes de selector de categorías.
let checkFoodFair = document.getElementById("catFoodFair");
let checkMuseum = document.getElementById("catMuseum");
let checkCostumeParty = document.getElementById("catCostumeParty");
let checkMusicConcert = document.getElementById("catMusicConcert");
let checkRace = document.getElementById("catRace");
let checkBookExchange = document.getElementById("catBookExchange");
let checkCinema = document.getElementById("catCinema");


// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
function cardGenerator(eventsArray) {
    let dFrag = document.createDocumentFragment();
    for (let i = 0; i < eventsArray.length; i++) {
        let div = document.createElement("div");
        div.classList.add('card', 'd-flex', 'flex-column');
        div.setAttribute('id', `card${eventsArray[i]._id}`);
        div.innerHTML =
            `<div class="card-image" id="bg-event${eventsArray[i]._id}"></div>  
            <div class="card-body">
                <h5 class="card-title text-center">${eventsArray[i].name}</h5>
                <p class="text-center">${eventsArray[i].description}</p>
            </div>
            <div class="row card-bottom d-flex align-items-baseline">
                <div class="col text-center">
                    <p>Price: $ ${eventsArray[i].price}</p>
                </div>
                <div class="col btn-details p-0">
                    <a href="#" class="btn btn-sm w-100">Details</a>
                </div>
            </div>`;
        dFrag.appendChild(div)
        dFrag.getElementById(`bg-event${eventsArray[i]._id}`).style.backgroundImage = `url(${eventsArray[i].image})`;
    }
    document.getElementById("cards").appendChild(dFrag);
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
function showCards(eventsArray) {
    for (let checkedCategory of checkedCategories) {
        (checkedCategory.checkbox).addEventListener("change", function changeDisplay() {
        
            if (!(checkedCategory.checkbox).checked) {
                for (let i = 0; i < eventsArray.length; i++){
                    if (checkedCategory.category == (eventsArray[i].category)) {
                        document.getElementById(`card${eventsArray[i]._id}`).classList.remove('d-flex');
                        document.getElementById(`card${eventsArray[i]._id}`).style.display = `none`;
                    }
                }
            } else {
                for (let i = 0; i < eventsArray.length; i++){
                    if (checkedCategory.category == (eventsArray[i].category)) {
                        document.getElementById(`card${eventsArray[i]._id}`).classList.add('d-flex');
                        document.getElementById(`card${eventsArray[i]._id}`).removeAttribute('style');
                    }
                }
            }
        })
    }
}


// Lamar a la función para generar tarjetas.
cardGenerator(upcEvArray(events));


// Lamar a la función para mostrar tarjetas.
showCards(upcEvArray(events));
