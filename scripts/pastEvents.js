import data from "./amazing.js";
import { cardGenerator, showCards } from "./generalModule.js";


// Guardar la información de amazing.js en variables para facilitar la manipulación.
let events = data.events;
let date = data.currentDate;


// Transformar el array de eventos en un array de futuros eventos.
function pastEvArray(events) {
    let pastEv = [];
    for (let event of events) {
        if (Date.parse(event.date) < Date.parse(date)) {
            pastEv.push(event);
        }
    }
    return pastEv;
}
console.log(pastEvArray(events));


// Lamar a la función para generar tarjetas.
cardGenerator(pastEvArray(events));


// Lamar a la función para mostrar tarjetas.
showCards(pastEvArray(events));

