// prompts for two positive integers
// prints the results of
// - addition, subtraction, product, quotient, remainder, and power
// - +, -, *, /, %, **

const ReadlineSync = require('readline-sync');

console.log('==> Enter the first number:');
const num1 = parseInt(ReadlineSync.prompt(), 10);

console.log('==> Enter the second number:');
const num2 = parseInt(ReadlineSync.prompt(), 10);

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${num1 / num2}`);
console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);
console.log(`==> ${num1} ** ${num2} = ${Math.pow(num1, num2)}`);