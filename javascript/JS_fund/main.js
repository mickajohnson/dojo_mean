var x = [3.5, "Dojo", "rocks", "Michael", "Sensei"]
for (var i = 0; i < x.length; i++){
  console.log(x[i]);
}
x.push(100);
x.push(["hello", "world", "JavaScript is Fun"]);
console.log(x)
var sum = 0
for(var i = 1; i <= 500; i++){
  sum +=i;
}
console.log(sum)
var arr1 = [1, 5, 90, 25, -3, 0];
min = arr1[0];
sum = arr1[0]
for(var i = 1; i < arr1.length; i++){
  if (arr1[i] < min){
    min = arr1[i];
  }
  sum += arr1[i]
}
avg = sum/arr1.length
console.log(min)
console.log(avg)
var new_ninja = {
 name: 'Jessica',
 profession: 'coder',
 favorite_language: 'JavaScript',
 dojo: 'Dallas'
}
for (key in new_ninja){
  console.log(key + ':' + new_ninja[key]);
}
