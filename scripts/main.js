import data from "./amazing.js";
import { cardGenerator, showCards } from "./generalModule.js";


// Guardar la información de amazing.js en una variable para acceder y manipular la información.
let events = data.events;


// Llamar a la función cardGenerator con el array de eventos completo.
cardGenerator(events);


// Lamar a la función para mostrar tarjetas.
showCards(events);

