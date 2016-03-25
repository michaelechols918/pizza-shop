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
  pizzaLocationArray[0].pushHourlyData(
    new HourlyData('8:00 am', 0, 3, 1, 7)),
  pizzaLocationArray[0].pushHourlyData(
    new HourlyData('9:00 am', 0, 3, 1, 7)),
  pizzaLocationArray[0].pushHourlyData(
    new HourlyData('10:00 am', 0, 3, 1, 7)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('11:00 am', 5, 10, 2, 8)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('12:00 pm', 5, 10, 2, 8)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('1:00 pm', 5, 10, 2, 8)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('2:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('3:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('4:00 pm', 2, 13, 1, 7)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('5:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('6:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('7:00 pm', 0, 15, 2, 9)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('8:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('9:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('10:00 pm', 1, 3, 4, 12)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('11:00 pm', 8, 15, 6, 16)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('12:00 am', 8, 15, 6, 16)),
    pizzaLocationArray[0].pushHourlyData(
    new HourlyData('1:00 am', 8, 15, 6, 16));
};
for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[1].pushHourlyData(
    new HourlyData('8:00 am', 1, 3, 1, 7)),
  pizzaLocationArray[1].pushHourlyData(
    new HourlyData('9:00 am', 1, 3, 1, 7)),
  pizzaLocationArray[1].pushHourlyData(
    new HourlyData('10:00 am', 1, 3, 1, 7)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('11:00 am', 5, 9, 2, 8)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('12:00 pm', 5, 9, 2, 8)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('1:00 pm', 5, 9, 2, 8)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('2:00 pm', 2, 13, 1, 6)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('3:00 pm', 2, 13, 1, 6)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('4:00 pm', 2, 13, 1, 6)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('5:00 pm', 18, 32, 3, 9)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('6:00 pm', 18, 32, 3, 9)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('7:00 pm', 18, 32, 3, 9)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('8:00 pm', 1, 3, 5, 12)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('9:00 pm', 1, 3, 5, 12)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('10:00 pm', 1, 3, 5, 12)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('11:00 pm', 8, 20, 6, 16)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('12:00 am', 8, 20, 6, 16)),
    pizzaLocationArray[1].pushHourlyData(
    new HourlyData('1:00 am', 8, 20, 6, 16));
};
for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[2].pushHourlyData(
    new HourlyData('8:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[2].pushHourlyData(
    new HourlyData('9:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[2].pushHourlyData(
    new HourlyData('10:00 am', 0, 4, 0, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('11:00 am', 0, 7, 0, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('12:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('1:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('2:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('3:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('4:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('5:00 pm', 10, 26, 4, 6)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('6:00 pm', 10, 26, 4, 6)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('7:00 pm', 10, 26, 4, 6)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('8:00 pm', 8, 22, 7, 15)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('9:00 pm', 8, 22, 7, 15)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('10:00 pm', 8, 22, 7, 15)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('11:00 pm', 0, 2, 2, 8)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('12:00 am', 0, 2, 2, 8)),
    pizzaLocationArray[2].pushHourlyData(
    new HourlyData('1:00 am', 0, 2, 2, 8));
};
for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[3].pushHourlyData(
    new HourlyData('8:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[3].pushHourlyData(
    new HourlyData('9:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[3].pushHourlyData(
    new HourlyData('10:00 am', 0, 4, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('11:00 am', 0, 7, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('12:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('1:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('2:00 pm', 5, 15, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('3:00 pm', 5, 15, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('4:00 pm', 5, 15, 0, 4)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('5:00 pm', 25, 39, 13, 18)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('6:00 pm', 25, 39, 13, 18)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('7:00 pm', 25, 39, 13, 18)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('8:00 pm', 22, 36, 5, 22)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('9:00 pm', 22, 36, 5, 22)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('10:00 pm', 22, 36, 5, 22)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('11:00 pm', 5, 21, 16, 31)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('12:00 am', 5, 21, 16, 31)),
    pizzaLocationArray[3].pushHourlyData(
    new HourlyData('1:00 am', 5, 21, 16, 31));
};
for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[4].pushHourlyData(
    new HourlyData('8:00 am', 2, 7, 3, 5)),
  pizzaLocationArray[4].pushHourlyData(
    new HourlyData('9:00 am', 2, 7, 3, 5)),
  pizzaLocationArray[4].pushHourlyData(
    new HourlyData('10:00 am', 2, 7, 3, 5)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('11:00 am', 3, 8, 3, 8)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('12:00 pm', 3, 8, 3, 8)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('1:00 pm', 3, 8, 3, 8)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('2:00 pm', 1, 5, 1, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('3:00 pm', 1, 5, 1, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('4:00 pm', 1, 5, 1, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('5:00 pm', 5, 13, 2, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('6:00 pm', 5, 13, 2, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('7:00 pm', 5, 13, 2, 4)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('8:00 pm', 22, 41, 15, 42)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('9:00 pm', 22, 41, 15, 42)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('10:00 pm', 22, 41, 15, 42)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('11:00 pm', 15, 20, 6, 21)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('12:00 am', 15, 20, 6, 21)),
    pizzaLocationArray[4].pushHourlyData(
    new HourlyData('1:00 am', 15, 20, 6, 21));
};
for (var i = 0; i < pizzaLocationArray.length; i++){
  pizzaLocationArray[5].pushHourlyData(
    new HourlyData('8:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[5].pushHourlyData(
    new HourlyData('9:00 am', 0, 4, 0, 4)),
  pizzaLocationArray[5].pushHourlyData(
    new HourlyData('10:00 am', 0, 4, 0, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('11:00 am', 0, 7, 0, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('12:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('1:00 pm', 0, 7, 0, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('2:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('3:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('4:00 pm', 2, 15, 1, 4)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('5:00 pm', 6, 9, 5, 18)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('6:00 pm', 6, 9, 5, 18)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('7:00 pm', 6, 9, 5, 18)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('8:00 pm', 4, 8, 2, 5)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('9:00 pm', 4, 8, 2, 5)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('10:00 pm', 4, 8, 2, 5)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('11:00 pm', 2, 4, 3, 11)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('12:00 am', 2, 4, 3, 11)),
    pizzaLocationArray[5].pushHourlyData(
    new HourlyData('1:00 am', 2, 4, 3, 11));
};
console.log('LocationHourlyData');

function makeTable(ballard){
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
makeTable(pizzaLocationArray[0]);
makeTable(pizzaLocationArray[1]);
makeTable(pizzaLocationArray[2]);
makeTable(pizzaLocationArray[3]);
makeTable(pizzaLocationArray[4]);
makeTable(pizzaLocationArray[5]);
var ballardTable = document.createElement('table');
