// P
// determine the mean of the three scores passed to it
// and returns the letter associated with that grade
//
// GRADE LIST
// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'
//
// INPUT: 3 numbers
// OUTPUT: string (representing letter grade in A, B, C, D, F)
// REQUIREMENTS
//   EXPLICIT:
//     - all values entered are between 0 and 100
//     - return a string that represent a letter grade based on mean of 3 nums
//   IMPLICIT:
//     - need a reference to determine the letter grade for averaged number
//     - there will always be exactly 3 arguments?

// E
// getGrade(33, 33, 33) => 'F'

// D
// Use integers for basic math operations

// A
// SET scoreLetterGradeRef = gradeList^
// SET letterGrade = ''
// SET mean = (score1 + score2 + score3) / 3
// SET switch or if/else to determine the range of the number
//   reassign letterGrade to letter
// RETURN letterGrade

function getGrade(score1, score2, score3) {
  let letterGrade = '';
  const mean = (score1 + score2 + score3) / 3;

  if (mean >= 90 && mean <= 100) {
    letterGrade = 'A';
  } else if (mean >= 80 && mean < 90) {
    letterGrade = 'B';
  } else if (mean >= 70 && mean < 80) {
    letterGrade = 'C';
  } else if (mean >= 60 && mean < 70) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }

  console.log(letterGrade);
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"