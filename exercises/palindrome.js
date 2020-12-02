// Write a function that returns true if the string passed as
// an argument is a palindrome, or false otherwise.
// A palindrome reads the same forwards and backwards.
// For this problem, the case matters and all characters matter.

// PEDAC
// P
// - what is a palindrome?
// - a string that is the same forward and backwards
// INPUT
// string
// OUTPUT
// boolean
// EXPLICIT reqs
//  - case sensitive
// IMPLICIT
//  - handle empty strings? // technically it's false since there are no chars
//    to compare?
//  - if input is not a string?

// E
// input: abba, output: true
// input: abcd, output: false

// D
// String for comparison
// Array for reversing the string

// A
// SET str argument
// SET reversedStr = reverse the string
// compare str to reversedStr

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');

  console.log(str === reversedStr);
  return str === reversedStr;
}

function isRealPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/\W/g, '');
  console.log(cleanStr);

  return isPalindrome(cleanStr);
}

function isPalindromicNumber(num) {
  return isPalindrome(String(num));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true