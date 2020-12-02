// write a function that takes a floating point number
// representing an angle between 0 and 360 degrees, and
// returns a string representing that angle in degrees,
// minutes, and seconds.

// P
// INPUT: floating point number
// OUTPUT: string represenation of degress in degrees°minutes'seconds"
// implied elements:
//  - if a whole number is passed as an arg, then there aren't minutes or
//    seconds, is this by nature of calculation or done with a check?
//  - 0 returns 0

// converting degrees to minutes formula
// m = (decimal version of degrees(dd) - Integer(dd)) * 60
// converting degrees to seconds
// s = (dd - Integer(dd) - (m/60)) x 3600

// D
// Integers to perform calculations
// Strings to represent the calculations in desired format

// A
// I want to perform calculations before generating a string
// but I probably want to initialize this string at the beginning of the
// function (but I probably won't need it)
//
// START
// set minutes = (degrees - Integer(degrees)) * 60
// set seconds = (degrees - Integer(degrees) - (minutes/60)) * 3600
let prefixWithZero = (num) => {
  if (num < 10) {
    return `0${num}`;
  }

  return String(num);
};

function dms(degrees) {
  let wholeDegrees = Math.floor(degrees);
  let minutes = Math.floor((degrees - wholeDegrees) * 60);
  let seconds = Math.floor(
    (degrees - wholeDegrees - (minutes / 60)) * 3600
  );

  let degreesStr = `${wholeDegrees}\xB0`;
  let minutesStr = `${prefixWithZero(minutes)}'`;
  let secondsStr = `${prefixWithZero(seconds)}"`;

  console.log(degreesStr + minutesStr + secondsStr);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
