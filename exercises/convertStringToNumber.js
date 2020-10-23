// need a dictionary that will store the string representation of a number
// as the key

function stringToInteger(intStr) {
  const stringToNumRef = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
  }

  // creat initial var to store int
  let int = 0;

  // convert intStr to array of chars
  const strArr = intStr.split('');

  // depending on length of string I want to ensure I'm placing the number
  // at the proper position
  // if the int is 4352
  // 10 is base value to determine position
  // if position is 4, 10 * 4

  // index 0 - end of arr
  // 10 multiplier to go from highest position to lowest
  //
  // string length = 4
  // 0, 1000 (10 ** 3)
  // 1, 100 (10 ** 2)
  // 2, 10 (10 ** 1)
  // 4, 1 (10 ** 0)

  let decrementer = strArr.length - 1;

  for (let i = 0; i <= strArr.length - 1; i += 1) {
    let posMultiplier = 10 ** decrementer;
    int += posMultiplier * stringToNumRef[strArr[i]];
    decrementer -= 1;
  }

  return int;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true