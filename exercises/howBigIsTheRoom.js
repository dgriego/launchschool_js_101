// Build a program that asks the user to enter the length and width
// of a room in meters, and then logs the area of the room to the
// console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

const { readlinkSync } = require('fs');
const ReadlineSync = require('readline-sync');
const SQMETERS_TO_FEET = 10.7639;
let unit_type = '';
let unit_type_alternate = '';

while (unit_type === '') {
  console.log("Will you be entering in meters or feet?");
  unit_type = ReadlineSync.prompt().toLowerCase();

  if (unit_type !== 'meters' && unit_type !== 'feet') {
    unit_type = '';
  }
}

unit_type_alternate = unit_type === 'meters' ? 'feet' : 'meters';

console.log(`Enter the length of the room in ${unit_type}`);
const length = parseInt(ReadlineSync.prompt(), 10);

console.log(`Enter the width of the room in ${unit_type}:`);
const width = parseInt(ReadlineSync.prompt(), 10);

const area = length * width;
let area_alternate = 0;

if (unit_type === 'meters') {
  area_alternate = (area * SQMETERS_TO_FEET).toFixed(2);
} else {
  area_alternate = (area / SQMETERS_TO_FEET).toFixed(2);
}

// const length = parseInt(ReadlineSync.question("Enter the length of the room in meters:\n"), 10);
// const width = parseInt(ReadlineSync.question("Enter the width of the room in meters:\n"), 10);

// const area_in_meters = (length * width).toFixed(2);
// const area_in_feet = (area_in_meters * SQMETERS_TO_FEET).toFixed(2);

console.log(
  `The area of the room is ${area} square ${unit_type} (${area_alternate} square ${unit_type_alternate}).`
);