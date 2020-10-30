// If the array doesn't have values
// at index 3 - 5, JS will insert <empty_values> for each index
// attempting to fetch a value at an empty_value will result in 'undefined'
// NOTE: empty_value is not the same as the value undefined, it's just what
// is returned when evaluating an index that has one.
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers);
console.log(numbers[6]);


// How can you determine whether a given string
// ends with an exclamation mark (!)?
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!"); // true
str2.endsWith("!"); // false


// check for existence of a property on an object
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
ages.hasOwnProperty('Spot');


// return capitalized version of string
let munstersDescription = "the Munsters are CREEPY and Spooky.";

// 1. slice from index 1 to -1 and call toLowerCase
// 2. save index 0 and call toUpperCase
// 3. concat the strings together

// OR

// 1. call toLowerCase on the string
// 2. get the value of the first index
// 3. call replace on the string replacing that value with an upper case version
//    of the value

// solution
// substring returns a section of the string from starting index to end index OR
// starting index till end of string

// charAt returns the UTF-16 code unit at the specified index of the string
const capitalizedStr = munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();


// Merge two objects together
// Object.assign will mutate the ages object because of how Object.assign is
// designed.  If you want a new object, pass an empty object {} as the first
// argument
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);


// check for the string Dino in the following strings
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// my solution
str1.indexOf('Dino') > -1;
str2.indexOf('Dino') > -1;

// other solutions
str1.includes('Dino');

str2.match('Dino') !== null;
