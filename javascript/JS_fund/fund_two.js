function sum(x, y){
  sum = 0
  for(var i = x; i <= y; i++){
    sum +=i;
  }
  console.log(sum)
}

function minimum(arr){
  min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min
}

function average(arr){
  sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum += arr1[i];
  }
  avg = sum/arr.length;
  return avg;
}

var sum = function(x, y){
  sum = 0
  for(var i = x; i <= y; i++){
    sum +=i;
  }
  console.log(sum)
}

var minimum = function(arr){
  min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min
}

var average = function(arr){
  sum = arr[0];
  for(var i = 1; i < arr.length; i++){
    sum += arr1[i];
  }
  avg = sum/arr.length;
  return avg;
}

var object = {
  average: function(arr){
    sum = arr[0];
    for(var i = 1; i < arr.length; i++){
      sum += arr1[i];
    }
    avg = sum/arr.length;
    return avg;
  },
  minimum: function(arr){
    min = arr[0];
    for(var i = 1; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min
  },
  sum: function(x, y){
    sum = 0
    for(var i = x; i <= y; i++){
      sum +=i;
    }
    console.log(sum)
  }
}

var person = {
  name: "Mick",
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
person.walk()
console.log(person.distance_traveled);
