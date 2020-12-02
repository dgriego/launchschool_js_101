// P
// INPUT: array of numbers
// OUTPUT: array of numbers of same size
//
// what is a running total?
// [2, 5, 13]
// a running total would be the sum of the previous pair of numbers being
// added to the next num in the sequence
// 2 + 5 = 7
// 7 + 13 = 20
// OUTPUT would be [2, 7, 20]

// EXPLICIT
// - output array must be same size as original
// IMPLICIT
// - empty array returns empty array
// - assume all values are numbers?

// E
// INPUT: [2, 5, 13]
// OUTPUT: [2, 7, 20]
//
// INPUT: [14, 11, 7, 15, 20]
// OUTPUT: [14, 25, 32, 47, 67]


// D
// array

// A
// mechanism for gather running total
// runningTotal that begins at 0 but is set to the sum of the
// current expression that is evaluated
// INPUT: [1, 2, 3]
// currentTotal = 0
// currentTotal = arr[0] + currentTotal (1 + 0) = 1
// [1]
//
// currentTotal = arr[1] + currentTotal (2 + 1) = 3
// [1, 3]
//
// currentTotal = arr[2] + currentTotal (3 + 3) = 6
// [1, 3, 6]

// START
//   set currentTotal = 0
//   set index = 0
//   set newArr = []
//
//   BEGIN
//   continue loop if index < arr.length
//   currentTotal = arr[index] + currentTotal
//   add value to newArr
//   index += 1
//   END
//
//   return newArr
// END

function runningTotal(arr) {
  let currentTotal = 0;

  return arr.map((num) => {
    currentTotal += num;
    return currentTotal;
  });
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []