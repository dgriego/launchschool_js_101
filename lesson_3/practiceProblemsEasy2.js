// return new string that replaces every occurrence
// of the word "important" with "urgent"

// use regex to replace globally within the string using the 'g' flag at the end
let advice = "Few things in life are as important as house important training your pet dinosaur.";
advice.replace(/important/gi, 'urgent');
console.log(advice);


// Question 2
// - one way would be to create a new array of the original array before
//   performing the reverse or sort?
//
// - using forEach to copy all of the values to a new Arr
// - use slice to create a new Arr

// create new array then reverse
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

// use spread syntax to create a new array
let numbers2 = [1, 2, 3, 4, 5];
let sortedArray = [...numbers2].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers2); // [1, 2, 3, 4, 5]

// use forEach and unShift
let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]


// Question 3
// determine whether a number is included in the arr
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];
numbers.includes(15);


// Question 4
// two ways to add part of a string in front of another string
// Add "Four score and" in front of it
let famousWords = "seven years ago...";
`Four score and ${famousWords}`
'Four score and ' + famousWords;
'Four score and '.concat(famousWords);


// Question 5
let numArr = [1, 2, 3, 4, 5];
numArr.splice(2, 1); // (index, how many to delete from that index);


// Question 6
let flintstones = ["Fred", "Wilma"];
// will create ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// create an un-nested format
// const sect1 = ["Barney", "Betty"];

// 1. first way uses push with spread syntax
// 2. uses concat
flintstones = flintstones.concat(["Barney", "Betty"]);

// spread
flintstones = [...flintstones];

// flattening an array of arrays
let newFlintstones = [];
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});