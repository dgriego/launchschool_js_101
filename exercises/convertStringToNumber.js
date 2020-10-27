/* eslint-disable max-lines-per-function */
// need a dictionary that will store the string representation of a number
// as the key

function stringToInteger(intStr) {
  const stringToNumRef = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  let int = 0;

  const strArr = intStr.split('');

  let decrementer = strArr.length - 1;

  for (let idx = 0; idx <= strArr.length - 1; idx += 1) {
    let posMultiplier = 10 ** decrementer;
    int += posMultiplier * stringToNumRef[strArr[idx]];
    decrementer -= 1;
  }

  return int;
}

// need a dictionary that will store the string representation of a number
// as the key

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line max-statements
function stringToSignedInteger(intStr) {
  const stringToNumRef = {
    0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
  };

  let int = 0;
  const strArr = intStr.split('');
  let sign = strArr.shift();
  let decrementer = strArr.length - 1;

  for (let idx = 0; idx <= strArr.length - 1; idx += 1) {
    let posMultiplier = 10 ** decrementer;
    int += posMultiplier * stringToNumRef[strArr[idx]];
    decrementer -= 1;
  }

  if (sign === '-') {
    int = -int;
  }

  return int;
}

console.log(stringToSignedInteger("+4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true