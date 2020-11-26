// Write a program that solicits six numbers from the user,
// then logs a message that describes whether or not the
// sixth number appears amongst the first five numbers.

// Input: asking user for six numbers: string
// Output: undefine (logging to the console)
// questions
//  - do I need to convert these to numbers?

// examples
// prompt for 6 numbers
// user gives 1, 2, 3, 4, 5, 6
// message will output
// 6 does not appear with the rest

// user gives 1, 1, 3, 4, 5, 1
// 1 does appear amongst the rest

// Data structure
// Array, because I want to check if value is uniquely represented in
// previous elements
// - don't want to use string because then input values won't be separate
//   without extra work
// [1, 2, 3, 4, 5]

// A
// SET firstFive = []
// SET COUNTER = 1
// WHILE counter < 6
//  prompt user for number
//  add number to firstFive array
//  increment counter
// END
//
// prompt for last value (lastValue)
//
// if lastValue is included in firstFive array
//   log true message
// else
//   log false message
const readline = require('readline-sync');
let firstFive = [];

for (let i = 1; i < 6; i++) {
  let number = null;

  switch (i) {
    case 1:
      number = readline.question('Enter the 1st number: ');
      firstFive.push(number);
      break;
    case 2:
      number = readline.question('Enter the 2nd number: ');
      firstFive.push(number);
      break;
    case 3:
      number = readline.question('Enter the 3rd number: ');
      firstFive.push(number);
      break;
    default:
      number = readline.question(`Enter the ${i}th number: `);
      firstFive.push(number);
      break;
  }
}

let lastNumber = readline.question('Enter the last number: ');

if (firstFive.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${firstFive}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${firstFive}`);
}