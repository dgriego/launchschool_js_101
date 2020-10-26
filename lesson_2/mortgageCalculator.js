const readline = require('readline-sync');
const messages = require('./mortgage_calculator_messages.json');

const prompt = (text) => {
  console.log(`-> ${text}`);
};

const validFloat = (float) => Number.isNaN(parseFloat(float));
const validNumber = (float) => Number.isNaN(parseInt(float, 10));

const getValidFloatFromUser = () => {
  let float = parseFloat(readline.question());
  while (validFloat(float)) {
    console.log(messages['error']['invalid_number']);
    float = parseFloat(readline.question());
  }

  return float.toFixed(2);
};

const getValidNumberFromUser = () => {
  let number = parseInt(readline.question(), 10);
  while (validNumber(number)) {
    console.log(messages['error']['invalid_number']);
    number = parseInt(readline.question(), 10);
  }

  return number;
};

console.log(messages['title']);

prompt(messages['question']['loan_amount']);
const loanAmount = getValidFloatFromUser();

prompt(messages['question']['apr']);
const apr = getValidFloatFromUser();

prompt(messages['question']['loan_duration_years']);
const loanDurationYears = getValidNumberFromUser();

prompt(messages['question']['loan_duration_months']);
const loanDurationMonths = getValidNumberFromUser();