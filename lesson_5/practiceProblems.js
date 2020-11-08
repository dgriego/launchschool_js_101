// 1
// How would you order the following array of number
// strings by descending numeric value (largest number value to smallest)?
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => Number(b) - Number(a));


// 2
// How would you order the following array of objects based on
// the year of publication of each book, from the earliest to the latest?
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => Number(a.published) - Number(b.published));


// 3
// For each of these collection objects,
// demonstrate how you would access the letter g.

// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);


// 4
// For each of these collection objects, demonstrate
// how you would change the value 3 to 4.
let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;


// 5
// Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = munsters.reduce((age, munster) => {
  if (munster.gender === 'male') {
    return age + munster.age;
  } else {
    return age + 0;
  }
}, 0);


// 6
// Given this previously seen family object,
// print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach((name) => {
  let age = munsters[name].age;
  let gender = munsters[name].gender;
  console.log(`${name} is a ${age}-year-old ${gender}`);
});


// 7
// Given the following code, what will the final values of a and b be?
// Try to answer without running the code.
let a = 2;
let b = [5, 8];
let arr = [a, b]; // [2, [5, 8]]

arr[0] += 2; // [4, [5, 8]]
arr[1][0] -= a; // [4, [3, 8]]
// a will be unaffected
// be will be [3, 8]


// 8
// Using the forEach method, write some code to output all vowels
// from the strings in the arrays. Don't use a for or while loop.
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

String(Object.values(obj)).split('').forEach((char) => {
  if ('aeiou'.includes(char)) {
    console.log(char);
  }
});


// 9
// Given the following data structure, return a new array with
// the same structure, but with the subarrays ordered --
// alphabetically or numerically as appropriate -- in ascending order.
let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// asc
let newArr = arr.map((innArr) => {
  let arrCopy = [...innArr];
  if (typeof innArr[0] === 'string') {
    return arrCopy.sort();
  } else {
    return arrCopy.sort((a, b) => a - b);
  }
});


// 10
// desc
let newArr = arr.map((subArr) => {
  return [...subArr].sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });
});


// 11
// new array with values incremented by 1
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let newArr = arr.map((obj) => {
  let newObj = {};

  Object.entries(obj).forEach((entry) => {
    newObj[entry[0]] = entry[1] + 1;
  });

  return newObj;
});


// 12
// Given the following data structure, use a combination of methods,
// including filter, to return a new array identical in structure
// to the original, but containing only the numbers that are multiples of 3.
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
arr.map((subArr) => {
  return subArr.filter((num) => num % 3 === 0);
});


// 13
// Given the following data structure, sort the array
// so that the sub-arrays are ordered based on the sum
// of the odd numbers that they contain.
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
let sortedArr = [...arr].sort((a, b) => {
  let aSum = a.filter(num => num % 2 === 1)
              .reduce((acc, val) => acc + val);
  let bSum = b.filter(num => num % 2 === 1)
              .reduce((acc, val) => acc + val);

  return aSum - bSum;
});


// 14
// Given the following data structure write some code
// to return an array containing the colors of the fruits
// and the sizes of the vegetables. The sizes should be uppercase,
// and the colors should be capitalized.
let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});


// 15
// Given the following data structure, write some code to
// return an array which contains only the objects
// where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr.filter((obj) => {
  return Object.values(obj).every((subArr) => {
    return subArr.every((num) => num % 2 === 0);
  });
});


// 16
// Given the following data structure, write some code that
// returns an object where the key is the first item
// in each subarray, and the value is the second.
let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let obj = {};

arr.forEach((subArr) => {
  obj[subArr[0]] = obj[subArr[1]];
});


// 17
// UUID
function uuid() {
  const chars = '0123456789abcdef';

  let uuidArr = [8, 4, 4, 4, 12].map((num) => {
    let section = '';

    for (let idx = 0; idx < num; idx += 1) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      section += chars[randomIndex];
    }

    return section;
  });

  return uuidArr.join('-');
}