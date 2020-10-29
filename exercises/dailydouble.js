// returns new string
// returns a new string with all the consecutive repeated
// characters shortened to one character

// Data structure
// Str to array, order matters as a loop

// gggggg
// index 0 will be g
// index 1 will be g
// I could check if the previous value matches the current value
// and push to array if it does not
//
// current index - 1 should allow me to retrieve the previous value, with the
// exception of the index being 0 (since it's the start)

// PSEUDO
//
// set newStr = empty str
// set incrementer = 0
// BEGIN
//   break loop when increment === length of the str
//   set current char to index 0 of str
//
//   if index !== 0 and (current_char !== previous char (index - 1))
//   if the index is not the start index and
//   the previous char doesn't match then push to newStrArr
//   increment the incrementer by 1
//
// return the newStr

function crunch(str) {
  let newStr = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    const currentChar = str[idx];
    const previousChar = idx === 0 ? null : str[idx - 1];

    if (currentChar !== previousChar) {
      newStr += currentChar;
    }
  }

  console.log(newStr);
  return newStr;
}
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""