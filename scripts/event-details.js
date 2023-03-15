import data from "./amazing.js";

// Guardar la información de amazing.js en una variable para acceder y manipular la información.
let events = data.events;

const queryString = location.search;
const params = new URLSearchParams(queryString);
const detailId = params.get('id');

const event = events.find(event => event._id == detailId);



let detailsContainer = document.getElementById("event-details");

// Crear el molde de tarjeta dentro del div "cards". Asignarle la imagen de fondo.
function detailsGenerator(event, detailsContainer) {
    let div = document.createElement("div");
    div.classList.add('details-card', 'row', 'p-5', 'grid', 'gap-3');
    div.innerHTML =
        `<div class="col p-3 details-image border border-dark" id="bg-details${event._id}">
        </div>
        <div class="col p-3 details-data bg-light">
            <h3 class="text-center p-3">${event.name}</h3>
            <ul>
            <li><span>Name:</span> ${event.name}</li>
            <li><span>Date:</span> ${event.date}</li>
            <li><span>Description:</span> ${event.description}</li>
            <li><span>Category:</span> ${event.category}</li>
            <li><span>Place:</span> ${event.place}</li>
            <li><span>Capacity:</span> ${event.capacity}</li>
            <li><span>Assistance or estimate:</span> ${event.estimate}</li>
            <li><span>Price:</span> ${event.price}</li>
            </ul>
        </div>`;
        detailsContainer.appendChild(div)
        document.getElementById(`bg-details${event._id}`).style.backgroundImage = `url(${event.image})`;
    }


detailsGenerator(event, detailsContainer);