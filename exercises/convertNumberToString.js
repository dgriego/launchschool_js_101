// one method
// determine size of number first to know what 10 to start off at

// if number is 4057

function integerToString(number) {
  const numberToStringRef = {
    0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9'
  };

  let incrementer = 0;
  let numberArr = [];

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

  return numberArr.join('');
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"