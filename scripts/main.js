import data from "./amazing.js";
import { eventCategories, filterCategories, checkboxGenerator, cardGenerator, displayCards } from "./generalModule.js";


// Guardar la información de amazing.js en una variable para acceder y manipular la información.
let events = data.events;
let eventsArray = events;


// Crear un array con las categorías de los eventos.
eventCategories(eventsArray)


// Crear un nuevo array eliminando los duplicados de la lista de categorías.
filterCategories(eventsArray);


// Asignar el array obtenido a filteredCategories.
let filteredCategories = filterCategories(eventsArray);


// Generar los checkboxes a partir de las categorías filtradas.
checkboxGenerator(filteredCategories)


// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
cardGenerator(eventsArray);


// Mostrar las tarjetas en función de la selección de los checkboxes.
displayCards();


// Recupera los nombres de los eventos.
function eventNames(events) {
    let eventNames = [];
    events.forEach(events => {
        eventNames.push(events.name);
    }
    )
    return eventNames;
}


// TODO FILTRA BIEN. HAY QUE USAR LA INFO PARA FLEX/NONE
/* function filterEventNames(events) {
    let searchedEvents = [];
    btnSearch.addEventListener("click", (e) => {
        e.preventDefault(); 
        let searchBox = document.getElementById("searchBox").value;
        searchedEvents = eventNames(events).filter(eventName => eventName.toLowerCase().includes(searchBox.toLowerCase()));
        
        console.log("1:" +searchedEvents);


    })
    console.log("2:" +searchedEvents);
    return searchedEvents;
} */