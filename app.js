function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var pizzaLocationArray = [
  new PizzaLocation('Ballard'),
  new PizzaLocation('First Hill'),
  new PizzaLocation('Int. Dist'),
  new PizzaLocation('South Lake Union'),
  new PizzaLocation('Ravenna'),
  new PizzaLocation('Georgetown'),
];

function PizzaLocation(name){
  this.name = name;
  this.hourlyLocationData = [];
}

PizzaLocation.prototype.pushHourlyData = function(data){
  this.hourlyLocationData.push(data);
};

function HourlyData(time, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade){
  this.time = time;
  this.pizzasSold = getRandomIntInclusive(minPizzasSold, maxPizzasSold);
  this.deliveriesMade = getRandomIntInclusive(minDeliveriesMade, maxDeliveriesMade);
  this.driversNeeded = Math.ceil(this.deliveriesMade / 3);
};

for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[i].pushHourlyData(
    new HourlyData('8:00 am', 0, 3, 1, 7)),
  pizzaLocationArray[i].pushHourlyData(
    new HourlyData('9:00 am', 0, 3, 1, 7)),
  pizzaLocationArray[i].pushHourlyData(
    new HourlyData('10:00 am', 0, 3, 1, 7)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('11:00 am', 5, 10, 2, 8)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('12:00 pm', 5, 10, 2, 8)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('1:00 pm', 5, 10, 2, 8)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('2:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('3:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('4:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('5:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('6:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('7:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('8:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('9:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('10:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('11:00 pm', 8, 15, 6, 16)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('12:00 am', 8, 15, 6, 16)),
    pizzaLocationArray[i].pushHourlyData(
    new HourlyData('1:00 am', 8, 15, 6, 16));
};
console.log('LocationHourlyData');

function makeFirstTable(ballard){
  var header = document.createElement('h1');
  header.textContent = ballard.name;
  document.getElementById('setUpTables').appendChild(header);
  // var firstRow = genorateHeadingRow(['Time', 'Pizzas sold', 'Deliveries Made', 'Drivers recommended']);
  var table = document.createElement('table');
  for(var i = 0; i < ballard.hourlyLocationData.length; i++){
    console.log('first item of hour array', ballard.hourlyLocationData[i]);
    var row = document.createElement('row');
    var timeTd = document.createElement('td');
    timeTd.textContent = ballard.hourlyLocationData[i].time;
    row.appendChild(timeTd);
    var pizzasSoldTd  = document.createElement('td');
    pizzasSoldTd.textContent = ballard.hourlyLocationData[i].pizzasSold;
    row.appendChild(pizzasSoldTd);
    var deliveryTd = document.createElement('td');
    deliveryTd.textContent = ballard.hourlyLocationData[i].deliveriesMade;
    row.appendChild(deliveryTd);
    var driversNeededTd = document.createElement('td');
    driversNeededTd.textContent = ballard.hourlyLocationData[i].driversNeeded;
    row.appendChild(driversNeededTd);

    /////////repeat
    table.appendChild(row);
  }
  document.getElementById('setUpTables').appendChild(table);
}
makeFirstTable(pizzaLocationArray[0]);
makeFirstTable(pizzaLocationArray[1]);
makeFirstTable(pizzaLocationArray[2]);
makeFirstTable(pizzaLocationArray[3]);
makeFirstTable(pizzaLocationArray[4]);
makeFirstTable(pizzaLocationArray[5]);
var ballardTable = document.createElement('table');
