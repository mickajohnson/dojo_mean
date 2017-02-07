function runningLogger(){
  console.log("I am running");
}

function multiplyByTen(num){
  return num * 10;
}
// console.log(multiplyByTen(5));

function stringReturnOne(){
  return "Hello?";
}

function stringReturnTwo(){
  return "Hello!!!";
}

function caller(x){
  if (typeof(x) == "function"){
    x();
  }
}
// caller(runningLogger)

function myDoubleConsoleLog(x, y){
  if (typeof(x) == "function"){
    console.log(x());
  }
  if (typeof(y) == "function"){
    console.log(y());
  }
}
// myDoubleConsoleLog(stringReturnTwo, stringReturnOne)

function callerTwo(x){
  console.log("starting");
  setTimeout(caller, 2000, x);
  console.log("ending?");
  return "interesting";
}
myDoubleConsoleLog(callerTwo(runningLogger), stringReturnOne);
