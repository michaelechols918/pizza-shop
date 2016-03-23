var time = ['8:00', '9:00', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00',
'4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '1:00',
'2:00'];

var ulTagOne = document.getElementById('ballard');
var ulTagTwo = document.getElementById('first-hill');
var ulTagThree = document.getElementById('int-dist');
var ulTagFour = document.getElementById('south-lake-union');
var ulTagFive = document.getElementById('george-town');
var ulTagSix = document.getElementById('ravenna');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getSalesData(time, minPizza, maxPizza, minDelivery, maxDelivery){
  var randomPizza = getRandomIntInclusive (minPizza, maxPizza);
  var randomDelivery = getRandomIntInclusive(minDelivery, maxDelivery);
  return {
    time: time,
    pizzasSold: randomPizza,
    deliveriesMade: randomDelivery
  };

  console.log('8am-11am random pizzas: ' + randomPizza + ' random deliveries: ' + randomDelivery);
}

function createLocation(name){
  var storedLocation = {
    name: name,
    salesData: []
  };

  var eightOClock = getSalesData('8am', 0, 4, 0, 4);
  storedLocation.salesData.push(eightOClock);
  var nineOClock = getSalesData('9am', 0, 4, 0, 4);
  storedLocation.salesData.push(nineOClock);
  var tenOClock = getSalesData('10am', 0 ,4, 0, 4);
  storedLocation.salesData.push(tenOClock);
  var elevenOClock = getSalesData('11am', 0 ,7, 0, 4);
  storedLocation.salesData.push(elevenOClock);
  var twelveOClock = getSalesData('12am', 0 ,7, 0, 4);
  storedLocation.salesData.push(twelveOClock);
  var oneOClock = getSalesData('1pm', 0 ,7, 0, 4);
  storedLocation.salesData.push(oneOClock);
  var twoOClock = getSalesData('2pm', 2, 15, 1, 4);
  storedLocation.salesData.push(twoOClock);
  var threeOClock = getSalesData('3pm', 2, 15, 1, 4);
  storedLocation.salesData.push(threeOClock);
  var fourOClock = getSalesData('4pm', 2, 15, 1, 4);
  storedLocation.salesData.push(fourOClock);
  var fiveOClock = getSalesData('5pm', 15, 35, 3, 8);
  storedLocation.salesData.push(fiveOClock);
  var sixOClock = getSalesData('6pm', 15, 35, 3, 8);
  storedLocation.salesData.push(sixOClock);
  var sevenOClock = getSalesData('7pm', 15, 35, 3, 8);
  storedLocation.salesData.push(sevenOClock);
  var eightOClockPm = getSalesData('8pm', 2, 15, 1, 4);
  storedLocation.salesData.push(eightOClockPm);
  var nineOClockPm = getSalesData('9pm', 2, 15, 1, 4);
  storedLocation.salesData.push(nineOClockPm);
  var tenOClockPm = getSalesData('10pm', 2, 15, 1, 4);
  storedLocation.salesData.push(tenOClockPm);
  var elevenOClockPm = getSalesData('11pm', 5, 20, 6, 11);
  storedLocation.salesData.push(elevenOClockPm);
  var twelveOClockAm = getSalesData('11pm', 5, 20, 6, 11);
  storedLocation.salesData.push(twelveOClockAm);
  var oneOClockAm = getSalesData('11pm', 5, 20, 6, 11);
  storedLocation.salesData.push(oneOClockAm);
  var twoOClockAm = getSalesData('11pm', 5, 20, 6, 11);
  storedLocation.salesData.push(twoOClockAm);
  return storedLocation;
}

var ballard = createLocation('ballard');
var firstHill = createLocation('first-hill');
var intDist = createLocation('int-dist');
var southLakeUnion = createLocation('south-lake-union');
var georgeTown = createLocation('george-town');
var ravenna = createLocation('ravenna');
// get access to the ballard ul
var ballardUL = document.getElementById(ballard.name);
var firstHillUL = document.getElementById(firstHill.name);
var intDistUL = document.getElementById(intDist.name);
var southLakeUnionUL = document.getElementById(southLakeUnion.name);
var georgeTownUL = document.getElementById(georgeTown.name);
var ravennaUL = document.getElementById(ravenna.name);

// add the data
var eightAmLi = document.createElement('li');
eightAmLi.textContent = ballard.salesData[0].time + ' ' + ballard.salesData[0].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(eightAmLi);
var nineAmLi = document.createElement('li');
nineAmLi.textContent = ballard.salesData[1].time + ' ' + ballard.salesData[1].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(nineAmLi);
var tenAmLi = document.createElement('li');
tenAmLi.textContent = ballard.salesData[2].time + ' ' + ballard.salesData[2].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(tenAmLi);
var elevenAmLi = document.createElement('li');
elevenAmLi.textContent = ballard.salesData[3].time + ' ' + ballard.salesData[3].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(elevenAmLi);
var twelvePmLi = document.createElement('li');
twelvePmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(twelvePmLi);
var onePmLi = document.createElement('li');
onePmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(onePmLi);
var twoPmLi = document.createElement('li');
twoPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(twoPmLi);
var threePmLi = document.createElement('li');
threePmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(threePmLi);
var fourPmLi = document.createElement('li');
fourPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(fourPmLi);
var fivePmLi = document.createElement('li');
fivePmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(fivePmLi);
var sixPmLi = document.createElement('li');
sixPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(sixPmLi);
var sevenPmLi = document.createElement('li');
sevenPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(sevenPmLi);
var eightPmLi = document.createElement('li');
eightPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(eightPmLi);
var ninePmLi = document.createElement('li');
ninePmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(ninePmLi);
var tenPmLi = document.createElement('li');
tenPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(tenPmLi);
var elevenPmLi = document.createElement('li');
elevenPmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(elevenPmLi);
var twelveAmLi = document.createElement('li');
twelveAmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(twelveAmLi);
var oneAmLi = document.createElement('li');
oneAmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(oneAmLi);
var twoAmLi = document.createElement('li');
twoAmLi.textContent = ballard.salesData[4].time + ' ' + ballard.salesData[4].pizzasSold + ' ' + ballard.salesData[1].deliveriesMade;
ballardUL.appendChild(twoAmLi);


// Duncans Notes below VVVVVVV
// function getRandomIntInclusive(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// function addHourlySalesDataToLocation(storedLocation, pizzaSold, deliveriesMade){
//   storedLocation.hourlyData.push({
//     time: time,
//     pizzaSold: pizzaSold,
//     deliveriesMade: deliveriesMade,
//     driversNeeded: Math.ceil(deliveriesMade / 3)
//   });
//
//   var ballard = {
//     name: 'ballard',
//     hourlyData:[]
//   };
//   addHourlySalesDataToLocation(ballard, '8:00am', getRandomIntInclusive(0,4), getRandomIntInclusive(0,4));
//   var ballardUL = document.getElementById(ballard.name);
//   var eightOClockli;
//   for (var i = 0; i < ballard.hourlyData.length; i++){
//     eightOClockli = document.createElement('li');
//     eightOClockli.textcontent = ballardUL.hourlyData[0].time + ' pizzas sold:' +
//   ballard.hourlyData[i].pizzaSold;
//     ballardUL.appendChild(eightOClockli);
//   }
// }
// addHourlySalesDataToLocation();
