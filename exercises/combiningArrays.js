// return an array containing the values of the two arrays
// there should be no duplication of values, even if there are
// duplicates in the original arrays

// P
// INPUT: two array args
// OUTPUT: one array
// - assume that both args will be arrays
// - new array should not have any duplicates
// - will both arrays only be one dimension?
// - do we ever account for undefined values? or null?

// E
// [1, 2, 3], [2, 4, 6, 1] -> [1, 2, 3, 4, 6]

// D
// Array

// I could loop through each array one at a time?
// possible to loop through both at the same time?  Would have to have an
// inner loop
//
// START
// set union = []
//
// BEGIN looping through array arg1
//   set element as current element in iteration (assuming a count mech..)
//   check if the current value exists in union (includes)
//   if it does, continue
//
//   add element to union
// END
//
// return union
//
// check, which length of the array is the longest and save that as the looping
// array.
// because I will encounter undefined values when iterating through smaller
// array, then I should have union value existence check in addition to a
// falsy evaluation check (or more explicitly 'undefined');
//
//

// eslint-disable-next-line max-lines-per-function
function union(arr1, arr2) {
  let union = [];

  arr1.forEach((element) => {
    if (!union.includes(element)) {
      union.push(element);
    }
  });

  arr2.forEach((element) => {
    if (!union.includes(element)) {
      union.push(element);
    }
  });

  console.log(union);
}

union([1, 3, 5], [3, 6, 9]);
union([1, 2, 3], [2, 4, 6, 1]);
