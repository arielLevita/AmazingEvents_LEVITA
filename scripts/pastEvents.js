import data from "./amazing.js";

let events = data.events;
let date = data.currentDate;

// Función que devuelve todos los eventos ANTERIORES a la currentDate
function pastEvents(){
    let pastEv = [];
    for (let event of events) {
        if (Date.parse(event.date) < Date.parse(date)) {
            pastEv.push(event);
        }
    }
    return pastEv;
}

console.log("La fecha actual es: " +date);
console.log(pastEvents());