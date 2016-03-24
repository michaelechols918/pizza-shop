# Constructor Notes

## Creating an Object Constructor:
``` javascript
function Fighter(_name, _hp, _attack){
  this.name = _name;
  this.hp = _hp;
  this.attack = _attack;
}
```

## Creating Methods for the Object Constructor
``` javascript
Fighter.prototype.looseHealth = function(amountLost){
  this.hp -= amountLost;
  console.log(this.name + ' now has ' + this.hp + ' health points.');
}

Fighter.prototype.drinkHealthPotion = function(amountGained){
  this.hp += amountGained;
  console.log(this.name + ' now has ' + this.hp + ' health points.');
}

Fighter.prototype.useAttack = function(){
  console.log(this.name + ' just used ' + this.attack);
}
```

## Creating an Object from a Constructor
**this is called creating an instance of an object Constructor**
``` javascript
var crunch = new Fighter('crunch', 88, 'ca-pow');
```

## Using methods on an Instance of an object
``` javascript
crunch.looseHealth(10);
// crunch now has 78 health points.

crunch.drinkHealthPotion(20);
// crunch now has 98 health points.

crunch.useAttack();
// crunch just used ca-pow
```
