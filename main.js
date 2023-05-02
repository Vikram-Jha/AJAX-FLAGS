const Car =  function(name, speed) {
  this.name = name;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed = this.speed + 10;
}

Car.prototype.brake= function(){
  this.speed = this.speed - 10;
  console.log(`${this.name} is decelerated and going at ${this.speed} km/h`);
}

const EV = function(name, speed, charge) {
    Car.call(this, name, speed);
    this.charge = charge;
};
  
EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge = this.charge - 1;
  console.log(`${this.name} is accelerated and going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = this.charge + chargeTo;
    console.log(`${this.name} is charged and going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const Tesla = new EV('Tesla', 140, 55);
console.log(Tesla);
Tesla.accelerate();
Tesla.brake();
Tesla.chargeBattery(20);



