// BUSINESS LOGIC 
var beepBoop = function(number){
  var newArray = []
  for( var currentNumber = 0; currentNumber <= number; currentNumber ++){
    newArray.push(currentNumber + "<br>");
    var output = currentNumber.toString();
    if (output.includes ("3")){
      newArray.splice(currentNumber, 1, "<em>'I'm sorry, Dave. I'm afraid I can't do that.'<br></em>");
    } else if (output.includes("2")){
      newArray.splice(currentNumber, 1, "<em>'Boop!'<br></em>");
    } else if (output.includes("1")){
      newArray.splice(currentNumber, 1, "<em>'Beep!'<br></em>");
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
