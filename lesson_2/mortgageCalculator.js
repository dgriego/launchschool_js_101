// TODO
// 1. ensure a number great than 0 has been entered

const readline = require('readline-sync');
const messages = require('./mortgage_calculator_messages.json');

const prompt = (text) => {
  console.log(`-> ${text}`);
};

const validFloat = (float) => Number.isNaN(parseFloat(float));

const getValidFloatFromUser = () => {
  let float = parseFloat(readline.question());
  while (validFloat(float)) {
    console.log(messages['error']['invalid_number']);
    float = parseFloat(readline.question());
  }

  return float;
};

const calculateMonthlyPayment = (loanAmount, apr, loanDurationMonths) => {
  const monthlyInterestRate = (apr / 100) / 12;
  return loanAmount * (
    monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths)))
  );
};

console.log(messages['title']);

// Loan Amount
prompt(messages['question']['loan_amount']);
const loanAmount = getValidFloatFromUser();

// APR
prompt(messages['question']['apr']);
const apr = getValidFloatFromUser();

// Loan duration
prompt(messages['question']['loan_duration_years']);
const loanDurationYears = getValidFloatFromUser();

prompt(messages['question']['loan_duration_months']);
let loanDurationMonths = getValidFloatFromUser();
// convert years to months and increment total months
loanDurationMonths += loanDurationYears * 12;

// Calculate
const monthlyPayment = calculateMonthlyPayment(
  loanAmount, apr, loanDurationMonths
);
const totalPayment = monthlyPayment * loanDurationMonths;
const totalInterest = totalPayment - loanAmount;