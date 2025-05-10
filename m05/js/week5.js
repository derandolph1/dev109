/*
DEV109 - M05 Assignment - Multiplication Table
Deena Randolph
05/10/25
*/
// Declare product variable and element variable for printing.
var product = 0
var el = document.getElementById('blackboard')

//Create message variable and add to text
var message = "Multiplication Table"
text = '<h2>' + message + '</h2>';

//Prompt user for base number 
var userInput = prompt('Enter a number from 0-10: ');
if (userInput == null) { //if no number given use 0
  userInput = 0;
} 

//Loop through table and add results to text
for (var i = 0; i < 11; i++) {
  product = userInput * i
  text += i + ' x ' + userInput + ' = ' + product + '<br>';
}

//print text to blackboard
el.innerHTML = text

