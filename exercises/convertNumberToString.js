/* eslint-disable max-lines-per-function */
// one method
// determine size of number first to know what 10 to start off at

// if number is 4057

function signedIntegerToString(number) {
  const numberToStringRef = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'
  };

  let incrementer = 0;
  let numberArr = [];
  let sign = '';

  if (number > 0) {
    sign = '+';
  } else if (number < 0) {
    sign = '-';
  }

  number = Math.abs(number);
  while (true) {
    incrementer += 1;
    let quotient = parseInt(number / (10 ** incrementer), 10);

    if (quotient <= 0) {
      break;
    }

    const remainder = quotient % 10;
    numberArr.unshift(numberToStringRef[remainder]);
  }

  const lastNumber = numberToStringRef[number % 10];
  numberArr.push(lastNumber);

  if (sign) {
    numberArr.unshift(sign);
  }

  return numberArr.join('');
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");