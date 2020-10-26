const readline = require('readline-sync');
const messages = require('./mortgage_calculator_messages.json');

const prompt = (text) => {
  console.log(`\n-> ${text}`);
};

const numberToCurrency = (number) => (
  `$${number.toFixed(2)}`
);

const validNumber = (number) => (
  number.trimStart() === '' || Number.isNaN(Number(number))
);

const getValidNumber = () => {
  let number = readline.question();
  while (validNumber(number)) {
    console.log(messages['error']['invalid_number']);
    number = readline.question();
  }

  return number;
};

const getNumberGreaterThanZero = () => {
  let number = getValidNumber();

  while (number <= 0) {
    console.log(messages['error']['greater_than_zero']);
    number = getValidNumber();
  }

  return Number(number);
};

const getWholeNumber = () => {
  let number = getValidNumber();

  while (number < 0) {
    console.log(messages['error']['negative_number']);
    number = getValidNumber();
  }

  return Number(number);
};

const calculateMonthlyPayment = (loanAmount, apr, loanDurationMonths) => {
  const monthlyInterestRate = (apr / 100) / 12;
  return loanAmount * (
    monthlyInterestRate /
    (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths)))
  );
};

while (true) {
  console.clear();

  console.log(`--- ${messages['title']}---`);

  // Loan Amount
  prompt(messages['question']['loan_amount']);
  let loanAmount = getNumberGreaterThanZero();

  // APR
  prompt(messages['question']['apr']);
  const apr = getWholeNumber();

  // Loan duration
  prompt(messages['question']['loan_duration_years']);
  const loanDurationYears = getNumberGreaterThanZero();

  prompt(messages['question']['loan_duration_months']);
  let loanDurationMonths = getWholeNumber();
  // convert years to months and increment total months
  loanDurationMonths += loanDurationYears * 12;

  // Calculate
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount, apr, loanDurationMonths
  );
  const totalPayment = monthlyPayment * loanDurationMonths;
  const totalInterest = totalPayment - loanAmount;

  // Display results
  console.log('\n-----------------------------------');
  console.log(`${messages['monthly_payment']}: ${numberToCurrency(monthlyPayment)}`);
  console.log(
    `${messages['total_payment']} (${loanDurationMonths} months): ${numberToCurrency(totalPayment)}`
  );
  console.log(`${messages['total_interest']}: ${numberToCurrency(totalInterest)}`);
  console.log('-----------------------------------');

  // Another Calculation?
  prompt(messages['question']['another_calculation']);
  let anotherCalculation = readline.question().toLowerCase();
  while (!['y', 'n'].includes(anotherCalculation)) {
    prompt(messages['error']['not_y_or_n']);
    anotherCalculation = readline.question().toLowerCase();
  }

  if (anotherCalculation === 'n') {
    console.log('Bye!!!');
    break;
  }
}