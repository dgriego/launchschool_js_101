/* eslint-disable max-len */
// P
// INPUT: integer
// OUTPUT: integer
// REQUIREMENTS:
//  explicit:
//   - return an integer doubled if it is not a double number
//   - return the argument as-is if the number is a double number
//  implicit:
//   - if a number doesn't have an even number of digits it is not a
//     double number

// Examples
// twice(number=233) => return (233 * 2)
// twice(number=3333) => return 3333

// Data Structure
// I can evaluate the digits if I convert to string and then split or slice
// that string into two different sections to evaluate
// String + Array

// Algorithm
// logic for checking for a double number
// given a string representation
//  - '4444', it's length is 4
//  - index 0 to 1 is half the string
//  - index 2 to 3 is second half of string
//  - compare first half to second half
//  -
//  - end index of first half (length of string / 2) - 1 = 1
//  - (0, endIndex)
//  - (length of string / 2) = 2
//  - ((length of string / 2), length of string)
//
// SET doubleNumStr = argument to string
// if doubleNumStr.length % 2 === 1; return argument * 2;
//
// set first half of string = string.slice(0, (length of string / 2))
// set second half of string = string.slice(length of string / 2);
//
// compare first half to second half
// if there is a match
//  return argument;
// else
//  return argument * 2;


// C
function twice(number) {
  const doubleNumberStr = String(number);
  const doubledNumber = number * 2;
  if (doubleNumberStr.length % 2 === 1) return doubledNumber;

  const leftSection = doubleNumberStr.slice(0, (doubleNumberStr.length / 2));
  const rightSection = doubleNumberStr.slice(doubleNumberStr.length / 2);

  if (leftSection === rightSection) {
    return number;
  }

  return doubledNumber;
}

console.log(twice(37));         // 74
console.log(twice(44));         // 44
console.log(twice(334433));     // 668866
console.log(twice(444));        // 888
console.log(twice(107));        // 214
console.log(twice(103103));     // 103103
console.log(twice(3333));       // 3333
console.log(twice(7676));       // 7676