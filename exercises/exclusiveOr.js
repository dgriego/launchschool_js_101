function xor(firstVal, secondVal) {
  // I need ONE to be true
  // checked for truthiness of first value
  // if second val was true then return false
  firstVal = !!firstVal;
  secondVal = !!secondVal;
  return Boolean(
    (firstVal === true && secondVal === false) ||
    (firstVal === false && secondVal === true)
  );
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);