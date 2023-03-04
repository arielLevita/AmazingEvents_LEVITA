import data from "./amazing.js";

let events = data.events;


//TODO Hacer el loop for y agregar la separación por categorías.
document.getElementById("cards").innerHTML =
`<div class="card d-flex flex-column">
    <div class="card-image" id="event${events[0]._id}"></div>  
        <div class="card-body">
            <h5 class="card-title text-center">${events[0].name}</h5>
            <p class="text-center">${events[0].description}</p>
        </div>
        <div class="row card-bottom d-flex align-items-baseline">
            <div class="col text-center">
            <p>Price: $ ${events[0].price}</p>
            </div>
            <div class="col btn-details p-0">
            <a href="#" class="btn btn-sm w-100">Details</a>
            </div>
        </div>
    </div>
</div>`;

document.getElementById(`event${events[0]._id}`).style.backgroundImage = `url(${events[0].image})`;