import { checkboxGenerator, cardGenerator, generalFilter } from "./generalModule.js";

// Almacenar los elementos a dinamizar.
const cardsContainer = document.getElementById("cardsContainer");
const categorySelectors = document.getElementById("categorySelectors");
const input = document.querySelector('input');

// Obtener información de los eventos y generar el contenido dinámico.
async function getData() {
    try {
        const response = await fetch ("../data/amazing.json");
        const data = await response.json();
        // Guardar los dato de amazing.js en una variable.
        let eventsArray = data.events;
        // Generar detectores de eventos que disparen determinada función.
        input.addEventListener('input', () => generalFilter(eventsArray, cardsContainer, input));
        categorySelectors.addEventListener('change', () => generalFilter(eventsArray, cardsContainer, input));
        // Generar los selectores de categoría a partir del arreglo de eventos.
        checkboxGenerator(eventsArray, categorySelectors);
        // Generar las tarjetas a partir del arreglo de eventos.
        cardGenerator(eventsArray, cardsContainer);
        return data;
    }
    catch(error) {
        console.log(error);
    }
}
getData();

