const readline = require('readline-sync');
const VALID_CHOICES = [
  'rock', 'r', 'paper', 'p', 'scissors', 's', 'lizard', 'l', 'spock', 'sp'
];

function prompt(message) {
  console.log(`-> ${message}`);
}

function formatChoiceToWordValue(choice) {
  const wordRef = {
    r: 'rock',
    p: 'paper',
    s: 'scissors',
    l: 'lizard',
    sp: 'spock'
  };

  if (choice.length < 3) {
    return wordRef[choice];
  }

  return choice;
}

function win(choice, computerChoice) {
  const winningValuesRef = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };

  if (winningValuesRef[choice].includes(computerChoice)) {
    return true;
  }

  return false;
}

function displayChoices() {
  let displayStr = 'Choose one:';

  for (let idx = 0; idx < VALID_CHOICES.length; idx += 2) {
    displayStr += ` ${VALID_CHOICES[idx]}(${VALID_CHOICES[idx + 1]})`;
  }

  console.log(displayStr);
}

function displayWinner(choice, computerChoice) {
  if (win(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie");
  } else {
    prompt('Computer wins!');
  }
}

while (true) {
  displayChoices();
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  choice = formatChoiceToWordValue(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = formatChoiceToWordValue(VALID_CHOICES[randomIndex]);

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}