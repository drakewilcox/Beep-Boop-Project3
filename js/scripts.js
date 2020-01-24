// BUSINESS LOGIC 
// var number 
var newArray = []
var beepBoop = function(number){
  var total = 0;
  for( var currentNumber = 0; currentNumber <= number; currentNumber ++){
    
    {currentNumber+1;}
    console.log(currentNumber)
    newArray.push(currentNumber + "<br>")
    var output = currentNumber.toString();
    if (output.includes ("3")){
      newArray.splice(currentNumber, 1, "'I'm sorry, Dave. I'm afraid I can't do that.'<br>")
    }
    else if (output.includes("2")){
      newArray.splice(currentNumber, 1, "'Boop!'<br>")
    }
    else if (output.includes("1")){
      newArray.splice(currentNumber, 1, "'Beep!'<br>")
    }
  }
  console.log(newArray);
  
  
 return (newArray.join(' '));
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