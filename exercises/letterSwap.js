// write a function that swaps the first and last letters of every word.

// P
// INPUT: string of words
// OUTPUT: string of words where the first and last letters of each word
//         are swapped
// EXPLICIT:
//  - return a string
//  - assume every word will contain at least one letter
//  - string will always contain one word
//  - no leading, trailing, or repeated spaces
// IMPLICIT
//  - only a string will given as an argument
//

// E
// "george is cool" -> "eeorgg si looc"
// "what" -> "thaw"
// "a" -> "a"

// D
// array -> want to split the string of words into an array so I can loop
//          through each word to manipulate it

// A
//
// START
// if the length of the string is 1, I can return the string and break early
// split string into array of words by splitting off a space
// SET words = string.split(' ')
//
// want to create a new array withe same structure then I could possibly use map
// words.map ->
//   set lastLetter = word.slice(-1)
//   set middle = word.slice(1, -1)
//   set firstLetter = word[0]
//   return lastLetter + middle + firstLetter
//
// join words back together with a space
// return new string

function swap(strOfWords) {
  let words = strOfWords.split(' ').map((word) => {
    if (word.length === 1) return word;

    let lastLetter = word.slice(-1);
    let middle = word.slice(1, -1);
    let firstLetter = word[0];
    return lastLetter + middle + firstLetter;
  }).join(' ');

  console.log(words);
  return words;
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"