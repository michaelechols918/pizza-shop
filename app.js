var PizzaLocation = [
  new PizzaLocation('Ballard'),
  new PizzaLocation('first-hill'),
  new PizzaLocation('int-dist'),
  new PizzaLocation('south-lake-union'),
  new PizzaLocation('ravenna'),
  new PizzaLocation('george-town'),
];

for(var i = 0; i < inputArray.length; i++){
  allStoreData[1].pushHourlyData(
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
  );
}
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

console.log('LocationHourlyData');

function makeFirstTable(ballard){
  var header = document.createElement('h1');
  header.textContent = ballard.name;
  document.getElementById('setUpTables').appendChild(header);

  var table = document.createElement('table');
  for(var i = 0; i < ballard.hourlyLocationData.length; i++){
    var row = document.createElement('row');
    row.textContent = ballard.hourlyLocationData[i];
    table.appendChild(row);
  }
}
makeFirstTable();

document.getElementById('setUpTables').appendChild(table);
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
}

var ballardTable = document.createElement('table');

var firstRow = genorateHeadingRow(['Time', 'Pizzas sold', 'Deliveries Made', 'Drivers recommended']);

pizzaTable.appendChild(firstRow);

for(var i = 0; i < userLocation.hourlyLocationData.length; i++){
  var deathRow = genorateDataRow([userLocation.hourlyLocationData[i].time, userLocation.hourlyLocationData[i].pizzasSold, userLocation.hourlyLocationData[i].deliveriesMade, userLocation.hourlyLocationData[i].driversNeeded]);
  userLocation.appendChild(deathRow);
};
var userTableHeading = document.createElement('h1');
userTableHeading.textContent = locationName;
userLocation.appendChild(userTableHeading);
userLocationSection.appendChild(userTable);
var locationName = event.target.getlocation.value;
var firstTime = event.taget.dataTime.value;

var minPizzasSold = event.target.minPizzasSold.value;

var maxPizzasSold = event.target.maxPizzasSold.value;

var minDeliveriesMade = event.target.minDeliveriesMade.value;

var maxDeliveriesMade = event.target.maxDeliveriesMade.value;

var userLocation = newPizzaLocation(locationName);

userLocation.pushSalesData(firstTime, minPizzasSold, maxPizzasSold, minDeliveriesMade, maxDeliveriesMade);

console.log(userLocation);
