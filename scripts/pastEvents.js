import data from "./amazing.js";
import { checkboxGenerator, cardGenerator, generalFilter } from "./generalModule.js";

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

// Almacenar los elementos a dinamizar.
const allCards = document.getElementById("allCards");
const categorySelectors = document.getElementById("categorySelectors");
const input = document.querySelector('input')

// Generar detectores de eventos que disparen determinada función.
input.addEventListener('input',generalFilter);
categorySelectors.addEventListener('change',generalFilter);

// Generar los selectores de categoría a partir del arreglo de eventos.
checkboxGenerator(eventsArray, categorySelectors);

// Generar las tarjetas a partir del arreglo de eventos.
cardGenerator(eventsArray);
