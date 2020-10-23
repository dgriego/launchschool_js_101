// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// 1 loop until the number entered has been reached
// if sum then I will increment a value from 1 to that number
// if product then I will increment with multiplication

const ReadlineSync = require('readline-sync');

let initial_int = 0;

while (initial_int <= 0) {
  console.log('Please enter an integer greater than 0:');
  initial_int = parseInt(ReadlineSync.prompt());
}