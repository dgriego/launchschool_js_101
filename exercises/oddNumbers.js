// Log all odd numbers from 1 to 99, inclusive, to the console.
// Log all numbers on separate lines.

for (let i = 0; i < 100; i += 1) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// another more elegant solution
// start loop from 1 and increment by 2
for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}