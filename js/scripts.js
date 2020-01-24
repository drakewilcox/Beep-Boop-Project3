// BUSINESS LOGIC 
// var number 
var newArray = []
var beepBoop = function(number){
  var total = 0;
  for( var currentNumber = 0; currentNumber < number; currentNumber ++){
    
    {currentNumber+1;}
    console.log(currentNumber)
    newArray.push(currentNumber)
  }
  console.log(newArray);
  return (newArray.join(' '));
  // return currentNumber;
}







// USER LOGIC
$(document).ready(function(){
  $("#formOne").submit(function(event){
    
    var number = parseInt($("input#numberInput").val());
   
    var result = beepBoop(number);
    console.log(result)
    $("#result").append(result);
    event.preventDefault();
  });
});