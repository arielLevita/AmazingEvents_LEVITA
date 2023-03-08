import data from "./amazing.js";
import { cardGenerator, showCards } from "./generalModule.js";


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


// Lamar a la función para generar tarjetas.
cardGenerator(upcEvArray(events));


// Lamar a la función para mostrar tarjetas.
showCards(upcEvArray(events));
