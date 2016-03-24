var PizzaLocation = [
  new PizzaLocation('Ballard'),
  new PizzaLocation('first-hill'),
  new PizzaLocation('int-dist'),
  new PizzaLocation('south-lake-union'),
  new PizzaLocation('ravenna'),
  new PizzaLocation('george-town'),
];
var allStoreData = [
  new PizzaStore('ballard'),
  new PizzaStore('firstHill'),
  new PizzaStore('intlDist'),
  new PizzaStore('sLakeUnion'),
  new PizzaStore('georgeTown'),
  new PizzaStore('ravenna')
];

allStoreData[0].pushHourlyData = [
  new HourlyData('8:00 am', 0, 3, 1, 7),
  new HourlyData('9:00 am', 0, 3, 1, 7),
  new HourlyData('10:00 am', 0, 3, 1, 7),
  new HourlyData('11:00 am', 5, 10, 2, 8),
  new HourlyData('12:00 pm', 5, 10, 2, 8),
  new HourlyData('1:00 pm', 5, 10, 2, 8),
  new HourlyData('2:00 pm', 2, 13, 1, 7),
  new HourlyData('3:00 pm', 2, 13, 1, 7),
  new HourlyData('4:00 pm', 2, 13, 1, 7),
  new HourlyData('5:00 pm', 0, 15, 2, 9),
  new HourlyData('6:00 pm', 0, 15, 2, 9),
  new HourlyData('7:00 pm', 0, 15, 2, 9),
  new HourlyData('8:00 pm', 1, 3, 4, 12),
  new HourlyData('9:00 pm', 1, 3, 4, 12),
  new HourlyData('10:00 pm', 1, 3, 4, 12),
  new HourlyData('11:00 pm', 8, 15, 6, 16),
  new HourlyData('12:00 am', 8, 15, 6, 16),
  new HourlyData('1:00 am', 8, 15, 6, 16)
];

allStoreData[1].pushHourlyData = [
  new HourlyData('8:00 am', 1, 3, 1, 7),
  new HourlyData('9:00 am', 1, 3, 1, 7),
  new HourlyData('10:00 am', 1, 3, 1, 7),
  new HourlyData('11:00 am', 5, 9, 2, 8),
  new HourlyData('12:00 pm', 5, 9, 2, 8),
  new HourlyData('1:00 pm', 5, 9, 2, 8),
  new HourlyData('2:00 pm', 2, 13, 1, 6),
  new HourlyData('3:00 pm', 2, 13, 1, 6),
  new HourlyData('4:00 pm', 2, 13, 1, 6),
  new HourlyData('5:00 pm', 18, 32, 3, 9),
  new HourlyData('6:00 pm', 18, 32, 3, 9),
  new HourlyData('7:00 pm', 18, 32, 3, 9),
  new HourlyData('8:00 pm', 1, 3, 5, 12),
  new HourlyData('9:00 pm', 1, 3, 5, 12),
  new HourlyData('10:00 pm', 1, 3, 5, 12),
  new HourlyData('11:00 pm', 8, 20, 6, 16),
  new HourlyData('12:00 am', 8, 20, 6, 16),
  new HourlyData('1:00 am', 8, 20, 6, 16)
];

allStoreData[2].pushHourlyData = [
  new HourlyData('8:00 am', 0, 4, 0, 4),
  new HourlyData('9:00 am', 0, 4, 0, 4),
  new HourlyData('10:00 am', 0, 4, 0, 4),
  new HourlyData('11:00 am', 0, 7, 0, 4),
  new HourlyData('12:00 pm', 0, 7, 0, 4),
  new HourlyData('1:00 pm', 0, 7, 0, 4),
  new HourlyData('2:00 pm', 2, 15, 1, 4),
  new HourlyData('3:00 pm', 2, 15, 1, 4),
  new HourlyData('4:00 pm', 2, 15, 1, 4),
  new HourlyData('5:00 pm', 10, 26, 4, 6),
  new HourlyData('6:00 pm', 10, 26, 4, 6),
  new HourlyData('7:00 pm', 10, 26, 4, 6),
  new HourlyData('8:00 pm', 8, 22, 7, 15),
  new HourlyData('9:00 pm', 8, 22, 7, 15),
  new HourlyData('10:00 pm', 8, 22, 7, 15),
  new HourlyData('11:00 pm', 0, 2, 2, 8),
  new HourlyData('12:00 am', 0, 2, 2, 8),
  new HourlyData('1:00 am', 0, 2, 2, 8)
];


