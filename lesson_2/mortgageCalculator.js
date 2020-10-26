const readline = require('readline-sync');
const messages = require('./mortgage_calculator_messages.json');

const prompt = (text) => {
  console.log(`-> ${text}`);
};

const validFloat = (float) => Number.isNaN(parseFloat(float));

const getValidFloatFromUser = () => {
  let float = parseFloat(readline.question());
  while (validFloat(float)) {
    console.log("Hmm... that doesn't look like a valid number");
    float = parseFloat(readline.question());
  }

  return float.toFixed(2);
};

console.log(messages['title']);

prompt(messages['questions']['loan_amount']);
const loanAmount = getValidFloatFromUser();

prompt(messages['questions']['apr']);
const apr = getValidFloatFromUser();

