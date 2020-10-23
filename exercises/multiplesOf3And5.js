// Write a function that computes the sum of all numbers
// between 1 and some other number, inclusive, that are multiples of 3 or 5

function multisum(maxInt) {
  let sum = 0;

  for (let i = 1; i <= maxInt; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
  return sum;
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168