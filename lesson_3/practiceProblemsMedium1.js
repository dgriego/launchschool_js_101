// Question 1
// const flint = 'The Flintstones Rock!';

// for (let idx = 1; idx <= 10; idx++) {
//   console.log(flint.padStart(idx + flint.length));
// }


// Question 2
// let munstersDescription = "The Munsters are creepy and spooky.";
// swap all the cases of the letters
// my solution
// munstersDescription = munstersDescription.split('').map((char) => {
//   if (char.match(/[a-z]/)) {
//     return char.toUpperCase();
//   } else if (char.match(/[A-Z]/)) {
//     return char.toLowerCase();
//   } else {
//     return char;
//   }
// });

// other solution
// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// console.log(munstersDescription.join(''));


// Question 3
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }

// refactor
// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   }
//   return factors;
// }

// console.log(factors(0));


// Question 4