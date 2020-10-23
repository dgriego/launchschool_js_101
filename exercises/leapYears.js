// leap years occur:
// - years evenly divisible by 4 but not 4 && 100.
// - years evenly divisible by 100 && 400.

// if divisible by 4 && not divisible by 100

// if divisible by 100 && divisible by 400

// any year greater than 0

function isLeapYear(year) {
  let isLeapYear = false;

  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 400 === 0)
  ) {
    isLeapYear = true;
  }

  return isLeapYear;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true