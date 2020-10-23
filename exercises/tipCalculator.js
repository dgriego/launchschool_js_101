// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00

const ReadlineSync = require('readline-sync');

console.log('What is the bill?');
const bill_total = parseFloat(ReadlineSync.prompt());
console.log(bill_total)

console.log('What is the tip percentage?');
const tip_decimal = parseInt(ReadlineSync.prompt(), 10) / 100;
const tip_amount = bill_total * tip_decimal;

console.log(`The tip is $${tip_amount.toFixed(2)}`);
console.log(`The total is $${(bill_total + tip_amount).toFixed(2)}`);
