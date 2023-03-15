import data from "./amazing.js";
import { eventCategories, filterCategories, checkboxGenerator, cardGenerator, displayCardsByCheckbox, displayCardsBySearchbox } from "./generalModule.js";


// Guardar la información de amazing.js en variables para facilitar la manipulación.
let events = data.events;
let date = data.currentDate;


// Transformar el array de eventos en un array de futuros eventos.
function pastEvArray() {
    let pastEv = [];
    pastEv = events.filter(event => Date.parse(event.date) < Date.parse(date));
    return pastEv;
}
console.log(pastEvArray());


// Asignar el array obtenido a eventsArray.
let eventsArray = pastEvArray();


// Crear un array con las categorías de los eventos.
eventCategories(eventsArray)


// Crear un nuevo array eliminando los duplicados de la lista de categorías.
filterCategories(eventsArray);


// Asignar el array obtenido a filteredCategories.
let filteredCategories = filterCategories(eventsArray);


// Generar los checkboxes a partir de las categorías filtradas.
checkboxGenerator(filteredCategories)


// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
cardGenerator(eventsArray)


// Mostrar las tarjetas en función de la selección de los checkboxes.
displayCardsByCheckbox();


// Mostrar las tarjetas en función de la selección del searchbox.
displayCardsBySearchbox ();

