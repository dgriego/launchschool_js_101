// E
// [1, 2, 3] -> [[1, 2], [3]]

// D
// Array

// A
// length is 4 / 2 = 2
// index of the last position of the first half would be 2 - 1
//
// as i'm looping through, I add to first half as long as index is still <
// then the one defined above
//
// check if the length is odd, if it is odd, after we divide by 2
// then the first half limiter should be adjusted by 1
//
// Math.floor(length(5) / 2) === 2
// length % 2 === 1 (then odd)
//
//
// START ([1, 2, 3])
// set newArr = [[], []]
// set firstHalfLimiter = Math.floor(arrArg.length / 2) -> 1
//
// if (arrArg length is odd)
//    we adjust firstHalfLimiter by 1 -> now 2
//
// counter = 0
// while counter < arr length
//
// given we have a limiter that represents length rather than index
// as we loop through, we want to add to the first array if the index
// is less than the limiter
