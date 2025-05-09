/*
DEV109 - M05 Assignment - Multiplication Table
Deena Randolph
05/10/25
*/
//Display message
var message = "Multiplication Table"
document.write('<h2>' + message + '</h2>');

//Prompt user for number
var number = prompt('Please enter a number from 0-10: ')

//Loop and print output multiplication table
for (var i = 0; i < 11; i++) {
  document.write (number + ' * ' + i + ' = ' + number*i);
}

