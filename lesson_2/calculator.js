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

let performMoreCalculations = messages.yes;

while (performMoreCalculations === messages.yes) {
  console.clear();

  prompt(messages.welcome);

  prompt(messages.question.first_number);
  let number1 = getValidNumberFromUser();

  prompt(messages.question.second_number);
  let number2 = getValidNumberFromUser();

  prompt(messages.question.operation_selection);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.error.bad_operation_selection);
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

  prompt(`${messages.result}: ${output}`);

  prompt(messages.question.another_calculation);
  performMoreCalculations = readline.question().toLowerCase();
  while (![messages.yes, 'n'].includes(performMoreCalculations)) {
    prompt(messages.error.bad_continuation_selection);
    performMoreCalculations = readline.question();
  }
}