// ask a users name
// greet the user
// if user writes 'name!', computer yells back to the user

const ReadlineSync = require('readline-sync');

let name = ReadlineSync.question("What is your name?\n");

// check last index of string for !
// regex to check for !
if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}, WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}