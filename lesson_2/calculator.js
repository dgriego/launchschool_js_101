const fs = require('fs');
const YAML = require('yaml');
const readline = require('readline-sync');

const prompt = (message) => console.log(`=> ${message}`);

const invalidNumber = (number) => (
  number.trimStart() === '' || Number.isNaN(Number(number))
);

const getValidNumberFromUser = () => {
  let number = readline.question();
  while (invalidNumber(number)) {
    prompt("Hmm... that doesn't look like a valid number.");
    number = readline.question();
  }

  return number;
};

let messages = YAML.parse(fs.readFileSync('./messages.yaml', 'utf8'));
prompt('english or espanol? e/s');
const language = readline.question().toLowerCase();
messages = language === 'e' ? messages.en : messages.es;

let performMoreCalculations = 'yes';

while (performMoreCalculations === 'yes') {
  console.clear();

  prompt('Welcome to Calculator!');

  prompt("What's the first number?");
  let number1 = getValidNumberFromUser();

  prompt("What's the second number?");
  let number2 = getValidNumberFromUser();

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

  prompt("Would you like to perform another calculation?\ntype 'yes' or 'no'");
  performMoreCalculations = readline.question().toLowerCase();
  while (!['yes', 'no'].includes(performMoreCalculations)) {
    prompt('Must choose yes or no');
    performMoreCalculations = readline.question();
  }
}