const tableUpc = document.getElementById("tableUpcoming");
const tablePast = document.getElementById("tablePast");

// Obtener información de los eventos y generar el contenido dinámico.
async function getData() {
  try {
    const response = await fetch("../data/amazing.json");
    const data = await response.json();
    document.getElementById("highestAttendance").innerHTML = highestPercentageFinder(data.events);
    document.getElementById("lowestAttendance").innerHTML = lowestPercentageFinder(data.events);
    document.getElementById("largerCapacity").innerHTML = largerCapacity(data.events);
    toUpcoming(createTable, data.events, categoriesFinder, eventByCategoryFinder, addingRevenues, averageAttendancePercentagesFinder, tableUpc);
    toPast(createTable, data.events, categoriesFinder, eventByCategoryFinder, addingRevenues, averageAttendancePercentagesFinder, tablePast);
  }
  catch (error) {
    console.log(error);
  }
}
getData();

// Calcular porcentajes de asistencia/estimado por evento.
function attendancePercentageCalculator(event) {
  let capacity = event.capacity;
  let attendance = event.assistance ? event.assistance : event.estimate;
  return (attendance / capacity) * 100;
}
// Crear array de categorías tomando los datos del json.
function categoriesFinder(eventsArray) {
  return [...new Set((eventsArray.map(event => event.category)))];
}
// Identificar qué evento se corresponde con cada categoría.
function eventByCategoryFinder(eventsArray, categoriesFinder) {
  return categoriesFinder.map(category => eventsArray.filter(event => event.category === category));
}
// Calcular la revenue por evento.
function revenueCalculator(event) {
  let price = event.price;
  let attendance = event.assistance ? event.assistance : event.estimate;
  return (price * attendance);
}
// Calcular el total de un array de revenues.
function addingRevenues(eventsByCategory) {
  let revenuesByCategory = [];
  for (let category of eventsByCategory) {
    let categoryRevenue = category.map(event => revenueCalculator(event));
    let totalRevenues = categoryRevenue.reduce((acc, current) => acc + current, 0);
    revenuesByCategory.push(totalRevenues);
  }
  return revenuesByCategory;
}
// Obtener los promedios de asistencia por categoría
function averageAttendancePercentagesFinder(eventsByCategory) {
  let averageAttendancePercentages = [];
  for (let category of eventsByCategory) {
    let attendancePercentages = category.map(event => attendancePercentageCalculator(event));
    let average = attendancePercentages.reduce((acc, current) => acc + current, 0) / attendancePercentages.length;
    averageAttendancePercentages.push(average);
  }
  return averageAttendancePercentages;
}

// ----- FUNCIONES DE TABLA 1 -----
function highestPercentageFinder(eventsArray) {
  let highestPercentage = eventsArray.reduce((higher, current) => (attendancePercentageCalculator(higher) > attendancePercentageCalculator(current)) ? higher : current).name;
  return highestPercentage;
}
function lowestPercentageFinder(eventsArray) {
  let lowestPercentage = eventsArray.reduce((lower, current) => (attendancePercentageCalculator(lower) < attendancePercentageCalculator(current)) ? lower : current).name;
  return lowestPercentage;
}
function largerCapacity(eventsArray) {
  let largerCapacity = eventsArray.reduce((larger, current) => (larger.capacity > current.capacity) ? larger : current).name;
  return largerCapacity;
}

// ----- FUNCIONES DE TABLA 2 -----
function toUpcoming(createTable, eventsArray, findCategories, eventByCategoryFinder, revenuesSum, averageAttendanceFinder, container) {
  let upcEvents = eventsArray.filter(event => event.estimate);
  let categoriesArray = findCategories(upcEvents);
  let upcEventsByCategory = eventByCategoryFinder(upcEvents, categoriesArray);
  let addedRevenues = revenuesSum(upcEventsByCategory);
  let averageAttendancePercentages = averageAttendanceFinder(upcEventsByCategory);
  createTable(categoriesArray, addedRevenues, averageAttendancePercentages, container);
}

// ----- FUNCIONES DE TABLA 3 -----
function toPast(createTable, eventsArray, findCategories, eventByCategoryFinder, revenuesSum, averageAttendanceFinder, container) {
  let pastEvents = eventsArray.filter(event => event.assistance);
  let categoriesArray = findCategories(pastEvents);
  let pastEventsByCategory = eventByCategoryFinder(pastEvents, categoriesArray);
  let addedRevenues = revenuesSum(pastEventsByCategory);
  let averageAttendancePercentages = averageAttendanceFinder(pastEventsByCategory);
  createTable(categoriesArray, addedRevenues, averageAttendancePercentages, container);
}

// ----- FUNCIÓN DE CREAR TABLA -----
function createTable(categoriesArray, addedRevenues, averageAttendancePercentages, container) {
  for (let i = 0; i < categoriesArray.length; i++) {
    const category = categoriesArray[i];
    const revenue = addedRevenues[i];
    const attendancePercentage = averageAttendancePercentages[i];
    // Me resulta más fácil crear las distintas celdas que crear el objeto porque copio el formato del HTML.
    const row = document.createElement('tr');
    const categoryCell = document.createElement('td');
    categoryCell.innerText = category;
    row.appendChild(categoryCell);
    const revenueCell = document.createElement('td');
    revenueCell.innerText = "$" + revenue;
    row.appendChild(revenueCell);
    const attendanceCell = document.createElement('td');
    attendanceCell.innerText = attendancePercentage.toFixed(2) + "%";
    row.appendChild(attendanceCell);

    container.appendChild(row);
  }
}