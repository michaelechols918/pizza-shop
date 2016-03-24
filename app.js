var ballard, firstHill, theIntDist, southLakeUnion, ravenna, georgeTown;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

this.hourlyLocationData.push(object);

ballard = new PizzaLocation('Ballard');

var eight = new HourlyData('8:00 Am', 0, 3, 1, 7);
ballard.pushHourlyData(eight);

var nine = new HourlyData('9:00 Am', 0, 3, 1, 7);
ballard.pushHourlyData(new HourlyData('8:00 Am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('9:00 Am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('10:00 Am', 0, 3, 1, 7));
ballard.pushHourlyData(new HourlyData('11:00 Am', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('12:00 Pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('1:00 Pm', 5, 10, 2, 8));
ballard.pushHourlyData(new HourlyData('2:00 Pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('3:00 Pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('4:00 Pm', 2, 13, 1, 7));
ballard.pushHourlyData(new HourlyData('5:00 Pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('6:00 Pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('7:00 Pm', 0, 15, 2, 9));
ballard.pushHourlyData(new HourlyData('8:00 Pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('9:00 Pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('10:00 Pm', 1, 3, 4, 12));
ballard.pushHourlyData(new HourlyData('12:00 Am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('1:00 Am', 8, 15, 6, 16));
ballard.pushHourlyData(new HourlyData('2:00 Am', 8, 15, 6, 16));

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
