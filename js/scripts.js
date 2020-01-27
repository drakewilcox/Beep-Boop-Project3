// BUSINESS LOGIC 
var beepBoop = function(number){
  var newArray = []
  var total = 0;
  for( var currentNumber = 0; currentNumber <= number; currentNumber ++){
    newArray.push(currentNumber + "<br>")
    var output = currentNumber.toString();
    if (output.includes ("3")){
      newArray.splice(currentNumber, 1, "<strong>'I'm sorry, Dave. I'm afraid I can't do that.'<br></strong>")
    }
    else if (output.includes("2")){
      newArray.splice(currentNumber, 1, "<strong>'Boop!'<br></strong>")
    }
    else if (output.includes("1")){
      newArray.splice(currentNumber, 1, "<strong>'Beep!'<br></strong>")
    }
  }
  return (newArray).join("");
}
// USER LOGIC
$(document).ready(function(){
  $("#formOne").submit(function(event){
     event.preventDefault();
    var number = parseInt($("input#numberInput").val());
    var result = beepBoop(number);
    $("#result").html(result);
  });
});