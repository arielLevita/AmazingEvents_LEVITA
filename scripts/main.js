import data from "./amazing.js";
import { checkboxGenerator, cardGenerator, generalFilter } from "./generalModule.js";

// Guardar los dato de amazing.js en una variable.
let eventsArray = data.events;

// Almacenar los elementos a dinamizar.
const cardsContainer = document.getElementById("cardsContainer");
const categorySelectors = document.getElementById("categorySelectors");
const input = document.querySelector('input')

console.log(input);

// Generar detectores de eventos que disparen determinada función.
input.addEventListener('input', () => generalFilter(eventsArray, cardsContainer));
categorySelectors.addEventListener('change', () => generalFilter(eventsArray, cardsContainer));

// Generar los selectores de categoría a partir del arreglo de eventos.
checkboxGenerator(eventsArray, categorySelectors);

// Generar las tarjetas a partir del arreglo de eventos.
cardGenerator(eventsArray, cardsContainer);


