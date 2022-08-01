// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
describe("capitalPeople", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
}) 
it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
  expect(capitalPeople(people)).toEqual("[Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee.]")
  });

 
// ReferenceError: capitalPeople is not defined

// b) Create the function that makes the test pass.
// First I would destructure the object since only the first letters of the names key value pairs are being capitalized. Then .toUppercase the first letter (index[0]) of each word. There's about 1.5 weeks of attempts so I did not put all those on there. 
//Parameters: name and occupation, people
//Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
const name = people.map(value => value.name)
console.log(name)
// [ 'ford prefect', 'zaphod beeblebrox', 'arthur dent' ]
const occupation = people.map(value => value.occupation)
console.log(occupation)
// [ 'a hitchhiker', 'president of the galaxy', 'a radio employee' ]

// The issue I had was I was so stuck on destructuring the object but I did not know how to put it back together. I used string interpolation to get the sentence back together but trying to get the second word to capitalize was where I was really stuck. I am pretty happy that I used HOF because I was scared to even attempt it at first. 

const capitalPeople = (array) => {
    let singleWords = array.map(value => {
        return value[0].toUpperCase() + value.substring(1) + ` is ${occupation.shift()}.`
    })
    return singleWords
    }

console.log(capitalPeople(name))
// [
//     'Ford prefect is a hitchhiker.',
//     'Zaphod beeblebrox is president of the galaxy.',
//     'Arthur dent is a radio employee.'
//   ]
//I also have to figure out how call the class and not just the object. 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
describe("integersOnly", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    expect(integersOnly(hodgepodge1)).toEqual([2, 0, -1, 0]);
    expect(integersOnly(hodgepodge2)).toEqual([2, 1, -1])
  });
});

// ReferenceError: integersOnly is not defined


// b) Create the function that makes the test pass.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// Since the expected output is integers only, I knew I would have to filter out the integers. However, when I tried to use the modulo (thinking it was the same as remainder) operator it did not work. Led me to research the difference between modulo and remainder. Using .filter, I filtered out the integers from the array and then .map over the integers while getting their remainder when those integers were divided by three. Not going to lie, I was pretty happy that I was able to figure out how to use the HOF and that it worked!
//Parameters: const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false], const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 0, -1, 0 ], [ 2, 1, -1 ]
const integersOnly = (array) => {
  return array.filter(value => typeof value === 'number').map(value => value %= 3)
}

 console.log(integersOnly(hodgepodge1))
 console.log(integersOnly(hodgepodge2))

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4] 
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumCubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumCubed(cubeAndSum1)).toEqual(99);
    expect(sumCubed(cubeAndSum2)).toEqual(1125)
  });
});

// ReferenceError: sumCubed is not defined

// b) Create the function that makes the test pass.
// Declare a function: use .reduce()to calculate the sum and then cube the sum using **3; use foreach to cube it first then add together. <-- That was my initial thought process. If I just stuck with that thought process, my expected output was incorrect. So I did some calculating on the side and realized that each individual value has to be cubed (** 3) first. I used .map to iterate over each value and cube it. When the array came back [8, 27, 64] then I had to research how to add the values in the array to one another. An issue I had was not declaring sum as 0. I thought I could just put the "newArray" as what sum would equal. Once I put sum back to 0 and followed the example for loop, I was able to get the correct answer. 

// Set parameters: const cubeAndSum1 = [2, 3, 4], const cubeAndSum2 = [0, 5, 10]
// Expected Output: 99, 1125


const sumCubed = (array) => { 
  let newArray = array.map(value => value ** 3);
  let sum = 0
  for(let i=0; i<newArray.length; i++){
      sum += newArray[i]
  }
  return sum
}

console.log(sumCubed(cubeAndSum1))
console.log(sumCubed(cubeAndSum2))
