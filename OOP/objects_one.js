// function VehicleConstructor(name, wheelNumber, passengerNumber){
//   var vehicle = {};
//   vehicle.name = name;
//   vehicle.wheelNumber = wheelNumber;
//   vehicle.passengerNumber = passengerNumber;
//
//   vehicle.makeNoise = function(){
//     console.log("Beep");
//   };
//   return vehicle;
// }
//
// var Bike = VehicleConstructor("Bike", 2, 1);
// Bike.makeNoise = function(){
//   console.log("ring ring");
// };
//
// var Sedan = VehicleConstructor("Sedan", 4, 5);
// Sedan.makeNoise = function(){
//   console.log("Honk Honk!");
// };
//
// var Bus = VehicleConstructor("Bus", 10, 1);
// Bus.takePassengers = function(number){
//   Bus.passengerNumber += number;
// };
//
// console.log(Bus.passengerNumber);
// Bus.takePassengers(8);
// console.log(Bus.passengerNumber);

function VehicleConstructor(name, wheelNumber, passengerNumber, speed){
  var self = this;
  var distance_traveled = 0;
  this.name = name;
  this.wheelNumber = wheelNumber;
  this.passengerNumber = passengerNumber;
  this.speed = speed;
  var updateDistanceTraveled = function(){
    distance_traveled += self.speed;
  };
  this.makeNoise = function(){
    console.log("Beep");
  };
  this.move = function(){
    updateDistanceTraveled();
    self.makeNoise();
  };
  this.checkMiles = function(){
    console.log(distance_traveled);
  };
}

var Bike = new VehicleConstructor("Bike", 2, 1, 1);
Bike.checkMiles();
Bike.move();
Bike.checkMiles();

var Sedan = new VehicleConstructor("Sedan", 4, 5, 10);
Sedan.makeNoise = function(){
  console.log("Honk Honk!");
};

var Bus = new VehicleConstructor("Bus", 10, 1, 2);
Bus.pickUpPassengers = function(number){
  Bus.passengerNumber += number;
};
