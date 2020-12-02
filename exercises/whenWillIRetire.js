// write a program that will log when a person will retire
// and how many years the user has tow ork until retirement

// to get the year they will retire, add the retirement age to the current year
// to get the years left, subtract desired retirement age by current age
// will have to convert age to a number to add to current year

const readline = require('readline-sync');

console.log('What is your age?');
const age = Number(readline.prompt().trim());

console.log('At what age would you like to retire');
const retirementAge = Number(readline.prompt().trim());

const yearsLeft = retirementAge - age;
const currentYear = (new Date()).getFullYear();
const retirementYear = currentYear + retirementAge;

console.log(`It's ${currentYear}.  You will retire in ${retirementYear}`);
console.log(`You have only ${yearsLeft} years of work to go`);