// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const ReadlineSync = require('readline-sync');

console.log('What is the bill?');
const bill_total = parseInt(ReadlineSync.prompt(), 10);

console.log('What is the tip percentage?');
const tip_decimal = parseInt(ReadlineSync.prompt(), 10) / 100;

console.log(tip_decimal);

