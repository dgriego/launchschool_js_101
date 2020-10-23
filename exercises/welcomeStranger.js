// https://launchschool.com/exercises/1bd6be82

// takes 2 arguments, an array and an object
// array - 2 or more elements that when combined will produce persons name
// object - 2 keys "title" and "occupation"
// return - greeting that uses persons full name and mentions persons title and occupation
// return - "Hello, ${name}! Nice to have a ${title + occupation} around."

function greetings(nameArr, personInfo) {
  const name = nameArr.join(' ');
  const title = `${personInfo.title} ${personInfo.occupation}`;

  return `Hello, ${name}! Nice to have a ${title} around.`
}

console.log(greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" }));