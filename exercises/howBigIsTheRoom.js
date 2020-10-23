// Build a program that asks the user to enter the length and width
// of a room in meters, and then logs the area of the room to the
// console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

const ReadlineSync = require('readline-sync');
const METERS_TO_FEET = 10.7639;

const length = parseInt(ReadlineSync.question("Enter the length of the room in meters:\n"), 10);
const width = parseInt(ReadlineSync.question("Enter the width of the room in meters:\n"), 10);

const area_in_meters = (length * width).toFixed(2);
const area_in_feet = (area_in_meters * METERS_TO_FEET).toFixed(2);

console.log(
  `The area of the room is ${area_in_meters} square meters (${area_in_feet} square feet).`
);