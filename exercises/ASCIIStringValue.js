// Write a function that determines and returns the ASCII string value
// of a string passed in as an argument

function asciiValue(str) {
  // use charCodeAt to determine ascii value of character
  // initialize counter to store the ascii values to as I'm looping
  // split to convert string into array of characters
  // on each iteration of the loop I want to retrieve the ascii value
  // and then store in counter variable

  let asciiStringValue = 0;
  const charsArr = str.split(''); // ['F', 'o', 'u'...]

  for(let i = 0; i < charsArr.length; i += 1) {
    asciiStringValue += charsArr[i].charCodeAt();
  }

  console.log(asciiStringValue);
  return asciiStringValue;
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0