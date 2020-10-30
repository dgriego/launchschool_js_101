/* eslint-disable max-lines-per-function */
// first two numbers are 1 - by definition
// each subsequent number is a sum of the two previous numbers

// function that calculates and returns the index of the first Fibonacci number
// that has the number of digits specified by the argument

// number of digits refers to the actual number of digits in a number
// 1 = 1
// 23 = 2
// 111 = 3
// ...
// return the index of the number that has the number of digits specified

// first I need to actually print out the fibonacci sequence
// order matters so I think I could start adding each value to an array
// starting with 1
// [1, 1]
// set starting_index = 2
// begin loop
//   add the two previous index values together
//   index[2 - 2] (1) + index [2 - 1] (1) = 2
//   add this value ^ to array of fibonacci numbers
//   at this point should be [1, 1, 2]

// next part is to determing number of digits
// 1. convert to string then count the string length?
// or
// 2. get 10 ^ (number - 1) and then divide to see if it is divisible

function findFibonacciIndexByLength(num) {
  let fibonacciSequence = [1, 1];
  let idx = 2;
  let idxOfFibonnaci = null;

  try {
    while (true) {
      const nextFibNum =
        fibonacciSequence[idx - 2] + fibonacciSequence[idx - 1];

      if (nextFibNum >= Number.MAX_SAFE_INTEGER) {
        throw new Error('hell');
      }

      fibonacciSequence.push(nextFibNum);

      if (Math.floor(nextFibNum / (10 ** (num - 1))) === 1) {
        idxOfFibonnaci = idx + 1;
      }

      idx += 1;

      if (idxOfFibonnaci) break;
    }
  } catch (error) {
    console.log(error.message);
  }

  console.log(idxOfFibonnaci);
  return idxOfFibonnaci;
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(30);      // 74