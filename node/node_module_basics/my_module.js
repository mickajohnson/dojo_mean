module.exports = function(){
  return {
    greet: function(){
      console.log("We're using a module")
    },
    add: function(add1, add2){
      console.log("sum is :", add1 + add2)
    }
  }
}