allStoreData[3].pushHourlyData = [
  new HourlyData('8:00 am', 0, 4, 0, 4),
  new HourlyData('9:00 am', 0, 4, 0, 4),
  new HourlyData('10:00 am', 0, 4, 0, 4),
  new HourlyData('11:00 am', 0, 7, 0, 4),
  new HourlyData('12:00 pm', 0, 7, 0, 4),
  new HourlyData('1:00 pm', 0, 7, 0, 4),
  new HourlyData('2:00 pm', 5, 15, 0, 4),
  new HourlyData('3:00 pm', 5, 15, 0, 4),
  new HourlyData('4:00 pm', 5, 15, 0, 4),
  new HourlyData('5:00 pm', 25, 39, 13, 18),
  new HourlyData('6:00 pm', 25, 39, 13, 18),
  new HourlyData('7:00 pm', 25, 39, 13, 18),
  new HourlyData('8:00 pm', 22, 36, 5, 22),
  new HourlyData('9:00 pm', 22, 36, 5, 22),
  new HourlyData('10:00 pm', 22, 36, 5, 22),
  new HourlyData('11:00 pm', 5, 21, 16, 31),
  new HourlyData('12:00 am', 5, 21, 16, 31),
  new HourlyData('1:00 am', 5, 21, 16, 31)
];

allStoreData[4].pushHourlyData = [
  new HourlyData('8:00 am', 2, 7, 3, 5),
  new HourlyData('9:00 am', 2, 7, 3, 5),
  new HourlyData('10:00 am', 2, 7, 3, 5),
  new HourlyData('11:00 am', 3, 8, 3, 9),
  new HourlyData('12:00 pm', 3, 8, 3, 9),
  new HourlyData('1:00 pm', 3, 8, 3, 9),
  new HourlyData('2:00 pm', 1, 5, 1, 4),
  new HourlyData('3:00 pm', 1, 5, 1, 4),
  new HourlyData('4:00 pm', 1, 5, 1, 4),
  new HourlyData('5:00 pm', 5, 13, 2, 4),
  new HourlyData('6:00 pm', 5, 13, 2, 4),
  new HourlyData('7:00 pm', 5, 13, 2, 4),
  new HourlyData('8:00 pm', 22, 41, 15, 42),
  new HourlyData('9:00 pm', 22, 41, 15, 42),
  new HourlyData('10:00 pm', 22, 41, 15, 42),
  new HourlyData('11:00 pm', 15, 20, 6, 21),
  new HourlyData('12:00 am', 15, 20, 6, 21),
  new HourlyData('1:00 am', 15, 20, 6, 21)
];


allStoreData[5].pushHourlyData = [
  new HourlyData('8:00 am', 0, 4, 0, 4),
  new HourlyData('9:00 am', 0, 4, 0, 4),
  new HourlyData('10:00 am', 0, 4, 0, 4),
  new HourlyData('11:00 am', 0, 7, 0, 4),
  new HourlyData('12:00 pm', 0, 7, 0, 4),
  new HourlyData('1:00 pm', 0, 7, 0, 4),
  new HourlyData('2:00 pm', 2, 15, 1, 4),
  new HourlyData('3:00 pm', 2, 15, 1, 4),
  new HourlyData('4:00 pm', 2, 15, 1, 4),
  new HourlyData('5:00 pm', 6, 9, 5, 18),
  new HourlyData('6:00 pm', 6, 9, 5, 18),
  new HourlyData('7:00 pm', 6, 9, 5, 18),
  new HourlyData('8:00 pm', 4, 8, 2, 5),
  new HourlyData('9:00 pm', 4, 8, 2, 5),
  new HourlyData('10:00 pm', 4, 8, 2, 5),
  new HourlyData('11:00 pm', 2, 4, 3, 11),
  new HourlyData('12:00 am', 2, 4, 3, 11),
  new HourlyData('1:00 am', 2, 4, 3, 11)
];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PizzaLocation(name, hourlyLocationData){
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

this.hourlyLocationData.push(object);

console.log('ballard.HourlyData');

function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;

}
function genorateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;

var pizzaTable = document.createElement('ballard');

var firstRow = genorateHeadingRow(['Time', 'Pizzas sold', 'Pizzas delivered, Drivers recommended']);
pizzaTable.appendChild(firstRow);

for(var i = 0; i< ballard.hourlyLocationData.length; i++){
  var deathRow = genorateDataRow([balllard.hourlyLocationData[i].time, ballard.hourlyLocationData[i].pizzasSold, ballard.hourlyLocationData[i].deliveriesMade, ballard.hourlyLocationData[i].driversNeeded]);
  pizzaTable.appendChild(deathRow);
