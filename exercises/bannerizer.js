// Data structure will be a loop for this because I want to
// in order, print out a top line, middle formating, and then
// a bottom line that is identical to the top line

// a line consists of (by default)
// TOP LINE and BOTTOM LINE: 1+ 2- 1+
// MIDDLE LINE: 1/ 2'' 1/

// all content is put between the defaults and appended within
// if a string has the length of 4 - BOLD
// then TOP line will be: 1+ 6- 1+
// middle lint will be: 1| 6'' 1|
// +------+
// /      /
// / BOLD /
// /      /
// +------+

// TOP_OR_BOTTOM = '+' + '-'.repeat(2 + length of string) + '+'

function logInBox(message) {
  const calculatedPadding = 2 + message.length;
  const topAndBottomLine = `+${'-'.repeat(calculatedPadding)}+`;
  const middleEmptyLine = `|${(' ').repeat(calculatedPadding)}|`;
  const middleMessageLine = `| ${message} |`;

  console.log(topAndBottomLine);
  console.log(middleEmptyLine);
  console.log(middleMessageLine);
  console.log(middleEmptyLine);
  console.log(topAndBottomLine);
}

logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+