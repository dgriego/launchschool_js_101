// Write a function that takes a string consisting of zero or more
// space separated words, and returns an object that shows the
// number of words of different sizes.

// P
// INPUT: string
// OUTPUT: Object literal with keys as a length and value as a representation
// of the number of words with that length
// Explicit:
// - words consists of any sequence of non-space characters
// Implicit:
// - punctuation marks are considered part of the word
// - return empty Object on empty string

// E
// INPUT: 'one three four'
// OUTPUT: { "3": 1, "5": 1, "4": 1 }

// D
// Arrays for looping through the words
// Object literal for words of different sizes

// A
// INPUT: 'one three four'
// START
// initialize an empty object
// split the string of words into an array
// set incr = 0
//
// WHILE incr < string argument length
//   set currentWord = array at index[incr]
//   set lengthOfCurrentWord = currentWord.length
//
//   if object has the key (length of current word)
//     object[length of current word] += 1
//   else
//     object[length of current word] = 1
//   end
//
//   incr += 1
// END
//
// return the obj

function wordSizes(str) {
  if (!str) return {};

  const wordSizes = {};
  const words = str.split(' ');

  words.forEach((word) => {
    word = word.replace(/\W/g, '');
    const wordLength = word.length;

    if (wordSizes.hasOwnProperty(wordLength)) {
      wordSizes[wordLength] += 1;
    } else {
      wordSizes[wordLength] = 1;
    }
  });

  console.log(wordSizes);
  return wordSizes;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                         // {}
