// ask the user for the first number
// parse the string as a float
// ask the user for the second number
// parse the string as a float
// ask for the operation to perform
// perform the calculation and display result to the user

const readline = require('readline-sync');

const prompt = (message) => console.log(`=> ${message}`);

const invalidNumber = (number) => (
  number.trimStart() === '' || Number.isNaN(Number(number))
);

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();
while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();
while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
number1 = Number(number1);
number2 = Number(number2);
switch (operation) {
  case '1':
    output = number1 + number2;
    break;
  case '2':
    output = number1 - number2;
    break;
  case '3':
    output = number1 * number2;
    break;
  case '4':
    output = number1 / number2;
    break;
}

prompt(`The result is: ${output}`);