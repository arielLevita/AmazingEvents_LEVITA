import data from "./amazing.js";

let events = data.events;
let date = data.currentDate;

// Función que devuelve todos los eventos POSTERIORES a la currentDate
function upcomingEvents(){
    let upcEv = [];
    for (let event of events) {
        if (Date.parse(event.date) > Date.parse(date)) {
            upcEv.push(event);
        }
    }
    return upcEv;
}
console.log("La fecha actual es: " +date);
console.log(upcomingEvents());