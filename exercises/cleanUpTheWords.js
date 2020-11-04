// P
// INPUT: string
// OUTPUT: string with non-alphabetic chars replaced with spaces
// EXPLICIT:
//   - replace non-alpha chars with a space
//   - only use one space when non-alpha chars in a row
//
// E
// cleanUp("&&sorry about* that---") => ' sorry about that '

// D
// Array with looping mechanism

// A
// initialize new empty str
// convert arg to string and loop through each char
// check for non-alpha with regex (/[a-zA-Z]/)
// if the char is non-alpha add a space to new str
// if the previous index was a space, then continue to next char


// C
function cleanUp(line) {
  let cleanLine = '';
  let lineArr = line.split('');

  for (let idx = 0; idx < lineArr.length; idx += 1) {
    let char = lineArr[idx];
    let previousChar = lineArr[idx - 1];

    if (!char.match(/[a-zA-Z]/)) {
      if (previousChar && !previousChar.match(/[a-zA-Z]/)) continue;
      cleanLine += ' ';
    } else {
      cleanLine += char;
    }
  }

  console.log(cleanLine);
}

// good succinct solution
function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}

cleanUp("&&sorry about* that---");
cleanUp("---what's my +*& line?");