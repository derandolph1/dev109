/*
DEV109 - M05 Assignment - Multiplication Table
Deena Randolph
05/10/25
*/
var sum = 0
var el = document.getElementById('blackboard')
//Display message
var message = "Multiplication Table"
el.textContent = '<h2>' + message + '</h2>';

//Prompt user for number
var userInput = prompt('Enter a number from 0-10: ');
if (Number(userInput) == NaN) {
  userInput = 0;
} 

//Loop and print output multiplication table
for (var i = 0; i < 11; i++) {
  sum = userInput * i
  el.textContent = i + ' x ' + userInput + ' = ' + sum\n;
}

