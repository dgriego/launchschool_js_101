// P
// INPUT: number
// OUTPUT: string
// REQUIREMENTS:
//   - convert number to string representing century the year is in
// IMPLICIT:
//   - number arg is positive
//
// how do you determine a century?
//   - a century is 100 years
//   - new centuries begin in years that end with 01

// if <= 100 => 1st century

// D
// number

// A
// set
// divide year by 100 to determine century
// if remainder of ^ is === 0, subtract by 1
//
// 1st, 2nd, 3rd, 4th
// 21st, 22nd,
// 10th, 11th, 12th
// if last two numbers are between 10 and 20 -> th
// if last number is 1 -> st
// if last number is 2 -> nd
// if last number is 3 -> rd
// else -> th
//
// if year <= 100 ->
//  set century to 1
//
// century = year / 100 (might want to use Math.floor)
// if (year % 100 === 0)
//   subtract century value by 1
//
// addCenturyString
//  convert number to string
//  set tensNum =
//  get last two chars and convert to int
//  if number is between 11 and 19 || number % 10 === 0
//    add th
//  if number % 10 === 1
//    add st
//  if number % 10 === 2
//    add nd
//  if number % 10 === 3
//    add rd

function ordinalString(num) {
  let tensNum = Number(String(num).slice(-2));
  let ordinal = '';

  if ((tensNum > 10 && tensNum < 20) || tensNum % 10 === 0) {
    ordinal = 'th';
  } else if (tensNum % 10 === 1) {
    ordinal = 'st';
  } else if (tensNum % 10 === 2) {
    ordinal = 'nd';
  } else {
    ordinal = 'rd';
  }

  return ordinal;
}

function getCentury(year) {
  let century = Math.floor(year / 100);

  if (century <= 1) {
    century = 1;
  } else if (year % 100 >= 1) {
    century += 1;
  }

  return `${century}${ordinalString(century)}`;
}

console.log(getCentury(2000));        // "20th"
console.log(getCentury(2001));        // "21st"
console.log(getCentury(1965));        // "20th"
console.log(getCentury(256));         // "3rd"
console.log(getCentury(5));           // "1st"
console.log(getCentury(10103));       // "102nd"
console.log(getCentury(1052));        // "11th"
console.log(getCentury(1127));        // "12th"
console.log(getCentury(11201));       // "113th"