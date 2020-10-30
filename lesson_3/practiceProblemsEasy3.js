// Question 1
// Write three different ways to remove all of the
// elements from the following array:
let numbers = [1, 2, 3, 4];

// while (numbers.length > 0) {
//   numbers.shift();
// }

// while (numbers.length > 0) {
//   numbers.pop();
// }

numbers.length = 0;
numbers.splice(0, numbers.length);

// Question 2
// when using the + operator on two arrays
// it converts them to strings and then concats the strings
console.log([1, 2, 3] + [4, 5]); // 1,2,34,5