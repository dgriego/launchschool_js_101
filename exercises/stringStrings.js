function stringy(number) {
  let stringy = '';

  for (let idx = 1; idx <= number; idx += 1) {
    if (idx % 2 === 1) {
      stringy += '1';
    } else {
      stringy += '0';
    }
  }

  return stringy;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");