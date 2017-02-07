function personConstructor(name){
  var person = {
    name: name,
    distance_traveled: 0,
    say_name: function(){
      console.log(person.name)
    },
    say_something: function(something){
      console.log(person.name  + " says " + something )
    },
    walk: function(){
      console.log(person.name + " is walking");
      person.distance_traveled += 3;
      return person;
    },
    run: function(){
      console.log(person.name + " is running");
      person.distance_traveled += 10;
      return person;
    },
    crawl: function(){
      console.log(person.name + " is crawling");
      person.distance_traveled += 1;
      return person;
    }
  }
  return person
}
var Jay = personConstructor("Jay")


function ninjaConstructor(name, cohort){
  var ninja = {
    name: name,
    cohort:cohort,
    beltLevel: "yellow",
    levelUp: function(){
      if (ninja.beltLevel == "yellow"){
        ninja.beltLevel = "red";
      }
      else if (ninja.beltLevel == "red"){
        ninja.beltLevel = "black";
      }
      return ninja
    }
  }
  return ninja;
}
Mick = ninjaConstructor("Mick", "January");
console.log(Mick.beltLevel);
Mick.levelUp();
console.log(Mick.beltLevel)
