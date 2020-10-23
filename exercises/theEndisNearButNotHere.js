// function that returns the next to last word in the string argument
// words - any sequence of non-blank characters
// assume string will contain at least two words

function penultimate(str) {
  const strArr = str.split(' ');
  return strArr[strArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true