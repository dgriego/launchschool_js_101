// P

// requirements
// explicit:
//  - function that takes a positive integer (n > 0)
//  - logs to the console a triangle with n sides
//  - the hypotenuse should be on the left side and the right angle the right
//    when logging each row of the triangle to the console
//  - each row of the triangle will consist of stars(*)
// implicit:
//  - does not explicitly return a value
//  - most rows will consist of * and spaces ' '
//  - every row will have n amount of characters (combination of * and ' ')

// notes
//  - hypotenuse is the longest side of a right triangle
//    opposite the right angle
//  - what is output when n is 1?


// Examples
// triangle(3) => will log to the console:
//  *//
// **//
//***//
// in * and spaces this would translate to
// 2 spaces - 1 star
// 1 space - 2 stars
// 3 stars
// OR
// 2,1
// 1,2
// 3


// Data Structure
// 2 spaces - 1 star
// 1 space - 2 stars
// 3 stars
//
// want to log to the console each row in order, so order is important
// A String or Array could work since either can manipulated
// to log what is needed
//
// '***'
// ' **'
// '  *'
// OR
// ['*', '*', '*']
// [' ', '*', '*']
// [' ', ' ', '*']
//


// Algorithm
// approaches for printing out the correct format
// using strings:
// the number of stars for the first row if n is greater than 1
// n = 3
// 1st row
// 1 star + (n - 1) of spaces =>
// if n is 3 then n - 1 = 2
// so 2 spaces + 1 star
//
// 2nd row
// 2 star + (n - 2) of spaces =>
// so 1 space + 2 stars

// SET n = number argument
// SET counter = 1
//
// Begin loop
//   BREAK if counter > n
//   SET spaces = (n - counter) number of spaces(' ') => (n - counter)
//   SET stars = counter * (*)
//   OUTPUT spaces + stars

function triangle(rows) {
  for (let idx = 1; idx <= rows; idx += 1) {
    const spaces = ' '.repeat(rows - idx);
    const stars = '*'.repeat(idx);
    console.log(spaces + stars);
  }
}

triangle(100);