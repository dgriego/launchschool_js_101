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
const SUM_TEXT = 's';
const PRODUCT_TEXT = 'p';

let user_int = 0;
while (user_int <= 0) {
  console.log('Please enter an integer greater than 0:');
  user_int = parseInt(ReadlineSync.prompt());
}

let compute_type = '';
while (compute_type !== SUM_TEXT && compute_type !== PRODUCT_TEXT) {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  compute_type = ReadlineSync.prompt();
}

let int_arr = [];
let incrementer = 1;
while (incrementer <= user_int) {
  int_arr.push(incrementer);
  incrementer += 1;
}

let computed_value = 0;
if (compute_type === SUM_TEXT) {
  computed_value = int_arr.reduce((acc, val) => acc + val);
} else {
  computed_value = int_arr.reduce((acc, val) => acc * val);
}

const computed_type_string = compute_type === SUM_TEXT ? 'sum' : 'product';
console.log(
  `The ${computed_type_string} of the integers between 1 and ${user_int} is ${computed_value}.`
)